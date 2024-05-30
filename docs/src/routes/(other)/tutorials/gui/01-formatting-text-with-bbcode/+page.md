<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Formatting Text with BBCode
This tutorial will teach you how to format text using BBCode.



## Introduction
When your app shows text to the user, it will by default look like ordinary text, similiar to this text that you are reading now. Using BBCode, you can format the text, to change its size, color, boldness, etc.




## Enabling BBCode
GUI components that display text has a configuration method called `text()` you can call to make it display ordinary text. Examples of these are:

* `Text.text()`
* `Button.text()`

If you instead want the component to be able to display text that has been formatted with BBCode, you need to use the configuration method `textWithBBCode()` instead.



## Using simple BBCode tags
To format text, you simply surround the text with *BBCode tags*, which describes how the surrounded text should be formated. For example, text surrounded with the BBCode start tag `[b]` (`b` is short for bold) and the end tag `[/b]` will display the surrounded tag as bold.


::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU1Fr2zAQ/ivHvcwGkTUJgeGX4ZQx+rAx1kBXkkBU+xybOZKRzqwh+L9PqptsNnGbh0IfbHS6u+87fZ90QFlVGB0w0SlhhEkprYVv+7iqgB6ZVGrBrQ8rtWL/JYYk0y1Lwz/kloKwzbAhro2CU8LvNm1Tg43ATJcpGYvR8oBFitFYoJI7z/jUggJ1llniXxhdHdf3bt2sBVYOr9PZgt20QWfwE/9peB/0pv9aF/25f+o/dpTkRZkaUkGbWvFtJRMSx2jhIEfsfncF5/P5teMNNou8sOAzkOhdpRUphuXDOtVkoba0/PiwhrZ2tAnFK8AvwynNPUgBVgPn9BwCy60FaQjSwlal3FMK0oJHHiIPOz4JfHSSzmYC9xhNp9Oj+AvaOTjumtDRPba/b7I4rcsXxNdqTpk2/+7Mf9xvZU2wid3x97qGpyvixJEKxp8+D2p/rct6p84Q9AtXPK/ZneGZ5rvehCOvTaDqsgzFhW33ZC/rC88Y5CWMMyZzTkH/ylpvJj1vvijXEm/pvZ25yyV/sN4cA4592JOOYuOr84J1i2YXFE0uQZoMIA09mtc8WTd/AZ3J88Y=]

:::

Here are a few examples of some more BBCode tags you can use:

* `[i]` and `[/i]` to make the surrounded text *italic*
* `[u]` and `[/u]` to make the surrounded text <span style="text-decoration: underline;">underlined</span>
* `[s]` and `[/s]` to make the surrounded text <span style="text-decoration: line-through;">strike throughed</span>

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KODezQaRNQmD4ZjhljF6slDXQlcQQxT6ORRXJ6IM1BP/3SfWS1iFuwzrYhe2jj/Oe4/eRdsDqGpId5KpASCAXzBjyfZvWNcEni7IwxMe7hVzY8OQamcU7y7S9ZWuM4nbFarROS3JYCLNNm9RAQ6FUokBtIJnvgBeQDClItgkVn1OAgipLg/YnJJf7+MHHTUah9nqdzFbsuh10Gj/UPzQfBkfdf3P8uO8f6pcZ5BUXhUYZtUsLe1ezHOl+NPOSA+tf99xW0+mVrxstZxU3JEwS/52vspVvbX6xygbLmP61DM+4ZYLn8wv+MSGXOemdElyi78p9TMxkxmr+iMRWWrl1FSRNr2TcOQEUnjysyYTCFpLxeLzHOsNNLTySDt4O0dQ8Xpdp4cQbWJWcYqn0y2l8VftfQY+WqUayVY48Hz5vApNk+PlLr6NXSriNPFHgeOPCTp31//CnzI1axoPgTSSdEDE9M+0BzXl58QlAwcK0tKhPORjub8tmdMTmq/Qp6Rr/N5n7itlPJsDRxFfvZ9JxbHh52rDupskZm0bnKI16lPouzXtMsuY3mQoWtQ==]

:::

