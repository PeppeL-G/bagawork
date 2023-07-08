<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 4. GUI Layouts
This tutorial will teach you how to create more fancy GUIs by using multiple GUI components in your pages' GUIs.

## The root component
As you know, you should in the `Page` method `.createGui()` use GUI components from Bagawork to create and send back the page's GUI. This method, as all methods, can only send back one value, and in this case that value should be a GUI component. That GUI component is know as the page's *root component*, and it will cover the entire screen. That it indeed does cover the entire screen is easy to verify by giving the component a background color.

::: tip Example

In the app below, the root component of the page has no background color, and it's the application's default background color we se. So it's hard to tell what space the root component occupies (but it still does occupy the entire screen).

::bagawork-project[link&app&code=StartPage&baga=eNpdkEFPwzAMhf+K5QubFKECt9w4IQ6TkOgBRCctJO5a0SZR7IpNVf87aScqxu3Zz7G/lxFNjKhHtMERarSdYYbd+TFGoJOQdwxZj5WvxCYyQq9ikryYI222S7eSRDIkD6sxd6fKTzgprEPnKDHqjxFbh/pOoTf9fGkZR4WhrpnkDXXxq9+znvYKY9519fKy7PlSXAGvt1foufhD/TS0/3nLPLo5lE3LiwQb+hg8eYHGMPgAn8Z+HVMYvFPAAVq54WwlBxICMBF8N0aAo7GUTQjWDrElvj1s1x9QeEJ9X+RoZ9QPxRqrpD52GWuOt59+AIgBhuw=]

:::

::: tip Example

In the app below, the root component of the page has an orange background color, so it's easy to see what space it occupies (the entire screen).

::bagawork-project[link&app&code=StartPage&baga=eNpdUMFOwzAM/RXLFzYpmgbcckMcEAckJHYA0Uk1qdtVdHEUp2JT1X8n3URh3J7tZ7/3PCCFgHZAJxWjRdeRKjwd70IAPiT2lULGQ+GL5CJT4pdEMT1Tw4vlqVukyKmPHubB1B0LP+JosJau4qho3wdsK7TXBj3tJ6UTHQ1KXSunV7TrH/yW8bg1GPKti83zscdzcWF41p5NT8Uf1w99+9/vJlNXH+Q+myi9r+6lk7goJZJvuFwuys2u1RMJnOyDePYJdqRAHs4k+F02oAJtulJg0iMkEVBm+NpRAg3kOA9BnOtDy7oql/OLDB7Q3qxz9iPa2/Wce8P70GXfU/7t+A1b65Nn]

:::




## Using multiple GUI components
*But if `createGui()` can send back only one GUI component, how can I use multiple GUI components?* Well, there exists some GUI components whose sole purpose it to contain and position other GUI components on the screen. These GUI components are called *layouts*, and the GUI components they contain are called *children*.

By using a layout, `createGui()` can send back only one GUI component (the layout), but that GUI component can in turn contain other GUI components. And when the layout component is shown on the screen, it will position and show the children components it contains on the screen too. This way we can build a GUI consisting of multiple GUI components!

Let's go through some of the layouts we can use.

## The `Rows` component
The GUI component called `Rows` is a layout that positions its children as rows:

* The first child is at the top
* The second child is below the first child
* The third child is below the second child
* And so on...

All children are as wide as the `Rows` component, and their height is by default just big enough to surround their content. The `Rows` component's main content should be the children it should contain (pass them as individual arguments to `Rows()` by separating them by `,` (comma)).

::: tip Example

Example of how to use the `Rows` components. All GUI components are given a background color, so one easily can see the space they occupy.

::bagawork-project[link&app&code=StartPage&baga=eNp1kM1OwzAQhF/F2guxZKEAN98QB9QDEoIeQKSSTbxprSa2sTdqqyjvTtKIiEJ7m/35dkfTgQ4BZAelNwgSylqnxJ4O9yEw3BM6k9igu8IVVEbUhK+kIz3rNWb82C0oIrXRsXkwdvvC9dALqHxtMCaQHx1YA/JGgNPN+Om4DgJ8VSWkN5D5j34fdL8SEIZbJ+R0bDEVJ4bn37Ppsfjl+rG1f/2++F26/tTldh1968yDr33MVESjeDYtFrQczmVqcdUw2iCrbEzEot8p/h8M1m0VF+fJhKV35hKqv1p9EaWNjRfJ2jao+ATyOXcBe5C3+RDoAeRdPoe5xCbUQxhjqKv+G3bestc=]

