import{s as Q,n as L}from"../chunks/scheduler.B0TnBjPs.js";import{S as X,i as $,e as p,s as J,c as nn,H as w,a as e,g as b,b as q,d as k,f as tn,n as S,h as s,o as u,j as P,m as an,p as r,t as sn,k as pn,l as en}from"../chunks/index.CHfggXAQ.js";import{V as on}from"../chunks/ViewApp.6tllL5xD.js";function cn(H){let o,A="Book",v,l,N="This example shows how to create an app that functions as a book, where the user can go to different pages in the book by clicking on buttons.",y,a,i,c,I="Open in Online Editor",g,T,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CoverPage
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,d,_,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CoverPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The story about Bagawork</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<span class="token punctuation">&#125;</span></code>`,m,B,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,f,C,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">So he created his own little framework that made it easier. He called that framework for Bagawork.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<span class="token punctuation">&#125;</span></code>`,x,R,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page3</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,h,G,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page4</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,E;return i=new on({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return CoverPage
	}
}`},folders:[{id:1,name:"Start",offsetX:72,offsetY:89}],pages:[{id:1,folderId:1,code:`class CoverPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The story about Bagawork\`),
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
			Text.text(\`So he created his own little framework that made it easier. He called that framework for Bagawork.\`),
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
}`,x:997,y:186}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){o=p("h1"),o.textContent=A,v=J(),l=p("p"),l.textContent=N,y=J(),a=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=I,g=p("pre"),T=new w(!1),d=p("pre"),_=new w(!1),m=p("pre"),B=new w(!1),f=p("pre"),C=new w(!1),x=p("pre"),R=new w(!1),h=p("pre"),G=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),b(o)!=="svelte-119rxel"&&(o.textContent=A),v=q(n),l=e(n,"P",{"data-svelte-h":!0}),b(l)!=="svelte-1wrp8ki"&&(l.textContent=N),y=q(n),a=e(n,"DIV",{});var t=k(a);tn(i.$$.fragment,t),c=e(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),b(c)!=="svelte-1caj49l"&&(c.textContent=I),g=e(t,"PRE",{class:!0});var j=k(g);T=S(j,!1),j.forEach(s),d=e(t,"PRE",{class:!0});var O=k(d);_=S(O,!1),O.forEach(s),m=e(t,"PRE",{class:!0});var V=k(m);B=S(V,!1),V.forEach(s),f=e(t,"PRE",{class:!0});var Z=k(f);C=S(Z,!1),Z.forEach(s),x=e(t,"PRE",{class:!0});var Y=k(x);R=S(Y,!1),Y.forEach(s),h=e(t,"PRE",{class:!0});var F=k(h);G=S(F,!1),F.forEach(s),t.forEach(s),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNrFlltv2jAUx7/KmV8GUoZKgDbwMqXV1E3apWorbdWohEtOLmpiR7YzyhCve572EfdJZicNI5RLxpj2AIrt43Oc/+8cn8wITVMymJEx95AMyDimUsK7qZumgA8KmSdBP8+GbKjGAqnCK0WFuqABNpr57FAJVJlgcMa/oDALZnY+ZHMyt4jPYw+FJIPPMxJ5ZNC2CKOJiZT7IRbhvi9RfSKDE7sc3JCB05/fWiTV3ip7C3dvikHlyIvoi2ObwdK5z7No9cSXfCJb4zCKPYGsUSwN1VVKx2iVo2vtrqX0X2N0HSJIxcUU6B3PFJzSgE64uB8111nfTeEC0xTh7YvzJYuq9+rojMdZwtYcadVwqE4zpTh7DJVLCZdIvYgFo2bLyNYwr99uWptcrD9Rc8HOIg8aiWORqdbaOZlbBQN7G4M85F/rv6ThBzZGyFLOgIKKErRAhSgQJlTqmVTwQNAkQQGTkOslngWhgjycFgJkQuMYMol+FoNOc5nvU5xDSIUHPhdwh0HEmE7Q1kZEW6BUIPz89r2UfpGLm+WvvGZ7tM1wJcqPZcB28wnQFYS2088ZdnvtkmFnF8POIRm6zNNoqHouDTzwNTE0VQNTngHVMDNpYDE+eXZIBivqbNW/s7f+3Z36O0dFDXW7/VL/7i797UPqf6XTHYuiQA/CSAKfMIgjpeJlGgYRJNRDiBQglRGKFrzWG3UNYUFwydrUTnn9tQ6NrV0Tm703ts5ObL2es1o2x7uwdf9t69Gen1RIS0ZfsbGU5/u2ENM8QAON2B9cYrV6SL9/8thEjsuWfo1JGmtdKq29Iqcr79/4rpfFan1LNz/OTlHn4e/vkMe4xcOhlHf1DWVuqpy8KQMGbeflPim/Vf/3vNSdZXFcO69vUNbbt5rmpYSur1CsU9B8vS1afoXNK6a3uAH+bzIfi6ai4QidubiZSUWx9tF6wapGvRpGdh1P9gZP6wqmDpPb+S9gGDzY"),u(c,"title","Open in our Online Editor"),T.a=null,u(g,"class","language-js"),_.a=null,u(d,"class","language-js"),B.a=null,u(m,"class","language-js"),C.a=null,u(f,"class","language-js"),R.a=null,u(x,"class","language-js"),G.a=null,u(h,"class","language-js")},m(n,t){P(n,o,t),P(n,v,t),P(n,l,t),P(n,y,t),P(n,a,t),an(i,a,null),r(a,c),r(a,g),T.m(K,g),r(a,d),_.m(M,d),r(a,m),B.m(U,m),r(a,f),C.m(z,f),r(a,x),R.m(D,x),r(a,h),G.m(W,h),E=!0},p:L,i(n){E||(sn(i.$$.fragment,n),E=!0)},o(n){pn(i.$$.fragment,n),E=!1},d(n){n&&(s(o),s(v),s(l),s(y),s(a)),en(i)}}}class rn extends X{constructor(o){super(),$(this,o,null,cn,Q,{})}}export{rn as component};
