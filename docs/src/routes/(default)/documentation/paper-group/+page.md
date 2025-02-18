<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperGroup`
On this page you find the documentation for the paper figure `PaperGroup`.




## Introduction
`PaperGroup` is a paper figure that can contain other paper figures. These other paper figures will be affected by the position and the size of the `PaperGroup` figure, making it perfect for grouping relevant paper figures together, and to scale them the same way.

::: tip Example

This example uses one `PaperGroup` for each cross shown on the screen, and these two groups are positioned at different places, and one of them is also scaled to be twice as high.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.coordinateSystem(3, 3).backgroundColor(`orange`).showCoordinates().children(
				p.createCross(`red`).width(1).height(1).center(0.5, 2.5),
				p.createCross(`blue`).width(1).height(2).center(2.5, 1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}
```

:::




## `coordinateSystem()` - Setting the coordinate system
Use the configuration method `coordinateSystem()` to tell the `PaperGroup` figure how wide and tall its coordinate system should be (which its children then uses to position themselves in the `PaperGroup`). Pass it two numbers:

* How wide the coordinate system should be
* How tall the coordinate system should be

By default, the width and height will both be `10`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).children(
				p.createPaperGroup(),
			),
		)
	}
	
	createPaperGroup(){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates()
	}
	
}
```

:::




## `showCoordinates()` - Showing the coordinate system
Use the configuration method `showCoordinates()` to tell the `PaperGroup` figure to visualize its coordinate system. This can be very handy during development, but not something one typically use the final version of the application.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).children(
				p.createPaperGroup(),
			),
		)
	}
	
	createPaperGroup(){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates()
	}
	
}
```

:::




## `children()` - Setting the children
Use the configuration method `children()` to tell the `PaperGroup` figure which children figures it should contain. Pass the children as separate arguments. When the `PaperGroup` is shown on the screen, it will show all of its children.

By default, the `PaperGroup` will occupy the same size as the :docs[Paper] component/`PaperGroup` it is used in.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).children(
				p.createCross(`red`),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}
```

:::




## `width()` - Setting the width
Use the configuration method `width()` to tell the `PaperGroup` figure how wide it should be in the coordinate system of its parent. Pass it the width as a number.

By default, the `PaperGroup` will be as wide as its parent, and centered horizontally in it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).children(
				p.createCross(`red`).width(1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}
```

:::




## `height()` - Setting the height
Use the configuration method `height()` to tell the `PaperGroup` figure how high it should be in the coordinate system of its parent. Pass it the height as a number.

By default, the `PaperGroup` will be as high as its parent, and centered vertically in it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).children(
				p.createCross(`red`).height(1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}
```

:::




## `center()` - Setting the center
Use the configuration method `center()` to tell the `PaperGroup` figure where it should be centered in its parent. Pass it two numbers:

* The X-coordinate of its center
* The Y-coordinate of its center

By default, the `PaperGroup` will be centered in its parent.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(`orange`).coordinateSystem(3, 3).showCoordinates().children(
				p.createCross(`red`).width(1).height(1).center(2.5, 1.5),
				p.createCross(`blue`).width(1).height(1).center(0.5, 2.5),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}
```

:::




## `onClick()` - Handling clicks
Call the configuration method `onClick()` to specify a method that should be called when the user clicks somewhere on the `PaperGroup` figure. Your method will be passed two numbers:

* The X coordinate of the click
* The Y coordinate of the click

The coordinates will be in the coordinate system within the `PaperGroup` figure.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	lastClickX = -1
	lastClickY = -1
	
	createGui(){
		return Rows.children(
			Updater.name(`textUpdater`).childCreator(p.createText),
			Space,
			Box.aspectRatio(10, 10).child(
				Paper
					.backgroundColor(`orange`)
					.coordinateSystem(10, 10)
					.showCoordinates()
					.children(
						PaperGroup
							.backgroundColor(`red`)
							.coordinateSystem(3, 3)
							.showCoordinates()
							.width(2)
							.height(2)
							.onClick(p.handleClick),
					),
			),
			Space,
		)
	}
	
	createText(){
		return Rows.children(
			Text.text(`lastClickX:`),
			Text.text(`${p.lastClickX}`),
			Text.text(`lastClickY:`),
			Text.text(`${p.lastClickY}`),
		)
	}
	
	handleClick(x, y){
		
		p.lastClickX = x
		p.lastClickY = y
		
		runUpdater(`textUpdater`)
		
	}
	
}
```

:::