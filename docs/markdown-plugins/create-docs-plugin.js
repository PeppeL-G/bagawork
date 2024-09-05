import { visit } from 'unist-util-visit'

// Use it like this:
// :docs[Rows]
export function createDocsPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type == 'textDirective' && node.name == 'docs') {

				/*
				node = {
					type: 'textDirective',
					name: 'docs',
					children: [ { type: 'text', value: 'Rows', position: [Object] } ],
					position: {
						start: { line: 8, column: 1, offset: 128 },
						end: { line: 8, column: 41, offset: 168 }
					}
				}
				*/
				
				const name = node.children[0].value // runUpdater
				const nameParts = name.split(/(?=[A-Z])/) // [`run`, `Updater`]
				const urlName = nameParts.map(n => n.toLowerCase()).join(`-`) // `run-updater`
				
				node.data = node.data ?? {}
				
				node.data.hName = "a"
				node.data.hProperties = {
					href: `/documentation/${urlName}/`,
					title: `Open the documentation for ${name}.`,
				}
				node.children = [{
					type: 'text',
					value: `${name}`,
				}]
				
			}
		})
	}
}