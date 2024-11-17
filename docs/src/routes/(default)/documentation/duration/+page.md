<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Duration`
On this page you find the documentation for the class `Duration`.




## Introduction
You can use the `Duration` class to create an object that represents a duration/an amount of time. A duration consists of:

* A number of milliseconds
* A number of seconds
* A number of minutes
* A number of hours
* A number of days
* A number of weeks (1 week = 7 days)

So you can use it, for example, to represent a duration of *3 hours, 20 minutes and 4 seconds*.




## Creating a new `Duration` object
To create a new `Duration` object, simply write `Duration`. This way, you obtain a `Duration` object representing a duration of no amount of time at all (all numbers = `0` in the duration object).




## `addXXX()` - Adding time to the duration
Often, you want the duration to be of a specific amount of time. To tell the `Duration` object which amount of time that is, call the various `addXXX()` methods on it to add time of various units to it. Simply pass the amount of time as an integer to the method corresponding to the unit you want to use.

* `addMilliseconds()`
* `addSeconds()`
* `addMinutes()`
* `addHours()`
* `addDays()`
* `addWeeks()`

::: tip Example

This example creates a duration of 1 minute and 30 seconds.

```js
Duration.addMinutes(1).addSeconds(30)
```

:::

If you use a number that is too high for the unit, that number will automatically be converted into correct units.

::: tip Example

This example also creates a duration of 1 minute and 30 seconds.

```js
Duration.addSeconds(90)
```

:::


## `getXXX()` - Retrieving parts from a `Duration` object
Use the different `getXXX()` methods to obtain the numbers for the different units the `Duration` objects consists of:

* `getMilliseconds()`
* `getSeconds()`
* `getMinutes()`
* `getHours()`
* `getDays()`
* `getWeeks()`

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	duration = Duration.addDays(3).addMinutes(4).addSeconds(90)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`getWeeks(): ${p.duration.getWeeks()}`),
			Text.text(`getDays(): ${p.duration.getDays()}`),
			Text.text(`getHours(): ${p.duration.getHours()}`),
			Text.text(`getMinutes(): ${p.duration.getMinutes()}`),
			Text.text(`getSeconds(): ${p.duration.getSeconds()}`),
			Text.text(`getMilliseconds(): ${p.duration.getMilliseconds()}`),
			Space,
		)
	}
	
}
```

:::


## `getTotalXXX()` - Retrieving total numbers from the `Duration` object
Use the different `getTotalXXX()` methods to obtain the entire duration in a single unit:

* `getTotalMilliseconds()`
* `getTotalSeconds()`
* `getTotalMinutes()`
* `getTotalHours()`
* `getTotalDays()`
* `getTotalWeeks()`

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	duration = Duration.addMinutes(1).addSeconds(90)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`getTotalWeeks(): ${p.duration.getTotalWeeks()}`),
			Text.text(`getTotalDays(): ${p.duration.getTotalDays()}`),
			Text.text(`getTotalHours(): ${p.duration.getTotalHours()}`),
			Text.text(`getTotalMinutes(): ${p.duration.getTotalMinutes()}`),
			Text.text(`getTotalSeconds(): ${p.duration.getTotalSeconds()}`),
			Text.text(`getTotalMilliseconds(): ${p.duration.getTotalMilliseconds()}`),
			Space,
		)
	}
	
}
```

:::




## Comparing `Duration` objects
Use the different `isXXX()` methods to compare different `Duration` objects:

* `durationA.isEquallyLongAs(durationB)` to check if `durationA` is equally long as `durationB`
* `durationA.isShorterThan(durationB)` to check if `durationA` is shorter than `durationB`
* `durationA.isShorterThanOrOrEquallyLongAs(durationB)` to check if `durationA` is shorter than or equally long as `durationB`

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	durationA = Duration.addSeconds(30)
	durationB = Duration.addMinutes(1)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`durationA.isEquallyLongAs(durationB): ${p.durationA.isEquallyLongAs(p.durationB)}`),
			Text.text(`durationA.isShorterThan(durationB): ${p.durationA.isShorterThan(p.durationB)}`),
			Text.text(`durationA.isShorterThanOrEquallyLongAs(durationB): ${p.durationA.isShorterThanOrEquallyLongAs(p.durationB)}`),
			Space,
		)
	}
	
}
```

:::

::: warning == does not work!

You cannot use `durationA == durationB` to check if two `Duration` objects are equally long, because in JavaScript, the `==` operator on objects always checks if the two objects are the same object.

:::