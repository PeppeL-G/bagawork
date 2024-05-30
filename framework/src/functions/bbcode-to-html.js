export function bbcodeToHtml(textWithBBCode){
	
	let text = escapeHTML(textWithBBCode)

	text = text.replaceAll(/\[b\](.+?)\[\/b\]/g, `<b>$1</b>`)
	text = text.replaceAll(/\[i\](.+?)\[\/i\]/g, `<i>$1</i>`)
	text = text.replaceAll(/\[u\](.+?)\[\/u\]/g, `<u>$1</u>`)
	text = text.replaceAll(/\[s\](.+?)\[\/s\]/g, `<s>$1</s>`)
	text = text.replaceAll(
		/\[url\](http.+?)\[\/url\]/g,
		`<a href="$1" target="_blank">$1</a>`,
	)
	text = text.replaceAll(
		/\[url=(http.+?)\](.+?)\[\/url\]/g,
		`<a href="$1" target="_blank">$2</a>`,
	)
	
	while (/\[size=([0-9]+)\](.*?)\[\/size\]/.test(text)){
		text = text.replaceAll(
			/\[size=([0-9]+)\](.*?)\[\/size\]/g,
			`<span style="font-size: $1mm">$2</span>`,
		)
	}
	
	while (/\[color=(.*?)\](.+?)\[\/color\]/.test(text)){
		text = text.replaceAll(
			/\[color=(.*?)\](.+?)\[\/color\]/g,
			`<span style="color: $1">$2</span>`,
		)
	}
	
	return text
	
}

function escapeHTML(text){
	
	text = text.replaceAll(`&`, `&amp;`)
	text = text.replaceAll(`<`, `&lt;`)
	text = text.replaceAll(`>`, `&gt;`)
	text = text.replaceAll(`"`, `&quot;`)
	text = text.replaceAll(`'`, `&apos;`)
	
	return text
	
}