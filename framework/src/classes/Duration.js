export class Duration{
	
	lengthInMs = 0
	
	addMilliseconds(numberOfMilliseconds){
		this.lengthInMs += numberOfMilliseconds
		return this
	}
	
	addSeconds(numberOfSeconds){
		return this.addMilliseconds(numberOfSeconds * 1000)
	}
	
	addMinutes(numberOfMinutes){
		return this.addSeconds(numberOfMinutes * 60)
	}
	
	addHours(numberOfHours){
		return this.addMinutes(numberOfHours * 60)
	}
	
	addDays(numberOfDays){
		return this.addHours(numberOfDays * 24)
	}
	
	addWeeks(numberOfWeeks){
		return this.addDays(numberOfWeeks * 7)
	}
	
	getMilliseconds(){
		return this.lengthInMs % 1000
	}
	
	getSeconds(){
		return Math.floor(this.lengthInMs / 1000) % 60
	}
	
	getMinutes(){
		return Math.floor(this.lengthInMs / (1000 * 60)) % 60
	}
	
	getHours(){
		return Math.floor(this.lengthInMs / (1000 * 60 * 60)) % 24
	}
	
	getDays(){
		return Math.floor(this.lengthInMs / (1000 * 60 * 60 * 24)) % 7
	}
	
	getWeeks(){
		return Math.floor(this.lengthInMs / (1000 * 60 * 60 * 24 * 7))
	}
	
	getTotalMilliseconds(){
		return this.lengthInMs
	}
	
	getTotalSeconds(){
		return this.lengthInMs / 1000
	}
	
	getTotalMinutes(){
		return this.getTotalSeconds() / 60
	}
	
	getTotalHours(){
		return this.getTotalMinutes() / 60
	}
	
	getTotalDays(){
		return this.getTotalHours() / 24
	}
	
	getTotalWeeks(){
		return this.getTotalDays() / 7
	}
	
	toJSON(){
		
		try{
			
			return {
				clazyName: Duration.name,
				lengthInMs: this.lengthInMs,
			}
			
		}catch(error){
			
			return {
				clazyName: Duration.name,
				lengthInMs: `invalid`,
			}
			
		}
		
	}
	
	static fromJSON(json){
		const duration = new Duration()
		duration.lengthInMs = json.lengthInMs
		return duration
	}
	
	valueOf(){
		return this.lengthInMs
	}
	
	isEquallyLongAs(otherDuration) {
		return +this < +otherDuration
	}
	
	isShorterThan(otherDuration) {
		return +this == +otherDuration
	}
	
	isShorterThanOrEquallyLongAs(otherDuration){
		return +this <= +otherDuration
	}
	
	getAsString(){
		
		if(this.lengthInMs == 0){
			return `0 seconds`
		}
		
		const parts = [
			[`week`, this.getWeeks],
			[`day`, this.getDays],
			[`hour`, this.getHours],
			[`minute`, this.getMinutes],
			[`second`, this.getSeconds],
			[`millisecond`, this.getMilliseconds],
		]
		
		const pieces = parts.map(
			([unit, getter]) => [
				unit,
				getter.apply(this)
			],
		).filter(
			([unit, number]) => number != 0,
		).map(
			([unit, number]) => `${number} ${unit}${number == 1 ? `` : `s`}`
		)
		
		if(pieces.length == 1){
			return pieces[0]
		}
		
		const lastPiece = pieces.pop()
		
		return `${pieces.join(`, `)} and ${lastPiece}`
		
	}
	
}