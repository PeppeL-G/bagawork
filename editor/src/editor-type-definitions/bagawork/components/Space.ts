const Space = (() => new (
	
	/**
	 * This GUI component is a layout that primarily is used to occupy space,
	 * so other children in a Rows/Columns layout are positioned correct.
	 * 
	 * It can have one optional child, and the child will occupy the same
	 * amount of space as the Space layout itself.
	 */
	class Space extends Component {
		
		/**
		 * This method sets the child component the Space layout should have. You
		 * can pass it only a single child.
		 */
		child(theChild: Component){ return this; };
		
		// Override methods defined in Component, and give them correct return value.
		size(numberOfShares: number){ return this; };
		backgroundColor(colorName: string){ return this; };
		
	}
)) ()