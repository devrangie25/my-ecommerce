<script lang="ts">
	import type { PageData } from './$types';
	import AppBar from '$lib/components/frame/+app-bar.svelte';
	import Footer from '$lib/components/frame/+footer.svelte';
	import SystemBar from '$lib/components/frame/+system-bar.svelte';

	export let data: PageData;
</script>

<div>
	<SystemBar currentUser={data?.user} />
	<AppBar currentUser={data?.user}>
		<div>
			<slot />
		</div>
	</AppBar>
	<Footer />
</div>
