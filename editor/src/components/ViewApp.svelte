<script>
	
	export let startPage
	
	import ViewFrameworkApp from './ViewFrameworkApp.svelte'
	import { app } from '../stores.js'
	import { projectToAppCreator } from '../functions/project-to-app-creator.js'
	import { createFrameworkApp } from '@bagawork/core'
	
	let frameworkApp = null
	let errorMessage = ""
	
	$: {
		
		errorMessage = ""
		
		try{
			
			const createApp = projectToAppCreator(
				$app,
				startPage,
			)
			frameworkApp = createFrameworkApp(
				createApp,
				{isPreview: false}
			)
			frameworkApp.start()
			
		}catch(error){
			console.log("Error creating/starting app:", error)
			errorMessage = error.toString()
		}
		
	}
	
</script>

<ViewFrameworkApp
	{frameworkApp}
	{errorMessage}
/>