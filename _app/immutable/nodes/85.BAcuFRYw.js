import{s as ue,n as re}from"../chunks/scheduler.B0TnBjPs.js";import{S as de,i as ke,e as a,s as c,c as ct,H as it,a as p,g as l,b as i,d as r,f as ut,n as rt,h as n,o,j as s,p as u,m as dt,t as kt,k as gt,l as mt}from"../chunks/index.BXVnRmkj.js";import{V as ft}from"../chunks/ViewApp.CB1BM1bD.js";function ge(ee){let v,kn="2. Styling",It,E,gn="This tutorial will teach you how to style components configuration.",Ot,T,mn="Introduction",Lt,M,fn="There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.",At,I,hn="Background color",jt,O,xn="As you should know by now, you can use the configuration method <code>backgroundColor()</code> to give a component a background color. Pass it the color as the name in English, e.g. <code>red</code>.",Ht,d,L,vn="Example",A,b,bn="Open in Online Editor",ht,Rt,se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dt,j,wn="Padding",$t,H,Cn="Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow <code>Text</code> component to be a little bit taller than it is.",Gt,k,R,yn="Example",D,w,_n="Open in Online Editor",xt,Bt,ae=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zt,$,Pn="You can make it taller by giving it a <code>grow()</code>, but it&#39;s also possible to make it taller by giving it some padding on the top side and bottom side. <em>Padding</em> is simply some amount of space between the components edge and its content. Call the configuration method <code>padding()</code> to give the component some padding, and pass it:",zt,G,Sn="<li>The number of millimeters padding you want the component to have</li> <li>A string indicating which sides of the component the padding should be added to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the padding will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the padding will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the padding will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the padding will be added to the right side</li></ul></li>",Jt,B,En="If you don't specify the second argument (the string), the padding will be added to all sides.",qt,g,Z,Tn="Example",z,C,Mn="Open in Online Editor",vt,Vt,pe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have 10mm padding above and below me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kt,J,In="Rounded corners",Wt,q,On="You can instruct GUI components to have round corners by calling the configuration method <code>corderRadius()</code>. Pass it the radius of the corner in millimeters. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of <code>0</code>, which means not being round at all.",Ut,m,V,Ln="Example",K,y,An="Open in Online Editor",bt,Ft,oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Nt,W,jn="One thing you need to watch out for when using <code>cornerRadius()</code> is that anything that is placed in the corner of the component might not be shown properly. In the example above, try risizing the app screen, and place the <code>M</code> character in the beginning of the text in the upper left corner, and notice how it&#39;s not displayed properly. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.",Qt,U,Hn="Try resizing the app screen in the example below, and notive how the <code>M</code> character never is placed in the upper left corner, but always entirely visible.",Xt,f,F,Rn="Example",N,_,Dn="Open in Online Editor",wt,Yt,le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tn,Q,$n="Border",nn,X,Gn="It is also possible to add borders around the component. To do that, call the confiruation method <code>border()</code>, and pass it:",en,Y,Bn="<li>The thickness of the border, expressed as number of millimeters, e.g. <code>5</code></li> <li>The color of the border, expressed as the name in English, e.g. <code>&quot;red&quot;</code></li> <li>A string indicating which sides of the component the the border should be applied to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the border will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the border will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the border will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the border will be added to the right side</li></ul></li>",sn,tt,Zn="If you don't specify the third argument, the border will be applied to all sides.",an,h,nt,zn="Example",et,P,Jn="Open in Online Editor",Ct,pn,ce=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,on,st,qn="If you specify a corner radius, the border will be round at the corners.",ln,x,at,Vn="Example",pt,S,Kn="Open in Online Editor",yt,cn,ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,un,ot,Wn="That's it!",rn,lt,Un="Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages.",dn;return A=new ft({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor('yellow').text(\`I am yellow!\`)
	}
	
}`,x:150,y:200}]}}}),D=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),z=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),K=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),N=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),et=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),pt=new ft({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){v=a("h1"),v.textContent=kn,It=c(),E=a("p"),E.textContent=gn,Ot=c(),T=a("h2"),T.textContent=mn,Lt=c(),M=a("p"),M.textContent=fn,At=c(),I=a("h2"),I.textContent=hn,jt=c(),O=a("p"),O.innerHTML=xn,Ht=c(),d=a("div"),L=a("div"),L.textContent=vn,ct(A.$$.fragment),b=a("a"),b.textContent=bn,ht=a("pre"),Rt=new it(!1),Dt=c(),j=a("h2"),j.textContent=wn,$t=c(),H=a("p"),H.innerHTML=Cn,Gt=c(),k=a("div"),R=a("div"),R.textContent=yn,ct(D.$$.fragment),w=a("a"),w.textContent=_n,xt=a("pre"),Bt=new it(!1),Zt=c(),$=a("p"),$.innerHTML=Pn,zt=c(),G=a("ol"),G.innerHTML=Sn,Jt=c(),B=a("p"),B.textContent=En,qt=c(),g=a("div"),Z=a("div"),Z.textContent=Tn,ct(z.$$.fragment),C=a("a"),C.textContent=Mn,vt=a("pre"),Vt=new it(!1),Kt=c(),J=a("h2"),J.textContent=In,Wt=c(),q=a("p"),q.innerHTML=On,Ut=c(),m=a("div"),V=a("div"),V.textContent=Ln,ct(K.$$.fragment),y=a("a"),y.textContent=An,bt=a("pre"),Ft=new it(!1),Nt=c(),W=a("p"),W.innerHTML=jn,Qt=c(),U=a("p"),U.innerHTML=Hn,Xt=c(),f=a("div"),F=a("div"),F.textContent=Rn,ct(N.$$.fragment),_=a("a"),_.textContent=Dn,wt=a("pre"),Yt=new it(!1),tn=c(),Q=a("h2"),Q.textContent=$n,nn=c(),X=a("p"),X.innerHTML=Gn,en=c(),Y=a("ol"),Y.innerHTML=Bn,sn=c(),tt=a("p"),tt.textContent=Zn,an=c(),h=a("div"),nt=a("div"),nt.textContent=zn,ct(et.$$.fragment),P=a("a"),P.textContent=Jn,Ct=a("pre"),pn=new it(!1),on=c(),st=a("p"),st.textContent=qn,ln=c(),x=a("div"),at=a("div"),at.textContent=Vn,ct(pt.$$.fragment),S=a("a"),S.textContent=Kn,yt=a("pre"),cn=new it(!1),un=c(),ot=a("h2"),ot.textContent=Wn,rn=c(),lt=a("p"),lt.textContent=Un,this.h()},l(t){v=p(t,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-12scns6"&&(v.textContent=kn),It=i(t),E=p(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-1f462wa"&&(E.textContent=gn),Ot=i(t),T=p(t,"H2",{"data-svelte-h":!0}),l(T)!=="svelte-1ukekoe"&&(T.textContent=mn),Lt=i(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-1tpunnt"&&(M.textContent=fn),At=i(t),I=p(t,"H2",{"data-svelte-h":!0}),l(I)!=="svelte-okr2zh"&&(I.textContent=hn),jt=i(t),O=p(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-y3dkr8"&&(O.innerHTML=xn),Ht=i(t),d=p(t,"DIV",{class:!0});var e=r(d);L=p(e,"DIV",{class:!0,"data-svelte-h":!0}),l(L)!=="svelte-1llzxwj"&&(L.textContent=vn),ut(A.$$.fragment,e),b=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-4gtdgz"&&(b.textContent=bn),ht=p(e,"PRE",{class:!0});var Fn=r(ht);Rt=rt(Fn,!1),Fn.forEach(n),e.forEach(n),Dt=i(t),j=p(t,"H2",{"data-svelte-h":!0}),l(j)!=="svelte-1m54nt"&&(j.textContent=wn),$t=i(t),H=p(t,"P",{"data-svelte-h":!0}),l(H)!=="svelte-14oozwq"&&(H.innerHTML=Cn),Gt=i(t),k=p(t,"DIV",{class:!0});var _t=r(k);R=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),l(R)!=="svelte-1llzxwj"&&(R.textContent=yn),ut(D.$$.fragment,_t),w=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-5v75rt"&&(w.textContent=_n),xt=p(_t,"PRE",{class:!0});var Nn=r(xt);Bt=rt(Nn,!1),Nn.forEach(n),_t.forEach(n),Zt=i(t),$=p(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-1ogf8hq"&&($.innerHTML=Pn),zt=i(t),G=p(t,"OL",{"data-svelte-h":!0}),l(G)!=="svelte-12xv6k5"&&(G.innerHTML=Sn),Jt=i(t),B=p(t,"P",{"data-svelte-h":!0}),l(B)!=="svelte-1tuttrr"&&(B.textContent=En),qt=i(t),g=p(t,"DIV",{class:!0});var Pt=r(g);Z=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),l(Z)!=="svelte-1llzxwj"&&(Z.textContent=Tn),ut(z.$$.fragment,Pt),C=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-1edzs7u"&&(C.textContent=Mn),vt=p(Pt,"PRE",{class:!0});var Qn=r(vt);Vt=rt(Qn,!1),Qn.forEach(n),Pt.forEach(n),Kt=i(t),J=p(t,"H2",{"data-svelte-h":!0}),l(J)!=="svelte-1nudzpv"&&(J.textContent=In),Wt=i(t),q=p(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-dx1kac"&&(q.innerHTML=On),Ut=i(t),m=p(t,"DIV",{class:!0});var St=r(m);V=p(St,"DIV",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-1llzxwj"&&(V.textContent=Ln),ut(K.$$.fragment,St),y=p(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-1igt3je"&&(y.textContent=An),bt=p(St,"PRE",{class:!0});var Xn=r(bt);Ft=rt(Xn,!1),Xn.forEach(n),St.forEach(n),Nt=i(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-ed9sne"&&(W.innerHTML=jn),Qt=i(t),U=p(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1dnamdm"&&(U.innerHTML=Hn),Xt=i(t),f=p(t,"DIV",{class:!0});var Et=r(f);F=p(Et,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1llzxwj"&&(F.textContent=Rn),ut(N.$$.fragment,Et),_=p(Et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-1yk7drh"&&(_.textContent=Dn),wt=p(Et,"PRE",{class:!0});var Yn=r(wt);Yt=rt(Yn,!1),Yn.forEach(n),Et.forEach(n),tn=i(t),Q=p(t,"H2",{"data-svelte-h":!0}),l(Q)!=="svelte-10z3ctc"&&(Q.textContent=$n),nn=i(t),X=p(t,"P",{"data-svelte-h":!0}),l(X)!=="svelte-11pbqge"&&(X.innerHTML=Gn),en=i(t),Y=p(t,"OL",{"data-svelte-h":!0}),l(Y)!=="svelte-j6kbon"&&(Y.innerHTML=Bn),sn=i(t),tt=p(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-1m3bip9"&&(tt.textContent=Zn),an=i(t),h=p(t,"DIV",{class:!0});var Tt=r(h);nt=p(Tt,"DIV",{class:!0,"data-svelte-h":!0}),l(nt)!=="svelte-1llzxwj"&&(nt.textContent=zn),ut(et.$$.fragment,Tt),P=p(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-1383h4u"&&(P.textContent=Jn),Ct=p(Tt,"PRE",{class:!0});var te=r(Ct);pn=rt(te,!1),te.forEach(n),Tt.forEach(n),on=i(t),st=p(t,"P",{"data-svelte-h":!0}),l(st)!=="svelte-1l5ispr"&&(st.textContent=qn),ln=i(t),x=p(t,"DIV",{class:!0});var Mt=r(x);at=p(Mt,"DIV",{class:!0,"data-svelte-h":!0}),l(at)!=="svelte-1llzxwj"&&(at.textContent=Vn),ut(pt.$$.fragment,Mt),S=p(Mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-1sp7f2h"&&(S.textContent=Kn),yt=p(Mt,"PRE",{class:!0});var ne=r(yt);cn=rt(ne,!1),ne.forEach(n),Mt.forEach(n),un=i(t),ot=p(t,"H2",{"data-svelte-h":!0}),l(ot)!=="svelte-p2uhy5"&&(ot.textContent=Wn),rn=i(t),lt=p(t,"P",{"data-svelte-h":!0}),l(lt)!=="svelte-1shx17i"&&(lt.textContent=Un),this.h()},h(){o(L,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNpdjsEKwjAQRH8l7qUtlFIFL7mJB+lBEPRmBWOzlmJMQppiS8i/m1op6G1nZnffOGBaA3VQKY5AoRKsbcl+2GhNsLcoeUvC7EpZ2sogs3i0zNgDqzFOPm5pDdrOSDIHo+tL6cGnoINugZ4dNBzoMoW7EhxNMYkf6Hw/g0cxMWb6rmv+uaewnt1Y9aiN6iTfKqFMHA0ohHpFSWZDHF8Lwp5k8hbX5NtwfOwhhT6UWecpDEBXee4v/g1UaGJN"),o(b,"title","Open in our Online Editor"),Rt.a=null,o(ht,"class","language-js"),o(d,"class","remark-container tip"),o(R,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNptj81qwzAQhF9F2UssEMYt9KJb6SHkUChNb1XBqrRJTBVJSDKJMXr3yHVr6M9tZ4bZb3cE6T3wEZTTCByUkTGSx+Hee4KXhFZHUuZRWJFUQJlwl2RIT/KAFf10RQqY+mDJEkxuFjZDZuCLjsBfR+g08BsGe2c0hu0sfkCX/gKexMxY6Ju++819dudYv0v1cQiut/rBGReq1nQnbGmtjp3RAW01V0TaeamQfauXgvrTXQ9ojDuvaZ1KXLVbIk9k9lYtZf9tol8/T6dmYHAp7901DAbgt02T3/IV2vmBOQ=="),o(w,"title","Open in our Online Editor"),Bt.a=null,o(xt,"class","language-js"),o(k,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNptkE1LxDAQhv/KOJdtIZRW8NKbeJA9COJ6s0LTZOwW0ySkqbul5L+b2rXgxy3vmzx5mJmRW4vljMJIwhKF4sMAD9OttUBnT1oOEM9zpSsvHHFPB8+df+QtJelXW3lHfnQatoulDZUOGBjamAcsX2bsJJYFwzejJLn9Gn5IN34TL2F1bPb7sfvtfTKnIWu4eG+dGbW8M8q4pFZdT3WaiWOnpCOdrEjlD5YLYt/pOar+sLuJlDKnXZpZLmWn26TIGdS+if/5CCT1Ho78g6DI+x4ub4A3JlZcS2go0tDTVZ2y/7TpZUHLXAEZnuMubnKGE5bXeR5ewyfJEY/p"),o(C,"title","Open in our Online Editor"),Vt.a=null,o(vt,"class","language-js"),o(g,"class","remark-container tip"),o(V,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNptkE1rwzAMhv+Kp0sTMCEb9JLLGB2MHQql3W0ZxI211My1jezQhOD/vqTZAvu4+ZX08MgaQDgHxQC1lQgF1Fp4z7b9g3MMu4BGeja+h9KUoSYUAQ9BUNiJBpP0Wi0DYWjJsKUxVWNpIkQObsweitcBlITilsO71RLpeQ4/pAu/iKcwOxb7U6t+e/f24rOjqD8asq2RG6stJZVWZ6zSrD4pLQlNMiNlODhRI/9OL6PqD7vqUWt7WY20JYO0F1K1PlmnWRjHk2rbs7nhmSBkVxLlDdtYqzkj1ZzCPdtpFB7ZEZk6O0Lvp4nusUr5f5ukXzebvhqBQzeeZ51z6KG4y/P4Fj8BcAiX1g=="),o(y,"title","Open in our Online Editor"),Ft.a=null,o(bt,"class","language-js"),o(m,"class","remark-container tip"),o(F,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNptkMFqwzAMhl/F06UJmJAOeslljA7GDoXS7rYM4sZaaubaRnZoQ8i7z2m2wLbe/En+9dnqQTgHRQ+1lQgF1Fp4zzbdo3MMLwGN9Cye+9KUoSYUAfdBUNiKBpP0Wi0DYWjJsLkxVofSDDBwcJE9FG89KAnFksOH1RLpZYJf0jk/i0eYHLP9uVV/vTt79tlB1J8N2dbItdWWkkqrE1ZpVh+VloQmmSJl2DtRI/+h16j6l110qLU9L9LMCSmVaZJltoqjLBmknZCq9UnkELNJtenY1PBMELLrGJR3bG2t5oxUcwwPbKtReGQHZOrkCL0fb1yeqpTfelb6vcDx3wNwuMRdrXIOHRT3eT68D1/5k5vA"),o(_,"title","Open in our Online Editor"),Yt.a=null,o(wt,"class","language-js"),o(f,"class","remark-container tip"),o(nt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNptkE9rwzAMxb+K0aUxmJJt7OLb2GHsUCjLbvPAnq12Ya5tHIc2BH/3Ocsauj+39/Qk/ZBGUCEAH0F7g8BBW9V1ZDPchUDwlNCZjhQ9CieSjqgSNknFtFV7rOhXVaSIqY+OLMFUzcJlyAxC8R3wlxFaA/yKwc5bg/FxNj+gy/wCnszMWOgPffub++SP3fpN6Y999L0z9976WEnbHlDStX5vrYnoqnlEpCYojezsngvqrEX6s2U1oLX+uKKXPT6WA6obRmREIy+jVLZVsvEHJJOUlP1Hpd//mc7KwOBUXnFbMxiAX9d1fs2fPAGSMw=="),o(P,"title","Open in our Online Editor"),pn.a=null,o(Ct,"class","language-js"),o(h,"class","remark-container tip"),o(at,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNptkE9LxDAQxb9KmMumEJaq7KU38SAeBNl6M0KyybgWs0lIUnZLyXc3tW5Z/9zem5fJb2ZGkN5DM4JyGqEBZWSM5HG49Z7gKaHVkRQ9csuTCigTtkmG9CT3SKuvKk8BUx8sWYKpmrnNkBn44iM0LyN0GporBm/OaAwPs/kBXfoX8GRmxkK/77vf3K07xvVOqo99cL3Vd864QIXpDiiqtXrvjA5o6dzCU+ulQnZ2zwV11jz9+WU1oDHuuKou3igXLIat1F0f6eYy2blQVqM3jIiAWlxGqXCoaN0BySRFxf6bp/q+3LRwBgancqRNzWCA5rqu82v+BOO7m+I="),o(S,"title","Open in our Online Editor"),cn.a=null,o(yt,"class","language-js"),o(x,"class","remark-container tip")},m(t,e){s(t,v,e),s(t,It,e),s(t,E,e),s(t,Ot,e),s(t,T,e),s(t,Lt,e),s(t,M,e),s(t,At,e),s(t,I,e),s(t,jt,e),s(t,O,e),s(t,Ht,e),s(t,d,e),u(d,L),dt(A,d,null),u(d,b),u(d,ht),Rt.m(se,ht),s(t,Dt,e),s(t,j,e),s(t,$t,e),s(t,H,e),s(t,Gt,e),s(t,k,e),u(k,R),dt(D,k,null),u(k,w),u(k,xt),Bt.m(ae,xt),s(t,Zt,e),s(t,$,e),s(t,zt,e),s(t,G,e),s(t,Jt,e),s(t,B,e),s(t,qt,e),s(t,g,e),u(g,Z),dt(z,g,null),u(g,C),u(g,vt),Vt.m(pe,vt),s(t,Kt,e),s(t,J,e),s(t,Wt,e),s(t,q,e),s(t,Ut,e),s(t,m,e),u(m,V),dt(K,m,null),u(m,y),u(m,bt),Ft.m(oe,bt),s(t,Nt,e),s(t,W,e),s(t,Qt,e),s(t,U,e),s(t,Xt,e),s(t,f,e),u(f,F),dt(N,f,null),u(f,_),u(f,wt),Yt.m(le,wt),s(t,tn,e),s(t,Q,e),s(t,nn,e),s(t,X,e),s(t,en,e),s(t,Y,e),s(t,sn,e),s(t,tt,e),s(t,an,e),s(t,h,e),u(h,nt),dt(et,h,null),u(h,P),u(h,Ct),pn.m(ce,Ct),s(t,on,e),s(t,st,e),s(t,ln,e),s(t,x,e),u(x,at),dt(pt,x,null),u(x,S),u(x,yt),cn.m(ie,yt),s(t,un,e),s(t,ot,e),s(t,rn,e),s(t,lt,e),dn=!0},p:re,i(t){dn||(kt(A.$$.fragment,t),kt(D.$$.fragment,t),kt(z.$$.fragment,t),kt(K.$$.fragment,t),kt(N.$$.fragment,t),kt(et.$$.fragment,t),kt(pt.$$.fragment,t),dn=!0)},o(t){gt(A.$$.fragment,t),gt(D.$$.fragment,t),gt(z.$$.fragment,t),gt(K.$$.fragment,t),gt(N.$$.fragment,t),gt(et.$$.fragment,t),gt(pt.$$.fragment,t),dn=!1},d(t){t&&(n(v),n(It),n(E),n(Ot),n(T),n(Lt),n(M),n(At),n(I),n(jt),n(O),n(Ht),n(d),n(Dt),n(j),n($t),n(H),n(Gt),n(k),n(Zt),n($),n(zt),n(G),n(Jt),n(B),n(qt),n(g),n(Kt),n(J),n(Wt),n(q),n(Ut),n(m),n(Nt),n(W),n(Qt),n(U),n(Xt),n(f),n(tn),n(Q),n(nn),n(X),n(en),n(Y),n(sn),n(tt),n(an),n(h),n(on),n(st),n(ln),n(x),n(un),n(ot),n(rn),n(lt)),mt(A),mt(D),mt(z),mt(K),mt(N),mt(et),mt(pt)}}}class xe extends de{constructor(v){super(),ke(this,v,null,ge,ue,{})}}export{xe as component};
