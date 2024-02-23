<script lang="ts">
	import pick1 from '$lib/assets/img/pick-shoe-1.png';
	import hover1 from '$lib/assets/img/hover-shoe-1.png';

    import pick2 from '$lib/assets/img/pick-shoe-2.png';
	import hover2 from '$lib/assets/img/hover-shoe-2.png';

    import pick3 from '$lib/assets/img/pick-shoe-3.png';
	import hover3 from '$lib/assets/img/hover-shoe-3.png';

    import pick4 from '$lib/assets/img/pick-shoe-4.png';
	import hover4 from '$lib/assets/img/hover-shoe-4.png';

	import { onMount } from 'svelte';

	let pickImages = [
		{
			id: 1,
			title: 'Simone White Trainer',
			subtitle: 'The 24/7 Trainer',
            price: '₱9,800.00',
			img: pick1,
			img2: hover1
		},
		{
			id: 2,
			title: 'Aveiro Black Mesh Ballerina',
			subtitle: 'Ballet flat',
            price: '₱8,500.00',
			img: pick2,
			img2: hover2
		},
		{
			id: 3,
			title: 'Maia Silver Boot',
			subtitle: 'Ankle Boot',
            price: '₱11,000.00',
			img: pick3,
			img2: hover3
		},
		{
			id: 4,
			title: 'Neiva Black Tumble Mary Jane',
			subtitle: 'Deadstock Leather',
            price: '₱10,400.00',
			img: pick4,
			img2: hover4
		}
	];

	let hoveredImage: number | null = null;

	function handleHover(id: any) {
		hoveredImage = id;
	}

	onMount(() => {
		// Reset hoveredImage on component mount
		return () => {
			hoveredImage = null;
		};
	});
</script>

<div class="container mx-auto px-10 md:px-0">
	<div class="flex justify-center">
		<div class="text-center">
			<div class="lg:text-6xl text-5xl text-primary font-semibold">Staff Picks</div>
			<div class="lg:text-5xl text-4xl mt-4 text-primary font-normal">Our current favourites</div>
		</div>
	</div>
	<div class="mt-12 flex justify-center">
		<div class="grid lg:grid-cols-4 grid-cols-2 gap-10">
			{#each pickImages as pick (pick.id)}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class={`card card-compact rounded-lg w-full md:h-full bg-base-100 shadow-none`}
					on:mouseenter={() => handleHover(pick.id)}
					on:mouseleave={() => handleHover(null)}
				>
					<figure>
						{#if hoveredImage === pick.id}
							<img src={pick.img2} alt="Shoes" class="image rounded-lg" />
						{:else}
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<img src={pick.img} alt="Hovered Shoes" class="image rounded-lg" />
						{/if}
					</figure>
					<div class="mt-2">
						<div class="font-semibold">
                            <div class="text-base flex justify-between font-semibold">
                                <span>
                                    {pick.title}
                                </span>
                                <span class="text-slate-500">
                                    {pick.price}
                                </span>
                            </div>
                        </div>
						<p class="text-slate-500 text-base font-normal">{pick.subtitle}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.image {
		object-fit: cover;
		width: 100%;
        height: 100%;
		transition: transform 0.1s ease-in-out;
	}
</style>
