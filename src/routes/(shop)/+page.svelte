<script lang="ts">
	import StaffPicks from '$lib/components/landing/+staff-picks.svelte';
	import Collection from '$lib/components/landing/+collection.svelte';
	import Quality from '$lib/components/landing/+quality.svelte';
	import Stores from '$lib/components/landing/+stores.svelte';
	import Hero from '$lib/components/landing/+hero.svelte';

	export let data;
</script>

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

