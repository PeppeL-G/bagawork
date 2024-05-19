import fs from 'node:fs'
import path from 'node:path'
import { getCompressedProject, getDecompressedProject } from '../../editor/src/functions/project-compressor.js'

// Run from this folder:
// node replace-in-all-baga-projects.js

/*
// Rows( -> Rows.children(
const find = /(Text|Button|Rows|Columns|Space)\(/g
const replacer = (match, componentName) => {
	if(["Text", "Button"].includes(componentName)){
		return `${componentName}.text(`
	} else if (componentName == `Space`) {
		return `${componentName}.child(`
	} else {
		return `${componentName}.children(`
	}
}
*/

/*
// Rows...)(\n -> Rows...).children(\n
const find = /(Text|Button|Rows|Columns|Space)(.*)\)\(/g
const replacer = (match, componentName, things) => {
	if(["Text", "Button"].includes(componentName)){
		return `${componentName}${things}).text(`
	} else if (componentName == `Space`) {
		return `${componentName}${things}).child(`
	} else {
		return `${componentName}${things}).children(`
	}
}
*/

const find = /(Hello), (World)!/g
const replacer = (match, hello, world) => {
	return `${hello.toLowerCase()}, ${world.toLowerCase()}!`
}

const rootFolderPath = '../src/routes'

const entryPaths = fs.readdirSync(rootFolderPath, {
	recursive: true,
})

for (const entryPath of entryPaths){
	
	if (entryPath.endsWith('.md')){
		
		const filePath = path.join(rootFolderPath, entryPath)
		
		const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})
		
		// baga=eNq...g==]
		const findCodeRegExp = /baga=([^\]]+)/g
		
		const codeReplacer = (match, bagaCode) => {
			
			const project = getDecompressedProject(bagaCode)
			
			project.app.code = project.app.code.replaceAll(
				find,
				replacer,
			)
			
			for (const page of project.pages) {
				page.code = page.code.replaceAll(
					find,
					replacer,
				)
			}
			
			for (const pageTemplate of project.pageTemplates) {
				pageTemplate.code = pageTemplate.code.replaceAll(
					find,
					replacer,
				)
			}
			
			const newBagaCode = getCompressedProject(project)
			
			return `baga=${newBagaCode}`
			
		}
		
		const newFileContent = fileContent.replaceAll(
			findCodeRegExp,
			codeReplacer,
		)
		
		fs.writeFileSync(filePath, newFileContent)
		
	}
	
}