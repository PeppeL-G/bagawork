/**
 * This class represents a font that contains information about how text
 * in GUI components should be formatted. Pass your font to a GUI component
 * by calling its configuration method `font()`.
 */
const Font = (() => new (
	
	/**
	 * This class represents a font that contains information about how text
	 * in GUI components should be formatted. Pass your font to a GUI component
	 * by calling its configuration method `font()`.
	 */
	class Font{
		
		/**
		 * This methods makes the text show as bold.
		 */
		bold(){ return this };
		
		/**
		 * This method sets the color the text should have.
		 * 
		 * @param colorName The name of the color in English, such as `red`
		 */
		color(colorName: string){ return this };
		
		/**
		 * This methods makes the text show as italic.
		 */
		italic(){ return this };
		
		/**
		 * This method sets the size the text should have (how tall it should be).
		 * 
		 * @param sizeInMm The size of the text in millimeters
		 */
		size(sizeInMm: number) { return this };
		
		/**
		 * This methods makes the text show as underlined.
		 */
		underline() { return this };
		
	}
	
))()