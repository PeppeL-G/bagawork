import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'
import { RowsComponent } from './RowsComponent.js'
import { ColumnsComponent } from './ColumnsComponent.js'
import { FrameworkPage } from '../classes/FrameworkPage.js'
import { getNumberWithUnit } from '../functions/get-number-with-unit.js'

export class BoxComponent extends Component {
	
	_specificTypeName = `Box`
	
	_width = ``
	_height = ``
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
		
		this._width = getNumberWithUnit(width)
		return this
	}
	
	height(height) {
		
		validateArgs(
			this,
			`height`,
			[`number`],
			arguments,
		)
		
		this._height = getNumberWithUnit(height)
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
	
	createElement(frameworkApp, parentComponent){
		
		const boxElement = document.createElement(`div`)
		boxElement.classList.add(`box`)
		boxElement.style.display = 'grid'
		boxElement.style.gridTemplateRows = '1fr'
		boxElement.style.gridTemplateColumns = '1fr'
		boxElement.style.alignItems = 'center'
		boxElement.style.justifyItems = 'center'
		
		if (this._child?._keepIf ?? false){
			
			const childElement = document.createElement(`div`)
			childElement.style.display = 'grid'
			childElement.style.gridTemplateRows = '1fr'
			childElement.style.gridTemplateColumns = '1fr'
			childElement.style.height = "100%"
			childElement.style.width = "100%"
			
			childElement.appendChild(
				this._child.createElement(
					frameworkApp,
					this,
				),
			)
			boxElement.appendChild(childElement)
			
			if (this._aspectRatioWidth != -1) {
				
				childElement.style.setProperty(
					'--aspect-ratio',
					`${this._aspectRatioWidth} / ${this._aspectRatioHeight}`,
				)
				childElement.style.aspectRatio = `var(--aspect-ratio)`
				
				if (this._width == ``){
					childElement.style.width = `auto`
				}
				
				if (this._height == ``){
					childElement.style.height = `auto`
				}
				
				if (this._width == `` && this._height == ``) {
					if (parentComponent instanceof RowsComponent) {
						childElement.style.width = `100%`
						childElement.style.maxWidth = `100%`
					} else if (parentComponent instanceof ColumnsComponent) {
						childElement.style.width = `100%`
						childElement.style.maxWidth = `100%`
						childElement.style.maxHeight = `100%`
					} else if (parentComponent instanceof FrameworkPage) {
						boxElement.style.containerType = "size"
						childElement.style.width = `min(100cqw, 100cqh * var(--aspect-ratio))`
					}
					
				}
				
			}
			
			if (this._width != `` && this._height != ``) {
				boxElement.style.overflow = "auto"
			}
			
			if (this._width != ``) {
				childElement.style.width = this._width
			}
			if (this._height != ``) {
				childElement.style.height = this._height
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
			
			if (this._width != ``) {
				boxElement.style.width = this._width
			}
			if (this._height != ``) {
				boxElement.style.height = this._height
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