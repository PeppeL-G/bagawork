import fs from 'node:fs'
import path from 'node:path'
import { getCompressedProject, getDecompressedProject } from '../../editor/src/functions/project-compressor.js'

const rootFolderPath = '../code-files/'

const find = 'Space.size(1)'
const replace = 'Space'

const entryPaths = fs.readdirSync(rootFolderPath, {
	recursive: true,
})

for (const entryPath of entryPaths){
	
	if (entryPath.endsWith('.baga')){
		
		const filePath = path.join(rootFolderPath, entryPath)
		
		const bagaCode = fs.readFileSync(filePath, {encoding: 'utf8'})
		
		const project = getDecompressedProject(bagaCode)
		
		project.app.code = project.app.code.replaceAll(
			find,
			replace,
		)

		for (const page of project.pages) {
			page.code = page.code.replaceAll(
				find,
				replace,
			)
		}

		for (const pageTemplate of project.pageTemplates) {
			pageTemplate.code = pageTemplate.code.replaceAll(
				find,
				replace,
			)
		}
		
		const newBagaCode = getCompressedProject(project)
		
		fs.writeFileSync(filePath, newBagaCode)
		
	}
	
}