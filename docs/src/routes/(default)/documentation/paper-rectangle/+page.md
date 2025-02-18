<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperRectangle`
On this page you find the documentation for the paper figure `PaperRectangle`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `PaperRectangle` figure. The `PaperRectangle` figure also supports the configuration methods described on the page :docs[PaperFigure].

:::




## Introduction
`PaperRectangle` is a figure that you can use to draw a rectangle in a :docs[Paper] component.

::: tip Example

```js baga-show
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).backgroundColor(`orange`).children(
				PaperRectangle,
			)
		)
	}
}
```

:::




## `width()` - Setting the width
Use the configuration method `width()` to tell the `PaperRectangle` figure how wide it should be. Pass it the width as a number

If you don't call `width()`, the width will be half of the coordinate system's width.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperRectangle.width(2),
			)
		)
	}
}
```

:::




## `height()` - Setting the height
Use the configuration method `height()` to tell the `PaperRectangle` figure how tall it should be. Pass it the height as a number

If you don't call `height()`, the height will be half of the coordinate system's height.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperRectangle.height(2),
			)
		)
	}
}
```

:::





## `center()` - Setting the center position
Use the configuration method `center()` to tell the `PaperRectangle` figure where the center of the rectangle should be. Pass it two numbers:

* The X coordinate of the center
* The Y coordinate of the center

If you don't call `center()`, the rectangle will be positioned in the center of the coordinate system.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperRectangle.center(3, 3),
			)
		)
	}
}
```

:::