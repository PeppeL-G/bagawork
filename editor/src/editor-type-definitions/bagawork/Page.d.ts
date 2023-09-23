/**
 * Your app will consist of multiple pages, and one page at a time
 * will be shown to the user. For each page you want to have, you
 * should create your own class that extends this class, and in
 * which you override some methods to give your own page the specific
 * functionality you want it to have.
 * 
 * You can use the special **p** variable (short for **p**age) to
 * refer to the instance of your class.
 */
declare class Page {
	
	/**
	 * This method is called when the user navigates to this page.
	 * In this method you can initialize the page's internal state.
	 */
	onBefore(): void
	
	/**
	 * This method is called after onBefore() has been called. In
	 * this method you must create and send back the root GUI
	 * component of the page's GUI.
	 */
	createGui(): Component;
	
	/**
	 * This method is called when the user has been on this page,
	 * and is now taken to next page.
	 */
	onAfter(): void;
	
}