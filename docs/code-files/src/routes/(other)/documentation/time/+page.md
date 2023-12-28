<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Time`
On this page you find the documentation for the class `Time`.


## Introduction
You can use the `Time` class to create an object that represents a specific point in time.



## Creating a new `Time` object
To create a new `Time` object, simply write `Time`. This way, you obtain a `Time` object representing the time `0001-01-01 00:00:00`. Below you can see the names for the different parts a `Time` object consists of.

```
   Date     Clock  
┝━━━━━━━━┥ ┝━━━━━━┥
0001-01-01 00:00:00
┝━━┥ ┝┥ ┝┥ ┝┥ ┝┥ ┝┥
Year │  │ Hour │  │
  Month │  Minute │
       Day     Second
```

Often, you want to obtain the time that happen to be when your code is running. Call the method `setNow()` on your `Time` object to change the time in it to the time that happened to be when the computer calls `setNow()`.




## Retrieving parts from a `Time` object
Use the different `getXXX()` methods on the `Time` object to retrieve the different parts. The methods ending with `AsString()` returns a string, the other ones return a number.

* `getDate()` to get the date parts of the time (year, month and day of month) as a string
* `getClock()` to get the clock parts (hour, minute and second) of the time as a string
* `getYear()` to get the year
* `getMonth()` to get the month
* `getDay()` to get the day
* `getHour()` to get the hour
* `getMinute()` to get the minute
* `getSecond()` to get the second
* `getMillisecond()` to get the millisecond

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFVG1r2zAQ/itCDGaDMUnGYBhGcV9o+6FlNIEtNIUI+xybKpLRC60x/u+T69irHDu4H0Y/JJGeu+fu9NxdSkzyHAcljngMOMARJVKiuyLMcwSvClgskTmXG7ZR9ScSQBQsFRHqF9mB4zYWJUBpwVBnqNGqIVW48nDCaQxC4uCxxFmMg7mHGdnXGd8o2MM8SSSoPziYtee1OVdPHs5NPIvZBLttLlbhXf6u+PrSVa+yPaCfaGV+fJPgnr84bmvj7BwSLv49KfdV36+yZbjWWV+AB/4i/SjNaCyAOY1po5Y5icBrbytTm6/Ml7Pdgbo0gRw3QF/KQ8IOq7buCGcNRPQ5DTbOueNMpX3SARxnXZLiuLjiFOOC8ui5zzmA46wbro9e1GAnXpQxfaxdi47zlhBxFvd5LXoqH6WZHCRbpvcR7M6fa2Xm7BDxARIBMu2cXWtnPPyKg8XMLEOBg2+zbhFWsM+pGQ9rIawdCOXzbRLGmp5YhKNh/y/THQpABdfobV2RSglD8x9no+pccKr3bCBB37En5D3fun6tjcM0pa43kbYGOY031KBawjBRIIYUrP/xmt4ser25YoYS7uCzO/M7JeqrrJsjkMl+Nm1i57NhwWyn7xOcFlMiLUYiva/wIz15qv4Cu66BGw==]

:::




## Changing a `Time` object
Use the different `setXXX()` methods on the `Time` object to change which time it should represent. All `setXXX()` methods return the `Time` object itself, so method calls are chainable, just as they are for GUI components. Use:

* `setNow()` to populate the time object with the time that happen to be when the call to `setNow()` is executed by the computer
* `setDate()` to set the year, month and day of month
* `setClock()` to set the hour, minute and second
* `setYear()` to set the year
* `setMonth()` to set the month
* `setDay()` to set the day of month
* `setHour()` to set the hour
* `setMinute()` to set the minute
* `setSecond()` to set the second
* `setMillisecond()` to set the millisecond

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU2Fr2zAQ/SviGMwCYZyMbsMwhtuN0Q8bYw10YS5E2OckVJGMdGYNxv99Ut16cYi3fBjsg23pdO/e3XtWC7KuIW2hMCVCCoWSzrHP+6yuGT4Q6tIxv25znVN4CouS8Iakpa9yjRHvT8giNVaz4SBEux7UQSegMqpE6yD90cK2hHQmQMtdYHyEgABTVQ7pO6TJ83rp192dgNrXGyH7Ytf9ZtT4wD80HzZD97TdIXvHFv4Te4IrZYr76EKw14K94SGyRGmjeZIkfDzwp2Z7POo389PFxWarSos66o9yuqllgeJ5t/BdxORf0WqN9MEXinjKXrR1HDqJh1i34hOYvsUj0FPwEHXIy0fiC3iA1I8kYA/pq2RQdIG7Wnn2kbIjMTN3f11lZaP+oKjRl1gZ+/tHOOD+d+JlFtneNOzRd0Ybqdns7fuJ8XO6MqrZ6RMEx4k5XTbkZ3ii+WJWPA7aRLpRioszYUt05+H4CYOChFlFaE8pGK5O7838yJuP2kOyNf5vZ243kl66YI5lnn3ak5Fis+S0YOOkizOS5udUmk9Umro0f/PkrvsFSoLhVA==]

:::

There are also several `addXXX()` methods avaialble to add seconds, minutes, hours, etc. to the `Time` object:

* `addMilliseconds()` to add a some number of milliseconds to the `Time` object
* `addSeconds()` to add a some number of seconds to the `Time` object
* `addMinutes()` to add a some number of minutes to the `Time` object
* `addHours()` to add a some number of hours to the `Time` object
* `addDays()` to add a some number of days to the `Time` object
* `addMonths()` to add a some number of months to the `Time` object
* `addYears()` to add a some number of years to the `Time` object

::: tip Removing time

No `removeXXX()` methods exist. Instead, simply pass negative numbers to the `addXXX()` methods to remove time, e.g. `addHours(-1)` to remove one hour from the `Time` object.

:::


::: warning Watch out!

`addMonths()` and `addYears()` are not always intuitive to use. For example, if if you have a `Time` object representing the date `2023-01-31` and you add one month to it, it will not represent the date `2023-02-31`, because that date doesn't exist! Instead, some logic is applied to find a logical valid date close to `2023-02-31`.

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU11r2zAU/SviMpgNnkkyBsMwhvtB6cPKWANdmQsR1nViaktGkkmN8X+fFLVOHOzND4M92OjjnnvuPeeqBVpVELWQCoYQQVpQpci3Jq4qgi8aOVPErNuEJ9p+qUSq8V5Tqb/TLXq+u9ESdS056S/saedAHXQBZKJgKBVEv1rIGUTLADgtLeMBAgGILFOof0K0eFs/mnX3FEBl8g2QLtmt2wwK7/n74u2mr75BpVEy2pAvZJ2XGBqWO7H3/JAydkUb5X1Y+jZQi5Egd1EKKcV+MoHDH6W6qfNzkX6IvQrTXV4widxzV4m+r2iKwdtubeoPtfl5m8e+6FxF5F1bhX0b4Rb1lSHx/G7jj2HX4hR36GoG5rXFI8wdjCNP6/YHtgfwAtFqYfxsIPq46L1cY1kVJs/A04GNsXq+zWJWF3/wUvALzIQ8juAJ978TP5ZIGlGTw8QRvaOcLD9/nWg/0ZeiqEs+QnAemOiL2gwTf6W5Exs/tNp4vC4KP5gJM6MxD+ePGGQljDMzSGMK2kfrvFmdeXPNDSTe4v925mFH9XtlzZHEsE97MlBsuRgXbBj0aUbQak6m1USmqUfzN0+eut9RTRAX]

:::







## `getCopy()` - Obtaining a copy
Call the method `getCopy()` to get back a new `Time` object representing the same time as the one in the `Time` object you called the method on.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFVO9r2zAQ/VduYlAbjJtkDIZhjHQbWz+sjCXQlblQ1T7H3hTJyPLSEPy/72THrp06az4M9sFGv969d+902jGe5yzYsUjFyAIWCV4U8GU7z3PAB4MyLoDGu1CGxn6RRm5wYbg2X/kKHbfZMRpNqSV0G3a1akAVqzyWKBGjLljwY8eymAVTj0m+tow1hHlMJUmB5jsLJu34hsbVrcdyijdANsEum8lAeMffibeTTr3S2SqTXMBbWGZr9InkSm0ct85M5Vtal6UQdiqVeT9cqQPIC0yUfsy7+Z+fwzVCQfERONSRVAImRTBEA+r+J0YGMgkhs5sh8xtc7u9Zc7+V5q+wJm5E9QgWCqKUS7ICjOoCgZJiCzxJiIA2Um76lAMam+0Ncu1MJ5PJYfTPSNI3CLGSZwaaKu9T8aBQcK9MSqR7V4iXy7gDh6xVTxsaEyq01agk2mO1DwUVu6/sRavs0edHD55mniVWXJP/E19NqlW5Suv1nsQO/5vrjN8L9OoTrYmbTAjgwuZG8lK1kf1A47m1kQ7Vd9bOhtZWw7b5VGaHDfNNbQo/SjMRa5TOHmkWOY/Qa2dLusu+oZ9z12oJ4OVueGc+UHzHre7cMZgtYwOpL8Jzx/dZNYg2xVFQX6g76HmPPbCA7PDYlgWvJl0jL3GdC4ozaOhBD8+LX5fJPC7F3xp5rA//udtz6omtKqF+bmxzSZi+eXck/ZBsEuVajhAcHgzNRWkohz3NlbpzfeuNY58a1zsRdoPFaTh3pEDWwnliUI85aF/spjazg9p8lASZr/B/V+aaHrqzwhZHA7Efr8nAselk3LDhodcnHJqdEml2JNKxpnmuJrfVH0qtxXQ=]

:::




## Comparing `Time` objects
Use the different `isXXX()` methods to compare different `Time` objects:

* `timeA.isSameAs(timeB)` to check if the `Time` objects `timeA` and `timeB` represent the same point in time
* `timeA.isBefore(timeB)` to check if the `Time` object `timeA` represents a time that happen before the `Time` object `timeB` represents
* `timeA.isBeforeOrSameAs(timeB)` to check if the `Time` object `timeA` represents a time that happen before or at the same time the `Time` object `timeB` represents

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFVO9rnEAQ/VeWoVAXRDxDaRFK8Ewo+dAf9A7SkAvcomNO4q2yu9Ic4v/e9byTrKixpZAP3u06M2/evtlnBawowK8gymMEH6KMSUm+HoKiIPiskMeS6HW14RvVPJFApnClmFA/2CNatI0ogaoUnHSB5m3dFtVQ25DkWYxCgn9fQRqDv7CBs33T8VgCNuRJIlH9At89r+/0un6wodB4RmULdtNuDOJd/458s+nYq3SPAflM1vrf0R2u9Fksz/UubLLw9PORnrOWs7LCiaxP1NTsS5n21fqZ/5ZOtEuzWCC32tBGrQoWoX3erfVBHKV/rO2RvZPKlRYukNaRJvXJu6pweqH2xZLWWzoTKJwCCg2gV/ktMckFDvI7hWbyewEUTgH9E7/vYkLHXspf8TWAwznA4/yp4SMbnsH3XG2QA/gXbmeONe6LTF8xwySGLwL5dJMEcZlNmCPnJ1HPt/RF7/93iQOB5JCX5GhhonaMa6tcjo4vzLNyzwca9BM3alkqfYZTm2/5ljqNNhYvs4zaM8vuUM6rowMDaiQMEoViSMHmK9jOxuvN5prrkuAR33oytzum3stmOILo7uMzMRRbuMOCmUkfZiR5c5C8EaQx07w2k4f6D1HXgHI=]

:::

::: tip Tips!

You can also use:

* `timeA < timeB` instead of `timeA.isBefore(timeB)`
* `timeA <= timeB` instead of `timeA.isBeforeOrSameAs(timeB)`

:::

::: warning == does not work!

You cannot use `timeA == timeB` to check if they represent the same point in time, because in JavaScript, the `==` operator always checks if the objects refer to the same object instance.

:::