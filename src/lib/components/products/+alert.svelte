<script lang="ts">
	export let msg: string = 'Alert';
    export let bg: string = 'secondary'
    export let width: string = 'w-1/2'
</script>

<div role="alert" class={`alert bg-${bg} text-white ${width} items-end rounded-lg`}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="stroke-current shrink-0 h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
		/></svg
	>
	<span>{msg}</span>
</div>
