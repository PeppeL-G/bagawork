import{s as Yt,n as Kt}from"../chunks/scheduler.UQwd20JU.js";import{S as Jt,i as te,e as a,s as c,c as mt,H as Pt,a as s,g as l,b as r,d as u,f as kt,h as e,n as _t,o,j as p,p as i,m as gt,t as ft,k as ht,l as vt}from"../chunks/index.i__Fl8cY.js";import{V as xt}from"../chunks/ViewApp.m6vzcyjb.js";function ee(Ft){let d,It="<code>Image</code>",D,w,St="On this page you find the documentation for the GUI Component <code>Image</code>.",F,C,yt="Introduction",R,P,Lt="The <code>Image</code> component is a view that shows an image to the user.",W,m,_,Et="Example",q,Tt="Example showing what the <code>Image</code> component looks like when shown on the screen.",X,I,U,S,bt="<code>url()</code> - Specifying the image",Y,y,Mt="Use the configuration method <code>url()</code> to tell the <code>Image</code> component which image it should show. Pass it the URL to the image as a string.",K,k,L,Ht="Example",Z,At="Example showing what the <code>Image</code> component looks like when shown on the screen.",E,T,g,jt="Open in Online Editor",z,J,Rt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Image
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,tt,b,Vt="The image will always be drawn at the center of the <code>Image</code> component. Try resizing the app screen in the example above, and notice that the image always stays in the center.",et,M,Nt="Resizing the image",nt,H,Gt='The <code>Image</code> will occupy the space given to it by the layout it&#39;s in (or the entire screen if the <code>Image</code> is the root component). If the layout hasn&#39;t given it a specific size (for example when using the <code>Image</code> component as a child in a <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> or <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layout without calling <code>size()</code>), it will have the same size as the image itself.',at,v,A,Ot="Example",j,V,f,$t="Open in Online Editor",B,st,Wt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Image
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pt,N,qt='If you want to give the image a specific size, put it in a <a href="/documentation/box/" title="Open the documentation for Box.">Box</a> component.',ot,x,G,Zt="Example",O,$,h,zt="Open in Online Editor",Q,lt,Ut=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Image
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it;return I=new xt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Image.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),T=new xt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Image
			.backgroundColor(\`red\`)
			.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),V=new xt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Image
				.backgroundColor(\`red\`)
				.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`),
			Space,
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),$=new xt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Box.backgroundColor(\`lime\`).width(20).height(20).child(
			Image
				.backgroundColor(\`red\`)
				.url(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`),
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){d=a("h1"),d.innerHTML=It,D=c(),w=a("p"),w.innerHTML=St,F=c(),C=a("h2"),C.textContent=yt,R=c(),P=a("p"),P.innerHTML=Lt,W=c(),m=a("div"),_=a("div"),_.textContent=Et,q=a("p"),q.innerHTML=Tt,X=a("div"),mt(I.$$.fragment),U=c(),S=a("h2"),S.innerHTML=bt,Y=c(),y=a("p"),y.innerHTML=Mt,K=c(),k=a("div"),L=a("div"),L.textContent=Ht,Z=a("p"),Z.innerHTML=At,E=a("div"),mt(T.$$.fragment),g=a("a"),g.textContent=jt,z=a("pre"),J=new Pt(!1),tt=c(),b=a("p"),b.innerHTML=Vt,et=c(),M=a("h2"),M.textContent=Nt,nt=c(),H=a("p"),H.innerHTML=Gt,at=c(),v=a("div"),A=a("div"),A.textContent=Ot,j=a("div"),mt(V.$$.fragment),f=a("a"),f.textContent=$t,B=a("pre"),st=new Pt(!1),pt=c(),N=a("p"),N.innerHTML=qt,ot=c(),x=a("div"),G=a("div"),G.textContent=Zt,O=a("div"),mt($.$$.fragment),h=a("a"),h.textContent=zt,Q=a("pre"),lt=new Pt(!1),this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-125jwag"&&(d.innerHTML=It),D=r(t),w=s(t,"P",{"data-svelte-h":!0}),l(w)!=="svelte-20yfrj"&&(w.innerHTML=St),F=r(t),C=s(t,"H2",{"data-svelte-h":!0}),l(C)!=="svelte-1ukekoe"&&(C.textContent=yt),R=r(t),P=s(t,"P",{"data-svelte-h":!0}),l(P)!=="svelte-142f6ji"&&(P.innerHTML=Lt),W=r(t),m=s(t,"DIV",{class:!0});var n=u(m);_=s(n,"DIV",{class:!0,"data-svelte-h":!0}),l(_)!=="svelte-1llzxwj"&&(_.textContent=Et),q=s(n,"P",{"data-svelte-h":!0}),l(q)!=="svelte-9mjq8l"&&(q.innerHTML=Tt),X=s(n,"DIV",{});var Bt=u(X);kt(I.$$.fragment,Bt),Bt.forEach(e),n.forEach(e),U=r(t),S=s(t,"H2",{"data-svelte-h":!0}),l(S)!=="svelte-ud7k21"&&(S.innerHTML=bt),Y=r(t),y=s(t,"P",{"data-svelte-h":!0}),l(y)!=="svelte-1s2ni1g"&&(y.innerHTML=Mt),K=r(t),k=s(t,"DIV",{class:!0});var ct=u(k);L=s(ct,"DIV",{class:!0,"data-svelte-h":!0}),l(L)!=="svelte-1llzxwj"&&(L.textContent=Ht),Z=s(ct,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-9mjq8l"&&(Z.innerHTML=At),E=s(ct,"DIV",{});var rt=u(E);kt(T.$$.fragment,rt),g=s(rt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-zjswrm"&&(g.textContent=jt),z=s(rt,"PRE",{class:!0});var Qt=u(z);J=_t(Qt,!1),Qt.forEach(e),rt.forEach(e),ct.forEach(e),tt=r(t),b=s(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1piye8r"&&(b.innerHTML=Vt),et=r(t),M=s(t,"H2",{"data-svelte-h":!0}),l(M)!=="svelte-1qd3bxb"&&(M.textContent=Nt),nt=r(t),H=s(t,"P",{"data-svelte-h":!0}),l(H)!=="svelte-7ibs4a"&&(H.innerHTML=Gt),at=r(t),v=s(t,"DIV",{class:!0});var wt=u(v);A=s(wt,"DIV",{class:!0,"data-svelte-h":!0}),l(A)!=="svelte-1llzxwj"&&(A.textContent=Ot),j=s(wt,"DIV",{});var ut=u(j);kt(V.$$.fragment,ut),f=s(ut,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-11fye38"&&(f.textContent=$t),B=s(ut,"PRE",{class:!0});var Xt=u(B);st=_t(Xt,!1),Xt.forEach(e),ut.forEach(e),wt.forEach(e),pt=r(t),N=s(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-19kn98t"&&(N.innerHTML=qt),ot=r(t),x=s(t,"DIV",{class:!0});var Ct=u(x);G=s(Ct,"DIV",{class:!0,"data-svelte-h":!0}),l(G)!=="svelte-1llzxwj"&&(G.textContent=Zt),O=s(Ct,"DIV",{});var dt=u(O);kt($.$$.fragment,dt),h=s(dt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1wv3cmq"&&(h.textContent=zt),Q=s(dt,"PRE",{class:!0});var Dt=u(Q);lt=_t(Dt,!1),Dt.forEach(e),dt.forEach(e),Ct.forEach(e),this.h()},h(){o(_,"class","remark-container__title"),o(m,"class","remark-container tip"),o(L,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNqVUMtKw0AU/ZVwVynETKwIOrviQrpQhHahmEKmmZs0dF7MQ1tC/t2ktaFxJwMz59znmdMCMwZoC6XmCBRKwZyLXo4LYyI8eFTcRT1uc5X70iLzuPLM+jdWYzw7RXNv0QerojExRLtcddAlUGnB0Tqgny00HOhtAorJYdOpHBLQVeXQvwPNLvijx90mAdPPmnSehy3PZCJ43D2KHsiV6ufQ/NW7lL9ah5NuWbmvrQ6KP2mhbVxY5MVsTAcr4mLnvXGUkGCEZjz9bvaNRN6wVNuaDMwMjJRaSq0c8bsgtwQJZmT12pSYuq+aPGSZOdyMPDWqPq85OZbAAej8bp7AsX/vHy82rFEa0X9jYsfEgYXbL6sFD8L/w4J1X5r6/oqLKxHdpvsB9Ba8xA=="),o(g,"title","Open in our Online Editor"),J.a=null,o(z,"class","language-js"),o(k,"class","remark-container tip"),o(A,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNqVUFFLwzAQ/ivlnlqITZ0I2rfhg+xBEbcHxQ6aNdeuLE1CkrqN0v9uu7q6ii8SSO67++7uy9cA0xriBjLFEWLIBLPWezrOtfbw4FBy63Vxk8jEZQaZw6Vjxr2wAv3glE2cQVcb6Y2FPtsmsoWWQK4ER2Mh/mig5BBfE5Cs6jed6EBA5blF9wZxdI7fu7hdE9DdrEnnMGwxgIngcfcougcXqh/r8rfeV7W3YbYtBTco/aGUuKVmGZIzWlTf/xlOuGHZrjCqlvxBCWX81CBPgwtCbYSfbp3TNqa01kIxHu7LXVkhL1moTEF7pHtEM1VVSlrqtnW1oUgxosvnMsPQfhb0Lor04WrEoZZFGpC/VAaj3wQOEM9uZgSO3Xt7fzZxhZUWnQkTMyf+ze1ukc95Ldw/DFx11NB1l5+mPyLadfsFJbDUSw=="),o(f,"title","Open in our Online Editor"),st.a=null,o(B,"class","language-js"),o(v,"class","remark-container tip"),o(G,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNqVUF1LwzAU/SvjPrVQmzoRtG/TB9mDImwPihWaNekHS5OQ3GpH6X83XV1d9UkCyTk3N/ecnA6o1hB3kCnGIYZMUGsXj4eV1gveIpfMLhzuEplgZjhFvkFq8JkW3POP1QQNx8bIxXQxVPtE9tAHkCvBuLEQv3VQMYgvA5C0HpSO7RCAynPL8QXi6IRfHe7fA9Bu1uzlOGw9kpnhSXsyPZAz1w9N9dvvnWrDHc32hVGNZPdKKOOloqp56oefFcPSW0Z+WPKqKPEIs7ISzBtnJLiuv786rr+jDGepf9bQGOGlJaK2MSGNFooyp7N3gqyioTIFGZgeGMlUXStpCZZNvSOc8IhsnqqMh/ajIDdRpNuLiYdaFqkfjEr+FH4ALcTLq2UAB3de354S3fJaC5fILNlZmCu7X+cr1gj8R5pb1xqi27w0/THRv/dfBGPXQA=="),o(h,"title","Open in our Online Editor"),lt.a=null,o(Q,"class","language-js"),o(x,"class","remark-container tip")},m(t,n){p(t,d,n),p(t,D,n),p(t,w,n),p(t,F,n),p(t,C,n),p(t,R,n),p(t,P,n),p(t,W,n),p(t,m,n),i(m,_),i(m,q),i(m,X),gt(I,X,null),p(t,U,n),p(t,S,n),p(t,Y,n),p(t,y,n),p(t,K,n),p(t,k,n),i(k,L),i(k,Z),i(k,E),gt(T,E,null),i(E,g),i(E,z),J.m(Rt,z),p(t,tt,n),p(t,b,n),p(t,et,n),p(t,M,n),p(t,nt,n),p(t,H,n),p(t,at,n),p(t,v,n),i(v,A),i(v,j),gt(V,j,null),i(j,f),i(j,B),st.m(Wt,B),p(t,pt,n),p(t,N,n),p(t,ot,n),p(t,x,n),i(x,G),i(x,O),gt($,O,null),i(O,h),i(O,Q),lt.m(Ut,Q),it=!0},p:Kt,i(t){it||(ft(I.$$.fragment,t),ft(T.$$.fragment,t),ft(V.$$.fragment,t),ft($.$$.fragment,t),it=!0)},o(t){ht(I.$$.fragment,t),ht(T.$$.fragment,t),ht(V.$$.fragment,t),ht($.$$.fragment,t),it=!1},d(t){t&&(e(d),e(D),e(w),e(F),e(C),e(R),e(P),e(W),e(m),e(U),e(S),e(Y),e(y),e(K),e(k),e(tt),e(b),e(et),e(M),e(nt),e(H),e(at),e(v),e(pt),e(N),e(ot),e(x)),vt(I),vt(T),vt(V),vt($)}}}class pe extends Jt{constructor(d){super(),te(this,d,null,ee,Yt,{})}}export{pe as component};