It's also possible to use multiple BBCode tags in the same string.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUl1L60AQ/SvrvJjAUm1L4ZIXSUXEB0W04JU0kG0yMcHtbtgPtJT8d3eNraZUqU8+ZJndmTNzzpmsgTUNRGvIZYEQQc6Z1uR6FTcNwVeDotDExeu5mBv/5QqZwXvDlLllTxiEXcYoNFYJsk3417YDtdBSKCUvUGmIkjXUBURDCoIt/cR3CFCQZanR/IfodBM/urhNKTSuXw/ZNbvqLj3i2/lb8v6yw/7S1ru8Z658YNzxUJtqOj13PYMsWaSzqtbJySIlSZ36dHJSu9im/tW6aJHmUnJfcZSFPc0UXh29yYTCCqLxeLwRMsNlwx2JnqCehlg/X5VxYfkPQqSYYinVp/9fZv8g806+6EFe1bxQKIIPpLlvWI50c9taEWSxQrKSlrzbTUzFBBn+O8tCuh95Lrldij0DdgvnZmqN0/Ax5kZm4cB7EwjLeUgPhD2iPgy3yYQ9k6SIS4Nqn4P+j+12M9rZzYVwkPgJ/3ozDxUzx9ovRxE3/fud9Bwbnu43rF80OaBodEin0TedvjL8zU7S9g3IrLI3]

:::



## Nestling BBCode tags
Do you want text to be both bold and italic? No problem, just nestle the tags, e.g. surround the text with `[b][i]` and `[/i][/b]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk29L40AQxr/KMm9MYGltS+HIG0nlUF8ocgoqaaBrMrHB7W7YP5yl5LvfbmPrpTRnEOFeJOxkZ34zeZ7dDbCqgmgDmcwRIsg405pcr+OqIvhmUOSauPVmLubGP5lCZvDOMGVu2QsGYbNjFBqrBNlv+K91U1RDTaGQPEelIUo2UOYQjSgItvIdtyVAQRaFRvMI0elu/eTWdUqhcrxWZQO7aoLW4Pv+++F9cDD9hS0P5/4lf+tBtix5rlAEzdbc3FUsQ7qL7h1yYNzroTTL2ezc9Q0Wl6iQJM9pUqalJlqukGRS8mRYpsnwOSU+f7AI6ReQjueoHulp79ivIROb9qImQ5t2kMOWoxTenPjTKYU1RJPJZGfTPa4q7iRu2dVyKNavV0WcW/4Pm6SYYSHVx+n6q/d3mRgsYifIWlqyPUzELJkgox9nncKeS25X4kiDw8S5mVnj/uG9zY1chAOvTSAs5yHtWfaEul9deMQgL2FcGFTHFPT3sfFmfODNT+FK4hf83848LJk50d4cRVz3bk9aio1OjwvWTpr2SBr3IY07SF2X5jNP0voPcbEDnw==]

:::

Just remember to close the tags in correct order. If `[b]` comes before `[i]`, then `[/i]` must come before `[/b]`; one should always be able to tell if one tag is used inside another, or if it's the other way around. Examples:

* `[b]This [i]is[/i] text.[/b]` is OK, because we can see that the `i` tag is used in the `b` tag
* `[b]This[/b] is [i]text[/i].` is OK, because we have no nestling at all
* `[b]This [i]is[/b] text.[/i]` is NOT OK, because it's unclear if `i` is used in `b`, or if `b` is used in `i`



## Using BBCode tags with an attribute
Some BBCode tags has an *attribute*, that provides additional information about how the BBCode tag should work.

To change the color of a text, you surround the text with `[color=THE_COLOR]` and `[/color]`, where `THE_COLOR` should be the name of a color in English, and it indicates the color the text will have, for example `[color=red]` to make the text red.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU2FLwzAQ/SvhvthCmG5jIAWRTkT9oIgKOrbCQnt1xSwpSYqO0f9ustppx6oFBT8kvSR3713fS9bA8hyCNcQyQQgg5kxrcr0K85zgm0GRaGLj9UzMjBuxQmbw3jBlbtkzen51YhSaQgmyPXC7ZVVUQkkhlTxBpSGYriFLIOhTEGzpGDclQEGmqUbzBMFRHU9sXEYUcovXqKzArqpFo/Et/7Z5t9jp/qLIdvu+k6+6Fy8ynigUXnU0M/c5i5HWqwcL2TN2eszMYjw+s7ze/BIVkkwTLZdIprHkUp0oTCI7iMudHm72ot7cp7+EXSHn8jWqPr8B/9Jmg6fumTCRdCCtgxZyv3EFKLxZt0YjCisIhsNh7esDLnNuPWn427A01C9XaZgU/BtfpRhjKtXndfzC/Veue/PQarWSBdncPmIWTJD+8Wmr9meSF0uxh2A3cWbGhbH/8EFzI+d+z2njiYJzn3Ysm6DuVufvMchJGKYG1T4F3QOuvBnseHMubEn4jP/tzOOCmQPtzFHEsrd70lCsf7RfsGbSqEPSoAvSoAWp7dH85ElUvgMeiBiv]

:::


In a similar way, you can change the size of the text by using the BBCode tag `size`, and as attribute give it the number of millimeters heigh the text should be.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU11r2zAU/SvivswGkeaDjGIYxQlj68PGWApZSQwR9nVjJktGklmy4P8+KU7SOthtWAt9sKwr3XvO1TnSDlhRQLCDWCYIAcScaU2+bcOiILgxKBJN7Hy3FEvjvlghMzgzTJkf7AE9v94xCk2pBDltuNWqLqqgopBKnqDSECx2kCUQDCgIljvGfQlQkGmq0fyCoH+c39t5FVEoLF6jsga7rYNG4yf+U/MuOOv+S5md9/1T/tG9eJ3xRKHw6q2lmRUsRnqM7ixkz9hhnpn1ZDK1vN7qKyokmSZa5kgWOvuLn0aRzhnnxKUurtxS1Fv59HWg1xFnyh7r/0FrnI9RA/wRlDCRHLiGLQc4/Dso/YbdFDbWmfGYwhaC0Wh09PAO84Jb/RteNuwL9e/bNExK/oyHUkwwlerx6j3hfiuHvVVoRdrKkuxvGjFrJsjg+qZT8ankZS5aCM4Tl2ZSGnuGA813ufJ7ThtPlJz79MKye9SX1fktBjkJw9SgalPQPdbam+GZN5+FLQkf8L2dma+Z+aCdOYpY9m5PGooN+u2CNZPGFyQNL0EadiB1PZqXPImqf6wbD04=]

:::


## Links
To display some text as a link the user can click on to open a webpage in a web browser, format the text as an URL that identifies which webpage the link should lead to by surroinding it with `[url]` and `[/url]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1r4zAQ/StiLo1BOE1CYPGlOKEsPeyybAttSQJW7XFjqkhGGq8bgv/7SnXj1iEt6akHG43m4715TzsQZQnRDlKdIUSQSmEt+7WNy5LhM6HKLHPn3VItyX+pQUF4TcLQH/GIg6DNkEGqjGJdwt82bVMDDYdcywyNhWixgyKDaMRBiY1HfGkBDjrPLdIdROf78707NysOpZvX62yHXbVBj3iH35H3wQH7n1VxyPvGlYfkfrcFrWezuZs5aAuWlMxlkT4xrdiiMnK1JiptNBzWdR2qQnkUHaZ6sxj6LCPN/hVYM1oLYjU+ePKsUEz4gD0YXVs0YdIOD3oycXh2G02nHLYQTSaT/e43uCml493ToLd2bJ+u8jir5Ce7azXDXJs3y95hf6LMX0c4TNeFzAyqTpPrUqTI91Gn3iCJDbKtrtiLQ14ExUY/LpKAH++ca1lt1BGAw8IlzSpyO7zC/NZJEHptBqqSMuAntt2jPa1vnwl6ImkV54TmmIL+kbfejA+8uXRPxMSP+N3O3LoHeWa9OYY59I896Sk2Oj8uWL9oekLR+JRJ4w8mvWf4FU9WzX8a8sX4]

