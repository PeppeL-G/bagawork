import{s as bn,n as Mn}from"../chunks/scheduler.B0TnBjPs.js";import{S as _n,i as Ln,e as s,s as r,c as Q,H as yn,a as p,g as l,b as u,d as W,f as B,h as a,n as Hn,o,j as e,p as g,m as Z,t as X,k as nn,l as tn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.qg7AIhJt.js";function Sn(Tn){let k,en="<code>Html</code>",O,x,sn="On this page you find the documentation for the GUI Component <code>Html</code>.",A,f,pn='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>Html</code> component. The <code>Html</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',D,v,on='<div class="remark-container__title">Warning!</div><p><strong>Beginners in programming are not expected to use this GUI component!</strong></p><p>The <code>Html</code> component is a very advanced component to use. To be able to use it, you must know some technologies that are not taught on this website, such as:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" rel="nofollow" target="_blank">HTML</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" rel="nofollow" target="_blank">CSS</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="nofollow" target="_blank">Document Object Model</a></li> </ul><p>Most functionalities in BagaWork apps can be implemented using the other BagaWork GUI components. The <code>Html</code> component is only available to satisfy the few exceptional cases where an experienced programmer with knowledge of the three mentioned technologies wants to create something more advanced than can&#39;t be implemented using the existing BagaWork GUI components.</p>',U,w,ln="Introduction",R,y,cn="The <code>Html</code> component is a view that you can use to create your own GUI component consisting of whichever HTML, CSS and client-side JS code you want.",G,m,H,rn="Example",S,un="Example showing what the <code>HTML</code> component can look like when shown on the screen.",T,J,E,kn="<code>initializer()</code> - Initializing the HTML element",F,C,mn="Use the configuration method <code>initializer()</code> to tell the <code>Html</code> component which method it should call to initialize the HTML element. The method will receive the HTML element (a <code>&lt;div&gt;</code> element) as the first argument, and you can create and insert whichever DOM nodes you want into it.",Y,c,b,dn="Example",I,hn='This is a bit bad example, because this functionality in this app can be implemented using the BagaWork components <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> and <a href="/documentation/text/" title="Open the documentation for Text.">Text</a>, but let&#39;s keep the example simple 😅',M,d,gn="Open in Online Editor",z,$,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Html
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">initializer</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>initializeHtmlElement<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">initializeHtmlElement</span><span class="token punctuation">(</span><span class="token parameter">divElement</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">h1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		h1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;h1> element!</span><span class="token template-punctuation string">&#96;</span></span>
		
		<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">p</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		p<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;p> element!</span><span class="token template-punctuation string">&#96;</span></span>
		p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span>
		
		divElement<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>h1<span class="token punctuation">,</span> p<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,q,i,_,fn="Example",L,h,vn="Open in Online Editor",P,K,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Html
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">initializer</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>initializeHtmlElement<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">initializeHtmlElement</span><span class="token punctuation">(</span><span class="token parameter">divElement</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">canvas</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> divElement<span class="token punctuation">.</span>clientWidth
		canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> divElement<span class="token punctuation">.</span>clientHeight
		
		divElement<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>canvas<span class="token punctuation">)</span>
		
		<span class="token comment">// BagaWork intercepts calls to setInterval() and</span>
		<span class="token comment">// setTimeout() and automatically stops them when</span>
		<span class="token comment">// an error occurs or when going to next page,</span>
		<span class="token comment">// so you never need to call clearInterval() or</span>
		<span class="token comment">// clearTimeout() if you want them to stop when</span>
		<span class="token comment">// the app crashes, is closed, or when the user</span>
		<span class="token comment">// go to the next page in the app.</span>
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
	
<span class="token punctuation">&#125;</span></code>`,N;return T=new an({props:{project:{app:{code:`class MyApp extends App{
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
	initializeHtmlElement(divElement){\r
		\r
		const h1 = document.createElement(\`h1\`)\r
		h1.innerText = \`This is an HTML <h1> element!\`\r
		\r
		const p = document.createElement(\`p\`)\r
		p.innerText = \`This is an HTML <p> element!\`\r
		p.style.backgroundColor = \`red\`\r
		\r
		divElement.append(h1, p)\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),L=new an({props:{project:{app:{code:`class MyApp extends App{
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
	initializeHtmlElement(divElement){\r
		\r
		const canvas = document.createElement(\`canvas\`)\r
		\r
		canvas.width = divElement.clientWidth\r
		canvas.height = divElement.clientHeight\r
		\r
		divElement.append(canvas)\r
		\r
		// BagaWork intercepts calls to setInterval() and\r
		// setTimeout() and automatically stops them when\r
		// an error occurs or when going to next page,\r
		// so you never need to call clearInterval() or\r
		// clearTimeout() if you want them to stop when\r
		// the app crashes, is closed, or when the user\r
		// go to the next page in the app.\r
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
}`,x:150,y:200}]}}}),{c(){k=s("h1"),k.innerHTML=en,O=r(),x=s("p"),x.innerHTML=sn,A=r(),f=s("div"),f.innerHTML=pn,D=r(),v=s("div"),v.innerHTML=on,U=r(),w=s("h2"),w.textContent=ln,R=r(),y=s("p"),y.innerHTML=cn,G=r(),m=s("div"),H=s("div"),H.textContent=rn,S=s("p"),S.innerHTML=un,Q(T.$$.fragment),J=r(),E=s("h2"),E.innerHTML=kn,F=r(),C=s("p"),C.innerHTML=mn,Y=r(),c=s("div"),b=s("div"),b.textContent=dn,I=s("p"),I.innerHTML=hn,Q(M.$$.fragment),d=s("a"),d.textContent=gn,z=s("pre"),$=new yn(!1),q=r(),i=s("div"),_=s("div"),_.textContent=fn,Q(L.$$.fragment),h=s("a"),h.textContent=vn,P=s("pre"),K=new yn(!1),this.h()},l(n){k=p(n,"H1",{"data-svelte-h":!0}),l(k)!=="svelte-1oula4k"&&(k.innerHTML=en),O=u(n),x=p(n,"P",{"data-svelte-h":!0}),l(x)!=="svelte-5vzrqx"&&(x.innerHTML=sn),A=u(n),f=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(f)!=="svelte-1r81z3l"&&(f.innerHTML=pn),D=u(n),v=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(v)!=="svelte-12bm6as"&&(v.innerHTML=on),U=u(n),w=p(n,"H2",{"data-svelte-h":!0}),l(w)!=="svelte-1ukekoe"&&(w.textContent=ln),R=u(n),y=p(n,"P",{"data-svelte-h":!0}),l(y)!=="svelte-1ufer2d"&&(y.innerHTML=cn),G=u(n),m=p(n,"DIV",{class:!0});var t=W(m);H=p(t,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1llzxwj"&&(H.textContent=rn),S=p(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-5djii0"&&(S.innerHTML=un),B(T.$$.fragment,t),t.forEach(a),J=u(n),E=p(n,"H2",{"data-svelte-h":!0}),l(E)!=="svelte-1lovmfo"&&(E.innerHTML=kn),F=u(n),C=p(n,"P",{"data-svelte-h":!0}),l(C)!=="svelte-nfj7ac"&&(C.innerHTML=mn),Y=u(n),c=p(n,"DIV",{class:!0});var j=W(c);b=p(j,"DIV",{class:!0,"data-svelte-h":!0}),l(b)!=="svelte-1llzxwj"&&(b.textContent=dn),I=p(j,"P",{"data-svelte-h":!0}),l(I)!=="svelte-5syefx"&&(I.innerHTML=hn),B(M.$$.fragment,j),d=p(j,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(d)!=="svelte-wr8t0b"&&(d.textContent=gn),z=p(j,"PRE",{class:!0});var xn=W(z);$=Hn(xn,!1),xn.forEach(a),j.forEach(a),q=u(n),i=p(n,"DIV",{class:!0});var V=W(i);_=p(V,"DIV",{class:!0,"data-svelte-h":!0}),l(_)!=="svelte-1llzxwj"&&(_.textContent=fn),B(L.$$.fragment,V),h=p(V,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-dl0nib"&&(h.textContent=vn),P=p(V,"PRE",{class:!0});var wn=W(P);K=Hn(wn,!1),wn.forEach(a),V.forEach(a),this.h()},h(){o(f,"class","remark-container tip"),o(v,"class","remark-container warning"),o(H,"class","remark-container__title"),o(m,"class","remark-container tip"),o(b,"class","remark-container__title"),o(d,"target","_blank"),o(d,"href","/editor#eNqFkl9LwzAUxb9KvE8dlLIKvhQVREQFB4J7s0Kz5roGsyQkqa6WfHfTzf6ZDoVCe2/O6e/kJi1QrSFroVQMIYNSUGvJornSmuDWoWSWhO82l7krDVKHT44a90jXGM123dwZdLWRZFjouj6XHnwMOtQWsucWOIMsjeFVCYbmfl8cQAf/AO6KNjc7ihkT3Na8Y5sD+p3biL6Vu2RFy7e1UbVk10ooExUNCqE+itlEwyV3nAr+iSbSk6r71Y3ADUr3LffTEEeFEePvvWeI1r9LJa0jVUouCFNl3YmS/VZ6d1GlY7QqDWEkmmWYQ7AUy4pbEh4adrlcPJDzKr0kuHeeFMdh+g+WHlH6H5I+AtKJdY3AnyPu/AbZrzzjYJJw1cK5RlUaEz071E0m7CGGbbgeZ/MYGshO53P/4r8AoQ34/w=="),o(d,"title","Open in our Online Editor"),$.a=null,o(z,"class","language-js"),o(c,"class","remark-container tip"),o(_,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNp1VMFunDAQ/ZWRT2yFCInUy0o9tKuqySFSpFTKoVtpHXsCVoyNbLO7dMW/14aF9RJyATzzZt7z+JkToXVN1ifCNEeyJkxSa+Gx/V7XgEeHilvw36et2jpmkDp8dtS4J1pgsuqjW2fQNUbBlAjRbqs60qWk9mtL1n9ORHCyvk3Jm5YczcOwuCKd6ifisDhtTc9iLgp+NSJwmyv2e1fJMbR12Stl74XRjeIbLbVJdi1KqQ+7VYQRSjhBpfiHJqmjVWj1U2KFyp3hXSxiEZhwsR9rJmnjm2llHTCq9tTCN+CaNQGYDdsZO+wGQCRxLO/j2UFwV4byiSljUvjXS0jMwCWKonRL6Ps+M+eIYN4QfvrJ0OiDmJsb+EEL+qLNOwjl0DCsnfWbk9KC02DRPYTwnspkBVTxqNDnfosKdeOGFNDG6Yo6EapbsE7XvkeJFRxKVFEhVYDGaAOascZY8F8BAYUWqgisylsGgtfSmE5Dqxuf26PxT+QBGaiASaQmkqlNVNYnLzrFW9/lQJUbtIVNeqVzjT4HfnTADLUl2hSEn4rUFnk66Q2YxmLMVujQMCSmPfi5jt2yERmP9WLhOqupP4SNMF50eonf5nkeLYejnAKzM70yd9RvdMAndh7teDbckhV73OTEK+CyC88XRfudHqOSAt1miCW7O75wQfqyoy+oMuN9pSs/qyRPB42ra1j7ETZInOEM5aIJ1/U2X+ALYrI3IeWzayV61M4g380Br1gI9URdmazmKWpYckyhTc9EKXghjx6aPT3AF7hbLZElnx9dR1Jy9D/Vr3lKWrK+y/Pub/cfmCcrEA=="),o(h,"title","Open in our Online Editor"),K.a=null,o(P,"class","language-js"),o(i,"class","remark-container tip")},m(n,t){e(n,k,t),e(n,O,t),e(n,x,t),e(n,A,t),e(n,f,t),e(n,D,t),e(n,v,t),e(n,U,t),e(n,w,t),e(n,R,t),e(n,y,t),e(n,G,t),e(n,m,t),g(m,H),g(m,S),Z(T,m,null),e(n,J,t),e(n,E,t),e(n,F,t),e(n,C,t),e(n,Y,t),e(n,c,t),g(c,b),g(c,I),Z(M,c,null),g(c,d),g(c,z),$.m(En,z),e(n,q,t),e(n,i,t),g(i,_),Z(L,i,null),g(i,h),g(i,P),K.m(Cn,P),N=!0},p:Mn,i(n){N||(X(T.$$.fragment,n),X(M.$$.fragment,n),X(L.$$.fragment,n),N=!0)},o(n){nn(T.$$.fragment,n),nn(M.$$.fragment,n),nn(L.$$.fragment,n),N=!1},d(n){n&&(a(k),a(O),a(x),a(A),a(f),a(D),a(v),a(U),a(w),a(R),a(y),a(G),a(m),a(J),a(E),a(F),a(C),a(Y),a(c),a(q),a(i)),tn(T),tn(M),tn(L)}}}class jn extends _n{constructor(k){super(),Ln(this,k,null,Sn,bn,{})}}export{jn as component};
