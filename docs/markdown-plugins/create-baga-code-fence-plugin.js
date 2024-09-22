import { visit } from 'unist-util-visit'
import { getCompressedProject } from '@bagawork/editor/src/functions/project-compressor.js'

// Use it like this:
// ```js baga-show-editor-code
// THE-CODE
// ```
// The extra info:
//  - "show" means show and run the app
//  - "editor" means show link to editor
//  - "code" means show code
export function createBagaCodeFencePlugin() {
	return (tree) => {
		visit(tree, (node, index, parent) => {
			if(
				node.type == 'code' &&
				node.meta?.startsWith(`baga`)
			){
				
				/*
					node = {
						type: 'code',
						lang: 'js',
						meta: 'baga-show-editor',
						value: 'class StartPage extends Page{\r\n' +
							'\t...\r\n' +
						'}\r\n' +
						'\r\n' +
						'class DestinationPage extends Page{\r\n' +
							'\t...\r\n' +
						'}',
						position: [Object]
					}
				*/
				
				try{
					
					const code = node.value
					
					const classCodes = code.split(`class `).map(
						classCode => `class ${classCode.trim()}`,
					).filter(
						classCode => classCode != `class `,
					)
					
					const appCode = classCodes.find(
						classCode => classCode.startsWith(`class MyApp`),
					) ?? `class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`
					
					const pageCodes = classCodes.filter(
						classCode => !classCode.startsWith(`class MyApp`),
					)
					
					const project = {
						app: {
							code: appCode,
						},
						pages: pageCodes.map(
							(classCode, i) => ({
								id: i+1,
								folderId: 1,
								code: classCode,
								x: 150 + i*300,
								y: 200,
							})
						)
					}
					
					const children = []
					
					if(node.meta?.includes(`show`)){
						children.push({
							type: 'html',
							value: `<ViewApp project={${JSON.stringify(project)}} />`,
						})
					}
					
					if (node.meta?.includes(`editor`)){
						
						const bagaCode = getCompressedProject(project)
						
						children.push({
							type: 'html',
							value: `<a target="_blank" href="/editor#${bagaCode}" title="Open in our Online Editor">Open in Online Editor</a>`,
						})
						
					}
					
					if(node.meta?.includes(`code`)){
						
						children.push(
							...classCodes.map(
								classCode => ({
									type: 'code',
									lang: 'js',
									meta: null,
									value: classCode,
								})
							)
						)
						
					}
					
					// Replace this node in the parent with new the new nodes.
					parent.children.splice(
						parent.children.indexOf(node),
						1,
						...children,
					)
					
				}catch (error){
					console.error("Error in createBagaCodeFencePlugin():", error)
					console.log("node", JSON.stringify(node, null, 2))
				}
			
			}
		
		})
		
	}
	
}