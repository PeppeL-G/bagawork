import{s as Ja,n as Ua}from"../chunks/scheduler.B0TnBjPs.js";import{S as Wa,i as Fa,e,s as o,c as yt,H as k,a as p,g as l,b as c,f as Pt,d as i,n as d,h as n,o as u,j as s,m as St,p as m,t as Mt,k as _t,l as Tt}from"../chunks/index.Cnh3HYw3.js";import{V as Et}from"../chunks/ViewApp.9sx5twVU.js";function Va(Ia){let x,Ln="2. App Constants",Ct,y,Hn="This tutorial will teach you what constants in programming are, and how you can create them in a BagaWork app.",At,P,Nn="App constants vs page constants",It,S,Rn="In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it&#39;s better to use an <em>app constant</em> instead, since all different pages have access to all app constants.",bt,M,jn="Below we have an example of an app that uses the same hardcoded value (the name of the app, <code>InfoApp</code>) at multiple diffrefent pages, including on multiple different pages.",Gt,_,Lt,f,Bn="Open in Online Editor",Ht,T,Nt,ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rt,E,jt,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,Bt,C,Zt,La=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Yt,A,$t,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,zt,I,Zn="This works, but changing the name of the app in the future (for example to <code>Information App</code>) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.",Dt,b,Yn="How to create app constants",Ot,G,$n="We create app constants the same way we create page constants, but we write them in the <code>App</code> class instead. In the code below you find an example of how to create the following app constants:",Jt,L,zn="<li><code>APP_NAME</code> will have the string value <code>InfoApp</code></li> <li><code>CREATED_DATE</code> will have the string value <code>2023-09-15</code></li>",Ut,H,Wt,Na=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">CREATED_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app constants as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,N,Dn="How to use app constants",Vt,R,On="In BagaWork, everything you create in your <code>App</code> class (constants, variables and methods) are accessible in a special variable called <code>a</code> (short for <em>app</em>). To retrieve the value of a constant, you would simply write <code>a.THE_NAME_OF_THE_CONSTANT</code>, for example <code>a.APP_NAME</code>.",qt,j,Jn="To display the name of the app on the <code>MenuPage</code> we had before, the following code were used:",Kt,B,Qt,Ra='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Xt,Z,Un="With the app constants we have now, we can instead write:",tn,Y,nn,ja='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',an,$,Wn="In this case, when we create a string that only contains the special <code>${SOMETHING}</code> thing, we can actually simplify the code to:",sn,z,en,Ba='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span></code>',pn,D,Fn="When the computer executes this code, it will first retrieve the value for the <code>APP_NAME</code> constant from the <code>a</code> variable, and it gets back the string value <code>InfoApp</code>, and pass that to the <code>Text.text()</code> method, which then will display that text.",on,O,Vn="However, on the <code>MarioPage</code>, where the text we send to the <code>Text</code> component is not only the app name, but looks like this:",cn,J,ln,Za='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',un,U,qn="We have to use the complicated <code>${SOMETHING}</code> thing:",rn,W,kn,Ya='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',dn,F,Kn="The same is true for the <code>ZeldaPage</code>.",gn,V,Qn="The final solution",mn,q,Xn="So, here's the code for the app using constants, instead of harding the name of the app at multiple places.",fn,K,hn,h,ta="Open in Online Editor",xn,Q,wn,$a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,vn,X,yn,za=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,Pn,tt,Sn,Da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Mn,nt,_n,Oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Tn,at,na="Exercises",En,st,aa="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Cn,g,et,sa="Exercise 1",rt,ea='The code in <a href="/editor#eNq9VA1r2zAQ/StXMWgCwuSrW2sYwx0lZKztaANbWMqi2OfE1JaMJLc1wf99kj23cZaEbrSFxEg66T7ee3crwtKUuCviiwCJS/yYKQXnuZemgA8aeaDArFdTPtX27w3PLsa/LrzzM/gIsy8sQQWnggez+oIvkWm81kzqb2yBrXb1VEvUmeQwlIg64gtrs4aieleQgpJQxAFKRdyfKxIFxO1Swk0Ak1XpjlAiwlCh/kHcTr2emHVxQ0lq/DVeVs5G1aZR3HoKjzXazapZwzCLNrO/EvfK8ZdRHEjkrco01dcp85HWu7Fx6Wjzac2GQgSQCMlNNArvVsx5gq84mLXpdg+fRZwlfEugzYtTfZppLfjWcNeRNCEcC0zLUypa8AR5yUmb7nJYW9oNaih5IG6vYzDPidvvdApaodzbh3Iz5OviPBEZKMQEGMwjDXMhMdiEm4ISsESJ4Asr2lxkErh5DuwxUxeGArT5LRHm7BZlDmopUhC8PBLmI0FFgVmG5YnSVksUGA9gLg3skBgbr+2RBN+4URTSGJlC58UpH4HEMFNY0l2zfVUe7Wd6w89laGDJ5IYjz/cx/X/JDE5O/kimX0umv08yT3m/rlxGViyO48BIHyqYI3LgkY9wy8W95dBI469udeArsjusZLPIuJVJEtlRaejOU+Q8tzIpzffMiFBk2gHbkfMcd7X6FsyOO+9LzLqDDzVmg71t9kjR62I2XjILFoOFHTIxCw7g0ug8YDm1RR/GsQHSmm08MBlw/eyJtweGQb9fT/cxJmlsamlM+Y2RczsKvSCL3wAPT5ZagJIY0+uMQ/f404v394WYPbuHJ6hm/9qna6O8AeUZ1yi9xRs04/dKWGXjGP+7IWzU2u2s3WtajnZZejvf9I6epczipvgNJgtF4w==" target="_blank">this BagaWork project</a> contains an app that works like this:',pt,kt,pa="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!",dt,oa="However, to improve security and anonymousity among the agents, it has now been decided that one should never referr to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",gt,ca="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",ot,An,r,ct,la="Exercise 2",mt,ua="It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (<code>a</code>, <code>b</code>, <code>c</code>, etc.), but they are quite hard to type on a keyboard, since they don&#39;t have their own keys on the keyboard, so people often copy-paste them:",ft,ia='<li>Search for the smiley using Google, for example &quot;<a href="https://www.google.com/search?q=smiley+smiling+face" rel="nofollow" target="_blank">smiley smiling face</a>&quot;</li> <li>Find and copy the smiley from a search result</li> <li>Paste the smiley wherever they want to write it</li> ',ht,ra="This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!",xt,ka="Your task is to:",wt,da='<li>Open <a href="/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==" target="_blank">this BagaWork project</a></li> <li>Create the following three app constants:<ul><li><code>SMILEY_SMILING</code> storing 🙂</li> <li><code>SMILEY_GRIN</code> storing 😁</li> <li><code>SMILEY_LAUGH_CRYING</code> storing 🤣</li></ul></li> <li>Add a few pages that make use of these app constants to display the smileys</li> ',vt,ga="When you are done, your app can for example work like this:",lt,In,ut,ma="That's it!",bn,it,fa="Great work, now you also now how to use app constants in BagaWork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.",Gn;return _=new Et({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`InfoApp\`),
			Space.size(0.05),
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
	
}`,x:750,y:200}]}}}),K=new Et({props:{project:{app:{code:`class InfoApp extends App{
	
	APP_NAME = \`InfoApp\`
	
	createStartPage(){
		return MenuPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(a.APP_NAME),
			Space.size(0.05),
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
	
}`,x:750,y:200}]}}}),pt=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),ot=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),lt=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:1050,y:200}]}}}),{c(){x=e("h1"),x.textContent=Ln,Ct=o(),y=e("p"),y.textContent=Hn,At=o(),P=e("h2"),P.textContent=Nn,It=o(),S=e("p"),S.innerHTML=Rn,bt=o(),M=e("p"),M.innerHTML=jn,Gt=o(),yt(_.$$.fragment),Lt=o(),f=e("a"),f.textContent=Bn,Ht=o(),T=e("pre"),Nt=new k(!1),Rt=o(),E=e("pre"),jt=new k(!1),Bt=o(),C=e("pre"),Zt=new k(!1),Yt=o(),A=e("pre"),$t=new k(!1),zt=o(),I=e("p"),I.innerHTML=Zn,Dt=o(),b=e("h3"),b.textContent=Yn,Ot=o(),G=e("p"),G.innerHTML=$n,Jt=o(),L=e("ul"),L.innerHTML=zn,Ut=o(),H=e("pre"),Wt=new k(!1),Ft=o(),N=e("h3"),N.textContent=Dn,Vt=o(),R=e("p"),R.innerHTML=On,qt=o(),j=e("p"),j.innerHTML=Jn,Kt=o(),B=e("pre"),Qt=new k(!1),Xt=o(),Z=e("p"),Z.textContent=Un,tn=o(),Y=e("pre"),nn=new k(!1),an=o(),$=e("p"),$.innerHTML=Wn,sn=o(),z=e("pre"),en=new k(!1),pn=o(),D=e("p"),D.innerHTML=Fn,on=o(),O=e("p"),O.innerHTML=Vn,cn=o(),J=e("pre"),ln=new k(!1),un=o(),U=e("p"),U.innerHTML=qn,rn=o(),W=e("pre"),kn=new k(!1),dn=o(),F=e("p"),F.innerHTML=Kn,gn=o(),V=e("h3"),V.textContent=Qn,mn=o(),q=e("p"),q.textContent=Xn,fn=o(),yt(K.$$.fragment),hn=o(),h=e("a"),h.textContent=ta,xn=o(),Q=e("pre"),wn=new k(!1),vn=o(),X=e("pre"),yn=new k(!1),Pn=o(),tt=e("pre"),Sn=new k(!1),Mn=o(),nt=e("pre"),_n=new k(!1),Tn=o(),at=e("h2"),at.textContent=na,En=o(),st=e("p"),st.textContent=aa,Cn=o(),g=e("div"),et=e("div"),et.textContent=sa,rt=e("p"),rt.innerHTML=ea,yt(pt.$$.fragment),kt=e("p"),kt.innerHTML=pa,dt=e("p"),dt.innerHTML=oa,gt=e("p"),gt.innerHTML=ca,yt(ot.$$.fragment),An=o(),r=e("div"),ct=e("div"),ct.textContent=la,mt=e("p"),mt.innerHTML=ua,ft=e("ol"),ft.innerHTML=ia,ht=e("p"),ht.textContent=ra,xt=e("p"),xt.textContent=ka,wt=e("ol"),wt.innerHTML=da,vt=e("p"),vt.textContent=ga,yt(lt.$$.fragment),In=o(),ut=e("h2"),ut.textContent=ma,bn=o(),it=e("p"),it.textContent=fa,this.h()},l(t){x=p(t,"H1",{"data-svelte-h":!0}),l(x)!=="svelte-13nebke"&&(x.textContent=Ln),Ct=c(t),y=p(t,"P",{"data-svelte-h":!0}),l(y)!=="svelte-qkh4k6"&&(y.textContent=Hn),At=c(t),P=p(t,"H2",{"data-svelte-h":!0}),l(P)!=="svelte-146a9ch"&&(P.textContent=Nn),It=c(t),S=p(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1w6vkkr"&&(S.innerHTML=Rn),bt=c(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-4a6qp1"&&(M.innerHTML=jn),Gt=c(t),Pt(_.$$.fragment,t),Lt=c(t),f=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-12aqy3"&&(f.textContent=Bn),Ht=c(t),T=p(t,"PRE",{class:!0});var a=i(T);Nt=d(a,!1),a.forEach(n),Rt=c(t),E=p(t,"PRE",{class:!0});var ha=i(E);jt=d(ha,!1),ha.forEach(n),Bt=c(t),C=p(t,"PRE",{class:!0});var xa=i(C);Zt=d(xa,!1),xa.forEach(n),Yt=c(t),A=p(t,"PRE",{class:!0});var wa=i(A);$t=d(wa,!1),wa.forEach(n),zt=c(t),I=p(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1rq9mb4"&&(I.innerHTML=Zn),Dt=c(t),b=p(t,"H3",{"data-svelte-h":!0}),l(b)!=="svelte-1lqrax7"&&(b.textContent=Yn),Ot=c(t),G=p(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-jdbdyl"&&(G.innerHTML=$n),Jt=c(t),L=p(t,"UL",{"data-svelte-h":!0}),l(L)!=="svelte-10e478v"&&(L.innerHTML=zn),Ut=c(t),H=p(t,"PRE",{class:!0});var va=i(H);Wt=d(va,!1),va.forEach(n),Ft=c(t),N=p(t,"H3",{"data-svelte-h":!0}),l(N)!=="svelte-4tjar6"&&(N.textContent=Dn),Vt=c(t),R=p(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-fth5y1"&&(R.innerHTML=On),qt=c(t),j=p(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-jfw0g6"&&(j.innerHTML=Jn),Kt=c(t),B=p(t,"PRE",{class:!0});var ya=i(B);Qt=d(ya,!1),ya.forEach(n),Xt=c(t),Z=p(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-bdd15a"&&(Z.textContent=Un),tn=c(t),Y=p(t,"PRE",{class:!0});var Pa=i(Y);nn=d(Pa,!1),Pa.forEach(n),an=c(t),$=p(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-xg27jd"&&($.innerHTML=Wn),sn=c(t),z=p(t,"PRE",{class:!0});var Sa=i(z);en=d(Sa,!1),Sa.forEach(n),pn=c(t),D=p(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-67q58a"&&(D.innerHTML=Fn),on=c(t),O=p(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-iopbuc"&&(O.innerHTML=Vn),cn=c(t),J=p(t,"PRE",{class:!0});var Ma=i(J);ln=d(Ma,!1),Ma.forEach(n),un=c(t),U=p(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-15w802t"&&(U.innerHTML=qn),rn=c(t),W=p(t,"PRE",{class:!0});var _a=i(W);kn=d(_a,!1),_a.forEach(n),dn=c(t),F=p(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-rhpsxd"&&(F.innerHTML=Kn),gn=c(t),V=p(t,"H3",{"data-svelte-h":!0}),l(V)!=="svelte-9nes82"&&(V.textContent=Qn),mn=c(t),q=p(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-xyqt02"&&(q.textContent=Xn),fn=c(t),Pt(K.$$.fragment,t),hn=c(t),h=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1mo4thj"&&(h.textContent=ta),xn=c(t),Q=p(t,"PRE",{class:!0});var Ta=i(Q);wn=d(Ta,!1),Ta.forEach(n),vn=c(t),X=p(t,"PRE",{class:!0});var Ea=i(X);yn=d(Ea,!1),Ea.forEach(n),Pn=c(t),tt=p(t,"PRE",{class:!0});var Ca=i(tt);Sn=d(Ca,!1),Ca.forEach(n),Mn=c(t),nt=p(t,"PRE",{class:!0});var Aa=i(nt);_n=d(Aa,!1),Aa.forEach(n),Tn=c(t),at=p(t,"H2",{"data-svelte-h":!0}),l(at)!=="svelte-4opca7"&&(at.textContent=na),En=c(t),st=p(t,"P",{"data-svelte-h":!0}),l(st)!=="svelte-fy3v6t"&&(st.textContent=aa),Cn=c(t),g=p(t,"DIV",{class:!0});var v=i(g);et=p(v,"DIV",{class:!0,"data-svelte-h":!0}),l(et)!=="svelte-1kqyz2o"&&(et.textContent=sa),rt=p(v,"P",{"data-svelte-h":!0}),l(rt)!=="svelte-rpll91"&&(rt.innerHTML=ea),Pt(pt.$$.fragment,v),kt=p(v,"P",{"data-svelte-h":!0}),l(kt)!=="svelte-1j1r4ki"&&(kt.innerHTML=pa),dt=p(v,"P",{"data-svelte-h":!0}),l(dt)!=="svelte-1gn3x64"&&(dt.innerHTML=oa),gt=p(v,"P",{"data-svelte-h":!0}),l(gt)!=="svelte-m2hi2k"&&(gt.innerHTML=ca),Pt(ot.$$.fragment,v),v.forEach(n),An=c(t),r=p(t,"DIV",{class:!0});var w=i(r);ct=p(w,"DIV",{class:!0,"data-svelte-h":!0}),l(ct)!=="svelte-i1p19j"&&(ct.textContent=la),mt=p(w,"P",{"data-svelte-h":!0}),l(mt)!=="svelte-1toofm7"&&(mt.innerHTML=ua),ft=p(w,"OL",{"data-svelte-h":!0}),l(ft)!=="svelte-1d1bot1"&&(ft.innerHTML=ia),ht=p(w,"P",{"data-svelte-h":!0}),l(ht)!=="svelte-ixvpaq"&&(ht.textContent=ra),xt=p(w,"P",{"data-svelte-h":!0}),l(xt)!=="svelte-hdfstb"&&(xt.textContent=ka),wt=p(w,"OL",{"data-svelte-h":!0}),l(wt)!=="svelte-166efdg"&&(wt.innerHTML=da),vt=p(w,"P",{"data-svelte-h":!0}),l(vt)!=="svelte-14jkyom"&&(vt.textContent=ga),Pt(lt.$$.fragment,w),w.forEach(n),In=c(t),ut=p(t,"H2",{"data-svelte-h":!0}),l(ut)!=="svelte-p2uhy5"&&(ut.textContent=ma),bn=c(t),it=p(t,"P",{"data-svelte-h":!0}),l(it)!=="svelte-qgobpx"&&(it.textContent=fa),this.h()},h(){u(f,"target","_blank"),u(f,"href","/editor#eNrNU01v2zAM/SuETjbgGG67ooCxy9ZDWxQZgmWnLQOiSkwswJEMmVqSBf7vlT+SOWmTblgL9GBZJEU+Su9xw3hRsHTDhJHIUiZyXpZwp2fmU1EArgi1LMHvNxM9ofoTFjnhmLilEZ9jELYRskjOahiidrW/dlZtTsWqiBXeV7L0x4YpydKziM1MLtHetcYe+rbEDr42DvBvnDpE/mqWZSwylUuLOmhDE/rmi8Tkl2Da3WoaRtvguOAC41L9xiCJk8s/gV7WGHMUBMuME6yNgyXXBGTAtyFhYSwCfzCO4mkY5zij4KD6zro2uVvoZzo8PDihz47I6A5/yK0yvnj9gEFj1M8RRsfSw/9G/I655FvExvhbxL4/3FNAxFae6MskYmuWnidJFbVCOD8lhB32GykBBtDd9QhnvZTmIKgSOPxSEg3M+QJBZNxyQWihbUbCwxq+KF13a2IYZ1inkP8VVmmB/lJm1ti3a+tyhHul59Is4ulry+bjYKeZbpxOEHiUsQ9PGbs4Obpbfb4dY908vMxYc/BfGbtFT5Dfg0b03TdzXgrX42+EXGTvla+rHl8/q0ePwx1B"),u(f,"title","Open in our Online Editor"),Nt.a=null,u(T,"class","language-js"),jt.a=null,u(E,"class","language-js"),Zt.a=null,u(C,"class","language-js"),$t.a=null,u(A,"class","language-js"),Wt.a=null,u(H,"class","language-js"),Qt.a=null,u(B,"class","language-js"),nn.a=null,u(Y,"class","language-js"),en.a=null,u(z,"class","language-js"),ln.a=null,u(J,"class","language-js"),kn.a=null,u(W,"class","language-js"),u(h,"target","_blank"),u(h,"href","/editor#eNrNU1tv0zAU/itHFg+JlEVhMCFF8FAmxCbUqaI8QRHx7NPGUmpHzgldifLf59x6Y+2GGBIPcXzu5/j7TsV4nrO4YsJIZDETGS8KuNZzM8pzwDtCLQtw92qmZ9R8o8nkx81o/AHeQdL7JYNNWOSEU+KWJnyBnt9FkUUqrYYx6rLRN8q6i6lZHbDc6QoWf6uYkix+GbC5ySTa607Y62xIsWmtEar9+h9LdVj5s1kVoUhVJi1qrzPN6ItLEpI7PB4OY/nBYJ3mXGBYqF/oRWF0sTVsw5IpZigIViknWJsSVlwTkAHXh4SlsQj81pQUJn6Y4Zy8g+wb6dJk5VI/0OKh44zel0RG9/XH3Crjkjcv6LVC8x5+cCzc/+uKXzGTfKjYCk+tuKv39ygQsDuH9EUUsDWLz6OoDjomnJ9iwqb2M1MheVFt2VDDGfQTH0FuJ7B1BFUAh59KooEFXyKIlFsuCC10LUm4XcON0k3PJoRpik0IuV9ulRboRjPzVr5a2zJD+KT0QpplmDw3ed6ebZjTb9UJGI/i9vp33F6d3OCBpf8at343HsetdfxT3K7QweTuoBHdDO3OF6LcQXGCXKT/K2pvdlD7Xt8DfbQpAQ=="),u(h,"title","Open in our Online Editor"),wn.a=null,u(Q,"class","language-js"),yn.a=null,u(X,"class","language-js"),Sn.a=null,u(tt,"class","language-js"),_n.a=null,u(nt,"class","language-js"),u(et,"class","remark-container__title"),u(g,"class","remark-container exercise"),u(ct,"class","remark-container__title"),u(r,"class","remark-container exercise")},m(t,a){s(t,x,a),s(t,Ct,a),s(t,y,a),s(t,At,a),s(t,P,a),s(t,It,a),s(t,S,a),s(t,bt,a),s(t,M,a),s(t,Gt,a),St(_,t,a),s(t,Lt,a),s(t,f,a),s(t,Ht,a),s(t,T,a),Nt.m(ba,T),s(t,Rt,a),s(t,E,a),jt.m(Ga,E),s(t,Bt,a),s(t,C,a),Zt.m(La,C),s(t,Yt,a),s(t,A,a),$t.m(Ha,A),s(t,zt,a),s(t,I,a),s(t,Dt,a),s(t,b,a),s(t,Ot,a),s(t,G,a),s(t,Jt,a),s(t,L,a),s(t,Ut,a),s(t,H,a),Wt.m(Na,H),s(t,Ft,a),s(t,N,a),s(t,Vt,a),s(t,R,a),s(t,qt,a),s(t,j,a),s(t,Kt,a),s(t,B,a),Qt.m(Ra,B),s(t,Xt,a),s(t,Z,a),s(t,tn,a),s(t,Y,a),nn.m(ja,Y),s(t,an,a),s(t,$,a),s(t,sn,a),s(t,z,a),en.m(Ba,z),s(t,pn,a),s(t,D,a),s(t,on,a),s(t,O,a),s(t,cn,a),s(t,J,a),ln.m(Za,J),s(t,un,a),s(t,U,a),s(t,rn,a),s(t,W,a),kn.m(Ya,W),s(t,dn,a),s(t,F,a),s(t,gn,a),s(t,V,a),s(t,mn,a),s(t,q,a),s(t,fn,a),St(K,t,a),s(t,hn,a),s(t,h,a),s(t,xn,a),s(t,Q,a),wn.m($a,Q),s(t,vn,a),s(t,X,a),yn.m(za,X),s(t,Pn,a),s(t,tt,a),Sn.m(Da,tt),s(t,Mn,a),s(t,nt,a),_n.m(Oa,nt),s(t,Tn,a),s(t,at,a),s(t,En,a),s(t,st,a),s(t,Cn,a),s(t,g,a),m(g,et),m(g,rt),St(pt,g,null),m(g,kt),m(g,dt),m(g,gt),St(ot,g,null),s(t,An,a),s(t,r,a),m(r,ct),m(r,mt),m(r,ft),m(r,ht),m(r,xt),m(r,wt),m(r,vt),St(lt,r,null),s(t,In,a),s(t,ut,a),s(t,bn,a),s(t,it,a),Gn=!0},p:Ua,i(t){Gn||(Mt(_.$$.fragment,t),Mt(K.$$.fragment,t),Mt(pt.$$.fragment,t),Mt(ot.$$.fragment,t),Mt(lt.$$.fragment,t),Gn=!0)},o(t){_t(_.$$.fragment,t),_t(K.$$.fragment,t),_t(pt.$$.fragment,t),_t(ot.$$.fragment,t),_t(lt.$$.fragment,t),Gn=!1},d(t){t&&(n(x),n(Ct),n(y),n(At),n(P),n(It),n(S),n(bt),n(M),n(Gt),n(Lt),n(f),n(Ht),n(T),n(Rt),n(E),n(Bt),n(C),n(Yt),n(A),n(zt),n(I),n(Dt),n(b),n(Ot),n(G),n(Jt),n(L),n(Ut),n(H),n(Ft),n(N),n(Vt),n(R),n(qt),n(j),n(Kt),n(B),n(Xt),n(Z),n(tn),n(Y),n(an),n($),n(sn),n(z),n(pn),n(D),n(on),n(O),n(cn),n(J),n(un),n(U),n(rn),n(W),n(dn),n(F),n(gn),n(V),n(mn),n(q),n(fn),n(hn),n(h),n(xn),n(Q),n(vn),n(X),n(Pn),n(tt),n(Mn),n(nt),n(Tn),n(at),n(En),n(st),n(Cn),n(g),n(An),n(r),n(In),n(ut),n(bn),n(it)),Tt(_,t),Tt(K,t),Tt(pt),Tt(ot),Tt(lt)}}}class Xa extends Wa{constructor(x){super(),Fa(this,x,null,Va,Ja,{})}}export{Xa as component};