:::

### Positioning children
As you can see in the previous example, the children in `Rows` will be positioned at the top of the `Rows` component. You can use the GUI component `Space` as children in `Rows` to push apart the children. The `Space` component is a GUI component who's purpose is to simply occupy space, so the other children in `Rows` are positioned where they should be.

If the `Rows` component contains a single `Space` child, that `Space` child will occupy all the space remaining after the other children have occupied their spaces.

::: tip Example

Example of using `Rows` with a `Space` child.

::bagawork-project[link&app&code=StartPage&baga=eNp1UMtqwzAQ/BWxl1ogitPedCs9lBwKJcmhpQ5ItdapiS0JaU0SjP+9ckxM08dt9jGzs9OD9h5kD6UzCBLKRsfInk8P3jM8EloTWcJ9YQsqA2rCNelAL3qHGT93CwpIXbBsHozdobADDAIq1xgMEeR7D7UBuRBgdTteOq+DAFdVEekVZH7BbwkPWwE+aV0xJ7HlVFwZnm/Ppsfim+unrv7pd+UO8fZDl/tdcJ01j65xIVMBjeLZtFjQJsllannTMvpEVtUhEgvuoPhvoq/tXnFxYa69LlH8rZMs/yvT1C0qPvH4nKSAI8i7PEV0Anmfz/FssPVNem+MaTt8AYS8ok4=]

:::

If you use multiple `Space` children in `Rows`, then the height of the `Space` children will be evenly divided among them.

::: tip Example

Example of using `Rows` with two `Space` children.

::bagawork-project[link&app&code=StartPage&baga=eNqNkUFLAzEQhf9KmIsbCFL1lpt4kB4EsT0obiExmW1Dd5OYZGnLsv/dbJcuVi14m5nM++bx0oH0HngHymkEDqqWMZKnw733BPcJrY4k111py6QCyoSLJEN6lmss6HFapoCpDZZMD8O0L20PPYPK1RpDBP7egdHAbxhY2QyXjuvAwFVVxPQKfHaq33Ldrxj4zDpTjrD52JwZnm5Ppofmm+vH1vz0++J28fpDqu06uNbqB1e7UIiAWtBiXCzTMuMKMb9qSNogqUyIiQS3E/S30Bu7FZSdlAsvFbK/ORGVs/oSSH628p+gtDHhIqc2DQo6Cun0Jwz2wG9nOewD8LvZFPQSG1/noIbAV/0XHDG9ew==]

:::

The `Space` component doesn't show anything, so you can't see it on the screen. But if you give it a background color, you can easily see what space it occupies. That is a very good thing to do while learning and developing, but not something one use in the final application.

::: tip Example

Example of using `Rows` with three `Space` children.

::bagawork-project[link&app&code=StartPage&baga=eNqFUUFqwzAQ/IrYS20wxW1vupUeSg6F0uTQUgesWOtERJZUSW5ijP9eOSYmbjC5ze7O7AxMC8wYoC0UmiNQKCRzjrw1z8YQPHpU3JGA20xlvrDIPC49s/6dbTGKT9vMW/S1VWQ89NsuUx10CZRacrQO6HcLggN9SECxqnc60SEBXZYO/SfQ9Iy/Au7WCZjwa6Icni2GYRJ49B5D98NF6tda/M/7oQ/ufsOK/dbqWvEXLbWNcos8j6OBmPlVeBfli7uK+B2SUljnidWHPL4WGqH2eZyclUvDCrxmOSF/0V7wpg4OC634nAX7qdltiwal7PW3eJvgomaT+J2ws0GkqDCPB2E81p3AEehjGnpsgD6lY4crrIwMHfRdrrs/WWjgQA==]

:::



## The `Columns` component
The GUI component called `Columns` is a layout that positions its children as columns:

* The first child is to the left
* The second child is to the right of the first child
* The third child is to the right of the second child
* And so on...

All children are as tall as the `Columns` component, and their width is by default just big enough to surround their content. The `Columns` component's main content should be the children it should contain (pass them as individual arguments to `Columns()` by separating them by `,` (comma)).

::: tip Example

