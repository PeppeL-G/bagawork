<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 2. Page Variables and Methods
This tutorial will teach you what page variables are in BagaWork, and how you can create them and change them using page methods.



## Why page variables are needed
An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.

For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.




## How to create page variables
Instead of hardcoding values in the code, you in previous tutorials learned that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but with the different that after a page variable has been created an assigned its value, it can later store another value, for example when the user clicks on a `Button`.

Page variables are created the same way as page constants, but we use `thisNamingConvention` for app variables instead of `THIS_NAMING_CONVENTION` (which is only used for constants).

In the code below you find an example of how to create the following page variables:

* `name` will have the string value `Alice`
* `lastVisit` will have the string value `2023-09-16`

```js
class MyPage extends Page{
	
	name = `Alice`
	lastVisit = `2023-09-16`
	// You can create as many page variables as you want.
	
	// And then you have createGui() as usual.
	
}
```



## How to use page variables
You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write `p.theName`. For example, to obtain the value stored in the page variable `lastVisit`, we would write `p.lastVisit` (which would evaluate to the string `2023-09-16` in this case).

::: tip Example

Example of an app using a page variable.

::bagawork-project[app&link&code=StartPage&baga=eNrFUm1LwzAQ/ivxEFwhjHUwkIJIJ6L7oIgKOtygob1uxSwpSYqO0v9uYt1cxjbmJz+05Hp5Xu651sDKEqIaUpkhRJBypjW5W8ZlSfDToMg0sed6IibGPalCZvDJMGUe2Aw7QdsxCk2lBFk33NemBTXQUMglz1BpiN5qKDKIQgqCLZziNwQoyDzXaF4h6q3OY3tuphRKy+chW7JRW3jG1/pr865Yu3eS5IIkMS9STPyZbqpie5pnS9I19tVJbpFzSU7rsus4mpMk8Cak8GnNnA8oLCHqD8KV7WdclNySe/Y9x7F+H+VxVvEDtqUYYi7Vb9ob2gfsP8oP3U3nBc8Uis4P0jyVLEW6qjZGjBWSpazId7jEzJkg4fllEtDdyCvJq4XYIbB9cWKGlbEz/MjcyyToumw6ouI8oEfCxqiPw606gReSFHFuUO1K0P2f7W76W7u5FhYSz/C/N/MyZ+ZMu+UoYtX378RLLOztDsy/NDjiUv8Ypv4epk2Hf9nJtPkCiJ+r9w==]

:::

But the benefit with variables over constants is that they can also change value while the app is running. If we would want to store the name `Bob` in the page variable `name` while the app is running we would write the code `` p.name = `Bob` ``. Easy as that!

However, a very good question is *where* we should write the code `` p.name = `Bob` ``. And it all depends on *when* we want the app to change the name to `Bob`. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let's go through how to make that happen.

In your own `Page` class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a `Button`, that code needs to be written in a method. So your `Page` class can for example look like this:

```js
class MyPage extends Page{
	
	name = `Alice`
	
	setNameToBob(){
		p.name = `Bob`
	}
	
	// And then you have createGui() as usual.
	
}
```

The method in the example above is named `setNameToBob()`, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so `setNameToBob()` is a very good name in this case, since that's precisely what the code in the method does.

To tell the computer that the code in the method `setNameToBob()` should be executed when the user clicks on a button, we need to call the configuration method `handler()` on the button, and pass it the method as an argument (i.e. write `p.setNameToBob` between the parentheses):

```js
class StartPage extends Page{
	
	name = `Alice`
	
	setNameToBob(){
		p.name = `Bob`
	}
	
	createGui(){
		return Rows.children(
			Text.text(`Hello ${p.name}!`),
			Button.text(`Change name to Bob`).handler(p.setNameToBob)
		)
	}
	
}
```

::: warning Note!

When passing a method as an argument (as we do when we use `Button.handler()`), you should not write the parentheses after the method name.

So the following is correct:

```js
Button.handler(p.setNameToBob)
```

And the following is incorrect:

```js
Button.handler(p.setNameToBob())
```

:::

::: tip Remember!

In the code above, we haven't told BagaWork which page the user should come to when the button is clicked (we haven't used the configuration method `page()` on the `Button`), so when the user clicks the button, the current page will be reloaded (after the click handler (`setNameToBob`) has been executed).

:::

::: warning

In a `Page`, you can only access the `Page` constants/variables/methods created on that page. For example, `PageA` cannnot access the page constants/variables/methods in `PageB`. To create a constant/variable/methos all pages can access, you should instead create an `App` constant/variable/method (learn more about this in next tutorial).

:::



### The final solution
So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.

