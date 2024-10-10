<script>
	
	export let showModal
	export let pageTemplateId
	
	import { editorSettings, app, pageTemplates, pages } from '../../stores.js'
	import Modal from './Modal.svelte'
	import { onDestroy } from 'svelte'
	import ViewApp from '../ViewApp.svelte'
	import { getCreateAppCode } from '../../functions/get-create-app-code.js'
	import MonacoLoader from '../MonacoLoader.svelte'
	import { getClassName } from '../../functions/get-class-name.js';
	
	const pageTemplate = $pageTemplates.find(
		pt => pt.id == pageTemplateId,
	)
	
	let monacoCodeEditor
	let forceAppRestartKey = 0
	
	function save(){
		const newCode = monacoCodeEditor.getValue()
		pageTemplate.code = newCode
		$pageTemplates = $pageTemplates
		forceAppRestartKey += 1
	}
	
	function remove(){
		
		if(!confirm("Really delete?")){
			return
		}
		
		const pageTemplateIndex = $pageTemplates.findIndex(
			pt => pt.id == pageTemplateId
		)
		
		$pageTemplates.splice(pageTemplateIndex, 1)
		
		showModal = false
		
	}
	
	function showCodeEditor(editorContainer, monaco){
		
		const codeFiles = [
			{variable: `p`, code: pageTemplate.code},
			{variable: `a`, code: $app.code},
		].map(f => ({
			variable: f.variable,
			monacoClassModel: monaco.editor.createModel(
				f.code,
				`javascript`,
			),
			monacoVariableModel: monaco.editor.createModel(
				`const ${f.variable} = new ${getClassName(f.code)}()`,
				`javascript`,
			),
		}))
		
		function updateClassNameInVariableFile(fileIndex){
			
			const file = codeFiles[fileIndex]
			
			const className = getClassName(
				file.monacoClassModel.getValue(),
			)
			
			codeFiles[fileIndex].monacoVariableModel.setValue(
				`const ${file.variable} = new ${className}();`
			)
			
		}
		
		for(let i=0; i<codeFiles.length; i++){
			
			const file = codeFiles[i]
			
			updateClassNameInVariableFile(i)
			
			file.monacoClassModel.onDidChangeContent((modelContentChangedEvent) => {
				updateClassNameInVariableFile(i)
			})
			
		}
		
		const pageClassNames = $pages.map(
			p => getClassName(p.code),
		)
		
		const pagesMonacoModel = monaco.editor.createModel(
			pageClassNames.map(
				n => `class ${n} extends Page{}`,
			).join(`\n`),
			`javascript`,
		)
		
		monacoCodeEditor = monaco.editor.create(editorContainer, {
			model: codeFiles[0].monacoClassModel,
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
		})
		
		return {
			onDestroy(){
				monacoCodeEditor.dispose()
				pagesMonacoModel.dispose()
			}
		}
		
	}
	
	onDestroy(save)
	
</script>

<Modal bind:showModal>
	<div class="edit-page-template-modal">
		
		<div class="preview-section">
			
			<div
				class="app-component"
				style:width={`${$editorSettings.codeScreen.widthInMm}mm`}
				style:height={`${$editorSettings.codeScreen.heightInMm}mm`}
			>
				{#key forceAppRestartKey}
					<ViewApp
						createAppCode={getCreateAppCode(
							$app,
							$pages,
							{code: pageTemplate.code},
						)}
					/>
				{/key}
			</div>
			
			<div class="preview-buttons">
				<button on:click={save}>
					Restart
				</button>
			</div>
			
		</div>
		
		<div class="menu">
			<h2>Menu</h2>
			
			<button on:click={() => showModal = false}>
				Save and close
			</button>
			
			<button on:click={remove}>
				Delete this page template
			</button>
			
		</div>
		
		<div class="code-editor">
			<MonacoLoader let:monaco>
				
				<div
					use:showCodeEditor={monaco}
					style="height: 100%;"
				></div>
				
			</MonacoLoader>
		</div>
		
	</div>
</Modal>

<style>

.edit-page-template-modal{
	padding: 1em;
	background-color: orange;
	border-radius: 1em;
	gap: 0.5em;
	display: grid;
	grid-template-columns: auto 1fr ;
	grid-template-rows: auto 1fr;
	align-items: center;
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
}

.preview-section{
	grid-row: 1;
	grid-column: 1;
	padding: 0.5em;
}

.preview-buttons{
	text-align: center;
	
	& button{
		display: block;
		margin: 0 auto;
		margin-top: 1em;
	}
	
}

.menu{
	grid-row: 2;
	grid-column: 1;
	text-align: center;
	background-color: silver;
	height: 100%;
	border-radius: 1em;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5em;
	
	& > h2{
		margin: 0;
		padding: 0.25em;
	}
	
}

.code-editor{
	grid-row: 1 / span 2;
	grid-column: 2;
	height: 100%;
}

.app-component{
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
	resize: both;
	overflow: hidden;
}

</style>