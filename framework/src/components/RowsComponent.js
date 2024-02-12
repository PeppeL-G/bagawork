import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class RowsComponent extends Component {
	
	_children
	
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
	
	createElement() {
		
		const rowsElement = document.createElement(`div`)
		rowsElement.classList.add(`rows`)
		
		rowsElement.style.display = 'grid'
		rowsElement.style.gridTemplateColumns = '1fr'
		rowsElement.style.height = '100%'
		rowsElement.style.overflow = 'auto'
		rowsElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		for (const childComponent of childComponents) {
			
			rowsElement.appendChild(
				childComponent.createElement(),
			)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			rowsElement,
		)
		
		rowsElement.style.gridTemplateRows = childComponents.map(childComponent => {
			const size = childComponent._size
			if (size != 0) {
				return `minmax(auto, ${size}fr)`
			} else if (childComponent.constructor.name == "SpaceComponent") {
				return '1fr'
			} else if (childComponent.constructor.name == "ImageComponent") {
				return 'max-content'
			} else {
				return 'min-content'
			}
		}).join(" ")
		
		return rowsElement
		
	}
	
}