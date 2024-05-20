const Layers = (() => new (
	
	/**
	 * This GUI component is a layout that displays its children as as layers.
	 * The first child is at the bottom (behind the others), and then the
	 * second child is drawn on top (in front) of that one, and so one.
	 * All children cover the same space as the Layers component itself.
	 */
	class Layers extends Component {
		
		/**
		 * This method sets the child components the Layers layout should have. You
		 * can pass it as many/few children you want, just separate them by comma.
		 */
		children(theChildren: Component){ return this };
		
	}
	
))()