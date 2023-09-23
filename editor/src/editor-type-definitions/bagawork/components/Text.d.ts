/**
 * This GUI component is a view that displays text on the screen.
 */
declare interface Text extends Component {
	
	/**
	 * Sets the text the component should show on the screen.
	 */
	text(theText: string): Text;
	
	// Override methods defined in Component, and give them correct return value.
	size(numberOfShares: number): Text;
	backgroundColor(colorName: string): Text;
	
}

declare const Text: Text;