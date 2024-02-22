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

<div class="container mx-auto pb-16">
	<div class="flex justify-center">
		<div class="text-center">
			<div class="text-6xl text-primary font-semibold">Discover our unique</div>
			<div class="text-5xl mt-4 text-primary font-normal">shopping experience</div>
		</div>
	</div>

	<div class="px-24 mt-12 grid grid-cols-4 gap-10">
		{#each stores as store, ind}
			<div class={`${ind === stores.length - 1 ? 'col-start-2 col-span-2' : 'col-span-2'}`}>
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

	<div class="mt-16 flex justify-center">
		<button class="btn btn-primary border-0 rounded-full w-40 text-white">About our stores</button>
	</div>
</div>

<style>
	.store-img {
		height: 400px;
	}

    button {
        height: 56px;
    }
</style>
