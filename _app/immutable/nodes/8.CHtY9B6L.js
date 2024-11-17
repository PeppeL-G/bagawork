import{s as ka,n as da}from"../chunks/scheduler.B0TnBjPs.js";import{S as ha,i as ma,e as s,s as c,H as d,c as Ne,a as p,g as o,b as i,d as r,n as h,h as n,f as Ke,o as l,j as a,p as u,m as Ze,t as Ye,k as Fe,l as Xe}from"../chunks/index.Cnh3HYw3.js";import{V as Je}from"../chunks/ViewApp.BajIxHdc.js";function va(Qe){let x,Dn="<code>App</code>",Vt,I,Vn="On this page you find the documentation for the <code>App</code> class.",Bt,A,Bn="Introduction",Ot,R,On="The <code>App</code> class represents your entire app. It is mainly used to:",Ut,j,Un="<li>Create the first page shown to the user</li> <li>Keep track of the app&#39;s global state through the app&#39;s instance variables (known as <em>app variables</em>)</li>",qt,S,qn="You should create your own class inheriting from <code>App</code> and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.",Gt,y,D,Gn="Example",rt,Wn="Example of the basic code for creating your own <code>App</code> class.",kt,Wt,$e=`<code class="language-js"><span class="token comment">// Name your own app whatever you want (in this example MyApp).</span>
<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give your own app</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,zt,P,zn='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can click on a page, and then click on the <code>MyApp</code> tab to view and edit the code for your <code>App</code> class.</p>',Nt,V,Nn="The <code>a</code> variable",Kt,B,Kn="In BagaWork, you can use the special variable named <code>a</code>, short for <em>app</em>, to access the constants/variables/methods you have in your <code>App</code> class. The <code>a</code> variable can be used both in your <code>App</code> class and in your <code>Page</code> classes.",Zt,g,O,Zn="Example",dt,Yn="Example of an app with:",ht,Fn="<li>An app constant</li> <li>An app variable</li> <li>An app method</li> ",mt,Yt,ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token string">"The constant value"</span>
	
	theVariableNAME <span class="token operator">=</span> <span class="token string">"The variable value"</span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use a.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use a.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use a.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,U,Xn="<code>onBefore()</code> - Initializing the state of the app",Xt,q,Jn="The method <code>onBefore()</code> will be called directly when the app starts. In it, you can initialize the state of your app.",Jt,_,G,Qn="Example",vt,$n="Example of an app that uses <code>onBefore()</code>.",ft,Qt,na=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">TERM_1</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">TERM_2</span> <span class="token operator">=</span> <span class="token number">4</span>
	
	<span class="token comment">// We want the sum variable to contain the sum of</span>
	<span class="token comment">// TERM_1 and TERM_2. However, the "a" variable can</span>
	<span class="token comment">// only be used in methods in the App class, so we</span>
	<span class="token comment">// can't write sum = a.TERM_1 + a.TERM_2 here. So</span>
	<span class="token comment">// instead, we initialize the sum to a dummy value</span>
	<span class="token comment">// (0 in this case)...</span>
	sum <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// ...and in this method we assign</span>
		<span class="token comment">// the sum its correct value.</span>
		a<span class="token punctuation">.</span>sum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">TERM_1</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">TERM_2</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$t,b,te='<div class="remark-container__title">Not needed?</div><p>You only need to initialize the global state if your app needs one. Some simple apps don&#39;t need one, and can simply leave <code>onBefore()</code> empty, or not have this method at all.</p>',tn,W,ne="<code>createIcon()</code> - Creating an icon",nn,z,ee='The method <code>createIcon()</code> will be called directly when the app starts. In it, you can create and return a <a href="/documentation/paper/" title="Open the documentation for Paper.">Paper</a> component that will be used as the icon of your app. The icon of your app will not be shown in your app&#39;s GUI, but at other places, such as:',en,N,ae="<li>When your app runs in a tab in web browser, the app icon will be shown as the icon of the tab</li> <li>When your app is installed on a smartphone, the app icon will be shown as the icon the user should click on to start your app</li>",an,K,se="The icon will always have a squared size (width=height).",sn,E,pe='<div class="remark-container__title">Previewing in the online editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can preview the app icon by clicking on a page, and then look in the <code>Icon</code> tab.</p>',pn,m,Z,oe="Example",gt,le="Example of how <code>createIcon()</code> can be implemented.",C,ce="Open in Online Editor",wt,on,ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xt,ln,aa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In the code editor, click on the "Icon" tab, and you will see the created icon!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,cn,L,ie='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createIcon()</code> if you want your app to have its own icon. If you don&#39;t implement, a default icon will be used instead.</p>',un,Y,ue="<code>createStartPage()</code> - Creating the start page",rn,F,re="After <code>onBefore()</code> has been called, <code>createStartPage()</code> will be called. In this method, you should create and send back an instance of the <code>Page</code> class that should first be shown to the user. You must implement this method, otherwise your app won&#39;t know which <code>Page</code> to show when it starts, and the app will crash as soon as the user tries to start it.",kn,H,ke='<div class="remark-container__title">Note!</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, <code>createStartPage()</code> is never used. Each time you preview a page, the framework overrides your implementation of <code>createStartPage()</code> with its own implementation that returns the page you are previewing. So you have to try running the app for real to be sure that your implementation of <code>createStartPage()</code> works.</p>',dn,w,X,de="Example",yt,he="Example of an app specifying which <code>Page</code> to first show the user.",_t,hn,sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ct,mn,pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give this page</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,vn,J,me='See the documentation for the <a href="/documentation/page/" title="Open the documentation for Page.">Page</a> class to learn which methods you can override in your <code>Page</code> classes to make the page work the way you want.',fn,Q,ve="<code>createErrorRecoveringPage()</code> - Handling errors",gn,$,fe="When the user runs your app and an une expected error occurs in your code, your app will crash, and a GUI from the framework will be shown to the user with a message that explains why the app crashed, and what the user can do about it.",wn,tt,ge="One of the options presented to the user is to try running the app again. Most likely, the app will only crash when it tries to show/run the page that crashed, and hopefully the user will still be able to use the other pages in the app without problems until you have released a new version of the app that doesn't crash on that page anymore.",xn,nt,we="If the user choses the option to try running the app again, then <code>App.createStartPage()</code> will be called, and the page returned from that method will be shown to the user. If you instead want to show another page to the user, you can implement <code>App.createErrorRecoveringPage()</code>, and return the page you want to show to the user there.",yn,k,et,xe="Example",Mt,ye="Example of an app that doesn&#39;t use <code>createErrorRecoveringPage()</code>, and instead uses <code>createStartPage()</code> when the app crashes and the user wants to try running it again.",Tt,_e="Notice that when the counter gets to <code>3</code>, you can still restart the app and use the <code>ClockPage</code>, but going to the <code>CounterPage</code> again after that will always make the app crash.",at,M,Ce="Open in Online Editor",Pt,_n,oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,bt,Cn,la=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Thank you for using my app, I hope you enjoy using it!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Et,Mn,ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Menu</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Counter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CounterPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Clock</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ClockPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,Tn,ia=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// To try error handling, we will on purpose</span>
		<span class="token comment">// have code that crashes when counter is 3.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token function">log</span><span class="token punctuation">(</span>nonExistingVariable<span class="token punctuation">)</span> <span class="token comment">// Will crash, since that variable doesn't exist.</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Counter is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,Pn,ua=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ClockPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,bn,v,st,Me="Example",It,Te="This is the same app as above, but in it we have also specified that <code>createErrorRecoveringPage()</code> should return <code>MenuPage</code>, so the user comes to the <code>MenuPage</code> after the app has crashed, and doesn&#39;t need to view the <code>StartPage</code> again.",pt,T,Pe="Open in Online Editor",At,En,ra=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createErrorRecoveringPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ln,ot,be="<code>onUpdate()</code> - Updating the state of the app",Hn,lt,Ee="When the user starts running a new version of your app with a state from an older version of the app, <code>App.onUpdate()</code> will be called, in which you can handle the update. <code>onUpdate()</code> will be passed two values:",In,ct,Le="<li><code>oldA</code>, which contains the stored app variables</li> <li><code>oldVersion</code>, which contains the old version number of the app the user ran before</li>",An,it,He="The page shown to the user after the update is by default the same page the user was on before the update. If that page doesn&#39;t exist in the new version of the app, then the page returned by <code>App.createStartPage()</code> will be shown. If you don&#39;t want this default update behavior, you can return a page from <code>onUpdate()</code>, and that page will be shown to the user.",Rn,ut,Ie='For more information, see <a href="/documentation/state/" title="Open the documentation for State.">State</a>.',jn;return at=new Je({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Thank you for using my app, I hope you enjoy using it!\`),
			Button.text(\`Go!\`).page(MenuPage),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Counter\`).page(CounterPage),
			Button.text(\`Clock\`).page(ClockPage),
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class CounterPage extends Page{
	
	counter = 0
	
	createGui(){
		
		// To try error handling, we will on purpose
		// have code that crashes when counter is 3.
		if(p.counter == 3){
			log(nonExistingVariable) // Will crash, since that variable doesn't exist.
		}
		
		return Rows.children(
			Text.text(\`Counter is \${p.counter}.\`),
			Button.text(\`+1\`).onClick(p.incrementCounter),
			Button.text(\`Back\`).page(MenuPage),
		)
		
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class ClockPage extends Page{
	
	createGui(){
		
		const now = Time.setNow()
		
		return Rows.children(
			Text.text(now.getClock()),
			Button.text(\`Back\`).page(MenuPage),
		)
		
	}
	
}`,x:1050,y:200}]}}}),pt=new Je({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
	createErrorRecoveringPage(){
		return MenuPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Thank you for using my app, I hope you enjoy using it!\`),
			Button.text(\`Go!\`).page(MenuPage),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Counter\`).page(CounterPage),
			Button.text(\`Clock\`).page(ClockPage),
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class CounterPage extends Page{
	
	counter = 0
	
	createGui(){
		
		// To try error handling, we will on purpose
		// have code that crashes when counter is 3.
		if(p.counter == 3){
			log(nonExistingVariable) // Will crash, since that variable doesn't exist.
		}
		
		return Rows.children(
			Text.text(\`Counter is \${p.counter}.\`),
			Button.text(\`+1\`).onClick(p.incrementCounter),
			Button.text(\`Back\`).page(MenuPage),
		)
		
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class ClockPage extends Page{
	
	createGui(){
		
		const now = Time.setNow()
		
		return Rows.children(
			Text.text(now.getClock()),
			Button.text(\`Back\`).page(MenuPage),
		)
		
	}
	
}`,x:1050,y:200}]}}}),{c(){x=s("h1"),x.innerHTML=Dn,Vt=c(),I=s("p"),I.innerHTML=Vn,Bt=c(),A=s("h2"),A.textContent=Bn,Ot=c(),R=s("p"),R.innerHTML=On,Ut=c(),j=s("ul"),j.innerHTML=Un,qt=c(),S=s("p"),S.innerHTML=qn,Gt=c(),y=s("div"),D=s("div"),D.textContent=Gn,rt=s("p"),rt.innerHTML=Wn,kt=s("pre"),Wt=new d(!1),zt=c(),P=s("div"),P.innerHTML=zn,Nt=c(),V=s("h2"),V.innerHTML=Nn,Kt=c(),B=s("p"),B.innerHTML=Kn,Zt=c(),g=s("div"),O=s("div"),O.textContent=Zn,dt=s("p"),dt.textContent=Yn,ht=s("ul"),ht.innerHTML=Fn,mt=s("pre"),Yt=new d(!1),Ft=c(),U=s("h2"),U.innerHTML=Xn,Xt=c(),q=s("p"),q.innerHTML=Jn,Jt=c(),_=s("div"),G=s("div"),G.textContent=Qn,vt=s("p"),vt.innerHTML=$n,ft=s("pre"),Qt=new d(!1),$t=c(),b=s("div"),b.innerHTML=te,tn=c(),W=s("h2"),W.innerHTML=ne,nn=c(),z=s("p"),z.innerHTML=ee,en=c(),N=s("ul"),N.innerHTML=ae,an=c(),K=s("p"),K.textContent=se,sn=c(),E=s("div"),E.innerHTML=pe,pn=c(),m=s("div"),Z=s("div"),Z.textContent=oe,gt=s("p"),gt.innerHTML=le,C=s("a"),C.textContent=ce,wt=s("pre"),on=new d(!1),xt=s("pre"),ln=new d(!1),cn=c(),L=s("div"),L.innerHTML=ie,un=c(),Y=s("h2"),Y.innerHTML=ue,rn=c(),F=s("p"),F.innerHTML=re,kn=c(),H=s("div"),H.innerHTML=ke,dn=c(),w=s("div"),X=s("div"),X.textContent=de,yt=s("p"),yt.innerHTML=he,_t=s("pre"),hn=new d(!1),Ct=s("pre"),mn=new d(!1),vn=c(),J=s("p"),J.innerHTML=me,fn=c(),Q=s("h2"),Q.innerHTML=ve,gn=c(),$=s("p"),$.textContent=fe,wn=c(),tt=s("p"),tt.textContent=ge,xn=c(),nt=s("p"),nt.innerHTML=we,yn=c(),k=s("div"),et=s("div"),et.textContent=xe,Mt=s("p"),Mt.innerHTML=ye,Tt=s("p"),Tt.innerHTML=_e,Ne(at.$$.fragment),M=s("a"),M.textContent=Ce,Pt=s("pre"),_n=new d(!1),bt=s("pre"),Cn=new d(!1),Et=s("pre"),Mn=new d(!1),Lt=s("pre"),Tn=new d(!1),Ht=s("pre"),Pn=new d(!1),bn=c(),v=s("div"),st=s("div"),st.textContent=Me,It=s("p"),It.innerHTML=Te,Ne(pt.$$.fragment),T=s("a"),T.textContent=Pe,At=s("pre"),En=new d(!1),Ln=c(),ot=s("h2"),ot.innerHTML=be,Hn=c(),lt=s("p"),lt.innerHTML=Ee,In=c(),ct=s("ul"),ct.innerHTML=Le,An=c(),it=s("p"),it.innerHTML=He,Rn=c(),ut=s("p"),ut.innerHTML=Ie,this.h()},l(t){x=p(t,"H1",{"data-svelte-h":!0}),o(x)!=="svelte-gth7d6"&&(x.innerHTML=Dn),Vt=i(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1fg5q15"&&(I.innerHTML=Vn),Bt=i(t),A=p(t,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-1ukekoe"&&(A.textContent=Bn),Ot=i(t),R=p(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-15hddt2"&&(R.innerHTML=On),Ut=i(t),j=p(t,"UL",{"data-svelte-h":!0}),o(j)!=="svelte-16x8hsd"&&(j.innerHTML=Un),qt=i(t),S=p(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-4li1ps"&&(S.innerHTML=qn),Gt=i(t),y=p(t,"DIV",{class:!0});var e=r(y);D=p(e,"DIV",{class:!0,"data-svelte-h":!0}),o(D)!=="svelte-1llzxwj"&&(D.textContent=Gn),rt=p(e,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-o5kqje"&&(rt.innerHTML=Wn),kt=p(e,"PRE",{class:!0});var Ae=r(kt);Wt=h(Ae,!1),Ae.forEach(n),e.forEach(n),zt=i(t),P=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-l5koxx"&&(P.innerHTML=zn),Nt=i(t),V=p(t,"H2",{"data-svelte-h":!0}),o(V)!=="svelte-2xzfq5"&&(V.innerHTML=Nn),Kt=i(t),B=p(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-7tndlv"&&(B.innerHTML=Kn),Zt=i(t),g=p(t,"DIV",{class:!0});var St=r(g);O=p(St,"DIV",{class:!0,"data-svelte-h":!0}),o(O)!=="svelte-1llzxwj"&&(O.textContent=Zn),dt=p(St,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-uvw9hb"&&(dt.textContent=Yn),ht=p(St,"UL",{"data-svelte-h":!0}),o(ht)!=="svelte-ykz76m"&&(ht.innerHTML=Fn),mt=p(St,"PRE",{class:!0});var Re=r(mt);Yt=h(Re,!1),Re.forEach(n),St.forEach(n),Ft=i(t),U=p(t,"H2",{"data-svelte-h":!0}),o(U)!=="svelte-sftdll"&&(U.innerHTML=Xn),Xt=i(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-8iounh"&&(q.innerHTML=Jn),Jt=i(t),_=p(t,"DIV",{class:!0});var Sn=r(_);G=p(Sn,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-1llzxwj"&&(G.textContent=Qn),vt=p(Sn,"P",{"data-svelte-h":!0}),o(vt)!=="svelte-wsbz82"&&(vt.innerHTML=$n),ft=p(Sn,"PRE",{class:!0});var je=r(ft);Qt=h(je,!1),je.forEach(n),Sn.forEach(n),$t=i(t),b=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(b)!=="svelte-usow1f"&&(b.innerHTML=te),tn=i(t),W=p(t,"H2",{"data-svelte-h":!0}),o(W)!=="svelte-39obcl"&&(W.innerHTML=ne),nn=i(t),z=p(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-16c6i82"&&(z.innerHTML=ee),en=i(t),N=p(t,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-7xhw0v"&&(N.innerHTML=ae),an=i(t),K=p(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-pyxldx"&&(K.textContent=se),sn=i(t),E=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-18jclhj"&&(E.innerHTML=pe),pn=i(t),m=p(t,"DIV",{class:!0});var Rt=r(m);Z=p(Rt,"DIV",{class:!0,"data-svelte-h":!0}),o(Z)!=="svelte-1llzxwj"&&(Z.textContent=oe),gt=p(Rt,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-q4p7c3"&&(gt.innerHTML=le),C=p(Rt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-1345w6l"&&(C.textContent=ce),wt=p(Rt,"PRE",{class:!0});var Se=r(wt);on=h(Se,!1),Se.forEach(n),xt=p(Rt,"PRE",{class:!0});var De=r(xt);ln=h(De,!1),De.forEach(n),Rt.forEach(n),cn=i(t),L=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-1ttsoq4"&&(L.innerHTML=ie),un=i(t),Y=p(t,"H2",{"data-svelte-h":!0}),o(Y)!=="svelte-14hesrt"&&(Y.innerHTML=ue),rn=i(t),F=p(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-mqv2a"&&(F.innerHTML=re),kn=i(t),H=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-14qa09q"&&(H.innerHTML=ke),dn=i(t),w=p(t,"DIV",{class:!0});var Dt=r(w);X=p(Dt,"DIV",{class:!0,"data-svelte-h":!0}),o(X)!=="svelte-1llzxwj"&&(X.textContent=de),yt=p(Dt,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-cj3t71"&&(yt.innerHTML=he),_t=p(Dt,"PRE",{class:!0});var Ve=r(_t);hn=h(Ve,!1),Ve.forEach(n),Ct=p(Dt,"PRE",{class:!0});var Be=r(Ct);mn=h(Be,!1),Be.forEach(n),Dt.forEach(n),vn=i(t),J=p(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-13gkd96"&&(J.innerHTML=me),fn=i(t),Q=p(t,"H2",{"data-svelte-h":!0}),o(Q)!=="svelte-1cqw3ss"&&(Q.innerHTML=ve),gn=i(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-2ygih5"&&($.textContent=fe),wn=i(t),tt=p(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-ni7ya5"&&(tt.textContent=ge),xn=i(t),nt=p(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1jvhf59"&&(nt.innerHTML=we),yn=i(t),k=p(t,"DIV",{class:!0});var f=r(k);et=p(f,"DIV",{class:!0,"data-svelte-h":!0}),o(et)!=="svelte-1llzxwj"&&(et.textContent=xe),Mt=p(f,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-dkdlj"&&(Mt.innerHTML=ye),Tt=p(f,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-opeocx"&&(Tt.innerHTML=_e),Ke(at.$$.fragment,f),M=p(f,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(M)!=="svelte-1bxxy41"&&(M.textContent=Ce),Pt=p(f,"PRE",{class:!0});var Oe=r(Pt);_n=h(Oe,!1),Oe.forEach(n),bt=p(f,"PRE",{class:!0});var Ue=r(bt);Cn=h(Ue,!1),Ue.forEach(n),Et=p(f,"PRE",{class:!0});var qe=r(Et);Mn=h(qe,!1),qe.forEach(n),Lt=p(f,"PRE",{class:!0});var Ge=r(Lt);Tn=h(Ge,!1),Ge.forEach(n),Ht=p(f,"PRE",{class:!0});var We=r(Ht);Pn=h(We,!1),We.forEach(n),f.forEach(n),bn=i(t),v=p(t,"DIV",{class:!0});var jt=r(v);st=p(jt,"DIV",{class:!0,"data-svelte-h":!0}),o(st)!=="svelte-1llzxwj"&&(st.textContent=Me),It=p(jt,"P",{"data-svelte-h":!0}),o(It)!=="svelte-nlv967"&&(It.innerHTML=Te),Ke(pt.$$.fragment,jt),T=p(jt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-1akpl0i"&&(T.textContent=Pe),At=p(jt,"PRE",{class:!0});var ze=r(At);En=h(ze,!1),ze.forEach(n),jt.forEach(n),Ln=i(t),ot=p(t,"H2",{"data-svelte-h":!0}),o(ot)!=="svelte-1irrpl0"&&(ot.innerHTML=be),Hn=i(t),lt=p(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-wt6vj7"&&(lt.innerHTML=Ee),In=i(t),ct=p(t,"UL",{"data-svelte-h":!0}),o(ct)!=="svelte-1d0nj11"&&(ct.innerHTML=Le),An=i(t),it=p(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-12x7ujy"&&(it.innerHTML=He),Rn=i(t),ut=p(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-286i4h"&&(ut.innerHTML=Ie),this.h()},h(){l(D,"class","remark-container__title"),Wt.a=null,l(kt,"class","language-js"),l(y,"class","remark-container tip"),l(P,"class","remark-container tip"),l(O,"class","remark-container__title"),Yt.a=null,l(mt,"class","language-js"),l(g,"class","remark-container tip"),l(G,"class","remark-container__title"),Qt.a=null,l(ft,"class","language-js"),l(_,"class","remark-container tip"),l(b,"class","remark-container tip"),l(E,"class","remark-container tip"),l(Z,"class","remark-container__title"),l(C,"target","_blank"),l(C,"href","/editor#eNplUE1LxDAQ/SvjnFoIpQp76U32ID0Igt6s0GwydsOGpExS3FL63023WN31kI+ZeW/e400o+x6rCZXXhBUqK0OA5/Gx74HOkZwOkP5T45q4HMUkI9XKuyxfm5EpDuzgRfbExUGqU8d+cHrvrees7bzVbV6oo7GayWUrp4kX+N6wsvSfxLRwWGozhGyXi5WUL8987eQ1Sk67Orq1sw3+kGacBfapF7B6n9BorO4FfiaHxPVaXMWw7diiWIrpV/1pMLe6bwlaxHRlbe0gHgmWlUDaRM8ClDXqBH6dNLgE2SBEeRAgnYbRD/BlrIVAtJIvOhpMAt61PwnMKPCc/O5KgSNWD2U5f8zfEaakPA=="),l(C,"title","Open in our Online Editor"),on.a=null,l(wt,"class","language-js"),ln.a=null,l(xt,"class","language-js"),l(m,"class","remark-container tip"),l(L,"class","remark-container tip"),l(H,"class","remark-container warning"),l(X,"class","remark-container__title"),hn.a=null,l(_t,"class","language-js"),mn.a=null,l(Ct,"class","language-js"),l(w,"class","remark-container tip"),l(et,"class","remark-container__title"),l(M,"target","_blank"),l(M,"href","/editor#eNqtVO9r2zAQ/VduYjCbGtdpOgaGfFjDKP3QMbawfVgG1exLrMWRjHSuY4L/98rxj6TJnJXRDxaWT/fu3bsnbxnPMhZuWaRiZCGLUm4M3JcfswxwQyhjA/Z9O5dzqp9IIyf8RlzTF75Ex20ipJFyLaEP1F+rJqlilccy+82w8OeWiZiFI48tVBqjvms2z4r3GD2BenPE4DYXx7W/qsL4USLSWKN0mtCcZhbEJ7s4D7OEyxWUKoeF0pAbIZewLsEK4MEdJCrDXRDlH1W2YUFvHlyvw7rJiZRs0W6VDfl1X849yrzm2J10n3XvsY1t8n3gsZKFV0FQeY0IV+dE6CBfW4Mad6ijqcoloe66areHjR0npCpa9cfrzT9UuD5VYXxOhQMKA0I0B2ACwbA2zXp5CTMFpEtAre38rRni1M7YgwKhEGkKSkKW60wZ7DMS/ohQUwJKOEGkuUnQQJGghK62MDD2mwyxcDK/5zSBcU+BUrV0pJKfNsKQrfqda8F/p+iCrfKjrr7D9sDaLmqrPbZnIFZo5DuyEtjktlR12NtLpz/dU3677ZlW/pAjLkZ2ukpOUxGtbGeWmsY1SmpxBrJu+N4Vf70aDe2qm9gxbD+4vZYXExid2unDqZ2uz9qps+hLb1WzRkoaAqkKa7OZWKNvkD6rwnH/YwQWxV8i7Zg47qsI2P1hggM1flVPw2IWXA=="),l(M,"title","Open in our Online Editor"),_n.a=null,l(Pt,"class","language-js"),Cn.a=null,l(bt,"class","language-js"),Mn.a=null,l(Et,"class","language-js"),Tn.a=null,l(Lt,"class","language-js"),Pn.a=null,l(Ht,"class","language-js"),l(k,"class","remark-container tip"),l(st,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNqtVNtq20AQ/ZXpUqhEhGLHKQWDHxoTQh5SSmrah7qQrTS2VMs7YndkWRj9e1fWJb7Ebih50KLV7Mycc+asNkKmqRhuREAhiqEIEmkMPBSf0xRwzahCA/Z9M1VTrp5Ao2T8xlLzVzlHx60jrJEzraALVF/L/aRbrUk/YkAr1LGav5T+gCo7yC5F6YnUfjNi+HMj4lAM+56YURKivq83e9A7BB38anOA/y6LD1s/Um78IIqTUKNy6tCUJ7aIz3ZxniaRVAsoKIMZaciMpQDLAqx8HtxDRClug6j+UNGEY3735HptrZuMmVRT7Y5syK94OS3p9qS7x94Ta0vyY88ThRhe9XqlV4twdU6EtuRba1DVPcVoTJli1C2rZrtL7DAhoWDRHa82/1Dh+liFwTkVdiCcEKI+ACPondamXi8vYULAugCsbAzWDGFiZ+xBjpDHSQKkIM10Sga7jEiuECpIwJFkCLQ0ERrII1TQ9o4NDPw6I545qd9hGsGgg8AJzR1F6nYdG7Zdv0sdy98JumC7/Ki6b2t7YG0XNN1WzRkICY36wFYCm9y0Kne5vXb642fI7zcd0tI/5YiLvp0uqXESBwvLzELTuETFTZ0TWTfy2RUvXo0advdzOSzbDe5Zy4sR9I/t9OnYTtdn7dRa9LW3ql4DUoZBUW5tNomX6BvkL5Q77n+MwFbx58hbJI77JgK2f5jejhq/yr/vSC6+"),l(T,"title","Open in our Online Editor"),En.a=null,l(At,"class","language-js"),l(v,"class","remark-container tip")},m(t,e){a(t,x,e),a(t,Vt,e),a(t,I,e),a(t,Bt,e),a(t,A,e),a(t,Ot,e),a(t,R,e),a(t,Ut,e),a(t,j,e),a(t,qt,e),a(t,S,e),a(t,Gt,e),a(t,y,e),u(y,D),u(y,rt),u(y,kt),Wt.m($e,kt),a(t,zt,e),a(t,P,e),a(t,Nt,e),a(t,V,e),a(t,Kt,e),a(t,B,e),a(t,Zt,e),a(t,g,e),u(g,O),u(g,dt),u(g,ht),u(g,mt),Yt.m(ta,mt),a(t,Ft,e),a(t,U,e),a(t,Xt,e),a(t,q,e),a(t,Jt,e),a(t,_,e),u(_,G),u(_,vt),u(_,ft),Qt.m(na,ft),a(t,$t,e),a(t,b,e),a(t,tn,e),a(t,W,e),a(t,nn,e),a(t,z,e),a(t,en,e),a(t,N,e),a(t,an,e),a(t,K,e),a(t,sn,e),a(t,E,e),a(t,pn,e),a(t,m,e),u(m,Z),u(m,gt),u(m,C),u(m,wt),on.m(ea,wt),u(m,xt),ln.m(aa,xt),a(t,cn,e),a(t,L,e),a(t,un,e),a(t,Y,e),a(t,rn,e),a(t,F,e),a(t,kn,e),a(t,H,e),a(t,dn,e),a(t,w,e),u(w,X),u(w,yt),u(w,_t),hn.m(sa,_t),u(w,Ct),mn.m(pa,Ct),a(t,vn,e),a(t,J,e),a(t,fn,e),a(t,Q,e),a(t,gn,e),a(t,$,e),a(t,wn,e),a(t,tt,e),a(t,xn,e),a(t,nt,e),a(t,yn,e),a(t,k,e),u(k,et),u(k,Mt),u(k,Tt),Ze(at,k,null),u(k,M),u(k,Pt),_n.m(oa,Pt),u(k,bt),Cn.m(la,bt),u(k,Et),Mn.m(ca,Et),u(k,Lt),Tn.m(ia,Lt),u(k,Ht),Pn.m(ua,Ht),a(t,bn,e),a(t,v,e),u(v,st),u(v,It),Ze(pt,v,null),u(v,T),u(v,At),En.m(ra,At),a(t,Ln,e),a(t,ot,e),a(t,Hn,e),a(t,lt,e),a(t,In,e),a(t,ct,e),a(t,An,e),a(t,it,e),a(t,Rn,e),a(t,ut,e),jn=!0},p:da,i(t){jn||(Ye(at.$$.fragment,t),Ye(pt.$$.fragment,t),jn=!0)},o(t){Fe(at.$$.fragment,t),Fe(pt.$$.fragment,t),jn=!1},d(t){t&&(n(x),n(Vt),n(I),n(Bt),n(A),n(Ot),n(R),n(Ut),n(j),n(qt),n(S),n(Gt),n(y),n(zt),n(P),n(Nt),n(V),n(Kt),n(B),n(Zt),n(g),n(Ft),n(U),n(Xt),n(q),n(Jt),n(_),n($t),n(b),n(tn),n(W),n(nn),n(z),n(en),n(N),n(an),n(K),n(sn),n(E),n(pn),n(m),n(cn),n(L),n(un),n(Y),n(rn),n(F),n(kn),n(H),n(dn),n(w),n(vn),n(J),n(fn),n(Q),n(gn),n($),n(wn),n(tt),n(xn),n(nt),n(yn),n(k),n(bn),n(v),n(Ln),n(ot),n(Hn),n(lt),n(In),n(ct),n(An),n(it),n(Rn),n(ut)),Xe(at),Xe(pt)}}}class xa extends ha{constructor(x){super(),ma(this,x,null,va,ka,{})}}export{xa as component};
