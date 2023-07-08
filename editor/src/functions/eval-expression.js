import {
	App,
	Button,
	Columns,
	Direction,
	Page,
	Rows,
	Space,
	Text,
} from '@bagawork/core'

const variables = {
	App,
	Button,
	Columns,
	Direction,
	Page,
	Rows,
	Space,
	Text,
}

const parameters = Object.keys(variables)
const args = parameters.map(p => variables[p])

export default function evalExpression(jsExpressionAsString){
	
	const code = `
		(function evaluateExpression(${parameters.join(', ')}){ return ${jsExpressionAsString}})
	`.trim()
	
	const evaluateExpression = eval(code)
	
	return evaluateExpression(...args)
	
}