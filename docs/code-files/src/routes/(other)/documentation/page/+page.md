<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Page`
On this page you find the documentation for the `Page` class.



## Introduction
Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a button in the page), after which the app will go to the next page and show the GUI of that one instead, and so on.

To add a page to your app, create your own class that extends the `Page` class, and in which you override some methods to give your own `Page` class the specific behavior you want it to have. You can name your own `Page` classes whatever you want, but they need to have unique names.

::: tip Example

Example showing the basic structure of a simple app.

```js
class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}
```

```js
class StartPage extends Page{
	// Override methods here to give the StartPage
	// the specific behavior you want it to have.
}
```

```js
class MenuPage extends Page{
	// Override methods here to give the MenuPage
	// the specific behavior you want it to have.
}
```

```js
class GameOverPage extends Page{
	// Override methods here to give the GameOverPage
	// the specific behavior you want it to have.
}
```

:::




## The `p` variable
In Bagawork, you can use the special variable named `p`, short for *page*, to access the constants/variables/methods you have in your `Page` class.

::: tip Example

```js
class StartPage extends Page{
	
	THE_CONSTANT_NAME = "The constant value"
	
	theVariableName = "The variable value"
	
	theMethodName(){
		
		// Can use p.THE_CONSTANT_NAME to access the constant value.
		// Can use p.theVariableName to access the variable value.
		// Can use p.theMethodName to access the method.
		
	}
	
}
```

:::

::: tip The "a" variable

In your `Page` classes, you can also use the special Bagawork variable `a` to access the things you have in your `App` class. For more information, see the documentation for the :docs[app] class.

:::





## `onBefore()` - Initializing the state of the page
The method `onBefore()` will be called directly when user come to the page (*before* the page is shown on the screen). In it, you can initialize the state of your page.

::: tip Example

```js
class SumPage extends Page{
	
	TERM_1 = 5
	TERM_2 = 4
	
	// We want the sum variable to contain the sum of TERM_1 and TERM_2.
	// However, the "a" variable can only be used in methods, so we can't
	// write sum = a.TERM_1 + a.TERM_2 here. So instead, we initialize
	// the sum to a dummy value (0 in this case)...
	sum = 0
	
	onBefore(){
		
		// ...and in this method we assigns sum its correct value.
		p.sum = p.TERM_1 + p.TERM_2
		
	}
	
}
```

:::

::: tip Not needed?

You only need to initialize the page's state if your page needs one. Many simple pages can leave this method empty, or simply not have it at all.

:::



## `createGui()` - Creating the GUI
After `onBefore()` has been called, `createGui()` will be called. In this method you should create the GUI structure the page should have, and send back the GUI structure's root component. The app will then show the page's GUI on the user's screen.

::: tip Example

Example showing how to use `Page.createGui()`.

```js
class AskQuestionPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Do you know the answer to this question?`),
			Cols(
				Button.text(`Yes`).page(YesPage),
				Button.text(`No` ).page(NoPage),
			),
		)
	}
}
```

:::

::: tip The size of the root component

The root component in your GUI (the `Rows` component in the example above) will always be as wide and high as the screen/the space on the screen your app can use.

:::

::: tip Building the GUI

The GUI is built with the GUI Components from the Bagawork frameworks. In the sidebar on this page you have a list of them (*Views* and *Layouts*).

:::



## `onAfter()` - Handling user input
When the user has interacted with your GUI (for example by clicking on a button in it) and should be taken to another page, `onAfter()` will be called, in which you can handle the user's input.

::: tip Example

Example showing how to use `Page.onAfter()`.

```js
class AskQuestionPage extends Page{
	
	startTimeInMs = Date.now()
	answer = ``
	
	createGui(){
		return Rows.children(
			Text.text(`Do you know the answer to this question?`),
			Cols(
				Button.text(`Yes`).handler(p.onYesAnswer),
				Button.text(`No` ).handler(p.onNoAnswer),
			),
		)
	}
	
	onYesAnswer(){
		p.answer = `yes`
	}
	
	onNoAnswer(){
		p.answer = `no`
	}
	
	onAfter(){
		
		const endTimeInMs = Date.now()
		const timeToAnswerInMs = endTimeInMs - p.startTimeInMs
		
		if(10000 < timeToAnswerInMs){
			// Took more than 10 seconds to answer (too long), handle that here.
		}else if(p.answer == `yes`){
			// The user clicked on the yes-button within 10 seconds, handle that here.
		}else{
			// The user clicked on the no-button within 10 seconds, handle that here.
		}
		
	}
}
```

