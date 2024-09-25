const Button = (() => new (
	
	/**
	 * This GUI component is a view that displays a button with some text.
	 */
	class Button extends Component{
		
		/**
		 * This methods sets the text shown in the button.
		 * @param theText The text to be shown in the button
		 */
		text(theText: string) { return this };
		
		/**
		 * Sets the text the component should show on the screen in which
		 * BBCode can be used to format the text.
		 * @param theText The text that should be shown
		 */
		textWithBBCode(theText: string) { return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * button is clicked.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which method that should be called when the
		 * user clicks the `Button`. You can also pass it additional arguments,
		 * and these will be passed to your `onClickMethod()` when the `Button`
		 * is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * button is clicked
		 * @param onClickArguments The optional arguments
		 */
		onClick(onClickMethod: () => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()