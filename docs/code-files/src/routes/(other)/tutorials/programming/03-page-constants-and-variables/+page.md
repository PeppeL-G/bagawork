<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Page Constants and Variables
This tutorial will teach you how to create and use page constants and page variables.



## `Page.onBefore()`
Just as `App.onBefore()` is called directly when your app starts/before the first page is shown on the screen, `Page.onBefore()` in each of your pages will be called each time the user comes to that page/before it's shown on the screen. And this is of course something we can use to change our app variables, or run whichever code we want each time the user comes to a specific page.

::: tip Example

Example of an app that uses `Page.onBefore()` in `BobPage` and `ClairePage`.

::bagawork-project[app&link&code=MyApp-StartPage-BobPage-ClairePage&baga=eNrVk0FPgzAUx79KffEACSHiFraQeBgepgcTozu4uCVUKErsKGlLtoXw3W3pYMNMEr15oPS99v/6769tBbgoIKggZgmBAGKKhUAP+1lRILKTJE8EUv1qla+k/lgekpRxYtkmJbGb4w1BNyia0Swmkc7W7eyYEyzJs8RcPuL3o4gTWfIcdQMnohpqB1JGE8IFBK8VZAkEngN6FeWvkYADLE0FkS8QXLX9perXawcKVa+nNMXuTdDbZrd+t1UdVH338zL77vuJbYUbf2Q04SS3zNBKLlQRV6rGiu4IpQxdVgZOfRHZTjsrLKWCeJg3Z0gyFLI3pF1Htqt/loq1j0HNLcUZJz2ZSZ0q7R5XB3YKwVQB20Mw8vzaMYiuhxAdvJwHNHAZlO7cVfgLzCUrOWrqZgLlbHvk6v7ENcTxp6Yk9AH3IHVHPsBo7PsNI28ybRmNhhgdwf8ak5H+X1ITryE19qft01uQTUGVf/0E1/UXbCOKvw==]

:::




### The `p` variable
Just as the `a` variable (short for **a**pp) is an object that we can store constants and variables in, each page has their own `p` variable (short for **p**age), which is an object respective page can store constants and variables that should only exist on respective page.

::: tip Example

Example of an app with a page that uses a page constant.

::bagawork-project[app&link&code=StartPage&baga=eNp1kG9LwzAQxr/Kcfhig1IcgkjBF1WG+GJTXAWHGza211HokpCkc6Xku5tYWlf/vEi4u+S5u9/TIpMSoxYzkRNGmFVMa1g0sZRAR0M81+DidsM3xh/Bb6gQiibTrmRYyNme4BrSuCozSn3V9r8zRczQyjBlHtnuW6TI1IrD8HAismgDLESVk9IYvbZY5hjNAvRT3H5fEgxQFIUm84LReR+vXWy3AUrXb6Tsmt13yQhzmD+g+uR/VhnePjwvk6f12zJezD3z6oNy4n9B39XlT9zETQmNuybpWTvuZaHUwGDnpZCJmhvVhDA/kGreRd5AJQ6k4ZcqTKcj6wI8Osor50mD0cXssvcjob2s3FLel639BOFcrnM=]

:::



## Page methods
Just as you can add your own methods to your `App` class, you can also add your own methods to your `Page` class, and then refer to them using the `p` variable. But note that a page can only access its own methods through the `p` variable, and never another page's methods.

Most apps typically store data in the `a` variable, and it is usually initialized in `App.onBefore()`. And in many pages you need to tell the computer what to do when the user clicks on a button on that page, or when the user in some other way interact with the GUI on the page, and that code is usually written as methods on respective page.

::: tip Example

Example of an app that initializes app data in `App.onBefore()`, and that have methods in `Page` classes to change that data when the user clicks on a button on respective page.

::bagawork-project[app&link&code=MyApp-StartPage-ChangeNamePage&baga=eNqtU01Pg0AQ/SvrxAMkhNiaGkPioe1BPWiM9qCxTVhhsCRblixLbEP47852AYui6cEDZHc+3rw3M1sBz3MIKohkjBBAJHhRsLvdNM8ZbjVmccHoXC2zpTafzGaYSIWOa02a+xnfILti4VSkEYbGWrfRkUKu8UlzpR/4+1eSQl2qjHWOg6Qaag8SKWJUBQSvFaQxBCMPTBXit08BD2SSFKifIThrzy90rlce5ITXy7Rgt/bSk9nV76SaS9Vnf12m33k/yo/Cj9apiBVmjnUt9YJAfE0/J7xBISQ7rWxz6pPQ9dqoWampiU3cfM0zqm6CQtc3zB1ruieL4dLmub0OebAlMZckfQfB+eii9qzY8V9i+8D/rjg9kNvUYjtZqr04tkaF/hFdYFqymXyjZpAtFqic3KfZGtYLSY6mSd3gjkOcC54qHAa1vt9w3d46HzIZeACG+HC8LTKQ0jD7Od3JeNJMd9Iu9QI3uaDxmOVe1Z9ER1Hd]

:::




## That's it!
Congratulation, now you know how to use page constants and page variables too! 🥳