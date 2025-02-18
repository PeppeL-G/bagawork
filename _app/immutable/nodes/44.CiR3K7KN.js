import{s as on,n as pn}from"../chunks/scheduler.B0TnBjPs.js";import{S as cn,i as ln,e as s,s as l,c as vt,H as St,a as o,g as p,b as i,d as j,f as wt,h as n,n as Ut,o as c,j as a,p as u,m as xt,t as Ct,k as yt,l as Tt}from"../chunks/index.BXVnRmkj.js";import{V as _t}from"../chunks/ViewApp.qg7AIhJt.js";function un(nn){let h,Ht="<code>Updater</code>",Z,y,Mt="On this page you find the documentation for the GUI Component <code>Updater</code>.",J,w,Pt='<div class="remark-container__title">Note!</div><p><code>Updater</code> is not an ordinary GUI component. It can be created the same way as any other GUI component, but it is not part of the GUI itself. Instead, it is used to dynamically create a child component, and it is the child component that is part of the GUI. So you can&#39;t call configuration methods like <code>.grow()</code> or <code>.backgroundColor()</code> on the <code>Updater</code> component. Do that on the child component it creates instead.</p>',K,T,It="Introduction",tt,_,Lt='By default, the GUI can only be changed by taking the user to another page (including to the same page the user currently is on), such as when the user clicks on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a>. But, with the <code>Updater</code> component, you can update a part of the GUI on the current page whenever you want, without taking the user to another page.',nt,m,S,Gt="Example",A,bt='Example showing what the <code>Updater</code> component can do (in this case updating a <a href="/documentation/text/" title="Open the documentation for Text.">Text</a> component to show the current time every second).',U,et,H,Et="<code>childCreator()</code> - Specifying the GUI",at,M,Ot="Use the configuration method <code>childCreator()</code> to tell the <code>Updater</code> component how it should create the part of the GUI it is responsible for. Pass it a function that creates and returns a GUI component that represent that part of the GUI.",st,P,Vt="The function you pass to <code>childCreator()</code> will be called immediately when the user comes to the page, but it can also be called at later points in time to create a new version of the GUI for that part.",ot,r,I,Rt="Example",D,$t="In this example, the method passed to <code>childCreator()</code> is only called when the user directly comes to to the page, so the usefulness of the <code>Updater</code> component is not shown, but it demonstrates how one can use <code>childCreator()</code>.",L,f,Bt="Open in Online Editor",z,pt,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ct,G,jt="<code>interval()</code> - Setting the interval",lt,b,At="Use the configuration method <code>interval()</code> to tell the <code>Updater</code> component how often it should update the part of the GUI it is responsible for. Pass it the time as the number of milliseconds between the updates.",it,d,E,Dt="Example",N,zt="In this example, the method passed to <code>childCreator()</code> will be called when the user comes to the page, and then also every second after that.",O,g,Nt="Open in Online Editor",Y,ut,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,rt,V,Yt="<code>name()</code> - Manually triggering updates",dt,R,qt="Use the configuration method <code>name()</code> to give your <code>Updater</code> component instance a name. You can then call the function <code>runUpdater()</code> and pass it the same name whenever you want the <code>Updater</code> to update its GUI. Pass the name as a string.",kt,x,Ft='<div class="remark-container__title">Warning!</div><p>Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can implement the same functionality by loading the page anew, that is usually better to do than triggering your own manual updates.</p>',ht,C,Qt='<div class="remark-container__title">Note!</div><p>A click on a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> does by default take the user to the next page. If you want a part of the GUI to be updated on the current page instead, you must call the configuration method <code>.stay()</code> on the <code>Button</code> to not take the user to the next page.</p>',mt,k,$,Xt="Example",q,Wt="In this example, the displayed time is only updated when you click on the <code>Button</code> without reloading the entire page.",B,v,Zt="Open in Online Editor",F,ft,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Updater<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">clockUpdater</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingClock<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleButtonClick<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> now <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>now<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleButtonClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">clockUpdater</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,gt;return U=new _t({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),O=new _t({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),B=new _t({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Updater.name(\`clockUpdater\`).childCreator(p.createTextShowingClock),
			Space,
			Button.text(\`Refresh\`).stay().onClick(p.handleButtonClick)
		)
	}
	
	createTextShowingClock(){
		
		const now = Time.setNow()
		
		return Text.text(now.getClock())
		
	}
	
	handleButtonClick(){
		runUpdater(\`clockUpdater\`)
	}
	
}`,x:150,y:200}]}}}),{c(){h=s("h1"),h.innerHTML=Ht,Z=l(),y=s("p"),y.innerHTML=Mt,J=l(),w=s("div"),w.innerHTML=Pt,K=l(),T=s("h2"),T.textContent=It,tt=l(),_=s("p"),_.innerHTML=Lt,nt=l(),m=s("div"),S=s("div"),S.textContent=Gt,A=s("p"),A.innerHTML=bt,vt(U.$$.fragment),et=l(),H=s("h2"),H.innerHTML=Et,at=l(),M=s("p"),M.innerHTML=Ot,st=l(),P=s("p"),P.innerHTML=Vt,ot=l(),r=s("div"),I=s("div"),I.textContent=Rt,D=s("p"),D.innerHTML=$t,vt(L.$$.fragment),f=s("a"),f.textContent=Bt,z=s("pre"),pt=new St(!1),ct=l(),G=s("h2"),G.innerHTML=jt,lt=l(),b=s("p"),b.innerHTML=At,it=l(),d=s("div"),E=s("div"),E.textContent=Dt,N=s("p"),N.innerHTML=zt,vt(O.$$.fragment),g=s("a"),g.textContent=Nt,Y=s("pre"),ut=new St(!1),rt=l(),V=s("h2"),V.innerHTML=Yt,dt=l(),R=s("p"),R.innerHTML=qt,kt=l(),x=s("div"),x.innerHTML=Ft,ht=l(),C=s("div"),C.innerHTML=Qt,mt=l(),k=s("div"),$=s("div"),$.textContent=Xt,q=s("p"),q.innerHTML=Wt,vt(B.$$.fragment),v=s("a"),v.textContent=Zt,F=s("pre"),ft=new St(!1),this.h()},l(t){h=o(t,"H1",{"data-svelte-h":!0}),p(h)!=="svelte-ge2xi4"&&(h.innerHTML=Ht),Z=i(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-bw2ddz"&&(y.innerHTML=Mt),J=i(t),w=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(w)!=="svelte-d5xcek"&&(w.innerHTML=Pt),K=i(t),T=o(t,"H2",{"data-svelte-h":!0}),p(T)!=="svelte-1ukekoe"&&(T.textContent=It),tt=i(t),_=o(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-sr73ty"&&(_.innerHTML=Lt),nt=i(t),m=o(t,"DIV",{class:!0});var e=j(m);S=o(e,"DIV",{class:!0,"data-svelte-h":!0}),p(S)!=="svelte-1llzxwj"&&(S.textContent=Gt),A=o(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-1ujlb4y"&&(A.innerHTML=bt),wt(U.$$.fragment,e),e.forEach(n),et=i(t),H=o(t,"H2",{"data-svelte-h":!0}),p(H)!=="svelte-1m9p808"&&(H.innerHTML=Et),at=i(t),M=o(t,"P",{"data-svelte-h":!0}),p(M)!=="svelte-1evappk"&&(M.innerHTML=Ot),st=i(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1ouxqgz"&&(P.innerHTML=Vt),ot=i(t),r=o(t,"DIV",{class:!0});var Q=j(r);I=o(Q,"DIV",{class:!0,"data-svelte-h":!0}),p(I)!=="svelte-1llzxwj"&&(I.textContent=Rt),D=o(Q,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1wnk7lv"&&(D.innerHTML=$t),wt(L.$$.fragment,Q),f=o(Q,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-yoek7l"&&(f.textContent=Bt),z=o(Q,"PRE",{class:!0});var Jt=j(z);pt=Ut(Jt,!1),Jt.forEach(n),Q.forEach(n),ct=i(t),G=o(t,"H2",{"data-svelte-h":!0}),p(G)!=="svelte-tet9ka"&&(G.innerHTML=jt),lt=i(t),b=o(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1mnjuu"&&(b.innerHTML=At),it=i(t),d=o(t,"DIV",{class:!0});var X=j(d);E=o(X,"DIV",{class:!0,"data-svelte-h":!0}),p(E)!=="svelte-1llzxwj"&&(E.textContent=Dt),N=o(X,"P",{"data-svelte-h":!0}),p(N)!=="svelte-crks81"&&(N.innerHTML=zt),wt(O.$$.fragment,X),g=o(X,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-1sc328x"&&(g.textContent=Nt),Y=o(X,"PRE",{class:!0});var Kt=j(Y);ut=Ut(Kt,!1),Kt.forEach(n),X.forEach(n),rt=i(t),V=o(t,"H2",{"data-svelte-h":!0}),p(V)!=="svelte-blo3ln"&&(V.innerHTML=Yt),dt=i(t),R=o(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1f8l2aj"&&(R.innerHTML=qt),kt=i(t),x=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-4z2vcj"&&(x.innerHTML=Ft),ht=i(t),C=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-185ng8w"&&(C.innerHTML=Qt),mt=i(t),k=o(t,"DIV",{class:!0});var W=j(k);$=o(W,"DIV",{class:!0,"data-svelte-h":!0}),p($)!=="svelte-1llzxwj"&&($.textContent=Xt),q=o(W,"P",{"data-svelte-h":!0}),p(q)!=="svelte-113i3cn"&&(q.innerHTML=Wt),wt(B.$$.fragment,W),v=o(W,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-1y5u804"&&(v.textContent=Zt),F=o(W,"PRE",{class:!0});var tn=j(F);ft=Ut(tn,!1),tn.forEach(n),W.forEach(n),this.h()},h(){c(w,"class","remark-container warning"),c(S,"class","remark-container__title"),c(m,"class","remark-container tip"),c(I,"class","remark-container__title"),c(f,"target","_blank"),c(f,"href","/editor#eNptUE1LxDAQ/SthTi2EUgUvBQ+yB/GgiF1P1kNIxm6wJiGZpbuU/HdTU0tdvAx5M+9jJhMI56CZQFqF0IAcRAjs8XznHMMToVGBpffUmY6kR0HYkvD0LHosyp9uRx7p6A1bB3M3diZC5OASDtC8TaAVNFccPuyg0D9k8Cd01a/BM8gZa/r9UV/mvtgxVPKgB+XRFHnUUeuERP6LXp1KYp9pu9nJ+sJV2XOf8tqDHbXpd4OVnyX/z6Rcztpuc6lcV8tVWhOIGTuyW7bXX1gFpCc7FuWWtFwxW1WUSpH4VY+0GG64S3gEDqf0fTc1hzM013Ud3+M3LFmm9A=="),c(f,"title","Open in our Online Editor"),pt.a=null,c(z,"class","language-js"),c(r,"class","remark-container tip"),c(E,"class","remark-container__title"),c(g,"target","_blank"),c(g,"href","/editor#eNptkE1LxDAQhv9KmFMLIWQFLwUPsgfxoIhdT9ZDSMZusCYhydpdSv67qallXbwMeefjfWYygXAOmgmkVQgNyEGEQB5Ot84RPEY0KpD8njrTRelRRGyj8PFJ9FjVP9kueowHb8hamLOpMwkSBZd1gOZ1Aq2g2VB4t4NCf1/EH+g6v4JnURgr/e6gL7nPdgxM7vWgPJqqlLrYOiGR/qoXp/KwZ9rk+CWGasM5r8vUdja2vnKsIHYZ3+7tqE2/Haz8qOl/nvVy5flyl5PrpiVKa0Ikxo7khuz0J7KA8dGOVX3etBw1W7GYQ5X7WY9xMTzrXeAJKBzzb15zCidorjhPb+kbYf6rmQ=="),c(g,"title","Open in our Online Editor"),ut.a=null,c(Y,"class","language-js"),c(d,"class","remark-container tip"),c(x,"class","remark-container warning"),c(C,"class","remark-container warning"),c($,"class","remark-container__title"),c(v,"target","_blank"),c(v,"href","/editor#eNptUUFqwzAQ/IrYkwxGpIVeDD20OZQeWkqSnupChLyJTRxJSGucYPz3ypHrumkvQjuandkddSCthawDZQqEDFQtvWcv5wdrGZ4IdeFZuHe5zkk5lIRrko7e5B55ckFzckiN02x6GNA+1z30KdhQe8g+OqgKyG5S2Jm6QPcci1+mU/9kPBTRY3J/aqpr35VpvVBlVRcONY9POa2tVJh+V++2CM1OaHlEvlW1UYcR2iaxdznIG8etiEabMMS6NG2l98uBnqT/Kz82REYLCnS+XeHOoS+Dpid55okwellX6hBUS6mLGiP7giVRIRnTmi957T1tHE9ltCemTcvu2aY6ovBIr6blyZw0hjNIxeECX+yRRsEZdzL/M+JP0o0e47oObybQQwqn8K13ixTOkN0uFv1n/wVb4OCX"),c(v,"title","Open in our Online Editor"),ft.a=null,c(F,"class","language-js"),c(k,"class","remark-container tip")},m(t,e){a(t,h,e),a(t,Z,e),a(t,y,e),a(t,J,e),a(t,w,e),a(t,K,e),a(t,T,e),a(t,tt,e),a(t,_,e),a(t,nt,e),a(t,m,e),u(m,S),u(m,A),xt(U,m,null),a(t,et,e),a(t,H,e),a(t,at,e),a(t,M,e),a(t,st,e),a(t,P,e),a(t,ot,e),a(t,r,e),u(r,I),u(r,D),xt(L,r,null),u(r,f),u(r,z),pt.m(en,z),a(t,ct,e),a(t,G,e),a(t,lt,e),a(t,b,e),a(t,it,e),a(t,d,e),u(d,E),u(d,N),xt(O,d,null),u(d,g),u(d,Y),ut.m(an,Y),a(t,rt,e),a(t,V,e),a(t,dt,e),a(t,R,e),a(t,kt,e),a(t,x,e),a(t,ht,e),a(t,C,e),a(t,mt,e),a(t,k,e),u(k,$),u(k,q),xt(B,k,null),u(k,v),u(k,F),ft.m(sn,F),gt=!0},p:pn,i(t){gt||(Ct(U.$$.fragment,t),Ct(L.$$.fragment,t),Ct(O.$$.fragment,t),Ct(B.$$.fragment,t),gt=!0)},o(t){yt(U.$$.fragment,t),yt(L.$$.fragment,t),yt(O.$$.fragment,t),yt(B.$$.fragment,t),gt=!1},d(t){t&&(n(h),n(Z),n(y),n(J),n(w),n(K),n(T),n(tt),n(_),n(nt),n(m),n(et),n(H),n(at),n(M),n(st),n(P),n(ot),n(r),n(ct),n(G),n(lt),n(b),n(it),n(d),n(rt),n(V),n(dt),n(R),n(kt),n(x),n(ht),n(C),n(mt),n(k)),Tt(U),Tt(L),Tt(O),Tt(B)}}}class hn extends cn{constructor(h){super(),ln(this,h,null,un,on,{})}}export{hn as component};
