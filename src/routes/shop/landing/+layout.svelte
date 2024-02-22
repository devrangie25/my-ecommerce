<script lang="ts">
	import AppBar from '$lib/components/frame/+app-bar.svelte';
	import Footer from '$lib/components/frame/+footer.svelte';
</script>

<AppBar />
<div class="pb-10 min-h-screen">
	<slot />
</div>
<Footer />

