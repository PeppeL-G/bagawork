import { validateArgs } from "../functions/validate-args.js"

export const speaker = new (class speaker {
	
	speak(text) {
		
		validateArgs(
			this,
			`speak`,
			[`string`],
			arguments,
		)
		
		const utterance = new SpeechSynthesisUtterance(text)
		
		speechSynthesis.speak(utterance)
		
	}
	
	speakWithVoice(text, voice){
		
		validateArgs(
			this,
			`speakWithVoice`,
			[`string`, `object`],
			arguments,
		)
		
		const utterance = new SpeechSynthesisUtterance(text)
		
		utterance.voice = window.speechSynthesis.getVoices().find(
			v => v.voiceURI == voice.id,
		)
		utterance.lang = voice.languageCode
		utterance.rate = voice.rate
		utterance.pitch = voice.pitch
		
		speechSynthesis.speak(utterance)
		
	}
	
	getVoices(){
		
		validateArgs(
			this,
			`getVoices`,
			[],
			arguments,
		)
		
		return speechSynthesis.getVoices().filter(
			v => v.localService,
		).map(
			v => ({
				id: v.voiceURI,
				name: v.name,
				languageCode: v.lang,
				pitch: 1,
				rate: 1,
			})
		)
		
	}
	
	getVoicesByLanguageCode(languageCode){
		return this.getVoices().filter(
			v => v.languageCode.includes(languageCode),
		)
	}
	
})()