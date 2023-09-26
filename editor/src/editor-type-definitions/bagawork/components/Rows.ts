const Rows = (() => new (
	
	/**
	 * This GUI component is a layout that displays it's children as rows.
	 * The children can call the configuration method *.size()* to configure
	 * how much space they should occupy.
	 */
	class Rows extends Component {
		
		/**
		 * This method sets the child components the Rows layout should have. You
		 * can pass it as many/few children you want, just separate them by comma.
		 */
		children(theChildren: Component){ return this };
		
		// Override methods defined in Component, and give them correct return value.
		size(numberOfShares: number){ return this; };
		backgroundColor(colorName: string){ return this; };
	
	}
)) ()