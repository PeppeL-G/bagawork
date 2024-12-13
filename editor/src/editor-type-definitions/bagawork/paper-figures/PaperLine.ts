const PaperLine = (() => new (
	
	/**
	 * This paper figure represents a line in a Paper component.
	 */
	class PaperLine extends PaperFigure {
		
		/**
		 * This method sets the thickness of the line.
		 * 
		 * @param theThickness The thickness of the line
		 */
		thickness(theThickness: number) { return this };
		
		/**
		 * This method sets the start position of the line.
		 * 
		 * @param x The X-coordinate of the start position
		 * @param y The Y-coordinate of the start position
		 */
		start(x: number, y: number) { return this };
		
		/**
		 * This method sets the end position of the line.
		 * 
		 * @param x The X-coordinate of the end position
		 * @param y The Y-coordinate of the end position
		 */
		end(x: number, y: number) { return this };
		
	}
	
))()