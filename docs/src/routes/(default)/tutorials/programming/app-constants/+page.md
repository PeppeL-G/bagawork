<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. App Constants
This tutorial will teach you what constants in programming are, and how you can create them in a BagaWork app.




## App constants vs page constants
In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it's better to use an *app constant* instead, since all different pages have access to all app constants.

Below we have an example of an app that uses the same hardcoded value (the name of the app, `InfoApp`) on multiple different pages.

::: tip

```js baga-show-editor-code
class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}

class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`InfoApp`),
			Space.grow(0.05),
			Text.text(`Select what you want to read more about.`).left(),
			Space,
			Columns.children(
				Space,
				Button.text(`Mario`).page(MarioPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(`Zelda`).page(ZeldaPage),
				Space,
			),
			Space,
		)
	}
	
}

class ZeldaPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`InfoApp - Zelda`),
			Space,
			Text.text(`Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.`),
			Space,
			Columns.children(
				Space,
				Button.text(`←`).page(MenuPage),
				Space,
			)
		)
	}
	
}

class MarioPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`InfoApp - Mario`),
			Space,
			Text.text(`Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.`),
			Space,
			Columns.children(
				Space,
				Button.text(`←`).page(MenuPage),
				Space,
			)
		)
	}
	
}
```

:::

This works, but changing the name of the app in the future (for example from `InfoApp` to `Information App`) will be hard, since there are so many places we will need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.



### How to create app constants
We create app constants the same way we create page constants, but we write them in the `App` class instead. In the code below you find an example of how to create the following app constants:

* `APP_NAME` will have the string value `InfoApp`
* `CREATED_DATE` will have the string value `2023-09-15`

```js
class MyApp extends App{
	
	APP_NAME = `InfoApp`
	CREATED_DATE = `2023-09-15`
	// You can create as many app constants as you want.
	
	// And then you have createStartPage() as usual.
	
}
```



### How to use app constants
In BagaWork, everything you create in your `App` class (constants, variables and methods) are accessible through a special variable named `a` (short for *app*). To retrieve the value of an app constant, you would simply write `a.THE_NAME_OF_THE_CONSTANT`, for example `a.APP_NAME`.

To display the name of the app on the `MenuPage`, we used before the following code:

```js
Text.text(`InfoApp`)
```

With the app constants we have now, we can instead write:

```js
Text.text(`${a.APP_NAME}`)
```

In this case, when we create a string that only contains the special `${SOMETHING}` thing, we can actually simplify the code to:

```js
Text.text(a.APP_NAME)
```

When the computer executes this code, it will first retrieve the value for the `APP_NAME` constant from the `a` variable, and it gets back the string value `InfoApp`, and pass that to the `Text.text()` method, which then will display that text.

However, on the `MarioPage`, where the text we send to the `Text` component is not only the app name, but looks like this:

```js
Text.text(`InfoApp - Mario`)
```

We have to use the complicated `${SOMETHING}` thing:

```js
Text.text(`${a.APP_NAME} - Mario`)
```

The same is true for the `ZeldaPage`.


### The final solution
So, here's the code for the app using constants, instead of harding the name of the app at multiple places.

::: tip

```js baga-show-editor-code
class InfoApp extends App{
	
	APP_NAME = `InfoApp`
	
	createStartPage(){
		return MenuPage
	}
	
}

class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(a.APP_NAME),
			Space.grow(0.05),
			Text.text(`Select what you want to read more about.`).left(),
			Space,
			Columns.children(
				Space,
				Button.text(`Mario`).page(MarioPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(`Zelda`).page(ZeldaPage),
				Space,
			),
			Space,
		)
	}
	
}

class ZeldaPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`${a.APP_NAME} - Zelda`),
			Space,
			Text.text(`Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.`),
			Space,
			Columns.children(
				Space,
				Button.text(`←`).page(MenuPage),
				Space,
			)
		)
	}
	
}

class MarioPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`${a.APP_NAME} - Mario`),
			Space,
			Text.text(`Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.`),
			Space,
			Columns.children(
				Space,
				Button.text(`←`).page(MenuPage),
				Space,
			)
		)
	}
	
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq9VAtr2zAQ/itXMWgCwuTVrTWM4Y4SMtZ2tIEtLGVR7HNiaktGktua4P8+yZ7bOEtCN9pCYk463eu7725FWJoSd0V8ESBxiR8zpeA899IU8EEjDxQYeTXlU23/3vDsYvzrwjs/g48w+8ISVHAqeDCrH/gSmcZrzaT+xhbYalemWqLOJIehRNQRX1idVRSVXUEKSkIRBygVcX+uSBQQt0sJNwFMVqU7QokIQ4X6B3E7tTwxcnFDSWr8NSwrZ6Pq0ChuPYXHGu1h1axhmEWb2V+Je+X4yygOJPJWpZrq65T5SOvT2Lh0tPm0ZkMhAkiE5CYahXcr5jzBVxzM2nS7h88izhK+JdDmw6k+zbQWfGu460iaEI4FpuUpFS14grzsSZvuclhr2o3WUPJA3F7HYJ4Tt9/pFLRCubcP5WbI18V5IjJQiAkwmEca5kJisAk3BSVgiRLBF5a0ucgkcGMO7DFTF4YCtPktEebsFmUOailSELy8EuYjQUWBEcPyRmnLJQqMBzCXBnZIjI7X+kiCb9woCmmMTKHz4i0fgcQwU1i2u+72VXm1v9Mbfi5DA0smNxx5vo/p/1NmcHLyhzL9mjL9fZR5yvt16TKyZHEcB0b6UMEckQOPfIRbLu5tDw01/ppWB74iu8OKNouMW5okkV2Vpt15ipznlial+p4ZOdMO2IGc57hr0rdAdtx5X0LWHXyoIRvsnbLHDr0uZOMls1gxWNgdE7PgAC4NzQOWU1vzYRwbHK3axgOTAdfPXnh7YBj0+/VyH2OSxqaWxpLf2Di3o9ALsvgN8PBkSQUoG2NGnXHoHn968fG+ELNnj/AE1exfx3RtkzegPOMapbd4g1n8XhGrnBvjfzeEjVq7nbV3Tc3RLk1vp03v6FnMLG6K38ApRX8=) contains an app that works like this:

```js baga-show
class MyApp extends App{
	
