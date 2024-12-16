<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `grow()`
This page is used to test that `grow()` works as it should in `Rows` and `Columns`.

::: tip Test 1

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`lime`).text(`Text`),
			Text.backgroundColor(`yellow`).text(`Text sdf sdf sd fsd fsd fsd dsf sd fs fdsd f sdf sd fsd fsd f sdf sdf s fsd fs s fdfds. dsf sddf sd fsdf dsf sdf dfs `),
			Text.backgroundColor(`aqua`).text(`Text`),
			Button.text(`Ok!`),
			Button.text(`Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok!`),
		)
	}
}
```

:::

::: tip Test 2

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`lime`).text(`Text`),
			Button.text(`Ok!`),
			Text.backgroundColor(`yellow`).grow(1).text(`Text sdf sdf sd fsd fsd fsd dsf sd fs fdsd f sdf sd fsd fsd f sdf sdf s fsd fs s fdfds. dsf sddf sd fsdf dsf sdf dfs `),
			Button.grow(1).text(`Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! Ok! `),
			Text.backgroundColor(`aqua`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 3

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`lime`).text(`Text`),
			Space,
			Text.backgroundColor(`aqua`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 4

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Paper.backgroundColor(`blue`),
		)
	}
}
```

:::

::: tip Test 5

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Paper.grow(1).backgroundColor(`blue`),
		)
	}
}
```

:::

::: tip Test 6

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`yellow`).text(`Text`),
			Paper.backgroundColor(`blue`),
			Text.backgroundColor(`aqua`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 7

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`yellow`).text(`Text`),
			Box.backgroundColor(`lime`).padding(3).child(
				Text.backgroundColor(`pink`).text(`Text`),
			),
			Text.backgroundColor(`aqua`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 8

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.backgroundColor(`red`).padding(5).children(
			Text.backgroundColor(`yellow`).text(`Text`),
			Box.backgroundColor(`lime`).aspectRatio(1, 1).child(
				Text.text(`Text`),
			),
			Text.backgroundColor(`aqua`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 9

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(`red`).aspectRatio(1, 1).child(
			Text.backgroundColor(`lime`).text(`The child is lime!`)
		)
	}
}
```

:::

::: tip Test 10

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.padding(4).children(
			Text.backgroundColor(`red`).text(`Text`),
			Box.grow(1).backgroundColor(`gold`).aspectRatio(1, 1).child(
				Text.backgroundColor(`lime`).text(`The child is lime!`)
			),
			Text.backgroundColor(`yellow`).text(`Text`),
		)
	}
}
```

:::

::: tip Test 11

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Columns.padding(4).children(
			Text.backgroundColor(`red`).text(`Text`),
			Box.grow(1).backgroundColor(`gold`).aspectRatio(1, 1).child(
				Text.backgroundColor(`lime`).text(`The child is lime!`)
			),
			Text.backgroundColor(`yellow`).text(`Text`),
		)
	}
}
```

:::