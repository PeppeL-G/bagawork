<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `PaperFigure`
On this page you find the documentation for the configuration methods that all paper figures (:docs[PaperCircle], :docs[PaperLine], etc.) supports.




## `backgroundColor()` - Setting the background color
Use the configuration method `backgroundColor()` to tell the figure which background color it should have. Possible values:

* A string containing the name of a color in English, such as `` `red` `` or `` `blue` ``

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Box.aspectRatio(1, 1).child(
				Paper.backgroundColor(`blue`).children(
					PaperCircle.backgroundColor(`yellow`),
				),
			),
			Space,
		)
	}
	
}
```

:::




## `onClick()` - Handling clicks
Use the configuration method `onClick()` to tell the paper figure which method to call when the user clicks on it. Pass it a reference to the method (e.g. `a.theMethodName` or `p.theMethodName`, depending on what you have named your method and if you wrote it in your `App` class or `Page` class).

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	numberOfCircleClicks = 0
	
	createGui(){
		return Rows.children(
			Space,
			Updater.name(`refreshText`).childCreator(p.createText),
			Space,
			Box.aspectRatio(1, 1).child(
				Paper.backgroundColor(`black`).children(
					PaperCircle.backgroundColor(`red`).onClick(p.handleCircleClick),
				)
			)
		)
	}
	
	createText(){
		return Text.text(`You have clicked the circle ${p.numberOfCircleClicks} times.`)
	}
	
	handleCircleClick(){
		p.numberOfCircleClicks += 1
		runUpdater(`refreshText`)
	}
	
}
```

:::