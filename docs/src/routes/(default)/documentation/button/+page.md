<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Button`
On this page you find the documentation for the GUI Component `Button`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Button` component. The `Button` component also supports the configuration methods described on the page :docs[Component].

:::





## Introduction
The `Button` component is a view that displays some text to the user shown as a button, and which the user can click on. Clicking on the `Button` takes the user to the next page in the app.

::: tip Example

Example showing what the `Button` component looks like when shown on the screen.

```js baga-show
class StartPage extends Page{
	createGui(){
		return Button.text(`Click me!`)
	}
}
```

Note: In this example, the `Button` covers the entire screen (which usually isn't the case), and clicking on it just reloads the same page, so nothing should happen when you click on the `Button` in this example.

:::



## `text()` - Setting the text
Use the configuration method `text()` to tell the `Button` component which text it should display. Pass the text as a string. The text will always be centered in the `Button`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Button.text(`Click me!`)
	}
}
```

:::



## `text()` - Setting styled text
Use the configuration method `textWithBBCode()` to tell the `Text` component which text it should show on the screen and that also can be styled with :docs[bbcode] tags. Pass the text as a string. The text will always be centered in the `Button`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Button.textWithBBCode(`Click me [b][u]now[/u][/b]!`)
	}
}
```

:::





## `page()` - Going to another page
Use the configuration method `page()` to tell the `Button` component which page the user should come to when clicking on the button. Pass the page as an argument.

If this method is not used, then the current page will be reloaded when the user clicks on the button.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Button.text(`Go there`).page(DestinationPage)
	}
}

class DestinationPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Welcome to the DestinationPage!`),
			Button.text(`Back to StartPage`).page(StartPage),
		)
	}
}
```

:::




## `onClick()` - Handling clicks
Use the configuration method `onClick()` to tell the `Button` component which method to call when the user clicks on it. Pass the configuration method a reference to the method (e.g. `a.theMethodName` or `p.theMethodName`, depending on what you have named your method and if you wrote it in your `App` class or `Page` class).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	numberOfButtonClicks = 0
	
	createGui(){
		return Rows.children(
			Text.text(`You have clicked the button ${p.numberOfButtonClicks} times.`),
			Button.text(`Click me!`).onClick(p.incrementNumberOfButtonClicks),
		)
	}
	
	incrementNumberOfButtonClicks(){
		p.numberOfButtonClicks += 1
	}
	
}
```

:::

You can also pass `onClick()` additional arguments, which then will be passed to your method when the button is clicked.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 0
	
	createGui(){
		return Rows.children(
			Text.text(`Counter is ${p.counter}.`),
			Button.text(`-1`).onClick(p.changeCounter, -1),
			Button.text(`+1`).onClick(p.changeCounter, 1),
			Button.text(`+5`).onClick(p.changeCounter, 5),
		)
	}
	
	changeCounter(amount){
		p.counter += amount
	}
	
}
```

:::




## `stay()` - Not changing page
Use the configuration method `stay()` to tell the `Button` component to not go to the next page when the user clicks it. This is primarily useful when you use the :docs[Updater] component together with the configuration method `.onClick()` on the `Button`.

::: warning Warning!

Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can achieve the same result by loading the page anew, that is usually better than triggering your own manual updates like this.

:::

::: tip Example

In this example, when clicking on the second `Button`, the counter will be incremented from `1` to `2`, but since the default behavior when clicking on a `Button` is to go to the next page, the page will directly after that be reloaded, and `p.counter` will be set to `1` in `onBefore()`.

```js baga-show-editor-code
class StartPage extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter = 1
	}
	
	createGui(){
		
		return Rows.children(
			Updater.childCreator(p.createTextShowingCounter).name(`refresh`),
			Button.onClick(p.incrementCounter).text(`Increment and stay`).stay(),
			Button.onClick(p.incrementCounter).text(`Increment`),
		)
		
	}
	
	createTextShowingCounter(){
		return Text.text(`The counter is ${p.counter}.`)
	}
	
	incrementCounter(){
		p.counter += 1
		runUpdater(`refresh`)
	}
	
}
```

:::