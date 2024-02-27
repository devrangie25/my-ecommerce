<script lang="ts">
	import { onMount } from 'svelte';
	import SideDrawer from '$lib/components/frame/+side-drawer.svelte';

	export let data: any;

	let currentProduct: any = data.pb_product_by_id;

	let isDrawerOpen = false;

	console.log({ currentProduct });

	const handleDrawerEvent = (event: any) => {
		isDrawerOpen = event.detail.open;
	};
</script>

<div class="px-4 md:px-0 grid grid-cols-3 gap-4">
	<div class="col-span-2">
		<div class="grid grid-cols-2 gap-4">
			{#each currentProduct.product_images as product_img, ind}
				<div class="card">
					<img
						src={`http://127.0.0.1:8090/api/files/${currentProduct.collectionName}/${currentProduct.id}/${product_img}`}
						alt={`produc-image-${ind}`}
						class="product-img"
					/>
				</div>
			{/each}
		</div>
	</div>
	<div class="col-span-1 p-4">
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
			<div class="flex gap-x-2">
				<button class="btn-circle bg-black btn-sm"></button>
				<button class="btn-circle bg-warning btn-sm"></button>
				<button class="btn-circle bg-info btn-sm"></button>
			</div>
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
					class="btn btn-block bg-white rounded-lg border-0 hover:bg-accent font-sans font-semibold text-lg h-14 flex justify-between px-6"
				>
					Choose a size
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
					class="btn btn-secondary btn-block h-16 btn-circle font-harmonia font-semibold text-xl"
					>Add to cart - ₱{currentProduct.price}</button
				>
			</div>
			<div class="flex items-center px-4 gap-x-2">
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

	<SideDrawer isOpen={isDrawerOpen} on:drawer={handleDrawerEvent} />
</div>

<style>
	.product-img {
		height: 668px;
	}
	.badge {
		background-color: #b2fce4;
	}
</style>
