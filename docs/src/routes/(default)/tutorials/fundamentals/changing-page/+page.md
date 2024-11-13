<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Changing Page
This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to them.

## Multiple pages
An app who's GUI always look the same is usually not that fun. Therefore, most BagaWork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!

## Going to another page
To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, BagaWork has the `Button` component.

To tell the `Button` which text it should display, use the configuration method `text()`, and pass it the text it should contain as a string.

::: tip Example

Example of how to show a `Button` on a page (note: nothing special should happen when you click on the button in this example).

```js baga-show-editor-code
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`This is the StartPage.`),
			Button.text(`I am a Button!`),
		)
	}
}
```

:::

By default, when clicking on `Button`, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:

1. The page shown on the screen has been deleted
2. The page has been created anew
3. The GUI of the new page is shown (the `createGui()` method has been called)

To take the user to another page when the button is clicked, call the configuration method `page()` and pass it the name of the page the user should come to. Note that the name of the page should **not** be surrounded by `` ` `` characters.

::: tip Example

Example of an app where the user can go between 3 pages.

::bagawork-project[show&editor&app&code=FirstPage-SecondPage-ThirdPage&url=http://localhost:8080/editor/#eNqtlF1rgzAUhv9KOFcVQpn9GvVmdIOVXayMtRcba6Gix1awiSSRtoj/fbGpVqV1MHqhJCfnvHmfk2gKbhyDk4LHfQQHvMiVkrwfJ3FM8KCQ+ZLocbpkS5U/nkBX4Vy5Qn24G+xYZkUJVIlg5DUU8rSQRzNTlEFGIeCRj0KC85NC6INjU2DuLt/xpAUUeBBIVF/gPBTjbz3OVhRirVerNGJvZlIzXu5fms8n6cX5NAmbnj/5Xna9bRj5AlnHLC3VQgt0lX511qXo2qLF8nOiFGfnhCknipM5epz5Jq+be+5cIkWhde5LpoEP2v6gT+EITt8eZ9Tg9drwLoL35KsabwNcbENR4ysDN/AG9uiEZz8OC7x+G16pd0+6ius2uMohG7gycANuNB6as+uVl3SBuzjSNmuXVYUqyhFnuCdFAtDm93ad+h/k89j1kF7pw0QgOfKEBIhRyDZkw7n/VOlJvfCFR8mOXdFvJjaaOeMVyT9yv1G2JFv1rp//JKvsF227q/k=]

:::




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNqtlF1rgzAUhv9KOFcVQpn9GvNm7IOVXayMtRcra6Gix1awiSSRtoj/fbGpVqV1MHqhJCfnvHmfk2gKbhyDk4LHfQQHvMiVknwcnuKY4F4h8yXR43TBFip/PIGuwqlyhfp019ixzIoSqBLByFso5HEhj2amKIOMQsAjH4UE5yeF0AfHpsDcbb7jUQso8CCQqL7BuSvGcz3OlhRirVerNGLvZlIzXu5fms8n6dn5OAmbnr/4Tna9TRj5AlnHLC3UTAt0lX51VqXoyqLF8nOiFGenhDEnipMpepz5Jq+be+6cI0WhdepLpoH32v6gT+EATt9+yKjB67XhnQVvyVc13gY424SixlcGruAN7NERz74fFnj9NrxS75Z0FddtcJVDNnBl4Arc6GFozq5XXtIZbuNI26xdVhWqKEec4I4UCUCb39tl6n+QT2PXQ3qhD6+cHHhCAsSIrDn3Hyv9qBe98CjZsgvazcRGIye8IvlH7hxlS7JV7/jpL7LMfgGoyKpW) contains 3 pages. It works like this:

::bagawork-project[show&url=http://localhost:8080/editor/#eNqtkkFrgzAUx7+KvJNCKLO2HfW2HVZ2GIy1h41ZqGhcBZtI8mQtku++aGrUUTz1kPDyXt4//1+SGuKyhLCGhKcUQkiKWErn7fJUlg49I2WpdHRcRyzCZiSCxki3GAt8j3+o65kKCoqVYM5LLmRbaLLKNClQBDJepFRICL9ryFMIfQIsPjUntlpAgGeZpPgJ4UMXf+lY7QmUWm/UacRezWJk3J5vzTeLune+qfL/nj/4r5wlx7xIBWWuKUW40wIz1JN7sKIHj3Tl5wqRs+uGDXeQO1uacJaafbPGs9tnPNPnXa9Fad6zdr8ICFwgDPy1IoZuPkXX690Tb+h7im93zMUIzyZu0y38VUvnPy47umCKzsrdE25geopt8MSGzSZus63WS/Nyc/tDd/RUFtpl81P36g+vBSx3]


Your task is to add a fourth page to the app and make it work as shown below.

::bagawork-project[show&url=http://localhost:8080/editor/#eNqtlF1rwjAUhv9KOFcWgqxrp9ib4QbKLiZjerExBUt7qoWYlDRFpfS/r7XfRTsYXrQkJ+e8eZ9DkhjsIAArBke4CBY4zA5D8n6eBgHBk0LuhiQdx2u+VtnnSLQVLpUt1Ye9w4GWryiJKpKczHwZXhayaJIXJZBQ8ARzUYZg/cTgu2DpFLh9yHa8aAEF4Xkhqi+wHsrxdzpONhSCVK9VmYu95ZOW8Wr/ynw2iWvn88jvev4Ux3Do7H3mSuSDfGmtVqnAUKW/wbYS3Wq0XH6JlBK8SJgLogRZoiO4m+cNM8+DOlIWakVfkhT4lNo3DQpnsAx9ktAc77EPrxa8J1/TeB/gau/LFl8VuIFn6qMLnj5+KvGMPrxK7550Ddd9cDMRSbVv0tWRG3ijiVngmSWe2Xs4K8G7ns6G8V7A+hQXfGXgBt5kNC4Op1HewhUeApb6bN1G5SuWQS7wSMoEoN0H5Tr2P9CXge0gvdKIqURyFhHxEJnPd+SIjD03etIufBUsOvAr+t3ETjMXoiH5R+43hj3JWrvrxVO5SX4BfWP7Rw==]

:::

::: exercise Exercise 2

The code in [this BagaWork project](/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7) contains 3 pages. It works like this:

```js baga-show
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Menu`),
			Button.text(`Read Joke`).page(ReadJokePage),
			Button.text(`Read Fact`).page(ReadFactPage),
		)
	}
}

class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!`),
			Space,
		)
	}
}

class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.`),
			Space,
		)
	}
}
```

That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.

```js baga-show
class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(`Menu`),
			Button.text(`Read Joke`).page(ReadJokePage),
			Button.text(`Read Fact`).page(ReadFactPage),
		)
	}
}

class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!`),
			Space,
			Button.text(`Back`).page(StartPage)
		)
	}
}

class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.`),
			Space,
			Button.text(`Back`).page(StartPage)
		)
	}
}
```

:::

## That's it!
Good work, now you know how to navigate between the pages in your app! 🥳 But know that the `Button` component is just one way to take the user to another page; there exists more ways you can use. Learn more about these in future tutorials.

When you are ready, continue with the tutorial [Fundamentals 6. Sizing GUI Components](../sizing-gui-components/).