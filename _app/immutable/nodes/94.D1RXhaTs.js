import{s as nn,n as an}from"../chunks/scheduler.B0TnBjPs.js";import{S as sn,i as pn,e as s,s as l,H as Y,c as Yt,a as p,g as o,b as c,d as m,n as tt,h as e,f as te,o as i,j as a,p as u,m as ee,t as ne,k as ae,l as se}from"../chunks/index.BXVnRmkj.js";import{V as pe}from"../chunks/ViewApp.DfUK9ae4.js";function on(Xe){let g,oe="2. Page Variables and Methods",kt,w,le="This tutorial will teach you what page variables are in BagaWork, and how you can create them and change them using page methods.",dt,C,ce="Why page variables are needed",ht,b,ie="An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.",mt,y,ue="For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.",gt,_,re="How to create page variables",vt,T,ke="Instead of hardcoding values in the code, you in previous tutorials learned that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but with the different that after a page variable has been created an assigned its value, it can later store another value, for example when the user clicks on a <code>Button</code>.",ft,P,de="Page variables are created the same way as page constants, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",xt,H,he="In the code below you find an example of how to create the following page variables:",wt,B,me="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",Ct,S,bt,Fe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page variables as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,yt,M,ge="How to use page variables",_t,j,ve="You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write <code>p.theName</code>. For example, to obtain the value stored in the page variable <code>lastVisit</code>, we would write <code>p.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",Tt,k,L,fe="Example",et,xe="Example of an app using a page variable.",E,v,we="Open in Online Editor",nt,Pt,Ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,A,Ce="But the benefit with variables over constants is that they can also change value while the app is running. If we would want to store the name <code>Bob</code> in the page variable <code>name</code> while the app is running we would write the code <code>p.name = `Bob`</code>. Easy as that!",Bt,N,be="However, a very good question is <em>where</em> we should write the code <code>p.name = `Bob`</code>. And it all depends on <em>when</em> we want the app to change the name to <code>Bob</code>. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let&#39;s go through how to make that happen.",St,I,ye="In your own <code>Page</code> class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a <code>Button</code>, that code needs to be written in a method. So your <code>Page</code> class can for example look like this:",Mt,V,jt,Ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,R,_e="The method in the example above is named <code>setNameToBob()</code>, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so <code>setNameToBob()</code> is a very good name in this case, since that&#39;s precisely what the code in the method does.",Et,G,Te="To tell the computer that the code in the method <code>setNameToBob()</code> should be executed when the user clicks on a button, we need to call the configuration method <code>onClick()</code> on the button, and pass it the method as an argument (i.e. write <code>p.setNameToBob</code> between the parentheses):",At,$,Nt,ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,It,r,O,Pe="Note!",at,He="When passing a method as an argument (as we do when we use <code>Button.onClick()</code>), you should not write the parentheses after the method name.",st,Be="So the following is correct:",pt,Vt,Ye='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span></code>',ot,Se="And the following is incorrect:",lt,Rt,tn='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>',Gt,f,Me='<div class="remark-container__title">Remember!</div><p>In the code above, we haven&#39;t told BagaWork which page the user should come to when the button is clicked (we haven&#39;t used the configuration method <code>page()</code> on the <code>Button</code>), so when the user clicks the button, the current page will be reloaded (after the click handler (<code>setNameToBob</code>) has been executed).</p>',$t,x,je="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants/variables/methods created on that page. For example, <code>PageA</code> cannnot access the page constants/variables/methods in <code>PageB</code>. To create a constant/variable/methos all pages can access, you should instead create an <code>App</code> constant/variable/method (learn more about this in next tutorial).</p>",Ot,W,Le="The final solution",Wt,q,Ee="So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.",qt,Q,Qt,d,Ae="Open in Online Editor",Jt,J,Dt,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ut,D,Ne="Exercises",Xt,U,Ie="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ft,h,X,Ve="Exercise 1",ct,Re='Open <a href="/editor#eNq9VNtKw0AQ/ZVlXmwhiCl4IS8SRbQPilhBixW6JNMLbnfD7sS2lPyB/+Av+gluGlu6MUGxKiFhNrPnzGTO2SyAJwkEC4hUjBBAJLgx7HIeJgnDGaGMDbPxoid7lN+RRk7YIa7pmg+x0SwypJFSLdk6kb/NClAGmQcDJWLUBoKHBYxjCHwPJJ/kFZcQ8EANBgbpHoK9Vdy1cfboQWL5HGRB1i4WTuPr+uvm80Wp+/N0XO77Rk3NbjQai1ijbBSpHnUSHqG3Wt1ayl2yj0b/Qk3ZhMs5M7aeYVOVipjNVcqG42dkJ3zI75R+Ou43vWqqUyXSiayoWN7Yo+rO8uskJVLyo6O315fXjXJVTBWIn6O2Q26P/sSwGbtcdSJs6HmaajtdElZQFBgRxgGrEa/pONuDGQQH/qEHcwhaR/7Krrc4SYS1mmNbx6mheWoPwjgV/2DXUOPSnctjw2jEJfOPfsWdjkZXql+vQmlvF03/a8mapd9IMcpWaZRnklCHQ/z7Qd6NOO2YfJaaWf76ETrf6u9t7HMz+3WZVi2mtf8tZ2aP2TvPbjh+" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',F,it,Ge="<summary>Hint</summary><p>Add one page variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 page methods (one click handler for each button) that changes the page variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the page variable in the last <code>Text</code> component.</p>",Kt,K,$e="That's it!",Zt,Z,Oe="Congratulation, now you know how to use page variables and page methods too! 🥳 But your <code>App</code> class can have its own variables and methods too, let&#39;s take a look at how those works next.",zt;return E=new pe({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	name = \`Alice\`
	
	createGui(){
		return Text.text(\`Hello \${p.name}!\`)
	}
	
}`,x:150,y:200}]}}}),Q=new pe({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
			Button.text(\`Change name to Alice\`).onClick(p.setNameToAlice),
			Button.text(\`Change name to Bob\`).onClick(p.setNameToBob)
		)
	}
	
}`,x:150,y:200}]}}}),F=new pe({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	stars = \`🌟🌟🌟\`
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`How many stars would you give BagaWork?\`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(\`🌟\`).onClick(p.select1Star),
					Space,
					Button.text(\`🌟🌟\`).onClick(p.select2Stars),
					Space,
					Button.text(\`🌟🌟🌟\`).onClick(p.select3Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟\`).onClick(p.select4Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟🌟\`).onClick(p.select5Stars),
				),
				Space,
			),
			Space,
			Text.text(\`Currently selected: \${p.stars}\`),
			Space,
		)
	}
	
	select1Star(){
		p.stars = \`🌟\`
	}
	
	select2Stars(){
		p.stars = \`🌟🌟\`
	}
	
	select3Stars(){
		p.stars = \`🌟🌟🌟\`
	}
	
	select4Stars(){
		p.stars = \`🌟🌟🌟🌟\`
	}
	
	select5Stars(){
		p.stars = \`🌟🌟🌟🌟🌟\`
	}
	
}`,x:150,y:200}]}}}),{c(){g=s("h1"),g.textContent=oe,kt=l(),w=s("p"),w.textContent=le,dt=l(),C=s("h2"),C.textContent=ce,ht=l(),b=s("p"),b.textContent=ie,mt=l(),y=s("p"),y.textContent=ue,gt=l(),_=s("h2"),_.textContent=re,vt=l(),T=s("p"),T.innerHTML=ke,ft=l(),P=s("p"),P.innerHTML=de,xt=l(),H=s("p"),H.textContent=he,wt=l(),B=s("ul"),B.innerHTML=me,Ct=l(),S=s("pre"),bt=new Y(!1),yt=l(),M=s("h2"),M.textContent=ge,_t=l(),j=s("p"),j.innerHTML=ve,Tt=l(),k=s("div"),L=s("div"),L.textContent=fe,et=s("p"),et.textContent=xe,Yt(E.$$.fragment),v=s("a"),v.textContent=we,nt=s("pre"),Pt=new Y(!1),Ht=l(),A=s("p"),A.innerHTML=Ce,Bt=l(),N=s("p"),N.innerHTML=be,St=l(),I=s("p"),I.innerHTML=ye,Mt=l(),V=s("pre"),jt=new Y(!1),Lt=l(),R=s("p"),R.innerHTML=_e,Et=l(),G=s("p"),G.innerHTML=Te,At=l(),$=s("pre"),Nt=new Y(!1),It=l(),r=s("div"),O=s("div"),O.textContent=Pe,at=s("p"),at.innerHTML=He,st=s("p"),st.textContent=Be,pt=s("pre"),Vt=new Y(!1),ot=s("p"),ot.textContent=Se,lt=s("pre"),Rt=new Y(!1),Gt=l(),f=s("div"),f.innerHTML=Me,$t=l(),x=s("div"),x.innerHTML=je,Ot=l(),W=s("h3"),W.textContent=Le,Wt=l(),q=s("p"),q.textContent=Ee,qt=l(),Yt(Q.$$.fragment),Qt=l(),d=s("a"),d.textContent=Ae,Jt=l(),J=s("pre"),Dt=new Y(!1),Ut=l(),D=s("h2"),D.textContent=Ne,Xt=l(),U=s("p"),U.textContent=Ie,Ft=l(),h=s("div"),X=s("div"),X.textContent=Ve,ct=s("p"),ct.innerHTML=Re,Yt(F.$$.fragment),it=s("details"),it.innerHTML=Ge,Kt=l(),K=s("h2"),K.textContent=$e,Zt=l(),Z=s("p"),Z.innerHTML=Oe,this.h()},l(t){g=p(t,"H1",{"data-svelte-h":!0}),o(g)!=="svelte-1ltg3up"&&(g.textContent=oe),kt=c(t),w=p(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-qvn3ej"&&(w.textContent=le),dt=c(t),C=p(t,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-gcer2n"&&(C.textContent=ce),ht=c(t),b=p(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-1uoywmr"&&(b.textContent=ie),mt=c(t),y=p(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1bpdgv1"&&(y.textContent=ue),gt=c(t),_=p(t,"H2",{"data-svelte-h":!0}),o(_)!=="svelte-knk2o3"&&(_.textContent=re),vt=c(t),T=p(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1xn1p3q"&&(T.innerHTML=ke),ft=c(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-g5df5h"&&(P.innerHTML=de),xt=c(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-183qwy3"&&(H.textContent=he),wt=c(t),B=p(t,"UL",{"data-svelte-h":!0}),o(B)!=="svelte-63e1ap"&&(B.innerHTML=me),Ct=c(t),S=p(t,"PRE",{class:!0});var n=m(S);bt=tt(n,!1),n.forEach(e),yt=c(t),M=p(t,"H2",{"data-svelte-h":!0}),o(M)!=="svelte-nh2s20"&&(M.textContent=ge),_t=c(t),j=p(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1peuv4h"&&(j.innerHTML=ve),Tt=c(t),k=p(t,"DIV",{class:!0});var ut=m(k);L=p(ut,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-1llzxwj"&&(L.textContent=fe),et=p(ut,"P",{"data-svelte-h":!0}),o(et)!=="svelte-jybdk5"&&(et.textContent=xe),te(E.$$.fragment,ut),v=p(ut,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-r2nf4q"&&(v.textContent=we),nt=p(ut,"PRE",{class:!0});var We=m(nt);Pt=tt(We,!1),We.forEach(e),ut.forEach(e),Ht=c(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1blxrl9"&&(A.innerHTML=Ce),Bt=c(t),N=p(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-g5phbo"&&(N.innerHTML=be),St=c(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1y1m94d"&&(I.innerHTML=ye),Mt=c(t),V=p(t,"PRE",{class:!0});var qe=m(V);jt=tt(qe,!1),qe.forEach(e),Lt=c(t),R=p(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-14ufbir"&&(R.innerHTML=_e),Et=c(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-dp9cjn"&&(G.innerHTML=Te),At=c(t),$=p(t,"PRE",{class:!0});var Qe=m($);Nt=tt(Qe,!1),Qe.forEach(e),It=c(t),r=p(t,"DIV",{class:!0});var z=m(r);O=p(z,"DIV",{class:!0,"data-svelte-h":!0}),o(O)!=="svelte-l6sgde"&&(O.textContent=Pe),at=p(z,"P",{"data-svelte-h":!0}),o(at)!=="svelte-13r5wuj"&&(at.innerHTML=He),st=p(z,"P",{"data-svelte-h":!0}),o(st)!=="svelte-efefj2"&&(st.textContent=Be),pt=p(z,"PRE",{class:!0});var Je=m(pt);Vt=tt(Je,!1),Je.forEach(e),ot=p(z,"P",{"data-svelte-h":!0}),o(ot)!=="svelte-16wrnuy"&&(ot.textContent=Se),lt=p(z,"PRE",{class:!0});var De=m(lt);Rt=tt(De,!1),De.forEach(e),z.forEach(e),Gt=c(t),f=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(f)!=="svelte-12aab2m"&&(f.innerHTML=Me),$t=c(t),x=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(x)!=="svelte-x273pl"&&(x.innerHTML=je),Ot=c(t),W=p(t,"H3",{"data-svelte-h":!0}),o(W)!=="svelte-9nes82"&&(W.textContent=Le),Wt=c(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1b7xb8t"&&(q.textContent=Ee),qt=c(t),te(Q.$$.fragment,t),Qt=c(t),d=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(d)!=="svelte-11ihz0w"&&(d.textContent=Ae),Jt=c(t),J=p(t,"PRE",{class:!0});var Ue=m(J);Dt=tt(Ue,!1),Ue.forEach(e),Ut=c(t),D=p(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-4opca7"&&(D.textContent=Ne),Xt=c(t),U=p(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-fy3v6t"&&(U.textContent=Ie),Ft=c(t),h=p(t,"DIV",{class:!0});var rt=m(h);X=p(rt,"DIV",{class:!0,"data-svelte-h":!0}),o(X)!=="svelte-1kqyz2o"&&(X.textContent=Ve),ct=p(rt,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-10pclgx"&&(ct.innerHTML=Re),te(F.$$.fragment,rt),it=p(rt,"DETAILS",{"data-svelte-h":!0}),o(it)!=="svelte-168np03"&&(it.innerHTML=Ge),rt.forEach(e),Kt=c(t),K=p(t,"H2",{"data-svelte-h":!0}),o(K)!=="svelte-p2uhy5"&&(K.textContent=$e),Zt=c(t),Z=p(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-1kv094t"&&(Z.innerHTML=Oe),this.h()},h(){bt.a=null,i(S,"class","language-js"),i(L,"class","remark-container__title"),i(v,"target","_blank"),i(v,"href","/editor#eNpdjsEKwjAQRH8lLh5aCKUKXgIeelIPgqA3KzQ0qxRiGpIUWkL+3dRqQQ9ZMrPszPPAtQbmoW4FAoNacmvJcSi0Jtg7VMKS+PelKl1tkDs8O27ciT8wSd9u6Qy6zigyL0Y3lCpAoKCjtsCuHhoBbEXh3kqB5jCJn9L5fi4exdQRn+JPJFtSFbKpsfq6E9Oua/5pLjEkc3Ek1R6lbMnS62zMCIsq/RCOEQEo9BFmk1MYgK3zPNzCCzThYjE="),i(v,"title","Open in our Online Editor"),Pt.a=null,i(nt,"class","language-js"),i(k,"class","remark-container tip"),jt.a=null,i(V,"class","language-js"),Nt.a=null,i($,"class","language-js"),i(O,"class","remark-container__title"),Vt.a=null,i(pt,"class","language-js"),Rt.a=null,i(lt,"class","language-js"),i(r,"class","remark-container warning"),i(f,"class","remark-container tip"),i(x,"class","remark-container warning"),i(d,"target","_blank"),i(d,"href","/editor#eNqNUcFKxDAQ/ZU4eGihlCp4KXjY3YN6UET3ZoTGdnSLMQnJFHcp+XfTxi12dw8eEjLvzbx5j/QgjIGyh1o3CCXUUjjH7ncLYxhuCVXjWHj3XHGqLQrCZxKWHsUHJumIcrJInVVsIgbUc+XBZ2BC7aB86aFtoLzI4F3LBu1dLGZLp/lp8VDEHeEo8YXsmlUL2dZY7VGH9BCItR7hyZLJj9v90cxSv52YCOi8P+a+6drDxE/62+X1ppWNRZVEitM62M8pXEl1i1Jqdt5HcX9Wpdm+a9kRafXbt9oIFXKPDkiz6DnNtVqF12di8nnM/6kMOU5qBCKNAumfnB4y2IZfuSoy2EF5WRT+1f8AxqvDJg=="),i(d,"title","Open in our Online Editor"),Dt.a=null,i(J,"class","language-js"),i(X,"class","remark-container__title"),i(h,"class","remark-container exercise")},m(t,n){a(t,g,n),a(t,kt,n),a(t,w,n),a(t,dt,n),a(t,C,n),a(t,ht,n),a(t,b,n),a(t,mt,n),a(t,y,n),a(t,gt,n),a(t,_,n),a(t,vt,n),a(t,T,n),a(t,ft,n),a(t,P,n),a(t,xt,n),a(t,H,n),a(t,wt,n),a(t,B,n),a(t,Ct,n),a(t,S,n),bt.m(Fe,S),a(t,yt,n),a(t,M,n),a(t,_t,n),a(t,j,n),a(t,Tt,n),a(t,k,n),u(k,L),u(k,et),ee(E,k,null),u(k,v),u(k,nt),Pt.m(Ke,nt),a(t,Ht,n),a(t,A,n),a(t,Bt,n),a(t,N,n),a(t,St,n),a(t,I,n),a(t,Mt,n),a(t,V,n),jt.m(Ze,V),a(t,Lt,n),a(t,R,n),a(t,Et,n),a(t,G,n),a(t,At,n),a(t,$,n),Nt.m(ze,$),a(t,It,n),a(t,r,n),u(r,O),u(r,at),u(r,st),u(r,pt),Vt.m(Ye,pt),u(r,ot),u(r,lt),Rt.m(tn,lt),a(t,Gt,n),a(t,f,n),a(t,$t,n),a(t,x,n),a(t,Ot,n),a(t,W,n),a(t,Wt,n),a(t,q,n),a(t,qt,n),ee(Q,t,n),a(t,Qt,n),a(t,d,n),a(t,Jt,n),a(t,J,n),Dt.m(en,J),a(t,Ut,n),a(t,D,n),a(t,Xt,n),a(t,U,n),a(t,Ft,n),a(t,h,n),u(h,X),u(h,ct),ee(F,h,null),u(h,it),a(t,Kt,n),a(t,K,n),a(t,Zt,n),a(t,Z,n),zt=!0},p:an,i(t){zt||(ne(E.$$.fragment,t),ne(Q.$$.fragment,t),ne(F.$$.fragment,t),zt=!0)},o(t){ae(E.$$.fragment,t),ae(Q.$$.fragment,t),ae(F.$$.fragment,t),zt=!1},d(t){t&&(e(g),e(kt),e(w),e(dt),e(C),e(ht),e(b),e(mt),e(y),e(gt),e(_),e(vt),e(T),e(ft),e(P),e(xt),e(H),e(wt),e(B),e(Ct),e(S),e(yt),e(M),e(_t),e(j),e(Tt),e(k),e(Ht),e(A),e(Bt),e(N),e(St),e(I),e(Mt),e(V),e(Lt),e(R),e(Et),e(G),e(At),e($),e(It),e(r),e(Gt),e(f),e($t),e(x),e(Ot),e(W),e(Wt),e(q),e(qt),e(Qt),e(d),e(Jt),e(J),e(Ut),e(D),e(Xt),e(U),e(Ft),e(h),e(Kt),e(K),e(Zt),e(Z)),se(E),se(Q,t),se(F)}}}class rn extends sn{constructor(g){super(),pn(this,g,null,on,nn,{})}}export{rn as component};
