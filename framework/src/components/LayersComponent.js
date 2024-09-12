import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class LayersComponent extends Component {
	
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
	
	createElement(frameworkApp, onChange){
		
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
		
		function onChildComponentsChanged(){
			
			for (const childElement of layersElement.childNodes) {
				
				// Fix CSS for the child.
				childElement.style.gridRow = '1'
				childElement.style.gridColumn = '1'
				
			}
			
			onChange?.()
			
		}
		
		for (const childComponent of childComponents) {
			
			const childElement = childComponent.createElement(
				frameworkApp,
				onChildComponentsChanged,
			)
			
			layersElement.appendChild(
				childElement,
			)
			
		}
		
		onChildComponentsChanged()
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			layersElement,
		)
		
		return layersElement
		
	}
	
}