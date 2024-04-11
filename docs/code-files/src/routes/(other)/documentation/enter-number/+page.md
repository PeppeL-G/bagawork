<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterNumber`
On this page you find the documentation for the GUI Component `EnterNumber`.

## Introduction
The `EnterNumber` component is a view in which the user can enter a number. If the user presses the Enter key (`↵`) in the component, the app will progress to the next page.

::: tip Example

In this example, the GUI consists of only the `EnterNumber` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkE+LwjAQxb9KeSeFsLjKHja3HkQ8KIIedtkKxma6iG0akikoJd99U8Xudm9eJm/+vfmRFspayBZ5rQkSeam8T1bX1NqELkxG+yTqNjMZ544U05aV4436ptH4Vs3YETfOJH2jq4bMBASBoi41OQ/51eKkIV8FjKq6S7dxCNRF4Yk/ICcP/Rl12AvY6DXYvJst78kAuL/dQ3fJH+pFc/rPOzdMbt1UR3I9scAFcjqbClzj+/b+wNhRZctoM8AZEKT+vCxS3ZT8BMIujr5wDKPDYfz7bfvwA6H9jis=]

:::



## `number()` - Setting an initial number
Use the configuration method `number()` to give the `EnterNumber` a number it will contain initially.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjj9rwzAQxb+KeZMDIjQOHarNQykZGgLN0FIHolrnEmrLQjpDgtF3r+wQt+7W5e7dv3e/HspayB5lqwkSZa28T54vubUJnZmM9knUfWEKLh0pphdWjnfqk9LF2C3YEXfOJNNg6IbCBASBqq01OQ/53uOkIVcCRjXDp3EdAm1VeeJXyLubfos6HARs9JpdXs0212IGPP2eoIfiF/VTd/rL+2iY3LZrPsgtzZjSVbZeTPQCZ8hsnQlcYr5/uCHtqbF1tJyhzWhy/7Wpct3V/A+cfVxdcgzp8fgDEQ7hGxbtkck=]

:::




## `placeholder()` - Setting a placeholder text
Use the configuration method `placeholder()` to show a text in the `EnterNumber` component when no number is shown. Try typing some digits in the example below, and see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVj71qwzAUhV/FnMkBEdqUDtXmoYQMDYVmaKkDVq3rNsSWhXQNCUbvXtkhJu7WRff3nPuph7IWskfZaoJEWSvvk5dzZm1CJyajfRLzPjc5l44U0xsrx6/qm9LF2M3ZEXfOJNNg6IbcBASBqq01OQ/52eOgIe8FjGqGS+M6BNqq8sTvkHfX/CPmYS9go9dMeTHbXIoZ8HR7gh6KG+p1d/jL+2yY3LZrvsgtba1K+hnt02IcJFFfLKavCJwgVw8rgXOMj09Xvh01Uctzzhla5o+bKtNdzf9g28XVJccnLW4gwj78AjLJlzg=]

:::





## `page()`, `pageIfEqual()`, `pageIfLower()`, `pageIfHigher()` & `pageIfBetween()` - Going to next page
There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:

* `pageIfEqual(number, page)`
* `pageIfLower(number, page)`
* `pageIfHigher(number, page)`
* `pageIfBetween(lowNumber, highNumber, page)`

These methods can be called multiple times. In addition to those, you can also use `page(page)` to specify the page the user should come to if the entered number isn't true for any of the previously mentioned configuration methods.

Example:

```js
EnterNumber
	.pageIfEqual(2, TwoPage) // Go to TwoPage if the user enters 2.
	.pageIfEqual(6, SixPage) // Go to SixPage if the user enters 6.
	.pageIfLower(0, NegativePage) // Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.
	.pageIfHigher(100, HighPage) // Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.
	.pageIfBetween(50, 60, MiddlePage) // Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.
	.page(DefaultPage) // Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.
