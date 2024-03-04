<script lang="ts">
	import StaffPicks from '$lib/components/landing/+staff-picks.svelte';
	import Collection from '$lib/components/landing/+collection.svelte';
	import Quality from '$lib/components/landing/+quality.svelte';
	import Stores from '$lib/components/landing/+stores.svelte';
	import Hero from '$lib/components/landing/+hero.svelte';
	import { onMount } from 'svelte';

	export let data;

	let loading = true;

	// Event listener to track when all resources are loaded
	onMount(() => {
		const images = document.querySelectorAll('img');

		// Count the number of images that are still loading
		let imagesToLoad = images.length;

		const handleImageLoad = () => {
			imagesToLoad--;

			if (imagesToLoad === 0) {
				// All images are loaded
				loading = false;
			}
		};

		images.forEach((img) => {
			if (img.complete) {
				handleImageLoad();
			} else {
				img.addEventListener('load', handleImageLoad);
			}
		});
	});
</script>

{#if loading}
	<div class="p-14">
		<div class="grid grid-cols-1 gap-8">
			<div class="skeleton w-full md:h-screen h-96 rounded"></div>
		</div>
	</div>
{:else}
	<div class="grid md:gap-y-28 gap-y-20">
		<Hero />
		<!-- Staff Pick -->
		<StaffPicks />
		<!-- Collection -->
		<Collection />
		<!-- Quality -->
		<Quality />
		<!-- Stores -->
		<Stores />
	</div>
{/if}

