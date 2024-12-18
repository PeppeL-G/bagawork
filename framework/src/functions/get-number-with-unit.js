export function getNumberWithUnit(number){
	
	const unit = number.unit ?? `vw`
	
	return number.valueOf()+unit
	
}