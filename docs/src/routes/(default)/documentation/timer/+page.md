<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Timer`
On this page you find the documentation for the GUI Component `Timer`.





## Introduction
The `Timer` component is a view that functions as a timer: you specify what time should be used, and then the `Timer` will count down to `0` in real time, after which it will take the user to the next page.

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}

class StartPage extends Page{
	createGui(){
		// We have not specified which the next page is, so
		// this page will be reloaded when the timer times out.
		return Timer.seconds(10)
	}
}
```

:::




## Setting the time
You can use a combination of the following configuration methods to specify how long time the `Timer` should run before taking the user to next page:

* `milliseconds()`
* `seconds()`
* `minutes()`
* `hours()`

For example, `Timer.minutes(3).seconds(90)` would make the `Timer` run for 4 minutes and 30 seconds.

Instead of using the mentioned configuration methods to specify the time, you can pass it a Unix timestamp as its main content. A Unix timestamp is a number of milliseconds that has elapsed since the start of 1970, and the `Timer` will count down until the Unix timestamp it received occurs. In JavaScript, `Date.now()` returns the current Unix timestamp.

For example, `Timer(Date.now() + 10*1000)` would have the same meaning as `Timer.seconds(10)`. The latter is of course better to use in this example, but for advanced apps it can be more convenient to work with Unix timestamps.




## Adding `Direction`
To indicate which `Page` the user should come to when the `Timer` times out, use the configuration method `page()`:

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}

class StartPage extends Page{
	createGui(){
		return Button.text(`Start timer`).page(TimerPage)
	}
}

class TimerPage extends Page{
	createGui(){
		return Timer.seconds(5).page(StartPage)
	}
}
```

:::

The `page()` configuration method accepts the same type of values as the `page` parameter in the [Direction](/documentation/direction) constructor.





## Handling timeouts
Use the configuration method `handler()` to specify a function that should be called when the timer times out.

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}

class StartPage extends Page{
	createGui(){
		return Button.text(`Start timer`).page(TimerPage)
	}
}

class TimerPage extends Page{
	createGui(){
		return Timer.seconds(3).page(StartPage).handler(() => alert(`Timeout!`))
	}
}
```

:::