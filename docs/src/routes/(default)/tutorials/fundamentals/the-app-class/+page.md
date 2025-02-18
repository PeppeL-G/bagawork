<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. The App Class
This tutorial will teach you the basics about the `App` class.



## App structure
As you should know by now, a BagaWork app consists of different pages. However, that is actually not enough for a BagaWork app to work. For example, the computer would have no idea about which of your pages that should be shown to the user when the app starts, so something more is needed. Therefor, a BagaWork app also consists of an `App` class to provide this extra type of information to the computer.




## Creating the `App` class
In programming, a *class* is a description of how a *thing* should work. The BagaWork framework contains a class called `App`, which is a general description of how a BagaWork app should work.

When you create a BagaWork app, you should create your own app class that *extends* the `App` class. This way, your own app class will already contain the general description of how a BagaWork app should work, and you just need to write a little bit of code to make it function the specific way you want it to. Great, right? 🙂

::: tip Example

Example showing JavaScript code for how to create your own app class called `MyApp`.

```js
class MyApp extends App{
	
}
```

:::

::: tip Online Editor

In our :online-editor, the `App` class has already been created for you, and you can view and change the code for it by clicking on a page and then on the `MyApp` button at the top of the editor.

:::

You can name your own app class whatever you want, but remember that all classes in your app need to have a unique name, so you can't have a page class with the same name as your app class.

To specify how your own app class should work, you override some predefined methods in it. It all works the same way as you override methods in the `Page` class, but the `App` class has other methods you can override. 




## Creating the Start Page
When the user starts your BagaWork app, the method named `createStartPage()` in your `App` class will be called. In this method, you should return back the page that should be shown to the user directly when the app starts.

::: tip Example

Example showing a BagaWork app consisting of two pages, and how the `App` class tells the computer that the page named `FirstPage` should be shown to the user when the app starts.

```js baga-show-editor-code
class MyApp extends App{
	
	createStartPage(){
		return FirstPage
	}
	
}

class FirstPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`This is the first page!`),
			Space,
			Button.text(`Go to the second page`).page(SecondPage),
		)
	}
	
}

class SecondPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`This is the second page`),
			Space,
			Button.text(`Go back to the first page`).page(FirstPage),
		)
	}
	
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

When opening [this BagaWork project](/editor#eNq1UsFqg0AQ/ZXtXBpBgloCxUuxpZQcWkoTaEsNZNExSs2u7I40Qfz3rjEJUWJLDz0oM755b948rIAXBfgVRDJG8CHKudbscRsUBcMNoYg1M3UVipCaJ1LICWfEFT3zFY6sFiGFVCrBjkDztW5JNdQ2JDKPUWnwPyrIYvBdGwRfNxt3FLBBJolGegPfOdTvpq4XNhRGr8NsxaZt0zHerHaPxpuu5/yhzPqe52Z8TOY1Ws7TTLNsL3OxtDpX2LAB33OMvS34V87R2hzXRW6kOxY7rgL9OU2CuMx30fzR3ov80uMozfJYoRi1UEizgkdoH7qTEwKFbCtLtouIUcoFc69vlpZ9nnkn83ItzizoD4Z0WxJJsV/zJE8kf5l9R/3D8AGxer9MG6XXi/JeEKpghf8f5GvK6VI3WSpm9Icj7NzqOidzXWQyhHiDHG8ysLUX1qL+BtD7XAA=) in the editor, it correctly displays a preview of `Page1` in the app. But, if you view the code for `MyApp.createStartPage()` you can see that it tries to send back the page named `StartPage`, which doesn't exist! So, if you would try to run this app for real (and not only previewing it in the editor), then it would will crash as soon as it starts running, and complain that it can't find the page `StartPage`. Fix this problem (please ^^).

::::hint

This problem can be fixed in 2 different ways:

* Rename the page `Page1` to `StartPage`, or
* Change the code in `MyApp.createStartPage()` to return `Page1` instead of `StartPage`

Which you should use depends on if you prefer to have the first page in the app named `StartPage` or `Page1`, and that's totally up to you!

::::

:::




## That's it!
Woho! Now you also know the basics of how to use the `App` class! 🥳 The `App` class can be used for more things than just to indicate which page that should be used as the start page is, but you will learn more about these things later.

Now you are done learning everything the Fundamentals part of the tutorials were intended to teach you. To double check that you have learned everything you were meant to learn, try to complete the exercises in [Fundamental 8. Exercises](../exercises/).