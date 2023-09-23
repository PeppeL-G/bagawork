<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 6. Sizing GUI Components
This tutorial will teach you how you can change size of GUI components.



## Positioning children
First, some quick repetition.

The child components in `Rows` are as wide as the `Rows` component, and their height are just tall enough to surround their content, and the children are positioned at the top of `Rows`. To position the child components elsewhere in `Rows`, you can insert extra `Space` components in `Rows` to push apart the children. The `Space` cihldren which will share the remaining space available in `Rows` evenly among themselves.

It works the same for the `Columns` component, but the children are instead positioned as columns, and not as rows.

::: tip Example

Try resizing the app below, and notice how the `Space` children gets smaller/bigger, while the three other children stay at the same size.

::bagawork-project[link&app&code=RowsPage-ColumnsPage&baga=eNrdklFLwzAQx79KuZe1EMamTFzfdKD4IIjbg2IHi8ltlmVJSFK2UfrdTRY7Ohyir76Uu8vd//78ejVQrSGvgSmOkAMT1NrkcX+jdYI7h5LbxMd1IQvHDFKHU0eNe6IrTLNDtXAGXWVk8qy2NtRDsSlkAw2BpRIcjYX8rYaSQz4kIOkmLDrIAAG1XFp0L5AP2vjVx82cgPZaJ5NR7CEmJ37b1UfLIel4vq/Kc2777KMU3KBM41PhZl6g7/wnXdyVxrpF1n+nbL0yqpJ8ooQyac8g72WknZhqyvB7ky7lutPV0Z0iU5KfE96jEGr7C+3KaIGdvtvKOSW/9GcqYUpUG2n9jsAwncQ0MMniSHb8RwR2Hud4TGAP+cXouiER9+VPuDuCfyD+NfVfoYeDaom393ge92gwiLivhu2dz3CjhccW7n3efAJw1Ucs]

:::



## Sizing children
It's not only `Space` children that can grab some shares of the remaining available space; any child component used in `Rows` and `Columns` can grab some of the remaining available space. But it's only the `Space` children that grabs it by default, and by default they grab equally much of it. But all this can be changed with the configuration method `.size()` on the children. Let's go through how this works in detail.

First, let us ignore the `Space` children, and instead focus on all other children, such as `Text` and `Button`.

By default, all children in `Rows` will be just tall enough to surround their content. If you want them to also grab some of the remaining available space, you can call the method `.size()` on the child, and pass it a number indicating how many shares of the remaining available space it should also occupy. 

::: tip Examples

A few examples.

::bagawork-project[link&app&code=FirstPage-SecondPage-ThirdPage-FourthPage&baga=eNqtlU1v2zAMhv8KoUttwDPy2bm+bQNa7LBhWHLYsBSoYiuxNkcyJHlpFvi/l5I/GhdJVhS5xCZFvqT5INSe0KIg8Z4kMmUkJklOtYYvuw9FAezRMJFqwPf9QixMohg1bGaoMt/omnm+8y6MYqZUAm650u7AequFqEgVkJXMU6Y0iX/tCU9JPAyIoBtbyemQgMjVSjPzg8Tvoqi1fqJ1Pa7uA1KgXi+7FvxcG72mu/pd49Y46Pyu5C97/i63OkwynqeKCa8+Wpg5CoQGf7yHTvTBD3rHS5r8WStZivSTzKXyrhRLr/wm66sUDOQKTMagVYeMKbRonkOo+T8cXwBagrW7EIoRv0ttwFg3E7JcZ2Ak6FK5UlaQK0ikwA804UFPH0tjpGjK30mXxDAuhcI1H9qHN3Mu+zl+neh3rALySOLR6DogOxJPonEV1CMfnxv5s94lZ/6s+nLobm5D//zw5xnXYF9xTpsCSQgDWyqMhiHozI64IaPYhnLBxRroX8ppvswZ6IImLIQZFwnDIFSyYhgsRb6rQaFJW0UtN6wW1QFw9HLktmbGYcUy6PKGIEtjjaa89s9zw6qqj21uPaepTaIbR200HbXUJueodXKXhNaJHmc2GLyd2mDQDO5i4F7HDeu25LoW/sNuJUtlsh68W+c6Te/9TUsvaulNz665Tu+ie65TPcpv8mZ6k9ezm+NxPVNYslxuT/9rMZ/XAjntBNw6deQPemi5Tmz6tOnlyOJsN0sPpt39fZbtbXAc5XAQtftz2l5ec7YpcoRiL7H76gnU0Zzv]

:::

The special thing with the `Space` component is that it has the size `1` by default (it has been made like this because that's often how one wants to use it), while all other components has the size `0` by default (which means they will be ust big enough to surround their content).

So when you use the `Space` component like this:

```js
Space
```

It has the same functionality as being used like this:

```js
Space.size(1)
```

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNp1UNFKwzAU/ZVwX9ZCLGzKKHkTH2QPgrg9KHawmNxuZVkSkpStlv676cqqU3y7596Tc05OC9xaYC0IIxEYCMW9J0/NvbUETwG19CTObaGLIBzygMvAXXjmW0zS87YIDkPtNBkP/bYrdAcdhdIoic4De2+hksCmFDQ/9E5nOlAwZekxvAK7yfMLeotoftutKdiod/V6EFwM4Cr06D8G78GP5I919Tvzizn6TOwqJR3qZDgVYWm5wOyDi/3WmVrLB6OMSyYNKmWOk5ReeKtolPnqE5Np+pfuUE7SLEROslkQI0RtG2I0krCrnCSmjAMSf/bafIv+Y24rvR+t07FiCidgs9mcQgPsLh87W+HBqvjnvrt19wXq0KnM]

:::

You can still call `.size()` on `Space` if you want it to claim another amount of shares of the remaning available space.

::: tip Example

::bagawork-project[link&app&code=StartPage&baga=eNptUMtqwzAQ/BWxl9igGpKUEHQrPZQcCqXJoaUORJHWsYkiCUkmcY3/vX4Qt2l70+yOZmanBm4tsBqEkQgMhOLek+fqwVqCl4BaetK+61SnQTjkAdeBu/DCDxjF/TQNDkPpNBkX3bRJdQMNhcwoic4D+6ihkMCmFDQ/dU49HSiYLPMY3oDdLZdX9N6ixbzZUrCt3s3vQXA1gJvQo/8YvAM/kj+Vxe/Mr+bsE5EXSjrU0bBKw9pygcmei+PBmVLLR6OMiyYVKmXOk5heeZvWKPHFJ0bT+C/doZzESWg50W5FjBClrYjRSLIiCzkxGQk5Et977b5FB/Nedf6Pqi30cYwQj1VTuACbzRYUKmD3y7G7DZ6sam/vOtw2Xy1grC8=]

:::

## That's it!
Good work, now you know how to change the size of GUI components! 🥳 Using `Rows` and `Columns` with `.size()` on the children is enough to create almost any layout you want.