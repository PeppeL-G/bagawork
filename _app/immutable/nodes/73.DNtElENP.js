import{s as Te,n as ye}from"../chunks/scheduler.B0TnBjPs.js";import{S as Ce,i as Ge,e as a,s as c,c as at,H as Mt,a as s,g as p,b as i,d as g,f as st,n as At,h as e,o as r,j as o,p as l,m as ot,t as pt,k as lt,l as ct}from"../chunks/index.BXVnRmkj.js";import{V as it}from"../chunks/ViewApp.qg7AIhJt.js";function Ie(fe){let k,$t="5. Changing Page",dt,w,Lt="This tutorial will teach you how to take the user to another page when they interact with the GUI on the page currently shown to them.",ht,P,Vt="Multiple pages",gt,T,Wt="An app with a GUI that always look the same is usually not that fun. Therefore, most BagaWork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!",kt,y,Qt="Going to another page",xt,C,zt="To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, BagaWork has the <code>Button</code> component, which is a GUI component that looks like a button and takes the user to the next page in the app when the user clicks on it.",ft,G,qt="To tell the <code>Button</code> which text it should display, use the configuration method <code>text()</code>, and pass it the text it should contain as a string.",mt,u,I,Dt="Example",q,Xt="Example of how to show a <code>Button</code> on a page (note: nothing special should happen when you click on the button in this example).",_,x,Nt="Open in Online Editor",D,vt,me=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am a Button!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,wt,S,Ot="By default, when clicking on <code>Button</code>, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:",Pt,F,Ut="<li>The page shown on the screen has been deleted</li> <li>The page has been created anew</li> <li>The GUI of the new page is shown (the <code>createGui()</code> method has been called)</li>",Tt,B,Jt="To take the user to another page when the button is clicked, call the configuration method <code>page()</code> and pass it the name of the page the user should come to. Note that the name of the page should <strong>not</strong> be surrounded by <code>`</code> characters.",yt,f,b,Kt="Example",X,Yt="Example of an app where the user can go between 3 pages.",m,R,v,Zt="Open in Online Editor",N,Ct,ve=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FirstPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>SecondPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,O,Gt,we=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SecondPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ThirdPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,U,It,Pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ThirdPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FirstPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_t,E,te="Exercises",St,H,ee="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ft,d,j,ne="Exercise 1",J,ae='The code in <a href="/editor#eNqtlF1rgzAUhv9KOFcVQpn9GvNm7IOVXayMtRcra6Gix1awiSSRtoj/fbGpVqV1MHqhJCfnvHmfk2gKbhyDk4LHfQQHvMiVknwcnuKY4F4h8yXR43TBFip/PIGuwqlyhfp019ixzIoSqBLByFso5HEhj2amKIOMQsAjH4UE5yeF0AfHpsDcbb7jUQso8CCQqL7BuSvGcz3OlhRirVerNGLvZlIzXu5fms8n6dn5OAmbnr/4Tna9TRj5AlnHLC3UTAt0lX51VqXoyqLF8nOiFGenhDEnipMpepz5Jq+be+6cI0WhdepLpoH32v6gT+EATt9+yKjB67XhnQVvyVc13gY424SixlcGruAN7NERz74fFnj9NrxS75Z0FddtcJVDNnBl4Arc6GFozq5XXtIZbuNI26xdVhWqKEec4I4UCUCb39tl6n+QT2PXQ3qhD6+cHHhCAsSIrDn3Hyv9qBe98CjZsgvazcRGIye8IvlH7hxlS7JV7/jpL7LMfgGoyKpW" target="_blank">this BagaWork project</a> contains 3 pages. It works like this:',rt,M,K,se="Your task is to add a fourth page to the app and make it work as shown below.",ut,A,Bt,h,$,oe="Exercise 2",Y,pe='The code in <a href="/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7" target="_blank">this BagaWork project</a> contains 3 pages. It works like this:',L,Z,le=`That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.`,V,bt,W,ce="That's it!",Rt,Q,ie="Good work, now you know how to navigate between pages in your app! 🥳 But do know that the <code>Button</code> component is just one way to take the user to another page; there exists other ways you can use too. Learn more about these in future tutorials.",Et,z,re='When you are ready, continue with the tutorial <a href="../sizing-gui-components/">Fundamentals 6. Sizing GUI Components</a>.',Ht;return _=new it({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`This is the StartPage.\`),
			Button.text(\`I am a Button!\`),
		)
	}
}`,x:150,y:200}]}}}),R=new it({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return FirstPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class FirstPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`FirstPage\`),
			Button.text(\`Go to SecondPage\`).page(SecondPage),
		)
	}
}`,x:143,y:319},{id:2,folderId:1,code:`class SecondPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`SecondPage\`),
			Button.text(\`Go to ThirdPage\`).page(ThirdPage),
		)
	}
}`,x:416,y:175},{id:3,folderId:1,code:`class ThirdPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`ThirdPage\`),
			Button.text(\`Go to FirstPage\`).page(FirstPage),
		)
	}
}`,x:695,y:320}]}}}),M=new it({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return FirstPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class FirstPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`FirstPage\`),
			Button.text(\`Go to SecondPage\`).page(SecondPage)
		)
	}
}`,x:143,y:319},{id:2,folderId:1,code:`class SecondPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`SecondPage\`),
			Button.text(\`Go to ThirdPage\`).page(ThirdPage)
		)
	}
}`,x:416,y:175},{id:3,folderId:1,code:`class ThirdPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`ThirdPage\`),
			Button.text(\`Go to FirstPage\`).page(FirstPage)
		)
	}
}`,x:695,y:320}]}}}),A=new it({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return FirstPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class FirstPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`FirstPage\`),
			Button.text(\`Go to SecondPage\`).page(SecondPage),
		)
	}
}`,x:143,y:319},{id:2,folderId:1,code:`class SecondPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`SecondPage\`),
			Button.text(\`Go to ThirdPage\`).page(ThirdPage),
		)
	}
}`,x:416,y:175},{id:3,folderId:1,code:`class ThirdPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`ThirdPage\`),
			Button.text(\`Go to FourthPage\`).page(FourthPage),
		)
	}
}`,x:694,y:174},{id:4,folderId:1,code:`class FourthPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`FourthPage\`),
			Button.text(\`Go to FirstPage\`).page(FirstPage),
		)
	}
}`,x:967,y:313}]}}}),L=new it({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Read Joke\`).page(ReadJokePage),
			Button.text(\`Read Fact\`).page(ReadFactPage),
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!\`),
			Space,
		)
	}
}`,x:450,y:200},{id:3,folderId:1,code:`class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.\`),
			Space,
		)
	}
}`,x:750,y:200}]}}}),V=new it({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Read Joke\`).page(ReadJokePage),
			Button.text(\`Read Fact\`).page(ReadFactPage),
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
}`,x:450,y:200},{id:3,folderId:1,code:`class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
}`,x:750,y:200}]}}}),{c(){k=a("h1"),k.textContent=$t,dt=c(),w=a("p"),w.textContent=Lt,ht=c(),P=a("h2"),P.textContent=Vt,gt=c(),T=a("p"),T.textContent=Wt,kt=c(),y=a("h2"),y.textContent=Qt,xt=c(),C=a("p"),C.innerHTML=zt,ft=c(),G=a("p"),G.innerHTML=qt,mt=c(),u=a("div"),I=a("div"),I.textContent=Dt,q=a("p"),q.innerHTML=Xt,at(_.$$.fragment),x=a("a"),x.textContent=Nt,D=a("pre"),vt=new Mt(!1),wt=c(),S=a("p"),S.innerHTML=Ot,Pt=c(),F=a("ol"),F.innerHTML=Ut,Tt=c(),B=a("p"),B.innerHTML=Jt,yt=c(),f=a("div"),b=a("div"),b.textContent=Kt,X=a("p"),X.textContent=Yt,m=a("div"),at(R.$$.fragment),v=a("a"),v.textContent=Zt,N=a("pre"),Ct=new Mt(!1),O=a("pre"),Gt=new Mt(!1),U=a("pre"),It=new Mt(!1),_t=c(),E=a("h2"),E.textContent=te,St=c(),H=a("p"),H.textContent=ee,Ft=c(),d=a("div"),j=a("div"),j.textContent=ne,J=a("p"),J.innerHTML=ae,rt=a("div"),at(M.$$.fragment),K=a("p"),K.textContent=se,ut=a("div"),at(A.$$.fragment),Bt=c(),h=a("div"),$=a("div"),$.textContent=oe,Y=a("p"),Y.innerHTML=pe,at(L.$$.fragment),Z=a("p"),Z.textContent=le,at(V.$$.fragment),bt=c(),W=a("h2"),W.textContent=ce,Rt=c(),Q=a("p"),Q.innerHTML=ie,Et=c(),z=a("p"),z.innerHTML=re,this.h()},l(t){k=s(t,"H1",{"data-svelte-h":!0}),p(k)!=="svelte-1jha0bp"&&(k.textContent=$t),dt=i(t),w=s(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-nbwl6w"&&(w.textContent=Lt),ht=i(t),P=s(t,"H2",{"data-svelte-h":!0}),p(P)!=="svelte-na685i"&&(P.textContent=Vt),gt=i(t),T=s(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-uaw5gi"&&(T.textContent=Wt),kt=i(t),y=s(t,"H2",{"data-svelte-h":!0}),p(y)!=="svelte-1w3bhhb"&&(y.textContent=Qt),xt=i(t),C=s(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-pq7r9f"&&(C.innerHTML=zt),ft=i(t),G=s(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-1vbxxkt"&&(G.innerHTML=qt),mt=i(t),u=s(t,"DIV",{class:!0});var n=g(u);I=s(n,"DIV",{class:!0,"data-svelte-h":!0}),p(I)!=="svelte-1llzxwj"&&(I.textContent=Dt),q=s(n,"P",{"data-svelte-h":!0}),p(q)!=="svelte-fsjsq"&&(q.innerHTML=Xt),st(_.$$.fragment,n),x=s(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(x)!=="svelte-3qkc05"&&(x.textContent=Nt),D=s(n,"PRE",{class:!0});var ue=g(D);vt=At(ue,!1),ue.forEach(e),n.forEach(e),wt=i(t),S=s(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-q7pfhv"&&(S.innerHTML=Ot),Pt=i(t),F=s(t,"OL",{"data-svelte-h":!0}),p(F)!=="svelte-3bnvh5"&&(F.innerHTML=Ut),Tt=i(t),B=s(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-1xsx6vh"&&(B.innerHTML=Jt),yt=i(t),f=s(t,"DIV",{class:!0});var jt=g(f);b=s(jt,"DIV",{class:!0,"data-svelte-h":!0}),p(b)!=="svelte-1llzxwj"&&(b.textContent=Kt),X=s(jt,"P",{"data-svelte-h":!0}),p(X)!=="svelte-1qpnzzv"&&(X.textContent=Yt),m=s(jt,"DIV",{});var tt=g(m);st(R.$$.fragment,tt),v=s(tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-puo7d"&&(v.textContent=Zt),N=s(tt,"PRE",{class:!0});var de=g(N);Ct=At(de,!1),de.forEach(e),O=s(tt,"PRE",{class:!0});var he=g(O);Gt=At(he,!1),he.forEach(e),U=s(tt,"PRE",{class:!0});var ge=g(U);It=At(ge,!1),ge.forEach(e),tt.forEach(e),jt.forEach(e),_t=i(t),E=s(t,"H2",{"data-svelte-h":!0}),p(E)!=="svelte-4opca7"&&(E.textContent=te),St=i(t),H=s(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-fy3v6t"&&(H.textContent=ee),Ft=i(t),d=s(t,"DIV",{class:!0});var et=g(d);j=s(et,"DIV",{class:!0,"data-svelte-h":!0}),p(j)!=="svelte-1kqyz2o"&&(j.textContent=ne),J=s(et,"P",{"data-svelte-h":!0}),p(J)!=="svelte-m3l8bx"&&(J.innerHTML=ae),rt=s(et,"DIV",{});var ke=g(rt);st(M.$$.fragment,ke),ke.forEach(e),K=s(et,"P",{"data-svelte-h":!0}),p(K)!=="svelte-1gotmog"&&(K.textContent=se),ut=s(et,"DIV",{});var xe=g(ut);st(A.$$.fragment,xe),xe.forEach(e),et.forEach(e),Bt=i(t),h=s(t,"DIV",{class:!0});var nt=g(h);$=s(nt,"DIV",{class:!0,"data-svelte-h":!0}),p($)!=="svelte-i1p19j"&&($.textContent=oe),Y=s(nt,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-njjpse"&&(Y.innerHTML=pe),st(L.$$.fragment,nt),Z=s(nt,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-veg0ol"&&(Z.textContent=le),st(V.$$.fragment,nt),nt.forEach(e),bt=i(t),W=s(t,"H2",{"data-svelte-h":!0}),p(W)!=="svelte-p2uhy5"&&(W.textContent=ce),Rt=i(t),Q=s(t,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-t36inx"&&(Q.innerHTML=ie),Et=i(t),z=s(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1sztznv"&&(z.innerHTML=re),this.h()},h(){r(I,"class","remark-container__title"),r(x,"target","_blank"),r(x,"href","/editor#eNpdj81qwzAQhF9F2ZMNwjiFXHRrLiGHQkl8qwoR1iY2OLKQ1sTG6N0r1636A2LRzM7q086grAUxQ91rBAF1p7xnL9OztQxHQqM9i/dZGkm1Q0V4JuXoVd0wyz9dSQ5pcIalxuIGaQIEDjZqD+JthlaD2HK49p1Gd1zFH2iaT+BF/CIfhvY/89Q/fFE3bacdmmxtSariAwXFkl2qpvUsHmrwB1Bccv6d3Q9EvflKH5m6M8VWb5NSedqIwxg/vis5TCCeyjK8hw/4enHp"),r(x,"title","Open in our Online Editor"),vt.a=null,r(D,"class","language-js"),r(u,"class","remark-container tip"),r(b,"class","remark-container__title"),r(v,"target","_blank"),r(v,"href","/editor#eNqtkkFrgzAUx7+KvJNCkFnbjnrbDis7DMbaw8YcVDSugkskebIWyXdfNDXqoJ56SHh5L++f/y9JA0lVQdRAyjMKEaRlIqXzcn6oKoeekLJMOjpuYhZjO1JBE6Q7TAS+Jt/U9UwFBcVaMOepELIrtFllmhQoAjkvMyokRJ8NFBlEAQGW/LQndlpAgOe5pPgO0V0ff+hYfRGotN6k04g9m8XEuD3fmm8XzeB8Wxf/Pb/xX+mnx6LMBGWuKcW41wI+6sk9WNGDR/ryY43I2WXDljvInR1NOcvMPr/17A6ZvtG73IvSwCdtfxkSOEMUBhtFDN5iDm8QvCXf2Pgc4P5YiAmfTVzBWwbrDi+4X/V44Rye1bsl3cj1HNzokQ2cTVyBW29W5u0W+pOqP48iJk0="),r(v,"title","Open in our Online Editor"),Ct.a=null,r(N,"class","language-js"),Gt.a=null,r(O,"class","language-js"),It.a=null,r(U,"class","language-js"),r(f,"class","remark-container tip"),r(j,"class","remark-container__title"),r(d,"class","remark-container exercise"),r($,"class","remark-container__title"),r(h,"class","remark-container exercise")},m(t,n){o(t,k,n),o(t,dt,n),o(t,w,n),o(t,ht,n),o(t,P,n),o(t,gt,n),o(t,T,n),o(t,kt,n),o(t,y,n),o(t,xt,n),o(t,C,n),o(t,ft,n),o(t,G,n),o(t,mt,n),o(t,u,n),l(u,I),l(u,q),ot(_,u,null),l(u,x),l(u,D),vt.m(me,D),o(t,wt,n),o(t,S,n),o(t,Pt,n),o(t,F,n),o(t,Tt,n),o(t,B,n),o(t,yt,n),o(t,f,n),l(f,b),l(f,X),l(f,m),ot(R,m,null),l(m,v),l(m,N),Ct.m(ve,N),l(m,O),Gt.m(we,O),l(m,U),It.m(Pe,U),o(t,_t,n),o(t,E,n),o(t,St,n),o(t,H,n),o(t,Ft,n),o(t,d,n),l(d,j),l(d,J),l(d,rt),ot(M,rt,null),l(d,K),l(d,ut),ot(A,ut,null),o(t,Bt,n),o(t,h,n),l(h,$),l(h,Y),ot(L,h,null),l(h,Z),ot(V,h,null),o(t,bt,n),o(t,W,n),o(t,Rt,n),o(t,Q,n),o(t,Et,n),o(t,z,n),Ht=!0},p:ye,i(t){Ht||(pt(_.$$.fragment,t),pt(R.$$.fragment,t),pt(M.$$.fragment,t),pt(A.$$.fragment,t),pt(L.$$.fragment,t),pt(V.$$.fragment,t),Ht=!0)},o(t){lt(_.$$.fragment,t),lt(R.$$.fragment,t),lt(M.$$.fragment,t),lt(A.$$.fragment,t),lt(L.$$.fragment,t),lt(V.$$.fragment,t),Ht=!1},d(t){t&&(e(k),e(dt),e(w),e(ht),e(P),e(gt),e(T),e(kt),e(y),e(xt),e(C),e(ft),e(G),e(mt),e(u),e(wt),e(S),e(Pt),e(F),e(Tt),e(B),e(yt),e(f),e(_t),e(E),e(St),e(H),e(Ft),e(d),e(Bt),e(h),e(bt),e(W),e(Rt),e(Q),e(Et),e(z)),ct(_),ct(R),ct(M),ct(A),ct(L),ct(V)}}}class Be extends Ce{constructor(k){super(),Ge(this,k,null,Ie,Te,{})}}export{Be as component};
