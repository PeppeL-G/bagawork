<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Time`
On this page you find the documentation for the class `Time`.


## Introduction
You can use the `Time` class to create an object that represents a specific point in time.



## Creating a new `Time` object
To create a new `Time` object, simply write `Time`. This way, you obtain a `Time` object representing the time `0001-01-01 00:00:00`.

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

::bagawork-project[app&link&code=StartPage&baga=eNrFlG1r2zAQx7+KEIPZYEySMRiGUdx2bH3RMprAFpZChH2OTRXJ6IHWGH/3SXXiRY4dPBjshW3ppN/9T3cn15iUJY5qnPAUcIQTSqRE91VclgheFbBUIjOuN2yj7JMIIAqWigj1nezA89sVJUBpwVC3YK1NCzW4CXDGaQpC4uhXjYsUR/MAM7K3im8IDjDPMgnqJ45mx/HajJunAJfGn0O2zu7aiRN4p98Fbydd9KrYA/qMVuYTGoEH/uL57sm+6qJ/pkf+IsMkL2gqgHnt0kYtS5JAcJytjFyozMvb7kDdGkeeH6F3dRlaybCzNVt/hFkDEX2mtY0z95ypvA8djOPULanOg6suETeUJ8995mAcp75xfXai1nbhRAXT57k7Wse5JSScpX3uaL2kR2khB2Fn6dSDW/lrrRRnB4+PkAmQebfZd65BgF9xtJiZ/q5w9GHW9fYK9iU17eH0uNPWsXy+y+JU0wu9zdk1ZFz8uZIn2v+uu2MBqOIavd1ApHLC0PzT1Wh2bjjVezYg0N/YS+QD3/qhzY3HNKV+MBFbg5zGDRXIpjDOFIihDNqfWFubRa82X5hB4h3878r8yIl6L21xBDLqV9M6dj4bTpi76eOETYspnhYjnk4j/JuaPDW/Adb5cB4=]

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