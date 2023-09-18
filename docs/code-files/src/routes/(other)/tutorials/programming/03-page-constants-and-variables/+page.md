<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Page Constants and Variables
This tutorial will teach you how to create and use page constants and page variables.



## `Page.onBefore()`
Just as `App.onBefore()` is called directly when your app starts/before the first page is shown on the screen, `Page.onBefore()` in each of your pages will be called each time the user comes to that page/before it's shown on the screen. And this is of course something we can use to change our app variables, or run whichever code we want each time the user comes to a specific page.

::: tip Example

Example of an app that uses `Page.onBefore()` in `BobPage` and `ClairePage`.

::bagawork-project[app&link&code=MyApp-StartPage-BobPage-ClairePage&baga=eNrVk01rg0AQhv/KduhBQUJtgglCD7GHtIdCaXNoaAJudSxS48ruShLE/95dt5pYUmmPPcjOjPvOxzNsBbQowK8gYjGCD1FGhSAPh3lRENxLzGNBlF2t87XUH8sDTBhHyzYhSUc53SK5IeE8SyMMdbRub0ccqcRnSbl8pO9HEUdZ8px0P05ENdQOJCyLkQvwXytIY/BdB3QV1V8jAQdYkgiUL+BftfZK2fXGgULl6ylNsnvj9Mbs6nejaqfqd78o0+99P7GdsExkLZdKa4V3mGWMXFYGR30R2k57ISilwmaFC0YkIwF7I7rF0B7pw1K+LvrT9duMphx7ChM6Fdk9fg7s1agzBeYA/tj1aseguB5C8dXGeRADS1e6cyv/HbQVKzlpMqWC5Gx35Dc6wy+g0YdGIvTWekS6PQ4AmXheA8Sdzlog4yEgR8p/ZmKk/wTL1G2wTLxZ+3iWuC0y1ax+RJv6E3UKcrU=]

:::




### The `p` variable
Just as the `a` variable (short for **a**pp) is an object that we can store constants and variables in, each page has their own `p` variable (short for **p**age), which is an object respective page can store constants and variables that should only exist on respective page.

::: tip Example

Example of an app with a page that uses a page constant.

::bagawork-project[app&link&code=StartPage&baga=eNp1kF1LwzAUhv/K4eDFBqU4BJGCF1WGeLEproLDDRvb01HokpCkc6Xkv5tYWlc/LgLnI+8553lbZFJi1GImcsIIs4ppDYsmlhLoaIjnGlzcbvjG+Cf4DRVC0WTalQwLOdsTXEMaV2VGqa/a/nemiBlaGabMI9t9ixSZWnEYGiciizbAQlQ5KY3Ra4tljtEsQL/F3fclwQBFUWgyLxid9/HaxXYboHTzRspu2H2XjDCH/QOqT/5nleHtw/MyeVq/LePF3DOvPign/hf0XV3+xE3clkl61o7HWCg1MNh5FWSi5kY1IcwPpJp3kTdQiQNp+KUK0+nItQCPDvDK2dFgdDG77K1IaC8rd4+3ZGs/AVf3rIA=]

:::



## Page methods
Just as you can add your own methods to your `App` class, you can also add your own methods to your `Page` class, and then refer to them using the `p` variable. But note that a page can only access its own methods through the `p` variable, and never another page's methods.

Most apps typically store data in the `a` variable, and it is usually initialized in `App.onBefore()`. And in many pages you need to tell the computer what to do when the user clicks on a button on that page, or when the user in some other way interact with the GUI on the page, and that code is usually written as methods on respective page.

::: tip Example

Example of an app that initializes app data in `App.onBefore()`, and that have methods in `Page` classes to change that data when the user clicks on a button on respective page.

::bagawork-project[app&link&code=MyApp-StartPage-ChangeNamePage&baga=eNqtUsFKw0AQ/ZV18JBACLZSkYCHtgf1oIj2oNhC1mRiA9ts2GywJeTfne0msdFYLx4Wdmf2vXlvZirgeQ5BBZGMEQKIBC8Kdreb5jnDrcYsLhjdq2W21ObIbIaJVOi4NqS5n/ENsisWTkUaYWiidfs7Usg1Pmmu9AN//wIp1KXKWJc4ANVQe5BIEaMqIHitII0hGHlgqpC+PQQ8kElSoH6G4Ky9v9C9XnmQE18Paclu7aNns6vfWTWPqq/+uky/636UH4VjI0u9IKwT3qAQkp1Wth31Seh67YdZqaltTjhf84xKmXzo+kamY0P3FDGFW4jba4cHW1J+ST53EJyPLmrPOhsfc9Yn/gd76YG3hp3tZKn2dtgaFfrHLTMt2Uy+kXOKxQKVk/s0NSNxISnRdKQbyZ9kc8FThcN8Nvcbpdvb0UMRA1ttNA//t0UGII2yn1OcjCfNFCftpi5wkwsag9nYVf0JWjVBMA==]

:::




## That's it!
Congratulation, now you know how to use page constants and page variables too! 🥳