Example of how to use the `Columns` components. All GUI components are given a background color, so one easily can see the space they occupy.

::bagawork-project[link&app&code=StartPage&baga=eNptkEFLxDAQhf9KmVMDQarechNB2YMgbA+KXUhspmvYNIlJCruU/nfTLQbr7m3mzZeZlzeCcA7YCK2VCAxaLUIoXk4PzhV4jGhkKFI9NqaJrUcRcRuFj69ijyU5q030GAdvijyY1akxE0wUOqsl+gDsYwQlgd1SMKKfL51xoGC7LmB8A1b91u+pnnYUXNq1erks2yzNynC+nU3PzR/Xz4P67/fR6qE34eZTtIe9t4ORSbG+5B4lJ+XCNrFOG0v+pHyInFzCTpkDJ3RNb7G1Rl7DxfcgLvD6S/mrtFY9crLAJMdK4Qjsrkp5nYDdVzmrGnun01/nzHbTD6GwqCs=]

:::

### Positioning children
Just as the `Rows` component, you can insert extra `Space` children to position the children.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNptUMFKxDAU/JXyTg0EqXrLTTyIoLDs7kGxC4nNaw2bJiFJYZfSfzfdssGqt3kvM/MmM4JwDtgIjZUIDBotQihezw/OFXiKaGQoEh5rU8fGo4i4i8LHjeiwJJdtHT3GwZsiP8zbqTYTTBRaqyX6AOxjBCWB3VIwop8vXehAwbZtwPgGrLri94SnAwWXvFbKxex5GVaB8+0ceh5+pH4a1O+8j1YPvQk3n6I5dt4ORqaN9SX3KDkpF24d98mx5C/YRk7+cp0yR07olbxzokG6lm5V9/WvVqseOVnIJJdG4QTsrkptnIHdV7mJPfZOp5/MjRymb740m4U=]

:::

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNplUEFqwzAQ/IrZkw2iuO1Nt5JD6SFQSA4tVcCqtA4mtiSkNSQY/b2yTUTd3mZWM7szmkA6B3wCZTUCB9XLEIr97cW5Aq+ERoci4UkYQcqjJDyQ9PQuz1hWy1SQRxq9KfLDPI3CRIgMWttr9AH41wSdBv7IwMhhvrTIgYFt24D0Aby+48+E44mBS7s2znXZ20o2gfPtHHomv1K/jt3fvDvbj4MJD99SXc7ejkanifVl41E3VblqBR2cVMju7Jj2l80ODeEi++92nbk0FdvYV1Llj2FwBf5Up8Y34M91bnvEwfUp7dz6FH8AFsyRVw==]

:::



## Combining Layouts
So far you might not be that impressed. Not many applications have a GUI consisting of only rows or of only columns like that. But fear not; here's the secret to success: one can use a layout component as a child in another layout component! This way, a wide vararity GUIs can be implemented.


::: tip Example

Example of how to combine the `Rows` component and the `Columns` component to create a layout with a bottom navigation view (learn how to make it functional later).

::bagawork-project[link&app&code=StartPage&baga=eNqNks1qwzAQhF9F7KU2iJKfm26lh5JDaWlyaKkDVuy1K2JLQpKbBON3rxxj4ySG9LYr7X4zSFMD1xpYDYlKERgkBbeWvJ6etCZ4dChTS3xdRzJyiUHucO24ce88xyA8n0bOoKuMJMNFe9pEsoGGQqaKFI0F9l2DSIHNKUhetkrncaCgssyi+wQ26+svXzdbCtqzLjY72KprLgwP2oPpthm5fqnEtd8PdbCPO57sc6MqmT6rQpkgNpjGYdANRm6teYK07zYeHsSrh5K4HyQlF5IkSno9F4e3JC3kPg7pNMrPVKWc0C9EiSMD13u9iTfthJJkPiWc+2caCd9BLKYQVhS/aP4PWU5BdkYd5C2jb8OuCIe4UDgCW8x8Dk7AlrMhAxssdeH/sM3CtvkD1af46g==]

:::


## That's it!
Good work, now you have learned the basics about using layouts and building more fancy GUIs! 🥳 It takes some practice before you're good at seeing GUIs as rows and columns, but you actually don't need more than this to create a wide variety of layouts. Just look at your web browser; all GUI components in it are arranged as rows and columns!