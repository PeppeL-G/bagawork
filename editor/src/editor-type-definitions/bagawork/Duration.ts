/**
 * This class represents a length of time. A new instance of it
 * has the length 0.
 */
const Duration = (() => new (
	
	/**
	 * This class represents a length of time. A new instance of it
	 * has the length 0.
	 */
	class Duration {
		
		/**
		 * This method adds the given number of milliseconds to the `Duration`.
		 * @param numberOfMilliseconds The number of milliseconds to be added
		 */
		addMilliseconds(numberOfMilliseconds: number) { return this }
		
		/**
		 * This method adds the given number of seconds to the `Duration`.
		 * @param numberOfSeconds The number of seconds to be added
		 */
		addSeconds(numberOfSeconds: number) { return this }
		
		/**
		 * This method adds the given number of minutes to the `Duration`.
		 * @param numberOfMinutes The number of minutes to be added
		 */
		addMinutes(numberOfMinutes: number) { return this }
		
		/**
		 * This method adds the given number of hours to the `Duration`.
		 * @param numberOfHours The number of hours to be added
		 */
		addHours(numberOfHours: number) { return this }
		
		/**
		 * This method adds the given number of days to the `Duration`.
		 * @param numberOfDays The number of days to be added
		 */
		addDays(numberOfDays: number) { return this }
		
		/**
		 * This method adds the given number of weeks to the `Duration`.
		 * @param numberOfWeeks The number of weeks to be added
		 */
		addWeeks(numberOfWeeks: number) { return this }
		
		/**
		 * This method returns the milliseconds part of the `Duration`.
		 * @returns The milliseconds part of the `Duration`
		 */
		getMilliseconds() { return 0 }
		
		/**
		 * This method returns the seconds part of the `Duration`.
		 * @returns The seconds part of the `Duration`
		 */
		getSeconds() { return 0 }
		
		/**
		 * This method returns the minutes part of the `Duration`.
		 * @returns The minutes part of the `Duration`
		 */
		getMinutes() { return 0 }
		
		/**
		 * This method returns the hours part of the `Duration`.
		 * @returns The hours part of the `Duration`
		 */
		getHours() { return 0 }
		
		/**
		 * This method returns the days part of the `Duration`.
		 * @returns The days part of the `Duration`
		 */
		getDays() { return 0 }
		
		/**
		 * This method returns the weeks part of the `Duration`.
		 * @returns The weeks part of the `Duration`
		 */
		getWeeks() { return 0 }
		
		/**
		 * This method returns the entire duration in the milliseconds unit.
		 * @returns The entire duration in the milliseconds unit
		 */
		getTotalMilliseconds() { return 0 }
		
		/**
		 * This method returns the entire duration in the seconds unit.
		 * @returns The entire duration in the seconds unit
		 */
		getTotalSeconds() { return 0 }
		
		/**
		 * This method returns the entire duration in the minutes unit.
		 * @returns The entire duration in the minutes unit
		 */
		getTotalMinutes() { return 0 }
		
		/**
		 * This method returns the entire duration in the hours unit.
		 * @returns The entire duration in the hours unit
		 */
		getTotalHours() { return 0 }
		
		/**
		 * This method returns the entire duration in the days unit.
		 * @returns The entire duration in the days unit
		 */
		getTotalDays() { return 0 }
		
		/**
		 * This method returns the entire duration in the weeks unit.
		 * @returns The entire duration in the weeks unit
		 */
		getTotalWeeks() { return 0 }
		
		/**
		 * This method checks if `otherDuration` is equally long as this
		 * `Duration`.
		 * @param otherDuration The `Duration` to compare with
		 * @returns `true` if they are equally long, otherwise `false`
		 */
		isEquallyLongAs(otherDuration: Duration) { return true };

		/**
		 * This method checks if your `Duration` is shorter than the
		 * `otherDuration`.
		 * @param otherDuration The `Duration` to compare with
		 * @returns `true` if your `Duration` is shorter than `otherTime`, otherwise `false`
		 */
		isShorterThan(otherDuration: Duration) { return true };

		/**
		 * This method checks if your `Duration` is shorter than or
		 * equally long as `otherDuration`.
		 * @param otherDuration The `Duration` to compare with
		 * @returns `true` if your `Duration` is shorter than or equally long as `otherDuration`, otherwise `false`
		 */
		isShorterThanOrEquallyLongAs(otherDuration: Duration) { return true };
		
		/**
		 * This method returns a string that contains the length of
		 * the duration expressed in the English language.
		 * @returns A string with the duration expressed in English
		 */
		getAsString(){ return `` }
		
	}
	
))()