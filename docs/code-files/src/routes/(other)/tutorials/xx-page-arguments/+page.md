<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# XX. Page Arguments
This tutorial will teach you how to create more re-usable pages using page arguments.



## The problem
To explain the benefits with using arguments, let's start by going through an app that can benefit from using page arguments, but that doesn't use them, and see the problems that app have.

Imagine you should build an app that functions as in the example below (no matter which button you click, the sum of the numbers in the button should be shown).

::: tip Example

::bagawork-project[app&link&code=StartPage-SumPage1-SumPage2-SumPage3&baga=eNqdk01vgkAQhv/KOidNiREooiQ94KGthzZN9dCmmEhgUFPcJcsSNYb/3gUEEfthPZDMsvvOPPPu7B7cKAJrDx7zESzwQjeOydPOjiKCW4HUj4mM9w51hMfRFTgRLhcv7gLbnfyvIziKhFNCcUNqm9le6tAUUgUCFvrIY7A+9rDywVIVoO46q5cLQAEWBDGKN7B6Zfwu41QpzmvH8+gx6t/n+X6WzRSIJMRJwYJhXCxOuq2gq46zRa3lh2TVbPaVbeKut1yFPkfaLrYcMUqEYLQrZJ72fLJkGxIna8ICopIbos073YyqPUnWWQG1o/yp06XOaOi0C3QDqVMbOr3UHa9Gga20o2cosANLH+o1v3+x64D/D7em8uiBMneC3BF93sDQjUGOoZpmiWHUMbQGhh1/PsuZsBfuip6jZB+jIwwYPw7qoWARXAL7iGHIWhVpmdYOBPLvsh5a0Yxe4WivmuD+BY5q1zmaz4h0dNB01LjtFxiDylHzAgz9Oox85CTG8Oxi+8V89VWzfJhTXEehzHjyQJu3Ow5sPwnFdTT5zRGxRI6tGlA6S78AXNqs4g==]

:::

No matter which button the user clicks on in the first page, we want to show the GUI on the second page to the user the same way, just with different numbers. Currently we have created three different versions of the second page (`SumPage1`, `SumPage2` and `SumPage3`). This works, but there are some drawbacks with this approach:

* The size of the code for the app has become unnecessarily big, since the code for the second page has been written 3 times
* If you have an error in the code written in the 3 different sum pages, you need to fix it at all 3 different places
* If you in the future wanna change how we display the sum on the second page, you have to change the code in all three `SumPage1`, `SumPage2` and `SumPage3`, which means a lot of work compared to if we could change it at just one place instead
* When changing the code at different places, you might make a mistake at one place, and the 3 different sum pages do no longer show the sum in the same way

Wouldn't it be nice if we could just have a single second page that we could re-use no matter which sum we want to display? Introducing arguments.



## The solution
When you take the user to a new page in your app, you can pass along some data to the new page. This data we call the page's arguments.

In our previously example, we had 3 different sum pages that should work the same, but display the sum of two different terms. So the only thing that differed between them was which two terms (and which sum) they should display. So in this case, we can have a single sum page with two arguments (one for each term, the sum can be computed based on the terms the page receives as its arguments).

First, we delete our 3 sum pages (`SumPage1`, `SumPage2` and `SumPage3`), and instead create a single sum page (`SumPage`):

```js
class SumPage extends Page{
	createGui(){
		return Text.text(`1 + 2 = 3`) // OBS: we will change the text here later.
	}
}
```

To indicate that this page can receive arguments, we should add the method `setArguments()` to it, and in it assign `p` default values for the arguments:

```js
class SumPage extends Page{
	setArguments(){
		// Here we name the arguments "leftTerm" and "rightTerm",
		// but you can name them and have as many as you want.
		// You can also use whichever default values you want.
		p.leftTerm = 5
		p.rightTerm = 2
	}
	createGui(){
		return Text.text(`1 + 2 = 3`)
	}
}
```

In the other methods, we can access the values for the arguments by writing `p.theArgumentName`. So, to make the GUI show the arguments it receives instead of the hardcoded `1` and `2`, we can use `p.leftTerm` and `p.rightTerm`:

```js
class SumPage extends Page{
	setArguments(){
		p.leftTerm = 5
		p.rightTerm = 2
	}
	createGui(){
		const sum = p.leftTerm + p.rightTerm
		return Text.text(`${p.leftTerm} + ${p.rightTerm} = ${sum}`)
	}
}
```

So, if someone tries to navigate to this page the "ordinary" way, e.g. using a button:

```js
Button.text("Show sum").page(SumPage)
```

Then this page will display the text `5 + 2 = 7`. But, the one navigating to this page can also pass custom values to the arguments, and make this page display the sum of two other numbers by using *argument methods* on the `Page` class (works similar to how configuration methods works on GUI Components):

```js
Button.text("Show sum").page(SumPage.leftTerm(2).rightTerm(4))
```

By navigating to `SumPage` this way, it will show the text `2 + 4 = 6` instead. So this way, we have created a more general version of the page that can display the sum of any two numbers!

So, using this new knowledge, we can improve our first sample app using page arguments, and we would end up with this code instead:

::: tip Example

::bagawork-project[app&link&code=StartPage-SumPage&baga=eNqVU01vozAU/Cuu1QOoCAUQUorUAz3sbg+tVpsctiqVguCRoAUb2Q+lFeK/rwnBcejX7gHJz2bmzcyzO5o2DY06mvEcaESzKpWS3L/GTUPgBYHlkqh1l7AEMwEpwgpTgT/TLVj2YTdBAdgKRhjsiXE4nPUJ62nv0IJXOQhJo6eOljmNPIeytB76HQDUobwoJOBvGi2m9aNa9874v3/6HzLO8m8Hvo9hzw5tlIizhqOGu7E4c6tFa8dDYVj+3pZzs7/4XrrZrqxyAcwajxK8bRE5c1HxWJvVju+JbGvCC+KRK+JvbHdQZa3aemhgO1/CAgULZzC3ggLXIGorsF1RbndjEdr/wLdUfN6HfEuTz9N8p0k69EWltwgd+kqj4DowxvNJumObt9mqYcVi29bAUOp4Gy2H3BBv2tOy1KZ/lPPecNTdkHgwe0MMpitiUJyNca1UHXO67E6IXkGGWoN6RXjZKeJ+M4sjuJ7iWE5xhGYc/iyOWP55UFc53qYle5vJ8HF2CwUXp/elDX96Iw0rP6Cq+IVWOtHGBYJ4j/VoxQ8Xo5WFfkFrqJtK9Tt7SXM/d0WctxX+x+uZayW4AwEXRrb9c/8XvxqYtw==]

:::

::: warning Not needed?

Not all pages need to use arguments like this. In fact, it's often quite few pages that will use them. But for the few ones that benefit from using them, it's a very good idea to use them.

:::


## That's it!
Great work, now you know what page arguments are, and how you can use them 🥳 