import{s as it,n as rt}from"../chunks/scheduler.B0TnBjPs.js";import{S as kt,i as mt,e as s,s as u,c as Cn,H as _n,a as p,g as o,b as c,d as b,f as Tn,n as Pn,h as t,o as l,j as e,p as i,m as yn,t as Mn,k as Hn,l as Ln}from"../chunks/index.BXVnRmkj.js";import{V as En}from"../chunks/ViewApp.qg7AIhJt.js";function dt(pt){let f,$n="<code>m</code>",U,w,Nn="On this page you find the documentation for the <code>m</code> variable.",Y,C,On="Introduction",X,_,jn="The <code>m</code> variable, short for <strong>M</strong>ath, contains various methods you can call to perform various mathematical operations. You can use it wherever you want in your code.",nn,T,zn="<code>lowest()</code> - Obtaining the lowest number",tn,P,In="You can use <code>m.lowest()</code> to pass it multiple numbers, and it will return back the lowest one to you. Pass the numbers as separate arguments.",an,r,y,Sn="Example",M,x,qn="Open in Online Editor",Z,en,ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">lowest</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,sn,H,An="<code>highest()</code> - Obtaining the highest number",pn,L,Fn="You can use <code>m.highest()</code> to pass it multiple numbers, and it will return back the highest one to you. Pass the numbers as separate arguments.",on,k,E,Jn="Example",$,h,Qn="Open in Online Editor",G,ln,lt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">highest</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,un,N,Vn="<code>randomInt()</code> - Obtaining a random integer",cn,O,Zn="You can use <code>m.randomInt()</code> to obtain a random integer. Pass it two numbers:",rn,j,Gn="<li>The lowest random integer</li> <li>The highest random integer</li>",kn,z,Rn="The function will then return back an integer between the ones you pass it. The returned integer can be equal to the lowest and the highest number you passed it.",mn,m,I,Dn="Example",S,v,Kn="Open in Online Editor",R,dn,ut=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">New random number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomizeNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">randomizeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,fn,q,Wn="<code>randomFloat()</code> - Obtaining a random float",xn,A,Bn="You can use <code>m.randomFloat()</code> to obtain a random float. Pass it two numbers:",hn,F,Un="<li>The lowest random float</li> <li>The highest random float</li>",vn,J,Yn="The function will then return back a number between the ones you pass it. The returned number can be equal to the lowest and the highest number you passed it.",gn,d,Q,Xn="Example",V,g,nt="Open in Online Editor",D,bn,ct=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	number <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>number<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">New random number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomizeNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">randomizeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>number <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomFloat</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn;return M=new En({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = m.lowest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(\`\${p.number}\`)
	}
	
}`,x:150,y:200}]}}}),$=new En({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = m.highest(4, 2, 7, 6)
	
	createGui(){
		return Text.text(\`\${p.number}\`)
	}
	
}`,x:150,y:200}]}}}),S=new En({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.number}\`),
			Button.text(\`New random number\`).onClick(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomInt(3, 8)
	}
	
}`,x:150,y:200}]}}}),V=new En({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	number = 0
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.number}\`),
			Button.text(\`New random number\`).onClick(p.randomizeNumber),
		)
	}
	
	randomizeNumber(){
		p.number = m.randomFloat(10, 15)
	}
	
}`,x:150,y:200}]}}}),{c(){f=s("h1"),f.innerHTML=$n,U=u(),w=s("p"),w.innerHTML=Nn,Y=u(),C=s("h2"),C.textContent=On,X=u(),_=s("p"),_.innerHTML=jn,nn=u(),T=s("h2"),T.innerHTML=zn,tn=u(),P=s("p"),P.innerHTML=In,an=u(),r=s("div"),y=s("div"),y.textContent=Sn,Cn(M.$$.fragment),x=s("a"),x.textContent=qn,Z=s("pre"),en=new _n(!1),sn=u(),H=s("h2"),H.innerHTML=An,pn=u(),L=s("p"),L.innerHTML=Fn,on=u(),k=s("div"),E=s("div"),E.textContent=Jn,Cn($.$$.fragment),h=s("a"),h.textContent=Qn,G=s("pre"),ln=new _n(!1),un=u(),N=s("h2"),N.innerHTML=Vn,cn=u(),O=s("p"),O.innerHTML=Zn,rn=u(),j=s("ol"),j.innerHTML=Gn,kn=u(),z=s("p"),z.textContent=Rn,mn=u(),m=s("div"),I=s("div"),I.textContent=Dn,Cn(S.$$.fragment),v=s("a"),v.textContent=Kn,R=s("pre"),dn=new _n(!1),fn=u(),q=s("h2"),q.innerHTML=Wn,xn=u(),A=s("p"),A.innerHTML=Bn,hn=u(),F=s("ol"),F.innerHTML=Un,vn=u(),J=s("p"),J.textContent=Yn,gn=u(),d=s("div"),Q=s("div"),Q.textContent=Xn,Cn(V.$$.fragment),g=s("a"),g.textContent=nt,D=s("pre"),bn=new _n(!1),this.h()},l(n){f=p(n,"H1",{"data-svelte-h":!0}),o(f)!=="svelte-1e8hera"&&(f.innerHTML=$n),U=c(n),w=p(n,"P",{"data-svelte-h":!0}),o(w)!=="svelte-2ce5p"&&(w.innerHTML=Nn),Y=c(n),C=p(n,"H2",{"data-svelte-h":!0}),o(C)!=="svelte-1ukekoe"&&(C.textContent=On),X=c(n),_=p(n,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1dsseaa"&&(_.innerHTML=jn),nn=c(n),T=p(n,"H2",{"data-svelte-h":!0}),o(T)!=="svelte-r7epx8"&&(T.innerHTML=zn),tn=c(n),P=p(n,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1q9iqwt"&&(P.innerHTML=In),an=c(n),r=p(n,"DIV",{class:!0});var a=b(r);y=p(a,"DIV",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-1llzxwj"&&(y.textContent=Sn),Tn(M.$$.fragment,a),x=p(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-gub1qs"&&(x.textContent=qn),Z=p(a,"PRE",{class:!0});var tt=b(Z);en=Pn(tt,!1),tt.forEach(t),a.forEach(t),sn=c(n),H=p(n,"H2",{"data-svelte-h":!0}),o(H)!=="svelte-883q7w"&&(H.innerHTML=An),pn=c(n),L=p(n,"P",{"data-svelte-h":!0}),o(L)!=="svelte-un6k5"&&(L.innerHTML=Fn),on=c(n),k=p(n,"DIV",{class:!0});var K=b(k);E=p(K,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-1llzxwj"&&(E.textContent=Jn),Tn($.$$.fragment,K),h=p(K,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(h)!=="svelte-1y7wc2y"&&(h.textContent=Qn),G=p(K,"PRE",{class:!0});var at=b(G);ln=Pn(at,!1),at.forEach(t),K.forEach(t),un=c(n),N=p(n,"H2",{"data-svelte-h":!0}),o(N)!=="svelte-1mq7ks8"&&(N.innerHTML=Vn),cn=c(n),O=p(n,"P",{"data-svelte-h":!0}),o(O)!=="svelte-uckdv9"&&(O.innerHTML=Zn),rn=c(n),j=p(n,"OL",{"data-svelte-h":!0}),o(j)!=="svelte-1feghf8"&&(j.innerHTML=Gn),kn=c(n),z=p(n,"P",{"data-svelte-h":!0}),o(z)!=="svelte-bmritv"&&(z.textContent=Rn),mn=c(n),m=p(n,"DIV",{class:!0});var W=b(m);I=p(W,"DIV",{class:!0,"data-svelte-h":!0}),o(I)!=="svelte-1llzxwj"&&(I.textContent=Dn),Tn(S.$$.fragment,W),v=p(W,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1g7s2s4"&&(v.textContent=Kn),R=p(W,"PRE",{class:!0});var et=b(R);dn=Pn(et,!1),et.forEach(t),W.forEach(t),fn=c(n),q=p(n,"H2",{"data-svelte-h":!0}),o(q)!=="svelte-kr2kcl"&&(q.innerHTML=Wn),xn=c(n),A=p(n,"P",{"data-svelte-h":!0}),o(A)!=="svelte-mv54ty"&&(A.innerHTML=Bn),hn=c(n),F=p(n,"OL",{"data-svelte-h":!0}),o(F)!=="svelte-1g8wxoo"&&(F.innerHTML=Un),vn=c(n),J=p(n,"P",{"data-svelte-h":!0}),o(J)!=="svelte-16n1fft"&&(J.textContent=Yn),gn=c(n),d=p(n,"DIV",{class:!0});var B=b(d);Q=p(B,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1llzxwj"&&(Q.textContent=Xn),Tn(V.$$.fragment,B),g=p(B,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(g)!=="svelte-1fba0rr"&&(g.textContent=nt),D=p(B,"PRE",{class:!0});var st=b(D);bn=Pn(st,!1),st.forEach(t),B.forEach(t),this.h()},h(){l(y,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNpdTsuqwjAQ/ZVhcNFCKFV8QMCFK3EhCLqzF4ztKEJNQzJFJeTfTW+9hetihjkzcx4elTEoPZZNRSixrJVzsH2tjAF6MunKQZx9oQsuLSmmPSvLO3WlJP3dFmyJW6thOHTbUOiAQaCJ2KE8erxVKMcCL01dkd304J/pwB+MO9B7xNLt/UwWlnDP6uZBjpOpgImAhYB5+vfUR1y3t+9wh6iZcWzJaeRN1ouFU/rJ2rEDCnzGWLNc4AvlJM/DT3gDixJkbw=="),l(x,"title","Open in our Online Editor"),en.a=null,l(Z,"class","language-js"),l(r,"class","remark-container tip"),l(E,"class","remark-container__title"),l(h,"target","_blank"),l(h,"href","/editor#eNpdTk1rwzAM/StC7JCACWnpNjD0sNPoYTBob/WgXqImgcQxtgItxv99zrIFtoOEnqT3EVBbizJgNdaEEqteew9v9xdrgW5MpvaQ5qCM4sqRZjqydvyuG8ry761iRzw5A+th3kZlIkaBNmGP8hywq1FuBF7HviZ3WMAf05W/Gs9g8UhlpuGTHOxhKNquaclzthOwFfAs4Cn//Voyvk7d/3SnJFpwatnlIdhiUYuX/CfszI4o8JZyPZYC7yi3ZRk/4hfsdmS9"),l(h,"title","Open in our Online Editor"),ln.a=null,l(G,"class","language-js"),l(k,"class","remark-container tip"),l(I,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNpdUMFKxDAQ/ZUweEghlKoIUvCgHmQPLqLerNBsMmqxTUI6ZXct+Xezm7boHhIy89689yYjSOegHEFZjVCCamXfs8f9rXMMd4RG9yy+x8pUpDxKwheSnp7kJ/Ls2K3IIw3esAU4dENlAgQBLtY9lG8jNBrKcwEfttXoV6n4Z7rML8aHInnEY4Zug57dsGLupDwPQ3Oa5Nlu+1x9Na32aHiCKnqNsjnFi9dno8uTXqgzMRPuBiJrJsoat8xLo23HErPOcmvu20Z9c5cnpPnB9RGbNbJp9ZTvhLSknL3jLt2ktDLELwW7/isQQMAuftNVIWAP5UVRhPfwC5a0m7M="),l(v,"title","Open in our Online Editor"),dn.a=null,l(R,"class","language-js"),l(m,"class","remark-container tip"),l(Q,"class","remark-container__title"),l(g,"target","_blank"),l(g,"href","/editor#eNpdUMFKxDAQ/ZUweGghlFTYS8GDCi4eXES9WaGxGd1im4R0yu5a8u9mN21x95CQmffmvTcZQVoLxQi1UQgF1K3se/Z0uLWW4Z5Qq56F91jqkmqHkvCVpKNn+Y1JeuqW5JAGp9kCHLu+1B48BxvqHor3ERoFRc7hy7QK3WMszkyX+cX4WESPcPTQfaJjN0zMnZhnPTSXSV7Mrs/qbdMqhzqJUElvQTajcCXV1WizqOerlM+Eu4HI6ImywR1zUivTscis0szo+7apfxKbRaT5xc0JmzXSafWY74K0pJy9wy7dpPTQGklJLjjLV/9FPHDYh69aCQ4HKK6F8B/+Dwj+nNo="),l(g,"title","Open in our Online Editor"),bn.a=null,l(D,"class","language-js"),l(d,"class","remark-container tip")},m(n,a){e(n,f,a),e(n,U,a),e(n,w,a),e(n,Y,a),e(n,C,a),e(n,X,a),e(n,_,a),e(n,nn,a),e(n,T,a),e(n,tn,a),e(n,P,a),e(n,an,a),e(n,r,a),i(r,y),yn(M,r,null),i(r,x),i(r,Z),en.m(ot,Z),e(n,sn,a),e(n,H,a),e(n,pn,a),e(n,L,a),e(n,on,a),e(n,k,a),i(k,E),yn($,k,null),i(k,h),i(k,G),ln.m(lt,G),e(n,un,a),e(n,N,a),e(n,cn,a),e(n,O,a),e(n,rn,a),e(n,j,a),e(n,kn,a),e(n,z,a),e(n,mn,a),e(n,m,a),i(m,I),yn(S,m,null),i(m,v),i(m,R),dn.m(ut,R),e(n,fn,a),e(n,q,a),e(n,xn,a),e(n,A,a),e(n,hn,a),e(n,F,a),e(n,vn,a),e(n,J,a),e(n,gn,a),e(n,d,a),i(d,Q),yn(V,d,null),i(d,g),i(d,D),bn.m(ct,D),wn=!0},p:rt,i(n){wn||(Mn(M.$$.fragment,n),Mn($.$$.fragment,n),Mn(S.$$.fragment,n),Mn(V.$$.fragment,n),wn=!0)},o(n){Hn(M.$$.fragment,n),Hn($.$$.fragment,n),Hn(S.$$.fragment,n),Hn(V.$$.fragment,n),wn=!1},d(n){n&&(t(f),t(U),t(w),t(Y),t(C),t(X),t(_),t(nn),t(T),t(tn),t(P),t(an),t(r),t(sn),t(H),t(pn),t(L),t(on),t(k),t(un),t(N),t(cn),t(O),t(rn),t(j),t(kn),t(z),t(mn),t(m),t(fn),t(q),t(xn),t(A),t(hn),t(F),t(vn),t(J),t(gn),t(d)),Ln(M),Ln($),Ln(S),Ln(V)}}}class vt extends kt{constructor(f){super(),mt(this,f,null,dt,it,{})}}export{vt as component};
