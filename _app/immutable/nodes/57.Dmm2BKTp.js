import{s as X,n as M}from"../chunks/scheduler.B0TnBjPs.js";import{S as Y,i as F,e as o,s as j,c as U,H as P,a as c,g as S,b as z,d as f,f as W,n as _,h as t,o as i,j as d,m as Z,p as w,t as N,k as Q,l as J}from"../chunks/index.Cnh3HYw3.js";import{V as K}from"../chunks/ViewApp.9sx5twVU.js";function $(L){let p,B="Navigation Drawer",x,u,H='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-drawer/overview" rel="nofollow" target="_blank">Navigation Drawer</a>.',y,s,l,e,A="Open in Online Editor",k,h,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,C,R=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,b,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,D,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,v;return l=new K({props:{project:{app:{code:`class MyApp extends App{
	
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
				Space.size(0.01),
				Button.onClick(a.closeDrawer).text(\`About\`).page(AboutPage),
				Space.size(0.01),
				Button.onClick(a.closeDrawer).text(\`Contact\`).page(ContactPage),
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
}`,x:485,y:147}]}}}),{c(){p=o("h1"),p.textContent=B,x=j(),u=o("p"),u.innerHTML=H,y=j(),s=o("div"),U(l.$$.fragment),e=o("a"),e.textContent=A,k=o("pre"),h=new P(!1),r=o("pre"),C=new P(!1),g=o("pre"),b=new P(!1),m=o("pre"),D=new P(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),S(p)!=="svelte-1jyl3tf"&&(p.textContent=B),x=z(n),u=c(n,"P",{"data-svelte-h":!0}),S(u)!=="svelte-1q1arlh"&&(u.innerHTML=H),y=z(n),s=c(n,"DIV",{});var a=f(s);W(l.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),S(e)!=="svelte-1o0keqt"&&(e.textContent=A),k=c(a,"PRE",{class:!0});var O=f(k);h=_(O,!1),O.forEach(t),r=c(a,"PRE",{class:!0});var E=f(r);C=_(E,!1),E.forEach(t),g=c(a,"PRE",{class:!0});var I=f(g);b=_(I,!1),I.forEach(t),m=c(a,"PRE",{class:!0});var T=f(m);D=_(T,!1),T.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtVMGOmzAQ/RXWvYCEUJJNlN1IPWxTqV2pVaumh62alXBgyKIQG9lG2TTi2nOP/Yx+U79kbcBgEkh7SKQgj+335s14Zg4IpymaHVBAQ0AzFCSYc+vj/i5NLXgWQEJuyfVhSZZC/WP+luEdsE8pEOu1FeGEgz4LGGABC4GZ+IzXYDslSjAQGSPWe7oFta82c42hkqdkrK9j78iJYFkbFCSUw79QtbS8re8D3tNM2KlUMqdERig0RfkNKOHCMly8yYSgirFceBuA9D6y2w4dj5J5EgcbuW9gHU/ILNr+35+/fMfkb+Luob/q52+wNf3vP5redBIWlyT1nCbZlvA+6SscbNaMZiSUFymz/VfT6uc7XvAUJyEDYlf84gvd8VPI7ikWIK+nOAxjsrZHHcilqGI8mytVJwWRLCFdM47bcCxSHIDH4x9gD7zB0Dz6H/q7lXx+zV8YF3agqgoHtYvK7HRS282Jud960qqLurPPN/tVkkHXc+m3X1EWyn4Zupa/SiTeVwu/85VOit/QfVy4xtFXGX6ZtqHOxQJv0wTUBKnr04hVtiIwXkM6lBhdajgq6/okeY7R7TnKXRTRRIbM0ez7AcUhmg1dRPBWjbliSCEX0SjiIB7k0e1EW9/QbDzIH12knLfAJd99abQGpq7TemYq49AMnXdZfDwOZe2Y80gHUySxaYQr/zi6XMp+LhTs5Xcyyt1S3+icvrrOLyqwYO1VOBrfFhqvb6Za4/U5jUajXFRlxWtlvFfq+GZSpnM8zR/zF1UukCc="),i(e,"title","Open in our Online Editor"),h.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),b.a=null,i(g,"class","language-js"),D.a=null,i(m,"class","language-js")},m(n,a){d(n,p,a),d(n,x,a),d(n,u,a),d(n,y,a),d(n,s,a),Z(l,s,null),w(s,e),w(s,k),h.m(q,k),w(s,r),C.m(R,r),w(s,g),b.m(G,g),w(s,m),D.m(V,m),v=!0},p:M,i(n){v||(N(l.$$.fragment,n),v=!0)},o(n){Q(l.$$.fragment,n),v=!1},d(n){n&&(t(p),t(x),t(u),t(y),t(s)),J(l)}}}class tn extends Y{constructor(p){super(),F(this,p,null,$,X,{})}}export{tn as component};
