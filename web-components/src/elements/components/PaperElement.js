import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import { PaperLine } from '@bagawork/core'
import { pixelToMm } from '@bagawork/core/src/functions/pixel-to-mm.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class PaperElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.width = '100%'
		this.style.height = '100%'
		this.style.overflow = 'hidden'
		
		this.svgElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'svg',
		)
		this.svgElement.style.width = `100%`
		this.svgElement.style.height = `100%`
		this.appendChild(this.svgElement)
		
		this.mouseCoordinatesTextElement = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'text',
		)
		this.mouseCoordinatesTextElement.setAttribute(`x`, `98%`)
		this.mouseCoordinatesTextElement.setAttribute(`y`, `2%`)
		this.mouseCoordinatesTextElement.setAttribute(`text-anchor`, `end`)
		this.mouseCoordinatesTextElement.setAttribute(`dominant-baseline`, `hanging`)
		
	}
	
	setGuiComponent(paperComponent, frameworkApp){
		
		// Fix CSS.
		applyAttributesToElement(
			paperComponent,
			this,
		)

		const svgWidthInMm = pixelToMm(this.svgElement.clientWidth)
		const svgHeightInMm = pixelToMm(this.svgElement.clientHeight)
		
		// Add all children.
		const childComponents = paperComponent.children
		
		for (const childComponent of childComponents) {
			
			this.svgElement.appendChild(childComponent.getElement(
				svgWidthInMm,
				svgHeightInMm,
			))
			
		}
		
		if(paperComponent.showCoordinates){
			
			const lineThicknessInMm = 0.25
			const spaceBetweenLinesInMm = 10
			const numberOfVerticalLines = svgWidthInMm / spaceBetweenLinesInMm
			const numberOfHorizontalLines = svgHeightInMm / spaceBetweenLinesInMm
			
			for(let i=0; i<numberOfVerticalLines; i++){
				
				const x = i * spaceBetweenLinesInMm
				
				const paperLineComponent = PaperLine
					.start(x, 0)
					.end(x, svgHeightInMm)
					.backgroundColor(`black`)
					.thickness(lineThicknessInMm)
				
				this.svgElement.appendChild(
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
				
				this.svgElement.appendChild(
					paperLineComponent.create.getElement(
						svgWidthInMm,
						svgHeightInMm,
					)
				)
				
			}
			
			this.svgElement.appendChild(this.mouseCoordinatesTextElement)
			
			this.svgElement.addEventListener('mousemove', (event) => {
				
				const x = pixelToMm(event.layerX).toFixed(1)
				const y = pixelToMm(this.svgElement.clientHeight - event.layerY).toFixed(1)
				
				this.mouseCoordinatesTextElement.textContent = `x=${x} y=${y}`
				
			})
			
			this.svgElement.addEventListener(`mouseleave`, () => {
				this.mouseCoordinatesTextElement.textContent = ``
			})
			
		}
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-paper",
		PaperElement,
	)
}
