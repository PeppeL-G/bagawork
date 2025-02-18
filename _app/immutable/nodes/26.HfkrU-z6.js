import{s as xe,n as ye}from"../chunks/scheduler.B0TnBjPs.js";import{S as Pe,i as Te,e,s as l,H as k,c as ot,a as p,g as c,b as u,d as r,n as d,h as t,f as ct,o,j as s,p as i,m as lt,t as ut,k as it,l as rt}from"../chunks/index.BXVnRmkj.js";import{V as kt}from"../chunks/ViewApp.qg7AIhJt.js";function _e(Xs){let P,La="<code>Page</code>",mt,R,Aa="On this page you find the documentation for the <code>Page</code> class.",gt,B,Sa="Introduction",ht,N,Ma='Your app consists of different pages. One page at a time will be shown to the user, so each page has its own graphical user interface (GUI). The user can interact with the GUI in a page (for example by clicking on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> in it). After the user has interacted with the GUI on the page, the app will take the user to the next page and show the GUI of that one instead, and so on.',ft,U,Ia="To add a page to your app, create your own class that extends the <code>Page</code> class, and override some methods there to give your own <code>Page</code> class the specific behavior you want it to have. You can name your own <code>Page</code> classes whatever you want, but they all need to have unique names within your app.",vt,m,Y,Ga="Example",Mn,Oa="Example showing the basic structure of a simple app.",In,wt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Gn,xt,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the StartPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,On,yt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the MenuPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,jn,Pt,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GameOverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// Override methods here to give the GameOverPage</span>
	<span class="token comment">// the specific behavior you want it to have.</span>
<span class="token punctuation">&#125;</span></code>`,Tt,A,ja='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a>, you can click on existing page to view and modify the code for it, or you can click on the grid-background to create a new page.</p>',_t,V,Da="The <code>p</code> variable",bt,W,Ra="In BagaWork, you can use the special variable named <code>p</code>, short for <em>page</em>, to access the constants/variables/methods you have in your <code>Page</code> class. So, unlike the <code>a</code> variable, the <code>p</code> variable refers to different things in your different pages:",Ct,q,Ba="<li>In the <code>HelloPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>HelloPage</code></li> <li>In the <code>AboutPage</code>, you can use <code>p</code> to access the constants/variables/methods you have in the <code>AboutPage</code></li> <li>Etc.</li>",Et,y,z,Na="Example",Dn,Ua="Example of a page with:",Rn,Ya="<li>A page constant</li> <li>A page variable</li> <li>A page method</li> ",Bn,Ht,ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">THE_CONSTANT_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The constant value</span><span class="token template-punctuation string">&#96;</span></span>
	
	theVariableName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The variable value</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">theMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Can use p.THE_CONSTANT_NAME to access the constant value.</span>
		<span class="token comment">// Can use p.theVariableName to access the variable value.</span>
		<span class="token comment">// Can use p.theMethodName to access the method.</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,S,Va='<div class="remark-container__title">The &quot;a&quot; variable</div><p>In your <code>Page</code> classes you can also use the special BagaWork variable <a href="/documentation/a/" title="Open the documentation for a.">a</a> to access the things you have in your <a href="/documentation/app/" title="Open the documentation for App.">App</a> class. For more information, see the documentation for the <a href="/documentation/app/" title="Open the documentation for App.">App</a> class.</p>',At,J,Wa="<code>createBeforeDirections()</code> - Redirecting the user to another page",St,$,qa='The method <code>createBeforeDirections()</code> will be called directly when the user comes to the page. In it, you can return an array of <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects. If there exists a <code>Direction</code> object that has <code>when()</code> set to <code>true</code>, the user will immediately be taken to that page, and will never see the GUI of this page (no other methods on this page will be called, not even <code>onBefore()</code>).',Mt,g,F,za="Example",Q,T,Ja="Open in Online Editor",Nn,It,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createBeforeDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> oneOrTwo <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>LuckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was lucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Direction<span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>oneOrTwo <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>UnluckyPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Was unlucky</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This GUI will only be used in the preview, the user will never see it in the app, because there will always be a before direction that is true in this case.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Un,Gt,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Yn,Ot,ce=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jt,M,$a='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createBeforeDirections()</code> if you need it. Most pages will not need it, and can simply leave the method empty, or not have it at all.</p>',Dt,K,Fa="<code>onBefore()</code> - Initializing the state of the page",Rt,Z,Qa="The method <code>onBefore()</code> will be called each time the user comes to the page (before the page is shown on the screen).",Bt,f,X,Ka="Example",nn,_,Za="Open in Online Editor",Vn,Nt,le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token comment">// This variable should keep track of how</span>
	<span class="token comment">// many times the user has been on this page.</span>
	numberOfVisits <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// So each time the user comes to</span>
		<span class="token comment">// this page, we increment it by 1.</span>
		p<span class="token punctuation">.</span>numberOfVisits <span class="token operator">+=</span> <span class="token number">1</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have been on the StartPage </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfVisits<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to OtherPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>OtherPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Wn,Ut,ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">OtherPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the OtherPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Yt,I,Xa='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>onBefore()</code> if you need it. Many simple pages can leave this method empty, or simply not have it at all.</p>',Vt,tn,ns="<code>createGui()</code> - Creating the GUI",Wt,an,ts="After <code>onBefore()</code> has been called, <code>createGui()</code> will be called. In this method you should create the GUI structure the page should have, and send back the GUI structure&#39;s root component. The app will then show the page&#39;s GUI on the user&#39;s screen.",qt,v,sn,as="Example",qn,ss="Example showing how to use <code>Page.createGui()</code>. Note that clicking on the buttons in this example will just reload the page (the user comes to the same page again).",en,b,es="Open in Online Editor",zn,zt,ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jt,G,ps='<div class="remark-container__title">The size of the root component</div><p>The root component in your GUI (the <code>Rows</code> component in the example above) will always be as wide and high as the screen itself/the portion of the screen your app is shown in.</p>',$t,O,os='<div class="remark-container__title">Building the GUI</div><p>The GUI is built with the GUI Components from the BagaWork framework. In the sidebar on this page you have a list of them (<em>Views</em> and <em>Layouts</em>).</p>',Ft,pn,cs="<code>onAfter()</code> - Handling user input",Qt,on,ls="When the user has interacted with your GUI (for example by clicking on a button in it) and should be taken to another page, <code>onAfter()</code> will be called, in which you can handle the user&#39;s input.",Kt,C,cn,us="Example",Jn,is="Example showing how to use <code>Page.onAfter()</code>.",$n,Zt,re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskQuestionPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	startTime <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	answer <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Do you know the answer to this question?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onAnswer<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span> <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>onAnswer<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">no</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onAnswer</span><span class="token punctuation">(</span><span class="token parameter">yesOrNo</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>answer <span class="token operator">=</span> yesOrNo
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onAfter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> timeTakenToAnswer <span class="token operator">=</span> p<span class="token punctuation">.</span>startTime<span class="token punctuation">.</span><span class="token function">getDurationTo</span><span class="token punctuation">(</span>
			Date<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">&lt;</span> timeTakenToAnswer<span class="token punctuation">.</span><span class="token function">getTotalSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// Took more than 10 seconds to answer,</span>
			<span class="token comment">// so maybe we want to handle that</span>
			<span class="token comment">// as a special case here.</span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>answer <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// The user clicked on the yes-button</span>
			<span class="token comment">// within 10 seconds, handle that here.</span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
			<span class="token comment">// The user clicked on the no-button</span>
			<span class="token comment">// within 10 seconds, handle that here.</span>
		<span class="token punctuation">&#125;</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Xt,j,rs='<div class="remark-container__title">Not needed?</div><p>You only need to handle user input in <code>onAfter()</code> if your app&#39;s logic require&#39;s that. Many simple apps can simply leave this method empty, or not have it at all.</p>',na,ln,ks="<code>createAfterDirections()</code> - Redirecting the user to another page",ta,un,ds='The method <code>createAfterDirections()</code> will be called after the user has interacted with the GUI. In it, you can return back an array with <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects, indicating which page the user should come to.',aa,rn,ms='If you don&#39;t implement this method, or if non of the <a href="/documentation/direction/" title="Open the documentation for Direction.">Direction</a> objects you create has <code>when()</code> set to <code>true</code>, then BagaWork will start checking if any of the GUI components on the page has indicated which page the user should come to (if you have used <code>Button.page()</code>, <code>EnterText.pageIfEqual()</code>, <code>EnterNumber.pageIfLower()</code>, etc.). If no GUI component has indicated which page to come to, the current page will simply be reloaded.',sa,h,kn,gs="Example",dn,E,hs="Open in Online Editor",Fn,ea,ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Qn,pa,de=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">LuckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are lucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kn,oa,me=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UnluckyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are unlucky!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ca,D,fs='<div class="remark-container__title">Not needed?</div><p>You only need to implement <code>createAfterDirections()</code> if you need it. Most pages will not need it, and can simply leave this method empty, or not have it all.</p>',la,mn,vs="Referring to a page",ua,gn,ws='Sometimes you need to refer to a page you have created. For example, when the user clicks on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a>, you might want to take the user to the page you have created named <code>AboutPage</code>. To tell the <code>Button</code> that the user should come to that page when the <code>Button</code> is clicked, you call the configuration method <code>page()</code> on the <code>Button</code>, and you pass it the page the user should come to. To obtain that page, simply write the name you have given your page, e.g. <code>Button.page(AboutPage)</code>.',ia,w,hn,xs="Example",fn,H,ys="Open in Online Editor",Zn,ra,ge=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to AboutPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Xn,ka,he=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the AboutPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,da,vn,Ps="Page arguments",ma,wn,Ts="When you specify a page the user should come to, you can also pass along arguments (values) to that page by using <em>page argument methods</em>. Page argument methods work the same way as configuration methods on GUI components, but with page argument methods, you decide the names. For example, if you want to pass along an argument named <code>age</code> with the value <code>10</code>, you would write:",ga,xn,ha,fe='<code class="language-js">ThePageName<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span></code>',fa,yn,_s="You can name the argument whatever you want, and you can pass along how many page arguments you want.",va,Pn,bs="The arguments will then be assigned to the page the user comes to, so you can access them through the <code>p</code> variable, e.g. use <code>p.age</code> to obtain the value.",wa,x,Tn,Cs="Example",_n,L,Es="Open in Online Editor",nt,xa,ve=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tt,ya,we=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token comment">// These will get their values from page</span>
	<span class="token comment">// arguments. If no page arguments are</span>
	<span class="token comment">// provided, these default values will be</span>
	<span class="token comment">// used. You can see that in the editor</span>
	<span class="token comment">// when previewing this page.</span>
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">DEFAULT_NAME</span><span class="token template-punctuation string">&#96;</span></span>
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pa,bn,Hs="<code>onUpdate()</code> - Updating the state of the page",Ta,Cn,Ls="When the user starts running a new version of your app with a page state from an older version of the app, <code>Page.onUpdate()</code> will be called. In it, you can implement your own custom update logic if you want.",_a,En,As="<code>onUpdate()</code> will be passed two values:",ba,Hn,Ss="<li><code>oldP</code>, which contains the stored page variables</li> <li><code>oldVersion</code>, which contains the old version number of the app the user ran before</li>",Ca,Ln,Ms='For more information, see <a href="/documentation/state/" title="Open the documentation for State.">State</a>.',Ea;return Q=new kt({props:{project:{app:{code:`class MyApp extends App{
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
		return Text.text(\`This GUI will only be used in the preview, the user will never see it in the app, because there will always be a before direction that is true in this case.\`)
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
	
}`,x:750,y:200}]}}}),nn=new kt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	// This variable should keep track of how
	// many times the user has been on this page.
	numberOfVisits = 0
	
	onBefore(){
		
		// So each time the user comes to
		// this page, we increment it by 1.
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
	
}`,x:450,y:200}]}}}),en=new kt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Do you know the answer to this question?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\` ),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
}`,x:150,y:200}]}}}),dn=new kt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:750,y:200}]}}}),fn=new kt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:450,y:200}]}}}),_n=new kt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.children(\n			Text.text(`This is the StartPage`),\n			Button.text(`Info about Alice`).page(AboutPage.name(`Alice`).age(10)),\n			Button.text(`Info about Bob`).page(AboutPage.age(15).name(`Bob`)),\n		)\n	}\n	\n}",x:150,y:200},{id:2,folderId:1,code:`class AboutPage extends Page{
	
	// These will get their values from page
	// arguments. If no page arguments are
	// provided, these default values will be
	// used. You can see that in the editor
	// when previewing this page.
	name = \`DEFAULT_NAME\`
	age = -1
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.name} is \${p.age} years old.\`),
			Button.text(\`Go to StartPage\`).page(StartPage)
		)
	}
	
}`,x:450,y:200}]}}}),{c(){P=e("h1"),P.innerHTML=La,mt=l(),R=e("p"),R.innerHTML=Aa,gt=l(),B=e("h2"),B.textContent=Sa,ht=l(),N=e("p"),N.innerHTML=Ma,ft=l(),U=e("p"),U.innerHTML=Ia,vt=l(),m=e("div"),Y=e("div"),Y.textContent=Ga,Mn=e("p"),Mn.textContent=Oa,In=e("pre"),wt=new k(!1),Gn=e("pre"),xt=new k(!1),On=e("pre"),yt=new k(!1),jn=e("pre"),Pt=new k(!1),Tt=l(),A=e("div"),A.innerHTML=ja,_t=l(),V=e("h2"),V.innerHTML=Da,bt=l(),W=e("p"),W.innerHTML=Ra,Ct=l(),q=e("ul"),q.innerHTML=Ba,Et=l(),y=e("div"),z=e("div"),z.textContent=Na,Dn=e("p"),Dn.textContent=Ua,Rn=e("ul"),Rn.innerHTML=Ya,Bn=e("pre"),Ht=new k(!1),Lt=l(),S=e("div"),S.innerHTML=Va,At=l(),J=e("h2"),J.innerHTML=Wa,St=l(),$=e("p"),$.innerHTML=qa,Mt=l(),g=e("div"),F=e("div"),F.textContent=za,ot(Q.$$.fragment),T=e("a"),T.textContent=Ja,Nn=e("pre"),It=new k(!1),Un=e("pre"),Gt=new k(!1),Yn=e("pre"),Ot=new k(!1),jt=l(),M=e("div"),M.innerHTML=$a,Dt=l(),K=e("h2"),K.innerHTML=Fa,Rt=l(),Z=e("p"),Z.innerHTML=Qa,Bt=l(),f=e("div"),X=e("div"),X.textContent=Ka,ot(nn.$$.fragment),_=e("a"),_.textContent=Za,Vn=e("pre"),Nt=new k(!1),Wn=e("pre"),Ut=new k(!1),Yt=l(),I=e("div"),I.innerHTML=Xa,Vt=l(),tn=e("h2"),tn.innerHTML=ns,Wt=l(),an=e("p"),an.innerHTML=ts,qt=l(),v=e("div"),sn=e("div"),sn.textContent=as,qn=e("p"),qn.innerHTML=ss,ot(en.$$.fragment),b=e("a"),b.textContent=es,zn=e("pre"),zt=new k(!1),Jt=l(),G=e("div"),G.innerHTML=ps,$t=l(),O=e("div"),O.innerHTML=os,Ft=l(),pn=e("h2"),pn.innerHTML=cs,Qt=l(),on=e("p"),on.innerHTML=ls,Kt=l(),C=e("div"),cn=e("div"),cn.textContent=us,Jn=e("p"),Jn.innerHTML=is,$n=e("pre"),Zt=new k(!1),Xt=l(),j=e("div"),j.innerHTML=rs,na=l(),ln=e("h2"),ln.innerHTML=ks,ta=l(),un=e("p"),un.innerHTML=ds,aa=l(),rn=e("p"),rn.innerHTML=ms,sa=l(),h=e("div"),kn=e("div"),kn.textContent=gs,ot(dn.$$.fragment),E=e("a"),E.textContent=hs,Fn=e("pre"),ea=new k(!1),Qn=e("pre"),pa=new k(!1),Kn=e("pre"),oa=new k(!1),ca=l(),D=e("div"),D.innerHTML=fs,la=l(),mn=e("h2"),mn.textContent=vs,ua=l(),gn=e("p"),gn.innerHTML=ws,ia=l(),w=e("div"),hn=e("div"),hn.textContent=xs,ot(fn.$$.fragment),H=e("a"),H.textContent=ys,Zn=e("pre"),ra=new k(!1),Xn=e("pre"),ka=new k(!1),da=l(),vn=e("h2"),vn.textContent=Ps,ma=l(),wn=e("p"),wn.innerHTML=Ts,ga=l(),xn=e("pre"),ha=new k(!1),fa=l(),yn=e("p"),yn.textContent=_s,va=l(),Pn=e("p"),Pn.innerHTML=bs,wa=l(),x=e("div"),Tn=e("div"),Tn.textContent=Cs,ot(_n.$$.fragment),L=e("a"),L.textContent=Es,nt=e("pre"),xa=new k(!1),tt=e("pre"),ya=new k(!1),Pa=l(),bn=e("h2"),bn.innerHTML=Hs,Ta=l(),Cn=e("p"),Cn.innerHTML=Ls,_a=l(),En=e("p"),En.innerHTML=As,ba=l(),Hn=e("ul"),Hn.innerHTML=Ss,Ca=l(),Ln=e("p"),Ln.innerHTML=Ms,this.h()},l(n){P=p(n,"H1",{"data-svelte-h":!0}),c(P)!=="svelte-6v4miu"&&(P.innerHTML=La),mt=u(n),R=p(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-1siju2j"&&(R.innerHTML=Aa),gt=u(n),B=p(n,"H2",{"data-svelte-h":!0}),c(B)!=="svelte-1ukekoe"&&(B.textContent=Sa),ht=u(n),N=p(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-1eh170g"&&(N.innerHTML=Ma),ft=u(n),U=p(n,"P",{"data-svelte-h":!0}),c(U)!=="svelte-rc6e5e"&&(U.innerHTML=Ia),vt=u(n),m=p(n,"DIV",{class:!0});var a=r(m);Y=p(a,"DIV",{class:!0,"data-svelte-h":!0}),c(Y)!=="svelte-1llzxwj"&&(Y.textContent=Ga),Mn=p(a,"P",{"data-svelte-h":!0}),c(Mn)!=="svelte-yeohz4"&&(Mn.textContent=Oa),In=p(a,"PRE",{class:!0});var Is=r(In);wt=d(Is,!1),Is.forEach(t),Gn=p(a,"PRE",{class:!0});var Gs=r(Gn);xt=d(Gs,!1),Gs.forEach(t),On=p(a,"PRE",{class:!0});var Os=r(On);yt=d(Os,!1),Os.forEach(t),jn=p(a,"PRE",{class:!0});var js=r(jn);Pt=d(js,!1),js.forEach(t),a.forEach(t),Tt=u(n),A=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(A)!=="svelte-jq00wk"&&(A.innerHTML=ja),_t=u(n),V=p(n,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-184d04"&&(V.innerHTML=Da),bt=u(n),W=p(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-6w5hj5"&&(W.innerHTML=Ra),Ct=u(n),q=p(n,"UL",{"data-svelte-h":!0}),c(q)!=="svelte-1s1btu1"&&(q.innerHTML=Ba),Et=u(n),y=p(n,"DIV",{class:!0});var dt=r(y);z=p(dt,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=Na),Dn=p(dt,"P",{"data-svelte-h":!0}),c(Dn)!=="svelte-isxtel"&&(Dn.textContent=Ua),Rn=p(dt,"UL",{"data-svelte-h":!0}),c(Rn)!=="svelte-3wu0k8"&&(Rn.innerHTML=Ya),Bn=p(dt,"PRE",{class:!0});var Ds=r(Bn);Ht=d(Ds,!1),Ds.forEach(t),dt.forEach(t),Lt=u(n),S=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-149c3wi"&&(S.innerHTML=Va),At=u(n),J=p(n,"H2",{"data-svelte-h":!0}),c(J)!=="svelte-zo36s1"&&(J.innerHTML=Wa),St=u(n),$=p(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-nwhab"&&($.innerHTML=qa),Mt=u(n),g=p(n,"DIV",{class:!0});var An=r(g);F=p(An,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-1llzxwj"&&(F.textContent=za),ct(Q.$$.fragment,An),T=p(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-1quv24b"&&(T.textContent=Ja),Nn=p(An,"PRE",{class:!0});var Rs=r(Nn);It=d(Rs,!1),Rs.forEach(t),Un=p(An,"PRE",{class:!0});var Bs=r(Un);Gt=d(Bs,!1),Bs.forEach(t),Yn=p(An,"PRE",{class:!0});var Ns=r(Yn);Ot=d(Ns,!1),Ns.forEach(t),An.forEach(t),jt=u(n),M=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(M)!=="svelte-d7dr64"&&(M.innerHTML=$a),Dt=u(n),K=p(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-mzgb"&&(K.innerHTML=Fa),Rt=u(n),Z=p(n,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1fss7ur"&&(Z.innerHTML=Qa),Bt=u(n),f=p(n,"DIV",{class:!0});var at=r(f);X=p(at,"DIV",{class:!0,"data-svelte-h":!0}),c(X)!=="svelte-1llzxwj"&&(X.textContent=Ka),ct(nn.$$.fragment,at),_=p(at,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1p3z5o4"&&(_.textContent=Za),Vn=p(at,"PRE",{class:!0});var Us=r(Vn);Nt=d(Us,!1),Us.forEach(t),Wn=p(at,"PRE",{class:!0});var Ys=r(Wn);Ut=d(Ys,!1),Ys.forEach(t),at.forEach(t),Yt=u(n),I=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-ou7j3"&&(I.innerHTML=Xa),Vt=u(n),tn=p(n,"H2",{"data-svelte-h":!0}),c(tn)!=="svelte-9f0kzb"&&(tn.innerHTML=ns),Wt=u(n),an=p(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-1b12sfg"&&(an.innerHTML=ts),qt=u(n),v=p(n,"DIV",{class:!0});var st=r(v);sn=p(st,"DIV",{class:!0,"data-svelte-h":!0}),c(sn)!=="svelte-1llzxwj"&&(sn.textContent=as),qn=p(st,"P",{"data-svelte-h":!0}),c(qn)!=="svelte-y0jfk"&&(qn.innerHTML=ss),ct(en.$$.fragment,st),b=p(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(b)!=="svelte-1o9kb4t"&&(b.textContent=es),zn=p(st,"PRE",{class:!0});var Vs=r(zn);zt=d(Vs,!1),Vs.forEach(t),st.forEach(t),Jt=u(n),G=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(G)!=="svelte-l8t7qy"&&(G.innerHTML=ps),$t=u(n),O=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(O)!=="svelte-1mkbe5y"&&(O.innerHTML=os),Ft=u(n),pn=p(n,"H2",{"data-svelte-h":!0}),c(pn)!=="svelte-bjryoo"&&(pn.innerHTML=cs),Qt=u(n),on=p(n,"P",{"data-svelte-h":!0}),c(on)!=="svelte-g06us9"&&(on.innerHTML=ls),Kt=u(n),C=p(n,"DIV",{class:!0});var Ha=r(C);cn=p(Ha,"DIV",{class:!0,"data-svelte-h":!0}),c(cn)!=="svelte-1llzxwj"&&(cn.textContent=us),Jn=p(Ha,"P",{"data-svelte-h":!0}),c(Jn)!=="svelte-2fyuhr"&&(Jn.innerHTML=is),$n=p(Ha,"PRE",{class:!0});var Ws=r($n);Zt=d(Ws,!1),Ws.forEach(t),Ha.forEach(t),Xt=u(n),j=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-12kti89"&&(j.innerHTML=rs),na=u(n),ln=p(n,"H2",{"data-svelte-h":!0}),c(ln)!=="svelte-hdwla6"&&(ln.innerHTML=ks),ta=u(n),un=p(n,"P",{"data-svelte-h":!0}),c(un)!=="svelte-1adb52t"&&(un.innerHTML=ds),aa=u(n),rn=p(n,"P",{"data-svelte-h":!0}),c(rn)!=="svelte-1jfndz8"&&(rn.innerHTML=ms),sa=u(n),h=p(n,"DIV",{class:!0});var Sn=r(h);kn=p(Sn,"DIV",{class:!0,"data-svelte-h":!0}),c(kn)!=="svelte-1llzxwj"&&(kn.textContent=gs),ct(dn.$$.fragment,Sn),E=p(Sn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-nlz0ix"&&(E.textContent=hs),Fn=p(Sn,"PRE",{class:!0});var qs=r(Fn);ea=d(qs,!1),qs.forEach(t),Qn=p(Sn,"PRE",{class:!0});var zs=r(Qn);pa=d(zs,!1),zs.forEach(t),Kn=p(Sn,"PRE",{class:!0});var Js=r(Kn);oa=d(Js,!1),Js.forEach(t),Sn.forEach(t),ca=u(n),D=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(D)!=="svelte-1wj0wp7"&&(D.innerHTML=fs),la=u(n),mn=p(n,"H2",{"data-svelte-h":!0}),c(mn)!=="svelte-1wzt5at"&&(mn.textContent=vs),ua=u(n),gn=p(n,"P",{"data-svelte-h":!0}),c(gn)!=="svelte-1tz6o32"&&(gn.innerHTML=ws),ia=u(n),w=p(n,"DIV",{class:!0});var et=r(w);hn=p(et,"DIV",{class:!0,"data-svelte-h":!0}),c(hn)!=="svelte-1llzxwj"&&(hn.textContent=xs),ct(fn.$$.fragment,et),H=p(et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(H)!=="svelte-lemgcc"&&(H.textContent=ys),Zn=p(et,"PRE",{class:!0});var $s=r(Zn);ra=d($s,!1),$s.forEach(t),Xn=p(et,"PRE",{class:!0});var Fs=r(Xn);ka=d(Fs,!1),Fs.forEach(t),et.forEach(t),da=u(n),vn=p(n,"H2",{"data-svelte-h":!0}),c(vn)!=="svelte-1yw68nt"&&(vn.textContent=Ps),ma=u(n),wn=p(n,"P",{"data-svelte-h":!0}),c(wn)!=="svelte-yhopvq"&&(wn.innerHTML=Ts),ga=u(n),xn=p(n,"PRE",{class:!0});var Qs=r(xn);ha=d(Qs,!1),Qs.forEach(t),fa=u(n),yn=p(n,"P",{"data-svelte-h":!0}),c(yn)!=="svelte-1you5gc"&&(yn.textContent=_s),va=u(n),Pn=p(n,"P",{"data-svelte-h":!0}),c(Pn)!=="svelte-iuriot"&&(Pn.innerHTML=bs),wa=u(n),x=p(n,"DIV",{class:!0});var pt=r(x);Tn=p(pt,"DIV",{class:!0,"data-svelte-h":!0}),c(Tn)!=="svelte-1llzxwj"&&(Tn.textContent=Cs),ct(_n.$$.fragment,pt),L=p(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(L)!=="svelte-1kbqyab"&&(L.textContent=Es),nt=p(pt,"PRE",{class:!0});var Ks=r(nt);xa=d(Ks,!1),Ks.forEach(t),tt=p(pt,"PRE",{class:!0});var Zs=r(tt);ya=d(Zs,!1),Zs.forEach(t),pt.forEach(t),Pa=u(n),bn=p(n,"H2",{"data-svelte-h":!0}),c(bn)!=="svelte-1viyqwu"&&(bn.innerHTML=Hs),Ta=u(n),Cn=p(n,"P",{"data-svelte-h":!0}),c(Cn)!=="svelte-1phcf4b"&&(Cn.innerHTML=Ls),_a=u(n),En=p(n,"P",{"data-svelte-h":!0}),c(En)!=="svelte-1eoc9lz"&&(En.innerHTML=As),ba=u(n),Hn=p(n,"UL",{"data-svelte-h":!0}),c(Hn)!=="svelte-24cqwg"&&(Hn.innerHTML=Ss),Ca=u(n),Ln=p(n,"P",{"data-svelte-h":!0}),c(Ln)!=="svelte-286i4h"&&(Ln.innerHTML=Ms),this.h()},h(){o(Y,"class","remark-container__title"),wt.a=null,o(In,"class","language-js"),xt.a=null,o(Gn,"class","language-js"),yt.a=null,o(On,"class","language-js"),Pt.a=null,o(jn,"class","language-js"),o(m,"class","remark-container tip"),o(A,"class","remark-container tip"),o(z,"class","remark-container__title"),Ht.a=null,o(Bn,"class","language-js"),o(y,"class","remark-container tip"),o(S,"class","remark-container tip"),o(F,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNq1UlFr2zAQ/is3PdkgTJJtDAx9aBmUwMbGljJGU4gmXxsxVTLSua4J/u87x47rbCHsYXsRutPpu/vu+3ZClaXId0L7AkUutFUxwsfmsiwBnwldEYHvu7Vbkw6oCL+SCvRZPWCS7rNrCkhVcDA+dNl27VrRSlFyHEV+uxOmEPlcintvCwzLPjhqOv4fG3dB32PsfoX3PuB7E1CT8S6OQ/Sn5hSBd/gprGoPF/CYBeUK/7h0lMwlLNJp9TD47ZCjETart+iSF5gLmKdZRyX5UOmfTTdXmhGPmWy+qQi2S25S+Rc4iwHnxtlTSJU7xrp7Gbc9XsR1ZX4XYMUwA9ZqayJc3yyhNtbyPmwDPxCqiAUYB7RFKAM+GazlPuCH0Jc6fOJrRARDh1J2iOTvWnFZlwjY1ypbqyZ2wIqPThcoDsy5TjFABAoV9kAcaBUx26QTOq2Q4pm98HYmRSPyxWzWyt4ri3NeGWU455UTK/ri65jprbFFYGEOek0W991XoJjIXoZXE02vKiIWdFhvaEA9KOM2g5yjdwd/naD45k+Kr89RnDjkf5Ec3PZPab6b0LxrfwFtAo6Y"),o(T,"title","Open in our Online Editor"),It.a=null,o(Nn,"class","language-js"),Gt.a=null,o(Un,"class","language-js"),Ot.a=null,o(Yn,"class","language-js"),o(g,"class","remark-container tip"),o(M,"class","remark-container tip"),o(X,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqdUstqwzAQ/JVF9GBT4zxoL4YcmkvooaQ0oVCaQhR7U4vYkpHkpMb43ytHseKGPqAHC+9qd2ZntDWhRUGimsQiQRKROKNKwUN1VxSAHxp5osD81yu+0rFEqnGhqdSP9B09/5hdaYm6lBzcRZttVrwhTUAKEysSvdaEJSQaBWQrsgTlvQ2+kLp+R9wGlsN8gwEsU6ZgTyWjmwxBpaLMEtghFqAljXcgtpCKw6k4p7wCzXJUoFOEUqGElCrYIHIQ3CQNWDte2DbwMt+gnG+fmWJawQSGHa/gU9wKeZZrT8OwEIA0To8kZ45YHCmFK3NEARwQGDc25sg1MA2bCkahLSzCixGuJzA6EzbdOPYRZiW7tP9JHFQYpyxLJHLv1KmXxstQm8Nbv4jSGLDHngPYM/2qvhyhsfaFaz/o4KalNoacAGfCyIS5gZEtwtoPW5WeS/i2y+/N35CAfJinvx0GpCLReDhsArsa499Ww0F+vxr/9+S4UcxuiCP5Q7CzrBPsEj8LvukJfms+ASUoO1s="),o(_,"title","Open in our Online Editor"),Nt.a=null,o(Vn,"class","language-js"),Ut.a=null,o(Wn,"class","language-js"),o(f,"class","remark-container tip"),o(I,"class","remark-container tip"),o(sn,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNqNkE9LxEAMxb9KyKmFYamCl17EPyAeFHG9iCN0aKNbrJNxJkO3lH53Z1236LKCl5CX95IfZETjHJYj1twQllh3JgS4Gc6cA1oL2SZA6kdttdSejNBSjJc780pZ/jXV4kmitzAbm+mk7YSTQpd0wPJpxLbB8kjhC3cN+eut+AWd92fwRvwgX8V2n3nPfVjUq7ZrPNlsa2l5SAcWkkpWXTIMHOHNcg+yIjA29ORBOKk2wEekIC3b0ypXu+2lMzXN6oK7+G4PQPaDWs6jCNtv8C1XkKt/hh8pVH+Hd04+P1bhOv3vpFA4YHlcFNPz9AntyqYN"),o(b,"title","Open in our Online Editor"),zt.a=null,o(zn,"class","language-js"),o(v,"class","remark-container tip"),o(G,"class","remark-container tip"),o(O,"class","remark-container tip"),o(cn,"class","remark-container__title"),Zt.a=null,o($n,"class","language-js"),o(C,"class","remark-container tip"),o(j,"class","remark-container tip"),o(kn,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNq1klFrwjAUhf9KvE8tlKLdxqAgwzEYwsaGcwyxgqGNWlaTktyipfS/L64x1rn55F5CcpOee757WgHNcwgriEXCIIQ4o0qR53KQ54RtkfFEEb2vIh5hLBlF9oZU4itdMsf9rkYoGRaSE3uxq9YRr6H2INdnBeG0gjSBsOfBQmQJk8PmcNTUfm8b7w5ND9v9sUh/9h2JjfLjVZolknGnuYpwrEV81IszHzGalAQFQVmSUhSSZEX8eTd3vf3j+wJRcPN8wlTH3rkGpu1hsEAmH1LJYkwFV9ZPs8a6hERw9iLHG0H6ZO1LyhOxHnJ0eh4J3PZrwzDdO7Gy/malaQ4yfdJz/d00nSdtvtyNxjWGP6j6JipbRGd0AqPzzrPflAp+rDU72DVzqMGDrc7vputBCWHQ7dZek29wLl/r+9L5TkRBqGTNDDp/xTrW4dMlTfnc8Nv/zT2N2iBenyJenUNsjfS/IE08F8W8bWHO6i9FTnTf"),o(E,"title","Open in our Online Editor"),ea.a=null,o(Fn,"class","language-js"),pa.a=null,o(Qn,"class","language-js"),oa.a=null,o(Kn,"class","language-js"),o(h,"class","remark-container tip"),o(D,"class","remark-container tip"),o(hn,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNq1kE1LxDAQhv9KmFMLodRFL72tl8WDILt7M8LGZtwWShKSKe5S8t9NTY2r4N6EEDLvfLzzZAJpLTQTtEYhNNAO0nv2eF5by/BEqJVn8T0JLah1KAl3JB09ySMW5acqyCGNTrOcmNUgdIDAwcbYQ/M8Qa+gueHwZgaF7iEFP0xzfzaeg+SR3Tdj/9t3a9591Xb9oBzqIqUE7eOQiuJVHPZd71k81OG3yaHkX6X3I5HRS/HGMDJs/WrGpayaEYoslKmrXCDn3QJwOEWeu5rDGZpVXQeeeFfXePPI/+TNJtV14It/ScBZ+Bv49gL4JXwAMX3P2Q=="),o(H,"title","Open in our Online Editor"),ra.a=null,o(Zn,"class","language-js"),ka.a=null,o(Xn,"class","language-js"),o(w,"class","remark-container tip"),ha.a=null,o(xn,"class","language-js"),o(Tn,"class","remark-container__title"),o(L,"target","_blank"),o(L,"href","/editor#eNqlUk1r3DAQ/SuD6MEG19kNzcWQg0PTsNCU0m4PoS611hqvBV7JSOPdLMb/vZK/kn6kPRSM0cy8eU+aNx3jTcOSjhVaIEtYUXNr4f6cNg3gI6ESFty5y1RGhUFO+Jm4oY98j0E4ZDMySK1RsBR8ts9Uz/qINS62LPnaMSlYso5YqWuBZjMGP4ku/YuwD0aNRf2ulb/qftInGxeVrIVBFYyljLaOJCb3C/JtJS24jyp8EsnDaIbetERaTeCNKjXwnW4J0loWDhf7NwSpT/nGWPEDBvlc9LX1Kvw3243e/c41dF+FE+cAmZnCaYz+9T2L2KOb2NUqYmeWXK5WfTRO9PJvE110/jzRiwvYVmgRTrKuYY/kJyQNHHndooXS6AM0k58Oy82+PaAiG8OmBKWH2lPWnWZkY/RRChSRJ3T8Akve1jQTD3K7GdxaFDE86BYKrsAiuiZOINXgFwpJ2kzQU4XKkeNR4kmqvQM4V/0tYg/wM4RryN/evku/vN9+/5De3+a+4K95Da/X/79Jr7pmsKr36+QDR93DGbmx4FyIX1qqOw2kn+/euAdLInzR8jfPLP/W/wDSIUtA"),o(L,"title","Open in our Online Editor"),xa.a=null,o(nt,"class","language-js"),ya.a=null,o(tt,"class","language-js"),o(x,"class","remark-container tip")},m(n,a){s(n,P,a),s(n,mt,a),s(n,R,a),s(n,gt,a),s(n,B,a),s(n,ht,a),s(n,N,a),s(n,ft,a),s(n,U,a),s(n,vt,a),s(n,m,a),i(m,Y),i(m,Mn),i(m,In),wt.m(ne,In),i(m,Gn),xt.m(te,Gn),i(m,On),yt.m(ae,On),i(m,jn),Pt.m(se,jn),s(n,Tt,a),s(n,A,a),s(n,_t,a),s(n,V,a),s(n,bt,a),s(n,W,a),s(n,Ct,a),s(n,q,a),s(n,Et,a),s(n,y,a),i(y,z),i(y,Dn),i(y,Rn),i(y,Bn),Ht.m(ee,Bn),s(n,Lt,a),s(n,S,a),s(n,At,a),s(n,J,a),s(n,St,a),s(n,$,a),s(n,Mt,a),s(n,g,a),i(g,F),lt(Q,g,null),i(g,T),i(g,Nn),It.m(pe,Nn),i(g,Un),Gt.m(oe,Un),i(g,Yn),Ot.m(ce,Yn),s(n,jt,a),s(n,M,a),s(n,Dt,a),s(n,K,a),s(n,Rt,a),s(n,Z,a),s(n,Bt,a),s(n,f,a),i(f,X),lt(nn,f,null),i(f,_),i(f,Vn),Nt.m(le,Vn),i(f,Wn),Ut.m(ue,Wn),s(n,Yt,a),s(n,I,a),s(n,Vt,a),s(n,tn,a),s(n,Wt,a),s(n,an,a),s(n,qt,a),s(n,v,a),i(v,sn),i(v,qn),lt(en,v,null),i(v,b),i(v,zn),zt.m(ie,zn),s(n,Jt,a),s(n,G,a),s(n,$t,a),s(n,O,a),s(n,Ft,a),s(n,pn,a),s(n,Qt,a),s(n,on,a),s(n,Kt,a),s(n,C,a),i(C,cn),i(C,Jn),i(C,$n),Zt.m(re,$n),s(n,Xt,a),s(n,j,a),s(n,na,a),s(n,ln,a),s(n,ta,a),s(n,un,a),s(n,aa,a),s(n,rn,a),s(n,sa,a),s(n,h,a),i(h,kn),lt(dn,h,null),i(h,E),i(h,Fn),ea.m(ke,Fn),i(h,Qn),pa.m(de,Qn),i(h,Kn),oa.m(me,Kn),s(n,ca,a),s(n,D,a),s(n,la,a),s(n,mn,a),s(n,ua,a),s(n,gn,a),s(n,ia,a),s(n,w,a),i(w,hn),lt(fn,w,null),i(w,H),i(w,Zn),ra.m(ge,Zn),i(w,Xn),ka.m(he,Xn),s(n,da,a),s(n,vn,a),s(n,ma,a),s(n,wn,a),s(n,ga,a),s(n,xn,a),ha.m(fe,xn),s(n,fa,a),s(n,yn,a),s(n,va,a),s(n,Pn,a),s(n,wa,a),s(n,x,a),i(x,Tn),lt(_n,x,null),i(x,L),i(x,nt),xa.m(ve,nt),i(x,tt),ya.m(we,tt),s(n,Pa,a),s(n,bn,a),s(n,Ta,a),s(n,Cn,a),s(n,_a,a),s(n,En,a),s(n,ba,a),s(n,Hn,a),s(n,Ca,a),s(n,Ln,a),Ea=!0},p:ye,i(n){Ea||(ut(Q.$$.fragment,n),ut(nn.$$.fragment,n),ut(en.$$.fragment,n),ut(dn.$$.fragment,n),ut(fn.$$.fragment,n),ut(_n.$$.fragment,n),Ea=!0)},o(n){it(Q.$$.fragment,n),it(nn.$$.fragment,n),it(en.$$.fragment,n),it(dn.$$.fragment,n),it(fn.$$.fragment,n),it(_n.$$.fragment,n),Ea=!1},d(n){n&&(t(P),t(mt),t(R),t(gt),t(B),t(ht),t(N),t(ft),t(U),t(vt),t(m),t(Tt),t(A),t(_t),t(V),t(bt),t(W),t(Ct),t(q),t(Et),t(y),t(Lt),t(S),t(At),t(J),t(St),t($),t(Mt),t(g),t(jt),t(M),t(Dt),t(K),t(Rt),t(Z),t(Bt),t(f),t(Yt),t(I),t(Vt),t(tn),t(Wt),t(an),t(qt),t(v),t(Jt),t(G),t($t),t(O),t(Ft),t(pn),t(Qt),t(on),t(Kt),t(C),t(Xt),t(j),t(na),t(ln),t(ta),t(un),t(aa),t(rn),t(sa),t(h),t(ca),t(D),t(la),t(mn),t(ua),t(gn),t(ia),t(w),t(da),t(vn),t(ma),t(wn),t(ga),t(xn),t(fa),t(yn),t(va),t(Pn),t(wa),t(x),t(Pa),t(bn),t(Ta),t(Cn),t(_a),t(En),t(ba),t(Hn),t(Ca),t(Ln)),rt(Q),rt(nn),rt(en),rt(dn),rt(fn),rt(_n)}}}class He extends Pe{constructor(P){super(),Te(this,P,null,_e,xe,{})}}export{He as component};
