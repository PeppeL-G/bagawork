<script>
	import LoadEditor from '@bagawork/editor/src/components/LoadEditor.svelte'
	import { onMount } from 'svelte'
	
	const contentSecurityPolicyValue = [
		`default-src 'none';`,
		`form-action 'none';`,
		`connect-src 'none';`,
		`img-src * data:;`,
		`script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net blob:;`,
		`style-src-attr 'self' 'unsafe-inline';`,
		`style-src-elem 'self' 'unsafe-inline' https://cdn.jsdelivr.net;`,
		`font-src https://cdn.jsdelivr.net;`
	].join(` `)
	
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

<svelte:head>
	<meta
		http-equiv="Content-Security-Policy"
		content={contentSecurityPolicyValue}
	/>
</svelte:head>

{#if isDoneLoading}
	<LoadEditor
		{bagaCode}
		{mainMenuOptions}
	/>
{/if}

<style>
	
	:global(html, body){
		margin: 0;
		padding: 0;
	}
	
</style>