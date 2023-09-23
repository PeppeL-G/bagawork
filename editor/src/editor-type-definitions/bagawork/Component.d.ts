/**
 * This class represents a GUI component that can be used to
 * build the GUI shown to the user. Use sub-classes to this class.
 */
declare interface Component {

	/**
	 * This method is only useful to call when the component is used as a
	 * direct child in a Rows/Columns layout. It sets the amount of shares
	 * of the remaining available space this child component should be
	 * assigned by the Rows/Columns layout.
	 * 
	 * @param numberOfShares The number of shares of the remaining
	 * available space this child component should occupy
	 */
	size(numberOfShares: number): Component;
	
	/**
	 * This method sets the background color the GUI component will have.
	 * 
	 * @param colorName The name of the color in English, such as `red`
	 */
	backgroundColor(colorName: string): Component;
	
}