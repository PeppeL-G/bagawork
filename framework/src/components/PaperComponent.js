import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { pixelToMm } from '../functions/pixel-to-mm.js'
import { PaperLine } from '../index.js'
import { validateArgs } from '../functions/validate-args.js'

export class PaperComponent extends Component{
	
	_showCoordinates = false
	_width
	_height
	_children = []
	
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
			`showCoordinates`,
			flattenedChildren.map(c => `PaperChild`),
			arguments,
		)
		
		this._children = flattenedChildren.filter(
			c => c,
		)
		
		return this
	}
	
	createElement() {
		
		const paperElement = document.createElement(`div`)
		paperElement.classList.add(`paper`)
		
		paperElement.style.display = 'block'
		paperElement.style.width = '100%'
		paperElement.style.height = '100%'
		paperElement.style.overflow = 'hidden'
		
		const svgElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg',
		)
		svgElement.style.width = `100%`
		svgElement.style.height = `100%`
		
		paperElement.appendChild(svgElement)
		
		const mouseCoordinatesTextElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'text',
		)
		mouseCoordinatesTextElement.setAttribute(`x`, `98%`)
		mouseCoordinatesTextElement.setAttribute(`y`, `2%`)
		mouseCoordinatesTextElement.setAttribute(`text-anchor`, `end`)
		mouseCoordinatesTextElement.setAttribute(`dominant-baseline`, `hanging`)
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			paperElement,
		)
		
		// Can't use svgElement.clientWidth and svgElement.clientHeight
		// until the element has been added to DOM, so delay.
		setTimeout(() => {
			
			const svgWidth = this._width ?? pixelToMm(
				 svgElement.clientWidth,
			)
			const svgHeight = this._height ?? pixelToMm(
				svgElement.clientHeight,
			)
			
			// Add all children.
			const childComponents = this._children
			
			for (const childComponent of childComponents) {
				
				svgElement.appendChild(
					childComponent.getElement(
						svgWidth,
						svgHeight,
					),
				)
				
			}
			
			if (this._showCoordinates) {
				
				const lineThicknessInMm = this._width == undefined ? 0.25 : 0.05
				const spaceBetweenLinesInMm = this._width == undefined ? 10 : 1
				const numberOfVerticalLines = Math.ceil(
					svgWidth / spaceBetweenLinesInMm,
				)
				const numberOfHorizontalLines = Math.ceil(
					svgHeight / spaceBetweenLinesInMm,
				)
				
				for (let i = 0; i < numberOfVerticalLines; i++) {
					
					const x = i * spaceBetweenLinesInMm
					
					const paperLineComponent = PaperLine
						.start(x, 0)
						.end(x, svgHeight)
						.backgroundColor(`black`)
						.thickness(lineThicknessInMm)
					
					svgElement.appendChild(
						paperLineComponent.getElement(
							svgWidth,
							svgHeight,
						),
					)
					
				}
				
				for (let i = 0; i < numberOfHorizontalLines; i++) {
					
					const y = i * spaceBetweenLinesInMm
					
					const paperLineComponent = PaperLine
						.start(0, y)
						.end(svgWidth, y)
						.backgroundColor(`black`)
						.thickness(lineThicknessInMm)
					
					svgElement.appendChild(
						paperLineComponent.getElement(
							svgWidth,
							svgHeight,
						)
					)
					
				}
				
				svgElement.appendChild(mouseCoordinatesTextElement)
				
				svgElement.addEventListener('mousemove', (event) => {
					
					const x = (event.layerX / svgElement.clientWidth * svgWidth).toFixed(1)
					const y = (svgHeight - (event.layerY / svgElement.clientHeight * svgHeight)).toFixed(1)
					
					mouseCoordinatesTextElement.textContent = `x=${x} y=${y}`
					
				})
				
				svgElement.addEventListener(`mouseleave`, () => {
					mouseCoordinatesTextElement.textContent = ``
				})
				
			}
			
		}, 0)
		
		return paperElement
		
	}
	
}