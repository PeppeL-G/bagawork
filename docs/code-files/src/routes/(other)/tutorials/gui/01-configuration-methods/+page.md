<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 1. Configuration Methods
This tutorial will teach you some configuration methods you can use on all GUI components.




## Background color
As you should know by now, you can use the configuration method `backgroundColor()` to give a component a background color. Pass it the color as the name in English, e.g. `red`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1rwkAQ/SvbuZjAEvxAKLmUWErx0FKq0EoV3CYTFdfdsLtBRfLfuzHGmqBiTz0EZnbmzXvzJjtgSQL+DkIZIfgQcqY1edkGSUJwY1BEmth4NxZjk3+hQmZwYJgyb2yGjltUjEKTKkGOhfw1K0AZZBRiySNUGvyvHSwi8FsUBFvljHsIUJBxrNF8gt8s45GNswmFxM6rIIth/SKpCD/yH8XnSU39c7qo6x7adu+bhcuZkqmIHiWXymlskXO5briesWVn2idsRYq3u6lb2ZDCxorpdilswe90OqXsIa4Sbikr8iuKA73sx0GU8iuypehhLNWv2yfcV5Z6l2vthfMFjxQK54A0g4SFSMtsv3ixXqCQbGVK9uYSM2eCtO4fpi49j7QepStxhqDeODa91NgdDjSvcup6uTeOSDl36Y2wEerbcGXFrZgkRRAbVOcczP/P4jbt2m2ehIUEM/zvy3zMmWno/DiKWPbLN6k41mqeN6za1L2hqX3LpPaFSacK/3KTSfYD/LesEQ==]

:::





## Padding
Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow `Text` component to be a little bit taller than it is.

::bagawork-project[app&link&code=StartPage&baga=eNrFk19rwjAUxb9Kdl9sIYh/EEZfRh1j+LAxprCNVTBrb1VMk5KkqEi/+1I73erq7NseCkmTc8+9v9PugKUpeDsIZYTgQciZ1uRh66cpwY1BEWli17tABKZ4QoXM4NgwZZ7YHB23PDEKTaYEOR4Ub/NSlENOIZY8QqXBe9/BMgKvS0GwpHDcS4CCjGON5hW8zmH9Ztf5lEJq61WUZbFRuak0fvQ/Nl9sTrq/z5anfT/LtW5/sHA1VzIT0a3kUjkzvkxw5rbDxZJHCoVTSgIzTlmI9LCbWKtf2tYWOZfrlts29tiZjQhLSPnuaubSukpuhRmFjR1vMKCwBa/f7x9ATDBJuR2iAqTCwNerUexHGf8DhBRDjKX6zu+H9yVMTXCUQ/sKyVZmZB8XMQsmSPf65sz4gbHkskTUGJxeDMwwM3aGL5tHaUMq2Dgi49ylDWVvqJvp3JqACoR+bFDVESy++DKb3kk2d8JK/Dn+dzIvC2ZaughHEet+PpMKsW6nHlj10qDBpV6TSr0zlc79NJcymeafVWXK/Q==]

You can make it taller by giving it a `size()`, but it's also possible to make it taller by giving it some padding on the top side and bottom side. *Padding* is simply some amount of space between the components edge and its content. Call the configuration method `padding()` to give the component some padding, and pass it:

1. The number of millimeters padding you want the component to have
2. A string indicating which sides of the component the padding should be added to:
	* If the string contains `t` (short for **t**op), the padding will be added to the top side
	* If the string contains `b` (short for **b**ottom), the padding will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the padding will be added to the left side
	* If the string contains `r` (short for **r**ight), the padding will be added to the right side

