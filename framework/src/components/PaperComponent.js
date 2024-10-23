import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { validateArgs } from '../functions/validate-args.js'

export class PaperComponent extends Component{
	
	_showCoordinates = false
	_width = 10
	_height = 10
	_children = []
	
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
			flattenedChildren.map(c => `PaperChild`),
			arguments,
		)
		
		this._children = flattenedChildren.filter(
			c => c,
		)
		
		return this
	}
	
	createElement(frameworkApp, parentComponent, onUpdated){
		
		const paperElement = document.createElement(`div`)
		paperElement.classList.add(`paper`)
		
		paperElement.style.display = 'block'
		paperElement.style.overflow = 'hidden'
		
		const svgElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg',
		)
		svgElement.setAttribute(`width`, `100%`)
		svgElement.setAttribute(`height`, `100%`)
		
		paperElement.appendChild(svgElement)
		
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
			svgElement.style.backgroundColor = this._backgroundColor
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
		return new XMLSerializer().serializeToString(
			this.createElement().firstChild,
		)
	}
	
	getRowSize() {
		return `${this._size}fr`
	}
	
}