import{s as Ya,n as Za}from"../chunks/scheduler.B0TnBjPs.js";import{S as $a,i as Wa,e as s,s as c,c as Mt,H as d,a as p,g as o,b as l,d as r,f as _t,n as g,h as n,o as u,j as e,m as Et,p as i,t as At,k as Tt,l as Ct}from"../chunks/index.BXVnRmkj.js";import{V as It}from"../chunks/ViewApp.qg7AIhJt.js";function Ua(Ma){let x,En="2. App Constants",bt,S,An="This tutorial will teach you what constants in programming are, and how you can create them in a BagaWork app.",Lt,M,Tn="App constants vs page constants",Nt,_,Cn="In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it&#39;s better to use an <em>app constant</em> instead, since all different pages have access to all app constants.",Gt,E,In="Below we have an example of an app that uses the same hardcoded value (the name of the app, <code>InfoApp</code>) on multiple different pages.",Ht,h,A,v,bn="Open in Online Editor",ot,Rt,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ct,Bt,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,lt,jt,Aa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ut,Yt,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zt,T,Ln="This works, but changing the name of the app in the future (for example from <code>InfoApp</code> to <code>Information App</code>) will be hard, since there are so many places we will need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.",$t,C,Nn="How to create app constants",Wt,I,Gn="We create app constants the same way we create page constants, but we write them in the <code>App</code> class instead. In the code below you find an example of how to create the following app constants:",Ut,b,Hn="<li><code>APP_NAME</code> will have the string value <code>InfoApp</code></li> <li><code>CREATED_DATE</code> will have the string value <code>2023-09-15</code></li>",Jt,L,Vt,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">CREATED_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app constants as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,N,Rn="How to use app constants",Ot,G,Bn="In BagaWork, everything you create in your <code>App</code> class (constants, variables and methods) are accessible through a special variable named <code>a</code> (short for <em>app</em>). To retrieve the value of an app constant, you would simply write <code>a.THE_NAME_OF_THE_CONSTANT</code>, for example <code>a.APP_NAME</code>.",Dt,H,jn="To display the name of the app on the <code>MenuPage</code>, we used before the following code:",zt,R,Qt,Ia='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',qt,B,Yn="With the app constants we have now, we can instead write:",Xt,j,Kt,ba='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',tn,Y,Zn="In this case, when we create a string that only contains the special <code>${SOMETHING}</code> thing, we can actually simplify the code to:",nn,Z,an,La='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span></code>',en,$,$n="When the computer executes this code, it will first retrieve the value for the <code>APP_NAME</code> constant from the <code>a</code> variable, and it gets back the string value <code>InfoApp</code>, and pass that to the <code>Text.text()</code> method, which then will display that text.",sn,W,Wn="However, on the <code>MarioPage</code>, where the text we send to the <code>Text</code> component is not only the app name, but looks like this:",pn,U,on,Na='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',cn,J,Un="We have to use the complicated <code>${SOMETHING}</code> thing:",ln,V,un,Ga='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',rn,F,Jn="The same is true for the <code>ZeldaPage</code>.",kn,O,Vn="The final solution",dn,D,Fn="So, here's the code for the app using constants, instead of harding the name of the app at multiple places.",gn,f,z,w,On="Open in Online Editor",it,mn,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,rt,hn,Ra=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,kt,fn,Ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Zelda</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,dt,xn,ja=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>MenuPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,vn,Q,Dn="Exercises",wn,q,zn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Pn,m,X,Qn="Exercise 1",gt,qn='The code in <a href="/editor#eNq9VAtr2zAQ/itXMWgCwuTVrTWM4Y4SMtZ2tIEtLGVR7HNiaktGktua4P8+yZ7bOEtCN9pCYk463eu7725FWJoSd0V8ESBxiR8zpeA899IU8EEjDxQYeTXlU23/3vDsYvzrwjs/g48w+8ISVHAqeDCrH/gSmcZrzaT+xhbYalemWqLOJIehRNQRX1idVRSVXUEKSkIRBygVcX+uSBQQt0sJNwFMVqU7QokIQ4X6B3E7tTwxcnFDSWr8NSwrZ6Pq0ChuPYXHGu1h1axhmEWb2V+Je+X4yygOJPJWpZrq65T5SOvT2Lh0tPm0ZkMhAkiE5CYahXcr5jzBVxzM2nS7h88izhK+JdDmw6k+zbQWfGu460iaEI4FpuUpFS14grzsSZvuclhr2o3WUPJA3F7HYJ4Tt9/pFLRCubcP5WbI18V5IjJQiAkwmEca5kJisAk3BSVgiRLBF5a0ucgkcGMO7DFTF4YCtPktEebsFmUOailSELy8EuYjQUWBEcPyRmnLJQqMBzCXBnZIjI7X+kiCb9woCmmMTKHz4i0fgcQwU1i2u+72VXm1v9Mbfi5DA0smNxx5vo/p/1NmcHLyhzL9mjL9fZR5yvt16TKyZHEcB0b6UMEckQOPfIRbLu5tDw01/ppWB74iu8OKNouMW5okkV2Vpt15ipznlial+p4ZOdMO2IGc57hr0rdAdtx5X0LWHXyoIRvsnbLHDr0uZOMls1gxWNgdE7PgAC4NzQOWU1vzYRwbHK3axgOTAdfPXnh7YBj0+/VyH2OSxqaWxpLf2Di3o9ALsvgN8PBkSQUoG2NGnXHoHn968fG+ELNnj/AE1exfx3RtkzegPOMapbd4g1n8XhGrnBvjfzeEjVq7nbV3Tc3RLk1vp03v6FnMLG6K38ApRX8=" target="_blank">this BagaWork project</a> contains an app that works like this:',K,mt,Xn="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in an app constant, so all pages can access it. All seems good!",ht,Kn="However, to improve security and anonymity among the agents, it has now been decided that one should never refer to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",ft,ta="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",tt,yn,k,nt,na="Exercise 2",xt,aa="It can be fun to read texts containing smileys, such as 🙂, 😁 and 🤣. These are ordinary characters that can be used in the same way as letters (<code>a</code>, <code>b</code>, <code>c</code>, etc.), but they are quite hard to type on a keyboard, since they don&#39;t have their own keys on the keyboard, so people often copy-paste them:",vt,ea='<li>Search for the smiley using Google, for example &quot;<a href="https://www.google.com/search?q=smiley+smiling+face" rel="nofollow" target="_blank">smiley smiling face</a>&quot;</li> <li>Find and copy the smiley from a search result</li> <li>Paste the smiley wherever they want to write it</li> ',wt,sa="This is not a very convenient procedure when you need to use the same smiley multiple times in your app. But app constants can be used to make it more convenient for us programmers!",Pt,pa="Your task is to:",yt,oa='<li>Open <a href="/editor#eNq1UcFqg0AQ/ZVlLo0gIRECxUuxpZQeWkoTaEMNZNExSnV32R1pg/jvXTUJUWJ76mFl1jfvzby3FXClwK8gkjGCD1HOjWFP+0Apht+EIjbM1lUoQmpOpJETLolreuE7nDgdQhqp1IKdgOZv3ZFqqF1IZB6jNuB/VJDF4M9dELxoJrYUcEEmiUF6B392rNe2rjcuKKvXMA/lCguV2yV6Yr31A/P5mARxmbernHw0l4GRhzIbWniVX2YapVkeaxSTDgppqXiE7vG2spJTsp/JNtDI9rJkrT9GKRdsfn2zddzLzDuZl4W4MGDYGNJtSSTFYcyzPJP8o3eN5pfmI+IMnqiL0htEeS8IdbDD/w/yLeV0ZZosNbP64xH2vM5nZ319ZDGGeKMcbzEydRDWpv4B1Ngrlw==" target="_blank">this empty BagaWork project</a></li> <li>Create the following three app constants:<ul><li><code>SMILEY_SMILING</code> storing 🙂</li> <li><code>SMILEY_GRIN</code> storing 😁</li> <li><code>SMILEY_LAUGH_CRYING</code> storing 🤣</li></ul></li> <li>Add a few pages that make use of these app constants to display the smileys</li> ',St,ca="When you are done, your app can for example look like the one below.",at,Sn,et,la="That's it!",Mn,st,ua='Great work, now you also now how to use app constants in BagaWork! 🥳 And constants are great, but variables are even more useful, so let&#39;s take a look at them in the next tutorial, <a href="../page-variables-and-methods/">Programming 3. Page Variables &amp; Methods</a>.',_n;return A=new It({props:{project:{app:{code:`class InfoApp extends App{
	
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
				Button.text(\`←\`).page(MenuPage),
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
				Button.text(\`←\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:750,y:200}]}}}),z=new It({props:{project:{app:{code:`class InfoApp extends App{
	
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
				Button.text(\`←\`).page(MenuPage),
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
				Button.text(\`←\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:750,y:200}]}}}),K=new It({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your way out. Goodbye!\`),
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
	
}`,x:1050,y:200}]}}}),tt=new It({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`I see... It's been nice knowing you, \${a.AGENT_NAME}. Leave your gun to miss Moneypenny on your way out. Goodbye!\`),
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
	
}`,x:1050,y:200}]}}}),at=new It({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`\${a.SMILEY_GRIN} means that the one who wrote the text is smiling so much that you can see their teeth.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:750,y:200},{id:4,folderId:1,code:`class LaughCryingPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${a.SMILEY_LAUGH_CRYING} means that the one who wrote the text is laughing so hard that tears come from their eyes.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
	
}`,x:1050,y:200}]}}}),{c(){x=s("h1"),x.textContent=En,bt=c(),S=s("p"),S.textContent=An,Lt=c(),M=s("h2"),M.textContent=Tn,Nt=c(),_=s("p"),_.innerHTML=Cn,Gt=c(),E=s("p"),E.innerHTML=In,Ht=c(),h=s("div"),Mt(A.$$.fragment),v=s("a"),v.textContent=bn,ot=s("pre"),Rt=new d(!1),ct=s("pre"),Bt=new d(!1),lt=s("pre"),jt=new d(!1),ut=s("pre"),Yt=new d(!1),Zt=c(),T=s("p"),T.innerHTML=Ln,$t=c(),C=s("h3"),C.textContent=Nn,Wt=c(),I=s("p"),I.innerHTML=Gn,Ut=c(),b=s("ul"),b.innerHTML=Hn,Jt=c(),L=s("pre"),Vt=new d(!1),Ft=c(),N=s("h3"),N.textContent=Rn,Ot=c(),G=s("p"),G.innerHTML=Bn,Dt=c(),H=s("p"),H.innerHTML=jn,zt=c(),R=s("pre"),Qt=new d(!1),qt=c(),B=s("p"),B.textContent=Yn,Xt=c(),j=s("pre"),Kt=new d(!1),tn=c(),Y=s("p"),Y.innerHTML=Zn,nn=c(),Z=s("pre"),an=new d(!1),en=c(),$=s("p"),$.innerHTML=$n,sn=c(),W=s("p"),W.innerHTML=Wn,pn=c(),U=s("pre"),on=new d(!1),cn=c(),J=s("p"),J.innerHTML=Un,ln=c(),V=s("pre"),un=new d(!1),rn=c(),F=s("p"),F.innerHTML=Jn,kn=c(),O=s("h3"),O.textContent=Vn,dn=c(),D=s("p"),D.textContent=Fn,gn=c(),f=s("div"),Mt(z.$$.fragment),w=s("a"),w.textContent=On,it=s("pre"),mn=new d(!1),rt=s("pre"),hn=new d(!1),kt=s("pre"),fn=new d(!1),dt=s("pre"),xn=new d(!1),vn=c(),Q=s("h2"),Q.textContent=Dn,wn=c(),q=s("p"),q.textContent=zn,Pn=c(),m=s("div"),X=s("div"),X.textContent=Qn,gt=s("p"),gt.innerHTML=qn,Mt(K.$$.fragment),mt=s("p"),mt.innerHTML=Xn,ht=s("p"),ht.innerHTML=Kn,ft=s("p"),ft.innerHTML=ta,Mt(tt.$$.fragment),yn=c(),k=s("div"),nt=s("div"),nt.textContent=na,xt=s("p"),xt.innerHTML=aa,vt=s("ol"),vt.innerHTML=ea,wt=s("p"),wt.textContent=sa,Pt=s("p"),Pt.textContent=pa,yt=s("ol"),yt.innerHTML=oa,St=s("p"),St.textContent=ca,Mt(at.$$.fragment),Sn=c(),et=s("h2"),et.textContent=la,Mn=c(),st=s("p"),st.innerHTML=ua,this.h()},l(t){x=p(t,"H1",{"data-svelte-h":!0}),o(x)!=="svelte-13nebke"&&(x.textContent=En),bt=l(t),S=p(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-qkh4k6"&&(S.textContent=An),Lt=l(t),M=p(t,"H2",{"data-svelte-h":!0}),o(M)!=="svelte-146a9ch"&&(M.textContent=Tn),Nt=l(t),_=p(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1w6vkkr"&&(_.innerHTML=Cn),Gt=l(t),E=p(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-1mqop4i"&&(E.innerHTML=In),Ht=l(t),h=p(t,"DIV",{class:!0});var a=r(h);_t(A.$$.fragment,a),v=p(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-lg0jcu"&&(v.textContent=bn),ot=p(a,"PRE",{class:!0});var ia=r(ot);Rt=g(ia,!1),ia.forEach(n),ct=p(a,"PRE",{class:!0});var ra=r(ct);Bt=g(ra,!1),ra.forEach(n),lt=p(a,"PRE",{class:!0});var ka=r(lt);jt=g(ka,!1),ka.forEach(n),ut=p(a,"PRE",{class:!0});var da=r(ut);Yt=g(da,!1),da.forEach(n),a.forEach(n),Zt=l(t),T=p(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-evprqb"&&(T.innerHTML=Ln),$t=l(t),C=p(t,"H3",{"data-svelte-h":!0}),o(C)!=="svelte-1lqrax7"&&(C.textContent=Nn),Wt=l(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-jdbdyl"&&(I.innerHTML=Gn),Ut=l(t),b=p(t,"UL",{"data-svelte-h":!0}),o(b)!=="svelte-10e478v"&&(b.innerHTML=Hn),Jt=l(t),L=p(t,"PRE",{class:!0});var ga=r(L);Vt=g(ga,!1),ga.forEach(n),Ft=l(t),N=p(t,"H3",{"data-svelte-h":!0}),o(N)!=="svelte-4tjar6"&&(N.textContent=Rn),Ot=l(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-r6zs62"&&(G.innerHTML=Bn),Dt=l(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-ah2k1m"&&(H.innerHTML=jn),zt=l(t),R=p(t,"PRE",{class:!0});var ma=r(R);Qt=g(ma,!1),ma.forEach(n),qt=l(t),B=p(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-bdd15a"&&(B.textContent=Yn),Xt=l(t),j=p(t,"PRE",{class:!0});var ha=r(j);Kt=g(ha,!1),ha.forEach(n),tn=l(t),Y=p(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-xg27jd"&&(Y.innerHTML=Zn),nn=l(t),Z=p(t,"PRE",{class:!0});var fa=r(Z);an=g(fa,!1),fa.forEach(n),en=l(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-67q58a"&&($.innerHTML=$n),sn=l(t),W=p(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-iopbuc"&&(W.innerHTML=Wn),pn=l(t),U=p(t,"PRE",{class:!0});var xa=r(U);on=g(xa,!1),xa.forEach(n),cn=l(t),J=p(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-15w802t"&&(J.innerHTML=Un),ln=l(t),V=p(t,"PRE",{class:!0});var va=r(V);un=g(va,!1),va.forEach(n),rn=l(t),F=p(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-rhpsxd"&&(F.innerHTML=Jn),kn=l(t),O=p(t,"H3",{"data-svelte-h":!0}),o(O)!=="svelte-9nes82"&&(O.textContent=Vn),dn=l(t),D=p(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-xyqt02"&&(D.textContent=Fn),gn=l(t),f=p(t,"DIV",{class:!0});var pt=r(f);_t(z.$$.fragment,pt),w=p(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-180dasx"&&(w.textContent=On),it=p(pt,"PRE",{class:!0});var wa=r(it);mn=g(wa,!1),wa.forEach(n),rt=p(pt,"PRE",{class:!0});var Pa=r(rt);hn=g(Pa,!1),Pa.forEach(n),kt=p(pt,"PRE",{class:!0});var ya=r(kt);fn=g(ya,!1),ya.forEach(n),dt=p(pt,"PRE",{class:!0});var Sa=r(dt);xn=g(Sa,!1),Sa.forEach(n),pt.forEach(n),vn=l(t),Q=p(t,"H2",{"data-svelte-h":!0}),o(Q)!=="svelte-4opca7"&&(Q.textContent=Dn),wn=l(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-fy3v6t"&&(q.textContent=zn),Pn=l(t),m=p(t,"DIV",{class:!0});var y=r(m);X=p(y,"DIV",{class:!0,"data-svelte-h":!0}),o(X)!=="svelte-1kqyz2o"&&(X.textContent=Qn),gt=p(y,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-ttfkng"&&(gt.innerHTML=qn),_t(K.$$.fragment,y),mt=p(y,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-1j1r4ki"&&(mt.innerHTML=Xn),ht=p(y,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-1fh3zel"&&(ht.innerHTML=Kn),ft=p(y,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-m2hi2k"&&(ft.innerHTML=ta),_t(tt.$$.fragment,y),y.forEach(n),yn=l(t),k=p(t,"DIV",{class:!0});var P=r(k);nt=p(P,"DIV",{class:!0,"data-svelte-h":!0}),o(nt)!=="svelte-i1p19j"&&(nt.textContent=na),xt=p(P,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-1toofm7"&&(xt.innerHTML=aa),vt=p(P,"OL",{"data-svelte-h":!0}),o(vt)!=="svelte-1d1bot1"&&(vt.innerHTML=ea),wt=p(P,"P",{"data-svelte-h":!0}),o(wt)!=="svelte-ixvpaq"&&(wt.textContent=sa),Pt=p(P,"P",{"data-svelte-h":!0}),o(Pt)!=="svelte-hdfstb"&&(Pt.textContent=pa),yt=p(P,"OL",{"data-svelte-h":!0}),o(yt)!=="svelte-10y856p"&&(yt.innerHTML=oa),St=p(P,"P",{"data-svelte-h":!0}),o(St)!=="svelte-wfmrki"&&(St.textContent=ca),_t(at.$$.fragment,P),P.forEach(n),Sn=l(t),et=p(t,"H2",{"data-svelte-h":!0}),o(et)!=="svelte-p2uhy5"&&(et.textContent=la),Mn=l(t),st=p(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-l4pw9a"&&(st.innerHTML=ua),this.h()},h(){u(v,"target","_blank"),u(v,"href","/editor#eNrNU01v2zAM/SuETjbgGm67YoBvWw9tUbQomp22DIgiMbEARzJkakkQ+LrzfuN+yeSPZE62pC3aAD1YFkmRj9J7XDFeFCxdMWEkspSJnJcl3OiJ+VQUgAtCLUvw+9VQD6n+hEVOOCBu6YFPMQjbCFkkZzXcoXa1v3ZWbU7FqogV3ley9NuKKcnS04hNTC7R3rTGFvq6xAa+Nnbwr5zaRX408zIWmcqlRR20oSF98UVi8ksw6m41CqN1cFBwgfHUmnmQxMnF30Ava4A5CoJ5xgmWxsGcawIy4NuQMDMWgY+No3gUxjlOKNipvrEuTe5m+j8d7h4c0mdHZHSHf8etMr54/YBBY9TPEUb70sNXI37FXPI1YmM8F7HvD7cUELGFJ/oiidiSpWdJUkWtEM4OCWGDfSQlwAl0d93DWS+lOQiqBA4/lEQDUz5DEBm3XBBaaJuRMF7CvdJ1tyaGQYZ1CvlfYZUW6C9lJo19vbQuR7hVeirNLB69tWx+//y1EU03TwcY3EvZh38pOz84u2uBHo+ybiCepqw5+FLKrtEz5PegEX33zaCXwvUIfEAusndL2MceYd+rP7P4IGM="),u(v,"title","Open in our Online Editor"),Rt.a=null,u(ot,"class","language-js"),Bt.a=null,u(ct,"class","language-js"),jt.a=null,u(lt,"class","language-js"),Yt.a=null,u(ut,"class","language-js"),u(h,"class","remark-container tip"),Vt.a=null,u(L,"class","language-js"),Qt.a=null,u(R,"class","language-js"),Kt.a=null,u(j,"class","language-js"),an.a=null,u(Z,"class","language-js"),on.a=null,u(U,"class","language-js"),un.a=null,u(V,"class","language-js"),u(w,"target","_blank"),u(w,"href","/editor#eNrNU0tv00AQ/iujFQdbMitTqJAscUhRRSuUKiKcIAhvdyexJWfXWo9JI8tXzvzG/hLWr7wgKYgi9eD1zntmv28qJvKcRRWTRiGLmMxEUcC1nptRngPeEWpVgLtXMz2j5htNJl9vRuNLeANx7xcPNmlREE5JWJqIBXp+F0UWqbQaxqjLRt8o6y6mZnXAcqcrWPS5Yqli0YuAzU2m0F53wl5nQ4pNa41Q7dd/V6aHlT+YVcFlkmbKovY604w+uiSc3OEJPozlB4N1mguJfGHNygt5eL41bMPiKWYoCVaJIFibElZCE5AB14eCpbEI4taUxGOfZzgn7yD7RnprsnKpf9PioeOMLkoio/v6Y2FT45I3L+i1QvMefnAs3P/nip8wU2Ko2Ap/WnFX7+9RIGB3DunzMGBrFp2FYR10TDg7xYRN7UemQvys2rKhhufQT3wEuZ3A1hHSAgR8SxUaWIglgkyEFZLQQteSgts13KS66dlwmCbYhJD75TbVEt1oZt7KV2tbZgjvU71QZsnjxybP/fcfG+r0a3UCx6PAvfoVuJcnV3ig6f8Grl+Oh4FrHf8WuCt0OLk7aEQ3Q7v0hSx3YJygkMmThe31Dmxf6p/BlCwj"),u(w,"title","Open in our Online Editor"),mn.a=null,u(it,"class","language-js"),hn.a=null,u(rt,"class","language-js"),fn.a=null,u(kt,"class","language-js"),xn.a=null,u(dt,"class","language-js"),u(f,"class","remark-container tip"),u(X,"class","remark-container__title"),u(m,"class","remark-container exercise"),u(nt,"class","remark-container__title"),u(k,"class","remark-container exercise")},m(t,a){e(t,x,a),e(t,bt,a),e(t,S,a),e(t,Lt,a),e(t,M,a),e(t,Nt,a),e(t,_,a),e(t,Gt,a),e(t,E,a),e(t,Ht,a),e(t,h,a),Et(A,h,null),i(h,v),i(h,ot),Rt.m(_a,ot),i(h,ct),Bt.m(Ea,ct),i(h,lt),jt.m(Aa,lt),i(h,ut),Yt.m(Ta,ut),e(t,Zt,a),e(t,T,a),e(t,$t,a),e(t,C,a),e(t,Wt,a),e(t,I,a),e(t,Ut,a),e(t,b,a),e(t,Jt,a),e(t,L,a),Vt.m(Ca,L),e(t,Ft,a),e(t,N,a),e(t,Ot,a),e(t,G,a),e(t,Dt,a),e(t,H,a),e(t,zt,a),e(t,R,a),Qt.m(Ia,R),e(t,qt,a),e(t,B,a),e(t,Xt,a),e(t,j,a),Kt.m(ba,j),e(t,tn,a),e(t,Y,a),e(t,nn,a),e(t,Z,a),an.m(La,Z),e(t,en,a),e(t,$,a),e(t,sn,a),e(t,W,a),e(t,pn,a),e(t,U,a),on.m(Na,U),e(t,cn,a),e(t,J,a),e(t,ln,a),e(t,V,a),un.m(Ga,V),e(t,rn,a),e(t,F,a),e(t,kn,a),e(t,O,a),e(t,dn,a),e(t,D,a),e(t,gn,a),e(t,f,a),Et(z,f,null),i(f,w),i(f,it),mn.m(Ha,it),i(f,rt),hn.m(Ra,rt),i(f,kt),fn.m(Ba,kt),i(f,dt),xn.m(ja,dt),e(t,vn,a),e(t,Q,a),e(t,wn,a),e(t,q,a),e(t,Pn,a),e(t,m,a),i(m,X),i(m,gt),Et(K,m,null),i(m,mt),i(m,ht),i(m,ft),Et(tt,m,null),e(t,yn,a),e(t,k,a),i(k,nt),i(k,xt),i(k,vt),i(k,wt),i(k,Pt),i(k,yt),i(k,St),Et(at,k,null),e(t,Sn,a),e(t,et,a),e(t,Mn,a),e(t,st,a),_n=!0},p:Za,i(t){_n||(At(A.$$.fragment,t),At(z.$$.fragment,t),At(K.$$.fragment,t),At(tt.$$.fragment,t),At(at.$$.fragment,t),_n=!0)},o(t){Tt(A.$$.fragment,t),Tt(z.$$.fragment,t),Tt(K.$$.fragment,t),Tt(tt.$$.fragment,t),Tt(at.$$.fragment,t),_n=!1},d(t){t&&(n(x),n(bt),n(S),n(Lt),n(M),n(Nt),n(_),n(Gt),n(E),n(Ht),n(h),n(Zt),n(T),n($t),n(C),n(Wt),n(I),n(Ut),n(b),n(Jt),n(L),n(Ft),n(N),n(Ot),n(G),n(Dt),n(H),n(zt),n(R),n(qt),n(B),n(Xt),n(j),n(tn),n(Y),n(nn),n(Z),n(en),n($),n(sn),n(W),n(pn),n(U),n(cn),n(J),n(ln),n(V),n(rn),n(F),n(kn),n(O),n(dn),n(D),n(gn),n(f),n(vn),n(Q),n(wn),n(q),n(Pn),n(m),n(yn),n(k),n(Sn),n(et),n(Mn),n(st)),Ct(A),Ct(z),Ct(K),Ct(tt),Ct(at)}}}class Oa extends $a{constructor(x){super(),Wa(this,x,null,Ua,Ya,{})}}export{Oa as component};
