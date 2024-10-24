import{s as oe,n as le}from"../chunks/scheduler.B0TnBjPs.js";import{S as ce,i as ie,e as s,s as l,c as wt,H as mt,a as p,g as o,b as c,d as m,f as Pt,n as vt,h as e,o as i,j as a,p as u,m as Ct,t as yt,k as _t,l as Tt}from"../chunks/index.Cnh3HYw3.js";import{V as bt}from"../chunks/ViewApp.9sx5twVU.js";function ue(ee){let h,Et="5. Changing Page",q,v,jt="This tutorial will teach you how to take the user to another page when she interacts with the GUI on the page currently shown to her.",U,w,Bt="Multiple pages",K,P,Rt="An app who's GUI always look the same is usually not that fun. Therefore, most BagaWork apps consists of multiple different pages, and when we want to change the GUI shown to the user in the app, we simply take the user to another page in the app, and show the GUI of that page instead. Simple as that!",Y,C,St="Going to another page",Z,y,It="To take the user to another page in the app, the user usually needs to interact with the GUI on the page somehow. The simplest example of this is by clicking on a button. For that purpose, BagaWork has the <code>Button</code> component.",tt,_,Ht="To tell the <code>Button</code> which text it should display, use the configuration method <code>text()</code>, and pass it the text it should contain as a string.",et,r,T,Gt="Example",L,Mt="Example of how to show a <code>Button</code> on a page (note: nothing special should happen when you click on the button in this example).",b,d,Wt="Open in Online Editor",z,nt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the StartPage.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am a Button!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,E,At="By default, when clicking on <code>Button</code>, the current page will be reloaded. In the example above, it looks like nothing happens when you click on the button, but what actually has happened is:",st,j,Ft="<li>The page shown on the screen has been deleted</li> <li>The page has been created anew</li> <li>The GUI of the new page is shown (the <code>createGui()</code> method has been called)</li>",pt,B,Lt="To take the user to another page when the button is clicked, call the configuration method <code>page()</code> and pass it the name of the page the user should come to.",ot,g,R,zt="Example",Q,Qt="Example of an app where the user can go between 3 pages.",f,x,Dt="Open in Online Editor",D,lt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FirstPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>SecondPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,O,ct,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SecondPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ThirdPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,V,it,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ThirdPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FirstPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ut,S,Ot="Exercises",rt,I,Vt="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",kt,k,H,Jt="Exercise 1",J,Nt='The code in <a href="/editor#eNq1lG1r2zAQgP/KTV+WgAlxXrbEX4ZbttFBy2gLXVkK0exz7EWWjCSvCcH/fZIdZ3aok8FWsM2d7lWPddoRmmXE25FAhEg8EjCqFFxv/SwD3GjkoQIj7xZ8oe0bSKQa7zSV+itdYa9fWbREnUsOB4NdLaqgghQOiQQLUSrifd+RJCSe6xBOU1uxDCEOEVGkUH8j3rCWH41cPDkkM/lakVWyq0ppNX6of2jeKrs/nX/Ok+Oeb8WzGgRxwkKJvFeZFvreJBho8+ktr5Hny75TWy5yrQXf226RhvBFrHHZH9g+e3bB6rbuqZhPNNDNGKs3Y/p7goVBszEbnYwdsiXe2J0XTgVidApEs41/ZnGX0QCdF8hcRbAVOTxTrkELWKE2skwd+JkrDSthF3WMEAjJUYKISi0WuUIHfmBAjQCJfqtgPoQQVxJRWReJbxrAm+WPsEwn70os7vtpjWV8DktN+vWwPMTIwWe4odz0ARfIGCT8F3KNYUlAI8MsFtywMI85DWNIE6WMNaCMKYikSOEyzoM13AgpEzX4WxyzEsdkNq8H5x7TjJldtQaoxcRX66vID3PWQeV/kvElliem/EEGBeXgzj50bG6hLwXLU/5CgWPHowm7EY2UZ3wfUZ1wPh7H+kI7jGAL5Ufzh6W/wtcH+RBTOzaGpQSTvxtha6/usOsec6ddllFnzGh65lTuYT0VvwFgEUj7" target="_blank">this BagaWork project</a> contains 3 pages. It works like this:',G,N,Xt=`That is, the first page contains buttons that leads to the other two pages, but the other two pages contains no buttons, so they are dead ends. That's no good! Your task is to add "Back" buttons to these two pages, so they work as shown below.`,M,ht,W,$t="That's it!",dt,A,qt="Good work, now you know how to navigate between the pages in your app! 🥳 But remember that the <code>Button</code> component is just one way to take the user to another page, there exists more ways you can learn later on.",gt,F,Ut='When you are ready, continue with <a href="../sizing-gui-components/">Tutorial 6. Sizing GUI Components</a>.',xt;return b=new bt({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:150,y:200}]}}}),G=new bt({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:750,y:200}]}}}),M=new bt({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:750,y:200}]}}}),{c(){h=s("h1"),h.textContent=Et,q=l(),v=s("p"),v.textContent=jt,U=l(),w=s("h2"),w.textContent=Bt,K=l(),P=s("p"),P.textContent=Rt,Y=l(),C=s("h2"),C.textContent=St,Z=l(),y=s("p"),y.innerHTML=It,tt=l(),_=s("p"),_.innerHTML=Ht,et=l(),r=s("div"),T=s("div"),T.textContent=Gt,L=s("p"),L.innerHTML=Mt,wt(b.$$.fragment),d=s("a"),d.textContent=Wt,z=s("pre"),nt=new mt(!1),at=l(),E=s("p"),E.innerHTML=At,st=l(),j=s("ol"),j.innerHTML=Ft,pt=l(),B=s("p"),B.innerHTML=Lt,ot=l(),g=s("div"),R=s("div"),R.textContent=zt,Q=s("p"),Q.textContent=Qt,f=s("div"),x=s("a"),x.textContent=Dt,D=s("pre"),lt=new mt(!1),O=s("pre"),ct=new mt(!1),V=s("pre"),it=new mt(!1),ut=l(),S=s("h2"),S.textContent=Ot,rt=l(),I=s("p"),I.textContent=Vt,kt=l(),k=s("div"),H=s("div"),H.textContent=Jt,J=s("p"),J.innerHTML=Nt,wt(G.$$.fragment),N=s("p"),N.textContent=Xt,wt(M.$$.fragment),ht=l(),W=s("h2"),W.textContent=$t,dt=l(),A=s("p"),A.innerHTML=qt,gt=l(),F=s("p"),F.innerHTML=Ut,this.h()},l(t){h=p(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-1jha0bp"&&(h.textContent=Et),q=c(t),v=p(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-18gn59o"&&(v.textContent=jt),U=c(t),w=p(t,"H2",{"data-svelte-h":!0}),o(w)!=="svelte-na685i"&&(w.textContent=Bt),K=c(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1e8tlne"&&(P.textContent=Rt),Y=c(t),C=p(t,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-1w3bhhb"&&(C.textContent=St),Z=c(t),y=p(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1t457lj"&&(y.innerHTML=It),tt=c(t),_=p(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1vbxxkt"&&(_.innerHTML=Ht),et=c(t),r=p(t,"DIV",{class:!0});var n=m(r);T=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(T)!=="svelte-1llzxwj"&&(T.textContent=Gt),L=p(n,"P",{"data-svelte-h":!0}),o(L)!=="svelte-fsjsq"&&(L.innerHTML=Mt),Pt(b.$$.fragment,n),d=p(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(d)!=="svelte-6ejvyl"&&(d.textContent=Wt),z=p(n,"PRE",{class:!0});var Kt=m(z);nt=vt(Kt,!1),Kt.forEach(e),n.forEach(e),at=c(t),E=p(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-q7pfhv"&&(E.innerHTML=At),st=c(t),j=p(t,"OL",{"data-svelte-h":!0}),o(j)!=="svelte-3bnvh5"&&(j.innerHTML=Ft),pt=c(t),B=p(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-10qsigu"&&(B.innerHTML=Lt),ot=c(t),g=p(t,"DIV",{class:!0});var ft=m(g);R=p(ft,"DIV",{class:!0,"data-svelte-h":!0}),o(R)!=="svelte-1llzxwj"&&(R.textContent=zt),Q=p(ft,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1qpnzzv"&&(Q.textContent=Qt),f=p(ft,"DIV",{});var $=m(f);x=p($,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-e721v5"&&(x.textContent=Dt),D=p($,"PRE",{class:!0});var Yt=m(D);lt=vt(Yt,!1),Yt.forEach(e),O=p($,"PRE",{class:!0});var Zt=m(O);ct=vt(Zt,!1),Zt.forEach(e),V=p($,"PRE",{class:!0});var te=m(V);it=vt(te,!1),te.forEach(e),$.forEach(e),ft.forEach(e),ut=c(t),S=p(t,"H2",{"data-svelte-h":!0}),o(S)!=="svelte-4opca7"&&(S.textContent=Ot),rt=c(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-fy3v6t"&&(I.textContent=Vt),kt=c(t),k=p(t,"DIV",{class:!0});var X=m(k);H=p(X,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-1kqyz2o"&&(H.textContent=Jt),J=p(X,"P",{"data-svelte-h":!0}),o(J)!=="svelte-njjpse"&&(J.innerHTML=Nt),Pt(G.$$.fragment,X),N=p(X,"P",{"data-svelte-h":!0}),o(N)!=="svelte-veg0ol"&&(N.textContent=Xt),Pt(M.$$.fragment,X),X.forEach(e),ht=c(t),W=p(t,"H2",{"data-svelte-h":!0}),o(W)!=="svelte-p2uhy5"&&(W.textContent=$t),dt=c(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1jayx97"&&(A.innerHTML=qt),gt=c(t),F=p(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-12xoa0a"&&(F.innerHTML=Ut),this.h()},h(){i(T,"class","remark-container__title"),i(d,"target","_blank"),i(d,"href","/editor#eNpdj81qwzAQhF9F2ZMNwjiFXHRrL8WHQkl8qwIW1rYWOLKQ1sTG6N2j1K37A2LRzM7q0y6gnAOxQDtoBAFtr0JgL/OjcwwnQqsDS/dFWkmtR0V4IuXpVX1gln+6kjzS6C3bGnc3ShshcnBJBxBvCxgNYs/hfeg1+moVf6Db/Aa+i1/k59H8Zx6HayjazvTao83WlqQ6PVBQKllTdyawdKjDH0DR5Pw7+zQSDfYrXTF1YYqt3q7J11C+LcRhSv8+lBxmEA9lGc/xBotkcb0="),i(d,"title","Open in our Online Editor"),nt.a=null,i(z,"class","language-js"),i(r,"class","remark-container tip"),i(R,"class","remark-container__title"),i(x,"target","_blank"),i(x,"href","/editor#eNqtkkFrgzAUx7+KvJNCkFnbjnrbDis7DMbaw8YcVDSugkskebIWyXdfNDXqKJ56SHh5L++f/y9JA0lVQdRAyjMKEaRlIqXzcn6oKoeekLJMOjpuYhZjO1JBE6Q7TAS+Jt/U9UwFBcVaMOepELIrtFllmhQoAjkvMyokRJ8NFBlEAQGW/LQndlpAgOe5pPgO0V0ff+hYfRGotN6k04g9m8XEuD3fmm8XzeB8Wxf/Pb/xX+mnx6LMBGWuKcW41wI+6sk9WNGDR/ryY43I2WXDljvInR1NOcvMPr/17A4Zz/R5l2tRmvek3S9DAmeIwmCjiKFbzNENerfEG/ue49sfCzHBs4nrdMtg3dEF96ueLpyjs3K3hBuZnmMbPbFhs4nrbOvNyrzcQv9Q9Qeh2iXJ"),i(x,"title","Open in our Online Editor"),lt.a=null,i(D,"class","language-js"),ct.a=null,i(O,"class","language-js"),it.a=null,i(V,"class","language-js"),i(g,"class","remark-container tip"),i(H,"class","remark-container__title"),i(k,"class","remark-container exercise")},m(t,n){a(t,h,n),a(t,q,n),a(t,v,n),a(t,U,n),a(t,w,n),a(t,K,n),a(t,P,n),a(t,Y,n),a(t,C,n),a(t,Z,n),a(t,y,n),a(t,tt,n),a(t,_,n),a(t,et,n),a(t,r,n),u(r,T),u(r,L),Ct(b,r,null),u(r,d),u(r,z),nt.m(ne,z),a(t,at,n),a(t,E,n),a(t,st,n),a(t,j,n),a(t,pt,n),a(t,B,n),a(t,ot,n),a(t,g,n),u(g,R),u(g,Q),u(g,f),u(f,x),u(f,D),lt.m(ae,D),u(f,O),ct.m(se,O),u(f,V),it.m(pe,V),a(t,ut,n),a(t,S,n),a(t,rt,n),a(t,I,n),a(t,kt,n),a(t,k,n),u(k,H),u(k,J),Ct(G,k,null),u(k,N),Ct(M,k,null),a(t,ht,n),a(t,W,n),a(t,dt,n),a(t,A,n),a(t,gt,n),a(t,F,n),xt=!0},p:le,i(t){xt||(yt(b.$$.fragment,t),yt(G.$$.fragment,t),yt(M.$$.fragment,t),xt=!0)},o(t){_t(b.$$.fragment,t),_t(G.$$.fragment,t),_t(M.$$.fragment,t),xt=!1},d(t){t&&(e(h),e(q),e(v),e(U),e(w),e(K),e(P),e(Y),e(C),e(Z),e(y),e(tt),e(_),e(et),e(r),e(at),e(E),e(st),e(j),e(pt),e(B),e(ot),e(g),e(ut),e(S),e(rt),e(I),e(kt),e(k),e(ht),e(W),e(dt),e(A),e(gt),e(F)),Tt(b),Tt(G),Tt(M)}}}class de extends ce{constructor(h){super(),ie(this,h,null,ue,oe,{})}}export{de as component};
