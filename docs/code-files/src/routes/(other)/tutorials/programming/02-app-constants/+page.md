<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. App Constants
This tutorial will teach you what constants in programming are, and how you can create them in a Bagawork app.




## App constants vs page constants
In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it's better to use an *app constant* instead, since all different pages have access to all app constants.

Below we have an example of an app that uses the same hardcoded value (the name of the app, `InfoApp`) at multiple diffrefent pages, including on multiple different pages.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVN9v0zAQ/ldOfkqkLOpICyjiBXhgExqa6B6AdVI9+9JYSu3IudCVKv/77Pzo2ooWEEziIcmdz3f32d932TBelizdMGEkspSJglcVXOrMvC1LwAdCLStw9mamZ+QfYZETTolbuuYLDMIuQhapthquUNd+3S82XU7DmohlppBoK5bebpiSLD2PmOZL37ItxSJmsqxC+sLS0WB/dXZzF7HS1dvL7Ipdds4e8qH9Frp3DrB/qNUh6s9mVcUiV4W0qIMuNKMbVyQm9wrm/Y3Mw2gITksuMK7UDwxG8WjyFNjJmmKBgmCVc4K1qWHFNQEZcDAkLI1F4PempngexgVmFBxU33rvTVEv9U8QHm6c0buayOi+/xW3yrji/gKD1vHXEUbH0sO/7vgNC8mHjq3zux1318M99UTswRE9mURszdIkSZqoE8KLU0LY9n4mJcAZ9Gc9wtlOSrsRVAUcviuJBhZO+SBybrkgtNCBkXC/hk9Ke7QmhmmOPoXcp7RKC3SHMlnrX6xtXSB8VHohzTKe/2vZvDnbaqYfpxMEHmVsnCQtY+PX44Gx5OToDvp8Psb6efg1Y+3GP2XsAh1BzgaN6NC3c16Jeoe/a+Qi/3/5Grd8nb98Nfx0b3BZFu6g/ud71zwCw2E26g==]

This works, but changing the name of the app in the future (for example to `Information App`) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.



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
In Bagawork, everything you create in your `App` class (constants, variables and methods) are accessible in a special variable called `a` (short for *app*). To retrieve the value of a constant, you would simply write `a.THE_NAME_OF_THE_CONSTANT`, for example `a.APP_NAME`.

To display the name of the app on the `MenuPage` we had before, the following code were used:

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

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVFuPk0AU/isnEx8gYUlXWjVEH6ox7sZ009h98NKNzA6HQgIzZDjYrYT/7nDrLbZqXBMfgHPm3Of7DhXjec78igkVIvOZSHlRwLWM1DTPAR8IZViAkaulXFLzTOfzrzfT2Vt4BUHvFww2oZETLohrmvMVWnYXRRqp1BJmKMvmvDmsu5ia1Q6LVBqiLpj/pWJJyPxLh0meNe20qZjDVBQVSB+ZPxrkT0au7xyWm3wHkV2y6045mGoovx2rUarD3t+VyXHXH9S6cEWcpKFGaXWmJd2aJC6Zl8Xd4UpsZ7Auci7QLZLvaI3c0WRn2IUFC0xREKxjTrBRJay5JCAFpo8QMqUR+L0qyQ1sN8WIrKPsW+2NSstM/qTFY8clvS6JlOzrz7hOlEne3KDVKs192M6pcPuvK37GNORDxVb53Yr75/YBfRz2YJCeTBy2Yb7nebXTMeHpOSZsaz8yFYIn1Y4NNVxAP/EJ5PYCW0dICuDwLQlRwcosAIiYay4INXQthXC/gZtENj0rFxYxNiFkPrlOpEAzmopa/WqjyxThfSJXocrc4LHJ8/Jiy5x+q87AeBK3see1uI1fjAfcvLMbPLD0X+PW78avcWsd/xS3KzQwGRkkopmh3flClHsozpGL+P9Fbdyidvns+fAHvsUsT82gzZ/4rv4BwE1Cqg==]



## That's it!
Great work, now you also now how to use app constants in Bagawork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.