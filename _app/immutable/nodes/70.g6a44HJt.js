import{s as qn,n as Fn}from"../chunks/scheduler.UQwd20JU.js";import{S as zn,i as Wn,e as s,s as l,H as J,c as Hn,a as o,g as p,b as c,d,n as K,h as n,f as An,o as i,j as a,p as u,m as Mn,t as Sn,k as In,l as Nn}from"../chunks/index.i__Fl8cY.js";import{V as En}from"../chunks/ViewApp.m6vzcyjb.js";function $n(Ln){let k,Ft="2. Page Variables and Methods",ot,x,zt="This tutorial will teach you what page variables are in Bagawork, and how you can create them and change them using page methods.",pt,b,Wt="Why page variables are needed",lt,y,$t="An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.",ct,C,Ot="For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.",it,_,Jt="How to create page variables",ut,T,Kt="Instead of hardcoding values in the code, you in previous tutorials learned that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but with the different that after a page variable has been created an assigned its value, it can later store another value, for example when the user clicks on a <code>Button</code>.",rt,P,Xt="Page variables are created the same way as page constants, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",dt,B,Qt="In the code below you find an example of how to create the following page variables:",kt,H,Zt="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",ht,A,mt,jn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page variables as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,gt,M,tn="How to use page variables",vt,S,nn="You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write <code>p.theName</code>. For example, to obtain the value stored in the page variable <code>lastVisit</code>, we would write <code>p.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",ft,h,I,en="Example",X,an="Example of an app using a page variable.",N,E,m,sn="Open in Online Editor",Q,wt,Rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xt,L,on="But the benefit with variables over constants is that they can also change value while the app is running. If we would want to store the name <code>Bob</code> in the page variable <code>name</code> while the app is running we would write the code <code>p.name = `Bob`</code>. Easy as that!",bt,j,pn="However, a very good question is <em>where</em> we should write the code <code>p.name = `Bob`</code>. And it all depends on <em>when</em> we want the app to change the name to <code>Bob</code>. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let&#39;s go through how to make that happen.",yt,R,ln="In your own <code>Page</code> class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a <code>Button</code>, that code needs to be written in a method. So your <code>Page</code> class can for example look like this:",Ct,V,_t,Vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Tt,D,cn="The method in the example above is named <code>setNameToBob()</code>, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so <code>setNameToBob()</code> is a very good name in this case, since that&#39;s precisely what the code in the method does.",Pt,G,un="To tell the computer that the code in the method <code>setNameToBob()</code> should be executed when the user clicks on a button, we need to call the configuration method <code>handler()</code> on the button, and pass it the method as an argument (i.e. write <code>p.setNameToBob</code> between the parentheses):",Bt,Y,Ht,Dn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,At,r,U,rn="Note!",Z,dn="When passing a method as an argument (as we do when we use <code>Button.handler()</code>), you should not write the parentheses after the method name.",tt,kn="So the following is correct:",nt,Mt,Gn='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span></code>',et,hn="And the following is incorrect:",at,St,Yn='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>',It,v,mn='<div class="remark-container__title">Remember!</div><p>In the code above, we haven&#39;t told Bagawork which page the user should come to when the button is clicked (we haven&#39;t used the configuration method <code>page()</code> on the <code>Button</code>), so when the user clicks the button, the current page will be reloaded (after the click handler (<code>setNameToBob</code>) has been executed).</p>',Nt,f,gn="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants/variables/methods created on that page. For example, <code>PageA</code> cannnot access the page constants/variables/methods in <code>PageB</code>. To create a constant/variable/methos all pages can access, you should instead create an <code>App</code> constant/variable/method (learn more about this in next tutorial).</p>",Et,q,vn="The final solution",Lt,F,fn="So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.",jt,w,z,g,wn="Open in Online Editor",st,Rt,Un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToAlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,W,xn="That's it!",Dt,$,bn="Congratulation, now you know how to use page variables and page methods too! 🥳 But your <code>App</code> class can have its own variables and methods too, let&#39;s take a look at how those works next.",Gt;return E=new En({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	name = \`Alice\`
	
	createGui(){
		return Text.text(\`Hello \${p.name}!\`)
	}
	
}`,x:185,y:251}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),z=new En({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	name = \`Alice\`
	
	setNameToAlice(){
		p.name = \`Alice\`
	}
	
	setNameToBob(){
		p.name = \`Bob\`
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${p.name}!\`),
			Button.text(\`Change name to Alice\`).handler(p.setNameToAlice),
			Button.text(\`Change name to Bob\`).handler(p.setNameToBob)
		)
	}
	
}`,x:185,y:251}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){k=s("h1"),k.textContent=Ft,ot=l(),x=s("p"),x.textContent=zt,pt=l(),b=s("h2"),b.textContent=Wt,lt=l(),y=s("p"),y.textContent=$t,ct=l(),C=s("p"),C.textContent=Ot,it=l(),_=s("h2"),_.textContent=Jt,ut=l(),T=s("p"),T.innerHTML=Kt,rt=l(),P=s("p"),P.innerHTML=Xt,dt=l(),B=s("p"),B.textContent=Qt,kt=l(),H=s("ul"),H.innerHTML=Zt,ht=l(),A=s("pre"),mt=new J(!1),gt=l(),M=s("h2"),M.textContent=tn,vt=l(),S=s("p"),S.innerHTML=nn,ft=l(),h=s("div"),I=s("div"),I.textContent=en,X=s("p"),X.textContent=an,N=s("div"),Hn(E.$$.fragment),m=s("a"),m.textContent=sn,Q=s("pre"),wt=new J(!1),xt=l(),L=s("p"),L.innerHTML=on,bt=l(),j=s("p"),j.innerHTML=pn,yt=l(),R=s("p"),R.innerHTML=ln,Ct=l(),V=s("pre"),_t=new J(!1),Tt=l(),D=s("p"),D.innerHTML=cn,Pt=l(),G=s("p"),G.innerHTML=un,Bt=l(),Y=s("pre"),Ht=new J(!1),At=l(),r=s("div"),U=s("div"),U.textContent=rn,Z=s("p"),Z.innerHTML=dn,tt=s("p"),tt.textContent=kn,nt=s("pre"),Mt=new J(!1),et=s("p"),et.textContent=hn,at=s("pre"),St=new J(!1),It=l(),v=s("div"),v.innerHTML=mn,Nt=l(),f=s("div"),f.innerHTML=gn,Et=l(),q=s("h3"),q.textContent=vn,Lt=l(),F=s("p"),F.textContent=fn,jt=l(),w=s("div"),Hn(z.$$.fragment),g=s("a"),g.textContent=wn,st=s("pre"),Rt=new J(!1),Vt=l(),W=s("h2"),W.textContent=xn,Dt=l(),$=s("p"),$.innerHTML=bn,this.h()},l(t){k=o(t,"H1",{"data-svelte-h":!0}),p(k)!=="svelte-1ltg3up"&&(k.textContent=Ft),ot=c(t),x=o(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-ozhh0b"&&(x.textContent=zt),pt=c(t),b=o(t,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-gcer2n"&&(b.textContent=Wt),lt=c(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-1uoywmr"&&(y.textContent=$t),ct=c(t),C=o(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-1bpdgv1"&&(C.textContent=Ot),it=c(t),_=o(t,"H2",{"data-svelte-h":!0}),p(_)!=="svelte-knk2o3"&&(_.textContent=Jt),ut=c(t),T=o(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1xn1p3q"&&(T.innerHTML=Kt),rt=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-g5df5h"&&(P.innerHTML=Xt),dt=c(t),B=o(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-183qwy3"&&(B.textContent=Qt),kt=c(t),H=o(t,"UL",{"data-svelte-h":!0}),p(H)!=="svelte-63e1ap"&&(H.innerHTML=Zt),ht=c(t),A=o(t,"PRE",{class:!0});var e=d(A);mt=K(e,!1),e.forEach(n),gt=c(t),M=o(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-nh2s20"&&(M.textContent=tn),vt=c(t),S=o(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1peuv4h"&&(S.innerHTML=nn),ft=c(t),h=o(t,"DIV",{class:!0});var Yt=d(h);I=o(Yt,"DIV",{class:!0,"data-svelte-h":!0}),p(I)!=="svelte-1llzxwj"&&(I.textContent=en),X=o(Yt,"P",{"data-svelte-h":!0}),p(X)!=="svelte-jybdk5"&&(X.textContent=an),N=o(Yt,"DIV",{});var Ut=d(N);An(E.$$.fragment,Ut),m=o(Ut,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(m)!=="svelte-t2byev"&&(m.textContent=sn),Q=o(Ut,"PRE",{class:!0});var yn=d(Q);wt=K(yn,!1),yn.forEach(n),Ut.forEach(n),Yt.forEach(n),xt=c(t),L=o(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1blxrl9"&&(L.innerHTML=on),bt=c(t),j=o(t,"P",{"data-svelte-h":!0}),p(j)!=="svelte-g5phbo"&&(j.innerHTML=pn),yt=c(t),R=o(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1y1m94d"&&(R.innerHTML=ln),Ct=c(t),V=o(t,"PRE",{class:!0});var Cn=d(V);_t=K(Cn,!1),Cn.forEach(n),Tt=c(t),D=o(t,"P",{"data-svelte-h":!0}),p(D)!=="svelte-14ufbir"&&(D.innerHTML=cn),Pt=c(t),G=o(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-kkoe7e"&&(G.innerHTML=un),Bt=c(t),Y=o(t,"PRE",{class:!0});var _n=d(Y);Ht=K(_n,!1),_n.forEach(n),At=c(t),r=o(t,"DIV",{class:!0});var O=d(r);U=o(O,"DIV",{class:!0,"data-svelte-h":!0}),p(U)!=="svelte-l6sgde"&&(U.textContent=rn),Z=o(O,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-1osh3hk"&&(Z.innerHTML=dn),tt=o(O,"P",{"data-svelte-h":!0}),p(tt)!=="svelte-efefj2"&&(tt.textContent=kn),nt=o(O,"PRE",{class:!0});var Tn=d(nt);Mt=K(Tn,!1),Tn.forEach(n),et=o(O,"P",{"data-svelte-h":!0}),p(et)!=="svelte-16wrnuy"&&(et.textContent=hn),at=o(O,"PRE",{class:!0});var Pn=d(at);St=K(Pn,!1),Pn.forEach(n),O.forEach(n),It=c(t),v=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(v)!=="svelte-1lezium"&&(v.innerHTML=mn),Nt=c(t),f=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(f)!=="svelte-x273pl"&&(f.innerHTML=gn),Et=c(t),q=o(t,"H3",{"data-svelte-h":!0}),p(q)!=="svelte-9nes82"&&(q.textContent=vn),Lt=c(t),F=o(t,"P",{"data-svelte-h":!0}),p(F)!=="svelte-1b7xb8t"&&(F.textContent=fn),jt=c(t),w=o(t,"DIV",{});var qt=d(w);An(z.$$.fragment,qt),g=o(qt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-e7aeb3"&&(g.textContent=wn),st=o(qt,"PRE",{class:!0});var Bn=d(st);Rt=K(Bn,!1),Bn.forEach(n),qt.forEach(n),Vt=c(t),W=o(t,"H2",{"data-svelte-h":!0}),p(W)!=="svelte-p2uhy5"&&(W.textContent=xn),Dt=c(t),$=o(t,"P",{"data-svelte-h":!0}),p($)!=="svelte-1kv094t"&&($.innerHTML=bn),this.h()},h(){mt.a=null,i(A,"class","language-js"),i(I,"class","remark-container__title"),i(m,"target","_blank"),i(m,"href","/editor#eNrFUm1LwzAQ/ivxEFwhjHUwkIJIJ6L7oIgKOtygob1uxSwpSYqO0v9uYt1cxjbmJz+05Hp5Xu651sDKEqIaUpkhRJBypjW5W8ZlSfDToMg0sed6IibGPalCZvDJMGUe2Aw7QdsxCk2lBFk33NemBTXQUMglz1BpiN5qKDKIQgqCLZziNwQoyDzXaF4h6q3OY3tuphRKy+chW7JRW3jG1/pr865Yu3eS5IIkMS9STPyZbqpie5pnS9I19tVJbpFzSU7rsus4mpMk8Cak8GnNnA8oLCHqD8KV7WdclNySe/Y9x7F+H+VxVvEDtqUYYi7Vb9ob2gfsP8oP3U3nBc8Uis4P0jyVLEW6qjZGjBWSpazId7jEzJkg4fllEtDdyCvJq4XYIbB9cWKGlbEz/MjcyyToumw6ouI8oEfCxqiPw606gReSFHFuUO1K0P2f7W76W7u5FhYSz/C/N/MyZ+ZMu+UoYtX378RLLOztDsy/NDjiUv8Ypv4epk2Hf9nJtPkCiJ+r9w=="),i(m,"title","Open in our Online Editor"),wt.a=null,i(Q,"class","language-js"),i(h,"class","remark-container tip"),_t.a=null,i(V,"class","language-js"),Ht.a=null,i(Y,"class","language-js"),i(U,"class","remark-container__title"),Mt.a=null,i(nt,"class","language-js"),St.a=null,i(at,"class","language-js"),i(r,"class","remark-container warning"),i(v,"class","remark-container tip"),i(f,"class","remark-container warning"),i(g,"target","_blank"),i(g,"href","/editor#eNrFU2Fr2zAQ/SuaGMwGYZpAoBhGccrY+mFlrIGtLIVo9rkJUyQhyazB+L/vFM1ulbrDYx/2wUa6u/fu7j27pVxrmre0VBXQnJaCW0s+HgqtCTw4kJUleG7Xcu38UxrgDm4cN+4Tv4ckDRlnwDVGkiHho10AdbRjtFaiAmNp/q2lu4rmM0Yl3/uORwhlVNW1BfeV5mf9+RbP3R2jGvkiZCC7Cpdo8KH/MLy/DNP7luQt2RRiV8Kmj2Kra0ys1DE8rKSz5+XdM8xSfR9BYDSuD7q9b3anin1WP21WbneiMiCTkFq7FY6fOXwlmw8ghCKv20DevdqkrK9aNs4p+bvucssl7n2cwCkSZk4zjFYCTKKzeM1pLH6PUQ5MpIEgjaxm9AFdOV8weqD5fDHr/VvBXgtUIPIxsq6wP67qomrEH/xTcgm1Mo8e/YvGN5qXwEYULwyQg2rI8SsjDrcns/OLJ7rHyEslmr0caXBaeCL1tUJpvTaJbIRI2UTYLdhpuD6TRiIpWdQOvRxR0P+owZv5iTfvJEKKe/jfznzZcvfGenMMwe4vexIpNjsbFywuWkwomk9hmr/A9HTCv/HkrvsFnxoNMQ=="),i(g,"title","Open in our Online Editor"),Rt.a=null,i(st,"class","language-js")},m(t,e){a(t,k,e),a(t,ot,e),a(t,x,e),a(t,pt,e),a(t,b,e),a(t,lt,e),a(t,y,e),a(t,ct,e),a(t,C,e),a(t,it,e),a(t,_,e),a(t,ut,e),a(t,T,e),a(t,rt,e),a(t,P,e),a(t,dt,e),a(t,B,e),a(t,kt,e),a(t,H,e),a(t,ht,e),a(t,A,e),mt.m(jn,A),a(t,gt,e),a(t,M,e),a(t,vt,e),a(t,S,e),a(t,ft,e),a(t,h,e),u(h,I),u(h,X),u(h,N),Mn(E,N,null),u(N,m),u(N,Q),wt.m(Rn,Q),a(t,xt,e),a(t,L,e),a(t,bt,e),a(t,j,e),a(t,yt,e),a(t,R,e),a(t,Ct,e),a(t,V,e),_t.m(Vn,V),a(t,Tt,e),a(t,D,e),a(t,Pt,e),a(t,G,e),a(t,Bt,e),a(t,Y,e),Ht.m(Dn,Y),a(t,At,e),a(t,r,e),u(r,U),u(r,Z),u(r,tt),u(r,nt),Mt.m(Gn,nt),u(r,et),u(r,at),St.m(Yn,at),a(t,It,e),a(t,v,e),a(t,Nt,e),a(t,f,e),a(t,Et,e),a(t,q,e),a(t,Lt,e),a(t,F,e),a(t,jt,e),a(t,w,e),Mn(z,w,null),u(w,g),u(w,st),Rt.m(Un,st),a(t,Vt,e),a(t,W,e),a(t,Dt,e),a(t,$,e),Gt=!0},p:Fn,i(t){Gt||(Sn(E.$$.fragment,t),Sn(z.$$.fragment,t),Gt=!0)},o(t){In(E.$$.fragment,t),In(z.$$.fragment,t),Gt=!1},d(t){t&&(n(k),n(ot),n(x),n(pt),n(b),n(lt),n(y),n(ct),n(C),n(it),n(_),n(ut),n(T),n(rt),n(P),n(dt),n(B),n(kt),n(H),n(ht),n(A),n(gt),n(M),n(vt),n(S),n(ft),n(h),n(xt),n(L),n(bt),n(j),n(yt),n(R),n(Ct),n(V),n(Tt),n(D),n(Pt),n(G),n(Bt),n(Y),n(At),n(r),n(It),n(v),n(Nt),n(f),n(Et),n(q),n(Lt),n(F),n(jt),n(w),n(Vt),n(W),n(Dt),n($)),Nn(E),Nn(z)}}}class Xn extends zn{constructor(k){super(),Wn(this,k,null,$n,qn,{})}}export{Xn as component};
