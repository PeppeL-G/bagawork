import{s as he,n as ke}from"../chunks/scheduler.DFPFbGJz.js";import{S as ge,i as xe,e as a,s as l,c as yt,H as Tt,a as s,g as p,b as c,d,f as St,n as _t,h as e,o as u,j as o,p as i,m as Gt,t as Bt,k as It,l as Rt}from"../chunks/index.CzDE4dZi.js";import{V as Et}from"../chunks/ViewApp.C2MU7-ZI.js";function fe(ce){let h,bt="5. Changing Page",Z,v,At="This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to her.",tt,w,Ht="Multiple pages",et,P,Wt="An app who's GUI always look the same is usually not that fun. Therefore, most Bagawork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!",nt,C,jt="Going to another page",at,y,Lt="To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, Bagawork has the <code>Button</code> component.",st,T,Mt="To tell the <code>Button</code> which text it should display, use the configuration method <code>text()</code>, and pass it the text it should contain as a string.",ot,k,S,zt="Example",U,Ft="Example of how to show a <code>Button</code> on a page (note: nothing special should happen when you click on the button in this example).",_,g,Ut="Open in Online Editor",G,$,pt,ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am a Button!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,lt,B,$t="By default, when clicking on <code>Button</code>, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:",ct,I,Dt="<li>The page shown on the screen has been deleted</li> <li>The page has been created anew</li> <li>The GUI of the new page is shown (the <code>createGui()</code> method has been called)</li>",it,R,Vt="To take the user to another page when the button is clicked, call the configuration method <code>page()</code> and pass it the name of the page the user should come to.",ut,x,E,Jt="Example",D,Xt="Example of an app where the user can go between 3 pages.",f,m,Nt="Open in Online Editor",b,V,rt,ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FirstPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>SecondPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,J,dt,re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SecondPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ThirdPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,X,ht,de=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ThirdPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FirstPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,kt,A,Qt="Exercises",gt,H,Kt="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",xt,r,W,Ot="Exercise 1",N,qt='The code in <a href="/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7" target="_blank">this BagaWork project</a> contains 3 pages. It works like this:',q,j,Q,Yt=`That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.`,Y,L,ft,M,Zt="That's it!",mt,z,te="Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the <code>Button</code> component is just one way to take the user to another page, there exists more ways you can learn later on.",vt,F,ee='When you are ready, continue with <a href="../06-sizing-gui-components/">Tutorial 6. Sizing GUI Components</a>.',wt;return G=new Et({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`This is the StartPage.\`),
			Button.text(\`I am a Button!\`)
		)
	}
}`,x:200,y:300}],pageTemplates:[]}}}),b=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:695,y:320}],pageTemplates:[]}}}),j=new Et({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Read Joke\`).page(ReadJokePage),
			Button.text(\`Read Fact\`).page(ReadFactPage),
		)
	}
}`,x:143,y:319},{id:2,folderId:1,code:`class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!\`),
			Space,
		)
	}
}`,x:546,y:175},{id:3,folderId:1,code:`class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.\`),
			Space,
		)
	}
}`,x:548,y:489}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),L=new Et({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Menu\`),
			Button.text(\`Read Joke\`).page(ReadJokePage),
			Button.text(\`Read Fact\`).page(ReadFactPage),
		)
	}
}`,x:143,y:319},{id:2,folderId:1,code:`class ReadJokePage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`If you want to get warm, just go to the corner of the house, because it's 90 degrees there!\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
}`,x:546,y:175},{id:3,folderId:1,code:`class ReadFactPage extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`When Alexander Bell invented the telephone he had 3 missed calls from Chuck Norris.\`),
			Space,
			Button.text(\`Back\`).page(StartPage)
		)
	}
}`,x:548,y:489}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){h=a("h1"),h.textContent=bt,Z=l(),v=a("p"),v.textContent=At,tt=l(),w=a("h2"),w.textContent=Ht,et=l(),P=a("p"),P.textContent=Wt,nt=l(),C=a("h2"),C.textContent=jt,at=l(),y=a("p"),y.innerHTML=Lt,st=l(),T=a("p"),T.innerHTML=Mt,ot=l(),k=a("div"),S=a("div"),S.textContent=zt,U=a("p"),U.innerHTML=Ft,_=a("div"),g=a("a"),g.textContent=Ut,yt(G.$$.fragment),$=a("pre"),pt=new Tt(!1),lt=l(),B=a("p"),B.innerHTML=$t,ct=l(),I=a("ol"),I.innerHTML=Dt,it=l(),R=a("p"),R.innerHTML=Vt,ut=l(),x=a("div"),E=a("div"),E.textContent=Jt,D=a("p"),D.textContent=Xt,f=a("div"),m=a("a"),m.textContent=Nt,yt(b.$$.fragment),V=a("pre"),rt=new Tt(!1),J=a("pre"),dt=new Tt(!1),X=a("pre"),ht=new Tt(!1),kt=l(),A=a("h2"),A.textContent=Qt,gt=l(),H=a("p"),H.textContent=Kt,xt=l(),r=a("div"),W=a("div"),W.textContent=Ot,N=a("p"),N.innerHTML=qt,q=a("div"),yt(j.$$.fragment),Q=a("p"),Q.textContent=Yt,Y=a("div"),yt(L.$$.fragment),ft=l(),M=a("h2"),M.textContent=Zt,mt=l(),z=a("p"),z.innerHTML=te,vt=l(),F=a("p"),F.innerHTML=ee,this.h()},l(t){h=s(t,"H1",{"data-svelte-h":!0}),p(h)!=="svelte-1jha0bp"&&(h.textContent=bt),Z=c(t),v=s(t,"P",{"data-svelte-h":!0}),p(v)!=="svelte-18gn59o"&&(v.textContent=At),tt=c(t),w=s(t,"H2",{"data-svelte-h":!0}),p(w)!=="svelte-na685i"&&(w.textContent=Ht),et=c(t),P=s(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-tmha62"&&(P.textContent=Wt),nt=c(t),C=s(t,"H2",{"data-svelte-h":!0}),p(C)!=="svelte-1w3bhhb"&&(C.textContent=jt),at=c(t),y=s(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-nwrf2v"&&(y.innerHTML=Lt),st=c(t),T=s(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1vbxxkt"&&(T.innerHTML=Mt),ot=c(t),k=s(t,"DIV",{class:!0});var n=d(k);S=s(n,"DIV",{class:!0,"data-svelte-h":!0}),p(S)!=="svelte-1llzxwj"&&(S.textContent=zt),U=s(n,"P",{"data-svelte-h":!0}),p(U)!=="svelte-fsjsq"&&(U.innerHTML=Ft),_=s(n,"DIV",{});var Pt=d(_);g=s(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-aienyi"&&(g.textContent=Ut),St(G.$$.fragment,Pt),$=s(Pt,"PRE",{class:!0});var ne=d($);pt=_t(ne,!1),ne.forEach(e),Pt.forEach(e),n.forEach(e),lt=c(t),B=s(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-q7pfhv"&&(B.innerHTML=$t),ct=c(t),I=s(t,"OL",{"data-svelte-h":!0}),p(I)!=="svelte-3bnvh5"&&(I.innerHTML=Dt),it=c(t),R=s(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-10qsigu"&&(R.innerHTML=Vt),ut=c(t),x=s(t,"DIV",{class:!0});var Ct=d(x);E=s(Ct,"DIV",{class:!0,"data-svelte-h":!0}),p(E)!=="svelte-1llzxwj"&&(E.textContent=Jt),D=s(Ct,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1qpnzzv"&&(D.textContent=Xt),f=s(Ct,"DIV",{});var K=d(f);m=s(K,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(m)!=="svelte-zpz7sx"&&(m.textContent=Nt),St(b.$$.fragment,K),V=s(K,"PRE",{class:!0});var ae=d(V);rt=_t(ae,!1),ae.forEach(e),J=s(K,"PRE",{class:!0});var se=d(J);dt=_t(se,!1),se.forEach(e),X=s(K,"PRE",{class:!0});var oe=d(X);ht=_t(oe,!1),oe.forEach(e),K.forEach(e),Ct.forEach(e),kt=c(t),A=s(t,"H2",{"data-svelte-h":!0}),p(A)!=="svelte-4opca7"&&(A.textContent=Qt),gt=c(t),H=s(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-fy3v6t"&&(H.textContent=Kt),xt=c(t),r=s(t,"DIV",{class:!0});var O=d(r);W=s(O,"DIV",{class:!0,"data-svelte-h":!0}),p(W)!=="svelte-1kqyz2o"&&(W.textContent=Ot),N=s(O,"P",{"data-svelte-h":!0}),p(N)!=="svelte-njjpse"&&(N.innerHTML=qt),q=s(O,"DIV",{});var pe=d(q);St(j.$$.fragment,pe),pe.forEach(e),Q=s(O,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-veg0ol"&&(Q.textContent=Yt),Y=s(O,"DIV",{});var le=d(Y);St(L.$$.fragment,le),le.forEach(e),O.forEach(e),ft=c(t),M=s(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-p2uhy5"&&(M.textContent=Zt),mt=c(t),z=s(t,"P",{"data-svelte-h":!0}),p(z)!=="svelte-1jayx97"&&(z.innerHTML=te),vt=c(t),F=s(t,"P",{"data-svelte-h":!0}),p(F)!=="svelte-5137ud"&&(F.innerHTML=ee),this.h()},h(){u(S,"class","remark-container__title"),u(g,"target","_blank"),u(g,"href","/editor#eNpdUE1LxDAQ/StxTi2UUvWWm15kD4JoD4pdaGin20KbhGSKu4T8dxOz22WFJLz5evNeHAitgTvoVI/AoZuFtez19KQ1wyOh7C0L2DWyoXg7g4Lwg4ShN3HALE8VMkirkWwrxKxPQx58AYOaezQW+LeDqQd+X4AUS9z4NwIFqGGwSJ/Aqwv+CtjvC9CB72Yyke1ScCN827+Jj4G7Kn9Zp/+a39WPLbtxmnuDMkulhupAUFJ4srYeJ8vCoRGvC8o2Ly69zyuRkufuHRMLEyzl7to8NeXnD/HB6RH4QxVcnoA/VpvDGhc9B4XR6d7/AsASjnE="),u(g,"title","Open in our Online Editor"),pt.a=null,u($,"class","language-js"),u(k,"class","remark-container tip"),u(E,"class","remark-container__title"),u(m,"target","_blank"),u(m,"href","/editor#eNqtkkFrgzAUx7+KvJNCKLO2HfW2HVZ2GIy1h41ZqGhcBZtI8mQtku++aGrUUTz1kPDyXt4//1+SGuKyhLCGhKcUQkiKWErn7fJUlg49I2WpdHRcRyzCZiSCxki3GAt8j3+o65kKCoqVYM5LLmRbaLLKNClQBDJepFRICL9ryFMIfQIsPjUntlpAgGeZpPgJ4UMXf+lY7QmUWm/UacRezWJk3J5vzTeLune+qfL/nj/4r5wlx7xIBWWuKUW40wIz1JN7sKIHj3Tl5wqRs+uGDXeQO1uacJaafbPGs9tnPNPnXa9Fad6zdr8ICFwgDPy1IoZuPkXX690Tb+h7im93zMUIzyZu0y38VUvnPy47umCKzsrdE25geopt8MSGzSZus63WS/Nyc/tDd/RUFtpl81P36g+vBSx3"),u(m,"title","Open in our Online Editor"),rt.a=null,u(V,"class","language-js"),dt.a=null,u(J,"class","language-js"),ht.a=null,u(X,"class","language-js"),u(x,"class","remark-container tip"),u(W,"class","remark-container__title"),u(r,"class","remark-container exercise")},m(t,n){o(t,h,n),o(t,Z,n),o(t,v,n),o(t,tt,n),o(t,w,n),o(t,et,n),o(t,P,n),o(t,nt,n),o(t,C,n),o(t,at,n),o(t,y,n),o(t,st,n),o(t,T,n),o(t,ot,n),o(t,k,n),i(k,S),i(k,U),i(k,_),i(_,g),Gt(G,_,null),i(_,$),pt.m(ie,$),o(t,lt,n),o(t,B,n),o(t,ct,n),o(t,I,n),o(t,it,n),o(t,R,n),o(t,ut,n),o(t,x,n),i(x,E),i(x,D),i(x,f),i(f,m),Gt(b,f,null),i(f,V),rt.m(ue,V),i(f,J),dt.m(re,J),i(f,X),ht.m(de,X),o(t,kt,n),o(t,A,n),o(t,gt,n),o(t,H,n),o(t,xt,n),o(t,r,n),i(r,W),i(r,N),i(r,q),Gt(j,q,null),i(r,Q),i(r,Y),Gt(L,Y,null),o(t,ft,n),o(t,M,n),o(t,mt,n),o(t,z,n),o(t,vt,n),o(t,F,n),wt=!0},p:ke,i(t){wt||(Bt(G.$$.fragment,t),Bt(b.$$.fragment,t),Bt(j.$$.fragment,t),Bt(L.$$.fragment,t),wt=!0)},o(t){It(G.$$.fragment,t),It(b.$$.fragment,t),It(j.$$.fragment,t),It(L.$$.fragment,t),wt=!1},d(t){t&&(e(h),e(Z),e(v),e(tt),e(w),e(et),e(P),e(nt),e(C),e(at),e(y),e(st),e(T),e(ot),e(k),e(lt),e(B),e(ct),e(I),e(it),e(R),e(ut),e(x),e(kt),e(A),e(gt),e(H),e(xt),e(r),e(ft),e(M),e(mt),e(z),e(vt),e(F)),Rt(G),Rt(b),Rt(j),Rt(L)}}}class Pe extends ge{constructor(h){super(),xe(this,h,null,fe,he,{})}}export{Pe as component};
