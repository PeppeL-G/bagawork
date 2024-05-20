import{s as K,n as Q}from"../chunks/scheduler.DFPFbGJz.js";import{S as N,i as X,e as o,s as R,c as F,H as A,a as c,g as _,b as j,d,f as J,n as P,h as t,o as i,j as f,m as U,p as w,t as V,k as q,l as Y}from"../chunks/index.CzDE4dZi.js";import{V as M}from"../chunks/ViewApp.C2MU7-ZI.js";function $(I){let p,B="Navigation Drawer",x,u,O='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-drawer/overview" rel="nofollow" target="_blank">Navigation Drawer</a>.',h,s,l,e,S="Open in Online Editor",k,y,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">closeDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> closeDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> openDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>openDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">☰</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> drawer <span class="token operator">=</span> Columns<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#77777777</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>HomePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				closeDrawerButton<span class="token punctuation">,</span>
				openDrawerButton<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sample App</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Layers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				pageContent<span class="token punctuation">,</span>
				drawer<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,C,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,D,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,b,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,v;return l=new M({props:{project:{app:{code:`class MyApp extends App{
	
	isDrawerOpen = false
	
	createStartPage(){
		return HomePage
	}
	
	openDrawer(){
		a.isDrawerOpen = true
	}
	
	closeDrawer(){
		a.isDrawerOpen = false
	}
	
	createLayout(pageContent){
		
		const closeDrawerButton = Button.keepIf(a.isDrawerOpen).handler(a.closeDrawer).text(\`←\`)
		const openDrawerButton = Button.keepIf(!a.isDrawerOpen).handler(a.openDrawer).text(\`☰\`)
		
		const drawer = Columns.keepIf(a.isDrawerOpen).backgroundColor(\`#77777777\`).children(
			Rows.backgroundColor(\`white\`).padding(2).children(
				Button.handler(a.closeDrawer).text(\`Home\`).page(HomePage),
				Space.size(0.01),
				Button.handler(a.closeDrawer).text(\`About\`).page(AboutPage),
				Space.size(0.01),
				Button.handler(a.closeDrawer).text(\`Contact\`).page(ContactPage),
				Space,
			),
			Space,
		)
		
		return Rows.backgroundColor(\`skyblue\`).children(
			Columns.border(1, \`black\`, \`b\`).children(
				closeDrawerButton,
				openDrawerButton,
				Text.size(1).text(\`Sample App\`)
			),
			Layers.size(1).children(
				pageContent,
				drawer,
			),
		)
	}
	
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class HomePage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Home!\`),
		)
	}
}`,x:1,y:152},{id:2,folderId:1,code:`class AboutPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`About!\`),
		)
	}
}`,x:249,y:387},{id:3,folderId:1,code:`class ContactPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Contact us!\`),
		)
	}
}`,x:485,y:147}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){p=o("h1"),p.textContent=B,x=R(),u=o("p"),u.innerHTML=O,h=R(),s=o("div"),F(l.$$.fragment),e=o("a"),e.textContent=S,k=o("pre"),y=new A(!1),r=o("pre"),C=new A(!1),g=o("pre"),D=new A(!1),m=o("pre"),b=new A(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),_(p)!=="svelte-1jyl3tf"&&(p.textContent=B),x=j(n),u=c(n,"P",{"data-svelte-h":!0}),_(u)!=="svelte-1q1arlh"&&(u.innerHTML=O),h=j(n),s=c(n,"DIV",{});var a=d(s);J(l.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(e)!=="svelte-1ha4r9m"&&(e.textContent=S),k=c(a,"PRE",{class:!0});var L=d(k);y=P(L,!1),L.forEach(t),r=c(a,"PRE",{class:!0});var H=d(r);C=P(H,!1),H.forEach(t),g=c(a,"PRE",{class:!0});var T=d(g);D=P(T,!1),T.forEach(t),m=c(a,"PRE",{class:!0});var E=d(m);b=P(E,!1),E.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtVMGO2jAQ/ZWse0mkKAIWxC5SD3QrtUitWpU9tCorxSQTiAh2ZDtiKcq15x77Gf2mfkntJE4cCLSVQCLy2J43b8Zv5oBwmqLJAQU0BDRBQYI5t97vp2lqwbMAEnJLrg8LshDqH/PXDO+AfUiBWC+tCCcc9FnAAAuYC8zER7wC2ym9BAORMWK9pVtQ+2oz1z5U4pSI9XXsHQURLGs7BQnl8Devmlre5vcO72km7FQyeaBEZig0RPkNKOHCMkK8yoSgCrFceBuAdBbZ7YCOt8YkTCQh7Bm+jidkFW3/9/cfvmPiN3mfgb85j9/41vA/f2l4M0hYXJLQDzTJtoSfo77EwWbFaEZCeZEy238xrn6+4wXrOAkZELvCF5/ojp+67NaxAHk9xWEYk5U96PBciCrHi7VSOimApIS0Zhy3wZinOACPx9/A7nm9vnn0L/DTpXx+jV8YVw6gVIWDOkRldgap7ebE3G89adVF3dXnm/0yyaDrufTbLykLJeW+a/nLRPr7auF3vtKJ+A3ex8I1jh5l+mXZ+roWc7xNE1ATpNankatsRWC8dulgYnSpEajU9UnxHKPbc5S7KKKJTJmjydcDikM06buI4K0ac8WQQi6iUcRBfJZH9yNtfUGTYS9/cpEK3nIu8Wal0RqYWqf1zFTGoRk6b7L4eBxK7ZjzSCdTFLFphBv/OLtc0n4uGOzldzTI3ZLf4BK/WudXJVignmU4GN4XHG/vxprj7SWORqNclWWFa2X8LNXh3ags53CsH/4RpHIlbksA7ZryzSyahlki/oOuwctvSORP+R9NZ7q6"),i(e,"title","Open in our Online Editor"),y.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),D.a=null,i(g,"class","language-js"),b.a=null,i(m,"class","language-js")},m(n,a){f(n,p,a),f(n,x,a),f(n,u,a),f(n,h,a),f(n,s,a),U(l,s,null),w(s,e),w(s,k),y.m(W,k),w(s,r),C.m(z,r),w(s,g),D.m(G,g),w(s,m),b.m(Z,m),v=!0},p:Q,i(n){v||(V(l.$$.fragment,n),v=!0)},o(n){q(l.$$.fragment,n),v=!1},d(n){n&&(t(p),t(x),t(u),t(h),t(s)),Y(l)}}}class tn extends N{constructor(p){super(),X(this,p,null,$,K,{})}}export{tn as component};
