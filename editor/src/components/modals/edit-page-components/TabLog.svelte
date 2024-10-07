<script context="module">
	import { writable } from 'svelte/store'
	
	// To remember this value between instantiations,
	// use a store.
	const showFrameworkLogItemsStore = writable(false)
</script>

<script>
	
	export let loggedItems = [{
		type: `framework`,
		value: `Whatever...`,
	}]
	
	import { fade } from 'svelte/transition'
	
	$: logItemsToShow = (
		$showFrameworkLogItemsStore ?
		loggedItems :
		loggedItems.filter(
			item => item.type != `framework`,
		)
	)
	
	function actionScrollTo(node, enable){
		
		function update(enable){
			
			if(enable){
				
				// Using parentNode like this is a bit hacky,
				// but we will live with it ^^'
				if(node.parentNode.parentNode.parentNode.scrollTop != 0){
					
					node.scrollIntoView({
						behavior: `smooth`,
						block: `end`,
					})
					
				}
				
			}
			
		}
		
		update(enable)
		
		return {
			update,
		}
		
	}
	
</script>

<div class="tab-log">
	
	<div class="settings">
		Show framework log:
		<input type="checkbox" bind:checked={$showFrameworkLogItemsStore}>
	</div>
	
	<div class="items">
		
		{#each logItemsToShow as item, i (item.value+item.type+i)}
			<div
				class="item {item.type}"
				in:fade={{delay: 100}}
				class:hide={`${item.value} ✅` == logItemsToShow[i+1]?.value}
			>
				{item.value}
			</div>
		{/each}
		
		<div
			use:actionScrollTo={logItemsToShow.length != 0}
		></div>
	
	</div>
	
</div>

<style>
	
	.settings{
		margin: 0.25em;
		text-align: center;
	}
	
	.items{
		font-family: 'Courier New', Courier, monospace;
	}
	
	.item{
		
		margin: 0.5em 0.25em;
		padding: 0.25em;
		border-radius: 3px;
		word-wrap: break-word;
		white-space: pre-wrap;
		font-size: 90%;
		
		&.user{
			background-color: whitesmoke;
		}
		
		&.framework{
			background-color: beige;
		}
		
		&.error{
			background-color: pink;
		}
		
		&.hide{
			display: none;
		}
		
	}
	
</style>