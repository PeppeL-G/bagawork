import{s as ce,n as ie}from"../chunks/scheduler.B0TnBjPs.js";import{S as ue,i as re,e as a,s as c,c as lt,H as ct,a as p,g as l,b as i,d as r,f as it,n as ut,h as n,o,j as s,p as u,m as rt,t as dt,k as kt,l as gt}from"../chunks/index.Cnh3HYw3.js";import{V as mt}from"../chunks/ViewApp.9sx5twVU.js";function de(te){let v,dn="2. Styling",Et,S,kn="This tutorial will teach you how to style components configuration.",Tt,E,gn="Introduction",Mt,T,mn="There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.",Ot,M,fn="Background color",It,O,hn="As you should know by now, you can use the configuration method <code>backgroundColor()</code> to give a component a background color. Pass it the color as the name in English, e.g. <code>red</code>.",Lt,d,I,xn="Example",L,b,vn="Open in Online Editor",ft,At,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jt,A,bn="Padding",Ht,j,wn="Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow <code>Text</code> component to be a little bit taller than it is.",Rt,H,$t,k,Cn="Open in Online Editor",Dt,R,Gt,ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Bt,$,yn="You can make it taller by giving it a <code>size()</code>, but it&#39;s also possible to make it taller by giving it some padding on the top side and bottom side. <em>Padding</em> is simply some amount of space between the components edge and its content. Call the configuration method <code>padding()</code> to give the component some padding, and pass it:",Zt,D,_n="<li>The number of millimeters padding you want the component to have</li> <li>A string indicating which sides of the component the padding should be added to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the padding will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the padding will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the padding will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the padding will be added to the right side</li></ul></li>",zt,G,Pn="If you don't specify the second argument (the string), the padding will be added to all sides.",Jt,g,B,Sn="Example",Z,w,En="Open in Online Editor",ht,qt,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have 10mm padding above and below me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kt,z,Tn="Rounded corners",Wt,J,Mn="You can instruct GUI components to have round corners by calling the configuration method <code>corderRadius()</code>. Pass it the radius of the corner in millimeters. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of <code>0</code>, which means not being round at all.",Ut,m,q,On="Example",K,C,In="Open in Online Editor",xt,Vt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,W,Ln="One thing you need to watch out for when using <code>cornerRadius()</code> is that anything that is placed in the corner of the component might not be shown properly. In the example above, try risizing the app screen, and place the <code>M</code> character in the beginning of the text in the upper left corner, and notice how it&#39;s not displayed properly. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.",Nt,U,An="Try resizing the app screen in the example below, and notive how the <code>M</code> character never is placed in the upper left corner, but always entirely visible.",Qt,f,V,jn="Example",F,y,Hn="Open in Online Editor",vt,Xt,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Yt,N,Rn="Border",tn,Q,$n="It is also possible to add borders around the component. To do that, call the confiruation method <code>border()</code>, and pass it:",nn,X,Dn="<li>The thickness of the border, expressed as number of millimeters, e.g. <code>5</code></li> <li>The color of the border, expressed as the name in English, e.g. <code>&quot;red&quot;</code></li> <li>A string indicating which sides of the component the the border should be applied to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the border will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the border will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the border will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the border will be added to the right side</li></ul></li>",en,Y,Gn="If you don't specify the third argument, the border will be applied to all sides.",sn,h,tt,Bn="Example",nt,_,Zn="Open in Online Editor",bt,an,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,pn,et,zn="If you specify a corner radius, the border will be round at the corners.",on,x,st,Jn="Example",at,P,qn="Open in Online Editor",wt,ln,le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,cn,pt,Kn="That's it!",un,ot,Wn="Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages.",rn;return L=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor('yellow').text(\`I am yellow!\`)
	}
	
}`,x:150,y:200}]}}}),H=new mt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),Z=new mt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').padding(10, \`tb\`).text(\`I have 10mm padding above and below me!\`),
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
			Text.backgroundColor('yellow').cornerRadius(5).text(\`My corners are rounded! Cool, right? Please be impressed! xD\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),F=new mt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){v=a("h1"),v.textContent=dn,Et=c(),S=a("p"),S.textContent=kn,Tt=c(),E=a("h2"),E.textContent=gn,Mt=c(),T=a("p"),T.textContent=mn,Ot=c(),M=a("h2"),M.textContent=fn,It=c(),O=a("p"),O.innerHTML=hn,Lt=c(),d=a("div"),I=a("div"),I.textContent=xn,lt(L.$$.fragment),b=a("a"),b.textContent=vn,ft=a("pre"),At=new ct(!1),jt=c(),A=a("h2"),A.textContent=bn,Ht=c(),j=a("p"),j.innerHTML=wn,Rt=c(),lt(H.$$.fragment),$t=c(),k=a("a"),k.textContent=Cn,Dt=c(),R=a("pre"),Gt=new ct(!1),Bt=c(),$=a("p"),$.innerHTML=yn,Zt=c(),D=a("ol"),D.innerHTML=_n,zt=c(),G=a("p"),G.textContent=Pn,Jt=c(),g=a("div"),B=a("div"),B.textContent=Sn,lt(Z.$$.fragment),w=a("a"),w.textContent=En,ht=a("pre"),qt=new ct(!1),Kt=c(),z=a("h2"),z.textContent=Tn,Wt=c(),J=a("p"),J.innerHTML=Mn,Ut=c(),m=a("div"),q=a("div"),q.textContent=On,lt(K.$$.fragment),C=a("a"),C.textContent=In,xt=a("pre"),Vt=new ct(!1),Ft=c(),W=a("p"),W.innerHTML=Ln,Nt=c(),U=a("p"),U.innerHTML=An,Qt=c(),f=a("div"),V=a("div"),V.textContent=jn,lt(F.$$.fragment),y=a("a"),y.textContent=Hn,vt=a("pre"),Xt=new ct(!1),Yt=c(),N=a("h2"),N.textContent=Rn,tn=c(),Q=a("p"),Q.innerHTML=$n,nn=c(),X=a("ol"),X.innerHTML=Dn,en=c(),Y=a("p"),Y.textContent=Gn,sn=c(),h=a("div"),tt=a("div"),tt.textContent=Bn,lt(nt.$$.fragment),_=a("a"),_.textContent=Zn,bt=a("pre"),an=new ct(!1),pn=c(),et=a("p"),et.textContent=zn,on=c(),x=a("div"),st=a("div"),st.textContent=Jn,lt(at.$$.fragment),P=a("a"),P.textContent=qn,wt=a("pre"),ln=new ct(!1),cn=c(),pt=a("h2"),pt.textContent=Kn,un=c(),ot=a("p"),ot.textContent=Wn,this.h()},l(t){v=p(t,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-12scns6"&&(v.textContent=dn),Et=i(t),S=p(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1f462wa"&&(S.textContent=kn),Tt=i(t),E=p(t,"H2",{"data-svelte-h":!0}),l(E)!=="svelte-1ukekoe"&&(E.textContent=gn),Mt=i(t),T=p(t,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1tpunnt"&&(T.textContent=mn),Ot=i(t),M=p(t,"H2",{"data-svelte-h":!0}),l(M)!=="svelte-okr2zh"&&(M.textContent=fn),It=i(t),O=p(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-y3dkr8"&&(O.innerHTML=hn),Lt=i(t),d=p(t,"DIV",{class:!0});var e=r(d);I=p(e,"DIV",{class:!0,"data-svelte-h":!0}),l(I)!=="svelte-1llzxwj"&&(I.textContent=xn),it(L.$$.fragment,e),b=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-4gtdgz"&&(b.textContent=vn),ft=p(e,"PRE",{class:!0});var Un=r(ft);At=ut(Un,!1),Un.forEach(n),e.forEach(n),jt=i(t),A=p(t,"H2",{"data-svelte-h":!0}),l(A)!=="svelte-1m54nt"&&(A.textContent=bn),Ht=i(t),j=p(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-14oozwq"&&(j.innerHTML=wn),Rt=i(t),it(H.$$.fragment,t),$t=i(t),k=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(k)!=="svelte-5v75rt"&&(k.textContent=Cn),Dt=i(t),R=p(t,"PRE",{class:!0});var Vn=r(R);Gt=ut(Vn,!1),Vn.forEach(n),Bt=i(t),$=p(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-zr0z4w"&&($.innerHTML=yn),Zt=i(t),D=p(t,"OL",{"data-svelte-h":!0}),l(D)!=="svelte-12xv6k5"&&(D.innerHTML=_n),zt=i(t),G=p(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1tuttrr"&&(G.textContent=Pn),Jt=i(t),g=p(t,"DIV",{class:!0});var Ct=r(g);B=p(Ct,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1llzxwj"&&(B.textContent=Sn),it(Z.$$.fragment,Ct),w=p(Ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-1edzs7u"&&(w.textContent=En),ht=p(Ct,"PRE",{class:!0});var Fn=r(ht);qt=ut(Fn,!1),Fn.forEach(n),Ct.forEach(n),Kt=i(t),z=p(t,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-1nudzpv"&&(z.textContent=Tn),Wt=i(t),J=p(t,"P",{"data-svelte-h":!0}),l(J)!=="svelte-dx1kac"&&(J.innerHTML=Mn),Ut=i(t),m=p(t,"DIV",{class:!0});var yt=r(m);q=p(yt,"DIV",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1llzxwj"&&(q.textContent=On),it(K.$$.fragment,yt),C=p(yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-1igt3je"&&(C.textContent=In),xt=p(yt,"PRE",{class:!0});var Nn=r(xt);Vt=ut(Nn,!1),Nn.forEach(n),yt.forEach(n),Ft=i(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-ed9sne"&&(W.innerHTML=Ln),Nt=i(t),U=p(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1dnamdm"&&(U.innerHTML=An),Qt=i(t),f=p(t,"DIV",{class:!0});var _t=r(f);V=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-1llzxwj"&&(V.textContent=jn),it(F.$$.fragment,_t),y=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-1yk7drh"&&(y.textContent=Hn),vt=p(_t,"PRE",{class:!0});var Qn=r(vt);Xt=ut(Qn,!1),Qn.forEach(n),_t.forEach(n),Yt=i(t),N=p(t,"H2",{"data-svelte-h":!0}),l(N)!=="svelte-10z3ctc"&&(N.textContent=Rn),tn=i(t),Q=p(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-11pbqge"&&(Q.innerHTML=$n),nn=i(t),X=p(t,"OL",{"data-svelte-h":!0}),l(X)!=="svelte-j6kbon"&&(X.innerHTML=Dn),en=i(t),Y=p(t,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-1m3bip9"&&(Y.textContent=Gn),sn=i(t),h=p(t,"DIV",{class:!0});var Pt=r(h);tt=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),l(tt)!=="svelte-1llzxwj"&&(tt.textContent=Bn),it(nt.$$.fragment,Pt),_=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-1383h4u"&&(_.textContent=Zn),bt=p(Pt,"PRE",{class:!0});var Xn=r(bt);an=ut(Xn,!1),Xn.forEach(n),Pt.forEach(n),pn=i(t),et=p(t,"P",{"data-svelte-h":!0}),l(et)!=="svelte-1l5ispr"&&(et.textContent=zn),on=i(t),x=p(t,"DIV",{class:!0});var St=r(x);st=p(St,"DIV",{class:!0,"data-svelte-h":!0}),l(st)!=="svelte-1llzxwj"&&(st.textContent=Jn),it(at.$$.fragment,St),P=p(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-1sp7f2h"&&(P.textContent=qn),wt=p(St,"PRE",{class:!0});var Yn=r(wt);ln=ut(Yn,!1),Yn.forEach(n),St.forEach(n),cn=i(t),pt=p(t,"H2",{"data-svelte-h":!0}),l(pt)!=="svelte-p2uhy5"&&(pt.textContent=Kn),un=i(t),ot=p(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-1shx17i"&&(ot.textContent=Wn),this.h()},h(){o(I,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNpdjsEKwjAQRH8l7qUtlFIFL7mJB+lBEPRmBWOzlmJMQppiS8i/m1op6G1nZnffOGBaA3VQKY5AoRKsbcl+2GhNsLcoeUvC7EpZ2sogs3i0zNgDqzFOPm5pDdrOSDIHo+tL6cGnoINugZ4dNBzoMoW7EhxNMYkf6Hw/g0cxMWb6rmv+uaewnt1Y9aiN6iTfKqFMHA0ohHpFSWZDHF8Lwp5k8hbX5NtwfOwhhT6UWecpDEBXee4v/g1UaGJN"),o(b,"title","Open in our Online Editor"),At.a=null,o(ft,"class","language-js"),o(d,"class","remark-container tip"),o(k,"target","_blank"),o(k,"href","/editor#eNptj81qwzAQhF9F2UssEMYt9KJb6SHkUChNb1XBqrRJTBVJSDKJMXr3yHVr6M9tZ4bZb3cE6T3wEZTTCByUkTGSx+Hee4KXhFZHUuZRWJFUQJlwl2RIT/KAFf10RQqY+mDJEkxuFjZDZuCLjsBfR+g08BsGe2c0hu0sfkCX/gKexMxY6Ju++819dudYv0v1cQiut/rBGReq1nQnbGmtjp3RAW01V0TaeamQfauXgvrTXQ9ojDuvaZ1KXLVbIk9k9lYtZf9tol8/T6dmYHAp7901DAbgt02T3/IV2vmBOQ=="),o(k,"title","Open in our Online Editor"),Gt.a=null,o(R,"class","language-js"),o(B,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNptkE1LxDAQhv/KOJdtIZRW8NKbeJA9COJ6s0LTZOwW0ySkqbul5L+b2rXgxy3vmzx5mJmRW4vljMJIwhKF4sMAD9OttUBnT1oOEM9zpSsvHHFPB8+df+QtJelXW3lHfnQatoulDZUOGBjamAcsX2bsJJYFwzejJLn9Gn5IN34TL2F1bPb7sfvtfTKnIWu4eG+dGbW8M8q4pFZdT3WaiWOnpCOdrEjlD5YLYt/pOar+sLuJlDKnXZpZLmWn26TIGdS+if/5CCT1Ho78g6DI+x4ub4A3JlZcS2go0tDTVZ2y/7TpZUHLXAEZnuMubnKGE5bXeR5ewyfJEY/p"),o(w,"title","Open in our Online Editor"),qt.a=null,o(ht,"class","language-js"),o(g,"class","remark-container tip"),o(q,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNptkE1rwzAMhv+Kp0sTMCEb9JLLGB2MHQql3W0ZxI211My1jezQhOD/vqTZAvu4+ZX08MgaQDgHxQC1lQgF1Fp4z7b9g3MMu4BGeja+h9KUoSYUAQ9BUNiJBpP0Wi0DYWjJsKUxVWNpIkQObsweitcBlITilsO71RLpeQ4/pAu/iKcwOxb7U6t+e/f24rOjqD8asq2RG6stJZVWZ6zSrD4pLQlNMiNlODhRI/9OL6PqD7vqUWt7WY20JYO0F1K1PlmnWRjHk2rbs7nhmSBkVxLlDdtYqzkj1ZzCPdtpFB7ZEZk6O0Lvp4nusUr5f5ukXzebvhqBQzeeZ51z6KG4y/P4Fj8BcAiX1g=="),o(C,"title","Open in our Online Editor"),Vt.a=null,o(xt,"class","language-js"),o(m,"class","remark-container tip"),o(V,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNptkMFqwzAMhl/F06UJmJAOeslljA7GDoXS7rYM4sZaaubaRnZoQ8i7z2m2wLbe/En+9dnqQTgHRQ+1lQgF1Fp4zzbdo3MMLwGN9Cye+9KUoSYUAfdBUNiKBpP0Wi0DYWjJsLkxVofSDDBwcJE9FG89KAnFksOH1RLpZYJf0jk/i0eYHLP9uVV/vTt79tlB1J8N2dbItdWWkkqrE1ZpVh+VloQmmSJl2DtRI/+h16j6l110qLU9L9LMCSmVaZJltoqjLBmknZCq9UnkELNJtenY1PBMELLrGJR3bG2t5oxUcwwPbKtReGQHZOrkCL0fb1yeqpTfelb6vcDx3wNwuMRdrXIOHRT3eT68D1/5k5vA"),o(y,"title","Open in our Online Editor"),Xt.a=null,o(vt,"class","language-js"),o(f,"class","remark-container tip"),o(tt,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNptkE9rwzAMxb+K0aUxmJJt7OLb2GHsUCjLbvPAnq12Ya5tHIc2BH/3Ocsauj+39/Qk/ZBGUCEAH0F7g8BBW9V1ZDPchUDwlNCZjhQ9CieSjqgSNknFtFV7rOhXVaSIqY+OLMFUzcJlyAxC8R3wlxFaA/yKwc5bg/FxNj+gy/wCnszMWOgPffub++SP3fpN6Y999L0z9976WEnbHlDStX5vrYnoqnlEpCYojezsngvqrEX6s2U1oLX+uKKXPT6WA6obRmREIy+jVLZVsvEHJJOUlP1Hpd//mc7KwOBUXnFbMxiAX9d1fs2fPAGSMw=="),o(_,"title","Open in our Online Editor"),an.a=null,o(bt,"class","language-js"),o(h,"class","remark-container tip"),o(st,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNptkE9LxDAQxb9KmMumEJaq7KU38SAeBNl6M0KyybgWs0lIUnZLyXc3tW5Z/9zem5fJb2ZGkN5DM4JyGqEBZWSM5HG49Z7gKaHVkRQ9csuTCigTtkmG9CT3SKuvKk8BUx8sWYKpmrnNkBn44iM0LyN0GporBm/OaAwPs/kBXfoX8GRmxkK/77vf3K07xvVOqo99cL3Vd864QIXpDiiqtXrvjA5o6dzCU+ulQnZ2zwV11jz9+WU1oDHuuKou3igXLIat1F0f6eYy2blQVqM3jIiAWlxGqXCoaN0BySRFxf6bp/q+3LRwBgancqRNzWCA5rqu82v+BOO7m+I="),o(P,"title","Open in our Online Editor"),ln.a=null,o(wt,"class","language-js"),o(x,"class","remark-container tip")},m(t,e){s(t,v,e),s(t,Et,e),s(t,S,e),s(t,Tt,e),s(t,E,e),s(t,Mt,e),s(t,T,e),s(t,Ot,e),s(t,M,e),s(t,It,e),s(t,O,e),s(t,Lt,e),s(t,d,e),u(d,I),rt(L,d,null),u(d,b),u(d,ft),At.m(ne,ft),s(t,jt,e),s(t,A,e),s(t,Ht,e),s(t,j,e),s(t,Rt,e),rt(H,t,e),s(t,$t,e),s(t,k,e),s(t,Dt,e),s(t,R,e),Gt.m(ee,R),s(t,Bt,e),s(t,$,e),s(t,Zt,e),s(t,D,e),s(t,zt,e),s(t,G,e),s(t,Jt,e),s(t,g,e),u(g,B),rt(Z,g,null),u(g,w),u(g,ht),qt.m(se,ht),s(t,Kt,e),s(t,z,e),s(t,Wt,e),s(t,J,e),s(t,Ut,e),s(t,m,e),u(m,q),rt(K,m,null),u(m,C),u(m,xt),Vt.m(ae,xt),s(t,Ft,e),s(t,W,e),s(t,Nt,e),s(t,U,e),s(t,Qt,e),s(t,f,e),u(f,V),rt(F,f,null),u(f,y),u(f,vt),Xt.m(pe,vt),s(t,Yt,e),s(t,N,e),s(t,tn,e),s(t,Q,e),s(t,nn,e),s(t,X,e),s(t,en,e),s(t,Y,e),s(t,sn,e),s(t,h,e),u(h,tt),rt(nt,h,null),u(h,_),u(h,bt),an.m(oe,bt),s(t,pn,e),s(t,et,e),s(t,on,e),s(t,x,e),u(x,st),rt(at,x,null),u(x,P),u(x,wt),ln.m(le,wt),s(t,cn,e),s(t,pt,e),s(t,un,e),s(t,ot,e),rn=!0},p:ie,i(t){rn||(dt(L.$$.fragment,t),dt(H.$$.fragment,t),dt(Z.$$.fragment,t),dt(K.$$.fragment,t),dt(F.$$.fragment,t),dt(nt.$$.fragment,t),dt(at.$$.fragment,t),rn=!0)},o(t){kt(L.$$.fragment,t),kt(H.$$.fragment,t),kt(Z.$$.fragment,t),kt(K.$$.fragment,t),kt(F.$$.fragment,t),kt(nt.$$.fragment,t),kt(at.$$.fragment,t),rn=!1},d(t){t&&(n(v),n(Et),n(S),n(Tt),n(E),n(Mt),n(T),n(Ot),n(M),n(It),n(O),n(Lt),n(d),n(jt),n(A),n(Ht),n(j),n(Rt),n($t),n(k),n(Dt),n(R),n(Bt),n($),n(Zt),n(D),n(zt),n(G),n(Jt),n(g),n(Kt),n(z),n(Wt),n(J),n(Ut),n(m),n(Ft),n(W),n(Nt),n(U),n(Qt),n(f),n(Yt),n(N),n(tn),n(Q),n(nn),n(X),n(en),n(Y),n(sn),n(h),n(pn),n(et),n(on),n(x),n(cn),n(pt),n(un),n(ot)),gt(L),gt(H,t),gt(Z),gt(K),gt(F),gt(nt),gt(at)}}}class fe extends ue{constructor(v){super(),re(this,v,null,de,ce,{})}}export{fe as component};
