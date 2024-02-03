import{s as Fe,n as Ze}from"../chunks/scheduler.UQwd20JU.js";import{S as qe,i as We,e as a,s as c,c as I,H as E,a as s,g as l,b as i,d as r,f as _,n as L,h as n,o,j as p,p as u,m as j,t as M,k as H,l as G}from"../chunks/index.i__Fl8cY.js";import{V as O}from"../chunks/ViewApp.m6vzcyjb.js";function $e(Ne){let d,Yn="Configuration Methods",Vt,N,Un="On this page you find the documentation for configuration methods than can be used on all GUI components.",Rt,z,Xn="<code>backgroundColor()</code> - Setting the background color",Kt,V,Dn="Indicates which background color the GUI component should have. Possible values:",Yt,R,Fn="<li>A string containing the name of a color in English, such as <code>`red`</code> or <code>`blue`</code></li>",Ut,w,K,Zn="Example",Y,U,k,qn="Open in Online Editor",Lt,Xt,ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have a red background!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dt,X,Wn="<code>border()</code> - Adding a border around the component",Ft,D,$n="Use the configuration method <code>border(thickness, color, sides)</code> to tell the component that is should have a border around itself.",Zt,F,Jn="The border will only be applied on the sides of the component indicated by the <code>sides</code> parameter, or all sides if no value for that parameter is provided.",qt,Z,Qn=`This configuration method can be called multiple times to give
different sides different type of borders.`,Wt,q,te="The parameters:",$t,W,ne="<li><code>thickness</code> - A number indicating how many millimeters thick the border should be</li> <li><code>color</code> - The English name of a color the border should have, e.g.  <code>`blue`</code></li> <li><code>sides</code> - A string indicating which sides of the component the bord should be added to. Write:<ul><li><code>t</code> in the string to add it to the <strong>T</strong>op side</li> <li><code>b</code> in the string to add it to the <strong>B</strong>ottom side</li> <li><code>l</code> in the string to add it to the <strong>L</strong>eft side</li> <li><code>r</code> in the string to add it to the <strong>R</strong>ight side</li></ul></li>",Jt,$,ee="If <code>sides</code> is not provided, the border will be added to all sides\n(the default value is <code>`tblr`</code>).",Qt,C,J,ae="Example",Q,tt,g,se="Open in Online Editor",jt,tn,Ve=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has a 5mm thick blue border on all sides.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nn,T,nt,pe="Example",et,at,m,oe="Open in Online Editor",Mt,en,Re=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lr</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has different borders on top/bottom side and left/right side.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,an,st,le="<code>cornerRadius()</code> - Rounding the corners",sn,pt,ce="Use the configuration method <code>cornerRadius()</code> to tell the component how round the corners of the component should be. Pass the amount as an integer representing the number of milimeters. Default is <code>0</code>, meaning the corners will be sharp (90 degrees; not round at all).",pn,P,ot,ie="Example",lt,ct,f,ue="Open in Online Editor",Ht,on,Ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The corners on this Text component are rounded.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ln,it,re="<code>keepIf()</code> - Conditionally keep/remove the GUI component",cn,ut,de="By default, all the GUI components you use will be shown. Use the configuration method <code>keepIf(condition)</code> to only keep the GUI component if the <code>condition</code> you pass to it is <code>true</code>. If the <code>condition</code> instead is <code>false</code>, the GUI component will be removed, and not used at all.",un,S,rt,ke="Example",dt,kt,h,ge="Open in Online Editor",Gt,rn,Ye=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	randomNumberBetween0And1 <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The random number is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a small number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">0.5</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a big number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Generate new number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,dn,gt,me="<code>padding()</code> - Adding space between the border and the content",kn,mt,fe="Use the configuration method <code>padding(amount, sides)</code> to tell the component how much space there should be between the border of the component and its content. Default is <code>0</code>, meaning no space at all.",gn,ft,he="The padding will only be applied to the sides of the component indicated by the <code>sides</code> parameter, or all sides if no value for that parameter is provided.",mn,ht,xe="This configuration method can be called multiple times to give different sides different amounts of padding.",fn,xt,ve="The parameters:",hn,vt,be=`<li><code>amount</code> - The amount of padding the component should have
in millimeters</li> <li><code>sides</code> - A string indicating which sides of the component the padding should be applied to. Write:<ul><li><code>t</code> in the string to include the <strong>T</strong>op side</li> <li><code>b</code> in the string to include the <strong>B</strong>ottom side</li> <li><code>l</code> in the string to include the <strong>L</strong>eft side</li> <li><code>r</code> in the string to include the <strong>R</strong>ight side</li></ul></li>`,xn,bt,we="If <code>sides</code> is not provided, the padding will be applied to all sides\n(the default value is <code>`tblr`</code>).",vn,y,wt,Ce="Example",Ct,Tt,x,Te="Open in Online Editor",Ot,bn,Ue=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has 15mm padding on all sides.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,A,Pt,Pe="Example",St,yt,v,Se="Open in Online Editor",Nt,Cn,Xe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lr</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has 20mm padding on the top side and bottom side, and 10mm padding on the left and right side.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Tn,At,ye="<code>showIf()</code> - Conditionally show/hide the GUI component",Pn,Bt,Ae="By default, all the GUI components you use will be shown. Use the configuration method <code>showIf(condition)</code> to only show the GUI component if the <code>condition</code> you pass to it is <code>true</code>. If the <code>condition</code> instead is <code>false</code>, the GUI component will still be used (so it will still occupy space), but it will not be shown to the user.",Sn,B,It,Be="Example",Et,_t,b,Ie="Open in Online Editor",zt,yn,De=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	randomNumberBetween0And1 <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The random number is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a small number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">0.5</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a big number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Generate new number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,An;return U=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.text(\`I have a red background!\`)
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
	
}`}]}}}),tt=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.border(5, \`blue\`)
			.text(\`This component has a 5mm thick blue border on all sides.\`)
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
	
}`}]}}}),at=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Text\n			.backgroundColor(`red`)\n			.border(5, `blue`, `tb`)\n			.border(9, `lime`, `lr`)\n			.text(`This component has different borders on top/bottom side and left/right side.`)\n	}\n	\n}",x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),ct=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.cornerRadius(10)
			.text(\`The corners on this Text component are rounded.\`)
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
	
}`}]}}}),kt=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = Math.random()
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`The random number is: \${p.randomNumberBetween0And1}.\`),
			Text.keepIf(p.randomNumberBetween0And1 < 0.5).text(\`That is a small number!\`),
			Text.keepIf(0.5 <= p.randomNumberBetween0And1).text(\`That is a big number!\`),
			Button.text(\`Generate new number\`),
		)
		
	}
	
}`,x:200,y:300}],pageTemplates:[]}}}),Tt=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.padding(15)
			.text(\`This component has 15mm padding on all sides.\`)
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
	
}`}]}}}),yt=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.padding(20, \`tb\`)
			.padding(10, \`lr\`)
			.top()
			.text(\`This component has 20mm padding on the top side and bottom side, and 10mm padding on the left and right side.\`)
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
	
}`}]}}}),_t=new O({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = Math.random()
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`The random number is: \${p.randomNumberBetween0And1}.\`),
			Text.showIf(p.randomNumberBetween0And1 < 0.5).text(\`That is a small number!\`),
			Text.showIf(0.5 <= p.randomNumberBetween0And1).text(\`That is a big number!\`),
			Button.text(\`Generate new number\`),
		)
		
	}
	
}`,x:200,y:300}],pageTemplates:[]}}}),{c(){d=a("h1"),d.textContent=Yn,Vt=c(),N=a("p"),N.textContent=Un,Rt=c(),z=a("h2"),z.innerHTML=Xn,Kt=c(),V=a("p"),V.textContent=Dn,Yt=c(),R=a("ul"),R.innerHTML=Fn,Ut=c(),w=a("div"),K=a("div"),K.textContent=Zn,Y=a("div"),I(U.$$.fragment),k=a("a"),k.textContent=qn,Lt=a("pre"),Xt=new E(!1),Dt=c(),X=a("h2"),X.innerHTML=Wn,Ft=c(),D=a("p"),D.innerHTML=$n,Zt=c(),F=a("p"),F.innerHTML=Jn,qt=c(),Z=a("p"),Z.textContent=Qn,Wt=c(),q=a("p"),q.textContent=te,$t=c(),W=a("ul"),W.innerHTML=ne,Jt=c(),$=a("p"),$.innerHTML=ee,Qt=c(),C=a("div"),J=a("div"),J.textContent=ae,Q=a("div"),I(tt.$$.fragment),g=a("a"),g.textContent=se,jt=a("pre"),tn=new E(!1),nn=c(),T=a("div"),nt=a("div"),nt.textContent=pe,et=a("div"),I(at.$$.fragment),m=a("a"),m.textContent=oe,Mt=a("pre"),en=new E(!1),an=c(),st=a("h2"),st.innerHTML=le,sn=c(),pt=a("p"),pt.innerHTML=ce,pn=c(),P=a("div"),ot=a("div"),ot.textContent=ie,lt=a("div"),I(ct.$$.fragment),f=a("a"),f.textContent=ue,Ht=a("pre"),on=new E(!1),ln=c(),it=a("h2"),it.innerHTML=re,cn=c(),ut=a("p"),ut.innerHTML=de,un=c(),S=a("div"),rt=a("div"),rt.textContent=ke,dt=a("div"),I(kt.$$.fragment),h=a("a"),h.textContent=ge,Gt=a("pre"),rn=new E(!1),dn=c(),gt=a("h2"),gt.innerHTML=me,kn=c(),mt=a("p"),mt.innerHTML=fe,gn=c(),ft=a("p"),ft.innerHTML=he,mn=c(),ht=a("p"),ht.textContent=xe,fn=c(),xt=a("p"),xt.textContent=ve,hn=c(),vt=a("ul"),vt.innerHTML=be,xn=c(),bt=a("p"),bt.innerHTML=we,vn=c(),y=a("div"),wt=a("div"),wt.textContent=Ce,Ct=a("div"),I(Tt.$$.fragment),x=a("a"),x.textContent=Te,Ot=a("pre"),bn=new E(!1),wn=c(),A=a("div"),Pt=a("div"),Pt.textContent=Pe,St=a("div"),I(yt.$$.fragment),v=a("a"),v.textContent=Se,Nt=a("pre"),Cn=new E(!1),Tn=c(),At=a("h2"),At.innerHTML=ye,Pn=c(),Bt=a("p"),Bt.innerHTML=Ae,Sn=c(),B=a("div"),It=a("div"),It.textContent=Be,Et=a("div"),I(_t.$$.fragment),b=a("a"),b.textContent=Ie,zt=a("pre"),yn=new E(!1),this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-1mp6gmm"&&(d.textContent=Yn),Vt=i(t),N=s(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-v0dzk0"&&(N.textContent=Un),Rt=i(t),z=s(t,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-mnvq9c"&&(z.innerHTML=Xn),Kt=i(t),V=s(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-7w7prv"&&(V.textContent=Dn),Yt=i(t),R=s(t,"UL",{"data-svelte-h":!0}),l(R)!=="svelte-13pv4ta"&&(R.innerHTML=Fn),Ut=i(t),w=s(t,"DIV",{class:!0});var e=r(w);K=s(e,"DIV",{class:!0,"data-svelte-h":!0}),l(K)!=="svelte-1llzxwj"&&(K.textContent=Zn),Y=s(e,"DIV",{});var Bn=r(Y);_(U.$$.fragment,Bn),k=s(Bn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(k)!=="svelte-yj77np"&&(k.textContent=qn),Lt=s(Bn,"PRE",{class:!0});var Ee=r(Lt);Xt=L(Ee,!1),Ee.forEach(n),Bn.forEach(n),e.forEach(n),Dt=i(t),X=s(t,"H2",{"data-svelte-h":!0}),l(X)!=="svelte-1ns5jeg"&&(X.innerHTML=Wn),Ft=i(t),D=s(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-bdbnkx"&&(D.innerHTML=$n),Zt=i(t),F=s(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-11sup2o"&&(F.innerHTML=Jn),qt=i(t),Z=s(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-1rmb61p"&&(Z.textContent=Qn),Wt=i(t),q=s(t,"P",{"data-svelte-h":!0}),l(q)!=="svelte-b7miuh"&&(q.textContent=te),$t=i(t),W=s(t,"UL",{"data-svelte-h":!0}),l(W)!=="svelte-1k4mxsu"&&(W.innerHTML=ne),Jt=i(t),$=s(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-kb2ac3"&&($.innerHTML=ee),Qt=i(t),C=s(t,"DIV",{class:!0});var Gn=r(C);J=s(Gn,"DIV",{class:!0,"data-svelte-h":!0}),l(J)!=="svelte-1llzxwj"&&(J.textContent=ae),Q=s(Gn,"DIV",{});var In=r(Q);_(tt.$$.fragment,In),g=s(In,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-17vtz1n"&&(g.textContent=se),jt=s(In,"PRE",{class:!0});var _e=r(jt);tn=L(_e,!1),_e.forEach(n),In.forEach(n),Gn.forEach(n),nn=i(t),T=s(t,"DIV",{class:!0});var On=r(T);nt=s(On,"DIV",{class:!0,"data-svelte-h":!0}),l(nt)!=="svelte-1llzxwj"&&(nt.textContent=pe),et=s(On,"DIV",{});var En=r(et);_(at.$$.fragment,En),m=s(En,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-1oqqeaf"&&(m.textContent=oe),Mt=s(En,"PRE",{class:!0});var Le=r(Mt);en=L(Le,!1),Le.forEach(n),En.forEach(n),On.forEach(n),an=i(t),st=s(t,"H2",{"data-svelte-h":!0}),l(st)!=="svelte-64hpox"&&(st.innerHTML=le),sn=i(t),pt=s(t,"P",{"data-svelte-h":!0}),l(pt)!=="svelte-ey0u4f"&&(pt.innerHTML=ce),pn=i(t),P=s(t,"DIV",{class:!0});var Nn=r(P);ot=s(Nn,"DIV",{class:!0,"data-svelte-h":!0}),l(ot)!=="svelte-1llzxwj"&&(ot.textContent=ie),lt=s(Nn,"DIV",{});var _n=r(lt);_(ct.$$.fragment,_n),f=s(_n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-bzzsjd"&&(f.textContent=ue),Ht=s(_n,"PRE",{class:!0});var je=r(Ht);on=L(je,!1),je.forEach(n),_n.forEach(n),Nn.forEach(n),ln=i(t),it=s(t,"H2",{"data-svelte-h":!0}),l(it)!=="svelte-12fsg0f"&&(it.innerHTML=re),cn=i(t),ut=s(t,"P",{"data-svelte-h":!0}),l(ut)!=="svelte-15uuoqo"&&(ut.innerHTML=de),un=i(t),S=s(t,"DIV",{class:!0});var zn=r(S);rt=s(zn,"DIV",{class:!0,"data-svelte-h":!0}),l(rt)!=="svelte-1llzxwj"&&(rt.textContent=ke),dt=s(zn,"DIV",{});var Ln=r(dt);_(kt.$$.fragment,Ln),h=s(Ln,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-1ep8jg4"&&(h.textContent=ge),Gt=s(Ln,"PRE",{class:!0});var Me=r(Gt);rn=L(Me,!1),Me.forEach(n),Ln.forEach(n),zn.forEach(n),dn=i(t),gt=s(t,"H2",{"data-svelte-h":!0}),l(gt)!=="svelte-wybre1"&&(gt.innerHTML=me),kn=i(t),mt=s(t,"P",{"data-svelte-h":!0}),l(mt)!=="svelte-1xl5fq7"&&(mt.innerHTML=fe),gn=i(t),ft=s(t,"P",{"data-svelte-h":!0}),l(ft)!=="svelte-1g27q7t"&&(ft.innerHTML=he),mn=i(t),ht=s(t,"P",{"data-svelte-h":!0}),l(ht)!=="svelte-1gephc6"&&(ht.textContent=xe),fn=i(t),xt=s(t,"P",{"data-svelte-h":!0}),l(xt)!=="svelte-b7miuh"&&(xt.textContent=ve),hn=i(t),vt=s(t,"UL",{"data-svelte-h":!0}),l(vt)!=="svelte-4i5443"&&(vt.innerHTML=be),xn=i(t),bt=s(t,"P",{"data-svelte-h":!0}),l(bt)!=="svelte-w0vjhj"&&(bt.innerHTML=we),vn=i(t),y=s(t,"DIV",{class:!0});var Vn=r(y);wt=s(Vn,"DIV",{class:!0,"data-svelte-h":!0}),l(wt)!=="svelte-1llzxwj"&&(wt.textContent=Ce),Ct=s(Vn,"DIV",{});var jn=r(Ct);_(Tt.$$.fragment,jn),x=s(jn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-a4vi9c"&&(x.textContent=Te),Ot=s(jn,"PRE",{class:!0});var He=r(Ot);bn=L(He,!1),He.forEach(n),jn.forEach(n),Vn.forEach(n),wn=i(t),A=s(t,"DIV",{class:!0});var Rn=r(A);Pt=s(Rn,"DIV",{class:!0,"data-svelte-h":!0}),l(Pt)!=="svelte-1llzxwj"&&(Pt.textContent=Pe),St=s(Rn,"DIV",{});var Mn=r(St);_(yt.$$.fragment,Mn),v=s(Mn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-p53ksn"&&(v.textContent=Se),Nt=s(Mn,"PRE",{class:!0});var Ge=r(Nt);Cn=L(Ge,!1),Ge.forEach(n),Mn.forEach(n),Rn.forEach(n),Tn=i(t),At=s(t,"H2",{"data-svelte-h":!0}),l(At)!=="svelte-1kp97r3"&&(At.innerHTML=ye),Pn=i(t),Bt=s(t,"P",{"data-svelte-h":!0}),l(Bt)!=="svelte-9dhjdt"&&(Bt.innerHTML=Ae),Sn=i(t),B=s(t,"DIV",{class:!0});var Kn=r(B);It=s(Kn,"DIV",{class:!0,"data-svelte-h":!0}),l(It)!=="svelte-1llzxwj"&&(It.textContent=Be),Et=s(Kn,"DIV",{});var Hn=r(Et);_(_t.$$.fragment,Hn),b=s(Hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-1x63niw"&&(b.textContent=Ie),zt=s(Hn,"PRE",{class:!0});var Oe=r(zt);yn=L(Oe,!1),Oe.forEach(n),Hn.forEach(n),Kn.forEach(n),this.h()},h(){o(K,"class","remark-container__title"),o(k,"target","_blank"),o(k,"href","/editor#eNrFUsFqg0AQ/ZXtXKogwVgKxUsxpZQcWkoTaEMNuNUxhphd2V3bhOC/d42JiWJCeupBmNmZNzPvPTdAswzcDYQ8QnAhTKmU5HntZRnBlUIWSaLjjc98VX6hQKpwpKhQr3SGhllVlECVC0bqQvlaVKACCgtinkYoJLifG5hH4PYtYHRZbtxCwAIexxLVB7j2Pp7ouJhakOl5DWQ1bFgljcPr/fXxZdK6/imft+8e6/bqwVe9LxouZoLnLHrgKRdGIDAKzLqsdK8RDElCv5FQoovkgLiqGmvqFqzAdWzNaQ3ujV3zGeMyS/UtDV4NKp5cDGMvytMzfDgbYMzFwYaj3WfYvvEf2QuTeRoJZMae2CijIVr7rFRkR9UTSNY8J1vViUooI/27+8C0upFatHzJOha0G301yJXmsFvzwgOzV2pjsDxNTetC2ATlZbh9xWyIxJkXKxRdCpY/buWN0/LmkWmIN8P/duY9oepaluYIoref9qShWN/uFqzZdHtBk3PJJOfEpOML/+LJtPgFJVy1vQ=="),o(k,"title","Open in our Online Editor"),Xt.a=null,o(Lt,"class","language-js"),o(w,"class","remark-container tip"),o(J,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNrFkl1r2zAUhv/K4dzMBhGSjMDwzXDHKL3oKG2gK0vBqnUcm8iSkWTWEPzfK9WNG4e0ZFe7MEg65z0fz+sd8qbBZIe5FoQJ5pJbC9fbtGmAnh0pYcGfdyu1cuHLDXFHd44bd8PXFMV9xBlyrVEwBMJr14s67BgWWgoyFpM/O6wEJjOGiteh46sEGeqisOR+YzLdnx/8uXtk2Ph6I2Vf7Kq/jAYf+g/Dh8vR9JdtdTz30qf3Dys3eeL5Zm10q8QPLbWJMkMii9/D2vju0YJB9iRbOog4XyXKlmVlIdd1oxUpByW3wGFR1+DKKt9A0EBfA7QCLiXYSpCd9IUGaAyfMZlPPY0tJl+nA4kl1Y30W4yIjCCkdnNVpKKVn5DQ6oIKbd4NPOj9Cadb/ddO8rKSwpCK9ovfNTwntr8Flm8oUkOw1S28+uX35wpm375nMTut9LjbWp1ocJy4chet8zu8tfmls3gS2ESqlTJmZ8oeyJ6n20fiESSt0sL5H+EEwfDL997Mj7z5qbwkXdP/dua+5O6LDeYY8N0/9mREbDY9DWyctDgjaX5OpfkHlQ4n/BdPHrsXFxrKfw=="),o(g,"title","Open in our Online Editor"),tn.a=null,o(jt,"class","language-js"),o(C,"class","remark-container tip"),o(nt,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNrFU1Fr2zAQ/itCL7NBpElGYfPLcMsYfdgYa2ArS8GKdY5NZZ2RTqwh+L9Pjhs3ztKSPfXBWHff3X2n77O3XDYNT7Y8RwU84bmWzrGvm7RpGDwSGOVYOG+XZkndk1uQBLckLX2Xa4jiHiEL5K1hA9Bl276p5a3gBWoF1vHk95ZXiiczwY2sO8ZdCxcci8IB/eLJdH++C+f2XvAmzBt19sNu+mC0+MA/LN8FR9t/8dXx3otQ3ieWNFnJ/GFt0Rt1jRptlFlQWfwMow3s0aVg2Up7yMKbVv/iH0NeV/UO1/YAp8AVZYuycizHukEDhlgpHVNVUYDton6EY2gYYXOxQiKsmasUMGkU01DQha3WJe1yk374ILfgjzyZT4OOG568nw4aLqBudLj/SMuRfKl7uClS5fUrGqK5ggLts/UH3K8o/AP/uEleVlqFG0Z7MW4bmYPYR50LT/KkFtgGPds5zaiUhs0+fMpicbozGOVrc4LguHBJVz6IaZ5ovmEWTzptIuO1jsWZbXfgzuvbI/FIJDRpQeETOaFg97P03syPvPlsQku6hrd25mcp6Z3rzLEssL/syUix2fS0YOOiyzOK5udMmr8w6XDD//Hkvv0L9v3fqA=="),o(m,"title","Open in our Online Editor"),en.a=null,o(Mt,"class","language-js"),o(T,"class","remark-container tip"),o(ot,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNrFUk1rwkAQ/SvLXJpAkGgplFxKLKV4aCkqtFKFbLMTDcbdsB9Ukfz3boxGI6nYUw+B3Z15b+a9ly3QPIdgC7FgCAHEGVWKvGzCPCe41siZIva8nfKpLr9YItU40lTqNzpHx60qWqI2kpO6UL4WFaiAwoNEZAylguBzCymDoOsBp6ty4g4CHogkUag/IPAP54k9FzMPcsvXQFZkg+rSWLyeXy9fXs62fzbp+d5j2149THXni8bLuRSGs0eRCelEElnk1uVYSI5ySFlqlNP1jwVtSZxovEBStSgiONGLVO3o7eMqFxy5JlQi2fEj61TEtVUerCHo+daDDQS3fq1/jKs8s7s3fGhID9VykITMZBf0C97HRMhjbCezL7gzFN+qEy/SjEnkzkHvKKcxeodbKXHvQGjlbYQhu5SsAZST7v1D5HrtSGuyWfGWAeeNU9032mrYj3kVkdspvXG4yTLXuxI2QXUd7lBxGyYJHiYaZZuD5Y9eZdM7y+aJW0g4x/9O5n1B9Y0qw5HETv89k4ZjXb/dsGbT3RVNvWuYer8wnW74l0xmxQ/jcsff"),o(f,"title","Open in our Online Editor"),on.a=null,o(Ht,"class","language-js"),o(P,"class","remark-container tip"),o(rt,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNp9Us1uwjAMfhXP2qGVqqps2iWCA70gDkzTxmHTQCK0LlRr0yhJBajquy+lpYNtcEhkx/5+YrlCLiWyCqMiJmQYZVxrmB3GUgLtDYlYg42rhViY5kSKuKE3w5V54Rty3LZiFJlSCegLzWvdgmqsPUyKLCalkX1WmMbIBh4KnjeKRwh6WCSJJvOOLDjFHzaulx5Ky3eBbMmmbXJhvNfvzTdJ715xERf5c5mvSYVkdkQiGIt4ACMITj2FCCkp1M/XpH8DNuNm29Ud9+zTp0lNyvT3jF6LnfajbZrFioTTlhZmbg37xl7Oar4laClBHDUh1Qzuq+tGan/lehdMX0Rymjg3vA8h8J/cXpIbqwIcdM6zrNO9u8JqgTAcwXXyv7TrdPMPaVgaO++ueUKClB0ZCNp1vX2r2yHOt8rDPbKHwK7LAdlj0K/KnHKZWZ5mZZb1N/cnBIM="),o(h,"title","Open in our Online Editor"),rn.a=null,o(Gt,"class","language-js"),o(S,"class","remark-container tip"),o(wt,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrFUlFLwzAQ/ivhXmyhjHUykL5IFREfFNGBDjdobK5rMU1CkqJj9L+brlu3jinzyYfC5e6+u/u+ryugSkG0glQyhAhSTo0h98tYKYJfFgUzxMWrmZjZ5ks1UovPlmr7SBfo+W3FarSVFqQrNNm6BdVQB5BJzlAbiN5WUDCIwgAELZuNawgEILPMoH2FaLiNpy6u5wEoN6+HbIfdtY/e4d3+7vjmcXD9bVUc3j1x7W1iZgfvNP1YaFkJdi251F6ikSV+V1aUsUIsvHC8y1mH95JJXhiSylJJgcKSnBoSjsuSbBBECkI5J6ZgaAbtxE6jAL4gGg0d+SVE58OO+ARLxd3RPQF6nGPzcZfFrOK/EJfiCjOpd37t7f5Flif5aQZpXnCmUXhbts+KphhsX410G/6xRrKUFVnbQ2xOBQkvLhM/OI506lalOLLgsHFmryrrOGzWPMjEHzTaeKLi3A9OhE3RnIbbVvyeSFLEmUV9TMHmD2+9GR14cyMcJF7gfzvzklN7ZhpzNHHbf/akp1g4PC5Yv2l8QtPolEmjHybtX/gXT+b1NzudxGM="),o(x,"title","Open in our Online Editor"),bn.a=null,o(Ot,"class","language-js"),o(y,"class","remark-container tip"),o(Pt,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNrFU12L2zAQ/CtCL7VBBNulUPxSfKWUe7ij9ALt0RxYsdYfnCwJaU0vhPz3ynbixsF3pE99MGg1OzvrGXtPuTE03dNCC6ApLSR3jtztMmMIvCAo4Yg/7zdqg/1TWOAID8gtfuMVBOGIoAXsrCIT0N8eRtKBHhgttRRgHU1/7WkjaBozqnjbKw4UyqguSwf4k6bR6fzoz4cnRo2fN2OOw27HYrb4pD8t3xcX23/tmsu91759vNjgasuL58rqTonPWmob5BZEHk6w4UI0qgqSiJEctwtI3CPSniGoTXBWebUgX9eNI4VujVagkNTckSRqW3KcQrQiWAPxVOIaAYQrQbYaUbdDzYaLeIEhocQBtE1V49C8GneZEmH0haZJ5K3e0fR9NNm8htZIb9HM7pnDmXu+LTPRyTds1uoGSm3/fh1n2m+E8F3/dquibqSwoIKTWw+GF8BOVR/U0b/MAtnpjgwfg39xrkj88VMesmWmz7Jr1YLAZeMGbzrvsjrK3Os8XPXeBKqTMmRX0h7BXcc7IeHMJK2yEsEuOdj/T2M2yUU2X5SnZBX872R+1BzfuT4cS7z665nMHIujZcPmTR+uaEqumZS8Mul8w3/J5OnwB3216kk="),o(v,"title","Open in our Online Editor"),Cn.a=null,o(Nt,"class","language-js"),o(A,"class","remark-container tip"),o(It,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNp9Ul9rgzAQ/yq3Yw8KInZjL6F9WF9KHzrG1oeNtdBUzypoIknEFvG7L1br2m3tQ8Jd7n5/clyNvCiQ1RjKiJBhmHGtYXF4LgqgvSERabBxvRIr055QETf0brgyr3xHjttVjCJTKgFDoX1tOlCDjYexzCJSGtlXjWmEbOSh4HmreISghzKONZkPZMEp/rRxs/awsHwXyI5s3iUXxgf9wXybDO4VF5HMX8p8S2pKpiISwbOIRjCB4NQjxZRiqX6+Vvg3YAtukr7uuGefPk1qVqa/Z/QmK+2HSZpFioTTlVZmaQ37xl7OZpkQdJQgjpqQagb39XUjjb9xvQsmnchqHjs3vI8h8J/cQZIbqwIcdM6zrNe9u8JqgTCewHXyv7TbdPcP6bQ0dt5984wEKTsyEFT1vUOr2yPOt8rDPbKHwK7LAdljMKzKkvIiszztyqybbyduBLs="),o(b,"title","Open in our Online Editor"),yn.a=null,o(zt,"class","language-js"),o(B,"class","remark-container tip")},m(t,e){p(t,d,e),p(t,Vt,e),p(t,N,e),p(t,Rt,e),p(t,z,e),p(t,Kt,e),p(t,V,e),p(t,Yt,e),p(t,R,e),p(t,Ut,e),p(t,w,e),u(w,K),u(w,Y),j(U,Y,null),u(Y,k),u(Y,Lt),Xt.m(ze,Lt),p(t,Dt,e),p(t,X,e),p(t,Ft,e),p(t,D,e),p(t,Zt,e),p(t,F,e),p(t,qt,e),p(t,Z,e),p(t,Wt,e),p(t,q,e),p(t,$t,e),p(t,W,e),p(t,Jt,e),p(t,$,e),p(t,Qt,e),p(t,C,e),u(C,J),u(C,Q),j(tt,Q,null),u(Q,g),u(Q,jt),tn.m(Ve,jt),p(t,nn,e),p(t,T,e),u(T,nt),u(T,et),j(at,et,null),u(et,m),u(et,Mt),en.m(Re,Mt),p(t,an,e),p(t,st,e),p(t,sn,e),p(t,pt,e),p(t,pn,e),p(t,P,e),u(P,ot),u(P,lt),j(ct,lt,null),u(lt,f),u(lt,Ht),on.m(Ke,Ht),p(t,ln,e),p(t,it,e),p(t,cn,e),p(t,ut,e),p(t,un,e),p(t,S,e),u(S,rt),u(S,dt),j(kt,dt,null),u(dt,h),u(dt,Gt),rn.m(Ye,Gt),p(t,dn,e),p(t,gt,e),p(t,kn,e),p(t,mt,e),p(t,gn,e),p(t,ft,e),p(t,mn,e),p(t,ht,e),p(t,fn,e),p(t,xt,e),p(t,hn,e),p(t,vt,e),p(t,xn,e),p(t,bt,e),p(t,vn,e),p(t,y,e),u(y,wt),u(y,Ct),j(Tt,Ct,null),u(Ct,x),u(Ct,Ot),bn.m(Ue,Ot),p(t,wn,e),p(t,A,e),u(A,Pt),u(A,St),j(yt,St,null),u(St,v),u(St,Nt),Cn.m(Xe,Nt),p(t,Tn,e),p(t,At,e),p(t,Pn,e),p(t,Bt,e),p(t,Sn,e),p(t,B,e),u(B,It),u(B,Et),j(_t,Et,null),u(Et,b),u(Et,zt),yn.m(De,zt),An=!0},p:Ze,i(t){An||(M(U.$$.fragment,t),M(tt.$$.fragment,t),M(at.$$.fragment,t),M(ct.$$.fragment,t),M(kt.$$.fragment,t),M(Tt.$$.fragment,t),M(yt.$$.fragment,t),M(_t.$$.fragment,t),An=!0)},o(t){H(U.$$.fragment,t),H(tt.$$.fragment,t),H(at.$$.fragment,t),H(ct.$$.fragment,t),H(kt.$$.fragment,t),H(Tt.$$.fragment,t),H(yt.$$.fragment,t),H(_t.$$.fragment,t),An=!1},d(t){t&&(n(d),n(Vt),n(N),n(Rt),n(z),n(Kt),n(V),n(Yt),n(R),n(Ut),n(w),n(Dt),n(X),n(Ft),n(D),n(Zt),n(F),n(qt),n(Z),n(Wt),n(q),n($t),n(W),n(Jt),n($),n(Qt),n(C),n(nn),n(T),n(an),n(st),n(sn),n(pt),n(pn),n(P),n(ln),n(it),n(cn),n(ut),n(un),n(S),n(dn),n(gt),n(kn),n(mt),n(gn),n(ft),n(mn),n(ht),n(fn),n(xt),n(hn),n(vt),n(xn),n(bt),n(vn),n(y),n(wn),n(A),n(Tn),n(At),n(Pn),n(Bt),n(Sn),n(B)),G(U),G(tt),G(at),G(ct),G(kt),G(Tt),G(yt),G(_t)}}}class na extends qe{constructor(d){super(),We(this,d,null,$e,Fe,{})}}export{na as component};
