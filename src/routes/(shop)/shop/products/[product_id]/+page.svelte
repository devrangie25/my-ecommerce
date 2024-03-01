<script lang="ts">
	import { goto } from '$app/navigation';
	import PocketBase from 'pocketbase';
	import cartStore from '$lib/stores/cart';
	import SideDrawer from '$lib/components/frame/+side-drawer.svelte';
	import Alert from '$lib/components/products/+alert.svelte';
	import { onMount } from 'svelte';

	export let data: any;

	const pb = new PocketBase('http://127.0.0.1:8090');

	let cart: any = [];
	let currentProduct: any = data.pb_product_by_id;
	let currentUser: any = data.user
	let products: any = data.pb_products;
	let isAddedToCart: boolean = false;
	let isDrawerOpen = false;
	let productCartForm: any = {
		product_id: null,
		product: null,
		date_added: null,
		size: null,
		color: null,
		price: 0,
		quantity: 0
	};

	$: {
		if (productCartForm.color !== null) {
			getSingleProductByColor(productCartForm.color, currentProduct.brand, currentProduct.style);
		}
	}

	$: {
		cartStore.subscribe((value: any) => {
			cart = value;
		});
	}

	onMount(() => {
		products = localStorage.getItem('products');
		products = JSON.parse(products);

		if (currentProduct) {
			productCartForm.color = currentProduct.color;
		}
	});

	// const getSingleProductByColorPb = async (color: string, brand: string, category: string) => {
	// 	try {
	// 		const record: any = await pb
	// 			.collection('products')
	// 			.getFirstListItem(`color='${color}' && brand='${brand}' && category='${category}'`);
	// 		currentProduct = record;
	// 	} catch (error) {
	// 		console.error('error', error);
	// 	}
	// };

	const getSingleProductByColor = (color: string, brand: string, style: string) => {
		if (products.length > 0) {
			const product = products.filter(
				(item: any) => item.color === color && item.brand === brand && item.style === style
			);
			currentProduct = product[0];
		}
	};

	const handleDrawerEvent = (event: any) => {
		isDrawerOpen = event.detail.open;
	};

	const hasNullValue = (obj: any) => {
		for (const value of Object.values(obj)) {
			if (value === null) {
				return true;
			}
		}
		return false;
	};

	const handleSelectSize = (selectedSize: number) => {
		productCartForm.size = selectedSize;
		isDrawerOpen = false;
	};

	const convertStringToNumber = (str: string) => {
		// Remove commas if present and convert to number
		const numberValue = parseFloat(str.replace(/,/g, ''));
		// Check if the conversion was successful
		if (isNaN(numberValue)) {
			throw new Error('Invalid number format');
		}
		return numberValue;
	};

	/** need to implement a logic if the user is logged in*/
	const addToCart = (cart: any, newItem: any) => {
		// Find index of item with matching id, color, and size in the cart
		const index = cart.findIndex(
			(item: any) =>
				item.product_id === newItem.product_id &&
				item.color === newItem.color &&
				item.size === newItem.size
		);

		if (index !== -1) {
			// If item exists in the cart, update the quantity
			cart[index].quantity += newItem.quantity;
			// update quantity to db
		} else {
			// If item does not exist in the cart, add it
			// add item to db
			cart.push({
				product_id: newItem.product_id,
				product: newItem.product,
				color: newItem.color,
				price: newItem.price,
				size: newItem.size,
				quantity: newItem.quantity,
				date_added: new Date()
			});
		}

		// Filter out items with quantity less than or equal to 0, this is optional since all quantity is default to 1 when added to cart
		cart = cart.filter((item: any) => item.quantity > 0);

		return cart;
	};

	const handleAddToCart = () => {
		if (!productCartForm.size) {
			isDrawerOpen = true;
		} else {
			productCartForm.date_added = new Date();
			productCartForm.product_id = currentProduct.id;
			productCartForm.product = currentProduct;
			productCartForm.price = currentProduct.price;
			productCartForm.quantity = 1;
			const hasNull = hasNullValue(productCartForm);
			if (!hasNull) {
				let updatedCart = addToCart(cart, productCartForm);

				updatedCart = updatedCart.map((cartItem: any) => {
					return {
						...cartItem,
						subtotal: cartItem.quantity * convertStringToNumber(cartItem.price)
					};
				});

				cartStore.update(() => {
					return [...updatedCart];
				});

				isAddedToCart = true;
				setTimeout(() => {
					isAddedToCart = false;
				}, 3000);
			}
		}
	};

    const fetchCustomerCart = async () => {
        try {
            const customerCart = await pb.collection('customer_carts').getList(1, 50, {
				filter: `customer_id='${currentUser.id}'`
			});
			console.log('customerCart', customerCart)
        } catch (err) {
            console.log('ERROR', err)
        }
    }

	// need to create db api.logic for add, update, cart
	const handleUpdateCartItemQty = async(item: any) => {
		try {
			const data = {
				"product_id": item.product_id,
				"color": item.color,
				"price": item.price,
				"size": item.size,
				"quantity": item.quantity,
				"subtotal": item.subtotal,
				"date_added": item.date_added
			};

			const updatedCartItem = await pb.collection('carts').update('RECORD_ID', data);
			console.log('updatedCartItem', updatedCartItem)
		} catch (error) {
			console.error('error', error);
		}
	}
	
	const handCreateCustomerCart = async(cartItemResponse: any) => {
		try {
			const customerCartData = {
				"customer_id": [
					currentUser.id
				],
				"cart_id": [
					cartItemResponse.id
				]
			};
			const customerCartResponse = await pb.collection('customer_carts').create(customerCartData);
			return customerCartResponse
		} catch (error) {
			console.error('error', error);
		}
	}

	const handleAddToCartApi = async(item: any) => {
		try {
			const cartItemData = {
				"product_id": item.product_id,
				"color": item.color,
				"price": item.price,
				"size": item.size,
				"quantity": item.quantity,
				"subtotal": item.subtotal,
				"date_added": item.date_added
			};

			const cartItemResponse = await pb.collection('carts').create(cartItemData);
			const customerCartResponse = await handCreateCustomerCart(cartItemResponse)
			console.log('customerCartResponse', customerCartResponse)
		} catch (error) {
			console.error('error', error);
		}
	}

	const handleNavClick = () => {
		goto('/shop/products');
	};
