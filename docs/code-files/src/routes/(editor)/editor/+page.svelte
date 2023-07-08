<script>
	import LoadEditor from '@bagawork/editor/src/components/LoadEditor.svelte'
	
	const mainMenuOptions = [{
		text: "Close Editor (go back)",
		onClick(){
			window.history.back()
		},
	}]
	
</script>

<LoadEditor
	{mainMenuOptions}
/>