<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 7. `onBefore()`
This tutorial will teach you the methods `App.onBefore()` and `Page.onBefore()`.


## `App.onBefore()`
Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your `App` class that is named `onBefore()`.

For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 8
	
}
```

But, this is not a good way to do it, because if you want to change `X` or `Y` to another number in the future, then you must also change `SUM` to another number. It would be better if `SUM` could be computed automatically, so one would just need to change `X` or `Y`.

::: warning What about using the a variable?

You might think one can use the special `a` variable to achieve this, like this:

```js
class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = a.X + a.Y
	
}
```

And that is very good thinking of you, but it does unfortuantelly not work; the special `a` variable can only be used inside methods in your `App` class, and can't be used when your app constants/variables are initialized.

:::

So, the proper solution to this problem is to use the `onBefore()` method in your `App` class. When the special `a` variable is created, it will contain all your app constants/variables/methods, and then your `App.onBefore()` method will be called on it (if you have one), in which you can set all constants/variables to their correct values.

::: tip Example

Example of an app that uses `App.onBefore()` to correctly initialize a constant.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNpdkMFqwzAMhl9FiMFaFtJsZZfADttl7FAYtGMNa6FuorSGxA62urYEv/vshaTrDjafZEn+9bcomgbTFnNdEKaYV8JamJ2fmwboxKQKC57blVpxOEt4gscAmYdpgPnHzGMCkwl87mW+B6kkS1GBOtRbMnAk2MlvAtYQSgtNVt0y1IKZTARWqpxAMhxlVcG2K1Y+YSHXxlDO/SCpQKsXKrWh0TjuBV1SnUYWcadIxEu483cW0q4vzw0JpjkLw+9id+kyxAejYHj40+TQRVjqqiBjMf1qURaY3keoRB0c+23BCHVZWuIlpknPmWe3jrDx8646u2FvXXBl/PD/YH4I2mv1rwf5X/fCl8fsr9HmpvWbO796gMx5JwJ4T9xmfLVVhCdMHxIv94zpNBmkLqhuKv9NkLx2P0yeueU=]

:::





## `Page.onBefore()`
The special method `onBefore()` in your `Page` classes works very similar to `App.onBefore()`: `Page.onBefore()` will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.

::: tip Example

Example of an app that uses `Page.onBefore()` to update how many times the user has visited that page.

::bagawork-project[app&link&code=StartPage-Page2&baga=eNrFU+9rnEAQ/VeWodCTLqK2gSCEYkoJ+dAfNCHt0QvcRsecRHdld01ziP97djXa03rhSj7kg7LrzLx5895YAytLCGuIRYIQQpwzpciXbVSWBB808kQRc65XfKXtE0tkGi80k/o7u8WF00W0RF1JToaA/dp0RQ00FFKRJygVhL9ryBIIfQqcFbZjWwIURJoq1L8g9Prz0pybawqlwRtVdmDn3WVEfOg/kLeXgT2vihuU39KrTGVakRPi9RHBTzEV8u9ApTtJfndC/J2peinOqmwqwg/xR7nxJssTiXzRhVb60jBytXkt1ktRkQ27R3JvoTEhepMpYsckb+pp44borEDlrh3aQ51W2hB+AjsTRIt2zGDtuBZk0V76dGdkBYUHCAPPaLyF8L3nNbRTNXhO1RZvXtG9Ikw53rD4zhIdHOrJDh9miB598J+IBv0iXGJR5qblaCFGbCN1d55GSZU/swj/2P0SZy9KFiOd8TmSSLbG61ZYYzLjxD/+uGPkuPKTyKuCzzSYJk424KvoteRVnjv0wLIlqsPq5jbJShilGuWcgvaPH9Zq5M1nbkqiW3xtZ35umH6rrDmSmO77PRkp5nvzgo2Tjg5ICg5BCvYg7TL8H0+um0e+KiPj]

:::





## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

[This BagaWork project](/editor#eNq9kttKw0AQhl9lnRtbWEobLZTclCiiRTxgC1psoUsyaYPJbtidYEvIu5s0NjahVW/0YsNM5p/Tt5uCiGOwU3CVh2CDGwpj2N3GiWOGa0LpGZbb6UzOqDiuRkE4JqHpUSyx1S4jpJESLVkVKP5mZVIGGQdfhR5qA/ZrCoEHdo+DFFHRcZsCHJTvG6QXsLs7e5rb2ZxDnNerZZbFRqVTG7zqXw1fOI3pr5OgOfeTejcddxWEnkbZKkMzGsfCRb7zJnnJDuWf1uIGw1BxJgMXGSkWIRLbqORk0T6oDr6kBrFQMrEUgdzX13tdJERKfuY/3Fa6do0rhzXY590zDhuwrYG1gzXBKA7zRWvQapwc8zbyHS8J/wGWo8uVt5fGaCUk6w2GR1e/VGESyQMNmsIGpXu1V/IH7RTNN+LDsDNeorQaKK8koXaW+Pcgn1eCTk3BUufvB4e/ez297p6uHukfi1hHc6z+ka4NWPPsA0PKkeM=) contains a page that should display the message `Hello, nice to meet you!` the first time the user comes to the page, and all times after that, it should display the message `Hi, nice to see you again!`. Currently, it always displays both of the messages. Change the code so it works as it should, as shown below.

::bagawork-project[app&baga=eNq1Uu9LwzAQ/VfifXHDMNaqMIpDqogO8Qc60OGEhfa6FbskJCk6Rv93U2vXtaz6RT+05HJ37969lzUwKcFbQyBCBA+ChGlNbla+lAQ/DPJQE3teT/nU5F+gkBl8NEyZezbHTrfIGIUmVZxsEvltVjRlkFGIRBKi0uC9rCEOwXMocLbMJ361AAURRRrNM3j98jyx5+yVgrR4tc4CbFQENeKb+RvyeVCxFyk3qMiQ9Msrwc8wEqraRPbKqoMhcbb2KJe/TOPm2g/iXfeCRZyECnmnSE3No2QB0jIaW0Y9Y3+d2RUmiaCExwESI8gS0ZCVSPdm3d4bohxFnYrE0JLo7gSJKwSNmAMQNmcx34JxyAnZQFUodWJnqbEqfKPeXc/Kum7NQwof4B31DymswHMHbmnMGJcysarUDKp54uu3UeSHafKTMX+krK8KIb4eCDELxokzOJ21rX4uknTJdwxoFjZUuhVbkL/UTlD/ULxb7IwWUroNKS9yH/05/r+QTwtm9nWupbKvCtslrO3q9Lfq6pnjtozb2uMet0xtiPWafQK3Frdm]

This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.

::::hint

Use a counter in a page variable to keep track of how many times the user has seen the page. Let it start on `0`, and increment it by `1` each time `Page.onBefore()` runs. Then conditionally show the texts depending on if it has the value `1` or not.

::::

:::




## That's it!
Wow, wow, wow... Now you know about `onBefore()` too! 🥳 Excellent work, soon you'll be fully experienced programmer. Just 999 more things to learn before that 😉