<script lang="ts">
	import collection1 from '$lib/assets/img/FAMILLY_FW22_MODEL2_1920x.png';
	import collection2 from '$lib/assets/img/EDITO-Aveiro-Group-1_1920x.png';
	import founders from '$lib/assets/img/MS_LAM2300_1920x.png';

	let description = `Sapatosan is a local company working to make high-quality fashion footwear fair and accessible.`;

	let sub_description = `Dev Rangie & Director Rangie, founders.`;
</script>

<div class="container mx-auto">
	<div class="flex justify-center">
		<div class="text-center">
			<div class="text-6xl text-primary font-semibold">Winter styles are here.</div>
			<div class="text-5xl mt-4 text-primary font-normal">Discover the collection.</div>
		</div>
	</div>
	<div class="mt-16 flex justify-center">
		<div class="grid grid-cols-2 gap-x-10">
			<div class="img-container">
				<img
					class="w-full rounded-lg my-img hover:scale-110 transition duration-1000 cursor-pointer object-cover"
					src={collection1}
					alt="Shoes"
				/>

				<div class="centered-text w-full">
					<div class="text-5xl font-bold">Women's Boots</div>
				</div>
			</div>
			<div class="img-container">
				<img
					class="w-full rounded-lg my-img hover:scale-110 transition duration-1000 cursor-pointer object-cover"
					src={collection2}
					alt="Shoes"
				/>
				<div class="centered-text w-full">
					<div class="text-5xl font-bold">Pre-Spring '24</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-28 flex justify-center">
		<div class="grid grid-cols-2">
			<div dir="ltr">
				<img class="rounded-s-lg" src={founders} alt="Shoes" />
			</div>
			<div class="container-dev rounded-br-lg rounded-tr-lg p-20 flex items-center">
				<div>
					<div class="font-semibold description text-secondary">
						{description}
					</div>
					<div class="mt-4 font-semibold text-xs text-secondary">
						{sub_description}
					</div>

					<div class="mt-8">
						<button class="btn btn-secondary border-0 rounded-full w-28 text-white">About Us</button
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
	}
	img {
		height: 780px;
		width: 780px;
		object-fit: cover;
	}

	.description {
		font-size: 40px;
		line-height: 48px;
	}

	.container-dev {
		background-color: #ccd3e3;
	}

	.img-container {
		position: relative;
	}
	.centered-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		color: white; /* Adjust text color as needed */
	}
</style>
