<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Page`
On this page you find the documentation for the `Page` class.



## Introduction
Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a button in it). After the user has interacted with the GUI on the page, the app will take the user to the next page and show the GUI of that one instead, and so on.

To add a page to your app, create your own class that extends the `Page` class, and override some methods there to give your own `Page` class the specific behavior you want it to have. You can name your own `Page` classes whatever you want, but they need to have unique names within your app.

::: tip Example

Example showing the basic structure of a simple app.

```js
class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}
```

```js
class StartPage extends Page{
	// Override methods here to give the StartPage
	// the specific behavior you want it to have.
}
```

```js
class MenuPage extends Page{
	// Override methods here to give the MenuPage
	// the specific behavior you want it to have.
}
```

```js
class GameOverPage extends Page{
	// Override methods here to give the GameOverPage
	// the specific behavior you want it to have.
}
```

:::




## The `p` variable
In BagaWork, you can use the special variable named `p`, short for *page*, to access the constants/variables/methods you have in your `Page` class. So, unlike the `a` variable, the `p` variable refers to different things in your different pages:

* In the `HelloPage`, you can use `p` to access the constants/variables/methods you have in the `HelloPage`
* In the `AboutPage`, you can use `p` to access the constants/variables/methods you have in the `AboutPage`
* Etc.

::: tip Example

Example of a page with:

* A page constant
* A page variable
* A page method

```js
class StartPage extends Page{
	
	THE_CONSTANT_NAME = "The constant value"
	
	theVariableName = "The variable value"
	
	theMethodName(){
		
		// Can use p.THE_CONSTANT_NAME to access the constant value.
		// Can use p.theVariableName to access the variable value.
		// Can use p.theMethodName to access the method.
		
	}
	
}
```

:::

::: tip The "a" variable

In your `Page` classes, you can also use the special BagaWork variable `a` to access the things you have in your `App` class. For more information, see the documentation for the :docs[App] class.

:::




## `createBeforeDirections()` - Redirecting the user to another page
The method `createBeforeDirections()` will be called directly when the user comes to the page. In it, you can return an array of :docs[Direction] objects. If there exists a `Direction` object that has `if` set to `true`, the user will immediately be taken to that page, and will never see the GUI of this page (no other methods on this page will be called, not even `onBefore()`).

::: tip Example

::bagawork-project[app&link&code=StartPage-LuckyPage-UnluckyPage&baga=eNrFVGtr2zAU/SuaviwGYxynCZ2hDHcbJbBHWVO60Aai2deJqSIZSW5qgv/75PhRK7ghGxv7YKPHvcf3nHOvd5ikKfZ3OOQRYB+HlEiJvuRBmiJ4VsAiifR698AeVPmEAoiCG0WEuiYrGFjVjRKgMsFQe1GeFlVSgQsbx5xGICT273c4ibA/tDEjm/KL+xRsYx7HEtQP7I+a9Rz7Z5NiYeNUAxqpFdq02hiVtwW01Zebg/IvIeYCPiYCQpVwJlsW1TvURwpxBt/EbMvRBdo4grCIb6ZMDYY28qxudM38vj5TLayzXQMbvMBcoKHllFQGn7PwMS/rshylyxws74hEtDxcWvYJOF6Nc8toH1LGTKzFS7mFKcRVlhw6ONMwNdZsnUh0dTtF24RSrQfN0U9AmYQIJQypNaBUwFMCW3u/0ReiCmXwpJcSACWqCdVt5iwtoy1s/Ix9z3VtnGvXXbewK4PHxwxutTtmcA+v73wrnXCd0EhoNRuRO2znPENEQOXDm44Rl5lS2oVaE5EjsiIJW9YetA1XN0UPxfHofE9xePauoTg5RrFj678iWbfIX6U5GVVOjt1RM7Qz2KRUl2oMr8E1kI/TOIgyemRoOasG1hjT4g/FuElJCHaPNIGWJdfy7G3RLUsYGp6/7whkZn7gNNuwng8cBh4o+5U3krKMUss+MW0O8rS85sYyROIsiBWIPgXL33PljXfgzSemU4IV/G9n7tZEvZWlOUI3JbzuiaHY0O0XzAwanxDknYLkvYLUrfB3PFkUvwBFKL2t]

:::

::: tip Not needed?

You only need to implement `createBeforeDirections()` if you need it.

:::





## `onBefore()` - Initializing the state of the page
The method `onBefore()` will be called each time the user comes to the page (before the page is shown on the screen).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFVNFumzAU/ZUra1KDhiihirQiVROdpqoPW6cl2ha1leLApaCAjWzTNIr49xoIJCDSZX3ZQxDYPufce851toRmGXG3xOcBEpf4CZUSvm28LAN8UcgCCfp9+8AeVPnzBVKFU0WF+kGfcGTUO0qgygWDdqNcLWpQQQqThDwJUEji3m9JHBB3bBJG01KxghCT8DCUqP4Q127e5/q9eDRJpvk6yJrstv7oFN7qt8WXH2315+cwi2IJz1TEdJkgyIjnSQArxAyUoP4KeAgRX0NK2WaHUHGKElSEkEsUEFEJS0QGnOlFTVaWZ5VnWZ4uUdyFv2IZKwlXYDe6nF1jyMXervqpyacckPpRJbLX8HklyfcCZotYI8RMx5AiUxArWG5gbNW7mdUr4eMVjPeCRTfEmzzux/eTr6XlR3ESCGSjHVLNtJeW0o/RYs5zbcAzHjiAB6Z/2PZLKGr7rIVhNnTXudKG7AhveNnmnaYRJcPCsMpuR+2CUaOMzjyZ5IW4jq0HZUPcC9suzHo0Jm+NRks5PBrv96SaqLiekFbkLw23ljUNtwvHG55cOFXDzuVlcytmmGaJLrtzOzpde3J1G3pBnrxxKwan873DMs2oj+aATZ5A2OjxqQLSZlEG40+fD2zqIr/wJE/ZgED/YM/f77yxlOVJYpgnwuYoT8M1O0bHJM68UKEYcrD8+6uzcXrZfGUa4j3h/07md0TVmSzDEaDVj2fScWxsDxvWPTQ54ZBzCpNzhOmwwn/J5LF4BT88hSY=]

:::

::: tip Not needed?

You only need to implement `onBefore()` if you need it. Many simple pages can leave this method empty, or simply not have it at all.

:::



## `createGui()` - Creating the GUI
After `onBefore()` has been called, `createGui()` will be called. In this method you should create the GUI structure the page should have, and send back the GUI structure's root component. The app will then show the page's GUI on the user's screen.

::: tip Example

Example showing how to use `Page.createGui()`.

```js
class AskQuestionPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Do you know the answer to this question?`),
			Columns.children(
				Button.text(`Yes`).page(YesPage),
				Button.text(`No` ).page(NoPage),
			),
		)
	}
}
```

