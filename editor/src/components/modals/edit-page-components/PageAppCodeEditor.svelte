<script>
	
	export let monaco = null
	export let pageId = 1
	export let selectedFileIndex = 0
	
	import { getClassName } from '../../../functions/get-class-name.js'
	import { app, pages } from '../../../stores.js'
	import { onDestroy } from 'svelte'
	
	const page = $pages.find(
		p => p.id == pageId,
	)
	
	$: {
		if(monacoEditor){
			monacoEditor.setModel(
				codeFiles[selectedFileIndex].monacoClassModel,
			)
		}
	}
	
	const codeFiles = [
		{variable: `p`, code: page.code},
		{variable: `a`, code: $app.code},
	].map(f => ({
		variable: f.variable,
		className: getClassName(f.code),
		monacoClassModel: monaco.editor.createModel(
			f.code,
			`javascript`,
		),
		monacoVariableModel: monaco.editor.createModel(
			`const ${f.variable} = new ${getClassName(f.code)}()`,
			`javascript`,
		),
	}))
	
	const otherPageClassNames = $pages.filter(
		p => p.id != pageId,
	).map(
		p => getClassName(p.code),
	)
	
	const otherPagesMonacoModel = monaco.editor.createModel(
		otherPageClassNames.map(
			n => `class ${n} extends Page{}`,
		).join(`\n`),
		`javascript`,
	)
	
	function updateClassNameByFileIndex(fileIndex){
		
		const file = codeFiles[fileIndex]
		
		const className = getClassName(
			file.monacoClassModel.getValue(),
		)
		
		if(codeFiles[fileIndex].className != className){
			
			codeFiles[fileIndex].className = className
			
			codeFiles[fileIndex].monacoVariableModel.setValue(
				`const ${file.variable} = new ${className}();`
			)
			
			// Need to save so tab titles are updated in parent component.
			save()
			
		}
		
	}
	
	for(let i=0; i<codeFiles.length; i++){
		
		const file = codeFiles[i]
		
		updateClassNameByFileIndex(i)
		
		file.monacoClassModel.onDidChangeContent((modelContentChangedEvent) => {
			updateClassNameByFileIndex(i)
		})
		
	}
	
	let monacoEditor
	
	function showCodeEditor(editorContainer){
		
		monacoEditor = monaco.editor.create(editorContainer, {
			model: codeFiles[selectedFileIndex].monacoClassModel,
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
		] = codeFiles
		
		page.code = pageFile.monacoClassModel.getValue()
		$pages = $pages
		
		$app.code = appFile.monacoClassModel.getValue()
		
	}
	
	onDestroy(() => {
		
		save()
		
		monacoEditor.dispose()
		
		for(const file of codeFiles){
			file.monacoClassModel.dispose()
			file.monacoVariableModel.dispose()
		}
		
		otherPagesMonacoModel.dispose()
		
	})
	
</script>

<div
	class="monaco"
	use:showCodeEditor
/>

<style>
	
	.monaco{
		background-color: white;
		color: black;
		height: 100%;
	}
	
</style>