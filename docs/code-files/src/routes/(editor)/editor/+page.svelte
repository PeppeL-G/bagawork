<script>
	import LoadEditor from '@bagawork/editor/src/components/LoadEditor.svelte'
	import { onMount } from 'svelte'
	
	const mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [{
			text: `Copy link to run app`,
			onClick(bagaCode){
				
				const url = `https://bagawork.com/run#${bagaCode}`
				
				navigator.clipboard.writeText(url)
				
			}
		}],
	}
	
	let bagaCode = ""
	
	let isDoneLoading = false
	
	onMount(() => {
		
		const hashStartToRemove = "#"
		
		bagaCode = location.hash.substring(
			hashStartToRemove.length,
		)
		
		isDoneLoading = true
		
	})
	
</script>

{#if isDoneLoading}
	<LoadEditor
		{bagaCode}
		{mainMenuOptions}
	/>
{/if}

