import{s as de,n as ge}from"../chunks/scheduler.B0TnBjPs.js";import{S as me,i as he,e,s as l,H as k,c as at,a as p,g as c,b as u,d as r,n as d,h as t,f as st,o,j as s,p as i,m as et,t as pt,k as ot,l as ct}from"../chunks/index.CHfggXAQ.js";import{V as lt}from"../chunks/ViewApp.6tllL5xD.js";function fe(Qs){let y,Ta="<code>Page</code>",ut,R,ba="On this page you find the documentation for the <code>Page</code> class.",it,O,Ca="Introduction",rt,D,Ea="Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a button in it). After the user has interacted with the GUI on the page, the app will take the user to the next page and show the GUI of that one instead, and so on.",kt,B,Ia="To add a page to your app, create your own class that extends the <code>Page</code> class, and override some methods there to give your own <code>Page</code> class the specific behavior you want it to have. You can name your own <code>Page</code> classes whatever you want, but they need to have unique names within your app.",dt,g,U,Ha="Example",In,La="Example showing the basic structure of a simple app.",Hn,gt,Ws=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ln,mt,$s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the StartPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,Mn,ht,qs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the MenuPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,An,ft,Fs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GameOverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the GameOverPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,vt,V,Ma="The <code>p</code> variable",wt,N,Aa="In BagaWork, you can use the special variable named <code>p</code>, short for <em>page</em>, to access the constants/variables/methods you have in your <code>Page</code> class. So, unlike the <code>a</code> variable, the <code>p</code> variable refers to different things in your different pages:",xt,z,Ga="<li>In the <code>HelloPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>HelloPage</code></li> <li>In the <code>AboutPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>AboutPage</code></li> <li>Etc.</li>",yt,x,Y,ja="Example",Gn,Sa="Example of a page with:",jn,Ra="<li>A page constant</li> <li>A page variable</li> <li>A page method</li> ",Sn,Pt,Js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token string">"The constant value"</span>
	
	theVariableName <span class="token operator">=</span> <span class="token string">"The variable value"</span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use p.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use p.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use p.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,H,Oa='<div class="remark-container__title">The &quot;a&quot; variable</div><p>In your <code>Page</code> classes, you can also use the special BagaWork variable <code>a</code> to access the things you have in your <code>App</code> class. For more information, see the documentation for the <a href="/documentation/app/" title="Open the documentation for App.">App</a> class.</p>',Tt,Q,Da="<code>createBeforeDirections()</code> - Redirecting the user to another page",bt,W,Ba='The method <code>createBeforeDirections()</code> will be called directly when the user comes to the page. In it, you can return an array of <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects. If there exists a <code>Direction</code> object that has <code>if</code> set to <code>true</code>, the user will immediately be taken to that page, and will never see the GUI of this page (no other methods on this page will be called, not even <code>onBefore()</code>).',Ct,m,$,Ua="Example",q,P,Va="Open in Online Editor",Rn,Et,Zs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createBeforeDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> oneOrTwo <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>LuckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was lucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>UnluckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was unlucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This GUI will only be used in the preview, the user will never see it in the app.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,On,It,Ks=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dn,Ht,Xs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,L,Na='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createBeforeDirections()</code> if you need it.</p>',Mt,F,za="<code>onBefore()</code> - Initializing the state of the page",At,J,Ya="The method <code>onBefore()</code> will be called each time the user comes to the page (before the page is shown on the screen).",Gt,f,Z,Qa="Example",K,_,Wa="Open in Online Editor",Bn,jt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token comment">// This variable should keep track of how many</span>
	<span class="token comment">// times the user has been on this page.</span>
	numberOfVisits <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// So each time the user comes to this page,</span>
		<span class="token comment">// we increment it by 1.</span>
		p<span class="token punctuation">.</span>numberOfVisits <span class="token operator">+=</span> <span class="token number">1</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have been on the StartPage </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfVisits<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to OtherPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>OtherPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Un,St,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">OtherPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the OtherPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rt,M,$a='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>onBefore()</code> if you need it. Many simple pages can leave this method empty, or simply not have it at all.</p>',Ot,X,qa="<code>createGui()</code> - Creating the GUI",Dt,nn,Fa="After <code>onBefore()</code> has been called, <code>createGui()</code> will be called. In this method you should create the GUI structure the page should have, and send back the GUI structure&#39;s root component. The app will then show the page&#39;s GUI on the user&#39;s screen.",Bt,T,tn,Ja="Example",Vn,Za="Example showing how to use <code>Page.createGui()</code>.",Nn,Ut,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskQuestionPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>YesPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>NoPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Vt,A,Ka='<div class="remark-container__title">The size of the root component</div><p>The root component in your GUI (the <code>Rows</code> component in the example above) will always be as wide and high as the screen itself.</p>',Nt,G,Xa='<div class="remark-container__title">Building the GUI</div><p>The GUI is built with the GUI Components from the BagaWork framework. In the sidebar on this page you have a list of them (<em>Views</em> and <em>Layouts</em>).</p>',zt,an,ns="<code>onAfter()</code> - Handling user input",Yt,sn,ts="When the user has interacted with your GUI (for example by clicking on a button in it) and should be taken to another page, <code>onAfter()</code> will be called, in which you can handle the user&#39;s input.",Qt,b,en,as="Example",zn,ss="Example showing how to use <code>Page.onAfter()</code>.",Yn,Wt,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskQuestionPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	startTimeInMs <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	answer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onYesAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onNoAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onYesAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yes</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onNoAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>answer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">no</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onAfter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> endTimeInMs <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> timeToAnswerInMs <span class="token operator">=</span> endTimeInMs <span class="token operator">-</span> p<span class="token punctuation">.</span>startTimeInMs
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">10000</span> <span class="token operator">&lt;</span> timeToAnswerInMs<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// Took more than 10 seconds to answer (too long), handle that here.</span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>answer <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// The user clicked on the yes-button within 10 seconds, handle that here.</span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// The user clicked on the no-button within 10 seconds, handle that here.</span>
		<span class="token punctuation">&#125;</span>
		
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$t,j,es='<div class="remark-container__title">Not needed?</div><p>You only need to handle user input in <code>onAfter()</code> if your app&#39;s logic require&#39;s that. Many simple apps can simply leave this method empty, or not have it at all.</p>',qt,pn,ps="<code>createAfterDirections()</code> - Redirecting the user to another page",Ft,on,os='The method <code>createAfterDirections()</code> will be called after the user has interacted with the GUI. In it, you can return back an array with <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects, indicating which page the user should come to.',Jt,h,cn,cs="Example",ln,C,ls="Open in Online Editor",Qn,Zt,ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ready to try your luck?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> oneOrTwo <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>LuckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was lucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>UnluckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was unlucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Wn,Kt,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$n,Xt,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,na,S,us='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createAfterDirections()</code> if you need it.</p>',ta,un,is="Referring to a page",aa,rn,rs='Sometimes you need to refer to a page you have created. For example, when the user clicks on a <a href="/documentation/button/" title="Open the documentation for button.">button</a>, you might want to take the user to the page you have created named <code>AboutPage</code>. To tell the <code>Button</code> that the user should come to that page when the <code>Button</code> is clicked, you call the configuration method <code>page()</code> on the <code>Button</code>, and you pass it the page the user should come to. To obtain that page, simply write the name you have given your page, e.g.:',sa,kn,ea,ce='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span></code>',pa,v,dn,ks="Example",gn,E,ds="Open in Online Editor",qn,oa,le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to AboutPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Fn,ca,ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the AboutPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,la,mn,gs="Page arguments",ua,hn,ms="When you specify a page the user should come to, you can also pass along arguments (values) to that page by using <em>page argument methods</em>. Page argument methods work the same way as configuration methods on GUI components, but with page argument methods, you decide the names. For example, if you want to pass along an argument named <code>age</code> with the value <code>10</code>, you would write:",ia,fn,ra,ie='<code class="language-js">ThePageName<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></code>',ka,vn,hs="You can name the argument whatever you want, and you can pass along how many page arguments you want.",da,wn,fs="The arguments will then be assigned to the page the user comes to, so you can access them through the <code>p</code> variable, e.g. use <code>p.age</code> to obtain the value.",ga,w,xn,vs="Example",yn,I,ws="Open in Online Editor",Jn,ma,re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,ha,ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token comment">// These will get their values from page arguments.</span>
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">DEFAULT_NAME</span><span class="token template-punctuation string">&#96;</span></span>
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,fa,Pn,xs="<code>onUpdate()</code> - Updating the state of the page",va,_n,ys="When the user starts running a new version of your app with a page state from an older version of the app, <code>Page.onUpdate()</code> will be called, in which you can handle the update. <code>onUpdate()</code> will be passed two values:",wa,Tn,Ps="<li><code>oldP</code>, which contains the stored page variables</li> <li><code>oldVersion</code>, which contains the old version of the app the user ran before</li>",xa,bn,_s='For more information, see <a href="/documentation/state/" title="Open the documentation for State.">State</a>.',ya;return q=new lt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createBeforeDirections(){
		
		const oneOrTwo = m.randomInt(1, 2)
		
		return [
			Direction.when(oneOrTwo == 1).page(LuckyPage).text(\`Was lucky\`),
			Direction.when(oneOrTwo == 2).page(UnluckyPage).text(\`Was unlucky\`),
		]
		
	}
	
	createGui(){
		return Text.text(\`This GUI will only be used in the preview, the user will never see it in the app.\`)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are lucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are unlucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:750,y:200}]}}}),K=new lt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	// This variable should keep track of how many
	// times the user has been on this page.
	numberOfVisits = 0
	
	onBefore(){
		
		// So each time the user comes to this page,
		// we increment it by 1.
		p.numberOfVisits += 1
		
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`You have been on the StartPage \${p.numberOfVisits} times.\`),
			Button.text(\`Go to OtherPage\`).page(OtherPage)
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class OtherPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the OtherPage.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:450,y:200}]}}}),ln=new lt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Ready to try your luck?\`),
			Button.text(\`Yes!\`),
		)
	}
	
	createAfterDirections(){
		
		const oneOrTwo = m.randomInt(1, 2)
		
		return [
			Direction.when(oneOrTwo == 1).page(LuckyPage).text(\`Was lucky\`),
			Direction.when(oneOrTwo == 2).page(UnluckyPage).text(\`Was unlucky\`),
		]
		
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are lucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are unlucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:750,y:200}]}}}),gn=new lt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the StartPage\`),
			Button.text(\`Go to AboutPage\`).page(AboutPage)
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class AboutPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the AboutPage.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:450,y:200}]}}}),yn=new lt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.children(\n			Text.text(`This is the StartPage`),\n			Button.text(`Info about Alice`).page(AboutPage.name(`Alice`).age(10)),\n			Button.text(`Info about Bob`).page(AboutPage.age(15).name(`Bob`)),\n		)\n	}\n	\n}",x:150,y:200},{id:2,folderId:1,code:`class AboutPage extends Page{
	
	// These will get their values from page arguments.
	name = \`DEFAULT_NAME\`
	age = -1
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.name} is \${p.age} years old.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:450,y:200}]}}}),{c(){y=e("h1"),y.innerHTML=Ta,ut=l(),R=e("p"),R.innerHTML=ba,it=l(),O=e("h2"),O.textContent=Ca,rt=l(),D=e("p"),D.textContent=Ea,kt=l(),B=e("p"),B.innerHTML=Ia,dt=l(),g=e("div"),U=e("div"),U.textContent=Ha,In=e("p"),In.textContent=La,Hn=e("pre"),gt=new k(!1),Ln=e("pre"),mt=new k(!1),Mn=e("pre"),ht=new k(!1),An=e("pre"),ft=new k(!1),vt=l(),V=e("h2"),V.innerHTML=Ma,wt=l(),N=e("p"),N.innerHTML=Aa,xt=l(),z=e("ul"),z.innerHTML=Ga,yt=l(),x=e("div"),Y=e("div"),Y.textContent=ja,Gn=e("p"),Gn.textContent=Sa,jn=e("ul"),jn.innerHTML=Ra,Sn=e("pre"),Pt=new k(!1),_t=l(),H=e("div"),H.innerHTML=Oa,Tt=l(),Q=e("h2"),Q.innerHTML=Da,bt=l(),W=e("p"),W.innerHTML=Ba,Ct=l(),m=e("div"),$=e("div"),$.textContent=Ua,at(q.$$.fragment),P=e("a"),P.textContent=Va,Rn=e("pre"),Et=new k(!1),On=e("pre"),It=new k(!1),Dn=e("pre"),Ht=new k(!1),Lt=l(),L=e("div"),L.innerHTML=Na,Mt=l(),F=e("h2"),F.innerHTML=za,At=l(),J=e("p"),J.innerHTML=Ya,Gt=l(),f=e("div"),Z=e("div"),Z.textContent=Qa,at(K.$$.fragment),_=e("a"),_.textContent=Wa,Bn=e("pre"),jt=new k(!1),Un=e("pre"),St=new k(!1),Rt=l(),M=e("div"),M.innerHTML=$a,Ot=l(),X=e("h2"),X.innerHTML=qa,Dt=l(),nn=e("p"),nn.innerHTML=Fa,Bt=l(),T=e("div"),tn=e("div"),tn.textContent=Ja,Vn=e("p"),Vn.innerHTML=Za,Nn=e("pre"),Ut=new k(!1),Vt=l(),A=e("div"),A.innerHTML=Ka,Nt=l(),G=e("div"),G.innerHTML=Xa,zt=l(),an=e("h2"),an.innerHTML=ns,Yt=l(),sn=e("p"),sn.innerHTML=ts,Qt=l(),b=e("div"),en=e("div"),en.textContent=as,zn=e("p"),zn.innerHTML=ss,Yn=e("pre"),Wt=new k(!1),$t=l(),j=e("div"),j.innerHTML=es,qt=l(),pn=e("h2"),pn.innerHTML=ps,Ft=l(),on=e("p"),on.innerHTML=os,Jt=l(),h=e("div"),cn=e("div"),cn.textContent=cs,at(ln.$$.fragment),C=e("a"),C.textContent=ls,Qn=e("pre"),Zt=new k(!1),Wn=e("pre"),Kt=new k(!1),$n=e("pre"),Xt=new k(!1),na=l(),S=e("div"),S.innerHTML=us,ta=l(),un=e("h2"),un.textContent=is,aa=l(),rn=e("p"),rn.innerHTML=rs,sa=l(),kn=e("pre"),ea=new k(!1),pa=l(),v=e("div"),dn=e("div"),dn.textContent=ks,at(gn.$$.fragment),E=e("a"),E.textContent=ds,qn=e("pre"),oa=new k(!1),Fn=e("pre"),ca=new k(!1),la=l(),mn=e("h2"),mn.textContent=gs,ua=l(),hn=e("p"),hn.innerHTML=ms,ia=l(),fn=e("pre"),ra=new k(!1),ka=l(),vn=e("p"),vn.textContent=hs,da=l(),wn=e("p"),wn.innerHTML=fs,ga=l(),w=e("div"),xn=e("div"),xn.textContent=vs,at(yn.$$.fragment),I=e("a"),I.textContent=ws,Jn=e("pre"),ma=new k(!1),Zn=e("pre"),ha=new k(!1),fa=l(),Pn=e("h2"),Pn.innerHTML=xs,va=l(),_n=e("p"),_n.innerHTML=ys,wa=l(),Tn=e("ul"),Tn.innerHTML=Ps,xa=l(),bn=e("p"),bn.innerHTML=_s,this.h()},l(n){y=p(n,"H1",{"data-svelte-h":!0}),c(y)!=="svelte-6v4miu"&&(y.innerHTML=Ta),ut=u(n),R=p(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-1siju2j"&&(R.innerHTML=ba),it=u(n),O=p(n,"H2",{"data-svelte-h":!0}),c(O)!=="svelte-1ukekoe"&&(O.textContent=Ca),rt=u(n),D=p(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-akv8dx"&&(D.textContent=Ea),kt=u(n),B=p(n,"P",{"data-svelte-h":!0}),c(B)!=="svelte-8e5npz"&&(B.innerHTML=Ia),dt=u(n),g=p(n,"DIV",{class:!0});var a=r(g);U=p(a,"DIV",{class:!0,"data-svelte-h":!0}),c(U)!=="svelte-1llzxwj"&&(U.textContent=Ha),In=p(a,"P",{"data-svelte-h":!0}),c(In)!=="svelte-yeohz4"&&(In.textContent=La),Hn=p(a,"PRE",{class:!0});var Ts=r(Hn);gt=d(Ts,!1),Ts.forEach(t),Ln=p(a,"PRE",{class:!0});var bs=r(Ln);mt=d(bs,!1),bs.forEach(t),Mn=p(a,"PRE",{class:!0});var Cs=r(Mn);ht=d(Cs,!1),Cs.forEach(t),An=p(a,"PRE",{class:!0});var Es=r(An);ft=d(Es,!1),Es.forEach(t),a.forEach(t),vt=u(n),V=p(n,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-184d04"&&(V.innerHTML=Ma),wt=u(n),N=p(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-6w5hj5"&&(N.innerHTML=Aa),xt=u(n),z=p(n,"UL",{"data-svelte-h":!0}),c(z)!=="svelte-1s1btu1"&&(z.innerHTML=Ga),yt=u(n),x=p(n,"DIV",{class:!0});var tt=r(x);Y=p(tt,"DIV",{class:!0,"data-svelte-h":!0}),c(Y)!=="svelte-1llzxwj"&&(Y.textContent=ja),Gn=p(tt,"P",{"data-svelte-h":!0}),c(Gn)!=="svelte-isxtel"&&(Gn.textContent=Sa),jn=p(tt,"UL",{"data-svelte-h":!0}),c(jn)!=="svelte-3wu0k8"&&(jn.innerHTML=Ra),Sn=p(tt,"PRE",{class:!0});var Is=r(Sn);Pt=d(Is,!1),Is.forEach(t),tt.forEach(t),_t=u(n),H=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(H)!=="svelte-8iymoo"&&(H.innerHTML=Oa),Tt=u(n),Q=p(n,"H2",{"data-svelte-h":!0}),c(Q)!=="svelte-zo36s1"&&(Q.innerHTML=Da),bt=u(n),W=p(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-1b5hz23"&&(W.innerHTML=Ba),Ct=u(n),m=p(n,"DIV",{class:!0});var Cn=r(m);$=p(Cn,"DIV",{class:!0,"data-svelte-h":!0}),c($)!=="svelte-1llzxwj"&&($.textContent=Ua),st(q.$$.fragment,Cn),P=p(Cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-15e5q2e"&&(P.textContent=Va),Rn=p(Cn,"PRE",{class:!0});var Hs=r(Rn);Et=d(Hs,!1),Hs.forEach(t),On=p(Cn,"PRE",{class:!0});var Ls=r(On);It=d(Ls,!1),Ls.forEach(t),Dn=p(Cn,"PRE",{class:!0});var Ms=r(Dn);Ht=d(Ms,!1),Ms.forEach(t),Cn.forEach(t),Lt=u(n),L=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(L)!=="svelte-1g1h9i1"&&(L.innerHTML=Na),Mt=u(n),F=p(n,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-mzgb"&&(F.innerHTML=za),At=u(n),J=p(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-1fss7ur"&&(J.innerHTML=Ya),Gt=u(n),f=p(n,"DIV",{class:!0});var Kn=r(f);Z=p(Kn,"DIV",{class:!0,"data-svelte-h":!0}),c(Z)!=="svelte-1llzxwj"&&(Z.textContent=Qa),st(K.$$.fragment,Kn),_=p(Kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-8n1o3u"&&(_.textContent=Wa),Bn=p(Kn,"PRE",{class:!0});var As=r(Bn);jt=d(As,!1),As.forEach(t),Un=p(Kn,"PRE",{class:!0});var Gs=r(Un);St=d(Gs,!1),Gs.forEach(t),Kn.forEach(t),Rt=u(n),M=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(M)!=="svelte-ou7j3"&&(M.innerHTML=$a),Ot=u(n),X=p(n,"H2",{"data-svelte-h":!0}),c(X)!=="svelte-9f0kzb"&&(X.innerHTML=qa),Dt=u(n),nn=p(n,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-1b12sfg"&&(nn.innerHTML=Fa),Bt=u(n),T=p(n,"DIV",{class:!0});var Pa=r(T);tn=p(Pa,"DIV",{class:!0,"data-svelte-h":!0}),c(tn)!=="svelte-1llzxwj"&&(tn.textContent=Ja),Vn=p(Pa,"P",{"data-svelte-h":!0}),c(Vn)!=="svelte-9kj2bp"&&(Vn.innerHTML=Za),Nn=p(Pa,"PRE",{class:!0});var js=r(Nn);Ut=d(js,!1),js.forEach(t),Pa.forEach(t),Vt=u(n),A=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(A)!=="svelte-jkmjm7"&&(A.innerHTML=Ka),Nt=u(n),G=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(G)!=="svelte-1mkbe5y"&&(G.innerHTML=Xa),zt=u(n),an=p(n,"H2",{"data-svelte-h":!0}),c(an)!=="svelte-bjryoo"&&(an.innerHTML=ns),Yt=u(n),sn=p(n,"P",{"data-svelte-h":!0}),c(sn)!=="svelte-g06us9"&&(sn.innerHTML=ts),Qt=u(n),b=p(n,"DIV",{class:!0});var _a=r(b);en=p(_a,"DIV",{class:!0,"data-svelte-h":!0}),c(en)!=="svelte-1llzxwj"&&(en.textContent=as),zn=p(_a,"P",{"data-svelte-h":!0}),c(zn)!=="svelte-2fyuhr"&&(zn.innerHTML=ss),Yn=p(_a,"PRE",{class:!0});var Ss=r(Yn);Wt=d(Ss,!1),Ss.forEach(t),_a.forEach(t),$t=u(n),j=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-12kti89"&&(j.innerHTML=es),qt=u(n),pn=p(n,"H2",{"data-svelte-h":!0}),c(pn)!=="svelte-hdwla6"&&(pn.innerHTML=ps),Ft=u(n),on=p(n,"P",{"data-svelte-h":!0}),c(on)!=="svelte-1adb52t"&&(on.innerHTML=os),Jt=u(n),h=p(n,"DIV",{class:!0});var En=r(h);cn=p(En,"DIV",{class:!0,"data-svelte-h":!0}),c(cn)!=="svelte-1llzxwj"&&(cn.textContent=cs),st(ln.$$.fragment,En),C=p(En,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-nlz0ix"&&(C.textContent=ls),Qn=p(En,"PRE",{class:!0});var Rs=r(Qn);Zt=d(Rs,!1),Rs.forEach(t),Wn=p(En,"PRE",{class:!0});var Os=r(Wn);Kt=d(Os,!1),Os.forEach(t),$n=p(En,"PRE",{class:!0});var Ds=r($n);Xt=d(Ds,!1),Ds.forEach(t),En.forEach(t),na=u(n),S=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-14817j4"&&(S.innerHTML=us),ta=u(n),un=p(n,"H2",{"data-svelte-h":!0}),c(un)!=="svelte-1wzt5at"&&(un.textContent=is),aa=u(n),rn=p(n,"P",{"data-svelte-h":!0}),c(rn)!=="svelte-joo0zv"&&(rn.innerHTML=rs),sa=u(n),kn=p(n,"PRE",{class:!0});var Bs=r(kn);ea=d(Bs,!1),Bs.forEach(t),pa=u(n),v=p(n,"DIV",{class:!0});var Xn=r(v);dn=p(Xn,"DIV",{class:!0,"data-svelte-h":!0}),c(dn)!=="svelte-1llzxwj"&&(dn.textContent=ks),st(gn.$$.fragment,Xn),E=p(Xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-lemgcc"&&(E.textContent=ds),qn=p(Xn,"PRE",{class:!0});var Us=r(qn);oa=d(Us,!1),Us.forEach(t),Fn=p(Xn,"PRE",{class:!0});var Vs=r(Fn);ca=d(Vs,!1),Vs.forEach(t),Xn.forEach(t),la=u(n),mn=p(n,"H2",{"data-svelte-h":!0}),c(mn)!=="svelte-1yw68nt"&&(mn.textContent=gs),ua=u(n),hn=p(n,"P",{"data-svelte-h":!0}),c(hn)!=="svelte-yhopvq"&&(hn.innerHTML=ms),ia=u(n),fn=p(n,"PRE",{class:!0});var Ns=r(fn);ra=d(Ns,!1),Ns.forEach(t),ka=u(n),vn=p(n,"P",{"data-svelte-h":!0}),c(vn)!=="svelte-1you5gc"&&(vn.textContent=hs),da=u(n),wn=p(n,"P",{"data-svelte-h":!0}),c(wn)!=="svelte-iuriot"&&(wn.innerHTML=fs),ga=u(n),w=p(n,"DIV",{class:!0});var nt=r(w);xn=p(nt,"DIV",{class:!0,"data-svelte-h":!0}),c(xn)!=="svelte-1llzxwj"&&(xn.textContent=vs),st(yn.$$.fragment,nt),I=p(nt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(I)!=="svelte-3gzy4z"&&(I.textContent=ws),Jn=p(nt,"PRE",{class:!0});var zs=r(Jn);ma=d(zs,!1),zs.forEach(t),Zn=p(nt,"PRE",{class:!0});var Ys=r(Zn);ha=d(Ys,!1),Ys.forEach(t),nt.forEach(t),fa=u(n),Pn=p(n,"H2",{"data-svelte-h":!0}),c(Pn)!=="svelte-1viyqwu"&&(Pn.innerHTML=xs),va=u(n),_n=p(n,"P",{"data-svelte-h":!0}),c(_n)!=="svelte-vipnu6"&&(_n.innerHTML=ys),wa=u(n),Tn=p(n,"UL",{"data-svelte-h":!0}),c(Tn)!=="svelte-11rzinx"&&(Tn.innerHTML=Ps),xa=u(n),bn=p(n,"P",{"data-svelte-h":!0}),c(bn)!=="svelte-286i4h"&&(bn.innerHTML=_s),this.h()},h(){o(U,"class","remark-container__title"),gt.a=null,o(Hn,"class","language-js"),mt.a=null,o(Ln,"class","language-js"),ht.a=null,o(Mn,"class","language-js"),ft.a=null,o(An,"class","language-js"),o(g,"class","remark-container tip"),o(Y,"class","remark-container__title"),Pt.a=null,o(Sn,"class","language-js"),o(x,"class","remark-container tip"),o(H,"class","remark-container tip"),o($,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNq1Ut9LwzAQ/lfOPLVQylYVobAHhzAGiqITkW3Q2N7WYJeUJF1XRv9307XrOh3DB30puUv63ffjtoSmKfG3JBQREp+ECVUKHorbNAXcaOSRAnPezvhMhxKpxhdNpX6iS7TsXXemJepMcmgvqm454yUpHZKaWhF/uiUsIn7fIQuRRCjHdXE0tP2/HVwV9Yx2+hAXQuIdkxhqJrhqSdTf0LQ0CI6PcpILGMDKlZRHYjXm2uo74Nnd1w3xadPTLaybx8itA8wA+rZbSbHus/CzqHjZrjY0reCNKkiqZmA7v8DxGpxXnpxCyvgx1vxAtzw2YpSx7wFMDEyDNYmZgtHrGHKWJMaPpIAPhExhBIyDjhFSiWuGubMrzIWsn3Jcm6NCBKb3T82GuIHd4VASh2xMgNc9hxTE93q90qkD9s4F3Hp3LuATup5FrtwwZkkkjZt7kztq30UGVGKdw0UniGGmtUmh8UQWQJeU8aDJoF24ZilOSLz6KfHynMROrP8lslmRP5V505E5L78AGUdznw=="),o(P,"title","Open in our Online Editor"),Et.a=null,o(Rn,"class","language-js"),It.a=null,o(On,"class","language-js"),Ht.a=null,o(Dn,"class","language-js"),o(m,"class","remark-container tip"),o(L,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqdUl1rwjAU/SuXsIeWlVpleyn4MF9kD8MxZTDmwNhe12CblCTVldL/vtRo7GQfsIeE3Jvcc+45uQ2hZUnihiQiRRKTJKdKwUN9V5aAHxp5qsCcmyVf6kQi1TjXVOpH+o6ef8gutURdSQ7uosu2S96SNiCliRWJXxvCUhIPA7IReYry3gZfSF29I+4Cy2HWYACLjCnYUcnoOkdQmajyFLaIJWhJky2IDWRiDwXl9bFCswIV6AyhUighowrWiBwEN0kD1rUXdm95VaxRzjbPTDGtYAzRiVfwCW6EPMu1uwGfC0CaZAeSM0ciDpTiTBC4ij0C48bGArkGpmFdwzC0t2V40cL1GIZnwvbUjv2EacUu7X8SexUmGctTidw7VuqF8TLUZvNWL6IyBuyw5wD2TL9qLltorX3hyg9OcJNKG0OOgFPRyZwZGNkhrPywU+u5hG+r/F7/LQnIh/n62yggNYlHUdQGdjRGv42Gg/x+NP7vyWGimJ0QR/KHYGfZSbBL/Cz4pif4rf0EJb47Ww=="),o(_,"title","Open in our Online Editor"),jt.a=null,o(Bn,"class","language-js"),St.a=null,o(Un,"class","language-js"),o(f,"class","remark-container tip"),o(M,"class","remark-container tip"),o(tn,"class","remark-container__title"),Ut.a=null,o(Nn,"class","language-js"),o(T,"class","remark-container tip"),o(A,"class","remark-container tip"),o(G,"class","remark-container tip"),o(en,"class","remark-container__title"),Wt.a=null,o(Yn,"class","language-js"),o(b,"class","remark-container tip"),o(j,"class","remark-container tip"),o(cn,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNq1klFrwjAUhf9KvE8tlKLdxqAgwzEYwsaGcwyxgqGNWlaTktyipfS/L64x1rn55F5CcpOee757WgHNcwgriEXCIIQ4o0qR53KQ54RtkfFEEb2vIh5hLBlF9oZU4itdMsf9rkYoGRaSE3uxq9YRr6H2INdnBeG0gjSBsOfBQmQJk8PmcNTUfm8b7w5ND9v9sUh/9h2JjfLjVZolknGnuYpwrEV81IszHzGalAQFQVmSUhSSZEX8eTd3vf3j+wJRcPN8wlTH3rkGpu1hsEAmH1LJYkwFV9ZPs8a6hERw9iLHG0H6ZO1LyhOxHnJ0eh4J3PZrwzDdO7Gy/malaQ4yfdJz/d00nSdtvtyNxjWGP6j6JipbRGd0AqPzzrPflAp+rDU72DVzqMGDrc7vputBCWHQ7dZek29wLl/r+9L5TkRBqGTNDDp/xTrW4dMlTfnc8Nv/zT2N2iBenyJenUNsjfS/IE08F8W8bWHO6i9FTnTf"),o(C,"title","Open in our Online Editor"),Zt.a=null,o(Qn,"class","language-js"),Kt.a=null,o(Wn,"class","language-js"),Xt.a=null,o($n,"class","language-js"),o(h,"class","remark-container tip"),o(S,"class","remark-container tip"),ea.a=null,o(kn,"class","language-js"),o(dn,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNq1kE1LxDAQhv9KmFMLodRFL72tl8WDILt7M8LGZtwWShKSKe5S8t9NTY2r4N6EEDLvfLzzZAJpLTQTtEYhNNAO0nv2eF5by/BEqJVn8T0JLah1KAl3JB09ySMW5acqyCGNTrOcmNUgdIDAwcbYQ/M8Qa+gueHwZgaF7iEFP0xzfzaeg+SR3Tdj/9t3a9591Xb9oBzqIqUE7eOQiuJVHPZd71k81OG3yaHkX6X3I5HRS/HGMDJs/WrGpayaEYoslKmrXCDn3QJwOEWeu5rDGZpVXQeeeFfXePPI/+TNJtV14It/ScBZ+Bv49gL4JXwAMX3P2Q=="),o(E,"title","Open in our Online Editor"),oa.a=null,o(qn,"class","language-js"),ca.a=null,o(Fn,"class","language-js"),o(v,"class","remark-container tip"),ra.a=null,o(fn,"class","language-js"),o(xn,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNqlUd9rwjAQ/leOsIcWulplvhR8qMyJMMfY3NM61tietlCTkqRTKf3fl7TauR9uD4MQcnfffV/uu4rQoiB+RWKeIPFJnFMpYb4PigJwp5AlEvS7ClmoYoFU4aOiQt3TNVp2kw2VQFUKBl3BZOuQ1aR2SKFjSfznimQJ8fsOWfE8QTFrg0+iXX8nbIJWo1OfltlX3Qe+lW6cZnkikFltKVQLTeIqfVnRIs0k6KNS/BCJbOcIHZdKcXYAz9iKA13yUkGQZ7HGuWYGKzAp0+gyukErOhZNre/Zf7ON+fI7V9M9tA+cDeTIZB9sNNPXxCE77djQc8ie+APPq53W0cFvjnY6Pzva68EiRYmwzfIc1qiMQ5mAN5qXKGEl+AbMf4GKdblBpqRr2sxfYQTR9eQmeLpdvN4F80lkCgY6gsv+/zd2URWNJbVZmwk0dQ17pEKCntY9t7wpB8VPd9z63SXss9ZenVj7Ur8DuykVYw=="),o(I,"title","Open in our Online Editor"),ma.a=null,o(Jn,"class","language-js"),ha.a=null,o(Zn,"class","language-js"),o(w,"class","remark-container tip")},m(n,a){s(n,y,a),s(n,ut,a),s(n,R,a),s(n,it,a),s(n,O,a),s(n,rt,a),s(n,D,a),s(n,kt,a),s(n,B,a),s(n,dt,a),s(n,g,a),i(g,U),i(g,In),i(g,Hn),gt.m(Ws,Hn),i(g,Ln),mt.m($s,Ln),i(g,Mn),ht.m(qs,Mn),i(g,An),ft.m(Fs,An),s(n,vt,a),s(n,V,a),s(n,wt,a),s(n,N,a),s(n,xt,a),s(n,z,a),s(n,yt,a),s(n,x,a),i(x,Y),i(x,Gn),i(x,jn),i(x,Sn),Pt.m(Js,Sn),s(n,_t,a),s(n,H,a),s(n,Tt,a),s(n,Q,a),s(n,bt,a),s(n,W,a),s(n,Ct,a),s(n,m,a),i(m,$),et(q,m,null),i(m,P),i(m,Rn),Et.m(Zs,Rn),i(m,On),It.m(Ks,On),i(m,Dn),Ht.m(Xs,Dn),s(n,Lt,a),s(n,L,a),s(n,Mt,a),s(n,F,a),s(n,At,a),s(n,J,a),s(n,Gt,a),s(n,f,a),i(f,Z),et(K,f,null),i(f,_),i(f,Bn),jt.m(ne,Bn),i(f,Un),St.m(te,Un),s(n,Rt,a),s(n,M,a),s(n,Ot,a),s(n,X,a),s(n,Dt,a),s(n,nn,a),s(n,Bt,a),s(n,T,a),i(T,tn),i(T,Vn),i(T,Nn),Ut.m(ae,Nn),s(n,Vt,a),s(n,A,a),s(n,Nt,a),s(n,G,a),s(n,zt,a),s(n,an,a),s(n,Yt,a),s(n,sn,a),s(n,Qt,a),s(n,b,a),i(b,en),i(b,zn),i(b,Yn),Wt.m(se,Yn),s(n,$t,a),s(n,j,a),s(n,qt,a),s(n,pn,a),s(n,Ft,a),s(n,on,a),s(n,Jt,a),s(n,h,a),i(h,cn),et(ln,h,null),i(h,C),i(h,Qn),Zt.m(ee,Qn),i(h,Wn),Kt.m(pe,Wn),i(h,$n),Xt.m(oe,$n),s(n,na,a),s(n,S,a),s(n,ta,a),s(n,un,a),s(n,aa,a),s(n,rn,a),s(n,sa,a),s(n,kn,a),ea.m(ce,kn),s(n,pa,a),s(n,v,a),i(v,dn),et(gn,v,null),i(v,E),i(v,qn),oa.m(le,qn),i(v,Fn),ca.m(ue,Fn),s(n,la,a),s(n,mn,a),s(n,ua,a),s(n,hn,a),s(n,ia,a),s(n,fn,a),ra.m(ie,fn),s(n,ka,a),s(n,vn,a),s(n,da,a),s(n,wn,a),s(n,ga,a),s(n,w,a),i(w,xn),et(yn,w,null),i(w,I),i(w,Jn),ma.m(re,Jn),i(w,Zn),ha.m(ke,Zn),s(n,fa,a),s(n,Pn,a),s(n,va,a),s(n,_n,a),s(n,wa,a),s(n,Tn,a),s(n,xa,a),s(n,bn,a),ya=!0},p:ge,i(n){ya||(pt(q.$$.fragment,n),pt(K.$$.fragment,n),pt(ln.$$.fragment,n),pt(gn.$$.fragment,n),pt(yn.$$.fragment,n),ya=!0)},o(n){ot(q.$$.fragment,n),ot(K.$$.fragment,n),ot(ln.$$.fragment,n),ot(gn.$$.fragment,n),ot(yn.$$.fragment,n),ya=!1},d(n){n&&(t(y),t(ut),t(R),t(it),t(O),t(rt),t(D),t(kt),t(B),t(dt),t(g),t(vt),t(V),t(wt),t(N),t(xt),t(z),t(yt),t(x),t(_t),t(H),t(Tt),t(Q),t(bt),t(W),t(Ct),t(m),t(Lt),t(L),t(Mt),t(F),t(At),t(J),t(Gt),t(f),t(Rt),t(M),t(Ot),t(X),t(Dt),t(nn),t(Bt),t(T),t(Vt),t(A),t(Nt),t(G),t(zt),t(an),t(Yt),t(sn),t(Qt),t(b),t($t),t(j),t(qt),t(pn),t(Ft),t(on),t(Jt),t(h),t(na),t(S),t(ta),t(un),t(aa),t(rn),t(sa),t(kn),t(pa),t(v),t(la),t(mn),t(ua),t(hn),t(ia),t(fn),t(ka),t(vn),t(da),t(wn),t(ga),t(w),t(fa),t(Pn),t(va),t(_n),t(wa),t(Tn),t(xa),t(bn)),ct(q),ct(K),ct(ln),ct(gn),ct(yn)}}}class ye extends me{constructor(y){super(),he(this,y,null,fe,de,{})}}export{ye as component};
