<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. App Variables and Methods
This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.



## Why app variables are needed
A page variable can only be accessed and used on the page the created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.




## How to create app variables
To create an app variable, we write the same code as for creating an app constant, but we use `thisNamingConvention` for app variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following app variables:

* `name` will have the string value `Alice`
* `lastVisit` will have the string value `2023-09-16`

```js
class MyApp extends App{
	
	name = `Alice`
	lastVisit = `2023-09-16`
	// You can create as many app variables as you want.
	
	// And then you have createStartPage() as usual.
	
}
```



## How to use app variables
To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write `a.theName`. For example, to obtain the value stored in the app variable `lastVisit`, we would write `a.lastVisit` (which would evaluate to the string `2023-09-16` in this case).

::: tip Example

Example of an app using an app variable.

```js baga-show-editor-code
class MyApp extends App{
	
	name = `Alice`
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Text.text(`Hello ${a.name}!`)
	}
	
}
```

:::

As you can see in the example above, we can use the special `a` variable in your `Page` classes BagaWork to access your app variables.

::: tip Example

Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.

```js baga-show-editor-code
class MyApp extends App{
	
	name = `Alice`
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${a.name}!`),
			Button.text(`Change name`).page(ChangeNamePage),
		)
	}
	
}

class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Change name to what?`),
			Space,
			Columns.children(
				Space,
				Button.text(`Alice`).page(StartPage).onClick(p.setNameToAlice),
				Space,
				Button.text(`Bob`).page(StartPage).onClick(p.setNameToBob),
				Space,
			),
			Space,
		)
	}
	
	setNameToAlice(){
		a.name = `Alice`
	}
	
	setNameToBob(){
		a.name = `Bob`
	}
	
}
```

:::



### App methods
A page method can only be used in the `Page` that created the page method. If you want to be able to use the method in many different pages, you should instead create the method as an *app method* by writing it in your `App` class instead. Then you can access it from all your pages using `a.theNameOfTheMethod`.

::: tip Example

Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.

```js baga-show-editor-code
class MyApp extends App{
	
	name = `Alice`
	
	createStartPage(){
		return StartPage
	}
	
	setNameToAlice(){
		a.name = `Alice`
	}
	
	setNameToBob(){
		a.name = `Bob`
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${a.name}!`),
			Space,
			Button.text(`Change name`).page(ChangeNamePage),
			Space,
			Button.text(`Change name to Alice`).onClick(a.setNameToAlice),
			Button.text(`Change name to Bob`).onClick(a.setNameToBob),
		)
	}
	
}

class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Change name to what?`),
			Space,
			Columns.children(
				Space,
				Button.text(`Alice`).page(StartPage).onClick(a.setNameToAlice),
				Space,
				Button.text(`Bob`).page(StartPage).onClick(a.setNameToBob),
				Space,
			),
			Space,
		)
	}
	
}
```

:::




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

Open [this BagaWork project](/editor#eNq9VFFq4zAQvYqYn41BhMTd0q5/iluWbT92WbaFNmwKFvbECXUkI8mbhuAb7B16xR6hUpway9g0H0kxNiPPzJvR0xttgOU5BBuIRYIQQJwxpcjPdZjnBJ818kQRY2+mfKrtG0tkGm81k/o3S3HgVR4tUReSk9ph/5ZVUgklhZnIEpQKgr8bWCQQjClwtrQVtylAQcxmCvUDBKN3e2Ls8pFCbvCczArsplo4jdf16+btotX9j2LR7vuPWKlhPF9kiUQ+qFxTfZuzGOn76s5ADrX5DKJrsSJLxtdEmXqKrESRJWQtCpIu/iG5ZCm7F/LpIvJoN9SVyIol76jYDpzq7s7sc1loLfiuo9eX/y+RN7RUDSwJEhO7c482M9rYHRiHxDk01jHw9sBs2i569/F6jvYpPEPwdXRCYQ2Bf+6XtJKx/5GMd50cV8gTo1mFGcYak6AhVxvSFd8vaYflqznjKTZ53Q6l10vQ2bezHUH1xN/hMs/MJp3Jd1gK1dPNLEyK7BMmPpS4HfDtkRFt9kfG5wcZcIe4XyLql1srdoIq+libXusmrtXnUPmda5Rhiscn8n7O9BdluZTE4O8pqPGoEed6Tvs8fm+OfxrtM7rlY/kG9yyrTA==) and change the code in it to make the app function as shown below.

```js baga-show
class MyApp extends App{
	
	stars = `🌟🌟🌟`
	
	createStartPage(){
		return StartPage
	}
	
	select1Star(){
		a.stars = `🌟`
	}
	
	select2Stars(){
		a.stars = `🌟🌟`
	}
	
	select3Stars(){
		a.stars = `🌟🌟🌟`
	}
	
	select4Stars(){
		a.stars = `🌟🌟🌟🌟`
	}
	
	select5Stars(){
		a.stars = `🌟🌟🌟🌟🌟`
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`How many stars would you give BagaWork?`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(`🌟`).page(StarredPage).onClick(a.select1Star),
					Space,
					Button.text(`🌟🌟`).page(StarredPage).onClick(a.select2Stars),
					Space,
					Button.text(`🌟🌟🌟`).page(StarredPage).onClick(a.select3Stars),
					Space,
					Button.text(`🌟🌟🌟🌟`).page(StarredPage).onClick(a.select4Stars),
					Space,
					Button.text(`🌟🌟🌟🌟🌟`).page(StarredPage).onClick(a.select5Stars),
				),
				Space,
			),
			Space,
		)
	}
	
}

class StarredPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`You selected:`),
			Text,
			Text.text(a.stars),
			Space,
			Button.text(`Change`).page(StartPage)
		)
	}
	
}
```

::::hint

Add one app variable to keep track of which the selected stars are (start with ` `` ` (empty string) or `` `🌟🌟🌟` ``). Then add 5 app methods (one click handler for each button) that changes the app variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the app variable in the last `Text` component.

::::

:::



## That's it!
Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use `p` or `a` to access them. If you will just use the variable in one of your pages, then use a page variable, and if you need to use it in multiple pages, then use an app variable instead. Simple as that!