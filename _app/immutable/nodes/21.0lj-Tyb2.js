import{s as hn,n as vn}from"../chunks/scheduler.DFPFbGJz.js";import{S as bn,i as Cn,e as s,s as u,c as Pt,H as _t,a as p,g as o,b as c,d as r,f as Bt,n as At,h as n,o as l,j as a,p as i,m as Ht,t as Nt,k as Et,l as Mt}from"../chunks/index.CzDE4dZi.js";import{V as Lt}from"../chunks/ViewApp.C2MU7-ZI.js";function wn(kn){let d,Yt="<code>m</code>",Q,C,zt="On this page you find the documentation for the <code>m</code> variable.",X,w,jt="Introduction",tt,T,Rt="The <code>m</code> variable, short for <strong>M</strong>ath, contains various methods you can call to perform various mathematical operations. You can use it wherever you want in your code.",nt,S,qt="<code>lowest()</code> - Obtaining the lowest number",et,y,Ft="You can use <code>m.lowest()</code> to pass it multiple numbers, and it will return back the lowest one to you. Simply separate the numbers by <code>,</code> (comma).",at,g,P,Kt="Example",_,B,k,Vt="Open in Online Editor",W,st,mn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">lowest</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,pt,A,$t="<code>highest()</code> - Obtaining the highest number",ot,H,Ut="You can use <code>m.highest()</code> to pass it multiple numbers, and it will return back the highest one to you. Simply separate the numbers by <code>,</code> (comma).",lt,h,N,Wt="Example",E,M,m,Zt="Open in Online Editor",Z,ut,fn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">highest</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ct,L,Dt="<code>randomInt()</code> - Obtaining a random integer",it,G,Jt="You can use <code>m.randomInt()</code> to obtain a random integer. Pass it two numbers:",rt,I,Qt="<li>The lowest random integer</li> <li>The highest random integer</li>",dt,O,Xt="The function will then return back an integer between the ones you pass it. The returned integer can be equal to the lowest and the highest number you passed it.",kt,v,Y,tn="Example",z,j,f,nn="Open in Online Editor",D,mt,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">New random number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomizeNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">randomizeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ft,R,en="<code>randomFloat()</code> - Obtaining a random float",xt,q,an="You can use <code>m.randomFloat()</code> to obtain a random float. Pass it two numbers:",gt,F,sn="<li>The lowest random float</li> <li>The highest random float</li>",ht,K,pn="The function will then return back a number between the ones you pass it. The returned number can be equal to the lowest and the highest number you passed it.",vt,b,V,on="Example",$,U,x,ln="Open in Online Editor",J,bt,gn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">New random number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomizeNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">randomizeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ct;return B=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = m.lowest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(\`\${p.number}\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),M=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = m.highest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(\`\${p.number}\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),j=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.number}\`),
			Button.text(\`New random number\`).handler(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomInt(3, 8)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),U=new Lt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.number}\`),
			Button.text(\`New random number\`).handler(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomFloat(10, 15)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){d=s("h1"),d.innerHTML=Yt,Q=u(),C=s("p"),C.innerHTML=zt,X=u(),w=s("h2"),w.textContent=jt,tt=u(),T=s("p"),T.innerHTML=Rt,nt=u(),S=s("h2"),S.innerHTML=qt,et=u(),y=s("p"),y.innerHTML=Ft,at=u(),g=s("div"),P=s("div"),P.textContent=Kt,_=s("div"),Pt(B.$$.fragment),k=s("a"),k.textContent=Vt,W=s("pre"),st=new _t(!1),pt=u(),A=s("h2"),A.innerHTML=$t,ot=u(),H=s("p"),H.innerHTML=Ut,lt=u(),h=s("div"),N=s("div"),N.textContent=Wt,E=s("div"),Pt(M.$$.fragment),m=s("a"),m.textContent=Zt,Z=s("pre"),ut=new _t(!1),ct=u(),L=s("h2"),L.innerHTML=Dt,it=u(),G=s("p"),G.innerHTML=Jt,rt=u(),I=s("ol"),I.innerHTML=Qt,dt=u(),O=s("p"),O.textContent=Xt,kt=u(),v=s("div"),Y=s("div"),Y.textContent=tn,z=s("div"),Pt(j.$$.fragment),f=s("a"),f.textContent=nn,D=s("pre"),mt=new _t(!1),ft=u(),R=s("h2"),R.innerHTML=en,xt=u(),q=s("p"),q.innerHTML=an,gt=u(),F=s("ol"),F.innerHTML=sn,ht=u(),K=s("p"),K.textContent=pn,vt=u(),b=s("div"),V=s("div"),V.textContent=on,$=s("div"),Pt(U.$$.fragment),x=s("a"),x.textContent=ln,J=s("pre"),bt=new _t(!1),this.h()},l(t){d=p(t,"H1",{"data-svelte-h":!0}),o(d)!=="svelte-1e8hera"&&(d.innerHTML=Yt),Q=c(t),C=p(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-2ce5p"&&(C.innerHTML=zt),X=c(t),w=p(t,"H2",{"data-svelte-h":!0}),o(w)!=="svelte-1ukekoe"&&(w.textContent=jt),tt=c(t),T=p(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-1dsseaa"&&(T.innerHTML=Rt),nt=c(t),S=p(t,"H2",{"data-svelte-h":!0}),o(S)!=="svelte-r7epx8"&&(S.innerHTML=qt),et=c(t),y=p(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-1o7p0y"&&(y.innerHTML=Ft),at=c(t),g=p(t,"DIV",{class:!0});var e=r(g);P=p(e,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-1llzxwj"&&(P.textContent=Kt),_=p(e,"DIV",{});var wt=r(_);Bt(B.$$.fragment,wt),k=p(wt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(k)!=="svelte-1rogivo"&&(k.textContent=Vt),W=p(wt,"PRE",{class:!0});var un=r(W);st=At(un,!1),un.forEach(n),wt.forEach(n),e.forEach(n),pt=c(t),A=p(t,"H2",{"data-svelte-h":!0}),o(A)!=="svelte-883q7w"&&(A.innerHTML=$t),ot=c(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-11qqoyq"&&(H.innerHTML=Ut),lt=c(t),h=p(t,"DIV",{class:!0});var Gt=r(h);N=p(Gt,"DIV",{class:!0,"data-svelte-h":!0}),o(N)!=="svelte-1llzxwj"&&(N.textContent=Wt),E=p(Gt,"DIV",{});var Tt=r(E);Bt(M.$$.fragment,Tt),m=p(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-1x38ddp"&&(m.textContent=Zt),Z=p(Tt,"PRE",{class:!0});var cn=r(Z);ut=At(cn,!1),cn.forEach(n),Tt.forEach(n),Gt.forEach(n),ct=c(t),L=p(t,"H2",{"data-svelte-h":!0}),o(L)!=="svelte-1mq7ks8"&&(L.innerHTML=Dt),it=c(t),G=p(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-uckdv9"&&(G.innerHTML=Jt),rt=c(t),I=p(t,"OL",{"data-svelte-h":!0}),o(I)!=="svelte-1feghf8"&&(I.innerHTML=Qt),dt=c(t),O=p(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-bmritv"&&(O.textContent=Xt),kt=c(t),v=p(t,"DIV",{class:!0});var It=r(v);Y=p(It,"DIV",{class:!0,"data-svelte-h":!0}),o(Y)!=="svelte-1llzxwj"&&(Y.textContent=tn),z=p(It,"DIV",{});var St=r(z);Bt(j.$$.fragment,St),f=p(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-1almoib"&&(f.textContent=nn),D=p(St,"PRE",{class:!0});var rn=r(D);mt=At(rn,!1),rn.forEach(n),St.forEach(n),It.forEach(n),ft=c(t),R=p(t,"H2",{"data-svelte-h":!0}),o(R)!=="svelte-kr2kcl"&&(R.innerHTML=en),xt=c(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-mv54ty"&&(q.innerHTML=an),gt=c(t),F=p(t,"OL",{"data-svelte-h":!0}),o(F)!=="svelte-1g8wxoo"&&(F.innerHTML=sn),ht=c(t),K=p(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-16n1fft"&&(K.textContent=pn),vt=c(t),b=p(t,"DIV",{class:!0});var Ot=r(b);V=p(Ot,"DIV",{class:!0,"data-svelte-h":!0}),o(V)!=="svelte-1llzxwj"&&(V.textContent=on),$=p(Ot,"DIV",{});var yt=r($);Bt(U.$$.fragment,yt),x=p(yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-e6xea0"&&(x.textContent=ln),J=p(yt,"PRE",{class:!0});var dn=r(J);bt=At(dn,!1),dn.forEach(n),yt.forEach(n),Ot.forEach(n),this.h()},h(){l(P,"class","remark-container__title"),l(k,"target","_blank"),l(k,"href","/editor#eNrFUu9LwzAQ/VfCIdhCKFv9SUGkisg+KOIGKk5YbK9umCYlSdlG6f9ual1dxpT5yQ8td7177+69awWsKCCqIJEpQgQJZ1qTm2VcFAQXBkWqiY2rsRib5kkUMoNDw5S5Y2/o+W3FKDSlEqQrNF/rFlRDTSGTPEWlIXquYJZC1KcgWN5M/IQABZllGs0jRL1V/GTj+oVCYfkcZEs2aBNn8W5+t3yTdNuLMn9FRc5IHnA5R228Q0pCSk4oOfZdidflbFPcyHIGxr68yV5VBC1ZPfEdrRQWEIU9K2IJ0UGvEzDCvOCW1xHi7B7r90EWpyX/RYAUF5hJ9e372uxfNr+Xcx0k0xlPFQrvC2mGBUuQrrI1dbFCspQl+bSZmCkTpH96PvHpduSl5GUutgzYbBybi9JYDV9jbuXEDxpvPFFy7tMdYU+od8OtKr5jkhRxZlBtc7D5U9vbhBu3uRIWEr/hf1/mYcrMvm6Oo4id/vNNHMf6ve2GuU1HOzSFuzCFPzCtb/iXm7zUH9GPriQ="),l(k,"title","Open in our Online Editor"),st.a=null,l(W,"class","language-js"),l(g,"class","remark-container tip"),l(N,"class","remark-container__title"),l(m,"target","_blank"),l(m,"href","/editor#eNrFUl1Lw0AQ/CvHIpjAEdr4SUAkikgfFNGCii30TDZNMbkLdxdsCfnvXhobe6WW+uRDwm52Z3ZnNhWwooCggkjECAFEGVOK3C3CoiA418hjRUxcjfhIN08kkWl80kzqBzZFx20rWqIuJSddoflat6AaagqJyGKUCoK3CmYxBH0KnOXNxCUEKIgkUahfIOit4lcT12MKheGzkC3ZoE2sxbv53fJN0m3Py/wdJbkguZfOpikq7RxT4lNyRsmpa2u8LWeb6oaG1NPm5UwOqsJr2eqJa4mlMIfA7xkVCwiOep2CIeZFZngtJdbyofoYJGFcZjsUCH6FiZA/xq/N3rH5o/hUXpTOslgid76R+qlgEdJVtqYulEgWoiRLn4lOGSf988uJS7cjr0VW5nzLgM3Gkb4qtdHwPeZeTFyv8cbhZZa5dE/YK6r9cKuKa5kkeJholNscbH7V9jb+xm1uuIGEU/zvyzynTB+q5jiSmOm/38RyrN/bbpjddLJHk78Pk/8L0/qGf7nJuP4CRzaucg=="),l(m,"title","Open in our Online Editor"),ut.a=null,l(Z,"class","language-js"),l(h,"class","remark-container tip"),l(Y,"class","remark-container__title"),l(f,"target","_blank"),l(f,"href","/editor#eNrFU2Fr2zAQ/SviGMwGYZyUQTGM4o5S8mGltIUtNIWo9rkJkyUhybSZ8X+fHDVeZNKSfuoHByn37t279+wWmFKQtVDIEiGDgjNjyM9NrhTBF4uiNMSd24VY2P4pNDKLt5Zpe82eMIp9xWq0jRZkKPT/dr6pg45CJXmJ2kB238K6hGxCQbC6n7htAQqyqgza35Clu/PcnbsHCsrxBZ2ebOYvgfBh/iC+vwzqRVM/oibfSRruc9msx5vcyGeTFKs1LzWKyJcW9s7RJtb9RMsvrUo8X7eM6Q5w3lgrxSvkCp+JZqKUNfHIZZys3J2jjlTiK+u/eLWt7TjiPeucmhA0qNzNdrvUr0wzYaMTSk7jwHsKL5BNU2fqBrKTdDD0DmvF3eqBsYGXufkzq/Ky4e8YKsU5VlL/fw8C8R8091axAukBq3ONZCMbso2dWGchmZye7bkedv6QvKnFgQFj4Dgu6fLpvYlEw3lMj2ybozmu73DCUuSV3Ut29OX4bKajbC6Ea8mf8LOT+bVi9qvpw9HETX87k8CxSXrYsBD07QjQ9Bim6RtM+wo/kslD9w++buWD"),l(f,"title","Open in our Online Editor"),mt.a=null,l(D,"class","language-js"),l(v,"class","remark-container tip"),l(V,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFU2Fr2zAQ/SviKNQGYeyUwjCM4Y5t9MNKWQttWQpR7XMTJktCkmkz4/8+OWq8yKQl/dQPDlLuvXd379kdMKUg76CUFUIOJWfGkJ/rQimCzxZFZYg7d3Mxt8NTamQWryzT9pI9YhT7itVoWy3IWBj+7T2ph55CLXmF2kD+u4NVBXlGQbBm6LihAAVZ1wbtLeTp9nznzv09BeX0AqYXO/eXYPCx/zj8cBmnF23zgJp8Jmm4z492Nd3kl3wySblc8UqjiHxpbq+dbGLdT7Q46lTi9fpFTLeAs9ZaKV4gF/hENBOVbIhHLuJk6e4cdaQSX1n9xYtNbasR71jnpglB45Tb3m6X5kXpO5fMRllKSXYaB/5TeIZ8ljpj15CfpKOp19go7tYPzA38LMyf87qoWv6GqVKcYS31/3chWOCdBl8pViLdY3ehkaxlSzbRE+tsJNmnLzvOh8yvkreN2NNgCpxGJl1GgzeRaDmP6YG0OzSH8fanLEVR2510J1+Pz2Y2yeabcJTiET86mZsls8dmCEcT1/31TALHsnS/YSHo9ADQ7BCl2StKuxO+J5P7/h9Kkuaq"),l(x,"title","Open in our Online Editor"),bt.a=null,l(J,"class","language-js"),l(b,"class","remark-container tip")},m(t,e){a(t,d,e),a(t,Q,e),a(t,C,e),a(t,X,e),a(t,w,e),a(t,tt,e),a(t,T,e),a(t,nt,e),a(t,S,e),a(t,et,e),a(t,y,e),a(t,at,e),a(t,g,e),i(g,P),i(g,_),Ht(B,_,null),i(_,k),i(_,W),st.m(mn,W),a(t,pt,e),a(t,A,e),a(t,ot,e),a(t,H,e),a(t,lt,e),a(t,h,e),i(h,N),i(h,E),Ht(M,E,null),i(E,m),i(E,Z),ut.m(fn,Z),a(t,ct,e),a(t,L,e),a(t,it,e),a(t,G,e),a(t,rt,e),a(t,I,e),a(t,dt,e),a(t,O,e),a(t,kt,e),a(t,v,e),i(v,Y),i(v,z),Ht(j,z,null),i(z,f),i(z,D),mt.m(xn,D),a(t,ft,e),a(t,R,e),a(t,xt,e),a(t,q,e),a(t,gt,e),a(t,F,e),a(t,ht,e),a(t,K,e),a(t,vt,e),a(t,b,e),i(b,V),i(b,$),Ht(U,$,null),i($,x),i($,J),bt.m(gn,J),Ct=!0},p:vn,i(t){Ct||(Nt(B.$$.fragment,t),Nt(M.$$.fragment,t),Nt(j.$$.fragment,t),Nt(U.$$.fragment,t),Ct=!0)},o(t){Et(B.$$.fragment,t),Et(M.$$.fragment,t),Et(j.$$.fragment,t),Et(U.$$.fragment,t),Ct=!1},d(t){t&&(n(d),n(Q),n(C),n(X),n(w),n(tt),n(T),n(nt),n(S),n(et),n(y),n(at),n(g),n(pt),n(A),n(ot),n(H),n(lt),n(h),n(ct),n(L),n(it),n(G),n(rt),n(I),n(dt),n(O),n(kt),n(v),n(ft),n(R),n(xt),n(q),n(gt),n(F),n(ht),n(K),n(vt),n(b)),Mt(B),Mt(M),Mt(j),Mt(U)}}}class Pn extends bn{constructor(d){super(),Cn(this,d,null,wn,hn,{})}}export{Pn as component};
