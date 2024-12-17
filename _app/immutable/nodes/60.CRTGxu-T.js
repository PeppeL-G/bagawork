import{s as M,n as N}from"../chunks/scheduler.B0TnBjPs.js";import{S as Q,i as W,e as o,s as I,c as z,H as P,a as c,g as S,b as T,d as f,f as K,n as v,h as t,o as i,j as d,m as U,p as w,t as Y,k as Z,l as X}from"../chunks/index.BXVnRmkj.js";import{V as J}from"../chunks/ViewApp.CB1BM1bD.js";function $(F){let p,B="Navigation Drawer",x,u,O='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-drawer/overview" rel="nofollow" target="_blank">Navigation Drawer</a>.',y,s,l,e,H="Open in Online Editor",k,h,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
		
		<span class="token keyword">const</span> closeDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> openDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>openDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">☰</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> drawer <span class="token operator">=</span> Columns<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#77777777</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>HomePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				closeDrawerButton<span class="token punctuation">,</span>
				openDrawerButton<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sample App</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Layers<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				pageContent<span class="token punctuation">,</span>
				drawer<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,C,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,b,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,D,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_;return l=new J({props:{project:{app:{code:`class MyApp extends App{
	
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
		
		const closeDrawerButton = Button.keepIf(a.isDrawerOpen).onClick(a.closeDrawer).text(\`←\`)
		const openDrawerButton = Button.keepIf(!a.isDrawerOpen).onClick(a.openDrawer).text(\`☰\`)
		
		const drawer = Columns.keepIf(a.isDrawerOpen).backgroundColor(\`#77777777\`).children(
			Rows.backgroundColor(\`white\`).padding(2).children(
				Button.onClick(a.closeDrawer).text(\`Home\`).page(HomePage),
				Space.grow(0.01),
				Button.onClick(a.closeDrawer).text(\`About\`).page(AboutPage),
				Space.grow(0.01),
				Button.onClick(a.closeDrawer).text(\`Contact\`).page(ContactPage),
				Space,
			),
			Space,
		)
		
		return Rows.backgroundColor(\`skyblue\`).children(
			Columns.border(1, \`black\`, \`b\`).children(
				closeDrawerButton,
				openDrawerButton,
				Text.grow(1).text(\`Sample App\`)
			),
			Layers.grow(1).children(
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
}`,x:485,y:147}]}}}),{c(){p=o("h1"),p.textContent=B,x=I(),u=o("p"),u.innerHTML=O,y=I(),s=o("div"),z(l.$$.fragment),e=o("a"),e.textContent=H,k=o("pre"),h=new P(!1),r=o("pre"),C=new P(!1),g=o("pre"),b=new P(!1),m=o("pre"),D=new P(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),S(p)!=="svelte-1jyl3tf"&&(p.textContent=B),x=T(n),u=c(n,"P",{"data-svelte-h":!0}),S(u)!=="svelte-1q1arlh"&&(u.innerHTML=O),y=T(n),s=c(n,"DIV",{});var a=f(s);K(l.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),S(e)!=="svelte-13epkum"&&(e.textContent=H),k=c(a,"PRE",{class:!0});var j=f(k);h=v(j,!1),j.forEach(t),r=c(a,"PRE",{class:!0});var A=f(r);C=v(A,!1),A.forEach(t),g=c(a,"PRE",{class:!0});var R=f(g);b=v(R,!1),R.forEach(t),m=c(a,"PRE",{class:!0});var E=f(m);D=v(E,!1),E.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtVMGK2zAQ/RWverHBmCSbkN1AD9sU2oWWlqaHlmbBij3OmjiSkWSyIfi65x77Gf2m/ZKVbMuWEzvtIYEYjaT35s1oZg4IpymaHVBAQ0AzFCSYc+vz/i5NLXgSQEJuyfVhSZZC/WP+nuEdsC8pEOutFeGEgz4LGGABC4GZ+IrXYDslSjAQGSPWR7oFta82c42hkqdkrK9j78iJYFkbFCSUw79QtbS8re8T3tNM2KlUMqdERig0RfkNKOHCMly8y4SgirFceBuA9D6y2w4dj5J5EgcbuW9gHU/ILNr+y/Nv3zH5m7h76K/6+RtsTf/nr6Y3nYTFJUk9p0m2JbxP+goHmzWjGQnlRcps/820+vmOFzzGSciA2BW/+EZ3/BSye4wFyOspDsOYrO1RB3IpqhjP5krVSUEkS0jXjOM2HIsUB+BJ5zt74A2G5tH/0N+t5PNr/sK4sANVVTioXVRmp5Pabk7M/daTVl3UnX2+2a+SDLqeS7/9irJQ9svQtfxVIvG+Wvidr3RS/Ibu48I1jr7L8Mu0DXUuFnibJqAmSF2fRqyyFYHxGtKhxOhSw1FZ1yfJc4xuz1HuoogmMmSOZr8OKA7RbOgigrdqzBVDCrmIRhEH8UMe3U609RPNxoP8wUXKeQtc8t2XRmtg6jqtZ6YyDs3Q+ZDFx+NQ1o45j3QwRRKbRrjyj6PLpeynQsFefiej3C31jc7pq+v8ogIL1l6Fo/FtofH6Zqo1Xp/TaDTKRVVWvFbGe6WObyZlOsfT/CF/BYsqkDc="),i(e,"title","Open in our Online Editor"),h.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),b.a=null,i(g,"class","language-js"),D.a=null,i(m,"class","language-js")},m(n,a){d(n,p,a),d(n,x,a),d(n,u,a),d(n,y,a),d(n,s,a),U(l,s,null),w(s,e),w(s,k),h.m(G,k),w(s,r),C.m(L,r),w(s,g),b.m(V,g),w(s,m),D.m(q,m),_=!0},p:N,i(n){_||(Y(l.$$.fragment,n),_=!0)},o(n){Z(l.$$.fragment,n),_=!1},d(n){n&&(t(p),t(x),t(u),t(y),t(s)),X(l)}}}class tn extends Q{constructor(p){super(),W(this,p,null,$,M,{})}}export{tn as component};
