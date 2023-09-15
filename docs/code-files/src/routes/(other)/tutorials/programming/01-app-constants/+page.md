<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. App Constants
This tutorial will teach you what constants in programming are, and how you can create them in a Bagatell app.




## The problem
To understand the usefulness of constants, let's first go though an app that could benefit from using constants, but that doesn't use them. Such an app is the app shown below.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNVE1v2zAM/SuETjbgGmmdbIPRy9pDWwwdiqWHfaSAVZlODNiSIdFLs8D/fZIVp02ABN3Www6GSUrkI/WetGa8aVi6ZkLlyFImKm4M3MhCfWwawCdCmRuw9nomZ+Q+oZETTolruuNzDEK/Qhqp1RJuUbYu7oKdz+lYF7FCVTlqw9Ifa1bmLD2NmOS1g+xLsYipojBIX1k6Guxv1u4eItbYejuZvtiNd3Y6H+C3rTtnr/erttzv+otamsBHZnRvc4NscwZZGA3xacMFxqb8hcEoHk2eF3zCFCsUBMsFJ1ipFpZcEpACi5lDrTQCf1QtxVkYV1hQsFd4612qqq3lczv76zO6aImUDLJbrktly7nzCXrHTRtGhzLDv8D4jlXOB4zeeS3Gy3i4I4eIPVnmJpOIrViaJEkXeWbPjjG7xX4zauEENtMdYMLv7vdAaYDDzzJHBXOrWxALrrkg1OCRc3hcwedSutZUDNMFuhSyv0aXUqCdQBW9f73SbYXwqZTzXNVx9u86OD/ZimAj/yP8HCRknCQ9IeMP44GQ5OhVGwT3loRsJH2UkH7PnxJyjfb8rQ0S0bba30sj2hf03CEXi/+JjnFPx+m798MbeI91U9nR3Fv40P0GsG0LKw==]

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
Text(`InfoApp`)
```

With  the constants we have now, we can instead write:

```js
Text(a.APP_NAME)
```

When the computer executes this code, it will first retrieve the value for the `APP_NAME` constant from the object in the `a` variable, and it will get back the string value `InfoApp`, and pass that to the `Text()` component, which then will display that text. Easy as that!

However, for the `MarioPage` it is a little bit more complicated. To show the name of the app on the `MarioPage`, the following code were used before:

```js
Text(`InfoApp - Mario`)
```

If we would try to simply replace `InfoApp` with `a.APP_NAME`:

```js
Text(`a.APP_NAME - Mario`)
```

Then the `Text()` component would display the text `a.APP_NAME - Mario`. That is, our constant has not been used at all. Remember, in JavaScript, when creating a string with two `` ` `` characters, all characters between them will be interpreted as text part of the string. But, in a string created with two `` ` `` characters, we can in the string write `${SOMETHING}`, where we want the computer to replace that entire thing with the value we get from `SOMETHING`. So for the `MarioPage`, we would instead write:

```js
Text(`${a.APP_NAME} - Mario`)
```

And we can use the same strategy on the `ZeldaPage`.


### The final solution
So, here's the code for the app using constants, instead of harding the name of the app at multiple places.

::bagawork-project[app&link&code=InfoApp-MenuPage-MarioPage-ZeldaPage&baga=eNrNlF1r2zAUhv/KQezCBtekdbIN012kZaxlpISlF/tImVX5ODHYkpHlpanxf58kx3ESSOjWXezCWEfSez70HKkmtChIWBMmYiQhYRktS7jliRgXBeCTQh6XoMf1nM+V+QS/wkRIdNx2SlF/PJ3+vBtPPsIHiDbSyKw1nYZJpApniko1pYteKlFVksMEeWXmdzQNaTySiCxGWZLwR03SmITnHuE0N2laV8QjIklKVF9JOOjG3/S4efBIof3tKVtnt62xV20XfluuMer93D9V6WHWX8SqdNqZubrXWqc/CdfrFmYFZeiX6TM6A38w6hesIpphhkzBakkVrEUFK8oVKAE6aAy5Pmagj6JSfuT6GSbKOXC8ta5FVuW8z+dwfa6uKqXZOdGEylRod+aAHGuYcl3vmNL9ixjfMYtpF8MaL42xO+/u9YNHnjS60cgjaxIGQdB4LdqLU2i3sV/NNnpT93gbOINNjUd4tBq7B9ISKPxKYxSw0O0LbEklZQoltPFjeFzDXcpNgsKH2RKNROlfIVPOUNchEmvfrGWVIXxO+SIWuR+9vhsuz7atsLkFJygdxTIMAotl+H7YYQlO3riu7f49lk17n8Ri9/wplhvUFPQYOKJO2N7RklU7kKZI2fJ/gjK0UM7fvusexHvMi0yXZh7Gh+Y3eV0f9w==]



## That's it!
Great work, now you have a basic understanding of what Bagawork is 🥳 Next tutorial will be about using pages in Bagawork, which are the fundamental components all Bagawork apps consist of.