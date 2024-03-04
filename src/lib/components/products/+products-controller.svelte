<script lang="ts">
	import {
		COLORS,
		SHOE_STYLES,
		MATERIALS,
		PRODUCTS_CONTROLLER,
		HEEL_SIZE,
		SHOE_SIZES
	} from '$lib/static/temp';
	import { createEventDispatcher } from 'svelte';

	export let sidebar: boolean = false;
	const dispatch = createEventDispatcher();

	let selectedStyles: any = [];
	let selectedColors: any = [];

	$: dispatch('filter-colors', selectedColors.length > 0 ? selectedColors : []);
	$: dispatch('filter-styles', selectedStyles.length > 0 ? selectedStyles : []);
</script>

<div>
	{#each PRODUCTS_CONTROLLER as { title, id }, ind}
		<div
			class={`collapse collapse-arrow ${sidebar && ind < 1 ? '' : 'border-t'} rounded-none border-base-200`}
		>
			<input type="checkbox" />
			<div class="collapse-title md:text-xl text-lg font-medium">{title}</div>
			<div class="collapse-content">
				{#if id === 'sizes-pointures'}
					<div
						class={`grid ${!sidebar ? 'xl:grid-cols-6 lg:grid-cols-4 grid-cols-3' : 'md:grid-cols-10 sm:grid-cols-6 grid-cols-4'} gap-2`}
					>
						{#each SHOE_SIZES as size, ind}
							<div
								class={`cursor-pointer h-8 w-8 rounded-md border-base-200 bg-${sidebar ? 'accent' : 'white'} p-2 text-xs font-harmonia`}
							>
								{size}
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'colours-couleurs'}
					<div
						class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'md:grid-cols-4 sm:grid-cols-3 grid-cols-2'} gap-y-3`}
					>
						{#each COLORS as { title, color, checked }, ind}
							<div class="flex items-center">
								<input
									type="checkbox"
									name="radio-color"
									class="radio"
									{checked}
									value={title}
									bind:group={selectedColors}
									style={`background-color: ${color}; border-radius: 50%;`}
								/>
								<div class="ml-2 font-medium">
									{title}
								</div>
							</div>
						{/each}
					</div>
				{/if}

				{#if id === 'heel-height-hauteur-du-talon'}
					<div
						class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}
					>
						{#each HEEL_SIZE as { title, checked }, ind}
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
					<div
						class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}
					>
						{#each MATERIALS as { title, checked }, ind}
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
					<div
						class={`grid ${!sidebar ? 'lg:grid-cols-2 grid-cols-1' : 'sm:grid-cols-3 md:grid-cols-4 grid-cols-2'} gap-2`}
					>
						{#each SHOE_STYLES as { title, checked }, ind}
							<div class="form-control">
								<label class="label cursor-pointer flex justify-start">
									<input
										bind:group={selectedStyles}
										type="checkbox"
										value={title}
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
