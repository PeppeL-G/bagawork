<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. App Variables
This tutorial will teach you what variables are in programming, and how you can create them in a Bagatell app.



## Why app variables are needed
An app that only display static data (that is, the data/text shown in the app is the same all the time, so the GUI in each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.

For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in then user's playlist in an app variable.




### How to create an app variable
As you should know, the `App.onBefore()` method will be called directly when the user starts your app. In this method we could create app constants, and in the very same way we can create app variables. The syntax (the code we need to write) to create an app variable is the same syntax we use to create app constants, but we use `thisNamingConvention` for app variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following app variables:

* `a.name` will have the string value `Alice`
* `a.lastVisit` will have the string value `2023-09-16`

```js
class MyApp extends App{
	onBefore(){
		a.name = `Alice`
		a.lastVisit `2023-09-16`
		// You can create as many app variables as you want...
	}
	// And then you have createStartPage() as usual...
}
```



### How to use app variables
The syntax for obtaining the value stored in a variable is the same as for constants, i.e. you would write `a.name` to obtain the value for the app variable `name` (which would be `Alice` in this case).

::: tip Example

Example of an app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNpdUMtKAzEU/ZV4cNFCECsUJOCi3agLodAuKrYwYeaODKRJSFJoCfn3Jg4zOi4C5z7O4yZCWgsRUZuGIFAr6T37uK6sZXQJpBvPMo4HfQjlGb2m1jiazftWkA9anoi9sGqlupqq0k3Ddu1IBtoG6cJGfv+SHIWz02wc/CElJI7WqIach/iK6BqIBUdxyfl+KOAwbesp7CEeB/yZcTpy2Kw3YfZi730xOXP0H08tRZymfz13/3Pv8vqseiOlDLuP/Q+ku2o+OYPjkh2flxxXiKflYsi2o5NVWbdkPKYbTguGAA==]

:::

But the benefit with variables over constants is that they can also change value while the app is running. The syntax for storing a new value in an app variable that has already been created is the same as when creating a new one. If we for exmaple would want to store the name `Bob` in `a.name` after it has been created, we would write `` a.name = `Bob` ``. Easy as that!

However, a very good question is *where* we should write the code `` a.name = `Bob` ``. And it all depends on *when* we want the app to change the name to `Bob`. Very often, it is when the user has interacted with the GUI, for example have clicked on a button, so let's go thorugh how to make that happen.

In your own `App` class, you can not only implement pre-defined methods, but also create your own ones (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a `Button`, that code needs to be in a method. So your `App` class can for example look like this:

```js
class MyApp extends App{
	onBefore(){
		a.name = `Alice`
	}
	setNameToBob(){
		a.name = `Bob`
	}
}
```

The methods in the example above is named `setNameToBob()`, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so `setNameToBob()` is a very good name, since that's precisely what the code in the method does.

To tell the computer that the code in the method `setNameToBob()` should be executed when the user clicks on a button, we need to call the configuration method `handler()` on the button, and pass it the method as an argument (i.e. write `a.setNameToBob` between the parentheses):

```js
class StartPage extends Page{
	
	createGui(){
		return Rows(
			Text(`Hello ${a.name}!`),
			Button(`Change name to Bob`).handler(a.setNameToBob)
		)
	}
	
}
```




### The final solution
So, here's all the code for the app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNptUMFKxDAQ/ZU4eGghFFdYkIKHrQf1oIj2oNiFxnaqhWwS0hR3Kfl3J1tat+IhMHkzb+a9N4AwBtIBKl0jpFBJ0XXs4bAxhuHeoao7RvVQqMKFp1WGjbYYxSPkRKLEDtk1KzeyrbAMqJ+mO3SP1M11pj/+YRC6nK8sCocvTlj3JD5/j1h0vVVsbpyQPHgOjZY12g7S9wHaGtIVh3CD/BwpwEE3DYl5hfRiqt+o9lsOhvYtmOOy+/GziGW+P0cTPsNS/W3f/tX9rL+7aEQKlxM3Ku9QSs3OhzEMf1bGfBrIekcxR+XNl1B06hiW0yyEFSeE1RJtJJLTbCdyvAiGw548XK05HCC9XK8mtznujCSlwfXW/wB1ArUv]




## That's it!
Congratulation, now you know how to use app variables too! 🥳 But pages can have their own constants and variables too, let's take a look at how those works next.