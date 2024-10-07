import{s as V,n as F}from"../chunks/scheduler.B0TnBjPs.js";import{S as X,i as D,e as o,s as R,c as I,H as A,a as c,g as T,b as G,d,f as J,n as b,h as t,o as i,j as f,m as Q,p as x,t as W,k as $,l as K}from"../chunks/index.CHfggXAQ.js";import{V as Z}from"../chunks/ViewApp.6tllL5xD.js";function Y(O){let e,H="Navigation Bar",h,u,S='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-bar/overview" rel="nofollow" target="_blank">Navigation Bar</a>.',y,s,l,p,E="Open in Online Editor",k,w,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,C,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,v,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,_,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,P;return l=new Z({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:485,y:147}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){e=o("h1"),e.textContent=H,h=R(),u=o("p"),u.innerHTML=S,y=R(),s=o("div"),I(l.$$.fragment),p=o("a"),p.textContent=E,k=o("pre"),w=new A(!1),r=o("pre"),C=new A(!1),g=o("pre"),v=new A(!1),m=o("pre"),_=new A(!1),this.h()},l(n){e=c(n,"H1",{"data-svelte-h":!0}),T(e)!=="svelte-vsv2cn"&&(e.textContent=H),h=G(n),u=c(n,"P",{"data-svelte-h":!0}),T(u)!=="svelte-bgavah"&&(u.innerHTML=S),y=G(n),s=c(n,"DIV",{});var a=d(s);J(l.$$.fragment,a),p=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),T(p)!=="svelte-dw4omz"&&(p.textContent=E),k=c(a,"PRE",{class:!0});var z=d(k);w=b(z,!1),z.forEach(t),r=c(a,"PRE",{class:!0});var B=d(r);C=b(B,!1),B.forEach(t),g=c(a,"PRE",{class:!0});var j=d(g);v=b(j,!1),j.forEach(t),m=c(a,"PRE",{class:!0});var L=d(m);_=b(L,!1),L.forEach(t),a.forEach(t),this.h()},h(){i(p,"target","_blank"),i(p,"href","/editor#eNqtks1Kw0AUhV8lziqBEOwfanatCy0oiHWhGCHTzLQNTWdC5g62hjyDoHt/3tBHcCbptE3FotBFQu69uSdfzpwc4TRFfo4iTijyUZRgIazLRTdNLToHyoiw1HMesAD0FWUUAx0AzuAKj6ntVBPIKMiMWed8RnVfN4v6zgVecAl2qqannCll2Nq95o/CG+JoOs64ZOSUJzyzQzFdDBNJQ8eLJnFCMsrsaiuADSlPxE/UbjiumfX43JvQeDwB1f2pOkxUJ1y/rtpyxoSXYkJiNtY7Pz4XwCDFEXXXdU8CcOaBMsoOv96fP4KAaQcUrGazjRuO+2eNl0+l0R0qp4xIWfxT5fVNqWhrcLTSWZa7lczE2TjAAhUuGvGE0Ewg/z5HMUF+w0UMz3RiyiwgF/HRSFC4VaOTjqnukN8+LB5cpAlqy5Vevypq2TOmreKni3ydozMZb6cOe7WImZ+5UQpLS7ToQbj9d4XCnpcEC3XvNAu34mvu4ludx14BS9VfCZvtk5KxdXxkGFu7GDfOeq+US11Lil9R28edys72kTn4GzpLE6VbC0DdUzHtj7pEJvAP3A2ucA1RPBTfP/S9rA=="),i(p,"title","Open in our Online Editor"),w.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),v.a=null,i(g,"class","language-js"),_.a=null,i(m,"class","language-js")},m(n,a){f(n,e,a),f(n,h,a),f(n,u,a),f(n,y,a),f(n,s,a),Q(l,s,null),x(s,p),x(s,k),w.m(U,k),x(s,r),C.m(N,r),x(s,g),v.m(q,g),x(s,m),_.m(M,m),P=!0},p:F,i(n){P||(W(l.$$.fragment,n),P=!0)},o(n){$(l.$$.fragment,n),P=!1},d(n){n&&(t(e),t(h),t(u),t(y),t(s)),K(l)}}}class tn extends X{constructor(e){super(),D(this,e,null,Y,V,{})}}export{tn as component};
