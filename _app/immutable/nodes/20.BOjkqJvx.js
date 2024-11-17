import{s as ut,n as dt}from"../chunks/scheduler.B0TnBjPs.js";import{S as mt,i as kt,e as s,s as d,c as et,H as ht,a as o,g as p,b as m,d as A,f as at,h as e,n as gt,o as i,j as a,p as S,m as st,t as ot,k as pt,l as lt}from"../chunks/index.Cnh3HYw3.js";import{V as it}from"../chunks/ViewApp.BajIxHdc.js";function vt(rt){let r,B="<code>Html</code>",I,g,O="On this page you find the documentation for the GUI Component <code>Html</code>.",P,k,R='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>Html</code> component. The <code>Html</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',E,h,F='<div class="remark-container__title">Warning!</div><p><strong>Beginners in programming are not expected to use this GUI component!</strong></p><p>The <code>Html</code> component is a very advanced component to use. To be able to use it, you must know much of:</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" rel="nofollow" target="_blank">HTML</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS" rel="nofollow" target="_blank">CSS</a></li> <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="nofollow" target="_blank">Document Object Model</a></li> </ul><p>These technologies are not taught on this website.</p><p>Most functionalities in BagaWork apps can be implemented using the other BagaWork GUI components. The <code>Html</code> component is only available to satisfy the few exceptional cases where an experienced programmer with knowledge of the three mentioned technologies wants to create something more advanced than can be implemented using the existing BagaWork GUI components.</p>',z,v,K="Introduction",D,f,Q="The <code>Html</code> component is a view that you can use to create your own GUI component consisting of whichever HTML, CSS and client-side JS code you want.",U,c,H,q="Example",y,Z="Example showing what the <code>HTML</code> component can look like when shown on the screen.",x,j,T,J="<code>elementCreator()</code> - Setting the element creator",G,w,Y="Use the configuration method <code>elementCreator()</code> to tell the <code>Html</code> component which method it should call to obtain the HTML element that should be visualized on the screen where the <code>Html</code> component is used.",W,l,C,X="Example",L,N='This is a bit bad example, because this functionality in this app can be implemented using the BagaWork components <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> and <a href="/documentation/text/" title="Open the documentation for Text.">Text</a>, but let&#39;s keep the example simple 😅',_,u,tt="Open in Online Editor",M,$,ct=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Html<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">elementCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createHtmlHeader<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createHtmlHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		
		<span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">div</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> h1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">h1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		h1<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;h1> element!</span><span class="token template-punctuation string">&#96;</span></span>
		
		<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">p</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		p<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is an HTML &lt;p> element!</span><span class="token template-punctuation string">&#96;</span></span>
		p<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span>
		
		div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>h1<span class="token punctuation">)</span>
		div<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> div
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,V;return x=new it({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Html.backgroundColor(\`yellow\`).elementCreator(p.createHtmlHeader)\r
	}\r
	\r
	createHtmlHeader(){\r
		\r
		// This is a bad example, because this functionality can\r
		// be implemented using the BagaWork components Rows and\r
		// Text, but let's keep it simple ^^\r
		const div = document.createElement(\`div\`)\r
		\r
		const h1 = document.createElement(\`h1\`)\r
		h1.innerText = \`This is an HTML <h1> element!\`\r
		\r
		const p = document.createElement(\`p\`)\r
		p.innerText = \`This is an HTML <p> element!\`\r
		p.style.backgroundColor = \`red\`\r
		\r
		div.appendChild(h1)\r
		div.appendChild(p)\r
		\r
		return div\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),_=new it({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Html.backgroundColor(\`yellow\`).elementCreator(p.createHtmlHeader)\r
	}\r
	\r
	createHtmlHeader(){\r
		\r
		\r
		const div = document.createElement(\`div\`)\r
		\r
		const h1 = document.createElement(\`h1\`)\r
		h1.innerText = \`This is an HTML <h1> element!\`\r
		\r
		const p = document.createElement(\`p\`)\r
		p.innerText = \`This is an HTML <p> element!\`\r
		p.style.backgroundColor = \`red\`\r
		\r
		div.appendChild(h1)\r
		div.appendChild(p)\r
		\r
		return div\r
		\r
	}\r
	\r
}`,x:150,y:200}]}}}),{c(){r=s("h1"),r.innerHTML=B,I=d(),g=s("p"),g.innerHTML=O,P=d(),k=s("div"),k.innerHTML=R,E=d(),h=s("div"),h.innerHTML=F,z=d(),v=s("h2"),v.textContent=K,D=d(),f=s("p"),f.innerHTML=Q,U=d(),c=s("div"),H=s("div"),H.textContent=q,y=s("p"),y.innerHTML=Z,et(x.$$.fragment),j=d(),T=s("h2"),T.innerHTML=J,G=d(),w=s("p"),w.innerHTML=Y,W=d(),l=s("div"),C=s("div"),C.textContent=X,L=s("p"),L.innerHTML=N,et(_.$$.fragment),u=s("a"),u.textContent=tt,M=s("pre"),$=new ht(!1),this.h()},l(t){r=o(t,"H1",{"data-svelte-h":!0}),p(r)!=="svelte-1oula4k"&&(r.innerHTML=B),I=m(t),g=o(t,"P",{"data-svelte-h":!0}),p(g)!=="svelte-5vzrqx"&&(g.innerHTML=O),P=m(t),k=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(k)!=="svelte-1r81z3l"&&(k.innerHTML=R),E=m(t),h=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(h)!=="svelte-wq6pcd"&&(h.innerHTML=F),z=m(t),v=o(t,"H2",{"data-svelte-h":!0}),p(v)!=="svelte-1ukekoe"&&(v.textContent=K),D=m(t),f=o(t,"P",{"data-svelte-h":!0}),p(f)!=="svelte-1ufer2d"&&(f.innerHTML=Q),U=m(t),c=o(t,"DIV",{class:!0});var n=A(c);H=o(n,"DIV",{class:!0,"data-svelte-h":!0}),p(H)!=="svelte-1llzxwj"&&(H.textContent=q),y=o(n,"P",{"data-svelte-h":!0}),p(y)!=="svelte-5djii0"&&(y.innerHTML=Z),at(x.$$.fragment,n),n.forEach(e),j=m(t),T=o(t,"H2",{"data-svelte-h":!0}),p(T)!=="svelte-6umjny"&&(T.innerHTML=J),G=m(t),w=o(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-o89c0y"&&(w.innerHTML=Y),W=m(t),l=o(t,"DIV",{class:!0});var b=A(l);C=o(b,"DIV",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-1llzxwj"&&(C.textContent=X),L=o(b,"P",{"data-svelte-h":!0}),p(L)!=="svelte-5syefx"&&(L.innerHTML=N),at(_.$$.fragment,b),u=o(b,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(u)!=="svelte-1m3m02b"&&(u.textContent=tt),M=o(b,"PRE",{class:!0});var nt=A(M);$=gt(nt,!1),nt.forEach(e),b.forEach(e),this.h()},h(){i(k,"class","remark-container tip"),i(h,"class","remark-container warning"),i(H,"class","remark-container__title"),i(c,"class","remark-container tip"),i(C,"class","remark-container__title"),i(u,"target","_blank"),i(u,"href","/editor#eNqFkm9LwzAQxr9KvFctlLIKvikqyBAnOBDcOys0NudSzJKQpLpS8t1N7Vj3zwmF9PLkud/lLh1QrSHvoFIMIYdKUGvJvL3TmuDaoWSWhP+ukIWrDFKHL44a90yXGMW/u4Uz6BojyVbod30hPfgEdIgt5K8d1AzyLIEPJRiaxyHYg279W3AfdIX5pZixgoem7tlmjz5zK5G+0+pzaVQj2VQJZaKyRSHUdxmnKHCF0k37BEHQ6ZCqd82QhoriIZ8/xo1ndqiHa6WkdYTVX+SGMFU1PWzDuB/QURnUMj5t5NkZH89GG8/SWko0i9CjYCkXvLYkfDR0YDF/Itc8uyWby16Up2H6DEuPKP0PSZ8A6dS6VuDhIHq/QXZUT+hIGt5fGPaU14JFPIv/kvRR5zaDDwf3lZ0RekhgHV7a1SSBFvLLycS/+R+/uhTu"),i(u,"title","Open in our Online Editor"),$.a=null,i(M,"class","language-js"),i(l,"class","remark-container tip")},m(t,n){a(t,r,n),a(t,I,n),a(t,g,n),a(t,P,n),a(t,k,n),a(t,E,n),a(t,h,n),a(t,z,n),a(t,v,n),a(t,D,n),a(t,f,n),a(t,U,n),a(t,c,n),S(c,H),S(c,y),st(x,c,null),a(t,j,n),a(t,T,n),a(t,G,n),a(t,w,n),a(t,W,n),a(t,l,n),S(l,C),S(l,L),st(_,l,null),S(l,u),S(l,M),$.m(ct,M),V=!0},p:dt,i(t){V||(ot(x.$$.fragment,t),ot(_.$$.fragment,t),V=!0)},o(t){pt(x.$$.fragment,t),pt(_.$$.fragment,t),V=!1},d(t){t&&(e(r),e(I),e(g),e(P),e(k),e(E),e(h),e(z),e(v),e(D),e(f),e(U),e(c),e(j),e(T),e(G),e(w),e(W),e(l)),lt(x),lt(_)}}}class Tt extends mt{constructor(r){super(),kt(this,r,null,vt,ut,{})}}export{Tt as component};
