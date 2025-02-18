<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Updater`
On this page you find the documentation for the GUI Component `Updater`.

::: warning Note!

`Updater` is not an ordinary GUI component. It can be created the same way as any other GUI component, but it is not part of the GUI itself. Instead, it is used to dynamically create a child component, and it is the child component that is part of the GUI. So you can't call configuration methods like `.grow()` or `.backgroundColor()` on the `Updater` component. Do that on the child component it creates instead.

:::



## Introduction
By default, the GUI can only be changed by taking the user to another page (including to the same page the user currently is on), such as when the user clicks on a :docs[Button]. But, with the `Updater` component, you can update a part of the GUI on the current page whenever you want, without taking the user to another page. 

::: tip Example

Example showing what the `Updater` component can do (in this case updating a :docs[Text] component to show the current time every second).

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.interval(1000).childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}
```

:::



## `childCreator()` - Specifying the GUI
Use the configuration method `childCreator()` to tell the `Updater` component how it should create the part of the GUI it is responsible for. Pass it a function that creates and returns a GUI component that represent that part of the GUI.

The function you pass to `childCreator()` will be called immediately when the user comes to the page, but it can also be called at later points in time to create a new version of the GUI for that part.

::: tip Example

In this example, the method passed to `childCreator()` is only called when the user directly comes to to the page, so the usefulness of the `Updater` component is not shown, but it demonstrates how one can use `childCreator()`.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}
```

:::



## `interval()` - Setting the interval
Use the configuration method `interval()` to tell the `Updater` component how often it should update the part of the GUI it is responsible for. Pass it the time as the number of milliseconds between the updates.

::: tip Example

In this example, the method passed to `childCreator()` will be called when the user comes to the page, and then also every second after that.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.interval(1000).childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}
```

:::



## `name()` - Manually triggering updates
Use the configuration method `name()` to give your `Updater` component instance a name. You can then call the function `runUpdater()` and pass it the same name whenever you want the `Updater` to update its GUI. Pass the name as a string.

::: warning Warning!

Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can implement the same functionality by loading the page anew, that is usually better to do than triggering your own manual updates.

:::

::: warning Note!

A click on a :docs[Button] does by default take the user to the next page. If you want a part of the GUI to be updated on the current page instead, you must call the configuration method `.stay()` on the `Button` to not take the user to the next page.

:::

::: tip Example

In this example, the displayed time is only updated when you click on the `Button` without reloading the entire page.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.name(`clockUpdater`).childCreator(p.createTextShowingClock),
			Space,
			Button.text(`Refresh`).stay().onClick(p.handleButtonClick)
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
	handleButtonClick(){
		runUpdater(`clockUpdater`)
	}
	
}
```

:::