import { visit } from "unist-util-visit"

export function createRehypeTransformPlugin() {
	
	return function transformer(tree) {
		
		visit(
			tree,
			isAnchorNode,
			transformAnchorNode,
		)
		
	}
	
}

function isAnchorNode(node) {
	return node.tagName == `a`
}

function transformAnchorNode(anchorNode) {
	
	const href = anchorNode.properties.href ?? ``
	
	if(href.startsWith(`http`) || href.startsWith(`/editor`)){
		
		anchorNode.properties = anchorNode.properties ?? {}
		
		anchorNode.properties.target = `_blank`
		
	}
	
}