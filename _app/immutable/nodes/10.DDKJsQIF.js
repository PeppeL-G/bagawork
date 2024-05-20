import{s as An,n as Gn}from"../chunks/scheduler.DFPFbGJz.js";import{S as In,i as Hn,e as n,s as c,c as A,H as G,a,g as p,b as u,d as i,f as I,n as H,h as e,o,j as l,p as r,m as L,t as b,k as V,l as j}from"../chunks/index.CzDE4dZi.js";import{V as O}from"../chunks/ViewApp.C2MU7-ZI.js";function Ln(wn){let d,Ge="BBCode",bt,W,Ie="On this page you find the documentation for how to format text in your BagaWork apps using BBCode.",Vt,M,He="Introduction",jt,D,Le='Various GUI components display text on the screen, such as the <a href="/documentation/text/" title="Open the documentation for Text.">Text</a> component and the <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> component (using the configuration method <code>textWithBBCod()</code> instead of <code>text()</code>). That text can contain BBCode, which are instructions about how the text should be formatted. You will find the BBCode tags BagaWork supports on this page.',Ot,z,be="[b] - Making text bold",Wt,R,Ve="To make text display as bold, surround the text with <code>[b]</code> and <code>[/b]</code>.",Mt,C,U,je="Example",Y,N,x,Oe="Open in Online Editor",Et,Dt,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [b]how are[/b] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,zt,K,We="[i] - Making text italic",Rt,F,Me="To make text display as italic, surround the text with <code>[i]</code> and <code>[/i]</code>.",Ut,S,Q,De="Example",Z,q,g,ze="Open in Online Editor",Tt,Yt,Sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [i]how are[/i] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Nt,J,Re="[u] - Making text underlined",Kt,X,Ue="To make text display as underlined, surround the text with <code>[u]</code> and <code>[/u]</code>.",Ft,B,$,Ye="Example",tt,et,f,Ne="Open in Online Editor",_t,Qt,Bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [u]how are[/u] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zt,nt,Ke="[s] - Making text strikedhroughed",qt,at,Fe="To make text display as strikethoughed, surround the text with <code>[s]</code> and <code>[/s]</code>.",Jt,P,st,Qe="Example",lt,ot,k,Ze="Open in Online Editor",At,Xt,Pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [s]how are[/s] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$t,pt,qe="[size] - Changing the size of the text",te,rt,Je="To change the size of the text, surround the text with <code>[size=THE_SIZE]</code> and <code>[/size]</code>, where <code>THE_SIZE</code> is the number of millimeters tall the text should be.",ee,y,ct,Xe="Example",ut,it,h,$e="Open in Online Editor",Gt,ne,yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [size=15]how are[/size] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ae,dt,tn="[color] - Changing the color of the text",se,xt,en="To change the color of the text, surround the text with <code>[color=THE_COLOR]</code> and <code>[/color]</code>, where <code>THE_COLOR</code> is the english name of the color the text should have, such as <code>red</code> or <code>blue</code>.",le,E,gt,nn="Example",ft,kt,v,an="Open in Online Editor",It,oe,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, [color=red]how are[/color] you?</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pe,ht,sn="[url] - Making text a URL",re,vt,ln="To make text display as a URL the user can click on to open the webpage the URL leads to in a web browser, surround the text with <code>[url]</code> and <code>[/url]</code>.",ce,T,mt,on="Example",wt,Ct,m,pn="Open in Online Editor",Ht,ue,Tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url]https://nintendo.se[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ie,St,rn="If you want the URL to display another text, surround the text with <code>[url=THE_URL]</code> and <code>[/url]</code>.",de,_,Bt,cn="Example",Pt,yt,w,un="Open in Online Editor",Lt,xe,_n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to [url=https://nintendo.se]Nintendo's website[/url].</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ge;return N=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [b]how are[/b] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),q=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [i]how are[/i] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),et=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [u]how are[/u] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),ot=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [s]how are[/s] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),it=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [size=15]how are[/size] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),kt=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Hello, [color=red]how are[/color] you?\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Ct=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url]https://nintendo.se[/url].\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),yt=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.textWithBBCode(
			\`Go to [url=https://nintendo.se]Nintendo's website[/url].\`
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){d=n("h1"),d.textContent=Ge,bt=c(),W=n("p"),W.textContent=Ie,Vt=c(),M=n("h2"),M.textContent=He,jt=c(),D=n("p"),D.innerHTML=Le,Ot=c(),z=n("h2"),z.textContent=be,Wt=c(),R=n("p"),R.innerHTML=Ve,Mt=c(),C=n("div"),U=n("div"),U.textContent=je,Y=n("div"),A(N.$$.fragment),x=n("a"),x.textContent=Oe,Et=n("pre"),Dt=new G(!1),zt=c(),K=n("h2"),K.textContent=We,Rt=c(),F=n("p"),F.innerHTML=Me,Ut=c(),S=n("div"),Q=n("div"),Q.textContent=De,Z=n("div"),A(q.$$.fragment),g=n("a"),g.textContent=ze,Tt=n("pre"),Yt=new G(!1),Nt=c(),J=n("h2"),J.textContent=Re,Kt=c(),X=n("p"),X.innerHTML=Ue,Ft=c(),B=n("div"),$=n("div"),$.textContent=Ye,tt=n("div"),A(et.$$.fragment),f=n("a"),f.textContent=Ne,_t=n("pre"),Qt=new G(!1),Zt=c(),nt=n("h2"),nt.textContent=Ke,qt=c(),at=n("p"),at.innerHTML=Fe,Jt=c(),P=n("div"),st=n("div"),st.textContent=Qe,lt=n("div"),A(ot.$$.fragment),k=n("a"),k.textContent=Ze,At=n("pre"),Xt=new G(!1),$t=c(),pt=n("h2"),pt.textContent=qe,te=c(),rt=n("p"),rt.innerHTML=Je,ee=c(),y=n("div"),ct=n("div"),ct.textContent=Xe,ut=n("div"),A(it.$$.fragment),h=n("a"),h.textContent=$e,Gt=n("pre"),ne=new G(!1),ae=c(),dt=n("h2"),dt.textContent=tn,se=c(),xt=n("p"),xt.innerHTML=en,le=c(),E=n("div"),gt=n("div"),gt.textContent=nn,ft=n("div"),A(kt.$$.fragment),v=n("a"),v.textContent=an,It=n("pre"),oe=new G(!1),pe=c(),ht=n("h2"),ht.textContent=sn,re=c(),vt=n("p"),vt.innerHTML=ln,ce=c(),T=n("div"),mt=n("div"),mt.textContent=on,wt=n("div"),A(Ct.$$.fragment),m=n("a"),m.textContent=pn,Ht=n("pre"),ue=new G(!1),ie=c(),St=n("p"),St.innerHTML=rn,de=c(),_=n("div"),Bt=n("div"),Bt.textContent=cn,Pt=n("div"),A(yt.$$.fragment),w=n("a"),w.textContent=un,Lt=n("pre"),xe=new G(!1),this.h()},l(t){d=a(t,"H1",{"data-svelte-h":!0}),p(d)!=="svelte-ylq00h"&&(d.textContent=Ge),bt=u(t),W=a(t,"P",{"data-svelte-h":!0}),p(W)!=="svelte-1b7h4us"&&(W.textContent=Ie),Vt=u(t),M=a(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-1ukekoe"&&(M.textContent=He),jt=u(t),D=a(t,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1w24ztl"&&(D.innerHTML=Le),Ot=u(t),z=a(t,"H2",{"data-svelte-h":!0}),p(z)!=="svelte-zvigk0"&&(z.textContent=be),Wt=u(t),R=a(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-13jqkcj"&&(R.innerHTML=Ve),Mt=u(t),C=a(t,"DIV",{class:!0});var s=i(C);U=a(s,"DIV",{class:!0,"data-svelte-h":!0}),p(U)!=="svelte-1llzxwj"&&(U.textContent=je),Y=a(s,"DIV",{});var fe=i(Y);I(N.$$.fragment,fe),x=a(fe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(x)!=="svelte-1aichi4"&&(x.textContent=Oe),Et=a(fe,"PRE",{class:!0});var dn=i(Et);Dt=H(dn,!1),dn.forEach(e),fe.forEach(e),s.forEach(e),zt=u(t),K=a(t,"H2",{"data-svelte-h":!0}),p(K)!=="svelte-1y5276y"&&(K.textContent=We),Rt=u(t),F=a(t,"P",{"data-svelte-h":!0}),p(F)!=="svelte-10w7ldy"&&(F.innerHTML=Me),Ut=u(t),S=a(t,"DIV",{class:!0});var Be=i(S);Q=a(Be,"DIV",{class:!0,"data-svelte-h":!0}),p(Q)!=="svelte-1llzxwj"&&(Q.textContent=De),Z=a(Be,"DIV",{});var ke=i(Z);I(q.$$.fragment,ke),g=a(ke,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-pcskz9"&&(g.textContent=ze),Tt=a(ke,"PRE",{class:!0});var xn=i(Tt);Yt=H(xn,!1),xn.forEach(e),ke.forEach(e),Be.forEach(e),Nt=u(t),J=a(t,"H2",{"data-svelte-h":!0}),p(J)!=="svelte-nz0xvy"&&(J.textContent=Re),Kt=u(t),X=a(t,"P",{"data-svelte-h":!0}),p(X)!=="svelte-14vvz32"&&(X.innerHTML=Ue),Ft=u(t),B=a(t,"DIV",{class:!0});var Pe=i(B);$=a(Pe,"DIV",{class:!0,"data-svelte-h":!0}),p($)!=="svelte-1llzxwj"&&($.textContent=Ye),tt=a(Pe,"DIV",{});var he=i(tt);I(et.$$.fragment,he),f=a(he,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-utntz4"&&(f.textContent=Ne),_t=a(he,"PRE",{class:!0});var gn=i(_t);Qt=H(gn,!1),gn.forEach(e),he.forEach(e),Pe.forEach(e),Zt=u(t),nt=a(t,"H2",{"data-svelte-h":!0}),p(nt)!=="svelte-gxnws6"&&(nt.textContent=Ke),qt=u(t),at=a(t,"P",{"data-svelte-h":!0}),p(at)!=="svelte-1dd4dd6"&&(at.innerHTML=Fe),Jt=u(t),P=a(t,"DIV",{class:!0});var ye=i(P);st=a(ye,"DIV",{class:!0,"data-svelte-h":!0}),p(st)!=="svelte-1llzxwj"&&(st.textContent=Qe),lt=a(ye,"DIV",{});var ve=i(lt);I(ot.$$.fragment,ve),k=a(ve,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(k)!=="svelte-1dwm9mu"&&(k.textContent=Ze),At=a(ve,"PRE",{class:!0});var fn=i(At);Xt=H(fn,!1),fn.forEach(e),ve.forEach(e),ye.forEach(e),$t=u(t),pt=a(t,"H2",{"data-svelte-h":!0}),p(pt)!=="svelte-1nytq7i"&&(pt.textContent=qe),te=u(t),rt=a(t,"P",{"data-svelte-h":!0}),p(rt)!=="svelte-6xhjuu"&&(rt.innerHTML=Je),ee=u(t),y=a(t,"DIV",{class:!0});var Ee=i(y);ct=a(Ee,"DIV",{class:!0,"data-svelte-h":!0}),p(ct)!=="svelte-1llzxwj"&&(ct.textContent=Xe),ut=a(Ee,"DIV",{});var me=i(ut);I(it.$$.fragment,me),h=a(me,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(h)!=="svelte-cn4yv6"&&(h.textContent=$e),Gt=a(me,"PRE",{class:!0});var kn=i(Gt);ne=H(kn,!1),kn.forEach(e),me.forEach(e),Ee.forEach(e),ae=u(t),dt=a(t,"H2",{"data-svelte-h":!0}),p(dt)!=="svelte-1tiusco"&&(dt.textContent=tn),se=u(t),xt=a(t,"P",{"data-svelte-h":!0}),p(xt)!=="svelte-1viqgqi"&&(xt.innerHTML=en),le=u(t),E=a(t,"DIV",{class:!0});var Te=i(E);gt=a(Te,"DIV",{class:!0,"data-svelte-h":!0}),p(gt)!=="svelte-1llzxwj"&&(gt.textContent=nn),ft=a(Te,"DIV",{});var we=i(ft);I(kt.$$.fragment,we),v=a(we,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-fv03ka"&&(v.textContent=an),It=a(we,"PRE",{class:!0});var hn=i(It);oe=H(hn,!1),hn.forEach(e),we.forEach(e),Te.forEach(e),pe=u(t),ht=a(t,"H2",{"data-svelte-h":!0}),p(ht)!=="svelte-oicxmm"&&(ht.textContent=sn),re=u(t),vt=a(t,"P",{"data-svelte-h":!0}),p(vt)!=="svelte-dzldro"&&(vt.innerHTML=ln),ce=u(t),T=a(t,"DIV",{class:!0});var _e=i(T);mt=a(_e,"DIV",{class:!0,"data-svelte-h":!0}),p(mt)!=="svelte-1llzxwj"&&(mt.textContent=on),wt=a(_e,"DIV",{});var Ce=i(wt);I(Ct.$$.fragment,Ce),m=a(Ce,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(m)!=="svelte-1p83g6l"&&(m.textContent=pn),Ht=a(Ce,"PRE",{class:!0});var vn=i(Ht);ue=H(vn,!1),vn.forEach(e),Ce.forEach(e),_e.forEach(e),ie=u(t),St=a(t,"P",{"data-svelte-h":!0}),p(St)!=="svelte-1o8lgoj"&&(St.innerHTML=rn),de=u(t),_=a(t,"DIV",{class:!0});var Ae=i(_);Bt=a(Ae,"DIV",{class:!0,"data-svelte-h":!0}),p(Bt)!=="svelte-1llzxwj"&&(Bt.textContent=cn),Pt=a(Ae,"DIV",{});var Se=i(Pt);I(yt.$$.fragment,Se),w=a(Se,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(w)!=="svelte-g86s6t"&&(w.textContent=un),Lt=a(Se,"PRE",{class:!0});var mn=i(Lt);xe=H(mn,!1),mn.forEach(e),Se.forEach(e),Ae.forEach(e),this.h()},h(){o(U,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrFUlFLwzAQ/ivhXlwhTFcZaF+kG6I+KOIElXXQrL3aYpaUJGUbo//ddN2qHRvUJx/a3iXf3ffdd90Ay3PwNhDJGMGDiDOtyePaz3OCK4Mi1sTGm0AEJlLIDE4MU+aZfWLP2Z4GRqEplCDNRXVaBqKEkkIieYxKgzfdQBaDN6Ag2KJi2sKBgkwSjeYdvIt9/GHjckYht71alXWzhzppCW64G9FV8kv1XZEd6n210L6xr7fMpKPR2Pbr1YDAhPfIuaRkOp+lckmYwun5fEbWsrgJa4zTTElhBZ576VJY2+/wei/9FRc5t9StEVqqff31kPhxwU9Irx4pRphI9eP2jrcOTg73Ipe6H6UZjxWKZqxJziKk+6wxoBf6CqvhyNZgYlImyODqJnTo8cqx5MVCHCE4BAZmVBg7w47mSYZOv/KmJwrOHdqx7AN1t7r9jdMySQo/MaiOOVj9o/Vu3IPd3Apb4n/if2/mLWXmTFfLUcSyn95Jy7HBxXHD2qBhB5DbpZN7otNvhX/Zyaz8BvPLqlQ="),o(x,"title","Open in our Online Editor"),Dt.a=null,o(Et,"class","language-js"),o(C,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNrFUlFLwzAQ/ivhXlwhzK0y0L5IO0R9UEQFHeugob3aYpaUJGWO0f9uuq7Vjg3mkw9t75Lv7vvuu26AFQV4G4hlguBBzJnW5GHtFwXBL4Mi0cTGm1CEJlbIDL4YpswT+8CBsz0NjUJTKkG6i/q0CkUFFYVU8gSVBm++gTwBb0xBsGXNtIUDBZmmGs07eKM2ntm4WlAobK9eZdPsvkl6gjvuTnSd/FJ9W+b7el8tdGjs6y03WRBMbb9BAwhNdIecS0rm+SKTK8IUzs/zBVnL8jpqME43JYUv8NwLl8LafidXrfRXXBbcUvdG6Kn29ed96iclPyK9fqQIMJXqx+0dbxMcHe5ZrvQwznKeKBTdWC8Fi5G2WWfAIPIV1sORrcHEZEyQ8eV15NDDlVPJy6U4QLAPDE1QGjvDjuZRRs6w9mYgSs4demLZDPVpde2N0zNJCj81qA45WP+jzW7cvd3cCFvif+B/b+YtY+ZM18tRxLIf30nPsfHosGF90OQEkHtKJ/dIp98K/7KTRfUNJB2qYg=="),o(g,"title","Open in our Online Editor"),Yt.a=null,o(Tt,"class","language-js"),o(S,"class","remark-container tip"),o($,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNrFUk1Lw0AQ/SvLXGxgqW1E0FwkLaI9KKKClqaQJZk0xe1u2A+0lPx3N00bTUmhnjwkmdl9M+/Nm2yAFQUEG0hkihBAwpnW5GEdFgXBL4Mi1cTFm0hEJlHIDL4YpswTW2DP255GRqGxSpDmojotI1FCSSGTPEWlIZhtYJlCMKQg2Kpi2sKBgswyjeYdgsE+nrq4nFMoXK9WZd1sUictwQ13I7pKfqm+s8tDva8O2jfu9bY0+Wg0dv16NSAy8T1yLimZ2XkuPwlTODu3c7KW9iauMV4zJYUvCPwLn8LafS+v99JfcVVwR90aoaU61B+TLEwtPyK9eqQYYSbVj9s73jo4Otyz/NT9JF/yVKFoxnopWIJ0nzUG9OJQYTUc2RpMTM4EGV7dxB7trhxLbleig+AQGJmRNW6GHc2jjL1+5U1PWM49emLZFPVpdfsbr2WSFGFmUHU5WP2j9W78g93cClcSLvC/N/OWM3Omq+Uo4tiP76Tl2HDQbVgbdHkCyD+lk3+k02+Ff9nJvPwGdtmqeg=="),o(f,"title","Open in our Online Editor"),Qt.a=null,o(_t,"class","language-js"),o(B,"class","remark-container tip"),o(st,"class","remark-container__title"),o(k,"target","_blank"),o(k,"href","/editor#eNrFUlFrwjAQ/ivhXmYhOO0Qtr5IlbH5sDGm4IYVGtqrlcWkJCkq0v++1M7OioJ72kPbu+S7+777rjtgWQbeDiIZI3gQcaY1edn6WUZwY1DEmth4F4jARAqZwbFhyryxBbac/WlgFJpcCVJflKdFIAooKCSSx6g0eLMdLGPwuhQEW5VMezhQkEmi0XyA1znEnzYu5hQy26tRWTUbVUlDcM1diy6TI9VP+fJU78RC28a+pkuTDgZD269VAQITPiPnkpKZnqdyTZjC2a2ek63M+2GFceopKWzAc+9cClv77T0cpE9wlXFL3RihodrXX6PEj3N+QXr5SDHARKpft394q+DicO9yrdtRuuSxQlGPNc5YhPSQ1Qa0Ql9hORzZG0xMygTp3vdDh56vHEqer8QZglNgYAa5sTP80LzK0GmX3rREzrlDryz7RH1d3eHGaZgkhZ8YVOccLP/RajfuyW4ehS3xF/jfm5mmzNzocjmKWPbLO2k41u2cN6wJ6l0Bcq/p5F7odKzwLzuZF99pD6p2"),o(k,"title","Open in our Online Editor"),Xt.a=null,o(At,"class","language-js"),o(P,"class","remark-container tip"),o(ct,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNrFUlFLwzAQ/ivhXlwhTFcZaEFGJ6I+KKLClHXQ0F5tMUtKkqJz9L+brK6uY4P55EPbu+S7u+/7rktgZQnBEhKZIgSQcKY1uVuEZUnw06BINbHxMhKRSRQyg0+GKfPA3rDnrU4jo9BUSpD2wp3WkaihppBJnqLSEEyXUKQQDCgINneTVnCgILNMo3mB4GQdv9q4nlEoba9OZdPstkk6hNvZLWmXbLC+roptvs8W2jf2NSlMPh5f2n69BhCZ+AY5l5RMdfGFF4PhLJcfhCmcHruDGVnIahQ3YK+VS+ETAv/Up7Cw3+H5WsMzzktuOXS0dOiH+v02C9OK79HgHinGmEn1a/vP3CbYq/JRfuh+khc8VShafU8lS5Cus9aJXhwqdOLIymlicibI4GwUe3R35aXk1VzsGLANjMy4MlbDz5h7GXt9501PVJx79MCyV9SH1a1vvI5JUoSZQbXLQfezNrvxt3ZzJWxJ+Ib/vZlJzsyRdstRxE7fv5OOY4OT3YZ1QcMDQP4hnfw9nTYZ/mUns/obHkStqQ=="),o(h,"title","Open in our Online Editor"),ne.a=null,o(Gt,"class","language-js"),o(y,"class","remark-container tip"),o(gt,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNrFUlFLwzAQ/ivhXlwhzK0y0IJIO0R9UESFKeugob3aYZaUJGWO0v9u2rpqxwbzyYe2d8l39933XUtgeQ5eCbFMEDyIOdOa3G/8PCf4aVAkmti4DEVoYoXM4LNhyjyydxw4zWloFJpCCdJd1KdVKCqoKKSSJ6g0ePMSlgl4YwqCrWqmBg4UZJpqNK/gjbbxm42rBYXc9upVts3u2qQ3cMfdDV0nv6a+KZa7875Y6NDY12xpsiCY2n6DFhCa6BY5l5TMY8mlulSYLDK5Jkzh/LQ5WpCNLK6iFu90iil8gueeuRQ29ju52Mp4wVXO7Rg9OT0Fvv64S/2k4Adk1I8UAaZS/Tj/zdsGB4U+ybUextmSJwpFJ/E5ZzHSbdaZMYh8hbU40phNTMYEGZ9fRQ7dXzmVvFiJPQS7wNAEhbEavmkeZOQMa28GouDcoUeWvaE+rm574/RMksJPDap9Dtb/a7sbd2c318KW+O/435uZZcyc6Ho5ilj2wzvpOTYe7TesD5ocAXKP6eQe6PR7wr/sZFF9AfQur0Y="),o(v,"title","Open in our Online Editor"),oe.a=null,o(It,"class","language-js"),o(E,"class","remark-container tip"),o(mt,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNrFUk1r4zAQ/StiLo1BOI1LYevL4pRSemhZtoVuiQMW9rg2VSQjjdmG4P++Uty4dUgge+rB9oz05uO95w2IpoF4A7kuEGLIpbCW3a+TpmH4TqgKy1y8SVVKuUFB+EjC0C/xipNge5qSQWqNYsOFP+1S1UHHodSyQGMhXmygLiCecVBi5Sdt4cBBl6VF+gPx+S5+cXG35NC4XqPKvtldn4wWHmYPS/vky9a3bb2/75ODhuRezzVV8/m16zfpASllt5qRZovWyGVF1Nh4OlW18q11aHEx9Rdh1sODgTCHd4iji4jD2n0vr3YsnnDVSLfFiM2IQGLf7sqkaOURFv7Rao6lNp/Cf8ztg6M8f+u/NsyrWhYG1cDwsRE58l02aDHJEoNsrVu21ZpRJRSb/fiZBfxw5bWW7UodGLAPTGnekuPwMeZBZ0HotZmoVsqAn1j2gva0ut1NMBJJq6QkNIcU9L9r7020582N890kr/jdzjxXgs6sN8cwN/24JyPFZueHBRuDLk8ARad0io50+rrh/3iy7P4B4V6uyw=="),o(m,"title","Open in our Online Editor"),ue.a=null,o(Ht,"class","language-js"),o(T,"class","remark-container tip"),o(Bt,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNrFUsFq4zAQ/RUxl8YgnMZLYWtYilNK6WHLsi20IQ5Ytce1qSIZaUwbgv995Tjx1iGB9NSD5ZE082bee1qDqCoI15DqDCGEVApr2e9VVFUMPwhVZpmL17GKKTUoCB9IGPojXnHkbU5jMki1Uay/aE+bWDXQcMi1zNBYCOdrKDMIJxyUWLadNunAQee5RXqG8HwXz1zcLDhUDmtQ2YHddZvBwH3vfuh282nq27rcn/fRpfrklqeSiun02uGNuoSYklvNSLN5beSvgqiy4XisStVCa9/i4n4bn1n2ji+2JJyPXe7CTzoEr9eAwweEwY+Aw8r9Ly53xB5xWUk32IDggFNk3+7yKKvlEWLtp9UUc23+e7Ht2wVHqf/V79ZPi1JmBlVP+qESKfLdrpdnlEQG2UrXbCM/o0IoNvl5lXj8cOW1lvVSHWiwnxjTtCbHYdvmXiee32ozUrWUHj+xbIb2tLrdjTcQSasoJzSHFGxfcOdNsOfNjbPfRK/43c48FYLcG3TmGOa6H/dkoNjk/LBgw6SLE5KCU5CCI0ifJ/yKJ4vmH80TtfQ="),o(w,"title","Open in our Online Editor"),xe.a=null,o(Lt,"class","language-js"),o(_,"class","remark-container tip")},m(t,s){l(t,d,s),l(t,bt,s),l(t,W,s),l(t,Vt,s),l(t,M,s),l(t,jt,s),l(t,D,s),l(t,Ot,s),l(t,z,s),l(t,Wt,s),l(t,R,s),l(t,Mt,s),l(t,C,s),r(C,U),r(C,Y),L(N,Y,null),r(Y,x),r(Y,Et),Dt.m(Cn,Et),l(t,zt,s),l(t,K,s),l(t,Rt,s),l(t,F,s),l(t,Ut,s),l(t,S,s),r(S,Q),r(S,Z),L(q,Z,null),r(Z,g),r(Z,Tt),Yt.m(Sn,Tt),l(t,Nt,s),l(t,J,s),l(t,Kt,s),l(t,X,s),l(t,Ft,s),l(t,B,s),r(B,$),r(B,tt),L(et,tt,null),r(tt,f),r(tt,_t),Qt.m(Bn,_t),l(t,Zt,s),l(t,nt,s),l(t,qt,s),l(t,at,s),l(t,Jt,s),l(t,P,s),r(P,st),r(P,lt),L(ot,lt,null),r(lt,k),r(lt,At),Xt.m(Pn,At),l(t,$t,s),l(t,pt,s),l(t,te,s),l(t,rt,s),l(t,ee,s),l(t,y,s),r(y,ct),r(y,ut),L(it,ut,null),r(ut,h),r(ut,Gt),ne.m(yn,Gt),l(t,ae,s),l(t,dt,s),l(t,se,s),l(t,xt,s),l(t,le,s),l(t,E,s),r(E,gt),r(E,ft),L(kt,ft,null),r(ft,v),r(ft,It),oe.m(En,It),l(t,pe,s),l(t,ht,s),l(t,re,s),l(t,vt,s),l(t,ce,s),l(t,T,s),r(T,mt),r(T,wt),L(Ct,wt,null),r(wt,m),r(wt,Ht),ue.m(Tn,Ht),l(t,ie,s),l(t,St,s),l(t,de,s),l(t,_,s),r(_,Bt),r(_,Pt),L(yt,Pt,null),r(Pt,w),r(Pt,Lt),xe.m(_n,Lt),ge=!0},p:Gn,i(t){ge||(b(N.$$.fragment,t),b(q.$$.fragment,t),b(et.$$.fragment,t),b(ot.$$.fragment,t),b(it.$$.fragment,t),b(kt.$$.fragment,t),b(Ct.$$.fragment,t),b(yt.$$.fragment,t),ge=!0)},o(t){V(N.$$.fragment,t),V(q.$$.fragment,t),V(et.$$.fragment,t),V(ot.$$.fragment,t),V(it.$$.fragment,t),V(kt.$$.fragment,t),V(Ct.$$.fragment,t),V(yt.$$.fragment,t),ge=!1},d(t){t&&(e(d),e(bt),e(W),e(Vt),e(M),e(jt),e(D),e(Ot),e(z),e(Wt),e(R),e(Mt),e(C),e(zt),e(K),e(Rt),e(F),e(Ut),e(S),e(Nt),e(J),e(Kt),e(X),e(Ft),e(B),e(Zt),e(nt),e(qt),e(at),e(Jt),e(P),e($t),e(pt),e(te),e(rt),e(ee),e(y),e(ae),e(dt),e(se),e(xt),e(le),e(E),e(pe),e(ht),e(re),e(vt),e(ce),e(T),e(ie),e(St),e(de),e(_)),j(N),j(q),j(et),j(ot),j(it),j(kt),j(Ct),j(yt)}}}class On extends In{constructor(d){super(),Hn(this,d,null,Ln,An,{})}}export{On as component};
