import{s as se,n as ee}from"../chunks/scheduler.UQwd20JU.js";import{S as pe,i as oe,e as s,s as l,H as k,c as $n,a as e,g as c,b as u,d as r,n as d,h as t,f as nt,o,j as p,p as i,m as tt,t as at,k as st,l as et}from"../chunks/index.i__Fl8cY.js";import{V as pt}from"../chunks/ViewApp.m6vzcyjb.js";function ce(js){let h,Pa="<code>Page</code>",ot,O,Ta="On this page you find the documentation for the <code>Page</code> class.",ct,V,_a="Introduction",lt,N,ba="Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a button in it). After the user has interacted with the GUI on the page, the app will take the user to the next page and show the GUI of that one instead, and so on.",ut,U,Sa="To add a page to your app, create your own class that extends the <code>Page</code> class, and override some methods there to give your own <code>Page</code> class the specific behavior you want it to have. You can name your own <code>Page</code> classes whatever you want, but they need to have unique names within your app.",it,g,z,Ca="Example",Cn,Ba="Example showing the basic structure of a simple app.",Bn,rt,Ds=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,An,kt,Os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the StartPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,En,dt,Vs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the MenuPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,In,gt,Ns=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GameOverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the GameOverPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,mt,Y,Aa="The <code>p</code> variable",ht,Z,Ea="In Bagawork, you can use the special variable named <code>p</code>, short for <em>page</em>, to access the constants/variables/methods you have in your <code>Page</code> class. So, unlike the <code>a</code> variable, the <code>p</code> variable refers to different things in your different pages:",ft,W,Ia="<li>In the <code>HelloPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>HelloPage</code></li> <li>In the <code>AboutPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>AboutPage</code></li> <li>Etc.</li>",vt,m,J,Ma="Example",Mn,Ha="Example of a page with:",Hn,Ga="<li>A page constant</li> <li>A page variable</li> <li>A page method</li> ",Gn,xt,Us=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token string">"The constant value"</span>
	
	theVariableName <span class="token operator">=</span> <span class="token string">"The variable value"</span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use p.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use p.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use p.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wt,S,Ra='<div class="remark-container__title">The &quot;a&quot; variable</div><p>In your <code>Page</code> classes, you can also use the special Bagawork variable <code>a</code> to access the things you have in your <code>App</code> class. For more information, see the documentation for the <a href="/documentation/app/" title="Open the documentation for App.">App</a> class.</p>',yt,q,La="<code>createBeforeDirections()</code> - Redirecting the user to another page",Pt,K,ja='The method <code>createBeforeDirections()</code> will be called directly when the user comes to the page. In it, you can return an array of <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects. If there exists a <code>Direction</code> object that has <code>if</code> set to <code>true</code>, the user will immediately be taken to that page, and will never see the GUI of this page (no other methods on this page will be called, not even <code>onBefore()</code>).',Tt,C,F,Da="Example",f,X,v,Oa="Open in Online Editor",Rn,_t,zs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Ln,bt,Ys=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jn,St,Zs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ct,B,Va='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createBeforeDirections()</code> if you need it.</p>',Bt,Q,Na="<code>onBefore()</code> - Initializing the state of the page",At,$,Ua="The method <code>onBefore()</code> will be called each time the user comes to the page (before the page is shown on the screen).",Et,A,nn,za="Example",tn,an,x,Ya="Open in Online Editor",Dn,It,Ws=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Mt,E,Za='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>onBefore()</code> if you need it. Many simple pages can leave this method empty, or simply not have it at all.</p>',Ht,sn,Wa="<code>createGui()</code> - Creating the GUI",Gt,en,Ja="After <code>onBefore()</code> has been called, <code>createGui()</code> will be called. In this method you should create the GUI structure the page should have, and send back the GUI structure&#39;s root component. The app will then show the page&#39;s GUI on the user&#39;s screen.",Rt,w,pn,qa="Example",On,Ka="Example showing how to use <code>Page.createGui()</code>.",Vn,Lt,Js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskQuestionPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>YesPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>NoPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,jt,I,Fa='<div class="remark-container__title">The size of the root component</div><p>The root component in your GUI (the <code>Rows</code> component in the example above) will always be as wide and high as the screen itself.</p>',Dt,M,Xa='<div class="remark-container__title">Building the GUI</div><p>The GUI is built with the GUI Components from the Bagawork framework. In the sidebar on this page you have a list of them (<em>Views</em> and <em>Layouts</em>).</p>',Ot,on,Qa="<code>onAfter()</code> - Handling user input",Vt,cn,$a="When the user has interacted with your GUI (for example by clicking on a button in it) and should be taken to another page, <code>onAfter()</code> will be called, in which you can handle the user&#39;s input.",Nt,y,ln,ns="Example",Nn,ts="Example showing how to use <code>Page.onAfter()</code>.",Un,Ut,qs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskQuestionPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	startTimeInMs <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	answer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onYesAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onNoAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<span class="token punctuation">&#125;</span></code>`,zt,H,as='<div class="remark-container__title">Not needed?</div><p>You only need to handle user input in <code>onAfter()</code> if your app&#39;s logic require&#39;s that. Many simple apps can simply leave this method empty, or not have it at all.</p>',Yt,un,ss="<code>createAfterDirections()</code> - Redirecting the user to another page",Zt,rn,es='The method <code>createAfterDirections()</code> will be called after the user has interacted with the GUI. In it, you can return back an array with <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects, indicating which page the user should come to.',Wt,G,kn,ps="Example",P,dn,T,os="Open in Online Editor",zn,Jt,Ks=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Yn,qt,Fs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,Kt,Xs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,R,cs='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createAfterDirections()</code> if you need it.</p>',Xt,gn,ls="Referring to a page",Qt,mn,us='Sometimes you need to refer to a page you have created. For example, when the user clicks on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a>, you might want to take the user to the page you have created named <code>AboutPage</code>. To tell the <code>Button</code> that the user should come to that page when the <code>Button</code> is clicked, you call the configuration method <code>page()</code> on the <code>Button</code>, and you pass it the page the user should come to. To obtain that page, simply write the name you have given your page, e.g.:',$t,hn,na,Qs='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span></code>',ta,L,fn,is="Example",vn,xn,_,rs="Open in Online Editor",Wn,aa,$s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to AboutPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,sa,wn,ks="Page arguments",ea,yn,ds="When you specify a page the user should come to, you can also pass along arguments (values) to that page by using <em>page argument methods</em>. Page argument methods work the same way as configuration methods on GUI components, but with page argument methods, you decide the names. For example, if you want to pass along an argument named <code>age</code> with the value <code>10</code>, you would write:",pa,Pn,oa,ne='<code class="language-js">ThePageName<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></code>',ca,Tn,gs="You can name the argument whatever you want, and you can pass along how many page arguments you want.",la,_n,ms="The arguments will then be assigned to the page the user comes to, so you can access them through the <code>p</code> variable, e.g. use <code>p.age</code> to obtain the value.",ua,j,bn,hs="Example",D,Sn,b,fs="Open in Online Editor",Jn,ia,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,qn,ra,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token comment">// These will get their values from page arguments.</span>
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">DEFAULT_NAME</span><span class="token template-punctuation string">&#96;</span></span>
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ka;return X=new pt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:3,offsetY:46}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`,x:200,y:300},{id:5,folderId:1,code:`class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are lucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:538,y:149},{id:6,folderId:1,code:`class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are unlucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:630,y:503}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),an=new pt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`,x:200,y:300},{id:5,folderId:1,code:`class OtherPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the OtherPage.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:532,y:299}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),dn=new pt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:3,offsetY:46}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`,x:200,y:300},{id:5,folderId:1,code:`class LuckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are lucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:538,y:149},{id:6,folderId:1,code:`class UnluckyPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`You are unlucky!\`),
			Button.text(\`Try again\`).page(StartPage)
		)
	}
	
}`,x:630,y:503}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),xn=new pt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the StartPage\`),
			Button.text(\`Go to AboutPage\`).page(AboutPage)
		)
	}
	
}`,x:200,y:300},{id:5,folderId:1,code:`class AboutPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`This is the AboutPage.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:532,y:299}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),Sn=new pt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.children(\n			Text.text(`This is the StartPage`),\n			Button.text(`Info about Alice`).page(AboutPage.name(`Alice`).age(10)),\n			Button.text(`Info about Bob`).page(AboutPage.age(15).name(`Bob`)),\n		)\n	}\n	\n}",x:200,y:300},{id:5,folderId:1,code:`class AboutPage extends Page{
	
	// These will get their values from page arguments.
	name = \`DEFAULT_NAME\`
	age = -1
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.name} is \${p.age} years old.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:532,y:299}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){h=s("h1"),h.innerHTML=Pa,ot=l(),O=s("p"),O.innerHTML=Ta,ct=l(),V=s("h2"),V.textContent=_a,lt=l(),N=s("p"),N.textContent=ba,ut=l(),U=s("p"),U.innerHTML=Sa,it=l(),g=s("div"),z=s("div"),z.textContent=Ca,Cn=s("p"),Cn.textContent=Ba,Bn=s("pre"),rt=new k(!1),An=s("pre"),kt=new k(!1),En=s("pre"),dt=new k(!1),In=s("pre"),gt=new k(!1),mt=l(),Y=s("h2"),Y.innerHTML=Aa,ht=l(),Z=s("p"),Z.innerHTML=Ea,ft=l(),W=s("ul"),W.innerHTML=Ia,vt=l(),m=s("div"),J=s("div"),J.textContent=Ma,Mn=s("p"),Mn.textContent=Ha,Hn=s("ul"),Hn.innerHTML=Ga,Gn=s("pre"),xt=new k(!1),wt=l(),S=s("div"),S.innerHTML=Ra,yt=l(),q=s("h2"),q.innerHTML=La,Pt=l(),K=s("p"),K.innerHTML=ja,Tt=l(),C=s("div"),F=s("div"),F.textContent=Da,f=s("div"),$n(X.$$.fragment),v=s("a"),v.textContent=Oa,Rn=s("pre"),_t=new k(!1),Ln=s("pre"),bt=new k(!1),jn=s("pre"),St=new k(!1),Ct=l(),B=s("div"),B.innerHTML=Va,Bt=l(),Q=s("h2"),Q.innerHTML=Na,At=l(),$=s("p"),$.innerHTML=Ua,Et=l(),A=s("div"),nn=s("div"),nn.textContent=za,tn=s("div"),$n(an.$$.fragment),x=s("a"),x.textContent=Ya,Dn=s("pre"),It=new k(!1),Mt=l(),E=s("div"),E.innerHTML=Za,Ht=l(),sn=s("h2"),sn.innerHTML=Wa,Gt=l(),en=s("p"),en.innerHTML=Ja,Rt=l(),w=s("div"),pn=s("div"),pn.textContent=qa,On=s("p"),On.innerHTML=Ka,Vn=s("pre"),Lt=new k(!1),jt=l(),I=s("div"),I.innerHTML=Fa,Dt=l(),M=s("div"),M.innerHTML=Xa,Ot=l(),on=s("h2"),on.innerHTML=Qa,Vt=l(),cn=s("p"),cn.innerHTML=$a,Nt=l(),y=s("div"),ln=s("div"),ln.textContent=ns,Nn=s("p"),Nn.innerHTML=ts,Un=s("pre"),Ut=new k(!1),zt=l(),H=s("div"),H.innerHTML=as,Yt=l(),un=s("h1"),un.innerHTML=ss,Zt=l(),rn=s("p"),rn.innerHTML=es,Wt=l(),G=s("div"),kn=s("div"),kn.textContent=ps,P=s("div"),$n(dn.$$.fragment),T=s("a"),T.textContent=os,zn=s("pre"),Jt=new k(!1),Yn=s("pre"),qt=new k(!1),Zn=s("pre"),Kt=new k(!1),Ft=l(),R=s("div"),R.innerHTML=cs,Xt=l(),gn=s("h2"),gn.textContent=ls,Qt=l(),mn=s("p"),mn.innerHTML=us,$t=l(),hn=s("pre"),na=new k(!1),ta=l(),L=s("div"),fn=s("div"),fn.textContent=is,vn=s("div"),$n(xn.$$.fragment),_=s("a"),_.textContent=rs,Wn=s("pre"),aa=new k(!1),sa=l(),wn=s("h2"),wn.textContent=ks,ea=l(),yn=s("p"),yn.innerHTML=ds,pa=l(),Pn=s("pre"),oa=new k(!1),ca=l(),Tn=s("p"),Tn.textContent=gs,la=l(),_n=s("p"),_n.innerHTML=ms,ua=l(),j=s("div"),bn=s("div"),bn.textContent=hs,D=s("div"),$n(Sn.$$.fragment),b=s("a"),b.textContent=fs,Jn=s("pre"),ia=new k(!1),qn=s("pre"),ra=new k(!1),this.h()},l(n){h=e(n,"H1",{"data-svelte-h":!0}),c(h)!=="svelte-6v4miu"&&(h.innerHTML=Pa),ot=u(n),O=e(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-1siju2j"&&(O.innerHTML=Ta),ct=u(n),V=e(n,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-1ukekoe"&&(V.textContent=_a),lt=u(n),N=e(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-akv8dx"&&(N.textContent=ba),ut=u(n),U=e(n,"P",{"data-svelte-h":!0}),c(U)!=="svelte-8e5npz"&&(U.innerHTML=Sa),it=u(n),g=e(n,"DIV",{class:!0});var a=r(g);z=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=Ca),Cn=e(a,"P",{"data-svelte-h":!0}),c(Cn)!=="svelte-yeohz4"&&(Cn.textContent=Ba),Bn=e(a,"PRE",{class:!0});var vs=r(Bn);rt=d(vs,!1),vs.forEach(t),An=e(a,"PRE",{class:!0});var xs=r(An);kt=d(xs,!1),xs.forEach(t),En=e(a,"PRE",{class:!0});var ws=r(En);dt=d(ws,!1),ws.forEach(t),In=e(a,"PRE",{class:!0});var ys=r(In);gt=d(ys,!1),ys.forEach(t),a.forEach(t),mt=u(n),Y=e(n,"H2",{"data-svelte-h":!0}),c(Y)!=="svelte-184d04"&&(Y.innerHTML=Aa),ht=u(n),Z=e(n,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1m1ybq9"&&(Z.innerHTML=Ea),ft=u(n),W=e(n,"UL",{"data-svelte-h":!0}),c(W)!=="svelte-1s1btu1"&&(W.innerHTML=Ia),vt=u(n),m=e(n,"DIV",{class:!0});var Xn=r(m);J=e(Xn,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-1llzxwj"&&(J.textContent=Ma),Mn=e(Xn,"P",{"data-svelte-h":!0}),c(Mn)!=="svelte-isxtel"&&(Mn.textContent=Ha),Hn=e(Xn,"UL",{"data-svelte-h":!0}),c(Hn)!=="svelte-3wu0k8"&&(Hn.innerHTML=Ga),Gn=e(Xn,"PRE",{class:!0});var Ps=r(Gn);xt=d(Ps,!1),Ps.forEach(t),Xn.forEach(t),wt=u(n),S=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-hlrhmg"&&(S.innerHTML=Ra),yt=u(n),q=e(n,"H2",{"data-svelte-h":!0}),c(q)!=="svelte-zo36s1"&&(q.innerHTML=La),Pt=u(n),K=e(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-1b5hz23"&&(K.innerHTML=ja),Tt=u(n),C=e(n,"DIV",{class:!0});var fa=r(C);F=e(fa,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-1llzxwj"&&(F.textContent=Da),f=e(fa,"DIV",{});var Kn=r(f);nt(X.$$.fragment,Kn),v=e(Kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(v)!=="svelte-7cmsbr"&&(v.textContent=Oa),Rn=e(Kn,"PRE",{class:!0});var Ts=r(Rn);_t=d(Ts,!1),Ts.forEach(t),Ln=e(Kn,"PRE",{class:!0});var _s=r(Ln);bt=d(_s,!1),_s.forEach(t),jn=e(Kn,"PRE",{class:!0});var bs=r(jn);St=d(bs,!1),bs.forEach(t),Kn.forEach(t),fa.forEach(t),Ct=u(n),B=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(B)!=="svelte-1g1h9i1"&&(B.innerHTML=Va),Bt=u(n),Q=e(n,"H2",{"data-svelte-h":!0}),c(Q)!=="svelte-mzgb"&&(Q.innerHTML=Na),At=u(n),$=e(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-1fss7ur"&&($.innerHTML=Ua),Et=u(n),A=e(n,"DIV",{class:!0});var va=r(A);nn=e(va,"DIV",{class:!0,"data-svelte-h":!0}),c(nn)!=="svelte-1llzxwj"&&(nn.textContent=za),tn=e(va,"DIV",{});var da=r(tn);nt(an.$$.fragment,da),x=e(da,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-p1t8pv"&&(x.textContent=Ya),Dn=e(da,"PRE",{class:!0});var Ss=r(Dn);It=d(Ss,!1),Ss.forEach(t),da.forEach(t),va.forEach(t),Mt=u(n),E=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(E)!=="svelte-ou7j3"&&(E.innerHTML=Za),Ht=u(n),sn=e(n,"H2",{"data-svelte-h":!0}),c(sn)!=="svelte-9f0kzb"&&(sn.innerHTML=Wa),Gt=u(n),en=e(n,"P",{"data-svelte-h":!0}),c(en)!=="svelte-1b12sfg"&&(en.innerHTML=Ja),Rt=u(n),w=e(n,"DIV",{class:!0});var ga=r(w);pn=e(ga,"DIV",{class:!0,"data-svelte-h":!0}),c(pn)!=="svelte-1llzxwj"&&(pn.textContent=qa),On=e(ga,"P",{"data-svelte-h":!0}),c(On)!=="svelte-9kj2bp"&&(On.innerHTML=Ka),Vn=e(ga,"PRE",{class:!0});var Cs=r(Vn);Lt=d(Cs,!1),Cs.forEach(t),ga.forEach(t),jt=u(n),I=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-jkmjm7"&&(I.innerHTML=Fa),Dt=u(n),M=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(M)!=="svelte-i0k36e"&&(M.innerHTML=Xa),Ot=u(n),on=e(n,"H2",{"data-svelte-h":!0}),c(on)!=="svelte-bjryoo"&&(on.innerHTML=Qa),Vt=u(n),cn=e(n,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-g06us9"&&(cn.innerHTML=$a),Nt=u(n),y=e(n,"DIV",{class:!0});var ma=r(y);ln=e(ma,"DIV",{class:!0,"data-svelte-h":!0}),c(ln)!=="svelte-1llzxwj"&&(ln.textContent=ns),Nn=e(ma,"P",{"data-svelte-h":!0}),c(Nn)!=="svelte-2fyuhr"&&(Nn.innerHTML=ts),Un=e(ma,"PRE",{class:!0});var Bs=r(Un);Ut=d(Bs,!1),Bs.forEach(t),ma.forEach(t),zt=u(n),H=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(H)!=="svelte-12kti89"&&(H.innerHTML=as),Yt=u(n),un=e(n,"H1",{"data-svelte-h":!0}),c(un)!=="svelte-f3u1mm"&&(un.innerHTML=ss),Zt=u(n),rn=e(n,"P",{"data-svelte-h":!0}),c(rn)!=="svelte-1adb52t"&&(rn.innerHTML=es),Wt=u(n),G=e(n,"DIV",{class:!0});var xa=r(G);kn=e(xa,"DIV",{class:!0,"data-svelte-h":!0}),c(kn)!=="svelte-1llzxwj"&&(kn.textContent=ps),P=e(xa,"DIV",{});var Fn=r(P);nt(dn.$$.fragment,Fn),T=e(Fn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-1u4egpb"&&(T.textContent=os),zn=e(Fn,"PRE",{class:!0});var As=r(zn);Jt=d(As,!1),As.forEach(t),Yn=e(Fn,"PRE",{class:!0});var Es=r(Yn);qt=d(Es,!1),Es.forEach(t),Zn=e(Fn,"PRE",{class:!0});var Is=r(Zn);Kt=d(Is,!1),Is.forEach(t),Fn.forEach(t),xa.forEach(t),Ft=u(n),R=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-14817j4"&&(R.innerHTML=cs),Xt=u(n),gn=e(n,"H2",{"data-svelte-h":!0}),c(gn)!=="svelte-1wzt5at"&&(gn.textContent=ls),Qt=u(n),mn=e(n,"P",{"data-svelte-h":!0}),c(mn)!=="svelte-10amdzf"&&(mn.innerHTML=us),$t=u(n),hn=e(n,"PRE",{class:!0});var Ms=r(hn);na=d(Ms,!1),Ms.forEach(t),ta=u(n),L=e(n,"DIV",{class:!0});var wa=r(L);fn=e(wa,"DIV",{class:!0,"data-svelte-h":!0}),c(fn)!=="svelte-1llzxwj"&&(fn.textContent=is),vn=e(wa,"DIV",{});var ha=r(vn);nt(xn.$$.fragment,ha),_=e(ha,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1h6fu1o"&&(_.textContent=rs),Wn=e(ha,"PRE",{class:!0});var Hs=r(Wn);aa=d(Hs,!1),Hs.forEach(t),ha.forEach(t),wa.forEach(t),sa=u(n),wn=e(n,"H2",{"data-svelte-h":!0}),c(wn)!=="svelte-1yw68nt"&&(wn.textContent=ks),ea=u(n),yn=e(n,"P",{"data-svelte-h":!0}),c(yn)!=="svelte-yhopvq"&&(yn.innerHTML=ds),pa=u(n),Pn=e(n,"PRE",{class:!0});var Gs=r(Pn);oa=d(Gs,!1),Gs.forEach(t),ca=u(n),Tn=e(n,"P",{"data-svelte-h":!0}),c(Tn)!=="svelte-1you5gc"&&(Tn.textContent=gs),la=u(n),_n=e(n,"P",{"data-svelte-h":!0}),c(_n)!=="svelte-iuriot"&&(_n.innerHTML=ms),ua=u(n),j=e(n,"DIV",{class:!0});var ya=r(j);bn=e(ya,"DIV",{class:!0,"data-svelte-h":!0}),c(bn)!=="svelte-1llzxwj"&&(bn.textContent=hs),D=e(ya,"DIV",{});var Qn=r(D);nt(Sn.$$.fragment,Qn),b=e(Qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(b)!=="svelte-9o5zy"&&(b.textContent=fs),Jn=e(Qn,"PRE",{class:!0});var Rs=r(Jn);ia=d(Rs,!1),Rs.forEach(t),qn=e(Qn,"PRE",{class:!0});var Ls=r(qn);ra=d(Ls,!1),Ls.forEach(t),Qn.forEach(t),ya.forEach(t),this.h()},h(){o(z,"class","remark-container__title"),rt.a=null,o(Bn,"class","language-js"),kt.a=null,o(An,"class","language-js"),dt.a=null,o(En,"class","language-js"),gt.a=null,o(In,"class","language-js"),o(g,"class","remark-container tip"),o(J,"class","remark-container__title"),xt.a=null,o(Gn,"class","language-js"),o(m,"class","remark-container tip"),o(S,"class","remark-container tip"),o(F,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNrFVGtr2zAU/SuaviwGYxynCZ2hDHcbJbBHWVO60Aai2deJqSIZSW5qgv/75PhRK7ghGxv7YKPHvcf3nHOvd5ikKfZ3OOQRYB+HlEiJvuRBmiJ4VsAiifR698AeVPmEAoiCG0WEuiYrGFjVjRKgMsFQe1GeFlVSgQsbx5xGICT273c4ibA/tDEjm/KL+xRsYx7HEtQP7I+a9Rz7Z5NiYeNUAxqpFdq02hiVtwW01Zebg/IvIeYCPiYCQpVwJlsW1TvURwpxBt/EbMvRBdo4grCIb6ZMDYY28qxudM38vj5TLayzXQMbvMBcoKHllFQGn7PwMS/rshylyxws74hEtDxcWvYJOF6Nc8toH1LGTKzFS7mFKcRVlhw6ONMwNdZsnUh0dTtF24RSrQfN0U9AmYQIJQypNaBUwFMCW3u/0ReiCmXwpJcSACWqCdVt5iwtoy1s/Ix9z3VtnGvXXbewK4PHxwxutTtmcA+v73wrnXCd0EhoNRuRO2znPENEQOXDm44Rl5lS2oVaE5EjsiIJW9YetA1XN0UPxfHofE9xePauoTg5RrFj678iWbfIX6U5GVVOjt1RM7Qz2KRUl2oMr8E1kI/TOIgyemRoOasG1hjT4g/FuElJCHaPNIGWJdfy7G3RLUsYGp6/7whkZn7gNNuwng8cBh4o+5U3krKMUss+MW0O8rS85sYyROIsiBWIPgXL33PljXfgzSemU4IV/G9n7tZEvZWlOUI3JbzuiaHY0O0XzAwanxDknYLkvYLUrfB3PFkUvwBFKL2t"),o(v,"title","Open in our Online Editor"),_t.a=null,o(Rn,"class","language-js"),bt.a=null,o(Ln,"class","language-js"),St.a=null,o(jn,"class","language-js"),o(C,"class","remark-container tip"),o(B,"class","remark-container tip"),o(nn,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrFVNFumzAU/ZUra1KDhiihirQiVROdpqoPW6cl2ha1leLApaCAjWzTNIr49xoIJCDSZX3ZQxDYPufce851toRmGXG3xOcBEpf4CZUSvm28LAN8UcgCCfp9+8AeVPnzBVKFU0WF+kGfcGTUO0qgygWDdqNcLWpQQQqThDwJUEji3m9JHBB3bBJG01KxghCT8DCUqP4Q127e5/q9eDRJpvk6yJrstv7oFN7qt8WXH2315+cwi2IJz1TEdJkgyIjnSQArxAyUoP4KeAgRX0NK2WaHUHGKElSEkEsUEFEJS0QGnOlFTVaWZ5VnWZ4uUdyFv2IZKwlXYDe6nF1jyMXervqpyacckPpRJbLX8HklyfcCZotYI8RMx5AiUxArWG5gbNW7mdUr4eMVjPeCRTfEmzzux/eTr6XlR3ESCGSjHVLNtJeW0o/RYs5zbcAzHjiAB6Z/2PZLKGr7rIVhNnTXudKG7AhveNnmnaYRJcPCsMpuR+2CUaOMzjyZ5IW4jq0HZUPcC9suzHo0Jm+NRks5PBrv96SaqLiekFbkLw23ljUNtwvHG55cOFXDzuVlcytmmGaJLrtzOzpde3J1G3pBnrxxKwan873DMs2oj+aATZ5A2OjxqQLSZlEG40+fD2zqIr/wJE/ZgED/YM/f77yxlOVJYpgnwuYoT8M1O0bHJM68UKEYcrD8+6uzcXrZfGUa4j3h/07md0TVmSzDEaDVj2fScWxsDxvWPTQ54ZBzCpNzhOmwwn/J5LF4BT88hSY="),o(x,"title","Open in our Online Editor"),It.a=null,o(Dn,"class","language-js"),o(A,"class","remark-container tip"),o(E,"class","remark-container tip"),o(pn,"class","remark-container__title"),Lt.a=null,o(Vn,"class","language-js"),o(w,"class","remark-container tip"),o(I,"class","remark-container tip"),o(M,"class","remark-container tip"),o(ln,"class","remark-container__title"),Ut.a=null,o(Un,"class","language-js"),o(y,"class","remark-container tip"),o(H,"class","remark-container tip"),o(kn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNrFVH+LmzAY/iq5/LMKoai9HjfhGN42RmG/uOu4lWuhQV9bOZtIEulJ8bsvNuppZ0s3buwPRc37Pnl++GaHaZpib4cDHgL2cJBQKdGX3E9TBM8KWCiRft7N2VyVVyCAKrhXVKjvdAUDy6woASoTDDUL5dfCNBW4IDjiSQhCYu9xh+MQew7BjG7KHfctmGAeRRLUT+yN6ucZ9i6vigXBqQbstBq0iXnpMG8INOzLlwP6n7L4kPgd38phsI6TUAAbmKW5mmqQodK3wfIOaJgjxZESOcp5JlCSBU/vlhapi28zpTirymcgL5o1q+VGzcGPFIgPsYBAxZzJho+5B/qTQpzBNzHdcnSDNkNBWcg3E6YGDkGu1a6uNDzWTBrY4Xat1bzA3CDHGpZuDj5r8nlpjVURfqByryhvKTqB41Y4P1jSh5SxLtbihW7zVxD8jD3XtgnOdei2XRCT7/hUvg3v1853xjNEBRgPLo7FOtXh0xWN2bLS3/xv1u9RVxLHo+u9ROfybS3x6pTElqX/SmQVz6vKvBqZJMf2qJ7ZKWzSRFPtzG5Hqy+fJpEfZsmJmeXsFiIuoDMixV+acZ/SAEiPNb62RY812seC1Joy5Fy3x7vb+Z4n2Yb1bHBYeODsV15byrIksciZbfo4Oa+v/8jhbH/c9DlYns4mG/cgm49Mt/gr+N/JPKypeiPNmat3P55JxzHH7jesWzQ+o8g9B8k9gtRm+CeZLIpfbaW+7Q=="),o(T,"title","Open in our Online Editor"),Jt.a=null,o(zn,"class","language-js"),qt.a=null,o(Yn,"class","language-js"),Kt.a=null,o(Zn,"class","language-js"),o(G,"class","remark-container tip"),o(R,"class","remark-container tip"),na.a=null,o(hn,"class","language-js"),o(fn,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNrFU1FLwzAQ/ivhXlwhjK5joH2RTkT2oIgbqDjB2F7dsEtKkuLG6H83XWxdyja2BxHakuTuu7vv+9I1sDyHcA2xSBBCiDOmFLldRXlOcKmRJ4qY9XrKp7p6Y4lM41gzqe/ZB3Y8G9ESdSE5aQLVaWlBJZQUUpElKBWEL2uYJxD2KHC2qDpuIEBBpKlC/QShX6+fzbp8pZCbeg7SFhvZjTN4078Zvtq0pr8p5u25H8SX6sazeZZI5B0bmuqJKdLV5tN5m8zmiphHz/C3yZtH69RhobXgP8k3gmhBondR/KR1Kwqd5sCzKM8RicISwsA37FcQ9n2/pJbv4BDfpuRf8m2adA8T3tLFEm4O9hMe9IMN4eDiorZ6gos8M2M7lrus1ecojZIiO0Bd8CGmQv7e0K3eJwszzlmMdIdMkUSyEgXZGGTEYpz0zi+3ZHKRVyIrFnxHg3ZiS987UUvKiyzz6JGwZ1TH4eqI54gkeJRqlLsUrP5p603Q8uaaG0j0gf/tzOOM6TNVmSOJ6b7fE0exnr9bMDdpcERScEylYE+l7QlP8eS1/AZryhmz"),o(_,"title","Open in our Online Editor"),aa.a=null,o(Wn,"class","language-js"),o(L,"class","remark-container tip"),oa.a=null,o(Pn,"class","language-js"),o(bn,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNrFlGFr2zAQhv/KIQaLwXUdl8BqKMPZshJYy1hTtrKURbXPiZkiGUluG4L/+yS7TuPM6VL2YZAEyXf33ul55awJzXMSrkksEiQhiRlVCi5WUZ4DPmrkiQKzXk/5VNtvLJFqvNJU6i90jj2njmiJupAcNgH7tKyLSlK6JBUsQalI+GNNsoSEfZdwurQdqxLiEpGmCvV3EvrN+sasy1uX5EavVVmLjetNa/BN/83wdrMz/XmR7c79VTwoL15kLJHIe3VoqidGxNPmpzebLDIF5qMX+Nxk5rhN6rDQWvCn5DFPBdA7UWiIWBabPM+eoRfZR7bQs2fvzZqgjfV95+9qQ3H3p1ZVPXCeNKuURslp2eCSRxIGvuG7IuGJ75duTXTwEtFNn26ix8cwWaBCeMgYgzlqSyiTcE9ZgQpSKZZg5wUq58USuVaeLbOzwhnMPo4+RdefJz8vo4vRzAZs6hkc9f/dsTfrvEJSWtvsxkiXsEIqFZjTevvMOxegxbbHNe/NA2cv2sFJUKENTk+bazvBZc7MAVrXt81X/RqnUVKwFyALPsRUyOe3bav3qxFd5TRGtwNYJBFWooDqKhgbKYf+u/dbmNqVHwQrlryjwW7iDt9L0SDlBWOOe2DZDarD6rruvkUYpRplF0H7/1R7E+x4M+KmJJrj/3bm24Lqt8qaI8F03+9Ji1jf7wbWThockBQcohTsUdqe8DWe3Ja/Ae2kXy4="),o(b,"title","Open in our Online Editor"),ia.a=null,o(Jn,"class","language-js"),ra.a=null,o(qn,"class","language-js"),o(j,"class","remark-container tip")},m(n,a){p(n,h,a),p(n,ot,a),p(n,O,a),p(n,ct,a),p(n,V,a),p(n,lt,a),p(n,N,a),p(n,ut,a),p(n,U,a),p(n,it,a),p(n,g,a),i(g,z),i(g,Cn),i(g,Bn),rt.m(Ds,Bn),i(g,An),kt.m(Os,An),i(g,En),dt.m(Vs,En),i(g,In),gt.m(Ns,In),p(n,mt,a),p(n,Y,a),p(n,ht,a),p(n,Z,a),p(n,ft,a),p(n,W,a),p(n,vt,a),p(n,m,a),i(m,J),i(m,Mn),i(m,Hn),i(m,Gn),xt.m(Us,Gn),p(n,wt,a),p(n,S,a),p(n,yt,a),p(n,q,a),p(n,Pt,a),p(n,K,a),p(n,Tt,a),p(n,C,a),i(C,F),i(C,f),tt(X,f,null),i(f,v),i(f,Rn),_t.m(zs,Rn),i(f,Ln),bt.m(Ys,Ln),i(f,jn),St.m(Zs,jn),p(n,Ct,a),p(n,B,a),p(n,Bt,a),p(n,Q,a),p(n,At,a),p(n,$,a),p(n,Et,a),p(n,A,a),i(A,nn),i(A,tn),tt(an,tn,null),i(tn,x),i(tn,Dn),It.m(Ws,Dn),p(n,Mt,a),p(n,E,a),p(n,Ht,a),p(n,sn,a),p(n,Gt,a),p(n,en,a),p(n,Rt,a),p(n,w,a),i(w,pn),i(w,On),i(w,Vn),Lt.m(Js,Vn),p(n,jt,a),p(n,I,a),p(n,Dt,a),p(n,M,a),p(n,Ot,a),p(n,on,a),p(n,Vt,a),p(n,cn,a),p(n,Nt,a),p(n,y,a),i(y,ln),i(y,Nn),i(y,Un),Ut.m(qs,Un),p(n,zt,a),p(n,H,a),p(n,Yt,a),p(n,un,a),p(n,Zt,a),p(n,rn,a),p(n,Wt,a),p(n,G,a),i(G,kn),i(G,P),tt(dn,P,null),i(P,T),i(P,zn),Jt.m(Ks,zn),i(P,Yn),qt.m(Fs,Yn),i(P,Zn),Kt.m(Xs,Zn),p(n,Ft,a),p(n,R,a),p(n,Xt,a),p(n,gn,a),p(n,Qt,a),p(n,mn,a),p(n,$t,a),p(n,hn,a),na.m(Qs,hn),p(n,ta,a),p(n,L,a),i(L,fn),i(L,vn),tt(xn,vn,null),i(vn,_),i(vn,Wn),aa.m($s,Wn),p(n,sa,a),p(n,wn,a),p(n,ea,a),p(n,yn,a),p(n,pa,a),p(n,Pn,a),oa.m(ne,Pn),p(n,ca,a),p(n,Tn,a),p(n,la,a),p(n,_n,a),p(n,ua,a),p(n,j,a),i(j,bn),i(j,D),tt(Sn,D,null),i(D,b),i(D,Jn),ia.m(te,Jn),i(D,qn),ra.m(ae,qn),ka=!0},p:ee,i(n){ka||(at(X.$$.fragment,n),at(an.$$.fragment,n),at(dn.$$.fragment,n),at(xn.$$.fragment,n),at(Sn.$$.fragment,n),ka=!0)},o(n){st(X.$$.fragment,n),st(an.$$.fragment,n),st(dn.$$.fragment,n),st(xn.$$.fragment,n),st(Sn.$$.fragment,n),ka=!1},d(n){n&&(t(h),t(ot),t(O),t(ct),t(V),t(lt),t(N),t(ut),t(U),t(it),t(g),t(mt),t(Y),t(ht),t(Z),t(ft),t(W),t(vt),t(m),t(wt),t(S),t(yt),t(q),t(Pt),t(K),t(Tt),t(C),t(Ct),t(B),t(Bt),t(Q),t(At),t($),t(Et),t(A),t(Mt),t(E),t(Ht),t(sn),t(Gt),t(en),t(Rt),t(w),t(jt),t(I),t(Dt),t(M),t(Ot),t(on),t(Vt),t(cn),t(Nt),t(y),t(zt),t(H),t(Yt),t(un),t(Zt),t(rn),t(Wt),t(G),t(Ft),t(R),t(Xt),t(gn),t(Qt),t(mn),t($t),t(hn),t(ta),t(L),t(sa),t(wn),t(ea),t(yn),t(pa),t(Pn),t(ca),t(Tn),t(la),t(_n),t(ua),t(j)),et(X),et(an),et(dn),et(xn),et(Sn)}}}class re extends pe{constructor(h){super(),oe(this,h,null,ce,se,{})}}export{re as component};
