import { visit } from 'unist-util-visit'

// Use it like this:
// :docs[rows]
export function createDocsPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type == 'textDirective' && node.name == 'docs') {

				/*
				node = {
					type: 'textDirective',
					name: 'docs',
					children: [ { type: 'text', value: 'rows', position: [Object] } ],
					position: {
						start: { line: 8, column: 1, offset: 128 },
						end: { line: 8, column: 41, offset: 168 }
					}
				}
				*/
				const className = node.children[0].value
				const classNameCapitalized = className.charAt(0).toUpperCase() + className.slice(1)
				
				node.data = node.data ?? {}
				
				node.data.hName = "a"
				node.data.hProperties = {
					href: `/documentation/${className}/`,
					title: `Open the documentation for ${classNameCapitalized}.`,
				}
				node.children = [{
					type: 'text',
					value: `${classNameCapitalized}`,
				}]
				
			}
		})
	}
}