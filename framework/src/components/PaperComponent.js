import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'
import { PaperGroupFigure } from '../paper-figures/PaperGroupFigure.js'

export class PaperComponent extends Component{
	
	_specificTypeName = `Paper`
	
	_paperGroup
	
	constructor() {
		super()
		this._size = 1
		this._paperGroup = new PaperGroupFigure()
	}
	
	showCoordinates(){
		
		validateArgs(
			this,
			`showCoordinates`,
			[],
			arguments,
		)
		
		this._paperGroup.showCoordinates()
		
		return this
		
	}
	
	coordinateSystem(width, height){
		
		validateArgs(
			this,
			`coordinateSystem`,
			[`number`, `number`],
			arguments,
		)
		
		this._paperGroup.coordinateSystem(width, height)
		
		return this
		
	}
	
	children(...children){
		
		const flattenedChildren = children.flat(Infinity)
		
		validateArgs(
			this,
			`children`,
			flattenedChildren.map(c => `PaperFigure`),
			arguments,
		)
		
		this._paperGroup.children(...children)
		
		return this
		
	}
	
	onClick(onClickFunction){
		
		validateArgs(
			this,
			`onClick`,
			[`Function`],
			arguments,
		)
		
		this._paperGroup.onClick(onClickFunction)
		
		return this
		
	}
	
	backgroundColor(colorName){
		
		validateArgs(
			this,
			`backgroundColor`,
			[`string`],
			arguments,
		)
		
		this._paperGroup.backgroundColor(colorName)
		
		return this
		
	}
	
	createElement(frameworkApp, parentComponent){
		
		const paperElement = document.createElement(`div`)
		paperElement.classList.add(`paper`)
		
		paperElement.style.display = 'block'
		paperElement.style.overflow = 'hidden'
		paperElement.style.containerType = `size`
		
		const svgElement = this._paperGroup.createElement(
			frameworkApp,
			this,
		)
		
		paperElement.appendChild(svgElement)
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			paperElement,
		)
		
		return paperElement
		
	}
	
	getAsSvgString(){
		
		const svgElement = this.createElement().firstChild
		
		return new XMLSerializer().serializeToString(
			svgElement,
		)
		
	}
	
}