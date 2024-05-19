<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Paper`
On this page you find the documentation for the GUI Component `Paper`.





## Introduction
The `Paper` component is a view that you yourself specify what it should look like by drawing on it. The component also supports redrawing itself multiple times per second (without the user leaving the page), so it's a perfect view for visualizing games!

::: tip Example

Example showing what the `Paper` component can look like when shown on the screen.

```js
class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(`aqua`).children(
			PaperRectangle.backgroundColor(`red`),
			PaperCircle.backgroundColor(`lime`),
			PaperLine.backgroundColor(`gold`),
		)
	}
	
}
```

::bagawork-project[app&baga=eNrFUsFqg0AQ/ZVlLlWQYCyF4qWYUkoOLaEJtKEJuNXRhJhd2V1pgvjvXWNio5hgTz0oM+68eW/fMweapuDmEPAQwYUgoVKSl72XpgR3Clkoia7zBVuo8gkEUoVTRYWa0BgNszpRAlUmGKkPyq9FBSqgsCDiSYhCgvuZwzoEd2gBo9uS8QABC3gUSVQf4Nqneq7rYmlBqvc1kNWycdU0hNf8tfiyaal/ztZt3ROaohh80WATC56x8JEnXBh+rIl8s3EXC3bgOrYWuQf31q4FznCbJnp5Q2hDmyc348gLs+SKQM5GGHHx6+sZ9xX5b/xbDoLVOgkFMuOIVNOUBmidupkmHCj9MnxPINnzjBxsJGpFGRneP/im1Y3UZmRb1kHQHlyoUab0HY40r9w3B6U3BsuSxLR6wuYo++FOJ2bDJM68SKHocrD8E6tsnFY2T0xDvBj/O5n3FVU3sgxHEM1+OZOGY0O727Dm0F2PIafPJufCpnOFf8lkWfwA8oekuQ==]

:::

::: tip Tip

Often when using the `Paper` component, you want it to have some specific size, so putting it is very common to put it in a `Box` component.

```js
class StartPage extends Page{
	
	createGui(){
		// The height of the paper will always
		// be 3 times greater than the width.
		return Box.aspectRatio(1, 3).child(
			Paper.backgroundColor(`aqua`).children(
				PaperRectangle.backgroundColor(`red`),
				PaperCircle.backgroundColor(`lime`),
				PaperLine.backgroundColor(`gold`),
			),
		)
	}
	
}
```

:::



## `left()` - Setting the left coordinate
Use the configuration method `left()` to specify the coordinate that should represent the left side of the `Paper` component. Pass it the coordinate as a number.

If you don't call this configuration method, `0` will be used as the coordinate of the left side of the `Paper` component.



## `right()` - Setting the right coordinate
Use the configuration method `right()` to specify the coordinate that should represent the right side of the `Paper` component. Pass it the coordinate as a number.

If you don't call this configuration method, `0` will be used as the coordinate of the right side of the `Paper` component.



## `top()` - Setting the top coordinate
Use the configuration method `top()` to specify the coordinate that should represent the top side of the `Paper` component. Pass it the coordinate as a number.

If you don't call this configuration method, `0` will be used as the coordinate of the top side of the `Paper` component.



## `bottom()` - Setting the bottom coordinate
Use the configuration method `bottom()` to specify the coordinate that should represent the bottom side of the `Paper` component. Pass it the coordinate as a number.

If you don't call this configuration method, `1` will be used as the coordinate of the bottom side of the `Paper` component.



