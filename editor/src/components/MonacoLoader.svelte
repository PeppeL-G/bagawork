<script>
	
	import monacoLoader from '@monaco-editor/loader'
	
	monacoLoader.config({
		paths: {
			vs: `https://cdn.jsdelivr.net/npm/monaco-editor@0.52.0/min/vs`,
		},
	})
	
	async function getMonaco(){
		
		const monaco = await monacoLoader.init()
		
		monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
	 		noLib: true,
			allowNonTsExtensions: true,
		})
		
		const typeDefinitionFiles = Object.values(
			import.meta.glob(
				`../editor-type-definitions/**`,
				{
					eager: true,
					as: `raw`
				},
			),
		)
		
		monaco.languages.typescript.javascriptDefaults.setExtraLibs(
			typeDefinitionFiles.map(
				typeDefinition => ({
					content: typeDefinition,
				}),
			),
		)
		
		return monaco
		
	}
	
	
</script>

{#await getMonaco()}
	<p>Loading the editor...</p>
{:then monaco}
	<slot {monaco} />
{/await}