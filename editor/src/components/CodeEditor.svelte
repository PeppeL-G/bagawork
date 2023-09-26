<script>
	
	export let code = ""
	
	import { app } from '../stores.js'
	import { getClassName } from '../functions/get-class-name.js'
	import monacoLoader from '@monaco-editor/loader'
	
	import arrayTsString from '../editor-type-definitions/js/Array.d.ts?raw'
	import stringTsString from '../editor-type-definitions/js/String.d.ts?raw'
	import mathTsString from '../editor-type-definitions/js/Math.d.ts?raw'
	
	import appTsString from '../editor-type-definitions/bagawork/App.d.ts?raw'
	import pageTsString from '../editor-type-definitions/bagawork/Page.d.ts?raw'
	
	import componentTsString from '../editor-type-definitions/bagawork/Component.ts?raw'
	import buttonTsString from '../editor-type-definitions/bagawork/components/Button.ts?raw'
	import textTsString from '../editor-type-definitions/bagawork/components/Text.ts?raw'
	import spaceTsString from '../editor-type-definitions/bagawork/components/Space.ts?raw'
	import rowsTsString from '../editor-type-definitions/bagawork/components/Rows.ts?raw'
	import columnsTsString from '../editor-type-definitions/bagawork/components/Columns.ts?raw'
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		const monaco = await monacoLoader.init()
		
		monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	 		noLib: true,
			allowNonTsExtensions: true,
		})
		
		monaco.languages.typescript.javascriptDefaults.setExtraLibs([
			{content: appTsString},
			{content: pageTsString},
			{content: arrayTsString},
			{content: stringTsString},
			{content: mathTsString},
			{content: componentTsString},
			{content: buttonTsString},
			{content: textTsString},
			{content: spaceTsString},
			{content: rowsTsString},
			{content: columnsTsString},
		])
		
		const aClassName = getClassName($app.code)
		const codePageName = getClassName(code)
		
		if(aClassName != "UnknownClassName"){
			
			monaco.languages.typescript.javascriptDefaults.addExtraLib(
				`const a = new ${aClassName}();`,
			)
			
			// If the user doesn't edit the App class, add it as a lib.
			if(aClassName != codePageName){
				monaco.languages.typescript.javascriptDefaults.addExtraLib(
					$app.code,
				)
			}
			
		}
		
		if(codePageName != "UnknownClassName" && codePageName != aClassName){
			monaco.languages.typescript.javascriptDefaults.addExtraLib(
				`const p = new ${codePageName}();`,
			)
		}
		
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