<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a layout that can contain one optional child. If a child is provided, the child will occupy the same space as the `Space` component except some amount of space at the sides. By default, that amount of space is `0`.

::: tip Example

::bagawork-project[app&baga=eNrFk9Fr2zAQxv8V7V5mgwhJRmH4ZbijlD6slC2wlblgzTonoYpkpDNrCP7fJ1mtF6dpSZ/6YJDl++67+314B6JpINtBZSRCBpUSzrFv27xpGD4QaumYP+8KXVB4KouC8AcJSzdiiUkav5BFaq1mw4dw20VRBx2H2iiJ1kH2ewdrCdmMgxab4NhLgIOpa4f0C7Lp0/nWn7s7Do3vN1LGZlfxZTT44D8MH14Opr9s18/mbkSFkz+iul9a02r51Shjk3JpEXWZToRSyVk6qVZrJZMoLGjhLZ7OBT0XW5RluldAvj4pFyuMbqwym8Zo1MTWjvVOnAktGfmK3inc+yYfypTHNumIKocHyOZTj2sL2afpgGqBm0b5NUfIRpRyd39V57JVr6Ay+hxrY/8nvOf9Csjv5q+LnCzqAVW/MN8H90gjt8i2pmV9oH5zodns85dh4UOlJ9tu9BGDw8KCzlvyOzzaXBsfYmCT6FaplJ8ou0V3mu5YQAFhXhPaYwTDPxGzmR9kc6G9JF/ieyfzcyXoowvhWObdX85kRGw2PQ5sXHR2QtH8lE7zFzrtT/iWTO66f5kz1nc=]

:::

::: tip Common usage

A common usage of the `Space` component is to just occupy space, so other children in a layout are positioned as desired. For examples, see the documentation for the [`Columns`](/documentation/columns) and [`Rows`](/documentation/rows) components.

:::




## `all()` - Setting the amount of space on all sides
Use the configuration method `all()` to tell the `Space` component how much space there should be on all sides around the child component. Pass the amount as an integer representing the number of millimeters.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk1FL5DAUhf9KuC+2UIeZ0YGlL1KXRXxQRAd2xQqNzW0bTJOSpOgw9L9vMtU6HUeZfdqHwm1zzz0336FroE0D8RpyxRBiyAU1hlytkqYh+GpRMkNcvU5lav2Ta6QW7yzV9oaWGIT9idVoWy3JcOC/dr2ogy6CQgmG2kD8sAbOIJ5FIGntHTcSiEAVhUH7B+Lpe33v6u4xgsbNGyn7YZf9y2jxwX9Y3r/sbH/R8k97NzTHyRPNn0utWsl+KqF0kJUaUWbhhAoRLMJJXnHBgl6Y2qWzeK9T+1mskWXhVoN1/UG2rFAj4YYsSM0Fr9E6LOSJl+Sl4haPjd+EKEmcJzklhjM0kyyM+kHhiGsErxDPpw7YCuKT6QBriXUj3EVH0EacEvN8WSSsFd/AUvIcC6U/Mt7y/gblrXoxPSmNcoC1ARxto3vjkTgaK9WSTaTEVlSS2Y+z4cK7Sse2reUeg93G1J631t3hzeZauRg9m0C2QoTRgbJ7NIfp9gXkESaFy3cfQf9X9NnMd7L5JZ0kKfF/J/O7ovbI+HA0ce5fZzIiNpvuBzZuWhzQND9k0vyLSdsb/ksmj91fNoLXLg==]

:::




## `horizontal()` - Setting the amount of space on left and right side
Use the configuration method `horizontal()` to tell the `Space` component how much space there should be to the left and right of the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()` and `horizontal()` are used, then the left side and right side will get there value from `horizontal()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk19rnEAUxb/KMC9VsMu6ZaH4UkwpIZCE0gbaEANOnOsfMs7IzLXJdvG7d0YTq2YTtk99EGecc++5/o7uKWsaGu1ppjjQiGaCGUMudnHTEHhEkNwQu94nMkF3ZRoYwndkGr+yAjx/OEEN2GpJxgP3tBuKOtoFNFeCgzY0utnTitMoDKhktXPsS2hAVZ4bwJ80Wj+vr+26uw1oY/vNKodmZ8NmNvjoPw7vNovpT9vqxdwNy2B1x7L7QqtW8s9KKO2lhQaQqb9iQnhbf1UqXf1WEpnwQrvNykpwb+iT4JV1fF4n+LKXBp76EwFavZeeQ46ESU50VZRITMXBkJL9AhJu65o8lBXCe+OmC3oZqqa/3ylEVU/1C/kq9YPBzZ9lEdBHGm3WFvKORh/WI+ArqBth4cxAz9jG5v4sj3kr3gCs5AnkSv/9Libeb+D/ph7MgFODHIn2oQRTvk/QYg1kp1rSfwYESyZJ+PHT+MLLShtAW8sDBkthgietxSqfbC6Vjd6x8WQrhB8cWXYN5ri6QwE5hHGOoA8RdH/SkM1mkc0XaUviAv53Mj9Khu+MC0cT6/56JjNi4fowsLloe4Roc0ynzSudphP+Sya33R+Uj+mc]

