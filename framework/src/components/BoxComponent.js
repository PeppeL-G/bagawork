import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

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
	
	width(width){
		this._width = width
		return this
	}
	
	height(height) {
		this._height = height
		return this
	}
	
	left() {
		this._left = true
		return this
	}
	
	right() {
		this._right = true
		return this
	}
	
	top() {
		this._top = true
		return this
	}
	
	bottom() {
		this._bottom = true
		return this
	}
	
	aspectRatio(width, height) {
		this._aspectRatioWidth = width
		this._aspectRatioHeight = height
		return this
	}
	
	child(child) {
		this._child = child
		return this
	}
	
	onAfter(a, p) {
		this._child?.onAfter()
	}
	
	createAfterDirections() {
		return this._child?.createAfterDirections() ?? []
	}
	
	createElement(){
		
		const boxElement = document.createElement(`div`)
		boxElement.classList.add(`box`)
		
		boxElement.style.display = 'grid'
		boxElement.style.width = '100%'
		boxElement.style.height = '100%'
		boxElement.style.gridTemplateColumns = 'auto'
		boxElement.style.gridTemplateColumns = 'auto'
		boxElement.style.boxSizing = 'border-box'
		boxElement.style.overflow = 'auto'
		
		const childElement = document.createElement('div')
		childElement.style.display = 'inline-block'
		childElement.style.width = '100%'
		childElement.style.height = '100%'
		childElement.style.overflow = 'auto'
		childElement.style.boxSizing = 'border-box'
		childElement.style.overflow = 'auto'
		childElement.style.justifySelf = 'center'
		childElement.style.alignSelf = 'center'
		
		boxElement.appendChild(childElement)
		
		if (typeof this._width != -1) {
			childElement.style.width = `${this._width}mm`
		}
		if (typeof this._height != -1) {
			childElement.style.height = `${this._height}mm`
		}
		
		if (typeof this._aspectRatioWidth != -1) {
			
			childElement.style.aspectRatio = `${this._aspectRatioWidth} / ${this._aspectRatioHeight}`
			
			if (childElement.style.width == `100%` && childElement.style.height == `100%`) {
				
				// childElement.clientHeight and childElement.clientWidth
				// hasn't received their correct values yet, so we need to delay.
				setTimeout(() => {
					if (this._aspectRatioHeight / this._aspectRatioWidth < childElement.clientHeight / childElement.clientWidth) {
						childElement.style.height = `auto`
					} else {
						childElement.style.width = `auto`
					}
				}, 0)
				
			} else if (childElement.style.width == `100%`) {
				childElement.style.width = `auto`
			} else if (childElement.style.height == `100%`) {
				childElement.style.height = `auto`
			}
			
		}
		
		if (this._top) {
			childElement.style.alignSelf = 'start'
		}
		if (this._bottom) {
			childElement.style.alignSelf = 'end'
		}
		if (this._left) {
			childElement.style.justifySelf = 'start'
		}
		if (this._right) {
			childElement.style.justifySelf = 'end'
		}
		
		if (this._child?.keepIf ?? false) {
			childElement.appendChild(
				this._child.createElement(),
			)
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			boxElement,
		)
		
		return boxElement
		
	}
	
}