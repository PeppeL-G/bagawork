<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Sizing GUI Components
This tutorial will teach you how you can change size of GUI components.



## Positioning children
First, some quick repetition.

The child components in `Rows` are:

* As wide as the `Rows` component
* Just heigh enough to surround their content
* Positioned at the top of `Rows` (by default)

To position the child components elsewhere in `Rows`, you can insert extra `Space` components in `Rows` to push apart the children. The `Space` children will share the remaining space available in `Rows` evenly among themselves.

It works the same for the `Columns` component, but the children are instead positioned as columns, and not as rows.

::: tip Example

Try resizing the app below, and notice how the `Space` children gets smaller/bigger, while the three other children stay at the same size.

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`First`).backgroundColor(`red`),
			Space.backgroundColor(`pink`),
			Text.text(`Second`).backgroundColor(`yellow`),
			Space.backgroundColor(`purple`),
			Button.text(`To columns`).page(ColumnsPage),
		)
	}
}

class ColumnsPage extends Page{
	createGui(){
		return Columns.children(
			Text.text(`First`).backgroundColor(`red`),
			Space.backgroundColor(`pink`),
			Text.text(`Second`).backgroundColor(`yellow`),
			Space.backgroundColor(`purple`),
			Button.text(`To Rows`).page(StartPage),
		)
	}
}
```

:::



## Sizing children
It's not only `Space` children that can grab some of the remaining available space; any child in `Rows` and `Columns` can grab some of the remaining available space. But it's only the `Space` children that grabs it by default, and by default they all grab equally much of it. But all this can be changed with the configuration method `.grow()` on the children. Let's go through how this works in detail.

First, let us ignore the `Space` children, and instead focus on all other children, such as `Text` and `Button` components.

By default, all children in `Rows` will be just tall enough to surround their content. If you want them to grow tallwr by grabbing some of the remaining available space, you can call the method `.grow()` on the child, and pass it a number indicating how tall the child should be in relation to other children that have also called `.grow()`. 

::: tip Examples

A few examples.

::bagawork-project[show&editor&app&code=FirstPage-SecondPage-ThirdPage-FourthPage&url=http://localhost:8080/editor/#eNrNlcGO2jAQhl9l5FMiRQgC20Ju3Uq76qFVVTi0KithkoG4NXZkO2URyrvXdkgguzS9cNgLeMae35P/UyZHQouCJEeSygxJQlJOtYbPhw9FAfhsUGQa7Pq4FEuTKqQG54Yq85VuMQh9dmkUmlIJeGBK+w2XrZaiIlVENpJnqDRJfh4Jy0gyioigO3eT1yERkZuNRvOdJLNm/YMk41H1FJHCinVKa7VPddDpuL287doFF20/luxlw9/kXg/SnPFMoQjqraVZWIGBsT/BqhVdhVFne03T31slS5F9lFyqYKUwW4Wnqi9SIMgNmByhUYcclY0o5zCwhfsgjEBLcHF7hNoTv0ptwLg0ClluczASdKn8VU6QKUilsA9oBhc93ZfGSHG6/lH6IrTnMih88wP3F8x9yj1OUxm2pCLyTJI4nkbkQJLJu3EV1Z6P+zw/C97S9LPqS9e9caOw3/1FzjS4pTVqV1gUwkBOtfceM2g0YM5EitZSe9oVWFZS8ENNw4b0dZVFxgzsmYWzRePZnSgr3FEmmNgC/UMZp2uOoAua4n8g2dtVl9HCZXoQTaYzjyi+ixtEkz5Erd4tCbWi1wENh7dA5FTeBKSNLJXJO5QefKoH0/tZg2naYLrrnV6t4E3HV6t6FVR8A0zxBSSEtXcP1sjl/spLF9Ukz2oe09rW7plVsOf95KP6ldgVRM2L3EHl5nWXVDPB/wFqNJxNTjNv1nxxFrgruLXcfXmeqr8SaYMT]

:::

The special thing with the `Space` component is that it has the grow set to `1` by default (it has been made like this because that's often how one wants to use it), while all other components has the grow set to `0` by default (which means they will be just big enough to surround their content).

So when you use the `Space` component like this:

```js
Space
```

It has the same functionality as being used like this:

```js
Space.grow(1)
```

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space.backgroundColor(`yellow`),
			Text.grow(1).backgroundColor(`red`).text(`I grow to one third of the space.`),
			Space.backgroundColor(`pink`),
		)
	}
}
```

