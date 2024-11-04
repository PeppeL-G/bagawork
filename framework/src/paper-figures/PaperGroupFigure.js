import { validateArgs } from "../functions/validate-args.js"
import { PaperFigure } from "../PaperFigure.js"

export class PaperGroupFigure extends PaperFigure {
	
	_width = null
	_height = null
	_coordinatesWidth = 10
	_coordinatesHeight = 10
	_centerX = null
	_centerY = null
	_children = []
	_showCoordinates = false
	
	constructor(){
		super()
		this._backgroundColor = null
	}
	
	width(theWidth) {
		
		validateArgs(
			this,
			`width`,
			[`number`],
			arguments,
		)
		
		this._width = theWidth
		return this
	}
	
	height(theHeight) {
		
		validateArgs(
			this,
			`height`,
			[`number`],
			arguments,
		)
		
		this._height = theHeight
		return this
		
	}
	
	coordinateSystem(width, height){
		
		validateArgs(
			this,
			`coordinateSystem`,
			[`number`, `number`],
			arguments,
		)
		
		this._coordinatesWidth = width
		this._coordinatesHeight = height
		
		return this
		
	}
	
	showCoordinates(){
		
		validateArgs(
			this,
			`showCoordinates`,
			[],
			arguments,
		)
		
		this._showCoordinates = true
		return this
		
	}
	
	center(x, y) {
		
		validateArgs(
			this,
			`center`,
			[`number`, `number`],
			arguments,
		)
			
		this._centerX = x
		this._centerY = y
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
	
	createElement(frameworkApp, parent, onUpdated){
		
		const svgElement = super.createElement(`svg`, false)
		svgElement.setAttribute(`class`, `paper-group`)
		svgElement.setAttribute(`preserveAspectRatio`, `none`)
		
		if(parent.getSpecificTypeName() == `Paper`){
			
			svgElement.setAttribute(`width`, `100%`)
			svgElement.setAttribute(`height`, `100%`)
			
		}else{
			
			const parentGroup = parent
			
			const width = this._width ?? parentGroup._coordinatesWidth
			const height = this._height ?? parentGroup._coordinatesHeight
			const centerX = this._centerX ?? parentGroup._coordinatesWidth / 2
			const centerY = this._centerY ?? parentGroup._coordinatesHeight / 2
			
			svgElement.setAttribute(`x`, `${centerX - width/2}`)
			svgElement.setAttribute(
				`y`,
				`${parentGroup._coordinatesHeight - (centerY + height/2)}`,
			)
			svgElement.setAttribute(`width`, `${width}`)
			svgElement.setAttribute(`height`, `${height}`)
			
		}
		
		svgElement.setAttribute(
			`viewBox`,
			`0 0 ${this._coordinatesWidth} ${this._coordinatesHeight}`,
		)
		
		// This element must exist for nested SVG elements to
		// register mousemove events on the entire SVG element.
		const backgroundRect = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'rect',
		)
		backgroundRect.setAttribute('x', `0%`)
		backgroundRect.setAttribute('y', `0%`)
		backgroundRect.setAttribute('width', `100%`)
		backgroundRect.setAttribute('height', `100%`)
		backgroundRect.setAttribute('fill', this._backgroundColor ?? `transparent`)
		
		svgElement.appendChild(backgroundRect)
		
		for(const paperChild of this._children){
			svgElement.appendChild(
				paperChild.createElement(frameworkApp, this, onUpdated),
			)
		}
		
		if(this._onClickFunction){
			
			svgElement.addEventListener(`click`, (event) => {
				
				const rect = svgElement.getBoundingClientRect()
				
				const svgX = event.clientX - rect.left
				const svgY = event.clientY - rect.top
				
				const percentageX = svgX / rect.width
				const percentageY = svgY / rect.height
				
				const coordinateX = percentageX * this._coordinatesWidth
				const coordinateY = this._coordinatesHeight - percentageY * this._coordinatesHeight
				
				this._onClickFunction(
					coordinateX,
					coordinateY,
					...this._onClickArguments,
				)
				
			})
			
		}
		
		if(this._showCoordinates){
			
			const svgWidth = this._coordinatesWidth
			const svgHeight = this._coordinatesHeight
			
			const thickness = Math.min(svgWidth, svgHeight) / 100
			
			for (let i = 0; i < svgWidth+1; i++){
				
				const lineElement = document.createElementNS(
					'http://www.w3.org/2000/svg',
					'line',
				)
				
				lineElement.setAttribute('x1', `${100 / svgWidth * i}%`)
				lineElement.setAttribute('y1', `0%`)
				lineElement.setAttribute('x2', `${100 / svgWidth * i}%`)
				lineElement.setAttribute('y2', `100%`)
				lineElement.setAttribute('stroke-width', `${thickness}`)
				lineElement.setAttribute('stroke', `black`)
				lineElement.setAttribute('stroke-linecap', `round`)
				
				svgElement.appendChild(
					lineElement,
				)
				
			}
			
			for (let i = 0; i < svgHeight+1; i++) {
				
				const lineElement = document.createElementNS(
					'http://www.w3.org/2000/svg',
					'line',
				)
				
				lineElement.setAttribute('x1', `0`)
				lineElement.setAttribute('y1', `${i}`)
				lineElement.setAttribute('x2', `${svgWidth}`)
				lineElement.setAttribute('y2', `${i}`)
				lineElement.setAttribute('stroke-width', `${thickness}`)
				lineElement.setAttribute('stroke', `black`)
				lineElement.setAttribute('stroke-linecap', `round`)
				
				svgElement.appendChild(
					lineElement,
				)
				
			}
			
			const mouseCoordinatesTextElement = document.createElementNS(
				'http://www.w3.org/2000/svg',
				'text',
			)
			mouseCoordinatesTextElement.setAttribute(`x`, `98%`)
			mouseCoordinatesTextElement.setAttribute(`y`, `2%`)
			mouseCoordinatesTextElement.setAttribute(`text-anchor`, `end`)
			mouseCoordinatesTextElement.setAttribute(`dominant-baseline`, `hanging`)
			mouseCoordinatesTextElement.setAttribute(
				`font-size`,
				`${Math.min(svgWidth, svgHeight) / 10}`,
			)
			mouseCoordinatesTextElement.style.pointerEvents = `none`
			
			svgElement.appendChild(mouseCoordinatesTextElement)
			
			svgElement.addEventListener('mousemove', (event) => {
				
				const rect = event.currentTarget.getBoundingClientRect()
				
				const svgX = event.clientX - rect.left
				const svgY = event.clientY - rect.top
				
				const percentageX = svgX / rect.width
				const percentageY = svgY / rect.height
				
				const coordinateX = percentageX * this._coordinatesWidth
				const coordinateY = this._coordinatesHeight - percentageY * this._coordinatesHeight
				
				mouseCoordinatesTextElement.textContent = `x=${coordinateX.toFixed(1)} y=${coordinateY.toFixed(1)}`
				
			})
			
			svgElement.addEventListener(`mouseleave`, () => {
				mouseCoordinatesTextElement.textContent = ``
			})
			
		}
		
		return svgElement
		
	}
	
}