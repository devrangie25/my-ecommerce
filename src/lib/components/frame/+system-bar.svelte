<script lang="ts">
	export let currentUser: any;
</script>

<div class="bg-success h-9 flex items-center justify-around px-14">
	<div class="flex-none user-email">
		{#if currentUser}
			<span class="font-harmonia text-xs font-medium text-white">
				{currentUser?.email}
			</span>
		{/if}
	</div>
	<div class="grow flex justify-center">
		<span class={`${currentUser ? 'lg:-ml-24' : 'lg:ml-10'} font-harmonia text-xs font-semibold text-white`}
			>Free Shipping and Returns on orders of $125 +</span
		>
	</div>
	<div class="logout">
		{#if currentUser}
			<a href="/auth/logout" class="uppercase font-harmonia text-xs font-semibold text-white">
				Log Out
			</a>
		{:else}
			<a href="/auth/login" class="uppercase font-harmonia text-xs font-semibold text-white">
				Log In
			</a>
		{/if}
	</div>
</div>

<style>
	.user-email,
	.logout {
		@apply hidden lg:flex;
	}
</style>
