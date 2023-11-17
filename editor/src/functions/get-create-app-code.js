import { getClassName } from "./get-class-name.js"
import { changeStartPageInCreateAppCode } from "./change-start-page-in-create-app-code.js"

// The generated code will look like this:
const code = `
function createApp({a, p}){
	
	class StartPage extends Page{
		// ...
	}
	// ...
	
	return (class THE_APP extends App{
		...
	})
	
}
`

export function getCreateAppCode(
	app,
	pages,
	startPage = null,
	fakeAllPagesButStartPage = false,
){
	
	const pageCodes = pages.map(
		p => (
			fakeAllPagesButStartPage && p != startPage ?
			`class ${getClassName(p.code)} extends Page{ }` :
			p.code
		),
	)
	
	// Used for page templates.
	if(startPage != null && !pageCodes.includes(startPage.code)){
		pageCodes.push(startPage.code)
	}
	
	const appCode = (
		!startPage ?
		app.code :
		app.code.replace(
			/\}\s*$/,
			`createStartPage(){ return ${getClassName(startPage.code)} } }`,
		)
	)

	let createAppCode = `
function createApp({a, p}){
	
	${pageCodes.join(`\n\n`)}
	
	return (${appCode})
	
}
	`.trim()
	
	/*
	if (startPage) {
		createAppCode = changeStartPageInCreateAppCode(createAppCode, startPage)
	}
	*/
	
	return createAppCode
	
}