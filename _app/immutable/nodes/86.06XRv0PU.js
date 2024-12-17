import{s as Ja,n as Da}from"../chunks/scheduler.B0TnBjPs.js";import{S as qa,i as Ka,e,s as o,c as Pt,H as k,a as p,g as l,b as c,f as yt,d as i,n as d,h as n,o as u,j as s,m as St,p as m,t as Mt,k as _t,l as Tt}from"../chunks/index.BXVnRmkj.js";import{V as At}from"../chunks/ViewApp.CB1BM1bD.js";function Qa(Ia){let x,Gn="2. App Constants",Ct,P,Hn="This tutorial will teach you what constants in programming are, and how you can create them in a BagaWork app.",Et,y,Nn="App constants vs page constants",It,S,jn="In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it&#39;s better to use an <em>app constant</em> instead, since all different pages have access to all app constants.",bt,M,Rn="Below we have an example of an app that uses the same hardcoded value (the name of the app, <code>InfoApp</code>) at multiple diffrefent pages, including on multiple different pages.",Lt,_,Gt,f,Bn="Open in Online Editor",Ht,T,Nt,ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jt,A,Rt,La=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Select what you want to read more about.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MarioPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ZeldaPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Bt,C,Zt,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Yt,E,$t,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Wt,I,Zn="This works, but changing the name of the app in the future (for example to <code>Information App</code>) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.",Ot,b,Yn="How to create app constants",zt,L,$n="We create app constants the same way we create page constants, but we write them in the <code>App</code> class instead. In the code below you find an example of how to create the following app constants:",Jt,G,Wn="<li><code>APP_NAME</code> will have the string value <code>InfoApp</code></li> <li><code>CREATED_DATE</code> will have the string value <code>2023-09-15</code></li>",Dt,H,qt,Na=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">CREATED_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app constants as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Kt,N,On="How to use app constants",Qt,j,zn="In BagaWork, everything you create in your <code>App</code> class (constants, variables and methods) are accessible in a special variable called <code>a</code> (short for <em>app</em>). To retrieve the value of a constant, you would simply write <code>a.THE_NAME_OF_THE_CONSTANT</code>, for example <code>a.APP_NAME</code>.",Ut,R,Jn="To display the name of the app on the <code>MenuPage</code> we had before, the following code were used:",Ft,B,Vt,ja='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Xt,Z,Dn="With the app constants we have now, we can instead write:",tn,Y,nn,Ra='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',an,$,qn="In this case, when we create a string that only contains the special <code>${SOMETHING}</code> thing, we can actually simplify the code to:",sn,W,en,Ba='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span></code>',pn,O,Kn="When the computer executes this code, it will first retrieve the value for the <code>APP_NAME</code> constant from the <code>a</code> variable, and it gets back the string value <code>InfoApp</code>, and pass that to the <code>Text.text()</code> method, which then will display that text.",on,z,Qn="However, on the <code>MarioPage</code>, where the text we send to the <code>Text</code> component is not only the app name, but looks like this:",cn,J,ln,Za='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',un,D,Un="We have to use the complicated <code>${SOMETHING}</code> thing:",rn,q,kn,Ya='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',dn,K,Fn="The same is true for the <code>ZeldaPage</code>.",gn,Q,Vn="The final solution",mn,U,Xn="So, here's the code for the app using constants, instead of harding the name of the app at multiple places.",fn,F,hn,h,ta="Open in Online Editor",xn,V,wn,$a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,vn,X,Pn,Wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Select what you want to read more about.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MarioPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ZeldaPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yn,tt,Sn,Oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Mn,nt,_n,za=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Tn,at,na="Exercises",An,st,aa="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Cn,g,et,sa="Exercise 1",rt,ea='The code in <a href="/editor#eNq9VA1r2zAQ/StXMWgCwuSrW2sYwx0lZKztaANbWMqi2OfE1JaMJLc1wf99kj23cZaEbrSFxEg66T7ee3crwtKUuCviiwCJS/yYKQXnuZemgA8aeaDArFdTPtX27w3PLsa/LrzzM/gIsy8sQQWnggez+oIvkWm81kzqb2yBrXb1VEvUmeQwlIg64gtrs4aieleQgpJQxAFKRdyfKxIFxO1Swk0Ak1XpjlAiwlCh/kHcTr2emHVxQ0lq/DVeVs5G1aZR3HoKjzXazapZwzCLNrO/EvfK8ZdRHEjkrco01dcp85HWu7Fx6Wjzac2GQgSQCMlNNArvVsx5gq84mLXpdg+fRZwlfEugzYtTfZppLfjWcNeRNCEcC0zLUypa8AR5yUmb7nJYW9oNaih5IG6vYzDPidvvdApaodzbh3Iz5OviPBEZKMQEGMwjDXMhMdiEm4ISsESJ4Asr2lxkErh5DuwxUxeGArT5LRHm7BZlDmopUhC8PBLmI0FFgVmG5YnSVksUGA9gLg3skBgbr+2RBN+4URTSGJlC58UpH4HEMFNY0l2zfVUe7Wd6w89laGDJ5IYjz/cx/X/JDE5O/kimX0umv08yT3m/rlxGViyO48BIHyqYI3LgkY9wy8W95dBI469udeArsjusZLPIuJVJEtlRaejOU+Q8tzIpzffMiFBk2gHbkfMcd7X6FsyOO+9LzLqDDzVmg71t9kjR62I2XjILFoOFHTIxCw7g0ug8YDm1RR/GsQHSmm08MBlw/eyJtweGQb9fT/cxJmlsamlM+Y2RczsKvSCL3wAPT5ZagJIY0+uMQ/f404v394WYPbuHJ6hm/9qna6O8AeUZ1yi9xRs04/dKWGXjGP+7IWzU2u2s3WtajnZZejvf9I6epczipvgNJgtF4w==" target="_blank">this BagaWork project</a> contains an app that works like this:',pt,kt,pa="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!",dt,oa="However, to improve security and anonymousity among the agents, it has now been decided that one should never referr to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",gt,ca="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",ot,En,r,ct,la="Exercise 2",mt,ua="It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (<code>a</code>, <code>b</code>, <code>c</code>, etc.), but they are quite hard to type on a keyboard, since they don&#39;t have their own keys on the keyboard, so people often copy-paste them:",ft,ia='<li>Search for the smiley using Google, for example &quot;<a href="https://www.google.com/search?q=smiley+smiling+face" rel="nofollow" target="_blank">smiley smiling face</a>&quot;</li> <li>Find and copy the smiley from a search result</li> <li>Paste the smiley wherever they want to write it</li> ',ht,ra="This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!",xt,ka="Your task is to:",wt,da='<li>Open <a href="/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==" target="_blank">this BagaWork project</a></li> <li>Create the following three app constants:<ul><li><code>SMILEY_SMILING</code> storing 🙂</li> <li><code>SMILEY_GRIN</code> storing 😁</li> <li><code>SMILEY_LAUGH_CRYING</code> storing 🤣</li></ul></li> <li>Add a few pages that make use of these app constants to display the smileys</li> ',vt,ga="When you are done, your app can for example work like this:",lt,In,ut,ma="That's it!",bn,it,fa="Great work, now you also now how to use app constants in BagaWork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.",Ln;return _=new At({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`InfoApp\`),
			Space.grow(0.05),
			Text.text(\`Select what you want to read more about.\`).left(),
			Space,
			Columns.children(
				Space,
				Button.text(\`Mario\`).page(MarioPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(\`Zelda\`).page(ZeldaPage),
				Space,
			),
			Space,
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class ZeldaPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`InfoApp - Zelda\`),
			Space,
			Text.text(\`Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`<-\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class MarioPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`InfoApp - Mario\`),
			Space,
			Text.text(\`Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`<-\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:750,y:200}]}}}),F=new At({props:{project:{app:{code:`class InfoApp extends App{
	
	APP_NAME = \`InfoApp\`
	
	createStartPage(){
		return MenuPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(a.APP_NAME),
			Space.grow(0.05),
			Text.text(\`Select what you want to read more about.\`).left(),
			Space,
			Columns.children(
				Space,
				Button.text(\`Mario\`).page(MarioPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(\`Zelda\`).page(ZeldaPage),
				Space,
			),
			Space,
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class ZeldaPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`\${a.APP_NAME} - Zelda\`),
			Space,
			Text.text(\`Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`<-\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class MarioPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`\${a.APP_NAME} - Mario\`),
			Space,
			Text.text(\`Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`<-\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:750,y:200}]}}}),pt=new At({props:{project:{app:{code:`class MyApp extends App{
	
	AGENT_NAME = \`James Bond\`
	
	createStartPage(){
		return GreetingPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class GreetingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Good morning, \${a.AGENT_NAME}!\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Good morning, Sir!\`).page(AssignmentPage),
				Space,
			),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class AssignmentPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`You seem a bit bored \${a.AGENT_NAME}, so here comes your next assignment: Go to the bakery shop on the other side of the street, and bring me one of their cakes, please.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`I refuse, Sir\`).page(RefusePage),
				Space,
				Button.text(\`Of course, Sir\`).page(AcceptPage),
				Space,
			),
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your wait out. Goodbye!\`),
			Space,
		)
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`That's a good lad! One day, you'll be a great agent, \${a.AGENT_NAME}!\`),
			Space,
		)
	}
	
}`,x:1050,y:200}]}}}),ot=new At({props:{project:{app:{code:`class MyApp extends App{
	
	AGENT_NAME = \`007\`
	
	createStartPage(){
		return GreetingPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class GreetingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Good morning, \${a.AGENT_NAME}!\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Good morning, Sir!\`).page(AssignmentPage),
				Space,
			),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class AssignmentPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`You seem a bit bored \${a.AGENT_NAME}, so here comes your next assignment: Go to the bakery shop on the other side of the street, and bring me one of their cakes, please.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`I refuse, Sir\`).page(RefusePage),
				Space,
				Button.text(\`Of course, Sir\`).page(AcceptPage),
				Space,
			),
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your wait out. Goodbye!\`),
			Space,
		)
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`That's a good lad! One day, you'll be a great agent, \${a.AGENT_NAME}!\`),
			Space,
		)
	}
	
}`,x:1050,y:200}]}}}),lt=new At({props:{project:{app:{code:`class MyApp extends App{
	
	SMILEY_SMILE = \`🙂\`
	SMILEY_GRIN = \`😁\`
	SMILEY_LAUGH_CRYING = \`🤣\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Click on the smiley you want to learn more about.\`),
			Space,
			Button.text(a.SMILEY_SMILE).page(SmilePage),
			Space,
			Button.text(a.SMILEY_GRIN).page(GrinPage),
			Space,
			Button.text(a.SMILEY_LAUGH_CRYING).page(LaughCryingPage),
			Space,
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class SmilePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_SMILE} means that the one who wrote the text is smiling.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:450,y:200},{id:3,folderId:1,code:`class GrinPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_GRIN} means that the one who wrote the text is smiling so much that you can see his/her teeth.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class LaughCryingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_LAUGH_CRYING} means that the one who wrote the text is laughing so hard that tears come from his/her eyes.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:1050,y:200}]}}}),{c(){x=e("h1"),x.textContent=Gn,Ct=o(),P=e("p"),P.textContent=Hn,Et=o(),y=e("h2"),y.textContent=Nn,It=o(),S=e("p"),S.innerHTML=jn,bt=o(),M=e("p"),M.innerHTML=Rn,Lt=o(),Pt(_.$$.fragment),Gt=o(),f=e("a"),f.textContent=Bn,Ht=o(),T=e("pre"),Nt=new k(!1),jt=o(),A=e("pre"),Rt=new k(!1),Bt=o(),C=e("pre"),Zt=new k(!1),Yt=o(),E=e("pre"),$t=new k(!1),Wt=o(),I=e("p"),I.innerHTML=Zn,Ot=o(),b=e("h3"),b.textContent=Yn,zt=o(),L=e("p"),L.innerHTML=$n,Jt=o(),G=e("ul"),G.innerHTML=Wn,Dt=o(),H=e("pre"),qt=new k(!1),Kt=o(),N=e("h3"),N.textContent=On,Qt=o(),j=e("p"),j.innerHTML=zn,Ut=o(),R=e("p"),R.innerHTML=Jn,Ft=o(),B=e("pre"),Vt=new k(!1),Xt=o(),Z=e("p"),Z.textContent=Dn,tn=o(),Y=e("pre"),nn=new k(!1),an=o(),$=e("p"),$.innerHTML=qn,sn=o(),W=e("pre"),en=new k(!1),pn=o(),O=e("p"),O.innerHTML=Kn,on=o(),z=e("p"),z.innerHTML=Qn,cn=o(),J=e("pre"),ln=new k(!1),un=o(),D=e("p"),D.innerHTML=Un,rn=o(),q=e("pre"),kn=new k(!1),dn=o(),K=e("p"),K.innerHTML=Fn,gn=o(),Q=e("h3"),Q.textContent=Vn,mn=o(),U=e("p"),U.textContent=Xn,fn=o(),Pt(F.$$.fragment),hn=o(),h=e("a"),h.textContent=ta,xn=o(),V=e("pre"),wn=new k(!1),vn=o(),X=e("pre"),Pn=new k(!1),yn=o(),tt=e("pre"),Sn=new k(!1),Mn=o(),nt=e("pre"),_n=new k(!1),Tn=o(),at=e("h2"),at.textContent=na,An=o(),st=e("p"),st.textContent=aa,Cn=o(),g=e("div"),et=e("div"),et.textContent=sa,rt=e("p"),rt.innerHTML=ea,Pt(pt.$$.fragment),kt=e("p"),kt.innerHTML=pa,dt=e("p"),dt.innerHTML=oa,gt=e("p"),gt.innerHTML=ca,Pt(ot.$$.fragment),En=o(),r=e("div"),ct=e("div"),ct.textContent=la,mt=e("p"),mt.innerHTML=ua,ft=e("ol"),ft.innerHTML=ia,ht=e("p"),ht.textContent=ra,xt=e("p"),xt.textContent=ka,wt=e("ol"),wt.innerHTML=da,vt=e("p"),vt.textContent=ga,Pt(lt.$$.fragment),In=o(),ut=e("h2"),ut.textContent=ma,bn=o(),it=e("p"),it.textContent=fa,this.h()},l(t){x=p(t,"H1",{"data-svelte-h":!0}),l(x)!=="svelte-13nebke"&&(x.textContent=Gn),Ct=c(t),P=p(t,"P",{"data-svelte-h":!0}),l(P)!=="svelte-qkh4k6"&&(P.textContent=Hn),Et=c(t),y=p(t,"H2",{"data-svelte-h":!0}),l(y)!=="svelte-146a9ch"&&(y.textContent=Nn),It=c(t),S=p(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1w6vkkr"&&(S.innerHTML=jn),bt=c(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-4a6qp1"&&(M.innerHTML=Rn),Lt=c(t),yt(_.$$.fragment,t),Gt=c(t),f=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-r8kh57"&&(f.textContent=Bn),Ht=c(t),T=p(t,"PRE",{class:!0});var a=i(T);Nt=d(a,!1),a.forEach(n),jt=c(t),A=p(t,"PRE",{class:!0});var ha=i(A);Rt=d(ha,!1),ha.forEach(n),Bt=c(t),C=p(t,"PRE",{class:!0});var xa=i(C);Zt=d(xa,!1),xa.forEach(n),Yt=c(t),E=p(t,"PRE",{class:!0});var wa=i(E);$t=d(wa,!1),wa.forEach(n),Wt=c(t),I=p(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1rq9mb4"&&(I.innerHTML=Zn),Ot=c(t),b=p(t,"H3",{"data-svelte-h":!0}),l(b)!=="svelte-1lqrax7"&&(b.textContent=Yn),zt=c(t),L=p(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-jdbdyl"&&(L.innerHTML=$n),Jt=c(t),G=p(t,"UL",{"data-svelte-h":!0}),l(G)!=="svelte-10e478v"&&(G.innerHTML=Wn),Dt=c(t),H=p(t,"PRE",{class:!0});var va=i(H);qt=d(va,!1),va.forEach(n),Kt=c(t),N=p(t,"H3",{"data-svelte-h":!0}),l(N)!=="svelte-4tjar6"&&(N.textContent=On),Qt=c(t),j=p(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-fth5y1"&&(j.innerHTML=zn),Ut=c(t),R=p(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-jfw0g6"&&(R.innerHTML=Jn),Ft=c(t),B=p(t,"PRE",{class:!0});var Pa=i(B);Vt=d(Pa,!1),Pa.forEach(n),Xt=c(t),Z=p(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-bdd15a"&&(Z.textContent=Dn),tn=c(t),Y=p(t,"PRE",{class:!0});var ya=i(Y);nn=d(ya,!1),ya.forEach(n),an=c(t),$=p(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-xg27jd"&&($.innerHTML=qn),sn=c(t),W=p(t,"PRE",{class:!0});var Sa=i(W);en=d(Sa,!1),Sa.forEach(n),pn=c(t),O=p(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-67q58a"&&(O.innerHTML=Kn),on=c(t),z=p(t,"P",{"data-svelte-h":!0}),l(z)!=="svelte-iopbuc"&&(z.innerHTML=Qn),cn=c(t),J=p(t,"PRE",{class:!0});var Ma=i(J);ln=d(Ma,!1),Ma.forEach(n),un=c(t),D=p(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-15w802t"&&(D.innerHTML=Un),rn=c(t),q=p(t,"PRE",{class:!0});var _a=i(q);kn=d(_a,!1),_a.forEach(n),dn=c(t),K=p(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-rhpsxd"&&(K.innerHTML=Fn),gn=c(t),Q=p(t,"H3",{"data-svelte-h":!0}),l(Q)!=="svelte-9nes82"&&(Q.textContent=Vn),mn=c(t),U=p(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-xyqt02"&&(U.textContent=Xn),fn=c(t),yt(F.$$.fragment,t),hn=c(t),h=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-krzvkx"&&(h.textContent=ta),xn=c(t),V=p(t,"PRE",{class:!0});var Ta=i(V);wn=d(Ta,!1),Ta.forEach(n),vn=c(t),X=p(t,"PRE",{class:!0});var Aa=i(X);Pn=d(Aa,!1),Aa.forEach(n),yn=c(t),tt=p(t,"PRE",{class:!0});var Ca=i(tt);Sn=d(Ca,!1),Ca.forEach(n),Mn=c(t),nt=p(t,"PRE",{class:!0});var Ea=i(nt);_n=d(Ea,!1),Ea.forEach(n),Tn=c(t),at=p(t,"H2",{"data-svelte-h":!0}),l(at)!=="svelte-4opca7"&&(at.textContent=na),An=c(t),st=p(t,"P",{"data-svelte-h":!0}),l(st)!=="svelte-fy3v6t"&&(st.textContent=aa),Cn=c(t),g=p(t,"DIV",{class:!0});var v=i(g);et=p(v,"DIV",{class:!0,"data-svelte-h":!0}),l(et)!=="svelte-1kqyz2o"&&(et.textContent=sa),rt=p(v,"P",{"data-svelte-h":!0}),l(rt)!=="svelte-rpll91"&&(rt.innerHTML=ea),yt(pt.$$.fragment,v),kt=p(v,"P",{"data-svelte-h":!0}),l(kt)!=="svelte-1j1r4ki"&&(kt.innerHTML=pa),dt=p(v,"P",{"data-svelte-h":!0}),l(dt)!=="svelte-1gn3x64"&&(dt.innerHTML=oa),gt=p(v,"P",{"data-svelte-h":!0}),l(gt)!=="svelte-m2hi2k"&&(gt.innerHTML=ca),yt(ot.$$.fragment,v),v.forEach(n),En=c(t),r=p(t,"DIV",{class:!0});var w=i(r);ct=p(w,"DIV",{class:!0,"data-svelte-h":!0}),l(ct)!=="svelte-i1p19j"&&(ct.textContent=la),mt=p(w,"P",{"data-svelte-h":!0}),l(mt)!=="svelte-1toofm7"&&(mt.innerHTML=ua),ft=p(w,"OL",{"data-svelte-h":!0}),l(ft)!=="svelte-1d1bot1"&&(ft.innerHTML=ia),ht=p(w,"P",{"data-svelte-h":!0}),l(ht)!=="svelte-ixvpaq"&&(ht.textContent=ra),xt=p(w,"P",{"data-svelte-h":!0}),l(xt)!=="svelte-hdfstb"&&(xt.textContent=ka),wt=p(w,"OL",{"data-svelte-h":!0}),l(wt)!=="svelte-166efdg"&&(wt.innerHTML=da),vt=p(w,"P",{"data-svelte-h":!0}),l(vt)!=="svelte-14jkyom"&&(vt.textContent=ga),yt(lt.$$.fragment,w),w.forEach(n),In=c(t),ut=p(t,"H2",{"data-svelte-h":!0}),l(ut)!=="svelte-p2uhy5"&&(ut.textContent=ma),bn=c(t),it=p(t,"P",{"data-svelte-h":!0}),l(it)!=="svelte-qgobpx"&&(it.textContent=fa),this.h()},h(){u(f,"target","_blank"),u(f,"href","/editor#eNrNU99r2zAQ/lcOPdngGC9rGJi+bHtoyugIy57aFKJKl1jgSEY+NQnB//vkH0ndrEk3tkIfLOvudPed9H23Y7woWLpjwkhkKRM5L0u41gvzuSgAN4RaluD3u5meUf0Ji5xwStzShC8xCNsIWSRnNdygdrW/dlZtTsWqiBXeV7L0bseUZOmHiC1MLtFet8Yz9H2JA3xtHOFfOXWM/MOsy1hkKpcWddCGZvTTF4nJL8G8u9U8jPbBacEFxktr1kESJ6OnQC9rijkKgnXGCbbGwZprAjLg25CwMhaBPxhH8TyMc1xQcFT9YH01uVvpFzo8PjijL47I6A7/hltlfPH6AYPGqJ8jjE6lh/+MeIu55HvExvhTxL4/fKaAiG080aMkYluWDpOkilohDM8J4YD9RkqAAXR3PcFZL6U5CKoEDo9KooElXyGIjFsuCC20zUh42MJ3petuTQzTDOsU8r/CKi3QX8osGnu8tS5H+Kb0UppVPP/fsrkcHDTTjdMZAk8ydvE7Yx/Pju5en2/HWDcPrzPWHPxbxsboCfJ70Ii++2bOS+F6/E2Qi+y98vWpx9d99Qui/h1F"),u(f,"title","Open in our Online Editor"),Nt.a=null,u(T,"class","language-js"),Rt.a=null,u(A,"class","language-js"),Zt.a=null,u(C,"class","language-js"),$t.a=null,u(E,"class","language-js"),qt.a=null,u(H,"class","language-js"),Vt.a=null,u(B,"class","language-js"),nn.a=null,u(Y,"class","language-js"),en.a=null,u(W,"class","language-js"),ln.a=null,u(J,"class","language-js"),kn.a=null,u(q,"class","language-js"),u(h,"target","_blank"),u(h,"href","/editor#eNrNU1tr2zAU/isHsQcbXON1KwPTPWRjrGWkhGVPa8qsSiexwJGMfLw0GP/3ybfc2qQb62APlnXu5+j7TsV4nrO4YsJIZDETGS8KuNZzM8pzwAdCLQtw92qmZ9R8o8nkx81o/AneQ9L7JYNNWOSEU+KWJnyBnt9FkUUqrYYx6rLRN8q6i6lZHbDc6QoW31ZMSRa/DtjcZBLtdSfsdTak2LTWCNV+/c+lOqz81ayKUKQqkxa115lm9M0lCckdHg+HsfxgsE5zLjBcWLPyojC62Bq2YckUMxQEq5QTrE0JK64JyIDrQ8LSWAR+b0oKEz/McE7eQfaN9NFk5VI/0eKh44w+lERG9/XH3Crjkjcv6LVC8x5+cCzc/+uK3zGTfKjYCr9bcVfv71EgYA8O6YsoYGsWn0dRHXRMOD/FhE3tF6ZC8qrasqGGM+gnPoLcTmDrCKoADj+VRAMLvkQQKbdcEFroWpJwv4YbpZueTQjTFJsQcr/cKi3QjWbmrXy1tmWG8EXphTTLMHlp8lyebZjTb9UJGI/i9vYxbm9ObvDA0n+NW78bz+PWOv4pblfoYHJ30IhuhnbnC1HuoDhBLtL/FbV3O6jd1b8AkR8pBQ=="),u(h,"title","Open in our Online Editor"),wn.a=null,u(V,"class","language-js"),Pn.a=null,u(X,"class","language-js"),Sn.a=null,u(tt,"class","language-js"),_n.a=null,u(nt,"class","language-js"),u(et,"class","remark-container__title"),u(g,"class","remark-container exercise"),u(ct,"class","remark-container__title"),u(r,"class","remark-container exercise")},m(t,a){s(t,x,a),s(t,Ct,a),s(t,P,a),s(t,Et,a),s(t,y,a),s(t,It,a),s(t,S,a),s(t,bt,a),s(t,M,a),s(t,Lt,a),St(_,t,a),s(t,Gt,a),s(t,f,a),s(t,Ht,a),s(t,T,a),Nt.m(ba,T),s(t,jt,a),s(t,A,a),Rt.m(La,A),s(t,Bt,a),s(t,C,a),Zt.m(Ga,C),s(t,Yt,a),s(t,E,a),$t.m(Ha,E),s(t,Wt,a),s(t,I,a),s(t,Ot,a),s(t,b,a),s(t,zt,a),s(t,L,a),s(t,Jt,a),s(t,G,a),s(t,Dt,a),s(t,H,a),qt.m(Na,H),s(t,Kt,a),s(t,N,a),s(t,Qt,a),s(t,j,a),s(t,Ut,a),s(t,R,a),s(t,Ft,a),s(t,B,a),Vt.m(ja,B),s(t,Xt,a),s(t,Z,a),s(t,tn,a),s(t,Y,a),nn.m(Ra,Y),s(t,an,a),s(t,$,a),s(t,sn,a),s(t,W,a),en.m(Ba,W),s(t,pn,a),s(t,O,a),s(t,on,a),s(t,z,a),s(t,cn,a),s(t,J,a),ln.m(Za,J),s(t,un,a),s(t,D,a),s(t,rn,a),s(t,q,a),kn.m(Ya,q),s(t,dn,a),s(t,K,a),s(t,gn,a),s(t,Q,a),s(t,mn,a),s(t,U,a),s(t,fn,a),St(F,t,a),s(t,hn,a),s(t,h,a),s(t,xn,a),s(t,V,a),wn.m($a,V),s(t,vn,a),s(t,X,a),Pn.m(Wa,X),s(t,yn,a),s(t,tt,a),Sn.m(Oa,tt),s(t,Mn,a),s(t,nt,a),_n.m(za,nt),s(t,Tn,a),s(t,at,a),s(t,An,a),s(t,st,a),s(t,Cn,a),s(t,g,a),m(g,et),m(g,rt),St(pt,g,null),m(g,kt),m(g,dt),m(g,gt),St(ot,g,null),s(t,En,a),s(t,r,a),m(r,ct),m(r,mt),m(r,ft),m(r,ht),m(r,xt),m(r,wt),m(r,vt),St(lt,r,null),s(t,In,a),s(t,ut,a),s(t,bn,a),s(t,it,a),Ln=!0},p:Da,i(t){Ln||(Mt(_.$$.fragment,t),Mt(F.$$.fragment,t),Mt(pt.$$.fragment,t),Mt(ot.$$.fragment,t),Mt(lt.$$.fragment,t),Ln=!0)},o(t){_t(_.$$.fragment,t),_t(F.$$.fragment,t),_t(pt.$$.fragment,t),_t(ot.$$.fragment,t),_t(lt.$$.fragment,t),Ln=!1},d(t){t&&(n(x),n(Ct),n(P),n(Et),n(y),n(It),n(S),n(bt),n(M),n(Lt),n(Gt),n(f),n(Ht),n(T),n(jt),n(A),n(Bt),n(C),n(Yt),n(E),n(Wt),n(I),n(Ot),n(b),n(zt),n(L),n(Jt),n(G),n(Dt),n(H),n(Kt),n(N),n(Qt),n(j),n(Ut),n(R),n(Ft),n(B),n(Xt),n(Z),n(tn),n(Y),n(an),n($),n(sn),n(W),n(pn),n(O),n(on),n(z),n(cn),n(J),n(un),n(D),n(rn),n(q),n(dn),n(K),n(gn),n(Q),n(mn),n(U),n(fn),n(hn),n(h),n(xn),n(V),n(vn),n(X),n(yn),n(tt),n(Mn),n(nt),n(Tn),n(at),n(An),n(st),n(Cn),n(g),n(En),n(r),n(In),n(ut),n(bn),n(it)),Tt(_,t),Tt(F,t),Tt(pt),Tt(ot),Tt(lt)}}}class Xa extends qa{constructor(x){super(),Ka(this,x,null,Qa,Ja,{})}}export{Xa as component};
