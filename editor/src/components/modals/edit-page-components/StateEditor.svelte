<script>
	
	export let state = {}
	export let monaco = null
	
	import { onDestroy } from 'svelte'
	
	const monacoModel = monaco.editor.createModel(
		``,
		`json`,
	)
	
	$: {
		monacoModel.setValue(
			JSON.stringify(state, null, `\t`),
		)
	}
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		monacoEditor = monaco.editor.create(editorContainer, {
			model: monacoModel,
			minimap:{
				enabled: false,
			},
			fontSize: 16,
			tabSize: 2,
			automaticLayout: true,
			scrollBeyondLastLine: false,
			renderWhitespace: "all",
			trimAutoWhitespace: false,
			language: 'json',
			suggest: {
				showKeywords: false,
			},
		})
		
	}
	
	export function getModifiedState(){
		
		const newState = Object.assign(
			{},
			state,
		)
		
		try{
			Object.assign(
				newState,
				JSON.parse(monacoModel.getValue())
			)
		}catch(error){
			// TODO: Handle error.
			console.log(123321, error)
		}
		
		return newState
		
	}
	
	onDestroy(() => {
		
		monacoEditor.dispose()
		monacoModel.dispose()
		
	})
	
</script>


<div
	class="monaco"
	use:showEditor
></div>

<style>
	
	.monaco{
		background-color: white;
		color: black;
		height: 100%;
	}
	
</style>