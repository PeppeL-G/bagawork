import{s as sn,n as on}from"../chunks/scheduler.DFPFbGJz.js";import{S as pn,i as ln,e as a,s as i,c as ht,H as gt,a as s,g as l,b as u,d as r,f as vt,h as n,n as xt,o as p,j as o,p as c,m as wt,t as Ct,k as Pt,l as _t}from"../chunks/index.CzDE4dZi.js";import{V as yt}from"../chunks/ViewApp.C2MU7-ZI.js";function cn(Zt){let k,Bt="<code>Button</code>",Q,C,bt="On this page you find the documentation for the GUI Component <code>Button</code>.",X,P,St="Introduction",q,_,Ot="The <code>Button</code> component is a view that displays some text to the user shown as a button, and which the user can click on. Clicking on the <code>Button</code> takes the user to &quot;the next page in the app&quot;.",W,d,y,Et="Example",G,It="Example showing what the <code>Button</code> component looks like when shown on the screen.",J,T,N,Dt="Note: In this example, the button covers the entire screen (which usually isn't the case), and clicking on it just reloads the same page, so nothing should happen when you click on the button in this example.",Z,M,Lt="<code>text()</code> - Setting the text",tt,H,$t="Use the configuration method <code>text()</code> to tell the <code>Button</code> component which text it should display. Pass the text as a string. The text will always be centered in the <code>Button</code>.",nt,g,B,At="Example",b,S,m,jt="Open in Online Editor",R,et,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,O,Vt="<code>page()</code> - Going to another page",st,E,zt="Use the configuration method <code>page()</code> to tell the <code>Button</code> component which page the user should come to when clicking on the button. Pass the page as an argument.",ot,I,Gt="If this method is not used, then the current page will be reloaded when the user clicks on the button.",pt,v,D,Nt="Example",x,L,f,Rt="Open in Online Editor",K,lt,nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go there</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DestinationPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,U,ct,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DestinationPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to the DestinationPage!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it,$,Kt="<code>handler()</code> - Handling clicks",ut,A,Ut="Use the configuration method <code>handler()</code> to tell the <code>Button</code> component which method to call when the user clicks on the button. Pass it a reference to the method (e.g. <code>a.theMethodName</code> or <code>p.theMethodName</code>, depending on what you have named your method and if you wrote it in your <code>App</code> class or <code>Page</code> class).",rt,w,j,Yt="Example",V,z,h,Jt="Open in Online Editor",Y,dt,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfButtonClicks <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have clicked the button </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfButtonClicks<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementNumberOfButtonClicks<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementNumberOfButtonClicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>numberOfButtonClicks <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,kt;return T=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Button.text(\`Click me!\`)
	}
}`,x:232,y:259}],pageTemplates:[]}}}),S=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Button.text(\`Click me!\`)
	}
}`,x:232,y:259}],pageTemplates:[]}}}),L=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Button.text(\`Go there\`).page(DestinationPage)
	}
}`,x:232,y:259},{id:2,folderId:1,code:`class DestinationPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Welcome to the DestinationPage!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:566,y:268}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),z=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	numberOfButtonClicks = 0
	
	createGui(){
		return Rows.children(
			Text.text(\`You have clicked the button \${p.numberOfButtonClicks} times.\`),
			Button.text(\`Click me!\`).handler(p.incrementNumberOfButtonClicks),
		)
	}
	
	incrementNumberOfButtonClicks(){
		p.numberOfButtonClicks += 1
	}
	
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){k=a("h1"),k.innerHTML=Bt,Q=i(),C=a("p"),C.innerHTML=bt,X=i(),P=a("h2"),P.textContent=St,q=i(),_=a("p"),_.innerHTML=Ot,W=i(),d=a("div"),y=a("div"),y.textContent=Et,G=a("p"),G.innerHTML=It,J=a("div"),ht(T.$$.fragment),N=a("p"),N.textContent=Dt,Z=i(),M=a("h2"),M.innerHTML=Lt,tt=i(),H=a("p"),H.innerHTML=$t,nt=i(),g=a("div"),B=a("div"),B.textContent=At,b=a("div"),ht(S.$$.fragment),m=a("a"),m.textContent=jt,R=a("pre"),et=new gt(!1),at=i(),O=a("h2"),O.innerHTML=Vt,st=i(),E=a("p"),E.innerHTML=zt,ot=i(),I=a("p"),I.textContent=Gt,pt=i(),v=a("div"),D=a("div"),D.textContent=Nt,x=a("div"),ht(L.$$.fragment),f=a("a"),f.textContent=Rt,K=a("pre"),lt=new gt(!1),U=a("pre"),ct=new gt(!1),it=i(),$=a("h2"),$.innerHTML=Kt,ut=i(),A=a("p"),A.innerHTML=Ut,rt=i(),w=a("div"),j=a("div"),j.textContent=Yt,V=a("div"),ht(z.$$.fragment),h=a("a"),h.textContent=Jt,Y=a("pre"),dt=new gt(!1),this.h()},l(t){k=s(t,"H1",{"data-svelte-h":!0}),l(k)!=="svelte-tstzrx"&&(k.innerHTML=Bt),Q=u(t),C=s(t,"P",{"data-svelte-h":!0}),l(C)!=="svelte-ockzce"&&(C.innerHTML=bt),X=u(t),P=s(t,"H2",{"data-svelte-h":!0}),l(P)!=="svelte-1ukekoe"&&(P.textContent=St),q=u(t),_=s(t,"P",{"data-svelte-h":!0}),l(_)!=="svelte-xb4cf2"&&(_.innerHTML=Ot),W=u(t),d=s(t,"DIV",{class:!0});var e=r(d);y=s(e,"DIV",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-1llzxwj"&&(y.textContent=Et),G=s(e,"P",{"data-svelte-h":!0}),l(G)!=="svelte-br8hp0"&&(G.innerHTML=It),J=s(e,"DIV",{});var Ft=r(J);vt(T.$$.fragment,Ft),Ft.forEach(n),N=s(e,"P",{"data-svelte-h":!0}),l(N)!=="svelte-1qt6ke8"&&(N.textContent=Dt),e.forEach(n),Z=u(t),M=s(t,"H2",{"data-svelte-h":!0}),l(M)!=="svelte-ya3cfe"&&(M.innerHTML=Lt),tt=u(t),H=s(t,"P",{"data-svelte-h":!0}),l(H)!=="svelte-p48zi3"&&(H.innerHTML=$t),nt=u(t),g=s(t,"DIV",{class:!0});var Tt=r(g);B=s(Tt,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1llzxwj"&&(B.textContent=At),b=s(Tt,"DIV",{});var mt=r(b);vt(S.$$.fragment,mt),m=s(mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-v8ns6m"&&(m.textContent=jt),R=s(mt,"PRE",{class:!0});var Qt=r(R);et=xt(Qt,!1),Qt.forEach(n),mt.forEach(n),Tt.forEach(n),at=u(t),O=s(t,"H2",{"data-svelte-h":!0}),l(O)!=="svelte-wf1y9l"&&(O.innerHTML=Vt),st=u(t),E=s(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-zqnbm2"&&(E.innerHTML=zt),ot=u(t),I=s(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-vqve52"&&(I.textContent=Gt),pt=u(t),v=s(t,"DIV",{class:!0});var Mt=r(v);D=s(Mt,"DIV",{class:!0,"data-svelte-h":!0}),l(D)!=="svelte-1llzxwj"&&(D.textContent=Nt),x=s(Mt,"DIV",{});var F=r(x);vt(L.$$.fragment,F),f=s(F,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-1ouw6cr"&&(f.textContent=Rt),K=s(F,"PRE",{class:!0});var Xt=r(K);lt=xt(Xt,!1),Xt.forEach(n),U=s(F,"PRE",{class:!0});var qt=r(U);ct=xt(qt,!1),qt.forEach(n),F.forEach(n),Mt.forEach(n),it=u(t),$=s(t,"H2",{"data-svelte-h":!0}),l($)!=="svelte-tzuj1x"&&($.innerHTML=Kt),ut=u(t),A=s(t,"P",{"data-svelte-h":!0}),l(A)!=="svelte-vdfjl1"&&(A.innerHTML=Ut),rt=u(t),w=s(t,"DIV",{class:!0});var Ht=r(w);j=s(Ht,"DIV",{class:!0,"data-svelte-h":!0}),l(j)!=="svelte-1llzxwj"&&(j.textContent=Yt),V=s(Ht,"DIV",{});var ft=r(V);vt(z.$$.fragment,ft),h=s(ft,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-15afag4"&&(h.textContent=Jt),Y=s(ft,"PRE",{class:!0});var Wt=r(Y);dt=xt(Wt,!1),Wt.forEach(n),ft.forEach(n),Ht.forEach(n),this.h()},h(){p(y,"class","remark-container__title"),p(d,"class","remark-container tip"),p(B,"class","remark-container__title"),p(m,"target","_blank"),p(m,"href","/editor#eNpdjs1qwzAQhF9FmVMCoqQJPVS3NofQQ6GQHFLqQIS1Lia2LKQ1JBi9e2SbmKannf2b+Tpo56A65I0hKOSVDkF8Xt+cE3RhsiaIpLvMZpx70kw71p6/9C/NF8M0Y0/ceiumRT+NmY2IEkVTGfIB6qdDaaCeJayu+6ThHBJNUQTiA9Tyrr+TjkcJl7wePkezj7F5AJ6yJ+i++UO9bcv/vO8tc2OfOH3MT5uqzM+iptlpMeFLXKBW65XENdWX1zvTnmpXJc+e7RhvwPdu3w=="),p(m,"title","Open in our Online Editor"),et.a=null,p(R,"class","language-js"),p(g,"class","remark-container tip"),p(D,"class","remark-container__title"),p(f,"target","_blank"),p(f,"href","/editor#eNqVkVFrgzAUhf+Ku08KoWyOls03y6D0YTC2wjZmwaDXVaqJJFfWIvnvi3Xa6sOgT7m5yTn3O0kDvKogaCCRKUIAScG1dp6PYVU5eCAUqXZs3UQiokQhJ3wjruiFf6PrnboRKaRaCWc4aLsmEgYMg0wWKSoNwVcDeQrBHQPBy3bS6TowkFmmkT4guO3rT1ubLYPKeo2Undm624yAh9kDdLu5oF7V+ZR3WRNJMSOrcOOVdGiHCmNv1o51n1BTLjjlUrRO3pCJwQEC/95ncLTr/NGwDs//D2/idgXkq/zRs2SXF6lC4XZHEW2swR/4OxaJLNGhU4DppJvYY71olHfJk32rGR6uDz40euEk+nyx6KIvHvo/2mBZFRZ/9Fej/KHer7MwrQu6IvpFyPgMYbbmFwRb8vg="),p(f,"title","Open in our Online Editor"),lt.a=null,p(K,"class","language-js"),ct.a=null,p(U,"class","language-js"),p(v,"class","remark-container tip"),p(j,"class","remark-container__title"),p(h,"target","_blank"),p(h,"href","/editor#eNp9Ul1PgzAU/Sv1xgeIhGwzPkiyh+mD2YMf0T24yBI6uAgZlKa96BbCf7eDgUOnD21ve9tzzr2nFXApwasgLCIED8KMa83udzMpGW4JRaSZiStf+BQq5IQvxBU98Xe07ObUJ4VUKsH6xP609kUNtQNxkUWoNHhvFaQReGMHBM/3TM11cKCIY430Ct6oi5cmrlcOSIM1eNmCzdvNQHDP3Yveb1p9ZogyX6N6jG9KokLcZmm40WzKRl2+reyuTH/W9Fx8ajdM0ixSKKw25dPCkLhkJitYFiVL+AeycA+KEaME2bqhYeeVdE8x14zSHLUb2E6H2KYPmM0tluNZYLsJF1GGypJuKozKHAU9nIDskOxD79uy/n3Sl3paJLuYsvERWm2s2oI3uZw4sDPr1XVn0QJzmZn2DawauDPTm3k8i8qMftvzZ+uPmhzY319qVX8B6hn4lw=="),p(h,"title","Open in our Online Editor"),dt.a=null,p(Y,"class","language-js"),p(w,"class","remark-container tip")},m(t,e){o(t,k,e),o(t,Q,e),o(t,C,e),o(t,X,e),o(t,P,e),o(t,q,e),o(t,_,e),o(t,W,e),o(t,d,e),c(d,y),c(d,G),c(d,J),wt(T,J,null),c(d,N),o(t,Z,e),o(t,M,e),o(t,tt,e),o(t,H,e),o(t,nt,e),o(t,g,e),c(g,B),c(g,b),wt(S,b,null),c(b,m),c(b,R),et.m(tn,R),o(t,at,e),o(t,O,e),o(t,st,e),o(t,E,e),o(t,ot,e),o(t,I,e),o(t,pt,e),o(t,v,e),c(v,D),c(v,x),wt(L,x,null),c(x,f),c(x,K),lt.m(nn,K),c(x,U),ct.m(en,U),o(t,it,e),o(t,$,e),o(t,ut,e),o(t,A,e),o(t,rt,e),o(t,w,e),c(w,j),c(w,V),wt(z,V,null),c(V,h),c(V,Y),dt.m(an,Y),kt=!0},p:on,i(t){kt||(Ct(T.$$.fragment,t),Ct(S.$$.fragment,t),Ct(L.$$.fragment,t),Ct(z.$$.fragment,t),kt=!0)},o(t){Pt(T.$$.fragment,t),Pt(S.$$.fragment,t),Pt(L.$$.fragment,t),Pt(z.$$.fragment,t),kt=!1},d(t){t&&(n(k),n(Q),n(C),n(X),n(P),n(q),n(_),n(W),n(d),n(Z),n(M),n(tt),n(H),n(nt),n(g),n(at),n(O),n(st),n(E),n(ot),n(I),n(pt),n(v),n(it),n($),n(ut),n(A),n(rt),n(w)),_t(T),_t(S),_t(L),_t(z)}}}class kn extends pn{constructor(k){super(),ln(this,k,null,cn,sn,{})}}export{kn as component};
