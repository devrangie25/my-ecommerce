<script lang="ts">;
	import qualityImg1 from '$lib/assets/img/IMG_7536_1920x.png'
	import qualityImg2 from '$lib/assets/img/IMG_9607_1_1920x.png'
	import qualityImg3 from '$lib/assets/img/Capture_d_ecran_le_2023-08-31.png'

	import vouge from '$lib/assets/img/vogue_logo_1920x.png'
	import forbes from '$lib/assets/img/Forbes_1920x.png'
	import wwd from '$lib/assets/img/icon-512x512_1920x.png'
	import elle from '$lib/assets/img/ElleCanada_1920x.png'


	let pickImages = [
		{
			id: 1,
			title: 'Design First',
			subtitle: 'Our original designs are conceived in-house, from our headquarters in Montréal.',
			img: qualityImg1
		},
		{
			id: 2,
			title: 'Transparent Prices',
			subtitle: 'Make informed decisions and see for yourself the quality of our products.',
			img: qualityImg2
		},
		{
			id: 3,
			title: 'Ethical Small-batch Production',
			subtitle:
				'We hand pick our factories and produce limited runs to ensure our values are represented throughout the supply chain.',
			img: qualityImg3
		}
	];

	let brands = [vouge, forbes, wwd, elle]

</script>

<div class="bg-white py-16">
	<div class="mt-16 container mx-auto px-10 md:px-0">
		<div class="grid lg:grid-cols-3 gap-10">
			{#each pickImages as pick (pick.id)}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class={`card card-compact rounded-none	w-full bg-white shadow-none`}>
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img src={pick.img} alt="Hovered Shoes" class="image" />
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

		<div class="mt-24 text-center lg:px-52">
			<div class="mb-16 text-secondary montreal-text md:text-4xl text-2xl font-semibold text-center">
				"This Montreal-based footwear and accessory brand is changing how you shop for shoes"
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4">
				{#each brands as img }
					<div class="flex justify-center items-center">
						<img src={img} alt={img} width="120" class="md:h-max"/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.montreal-text {
		line-height: 48px;
	}
	.image {
		object-fit: cover;
		height: 600px;
		transition: transform 0.1s ease-in-out;
	}
</style>
