import{s as N,n as O}from"../chunks/scheduler.B0TnBjPs.js";import{S as Q,i as V,e as o,s as I,c as z,H as P,a as c,g as A,b as L,d,f as Z,n as H,h as t,o as i,j as f,m as W,p as x,t as D,k as J,l as $}from"../chunks/index.BXVnRmkj.js";import{V as X}from"../chunks/ViewApp.qg7AIhJt.js";function Y(j){let p,S="Navigation Bar",h,u,E='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-bar/overview" rel="nofollow" target="_blank">Navigation Bar</a>.',w,s,l,e,T="Open in Online Editor",k,v,R=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,y,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,_,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,b,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,C;return l=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return HomePage
	}
	
	createLayout(pageContent){
		return Rows.backgroundColor(\`skyblue\`).children(
			pageContent.growShrink(1),
			Box.height(1).backgroundColor(\`black\`),
			Columns.padding(1).font(Font.size(sw(6))).children(
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
}`,x:485,y:147}]}}}),{c(){p=o("h1"),p.textContent=S,h=I(),u=o("p"),u.innerHTML=E,w=I(),s=o("div"),z(l.$$.fragment),e=o("a"),e.textContent=T,k=o("pre"),v=new P(!1),r=o("pre"),y=new P(!1),g=o("pre"),_=new P(!1),m=o("pre"),b=new P(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),A(p)!=="svelte-vsv2cn"&&(p.textContent=S),h=L(n),u=c(n,"P",{"data-svelte-h":!0}),A(u)!=="svelte-bgavah"&&(u.innerHTML=E),w=L(n),s=c(n,"DIV",{});var a=d(s);Z(l.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),A(e)!=="svelte-hivllk"&&(e.textContent=T),k=c(a,"PRE",{class:!0});var K=d(k);v=H(K,!1),K.forEach(t),r=c(a,"PRE",{class:!0});var B=d(r);y=H(B,!1),B.forEach(t),g=c(a,"PRE",{class:!0});var F=d(g);_=H(F,!1),F.forEach(t),m=c(a,"PRE",{class:!0});var G=d(m);b=H(G,!1),G.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtkttKw0AQhl8l7tUGQtCaeshdFTyAglgvFFPIJtm0oelu2N3Q1pBnEPTewxv6CM4mTU9qUfAiS2Zm5+Off6dAJMuQW6CQRxS5KEyJlMbltJNlBp0oyiJpwH/hMU/pLxSUKNpVRKgr0qfYrCtKUJULZpzxEdV5nSxXey7IlOcKZ1A95gzIaq33mo+lHZBw2Bc8Z9ExT7nAvhxOgzSnvmmHgySNBGW47vLUEsqGnnF3IBI2xDum1dw44hN7QJP+QEH2KztIIeMvrkM6HzFpZySKEtbXPTHw8QkctkweKJZjvGea32jxVDcjIbUW8VGuFGe2Ahex//H6+OZ5TNsDk2jhuLHKtH7NeHoHRicAGxtIFfyR8vwCFO0bCeecWbiZ1FTMpdctUWmhmKcRFRK59wVKIuTuWIiRkV6nalGQhXgcS6puoXTYbqI75DrbZc9CWsFKc807r4OVxWxMm++mDorFkp3myfpKEntl/5phboAws0RDt/z16UqQPakUTOFst0qr1tfapG/+Hv8qsKL+qLDlHFYadw/2G427mzQuvfW/qpxxjVz+KNU5aNd2Ovtlr/wElv6diw=="),i(e,"title","Open in our Online Editor"),v.a=null,i(k,"class","language-js"),y.a=null,i(r,"class","language-js"),_.a=null,i(g,"class","language-js"),b.a=null,i(m,"class","language-js")},m(n,a){f(n,p,a),f(n,h,a),f(n,u,a),f(n,w,a),f(n,s,a),W(l,s,null),x(s,e),x(s,k),v.m(R,k),x(s,r),y.m(U,r),x(s,g),_.m(q,g),x(s,m),b.m(M,m),C=!0},p:O,i(n){C||(D(l.$$.fragment,n),C=!0)},o(n){J(l.$$.fragment,n),C=!1},d(n){n&&(t(p),t(h),t(u),t(w),t(s)),$(l)}}}class tn extends Q{constructor(p){super(),V(this,p,null,Y,N,{})}}export{tn as component};
