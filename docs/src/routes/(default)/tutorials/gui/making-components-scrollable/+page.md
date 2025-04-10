<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. Making Components Scrollable
This tutorial will teach you how to make children in the `Rows` and `Columns` components scrollable.




## Introduction
When a GUI component is a child of a `Rows` or a `Columns` component, you can call the `grow()` configuration method on it to tell the component that it may grow bigger if there is left over space in its parent `Rows`/`Columns` component.

But what if the case is the opposite? What if the `Rows`/`Columns` component has so many children that the layout becomes scrollable, and you want one of the child components to instead become smaller and scrollable? Well, you can achieve that using `growShrink()` instead of using `grow()`.




## The `growShrink()` method
The `growShrink()` configuration method works the same as `grow()`, but it does also allow the child to become smaller if there is not enough room for it in the parent `Rows`/`Columns` component.

::: tip Example

Here is an example where the root `Rows` component has room to display all of its children. Make the height of the app screen smaller, and you can see that the `Rows` component becomes scrollable.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.size(9)).children(
			Text.text(`Row 1`).backgroundColor(`gold`),
			Text.text(`Row 2`).backgroundColor(`lime`),
			Text.text(`Row 3`).backgroundColor(`gold`),
			Text.text(`Row 4`).backgroundColor(`lime`),
			Text.text(`Row 5`).backgroundColor(`gold`),
			Text.text(`Row 6`).backgroundColor(`lime`),
			Text.text(`Row 7`).backgroundColor(`gold`),
		)
	}
	
}
```

:::

::: tip Example

This is the same example as before, but the `Row 3` child calls the `grow()` method, so it is allowed to grow bigger if there is room for it.

Make the height of the app screen smaller, and you will see that the `Row 3` child becomes as small as all other children.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.size(9)).children(
			Text.text(`Row 1`).backgroundColor(`gold`),
			Text.text(`Row 2`).backgroundColor(`lime`),
			Text.text(`Row 3`).backgroundColor(`gold`).grow(1),
			Text.text(`Row 4`).backgroundColor(`lime`),
			Text.text(`Row 5`).backgroundColor(`gold`),
			Text.text(`Row 6`).backgroundColor(`lime`),
			Text.text(`Row 7`).backgroundColor(`gold`),
		)
	}
	
}
```

:::

::: tip Example

This is the same example as before, but the `Row 3` child calls the `growShrink()` method instead, so it is allowed to grow bigger if there is room for it, and if the `Rows` component is short of space, the `Row 3` child is allowed to shrink and become smaller.

Make the height of the app screen smaller, and you will see that the `Row 3` child shrinks and becomes scrollable, and for really screens it even disappears (the height of the child becomes `0`).

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.size(9)).children(
			Text.text(`Row 1`).backgroundColor(`gold`),
			Text.text(`Row 2`).backgroundColor(`lime`),
			Text.text(`Row 3`).backgroundColor(`gold`).growShrink(1),
			Text.text(`Row 4`).backgroundColor(`lime`),
			Text.text(`Row 5`).backgroundColor(`gold`),
			Text.text(`Row 6`).backgroundColor(`lime`),
			Text.text(`Row 7`).backgroundColor(`gold`),
		)
	}
	
}
```

:::

So, using `growShrink()` on a child, you basically tell the parent `Rows`/`Columns` component that it should prioritize making the child smaller over becoming scrollable itself. And this is very useful when you later will build GUI layouts for your BagaWork apps.

So, let's say you don't want your entire app to become scrollable, but only a part of it. That can be achieved by calling `growShrink()` on the child.

::: tip Example

Example showing how to get one row sticky at the top of the app, and make the other rows scrollable.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.size(9)).children(
			Text.text(`Row 1`).backgroundColor(`gold`),
			Rows.growShrink(1).children(
				Text.text(`Row 2`).backgroundColor(`lime`),
				Text.text(`Row 3`).backgroundColor(`gold`),
				Text.text(`Row 4`).backgroundColor(`lime`),
				Text.text(`Row 5`).backgroundColor(`gold`),
				Text.text(`Row 6`).backgroundColor(`lime`),
				Text.text(`Row 7`).backgroundColor(`gold`),
				Text.text(`Row 9`).backgroundColor(`lime`),
				Text.text(`Row 9`).backgroundColor(`gold`),
				Text.text(`Row 10`).backgroundColor(`lime`),
				Text.text(`Row 11`).backgroundColor(`gold`),
				Text.text(`Row 12`).backgroundColor(`lime`),
			),
		)
	}
	
}
```

:::

::: tip Example

Example showing how to split the screen into two halves, each becoming scrollable.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.font(Font.size(9)).children(
			Rows.growShrink(1).children(
				Text.text(`Row 1`).backgroundColor(`gold`),
				Text.text(`Row 2`).backgroundColor(`lime`),
				Text.text(`Row 3`).backgroundColor(`gold`),
				Text.text(`Row 4`).backgroundColor(`lime`),
				Text.text(`Row 5`).backgroundColor(`gold`),
				Text.text(`Row 6`).backgroundColor(`lime`),
				Text.text(`Row 7`).backgroundColor(`gold`),
			),
			Rows.growShrink(1).children(
				Text.text(`Row 8`).backgroundColor(`lime`),
				Text.text(`Row 9`).backgroundColor(`gold`),
				Text.text(`Row 10`).backgroundColor(`lime`),
				Text.text(`Row 11`).backgroundColor(`gold`),
				Text.text(`Row 12`).backgroundColor(`lime`),
				Text.text(`Row 13`).backgroundColor(`gold`),
				Text.text(`Row 14`).backgroundColor(`lime`),
			),
		)
	}
	
}
```

:::




## A navigation bar
Using `growShrink()`, it's very easy to implement a GUI that contains a navigation bar, as the one shown below.

::: tip Example

Make the height of the screen smaller, and notice that only the main content becomes scrollable.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.backgroundColor(`lime`).growShrink(1).text(`I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content!`),
			Columns.backgroundColor(`red`).children(
				Space,
				Button.text(`Home`),
				Space,
				Button.text(`About`),
				Space,
			)
		)
	}
	
}
```

:::

You might think a layout like this one easily can be implemented using `grow()` instead, but then the entire app becomes scrollable, as shown below.

::: tip Example

Make the height of the screen smaller, and notice how the entire app becomes scrollable, and not only the main content part.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.backgroundColor(`lime`).grow(1).text(`I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content! I am the main content!`),
			Columns.backgroundColor(`red`).children(
				Space,
				Button.text(`Home`),
				Space,
				Button.text(`About`),
				Space,
			)
		)
	}
	
}
```

:::



## That's it!
Woho! Now you also know how to make components smaller! 🎉 That is really useful when you create different layouts for your app.

When you are ready, proceed with [5. Layers](../layers/).
