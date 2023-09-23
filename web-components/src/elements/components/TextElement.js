import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class TextElement extends ParentElement{
	
	constructor() {
		super()
		
		this.style.display = 'flex'
		this.style.flexDirection = 'row'
		this.style.height = '100%'
		this.style.boxSizing = 'border-box'
		
		this.textSpan = document.createElement('span')
		
		this.appendChild(this.textSpan)
		
	}
	
	onAfter(a, p){
		
	}
	
	setGuiComponent(textComponent, frameworkApp){
		
		// Fix HTML.
		// \u200B is zero width character (if text is empty, we want the span to have a height).
		this.textSpan.innerText = textComponent.text.trim() || "\u200B"
		
		// Fix CSS.
		applyAttributesToElement(
			textComponent,
			this,
		)
		
		const style = this.style
		
		if(textComponent.left){
			style.justifyContent = 'start'
			style.textAlign = 'left'
		}else if(textComponent.right){
			style.justifyContent = 'end'
			style.textAlign = 'right'
		}else{
			style.justifyContent = 'center'
			style.textAlign = 'center'
		}
		
		if(textComponent.top){
			style.alignItems = 'start'
		}else if(textComponent.bottom){
			style.alignItems = 'end'
		}else{
			style.alignItems = 'center'
		}
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		"bagawork-text",
		TextElement,
	)
}