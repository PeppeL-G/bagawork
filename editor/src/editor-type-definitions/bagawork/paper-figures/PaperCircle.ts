const PaperCircle = (() => new (
	
	/**
	 * This paper figure represents a circle in a Paper component.
	 */
	class PaperCircle extends PaperFigure {
		
		/**
		 * This method sets the radius of the circle.
		 * 
		 * @param theRadius The radius of the circle
		 */
		radius(theRadius: number) { return this };
		
		/**
		 * This method sets the center position of the circle.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
	}
	
))()