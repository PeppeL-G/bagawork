<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# 3. Layouts
This tutorial will teach you how the different layouts in BagaWork works.




## Repetition
This tutorial assumes you already know:

* That the GUI component returned from `Page.createGui()` will cover the entire screen
* How the :docs[rows] layout positions its children as rows
* How the :docs[columns] layout positions its children as columns

In this tutorial you will learn a couple more layouts you can use.




## The `Layers` layout
In the `Layers` layout, all the children will be as big as the `Layer` layout itself, so they will be drawn in front of each other:

1. First, the first child passed to the `Layers` component will be drawn
2. Then, the second child will be drawn in front of that one
3. And so on...

So each child can be seen as a "layer".

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU9Fq2zAU/ZU7vdQGkTUJgeGX4Y4xAtsYa2ErSyGKfZ2YKpKRrtaG4H+fFK9pZNySPe3BRvK959yjc+Q9E03Dsj0rdIksY4UU1sKXXd40gI+EqrTg1/uFWlB4CoOC8JqEoW9ijUnaVcggOaPgWAhf2w7UspazSssSjWXZrz2rS5aNOVNiGyYeIIwzXVUW6SfLLp/Wt37d3nHWeL4I2ZHNu00k/Dj/KD5seuo/ubqv+7PYeXWjYlPL0qBKuuKCbjzNiPwrWc5BbIE2CFVtLMGh9a0MuDfLlEeAlSju10Y7VX7QUptkabBcpn0ei4VWZUfEYeUIbK0KhDlsxG8EAc80UAQeDjvt4EGrC4KVb1hJBNKeB/u6RkdFaRQEZ4/es9mMsx3LptPpk7s3uG2kdyZyOTI2t/fzKi+dfMVdra6w0ub5UpzMfsX77/phwPnrRhTIB3LIDR58ONwBf3ChYPzu/UkEMdIn4LZqYEC/cUFXjvwZ/o75qn1iwZtEOSlTfibsFu15uKGAgoV5RWiGHAy/UZfNpJfNR+Uh+Rr/dzI/NoIubAjHgJ/+ciaRY+PLYcPiptkZTZNzmCYvMJ0q/JdM7to/a6Tnkg==]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU9Fq2zAU/ZVbvSwG4TUJgeGX4ZYyAt0Ya2EtSyGqdBWbKZKRZNIQ/O+T4jWLjRuypz7YSNY959x7jrwjrKpItiPcCCQZ4Yo5B1+3eVUBvnjUwkFY7xZ64ePDLTKPd55Z/52tcJS0J96ir62Gw0H82rSghjSUSKMEWkeyXztSCpKNKdFsHRX3EEKJkdKhfyDZ5ev6MaybJ0qqwNdBtmTzdtNp/KB/aD5uet1/qct+37dsG7pLeVEqYVGP2sOFvw80qQ+v0XIObA2+QJCldR72pR9VxF0sE3oK4JAbLVoEBWHZRkOpQVqjPRjZJ03hqvbgSs0RNgjM4gAGGS/ABKSlEIYSpV4FntJB1AbONDwjFMyK9NBc0smEkpdg32xGyZZk0+n01eh7XFcqmNQxvONx7n7PZS5qdcJoo69QGvvvfhxpn4jhh9kMhHBXMY5DDufBmq2pYX8dwvhh6vGnz0dpdJHXRtVrPSDQL1z4kECY4a/MN7NM0ujNSNdKJfRM2CO683BDAUULc+nRDjkY/6g2m0kvmxsdIPkK3zuZnwXzH1wMx0JQfzuTjmPjy2HDukWzM4om5zBN3mA67vB/Mnlq/gDJ+esr]

:::

