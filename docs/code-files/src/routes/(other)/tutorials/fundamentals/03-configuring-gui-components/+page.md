<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Configuring GUI Components
This tutorial will teach you the basics of how to create and configure GUI components in your pages.

## `Page.createGui()`
As you learned in the previous tutorial, all your `Page` classes should contain a method called `createGui()`. This method will be called (when a method is *called*, the code in it will be executed) when the page needs to display its GUI on the screen, and in this method you should create and return the page's GUI.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNpdj09LAzEQxb9KfKcWgmz1lpsn9SAU2oPiFho2s6WQJiGZpVuWfHezLQbrZXjz781vJugQoCZ03hAUOqtTEh+XlxAEjUzOJFH01LqWu0iaacM68lofaLG8VluOxEN0ojbmam5dRpbovTUUE9T3hKOBWkk4fZovXcch4fs+EX9CNb/6q+i8kwjF627zZvZ+S+6A6+0KPSd/qF+H43/ebRl95BIW+zey1ktx9tGah/2yPiAxQj01hewC9dxUqi2dgi2uM90u/wCgr2+G]

:::

## GUI Components
To create the page's GUI, you use the different GUI Components Bagawork contains. They are stored in different pre-defined constants whose name reflect what they do, such as:

* The GUI Component stored in the `Text` variable displays text
* The GUI Component stored in the `Button` variable displays a button
* And so on...

So, to build a GUI, you must learn which the different GUI components that exist in Bagawork are. They are all mentioned on the [Documentation](/documentation/) page, but learning how to use them by reading the documentation can be a bit tricky for beginners, so therefore we have these tutorials, which will give you a gentler introduction to how to use them. 

## Creating a new instance of a GUI component
To use a GUI Component, create a new instance of it by simply writing the name of the constant that stores the GUI Component you want to use. For example, to use the `Text` GUI Component, simply write `Text`. Easy as that! 🙂

## Configuring a GUI component instance
However, most GUI Components require additional information from you to be useful. For example, the `Text` GUI Component needs to know which text it should display.

To pass additional information to a GUI Component, you call *configuration methods* on it, and (if needed) you pass it the additional information as one  or more arguments to the configuration method.

As an example, to tell a `Text` component which text it should display, you call its configuration method `text()`, and you pass it the text it should display as a string (created by two `` ` `` characters), for example `` Text.text(`This string contains the text that should be displayed.`) ``. For an example of this, see the previous example (the first one on this page).

::: tip Strings in JavaScript

In JavaScript, strings can not only be created with two `` ` `` characters, but also with two `"` characters (*double quotes*) or two `'` characters (*single quotes*). All three code pieces below have the same meaning for the computer.

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

Different components have different configuration methods you can use. For example, the `Text` component has a configuration method named `left()` you can call to tell it that it should left align the text it displays (it is centered by default). This configuration method receives no arguments (but it's still required to write the parentheses).

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left aligned by calling the configuration method `left()` (by default, the text is centered; compare with the previous example).

::bagawork-project[link&app&code=StartPage&baga=eNpdj09LAzEQxb9K+k67EMpqb7l5Ug+CYA9Kt9CwmZVCmoRkii1LvnuzLQbrZXjz781vJugQoCYM3hAUBqtTEm/npxAEnZicSaLoqXc9D5E00wfryO/6m5r2Wu05Eh+jE7UxV3PvMrLE6K2hmKA2E/YG6kHC6cN86ToOCT+OifgTqvvVX0XnrUQoXnebN7PXW3IHXG9X6Dn5Q/183P/nXZfRJZfQ7F7IWi/Fj4/WLHbt0tLITVv/kDhBPXYF8Ay16ircmg7BFvMZcpsvs+NxsA==]

:::

Configuration methods return the component instance itself, so they are chainable, which means that you can continue to call as many configuration methods on the component you want.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left and top aligned by calling the configuration methods `left()` and `top()`.

::bagawork-project[link&app&code=StartPage&baga=eNpdj09LAzEQxb9KfKddCMtWb7l5Ug+C0B4Ut9CwmZVCmoRkii1LvrvZFoP1Mrz5+34zQ4cANWP0hqAwWp2SeD0/hiDoxORMEkXPgxt4jKSZ1qwjv+kvatpLdeBIfIxO1MZSzYPLyBKTt4ZigvqcsTdQKwmnD4vTZRwSfpoS8TtU/6s/is5biVBu3Wxej71ckxvg6l2hl+QP9dNx/593U0Y7LqHZPZO1XopvH62527WdpYmbtmMfmrZ+I3GCuu8L5hnqoa+IGzoEWywW1G3+AWEBc4I=]

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

`left()` and `top()` are examples of configuration methods only the `Text` component have. But some configuration methods can be used on any component. An example of that is the configuration method called `.backgroundColor()`, which you can use to tell the component that it should have a background color (instead of having transparent background, which is the default). To tell it which color to use for the background, you pass it the name of a color in English as a string, such as `` `red` `` or  `` `blue` ``.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is right and bottom aligned and having a yellow background color (that's right, just as `.left()` and `.top()` exist, we also have `.right()` and `.bottom()` we can use on the `Text` component).

::bagawork-project[link&app&code=StartPage&baga=eNpdj01LxDAQhv9KnVMLoVS95SYe1IMguAfFLjQ201pMk5BM2S0l/91kF4PrZXjn+3k3ENYC36A3EoFDr4T3xfN6Z22BR0ItfRH11uqWeoeC8JWEoxcxYlmdqi05pMXpIjdSNbQ6QGAwGCXReeAfG0wS+DUDLeb06TQODMwweKQ34M2vfo867BnYeOti83zs6ZxcAOffGTolf6gfluk/7y6O1hRD2T2iUoYVB+OUvOqq2k3jF5VV/WmIzJyE6L9HZxYt740yruzWtHHoquyVwRH4TRNNrMBvm2xgh7NVESAZ2YcfCmF/MQ==]

:::

## Indenting the code
When you call many configuration methods on a component, the line of code tends to become quite long, which can make it hard to read. In JavaScript, you can often insert line breaks to make the code span multiple lines instead, and the indentation (white-space characters (spaces and tabs) to the left of the code) doesn't matter. Using indentation can make your code easier to read. Feel free to write the code the way you like the most!

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
		// Note: this will unfortunately not work; the start of the
		// value you return must be written to the right of return
		// (on the same line)!
		return
			Text.text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
	}
}
```

:::




## That's it!
Now you know how to create and configure GUI components! 🥳 That wasn't that hard, was it? But much remains to learn. You have only seen examples of how to use the `Text` component and a few configuration methods you can call to configure it, but Bagawork contains many more components you can use, and many other configuration methods you can call. The hard part will be to learn which these components and configuration methods are, and how you can combine them do create more complex GUIs (most GUIs do not only consist of a single GUI component). In next tutorial you will be introduced some more of them.