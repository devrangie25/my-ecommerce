<script lang="ts">
	import womenLed from '$lib/assets/img/women-led.png';
	import directToCustomer from '$lib/assets/img/direct-to-customer.png';
	import ethical from '$lib/assets/img/ethical.png';

	let supports = [
		{
			title: 'Women led',
			description: 'In an industry dominated by men, we are proud to be an original voice.',
			img: womenLed
		},
		{
			title: 'Direct to consumer',
			description:
				'We cut out the middlemen to offer you the best quality at a fair transparent price.',
			img: directToCustomer
		},
		{
			title: 'Ethical craftmanship',
			description: 'Hand made in the best high-end factories in Europe and around the world.',
			img: ethical
		}
	];

	let supports_text_links = [
		{
			text: 'Delivery',
			link: ''
		},
		{
			text: 'Returns & Exchanges',
			link: ''
		},
		{
			text: 'Maintenance & Warranty',
			link: ''
		},
		{
			text: 'Stores',
			link: ''
		},
		{
			text: 'Contact Us',
			link: ''
		}
	];

	let company_factors = [
		{
			text: 'Our Story',
			link: ''
		},
		{
			text: 'Stores',
			link: ''
		},
		{
			text: 'Factories',
			link: ''
		},
		{
			text: 'Careers',
			link: ''
		},
		{
			text: 'Transparency at Maguire',
			link: ''
		}
	];

	let company_soc_med = [
		{
			text: 'Instagram',
			link: ''
		},
		{
			text: 'Pinterest',
			link: ''
		},
		{
			text: 'Tik Tok',
			link: ''
		},
		{
			text: 'Facebook',
			link: ''
		},
		{
			text: 'LinkedIn',
			link: ''
		}
	];
</script>

<div class="bg-white md:p-12 p-6">
	<div class="md:mt-4 mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-4 lg:gap-x-36 gap-x-10">
		{#each supports as item}
			<div class="md:mb-0 mb-4 flex items-start">
				<div class="mr-2">
					<img src={item.img} alt={item.img} />
				</div>
				<div>
					<div class="text-black md:text-3xl text-2xl font-semibold">
						{item.title}
					</div>
					<div class="mt-2 font-semibold text-primary md:text-base text-sm">
						{item.description}
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="lg:mt-32 mt-12 text-primary lg:px-10">
		<div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 lg:gap-y-0 gap-y-10">
			<div class="col-span-1 lg:flex lg:justify-center">
				<svg
					class="sm:w-260 xl:w-290"
					fill="none"
					height="61"
					viewBox="0 0 303 61"
					width="303"
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

			<div class="col-span-3 lg:flex lg:justify-around font-semibold">
				<div class="lg:mb-0 mb-12">
					<div class="small-text-footer mb-2 uppercase">Support</div>
					{#each supports_text_links as { text }}
						<div class="text-2xl mb-4 support-link-text">{text}</div>
					{/each}
				</div>
				<div>
					<div class="small-text-footer mb-2 uppercase">Company</div>
					{#each company_factors as { text }}
						<div class="mb-2 company-factor-text">{text}</div>
					{/each}
				</div>
			</div>

			<div class="flex col-span-1 font-semibold">
				<div class="divider lg:divider-horizontal"></div>
				<div>
					<div class="small-text-footer mb-4">GET EXCLUSIVE EARLY ACCESS TO OUR SAMPLE SALE.</div>
					<div class="mb-6">
						<button class="btn btn-primary border-0 rounded-full px-6 text-white"
							>Subscribe to our newsletter</button
						>
					</div>
					<div>
						{#each company_soc_med as { text }}
							<div class="mb-2 company-factor-text">{text}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<footer class="footer md:px-10 px-6 py-4 h-44 bg-accent text-base-content">
	<nav class="grid md:grid-flow-col md:gap-10 gap-4 uppercase">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="link link-hover small-text-footer text-primary font-semibold">Credits</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="link link-hover small-text-footer text-primary font-semibold">Terms of service</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="link link-hover small-text-footer text-primary font-semibold">Privacy Statement</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="link link-hover small-text-footer text-primary font-semibold">Shop USA Site</a>
	</nav>
</footer>

<style>
	button {
		height: 56px;
		font-size: 16px;
	}
	.company-factor-text {
		font-size: 16px;
		line-height: 24px;
	}

	.small-text-footer {
		font-size: 12px;
		letter-spacing: 0.04px;
		line-height: 15.6px;
	}
</style>
