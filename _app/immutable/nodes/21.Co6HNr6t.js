import{s as Yt,n as Bt}from"../chunks/scheduler.B0TnBjPs.js";import{S as Jt,i as Wt,e as s,s as i,c as dt,H as xt,a as p,g as l,b as c,d as z,f as mt,h as e,n as wt,o,j as a,p as r,m as kt,t as gt,k as ht,l as ft}from"../chunks/index.BXVnRmkj.js";import{V as vt}from"../chunks/ViewApp.qg7AIhJt.js";function Kt(Gt){let k,_t="<code>Image</code>",U,_,Ct="On this page you find the documentation for the GUI Component <code>Image</code>.",X,x,It='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>Image</code> component. The <code>Image</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',Y,w,yt='<div class="remark-container__title">TEMPORARILY DISABLED!!!</div><p>Until network permissions have been implemented, this component won&#39;t be supported.</p>',B,C,Tt="Introduction",J,I,Pt="The <code>Image</code> component is a view that shows an image to the user.",W,g,y,Lt="Example",A,Mt="Example showing what the <code>Image</code> component looks like when shown on the screen.",T,K,P,St="<code>url()</code> - Specifying the image",tt,L,bt="Use the configuration method <code>url()</code> to tell the <code>Image</code> component which image it should show. Pass it the URL to the image as a string.",et,u,M,Ht="Example",V,Et="Example showing what the <code>Image</code> component looks like when shown on the screen.",S,h,jt="Open in Online Editor",Q,nt,Ft=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Image
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,b,Dt="The image will always be drawn at the center of the <code>Image</code> component. Try resizing the app screen in the example above, and notice that the image always stays in the center.",st,H,Nt="Resizing the image",pt,E,Ot='The <code>Image</code> will occupy the space given to it by the layout it&#39;s in (or the entire screen if the <code>Image</code> is the root component). If the layout hasn&#39;t given it a specific size (for example when using the <code>Image</code> component as a child in a <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> or <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layout without calling <code>grow()</code>), it will have the same size as the image itself.',ot,d,j,$t="Example",D,f,zt="Open in Online Editor",R,lt,Ut=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Image
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it,N,At='If you want to give the image a specific size, put it in a <a href="/documentation/box/" title="Open the documentation for Box.">Box</a> component.',ct,m,O,Vt="Example",$,v,Qt="Open in Online Editor",q,rt,Xt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Image
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ut;return T=new vt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Image.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`)
	}
}`,x:150,y:200}]}}}),S=new vt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Image
			.backgroundColor(\`red\`)
			.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`)
	}
}`,x:150,y:200}]}}}),D=new vt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Image
				.backgroundColor(\`red\`)
				.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`),
			Space,
		)
	}
}`,x:150,y:200}]}}}),$=new vt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(\`lime\`).width(20).height(20).child(
			Image
				.backgroundColor(\`red\`)
				.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`),
		)
	}
}`,x:150,y:200}]}}}),{c(){k=s("h1"),k.innerHTML=_t,U=i(),_=s("p"),_.innerHTML=Ct,X=i(),x=s("div"),x.innerHTML=It,Y=i(),w=s("div"),w.innerHTML=yt,B=i(),C=s("h2"),C.textContent=Tt,J=i(),I=s("p"),I.innerHTML=Pt,W=i(),g=s("div"),y=s("div"),y.textContent=Lt,A=s("p"),A.innerHTML=Mt,dt(T.$$.fragment),K=i(),P=s("h2"),P.innerHTML=St,tt=i(),L=s("p"),L.innerHTML=bt,et=i(),u=s("div"),M=s("div"),M.textContent=Ht,V=s("p"),V.innerHTML=Et,dt(S.$$.fragment),h=s("a"),h.textContent=jt,Q=s("pre"),nt=new xt(!1),at=i(),b=s("p"),b.innerHTML=Dt,st=i(),H=s("h2"),H.textContent=Nt,pt=i(),E=s("p"),E.innerHTML=Ot,ot=i(),d=s("div"),j=s("div"),j.textContent=$t,dt(D.$$.fragment),f=s("a"),f.textContent=zt,R=s("pre"),lt=new xt(!1),it=i(),N=s("p"),N.innerHTML=At,ct=i(),m=s("div"),O=s("div"),O.textContent=Vt,dt($.$$.fragment),v=s("a"),v.textContent=Qt,q=s("pre"),rt=new xt(!1),this.h()},l(t){k=p(t,"H1",{"data-svelte-h":!0}),l(k)!=="svelte-125jwag"&&(k.innerHTML=_t),U=c(t),_=p(t,"P",{"data-svelte-h":!0}),l(_)!=="svelte-20yfrj"&&(_.innerHTML=Ct),X=c(t),x=p(t,"DIV",{class:!0,"data-svelte-h":!0}),l(x)!=="svelte-1agtyex"&&(x.innerHTML=It),Y=c(t),w=p(t,"DIV",{class:!0,"data-svelte-h":!0}),l(w)!=="svelte-1yvd93k"&&(w.innerHTML=yt),B=c(t),C=p(t,"H2",{"data-svelte-h":!0}),l(C)!=="svelte-1ukekoe"&&(C.textContent=Tt),J=c(t),I=p(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-142f6ji"&&(I.innerHTML=Pt),W=c(t),g=p(t,"DIV",{class:!0});var n=z(g);y=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-1llzxwj"&&(y.textContent=Lt),A=p(n,"P",{"data-svelte-h":!0}),l(A)!=="svelte-9mjq8l"&&(A.innerHTML=Mt),mt(T.$$.fragment,n),n.forEach(e),K=c(t),P=p(t,"H2",{"data-svelte-h":!0}),l(P)!=="svelte-ud7k21"&&(P.innerHTML=St),tt=c(t),L=p(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-1s2ni1g"&&(L.innerHTML=bt),et=c(t),u=p(t,"DIV",{class:!0});var Z=z(u);M=p(Z,"DIV",{class:!0,"data-svelte-h":!0}),l(M)!=="svelte-1llzxwj"&&(M.textContent=Ht),V=p(Z,"P",{"data-svelte-h":!0}),l(V)!=="svelte-9mjq8l"&&(V.innerHTML=Et),mt(S.$$.fragment,Z),h=p(Z,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-c8365k"&&(h.textContent=jt),Q=p(Z,"PRE",{class:!0});var Rt=z(Q);nt=wt(Rt,!1),Rt.forEach(e),Z.forEach(e),at=c(t),b=p(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1piye8r"&&(b.innerHTML=Dt),st=c(t),H=p(t,"H2",{"data-svelte-h":!0}),l(H)!=="svelte-1qd3bxb"&&(H.textContent=Nt),pt=c(t),E=p(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-c4zkj4"&&(E.innerHTML=Ot),ot=c(t),d=p(t,"DIV",{class:!0});var G=z(d);j=p(G,"DIV",{class:!0,"data-svelte-h":!0}),l(j)!=="svelte-1llzxwj"&&(j.textContent=$t),mt(D.$$.fragment,G),f=p(G,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-bgtl9p"&&(f.textContent=zt),R=p(G,"PRE",{class:!0});var qt=z(R);lt=wt(qt,!1),qt.forEach(e),G.forEach(e),it=c(t),N=p(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-19kn98t"&&(N.innerHTML=At),ct=c(t),m=p(t,"DIV",{class:!0});var F=z(m);O=p(F,"DIV",{class:!0,"data-svelte-h":!0}),l(O)!=="svelte-1llzxwj"&&(O.textContent=Vt),mt($.$$.fragment,F),v=p(F,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-196ixhn"&&(v.textContent=Qt),q=p(F,"PRE",{class:!0});var Zt=z(q);rt=wt(Zt,!1),Zt.forEach(e),F.forEach(e),this.h()},h(){o(x,"class","remark-container tip"),o(w,"class","remark-container warning"),o(y,"class","remark-container__title"),o(g,"class","remark-container tip"),o(M,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNpdj01LxDAQhv9KmVMXahMFQXITD7IHRdijFZpNZrNh2yTkQ7uU/HfbXQkqc5nnfRkeZgbuHLAZhJUIDMTAQ6hezo/OVThFNDJUyz53povCI4+4i9zHN66w3lzSLnqMyZuqFGuaO5MhN+AWDsDeZ9AS2G0DBztI9Nsr/JGW+yJe4Zf5Oen/zu3441un3XNxUt4mI5/sYH3de5T9ptTJD3V/jNEFRkhyg+Wy/dInPaLUvLVekZXcSkTYcbQmkHhM454gQUp2r1pgGz4VeaDUTTeFW2fUVXP5uoFpee6eNnAGdkdp/sjftqZ/1A=="),o(h,"title","Open in our Online Editor"),nt.a=null,o(Q,"class","language-js"),o(u,"class","remark-container tip"),o(j,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNptkEtLxDAUhf9KuasWalMFQbITFzILRezSCs0k1zZMmoQ8nA6l/93WahlluJv73QfncEZg1gIdgRuBQIEr5n3ydLq3NsEhoBY+mfux1nXgDlnAKjAXXliLafY9rYPDEJ1OtsUynWo9wZSDndkDfRtBCqDXOXwYJdDtVvgjuv1vwgucKT9G+V/z1Rx9wTuphEOdrqs6VJZxzH9p1/94WqvYM35onYlaPBhlXNo4FE12dhCdSpsuBOspIdEqw0RxlAfZo5CsMK4lC9mFCDd9b7QnoYv9niDBklTPkmPhP1tyV5Z2uNq4sLptsvySy2zLLIdhjua2zOEE9KYsp/fpC5cHl1s="),o(f,"title","Open in our Online Editor"),lt.a=null,o(R,"class","language-js"),o(d,"class","remark-container tip"),o(O,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNplkE1LxDAQQP9KmVMLtYkLgvSmHmQPirBHKzSbjG3YNAnJVLuU/nfbrRQ/yGXezGTeMCMI76EcQTqFUII0Isbk6XznfYIDoVUxmeOxshXJgILwQCLQi2gwzS7ZigJSH2yyFZbsVNkJphz8zBHK1xG0gvI6h3dnFIb9Cr+k2/9NvMAP82Ov/zrv3VAchTw1wfVWPTjjQlob3WGdFZ9aUZvueFa0qJuWLqFstVHpOqOiffe97vr+jwqo6uxHQx9MWrdEPpaM9d44oWbPaRYqLQoXGraQX4hJ13XORkZt3x0ZMuTs8KwlFvGjYbec++Fq48Lbps7y1ZRtB8xhmO90w3M4Q7njfHqbvgAm0ppQ"),o(v,"title","Open in our Online Editor"),rt.a=null,o(q,"class","language-js"),o(m,"class","remark-container tip")},m(t,n){a(t,k,n),a(t,U,n),a(t,_,n),a(t,X,n),a(t,x,n),a(t,Y,n),a(t,w,n),a(t,B,n),a(t,C,n),a(t,J,n),a(t,I,n),a(t,W,n),a(t,g,n),r(g,y),r(g,A),kt(T,g,null),a(t,K,n),a(t,P,n),a(t,tt,n),a(t,L,n),a(t,et,n),a(t,u,n),r(u,M),r(u,V),kt(S,u,null),r(u,h),r(u,Q),nt.m(Ft,Q),a(t,at,n),a(t,b,n),a(t,st,n),a(t,H,n),a(t,pt,n),a(t,E,n),a(t,ot,n),a(t,d,n),r(d,j),kt(D,d,null),r(d,f),r(d,R),lt.m(Ut,R),a(t,it,n),a(t,N,n),a(t,ct,n),a(t,m,n),r(m,O),kt($,m,null),r(m,v),r(m,q),rt.m(Xt,q),ut=!0},p:Bt,i(t){ut||(gt(T.$$.fragment,t),gt(S.$$.fragment,t),gt(D.$$.fragment,t),gt($.$$.fragment,t),ut=!0)},o(t){ht(T.$$.fragment,t),ht(S.$$.fragment,t),ht(D.$$.fragment,t),ht($.$$.fragment,t),ut=!1},d(t){t&&(e(k),e(U),e(_),e(X),e(x),e(Y),e(w),e(B),e(C),e(J),e(I),e(W),e(g),e(K),e(P),e(tt),e(L),e(et),e(u),e(at),e(b),e(st),e(H),e(pt),e(E),e(ot),e(d),e(it),e(N),e(ct),e(m)),ft(T),ft(S),ft(D),ft($)}}}class ae extends Jt{constructor(k){super(),Wt(this,k,null,Kt,Yt,{})}}export{ae as component};
