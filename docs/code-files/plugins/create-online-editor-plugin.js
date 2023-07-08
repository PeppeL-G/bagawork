import { visit } from 'unist-util-visit'

// Use it like this:
// ::editor
export function createOnlineEditorPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type == 'textDirective' && node.name == 'online-editor') {

				/*
				node = {
					type: 'textDirective',
					name: 'editor-link',
					position: {
						start: { line: 8, column: 1, offset: 128 },
						end: { line: 8, column: 41, offset: 168 }
					}
				}
				*/
				node.data = node.data ?? {}
				
				node.data.hName = "a"
				node.data.hProperties = {
					target: `_blank`,
					href: `/editor`,
					title: `Open our Online Editor`,
				}
				node.children = [{
					type: 'text',
					value: 'Online Editor',
				}]
				
			}
		})
	}
}