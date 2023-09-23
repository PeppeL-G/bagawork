/**
 * This GUI component is a layout that displays it's children as rows.
 * The children can call the configuration method *.size()* to configure
 * how much space they should occupy.
 */
declare interface Rows extends Component {
	
	/**
	 * This method sets the child components the Rows layout should have. You
	 * can pass it as many/few children you want, just separate them by comma.
	 */
	children(theChildren: Component): Rows;
	
	// Override methods defined in Component, and give them correct return value.
	size(numberOfShares: number): Rows;
	backgroundColor(colorName: string): Rows;
	
}

declare const Rows: Rows;