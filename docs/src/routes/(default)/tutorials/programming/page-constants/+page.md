<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Page Constants
This tutorial will teach you what page constants in BagaWork are, and show you what we can use them for, and how.




## The problem
To understand the usefulness of page constants, let's first go though a page in app that could benefit from using a page constant, but that doesn't use it. Such a page is the page shown below.

::: tip

```js baga-show-editor-code
class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}

class InfoPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Info about Arthur`),
			Space,
			Text.text(`Arthur is a human.`).left(),
			Space,
			Text.text(`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.`).left(),
			Space,
			Text.text(`Ford Prefect is friends with Arthur, and he even saved Arthur's life once.`).left(),
			Space,
		)
	}
	
}
```

:::

As you can see, the name `Arthur` is written at multiple places. This works, but there are some drawbacks with writing the same value like this one over and over again at multiple different places like this:

* If we don't know how `Arthur` is spelled and spell it wrong (for example spell it as `Artur`), then when we later learn that we have spelled it wrong we need to correct the spelling at multiple places in our code, which is a lot of work
* If `Arthur` changes name in the future, we need to change the name at multiple places in our code, which is a lot of work

To repeatedly write the same value at multiple places in the code (as `Arthur` in the example above) is known as hardcoding a value.





## The solution
Luckily, there exists a solution to the problem of hardcoding values, namely to use constants instead. With a constant:

1. We would write the value (the name `Arthur`) at only one place in our code, where we place it in a constant
2. We would refer to that constant at each place in our code we need to use the name

This way, if we spell the name wrong, or if `Arthur` changes name in the future, we just need to change the name at one place in our code (where we created the constant and placed the name in it).


## How to create a page constant
Directly in your `Page` class you can create constants that are accessible within that `Page`. We call these constansts for *page constants*. In the code below you find an example of how to create the following page constants:

* `NAME` will have the string value `Arthur`
* `COUNTRY_NAME` will have the string value `Sweden`
* `BEST_DATE` will have the string value `2023-09-15`

```js
class InfoPage extends Page{
	
	NAME = `Arthur`
	COUNTRY_NAME = `Sweden`
	BEST_DATE = `2023-09-15`
	// You can create as many page constants as you want.
	
	// And then you have createGui() as usual.
	
}
```

::: tip Naming convetion

In Javascript, there exists different naming conventions for different type of values:

* Classes `AreNamedLikeThis`
* Methods `areNamedLikeThis()`
* Variables `areNamedLikeThis`
* Constants `ARE_NAMED_LIKE_THIS`

Although it's not strictly required to follow this naming convention, all good programmers do, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.

:::



## How to use constants
In BagaWork, everything you create in your `Page` class (constants, variables and methods) are accessible in a special variable called `p` (short for *page*). To retrieve the value of a constant, you would simply write `p.THE_NAME_OF_THE_CONSTANT`, for example `p.COUNTRY_NAME`.

To display the title on the `InfoPage` we had before, the following code were used:

```js
Text.text(`Info about Arthur`)
```

With the `NAME` constant we have now, we can instead write:

```js
Text.text(`Info about ${p.NAME}`)
```

This looks a bit strange, but let's go through how it works. Remember, in JavaScript, when creating a string with two `` ` `` characters, all characters between them will be interpreted as text part of the string. BUT, in a string created with two `` ` `` characters, we can also write `${SOMETHING}`, where we want the computer to replace that entire thing with the value we get from `SOMETHING`. So `${p.NAME}` will be replaced with `Arthur` in this case.

So, at all places in our code where `Arthur` is written, we will instead use `${p.NAME}`.

::: warning

In a `Page`, you can only access the `Page` constants in that page. For example, `PageA` cannot access the page constants in `PageB`. To create a constant all pages can access, you should instead create an `App` constant, which next tutorial is about.

:::


## The final solution
So, here's the code for the page using a page constant instead of harding the name at multiple places. Notice how easy it is to change name to `Alice` in the code; you just need to change it at the place where we create the `NAME` constant!

::: tip

```js baga-show-editor-code
class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}

class InfoPage extends Page{
	
	NAME = `Arthur`
	
