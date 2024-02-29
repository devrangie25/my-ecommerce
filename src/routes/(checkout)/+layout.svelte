<script lang="ts">
	import type { LayoutData } from './$types';
	import '../../app.css';
	import 'tailwindcss/tailwind.css';

	export let data: LayoutData;
</script>

<div class="min-h-screen h-full w-full bg-white">
	<main class="flex-grow">
		<slot />
	</main>
</div>
