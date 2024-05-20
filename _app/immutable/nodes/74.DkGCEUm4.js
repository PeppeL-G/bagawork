import{s as Wa,n as Oa}from"../chunks/scheduler.DFPFbGJz.js";import{S as Ja,i as qa,e as s,s as c,c as Tt,H as d,a as p,g as o,b as l,d as r,f as Et,n as g,h as n,o as i,j as e,m as Ct,p as u,t as It,k as Lt,l as bt}from"../chunks/index.CzDE4dZi.js";import{V as Nt}from"../chunks/ViewApp.C2MU7-ZI.js";function Xa(Ia){let x,Cn="2. App Constants",Gt,y,In="This tutorial will teach you what constants in programming are, and how you can create them in a Bagawork app.",Ht,_,Ln="App constants vs page constants",Bt,M,bn="In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it&#39;s better to use an <em>app constant</em> instead, since all different pages have access to all app constants.",Rt,A,Nn="Below we have an example of an app that uses the same hardcoded value (the name of the app, <code>InfoApp</code>) at multiple diffrefent pages, including on multiple different pages.",jt,f,T,v,Gn="Open in Online Editor",ot,Zt,La=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ct,Yt,ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,lt,zt,Na=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ut,$t,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Vt,E,Hn="This works, but changing the name of the app in the future (for example to <code>Information App</code>) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.",Dt,C,Bn="How to create app constants",Wt,I,Rn="We create app constants the same way we create page constants, but we write them in the <code>App</code> class instead. In the code below you find an example of how to create the following app constants:",Ot,L,jn="<li><code>APP_NAME</code> will have the string value <code>InfoApp</code></li> <li><code>CREATED_DATE</code> will have the string value <code>2023-09-15</code></li>",Jt,b,qt,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">CREATED_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app constants as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Xt,N,Zn="How to use app constants",Ut,G,Yn="In Bagawork, everything you create in your <code>App</code> class (constants, variables and methods) are accessible in a special variable called <code>a</code> (short for <em>app</em>). To retrieve the value of a constant, you would simply write <code>a.THE_NAME_OF_THE_CONSTANT</code>, for example <code>a.APP_NAME</code>.",Ft,H,zn="To display the name of the app on the <code>MenuPage</code> we had before, the following code were used:",Kt,B,Qt,Ba='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',tn,R,$n="With the app constants we have now, we can instead write:",nn,j,an,Ra='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',en,Z,Vn="In this case, when we create a string that only contains the special <code>${SOMETHING}</code> thing, we can actually simplify the code to:",sn,Y,pn,ja='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span></code>',on,z,Dn="When the computer executes this code, it will first retrieve the value for the <code>APP_NAME</code> constant from the <code>a</code> variable, and it gets back the string value <code>InfoApp</code>, and pass that to the <code>Text.text()</code> method, which then will display that text.",cn,$,Wn="However, on the <code>MarioPage</code>, where the text we send to the <code>Text</code> component is not only the app name, but looks like this:",ln,V,un,Za='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',rn,D,On="We have to use the complicated <code>${SOMETHING}</code> thing:",kn,W,dn,Ya='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',gn,O,Jn="The same is true for the <code>ZeldaPage</code>.",mn,J,qn="The final solution",fn,q,Xn="So, here's the code for the app using constants, instead of harding the name of the app at multiple places.",hn,h,X,w,Un="Open in Online Editor",it,xn,za=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,rt,vn,$a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,kt,wn,Va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,dt,Sn,Da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Pn,U,Fn="Exercises",yn,F,Kn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",_n,m,K,Qn="Exercise 1",gt,ta='The code in <a href="/editor#eNq9VA1r2zAQ/StXMWgCwuSrW2sYwx0lZKztaANbWMqi2OfE1JaMJLc1wf99kj23cZaEbrSFxEg66T7ee3crwtKUuCviiwCJS/yYKQXnuZemgA8aeaDArFdTPtX27w3PLsa/LrzzM/gIsy8sQQWnggez+oIvkWm81kzqb2yBrXb1VEvUmeQwlIg64gtrs4aieleQgpJQxAFKRdyfKxIFxO1Swk0Ak1XpjlAiwlCh/kHcTr2emHVxQ0lq/DVeVs5G1aZR3HoKjzXazapZwzCLNrO/EvfK8ZdRHEjkrco01dcp85HWu7Fx6Wjzac2GQgSQCMlNNArvVsx5gq84mLXpdg+fRZwlfEugzYtTfZppLfjWcNeRNCEcC0zLUypa8AR5yUmb7nJYW9oNaih5IG6vYzDPidvvdApaodzbh3Iz5OviPBEZKMQEGMwjDXMhMdiEm4ISsESJ4Asr2lxkErh5DuwxUxeGArT5LRHm7BZlDmopUhC8PBLmI0FFgVmG5YnSVksUGA9gLg3skBgbr+2RBN+4URTSGJlC58UpH4HEMFNY0l2zfVUe7Wd6w89laGDJ5IYjz/cx/X/JDE5O/kimX0umv08yT3m/rlxGViyO48BIHyqYI3LgkY9wy8W95dBI469udeArsjusZLPIuJVJEtlRaejOU+Q8tzIpzffMiFBk2gHbkfMcd7X6FsyOO+9LzLqDDzVmg71t9kjR62I2XjILFoOFHTIxCw7g0ug8YDm1RR/GsQHSmm08MBlw/eyJtweGQb9fT/cxJmlsamlM+Y2RczsKvSCL3wAPT5ZagJIY0+uMQ/f404v394WYPbuHJ6hm/9qna6O8AeUZ1yi9xRs04/dKWGXjGP+7IWzU2u2s3WtajnZZejvf9I6epczipvgNJgtF4w==" target="_blank">this BagaWork project</a> contains an app that works like this:',_t,Q,mt,na="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!",ft,aa="However, to improve security and anonymousity among the agents, it has now been decided that one should never referr to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",ht,ea="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",Mt,tt,Mn,k,nt,sa="Exercise 2",xt,pa="It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (<code>a</code>, <code>b</code>, <code>c</code>, etc.), but they are quite hard to type on a keyboard, since they don&#39;t have their own keys on the keyboard, so people often copy-paste them:",vt,oa='<li>Search for the smiley using Google, for example &quot;<a href="https://www.google.com/search?q=smiley+smiling+face" rel="nofollow" target="_blank">smiley smiling face</a>&quot;</li> <li>Find and copy the smiley from a search result</li> <li>Paste the smiley wherever they want to write it</li> ',wt,ca="This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!",St,la="Your task is to:",Pt,ua='<li>Open <a href="/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==" target="_blank">this BagaWork project</a></li> <li>Create the following three app constants:<ul><li><code>SMILEY_SMILING</code> storing 🙂</li> <li><code>SMILEY_GRIN</code> storing 😁</li> <li><code>SMILEY_LAUGH_CRYING</code> storing 🤣</li></ul></li> <li>Add a few pages that make use of these app constants to display the smileys</li> ',yt,ia="When you are done, your app can for example work like this:",At,at,An,et,ra="That's it!",Tn,st,ka="Great work, now you also now how to use app constants in Bagawork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.",En;return T=new Nt({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
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
	
}`,x:155,y:333},{id:2,folderId:1,code:`class ZeldaPage extends Page{
	
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
	
}`,x:433,y:484},{id:3,folderId:1,code:`class MarioPage extends Page{
	
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
	
}`,x:434,y:167}],pageTemplates:[]}}}),X=new Nt({props:{project:{app:{code:`class InfoApp extends App{
	
	APP_NAME = \`InfoApp\`
	
	createStartPage(){
		return MenuPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
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
	
}`,x:155,y:333},{id:2,folderId:1,code:`class ZeldaPage extends Page{
	
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
	
}`,x:433,y:484},{id:3,folderId:1,code:`class MarioPage extends Page{
	
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
	
}`,x:434,y:167}],pageTemplates:[]}}}),Q=new Nt({props:{project:{app:{code:`class MyApp extends App{
	
	AGENT_NAME = \`James Bond\`
	
	createStartPage(){
		return GreetingPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class GreetingPage extends Page{
	
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
	
}`,x:200,y:300},{id:2,folderId:1,code:`class AssignmentPage extends Page{
	
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
	
}`,x:499,y:303},{id:3,folderId:1,code:`class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your wait out. Goodbye!\`),
			Space,
		)
	}
	
}`,x:806,y:147},{id:4,folderId:1,code:`class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`That's a good lad! One day, you'll be a great agent, \${a.AGENT_NAME}!\`),
			Space,
		)
	}
	
}`,x:806,y:433}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),tt=new Nt({props:{project:{app:{code:`class MyApp extends App{
	
	AGENT_NAME = \`007\`
	
	createStartPage(){
		return GreetingPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class GreetingPage extends Page{
	
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
	
}`,x:200,y:300},{id:2,folderId:1,code:`class AssignmentPage extends Page{
	
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
	
}`,x:499,y:303},{id:3,folderId:1,code:`class RefusePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your wait out. Goodbye!\`),
			Space,
		)
	}
	
}`,x:806,y:147},{id:4,folderId:1,code:`class AcceptPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`That's a good lad! One day, you'll be a great agent, \${a.AGENT_NAME}!\`),
			Space,
		)
	}
	
}`,x:806,y:433}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),at=new Nt({props:{project:{app:{code:`class MyApp extends App{
	
	SMILEY_SMILE = \`🙂\`
	SMILEY_GRIN = \`😁\`
	SMILEY_LAUGH_CRYING = \`🤣\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:51,offsetY:111}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`,x:182,y:246},{id:2,folderId:1,code:`class SmilePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_SMILE} means that the one who wrote the text is smiling.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:480,y:98},{id:3,folderId:1,code:`class GrinPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_GRIN} means that the one who wrote the text is smiling so much that you can see his/her teeth.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:731,y:238},{id:4,folderId:1,code:`class LaughCryingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_LAUGH_CRYING} means that the one who wrote the text is laughing so hard that tears come from his/her eyes.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:488,y:421}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){x=s("h1"),x.textContent=Cn,Gt=c(),y=s("p"),y.textContent=In,Ht=c(),_=s("h2"),_.textContent=Ln,Bt=c(),M=s("p"),M.innerHTML=bn,Rt=c(),A=s("p"),A.innerHTML=Nn,jt=c(),f=s("div"),Tt(T.$$.fragment),v=s("a"),v.textContent=Gn,ot=s("pre"),Zt=new d(!1),ct=s("pre"),Yt=new d(!1),lt=s("pre"),zt=new d(!1),ut=s("pre"),$t=new d(!1),Vt=c(),E=s("p"),E.innerHTML=Hn,Dt=c(),C=s("h3"),C.textContent=Bn,Wt=c(),I=s("p"),I.innerHTML=Rn,Ot=c(),L=s("ul"),L.innerHTML=jn,Jt=c(),b=s("pre"),qt=new d(!1),Xt=c(),N=s("h3"),N.textContent=Zn,Ut=c(),G=s("p"),G.innerHTML=Yn,Ft=c(),H=s("p"),H.innerHTML=zn,Kt=c(),B=s("pre"),Qt=new d(!1),tn=c(),R=s("p"),R.textContent=$n,nn=c(),j=s("pre"),an=new d(!1),en=c(),Z=s("p"),Z.innerHTML=Vn,sn=c(),Y=s("pre"),pn=new d(!1),on=c(),z=s("p"),z.innerHTML=Dn,cn=c(),$=s("p"),$.innerHTML=Wn,ln=c(),V=s("pre"),un=new d(!1),rn=c(),D=s("p"),D.innerHTML=On,kn=c(),W=s("pre"),dn=new d(!1),gn=c(),O=s("p"),O.innerHTML=Jn,mn=c(),J=s("h3"),J.textContent=qn,fn=c(),q=s("p"),q.textContent=Xn,hn=c(),h=s("div"),Tt(X.$$.fragment),w=s("a"),w.textContent=Un,it=s("pre"),xn=new d(!1),rt=s("pre"),vn=new d(!1),kt=s("pre"),wn=new d(!1),dt=s("pre"),Sn=new d(!1),Pn=c(),U=s("h2"),U.textContent=Fn,yn=c(),F=s("p"),F.textContent=Kn,_n=c(),m=s("div"),K=s("div"),K.textContent=Qn,gt=s("p"),gt.innerHTML=ta,_t=s("div"),Tt(Q.$$.fragment),mt=s("p"),mt.innerHTML=na,ft=s("p"),ft.innerHTML=aa,ht=s("p"),ht.innerHTML=ea,Mt=s("div"),Tt(tt.$$.fragment),Mn=c(),k=s("div"),nt=s("div"),nt.textContent=sa,xt=s("p"),xt.innerHTML=pa,vt=s("ol"),vt.innerHTML=oa,wt=s("p"),wt.textContent=ca,St=s("p"),St.textContent=la,Pt=s("ol"),Pt.innerHTML=ua,yt=s("p"),yt.textContent=ia,At=s("div"),Tt(at.$$.fragment),An=c(),et=s("h2"),et.textContent=ra,Tn=c(),st=s("p"),st.textContent=ka,this.h()},l(t){x=p(t,"H1",{"data-svelte-h":!0}),o(x)!=="svelte-13nebke"&&(x.textContent=Cn),Gt=l(t),y=p(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-ceqt2"&&(y.textContent=In),Ht=l(t),_=p(t,"H2",{"data-svelte-h":!0}),o(_)!=="svelte-146a9ch"&&(_.textContent=Ln),Bt=l(t),M=p(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1w6vkkr"&&(M.innerHTML=bn),Rt=l(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-4a6qp1"&&(A.innerHTML=Nn),jt=l(t),f=p(t,"DIV",{});var a=r(f);Et(T.$$.fragment,a),v=p(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1dxtzpx"&&(v.textContent=Gn),ot=p(a,"PRE",{class:!0});var da=r(ot);Zt=g(da,!1),da.forEach(n),ct=p(a,"PRE",{class:!0});var ga=r(ct);Yt=g(ga,!1),ga.forEach(n),lt=p(a,"PRE",{class:!0});var ma=r(lt);zt=g(ma,!1),ma.forEach(n),ut=p(a,"PRE",{class:!0});var fa=r(ut);$t=g(fa,!1),fa.forEach(n),a.forEach(n),Vt=l(t),E=p(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-1rq9mb4"&&(E.innerHTML=Hn),Dt=l(t),C=p(t,"H3",{"data-svelte-h":!0}),o(C)!=="svelte-1lqrax7"&&(C.textContent=Bn),Wt=l(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-jdbdyl"&&(I.innerHTML=Rn),Ot=l(t),L=p(t,"UL",{"data-svelte-h":!0}),o(L)!=="svelte-10e478v"&&(L.innerHTML=jn),Jt=l(t),b=p(t,"PRE",{class:!0});var ha=r(b);qt=g(ha,!1),ha.forEach(n),Xt=l(t),N=p(t,"H3",{"data-svelte-h":!0}),o(N)!=="svelte-4tjar6"&&(N.textContent=Zn),Ut=l(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-1l53lyx"&&(G.innerHTML=Yn),Ft=l(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-jfw0g6"&&(H.innerHTML=zn),Kt=l(t),B=p(t,"PRE",{class:!0});var xa=r(B);Qt=g(xa,!1),xa.forEach(n),tn=l(t),R=p(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-bdd15a"&&(R.textContent=$n),nn=l(t),j=p(t,"PRE",{class:!0});var va=r(j);an=g(va,!1),va.forEach(n),en=l(t),Z=p(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-xg27jd"&&(Z.innerHTML=Vn),sn=l(t),Y=p(t,"PRE",{class:!0});var wa=r(Y);pn=g(wa,!1),wa.forEach(n),on=l(t),z=p(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-67q58a"&&(z.innerHTML=Dn),cn=l(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-iopbuc"&&($.innerHTML=Wn),ln=l(t),V=p(t,"PRE",{class:!0});var Sa=r(V);un=g(Sa,!1),Sa.forEach(n),rn=l(t),D=p(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-15w802t"&&(D.innerHTML=On),kn=l(t),W=p(t,"PRE",{class:!0});var Pa=r(W);dn=g(Pa,!1),Pa.forEach(n),gn=l(t),O=p(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-rhpsxd"&&(O.innerHTML=Jn),mn=l(t),J=p(t,"H3",{"data-svelte-h":!0}),o(J)!=="svelte-9nes82"&&(J.textContent=qn),fn=l(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-xyqt02"&&(q.textContent=Xn),hn=l(t),h=p(t,"DIV",{});var pt=r(h);Et(X.$$.fragment,pt),w=p(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-1mp6pwx"&&(w.textContent=Un),it=p(pt,"PRE",{class:!0});var ya=r(it);xn=g(ya,!1),ya.forEach(n),rt=p(pt,"PRE",{class:!0});var _a=r(rt);vn=g(_a,!1),_a.forEach(n),kt=p(pt,"PRE",{class:!0});var Ma=r(kt);wn=g(Ma,!1),Ma.forEach(n),dt=p(pt,"PRE",{class:!0});var Aa=r(dt);Sn=g(Aa,!1),Aa.forEach(n),pt.forEach(n),Pn=l(t),U=p(t,"H2",{"data-svelte-h":!0}),o(U)!=="svelte-4opca7"&&(U.textContent=Fn),yn=l(t),F=p(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-fy3v6t"&&(F.textContent=Kn),_n=l(t),m=p(t,"DIV",{class:!0});var P=r(m);K=p(P,"DIV",{class:!0,"data-svelte-h":!0}),o(K)!=="svelte-1kqyz2o"&&(K.textContent=Qn),gt=p(P,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-rpll91"&&(gt.innerHTML=ta),_t=p(P,"DIV",{});var Ta=r(_t);Et(Q.$$.fragment,Ta),Ta.forEach(n),mt=p(P,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-1j1r4ki"&&(mt.innerHTML=na),ft=p(P,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-1gn3x64"&&(ft.innerHTML=aa),ht=p(P,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-m2hi2k"&&(ht.innerHTML=ea),Mt=p(P,"DIV",{});var Ea=r(Mt);Et(tt.$$.fragment,Ea),Ea.forEach(n),P.forEach(n),Mn=l(t),k=p(t,"DIV",{class:!0});var S=r(k);nt=p(S,"DIV",{class:!0,"data-svelte-h":!0}),o(nt)!=="svelte-i1p19j"&&(nt.textContent=sa),xt=p(S,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-1toofm7"&&(xt.innerHTML=pa),vt=p(S,"OL",{"data-svelte-h":!0}),o(vt)!=="svelte-1d1bot1"&&(vt.innerHTML=oa),wt=p(S,"P",{"data-svelte-h":!0}),o(wt)!=="svelte-ixvpaq"&&(wt.textContent=ca),St=p(S,"P",{"data-svelte-h":!0}),o(St)!=="svelte-hdfstb"&&(St.textContent=la),Pt=p(S,"OL",{"data-svelte-h":!0}),o(Pt)!=="svelte-166efdg"&&(Pt.innerHTML=ua),yt=p(S,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-14jkyom"&&(yt.textContent=ia),At=p(S,"DIV",{});var Ca=r(At);Et(at.$$.fragment,Ca),Ca.forEach(n),S.forEach(n),An=l(t),et=p(t,"H2",{"data-svelte-h":!0}),o(et)!=="svelte-p2uhy5"&&(et.textContent=ra),Tn=l(t),st=p(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-3tved1"&&(st.textContent=ka),this.h()},h(){i(v,"target","_blank"),i(v,"href","/editor#eNrNVN9v0zAQ/ldOfkqkLOpICyjiBXhgExqa6B6AdVI9+9JYSu3IudCVKv/77Pzo2ooWEEziIcmdz3f32d932TBelizdMGEkspSJglcVXOrMvC1LwAdCLStw9mamZ+QfYZETTolbuuYLDMIuQhapthquUNd+3S82XU7DmohlppBoK5bebpiSLD2PmOZL37ItxSJmsqxC+sLS0WB/dXZzF7HS1dvL7Ipdds4e8qH9Frp3DrB/qNUh6s9mVcUiV4W0qIMuNKMbVyQm9wrm/Y3Mw2gITksuMK7UDwxG8WjyFNjJmmKBgmCVc4K1qWHFNQEZcDAkLI1F4PempngexgVmFBxU33rvTVEv9U8QHm6c0buayOi+/xW3yrji/gKD1vHXEUbH0sO/7vgNC8mHjq3zux1318M99UTswRE9mURszdIkSZqoE8KLU0LY9n4mJcAZ9Gc9wtlOSrsRVAUcviuJBhZO+SBybrkgtNCBkXC/hk9Ke7QmhmmOPoXcp7RKC3SHMlnrX6xtXSB8VHohzTKe/2vZvDnbaqYfpxMEHmVsnCQtY+PX44Gx5OToDvp8Psb6efg1Y+3GP2XsAh1BzgaN6NC3c16Jeoe/a+Qi/3/5Grd8nb98Nfx0b3BZFu6g/ud71zwCw2E26g=="),i(v,"title","Open in our Online Editor"),Zt.a=null,i(ot,"class","language-js"),Yt.a=null,i(ct,"class","language-js"),zt.a=null,i(lt,"class","language-js"),$t.a=null,i(ut,"class","language-js"),qt.a=null,i(b,"class","language-js"),Qt.a=null,i(B,"class","language-js"),an.a=null,i(j,"class","language-js"),pn.a=null,i(Y,"class","language-js"),un.a=null,i(V,"class","language-js"),dn.a=null,i(W,"class","language-js"),i(w,"target","_blank"),i(w,"href","/editor#eNrNVFuPk0AU/isnEx8gYUlXWjVEH6ox7sZ009h98NKNzA6HQgIzZDjYrYT/7nDrLbZqXBMfgHPm3Of7DhXjec78igkVIvOZSHlRwLWM1DTPAR8IZViAkaulXFLzTOfzrzfT2Vt4BUHvFww2oZETLohrmvMVWnYXRRqp1BJmKMvmvDmsu5ia1Q6LVBqiLpj/pWJJyPxLh0meNe20qZjDVBQVSB+ZPxrkT0au7xyWm3wHkV2y6045mGoovx2rUarD3t+VyXHXH9S6cEWcpKFGaXWmJd2aJC6Zl8Xd4UpsZ7Auci7QLZLvaI3c0WRn2IUFC0xREKxjTrBRJay5JCAFpo8QMqUR+L0qyQ1sN8WIrKPsW+2NSstM/qTFY8clvS6JlOzrz7hOlEne3KDVKs192M6pcPuvK37GNORDxVb53Yr75/YBfRz2YJCeTBy2Yb7nebXTMeHpOSZsaz8yFYIn1Y4NNVxAP/EJ5PYCW0dICuDwLQlRwcosAIiYay4INXQthXC/gZtENj0rFxYxNiFkPrlOpEAzmopa/WqjyxThfSJXocrc4LHJ8/Jiy5x+q87AeBK3see1uI1fjAfcvLMbPLD0X+PW78avcWsd/xS3KzQwGRkkopmh3flClHsozpGL+P9Fbdyidvns+fAHvsUsT82gzZ/4rv4BwE1Cqg=="),i(w,"title","Open in our Online Editor"),xn.a=null,i(it,"class","language-js"),vn.a=null,i(rt,"class","language-js"),wn.a=null,i(kt,"class","language-js"),Sn.a=null,i(dt,"class","language-js"),i(K,"class","remark-container__title"),i(m,"class","remark-container exercise"),i(nt,"class","remark-container__title"),i(k,"class","remark-container exercise")},m(t,a){e(t,x,a),e(t,Gt,a),e(t,y,a),e(t,Ht,a),e(t,_,a),e(t,Bt,a),e(t,M,a),e(t,Rt,a),e(t,A,a),e(t,jt,a),e(t,f,a),Ct(T,f,null),u(f,v),u(f,ot),Zt.m(La,ot),u(f,ct),Yt.m(ba,ct),u(f,lt),zt.m(Na,lt),u(f,ut),$t.m(Ga,ut),e(t,Vt,a),e(t,E,a),e(t,Dt,a),e(t,C,a),e(t,Wt,a),e(t,I,a),e(t,Ot,a),e(t,L,a),e(t,Jt,a),e(t,b,a),qt.m(Ha,b),e(t,Xt,a),e(t,N,a),e(t,Ut,a),e(t,G,a),e(t,Ft,a),e(t,H,a),e(t,Kt,a),e(t,B,a),Qt.m(Ba,B),e(t,tn,a),e(t,R,a),e(t,nn,a),e(t,j,a),an.m(Ra,j),e(t,en,a),e(t,Z,a),e(t,sn,a),e(t,Y,a),pn.m(ja,Y),e(t,on,a),e(t,z,a),e(t,cn,a),e(t,$,a),e(t,ln,a),e(t,V,a),un.m(Za,V),e(t,rn,a),e(t,D,a),e(t,kn,a),e(t,W,a),dn.m(Ya,W),e(t,gn,a),e(t,O,a),e(t,mn,a),e(t,J,a),e(t,fn,a),e(t,q,a),e(t,hn,a),e(t,h,a),Ct(X,h,null),u(h,w),u(h,it),xn.m(za,it),u(h,rt),vn.m($a,rt),u(h,kt),wn.m(Va,kt),u(h,dt),Sn.m(Da,dt),e(t,Pn,a),e(t,U,a),e(t,yn,a),e(t,F,a),e(t,_n,a),e(t,m,a),u(m,K),u(m,gt),u(m,_t),Ct(Q,_t,null),u(m,mt),u(m,ft),u(m,ht),u(m,Mt),Ct(tt,Mt,null),e(t,Mn,a),e(t,k,a),u(k,nt),u(k,xt),u(k,vt),u(k,wt),u(k,St),u(k,Pt),u(k,yt),u(k,At),Ct(at,At,null),e(t,An,a),e(t,et,a),e(t,Tn,a),e(t,st,a),En=!0},p:Oa,i(t){En||(It(T.$$.fragment,t),It(X.$$.fragment,t),It(Q.$$.fragment,t),It(tt.$$.fragment,t),It(at.$$.fragment,t),En=!0)},o(t){Lt(T.$$.fragment,t),Lt(X.$$.fragment,t),Lt(Q.$$.fragment,t),Lt(tt.$$.fragment,t),Lt(at.$$.fragment,t),En=!1},d(t){t&&(n(x),n(Gt),n(y),n(Ht),n(_),n(Bt),n(M),n(Rt),n(A),n(jt),n(f),n(Vt),n(E),n(Dt),n(C),n(Wt),n(I),n(Ot),n(L),n(Jt),n(b),n(Xt),n(N),n(Ut),n(G),n(Ft),n(H),n(Kt),n(B),n(tn),n(R),n(nn),n(j),n(en),n(Z),n(sn),n(Y),n(on),n(z),n(cn),n($),n(ln),n(V),n(rn),n(D),n(kn),n(W),n(gn),n(O),n(mn),n(J),n(fn),n(q),n(hn),n(h),n(Pn),n(U),n(yn),n(F),n(_n),n(m),n(Mn),n(k),n(An),n(et),n(Tn),n(st)),bt(T),bt(X),bt(Q),bt(tt),bt(at)}}}class Qa extends Ja{constructor(x){super(),qa(this,x,null,Xa,Wa,{})}}export{Qa as component};
