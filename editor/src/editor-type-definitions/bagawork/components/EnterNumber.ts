const EnterNumber = (() => new (
	
	/**
	 * This GUI component is a view that displays a text field into which
	 * the user can enter some text.
	 */
	class EnterNumber extends Component{
		
		/**
		 * This methods sets the number that is initially written in the component.
		 * 
		 * @param theNumber The number to be in the component
		 */
		number(theNumber: number){ return this };
		
		/**
		 * This methods sets the placeholder text that is shown in the component
		 * when it's empty.
		 * 
		 * @param theText The placeholder text
		 */
		placeholder(theText: string) { return this };
		
		/**
		 * This method indicates which page the user should come to when the
		 * app progresses to next page if no pageIfEqual(), pageIfLower()
		 * pageIfHigher() and pageIfBetween() calls match the entered number.
		 * 
		 * @param thePage The page the user should come to
		 */
		page(thePage: Page){ return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a specific number.
		 * 
		 * @param theNumber The number the user should enter...
		 * @param thePage ...to come to this page
		 */
		pageIfEqual(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number lower than the provided one.
		 * 
		 * @param theNumber The number the user must enter a lower one than...
		 * @param thePage ...to come to this page
		 */
		pageIfLower(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number higher than the provided one.
		 * 
		 * @param theNumber The number the user must enter a higher one than...
		 * @param thePage ...to come to this page
		 */
		pageIfHigher(theNumber: number, thePage: Page) { return this };
		
		/**
		 * This method indicates which page the user should come to if she has
		 * entered a number between the two provided ones.
		 * 
		 * @param lowNumber The number the user must enter a bigger one than...
		 * @param highNumber ...and the number the user must enter a lower one than...
		 * @param thePage ...to come to this page
		 */
		pageIfBetween(lowNumber: number, highNumber: number, thePage: Page) {
			return this
		};
		
		/**
		 * This method indicates which object (e.g. `a` or `p`) to store the
		 * entered number in, and which name to use.
		 * 
		 * @param theObject The object to store the entered number in
		 * @param theName The name the value should have in that object
		 */
		store(theObject: Object, theName: string) { return this };
		
		/**
		 * This methods indicates which number that should be used if the
		 * user doesn't enter a number in the component at all.
		 * 
		 * @param theNumber The number to be used if no number is entered
		 */
		defaultNumber(theNumber: number) { return this };
		
		/**
		 * This method indicates a function/method to call with the entered
		 * number when the user goes to next page.
		 * 
		 * @param theHandler The function/method to be called with the entered text
		 */
		handler(theHandler: (enteredNumber: string) => void){ return this };
		
	}
	
))()