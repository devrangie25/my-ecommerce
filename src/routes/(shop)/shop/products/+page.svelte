<script lang="ts">
	import ProductsController from '$lib/components/products/+products-controller.svelte'
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import productsStore from '$lib/stores/products';
	import SideDrawer from '$lib/components/frame/+side-drawer.svelte';
	import Dropdown from '$lib/components/products/+dropdown.svelte';

	export let data: any;

	$: {
		productsStore.subscribe((value: any) => {
			if (browser) {
				localStorage.setItem('products', JSON.stringify(value));
			}
		});
	}

    $: mdWidthCondition = innerWidth < 1024

	let products: Array<any> = [];

	let hoveredImage: number | null = null;

	let isDrawerOpen: boolean = false

	let innerWidth = 0
    let innerHeight = 0

	onMount(() => {
		products = [...data.pb_products];
		productsStore.update(() => {
			return [...products];
		});
		hoveredImage = null;
	});
	
	const handleDrawerEvent = (event: any) => {
		isDrawerOpen = event.detail.open;
	};

	const handleClickProduct = (productId: any) => {
		goto(`/shop/products/${productId}`);
	};

	const handleHover = (id: any) => {
		hoveredImage = id;
	};
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="px-10 md:px-0">
	<div class="mb-4 lg:text-6xl md:text-5xl text-4xl font-semibold font-harmonia">High end women's shoes</div>
	<div class="lg:text-xl md:text-lg text-base font-medium font-harmonia">
		Well designed shoes made from quality materials.
	</div>

	<div class="lg:flex hidden items-center justify-end">
		<Dropdown />
	</div>

	<div class="mt-10">
		<div class="lg:hidden grid grid-cols-2 gap-x-4">
			<button class="btn bg-white border-none btn-ghost rounded" on:click={() => (isDrawerOpen = !isDrawerOpen)}> Refine By </button>
			<button class="btn bg-white border-none btn-ghost rounded"> Manual </button>
		</div>
		<div class="lg:hidden flex divider py-4"></div>
		<div class="grid lg:grid-cols-4 md:grid-cols-3 md:gap-6 gap-4">
			<div class="lg:col-span-1 lg:block hidden lg:mb-0 mb-6">
				<ProductsController sidebar={mdWidthCondition}/>
			</div>

			<div class="md:col-span-3 col-span-4">
				{#if products.length > 0}
					<div class="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
						{#each products as product (product.id)}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							{#if !product.product_hovered_img}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div on:click={() => handleClickProduct(product.id)} class="card w-full rounded-lg">
									<figure>
										<img
											src={`${data.APP_ENVIRONMENT}/api/files/${product.collectionName}/${product.id}/${product.product_img}`}
											alt={product.title}
											class="image rounded-lg product-img"
											loading="lazy"
										/>
									</figure>
									<div class="mt-2">
										<div class="font-semibold">
											<div class="text-base flex justify-between">
												<span>
													{product.title}
												</span>
												<span class="text-slate-500">
													₱{product.price}
												</span>
											</div>
										</div>
										<p class="text-slate-500 text-base font-harmonia font-medium">
											{product.category || 'category'}
										</p>
									</div>
								</div>
							{:else}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<div
									class="card w-full rounded-lg"
									on:mouseenter={() => handleHover(product.id)}
									on:mouseleave={() => handleHover(null)}
									on:click={() => handleClickProduct(product.id)}
								>
									<figure>
										{#if hoveredImage === product.id}
											<img
												src={`${data.APP_ENVIRONMENT}/api/files/${product.collectionName}/${product.id}/${product.product_hovered_img}`}
												alt={product.title}
												class="image rounded-lg product-img"
												loading="lazy"
											/>
										{:else}
											<!-- svelte-ignore a11y-img-redundant-alt -->
											<img
												src={`${data.APP_ENVIRONMENT}/api/files/${product.collectionName}/${product.id}/${product.product_img}`}
												alt={product.title}
												class="image rounded-lg product-img"
												loading="lazy"
											/>
										{/if}
									</figure>
									<div class="mt-2">
										<div class="font-semibold">
											<div class="text-base flex justify-between">
												<span>
													{product.title}
												</span>
												<span class="text-slate-500">
													₱{product.price}
												</span>
											</div>
										</div>
										<p class="text-slate-500 text-base font-harmonia font-medium">
											{product.category || 'category'}
										</p>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<SideDrawer padding="p-0" width="w-3/4" isOpen={isDrawerOpen} on:drawer={handleDrawerEvent}>
	<div class="navbar bg-info px-6 h-20">
		<div class="flex-1">
			<span class="text-2xl font-semibold font-harmonia">Refine By</span>
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
		<ProductsController sidebar={mdWidthCondition} />
	</div>
</SideDrawer>

<style>
	.image {
		width: 100%;
		transition: transform 0.1s ease-in-out;
	}
	/* Breakpoint prefix	Minimum width	CSS
    sm	640px	@media (min-width: 640px) { ... }
    md	768px	@media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... } */
	@media (min-width: 100px) {
		.product-img {
			height: 100%;
		}
	}

	@media (min-width: 640px) {
		.product-img {
			height: 100%;
		}
	}

	@media (min-width: 768px) {
		.product-img {
			height: 100%;
		}
	}

	@media (min-width: 1024px) {
		.product-img {
			height: 100%;
		}
	}

	@media (min-width: 1280px) {
		.product-img {
			height: 480px;
		}
	}
</style>
