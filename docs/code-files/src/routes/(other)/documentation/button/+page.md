<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Button`
On this page you find the documentation for the GUI Component `Button`.





## Introduction
The `Button` component is a view that displays some text to the user shown as a button, and which the user can click on. The text passed as the main content to the `Button` will be shown in the `Button`.

The text is always centered both vertically and horizontally in the `Button`.

Clicking on the `Button` takes the user to the next page in the app (if one exists, which is not the case in the app below).

::: tip Example

In this example, the GUI consists only of the `Button`, making it cover the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVjr1qwzAUhV9FPZMDGtqUDtXmZigZCoVmaKkDFvZ1MZFlIV1DgtG7V06Iibt1uuf+nfON0M5Bjaj6mqBQGR2CeDvlzgk6Mtk6iKTHwhZcedJMH6w9v+sfylbnacGeePBWzItpGgsbESWa3tTkA9T3iLaGepCwupuSzueQ6JsmEH9C3V/1V9JxL+GS1+LzYra9NAvgOXuGnpob6teh/cv7MjD3Nis3pq0OoqO7cjWTSxyh1o9riVOqT89XnB11ziS7BdaCJA+HbZPXg+F/oOzSaVbe5Md9/AXuAI5X]

:::


## Going to another page
By default, when the user clicks on the `Button`, the user will come to the same `Page` again. To take the user to another page instead, use the configuration method `page()`:

::: tip Example

::bagawork-project[app&link&code=StartPage-DestinationPage&baga=eNqVkU1LxDAQhv9KnVMLQbSyRXPrIix7EEQXVOxCQzvVsm1SkinuUvLf7Qft2h6EPWVmMvPO8yYNiKoC3kCiUgQOSSGMcZ5OYVU5eCSUqXHauIlkRIlGQfhKQtOz+ELX66sRaaRaS2e66Ko2khYsg0wVKWoD/LOBPAV+y0CKstvUtwMDlWUG6R34zRh/tLHdM6hardnkILYdkhnwtHuC7pI/1Js6X/KuayIl3XijHPpGjbF33W10H9FQLgXlSnYi3mSHwRG4f+czOLXn6sGygcz/j2yhdgHfi/ox7lCJaNfOufEbFokq0aEeeal9FXts7B/NrUVy6NqnBxpdToVxZuFzFQSDz+B+/IsdllXRss7+ZGY2NIdtFqZ1QRf4HKzF5/12b38BK4nntQ==]

:::

The value you pass to `page()` can be the same type of value you pass as the `page` argument in the [Direction](/documentation/direction) constructor. It's typically the name of the `Page` class the user should come to.



## Handling clicks
To run some of your own code when the user clicks on the `Button`, create a new method containing that code, and pass the method to the configuration method `handler()`.

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNqVkE9Pg0AQxb/KOvEAcUPaGg+S9NB6MD34J9qDTWnClh0sKeyS3UXbEL67CwgNptF4WWaYfW/2/UpgeQ5+CZHkCD5EKdOaPBxneU7wYFBwTWxdBiIwUswxlgodt2kDwzxRZFtUT/G8MHZ8lybRXpMpGdXzqj4ihczgq2HKPLP3k1ShKZQg/aAXJMJKMhTm8Yz1X5uvpmT87VRBRSGWKUelwV+XkHDwxxQEy+qczWKgIONYo3kDf9TVK1tXGwq5fdVA2Zot2maAq0/RI6ub8pT/vkh+Jn+Rn9pp/wRmaXVOuJIF2bEPJFGdBjkxOyTbJh+5LM9HrohJMtRe6NLOrB07YXOBZHgRut6OCZ6icpj3K9/OxO0hUjiAP7meUDja781tR2aJWZ7aZANCAygzvV/EM16k5h9UWhDhaX+1qb4AEZ/xvg==]

:::