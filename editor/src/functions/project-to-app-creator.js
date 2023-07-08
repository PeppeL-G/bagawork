import evalExpression from "./eval-expression.js"
import { getClassName } from "./get-class-name.js"
import { pages } from '../stores.js'
import { get } from "svelte/store"

// The generated code will look like this:
const a = `
function createApp({a, p}){
	
	class MyApp extends App{
		createStartPage(){
			return new StartPage()
		}
	})
	
	class StartPage extends Page{
		// ...
	}
	// ...
	
	class MyAppAbc123 extends MyApp{
		createStartPage(){
			return new MenuPage()
		}
	}
	
	return MyAppAbc123
	
}
`

export function projectToAppCreator(app, startPage = null, fakePages = null) {

	const startPageName = (
		startPage ?
			getClassName(startPage.code) :
			null
	)
	const appName = getClassName(app.code)
	const ownAppName = appName + 'Abc123'

	const allPages = fakePages ?? get(pages)

	const allPageCodes = allPages.map(
		p => p.code
	)

	if (startPage != null) {
		if (!allPageCodes.includes(startPage.code)) {
			allPageCodes.push(startPage.code)
		}
	}

	const code = `
function createApp({a, p}){

${app.code}

${allPageCodes.join("\n\n")}

class ${ownAppName} extends ${appName}{
	createStartPage(){
		return ${startPageName ?
			`${startPageName}` :
			`super.createStartPage()`
		}
	}
}

return ${ownAppName}

}
	`.trim()

	const createApp = evalExpression(code)

	return createApp

}