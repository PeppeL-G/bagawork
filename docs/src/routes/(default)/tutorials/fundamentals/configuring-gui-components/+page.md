<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Configuring GUI Components
This tutorial will teach you the basics of how to create and configure GUI components in your pages.

## `Page.createGui()`
As you learned in the previous tutorial, all your `Page` classes should contain a method called `createGui()`. This method will be called (when a method is *called*, the computer will start to execute the code in it) when the page needs to display its GUI on the screen, and in this method you should create and return the page's GUI.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`Hello, world!`)
	}
}
```

:::

## GUI components
To create the page's GUI, you use the different GUI components BagaWork contains. They are stored in different pre-defined variables whose names reflect what they do, such as:

* The GUI component stored in the `Text` variable displays text
* The GUI component stored in the `Button` variable displays a button
* And so on...

So, to build a GUI, you must learn the different GUI components BagaWork contains. They are all mentioned on the [Documentation](/documentation/) page, but learning how to use them by only reading the documentation can be a bit tricky for beginners, so therefore we have these tutorials, which will give you a gentler introduction to how to use them. 

## Creating a new instance of a GUI component
To use a GUI component, create a new instance of it by simply writing the name of the variable that stores the GUI component you want to use. For example, to use the `Text` GUI component, simply write `Text`. Easy as that! 🙂

::: tip Example

Note: In this example we haven't told the `Text` component which text it should display, and therefor the screen is still blank.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text
	}
}
```

:::

## Configuring a GUI component instance
However, most GUI components require additional information from you to be useful. For example, the `Text` GUI component needs to know which text it should display.

To pass additional information to a GUI component, you call *configuration methods* on it, and (if needed) you pass it the additional information as one  or more arguments to the configuration method.

As an example, to tell a `Text` component which text it should display, you call its configuration method `text()`, and you pass it the text it should display as a string (created by two `` ` `` characters), for example `` Text.text(`This string contains the text that should be displayed.`) ``. For an example of this, see the first example on this page.

::: tip Strings in JavaScript

In JavaScript, strings can not only be created with two `` ` `` characters, but also with two `"` characters (*double quotes*) or two `'` characters (*single quotes*). All three code pieces below have the same meaning to the computer.

```js
Text.text(`Hello, world!`)
```
```js
Text.text("Hello, world!")
```
```js
Text.text('Hello, world!')
```

To make it as easy as possible for you, we will only use the `` ` `` character to create strings, and we recommend you to do the same.

:::

Different components have different configuration methods you can use. For example, the `Text` component has a configuration method named `left()` you can use to tell it that it should left align the text it displays (it is centered by default). This configuration method receives no arguments (but it's still required to write the parentheses).

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left aligned by calling the configuration method `left()` (by default, the text is centered; compare with the previous example).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`Hello, world!`).left()
	}
}
```

:::

Configuration methods return the component instance itself, so they are chainable, which means that you can continue to call as many configuration methods on the component you want.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left and top aligned by calling the configuration methods `left()` and `top()`.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`Hello, world!`).left().top()
	}
}
```

:::

The order you call the configuration methods in doesn't matter. All four code pieces below configures the `Text` component the same way.

```js
Text.text(`This text is left and top aligned!`).left().top()
```
```js
Text.text(`This text is left and top aligned!`).top().left()
```
```js
Text.top().left().text(`This text is left and top aligned!`)
```
```js
Text.top().text(`This text is left and top aligned!`).left()
```

`left()` and `top()` are examples of configuration methods only the `Text` component have. But some configuration methods can be used on any component. An example of that is the configuration method called `.backgroundColor()`, which you can use to tell the component that it should have a background color. To tell it which color to use for the background, you pass it the name of a color in English as a string, such as `` `red` `` or  `` `blue` ``.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is right and bottom aligned and having a yellow background color (that's right, just as `.left()` and `.top()` exist, we also have `.right()` and `.bottom()` we can use on the `Text` component).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`Hello, world!`).right().bottom().backgroundColor(`yellow`)
	}
}
```

:::

## Indenting the code
When you call many configuration methods on a component, the line of code tends to become quite long, which can make it hard to read. In JavaScript, you can often insert line breaks to make the code span multiple lines instead, and the indentation (white-space characters (spaces and tabs) to the left of the code) doesn't matter to the computer, but can make the more readable for us humans. Feel free to write your code the way you think make it the easiest to read.

::: tip Example

Example showing different ways of writing code configuring a component the same way.

```js
class StartPage extends Page{
	createGui(){
		return Text.text(`This text is shown to the user!`).right().bottom().background(`yellow`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text.text(`This text is shown to the user!`)
			.right().bottom().background(`yellow`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text.text(`This text is shown to the user!`)
			.right()
			.bottom()
			.background(`yellow`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text
			.right()
			.bottom()
			.background(`yellow`)
			.text(`This text is shown to the user!`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text
			.right()
			.bottom()
			.background(`yellow`)
			.text(
				`This text is shown to the user!`
			)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		// Note: this will unfortunately not
		// work; the start of the value you
		// return must be written to the right
		// of return (on the same line)!
		return
			Text.text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
	}
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1UttKw0AQ/ZV1XkwglDZSkLxIFNE+KGIFLabQNZlcaLobdifYUvLvbhpbmtAoCD5k2dkzM+dCtsCLArwthDJC8CDMudbsYeMXBcM1oYg0M/dtIAKqv1AhJ5wSV/TEE7TsBiGFVCrBDkD9WjVDFVQOxDKPUGnw3reQReCNHBB8VTPuRsABGcca6Q284f4+M/dq7kBh9rUmm2WTpmgJP/AfxNdFR/1dmXV1v5j2AZnDWtxnjFJUeLawBx88XCZKliK6kblU1kJhZJ5VlqRk2S2PDqzBc4dG/Aa8i+FB+AuuityQtgy0NPt6OYn9qMz/IvxZfupBmGZ5pFBYDRTQtOAhOvvqyJyvkG1kyXYBGp9csNHl1cJ2Tk8a1+VKnCDoNgZ0XRJJ8U3zKI9W/tI7Q/1D8x6xOz9UE6XbifJWECo/wf8P8jXldK7rLBUz+/sjbHkdDY/62si4D3F7Z9xxD2snrHn1BUZAZ5o=) currently displays a page looking like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Text.text(`Hi there!`).backgroundColor(`red`).right()
	}
	
}
```

Your task is to change the code, so the page instead looks like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Text.text(`Hi there!`).backgroundColor(`yellow`).top().left()
	}
	
}
```

::::hint

Hmm... What were the names of the configuration methods to make the text appear to the `.left()` and `.top()`? Ah, that's right!

::::

:::

::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==) contains no pages. Your task is to add a new page to the project named `StartPage`, and make it look like the the page shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor(`white`).text("Hello from the bottom left corner :)").bottom().left()
	}
	
}
```


::::hint

When you add a new page, it will already contain some code for the GUI. You can simply delete most of that code, and then write your own code to make the page look like as shown above.

::::

:::

## That's it!
Now you know how to create and configure GUI components! 🥳 That wasn't that hard, was it? But much remains to be learned. You have only seen a few examples of how to use the `Text` component and some configuration methods you can call to configure it, but BagaWork contains many more components you can use, and many other configuration methods you can call too. The hard part will be to learn which these components and configuration methods are, and how you can combine them to create more complex and useful GUIs (a GUI consisting of a single GUI component is usually not that useful). 

Continue with the tutorial [Fundamentals 4. Positioning GUI Components](../positioning-gui-components/) when you are ready.