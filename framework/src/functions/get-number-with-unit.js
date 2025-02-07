export function getNumberWithUnit(number){
	
	const unit = number.unit ?? `mm`
	
	return number.valueOf()+unit
	
}