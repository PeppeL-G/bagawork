<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `m`
On this page you find the documentation for the `m` variable.


## Introduction
The `m` variable, short for **M**ath, contains various methods you can call to perform various mathematical operations. You can use wherever you want in your code.




## `lowest()` - Obtaining the lowest number
You can use `m.lowest()` to pass it multiple numbers, and it will return back the lowest one to you. Simply separate the numbers by `,` (comma).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUu9LwzAQ/VfCIdhCKFv9SUGkisg+KOIGKk5YbK9umCYlSdlG6f9ual1dxpT5yQ8td7177+69awWsKCCqIJEpQgQJZ1qTm2VcFAQXBkWqiY2rsRib5kkUMoNDw5S5Y2/o+W3FKDSlEqQrNF/rFlRDTSGTPEWlIXquYJZC1KcgWN5M/IQABZllGs0jRL1V/GTj+oVCYfkcZEs2aBNn8W5+t3yTdNuLMn9FRc5IHnA5R228Q0pCSk4oOfZdidflbFPcyHIGxr68yV5VBC1ZPfEdrRQWEIU9K2IJ0UGvEzDCvOCW1xHi7B7r90EWpyX/RYAUF5hJ9e372uxfNr+Xcx0k0xlPFQrvC2mGBUuQrrI1dbFCspQl+bSZmCkTpH96PvHpduSl5GUutgzYbBybi9JYDV9jbuXEDxpvPFFy7tMdYU+od8OtKr5jkhRxZlBtc7D5U9vbhBu3uRIWEr/hf1/mYcrMvm6Oo4id/vNNHMf6ve2GuU1HOzSFuzCFPzCtb/iXm7zUH9GPriQ=]

:::




## `highest()` - Obtaining the highest number
You can use `m.highest()` to pass it multiple numbers, and it will return back the highest one to you. Simply separate the numbers by `,` (comma).

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFUl1Lw0AQ/CvHIpjAEdr4SUAkikgfFNGCii30TDZNMbkLdxdsCfnvXhobe6WW+uRDwm52Z3ZnNhWwooCggkjECAFEGVOK3C3CoiA418hjRUxcjfhIN08kkWl80kzqBzZFx20rWqIuJSddoflat6AaagqJyGKUCoK3CmYxBH0KnOXNxCUEKIgkUahfIOit4lcT12MKheGzkC3ZoE2sxbv53fJN0m3Py/wdJbkguZfOpikq7RxT4lNyRsmpa2u8LWeb6oaG1NPm5UwOqsJr2eqJa4mlMIfA7xkVCwiOep2CIeZFZngtJdbyofoYJGFcZjsUCH6FiZA/xq/N3rH5o/hUXpTOslgid76R+qlgEdJVtqYulEgWoiRLn4lOGSf988uJS7cjr0VW5nzLgM3Gkb4qtdHwPeZeTFyv8cbhZZa5dE/YK6r9cKuKa5kkeJholNscbH7V9jb+xm1uuIGEU/zvyzynTB+q5jiSmOm/38RyrN/bbpjddLJHk78Pk/8L0/qGf7nJuP4CRzaucg==]

:::



## `randomInt()` - Obtaining a random integer
You can use `m.randomInt()` to obtain a random integer. Pass it two numbers:

1. The lowest random integer
2. The highest random integer

The function will then return back an integer between the ones you pass it. The returned integer can be equal to the lowest and the highest number you passed it.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU2Fr2zAQ/SviGMwGYZyUQTGM4o5S8mGltIUtNIWo9rkJkyUhybSZ8X+fHDVeZNKSfuoHByn37t279+wWmFKQtVDIEiGDgjNjyM9NrhTBF4uiNMSd24VY2P4pNDKLt5Zpe82eMIp9xWq0jRZkKPT/dr6pg45CJXmJ2kB238K6hGxCQbC6n7htAQqyqgza35Clu/PcnbsHCsrxBZ2ebOYvgfBh/iC+vwzqRVM/oibfSRruc9msx5vcyGeTFKs1LzWKyJcW9s7RJtb9RMsvrUo8X7eM6Q5w3lgrxSvkCp+JZqKUNfHIZZys3J2jjlTiK+u/eLWt7TjiPeucmhA0qNzNdrvUr0wzYaMTSk7jwHsKL5BNU2fqBrKTdDD0DmvF3eqBsYGXufkzq/Ky4e8YKsU5VlL/fw8C8R8091axAukBq3ONZCMbso2dWGchmZye7bkedv6QvKnFgQFj4Dgu6fLpvYlEw3lMj2ybozmu73DCUuSV3Ut29OX4bKajbC6Ea8mf8LOT+bVi9qvpw9HETX87k8CxSXrYsBD07QjQ9Bim6RtM+wo/kslD9w++buWD]

:::




## `randomFloat()` - Obtaining a random float
You can use `m.randomFloat()` to obtain a random float. Pass it two numbers:

1. The lowest random float
2. The highest random float

The function will then return back a number between the ones you pass it. The returned number can be equal to the lowest and the highest number you passed it.

::: tip Example

::bagawork-project[app&link&code=StartPage&baga=eNrFU2Fr2zAQ/SviKNQGYeyUwjCM4Y5t9MNKWQttWQpR7XMTJktCkmkz4/8+OWq8yKQl/dQPDlLuvXd379kdMKUg76CUFUIOJWfGkJ/rQimCzxZFZYg7d3Mxt8NTamQWryzT9pI9YhT7itVoWy3IWBj+7T2ph55CLXmF2kD+u4NVBXlGQbBm6LihAAVZ1wbtLeTp9nznzv09BeX0AqYXO/eXYPCx/zj8cBmnF23zgJp8Jmm4z492Nd3kl3wySblc8UqjiHxpbq+dbGLdT7Q46lTi9fpFTLeAs9ZaKV4gF/hENBOVbIhHLuJk6e4cdaQSX1n9xYtNbasR71jnpglB45Tb3m6X5kXpO5fMRllKSXYaB/5TeIZ8ljpj15CfpKOp19go7tYPzA38LMyf87qoWv6GqVKcYS31/3chWOCdBl8pViLdY3ehkaxlSzbRE+tsJNmnLzvOh8yvkreN2NNgCpxGJl1GgzeRaDmP6YG0OzSH8fanLEVR2510J1+Pz2Y2yeabcJTiET86mZsls8dmCEcT1/31TALHsnS/YSHo9ADQ7BCl2StKuxO+J5P7/h9Kkuaq]

:::