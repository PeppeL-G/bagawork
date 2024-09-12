import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class BoxComponent extends Component {
	
	_width = -1
	_height = -1
	_left = false
	_right = false
	_top = false
	_bottom = false
	_aspectRatioWidth = -1
	_aspectRatioHeight = -1
	_child = null
	
	width(width) {
		
		validateArgs(
			this,
			`width`,
			[`number`],
			arguments,
		)
		
		this._width = width
		return this
	}
	
	height(height) {
		
		validateArgs(
			this,
			`height`,
			[`number`],
			arguments,
		)
		
		this._height = height
		return this
	}
	
	left() {
		
		validateArgs(
			this,
			`left`,
			[],
			arguments,
		)
		
		this._left = true
		return this
	}
	
	right() {
		
		validateArgs(
			this,
			`right`,
			[],
			arguments,
		)
		
		this._right = true
		return this
	}
	
	top() {
		
		validateArgs(
			this,
			`top`,
			[],
			arguments,
		)
		
		this._top = true
		return this
	}
	
	bottom() {
		
		validateArgs(
			this,
			`bottom`,
			[],
			arguments,
		)
		
		this._bottom = true
		return this
	}
	
	aspectRatio(width, height) {
		
		validateArgs(
			this,
			`aspectRatio`,
			[`number`, `number`],
			arguments,
		)
		
		this._aspectRatioWidth = width
		this._aspectRatioHeight = height
		return this
	}
	
	child(child) {
		
		validateArgs(
			this,
			`child`,
			[`Component`],
			arguments,
		)
		
		this._child = child
		return this
	}
	
	onAfter(a, p) {
		this._child?.onAfter()
	}
	
	createAfterDirections() {
		return this._child?.createAfterDirections() ?? []
	}
	
	createElement(frameworkApp, onChange){
		
		const boxElement = document.createElement(`div`)
		boxElement.classList.add(`box`)
		boxElement.style.display = 'grid'
		boxElement.style.gridTemplateRows = '1fr'
		boxElement.style.gridTemplateColumns = '1fr'
		boxElement.style.alignItems = 'center'
		boxElement.style.justifyItems = 'center'
		
		if (this._child?._keepIf ?? false) {
			
			const childElement = document.createElement(`div`)
			childElement.style.display = 'grid'
			childElement.style.gridTemplateRows = '1fr'
			childElement.style.gridTemplateColumns = '1fr'
			childElement.style.height = "100%"
			childElement.style.width = "100%"
			
			childElement.appendChild(
				this._child.createElement(
					frameworkApp,
					onChange,
				),
			)
			boxElement.appendChild(childElement)
			
			if (this._aspectRatioWidth != -1) {
				
				childElement.style.setProperty(
					'--aspect-ratio',
					`${this._aspectRatioWidth} / ${this._aspectRatioHeight}`,
				)
				childElement.style.aspectRatio = `var(--aspect-ratio)`
				
				if (this._width == -1) {
					childElement.style.width = `auto`
				}
				
				if (this._height == -1) {
					childElement.style.height = `auto`
				}
				
				if (this._width == -1 && this._height == -1) {
					
					boxElement.style.containerType = "size"
					childElement.style.width = `min(100cqw, 100cqh * var(--aspect-ratio))`
					
				}
				
			}
			
			if(this._width != -1 && this._height != -1){
				boxElement.style.overflow = "auto"
			}
			
			if (this._width != -1) {
				childElement.style.width = `${this._width}mm`
			}
			if (this._height != -1) {
				childElement.style.height = `${this._height}mm`
			}
			
			if (this._top) {
				boxElement.style.alignItems = 'start'
			}
			if (this._bottom) {
				boxElement.style.alignItems = 'end'
			}
			if (this._left) {
				boxElement.style.justifyItems = 'start'
			}
			if (this._right) {
				boxElement.style.justifyItems = 'end'
			}
			
		}
		
		if(!this._child){
			
			if (this._width != -1) {
				boxElement.style.width = `${this._width}mm`
			}
			if (this._height != -1) {
				boxElement.style.height = `${this._height}mm`
			}
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			boxElement,
		)
		
		return boxElement
		
	}
	
}