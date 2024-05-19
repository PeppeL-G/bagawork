<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Box`
On this page you find the documentation for the GUI Component `Box`.





## Introduction
The `Box` component is a layout that can have an optional child with a specific width and height specified by you in millimeters. So if you ever want to give a GUI component a specific width and height, just use it as a child in a `Box` component.

The `Box` component will by default be sized per the GUI layout you use it in or cover the entire screen if it's the root GUI component. But its child component can be smaller than that.

::: tip Example

Example showing what the `Box` component looks like when shown on the screen.

::bagawork-project[app&baga=eNrFUtGK2zAQ/BV1X84GES4ugdYvxSmlBNpSegftUR9YtdaxiSwZac0lBP975fjintME0qc+GK+snZ2dGe9BNA3Ee8iNRIghV8I59nmXNA3DLaGWjvl6n+qUcouC8I6Epa9ijUF4+JqSRWqtZuNF/7VLdQcdh8IoidZB/HMPlYR4zkGLumc6tAMHUxQO6QfEt8f6wdfdI4fGz5ogh2Gr4TBZeOQel+4PL7b+2Fan+y7NdvZL5Ju1Na2W740yNsgsyiycPVWSyiBahLMSq3VJhzIvKyWDYURK957ob7iqavR48pdB9smYDWerm5o5w1wtlHqVhQM+HD3isIU4eh1x2Pn34u1R+D3WjfKLTwyYaE7cZlUkslUXhPeP0UssjP2T1TPvUFy05pt5coNei3qUfNeIHPnEgEFoYpHtTMsO8TAqhWbzN++ykJ9Heq/aWp8hOG1MadmS1/BM88V4a3tvAt0qFfIrYQ/orsMdb8KJSUYnBaE952D/hw/ZRCfZfNAekqzxfyfzvRR04/pwLPPslzOZODa/PW/YtGlxRVN0zaTowqSXG/5LJo/db3Jev30=]

:::



## `child()` - Setting the child
Use the configuration method `child()` to tell the `Box` component which (optional) child it should have. 

If the `Box` component has been given a size (for example by being the root layout, or by being used as a child in :docs[rows] or :docs[columns] and been given a `size()`, etc.), then it's child will by default get the same size as the `Box` component itself (except its padding).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivxXmwhDFcZaF+kExEfFNGBDis0NtetmCUlSXFj9L+btq7aucF88qH0krvv7r7vyxpYUUC4hlRxhBBSwYwht6uoKAguLUpuiIvXsYxtqpFZfLRM23s2Q89vbmOr0ZZaki5R31axrKCikCnBURsIX9aQcwiHFCRb1JOacqCgssygfYbwZBNPXVy9Uihcrx6ybXbTHnoLd7O7pevDj62vy3x737FaDt5Y+j7TqpT8UgmlvUQjT/xBwTjP5cwb+YN0ngvutcDYTlz73yCRL9ChrEt6yWSOpAGR3JA6c5T4LdzvhKGwhDA4DSis3H90vmE7wUUh3LY91j2ikXm/ySJeij1s60/JMWZKfxv0NbcN9urxoD5MS1ej7Bg/FixF2uPf8ow0kpUqSeMJsXMmyfDsIvHpbqSTqlzIHQO2C2M7Lq3j8DXmTjV+uOcmSyF8eiBsiuYw3Cbj90RSMsos6l0K1s+69SbY8uZKOkg0w/925mnO7LGpzdHETd/vSU+x4cluwfpFowOKgkM6BXs6/dzwL568Vp+1Lbyy]

:::

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU11r2zAU/SvafZkNJjQegdYvwx1j9GFjtIE11AVr1rVjokhCkmnS4P8+2a7d2k0g28sejK90P87ROdIBqFIQHSCTDCGCjFNjyPd9rBTBnUXBDHHxIRGJzTRSi3eWavuTFuj57W5iNdpKCzIkmt06ETXUAeSSM9QGoocDlAyieQCCbhukthwCkHlu0N5DdNHHKxfXjwEoN2vU2Q276RYjwgP2QLpZvGH9rSqnfG/lk5ll65IzjcLrUom9UzTD2W+abQotK8G+SC61l6pSbFI/6Kuu5W5mymf05v5MUcZKUXgL/32bRpb6HciAkNilI/m+lpdbdMXWJb10uUbStpHSkCbzIfX7Aa80TpAtnE4DWX+wI4AdROGnMIC9+y+ueo2XuFXcaTTSeiRvbDY3ecwqfkLj5pPiGnOpX6/FC24X/IsLwzFbvTpdYo1kLyvS3gRi11SQ+eXndCLJsHKCVFtxBGBa6CytrDvDC8wPmTbGuksuKs794My2FZrz+qbm9BLGuUV9TMHmMXXehBNvvgrXEhf4v535tab2o2nM0cShn/ZkpNj84rhg46LFGUXhOZPCE5PeMvwbTx7rP/Cf6Lg=]

:::

If the `Box` component has not been given a size, then it will by default be big enough to contain it's child component.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+Kdm5qgwmNR6DzTXHHGL3YGG2gK3XBmnXsmCiSkGSaEPzfK9u1W7sJpLvphbGk8/Xqee09UKUg2kMmGUIEGafGkF+7WCmCW4uCGeLW+0QkNtNILd5aqu0fWqDnt6eJ1WgrLcgQaE7rRNRQB5BLzlAbiB72UDKI5gEIumkmtekQgMxzg/YvROf9+t6t68cAlOs1quyaXXebkeBh9iC62bxR/bMqp3pv5JOZZauSM43C60KJvVU0w9k/mq0LLSvBvksutZeqUqxTP+izruR2pihjpSi8hf8+XSNL/a750DmxSyfufS4vN+iSrQt66XKFpC0jpSFN5Evq9w1exx8RWTg+g0h/sCGALUTh1zCAnXsvvvVsl7hR3LEZMR5hjc36Oo9ZxY+wbR4prjCX+vVzeJnbLf6H/nDNllfHJdZIdrIi7RdA7IoKMr+4TCdIhp0DUm3EgQHTRGdlZd0dXsb8ls6Jho0nKs794MSyezSn1U3N6RHGuUV9iGDzE3XehBNvfghXEhf42c7crag9M405mrjpxz0ZEZufHwY2TlqckBSe0ik80umtwo948lg/A76j5k0=]

:::





## `width()` - Setting the width
Use the configuration method `width()` to tell the `Box` component how many millimeters wide its child should be. Pass it the width as a number.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFr2zAQ/ivqvcwCERKXwuqX4YxR+tBS1sAa6oI16xybKpKRZJoQ/N8n241bZwlkT3swPunuu++++7QDXlUQ7SDTAiGCTHJryd02riqCG4dKWOLjXaISlxnkDh8dN+6BrzCg3W3iDLraKDIk2tsmUQ00DHItBRoL0fMOSgHRjIHi65apKwcGOs8tuieIpvt46ePmhUHle42QfbPb/jAaeOAehm4Pn6a+qcvDeed6M/nNs9eV0bUS37XUJkgNipROKi5EqVbBjE7eSuGKIJzSSVaUUgR9i8QtPNHfcFmu0eOdTwbpokDSgUhpSZu5SGkPp8OKGGwgCi9DBlv/v7re617gupJ+7pH+keTYvt7msajlCd3tp9Ucc20+rHrn7YOTm/mp32wv16AaFD9WPEM20t/rjA2Sra5J5w5xBVdk9vVbStlxpF9VvVZHCA4LEzevndfwTnOvO2f8w1O1lJSdCVuiPQ+3z9DRkrSKc4fm2AbbB957Ex5480N5SLzC/+3Mr4K7L7Y1xxDPftqT0cZm0+MLGxddnVEUntMpPNHp84T/4slL8wetT7+v]

:::



## `left()` - Left aligning the box
If you use the configuration method `width()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `left()` to tell the `Box` component that the child should be to the left instead.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFr2zAQ/ivavcwCYRKPQueX4Ywx+rAx2kAX6oI16xybKpKRZJoQ/N8r241bZwlkT3swPunuu7vv+7QHXtcQ7yHXAiGGXHJryY9dUtcEtw6VsMTH+1SlLjfIHd45btwvvsaA9repM+gao8iY6G7bVLXQMii0FGgsxA97qATEcwaKb7pJfTkw0EVh0f2GeHaIVz5uHxnUvtcEOTS7GQ6ThcfZ49Ld4d3W35vqeN+F3oZ/eP60NrpR4quW2gSZQZHRsOZCVGodzGn4XAlXBtGMhhILF9AwLyspgqFT6pZ+3t9dZLVB38b5ZJAtSyQ9iFSWdJkPGR3gdFSKwRbi6FPEYOf/V58P9Je4qaVffyLDhHlin26KRDTyDP3u02qBhTZvjr3OHYKzAt3qZzvQNahGxnc1z5FN+A88E4NkpxvSm0RcyRWZX3/JKDuN9FI1G3ViwHFh6haN8xxex/zUvUH+/alGSsouhK3QXoY7ZOhEJK2SwqE5pWD3zgdvoiNvvikPSdb4v525L7n7aDtzDPHTz3syUWw+Oy3YtOjqgqLokk7RmU7vN/wXTx7bF3z7wdk=]

