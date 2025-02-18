import{s as nn,n as an}from"../chunks/scheduler.B0TnBjPs.js";import{S as sn,i as on,e as s,s as l,H as Y,c as Yt,a as o,g as p,b as c,d as k,n as tt,h as e,f as te,o as i,j as a,p as u,m as ee,t as ne,k as ae,l as se}from"../chunks/index.BXVnRmkj.js";import{V as oe}from"../chunks/ViewApp.qg7AIhJt.js";function pn(Xe){let m,pe="2. Page Variables and Methods",kt,C,le="This tutorial will teach you what page variables are in BagaWork, and how you can create them and change them using page methods.",ht,b,ce="Why page variables are needed",mt,y,ie="An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.",gt,_,ue="For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.",vt,T,re="How to create page variables",ft,P,de="Instead of hardcoding values in the code, you did in previous tutorials learn that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but the different is that after a page variable has been created and assigned its value, it can later store another value in the page variable, for example when the user clicks on a <code>Button</code>.",xt,H,ke="Page variables are created the same way as page constants, but we use <code>thisNamingConvention</code> for the variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",wt,B,he="In the code below you find an example of how to create the following page variables:",Ct,S,me="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",bt,M,yt,ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page variables as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,j,ge="How to use page variables",Tt,L,ve="You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write <code>p.theName</code>. For example, to obtain the value stored in the page variable <code>lastVisit</code>, we would write <code>p.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",Pt,d,A,fe="Example",et,xe="Example of an app using a page variable.",E,g,we="Open in Online Editor",nt,Ht,Fe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Bt,N,Ce="As has been said, the benefit with variables over constants is that they can change value when the app is running. If we would want to store the name <code>Bob</code> in the page variable <code>name</code> after the app has started we just need to ask the computer to execute the code <code>p.name = `Bob`</code>. Easy as that!",St,I,be="However, a very good question is <em>where</em> we should write the code <code>p.name = `Bob`</code>. And it all depends on <em>when</em> we want the app to change the name to <code>Bob</code>. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let&#39;s go through how to make that happen.",Mt,V,ye="In your own <code>Page</code> class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a <code>Button</code>, that code needs to be written in a method. So your <code>Page</code> class can for example look like this:",jt,R,Lt,Ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,At,G,_e="The method in the example above is named <code>setNameToBob()</code>, but you can name it whatever you want. However, to get code that is easy to read, the name of the method needs to reflect what the code in the method does, so <code>setNameToBob()</code> is a very good name in this case, since that&#39;s precisely what the code in the method does.",Et,$,Te="To tell the computer that the code in the method <code>setNameToBob()</code> should be executed when the user clicks on a button, we need to call the configuration method <code>onClick()</code> on the button, and pass it the method as an argument (i.e. write <code>p.setNameToBob</code> between the parentheses):",Nt,O,It,Ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Vt,r,W,Pe="Note!",at,He="When passing a method as an argument (as we do when we use <code>Button.onClick()</code>), you should not write the parentheses after the method name.",st,Be="So the following is correct:",ot,Rt,Ye='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span></code>',pt,Se="And the following is wrong:",lt,Gt,tn='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>',$t,x,Me='<div class="remark-container__title">Remember!</div><p>In the code above, we haven&#39;t told BagaWork which page the user should come to when the button is clicked (we haven&#39;t used the configuration method <code>page()</code> on the <code>Button</code>), so when the user clicks the button, the current page will be reloaded (after the click handler (<code>setNameToBob()</code>) has been executed).</p>',Ot,w,je="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants/variables/methods created on that page. For example, <code>PageA</code> cannnot access the page constants/variables/methods in <code>PageB</code>. To create a constant/variable/methos all pages can access, you should instead create an <code>App</code> constant/variable/method (learn more about this in next tutorial).</p>",Wt,q,Le="The final solution",qt,Q,Ae="So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.",Qt,v,J,f,Ee="Open in Online Editor",ct,Jt,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Dt,D,Ne="Exercises",Ut,U,Ie="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Xt,h,X,Ve="Exercise 1",it,Re='Open <a href="/editor#eNq9VNtKw0AQ/ZVlXmwhiCl4IS8SRbQPilhBixW6JNMLbnfD7sS2lPyB/+Av+gluGlu6MUGxKiFhNrPnzGTO2SyAJwkEC4hUjBBAJLgx7HIeJgnDGaGMDbPxoid7lN+RRk7YIa7pmg+x0SwypJFSLdk6kb/NClAGmQcDJWLUBoKHBYxjCHwPJJ/kFZcQ8EANBgbpHoK9Vdy1cfboQWL5HGRB1i4WTuPr+uvm80Wp+/N0XO77Rk3NbjQai1ijbBSpHnUSHqG3Wt1ayl2yj0b/Qk3ZhMs5M7aeYVOVipjNVcqG42dkJ3zI75R+Ou43vWqqUyXSiayoWN7Yo+rO8uskJVLyo6O315fXjXJVTBWIn6O2Q26P/sSwGbtcdSJs6HmaajtdElZQFBgRxgGrEa/pONuDGQQH/qEHcwhaR/7Krrc4SYS1mmNbx6mheWoPwjgV/2DXUOPSnctjw2jEJfOPfsWdjkZXql+vQmlvF03/a8mapd9IMcpWaZRnklCHQ/z7Qd6NOO2YfJaaWf76ETrf6u9t7HMz+3WZVi2mtf8tZ2aP2TvPbjh+" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',z,ut,Ge="<summary>Hint</summary><p>Add one page variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 page methods (one click handler for each button) that changes the page variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the page variable in the last <code>Text</code> component.</p>",zt,F,$e="That's it!",Ft,K,Oe='Congratulation, now you know how to use page variables and page methods too! 🥳 But your <code>App</code> class can have its own variables and methods too, let&#39;s take a look at how those works next in the tutorial <a href="../app-variables-and-methods/">Programming 4. App Variables &amp; Methods</a>.',Kt;return E=new oe({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	name = \`Alice\`
	
	createGui(){
		return Text.text(\`Hello \${p.name}!\`)
	}
	
}`,x:150,y:200}]}}}),J=new oe({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),z=new oe({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){m=s("h1"),m.textContent=pe,kt=l(),C=s("p"),C.textContent=le,ht=l(),b=s("h2"),b.textContent=ce,mt=l(),y=s("p"),y.textContent=ie,gt=l(),_=s("p"),_.textContent=ue,vt=l(),T=s("h2"),T.textContent=re,ft=l(),P=s("p"),P.innerHTML=de,xt=l(),H=s("p"),H.innerHTML=ke,wt=l(),B=s("p"),B.textContent=he,Ct=l(),S=s("ul"),S.innerHTML=me,bt=l(),M=s("pre"),yt=new Y(!1),_t=l(),j=s("h2"),j.textContent=ge,Tt=l(),L=s("p"),L.innerHTML=ve,Pt=l(),d=s("div"),A=s("div"),A.textContent=fe,et=s("p"),et.textContent=xe,Yt(E.$$.fragment),g=s("a"),g.textContent=we,nt=s("pre"),Ht=new Y(!1),Bt=l(),N=s("p"),N.innerHTML=Ce,St=l(),I=s("p"),I.innerHTML=be,Mt=l(),V=s("p"),V.innerHTML=ye,jt=l(),R=s("pre"),Lt=new Y(!1),At=l(),G=s("p"),G.innerHTML=_e,Et=l(),$=s("p"),$.innerHTML=Te,Nt=l(),O=s("pre"),It=new Y(!1),Vt=l(),r=s("div"),W=s("div"),W.textContent=Pe,at=s("p"),at.innerHTML=He,st=s("p"),st.textContent=Be,ot=s("pre"),Rt=new Y(!1),pt=s("p"),pt.textContent=Se,lt=s("pre"),Gt=new Y(!1),$t=l(),x=s("div"),x.innerHTML=Me,Ot=l(),w=s("div"),w.innerHTML=je,Wt=l(),q=s("h3"),q.textContent=Le,qt=l(),Q=s("p"),Q.textContent=Ae,Qt=l(),v=s("div"),Yt(J.$$.fragment),f=s("a"),f.textContent=Ee,ct=s("pre"),Jt=new Y(!1),Dt=l(),D=s("h2"),D.textContent=Ne,Ut=l(),U=s("p"),U.textContent=Ie,Xt=l(),h=s("div"),X=s("div"),X.textContent=Ve,it=s("p"),it.innerHTML=Re,Yt(z.$$.fragment),ut=s("details"),ut.innerHTML=Ge,zt=l(),F=s("h2"),F.textContent=$e,Ft=l(),K=s("p"),K.innerHTML=Oe,this.h()},l(t){m=o(t,"H1",{"data-svelte-h":!0}),p(m)!=="svelte-1ltg3up"&&(m.textContent=pe),kt=c(t),C=o(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-qvn3ej"&&(C.textContent=le),ht=c(t),b=o(t,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-gcer2n"&&(b.textContent=ce),mt=c(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-1uoywmr"&&(y.textContent=ie),gt=c(t),_=o(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-1bpdgv1"&&(_.textContent=ue),vt=c(t),T=o(t,"H2",{"data-svelte-h":!0}),p(T)!=="svelte-knk2o3"&&(T.textContent=re),ft=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1ysct11"&&(P.innerHTML=de),xt=c(t),H=o(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-19u82r1"&&(H.innerHTML=ke),wt=c(t),B=o(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-183qwy3"&&(B.textContent=he),Ct=c(t),S=o(t,"UL",{"data-svelte-h":!0}),p(S)!=="svelte-63e1ap"&&(S.innerHTML=me),bt=c(t),M=o(t,"PRE",{class:!0});var n=k(M);yt=tt(n,!1),n.forEach(e),_t=c(t),j=o(t,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-nh2s20"&&(j.textContent=ge),Tt=c(t),L=o(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1peuv4h"&&(L.innerHTML=ve),Pt=c(t),d=o(t,"DIV",{class:!0});var rt=k(d);A=o(rt,"DIV",{class:!0,"data-svelte-h":!0}),p(A)!=="svelte-1llzxwj"&&(A.textContent=fe),et=o(rt,"P",{"data-svelte-h":!0}),p(et)!=="svelte-jybdk5"&&(et.textContent=xe),te(E.$$.fragment,rt),g=o(rt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-r2nf4q"&&(g.textContent=we),nt=o(rt,"PRE",{class:!0});var We=k(nt);Ht=tt(We,!1),We.forEach(e),rt.forEach(e),Bt=c(t),N=o(t,"P",{"data-svelte-h":!0}),p(N)!=="svelte-72szxw"&&(N.innerHTML=Ce),St=c(t),I=o(t,"P",{"data-svelte-h":!0}),p(I)!=="svelte-g5phbo"&&(I.innerHTML=be),Mt=c(t),V=o(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-1y1m94d"&&(V.innerHTML=ye),jt=c(t),R=o(t,"PRE",{class:!0});var qe=k(R);Lt=tt(qe,!1),qe.forEach(e),At=c(t),G=o(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-19db1o6"&&(G.innerHTML=_e),Et=c(t),$=o(t,"P",{"data-svelte-h":!0}),p($)!=="svelte-dp9cjn"&&($.innerHTML=Te),Nt=c(t),O=o(t,"PRE",{class:!0});var Qe=k(O);It=tt(Qe,!1),Qe.forEach(e),Vt=c(t),r=o(t,"DIV",{class:!0});var Z=k(r);W=o(Z,"DIV",{class:!0,"data-svelte-h":!0}),p(W)!=="svelte-l6sgde"&&(W.textContent=Pe),at=o(Z,"P",{"data-svelte-h":!0}),p(at)!=="svelte-13r5wuj"&&(at.innerHTML=He),st=o(Z,"P",{"data-svelte-h":!0}),p(st)!=="svelte-efefj2"&&(st.textContent=Be),ot=o(Z,"PRE",{class:!0});var Je=k(ot);Rt=tt(Je,!1),Je.forEach(e),pt=o(Z,"P",{"data-svelte-h":!0}),p(pt)!=="svelte-hhg4b8"&&(pt.textContent=Se),lt=o(Z,"PRE",{class:!0});var De=k(lt);Gt=tt(De,!1),De.forEach(e),Z.forEach(e),$t=c(t),x=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-1urocfd"&&(x.innerHTML=Me),Ot=c(t),w=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(w)!=="svelte-x273pl"&&(w.innerHTML=je),Wt=c(t),q=o(t,"H3",{"data-svelte-h":!0}),p(q)!=="svelte-9nes82"&&(q.textContent=Le),qt=c(t),Q=o(t,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1b7xb8t"&&(Q.textContent=Ae),Qt=c(t),v=o(t,"DIV",{class:!0});var Zt=k(v);te(J.$$.fragment,Zt),f=o(Zt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-11ihz0w"&&(f.textContent=Ee),ct=o(Zt,"PRE",{class:!0});var Ue=k(ct);Jt=tt(Ue,!1),Ue.forEach(e),Zt.forEach(e),Dt=c(t),D=o(t,"H2",{"data-svelte-h":!0}),p(D)!=="svelte-4opca7"&&(D.textContent=Ne),Ut=c(t),U=o(t,"P",{"data-svelte-h":!0}),p(U)!=="svelte-fy3v6t"&&(U.textContent=Ie),Xt=c(t),h=o(t,"DIV",{class:!0});var dt=k(h);X=o(dt,"DIV",{class:!0,"data-svelte-h":!0}),p(X)!=="svelte-1kqyz2o"&&(X.textContent=Ve),it=o(dt,"P",{"data-svelte-h":!0}),p(it)!=="svelte-10pclgx"&&(it.innerHTML=Re),te(z.$$.fragment,dt),ut=o(dt,"DETAILS",{"data-svelte-h":!0}),p(ut)!=="svelte-168np03"&&(ut.innerHTML=Ge),dt.forEach(e),zt=c(t),F=o(t,"H2",{"data-svelte-h":!0}),p(F)!=="svelte-p2uhy5"&&(F.textContent=$e),Ft=c(t),K=o(t,"P",{"data-svelte-h":!0}),p(K)!=="svelte-73pzpt"&&(K.innerHTML=Oe),this.h()},h(){yt.a=null,i(M,"class","language-js"),i(A,"class","remark-container__title"),i(g,"target","_blank"),i(g,"href","/editor#eNpdjsEKwjAQRH8lLh5aCKUKXgIeelIPgqA3KzQ0qxRiGpIUWkL+3dRqQQ9ZMrPszPPAtQbmoW4FAoNacmvJcSi0Jtg7VMKS+PelKl1tkDs8O27ciT8wSd9u6Qy6zigyL0Y3lCpAoKCjtsCuHhoBbEXh3kqB5jCJn9L5fi4exdQRn+JPJFtSFbKpsfq6E9Oua/5pLjEkc3Ek1R6lbMnS62zMCIsq/RCOEQEo9BFmk1MYgK3zPNzCCzThYjE="),i(g,"title","Open in our Online Editor"),Ht.a=null,i(nt,"class","language-js"),i(d,"class","remark-container tip"),Lt.a=null,i(R,"class","language-js"),It.a=null,i(O,"class","language-js"),i(W,"class","remark-container__title"),Rt.a=null,i(ot,"class","language-js"),Gt.a=null,i(lt,"class","language-js"),i(r,"class","remark-container warning"),i(x,"class","remark-container tip"),i(w,"class","remark-container warning"),i(f,"target","_blank"),i(f,"href","/editor#eNqNUcFKxDAQ/ZU4eGihlCp4KXjY3YN6UET3ZoTGdnSLMQnJFHcp+XfTxi12dw8eEjLvzbx5j/QgjIGyh1o3CCXUUjjH7ncLYxhuCVXjWHj3XHGqLQrCZxKWHsUHJumIcrJInVVsIgbUc+XBZ2BC7aB86aFtoLzI4F3LBu1dLGZLp/lp8VDEHeEo8YXsmlUL2dZY7VGH9BCItR7hyZLJj9v90cxSv52YCOi8P+a+6drDxE/62+X1ppWNRZVEitM62M8pXEl1i1Jqdt5HcX9Wpdm+a9kRafXbt9oIFXKPDkiz6DnNtVqF12di8nnM/6kMOU5qBCKNAumfnB4y2IZfuSoy2EF5WRT+1f8AxqvDJg=="),i(f,"title","Open in our Online Editor"),Jt.a=null,i(ct,"class","language-js"),i(v,"class","remark-container tip"),i(X,"class","remark-container__title"),i(h,"class","remark-container exercise")},m(t,n){a(t,m,n),a(t,kt,n),a(t,C,n),a(t,ht,n),a(t,b,n),a(t,mt,n),a(t,y,n),a(t,gt,n),a(t,_,n),a(t,vt,n),a(t,T,n),a(t,ft,n),a(t,P,n),a(t,xt,n),a(t,H,n),a(t,wt,n),a(t,B,n),a(t,Ct,n),a(t,S,n),a(t,bt,n),a(t,M,n),yt.m(ze,M),a(t,_t,n),a(t,j,n),a(t,Tt,n),a(t,L,n),a(t,Pt,n),a(t,d,n),u(d,A),u(d,et),ee(E,d,null),u(d,g),u(d,nt),Ht.m(Fe,nt),a(t,Bt,n),a(t,N,n),a(t,St,n),a(t,I,n),a(t,Mt,n),a(t,V,n),a(t,jt,n),a(t,R,n),Lt.m(Ke,R),a(t,At,n),a(t,G,n),a(t,Et,n),a(t,$,n),a(t,Nt,n),a(t,O,n),It.m(Ze,O),a(t,Vt,n),a(t,r,n),u(r,W),u(r,at),u(r,st),u(r,ot),Rt.m(Ye,ot),u(r,pt),u(r,lt),Gt.m(tn,lt),a(t,$t,n),a(t,x,n),a(t,Ot,n),a(t,w,n),a(t,Wt,n),a(t,q,n),a(t,qt,n),a(t,Q,n),a(t,Qt,n),a(t,v,n),ee(J,v,null),u(v,f),u(v,ct),Jt.m(en,ct),a(t,Dt,n),a(t,D,n),a(t,Ut,n),a(t,U,n),a(t,Xt,n),a(t,h,n),u(h,X),u(h,it),ee(z,h,null),u(h,ut),a(t,zt,n),a(t,F,n),a(t,Ft,n),a(t,K,n),Kt=!0},p:an,i(t){Kt||(ne(E.$$.fragment,t),ne(J.$$.fragment,t),ne(z.$$.fragment,t),Kt=!0)},o(t){ae(E.$$.fragment,t),ae(J.$$.fragment,t),ae(z.$$.fragment,t),Kt=!1},d(t){t&&(e(m),e(kt),e(C),e(ht),e(b),e(mt),e(y),e(gt),e(_),e(vt),e(T),e(ft),e(P),e(xt),e(H),e(wt),e(B),e(Ct),e(S),e(bt),e(M),e(_t),e(j),e(Tt),e(L),e(Pt),e(d),e(Bt),e(N),e(St),e(I),e(Mt),e(V),e(jt),e(R),e(At),e(G),e(Et),e($),e(Nt),e(O),e(Vt),e(r),e($t),e(x),e(Ot),e(w),e(Wt),e(q),e(qt),e(Q),e(Qt),e(v),e(Dt),e(D),e(Ut),e(U),e(Xt),e(h),e(zt),e(F),e(Ft),e(K)),se(E),se(J),se(z)}}}class rn extends sn{constructor(m){super(),on(this,m,null,pn,nn,{})}}export{rn as component};
