<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import productsStore from '$lib/stores/products';

	import Dropdown from '$lib/components/products/+dropdown.svelte';

	export let data: any;

	$: {
		productsStore.subscribe((value: any) => {
			if (browser) {
				localStorage.setItem('products', JSON.stringify(value))
			}
		});
	}

	let products: Array<any> = [];
	let controllers: Array<any> = [
		{
			title: 'Sizes / Pointures',
			id: 'sizes-pointures'
		},
		{
			title: 'Colours / Couleurs',
			id: 'colours-couleurs'
		},
		{
			title: 'Heel height / Hauteur du talon',
			id: 'heel-height-hauteur-du-talon'
		},
		{
			title: 'Materials / Matériaux',
			id: 'materials-matériaux'
		},
		{
			title: 'Styles',
			id: 'styles'
		}
	];

	let sizes = ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'];

	let colorList = [
		{ title: 'Black', color: '#000000' },
		{ title: 'Yellow', color: '#f4cc2a' },
		{ title: 'Brown', color: '#8B4513' },
		{ title: 'Orange', color: '#FFA500' },
		{ title: 'Beige', color: '#dec6b1' },
		{ title: 'Red', color: '#FF0000' },
		{ title: 'Grey', color: '#808080' },
		{ title: 'Pink', color: '#FFC0CB' },
		{ title: 'Purple', color: '#800080' },
		{ title: 'White', color: '#FFFFFF' },
		{ title: 'Blue', color: '#0000FF' },
		{ title: 'Prints', color: '#0000FF' },
		{ title: 'Green', color: '#008000' },
		{ title: 'Metallic', color: '#C0C0C0' },
		{ title: 'Multicolour', color: '#00cc8e' }
	];

	let heelSize = [
		{
			title: 'Flat',
			checked: false
		},
		{
			title: 'Low',
			checked: false
		},
		{
			title: 'Medium',
			checked: false
		},
		{
			title: 'High',
			checked: false
		}
	];

	let materials = [
		{
			title: 'Leather',
			checked: false
		},
		{
			title: 'Pony Hair',
			checked: false
		},
		{
			title: 'Suede',
			checked: false
		},
		{
			title: 'Fabric',
			checked: false
		}
	];

	let shoeStyles = [
		{ title: 'Ballerina', checked: false },
		{ title: 'Maryjane', checked: false },
		{ title: 'Oxford', checked: false },
		{ title: 'Sneakers', checked: false },
		{ title: 'Loafer', checked: false },
	];

	let hoveredImage: number | null = null;

	onMount(() => {
		products = [...data.pb_products];
		productsStore.update(() => {
			return [...products];
		});
		hoveredImage = null;
	});

	const handleClickProduct = (productId: any) => {
		goto(`/shop/products/${productId}`);
	};

	const handleHover = (id: any) => {
		hoveredImage = id;
	};
</script>

<div class="px-10 md:px-0">
	<div class="mb-4 text-6xl font-semibold font-harmonia">High end women's shoes</div>
	<div class="text-xl font-medium font-harmonia">
		Well designed shoes made from quality materials.
	</div>

	<div class="flex items-center justify-end">
		<Dropdown />
	</div>

	<div class="mt-10">
		<div class="grid grid-cols-4 md:gap-6 gap-4">
			<div class="md:col-span-1 md:mb-0 mb-6">
				{#each controllers as { title, id }, ind}
					<div class="collapse collapse-arrow border-t rounded-none border-base-200">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">{title}</div>
						<div class="collapse-content">
							{#if id === 'sizes-pointures'}
								<div class="grid lg:grid-cols-8 grid-cols-3 gap-2">
									{#each sizes as size, ind}
										<div
											class="cursor-pointer h-8 w-8 rounded-md border-base-200 bg-white p-2 text-xs font-harmonia"
										>
											{size}
										</div>
									{/each}
								</div>
							{/if}

							{#if id === 'colours-couleurs'}
								<div class="grid lg:grid-cols-2 grid-cols-1 gap-y-3">
									{#each colorList as { title, color }, ind}
										<div class="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
												fill={color}
												class="cursor-pointer"
											>
												<circle cx="12" cy="12" r="10" />
											</svg>
											<div class="ml-2 font-medium">
												{title}
											</div>
										</div>
									{/each}
								</div>
							{/if}

							{#if id === 'heel-height-hauteur-du-talon'}
								<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
									{#each heelSize as { title, checked }, ind}
										<div class="form-control">
											<label class="label cursor-pointer flex justify-start">
												<input
													type="checkbox"
													{checked}
													class="checkbox checkbox-sm rounded-md checkbox-base-200"
												/>
												<span class="label-text ml-2 font-medium">{title}</span>
											</label>
										</div>
									{/each}
								</div>
							{/if}

							{#if id === 'materials-matériaux'}
								<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
									{#each materials as { title, checked }, ind}
										<div class="form-control">
											<label class="label cursor-pointer flex justify-start">
												<input
													type="checkbox"
													{checked}
													class="checkbox checkbox-sm rounded-md checkbox-base-200"
												/>
												<span class="label-text ml-2 font-medium">{title}</span>
											</label>
										</div>
									{/each}
								</div>
							{/if}

							{#if id === 'styles'}
								<div class="grid lg:grid-cols-2 grid-cols-1 gap-2">
									{#each shoeStyles as { title, checked }, ind}
										<div class="form-control">
											<label class="label cursor-pointer flex justify-start">
												<input
													type="checkbox"
													{checked}
													class="checkbox checkbox-sm rounded-md checkbox-base-200"
												/>
												<span class="label-text ml-2 font-medium">{title}</span>
											</label>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				{/each}
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
											src={`http://127.0.0.1:8090/api/files/${product.collectionName}/${product.id}/${product.product_img}`}
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
												src={`http://127.0.0.1:8090/api/files/${product.collectionName}/${product.id}/${product.product_hovered_img}`}
												alt={product.title}
												class="image rounded-lg product-img"
												loading="lazy"
											/>
										{:else}
											<!-- svelte-ignore a11y-img-redundant-alt -->
											<img
												src={`http://127.0.0.1:8090/api/files/${product.collectionName}/${product.id}/${product.product_img}`}
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
							<!-- <div> -->
							<!-- Fake Store API -->
							<!-- <div class="card w-full bg-white rounded-lg lg:p-12 p-8">
									<figure>
										<img
											src={product.image}
											alt={product.title}
											class="object-contain product-img"
											loading="lazy"
										/>
									</figure>
								</div> -->
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- <div
									class="w-full rounded-lg"
									on:mouseenter={() => handleHover(product.id)}
									on:mouseleave={() => handleHover(null)}
								>
									{#if hoveredImage === product.id}
										<img
											src={`http://127.0.0.1:8090/api/files/${product.collectionName}/${product.id}/${product.product_hovered_img}`}
											alt={product.title}
											class="object-cover rounded"
											loading="lazy"
										/>
									{:else}
										<img
											src={`http://127.0.0.1:8090/api/files/${product.collectionName}/${product.id}/${product.product_img}`}
											alt={product.title}
											class="object-cover rounded"
											loading="lazy"
										/>
									{/if}
								</div>
								<div class="mt-2">
									<div class="font-semibold">
										<div class="text-base flex justify-between font-semibold">
											<span>
												{product.title}
											</span>
											<span class="text-slate-500">
												₱ {product.price}
											</span>
										</div>
									</div>
									<p class="text-slate-500 text-base font-normal">{product.category}</p>
								</div>
							</div> -->
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

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
