<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperCircle`
On this page you find the documentation for the paper figure `PaperCircle`.





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





## `backgroundColor()` - Setting the background color
Use the configuration method `backgroundColor()` to tell the `PaperCircle` figure which color it should have. Pass it the name of the color in English as a string, such as `` `red` ``, or `` `blue` ``.

If you don't call `backgroundColor()`, `` `black` `` will be used as the default color.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.aspectRatio(10, 10).child(
			Paper.coordinateSystem(10, 10).showCoordinates().backgroundColor(`orange`).children(
				PaperCircle.backgroundColor(`red`),
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