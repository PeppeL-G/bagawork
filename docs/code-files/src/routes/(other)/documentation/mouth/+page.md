<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `Mouth`
On this page you find the documentation for the `Mouth` class.



## Introduction
The `Mouth` class represents the *mouth* of the `App`, and can be used to speak text to the user through the user's device's speakers. You can get a reference to an instance of it through `a.mouth`.

::: warning May not always work

The `Mouth` class relies on text-to-speech functionality provided by the user's web browser. Not all web browsers provide this functionality, so not all users will hear the text spoken through this class.

:::



## Making the mouth speak
By default, `Mouth` is disabled and won't speak anything. To make it speak the text in the [Text](/documentation/text) component in the graphical user interface on all `Page`s, enable it by calling the `enable()` method on it.

::: tip Example

Example showing how to enable the `Mouth` in an app.

::bagawork-project[app&link&code=StartPage&baga=eNqVUstqwzAQ/BWxJwdU0zg0Db4U55LmUChtDi11wKq9jk0cycgySTD+90px/MqhkIukXTGzMyNVwPIc3ApCESG4EGasKMjb2ctzgieFPCqIPlc+95XgS4yFRGtyKX3F7IMoVWIjZ7+ZbptubZZQIlP4qZhU72zXAySqUnLC8UgGl1dYDTWFWGQRygLcnwrSCNwpBc4ORtkFABREHBeovsB9mDlt9Q3uYlpvKeSacARu+NZNMfLYCeh8mqLq5a/K9Fb4slQ6BVtphBWsBFGCbPTZAIOJbYZbbd27onAC13FmFM56X8xr2qhz/lPX0twh7kMcCztM0iySyK3myleG6Cr4NSUqQYmUJOJImERyFiWJRMp3L8GEtoiRySUL98Zm0xwa7fLrkYNZ3pCdxCnHfsRNNE/zx2s0z+0TbvCQZ9rl6ClH+XjFfh17UZmpOxIa6AsGv25b/wHbCA8A]

:::



## Making the mouth quiet
If you want the `Mouth` to be quiet again after you have enabled it, disable it by calling the `disable()` method on it.

::: tip Example

Example showing how to enable and disable the `Mouth`.

bagawork-project[app&link&code=StartPage&baga=eNqlUsFugkAQ/ZXtXIoJJRVTa7jhxXho0lYPbYoJWxiUCLuEHaKG8O8FBQRtmzS9ADOT93jvzeTAkwSsHDzpI1jgRVwp9nSwk4ThnlD4ipXfuSMc8lLkhAviKT3zNWqDY9ehFClLBRO4Yy9ZiPWwmhWOKKDQIZCRj6kC6yOH0AdrqIPgcfW/IxvoIINAIb2BdTcym+odrMmwWOmQlIQ98Ilvfip6ylsBrfqq6MifZeGl8Fe5U4a3CSM/RaGdRg4tSwKDyofmzm9jJiQxlSDfhmLNpGC0CRWrhBnuQG8w04xIiho1k4wkW9SYSoY7MCqE1u014HNeOuzBMs2RDofyPRkX+sm3+ZvvLuW1dSmmGMj0vDJuxDKjjYGCf0bnZf03pG8DuvkpoCn3tlVE7c6afNrGZTiVEzsgTK+M+KHqOaljfBjf1zE+Noe0xDiJSo+9g+plaavtPLD9LKI/HFEnCbdz+6viCxK+MRw=]

:::



## Configuring the voice
The voice speaking can be configured in different ways.

### Changing the voice
Most web browsers support multiple different voices, often specialized in different languages. To get all voices the user's web browser supports, call the method `getVoices()`, which returns an array with voice objects looking like this:

```js
const voiceObject = {
	id: "A unique value identifying this voice",
	name: "The name of this voice",
	language: "The code of the language this voice is specialized in, e.g. en-US",
}
```

To make the `Mouth` use a specific voice, call the method `selectVoice(theVoiceObject)`.

### Changing the rate
How fast the `Mouth` speaks can be controlled through the *rate* property. Default rate is `1`, meaning normal speed. `0.5` means half the default speed, `2` means twice the default speed, etc. Call the method `getRate()` to get the current selected rate, and use the method `setRate(newRate)` to change the rate to a new value.

### Changing the pitch
Which pitch the `Mouth` speaks with can be controlled through the *pitch* property. Default pitch is `1`, meaning normal pitch. `0.5` means half the default pitch, `2` means twice the default pitch, etc. Call the method `getPitch()` to get the current selected pitch, and use `setPitch(newPitch)` to change the pitch to a new value.

::: tip Example

Example of how to configure the voice.

bagawork-project[app&link&code=StartPage&baga=eNqVVGFr2zAQ/StCXyaDa9KUdsWQQboPIx8GpQljpSlEtc+xiCMJ6Zy2BP/3yXbsyE0pGQTHsu7evfekuz3lWtN4TxOVAo1pUnBrye/3qdYE3hBkaol73y/lEhMDHGGO3OA9XwMLmq9LNIClkUTCK/mpZCbWpYE/SiTQRtVB1VJWtApppooUjKXx056KlMaXIZV8WxduYGlIVZZZwL80vrgad6tHGt9eVs8h1Q5wkNzizdrFQMIpk15PvfAE/SpFL6V9JkpaJLs68a5EdCsyITzaqhLzaA3YQFoWRFuu2Y5MfhySsY2O0FViu6hWFnRbS4xq9mwBFntK/m7OZVqAYSxwgH01CwUkbQLbBYf4wCcrMuYzjQqQa8zJZEJGvaruiBaOWMtu9ahKQ16MerVgSKrAym9IbKm1MtjEXSzUxVwDJHm0OhSs/LoHyAeHECW5KFIDknX15pon0C28qvNGTmstMc58hx32SYVwh8k8ox9cBAucz0KyUXQZRBZBu7fRde39GxsHvW012NC4Nrv+Hng1ziGmBTaqv2B2X4ecSa2B+8CtzW92/pPdgJcf79+CzyKOjRjSNxqPx1chfXf/tzdV2DbU+KuGGlzc015S8g4yZY5ToRMLkr8UxzHwWdd9eZU8Gxa5sMT9XnOOZEasKmVKCrEZeOL34OqOJxuCqp8GQq5rxqugbcbTIdHhHOkqOc3QneJHXamwA2EHW69vRgdbv3cTawFbXTjJg8k18HZqN7NsmpYFnjOkTpt55Q3Z5+ofJHAUOg==]

:::