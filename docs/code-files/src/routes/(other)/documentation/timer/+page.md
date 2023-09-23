<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Timer`
On this page you find the documentation for the GUI Component `Timer`.





## Introduction
The `Timer` component is a view that functions as a timer: you specify what time should be used, and then the `Timer` will count down to `0` in real time, after which it will take the user to the next page.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqNUU1rwzAM/StCpw5Mv8YOy62n0cNgsMI2lkK9WFnMXNvYytoS8t/npDRrbr3Ykp6f9PTcoPQeswYLpwgzLIyMEZ5PK++BjkxWRUhxk9uci0CS6ZVl4Bf5TZO7vppzIK6DBUsHuAI7rM1ti63A0hlFIWL22aBWmC0EWrnv5vUEFOjKMhK/Yza/xB8pbrcCfeo2Yp6brc/JSPYwfZDeJVfan2o9qJ7N4I2gkr8E1jFET4UuNSk4VLqogKtUT22gmw86CohuIHKl4xk4aGPgiyCQcVL1bLI9mfWeQn9GcDVPR15tOnAaqXBJ5WQx/3dL4BGz5f1S4CndD48XCza09yatMLJitP0q/qzLlaoN37L+RUh6OuV0THa7qy/btn+K97sm]

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

::bagawork-project[app&link&code=StartPage&baga=eNqVkU1rwzAMhv+K0SkFE7asHZtv2WX0MBish42lEJMoIyxxjK2wluD/PuejWdPDoCdLlt9Xj+QOpNYgOsiaHEFAVklr2csx1prhgVDllvm4S1RCmUFJ+EbS0Kv8wmA13CZkkFqjmMIfdlbsay5RDhyHoqlyNBbEZwdlDuKWg5J1328QAIemKCzSO4ibU/zhY7fnoL3bQjmabcdkgT13n9H75Iz9uS0vqZ9aokaF5BVBOhgwKms06SrsOwe7Pult/gbicAARRXccjv58uHd8ZIv+Y5t9rmAbNKHFrPHvg81ENE95QbR+XE9Em9Pedljrynsv9rfAiu33tojztqJruPzTaWPp2T/v3S/0msxU]

:::

The `page()` configuration method accepts the same type of values as the `page` parameter in the [Direction](/documentation/direction) constructor.





## Handling timeouts
Use the configuration method `handler()` to specify a function that should be called when the timer times out.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVklFLwzAQx79KvKcUQtFuihYU6ovsQRDcg2IHDe1Vi21akitulH53k26r7R6EPeUul///fnekA9k0EHaQ1hlCCGkpjWHPu6hpGG4JVWaYjbtYxZRqlISvJDW9yE/k3nAbk0ZqtWIKf9ik6Gp9rHroBeR1maE2EH50UGQQXglQsnL9BgEIqPPcIL1BeHmM323cbwQ01m2m3Jut9skMe+w+ortkwv7UFqfUjy1RrXyyCp4MBoyKCnXi+a4zX7vE2fwNJGALYRAsBOzseXvTiz1b8B/b6HMG26DxDaa1fc8XB6JxSs//kiorUXPusfsHJm1IPAYnq1u6iME7gV7eLQ/Q18fVrrFqStt+tuIZeWS+V3mUtSWdg26fHpaaTL7Cpv8F6iXXKA==]

:::