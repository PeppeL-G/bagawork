# Motivation
> *Programming is one of the most difficult branches of applied mathematics; the poorer mathematicians had better remain pure mathematicians.*
>
> -- [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra) (famous professor in mathematics, and computer scientist), [source](https://www.brainyquote.com/quotes/edsger_dijkstra_204342)

## Short version
Learning programming is hard. BagaWork tries to make it easier and more fun to learn programming, so we will get more and better programmers out there in the world.

## Long version
When teaching programming to beginners, there are kind of two different approaches one can take. *Teaching Approach 1* is:

> Start teaching the basics (numbers, strings, variables, arrays, conditional statements, loops, etc.), and then introduce higher level stuff, such as implementing graphical user interfaces (GUIs).

This approach is very pedagogical, and introduces things in a very logical and suitable order. However, there exists one big downside with this approach: many students find the basics of programming very boring and hard to learn (much abstract thinking is needed), so they lose motivation to learn programming, they never get any good at programming, and they might even entirely give up on learning programming. That's no good!

*Teaching Approach 2* is kind of the opposite:

> Start teaching high level stuff, such as implementing GUIs, and then introduce the basics along the way.

This approach can give students an easier and more fun start, and keep them motivated to learn more. For example, initially a students might get the exercise to first design a GUI using pen and paper (which involves no programming at all), and then implement it with code in a programming language and a GUI framework (which involves very little programming). And GUIs are not something abstract; students can easily see the result visually on their screens!

However, the downside with Teaching Approach 2 is that students do not learn much programming at all in the beginning. Instead, they mostly only learn how to use a specific GUI framework, which usually isn't very valuable for them to know in the long run. But if they later can use this knowledge to learn the basics in programming in an easier and more fun way, it can definitely be a valid approach for teaching and learning programming.

Unfortunately, most GUI frameworks are not primarily designed to be easy to use, but to run fast on computers. To run fast on computers is of course very desirable for professional apps, but it does make the frameworks harder to use than they need to be, and is therefor a big drawback with Teaching Approach 2. Not only because the frameworks are harder to learn for the students, but also because they are harder for teachers to teach; in elementary schools, the teachers themselves are rarely any programming experts, so having a simple framework is very valuable.

Most professional GUI frameworks are also very big, so it's hard to learn and know all there is to know about them. So, as a teacher it can be hard to help a student who suddenly has started to use a part of the framework the teacher has never heard of before. And how can the teacher in a good way inform the students about which parts of the framework they are allowed to use/can get help with? It's simply problematic. In addition to that, many of these frameworks are also poorly documented, or has a documentation written in a way that's very hard for beginners to understand.

It would simply be good to have a way of creating apps that has been designed to be as easy to use as possible, both for students and teachers. *BagaWork* is such a framework/platform. And even though it hasn't been designed for good performance, many fun, cool and useful apps implemented in it will still run fine one ordinary smartphones (but perhaps drain the battery a bit more than necessary 😅).

Here is a short list of what the primary focus has been when designing BagaWork, and how it has been realized:

1. Making it easy to get started:
	* Just visit our :online-editor in a web browser (on a laptop/computer)
	* Our online editor is already populated with a small app showing the basics
2. Making it easy to learn:
	* The framework is built on an architecture that is easy to understand:
		* One `App` class and multiple `Page` classes
		* One page at a time is shown on the screen
		* The GUI on the user's screen is changed by going to next page
	* The editor shows previews of the pages and navigation between them, so no/little abstract thinking is required (one can visually see the result of the code)
	* The classes in the framework:
		* Are easy to use:
			* No need to use the `new` keyword
			* Not much syntax needs to be learned thanks to [method chaining](https://en.wikipedia.org/wiki/Method_chaining)
		* Have good descriptive names, so it is easy to remember what they represent
		* Have good documentation:
			* Written in a way that's easy to understand for beginners
			* Have many examples, and these are also editable by the students, making it very easy to test how things work
	* Our [Tutorials](/tutorials):
		* Introduce one new programming thing at a time, and in such a way that it can always be used in the students own apps (their "toolbox" simply keeps growing bigger and bigger for each tutorial they complete, and they can implement more and more fun and complex apps)
		* Contain many examples, and these are also editable by the students, making it very easy to test how things work
3. Making it easy to teach:
	* The framework is small, so not much to teach (for a GUI framework)
	* The code editor supports type hinting, so when showing something in the editor, the teacher doesn't need to remember how to spell names 100% correct, and it also shows documentation, so one can quickly look up things one has forgotten
4. Making it easy to get help:
	* If a page contains an error, the other pages in the editor are still previewable, making it obvious which page the error is in, which makes debugging and fixing the code much easier for both students and teachers
	* When students need help, they can easily share their code with others by copy-pasting links containing the code
5. Making it easy to keep wanting to learn more:
	* Apps can easily be distributed using links and run in the web browser
	* Apps can quite easily be hosted on [bagaland.com](https://bagaland.com) (creating an account is needed), where they can run in a web browser or be installed on Android/iOS devices as progressive web apps
	* Apps can be hosted on any website (it's as hard as hosting your own website, and not recommended for beginners, but still possible)
