<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Changing Page
This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to the user.

## Multiple pages
An app who's GUI always look the same is usually not that fun. Therefore, most Bagawork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!

## Going to another page
To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, Bagawork has the `Button` component.

To tell the `Button` which text it should display, use the configuration method `text()`, and pass it the text it should contain as a string.

::: tip Example

Example of how to show a `Button` on a page (note: nothing special should happen when you click on the button in this example).

::bagawork-project[link&app&code=StartPage&baga=eNpdUE1LxDAQ/StxTi2UUvWWm15kD4JoD4pdaGin20KbhGSKu4T8dxOz22WFJLz5evNeHAitgTvoVI/AoZuFtez19KQ1wyOh7C0L2DWyoXg7g4Lwg4ShN3HALE8VMkirkWwrxKxPQx58AYOaezQW+LeDqQd+X4AUS9z4NwIFqGGwSJ/Aqwv+CtjvC9CB72Yyke1ScCN827+Jj4G7Kn9Zp/+a39WPLbtxmnuDMkulhupAUFJ4srYeJ8vCoRGvC8o2Ly69zyuRkufuHRMLEyzl7to8NeXnD/HB6RH4QxVcnoA/VpvDGhc9B4XR6d7/AsASjnE=]

:::

By default, when clicking on `Button`, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually have happened is:

1. The page shown on the screen has been deleted
2. The page has been created anew
3. The GUI of the new page is shown (the `createGui()` method has been called)

To take the user to another page when the button is clicked, call the configuration method `page()` and pass it the name of the page the user should come to.

::: tip Example

Example of an app where the user can go between 3 pages.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage&baga=eNqtkkFrgzAUx7+KvJNCKLO2HfW2HVZ2GIy1h41ZqGhcBZtI8mQtku++aGrUUTz1kPDyXt4//1+SGuKyhLCGhKcUQkiKWErn7fJUlg49I2WpdHRcRyzCZiSCxki3GAt8j3+o65kKCoqVYM5LLmRbaLLKNClQBDJepFRICL9ryFMIfQIsPjUntlpAgGeZpPgJ4UMXf+lY7QmUWm/UacRezWJk3J5vzTeLune+qfL/nj/4r5wlx7xIBWWuKUW40wIz1JN7sKIHj3Tl5wqRs+uGDXeQO1uacJaafbPGs9tnPNPnXa9Fad6zdr8ICFwgDPy1IoZuPkXX690Tb+h7im93zMUIzyZu0y38VUvnPy47umCKzsrdE25geopt8MSGzSZus63WS/Nyc/tDd/RUFtpl81P36g+vBSx3]

:::

## That's it!
Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the `Button` component is just one way to take the user to another page, there exists more ways you can learn later on.