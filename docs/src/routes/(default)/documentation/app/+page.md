<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `App`
On this page you find the documentation for the `App` class.


## Introduction
The `App` class represents your entire app. It is mainly used to:

* Create the first page shown to the user
* Keep track of the app's global state through the app's instance variables (known as *app variables*)

You should create your own class inheriting from `App` and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.

::: tip Example

Example of the basic code for creating your own `App` class.

```js
// Name your own app whatever you want
// (in this example MyApp).
class MyApp extends App{
	// Override methods here to give your own app
	// the specific behavior you want it to have.
}
```

:::

::: tip Online Editor

In our :online-editor, you can click on a page, and then click on the `MyApp` tab to view and edit the code for your `App` class.

:::



## The `a` variable
In BagaWork, you can use the special variable named `a`, short for *app*, to access the constants/variables/methods you have in your `App` class. The `a` variable can be used both in your `App` class and in your `Page` classes.

::: tip Example

Example of an app with:

* An app constant
* An app variable
* An app method

```js
class MyApp extends App{
	
	THE_CONSTANT_NAME = "The constant value"
	
	theVariableName = "The variable value"
	
	theMethodName(){
		
		// Can use a.THE_CONSTANT_NAME to access the constant value.
		// Can use a.theVariableName to access the variable value.
		// Can use a.theMethodName to access the method.
		
	}
	
}
```

:::




## `createIcon()` - Creating an icon
The method `createIcon()` will be called directly when the app starts. In it, you can create and return a paper figure that will be used as the icon of your app. The icon of your app will not be shown in your app's GUI, but at other places, such as:

* When your app runs in a tab in web browser, the app icon will be shown as the icon of the tab
* When your app is installed on a smartphone, the app icon will be shown as the icon the user should click on to start your app

The icon will always have a squared size (width=height).

::: tip Previewing in the online editor

In our :online-editor, you can preview the app icon by clicking on a page, and then look in the `Icon` tab.

:::

::: tip Example

Example of how `createIcon()` can be implemented.

```js baga-editor-code
class MyApp extends App{
	
	createIcon(){
		return PaperGroup.backgroundColor(`lime`).coordinateSystem(10, 10).children(
			PaperCircle.backgroundColor(`yellow`).radius(5).center(5, 5),
			PaperCircle.backgroundColor(`black`).radius(1).center(3, 7),
			PaperCircle.backgroundColor(`black`).radius(1).center(7, 7),
			PaperLine.backgroundColor(`red`).thickness(0.5).start(3, 3).end(7, 3),
		)
	}
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	createGui(){
		return Text.text(`In the code editor, click on the "Icon" tab, and you will see the created app icon!`)
	}
}
```

:::

::: tip Not needed?

You only need to implement `createIcon()` if you want your app to have its own icon. If you don't implement it, a default icon will be used instead.

:::




## `OnStart()` - Initializing the state of the app
The method `onStart()` will be called directly when the app starts for the first time. In it, you can initialize the state of your app.

::: tip Example

Example of an app that uses `onStart()`.

```js
class MyApp extends App{
	
	NUMBER_1 = 5
	NUMBER_2 = 4
	
	// We want the sum variable to contain the
	// sum of NUMBER_1 and NUMBER_2. However, the
	// "a" variable can only be used in methods
	// in the App class, so we can't write
	// sum = a.NUMBER_1 + a.NUMBER_2 here. So
	// instead, we initialize the sum to a dummy
	// value (0 in this case)...
	sum = 0
	
	onStart(){
		
		// ...and in this method we assign
		// the sum its correct value.
		a.sum = a.NUMBER_1 + a.NUMBER_2
		
	}
	
}
```

:::

::: tip Not needed?

You only need to initialize the global state if your app needs one. Many apps don't need one, and can simply leave `onStart()` empty, or not have this method at all.

:::




## `createStartPage()` - Creating the start page
After `onStart()` has been called, `createStartPage()` will be called. In this method, you should create and send back an instance of the `Page` class that should first be shown to the user. You must implement this method, otherwise your app won't know which `Page` to show when it starts, and the app will crash as soon as the user tries to start it.

::: warning Note!

In our :online-editor, `createStartPage()` is never used. Each time you preview a page, the framework overrides your implementation of `createStartPage()` with its own implementation that returns the page you are previewing. So you have to try running the app for real to be sure that your implementation of `createStartPage()` works.

:::

::: tip Example

Example of an app specifying which `Page` to first show the user.

```js
class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}
```

```js
class StartPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```

