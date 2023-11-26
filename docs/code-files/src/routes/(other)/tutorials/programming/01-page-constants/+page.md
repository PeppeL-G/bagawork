<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Page Constants
This tutorial will teach you what page constants in Bagawork are, and show you what we can use them for, and how.




## The problem
To understand the usefulness of page constants, let's first go though a page in app that could benefit from using a page constant, but that doesn't use it. Such a page is the page shown below.

::bagawork-project[app&link&code=InfoPage&baga=eNrFVG2L00AQ/ivDfjGBEPpCQfJFcnJKQeT0euhhD7oms83iZjfsTto7S/+7m6ZVUxOtfvFDwszuzDMvz5PsGK8qluxYZnJkCcsUdw7mWpi0qgAfCXXuwNu7pV5S82QWOeEtcUs3fI1B2N6QRaqtPqQ2583hvs3Zs33EhFE5WseSTzsmc5aMI6Z52ZQ8QLGIGSEc0keWjE72vbf3DxGrPF4nswWbt84vnTflv7feOGe9v67ledfvzdbFWSFVblEH7dWSFh4kJv8KVg0u8M+mJkgtFbVdhdEp7LbiGUY9SW0kSAccirrkOl6FsUJBwVly7ORXDEbxaBb24SwKBK7dFi2QAfLekt0pkqUfBt7V6EgaDUbAGykwOgTcabnx6/Ye1zlce/uJCqnXSwZb7sCZEg/+cRpQyK3G/B8bfGVsDjcWBWbUjLs2JgdhpWcAtpKKY5W2Gd8dblCD4xvMjzfPHCjf+1D5oxd2RBWxR8//bBaxJ5ZMp9OTUhZYVspvpqOYjkhS92Uu0rxWNCwVo69QGPtD3z/V/msh/UYhCE+mhoOePXFcw/j5i0FtvTSqLnVPgfPAJV3V5Gc4lnlr/GKb3QS6ViqMLky7R3dZXthDULPCVBDavg02v4SWm8kZN9fap6Rr/N/MfCg4eVV6ciz46sOcdDY2HvUvrBs0uyBocgnSZABp6KP5EycP+2+lnDB4]

As you can see on the page, the name `Arthur` is written at multiple places. This works, but there are some drawbacks with writing the same value over and over again at multiple different places like this:

* If we don't know how `Arthur` is spelled and spell it wrong (for example spell it as `Artur`), then when we later learn that we have spelled it wrong we need to correct the spelling at multiple places in our code, which is a lot of work
* If `Arthur` changes name in the future, we need to change the name at multiple places in our code, which is a lot of work

To repeatedly write the same value at multiple places in the code (as `Arthur` in the example above) is known as hardcoding values.





## The solution
Luckilly, there exists a solution to the problem of hardcoding values, namely to use constants instead. With a constant:

1. We would write the value (the name `Arthur`) at one place in our code, and place it in a constant
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

Although it's not strictly required to follow this naming convention, all good programmers do follow it, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.

:::



## How to use constants
In Bagawork, everything you create in your `Page` class (constants, variables and methods) are accessible in a special variable called `p` (short for *page*). To retrieve the value of a constant, you would simply write `p.THE_NAME_OF_THE_CONSTANT`, for example `p.COUNTRY_NAME`.

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

In a `Page`, you can only access the `Page` constants created on that page. For example, `PageA` cannnot access the page constants in `PageB`. To create a constant all pages can access, you should instead create an `App` constant, which next tutorial is about.

:::


## The final solution
So, here's the code for the page using a constant, instead of harding the name at multiple places. Notice how easy it is to change name to `Alice` in the code; you just need to change it at the place where we create the `NAME` constant!

::bagawork-project[app&link&code=InfoPage&baga=eNrFVG2Lm0AQ/ivDUqiCSF4IFKEUr6Ql0B7XXo72qAfZxjEu1V3ZHZPLBf9713hJaqo07Zd+UGbceebtedYd40XBgh1bqhhZwJYZNwZmMlFhUQA+EsrYgLV3kYyofpYaOeEtcU03fIWO25yQRiq13EPr7/XHqsFUrPJYorIYtWHBtx0TMQuGHpM8r0vuUzGPqSQxSF9ZMDjY99auHjxW2HwtZJNs1ji/dV6XP7ZeO8fer8OPU3gNi1BTWupFe6T3pTgf5rPaGH+ZiizWKJ3mKKK5ze2TfTmLuhzw76okeLEr/Dp/tXC9Q+RtwZfodeCOwSAMcEjLnEt/4foZJuSc4X0jntAZ+IOJ25VqniJwaTaogRSQ9SJ2l5HI7UjwqURDQklQCXwQCXr7gDsp1pYL63EZw9TaW0qFXEUMNtyAUTnu/dNMkCHXEuN/7PGd0jHcaExwSfXEK6ViSLSwDMFGUHoq1LRke8Q1SjB8jfHp8KWBzA7R18Sz57ak57FHq5LJxGNbFozH44Oe5pgXmV1RS1ctKYXmxywJ4zKjfkEpeYWJ0qdb8Evtv9ZVr1pCjbBVJexVbxnkEoav3vTq7K3Kylx2FDgPjOiqJDvDc5lrZRdb78aRZZa53oWwezSX4dwOguoVhgmh7tpg/eNouBmdcTOVFhKu8H8z8yXlZFVpydFgq/dz0trYcNC9sHbQ5IKg0SWZRj2Z+i7Nnzh5qH4Cggs6eQ==]



## That's it!
Great work, now you have a basic understanding of what a page constant in Bagawork is 🥳 Next tutorial will be about using app constants in Bagawork, which are constants you can access from all your pages.