The `Layers` layout is useful when you want to draw something in front of something else, for example a text in front of an image (learn about how to use images in your BagaWork apps in next tutorial). Another use-case is to show an alert message in the center of the screen.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFlG1r2zAQx7+KpjezwbhNQmAYxnDL6ALbGGvGVpZCVOsciyqSkWTSLPi7V7Zrx8pD570aeZJ9+d/pfn+dd5jkOY52OJEUcIQTTrRGX7ZxniN4MiCoRna9W4iFqT6JAmLg1hBlvpEVeH4TMQpMoQTqAtXdshGVuAxwKjkFpXH0e4cZxdEowIKsq4q1BAdYpqkG8wtHl+36zq7L+wDnNp+jbJLNmgtn4139bvPVRbd7pmMOytxmcsPECr1HKeEa2qi2t+t411UeHimMKvrNLUzGKPxV1dUpXZA3BTtE+JlsLagwyRinCoTXBBtR9bq4QPMMkFSUCaK26ObHLAzDNvpdbnT4QJLHlZKFoNeSS+UtOVvD0j+R09zmJIFgfz233EJjv7zlPGMa2bc5rLb0e4KrwhgpXiRVw4hUrb+x5TIiqF17ediR7Svd0r3IvtFY0Lp8nRIxgVIlhUEyRcwgj9U/NnfBKXqAarURvouiujdLvWNLGicHMWkSsT/gjfxjtpuMmTNwHZzxC5bgTPwTKGhxN/2uQWt7eq27ByqH+TWXGhza3Ynsq14h74L3ndEN8JOdsuk0wFscTSaTdh7nsM65PcDOXDqjGOvHWRrTgr8yj1JcQSrV/jEybERqQ454u131yVuwW1mg+qlh+RKBRu8+9Ji6SutrsRZ6yMlwjPgqrQsVG08UnJ/nfSC7Az1M10Z8B5IUcWqs7ScIVg/expvxgTcfhZXEK/jfzvzMiHmrK3MUstXPe+IQG12eBub+aTrgT+MhmcZnMvV3+C+e3JfPb7q6HQ==]

:::




## The `Box` layout
Sometimes you might want your GUI Component to have a specific width and height. Then you should use the `Box` layout. Unlike the `Rows`, `Columns` and `Layers` layouts, the `Box` layout can only have one child, and that child will have the specific size you specify by calling the configuration methods `width()` and `height()` on the `Box` layout (pass them the size expressed in number of millimeters). Pass it it's child by calling the configuration method `child()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+Kem5igyj5IDB8U5wxRi5WxlrYSl2wZh/HprJkpGOaEPzfJ8e1G2dpya52YdDR0Xs+nhfvQVQVBHtIdIoQQCKFtezbLqwqhltClVrmzvtIRdR+iUFBeEfC0HexQc/vMmSQaqPYkGhvm07UQMMh0zJFYyF43EORQjDjoETZdjxIgIPOMov0C4Jpf35w5+aJQ+XqjZRdsXUXjAYf+g/Dt8HJ9F/r4nTuld52cUTXv0XyvDG6VulnLbXxJgbTiT+kX4qUcm8xfbvJsdjk5C2PrpK8kKnXhxHdu3H+KhzLosTYvyaX9OI1EyWjHNlBexUPxfwRSw5bt/ZyyWEHwWKx6AHdY1lJt9wI1IhNaJ/XWZjW8gNAWq0w0+bN16PeH+D7oV9st7NBNax9V4kEeR8dEHSrhgbZTtfsYKPbWSg2+3QT+/y80tGqS3WmwenDiFY1uR1e29xqB7dl46laSp9fKHtAe5muz/gjSFqFGaE5R7D9Ezpv5ifefFFOEm7wfzvzMxc0sa05hrnu73syIjabngc2frS84NH8kkrzdyodT/gvnjw1fwC6PNK1]

:::

The `Box` will by default have the size given to it by its parent layout, so you only need to call `width()` and `height()` if you want the `Box` to have a specific number of millimeters size specified by you.

