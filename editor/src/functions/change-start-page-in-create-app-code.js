import { getClassName } from "./get-class-name.js"

export function changeStartPageInCreateAppCode(createAppCode, newStartPage){
	
	const newStartPageName = getClassName(newStartPage.code)
	
	// This is a bit brittle, but let's hope no one
	// writes complicated code in createStartPage() ^^
	const replacedCode = createAppCode.replace(
		/createStartPage\s*\(\s*\)\s*\{\s*return\s[^}]+\}/,
		`createStartPage(){ return ${newStartPageName} }`,
	)
	
	if(replacedCode != createAppCode){
		return replacedCode
	}
	
	console.log(replacedCode)
	
	// Assume createStartPage() is missing, so simply add our own.
	return createAppCode.replace(
		/extends\s*App\s*{/,
		`extends App{ createStartPage(){ return ${newStartPageName} }`
	)
	
}