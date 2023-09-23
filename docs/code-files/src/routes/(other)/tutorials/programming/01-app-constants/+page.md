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


### How to create constants
In Bagawork, when the user starts your app, the method `App.onBefore()` will be called. So in this method, you can write code that should be executed directly when the app starts, and here we can write code that creates the constants we need to use in the app.

In Bagawork, there exists a special variable called `a`, short for `app`. This variable stores an object, and in that object we can store our constant values. Each constant value also needs to be associated with a name, so we can distinguish the constants from each other.

In the code below you find an example of how to create the following constants:

* `a.APP_NAME` will have the string value `InfoApp`
* `a.CREATED_DATE` will have the string value `2023-09-15`

```js
class MyApp extends App{
	onBefore(){
		a.APP_NAME = `InfoApp`
		a.CREATED_DATE `2023-09-15`
		// You can create as many constants as you want.
	}
	// And then you have createStartPage() as usual...
}
```

::: tip Naming convetion

In Javascript, there exists different naming conventions for different type of values:

* Classes `AreNamedLikeThis`
* Methods `areNamedLikeThis()`
* Constants `ARE_NAMED_LIKE_THIS`

Although it's not strictly required to follow this naming convention, all good programmers do follow it, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.

:::



### How to use constants
In this case, the constants are stored in the object in the `a` variable, so to retrieve the value of a constant, we simply write `a.THE_NAME_OF_THE_CONSTANT`, for example `a.APP_NAME`.

To display the name of the app on the `MenuPage`, the following code were used before:

```js
Text.text(`InfoApp`)
```

With  the constants we have now, we can instead write:

```js
Text.text(a.APP_NAME)
```

When the computer executes this code, it will first retrieve the value for the `APP_NAME` constant from the object in the `a` variable, and it will get back the string value `InfoApp`, and pass that to the `Text.text()` component, which then will display that text. Easy as that!

However, for the `MarioPage` it is a little bit more complicated. To show the name of the app on the `MarioPage`, the following code were used before:

```js
Text.text(`InfoApp - Mario`)
```

If we would try to simply replace `InfoApp` with `a.APP_NAME`:

```js
Text.text(`a.APP_NAME - Mario`)
```

Then the `Text.text()` component would display the text `a.APP_NAME - Mario`. That is, our constant has not been used at all. Remember, in JavaScript, when creating a string with two `` ` `` characters, all characters between them will be interpreted as text part of the string. But, in a string created with two `` ` `` characters, we can in the string write `${SOMETHING}`, where we want the computer to replace that entire thing with the value we get from `SOMETHING`. So for the `MarioPage`, we would instead write:

```js
Text.text(`${a.APP_NAME} - Mario`)
```

And we can use the same strategy on the `ZeldaPage`.


### The final solution
So, here's the code for the app using constants, instead of harding the name of the app at multiple places.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVG1v0zAQ/isniw+JlEUdaWGK4EOHEJtQp4ruA4NOxHMujaXEjhyHrovy33HemraiBcSQ+JDkzufn3p67lIRmGfFLwmSIxCcsoXkO1yKS0ywDfNQowhyMXC7FUtePFJcYSYWW3R5p6k7n828309l7eAtBBw1qW9VjmEKqcaGp0nO6GqAKdaEEzFAU9fkOpiKVQyKZhKhy4n8tCQ+Jf+4QQdM6zcYVcYiMohz1Z+KPevnOyNW9QzLjbw/ZOrtulb1q+/Dbcmul3M/9Q8EPs/4k17nLYp6ECoXVmpb61jhxtXlZQ19sp7cuMsrQzfkTWiN3NBkMAyxYYIJMwzqmGjaygDUVGrQEk0cIqek80AdZaDew3QQjbR1432rvZFKk4icpHl5c6stCG167+DOquDTO6w5ajVL3w3aOwe2/jvgFk5D2ERvldyPuntt74+OQR8P0ZOKQDfE9z6ucdhJenpqEbexnHoXgRTlMQwVn0FV8hLkdYHMReA4UvvMQJazMAgCLqaJMo4I2pRAeNnDDRZ2zdGERYw3R5pMpLhia0mTU6FcbVSQIH7lYhTJ1g+cenjdn28nptuoEjUd5G3tew9v4Ytzz5p3c4H5K/zVv3W78mrfm4p/ydoWGJiODQDQ1NDufs2KHxTlSFv+/rI0b1s5fve7/wLeYZokptP4T31c/AFqcS7Y=]



## That's it!
Great work, now you have a basic understanding of what Bagawork is 🥳 Next tutorial will be about using pages in Bagawork, which are the fundamental components all Bagawork apps consist of.