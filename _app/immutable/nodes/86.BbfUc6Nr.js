import{s as xn,n as wn}from"../chunks/scheduler.B0TnBjPs.js";import{S as yn,i as bn,e as a,s as i,H as tt,c as Ht,a as s,g as p,b as u,d as m,n as nt,h as n,f as Tt,o as l,j as o,p as c,m as Lt,t as St,k as Bt,l as Et}from"../chunks/index.CHfggXAQ.js";import{V as jt}from"../chunks/ViewApp.6tllL5xD.js";function _n(kn){let f,Gt="7. <code>onBefore()</code>",at,x,At="This tutorial will teach you the methods <code>App.onBefore()</code> and <code>Page.onBefore()</code>.",st,w,zt="<code>App.onBefore()</code>",ot,y,It="Sometimes you want to have some code that runs immediately when your application starts. That code can be placed in a special method in your <code>App</code> class that is named <code>onBefore()</code>.",pt,b,Rt="For example, let's say you need to have two number constants in your app, and you also need to have a constant that stores the sum of the previously two mentioned number constants. To achieve that, you can hardcode the sum, like this:",lt,_,ct,dn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">8</span>
	
<span class="token punctuation">&#125;</span></code>`,it,C,Vt="But, this is not a good way to do it, because if you want to change <code>X</code> or <code>Y</code> to another number in the future, then you must also change <code>SUM</code> to another number. It would be better if <code>SUM</code> could be computed automatically, so one would just need to change <code>X</code> or <code>Y</code>.",ut,h,P,Xt="What about using the a variable?",Y,Yt="You might think one can use the special <code>a</code> variable to achieve this, like this:",$,rt,hn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	
<span class="token punctuation">&#125;</span></code>`,O,$t="And that is very good thinking of you, but it does unfortuantelly not work; the special <code>a</code> variable can only be used inside methods in your <code>App</code> class, and can&#39;t be used when your app constants/variables are initialized.",kt,M,Ot="So, the proper solution to this problem is to use the <code>onBefore()</code> method in your <code>App</code> class. When the special <code>a</code> variable is created, it will contain all your app constants/variables/methods, and then your <code>App.onBefore()</code> method will be called on it (if you have one), in which you can set all constants/variables to their correct values.",dt,r,H,Dt="Example",D,Ut="Example of an app that uses <code>App.onBefore()</code> to correctly initialize a constant.",T,v,qt="Open in Online Editor",U,ht,mn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">5</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token constant">SUM</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// Which initial number we give to SUM doesn't matter, since it will be given its correct number in onBefore().</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token constant">SUM</span> <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> a<span class="token punctuation">.</span><span class="token constant">Y</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,q,mt,fn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token constant">SUM</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ft,L,Kt="<code>Page.onBefore()</code>",vt,S,Nt="The special method <code>onBefore()</code> in your <code>Page</code> classes works very similar to <code>App.onBefore()</code>: <code>Page.onBefore()</code> will be called each time the user comes to the page. It can for example be useful if you want to keep track of how many times the user has visited that page.",gt,k,B,Wt="Example",K,Jt="Example of an app that uses <code>Page.onBefore()</code> to update how many times the user has visited that page.",E,g,Zt="Open in Online Editor",N,xt,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,W,wt,gn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Page2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yt,j,Ft="Exercises",bt,G,Qt="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",_t,d,A,tn="Exercise 1",J,nn='<a href="/editor#eNq9kttKw0AQhl9lnRtbWEobLZTclCiiRTxgC1psoUsyaYPJbtidYEvIu5s0NjahVW/0YsNM5p/Tt5uCiGOwU3CVh2CDGwpj2N3GiWOGa0LpGZbb6UzOqDiuRkE4JqHpUSyx1S4jpJESLVkVKP5mZVIGGQdfhR5qA/ZrCoEHdo+DFFHRcZsCHJTvG6QXsLs7e5rb2ZxDnNerZZbFRqVTG7zqXw1fOI3pr5OgOfeTejcddxWEnkbZKkMzGsfCRb7zJnnJDuWf1uIGw1BxJgMXGSkWIRLbqORk0T6oDr6kBrFQMrEUgdzX13tdJERKfuY/3Fa6do0rhzXY590zDhuwrYG1gzXBKA7zRWvQapwc8zbyHS8J/wGWo8uVt5fGaCUk6w2GR1e/VGESyQMNmsIGpXu1V/IH7RTNN+LDsDNeorQaKK8koXaW+Pcgn1eCTk3BUufvB4e/ez297p6uHukfi1hHc6z+ka4NWPPsA0PKkeM=" target="_blank">This BagaWork project</a> contains a page that should display the message <code>Hello, nice to meet you!</code> the first time the user comes to the page, and all times after that, it should display the message <code>Hi, nice to see you again!</code>. Currently, it always displays both of the messages. Change the code so it works as it should, as shown below.',z,Z,en="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",F,an="<summary>Hint</summary><p>Use a counter in a page variable to keep track of how many times the user has seen the page. Let it start on <code>0</code>, and increment it by <code>1</code> each time <code>Page.onBefore()</code> runs. Then conditionally show the texts depending on if it has the value <code>1</code> or not.</p>",Ct,I,sn="That's it!",Pt,R,on="Wow, wow, wow... Now you know about <code>onBefore()</code> too! 🥳 Excellent work, soon you&#39;ll be fully experienced programmer. Just 999 more things to learn before that 😉",Mt;return T=new jt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:150,y:200}]}}}),E=new jt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:450,y:200}]}}}),z=new jt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){f=a("h1"),f.innerHTML=Gt,at=i(),x=a("p"),x.innerHTML=At,st=i(),w=a("h2"),w.innerHTML=zt,ot=i(),y=a("p"),y.innerHTML=It,pt=i(),b=a("p"),b.textContent=Rt,lt=i(),_=a("pre"),ct=new tt(!1),it=i(),C=a("p"),C.innerHTML=Vt,ut=i(),h=a("div"),P=a("div"),P.textContent=Xt,Y=a("p"),Y.innerHTML=Yt,$=a("pre"),rt=new tt(!1),O=a("p"),O.innerHTML=$t,kt=i(),M=a("p"),M.innerHTML=Ot,dt=i(),r=a("div"),H=a("div"),H.textContent=Dt,D=a("p"),D.innerHTML=Ut,Ht(T.$$.fragment),v=a("a"),v.textContent=qt,U=a("pre"),ht=new tt(!1),q=a("pre"),mt=new tt(!1),ft=i(),L=a("h2"),L.innerHTML=Kt,vt=i(),S=a("p"),S.innerHTML=Nt,gt=i(),k=a("div"),B=a("div"),B.textContent=Wt,K=a("p"),K.innerHTML=Jt,Ht(E.$$.fragment),g=a("a"),g.textContent=Zt,N=a("pre"),xt=new tt(!1),W=a("pre"),wt=new tt(!1),yt=i(),j=a("h2"),j.textContent=Ft,bt=i(),G=a("p"),G.textContent=Qt,_t=i(),d=a("div"),A=a("div"),A.textContent=tn,J=a("p"),J.innerHTML=nn,Ht(z.$$.fragment),Z=a("p"),Z.textContent=en,F=a("details"),F.innerHTML=an,Ct=i(),I=a("h2"),I.textContent=sn,Pt=i(),R=a("p"),R.innerHTML=on,this.h()},l(t){f=s(t,"H1",{"data-svelte-h":!0}),p(f)!=="svelte-3hzjz3"&&(f.innerHTML=Gt),at=u(t),x=s(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1twrsti"&&(x.innerHTML=At),st=u(t),w=s(t,"H2",{"data-svelte-h":!0}),p(w)!=="svelte-18d6yy3"&&(w.innerHTML=zt),ot=u(t),y=s(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-1xrzxuy"&&(y.innerHTML=It),pt=u(t),b=s(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-18bh8w"&&(b.textContent=Rt),lt=u(t),_=s(t,"PRE",{class:!0});var e=m(_);ct=nt(e,!1),e.forEach(n),it=u(t),C=s(t,"P",{"data-svelte-h":!0}),p(C)!=="svelte-s9tszs"&&(C.innerHTML=Vt),ut=u(t),h=s(t,"DIV",{class:!0});var et=m(h);P=s(et,"DIV",{class:!0,"data-svelte-h":!0}),p(P)!=="svelte-ent68x"&&(P.textContent=Xt),Y=s(et,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-44nhw"&&(Y.innerHTML=Yt),$=s(et,"PRE",{class:!0});var pn=m($);rt=nt(pn,!1),pn.forEach(n),O=s(et,"P",{"data-svelte-h":!0}),p(O)!=="svelte-2jfyds"&&(O.innerHTML=$t),et.forEach(n),kt=u(t),M=s(t,"P",{"data-svelte-h":!0}),p(M)!=="svelte-1vcmxn2"&&(M.innerHTML=Ot),dt=u(t),r=s(t,"DIV",{class:!0});var V=m(r);H=s(V,"DIV",{class:!0,"data-svelte-h":!0}),p(H)!=="svelte-1llzxwj"&&(H.textContent=Dt),D=s(V,"P",{"data-svelte-h":!0}),p(D)!=="svelte-1pln3ni"&&(D.innerHTML=Ut),Tt(T.$$.fragment,V),v=s(V,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-1dx5zjf"&&(v.textContent=qt),U=s(V,"PRE",{class:!0});var ln=m(U);ht=nt(ln,!1),ln.forEach(n),q=s(V,"PRE",{class:!0});var cn=m(q);mt=nt(cn,!1),cn.forEach(n),V.forEach(n),ft=u(t),L=s(t,"H2",{"data-svelte-h":!0}),p(L)!=="svelte-tgzb3"&&(L.innerHTML=Kt),vt=u(t),S=s(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-1f40f19"&&(S.innerHTML=Nt),gt=u(t),k=s(t,"DIV",{class:!0});var X=m(k);B=s(X,"DIV",{class:!0,"data-svelte-h":!0}),p(B)!=="svelte-1llzxwj"&&(B.textContent=Wt),K=s(X,"P",{"data-svelte-h":!0}),p(K)!=="svelte-nzt7aq"&&(K.innerHTML=Jt),Tt(E.$$.fragment,X),g=s(X,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-1qaxxa4"&&(g.textContent=Zt),N=s(X,"PRE",{class:!0});var un=m(N);xt=nt(un,!1),un.forEach(n),W=s(X,"PRE",{class:!0});var rn=m(W);wt=nt(rn,!1),rn.forEach(n),X.forEach(n),yt=u(t),j=s(t,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-4opca7"&&(j.textContent=Ft),bt=u(t),G=s(t,"P",{"data-svelte-h":!0}),p(G)!=="svelte-fy3v6t"&&(G.textContent=Qt),_t=u(t),d=s(t,"DIV",{class:!0});var Q=m(d);A=s(Q,"DIV",{class:!0,"data-svelte-h":!0}),p(A)!=="svelte-1kqyz2o"&&(A.textContent=tn),J=s(Q,"P",{"data-svelte-h":!0}),p(J)!=="svelte-k4r53h"&&(J.innerHTML=nn),Tt(z.$$.fragment,Q),Z=s(Q,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-1p13pmi"&&(Z.textContent=en),F=s(Q,"DETAILS",{"data-svelte-h":!0}),p(F)!=="svelte-1olba28"&&(F.innerHTML=an),Q.forEach(n),Ct=u(t),I=s(t,"H2",{"data-svelte-h":!0}),p(I)!=="svelte-p2uhy5"&&(I.textContent=sn),Pt=u(t),R=s(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-159thmx"&&(R.innerHTML=on),this.h()},h(){ct.a=null,l(_,"class","language-js"),l(P,"class","remark-container__title"),rt.a=null,l($,"class","language-js"),l(h,"class","remark-container warning"),l(H,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNpdkFFrAjEMx79KCIMpO87bhi8He9hexh6EgRtTpmDtRS2c7dHGqRz97ks51LmHhn/+TdJf2qJqGixb1K4iLFHXKgQYHZ+bBujAZKsAotuZnXE6E3iCYRJTEY9JjD9HIgsYDOBrY/QGjDVsVA12t12Shz3B2vwQsINUWjkK9pZhq5jJZxCM1QSGYW/qGpZdsRUjgHbek+bTIGPB2RdaOU+9fn4CulgdI6u8I1L5BO4kTpMdT+Xak2Ias/L8rtaXLk+88xbOF3+aIsYMG/EClt8tmgrL+wxXrq7Iv3XJ1eedZ5w/MCXtNcHrzvx/+0PKc5bQW9y0Qh8FP4lplG2SkL3ion9FluFBAIZFhkcsH4oizuMvsLCgZQ=="),l(v,"title","Open in our Online Editor"),ht.a=null,l(U,"class","language-js"),mt.a=null,l(q,"class","language-js"),l(r,"class","remark-container tip"),l(B,"class","remark-container__title"),l(g,"target","_blank"),l(g,"href","/editor#eNp9kd9LwzAQx/+V4/ChxVK6oS+FPbiX4YMoKoJYYVl7dcEtKcl1bpT87/bHWmeZPiTk7pLvfe6bCkVRYFxhqjPCGNONsBbuDjdFAbRnUpmF+lwlKuHUkGB6YmH4QXyQ57fZhA1xaRQMhSbrEuXQBVjUscX4rUKZYTwJMNebjMxtF/xqOrwfGjdB16NeqtyuyNznL9JKtjCDqK9oNadcmx+gIhxdvpzB5EjVPelGWZRyPMSj/rJhupabzJDyulLCzzVRyPXmLV91CWuxI9g10pQBr6WFZky4qMaNHbDckg2XftBLzUuugY9iCw2s2zGnSz9sRLw26K/7J9AOA9zXrl1HAR4wnkaRCzpXp/+52uqdd/RPE8aMK5F+NqDDD/WwQ+IM6NUJ6Lv7Br6B2hs="),l(g,"title","Open in our Online Editor"),xt.a=null,l(N,"class","language-js"),wt.a=null,l(W,"class","language-js"),l(k,"class","remark-container tip"),l(A,"class","remark-container__title"),l(d,"class","remark-container exercise")},m(t,e){o(t,f,e),o(t,at,e),o(t,x,e),o(t,st,e),o(t,w,e),o(t,ot,e),o(t,y,e),o(t,pt,e),o(t,b,e),o(t,lt,e),o(t,_,e),ct.m(dn,_),o(t,it,e),o(t,C,e),o(t,ut,e),o(t,h,e),c(h,P),c(h,Y),c(h,$),rt.m(hn,$),c(h,O),o(t,kt,e),o(t,M,e),o(t,dt,e),o(t,r,e),c(r,H),c(r,D),Lt(T,r,null),c(r,v),c(r,U),ht.m(mn,U),c(r,q),mt.m(fn,q),o(t,ft,e),o(t,L,e),o(t,vt,e),o(t,S,e),o(t,gt,e),o(t,k,e),c(k,B),c(k,K),Lt(E,k,null),c(k,g),c(k,N),xt.m(vn,N),c(k,W),wt.m(gn,W),o(t,yt,e),o(t,j,e),o(t,bt,e),o(t,G,e),o(t,_t,e),o(t,d,e),c(d,A),c(d,J),Lt(z,d,null),c(d,Z),c(d,F),o(t,Ct,e),o(t,I,e),o(t,Pt,e),o(t,R,e),Mt=!0},p:wn,i(t){Mt||(St(T.$$.fragment,t),St(E.$$.fragment,t),St(z.$$.fragment,t),Mt=!0)},o(t){Bt(T.$$.fragment,t),Bt(E.$$.fragment,t),Bt(z.$$.fragment,t),Mt=!1},d(t){t&&(n(f),n(at),n(x),n(st),n(w),n(ot),n(y),n(pt),n(b),n(lt),n(_),n(it),n(C),n(ut),n(h),n(kt),n(M),n(dt),n(r),n(ft),n(L),n(vt),n(S),n(gt),n(k),n(yt),n(j),n(bt),n(G),n(_t),n(d),n(Ct),n(I),n(Pt),n(R)),Et(T),Et(E),Et(z)}}}class Hn extends yn{constructor(f){super(),bn(this,f,null,_n,xn,{})}}export{Hn as component};
