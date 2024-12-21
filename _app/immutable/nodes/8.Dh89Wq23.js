import{s as ke,n as de}from"../chunks/scheduler.B0TnBjPs.js";import{S as he,i as me,e as s,s as c,H as d,c as Na,a as p,g as o,b as i,d as r,n as h,h as t,f as Ka,o as l,j as e,p as u,m as Ya,t as Za,k as Fa,l as Ja}from"../chunks/index.BXVnRmkj.js";import{V as Qa}from"../chunks/ViewApp.DfUK9ae4.js";function ge(Xa){let x,Dt="<code>App</code>",Bn,I,Vt="On this page you find the documentation for the <code>App</code> class.",Wn,A,Bt="Introduction",zn,j,Wt="The <code>App</code> class represents your entire app. It is mainly used to:",On,R,zt="<li>Create the first page shown to the user</li> <li>Keep track of the app&#39;s global state through the app&#39;s instance variables (known as <em>app variables</em>)</li>",Gn,S,Ot="You should create your own class inheriting from <code>App</code> and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.",qn,y,D,Gt="Example",kn,qt="Example of the basic code for creating your own <code>App</code> class.",dn,Un,$a=`<code class="language-js"><span class="token comment">// Name your own app whatever you want (in this example MyApp).</span>
<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give your own app</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,Nn,b,Ut='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can click on a page, and then click on the <code>MyApp</code> tab to view and edit the code for your <code>App</code> class.</p>',Kn,V,Nt="The <code>a</code> variable",Yn,B,Kt="In BagaWork, you can use the special variable named <code>a</code>, short for <em>app</em>, to access the constants/variables/methods you have in your <code>App</code> class. The <code>a</code> variable can be used both in your <code>App</code> class and in your <code>Page</code> classes.",Zn,v,W,Yt="Example",hn,Zt="Example of an app with:",mn,Ft="<li>An app constant</li> <li>An app variable</li> <li>An app method</li> ",gn,Fn,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token string">"The constant value"</span>
	
	theVariableNAME <span class="token operator">=</span> <span class="token string">"The variable value"</span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use a.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use a.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use a.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jn,z,Jt="<code>onBefore()</code> - Initializing the state of the app",Qn,O,Qt="The method <code>onBefore()</code> will be called directly when the app starts. In it, you can initialize the state of your app.",Xn,C,G,Xt="Example",fn,$t="Example of an app that uses <code>onBefore()</code>.",vn,$n,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,nt,P,na='<div class="remark-container__title">Not needed?</div><p>You only need to initialize the global state if your app needs one. Some simple apps don&#39;t need one, and can simply leave <code>onBefore()</code> empty, or not have this method at all.</p>',tt,q,ta="<code>createIcon()</code> - Creating an icon",at,U,aa="The method <code>createIcon()</code> will be called directly when the app starts. In it, you can create and return a paper figure that will be used as the icon of your app. The icon of your app will not be shown in your app&#39;s GUI, but at other places, such as:",et,N,ea="<li>When your app runs in a tab in web browser, the app icon will be shown as the icon of the tab</li> <li>When your app is installed on a smartphone, the app icon will be shown as the icon the user should click on to start your app</li>",st,K,sa="The icon will always have a squared size (width=height).",pt,E,pa='<div class="remark-container__title">Previewing in the online editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can preview the app icon by clicking on a page, and then look in the <code>Icon</code> tab.</p>',ot,m,Y,oa="Example",wn,la="Example of how <code>createIcon()</code> can be implemented.",_,ca="Open in Online Editor",xn,lt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,yn,ct,ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In the code editor, click on the "Icon" tab, and you will see the created app icon!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it,L,ia='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createIcon()</code> if you want your app to have its own icon. If you don&#39;t implement it, a default icon will be used instead.</p>',ut,Z,ua="<code>createStartPage()</code> - Creating the start page",rt,F,ra="After <code>onBefore()</code> has been called, <code>createStartPage()</code> will be called. In this method, you should create and send back an instance of the <code>Page</code> class that should first be shown to the user. You must implement this method, otherwise your app won&#39;t know which <code>Page</code> to show when it starts, and the app will crash as soon as the user tries to start it.",kt,H,ka='<div class="remark-container__title">Note!</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, <code>createStartPage()</code> is never used. Each time you preview a page, the framework overrides your implementation of <code>createStartPage()</code> with its own implementation that returns the page you are previewing. So you have to try running the app for real to be sure that your implementation of <code>createStartPage()</code> works.</p>',dt,w,J,da="Example",Cn,ha="Example of an app specifying which <code>Page</code> to first show the user.",_n,ht,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Mn,mt,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give this page</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,gt,Q,ma='See the documentation for the <a href="/documentation/page/" title="Open the documentation for Page.">Page</a> class to learn which methods you can override in your <code>Page</code> classes to make the page work the way you want.',ft,X,ga="<code>createErrorRecoveringPage()</code> - Handling errors",vt,$,fa="When the user runs your app and an une expected error occurs in your code, your app will crash, and a GUI from the framework will be shown to the user with a message that explains why the app crashed, and what the user can do about it.",wt,nn,va="One of the options presented to the user is to try running the app again. Most likely, the app will only crash when it tries to show/run the page that crashed, and hopefully the user will still be able to use the other pages in the app without problems until you have released a new version of the app that doesn't crash on that page anymore.",xt,tn,wa="If the user choses the option to try running the app again, then <code>App.createStartPage()</code> will be called, and the page returned from that method will be shown to the user. If you instead want to show another page to the user, you can implement <code>App.createErrorRecoveringPage()</code>, and return the page you want to show to the user there.",yt,k,an,xa="Example",Tn,ya="Example of an app that doesn&#39;t use <code>createErrorRecoveringPage()</code>, and instead uses <code>createStartPage()</code> when the app crashes and the user wants to try running it again.",bn,Ca="Notice that when the counter gets to <code>3</code>, you can still restart the app and use the <code>ClockPage</code>, but going to the <code>CounterPage</code> again after that will always make the app crash.",en,M,_a="Open in Online Editor",Pn,Ct,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,En,_t,le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Thank you for using my app, I hope you enjoy using it!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ln,Mt,ce=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Menu</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Counter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CounterPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Clock</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ClockPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Hn,Tt,ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,In,bt,ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ClockPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,g,sn,Ma="Example",An,Ta="This is the same app as above, but in it we have also specified that <code>createErrorRecoveringPage()</code> should return <code>MenuPage</code>, so the user comes to the <code>MenuPage</code> after the app has crashed, and doesn&#39;t need to view the <code>StartPage</code> again.",pn,T,ba="Open in Online Editor",jn,Et,re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createErrorRecoveringPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,on,Pa="<code>onUpdate()</code> - Updating the state of the app",Ht,ln,Ea="When the user starts running a new version of your app with a state from an older version of the app, <code>App.onUpdate()</code> will be called, in which you can handle the update. <code>onUpdate()</code> will be passed two values:",It,cn,La="<li><code>oldA</code>, which contains the stored app variables</li> <li><code>oldVersion</code>, which contains the old version number of the app the user ran before</li>",At,un,Ha="The page shown to the user after the update is by default the same page the user was on before the update. If that page doesn&#39;t exist in the new version of the app, then the page returned by <code>App.createStartPage()</code> will be shown. If you don&#39;t want this default update behavior, you can return a page from <code>onUpdate()</code>, and that page will be shown to the user.",jt,rn,Ia='For more information, see <a href="/documentation/state/" title="Open the documentation for State.">State</a>.',Rt;return en=new Qa({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),pn=new Qa({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),{c(){x=s("h1"),x.innerHTML=Dt,Bn=c(),I=s("p"),I.innerHTML=Vt,Wn=c(),A=s("h2"),A.textContent=Bt,zn=c(),j=s("p"),j.innerHTML=Wt,On=c(),R=s("ul"),R.innerHTML=zt,Gn=c(),S=s("p"),S.innerHTML=Ot,qn=c(),y=s("div"),D=s("div"),D.textContent=Gt,kn=s("p"),kn.innerHTML=qt,dn=s("pre"),Un=new d(!1),Nn=c(),b=s("div"),b.innerHTML=Ut,Kn=c(),V=s("h2"),V.innerHTML=Nt,Yn=c(),B=s("p"),B.innerHTML=Kt,Zn=c(),v=s("div"),W=s("div"),W.textContent=Yt,hn=s("p"),hn.textContent=Zt,mn=s("ul"),mn.innerHTML=Ft,gn=s("pre"),Fn=new d(!1),Jn=c(),z=s("h2"),z.innerHTML=Jt,Qn=c(),O=s("p"),O.innerHTML=Qt,Xn=c(),C=s("div"),G=s("div"),G.textContent=Xt,fn=s("p"),fn.innerHTML=$t,vn=s("pre"),$n=new d(!1),nt=c(),P=s("div"),P.innerHTML=na,tt=c(),q=s("h2"),q.innerHTML=ta,at=c(),U=s("p"),U.innerHTML=aa,et=c(),N=s("ul"),N.innerHTML=ea,st=c(),K=s("p"),K.textContent=sa,pt=c(),E=s("div"),E.innerHTML=pa,ot=c(),m=s("div"),Y=s("div"),Y.textContent=oa,wn=s("p"),wn.innerHTML=la,_=s("a"),_.textContent=ca,xn=s("pre"),lt=new d(!1),yn=s("pre"),ct=new d(!1),it=c(),L=s("div"),L.innerHTML=ia,ut=c(),Z=s("h2"),Z.innerHTML=ua,rt=c(),F=s("p"),F.innerHTML=ra,kt=c(),H=s("div"),H.innerHTML=ka,dt=c(),w=s("div"),J=s("div"),J.textContent=da,Cn=s("p"),Cn.innerHTML=ha,_n=s("pre"),ht=new d(!1),Mn=s("pre"),mt=new d(!1),gt=c(),Q=s("p"),Q.innerHTML=ma,ft=c(),X=s("h2"),X.innerHTML=ga,vt=c(),$=s("p"),$.textContent=fa,wt=c(),nn=s("p"),nn.textContent=va,xt=c(),tn=s("p"),tn.innerHTML=wa,yt=c(),k=s("div"),an=s("div"),an.textContent=xa,Tn=s("p"),Tn.innerHTML=ya,bn=s("p"),bn.innerHTML=Ca,Na(en.$$.fragment),M=s("a"),M.textContent=_a,Pn=s("pre"),Ct=new d(!1),En=s("pre"),_t=new d(!1),Ln=s("pre"),Mt=new d(!1),Hn=s("pre"),Tt=new d(!1),In=s("pre"),bt=new d(!1),Pt=c(),g=s("div"),sn=s("div"),sn.textContent=Ma,An=s("p"),An.innerHTML=Ta,Na(pn.$$.fragment),T=s("a"),T.textContent=ba,jn=s("pre"),Et=new d(!1),Lt=c(),on=s("h2"),on.innerHTML=Pa,Ht=c(),ln=s("p"),ln.innerHTML=Ea,It=c(),cn=s("ul"),cn.innerHTML=La,At=c(),un=s("p"),un.innerHTML=Ha,jt=c(),rn=s("p"),rn.innerHTML=Ia,this.h()},l(n){x=p(n,"H1",{"data-svelte-h":!0}),o(x)!=="svelte-gth7d6"&&(x.innerHTML=Dt),Bn=i(n),I=p(n,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1fg5q15"&&(I.innerHTML=Vt),Wn=i(n),A=p(n,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-1ukekoe"&&(A.textContent=Bt),zn=i(n),j=p(n,"P",{"data-svelte-h":!0}),o(j)!=="svelte-15hddt2"&&(j.innerHTML=Wt),On=i(n),R=p(n,"UL",{"data-svelte-h":!0}),o(R)!=="svelte-16x8hsd"&&(R.innerHTML=zt),Gn=i(n),S=p(n,"P",{"data-svelte-h":!0}),o(S)!=="svelte-4li1ps"&&(S.innerHTML=Ot),qn=i(n),y=p(n,"DIV",{class:!0});var a=r(y);D=p(a,"DIV",{class:!0,"data-svelte-h":!0}),o(D)!=="svelte-1llzxwj"&&(D.textContent=Gt),kn=p(a,"P",{"data-svelte-h":!0}),o(kn)!=="svelte-o5kqje"&&(kn.innerHTML=qt),dn=p(a,"PRE",{class:!0});var Aa=r(dn);Un=h(Aa,!1),Aa.forEach(t),a.forEach(t),Nn=i(n),b=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(b)!=="svelte-l5koxx"&&(b.innerHTML=Ut),Kn=i(n),V=p(n,"H2",{"data-svelte-h":!0}),o(V)!=="svelte-2xzfq5"&&(V.innerHTML=Nt),Yn=i(n),B=p(n,"P",{"data-svelte-h":!0}),o(B)!=="svelte-7tndlv"&&(B.innerHTML=Kt),Zn=i(n),v=p(n,"DIV",{class:!0});var Dn=r(v);W=p(Dn,"DIV",{class:!0,"data-svelte-h":!0}),o(W)!=="svelte-1llzxwj"&&(W.textContent=Yt),hn=p(Dn,"P",{"data-svelte-h":!0}),o(hn)!=="svelte-uvw9hb"&&(hn.textContent=Zt),mn=p(Dn,"UL",{"data-svelte-h":!0}),o(mn)!=="svelte-ykz76m"&&(mn.innerHTML=Ft),gn=p(Dn,"PRE",{class:!0});var ja=r(gn);Fn=h(ja,!1),ja.forEach(t),Dn.forEach(t),Jn=i(n),z=p(n,"H2",{"data-svelte-h":!0}),o(z)!=="svelte-sftdll"&&(z.innerHTML=Jt),Qn=i(n),O=p(n,"P",{"data-svelte-h":!0}),o(O)!=="svelte-8iounh"&&(O.innerHTML=Qt),Xn=i(n),C=p(n,"DIV",{class:!0});var St=r(C);G=p(St,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-1llzxwj"&&(G.textContent=Xt),fn=p(St,"P",{"data-svelte-h":!0}),o(fn)!=="svelte-wsbz82"&&(fn.innerHTML=$t),vn=p(St,"PRE",{class:!0});var Ra=r(vn);$n=h(Ra,!1),Ra.forEach(t),St.forEach(t),nt=i(n),P=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-usow1f"&&(P.innerHTML=na),tt=i(n),q=p(n,"H2",{"data-svelte-h":!0}),o(q)!=="svelte-39obcl"&&(q.innerHTML=ta),at=i(n),U=p(n,"P",{"data-svelte-h":!0}),o(U)!=="svelte-dy0y7a"&&(U.innerHTML=aa),et=i(n),N=p(n,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-7xhw0v"&&(N.innerHTML=ea),st=i(n),K=p(n,"P",{"data-svelte-h":!0}),o(K)!=="svelte-pyxldx"&&(K.textContent=sa),pt=i(n),E=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-18jclhj"&&(E.innerHTML=pa),ot=i(n),m=p(n,"DIV",{class:!0});var Rn=r(m);Y=p(Rn,"DIV",{class:!0,"data-svelte-h":!0}),o(Y)!=="svelte-1llzxwj"&&(Y.textContent=oa),wn=p(Rn,"P",{"data-svelte-h":!0}),o(wn)!=="svelte-q4p7c3"&&(wn.innerHTML=la),_=p(Rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(_)!=="svelte-bmb13b"&&(_.textContent=ca),xn=p(Rn,"PRE",{class:!0});var Sa=r(xn);lt=h(Sa,!1),Sa.forEach(t),yn=p(Rn,"PRE",{class:!0});var Da=r(yn);ct=h(Da,!1),Da.forEach(t),Rn.forEach(t),it=i(n),L=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-x5v00r"&&(L.innerHTML=ia),ut=i(n),Z=p(n,"H2",{"data-svelte-h":!0}),o(Z)!=="svelte-14hesrt"&&(Z.innerHTML=ua),rt=i(n),F=p(n,"P",{"data-svelte-h":!0}),o(F)!=="svelte-mqv2a"&&(F.innerHTML=ra),kt=i(n),H=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-14qa09q"&&(H.innerHTML=ka),dt=i(n),w=p(n,"DIV",{class:!0});var Vn=r(w);J=p(Vn,"DIV",{class:!0,"data-svelte-h":!0}),o(J)!=="svelte-1llzxwj"&&(J.textContent=da),Cn=p(Vn,"P",{"data-svelte-h":!0}),o(Cn)!=="svelte-cj3t71"&&(Cn.innerHTML=ha),_n=p(Vn,"PRE",{class:!0});var Va=r(_n);ht=h(Va,!1),Va.forEach(t),Mn=p(Vn,"PRE",{class:!0});var Ba=r(Mn);mt=h(Ba,!1),Ba.forEach(t),Vn.forEach(t),gt=i(n),Q=p(n,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-13gkd96"&&(Q.innerHTML=ma),ft=i(n),X=p(n,"H2",{"data-svelte-h":!0}),o(X)!=="svelte-1cqw3ss"&&(X.innerHTML=ga),vt=i(n),$=p(n,"P",{"data-svelte-h":!0}),o($)!=="svelte-2ygih5"&&($.textContent=fa),wt=i(n),nn=p(n,"P",{"data-svelte-h":!0}),o(nn)!=="svelte-ni7ya5"&&(nn.textContent=va),xt=i(n),tn=p(n,"P",{"data-svelte-h":!0}),o(tn)!=="svelte-1jvhf59"&&(tn.innerHTML=wa),yt=i(n),k=p(n,"DIV",{class:!0});var f=r(k);an=p(f,"DIV",{class:!0,"data-svelte-h":!0}),o(an)!=="svelte-1llzxwj"&&(an.textContent=xa),Tn=p(f,"P",{"data-svelte-h":!0}),o(Tn)!=="svelte-dkdlj"&&(Tn.innerHTML=ya),bn=p(f,"P",{"data-svelte-h":!0}),o(bn)!=="svelte-opeocx"&&(bn.innerHTML=Ca),Ka(en.$$.fragment,f),M=p(f,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(M)!=="svelte-1bxxy41"&&(M.textContent=_a),Pn=p(f,"PRE",{class:!0});var Wa=r(Pn);Ct=h(Wa,!1),Wa.forEach(t),En=p(f,"PRE",{class:!0});var za=r(En);_t=h(za,!1),za.forEach(t),Ln=p(f,"PRE",{class:!0});var Oa=r(Ln);Mt=h(Oa,!1),Oa.forEach(t),Hn=p(f,"PRE",{class:!0});var Ga=r(Hn);Tt=h(Ga,!1),Ga.forEach(t),In=p(f,"PRE",{class:!0});var qa=r(In);bt=h(qa,!1),qa.forEach(t),f.forEach(t),Pt=i(n),g=p(n,"DIV",{class:!0});var Sn=r(g);sn=p(Sn,"DIV",{class:!0,"data-svelte-h":!0}),o(sn)!=="svelte-1llzxwj"&&(sn.textContent=Ma),An=p(Sn,"P",{"data-svelte-h":!0}),o(An)!=="svelte-nlv967"&&(An.innerHTML=Ta),Ka(pn.$$.fragment,Sn),T=p(Sn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-1akpl0i"&&(T.textContent=ba),jn=p(Sn,"PRE",{class:!0});var Ua=r(jn);Et=h(Ua,!1),Ua.forEach(t),Sn.forEach(t),Lt=i(n),on=p(n,"H2",{"data-svelte-h":!0}),o(on)!=="svelte-1irrpl0"&&(on.innerHTML=Pa),Ht=i(n),ln=p(n,"P",{"data-svelte-h":!0}),o(ln)!=="svelte-wt6vj7"&&(ln.innerHTML=Ea),It=i(n),cn=p(n,"UL",{"data-svelte-h":!0}),o(cn)!=="svelte-1d0nj11"&&(cn.innerHTML=La),At=i(n),un=p(n,"P",{"data-svelte-h":!0}),o(un)!=="svelte-12x7ujy"&&(un.innerHTML=Ha),jt=i(n),rn=p(n,"P",{"data-svelte-h":!0}),o(rn)!=="svelte-286i4h"&&(rn.innerHTML=Ia),this.h()},h(){l(D,"class","remark-container__title"),Un.a=null,l(dn,"class","language-js"),l(y,"class","remark-container tip"),l(b,"class","remark-container tip"),l(W,"class","remark-container__title"),Fn.a=null,l(gn,"class","language-js"),l(v,"class","remark-container tip"),l(G,"class","remark-container__title"),$n.a=null,l(vn,"class","language-js"),l(C,"class","remark-container tip"),l(P,"class","remark-container tip"),l(E,"class","remark-container tip"),l(Y,"class","remark-container__title"),l(_,"target","_blank"),l(_,"href","/editor#eNqlkktrwzAMgP+KplMCJqQrpZDb2GEUNihst2VQ19ZWM9cOtsMaQv77lIZ2z8NgB7/0+CRZ6lE2DVY9Kq8JK1RWxgh33VXTAB0SOR2B733t6jQuFUgmWinvsnwSpkCpDQ7WsqFwE3zbFFupXl/45vS1tz5kG2v2tMkL5X3QxjHgvouJ9tmsFDArWbEzVgdy2USs0xF2bYKy9JPWkbX+jXlBatPGbMEAcolCthCwyMWfIFvLkg/G7MyYC1j+l7H8ybg17hdCIM3+aWfUq6MYs7LgYmKSIY15zPOCGzDS5idaPh7D127cj/Zr+ULfW3JWfHIacBDYsCxi9dij0VjNBD57qymspseXUTgzzuMwPvqP6Det+R73gU2LxFu2WTlIO4IRCaRN8kGAslwu+ElT4zhMNUKSWwHSaeh8C2/GWohEk/MxjgaeVDBsfLE5/cKAAg+c86IU2GF1WZbD0/AOSR3/Gg=="),l(_,"title","Open in our Online Editor"),lt.a=null,l(xn,"class","language-js"),ct.a=null,l(yn,"class","language-js"),l(m,"class","remark-container tip"),l(L,"class","remark-container tip"),l(H,"class","remark-container warning"),l(J,"class","remark-container__title"),ht.a=null,l(_n,"class","language-js"),mt.a=null,l(Mn,"class","language-js"),l(w,"class","remark-container tip"),l(an,"class","remark-container__title"),l(M,"target","_blank"),l(M,"href","/editor#eNqtVO9r2zAQ/VduYjCbGtdpOgaGfFjDKP3QMbawfVgG1exLrMWRjHSuY4L/98rxj6TJnJXRDxaWT/fu3bsnbxnPMhZuWaRiZCGLUm4M3JcfswxwQyhjA/Z9O5dzqp9IIyf8RlzTF75Ex20ipJFyLaEP1F+rJqlilccy+82w8OeWiZiFI48tVBqjvms2z4r3GD2BenPE4DYXx7W/qsL4USLSWKN0mtCcZhbEJ7s4D7OEyxWUKoeF0pAbIZewLsEK4MEdJCrDXRDlH1W2YUFvHlyvw7rJiZRs0W6VDfl1X849yrzm2J10n3XvsY1t8n3gsZKFV0FQeY0IV+dE6CBfW4Mad6ijqcoloe66areHjR0npCpa9cfrzT9UuD5VYXxOhQMKA0I0B2ACwbA2zXp5CTMFpEtAre38rRni1M7YgwKhEGkKSkKW60wZ7DMS/ohQUwJKOEGkuUnQQJGghK62MDD2mwyxcDK/5zSBcU+BUrV0pJKfNsKQrfqda8F/p+iCrfKjrr7D9sDaLmqrPbZnIFZo5DuyEtjktlR12NtLpz/dU3677ZlW/pAjLkZ2ukpOUxGtbGeWmsY1SmpxBrJu+N4Vf70aDe2qm9gxbD+4vZYXExid2unDqZ2uz9qps+hLb1WzRkoaAqkKa7OZWKNvkD6rwnH/YwQWxV8i7Zg47qsI2P1hggM1flVPw2IWXA=="),l(M,"title","Open in our Online Editor"),Ct.a=null,l(Pn,"class","language-js"),_t.a=null,l(En,"class","language-js"),Mt.a=null,l(Ln,"class","language-js"),Tt.a=null,l(Hn,"class","language-js"),bt.a=null,l(In,"class","language-js"),l(k,"class","remark-container tip"),l(sn,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNqtVNtq20AQ/ZXpUqhEhGLHKQWDHxoTQh5SSmrah7qQrTS2VMs7YndkWRj9e1fWJb7Ebih50KLV7Mycc+asNkKmqRhuREAhiqEIEmkMPBSf0xRwzahCA/Z9M1VTrp5Ao2T8xlLzVzlHx60jrJEzraALVF/L/aRbrUk/YkAr1LGav5T+gCo7yC5F6YnUfjNi+HMj4lAM+56YURKivq83e9A7BB38anOA/y6LD1s/Um78IIqTUKNy6tCUJ7aIz3ZxniaRVAsoKIMZaciMpQDLAqx8HtxDRClug6j+UNGEY3735HptrZuMmVRT7Y5syK94OS3p9qS7x94Ta0vyY88ThRhe9XqlV4twdU6EtuRba1DVPcVoTJli1C2rZrtL7DAhoWDRHa82/1Dh+liFwTkVdiCcEKI+ACPondamXi8vYULAugCsbAzWDGFiZ+xBjpDHSQKkIM10Sga7jEiuECpIwJFkCLQ0ERrII1TQ9o4NDPw6I545qd9hGsGgg8AJzR1F6nYdG7Zdv0sdy98JumC7/Ki6b2t7YG0XNN1WzRkICY36wFYCm9y0Kne5vXb642fI7zcd0tI/5YiLvp0uqXESBwvLzELTuETFTZ0TWTfy2RUvXo0advdzOSzbDe5Zy4sR9I/t9OnYTtdn7dRa9LW3ql4DUoZBUW5tNomX6BvkL5Q77n+MwFbx58hbJI77JgK2f5jejhq/yr/vSC6+"),l(T,"title","Open in our Online Editor"),Et.a=null,l(jn,"class","language-js"),l(g,"class","remark-container tip")},m(n,a){e(n,x,a),e(n,Bn,a),e(n,I,a),e(n,Wn,a),e(n,A,a),e(n,zn,a),e(n,j,a),e(n,On,a),e(n,R,a),e(n,Gn,a),e(n,S,a),e(n,qn,a),e(n,y,a),u(y,D),u(y,kn),u(y,dn),Un.m($a,dn),e(n,Nn,a),e(n,b,a),e(n,Kn,a),e(n,V,a),e(n,Yn,a),e(n,B,a),e(n,Zn,a),e(n,v,a),u(v,W),u(v,hn),u(v,mn),u(v,gn),Fn.m(ne,gn),e(n,Jn,a),e(n,z,a),e(n,Qn,a),e(n,O,a),e(n,Xn,a),e(n,C,a),u(C,G),u(C,fn),u(C,vn),$n.m(te,vn),e(n,nt,a),e(n,P,a),e(n,tt,a),e(n,q,a),e(n,at,a),e(n,U,a),e(n,et,a),e(n,N,a),e(n,st,a),e(n,K,a),e(n,pt,a),e(n,E,a),e(n,ot,a),e(n,m,a),u(m,Y),u(m,wn),u(m,_),u(m,xn),lt.m(ae,xn),u(m,yn),ct.m(ee,yn),e(n,it,a),e(n,L,a),e(n,ut,a),e(n,Z,a),e(n,rt,a),e(n,F,a),e(n,kt,a),e(n,H,a),e(n,dt,a),e(n,w,a),u(w,J),u(w,Cn),u(w,_n),ht.m(se,_n),u(w,Mn),mt.m(pe,Mn),e(n,gt,a),e(n,Q,a),e(n,ft,a),e(n,X,a),e(n,vt,a),e(n,$,a),e(n,wt,a),e(n,nn,a),e(n,xt,a),e(n,tn,a),e(n,yt,a),e(n,k,a),u(k,an),u(k,Tn),u(k,bn),Ya(en,k,null),u(k,M),u(k,Pn),Ct.m(oe,Pn),u(k,En),_t.m(le,En),u(k,Ln),Mt.m(ce,Ln),u(k,Hn),Tt.m(ie,Hn),u(k,In),bt.m(ue,In),e(n,Pt,a),e(n,g,a),u(g,sn),u(g,An),Ya(pn,g,null),u(g,T),u(g,jn),Et.m(re,jn),e(n,Lt,a),e(n,on,a),e(n,Ht,a),e(n,ln,a),e(n,It,a),e(n,cn,a),e(n,At,a),e(n,un,a),e(n,jt,a),e(n,rn,a),Rt=!0},p:de,i(n){Rt||(Za(en.$$.fragment,n),Za(pn.$$.fragment,n),Rt=!0)},o(n){Fa(en.$$.fragment,n),Fa(pn.$$.fragment,n),Rt=!1},d(n){n&&(t(x),t(Bn),t(I),t(Wn),t(A),t(zn),t(j),t(On),t(R),t(Gn),t(S),t(qn),t(y),t(Nn),t(b),t(Kn),t(V),t(Yn),t(B),t(Zn),t(v),t(Jn),t(z),t(Qn),t(O),t(Xn),t(C),t(nt),t(P),t(tt),t(q),t(at),t(U),t(et),t(N),t(st),t(K),t(pt),t(E),t(ot),t(m),t(it),t(L),t(ut),t(Z),t(rt),t(F),t(kt),t(H),t(dt),t(w),t(gt),t(Q),t(ft),t(X),t(vt),t($),t(wt),t(nn),t(xt),t(tn),t(yt),t(k),t(Pt),t(g),t(Lt),t(on),t(Ht),t(ln),t(It),t(cn),t(At),t(un),t(jt),t(rn)),Ja(en),Ja(pn)}}}class xe extends he{constructor(x){super(),me(this,x,null,ge,ke,{})}}export{xe as component};
