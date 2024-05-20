import{s as Vt,n as At}from"../chunks/scheduler.DFPFbGJz.js";import{S as Ut,i as Wt,e as s,s as i,H as Ve,c as Pt,a as o,g as l,b as r,d as h,n as Ae,h as t,f as Ht,o as c,j as n,p,m as It,t as Mt,k as St,l as Et}from"../chunks/index.CzDE4dZi.js";import{V as Lt}from"../chunks/ViewApp.C2MU7-ZI.js";function zt(jt){let v,Ue="2. Pages",ie,_,We="This tutorial will teach you how to use pages in Bagawork.",re,b,ze="App structure",ce,T,Ye="A Bagawork app consists of different <em>pages</em>. Each page has its own Graphical User Interface (GUI), and one page at a time is shown to the user. When the user has interacted with the page (for example clicked on a button in its GUI), the user will come to the next page, and the app will show the GUI of that page instead, and so on.",pe,g,Je='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a> you can very easily see a preview of the GUI of all the pages in your app, as well as lines between them indicating how the user can navigate between them. Try clicking on a page there, and you will see the code for the page, as well as an interactive preview of the page.</p>',de,P,qe="Creating a page",ue,H,Re="In programming, a <em>class</em> is a description of how a <em>thing</em> should work. The Bagawork framework contains a class called <code>Page</code>, which is a general description of how a page in Bagawork should work.",he,I,Ze="When you want to create a new page in your Bagawork app, you should create your own class <em>extending</em> the <code>Page</code> class. This way, your own class will already contain the general description of how a Bagawork page should work, and you just need to write a little bit of code to make it look and function the specific way you want it to. Great, right? 🙂",me,d,M,Qe="Example",q,Ke="Example showing JavaScript code for how to create your own page class called <code>MyPage</code>.",R,ve,Gt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
<span class="token punctuation">&#125;</span></code>`,Z,Ne="You can name your class whatever you want, but each page in your app must have a unique name. Below is an example of another page class, this time named <code>StartPage</code>.",Q,fe,Bt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
<span class="token punctuation">&#125;</span></code>`,we,x,Xe='<div class="remark-container__title">Don&#39;t freak out!</div><p>If you have never programmed before, you are probably wondering <em>what the heck do all these words and curly brackets in the code above actually mean?!</em> But don&#39;t worry about that; just accept that this is the code that we have to write to create a new class that extends the <code>Page</code> class.</p><p>You know, a sentence in English starts with a capital letter and ends with a period, question mark, or exclamation mark (<code>.</code>, <code>?</code> or <code>!</code>), etc. Just as those rules exist in the English language (called grammar), we have rules in all programming languages (called syntax), and we must follow the syntax of the language we write our code in. So the code above is simply the code we have to write to create a new class extending the <code>Page</code> class in JavaScript. There is really nothing strange with it; just accept that this is the code we have to write 🙂</p>',ge,S,$e="Between the curly brackets <code>{</code> and <code>}</code> in the class we can write code that describes how the class should work. You will soon see an example of this.",xe,k,Fe='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a> you can create a new page simply by clicking anywhere on the empty space, and then select a page template. The new page will have the same code as the page template you select, so no need to memorize the code above by heart; you will get it automatically from a page template 🙂</p>',ke,E,et="Tailoring a page",ye,L,tt="You of course don&#39;t want all of your pages to look and function the same; some should maybe have buttons, others should display some text, etc. Therefor, your own page classes need to contain different descriptions of how they should work. You indicate these differences by adding different pre-named <em>methods</em> to your page classes, and then you <em>implement</em> the methods differently in your different page classes.",Ce,j,at="Tailoring the GUI",_e,G,nt="When a page needs to show its GUI to the user, the method <code>createGui(){ }</code> in the page class will be called. When it is called, the code you write in the method will be executed. In this method you should create and send back the page&#39;s GUI.",be,u,B,st="Example",K,ot="Example showing JavaScript code for how to create two different pages with different GUIs.",D,f,lt="Open in Online Editor",N,Te,Dt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutMePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am Peter!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,X,Pe,Ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutSwedenPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sweden's flag is blue and yellow.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$,it="The GUI in the pages above will just contain some text. To specify that, we add the method <code>createGui(){ }</code>, and:",F,rt="<li>In JavaScript, use <code>return</code> to indicate what is written to the right side of <code>return</code> should be returned back from the method (in this method, what we return back is what will be shown on the screen)</li> <li>To the right of <code>return</code>, use the GUI Component <code>Text</code> (a GUI Component we can use to display text)</li> <li>To the right of <code>Text</code>, call the configuration method <code>text()</code> to indicate which text the <code>Text</code> component should show on the screen</li> <li>Between the parentheses in <code>text()</code> we use two <code>`</code> symbols to indicate the start respective end of a <em>string</em> (a JavaScript value containing text)</li> <li>In the string (between the two <code>`</code> symbols), write the characters the string should contain</li>",He,y,ct='<div class="remark-container__title">Don&#39;t freak out!</div><p>If you have never programmed before, the code and the description of the code above might seem very complicated, but you don&#39;t really need to remember all the details how of it works. For now, it&#39;s enough for you to just know that you can use <code>Text.text(`Hello`)</code> to create a <code>Text</code> GUI Component that displays the text <code>Hello</code> to the user. Easy as that! 🙂</p>',Ie,C,pt='<div class="remark-container__title">Online Editor</div><p>In our <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a> you can simply click on a page to show the code for it. After you have modified the code, the changes will be saved automatically, but you might want to click on the <code>Refresh Preview</code> button to see the result of your new code.</p>',Me,O,dt="Exercises",Se,V,ut="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ee,w,A,ht="Exercise 1",ee,mt='The code in <a href="/editor#eNq1kl1LwzAUhv9KODeuEEZXGUhvpIrILhRxAx12sNCebsMuKckpbpT+d9PVlbWsEwQvGs7Jez6evLQAkWXgFxCpGMGHKBXGsKd9kGUMd4QyNszGRShDqr5IoyCcktD0IlY4cGqFNFKuJWuE6rasm0ooOSQqjVEb8D8K2MTgjzhIsa02HlqAg0oSg/QOvnuM5zYuFxwyO6/VWQ+b1EkLvNnfwFdJh/4x33S5Z7Z8SPYYLJdOi53DDnzPtVB78K/dBmiG2yy1w1pgLZbAfE6SIM7TvwC9qi8zjNabNNYoB7UU0jQTEfJjdgIdaGR7lbODMYzWQrLRze3S4ec771Wab+WZBd3CkO5yIiV/1jyrk5G/1M7RXCg+Kk7nR6mt9DpWPkhCHazw/418Wwu6MpWXmtn5/Ra23jpyT+rayrhP8Xp7vHHP1o5Zi/IbAX5ZWg==" target="_blank">this BagaWork project</a> currently displays an empty page. Change the code in it, so it displays the text <code>This app is cool!</code> instead, as shown below.',se,U,Le,m,W,vt="Exercise 2",te,ft='The code in <a href="/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==" target="_blank">this BagaWork project</a> contains no pages. Your task is to add a new page to the project named <code>StartPage</code>, and make it look like the page shown below.',oe,z,ae,wt="<summary>Hint</summary><p>When you add a new page, it will already contain some code for the GUI. You can simply delete most of that code, and then write your own code to make the page look like as shown above.</p>",je,Y,gt="That's it!",Ge,J,xt='Now you should know the role of pages in Bagawork apps, good work! 🥳 When you are ready to learn some more, continue with <a href="../03-configuring-gui-components/">Tutorial 3. Configuring GUI Components</a> 🙂',Be;return U=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`This app is cool!\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),z=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:108,offsetY:27}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`This is the StartPage!\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){v=s("h1"),v.textContent=Ue,ie=i(),_=s("p"),_.textContent=We,re=i(),b=s("h2"),b.textContent=ze,ce=i(),T=s("p"),T.innerHTML=Ye,pe=i(),g=s("div"),g.innerHTML=Je,de=i(),P=s("h2"),P.textContent=qe,ue=i(),H=s("p"),H.innerHTML=Re,he=i(),I=s("p"),I.innerHTML=Ze,me=i(),d=s("div"),M=s("div"),M.textContent=Qe,q=s("p"),q.innerHTML=Ke,R=s("pre"),ve=new Ve(!1),Z=s("p"),Z.innerHTML=Ne,Q=s("pre"),fe=new Ve(!1),we=i(),x=s("div"),x.innerHTML=Xe,ge=i(),S=s("p"),S.innerHTML=$e,xe=i(),k=s("div"),k.innerHTML=Fe,ke=i(),E=s("h2"),E.textContent=et,ye=i(),L=s("p"),L.innerHTML=tt,Ce=i(),j=s("h3"),j.textContent=at,_e=i(),G=s("p"),G.innerHTML=nt,be=i(),u=s("div"),B=s("div"),B.textContent=st,K=s("p"),K.textContent=ot,D=s("div"),f=s("a"),f.textContent=lt,N=s("pre"),Te=new Ve(!1),X=s("pre"),Pe=new Ve(!1),$=s("p"),$.innerHTML=it,F=s("ol"),F.innerHTML=rt,He=i(),y=s("div"),y.innerHTML=ct,Ie=i(),C=s("div"),C.innerHTML=pt,Me=i(),O=s("h2"),O.textContent=dt,Se=i(),V=s("p"),V.textContent=ut,Ee=i(),w=s("div"),A=s("div"),A.textContent=ht,ee=s("p"),ee.innerHTML=mt,se=s("div"),Pt(U.$$.fragment),Le=i(),m=s("div"),W=s("div"),W.textContent=vt,te=s("p"),te.innerHTML=ft,oe=s("div"),Pt(z.$$.fragment),ae=s("details"),ae.innerHTML=wt,je=i(),Y=s("h2"),Y.textContent=gt,Ge=i(),J=s("p"),J.innerHTML=xt,this.h()},l(e){v=o(e,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-qvjmdk"&&(v.textContent=Ue),ie=r(e),_=o(e,"P",{"data-svelte-h":!0}),l(_)!=="svelte-bhpfuj"&&(_.textContent=We),re=r(e),b=o(e,"H2",{"data-svelte-h":!0}),l(b)!=="svelte-hvjr0"&&(b.textContent=ze),ce=r(e),T=o(e,"P",{"data-svelte-h":!0}),l(T)!=="svelte-ubj4ee"&&(T.innerHTML=Ye),pe=r(e),g=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(g)!=="svelte-rb1sai"&&(g.innerHTML=Je),de=r(e),P=o(e,"H2",{"data-svelte-h":!0}),l(P)!=="svelte-d4p6v"&&(P.textContent=qe),ue=r(e),H=o(e,"P",{"data-svelte-h":!0}),l(H)!=="svelte-1ah4qls"&&(H.innerHTML=Re),he=r(e),I=o(e,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1kzd9uc"&&(I.innerHTML=Ze),me=r(e),d=o(e,"DIV",{class:!0});var a=h(d);M=o(a,"DIV",{class:!0,"data-svelte-h":!0}),l(M)!=="svelte-1llzxwj"&&(M.textContent=Qe),q=o(a,"P",{"data-svelte-h":!0}),l(q)!=="svelte-880062"&&(q.innerHTML=Ke),R=o(a,"PRE",{class:!0});var kt=h(R);ve=Ae(kt,!1),kt.forEach(t),Z=o(a,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-evzee7"&&(Z.innerHTML=Ne),Q=o(a,"PRE",{class:!0});var yt=h(Q);fe=Ae(yt,!1),yt.forEach(t),a.forEach(t),we=r(e),x=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(x)!=="svelte-j85y78"&&(x.innerHTML=Xe),ge=r(e),S=o(e,"P",{"data-svelte-h":!0}),l(S)!=="svelte-3x24ip"&&(S.innerHTML=$e),xe=r(e),k=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(k)!=="svelte-r0qcsj"&&(k.innerHTML=Fe),ke=r(e),E=o(e,"H2",{"data-svelte-h":!0}),l(E)!=="svelte-imjxo3"&&(E.textContent=et),ye=r(e),L=o(e,"P",{"data-svelte-h":!0}),l(L)!=="svelte-1gx1m92"&&(L.innerHTML=tt),Ce=r(e),j=o(e,"H3",{"data-svelte-h":!0}),l(j)!=="svelte-ilz295"&&(j.textContent=at),_e=r(e),G=o(e,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1nvbhqh"&&(G.innerHTML=nt),be=r(e),u=o(e,"DIV",{class:!0});var ne=h(u);B=o(ne,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1llzxwj"&&(B.textContent=st),K=o(ne,"P",{"data-svelte-h":!0}),l(K)!=="svelte-3jryst"&&(K.textContent=ot),D=o(ne,"DIV",{});var De=h(D);f=o(De,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-fgr5ug"&&(f.textContent=lt),N=o(De,"PRE",{class:!0});var Ct=h(N);Te=Ae(Ct,!1),Ct.forEach(t),X=o(De,"PRE",{class:!0});var _t=h(X);Pe=Ae(_t,!1),_t.forEach(t),De.forEach(t),$=o(ne,"P",{"data-svelte-h":!0}),l($)!=="svelte-1l0ze8"&&($.innerHTML=it),F=o(ne,"OL",{"data-svelte-h":!0}),l(F)!=="svelte-10t4omt"&&(F.innerHTML=rt),ne.forEach(t),He=r(e),y=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-pk4w0o"&&(y.innerHTML=ct),Ie=r(e),C=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(C)!=="svelte-1bw9ghl"&&(C.innerHTML=pt),Me=r(e),O=o(e,"H2",{"data-svelte-h":!0}),l(O)!=="svelte-4opca7"&&(O.textContent=dt),Se=r(e),V=o(e,"P",{"data-svelte-h":!0}),l(V)!=="svelte-fy3v6t"&&(V.textContent=ut),Ee=r(e),w=o(e,"DIV",{class:!0});var Oe=h(w);A=o(Oe,"DIV",{class:!0,"data-svelte-h":!0}),l(A)!=="svelte-1kqyz2o"&&(A.textContent=ht),ee=o(Oe,"P",{"data-svelte-h":!0}),l(ee)!=="svelte-vwzd87"&&(ee.innerHTML=mt),se=o(Oe,"DIV",{});var bt=h(se);Ht(U.$$.fragment,bt),bt.forEach(t),Oe.forEach(t),Le=r(e),m=o(e,"DIV",{class:!0});var le=h(m);W=o(le,"DIV",{class:!0,"data-svelte-h":!0}),l(W)!=="svelte-i1p19j"&&(W.textContent=vt),te=o(le,"P",{"data-svelte-h":!0}),l(te)!=="svelte-1k6guob"&&(te.innerHTML=ft),oe=o(le,"DIV",{});var Tt=h(oe);Ht(z.$$.fragment,Tt),Tt.forEach(t),ae=o(le,"DETAILS",{"data-svelte-h":!0}),l(ae)!=="svelte-1l79b4c"&&(ae.innerHTML=wt),le.forEach(t),je=r(e),Y=o(e,"H2",{"data-svelte-h":!0}),l(Y)!=="svelte-p2uhy5"&&(Y.textContent=gt),Ge=r(e),J=o(e,"P",{"data-svelte-h":!0}),l(J)!=="svelte-17f2yh4"&&(J.innerHTML=xt),this.h()},h(){c(g,"class","remark-container tip"),c(M,"class","remark-container__title"),ve.a=null,c(R,"class","language-js"),fe.a=null,c(Q,"class","language-js"),c(d,"class","remark-container tip"),c(x,"class","remark-container warning"),c(k,"class","remark-container tip"),c(B,"class","remark-container__title"),c(f,"target","_blank"),c(f,"href","/editor#eNqdkt9rwjAQx/+V271MoYg/5kvf3MOGDzJBHzamYGyuWohJSVJUSv/3JUatPzY2Bk25NHf5fr69K5HlOcYlJooTxpgIZgyM9oM8B9pZktyAi8uZnFm/Ek3M0sQybcdsRY1mOLGabKElDJaqsCPyR/57FcoqrCJMleCkDcafJWYc406Ekm285uE2jFClqSH7jnH7FH+4uIpCfrfOp0RJ/nK47+eyeYS5w7gSDAzDsLlyfAF+9u03ZW36tchu7U5dasu6V2MxBLaBMVnSD4vm0Xvl6HaOvO3I9hj32mczvV9ZJlviJP/PE+ofDaSCrSAzsBQFAZMc9iSE2rZuKftHyk7/TPl0Sdm9ofQ0Q/lm16RDK+45/VLymVKl60m5mIu/OZmuHb17GPh+QibBaYLywhDw6j9+0hykrhHfSZ5a0q9bchyUKW1y4WD8wMyrL5PCEUs="),c(f,"title","Open in our Online Editor"),Te.a=null,c(N,"class","language-js"),Pe.a=null,c(X,"class","language-js"),c(u,"class","remark-container tip"),c(y,"class","remark-container warning"),c(C,"class","remark-container tip"),c(A,"class","remark-container__title"),c(w,"class","remark-container exercise"),c(W,"class","remark-container__title"),c(m,"class","remark-container exercise")},m(e,a){n(e,v,a),n(e,ie,a),n(e,_,a),n(e,re,a),n(e,b,a),n(e,ce,a),n(e,T,a),n(e,pe,a),n(e,g,a),n(e,de,a),n(e,P,a),n(e,ue,a),n(e,H,a),n(e,he,a),n(e,I,a),n(e,me,a),n(e,d,a),p(d,M),p(d,q),p(d,R),ve.m(Gt,R),p(d,Z),p(d,Q),fe.m(Bt,Q),n(e,we,a),n(e,x,a),n(e,ge,a),n(e,S,a),n(e,xe,a),n(e,k,a),n(e,ke,a),n(e,E,a),n(e,ye,a),n(e,L,a),n(e,Ce,a),n(e,j,a),n(e,_e,a),n(e,G,a),n(e,be,a),n(e,u,a),p(u,B),p(u,K),p(u,D),p(D,f),p(D,N),Te.m(Dt,N),p(D,X),Pe.m(Ot,X),p(u,$),p(u,F),n(e,He,a),n(e,y,a),n(e,Ie,a),n(e,C,a),n(e,Me,a),n(e,O,a),n(e,Se,a),n(e,V,a),n(e,Ee,a),n(e,w,a),p(w,A),p(w,ee),p(w,se),It(U,se,null),n(e,Le,a),n(e,m,a),p(m,W),p(m,te),p(m,oe),It(z,oe,null),p(m,ae),n(e,je,a),n(e,Y,a),n(e,Ge,a),n(e,J,a),Be=!0},p:At,i(e){Be||(Mt(U.$$.fragment,e),Mt(z.$$.fragment,e),Be=!0)},o(e){St(U.$$.fragment,e),St(z.$$.fragment,e),Be=!1},d(e){e&&(t(v),t(ie),t(_),t(re),t(b),t(ce),t(T),t(pe),t(g),t(de),t(P),t(ue),t(H),t(he),t(I),t(me),t(d),t(we),t(x),t(ge),t(S),t(xe),t(k),t(ke),t(E),t(ye),t(L),t(Ce),t(j),t(_e),t(G),t(be),t(u),t(He),t(y),t(Ie),t(C),t(Me),t(O),t(Se),t(V),t(Ee),t(w),t(Le),t(m),t(je),t(Y),t(Ge),t(J)),Et(U),Et(z)}}}class Rt extends Ut{constructor(v){super(),Wt(this,v,null,zt,Vt,{})}}export{Rt as component};
