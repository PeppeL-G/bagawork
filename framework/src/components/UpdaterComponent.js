import { Component } from '../Component.js'
import { validateArgs } from '../functions/validate-args.js'

const updatersByName = {}

export function runUpdater(theName){
	
	// TODO: If no updater with the given name exist, error!
	updatersByName[theName]?.()
	
}

export class UpdaterComponent extends Component {
	
	_childCreator = () => null
	_intervalInMs = -1
	_intervalId = -1
	_name = ``
	
	_child = null
	
	childCreator(theChildCreator) {
		
		validateArgs(
			this,
			`childCreator`,
			[`Function`],
			arguments,
		)
		
		this._childCreator = theChildCreator
		return this
		
	}
	
	interval(intervalInMs) {
		
		validateArgs(
			this,
			`interval`,
			[`number`],
			arguments,
		)
		
		this._intervalInMs = intervalInMs
		return this
		
	}
	
	name(theName){
		
		this._name = theName
		return this
		
	}
	
	onBefore(){
		this._child = this._childCreator()
	}
	
	onAfter(a, p) {
		clearInterval(this._intervalId)
		delete updatersByName[this._name]
		this._child?.onAfter(a, p)
	}
	
	createBeforeDirections() {
		return this._child?.createBeforeDirections() ?? []
	}
	
	createAfterDirections(frameworkApp) {
		return this._child?.createAfterDirections(frameworkApp) ?? []
	}
	
	createElement(){
		
		let childElement = null
		
		const updateChild = () => {
			
			this._child = this._childCreator()
			
			const newChildElement = this._child.createElement()
			
			if (childElement){
				childElement.parentNode.replaceChild(newChildElement, childElement)
			}
			
			childElement = newChildElement
			
		}
		
		updateChild()
		
		if(this._name){
			updatersByName[this._name] = updateChild
		}
		
		if(this._intervalInMs != -1){
			
			// TODO: If error occurs in this._childCreator() in update child(),
			// we should display those errors!
			this._intervalId = setInterval(updateChild, this._intervalInMs)
			
		}
		
		return childElement
		
	}
	
}