export function applyAttributesToElement(
	guiComponent,
	htmlElement,
){
	
	const { style } = htmlElement
	
	style.boxSizing = 'border-box'
	style.backgroundColor = guiComponent._backgroundColor
	style.borderRadius = guiComponent._cornerRadius
	
	if(guiComponent._showIf === false){
		style.visibility = `hidden`
	}
	
	style.paddingLeft   = guiComponent._paddingLeft
	style.paddingRight  = guiComponent._paddingRight
	style.paddingTop    = guiComponent._paddingTop
	style.paddingBottom = guiComponent._paddingBottom
	
	style.borderLeft   = guiComponent._borderLeft
	style.borderRight  = guiComponent._borderRight
	style.borderTop    = guiComponent._borderTop
	style.borderBottom = guiComponent._borderBottom
	
	htmlElement.style.color = guiComponent._font?._color || htmlElement.style.color
	htmlElement.style.fontWeight = guiComponent._font?._bold ? `bold` : `normal`
	htmlElement.style.fontStyle = guiComponent._font?._italic ? `italic` : `normal`
	htmlElement.style.fontSize = guiComponent._font?._size ?? `inherit`
	
	htmlElement.style.textDecoration = (
		(guiComponent._font?._underline ? `underline ` : ``) +
		(guiComponent._font?._strikethrough ? `line-through ` : ``)
	)
	
}