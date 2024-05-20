import{s as Tn,n as Cn}from"../chunks/scheduler.DFPFbGJz.js";import{S as Sn,i as Bn,e,s as i,H as tt,c as Lt,a,g as p,b as r,d as u,n as nt,h as n,f as Et,o as c,j as o,p as l,m as Rt,t as Gt,k as Vt,l as jt}from"../chunks/index.CzDE4dZi.js";import{V as It}from"../chunks/ViewApp.C2MU7-ZI.js";function Mn(vn){let m,Yt="7. <code>onBefore()</code>",pt,y,zt="This tutorial will teach you the methods <code>App.onBefore()</code> and <code>Page.onBefore()</code>.",lt,b,Xt="<code>App.onBefore()</code>",ct,P,Wt="Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your <code>App</code> class that is named <code>onBefore()</code>.",it,_,Dt="For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:",rt,T,ut,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">8</span>
	
<span class="token punctuation">&#125;</span></code>`,dt,C,Ot="But, this is not a good way to do it, because if you want to change <code>X</code> or <code>Y</code> to another number in the future, then you must also change <code>SUM</code> to another number. It would be better if <code>SUM</code> could be computed automatically, so one would just need to change <code>X</code> or <code>Y</code>.",kt,k,S,$t="What about using the a variable?",X,Jt="You might think one can use the special <code>a</code> variable to achieve this, like this:",W,mt,wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	
<span class="token punctuation">&#125;</span></code>`,D,qt="And that is very good thinking of you, but it does unfortuantelly not work; the special <code>a</code> variable can only be used inside methods in your <code>App</code> class, and can&#39;t be used when your app constants/variables are initialized.",ht,B,Ut="So, the proper solution to this problem is to use the <code>onBefore()</code> method in your <code>App</code> class. When the special <code>a</code> variable is created, it will contain all your app constants/variables/methods, and then your <code>App.onBefore()</code> method will be called on it (if you have one), in which you can set all constants/variables to their correct values.",ft,h,M,Kt="Example",O,Nt="Example of an app that uses <code>App.onBefore()</code> to correctly initialize a constant.",x,H,f,Ft="Open in Online Editor",$,gt,yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,J,vt,bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">SUM</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xt,A,Zt="<code>Page.onBefore()</code>",wt,L,Qt="The special method <code>onBefore()</code> in your <code>Page</code> classes works very similar to <code>App.onBefore()</code>: <code>Page.onBefore()</code> will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.",yt,g,E,tn="Example",q,nn="Example of an app that uses <code>Page.onBefore()</code> to update how many times the user has visited that page.",w,R,v,en="Open in Online Editor",U,bt,Pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,K,Pt,_n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,G,an="Exercises",Tt,V,sn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ct,d,j,on="Exercise 1",N,pn='<a href="/editor#eNq9kttKw0AQhl9lnRtbWEobLZTclCiiRTxgC1psoUsyaYPJbtidYEvIu5s0NjahVW/0YsNM5p/Tt5uCiGOwU3CVh2CDGwpj2N3GiWOGa0LpGZbb6UzOqDiuRkE4JqHpUSyx1S4jpJESLVkVKP5mZVIGGQdfhR5qA/ZrCoEHdo+DFFHRcZsCHJTvG6QXsLs7e5rb2ZxDnNerZZbFRqVTG7zqXw1fOI3pr5OgOfeTejcddxWEnkbZKkMzGsfCRb7zJnnJDuWf1uIGw1BxJgMXGSkWIRLbqORk0T6oDr6kBrFQMrEUgdzX13tdJERKfuY/3Fa6do0rhzXY590zDhuwrYG1gzXBKA7zRWvQapwc8zbyHS8J/wGWo8uVt5fGaCUk6w2GR1e/VGESyQMNmsIGpXu1V/IH7RTNN+LDsDNeorQaKK8koXaW+Pcgn1eCTk3BUufvB4e/ez297p6uHukfi1hHc6z+ka4NWPPsA0PKkeM=" target="_blank">This BagaWork project</a> contains a page that should display the message <code>Hello, nice to meet you!</code> the first time the user comes to the page, and all times after that, it should display the message <code>Hi, nice to see you again!</code>. Currently, it always displays both of the messages. Change the code so it works as it should, as shown below.',et,I,F,ln="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",Z,cn="<summary>Hint</summary><p>Use a counter in a page variable to keep track of how many times the user has seen the page. Let it start on <code>0</code>, and increment it by <code>1</code> each time <code>Page.onBefore()</code> runs. Then conditionally show the texts depending on if it has the value <code>1</code> or not.</p>",St,Y,rn="That's it!",Bt,z,un="Wow, wow, wow... Now you know about <code>onBefore()</code> too! 🥳 Excellent work, soon you&#39;ll be fully experienced programmer. Just 999 more things to learn before that 😉",Mt;return H=new It({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:200,y:300}],pageTemplates:[]}}}),R=new It({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),I=new It({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hello, nice to meet you!\`).keepIf(p.counter == 1),
			Text.text(\`Hi, nice to see you again!\`).keepIf(1 < p.counter),
			Space,
			Button.text(\`OK\`),
		)
	}
	
}`,x:403,y:282}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){m=e("h1"),m.innerHTML=Yt,pt=i(),y=e("p"),y.innerHTML=zt,lt=i(),b=e("h2"),b.innerHTML=Xt,ct=i(),P=e("p"),P.innerHTML=Wt,it=i(),_=e("p"),_.textContent=Dt,rt=i(),T=e("pre"),ut=new tt(!1),dt=i(),C=e("p"),C.innerHTML=Ot,kt=i(),k=e("div"),S=e("div"),S.textContent=$t,X=e("p"),X.innerHTML=Jt,W=e("pre"),mt=new tt(!1),D=e("p"),D.innerHTML=qt,ht=i(),B=e("p"),B.innerHTML=Ut,ft=i(),h=e("div"),M=e("div"),M.textContent=Kt,O=e("p"),O.innerHTML=Nt,x=e("div"),Lt(H.$$.fragment),f=e("a"),f.textContent=Ft,$=e("pre"),gt=new tt(!1),J=e("pre"),vt=new tt(!1),xt=i(),A=e("h2"),A.innerHTML=Zt,wt=i(),L=e("p"),L.innerHTML=Qt,yt=i(),g=e("div"),E=e("div"),E.textContent=tn,q=e("p"),q.innerHTML=nn,w=e("div"),Lt(R.$$.fragment),v=e("a"),v.textContent=en,U=e("pre"),bt=new tt(!1),K=e("pre"),Pt=new tt(!1),_t=i(),G=e("h2"),G.textContent=an,Tt=i(),V=e("p"),V.textContent=sn,Ct=i(),d=e("div"),j=e("div"),j.textContent=on,N=e("p"),N.innerHTML=pn,et=e("div"),Lt(I.$$.fragment),F=e("p"),F.textContent=ln,Z=e("details"),Z.innerHTML=cn,St=i(),Y=e("h2"),Y.textContent=rn,Bt=i(),z=e("p"),z.innerHTML=un,this.h()},l(t){m=a(t,"H1",{"data-svelte-h":!0}),p(m)!=="svelte-3hzjz3"&&(m.innerHTML=Yt),pt=r(t),y=a(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-1twrsti"&&(y.innerHTML=zt),lt=r(t),b=a(t,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-18d6yy3"&&(b.innerHTML=Xt),ct=r(t),P=a(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1xrzxuy"&&(P.innerHTML=Wt),it=r(t),_=a(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-18bh8w"&&(_.textContent=Dt),rt=r(t),T=a(t,"PRE",{class:!0});var s=u(T);ut=nt(s,!1),s.forEach(n),dt=r(t),C=a(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-s9tszs"&&(C.innerHTML=Ot),kt=r(t),k=a(t,"DIV",{class:!0});var at=u(k);S=a(at,"DIV",{class:!0,"data-svelte-h":!0}),p(S)!=="svelte-ent68x"&&(S.textContent=$t),X=a(at,"P",{"data-svelte-h":!0}),p(X)!=="svelte-44nhw"&&(X.innerHTML=Jt),W=a(at,"PRE",{class:!0});var dn=u(W);mt=nt(dn,!1),dn.forEach(n),D=a(at,"P",{"data-svelte-h":!0}),p(D)!=="svelte-2jfyds"&&(D.innerHTML=qt),at.forEach(n),ht=r(t),B=a(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-1vcmxn2"&&(B.innerHTML=Ut),ft=r(t),h=a(t,"DIV",{class:!0});var Ht=u(h);M=a(Ht,"DIV",{class:!0,"data-svelte-h":!0}),p(M)!=="svelte-1llzxwj"&&(M.textContent=Kt),O=a(Ht,"P",{"data-svelte-h":!0}),p(O)!=="svelte-1pln3ni"&&(O.innerHTML=Nt),x=a(Ht,"DIV",{});var st=u(x);Et(H.$$.fragment,st),f=a(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-10zbosc"&&(f.textContent=Ft),$=a(st,"PRE",{class:!0});var kn=u($);gt=nt(kn,!1),kn.forEach(n),J=a(st,"PRE",{class:!0});var mn=u(J);vt=nt(mn,!1),mn.forEach(n),st.forEach(n),Ht.forEach(n),xt=r(t),A=a(t,"H2",{"data-svelte-h":!0}),p(A)!=="svelte-tgzb3"&&(A.innerHTML=Zt),wt=r(t),L=a(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1f40f19"&&(L.innerHTML=Qt),yt=r(t),g=a(t,"DIV",{class:!0});var At=u(g);E=a(At,"DIV",{class:!0,"data-svelte-h":!0}),p(E)!=="svelte-1llzxwj"&&(E.textContent=tn),q=a(At,"P",{"data-svelte-h":!0}),p(q)!=="svelte-nzt7aq"&&(q.innerHTML=nn),w=a(At,"DIV",{});var ot=u(w);Et(R.$$.fragment,ot),v=a(ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-19xo796"&&(v.textContent=en),U=a(ot,"PRE",{class:!0});var hn=u(U);bt=nt(hn,!1),hn.forEach(n),K=a(ot,"PRE",{class:!0});var fn=u(K);Pt=nt(fn,!1),fn.forEach(n),ot.forEach(n),At.forEach(n),_t=r(t),G=a(t,"H2",{"data-svelte-h":!0}),p(G)!=="svelte-4opca7"&&(G.textContent=an),Tt=r(t),V=a(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-fy3v6t"&&(V.textContent=sn),Ct=r(t),d=a(t,"DIV",{class:!0});var Q=u(d);j=a(Q,"DIV",{class:!0,"data-svelte-h":!0}),p(j)!=="svelte-1kqyz2o"&&(j.textContent=on),N=a(Q,"P",{"data-svelte-h":!0}),p(N)!=="svelte-k4r53h"&&(N.innerHTML=pn),et=a(Q,"DIV",{});var gn=u(et);Et(I.$$.fragment,gn),gn.forEach(n),F=a(Q,"P",{"data-svelte-h":!0}),p(F)!=="svelte-1p13pmi"&&(F.textContent=ln),Z=a(Q,"DETAILS",{"data-svelte-h":!0}),p(Z)!=="svelte-1olba28"&&(Z.innerHTML=cn),Q.forEach(n),St=r(t),Y=a(t,"H2",{"data-svelte-h":!0}),p(Y)!=="svelte-p2uhy5"&&(Y.textContent=rn),Bt=r(t),z=a(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-159thmx"&&(z.innerHTML=un),this.h()},h(){ut.a=null,c(T,"class","language-js"),c(S,"class","remark-container__title"),mt.a=null,c(W,"class","language-js"),c(k,"class","remark-container warning"),c(M,"class","remark-container__title"),c(f,"target","_blank"),c(f,"href","/editor#eNpdkMFqwzAMhl9FiMFaFtJsZZfADttl7FAYtGMNa6FuorSGxA62urYEv/vshaTrDjafZEn+9bcomgbTFnNdEKaYV8JamJ2fmwboxKQKC57blVpxOEt4gscAmYdpgPnHzGMCkwl87mW+B6kkS1GBOtRbMnAk2MlvAtYQSgtNVt0y1IKZTARWqpxAMhxlVcG2K1Y+YSHXxlDO/SCpQKsXKrWh0TjuBV1SnUYWcadIxEu483cW0q4vzw0JpjkLw+9id+kyxAejYHj40+TQRVjqqiBjMf1qURaY3keoRB0c+23BCHVZWuIlpknPmWe3jrDx8646u2FvXXBl/PD/YH4I2mv1rwf5X/fCl8fsr9HmpvWbO796gMx5JwJ4T9xmfLVVhCdMHxIv94zpNBmkLqhuKv9NkLx2P0yeueU="),c(f,"title","Open in our Online Editor"),gt.a=null,c($,"class","language-js"),vt.a=null,c(J,"class","language-js"),c(h,"class","remark-container tip"),c(E,"class","remark-container__title"),c(v,"target","_blank"),c(v,"href","/editor#eNrFU+9rnEAQ/VeWodCTLqK2gSCEYkoJ+dAfNCHt0QvcRsecRHdld01ziP97djXa03rhSj7kg7LrzLx5895YAytLCGuIRYIQQpwzpciXbVSWBB808kQRc65XfKXtE0tkGi80k/o7u8WF00W0RF1JToaA/dp0RQ00FFKRJygVhL9ryBIIfQqcFbZjWwIURJoq1L8g9Prz0pybawqlwRtVdmDn3WVEfOg/kLeXgT2vihuU39KrTGVakRPi9RHBTzEV8u9ApTtJfndC/J2peinOqmwqwg/xR7nxJssTiXzRhVb60jBytXkt1ktRkQ27R3JvoTEhepMpYsckb+pp44borEDlrh3aQ51W2hB+AjsTRIt2zGDtuBZk0V76dGdkBYUHCAPPaLyF8L3nNbRTNXhO1RZvXtG9Ikw53rD4zhIdHOrJDh9miB598J+IBv0iXGJR5qblaCFGbCN1d55GSZU/swj/2P0SZy9KFiOd8TmSSLbG61ZYYzLjxD/+uGPkuPKTyKuCzzSYJk424KvoteRVnjv0wLIlqsPq5jbJShilGuWcgvaPH9Zq5M1nbkqiW3xtZ35umH6rrDmSmO77PRkp5nvzgo2Tjg5ICg5BCvYg7TL8H0+um0e+KiPj"),c(v,"title","Open in our Online Editor"),bt.a=null,c(U,"class","language-js"),Pt.a=null,c(K,"class","language-js"),c(g,"class","remark-container tip"),c(j,"class","remark-container__title"),c(d,"class","remark-container exercise")},m(t,s){o(t,m,s),o(t,pt,s),o(t,y,s),o(t,lt,s),o(t,b,s),o(t,ct,s),o(t,P,s),o(t,it,s),o(t,_,s),o(t,rt,s),o(t,T,s),ut.m(xn,T),o(t,dt,s),o(t,C,s),o(t,kt,s),o(t,k,s),l(k,S),l(k,X),l(k,W),mt.m(wn,W),l(k,D),o(t,ht,s),o(t,B,s),o(t,ft,s),o(t,h,s),l(h,M),l(h,O),l(h,x),Rt(H,x,null),l(x,f),l(x,$),gt.m(yn,$),l(x,J),vt.m(bn,J),o(t,xt,s),o(t,A,s),o(t,wt,s),o(t,L,s),o(t,yt,s),o(t,g,s),l(g,E),l(g,q),l(g,w),Rt(R,w,null),l(w,v),l(w,U),bt.m(Pn,U),l(w,K),Pt.m(_n,K),o(t,_t,s),o(t,G,s),o(t,Tt,s),o(t,V,s),o(t,Ct,s),o(t,d,s),l(d,j),l(d,N),l(d,et),Rt(I,et,null),l(d,F),l(d,Z),o(t,St,s),o(t,Y,s),o(t,Bt,s),o(t,z,s),Mt=!0},p:Cn,i(t){Mt||(Gt(H.$$.fragment,t),Gt(R.$$.fragment,t),Gt(I.$$.fragment,t),Mt=!0)},o(t){Vt(H.$$.fragment,t),Vt(R.$$.fragment,t),Vt(I.$$.fragment,t),Mt=!1},d(t){t&&(n(m),n(pt),n(y),n(lt),n(b),n(ct),n(P),n(it),n(_),n(rt),n(T),n(dt),n(C),n(kt),n(k),n(ht),n(B),n(ft),n(h),n(xt),n(A),n(wt),n(L),n(yt),n(g),n(_t),n(G),n(Tt),n(V),n(Ct),n(d),n(St),n(Y),n(Bt),n(z)),jt(H),jt(R),jt(I)}}}class En extends Sn{constructor(m){super(),Bn(this,m,null,Mn,Tn,{})}}export{En as component};
