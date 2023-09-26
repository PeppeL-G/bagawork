<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. App Constants
This tutorial will teach you what constants in programming are, and how you can create them in a Bagatell app.




## The problem
To understand the usefulness of constants, let's first go though an app that could benefit from using constants, but that doesn't use them. Such an app is the app shown below.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVN9v0zAQ/ldOfkqkLOpICyjiBXhgExqa6B6AdVI9+9JYSu3IudCVKv/77Pzo2ooWEEziIcmdz3f32d932TBelizdMGEkspSJglcVXOrMvC1LwAdCLStw9mamZ+QfYZETTolbuuYLDMIuQhapthquUNd+3S82XU7DmohlppBoK5bebpiSLD2PmOZL37ItxSJmsqxC+sLS0WB/dXZzF7HS1dvL7Ipdds4e8qH9Frp3DrB/qNUh6s9mVcUiV4W0qIMuNKMbVyQm9wrm/Y3Mw2gITksuMK7UDwxG8WjyFNjJmmKBgmCVc4K1qWHFNQEZcDAkLI1F4PempngexgVmFBxU33rvTVEv9U8QHm6c0buayOi+/xW3yrji/gKD1vHXEUbH0sO/7vgNC8mHjq3zux1318M99UTswRE9mURszdIkSZqoE8KLU0LY9n4mJcAZ9Gc9wtlOSrsRVAUcviuJBhZO+SBybrkgtNCBkXC/hk9Ke7QmhmmOPoXcp7RKC3SHMlnrX6xtXSB8VHohzTKe/2vZvDnbaqYfpxMEHmVsnCQtY+PX44Gx5OToDvp8Psb6efg1Y+3GP2XsAh1BzgaN6NC3c16Jeoe/a+Qi/3/5Grd8nb98Nfx0b3BZFu6g/ud71zwCw2E26g==]

As you can see in the app, the name of the app, `InfoApp`, is currently shown at the top of all the three pages. The problem with the current implementaiton of the app is that this name has been *hardcoded* in all the three different pages. Hardcoded means that the same value (`InfoApp` in this case) has been written in the source code at each placed it is used.

So, why is is bad to use hardcoded values like this? The main problem with hardcoded values is that they are hard to change in the future, since they need to be changed at multiple places. So if you would like to change the name of the app to `InformationApp` in the future, you would need to go to the source code for all three pages and change the name in each of them. This is managable now, since the app only consists of three pages, but imagine the app would be much bigger and consist of 150 pages, and you would need to change the name in all of them. That's a lot of boring work to do!




## The solution
Luckilly, there exists a solution to the problem of hardcoding values, namely to use constants instead. The idea is the constant value (in this case the name of the app, `InfoApp`) is only written at one place in your code, and then you refer to that value each time you want to use it.


### How to create app constants
Directly in your `App` class you can create constants that are accessible throughout your entire app, including in your `Page` classes. In the code below you find an example of how to create the following app constants:

* `APP_NAME` will have the string value `InfoApp`
* `CREATED_DATE` will have the string value `2023-09-15`

```js
class MyApp extends App{
	
	APP_NAME = `InfoApp`
	CREATED_DATE `2023-09-15`
	// You can create as many app constants as you want.
	
	// And then you have createStartPage() as usual...
	
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



### How to use constants
In Bagawork, everything you create in your `App` class (constants, variables and methods) are accessible in a special variable called `a` (short for *app*). To retrieve the value of a constant, you would simply write `a.THE_NAME_OF_THE_CONSTANT`, for example `a.APP_NAME`.

To display the name of the app on the `MenuPage` we had before, the following code were used:

```js
Text.text(`InfoApp`)
```

With the constants we have now, we can instead write:

```js
Text.text(a.APP_NAME)
```

When the computer executes this code, it will first retrieve the value for the `APP_NAME` constant from the object in the `a` variable, and it will get back the string value `InfoApp`, and pass that to the `Text.text()` method, which then will display that text. Easy as that!

However, for the `MarioPage` it is a little bit more complicated. To show the name of the app on the `MarioPage`, the following code were used before:

```js
Text.text(`InfoApp - Mario`)
```

If we would try to simply replace `InfoApp` with `a.APP_NAME`:

```js
Text.text(`a.APP_NAME - Mario`)
```

Then the `Text` component would display the text `a.APP_NAME - Mario`. That is, our constant has not been used at all. Remember, in JavaScript, when creating a string with two `` ` `` characters, all characters between them will be interpreted as text part of the string. But, in a string created with two `` ` `` characters, we can write `${SOMETHING}`, where we want the computer to replace that entire thing with the value we get from `SOMETHING`. So for the `MarioPage`, we would instead write:

```js
Text.text(`${a.APP_NAME} - Mario`)
```

And we can use the same strategy on the `ZeldaPage`.


### The final solution
So, here's the code for the app using constants, instead of harding the name of the app at multiple places.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVFuPk0AU/isnEx8gYUlXWjVEH6ox7sZ009h98NKNzA6HQgIzZDjYrYT/7nDrLbZqXBMfgHPm3Of7DhXjec78igkVIvOZSHlRwLWM1DTPAR8IZViAkaulXFLzTOfzrzfT2Vt4BUHvFww2oZETLohrmvMVWnYXRRqp1BJmKMvmvDmsu5ia1Q6LVBqiLpj/pWJJyPxLh0meNe20qZjDVBQVSB+ZPxrkT0au7xyWm3wHkV2y6045mGoovx2rUarD3t+VyXHXH9S6cEWcpKFGaXWmJd2aJC6Zl8Xd4UpsZ7Auci7QLZLvaI3c0WRn2IUFC0xREKxjTrBRJay5JCAFpo8QMqUR+L0qyQ1sN8WIrKPsW+2NSstM/qTFY8clvS6JlOzrz7hOlEne3KDVKs192M6pcPuvK37GNORDxVb53Yr75/YBfRz2YJCeTBy2Yb7nebXTMeHpOSZsaz8yFYIn1Y4NNVxAP/EJ5PYCW0dICuDwLQlRwcosAIiYay4INXQthXC/gZtENj0rFxYxNiFkPrlOpEAzmopa/WqjyxThfSJXocrc4LHJ8/Jiy5x+q87AeBK3see1uI1fjAfcvLMbPLD0X+PW78avcWsd/xS3KzQwGRkkopmh3flClHsozpGL+P9Fbdyidvns+fAHvsUsT82gzZ/4rv4BwE1Cqg==]



## That's it!
Great work, now you have a basic understanding of what Bagawork is 🥳 Next tutorial will be about using pages in Bagawork, which are the fundamental components all Bagawork apps consist of.