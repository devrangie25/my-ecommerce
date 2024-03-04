<script lang="ts">
	import collection1 from '$lib/assets/img/FAMILLY_FW22_MODEL2_1920x.png';
	import collection2 from '$lib/assets/img/EDITO-Aveiro-Group-1_1920x.png';
	import founders from '$lib/assets/img/MS_LAM2300_1920x.png';

	let description = `Sapatosan is a local company working to make high-quality fashion footwear fair and accessible.`;

	let sub_description = `Dev Rangie & Director Rangie, founders.`;
</script>

<div class="container mx-auto px-10 md:px-0">
	<div class="flex justify-center">
		<div class="text-center">
			<div class="md:text-6xl sm:text-4xl text-3xl text-primary font-semibold font-harmonia">Winter styles are here.</div>
			<div class="md:text-6xl sm:text-4xl text-3xl font-normal font-frank mt-2 text-primary">Discover the collection.</div>
		</div>
	</div>
	<div class="mt-16 flex justify-center">
		<div class="grid md:grid-cols-2 grid-cols-1 gap-x-10 md:gap-y-0 gap-y-10">
			<div class="relative w-full h-full">
				<img
					class="w-full img-default rounded-lg hover:scale-110 transition duration-1000 cursor-pointer object-cover"
					height="780"
					src={collection1}
					alt="Shoes"
				/>

				<div class="centered-text w-full">
					<div class="lg:text-5xl md:text-4xl text-3xl font-bold font-harmonia">Women's Boots</div>
				</div>
			</div>
			<div class="relative w-full h-full">
				<img
					class="w-full img-default rounded-lg hover:scale-110 transition duration-1000 cursor-pointer object-cover"
					src={collection2}
					alt="Shoes"
				/>
				<div class="centered-text w-full">
					<div class="lg:text-5xl md:text-4xl text-3xl font-bold font-harmonia">Pre-Spring '24</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-28 flex justify-center">
		<div class="grid md:grid-cols-2">
			<div dir="ltr" class="h-full">
				<img class="img-default rounded-s-lg w-full object-cover" src={founders} alt="Shoes" />
			</div>
			<div class="container-dev rounded-br-lg rounded-tr-lg md:p-20 p-16 flex items-center">
				<div>
					<div class="font-semibold lg:text-5xl md:text-4xl text-3xl text-secondary font-harmonia">
						{description}
					</div>
					<div class="mt-4 font-semibold md:text-lg text-sm text-secondary font-harmonia">
						{sub_description}
					</div>

					<div class="mt-8">
						<button class="btn btn-secondary border-0 rounded-full px-6 text-white font-semibold font-harmonia">About Us</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	button {
		height: 56px;
		font-size: 16px;
	}
	/* .description {
		font-size: 40px;
		line-height: 48px;
	} */
	.container-dev {
		background-color: #ccd3e3;
	}
	/* .img-default  {
		height: 780px;
	} */
	.centered-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white; /* Adjust text color as needed */
	}

	@media (min-width: 100px) {
		.img-default {
			height: 100%;
		}
	}

	@media (min-width: 640px) {
		.img-default {
			height: 100%;
		}
	}

	@media (min-width: 768px) {
		.img-default {
			height: 100%;
		}
	}

	@media (min-width: 1024px) {
		.img-default {
			height: 100%;
		}
	}

	@media (min-width: 1280px) {
		.img-default {
			height: 780px;
		}
	}
</style>
