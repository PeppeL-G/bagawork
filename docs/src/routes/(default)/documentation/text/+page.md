<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Text`
On this page you find the documentation for the GUI Component `Text`.




## Introduction
The `Text` component is a view showing some text to the user.

::: tip Example

Example showing what the `Text` component looks like when shown on the screen.

```js baga-show
class StartPage extends Page{
	createGui(){
		return Text.text(`Here is some text!`)
	}
}
```

:::




## `text()` - Setting the text
Use the configuration method `text()` to tell the `Text` component which text it should show on the screen. Pass the text as a string.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.text(`Here is some text!`)
	}
}
```

:::




## `left()` - Left align the text
Use the configuration method `left()` to tell the `Text` component that the text should be left aligned (instead of centered horizontally, which is the default).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.left().text(`I'm left aligned!`)
	}
}
```

:::




## `right()` - Right align the text
Use the configuration method `right()` to tell the `Text` component that the text should be right aligned (instead of centered horizontally, which is the default).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.right().text(`I'm right aligned!`)
	}
}
```

:::




## `top()` - Top align the text
Use the configuration method `top()` to tell the `Text` component that the text should be top aligned (instead of centered vertically, which is the default).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.top().text(`I'm top aligned!`)
	}
}
```

:::




## `bottom()` - Bottom align the text
Use the configuration method `bottom()` to tell the `Text` component that the text should be bottom aligned (instead of centered vertically, which is the default).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Text.bottom().text(`I'm bottom aligned!`)
	}
}
```

:::