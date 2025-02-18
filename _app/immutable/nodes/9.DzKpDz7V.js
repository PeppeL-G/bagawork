import{s as gn,n as vn}from"../chunks/scheduler.B0TnBjPs.js";import{S as hn,i as mn,e as s,s as i,c as T,H as M,a as l,g as p,b as r,d as u,f as j,n as A,h as e,o,j as a,p as c,m as I,t as $,k as L,l as b}from"../chunks/index.BXVnRmkj.js";import{V as D}from"../chunks/ViewApp.qg7AIhJt.js";function Cn(on){let C,ge="BBCode",It,z,ve="On this page you find the documentation for how to style text in your BagaWork apps using BBCode.",$t,S,he='<div class="remark-container__title">Font is an alternative</div><p>BBCode is used to style smaller parts of a text. If you want to style all text in a GUI component, you&#39;re often better off using <a href="/documentation/font/" title="Open the documentation for Font.">Font</a>.</p>',Lt,U,me="Introduction",bt,G,Ce='Various GUI components display text on the screen, such as the <a href="/documentation/text/" title="Open the documentation for Text.">Text</a> component and the <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> component. That text can be styled using BBCode if you set the text with the configuration methods <code>textWithBBCode()</code> instead of <code>text()</code>.',Dt,V,we="[b] - Making text bold",zt,R,_e="To make text display as bold, surround the text with <code>[b]</code> and <code>[/b]</code>.",Ut,d,Z,ye="Example",Q,w,Pe="Open in Online Editor",mt,Gt,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [b]how are[/b] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Vt,W,Be="[i] - Making text italic",Rt,K,Ee="To make text display as italic, surround the text with <code>[i]</code> and <code>[/i]</code>.",Zt,k,N,He="Example",q,_,Oe="Open in Online Editor",Ct,Qt,rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [i]how are[/i] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wt,X,Se="[u] - Making text underlined",Kt,Y,Te="To make text display as underlined, surround the text with <code>[u]</code> and <code>[/u]</code>.",Nt,x,J,Me="Example",F,y,je="Open in Online Editor",wt,qt,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [u]how are[/u] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xt,tt,Ae="[s] - Making text strikedhroughed",Yt,et,Ie="To make text display as strikethoughed, surround the text with <code>[s]</code> and <code>[/s]</code>.",Jt,f,nt,$e="Example",at,P,Le="Open in Online Editor",_t,Ft,un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [s]how are[/s] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,te,st,be="[size] - Changing the size of the text",ee,lt,De="To change the size of the text, surround the text with <code>[size=THE_SIZE]</code> and <code>[/size]</code>, where <code>THE_SIZE</code> is the number of millimeters tall the text should be.",ne,g,ot,ze="Example",pt,B,Ue="Open in Online Editor",yt,ae,dn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [size=15]how are[/size] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,se,it,Ge="[color] - Changing the color of the text",le,rt,Ve="To change the color of the text, surround the text with <code>[color=THE_COLOR]</code> and <code>[/color]</code>, where <code>THE_COLOR</code> is the name of the color in English the text should have, such as <code>red</code> or <code>blue</code>.",oe,v,ct,Re="Example",ut,E,Ze="Open in Online Editor",Pt,pe,kn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [color=red]how are[/color] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ie,dt,Qe="[url] - Making text a URL",re,kt,We="To make text display as a URL the user can click on to open the webpage the URL leads to in a web browser, surround the text with <code>[url]</code> and <code>[/url]</code>.",ce,h,xt,Ke="Example",ft,H,Ne="Open in Online Editor",Bt,ue,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url]https://nintendo.se[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,de,gt,qe="If you want the URL to display another text, surround the text with <code>[url=THE_URL]</code> and <code>[/url]</code>.",ke,m,vt,Xe="Example",ht,O,Ye="Open in Online Editor",Et,xe,fn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url=https://nintendo.se]Nintendo's website[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,fe;return Q=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [b]how are[/b] you?\`
		)
	}
}`,x:150,y:200}]}}}),q=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [i]how are[/i] you?\`
		)
	}
}`,x:150,y:200}]}}}),F=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [u]how are[/u] you?\`
		)
	}
}`,x:150,y:200}]}}}),at=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [s]how are[/s] you?\`
		)
	}
}`,x:150,y:200}]}}}),pt=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [size=15]how are[/size] you?\`
		)
	}
}`,x:150,y:200}]}}}),ut=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [color=red]how are[/color] you?\`
		)
	}
}`,x:150,y:200}]}}}),ft=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url]https://nintendo.se[/url].\`
		)
	}
}`,x:150,y:200}]}}}),ht=new D({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url=https://nintendo.se]Nintendo's website[/url].\`
		)
	}
}`,x:150,y:200}]}}}),{c(){C=s("h1"),C.textContent=ge,It=i(),z=s("p"),z.textContent=ve,$t=i(),S=s("div"),S.innerHTML=he,Lt=i(),U=s("h2"),U.textContent=me,bt=i(),G=s("p"),G.innerHTML=Ce,Dt=i(),V=s("h2"),V.textContent=we,zt=i(),R=s("p"),R.innerHTML=_e,Ut=i(),d=s("div"),Z=s("div"),Z.textContent=ye,T(Q.$$.fragment),w=s("a"),w.textContent=Pe,mt=s("pre"),Gt=new M(!1),Vt=i(),W=s("h2"),W.textContent=Be,Rt=i(),K=s("p"),K.innerHTML=Ee,Zt=i(),k=s("div"),N=s("div"),N.textContent=He,T(q.$$.fragment),_=s("a"),_.textContent=Oe,Ct=s("pre"),Qt=new M(!1),Wt=i(),X=s("h2"),X.textContent=Se,Kt=i(),Y=s("p"),Y.innerHTML=Te,Nt=i(),x=s("div"),J=s("div"),J.textContent=Me,T(F.$$.fragment),y=s("a"),y.textContent=je,wt=s("pre"),qt=new M(!1),Xt=i(),tt=s("h2"),tt.textContent=Ae,Yt=i(),et=s("p"),et.innerHTML=Ie,Jt=i(),f=s("div"),nt=s("div"),nt.textContent=$e,T(at.$$.fragment),P=s("a"),P.textContent=Le,_t=s("pre"),Ft=new M(!1),te=i(),st=s("h2"),st.textContent=be,ee=i(),lt=s("p"),lt.innerHTML=De,ne=i(),g=s("div"),ot=s("div"),ot.textContent=ze,T(pt.$$.fragment),B=s("a"),B.textContent=Ue,yt=s("pre"),ae=new M(!1),se=i(),it=s("h2"),it.textContent=Ge,le=i(),rt=s("p"),rt.innerHTML=Ve,oe=i(),v=s("div"),ct=s("div"),ct.textContent=Re,T(ut.$$.fragment),E=s("a"),E.textContent=Ze,Pt=s("pre"),pe=new M(!1),ie=i(),dt=s("h2"),dt.textContent=Qe,re=i(),kt=s("p"),kt.innerHTML=We,ce=i(),h=s("div"),xt=s("div"),xt.textContent=Ke,T(ft.$$.fragment),H=s("a"),H.textContent=Ne,Bt=s("pre"),ue=new M(!1),de=i(),gt=s("p"),gt.innerHTML=qe,ke=i(),m=s("div"),vt=s("div"),vt.textContent=Xe,T(ht.$$.fragment),O=s("a"),O.textContent=Ye,Et=s("pre"),xe=new M(!1),this.h()},l(t){C=l(t,"H1",{"data-svelte-h":!0}),p(C)!=="svelte-ylq00h"&&(C.textContent=ge),It=r(t),z=l(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-xww3ag"&&(z.textContent=ve),$t=r(t),S=l(t,"DIV",{class:!0,"data-svelte-h":!0}),p(S)!=="svelte-1yx7blh"&&(S.innerHTML=he),Lt=r(t),U=l(t,"H2",{"data-svelte-h":!0}),p(U)!=="svelte-1ukekoe"&&(U.textContent=me),bt=r(t),G=l(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-p3vmuu"&&(G.innerHTML=Ce),Dt=r(t),V=l(t,"H2",{"data-svelte-h":!0}),p(V)!=="svelte-zvigk0"&&(V.textContent=we),zt=r(t),R=l(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-13jqkcj"&&(R.innerHTML=_e),Ut=r(t),d=l(t,"DIV",{class:!0});var n=u(d);Z=l(n,"DIV",{class:!0,"data-svelte-h":!0}),p(Z)!=="svelte-1llzxwj"&&(Z.textContent=ye),j(Q.$$.fragment,n),w=l(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(w)!=="svelte-iz6z37"&&(w.textContent=Pe),mt=l(n,"PRE",{class:!0});var Je=u(mt);Gt=A(Je,!1),Je.forEach(e),n.forEach(e),Vt=r(t),W=l(t,"H2",{"data-svelte-h":!0}),p(W)!=="svelte-1y5276y"&&(W.textContent=Be),Rt=r(t),K=l(t,"P",{"data-svelte-h":!0}),p(K)!=="svelte-10w7ldy"&&(K.innerHTML=Ee),Zt=r(t),k=l(t,"DIV",{class:!0});var Ht=u(k);N=l(Ht,"DIV",{class:!0,"data-svelte-h":!0}),p(N)!=="svelte-1llzxwj"&&(N.textContent=He),j(q.$$.fragment,Ht),_=l(Ht,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(_)!=="svelte-lb50r1"&&(_.textContent=Oe),Ct=l(Ht,"PRE",{class:!0});var Fe=u(Ct);Qt=A(Fe,!1),Fe.forEach(e),Ht.forEach(e),Wt=r(t),X=l(t,"H2",{"data-svelte-h":!0}),p(X)!=="svelte-nz0xvy"&&(X.textContent=Se),Kt=r(t),Y=l(t,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-14vvz32"&&(Y.innerHTML=Te),Nt=r(t),x=l(t,"DIV",{class:!0});var Ot=u(x);J=l(Ot,"DIV",{class:!0,"data-svelte-h":!0}),p(J)!=="svelte-1llzxwj"&&(J.textContent=Me),j(F.$$.fragment,Ot),y=l(Ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(y)!=="svelte-1ob9uvx"&&(y.textContent=je),wt=l(Ot,"PRE",{class:!0});var tn=u(wt);qt=A(tn,!1),tn.forEach(e),Ot.forEach(e),Xt=r(t),tt=l(t,"H2",{"data-svelte-h":!0}),p(tt)!=="svelte-gxnws6"&&(tt.textContent=Ae),Yt=r(t),et=l(t,"P",{"data-svelte-h":!0}),p(et)!=="svelte-1dd4dd6"&&(et.innerHTML=Ie),Jt=r(t),f=l(t,"DIV",{class:!0});var St=u(f);nt=l(St,"DIV",{class:!0,"data-svelte-h":!0}),p(nt)!=="svelte-1llzxwj"&&(nt.textContent=$e),j(at.$$.fragment,St),P=l(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(P)!=="svelte-10lw5un"&&(P.textContent=Le),_t=l(St,"PRE",{class:!0});var en=u(_t);Ft=A(en,!1),en.forEach(e),St.forEach(e),te=r(t),st=l(t,"H2",{"data-svelte-h":!0}),p(st)!=="svelte-1nytq7i"&&(st.textContent=be),ee=r(t),lt=l(t,"P",{"data-svelte-h":!0}),p(lt)!=="svelte-6xhjuu"&&(lt.innerHTML=De),ne=r(t),g=l(t,"DIV",{class:!0});var Tt=u(g);ot=l(Tt,"DIV",{class:!0,"data-svelte-h":!0}),p(ot)!=="svelte-1llzxwj"&&(ot.textContent=ze),j(pt.$$.fragment,Tt),B=l(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(B)!=="svelte-16luetu"&&(B.textContent=Ue),yt=l(Tt,"PRE",{class:!0});var nn=u(yt);ae=A(nn,!1),nn.forEach(e),Tt.forEach(e),se=r(t),it=l(t,"H2",{"data-svelte-h":!0}),p(it)!=="svelte-1tiusco"&&(it.textContent=Ge),le=r(t),rt=l(t,"P",{"data-svelte-h":!0}),p(rt)!=="svelte-c2lq0v"&&(rt.innerHTML=Ve),oe=r(t),v=l(t,"DIV",{class:!0});var Mt=u(v);ct=l(Mt,"DIV",{class:!0,"data-svelte-h":!0}),p(ct)!=="svelte-1llzxwj"&&(ct.textContent=Re),j(ut.$$.fragment,Mt),E=l(Mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(E)!=="svelte-rv4wgr"&&(E.textContent=Ze),Pt=l(Mt,"PRE",{class:!0});var an=u(Pt);pe=A(an,!1),an.forEach(e),Mt.forEach(e),ie=r(t),dt=l(t,"H2",{"data-svelte-h":!0}),p(dt)!=="svelte-oicxmm"&&(dt.textContent=Qe),re=r(t),kt=l(t,"P",{"data-svelte-h":!0}),p(kt)!=="svelte-dzldro"&&(kt.innerHTML=We),ce=r(t),h=l(t,"DIV",{class:!0});var jt=u(h);xt=l(jt,"DIV",{class:!0,"data-svelte-h":!0}),p(xt)!=="svelte-1llzxwj"&&(xt.textContent=Ke),j(ft.$$.fragment,jt),H=l(jt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(H)!=="svelte-4408ou"&&(H.textContent=Ne),Bt=l(jt,"PRE",{class:!0});var sn=u(Bt);ue=A(sn,!1),sn.forEach(e),jt.forEach(e),de=r(t),gt=l(t,"P",{"data-svelte-h":!0}),p(gt)!=="svelte-1o8lgoj"&&(gt.innerHTML=qe),ke=r(t),m=l(t,"DIV",{class:!0});var At=u(m);vt=l(At,"DIV",{class:!0,"data-svelte-h":!0}),p(vt)!=="svelte-1llzxwj"&&(vt.textContent=Xe),j(ht.$$.fragment,At),O=l(At,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(O)!=="svelte-12yk37r"&&(O.textContent=Ye),Et=l(At,"PRE",{class:!0});var ln=u(Et);xe=A(ln,!1),ln.forEach(e),At.forEach(e),this.h()},h(){o(S,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLOg3oQBAUP68BuizoYa+ky3Bj973YOhnoJeS8v+dKBMgZEB6nOEASkhaoqdmw3xjBsCMusYr7vZCkptagIz6QsndQDJ9OPK8ki1bZk46B3nSwdOA7G6wpE1EGegVhwuOsiQ3sYxA903B/Bvfgi7+r8n3nx0Rn5cs3pGYZbf28yBCTd9lgUmrMoiZ/6xZTFaJ7ErNX1+jZkpuOnHBr/0Crg0IJYBoGL3Rvgq2PB"),o(w,"title","Open in our Online Editor"),Gt.a=null,o(mt,"class","language-js"),o(d,"class","remark-container tip"),o(N,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRVcYa+kydIz+dzsHQ72EvJeXfOlAWQuig8zkCAKyUtU1O7Ubaxm+CKu8ZqHvZCUpc6gIL6QcndUDJ9OPK8khNa5i46B3vaw8eA426BpE3IHOQSw43E2ZozsO4gc67o/gXnyR943+Z15DdEah3DQV2+0u3JsMAUnpAcvScBbrpDBPphzGc52w1jTrdMhMx085vMJDq4hDC2IZRT7xb+NSY88="),o(_,"title","Open in our Online Editor"),Qt.a=null,o(Ct,"class","language-js"),o(k,"class","remark-container tip"),o(J,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRTcYa+lSdIz+dzsHQ72EvJeXfOlAGQOig0znCAKySjUNO7UbYxi+COu8YaHvZC0ps6gIL6QsndUDJ9OPK8kiOVuzcdC7XtYePAcTdAMi7qDMQSw43HWVoz0O4gc67o/gXnyR9678Z15DdEah3EoqtttduDcZApLSA1aV5ix2SaGfTFmM5y5hrXbrdMhMx085vMJDq4hDC2IZRT7xb+feY+c="),o(y,"title","Open in our Online Editor"),qt.a=null,o(wt,"class","language-js"),o(x,"class","remark-container tip"),o(nt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRTcYa2kzdIz+dzsHQ72EvJeXfOlAGQOig0znCAKySjnHTu3GGIYvwjp3LPSdrCVlFhXhhZSls3rgZPpxJVmkxtZsHPSul7UHz8EE7UDEHZQ5iAWHu65ytMdB/EDH/RHciy/yvin/mdcQnVEot5KK7XYX7k2GgKT0gFWlOYtdUugnUxbjuUtYq5t1OmSm46ccXuGhVcShBbGMIp/4N+ccY+M="),o(P,"title","Open in our Online Editor"),Ft.a=null,o(_t,"class","language-js"),o(f,"class","remark-container tip"),o(ot,"class","remark-container__title"),o(B,"target","_blank"),o(B,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS8FETUg3oQBAUP68CyRR2MtbQZOkf/u52DoV5C3stLvjSgjAHRQKozBAFpoZxj+3ppDMMnYZk5FvpGlpJSi4rwSMrSQd1wMPy4kixSZUvWD1rXy9KD52CCdiDiBvIMxITDVRcZ2l0nfqD9fg9uxRd5U+X/zFOIjiiUc0731Wod7g26gKTLFotCcxa7/IXzySy56wdTFuNxaySs1tXi0oWH/cscnuGzWcShBjGNIp/4N4YJZxY="),o(B,"title","Open in our Online Editor"),ae.a=null,o(yt,"class","language-js"),o(g,"class","remark-container tip"),o(ct,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS8FETUg3oQBAUP68CyRh2UtXQZOkb/u9XBUC8h7+UlX1pQzoFoIbcaQUBuVFWxfbN0juGTsNQVi30rS0m5R0V4JOXpoG44GH5cSR6p9iXrB283yDJA4OCirkCkLRQaxITD1RqNfteJH2i/34Pf4ou8qYt/5ilGRxTLuaD7arWO9wZdQNJli8ZYztLcGuvnHnV2tw+mPKbjj5WxxtaLS5cf9l9zeMbnZgmHBsQ0SUIWXuGvaLM="),o(E,"title","Open in our Online Editor"),pe.a=null,o(Pt,"class","language-js"),o(v,"class","remark-container tip"),o(xt,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdTk0LgkAQ/SvLnAxELeiyt+wgHYKgoIMruOhUguwuuyMUsv+9NUGqyzDvY96bEaQxwEdodIvAoemlc+z42hnD8EmoWsfCPgolqLEoCc8kLZ3kHaPVhxVkkQar2CJMrBfKg4/BBOyAlyN0LfB1DDfdt2gPM/gpXe6X4gl8NRdD9995CdaEwrh29MjzfciLZoOgutCMNCsH21cPIuN4mqpOTdE6cVimk5DUs321PB3DM/y2zWJ4Ad9kma/8G3KIaDg="),o(H,"title","Open in our Online Editor"),ue.a=null,o(Bt,"class","language-js"),o(h,"class","remark-container tip"),o(vt,"class","remark-container__title"),o(O,"target","_blank"),o(O,"href","/editor#eNpdT8GKwjAQ/ZUwFxVKWxe8BDyoB9nDLsIueGgKxnZcAyUJyZRVSv7d1EpRL8O8N2/em+lAWgu8g8rUCByqRnrPvq4raxleCHXtWew7oQVVDiXhD0lHO/mH09mdFeSQWqfZOOjZIHSAkICN2AMvOlA18HkCJ9PU6D4H8BI67o/BPXhK3rbqPfM3SlOKZa/ovF5vot90EAg6bA0jw4rWNcszkfU8y7TSvbVJPZbfj37i2T8evSIssqgt08PgMBv/SOASz13kCVyBf+R5KMMNo2VvYQ=="),o(O,"title","Open in our Online Editor"),xe.a=null,o(Et,"class","language-js"),o(m,"class","remark-container tip")},m(t,n){a(t,C,n),a(t,It,n),a(t,z,n),a(t,$t,n),a(t,S,n),a(t,Lt,n),a(t,U,n),a(t,bt,n),a(t,G,n),a(t,Dt,n),a(t,V,n),a(t,zt,n),a(t,R,n),a(t,Ut,n),a(t,d,n),c(d,Z),I(Q,d,null),c(d,w),c(d,mt),Gt.m(pn,mt),a(t,Vt,n),a(t,W,n),a(t,Rt,n),a(t,K,n),a(t,Zt,n),a(t,k,n),c(k,N),I(q,k,null),c(k,_),c(k,Ct),Qt.m(rn,Ct),a(t,Wt,n),a(t,X,n),a(t,Kt,n),a(t,Y,n),a(t,Nt,n),a(t,x,n),c(x,J),I(F,x,null),c(x,y),c(x,wt),qt.m(cn,wt),a(t,Xt,n),a(t,tt,n),a(t,Yt,n),a(t,et,n),a(t,Jt,n),a(t,f,n),c(f,nt),I(at,f,null),c(f,P),c(f,_t),Ft.m(un,_t),a(t,te,n),a(t,st,n),a(t,ee,n),a(t,lt,n),a(t,ne,n),a(t,g,n),c(g,ot),I(pt,g,null),c(g,B),c(g,yt),ae.m(dn,yt),a(t,se,n),a(t,it,n),a(t,le,n),a(t,rt,n),a(t,oe,n),a(t,v,n),c(v,ct),I(ut,v,null),c(v,E),c(v,Pt),pe.m(kn,Pt),a(t,ie,n),a(t,dt,n),a(t,re,n),a(t,kt,n),a(t,ce,n),a(t,h,n),c(h,xt),I(ft,h,null),c(h,H),c(h,Bt),ue.m(xn,Bt),a(t,de,n),a(t,gt,n),a(t,ke,n),a(t,m,n),c(m,vt),I(ht,m,null),c(m,O),c(m,Et),xe.m(fn,Et),fe=!0},p:vn,i(t){fe||($(Q.$$.fragment,t),$(q.$$.fragment,t),$(F.$$.fragment,t),$(at.$$.fragment,t),$(pt.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(ht.$$.fragment,t),fe=!0)},o(t){L(Q.$$.fragment,t),L(q.$$.fragment,t),L(F.$$.fragment,t),L(at.$$.fragment,t),L(pt.$$.fragment,t),L(ut.$$.fragment,t),L(ft.$$.fragment,t),L(ht.$$.fragment,t),fe=!1},d(t){t&&(e(C),e(It),e(z),e($t),e(S),e(Lt),e(U),e(bt),e(G),e(Dt),e(V),e(zt),e(R),e(Ut),e(d),e(Vt),e(W),e(Rt),e(K),e(Zt),e(k),e(Wt),e(X),e(Kt),e(Y),e(Nt),e(x),e(Xt),e(tt),e(Yt),e(et),e(Jt),e(f),e(te),e(st),e(ee),e(lt),e(ne),e(g),e(se),e(it),e(le),e(rt),e(oe),e(v),e(ie),e(dt),e(re),e(kt),e(ce),e(h),e(de),e(gt),e(ke),e(m)),b(Q),b(q),b(F),b(at),b(pt),b(ut),b(ft),b(ht)}}}class Pn extends hn{constructor(C){super(),mn(this,C,null,Cn,gn,{})}}export{Pn as component};
