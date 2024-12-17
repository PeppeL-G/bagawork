import{s as ns,n as ss}from"../chunks/scheduler.B0TnBjPs.js";import{S as as,i as es,e,s as c,c as pt,H as ot,a as p,g as l,b as i,d as r,f as lt,n as ct,h as n,o,j as a,p as u,m as it,t as ut,k as rt,l as kt}from"../chunks/index.BXVnRmkj.js";import{V as dt}from"../chunks/ViewApp.CB1BM1bD.js";function ps(Qn){let w,on="3. Layouts",Tt,T,ln="This tutorial will teach you how the different layouts in BagaWork works.",It,I,cn="Repetition",Et,E,un="This tutorial assumes you already know:",At,A,rn='<li>That the GUI component returned from <code>Page.createGui()</code> will cover the entire screen</li> <li>How the <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> layout positions its children as rows</li> <li>How the <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layout positions its children as columns</li>',Lt,L,kn="In this tutorial you will learn a couple more layouts you can use.",Ht,H,dn="The <code>Layers</code> layout",Mt,M,hn="In the <code>Layers</code> layout, all the children will be as big as the <code>Layer</code> layout itself, so they will be drawn in front of each other:",jt,j,mn="<li>First, the first child passed to the <code>Layers</code> component will be drawn</li> <li>Then, the second child will be drawn in front of that one</li> <li>And so on...</li>",Ot,O,fn='So each child can be seen as a "layer".',zt,k,z,gn="Example",G,v,xn="Open in Online Editor",ht,Gt,Wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, but since I have a background color, you won't be able to see the first child.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rt,d,R,wn="Example",$,C,vn="Open in Online Editor",mt,$t,Yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,qt,q,Cn="The <code>Layers</code> layout is useful when you want to draw something in front of something else, for example a text in front of an image (learn about how to use images in your BagaWork apps in next tutorial). Another use-case is to show an alert message in the center of the screen.",Ut,h,U,yn="Example",B,y,bn="Open in Online Editor",ft,Bt,Zn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isAlertShowing <span class="token operator">=</span> <span class="token boolean">false</span>
	
	<span class="token function">showAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isAlertShowing <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">hideAlert</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isAlertShowing <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			<span class="token comment">// The ordinary GUI...</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This is the ordinary GUI.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Show alert!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>showAlert<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			<span class="token comment">// And the alert in front of it (if it should be shown).</span>
			Rows<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isAlertShowing <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alert!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is the alert message...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Close</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>hideAlert<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
			
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dt,D,_n="The <code>Box</code> layout",Ft,F,Pn="Sometimes you might want your GUI Component to have a specific width and height. Then you should use the <code>Box</code> layout. Unlike the <code>Rows</code>, <code>Columns</code> and <code>Layers</code> layouts, the <code>Box</code> layout can only have one child, and that child will have the specific size you specify by calling the configuration methods <code>width()</code> and <code>height()</code> on the <code>Box</code> layout (pass them the size expressed in number of millimeters). Pass it it&#39;s child by calling the configuration method <code>child()</code>.",Vt,m,V,Sn="Example",K,b,Tn="Open in Online Editor",gt,Kt,Nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Qt,Q,In="The <code>Box</code> will by default have the size given to it by its parent layout, so you only need to call <code>width()</code> and <code>height()</code> if you want the <code>Box</code> to have a specific number of millimeters size specified by you.",Wt,W,En="Further more, it is also possible to use the configuration method <code>aspectRatio()</code> to set it&#39;s width/height based on the other one it has. For example, using <code>aspectRatio(3, 1)</code> means that the width should be 3 times as big as its height, so if you also use <code>height(15)</code>, it would get the width 45 millimeters.",Yt,f,Y,An="Example",Z,_,Ln="Open in Online Editor",xt,Zt,Xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Nt,N,Hn="This can be useful when you want the box to be as big as possible with a specific ratio between the width and the height. For example, to make a GUI component occupy the size of the biggest square possible that can it on the screen, simply use <code>aspectRatio(1, 1)</code>. This is really useful when you implement games that is displayed with a specific aspect ratio, such as <code>3:4</code>, or <code>10:16</code>.",Xt,g,X,Mn="Example",J,P,jn="Open in Online Editor",wt,Jt,Jn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm equally wide as tall!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tn,tt,On="The <code>Box</code> layout can also be used to occupy some space to position other children in a <code>Rows</code> or <code>Columns</code> layout where they should be.",nn,x,nt,zn="Example",st,S,Gn="Open in Online Editor",vt,sn,ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There is 10 millimeters extra...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">...space between these two texts!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,an,at,Rn="That's it!",en,et,$n="Look at that, now you know 4 layout components in total 🥳  Good work!",pn;return G=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(\`I am the first child/layer!\`),
			Text.backgroundColor(\`red\`).text(\`I am the second child, but since I have a background color, you won't be able to see the first child.\`),
		)
	}
	
}`,x:150,y:200}]}}}),$=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(\`I am the first child/layer!\`),
			Text.text(\`I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.\`),
		)
	}
	
}`,x:150,y:200}]}}}),B=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isAlertShowing = false
	
	showAlert(){
		p.isAlertShowing = true
	}
	
	hideAlert(){
		p.isAlertShowing = false
	}
	
	createGui(){
		return Layers.children(
			
			// The ordinary GUI...
			Rows.backgroundColor(\`lime\`).children(
				Space,
				Text.text(\`This is the ordinary GUI.\`),
				Button.text(\`Show alert!\`).onClick(p.showAlert),
				Space,
			),
			
			// And the alert in front of it (if it should be shown).
			Rows.showIf(p.isAlertShowing == true).children(
				Space,
				Rows.grow(1).backgroundColor(\`white\`).children(
					Text.text(\`Alert!\`),
					Text.text(\`Here is the alert message...\`),
					Button.text(\`Close\`).onClick(p.hideAlert),
				),
				Space,
			)
			
		)
	}
	
}`,x:150,y:200}]}}}),K=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.width(30)
			.height(50)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I am the child!\`)
			)
	}
	
}`,x:150,y:200}]}}}),Z=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(3, 1)
			.height(15)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I am the child!\`)
			)
	}
	
}`,x:150,y:200}]}}}),J=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(1, 1)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I'm equally wide as tall!\`)
			)
	}
	
}`,x:150,y:200}]}}}),st=new dt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`There is 10 millimeters extra...\`),
			Box.height(10),
			Text.text(\`...space between these two texts!\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),{c(){w=e("h1"),w.textContent=on,Tt=c(),T=e("p"),T.textContent=ln,It=c(),I=e("h2"),I.textContent=cn,Et=c(),E=e("p"),E.textContent=un,At=c(),A=e("ul"),A.innerHTML=rn,Lt=c(),L=e("p"),L.textContent=kn,Ht=c(),H=e("h2"),H.innerHTML=dn,Mt=c(),M=e("p"),M.innerHTML=hn,jt=c(),j=e("ol"),j.innerHTML=mn,Ot=c(),O=e("p"),O.textContent=fn,zt=c(),k=e("div"),z=e("div"),z.textContent=gn,pt(G.$$.fragment),v=e("a"),v.textContent=xn,ht=e("pre"),Gt=new ot(!1),Rt=c(),d=e("div"),R=e("div"),R.textContent=wn,pt($.$$.fragment),C=e("a"),C.textContent=vn,mt=e("pre"),$t=new ot(!1),qt=c(),q=e("p"),q.innerHTML=Cn,Ut=c(),h=e("div"),U=e("div"),U.textContent=yn,pt(B.$$.fragment),y=e("a"),y.textContent=bn,ft=e("pre"),Bt=new ot(!1),Dt=c(),D=e("h2"),D.innerHTML=_n,Ft=c(),F=e("p"),F.innerHTML=Pn,Vt=c(),m=e("div"),V=e("div"),V.textContent=Sn,pt(K.$$.fragment),b=e("a"),b.textContent=Tn,gt=e("pre"),Kt=new ot(!1),Qt=c(),Q=e("p"),Q.innerHTML=In,Wt=c(),W=e("p"),W.innerHTML=En,Yt=c(),f=e("div"),Y=e("div"),Y.textContent=An,pt(Z.$$.fragment),_=e("a"),_.textContent=Ln,xt=e("pre"),Zt=new ot(!1),Nt=c(),N=e("p"),N.innerHTML=Hn,Xt=c(),g=e("div"),X=e("div"),X.textContent=Mn,pt(J.$$.fragment),P=e("a"),P.textContent=jn,wt=e("pre"),Jt=new ot(!1),tn=c(),tt=e("p"),tt.innerHTML=On,nn=c(),x=e("div"),nt=e("div"),nt.textContent=zn,pt(st.$$.fragment),S=e("a"),S.textContent=Gn,vt=e("pre"),sn=new ot(!1),an=c(),at=e("h2"),at.textContent=Rn,en=c(),et=e("p"),et.textContent=$n,this.h()},l(t){w=p(t,"H1",{"data-svelte-h":!0}),l(w)!=="svelte-1jsfzla"&&(w.textContent=on),Tt=i(t),T=p(t,"P",{"data-svelte-h":!0}),l(T)!=="svelte-ahtko6"&&(T.textContent=ln),It=i(t),I=p(t,"H2",{"data-svelte-h":!0}),l(I)!=="svelte-18oxb3d"&&(I.textContent=cn),Et=i(t),E=p(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-1xhihl9"&&(E.textContent=un),At=i(t),A=p(t,"UL",{"data-svelte-h":!0}),l(A)!=="svelte-c9bq5r"&&(A.innerHTML=rn),Lt=i(t),L=p(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-k4skl5"&&(L.textContent=kn),Ht=i(t),H=p(t,"H2",{"data-svelte-h":!0}),l(H)!=="svelte-sg5e68"&&(H.innerHTML=dn),Mt=i(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-1c0ty4s"&&(M.innerHTML=hn),jt=i(t),j=p(t,"OL",{"data-svelte-h":!0}),l(j)!=="svelte-1i3nnws"&&(j.innerHTML=mn),Ot=i(t),O=p(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-102ccfh"&&(O.textContent=fn),zt=i(t),k=p(t,"DIV",{class:!0});var s=r(k);z=p(s,"DIV",{class:!0,"data-svelte-h":!0}),l(z)!=="svelte-1llzxwj"&&(z.textContent=gn),lt(G.$$.fragment,s),v=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-1afdz1q"&&(v.textContent=xn),ht=p(s,"PRE",{class:!0});var qn=r(ht);Gt=ct(qn,!1),qn.forEach(n),s.forEach(n),Rt=i(t),d=p(t,"DIV",{class:!0});var Ct=r(d);R=p(Ct,"DIV",{class:!0,"data-svelte-h":!0}),l(R)!=="svelte-1llzxwj"&&(R.textContent=wn),lt($.$$.fragment,Ct),C=p(Ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-qcvxpk"&&(C.textContent=vn),mt=p(Ct,"PRE",{class:!0});var Un=r(mt);$t=ct(Un,!1),Un.forEach(n),Ct.forEach(n),qt=i(t),q=p(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-c5ipw8"&&(q.innerHTML=Cn),Ut=i(t),h=p(t,"DIV",{class:!0});var yt=r(h);U=p(yt,"DIV",{class:!0,"data-svelte-h":!0}),l(U)!=="svelte-1llzxwj"&&(U.textContent=yn),lt(B.$$.fragment,yt),y=p(yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-137ztkd"&&(y.textContent=bn),ft=p(yt,"PRE",{class:!0});var Bn=r(ft);Bt=ct(Bn,!1),Bn.forEach(n),yt.forEach(n),Dt=i(t),D=p(t,"H2",{"data-svelte-h":!0}),l(D)!=="svelte-rz5hv1"&&(D.innerHTML=_n),Ft=i(t),F=p(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-19yuw92"&&(F.innerHTML=Pn),Vt=i(t),m=p(t,"DIV",{class:!0});var bt=r(m);V=p(bt,"DIV",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-1llzxwj"&&(V.textContent=Sn),lt(K.$$.fragment,bt),b=p(bt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-1awram1"&&(b.textContent=Tn),gt=p(bt,"PRE",{class:!0});var Dn=r(gt);Kt=ct(Dn,!1),Dn.forEach(n),bt.forEach(n),Qt=i(t),Q=p(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-1u4klc2"&&(Q.innerHTML=In),Wt=i(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-12osomb"&&(W.innerHTML=En),Yt=i(t),f=p(t,"DIV",{class:!0});var _t=r(f);Y=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),l(Y)!=="svelte-1llzxwj"&&(Y.textContent=An),lt(Z.$$.fragment,_t),_=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-prcifl"&&(_.textContent=Ln),xt=p(_t,"PRE",{class:!0});var Fn=r(xt);Zt=ct(Fn,!1),Fn.forEach(n),_t.forEach(n),Nt=i(t),N=p(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-m162fd"&&(N.innerHTML=Hn),Xt=i(t),g=p(t,"DIV",{class:!0});var Pt=r(g);X=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1llzxwj"&&(X.textContent=Mn),lt(J.$$.fragment,Pt),P=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-11f005f"&&(P.textContent=jn),wt=p(Pt,"PRE",{class:!0});var Vn=r(wt);Jt=ct(Vn,!1),Vn.forEach(n),Pt.forEach(n),tn=i(t),tt=p(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-grplxn"&&(tt.innerHTML=On),nn=i(t),x=p(t,"DIV",{class:!0});var St=r(x);nt=p(St,"DIV",{class:!0,"data-svelte-h":!0}),l(nt)!=="svelte-1llzxwj"&&(nt.textContent=zn),lt(st.$$.fragment,St),S=p(St,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-14i7xvz"&&(S.textContent=Gn),vt=p(St,"PRE",{class:!0});var Kn=r(vt);sn=ct(Kn,!1),Kn.forEach(n),St.forEach(n),an=i(t),at=p(t,"H2",{"data-svelte-h":!0}),l(at)!=="svelte-p2uhy5"&&(at.textContent=Rn),en=i(t),et=p(t,"P",{"data-svelte-h":!0}),l(et)!=="svelte-wbbqms"&&(et.textContent=$n),this.h()},h(){o(z,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNpdkE1LxDAQhv/KOBdbCLUKXnqTPUhBQdCbFZoms9tiTUoy1S0l/910K5XdS8g7H887MzPKYcBiRmU1YYGql97D8/QwDEBHJqM9xP9cmYqVI8n0ytLxizxQkp6iFTvi0RnYEks0VCZgEDhE7bF4n7HTWNwK3NtekytXcWa69W/Gi1g9NvfHsbv0fZITOZ+ptuu1I5OsyYrfIibj+CR1CfILuCXYd84znEpv+qXvqk7FWUMj1efB2dHone2tS2pHuk4vOZ6UNXoFCWhGBt8ZRVBCK78JJPxjQC0cAZMd4ceaa4YmFjQ9AdvIocu5sm2i9O+Qy/4BBR7jze5zgRMWd3kePsIvfPWdzg=="),o(v,"title","Open in our Online Editor"),Gt.a=null,o(ht,"class","language-js"),o(k,"class","remark-container tip"),o(R,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNp9kEFLxDAQhf/KOKcWQq2Cl970IgsKgt6ssDGZbgM1KZMpu6X0v5tupeAiXkLeTN77JjOh7nusJjTBElZoOh0jPI/3fQ90EvI2QrpPta/FMGmhV9EsL/pAWX6u1sIkA3vYGkt1rv2Ms8I+6YjV+4TOYnWjsAmdJd6t4hd082/gRayMjf44uEvukx6JY2Fa11kmn63NWt5STCHpyPY70F8gLUHjOAqcn153i+9qn6v/DJFM8HZ1KLCsjx6ch4aDFwjNZWgBD4NAdN4QHAk00x8e0qaFkJysIH3KOn9IOS7CwgajPXwStJptsQ2X/+x0WcWMCk9pfXelwhGr27KcP+ZvL8GhZw=="),o(C,"title","Open in our Online Editor"),$t.a=null,o(mt,"class","language-js"),o(d,"class","remark-container tip"),o(U,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqNk11LwzAUhv/KMVctlDoFbwpezF3oQEHcvHLCYnO6BmNSklPqGP3vpq2r7eYX/UrO4T1vzpN0x3hRsGTHUiOQJSxV3Dm4206LAvCdUAsHfrxb6RWlFjnhgrile77BIGyjK7JIpdXQJ5povdI1qyNW+LljydOOScGSs4hlRgm0824yMu31vXEz6Tz8I91UoaVFbiqpN3AJGVcO91nnw22+X1URHynIlvvFdapcCvxT1fv0sg7EdSkPEdzyLVoXp7lUwqIOumQnaq7TU1jmCMYKqbndwvXjPI7jffbBVC5+4enrxppSi5lRxgZrJd9wHX5TkxYFTzH6mi89t5j8K1gvc+nA33Totg4HgquSyOhPSdMw8Kb1E29n9EzJ9DUo4p7sUDm2HmS+Gp1q0dq3JUFqyKzRBCYDSRDI9uNrl0rACzajSodjFE1sngXHW9Lt5L+YtIU8zyo4C4/ZVrmkH+COcE4/sUQ/5G/Q4h531+8bOudPr9/dA9WI+UwZhyPa/Ykcqn4hPwYfDo5pzSL27v+yi0nEtiw5n0zq5/oDBnBwJw=="),o(y,"title","Open in our Online Editor"),Bt.a=null,o(ft,"class","language-js"),o(h,"class","remark-container tip"),o(V,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNplkE9LxDAQxb9KnMumUJaq7CU39SB7EAS9GaExGdtgNwnpFLuUfHfbrcZ/t3nvMfObmQlUCCAm0N4gCNCd6nt2d7wKgeFI6EzP5nqSTpKOqAgfSEW6Vw3y4uRKikhDdCwHi5ukS5BKCLPuQTxNYA2I8xJefWcw7lfxC5r7M3gRKyPTbwf7l3vtx1VL2r4o/dZEPzhz4zsf+Sai2RQ5freGWn5ZfTst2qYlvvth6dZ2hn9JSY/zOv8G1509YF1saQ55vWfqwKhFduo9q/Ow4vMXywkJShjns3dVCUcQF1WVntMHCAKI8Q=="),o(b,"title","Open in our Online Editor"),Kt.a=null,o(gt,"class","language-js"),o(m,"class","remark-container tip"),o(Y,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNplkMFKxDAQhl8lzmVTKEur7KU314PsQRD1ZoTGZGyD3SakU+hS8u6mW82i3vL9P5Mvkxmkc1DNoKxGqEB1chjYw+nWOYYTYa8HFs+z6AUpj5LwmaSnR9kgz86pII80+p6lYkmD6AOEHFzkAarXGYyGqszhw3Ya/WGFX9I0n8QLrI5kvx/NX+/eTisL2r5L9dl4O/b6znbW841HvclSLQeHip4kGctvclZemhZN0xIvd5dItabT/AcFvcRn/RPUnTlinW0plrw+MHlk1CI7z17V6bLs+0+WVQLkMMX1d0UOJ6iuiyK8hS9QVoue"),o(_,"title","Open in our Online Editor"),Zt.a=null,o(xt,"class","language-js"),o(f,"class","remark-container tip"),o(X,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNplkMFKxDAQhl8lzqUtlKUVvPSmHmQPgqg3IzQm4xrMNjGZYkvJu5tajai3+eZn5stkAeEcdAtIqxA6kEaEwK7nc+cYToSDCizVCx84SY+C8I6EpxtxwLL67HLySKMfWA7WbuRDhFiDSxyge1hAK+jaGp6tUej3G/yS5vksXmFzZPvVqP96L+y0Mafdk5CvB2/HQV1aY31ZeFRFlWMRHEq6FaRt2das/Unkizaq/EZO9+kN/7b1Rh+xr3aUwrLfF0eGb6MwZmbvWiETgVGikz6vrb6+Yr0gQg1TuvqsqWGG7rRp4mP8AJTmiMw="),o(P,"title","Open in our Online Editor"),Jt.a=null,o(wt,"class","language-js"),o(g,"class","remark-container tip"),o(nt,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNptkE1rwzAMhv+KplMCwSSFXXLbLqOHwWh7Wwb1Eq02pI6xVZIS/N9nL1voxi7Grz7eR9KM0lqsZ2yHjrDGtpfew/P1wVqgicl0HuJ/bkzDrSPJtGfp+EWeKMu/og074oszsCZSNDQmYCjQRu2xfp1Rd1hXBX4MfUduu4hf0LV/BSexMFb600X/5e6G0YtW6b5zZLIl1fDeypaKH3WIloLjkx0PihyB9lCVcNZ9r8/E5HyCOimEOOZr1+MwCUX6pDiryvw/s1jvEwjeiUciA6zIE/A4QCrwdzdutxPl3zdKqwUscIrnuC8LvGK9KcvwFj4BYkiRZQ=="),o(S,"title","Open in our Online Editor"),sn.a=null,o(vt,"class","language-js"),o(x,"class","remark-container tip")},m(t,s){a(t,w,s),a(t,Tt,s),a(t,T,s),a(t,It,s),a(t,I,s),a(t,Et,s),a(t,E,s),a(t,At,s),a(t,A,s),a(t,Lt,s),a(t,L,s),a(t,Ht,s),a(t,H,s),a(t,Mt,s),a(t,M,s),a(t,jt,s),a(t,j,s),a(t,Ot,s),a(t,O,s),a(t,zt,s),a(t,k,s),u(k,z),it(G,k,null),u(k,v),u(k,ht),Gt.m(Wn,ht),a(t,Rt,s),a(t,d,s),u(d,R),it($,d,null),u(d,C),u(d,mt),$t.m(Yn,mt),a(t,qt,s),a(t,q,s),a(t,Ut,s),a(t,h,s),u(h,U),it(B,h,null),u(h,y),u(h,ft),Bt.m(Zn,ft),a(t,Dt,s),a(t,D,s),a(t,Ft,s),a(t,F,s),a(t,Vt,s),a(t,m,s),u(m,V),it(K,m,null),u(m,b),u(m,gt),Kt.m(Nn,gt),a(t,Qt,s),a(t,Q,s),a(t,Wt,s),a(t,W,s),a(t,Yt,s),a(t,f,s),u(f,Y),it(Z,f,null),u(f,_),u(f,xt),Zt.m(Xn,xt),a(t,Nt,s),a(t,N,s),a(t,Xt,s),a(t,g,s),u(g,X),it(J,g,null),u(g,P),u(g,wt),Jt.m(Jn,wt),a(t,tn,s),a(t,tt,s),a(t,nn,s),a(t,x,s),u(x,nt),it(st,x,null),u(x,S),u(x,vt),sn.m(ts,vt),a(t,an,s),a(t,at,s),a(t,en,s),a(t,et,s),pn=!0},p:ss,i(t){pn||(ut(G.$$.fragment,t),ut($.$$.fragment,t),ut(B.$$.fragment,t),ut(K.$$.fragment,t),ut(Z.$$.fragment,t),ut(J.$$.fragment,t),ut(st.$$.fragment,t),pn=!0)},o(t){rt(G.$$.fragment,t),rt($.$$.fragment,t),rt(B.$$.fragment,t),rt(K.$$.fragment,t),rt(Z.$$.fragment,t),rt(J.$$.fragment,t),rt(st.$$.fragment,t),pn=!1},d(t){t&&(n(w),n(Tt),n(T),n(It),n(I),n(Et),n(E),n(At),n(A),n(Lt),n(L),n(Ht),n(H),n(Mt),n(M),n(jt),n(j),n(Ot),n(O),n(zt),n(k),n(Rt),n(d),n(qt),n(q),n(Ut),n(h),n(Dt),n(D),n(Ft),n(F),n(Vt),n(m),n(Qt),n(Q),n(Wt),n(W),n(Yt),n(f),n(Nt),n(N),n(Xt),n(g),n(tn),n(tt),n(nn),n(x),n(an),n(at),n(en),n(et)),kt(G),kt($),kt(B),kt(K),kt(Z),kt(J),kt(st)}}}class is extends as{constructor(w){super(),es(this,w,null,ps,ns,{})}}export{is as component};
