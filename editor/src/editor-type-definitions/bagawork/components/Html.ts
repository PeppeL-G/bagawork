const Html = (() => new (
	
	/**
	 * This GUI component is a view that shows whichever HTML elements
	 * you want.
	 */
	class Html extends Component{
		
		/**
		 * This method sets the component's HTML creator method.
		 * That method will be called when this component should
		 * be shown on the screen, and in it you should create
		 * and send back the HTML element to be shown (which can
		 * contain other HTML elements, etc.).
		 * 
		 * @param theElementCreator The method to be called to create the HTML element to be shown in this component
		 */
		elementCreator(theElementCreator: () => HTMLElement){ return this };
		
	}
	
))()