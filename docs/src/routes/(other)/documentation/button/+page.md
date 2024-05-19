<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Button`
On this page you find the documentation for the GUI Component `Button`.





## Introduction
The `Button` component is a view that displays some text to the user shown as a button, and which the user can click on. Clicking on the `Button` takes the user to "the next page in the app".

::: tip Example

Example showing what the `Button` component looks like when shown on the screen.

::bagawork-project[app&baga=eNpdjs1qwzAQhF9FmVMCoqQJPVS3NofQQ6GQHFLqQIS1Lia2LKQ1JBi9e2SbmKannf2b+Tpo56A65I0hKOSVDkF8Xt+cE3RhsiaIpLvMZpx70kw71p6/9C/NF8M0Y0/ceiumRT+NmY2IEkVTGfIB6qdDaaCeJayu+6ThHBJNUQTiA9Tyrr+TjkcJl7wePkezj7F5AJ6yJ+i++UO9bcv/vO8tc2OfOH3MT5uqzM+iptlpMeFLXKBW65XENdWX1zvTnmpXJc+e7RhvwPdu3w==]

Note: In this example, the button covers the entire screen (which usually isn't the case), and clicking on it just reloads the same page, so nothing should happen when you click on the button in this example.

:::



## `text()` - Setting the text
Use the configuration method `text()` to tell the `Button` component which text it should display. Pass the text as a string. The text will always be centered in the `Button`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNpdjs1qwzAQhF9FmVMCoqQJPVS3NofQQ6GQHFLqQIS1Lia2LKQ1JBi9e2SbmKannf2b+Tpo56A65I0hKOSVDkF8Xt+cE3RhsiaIpLvMZpx70kw71p6/9C/NF8M0Y0/ceiumRT+NmY2IEkVTGfIB6qdDaaCeJayu+6ThHBJNUQTiA9Tyrr+TjkcJl7wePkezj7F5AJ6yJ+i++UO9bcv/vO8tc2OfOH3MT5uqzM+iptlpMeFLXKBW65XENdWX1zvTnmpXJc+e7RhvwPdu3w==]

:::





## `page()` - Going to another page
Use the configuration method `page()` to tell the `Button` component which page the user should come to when clicking on the button. Pass the page as an argument.

If this method is not used, then the current page will be reloaded when the user clicks on the button.

::: tip Example

::bagawork-project[app&link&code=StartPage-DestinationPage&baga=eNqVkVFrgzAUhf+Ku08KoWyOls03y6D0YTC2wjZmwaDXVaqJJFfWIvnvi3Xa6sOgT7m5yTn3O0kDvKogaCCRKUIAScG1dp6PYVU5eCAUqXZs3UQiokQhJ3wjruiFf6PrnboRKaRaCWc4aLsmEgYMg0wWKSoNwVcDeQrBHQPBy3bS6TowkFmmkT4guO3rT1ubLYPKeo2Undm624yAh9kDdLu5oF7V+ZR3WRNJMSOrcOOVdGiHCmNv1o51n1BTLjjlUrRO3pCJwQEC/95ncLTr/NGwDs//D2/idgXkq/zRs2SXF6lC4XZHEW2swR/4OxaJLNGhU4DppJvYY71olHfJk32rGR6uDz40euEk+nyx6KIvHvo/2mBZFRZ/9Fej/KHer7MwrQu6IvpFyPgMYbbmFwRb8vg=]

:::




## `handler()` - Handling clicks
Use the configuration method `handler()` to tell the `Button` component which method to call when the user clicks on the button. Pass it a reference to the method (e.g. `a.theMethodName` or `p.theMethodName`, depending on what you have named your method and if you wrote it in your `App` class or `Page` class).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNp9Ul1PgzAU/Sv1xgeIhGwzPkiyh+mD2YMf0T24yBI6uAgZlKa96BbCf7eDgUOnD21ve9tzzr2nFXApwasgLCIED8KMa83udzMpGW4JRaSZiStf+BQq5IQvxBU98Xe07ObUJ4VUKsH6xP609kUNtQNxkUWoNHhvFaQReGMHBM/3TM11cKCIY430Ct6oi5cmrlcOSIM1eNmCzdvNQHDP3Yveb1p9ZogyX6N6jG9KokLcZmm40WzKRl2+reyuTH/W9Fx8ajdM0ixSKKw25dPCkLhkJitYFiVL+AeycA+KEaME2bqhYeeVdE8x14zSHLUb2E6H2KYPmM0tluNZYLsJF1GGypJuKozKHAU9nIDskOxD79uy/n3Sl3paJLuYsvERWm2s2oI3uZw4sDPr1XVn0QJzmZn2DawauDPTm3k8i8qMftvzZ+uPmhzY319qVX8B6hn4lw==]

:::