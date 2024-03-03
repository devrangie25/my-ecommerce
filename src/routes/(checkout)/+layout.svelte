<script lang="ts">
	import type { LayoutData } from './$types';
	import CheckoutAppBar from '$lib/components/frame/+checkout-app-bar.svelte';

	export let data: LayoutData;
</script>

<CheckoutAppBar />
<div class="min-h-screen bg-white h-full w-full">
    <main class="flex-grow">
        <slot />
    </main>
</div>
