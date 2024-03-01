<script lang="ts">
	import type { LayoutData } from './$types';
	import CheckoutAppBar from '$lib/components/frame/+checkout-app-bar.svelte';
	import '../../app.css';
	import 'tailwindcss/tailwind.css';

	export let data: LayoutData;
</script>

<CheckoutAppBar />
<div class="min-h-screen h-full w-full bg-white">
	<main class="flex-grow">
		<slot />
	</main>
</div>
