<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>


# BBCode
On this page you find the documentation for how to format text in your BagaWork apps using BBCode.



## Introduction
Various GUI components display text on the screen, such as the :docs[Text] component and the :docs[Button] component (using the configuration method `textWithBBCod()` instead of `text()`). That text can contain BBCode, which are instructions about how the text should be formatted. You will find the BBCode tags BagaWork supports on this page.



## [b] - Making text bold
To make text display as bold, surround the text with `[b]` and `[/b]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivhXlwhTFcZaF+kG6I+KOIElXXQrL3aYpaUJGUbo//ddN2qHRvUJx/a3iXf3ffdd90Ay3PwNhDJGMGDiDOtyePaz3OCK4Mi1sTGm0AEJlLIDE4MU+aZfWLP2Z4GRqEplCDNRXVaBqKEkkIieYxKgzfdQBaDN6Ag2KJi2sKBgkwSjeYdvIt9/GHjckYht71alXWzhzppCW64G9FV8kv1XZEd6n210L6xr7fMpKPR2Pbr1YDAhPfIuaRkOp+lckmYwun5fEbWsrgJa4zTTElhBZ576VJY2+/wei/9FRc5t9StEVqqff31kPhxwU9Irx4pRphI9eP2jrcOTg73Ipe6H6UZjxWKZqxJziKk+6wxoBf6CqvhyNZgYlImyODqJnTo8cqx5MVCHCE4BAZmVBg7w47mSYZOv/KmJwrOHdqx7AN1t7r9jdMySQo/MaiOOVj9o/Vu3IPd3Apb4n/if2/mLWXmTFfLUcSyn95Jy7HBxXHD2qBhB5DbpZN7otNvhX/Zyaz8BvPLqlQ=]

:::



## [i] - Making text italic
To make text display as italic, surround the text with `[i]` and `[/i]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivhXlwhzK0y0L5IO0R9UEQFHeugob3aYpaUJGWO0f9uuq7Vjg3mkw9t75Lv7vvuu26AFQV4G4hlguBBzJnW5GHtFwXBL4Mi0cTGm1CEJlbIDL4YpswT+8CBsz0NjUJTKkG6i/q0CkUFFYVU8gSVBm++gTwBb0xBsGXNtIUDBZmmGs07eKM2ntm4WlAobK9eZdPsvkl6gjvuTnSd/FJ9W+b7el8tdGjs6y03WRBMbb9BAwhNdIecS0rm+SKTK8IUzs/zBVnL8jpqME43JYUv8NwLl8LafidXrfRXXBbcUvdG6Kn29ed96iclPyK9fqQIMJXqx+0dbxMcHe5ZrvQwznKeKBTdWC8Fi5G2WWfAIPIV1sORrcHEZEyQ8eV15NDDlVPJy6U4QLAPDE1QGjvDjuZRRs6w9mYgSs4demLZDPVpde2N0zNJCj81qA45WP+jzW7cvd3cCFvif+B/b+YtY+ZM18tRxLIf30nPsfHosGF90OQEkHtKJ/dIp98K/7KTRfUNJB2qYg==]

:::



