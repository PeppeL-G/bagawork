import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class RowsComponent extends Component {
	
	_specificTypeName = `Rows`
	
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
		
		const rowsElement = document.createElement(`div`)
		rowsElement.classList.add(`rows`)
		
		rowsElement.style.display = 'grid'
		rowsElement.style.overflow = 'auto'
		rowsElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		for (const childComponent of childComponents) {
			
			const childElement = childComponent.createElement(
				frameworkApp,
				this,
			)
			
			rowsElement.appendChild(
				childElement,
			)
			
		}
		
		this._onChildUpdated = () => {
			rowsElement.style.gridTemplateRows = childComponents.map(
				c => {
					
					const childGrow = c.getGrow()
					const childGrowShrink = c.getGrowShrink()
					
					if(childGrowShrink){
						return `${childGrow}fr`
					}else if(childGrow == 0){
						return `max-content`
					}else{
						return `minmax(max-content, ${childGrow}fr)`
					}
					
				}
			).join(` `)
		}
		
		this._onChildUpdated()
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			rowsElement,
		)
		
		return rowsElement
		
	}
	
}