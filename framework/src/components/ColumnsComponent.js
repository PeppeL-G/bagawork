import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class ColumnsComponent extends Component{
	
	_specificTypeName = `Columns`
	
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
	
	createElement(frameworkApp, parentComponent){
		
		const columnsElement = document.createElement(`div`)
		columnsElement.classList.add(`columns`)
		
		columnsElement.style.display = 'flex'
		columnsElement.style.flexDirection = 'row'
		columnsElement.style.overflow = 'auto'
		columnsElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		for (const childComponent of childComponents) {
			
			columnsElement.appendChild(
				childComponent.createElement(
					frameworkApp,
					this,
				),
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