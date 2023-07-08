<script>
	
	export let frameworkApp = null
	export let errorMessage = ""
	
	import ViewFrameworkAppInner from './ViewFrameworkAppInner.svelte'
	
</script>

{#if errorMessage != ""}
	<p class="errorMessage">{errorMessage}</p>
{:else}
	<ViewFrameworkAppInner
		{frameworkApp}
	/>
{/if}

<style>
	
	.errorMessage{
		color: red;
		padding: 0.5em;
	}
	
</style>