<script lang="ts">
	import type { LayoutData } from './$types';
	import { goto } from '$app/navigation';

	import cartStore from '$lib/stores/cart';

	export let data: LayoutData;
	let cart: any = [];

	$: {
		cartStore.subscribe((value: any) => {
			cart = value;
		});
	}

	const handleNavClick = () => {
		goto('/shop/products');
	};
</script>

<div class="px-14 pb-24 pt-12">
	<div class="flex mb-12">
		<button class="flex items-center" on:click={handleNavClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="3"
				stroke="#a36448"
				class="w-4 h-4"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
			<div class="ml-2 font-harmonia font-medium text-2xl hover:text-secondary">
					
				{#if cart.length > 0}
					Continue shopping
				{:else}
					Shopping
				{/if}
			</div>
		</button>
	</div>
	<div>
		<slot />
	</div>
</div>
