<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Paper`
On this page you find the documentation for the GUI Component `Paper`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Paper` component. The `Paper` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `Paper` component is a layout that you yourself specify what it should look like by drawing figures on it, such as lines, circles and rectangles. See the sub-menu `Paper Figures` to learn more about which figures that can be drawn.

::: warning Note!

The `Paper` component is not an ordinary GUI layout:

* It **can only** contain *paper figures*, such as :docs[PaperLine] and :docs[PaperCircle]
* It **can not** contain ordinary GUI components, such as :docs[Text] and :docs[Button]

All *paper figures* starts with the name `Paper` to differentiate them from the ordinary GUI components. Also note that *paper figures* can only be used in the `Paper` component, and never in any ordinary GUI layout.

:::

::: tip Example

Example showing what the `Paper` component can look like when shown on the screen.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`orange`).children(
			PaperRectangle.backgroundColor(`red`),
			PaperCircle.backgroundColor(`lime`),
			PaperLine.backgroundColor(`aqua`),
		)
	}
	
}
```

:::





## Coordinate system
The coordinate system that is used to position the figures to be drawn on the `Paper` component consists of two axes (see the next sub-chapter for a visualization of this):

* The X-axe:
	* Starts with `0` on the left side of the `Paper` component
	* Increases toward the right
	* Ends (by default) with `10` on the right side of the `Paper` component
* The Y-axe:
	* Starts with `0` on the bottom side of the `Paper` component
	* Increases toward the top
	* Ends (by default) with `10` on the top side of the `Paper` component



## `showCoordinates()` - Showing the coordinate system
Use the configuation method `showCoordinates()` to tell the `Paper` component that it should show its coordinate system. By calling this method, the `Paper` component will:

* Show some lines to visualize the coordinate system
* Show the coordinates of the mouse in its upper right corner when you move the mouse over the `Paper` component

::: tip Tip!

`showCoordinates()` is very useful to use while you are developing your app, and then you remove the call to it just before you publish your app, so your real users will never see the coordinate system.

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Paper.backgroundColor(`orange`).showCoordinates()
	}
}
```

:::




## `coordinateSystem()` - Setting the coordinate system
Use the configuation method `coordinateSystem()` to specify the coordinate system that should be used to position the figures that should be drawn on the `Paper` component. By default, it's `10` units wide and `10` units high, but using this method you can set it to something else.

Pass it two numbers:

* The width of the coordinate system
* The height of the coordinate system

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Paper.backgroundColor(`orange`).coordinateSystem(3, 5).showCoordinates()
	}
}
```

:::

::: tip Tip

Place your `Paper` component in a :docs[Box] component, and give your `Paper` component the same coordinate system as the `Box` has as aspect ratio, and the X and Y units in the coordinate system will always have the same size!

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(2, 6).child(
			Paper.backgroundColor(`orange`).coordinateSystem(2, 6).showCoordinates(),
		)
	}
}
```

That the X and Y units are of the same size is often very important for the figures drawn on it to look good.

:::





## `children()` - Setting the children
Call the configuration method `children()` to specify which figures the `Paper` component should draw. Pass the figures as arguments. The figures will be drawn in the order they are passed to `children()`.

For more information about the figures that can be drawn, see the sub-meny `Paper Figures`.

::: warning Note!

The `Paper` component is not an ordinary GUI layout:

* It **can only** contain *paper figures*, such as :docs[PaperLine] and :docs[PaperCircle]
* It **can not** contain ordinary GUI components, such as :docs[Text] and :docs[Button]

All *paper figures* starts with the name `Paper` to differentiate them from the ordinary GUI components. Also note that *paper figures* can only be used in the `Paper` component, and never in any ordinary GUI layout.

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`orange`).children(
			PaperRectangle.backgroundColor(`red`),
			PaperCircle.backgroundColor(`lime`),
			PaperLine.backgroundColor(`aqua`),
		)
	}
	
}
```

:::




## `onClick()` - Handling clicks
Call the configuration method `onClick()` to specify a method that should be called when the user clicks somewhere on the `Paper` component. Your method will be passed two numbers:

* The X coordinate of the click
* The Y coordinate of the click

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	lastClickX = -1
	lastClickY = -1
	
	createGui(){
		return Rows.children(
			Updater.name(`updateText`).childCreator(p.createText),
			Space,
			Box.aspectRatio(10, 10).child(
				Paper
					.backgroundColor(`orange`)
					.coordinateSystem(10, 10)
					.showCoordinates()
					.onClick(p.handleClick),
			),
			Space,
		)
	}
	
	createText(){
		return Text.text(`lastClickX: ${p.lastClickX}, lastClickY: ${p.lastClickY}`)
	}
	
	handleClick(x, y){
		
		p.lastClickX = x
		p.lastClickY = y
		
		runUpdater(`updateText`)
		
	}
	
}
```

:::