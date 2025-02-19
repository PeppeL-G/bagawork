<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. `onStart()` & `onBefore()`
This tutorial will teach you the methods `App.onStart()` and `Page.onBefore()`.


## `App.onStart()`
Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your `App` class that is named `onStart()`.

For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 8
	
}
```

But, this is not a good way to do it, because if you want to change `X` or `Y` to another number in the future, then you must also change `SUM` to another number. It would be better if `SUM` could be computed automatically, so one would just need to change `X` or `Y`.

::: warning What about using the a variable?

You might think one can use the special `a` variable to achieve this, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = a.X + a.Y
	
}
```

And that is very good thinking of you, but it does unfortunately not work; in your `App` class, the special `a` variable can only be used inside methods, and it can't be used when your app constants/variables are initialized.

:::

So, the proper solution to this problem is to use the `onStart()` method in your `App` class. When the special `a` variable is created, it will contain all your app constants/variables/methods, and then your `App.onStart()` method will be called (if you have one).

::: tip Example

Example of an app that uses `App.onStart()` to correctly initialize a constant.

```js baga-show-editor-code
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 0 // Which initial number we give to SUM doesn't matter, since it will be given its correct number in onStart().
	
	onStart(){
		a.SUM = a.X + a.Y
	}
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Text.text(`${a.X} + ${a.Y} = ${a.SUM}`)
	}
	
}
```

:::





## `Page.onBefore()`
The special method `onBefore()` in your `Page` classes works very similar to `App.onStart()`: `Page.onBefore()` will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.

::: tip Example

Example of an app that uses `Page.onBefore()` to update how many times the user has visited that page.

```js baga-show-editor-code
class StartPage extends Page{
	
	numberOfVisits = 0
	
	onBefore(){
		p.numberOfVisits += 1
	}
	
	createGui(){
		return Rows.children(
			Text.text(`You have visited this page ${p.numberOfVisits} times.`),
			Button.text(`Go to Page2`).page(Page2),
		)
	}
	
}

class Page2 extends Page{
	
	createGui(){
		return Button.text(`Go back to StartPage`).page(StartPage)
	}
	
}
```

:::





## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

[This BagaWork project](/editor#eNq9kttKw0AQhl9lnRtbWEobLZTclCiiRTxgC1psoUsyaYPJbtidYEvIu5s0NjahVW/0YsNM5p/Tt5uCiGOwU3CVh2CDGwpj2N3GiWOGa0LpGZbb6UzOqDiuRkE4JqHpUSyx1S4jpJESLVkVKP5mZVIGGQdfhR5qA/ZrCoEHdo+DFFHRcZsCHJTvG6QXsLs7e5rb2ZxDnNerZZbFRqVTG7zqXw1fOI3pr5OgOfeTejcddxWEnkbZKkMzGsfCRb7zJnnJDuWf1uIGw1BxJgMXGSkWIRLbqORk0T6oDr6kBrFQMrEUgdzX13tdJERKfuY/3Fa6do0rhzXY590zDhuwrYG1gzXBKA7zRWvQapwc8zbyHS8J/wGWo8uVt5fGaCUk6w2GR1e/VGESyQMNmsIGpXu1V/IH7RTNN+LDsDNeorQaKK8koXaW+Pcgn1eCTk3BUufvB4e/ez297p6uHukfi1hHc6z+ka4NWPPsA0PKkeM=) contains a page that should display the message `Hello, nice to meet you!` the first time the user comes to the page, and all times after that, it should display the message `Hi, nice to see you again!`. Currently, it always displays both of the messages. Change the code so it works as it should, as shown below.

```js baga-show
class StartPage extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Hello, nice to meet you!`).keepIf(p.counter == 1),
			Text.text(`Hi, nice to see you again!`).keepIf(1 < p.counter),
			Space,
			Button.text(`OK`),
		)
	}
	
}
```

This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.

::::hint

Use a counter in a page variable to keep track of how many times the user has seen the page. Let it start on `0`, and increment it by `1` each time `Page.onBefore()` runs. Then conditionally show the texts depending on if it has the value `1` or not.

::::

:::




## That's it!
Wow, wow, wow... Now you know about `App.onStart()` and `Page.onBefore()` too! 🥳 Excellent work, soon you'll be fully experienced programmer. Just 999 more things to learn before that xD

Now you are done learning everything the Programming part of the tutorials were intended to teach you, so you should have some very fundamental understanding of programming now. To double check that you have learned everything you were meant to learn, try to complete the exercises in [Programming 8. Exercises](../exercises/).