```

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqtlM2O2jAQx1/F61MiuajhY4FcKrZasagfW3U5tGpWwiQTsAh2ajtlU5RzX2Wfq09SJyGBtAtSpZzsGY9n/j/PyHtM4xi7e+yLALCL/YgqhT6kkzhG8KSBBwqZ/d7jnvYlUA0Pmkr9ia7AsguvpyXoRHJUH+TezOMZzggORRSAVNj9tscswK5DMKfbvFIRjgkWYahAf8Fub1QZX7H7qtfNHgmOTbrG5TLfrDQamuvyte7cOBE+Tdjfkj+Lner4axYFErhVHnl6bhJ0FPsJlmN3tDGsxZ3YoS3lKUqBSoWMCEQloFQkbxY2qS6+FVGy5S9k9PQt1yA/JtslyKPTq8s0fDn0LHwvdiCt1wTN+A8asWCyghzopdDb7wmN8tB3LDgXcwN6B0aSiXJGFyKtSZBE+lyWO7ZaG1XO4F9d5Bh+k2gt+OHpfv96PnmiamfXQ0LwE3a7TpfgFLv9QT8jZbO7l5rdrN1Ox0u58zXVKM/JFGJllc6J/gbaVKAl9TcLu3y5egLPQA6G1wWkM+5VkL1LkIcetUk3WROk18DzyS0mmCKlWRSZdWNA0VSIAIVC5udXyLVbIh8OnEN7xxV5/xJ5PYNtst8bdgkqBl8jLXJCgpZshVZJetUSZ388LDivR8Pq95rDNo6M4sYv1oRVm1lYEP8H7QnX4igie8z+AF+SCn0=]

:::



## `store()` - Storing the entered number
Use the configuration method `store()` to store the number the user entered in an object (for example in `a` or `p`). Pass it two values:

1. The object in which the entered number should be stored (e.g. `a` or `p`)
2. The name of the variable in the object where the entered number should be stored

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage-GreetingPage&baga=eNqtktFKhEAUhl9lOnShYNJuRCREbBHVRRHVRZGBk54tSWdk5shmMte9Ss/VkzTmqmtEEHQhnjPj+ef/P6cGXhQQ1BDLBCGAOONas7NqVhQMXwhFopmt61CE1Dz8Edke25h0fayQE14RV3Rh9xy3/ZIUUqkE6zeaVdMOGTAezGWWoNIQ3NWQJhBMPBA8bxx8jYAHcj7XSDcQbHb1ra3NvQeF1RtNtmKnbTMK0p/fh2maenB+XKbfPV/KhfbjpzRLFAqn3Qrp2gr4On1FZ+L6ZBsnOpELlnNRsQq50syaYFwhq2S5H7leN3goszIXPyiGdCQI1XmZP6DqpTVJhQ73WGSNRq7fhHWOFSKl4rExPyiHdFASSbG08/H2vnKs2xbuEryxRF8gmG5NPajse3vXeC2/6W/8Vg/+H4RLdJhlsiHFFk/yi9p6zX2rawaYaytpRkEPePzMSA4/t8PUL3SD39Jv7+wu0/f36BrzIrMhRvdphGCmn0/ns6TM6A8AVqJGgwlzbz4BjFE3MA==]

:::



## `defaultNumber()` - Specifying a default number
Use the configuration method `defaultNumber()` to specify which number that should be used if the user doesn't enter a number at all (i.e. if the user leaves the input field empty). If you don't call this configuration method, `0` will be used as the default number automatically.

::: tip Example

In the previous example, click on the `⇨` button without entering a number, and see that `0` is used by default. Do the same thing in this example, and see that `10` is used by default.

::bagawork-project[app&link&code=MyApp-StartPage-GreetingPage&baga=eNqtUttK5EAQ/ZXeYh8SiMEZETEgy4ws6oMi6oNihPQmFQ0m3aG7whhDP/srftd+yXbMJJkMIiz4ELouqVPnnO4GeFlC0EAsE4QA4pxrzc7rRVkyfCEUiWY2bkIRUvvxR2RHbGfW57FCTnhNXNGl7Tlu9ycppEoJNjTaqumGDBgPUpknqDQE9w1kCQQzDwQvWgYfI+CBTFONdAvBbh/f2dg8eFBavMlkB3bWJRMhw/5BTJs0I/OTKtvmfCVX2o+fsjxRKJyuFdKNBfB19orOzPXJJk50Kles4KJmNXKlmSXBuEJWy+pX5Hr94LHMq0J8ghjSb0GoLqriD6oBOsGUVzl1VWe26/qapEKHeyyy1CPXb+U7JwqRMvHYyhl3hbSsiKRYE/z79r5BxO0Cd30Vxnr8AsF8b+5Bbc/9Q+N1js6/cnRz8feYujYT81y23rHVk/zw8WfDfYtrRnt/bKiZCF3y+JmRHK+7t2ko9INb6vcPDtfqh5d1g0WZWxGTFzaxYKGfz9JFYm/pPwzYkBqNJMyD+QddRT1e]

:::




## `handler()` - Handling the entered number
Use the configuration method `handler()` to tell the `EnterNumber` component which method to call to handle the entered number. The method will be passed the entered number as an argument. 

::: tip Example

::bagawork-project[app&link&code=MyApp-StartPage-GreetingPage&baga=eNqdUs1u1DAQfhVjcUhQiNigCjUSQluESg8gBD1QkUrrxrPdqI4d2RNtQ+RzX4Xn4klw4vwWhASHKOMZz/j7mZayqqJpS3PFgaY0F8wY8qHZVhWBewTJDXFxm8kMu4/dAnlNnm+6mKv6RgDf+lQyXsk1MIQvyDR+cteD0DejBqy1JFOhy1rfZKmN6F4JDtrQ9FtLC07TTUQlKztQfQuNqNrvDeBXmr4Y4ysX2+uIVm7eqtMPu/CHFbfp/Ylfd2jX6M/r4jHuz+po4vxQCK5BBr6U4aUbEpviOwSbMEZ3CHbv1ZGUTDakAaYNcUAI00AaVb/ZhdHY+FaJupR/mJjhO4mgP9blDehp9IFJLkAH1RD1d3rtw7gjH5xrACzkbUdmfiXDsxpRyQHaz4cfCwihD8KFERk+Hh/A/NIgCIv9FsyVMb/aiLlMnpFk5XZE72mavEwi2rj/yamNvHHJ34xbMvzdu//xbfALhFCdPeR4UL1VT9ueop0dfEKuVK3JwI90CArT35sp23ih7Ur2M5bfEVTz6u0G06bE2Dh6MUh08up0kGja8ksoK+GYrrZ9pdPW3F3st7wW+A8qLfTYzSDstf0F+Ot3iw==]

:::