<script>
	
	export let state = {}
	export let monaco
	
	import { onDestroy } from 'svelte'
	
	const monacoOriginalModel = monaco.editor.createModel(
		JSON.stringify(state, null, `\t`),
		`json`,
	)
	
	const monacoModifiedModel = monaco.editor.createModel(
		``,
		`json`,
	)
	
	$: {
		
		const jsonCode = JSON.stringify(state, null, `\t`)
		
		monacoOriginalModel.setValue(jsonCode)
		monacoModifiedModel.setValue(jsonCode)
		
	}
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		monacoEditor = monaco.editor.createDiffEditor(editorContainer, {
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
		
		monacoEditor.setModel({
			original: monacoOriginalModel,
			modified: monacoModifiedModel,
		})
		
	}
	
	onDestroy(() => {
		monacoEditor.dispose()
		monacoOriginalModel.dispose()
		monacoModifiedModel.dispose()
	})
	
	export function getModifiedState(){
		
		const newState = Object.assign(
			{},
			state,
		)
		
		try{
			Object.assign(
				newState,
				JSON.parse(monacoModifiedModel.getValue())
			)
		}catch(error){
			// TODO: Handle error.
			console.log(123321, error)
		}
		
		return newState
		
	}
	
</script>

<div
	class="monaco"
	use:showEditor
/>

<style>
	
	.monaco{
		background-color: white;
		color: black;
		height: 100%;
	}
	
</style>