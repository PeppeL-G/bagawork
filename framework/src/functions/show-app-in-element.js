import { FrameworkApp } from '../classes/FrameworkApp.js'

export async function showAppInElement(
	createApp,
	screenElement,
	runtimeSettings=null,
){
	
	// Wait for voices to load (stupid Chrome...).
	// https://stackoverflow.com/a/59786665
	await (new Promise((resolve, reject) => {
		
		const voices = window.speechSynthesis.getVoices()
		
		if (0 < voices.length) {
			resolve()
		} else {
			window.speechSynthesis.addEventListener(`voiceschanged`, resolve)
		}
		
	}))
	
	const frameworkApp = new FrameworkApp(
		createApp,
		runtimeSettings,
	)
	
	frameworkApp.start()
	
	if(!screenElement.shadowRoot){
		screenElement.attachShadow({
			mode: "open",
		})
	}
	
	screenElement.shadowRoot.replaceChildren(
		frameworkApp.createElement(),
	)
	
}