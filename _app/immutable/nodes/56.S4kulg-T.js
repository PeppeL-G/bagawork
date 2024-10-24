import{s as O,n as Q}from"../chunks/scheduler.B0TnBjPs.js";import{S as F,i as q,e as o,s as G,c as X,H as P,a as c,g as j,b as T,d,f as Y,n as H,h as t,o as i,j as f,m as Z,p as x,t as $,k as D,l as N}from"../chunks/index.Cnh3HYw3.js";import{V as K}from"../chunks/ViewApp.9sx5twVU.js";function W(E){let p,A="Navigation Bar",h,l,L='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-bar/overview" rel="nofollow" target="_blank">Navigation Bar</a>.',w,s,u,e,S="Open in Online Editor",k,C,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">🏠&#92;nHome</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>HomePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">💡&#92;nAbout</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">📞&#92;nContact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,v,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,_,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,y,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,b;return u=new K({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return HomePage
	}
	
	createLayout(pageContent){
		return Rows.backgroundColor(\`skyblue\`).children(
			pageContent.size(1),
			Box.height(1).backgroundColor(\`black\`),
			Columns.padding(1).children(
				Space,
				Button.text(\`🏠\\nHome\`).page(HomePage),
				Space,
				Button.text(\`💡\\nAbout\`).page(AboutPage),
				Space,
				Button.text(\`📞\\nContact\`).page(ContactPage),
				Space,
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
}`,x:485,y:147}]}}}),{c(){p=o("h1"),p.textContent=A,h=G(),l=o("p"),l.innerHTML=L,w=G(),s=o("div"),X(u.$$.fragment),e=o("a"),e.textContent=S,k=o("pre"),C=new P(!1),r=o("pre"),v=new P(!1),g=o("pre"),_=new P(!1),m=o("pre"),y=new P(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),j(p)!=="svelte-vsv2cn"&&(p.textContent=A),h=T(n),l=c(n,"P",{"data-svelte-h":!0}),j(l)!=="svelte-bgavah"&&(l.innerHTML=L),w=T(n),s=c(n,"DIV",{});var a=d(s);Y(u.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),j(e)!=="svelte-1xbhb2q"&&(e.textContent=S),k=c(a,"PRE",{class:!0});var U=d(k);C=H(U,!1),U.forEach(t),r=c(a,"PRE",{class:!0});var B=d(r);v=H(B,!1),B.forEach(t),g=c(a,"PRE",{class:!0});var M=d(g);_=H(M,!1),M.forEach(t),m=c(a,"PRE",{class:!0});var R=d(m);y=H(R,!1),R.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtkt9ugjAUxl+F9QoSQqZiVO7Ui23JlixzF1uGCYVWJWJL2pLJCM+wZLvfnzfcI6wFUdFotsQLCOcczo+Pr18GYBwDJwMBRRg4IIgg59pN2o9jDS8FJohr8jlziSvUFTAMBR4JyMQtnGLdKCeCYZEwol3SBVZ91czrO9cwpYnQYzkdUiLJYmf3jj5zy4fBfMpoQtCQRpTpHp+nfpRgz7CCWRghholebrliC2Xx8AXrDcOsZgO6tGY4nM6E7O5T/Uh2vM3rsp0sCLdiiFBIpmpn73OuGMUwwOamHiRCUGIJaZTu/Xy+frkuUQ5IsUqbXrlhmH9mvH1LRt+XTlWQovgn5f1DUpQ1MFhzVuVxUjUxtg4wB7kJJjRCmHHgPGUgRMBpmIDAhUpMkQVgAjqZcCwe5KjXrqpH4Njn+dgESkFtueRdlUUte5Vp6/ipItvk6CIJd1MHrVrEqp+5l4SVJQp65u3+XS5lLwsFqby3m7lZ6mse07c+j5MKLKgHFTbtXqGx1e1UGlvHNG6d9UlVrrhawg9Ktbvt0k67k4/zX3Mwk6A="),i(e,"title","Open in our Online Editor"),C.a=null,i(k,"class","language-js"),v.a=null,i(r,"class","language-js"),_.a=null,i(g,"class","language-js"),y.a=null,i(m,"class","language-js")},m(n,a){f(n,p,a),f(n,h,a),f(n,l,a),f(n,w,a),f(n,s,a),Z(u,s,null),x(s,e),x(s,k),C.m(I,k),x(s,r),v.m(J,r),x(s,g),_.m(V,g),x(s,m),y.m(z,m),b=!0},p:Q,i(n){b||($(u.$$.fragment,n),b=!0)},o(n){D(u.$$.fragment,n),b=!1},d(n){n&&(t(p),t(h),t(l),t(w),t(s)),N(u)}}}class tn extends F{constructor(p){super(),q(this,p,null,W,O,{})}}export{tn as component};
