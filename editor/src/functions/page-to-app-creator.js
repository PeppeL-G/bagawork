import evalExpression from "./eval-expression.js"
import { getClassName } from "./get-class-name.js"

// The generated code will look like this:
const a = `
function createApp({a, p}){
	
	class A_PAGE extends Page{}
	class B_PAGE extends Page{}
	...
	
	class THE_APP extends App{
		...
	}
	
	class THE_PAGE extends Page{
		...
	}
	
	return class extends THE_APP{
		createStartPage(){
			return new THE_PAGE()
		}
	}
	
}
`

export function pageToAppCreator(app, page, allPageNames){
	
	const appName = getClassName(app.code)
	const startPageName = getClassName(page.code)
	
	// Only keep unique page names.
	const pageNames = [...new Set(allPageNames.filter(
		pageName => pageName != startPageName
	))]
	
	const codeExpression = `
function createApp({a, p}){
	
	${pageNames.map(
		name => `class ${name} extends Page{}`
	).join('\n')}
	
	${app.code}
	
	${page.code}
	
	return class extends ${appName}{
		createStartPage(){
			return ${startPageName}
		}
	}
	
}
	`.trim()
	
	const createApp = evalExpression(codeExpression)
	
	return createApp
	
}