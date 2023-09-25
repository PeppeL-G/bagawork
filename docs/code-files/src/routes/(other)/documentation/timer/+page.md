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

::bagawork-project[app&link&code=StartPage&baga=eNqVklFLhEAQx7/KNk8Ki5R3RQkF9hL3EATdQ5EHLjqWpKvsjnSH+N3bVc/0HoJ72pmd/f/nN8O2IOoaghaSKkUIICmE1uz5ENY1wz2hTDUzcRvJiBKFgvCVhKIX8YmO299GpJAaJZnEHzYr2loXyQ46DllVpKg0BB8t5CkEVxykKG2/XgAcqizTSG8QXB7jdxN3Ow61cVsoB7PNkCywp+4Tuk1m7E9Nfkr92BBV0iOjcOLegFFeoopdz3Z2tjaxNn8DcdhD4PsrDgdz3t50fGDz/2ObfM5g6zWexqQy753VSDRN6XpfQqYFKsdx2f0DEyY0Q1hV1dBF7J4gr+/WI/L1cbFbLOvCNF8seMEd6u9NFqZNQeeAm6fjSuPZR9h1v4FG1uw=]

:::