If you don't specify the second argument (the string), the padding will be added to all sides.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk81q4zAUhV9FczexQYQ4ITB4U9xhGLKYUtrCtNQFK9Z1YipLRpLbhuB3rxw3aZ06rXezMOjv3HP1HWsLrCwh3EKqOEIIqWDGkL+bqCwJvliU3BA33sYyts2XamQWry3T9pKt0PPbHavRVlqSw0azWreiGmoKmRIctYHwfgs5hzCgIFnROO4kQEFlmUF7C+FkP75z4/qBQunqdZRtsUU76TR+8D8030yOuv9T5cd9X6lnM16y9HGlVSX5LyWU9hKRF5j443SdC65Req0kttclS5HuZzfO6pN2tEEh1PPIH5eM81yuvGBCSWKXrp51Ai9ZkDV7QhJMioK8nSFsqdwSk5ws0alJgT8Sn/bZ+h3AFF4ci/mcwgbC2Wy2p3aDRSncjTv0OsAi87jIIl6JL6gpeY6Z0u9hf/D+jukQdi2PSCPZqIrssiV2zSQJfp6duH5sHeaqkD0Gxwdje15Zd4c3mwuVNJm4X1dWQvh0oOwOzTCd3xNQgzDKLOo+gs3zaLOZHmXzWzpJtML/ncy/NbMj04SjiXM/nUmHWDDpB9Y9NB9waDqk0vREpVOP5rtMHupX/2/ZrQ==]

:::



## Rounded corners
You can instruct GUI components to have round corners by calling the configuration method `corderRadius()`. Pass it the radius of the corner in millimeters. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of `0`, which means not being round at all.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk19r2zAUxb+Kdl9igwhNQmD4pbjdGH3oKG1hK3MhqnWdmMqS0R8aE/zdJ8VLNmfO6rc9GCTrnnuufgftgNU1JDvIFUdIIBfMGHLbpHVNcGtRckP8epfJzIYv18gsPlim7R1bYxR3J1ajdVqS40H423aiFloKhRIctYHkxw5KDsmMgmRVcNxLgIIqCoP2OyQXh/WTX7fPFGrfr6fsmt10m97gR//j8GFzMv0XV57Ofa/ezPSF5a9rrZzk10ooHa1EWeEqnuabUnCNMuokmX2oWY70sHv0Vn9pJw0Kod4mXq20RH3PeOlMtIyn1pdHq9uGdAeGMI1kr0T+gVwrJSjR5XpjL8mdQGaQvCApq1qjMaFi+2kV06FJ4h5zCluPZ7mk0ECyWCwOIB+xqoWH0APaY5ia15si5U78A6SSV1go/Tv/P7zfwzwGZwcp9WQa5cg+bmI3TJLZx8sz18+sJ+8qOWBwWpjZK2f9HX7ZfFU+5MAmkk6ImI6UPaEZp4sHAgoI08KiHiIYXkyXzfwkm8/SS9I1/u9kvm2YnZgQjibe/XwmPWKzi2Fg/aLliKL5mE7zM53OPZr3MnlufwIcz+Ga]

:::

One thing you need to watch out for when using `cornerRadius()` is that anything that is placed in the corner of the component might not be shown properly. In the example above, try risizing the app screen, and place the `M` character in the beginning of the text in the upper left corner, and notice how it's not displayed properly. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.

Try resizing the app screen in the example below, and notive how the `M` character never is placed in the upper left corner, but always entirely visible.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KppvYIEKTEBi+KW43Ri86SlvYylywah07prIk9EFjgv/7pHjJ5sxZfbcLg4513nOOnlfaYaoUTna4kAxwggtOjUG3baoUgq0FwQzy610mMhu+QgO18GCptne0gijud6wG67RAx43wt+tFHe4ILiVnoA1OfuxwzXCyIFjQJnTcSzDBsiwN2O84uTisn/y6eyZY+XoDZV/spg8Ggx/7H4cPwcn0X1x9Ove9fDPzF1q8Vlo6wa4llzrKed1AHs+LTc2ZBhH1ksw+KFoAOUSPvtVf2lkLnMu3WTxXlLFaVNFivvalpBag7ymrnYl8bL02ym9b1G8YRDWgfRlgH9C1lJwgXVcbe4nuOFAD6AVQ3SgNxoSM7ac8JmNjxQMDCN56Vus1wS1OVqvVgeojNIp7IgO6A6Cpeb0pU+b4P6hKcQWl1L8vwx+932M+hW0PKfVkWunQ3ntkN1SgxcfLM8fPrLfBNWKkwWliZq+c9Wf41earzINn/moLx3lMJsqewEzTxSMGBYRpaUGPEQzPp/dmeeLNZ+ElaQX/25lvG2pnJpijke9+3pMBscXFOLBh0npC0nJKpeWZSucezXuePHc/AYX15YQ=]

