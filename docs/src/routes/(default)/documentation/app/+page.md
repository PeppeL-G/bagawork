<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `App`
On this page you find the documentation for the `App` class.


## Introduction
The `App` class represents your entire app. It is used to:

* Keep track of the app's global state through the app's instance variables (known as *app variables*)
* Create the first page shown to the user

You should create your own class inheriting from `App` and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.

::: tip Example

Example of the basic code for creating your own `App` class.

```js
// Name your own app whatever you want (in this example MyApp).
class MyApp extends App{
	// Override methods here to give your own app
	// the specific behavior you want it to have.
}
```

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
	
	theVariableNAME = "The variable value"
	
	theMethodName(){
		
		// Can use a.THE_CONSTANT_NAME to access the constant value.
		// Can use a.theVariableName to access the variable value.
		// Can use a.theMethodName to access the method.
		
	}
	
}
```

:::



## `onBefore()` - Initializing the state of the app
The method `onBefore()` will be called directly when the app starts. In it, you can initialize the state of your app.

::: tip Example

Example of an app that uses `onBefore()`.

```js
class MyApp extends App{
	
	TERM_1 = 5
	TERM_2 = 4
	
	// We want the sum variable to contain the sum of TERM_1 and TERM_2.
	// However, the "a" variable can only be used in methods, so we can't
	// write sum = a.TERM_1 + a.TERM_2 here. So instead, we initialize
	// the sum to a dummy value (0 in this case)...
	sum = 0
	
	onBefore(){
		
		// ...and in this method we assigns sum its correct value.
		a.sum = a.TERM_1 + a.TERM_2
		
	}
	
}
```

:::

::: tip Not needed?

You only need to initialize the global state if your app needs one. Some simple apps don't need one, and can simply leave `onBefore()` empty, or not have this method at all.

:::




## `createIcon()` - Creating an icon
The method `createIcon()` will be called directly when the app starts. In it, you can create and return a :docs[Paper] component that will be used as the icon of your app. If your app is installed on a smartphone, it will for example be used as the icon the user should click on to start your app, and if your app runs in a tab in a web browser, the icon will be shown in the corner of the tab.

The icon will always have a square size (width=height).

::: tip Previewing in the online editor

In our online editor, you can preview the app icon by clicking on a page, and then look in the `Icon` tab.

:::

::: tip Example

Example of how `createIcon()` can be implemented.

```js baga-editor-code
class MyApp extends App{
	createIcon(){
		return Paper.backgroundColor(`gold`).children(
			PaperCircle.backgroundColor(`red`).radius(5),
		)
	}
}

class StartPage extends Page{
	createGui(){
		return Text.text(`In the code editor, click on the "Icon" tab, and you will see the created icon!`)
	}
}
```

:::

::: tip Not needed?

You only need to implement `createIcon()` if you want your app to have its own icon. 

:::




## `createStartPage()` - Creating the start page
After `onBefore()` has been called, `createStartPage()` will be called. In this method, you should create and send back an instance of the `Page` class that should first be shown to the user. This method you must implement, otherwise your app won't know which `Page` to show when it starts, and the app will crash.

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

See the documentation for the :docs[Page] class to learn which methods you can override in your `Page` classes to make them work the way you want.




## `onUpdate()` - Updating the state of the app
When the user starts running a new version of your app with a state from an older version of the app, `App.onUpdate()` will be called, in which you can handle the update. `onUpdate()` will be passed two values:

* `oldA`, which contains the stored app variables
* `oldVersion`, which contains the old version of the app the user ran before

The page shown to the user after the update is by default the same page the user was on before the update. If that page doesn't exist in the new version of the app, then the page returned by `App.createStartPage()` will be shown. If you don't want this default update behavior, you can return a page from `onUpdate()`, and that page will be shown to the user.

For more information, see :docs[State].