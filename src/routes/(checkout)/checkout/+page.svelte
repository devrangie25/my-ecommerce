<script lang="ts">
	import { goto } from '$app/navigation'
	import type { PageData } from './$types';
	import checkoutStore from '$lib/stores/checkout';

	export let data: PageData;

	let delivery_method: string = 'shipment';
	let { countries } = data;
	let address: string = '';
	let checkoutCartItems: any = null
	let minimumShippingFee: number = 4532

	$: {
		checkoutStore.subscribe((value: any) => {
			console.log('Checkout Store in Checkout Page', value);
			checkoutCartItems = value
		});
	}

	const onChangeDeliveryMethod = (event: any) => {
		delivery_method = event.currentTarget.value;
	};

	const formatPeso = (amount: number) => {
		// Replace 'en-PH' with the appropriate locale for Peso currency in your case
		const formatter = new Intl.NumberFormat('en-PH', {
			style: 'currency',
			currency: 'PHP', // Currency code for Peso
			minimumFractionDigits: 2 // Minimum number of fraction digits
		});

		return formatter.format(amount);
	};
</script>

<div class="container mx-auto">
	{#if checkoutCartItems}
		<div class="grid grid-cols-2">
			<!-- Customer Details -->
			<div class="col-span-1 bg-white">
				<div class="p-8">
					<div class="flex flex-col w-full border-opacity-50">
						<div class="text-center font-harmonia text-sm text-slate-500 mb-4">Express Checkout</div>
						<div class="grid grid-cols-3 gap-x-2">
							<button class="btn shop-pay-btn h-12 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="inherit"
									aria-hidden="true"
									preserveAspectRatio="xMidYMid"
									viewBox="0 0 341 80.035"
									class="P3VGi w-20"
									style="fill: white;"
									><path
										fill-rule="evenodd"
										d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z"
										clip-rule="evenodd"
									></path><path
										d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z"
									></path></svg
								>
							</button>
							<button class="btn paypal-btn h-12 rounded">
								<svg
									class="w-20"
									height="23"
									viewBox="0 0 101 32"
									preserveAspectRatio="xMinYMin meet"
									xmlns="http:&#x2F;&#x2F;www.w3.org&#x2F;2000&#x2F;svg"
									><path
										fill="#003087"
										d="M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
									></path><path
										fill="#003087"
										d="M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
									></path><path
										fill="#003087"
										d="M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
									></path><path
										fill="#009cde"
										d="M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
									></path><path
										fill="#009cde"
										d="M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
									></path><path
										fill="#009cde"
										d="M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
									></path></svg
								>
							</button>
							<button class="btn g-btn h-12 rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									x="0px"
									y="0px"
									width="100"
									height="48"
									viewBox="0 0 64 64"
								>
									<linearGradient
										id="SKETU~BGws7oJO6LvJO0xa_Z5pgoU6ueRre_gr1"
										x1="12"
										x2="12"
										y1="20"
										y2="44"
										gradientUnits="userSpaceOnUse"
										><stop offset="0" stop-color="#6dc7ff"></stop><stop
											offset="1"
											stop-color="#e6abff"
										></stop></linearGradient
									><path
										fill="url(#SKETU~BGws7oJO6LvJO0xa_Z5pgoU6ueRre_gr1)"
										d="M24,31H13v4h5.33c-0.44,0.92-1.07,1.72-1.84,2.37l0.003,0.003l-0.004-0.001	C15.273,38.388,13.708,39,12,39c-2.965,0-5.499-1.843-6.519-4.446l0,0C5.17,33.762,5,32.901,5,32c0-1.45,0.441-2.797,1.196-3.914	l0.132-0.173C7.594,26.145,9.66,25,12,25c1.87,0,3.57,0.73,4.82,1.93l3.34-3.73C18.02,21.22,15.15,20,12,20	c-4.14,0-7.79,2.1-9.95,5.29C0.755,27.206,0,29.515,0,32c0,1.97,0.475,3.829,1.316,5.469l0,0C3.305,41.346,7.342,44,12,44	c3.197,0,6.102-1.25,8.253-3.288l-0.002-0.004C22.56,38.529,24,35.429,24,32V31z"
									></path><linearGradient
										id="SKETU~BGws7oJO6LvJO0xb_Z5pgoU6ueRre_gr2"
										x1="45.856"
										x2="45.856"
										y1="22.006"
										y2="45.315"
										gradientUnits="userSpaceOnUse"
										><stop offset="0" stop-color="#1a6dff"></stop><stop
											offset="1"
											stop-color="#c822ff"
										></stop></linearGradient
									><path
										fill="url(#SKETU~BGws7oJO6LvJO0xb_Z5pgoU6ueRre_gr2)"
										d="M34.273,22.006h-6.465v17.06h2.437v-5.687h3.939c3.381,0,5.809-2.36,5.809-5.687	S37.611,22.006,34.273,22.006z M33.495,30.942h-3.25v-6.499h3.25c2.32,0,3.807,1.094,3.807,3.25S35.827,30.942,33.495,30.942z M45.57,26.88c-2.804,0-4.878,1.546-4.954,3.672h2.379c0.196-1.011,1.167-1.673,2.499-1.673c1.614,0,2.527,0.725,2.527,2.063	l0.001,0.923l-3.302,0.171c-3.065,0.179-4.725,1.389-4.725,3.494c0,2.125,1.713,3.535,4.168,3.535c1.658,0,3.198-0.81,3.895-2.093	h0.054l0.007,2.093h2.437v-8.291C50.556,28.406,48.592,26.88,45.57,26.88z M48.013,34.488c0,1.536-1.353,2.63-3.142,2.63	c-1.407,0-2.303-0.652-2.303-1.652c0-1.031,0.862-1.63,2.51-1.725l2.942-0.215L48.013,34.488z M56.088,39.283l-4.72-12.403h2.868	l3.225,9.44l3.955-9.44h2.489c0,0-7.722,18.217-7.787,18.371l-2.489,0.064C53.674,45.21,56.088,39.283,56.088,39.283z"
									></path>
								</svg>
							</button>
						</div>
						<div class="divider font-harmonia text-sm text-slate-500 mb-6">OR</div>

						<div>
							<form action="">
								<div class="mb-8">
									<div class="font-sans flex justify-between items-end">
										<div class="text-2xl font-semibold">Contact</div>
										<div>
											Have an account? <a href="/login"> Login</a>
										</div>
									</div>
									<div class="mt-4">
										<label class="input input-bordered rounded bg-white flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="currentColor"
												class="w-4 h-4 opacity-70"
												><path
													d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
												/><path
													d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
												/></svg
											>
											<input type="text" name="email" class="grow text-sm" placeholder="Email" />
										</label>
									</div>
								</div>
								<div class="mb-8">
									<div class="font-sans flex">
										<div class="text-2xl font-semibold">Delivery</div>
									</div>

									<div class="my-4 mb-6">
										<div class="join w-full rounded">
											<input
												class="join-item btn w-1/2 btn-outline btn-primary"
												checked={delivery_method === 'shipment'}
												on:change={onChangeDeliveryMethod}
												value="shipment"
												type="radio"
												name="delivery_method_shipment"
												aria-label="Shipment"
											/>
											<input
												class="join-item btn w-1/2 btn-outline btn-primary"
												checked={delivery_method === 'pickup'}
												on:change={onChangeDeliveryMethod}
												value="pickup"
												type="radio"
												name="delivery_method_pickup"
												aria-label="Pick up"
											/>
										</div>
									</div>

									{#if delivery_method === 'shipment'}
										<label class="my-4 form-control w-full">
											<select
												class="select select-bordered bg-white rounded text-sm"
												name="country"
												aria-label="test"
												placeholder="Select your country"
											>
												<option disabled selected class="text-slate-600">Select your country</option>
												{#if countries}
													{#each countries as { name }, ind}
														<option>{name.common}</option>
													{/each}
												{/if}
											</select>
										</label>

										<div class="space-y-4 mb-6">
											<div class="flex space-x-2">
												<input
													type="text"
													placeholder="First name"
													class="bg-white input input-bordered w-full rounded text-sm"
												/>
												<input
													type="text"
													placeholder="Last name"
													class="bg-white input input-bordered w-full rounded text-sm"
												/>
											</div>
											<input
												type="text"
												placeholder="Company (optional)"
												class="bg-white input input-bordered w-full rounded text-sm"
											/>
											<input
												type="text"
												placeholder="Address"
												class="bg-white input input-bordered w-full rounded text-sm"
											/>
											<div class="flex space-x-2">
												<input
													type="text"
													placeholder="City"
													class="bg-white input input-bordered w-full rounded text-sm"
												/>
												<input
													type="text"
													placeholder="Postal code"
													class="bg-white input input-bordered w-full rounded text-sm"
												/>
											</div>
											<input
												type="text"
												placeholder="Phone"
												class="bg-white input input-bordered w-full rounded text-sm"
											/>
										</div>

										<div>
											<div class="font-sans flex mb-2">
												<div class="text-xl font-semibold">Shipping method</div>
											</div>
											{#if !address}
												<div class="card bg-slate-100 text-sm h-12 p-4 rounded shipping-method-empty">
													Enter your shipping address to view available shipping methods.
												</div>
											{:else}
												<div
													class="flex items-center justify-between text-sm h-12 p-4 rounded shipping-method-entered border border-primary"
												>
													<div>UPS - Expedited (6-15 Business days)</div>
													<div>₱10,200.00</div>
												</div>
											{/if}
										</div>
									{:else}
										<div role="alert" class="alert alert-warning rounded-md">
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
													d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
												/>
											</svg>
											<span class="text-sm"
												>Pickup isn't available for this order. Choose another delivery method.</span
											>
										</div>
									{/if}
								</div>

								<div>
									<div class="font-sans">
										<div class="text-2xl font-semibold mb-1">Payment</div>

										<div class="text-sm font-norma text-gray-400">
											All transactions are secure and encrypted.
										</div>
									</div>

									<div class="my-4 mb-6">
										<div class="join join-vertical w-full rounded">
											<div class="collapse collapse-arrow join-item border border-base-300">
												<input type="radio" name="my-accordion-4" />
												<div class="collapse-title text-base font-normal">Credit Card</div>
												<div class="collapse-content">
													<p>hello</p>
												</div>
											</div>
											<div class="collapse collapse-arrow join-item border border-base-300">
												<input type="radio" name="my-accordion-4" />
												<div class="collapse-title text-base font-normal">Paypal</div>
												<div class="collapse-content">
													<p>hello</p>
												</div>
											</div>
											<div class="collapse collapse-arrow join-item border border-base-300">
												<input type="radio" name="my-accordion-4" />
												<div class="collapse-title text-base font-normal">Afterpay</div>
												<div class="collapse-content">
													<p>hello</p>
												</div>
											</div>
											<div class="collapse collapse-arrow join-item border border-base-300">
												<input type="radio" name="my-accordion-4" />
												<div class="collapse-title text-base font-normal">Cash on delivery</div>
												<div class="collapse-content">
													<p>hello</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<button class="btn btn-primary btn-block rounded h-14 text-lg" type="submit"
									>Pay now</button
								>
							</form>
						</div>
					</div>
				</div>
			</div>

			<!-- Cart Details -->
			<div class="col-span-1 items-container">
				{#if checkoutCartItems.cart}
					<div class="p-12 space-y-4">
						{#each checkoutCartItems.cart as item, ind}
							<div class="flex space-x-4">
								<div class="indicator">
									<span class="indicator-item badge badge-sm badge-primary h-6">{item.quantity}</span>
									<div class="grid w-20 place-items-center">
										<img
											src={`${data.APP_ENVIRONMENT}/api/files/${item.product.collectionName}/${item.product_id}/${item.product.product_img}`}
											class="w-full"
											alt={`checkout-image-${ind}`}
										/>
									</div>
								</div>
								<div class="flex w-full items-center justify-between">
									<div>
										<div class="text-sm">{item.product.title}</div>
										<div class="text-sm text-gray-500">{item.size}</div>
									</div>
									<div class="text-sm text-gray-600">{formatPeso(item.subtotal)}</div>
								</div>
							</div>
						{/each}

						<div class="flex space-x-4">
							<div class="grow">
								<input
									type="text"
									placeholder="Discount code or gift card"
									class="input input-bordered bg-white w-full rounded text-sm"
								/>
							</div>
							<div>
								<button class="btn btn-accent rounded"> Apply Voucher </button>
							</div>
						</div>

						<div class="pt-4 space-y-2">
							<div class="flex justify-between items-center font-sans text-sm">
								<div>Subtotal</div>
								<div class="font-semibold">{formatPeso(checkoutCartItems?.subtotal) || 0}</div>
							</div>

							<div class="flex justify-between items-center font-sans text-sm">
								<div>Shipping</div>
								<div class="font-semibold">{formatPeso(minimumShippingFee)}</div>
							</div>

							<div class="flex justify-between items-center font-sans pt-2">
								<div class="text-2xl font-semibold">Total</div>
								<div class="text-2xl font-semibold">
									<span class="text-sm text-gray-400"> PHP </span> {formatPeso(minimumShippingFee + checkoutCartItems?.subtotal)}
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	{:else}
		<div
			class="card w-full bg-white h-96 flex justify-center items-center text-slate-400 text-4xl font-harmonia font-medium"
		>
			Your bag is empty

			<button class="mt-6 btn btn-primary rounded-full px-6" on:click={() => goto('/')}>
				Go to shopping
			</button>
		</div>
	{/if}
</div>

<style>
	/* f9f6f5 */
	input {
		height: 50px;
	}
	.shipping-method-entered {
		background-color: #f9f6f5;
	}
	.shipping-method-empty,
	.shipping-method-entered {
		height: 55px;
	}
	.shop-pay-btn {
		background-color: #592ff4;
	}
	.paypal-btn {
		background-color: #ffc439;
	}
	.g-btn {
		background-color: #000000;
	}
	.items-container {
		background-color: #f5f5f5;
		width: 100%;
		position: sticky;
		top: 0;
		z-index: 1000; /* Adjust z-index if needed */
	}
</style>
