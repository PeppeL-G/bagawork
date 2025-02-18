<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterText`
On this page you find the documentation for the GUI Component `EnterText`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `EnterText` component. The `EnterText` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `EnterText` component is a view in which the user can enter some text. If the user presses the Enter key (`↵`) when the component has focus, the app will progress to the next page.

::: tip Example

In this example, the GUI consists of only the `EnterText` component, so it covers the entire screen.

```js baga-show
class StartPage extends Page{
	createGui(){
		return EnterText
	}
}
```

:::



## `text()` - Setting an initial text
Use the configuration method `text()` to give the `EnterText` a text it should contain from the start. Pass the text as a string.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterText.text(`Write here!`)
	}
}
```

:::




## `placeholder()` - Setting a placeholder text
Use the configuration method `placeholder()` to show a text in the `EnterText` component when it's empty. 

::: tip Example

Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(`Enter name`)
	}
}
```

:::





## `page()` & `pageIfEqual()` - Going to next page
Use the configuration method `pageIfEqual()` to specify a `Page` the user should come to if they have entered some specific text in the component. Pass the method two values:

1. The text the user might enter
2. The `Page` the user should come to if that text has been entered

You can call this method multiple times.

Use the configuration method `page()` to specify which `Page` the user should come to if they have entered a text that's not equal to any of the texts passed to `pageIfEquals()`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(`Which is your favorite name?`),
			Columns.children(
				EnterText
					.grow(1)
					.page(NormalNamePage)
					.pageIfEqual(`Peter`, BeautifulNamePage)
					.pageIfEqual(`Gargamel`, UglyNamePage)
					.pageIfEqual(``, EmptyNamePage),
				Button.text(`⇨`),
			),
		)
	}
}

class NormalNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`That's no special name.`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}

class BeautifulNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Oh, that's a very beautiful name :)`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}

class UglyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Oh, that's not a very nice name.`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}

class EmptyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`You must enter a name...`),
			Button.text(`Go back`).page(StartPage),
		)
	}
}
```

:::



## `store()` - Storing the entered text
Use the configuration method `store()` to store the text the user has entered in an object (for example in `a` or `p`). Pass it two values:

1. The object in which the entered text should be stored (e.g. `a` or `p`)
2. The name of the variable in the object where the entered text should be stored as a string

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	
	name = `Unknown`
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(`What's your name?`),
			Columns.children(
				EnterText.grow(1).store(a, `name`).page(GreetingPage),
				Button.text(`⇨`),
			)
		)
	}
}

class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Hello, ${a.name}!`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::

## `onChange()` - Handling the entered text
Use the configuration method `onChange()` to tell the `EnterText` component which method to call to handle the entered text. This method will be called each time the user makes a change in the `EnterText` component, such as:

* Writes a character in it
* Removes a character from it
* Paste text in it
* Removes all text in it
* Etc.

Your method will also be passed the entered text as an argument, and additional arguments passed to `onChange()` will also be passed to the method you pass to `onChange()`.

::: tip Example

```js baga-show-editor-code
class MyApp extends App{
	
	name = `Unknown`
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.grow(1).text(`What's your name?`),
			Columns.children(
				EnterText.grow(1).onChange(p.handleEnteredName).page(GreetingPage),
				Button.text(`⇨`),
			)
		)
	}
	
	handleEnteredName(enteredName){
		a.name = enteredName.toUpperCase()
	}
	
}

class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Hello, ${a.name}!`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::