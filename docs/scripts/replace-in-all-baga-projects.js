import fs from 'node:fs'
import path from 'node:path'
import { getCompressedProject, getDecompressedProject } from '../../editor/src/functions/project-compressor.js'

// Run from this folder:
// node replace-in-all-baga-projects.js

const findExpression = /size\(/g
const replacer = (match) => {
	return `grow(`
}

const findBagaCodeExpression = /url=http:\/\/localhost:8080\/editor\/#(.*?)\]/g
const bagaCodeReplacer = (match, bagaCode) => {
	
	const project = getDecompressedProject(bagaCode)
	
	project.app.code = project.app.code.replaceAll(
		findExpression,
		replacer,
	)
	
	for(const page of project.pages){
		page.code = page.code.replaceAll(
			findExpression,
			replacer,
		)
	}
	
	if(project.templatePages){
		for(const templatePage of project.templatePages){
			templatePage.code = templatePage.code.replaceAll(
				findExpression,
				replaceFunction,
			)
		}
	}
	
	const newBagaCode = getCompressedProject(project)
	
	return `url=http://localhost:8080/editor/#${newBagaCode}]`
	
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
			findBagaCodeExpression,
			bagaCodeReplacer,
		)
		
		fs.writeFileSync(filePath, newFileContent)
		
	}
	
}