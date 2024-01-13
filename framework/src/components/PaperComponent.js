import { Component } from '../Component.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'
import { pixelToMm } from '../functions/pixel-to-mm.js'
import { PaperLine } from '../index.js'

export class PaperComponent extends Component{
	
	_showCoordinates = false
	_children = []
	
	showCoordinates() {
		this._showCoordinates = true
		return this
	}
	
	children(...children) {
		this._children = children.flat(Infinity)?.filter(
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
			
			const svgWidthInMm = pixelToMm(svgElement.clientWidth)
			const svgHeightInMm = pixelToMm(svgElement.clientHeight)
			
			// Add all children.
			const childComponents = this._children
			
			for (const childComponent of childComponents) {
				
				svgElement.appendChild(
					childComponent.getElement(
						svgWidthInMm,
						svgHeightInMm,
					),
				)
				
			}
			
			if (this._showCoordinates) {
				
				const lineThicknessInMm = 0.25
				const spaceBetweenLinesInMm = 10
				const numberOfVerticalLines = Math.ceil(
					svgWidthInMm / spaceBetweenLinesInMm,
				)
				const numberOfHorizontalLines = Math.ceil(
					svgHeightInMm / spaceBetweenLinesInMm,
				)
				
				for (let i = 0; i < numberOfVerticalLines; i++) {
					
					const x = i * spaceBetweenLinesInMm
					
					const paperLineComponent = PaperLine
						.start(x, 0)
						.end(x, svgHeightInMm)
						.backgroundColor(`black`)
						.thickness(lineThicknessInMm)
					
					svgElement.appendChild(
						paperLineComponent.create.getElement(
							svgWidthInMm,
							svgHeightInMm,
						),
					)
					
				}
				
				for (let i = 0; i < numberOfHorizontalLines; i++) {
					
					const y = i * spaceBetweenLinesInMm
					
					const paperLineComponent = PaperLine
						.start(0, y)
						.end(svgWidthInMm, y)
						.backgroundColor(`black`)
						.thickness(lineThicknessInMm)
					
					svgElement.appendChild(
						paperLineComponent.create.getElement(
							svgWidthInMm,
							svgHeightInMm,
						)
					)
					
				}
				
				svgElement.appendChild(mouseCoordinatesTextElement)
				
				svgElement.addEventListener('mousemove', (event) => {
					
					const x = pixelToMm(event.layerX).toFixed(1)
					const y = pixelToMm(svgElement.clientHeight - event.layerY).toFixed(1)
					
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