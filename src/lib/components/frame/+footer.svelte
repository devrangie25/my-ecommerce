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
</script>

<div class="bg-white p-12">
	<div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-36">
		{#each supports as item}
			<div class="flex items-start">
				<div class="mr-2">
					<img src={item.img} alt={item.img} />
				</div>
				<div>
					<div class=" text-black text-support font-semibold">
						{item.title}
					</div>
					<div class="mt-2 font-semibold text-primary text-base">
						{item.description}
					</div>
				</div>
			</div>
		{/each}
	</div>
    
    <div class="mt-12 text-primary">
        <div class="grid grid-cols-4 gap-10">
            <div>
                Sapatosan
            </div>

            <div>
                <div class="text-sm">
                    Support
                </div>
                <div class="text-2xl font-semibold">
                    Delivery
                </div>
            </div>
        </div>
    </div>n  
</div>

<style>
	.text-support {
		font-size: 32px;
		line-height: 41.6px;
	}
</style>
