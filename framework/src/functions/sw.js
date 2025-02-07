export function sw(number){
	
	const numberWithUnit = new Number(number)
	
	numberWithUnit.unit = `vw`
	
	return numberWithUnit
	
}