import{s as on,n as pn}from"../chunks/scheduler.B0TnBjPs.js";import{S as cn,i as ln,e as s,s as l,c as vt,H as Ut,a as o,g as p,b as i,d as R,f as xt,h as n,n as Ht,o as c,j as a,p as u,m as wt,t as Ct,k as yt,l as Tt}from"../chunks/index.Cnh3HYw3.js";import{V as _t}from"../chunks/ViewApp.BajIxHdc.js";function un(nn){let h,Mt="<code>Updater</code>",Q,y,St="On this page you find the documentation for the GUI Component <code>Updater</code>.",Z,x,Pt='<div class="remark-container__title">Note!</div><p><code>Updater</code> is not an ordinary GUI component. It can be created the same way as a GUI component, but it is not part of the GUI itself. Instead, it is used to dynamically create a child component, and it is the child component that is part of the GUI. So you can&#39;t call configuration methods like <code>.size()</code> or <code>.backgroundColor()</code> on the <code>Updater</code> component. Do that on the child component it creates instead.</p>',K,T,It="Introduction",tt,_,Lt='By default, the GUI can only be changed by taking the user to another page (including to the same page the user currently is on), such as when the user clicks on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a>. But, with the <code>Updater</code> component, you can update a part of the GUI on the current page whenever you want, without taking the user to another page.',nt,f,U,bt="Example",B,Gt='Example showing what the <code>Updater</code> component can do (in this case updating a <a href="/documentation/text/" title="Open the documentation for Text.">Text</a> component to show the current time every second).',H,et,M,Vt="<code>childCreator()</code> - Specifying the GUI",at,S,Et="Use the configuration method <code>childCreator()</code> to tell the <code>Updater</code> component how it should create the part of the GUI it is responsible for. Pass it a function that creates and returns a GUI component that represent that part of the GUI.",st,P,jt="The function you pass to <code>childCreator()</code> will be called immediately when the user comes to the page, but it can also be called at later points in time to create a new version of the GUI for that part.",ot,r,I,$t="Example",D,At="In this example, the method passed to <code>childCreator()</code> is only called when the user directly comes to to the page, so the usefulness of the <code>Updater</code> component is not shown, but it demonstrated how one can use <code>childCreator()</code>.",L,m,Ot="Open in Online Editor",F,pt,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Updater<span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingClock<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ct,b,Rt="<code>interval()</code> - Setting the interval",lt,G,Bt="Use the configuration method <code>interval()</code> to tell the <code>Updater</code> component how often it should update the part of the GUI it is responsible for. Pass it the time as the number of milliseconds between the updates.",it,d,V,Dt="Example",z,Ft="In this example, the method passed to <code>childCreator()</code> will be called when the user comes to the page, and then also every second after that.",E,g,zt="Open in Online Editor",N,ut,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Updater<span class="token punctuation">.</span><span class="token function">interval</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingClock<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,rt,j,Nt="<code>name()</code> - Manually triggering updates",dt,$,qt="Use the configuration method <code>name()</code> to give your <code>Updater</code> component instance a name. You can then call the function <code>runUpdater()</code> and pass it the same name whenever you want the <code>Updater</code> to update its GUI.",kt,w,Xt='<div class="remark-container__title">Warning!</div><p>Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can implement the same functionality by loading the page anew, that is usually better to do than triggering your own manual updates.</p>',ht,C,Yt='<div class="remark-container__title">Note!</div><p>A click on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> does by default take the user to the next page. If you want a part of the GUI to be updated on the current page instead, you must call the configuration method <code>.stay()</code> on the <code>Button</code> to not take the user to the next page.</p>',ft,k,A,Wt="Example",q,Jt="In this example, the displayed time is only updated when you click on the <code>Button</code> without reloading the entire page.",O,v,Qt="Open in Online Editor",X,mt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Updater<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingClock<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleButtonClick<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleButtonClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,gt;return H=new _t({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.interval(1000).childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}`,x:150,y:200}]}}}),L=new _t({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}`,x:150,y:200}]}}}),E=new _t({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.interval(1000).childCreator(p.createTextShowingClock),
			Space,
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
}`,x:150,y:200}]}}}),O=new _t({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.name(\`refresh\`).childCreator(p.createTextShowingClock),
			Space,
			Button.text(\`Refresh\`).stay().onClick(p.handleButtonClick)
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
	handleButtonClick(){
		runUpdater(\`refresh\`)
	}
	
}`,x:150,y:200}]}}}),{c(){h=s("h1"),h.innerHTML=Mt,Q=l(),y=s("p"),y.innerHTML=St,Z=l(),x=s("div"),x.innerHTML=Pt,K=l(),T=s("h2"),T.textContent=It,tt=l(),_=s("p"),_.innerHTML=Lt,nt=l(),f=s("div"),U=s("div"),U.textContent=bt,B=s("p"),B.innerHTML=Gt,vt(H.$$.fragment),et=l(),M=s("h2"),M.innerHTML=Vt,at=l(),S=s("p"),S.innerHTML=Et,st=l(),P=s("p"),P.innerHTML=jt,ot=l(),r=s("div"),I=s("div"),I.textContent=$t,D=s("p"),D.innerHTML=At,vt(L.$$.fragment),m=s("a"),m.textContent=Ot,F=s("pre"),pt=new Ut(!1),ct=l(),b=s("h2"),b.innerHTML=Rt,lt=l(),G=s("p"),G.innerHTML=Bt,it=l(),d=s("div"),V=s("div"),V.textContent=Dt,z=s("p"),z.innerHTML=Ft,vt(E.$$.fragment),g=s("a"),g.textContent=zt,N=s("pre"),ut=new Ut(!1),rt=l(),j=s("h2"),j.innerHTML=Nt,dt=l(),$=s("p"),$.innerHTML=qt,kt=l(),w=s("div"),w.innerHTML=Xt,ht=l(),C=s("div"),C.innerHTML=Yt,ft=l(),k=s("div"),A=s("div"),A.textContent=Wt,q=s("p"),q.innerHTML=Jt,vt(O.$$.fragment),v=s("a"),v.textContent=Qt,X=s("pre"),mt=new Ut(!1),this.h()},l(t){h=o(t,"H1",{"data-svelte-h":!0}),p(h)!=="svelte-ge2xi4"&&(h.innerHTML=Mt),Q=i(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-bw2ddz"&&(y.innerHTML=St),Z=i(t),x=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-1e44hwf"&&(x.innerHTML=Pt),K=i(t),T=o(t,"H2",{"data-svelte-h":!0}),p(T)!=="svelte-1ukekoe"&&(T.textContent=It),tt=i(t),_=o(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-sr73ty"&&(_.innerHTML=Lt),nt=i(t),f=o(t,"DIV",{class:!0});var e=R(f);U=o(e,"DIV",{class:!0,"data-svelte-h":!0}),p(U)!=="svelte-1llzxwj"&&(U.textContent=bt),B=o(e,"P",{"data-svelte-h":!0}),p(B)!=="svelte-1ujlb4y"&&(B.innerHTML=Gt),xt(H.$$.fragment,e),e.forEach(n),et=i(t),M=o(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-1m9p808"&&(M.innerHTML=Vt),at=i(t),S=o(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1evappk"&&(S.innerHTML=Et),st=i(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1ouxqgz"&&(P.innerHTML=jt),ot=i(t),r=o(t,"DIV",{class:!0});var Y=R(r);I=o(Y,"DIV",{class:!0,"data-svelte-h":!0}),p(I)!=="svelte-1llzxwj"&&(I.textContent=$t),D=o(Y,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1yxvpu6"&&(D.innerHTML=At),xt(L.$$.fragment,Y),m=o(Y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(m)!=="svelte-yoek7l"&&(m.textContent=Ot),F=o(Y,"PRE",{class:!0});var Zt=R(F);pt=Ht(Zt,!1),Zt.forEach(n),Y.forEach(n),ct=i(t),b=o(t,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-tet9ka"&&(b.innerHTML=Rt),lt=i(t),G=o(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-1mnjuu"&&(G.innerHTML=Bt),it=i(t),d=o(t,"DIV",{class:!0});var W=R(d);V=o(W,"DIV",{class:!0,"data-svelte-h":!0}),p(V)!=="svelte-1llzxwj"&&(V.textContent=Dt),z=o(W,"P",{"data-svelte-h":!0}),p(z)!=="svelte-crks81"&&(z.innerHTML=Ft),xt(E.$$.fragment,W),g=o(W,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-1sc328x"&&(g.textContent=zt),N=o(W,"PRE",{class:!0});var Kt=R(N);ut=Ht(Kt,!1),Kt.forEach(n),W.forEach(n),rt=i(t),j=o(t,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-blo3ln"&&(j.innerHTML=Nt),dt=i(t),$=o(t,"P",{"data-svelte-h":!0}),p($)!=="svelte-vzhwjm"&&($.innerHTML=qt),kt=i(t),w=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(w)!=="svelte-4z2vcj"&&(w.innerHTML=Xt),ht=i(t),C=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-185ng8w"&&(C.innerHTML=Yt),ft=i(t),k=o(t,"DIV",{class:!0});var J=R(k);A=o(J,"DIV",{class:!0,"data-svelte-h":!0}),p(A)!=="svelte-1llzxwj"&&(A.textContent=Wt),q=o(J,"P",{"data-svelte-h":!0}),p(q)!=="svelte-113i3cn"&&(q.innerHTML=Jt),xt(O.$$.fragment,J),v=o(J,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-1pjp57"&&(v.textContent=Qt),X=o(J,"PRE",{class:!0});var tn=R(X);mt=Ht(tn,!1),tn.forEach(n),J.forEach(n),this.h()},h(){c(x,"class","remark-container warning"),c(U,"class","remark-container__title"),c(f,"class","remark-container tip"),c(I,"class","remark-container__title"),c(m,"target","_blank"),c(m,"href","/editor#eNptUE1LxDAQ/SthTi2EUgUvBQ+yB/GgiF1P1kNIxm6wJiGZpbuU/HdTU0tdvAx5M+9jJhMI56CZQFqF0IAcRAjs8XznHMMToVGBpffUmY6kR0HYkvD0LHosyp9uRx7p6A1bB3M3diZC5OASDtC8TaAVNFccPuyg0D9k8Cd01a/BM8gZa/r9UV/mvtgxVPKgB+XRFHnUUeuERP6LXp1KYp9pu9nJ+sJV2XOf8tqDHbXpd4OVnyX/z6Rcztpuc6lcV8tVWhOIGTuyW7bXX1gFpCc7FuWWtFwxW1WUSpH4VY+0GG64S3gEDqf0fTc1hzM013Ud3+M3LFmm9A=="),c(m,"title","Open in our Online Editor"),pt.a=null,c(F,"class","language-js"),c(r,"class","remark-container tip"),c(V,"class","remark-container__title"),c(g,"target","_blank"),c(g,"href","/editor#eNptkE1LxDAQhv9KmFMLIWQFLwUPsgfxoIhdT9ZDSMZusCYhydpdSv67qallXbwMeefjfWYygXAOmgmkVQgNyEGEQB5Ot84RPEY0KpD8njrTRelRRGyj8PFJ9FjVP9kueowHb8hamLOpMwkSBZd1gOZ1Aq2g2VB4t4NCf1/EH+g6v4JnURgr/e6gL7nPdgxM7vWgPJqqlLrYOiGR/qoXp/KwZ9rk+CWGasM5r8vUdja2vnKsIHYZ3+7tqE2/Haz8qOl/nvVy5flyl5PrpiVKa0Ikxo7khuz0J7KA8dGOVX3etBw1W7GYQ5X7WY9xMTzrXeAJKBzzb15zCidorjhPb+kbYf6rmQ=="),c(g,"title","Open in our Online Editor"),ut.a=null,c(N,"class","language-js"),c(d,"class","remark-container tip"),c(w,"class","remark-container warning"),c(C,"class","remark-container warning"),c(A,"class","remark-container__title"),c(v,"target","_blank"),c(v,"href","/editor#eNptkcFLwzAUxv+V8k4NlDIFLwUPuoN4UGSbJyssJG9rWZeE5JVulP7vpkuNdXoJeS/f+37Jlx64MVD0ILREKEA03Lnk5fxgTIInQiVd4vd9qUoSFjnhmrilN77HlF26JVmk1qokHozdoVQDDBkYXzsoPnqoJRQ3Gex0I9E+h+IXNM5H8FgERqQ/tfU1d6U7l4uqbqRFlYajktaGC8y+q3cj/bDNFT9iurW4s+iqLQtjy9FZ29TkgbHx/HWlu1rtl40WB5b9b/rYEmmVk5en21X0dMTPKcu1Wja1OHjXiivZYFBfeiw4sCmo+fuu2fGxYRVaOUqU7pL7ZFMfMXdIr7pL2Vw05TJahct5fb5Hmgxn2gj/c8WfkFs1hTfLbTY7QAYn/5l3iwzOUNwuFsPn8AV8UNyz"),c(v,"title","Open in our Online Editor"),mt.a=null,c(X,"class","language-js"),c(k,"class","remark-container tip")},m(t,e){a(t,h,e),a(t,Q,e),a(t,y,e),a(t,Z,e),a(t,x,e),a(t,K,e),a(t,T,e),a(t,tt,e),a(t,_,e),a(t,nt,e),a(t,f,e),u(f,U),u(f,B),wt(H,f,null),a(t,et,e),a(t,M,e),a(t,at,e),a(t,S,e),a(t,st,e),a(t,P,e),a(t,ot,e),a(t,r,e),u(r,I),u(r,D),wt(L,r,null),u(r,m),u(r,F),pt.m(en,F),a(t,ct,e),a(t,b,e),a(t,lt,e),a(t,G,e),a(t,it,e),a(t,d,e),u(d,V),u(d,z),wt(E,d,null),u(d,g),u(d,N),ut.m(an,N),a(t,rt,e),a(t,j,e),a(t,dt,e),a(t,$,e),a(t,kt,e),a(t,w,e),a(t,ht,e),a(t,C,e),a(t,ft,e),a(t,k,e),u(k,A),u(k,q),wt(O,k,null),u(k,v),u(k,X),mt.m(sn,X),gt=!0},p:pn,i(t){gt||(Ct(H.$$.fragment,t),Ct(L.$$.fragment,t),Ct(E.$$.fragment,t),Ct(O.$$.fragment,t),gt=!0)},o(t){yt(H.$$.fragment,t),yt(L.$$.fragment,t),yt(E.$$.fragment,t),yt(O.$$.fragment,t),gt=!1},d(t){t&&(n(h),n(Q),n(y),n(Z),n(x),n(K),n(T),n(tt),n(_),n(nt),n(f),n(et),n(M),n(at),n(S),n(st),n(P),n(ot),n(r),n(ct),n(b),n(lt),n(G),n(it),n(d),n(rt),n(j),n(dt),n($),n(kt),n(w),n(ht),n(C),n(ft),n(k)),Tt(H),Tt(L),Tt(E),Tt(O)}}}class hn extends cn{constructor(h){super(),ln(this,h,null,un,on,{})}}export{hn as component};
