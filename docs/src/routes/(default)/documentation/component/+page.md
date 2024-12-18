<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# Component
On this page you find the documentation for the configuration methods than can be used on all GUI components (*Views* and *Layouts*).




## `backgroundColor()` - Setting the background color
Use the configuration method `backgroundColor()` to tell the component which background color it should. Pass it the background color as a string containing the name of the color in English, such as `` `red` `` or `` `blue` ``.

If you don't call `backgroundColor()`, the component will not have any background color.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.text(`I have a red background!`)
	}
	
}
```

:::





## `border()` - Adding a border around the component
Use the configuration method `border(thickness, color, sides)` to tell the component that is should have a border around itself.

The border will only be applied on the sides of the component indicated by the `sides` parameter, or all sides if no value for that parameter is provided.

This configuration method can be called multiple times to give
different sides of the component different type of borders.

The parameters:

* `thickness` - A number indicating how thick the border should be (for more information, see :docs[Units])
* `color` - The English name of a color the border should have, e.g. `` `blue` ``
* `sides` - A string indicating which sides of the component the border should be added to. Write:
	* `t` in the string to add it to the **T**op side
	* `b` in the string to add it to the **B**ottom side
	* `l` in the string to add it to the **L**eft side
	* `r` in the string to add it to the **R**ight side

If `sides` is not provided, the border will be added to all sides
(the default value is `` `tblr` ``).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.border(5, `blue`)
			.text(`This component has a 5 thick blue border on all sides.`)
	}
	
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.border(5, `blue`, `tb`)
			.border(9, `lime`, `lr`)
			.text(`This component has different borders on top/bottom side and left/right side.`)
	}
	
}
```

:::






## `cornerRadius()` - Rounding the corners
Use the configuration method `cornerRadius()` to tell the component how round the corners of the component should be. Pass the amount as an integer representing the number of milimeters. Default is `0`, meaning the corners will be sharp (90 degrees; not round at all).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.cornerRadius(10)
			.text(`The corners on this Text component are rounded.`)
	}
	
}
```

:::





## `font()` - Formatting text
Use the configuration method `font()` to tell the component how text shown on the screen, such as text set through:

* `Text.text()`
* `Text.textWithBBCode()`
* `Button.text()`
* Etc.

Should be formatted. Pass it an instance of the :docs[Font] class, which you can configure by calling different configuration methods on it (for more information on those methods, see the documentation for the :docs[Font] class).

The font assigned to a GUI component this way will be passed down to all its child components, and their child components, and so on. A child component can override the font it gets from its parent component by calling `.font()` on itself and pass it another font.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.color(`red`)).children(
			Text.text(`I'm red!`),
			Text.font(Font.color(`blue`)).text(`I'm blue!`),
			Text.text(`I'm red!`),
		)
	}
	
}
```

:::





## `keepIf()` - Conditionally keep/remove the GUI component
By default, all the GUI components you use will be shown. Use the configuration method `keepIf(condition)` to only keep the GUI component if the `condition` you pass to it is `true`. If the `condition` instead is `false`, the GUI component will be removed, and not used at all.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = m.randomFloat(0, 1)
	}
	
	createGui(){
		return Rows.children(
			Text.text(`The random number is: ${p.randomNumberBetween0And1}.`),
			Text.keepIf(p.randomNumberBetween0And1 < 0.5).text(`That is a small number!`),
			Text.keepIf(0.5 <= p.randomNumberBetween0And1).text(`That is a big number!`),
			Button.text(`Generate new number`),
		)
		
	}
	
}
```

:::





## `padding()` - Adding space between the border and the content
Use the configuration method `padding(amount, sides)` to tell the component how much space there should be between the border of the component and its content. Default is `0`, meaning no space at all.

The padding will only be applied to the sides of the component indicated by the `sides` parameter, or all sides if no value for that parameter is provided.

This configuration method can be called multiple times to give different sides of the component different amounts of padding.

The parameters:

* `amount` - The amount of padding the component should have
* `sides` - A string indicating which sides of the component the padding should be applied to. Write:
	* `t` in the string to include the **T**op side
	* `b` in the string to include the **B**ottom side
	* `l` in the string to include the **L**eft side
	* `r` in the string to include the **R**ight side

If `sides` is not provided, the padding will be applied to all sides
(the default value is `` `tblr` ``).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.padding(15)
			.text(`This component has 15 padding on all sides.`)
	}
	
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(`red`)
			.padding(20, `tb`)
			.padding(10, `lr`)
			.top()
			.text(`This component has 20 padding on the top side and bottom side, and 10 padding on the left and right side.`)
	}
	
}
```

:::







## `showIf()` - Conditionally show/hide the GUI component
By default, all the GUI components you use will be shown. Use the configuration method `showIf(condition)` to only show the GUI component if the `condition` you pass to it is `true`. If the `condition` instead is `false`, the GUI component will still be used (so it will still occupy space), but it will not be shown to the user.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = Math.random()
	}
	
	createGui(){
		return Rows.children(
			Text.text(`The random number is: ${p.randomNumberBetween0And1}.`),
			Text.showIf(p.randomNumberBetween0And1 < 0.5).text(`That is a small number!`),
			Text.showIf(0.5 <= p.randomNumberBetween0And1).text(`That is a big number!`),
			Button.text(`Generate new number`),
		)
		
	}
	
}
```

:::