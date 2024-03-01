<script lang="ts">
    export let sidebar: boolean = false

	let controllers: Array<any> = [
		{
			title: 'Sizes / Pointures',
			id: 'sizes-pointures'
		},
		{
			title: 'Colours / Couleurs',
			id: 'colours-couleurs'
		},
		{
			title: 'Heel height / Hauteur du talon',
			id: 'heel-height-hauteur-du-talon'
		},
		{
			title: 'Materials / Matériaux',
			id: 'materials-matériaux'
		},
		{
			title: 'Styles',
			id: 'styles'
		}
	];

	let sizes = ['34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'];

	let colorList = [
		{ title: 'Black', color: '#000000' },
		{ title: 'Yellow', color: '#f4cc2a' },
		{ title: 'Brown', color: '#8B4513' },
		{ title: 'Orange', color: '#FFA500' },
		{ title: 'Beige', color: '#dec6b1' },
		{ title: 'Red', color: '#FF0000' },
		{ title: 'Grey', color: '#808080' },
		{ title: 'Pink', color: '#FFC0CB' },
		{ title: 'Purple', color: '#800080' },
		{ title: 'White', color: '#FFFFFF' },
		{ title: 'Blue', color: '#0000FF' },
		{ title: 'Prints', color: '#0000FF' },
		{ title: 'Green', color: '#008000' },
		{ title: 'Metallic', color: '#C0C0C0' },
		{ title: 'Multicolour', color: '#00cc8e' }
	];

	let heelSize = [
		{
			title: 'Flat',
			checked: false
		},
		{
			title: 'Low',
			checked: false
		},
		{
			title: 'Medium',
			checked: false
		},
		{
			title: 'High',
			checked: false
		}
	];

	let materials = [
		{
			title: 'Leather',
			checked: false
		},
		{
			title: 'Pony Hair',
			checked: false
		},
		{
			title: 'Suede',
			checked: false
		},
		{
			title: 'Fabric',
			checked: false
		}
	];

	let shoeStyles = [
		{ title: 'Ballerina', checked: false },
		{ title: 'Maryjane', checked: false },
		{ title: 'Oxford', checked: false },
		{ title: 'Sneakers', checked: false },
		{ title: 'Loafer', checked: false }
	];
</script>

<div>
	{#each controllers as { title, id }, ind}
		<div class={`collapse collapse-arrow ${sidebar && ind < 1 ? '' : 'border-t'} rounded-none border-base-200`}>
			<input type="checkbox" />
			<div class="collapse-title md:text-xl text-lg font-medium">{title}</div>
			<div class="collapse-content">
				{#if id === 'sizes-pointures'}
					<div class={`grid ${!sidebar ? 'xl:grid-cols-6 lg:grid-cols-4 grid-cols-3' : 'md:grid-cols-10 sm:grid-cols-6 grid-cols-4'} gap-2`}>
						{#each sizes as size, ind}
							<div
								class={`cursor-pointer h-8 w-8 rounded-md border-base-200 bg-${sidebar ? 'accent' : 'white'} p-2 text-xs font-harmonia`}
							>
								{size}
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'colours-couleurs'}
					<div class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} gap-y-3`}>
						{#each colorList as { title, color }, ind}
							<div class="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill={color}
									class="cursor-pointer"
								>
									<circle cx="12" cy="12" r="10" />
								</svg>
								<div class="ml-2 font-medium">
									{title}
								</div>
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'heel-height-hauteur-du-talon'}
					<div class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}>
						{#each heelSize as { title, checked }, ind}
							<div class="form-control">
								<label class="label cursor-pointer flex justify-start">
									<input
										type="checkbox"
										{checked}
										class="checkbox checkbox-sm rounded-md checkbox-base-200"
									/>
									<span class="label-text ml-2 font-medium">{title}</span>
								</label>
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'materials-matériaux'}
					<div class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}>
						{#each materials as { title, checked }, ind}
							<div class="form-control">
								<label class="label cursor-pointer flex justify-start">
									<input
										type="checkbox"
										{checked}
										class="checkbox checkbox-sm rounded-md checkbox-base-200"
									/>
									<span class="label-text ml-2 font-medium">{title}</span>
								</label>
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'styles'}
					<div class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}>
						{#each shoeStyles as { title, checked }, ind}
							<div class="form-control">
								<label class="label cursor-pointer flex justify-start">
									<input
										type="checkbox"
										{checked}
										class="checkbox checkbox-sm rounded-md checkbox-base-200"
									/>
									<span class="label-text ml-2 font-medium">{title}</span>
								</label>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
