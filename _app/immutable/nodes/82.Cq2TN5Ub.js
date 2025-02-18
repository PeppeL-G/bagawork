import{s as Mn,n as On}from"../chunks/scheduler.B0TnBjPs.js";import{S as zn,i as In,e as a,s as i,c as H,H as E,a as p,g as l,b as c,d as r,f as L,n as A,h as e,o,j as s,p as u,m as j,t as M,k as O,l as z}from"../chunks/index.BXVnRmkj.js";import{V as I}from"../chunks/ViewApp.qg7AIhJt.js";function Wn(Tn){let C,Pe="1. Formatting Text with BBCode",Dt,W,He="This tutorial will teach you how to format text using BBCode.",Rt,$,Ee="Introduction",Vt,D,Le="When your app shows text to the user, it will by default look like ordinary text, similiar to this text that you are reading now. Using BBCode, you can format the text, to change its size, color, boldness, etc.",Ft,R,Ae="Enabling BBCode",Nt,V,je="GUI components that display text has a configuration method called <code>text()</code> you can call to make it display ordinary text. Examples of these are:",Gt,F,Me="<li><code>Text.text()</code></li> <li><code>Button.text()</code></li>",qt,N,Oe="If you instead want the component to be able to display text that has been formatted with BBCode, you need to use the configuration method <code>textWithBBCode()</code> instead.",Jt,G,ze="Using simple BBCode tags",Kt,q,Ie="To format text, you simply surround the text with <em>BBCode tags</em>, which describes how the surrounded text should be formated. For example, text surrounded with the BBCode start tag <code>[b]</code> (<code>b</code> is short for bold) and the end tag <code>[/b]</code> will display the surrounded tag as bold.",Qt,d,J,We="Example",K,w,$e="Open in Online Editor",Tt,Ut,_n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This Text component [b]does use[/b] BBCode.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This Text component [b]does not use[/b] BBCode, so the BBCode tags are displayed as text.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Xt,Q,De="Here are a few examples of some more BBCode tags you can use:",Yt,U,Re='<li><code>[i]</code> and <code>[/i]</code> to make the surrounded text <em>italic</em></li> <li><code>[u]</code> and <code>[/u]</code> to make the surrounded text <span style="text-decoration: underline;">underlined</span></li> <li><code>[s]</code> and <code>[/s]</code> to make the surrounded text <span style="text-decoration: line-through;">strike throughed</span></li>',Zt,k,X,Ve="Example",Y,b,Fe="Open in Online Editor",_t,te,Sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text is [b]bold[/b].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text is [i]italic[/i].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text is [u]underlined[/u].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text is [s]strike throughed[/s].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ee,Z,Ne="It's also possible to use multiple BBCode tags in the same string.",ne,x,tt,Ge="Example",et,B,qe="Open in Online Editor",St,se,Pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">[b]This[/b] [i]text[/i] [u]is[/u] [b]cool[/b]!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ae,nt,Je="Nestling BBCode tags",pe,st,Ke="Do you want text to be both bold and italic? No problem, just nestle the tags, e.g. surround the text with <code>[b][i]</code> and <code>[/i][/b]</code>.",oe,m,at,Qe="Example",pt,y,Ue="Open in Online Editor",Pt,le,Hn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here [b][i]is some cool[/i][/b] text.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here [b]is [i]some[/i] cool[/b] text.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">[u]Here [b]is [i]some[/i] cool[/b] text.[/u]</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ie,ot,Xe="Just remember to close the tags in correct order. If <code>[b]</code> comes before <code>[i]</code>, then <code>[/i]</code> must come before <code>[/b]</code>; one should always be able to tell if one tag is used inside another, or if it&#39;s the other way around. Examples:",ce,lt,Ye="<li><code>[b]This [i]is[/i] text.[/b]</code> is OK, because we can see that the <code>i</code> tag is used in the <code>b</code> tag</li> <li><code>[b]This[/b] is [i]text[/i].</code> is OK, because we have no nestling at all</li> <li><code>[b]This [i]is[/b] text.[/i]</code> is NOT OK, because it&#39;s unclear if <code>i</code> is used in <code>b</code>, or if <code>b</code> is used in <code>i</code></li>",ue,it,Ze="Using BBCode tags with an attribute",re,ct,tn="Some BBCode tags has an <em>attribute</em>, that provides additional information about how the BBCode tag should work.",de,ut,en="To change the color of a text, you surround the text with <code>[color=THE_COLOR]</code> and <code>[/color]</code>, where <code>THE_COLOR</code> should be the name of a color in English, and it indicates the color the text will have, for example <code>[color=red]</code> to make the text red.",ke,h,rt,nn="Example",dt,T,sn="Open in Online Editor",Ht,xe,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some [color=red]red text[/color].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some [color=yellow]yellow text[/color].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">[color=red]Here is some red text and [color=yellow]yellow text[/color].[/color]</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,me,kt,an="In a similar way, you can change the size of the text by using the BBCode tag <code>size</code>, and as attribute give it the number of millimeters heigh the text should be.",he,g,xt,pn="Example",mt,_,on="Open in Online Editor",Et,ge,Ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some [size=3]small text[/size].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some [size=8]large text[/size].</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">[size=6]Here is some large text and [size=2]small text[/size].[/size]</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,fe,ht,ln="Links",ve,gt,cn="To display some text as a link the user can click on to open a webpage in a web browser, format the text as an URL that identifies which webpage the link should lead to by surroinding it with <code>[url]</code> and <code>[/url]</code>.",Ce,f,ft,un="Example",vt,S,rn="Open in Online Editor",Lt,we,An=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click on [url]https://www.nintendo.com[/url] to view that webpage in a web browser.</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,be,Ct,dn="To display another text than the URL, provide the URL as the attribute to the <code>[url]</code> tag.",Be,v,wt,kn="Example",bt,P,xn="Open in Online Editor",At,ye,jn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click on [url=https://www.nintendo.com]Nintendo[/url] to view that webpage in a web browser.</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Te,Bt,mn="That's it!",_e,yt,hn="Fantastic, now you also now how to format text to make it look prettier. Good work! 🥳 In next tutorial we will take a look at how we can style not only the text in the componment, but the component itself.",Se;return K=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(\`This Text component [b]does use[/b] BBCode.\`),
			Space,
			Text.text(\`This Text component [b]does not use[/b] BBCode, so the BBCode tags are displayed as text.\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),Y=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(\`This text is [b]bold[/b].\`),
			Space,
			Text.textWithBBCode(\`This text is [i]italic[/i].\`),
			Space,
			Text.textWithBBCode(\`This text is [u]underlined[/u].\`),
			Space,
			Text.textWithBBCode(\`This text is [s]strike throughed[/s].\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),et=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(\`[b]This[/b] [i]text[/i] [u]is[/u] [b]cool[/b]!\`)
	}
	
}`,x:150,y:200}]}}}),pt=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(\`Here [b][i]is some cool[/i][/b] text.\`),
			Space,
			Text.textWithBBCode(\`Here [b]is [i]some[/i] cool[/b] text.\`),
			Space,
			Text.textWithBBCode(\`[u]Here [b]is [i]some[/i] cool[/b] text.[/u]\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),dt=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(\`Here is some [color=red]red text[/color].\`),
			Space,
			Text.textWithBBCode(\`Here is some [color=yellow]yellow text[/color].\`),
			Space,
			Text.textWithBBCode(\`[color=red]Here is some red text and [color=yellow]yellow text[/color].[/color]\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),mt=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.textWithBBCode(\`Here is some [size=3]small text[/size].\`),
			Space,
			Text.textWithBBCode(\`Here is some [size=8]large text[/size].\`),
			Space,
			Text.textWithBBCode(\`[size=6]Here is some large text and [size=2]small text[/size].[/size]\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),vt=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(
			\`Click on [url]https://www.nintendo.com[/url] to view that webpage in a web browser.\`
		)
	}
	
}`,x:150,y:200}]}}}),bt=new I({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.textWithBBCode(
			\`Click on [url=https://www.nintendo.com]Nintendo[/url] to view that webpage in a web browser.\`
		)
	}
	
}`,x:150,y:200}]}}}),{c(){C=a("h1"),C.textContent=Pe,Dt=i(),W=a("p"),W.textContent=He,Rt=i(),$=a("h2"),$.textContent=Ee,Vt=i(),D=a("p"),D.textContent=Le,Ft=i(),R=a("h2"),R.textContent=Ae,Nt=i(),V=a("p"),V.innerHTML=je,Gt=i(),F=a("ul"),F.innerHTML=Me,qt=i(),N=a("p"),N.innerHTML=Oe,Jt=i(),G=a("h2"),G.textContent=ze,Kt=i(),q=a("p"),q.innerHTML=Ie,Qt=i(),d=a("div"),J=a("div"),J.textContent=We,H(K.$$.fragment),w=a("a"),w.textContent=$e,Tt=a("pre"),Ut=new E(!1),Xt=i(),Q=a("p"),Q.textContent=De,Yt=i(),U=a("ul"),U.innerHTML=Re,Zt=i(),k=a("div"),X=a("div"),X.textContent=Ve,H(Y.$$.fragment),b=a("a"),b.textContent=Fe,_t=a("pre"),te=new E(!1),ee=i(),Z=a("p"),Z.textContent=Ne,ne=i(),x=a("div"),tt=a("div"),tt.textContent=Ge,H(et.$$.fragment),B=a("a"),B.textContent=qe,St=a("pre"),se=new E(!1),ae=i(),nt=a("h2"),nt.textContent=Je,pe=i(),st=a("p"),st.innerHTML=Ke,oe=i(),m=a("div"),at=a("div"),at.textContent=Qe,H(pt.$$.fragment),y=a("a"),y.textContent=Ue,Pt=a("pre"),le=new E(!1),ie=i(),ot=a("p"),ot.innerHTML=Xe,ce=i(),lt=a("ul"),lt.innerHTML=Ye,ue=i(),it=a("h2"),it.textContent=Ze,re=i(),ct=a("p"),ct.innerHTML=tn,de=i(),ut=a("p"),ut.innerHTML=en,ke=i(),h=a("div"),rt=a("div"),rt.textContent=nn,H(dt.$$.fragment),T=a("a"),T.textContent=sn,Ht=a("pre"),xe=new E(!1),me=i(),kt=a("p"),kt.innerHTML=an,he=i(),g=a("div"),xt=a("div"),xt.textContent=pn,H(mt.$$.fragment),_=a("a"),_.textContent=on,Et=a("pre"),ge=new E(!1),fe=i(),ht=a("h2"),ht.textContent=ln,ve=i(),gt=a("p"),gt.innerHTML=cn,Ce=i(),f=a("div"),ft=a("div"),ft.textContent=un,H(vt.$$.fragment),S=a("a"),S.textContent=rn,Lt=a("pre"),we=new E(!1),be=i(),Ct=a("p"),Ct.innerHTML=dn,Be=i(),v=a("div"),wt=a("div"),wt.textContent=kn,H(bt.$$.fragment),P=a("a"),P.textContent=xn,At=a("pre"),ye=new E(!1),Te=i(),Bt=a("h2"),Bt.textContent=mn,_e=i(),yt=a("p"),yt.textContent=hn,this.h()},l(t){C=p(t,"H1",{"data-svelte-h":!0}),l(C)!=="svelte-16bxodw"&&(C.textContent=Pe),Dt=c(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-ronba4"&&(W.textContent=He),Rt=c(t),$=p(t,"H2",{"data-svelte-h":!0}),l($)!=="svelte-1ukekoe"&&($.textContent=Ee),Vt=c(t),D=p(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-ulomfe"&&(D.textContent=Le),Ft=c(t),R=p(t,"H2",{"data-svelte-h":!0}),l(R)!=="svelte-6tp239"&&(R.textContent=Ae),Nt=c(t),V=p(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-hdvp6a"&&(V.innerHTML=je),Gt=c(t),F=p(t,"UL",{"data-svelte-h":!0}),l(F)!=="svelte-1atjjkx"&&(F.innerHTML=Me),qt=c(t),N=p(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-8ryihh"&&(N.innerHTML=Oe),Jt=c(t),G=p(t,"H2",{"data-svelte-h":!0}),l(G)!=="svelte-1fknadq"&&(G.textContent=ze),Kt=c(t),q=p(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-thfadh"&&(q.innerHTML=Ie),Qt=c(t),d=p(t,"DIV",{class:!0});var n=r(d);J=p(n,"DIV",{class:!0,"data-svelte-h":!0}),l(J)!=="svelte-1llzxwj"&&(J.textContent=We),L(K.$$.fragment,n),w=p(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-hm84rw"&&(w.textContent=$e),Tt=p(n,"PRE",{class:!0});var gn=r(Tt);Ut=A(gn,!1),gn.forEach(e),n.forEach(e),Xt=c(t),Q=p(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-1rr7bfm"&&(Q.textContent=De),Yt=c(t),U=p(t,"UL",{"data-svelte-h":!0}),l(U)!=="svelte-1o5fviy"&&(U.innerHTML=Re),Zt=c(t),k=p(t,"DIV",{class:!0});var jt=r(k);X=p(jt,"DIV",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1llzxwj"&&(X.textContent=Ve),L(Y.$$.fragment,jt),b=p(jt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-16tkvi4"&&(b.textContent=Fe),_t=p(jt,"PRE",{class:!0});var fn=r(_t);te=A(fn,!1),fn.forEach(e),jt.forEach(e),ee=c(t),Z=p(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-6u59ie"&&(Z.textContent=Ne),ne=c(t),x=p(t,"DIV",{class:!0});var Mt=r(x);tt=p(Mt,"DIV",{class:!0,"data-svelte-h":!0}),l(tt)!=="svelte-1llzxwj"&&(tt.textContent=Ge),L(et.$$.fragment,Mt),B=p(Mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(B)!=="svelte-32r5m7"&&(B.textContent=qe),St=p(Mt,"PRE",{class:!0});var vn=r(St);se=A(vn,!1),vn.forEach(e),Mt.forEach(e),ae=c(t),nt=p(t,"H2",{"data-svelte-h":!0}),l(nt)!=="svelte-11vy4i6"&&(nt.textContent=Je),pe=c(t),st=p(t,"P",{"data-svelte-h":!0}),l(st)!=="svelte-1haqhqr"&&(st.innerHTML=Ke),oe=c(t),m=p(t,"DIV",{class:!0});var Ot=r(m);at=p(Ot,"DIV",{class:!0,"data-svelte-h":!0}),l(at)!=="svelte-1llzxwj"&&(at.textContent=Qe),L(pt.$$.fragment,Ot),y=p(Ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-hzuwpv"&&(y.textContent=Ue),Pt=p(Ot,"PRE",{class:!0});var Cn=r(Pt);le=A(Cn,!1),Cn.forEach(e),Ot.forEach(e),ie=c(t),ot=p(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-1u0xi4z"&&(ot.innerHTML=Xe),ce=c(t),lt=p(t,"UL",{"data-svelte-h":!0}),l(lt)!=="svelte-1xy3rum"&&(lt.innerHTML=Ye),ue=c(t),it=p(t,"H2",{"data-svelte-h":!0}),l(it)!=="svelte-1pu7jjx"&&(it.textContent=Ze),re=c(t),ct=p(t,"P",{"data-svelte-h":!0}),l(ct)!=="svelte-mzo2a7"&&(ct.innerHTML=tn),de=c(t),ut=p(t,"P",{"data-svelte-h":!0}),l(ut)!=="svelte-105s09v"&&(ut.innerHTML=en),ke=c(t),h=p(t,"DIV",{class:!0});var zt=r(h);rt=p(zt,"DIV",{class:!0,"data-svelte-h":!0}),l(rt)!=="svelte-1llzxwj"&&(rt.textContent=nn),L(dt.$$.fragment,zt),T=p(zt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-6z1y6e"&&(T.textContent=sn),Ht=p(zt,"PRE",{class:!0});var wn=r(Ht);xe=A(wn,!1),wn.forEach(e),zt.forEach(e),me=c(t),kt=p(t,"P",{"data-svelte-h":!0}),l(kt)!=="svelte-18jek3l"&&(kt.innerHTML=an),he=c(t),g=p(t,"DIV",{class:!0});var It=r(g);xt=p(It,"DIV",{class:!0,"data-svelte-h":!0}),l(xt)!=="svelte-1llzxwj"&&(xt.textContent=pn),L(mt.$$.fragment,It),_=p(It,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-1x5rj0r"&&(_.textContent=on),Et=p(It,"PRE",{class:!0});var bn=r(Et);ge=A(bn,!1),bn.forEach(e),It.forEach(e),fe=c(t),ht=p(t,"H2",{"data-svelte-h":!0}),l(ht)!=="svelte-fnq65"&&(ht.textContent=ln),ve=c(t),gt=p(t,"P",{"data-svelte-h":!0}),l(gt)!=="svelte-c4zpjq"&&(gt.innerHTML=cn),Ce=c(t),f=p(t,"DIV",{class:!0});var Wt=r(f);ft=p(Wt,"DIV",{class:!0,"data-svelte-h":!0}),l(ft)!=="svelte-1llzxwj"&&(ft.textContent=un),L(vt.$$.fragment,Wt),S=p(Wt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-1uak0vd"&&(S.textContent=rn),Lt=p(Wt,"PRE",{class:!0});var Bn=r(Lt);we=A(Bn,!1),Bn.forEach(e),Wt.forEach(e),be=c(t),Ct=p(t,"P",{"data-svelte-h":!0}),l(Ct)!=="svelte-2mxrqy"&&(Ct.innerHTML=dn),Be=c(t),v=p(t,"DIV",{class:!0});var $t=r(v);wt=p($t,"DIV",{class:!0,"data-svelte-h":!0}),l(wt)!=="svelte-1llzxwj"&&(wt.textContent=kn),L(bt.$$.fragment,$t),P=p($t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-z2cfmx"&&(P.textContent=xn),At=p($t,"PRE",{class:!0});var yn=r(At);ye=A(yn,!1),yn.forEach(e),$t.forEach(e),Te=c(t),Bt=p(t,"H2",{"data-svelte-h":!0}),l(Bt)!=="svelte-p2uhy5"&&(Bt.textContent=mn),_e=c(t),yt=p(t,"P",{"data-svelte-h":!0}),l(yt)!=="svelte-h3uxey"&&(yt.textContent=hn),this.h()},h(){o(J,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqFkEFLxDAQhf/KMKcWQq2Cl95cD+JBEHfBQ1vYbDJuCzUJyRS3lP53U7sWXFAvYd68yfvgjSidw2JEZTVhgaqTIcDTcOcc0InJ6ABxHitTsfIkmbYsPT/LIyXp17ZiT9x7A6sxb6fKTDgJdFEHLMoRW43FtcA322nyj4v4AV3/r+BZLIyV/tC3l9wX+xEy1bSd9mSSxap466Qi8a12MTLj+Ly23Gw295Gb7HdNG2B2QNl3Zw0ZhvJQa0sB+kDl1aGG5Tbbp+Kf4L/jjOWLSAHBAjd0lsDyGEB6At0G18mBNMgAc/Jv8PTc81zPhAJPsdLbXOCAxU2eT/X0CUAlqgI="),o(w,"title","Open in our Online Editor"),Ut.a=null,o(Tt,"class","language-js"),o(d,"class","remark-container tip"),o(X,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNqlkUFLxDAQhf9KmFMLoVsFL725HsSDIO6ChzawaTpugyUNyQR3KfnvplYLCl7cS5L3hrxvmJlAWgvVBGrsECpQg/SePZ5vrWV4IjSdZ+k9NaYh5VAS7kg6epJHzPJPtyGHFJxha2F2Y2MiRA42aQ9VPYHuoLri8DoOHbqHRfyArv9X8CwWxkq/D/o393l894Xq9dA5NNlSamhnpUL+rfYpsqB0vGjqt9u7xM0O+157Npss3XUr2tRavWlFccj5v2O00CQHreqNviwoiGDSpAZtMHUVLgvzwpPTb8iod2M49nOk/zMy/9rgPPgIHE5pWTclhzNU12UZRfwA11bM4g=="),o(b,"title","Open in our Online Editor"),te.a=null,o(_t,"class","language-js"),o(k,"class","remark-container tip"),o(tt,"class","remark-container__title"),o(B,"target","_blank"),o(B,"href","/editor#eNpdjs0KwjAQhF8l7kmh2Cp4yc16EA+CYMFDGmjaRhsobUi2YCl5dxOVgl6WmdmfbycQWgOdoOprCRSqVlhLzuNeayKfKLvaEq+nvMuxMlKgvKIweBEPuVy90xyNxMF0ZG6E1OWdAxeB9t4CZROoGugmgnvf1tKcPuYHOu/P4GA+jJl+HNQ/N/Pja/TlprBJ04O/uSxYybNGWRaXnDDFQ5vFyuuBh3TwquRV37dhYlGsvj8HlIMInv69XRLBCHSbJI67F4qlaHM="),o(B,"title","Open in our Online Editor"),se.a=null,o(St,"class","language-js"),o(x,"class","remark-container tip"),o(at,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqdkcFKxDAQhl8lzKmF0FbBS2+uB92DIK7gIQ1sNh3dQDcJSYq7lLy7iV0LCoLsJeSfSb4PZiYQ1kI7gTQ9QgtyEN6Tx9OttQSPAXXvSbpPne6CdCgCboJw4Um8Y1F+VbvgMIxOk6WRq7HTESIFm7KHlk2gemivKLyZoUe3nsMP6fJ/EecwOxb7/ah+e5/Nh6/kXg29Q13MrS5srJBIv9NLQlYhHa8q7Feru+Qttg/okLAdZ4orT7w5IJHGDKxWnNU7TvL7alvSC5CJl6gZmWln7GVINvJ/UVk98j/I5XkjeZARKBzT8G8aCidor5sm8vgJA0a5zA=="),o(y,"title","Open in our Online Editor"),le.a=null,o(Pt,"class","language-js"),o(m,"class","remark-container tip"),o(rt,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqlkcFKxDAQhl8lzKmFUKvgJeDB9aAeBHEFD01hQzK6hZiEJMtuKXl3060triAIe0gy/z/JfENmAOEcsAGkVQgMpBYhkKf+1jmCh4hGBZLjgRsepUcRcR2Fj8/iA4vy6PLoMe68IUtidBM3CRIFl3UA1gzQKWCXFN6tVugfJ3ECXd4v4FFMjIV+v+t+c1/sPlRy22nl0RRTise1ExLprF5zySrm7a2L29XqLnOLzQN6JF0gwX4iaaTV1t94VG1eZLzbXBy9ttqU9MyyPWpt9+10nFP8R5snnLlnIoz6B3QO/oCX3yMcfz4BhUOe1nVNoQd2VdepTV/V7s7c"),o(T,"title","Open in our Online Editor"),xe.a=null,o(Ht,"class","language-js"),o(h,"class","remark-container tip"),o(xt,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqlkcFLwzAUxv+V8E4thFonigQ8OA/qQRAneGgDC83bFsjSkGS4WfK/m9pamehFL0m+7yXfj5fXgbAWWAdNKxEYNFp4Tx4O19YS3Ac00pN07mpTh8ahCLgIwoVHscYs/3Dr4DDsnCFToXdjbSJECjZpD6zqQElgpxRWrZbo7gdxBJ3eT+BeDIyJfrtT37lP7asvmo3S0qHJhlIdFlY0SD/Vc4osQlpeVNjM5zeJmy3v0CFRnvh2i6Ty6g2vzrjfCq1Jf7U66S1eLHP6v9BLroVLbf09dMi54EfhX6FEGDmyZj80MO6/IPNxXP0vR6CwT5M5LykcgM3KMvL4DqwmxXs="),o(_,"title","Open in our Online Editor"),ge.a=null,o(Et,"class","language-js"),o(g,"class","remark-container tip"),o(ft,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNpdj01LxDAQhv/KMKddKG0VvOTm7kE8CIKCh3Zhs+2sDdYkJFOzS8l/N7FS0Msw73y8z8yM0loUM3amJxTYjdJ7eLreWwt0YdK9h5TPrW65cySZXlg6fpbvtNn+VFt2xJPTsDZyNbY6YizQJu1RNDOqHsVNgWcz9uQeF/EHuu6v4CwWxkp/mNR/7msaLzmFN8XDbrdPnptloOXjflTdBxgNzeTGw8BsvaiqEEKplc4UU3bms6lyF9jAl6IAPEiGQKd8PCgNMgs4ORM8ufK4mG9/38zXRSzwkj66qwu8orit63iI3xpTfDQ="),o(S,"title","Open in our Online Editor"),we.a=null,o(Lt,"class","language-js"),o(f,"class","remark-container tip"),o(wt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdj8FKxDAURX/l8VYzUNoquAm4cGYhLhRBwUVTmEwbbbAmIXk1M5T8u4kdCroJOS83ObkzCmuRzdiZXiLDbhTew+P5zlqQJ5K695D2M9ecOicFyRcSjp7Fh9xsf6ecnKTJaVgP8jRyHTEWaBN7ZM2Mqkd2VeC7GXvpHhb4I13vr+IMi2O130/qv/c1xUtKy5uiYbfbpzc3S4DTYT+q7hOMhmZy4+1AZD2rqhBCqZXOFlN25qt9ukBTpVgLZOBbyQA0CIIgj7kFKA0iAxydCV668rBYtpe++ZsRCzylajd1gWdk13Ud2/gDqgt/sA=="),o(P,"title","Open in our Online Editor"),ye.a=null,o(At,"class","language-js"),o(v,"class","remark-container tip")},m(t,n){s(t,C,n),s(t,Dt,n),s(t,W,n),s(t,Rt,n),s(t,$,n),s(t,Vt,n),s(t,D,n),s(t,Ft,n),s(t,R,n),s(t,Nt,n),s(t,V,n),s(t,Gt,n),s(t,F,n),s(t,qt,n),s(t,N,n),s(t,Jt,n),s(t,G,n),s(t,Kt,n),s(t,q,n),s(t,Qt,n),s(t,d,n),u(d,J),j(K,d,null),u(d,w),u(d,Tt),Ut.m(_n,Tt),s(t,Xt,n),s(t,Q,n),s(t,Yt,n),s(t,U,n),s(t,Zt,n),s(t,k,n),u(k,X),j(Y,k,null),u(k,b),u(k,_t),te.m(Sn,_t),s(t,ee,n),s(t,Z,n),s(t,ne,n),s(t,x,n),u(x,tt),j(et,x,null),u(x,B),u(x,St),se.m(Pn,St),s(t,ae,n),s(t,nt,n),s(t,pe,n),s(t,st,n),s(t,oe,n),s(t,m,n),u(m,at),j(pt,m,null),u(m,y),u(m,Pt),le.m(Hn,Pt),s(t,ie,n),s(t,ot,n),s(t,ce,n),s(t,lt,n),s(t,ue,n),s(t,it,n),s(t,re,n),s(t,ct,n),s(t,de,n),s(t,ut,n),s(t,ke,n),s(t,h,n),u(h,rt),j(dt,h,null),u(h,T),u(h,Ht),xe.m(En,Ht),s(t,me,n),s(t,kt,n),s(t,he,n),s(t,g,n),u(g,xt),j(mt,g,null),u(g,_),u(g,Et),ge.m(Ln,Et),s(t,fe,n),s(t,ht,n),s(t,ve,n),s(t,gt,n),s(t,Ce,n),s(t,f,n),u(f,ft),j(vt,f,null),u(f,S),u(f,Lt),we.m(An,Lt),s(t,be,n),s(t,Ct,n),s(t,Be,n),s(t,v,n),u(v,wt),j(bt,v,null),u(v,P),u(v,At),ye.m(jn,At),s(t,Te,n),s(t,Bt,n),s(t,_e,n),s(t,yt,n),Se=!0},p:On,i(t){Se||(M(K.$$.fragment,t),M(Y.$$.fragment,t),M(et.$$.fragment,t),M(pt.$$.fragment,t),M(dt.$$.fragment,t),M(mt.$$.fragment,t),M(vt.$$.fragment,t),M(bt.$$.fragment,t),Se=!0)},o(t){O(K.$$.fragment,t),O(Y.$$.fragment,t),O(et.$$.fragment,t),O(pt.$$.fragment,t),O(dt.$$.fragment,t),O(mt.$$.fragment,t),O(vt.$$.fragment,t),O(bt.$$.fragment,t),Se=!1},d(t){t&&(e(C),e(Dt),e(W),e(Rt),e($),e(Vt),e(D),e(Ft),e(R),e(Nt),e(V),e(Gt),e(F),e(qt),e(N),e(Jt),e(G),e(Kt),e(q),e(Qt),e(d),e(Xt),e(Q),e(Yt),e(U),e(Zt),e(k),e(ee),e(Z),e(ne),e(x),e(ae),e(nt),e(pe),e(st),e(oe),e(m),e(ie),e(ot),e(ce),e(lt),e(ue),e(it),e(re),e(ct),e(de),e(ut),e(ke),e(h),e(me),e(kt),e(he),e(g),e(fe),e(ht),e(ve),e(gt),e(Ce),e(f),e(be),e(Ct),e(Be),e(v),e(Te),e(Bt),e(_e),e(yt)),z(K),z(Y),z(et),z(pt),z(dt),z(mt),z(vt),z(bt)}}}class Vn extends zn{constructor(C){super(),In(this,C,null,Wn,Mn,{})}}export{Vn as component};
