import fs from 'node:fs'
import path from 'node:path'
import { getDecompressedProject } from '../../editor/src/functions/project-compressor.js'

// Run from this folder:
// node replace-in-all-baga-projects.js

/*
::bagawork-project[app&link&code=StartPage-DestinationPage&baga=eNqVkVFrgzAUhf+Ku08KoWyOls03y6D0YTC2wjZmwaDXVaqJJFfWIvnvi3Xa6sOgT7m5yTn3O0kDvKogaCCRKUIAScG1dp6PYVU5eCAUqXZs3UQiokQhJ3wjruiFf6PrnboRKaRaCWc4aLsmEgYMg0wWKSoNwVcDeQrBHQPBy3bS6TowkFmmkT4guO3rT1ubLYPKeo2Undm624yAh9kDdLu5oF7V+ZR3WRNJMSOrcOOVdGiHCmNv1o51n1BTLjjlUrRO3pCJwQEC/95ncLTr/NGwDs//D2/idgXkq/zRs2SXF6lC4XZHEW2swR/4OxaJLNGhU4DppJvYY71olHfJk32rGR6uDz40euEk+nyx6KIvHvo/2mBZFRZ/9Fej/KHer7MwrQu6IvpFyPgMYbbmFwRb8vg=]
*/

/*
// ```js baga-show-editor
// THE-CODE
// ```
*/

const defaultAppCode = `class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`

const findExpression = /::bagawork-project\[(.*)]/g
const replacer = (match, info) => {
	
	const attributes = Object.fromEntries(
		info.split(`&`).map(
			s => s.split(`=`, 2),
		).map(
			([n, v]) => [n, v || true]
		)
	)
	
	const project = getDecompressedProject(attributes.baga)
	
	const infoParts = [`baga`]
	
	if(attributes.app){
		infoParts.push(`show`)
	}
	
	if (attributes.link){
		infoParts.push(`editor`)
	}
	
	const newCode = `
${project.app.code == defaultAppCode ? `` : project.app.code}

${project.pages.map(
	p => p.code,
).join(`\n\n`)}
	`.trim()
	
	const newContent = `
\`\`\`js ${infoParts.join(`-`)}
${newCode}
\`\`\`
`.trim()
	
	return newContent
	
}

const rootFolderPath = '../src/routes/'

const entryPaths = fs.readdirSync(rootFolderPath, {
	recursive: true,
})

for (const entryPath of entryPaths){
	
	if (entryPath.endsWith('.md')){
		
		const filePath = path.join(rootFolderPath, entryPath)
		
		const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
		
		const newFileContent = fileContent.replaceAll(
			findExpression,
			replacer,
		)
		
		fs.writeFileSync(filePath, newFileContent)
		
	}
	
}