:::

You can still call `.grow()` on `Space` if you want it to claim another amount of shares of the remaning available space.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space.backgroundColor(`yellow`),
			Text.grow(1).backgroundColor(`red`).text(`I grow to one fifth of the space.`),
			Space.grow(3).backgroundColor(`pink`),
		)
	}
}
```

:::



## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1UlFLwzAQ/ivhXlwhjG0iSF+kiqgPiuhAhxssa69bWZuU5IqO0f9uarU2w04RfWi5y9139+X7sgWR5+BvIVQRgg9hKoxh15sgzxm+EMrIMBtvp3JK1RdqFIT3JDTdiiX2vLpCGqnQkjWF6rSsQSWUHGKVRqgN+E9bSCLwhxykyKqNbxDgoOLYID2CP/iIJzYuZxxyO89B1sOu6sQh3uxvyFfJDvuLItnlfaeeTT9cJWmkUfbq0pTGdkif7K83H6+w0oGNE0px7vGOlkwkkoVK2t009/oLEa6XWhUyOlOp0r15mmRttD0tMvnF5ind5yJE/pmfFkRKvq+6VM6Yb7qDhSro5+1nlr4I9wG8OvAckzm8gD8aWPc24B8OGufGmOWpVd1x0DEtMOurOIiK9O+cc/m2TAo0so0q2NsLYrQSkg2PT1p3dZG/NehG/VzvCZp9WvOvxC55LeVoR8pz+/J0sMT/F/JhJejAVFpqZud3S+jcdTho9bmVo67KqBMzOurYuiPWrHwF1QvJTQ==) currently displays a page looking like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`The App Title`),
			Text.text(`The main content`).backgroundColor(`lime`),
			Columns.children(
				Space,
				Button.text(`Home`),
				Space,
				Button.text(`About`),
				Space,
				Button.text(`Contact`),
				Space,
			)
		)
	}
	
}
```

Your task is to change the code, so `The main content` component covers as much space as possible, so the page instead looks like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(`The App Title`),
			Text.text(`The main content`).backgroundColor(`lime`).grow(1),
			Columns.children(
				Space,
				Button.text(`Home`),
				Space,
				Button.text(`About`),
				Space,
				Button.text(`Contact`),
				Space,
			)
		)
	}
	
}
```

::::hint

A carefully chosen `.grow(1)` should do the trick. But on which component?

::::

:::

::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==) contains no pages. Your task is to add a new page to the project named `StartPage`, and make it look as the page shown below.

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.grow(1).children(
			Columns.children(
				Text.text(`A`).grow(1).backgroundColor(`red`),
				Text.text(`B`).grow(1).backgroundColor(`lime`),
			),
			Columns.children(
				Text.text(`C`).grow(1).backgroundColor(`yellow`),
				Text.text(`D`).grow(1).backgroundColor(`silver`),
			),
		)
	}
	
}
```

::::hint

Hmm... Is that GUI conisting of two `Rows` that contain two `Columns` each? Or two `Columns` that contain two `Rows` each? Hmm... Seems impossible to tell... Wait, does that mean any of the two approaches will work?

And remember, `.grow()` can be called on any child component in `Rows` and `Columns`. So if `Columns` is being used as a child in `Rows`, you can call `.grow()` on that `Columns` component!

::::

:::

::: exercise Exercise 3

Continue on your project from `Exercise 2`, but make the GUI look like this:

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Columns.grow(1).children(
				Text.text(`A`).grow(1).backgroundColor(`red`),
				Text.text(`B`).grow(1).backgroundColor(`lime`),
			),
			Columns.grow(1).children(
				Text.text(`C`).grow(1).backgroundColor(`yellow`),
				Text.text(`D`).grow(1).backgroundColor(`silver`),
			),
		)
	}
	
}
```

::::hint

You need more <code>.grow(1)</code>. Add as many as you can. And then add some more. Ehh... No, scratch that last sentence 😅

::::

:::


## That's it!
Good work, now you know how to change the size of GUI components! 🥳 Using `Rows` and `Columns` with `.grow()` on the children is enough to create almost any layout you want.

The last thing to learn in the Fundamental section is the tutorial [Fundamentals 7. The App Class](../the-app-class/). Then you will actually know everything needed to be able to start creating small apps 🙂