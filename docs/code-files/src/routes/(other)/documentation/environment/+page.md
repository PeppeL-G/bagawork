# Environment
On this page you find the documentation for the environment your Bagawork app will run in.




## What is it?
When your Bagawork app runs, it will run in an environment that contains some predefined global variables your app can use. This page explains which those are.




## The `a` variable
The `a` variable, short for ***a*pplication**, will store the instance of your own `App` class. Though it, you can:

* Call the methods you have in your `App` class, e.g. `a.myMethodName()`
* Remember information for as long as the app runs: `a.someName = 123`
* Read out stored information: `a.someName`




## The `p` variable
The `p` variable, short for ***p*age**, will store the instance of the current `Page` class shown on the screen. It can be used for the same things as your own `App` class, but it only lives as long as that page is shown on the screen. When the user clicks on a button and go to another page, the `p` variable will store a reference to an instance of the new page, and the instance of the old page will be lost. So information stored in `p` will be lost as soon as the user goes to another page.




## The framework classes and GUI components
The environment also contains global variables for the Bagatell framework general classes (`App`, `Page`, etc.) as well for the GUI components (`Text`, `Button`, `Columns`, etc.), so you can use these by just writing their names.