	createGui(){
		return Rows.children(
			Text.text(`Info about ${p.NAME}`),
			Space,
			Text.text(`${p.NAME} is a human.`).left(),
			Space,
			Text.text(`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something ${p.NAME} learned.`).left(),
			Space,
			Text.text(`Ford Prefect is good friends with ${p.NAME}, and he even saved ${p.NAME}'s life once.`).left(),
			Space,
		)
	}
	
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1UmGL2kAQ/SvDUqjCEtRyUAKlxDs5LGhLT2iPetQlmWjoOht2J3hB8t+7Ma1nctpeP/RDwiYzb968t28vVJ6LcC9ik6AIRayVczArozwHfGSkxIE/75e05PqJLSrGO1aWP6k19vpNhS1yYQnu0DfwLHMuM1Q31NWqAVeikiI1OkHrRPhtL7JEhEMpSG1r5sNMIYVJU4f8VYSD3+d7f64epMj9vBayGTZtPloCnu1xFFN/HNVEt5P54vs8mk3gHaw++EUcjA0lq7bc2yLrCv1sdi6IN5lOLFKvKS154VkC9q/e6gaVhVf7PHjiqOSqH2hMudeXpwh5Bj6FjckReJM58Fu5WkKaUQKlKWCHWsvu8AA+Uoyg1iojCaawEBtiWwIhet0eF8C1/6NihpkhLHMkKiE11rMgJMgq0y54+Yo3BsgwaGQoHCRmR893evm0MTqGXeY26CTMurh+K0dSPIpwNPABKUX4ZnAMxwK3ufb31QpJKxeR+zFNo6TQfDkU/3jnd7mK8ZyiyOLhtg4h9R4rguHb96snK9rIa6OLLZ0h6DYueVwwG/pFMzcnI//Se4/uD83nza5kY+WoY+WEGG20xv9v5JeN4teHBFsfb7xsYUvrcHDS165cXaqMLmJGVxdYO2Y9VD8B6GfnMg==) contains a page that looks like this:

```js baga-show
class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}

class SecretMissionPage extends Page{
	
	AGENT_NAME = `James Bond`
	
	createGui(){
		return Rows.children(
			Text.text(`Dear ${p.AGENT_NAME},`).left(),
			Text,
			Text.text(`I hope this message find you well, ${p.AGENT_NAME}. Once again, our contry needs you. Contact Moneypenny for the details.`).left(),
			Text,
			Text.text(`Do not let us down, ${p.AGENT_NAME}.`).left(),
			Text,
			Text.text(`Best wishes, M`).left(),
		)
	}
	
}
```

As you can see, the page's GUI contains the name `James Bond` at multiple places. This name is currently stored in a page constant, and the GUI code refers to that page constant each needs to display the name. All seems good!

However, to improve security and anonymity among the agents, it has now been decided that one should never refer to the agents by name, but only by their code numbers, which for `James Bond` is `007`.

Change the code so the GUI displays `007` instead of `James Bond`. When you're done, it should look as shown below.

```js baga-show
class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}

class SecretMissionPage extends Page{
	
	AGENT_NAME = `007`
	
	createGui(){
		return Rows.children(
			Text.text(`Dear ${p.AGENT_NAME},`).left(),
			Text,
			Text.text(`I hope this message find you well, ${p.AGENT_NAME}. Once again, our country needs you. Contact Moneypenny for the details.`).left(),
			Text,
			Text.text(`Do not let us down, ${p.AGENT_NAME}.`).left(),
			Text,
			Text.text(`Best wishes, M`).left(),
		)
	}
	
}
```

:::


::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1UlFr2zAQ/iuHXpaAMElGYfhlOO0YGWQbS2ErTSHCPsdiyslIZ1IT/N8nx1sXu8nWh+3BRtLd9919391BqLIU8UGkNkMRi9Qo72FZJ2UJ+MhImYdwPqxpze2XOlSMK1aOP6stjsZdhB1y5QhWGBJ4qb3XltqENtp04EY0UuTWZOi8iO8PQmcinkpBatdWPnIKKWyee+RvIp78Ot+Fc/MgRRn4esiObNFdegKe9fEkpr0M1Lyv9FDHF7v3UVpokzmkURda820giTj8RpsbVA4+hM49zC1lcjOODOY8GsvTZHkGuYDClghcaA8B7tvmck0Z1LaCPRojT3gj+EQpgtoqTRJs5SC1xK4GQgxiAiSC6/CiUoalJaxLJKohty4UQMiQlTY+enl3NxbIMhhkqDxkdk+9dl5ONEfPsNe+QC9hOcSNe3shxaOIZ5Mw8FrErydPw77FXWnCgHpD78058d8XeZJVhv/ZkFelSvGcosThcUbHpQv2KoLpm7eb31b0kdfWVDs6U2CYuOZ5xWzpZ5mP9oTyL7l36P+QfN7sRnZWzgZWviNGl2zx/xv5tVD86ri8Lmw2Xrawp3U6OcnrR64uRWYXMbOrC1UHZj00PwB1bdj9) is the same as in Exercise 1, but no page constant is used, so `James Bond` has been hardcoded at multiple places in the GUI code!

Your task is to rewrite the code so `James Bond` is put in a page constant, and in the GUI code refer to that constant whenever it needs to display the name. When you have done that, change the value in the page constant to `007` instead. When you're done, it should look as shown below.

```js baga-show
class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}

class SecretMissionPage extends Page{
	
	AGENT_NAME = `007`
	
	createGui(){
		return Rows.children(
			Text.text(`Dear ${p.AGENT_NAME},`).left(),
			Text,
			Text.text(`I hope this message find you well, ${p.AGENT_NAME}. Once again, our country needs you. Contact Moneypenny for the details.`).left(),
			Text,
			Text.text(`Do not let us down, ${p.AGENT_NAME}.`).left(),
			Text,
			Text.text(`Best wishes, M`).left(),
		)
	}
	
}
```

:::




## That's it!
Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages. So, when you're ready, continue with the tutorial [Programming 2. App Constants](../app-constants/).