	AGENT_NAME = `James Bond`
	
	createStartPage(){
		return GreetingPage
	}
	
}

class GreetingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Good morning, ${a.AGENT_NAME}!`),
			Space,
			Columns.children(
				Space,
				Button.text(`Good morning, Sir!`).page(AssignmentPage),
				Space,
			),
		)
	}
	
}

class AssignmentPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`You seem a bit bored ${a.AGENT_NAME}, so here comes your next assignment: Go to the bakery shop on the other side of the street, and bring me one of their cakes, please.`),
			Space,
			Columns.children(
				Space,
				Button.text(`I refuse, Sir`).page(RefusePage),
				Space,
				Button.text(`Of course, Sir`).page(AcceptPage),
				Space,
			),
		)
	}
	
}

class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I see... It's been nice knowing you, ${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your way out. Goodbye!`),
			Space,
		)
	}
	
}

class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`That's a good lad! One day, you'll be a great agent, ${a.AGENT_NAME}!`),
			Space,
		)
	}
	
}
```

As you can see, the page's GUI contains the name `James Bond` at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!

However, to improve security and anonymity among the agents, it has now been decided that one should never refer to the agents by name, but only by their code numbers, which for `James Bond` is `007`.

Change the code so the GUI displays `007` instead of `James Bond`. When you're done, it should look as shown below.

```js baga-show
class MyApp extends App{
	
	AGENT_NAME = `007`
	
	createStartPage(){
		return GreetingPage
	}
	
}

class GreetingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Good morning, ${a.AGENT_NAME}!`),
			Space,
			Columns.children(
				Space,
				Button.text(`Good morning, Sir!`).page(AssignmentPage),
				Space,
			),
		)
	}
	
}

class AssignmentPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`You seem a bit bored ${a.AGENT_NAME}, so here comes your next assignment: Go to the bakery shop on the other side of the street, and bring me one of their cakes, please.`),
			Space,
			Columns.children(
				Space,
				Button.text(`I refuse, Sir`).page(RefusePage),
				Space,
				Button.text(`Of course, Sir`).page(AcceptPage),
				Space,
			),
		)
	}
	
}

class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`I see... It's been nice knowing you, ${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your way out. Goodbye!`),
			Space,
		)
	}
	
}

class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`That's a good lad! One day, you'll be a great agent, ${a.AGENT_NAME}!`),
			Space,
		)
	}
	
}
```

:::


::: exercise Exercise 2

It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (`a`, `b`, `c`, etc.), but they are quite hard to type on a keyboard, since they don't have their own keys on the keyboard, so people often copy-paste them:

1. Search for the smiley using Google, for example "[smiley smiling face](https://www.google.com/search?q=smiley+smiling+face)"
2. Find and copy the smiley from a search result
3. Paste the smiley wherever they want to write it

This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!

Your task is to:

1. Open [this empty BagaWork project](/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==)
2. Create the following three app constants:
	* `SMILEY_SMILING` storing 🙂
	* `SMILEY_GRIN` storing 😁
	* `SMILEY_LAUGH_CRYING` storing 🤣
3. Add a few pages that make use of these app constants to display the smileys

When you are done, your app can for example look like the one below.

```js baga-show
class MyApp extends App{
	
	SMILEY_SMILE = `🙂`
	SMILEY_GRIN = `😁`
	SMILEY_LAUGH_CRYING = `🤣`
	
	createStartPage(){
		return StartPage
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`Click on the smiley you want to learn more about.`),
			Space,
			Button.text(a.SMILEY_SMILE).page(SmilePage),
			Space,
			Button.text(a.SMILEY_GRIN).page(GrinPage),
			Space,
			Button.text(a.SMILEY_LAUGH_CRYING).page(LaughCryingPage),
			Space,
		)
	}
	
}

class SmilePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`${a.SMILEY_SMILE} means that the one who wrote the text is smiling.`),
			Space,
			Button.text(`Back`).page(StartPage)
		)
	}
	
}

class GrinPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`${a.SMILEY_GRIN} means that the one who wrote the text is smiling so much that you can see their teeth.`),
			Space,
			Button.text(`Back`).page(StartPage)
		)
	}
	
}

class LaughCryingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(`${a.SMILEY_LAUGH_CRYING} means that the one who wrote the text is laughing so hard that tears come from their eyes.`),
			Space,
			Button.text(`Back`).page(StartPage)
		)
	}
	
}
```

:::




## That's it!
Great work, now you also now how to use app constants in BagaWork! 🥳 And constants are great, but variables are even more useful, so let's take a look at them in the next tutorial, [Programming 3. Page Variables & Methods](../page-variables-and-methods/).