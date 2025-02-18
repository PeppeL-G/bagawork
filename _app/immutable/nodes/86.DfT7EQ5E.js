import{s as le,n as ce}from"../chunks/scheduler.B0TnBjPs.js";import{S as ie,i as ue,e as a,s as c,c as lt,H as ct,a as p,g as l,b as i,d as r,f as it,n as ut,h as n,o,j as s,p as u,m as rt,t as dt,k as kt,l as gt}from"../chunks/index.BXVnRmkj.js";import{V as mt}from"../chunks/ViewApp.qg7AIhJt.js";function re(Yn){let v,rn="2. Styling",jt,E,dn="This tutorial will teach you how to style components configuration.",It,A,kn="Introduction",Mt,j,gn="There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.",Lt,I,mn="Background color",Ot,M,fn="As you should know by now, you can use the configuration method <code>backgroundColor()</code> to give a component a background color. Pass it the color as the name in English, e.g. <code>red</code>.",Tt,d,L,hn="Example",O,w,xn="Open in Online Editor",ft,Rt,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,T,vn="Padding",$t,R,wn="Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow <code>Text</code> component to be a little bit taller than it is.",Dt,k,H,bn="Example",$,b,Cn="Open in Online Editor",ht,Bt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Gt,D,yn="You can make it taller by giving it a <code>grow()</code>, but it&#39;s also possible to make it taller by giving it some padding on the top side and bottom side. <em>Padding</em> is simply some amount of space between the components edge and its content. Call the configuration method <code>padding()</code> to give the component some padding, and pass it:",qt,B,_n="<li>A number indicating how much padding you want the component to have</li> <li>A string indicating which sides of the component the padding should be added to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the padding will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the padding will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the padding will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the padding will be added to the right side</li></ul></li>",zt,G,Pn="If you don't specify the second argument (the string), the padding will be added to all sides.",Vt,g,q,Sn="Example",z,C,En="Open in Online Editor",xt,Qt,ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have some padding above and below me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ut,V,An="Rounded corners",Zt,Q,jn="You can instruct GUI components to have round corners by calling the configuration method <code>corderRadius()</code>. Pass it a number indicating how big the radius of the corner should be. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of <code>0</code>, which means not being round at all.",Wt,m,U,In="Example",Z,y,Mn="Open in Online Editor",vt,Jt,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kt,W,Ln="One thing you need to watch out for when using <code>cornerRadius()</code> is that anything that is placed in the corner of the component might not be shown properly. In the example above, notice how the <code>M</code> letters in the upper left corner isn&#39;t fully shown. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.",Nt,f,J,On="Example",K,_,Tn="Open in Online Editor",wt,Ft,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Xt,N,Rn="Border",Yt,F,Hn="It is also possible to add borders around the component. To do that, call the configuration method <code>border()</code>, and pass it:",tn,X,$n="<li>A number representing the thickness of the border, e.g. <code>5</code></li> <li>The color of the border, expressed as the name in English, e.g. <code>&quot;red&quot;</code></li> <li>A string indicating which sides of the component the the border should be applied to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the border will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the border will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the border will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the border will be added to the right side</li></ul></li>",nn,Y,Dn="If you don't specify the third argument, the border will be applied to all sides.",en,h,tt,Bn="Example",nt,P,Gn="Open in Online Editor",bt,sn,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Some text</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,an,et,qn="If you specify a corner radius, the border will be round at the corners.",pn,x,st,zn="Example",at,S,Vn="Open in Online Editor",Ct,on,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text
				<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Some text</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ln,pt,Qn="That's it!",cn,ot,Un="Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages.",un;return O=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor('yellow').text(\`I am yellow!\`)
	}
	
}`,x:150,y:200}]}}}),$=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').text(\`I am yellow!\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),z=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').padding(10, \`tb\`).text(\`I have some padding above and below me!\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),Z=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').cornerRadius(5).text(\`My corners are rounded! Cool, right? Please be impressed! xD\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),K=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').padding(1.5).cornerRadius(5).text(\`My corners are rounded! Cool, right? Please be impressed! xD\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),nt=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text
				.backgroundColor('yellow')
				.border(3, \`red\`)
				.text(\`Some text\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),at=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text
				.backgroundColor('yellow')
				.cornerRadius(5)
				.border(3, \`red\`)
				.text(\`Some text\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),{c(){v=a("h1"),v.textContent=rn,jt=c(),E=a("p"),E.textContent=dn,It=c(),A=a("h2"),A.textContent=kn,Mt=c(),j=a("p"),j.textContent=gn,Lt=c(),I=a("h2"),I.textContent=mn,Ot=c(),M=a("p"),M.innerHTML=fn,Tt=c(),d=a("div"),L=a("div"),L.textContent=hn,lt(O.$$.fragment),w=a("a"),w.textContent=xn,ft=a("pre"),Rt=new ct(!1),Ht=c(),T=a("h2"),T.textContent=vn,$t=c(),R=a("p"),R.innerHTML=wn,Dt=c(),k=a("div"),H=a("div"),H.textContent=bn,lt($.$$.fragment),b=a("a"),b.textContent=Cn,ht=a("pre"),Bt=new ct(!1),Gt=c(),D=a("p"),D.innerHTML=yn,qt=c(),B=a("ol"),B.innerHTML=_n,zt=c(),G=a("p"),G.textContent=Pn,Vt=c(),g=a("div"),q=a("div"),q.textContent=Sn,lt(z.$$.fragment),C=a("a"),C.textContent=En,xt=a("pre"),Qt=new ct(!1),Ut=c(),V=a("h2"),V.textContent=An,Zt=c(),Q=a("p"),Q.innerHTML=jn,Wt=c(),m=a("div"),U=a("div"),U.textContent=In,lt(Z.$$.fragment),y=a("a"),y.textContent=Mn,vt=a("pre"),Jt=new ct(!1),Kt=c(),W=a("p"),W.innerHTML=Ln,Nt=c(),f=a("div"),J=a("div"),J.textContent=On,lt(K.$$.fragment),_=a("a"),_.textContent=Tn,wt=a("pre"),Ft=new ct(!1),Xt=c(),N=a("h2"),N.textContent=Rn,Yt=c(),F=a("p"),F.innerHTML=Hn,tn=c(),X=a("ol"),X.innerHTML=$n,nn=c(),Y=a("p"),Y.textContent=Dn,en=c(),h=a("div"),tt=a("div"),tt.textContent=Bn,lt(nt.$$.fragment),P=a("a"),P.textContent=Gn,bt=a("pre"),sn=new ct(!1),an=c(),et=a("p"),et.textContent=qn,pn=c(),x=a("div"),st=a("div"),st.textContent=zn,lt(at.$$.fragment),S=a("a"),S.textContent=Vn,Ct=a("pre"),on=new ct(!1),ln=c(),pt=a("h2"),pt.textContent=Qn,cn=c(),ot=a("p"),ot.textContent=Un,this.h()},l(t){v=p(t,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-12scns6"&&(v.textContent=rn),jt=i(t),E=p(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-1f462wa"&&(E.textContent=dn),It=i(t),A=p(t,"H2",{"data-svelte-h":!0}),l(A)!=="svelte-1ukekoe"&&(A.textContent=kn),Mt=i(t),j=p(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1tpunnt"&&(j.textContent=gn),Lt=i(t),I=p(t,"H2",{"data-svelte-h":!0}),l(I)!=="svelte-okr2zh"&&(I.textContent=mn),Ot=i(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-y3dkr8"&&(M.innerHTML=fn),Tt=i(t),d=p(t,"DIV",{class:!0});var e=r(d);L=p(e,"DIV",{class:!0,"data-svelte-h":!0}),l(L)!=="svelte-1llzxwj"&&(L.textContent=hn),it(O.$$.fragment,e),w=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-4gtdgz"&&(w.textContent=xn),ft=p(e,"PRE",{class:!0});var Zn=r(ft);Rt=ut(Zn,!1),Zn.forEach(n),e.forEach(n),Ht=i(t),T=p(t,"H2",{"data-svelte-h":!0}),l(T)!=="svelte-1m54nt"&&(T.textContent=vn),$t=i(t),R=p(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-14oozwq"&&(R.innerHTML=wn),Dt=i(t),k=p(t,"DIV",{class:!0});var yt=r(k);H=p(yt,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1llzxwj"&&(H.textContent=bn),it($.$$.fragment,yt),b=p(yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-5v75rt"&&(b.textContent=Cn),ht=p(yt,"PRE",{class:!0});var Wn=r(ht);Bt=ut(Wn,!1),Wn.forEach(n),yt.forEach(n),Gt=i(t),D=p(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-1ogf8hq"&&(D.innerHTML=yn),qt=i(t),B=p(t,"OL",{"data-svelte-h":!0}),l(B)!=="svelte-155j3vg"&&(B.innerHTML=_n),zt=i(t),G=p(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1tuttrr"&&(G.textContent=Pn),Vt=i(t),g=p(t,"DIV",{class:!0});var _t=r(g);q=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1llzxwj"&&(q.textContent=Sn),it(z.$$.fragment,_t),C=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-1henh25"&&(C.textContent=En),xt=p(_t,"PRE",{class:!0});var Jn=r(xt);Qt=ut(Jn,!1),Jn.forEach(n),_t.forEach(n),Ut=i(t),V=p(t,"H2",{"data-svelte-h":!0}),l(V)!=="svelte-1nudzpv"&&(V.textContent=An),Zt=i(t),Q=p(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-10d9euu"&&(Q.innerHTML=jn),Wt=i(t),m=p(t,"DIV",{class:!0});var Pt=r(m);U=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),l(U)!=="svelte-1llzxwj"&&(U.textContent=In),it(Z.$$.fragment,Pt),y=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-1igt3je"&&(y.textContent=Mn),vt=p(Pt,"PRE",{class:!0});var Kn=r(vt);Jt=ut(Kn,!1),Kn.forEach(n),Pt.forEach(n),Kt=i(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-mv03z9"&&(W.innerHTML=Ln),Nt=i(t),f=p(t,"DIV",{class:!0});var St=r(f);J=p(St,"DIV",{class:!0,"data-svelte-h":!0}),l(J)!=="svelte-1llzxwj"&&(J.textContent=On),it(K.$$.fragment,St),_=p(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-1yk7drh"&&(_.textContent=Tn),wt=p(St,"PRE",{class:!0});var Nn=r(wt);Ft=ut(Nn,!1),Nn.forEach(n),St.forEach(n),Xt=i(t),N=p(t,"H2",{"data-svelte-h":!0}),l(N)!=="svelte-10z3ctc"&&(N.textContent=Rn),Yt=i(t),F=p(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-h2whaf"&&(F.innerHTML=Hn),tn=i(t),X=p(t,"OL",{"data-svelte-h":!0}),l(X)!=="svelte-1jqfz0l"&&(X.innerHTML=$n),nn=i(t),Y=p(t,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-1m3bip9"&&(Y.textContent=Dn),en=i(t),h=p(t,"DIV",{class:!0});var Et=r(h);tt=p(Et,"DIV",{class:!0,"data-svelte-h":!0}),l(tt)!=="svelte-1llzxwj"&&(tt.textContent=Bn),it(nt.$$.fragment,Et),P=p(Et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-1383h4u"&&(P.textContent=Gn),bt=p(Et,"PRE",{class:!0});var Fn=r(bt);sn=ut(Fn,!1),Fn.forEach(n),Et.forEach(n),an=i(t),et=p(t,"P",{"data-svelte-h":!0}),l(et)!=="svelte-1l5ispr"&&(et.textContent=qn),pn=i(t),x=p(t,"DIV",{class:!0});var At=r(x);st=p(At,"DIV",{class:!0,"data-svelte-h":!0}),l(st)!=="svelte-1llzxwj"&&(st.textContent=zn),it(at.$$.fragment,At),S=p(At,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-1sp7f2h"&&(S.textContent=Vn),Ct=p(At,"PRE",{class:!0});var Xn=r(Ct);on=ut(Xn,!1),Xn.forEach(n),At.forEach(n),ln=i(t),pt=p(t,"H2",{"data-svelte-h":!0}),l(pt)!=="svelte-p2uhy5"&&(pt.textContent=Qn),cn=i(t),ot=p(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-1shx17i"&&(ot.textContent=Un),this.h()},h(){o(L,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNpdjsEKwjAQRH8l7qUtlFIFL7mJB+lBEPRmBWOzlmJMQppiS8i/m1op6G1nZnffOGBaA3VQKY5AoRKsbcl+2GhNsLcoeUvC7EpZ2sogs3i0zNgDqzFOPm5pDdrOSDIHo+tL6cGnoINugZ4dNBzoMoW7EhxNMYkf6Hw/g0cxMWb6rmv+uaewnt1Y9aiN6iTfKqFMHA0ohHpFSWZDHF8Lwp5k8hbX5NtwfOwhhT6UWecpDEBXee4v/g1UaGJN"),o(w,"title","Open in our Online Editor"),Rt.a=null,o(ft,"class","language-js"),o(d,"class","remark-container tip"),o(H,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNptj81qwzAQhF9F2UssEMYt9KJb6SHkUChNb1XBqrRJTBVJSDKJMXr3yHVr6M9tZ4bZb3cE6T3wEZTTCByUkTGSx+Hee4KXhFZHUuZRWJFUQJlwl2RIT/KAFf10RQqY+mDJEkxuFjZDZuCLjsBfR+g08BsGe2c0hu0sfkCX/gKexMxY6Ju++819dudYv0v1cQiut/rBGReq1nQnbGmtjp3RAW01V0TaeamQfauXgvrTXQ9ojDuvaZ1KXLVbIk9k9lYtZf9tol8/T6dmYHAp7901DAbgt02T3/IV2vmBOQ=="),o(b,"title","Open in our Online Editor"),Bt.a=null,o(ht,"class","language-js"),o(k,"class","remark-container tip"),o(q,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNptkE1LxDAQhv9KnMu2EEpX8NKbeJA9COJ6s0KnydgtpklIUndLyX83ddeCH7e8b/LkYWYGtBaqGYSRBBUIhd6zh+nWWkanQFp6ls5zresgHGGgfUAXHrGjLP9q6+AojE6z9WJpY60jRA42ZQ/Vywy9hGrL4c0oSW53Dj+kK7+Kl3B2rPb7sf/tfTJHX7Qo3jtnRi3vjDIua1Q/UJMX4tAr6UhnZ6QOe4uC+Hd6Tqo/7GYipcxxkxcWpex1l21LzprQpv9CArJmxw74QcybgdjlDcPWpAq1ZC0lmg101eT8P21+WdAyVwQOp7SLm5LDBNV1WcbX+AnygpBi"),o(C,"title","Open in our Online Editor"),Qt.a=null,o(xt,"class","language-js"),o(g,"class","remark-container tip"),o(U,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNptkE1rwzAMhv+Kp0sTMCEb9JLLGB2MHQql3W0ZxI211My1jezQhOD/vqTZAvu4+ZX08MgaQDgHxQC1lQgF1Fp4z7b9g3MMu4BGeja+h9KUoSYUAQ9BUNiJBpP0Wi0DYWjJsKUxVWNpIkQObsweitcBlITilsO71RLpeQ4/pAu/iKcwOxb7U6t+e/f24rOjqD8asq2RG6stJZVWZ6zSrD4pLQlNMiNlODhRI/9OL6PqD7vqUWt7WY20JYO0F1K1PlmnWRjHk2rbs7nhmSBkVxLlDdtYqzkj1ZzCPdtpFB7ZEZk6O0Lvp4nusUr5f5ukXzebvhqBQzeeZ51z6KG4y/P4Fj8BcAiX1g=="),o(y,"title","Open in our Online Editor"),Jt.a=null,o(vt,"class","language-js"),o(m,"class","remark-container tip"),o(J,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNptkMFqwzAMhl/F06UJmJAOeslljA7GDoXS7rYM4sZaaubaRnZoQ8i7z2m2wLbe/En+9dnqQTgHRQ+1lQgF1Fp4zzbdo3MMLwGN9Cye+9KUoSYUAfdBUNiKBpP0Wi0DYWjJsLkxVofSDDBwcJE9FG89KAnFksOH1RLpZYJf0jk/i0eYHLP9uVV/vTt79tlB1J8N2dbItdWWkkqrE1ZpVh+VloQmmSJl2DtRI/+h16j6l110qLU9L9LMCSmVaZJltoqjLBmknZCq9UnkELNJtenY1PBMELLrGJR3bG2t5oxUcwwPbKtReGQHZOrkCL0fb1yeqpTfelb6vcDx3wNwuMRdrXIOHRT3eT68D1/5k5vA"),o(_,"title","Open in our Online Editor"),Ft.a=null,o(wt,"class","language-js"),o(f,"class","remark-container tip"),o(tt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNptkE9rwzAMxb+K0aUxmJJt7OLb2GHsUCjLbvPAnq12Ya5tHIc2BH/3Ocsauj+39/Qk/ZBGUCEAH0F7g8BBW9V1ZDPchUDwlNCZjhQ9CieSjqgSNknFtFV7rOhXVaSIqY+OLMFUzcJlyAxC8R3wlxFaA/yKwc5bg/FxNj+gy/wCnszMWOgPffub++SP3fpN6Y999L0z9976WEnbHlDStX5vrYnoqnlEpCYojezsngvqrEX6s2U1oLX+uKKXPT6WA6obRmREIy+jVLZVsvEHJJOUlP1Hpd//mc7KwOBUXnFbMxiAX9d1fs2fPAGSMw=="),o(P,"title","Open in our Online Editor"),sn.a=null,o(bt,"class","language-js"),o(h,"class","remark-container tip"),o(st,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNptkE9LxDAQxb9KmMumEJaq7KU38SAeBNl6M0KyybgWs0lIUnZLyXc3tW5Z/9zem5fJb2ZGkN5DM4JyGqEBZWSM5HG49Z7gKaHVkRQ9csuTCigTtkmG9CT3SKuvKk8BUx8sWYKpmrnNkBn44iM0LyN0GporBm/OaAwPs/kBXfoX8GRmxkK/77vf3K07xvVOqo99cL3Vd864QIXpDiiqtXrvjA5o6dzCU+ulQnZ2zwV11jz9+WU1oDHuuKou3igXLIat1F0f6eYy2blQVqM3jIiAWlxGqXCoaN0BySRFxf6bp/q+3LRwBgancqRNzWCA5rqu82v+BOO7m+I="),o(S,"title","Open in our Online Editor"),on.a=null,o(Ct,"class","language-js"),o(x,"class","remark-container tip")},m(t,e){s(t,v,e),s(t,jt,e),s(t,E,e),s(t,It,e),s(t,A,e),s(t,Mt,e),s(t,j,e),s(t,Lt,e),s(t,I,e),s(t,Ot,e),s(t,M,e),s(t,Tt,e),s(t,d,e),u(d,L),rt(O,d,null),u(d,w),u(d,ft),Rt.m(te,ft),s(t,Ht,e),s(t,T,e),s(t,$t,e),s(t,R,e),s(t,Dt,e),s(t,k,e),u(k,H),rt($,k,null),u(k,b),u(k,ht),Bt.m(ne,ht),s(t,Gt,e),s(t,D,e),s(t,qt,e),s(t,B,e),s(t,zt,e),s(t,G,e),s(t,Vt,e),s(t,g,e),u(g,q),rt(z,g,null),u(g,C),u(g,xt),Qt.m(ee,xt),s(t,Ut,e),s(t,V,e),s(t,Zt,e),s(t,Q,e),s(t,Wt,e),s(t,m,e),u(m,U),rt(Z,m,null),u(m,y),u(m,vt),Jt.m(se,vt),s(t,Kt,e),s(t,W,e),s(t,Nt,e),s(t,f,e),u(f,J),rt(K,f,null),u(f,_),u(f,wt),Ft.m(ae,wt),s(t,Xt,e),s(t,N,e),s(t,Yt,e),s(t,F,e),s(t,tn,e),s(t,X,e),s(t,nn,e),s(t,Y,e),s(t,en,e),s(t,h,e),u(h,tt),rt(nt,h,null),u(h,P),u(h,bt),sn.m(pe,bt),s(t,an,e),s(t,et,e),s(t,pn,e),s(t,x,e),u(x,st),rt(at,x,null),u(x,S),u(x,Ct),on.m(oe,Ct),s(t,ln,e),s(t,pt,e),s(t,cn,e),s(t,ot,e),un=!0},p:ce,i(t){un||(dt(O.$$.fragment,t),dt($.$$.fragment,t),dt(z.$$.fragment,t),dt(Z.$$.fragment,t),dt(K.$$.fragment,t),dt(nt.$$.fragment,t),dt(at.$$.fragment,t),un=!0)},o(t){kt(O.$$.fragment,t),kt($.$$.fragment,t),kt(z.$$.fragment,t),kt(Z.$$.fragment,t),kt(K.$$.fragment,t),kt(nt.$$.fragment,t),kt(at.$$.fragment,t),un=!1},d(t){t&&(n(v),n(jt),n(E),n(It),n(A),n(Mt),n(j),n(Lt),n(I),n(Ot),n(M),n(Tt),n(d),n(Ht),n(T),n($t),n(R),n(Dt),n(k),n(Gt),n(D),n(qt),n(B),n(zt),n(G),n(Vt),n(g),n(Ut),n(V),n(Zt),n(Q),n(Wt),n(m),n(Kt),n(W),n(Nt),n(f),n(Xt),n(N),n(Yt),n(F),n(tn),n(X),n(nn),n(Y),n(en),n(h),n(an),n(et),n(pn),n(x),n(ln),n(pt),n(cn),n(ot)),gt(O),gt($),gt(z),gt(Z),gt(K),gt(nt),gt(at)}}}class me extends ie{constructor(v){super(),ue(this,v,null,re,le,{})}}export{me as component};
