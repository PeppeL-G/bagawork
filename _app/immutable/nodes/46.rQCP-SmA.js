import{s as K,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as Z,i as $,e as p,s as N,c as nn,H as w,a as e,g as I,b as O,d as k,f as an,n as S,h as t,o as u,j as P,m as sn,p as r,t as tn,k as pn,l as en}from"../chunks/index.BXVnRmkj.js";import{V as on}from"../chunks/ViewApp.qg7AIhJt.js";function cn(Q){let o,A="Book",y,l,b="This example shows how to create an app that functions as a book, where the user can go to different pages in the book by clicking on buttons.",_,s,i,c,E="Open in Online Editor",g,v,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CoverPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,C,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CoverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,d,T,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,f,B,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,x,G,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page3</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,h,R,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page4</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The end!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
			Space.grow(2),
			Columns.children(
				Space,
				Button.text(\`Read again\`).page(CoverPage),
				Space,
			),
			Space,
		)
	}
}`,x:997,y:186}]}}}),{c(){o=p("h1"),o.textContent=A,y=N(),l=p("p"),l.textContent=b,_=N(),s=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=E,g=p("pre"),v=new w(!1),m=p("pre"),C=new w(!1),d=p("pre"),T=new w(!1),f=p("pre"),B=new w(!1),x=p("pre"),G=new w(!1),h=p("pre"),R=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),I(o)!=="svelte-119rxel"&&(o.textContent=A),y=O(n),l=e(n,"P",{"data-svelte-h":!0}),I(l)!=="svelte-1wrp8ki"&&(l.textContent=b),_=O(n),s=e(n,"DIV",{});var a=k(s);an(i.$$.fragment,a),c=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),I(c)!=="svelte-1ji56fk"&&(c.textContent=E),g=e(a,"PRE",{class:!0});var V=k(g);v=S(V,!1),V.forEach(t),m=e(a,"PRE",{class:!0});var H=k(m);C=S(H,!1),H.forEach(t),d=e(a,"PRE",{class:!0});var U=k(d);T=S(U,!1),U.forEach(t),f=e(a,"PRE",{class:!0});var W=k(f);B=S(W,!1),W.forEach(t),x=e(a,"PRE",{class:!0});var L=k(x);G=S(L,!1),L.forEach(t),h=e(a,"PRE",{class:!0});var q=k(h);R=S(q,!1),q.forEach(t),a.forEach(t),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNq1lc1um0AQx19lupcaiaIaO7HNLckhrdSqURyprUokr2H4UGEX7S4llsU156qP2CfpAsHCjj9S170gdnd2Zvj/ZpgloVlGnCXxuI/EIV5CpYSPi4ssA3xQyHwJ+n3pMld5AqnCqaJC3dAQe0a96yqBKhcMrvgPFNVBtVu6rCSlSQKe+Cgkcb4tSewTp28SRtMqUu2HmIQHgUT1hTgju118Jc54Ut6bJNPe1u427t43i7WUV9FXaVeLTt7XebyZ8S0vpOVFceILZL3myFXTjHpotqs77c5S+tGb3UUIUnGxADrnuYJLGtLPXHyfGdus5wu4wSxD+PDmumOx7n19dcWTPGVbUto0dNVlrhRnT6FqKeEWqR+zcGZYlWy96vP7hrnLxfaMjBU7kzxoJGOTLLTW41FpNgzsfQzqkP+sf0fDT8xDyDPOgIKKUzRBRSgQCir1TiZ4KGiaooAi4vqI52GkoA6nhQCZ0iSBXGKQJ6DLXNb3FOcQUeFDwAXMMYwZ0wVq7US0B8oahN+PP1vpV7W4W/61z+zP9hluRPnVBWwbz4BuILTHk5rh8KzfMhwcYjg4JcML5ms0VL2WFTwINDEsdNfAgudANcxcVrAYL16dksGGOnv1Hxyt//Cg/uO3TQ8Nh5NW/+Eh/e1T6j/V5Y5NU6APUSyBFwySWKmkS6NCBCn1EWIFSGWMwoJ3+qLuIWwIdqyr3ml/f9apsfVfiM0+GtvgILazs/Fm25wfwjb8v6NHe37WIVYoeNHr1PmxI6QaHqCBxuwvfmIvmiGTyehpiJyX9+UfKXAI7Q=="),u(c,"title","Open in our Online Editor"),v.a=null,u(g,"class","language-js"),C.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js"),B.a=null,u(f,"class","language-js"),G.a=null,u(x,"class","language-js"),R.a=null,u(h,"class","language-js")},m(n,a){P(n,o,a),P(n,y,a),P(n,l,a),P(n,_,a),P(n,s,a),sn(i,s,null),r(s,c),r(s,g),v.m(F,g),r(s,m),C.m(M,m),r(s,d),T.m(X,d),r(s,f),B.m(z,f),r(s,x),G.m(D,x),r(s,h),R.m(J,h),j=!0},p:Y,i(n){j||(tn(i.$$.fragment,n),j=!0)},o(n){pn(i.$$.fragment,n),j=!1},d(n){n&&(t(o),t(y),t(l),t(_),t(s)),en(i)}}}class rn extends Z{constructor(o){super(),$(this,o,null,cn,K,{})}}export{rn as component};
