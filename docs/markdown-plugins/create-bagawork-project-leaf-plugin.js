import { visit } from 'unist-util-visit'
import { getDecompressedProject, getCompressedProject } from '@bagawork/editor/src/functions/project-compressor.js'
import { getClassName } from '@bagawork/editor/src/functions/get-class-name.js'

// Use it like this:
// ::bagawork-project[editor&show&code=StartPage&url=http://localhost:8080/editor/#eNp1UM...8ok4=]
// The query string parameters:
//  - "show" means show the app
//  - "code" means show the code for app and all pages
//  - "code=StartPage-MyApp-AboutPage" means that only the code for
//     StartPage, MyApp and AboutPage should be shown (in that order)
//  - "editor" means show link to editor
//  - "link" should contain the link to the bagawork project in the editor
export function createBagaworkProjectLeafPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type == 'leafDirective' && node.name == 'bagawork-project') {

				/*
				node = {
					type: 'leafDirective',
					name: 'bagawork-project',
					attributes: {},
					children: [ { type: 'text', value: 'editor&show&code=StartPage&url=#http://localhost:8080/editor/#eNp1UM...8ok4=', position: [Object] } ],
					position: {
						start: { line: 8, column: 1, offset: 128 },
						end: { line: 8, column: 41, offset: 168 }
					}
				}
				*/

				try {
					
					const params = node.children[0].value.split("&").map(s => ({
						name: s.substring(
							0,
							s.indexOf("=") == -1 ? s.length : s.indexOf("="),
						),
						value: s.indexOf("=") == -1 ? null : s.substring(
							s.indexOf("=") + 1,
						),
					}))
					
					const bagaCode = params.find(
						p => p.name == 'url',
					).value.split(`http://localhost:8080/editor/#`)[1]
					
					const project = getDecompressedProject(bagaCode)
					
					delete project.editorSettings
					delete project.pageTemplates
					
					const children = params.filter(
						p => ["show", "code", "editor"].includes(p.name)
					).map(p => {
						
						switch (p.name){
							
							case 'show':
								return createShowAppNode(project)
							
							case 'code':
								
								if (!p.value){
									
									return [
										createCodeNode(project.app.code),
										...project.pages.map(
											p => createCodeNode(p.code),
										),
									]
									
								} else {
									
									const classNames = p.value.split("-")
									
									return classNames.map(className => {
										
										if(getClassName(project.app.code) == className){
											return createCodeNode(project.app.code)
										}else{
											const page = project.pages.find(
												p => getClassName(p.code) == className
											)
											if(!page){
												console.error(`Can't find the page with name ${className}.`)
												console.error(node.children[0].value)
											}
											return createCodeNode(page.code)
										}
										
									})
									
								}
							
							case 'editor':
								return createLinkToEditorNode(project)
							
							default:
								console.error("Unknown query string parameter in ::bagawork-project: " + p.name +".")
								process.exit()
								
						}
						
					}).flat()
					
					node.children = children

				} catch (error) {
					console.error("Error in createBagaworkProjectPlugin():", error)
					console.log("node", JSON.stringify(node, null, 2))
				}

				/*
				const data = node.data || (node.data = {})
				const hast = h(node.name, node.attributes)

				data.hName = hast.tagName
				data.hProperties = hast.properties
				*/
			}
		})
	}
}

function createShowAppNode(project) {
	return {
		type: 'html',
		value: `<ViewApp project={${JSON.stringify(project)}} />`,
	}
}

function createCodeNode(code) {
	return {
		type: 'code',
		lang: 'js',
		value: code
	}
}

function createLinkToEditorNode(project) {
	return {
		type: 'html',
		value: `<a target="_blank" href="/editor#${getCompressedProject(project)}" title="Open in our Online Editor">Open in Online Editor</a>`,
	}
}