<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. Page Variables and Methods
This tutorial will teach you what page variables are in BagaWork, and how you can create them and change them using page methods.



## Why page variables are needed
An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.

For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.




## How to create page variables
Instead of hardcoding values in the code, you did in previous tutorials learn that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but the different is that after a page variable has been created and assigned its value, it can later store another value in the page variable, for example when the user clicks on a `Button`.

Page variables are created the same way as page constants, but we use `thisNamingConvention` for the variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following page variables:

* `name` will have the string value `Alice`
* `lastVisit` will have the string value `2023-09-16`

```js
class MyPage extends Page{
	
	name = `Alice`
	lastVisit = `2023-09-16`
	// You can create as many page variables as you want.
	
	// And then you have createGui() as usual.
	
}
```



## How to use page variables
You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write `p.theName`. For example, to obtain the value stored in the page variable `lastVisit`, we would write `p.lastVisit` (which would evaluate to the string `2023-09-16` in this case).

::: tip Example

Example of an app using a page variable.

```js baga-show-editor-code
class StartPage extends Page{
	
	name = `Alice`
	
	createGui(){
		return Text.text(`Hello ${p.name}!`)
	}
	
}
```

:::

As has been said, the benefit with variables over constants is that they can change value when the app is running. If we would want to store the name `Bob` in the page variable `name` after the app has started we just need to ask the computer to execute the code `` p.name = `Bob` ``. Easy as that!

However, a very good question is *where* we should write the code `` p.name = `Bob` ``. And it all depends on *when* we want the app to change the name to `Bob`. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let's go through how to make that happen.

In your own `Page` class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a `Button`, that code needs to be written in a method. So your `Page` class can for example look like this:

```js
class MyPage extends Page{
	
	name = `Alice`
	
	setNameToBob(){
		p.name = `Bob`
	}
	
	// And then you have createGui() as usual.
	
}
```

The method in the example above is named `setNameToBob()`, but you can name it whatever you want. However, to get code that is easy to read, the name of the method needs to reflect what the code in the method does, so `setNameToBob()` is a very good name in this case, since that's precisely what the code in the method does.

To tell the computer that the code in the method `setNameToBob()` should be executed when the user clicks on a button, we need to call the configuration method `onClick()` on the button, and pass it the method as an argument (i.e. write `p.setNameToBob` between the parentheses):

```js
class StartPage extends Page{
	
	name = `Alice`
	
	setNameToBob(){
		p.name = `Bob`
	}
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${p.name}!`),
			Button.text(`Change name to Bob`).onClick(p.setNameToBob)
		)
	}
	
}
```

::: warning Note!

When passing a method as an argument (as we do when we use `Button.onClick()`), you should not write the parentheses after the method name.

So the following is correct:

```js
Button.onClick(p.setNameToBob)
```

And the following is wrong:

```js
Button.onClick(p.setNameToBob())
```

:::

::: tip Remember!

In the code above, we haven't told BagaWork which page the user should come to when the button is clicked (we haven't used the configuration method `page()` on the `Button`), so when the user clicks the button, the current page will be reloaded (after the click handler (`setNameToBob()`) has been executed).

:::

::: warning

In a `Page`, you can only access the `Page` constants/variables/methods created on that page. For example, `PageA` cannnot access the page constants/variables/methods in `PageB`. To create a constant/variable/methos all pages can access, you should instead create an `App` constant/variable/method (learn more about this in next tutorial).

:::



### The final solution
So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.

::: tip

```js baga-show-editor-code
class StartPage extends Page{
	
	name = `Alice`
	
	setNameToAlice(){
		p.name = `Alice`
	}
	
	setNameToBob(){
		p.name = `Bob`
	}
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${p.name}!`),
			Button.text(`Change name to Alice`).onClick(p.setNameToAlice),
			Button.text(`Change name to Bob`).onClick(p.setNameToBob)
		)
	}
	
}
```

:::




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

Open [this BagaWork project](/editor#eNq9VNtKw0AQ/ZVlXmwhiCl4IS8SRbQPilhBixW6JNMLbnfD7sS2lPyB/+Av+gluGlu6MUGxKiFhNrPnzGTO2SyAJwkEC4hUjBBAJLgx7HIeJgnDGaGMDbPxoid7lN+RRk7YIa7pmg+x0SwypJFSLdk6kb/NClAGmQcDJWLUBoKHBYxjCHwPJJ/kFZcQ8EANBgbpHoK9Vdy1cfboQWL5HGRB1i4WTuPr+uvm80Wp+/N0XO77Rk3NbjQai1ijbBSpHnUSHqG3Wt1ayl2yj0b/Qk3ZhMs5M7aeYVOVipjNVcqG42dkJ3zI75R+Ou43vWqqUyXSiayoWN7Yo+rO8uskJVLyo6O315fXjXJVTBWIn6O2Q26P/sSwGbtcdSJs6HmaajtdElZQFBgRxgGrEa/pONuDGQQH/qEHcwhaR/7Krrc4SYS1mmNbx6mheWoPwjgV/2DXUOPSnctjw2jEJfOPfsWdjkZXql+vQmlvF03/a8mapd9IMcpWaZRnklCHQ/z7Qd6NOO2YfJaaWf76ETrf6u9t7HMz+3WZVi2mtf8tZ2aP2TvPbjh+) and change the code in it to make the app function as shown below.

```js baga-show
class StartPage extends Page{
	
	stars = `🌟🌟🌟`
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`How many stars would you give BagaWork?`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(`🌟`).onClick(p.select1Star),
					Space,
					Button.text(`🌟🌟`).onClick(p.select2Stars),
					Space,
					Button.text(`🌟🌟🌟`).onClick(p.select3Stars),
					Space,
					Button.text(`🌟🌟🌟🌟`).onClick(p.select4Stars),
					Space,
					Button.text(`🌟🌟🌟🌟🌟`).onClick(p.select5Stars),
				),
				Space,
			),
			Space,
			Text.text(`Currently selected: ${p.stars}`),
			Space,
		)
	}
	
	select1Star(){
		p.stars = `🌟`
	}
	
	select2Stars(){
		p.stars = `🌟🌟`
	}
	
	select3Stars(){
		p.stars = `🌟🌟🌟`
	}
	
	select4Stars(){
		p.stars = `🌟🌟🌟🌟`
	}
	
	select5Stars(){
		p.stars = `🌟🌟🌟🌟🌟`
	}
	
}
```

::::hint

Add one page variable to keep track of which the selected stars are (start with ` `` ` (empty string) or `` `🌟🌟🌟` ``). Then add 5 page methods (one click handler for each button) that changes the page variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the page variable in the last `Text` component.

::::

:::




## That's it!
Congratulation, now you know how to use page variables and page methods too! 🥳 But your `App` class can have its own variables and methods too, let's take a look at how those works next in the tutorial [Programming 4. App Variables & Methods](../app-variables-and-methods/).