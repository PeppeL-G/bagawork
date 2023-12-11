import { getClassName } from "./get-class-name.js"

// The generated code will look like this:
const code = `
function createApp({a, p}){
	
	const StartPage = createPageCreator(class StartPage extends Page{
		// ...
	})
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

function getPageCodeWithPageCreator(pageCode){
	
	const pageName = getClassName(pageCode)
	
	return `const ${pageName} = createPageCreator(${pageCode})`
	
}

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
		
	const pageCodes = pages.map(
		p => getPageCodeWithPageCreator(
			fakeAllPagesButStartPage && p != startPage ?
			`class ${getClassName(p.code)} extends Page{ }` :
			p.code
		),
	)
	
	// This is used when startPage comes from a page template
	// and does not exist in the pages array.
	if (startPage && !pages.includes(startPage)){
		
		const startPageIndex = pageNames.findIndex(
			n => n ==startPageName,
		)
		
		if(startPageIndex != -1){
			pageCodes[startPageIndex] = startPage.code
		}else{
			pageNames.push(startPageName)
			pageCodes.push(startPage.code)
		}
		
	}
	
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