Further more, it is also possible to use the configuration method `aspectRatio()` to set it's width/height based on the other one it has. For example, using `aspectRatio(3, 1)` means that the width should be 3 times as big as its height, so if you also use `height(15)`, it would get the width 45 millimeters.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU8Fq20AQ/ZXtXCzBEiIbQ9GlyKUUH1pKEmhDFdBWGlkiq12xO6I2Rv/elRXJkesE55SDYGdn37x576E9iLqGcA+pzhBCSKWwln3bRXXNcEuoMsvceR+rmLovNSgIb0kY+iE26Pl9hwxSYxQbG91t24NaaDnkWmZoLIS/91BmEAYclKg6xgMEOOg8t0i/ILwezvfu3D5wqN28CbIftu6LyeIj/7h8V5xs/7UpT/de6W1fx3T1R6SPG6MblX3WUhtvZjCb+WNb2BpTuhFUam/BWXDsFFhuCvKC5fEqLUqZeUMZ051b6z+CRJYVJv4VuaaXrJmoGBXIDtgPyTjMn3jKYevkL5ccdhAuFovBqDusaulETgybeBTZx3UeZY18xSitVphrc8z3GfcrNt7ov7bXbFCNsm9rkSIfqoMFvdTIINvphh3idJqFYsHHT4nPzyOdW02lzhCcPoxp1ZDT8ETzXTtzO2881Ujp8wth92gvww0df2KSVlFOaM452P0RfTbzk2y+KAeJNvjeyfwsBM1sF45hjv3lTCaOBdfnDZs+Wl7waH7JpPkLk55v+JZMHtp/awjVYg==]

:::

This can be useful when you want the box to be as big as possible with a specific ratio between the width and the height. For example, to make a GUI component occupy the size of the biggest square possible that can it on the screen, simply use `aspectRatio(1, 1)`. This is really useful when you implement games that is displayed with a specific aspect ratio, such as `3:4`, or `10:16`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KqpvYIEqdEBi+Kc4YIxcroy1spS5Ys44TU1nypCOaEPzfJ8e1W2dpSa96YdDR0Xs+nhfvKK9rGu9orgXQmOaSW0t+bJO6JrBBUMISf96lKsX2yw1whBvkBn/yFQRhl0ED6IwiQ6K9bTpRQxtGCy0FGEvj+x0tBY0jRhWv2o57CWVUF4UF/E3ji/5858/NA6O1rzdSdsWWXTAafOg/DN8GB9N/d+Xh3Au96eIUz//w/HFltFPiq5baBBMDYhIOaW5ryPGaY6mDiJHoJZOvSymCPkzx1s/wX7VMlhVk4Tn6ZJAtJxWBv45LuSVPpQDCLUEfnWVD2XCEktGN33o+Z3RL49ls1vO5haqWfrcRpxGaxD4ui0Q4+Q4frRZQaPNi66ve79C71k+2296AGgDc1DwH1kd7GN3SiQGy1Y7sXSS45opEXy6zkB1Xem6uUkcaHD5MceHQ7/Dc5kp7zC2bQDkpQ3ai7A7sabo+E44gaZUUCOYYwfZH6LyZHnjzTXlJsoLPdubXmuPEtuYY4ru/7cmIWHRxHNj40fyER9NTKk3fqPR6wo948tD8A7iN0pA=]

:::

The `Box` layout can also be used to occupy some space to position other children in a `Rows` or `Columns` layout where they should be.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU9Fq2zAU/RX1vswGY+KEQPHLcMsYfVgpbaAtSyCafR2byZKRrklC8L9XqpssDs6Wh0EfbCTrnnPuPcfaAa9riHeQqgwhhlRwY9iPbVLXDDeEMjPMrndzOSf3pBo54RNxTQ98hZ7fnZBGarRkhwP3te1ALbQB5EpkqA3EP3dQZhBHAUheOcV3CASg8twgvUA82q9f7bpdBFBbvh6yI7vrNr3GD/qH5t3mpPvvTXna96NamzAtSpFplF53NKenmqcY7HczSxmSfXnLWYEaWWlYNGJVKURZIdnpnKjmYRgu/QPqRm3CAstVQV408ofIbL1xQuwX0hpRMirQIKO1Yq7AXB2xHXfk9zwOYGPtmE4D2EI8mUz2xs2wqoUdumdgz7PE/L7Lk6wRfzFOyRvMlf6T95H2/7M1saZuVcPe47U2cMmi669nxp/TrRJNJQcETgttCg3ZGT5k7tXSD503nmyE8IMLYa9oLsP5AwE5C5Pc/iRDDrob0mUzPsnmm7SQZIWfncxzwemLceFoZtXPZ9JzLBoNG9Yvml5QNL6EaXyG6dyl+Vcmi/YNsQTbKQ==]

:::





## That's it!
Look at that, now you know 4 layout components in total 🥳  Good work!