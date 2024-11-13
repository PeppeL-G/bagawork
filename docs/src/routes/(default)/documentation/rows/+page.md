<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Rows`
On this page you find the documentation for the GUI Component `Rows`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Rows` component. The `Rows` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `Rows` component is a layout that positions its child components as rows:

* The first child is to the top
* The second child is below the first child
* The third child is below the second child
* Etc.

The child components are always as wide as the `Rows` component. Their height is, by default, just tall enough to surround their content.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
		)
	}
}
```

:::




## `children()` - Setting the children
Use the configuration method `children()` to tell the `Rows` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

If you pass `null` or `undefined` as a child, these values will be ignored.

If the height of all children together is greater than the height of the `Rows` component, the `Rows` component will become scrollable, so the user can scroll the children vertically. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
			Text.text(`Row 4`).backgroundColor(`lime`),
			Text.text(`Row 5`).backgroundColor(`aqua`),
			Text.text(`Row 6`).backgroundColor(`gold`),
			Text.text(`Row 7`).backgroundColor(`lime`),
			Text.text(`Row 8`).backgroundColor(`aqua`),
			Text.text(`Row 9`).backgroundColor(`gold`),
		)
	}
}
```

:::

In other words: you don't need to do anything special to handle overflow; the `Rows` component will automatically become scrollable if it needs to.




## Positioning the children
The children in the `Rows` component are positioned at the top. If you want them to be positioned elsewhere you can insert extra `Space` children to "push apart" the other children.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`),
			Space,
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Space,
			Text.text(`Row 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Space,
			Text.text(`Row 1`).backgroundColor(`lime`),
			Space,
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Space,
			Text.text(`Row 3`).backgroundColor(`gold`),
			Space,
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Space,
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
			Space,
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Space,
			Text.text(`Row 1`).backgroundColor(`lime`),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Top`).backgroundColor(`lime`),
			Space,
			Text.text(`Bottom`).backgroundColor(`gold`),
		)
	}
}
```

:::






## `child.size()` - Resizing the children
By default, all children (except :docs[Space] children, read more about this later) are tall enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space available in the `Rows` component should be distributed among them to make them even taller (if any remaining space exists). The number you pass to it indicates how many shares of the available horizontal space the child should occupy:

* `0`: the child will be tall enough to surround its content (default value for all children, except :docs[Space] children)
* `1`: the child will be tall enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 1 share of that space (default value for :docs[Space] children)
* `2`: the child will be tall enough to surround its content, but if more space is available in the `Columns` component, the child will also occupy 2 shares of that space
* Etc.

The reason :docs[Space] children has the deafult size `1` is because you very often want it to have that size, but feel free to call `size()` also on :docs[Space] children if you want them to have anonother size.

::: tip Example

Resize the screen for the app, and note how the size for the first and last child changes because they use the configuration method `size()`.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`yellow`).children(
			Text.text(`Row 1`).backgroundColor(`lime`).size(1),
			Text.text(`Row 2`).backgroundColor(`aqua`),
			Text.text(`Row 3`).backgroundColor(`gold`).size(2),
		)
	}
}
```

:::