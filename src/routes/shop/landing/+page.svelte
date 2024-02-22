<script lang="ts">
	import landingImage from '$lib/assets/img/landing-brown-shoes.png';
	import secondImage from '$lib/assets/img/second-img-shoes-landing.png';
	import StaffPicks from '$lib/components/landing/+staff-picks.svelte';
	import Collection from '$lib/components/landing/+collection.svelte';
	import Quality from '$lib/components/landing/+quality.svelte';
	import Stores from '$lib/components/landing/+stores.svelte';

	let landing_text = "Church's Brogues";
	let landing_sub_text = 'The Burwood Decorative';
</script>

<!-- First Image in Landing Page -->
<div class="grid gap-y-28">
	<div class="px-14 card img-container">
		<figure>
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<img class="rounded-xl landing-img" src={landingImage} alt="Landing Image Shoes" />
		</figure>

		<div class="centered-text">
			<div class="text-7xl landing-text uppercase font-bold">{landing_text}</div>
			<div class="mt-8 text-5xl landing_sub_text uppercase">
				{landing_sub_text}
			</div>
			<div class="mt-6">
				<button
					class="btn bg-white border-0 rounded-full w-32 shop-now-btn hover:bg-primary hover:text-white"
				>
					Shop Now</button
				>
			</div>
		</div>
	</div>

	<!-- Second Image in Landing Page -->
	<div class="px-14 grid grid-cols-2 gap-x-10">
		<div class="flex justify-center items-center">
			<div class="text-center">
				<div class="font-semibold text-primary text-6xl mb-4">The 24/7 Trainer</div>
				<div class="text-primary text-5xl">Meet Rangie.</div>
				<div class="mt-12">
					<button class="btn btn-primary border-0 rounded-full w-32 text-white">Shop Now</button>
				</div>
			</div>
		</div>
		<div>
			<img class="rounded-xl" src={secondImage} alt="Shoes" />
		</div>
	</div>

	<!-- Staff Pick -->
	<StaffPicks />
	<!-- Collection -->
	<Collection />
	<!-- Quality -->
	<Quality />
	<!-- Stores -->
	<Stores />
</div>

<style>
	button {
		height: 56px;
	}
	.shop-now-btn {
		font-size: 16px;
		line-height: 24px;
	}

	.img-container {
		position: relative;
	}
	.centered-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white; /* Adjust text color as needed */
	}
</style>
