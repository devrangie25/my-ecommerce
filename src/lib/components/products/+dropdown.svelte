<script lang="ts">
	let options = [
		{
			title: 'Manual'
		},
		{
			title: 'Best selling'
		},
		{
			title: 'Title ascending'
		},
		{
			title: 'Title descending'
		},
		{
			title: 'Price ascending'
		},
		{
			title: 'Price descending'
		}
	];
</script>

<select class="select select-bordered w-48 max-w-xs">
	{#each options as { title }, ind}
		<option selected={ind < 1}>{ title }</option>
	{/each}
</select>
