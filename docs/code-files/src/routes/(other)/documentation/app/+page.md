<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `App`
On this page you find the documentation for the `App` class.


## Introduction
The `App` class represents the entire app the user can interact with. It is used to:

* Keep track of the app's global state through the app's instance variables
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

::: tip "a" is this!

In the `App` class you can use the special global variable named `a` to refer to the instance of your `App` class. That can be more convenient than using the special variable named `this`, as one otherwise would use in JavaScript. On this website, we will use `a` instead of `this`, and we recommend you to do the same.

:::



## Initializing the global state
When the user starts using your app, a new instance of your `App` class will be created, and the method `onBefore()` will be called. In this method you can initialize any global state you need to use in your app.

::: tip Example

Example of code initializing a global app state (for an app where we need to be able to keep track of for how long the user has used the app, and how many lives the user still have (this app is apparently some sort of game)).

```js
class MyApp extends App{
	onBefore(){
		a.startTime = Date.now()
		a.playerRemainingLives = 3
	}
}
```

:::

::: tip Not needed?

You only need to initialize the global state if your app needs one. Some simple apps don't need one, and can simply leave `onBefore()` empty, or not have the method at all.

:::



## Creating the start page
After `onBefore()` has been called, `createStartPage()` will be called. In this method, you should create and send back an instance of the `Page` class that should first be shown to the user. This method you must implement, otherwise your app won't know how to start.

::: tip Example

Example of an app specifying which `Page` to first show the user.

```js
class MyApp extends App{
	createStartPage(){
		return new StartPage()
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

See the documentation for the [Page](/documentation/page) class to learn which methods you can override in it to configure how the page should work.




## Speaking the text
You can make the app speak the text in `Text` components using the speakers on the user's device by enabling the app's `Mouth` with the code `a.mouth.enable()`.

::: tip Example

Example of code showing how to make your app speak.

::bagawork-project[app&link&code=StartPage&baga=eNqVUk1rg0AQ/SvLnBQWaewnXoq5pDkUSptDSw241TFKzK6sK0kQ/3t3Y/wKpZDLOjPy3rz3dmtgRQFeDZGIETyIclaW5PXoFwXBg0Iel0TXdcADJfgcEyHRsk9toJizE5VKHeTsJ9djM23MEUlkCj8Uk+qNbQaARFVJTjjuyejnGdZAQyEReYyyBO+7hiwGb0aBs51RdgIABZEkJapP8G66+kvXzZpCodkmyJZs2TYTg/323qRp6kH7osouVVttF6h5pXQWjtJQK1wIogRZ6dowhLZjVFhdb7eYwSKFA3iue0vhqL9PDw1t1br/qe3YrhD7LvalE6VZHkvkvXJDdNb9khGVokRKUrEnTCI5iorEIuOb59Cmf3qds2hr3LbDsd8+zwE52uWP2UmScRxWXERzP3s8R3PXXekKd0WuXU6udpKPX26XiR9XuboioZG+cPQE180vaIIUWQ==]

:::

::: warning Will not always work
The speak functionality uses text-to-speech functionality provided by the user's web browser. Not all web browsers provide such functionality, and will therefor not work for all your users.
:::

The app's voice can also be configured and disabled. Check out the documentation for the :docs[mouth] class for more information.