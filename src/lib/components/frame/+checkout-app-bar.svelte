<script lang="ts">
	import { goto } from '$app/navigation';
	import cartStore from '$lib/stores/cart';
	
	let cart = [];

	$: {
		cartStore.subscribe((value: any) => {
			cart = value;
		});
	}
    
	const navigateToHome = () => {
		goto('/');
	};

	const gotoCardPage = () => {
		goto('/shop/cart');
	};
</script>

<div class="navbar bg-white text-primary-content border h-20 lg:px-48">
	<div class="navbar-start">
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<svg
            on:click={navigateToHome}
			class="sm:w-260 xl:w-290 cursor-pointer"
			fill="none"
			height="35"
			viewBox="0 0 303 61"
			width="250"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M41.2489 38.4547H35.4653L33.974 24.3411C33.7557 22.4349 33.5011 19.7221 33.392 18.0358H33.1374C32.6281 19.9054 32.0098 22.3982 31.4278 24.3778L27.2811 38.4547H23.1344L18.9149 24.1945C18.3693 22.3982 17.7146 20.1987 17.2781 18.0358H16.9507C16.8779 19.9421 16.6597 22.2516 16.4778 24.0845L14.9501 38.4547H9.56665L13.0222 9.75098H19.606L23.7891 23.3147C24.2983 24.9277 24.9167 27.0172 25.2805 28.5935H25.4623C25.8261 27.0172 26.5172 24.8543 26.9537 23.3147L31.064 9.75098H37.6114L41.2489 38.4547Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M69.6211 23.3516H75.2228L85.6986 52.0553H79.5513L76.7141 43.6238H67.4386L64.565 52.0553H58.5632L69.6211 23.3516ZM68.8572 39.3714H75.2591L73.5495 34.3858C73.0039 32.7728 72.6038 31.4531 72.2037 30.0234H72.0218C71.6581 31.4898 71.1852 32.9561 70.6396 34.4591L68.8572 39.3714Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M130.366 21.5554V22.9484C130.366 30.3534 125.892 38.4184 115.78 38.4184C107.05 38.4184 100.939 31.7098 100.939 23.3883C100.939 14.5169 107.232 8.02832 115.78 8.02832C122.582 8.02832 127.566 11.4376 129.493 16.9364H123.019C121.746 14.5536 119.163 13.1605 115.926 13.1605C111.052 13.1605 107.014 16.9364 107.014 23.205C107.014 29.4736 110.87 33.2495 116.253 33.2495C120.473 33.2495 123.564 30.2068 124.037 26.5043H116.762V21.5554H130.366Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M154.447 40.6911V23.3516H160.412V41.1677C160.412 45.3834 162.522 47.8762 165.577 47.8762C169.324 47.8762 170.743 44.9435 170.743 41.1677V23.3516H176.672V40.6178C176.672 49.4892 171.943 53.0084 165.614 53.0084C159.648 53.0084 154.447 49.7458 154.447 40.6911Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M207.699 9.75098H201.733V38.4547H207.699V9.75098Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M255.24 52.0919H248.329L240.618 39.3714H238.726V52.0919H232.761V23.3516H243.091C249.493 23.3516 252.439 26.8341 252.439 31.5631C252.439 35.4123 250.111 38.125 246.547 38.7115L255.24 52.0919ZM241.891 28.1905H238.726V34.9357H241.927C244.655 34.9357 246.256 34.0925 246.256 31.7097C246.256 29.0703 244.728 28.1905 241.891 28.1905Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
			<path
				d="M292.961 14.9565H281.94V21.1518H292.597V26.1374H281.94V33.2492H293.434V38.4547H275.974V9.75098H292.961V14.9565Z"
				fill="#A76A4F"
				data-darkreader-inline-fill=""
				style="--darkreader-inline-fill: #b78067;"
			></path>
		</svg>
	</div>

	<div class="navbar-end">
		<button class="btn btn-circle" on:click={gotoCardPage}>
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
				{#if cart.length > 0}
					<span class="badge badge-xs badge-primary indicator-item"></span>
				{/if}
			</div>
		</button>
	</div>
</div>
