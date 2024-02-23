<script lang="ts">
	const main_navs = [
		{
			title: 'Footwear'
		},
		{
			title: 'Accessories'
		},
		{
			title: 'Fit & Style'
		},
		{
			title: 'About Us'
		},
		{
			title: 'Archive Sale'
		}
	];
</script>

<header class="navbar navbar-sticky bg-base-100 md:h-24 font-harmonia">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Homepage</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Portfolio</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>About</a></li>
			</ul>
		</div>
		<div class="navs gap-8">
			{#each main_navs as { title }, ind}
				<div class={`uppercase font-bold ${ind < 1 ? 'ml-8' : ''}`}>
					<span class="nav-title">
						{title}
					</span>
				</div>
			{/each}
		</div>
	</div>
	<div class="navbar-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a href="/shop" class="btn btn-ghost text-xl uppercase tracking-widest text-primary font-semibold"
			>Sapatosan</a
		>
	</div>
	<div class="navbar-end">
		<div class="navs uppercase font-bold mr-8">
			<span class="nav-title"> Stores </span>
		</div>
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<button class="btn btn-ghost btn-circle mr-8">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
					/>
				</svg>
				<!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg> -->
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
	</div>
</header>

<style>
	.navs {
		@apply hidden lg:flex;
	}
	.dropdown {
		@apply lg:hidden;
	}
	.navbar-sticky {
		position: sticky;
		top: 0;
		z-index: 1000; /* Adjust z-index if needed */
		/* Add other styles as needed */
	}
	.nav-title {
		font-size: 11.5px;
		letter-spacing: 0.08px;
		line-height: 13.88px;
	}
</style>
