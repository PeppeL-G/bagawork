import{s as pn,n as ln}from"../chunks/scheduler.DFPFbGJz.js";import{S as cn,i as un,e as s,s as l,H as tt,c as ne,a as o,g as p,b as c,d as r,n as et,h as e,f as ae,o as i,j as a,p as u,m as se,t as oe,k as pe,l as le}from"../chunks/index.CzDE4dZi.js";import{V as ce}from"../chunks/ViewApp.C2MU7-ZI.js";function rn(Xe){let k,ie="2. Page Variables and Methods",kt,y,ue="This tutorial will teach you what page variables are in Bagawork, and how you can create them and change them using page methods.",mt,b,re="Why page variables are needed",gt,C,de="An app that should only display static data (that is, the data/text shown in the app is the same all the time, so the GUI on each page always looks the same) is quite rare these days. Most apps allows the user to make changes to the data in the app, and those changes are then reflected in the GUI shown to the user.",vt,T,he="For example, in an app that plays music, the user can usually create her own playlists, and add and remove song to/from that playlist. To achieve that, we can store the data that represents the songs in the user's playlist in a page variable. We will start off with much simpler examples than a playlist with songs, but it's a good example of that the data in an app often need to change as the user do different things in the app.",ft,S,ke="How to create page variables",xt,_,me="Instead of hardcoding values in the code, you in previous tutorials learned that you could put those values in page constants (or app constants) instead. The idea with page variables is the very same, but with the different that after a page variable has been created an assigned its value, it can later store another value, for example when the user clicks on a <code>Button</code>.",wt,P,ge="Page variables are created the same way as page constants, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",yt,B,ve="In the code below you find an example of how to create the following page variables:",bt,H,fe="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",Ct,A,Tt,Ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page variables as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,St,M,xe="How to use page variables",_t,N,we="You obtain the value stored in a page variable the same way as you would retrieve a constant from it, i.e. you would write <code>p.theName</code>. For example, to obtain the value stored in the page variable <code>lastVisit</code>, we would write <code>p.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",Pt,m,I,ye="Example",nt,be="Example of an app using a page variable.",E,j,g,Ce="Open in Online Editor",at,Bt,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,L,Te="But the benefit with variables over constants is that they can also change value while the app is running. If we would want to store the name <code>Bob</code> in the page variable <code>name</code> while the app is running we would write the code <code>p.name = `Bob`</code>. Easy as that!",At,G,Se="However, a very good question is <em>where</em> we should write the code <code>p.name = `Bob`</code>. And it all depends on <em>when</em> we want the app to change the name to <code>Bob</code>. Very often, it is when the user has interacted with the GUI somehow, for example have clicked on a button, so let&#39;s go through how to make that happen.",Mt,R,_e="In your own <code>Page</code> class, you can not only write different pre-defined methods, but you can also create your own methods (you can name them whatever you want). To tell the computer which code that should run when the user clicks on a <code>Button</code>, that code needs to be written in a method. So your <code>Page</code> class can for example look like this:",Nt,V,It,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Et,D,Pe="The method in the example above is named <code>setNameToBob()</code>, but you can name it whatever you want. However, to get code that is easy to read, the name of the method should reflect what the code in the method does, so <code>setNameToBob()</code> is a very good name in this case, since that&#39;s precisely what the code in the method does.",jt,W,Be="To tell the computer that the code in the method <code>setNameToBob()</code> should be executed when the user clicks on a button, we need to call the configuration method <code>handler()</code> on the button, and pass it the method as an argument (i.e. write <code>p.setNameToBob</code> between the parentheses):",Lt,Y,Gt,nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Rt,d,q,He="Note!",st,Ae="When passing a method as an argument (as we do when we use <code>Button.handler()</code>), you should not write the parentheses after the method name.",ot,Me="So the following is correct:",pt,Vt,an='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span></code>',lt,Ne="And the following is incorrect:",ct,Dt,sn='<code class="language-js">Button<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code>',Wt,f,Ie='<div class="remark-container__title">Remember!</div><p>In the code above, we haven&#39;t told Bagawork which page the user should come to when the button is clicked (we haven&#39;t used the configuration method <code>page()</code> on the <code>Button</code>), so when the user clicks the button, the current page will be reloaded (after the click handler (<code>setNameToBob</code>) has been executed).</p>',Yt,x,Ee="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants/variables/methods created on that page. For example, <code>PageA</code> cannnot access the page constants/variables/methods in <code>PageB</code>. To create a constant/variable/methos all pages can access, you should instead create an <code>App</code> constant/variable/method (learn more about this in next tutorial).</p>",qt,O,je="The final solution",Ot,J,Le="So, here's all the code for the app using a page variable, and that has two buttons to change the value stored in it.",Jt,w,U,v,Ge="Open in Online Editor",it,Ut,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,$t,$,Re="Exercises",Ft,F,Ve="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Qt,h,Q,De="Exercise 1",ut,We='Open <a href="/editor#eNq9VNtKw0AQ/ZVlXmwhiCl4IS8SRbQPilhBixW6JNMLbnfD7sS2lPyB/+Av+gluGlu6MUGxKiFhNrPnzGTO2SyAJwkEC4hUjBBAJLgx7HIeJgnDGaGMDbPxoid7lN+RRk7YIa7pmg+x0SwypJFSLdk6kb/NClAGmQcDJWLUBoKHBYxjCHwPJJ/kFZcQ8EANBgbpHoK9Vdy1cfboQWL5HGRB1i4WTuPr+uvm80Wp+/N0XO77Rk3NbjQai1ijbBSpHnUSHqG3Wt1ayl2yj0b/Qk3ZhMs5M7aeYVOVipjNVcqG42dkJ3zI75R+Ou43vWqqUyXSiayoWN7Yo+rO8uskJVLyo6O315fXjXJVTBWIn6O2Q26P/sSwGbtcdSJs6HmaajtdElZQFBgRxgGrEa/pONuDGQQH/qEHcwhaR/7Krrc4SYS1mmNbx6mheWoPwjgV/2DXUOPSnctjw2jEJfOPfsWdjkZXql+vQmlvF03/a8mapd9IMcpWaZRnklCHQ/z7Qd6NOO2YfJaaWf76ETrf6u9t7HMz+3WZVi2mtf8tZ2aP2TvPbjh+" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',dt,z,rt,Ye="<summary>Hint</summary><p>Add one page variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 page methods (one click handler for each button) that changes the page variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the page variable in the last <code>Text</code> component.</p>",zt,K,qe="That's it!",Kt,X,Oe="Congratulation, now you know how to use page variables and page methods too! 🥳 But your <code>App</code> class can have its own variables and methods too, let&#39;s take a look at how those works next.",Xt;return j=new ce({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),U=new ce({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),z=new ce({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	stars = \`🌟🌟🌟\`
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`How many stars would you give BagaWork?\`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(\`🌟\`).handler(p.select1Star),
					Space,
					Button.text(\`🌟🌟\`).handler(p.select2Stars),
					Space,
					Button.text(\`🌟🌟🌟\`).handler(p.select3Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟\`).handler(p.select4Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟🌟\`).handler(p.select5Stars),
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
	
}`,x:617,y:281}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){k=s("h1"),k.textContent=ie,kt=l(),y=s("p"),y.textContent=ue,mt=l(),b=s("h2"),b.textContent=re,gt=l(),C=s("p"),C.textContent=de,vt=l(),T=s("p"),T.textContent=he,ft=l(),S=s("h2"),S.textContent=ke,xt=l(),_=s("p"),_.innerHTML=me,wt=l(),P=s("p"),P.innerHTML=ge,yt=l(),B=s("p"),B.textContent=ve,bt=l(),H=s("ul"),H.innerHTML=fe,Ct=l(),A=s("pre"),Tt=new tt(!1),St=l(),M=s("h2"),M.textContent=xe,_t=l(),N=s("p"),N.innerHTML=we,Pt=l(),m=s("div"),I=s("div"),I.textContent=ye,nt=s("p"),nt.textContent=be,E=s("div"),ne(j.$$.fragment),g=s("a"),g.textContent=Ce,at=s("pre"),Bt=new tt(!1),Ht=l(),L=s("p"),L.innerHTML=Te,At=l(),G=s("p"),G.innerHTML=Se,Mt=l(),R=s("p"),R.innerHTML=_e,Nt=l(),V=s("pre"),It=new tt(!1),Et=l(),D=s("p"),D.innerHTML=Pe,jt=l(),W=s("p"),W.innerHTML=Be,Lt=l(),Y=s("pre"),Gt=new tt(!1),Rt=l(),d=s("div"),q=s("div"),q.textContent=He,st=s("p"),st.innerHTML=Ae,ot=s("p"),ot.textContent=Me,pt=s("pre"),Vt=new tt(!1),lt=s("p"),lt.textContent=Ne,ct=s("pre"),Dt=new tt(!1),Wt=l(),f=s("div"),f.innerHTML=Ie,Yt=l(),x=s("div"),x.innerHTML=Ee,qt=l(),O=s("h3"),O.textContent=je,Ot=l(),J=s("p"),J.textContent=Le,Jt=l(),w=s("div"),ne(U.$$.fragment),v=s("a"),v.textContent=Ge,it=s("pre"),Ut=new tt(!1),$t=l(),$=s("h2"),$.textContent=Re,Ft=l(),F=s("p"),F.textContent=Ve,Qt=l(),h=s("div"),Q=s("div"),Q.textContent=De,ut=s("p"),ut.innerHTML=We,dt=s("div"),ne(z.$$.fragment),rt=s("details"),rt.innerHTML=Ye,zt=l(),K=s("h2"),K.textContent=qe,Kt=l(),X=s("p"),X.innerHTML=Oe,this.h()},l(t){k=o(t,"H1",{"data-svelte-h":!0}),p(k)!=="svelte-1ltg3up"&&(k.textContent=ie),kt=c(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-ozhh0b"&&(y.textContent=ue),mt=c(t),b=o(t,"H2",{"data-svelte-h":!0}),p(b)!=="svelte-gcer2n"&&(b.textContent=re),gt=c(t),C=o(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-1uoywmr"&&(C.textContent=de),vt=c(t),T=o(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1bpdgv1"&&(T.textContent=he),ft=c(t),S=o(t,"H2",{"data-svelte-h":!0}),p(S)!=="svelte-knk2o3"&&(S.textContent=ke),xt=c(t),_=o(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-1xn1p3q"&&(_.innerHTML=me),wt=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-g5df5h"&&(P.innerHTML=ge),yt=c(t),B=o(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-183qwy3"&&(B.textContent=ve),bt=c(t),H=o(t,"UL",{"data-svelte-h":!0}),p(H)!=="svelte-63e1ap"&&(H.innerHTML=fe),Ct=c(t),A=o(t,"PRE",{class:!0});var n=r(A);Tt=et(n,!1),n.forEach(e),St=c(t),M=o(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-nh2s20"&&(M.textContent=xe),_t=c(t),N=o(t,"P",{"data-svelte-h":!0}),p(N)!=="svelte-1peuv4h"&&(N.innerHTML=we),Pt=c(t),m=o(t,"DIV",{class:!0});var Zt=r(m);I=o(Zt,"DIV",{class:!0,"data-svelte-h":!0}),p(I)!=="svelte-1llzxwj"&&(I.textContent=ye),nt=o(Zt,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-jybdk5"&&(nt.textContent=be),E=o(Zt,"DIV",{});var te=r(E);ae(j.$$.fragment,te),g=o(te,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-t2byev"&&(g.textContent=Ce),at=o(te,"PRE",{class:!0});var Je=r(at);Bt=et(Je,!1),Je.forEach(e),te.forEach(e),Zt.forEach(e),Ht=c(t),L=o(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1blxrl9"&&(L.innerHTML=Te),At=c(t),G=o(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-g5phbo"&&(G.innerHTML=Se),Mt=c(t),R=o(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1y1m94d"&&(R.innerHTML=_e),Nt=c(t),V=o(t,"PRE",{class:!0});var Ue=r(V);It=et(Ue,!1),Ue.forEach(e),Et=c(t),D=o(t,"P",{"data-svelte-h":!0}),p(D)!=="svelte-14ufbir"&&(D.innerHTML=Pe),jt=c(t),W=o(t,"P",{"data-svelte-h":!0}),p(W)!=="svelte-kkoe7e"&&(W.innerHTML=Be),Lt=c(t),Y=o(t,"PRE",{class:!0});var $e=r(Y);Gt=et($e,!1),$e.forEach(e),Rt=c(t),d=o(t,"DIV",{class:!0});var Z=r(d);q=o(Z,"DIV",{class:!0,"data-svelte-h":!0}),p(q)!=="svelte-l6sgde"&&(q.textContent=He),st=o(Z,"P",{"data-svelte-h":!0}),p(st)!=="svelte-1osh3hk"&&(st.innerHTML=Ae),ot=o(Z,"P",{"data-svelte-h":!0}),p(ot)!=="svelte-efefj2"&&(ot.textContent=Me),pt=o(Z,"PRE",{class:!0});var Fe=r(pt);Vt=et(Fe,!1),Fe.forEach(e),lt=o(Z,"P",{"data-svelte-h":!0}),p(lt)!=="svelte-16wrnuy"&&(lt.textContent=Ne),ct=o(Z,"PRE",{class:!0});var Qe=r(ct);Dt=et(Qe,!1),Qe.forEach(e),Z.forEach(e),Wt=c(t),f=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(f)!=="svelte-1lezium"&&(f.innerHTML=Ie),Yt=c(t),x=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-x273pl"&&(x.innerHTML=Ee),qt=c(t),O=o(t,"H3",{"data-svelte-h":!0}),p(O)!=="svelte-9nes82"&&(O.textContent=je),Ot=c(t),J=o(t,"P",{"data-svelte-h":!0}),p(J)!=="svelte-1b7xb8t"&&(J.textContent=Le),Jt=c(t),w=o(t,"DIV",{});var ee=r(w);ae(U.$$.fragment,ee),v=o(ee,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-e7aeb3"&&(v.textContent=Ge),it=o(ee,"PRE",{class:!0});var ze=r(it);Ut=et(ze,!1),ze.forEach(e),ee.forEach(e),$t=c(t),$=o(t,"H2",{"data-svelte-h":!0}),p($)!=="svelte-4opca7"&&($.textContent=Re),Ft=c(t),F=o(t,"P",{"data-svelte-h":!0}),p(F)!=="svelte-fy3v6t"&&(F.textContent=Ve),Qt=c(t),h=o(t,"DIV",{class:!0});var ht=r(h);Q=o(ht,"DIV",{class:!0,"data-svelte-h":!0}),p(Q)!=="svelte-1kqyz2o"&&(Q.textContent=De),ut=o(ht,"P",{"data-svelte-h":!0}),p(ut)!=="svelte-10pclgx"&&(ut.innerHTML=We),dt=o(ht,"DIV",{});var Ke=r(dt);ae(z.$$.fragment,Ke),Ke.forEach(e),rt=o(ht,"DETAILS",{"data-svelte-h":!0}),p(rt)!=="svelte-168np03"&&(rt.innerHTML=Ye),ht.forEach(e),zt=c(t),K=o(t,"H2",{"data-svelte-h":!0}),p(K)!=="svelte-p2uhy5"&&(K.textContent=qe),Kt=c(t),X=o(t,"P",{"data-svelte-h":!0}),p(X)!=="svelte-1kv094t"&&(X.innerHTML=Oe),this.h()},h(){Tt.a=null,i(A,"class","language-js"),i(I,"class","remark-container__title"),i(g,"target","_blank"),i(g,"href","/editor#eNrFUm1LwzAQ/ivxEFwhjHUwkIJIJ6L7oIgKOtygob1uxSwpSYqO0v9uYt1cxjbmJz+05Hp5Xu651sDKEqIaUpkhRJBypjW5W8ZlSfDToMg0sed6IibGPalCZvDJMGUe2Aw7QdsxCk2lBFk33NemBTXQUMglz1BpiN5qKDKIQgqCLZziNwQoyDzXaF4h6q3OY3tuphRKy+chW7JRW3jG1/pr865Yu3eS5IIkMS9STPyZbqpie5pnS9I19tVJbpFzSU7rsus4mpMk8Cak8GnNnA8oLCHqD8KV7WdclNySe/Y9x7F+H+VxVvEDtqUYYi7Vb9ob2gfsP8oP3U3nBc8Uis4P0jyVLEW6qjZGjBWSpazId7jEzJkg4fllEtDdyCvJq4XYIbB9cWKGlbEz/MjcyyToumw6ouI8oEfCxqiPw606gReSFHFuUO1K0P2f7W76W7u5FhYSz/C/N/MyZ+ZMu+UoYtX378RLLOztDsy/NDjiUv8Ypv4epk2Hf9nJtPkCiJ+r9w=="),i(g,"title","Open in our Online Editor"),Bt.a=null,i(at,"class","language-js"),i(m,"class","remark-container tip"),It.a=null,i(V,"class","language-js"),Gt.a=null,i(Y,"class","language-js"),i(q,"class","remark-container__title"),Vt.a=null,i(pt,"class","language-js"),Dt.a=null,i(ct,"class","language-js"),i(d,"class","remark-container warning"),i(f,"class","remark-container tip"),i(x,"class","remark-container warning"),i(v,"target","_blank"),i(v,"href","/editor#eNrFU2Fr2zAQ/SuaGMwGYZpAoBhGccrY+mFlrIGtLIVo9rkJUyQhyazB+L/vFM1ulbrDYx/2wUa6u/fu7j27pVxrmre0VBXQnJaCW0s+HgqtCTw4kJUleG7Xcu38UxrgDm4cN+4Tv4ckDRlnwDVGkiHho10AdbRjtFaiAmNp/q2lu4rmM0Yl3/uORwhlVNW1BfeV5mf9+RbP3R2jGvkiZCC7Cpdo8KH/MLy/DNP7luQt2RRiV8Kmj2Kra0ys1DE8rKSz5+XdM8xSfR9BYDSuD7q9b3anin1WP21WbneiMiCTkFq7FY6fOXwlmw8ghCKv20DevdqkrK9aNs4p+bvucssl7n2cwCkSZk4zjFYCTKKzeM1pLH6PUQ5MpIEgjaxm9AFdOV8weqD5fDHr/VvBXgtUIPIxsq6wP67qomrEH/xTcgm1Mo8e/YvGN5qXwEYULwyQg2rI8SsjDrcns/OLJ7rHyEslmr0caXBaeCL1tUJpvTaJbIRI2UTYLdhpuD6TRiIpWdQOvRxR0P+owZv5iTfvJEKKe/jfznzZcvfGenMMwe4vexIpNjsbFywuWkwomk9hmr/A9HTCv/HkrvsFnxoNMQ=="),i(v,"title","Open in our Online Editor"),Ut.a=null,i(it,"class","language-js"),i(Q,"class","remark-container__title"),i(h,"class","remark-container exercise")},m(t,n){a(t,k,n),a(t,kt,n),a(t,y,n),a(t,mt,n),a(t,b,n),a(t,gt,n),a(t,C,n),a(t,vt,n),a(t,T,n),a(t,ft,n),a(t,S,n),a(t,xt,n),a(t,_,n),a(t,wt,n),a(t,P,n),a(t,yt,n),a(t,B,n),a(t,bt,n),a(t,H,n),a(t,Ct,n),a(t,A,n),Tt.m(Ze,A),a(t,St,n),a(t,M,n),a(t,_t,n),a(t,N,n),a(t,Pt,n),a(t,m,n),u(m,I),u(m,nt),u(m,E),se(j,E,null),u(E,g),u(E,at),Bt.m(tn,at),a(t,Ht,n),a(t,L,n),a(t,At,n),a(t,G,n),a(t,Mt,n),a(t,R,n),a(t,Nt,n),a(t,V,n),It.m(en,V),a(t,Et,n),a(t,D,n),a(t,jt,n),a(t,W,n),a(t,Lt,n),a(t,Y,n),Gt.m(nn,Y),a(t,Rt,n),a(t,d,n),u(d,q),u(d,st),u(d,ot),u(d,pt),Vt.m(an,pt),u(d,lt),u(d,ct),Dt.m(sn,ct),a(t,Wt,n),a(t,f,n),a(t,Yt,n),a(t,x,n),a(t,qt,n),a(t,O,n),a(t,Ot,n),a(t,J,n),a(t,Jt,n),a(t,w,n),se(U,w,null),u(w,v),u(w,it),Ut.m(on,it),a(t,$t,n),a(t,$,n),a(t,Ft,n),a(t,F,n),a(t,Qt,n),a(t,h,n),u(h,Q),u(h,ut),u(h,dt),se(z,dt,null),u(h,rt),a(t,zt,n),a(t,K,n),a(t,Kt,n),a(t,X,n),Xt=!0},p:ln,i(t){Xt||(oe(j.$$.fragment,t),oe(U.$$.fragment,t),oe(z.$$.fragment,t),Xt=!0)},o(t){pe(j.$$.fragment,t),pe(U.$$.fragment,t),pe(z.$$.fragment,t),Xt=!1},d(t){t&&(e(k),e(kt),e(y),e(mt),e(b),e(gt),e(C),e(vt),e(T),e(ft),e(S),e(xt),e(_),e(wt),e(P),e(yt),e(B),e(bt),e(H),e(Ct),e(A),e(St),e(M),e(_t),e(N),e(Pt),e(m),e(Ht),e(L),e(At),e(G),e(Mt),e(R),e(Nt),e(V),e(Et),e(D),e(jt),e(W),e(Lt),e(Y),e(Rt),e(d),e(Wt),e(f),e(Yt),e(x),e(qt),e(O),e(Ot),e(J),e(Jt),e(w),e($t),e($),e(Ft),e(F),e(Qt),e(h),e(zt),e(K),e(Kt),e(X)),le(j),le(U),le(z)}}}class mn extends cn{constructor(k){super(),un(this,k,null,rn,pn,{})}}export{mn as component};
