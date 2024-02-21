<script lang="ts">;
	let pickImages = [
		{
			id: 1,
			title: 'Design First',
			subtitle: 'Our original designs are conceived in-house, from our headquarters in Montréal.',
			img: 'https://maguireshoes.com/cdn/shop/files/IMG_7536_1920x.jpg?v=1693504829'
		},
		{
			id: 2,
			title: 'Transparent Prices',
			subtitle: 'Make informed decisions and see for yourself the quality of our products.',
			img: 'https://maguireshoes.com/cdn/shop/files/IMG_9607_1_1920x.jpg?v=1693504469'
		},
		{
			id: 3,
			title: 'Ethical Small-batch Production',
			subtitle:
				'We hand pick our factories and produce limited runs to ensure our values are represented throughout the supply chain.',
			img: 'https://maguireshoes.com/cdn/shop/files/Capture_d_ecran_le_2023-08-31_a_13.00.22_1920x.png?v=1693501246'
		}
	];

</script>

<div class="bg-white py-16">
	<div class="mt-16 container mx-auto">
		<div class="grid grid-cols-3 gap-10">
			{#each pickImages as pick (pick.id)}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class={`card card-compact rounded-none	w-full bg-white shadow-none`}>
					<figure>
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={pick.img} alt="Hovered Shoes" class="image" />
					</figure>
					<div class="mt-2">
						<div class="flex justify-between font-semibold mb-2">
							<span class="text-secondary text-2xl">
								{pick.title}
							</span>
						</div>
						<div class="text-secondary text-base font-semibold mb-4">{pick.subtitle}</div>
						<div>
							<!-- svelte-ignore a11y-missing-attribute -->
							<a class="text-secondary text-xs underline">Read more</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.image {
		object-fit: cover;
		width: 506px;
		height: 600px;
		transition: transform 0.1s ease-in-out;
	}
</style>
