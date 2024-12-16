export function applyAttributesToElement(
	guiComponent,
	htmlElement,
){
	
	const { style } = htmlElement
	
	style.boxSizing = 'border-box'
	style.backgroundColor = guiComponent._backgroundColor
	style.borderRadius = `${guiComponent._cornerRadius}mm`
	
	if(guiComponent._showIf === false){
		style.visibility = `hidden`
	}
	
	style.paddingLeft   = `${guiComponent._paddingLeft  }mm`
	style.paddingRight  = `${guiComponent._paddingRight }mm`
	style.paddingTop    = `${guiComponent._paddingTop   }mm`
	style.paddingBottom = `${guiComponent._paddingBottom}mm`
	
	style.borderLeft   =
		`${guiComponent._borderLeft[0]  }mm ${guiComponent._borderLeft[1]  } solid`
	style.borderRight  =
		`${guiComponent._borderRight[0] }mm ${guiComponent._borderRight[1] } solid`
	style.borderTop    =
		`${guiComponent._borderTop[0]   }mm ${guiComponent._borderTop[1]   } solid`
	style.borderBottom =
		`${guiComponent._borderBottom[0]}mm ${guiComponent._borderBottom[1]} solid`
	
	htmlElement.style.color = guiComponent._font?._color || htmlElement.style.color
	htmlElement.style.fontWeight = guiComponent._font?._bold ? `bold` : `normal`
	htmlElement.style.fontStyle = guiComponent._font?._italic ? `italic` : `normal`
	htmlElement.style.fontSize = (
		guiComponent._font?._size != -1 ?
		`${guiComponent._font?._size}${guiComponent._font?._sizeUnit}` :
		`inherit`
	)
	
	htmlElement.style.textDecoration = (
		(guiComponent._font?._underline ? `underline ` : ``) +
		(guiComponent._font?._strikethrough ? `line-through ` : ``)
	)
	
}