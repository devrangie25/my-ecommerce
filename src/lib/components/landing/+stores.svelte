<script lang="ts">
	import store1 from '$lib/assets/img/Store_Montreal_1920x.png';
	import store2 from '$lib/assets/img/toronto-store.png';
	import store3 from '$lib/assets/img/maguire_0085_1920x.png';

	let stores = [
		{
			title: 'Montréal',
			subtitle: 'Mile-End',
			address: '5365, St-Laurent Blvd',
			img: store1
		},
		{
			title: 'Toronto',
			subtitle: 'Queen Street West',
			address: '760, Queen St W',
			img: store2
		},
		{
			title: 'New York',
			subtitle: 'Nolita',
			address: '198, Elizabeth St',
			img: store3
		}
	];
</script>

<div class="container mx-auto pb-16 px-10 md:px-0">
	<div class="flex justify-center">
		<div class="text-center">
			<div class="md:text-6xl text-4xl text-primary font-semibold font-harmonia">Discover our unique</div>
			<div class="md:text-6xl text-4xl mt-2 text-primary font-normal font-frank">shopping experience</div>
		</div>
	</div>

	<div class="md:px-24 mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 md:gap-y-16 gap-y-32 font-harmonia">
		{#each stores as store, ind}
			<div class={`${ind === stores.length - 1 ? 'lg:col-start-2 lg:col-span-2' : 'lg:col-span-2'}`}>
				<img src={store.img} alt={store.title} class="w-full store-img" />

				<div class="mt-4 text-primary font-semibold">
					<div class="flex items-end">
						<span class="text-2xl mr-2">
							{store.title}
						</span>
						<span class="text-xl font-normal">
							{store.subtitle}
						</span>
					</div>
					<div class="text-base mt-2">
						{store.address}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="xl:mt-16 lg:mt-32 mt-32 flex justify-center">
		<button class="btn btn-primary border-0 rounded-full px-6 text-white font-harmonia font-semibold">About our stores</button>
	</div>
</div>

<style>
	@media (min-width: 100px) {
		.store-img {
			height: 100%;
		}
	}

	@media (min-width: 640px) {
		.store-img {
			height: 100%;
		}
	}

	@media (min-width: 768px) {
		.store-img {
			height: 100%;
		}
	}

	@media (min-width: 1024px) {
		.store-img {
			height: 100%;
		}
	}

	@media (min-width: 1280px) {
		.store-img {
			height: 400px;
		}
	}

    button {
        height: 56px;
		font-size: 16px;
    }
</style>
