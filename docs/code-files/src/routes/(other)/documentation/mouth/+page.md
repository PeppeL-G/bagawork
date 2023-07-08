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
By default, `Mouth` is disabled and won't speak anything. To make it speak the text in the [Text](./text) component in the graphical user interface on all `Page`s, enable it by calling the `enable()` method on it.

::: tip Example

Example showing how to enable the `Mouth` in an app.

::bagawork-project[app&link&code=StartPage&baga=eNqVUs9vgjAY/Vea74RJZyZmznBZ8OI8LFk2D1uGCR18KBFb0paoIfzvo1Z+eVjipfA+eK/vvbYElufglRCJGMGDKGNKkbezn+cETxp5rEj9XgY80IIvMBESndEFBpqND6LQuzFy9pvVYzOtzBJJZBo/NZP6nW07gkRdSE44Hknv45VWQUUhEVmMUoH3U0IagzehwNnBOLsQgIJIEoX6C7yHqdugb/Dmk2pDIa8FB2Srt7JgkLE10OY0oOzsL4v01vii0HULTrgURAuyromGE47GZl+nwV0gCifwXHdK4Vw/57OKWmPuf8YamTt8fYijcuwk0IbvhK8p0TuUSMlOHAmTSM6iILFI+fYlHNHm5ybRgkV7k8nifqq2p45kd/D7miRJOXbCNxU8zR6vFTw3p7TGQ57VaQanNejBV/tV4sdFpu9owloLe3dqU/0BfQ4Byg==]

:::



## Making the mouth quiet
If you want the `Mouth` to be quiet again after you have enabled it, disable it by calling the `disable()` method on it.

::: tip Example

Example showing how to enable and disable the `Mouth`.

::bagawork-project[app&link&code=StartPage&baga=eNqVkk1vwjAMhv9K5suKlFWjaAz1Vi6Iw6RtcNi0IjWjKVS0SdW4AlT1v6+hH7SAJnFK7NjO68fOgSUJ2Dmspc/BhnXElCJvRydJCD8gF74i5T13hYvrlDPkC2QpvrMNNwYnr4spxywVRPA9+chCXj/qt8IVBRQUAhn5PFVg/+QQ+mAPKQgW6/9O1YCCDALF8Qvsp5HVWN9gT4bFikJSFuwlV/XmldFT3gpo1WujI3+WhZfCP+VeGZXHxWWZZ3jzx5gIiUQlnO1CsSFSENyGimgppjegTfg0Q5TC8GaSoCSLOlz/6Q1MHWx0fU3eGQ6FA9iWNaJwLM/JuKBVk9Z/TXZLXvcpxZQHMj3Ph5mxzHBrcsF+o/Nk7idyk8bDDRpTtt5pHu00Ghit45KElu0EyNMr1X6oerJrZi/j55rZa7MiSx4nUdlQb1V64By1mweOn0V4x3pU/XudhV4Vfxh6IG8=]

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

::bagawork-project[app&link&code=StartPage&baga=eNqNVNFq4zAQ/BWhl5PBNUlKe8WQg/Qejj4clCYcV5pCVHudiDiSkNZpS/C/n2zZjt2GXiA4lr07OzPy6EC51jQ+0ESlQGOa5Nxa8vt9pjWBNwSZWuLuD0u5xMQAR5gjN3jP18CC+ukSDWBhJJHwSn4qmYl1YeCPEgn4qqqoXMqSliHNVJ6CsTR+OlCR0ngcUsl31eAaloZUZZkF/Evji8tJu3qk8c24fA6pdoCDZo935xcDCZ+ZdHqqRU/Qr0J0Uvw1UdIi2VeNtwWiW5Ep4dFOFbiJ1oA1pGVBtOOa7cn0R9OMvprto0pU0D5dYlQRZwuw2LHpv91wmeZgGAscVjfIQg6Jb2D7oKkP+jxFxvokoxzkGjdkOiWjTlC7Owunnq0eVWHIi1GvFgxJFVj5DYkttFYG65KLhbqYa4BkE62aWWV/ZIP24BBYO2GueQLtws+Z19y9hcQ4kx1a2NXnwm0a6xn64CpY4PwUko2icRBZBO3uRleVx29sEnQeVWBDl3x39TzozfgPJy2wlvgFqfuq5ExWNdwHWr6/fnM+sQGlfml/o09VHGMW0jcaTyaXIX13/zfXZejjMvkqLoNv83NSlLyFTJlj5ludIPlLfgz5qUyd+mS88MVGWOJ+rxuO5I5YVciU5GI7cKHJ1OqWJ1uCqgu2kOuK3irw4fqc9xbiyE3JWYZutz6KSIUdqGg8vLoeNR5+bw+fBex07vQNDqGBkTO7vctmaZHjOefNIJyr3lH5XP4Dqij9pQ==]

:::