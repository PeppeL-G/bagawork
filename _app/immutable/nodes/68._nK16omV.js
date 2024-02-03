import{s as Pn,n as yn}from"../chunks/scheduler.UQwd20JU.js";import{S as Mn,i as Hn,e as s,s as o,c as hn,H as Q,a as p,g as c,b as l,d as D,f as fn,n as $,h as n,o as i,j as a,m as gn,p as Nt,t as mn,k as wn,l as xn}from"../chunks/index.i__Fl8cY.js";import{V as vn}from"../chunks/ViewApp.m6vzcyjb.js";function bn(Tn){let u,jt="1. Page Constants",Y,m,Bt="This tutorial will teach you what page constants in Bagawork are, and show you what we can use them for, and how.",J,w,It="The problem",K,x,Ut="To understand the usefulness of page constants, let's first go though a page in app that could benefit from using a page constant, but that doesn't use it. Such a page is the page shown below.",X,d,v,r,Vt="Open in Online Editor",W,tt,An=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is good friend with Arthur, and he even saved Arthur's life.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,T,Ot="As you can see on the page, the name <code>Arthur</code> is written at multiple places. This works, but there are some drawbacks with writing the same value over and over again at multiple different places like this:",et,A,zt="<li>If we don&#39;t know how <code>Arthur</code> is spelled and spell it wrong (for example spell it as <code>Artur</code>), then when we later learn that we have spelled it wrong we need to correct the spelling at multiple places in our code, which is a lot of work</li> <li>If <code>Arthur</code> changes name in the future, we need to change the name at multiple places in our code, which is a lot of work</li>",at,E,Gt="To repeatedly write the same value at multiple places in the code (as <code>Arthur</code> in the example above) is known as hardcoding values.",st,C,Rt="The solution",pt,S,Zt="Luckilly, there exists a solution to the problem of hardcoding values, namely to use constants instead. With a constant:",ot,_,Ft="<li>We would write the value (the name <code>Arthur</code>) at one place in our code, and place it in a constant</li> <li>We would refer to that constant at each place in our code we need to use the name</li>",lt,P,Dt="This way, if we spell the name wrong, or if <code>Arthur</code> changes name in the future, we just need to change the name at one place in our code (where we created the constant and placed the name in it).",ct,y,Wt="How to create a page constant",it,M,qt="Directly in your <code>Page</code> class you can create constants that are accessible within that <code>Page</code>. We call these constansts for <em>page constants</em>. In the code below you find an example of how to create the following page constants:",ut,H,Qt="<li><code>NAME</code> will have the string value <code>Arthur</code></li> <li><code>COUNTRY_NAME</code> will have the string value <code>Sweden</code></li> <li><code>BEST_DATE</code> will have the string value <code>2023-09-15</code></li>",rt,b,kt,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sweden</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">BEST_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page constants as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,dt,h,$t='<div class="remark-container__title">Naming convetion</div><p>In Javascript, there exists different naming conventions for different type of values:</p><ul><li>Classes <code>AreNamedLikeThis</code></li> <li>Methods <code>areNamedLikeThis()</code></li> <li>Variables <code>areNamedLikeThis</code></li> <li>Constants <code>ARE_NAMED_LIKE_THIS</code></li> </ul><p>Although it&#39;s not strictly required to follow this naming convention, all good programmers do follow it, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.</p>',ht,L,Yt="How to use constants",ft,N,Jt="In Bagawork, everything you create in your <code>Page</code> class (constants, variables and methods) are accessible in a special variable called <code>p</code> (short for <em>page</em>). To retrieve the value of a constant, you would simply write <code>p.THE_NAME_OF_THE_CONSTANT</code>, for example <code>p.COUNTRY_NAME</code>.",gt,j,Kt="To display the title on the <code>InfoPage</code> we had before, the following code were used:",mt,B,wt,Cn='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',xt,I,Xt="With the <code>NAME</code> constant we have now, we can instead write:",vt,U,Tt,Sn='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',At,V,tn="This looks a bit strange, but let&#39;s go through how it works. Remember, in JavaScript, when creating a string with two <code>`</code> characters, all characters between them will be interpreted as text part of the string. BUT, in a string created with two <code>`</code> characters, we can also write <code>${SOMETHING}</code>, where we want the computer to replace that entire thing with the value we get from <code>SOMETHING</code>. So <code>${p.NAME}</code> will be replaced with <code>Arthur</code> in this case.",Et,O,nn="So, at all places in our code where <code>Arthur</code> is written, we will instead use <code>${p.NAME}</code>.",Ct,f,en="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants created on that page. For example, <code>PageA</code> cannnot access the page constants in <code>PageB</code>. To create a constant all pages can access, you should instead create an <code>App</code> constant, which next tutorial is about.</p>",St,z,an="The final solution",_t,G,sn="So, here&#39;s the code for the page using a constant, instead of harding the name at multiple places. Notice how easy it is to change name to <code>Alice</code> in the code; you just need to change it at the place where we create the <code>NAME</code> constant!",Pt,g,R,k,pn="Open in Online Editor",q,yt,_n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is good friend with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, and he even saved </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">'s life.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Mt,Z,on="That's it!",Ht,F,ln="Great work, now you have a basic understanding of what a page constant in Bagawork is 🥳 Next tutorial will be about using app constants in Bagawork, which are constants you can access from all your pages.",bt;return v=new vn({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about Arthur\`),
			Space,
			Text.text(\`Arthur is a human.\`).left(),
			Space.size(0.05),
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.\`).left(),
			Space.size(0.05),
			Text.text(\`Ford Prefect is good friend with Arthur, and he even saved Arthur's life.\`).left(),
			Space,
		)
	}
	
}`,x:155,y:333}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),R=new vn({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	NAME = \`Arthur\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about \${p.NAME}\`),
			Space,
			Text.text(\`\${p.NAME} is a human.\`).left(),
			Space.size(0.05),
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something \${p.NAME} learned.\`).left(),
			Space.size(0.05),
			Text.text(\`Ford Prefect is good friend with \${p.NAME}, and he even saved \${p.NAME}'s life.\`).left(),
			Space,
		)
	}
	
}`,x:155,y:333}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){u=s("h1"),u.textContent=jt,Y=o(),m=s("p"),m.textContent=Bt,J=o(),w=s("h2"),w.textContent=It,K=o(),x=s("p"),x.textContent=Ut,X=o(),d=s("div"),hn(v.$$.fragment),r=s("a"),r.textContent=Vt,W=s("pre"),tt=new Q(!1),nt=o(),T=s("p"),T.innerHTML=Ot,et=o(),A=s("ul"),A.innerHTML=zt,at=o(),E=s("p"),E.innerHTML=Gt,st=o(),C=s("h2"),C.textContent=Rt,pt=o(),S=s("p"),S.textContent=Zt,ot=o(),_=s("ol"),_.innerHTML=Ft,lt=o(),P=s("p"),P.innerHTML=Dt,ct=o(),y=s("h2"),y.textContent=Wt,it=o(),M=s("p"),M.innerHTML=qt,ut=o(),H=s("ul"),H.innerHTML=Qt,rt=o(),b=s("pre"),kt=new Q(!1),dt=o(),h=s("div"),h.innerHTML=$t,ht=o(),L=s("h2"),L.textContent=Yt,ft=o(),N=s("p"),N.innerHTML=Jt,gt=o(),j=s("p"),j.innerHTML=Kt,mt=o(),B=s("pre"),wt=new Q(!1),xt=o(),I=s("p"),I.innerHTML=Xt,vt=o(),U=s("pre"),Tt=new Q(!1),At=o(),V=s("p"),V.innerHTML=tn,Et=o(),O=s("p"),O.innerHTML=nn,Ct=o(),f=s("div"),f.innerHTML=en,St=o(),z=s("h2"),z.textContent=an,_t=o(),G=s("p"),G.innerHTML=sn,Pt=o(),g=s("div"),hn(R.$$.fragment),k=s("a"),k.textContent=pn,q=s("pre"),yt=new Q(!1),Mt=o(),Z=s("h2"),Z.textContent=on,Ht=o(),F=s("p"),F.textContent=ln,this.h()},l(t){u=p(t,"H1",{"data-svelte-h":!0}),c(u)!=="svelte-54afj"&&(u.textContent=jt),Y=l(t),m=p(t,"P",{"data-svelte-h":!0}),c(m)!=="svelte-399et9"&&(m.textContent=Bt),J=l(t),w=p(t,"H2",{"data-svelte-h":!0}),c(w)!=="svelte-1p3x34e"&&(w.textContent=It),K=l(t),x=p(t,"P",{"data-svelte-h":!0}),c(x)!=="svelte-15ha144"&&(x.textContent=Ut),X=l(t),d=p(t,"DIV",{});var e=D(d);fn(v.$$.fragment,e),r=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(r)!=="svelte-aj5dzm"&&(r.textContent=Vt),W=p(e,"PRE",{class:!0});var cn=D(W);tt=$(cn,!1),cn.forEach(n),e.forEach(n),nt=l(t),T=p(t,"P",{"data-svelte-h":!0}),c(T)!=="svelte-6fq0g3"&&(T.innerHTML=Ot),et=l(t),A=p(t,"UL",{"data-svelte-h":!0}),c(A)!=="svelte-15u1jnw"&&(A.innerHTML=zt),at=l(t),E=p(t,"P",{"data-svelte-h":!0}),c(E)!=="svelte-oa94kc"&&(E.innerHTML=Gt),st=l(t),C=p(t,"H2",{"data-svelte-h":!0}),c(C)!=="svelte-fem3ok"&&(C.textContent=Rt),pt=l(t),S=p(t,"P",{"data-svelte-h":!0}),c(S)!=="svelte-1i9hjhy"&&(S.textContent=Zt),ot=l(t),_=p(t,"OL",{"data-svelte-h":!0}),c(_)!=="svelte-h06c7d"&&(_.innerHTML=Ft),lt=l(t),P=p(t,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1j6er73"&&(P.innerHTML=Dt),ct=l(t),y=p(t,"H2",{"data-svelte-h":!0}),c(y)!=="svelte-9gzrt3"&&(y.textContent=Wt),it=l(t),M=p(t,"P",{"data-svelte-h":!0}),c(M)!=="svelte-zez8c7"&&(M.innerHTML=qt),ut=l(t),H=p(t,"UL",{"data-svelte-h":!0}),c(H)!=="svelte-1vl6rc"&&(H.innerHTML=Qt),rt=l(t),b=p(t,"PRE",{class:!0});var un=D(b);kt=$(un,!1),un.forEach(n),dt=l(t),h=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(h)!=="svelte-8xgya5"&&(h.innerHTML=$t),ht=l(t),L=p(t,"H2",{"data-svelte-h":!0}),c(L)!=="svelte-1gj2kh3"&&(L.textContent=Yt),ft=l(t),N=p(t,"P",{"data-svelte-h":!0}),c(N)!=="svelte-1677s9r"&&(N.innerHTML=Jt),gt=l(t),j=p(t,"P",{"data-svelte-h":!0}),c(j)!=="svelte-1gy51p"&&(j.innerHTML=Kt),mt=l(t),B=p(t,"PRE",{class:!0});var rn=D(B);wt=$(rn,!1),rn.forEach(n),xt=l(t),I=p(t,"P",{"data-svelte-h":!0}),c(I)!=="svelte-nqu0he"&&(I.innerHTML=Xt),vt=l(t),U=p(t,"PRE",{class:!0});var kn=D(U);Tt=$(kn,!1),kn.forEach(n),At=l(t),V=p(t,"P",{"data-svelte-h":!0}),c(V)!=="svelte-yzstjm"&&(V.innerHTML=tn),Et=l(t),O=p(t,"P",{"data-svelte-h":!0}),c(O)!=="svelte-17eu71c"&&(O.innerHTML=nn),Ct=l(t),f=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(f)!=="svelte-tlwsji"&&(f.innerHTML=en),St=l(t),z=p(t,"H2",{"data-svelte-h":!0}),c(z)!=="svelte-ti6j50"&&(z.textContent=an),_t=l(t),G=p(t,"P",{"data-svelte-h":!0}),c(G)!=="svelte-13sfmmz"&&(G.innerHTML=sn),Pt=l(t),g=p(t,"DIV",{});var Lt=D(g);fn(R.$$.fragment,Lt),k=p(Lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(k)!=="svelte-jbaiig"&&(k.textContent=pn),q=p(Lt,"PRE",{class:!0});var dn=D(q);yt=$(dn,!1),dn.forEach(n),Lt.forEach(n),Mt=l(t),Z=p(t,"H2",{"data-svelte-h":!0}),c(Z)!=="svelte-p2uhy5"&&(Z.textContent=on),Ht=l(t),F=p(t,"P",{"data-svelte-h":!0}),c(F)!=="svelte-1iff40u"&&(F.textContent=ln),this.h()},h(){i(r,"target","_blank"),i(r,"href","/editor#eNrFVG2L00AQ/ivDfjGBEPpCQfJFcnJKQeT0euhhD7oms83iZjfsTto7S/+7m6ZVUxOtfvFDwszuzDMvz5PsGK8qluxYZnJkCcsUdw7mWpi0qgAfCXXuwNu7pV5S82QWOeEtcUs3fI1B2N6QRaqtPqQ2583hvs3Zs33EhFE5WseSTzsmc5aMI6Z52ZQ8QLGIGSEc0keWjE72vbf3DxGrPF4nswWbt84vnTflv7feOGe9v67ledfvzdbFWSFVblEH7dWSFh4kJv8KVg0u8M+mJkgtFbVdhdEp7LbiGUY9SW0kSAccirrkOl6FsUJBwVly7ORXDEbxaBb24SwKBK7dFi2QAfLekt0pkqUfBt7V6EgaDUbAGykwOgTcabnx6/Ye1zlce/uJCqnXSwZb7sCZEg/+cRpQyK3G/B8bfGVsDjcWBWbUjLs2JgdhpWcAtpKKY5W2Gd8dblCD4xvMjzfPHCjf+1D5oxd2RBWxR8//bBaxJ5ZMp9OTUhZYVspvpqOYjkhS92Uu0rxWNCwVo69QGPtD3z/V/msh/UYhCE+mhoOePXFcw/j5i0FtvTSqLnVPgfPAJV3V5Gc4lnlr/GKb3QS6ViqMLky7R3dZXthDULPCVBDavg02v4SWm8kZN9fap6Rr/N/MfCg4eVV6ciz46sOcdDY2HvUvrBs0uyBocgnSZABp6KP5EycP+2+lnDB4"),i(r,"title","Open in our Online Editor"),tt.a=null,i(W,"class","language-js"),kt.a=null,i(b,"class","language-js"),i(h,"class","remark-container tip"),wt.a=null,i(B,"class","language-js"),Tt.a=null,i(U,"class","language-js"),i(f,"class","remark-container warning"),i(k,"target","_blank"),i(k,"href","/editor#eNrFVG2Lm0AQ/ivDUqiCSF4IFKEUr6Ql0B7XXo72qAfZxjEu1V3ZHZPLBf9713hJaqo07Zd+UGbceebtedYd40XBgh1bqhhZwJYZNwZmMlFhUQA+EsrYgLV3kYyofpYaOeEtcU03fIWO25yQRiq13EPr7/XHqsFUrPJYorIYtWHBtx0TMQuGHpM8r0vuUzGPqSQxSF9ZMDjY99auHjxW2HwtZJNs1ji/dV6XP7ZeO8fer8OPU3gNi1BTWupFe6T3pTgf5rPaGH+ZiizWKJ3mKKK5ze2TfTmLuhzw76okeLEr/Dp/tXC9Q+RtwZfodeCOwSAMcEjLnEt/4foZJuSc4X0jntAZ+IOJ25VqniJwaTaogRSQ9SJ2l5HI7UjwqURDQklQCXwQCXr7gDsp1pYL63EZw9TaW0qFXEUMNtyAUTnu/dNMkCHXEuN/7PGd0jHcaExwSfXEK6ViSLSwDMFGUHoq1LRke8Q1SjB8jfHp8KWBzA7R18Sz57ak57FHq5LJxGNbFozH44Oe5pgXmV1RS1ctKYXmxywJ4zKjfkEpeYWJ0qdb8Evtv9ZVr1pCjbBVJexVbxnkEoav3vTq7K3Kylx2FDgPjOiqJDvDc5lrZRdb78aRZZa53oWwezSX4dwOguoVhgmh7tpg/eNouBmdcTOVFhKu8H8z8yXlZFVpydFgq/dz0trYcNC9sHbQ5IKg0SWZRj2Z+i7Nnzh5qH4Cggs6eQ=="),i(k,"title","Open in our Online Editor"),yt.a=null,i(q,"class","language-js")},m(t,e){a(t,u,e),a(t,Y,e),a(t,m,e),a(t,J,e),a(t,w,e),a(t,K,e),a(t,x,e),a(t,X,e),a(t,d,e),gn(v,d,null),Nt(d,r),Nt(d,W),tt.m(An,W),a(t,nt,e),a(t,T,e),a(t,et,e),a(t,A,e),a(t,at,e),a(t,E,e),a(t,st,e),a(t,C,e),a(t,pt,e),a(t,S,e),a(t,ot,e),a(t,_,e),a(t,lt,e),a(t,P,e),a(t,ct,e),a(t,y,e),a(t,it,e),a(t,M,e),a(t,ut,e),a(t,H,e),a(t,rt,e),a(t,b,e),kt.m(En,b),a(t,dt,e),a(t,h,e),a(t,ht,e),a(t,L,e),a(t,ft,e),a(t,N,e),a(t,gt,e),a(t,j,e),a(t,mt,e),a(t,B,e),wt.m(Cn,B),a(t,xt,e),a(t,I,e),a(t,vt,e),a(t,U,e),Tt.m(Sn,U),a(t,At,e),a(t,V,e),a(t,Et,e),a(t,O,e),a(t,Ct,e),a(t,f,e),a(t,St,e),a(t,z,e),a(t,_t,e),a(t,G,e),a(t,Pt,e),a(t,g,e),gn(R,g,null),Nt(g,k),Nt(g,q),yt.m(_n,q),a(t,Mt,e),a(t,Z,e),a(t,Ht,e),a(t,F,e),bt=!0},p:yn,i(t){bt||(mn(v.$$.fragment,t),mn(R.$$.fragment,t),bt=!0)},o(t){wn(v.$$.fragment,t),wn(R.$$.fragment,t),bt=!1},d(t){t&&(n(u),n(Y),n(m),n(J),n(w),n(K),n(x),n(X),n(d),n(nt),n(T),n(et),n(A),n(at),n(E),n(st),n(C),n(pt),n(S),n(ot),n(_),n(lt),n(P),n(ct),n(y),n(it),n(M),n(ut),n(H),n(rt),n(b),n(dt),n(h),n(ht),n(L),n(ft),n(N),n(gt),n(j),n(mt),n(B),n(xt),n(I),n(vt),n(U),n(At),n(V),n(Et),n(O),n(Ct),n(f),n(St),n(z),n(_t),n(G),n(Pt),n(g),n(Mt),n(Z),n(Ht),n(F)),xn(v),xn(R)}}}class Bn extends Mn{constructor(u){super(),Hn(this,u,null,bn,Pn,{})}}export{Bn as component};