:::





## `right()` - Right aligning the box
If you use the configuration method `width()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `right()` to tell the `Box` component that the child should be to the right instead.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUt9r2zAQ/lfUe5kFwiQehc0vwxmj9KFlrIGtzAVr1vkHVSQjyTQh+H+fbDdenSWQPe3B+KS77+6+79MeeNNAvIdcC4QYcsmtJXe7pGkIbh0qYYmP96lKXW6QO3xw3LivvMSADrepM+hao8iU6G+7VHXQMSi0FGgsxD/3UAuIlwwU3/SThnJgoIvCovsB8eIQP/q4e2LQ+F4z5NjsdjzMFp5mT0v3hzdb37T18b4rvQ1/8fy5NLpV4rOW2gSZQZHRsOFC1KoMljR8qYWrgmhBQ1OXlQtomFe1FMHYKnVrP/DvNrLeoO/jfDLI1hWSAURqS/rMVUZHOJ2kYrCFOHofMdj5//XHA/81bhrp95/pMKOe2OfbIhGtPMO//7RaYaHNH8te547BWYW+6Rc70jWoJsYPDc+RzfiPPBODZKdbMrhEXMUVWX74lFF2GumlajfqxIDjwtStWuc5vI6514ND/gGqVkrKLoQ9or0Md8jQmUhaJYVDc0rB/qGP3kRH3nxRHpKU+L+d+V5x98725hjip5/3ZKbYcnFasHnR9QVF0SWdojOd3m74L548db8BjeXCTA==]

:::



## `height()` - Setting the height
Use the configuration method `height()` to tell the `Box` component how many millimeters tall its child should be. Pass it the height as a number.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUt9r2zAQ/le0e5kFIiQehdUvwxlj9GFjrIG21AWr1vkHVSQjySwh+H+vbDdenSaQPvXB+KS77+6+79MOeF1DtINMC4QIMsmtJb+2cV0T3DhUwhIf7xKVuMwgd3jtuHF/eIEB7W8TZ9A1RpEx0d22iWqhZZBrKdBYiO53UAmIFgwUX3eT+nJgoPPcoruFaL6P73zcPjCofa8Jcmh2NRwmC4+zx6W7w6utfzbV4b5LvZk98uypMLpR4ruW2gSpQZHSWc2FqFQRLOisxKooXRDO6SwrKymCoUfiVn7SW7ys1ugbOJ8M0lWJpAeRypIu8ymlA5yOGjHYQBR+CRls/f/ick98heta+sUnAkw4x/bpKo9FI08Q7z6tlphr89+rl7lDcFKav/qfHegaVCPj65pnyCb8B56xQbLVDentIa7kiiy+fkspO470UjVrdWTAYWHilo3zHF7G/Na9Nf7lqUZKys6E3aE9D7fP0IlIWsW5Q3NMwe6FD96EB978UB4SF/jRztyU3H22nTmG+OmnPZkotpgfF2xadHFGUXhOp/BEp9cbvseTh/YZXDPACA==]

:::




## `top()` - Top aligning the box
If you use the configuration method `height()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `top()` to tell the `Box` component that the child should be to the top instead.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk2L2zAQ/SvqXGqBMImXhdaX4pRS9tCldANtWC9YtcYfrCIZSaYJwf+9sr1x12kC6akH45Fm3sy893QA3jQQHyDXAiGGXHJryZd90jQEdw6VsMTHh1SlLjfIHT44btxXXmJAh9vUGXStUWRK9LddqjroGBRaCjQW4scD1ALiJQPFt/2koRwY6KKw6H5AvDjGGx93Twwa32uGHJvdjYfZwtPsaen+8Grrz219uu9K78KfPH8ujW6V+KilNkFmUGQ0bLgQtSqDJQ0rrMvKBdGChk43AQ3zqpYiGDulbu3n/d1F1lv0bZxPBtm6QjKASG1Jn3mT0RFOJ6UY7CCObiIGe/+/fX+kv8ZtI/36MxlmzBP7fFckopUX6PefVisstPnj2MvcMbgo0Df9y450DaqJ8UPDc2Qz/iPPxCDZ65YMJhFXcUWW7z5klJ1HeqnarToz4LQwdavWeQ4vY+71YJB/f6qVkrIrYRu01+GOGToTSaukcGjOKdi/89Gb6MSbT8pDkhL/tzPfK+7e2t4cQ/z0y57MFFsuzgs2L7q9oii6plN0odPrDf/Fk6fuN4ENwdo=]

