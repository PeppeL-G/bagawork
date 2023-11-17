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
} from '../index.js'

export function evalExpression(jsExpressionAsString) {
	
	const variables = {
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
	}
	
	const parameters = Object.keys(variables)
	const args = Object.values(variables)
	
	const code = `
		(function evaluateExpression(${parameters.join(', ')}){ return ${jsExpressionAsString}})
	`.trim()
	
	const evaluateExpression = eval(code)
	
	return evaluateExpression(...args)
	
}