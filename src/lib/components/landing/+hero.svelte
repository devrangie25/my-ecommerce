<script>
	import { goto } from '$app/navigation';
	import landingImage from '$lib/assets/img/landing-brown-shoes.png';
	import secondImage from '$lib/assets/img/second-img-shoes-landing.png';

	let landing_text = 'Spring Staples';
	let landing_sub_text = 'The Neiva Mary Jane';

	const goToProductsPage = () => {
		goto(`shop/products`);
	};
</script>

<div class="md:px-14 card md:h-screen h-full img-container">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="md:rounded-xl landing-img h-full object-cover"
		src={landingImage}
		alt="Landing Image Shoes"
		loading="lazy"
	/>

	<div class="centered-text">
		<div
			class="lg:text-7xl md:text-6xl sm:text-4xl text-2xl landing-text uppercase font-semibold font-harmonia"
		>
			{landing_text}
		</div>
		<div
			class="mt-4 lg:text-5xl md:text-4xl sm:text-2xl text-xl landing_sub_text uppercase font-frank"
		>
			{landing_sub_text}
		</div>
		<div class="md:mt-6 mt-4">
			<button
				class="btn bg-white text-primary border-0 rounded-full px-6 shop-now-btn hover:bg-primary hover:text-white"
				on:click={goToProductsPage}
			>
				Shop Now</button
			>
		</div>
	</div>
</div>

<!-- Second Image in Landing Page -->
<div class="md:px-14 px-6 grid md:grid-cols-2 gap-x-10">
	<div class="md:order-first order-last md:mt-0 mt-12 flex justify-center items-center">
		<div class="text-center">
			<div class="font-semibold text-primary md:text-6xl sm:text-4xl text-3xl mb-4 font-harmonia">
				The 24/7 Trainer
			</div>
			<div class="text-primary md:text-6xl sm:text-4xl text-3xl font-normal font-frank">
				Meet Rangie.
			</div>
			<div class="lg:mt-12 mt-6">
				<button
					class="btn btn-primary border-0 rounded-full px-6 text-white font-semibold font-harmonia"
					>Shop Now</button
				>
			</div>
		</div>
	</div>
	<div>
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img class="rounded-xl" src={secondImage} alt="Second Landing Image" loading="lazy" />
	</div>
</div>

<style>
	button {
		height: 56px;
		font-size: 16px;
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
