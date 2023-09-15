<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Configuring GUI Components
This tutorial will teach you the basics of how to create and configure GUI components in your pages.

## `Page.createGui()`
As you learned in the previous tutorial, all your `Page` classes should contain a method called `createGui()`. This method will be called when the page needs to display its GUI on the screen, and in that method you should create and return the page's GUI.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNpdjkFrAjEQhf9KfCeFHLZ6y81T24Mg1IPFFQyb2SLEJCSRKkv+u8kuhtrbmzcz730DpHMQAzqrCAKdliGwzX3tHKNbJKMCy3poTRs7TzLSV5Q+buUPzRej20ZP8eoNq4viptYkJI7eakU+QBwGnBXEG4eRl9I0noPD9n2guIdonvo763TkcDnr5XMK+5yGF+DaXaHL8If6/Xr+z7vLp/PTB2ltOfu1XqvZaVHZOW4QyyZD3SFWTQXa0cXpHFjAjukBYVZtkw==]

:::

## GUI Components
To create the page's GUI, you use the different GUI Components Bagawork contains. They are stored in different pre-defined variables whose name reflect what they do, such as:

* The GUI Component stored in the `Text` variable displays text
* The GUI Component stored in the `Button` variable displays a button
* And so on...

So, to build a GUI, you must learn which the different GUI components that exist in Bagawork. They are all mentioned on the [Documentation](../../documentation/) page, but learning how to use them by reading the documentation only can be a bit tricky. Therefore we have these tutorials, which will give you a gentler introduction to how to use them. 

## Creating a new instance of a GUI component
To use a GUI Component, create a new instance of it by simply writing the name of the variable storing the GUI Component you want to use. For example, to use the `Text` GUI Component, simply write `Text`. Easy as that! 🙂

## Setting the main content
However, most GUI Components require additional information from you to be useful. For example, the `Text` GUI Component needs to know which text it should display.

One way to pass additional information to a GUI Component is by calling it as a function, and pass it the additional information as an argument. The additional information you pass to the component this way is called the GUI Component's *main content*.

For the `Text` component, its main content is the text it should display, so we can call the component as a function to tell it what text it should display. To call the component as a function, simply add parentheses after it, i.e. `Text()`. The text we pass to it should be in a JavaScript string, and that we can create by surrounding the text with the `` ` `` character, for example `` Text(`Hello, world!`) ``. For an example of this, see the previous example (the first one on this page).

::: tip Strings in JavaScript

In JavaScript, strings can not only be created with two `` ` `` characters, but also with two `"` characters (*double quotes*) or two `'` characters (*single quotes*). All three code pieces below have the same meaning.

```js
Text(`Hello, world!`)
```
```js
Text("Hello, world!")
```
```js
Text('Hello, world!')
```

