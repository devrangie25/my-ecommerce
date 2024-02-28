<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let isOpen = false;
    export let width: string = 'w-1/3';
    export let bg: string = 'bg-white';
	export let padding: string = 'p-6'
	const dispatch = createEventDispatcher();
</script>

<div
	class={`fixed top-0 z-10 right-0 h-full ${width} ${[padding]} ${bg} transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
>
	<!-- Drawer content goes here -->
	<slot />
</div>