:::




## `vertical()` - Setting the amount of space on top and bottom side
Use the configuration method `vertical()` to tell the `Space` component how much space there should be above and below the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()` and `vertical()` are used, then the top side and bottom side will get there value from `vertical()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk19rnEAUxb/KMC9VmIprWSi+FFNKyUNLaRfaUANOnOsfMs7IzDXJsvjdO2pidbMJ26c+CFfn3Huuv6MHytuWxgeaawE0prnk1pIv+6RtCTwgKGGJqw+pSnG4cgMc4Qdyg994CZ4/naAB7Iwi88HwtJ+aetozWmgpwFga/z7QWtB4w6jizeA4tlBGdVFYwF80Dp/qK1f314y2bt6qcxp2Od2sFp/95+WHm6PtP3f1s71bnkNww/Pb0uhOiY9aauNlpQFQmR9wKb2tH9yBwTrn0otCP8irWgpvmpLizvk91Sk+n2RAZP5CgE7vZTvdEq4EudGIuiG2FmBJxe+ARGHTkPuqRnhrh93YqJNQ4FiYuqxwqd+u5UHms8nNXyXB6AONo9Ah3tP4XTjj3UHTSodmhXlFNrG3l0UiOvkKXq0uoNDm71ex8H4F/nd9byecBtRMdIyELfk+QksMkL3uyPgREKy4Ipv3H+YXPu50AXSNOmFwLEzxonMxqEebr9oFP7DxVCelz85suwJ7Xt+pgAaESYFgThEc/qMpm+gom0/KtSQl/O9kflYc39ghHEOc+8uZrIhtwtPA1qLtGaLonEnRC5OWG/5LJtf9H9GD6KQ=]

:::




## `left()` - Setting the amount of space on left side
Use the configuration method `left()` to tell the `Space` component how much space there should be to the left of the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()`/`horizontal()` and `left()` are used, then the left side will get its value from `left()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk8Fq3DAQhl9l0KU2qMbrslB8KU4pJYeW0i60IQ5YscZrE1kykkyyLH73SuvEtTebsDn1YDOyZv4Zfb+1J6zrSLonpeJIUlIKZgx822VdB/hgUXIDLt7nMrf+KTUyi78s0/YH22IQjjtWo+21hGnDfx3GooEMlFRKcNSGpNd70nCSriiRrPUdDyWEElVVBu0fksZP8ZWLhxtKOqe3qBzFLsfFYvCp/zS8XxxN/7Vvns3dsRKjW1bebbXqJf+shNJBsdWIsggjJkSwDiOBlQ2SOIzKuhE8GBVyu3G9nuLcPlfRyItwlmBdflBsagQvCKbhCDUzkMTQNqJp0TpSoCq4rxuL742fjYJ1+cq9NCiJBtaz3KgI6agfLrhT8kDSJHZAdyT9EE8wN9h2woFYQF1wzMzdZZXxXrwCU8kLrJT+9w/Mer+C+qe6NyNAjXJieDCAzok+Yso0wk71cLDcQWASVh8/TQc+rnTI+1aeaHCcmNuL3rozPLb5rpzNnk0geyFCembZFZrz6k4Z5BFmlTPwFEF/a0ZvkiNvvkhXkm3xfzvzu2b2nfHmaHDdX/ZkQWwVnwa2TFqfkZSco5S8oDSf8C2e3Ax/AZk94hU=]

:::