:::





## `bottom()` - Bottom aligning the box
If you use the configuration method `height()`, the child will by default be centered at the space given to it by its parent layout. Use the configuration method `bottom()` to tell the `Box` component that the child should be to the bottom instead.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk2L2zAQ/SvqXGqBMInLQutLcUope2gp3UC71AvWWuMPVpaMJNOE4P9e2d646zSB9NSD8Ugz783MezoAb1uID5BrgRBDLrm15PM+aVuCO4dKWOLjQ6pSlxvkDu8cN+4rLzGg423qDLrOKDInhts+VT30DAotBRoL8c8D1ALiNQPFm6HTWA4MdFFYdD8gXh3jex/3Dwxaz7VATmS302Ex8Nx7Hno4vJj6U1efzrvRu/CR50+l0Z0SH7TUJsgMioyGLReiVmWwpmGFdVm5IFrR8FE7p5uAhnlVSxFMZKnb+pZ/E8m6Qc/kfDLIthWSEURqS4bMq4xOcDqLxWAHcfQmYrD3/5t3RwW22LTSb7BQYrF8Yp9ui0R08oICw6fVBgtt/pj23HcKLmr0Tf+y07oG1bzxXctzZIv9pz0Tg2SvOzL6RFzFFVm/fZ9Rdh7ppeoadabBaWHqNp3XXj23+aJHj/wTVJ2UlF0Ju0d7He6YoQuRtEoKh+acgsNTn7yJTrz5qDwkKfF/O/O94u61HcwxxHe/7MlCsfXqvGDLopsriqJrmKILTC8n/BdPHvrfX+fDHA==]

