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
	
	createElement(frameworkApp, onChange){
		
		const rowsElement = document.createElement(`div`)
		rowsElement.classList.add(`rows`)
		
		rowsElement.style.display = 'grid'
		rowsElement.style.gridTemplateColumns = '100%'
		rowsElement.style.overflow = 'auto'
		rowsElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		function onChildComponentsChanged(){
			
			rowsElement.style.gridTemplateRows = childComponents.map(
				c => c._size == 0 ? `minmax(auto, max-content)` : `${c._size}fr`
			).join(` `)
			
			onChange?.()
			
		}
		
		onChildComponentsChanged()
		
		for (const childComponent of childComponents) {
			
			rowsElement.appendChild(
				childComponent.createElement(
					frameworkApp,
					onChildComponentsChanged,
				),
			)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			rowsElement,
		)
		
		return rowsElement
		
	}
	
}