/**
 * This GUI component is a layout that displays it's children as columns.
 * The children can call the configuration method *.size()* to configure
 * how much space they should occupy.
 */
declare interface Columns extends Component {
	
	/**
	 * This method sets the child components the Rows layout should have. You
	 * can pass it as many/few children you want, just separate them by comma.
	 */
	children(theChildren: Component): Columns;
	
	// Override methods defined in Component, and give them correct return value.
	size(numberOfShares: number): Columns;
	backgroundColor(colorName: string): Columns;
	
}

declare const Columns: Columns;