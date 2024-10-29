<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperCircle`
On this page you find the documentation for the paper figure `PaperCircle`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `PaperCircle` figure. `PaperCircle` also supports the configuration methods described on the page :docs[PaperFigure].

:::





## Introduction
`PaperCircle` is a figure that you can use to draw a circle in a :docs[Paper] component.

::: tip Example

```js baga-show
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).backgroundColor(`orange`).children(
				PaperCircle,
			)
		)
	}
}
```

:::




## `radius()` - Setting the radius
Use the configuration method `radius()` to tell the `PaperCircle` figure which radius it should have. Pass it the radius as a number. 

If you don't call `radius()`, the radius will be 25% of the coordinate system's width/height (whichever that is smallest).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperCircle.radius(1),
			)
		)
	}
}
```

:::

::: warning Note!

If your coordinate system is not uniformed (i.e. one unit in the X-direction is not equally big as one unit in the Y-direction), then the circle will be drawn with a radius slightly different from the one you have provided it with, to make the circle look like a circle (and not an ellipse) and still have a radius as close to the provided radius in both the X-direction and Y-direction.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
			PaperCircle.radius(1),
		)
	}
}
```

:::





## `center()` - Setting the center position
Use the configuration method `center()` to tell the `PaperCircle` figure where the center of the circle should be. Pass it two numbers:

* The X coordinate of the center
* The Y coordinate of the center

If you don't call `center()`, the circle will be positioned in the center of the coordinate system.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperCircle.center(3, 3),
			)
		)
	}
}
```

:::