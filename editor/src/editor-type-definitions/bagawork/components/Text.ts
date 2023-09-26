const Text = (() => new (
	
	/**
	 * This GUI component is a view that displays text on the screen.
	 */
	class Text extends Component {
		
		/**
		 * Sets the text the component should show on the screen.
		 * @param theText The text that should be shown
		 */
		text(theText: string){ return this };
		
		// Override methods defined in Component, and give them correct return
		// value.
		size(numberOfShares: number){ return this };
		backgroundColor(colorName: string){ return this };
	
	}
))()