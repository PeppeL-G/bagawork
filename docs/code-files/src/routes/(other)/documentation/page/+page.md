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
In Bagawork, you can use the special variable named `p`, short for *page*, to access the constants/variables/methods you have in your `Page` class. So, unlike the `a` variable, the `p` variable refers to different things in your different pages:

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

In your `Page` classes, you can also use the special Bagawork variable `a` to access the things you have in your `App` class. For more information, see the documentation for the :docs[app] class.

:::





## `onBefore()` - Initializing the state of the page
The method `onBefore()` will be called each time the user comes to the page (before the page is shown on the screen).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFVNFumzAU/ZUra1KDhiihirQiVROdpqoPW6cl2ha1leLApaCAjWzTNIr49xoIJCDSZX3ZQxDYPufce851toRmGXG3xOcBEpf4CZUSvm28LAN8UcgCCfp9+8AeVPnzBVKFU0WF+kGfcGTUO0qgygWDdqNcLWpQQQqThDwJUEji3m9JHBB3bBJG01KxghCT8DCUqP4Q127e5/q9eDRJpvk6yJrstv7oFN7qt8WXH2315+cwi2IJz1TEdJkgyIjnSQArxAyUoP4KeAgRX0NK2WaHUHGKElSEkEsUEFEJS0QGnOlFTVaWZ5VnWZ4uUdyFv2IZKwlXYDe6nF1jyMXervqpyacckPpRJbLX8HklyfcCZotYI8RMx5AiUxArWG5gbNW7mdUr4eMVjPeCRTfEmzzux/eTr6XlR3ESCGSjHVLNtJeW0o/RYs5zbcAzHjiAB6Z/2PZLKGr7rIVhNnTXudKG7AhveNnmnaYRJcPCsMpuR+2CUaOMzjyZ5IW4jq0HZUPcC9suzHo0Jm+NRks5PBrv96SaqLiekFbkLw23ljUNtwvHG55cOFXDzuVlcytmmGaJLrtzOzpde3J1G3pBnrxxKwan873DMs2oj+aATZ5A2OjxqQLSZlEG40+fD2zqIr/wJE/ZgED/YM/f77yxlOVJYpgnwuYoT8M1O0bHJM68UKEYcrD8+6uzcXrZfGUa4j3h/07md0TVmSzDEaDVj2fScWxsDxvWPTQ54ZBzCpNzhOmwwn/J5LF4BT88hSY=]

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

The GUI is built with the GUI Components from the Bagawork framework. In the sidebar on this page you have a list of them (*Views* and *Layouts*).

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