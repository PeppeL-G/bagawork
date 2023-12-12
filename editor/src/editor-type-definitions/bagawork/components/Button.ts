const Button = (() => new (
	
	/**
	 * This GUI component is a view that displays a button with some text.
	 */
	class Button extends Component{
		
		/**
		 * This methods sets the text shown in the button.
		 * @param theText The text to be shown in the button
		 */
		text(theText: string){ return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * button is clicked.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which function/method to call when the user
		 * clicks on the button (which function/method that should *handle*
		 * the click).
		 * 
		 * @param theClickHandler The function/method to be called when the
		 * button is clicked
		 */
		handler(clickHandler: () => void){ return this };
		
	}
	
))()