:::





## `aspectRatio()` - Setting the relation between width and height
Instead of giving the `Box` component an explicit width and height, you can use the width or height given to it by its parent layout or by calling the configuration methods `width()` or `height()` to automatically compute the other one based on the `Box` component's given aspect ratio, which is set with the configuration method `aspectRatio()`. Pass it the aspect ratio as two numbers:

* First the width
* Then the height

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU1Fr2zAQ/itCL7NAmNihY/NLccYYfdgYbaErc8GKdbZFbclIMkkI+e+T7CaL0wSypz0YnXx333f+vvMWs67DyRYXigNOcNEwY9D3Tdp1CNYWJDfIxdtMZrbQwCw8WKbtT1ZBQIa3mdVgey3RIeHf7jK5wzuKS9Vw0AYnv7dYcJxEFEvWeqahHFOsytKA/YWT2T5+dvHuheLOYU06R7C78TIZ+MB9GNpfjqb+1ovTeRdqHS5Z8Vpp1Uv+RTVKB7kGnpOwY5wLWQURCVeC2zqYz0jITAeFvWdWqCCiKCZhUYuGByNoZh8d9XvARrTgEK1LBvmTB0PCoPmsbSmyNaARFWkP6zNREqNAhBAO2RpEVVtkatU3HC0B2ZUofBNaisofvmgYkVBk1HGPwypU2/UWuC/86BjDnIzDkoNFFK9xEs9jijfuvPm81/0R2q5xuk30n0iemte7MuV9c0F3/yi5gFLpv6vyxjsGF525VysziqtBHvR96FgBdKL2qGqqAW1Uj4btcBIwiaJPtzmh5zudMX0rzxCcFmZ20Vv3DW80P9SwGW7xZd80hF7Z9gzmur59hkxEUjItLehzCvofbPQmPvHmq3QtaQX/25mnmtkPxpujkWO/7MlEsWh2XrBp0c0VRfE1SPEFpOMJ/8WTl90fnxTqGw==]

