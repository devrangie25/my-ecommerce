<script lang="ts">
	import type { PageData } from './$types';
    import 'tailwindcss/tailwind.css';
	import '../app.css';
    import "/node_modules/flag-icons/css/flag-icons.min.css";

	export let data: PageData;
</script>

<div class="min-h-screen h-full w-full">
    <main class="flex-grow">
        <slot />
    </main>
</div>