## [u] - Making text underlined
To make text display as underlined, surround the text with `[u]` and `[/u]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1Lw0AQ/SvLXGxgqW1E0FwkLaI9KKKClqaQJZk0xe1u2A+0lPx3N00bTUmhnjwkmdl9M+/Nm2yAFQUEG0hkihBAwpnW5GEdFgXBL4Mi1cTFm0hEJlHIDL4YpswTW2DP255GRqGxSpDmojotI1FCSSGTPEWlIZhtYJlCMKQg2Kpi2sKBgswyjeYdgsE+nrq4nFMoXK9WZd1sUictwQ13I7pKfqm+s8tDva8O2jfu9bY0+Wg0dv16NSAy8T1yLimZ2XkuPwlTODu3c7KW9iauMV4zJYUvCPwLn8LafS+v99JfcVVwR90aoaU61B+TLEwtPyK9eqQYYSbVj9s73jo4Otyz/NT9JF/yVKFoxnopWIJ0nzUG9OJQYTUc2RpMTM4EGV7dxB7trhxLbleig+AQGJmRNW6GHc2jjL1+5U1PWM49emLZFPVpdfsbr2WSFGFmUHU5WP2j9W78g93cClcSLvC/N/OWM3Omq+Uo4tiP76Tl2HDQbVgbdHkCyD+lk3+k02+Ff9nJvPwGdtmqeg==]

:::



## [s] - Making text strikedhroughed
To make text display as strikethoughed, surround the text with `[s]` and `[/s]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFrwjAQ/ivhXmYhOO0Qtr5IlbH5sDGm4IYVGtqrlcWkJCkq0v++1M7OioJ72kPbu+S7+777rjtgWQbeDiIZI3gQcaY1edn6WUZwY1DEmth4F4jARAqZwbFhyryxBbac/WlgFJpcCVJflKdFIAooKCSSx6g0eLMdLGPwuhQEW5VMezhQkEmi0XyA1znEnzYu5hQy26tRWTUbVUlDcM1diy6TI9VP+fJU78RC28a+pkuTDgZD269VAQITPiPnkpKZnqdyTZjC2a2ek63M+2GFceopKWzAc+9cClv77T0cpE9wlXFL3RihodrXX6PEj3N+QXr5SDHARKpft394q+DicO9yrdtRuuSxQlGPNc5YhPSQ1Qa0Ql9hORzZG0xMygTp3vdDh56vHEqer8QZglNgYAa5sTP80LzK0GmX3rREzrlDryz7RH1d3eHGaZgkhZ8YVOccLP/RajfuyW4ehS3xF/jfm5mmzNzocjmKWPbLO2k41u2cN6wJ6l0Bcq/p5F7odKzwLzuZF99pD6p2]

:::




## [size] - Changing the size of the text
To change the size of the text, surround the text with `[size=THE_SIZE]` and `[/size]`, where `THE_SIZE` is the number of millimeters tall the text should be.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivhXlwhTFcZaEFGJ6I+KKLClHXQ0F5tMUtKkqJz9L+brK6uY4P55EPbu+S7u+/7rktgZQnBEhKZIgSQcKY1uVuEZUnw06BINbHxMhKRSRQyg0+GKfPA3rDnrU4jo9BUSpD2wp3WkaihppBJnqLSEEyXUKQQDCgINneTVnCgILNMo3mB4GQdv9q4nlEoba9OZdPstkk6hNvZLWmXbLC+roptvs8W2jf2NSlMPh5f2n69BhCZ+AY5l5RMdfGFF4PhLJcfhCmcHruDGVnIahQ3YK+VS+ETAv/Up7Cw3+H5WsMzzktuOXS0dOiH+v02C9OK79HgHinGmEn1a/vP3CbYq/JRfuh+khc8VShafU8lS5Cus9aJXhwqdOLIymlicibI4GwUe3R35aXk1VzsGLANjMy4MlbDz5h7GXt9501PVJx79MCyV9SH1a1vvI5JUoSZQbXLQfezNrvxt3ZzJWxJ+Ib/vZlJzsyRdstRxE7fv5OOY4OT3YZ1QcMDQP4hnfw9nTYZ/mUns/obHkStqQ==]

:::


