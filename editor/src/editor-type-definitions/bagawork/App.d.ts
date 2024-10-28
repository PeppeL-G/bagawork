/**
 * This class represents global information about your
 * application (information that outlives individual pages).
 * You should create your own class that extends this class,
 * and in which you override some methods to give your own app
 * class the specific behavior you want it to have.
 * 
 * You can use the special **a** variable (short for **a**pp) to
 * refer to the instance of your class.
 */
declare class App {
	
	/**
	 * This method is called directly when your app starts. In this
	 * method you can initialize your app's global state.
	 */
	onBefore(): void;
	
	/**
	 * This method is called directly when your app starts. In this
	 * method you can create and return a Paper component that will
	 * be used as the icon of your app. If your app is installed on
	 * a smartphone, it will for example be used as the icon the
	 * user should click on to start your app.
	 */
	createIcon(): Paper
	
	/**
	 * This method will be called after onBefore() has been called.
	 * In this method, you should send back the first page that should
	 * be shown to the user.
	 */
	createStartPage(): Page;
	
	/**
	 * If your app crashes when your user runs it, then an error message
	 * will be shown to the user, explaining that the app has crashed.
	 * The user will also be given the option to continue running the app
	 * by loading another page. If the user wants to do that, then this
	 * method will be called, and the page you return here is the page that
	 * will be shown to the user.
	 * 
	 * If you don't implement this method, then the page returned from
	 * createStartPage() will be used as the error recovering page.
	 */
	createErrorRecoveringPage(): Page;
	
}