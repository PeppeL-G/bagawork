import{s as un,n as ie}from"../chunks/scheduler.B0TnBjPs.js";import{S as mn,i as hn,e as s,s as i,H as ht,a as l,g as o,b as p,d as u,n as ft,h as e,o as r,j as a,p as c}from"../chunks/index.BXVnRmkj.js";function fn(an){let h,pe="Glossary",vt,w,ce="On this page you will find the meaning of various tech words that are good to know for all developers who use BagaWork.",kt,C,re="BagaLand",xt,_,ue='The name of the website <a href="https://bagaland.com" rel="nofollow" target="_blank">bagaland.com</a>, at which you can create an account and store your BagaWork apps online, and make them accessible to others, as well as installable on most smartphones. Apps here will also remember their states between runs, so if the user closes the app and then opens it again, it will resume running just as the user left it!',wt,y,me="BagaWork",Ct,b,he='A framework programmers can use to implement small and simple apps in JavaScript very easily. On its website, <a href="https://bagawork.com" rel="nofollow" target="_blank">bagawork.com</a> (this website), you will find:',_t,g,fe='<li>The documentation for how the BagaWork framework works</li> <li>Tutorials that teaches you how to build apps in the BagaWork framework</li> <li>An <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a> you can use to implement BagaWork apps</li> <li>Etc.</li>',yt,H,de="Class",bt,T,ve='In programming, a class is a general description of how something should work. For example, in BagaWork, the class <a href="/documentation/page/" title="Open the documentation for Page.">Page</a> is a general description of how a page in BagaWork should work, with general functionality such as:',gt,L,ke="<li>The ability to run some code before the page is shown on the screen (<code>onBefore()</code>)</li> <li>The ability to display a GUI (<code>createGui()</code>)</li> <li>The ability to run some code after the page is no longer shown on the screen (<code>onAfter()</code>)</li> <li>Etc.</li>",Ht,M,xe='For a class to be useful, the one using it must provide it with more specific information it needs to be able to function in a specific way, such as providing the <a href="/documentation/page/" title="Open the documentation for Page.">Page</a> class with specific implementations of <code>onBefore()</code>, <code>createGui()</code>, <code>onAfter()</code>, etc.',Tt,f,P,we="Example",tt,Ce="Example of how to create a class named <code>Ball</code> in JavaScript.",et,Lt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Ball</span><span class="token punctuation">&#123;</span>
	
<span class="token punctuation">&#125;</span></code>`,Mt,B,_e="Framework",Pt,E,ye="If you want to write <em>all the code</em> needed to display an app on the screen, you would probably need to spend many years on that. That much code is needed for such an app!",Bt,j,be="So, instead of you writing all the code from scratch like that when creating an app, some friendly developers have implemented frameworks, which makes it much easier for the rest of us to implement apps. A framework contains most of the code needed to display an app on the screen, but it doesn't contain any specific information about the app that should be displayed, only the general functionality to display an app.",Et,I,ge='For example, the BagaWork framework contains the general <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> component for displaying a button on the screen, but it doesn&#39;t contain any specific information about the button, such as:',jt,W,He="<li>Which text the button should display</li> <li>What should happen when the button is clicked</li> <li>Etc.</li>",It,S,Te='So, when we implement an app in BagaWork, we use the general <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> component from the framework to display a button on the screen, and we provide it with the specific information we want it to have by calling different configuration methods on it (<code>text()</code>, <code>onClick()</code>, etc.).',Wt,A,Le="Function",St,D,Me='A function is like a method (a value that contains code that is executed when the function is called). Functions are really common in most programming languages, but in BagaWork one typically use methods ("functions in classes") instead, so for BagaWork apps, there is no need to use functions, but stick to using methods.',At,J,Pe="Implementation",Dt,O,Be="Implementation refers to the code in a class or a method.",Jt,d,V,Ee="Example",nt,je="Example of where the code for the implementation of a class is written.",at,Ot,ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token comment">// All the code you write between</span>
	<span class="token comment">// the two curly brackets is the</span>
	<span class="token comment">// implementation of the MyPage class.</span>
<span class="token punctuation">&#125;</span></code>`,Vt,v,z,Ie="Example",st,We="Example of where the code for the implementation of a method is written.",lt,zt,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token comment">// All the code you write between the</span>
		<span class="token comment">// two closest curly brackets is the</span>
		<span class="token comment">// implementation of the onBefore() method.</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,qt,q,Se="Instance",Ft,F,Ae="In programming, a class is a general description of how something should work. To use a class, you create a new instance of it. One and the same class can have many different instances, and each instance can store different information.",Rt,R,De="In JavaScript, one usually writes <code>new TheClassName()</code> to create a new instance of a class, but BagaWork has simplified instantiation of classes from the framework (such as GUI component classes), so for these classes you just write the name of the class to create a new instance of it.",Ut,m,U,Je="Example",ot,Oe='Example showing how to create two different <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> instances, each with their own specific information:',it,Ve="<li>The first button has the information text=<code>Click me!</code></li> <li>The second button instance has the information text=<code>No, click me!</code></li> ",pt,Gt,pn=`<code class="language-js"><span class="token keyword">const</span> button1 <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
<span class="token keyword">const</span> button2 <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No, click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>`,Nt,G,ze="JavaScript",Kt,N,qe='An app has to be implemented in a programming language. JavaScript (<abbr title="JavaScript">JS</abbr>) is such a programming language. The BagaWork framework is implemented in JS, so an app using the BagaWork framework must also be implemented in JS.',Qt,K,Fe="JS",Xt,Q,Re="Acronym for JavaScript.",Yt,X,Ue="Method",Zt,Y,Ge="A method is a function in a class that you can call after you have obtained an instance of a class. When you call the method, the code in it will start to run.",$t,k,Z,Ne="Example",ct,Ke="Example of how to create a method named <code>kick()</code> in a class named <code>Ball</code> in JavaScript.",rt,te,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Ball</span><span class="token punctuation">&#123;</span>
	<span class="token function">kick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ee,x,$,Qe="Example",ut,Xe='Example of how to create a new instance of the <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> class in BagaWork, and then call the method <code>text()</code> on it.',mt,ne,rn='<code class="language-js"><span class="token keyword">const</span> myButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>';return{c(){h=s("h1"),h.textContent=pe,vt=i(),w=s("p"),w.textContent=ce,kt=i(),C=s("h2"),C.textContent=re,xt=i(),_=s("p"),_.innerHTML=ue,wt=i(),y=s("h2"),y.textContent=me,Ct=i(),b=s("p"),b.innerHTML=he,_t=i(),g=s("ul"),g.innerHTML=fe,yt=i(),H=s("h2"),H.textContent=de,bt=i(),T=s("p"),T.innerHTML=ve,gt=i(),L=s("ul"),L.innerHTML=ke,Ht=i(),M=s("p"),M.innerHTML=xe,Tt=i(),f=s("div"),P=s("div"),P.textContent=we,tt=s("p"),tt.innerHTML=Ce,et=s("pre"),Lt=new ht(!1),Mt=i(),B=s("h2"),B.textContent=_e,Pt=i(),E=s("p"),E.innerHTML=ye,Bt=i(),j=s("p"),j.textContent=be,Et=i(),I=s("p"),I.innerHTML=ge,jt=i(),W=s("ul"),W.innerHTML=He,It=i(),S=s("p"),S.innerHTML=Te,Wt=i(),A=s("h2"),A.textContent=Le,St=i(),D=s("p"),D.textContent=Me,At=i(),J=s("h2"),J.textContent=Pe,Dt=i(),O=s("p"),O.textContent=Be,Jt=i(),d=s("div"),V=s("div"),V.textContent=Ee,nt=s("p"),nt.textContent=je,at=s("pre"),Ot=new ht(!1),Vt=i(),v=s("div"),z=s("div"),z.textContent=Ie,st=s("p"),st.textContent=We,lt=s("pre"),zt=new ht(!1),qt=i(),q=s("h2"),q.textContent=Se,Ft=i(),F=s("p"),F.textContent=Ae,Rt=i(),R=s("p"),R.innerHTML=De,Ut=i(),m=s("div"),U=s("div"),U.textContent=Je,ot=s("p"),ot.innerHTML=Oe,it=s("ul"),it.innerHTML=Ve,pt=s("pre"),Gt=new ht(!1),Nt=i(),G=s("h2"),G.textContent=ze,Kt=i(),N=s("p"),N.innerHTML=qe,Qt=i(),K=s("h2"),K.textContent=Fe,Xt=i(),Q=s("p"),Q.textContent=Re,Yt=i(),X=s("h2"),X.textContent=Ue,Zt=i(),Y=s("p"),Y.textContent=Ge,$t=i(),k=s("div"),Z=s("div"),Z.textContent=Ne,ct=s("p"),ct.innerHTML=Ke,rt=s("pre"),te=new ht(!1),ee=i(),x=s("div"),$=s("div"),$.textContent=Qe,ut=s("p"),ut.innerHTML=Xe,mt=s("pre"),ne=new ht(!1),this.h()},l(t){h=l(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-18lhlr0"&&(h.textContent=pe),vt=p(t),w=l(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-4c7ilf"&&(w.textContent=ce),kt=p(t),C=l(t,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-x48ege"&&(C.textContent=re),xt=p(t),_=l(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-15zqttf"&&(_.innerHTML=ue),wt=p(t),y=l(t,"H2",{"data-svelte-h":!0}),o(y)!=="svelte-lu0cb6"&&(y.textContent=me),Ct=p(t),b=l(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-1g7z7z9"&&(b.innerHTML=he),_t=p(t),g=l(t,"UL",{"data-svelte-h":!0}),o(g)!=="svelte-soqwbk"&&(g.innerHTML=fe),yt=p(t),H=l(t,"H2",{"data-svelte-h":!0}),o(H)!=="svelte-1j0ai32"&&(H.textContent=de),bt=p(t),T=l(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-pv8iqr"&&(T.innerHTML=ve),gt=p(t),L=l(t,"UL",{"data-svelte-h":!0}),o(L)!=="svelte-1vcc1a2"&&(L.innerHTML=ke),Ht=p(t),M=l(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-13rupvw"&&(M.innerHTML=xe),Tt=p(t),f=l(t,"DIV",{class:!0});var n=u(f);P=l(n,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-1llzxwj"&&(P.textContent=we),tt=l(n,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-8d08ae"&&(tt.innerHTML=Ce),et=l(n,"PRE",{class:!0});var Ye=u(et);Lt=ft(Ye,!1),Ye.forEach(e),n.forEach(e),Mt=p(t),B=l(t,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-mtw2d2"&&(B.textContent=_e),Pt=p(t),E=l(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-1sbyeoi"&&(E.innerHTML=ye),Bt=p(t),j=l(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1xfvhsh"&&(j.textContent=be),Et=p(t),I=l(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1p232dl"&&(I.innerHTML=ge),jt=p(t),W=l(t,"UL",{"data-svelte-h":!0}),o(W)!=="svelte-89rnwa"&&(W.innerHTML=He),It=p(t),S=l(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1s255xi"&&(S.innerHTML=Te),Wt=p(t),A=l(t,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-1oxhqwy"&&(A.textContent=Le),St=p(t),D=l(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-1fudwht"&&(D.textContent=Me),At=p(t),J=l(t,"H2",{"data-svelte-h":!0}),o(J)!=="svelte-1y7y6hs"&&(J.textContent=Pe),Dt=p(t),O=l(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-nv2n9p"&&(O.textContent=Be),Jt=p(t),d=l(t,"DIV",{class:!0});var ae=u(d);V=l(ae,"DIV",{class:!0,"data-svelte-h":!0}),o(V)!=="svelte-1llzxwj"&&(V.textContent=Ee),nt=l(ae,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1m7yylf"&&(nt.textContent=je),at=l(ae,"PRE",{class:!0});var Ze=u(at);Ot=ft(Ze,!1),Ze.forEach(e),ae.forEach(e),Vt=p(t),v=l(t,"DIV",{class:!0});var se=u(v);z=l(se,"DIV",{class:!0,"data-svelte-h":!0}),o(z)!=="svelte-1llzxwj"&&(z.textContent=Ie),st=l(se,"P",{"data-svelte-h":!0}),o(st)!=="svelte-p8xpma"&&(st.textContent=We),lt=l(se,"PRE",{class:!0});var $e=u(lt);zt=ft($e,!1),$e.forEach(e),se.forEach(e),qt=p(t),q=l(t,"H2",{"data-svelte-h":!0}),o(q)!=="svelte-47hw7p"&&(q.textContent=Se),Ft=p(t),F=l(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-8wqtvq"&&(F.textContent=Ae),Rt=p(t),R=l(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1icxfn5"&&(R.innerHTML=De),Ut=p(t),m=l(t,"DIV",{class:!0});var dt=u(m);U=l(dt,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=Je),ot=l(dt,"P",{"data-svelte-h":!0}),o(ot)!=="svelte-gilf87"&&(ot.innerHTML=Oe),it=l(dt,"UL",{"data-svelte-h":!0}),o(it)!=="svelte-oji8ve"&&(it.innerHTML=Ve),pt=l(dt,"PRE",{class:!0});var tn=u(pt);Gt=ft(tn,!1),tn.forEach(e),dt.forEach(e),Nt=p(t),G=l(t,"H2",{"data-svelte-h":!0}),o(G)!=="svelte-1gyfi2p"&&(G.textContent=ze),Kt=p(t),N=l(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1uzxc4n"&&(N.innerHTML=qe),Qt=p(t),K=l(t,"H2",{"data-svelte-h":!0}),o(K)!=="svelte-7aafot"&&(K.textContent=Fe),Xt=p(t),Q=l(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-j83ek1"&&(Q.textContent=Re),Yt=p(t),X=l(t,"H2",{"data-svelte-h":!0}),o(X)!=="svelte-1deu7pn"&&(X.textContent=Ue),Zt=p(t),Y=l(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-ys6tex"&&(Y.textContent=Ge),$t=p(t),k=l(t,"DIV",{class:!0});var le=u(k);Z=l(le,"DIV",{class:!0,"data-svelte-h":!0}),o(Z)!=="svelte-1llzxwj"&&(Z.textContent=Ne),ct=l(le,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-amtrmk"&&(ct.innerHTML=Ke),rt=l(le,"PRE",{class:!0});var en=u(rt);te=ft(en,!1),en.forEach(e),le.forEach(e),ee=p(t),x=l(t,"DIV",{class:!0});var oe=u(x);$=l(oe,"DIV",{class:!0,"data-svelte-h":!0}),o($)!=="svelte-1llzxwj"&&($.textContent=Qe),ut=l(oe,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-13nreb3"&&(ut.innerHTML=Xe),mt=l(oe,"PRE",{class:!0});var nn=u(mt);ne=ft(nn,!1),nn.forEach(e),oe.forEach(e),this.h()},h(){r(P,"class","remark-container__title"),Lt.a=null,r(et,"class","language-js"),r(f,"class","remark-container tip"),r(V,"class","remark-container__title"),Ot.a=null,r(at,"class","language-js"),r(d,"class","remark-container tip"),r(z,"class","remark-container__title"),zt.a=null,r(lt,"class","language-js"),r(v,"class","remark-container tip"),r(U,"class","remark-container__title"),Gt.a=null,r(pt,"class","language-js"),r(m,"class","remark-container tip"),r(Z,"class","remark-container__title"),te.a=null,r(rt,"class","language-js"),r(k,"class","remark-container tip"),r($,"class","remark-container__title"),ne.a=null,r(mt,"class","language-js"),r(x,"class","remark-container tip")},m(t,n){a(t,h,n),a(t,vt,n),a(t,w,n),a(t,kt,n),a(t,C,n),a(t,xt,n),a(t,_,n),a(t,wt,n),a(t,y,n),a(t,Ct,n),a(t,b,n),a(t,_t,n),a(t,g,n),a(t,yt,n),a(t,H,n),a(t,bt,n),a(t,T,n),a(t,gt,n),a(t,L,n),a(t,Ht,n),a(t,M,n),a(t,Tt,n),a(t,f,n),c(f,P),c(f,tt),c(f,et),Lt.m(sn,et),a(t,Mt,n),a(t,B,n),a(t,Pt,n),a(t,E,n),a(t,Bt,n),a(t,j,n),a(t,Et,n),a(t,I,n),a(t,jt,n),a(t,W,n),a(t,It,n),a(t,S,n),a(t,Wt,n),a(t,A,n),a(t,St,n),a(t,D,n),a(t,At,n),a(t,J,n),a(t,Dt,n),a(t,O,n),a(t,Jt,n),a(t,d,n),c(d,V),c(d,nt),c(d,at),Ot.m(ln,at),a(t,Vt,n),a(t,v,n),c(v,z),c(v,st),c(v,lt),zt.m(on,lt),a(t,qt,n),a(t,q,n),a(t,Ft,n),a(t,F,n),a(t,Rt,n),a(t,R,n),a(t,Ut,n),a(t,m,n),c(m,U),c(m,ot),c(m,it),c(m,pt),Gt.m(pn,pt),a(t,Nt,n),a(t,G,n),a(t,Kt,n),a(t,N,n),a(t,Qt,n),a(t,K,n),a(t,Xt,n),a(t,Q,n),a(t,Yt,n),a(t,X,n),a(t,Zt,n),a(t,Y,n),a(t,$t,n),a(t,k,n),c(k,Z),c(k,ct),c(k,rt),te.m(cn,rt),a(t,ee,n),a(t,x,n),c(x,$),c(x,ut),c(x,mt),ne.m(rn,mt)},p:ie,i:ie,o:ie,d(t){t&&(e(h),e(vt),e(w),e(kt),e(C),e(xt),e(_),e(wt),e(y),e(Ct),e(b),e(_t),e(g),e(yt),e(H),e(bt),e(T),e(gt),e(L),e(Ht),e(M),e(Tt),e(f),e(Mt),e(B),e(Pt),e(E),e(Bt),e(j),e(Et),e(I),e(jt),e(W),e(It),e(S),e(Wt),e(A),e(St),e(D),e(At),e(J),e(Dt),e(O),e(Jt),e(d),e(Vt),e(v),e(qt),e(q),e(Ft),e(F),e(Rt),e(R),e(Ut),e(m),e(Nt),e(G),e(Kt),e(N),e(Qt),e(K),e(Xt),e(Q),e(Yt),e(X),e(Zt),e(Y),e($t),e(k),e(ee),e(x))}}}class kn extends mn{constructor(h){super(),hn(this,h,null,fn,un,{})}}export{kn as component};
