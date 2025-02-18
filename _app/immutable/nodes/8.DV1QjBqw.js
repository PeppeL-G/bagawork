import{s as Ps,n as Ts}from"../chunks/scheduler.B0TnBjPs.js";import{S as Es,i as Hs,e,s as c,H as d,c as Wt,a as p,g as o,b as u,d as r,n as h,h as t,f as Yt,o as l,j as s,p as i,m as Kt,t as Ft,k as Qt,l as Jt}from"../chunks/index.BXVnRmkj.js";import{V as Xt}from"../chunks/ViewApp.qg7AIhJt.js";function Ls(rs){let y,Zt="<code>App</code>",Wn,A,$t="On this page you find the documentation for the <code>App</code> class.",Yn,R,na="Introduction",Kn,S,ta="The <code>App</code> class represents your entire app. It is mainly used to:",Fn,B,aa="<li>Create the first page shown to the user</li> <li>Keep track of the app&#39;s global state through the app&#39;s instance variables (known as <em>app variables</em>)</li>",Qn,D,sa="You should create your own class inheriting from <code>App</code> and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.",Jn,C,V,ea="Example",gn,pa="Example of the basic code for creating your own <code>App</code> class.",vn,Xn,ks=`<code class="language-js"><span class="token comment">// Name your own app whatever you want</span>
<span class="token comment">// (in this example MyApp).</span>
<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give your own app</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,Zn,E,oa='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can click on a page, and then click on the <code>MyApp</code> tab to view and edit the code for your <code>App</code> class.</p>',$n,U,la="The <code>a</code> variable",nt,O,ca="In BagaWork, you can use the special variable named <code>a</code>, short for <em>app</em>, to access the constants/variables/methods you have in your <code>App</code> class. The <code>a</code> variable can be used both in your <code>App</code> class and in your <code>Page</code> classes.",tt,w,N,ua="Example",fn,ia="Example of an app with:",wn,ra="<li>An app constant</li> <li>An app variable</li> <li>An app method</li> ",xn,at,ds=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token string">"The constant value"</span>
	
	theVariableName <span class="token operator">=</span> <span class="token string">"The variable value"</span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use a.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use a.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use a.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,st,q,ka="<code>onBefore()</code> - Initializing the state of the app",et,z,da="The method <code>onBefore()</code> will be called directly when the app starts for the first time. In it, you can initialize the state of your app.",pt,_,G,ha="Example",yn,ma="Example of an app that uses <code>onBefore()</code>.",Cn,ot,hs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NUMBER_1</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">NUMBER_2</span> <span class="token operator">=</span> <span class="token number">4</span>
	
	<span class="token comment">// We want the sum variable to contain the</span>
	<span class="token comment">// sum of NUMBER_1 and NUMBER_2. However, the</span>
	<span class="token comment">// "a" variable can only be used in methods</span>
	<span class="token comment">// in the App class, so we can't write</span>
	<span class="token comment">// sum = a.NUMBER_1 + a.NUMBER_2 here. So</span>
	<span class="token comment">// instead, we initialize the sum to a dummy</span>
	<span class="token comment">// value (0 in this case)...</span>
	sum <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// ...and in this method we assign</span>
		<span class="token comment">// the sum its correct value.</span>
		a<span class="token punctuation">.</span>sum <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">NUMBER_1</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">NUMBER_2</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,lt,H,ga='<div class="remark-container__title">Not needed?</div><p>You only need to initialize the global state if your app needs one. Many apps don&#39;t need one, and can simply leave <code>onBefore()</code> empty, or not have this method at all.</p>',ct,W,va="<code>createIcon()</code> - Creating an icon",ut,Y,fa="The method <code>createIcon()</code> will be called directly when the app starts. In it, you can create and return a paper figure that will be used as the icon of your app. The icon of your app will not be shown in your app&#39;s GUI, but at other places, such as:",it,K,wa="<li>When your app runs in a tab in web browser, the app icon will be shown as the icon of the tab</li> <li>When your app is installed on a smartphone, the app icon will be shown as the icon the user should click on to start your app</li>",rt,F,xa="The icon will always have a squared size (width=height).",kt,L,ya='<div class="remark-container__title">Previewing in the online editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can preview the app icon by clicking on a page, and then look in the <code>Icon</code> tab.</p>',dt,m,Q,Ca="Example",_n,_a="Example of how <code>createIcon()</code> can be implemented.",b,ba="Open in Online Editor",bn,ht,ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createIcon</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Mn,mt,gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In the code editor, click on the "Icon" tab, and you will see the created app icon!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,gt,I,Ma='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createIcon()</code> if you want your app to have its own icon. If you don&#39;t implement it, a default icon will be used instead.</p>',vt,J,Pa="<code>createStartPage()</code> - Creating the start page",ft,X,Ta="After <code>onBefore()</code> has been called, <code>createStartPage()</code> will be called. In this method, you should create and send back an instance of the <code>Page</code> class that should first be shown to the user. You must implement this method, otherwise your app won&#39;t know which <code>Page</code> to show when it starts, and the app will crash as soon as the user tries to start it.",wt,j,Ea='<div class="remark-container__title">Note!</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, <code>createStartPage()</code> is never used. Each time you preview a page, the framework overrides your implementation of <code>createStartPage()</code> with its own implementation that returns the page you are previewing. So you have to try running the app for real to be sure that your implementation of <code>createStartPage()</code> works.</p>',xt,x,Z,Ha="Example",Pn,La="Example of an app specifying which <code>Page</code> to first show the user.",Tn,yt,vs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,En,Ct,fs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give this page</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,_t,$,Ia='See the documentation for the <a href="/documentation/page/" title="Open the documentation for Page.">Page</a> class to learn which methods you can override in your <code>Page</code> class to make it work the way you want.',bt,nn,ja="<code>createErrorRecoveringPage()</code> - Handling errors",Mt,tn,Aa="When the user runs your app and an unexpected error occurs in your code, your app will crash, and a GUI from the framework will be shown to the user with a message that explains why the app crashed, and what the user can do about it.",Pt,g,an,Ra="Example",Hn,Sa="Example of an app that can crash.",sn,M,Ba="Open in Online Editor",Ln,Tt,ws=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try crashing this app by clicking on the button below.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Crash!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// When the code below is executed,</span>
		<span class="token comment">// the app will crash, because the</span>
		<span class="token comment">// variable "hello" does not exist.</span>
		p<span class="token punctuation">.</span>test <span class="token operator">=</span> hello
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Et,en,Da="One of the options presented to the user is to try running the app again. Most likely, the app will only crash when it tries to show/run the page that crashed, and hopefully the user will still be able to use the other pages in the app without problems until you have released a new version of the app that doesn't crash on that page anymore.",Ht,pn,Va="If the user choses the option to try running the app again, then <code>App.createStartPage()</code> will be called, and the page returned from that method will be shown to the user. If you instead want to show another page to the user after a crash, you can implement <code>App.createErrorRecoveringPage()</code>, and return the page you want to show to the user there.",Lt,k,on,Ua="Example",In,Oa="Example of an app that doesn&#39;t use <code>createErrorRecoveringPage()</code>, and instead uses <code>createStartPage()</code> when the app crashes and the user wants to try running it again.",jn,Na="Notice that when the counter gets to <code>3</code>, you can still restart the app and use the <code>ClockPage</code>, but going to the <code>CounterPage</code> again after that will always make the app crash.",ln,P,qa="Open in Online Editor",An,It,xs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rn,jt,ys=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Thank you for using my app, I hope you enjoy using it!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Sn,At,Cs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Menu</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Counter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CounterPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Clock</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ClockPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Bn,Rt,_s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// To try error handling, we will on</span>
		<span class="token comment">// purpose have code that crashes when</span>
		<span class="token comment">// counter is 3.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token function">log</span><span class="token punctuation">(</span>nonExistingVariable<span class="token punctuation">)</span>
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
	
<span class="token punctuation">&#125;</span></code>`,Dn,St,bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ClockPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Bt,v,cn,za="Example",Vn,Ga="This is the same app as in the previous example, but this time we have also specified that <code>createErrorRecoveringPage()</code> should return <code>MenuPage</code>, so the user comes to the <code>MenuPage</code> after the app has crashed, and doesn&#39;t need to view the <code>StartPage</code> again.",un,T,Wa="Open in Online Editor",Un,Dt,Ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createErrorRecoveringPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,rn,Ya="<code>onUpdate()</code> - Updating the state of the app",Ut,kn,Ka="When the user starts running a new version of your app with a state from an older version of the app, <code>App.onUpdate()</code> will be called, in which you can handle the update. <code>onUpdate()</code> will be passed two values:",Ot,dn,Fa="<li><code>oldA</code>, which contains the stored app variables</li> <li><code>oldVersion</code>, which contains the old version number of the app the user ran before</li>",Nt,hn,Qa="The page shown to the user after the update is by default the same page the user was on before the update. If that page doesn&#39;t exist in the new version of the app, then the page returned by <code>App.createStartPage()</code> will be shown. If you don&#39;t want this default update behavior, you can return a page from <code>onUpdate()</code>, and that page will be shown to the user.",qt,mn,Ja='For more information, see <a href="/documentation/state/" title="Open the documentation for State.">State</a>.',zt;return sn=new Xt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Try crashing this app by clicking on the button below.\`),
			Button.text(\`Crash!\`).onClick(p.handleClick),
		)
	}
	
	handleClick(){
		
		// When the code below is executed,
		// the app will crash, because the
		// variable "hello" does not exist.
		p.test = hello
		
	}
	
}`,x:150,y:200}]}}}),ln=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
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
		
		// To try error handling, we will on
		// purpose have code that crashes when
		// counter is 3.
		if(p.counter == 3){
			log(nonExistingVariable)
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
	
}`,x:1050,y:200}]}}}),un=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),{c(){y=e("h1"),y.innerHTML=Zt,Wn=c(),A=e("p"),A.innerHTML=$t,Yn=c(),R=e("h2"),R.textContent=na,Kn=c(),S=e("p"),S.innerHTML=ta,Fn=c(),B=e("ul"),B.innerHTML=aa,Qn=c(),D=e("p"),D.innerHTML=sa,Jn=c(),C=e("div"),V=e("div"),V.textContent=ea,gn=e("p"),gn.innerHTML=pa,vn=e("pre"),Xn=new d(!1),Zn=c(),E=e("div"),E.innerHTML=oa,$n=c(),U=e("h2"),U.innerHTML=la,nt=c(),O=e("p"),O.innerHTML=ca,tt=c(),w=e("div"),N=e("div"),N.textContent=ua,fn=e("p"),fn.textContent=ia,wn=e("ul"),wn.innerHTML=ra,xn=e("pre"),at=new d(!1),st=c(),q=e("h2"),q.innerHTML=ka,et=c(),z=e("p"),z.innerHTML=da,pt=c(),_=e("div"),G=e("div"),G.textContent=ha,yn=e("p"),yn.innerHTML=ma,Cn=e("pre"),ot=new d(!1),lt=c(),H=e("div"),H.innerHTML=ga,ct=c(),W=e("h2"),W.innerHTML=va,ut=c(),Y=e("p"),Y.innerHTML=fa,it=c(),K=e("ul"),K.innerHTML=wa,rt=c(),F=e("p"),F.textContent=xa,kt=c(),L=e("div"),L.innerHTML=ya,dt=c(),m=e("div"),Q=e("div"),Q.textContent=Ca,_n=e("p"),_n.innerHTML=_a,b=e("a"),b.textContent=ba,bn=e("pre"),ht=new d(!1),Mn=e("pre"),mt=new d(!1),gt=c(),I=e("div"),I.innerHTML=Ma,vt=c(),J=e("h2"),J.innerHTML=Pa,ft=c(),X=e("p"),X.innerHTML=Ta,wt=c(),j=e("div"),j.innerHTML=Ea,xt=c(),x=e("div"),Z=e("div"),Z.textContent=Ha,Pn=e("p"),Pn.innerHTML=La,Tn=e("pre"),yt=new d(!1),En=e("pre"),Ct=new d(!1),_t=c(),$=e("p"),$.innerHTML=Ia,bt=c(),nn=e("h2"),nn.innerHTML=ja,Mt=c(),tn=e("p"),tn.textContent=Aa,Pt=c(),g=e("div"),an=e("div"),an.textContent=Ra,Hn=e("p"),Hn.textContent=Sa,Wt(sn.$$.fragment),M=e("a"),M.textContent=Ba,Ln=e("pre"),Tt=new d(!1),Et=c(),en=e("p"),en.textContent=Da,Ht=c(),pn=e("p"),pn.innerHTML=Va,Lt=c(),k=e("div"),on=e("div"),on.textContent=Ua,In=e("p"),In.innerHTML=Oa,jn=e("p"),jn.innerHTML=Na,Wt(ln.$$.fragment),P=e("a"),P.textContent=qa,An=e("pre"),It=new d(!1),Rn=e("pre"),jt=new d(!1),Sn=e("pre"),At=new d(!1),Bn=e("pre"),Rt=new d(!1),Dn=e("pre"),St=new d(!1),Bt=c(),v=e("div"),cn=e("div"),cn.textContent=za,Vn=e("p"),Vn.innerHTML=Ga,Wt(un.$$.fragment),T=e("a"),T.textContent=Wa,Un=e("pre"),Dt=new d(!1),Vt=c(),rn=e("h2"),rn.innerHTML=Ya,Ut=c(),kn=e("p"),kn.innerHTML=Ka,Ot=c(),dn=e("ul"),dn.innerHTML=Fa,Nt=c(),hn=e("p"),hn.innerHTML=Qa,qt=c(),mn=e("p"),mn.innerHTML=Ja,this.h()},l(n){y=p(n,"H1",{"data-svelte-h":!0}),o(y)!=="svelte-gth7d6"&&(y.innerHTML=Zt),Wn=u(n),A=p(n,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1fg5q15"&&(A.innerHTML=$t),Yn=u(n),R=p(n,"H2",{"data-svelte-h":!0}),o(R)!=="svelte-1ukekoe"&&(R.textContent=na),Kn=u(n),S=p(n,"P",{"data-svelte-h":!0}),o(S)!=="svelte-15hddt2"&&(S.innerHTML=ta),Fn=u(n),B=p(n,"UL",{"data-svelte-h":!0}),o(B)!=="svelte-16x8hsd"&&(B.innerHTML=aa),Qn=u(n),D=p(n,"P",{"data-svelte-h":!0}),o(D)!=="svelte-4li1ps"&&(D.innerHTML=sa),Jn=u(n),C=p(n,"DIV",{class:!0});var a=r(C);V=p(a,"DIV",{class:!0,"data-svelte-h":!0}),o(V)!=="svelte-1llzxwj"&&(V.textContent=ea),gn=p(a,"P",{"data-svelte-h":!0}),o(gn)!=="svelte-o5kqje"&&(gn.innerHTML=pa),vn=p(a,"PRE",{class:!0});var Xa=r(vn);Xn=h(Xa,!1),Xa.forEach(t),a.forEach(t),Zn=u(n),E=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-l5koxx"&&(E.innerHTML=oa),$n=u(n),U=p(n,"H2",{"data-svelte-h":!0}),o(U)!=="svelte-2xzfq5"&&(U.innerHTML=la),nt=u(n),O=p(n,"P",{"data-svelte-h":!0}),o(O)!=="svelte-7tndlv"&&(O.innerHTML=ca),tt=u(n),w=p(n,"DIV",{class:!0});var zn=r(w);N=p(zn,"DIV",{class:!0,"data-svelte-h":!0}),o(N)!=="svelte-1llzxwj"&&(N.textContent=ua),fn=p(zn,"P",{"data-svelte-h":!0}),o(fn)!=="svelte-uvw9hb"&&(fn.textContent=ia),wn=p(zn,"UL",{"data-svelte-h":!0}),o(wn)!=="svelte-ykz76m"&&(wn.innerHTML=ra),xn=p(zn,"PRE",{class:!0});var Za=r(xn);at=h(Za,!1),Za.forEach(t),zn.forEach(t),st=u(n),q=p(n,"H2",{"data-svelte-h":!0}),o(q)!=="svelte-sftdll"&&(q.innerHTML=ka),et=u(n),z=p(n,"P",{"data-svelte-h":!0}),o(z)!=="svelte-4rnkem"&&(z.innerHTML=da),pt=u(n),_=p(n,"DIV",{class:!0});var Gt=r(_);G=p(Gt,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-1llzxwj"&&(G.textContent=ha),yn=p(Gt,"P",{"data-svelte-h":!0}),o(yn)!=="svelte-wsbz82"&&(yn.innerHTML=ma),Cn=p(Gt,"PRE",{class:!0});var $a=r(Cn);ot=h($a,!1),$a.forEach(t),Gt.forEach(t),lt=u(n),H=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-15i3rek"&&(H.innerHTML=ga),ct=u(n),W=p(n,"H2",{"data-svelte-h":!0}),o(W)!=="svelte-39obcl"&&(W.innerHTML=va),ut=u(n),Y=p(n,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-dy0y7a"&&(Y.innerHTML=fa),it=u(n),K=p(n,"UL",{"data-svelte-h":!0}),o(K)!=="svelte-7xhw0v"&&(K.innerHTML=wa),rt=u(n),F=p(n,"P",{"data-svelte-h":!0}),o(F)!=="svelte-pyxldx"&&(F.textContent=xa),kt=u(n),L=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-18jclhj"&&(L.innerHTML=ya),dt=u(n),m=p(n,"DIV",{class:!0});var On=r(m);Q=p(On,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1llzxwj"&&(Q.textContent=Ca),_n=p(On,"P",{"data-svelte-h":!0}),o(_n)!=="svelte-q4p7c3"&&(_n.innerHTML=_a),b=p(On,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(b)!=="svelte-bmb13b"&&(b.textContent=ba),bn=p(On,"PRE",{class:!0});var ns=r(bn);ht=h(ns,!1),ns.forEach(t),Mn=p(On,"PRE",{class:!0});var ts=r(Mn);mt=h(ts,!1),ts.forEach(t),On.forEach(t),gt=u(n),I=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(I)!=="svelte-x5v00r"&&(I.innerHTML=Ma),vt=u(n),J=p(n,"H2",{"data-svelte-h":!0}),o(J)!=="svelte-14hesrt"&&(J.innerHTML=Pa),ft=u(n),X=p(n,"P",{"data-svelte-h":!0}),o(X)!=="svelte-mqv2a"&&(X.innerHTML=Ta),wt=u(n),j=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(j)!=="svelte-14qa09q"&&(j.innerHTML=Ea),xt=u(n),x=p(n,"DIV",{class:!0});var Gn=r(x);Z=p(Gn,"DIV",{class:!0,"data-svelte-h":!0}),o(Z)!=="svelte-1llzxwj"&&(Z.textContent=Ha),Pn=p(Gn,"P",{"data-svelte-h":!0}),o(Pn)!=="svelte-cj3t71"&&(Pn.innerHTML=La),Tn=p(Gn,"PRE",{class:!0});var as=r(Tn);yt=h(as,!1),as.forEach(t),En=p(Gn,"PRE",{class:!0});var ss=r(En);Ct=h(ss,!1),ss.forEach(t),Gn.forEach(t),_t=u(n),$=p(n,"P",{"data-svelte-h":!0}),o($)!=="svelte-9uftsr"&&($.innerHTML=Ia),bt=u(n),nn=p(n,"H2",{"data-svelte-h":!0}),o(nn)!=="svelte-1cqw3ss"&&(nn.innerHTML=ja),Mt=u(n),tn=p(n,"P",{"data-svelte-h":!0}),o(tn)!=="svelte-de12s0"&&(tn.textContent=Aa),Pt=u(n),g=p(n,"DIV",{class:!0});var Nn=r(g);an=p(Nn,"DIV",{class:!0,"data-svelte-h":!0}),o(an)!=="svelte-1llzxwj"&&(an.textContent=Ra),Hn=p(Nn,"P",{"data-svelte-h":!0}),o(Hn)!=="svelte-1enn9yj"&&(Hn.textContent=Sa),Yt(sn.$$.fragment,Nn),M=p(Nn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(M)!=="svelte-16mzd2r"&&(M.textContent=Ba),Ln=p(Nn,"PRE",{class:!0});var es=r(Ln);Tt=h(es,!1),es.forEach(t),Nn.forEach(t),Et=u(n),en=p(n,"P",{"data-svelte-h":!0}),o(en)!=="svelte-ni7ya5"&&(en.textContent=Da),Ht=u(n),pn=p(n,"P",{"data-svelte-h":!0}),o(pn)!=="svelte-6b90z7"&&(pn.innerHTML=Va),Lt=u(n),k=p(n,"DIV",{class:!0});var f=r(k);on=p(f,"DIV",{class:!0,"data-svelte-h":!0}),o(on)!=="svelte-1llzxwj"&&(on.textContent=Ua),In=p(f,"P",{"data-svelte-h":!0}),o(In)!=="svelte-dkdlj"&&(In.innerHTML=Oa),jn=p(f,"P",{"data-svelte-h":!0}),o(jn)!=="svelte-opeocx"&&(jn.innerHTML=Na),Yt(ln.$$.fragment,f),P=p(f,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(P)!=="svelte-k08c7q"&&(P.textContent=qa),An=p(f,"PRE",{class:!0});var ps=r(An);It=h(ps,!1),ps.forEach(t),Rn=p(f,"PRE",{class:!0});var os=r(Rn);jt=h(os,!1),os.forEach(t),Sn=p(f,"PRE",{class:!0});var ls=r(Sn);At=h(ls,!1),ls.forEach(t),Bn=p(f,"PRE",{class:!0});var cs=r(Bn);Rt=h(cs,!1),cs.forEach(t),Dn=p(f,"PRE",{class:!0});var us=r(Dn);St=h(us,!1),us.forEach(t),f.forEach(t),Bt=u(n),v=p(n,"DIV",{class:!0});var qn=r(v);cn=p(qn,"DIV",{class:!0,"data-svelte-h":!0}),o(cn)!=="svelte-1llzxwj"&&(cn.textContent=za),Vn=p(qn,"P",{"data-svelte-h":!0}),o(Vn)!=="svelte-gcb71i"&&(Vn.innerHTML=Ga),Yt(un.$$.fragment,qn),T=p(qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-1akpl0i"&&(T.textContent=Wa),Un=p(qn,"PRE",{class:!0});var is=r(Un);Dt=h(is,!1),is.forEach(t),qn.forEach(t),Vt=u(n),rn=p(n,"H2",{"data-svelte-h":!0}),o(rn)!=="svelte-1irrpl0"&&(rn.innerHTML=Ya),Ut=u(n),kn=p(n,"P",{"data-svelte-h":!0}),o(kn)!=="svelte-wt6vj7"&&(kn.innerHTML=Ka),Ot=u(n),dn=p(n,"UL",{"data-svelte-h":!0}),o(dn)!=="svelte-1d0nj11"&&(dn.innerHTML=Fa),Nt=u(n),hn=p(n,"P",{"data-svelte-h":!0}),o(hn)!=="svelte-12x7ujy"&&(hn.innerHTML=Qa),qt=u(n),mn=p(n,"P",{"data-svelte-h":!0}),o(mn)!=="svelte-286i4h"&&(mn.innerHTML=Ja),this.h()},h(){l(V,"class","remark-container__title"),Xn.a=null,l(vn,"class","language-js"),l(C,"class","remark-container tip"),l(E,"class","remark-container tip"),l(N,"class","remark-container__title"),at.a=null,l(xn,"class","language-js"),l(w,"class","remark-container tip"),l(G,"class","remark-container__title"),ot.a=null,l(Cn,"class","language-js"),l(_,"class","remark-container tip"),l(H,"class","remark-container tip"),l(L,"class","remark-container tip"),l(Q,"class","remark-container__title"),l(b,"target","_blank"),l(b,"href","/editor#eNqlkktrwzAMgP+KplMCJqQrpZDb2GEUNihst2VQ19ZWM9cOtsMaQv77lIZ2z8NgB7/0+CRZ6lE2DVY9Kq8JK1RWxgh33VXTAB0SOR2B733t6jQuFUgmWinvsnwSpkCpDQ7WsqFwE3zbFFupXl/45vS1tz5kG2v2tMkL5X3QxjHgvouJ9tmsFDArWbEzVgdy2USs0xF2bYKy9JPWkbX+jXlBatPGbMEAcolCthCwyMWfIFvLkg/G7MyYC1j+l7H8ybg17hdCIM3+aWfUq6MYs7LgYmKSIY15zPOCGzDS5idaPh7D127cj/Zr+ULfW3JWfHIacBDYsCxi9dij0VjNBD57qymspseXUTgzzuMwPvqP6Det+R73gU2LxFu2WTlIO4IRCaRN8kGAslwu+ElT4zhMNUKSWwHSaeh8C2/GWohEk/MxjgaeVDBsfLE5/cKAAg+c86IU2GF1WZbD0/AOSR3/Gg=="),l(b,"title","Open in our Online Editor"),ht.a=null,l(bn,"class","language-js"),mt.a=null,l(Mn,"class","language-js"),l(m,"class","remark-container tip"),l(I,"class","remark-container tip"),l(j,"class","remark-container warning"),l(Z,"class","remark-container__title"),yt.a=null,l(Tn,"class","language-js"),Ct.a=null,l(En,"class","language-js"),l(x,"class","remark-container tip"),l(an,"class","remark-container__title"),l(M,"target","_blank"),l(M,"href","/editor#eNpdUcFKxDAQ/ZVxTi2U7ip4KXjQPYgHQXTBgxU2m4zbYEhKMnV3Kf13k81a1EvIvHnz3ptkRNH32IwonSJsUBoRAjweb/se6MBkVYB4H1vbsvQkmF5YeH4SOyrKE9qyJx68hbmR0Km1E04V9rEO2LyNqBU2lxV+OKPIP+Tij+k8PxunInvM7veD/u/77Pahlp02ypMtcqvldRSpOR7FZu2PIL0InbY74E4HiDvDNoJGy88EOhtxgu3AHK9bMm5fb8rqR+vuhJ/VVknpYlPWzq7SfNHXnbDK0Kn6GSrPj5Cz/yLM6fO5WMBrR9k+vUY2h5iRDiQHJlXNxMRJyffamLxQFelSDIFSb+Z9Ca/F1hC02JExrkVQjgJYx1FVB64ztY8bBYYbyKw51Tn2hBUe4jddLys8YnO1XE7v0zcv5MkW"),l(M,"title","Open in our Online Editor"),Tt.a=null,l(Ln,"class","language-js"),l(g,"class","remark-container tip"),l(on,"class","remark-container__title"),l(P,"target","_blank"),l(P,"href","/editor#eNqtVFFvmzAQ/is3aw+gIkqaTpOQ8rBGU9WHTtMW7WWZVBcuwQuxkX2MoIj/PlMHkiYjraY+YHG+8+fvvu9gy3hRsHjLEpUii1mSc2Pgvv5UFIAbQpkasO/buZxT+yQaOeF34pq+8iV6vsuQRiq1hD7R7jbuUMOagBV2z7D455aJlMWjgC1UnqK+c8Gzy3uMnkAbHDG4LcXx3d9UZcIkE3mqUXouNaeZBQnJLt7DLONyBbUqYaE0lEbIJaxrsAIEcAeZKvApifK3qndpQe8e/KDDuimJlNyh3SqbCtu+vHuUZcuxq/SfdR+wjW3yQxSwmsVXUdQEToSrcyJ0kG+tQYs71NFUlZJQd13twsPGjg/kKln15W3wggrXpyqMz6lwQGFACFcAE4iGtXHr5SXMFJCuAbW2/tthSHPrcQAVQiXyHJTsK4tSF8qgLfqD0FICyjhBornJ0ECV4b624yAMjEO3KxZeEfbcJjDuqVCulp5U8vNGGLK3/+Ba8MccfZdvDhm/1tPpnsD7bX9vEw75fDGynik5zUWysjyFtJKtUdIOZ+DUDd97/c+Bd7Sbzodj2N6OvTIXExidDsnH0yG5Pjsk3eC99ltxa6KkIZCqssMzE2sMDdIXVXn+f1hgUcIl0hMTz38TAbv/RnSgxq/mL5R/B9k="),l(P,"title","Open in our Online Editor"),It.a=null,l(An,"class","language-js"),jt.a=null,l(Rn,"class","language-js"),At.a=null,l(Sn,"class","language-js"),Rt.a=null,l(Bn,"class","language-js"),St.a=null,l(Dn,"class","language-js"),l(k,"class","remark-container tip"),l(cn,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNqtVNtq20AQ/ZXpUqhEhGLHKQWDHxoTQh5SSmrah7qQrTS2VMs7YndkWRj9e1fWJb7Ebih50KLV7Mycc+asNkKmqRhuREAhiqEIEmkMPBSf0xRwzahCA/Z9M1VTrp5Ao2T8xlLzVzlHx60jrJEzraALVF/L/aRbrUk/YkAr1LGav5T+gCo7yC5F6YnUfjNi+HMj4lAM+56YURKivq83e9A7BB38anOA/y6LD1s/Um78IIqTUKNy6tCUJ7aIz3ZxniaRVAsoKIMZaciMpQDLAqx8HtxDRClug6j+UNGEY3735HptrZuMmVRT7Y5syK94OS3p9qS7x94Ta0vyY88ThRhe9XqlV4twdU6EtuRba1DVPcVoTJli1C2rZrtL7DAhoWDRHa82/1Dh+liFwTkVdiCcEKI+ACPondamXi8vYULAugCsbAzWDGFiZ+xBjpDHSQKkIM10Sga7jEiuECpIwJFkCLQ0ERrII1TQ9o4NDPw6I545qd9hGsGgg8AJzR1F6nYdG7Zdv0sdy98JumC7/Ki6b2t7YG0XNN1WzRkICY36wFYCm9y0Kne5vXb642fI7zcd0tI/5YiLvp0uqXESBwvLzELTuETFTZ0TWTfy2RUvXo0advdzOSzbDe5Zy4sR9I/t9OnYTtdn7dRa9LW3ql4DUoZBUW5tNomX6BvkL5Q77n+MwFbx58hbJI77JgK2f5jejhq/yr/vSC6+"),l(T,"title","Open in our Online Editor"),Dt.a=null,l(Un,"class","language-js"),l(v,"class","remark-container tip")},m(n,a){s(n,y,a),s(n,Wn,a),s(n,A,a),s(n,Yn,a),s(n,R,a),s(n,Kn,a),s(n,S,a),s(n,Fn,a),s(n,B,a),s(n,Qn,a),s(n,D,a),s(n,Jn,a),s(n,C,a),i(C,V),i(C,gn),i(C,vn),Xn.m(ks,vn),s(n,Zn,a),s(n,E,a),s(n,$n,a),s(n,U,a),s(n,nt,a),s(n,O,a),s(n,tt,a),s(n,w,a),i(w,N),i(w,fn),i(w,wn),i(w,xn),at.m(ds,xn),s(n,st,a),s(n,q,a),s(n,et,a),s(n,z,a),s(n,pt,a),s(n,_,a),i(_,G),i(_,yn),i(_,Cn),ot.m(hs,Cn),s(n,lt,a),s(n,H,a),s(n,ct,a),s(n,W,a),s(n,ut,a),s(n,Y,a),s(n,it,a),s(n,K,a),s(n,rt,a),s(n,F,a),s(n,kt,a),s(n,L,a),s(n,dt,a),s(n,m,a),i(m,Q),i(m,_n),i(m,b),i(m,bn),ht.m(ms,bn),i(m,Mn),mt.m(gs,Mn),s(n,gt,a),s(n,I,a),s(n,vt,a),s(n,J,a),s(n,ft,a),s(n,X,a),s(n,wt,a),s(n,j,a),s(n,xt,a),s(n,x,a),i(x,Z),i(x,Pn),i(x,Tn),yt.m(vs,Tn),i(x,En),Ct.m(fs,En),s(n,_t,a),s(n,$,a),s(n,bt,a),s(n,nn,a),s(n,Mt,a),s(n,tn,a),s(n,Pt,a),s(n,g,a),i(g,an),i(g,Hn),Kt(sn,g,null),i(g,M),i(g,Ln),Tt.m(ws,Ln),s(n,Et,a),s(n,en,a),s(n,Ht,a),s(n,pn,a),s(n,Lt,a),s(n,k,a),i(k,on),i(k,In),i(k,jn),Kt(ln,k,null),i(k,P),i(k,An),It.m(xs,An),i(k,Rn),jt.m(ys,Rn),i(k,Sn),At.m(Cs,Sn),i(k,Bn),Rt.m(_s,Bn),i(k,Dn),St.m(bs,Dn),s(n,Bt,a),s(n,v,a),i(v,cn),i(v,Vn),Kt(un,v,null),i(v,T),i(v,Un),Dt.m(Ms,Un),s(n,Vt,a),s(n,rn,a),s(n,Ut,a),s(n,kn,a),s(n,Ot,a),s(n,dn,a),s(n,Nt,a),s(n,hn,a),s(n,qt,a),s(n,mn,a),zt=!0},p:Ts,i(n){zt||(Ft(sn.$$.fragment,n),Ft(ln.$$.fragment,n),Ft(un.$$.fragment,n),zt=!0)},o(n){Qt(sn.$$.fragment,n),Qt(ln.$$.fragment,n),Qt(un.$$.fragment,n),zt=!1},d(n){n&&(t(y),t(Wn),t(A),t(Yn),t(R),t(Kn),t(S),t(Fn),t(B),t(Qn),t(D),t(Jn),t(C),t(Zn),t(E),t($n),t(U),t(nt),t(O),t(tt),t(w),t(st),t(q),t(et),t(z),t(pt),t(_),t(lt),t(H),t(ct),t(W),t(ut),t(Y),t(it),t(K),t(rt),t(F),t(kt),t(L),t(dt),t(m),t(gt),t(I),t(vt),t(J),t(ft),t(X),t(wt),t(j),t(xt),t(x),t(_t),t($),t(bt),t(nn),t(Mt),t(tn),t(Pt),t(g),t(Et),t(en),t(Ht),t(pn),t(Lt),t(k),t(Bt),t(v),t(Vt),t(rn),t(Ut),t(kn),t(Ot),t(dn),t(Nt),t(hn),t(qt),t(mn)),Jt(sn),Jt(ln),Jt(un)}}}class Rs extends Es{constructor(y){super(),Hs(this,y,null,Ls,Ps,{})}}export{Rs as component};
