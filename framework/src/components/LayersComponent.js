import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class LayersComponent extends Component {
	
	_children = []
	
	children(...children){
		this._children = children.flat(Infinity)?.filter(
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
	
	createElement(){
		
		const layersElement = document.createElement(`div`)
		layersElement.classList.add(`layers`)
		
		layersElement.style.display = 'grid'
		layersElement.style.gridTemplateRows = '1fr'
		layersElement.style.gridTemplateColumns = '1fr'
		layersElement.style.width = '100%'
		layersElement.style.height = '100%'
		layersElement.style.overflow = 'auto'
		layersElement.style.boxSizing = 'border-box'
		
		// Fix HTML.
		const childComponents = this._children.filter(
			c => c.keepIf,
		)
		
		for (const childComponent of childComponents) {
			
			const childElement = childComponent.createElement()
			
			layersElement.appendChild(
				childElement,
			)
			
			// Fix CSS for the child.
			childElement.style.gridRow = '1'
			childElement.style.gridColumn = '1'
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			layersElement,
		)
		
		return layersElement
		
	}
	
}