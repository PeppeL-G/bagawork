import{s as Z,n as J}from"../chunks/scheduler.B0TnBjPs.js";import{S as M,i as q,e as o,s as V,c as X,H as b,a as c,g as B,b as Y,d,f as $,n as S,h as t,o as i,j as f,m as z,p as h,t as K,k as D,l as O}from"../chunks/index.BXVnRmkj.js";import{V as U}from"../chunks/ViewApp.DfUK9ae4.js";function W(N){let e,A="Navigation Bar",x,u,G='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-bar/overview" rel="nofollow" target="_blank">Navigation Bar</a>.',C,s,l,p,H="Open in Online Editor",k,w,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,y,R=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,v,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,P,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_;return l=new U({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return HomePage
	}
	
	createLayout(pageContent){
		return Rows.backgroundColor(\`skyblue\`).children(
			pageContent.growShrink(1),
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
}`,x:485,y:147}]}}}),{c(){e=o("h1"),e.textContent=A,x=V(),u=o("p"),u.innerHTML=G,C=V(),s=o("div"),X(l.$$.fragment),p=o("a"),p.textContent=H,k=o("pre"),w=new b(!1),r=o("pre"),y=new b(!1),g=o("pre"),v=new b(!1),m=o("pre"),P=new b(!1),this.h()},l(n){e=c(n,"H1",{"data-svelte-h":!0}),B(e)!=="svelte-vsv2cn"&&(e.textContent=A),x=Y(n),u=c(n,"P",{"data-svelte-h":!0}),B(u)!=="svelte-bgavah"&&(u.innerHTML=G),C=Y(n),s=c(n,"DIV",{});var a=d(s);$(l.$$.fragment,a),p=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),B(p)!=="svelte-196a3yr"&&(p.textContent=H),k=c(a,"PRE",{class:!0});var T=d(k);w=S(T,!1),T.forEach(t),r=c(a,"PRE",{class:!0});var E=d(r);y=S(E,!1),E.forEach(t),g=c(a,"PRE",{class:!0});var j=d(g);v=S(j,!1),j.forEach(t),m=c(a,"PRE",{class:!0});var L=d(m);P=S(L,!1),L.forEach(t),a.forEach(t),this.h()},h(){i(p,"target","_blank"),i(p,"href","/editor#eNqtks9ugkAQxl+F7gkSQqpiVG7qoW3SJk3toU0xYYEViLhLdpcoITxDk/beP2/YR+guiIpG0yYeIMzMzo9vv5kcwCQBVg484iNgAS+GjCl32TBJFLTiCPtMEd+5jW0uH48iyNGEQ8rvYYBUrapwinhKsXJNFkjmZbJo9tzCjKRcTUR1TLAg873eB7Jkhgu9eUBJiv0xiQlVHTbP3DhFjmZ4YRT7FGG16rL5DsoQPctJSCM8V1uaXp8YkZURoigIucgest1YZJztcZFOF5gZCfT9CAey5+CnNp8k0EP6Nh6lnBNscGGX6vx8vn7ZNpY+CMlSoVp7oul/Zrx9C8bQFX7VkDL4J+X9Q1CkQdDbcNbhaVJd0XbGWIBCBzMS+4gyYL3kIPKB1dIBhgu5N+VGAB2Q2Ywh/iRKg24dPQPLvCymOpAKGs0V76YKGhtYm7ZZQhnk2226SqP93YNGY9HqyzwKwtoSCb1w9m9XCNmrUkEm3t12oVf62qf0beZxVoEl9ajCtjkoNXb6vVpj55TGnVmfVeWaq6TsqFSz363sNHvFtPgFESeWEw=="),i(p,"title","Open in our Online Editor"),w.a=null,i(k,"class","language-js"),y.a=null,i(r,"class","language-js"),v.a=null,i(g,"class","language-js"),P.a=null,i(m,"class","language-js")},m(n,a){f(n,e,a),f(n,x,a),f(n,u,a),f(n,C,a),f(n,s,a),z(l,s,null),h(s,p),h(s,k),w.m(Q,k),h(s,r),y.m(R,r),h(s,g),v.m(F,g),h(s,m),P.m(I,m),_=!0},p:J,i(n){_||(K(l.$$.fragment,n),_=!0)},o(n){D(l.$$.fragment,n),_=!1},d(n){n&&(t(e),t(x),t(u),t(C),t(s)),O(l)}}}class tn extends M{constructor(e){super(),q(this,e,null,W,Z,{})}}export{tn as component};
