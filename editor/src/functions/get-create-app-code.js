import { getClassName } from "./get-class-name.js"

// The generated code will look like this:
const code = `
function createApp({a, p}){
	
	class StartPage extends Page{
		// ...
	}
	// ...
	
	return {
		App: (class THE_APP extends App{
			...
		}),
		Pages: {
			StartPage, ...
		},
	}
	
}
`

export function getCreateAppCode(
	app,
	pages,
	startPage = null,
	fakeAllPagesButStartPage = false,
){
	
	const startPageName = (
		startPage ?
		getClassName(startPage.code) :
		""
	)
	
	const pageNames = pages.map(
		p => getClassName(p.code),
	)
	
	// This is used when startPage comes from  a page template
	// and does not exist in the pages argument.
	if (startPage && !pageNames.includes(startPageName)) {
		
		pageNames.push(startPageName)
		pages = [
			...pages,
			startPage,
		]
		
	}
	
	const pageCodes = pages.map(
		p => (
			fakeAllPagesButStartPage && p != startPage ?
			`class ${getClassName(p.code)} extends Page{ }` :
			p.code
		),
	)
	
	const appCode = (
		startPage ?
		app.code.replace(
			/\}\s*$/,
			`createStartPage(){ return ${startPageName} } }`,
		) :
		app.code
	)

	let createAppCode = `
function createApp({a, p}){
	
	${pageCodes.join(`\n\n`)}
	
	return {
		App: (${appCode}),
		Pages: {
			${pageNames.join(`, `)}
		}
	}
	
}
	`.trim()
	
	return createAppCode
	
}