:::

See the documentation for the :docs[Page] class to learn which methods you can override in your `Page` class to make it work the way you want.




## `createErrorRecoveringPage()` - Handling errors
When the user runs your app and an unexpected error occurs in your code, your app will crash, and a GUI from the framework will be shown to the user with a message that explains why the app crashed, and what the user can do about it.

::: tip Example

Example of an app that can crash.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Try crashing this app by clicking on the button below.`),
			Button.text(`Crash!`).onClick(p.handleClick),
		)
	}
	
	handleClick(){
		
		// When the code below is executed,
		// the app will crash, because the
		// variable "hello" does not exist.
		p.test = hello
		
	}
	
}
```

:::

One of the options presented to the user is to try running the app again. Most likely, the app will only crash when it tries to show/run the page that crashed, and hopefully the user will still be able to use the other pages in the app without problems until you have released a new version of the app that doesn't crash on that page anymore.

If the user choses the option to try running the app again, then `App.createStartPage()` will be called, and the page returned from that method will be shown to the user. If you instead want to show another page to the user after a crash, you can implement `App.createErrorRecoveringPage()`, and return the page you want to show to the user there.

::: tip Example

Example of an app that doesn't use `createErrorRecoveringPage()`, and instead uses `createStartPage()` when the app crashes and the user wants to try running it again.

Notice that when the counter gets to `3`, you can still restart the app and use the `ClockPage`, but going to the `CounterPage` again after that will always make the app crash.

```js baga-show-editor-code
class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Thank you for using my app, I hope you enjoy using it!`),
			Button.text(`Go!`).page(MenuPage),
		)
	}
	
}

class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Menu`),
			Button.text(`Counter`).page(CounterPage),
			Button.text(`Clock`).page(ClockPage),
		)
	}
	
}

class CounterPage extends Page{
	
	counter = 0
	
	createGui(){
		
		// To try error handling, we will on
		// purpose have code that crashes when
		// counter is 3.
		if(p.counter == 3){
			log(nonExistingVariable)
		}
		
		return Rows.children(
			Text.text(`Counter is ${p.counter}.`),
			Button.text(`+1`).onClick(p.incrementCounter),
			Button.text(`Back`).page(MenuPage),
		)
		
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}

class ClockPage extends Page{
	
	createGui(){
		
		const now = Time.setNow()
		
		return Rows.children(
			Text.text(now.getClock()),
			Button.text(`Back`).page(MenuPage),
		)
		
	}
	
}
```

:::

::: tip Example

This is the same app as in the previous example, but this time we have also specified that `createErrorRecoveringPage()` should return `MenuPage`, so the user comes to the `MenuPage` after the app has crashed, and doesn't need to view the `StartPage` again.

```js baga-show-editor
class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
	createErrorRecoveringPage(){
		return MenuPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Thank you for using my app, I hope you enjoy using it!`),
			Button.text(`Go!`).page(MenuPage),
		)
	}
	
}

class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Menu`),
			Button.text(`Counter`).page(CounterPage),
			Button.text(`Clock`).page(ClockPage),
		)
	}
	
}

class CounterPage extends Page{
	
	counter = 0
	
	createGui(){
		
		// To try error handling, we will on purpose
		// have code that crashes when counter is 3.
		if(p.counter == 3){
			log(nonExistingVariable) // Will crash, since that variable doesn't exist.
		}
		
		return Rows.children(
			Text.text(`Counter is ${p.counter}.`),
			Button.text(`+1`).onClick(p.incrementCounter),
			Button.text(`Back`).page(MenuPage),
		)
		
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}

class ClockPage extends Page{
	
	createGui(){
		
		const now = Time.setNow()
		
		return Rows.children(
			Text.text(now.getClock()),
			Button.text(`Back`).page(MenuPage),
		)
		
	}
	
}
```

```js
class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
	createErrorRecoveringPage(){
		return MenuPage
	}
	
}
```

:::






## `onUpdate()` - Updating the state of the app
When the user starts running a new version of your app with a state from an older version of the app, `App.onUpdate()` will be called, in which you can handle the update. `onUpdate()` will be passed two values:

* `oldA`, which contains the stored app variables
* `oldVersion`, which contains the old version number of the app the user ran before

The page shown to the user after the update is by default the same page the user was on before the update. If that page doesn't exist in the new version of the app, then the page returned by `App.createStartPage()` will be shown. If you don't want this default update behavior, you can return a page from `onUpdate()`, and that page will be shown to the user.

For more information, see :docs[State].