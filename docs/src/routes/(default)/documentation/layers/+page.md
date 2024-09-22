<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Layers`
On this page you find the documentation for the GUI Component `Layers`.



## Introduction
The `Layers` component is a layout that shows its children in front of each others, like layers (the first child is the bottom layer, then the second child is the layer on top of that one, and so on). The children are always as wide and tall as the `Layers` component. 

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Layers.children(
			Text.text(`I am the bottom layer.`),
			Text.text(`I am the layer in the middle.`),
			Text.text(`I am the top layer.`),
		)
	}
}
```

:::



## `children()` - Setting the children
Use the configuration method `children()` to tell the `Layers` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Layers.children(
			Text.top().text(`I am behind the layer that draws a background, so you can't see me.`),
			Text.backgroundColor(`lime`).text(`I am the layer in the middle, with a lime background.`),
			Text.bottom().text(`You can see me even though the middle layer has a background, because I am drawn in front of the middle layer.`),
		)
	}
}
```

:::

Any child that is `null` or `undefined` will not be used.