import {
	App,
	Box,
	Button,
	Columns,
	Direction,
	Duration,
	EnterNumber,
	EnterText,
	Font,
	Html,
	//Image,
	Layers,
	Page,
	Paper,
	PaperCircle,
	PaperGroup,
	PaperLine,
	PaperRectangle,
	Rows,
	Space,
	Text,
	Time,
	Updater,
	runUpdater,
} from '../index.js'
import { m } from '../variables/m.js'
import { speaker } from '../variables/speaker.js'
import { createPageCreator } from './create-page-creator.js'

export function evalExpression(jsExpressionAsString) {
	
	const variables = {
		App,
		Box,
		Button,
		Columns,
		createPageCreator,
		Direction,
		Duration,
		EnterNumber,
		EnterText,
		Font,
		Html,
		//Image,
		Layers,
		m,
		Page,
		Paper,
		PaperLine,
		PaperCircle,
		PaperGroup,
		PaperRectangle,
		Rows,
		Space,
		speaker,
		Text,
		Time,
		Updater,
		runUpdater,
	}
	
	const parameters = Object.keys(variables)
	const args = Object.values(variables)
	
	const code = `
		(function evaluateExpression(${parameters.join(', ')}){ return ${jsExpressionAsString}})
	`.trim()
	
	const evaluateExpression = eval(code)
	
	return evaluateExpression(...args)
	
}