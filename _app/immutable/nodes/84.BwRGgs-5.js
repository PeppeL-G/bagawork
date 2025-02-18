import{s as ns,n as ss}from"../chunks/scheduler.B0TnBjPs.js";import{S as as,i as es,e,s as c,c as pt,H as ot,a as p,g as l,b as i,d as r,f as lt,n as ct,h as n,o,j as a,p as u,m as it,t as ut,k as rt,l as kt}from"../chunks/index.BXVnRmkj.js";import{V as dt}from"../chunks/ViewApp.qg7AIhJt.js";function ps(Kn){let v,on="3. Layouts",St,S,ln="This tutorial will teach you how the different layouts in BagaWork works.",It,I,cn="Repetition",At,A,un="This tutorial assumes you already know:",Et,E,rn='<li>That the GUI component returned from <code>Page.createGui()</code> will cover the entire screen</li> <li>How the <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> layout positions its children as rows</li> <li>How the <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layout positions its children as columns</li>',Lt,L,kn="In this tutorial you will learn a couple more layouts you can use.",Ht,H,dn="The <code>Layers</code> layout",jt,j,hn="In the <code>Layers</code> layout, all the children will be as big as the <code>Layer</code> layout itself, so they will be drawn in front of each other:",Ot,O,mn="<li>First, the first child passed to the <code>Layers</code> component will be drawn</li> <li>Then, the second child will be drawn in front of that one</li> <li>And so on...</li>",Mt,M,gn='So each child can be seen as a "layer".',Rt,k,R,fn="Example",G,w,xn="Open in Online Editor",ht,Gt,Wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, but since I have a background color, you won't be able to see the first child.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$t,d,$,vn="Example",q,y,wn="Open in Online Editor",mt,qt,Yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,zt,z,yn="The <code>Layers</code> layout is useful when you want to draw something in front of something else, for example a text in front of an image (learn about how to use images in your BagaWork apps in next tutorial). Another use-case is to show an alert message in the center of the screen.",Dt,h,D,Cn="Example",B,C,bn="Open in Online Editor",gt,Bt,Zn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Ft,F,_n="The <code>Box</code> layout",Ut,U,Tn="Sometimes you might want your GUI Component to have a specific width and height. Then you should use the <code>Box</code> layout. Unlike the <code>Rows</code>, <code>Columns</code> and <code>Layers</code> layouts, the <code>Box</code> layout can have only one child, and that child will have the specific size you specify by calling the configuration methods <code>width()</code> and <code>height()</code> on the <code>Box</code> layout (pass them the size expressed as a number). Pass it it&#39;s child by calling the configuration method <code>child()</code>.",Vt,m,V,Pn="Example",Q,b,Sn="Open in Online Editor",ft,Qt,Nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kt,K,In="The <code>Box</code> will by default have the size given to it by its parent layout, so you only need to call <code>width()</code> and <code>height()</code> if you want the <code>Box</code> to have a specific size specified by you.",Wt,W,An="Further more, it is also possible to use the configuration method <code>aspectRatio()</code> to set it&#39;s width/height based on the other one it has. For example, using <code>aspectRatio(3, 1)</code> means that the width should be 3 times as big as its height, so if you also use <code>height(15)</code>, it would get the width <code>45</code>.",Yt,g,Y,En="Example",Z,_,Ln="Open in Online Editor",xt,Zt,Xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Nt,N,Hn="This can be useful when you want the box to be as big as possible with a specific ratio between the width and the height. For example, to make a GUI component occupy the size of the biggest square possible that can it on the screen, simply use <code>aspectRatio(1, 1)</code>. This is really useful when you implement games that is displayed with a specific aspect ratio, such as <code>3:4</code>, or <code>10:16</code>.",Xt,f,X,jn="Example",J,T,On="Open in Online Editor",vt,Jt,Jn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm equally wide as tall!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tn,tt,Mn="The <code>Box</code> layout can also be used to occupy some space to position other children in a <code>Rows</code> or <code>Columns</code> layout where they should be.",nn,x,nt,Rn="Example",st,P,Gn="Open in Online Editor",wt,sn,ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There is 10 extra...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">...space between these two texts!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,an,at,$n="That's it!",en,et,qn="Look at that, now you know 4 layout components in total 🥳  Good work!",pn;return G=new dt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),q=new dt({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),Q=new dt({props:{project:{app:{code:`class MyApp extends App{
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
			Text.text(\`There is 10 extra...\`),
			Box.height(10),
			Text.text(\`...space between these two texts!\`),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),{c(){v=e("h1"),v.textContent=on,St=c(),S=e("p"),S.textContent=ln,It=c(),I=e("h2"),I.textContent=cn,At=c(),A=e("p"),A.textContent=un,Et=c(),E=e("ul"),E.innerHTML=rn,Lt=c(),L=e("p"),L.textContent=kn,Ht=c(),H=e("h2"),H.innerHTML=dn,jt=c(),j=e("p"),j.innerHTML=hn,Ot=c(),O=e("ol"),O.innerHTML=mn,Mt=c(),M=e("p"),M.textContent=gn,Rt=c(),k=e("div"),R=e("div"),R.textContent=fn,pt(G.$$.fragment),w=e("a"),w.textContent=xn,ht=e("pre"),Gt=new ot(!1),$t=c(),d=e("div"),$=e("div"),$.textContent=vn,pt(q.$$.fragment),y=e("a"),y.textContent=wn,mt=e("pre"),qt=new ot(!1),zt=c(),z=e("p"),z.innerHTML=yn,Dt=c(),h=e("div"),D=e("div"),D.textContent=Cn,pt(B.$$.fragment),C=e("a"),C.textContent=bn,gt=e("pre"),Bt=new ot(!1),Ft=c(),F=e("h2"),F.innerHTML=_n,Ut=c(),U=e("p"),U.innerHTML=Tn,Vt=c(),m=e("div"),V=e("div"),V.textContent=Pn,pt(Q.$$.fragment),b=e("a"),b.textContent=Sn,ft=e("pre"),Qt=new ot(!1),Kt=c(),K=e("p"),K.innerHTML=In,Wt=c(),W=e("p"),W.innerHTML=An,Yt=c(),g=e("div"),Y=e("div"),Y.textContent=En,pt(Z.$$.fragment),_=e("a"),_.textContent=Ln,xt=e("pre"),Zt=new ot(!1),Nt=c(),N=e("p"),N.innerHTML=Hn,Xt=c(),f=e("div"),X=e("div"),X.textContent=jn,pt(J.$$.fragment),T=e("a"),T.textContent=On,vt=e("pre"),Jt=new ot(!1),tn=c(),tt=e("p"),tt.innerHTML=Mn,nn=c(),x=e("div"),nt=e("div"),nt.textContent=Rn,pt(st.$$.fragment),P=e("a"),P.textContent=Gn,wt=e("pre"),sn=new ot(!1),an=c(),at=e("h2"),at.textContent=$n,en=c(),et=e("p"),et.textContent=qn,this.h()},l(t){v=p(t,"H1",{"data-svelte-h":!0}),l(v)!=="svelte-1jsfzla"&&(v.textContent=on),St=i(t),S=p(t,"P",{"data-svelte-h":!0}),l(S)!=="svelte-ahtko6"&&(S.textContent=ln),It=i(t),I=p(t,"H2",{"data-svelte-h":!0}),l(I)!=="svelte-18oxb3d"&&(I.textContent=cn),At=i(t),A=p(t,"P",{"data-svelte-h":!0}),l(A)!=="svelte-1xhihl9"&&(A.textContent=un),Et=i(t),E=p(t,"UL",{"data-svelte-h":!0}),l(E)!=="svelte-c9bq5r"&&(E.innerHTML=rn),Lt=i(t),L=p(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-k4skl5"&&(L.textContent=kn),Ht=i(t),H=p(t,"H2",{"data-svelte-h":!0}),l(H)!=="svelte-sg5e68"&&(H.innerHTML=dn),jt=i(t),j=p(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1c0ty4s"&&(j.innerHTML=hn),Ot=i(t),O=p(t,"OL",{"data-svelte-h":!0}),l(O)!=="svelte-1i3nnws"&&(O.innerHTML=mn),Mt=i(t),M=p(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-102ccfh"&&(M.textContent=gn),Rt=i(t),k=p(t,"DIV",{class:!0});var s=r(k);R=p(s,"DIV",{class:!0,"data-svelte-h":!0}),l(R)!=="svelte-1llzxwj"&&(R.textContent=fn),lt(G.$$.fragment,s),w=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-1afdz1q"&&(w.textContent=xn),ht=p(s,"PRE",{class:!0});var zn=r(ht);Gt=ct(zn,!1),zn.forEach(n),s.forEach(n),$t=i(t),d=p(t,"DIV",{class:!0});var yt=r(d);$=p(yt,"DIV",{class:!0,"data-svelte-h":!0}),l($)!=="svelte-1llzxwj"&&($.textContent=vn),lt(q.$$.fragment,yt),y=p(yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-qcvxpk"&&(y.textContent=wn),mt=p(yt,"PRE",{class:!0});var Dn=r(mt);qt=ct(Dn,!1),Dn.forEach(n),yt.forEach(n),zt=i(t),z=p(t,"P",{"data-svelte-h":!0}),l(z)!=="svelte-c5ipw8"&&(z.innerHTML=yn),Dt=i(t),h=p(t,"DIV",{class:!0});var Ct=r(h);D=p(Ct,"DIV",{class:!0,"data-svelte-h":!0}),l(D)!=="svelte-1llzxwj"&&(D.textContent=Cn),lt(B.$$.fragment,Ct),C=p(Ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-137ztkd"&&(C.textContent=bn),gt=p(Ct,"PRE",{class:!0});var Bn=r(gt);Bt=ct(Bn,!1),Bn.forEach(n),Ct.forEach(n),Ft=i(t),F=p(t,"H2",{"data-svelte-h":!0}),l(F)!=="svelte-rz5hv1"&&(F.innerHTML=_n),Ut=i(t),U=p(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-d8kmni"&&(U.innerHTML=Tn),Vt=i(t),m=p(t,"DIV",{class:!0});var bt=r(m);V=p(bt,"DIV",{class:!0,"data-svelte-h":!0}),l(V)!=="svelte-1llzxwj"&&(V.textContent=Pn),lt(Q.$$.fragment,bt),b=p(bt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-1awram1"&&(b.textContent=Sn),ft=p(bt,"PRE",{class:!0});var Fn=r(ft);Qt=ct(Fn,!1),Fn.forEach(n),bt.forEach(n),Kt=i(t),K=p(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-10g5ocx"&&(K.innerHTML=In),Wt=i(t),W=p(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-ltm5q7"&&(W.innerHTML=An),Yt=i(t),g=p(t,"DIV",{class:!0});var _t=r(g);Y=p(_t,"DIV",{class:!0,"data-svelte-h":!0}),l(Y)!=="svelte-1llzxwj"&&(Y.textContent=En),lt(Z.$$.fragment,_t),_=p(_t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-prcifl"&&(_.textContent=Ln),xt=p(_t,"PRE",{class:!0});var Un=r(xt);Zt=ct(Un,!1),Un.forEach(n),_t.forEach(n),Nt=i(t),N=p(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-m162fd"&&(N.innerHTML=Hn),Xt=i(t),f=p(t,"DIV",{class:!0});var Tt=r(f);X=p(Tt,"DIV",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1llzxwj"&&(X.textContent=jn),lt(J.$$.fragment,Tt),T=p(Tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-11f005f"&&(T.textContent=On),vt=p(Tt,"PRE",{class:!0});var Vn=r(vt);Jt=ct(Vn,!1),Vn.forEach(n),Tt.forEach(n),tn=i(t),tt=p(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-grplxn"&&(tt.innerHTML=Mn),nn=i(t),x=p(t,"DIV",{class:!0});var Pt=r(x);nt=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),l(nt)!=="svelte-1llzxwj"&&(nt.textContent=Rn),lt(st.$$.fragment,Pt),P=p(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-1niw4at"&&(P.textContent=Gn),wt=p(Pt,"PRE",{class:!0});var Qn=r(wt);sn=ct(Qn,!1),Qn.forEach(n),Pt.forEach(n),an=i(t),at=p(t,"H2",{"data-svelte-h":!0}),l(at)!=="svelte-p2uhy5"&&(at.textContent=$n),en=i(t),et=p(t,"P",{"data-svelte-h":!0}),l(et)!=="svelte-wbbqms"&&(et.textContent=qn),this.h()},h(){o(R,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNpdkE1LxDAQhv/KOBdbCLUKXnqTPUhBQdCbFZoms9tiTUoy1S0l/910K5XdS8g7H887MzPKYcBiRmU1YYGql97D8/QwDEBHJqM9xP9cmYqVI8n0ytLxizxQkp6iFTvi0RnYEks0VCZgEDhE7bF4n7HTWNwK3NtekytXcWa69W/Gi1g9NvfHsbv0fZITOZ+ptuu1I5OsyYrfIibj+CR1CfILuCXYd84znEpv+qXvqk7FWUMj1efB2dHone2tS2pHuk4vOZ6UNXoFCWhGBt8ZRVBCK78JJPxjQC0cAZMd4ceaa4YmFjQ9AdvIocu5sm2i9O+Qy/4BBR7jze5zgRMWd3kePsIvfPWdzg=="),o(w,"title","Open in our Online Editor"),Gt.a=null,o(ht,"class","language-js"),o(k,"class","remark-container tip"),o($,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNp9kEFLxDAQhf/KOKcWQq2Cl970IgsKgt6ssDGZbgM1KZMpu6X0v5tupeAiXkLeTN77JjOh7nusJjTBElZoOh0jPI/3fQ90EvI2QrpPta/FMGmhV9EsL/pAWX6u1sIkA3vYGkt1rv2Ms8I+6YjV+4TOYnWjsAmdJd6t4hd082/gRayMjf44uEvukx6JY2Fa11kmn63NWt5STCHpyPY70F8gLUHjOAqcn153i+9qn6v/DJFM8HZ1KLCsjx6ch4aDFwjNZWgBD4NAdN4QHAk00x8e0qaFkJysIH3KOn9IOS7CwgajPXwStJptsQ2X/+x0WcWMCk9pfXelwhGr27KcP+ZvL8GhZw=="),o(y,"title","Open in our Online Editor"),qt.a=null,o(mt,"class","language-js"),o(d,"class","remark-container tip"),o(D,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqNk11LwzAUhv/KMVctlDoFbwpezF3oQEHcvHLCYnO6BmNSklPqGP3vpq2r7eYX/UrO4T1vzpN0x3hRsGTHUiOQJSxV3Dm4206LAvCdUAsHfrxb6RWlFjnhgrile77BIGyjK7JIpdXQJ5povdI1qyNW+LljydOOScGSs4hlRgm0824yMu31vXEz6Tz8I91UoaVFbiqpN3AJGVcO91nnw22+X1URHynIlvvFdapcCvxT1fv0sg7EdSkPEdzyLVoXp7lUwqIOumQnaq7TU1jmCMYKqbndwvXjPI7jffbBVC5+4enrxppSi5lRxgZrJd9wHX5TkxYFTzH6mi89t5j8K1gvc+nA33Totg4HgquSyOhPSdMw8Kb1E29n9EzJ9DUo4p7sUDm2HmS+Gp1q0dq3JUFqyKzRBCYDSRDI9uNrl0rACzajSodjFE1sngXHW9Lt5L+YtIU8zyo4C4/ZVrmkH+COcE4/sUQ/5G/Q4h531+8bOudPr9/dA9WI+UwZhyPa/Ykcqn4hPwYfDo5pzSL27v+yi0nEtiw5n0zq5/oDBnBwJw=="),o(C,"title","Open in our Online Editor"),Bt.a=null,o(gt,"class","language-js"),o(h,"class","remark-container tip"),o(V,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNplkE9LxDAQxb9KnMumUJaq7CU39SB7EAS9GaExGdtgNwnpFLuUfHfbrcZ/t3nvMfObmQlUCCAm0N4gCNCd6nt2d7wKgeFI6EzP5nqSTpKOqAgfSEW6Vw3y4uRKikhDdCwHi5ukS5BKCLPuQTxNYA2I8xJefWcw7lfxC5r7M3gRKyPTbwf7l3vtx1VL2r4o/dZEPzhz4zsf+Sai2RQ5freGWn5ZfTst2qYlvvth6dZ2hn9JSY/zOv8G1509YF1saQ55vWfqwKhFduo9q/Ow4vMXywkJShjns3dVCUcQF1WVntMHCAKI8Q=="),o(b,"title","Open in our Online Editor"),Qt.a=null,o(ft,"class","language-js"),o(m,"class","remark-container tip"),o(Y,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNplkMFKxDAQhl8lzmVTKEur7KU314PsQRD1ZoTGZGyD3SakU+hS8u6mW82i3vL9P5Mvkxmkc1DNoKxGqEB1chjYw+nWOYYTYa8HFs+z6AUpj5LwmaSnR9kgz86pII80+p6lYkmD6AOEHFzkAarXGYyGqszhw3Ya/WGFX9I0n8QLrI5kvx/NX+/eTisL2r5L9dl4O/b6znbW841HvclSLQeHip4kGctvclZemhZN0xIvd5dItabT/AcFvcRn/RPUnTlinW0plrw+MHlk1CI7z17V6bLs+0+WVQLkMMX1d0UOJ6iuiyK8hS9QVoue"),o(_,"title","Open in our Online Editor"),Zt.a=null,o(xt,"class","language-js"),o(g,"class","remark-container tip"),o(X,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNplkMFKxDAQhl8lzqUtlKUVvPSmHmQPgqg3IzQm4xrMNjGZYkvJu5tajai3+eZn5stkAeEcdAtIqxA6kEaEwK7nc+cYToSDCizVCx84SY+C8I6EpxtxwLL67HLySKMfWA7WbuRDhFiDSxyge1hAK+jaGp6tUej3G/yS5vksXmFzZPvVqP96L+y0Mafdk5CvB2/HQV1aY31ZeFRFlWMRHEq6FaRt2das/Unkizaq/EZO9+kN/7b1Rh+xr3aUwrLfF0eGb6MwZmbvWiETgVGikz6vrb6+Yr0gQg1TuvqsqWGG7rRp4mP8AJTmiMw="),o(T,"title","Open in our Online Editor"),Jt.a=null,o(vt,"class","language-js"),o(f,"class","remark-container tip"),o(nt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNptkEFLxDAQhf9KnFMLJaSCl970InsQxN2bETY24yZQ0pDM0i4l/93EalnFS8ibeXnfZBZQ3kO3QD9qhA76QcXIni733jOcCZ2OLN8X6ST1ARXhnlSgZ3XCqv6qSgpI5+DY1ijVJF2C1IDPOkL3uoDV0LUNfIyDxrBbxS/o9n4DF7EyNvrj2f7lvoxT5L2xgw7oqrUlae9Vj82POuRITvmojgeDAZmNrBUFFBTn/Fhvzodx5gbtyVDVivq/gOyPJZy9I02IjpHBiIymkRVDvLlKu56i/t5L+U6CBua8gjvRwAW6WyHSW/oETomMng=="),o(P,"title","Open in our Online Editor"),sn.a=null,o(wt,"class","language-js"),o(x,"class","remark-container tip")},m(t,s){a(t,v,s),a(t,St,s),a(t,S,s),a(t,It,s),a(t,I,s),a(t,At,s),a(t,A,s),a(t,Et,s),a(t,E,s),a(t,Lt,s),a(t,L,s),a(t,Ht,s),a(t,H,s),a(t,jt,s),a(t,j,s),a(t,Ot,s),a(t,O,s),a(t,Mt,s),a(t,M,s),a(t,Rt,s),a(t,k,s),u(k,R),it(G,k,null),u(k,w),u(k,ht),Gt.m(Wn,ht),a(t,$t,s),a(t,d,s),u(d,$),it(q,d,null),u(d,y),u(d,mt),qt.m(Yn,mt),a(t,zt,s),a(t,z,s),a(t,Dt,s),a(t,h,s),u(h,D),it(B,h,null),u(h,C),u(h,gt),Bt.m(Zn,gt),a(t,Ft,s),a(t,F,s),a(t,Ut,s),a(t,U,s),a(t,Vt,s),a(t,m,s),u(m,V),it(Q,m,null),u(m,b),u(m,ft),Qt.m(Nn,ft),a(t,Kt,s),a(t,K,s),a(t,Wt,s),a(t,W,s),a(t,Yt,s),a(t,g,s),u(g,Y),it(Z,g,null),u(g,_),u(g,xt),Zt.m(Xn,xt),a(t,Nt,s),a(t,N,s),a(t,Xt,s),a(t,f,s),u(f,X),it(J,f,null),u(f,T),u(f,vt),Jt.m(Jn,vt),a(t,tn,s),a(t,tt,s),a(t,nn,s),a(t,x,s),u(x,nt),it(st,x,null),u(x,P),u(x,wt),sn.m(ts,wt),a(t,an,s),a(t,at,s),a(t,en,s),a(t,et,s),pn=!0},p:ss,i(t){pn||(ut(G.$$.fragment,t),ut(q.$$.fragment,t),ut(B.$$.fragment,t),ut(Q.$$.fragment,t),ut(Z.$$.fragment,t),ut(J.$$.fragment,t),ut(st.$$.fragment,t),pn=!0)},o(t){rt(G.$$.fragment,t),rt(q.$$.fragment,t),rt(B.$$.fragment,t),rt(Q.$$.fragment,t),rt(Z.$$.fragment,t),rt(J.$$.fragment,t),rt(st.$$.fragment,t),pn=!1},d(t){t&&(n(v),n(St),n(S),n(It),n(I),n(At),n(A),n(Et),n(E),n(Lt),n(L),n(Ht),n(H),n(jt),n(j),n(Ot),n(O),n(Mt),n(M),n(Rt),n(k),n($t),n(d),n(zt),n(z),n(Dt),n(h),n(Ft),n(F),n(Ut),n(U),n(Vt),n(m),n(Kt),n(K),n(Wt),n(W),n(Yt),n(g),n(Nt),n(N),n(Xt),n(f),n(tn),n(tt),n(nn),n(x),n(an),n(at),n(en),n(et)),kt(G),kt(q),kt(B),kt(Q),kt(Z),kt(J),kt(st)}}}class is extends as{constructor(v){super(),es(this,v,null,ps,ns,{})}}export{is as component};
