<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `log()`
On this page you find the documentation for the function `log()`.




## Introduction
The `log()` function can be useful during development. Using it, you can log various values in your app while it is running, which can help you debug errors in it.

::: warning Only useful in the editor!

You can only view the logged values in our :online-editor. If your app logs values when it is running on a user's device, those values will not be shown/stored anywhere.

:::

::: tip Example

You have to run the app in the editor to be able to see the logged messages in the *Log* panel there.

```js baga-editor-code
class StartPage extends Page{
	
	clickCounter = 0
	
	onBefore(){
		log(`onBefore() is now executing!`)
	}
	
	createGui(){
		
		log(`createGui() is now executing!`)
		
		return Button.text(`${p.clickCounter}`).onClick(p.incrementCounter)
		
	}
	
	incrementCounter(){
		
		log(`Click on counter button!`)
		
		log(p)
		
		p.clickCounter += 1
		
		log(p)
		
	}
	
	
}
```

:::