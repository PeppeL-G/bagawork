<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Image`
On this page you find the documentation for the GUI Component `Image`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Image` component. The `Image` component also supports the configuration methods described on the page :docs[Component].

:::

::: warning TEMPORARILY DISABLED!!!

Until network permissions have been implemented, this component won't be supported.

:::




## Introduction
The `Image` component is a view that shows an image to the user.

::: tip Example

Example showing what the `Image` component looks like when shown on the screen.

```js baga-show
class StartPage extends Page{
	createGui(){
		return Image.url(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`)
	}
}
```

:::


## `url()` - Specifying the image
Use the configuration method `url()` to tell the `Image` component which image it should show. Pass it the URL to the image as a string.

::: tip Example

Example showing what the `Image` component looks like when shown on the screen.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Image
			.backgroundColor(`red`)
			.url(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`)
	}
}
```

:::

The image will always be drawn at the center of the `Image` component. Try resizing the app screen in the example above, and notice that the image always stays in the center.





## Resizing the image
The `Image` will occupy the space given to it by the layout it's in (or the entire screen if the `Image` is the root component). If the layout hasn't given it a specific size (for example when using the `Image` component as a child in a :docs[Rows] or :docs[Columns] layout without calling `size()`), it will have the same size as the image itself.


::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Image
				.backgroundColor(`red`)
				.url(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`),
			Space,
		)
	}
}
```

:::

If you want to give the image a specific size, put it in a :docs[Box] component.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`lime`).width(20).height(20).child(
			Image
				.backgroundColor(`red`)
				.url(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`),
		)
	}
}
```

:::