:::

::: tip The size of the root component

The root component in your GUI (the `Rows` component in the example above) will always be as wide and high as the screen itself.

:::

::: tip Building the GUI

The GUI is built with the GUI Components from the BagaWork framework. In the sidebar on this page you have a list of them (*Views* and *Layouts*).

:::



## `onAfter()` - Handling user input
When the user has interacted with your GUI (for example by clicking on a button in it) and should be taken to another page, `onAfter()` will be called, in which you can handle the user's input.

::: tip Example

Example showing how to use `Page.onAfter()`.

```js
class AskQuestionPage extends Page{
	
	startTimeInMs = Date.now()
	answer = ``
	
	createGui(){
		return Rows.children(
			Text.text(`Do you know the answer to this question?`),
			Columns.children(
				Button.text(`Yes`).handler(p.onYesAnswer),
				Button.text(`No` ).handler(p.onNoAnswer),
			),
		)
	}
	
	onYesAnswer(){
		p.answer = `yes`
	}
	
	onNoAnswer(){
		p.answer = `no`
	}
	
	onAfter(){
		
		const endTimeInMs = Date.now()
		const timeToAnswerInMs = endTimeInMs - p.startTimeInMs
		
		if(10000 < timeToAnswerInMs){
			// Took more than 10 seconds to answer (too long), handle that here.
		}else if(p.answer == `yes`){
			// The user clicked on the yes-button within 10 seconds, handle that here.
		}else{
			// The user clicked on the no-button within 10 seconds, handle that here.
		}
		
	}
}
```

:::

::: tip Not needed?

You only need to handle user input in `onAfter()` if your app's logic require's that. Many simple apps can simply leave this method empty, or not have it at all.

:::



# `createAfterDirections()` - Redirecting the user to another page
The method `createAfterDirections()` will be called after the user has interacted with the GUI. In it, you can return back an array with :docs[Direction] objects, indicating which page the user should come to.

::: tip Example

::bagawork-project[app&link&code=StartPage-LuckyPage-UnluckyPage&baga=eNrFVH+LmzAY/iq5/LMKoai9HjfhGN42RmG/uOu4lWuhQV9bOZtIEulJ8bsvNuppZ0s3buwPRc37Pnl++GaHaZpib4cDHgL2cJBQKdGX3E9TBM8KWCiRft7N2VyVVyCAKrhXVKjvdAUDy6woASoTDDUL5dfCNBW4IDjiSQhCYu9xh+MQew7BjG7KHfctmGAeRRLUT+yN6ucZ9i6vigXBqQbstBq0iXnpMG8INOzLlwP6n7L4kPgd38phsI6TUAAbmKW5mmqQodK3wfIOaJgjxZESOcp5JlCSBU/vlhapi28zpTirymcgL5o1q+VGzcGPFIgPsYBAxZzJho+5B/qTQpzBNzHdcnSDNkNBWcg3E6YGDkGu1a6uNDzWTBrY4Xat1bzA3CDHGpZuDj5r8nlpjVURfqByryhvKTqB41Y4P1jSh5SxLtbihW7zVxD8jD3XtgnOdei2XRCT7/hUvg3v1853xjNEBRgPLo7FOtXh0xWN2bLS3/xv1u9RVxLHo+u9ROfybS3x6pTElqX/SmQVz6vKvBqZJMf2qJ7ZKWzSRFPtzG5Hqy+fJpEfZsmJmeXsFiIuoDMixV+acZ/SAEiPNb62RY812seC1Joy5Fy3x7vb+Z4n2Yb1bHBYeODsV15byrIksciZbfo4Oa+v/8jhbH/c9DlYns4mG/cgm49Mt/gr+N/JPKypeiPNmat3P55JxzHH7jesWzQ+o8g9B8k9gtRm+CeZLIpfbaW+7Q==]

