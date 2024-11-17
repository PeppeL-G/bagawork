import{s as M,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as J,i as $,e as p,s as A,c as nn,H as w,a as e,g as E,b as H,d as k,f as an,n as S,h as t,o as u,j as P,m as sn,p as r,t as tn,k as pn,l as en}from"../chunks/index.Cnh3HYw3.js";import{V as on}from"../chunks/ViewApp.BajIxHdc.js";function cn(K){let o,G="Book",C,l,V="This example shows how to create an app that functions as a book, where the user can go to different pages in the book by clicking on buttons.",y,s,i,c,Q="Open in Online Editor",g,_,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CoverPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,v,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CoverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The story about BagaWork</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">by Peppe L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Start Reading</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page1<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,d,B,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CoverPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,f,T,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">So he created his own little framework that made it easier. He called that framework for BagaWork.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page1<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page3<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,x,R,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page3</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">And that's the framework you are using now!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">→</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page4<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h,b,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page4</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The end!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Read again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>CoverPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,j;return i=new on({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return CoverPage
	}
}`},folders:[{id:1,name:"Start",offsetX:72,offsetY:89}],pages:[{id:1,folderId:1,code:`class CoverPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The story about BagaWork\`),
			Text.text(\`by Peppe L-G\`),
			Space,
			Space,
			Columns.children(
				Space,
				Button.text(\`Start Reading\`).page(Page1),
				Space,
			),
			Space,
		)
	}
}`,x:78,y:187},{id:2,folderId:1,code:`class Page1 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(CoverPage),
				Space,
				Text.text(\`1\`),
				Space,
				Button.text(\`→\`).page(Page2),
			),
		)
	}
}`,x:289,y:451},{id:3,folderId:1,code:`class Page3 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`And that's the framework you are using now!\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(Page2),
				Space,
				Text.text(\`3\`),
				Space,
				Button.text(\`→\`).page(Page4),
			),
		)
	}
}`,x:808,y:449},{id:4,folderId:1,code:`class Page2 extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`So he created his own little framework that made it easier. He called that framework for BagaWork.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(Page1),
				Space,
				Text.text(\`2\`),
				Space,
				Button.text(\`→\`).page(Page3),
			),
		)
	}
}`,x:558,y:451},{id:6,folderId:1,code:`class Page4 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The end!\`),
			Space.size(2),
			Columns.children(
				Space,
				Button.text(\`Read again\`).page(CoverPage),
				Space,
			),
			Space,
		)
	}
}`,x:997,y:186}]}}}),{c(){o=p("h1"),o.textContent=G,C=A(),l=p("p"),l.textContent=V,y=A(),s=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=Q,g=p("pre"),_=new w(!1),m=p("pre"),v=new w(!1),d=p("pre"),B=new w(!1),f=p("pre"),T=new w(!1),x=p("pre"),R=new w(!1),h=p("pre"),b=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),E(o)!=="svelte-119rxel"&&(o.textContent=G),C=H(n),l=e(n,"P",{"data-svelte-h":!0}),E(l)!=="svelte-1wrp8ki"&&(l.textContent=V),y=H(n),s=e(n,"DIV",{});var a=k(s);an(i.$$.fragment,a),c=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),E(c)!=="svelte-1u3zxjz"&&(c.textContent=Q),g=e(a,"PRE",{class:!0});var O=k(g);_=S(O,!1),O.forEach(t),m=e(a,"PRE",{class:!0});var Z=k(m);v=S(Z,!1),Z.forEach(t),d=e(a,"PRE",{class:!0});var W=k(d);B=S(W,!1),W.forEach(t),f=e(a,"PRE",{class:!0});var I=k(f);T=S(I,!1),I.forEach(t),x=e(a,"PRE",{class:!0});var L=k(x);R=S(L,!1),L.forEach(t),h=e(a,"PRE",{class:!0});var z=k(h);b=S(z,!1),z.forEach(t),a.forEach(t),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNq1lc1um0AQx19lupcaiaIak9jmluSQVmrVKI7UViWS12b4UGEX7S4lrsW156qP2CfpArEFjj9S170gdnd2Zvj/ZpgloVlG3CWZcx+JS+YJlRLeLy6yDPBBIfMl6Pelxzw1F0gVThQV6oaG2DPqXU8JVLlgcMW/oagOqt3SYyUpTRLwxEchiftlSWKfuH2TMJpWkWo/xCQ8CCSqT8Qd2qvFZ+KOxuW9STLtrXO3cfe2WXRSXkdfp10tWnlf5/Fmxre8kNY8ihNfIOs1R56aZHSO5mp1p91ZSj9607sIQSouFkBnPFdwSUP6kYuvU2Ob9WwBN5hlCO9eXbcsut67qyue5CnbktKmoacuc6U4ewxVSwm3SP2YhVPDqmTrVZ/fN8xdLrZnZKzZmeRBIxmZZKG1Hg1Ls2Fg72NQh/xn/VsafmBzhDzjDCioOEUTVIQCoaBS72SCh4KmKQooIq6PeB5GCupwWgiQKU0SyCUGeQK6zGV9T3EOERU+BFzADMOYMV2g1k5Ee6B0IPz+8XMl/boWd8vf+cz+dJ/hRpRfbcC28QToBkJ7NK4ZOmf9FcPBIYaDUzK8YL5GQ9VLWcGDQBPDQncNLHgOVMPMZQWL8eLFKRlsqLNX/8HR+jsH9R+9bnrIccYr/Z1D+tun1H+iyx2bpkAfolgCLxgksVJJm0aFCFLqI8QKkMoYhQVv9EXdQ9gQbFlXvbP6/VmnxtZ/Jjb7aGyDg9jOzkabbXN+CJvzf0eP9vykQywZf8deq86PHSHV8AANNGZ/8RN71gwZj4ePQ+S8vC//ACbZCOk="),u(c,"title","Open in our Online Editor"),_.a=null,u(g,"class","language-js"),v.a=null,u(m,"class","language-js"),B.a=null,u(d,"class","language-js"),T.a=null,u(f,"class","language-js"),R.a=null,u(x,"class","language-js"),b.a=null,u(h,"class","language-js")},m(n,a){P(n,o,a),P(n,C,a),P(n,l,a),P(n,y,a),P(n,s,a),sn(i,s,null),r(s,c),r(s,g),_.m(q,g),r(s,m),v.m(F,m),r(s,d),B.m(N,d),r(s,f),T.m(D,f),r(s,x),R.m(U,x),r(s,h),b.m(X,h),j=!0},p:Y,i(n){j||(tn(i.$$.fragment,n),j=!0)},o(n){pn(i.$$.fragment,n),j=!1},d(n){n&&(t(o),t(C),t(l),t(y),t(s)),en(i)}}}class rn extends J{constructor(o){super(),$(this,o,null,cn,M,{})}}export{rn as component};
