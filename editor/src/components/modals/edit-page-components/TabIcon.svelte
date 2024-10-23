<script>
	
	export let iconAsSvgString = ``
	
	$: src = `data:image/svg+xml;charset=utf-8,${
		encodeURIComponent(iconAsSvgString)
	}`
	
</script>

{#if iconAsSvgString}
	<div class="icon">
		{@html iconAsSvgString}
	</div>
{:else}
	<p>If you return a Paper component from App.createIcon(), it will be shown here. If your app then is installed on a user's smartphone, that icon will be shown as the icon the user should click on to start your app.</p>
{/if}

<style>
	
	.icon{
		
		box-sizing: border-box;
		width: 100%;
		padding: 1em;
		
		& svg{
			aspect-ratio: 1;
		}
		
	}
	
</style>