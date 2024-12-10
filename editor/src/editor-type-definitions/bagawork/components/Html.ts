const Html = (() => new (
	
	/**
	 * This GUI component is a view that shows whichever HTML elements
	 * you want.
	 */
	class Html extends Component{
		
		/**
		 * This method sets the component's HTML initializer.
		 * The initializer is a function that will be called
		 * when the HTML component is shown on the screen,
		 * and it receives the HTML element shows as the
		 * HTML component as an argument, and you can do
		 * whatever you want with it to make it show whatever
		 * you want it to show
		 * 
		 * @param theInitializer The method to be called to initialize the HTML element shown as the HTML component
		 */
		initializer(theInitializer: (HTMLElement) => void){ return this };
		
	}
	
))()