:::

To display another text than the URL, provide the URL as the attribute to the `[url]` tag.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFklFr2zAQx7+KuJfFIJwmITAMpThhjD60lLXQlSRg1T43popkpPPcEPzdJ9WNW4e0ZE97SNBZd/e/+/21A1GWEO0g1RlCBKkU1rKrbVyWDF8IVWaZO++Wakn+lxoUhLckDN2IJxwE7Q0ZpMoo1l34r01b1EDDIdcyQ2MhWuygyCAacVBi4xVfS4CDznOL9Buis/35wZ2bFYfS9etVts0u26A3eKffDe+Dg+l/VsXh3HcuPST3d1/Qejabu56DNmFJyVwW6TPTii0qI8/XRKWNhsO6rkNVKK+iw1RvVtdvwWLo0laMNPtTYM1oLYjV+Oi3YIViwgfs0ejaogmTViXo8eLw4labTjlsIZpMJnsId7gppVugB6O3f2yfL/M4q+QXELSaYa7Nu3cftL9A9MsNHKbrQmYGVQfnthQp8n3UYRwksUG21RV7tcpDUGz0/SIJ+PHKuZbVRh0ROExc0qwit8ObzLVOgtCzGahKyoCfWPaA9rS6/U3Qg6RVnBOaYwT9a2+9GR9488M9DxM/4f925t49yG/Wm2OYU//ckx6x0dlxYP2k6QlJ41M6jT/p9HHCf/Fk1fwFy6fJdA==]

:::



## That's it!
Fantastic, now you also now how to format text to make it look prettier. Good work! 🥳 In next tutorial we will take a look at how we can style not only the text in the componment, but the component itself.