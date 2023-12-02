<script>
	
	export let code = ""
	import monacoLoader from '@monaco-editor/loader'
	
	let monacoEditor
	
	function showEditor(editorContainer, code){
		
		monacoLoader.init().then(monaco => {
			
			monacoEditor = monaco.editor.create(editorContainer, {
				value: code,
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
			})
			
		})
		
		return {
			update(code){
				monacoEditor.getModel().setValue(code)
			}
		}
		
	}
	
	export function getCode(){
		return monacoEditor.getValue()
	}
	
</script>

<div
	class="codeEditor"
	use:showEditor={code}
/>

<style scoped>

.codeEditor{
	background-color: white;
	color: black;
	height: 100%;
}

</style>