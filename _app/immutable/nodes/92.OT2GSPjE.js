import{s as bn,n as _n}from"../chunks/scheduler.B0TnBjPs.js";import{S as Cn,i as Pn,e as a,s as c,H as nt,c as Lt,a as s,g as p,b as i,d as m,n as et,h as n,f as St,o as l,j as o,p as u,m as Bt,t as Et,k as Gt,l as jt}from"../chunks/index.BXVnRmkj.js";import{V as At}from"../chunks/ViewApp.qg7AIhJt.js";function Mn(mn){let f,zt="7. <code>onBefore()</code>",st,x,It="This tutorial will teach you the methods <code>App.onBefore()</code> and <code>Page.onBefore()</code>.",ot,y,Rt="<code>App.onBefore()</code>",pt,w,Vt="Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your <code>App</code> class that is named <code>onBefore()</code>.",lt,b,Xt="For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:",ct,_,it,fn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">8</span>
	
<span class="token punctuation">&#125;</span></code>`,ut,C,Yt="But, this is not a good way to do it, because if you want to change <code>X</code> or <code>Y</code> to another number in the future, then you must also change <code>SUM</code> to another number. It would be better if <code>SUM</code> could be computed automatically, so one would just need to change <code>X</code> or <code>Y</code>.",rt,h,P,$t="What about using the a variable?",$,Ot="You might think one can use the special <code>a</code> variable to achieve this, like this:",O,dt,gn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	
<span class="token punctuation">&#125;</span></code>`,D,Dt="And that is very good thinking of you, but it does unfortunately not work; in your <code>App</code> class, the special <code>a</code> variable can only be used inside methods, and it can&#39;t be used when your app constants/variables are initialized.",kt,M,Ut="So, the proper solution to this problem is to use the <code>onBefore()</code> method in your <code>App</code> class. When the special <code>a</code> variable is created, it will contain all your app constants/variables/methods, and then your <code>App.onBefore()</code> method will be called (if you have one).",ht,r,H,qt="Example",U,Nt="Example of an app that uses <code>App.onBefore()</code> to correctly initialize a constant.",T,g,Kt="Open in Online Editor",q,mt,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,N,ft,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">SUM</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,gt,L,Wt="<code>Page.onBefore()</code>",vt,S,Jt="The special method <code>onBefore()</code> in your <code>Page</code> classes works very similar to <code>App.onBefore()</code>: <code>Page.onBefore()</code> will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.",xt,d,B,Zt="Example",K,Ft="Example of an app that uses <code>Page.onBefore()</code> to update how many times the user has visited that page.",E,v,Qt="Open in Online Editor",W,yt,yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfVisits <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>numberOfVisits <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have visited this page </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfVisits<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to Page2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Page2<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,J,wt,wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,bt,G,tn="Exercises",_t,j,nn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ct,k,A,en="Exercise 1",Z,an='<a href="/editor#eNq9kttKw0AQhl9lnRtbWEobLZTclCiiRTxgC1psoUsyaYPJbtidYEvIu5s0NjahVW/0YsNM5p/Tt5uCiGOwU3CVh2CDGwpj2N3GiWOGa0LpGZbb6UzOqDiuRkE4JqHpUSyx1S4jpJESLVkVKP5mZVIGGQdfhR5qA/ZrCoEHdo+DFFHRcZsCHJTvG6QXsLs7e5rb2ZxDnNerZZbFRqVTG7zqXw1fOI3pr5OgOfeTejcddxWEnkbZKkMzGsfCRb7zJnnJDuWf1uIGw1BxJgMXGSkWIRLbqORk0T6oDr6kBrFQMrEUgdzX13tdJERKfuY/3Fa6do0rhzXY590zDhuwrYG1gzXBKA7zRWvQapwc8zbyHS8J/wGWo8uVt5fGaCUk6w2GR1e/VGESyQMNmsIGpXu1V/IH7RTNN+LDsDNeorQaKK8koXaW+Pcgn1eCTk3BUufvB4e/ez297p6uHukfi1hHc6z+ka4NWPPsA0PKkeM=" target="_blank">This BagaWork project</a> contains a page that should display the message <code>Hello, nice to meet you!</code> the first time the user comes to the page, and all times after that, it should display the message <code>Hi, nice to see you again!</code>. Currently, it always displays both of the messages. Change the code so it works as it should, as shown below.',z,F,sn="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",Q,on="<summary>Hint</summary><p>Use a counter in a page variable to keep track of how many times the user has seen the page. Let it start on <code>0</code>, and increment it by <code>1</code> each time <code>Page.onBefore()</code> runs. Then conditionally show the texts depending on if it has the value <code>1</code> or not.</p>",Pt,I,pn="That's it!",Mt,R,ln="Wow, wow, wow... Now you know about <code>onBefore()</code> too! 🥳 Excellent work, soon you&#39;ll be fully experienced programmer. Just 999 more things to learn before that 😉",Ht,V,cn='Now you are done learning everything the Programming part of the tutorials were intended to teach you, so you should have some very fundamental understanding of programming now. To double check that you have learned everything you were meant to learn, try to complete the exercises in <a href="../exercises/">Programming 8. Exercises</a>.',Tt;return T=new At({props:{project:{app:{code:`class MyApp extends App{
	
	X = 5
	Y = 3
	SUM = 0 // Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().
	
	onBefore(){
		a.SUM = a.X + a.Y
	}
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`\${a.X} + \${a.Y} = \${a.SUM}\`)
	}
	
}`,x:150,y:200}]}}}),E=new At({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	numberOfVisits = 0
	
	onBefore(){
		p.numberOfVisits += 1
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`You have visited this page \${p.numberOfVisits} times.\`),
			Button.text(\`Go to Page2\`).page(Page2),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class Page2 extends Page{
	
	createGui(){
		return Button.text(\`Go back to StartPage\`).page(StartPage)
	}
	
}`,x:450,y:200}]}}}),z=new At({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hello, nice to meet you!\`).keepIf(p.counter == 1),
			Text.text(\`Hi, nice to see you again!\`).keepIf(1 < p.counter),
			Space,
			Button.text(\`OK\`),
		)
	}
	
}`,x:150,y:200}]}}}),{c(){f=a("h1"),f.innerHTML=zt,st=c(),x=a("p"),x.innerHTML=It,ot=c(),y=a("h2"),y.innerHTML=Rt,pt=c(),w=a("p"),w.innerHTML=Vt,lt=c(),b=a("p"),b.textContent=Xt,ct=c(),_=a("pre"),it=new nt(!1),ut=c(),C=a("p"),C.innerHTML=Yt,rt=c(),h=a("div"),P=a("div"),P.textContent=$t,$=a("p"),$.innerHTML=Ot,O=a("pre"),dt=new nt(!1),D=a("p"),D.innerHTML=Dt,kt=c(),M=a("p"),M.innerHTML=Ut,ht=c(),r=a("div"),H=a("div"),H.textContent=qt,U=a("p"),U.innerHTML=Nt,Lt(T.$$.fragment),g=a("a"),g.textContent=Kt,q=a("pre"),mt=new nt(!1),N=a("pre"),ft=new nt(!1),gt=c(),L=a("h2"),L.innerHTML=Wt,vt=c(),S=a("p"),S.innerHTML=Jt,xt=c(),d=a("div"),B=a("div"),B.textContent=Zt,K=a("p"),K.innerHTML=Ft,Lt(E.$$.fragment),v=a("a"),v.textContent=Qt,W=a("pre"),yt=new nt(!1),J=a("pre"),wt=new nt(!1),bt=c(),G=a("h2"),G.textContent=tn,_t=c(),j=a("p"),j.textContent=nn,Ct=c(),k=a("div"),A=a("div"),A.textContent=en,Z=a("p"),Z.innerHTML=an,Lt(z.$$.fragment),F=a("p"),F.textContent=sn,Q=a("details"),Q.innerHTML=on,Pt=c(),I=a("h2"),I.textContent=pn,Mt=c(),R=a("p"),R.innerHTML=ln,Ht=c(),V=a("p"),V.innerHTML=cn,this.h()},l(t){f=s(t,"H1",{"data-svelte-h":!0}),p(f)!=="svelte-3hzjz3"&&(f.innerHTML=zt),st=i(t),x=s(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1twrsti"&&(x.innerHTML=It),ot=i(t),y=s(t,"H2",{"data-svelte-h":!0}),p(y)!=="svelte-18d6yy3"&&(y.innerHTML=Rt),pt=i(t),w=s(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-1xrzxuy"&&(w.innerHTML=Vt),lt=i(t),b=s(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-18bh8w"&&(b.textContent=Xt),ct=i(t),_=s(t,"PRE",{class:!0});var e=m(_);it=et(e,!1),e.forEach(n),ut=i(t),C=s(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-s9tszs"&&(C.innerHTML=Yt),rt=i(t),h=s(t,"DIV",{class:!0});var at=m(h);P=s(at,"DIV",{class:!0,"data-svelte-h":!0}),p(P)!=="svelte-ent68x"&&(P.textContent=$t),$=s(at,"P",{"data-svelte-h":!0}),p($)!=="svelte-44nhw"&&($.innerHTML=Ot),O=s(at,"PRE",{class:!0});var un=m(O);dt=et(un,!1),un.forEach(n),D=s(at,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1w6hted"&&(D.innerHTML=Dt),at.forEach(n),kt=i(t),M=s(t,"P",{"data-svelte-h":!0}),p(M)!=="svelte-1yqi0ws"&&(M.innerHTML=Ut),ht=i(t),r=s(t,"DIV",{class:!0});var X=m(r);H=s(X,"DIV",{class:!0,"data-svelte-h":!0}),p(H)!=="svelte-1llzxwj"&&(H.textContent=qt),U=s(X,"P",{"data-svelte-h":!0}),p(U)!=="svelte-1pln3ni"&&(U.innerHTML=Nt),St(T.$$.fragment,X),g=s(X,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-1dx5zjf"&&(g.textContent=Kt),q=s(X,"PRE",{class:!0});var rn=m(q);mt=et(rn,!1),rn.forEach(n),N=s(X,"PRE",{class:!0});var dn=m(N);ft=et(dn,!1),dn.forEach(n),X.forEach(n),gt=i(t),L=s(t,"H2",{"data-svelte-h":!0}),p(L)!=="svelte-tgzb3"&&(L.innerHTML=Wt),vt=i(t),S=s(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1f40f19"&&(S.innerHTML=Jt),xt=i(t),d=s(t,"DIV",{class:!0});var Y=m(d);B=s(Y,"DIV",{class:!0,"data-svelte-h":!0}),p(B)!=="svelte-1llzxwj"&&(B.textContent=Zt),K=s(Y,"P",{"data-svelte-h":!0}),p(K)!=="svelte-nzt7aq"&&(K.innerHTML=Ft),St(E.$$.fragment,Y),v=s(Y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-1qaxxa4"&&(v.textContent=Qt),W=s(Y,"PRE",{class:!0});var kn=m(W);yt=et(kn,!1),kn.forEach(n),J=s(Y,"PRE",{class:!0});var hn=m(J);wt=et(hn,!1),hn.forEach(n),Y.forEach(n),bt=i(t),G=s(t,"H2",{"data-svelte-h":!0}),p(G)!=="svelte-4opca7"&&(G.textContent=tn),_t=i(t),j=s(t,"P",{"data-svelte-h":!0}),p(j)!=="svelte-fy3v6t"&&(j.textContent=nn),Ct=i(t),k=s(t,"DIV",{class:!0});var tt=m(k);A=s(tt,"DIV",{class:!0,"data-svelte-h":!0}),p(A)!=="svelte-1kqyz2o"&&(A.textContent=en),Z=s(tt,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-k4r53h"&&(Z.innerHTML=an),St(z.$$.fragment,tt),F=s(tt,"P",{"data-svelte-h":!0}),p(F)!=="svelte-1p13pmi"&&(F.textContent=sn),Q=s(tt,"DETAILS",{"data-svelte-h":!0}),p(Q)!=="svelte-1olba28"&&(Q.innerHTML=on),tt.forEach(n),Pt=i(t),I=s(t,"H2",{"data-svelte-h":!0}),p(I)!=="svelte-p2uhy5"&&(I.textContent=pn),Mt=i(t),R=s(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-159thmx"&&(R.innerHTML=ln),Ht=i(t),V=s(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-latfks"&&(V.innerHTML=cn),this.h()},h(){it.a=null,l(_,"class","language-js"),l(P,"class","remark-container__title"),dt.a=null,l(O,"class","language-js"),l(h,"class","remark-container warning"),l(H,"class","remark-container__title"),l(g,"target","_blank"),l(g,"href","/editor#eNpdkFFrAjEMx79KCIMpO87bhi8He9hexh6EgRtTpmDtRS2c7dHGqRz97ks51LmHhn/+TdJf2qJqGixb1K4iLFHXKgQYHZ+bBujAZKsAotuZnXE6E3iCYRJTEY9JjD9HIgsYDOBrY/QGjDVsVA12t12Shz3B2vwQsINUWjkK9pZhq5jJZxCM1QSGYW/qGpZdsRUjgHbek+bTIGPB2RdaOU+9fn4CulgdI6u8I1L5BO4kTpMdT+Xak2Ias/L8rtaXLk+88xbOF3+aIsYMG/EClt8tmgrL+wxXrq7Iv3XJ1eedZ5w/MCXtNcHrzvx/+0PKc5bQW9y0Qh8FP4lplG2SkL3ion9FluFBAIZFhkcsH4oizuMvsLCgZQ=="),l(g,"title","Open in our Online Editor"),mt.a=null,l(q,"class","language-js"),ft.a=null,l(N,"class","language-js"),l(r,"class","remark-container tip"),l(B,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNp9kd9LwzAQx/+V4/ChxVK6oS+FPbiX4YMoKoJYYVl7dcEtKcl1bpT87/bHWmeZPiTk7pLvfe6bCkVRYFxhqjPCGNONsBbuDjdFAbRnUpmF+lwlKuHUkGB6YmH4QXyQ57fZhA1xaRQMhSbrEuXQBVjUscX4rUKZYTwJMNebjMxtF/xqOrwfGjdB16NeqtyuyNznL9JKtjCDqK9oNadcmx+gIhxdvpzB5EjVPelGWZRyPMSj/rJhupabzJDyulLCzzVRyPXmLV91CWuxI9g10pQBr6WFZky4qMaNHbDckg2XftBLzUuugY9iCw2s2zGnSz9sRLw26K/7J9AOA9zXrl1HAR4wnkaRCzpXp/+52uqdd/RPE8aMK5F+NqDDD/WwQ+IM6NUJ6Lv7Br6B2hs="),l(v,"title","Open in our Online Editor"),yt.a=null,l(W,"class","language-js"),wt.a=null,l(J,"class","language-js"),l(d,"class","remark-container tip"),l(A,"class","remark-container__title"),l(k,"class","remark-container exercise")},m(t,e){o(t,f,e),o(t,st,e),o(t,x,e),o(t,ot,e),o(t,y,e),o(t,pt,e),o(t,w,e),o(t,lt,e),o(t,b,e),o(t,ct,e),o(t,_,e),it.m(fn,_),o(t,ut,e),o(t,C,e),o(t,rt,e),o(t,h,e),u(h,P),u(h,$),u(h,O),dt.m(gn,O),u(h,D),o(t,kt,e),o(t,M,e),o(t,ht,e),o(t,r,e),u(r,H),u(r,U),Bt(T,r,null),u(r,g),u(r,q),mt.m(vn,q),u(r,N),ft.m(xn,N),o(t,gt,e),o(t,L,e),o(t,vt,e),o(t,S,e),o(t,xt,e),o(t,d,e),u(d,B),u(d,K),Bt(E,d,null),u(d,v),u(d,W),yt.m(yn,W),u(d,J),wt.m(wn,J),o(t,bt,e),o(t,G,e),o(t,_t,e),o(t,j,e),o(t,Ct,e),o(t,k,e),u(k,A),u(k,Z),Bt(z,k,null),u(k,F),u(k,Q),o(t,Pt,e),o(t,I,e),o(t,Mt,e),o(t,R,e),o(t,Ht,e),o(t,V,e),Tt=!0},p:_n,i(t){Tt||(Et(T.$$.fragment,t),Et(E.$$.fragment,t),Et(z.$$.fragment,t),Tt=!0)},o(t){Gt(T.$$.fragment,t),Gt(E.$$.fragment,t),Gt(z.$$.fragment,t),Tt=!1},d(t){t&&(n(f),n(st),n(x),n(ot),n(y),n(pt),n(w),n(lt),n(b),n(ct),n(_),n(ut),n(C),n(rt),n(h),n(kt),n(M),n(ht),n(r),n(gt),n(L),n(vt),n(S),n(xt),n(d),n(bt),n(G),n(_t),n(j),n(Ct),n(k),n(Pt),n(I),n(Mt),n(R),n(Ht),n(V)),jt(T),jt(E),jt(z)}}}class Sn extends Cn{constructor(f){super(),Pn(this,f,null,Mn,bn,{})}}export{Sn as component};
