<script>
	
	export let code
	
	import monacoLoader from '@monaco-editor/loader';
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		const monaco = await monacoLoader.init()
		
		monaco.languages.typescript.javascriptDefaults.addExtraLib(`
			/** A class representing a page. */
			class Page {
				
				/**
				 * This method is called when:
				 *  - the user navigates to this page
				 * In this method you can initialize the page's internal state.
				 */
				onBefore(){}
				
				/**
				 * This method is called:
				 * - after onBefore() has been called
				 * - if the user leaves the app when this page is shown, this method will
				 *   be called when the user comes back to the app, and this page is shown
				 *   again.
				 * In this method you must create and send back the root GUI component
				 * of the page's GUI.
				 */
				createGui(){}
				
				/**
				 * This method is called:
				 * - when the user is going to another page in your app
				 * In this method you can write some code that changes the app's
				 * global state before the new page the user navigates to is created.
				 */
				onAfter(){}
				
			}
		`)
		
		monacoEditor = monaco.editor.create(editorContainer, {
			value: code,
			fontSize: 16,
			tabSize: 2,
			automaticLayout: true,
			scrollBeyondLastLine: false,
			renderWhitespace: "all",
			trimAutoWhitespace: false,
			language: 'javascript',
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