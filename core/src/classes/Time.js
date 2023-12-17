const startOfTimeTimestampInMs = -62135600008000

export class TimeClass{
	
	date = new Date(startOfTimeTimestampInMs)
	
	getDate(){
		return this.date.toLocaleDateString()
	}
	
	getYear() {
		return this.date.getFullYear()
	}
	
	getMonth() {
		return this.date.getMonth() + 1
	}
	
	getDay() {
		return this.date.getDate()
	}
	
	getClock() {
		return this.date.toLocaleTimeString()
	}
	
	getHour() {
		return this.date.getHours()
	}
	
	getMinute() {
		return this.date.getMinutes()
	}
	
	getSecond() {
		return this.date.getSeconds()
	}
	
	getMillisecond() {
		return this.date.getMilliseconds()
	}
	
	getCopy(){
		const copy = new TimeClass()
		copy.date.setTime(this.date.getTime())
		return copy
	}
	
	setNow() {
		this.date.setTime(Date.now())
		return this
	}
	
	setDate(year, month, day) {
		this.date.setFullYear(year, month, day)
		return this
	}
	
	setYear(year) {
		this.date.setFullYear(year)
		return this
	}
	
	setMonth(month) {
		this.date.setMonth(month - 1)
		return this
	}
	
	setDay(day) {
		this.date.setDate(day)
		return this
	}

	setClock(hour, minute, second) {
		this.date.setHours(hour, minute, second)
		return this
	}
	
	setHour(hour) {
		this.date.setHours(hour)
		return this
	}
	
	setMinute(minute) {
		this.date.setMinutes(minute)
		return this
	}
	
	setSecond(second) {
		this.date.setSeconds(second)
		return this
	}
	
	setMillisecond(millisecond) {
		this.date.setMilliseconds(millisecond)
		return this
	}
	
	toJSON(){
		
		try{
			
			return {
				clazyName: TimeClass.name,
				iso: this.date.toISOString(),
			}
			
		}catch(error){
			
			return {
				clazyName: TimeClass.name,
				iso: `invalid`,
			}
			
		}
		
	}
	
	static fromJSON(json){
		const time = new TimeClass()
		time.date = new Date(json.iso)
		return time
	}
	
	valueOf(){
		return this.date.getTime()
	}
	
	isSameAs(otherTime) {
		return +this == +otherTime
	}
	
	isBefore(otherTime) {
		return +this < +otherTime
	}
	
	isBeforeOrSameAs(otherTime){
		return +this <= +otherTime
	}
	
}