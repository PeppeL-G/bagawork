import{s as Jn,n as Zn}from"../chunks/scheduler.B0TnBjPs.js";import{S as Kn,i as Xn,e as a,s as c,c as at,H as gt,a as p,g as o,b as i,d as r,f as pt,h as n,n as ht,o as l,j as s,p as u,m as lt,t as ot,k as ct,l as it}from"../chunks/index.BXVnRmkj.js";import{V as ut}from"../chunks/ViewApp.qg7AIhJt.js";function Yn(Dn){let h,sn="<code>Font</code>",Ht,j,an="On this page you find the documentation for the <code>Font</code> class.",yt,H,pn='<div class="remark-container__title">Using the Font class</div><p>The <code>Font</code> you create with this class can be passed to a component&#39;s configuration method <code>font()</code>. The font you pass to it will then be applied to the text in:</p><ul><li>That component, and</li> <li>That component&#39;s child components, and</li> <li>Those component&#39;s child components, etc.</li></ul>',Mt,y,ln='<div class="remark-container__title">BBCode is an alternative</div><p>You can also use <a href="/documentation/bbcode/" title="Open the documentation for bbcode.">bbcode</a> to style text. BBCode is suitable to use when you want to style parts of a text in a component, such as a specific word, or a specific sentence in a text with multiple sentences, etc.</p>',jt,L,on="Introduction",Lt,$,cn="The <code>Font</code> class represents information about how text should be formatted, such as:",$t,E,un="<li>The color of the text</li> <li>The size of the text</li> <li>The boldness of the text</li> <li>Etc.</li>",Et,M,S,rn="Example",b,St,z,kn="<code>bold()</code> - Making the text bold",bt,F,dn="Use the configuration method <code>bold()</code> to make the text bold.",zt,k,O,fn="Example",A,v,mn="Open in Online Editor",rt,Ft,Nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ot,I,xn="<code>color()</code> - Setting the text color",At,G,gn="Use the configuration method <code>color()</code> to specify which color the text should have. Pass it a string containing the name of the color in English, such as <code>`red`</code> or <code>`blue`</code>.",It,d,U,hn="Example",q,_,vn="Open in Online Editor",kt,Gt,Rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ut,D,_n="<code>italic()</code> - Making the text italic",qt,N,Cn="Use the configuration method <code>italic()</code> to make the text italic.",Dt,f,R,wn="Example",B,C,Tn="Open in Online Editor",dt,Nt,Bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">italic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Rt,Q,Pn="<code>size()</code> - Setting the text size",Bt,V,Hn='Use the configuration method <code>size()</code> to specify how tall the text should be. Pass it a number indicating the text&#39;s size. See also <a href="/documentation/units/" title="Open the documentation for Units.">Units</a>.',Qt,m,W,yn="Example",J,w,Mn="Open in Online Editor",ft,Vt,Qn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wt,Z,jn="<code>strikethrough()</code> - Making the text strikethroughed",Jt,K,Ln="Use the configuration method <code>strikethrough()</code> to make the text strikethroughed.",Zt,x,X,$n="Example",Y,T,En="Open in Online Editor",mt,Kt,Vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">strikethrough</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xt,tt,Sn="<code>underline()</code> - Making the text underlined",Yt,nt,bn="Use the configuration method <code>underline()</code> to make the text underlined.",tn,g,et,zn="Example",st,P,Fn="Open in Online Editor",xt,nn,Wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">underline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is some text!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,en;return b=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Text.font(Font.size(12).color(`red`).italic()).text(`Here is some text!`)\n	}\n}",x:150,y:200}]}}}),A=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.font(Font.bold()).text(\`Here is some text!\`)
	}
}`,x:150,y:200}]}}}),q=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Text.font(Font.color(`red`)).text(`Here is some text!`)\n	}\n}",x:150,y:200}]}}}),B=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.font(Font.italic()).text(\`Here is some text!\`)
	}
}`,x:150,y:200}]}}}),J=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.font(Font.size(8)).text(\`Here is some text!\`),
			Text.font(Font.size(sw(12))).text(\`Here is some text!\`),
		)
	}
}`,x:150,y:200}]}}}),Y=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.font(Font.strikethrough()).text(\`Here is some text!\`)
	}
}`,x:150,y:200}]}}}),st=new ut({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Text.font(Font.underline()).text(\`Here is some text!\`)
	}
}`,x:150,y:200}]}}}),{c(){h=a("h1"),h.innerHTML=sn,Ht=c(),j=a("p"),j.innerHTML=an,yt=c(),H=a("div"),H.innerHTML=pn,Mt=c(),y=a("div"),y.innerHTML=ln,jt=c(),L=a("h2"),L.textContent=on,Lt=c(),$=a("p"),$.innerHTML=cn,$t=c(),E=a("ul"),E.innerHTML=un,Et=c(),M=a("div"),S=a("div"),S.textContent=rn,at(b.$$.fragment),St=c(),z=a("h2"),z.innerHTML=kn,bt=c(),F=a("p"),F.innerHTML=dn,zt=c(),k=a("div"),O=a("div"),O.textContent=fn,at(A.$$.fragment),v=a("a"),v.textContent=mn,rt=a("pre"),Ft=new gt(!1),Ot=c(),I=a("h2"),I.innerHTML=xn,At=c(),G=a("p"),G.innerHTML=gn,It=c(),d=a("div"),U=a("div"),U.textContent=hn,at(q.$$.fragment),_=a("a"),_.textContent=vn,kt=a("pre"),Gt=new gt(!1),Ut=c(),D=a("h2"),D.innerHTML=_n,qt=c(),N=a("p"),N.innerHTML=Cn,Dt=c(),f=a("div"),R=a("div"),R.textContent=wn,at(B.$$.fragment),C=a("a"),C.textContent=Tn,dt=a("pre"),Nt=new gt(!1),Rt=c(),Q=a("h2"),Q.innerHTML=Pn,Bt=c(),V=a("p"),V.innerHTML=Hn,Qt=c(),m=a("div"),W=a("div"),W.textContent=yn,at(J.$$.fragment),w=a("a"),w.textContent=Mn,ft=a("pre"),Vt=new gt(!1),Wt=c(),Z=a("h2"),Z.innerHTML=jn,Jt=c(),K=a("p"),K.innerHTML=Ln,Zt=c(),x=a("div"),X=a("div"),X.textContent=$n,at(Y.$$.fragment),T=a("a"),T.textContent=En,mt=a("pre"),Kt=new gt(!1),Xt=c(),tt=a("h2"),tt.innerHTML=Sn,Yt=c(),nt=a("p"),nt.innerHTML=bn,tn=c(),g=a("div"),et=a("div"),et.textContent=zn,at(st.$$.fragment),P=a("a"),P.textContent=Fn,xt=a("pre"),nn=new gt(!1),this.h()},l(t){h=p(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-182l6tw"&&(h.innerHTML=sn),Ht=i(t),j=p(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-t2ubi1"&&(j.innerHTML=an),yt=i(t),H=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-3szboq"&&(H.innerHTML=pn),Mt=i(t),y=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-1scufyz"&&(y.innerHTML=ln),jt=i(t),L=p(t,"H2",{"data-svelte-h":!0}),o(L)!=="svelte-1ukekoe"&&(L.textContent=on),Lt=i(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-1iekec3"&&($.innerHTML=cn),$t=i(t),E=p(t,"UL",{"data-svelte-h":!0}),o(E)!=="svelte-83hhv8"&&(E.innerHTML=un),Et=i(t),M=p(t,"DIV",{class:!0});var e=r(M);S=p(e,"DIV",{class:!0,"data-svelte-h":!0}),o(S)!=="svelte-1llzxwj"&&(S.textContent=rn),pt(b.$$.fragment,e),e.forEach(n),St=i(t),z=p(t,"H2",{"data-svelte-h":!0}),o(z)!=="svelte-1k33ed0"&&(z.innerHTML=kn),bt=i(t),F=p(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-1l4wdww"&&(F.innerHTML=dn),zt=i(t),k=p(t,"DIV",{class:!0});var vt=r(k);O=p(vt,"DIV",{class:!0,"data-svelte-h":!0}),o(O)!=="svelte-1llzxwj"&&(O.textContent=fn),pt(A.$$.fragment,vt),v=p(vt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-rdego6"&&(v.textContent=mn),rt=p(vt,"PRE",{class:!0});var On=r(rt);Ft=ht(On,!1),On.forEach(n),vt.forEach(n),Ot=i(t),I=p(t,"H2",{"data-svelte-h":!0}),o(I)!=="svelte-8edynx"&&(I.innerHTML=xn),At=i(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-iyekps"&&(G.innerHTML=gn),It=i(t),d=p(t,"DIV",{class:!0});var _t=r(d);U=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=hn),pt(q.$$.fragment,_t),_=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(_)!=="svelte-89kjra"&&(_.textContent=vn),kt=p(_t,"PRE",{class:!0});var An=r(kt);Gt=ht(An,!1),An.forEach(n),_t.forEach(n),Ut=i(t),D=p(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-5nczl0"&&(D.innerHTML=_n),qt=i(t),N=p(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1k7cqk2"&&(N.innerHTML=Cn),Dt=i(t),f=p(t,"DIV",{class:!0});var Ct=r(f);R=p(Ct,"DIV",{class:!0,"data-svelte-h":!0}),o(R)!=="svelte-1llzxwj"&&(R.textContent=wn),pt(B.$$.fragment,Ct),C=p(Ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-1mizovr"&&(C.textContent=Tn),dt=p(Ct,"PRE",{class:!0});var In=r(dt);Nt=ht(In,!1),In.forEach(n),Ct.forEach(n),Rt=i(t),Q=p(t,"H2",{"data-svelte-h":!0}),o(Q)!=="svelte-xnsbaz"&&(Q.innerHTML=Pn),Bt=i(t),V=p(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-qrbwc2"&&(V.innerHTML=Hn),Qt=i(t),m=p(t,"DIV",{class:!0});var wt=r(m);W=p(wt,"DIV",{class:!0,"data-svelte-h":!0}),o(W)!=="svelte-1llzxwj"&&(W.textContent=yn),pt(J.$$.fragment,wt),w=p(wt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-14ui0r9"&&(w.textContent=Mn),ft=p(wt,"PRE",{class:!0});var Gn=r(ft);Vt=ht(Gn,!1),Gn.forEach(n),wt.forEach(n),Wt=i(t),Z=p(t,"H2",{"data-svelte-h":!0}),o(Z)!=="svelte-10kbt7d"&&(Z.innerHTML=jn),Jt=i(t),K=p(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-ciust9"&&(K.innerHTML=Ln),Zt=i(t),x=p(t,"DIV",{class:!0});var Tt=r(x);X=p(Tt,"DIV",{class:!0,"data-svelte-h":!0}),o(X)!=="svelte-1llzxwj"&&(X.textContent=$n),pt(Y.$$.fragment,Tt),T=p(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-93zu5v"&&(T.textContent=En),mt=p(Tt,"PRE",{class:!0});var Un=r(mt);Kt=ht(Un,!1),Un.forEach(n),Tt.forEach(n),Xt=i(t),tt=p(t,"H2",{"data-svelte-h":!0}),o(tt)!=="svelte-1iz75t6"&&(tt.innerHTML=Sn),Yt=i(t),nt=p(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1p9ioem"&&(nt.innerHTML=bn),tn=i(t),g=p(t,"DIV",{class:!0});var Pt=r(g);et=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),o(et)!=="svelte-1llzxwj"&&(et.textContent=zn),pt(st.$$.fragment,Pt),P=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(P)!=="svelte-8alzd6"&&(P.textContent=Fn),xt=p(Pt,"PRE",{class:!0});var qn=r(xt);nn=ht(qn,!1),qn.forEach(n),Pt.forEach(n),this.h()},h(){l(H,"class","remark-container tip"),l(y,"class","remark-container tip"),l(S,"class","remark-container__title"),l(M,"class","remark-container tip"),l(O,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNpdjssKwjAQRX8lzqqBUqrgJjs3PhaCoDsrNLZTKdQkJFNoCfl3U4Wiboa5Zx73epDGgPBQ6RpBQNVJ59hx3BjDcCBUtWOx94UqqLIoCc8kLZ3kAxP+pgVZpN4qNg8mGgoVIKRgonYgrh7aGsQyhUZ3NdrDR/yYzvez8SS+nHd9++95iatZoxUl21iye3yecJ5RxEm5R4usdczpJ7IJLUo+Z0thiBHWeQojiFWeh1t4AT7fXcQ="),l(v,"title","Open in our Online Editor"),Ft.a=null,l(rt,"class","language-js"),l(k,"class","remark-container tip"),l(U,"class","remark-container__title"),l(_,"target","_blank"),l(_,"href","/editor#eNpdjs0KwjAQhF8l7qmBUqrgJTcv/hwEQW9WaGhWKdQkJFtoCXl3U4WiXpadmV2+CSCtBRGgMQpBQNNJ79lx3FjLcCDUyrO0h0pX1DiUhGeSjk7ygRl/uxU5pN5pNgeTGysdIeZgk/YgrgFaBWKZw910Ct3hI36g8/8MnsQXede3/8xLOi3uRlO2TaNoTGdcVjtUNecFpTCr9+iQtZ5580Q2WYuazw1zGFKRdZnDCGJVlvEWX5wmYD0="),l(_,"title","Open in our Online Editor"),Gt.a=null,l(kt,"class","language-js"),l(d,"class","remark-container tip"),l(R,"class","remark-container__title"),l(C,"target","_blank"),l(C,"href","/editor#eNpdjs0KwjAQhF8l7qmBUqrgJTcv/hwEQW9WaGhXCdQkJFtoCXl3U4WiXpadmV2+CSCtBRGgMS2CgKaT3rPjuLGW4UCoW8/SHipdUeNQEp5JOjrJB2b87VbkkHqn2RxMbqx0hJiDTdqDuAZQLYhlDnfTtegOH/EDnf9n8CS+yLte/TMv6bS4G03ZNo1CkexUk3FeUAqyeo8OmfLMmyeyyVrUfG6Xw5BKrMscRhCrsoy3+AIH5F6Z"),l(C,"title","Open in our Online Editor"),Nt.a=null,l(dt,"class","language-js"),l(f,"class","remark-container tip"),l(W,"class","remark-container__title"),l(w,"target","_blank"),l(w,"href","/editor#eNqNj09LAzEQxb9KnFMCYdkWBMnNi38Ogqg3IzRsphpYk5CZ0tYl392shUU9iJdh3hve/HgTuJzBTDAkj2BgGB2RuDte5izwwBg9ibZPNloeCjrGR3aF790rSvXlWi7IuxLFcpjdamOFqiE3TWCeJwgezErDNo0ey+1J/IAu+QU8i2/k6134zXxIe+qGtzD6glGeTpaf2oNumyLLqzY6Ch8oL5TquPlyc4MFRSBB6R3FbJ1tlP4rSnu5Wqv/5NVSXcOhNTzvNRzBrPu+vtRPV7l/Zw=="),l(w,"title","Open in our Online Editor"),Vt.a=null,l(ft,"class","language-js"),l(m,"class","remark-container tip"),l(X,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNpdjs0KwjAQhF8l7qmFUqrgJTcv/hwEQW9WaGi3NliTkGyhpeTdTRWKell2Znb5ZgRhDPARSl0hcChb4Rw7DhtjGPaEqnIs7GOuciotCsIzCUsncccofrs5WaTOKjYHk+tz5cEnYIJ2wK8jyAr4MoFatxXaw0f8QOf/GTyJL/Kuk//MSzhNa60o2oaROrLygdRY3d2bKI5TCnlU7NEik445/UQ2WYsinksm0Icu6yyBAfgqy/zNvwDhZ2G2"),l(T,"title","Open in our Online Editor"),Kt.a=null,l(mt,"class","language-js"),l(x,"class","remark-container tip"),l(et,"class","remark-container__title"),l(P,"target","_blank"),l(P,"href","/editor#eNpdjssKwjAQRX8lzqqFUqrgJjs3PhaCoDsjNDSjFGoakim0hPy7qUJQN8PcO49zPUhjgHtoeoXAoemkc+w4bYxhOBJq5VjsvdCCGouS8EzS0kk+MMvfriCLNFjN0mB2g9ABQgEmagf86qFVwJcF3PtOoT18xA803SfwLL7Iu6H9Z17iannvNWXbWMpBx99dq2O2vKQ4y+o9WmStY65/IputRZ2ngAWMMce6KmACvqqqcAsvPH5f6Q=="),l(P,"title","Open in our Online Editor"),nn.a=null,l(xt,"class","language-js"),l(g,"class","remark-container tip")},m(t,e){s(t,h,e),s(t,Ht,e),s(t,j,e),s(t,yt,e),s(t,H,e),s(t,Mt,e),s(t,y,e),s(t,jt,e),s(t,L,e),s(t,Lt,e),s(t,$,e),s(t,$t,e),s(t,E,e),s(t,Et,e),s(t,M,e),u(M,S),lt(b,M,null),s(t,St,e),s(t,z,e),s(t,bt,e),s(t,F,e),s(t,zt,e),s(t,k,e),u(k,O),lt(A,k,null),u(k,v),u(k,rt),Ft.m(Nn,rt),s(t,Ot,e),s(t,I,e),s(t,At,e),s(t,G,e),s(t,It,e),s(t,d,e),u(d,U),lt(q,d,null),u(d,_),u(d,kt),Gt.m(Rn,kt),s(t,Ut,e),s(t,D,e),s(t,qt,e),s(t,N,e),s(t,Dt,e),s(t,f,e),u(f,R),lt(B,f,null),u(f,C),u(f,dt),Nt.m(Bn,dt),s(t,Rt,e),s(t,Q,e),s(t,Bt,e),s(t,V,e),s(t,Qt,e),s(t,m,e),u(m,W),lt(J,m,null),u(m,w),u(m,ft),Vt.m(Qn,ft),s(t,Wt,e),s(t,Z,e),s(t,Jt,e),s(t,K,e),s(t,Zt,e),s(t,x,e),u(x,X),lt(Y,x,null),u(x,T),u(x,mt),Kt.m(Vn,mt),s(t,Xt,e),s(t,tt,e),s(t,Yt,e),s(t,nt,e),s(t,tn,e),s(t,g,e),u(g,et),lt(st,g,null),u(g,P),u(g,xt),nn.m(Wn,xt),en=!0},p:Zn,i(t){en||(ot(b.$$.fragment,t),ot(A.$$.fragment,t),ot(q.$$.fragment,t),ot(B.$$.fragment,t),ot(J.$$.fragment,t),ot(Y.$$.fragment,t),ot(st.$$.fragment,t),en=!0)},o(t){ct(b.$$.fragment,t),ct(A.$$.fragment,t),ct(q.$$.fragment,t),ct(B.$$.fragment,t),ct(J.$$.fragment,t),ct(Y.$$.fragment,t),ct(st.$$.fragment,t),en=!1},d(t){t&&(n(h),n(Ht),n(j),n(yt),n(H),n(Mt),n(y),n(jt),n(L),n(Lt),n($),n($t),n(E),n(Et),n(M),n(St),n(z),n(bt),n(F),n(zt),n(k),n(Ot),n(I),n(At),n(G),n(It),n(d),n(Ut),n(D),n(qt),n(N),n(Dt),n(f),n(Rt),n(Q),n(Bt),n(V),n(Qt),n(m),n(Wt),n(Z),n(Jt),n(K),n(Zt),n(x),n(Xt),n(tt),n(Yt),n(nt),n(tn),n(g)),it(b),it(A),it(q),it(B),it(J),it(Y),it(st)}}}class se extends Kn{constructor(h){super(),Xn(this,h,null,Yn,Jn,{})}}export{se as component};
