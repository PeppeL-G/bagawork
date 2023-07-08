<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Slider`
On this page you find the documentation for the GUI Component `Slider`.

## Introduction
The `Slider` component is a view in which the user can select a number in an interval. The configuration methods `min()` and `max()` specifies the interval.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD9rwzAQxb+KeJMDIjgpHarNU8lQKCRDSx2IsM7FVJaFJFMHo+9eOSGp3a3Tvfv37seNkNZCjKg6RRCotPSevZwLaxkNgYzyLOmxNGWoHMlA+yBdeJWflK0u1TI4Cr0zzNA3mzWnXixNROSoO63IeYiPEY2C2HAY2U73Lgvg6OraU3iDyG/6Pel45LDJbbF5NdtdkwX2/fodfUpm7M9985d6r5vktm4bk+WrdSuHbJPnv/AcA8T2YctxTvHx6UZ0oNbq5LggW8AU/mtXF6rX4R80hzSanU6z5x3jDxI7kDg=]

:::




## Setting the initial number
By default, the initial number will be the one between the minimum and maximum number. If you want to use another one, pass that number as the main content to the `Slider`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkD1rwzAQhv+KuEkBUZqvodo8lQyFQDIk1IEI61xMZVlIZ+Jg9N8rJyS1u3W6977ee7gelHMgeygajSChMCoE9nHNnGPYEVodWNJ9bnMqPCrCHSlPW/WFfHar5uSRWm+ZxQsbNYdezG2EKKBsjEYfQH72UGmQcwFW1cO92wIIaMoyIB1Avj70Mel4EuCS22Tzbra5JxPs5/Un+pCM2N/b6i/1zlTJja9mL3Vl+TwF1fH1L72ADuRiuRBwTXH99kDaY+1MspygTWiy8L0pM90a+gfOPo3y83n0vVP8AYSmkGI=]

:::




## Setting the step
By default, the user can only select integer numbers between the minimum and maximum number. Use the configuration method `step()` to change the default step from `1` to another number.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkE1rwzAMhv9K0MkBE/pBDvMtp9HDYNAeNpZCTayUMMcxtkJTgv/7nJZ2yW47+ZVkvXqkEaS1IEaoOoUgoNLS++TtWlib4EBolE+iHktTUuVQEu5JOnqXZ2TpLVuSQ+qdSQxekllxqoXSBAgc6k4rdB7E1wiNArHmYGQ7zbs1AIeurj3SB4jVQ39GHY4cbHRbdN7Ndvdggf2c/kSfghn7a9/8pd7rJrplbWPYOs08oWWrLE+zVg4s/12CwwBis91wuMY3f3mQHbC1OjovCBdQhf/e1YXqNf2D6hC/stNpdsRj+AF1vZKr]

:::




## Adding `Direction`s
Use the configuration method `pages()` to specify which `Page` the user should come to depending on which number she selects. The value should be an object, where the keys represent intervals of numbers the user can select, and the corresponding values indicates which `Page` the user should come to if the user selects a number within that interval.

The intervals can be expressed as strings the following ways:

* A single number, for example:
	* `'18'`: The interval `18` to `18` (matches only `18`)
* A minimum number and a maximum number separated by `_`, for example:
	* `'0_18'`: The interval `0` to `18` (matches all numbers between `0` and `18` (inclusive `0` and `18`))

When the interval consists of two numbers, one of them can be `X`. If the first number is `X`, that means no lower limit exists (i.e. `X` = `-∞`), and if the second number is `X`, that means no upper limit exists (i.e. `X` = `∞`). Examples:

* `'X_10'`: The interval `-∞` to `10` (inclusive `10`)
* `'23_X'`: The interval `23` to `∞` (inclusive `23`)

When the interval consists of two numbers, you can also add `E` (short for **E**xclusive) after the numbers to exclude them from the interval. Examples:

* `'10_20'`: The interval `10` to `20` (inclusive `10`, inclusive `20`)
* `'10E_20'`: The interval `10` to `20` (exclusive `10`, inclusive `20`)
* `'10_20E'`: The interval `10` to `20` (inclusive `10`, exclusive `20`)
* `'10E_20E'`: The interval `10` to `20` (exclusive `10`, exclusive `20`)
* `'10E_X'`: The interval `10` to `∞` (exclusive `10`)

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user selects.

::: tip Example

```js
Slider
	.min(0)
	.max(150)
	.page(ChildPage)
	.pages({
		'18_100E': AdultPage,
		'100_X': DeadPage,
	})
```

:::




## Handling selected number
If you want to store the number the user has selected in `Slider` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` to store the number in.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KuEkBERyXDtXmqWQoFBJCSx2wsM5FVJYVSaYORv+9ckJSu1une6e7e+/TCMJa4CPUnUTgUGvhPXk5F9YSHAIa6UnSY2nKUDsUAXdBuPAqPpGuLq9lcBh6Z4jBbzIbTrNYmgiRQdNpic4D/xhBSeAbBka0U97lABh0TeMxvAHPbvo96XhkYJPb4vJqtr02C+x7+h19ambsz736S73TKrmtW2XoJlutWzHQPEvCHoSjlTpVvx9hMADPH3IG51Qfn250e2ytTu4LygVY4b+2TSF7Hf5Btk+rtJrlx2P8AcjSlBw=]

:::

In the example above, the number the user has selected will be stored in `p.iq`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFrwzAQhf+KuUkGYRyXDtXmqWQoFBJCSx2wsM5FVJYVSaYORv+9ckJSu1une6e7e+/TBNwYYBM0vUBg0CjuXPJyLo1JcPSohUuinipd+cYi97jz3PpX/okkvbxW3qIfrE40fieL4TwLlQ4QKLS9EmgdsI8JpAC2oaB5N+ddDoBC37YO/Ruw/Kbfow5HCia6rS6vZttrs8K+p9/R52bB/jzIv9Q7JaNb1klNNmnW8ZEUeZ5m/MAtqeWp/v0HhRFY8VBQOMf6+HSD22NnVDRfQa64Sve1bUsxKP8PsH1cJfUiPxzDD0Rak90=]

:::

In the example above, the number the user has selected will be stored in `a.iq`.

If you want to do something more complicated than just storing the number the user has selected, use the configuration method `handler()` to specify a function that will be called to handle the number the user has selected. In the example below, try selecting a number, and then click the `Button`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUUFqwzAQ/Iq6JxlEiFN6qKEF9xJyaClNDi11wKq1bk1l2UhrkmD89yoxTuzcetLsrHZ2RmpB1jVELWSVQogg09I59nyI65rhntAoxzxuE5NQZlESrklaepXfyIMTm5BFaqxhBnds1Dz2usR00AnIK63QOog+WygURKEAI8vjvtMACKjy3CG9QzQf8IfH3VZA7dUmk73Yqi8mts/bz9aPxcj7simuXb9VO8d7JqG1Lrz0rCwMD4NZKfc8XMyD2Y80SqPlDjVmhOqlKb/QsodHJj1NV3wQiEHvqSGqDE+X1U06sJeHEbCHaHG7EHDw5939kHaDZa2920nqSdDY/a7yWDWa/pF046/yNB19zLb7AyPHsbY=]

:::