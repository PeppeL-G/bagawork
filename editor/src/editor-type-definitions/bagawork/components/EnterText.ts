const EnterText = (() => new (
	
	/**
	 * This GUI component is a view that displays a text field into which
	 * the user can enter some text.
	 */
	class EnterText extends Component{
		
		/**
		 * This methods sets the text that is initially written in the component.
		 * @param theText The text to be in the component
		 */
		text(theText: string){ return this };
		
		/**
		 * This methods sets the placeholder text that is shown in the component
		 * when it's empty.
		 * @param theText The placeholder text
		 */
		placeholder(theText: string) { return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * app progresses to next page if no text passed to pageIf()
		 * matches.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered some specific text.
		 * 
		 * @param theText The text the user should have entered...
		 * @param thePage ...to come to this page
		 */
		pageIfEqual(theText: string, thePage: Page) { return this };
		
		/**
		 * This method indicates which object (e.g. `a` or `p`) to store the
		 * entered text in, and which name to use.
		 * 
		 * @param theObject The object to stores the text in
		 * @param theName The name the value should have in that object
		 */
		store(theObject: Object, theName: string) { return this };
		
		/**
		 * This method indicates a function/method to call with the entered text when the user goes to next page.
		 * 
		 * @param theHandler The function/method to be called with the entered text
		 */
		handler(theHandler: (enteredText: string) => void){ return this };
		
	}
	
))()