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

::bagawork-project[app&link&code=StartPage&baga=eNqVzj1rwzAQBuC/or5TAqI0KR2qzelQMgQKzdBSByKsczGxZSGdIcHov1dOGhN366S70308PbRzUD2K1hAUilqHIDanzDlBRyZrgkhxn9ucC0+a6Z215zf9TbP5uZqzJ+68FePHUI25jYgSZVsb8gHqq0dloBYSVjfDpXM7JNqyDMQfUA/X+DPFcSfh0q7J5GXZ+pJMwOPtET0kN+rXrvrrXXXMrb3nNDHbv9RVcRAN3e3nI1/iCLV8XEqc0vv0fDVtqXF12jmxTThZOKzLzHQ1/8OzTa2/mhtE3MUft6aSPQ==]

:::


## Going to another page
By default, when the user clicks on the `Button`, the user will come to the same `Page` again. To take the user to another page instead, use the configuration method `page()`:

::: tip Example

::bagawork-project[app&link&code=StartPage-DestinationPage&baga=eNqVkVFrgzAUhf+Ku08KoWyOls03y6D0YTC2wjZmwaDXVaqJJFfWIvnvi3Xa6sOgT7m5yTn3O0kDvKogaCCRKUIAScG1dp6PYVU5eCAUqXZs3UQiokQhJ3wjruiFf6PrnboRKaRaCWc4aLsmEgYMg0wWKSoNwVcDeQrBHQPBy3bS6TowkFmmkT4guO3rT1ubLYPKeo2Undm624yAh9kDdLu5oF7V+ZR3WRNJMSOrcOOVdGiHCmNv1o51n1BTLjjlUrRO3pCJwQEC/95ncLTr/NGwDs//D2/idgXkq/zRs2SXF6lC4XZHEW2swR/4OxaJLNGhU4DppJvYY71olHfJk32rGR6uDz40euEk+nyx6KIvHvo/2mBZFRZ/9Fej/KHer7MwrQu6IvpFyPgMYbbmFwRb8vg=]

:::

The value you pass to `page()` can be the same type of value you pass as the `page` argument in the [Direction](/documentation/direction) constructor. It's typically the name of the `Page` class the user should come to.



## Handling clicks
To run some of your own code when the user clicks on the `Button`, create a new method containing that code, and pass the method to the configuration method `handler()`.

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage&baga=eNqVkE9Pg0AQxb/KOvFAIyFtjQdJemg9mB78E+1BI03YsoOQwkJ2B21D+O4uUKiYRuNldyZv582+Xwk8z8EtIcgEggtBwrVmd/t5njPcEUqhmalLT3qUyQWGmUJr1LQecUcW6QbVQ7goyMg3SRxsNZuxca1X9REo5ITPxBU98vfjqEIqlGS90A/E0oykKOn+hPVfmy9mbHJwqqCyIcwSgUqD+1ZCLMCd2CB5WudsFoMNWRhqpBdwx139aupqbUNufjWYbM2WbTPA1afokdVNecx/W8Q/kz9ln9oJojgRCqXVSh6tjIFD5rD816xgEf9AFtTZUDCKkG2atOy8PA2gYhSnqB1/ZHeOrXzwbF6xFM/8kRNxKRJUFnd+Rd45jXquNuzAnV5Obdib++q6g7XCNE9M2AG0Aae53i7DuSgS+geob0j84yeqdfUFzkT7Dg==]

:::