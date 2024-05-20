import {
	App,
	Box,
	Button,
	Columns,
	Direction,
	EnterNumber,
	EnterText,
	Image,
	Layers,
	Page,
	Paper,
	PaperCircle,
	PaperLine,
	PaperRectangle,
	Rows,
	Space,
	Text,
	Time,
} from '../index.js'
import { m } from '../variables/m.js'
import { createPageCreator } from './create-page-creator.js'

export function evalExpression(jsExpressionAsString) {
	
	const variables = {
		App,
		Box,
		Button,
		Columns,
		createPageCreator,
		Direction,
		EnterNumber,
		EnterText,
		Image,
		Layers,
		m,
		Page,
		Paper,
		PaperLine,
		PaperCircle,
		PaperRectangle,
		Rows,
		Space,
		Text,
		Time,
	}
	
	const parameters = Object.keys(variables)
	const args = Object.values(variables)
	
	const code = `
		(function evaluateExpression(${parameters.join(', ')}){ return ${jsExpressionAsString}})
	`.trim()
	
	const evaluateExpression = eval(code)
	
	return evaluateExpression(...args)
	
}