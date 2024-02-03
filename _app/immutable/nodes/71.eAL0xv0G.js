import{s as Pn,n as An}from"../chunks/scheduler.UQwd20JU.js";import{S as _n,i as Sn,e,s as c,H as V,c as jt,a as s,g as o,b as i,d as r,n as W,h as n,f as Et,o as l,j as p,p as u,m as Rt,t as It,k as Mt,l as Gt}from"../chunks/index.i__Fl8cY.js";import{V as zt}from"../chunks/ViewApp.m6vzcyjb.js";function Tn(fn){let k,Ft="4. App Variables and Methods",et,y,Lt="This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.",st,b,Xt="Why app variables are needed",pt,P,Ot="A page variable can only be accessed and used on the page the created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.",ot,A,Vt="How to create app variables",lt,_,Wt="To create an app variable, we write the same code as for creating an app constant, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",ct,S,Qt="In the code below you find an example of how to create the following app variables:",it,T,Yt="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",ut,B,rt,hn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app variables as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,kt,H,Dt="How to use app variables",dt,N,qt="To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write <code>a.theName</code>. For example, to obtain the value stored in the app variable <code>lastVisit</code>, we would write <code>a.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",mt,d,j,Kt="Example",Q,$t="Example of an app using an app variable.",v,E,m,Jt="Open in Online Editor",Y,gt,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,D,ft,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ht,R,Ut="As you can see in the example above, we can use the special <code>a</code> variable in your <code>Page</code> classes Bagawork to access your app variables.",xt,g,I,Zt="Example",q,tn="Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.",w,M,f,nn="Open in Online Editor",K,vt,wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$,wt,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">setNameToAlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ct,G,an="App methods",yt,z,en="A page method can only be used in the <code>Page</code> that created the page method. If you want to be able to use the method in many different pages, you should isntead create the method as an <em>app method</em> by writing it in your <code>App</code> class instead. Then you can access it from all your methods using <code>a.theNameOfTheMethod</code>.",bt,h,F,sn="Example",J,pn="Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.",C,L,x,on="Open in Online Editor",U,Pt,yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToAlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Z,At,bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,X,ln="That's it!",St,O,cn="Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use <code>p</code> or <code>a</code> to access them. If you will just use it in one of your pages, then write it in that <code>Page</code> class, and if you need to use it in multiple pages, then write it in your <code>App</code> class instead.",Tt;return E=new zt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`Hello \${a.name}!\`)
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
	
}`}]}}}),M=new zt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	setNameToAlice(){
		a.name = \`Alice\`
	}
	
	setNameToBob(){
		a.name = \`Bob\`
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Button.text(\`Change name to Alice\`).handler(p.setNameToAlice),
			Button.text(\`Change name to Bob\`).handler(p.setNameToBob),
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
	
}`}]}}}),L=new zt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	setNameToAlice(){
		a.name = \`Alice\`
	}
	
	setNameToBob(){
		a.name = \`Bob\`
	}
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Button.text(\`Change name to Alice\`).handler(a.setNameToAlice),
			Button.text(\`Change name to Bob\`).handler(a.setNameToBob),
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
	
}`}]}}}),{c(){k=e("h1"),k.textContent=Ft,et=c(),y=e("p"),y.textContent=Lt,st=c(),b=e("h2"),b.textContent=Xt,pt=c(),P=e("p"),P.textContent=Ot,ot=c(),A=e("h2"),A.textContent=Vt,lt=c(),_=e("p"),_.innerHTML=Wt,ct=c(),S=e("p"),S.textContent=Qt,it=c(),T=e("ul"),T.innerHTML=Yt,ut=c(),B=e("pre"),rt=new V(!1),kt=c(),H=e("h2"),H.textContent=Dt,dt=c(),N=e("p"),N.innerHTML=qt,mt=c(),d=e("div"),j=e("div"),j.textContent=Kt,Q=e("p"),Q.textContent=$t,v=e("div"),jt(E.$$.fragment),m=e("a"),m.textContent=Jt,Y=e("pre"),gt=new V(!1),D=e("pre"),ft=new V(!1),ht=c(),R=e("p"),R.innerHTML=Ut,xt=c(),g=e("div"),I=e("div"),I.textContent=Zt,q=e("p"),q.textContent=tn,w=e("div"),jt(M.$$.fragment),f=e("a"),f.textContent=nn,K=e("pre"),vt=new V(!1),$=e("pre"),wt=new V(!1),Ct=c(),G=e("h3"),G.textContent=an,yt=c(),z=e("p"),z.innerHTML=en,bt=c(),h=e("div"),F=e("div"),F.textContent=sn,J=e("p"),J.textContent=pn,C=e("div"),jt(L.$$.fragment),x=e("a"),x.textContent=on,U=e("pre"),Pt=new V(!1),Z=e("pre"),At=new V(!1),_t=c(),X=e("h2"),X.textContent=ln,St=c(),O=e("p"),O.innerHTML=cn,this.h()},l(t){k=s(t,"H1",{"data-svelte-h":!0}),o(k)!=="svelte-pesbfn"&&(k.textContent=Ft),et=i(t),y=s(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1b4bgdm"&&(y.textContent=Lt),st=i(t),b=s(t,"H2",{"data-svelte-h":!0}),o(b)!=="svelte-13sv629"&&(b.textContent=Xt),pt=i(t),P=s(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-8rkeyq"&&(P.textContent=Ot),ot=i(t),A=s(t,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-14clwk7"&&(A.textContent=Vt),lt=i(t),_=s(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1ulzfst"&&(_.innerHTML=Wt),ct=i(t),S=s(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1r2u5wf"&&(S.textContent=Qt),it=i(t),T=s(t,"UL",{"data-svelte-h":!0}),o(T)!=="svelte-63e1ap"&&(T.innerHTML=Yt),ut=i(t),B=s(t,"PRE",{class:!0});var a=r(B);rt=W(a,!1),a.forEach(n),kt=i(t),H=s(t,"H2",{"data-svelte-h":!0}),o(H)!=="svelte-16zhqr0"&&(H.textContent=Dt),dt=i(t),N=s(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1vyh33t"&&(N.innerHTML=qt),mt=i(t),d=s(t,"DIV",{class:!0});var Bt=r(d);j=s(Bt,"DIV",{class:!0,"data-svelte-h":!0}),o(j)!=="svelte-1llzxwj"&&(j.textContent=Kt),Q=s(Bt,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1x96elv"&&(Q.textContent=$t),v=s(Bt,"DIV",{});var tt=r(v);Et(E.$$.fragment,tt),m=s(tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-r0df63"&&(m.textContent=Jt),Y=s(tt,"PRE",{class:!0});var un=r(Y);gt=W(un,!1),un.forEach(n),D=s(tt,"PRE",{class:!0});var rn=r(D);ft=W(rn,!1),rn.forEach(n),tt.forEach(n),Bt.forEach(n),ht=i(t),R=s(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-oq8mrc"&&(R.innerHTML=Ut),xt=i(t),g=s(t,"DIV",{class:!0});var Ht=r(g);I=s(Ht,"DIV",{class:!0,"data-svelte-h":!0}),o(I)!=="svelte-1llzxwj"&&(I.textContent=Zt),q=s(Ht,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1v6zj8y"&&(q.textContent=tn),w=s(Ht,"DIV",{});var nt=r(w);Et(M.$$.fragment,nt),f=s(nt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-mv4c0u"&&(f.textContent=nn),K=s(nt,"PRE",{class:!0});var kn=r(K);vt=W(kn,!1),kn.forEach(n),$=s(nt,"PRE",{class:!0});var dn=r($);wt=W(dn,!1),dn.forEach(n),nt.forEach(n),Ht.forEach(n),Ct=i(t),G=s(t,"H3",{"data-svelte-h":!0}),o(G)!=="svelte-1f3ry51"&&(G.textContent=an),yt=i(t),z=s(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-na3qi"&&(z.innerHTML=en),bt=i(t),h=s(t,"DIV",{class:!0});var Nt=r(h);F=s(Nt,"DIV",{class:!0,"data-svelte-h":!0}),o(F)!=="svelte-1llzxwj"&&(F.textContent=sn),J=s(Nt,"P",{"data-svelte-h":!0}),o(J)!=="svelte-106pdna"&&(J.textContent=pn),C=s(Nt,"DIV",{});var at=r(C);Et(L.$$.fragment,at),x=s(at,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-10uzyjd"&&(x.textContent=on),U=s(at,"PRE",{class:!0});var mn=r(U);Pt=W(mn,!1),mn.forEach(n),Z=s(at,"PRE",{class:!0});var gn=r(Z);At=W(gn,!1),gn.forEach(n),at.forEach(n),Nt.forEach(n),_t=i(t),X=s(t,"H2",{"data-svelte-h":!0}),o(X)!=="svelte-p2uhy5"&&(X.textContent=ln),St=i(t),O=s(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-ibl2jx"&&(O.innerHTML=cn),this.h()},h(){rt.a=null,l(B,"class","language-js"),l(j,"class","remark-container__title"),l(m,"target","_blank"),l(m,"href","/editor#eNrFUmFrwjAQ/SvZMZiFICoIUhijjrH5YWNMYZMpNLRXlcWkJClTSv/7UmudERX3aR8a7pJ79969aw4sTcHPIZIxgg8RZ1qT53WQpgRXBkWsiY3ziZiY8hNsieSWhAFfRBjWt5FCZnBomDKvbIYNr6o3Ck2mBNk9lLdFBSqgoJBIHqPS4H/msIjBb1MoCayODQQoyCTRaD7Ab9Xx2MbFlEJq+znIqtmgSpxxdvy7kcokd9U/ZotD3SNb3jT2aIRPyLkk1zlrlgKLq9BzZqGwsrS9LoU1+J1uuxY4wmXKbXNHqKMt0F+DJIgzfkagFH1MpPr1dY/7jPw3+a2b0XzBY4WisUWaYcoipHW2N2KgkKxlRjY2EjNngrR7d6FHjyPvJc+W4gjBYeHE9DNjZ9jSvMjQa5beNETGuUcvhI1RX4arXzzHJCmCxKA65mD5J1a76Rzs5kFYSDDD/97M+5yZG10uRxHLfnonjmPt1nHD3KLuBUWdSzp1TnTaV/iXnUyLH5d5q+g="),l(m,"title","Open in our Online Editor"),gt.a=null,l(Y,"class","language-js"),ft.a=null,l(D,"class","language-js"),l(d,"class","remark-container tip"),l(I,"class","remark-container__title"),l(f,"target","_blank"),l(f,"href","/editor#eNrFU11r2zAU/SvaZTAbhGkCgWIYxSlj68PKWANbWQrR7OsmTJGMLLMG4/++q2h2q9QdHnvYg40+7jn3nnPsFkRVQdpCrguEFHIp6pp9PGRVxfDBoipqRut2rdbWPUrskb1lm0zuctz0p7lBYfHGCmM/iXuMYl9vDdrGKDZcuNPOgzroOJRaFmhqSL+1sCsgnXFwDWiOIwQ46LKs0X6F9Kxf39K6u+NQEV+A9GRXfhPIGfoPktxm0ESk19R1pY+ihuFF8lxs9wyz1N9HEHQa1nuH3je7U28+6591km93sjCoIn+1tisaNLH0ijYfUErNXreevHu1iXlftWys1ep33eVWKFJ4nMBq5meOEzotJJqoSkKZ01icjlEOuugZ4iBVDg8UwPmCwwHS+WLWR7XCfSXJgiCyIKWs/nFVZkUj/xCVVksstXkM6V9MvqlEjnzE8swgO+iGHT8oZkk+m51fPDE+RF5q2ezVSIPTwhOvrzV567yJVCNlzCfCbrGehhsLyFmYlZbCHHHQ/ZM+m/lJNu8UQbJ7/N/JfNkK+6Z24RhG3V/OJHBsdjZuWFi0mFA0n8I0f4Hp6YR/k8ld9wuDYw0w"),l(f,"title","Open in our Online Editor"),vt.a=null,l(K,"class","language-js"),wt.a=null,l($,"class","language-js"),l(g,"class","remark-container tip"),l(F,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFk2Fr2zAQhv+KegxqgzBNIFAMZTildP3QUtbAGppCNPvchCmSkWTWYPzfd47rNErd4X3aBxvpdO/d6XntCkRRQFxBqjOEGFIprGW326QoGL46VJlltK4WauGaR4kNsgu2TOQ6xWUXteju6GCmd+EgbNOdiD6m1x80U/2zR0FRPz81KBw+OGHcvXh5b2LQlUax/cGBqIaaQ65lhsZC/FTBOoN4xKHpQXfdSYCDznMa5hHis249p3X9zKGgep6yLXbTbjxk+/57bM2m8qe/LtfHc3/Xv22UrtYyM6iC9mjhZlQkcvQKlt9QSs2+VC2a+mQZ8i5rWjqn1Vve5Uoo6r7j5zRriYcRRTOJJhCRb9KwKo0LvTXooKsQesQ5vBKc8wmHLcTjyajDOMNNIQmBh9MjmNhfN3mSlfIvGLWaYq7Nu/s9n8hgyA+FSJH3IE8Msq0u2c5s5uj6bHT+9QC8r7zUstyongbHiUes7zSxbdgEqpQy5ANlc7TDdH0GNQiT3JGZPQSb/6X1ZnzkzZUiSfKC/9uZHyvhTm1jjmHU/XNPPGKjs35gftJkQNJ4SKXxJ5UOJ/wXT57rP9nADRI="),l(x,"title","Open in our Online Editor"),Pt.a=null,l(U,"class","language-js"),At.a=null,l(Z,"class","language-js"),l(h,"class","remark-container tip")},m(t,a){p(t,k,a),p(t,et,a),p(t,y,a),p(t,st,a),p(t,b,a),p(t,pt,a),p(t,P,a),p(t,ot,a),p(t,A,a),p(t,lt,a),p(t,_,a),p(t,ct,a),p(t,S,a),p(t,it,a),p(t,T,a),p(t,ut,a),p(t,B,a),rt.m(hn,B),p(t,kt,a),p(t,H,a),p(t,dt,a),p(t,N,a),p(t,mt,a),p(t,d,a),u(d,j),u(d,Q),u(d,v),Rt(E,v,null),u(v,m),u(v,Y),gt.m(xn,Y),u(v,D),ft.m(vn,D),p(t,ht,a),p(t,R,a),p(t,xt,a),p(t,g,a),u(g,I),u(g,q),u(g,w),Rt(M,w,null),u(w,f),u(w,K),vt.m(wn,K),u(w,$),wt.m(Cn,$),p(t,Ct,a),p(t,G,a),p(t,yt,a),p(t,z,a),p(t,bt,a),p(t,h,a),u(h,F),u(h,J),u(h,C),Rt(L,C,null),u(C,x),u(C,U),Pt.m(yn,U),u(C,Z),At.m(bn,Z),p(t,_t,a),p(t,X,a),p(t,St,a),p(t,O,a),Tt=!0},p:An,i(t){Tt||(It(E.$$.fragment,t),It(M.$$.fragment,t),It(L.$$.fragment,t),Tt=!0)},o(t){Mt(E.$$.fragment,t),Mt(M.$$.fragment,t),Mt(L.$$.fragment,t),Tt=!1},d(t){t&&(n(k),n(et),n(y),n(st),n(b),n(pt),n(P),n(ot),n(A),n(lt),n(_),n(ct),n(S),n(it),n(T),n(ut),n(B),n(kt),n(H),n(dt),n(N),n(mt),n(d),n(ht),n(R),n(xt),n(g),n(Ct),n(G),n(yt),n(z),n(bt),n(h),n(_t),n(X),n(St),n(O)),Gt(E),Gt(M),Gt(L)}}}class jn extends _n{constructor(k){super(),Sn(this,k,null,Tn,Pn,{})}}export{jn as component};
