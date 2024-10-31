import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class PaperComponent extends Component{
	
	_showCoordinates = false
	_width = 10
	_height = 10
	_children = []
	_onClickFunction = null
	
	constructor() {
		super()
		this._size = 1
	}
	
	showCoordinates() {
		
		validateArgs(
			this,
			`showCoordinates`,
			[],
			arguments,
		)
		
		this._showCoordinates = true
		return this
	}
	
	coordinateSystem(width, height) {
		
		validateArgs(
			this,
			`coordinateSystem`,
			[`number`, `number`],
			arguments,
		)
		
		this._width = width
		this._height = height
		return this
	}
	
	children(...children) {
		
		const flattenedChildren = children.flat(Infinity)
		
		validateArgs(
			this,
			`children`,
			flattenedChildren.map(c => `PaperFigure`),
			arguments,
		)
		
		this._children = flattenedChildren.filter(
			c => c,
		)
		
		return this
	}
	
	onClick(onClickFunction) {
		
		validateArgs(
			this,
			`onClick`,
			[`Function`],
			arguments,
		)
		
		this._onClickFunction = onClickFunction
		
		return this
		
	}
	
	createElement(frameworkApp, parentComponent, onUpdated){
		
		const paperElement = document.createElement(`div`)
		paperElement.classList.add(`paper`)
		
		paperElement.style.display = 'block'
		paperElement.style.overflow = 'hidden'
		paperElement.style.containerType = `size`
		
		const svgElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg',
		)
		svgElement.setAttribute(`width`, `100%`)
		svgElement.setAttribute(`height`, `100%`)
		
		paperElement.appendChild(svgElement)
		
		if(this._onClickFunction){
			
			svgElement.addEventListener(`click`, (event) => {
				
				const rect = event.target.getBoundingClientRect()
				
				const svgX = event.clientX - rect.left
				const svgY = event.clientY - rect.top
				
				const percentageX = svgX / svgElement.clientWidth
				const percentageY = svgY / svgElement.clientHeight
				
				const coordinateX = percentageX * this._width
				const coordinateY = this._height - percentageY * this._height
				
				this._onClickFunction(coordinateX, coordinateY)
				
			})
			
		}
		
		const mouseCoordinatesTextElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'text',
		)
		mouseCoordinatesTextElement.setAttribute(`x`, `98%`)
		mouseCoordinatesTextElement.setAttribute(`y`, `2%`)
		mouseCoordinatesTextElement.setAttribute(`text-anchor`, `end`)
		mouseCoordinatesTextElement.setAttribute(`dominant-baseline`, `hanging`)
		mouseCoordinatesTextElement.setAttribute(`font-size`, `16px`)
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			paperElement,
		)
		
		if(this._backgroundColor){
			
			const backgroundRect = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'rect',
			)
			backgroundRect.setAttribute('x', `0%`)
			backgroundRect.setAttribute('y', `0%`)
			backgroundRect.setAttribute('width', `100%`)
			backgroundRect.setAttribute('height', `100%`)
			backgroundRect.setAttribute('fill', this._backgroundColor)
			
			svgElement.appendChild(backgroundRect)
			
		}
		
		if(this._showCoordinates){
			
			const svgWidth = this._width
			const svgHeight = this._height
			
			const lineWidthInPx = 1
			
			const spaceBetweenVerticalLines = 100 / svgWidth
			
			for (let i = 0; i < svgWidth; i++){
				
				const rectangleElement = document.createElementNS(
					'http://www.w3.org/2000/svg',
					'rect',
				)
				
				rectangleElement.setAttribute('x', `calc(${i * spaceBetweenVerticalLines}% - ${lineWidthInPx/2}px)`)
				rectangleElement.setAttribute('y', `0%`)
				rectangleElement.setAttribute('width', `${lineWidthInPx}px`)
				rectangleElement.setAttribute('height', `100%`)
				rectangleElement.setAttribute('fill', `black`)
				
				svgElement.appendChild(
					rectangleElement,
				)
				
			}
			
			const spaceBetweenHorizontalLines = 100 / svgHeight
			
			for (let i = 0; i < svgHeight; i++) {
				
				const rectangleElement = document.createElementNS(
					'http://www.w3.org/2000/svg',
					'rect',
				)
				
				rectangleElement.setAttribute('x', `0%`)
				rectangleElement.setAttribute('y', `calc(100% - ${i * spaceBetweenHorizontalLines}% - ${lineWidthInPx / 2}px)`)
				rectangleElement.setAttribute('width', `100%`)
				rectangleElement.setAttribute('height', `${lineWidthInPx}px`)
				rectangleElement.setAttribute('fill', `black`)
				
				svgElement.appendChild(
					rectangleElement,
				)
				
			}
			
			svgElement.appendChild(mouseCoordinatesTextElement)
			
			svgElement.addEventListener('mousemove', (event) => {
				
				const x = (event.layerX / svgElement.clientWidth * svgWidth)
				const y = (svgHeight - (event.layerY / svgElement.clientHeight * svgHeight))
				
				mouseCoordinatesTextElement.textContent = `x=${x.toFixed(1)} y=${y.toFixed(1)}`
				
			})
			
			svgElement.addEventListener(`mouseleave`, () => {
				mouseCoordinatesTextElement.textContent = ``
			})
			
		}
		
		// Add all children.
		const childComponents = this._children
		
		for (const childComponent of childComponents) {
			
			svgElement.appendChild(
				childComponent.createElement(
					childComponent,
					this,
					onUpdated,
				),
			)
			
		}
		
		return paperElement
		
	}
	
	getAsSvgString(){
		
		const svgElement = this.createElement().firstChild
		
		svgElement.setAttribute(`viewBox`, `0 0 100 100`)
		
		return new XMLSerializer().serializeToString(
			svgElement,
		)
		
	}
	
	getRowSize() {
		return `${this._size}fr`
	}
	
}