<script>
	
	export let pageId
	export let monaco
	
	import { getClassName } from '../functions/get-class-name.js'
	import { app, pages } from '../stores.js'
	import { onDestroy } from 'svelte'
	
	const page = $pages.find(
		p => p.id == pageId,
	)
	
	let selectedFileIndex = 0
	
	const files = [
		{variable: `p`, code: page.code},
		{variable: `a`, code: $app.code},
	].map(f => ({
		variable: f.variable,
		className: getClassName(f.code),
		monacoClassModel: monaco.editor.createModel(
			f.code,
			`javascript`,
			//monaco.Uri.parse(`file:///${}.js`),
		),
		monacoVariableModel: monaco.editor.createModel(
			``, // Written later...
			`javascript`,
			//monaco.Uri.parse(`file:///${}.js`),
		),
	}))
	
	function selectFile(index){
		
		monacoEditor.setModel(
			files[index].monacoClassModel,
		)
		
		selectedFileIndex = index
		
	}
	
	function updateClassNameByFileIndex(fileIndex){
		
		const file = files[fileIndex]
		
		const className = getClassName(
			file.monacoClassModel.getValue(),
		)
		
		files[fileIndex].className = className
		
		files[fileIndex].monacoVariableModel.setValue(
			`const ${file.variable} = new ${className}();`
		)
		
	}
	
	for(let i=0; i<files.length; i++){
		
		const file = files[i]
		
		updateClassNameByFileIndex(i)
		
		file.monacoClassModel.onDidChangeContent((modelContentChangedEvent) => {
			updateClassNameByFileIndex(i)
		})
		
	}
	
	let monacoEditor
	
	async function showEditor(editorContainer){
		
		monacoEditor = monaco.editor.create(editorContainer, {
			model: files[0].monacoClassModel,
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
		
	}
	
	export function save(){
		
		const [
			pageFile,
			appFile,
		] = files
		
		page.code = pageFile.monacoClassModel.getValue()
		$pages = $pages
		
		$app.code = appFile.monacoClassModel.getValue()
		
	}
	
	onDestroy(() => {
		
		save()
		
		monacoEditor.dispose()
		
		for(const file of files){
			file.monacoClassModel.dispose()
			file.monacoVariableModel.dispose()
		}
		
	})
	
</script>

<div class="code-editor-with-tabs">
	
	<div class="tab-names-child">
		
		{#each files as file, i}
			<button
				class:is-selected={selectedFileIndex == i && monacoEditor != null}
				on:click={() => selectFile(i)}
				disabled={monacoEditor == null}
			>
				{file.className}
			</button>
		{/each}
		
	</div>
	
	<div class="code-editor-child2">
		<div
			class="monaco"
			use:showEditor
		/>
	</div>
	
</div>

<style>
	
	.code-editor-with-tabs{
		
		width: 100%;
		height: 100%;
		
		display: grid;
		grid-template-rows: min-content 1fr;
		grid-template-columns: 100%;
		
	}
	
	.tab-names-child{
		
		& button{
			&.is-selected{
				font-weight: bold;
			}
		}
		
	}
	
	.code-editor-child2{
		grid-row: 2;
		
		& .monaco{
			background-color: white;
			color: black;
			height: 100%;
		}
		
	}
	
</style>