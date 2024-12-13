const Paper = (() => new (
	
	/**
	 * This GUI component is a layout that occupy space you can
	 * use to draw different paper figures on.
	 * 
	 * NOTE: You can't pass ordinary GUI components to this layout,
	 * you can only pass it paper figures (like PaperLine,
	 * PaperCircle, etc.).
	 */
	class Paper extends Component{
		
		/**
		 * This method sets the size of the coordinate system
		 * the paper component uses to position its children
		 * within it.
		 * 
		 * @param width The width of the coordinate system
		 * @param height The height of the coordinate system
		 */
		coordinateSystem(width: number, height: number) { return this };
		
		/**
		 * This method instructs the paper component to show its
		 * coordinate system when its drawn on the screen.
		 */
		showCoordinates() { return this };
		
		/**
		 * This method sets the paper figures the paper component
		 * should have. You can pass it as many/few children
		 * you want, just separate them by comma.
		 */
		children(theChildren: PaperFigure){ return this; };
		
		/**
		 * This method indicates which method that should be called when the
		 * user clicks on the paper component. Your method will be passed:
		 * 
		 * - The X-coordinate of the click
		 * - The Y-coordinate of the click
		 * 
		 * You can also pass it additional arguments to this method,
		 * and these will be passed to your `onClickMethod()` after
		 * the X- and Y-coordinates when the paper is clicked.
		 * 
		 * @param onClickMethod The method to be called when the
		 * paper is clicked
		 * @param onClickArguments The optional arguments
		 */
		onClick(onClickMethod: (x: number, y: number) => void, ...onClickArguments: any[]){ return this };
		
	}
	
))()