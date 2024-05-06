import { visit } from 'unist-util-visit'

// Use it like this:
// :::hint
//
// WHATEVER
//
// :::
//
// To get:
//
// <details>
// 	<summary>Hint</summary>
// 	WHATEVER
// </details >
export function createHintPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type == 'containerDirective' && node.name == 'hint') {
				
				/*
				node = {
					type: 'containerDirective',
					name: 'hint',
					children: [ { type: 'text', value: 'rows', position: [Object] } ],
					position: {
						start: { line: 8, column: 1, offset: 128 },
						end: { line: 8, column: 41, offset: 168 }
					}
				}
				*/
				
				const summaryNode = {
					type: `textDirective`,
					children: [{
						type: 'text',
						value: 'Hint',
					}],
					data: {
						hName: `summary`,
					},
				}
				
				node.data = node.data ?? {}
				node.data.hName = `details`
				node.children.unshift(summaryNode)
				
			}
		})
	}
}