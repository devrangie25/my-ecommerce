<script lang="ts">
	import { onMount } from 'svelte';
	import cartStore from '$lib/stores/cart';
	import checkoutStore from '$lib/stores/checkout';
	import { goto } from '$app/navigation';

	export let data;

	let cart: any = [];
	let subtotal: number = 0;

	$: {
		cartStore.subscribe((value: any) => {
			cart = value;
			subtotal = cart
				.map((cartItem: any) => cartItem.subtotal)
				.reduce((result: number, current: number) => result + current, 0);
		});
	}

	$: {
		checkoutStore.subscribe((value: any) => {
			console.log('Checkout Store in Cart Page', value);
		});
	}

	const formatPeso = (amount: number) => {
		// Replace 'en-PH' with the appropriate locale for Peso currency in your case
		const formatter = new Intl.NumberFormat('en-PH', {
			style: 'currency',
			currency: 'PHP', // Currency code for Peso
			minimumFractionDigits: 2 // Minimum number of fraction digits
		});

		return formatter.format(amount);
	};

	const convertStringToNumber = (str: string) => {
		// Remove commas if present and convert to number
		const numberValue = parseFloat(str.replace(/,/g, ''));

		if (isNaN(numberValue)) {
			throw new Error('Invalid number format');
		}

		return numberValue;
	};

	const removeItemFromCart = async (currentItem: any, index: number) => {
		// cartStore.update((existingCart) => existingCart.filter((cartItem: any) => cartItem !== item));
		let updatedCart = await cart.filter((item: any, ind: number) => ind !== index);
		cartStore.update(() => {
			return [...updatedCart];
		});
	};

	const handleIncrement = async (currentItem: any, index: number) => {
		if (cart.length > 0) {
			let updatedCart = await cart.map((item: any, itemInd: number) => {
				if (item.product_id === currentItem.product_id && itemInd === index) {
					return {
						...item,
						quantity: (item.quantity += 1),
						subtotal: item.subtotal + convertStringToNumber(item.price)
					};
				}
				return item;
			});

			cartStore.update(() => {
				return [...updatedCart];
			});
		}
	};

	const handleDecrement = async (currentItem: any, index: number) => {
		if (cart.length > 0) {
			let updatedCart = await cart.map((item: any, itemInd: number) => {
				if (item.product_id === currentItem.product_id && itemInd === index) {
					return {
						...item,
						quantity: (item.quantity -= 1),
						subtotal: item.subtotal - convertStringToNumber(item.price)
					};
				}
				return item;
			});

			cartStore.update(() => {
				return [...updatedCart];
			});
		}
	};

	const handleCheckoutItems = () => {
		checkoutStore.update(() => {
			return { cart, subtotal }
		});

		goto('/checkout');
	};
</script>

<div>
	{#if cart.length > 0}
		<div class="grid lg:grid-cols-2 gap-10">
			<div class="col-span-1 card bg-white h-fit">
				<div class="card-body">
					<div class="flex justify-between cart-title font-harmonia text-2xl font-semibold">
						<div>Your bag</div>
						<div>items</div>
					</div>
					{#each cart as item, ind}
						<div>
							<div class="divider"></div>
							<div class="flex gap-x-2">
								<div class="flex none">
									<img
										src={`${data.APP_ENVIRONMENT}/api/files/${item.product.collectionName}/${item.product_id}/${item.product.product_img}`}
										alt={`produc-image-${ind}`}
										class="rounded-lg"
										width="120"
									/>
								</div>
								<div class="flex-grow p-2">
									<div class="flex justify-between h-1/2">
										<div>
											<div class="text-xl font-harmonia">
												<span class="font-semibold">
													{item.product.title}
												</span>
												: <span class="font-medium"> {item.color} </span>
											</div>
											<div class="font-medium text-md text-slate-500 font-harmonia">
												Size: {item.size}
											</div>
										</div>

										<div>
											<button
												on:click={() => removeItemFromCart(item, ind)}
												class="btn btn-square btn-sm"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-5 h-5"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
													/>
												</svg>
											</button>
										</div>
									</div>

									<div class="flex items-end justify-between h-1/2">
										<div
											class="flex counter justify-evenly h-9 items-center rounded-full counter-btn-container"
										>
											<button class=" text-white" on:click={() => handleDecrement(item, ind)}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="#000000"
													class="w-4 h-4"
												>
													<path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
												</svg>
											</button>
											<div class="text-lg font-semibold text-slate-600">{item.quantity}</div>
											<button class=" text-white" on:click={() => handleIncrement(item, ind)}>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="#000000"
													class="w-4 h-4"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M12 4.5v15m7.5-7.5h-15"
													/>
												</svg>
											</button>
										</div>

										<div>
											<div class="flex items-end font-sans font-semibold text-slate-500 text-md">
												{formatPeso(item.subtotal)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="col-span-1 card h-full">
				<div class="card-body">
					<div class="text-center text-secondary font-harmonia font-semibold">
						<div class="text-2xl">Free shipping starting at C$125</div>
						<div class="text-2xl">Free 30 day returns</div>
						<div class="text-md">Does not apply to final sales</div>
					</div>
					<div class="divider my-4 px-14"></div>
					<div class="text-center font-harmonia pb-4 pt-2">
						<div class="text-xl font-medium">Order summary</div>
						<div class="subtotal font-semibold py-2">Subtotal: {formatPeso(subtotal)}</div>
						<div class="text-xl font-medium">Taxes and Shipping calculated at checkout</div>
					</div>
					<div class="divider my-4 px-14"></div>

					<div class="xl:px-24 md:px-12 mb-4">
						<button
							class="btn btn-secondary btn-block h-24 btn-circle text-2xl font-semibold text-white"
							on:click={handleCheckoutItems}>Continue to checkout</button
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
			</div>
		</div>
	{:else}
		<div
			class="card w-full bg-white h-96 flex justify-center items-center text-slate-400 text-4xl font-harmonia font-medium"
		>
			Your bag is empty
		</div>
	{/if}
</div>

<style>
	.counter-btn-container {
		width: 100px;
	}
	.subtotal {
		font-size: 40px;
		line-height: 48px;
	}

	.counter {
		background-color: #e8e5e5;
	}

	.badge {
		background-color: #b2fce4;
	}
</style>
