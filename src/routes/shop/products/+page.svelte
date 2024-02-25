<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	import Dropdown from '$lib/components/products/+dropdown.svelte';

	export let data: PageData;

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
		{ title: 'Boots', checked: false },
		{ title: 'Fisherman', checked: false },
		{ title: 'Flats', checked: false },
		{ title: 'Heels', checked: false },
		{ title: 'Insulated', checked: false },
		{ title: 'Maryjane', checked: false },
		{ title: 'Mules', checked: false },
		{ title: 'Oxford', checked: false },
		{ title: 'Pumps', checked: false },
		{ title: 'Sandals', checked: false },
		{ title: 'Sneakers', checked: false },
		{ title: 'Wedge', checked: false }
	];

	onMount(() => {
		products = [...data.products];
	});
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
								<div class="grid grid-cols-8 gap-2">
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
								<div class="grid grid-cols-2 gap-y-3">
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
								<div class="grid grid-cols-2 gap-2">
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
								<div class="grid grid-cols-2 gap-2">
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
								<div class="grid grid-cols-2 gap-2">
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
						{#each products as product, ind}
							<div>
								<div class="card w-full bg-white rounded-lg lg:p-12 p-8">
									<figure>
										<img
											src={product.image}
											alt={product.title}
											class="object-contain product-img"
											loading="lazy"
										/>
									</figure>
								</div>
								<div class="mt-2">
									<div class="font-semibold">
										<div class="text-base flex justify-between font-semibold">
											<span>
												{product.title}
											</span>
											<span class="text-slate-500">
												{product.price}
											</span>
										</div>
									</div>
									<p class="text-slate-500 text-base font-normal">{product.category}</p>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	/* Breakpoint prefix	Minimum width	CSS
    sm	640px	@media (min-width: 640px) { ... }
    md	768px	@media (min-width: 768px) { ... }
    lg	1024px	@media (min-width: 1024px) { ... }
    xl	1280px	@media (min-width: 1280px) { ... }
    2xl	1536px	@media (min-width: 1536px) { ... } */

	/** xs */
	@media (min-width: 100px) {
		.product-img {
			height: 100px;
		}
	}

	/** sm */
	@media (min-width: 640px) {
		.product-img {
			height: 150px;
		}
	}

	/** md */
	@media (min-width: 768px) {
		.product-img {
			height: 200px;
		}
	}

	/** lg */
	@media (min-width: 1024px) {
		.product-img {
			height: 320px;
		}
	}

	/** lg */
	@media (min-width: 1280px) {
		.product-img {
			height: 480px;
		}
	}
</style>
