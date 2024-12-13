const PaperGroup = (() => new (
	
	/**
	 * This paper figure represents a group of paper figures
	 * that can be used in a Paper component. The group can be
	 * given a width and a height (and its own coordinate system),
	 * and its children will then be drawn within that space.
	 */
	class PaperGroup extends PaperFigure {
		
		/**
		 * This method sets the width of the paper group
		 * 
		 * @param theWidth The width of the paper group
		 */
		width(theWidth: number) { return this };
		
		/**
		 * This method sets the height of the paper group.
		 * 
		 * @param theHeight The height of the paper group
		 */
		height(theHeight: number) { return this };
		
		/**
		 * This method sets the size of the coordinate system
		 * the paper group uses to position its children within
		 * it.
		 * 
		 * @param width The width of the coordinate system
		 * @param height The height of the coordinate system
		 */
		coordinateSystem(width: number, height: number) { return this };
		
		/**
		 * This method sets the center position of the paper group.
		 * 
		 * @param x The X-coordinate of the center position
		 * @param y The Y-coordinate of the center position
		 */
		center(x: number, y: number) { return this };
		
		/**
		 * This method instructs the paper group to show its
		 * coordinate system when its drawn on the screen.
		 */
		showCoordinates() { return this };
		
		/**
		 * This method sets the paper figures the paper group
		 * should have. You can pass it as many/few children
		 * you want, just separate them by comma.
		 */
		children(theChildren: PaperFigure){ return this; };
		
		/**
		 * This method indicates which method that should be called when the
		 * user clicks on the paper figure. Your method will be passed:
		 * 
		 * - The X-coordinate of the click
		 * - The Y-coordinate of the click
		 * 
		 * You can also pass it additional arguments to this method,
		 * and these will be passed to your `onClickMethod()` after
		 * the X- and Y-coordinates when the figure is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * figure is clicked
		 * @param onClickArguments The optional arguments
		 */
			onClick(onClickMethod: (x: number, y: number) => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()