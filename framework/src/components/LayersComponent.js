import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class LayersComponent extends Component {
	
	_specificTypeName = `Layers`
	
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
	
	onAfter(a, p) {
		for (const child of this._children) {
			child.onAfter(a, p)
		}
	}
	
	createAfterDirections() {
		return this._children.map(
			c => c.createAfterDirections()
		).flat()
	}
	
	createElement(frameworkApp, parentComponent){
		
		const layersElement = document.createElement(`div`)
		layersElement.classList.add(`layers`)
		
		layersElement.style.display = 'grid'
		layersElement.style.gridTemplateRows = '1fr'
		layersElement.style.gridTemplateColumns = '1fr'
		layersElement.style.overflow = 'auto'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c._keepIf,
		)
		
		let i = 1
		
		for (const childElement of layersElement.childNodes) {
			
			// Fix CSS for the child.
			childElement.style.gridRow = '1'
			childElement.style.gridColumn = '1'
			childElement.style.zIndex = i
			
			i++
			
		}
		
		for (const childComponent of childComponents) {
			
			const childElement = childComponent.createElement(
				frameworkApp,
				this,
			)
			
			layersElement.appendChild(
				childElement,
			)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			layersElement,
		)
		
		return layersElement
		
	}
	
	onChildUpdated(newChildComponent, newChildElement){
		
		newChildElement.style.gridRow = '1'
		newChildElement.style.gridColumn = '1'
		newChildElement.style.zIndex = Array.from(newChildElement.parentNode.children).indexOf(newChildElement) + 1
		
	}
	
}