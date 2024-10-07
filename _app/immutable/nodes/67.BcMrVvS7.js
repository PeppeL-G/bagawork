import{s as oe,n as le}from"../chunks/scheduler.B0TnBjPs.js";import{S as ce,i as ie,e as s,s as l,c as vt,H as mt,a as p,g as o,b as c,d as m,f as Pt,n as wt,h as e,o as i,j as a,p as u,m as Ct,t as yt,k as Tt,l as _t}from"../chunks/index.CHfggXAQ.js";import{V as It}from"../chunks/ViewApp.6tllL5xD.js";function ue(ee){let h,St="5. Changing Page",X,w,Rt="This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to her.",$,v,bt="Multiple pages",N,P,jt="An app who's GUI always look the same is usually not that fun. Therefore, most BagaWork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!",Z,C,Bt="Going to another page",Y,y,Gt="To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, BagaWork has the <code>Button</code> component.",tt,T,Et="To tell the <code>Button</code> which text it should display, use the configuration method <code>text()</code>, and pass it the text it should contain as a string.",et,r,_,Ht="Example",F,Wt="Example of how to show a <code>Button</code> on a page (note: nothing special should happen when you click on the button in this example).",I,d,Lt="Open in Online Editor",A,nt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am a Button!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,S,Mt="By default, when clicking on <code>Button</code>, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:",st,R,zt="<li>The page shown on the screen has been deleted</li> <li>The page has been created anew</li> <li>The GUI of the new page is shown (the <code>createGui()</code> method has been called)</li>",pt,b,Ft="To take the user to another page when the button is clicked, call the configuration method <code>page()</code> and pass it the name of the page the user should come to.",ot,g,j,At="Example",U,Ut="Example of an app where the user can go between 3 pages.",f,x,Qt="Open in Online Editor",Q,lt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FirstPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>SecondPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,V,ct,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SecondPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ThirdPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,J,it,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ThirdPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FirstPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ut,B,Vt="Exercises",rt,G,Jt="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",kt,k,E,Dt="Exercise 1",D,qt='The code in <a href="/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7" target="_blank">this BagaWork project</a> contains 3 pages. It works like this:',H,q,Kt=`That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.`,W,ht,L,Ot="That's it!",dt,M,Xt="Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the <code>Button</code> component is just one way to take the user to another page, there exists more ways you can learn later on.",gt,z,$t='When you are ready, continue with <a href="../sizing-gui-components/">Tutorial 6. Sizing GUI Components</a>.',xt;return I=new It({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`This is the StartPage.\`),
			Button.text(\`I am a Button!\`)
		)
	}
}`,x:150,y:200}]}}}),H=new It({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:750,y:200}]}}}),W=new It({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:750,y:200}]}}}),{c(){h=s("h1"),h.textContent=St,X=l(),w=s("p"),w.textContent=Rt,$=l(),v=s("h2"),v.textContent=bt,N=l(),P=s("p"),P.textContent=jt,Z=l(),C=s("h2"),C.textContent=Bt,Y=l(),y=s("p"),y.innerHTML=Gt,tt=l(),T=s("p"),T.innerHTML=Et,et=l(),r=s("div"),_=s("div"),_.textContent=Ht,F=s("p"),F.innerHTML=Wt,vt(I.$$.fragment),d=s("a"),d.textContent=Lt,A=s("pre"),nt=new mt(!1),at=l(),S=s("p"),S.innerHTML=Mt,st=l(),R=s("ol"),R.innerHTML=zt,pt=l(),b=s("p"),b.innerHTML=Ft,ot=l(),g=s("div"),j=s("div"),j.textContent=At,U=s("p"),U.textContent=Ut,f=s("div"),x=s("a"),x.textContent=Qt,Q=s("pre"),lt=new mt(!1),V=s("pre"),ct=new mt(!1),J=s("pre"),it=new mt(!1),ut=l(),B=s("h2"),B.textContent=Vt,rt=l(),G=s("p"),G.textContent=Jt,kt=l(),k=s("div"),E=s("div"),E.textContent=Dt,D=s("p"),D.innerHTML=qt,vt(H.$$.fragment),q=s("p"),q.textContent=Kt,vt(W.$$.fragment),ht=l(),L=s("h2"),L.textContent=Ot,dt=l(),M=s("p"),M.innerHTML=Xt,gt=l(),z=s("p"),z.innerHTML=$t,this.h()},l(t){h=p(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-1jha0bp"&&(h.textContent=St),X=c(t),w=p(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-18gn59o"&&(w.textContent=Rt),$=c(t),v=p(t,"H2",{"data-svelte-h":!0}),o(v)!=="svelte-na685i"&&(v.textContent=bt),N=c(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1e8tlne"&&(P.textContent=jt),Z=c(t),C=p(t,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-1w3bhhb"&&(C.textContent=Bt),Y=c(t),y=p(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1t457lj"&&(y.innerHTML=Gt),tt=c(t),T=p(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1vbxxkt"&&(T.innerHTML=Et),et=c(t),r=p(t,"DIV",{class:!0});var n=m(r);_=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(_)!=="svelte-1llzxwj"&&(_.textContent=Ht),F=p(n,"P",{"data-svelte-h":!0}),o(F)!=="svelte-fsjsq"&&(F.innerHTML=Wt),Pt(I.$$.fragment,n),d=p(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(d)!=="svelte-6ejvyl"&&(d.textContent=Lt),A=p(n,"PRE",{class:!0});var Nt=m(A);nt=wt(Nt,!1),Nt.forEach(e),n.forEach(e),at=c(t),S=p(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-q7pfhv"&&(S.innerHTML=Mt),st=c(t),R=p(t,"OL",{"data-svelte-h":!0}),o(R)!=="svelte-3bnvh5"&&(R.innerHTML=zt),pt=c(t),b=p(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-10qsigu"&&(b.innerHTML=Ft),ot=c(t),g=p(t,"DIV",{class:!0});var ft=m(g);j=p(ft,"DIV",{class:!0,"data-svelte-h":!0}),o(j)!=="svelte-1llzxwj"&&(j.textContent=At),U=p(ft,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1qpnzzv"&&(U.textContent=Ut),f=p(ft,"DIV",{});var O=m(f);x=p(O,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-zpz7sx"&&(x.textContent=Qt),Q=p(O,"PRE",{class:!0});var Zt=m(Q);lt=wt(Zt,!1),Zt.forEach(e),V=p(O,"PRE",{class:!0});var Yt=m(V);ct=wt(Yt,!1),Yt.forEach(e),J=p(O,"PRE",{class:!0});var te=m(J);it=wt(te,!1),te.forEach(e),O.forEach(e),ft.forEach(e),ut=c(t),B=p(t,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-4opca7"&&(B.textContent=Vt),rt=c(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-fy3v6t"&&(G.textContent=Jt),kt=c(t),k=p(t,"DIV",{class:!0});var K=m(k);E=p(K,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-1kqyz2o"&&(E.textContent=Dt),D=p(K,"P",{"data-svelte-h":!0}),o(D)!=="svelte-njjpse"&&(D.innerHTML=qt),Pt(H.$$.fragment,K),q=p(K,"P",{"data-svelte-h":!0}),o(q)!=="svelte-veg0ol"&&(q.textContent=Kt),Pt(W.$$.fragment,K),K.forEach(e),ht=c(t),L=p(t,"H2",{"data-svelte-h":!0}),o(L)!=="svelte-p2uhy5"&&(L.textContent=Ot),dt=c(t),M=p(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1jayx97"&&(M.innerHTML=Xt),gt=c(t),z=p(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-12xoa0a"&&(z.innerHTML=$t),this.h()},h(){i(_,"class","remark-container__title"),i(d,"target","_blank"),i(d,"href","/editor#eNpdj81qwzAQhF9F2ZMNwjiFXHRrL8WHQkl8qwIW1rYWOLKQ1sTG6N2j1K37A2LRzM7q0y6gnAOxQDtoBAFtr0JgL/OjcwwnQqsDS/dFWkmtR0V4IuXpVX1gln+6kjzS6C3bGnc3ShshcnBJBxBvCxgNYs/hfeg1+moVf6Db/Aa+i1/k59H8Zx6HayjazvTao83WlqQ6PVBQKllTdyawdKjDH0DR5Pw7+zQSDfYrXTF1YYqt3q7J11C+LcRhSv8+lBxmEA9lGc/xBotkcb0="),i(d,"title","Open in our Online Editor"),nt.a=null,i(A,"class","language-js"),i(r,"class","remark-container tip"),i(j,"class","remark-container__title"),i(x,"target","_blank"),i(x,"href","/editor#eNqtkkFrgzAUx7+KvJNCKLO2HfW2HVZ2GIy1h41ZqGhcBZtI8mQtku++aGrUUTz1kPDyXt4//1+SGuKyhLCGhKcUQkiKWErn7fJUlg49I2WpdHRcRyzCZiSCxki3GAt8j3+o65kKCoqVYM5LLmRbaLLKNClQBDJepFRICL9ryFMIfQIsPjUntlpAgGeZpPgJ4UMXf+lY7QmUWm/UacRezWJk3J5vzTeLune+qfL/nj/4r5wlx7xIBWWuKUW40wIz1JN7sKIHj3Tl5wqRs+uGDXeQO1uacJaafbPGs9tnPNPnXa9Fad6zdr8ICFwgDPy1IoZuPkXX690Tb+h7im93zMUIzyZu0y38VUvnPy47umCKzsrdE25geopt8MSGzSZus63WS/Nyc/tDd/RUFtpl81P36g+vBSx3"),i(x,"title","Open in our Online Editor"),lt.a=null,i(Q,"class","language-js"),ct.a=null,i(V,"class","language-js"),it.a=null,i(J,"class","language-js"),i(g,"class","remark-container tip"),i(E,"class","remark-container__title"),i(k,"class","remark-container exercise")},m(t,n){a(t,h,n),a(t,X,n),a(t,w,n),a(t,$,n),a(t,v,n),a(t,N,n),a(t,P,n),a(t,Z,n),a(t,C,n),a(t,Y,n),a(t,y,n),a(t,tt,n),a(t,T,n),a(t,et,n),a(t,r,n),u(r,_),u(r,F),Ct(I,r,null),u(r,d),u(r,A),nt.m(ne,A),a(t,at,n),a(t,S,n),a(t,st,n),a(t,R,n),a(t,pt,n),a(t,b,n),a(t,ot,n),a(t,g,n),u(g,j),u(g,U),u(g,f),u(f,x),u(f,Q),lt.m(ae,Q),u(f,V),ct.m(se,V),u(f,J),it.m(pe,J),a(t,ut,n),a(t,B,n),a(t,rt,n),a(t,G,n),a(t,kt,n),a(t,k,n),u(k,E),u(k,D),Ct(H,k,null),u(k,q),Ct(W,k,null),a(t,ht,n),a(t,L,n),a(t,dt,n),a(t,M,n),a(t,gt,n),a(t,z,n),xt=!0},p:le,i(t){xt||(yt(I.$$.fragment,t),yt(H.$$.fragment,t),yt(W.$$.fragment,t),xt=!0)},o(t){Tt(I.$$.fragment,t),Tt(H.$$.fragment,t),Tt(W.$$.fragment,t),xt=!1},d(t){t&&(e(h),e(X),e(w),e($),e(v),e(N),e(P),e(Z),e(C),e(Y),e(y),e(tt),e(T),e(et),e(r),e(at),e(S),e(st),e(R),e(pt),e(b),e(ot),e(g),e(ut),e(B),e(rt),e(G),e(kt),e(k),e(ht),e(L),e(dt),e(M),e(gt),e(z)),_t(I),_t(H),_t(W)}}}class de extends ce{constructor(h){super(),ie(this,h,null,ue,oe,{})}}export{de as component};