:::

::: tip Not needed?

You only need to implement `createAfterDirections()` if you need it.

:::





## Referring to a page
Sometimes you need to refer to a page you have created. For example, when the user clicks on a :docs[button], you might want to take the user to the page you have created named `AboutPage`. To tell the `Button` that the user should come to that page when the `Button` is clicked, you call the configuration method `page()` on the `Button`, and you pass it the page the user should come to. To obtain that page, simply write the name you have given your page, e.g.:

```js
Button.page(AboutPage)
```

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU1FLwzAQ/ivhXlwhjK5joH2RTkT2oIgbqDjB2F7dsEtKkuLG6H83XWxdyja2BxHakuTuu7vv+9I1sDyHcA2xSBBCiDOmFLldRXlOcKmRJ4qY9XrKp7p6Y4lM41gzqe/ZB3Y8G9ESdSE5aQLVaWlBJZQUUpElKBWEL2uYJxD2KHC2qDpuIEBBpKlC/QShX6+fzbp8pZCbeg7SFhvZjTN4078Zvtq0pr8p5u25H8SX6sazeZZI5B0bmuqJKdLV5tN5m8zmiphHz/C3yZtH69RhobXgP8k3gmhBondR/KR1Kwqd5sCzKM8RicISwsA37FcQ9n2/pJbv4BDfpuRf8m2adA8T3tLFEm4O9hMe9IMN4eDiorZ6gos8M2M7lrus1ecojZIiO0Bd8CGmQv7e0K3eJwszzlmMdIdMkUSyEgXZGGTEYpz0zi+3ZHKRVyIrFnxHg3ZiS987UUvKiyzz6JGwZ1TH4eqI54gkeJRqlLsUrP5p603Q8uaaG0j0gf/tzOOM6TNVmSOJ6b7fE0exnr9bMDdpcERScEylYE+l7QlP8eS1/AZryhmz]

:::

## Page arguments
When you specify a page the user should come to, you can also pass along arguments (values) to that page by using *page argument methods*. Page argument methods work the same way as configuration methods on GUI components, but with page argument methods, you decide the names. For example, if you want to pass along an argument named `age` with the value `10`, you would write:

```js
ThePageName.age(10)
```

You can name the argument whatever you want, and you can pass along how many page arguments you want.

The arguments will then be assigned to the page the user comes to, so you can access them through the `p` variable, e.g. use `p.age` to obtain the value.

::: tip Example

::bagawork-project[app&link&code=StartPage-AboutPage&baga=eNrFlGFr2zAQhv/KIQaLwXUdl8BqKMPZshJYy1hTtrKURbXPiZkiGUluG4L/+yS7TuPM6VL2YZAEyXf33ul55awJzXMSrkksEiQhiRlVCi5WUZ4DPmrkiQKzXk/5VNtvLJFqvNJU6i90jj2njmiJupAcNgH7tKyLSlK6JBUsQalI+GNNsoSEfZdwurQdqxLiEpGmCvV3EvrN+sasy1uX5EavVVmLjetNa/BN/83wdrMz/XmR7c79VTwoL15kLJHIe3VoqidGxNPmpzebLDIF5qMX+Nxk5rhN6rDQWvCn5DFPBdA7UWiIWBabPM+eoRfZR7bQs2fvzZqgjfV95+9qQ3H3p1ZVPXCeNKuURslp2eCSRxIGvuG7IuGJ75duTXTwEtFNn26ix8cwWaBCeMgYgzlqSyiTcE9ZgQpSKZZg5wUq58USuVaeLbOzwhnMPo4+RdefJz8vo4vRzAZs6hkc9f/dsTfrvEJSWtvsxkiXsEIqFZjTevvMOxegxbbHNe/NA2cv2sFJUKENTk+bazvBZc7MAVrXt81X/RqnUVKwFyALPsRUyOe3bav3qxFd5TRGtwNYJBFWooDqKhgbKYf+u/dbmNqVHwQrlryjwW7iDt9L0SDlBWOOe2DZDarD6rruvkUYpRplF0H7/1R7E+x4M+KmJJrj/3bm24Lqt8qaI8F03+9Ji1jf7wbWThockBQcohTsUdqe8DWe3Ja/Ae2kXy4=]

:::
