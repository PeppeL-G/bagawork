import {Component} from '../Component.js'
import { validateArgs } from '../functions/validate-args.js'
import { applyAttributesToElement } from '../functions/apply-props-to-element.js'

export class HtmlComponent extends Component{
	
	_specificTypeName = `Html`
	
	_elementCreator = null
	
	elementCreator(theElementCreator){
		
		validateArgs(
			this,
			`elementCreator`,
			[`Function`],
			arguments,
		)
		
		this._elementCreator = theElementCreator
		
		return this
		
	}
	
	createElement(frameworkApp, parentComponent, onUpdated){
		
		if(!this._elementCreator){
			
			throw `Error in Html component: the configuration method elementCreator() has never been called.`
			
		}
		
		let htmlElement = null
		
		try{
			htmlElement = this._elementCreator()
		}catch(error){
			throw `Error in the element creator passed to Html.elementCreator(): ${error}.`
		}
		
		if(!(htmlElement instanceof HTMLElement)){
			throw `Error in the element creator passed to Html.elementCreator(): The element creator did not return a value that is an instance of HTMLElement.`
		}
		
		// Fix CSS.
		applyAttributesToElement(
			this,
			htmlElement,
		)
		
		return htmlElement
		
	}
	
}