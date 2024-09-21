<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Updater`
On this page you find the documentation for the GUI Component `Updater`.

::: warning Note!

`Updater` is not an ordinary GUI component. It can be created the same way as a GUI component, but it is not part of the GUI itself. Instead, it is used to dynamically create a child component, and it is the child component that is part of the GUI. So you can't call configuration methods like `.size()` or `.backgroundColor()` on the `Updater` component. Do that on the child component it creates instead.

:::



## Introduction
By default, the GUI can only be changed by taking the user to another page (including to the same page), such as when the user clicks on a :docs[Button]. But, with the `Updater` component, you can update a part of the GUI on the current page whenever you want, without taking the user to another page. 

::: tip Example

Example showing what the `Updater` component can do (in this case updating a :docs[Text] component to show the current time every second).

::bagawork-project[app&baga=eNptUcFqwzAM/RWjUwImpNvNsMPoYeywMdYMNpYejKO2ZqltbHdpCfn32XMT0tKDhWTpPT0/98CNAdaD0A0CA9Fy58jL6dEYgkePqnEk5H2tah+PsMg9rjy3/o1vMctTx1v0B6vI1Ii3QwINMFDY6LZB64B99yAbYAsKiu/jxn8IUNCbjUP/Cawc86+QD2sKJvBdIBPZcyouhE/7J/GxuFL/dJDXut915wqxk21jUWWpVfuV4QLpWH2YJoBtIVWIv7zNFmVZ5gm1jMTaZqZIK6qwfrXTnVTbZavFT05vceYzl0Zx18hJaYpCK+eJ0h15IJXcYxF8etVdls+Hzo+KVIUPIQvzxRb9mXA2O30RhSOwuzJ4fwJ2X06+V7g3bZAV/V8Pf8xFyE0=]

:::



## `childCreator()` - Specifying the GUI
Use the configuration method `childCreator()` to tell the `Updater` component how it should create the part of the GUI it is responsible for. Pass it a function that creates and returns a GUI component that represent that part of the GUI.

The function you pass to `childCreator()` will be called immediately when the user comes to the page, but it can also be called at later points in time to create a new version of the GUI for that part.

::: tip Example

In this example, the method passed to `childCreator()` is only called when the user directly comes to to the page, so the usefulness of the `Updater` component is not shown, but it demonstrated how one can use `childCreator()`.

::bagawork-project[app&link&code=StartPage&baga=eNptUcFqwzAM/RWjUwImZNvNsMPoYfSwMdYONtYejKOkYaltbJe0hPz77LkxadjBQrL0np6fB+BaAxtAqAqBgei4teTl8qQ1wbNDWVni82Endy4cYZA73Dhu3BtvMMtjxxl0JyNJaoTbMYJGGCnUqqvQWGDfA7QVsDsKkh/Dxj8IUFB1bdF9Aiun/Mvn456C9nw3yEi2jsWN8LQ/iQ/FQv3zqV3qfle9LcSh7SqDMoutndtoLpBO1YeuPNjEsVVgUibTReTc+n2bg+pb2aw6JX5y+h9JPrNlUrNEJmkxCiWtI1L15JFs2yMW3phX1Wf5fOj6ikBVOB8yP1806K6Es9n0JxTOwO5Lb/YF2EOZjN7iUXdeVjB8P/4C87zDqA==]

:::



## `interval()` - Setting the interval
Use the configuration method `interval()` to tell the `Updater` component how often it should update the part of the GUI it is responsible for. Pass it the time as the number of milliseconds between the updates.

::: tip Example

In this example, the method passed to `childCreator()` will be called when the user comes to the page, and then also every second after that.

::bagawork-project[app&link&code=StartPage&baga=eNptUcFqwzAM/RWjUwImpNvNsMPoYeywMdYMNpYejKO2ZqltbHdpCfn32XMT0tKDhWTpPT0/98CNAdaD0A0CA9Fy58jL6dEYgkePqnEk5H2tah+PsMg9rjy3/o1vMctTx1v0B6vI1Ii3QwINMFDY6LZB64B99yAbYAsKiu/jxn8IUNCbjUP/Cawc86+QD2sKJvBdIBPZcyouhE/7J/GxuFL/dJDXut915wqxk21jUWWpVfuV4QLpWH2YJoBtIVWIv7zNFmVZ5gm1jMTaZqZIK6qwfrXTnVTbZavFT05vceYzl0Zx18hJaYpCK+eJ0h15IJXcYxF8etVdls+Hzo+KVIUPIQvzxRb9mXA2O30RhSOwuzJ4fwJ2X06+V7g3bZAV/V8Pf8xFyE0=]

:::



## `name()` - Manually triggering updates
Use the configuration method `name()` to give your `Updater` component instance a name. You can then call the function `runUpdater()` and pass it the same name whenever you want the `Updater` to update its GUI.

::: warning Warning!

Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can achieve the same result by loading the page anew, that is usually better to do than triggering your own manual updates.

:::

::: warning Note!

A click on a :docs[Button] does by default take the user to the next page. If you want a part of the GUI to be updated on the current page instead, you must call the configuration method `.stay()` on the `Button` to not take the user to the next page.

:::

::: tip Example

In this example, the displayed time is only updated when you click on the `Button`.

::bagawork-project[app&link&code=StartPage&baga=eNptUt9LwzAQ/lfCPbVQwtS3gg+6B/FBkW2C4oSF5roWuyQkV7pR+r+bmK1204eWu959P/KlPQhjIO+h0BIhh6IRzrGnw50xDPeESjrm636t1hSewqIgXJKw9CK2mKRxQhaptYqNg/B1iKABhgxK3Ui0DvKPHmoJ+VUGSuyC4g8EMtBl6ZDeIJ+d6ndfD58ZGM93hoxkj7E5Mz7qj+ZDc+H+oa0vfS9053hR1Y20qJI4WtPSiAKzU/dqpAdbHnwnG4ulRVdt0gibB2ZtE8OjxsrrLyvd1Wo7b3TxlWb/k963RFpx8uvJZjFyOhKHJOWVULLBwBqruD1vak8YGdJJ0KfzXWqPh43vQitHTOmO3bJVvUPuo37WXZJOl465BKpozu/zLdKRcLI7iv+x+Btyq47hTXI7+0My2EN+PfNXf4D8ZjZe+wp3pvHAcP2fwzeXAfmC]

:::