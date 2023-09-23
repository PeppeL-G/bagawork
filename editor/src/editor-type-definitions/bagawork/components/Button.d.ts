/**
 * This GUI component is a view that displays a button with some text.
 */
declare interface Button extends Component {
	
	/**
	 * This method sets the text shown in the button.
	 */
	text(theText: string): Button;
	
	/**
	 * This method indicates which page the user should come to when the
	 * button is clicked.
	 * 
	 * @param thePage The page the user should come to
	 */
	page(thePage: Page): Button;
	
	/**
	 * This method indicates which function/method to call when the user
	 * clicks on the button (which function/method that should *handle*
	 * the click).
	 * 
	 * @param theClickHandler The function/method to be called when the
	 * button is clicked
	 */
	onClick(clickHandler: () => void): Button;
	
	// Override methods defined in Component, and give them correct return value.
	size(numberOfShares: number): Button;
	backgroundColor(colorName: string): Button;
	
}

declare const Button: Button;