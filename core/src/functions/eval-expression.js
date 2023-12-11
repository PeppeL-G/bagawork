import {
	App,
	Box,
	Button,
	Columns,
	Direction,
	Layers,
	Page,
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
		Layers,
		m,
		Page,
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