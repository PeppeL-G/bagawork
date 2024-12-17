import{s as Q,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as z,i as I,e as o,s as G,c as J,H as b,a as c,g as H,b as S,d,f as V,n as A,h as t,o as i,j as f,m as W,p as x,t as $,k as U,l as F}from"../chunks/index.BXVnRmkj.js";import{V as X}from"../chunks/ViewApp.CB1BM1bD.js";function Z(B){let e,T="Navigation Bar",h,l,R='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-bar/overview" rel="nofollow" target="_blank">Navigation Bar</a>.',w,s,u,p,M="Open in Online Editor",k,y,O=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">.</span><span class="token function">growMax</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,C,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,_,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,v,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,P;return u=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return HomePage
	}
	
	createLayout(pageContent){
		return Rows.backgroundColor(\`skyblue\`).children(
			pageContent.growMax(1),
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
}`,x:485,y:147}]}}}),{c(){e=o("h1"),e.textContent=T,h=G(),l=o("p"),l.innerHTML=R,w=G(),s=o("div"),J(u.$$.fragment),p=o("a"),p.textContent=M,k=o("pre"),y=new b(!1),r=o("pre"),C=new b(!1),g=o("pre"),_=new b(!1),m=o("pre"),v=new b(!1),this.h()},l(n){e=c(n,"H1",{"data-svelte-h":!0}),H(e)!=="svelte-vsv2cn"&&(e.textContent=T),h=S(n),l=c(n,"P",{"data-svelte-h":!0}),H(l)!=="svelte-bgavah"&&(l.innerHTML=R),w=S(n),s=c(n,"DIV",{});var a=d(s);V(u.$$.fragment,a),p=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),H(p)!=="svelte-u5ionw"&&(p.textContent=M),k=c(a,"PRE",{class:!0});var D=d(k);y=A(D,!1),D.forEach(t),r=c(a,"PRE",{class:!0});var E=d(r);C=A(E,!1),E.forEach(t),g=c(a,"PRE",{class:!0});var L=d(g);_=A(L,!1),L.forEach(t),m=c(a,"PRE",{class:!0});var j=d(m);v=A(j,!1),j.forEach(t),a.forEach(t),this.h()},h(){i(p,"target","_blank"),i(p,"href","/editor#eNqtks1ugkAUhV+FzgoSQqpirOzURdukJk3tok0xYYARiThDmCFCCM/QpN335w37CJ0BR0WjaRMXEO693I/DmVMAGMfAKoBHfAQs4EWQUmWcD+JYQRlD2KcKfy5sbDNxeQmCDE0YTNg9DJCq1ROWIJYmWLkhSyT6olk2d+5gTlKmxnw6IpiT2d7uA1lRw4XeIkhIiv0RiUiiOnSRu1GKHM3w5mHkJwir9ZbNdlAG31mNYaa2NF2OhyQz5igM5ox3D8FuxDvO9nXeTpeYGjH0/RAHYufgizabxNBD+rYepowRbDDuler8fL5+2TYWJnC9Qp4qDdH0PzPevjlj4HKzJKQq/kl5/+AU4Q70Npx1eZokJ9rOGZag1MGMRD5KKLBeChD6wGrpAMOlCE0VB6ADMptRxJ74qN+V1TOwzMtyqgOhoLFc827rohE/adomgaIotlG6TsP94EGjkTL5M4+csLZEQC+c/b8rueysUpDze7dd6rW+9il9m/M4q8CKelRh2+xXGjtXPamxc0rjzlmfVeWaq6T0qFTzqlvbafbKafkLiLCUyg=="),i(p,"title","Open in our Online Editor"),y.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),_.a=null,i(g,"class","language-js"),v.a=null,i(m,"class","language-js")},m(n,a){f(n,e,a),f(n,h,a),f(n,l,a),f(n,w,a),f(n,s,a),W(u,s,null),x(s,p),x(s,k),y.m(O,k),x(s,r),C.m(q,r),x(s,g),_.m(N,g),x(s,m),v.m(K,m),P=!0},p:Y,i(n){P||($(u.$$.fragment,n),P=!0)},o(n){U(u.$$.fragment,n),P=!1},d(n){n&&(t(e),t(h),t(l),t(w),t(s)),F(u)}}}class tn extends z{constructor(e){super(),I(this,e,null,Z,Q,{})}}export{tn as component};
