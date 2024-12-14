<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. Styling
This tutorial will teach you how to style components configuration.



## Introduction
There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.




## Background color
As you should know by now, you can use the configuration method `backgroundColor()` to give a component a background color. Pass it the color as the name in English, e.g. `red`.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor('yellow').text(`I am yellow!`)
	}
	
}
```

:::





## Padding
Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow `Text` component to be a little bit taller than it is.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor('yellow').text(`I am yellow!`),
			Space,
		)
	}
	
}
```

:::

You can make it taller by giving it a `size()`, but it's also possible to make it taller by giving it some padding on the top side and bottom side. *Padding* is simply some amount of space between the components edge and its content. Call the configuration method `padding()` to give the component some padding, and pass it:

1. The number of millimeters padding you want the component to have
2. A string indicating which sides of the component the padding should be added to:
	* If the string contains `t` (short for **t**op), the padding will be added to the top side
	* If the string contains `b` (short for **b**ottom), the padding will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the padding will be added to the left side
	* If the string contains `r` (short for **r**ight), the padding will be added to the right side

If you don't specify the second argument (the string), the padding will be added to all sides.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor('yellow').padding(10, `tb`).text(`I have 10mm padding above and below me!`),
			Space,
		)
	}
	
}
```

:::



## Rounded corners
You can instruct GUI components to have round corners by calling the configuration method `corderRadius()`. Pass it the radius of the corner in millimeters. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of `0`, which means not being round at all.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor('yellow').cornerRadius(5).text(`My corners are rounded! Cool, right? Please be impressed! xD`),
			Space,
		)
	}
	
}
```

:::

One thing you need to watch out for when using `cornerRadius()` is that anything that is placed in the corner of the component might not be shown properly. In the example above, try risizing the app screen, and place the `M` character in the beginning of the text in the upper left corner, and notice how it's not displayed properly. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.

Try resizing the app screen in the example below, and notive how the `M` character never is placed in the upper left corner, but always entirely visible.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text.backgroundColor('yellow').padding(1.5).cornerRadius(5).text(`My corners are rounded! Cool, right? Please be impressed! xD`),
			Space,
		)
	}
	
}
```

:::



## Border
It is also possible to add borders around the component. To do that, call the confiruation method `border()`, and pass it:

1. The thickness of the border, expressed as number of millimeters, e.g. `5`
2. The color of the border, expressed as the name in English, e.g. `"red"`
3. A string indicating which sides of the component the the border should be applied to:
	* If the string contains `t` (short for **t**op), the border will be added to the top side
	* If the string contains `b` (short for **b**ottom), the border will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the border will be added to the left side
	* If the string contains `r` (short for **r**ight), the border will be added to the right side

If you don't specify the third argument, the border will be applied to all sides.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text
				.backgroundColor('yellow')
				.border(3, `red`)
				.text(`Some text`),
			Space,
		)
	}
	
}
```

:::

If you specify a corner radius, the border will be round at the corners.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(`lime`).children(
			Space,
			Text
				.backgroundColor('yellow')
				.cornerRadius(5)
				.border(3, `red`)
				.text(`Some text`),
			Space,
		)
	}
	
}
```

:::


## That's it!
Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages.