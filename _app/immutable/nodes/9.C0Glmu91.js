import{s as kn,n as xn}from"../chunks/scheduler.B0TnBjPs.js";import{S as gn,i as fn,e as s,s as r,c as O,H as T,a as l,g as p,b as i,d as u,f as M,n as j,h as e,o,j as a,p as c,m as A,t as $,k as I,l as b}from"../chunks/index.Cnh3HYw3.js";import{V as L}from"../chunks/ViewApp.9sx5twVU.js";function hn(an){let C,xe="BBCode",At,z,ge="On this page you find the documentation for how to format text in your BagaWork apps using BBCode.",$t,D,fe="Introduction",It,U,he='Various GUI components display text on the screen, such as the <a href="/documentation/text/" title="Open the documentation for Text.">Text</a> component and the <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> component (using the configuration method <code>textWithBBCod()</code> instead of <code>text()</code>). That text can contain BBCode, which are instructions about how the text should be formatted. You will find the BBCode tags BagaWork supports on this page.',bt,G,ve="[b] - Making text bold",Lt,V,me="To make text display as bold, surround the text with <code>[b]</code> and <code>[/b]</code>.",zt,d,R,Ce="Example",Z,w,we="Open in Online Editor",vt,Dt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [b]how are[/b] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ut,Q,_e="[i] - Making text italic",Gt,W,ye="To make text display as italic, surround the text with <code>[i]</code> and <code>[/i]</code>.",Vt,k,K,Pe="Example",N,_,Be="Open in Online Editor",mt,Rt,ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [i]how are[/i] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zt,q,Ee="[u] - Making text underlined",Qt,Y,He="To make text display as underlined, surround the text with <code>[u]</code> and <code>[/u]</code>.",Wt,x,X,Se="Example",J,y,Oe="Open in Online Editor",Ct,Kt,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [u]how are[/u] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Nt,F,Te="[s] - Making text strikedhroughed",qt,tt,Me="To make text display as strikethoughed, surround the text with <code>[s]</code> and <code>[/s]</code>.",Yt,g,et,je="Example",nt,P,Ae="Open in Online Editor",wt,Xt,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [s]how are[/s] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jt,at,$e="[size] - Changing the size of the text",Ft,st,Ie="To change the size of the text, surround the text with <code>[size=THE_SIZE]</code> and <code>[/size]</code>, where <code>THE_SIZE</code> is the number of millimeters tall the text should be.",te,f,lt,be="Example",ot,B,Le="Open in Online Editor",_t,ee,rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [size=15]how are[/size] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ne,pt,ze="[color] - Changing the color of the text",ae,rt,De="To change the color of the text, surround the text with <code>[color=THE_COLOR]</code> and <code>[/color]</code>, where <code>THE_COLOR</code> is the english name of the color the text should have, such as <code>red</code> or <code>blue</code>.",se,h,it,Ue="Example",ct,E,Ge="Open in Online Editor",yt,le,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [color=red]how are[/color] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,oe,ut,Ve="[url] - Making text a URL",pe,dt,Re="To make text display as a URL the user can click on to open the webpage the URL leads to in a web browser, surround the text with <code>[url]</code> and <code>[/url]</code>.",re,v,kt,Ze="Example",xt,H,Qe="Open in Online Editor",Pt,ie,un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url]https://nintendo.se[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ce,gt,We="If you want the URL to display another text, surround the text with <code>[url=THE_URL]</code> and <code>[/url]</code>.",ue,m,ft,Ke="Example",ht,S,Ne="Open in Online Editor",Bt,de,dn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url=https://nintendo.se]Nintendo's website[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ke;return Z=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [b]how are[/b] you?\`
		)
	}
}`,x:150,y:200}]}}}),N=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [i]how are[/i] you?\`
		)
	}
}`,x:150,y:200}]}}}),J=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [u]how are[/u] you?\`
		)
	}
}`,x:150,y:200}]}}}),nt=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [s]how are[/s] you?\`
		)
	}
}`,x:150,y:200}]}}}),ot=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [size=15]how are[/size] you?\`
		)
	}
}`,x:150,y:200}]}}}),ct=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [color=red]how are[/color] you?\`
		)
	}
}`,x:150,y:200}]}}}),xt=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url]https://nintendo.se[/url].\`
		)
	}
}`,x:150,y:200}]}}}),ht=new L({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url=https://nintendo.se]Nintendo's website[/url].\`
		)
	}
}`,x:150,y:200}]}}}),{c(){C=s("h1"),C.textContent=xe,At=r(),z=s("p"),z.textContent=ge,$t=r(),D=s("h2"),D.textContent=fe,It=r(),U=s("p"),U.innerHTML=he,bt=r(),G=s("h2"),G.textContent=ve,Lt=r(),V=s("p"),V.innerHTML=me,zt=r(),d=s("div"),R=s("div"),R.textContent=Ce,O(Z.$$.fragment),w=s("a"),w.textContent=we,vt=s("pre"),Dt=new T(!1),Ut=r(),Q=s("h2"),Q.textContent=_e,Gt=r(),W=s("p"),W.innerHTML=ye,Vt=r(),k=s("div"),K=s("div"),K.textContent=Pe,O(N.$$.fragment),_=s("a"),_.textContent=Be,mt=s("pre"),Rt=new T(!1),Zt=r(),q=s("h2"),q.textContent=Ee,Qt=r(),Y=s("p"),Y.innerHTML=He,Wt=r(),x=s("div"),X=s("div"),X.textContent=Se,O(J.$$.fragment),y=s("a"),y.textContent=Oe,Ct=s("pre"),Kt=new T(!1),Nt=r(),F=s("h2"),F.textContent=Te,qt=r(),tt=s("p"),tt.innerHTML=Me,Yt=r(),g=s("div"),et=s("div"),et.textContent=je,O(nt.$$.fragment),P=s("a"),P.textContent=Ae,wt=s("pre"),Xt=new T(!1),Jt=r(),at=s("h2"),at.textContent=$e,Ft=r(),st=s("p"),st.innerHTML=Ie,te=r(),f=s("div"),lt=s("div"),lt.textContent=be,O(ot.$$.fragment),B=s("a"),B.textContent=Le,_t=s("pre"),ee=new T(!1),ne=r(),pt=s("h2"),pt.textContent=ze,ae=r(),rt=s("p"),rt.innerHTML=De,se=r(),h=s("div"),it=s("div"),it.textContent=Ue,O(ct.$$.fragment),E=s("a"),E.textContent=Ge,yt=s("pre"),le=new T(!1),oe=r(),ut=s("h2"),ut.textContent=Ve,pe=r(),dt=s("p"),dt.innerHTML=Re,re=r(),v=s("div"),kt=s("div"),kt.textContent=Ze,O(xt.$$.fragment),H=s("a"),H.textContent=Qe,Pt=s("pre"),ie=new T(!1),ce=r(),gt=s("p"),gt.innerHTML=We,ue=r(),m=s("div"),ft=s("div"),ft.textContent=Ke,O(ht.$$.fragment),S=s("a"),S.textContent=Ne,Bt=s("pre"),de=new T(!1),this.h()},l(t){C=l(t,"H1",{"data-svelte-h":!0}),p(C)!=="svelte-ylq00h"&&(C.textContent=xe),At=i(t),z=l(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1b7h4us"&&(z.textContent=ge),$t=i(t),D=l(t,"H2",{"data-svelte-h":!0}),p(D)!=="svelte-1ukekoe"&&(D.textContent=fe),It=i(t),U=l(t,"P",{"data-svelte-h":!0}),p(U)!=="svelte-1w24ztl"&&(U.innerHTML=he),bt=i(t),G=l(t,"H2",{"data-svelte-h":!0}),p(G)!=="svelte-zvigk0"&&(G.textContent=ve),Lt=i(t),V=l(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-13jqkcj"&&(V.innerHTML=me),zt=i(t),d=l(t,"DIV",{class:!0});var n=u(d);R=l(n,"DIV",{class:!0,"data-svelte-h":!0}),p(R)!=="svelte-1llzxwj"&&(R.textContent=Ce),M(Z.$$.fragment,n),w=l(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(w)!=="svelte-iz6z37"&&(w.textContent=we),vt=l(n,"PRE",{class:!0});var qe=u(vt);Dt=j(qe,!1),qe.forEach(e),n.forEach(e),Ut=i(t),Q=l(t,"H2",{"data-svelte-h":!0}),p(Q)!=="svelte-1y5276y"&&(Q.textContent=_e),Gt=i(t),W=l(t,"P",{"data-svelte-h":!0}),p(W)!=="svelte-10w7ldy"&&(W.innerHTML=ye),Vt=i(t),k=l(t,"DIV",{class:!0});var Et=u(k);K=l(Et,"DIV",{class:!0,"data-svelte-h":!0}),p(K)!=="svelte-1llzxwj"&&(K.textContent=Pe),M(N.$$.fragment,Et),_=l(Et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(_)!=="svelte-lb50r1"&&(_.textContent=Be),mt=l(Et,"PRE",{class:!0});var Ye=u(mt);Rt=j(Ye,!1),Ye.forEach(e),Et.forEach(e),Zt=i(t),q=l(t,"H2",{"data-svelte-h":!0}),p(q)!=="svelte-nz0xvy"&&(q.textContent=Ee),Qt=i(t),Y=l(t,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-14vvz32"&&(Y.innerHTML=He),Wt=i(t),x=l(t,"DIV",{class:!0});var Ht=u(x);X=l(Ht,"DIV",{class:!0,"data-svelte-h":!0}),p(X)!=="svelte-1llzxwj"&&(X.textContent=Se),M(J.$$.fragment,Ht),y=l(Ht,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(y)!=="svelte-1ob9uvx"&&(y.textContent=Oe),Ct=l(Ht,"PRE",{class:!0});var Xe=u(Ct);Kt=j(Xe,!1),Xe.forEach(e),Ht.forEach(e),Nt=i(t),F=l(t,"H2",{"data-svelte-h":!0}),p(F)!=="svelte-gxnws6"&&(F.textContent=Te),qt=i(t),tt=l(t,"P",{"data-svelte-h":!0}),p(tt)!=="svelte-1dd4dd6"&&(tt.innerHTML=Me),Yt=i(t),g=l(t,"DIV",{class:!0});var St=u(g);et=l(St,"DIV",{class:!0,"data-svelte-h":!0}),p(et)!=="svelte-1llzxwj"&&(et.textContent=je),M(nt.$$.fragment,St),P=l(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(P)!=="svelte-10lw5un"&&(P.textContent=Ae),wt=l(St,"PRE",{class:!0});var Je=u(wt);Xt=j(Je,!1),Je.forEach(e),St.forEach(e),Jt=i(t),at=l(t,"H2",{"data-svelte-h":!0}),p(at)!=="svelte-1nytq7i"&&(at.textContent=$e),Ft=i(t),st=l(t,"P",{"data-svelte-h":!0}),p(st)!=="svelte-6xhjuu"&&(st.innerHTML=Ie),te=i(t),f=l(t,"DIV",{class:!0});var Ot=u(f);lt=l(Ot,"DIV",{class:!0,"data-svelte-h":!0}),p(lt)!=="svelte-1llzxwj"&&(lt.textContent=be),M(ot.$$.fragment,Ot),B=l(Ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(B)!=="svelte-16luetu"&&(B.textContent=Le),_t=l(Ot,"PRE",{class:!0});var Fe=u(_t);ee=j(Fe,!1),Fe.forEach(e),Ot.forEach(e),ne=i(t),pt=l(t,"H2",{"data-svelte-h":!0}),p(pt)!=="svelte-1tiusco"&&(pt.textContent=ze),ae=i(t),rt=l(t,"P",{"data-svelte-h":!0}),p(rt)!=="svelte-1viqgqi"&&(rt.innerHTML=De),se=i(t),h=l(t,"DIV",{class:!0});var Tt=u(h);it=l(Tt,"DIV",{class:!0,"data-svelte-h":!0}),p(it)!=="svelte-1llzxwj"&&(it.textContent=Ue),M(ct.$$.fragment,Tt),E=l(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(E)!=="svelte-rv4wgr"&&(E.textContent=Ge),yt=l(Tt,"PRE",{class:!0});var tn=u(yt);le=j(tn,!1),tn.forEach(e),Tt.forEach(e),oe=i(t),ut=l(t,"H2",{"data-svelte-h":!0}),p(ut)!=="svelte-oicxmm"&&(ut.textContent=Ve),pe=i(t),dt=l(t,"P",{"data-svelte-h":!0}),p(dt)!=="svelte-dzldro"&&(dt.innerHTML=Re),re=i(t),v=l(t,"DIV",{class:!0});var Mt=u(v);kt=l(Mt,"DIV",{class:!0,"data-svelte-h":!0}),p(kt)!=="svelte-1llzxwj"&&(kt.textContent=Ze),M(xt.$$.fragment,Mt),H=l(Mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(H)!=="svelte-4408ou"&&(H.textContent=Qe),Pt=l(Mt,"PRE",{class:!0});var en=u(Pt);ie=j(en,!1),en.forEach(e),Mt.forEach(e),ce=i(t),gt=l(t,"P",{"data-svelte-h":!0}),p(gt)!=="svelte-1o8lgoj"&&(gt.innerHTML=We),ue=i(t),m=l(t,"DIV",{class:!0});var jt=u(m);ft=l(jt,"DIV",{class:!0,"data-svelte-h":!0}),p(ft)!=="svelte-1llzxwj"&&(ft.textContent=Ke),M(ht.$$.fragment,jt),S=l(jt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(S)!=="svelte-12yk37r"&&(S.textContent=Ne),Bt=l(jt,"PRE",{class:!0});var nn=u(Bt);de=j(nn,!1),nn.forEach(e),jt.forEach(e),this.h()},h(){o(R,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLOg3oQBAUP68BuizoYa+ky3Bj973YOhnoJeS8v+dKBMgZEB6nOEASkhaoqdmw3xjBsCMusYr7vZCkptagIz6QsndQDJ9OPK8ki1bZk46B3nSwdOA7G6wpE1EGegVhwuOsiQ3sYxA903B/Bvfgi7+r8n3nx0Rn5cs3pGYZbf28yBCTd9lgUmrMoiZ/6xZTFaJ7ErNX1+jZkpuOnHBr/0Crg0IJYBoGL3Rvgq2PB"),o(w,"title","Open in our Online Editor"),Dt.a=null,o(vt,"class","language-js"),o(d,"class","remark-container tip"),o(K,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRVcYa+kydIz+dzsHQ72EvJeXfOlAWQuig8zkCAKyUtU1O7Ubaxm+CKu8ZqHvZCUpc6gIL6QcndUDJ9OPK8khNa5i46B3vaw8eA426BpE3IHOQSw43E2ZozsO4gc67o/gXnyR943+Z15DdEah3DQV2+0u3JsMAUnpAcvScBbrpDBPphzGc52w1jTrdMhMx085vMJDq4hDC2IZRT7xb+NSY88="),o(_,"title","Open in our Online Editor"),Rt.a=null,o(mt,"class","language-js"),o(k,"class","remark-container tip"),o(X,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRTcYa+lSdIz+dzsHQ72EvJeXfOlAGQOig0znCAKySjUNO7UbYxi+COu8YaHvZC0ps6gIL6QsndUDJ9OPK8kiOVuzcdC7XtYePAcTdAMi7qDMQSw43HWVoz0O4gc67o/gXnyR9678Z15DdEah3EoqtttduDcZApLSA1aV5ix2SaGfTFmM5y5hrXbrdMhMx085vMJDq4hDC2IZRT7xb+feY+c="),o(y,"title","Open in our Online Editor"),Kt.a=null,o(Ct,"class","language-js"),o(x,"class","remark-container tip"),o(et,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS89CLqQT0IgoKHdbCyRTcYa2kzdIz+dzsHQ72EvJeXfOlAGQOig0znCAKySjnHTu3GGIYvwjp3LPSdrCVlFhXhhZSls3rgZPpxJVmkxtZsHPSul7UHz8EE7UDEHZQ5iAWHu65ytMdB/EDH/RHciy/yvin/mdcQnVEot5KK7XYX7k2GgKT0gFWlOYtdUugnUxbjuUtYq5t1OmSm46ccXuGhVcShBbGMIp/4N+ccY+M="),o(P,"title","Open in our Online Editor"),Xt.a=null,o(wt,"class","language-js"),o(g,"class","remark-container tip"),o(lt,"class","remark-container__title"),o(B,"target","_blank"),o(B,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS8FETUg3oQBAUP68CyRR2MtbQZOkf/u52DoV5C3stLvjSgjAHRQKozBAFpoZxj+3ppDMMnYZk5FvpGlpJSi4rwSMrSQd1wMPy4kixSZUvWD1rXy9KD52CCdiDiBvIMxITDVRcZ2l0nfqD9fg9uxRd5U+X/zFOIjiiUc0731Wod7g26gKTLFotCcxa7/IXzySy56wdTFuNxaySs1tXi0oWH/cscnuGzWcShBjGNIp/4N4YJZxY="),o(B,"title","Open in our Online Editor"),ee.a=null,o(_t,"class","language-js"),o(f,"class","remark-container tip"),o(it,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjkELwjAMhf9KyUmh6BS8FETUg3oQBAUP68CyRh2UtXQZOkb/u9XBUC8h7+UlX1pQzoFoIbcaQUBuVFWxfbN0juGTsNQVi30rS0m5R0V4JOXpoG44GH5cSR6p9iXrB283yDJA4OCirkCkLRQaxITD1RqNfteJH2i/34Pf4ou8qYt/5ilGRxTLuaD7arWO9wZdQNJli8ZYztLcGuvnHnV2tw+mPKbjj5WxxtaLS5cf9l9zeMbnZgmHBsQ0SUIWXuGvaLM="),o(E,"title","Open in our Online Editor"),le.a=null,o(yt,"class","language-js"),o(h,"class","remark-container tip"),o(kt,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdTk0LgkAQ/SvLnAxELeiyt+wgHYKgoIMruOhUguwuuyMUsv+9NUGqyzDvY96bEaQxwEdodIvAoemlc+z42hnD8EmoWsfCPgolqLEoCc8kLZ3kHaPVhxVkkQar2CJMrBfKg4/BBOyAlyN0LfB1DDfdt2gPM/gpXe6X4gl8NRdD9995CdaEwrh29MjzfciLZoOgutCMNCsH21cPIuN4mqpOTdE6cVimk5DUs321PB3DM/y2zWJ4Ad9kma/8G3KIaDg="),o(H,"title","Open in our Online Editor"),ie.a=null,o(Pt,"class","language-js"),o(v,"class","remark-container tip"),o(ft,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNpdT8GKwjAQ/ZUwFxVKWxe8BDyoB9nDLsIueGgKxnZcAyUJyZRVSv7d1EpRL8O8N2/em+lAWgu8g8rUCByqRnrPvq4raxleCHXtWew7oQVVDiXhD0lHO/mH09mdFeSQWqfZOOjZIHSAkICN2AMvOlA18HkCJ9PU6D4H8BI67o/BPXhK3rbqPfM3SlOKZa/ovF5vot90EAg6bA0jw4rWNcszkfU8y7TSvbVJPZbfj37i2T8evSIssqgt08PgMBv/SOASz13kCVyBf+R5KMMNo2VvYQ=="),o(S,"title","Open in our Online Editor"),de.a=null,o(Bt,"class","language-js"),o(m,"class","remark-container tip")},m(t,n){a(t,C,n),a(t,At,n),a(t,z,n),a(t,$t,n),a(t,D,n),a(t,It,n),a(t,U,n),a(t,bt,n),a(t,G,n),a(t,Lt,n),a(t,V,n),a(t,zt,n),a(t,d,n),c(d,R),A(Z,d,null),c(d,w),c(d,vt),Dt.m(sn,vt),a(t,Ut,n),a(t,Q,n),a(t,Gt,n),a(t,W,n),a(t,Vt,n),a(t,k,n),c(k,K),A(N,k,null),c(k,_),c(k,mt),Rt.m(ln,mt),a(t,Zt,n),a(t,q,n),a(t,Qt,n),a(t,Y,n),a(t,Wt,n),a(t,x,n),c(x,X),A(J,x,null),c(x,y),c(x,Ct),Kt.m(on,Ct),a(t,Nt,n),a(t,F,n),a(t,qt,n),a(t,tt,n),a(t,Yt,n),a(t,g,n),c(g,et),A(nt,g,null),c(g,P),c(g,wt),Xt.m(pn,wt),a(t,Jt,n),a(t,at,n),a(t,Ft,n),a(t,st,n),a(t,te,n),a(t,f,n),c(f,lt),A(ot,f,null),c(f,B),c(f,_t),ee.m(rn,_t),a(t,ne,n),a(t,pt,n),a(t,ae,n),a(t,rt,n),a(t,se,n),a(t,h,n),c(h,it),A(ct,h,null),c(h,E),c(h,yt),le.m(cn,yt),a(t,oe,n),a(t,ut,n),a(t,pe,n),a(t,dt,n),a(t,re,n),a(t,v,n),c(v,kt),A(xt,v,null),c(v,H),c(v,Pt),ie.m(un,Pt),a(t,ce,n),a(t,gt,n),a(t,ue,n),a(t,m,n),c(m,ft),A(ht,m,null),c(m,S),c(m,Bt),de.m(dn,Bt),ke=!0},p:xn,i(t){ke||($(Z.$$.fragment,t),$(N.$$.fragment,t),$(J.$$.fragment,t),$(nt.$$.fragment,t),$(ot.$$.fragment,t),$(ct.$$.fragment,t),$(xt.$$.fragment,t),$(ht.$$.fragment,t),ke=!0)},o(t){I(Z.$$.fragment,t),I(N.$$.fragment,t),I(J.$$.fragment,t),I(nt.$$.fragment,t),I(ot.$$.fragment,t),I(ct.$$.fragment,t),I(xt.$$.fragment,t),I(ht.$$.fragment,t),ke=!1},d(t){t&&(e(C),e(At),e(z),e($t),e(D),e(It),e(U),e(bt),e(G),e(Lt),e(V),e(zt),e(d),e(Ut),e(Q),e(Gt),e(W),e(Vt),e(k),e(Zt),e(q),e(Qt),e(Y),e(Wt),e(x),e(Nt),e(F),e(qt),e(tt),e(Yt),e(g),e(Jt),e(at),e(Ft),e(st),e(te),e(f),e(ne),e(pt),e(ae),e(rt),e(se),e(h),e(oe),e(ut),e(pe),e(dt),e(re),e(v),e(ce),e(gt),e(ue),e(m)),b(Z),b(N),b(J),b(nt),b(ot),b(ct),b(xt),b(ht)}}}class wn extends gn{constructor(C){super(),fn(this,C,null,hn,kn,{})}}export{wn as component};
