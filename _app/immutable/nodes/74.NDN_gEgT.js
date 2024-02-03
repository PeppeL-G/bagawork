import{s as sn,n as on}from"../chunks/scheduler.UQwd20JU.js";import{S as pn,i as ln,e,s as i,H as q,c as Wt,a as s,g as p,b as u,d as r,n as D,h as n,f as qt,o as l,j as o,p as c,m as Dt,t as Jt,k as Ut,l as Ft}from"../chunks/index.i__Fl8cY.js";import{V as Kt}from"../chunks/ViewApp.m6vzcyjb.js";function cn(Nt){let d,xt="7. <code>onBefore()</code>",K,w,wt="This tutorial will teach you the methods <code>App.onBefore()</code> and <code>Page.onBefore()</code>.",N,y,yt="<code>App.onBefore()</code>",Q,b,bt="Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your <code>App</code> class that is named <code>onBefore()</code>.",Z,_,_t="For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:",tt,P,nt,Qt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">8</span>
	
<span class="token punctuation">&#125;</span></code>`,at,T,Pt="But, this is not a good way to do it, because if you want to change <code>X</code> or <code>Y</code> to another number in the future, then you must also change <code>SUM</code> to another number. It would be better if <code>SUM</code> could be computed automatically, so one would just need to change <code>X</code> or <code>Y</code>.",et,k,M,Tt="What about using the a variable?",R,Mt="You might think one can use the special <code>a</code> variable to achieve this, like this:",V,st,Zt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	
<span class="token punctuation">&#125;</span></code>`,I,St="And that is very good thinking of you, but it does unfortuantelly not work; the special <code>a</code> variable can only be used inside methods in your <code>App</code> class, and can&#39;t be used when your app constants/variables are initialized.",ot,S,Ct="So, the proper solution to this problem is to use the <code>onBefore()</code> method in your <code>App</code> class. When the special <code>a</code> variable is created, it will contain all your app constants/variables/methods, and then your <code>App.onBefore()</code> method will be called on it (if you have one), in which you can set all constants/variables to their correct values.",pt,m,C,Bt="Example",G,Ht="Example of an app that uses <code>App.onBefore()</code> to correctly initialize a constant.",g,B,f,At="Open in Online Editor",X,lt,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,z,ct,nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">SUM</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,it,H,Lt="<code>Page.onBefore()</code>",ut,A,jt="The special method <code>onBefore()</code> in your <code>Page</code> classes works very similar to <code>App.onBefore()</code>: <code>Page.onBefore()</code> will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.",rt,h,L,Et="Example",O,Yt="Example of an app that uses <code>Page.onBefore()</code> to update how many times the user has visited that page.",x,j,v,Rt="Open in Online Editor",$,kt,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfVisits <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>numberOfVisits <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have visited this page </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfVisits<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to Page2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,W,dt,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,mt,E,Vt="That's it!",ft,Y,It="Wow, wow, wow... Now you know about <code>onBefore()</code> too! 🥳 Excellent work, soon you&#39;ll be fully experienced programmer. Just 999 more things to learn before that 😉",ht;return B=new Kt({props:{project:{app:{code:`class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 0 // Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().
	
	onBefore(){
		a.SUM = a.X + a.Y
	}
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`\${a.X} + \${a.Y} = \${a.SUM}\`)
	}
	
}`,x:200,y:300}],pageTemplates:[]}}}),j=new Kt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	numberOfVisits = 0
	
	onBefore(){
		p.numberOfVisits += 1
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`You have visited this page \${p.numberOfVisits} times.\`),
			Button.text(\`Go to Page2\`).page(Page2),
		)
	}
	
}`,x:200,y:300},{id:2,folderId:1,code:`class Page2 extends Page{
	
	createGui(){
		return Button.text(\`Go back to StartPage\`).page(StartPage)
	}
	
}`,x:541,y:302}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){d=e("h1"),d.innerHTML=xt,K=i(),w=e("p"),w.innerHTML=wt,N=i(),y=e("h2"),y.innerHTML=yt,Q=i(),b=e("p"),b.innerHTML=bt,Z=i(),_=e("p"),_.textContent=_t,tt=i(),P=e("pre"),nt=new q(!1),at=i(),T=e("p"),T.innerHTML=Pt,et=i(),k=e("div"),M=e("div"),M.textContent=Tt,R=e("p"),R.innerHTML=Mt,V=e("pre"),st=new q(!1),I=e("p"),I.innerHTML=St,ot=i(),S=e("p"),S.innerHTML=Ct,pt=i(),m=e("div"),C=e("div"),C.textContent=Bt,G=e("p"),G.innerHTML=Ht,g=e("div"),Wt(B.$$.fragment),f=e("a"),f.textContent=At,X=e("pre"),lt=new q(!1),z=e("pre"),ct=new q(!1),it=i(),H=e("h2"),H.innerHTML=Lt,ut=i(),A=e("p"),A.innerHTML=jt,rt=i(),h=e("div"),L=e("div"),L.textContent=Et,O=e("p"),O.innerHTML=Yt,x=e("div"),Wt(j.$$.fragment),v=e("a"),v.textContent=Rt,$=e("pre"),kt=new q(!1),W=e("pre"),dt=new q(!1),mt=i(),E=e("h2"),E.textContent=Vt,ft=i(),Y=e("p"),Y.innerHTML=It,this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),p(d)!=="svelte-3hzjz3"&&(d.innerHTML=xt),K=u(t),w=s(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-1twrsti"&&(w.innerHTML=wt),N=u(t),y=s(t,"H2",{"data-svelte-h":!0}),p(y)!=="svelte-18d6yy3"&&(y.innerHTML=yt),Q=u(t),b=s(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1xrzxuy"&&(b.innerHTML=bt),Z=u(t),_=s(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-18bh8w"&&(_.textContent=_t),tt=u(t),P=s(t,"PRE",{class:!0});var a=r(P);nt=D(a,!1),a.forEach(n),at=u(t),T=s(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-s9tszs"&&(T.innerHTML=Pt),et=u(t),k=s(t,"DIV",{class:!0});var J=r(k);M=s(J,"DIV",{class:!0,"data-svelte-h":!0}),p(M)!=="svelte-ent68x"&&(M.textContent=Tt),R=s(J,"P",{"data-svelte-h":!0}),p(R)!=="svelte-44nhw"&&(R.innerHTML=Mt),V=s(J,"PRE",{class:!0});var Gt=r(V);st=D(Gt,!1),Gt.forEach(n),I=s(J,"P",{"data-svelte-h":!0}),p(I)!=="svelte-2jfyds"&&(I.innerHTML=St),J.forEach(n),ot=u(t),S=s(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1vcmxn2"&&(S.innerHTML=Ct),pt=u(t),m=s(t,"DIV",{class:!0});var vt=r(m);C=s(vt,"DIV",{class:!0,"data-svelte-h":!0}),p(C)!=="svelte-1llzxwj"&&(C.textContent=Bt),G=s(vt,"P",{"data-svelte-h":!0}),p(G)!=="svelte-1pln3ni"&&(G.innerHTML=Ht),g=s(vt,"DIV",{});var U=r(g);qt(B.$$.fragment,U),f=s(U,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-10zbosc"&&(f.textContent=At),X=s(U,"PRE",{class:!0});var Xt=r(X);lt=D(Xt,!1),Xt.forEach(n),z=s(U,"PRE",{class:!0});var zt=r(z);ct=D(zt,!1),zt.forEach(n),U.forEach(n),vt.forEach(n),it=u(t),H=s(t,"H2",{"data-svelte-h":!0}),p(H)!=="svelte-tgzb3"&&(H.innerHTML=Lt),ut=u(t),A=s(t,"P",{"data-svelte-h":!0}),p(A)!=="svelte-1f40f19"&&(A.innerHTML=jt),rt=u(t),h=s(t,"DIV",{class:!0});var gt=r(h);L=s(gt,"DIV",{class:!0,"data-svelte-h":!0}),p(L)!=="svelte-1llzxwj"&&(L.textContent=Et),O=s(gt,"P",{"data-svelte-h":!0}),p(O)!=="svelte-nzt7aq"&&(O.innerHTML=Yt),x=s(gt,"DIV",{});var F=r(x);qt(j.$$.fragment,F),v=s(F,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-19xo796"&&(v.textContent=Rt),$=s(F,"PRE",{class:!0});var Ot=r($);kt=D(Ot,!1),Ot.forEach(n),W=s(F,"PRE",{class:!0});var $t=r(W);dt=D($t,!1),$t.forEach(n),F.forEach(n),gt.forEach(n),mt=u(t),E=s(t,"H2",{"data-svelte-h":!0}),p(E)!=="svelte-p2uhy5"&&(E.textContent=Vt),ft=u(t),Y=s(t,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-159thmx"&&(Y.innerHTML=It),this.h()},h(){nt.a=null,l(P,"class","language-js"),l(M,"class","remark-container__title"),st.a=null,l(V,"class","language-js"),l(k,"class","remark-container warning"),l(C,"class","remark-container__title"),l(f,"target","_blank"),l(f,"href","/editor#eNpdkMFqwzAMhl9FiMFaFtJsZZfADttl7FAYtGMNa6FuorSGxA62urYEv/vshaTrDjafZEn+9bcomgbTFnNdEKaYV8JamJ2fmwboxKQKC57blVpxOEt4gscAmYdpgPnHzGMCkwl87mW+B6kkS1GBOtRbMnAk2MlvAtYQSgtNVt0y1IKZTARWqpxAMhxlVcG2K1Y+YSHXxlDO/SCpQKsXKrWh0TjuBV1SnUYWcadIxEu483cW0q4vzw0JpjkLw+9id+kyxAejYHj40+TQRVjqqiBjMf1qURaY3keoRB0c+23BCHVZWuIlpknPmWe3jrDx8646u2FvXXBl/PD/YH4I2mv1rwf5X/fCl8fsr9HmpvWbO796gMx5JwJ4T9xmfLVVhCdMHxIv94zpNBmkLqhuKv9NkLx2P0yeueU="),l(f,"title","Open in our Online Editor"),lt.a=null,l(X,"class","language-js"),ct.a=null,l(z,"class","language-js"),l(m,"class","remark-container tip"),l(L,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNrFU+9rnEAQ/VeWodCTLqK2gSCEYkoJ+dAfNCHt0QvcRsecRHdld01ziP97djXa03rhSj7kg7LrzLx5895YAytLCGuIRYIQQpwzpciXbVSWBB808kQRc65XfKXtE0tkGi80k/o7u8WF00W0RF1JToaA/dp0RQ00FFKRJygVhL9ryBIIfQqcFbZjWwIURJoq1L8g9Prz0pybawqlwRtVdmDn3WVEfOg/kLeXgT2vihuU39KrTGVakRPi9RHBTzEV8u9ApTtJfndC/J2peinOqmwqwg/xR7nxJssTiXzRhVb60jBytXkt1ktRkQ27R3JvoTEhepMpYsckb+pp44borEDlrh3aQ51W2hB+AjsTRIt2zGDtuBZk0V76dGdkBYUHCAPPaLyF8L3nNbRTNXhO1RZvXtG9Ikw53rD4zhIdHOrJDh9miB598J+IBv0iXGJR5qblaCFGbCN1d55GSZU/swj/2P0SZy9KFiOd8TmSSLbG61ZYYzLjxD/+uGPkuPKTyKuCzzSYJk424KvoteRVnjv0wLIlqsPq5jbJShilGuWcgvaPH9Zq5M1nbkqiW3xtZ35umH6rrDmSmO77PRkp5nvzgo2Tjg5ICg5BCvYg7TL8H0+um0e+KiPj"),l(v,"title","Open in our Online Editor"),kt.a=null,l($,"class","language-js"),dt.a=null,l(W,"class","language-js"),l(h,"class","remark-container tip")},m(t,a){o(t,d,a),o(t,K,a),o(t,w,a),o(t,N,a),o(t,y,a),o(t,Q,a),o(t,b,a),o(t,Z,a),o(t,_,a),o(t,tt,a),o(t,P,a),nt.m(Qt,P),o(t,at,a),o(t,T,a),o(t,et,a),o(t,k,a),c(k,M),c(k,R),c(k,V),st.m(Zt,V),c(k,I),o(t,ot,a),o(t,S,a),o(t,pt,a),o(t,m,a),c(m,C),c(m,G),c(m,g),Dt(B,g,null),c(g,f),c(g,X),lt.m(tn,X),c(g,z),ct.m(nn,z),o(t,it,a),o(t,H,a),o(t,ut,a),o(t,A,a),o(t,rt,a),o(t,h,a),c(h,L),c(h,O),c(h,x),Dt(j,x,null),c(x,v),c(x,$),kt.m(an,$),c(x,W),dt.m(en,W),o(t,mt,a),o(t,E,a),o(t,ft,a),o(t,Y,a),ht=!0},p:on,i(t){ht||(Jt(B.$$.fragment,t),Jt(j.$$.fragment,t),ht=!0)},o(t){Ut(B.$$.fragment,t),Ut(j.$$.fragment,t),ht=!1},d(t){t&&(n(d),n(K),n(w),n(N),n(y),n(Q),n(b),n(Z),n(_),n(tt),n(P),n(at),n(T),n(et),n(k),n(ot),n(S),n(pt),n(m),n(it),n(H),n(ut),n(A),n(rt),n(h),n(mt),n(E),n(ft),n(Y)),Ft(B),Ft(j)}}}class dn extends pn{constructor(d){super(),ln(this,d,null,cn,sn,{})}}export{dn as component};
