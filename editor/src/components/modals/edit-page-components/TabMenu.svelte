<script>
	
	export let items = [{
		text: `Button text`,
		onClick(){},
	}]
	
</script>

<div class="tab-menu">
	
	<ul>
		{#each items as item}
		<li>
			<button on:click={item.onClick}>
				{item.text}
			</button>
		</li>
		{/each}
	</ul>
	
</div>

<style>
	
	.tab-menu{
		text-align: center;
	}
	
	ul{
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
	
	li{
		
		margin-block: 0.5em;
		
		&:last-child{
			margin-bottom: 0;
		}
		
	}
	
</style>