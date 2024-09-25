<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Page`
On this page you find the documentation for the `Page` class.



## Introduction
Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a button in it). After the user has interacted with the GUI on the page, the app will take the user to the next page and show the GUI of that one instead, and so on.

To add a page to your app, create your own class that extends the `Page` class, and override some methods there to give your own `Page` class the specific behavior you want it to have. You can name your own `Page` classes whatever you want, but they need to have unique names within your app.

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
In BagaWork, you can use the special variable named `p`, short for *page*, to access the constants/variables/methods you have in your `Page` class. So, unlike the `a` variable, the `p` variable refers to different things in your different pages:

* In the `HelloPage`, you can use `p` to access the constants/variables/methods you have in the `HelloPage`
* In the `AboutPage`, you can use `p` to access the constants/variables/methods you have in the `AboutPage`
* Etc.

::: tip Example

Example of a page with:

* A page constant
* A page variable
* A page method

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

In your `Page` classes, you can also use the special BagaWork variable `a` to access the things you have in your `App` class. For more information, see the documentation for the :docs[App] class.

:::




## `createBeforeDirections()` - Redirecting the user to another page
The method `createBeforeDirections()` will be called directly when the user comes to the page. In it, you can return an array of :docs[Direction] objects. If there exists a `Direction` object that has `if` set to `true`, the user will immediately be taken to that page, and will never see the GUI of this page (no other methods on this page will be called, not even `onBefore()`).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createBeforeDirections(){
		
		const oneOrTwo = m.randomInt(1, 2)
		
		return [
			Direction.when(oneOrTwo == 1).page(LuckyPage).text(`Was lucky`),
			Direction.when(oneOrTwo == 2).page(UnluckyPage).text(`Was unlucky`),
		]
		
	}
	
	createGui(){
		return Text.text(`This GUI will only be used in the preview, the user will never see it in the app.`)
	}
	
}

class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`You are lucky!`),
			Button.text(`Try again`).page(StartPage)
		)
	}
	
}

class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`You are unlucky!`),
			Button.text(`Try again`).page(StartPage)
		)
	}
	
}
```

:::

::: tip Not needed?

You only need to implement `createBeforeDirections()` if you need it.

:::





## `onBefore()` - Initializing the state of the page
The method `onBefore()` will be called each time the user comes to the page (before the page is shown on the screen).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	// This variable should keep track of how many
	// times the user has been on this page.
	numberOfVisits = 0
	
	onBefore(){
		
		// So each time the user comes to this page,
		// we increment it by 1.
		p.numberOfVisits += 1
		
	}
	
	createGui(){
		return Rows.children(
			Text.text(`You have been on the StartPage ${p.numberOfVisits} times.`),
			Button.text(`Go to OtherPage`).page(OtherPage)
		)
	}
	
}

class OtherPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the OtherPage.`),
			Button.text(`Go to StartPage`).page(StartPage)
		)
	}
	
}
```

:::

::: tip Not needed?

You only need to implement `onBefore()` if you need it. Many simple pages can leave this method empty, or simply not have it at all.

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
			Columns.children(
				Button.text(`Yes`).page(YesPage),
				Button.text(`No` ).page(NoPage),
			),
		)
	}
}
```

:::

::: tip The size of the root component

The root component in your GUI (the `Rows` component in the example above) will always be as wide and high as the screen itself.

:::

::: tip Building the GUI

The GUI is built with the GUI Components from the BagaWork framework. In the sidebar on this page you have a list of them (*Views* and *Layouts*).

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
			Columns.children(
				Button.text(`Yes`).onClick(p.onYesAnswer),
				Button.text(`No` ).onClick(p.onNoAnswer),
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



# `createAfterDirections()` - Redirecting the user to another page
The method `createAfterDirections()` will be called after the user has interacted with the GUI. In it, you can return back an array with :docs[Direction] objects, indicating which page the user should come to.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Ready to try your luck?`),
			Button.text(`Yes!`),
		)
	}
	
	createAfterDirections(){
		
		const oneOrTwo = m.randomInt(1, 2)
		
		return [
			Direction.when(oneOrTwo == 1).page(LuckyPage).text(`Was lucky`),
			Direction.when(oneOrTwo == 2).page(UnluckyPage).text(`Was unlucky`),
		]
		
	}
	
}

class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`You are lucky!`),
			Button.text(`Try again`).page(StartPage)
		)
	}
	
}

class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`You are unlucky!`),
			Button.text(`Try again`).page(StartPage)
		)
	}
	
}
```

:::

::: tip Not needed?

You only need to implement `createAfterDirections()` if you need it.

:::





## Referring to a page
Sometimes you need to refer to a page you have created. For example, when the user clicks on a :docs[button], you might want to take the user to the page you have created named `AboutPage`. To tell the `Button` that the user should come to that page when the `Button` is clicked, you call the configuration method `page()` on the `Button`, and you pass it the page the user should come to. To obtain that page, simply write the name you have given your page, e.g.:

```js
Button.page(AboutPage)
```

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the StartPage`),
			Button.text(`Go to AboutPage`).page(AboutPage)
		)
	}
	
}

class AboutPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the AboutPage.`),
			Button.text(`Go to StartPage`).page(StartPage)
		)
	}
	
}
```

:::

## Page arguments
When you specify a page the user should come to, you can also pass along arguments (values) to that page by using *page argument methods*. Page argument methods work the same way as configuration methods on GUI components, but with page argument methods, you decide the names. For example, if you want to pass along an argument named `age` with the value `10`, you would write:

```js
ThePageName.age(10)
```

You can name the argument whatever you want, and you can pass along how many page arguments you want.

The arguments will then be assigned to the page the user comes to, so you can access them through the `p` variable, e.g. use `p.age` to obtain the value.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`This is the StartPage`),
			Button.text(`Info about Alice`).page(AboutPage.name(`Alice`).age(10)),
			Button.text(`Info about Bob`).page(AboutPage.age(15).name(`Bob`)),
		)
	}
	
}

class AboutPage extends Page{
	
	// These will get their values from page arguments.
	name = `DEFAULT_NAME`
	age = -1
	
	createGui(){
		return Rows.children(
			Text.text(`${p.name} is ${p.age} years old.`),
			Button.text(`Go to StartPage`).page(StartPage)
		)
	}
	
}
```

:::
