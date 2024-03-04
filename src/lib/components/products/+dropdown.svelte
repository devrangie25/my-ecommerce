<script lang="ts">
	import { PRODUCTS_DEFAULT_FILTER } from '$lib/static/temp';
</script>

<select class="select select-bordered w-48 max-w-xs">
	{#each PRODUCTS_DEFAULT_FILTER as { title }, ind}
		<option selected={ind < 1}>{title}</option>
	{/each}
</select>
