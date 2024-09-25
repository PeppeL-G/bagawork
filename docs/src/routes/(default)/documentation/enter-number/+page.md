<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterNumber`
On this page you find the documentation for the GUI Component `EnterNumber`.

## Introduction
The `EnterNumber` component is a view in which the user can enter a number. If the user presses the Enter key (`↵`) in the component, the app will progress to the next page.

::: tip Example

In this example, the GUI consists of only the `EnterNumber` component, so it covers the entire screen.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}
```

:::



## `number()` - Setting an initial number
Use the configuration method `number()` to give the `EnterNumber` a number it will contain initially.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterNumber.number(123)
	}
}
```

:::




## `placeholder()` - Setting a placeholder text
Use the configuration method `placeholder()` to show a text in the `EnterNumber` component when no number is shown. Try typing some digits in the example below, and see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(`Enter age`)
	}
}
```

:::




## `decimals()` - Setting maximum number of decimals
Use the configuration method `decimals()` to indicate how many decimals the entered number may contain. Pass it:

* `0` to allow no decimals, e.g. allow numbers like `123` and `55` (i.e. only integers)
* `1` to allow at most 1 decimal, e.g. `123`, `123.4` and `0.6`
* `2` to allow at most 2 decimals, e.g. `123`, `123.4`, `123.45` and `1.23`
* Etc.

::: tip Example

Example where the user can only enter integers.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(`Enter age`).decimals(0)
	}
}
```

:::

::: tip Example

Example where the user can enter at most 2 decimals.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(`Enter age`).decimals(2)
	}
}
```

:::





## `page()`, `pageIfEqual()`, `pageIfLower()`, `pageIfHigher()` & `pageIfBetween()` - Going to next page
There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:

* `pageIfEqual(number, page)`
* `pageIfLower(number, page)`
* `pageIfHigher(number, page)`
* `pageIfBetween(lowNumber, highNumber, page)`

These methods can be called multiple times. In addition to those, you can also use `page(page)` to specify the page the user should come to if the entered number isn't true for any of the previously mentioned configuration methods.

Example:

```js
EnterNumber
	.pageIfEqual(2, TwoPage) // Go to TwoPage if the user enters 2.
	.pageIfEqual(6, SixPage) // Go to SixPage if the user enters 6.
	.pageIfLower(0, NegativePage) // Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.
	.pageIfHigher(100, HighPage) // Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.
	.pageIfBetween(50, 60, MiddlePage) // Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.
	.page(DefaultPage) // Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.
```

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(`How many years old are you?`),
			Columns.children(
				EnterNumber
					.size(1)
					.pageIfLower(0, InvalidAgePage)
					.pageIfEqual(0, KidPage)
					.pageIfBetween(0, 18, KidPage)
					.page(AdultPage)
					.pageIfHigher(150, InvalidAgePage),
				Button.text(`⇨`),
			),
		)
	}
}

class InvalidAgePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`That age is invalid.`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}

class KidPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Ah, then you are a still a kid. Good for you! :)`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}

class AdultPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Oh, respect to you, big guy!`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}
```

:::



## `store()` - Storing the entered number
Use the configuration method `store()` to store the number the user entered in an object (for example in `a` or `p`). Pass it two values:

1. The object in which the entered number should be stored (e.g. `a` or `p`)
2. The name of the variable in the object where the entered number should be stored

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(`How many years old are you?`),
			Columns.children(
				EnterNumber.size(1).store(a, `age`).page(GreetingPage),
				Button.text(`⇨`),
			)
		)
	}
}

class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Hello you who are ${a.age} years old!`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::



## `defaultNumber()` - Specifying a default number
Use the configuration method `defaultNumber()` to specify which number that should be used if the user doesn't enter a number at all (i.e. if the user leaves the input field empty). If you don't call this configuration method, `0` will be used as the default number automatically.

::: tip Example

In the previous example, click on the `⇨` button without entering a number, and see that `0` is used by default. Do the same thing in this example, and see that `10` is used by default.

```js baga-show-editor-code
class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(`How many years old are you?`),
			Columns.children(
				EnterNumber.size(1).defaultNumber(10).store(a, `age`).page(GreetingPage),
				Button.text(`⇨`),
			)
		)
	}
}

class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Hello you who are ${a.age} years old!`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::




## `onChange()` - Handling the entered number
Use the configuration method `onChange()` to tell the `EnterNumber` component which method to call to handle the entered number. This method will be called each time the user makes a change in the `EnterNumber` component, such as:

* Writes a digit in it
* Removes a digit from it
* Paste a number in it
* Removes all digits in it
* Etc.

Your method will also be passed the entered number as an argument. 

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	
	age = -1
	doubledAge = -2
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.size(1).text(`How many years old are you?`),
			Columns.children(
				EnterNumber.size(1).onChange(p.handleEnteredAge).page(GreetingPage),
				Button.text(`⇨`),
			)
		)
	}
	
	handleEnteredAge(enteredAge){
		a.age = enteredAge
		a.doubledAge = enteredAge * 2
	}
	
}

class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Hello you who are ${a.age} years old! Your doubled age is ${a.doubledAge}.`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::