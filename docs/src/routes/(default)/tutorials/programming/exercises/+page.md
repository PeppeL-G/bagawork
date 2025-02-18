<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 8. Exercises
Way to go! Your first step towards becoming a programmer is now taken 😎

Below you have examples of apps you should be able to implement with what you have learned so far. Why don't you give it a try to implement them yourself from scratch? And don't just create copies of them, but try be creative and come up with your own apps, that is so much more fun!

::: exercise Multiplication Table Exercise

```js baga-show-editor
class StartPage extends Page{
	
	x = 0
	
	createGui(){
		return Rows.children(
			Space,
			Columns.children(
				Space,
				Button.text(`-`).onClick(p.decrement),
				Space,
				Text.text(`${p.x}`),
				Space,
				Button.text(`+`).onClick(p.increment),
				Space,
			),
			Space,
			Text.text(`0 * ${p.x} = ${0 * p.x}`),
			Text.text(`1 * ${p.x} = ${1 * p.x}`),
			Text.text(`2 * ${p.x} = ${2 * p.x}`),
			Text.text(`3 * ${p.x} = ${3 * p.x}`),
			Text.text(`4 * ${p.x} = ${4 * p.x}`),
			Text.text(`5 * ${p.x} = ${5 * p.x}`),
			Text.text(`6 * ${p.x} = ${6 * p.x}`),
			Text.text(`7 * ${p.x} = ${7 * p.x}`),
			Text.text(`8 * ${p.x} = ${8 * p.x}`),
			Text.text(`9 * ${p.x} = ${9 * p.x}`),
			Space,
		)
	}
	
	decrement(){
		p.x -= 1
	}
	
	increment(){
		p.x += 1
	}
	
}
```

:::

::: exercise Counter Exercise

```js baga-show-editor
class MyApp extends App{
	
	createStartPage(){
		return CounterPage
	}
	
}

class CounterPage extends Page{
	
	counter = 0
	
	incrementCounter(){
		p.counter += 1
	}
	
	decrementCounter(){
		p.counter -= 1
	}
	
	resetCounter(){
		p.counter = 0
	}
	
	createGui(){
		return Rows.children(
			Text.text(`${p.counter}`).grow(1),
			Columns.grow(1).children(
				Rows.grow(1).children(
					Button.text(`-`).grow(1).onClick(p.decrementCounter),
					Button.text(`Reset`).grow(1).onClick(p.resetCounter),
				),
				Button.text(`+`).grow(1).onClick(p.incrementCounter),
			),
		)
	}
	
}
```

:::

::: exercise Power Point Presentation Exercise

```js baga-show-editor
class MyApp extends App{
	
	createStartPage(){
		return Slide1
	}
	
}

class Slide1 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Text.text(`Hello!`),
			Space,
			Text.text(` - I am Peter`).left().showIf(2 <= p.counter),
			Text.text(` - Born 1990`).left().showIf(3 <= p.counter),
			Text.text(` - Raised in Baremossö`).left().showIf(4 <= p.counter),
			Space,
			Button.text(`Next`).page(Slide1).keepIf(p.counter <= 3),
			Button.text(`Next`).page(Slide2).keepIf(4 == p.counter),
		)
	}
	
}

class Slide2 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Space,
			Text.text(`Thank you for listening!`),
			Space,
			Text.text(`Any questions?`).showIf(2 <= p.counter),
			Space,
			Button.text(`Next`).page(Slide2).showIf(p.counter < 2),
		)
	}
	
}
```

:::