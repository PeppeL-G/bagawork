import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class LayersElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.width = '100%'
		this.style.height = '100%'
		this.style.gridTemplateColumns = 'auto'
		this.style.gridTemplateColumns = 'auto'
		this.style.boxSizing = 'border-box'
		this.style.overflow = 'auto'
		
		this.boxDiv = document.createElement('div')
		this.boxDiv.style.display = 'inline-block'
		this.boxDiv.style.width = '100%'
		this.boxDiv.style.height = '100%'
		this.boxDiv.style.overflow = 'auto'
		this.boxDiv.style.boxSizing = 'border-box'
		this.boxDiv.style.overflow = 'auto'
		this.boxDiv.style.justifySelf = 'center'
		this.boxDiv.style.alignSelf = 'center'
		
		this.appendChild(this.boxDiv)
		
	}
	
	setGuiComponent(boxComponent, frameworkApp){
		
		if(boxComponent.child){
			
			if(typeof boxComponent.width == 'number'){
				this.boxDiv.style.width = `${boxComponent.width}mm`
			}
			if (typeof boxComponent.height == 'number') {
				this.boxDiv.style.height = `${boxComponent.height}mm`
			}
			
			if (typeof boxComponent.aspectRatioWidth == 'number'){
				
				this.boxDiv.style.aspectRatio = `${boxComponent.aspectRatioWidth} / ${boxComponent.aspectRatioHeight}`
				
				if (this.boxDiv.style.width == `100%` && this.boxDiv.style.height == `100%`){
					
					if (boxComponent.aspectRatioHeight / boxComponent.aspectRatioWidth < this.boxDiv.clientHeight / this.boxDiv.clientWidth){
						this.boxDiv.style.height = `auto`
					}else{
						this.boxDiv.style.width = `auto`
					}
					
				}else if (this.boxDiv.style.width == `100%`) {
					this.boxDiv.style.width = `auto`
				}else if (this.boxDiv.style.height == `100%`) {
					this.boxDiv.style.height = `auto`
				}
				
			}
			
			if(boxComponent.top){
				this.boxDiv.style.alignSelf = 'start'
			}
			if(boxComponent.bottom){
				this.boxDiv.style.alignSelf = 'end'
			}
			if(boxComponent.left){
				this.boxDiv.style.justifySelf = 'start'
			}
			if(boxComponent.right){
				this.boxDiv.style.justifySelf = 'end'
			}
			
			const childElement = createGuiElement(boxComponent.child)
			this.boxDiv.appendChild(childElement)
			childElement.setGuiComponent(boxComponent.child, frameworkApp)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			boxComponent,
			this.boxDiv,
		)
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-box",
		LayersElement,
	)
}