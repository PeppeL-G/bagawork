import ButtonElement from '../elements/components/ButtonElement.js'
import TextElement from '../elements/components/TextElement.js'
import ColumnsElement from '../elements/components/ColumnsElement.js'
import RowsElement from '../elements/components/RowsElement.js'
import SpaceElement from '../elements/components/SpaceElement.js'

export function createGuiElement(guiComponent){
	
	switch (guiComponent.constructor.name) {
		case "ButtonComponent": return new ButtonElement()
		case "TextComponent": return new TextElement()
		case "ColumnsComponent": return new ColumnsElement()
		case "RowsComponent": return new RowsElement()
		case "SpaceComponent": return new SpaceElement()
		default:
			// This should never happen if implemented correctly.
			console.error(`createGuiElement(): No GUI element exists for the GUI component`, guiComponent)
	}
	
}