<script lang="ts">
	import type { PageData } from './$types';
	import 'tailwindcss/tailwind.css';
	import '../../app.css';
	import AppBar from '$lib/components/frame/+app-bar.svelte';
	import Footer from '$lib/components/frame/+footer.svelte';
	import SystemBar from '$lib/components/frame/+system-bar.svelte';

	export let data: PageData;
</script>

<div class="min-h-screen h-full w-full">
	<SystemBar currentUser={data?.user} />
	<AppBar>
		<main class="flex-grow">
			<slot />
		</main>
	</AppBar>
	<Footer />
</div>