::bagawork-project[app&link&code=StartPage&baga=eNrFU2Fr2zAQ/SuaGMwGYZpAoBhGccrY+mFlrIGtLIVo9rkJUyQhyazB+L/vFM1ulbrDYx/2wUa6u/fu7j27pVxrmre0VBXQnJaCW0s+HgqtCTw4kJUleG7Xcu38UxrgDm4cN+4Tv4ckDRlnwDVGkiHho10AdbRjtFaiAmNp/q2lu4rmM0Yl3/uORwhlVNW1BfeV5mf9+RbP3R2jGvkiZCC7Cpdo8KH/MLy/DNP7luQt2RRiV8Kmj2Kra0ys1DE8rKSz5+XdM8xSfR9BYDSuD7q9b3anin1WP21WbneiMiCTkFq7FY6fOXwlmw8ghCKv20DevdqkrK9aNs4p+bvucssl7n2cwCkSZk4zjFYCTKKzeM1pLH6PUQ5MpIEgjaxm9AFdOV8weqD5fDHr/VvBXgtUIPIxsq6wP67qomrEH/xTcgm1Mo8e/YvGN5qXwEYULwyQg2rI8SsjDrcns/OLJ7rHyEslmr0caXBaeCL1tUJpvTaJbIRI2UTYLdhpuD6TRiIpWdQOvRxR0P+owZv5iTfvJEKKe/jfznzZcvfGenMMwe4vexIpNjsbFywuWkwomk9hmr/A9HTCv/HkrvsFnxoNMQ==]




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.


::: exercise Exercise 1

Open [this BagaWork project](/editor#eNq9VNtKw0AQ/ZVlXmwhiCl4IS8SRbQPilhBixW6JNMLbnfD7sS2lPyB/+Av+gluGlu6MUGxKiFhNrPnzGTO2SyAJwkEC4hUjBBAJLgx7HIeJgnDGaGMDbPxoid7lN+RRk7YIa7pmg+x0SwypJFSLdk6kb/NClAGmQcDJWLUBoKHBYxjCHwPJJ/kFZcQ8EANBgbpHoK9Vdy1cfboQWL5HGRB1i4WTuPr+uvm80Wp+/N0XO77Rk3NbjQai1ijbBSpHnUSHqG3Wt1ayl2yj0b/Qk3ZhMs5M7aeYVOVipjNVcqG42dkJ3zI75R+Ou43vWqqUyXSiayoWN7Yo+rO8uskJVLyo6O315fXjXJVTBWIn6O2Q26P/sSwGbtcdSJs6HmaajtdElZQFBgRxgGrEa/pONuDGQQH/qEHcwhaR/7Krrc4SYS1mmNbx6mheWoPwjgV/2DXUOPSnctjw2jEJfOPfsWdjkZXql+vQmlvF03/a8mapd9IMcpWaZRnklCHQ/z7Qd6NOO2YfJaaWf76ETrf6u9t7HMz+3WZVi2mtf8tZ2aP2TvPbjh+) and change the code in it to make the app function as shown below.

::bagawork-project[app&baga=eNq1Ve1q2zAUfRUhBovBhNpttmIYwy1j64+NsRba0hQsrJsPqkhGkpcG4zfYO/QV9wiT7dqzPGsNa0dwkHx1zr26OjouMMkyHBU4FRRwhFNGlEKfd3GWIbjXwKlCZlzM+VxXTyqBaDjXROqvZAkTr4loCTqXHHWB6m3ZgEpc+nghGAWpcHRT4DXFUeBjTjZVxhqCfSwWCwX6CkcH7fjajMtbH2eGz0I2ZGfNxCq8y98VX0266pUJK/QOJT8ffjy0T2Lv7WO+Hu7qm9iqabpaMyqBT5rQXJ9nJAW/nV2YhFNt/ibJJ7FFG8J3qEm3FTmjaCdytFx/B3RCluRSyLv3ieePU50Klm/4SMbhwrker6z6neRaC/5YUb1Nb7oinDKQk2yqgEGqg6pdnt+HDROMEDnIwopM/RObg/HweYwO1qPnszqYZ38w98d2DtfZ92R0mktzqJoZHdX0QCP0qjDJqiylQz1e7+IZvf8+5k7TjwTtLUhGAM1RuhAu1OGTKBfyaC+kCz3bGz1kKI3t3OPoTfDWxzschcdBazcXsMmYMQPLdiynidXd2SKmOfuL3byUocQSav+obQ9pozsUHL+If1gy/yISt2AHa69BJU+r2xt8BppWhoNWfuAaZLyE/9/IyxXRr1XVS4kMv7uF1l6Dg946OzJzRUInJpztcXVNs27LXySB9UU=]

::::hint

Add one page variable to keep track of which the selected stars are (start with ` `` ` (empty string) or `` `🌟🌟🌟` ``). Then add 5 page methods (one click handler for each button) that changes the page variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the page variable in the last `Text` component.

::::

:::




## That's it!
Congratulation, now you know how to use page variables and page methods too! 🥳 But your `App` class can have its own variables and methods too, let's take a look at how those works next.