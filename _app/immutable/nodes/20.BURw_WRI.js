import{s as In,n as _n}from"../chunks/scheduler.B0TnBjPs.js";import{S as bn,i as Mn,e as s,s as r,c as R,H as Tn,a as p,g as l,b as u,d as j,f as N,h as a,n as Hn,o,j as e,p as g,m as Y,t as Z,k as nn,l as tn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.DfUK9ae4.js";function Ln(yn){let k,en="<code>Html</code>",W,x,sn="On this page you find the documentation for the GUI Component <code>Html</code>.",O,f,pn='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>Html</code> component. The <code>Html</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',U,v,on='<div class="remark-container__title">Warning!</div><p><strong>Beginners in programming are not expected to use this GUI component!</strong></p><p>The <code>Html</code> component is a very advanced component to use. To be able to use it, you must know much of:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" rel="nofollow" target="_blank">HTML</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" rel="nofollow" target="_blank">CSS</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="nofollow" target="_blank">Document Object Model</a></li> </ul><p>These technologies are not taught on this website.</p><p>Most functionalities in BagaWork apps can be implemented using the other BagaWork GUI components. The <code>Html</code> component is only available to satisfy the few exceptional cases where an experienced programmer with knowledge of the three mentioned technologies wants to create something more advanced than can be implemented using the existing BagaWork GUI components.</p>',A,w,ln="Introduction",G,T,cn="The <code>Html</code> component is a view that you can use to create your own GUI component consisting of whichever HTML, CSS and client-side JS code you want.",$,m,H,rn="Example",L,un="Example showing what the <code>HTML</code> component can look like when shown on the screen.",y,J,C,kn="<code>initializer()</code> - Initializing the HTML element",q,E,mn="Use the configuration method <code>initializer()</code> to tell the <code>Html</code> component which method it should call to initialize the HTML element. The method will receive the HTML element (a <code>&lt;div&gt;</code> element) as the first argument.",K,c,I,dn="Example",P,hn='This is a bit bad example, because this functionality in this app can be implemented using the BagaWork components <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> and <a href="/documentation/text/" title="Open the documentation for Text.">Text</a>, but let&#39;s keep the example simple 😅',_,d,gn="Open in Online Editor",S,F,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Html
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">initializer</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>initializeHtmlElement<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">initializeHtmlElement</span><span class="token punctuation">(</span><span class="token parameter">htmlElement</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">h1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		h1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;h1> element!</span><span class="token template-punctuation string">&#96;</span></span>
		
		<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">p</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		p<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;p> element!</span><span class="token template-punctuation string">&#96;</span></span>
		p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span>
		
		htmlElement<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>h1<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,B,i,b,fn="Example",M,h,vn="Open in Online Editor",z,Q,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Html
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">initializer</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>initializeHtmlElement<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">initializeHtmlElement</span><span class="token punctuation">(</span><span class="token parameter">htmlElement</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">canvas</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> htmlElement<span class="token punctuation">.</span>clientWidth
		canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> htmlElement<span class="token punctuation">.</span>clientHeight
		
		htmlElement<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>
		
		<span class="token comment">// BagaWork intercepts calls to setInterval() and</span>
		<span class="token comment">// setTimeout() and automatically stops them when</span>
		<span class="token comment">// an error occurs or when going to next page.</span>
		<span class="token function">setInterval</span><span class="token punctuation">(</span>
			p<span class="token punctuation">.</span>paintCircle<span class="token punctuation">,</span>
			<span class="token number">1000</span><span class="token punctuation">,</span>
			canvas<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">paintCircle</span><span class="token punctuation">(</span><span class="token parameter">canvas</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> width <span class="token operator">=</span> canvas<span class="token punctuation">.</span>clientWidth
		<span class="token keyword">const</span> height <span class="token operator">=</span> canvas<span class="token punctuation">.</span>clientHeight
		
		<span class="token keyword">const</span> context <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2d</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> x <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> width<span class="token punctuation">)</span>
		<span class="token keyword">const</span> y <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> height<span class="token punctuation">)</span>
		<span class="token keyword">const</span> radius <span class="token operator">=</span> <span class="token number">10</span>
		
		context<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span>
		context<span class="token punctuation">.</span><span class="token function">beginPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		context<span class="token punctuation">.</span><span class="token function">arc</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> radius<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
		context<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,X;return y=new an({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Html.backgroundColor(\`yellow\`).initializer(p.initializeHtmlElement)\r
	}\r
	\r
	initializeHtmlElement(htmlElement){\r
		\r
		const h1 = document.createElement(\`h1\`)\r
		h1.innerText = \`This is an HTML <h1> element!\`\r
		\r
		const p = document.createElement(\`p\`)\r
		p.innerText = \`This is an HTML <p> element!\`\r
		p.style.backgroundColor = \`red\`\r
		\r
		htmlElement.append(h1, p)\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),_=new an({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Html\r
			.backgroundColor(\`yellow\`)\r
			.initializer(p.initializeHtmlElement)\r
	}\r
	\r
	initializeHtmlElement(htmlElement){\r
		\r
		const h1 = document.createElement(\`h1\`)\r
		h1.innerText = \`This is an HTML <h1> element!\`\r
		\r
		const p = document.createElement(\`p\`)\r
		p.innerText = \`This is an HTML <p> element!\`\r
		p.style.backgroundColor = \`red\`\r
		\r
		htmlElement.append(h1, p)\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),M=new an({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Html\r
			.backgroundColor(\`yellow\`)\r
			.initializer(p.initializeHtmlElement)\r
	}\r
	\r
	initializeHtmlElement(htmlElement){\r
		\r
		const canvas = document.createElement(\`canvas\`)\r
		\r
		canvas.width = htmlElement.clientWidth\r
		canvas.height = htmlElement.clientHeight\r
		\r
		htmlElement.append(canvas)\r
		\r
		// BagaWork intercepts calls to setInterval() and\r
		// setTimeout() and automatically stops them when\r
		// an error occurs or when going to next page.\r
		setInterval(\r
			p.paintCircle,\r
			1000,\r
			canvas,\r
		)\r
		\r
	}\r
	\r
	paintCircle(canvas){\r
		\r
		const width = canvas.clientWidth\r
		const height = canvas.clientHeight\r
		\r
		const context = canvas.getContext(\`2d\`)\r
		\r
		const x = m.randomInt(0, width)\r
		const y = m.randomInt(0, height)\r
		const radius = 10\r
		\r
		context.fillStyle = \`red\`\r
		context.beginPath()\r
		context.arc(x, y, radius, 0, Math.PI * 2)\r
		context.fill()\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),{c(){k=s("h1"),k.innerHTML=en,W=r(),x=s("p"),x.innerHTML=sn,O=r(),f=s("div"),f.innerHTML=pn,U=r(),v=s("div"),v.innerHTML=on,A=r(),w=s("h2"),w.textContent=ln,G=r(),T=s("p"),T.innerHTML=cn,$=r(),m=s("div"),H=s("div"),H.textContent=rn,L=s("p"),L.innerHTML=un,R(y.$$.fragment),J=r(),C=s("h2"),C.innerHTML=kn,q=r(),E=s("p"),E.innerHTML=mn,K=r(),c=s("div"),I=s("div"),I.textContent=dn,P=s("p"),P.innerHTML=hn,R(_.$$.fragment),d=s("a"),d.textContent=gn,S=s("pre"),F=new Tn(!1),B=r(),i=s("div"),b=s("div"),b.textContent=fn,R(M.$$.fragment),h=s("a"),h.textContent=vn,z=s("pre"),Q=new Tn(!1),this.h()},l(n){k=p(n,"H1",{"data-svelte-h":!0}),l(k)!=="svelte-1oula4k"&&(k.innerHTML=en),W=u(n),x=p(n,"P",{"data-svelte-h":!0}),l(x)!=="svelte-5vzrqx"&&(x.innerHTML=sn),O=u(n),f=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(f)!=="svelte-1r81z3l"&&(f.innerHTML=pn),U=u(n),v=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(v)!=="svelte-wq6pcd"&&(v.innerHTML=on),A=u(n),w=p(n,"H2",{"data-svelte-h":!0}),l(w)!=="svelte-1ukekoe"&&(w.textContent=ln),G=u(n),T=p(n,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1ufer2d"&&(T.innerHTML=cn),$=u(n),m=p(n,"DIV",{class:!0});var t=j(m);H=p(t,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1llzxwj"&&(H.textContent=rn),L=p(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-5djii0"&&(L.innerHTML=un),N(y.$$.fragment,t),t.forEach(a),J=u(n),C=p(n,"H2",{"data-svelte-h":!0}),l(C)!=="svelte-1lovmfo"&&(C.innerHTML=kn),q=u(n),E=p(n,"P",{"data-svelte-h":!0}),l(E)!=="svelte-qbivk6"&&(E.innerHTML=mn),K=u(n),c=p(n,"DIV",{class:!0});var V=j(c);I=p(V,"DIV",{class:!0,"data-svelte-h":!0}),l(I)!=="svelte-1llzxwj"&&(I.textContent=dn),P=p(V,"P",{"data-svelte-h":!0}),l(P)!=="svelte-5syefx"&&(P.innerHTML=hn),N(_.$$.fragment,V),d=p(V,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(d)!=="svelte-1hgg8th"&&(d.textContent=gn),S=p(V,"PRE",{class:!0});var xn=j(S);F=Hn(xn,!1),xn.forEach(a),V.forEach(a),B=u(n),i=p(n,"DIV",{class:!0});var D=j(i);b=p(D,"DIV",{class:!0,"data-svelte-h":!0}),l(b)!=="svelte-1llzxwj"&&(b.textContent=fn),N(M.$$.fragment,D),h=p(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1y97qt3"&&(h.textContent=vn),z=p(D,"PRE",{class:!0});var wn=j(z);Q=Hn(wn,!1),wn.forEach(a),D.forEach(a),this.h()},h(){o(f,"class","remark-container tip"),o(v,"class","remark-container warning"),o(H,"class","remark-container__title"),o(m,"class","remark-container tip"),o(I,"class","remark-container__title"),o(d,"target","_blank"),o(d,"href","/editor#eNqFklFLwzAUhf9KvE8dlLIKvhQVREQFB4J7s0Jjc12CWRKSFFdL/rvp5tpOh0KhvTfn9Du5SQfUGCg6qDVDKKCW1DmyaK+MIbjxqJgj8bsrVelri9Tjk6fWP9IVJrNtt/QWfWMVGRb6bihVgJCCibWD4rkDwaDIU3jTkqG93xUH0ME/gPuiK+2WYscEt43o2faAfufXct8qffZK6/eV1Y1i11pqm1QtSqk/qtlEI5TwgkrxiTYxk6r/1Y3ENSr/LQ/TEEeFCZ+Yhmz7d62V84Tn5IIwXTe9KNvtZW+veD5m43lMo9Au4yCipVpy4Uh8aNzmcvFAznl+SXDnPKmOw8wfLDOizD8kcwRkMudbiT9n3Pstsl95JpPJ4mWLJ5vwPCVmdiiczDhACpt4Qc7mKbRQnM7n4SV8Abog+eM="),o(d,"title","Open in our Online Editor"),F.a=null,o(S,"class","language-js"),o(c,"class","remark-container tip"),o(b,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNp1VMFunDAQ/RXLJ6gQYVfqZaUe2lXV7CHSSqmUQ6mEYyZgxdjIDNmlK/69NizES8gJz8x78549Iy6U1TXdXSjXOdAd5ZI1DXnovtc1gTOCyhtiz5dUpcgNMIRHZAaPrIAgHLIpGsDWKDIXXLZPVU/7iNY2bujuz4WKnO42EX3RMgdzGIMb0Zk/C7vgkppBxbw7+NUKp21u1O+xklMqxfiZ8dfC6Fbley21CbIOpNSnLPQwQgkUTIp/YILai1yrnxIqUHiF976JVWBQeqTZ2/TlWjVIOFNvrCHfSK5564DxeJ+pRTYCPI8TfcjHJ5FjaemeVMylsJ8nV1mgSxBFiavw+6G0VPFxdinsBIKx1Qc/d3fkByvYkzavRCgEw6HGxt5PyoagJg3gwaXfmAxCwlTuEW3tt6hAtziWCGtRVwyFY3ekQV3bHiVU5FSC8ohMETBGG6I5b01D7MkhSKGFKpyqsmtD3L7FE8v38T73Oq6Zdb0XhkuI3vObJEm8cLz7nFg8ws1GeP2mJ/tkBaYRXme0Nr0BNw/vBrg+t+tyaXvTs0cpAPdjLsi2+cpSDbSzJVSxsYPQlX2rIIlGj+EtrPsIGy0ucIblonUrvklW9JyZ+EVI+YidBIvKDOTZEvAMhVBHhmUQLkvM8OAckS66CkXEGnmw0Ph4IF/INlwTCz4fXU8jerZ/oq9JRDu62yZJ/7f/D5Ys46Q="),o(h,"title","Open in our Online Editor"),Q.a=null,o(z,"class","language-js"),o(i,"class","remark-container tip")},m(n,t){e(n,k,t),e(n,W,t),e(n,x,t),e(n,O,t),e(n,f,t),e(n,U,t),e(n,v,t),e(n,A,t),e(n,w,t),e(n,G,t),e(n,T,t),e(n,$,t),e(n,m,t),g(m,H),g(m,L),Y(y,m,null),e(n,J,t),e(n,C,t),e(n,q,t),e(n,E,t),e(n,K,t),e(n,c,t),g(c,I),g(c,P),Y(_,c,null),g(c,d),g(c,S),F.m(Cn,S),e(n,B,t),e(n,i,t),g(i,b),Y(M,i,null),g(i,h),g(i,z),Q.m(En,z),X=!0},p:_n,i(n){X||(Z(y.$$.fragment,n),Z(_.$$.fragment,n),Z(M.$$.fragment,n),X=!0)},o(n){nn(y.$$.fragment,n),nn(_.$$.fragment,n),nn(M.$$.fragment,n),X=!1},d(n){n&&(a(k),a(W),a(x),a(O),a(f),a(U),a(v),a(A),a(w),a(G),a(T),a($),a(m),a(J),a(C),a(q),a(E),a(K),a(c),a(B),a(i)),tn(y),tn(_),tn(M)}}}class Vn extends bn{constructor(k){super(),Mn(this,k,null,Ln,In,{})}}export{Vn as component};
