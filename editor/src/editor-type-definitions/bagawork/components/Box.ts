const Box = (() => new (
	
	/**
	 * This GUI component is a layout that can contain a single child.
	 * That child can be given a height and width in different ways,
	 * and it can be positioned at different places in the layout.
	 */
	class Box extends Component {
		
		/**
		 * This method sets the aspect ratio of the child. Pass it the
		 * aspect ratio as two numbers.
		 * 
		 * @param theWidth The width of the aspect ratio
		 * @param theHeight The height of the aspect ratio
		 */
		aspectRatio(theWidth: number, theHeight: number) { return this };
		
		/**
		 * If the height of the child is smaller than the Box, the child
		 * will be centered vertically in the Box by default. Call this
		 * method to instead place the child at the bottom of the Box.
		 */
		bottom(){ return this }
		
		/**
		 * This method sets the child component the Box layout should have.
		 * The Box can be used without a child too, so you don't have to call
		 * this method.
		 */
		child(theChild: Component){ return this };
		
		/**
		 * This method sets the height the child should have in millimeters.
		 * 
		 * @param theHeight The width the child should have in millimeters
		 */
		height(theHeight: number) { return this };
		
		/**
		 * If the width of the child is smaller than the Box, the child
		 * will be centered horizontally in the Box by default. Call this
		 * method to instead place the child to the left in the Box.
		 */
		left() { return this }
		
		/**
		 * If the width of the child is smaller than the Box, the child
		 * will be centered horizontally in the Box by default. Call this
		 * method to instead place the child to the right in the Box.
		 */
		right() { return this }
		
		/**
		 * If the height of the child is smaller than the Box, the child
		 * will be centered vertically in the Box by default. Call this
		 * method to instead place the child at the top of the Box.
		 */
		top() { return this }
		
		/**
		 * This method sets the width the child should have in millimeters.
		 * 
		 * @param theWidth The width the child should have in millimeters
		 */
		width(theWidth: number){ return this };
		
	}
	
))()