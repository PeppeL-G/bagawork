import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class ColumnsComponent extends Component{
	
	_children = []
	
	children(...children) {
		
		const flattenedChildren = children.flat(Infinity)
		
		validateArgs(
			this,
			`children`,
			flattenedChildren.map(c => `Component`),
			flattenedChildren,
		)
		
		this._children = flattenedChildren.filter(
			c => c,
		)
		return this
	}
	
	onAfter(a, p){
		for(const child of this._children){
			child.onAfter(a, p)
		}
	}
	
	createAfterDirections(){
		
		return this._children.map(
			c => c.createAfterDirections()
		).flat()
		
	}
	
	createElement(){
		
		const columnsElement = document.createElement(`div`)
		columnsElement.classList.add(`columns`)

		columnsElement.style.display = 'grid'
		columnsElement.style.gridTemplateRows = '100%'
		columnsElement.style.overflow = 'auto'
		columnsElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		columnsElement.style.gridTemplateColumns = childComponents.map(
			c => c._size == 0 ? `max-content` : `${c._size}fr`
		).join(` `)
		
		for (const childComponent of childComponents) {
			
			columnsElement.appendChild(
				childComponent.createElement(),
			)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			columnsElement,
		)
		
		return columnsElement
		
	}
	
}