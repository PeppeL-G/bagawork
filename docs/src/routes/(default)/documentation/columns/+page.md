<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Columns`
On this page you find the documentation for the GUI Component `Columns`.

::: tip More configuration methods

This webpage only contains descriptions of the configuration methods that are specific to the `Columns` component. The `Columns` component also supports the configuration methods described on the page :docs[Component].

:::




## Introduction
The `Columns` component is a layout that positions its child components as columns:

* The first child is to the left
* The second child is to the right of the first child
* The third child is to the right of the second child
* Etc.

The child components are always as tall as the `Columns` component. Their width is, by default, just wide enough to surround their content.

::: tip Example

```js baga-show
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::



## `children()` - Setting the children
Use the configuration method `children()` to tell the `Columns` component which its child components should be. Pass it the child components as individual arguments (as many/few as you want).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

If you pass `null` or `undefined` as a child, these values will be ignored.

If the width of all children together is greater than the width of the `Columns` component, the `Columns` component will become scrollable, so the user can scroll the children horizontally. Try resizing the screen for the app in the example below to see how it works.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
			Text.text(`Col 4`).backgroundColor(`lime`),
			Text.text(`Col 5`).backgroundColor(`aqua`),
			Text.text(`Col 6`).backgroundColor(`gold`),
			Text.text(`Col 7`).backgroundColor(`lime`),
			Text.text(`Col 8`).backgroundColor(`aqua`),
			Text.text(`Col 9`).backgroundColor(`gold`),
		)
	}
}
```

:::

In other words: you don't need to do anything special to handle overflow; the `Columns` component will automatically become scrollable if it needs to.




## Positioning the children
The children in the `Columns` component are positioned to the left. If you want them to be positioned elsewhere you can insert extra :docs[Space] children to "push apart" the other children.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Space,
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Space,
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Space,
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
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
		return Columns.backgroundColor(`yellow`).children(
			Space,
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Left`).backgroundColor(`lime`),
			Space,
			Text.text(`Right`).backgroundColor(`gold`),
		)
	}
}
```

:::






## `child.grow()` - Making the children wider
By default, all children (except :docs[Space] children, read more about this later) are wide enough to just surround their content, as shown below.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::

If there is space left over in the `Columns` component after the children has become wide enough to contain their content, you can use the configuration method `grow()` on the children to instruct them to grow wider and grab parts of this left over space. The number you pass to `grow()` indicates how wide the child should be in relation to the other children, and then the left over space will be divided among the children based on this relation.

::: tip Example

Resize the screen for the app (only works on laptops/computers), and notice how the size of the children changes.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`).grow(1),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`).grow(2),
		)
	}
}
```

:::

All children will have `grow()` set to `0` by default (meaning they will grab nothing of the extra space that might be available), except the :docs[Space] component , which has the default size `1`, because that's often how you want to use it. But feel free to call `grow()` also on :docs[Space] children if you want it to be something else.

::: tip Example

Resize the screen for the app, and notice how the size of the children changes.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Space.backgroundColor(`red`), // This component has grow(1) by default.
			Text.text(`Col 1`).backgroundColor(`lime`).grow(1),
			Text.text(`Col 2`).backgroundColor(`aqua`),
			Space.grow(2).backgroundColor(`silver`),
			Text.text(`Col 3`).backgroundColor(`gold`).grow(2),
		)
	}
}
```

:::




## `child.growMax()` - Making the children wider
`child.growMax()` will set the child's width only from the left over space (if there is some) and the preferred size it should have relative to the other children. Its two main differences from `child.grow()` are:

* The child will only be shown on the screen if some left over space exist (otherwise it will get the width `0`)
* If the child's content don't fit within the space it has been assigned, it will become scrollable

::: tip Example

Compare the first example (using `growMax()`) with the second example (using `grow()`). Also make the app screen smaller for the first example, and you will see that `Col 2` totally disappears when there is no room for it.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.growMax(1).text(`Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.backgroundColor(`yellow`).children(
			Text.text(`Col 1`).backgroundColor(`lime`),
			Text.grow(1).text(`Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2 Col 2`).backgroundColor(`aqua`),
			Text.text(`Col 3`).backgroundColor(`gold`),
		)
	}
}
```

:::