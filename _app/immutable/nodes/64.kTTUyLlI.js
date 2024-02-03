import{s as fe,n as ge}from"../chunks/scheduler.UQwd20JU.js";import{S as xe,i as me,e as a,s as i,c as dt,H as kt,a as s,g as l,b as u,d as r,f as ht,n as ft,h as n,o,j as p,p as c,m as gt,t as xt,k as mt,l as vt}from"../chunks/index.i__Fl8cY.js";import{V as wt}from"../chunks/ViewApp.m6vzcyjb.js";function ve(le){let d,yn="2. Layouts",At,B,Sn="This tutorial will teach you how the different layouts in BagaWork works.",Et,A,Cn="Repetition",It,E,Pn="This tutorial assumes you already know:",Rt,I,Tn='<li>That the GUI component returned from <code>Page.createGui()</code> will cover the entire screen</li> <li>How the <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> layout positions its children as rows</li> <li>How the <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layout positions its children as columns</li>',_t,R,bn="In this tutorial you will learn a couple more layouts you can use.",Gt,_,Bn="The <code>Layers</code> layout",jt,G,An="In the <code>Layers</code> layout, all the children will be as big as the <code>Layer</code> layout itself, so they will be drawn in front of each other:",Lt,j,En="<li>First, the first child passed to the <code>Layers</code> component will be drawn</li> <li>Then, the second child will be drawn in front of that one</li> <li>And so on...</li>",Ht,L,In='So each child can be seen as a "layer".',zt,w,H,Rn="Example",z,M,k,_n="Open in Online Editor",yt,Mt,ce=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, but since I have a background color, you won't be able to see the first child.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Nt,y,N,Gn="Example",Y,D,h,jn="Open in Online Editor",St,Yt,ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the first child/layer!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dt,U,Ln="The <code>Layers</code> layout is useful when you want to draw something in front of something else, for example a text in front of an image (learn about how to use images in your BagaWork apps in next tutorial). Another use-case is to show an alert message in the center of the screen.",Ut,S,q,Hn="Example",V,X,f,zn="Open in Online Editor",Ct,qt,ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Show alert!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>showAlert<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			<span class="token comment">// And the alert in front of it (if it should be shown).</span>
			Rows<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isAlertShowing <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alert!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here is the alert message...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Close</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>hideAlert<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
			
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,O,Mn="The <code>Box</code> layout",Xt,K,Nn="Sometimes you might want your GUI Component to have a specific width and height. Then you should use the <code>Box</code> layout. Unlike the <code>Rows</code>, <code>Columns</code> and <code>Layers</code> layouts, the <code>Box</code> layout can only have one child, and that child will have the specific size you specify by calling the configuration methods <code>width()</code> and <code>height()</code> on the <code>Box</code> layout (pass them the size expressed in number of millimeters). Pass it it&#39;s child by calling the configuration method <code>child()</code>.",Ot,C,Z,Yn="Example",W,F,g,Dn="Open in Online Editor",Pt,Kt,re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zt,Q,Un="The <code>Box</code> will by default have the size given to it by its parent layout, so you only need to call <code>width()</code> and <code>height()</code> if you want the <code>Box</code> to have a specific number of millimeters size specified by you.",Wt,J,qn="Further more, it is also possible to use the configuration method <code>aspectRatio()</code> to set it&#39;s width/height based on the other one it has. For example, using <code>aspectRatio(3, 1)</code> means that the width should be 3 times as big as its height, so if you also use <code>height(15)</code>, it would get the width 45 millimeters.",Ft,P,$,Vn="Example",tt,nt,x,Xn="Open in Online Editor",Tt,Qt,de=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am the child!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jt,et,On="This can be useful when you want the box to be as big as possible with a specific ratio between the width and the height. For example, to make a GUI component occupy the size of the biggest square possible that can it on the screen, simply use <code>aspectRatio(1, 1)</code>. This is really useful when you implement games that is displayed with a specific aspect ratio, such as <code>3:4</code>, or <code>10:16</code>.",$t,T,at,Kn="Example",st,pt,m,Zn="Open in Online Editor",bt,tn,ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm equally wide as tall!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nn,ot,Wn="The <code>Box</code> layout can also be used to occupy some space to position other children in a <code>Rows</code> or <code>Columns</code> layout where they should be.",en,b,lt,Fn="Example",ct,it,v,Qn="Open in Online Editor",Bt,an,he=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There is 10 millimeters extra...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">...space between these two texts!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,sn,ut,Jn="That's it!",pn,rt,$n="Look at that, now you know 4 layout components in total 🥳  Good work!",on;return M=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(\`I am the first child/layer!\`),
			Text.backgroundColor(\`red\`).text(\`I am the second child, but since I have a background color, you won't be able to see the first child.\`),
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
	
}`}]}}}),D=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Layers.children(
			Text.text(\`I am the first child/layer!\`),
			Text.text(\`I am the second child, drawn in front of the first child. But since we are drawn in front of each other, reading this text can be hard.\`),
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
	
}`}]}}}),X=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
				Button.text(\`Show alert!\`).handler(p.showAlert),
				Space,
			),
			
			// And the alert in front of it (if it should be shown).
			Rows.showIf(p.isAlertShowing == true).children(
				Space,
				Rows.size(1).backgroundColor(\`white\`).children(
					Text.text(\`Alert!\`),
					Text.text(\`Here is the alert message...\`),
					Button.text(\`Close\`).handler(p.hideAlert),
				),
				Space,
			)
			
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
	
}`}]}}}),F=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.width(30)
			.height(50)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I am the child!\`)
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
	
}`}]}}}),nt=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(3, 1)
			.height(15)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I am the child!\`)
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
	
}`}]}}}),pt=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box
			.backgroundColor('red')
			.aspectRatio(1, 1)
			.child(
				Text.backgroundColor(\`lime\`).text(\`I'm equally wide as tall!\`)
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
	
}`}]}}}),it=new wt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`There is 10 millimeters extra...\`),
			Box.height(10),
			Text.text(\`...space between these two texts!\`),
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
	
}`}]}}}),{c(){d=a("h1"),d.textContent=yn,At=i(),B=a("p"),B.textContent=Sn,Et=i(),A=a("h2"),A.textContent=Cn,It=i(),E=a("p"),E.textContent=Pn,Rt=i(),I=a("ul"),I.innerHTML=Tn,_t=i(),R=a("p"),R.textContent=bn,Gt=i(),_=a("h2"),_.innerHTML=Bn,jt=i(),G=a("p"),G.innerHTML=An,Lt=i(),j=a("ol"),j.innerHTML=En,Ht=i(),L=a("p"),L.textContent=In,zt=i(),w=a("div"),H=a("div"),H.textContent=Rn,z=a("div"),dt(M.$$.fragment),k=a("a"),k.textContent=_n,yt=a("pre"),Mt=new kt(!1),Nt=i(),y=a("div"),N=a("div"),N.textContent=Gn,Y=a("div"),dt(D.$$.fragment),h=a("a"),h.textContent=jn,St=a("pre"),Yt=new kt(!1),Dt=i(),U=a("p"),U.innerHTML=Ln,Ut=i(),S=a("div"),q=a("div"),q.textContent=Hn,V=a("div"),dt(X.$$.fragment),f=a("a"),f.textContent=zn,Ct=a("pre"),qt=new kt(!1),Vt=i(),O=a("h2"),O.innerHTML=Mn,Xt=i(),K=a("p"),K.innerHTML=Nn,Ot=i(),C=a("div"),Z=a("div"),Z.textContent=Yn,W=a("div"),dt(F.$$.fragment),g=a("a"),g.textContent=Dn,Pt=a("pre"),Kt=new kt(!1),Zt=i(),Q=a("p"),Q.innerHTML=Un,Wt=i(),J=a("p"),J.innerHTML=qn,Ft=i(),P=a("div"),$=a("div"),$.textContent=Vn,tt=a("div"),dt(nt.$$.fragment),x=a("a"),x.textContent=Xn,Tt=a("pre"),Qt=new kt(!1),Jt=i(),et=a("p"),et.innerHTML=On,$t=i(),T=a("div"),at=a("div"),at.textContent=Kn,st=a("div"),dt(pt.$$.fragment),m=a("a"),m.textContent=Zn,bt=a("pre"),tn=new kt(!1),nn=i(),ot=a("p"),ot.innerHTML=Wn,en=i(),b=a("div"),lt=a("div"),lt.textContent=Fn,ct=a("div"),dt(it.$$.fragment),v=a("a"),v.textContent=Qn,Bt=a("pre"),an=new kt(!1),sn=i(),ut=a("h2"),ut.textContent=Jn,pn=i(),rt=a("p"),rt.textContent=$n,this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-1jsyi5n"&&(d.textContent=yn),At=u(t),B=s(t,"P",{"data-svelte-h":!0}),l(B)!=="svelte-ahtko6"&&(B.textContent=Sn),Et=u(t),A=s(t,"H2",{"data-svelte-h":!0}),l(A)!=="svelte-18oxb3d"&&(A.textContent=Cn),It=u(t),E=s(t,"P",{"data-svelte-h":!0}),l(E)!=="svelte-1xhihl9"&&(E.textContent=Pn),Rt=u(t),I=s(t,"UL",{"data-svelte-h":!0}),l(I)!=="svelte-c9bq5r"&&(I.innerHTML=Tn),_t=u(t),R=s(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-k4skl5"&&(R.textContent=bn),Gt=u(t),_=s(t,"H2",{"data-svelte-h":!0}),l(_)!=="svelte-sg5e68"&&(_.innerHTML=Bn),jt=u(t),G=s(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1c0ty4s"&&(G.innerHTML=An),Lt=u(t),j=s(t,"OL",{"data-svelte-h":!0}),l(j)!=="svelte-1i3nnws"&&(j.innerHTML=En),Ht=u(t),L=s(t,"P",{"data-svelte-h":!0}),l(L)!=="svelte-102ccfh"&&(L.textContent=In),zt=u(t),w=s(t,"DIV",{class:!0});var e=r(w);H=s(e,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1llzxwj"&&(H.textContent=Rn),z=s(e,"DIV",{});var ln=r(z);ht(M.$$.fragment,ln),k=s(ln,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(k)!=="svelte-1w8q3xx"&&(k.textContent=_n),yt=s(ln,"PRE",{class:!0});var te=r(yt);Mt=ft(te,!1),te.forEach(n),ln.forEach(n),e.forEach(n),Nt=u(t),y=s(t,"DIV",{class:!0});var fn=r(y);N=s(fn,"DIV",{class:!0,"data-svelte-h":!0}),l(N)!=="svelte-1llzxwj"&&(N.textContent=Gn),Y=s(fn,"DIV",{});var cn=r(Y);ht(D.$$.fragment,cn),h=s(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1q8iolp"&&(h.textContent=jn),St=s(cn,"PRE",{class:!0});var ne=r(St);Yt=ft(ne,!1),ne.forEach(n),cn.forEach(n),fn.forEach(n),Dt=u(t),U=s(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-c5ipw8"&&(U.innerHTML=Ln),Ut=u(t),S=s(t,"DIV",{class:!0});var gn=r(S);q=s(gn,"DIV",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1llzxwj"&&(q.textContent=Hn),V=s(gn,"DIV",{});var un=r(V);ht(X.$$.fragment,un),f=s(un,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-1msotza"&&(f.textContent=zn),Ct=s(un,"PRE",{class:!0});var ee=r(Ct);qt=ft(ee,!1),ee.forEach(n),un.forEach(n),gn.forEach(n),Vt=u(t),O=s(t,"H2",{"data-svelte-h":!0}),l(O)!=="svelte-rz5hv1"&&(O.innerHTML=Mn),Xt=u(t),K=s(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-19yuw92"&&(K.innerHTML=Nn),Ot=u(t),C=s(t,"DIV",{class:!0});var xn=r(C);Z=s(xn,"DIV",{class:!0,"data-svelte-h":!0}),l(Z)!=="svelte-1llzxwj"&&(Z.textContent=Yn),W=s(xn,"DIV",{});var rn=r(W);ht(F.$$.fragment,rn),g=s(rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-5yxj0z"&&(g.textContent=Dn),Pt=s(rn,"PRE",{class:!0});var ae=r(Pt);Kt=ft(ae,!1),ae.forEach(n),rn.forEach(n),xn.forEach(n),Zt=u(t),Q=s(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-1u4klc2"&&(Q.innerHTML=Un),Wt=u(t),J=s(t,"P",{"data-svelte-h":!0}),l(J)!=="svelte-12osomb"&&(J.innerHTML=qn),Ft=u(t),P=s(t,"DIV",{class:!0});var mn=r(P);$=s(mn,"DIV",{class:!0,"data-svelte-h":!0}),l($)!=="svelte-1llzxwj"&&($.textContent=Vn),tt=s(mn,"DIV",{});var dn=r(tt);ht(nt.$$.fragment,dn),x=s(dn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-1w4iend"&&(x.textContent=Xn),Tt=s(dn,"PRE",{class:!0});var se=r(Tt);Qt=ft(se,!1),se.forEach(n),dn.forEach(n),mn.forEach(n),Jt=u(t),et=s(t,"P",{"data-svelte-h":!0}),l(et)!=="svelte-m162fd"&&(et.innerHTML=On),$t=u(t),T=s(t,"DIV",{class:!0});var vn=r(T);at=s(vn,"DIV",{class:!0,"data-svelte-h":!0}),l(at)!=="svelte-1llzxwj"&&(at.textContent=Kn),st=s(vn,"DIV",{});var kn=r(st);ht(pt.$$.fragment,kn),m=s(kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-1lrf27x"&&(m.textContent=Zn),bt=s(kn,"PRE",{class:!0});var pe=r(bt);tn=ft(pe,!1),pe.forEach(n),kn.forEach(n),vn.forEach(n),nn=u(t),ot=s(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-grplxn"&&(ot.innerHTML=Wn),en=u(t),b=s(t,"DIV",{class:!0});var wn=r(b);lt=s(wn,"DIV",{class:!0,"data-svelte-h":!0}),l(lt)!=="svelte-1llzxwj"&&(lt.textContent=Fn),ct=s(wn,"DIV",{});var hn=r(ct);ht(it.$$.fragment,hn),v=s(hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-1a0gzn5"&&(v.textContent=Qn),Bt=s(hn,"PRE",{class:!0});var oe=r(Bt);an=ft(oe,!1),oe.forEach(n),hn.forEach(n),wn.forEach(n),sn=u(t),ut=s(t,"H2",{"data-svelte-h":!0}),l(ut)!=="svelte-p2uhy5"&&(ut.textContent=Jn),pn=u(t),rt=s(t,"P",{"data-svelte-h":!0}),l(rt)!=="svelte-wbbqms"&&(rt.textContent=$n),this.h()},h(){o(H,"class","remark-container__title"),o(k,"target","_blank"),o(k,"href","/editor#eNrFU9Fq2zAU/ZU7vdQGkTUJgeGX4Y4xAtsYa2ErSyGKfZ2YKpKRrtaG4H+fFK9pZNySPe3BRvK959yjc+Q9E03Dsj0rdIksY4UU1sKXXd40gI+EqrTg1/uFWlB4CoOC8JqEoW9ijUnaVcggOaPgWAhf2w7UspazSssSjWXZrz2rS5aNOVNiGyYeIIwzXVUW6SfLLp/Wt37d3nHWeL4I2ZHNu00k/Dj/KD5seuo/ubqv+7PYeXWjYlPL0qBKuuKCbjzNiPwrWc5BbIE2CFVtLMGh9a0MuDfLlEeAlSju10Y7VX7QUptkabBcpn0ei4VWZUfEYeUIbK0KhDlsxG8EAc80UAQeDjvt4EGrC4KVb1hJBNKeB/u6RkdFaRQEZ4/es9mMsx3LptPpk7s3uG2kdyZyOTI2t/fzKi+dfMVdra6w0ub5UpzMfsX77/phwPnrRhTIB3LIDR58ONwBf3ChYPzu/UkEMdIn4LZqYEC/cUFXjvwZ/o75qn1iwZtEOSlTfibsFu15uKGAgoV5RWiGHAy/UZfNpJfNR+Uh+Rr/dzI/NoIubAjHgJ/+ciaRY+PLYcPiptkZTZNzmCYvMJ0q/JdM7to/a6Tnkg=="),o(k,"title","Open in our Online Editor"),Mt.a=null,o(yt,"class","language-js"),o(w,"class","remark-container tip"),o(N,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNrFU9Fq2zAU/ZVbvSwG4TUJgeGX4ZYyAt0Ya2EtSyGqdBWbKZKRZNIQ/O+T4jWLjRuypz7YSNY959x7jrwjrKpItiPcCCQZ4Yo5B1+3eVUBvnjUwkFY7xZ64ePDLTKPd55Z/52tcJS0J96ir62Gw0H82rSghjSUSKMEWkeyXztSCpKNKdFsHRX3EEKJkdKhfyDZ5ev6MaybJ0qqwNdBtmTzdtNp/KB/aD5uet1/qct+37dsG7pLeVEqYVGP2sOFvw80qQ+v0XIObA2+QJCldR72pR9VxF0sE3oK4JAbLVoEBWHZRkOpQVqjPRjZJ03hqvbgSs0RNgjM4gAGGS/ABKSlEIYSpV4FntJB1AbONDwjFMyK9NBc0smEkpdg32xGyZZk0+n01eh7XFcqmNQxvONx7n7PZS5qdcJoo69QGvvvfhxpn4jhh9kMhHBXMY5DDufBmq2pYX8dwvhh6vGnz0dpdJHXRtVrPSDQL1z4kECY4a/MN7NM0ujNSNdKJfRM2CO683BDAUULc+nRDjkY/6g2m0kvmxsdIPkK3zuZnwXzH1wMx0JQfzuTjmPjy2HDukWzM4om5zBN3mA67vB/Mnlq/gDJ+esr"),o(h,"title","Open in our Online Editor"),Yt.a=null,o(St,"class","language-js"),o(y,"class","remark-container tip"),o(q,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNrFlG1r2zAQx7+KpjezwbhNQmAYxnDL6ALbGGvGVpZCVOsciyqSkWTSLPi7V7Zrx8pD570aeZJ9+d/pfn+dd5jkOY52OJEUcIQTTrRGX7ZxniN4MiCoRna9W4iFqT6JAmLg1hBlvpEVeH4TMQpMoQTqAtXdshGVuAxwKjkFpXH0e4cZxdEowIKsq4q1BAdYpqkG8wtHl+36zq7L+wDnNp+jbJLNmgtn4139bvPVRbd7pmMOytxmcsPECr1HKeEa2qi2t+t411UeHimMKvrNLUzGKPxV1dUpXZA3BTtE+JlsLagwyRinCoTXBBtR9bq4QPMMkFSUCaK26ObHLAzDNvpdbnT4QJLHlZKFoNeSS+UtOVvD0j+R09zmJIFgfz233EJjv7zlPGMa2bc5rLb0e4KrwhgpXiRVw4hUrb+x5TIiqF17ediR7Svd0r3IvtFY0Lp8nRIxgVIlhUEyRcwgj9U/NnfBKXqAarURvouiujdLvWNLGicHMWkSsT/gjfxjtpuMmTNwHZzxC5bgTPwTKGhxN/2uQWt7eq27ByqH+TWXGhza3Ynsq14h74L3ndEN8JOdsuk0wFscTSaTdh7nsM65PcDOXDqjGOvHWRrTgr8yj1JcQSrV/jEybERqQ454u131yVuwW1mg+qlh+RKBRu8+9Ji6SutrsRZ6yMlwjPgqrQsVG08UnJ/nfSC7Az1M10Z8B5IUcWqs7ScIVg/expvxgTcfhZXEK/jfzvzMiHmrK3MUstXPe+IQG12eBub+aTrgT+MhmcZnMvV3+C+e3JfPb7q6HQ=="),o(f,"title","Open in our Online Editor"),qt.a=null,o(Ct,"class","language-js"),o(S,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNrFk11r2zAUhv+Kem5igyj5IDB8U5wxRi5WxlrYSl2wZh/HprJkpGOaEPzfJ8e1G2dpya52YdDR0Xs+nhfvQVQVBHtIdIoQQCKFtezbLqwqhltClVrmzvtIRdR+iUFBeEfC0HexQc/vMmSQaqPYkGhvm07UQMMh0zJFYyF43EORQjDjoETZdjxIgIPOMov0C4Jpf35w5+aJQ+XqjZRdsXUXjAYf+g/Dt8HJ9F/r4nTuld52cUTXv0XyvDG6VulnLbXxJgbTiT+kX4qUcm8xfbvJsdjk5C2PrpK8kKnXhxHdu3H+KhzLosTYvyaX9OI1EyWjHNlBexUPxfwRSw5bt/ZyyWEHwWKx6AHdY1lJt9wI1IhNaJ/XWZjW8gNAWq0w0+bN16PeH+D7oV9st7NBNax9V4kEeR8dEHSrhgbZTtfsYKPbWSg2+3QT+/y80tGqS3WmwenDiFY1uR1e29xqB7dl46laSp9fKHtAe5muz/gjSFqFGaE5R7D9Ezpv5ifefFFOEm7wfzvzMxc0sa05hrnu73syIjabngc2frS84NH8kkrzdyodT/gvnjw1fwC6PNK1"),o(g,"title","Open in our Online Editor"),Kt.a=null,o(Pt,"class","language-js"),o(C,"class","remark-container tip"),o($,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrFU8Fq20AQ/ZXtXCzBEiIbQ9GlyKUUH1pKEmhDFdBWGlkiq12xO6I2Rv/elRXJkesE55SDYGdn37x576E9iLqGcA+pzhBCSKWwln3bRXXNcEuoMsvceR+rmLovNSgIb0kY+iE26Pl9hwxSYxQbG91t24NaaDnkWmZoLIS/91BmEAYclKg6xgMEOOg8t0i/ILwezvfu3D5wqN28CbIftu6LyeIj/7h8V5xs/7UpT/de6W1fx3T1R6SPG6MblX3WUhtvZjCb+WNb2BpTuhFUam/BWXDsFFhuCvKC5fEqLUqZeUMZ051b6z+CRJYVJv4VuaaXrJmoGBXIDtgPyTjMn3jKYevkL5ccdhAuFovBqDusaulETgybeBTZx3UeZY18xSitVphrc8z3GfcrNt7ov7bXbFCNsm9rkSIfqoMFvdTIINvphh3idJqFYsHHT4nPzyOdW02lzhCcPoxp1ZDT8ETzXTtzO2881Ujp8wth92gvww0df2KSVlFOaM452P0RfTbzk2y+KAeJNvjeyfwsBM1sF45hjv3lTCaOBdfnDZs+Wl7waH7JpPkLk55v+JZMHtp/awjVYg=="),o(x,"title","Open in our Online Editor"),Qt.a=null,o(Tt,"class","language-js"),o(P,"class","remark-container tip"),o(at,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNrFk11r2zAUhv+KqpvYIEqdEBi+Kc4YIxcroy1spS5Ys44TU1nypCOaEPzfJ8e1W2dpSa96YdDR0Xs+nhfvKK9rGu9orgXQmOaSW0t+bJO6JrBBUMISf96lKsX2yw1whBvkBn/yFQRhl0ED6IwiQ6K9bTpRQxtGCy0FGEvj+x0tBY0jRhWv2o57CWVUF4UF/E3ji/5858/NA6O1rzdSdsWWXTAafOg/DN8GB9N/d+Xh3Au96eIUz//w/HFltFPiq5baBBMDYhIOaW5ryPGaY6mDiJHoJZOvSymCPkzx1s/wX7VMlhVk4Tn6ZJAtJxWBv45LuSVPpQDCLUEfnWVD2XCEktGN33o+Z3RL49ls1vO5haqWfrcRpxGaxD4ui0Q4+Q4frRZQaPNi66ve79C71k+2296AGgDc1DwH1kd7GN3SiQGy1Y7sXSS45opEXy6zkB1Xem6uUkcaHD5MceHQ7/Dc5kp7zC2bQDkpQ3ai7A7sabo+E44gaZUUCOYYwfZH6LyZHnjzTXlJsoLPdubXmuPEtuYY4ru/7cmIWHRxHNj40fyER9NTKk3fqPR6wo948tD8A7iN0pA="),o(m,"title","Open in our Online Editor"),tn.a=null,o(bt,"class","language-js"),o(T,"class","remark-container tip"),o(lt,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNrFU9Fq2zAU/RX1vswGY+KEQPHLcMsYfVgpbaAtSyCafR2byZKRrklC8L9XqpssDs6Wh0EfbCTrnnPuPcfaAa9riHeQqgwhhlRwY9iPbVLXDDeEMjPMrndzOSf3pBo54RNxTQ98hZ7fnZBGarRkhwP3te1ALbQB5EpkqA3EP3dQZhBHAUheOcV3CASg8twgvUA82q9f7bpdBFBbvh6yI7vrNr3GD/qH5t3mpPvvTXna96NamzAtSpFplF53NKenmqcY7HczSxmSfXnLWYEaWWlYNGJVKURZIdnpnKjmYRgu/QPqRm3CAstVQV408ofIbL1xQuwX0hpRMirQIKO1Yq7AXB2xHXfk9zwOYGPtmE4D2EI8mUz2xs2wqoUdumdgz7PE/L7Lk6wRfzFOyRvMlf6T95H2/7M1saZuVcPe47U2cMmi669nxp/TrRJNJQcETgttCg3ZGT5k7tXSD503nmyE8IMLYa9oLsP5AwE5C5Pc/iRDDrob0mUzPsnmm7SQZIWfncxzwemLceFoZtXPZ9JzLBoNG9Yvml5QNL6EaXyG6dyl+Vcmi/YNsQTbKQ=="),o(v,"title","Open in our Online Editor"),an.a=null,o(Bt,"class","language-js"),o(b,"class","remark-container tip")},m(t,e){p(t,d,e),p(t,At,e),p(t,B,e),p(t,Et,e),p(t,A,e),p(t,It,e),p(t,E,e),p(t,Rt,e),p(t,I,e),p(t,_t,e),p(t,R,e),p(t,Gt,e),p(t,_,e),p(t,jt,e),p(t,G,e),p(t,Lt,e),p(t,j,e),p(t,Ht,e),p(t,L,e),p(t,zt,e),p(t,w,e),c(w,H),c(w,z),gt(M,z,null),c(z,k),c(z,yt),Mt.m(ce,yt),p(t,Nt,e),p(t,y,e),c(y,N),c(y,Y),gt(D,Y,null),c(Y,h),c(Y,St),Yt.m(ie,St),p(t,Dt,e),p(t,U,e),p(t,Ut,e),p(t,S,e),c(S,q),c(S,V),gt(X,V,null),c(V,f),c(V,Ct),qt.m(ue,Ct),p(t,Vt,e),p(t,O,e),p(t,Xt,e),p(t,K,e),p(t,Ot,e),p(t,C,e),c(C,Z),c(C,W),gt(F,W,null),c(W,g),c(W,Pt),Kt.m(re,Pt),p(t,Zt,e),p(t,Q,e),p(t,Wt,e),p(t,J,e),p(t,Ft,e),p(t,P,e),c(P,$),c(P,tt),gt(nt,tt,null),c(tt,x),c(tt,Tt),Qt.m(de,Tt),p(t,Jt,e),p(t,et,e),p(t,$t,e),p(t,T,e),c(T,at),c(T,st),gt(pt,st,null),c(st,m),c(st,bt),tn.m(ke,bt),p(t,nn,e),p(t,ot,e),p(t,en,e),p(t,b,e),c(b,lt),c(b,ct),gt(it,ct,null),c(ct,v),c(ct,Bt),an.m(he,Bt),p(t,sn,e),p(t,ut,e),p(t,pn,e),p(t,rt,e),on=!0},p:ge,i(t){on||(xt(M.$$.fragment,t),xt(D.$$.fragment,t),xt(X.$$.fragment,t),xt(F.$$.fragment,t),xt(nt.$$.fragment,t),xt(pt.$$.fragment,t),xt(it.$$.fragment,t),on=!0)},o(t){mt(M.$$.fragment,t),mt(D.$$.fragment,t),mt(X.$$.fragment,t),mt(F.$$.fragment,t),mt(nt.$$.fragment,t),mt(pt.$$.fragment,t),mt(it.$$.fragment,t),on=!1},d(t){t&&(n(d),n(At),n(B),n(Et),n(A),n(It),n(E),n(Rt),n(I),n(_t),n(R),n(Gt),n(_),n(jt),n(G),n(Lt),n(j),n(Ht),n(L),n(zt),n(w),n(Nt),n(y),n(Dt),n(U),n(Ut),n(S),n(Vt),n(O),n(Xt),n(K),n(Ot),n(C),n(Zt),n(Q),n(Wt),n(J),n(Ft),n(P),n(Jt),n(et),n($t),n(T),n(nn),n(ot),n(en),n(b),n(sn),n(ut),n(pn),n(rt)),vt(M),vt(D),vt(X),vt(F),vt(nt),vt(pt),vt(it)}}}class Ce extends xe{constructor(d){super(),me(this,d,null,ve,fe,{})}}export{Ce as component};
