<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Time`
On this page you find the documentation for the class `Time`.


## Introduction
You can use the `Time` class to create an object that represents a specific point in time.



## Creating a new `Time` object
To create a new `Time` object, simply write `Time`. This way, you obtain a `Time` object representing the time `0001-01-01 00:00:00`. Below you can see the names for the different parts a `Time` object consists of.

```
   Date     Clock  
┝━━━━━━━━┥ ┝━━━━━━┥
0001-01-01 00:00:00
┝━━┥ ┝┥ ┝┥ ┝┥ ┝┥ ┝┥
Year │  │ Hour │  │
  Month │  Minute │
       Day     Second
```

Often, you want to obtain the time that happen to be when your code is running. Call the method `setNow()` on your `Time` object to change the time in it to the time that happened to be when the computer calls `setNow()`.




## Retrieving parts from a `Time` object
Use the different `getXXX()` methods on the `Time` object to retrieve the different parts. The methods ending with `AsString()` returns a string, the other ones return a number.

* `getDate()` to get the date parts of the time (year, month and day of month) as a string
* `getClock()` to get the clock parts (hour, minute and second) of the time as a string
* `getYear()` to get the year
* `getMonth()` to get the month
* `getDay()` to get the day
* `getHour()` to get the hour
* `getMinute()` to get the minute
* `getSecond()` to get the second
* `getMillisecond()` to get the millisecond

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	time = Time.setNow()
	
	onBefore(){
		p.time.setNow()
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`getDate(): ${p.time.getDate()}`),
			Text.text(`getYear(): ${p.time.getYear()}`),
			Text.text(`getMonth(): ${p.time.getMonth()}`),
			Text.text(`getDay(): ${p.time.getDay()}`),
			Text.text(`getClock(): ${p.time.getClock()}`),
			Text.text(`getHour(): ${p.time.getHour()}`),
			Text.text(`getMinute(): ${p.time.getMinute()}`),
			Text.text(`getSecond(): ${p.time.getSecond()}`),
			Text.text(`getMillisecond(): ${p.time.getMillisecond()}`),
			Space,
			Button.text(`Refresh`),
		)
	}
	
}
```

:::




## Changing a `Time` object
Use the different `setXXX()` methods on the `Time` object to change which time it should represent. All `setXXX()` methods return the `Time` object itself, so method calls are chainable, just as they are for GUI components. Use:

* `setNow()` to populate the time object with the time that happen to be when the call to `setNow()` is executed by the computer
* `setDate()` to set the year, month and day of month
* `setClock()` to set the hour, minute and second
* `setYear()` to set the year
* `setMonth()` to set the month
* `setDay()` to set the day of month
* `setHour()` to set the hour
* `setMinute()` to set the minute
* `setSecond()` to set the second
* `setMillisecond()` to set the millisecond

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	time = Time.setClock(5, 6, 7).setYear(2000)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`getDate(): ${p.time.getDate()}`),
			Text.text(`getClock(): ${p.time.getClock()}`),
			Space,
		)
	}
	
}
```

:::

There are also several `addXXX()` methods avaialble to add seconds, minutes, hours, etc. to the `Time` object:

* `addMilliseconds()` to add a some number of milliseconds to the `Time` object
* `addSeconds()` to add a some number of seconds to the `Time` object
* `addMinutes()` to add a some number of minutes to the `Time` object
* `addHours()` to add a some number of hours to the `Time` object
* `addDays()` to add a some number of days to the `Time` object
* `addMonths()` to add a some number of months to the `Time` object
* `addYears()` to add a some number of years to the `Time` object

::: tip Removing time

No `removeXXX()` methods exist. Instead, simply pass negative numbers to the `addXXX()` methods to remove time, e.g. `addHours(-1)` to remove one hour from the `Time` object.

:::


::: warning Watch out!

`addMonths()` and `addYears()` are not always intuitive to use. For example, if you have a `Time` object representing the date `2023-01-31` and you add one month to it, it will not represent the date `2023-02-31`, because that date doesn't exist! Instead, some logic is applied to find a logical valid date close to `2023-02-31`.

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	yesterday = Time.setNow().addDays(-1)
	today = Time.setNow()
	tomorrow = Time.setNow().addDays(1)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Yesterday is: ${p.yesterday.getDate()}`),
			Text.text(`Today is: ${p.today.getDate()}`),
			Text.text(`Tomorrow is: ${p.tomorrow.getDate()}`),
			Space,
		)
	}
	
}
```

:::







## `getCopy()` - Obtaining a copy
Call the method `getCopy()` to get back a new `Time` object representing the same time as the one in the `Time` object you called the method on.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	original = Time.setNow()
	copy = null
	notCopy = null
	
	onBefore(){
		
		// We store a copy of the time object in "copy".
		p.copy = p.original.getCopy()
		
		// So changes to "copy" only affects that time object.
		p.copy.setYear(1000)
		
		// Here we don't create a copy, so both "notCopy" and
		// "original" refers to one and the same time object!
		p.notCopy = p.original
		
		// So if we change the time object through the "notCopy"
		// variable, the changes will also be shown through the
		// "original" variable!
		p.notCopy.setYear(2000)
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`original: ${p.original.getDate()}`),
			Text.text(`copy: ${p.copy.getDate()}`),
			Text.text(`notCopy: ${p.notCopy.getDate()}`),
			Space,
		)
	}
	
}
```

:::




## Comparing `Time` objects
Use the different `isXXX()` methods to compare different `Time` objects:

* `timeA.isSameAs(timeB)` to check if the `Time` objects `timeA` and `timeB` represent the same point in time
* `timeA.isBefore(timeB)` to check if the `Time` object `timeA` represents a time that happen before the `Time` object `timeB` represents
* `timeA.isBeforeOrSameAs(timeB)` to check if the `Time` object `timeA` represents a time that happen before or at the same time the `Time` object `timeB` represents

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	timeA = Time.setDate(2023, 12, 17)
	timeB = Time.setDate(2023, 12, 17)
	timeC = Time.setDate(2023, 12, 18)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`timeA.isSameAs(timeB): ${p.timeA.isSameAs(p.timeB)}`),
			Text.text(`timeA.isSameAs(timeC): ${p.timeA.isSameAs(p.timeC)}`),
			Space,
			Text.text(`timeA.isBefore(timeB): ${p.timeA.isBefore(p.timeB)}`),
			Text.text(`timeA.isBefore(timeC): ${p.timeA.isBefore(p.timeC)}`),
			Space,
			Text.text(`timeA.isBeforeOrSameAs(timeB): ${p.timeA.isBeforeOrSameAs(p.timeB)}`),
			Text.text(`timeA.isBeforeOrSameAs(timeC): ${p.timeA.isBeforeOrSameAs(p.timeC)}`),
			Space,
		)
	}
	
}
```

:::

::: tip Tips!

You can also use:

* `timeA < timeB` instead of `timeA.isBefore(timeB)`
* `timeA <= timeB` instead of `timeA.isBeforeOrSameAs(timeB)`

:::

::: warning == does not work!

You cannot use `timeA == timeB` to check if they represent the same point in time, because in JavaScript, the `==` operator always checks if the objects refer to the same object instance.

:::