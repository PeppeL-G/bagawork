/**
 * This class represents a figure that can be drawn in a
 * Paper component.
 */
abstract class PaperFigure{
	
	/**
	 * This method sets the background color the figure will have.
	 * 
	 * @param colorName The name of the color in English, such as `red`
	 */
	backgroundColor(colorName: string){ return this };
	
	/**
	 * This method indicates which method that should be called when the
	 * user clicks on the figure. You can also pass it additional arguments,
	 * and these will be passed to your `onClickMethod()` when the figure
	 * is clicked.
	 * 
	 * @param onClickMethod The method to be called when the
	 * figure is clicked
	 * @param onClickArguments The optional arguments
	 */
		onClick(onClickMethod: () => void, ...onClickArguments: any[]){ return this };
	
}