:::

If you use `aspectRatio()` without using `width()` and `height()`, then the `Box` component will get the biggest size possible to honor the given aspect ratio.

::: tip Example

Note: Resizing the screen in this example won't work correctly, since the aspect ratio is only computed correctly when the app starts (when the app runs for real on a device, the screen size won't change, so this won't be a problem in production).

::bagawork-project[app&link&code=StartPage&baga=eNrFk11r2zAUhv+KppvZIELjUdh8M5wxRi82RhvYSl2wYh3boopkpOMlJvi/T44br04TSK92YftI51PPK+8or2sa72huBNCY5oo7R763SV0T2CJo4Yi3d6lOMbfAEe6QW/zJSwjC/W6KFrCxmoyOfrdLdUc7RgujBFhH44cdlYLGc0Y1X/ed9uGUUVMUDvA3ja8O9r23u0dGa19rkjkUuxkWk4HH3uPQ/eLF1N8aeTzvwmxnK54/ldY0WnwxytggsyCycFZzIaQug3k4466GHG85ShNEjPidvJJKBEOpFJe+4esySq7B10HvDLJlBWQjBVZEOsLVhrfOj8lzVC2JCPpQR1ayLMESrLj2LyAVyLJCRlYNEg1/vOs4wvmDgX6XhcMk4Uid0S2Now8Ro63/Xn86oFzCulYexQTphGLinm6KRDTqDMr+MXoBhbH/1H/uOxhnYd+ajRvIWdAjvLua58AmKAdkiQXSmobsBR/OPP/4OQvZ6UxPvVnrEw2OA1NcNOjP8Nzmh9mL7e+ybpQK2YVp9+Auyzt4wgkko5MCwZ4i2P8zgzbRkTZftU9JSvjfyvyqOL53vTiW+O7nNZkQm1+dBjYNur4gKLqkUnSm0ssJ36LJY/cXCrvdlw==]

:::