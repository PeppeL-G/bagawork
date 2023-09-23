/**
 * This GUI component is a layout that primarily is used to occupy space,
 * so other children in a Rows/Columns layout are positioned correct.
 * 
 * It can have one optional child, and the child will occupy the same
 * amount of space as the Space layout itself.
 */
declare interface Space extends Component {
	
	/**
	 * This method sets the child component the Space layout should have. You
	 * can pass only pass it a single child.
	 */
	child(theChild: Component): Space;
	
	// Override methods defined in Component, and give them correct return value.
	size(numberOfShares: number): Space;
	backgroundColor(colorName: string): Space;
	
}

declare const Space: Space;