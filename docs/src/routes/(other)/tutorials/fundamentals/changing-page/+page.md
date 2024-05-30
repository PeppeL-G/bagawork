<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 5. Changing Page
This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to her.

## Multiple pages
An app who's GUI always look the same is usually not that fun. Therefore, most BagaWork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!

## Going to another page
To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, BagaWork has the `Button` component.

To tell the `Button` which text it should display, use the configuration method `text()`, and pass it the text it should contain as a string.

::: tip Example

Example of how to show a `Button` on a page (note: nothing special should happen when you click on the button in this example).

::bagawork-project[link&app&code=StartPage&baga=eNpdUE1LxDAQ/StxTi2UUvWWm15kD4JoD4pdaGin20KbhGSKu4T8dxOz22WFJLz5evNeHAitgTvoVI/AoZuFtez19KQ1wyOh7C0L2DWyoXg7g4Lwg4ShN3HALE8VMkirkWwrxKxPQx58AYOaezQW+LeDqQd+X4AUS9z4NwIFqGGwSJ/Aqwv+CtjvC9CB72Yyke1ScCN827+Jj4G7Kn9Zp/+a39WPLbtxmnuDMkulhupAUFJ4srYeJ8vCoRGvC8o2Ly69zyuRkufuHRMLEyzl7to8NeXnD/HB6RH4QxVcnoA/VpvDGhc9B4XR6d7/AsASjnE=]

:::

By default, when clicking on `Button`, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:

1. The page shown on the screen has been deleted
2. The page has been created anew
3. The GUI of the new page is shown (the `createGui()` method has been called)

To take the user to another page when the button is clicked, call the configuration method `page()` and pass it the name of the page the user should come to.

::: tip Example

Example of an app where the user can go between 3 pages.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage&baga=eNqtkkFrgzAUx7+KvJNCKLO2HfW2HVZ2GIy1h41ZqGhcBZtI8mQtku++aGrUUTz1kPDyXt4//1+SGuKyhLCGhKcUQkiKWErn7fJUlg49I2WpdHRcRyzCZiSCxki3GAt8j3+o65kKCoqVYM5LLmRbaLLKNClQBDJepFRICL9ryFMIfQIsPjUntlpAgGeZpPgJ4UMXf+lY7QmUWm/UacRezWJk3J5vzTeLune+qfL/nj/4r5wlx7xIBWWuKUW40wIz1JN7sKIHj3Tl5wqRs+uGDXeQO1uacJaafbPGs9tnPNPnXa9Fad6zdr8ICFwgDPy1IoZuPkXX690Tb+h7im93zMUIzyZu0y38VUvnPy47umCKzsrdE25geopt8MSGzSZus63WS/Nyc/tDd/RUFtpl81P36g+vBSx3]

:::




## Exercises
Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.

::: exercise Exercise 1

The code in [this BagaWork project](/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7) contains 3 pages. It works like this:

::bagawork-project[app&baga=eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7]

That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.

::bagawork-project[app&baga=eNq1lG1r2zAQgP/KTV+WgAlxXtbEX4pTttFBy2gLXVkK0exz7EWWjCSvCcH/fZJdZ3GI08EWsM2dTvfiR3faEpplxNuSQIRIPBIwqhTcbPwsA1xr5KECI2/nfK7tG0ikGu81lforXWKnW1m0RJ1LDjuDXS0qp4IUDokEC1Eq4n3fkiQknusQTlObsXQhDhFRpFB/I16/lp+MXDw7JDPxGp5VsOtKaRS+y78r3irbP5V/zpPDmu/Ei+oFccJCibxTmeb6wQToafPpLG6Q54uuU1tmudaCv9rukIbwRaxw0e3ZOjt2weo27ymfTzTQ+z5W3/fpvhIsDJq1+dHR0CEb4g3daeFUIAanQOyX8c8s7jMaoHOEzHUEG5HDC+UatIAlaiPL1IGfudKwFHZRxwiBkBwliKjUYpErdOAHBtQIkOj3CqZ9CHEpEZXdIvHdHvBm+gbKGQ1WNcXd2XePEhyPPpQE3YtxTXD4FsH6UM5H8DFGDj7DNeWmDpghY5DwX8g1hiUsjQyzWHCDzTymcYaQJkoZa0AZUxBJkcJVnAcruBVSJqp3BnKTktxoMq3H8QHTjBkAjbFs4PPV6jryw5y1APyfEH2JZR+WZ2moUQ7u5LKVw5VgecqPJDjceIDsVuyFfGPvE6oTmw+HvL4md4PdQPnRNIP0l3h+kI8xtcNoWEow8S//rpXcftvt6I7bLINWn8G4JesBrOfiN+xeaJ8=]

:::

## That's it!
Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the `Button` component is just one way to take the user to another page, there exists more ways you can learn later on.

When you are ready, continue with [Tutorial 6. Sizing GUI Components](../sizing-gui-components/).