## `right()` - Setting the amount of space on left side
Use the configuration method `right()` to tell the `Space` component how much space there should be to the right of the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()`/`horizontal()` and `right()` are used, then the right side will get its value from `right()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk19rnEAUxb/KcF+qMBXXslB8CaaUkoeE0i60IQacONc/ZJyRmZFkWfzuHdfE6GYTNk99UGb0nnvu/I7ugLUtxDvIFUeIIRfMGHK5TdqW4KNFyQ1x610qUztcuUZm8bdl2v5kJXr++MZqtJ2WZHoxPO1HUQ89hUIJjtpAfLODmkO8oiBZMzjuJUBBFYVB+xfi8Hl97db9LYXW9Vsox2YX42Yx+OQ/DT9sDqb/0dWv5m5ZjsEdy+9LrTrJvymhtJeVGlFmfsCE8NZ+oOuysl4U+kFe1YJ7Y4vUbpzZ8zq1r9to5Jk/K7Cu3ss2FZJ9R2JqjqRihkQhaWpRN2gdK6IK8lDVFj+bYTpKrBMod9NESTRkPasNMp+OBv6CPIVHiKPQId1C/CWccG6waYVDscC6IJmY+4si4Z14B6eS51go/fIVzLzfgf1LPZiRoEY5QdxHQOdInzglGslWdWQfuoPAJFl9PZsOfKh0zLtGHjE4LEzteWfdGZ5srpQLemDjyU4In54ou0Zzmu5YQAPCpHABHiM4/DdjNtFBNt+lkyQl/u9k/lTMfjJDOJo497czWRBbhceBLYvWJxRFp3SK3ug0n/Ajmdz2/wAEQOL7]

:::




## `top()` - Setting the amount of space on top side
Use the configuration method `top()` to tell the `Space` component how much space there should be above the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()`/`vertical()` and `top()` are used, then the top side will get its value from `top()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk8Fq3DAQhl9l0KU2qMbrslB8KU4pJYeW0i60IQ5YscZrE1kykkyyLH73SuvEtTebsDn1YDOyZv4Zfb+1J6zrSLonpeJIUlIKZgx822VdB/hgUXIDLt7nMrf+KTUyi78s0/YH22IQjjtWo+21hGnDfx3GooEMlFRKcNSGpNd70nCSriiRrPUdDyWEElVVBu0fksZP8ZWLhxtKOqe3qBzFLsfFYvCp/zS8XxxN/7Vvns3dsRKjW1bebbXqJf+shNJBsdWIsggjJkSwDiOruiCJw6isG8GDUSC3G9fqKc7tcxGNvAhnCdblB8WmRnB6YBqOUDMDSQxtI5oWreMEqoL7urH43vjJKFiXrtxLg5JoYD3LjYqQjvLhgjolDyRNYodzR9IP8YRyg20nHIYF0gXFzNxdVhnvxSsolbzASul/f8Cs9yugf6p7M/LTKCeEB/x0DvSRUqYRdqqHg+EOApOw+vhpOvBxpSPet/JEg+PE3F701p3hsc135Uz2bALZCxHSM8uu0JxXd8ogjzCrnIGnCPo7M3qTHHnzRbqSbIv/25nfNbPvjDdHg+v+sicLYqv4NLBl0vqMpOQcpeQFpfmEb/HkZvgLAFThZQ==]

:::




## `bottom()` - Setting the amount of space on bottom side
Use the configuration method `bottom()` to tell the `Space` component how much space there should be below the child component. Pass the amount as an integer representing the number of millimeters.

If both `all()`/`vertical()` and `bottom()` are used, then the bottom side will get its value from `bottom()`.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFk1FrnEAUhf/KcF+qYMW1LBRfigml5KGltAttqAEnznWVjDMyM5Isi/+9MzuJ1c0mbJ/yoMw499xz/Y7ugfY9ZHuoJEPIoOJUa/J1l/c9wQeDgmli1/tCFMZdlUJq8KehynynWwxCf2IUmkEJMh24p6MXjTBGUEvOUGnI/uyhZZCtIhC0c44HCUQg61qj+Q1Z8rS+tuvxJoLe9lsofbMrv1kMPvlPw7vN0fRfhvbZ3D2tML6l1d1WyUGwS8mlCsqtQhRlGFPOg3UY30pjZBekSRhXTctZ4HsUZmPdntaFed5HISvDWYGx9UG5aZD4lkS3DElDNUkT0rW87dBYWkTW5L5pDb7Xbr6IGKuQ9qaIFKjJelYbl2HkHcIF+wgeIEsTC3UH2YdkArrBrucWxgLsgmWu767qnA38FaBSXGAt1b/vYOb9Cu4f8l57hArFRPEQQjRn+ggqV0h2ciCH2C0EKsjq46fphY+VFvrQiRMGx4WFuRgsfvFo803aqB2bQAych9GZsmvU5+lOBeQQ5rUN8BRB9+f4bNKjbD4LK8m3+NbJ/GqoeaddOIpY95czWRBbJaeBLYvWZxSl53RKX+g0n/B/MrkZ/wKPpOPp]

:::