</script>

<div class="flex mb-8 px-4 lg:px-0 items-center justify-between">
	<div>
		<button class="flex items-center" on:click={handleNavClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="#a36448"
				class="w-4 h-4"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
			<div class="ml-2 font-harmonia font-medium text-2xl hover:text-secondary">
				Continue shopping
			</div>
		</button>
	</div>
	{#if isAddedToCart}
		<div class="toast toast-center border-none lg:w-1/4 w-1/2">
			<div class="alert text-white rounded border-none flex justify-center">
			  <span>Successfully added to cart</span>
			</div>
		  </div>
	{/if}
</div>
<div class="px-4 md:px-0 grid lg:grid-cols-3 grid-cols-1 gap-4">
	<div class="md:col-span-2 col-span-1">
		<div class="grid grid-cols-2 gap-4">
			{#if currentProduct?.product_images.length > 0}
				{#each currentProduct.product_images as product_img, ind}
					<div class="card">
						<img
							src={`${data.APP_ENVIRONMENT}/api/files/${currentProduct.collectionName}/${currentProduct.id}/${product_img}`}
							alt={`product-image-${ind}`}
							class="product-img object-cover"
						/>
					</div>
				{/each}
			{/if}
		</div>
		<!-- <div class="carousel w-full">
			{#if currentProduct?.product_images.length > 0}
				{#each currentProduct.product_images as product_img, ind}
					<div id={`slide${ind}`} class="carousel-item relative w-full">
						<img
							src={`${data.APP_ENVIRONMENT}/api/files/${currentProduct.collectionName}/${currentProduct.id}/${product_img}`}
							alt={`product-image-${ind}`}
							class="w-full"
						/>
						<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						  <a href={`#slide${ind < 1 ? currentProduct.product_images.length - 1 : ind - 1}`} class="btn btn-circle">❮</a> 
						  <a href={`#slide${ind === currentProduct.product_images.length - 1 ? 0 : ind + 1}`} class="btn btn-circle">❯</a>
						</div>
					  </div> 
				{/each}
			{/if}
		</div> -->
	</div>
	<div class="col-span-1 p-4 mt-6 lg:mt-0">
		<div class="flex justify-between mb-4">
			<div class="font-frank text-3xl font-medium">
				<div>
					{currentProduct.title}
				</div>
				<div>
					{currentProduct.category}
				</div>
			</div>

			<div>
				<div class="font-harmonia text-3xl font-medium">
					₱{currentProduct.price}
				</div>
			</div>
		</div>

		<div class="mb-2">
			<div class="rating rating-sm gap-x-1">
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
				<input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
			</div>
		</div>

		<div>
			<div class="font-harmonia text-xs font-medium">
				{currentProduct.description || ''}
			</div>
		</div>

		<div class="divider my-6"></div>

		<div class="mb-4">
			<div class="font-frank text-2xl font-medium mb-2">Colors</div>
			{#if currentProduct.colors}
				<div class="join gap-x-2">
					{#each currentProduct.colors as color, ind}
						<div class="form-control">
							<input
								type="radio"
								name="radio-color"
								class="radio radio-lg"
								checked
								value={color.title}
								bind:group={productCartForm.color}
								style={`background-color: ${color.color}; border-radius: 50%;`}
							/>
						</div>
					{/each}
				</div>
			{/if}
		</div>

		<div class="divider my-6"></div>

		<div class="mb-4">
			<div class="font-frank text-2xl font-medium mb-2">Sizes</div>
			<div class="font-harmonia text-xs font-medium mb-3">
				This style is true to size, you can choose your usual size. Find your shoe size with our
				Size chart or Shoe Sizer
			</div>
			<div>
				<button
					on:click={() => (isDrawerOpen = !isDrawerOpen)}
					class={`btn btn-block bg-white rounded-lg border-0 hover:bg-accent font-sans font-semibold text-lg  flex justify-between px-6 ${productCartForm.size ? 'items-center h-20' : 'h-14'}`}
				>
					{#if productCartForm.size}
						<div>
							<div class="text-black text-xl -ml-8">
								{productCartForm.size}
							</div>
							<div class="-mt-2">
								<button class="btn-circle circle"></button>
								<span class="text-slate-400 text-xs"> In stock </span>
							</div>
						</div>
					{:else}
						Choose a size
					{/if}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</button>
			</div>
		</div>

		<div class="divider my-6"></div>

		<div class="mb-4">
			<div class="mb-4">
				<button
					on:click={handleAddToCart}
					class="btn btn-secondary btn-block h-16 btn-circle font-harmonia font-semibold text-xl hover:bg-neutral"
					>Add to cart - ₱{currentProduct.price}</button
				>
			</div>
			<div class="flex items-center justify-center px-4 gap-x-2">
				<div class="badge badge-lg border-none font-harmonia font-semibold h-8">
					afterpay
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						class="w-4 h-4 ml-1"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
						/>
					</svg>
				</div>
				<div class="font-harmonia font-medium text-base">
					available for orders between $1 - $2,000
				</div>
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div class="divider my-6"></div>

		<div>
			<div class="flex items-center mb-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#a36448"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
					/>
				</svg>
				<span class="ml-1 text-primary font-semibold font-harmonia text-xs">
					FREE SHIPPING ON $125 ORDERS
				</span>
			</div>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#a36448"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
					/>
				</svg>

				<span class="ml-1 text-primary font-semibold font-harmonia text-xs">
					FREE 30 DAY RETURNS
				</span>
			</div>
		</div>
	</div>

	<SideDrawer padding="p-0" width="lg:w-1/4 w-3/4" isOpen={isDrawerOpen} on:drawer={handleDrawerEvent}>
		<div class="navbar bg-info px-6 h-20">
			<div class="flex-1">
				<span class="text-2xl font-semibold font-harmonia">Choose a size</span>
			</div>
			<div class="flex-none">
				<button class="btn btn-square btn-ghost" on:click={() => (isDrawerOpen = false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>

		<div class="p-6">
			{#if currentProduct.sizes}
				<div class="join join-vertical w-full">
					{#each currentProduct.sizes as size}
						<button
							class="btn btn-outline btn-info rounded-xl join-item flex items-center justify-start h-20"
							on:click={() => handleSelectSize(size)}
						>
							<div>
								<div class="text-black text-lg -ml-8">
									{size}
								</div>
								<div>
									<button class="btn-circle circle"></button>
									<span class="text-slate-400 text-xs"> In stock </span>
								</div>
							</div>
						</button>
					{/each}
				</div>
			{/if}
		</div>
	</SideDrawer>
</div>

<style>
	.product-img {
		height: 100%;
	}

	.toast {
		z-index: 100;
	}

	.alert {
		background-color: #a36448;
	}
	.badge {
		background-color: #b2fce4;
	}
	.side-bar-header {
		background-color: rgba(244, 230, 217);
	}
	.circle {
		width: 5px;
		height: 5px;
		background-color: #5cb85c;
	}
</style>
