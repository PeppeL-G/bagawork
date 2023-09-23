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

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNpdUE1rAyEQ/Sv20UMCEppCoAg9pJe2h0IgOaQ0gZXd2bJgVNRAgvjfo1122+1BmRnnfRkhrYWIqE1DEKiV9J59XNfWMroE0o1nuY4HfQjlGP1CrXE0m/ejIBdanog9s2qtupqqMk3Ddu1IBtoG6cJGfv+CHIWz02x8+ANKSBytUQ05D/EV0TUQS46ikv39QMBh2tZT2EM8DPVnrtORw2a+CbIne++bScxRf4xamjh1/3ru/vve5fVFyNeseiOlDLuP/Teku2o+ycJxybJPK44rxONqORjc0cmqTF6MHtMNCAqH8w==]

:::

But the benefit with variables over constants is that they can also change value while the app is running. The syntax for storing a new value in an app variable that has already been created is the same as when creating a new one. If we for example would want to store the name `Bob` in `a.name` after it has been created, we would write `` a.name = `Bob` ``. Easy as that!

However, a very good question is *where* we should write the code `` a.name = `Bob` ``. And it all depends on *when* we want the app to change the name to `Bob`. Very often, it is when the user has interacted with the GUI, for example have clicked on a button, so let's go through how to make that happen.

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

The methods in the example above is named `setNameToBob()`, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so `setNameToBob()` is a very good name in this case, since that's precisely what the code in the method does.

To tell the computer that the code in the method `setNameToBob()` should be executed when the user clicks on a button, we need to call the configuration method `handler()` on the button, and pass it the method as an argument (i.e. write `a.setNameToBob` between the parentheses):

```js
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${a.name}!`),
			Button.text(`Change name to Bob`).handler(a.setNameToBob)
		)
	}
	
}
```




### The final solution
So, here's all the code for the app using an app variable.

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNptkE1LxDAQhv9KHDy0EIorLEjBw9aDelBEe1DchcZ26haySUlT3CXkvzvZ2roVDwnz9c7H40C0LaQOSl0hpFBK0XXs4bBqW4Z7i6rqGNlurdY2PK0yrLXBKB5CViRK7JBds2IlmxKLEPVjdYf2kbK5zvTHPwqKzutLg8LiixXGPonP3yEGbW8UmxInIg+eQ61lhaaD9N1BU0G64BBm0D1HCXDQdU3LvEJ6MdpvZPsNh5b6zZRDs/vBmWGZ5k9oguPm29/2zd+9n/VXl5TbRlYGVTSk1janJomlLyruUErNzt2Axp8VMR+rst4S9J+6m61QNP3Iz2oW+MUJxSqJJhLJKe6xQzxjxWFPZ10tORwgvVwuRgA57lpJywcQG/8Nppu8jA==]




## That's it!
Congratulation, now you know how to use app variables too! 🥳 But pages can have their own constants and variables too, let's take a look at how those works next.