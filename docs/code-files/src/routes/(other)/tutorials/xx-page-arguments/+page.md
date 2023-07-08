<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# XX. Page Arguments
This tutorial will teach you how to create more re-usable pages using page arguments.



## The problem
To explain the benefits with using arguments, let's start by going through an app that can benefit from using page arguments, but that doesn't use them, and see the problems that app have.

Imagine you should build an app that functions as in the example below (no matter which button you click, the sum of the numbers in the button should be shown).

::: tip Example

::bagawork-project[app&link&code=StartPage-SumPage1-SumPage2-SumPage3&baga=eNqVk01vgkAQhv/KOidMScNHUSTpAQ9tPbRpqoc2xUQig5rCLoEl2hD+excQRGytHkiG3X1nn3lnNgM3isDKYMk8BAuWgZsk5PnbjiKCO47US4iIM4c6fBmjy3HK3Zi/uiuU+uWqw2PkaUwJxS1pbRZ7uUNzyGXwWeBhnID1mcHGA0uVgbphcV8pABmY7yfI38FS6vhDxLlcndcO53HJqPdQ5vtbNpchEhBHF1YMk+rnqNoGuqm4+GmV/JhuusW+sW0iVSsOH6ecMyotpmu2JUkaEuYTldwQbdG/LTikaRoWKdW+fE6iC4nRkWjnJaaQqB2JXksOLZBhJ8pWDBm+wdJHesvXM7bsoa9wZSaOSouydHJP9EWHQDfMkkAdDmsCo02gdQjs5OtFtN1euRt6SlF8jI7RZ/FhFvcXVsE/nE8YBKzXQNYZbZ9j/FvCfRWaoVQ+Ks18Di7wUbvax3IehI9m10fjblARmI2PwwsI9KsJyvESBKOTTg6qWRqow/qxzTCMApHs6NF12znxbS8N+NUgZasIX2OMvRZLPs9/AA7rmdM=]

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
		return Text(`1 + 2 = 3`) // OBS: we will change the text here later.
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
		return Text(`1 + 2 = 3`)
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
		return Text(`${p.leftTerm} + ${p.rightTerm} = ${sum}`)
	}
}
```

So, if someone tries to navigate to this page the "ordinary" way, e.g. using a button:

```js
Button("Show sum").page(SumPage)
```

Then this page will display the text `5 + 2 = 7`. But, the one navigating to this page can also pass custom values to the arguments, and make this page display the sum of two other numbers by using *argument methods* on the `Page` class (works similar to how configuration methods works on GUI Components):

```js
Button("Show sum").page(SumPage.leftTerm(2).rightTerm(4))
```

By navigating to `SumPage` this way, it will show the text `2 + 4 = 6` instead. So this way, we have created a more general version of the page that can display the sum of any two numbers!

So, using this new knowledge, we can improve our first sample app using page arguments, and we would end up with this code instead:

::: tip Example

::bagawork-project[app&link&code=StartPage-SumPage&baga=eNqVU8FuozAQ/RV31AOoKAogpBQpB3robg+7Wm1yaLVUCgpDEhVsZBulFfK/14TgOLSJtAcke5h5894bTwtZXUPcwprlCDGsy0wI8usjqWuC7xJpLog+tylN5ZpjJnEhMy7/ZBt03EM0lRxlwymhuCfWz+6fSqkC5UHByhy5gPhfC7scYt8DmlVdv0MBeMCKQqB8hng6nF/0WXl9fnDKxzWj+eMB73LZqwe1JnHWsOfw1F/O1BrSRnF3sST/aHZjsX/ZXjh9JJUPjZSMOqvFlu2JaCrCCuKTOxKs3EnHw1k0VQfpetcqQl0RjSomJRZyibxyQnfCd5ttf4nc61AzDeVfhJrZUL6BOk3Mg3ft0jTy4APi8D60xnDFxb7NVw/1UBK+aSqkUhgba0OHzIk/xAwtHQyOdL4bgn4DQh7EzomFdEcsiLNxLTUrZ3XbnpKVzu7uJl9prNtWY6rVyInwfnBiNjgR2U4EIycS8fZbv9Zkk+3oVzu6j9EHLBg/rZDRevXR9Sp+YlmyG0NyQEwKifw7wKOKIJr2KqZmP5ZY1aVudbYnYylPRZI3pfyP3bBoErlFjjeWo+pVfQIgIomO]

:::

::: warning Not needed?

Not all pages need to use arguments like this. In fact, it's often quite few pages that will use them. But for the few ones that benefit from using them, it's a very good idea to use them.

:::


## That's it!
Great work, now you know what page arguments are, and how you can use them 🥳 