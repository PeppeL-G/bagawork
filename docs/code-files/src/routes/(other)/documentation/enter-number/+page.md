<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `EnterNumber`
On this page you find the documentation for the GUI Component `EnterNumber`.

## Introduction
The `EnterNumber` component is a view in which the user can enter a number.

::: tip Example

In this example, the GUI consists of only the `EnterNumber` component, so it covers the entire screen.

::bagawork-project[app&link&code=StartPage&baga=eNqVkEFrwzAMhf+KeacOzNg6ephvOYzSw8ZgPbQ0hXqxMsoSx9gKawn+73NaGpLddrGeJOvpQx20c1AdisYQFIpKhyBez5lzgk5M1gSRdJfbnAtPmumDted3/UWzu0s1Z0/ceiss/YhRs+/F3EZEibKpDPkAtetwNFCPElbX/b7LACSasgzEG6iHm94mHfcSLrlNJq9mq2sywR62D+h9MmJftse/1C+Wyb+19Sf5gVjiBDV/mkucU1w83zDWVLsq2UxwJgRZ+F6VmWkr/gfCOn295/TMDofR2fbxF5Dlj+Y=]

:::


::: tip Submit button

A `Button` can be added to the GUI to serve as a submit button (takes the user to the next page when clicked, the same as pressing the enter key in `EnterNumber`), for example:

::bagawork-project[app&link&code=StartPage&baga=eNqVUUFOwzAQ/Eq0F1LJsmgRB3JBBSHUAwhoJUC4UkyyoRGpbdkbtSXKmTtP5CW4KSkJ4sLFnvV6Z8bjCqQxEFWQ6BQhgqSQzgVXm7ExAa4JVeoCjyuhBCUWJeGUpKUb+YLhoDkVZJFKqwKFq6DT3PZqoWqoGWS6SNE6iJ4qyFOIhgyUXG71mgFgoLPMIT1AdNjiR4/rOQPj2XqTO7LJrujZ3qvvrW+LjvfLMv/t+k6vHE8WeZFaVOGuJWhqZIJtMfNsnPwSxvcLSQcu2OjSBpPb03jA/pw414Xbcwm6UIT2ulw+o+Uuf8NwOOCm8PcXzVPCuLngCTnnHUpBZyWRVt/an+8fnWaLfnJmsIZodDRisPH78Ukb3gyXXoz6IfZyG7vXSTZOy4L+EVwnlbjz2fP6CzZk0ww=]

:::



## Adding an initial number
The number passed as the main content to `EnterNumber` will be used as the initial number in the component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVkEFPwzAMhf9K9E5FihDrxIHcekBoBxASO4DopIXGRRNtGiWu2FTlv5Nu2mi5cYmf7fj5kwdo56AGVJ0hKFSNDkE8HgrnBO2ZrAki6aG0JVeeNNMLa8/P+pOyq2O1ZE/ceyssfYtJc+zF0kZEibprDPkA9T5gZ6AWEla3477jACS6ug7Er1A3Z/2WdNxIuOQ2mzyZrU7JDPuy/YI+JhP2h373l/reMvmnvv0gny3y5S+2xB4qX+YShxRv784sa2pdk7xmTDOMInyt6sL0Df+DY52+XnN6su12crtN/AHqLpDN]

:::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in the `EnterNumber` component when it's empty. Try typing a number in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVjzFPwzAQhf+KdVOQrApadcBbBoQygEDtACKVYuILVCSOZZ/VRpH/O06qloSti313z+/d5x6kMSB6KFuFIKCspXPsqUuNYXgk1MqxWPe5zqm0KAk3JC29yC9MbsZpThbJW800HthEHLSQ6wCBQ9XWCq0D8dHDXoG446BlM+wbDcChrSqH9Abi9ly/xzrsOJiYNnOewrJTM8O+bL+gD82E/dHv/1M/aEL77JtPtAtTyxK/x/ikGAXWtd6y7LX4+w6HI4jlasmhi/f6/sy4xSb6ac46w0vdT1alytd0Bd82Pl1QPJJiAhF24RexRZpP]