:::



## Border
It is also possible to add borders around the component. To do that, call the confiruation method `border()`, and pass it:

1. The thickness of the border, expressed as number of millimeters, e.g. `5`
2. The color of the border, expressed as the name in English, e.g. `"red"`
3. A string indicating which sides of the component the the border should be applied to:
	* If the string contains `t` (short for **t**op), the border will be added to the top side
	* If the string contains `b` (short for **b**ottom), the border will be added to the bottom side
	* If the string contains `l` (short for **l**eft), the border will be added to the left side
	* If the string contains `r` (short for **r**ight), the border will be added to the right side

If you don't specify the third argument, the border will be applied to all sides.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk1FL40AQx7/KMi9NYBHbUpC8SJTj8OEOsYKKEbImk7a42Q27E7SUfHd3je01vVTz5kNgNjsz/5nfn92AqCqINpDpHCGCTApr2Z91XFUM3whVbpmLN4lKyH+ZQUE4J2HoWiwwCNsbMki1UWx34f82bVEDDYdCyxyNhehxA6scojEHJUqv+FECHHRRWKR7iE638YOLmycOlevXqWybXbWHzuA7/d3w/nAw/e96dTj3jX61J88ie1kYXav8UkttglSuSkzDk2y5krlBFbQlCc0rkSHfnm6d1DZO6L8uozVKqV9H4X6ONm6BYMpZajBP96/IdQvSuS6R+TANeZ9q2OHL4c2hmM04rCGaTqdbaLdYVtIt3IHX4RXbl6sizmv5BTStLrDQ5p/Xe9rfIR2A7nPj2CBb65p9WMtoKRQbn50fWT8hx7YuVY/AYWJCFzW5HT5l/mpnqGcTqFrKkA8se0A7rC7sMcgjjAtyhvcQ9K+j9WZy4M0v5UriBf60M3dLQSPrzTHMqR/3pENsfNoPrJs0G5A0GdJpcqTTsUfznSdPzTvR09v3]

:::

If you specify a corner radius, the border will be round at the corners.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk01r4zAQhv+KmEtsEKVJCCy+LO5Slh62lKawLeuCVWucmMqS0QdtCP7vleomG2edrW89GEYezbwzz2tvgTUNJFsoFEdIoBDMGPJrkzYNwVeLkhvi420mMxueQiOzuLRM2xu2wijuMlajdVqSfSK8bbuiFloKpRIctYHkzxYqDsmUgmR1UHwvAQqqLA3ae0jOd/GDj9tHCo3v16vsml11h97ge/398OFwNP1PVx3PfatezNkTK55XWjnJfyihdJSLqsY8PivWleAaZdSVZHbZsALp7nTnpXZxZv/pMtmgEOplEh/cKZSWqG8Zr5yJFoeZJ6X9atGcklwjzw9T1utE+VLVSEKYx3RonrhHnsKrh7RYUNhAMp/PdzjvsG6ER9HD2iOZmuerMuVO/AenkhdYKv33KzjQ/gz2CKgfG6cayUY58m46sWsmyfTb9xPrZ9ZTd7UcEDi+mNkLZ/0OHzLXylsd2ETSCRHTkWUPaMbVxQMGBYRpab3hAwTDf9N5Mzvy5lL6knSFX+3M7zWzExPM0cSrn/akR2x6Pgysf2kx4tJsTKfZiU6nfprPPHls3wBEouWm]

:::


## That's it!
Great work, now you have a basic understanding of what a page constant in Bagawork is 🥳 Next tutorial will be about using app constants in Bagawork, which are constants you can access from all your pages.