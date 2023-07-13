<script>
	import LoadEditor from '@bagawork/editor/src/components/LoadEditor.svelte'
	
	const mainMenuOptions = {
		showCopyLinkButton: true,
		showFileButtons: true,
		extraOptions: [],
	}
	
	const hashStartToRemove = "#"
	
	const bagaCode = location.hash.substring(
		hashStartToRemove.length,
	)
	
</script>

<LoadEditor
	{bagaCode}
	{mainMenuOptions}
/>