<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let isOpen = false;
    export let width: string = 'w-1/3';
    export let bg: string = 'bg-white';
	const dispatch = createEventDispatcher();
</script>

<div
	class={`fixed top-0 z-10 right-0 h-full ${width} p-6 ${bg} transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
	<!-- Drawer content goes here -->
	<slot />
	<button on:click={() => dispatch('drawer', { open: false })}>Close Drawer</button>
</div>
