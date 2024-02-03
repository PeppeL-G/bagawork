import{s as na,n as ta}from"../chunks/scheduler.UQwd20JU.js";import{S as aa,i as sa,e,s as o,c as It,H as k,a as p,g as l,b as c,d as i,f as Nt,n as r,h as t,o as u,j as s,m as Lt,p as g,t as jt,k as Bt,l as Zt}from"../chunks/index.i__Fl8cY.js";import{V as Rt}from"../chunks/ViewApp.m6vzcyjb.js";function ea(Vt){let f,Wn="2. App Constants",sn,w,$n="This tutorial will teach you what constants in programming are, and how you can create them in a Bagawork app.",en,v,Un="App constants vs page constants",pn,P,Jn="In the previous tutorial you learned what page constants are, and how to use them. Page constants are great, but they have one big limitation: a page constant can only be used on the page that created it. Sometimes we want to re-use a value on multiple different pages, and then it&#39;s better to use an <em>app constant</em> instead, since all different pages have access to all app constants.",on,_,Fn="Below we have an example of an app that uses the same hardcoded value (the name of the app, <code>InfoApp</code>) at multiple diffrefent pages, including on multiple different pages.",cn,d,S,h,Qn="Open in Online Editor",$,ln,Ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,U,un,zt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,J,kn,qt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,F,rn,Xt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,dn,M,nt="This works, but changing the name of the app in the future (for example to <code>Information App</code>) will be hard, since there are so many places we would need to change that name. Putting the name in an app constant, and then refer to that constant at each place in the code we need to use the name would be better.",mn,y,tt="How to create app constants",gn,T,at="We create app constants the same way we create page constants, but we write them in the <code>App</code> class instead. In the code below you find an example of how to create the following app constants:",fn,C,st="<li><code>APP_NAME</code> will have the string value <code>InfoApp</code></li> <li><code>CREATED_DATE</code> will have the string value <code>2023-09-15</code></li>",hn,A,xn,Dt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">CREATED_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app constants as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,E,et="How to use app constants",vn,H,pt="In Bagawork, everything you create in your <code>App</code> class (constants, variables and methods) are accessible in a special variable called <code>a</code> (short for <em>app</em>). To retrieve the value of a constant, you would simply write <code>a.THE_NAME_OF_THE_CONSTANT</code>, for example <code>a.APP_NAME</code>.",Pn,b,ot="To display the name of the app on the <code>MenuPage</code> we had before, the following code were used:",_n,I,Sn,Gt='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Mn,N,ct="With the app constants we have now, we can instead write:",yn,L,Tn,Kt='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Cn,j,lt="In this case, when we create a string that only contains the special <code>${SOMETHING}</code> thing, we can actually simplify the code to:",An,B,En,Yt='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token punctuation">)</span></code>',Hn,Z,ut="When the computer executes this code, it will first retrieve the value for the <code>APP_NAME</code> constant from the <code>a</code> variable, and it gets back the string value <code>InfoApp</code>, and pass that to the <code>Text.text()</code> method, which then will display that text.",bn,R,it="However, on the <code>MarioPage</code>, where the text we send to the <code>Text</code> component is not only the app name, but looks like this:",In,V,Nn,Wt='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Ln,O,kt="We have to use the complicated <code>${SOMETHING}</code> thing:",jn,z,Bn,$t='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">APP_NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> - Mario</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Zn,q,rt="The same is true for the <code>ZeldaPage</code>.",Rn,X,dt="The final solution",Vn,D,mt="So, here's the code for the app using constants, instead of harding the name of the app at multiple places.",On,m,G,x,gt="Open in Online Editor",Q,zn,Ut=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">APP_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">InfoApp</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> MenuPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nn,qn,Jt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MenuPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,tn,Xn,Ft=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MarioPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,an,Dn,Qt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ZeldaPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Gn,K,ft="That's it!",Kn,Y,ht="Great work, now you also now how to use app constants in Bagawork! 🥳 And constants are great, but variables are even more usefull, so let's take a look at them next.",Yn;return S=new Rt({props:{project:{app:{code:`class InfoApp extends App{
	
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
	
}`,x:434,y:167}],pageTemplates:[]}}}),G=new Rt({props:{project:{app:{code:`class InfoApp extends App{
	
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
	
}`,x:434,y:167}],pageTemplates:[]}}}),{c(){f=e("h1"),f.textContent=Wn,sn=o(),w=e("p"),w.textContent=$n,en=o(),v=e("h2"),v.textContent=Un,pn=o(),P=e("p"),P.innerHTML=Jn,on=o(),_=e("p"),_.innerHTML=Fn,cn=o(),d=e("div"),It(S.$$.fragment),h=e("a"),h.textContent=Qn,$=e("pre"),ln=new k(!1),U=e("pre"),un=new k(!1),J=e("pre"),kn=new k(!1),F=e("pre"),rn=new k(!1),dn=o(),M=e("p"),M.innerHTML=nt,mn=o(),y=e("h3"),y.textContent=tt,gn=o(),T=e("p"),T.innerHTML=at,fn=o(),C=e("ul"),C.innerHTML=st,hn=o(),A=e("pre"),xn=new k(!1),wn=o(),E=e("h3"),E.textContent=et,vn=o(),H=e("p"),H.innerHTML=pt,Pn=o(),b=e("p"),b.innerHTML=ot,_n=o(),I=e("pre"),Sn=new k(!1),Mn=o(),N=e("p"),N.textContent=ct,yn=o(),L=e("pre"),Tn=new k(!1),Cn=o(),j=e("p"),j.innerHTML=lt,An=o(),B=e("pre"),En=new k(!1),Hn=o(),Z=e("p"),Z.innerHTML=ut,bn=o(),R=e("p"),R.innerHTML=it,In=o(),V=e("pre"),Nn=new k(!1),Ln=o(),O=e("p"),O.innerHTML=kt,jn=o(),z=e("pre"),Bn=new k(!1),Zn=o(),q=e("p"),q.innerHTML=rt,Rn=o(),X=e("h3"),X.textContent=dt,Vn=o(),D=e("p"),D.textContent=mt,On=o(),m=e("div"),It(G.$$.fragment),x=e("a"),x.textContent=gt,Q=e("pre"),zn=new k(!1),nn=e("pre"),qn=new k(!1),tn=e("pre"),Xn=new k(!1),an=e("pre"),Dn=new k(!1),Gn=o(),K=e("h2"),K.textContent=ft,Kn=o(),Y=e("p"),Y.textContent=ht,this.h()},l(n){f=p(n,"H1",{"data-svelte-h":!0}),l(f)!=="svelte-13nebke"&&(f.textContent=Wn),sn=c(n),w=p(n,"P",{"data-svelte-h":!0}),l(w)!=="svelte-ceqt2"&&(w.textContent=$n),en=c(n),v=p(n,"H2",{"data-svelte-h":!0}),l(v)!=="svelte-146a9ch"&&(v.textContent=Un),pn=c(n),P=p(n,"P",{"data-svelte-h":!0}),l(P)!=="svelte-1w6vkkr"&&(P.innerHTML=Jn),on=c(n),_=p(n,"P",{"data-svelte-h":!0}),l(_)!=="svelte-4a6qp1"&&(_.innerHTML=Fn),cn=c(n),d=p(n,"DIV",{});var a=i(d);Nt(S.$$.fragment,a),h=p(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1dxtzpx"&&(h.textContent=Qn),$=p(a,"PRE",{class:!0});var xt=i($);ln=r(xt,!1),xt.forEach(t),U=p(a,"PRE",{class:!0});var wt=i(U);un=r(wt,!1),wt.forEach(t),J=p(a,"PRE",{class:!0});var vt=i(J);kn=r(vt,!1),vt.forEach(t),F=p(a,"PRE",{class:!0});var Pt=i(F);rn=r(Pt,!1),Pt.forEach(t),a.forEach(t),dn=c(n),M=p(n,"P",{"data-svelte-h":!0}),l(M)!=="svelte-1rq9mb4"&&(M.innerHTML=nt),mn=c(n),y=p(n,"H3",{"data-svelte-h":!0}),l(y)!=="svelte-1lqrax7"&&(y.textContent=tt),gn=c(n),T=p(n,"P",{"data-svelte-h":!0}),l(T)!=="svelte-jdbdyl"&&(T.innerHTML=at),fn=c(n),C=p(n,"UL",{"data-svelte-h":!0}),l(C)!=="svelte-10e478v"&&(C.innerHTML=st),hn=c(n),A=p(n,"PRE",{class:!0});var _t=i(A);xn=r(_t,!1),_t.forEach(t),wn=c(n),E=p(n,"H3",{"data-svelte-h":!0}),l(E)!=="svelte-4tjar6"&&(E.textContent=et),vn=c(n),H=p(n,"P",{"data-svelte-h":!0}),l(H)!=="svelte-1l53lyx"&&(H.innerHTML=pt),Pn=c(n),b=p(n,"P",{"data-svelte-h":!0}),l(b)!=="svelte-jfw0g6"&&(b.innerHTML=ot),_n=c(n),I=p(n,"PRE",{class:!0});var St=i(I);Sn=r(St,!1),St.forEach(t),Mn=c(n),N=p(n,"P",{"data-svelte-h":!0}),l(N)!=="svelte-bdd15a"&&(N.textContent=ct),yn=c(n),L=p(n,"PRE",{class:!0});var Mt=i(L);Tn=r(Mt,!1),Mt.forEach(t),Cn=c(n),j=p(n,"P",{"data-svelte-h":!0}),l(j)!=="svelte-xg27jd"&&(j.innerHTML=lt),An=c(n),B=p(n,"PRE",{class:!0});var yt=i(B);En=r(yt,!1),yt.forEach(t),Hn=c(n),Z=p(n,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-67q58a"&&(Z.innerHTML=ut),bn=c(n),R=p(n,"P",{"data-svelte-h":!0}),l(R)!=="svelte-iopbuc"&&(R.innerHTML=it),In=c(n),V=p(n,"PRE",{class:!0});var Tt=i(V);Nn=r(Tt,!1),Tt.forEach(t),Ln=c(n),O=p(n,"P",{"data-svelte-h":!0}),l(O)!=="svelte-15w802t"&&(O.innerHTML=kt),jn=c(n),z=p(n,"PRE",{class:!0});var Ct=i(z);Bn=r(Ct,!1),Ct.forEach(t),Zn=c(n),q=p(n,"P",{"data-svelte-h":!0}),l(q)!=="svelte-rhpsxd"&&(q.innerHTML=rt),Rn=c(n),X=p(n,"H3",{"data-svelte-h":!0}),l(X)!=="svelte-9nes82"&&(X.textContent=dt),Vn=c(n),D=p(n,"P",{"data-svelte-h":!0}),l(D)!=="svelte-xyqt02"&&(D.textContent=mt),On=c(n),m=p(n,"DIV",{});var W=i(m);Nt(G.$$.fragment,W),x=p(W,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-1mp6pwx"&&(x.textContent=gt),Q=p(W,"PRE",{class:!0});var At=i(Q);zn=r(At,!1),At.forEach(t),nn=p(W,"PRE",{class:!0});var Et=i(nn);qn=r(Et,!1),Et.forEach(t),tn=p(W,"PRE",{class:!0});var Ht=i(tn);Xn=r(Ht,!1),Ht.forEach(t),an=p(W,"PRE",{class:!0});var bt=i(an);Dn=r(bt,!1),bt.forEach(t),W.forEach(t),Gn=c(n),K=p(n,"H2",{"data-svelte-h":!0}),l(K)!=="svelte-p2uhy5"&&(K.textContent=ft),Kn=c(n),Y=p(n,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-3tved1"&&(Y.textContent=ht),this.h()},h(){u(h,"target","_blank"),u(h,"href","/editor#eNrNVN9v0zAQ/ldOfkqkLOpICyjiBXhgExqa6B6AdVI9+9JYSu3IudCVKv/77Pzo2ooWEEziIcmdz3f32d932TBelizdMGEkspSJglcVXOrMvC1LwAdCLStw9mamZ+QfYZETTolbuuYLDMIuQhapthquUNd+3S82XU7DmohlppBoK5bebpiSLD2PmOZL37ItxSJmsqxC+sLS0WB/dXZzF7HS1dvL7Ipdds4e8qH9Frp3DrB/qNUh6s9mVcUiV4W0qIMuNKMbVyQm9wrm/Y3Mw2gITksuMK7UDwxG8WjyFNjJmmKBgmCVc4K1qWHFNQEZcDAkLI1F4PempngexgVmFBxU33rvTVEv9U8QHm6c0buayOi+/xW3yrji/gKD1vHXEUbH0sO/7vgNC8mHjq3zux1318M99UTswRE9mURszdIkSZqoE8KLU0LY9n4mJcAZ9Gc9wtlOSrsRVAUcviuJBhZO+SBybrkgtNCBkXC/hk9Ke7QmhmmOPoXcp7RKC3SHMlnrX6xtXSB8VHohzTKe/2vZvDnbaqYfpxMEHmVsnCQtY+PX44Gx5OToDvp8Psb6efg1Y+3GP2XsAh1BzgaN6NC3c16Jeoe/a+Qi/3/5Grd8nb98Nfx0b3BZFu6g/ud71zwCw2E26g=="),u(h,"title","Open in our Online Editor"),ln.a=null,u($,"class","language-js"),un.a=null,u(U,"class","language-js"),kn.a=null,u(J,"class","language-js"),rn.a=null,u(F,"class","language-js"),xn.a=null,u(A,"class","language-js"),Sn.a=null,u(I,"class","language-js"),Tn.a=null,u(L,"class","language-js"),En.a=null,u(B,"class","language-js"),Nn.a=null,u(V,"class","language-js"),Bn.a=null,u(z,"class","language-js"),u(x,"target","_blank"),u(x,"href","/editor#eNrNVFuPk0AU/isnEx8gYUlXWjVEH6ox7sZ009h98NKNzA6HQgIzZDjYrYT/7nDrLbZqXBMfgHPm3Of7DhXjec78igkVIvOZSHlRwLWM1DTPAR8IZViAkaulXFLzTOfzrzfT2Vt4BUHvFww2oZETLohrmvMVWnYXRRqp1BJmKMvmvDmsu5ia1Q6LVBqiLpj/pWJJyPxLh0meNe20qZjDVBQVSB+ZPxrkT0au7xyWm3wHkV2y6045mGoovx2rUarD3t+VyXHXH9S6cEWcpKFGaXWmJd2aJC6Zl8Xd4UpsZ7Auci7QLZLvaI3c0WRn2IUFC0xREKxjTrBRJay5JCAFpo8QMqUR+L0qyQ1sN8WIrKPsW+2NSstM/qTFY8clvS6JlOzrz7hOlEne3KDVKs192M6pcPuvK37GNORDxVb53Yr75/YBfRz2YJCeTBy2Yb7nebXTMeHpOSZsaz8yFYIn1Y4NNVxAP/EJ5PYCW0dICuDwLQlRwcosAIiYay4INXQthXC/gZtENj0rFxYxNiFkPrlOpEAzmopa/WqjyxThfSJXocrc4LHJ8/Jiy5x+q87AeBK3see1uI1fjAfcvLMbPLD0X+PW78avcWsd/xS3KzQwGRkkopmh3flClHsozpGL+P9Fbdyidvns+fAHvsUsT82gzZ/4rv4BwE1Cqg=="),u(x,"title","Open in our Online Editor"),zn.a=null,u(Q,"class","language-js"),qn.a=null,u(nn,"class","language-js"),Xn.a=null,u(tn,"class","language-js"),Dn.a=null,u(an,"class","language-js")},m(n,a){s(n,f,a),s(n,sn,a),s(n,w,a),s(n,en,a),s(n,v,a),s(n,pn,a),s(n,P,a),s(n,on,a),s(n,_,a),s(n,cn,a),s(n,d,a),Lt(S,d,null),g(d,h),g(d,$),ln.m(Ot,$),g(d,U),un.m(zt,U),g(d,J),kn.m(qt,J),g(d,F),rn.m(Xt,F),s(n,dn,a),s(n,M,a),s(n,mn,a),s(n,y,a),s(n,gn,a),s(n,T,a),s(n,fn,a),s(n,C,a),s(n,hn,a),s(n,A,a),xn.m(Dt,A),s(n,wn,a),s(n,E,a),s(n,vn,a),s(n,H,a),s(n,Pn,a),s(n,b,a),s(n,_n,a),s(n,I,a),Sn.m(Gt,I),s(n,Mn,a),s(n,N,a),s(n,yn,a),s(n,L,a),Tn.m(Kt,L),s(n,Cn,a),s(n,j,a),s(n,An,a),s(n,B,a),En.m(Yt,B),s(n,Hn,a),s(n,Z,a),s(n,bn,a),s(n,R,a),s(n,In,a),s(n,V,a),Nn.m(Wt,V),s(n,Ln,a),s(n,O,a),s(n,jn,a),s(n,z,a),Bn.m($t,z),s(n,Zn,a),s(n,q,a),s(n,Rn,a),s(n,X,a),s(n,Vn,a),s(n,D,a),s(n,On,a),s(n,m,a),Lt(G,m,null),g(m,x),g(m,Q),zn.m(Ut,Q),g(m,nn),qn.m(Jt,nn),g(m,tn),Xn.m(Ft,tn),g(m,an),Dn.m(Qt,an),s(n,Gn,a),s(n,K,a),s(n,Kn,a),s(n,Y,a),Yn=!0},p:ta,i(n){Yn||(jt(S.$$.fragment,n),jt(G.$$.fragment,n),Yn=!0)},o(n){Bt(S.$$.fragment,n),Bt(G.$$.fragment,n),Yn=!1},d(n){n&&(t(f),t(sn),t(w),t(en),t(v),t(pn),t(P),t(on),t(_),t(cn),t(d),t(dn),t(M),t(mn),t(y),t(gn),t(T),t(fn),t(C),t(hn),t(A),t(wn),t(E),t(vn),t(H),t(Pn),t(b),t(_n),t(I),t(Mn),t(N),t(yn),t(L),t(Cn),t(j),t(An),t(B),t(Hn),t(Z),t(bn),t(R),t(In),t(V),t(Ln),t(O),t(jn),t(z),t(Zn),t(q),t(Rn),t(X),t(Vn),t(D),t(On),t(m),t(Gn),t(K),t(Kn),t(Y)),Zt(S),Zt(G)}}}class la extends aa{constructor(f){super(),sa(this,f,null,ea,na,{})}}export{la as component};
