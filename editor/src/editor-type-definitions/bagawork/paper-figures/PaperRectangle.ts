const PaperRectangle = (() => new (
	
	/**
	 * This paper figure represents a rectangle in a Paper component.
	 */
	class PaperRectangle extends PaperFigure {
		
		/**
		 * This method sets the width of the rectangle.
		 * 
		 * @param theWidth The width of the rectangle
		 */
		width(theWidth: number) { return this };
		
		/**
		 * This method sets the height of the rectangle.
		 * 
		 * @param theHeight The height of the rectangle
		 */
		height(theHeight: number) { return this };
		
		/**
		 * This method sets the center position of the rectangle.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
	}
	
))()