To make it as easy as possible for you, we will only use the `` ` `` character to create strings, and we recommend you to do the same.

:::

## Setting additional information
In addition to the component's main content, you can also pass additional information to the component by calling *configuration methods* on it. To call a configuration method on a component, simply write a dot (i.e. `.`), followed by the name of the configuration method, followed by parentheses (i.e. `()`).

Different components have different configuration methods you can call. The `Text` component have a configuration method named `.left()` you can call to tell it that it should left align the text it displays (it is centered by default).

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left aligned by calling the configuration method `.left()` (by default, the text is centered; compare with the previous example).

::bagawork-project[link&app&code=StartPage&baga=eNpdj81qwzAQhF9FnZMNorjtTbee2h4KhebQEAcirHUIKJKQNjTB6N0jJ0Q0vc3+zXw7QYcANWHwhqAwWJ2S+Dy9hiDoyORMEkVPvet5iKSZvllH/tJbatpLt+dIfIhO1MHczb3LyBKjt4ZiglpN2BmoJwmn93PSZR0SfhwT8Q9Ud9PLovNaIhSvu8ur2ce1uAOu2RV6Lv5Qvx12/3kXZbXZvJO1XopfH6152LSPlkZu2vqCxBHquStsJ6iXrnItaB9s8Z351vkMZuVvvQ==]

:::

Configuration methods return the component instance itself, so they are chainable, meaning you can continue to call more configuration methods on the component.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is left and top aligned by calling the configuration methods `.left()` and `.top()`.

::bagawork-project[link&app&code=StartPage&baga=eNpdj81qwzAQhF9FmZMNIrjNTbee2h4KhebQEgcirHUJKJKQNjTB6N0jJ1Q0vc3+zXw7QYcANWHwhqAwWJ2SeDs/hSDoxORMEkVPvet5iKSZPlhHftff1LTXbs+R+BidqIO5m3uXkSVGbw3FBLWZsDdQDxJOH+ak6zok/Dgm4k+o7ld/FZ23EqF43V3ezF5vxR1wza7Qc/GH+vm4/8+7LqvN7oWs9VL8+GjNYtcuLY3ctEv2oWnrIxInqMeuEJ6hVl2lW9Mh2OI+U27zBQhRcY8=]

:::

The order you call the configuration methods in doesn't matter. You can also invoke the component as a function to set its main content whenever you want. All four code pieces below create the same GUI.

```js
Text(`This text is left and top aligned!`).left().top()
```
```js
Text(`This text is left and top aligned!`).top().left()
```
```js
Text.top().left()(`This text is left and top aligned!`)
```
```js
Text.top()(`This text is left and top aligned!`).left()
```

Some configuration methods you can pass additional information to through an argument. An example of that is the configuration method called `.backgroundColor()`, which you can use to tell the component that it should have a background color (instead of being transparent, which is the default). To tell it which color to use for the background, you pass it the name of a color in English as a string, such as `` `red` `` or  `` `blue` ``.

::: tip Example

Example showing JavaScript code for how to create a page displaying some text that is right and bottom aligned and having a yellow background color (that's right, just as `.left()` and `.top()` exist, we also have `.right()` and `.bottom()`).

::bagawork-project[link&app&code=StartPage&baga=eNpdj09LxDAQxb9KnVMLYal6y008qIeFBfeg2IXGZlqLaRKSKbul5Lub7GJwvb03/95vVhDWAl+hMxKBQ6eE98V2ebC2wBOhlr6Iem10Q51DQfhKwtFODFhW52pDDml2usiNVA2NDhAY9EZJdB74xwqjBH7LQIspJZ3HgYHpe4/0Brz+1e9RhwMDG29dbV6OvVzMFXDOztDJ/KF+msf/vPs4WrbPqJRhxdE4JW/aauPG4YvKavNpiMyUhOi+B2dmLR+NMq5sl7RxbKv8JoMT8Ls68i/A7+vMvsfJqpidfjiEH3cofT4=]

:::

## Indenting the code
When you call many configuration methods on a component, the line of code tends to become quite long, which can make it hard to read. In JavaScript, you can often insert line breaks to make the code span multiple lines instead, and the indentation (white-space characters, such as spaces and tabs) to the left of the code doesn't matter. Using indentation can make your code easier to read. Feel free to write the code the way you like the most!

::: tip Example
Example showing different ways of writing code configuring a component the same way.

```js
class StartPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`).right().bottom().background(`yellow`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`)
			.right().bottom().background(`yellow`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`)
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
			.background(`yellow`)(
				`This text is shown to the user!`
			)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		// Note: this will unfortunately not work; the start of the value
		// you return must be written to the right of return (on the same line)!
		return
			Text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		// Note: this will unfortunately not work; can't invoke the component
		// as a function on its own line like this
		return Text
			.right()
			.background(`yellow`)
			.bottom()
			(`This text is shown to the user!`)
	}
}
```

```js
class StartPage extends Page{
	createGui(){
		// This will work, where the component is invoked as a function at the
		// beginning of the previous line.
		return Text
			.right()
			.background(`yellow`)
			.bottom()(
				`This text is shown to the user!`
			)
	}
}
```

:::




## That's it!
Now you know how to create and configure GUI components! 🥳 That wasn't that hard, was it? But much remains to learn. You have only seen examples of how to use the `Text` component and a few configuration methods you can call to configure it, but Bagawork contains many more components you can use, and many other configuration methods you can call. The hard part will be to learn which these components and configuration methods are, and how you can combine them do create more complex GUIs (most GUIs do not only consist of a single GUI component). In next tutorial you will be introduced some more of them.