:::

::: tip Not needed?

You only need to handle user input in `onAfter()` if your app's logic require's that. Many simple apps can simply leave this method empty, or not have it at all.

:::



## `createAfterDirection()` -  Creating *after directions*
When the user has interacted with the GUI, it needs to be taken to the next `Page`. `createAfterDirections()` will be called to figure out which that next `Page` is. This method should return an array of `Direction`s, where each `Direction` represents a condition that indicates when that `Direction` should be used, and which `Page` the user should come to when that condition is `true`.

If none of the `Page`'s `Direction`s' have a condition that returns `true`, the user will come to a new instance of the `Page` the user currently is on.

::: tip Example

Example showing how to use `Page.createAfterDirections()`.

```js
class AskQuestionPage extends Page{
	
	startTimeInMs = Date.now()
	answer = ``
	
	createGui(){
		return Rows.children(
			Text.text(`Do you know the answer to this question?`),
			Cols(
				Button.text(`Yes`).handler(p.onYesAnswer),
				Button.text(`No` ).handler(p.onNoAnswer),
			),
		)
	}
	
	onYesAnswer(){
		p.answer = `yes`
	}
	
	onNoAnswer(){
		p.answer = `no`
	}
	
	createAfterDirections(){
		return [
			new Direction(
				TooSlowPage,
				() => 10000 < Date.now() - p.startTimeInMs,
				`Took more than 10 seconds to answer`,
			),
			new Direction(
				YesPage,
				() => p.answer == `yes`,
				`The user clicked on the yes-button`,
			),
			new Direction(
				NoPage,
				() => true, // Directions are tested in order, so can hard code true in the last direction.
				`The user clicked on the no-button`,
			),
		]
	}
}
```

```js
class TooSlowPage extends Page{
	// Override methods here...
}
```

```js
class YesPage extends Page{
	// Override methods here...
}
```

```js
class NoPage extends Page{
	// Override methods here...
}
```

:::

You can also specify additional `Direction`s using the GUI Components you use. For example, if you want the user to come to the `YesPage` when the user clicks on the *Yes* `Button`, you can use the `page()` configuration method on the `Button` like this:

```js
Button.text(`yes`).page(YesPage)
```

Then you don't need to have:

```js
new Direction(
	YesPage,
	() => p.answer == `yes`,
	`The user clicked on the yes-button`,
)
```

in `createAfterDirections()`.

Using the GUI Components' configuration methods is usually much easier than to implement your own `Direction`s in `createAfterDirections()`, so we recommend you to use the configuration methods whenever possible, and only implement your own `Direction`s in `createAfterDirections()` when you need `Direction`s that can't be expressed using the configuration methods.

Check out the documentation for the different *Views* GUI components in the sidebar to learn which configuration methods you can use to automatically add `Direction`s to a `Page`.




## `createBeforeDirections()` - Creating *before directions*
In some special cases, when a user comes to one `Page`, let's call it `PageA`, you might want to immediately send the user to another `Page`, let's call that one `PageB`, without the user seeing `PageA`. For this, you can add a *before direction* in `PageA` by implementing the method `createBeforeDirections()`. 

`createBeforeDirections()` will be called directly when the user comes to the `Page`, and should return an array with `Direction`s. If one of those `Direction`s' condition is `true`, the user will come to the `Page` the `Direction` leads to. Otherwise, the initial `Page` will be shown as usual.

::: tip Example
Example showing how to use `Page.createBeforeDirections()`.

```js
class MyPage extends Page{
	createBeforeDirections(){
		// One should not be allowed to view this
		// page between 00:00 and 08:59.
		return [
			new Direction(
				MorningPage,
				() => new Date().getHours() < 9,
				`It's morning`,
			),
		]
	}
}
```
:::

::: warning Life cycle methods

When a before direction's condition is `true`, no other methods on the `Page` will be called, not even `onBefore()` nor `onAfter()`!

:::