:::




## Going to next page
If the `EnterNumber` contains the cursor (has focus), the user can go to next page by pressing the enter key (`↵`). The default next page is the current page. 

Use the `pages()` configuration method to specify which other `Page` the user should come to depending on which number she has entered. The value should be an object, where the keys represent intervals of numbers the user can enter, and the corresponding values indicates which `Page` the user should come to if the user enters a number within that interval. The intervals can be expressed as strings the following ways:

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

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user has entered.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqdk11rgzAUhv9KOFcWpKi12nlXtjJ6sTJYLzZmqZkeW5lViXGriP99fqBVC8K8CSd5z8eTNyQDGkVgZGCHDoIBtk/jmLyk6ygieOUYODEp4swMTG4zpBzfOGX8lZ5QmFWnJmfIExaQAH9JRyy13AxyyEVwQ99BFoPxmYHngCGLENBLOa8qABFC142Rv4MhNfFHEecHEaKiW6+ybratNz3sdnqLXm467M+JN6TeBBzZLrl8IavPTT6PfGrjuRojWFUCScOEkbKzF5AUKYut2S29vO8OT5R7P7g+YTm0r8ZC1uxNbklHebWxDPJ49nynTBY7orw6ypJUymsn8fmdLEnH90J8QtovzW+Gi3AtvJGWIqRgqIqWi7V3yph3A/5/OLgvUue8WARr0MQaMC1WNZO80humxRhTa9A0mrZ8yKEt5IpD0R8aDnWMo32JaRxt+R2HqlQcS01tOJZjHM2jT8Noqu9fRa8oNF1t/tseL8Uf4P1/17ck/t661cWmwXQg8kP+B+JMkHU=]

:::



## Storing entered number
If you want to store what the user has entered in `EnterNumber` in your current `Page`, you can use the configuration method `p()`, and pass it the name of the property (as a string) the value should be stored in.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUMFOhDAQ/ZVm4oFNCNE1HuTGwRgOGo17cCObtNJBiVC67RCXkP67hQ0I3ry0b/pm3rzXHoTWEPeQNxIhhrwS1rKHLtGa4YlQScs87jOVUW5QEL6QMPQkPjDYjK8ZGaTWKKbwmy3IgXOZcuBCKJpKorEQv/VQSoivQlCiHvaNAxBCUxQW6RXiywnvPXaHELRXW02exdJzsbI9b5+tD8XC+31b/nV9pwjNY1u/o4l0JXL8HOUDPhKsa1rD0me+iXTAyyOfYmXUqKTwHbOeqNBQwPdNy3AYRckueh2VRxfx388I4QTx9nobQufvm9sp4Q5rv53WSVfhEvuVFolsK/pHup1vjcgfAV+YcAf3A3R5sN0=]

:::

In the example above, what the user has entered will be stored in `p.iq`. If you want to store it in your `App` class instead, use the configuration method named `a()` in the very same way.




## Handling entered number
If you want to do something more complicated than just storing the number the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the number the user has entered. In the example below, try entering a number, and then press the enter key.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNqVUE1PhDAQ/SvNxAObEKJrPNgbB2M4aDTuwY1sQpcO7kYoTRniEtL/bvkUvHlpX2fevHl9LQitgbeQlhKBQ5qLqmJPTag1wwuhkhVzuI1VTKlBQfhGwtCL+ERv01djMki1UUzhN1s0u56NlQXrQ1bmEk0F/KOFswR+44MSRbevHwAfyiyrkN6BX09477A9+KCd2mpyEIuGx8r2vH223j0W3h/r81/XD4rQPNfFEc1QjynQuUjx1K/xkp7AmrI2LHpNNjPpJJTMHUGPaNCYvh3TsuphJ4Jy5IwOhBsnL9mXNRv77KpdMW2Q/ObowwX49nbrQ+Puu/spnB0WzjCtQ1rlElZfURbKOqd/BLNz1IDc4SULE/ZgfwBdJ8jG]

:::