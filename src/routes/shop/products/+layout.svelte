<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<div class="container mx-auto py-24">
    <slot />
</div>