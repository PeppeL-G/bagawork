<script>
	
	export let code
	
	import monacoLoader from '@monaco-editor/loader'
	import arrayTsString from '../editor-type-definitions/js/Array.d.ts?raw'
	import stringTsString from '../editor-type-definitions/js/String.d.ts?raw'
	import mathTsString from '../editor-type-definitions/js/Math.d.ts?raw'
	import appTsString from '../editor-type-definitions/bagawork/App.d.ts?raw'
	import pageTsString from '../editor-type-definitions/bagawork/Page.d.ts?raw'
	import componentTsString from '../editor-type-definitions/bagawork/Component.d.ts?raw'
	import buttonTsString from '../editor-type-definitions/bagawork/components/Button.d.ts?raw'
	import textTsString from '../editor-type-definitions/bagawork/components/Text.d.ts?raw'
	import spaceTsString from '../editor-type-definitions/bagawork/components/Space.d.ts?raw'
	import rowsTsString from '../editor-type-definitions/bagawork/components/Rows.d.ts?raw'
	import columnsTsString from '../editor-type-definitions/bagawork/components/Columns.d.ts?raw'
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		const monaco = await monacoLoader.init()
		
		monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	 		noLib: true,
			allowNonTsExtensions: true,
		})
		monaco.languages.typescript.javascriptDefaults.addExtraLib(pageTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(appTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(arrayTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(stringTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(mathTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(componentTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(buttonTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(textTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(spaceTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(rowsTsString)
		monaco.languages.typescript.javascriptDefaults.addExtraLib(columnsTsString)
		
		monacoEditor = monaco.editor.create(editorContainer, {
			value: code,
			fontSize: 16,
			tabSize: 2,
			automaticLayout: true,
			scrollBeyondLastLine: false,
			renderWhitespace: "all",
			trimAutoWhitespace: false,
			language: 'javascript',
			suggest: {
				showKeywords: false,
			},
		})
		
	}
	
	export function getCode(){
		return monacoEditor.getValue()
	}
	
</script>

<div
	class="codeEditor"
	use:showEditor
/>

<style scoped>

.codeEditor{
	background-color: white;
	color: black;
	height: 100%;
}

</style>