## [color] - Changing the color of the text
To change the color of the text, surround the text with `[color=THE_COLOR]` and `[/color]`, where `THE_COLOR` is the english name of the color the text should have, such as `red` or `blue`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUlFLwzAQ/ivhXlwhzK0y0IJIO0R9UESFKeugob3aYZaUJGWO0v9u2rpqxwbzyYe2d8l39933XUtgeQ5eCbFMEDyIOdOa3G/8PCf4aVAkmti4DEVoYoXM4LNhyjyydxw4zWloFJpCCdJd1KdVKCqoKKSSJ6g0ePMSlgl4YwqCrWqmBg4UZJpqNK/gjbbxm42rBYXc9upVts3u2qQ3cMfdDV0nv6a+KZa7875Y6NDY12xpsiCY2n6DFhCa6BY5l5TMY8mlulSYLDK5Jkzh/LQ5WpCNLK6iFu90iil8gueeuRQ29ju52Mp4wVXO7Rg9OT0Fvv64S/2k4Adk1I8UAaZS/Tj/zdsGB4U+ybUextmSJwpFJ/E5ZzHSbdaZMYh8hbU40phNTMYEGZ9fRQ7dXzmVvFiJPQS7wNAEhbEavmkeZOQMa28GouDcoUeWvaE+rm574/RMksJPDap9Dtb/a7sbd2c318KW+O/435uZZcyc6Ho5ilj2wzvpOTYe7TesD5ocAXKP6eQe6PR7wr/sZFF9AfQur0Y=]

:::




## [url] - Making text a URL
To make text display as a URL the user can click on to open the webpage the URL leads to in a web browser, surround the text with `[url]` and `[/url]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUk1r4zAQ/StiLo1BOI1LYevL4pRSemhZtoVuiQMW9rg2VSQjjdmG4P++Uty4dUgge+rB9oz05uO95w2IpoF4A7kuEGLIpbCW3a+TpmH4TqgKy1y8SVVKuUFB+EjC0C/xipNge5qSQWqNYsOFP+1S1UHHodSyQGMhXmygLiCecVBi5Sdt4cBBl6VF+gPx+S5+cXG35NC4XqPKvtldn4wWHmYPS/vky9a3bb2/75ODhuRezzVV8/m16zfpASllt5qRZovWyGVF1Nh4OlW18q11aHEx9Rdh1sODgTCHd4iji4jD2n0vr3YsnnDVSLfFiM2IQGLf7sqkaOURFv7Rao6lNp/Cf8ztg6M8f+u/NsyrWhYG1cDwsRE58l02aDHJEoNsrVu21ZpRJRSb/fiZBfxw5bWW7UodGLAPTGnekuPwMeZBZ0HotZmoVsqAn1j2gva0ut1NMBJJq6QkNIcU9L9r7020582N890kr/jdzjxXgs6sN8cwN/24JyPFZueHBRuDLk8ARad0io50+rrh/3iy7P4B4V6uyw==]

:::

If you want the URL to display another text, surround the text with `[url=THE_URL]` and `[/url]`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUsFq4zAQ/RUxl8YgnMZLYWtYilNK6WHLsi20IQ5Ytce1qSIZaUwbgv995Tjx1iGB9NSD5ZE082bee1qDqCoI15DqDCGEVApr2e9VVFUMPwhVZpmL17GKKTUoCB9IGPojXnHkbU5jMki1Uay/aE+bWDXQcMi1zNBYCOdrKDMIJxyUWLadNunAQee5RXqG8HwXz1zcLDhUDmtQ2YHddZvBwH3vfuh282nq27rcn/fRpfrklqeSiun02uGNuoSYklvNSLN5beSvgqiy4XisStVCa9/i4n4bn1n2ji+2JJyPXe7CTzoEr9eAwweEwY+Aw8r9Ly53xB5xWUk32IDggFNk3+7yKKvlEWLtp9UUc23+e7Ht2wVHqf/V79ZPi1JmBlVP+qESKfLdrpdnlEQG2UrXbCM/o0IoNvl5lXj8cOW1lvVSHWiwnxjTtCbHYdvmXiee32ozUrWUHj+xbIb2tLrdjTcQSasoJzSHFGxfcOdNsOfNjbPfRK/43c48FYLcG3TmGOa6H/dkoNjk/LBgw6SLE5KCU5CCI0ifJ/yKJ4vmH80TtfQ=]

:::