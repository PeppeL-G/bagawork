<script>
	
	export let code = ""
	export let isReadOnly = false
	
	import { app } from '../stores.js'
	import { getClassName } from '../functions/get-class-name.js'
	import monacoLoader from '@monaco-editor/loader'
	
	import arrayTsString from '../editor-type-definitions/js/Array.d.ts?raw'
	import stringTsString from '../editor-type-definitions/js/String.d.ts?raw'
	import mathTsString from '../editor-type-definitions/js/Math.d.ts?raw'
	
	import appTsString from '../editor-type-definitions/bagawork/App.d.ts?raw'
	import pageTsString from '../editor-type-definitions/bagawork/Page.d.ts?raw'
	import timeTsString from '../editor-type-definitions/bagawork/Time.ts?raw'
	import directionTsString from '../editor-type-definitions/bagawork/Direction.ts?raw'
	
	import componentTsString from '../editor-type-definitions/bagawork/Component.ts?raw'
	import buttonTsString from '../editor-type-definitions/bagawork/components/Button.ts?raw'
	import enterNumberTsString from '../editor-type-definitions/bagawork/components/EnterNumber.ts?raw'
	import enterTextTsString from '../editor-type-definitions/bagawork/components/EnterText.ts?raw'
	import textTsString from '../editor-type-definitions/bagawork/components/Text.ts?raw'
	import spaceTsString from '../editor-type-definitions/bagawork/components/Space.ts?raw'
	import rowsTsString from '../editor-type-definitions/bagawork/components/Rows.ts?raw'
	import columnsTsString from '../editor-type-definitions/bagawork/components/Columns.ts?raw'
	import layersTsString from '../editor-type-definitions/bagawork/components/Layers.ts?raw'
	import imageTsString from '../editor-type-definitions/bagawork/components/Image.ts?raw'
	
	import mTsString from '../editor-type-definitions/bagawork/m.ts?raw'
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		const monaco = await monacoLoader.init()
		
		monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	 		noLib: true,
			allowNonTsExtensions: true,
		})
		
		monaco.languages.typescript.javascriptDefaults.setExtraLibs([
			
			{content: arrayTsString},
			{content: stringTsString},
			{content: mathTsString},
			
			{content: appTsString},
			{content: pageTsString},
			{content: timeTsString},
			{content: directionTsString},
			
			{content: componentTsString},
			{content: buttonTsString},
			{content: enterNumberTsString},
			{content: enterTextTsString},
			{content: textTsString},
			{content: spaceTsString},
			{content: rowsTsString},
			{content: columnsTsString},
			{content: layersTsString},
			{content: imageTsString},
			
			{content: mTsString},
			
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
			minimap:{
				enabled: false,
			},
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
			readOnly: isReadOnly,
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