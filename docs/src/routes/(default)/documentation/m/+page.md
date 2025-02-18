<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `m`
On this page you find the documentation for the `m` variable.


## Introduction
The `m` variable, short for **M**ath, contains various methods you can call to perform various mathematical operations. You can use it wherever you want in your code.




## `lowest()` - Obtaining the lowest number
You can use `m.lowest()` to pass it multiple numbers, and it will return back the lowest one to you. Pass the numbers as separate arguments.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	number = m.lowest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(`${p.number}`)
	}
	
}
```

:::




## `highest()` - Obtaining the highest number
You can use `m.highest()` to pass it multiple numbers, and it will return back the highest one to you. Pass the numbers as separate arguments.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	number = m.highest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(`${p.number}`)
	}
	
}
```

:::



## `randomInt()` - Obtaining a random integer
You can use `m.randomInt()` to obtain a random integer. Pass it two numbers:

1. The lowest random integer
2. The highest random integer

The function will then return back an integer between the ones you pass it. The returned integer can be equal to the lowest and the highest number you passed it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(`${p.number}`),
			Button.text(`New random number`).onClick(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomInt(3, 8)
	}
	
}
```

:::




## `randomFloat()` - Obtaining a random float
You can use `m.randomFloat()` to obtain a random float. Pass it two numbers:

1. The lowest random float
2. The highest random float

The function will then return back a number between the ones you pass it. The returned number can be equal to the lowest and the highest number you passed it.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(`${p.number}`),
			Button.text(`New random number`).onClick(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomFloat(10, 15)
	}
	
}
```

:::