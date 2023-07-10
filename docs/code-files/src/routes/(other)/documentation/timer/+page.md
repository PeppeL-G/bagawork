<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Timer`
On this page you find the documentation for the GUI Component `Timer`.





## Introduction
The `Timer` component is a view that functions as a timer: you specify what time should be used, and then the `Timer` will count down to `0` in real time, after which it will take the user to the next page.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqNUU1rwzAM/StCpw5Mv8YOy62n0cNgsMI2lkK9WFnMXNvYytoS8t/npDRrbr3Ykp6f9PTcoPQeswYLpwgzLIyMEZ5PK++BjkxWRUhxk9uci0CS6ZVl4Bf5TZO7vppzIK6DBUsHuAI7rM1ti63A0hlFIWL22aBWmC0EWrnv5vUEFOjKMhK/Yza/xB8pbrcCfeo2Yp6brc/JSPYwfZDeJVfan2o9qJ7N4I2gkr8E1jFET4UuNSk4VLqogKtUT22gmw86CohuIHKl4xk4aGPgiyCQcVL1bLI9mfWeQn9GcDVPR15tOnAaqXBJ5WQx/3dL4BGz5f1S4CndD48XCza09yatMLJitP0q/qzLlaoN37L+RUh6Otntrn5r2/4B5cu5Mw==]

:::




## Setting the time
You can use a combination of the following configuration methods to specify how long time the `Timer` should run before taking the user to next page:

* `milliseconds()`
* `seconds()`
* `minutes()`
* `hours()`

For example, `Timer.minutes(3).seconds(90)` would make the `Timer` run for 4 minutes and 30 seconds.

Instead of using the mentioned configuration methods to specify the time, you can pass it a Unix timestamp as its main content. A Unix timestamp is a number of milliseconds that has elapsed since the start of 1970, and the `Timer` will count down until the Unix timestamp it received occurs. In JavaScript, `Date.now()` returns the current Unix timestamp.

For example, `Timer(Date.now() + 10*1000)` would have the same meaning as `Timer.seconds(10)`. The latter is of course better to use in this example, but for advanced apps it can be more convenient to work with Unix timestamps.




## Adding `Direction`
To indicate which `Page` the user should come to when the `Timer` times out, use the configuration method `page()`:

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkcFqwzAMhl/F6JSCKVvWjs237DJ6GAzWw8ZSiEmUEZY4xlZYS/C7z07arOlh0JMly/+vT3IPUmsQPeRtgSAgr6W17OWQaM1wT6gKy3zcpyql3KAkfCNp6FV+YbQYblMySJ1RTOEPOyuGmkuVA8ehbOsCjQXx2UNVgLjloGQT+g0C4NCWpUV6B3Fzij987HYctHebKUezzZjMsKfuE3pIztifu+qS+qkjalWUDVpGVYMmWyxD02gbkuDwNwuHPYg4vuNw8OfDveMjVvwf1uRzBdagWVrMW/8+Wh+JpgEviFaPqyPR+rSyLTa69t6z1c2wEvu9KZOiq+kaLv80yrKz3925X8AQyG4=]

:::

The `page()` configuration method accepts the same type of values as the `page` parameter in the [Direction](/documentation/direction) constructor.





## Handling timeouts
Use the configuration method `handler()` to specify a function that should be called when the timer times out.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVklFLwzAQx79KvKcUwtBuihYU6ovsQRDcg2IHDe1Vi21akitulH53k3ar7R6EPeUul///fnekBVnXELSQVClCAEkhjWHP+7CuGe4IVWqYjdtIRZRolISvJDW9yE/kXn8bkUZqtGIKf9ik6GpdpDroBGRVkaI2EHy0kKcQXAlQsnT9egEIqLLMIL1BcHmM323cbQXU1m2mHMzWQzLDHruP6C6ZsD81+Sn1Y0NUKR73WkZ5iTr2Fq4p37jEOfzNImAHge8vBezteXvTiQHL/w9r9DkDq9csDCaVfc+XB6JxQG/xJVVaoObcY/cPTNqQeAROVjV0EYF3Ar26Wx2gr49b3WBZF7b9bLsz8tB8r7MwbQo6B90+5XE8+QDb7hc7PtNC]

:::