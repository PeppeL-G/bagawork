<script>
	import ViewApp from '$lib/ViewApp.svelte'
</script>

# `speaker`
On this page you find the documentation for the `speaker` variable.



## Introduction
The `speaker` variable contains an object used for playing something on the device's speaker. It can be used to speak words to the user.

::: warning Note!

The first time you instruct the `speaker` variable to say something, it can take a little while before the computer says it.

:::

::: tip Example

```js baga-show
class StartPage extends Page{
	
	createGui(){
		return Button.text(`Say something!`).onClick(p.speak)
	}
	
	speak(){
		speaker.speak(`Hello there, how are you?`)
	}
	
}
```

:::





## speak() - Making the speaker speak words
Use the method `speak()` to instruct the speaker to speak some words to the user. Pass it the words as a string. The speaker's default voice will be used to speak the words.

::: warning Might not always work!

The speaker will only work if the web browser the user is using supports the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API).

:::

::: tip Example

Example showing how to make the speaker speak some words when a :docs[Button] is clicked.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Button.text(`Say something!`).onClick(p.speak)
	}
	
	speak(){
		speaker.speak(`Hello there, how are you?`)
	}
	
}
```

:::





## speakWithVoice() - Making the speaker speak words with a specific voice
Use the method `speakWithVoice()` to instruct the speaker to speak some words to the user with a specific voice. Pass it the words as a string, and the voice as an object retrieved from `getVoices()`.

::: tip Example

Example showing how to make the speaker speak some words when a :docs[Button] is clicked.

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		return Button.text(`Say something!`).onClick(p.speak)
	}
	
	speak(){
		
		const voices = speaker.getVoices()
		
		const randomVoice = voices[m.randomInt(0, voices.length-1)]
		
		speaker.speakWithVoice(`Hello there, how are you?`, randomVoice)
		
	}
	
}
```

:::




## `getVoices()` - Obtaining all supported voices
Use the method `getVoices()` to obtain an array of voices that can be used to speak the words passed to `speakWithVoices()`. This method returns an array with voice objects looking like this:

```js
const voiceObject = {
	id: `A unique value identifying this voice`,
	name: `The name of this voice`,
	languageCode: `The code of the language this voice is specialized in, e.g. en-US`,
	rate: 1,
	pitch: 1,
}
```

* `languageCode` is of the format `LANGUAGE-COUNTRY`. For example, `en-US` means *English as they speak it in the United States*. [This webpage](https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469) contains the code for different languages and countries
* `rate` can be decreased/increased to make the voice speak slower/faster
* `pitch` can be decreased/increased to lower/raise the pitch of the voice

::: warning Different devices = different voices!

Different devices support different voices, so the voices that are supported on your device are not necessarily supported on devices your users have. Which voices that are available are primarily determined by:

* Which operating system (Windows, Max, Linux, etc.) the device is using
* Which web browser (Firefox, Chrome, Safari, Edge, etc. ) that is used to run the BagaWork app

:::

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		
		const voices = speaker.getVoices()
		
		return Rows.padding(2).children(
			voices.map(
				v => [
					Columns.backgroundColor(`white`).cornerRadius(4).padding(1).children(
						Text.grow(2).text(v.name),
						Text.grow(2).text(v.languageCode),
						Text.grow(1).text(v.rate.toString()),
						Text.grow(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}
```

:::





## `getVoicesByLanguageCode()` - Obtaining supported voices in a language
Use the method `getVoicesByLanguageCode()` to obtain an array of voices that are for a specific language. Pass it the language code as a string, such as ``  `sv` `` for Swedish, or `` `en` `` for English. [This webpage](https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469) shows the code for different languages and countries.

::: tip Example

```js baga-show-editor-code
class StartPage extends Page{
	
	createGui(){
		
		const voices = speaker.getVoicesByLanguageCode(`en`)
		
		return Rows.padding(2).children(
			voices.map(
				v => [
					Columns.backgroundColor(`white`).cornerRadius(4).padding(1).children(
						Text.grow(2).text(v.name),
						Text.grow(2).text(v.languageCode),
						Text.grow(1).text(v.rate.toString()),
						Text.grow(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}
```

:::





## Playground

::: tip Playground

```js baga-show-editor-code
class StartPage extends Page{
	
	textToSay = `This will be said!`
	rate = 1
	pitch = 1
	
	createGui(){
		
		const voices = speaker.getVoices()
		
		return Rows.padding(2).children(
			
			EnterText.text(p.textToSay).store(p, `textToSay`),
			
			Columns.children(
				Text.text(`Rate: `),
				EnterNumber.number(p.rate).store(p, `rate`),
			),
			
			Columns.children(
				Text.text(`Pitch: `),
				EnterNumber.number(p.pitch).store(p, `pitch`),
			),
			
			Box.grow(1).child(
				Rows.children(
					voices.map(
						v => Button.text(`${v.name} (${v.languageCode})`).stay().onClick(p.speak, v),
					),
				),
			)
			
		)
		
	}
	
	speak(voice){
		
		voice.rate = p.rate
		voice.pitch = p.pitch
		
		speaker.speakWithVoice(p.textToSay, voice)
		
	}
	
}
```

:::