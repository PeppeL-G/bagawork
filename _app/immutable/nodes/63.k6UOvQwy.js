import{s as we,n as Se}from"../chunks/scheduler.UQwd20JU.js";import{S as Ce,i as be,e as s,s as c,c as kt,H as gt,a as o,g as l,b as i,d as r,f as ft,n as mt,h as n,o as p,j as a,p as u,m as xt,t as ht,k as vt,l as wt}from"../chunks/index.i__Fl8cY.js";import{V as St}from"../chunks/ViewApp.m6vzcyjb.js";function ye(de){let d,yn="1. Styling",It,A,Pn="This tutorial will teach you how to style components configuration.",_t,E,Tn="Introduction",Bt,I,An="There exists some configuration methods we can use on all components to style them. In this tutorial, we will take a closer look at those configuration methods.",Ht,_,En="Background color",Mt,B,In="As you should know by now, you can use the configuration method <code>backgroundColor()</code> to give a component a background color. Pass it the color as the name in English, e.g. <code>red</code>.",Rt,w,H,_n="Example",M,R,k,Bn="Open in Online Editor",Ct,zt,ke=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jt,z,Hn="Padding",Ot,j,Mn="Sometimes you might want to add some space between the edge of a component and its content. For example, in the app below, you might want the yellow <code>Text</code> component to be a little bit taller than it is.",Gt,S,O,g,Rn="Open in Online Editor",bt,Lt,ge=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am yellow!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,G,zn="You can make it taller by giving it a <code>size()</code>, but it&#39;s also possible to make it taller by giving it some padding on the top side and bottom side. <em>Padding</em> is simply some amount of space between the components edge and its content. Call the configuration method <code>padding()</code> to give the component some padding, and pass it:",Dt,L,jn="<li>The number of millimeters padding you want the component to have</li> <li>A string indicating which sides of the component the padding should be added to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the padding will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the padding will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the padding will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the padding will be added to the right side</li></ul></li>",Kt,V,On="If you don't specify the second argument (the string), the padding will be added to all sides.",qt,C,D,Gn="Example",K,q,f,Ln="Open in Online Editor",yt,Yt,fe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have 10mm padding above and below me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Nt,Y,Vn="Rounded corners",Zt,N,Dn="You can instruct GUI components to have round corners by calling the configuration method <code>corderRadius()</code>. Pass it the radius of the corner in millimeters. I.e., the bigger radius, the more rounded the corner will be. Corners do by default have a corner radius of <code>0</code>, which means not being round at all.",Wt,b,Z,Kn="Example",W,X,m,qn="Open in Online Editor",Pt,Xt,me=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,F,Yn="One thing you need to watch out for when using <code>cornerRadius()</code> is that anything that is placed in the corner of the component might not be shown properly. In the example above, try risizing the app screen, and place the <code>M</code> character in the beginning of the text in the upper left corner, and notice how it&#39;s not displayed properly. But this can easily be fixed by adding padding to the component, so its content will never be placed at the corner.",Ut,U,Nn="Try resizing the app screen in the example below, and notive how the <code>M</code> character never is placed in the upper left corner, but always entirely visible.",Qt,y,Q,Zn="Example",$,J,x,Wn="Open in Online Editor",Tt,$t,xe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">My corners are rounded! Cool, right? Please be impressed! xD</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jt,tt,Xn="Border",tn,nt,Fn="It is also possible to add borders around the component. To do that, call the confiruation method <code>border()</code>, and pass it:",nn,et,Un="<li>The thickness of the border, expressed as number of millimeters, e.g. <code>5</code></li> <li>The color of the border, expressed as the name in English, e.g. <code>&quot;red&quot;</code></li> <li>A string indicating which sides of the component the the border should be applied to:<ul><li>If the string contains <code>t</code> (short for <strong>t</strong>op), the border will be added to the top side</li> <li>If the string contains <code>b</code> (short for <strong>b</strong>ottom), the border will be added to the bottom side</li> <li>If the string contains <code>l</code> (short for <strong>l</strong>eft), the border will be added to the left side</li> <li>If the string contains <code>r</code> (short for <strong>r</strong>ight), the border will be added to the right side</li></ul></li>",en,at,Qn="If you don't specify the third argument, the border will be applied to all sides.",an,P,st,$n="Example",ot,pt,h,Jn="Open in Online Editor",At,sn,he=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,on,lt,te="If you specify a corner radius, the border will be round at the corners.",pn,T,ct,ne="Example",it,ut,v,ee="Open in Online Editor",Et,ln,ve=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,cn,rt,ae="That's it!",un,dt,se="Great work, now you have a basic understanding of what a page constant in Bagawork is 🥳 Next tutorial will be about using app constants in Bagawork, which are constants you can access from all your pages.",rn;return R=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.backgroundColor('yellow').text(\`I am yellow!\`)
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
	
}`}]}}}),O=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').text(\`I am yellow!\`),
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
	
}`}]}}}),q=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').padding(10, \`tb\`).text(\`I have 10mm padding above and below me!\`),
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
	
}`}]}}}),X=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').cornerRadius(5).text(\`My corners are rounded! Cool, right? Please be impressed! xD\`),
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
	
}`}]}}}),J=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.backgroundColor(\`lime\`).children(
			Space,
			Text.backgroundColor('yellow').padding(1.5).cornerRadius(5).text(\`My corners are rounded! Cool, right? Please be impressed! xD\`),
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
	
}`}]}}}),pt=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`}]}}}),ut=new St({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
	
}`}]}}}),{c(){d=s("h1"),d.textContent=yn,It=c(),A=s("p"),A.textContent=Pn,_t=c(),E=s("h2"),E.textContent=Tn,Bt=c(),I=s("p"),I.textContent=An,Ht=c(),_=s("h2"),_.textContent=En,Mt=c(),B=s("p"),B.innerHTML=In,Rt=c(),w=s("div"),H=s("div"),H.textContent=_n,M=s("div"),kt(R.$$.fragment),k=s("a"),k.textContent=Bn,Ct=s("pre"),zt=new gt(!1),jt=c(),z=s("h2"),z.textContent=Hn,Ot=c(),j=s("p"),j.innerHTML=Mn,Gt=c(),S=s("div"),kt(O.$$.fragment),g=s("a"),g.textContent=Rn,bt=s("pre"),Lt=new gt(!1),Vt=c(),G=s("p"),G.innerHTML=zn,Dt=c(),L=s("ol"),L.innerHTML=jn,Kt=c(),V=s("p"),V.textContent=On,qt=c(),C=s("div"),D=s("div"),D.textContent=Gn,K=s("div"),kt(q.$$.fragment),f=s("a"),f.textContent=Ln,yt=s("pre"),Yt=new gt(!1),Nt=c(),Y=s("h2"),Y.textContent=Vn,Zt=c(),N=s("p"),N.innerHTML=Dn,Wt=c(),b=s("div"),Z=s("div"),Z.textContent=Kn,W=s("div"),kt(X.$$.fragment),m=s("a"),m.textContent=qn,Pt=s("pre"),Xt=new gt(!1),Ft=c(),F=s("p"),F.innerHTML=Yn,Ut=c(),U=s("p"),U.innerHTML=Nn,Qt=c(),y=s("div"),Q=s("div"),Q.textContent=Zn,$=s("div"),kt(J.$$.fragment),x=s("a"),x.textContent=Wn,Tt=s("pre"),$t=new gt(!1),Jt=c(),tt=s("h2"),tt.textContent=Xn,tn=c(),nt=s("p"),nt.innerHTML=Fn,nn=c(),et=s("ol"),et.innerHTML=Un,en=c(),at=s("p"),at.textContent=Qn,an=c(),P=s("div"),st=s("div"),st.textContent=$n,ot=s("div"),kt(pt.$$.fragment),h=s("a"),h.textContent=Jn,At=s("pre"),sn=new gt(!1),on=c(),lt=s("p"),lt.textContent=te,pn=c(),T=s("div"),ct=s("div"),ct.textContent=ne,it=s("div"),kt(ut.$$.fragment),v=s("a"),v.textContent=ee,Et=s("pre"),ln=new gt(!1),cn=c(),rt=s("h2"),rt.textContent=ae,un=c(),dt=s("p"),dt.textContent=se,this.h()},l(t){d=o(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-12u18f5"&&(d.textContent=yn),It=i(t),A=o(t,"P",{"data-svelte-h":!0}),l(A)!=="svelte-1f462wa"&&(A.textContent=Pn),_t=i(t),E=o(t,"H2",{"data-svelte-h":!0}),l(E)!=="svelte-1ukekoe"&&(E.textContent=Tn),Bt=i(t),I=o(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1tpunnt"&&(I.textContent=An),Ht=i(t),_=o(t,"H2",{"data-svelte-h":!0}),l(_)!=="svelte-okr2zh"&&(_.textContent=En),Mt=i(t),B=o(t,"P",{"data-svelte-h":!0}),l(B)!=="svelte-y3dkr8"&&(B.innerHTML=In),Rt=i(t),w=o(t,"DIV",{class:!0});var e=r(w);H=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1llzxwj"&&(H.textContent=_n),M=o(e,"DIV",{});var dn=r(M);ft(R.$$.fragment,dn),k=o(dn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(k)!=="svelte-19e3ciy"&&(k.textContent=Bn),Ct=o(dn,"PRE",{class:!0});var oe=r(Ct);zt=mt(oe,!1),oe.forEach(n),dn.forEach(n),e.forEach(n),jt=i(t),z=o(t,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-1m54nt"&&(z.textContent=Hn),Ot=i(t),j=o(t,"P",{"data-svelte-h":!0}),l(j)!=="svelte-14oozwq"&&(j.innerHTML=Mn),Gt=i(t),S=o(t,"DIV",{});var kn=r(S);ft(O.$$.fragment,kn),g=o(kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-js52ju"&&(g.textContent=Rn),bt=o(kn,"PRE",{class:!0});var pe=r(bt);Lt=mt(pe,!1),pe.forEach(n),kn.forEach(n),Vt=i(t),G=o(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-zr0z4w"&&(G.innerHTML=zn),Dt=i(t),L=o(t,"OL",{"data-svelte-h":!0}),l(L)!=="svelte-12xv6k5"&&(L.innerHTML=jn),Kt=i(t),V=o(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1tuttrr"&&(V.textContent=On),qt=i(t),C=o(t,"DIV",{class:!0});var vn=r(C);D=o(vn,"DIV",{class:!0,"data-svelte-h":!0}),l(D)!=="svelte-1llzxwj"&&(D.textContent=Gn),K=o(vn,"DIV",{});var gn=r(K);ft(q.$$.fragment,gn),f=o(gn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-1y3468l"&&(f.textContent=Ln),yt=o(gn,"PRE",{class:!0});var le=r(yt);Yt=mt(le,!1),le.forEach(n),gn.forEach(n),vn.forEach(n),Nt=i(t),Y=o(t,"H2",{"data-svelte-h":!0}),l(Y)!=="svelte-1nudzpv"&&(Y.textContent=Vn),Zt=i(t),N=o(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-dx1kac"&&(N.innerHTML=Dn),Wt=i(t),b=o(t,"DIV",{class:!0});var wn=r(b);Z=o(wn,"DIV",{class:!0,"data-svelte-h":!0}),l(Z)!=="svelte-1llzxwj"&&(Z.textContent=Kn),W=o(wn,"DIV",{});var fn=r(W);ft(X.$$.fragment,fn),m=o(fn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-urqksc"&&(m.textContent=qn),Pt=o(fn,"PRE",{class:!0});var ce=r(Pt);Xt=mt(ce,!1),ce.forEach(n),fn.forEach(n),wn.forEach(n),Ft=i(t),F=o(t,"P",{"data-svelte-h":!0}),l(F)!=="svelte-ed9sne"&&(F.innerHTML=Yn),Ut=i(t),U=o(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1dnamdm"&&(U.innerHTML=Nn),Qt=i(t),y=o(t,"DIV",{class:!0});var Sn=r(y);Q=o(Sn,"DIV",{class:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1llzxwj"&&(Q.textContent=Zn),$=o(Sn,"DIV",{});var mn=r($);ft(J.$$.fragment,mn),x=o(mn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-b06u7j"&&(x.textContent=Wn),Tt=o(mn,"PRE",{class:!0});var ie=r(Tt);$t=mt(ie,!1),ie.forEach(n),mn.forEach(n),Sn.forEach(n),Jt=i(t),tt=o(t,"H2",{"data-svelte-h":!0}),l(tt)!=="svelte-10z3ctc"&&(tt.textContent=Xn),tn=i(t),nt=o(t,"P",{"data-svelte-h":!0}),l(nt)!=="svelte-11pbqge"&&(nt.innerHTML=Fn),nn=i(t),et=o(t,"OL",{"data-svelte-h":!0}),l(et)!=="svelte-j6kbon"&&(et.innerHTML=Un),en=i(t),at=o(t,"P",{"data-svelte-h":!0}),l(at)!=="svelte-1m3bip9"&&(at.textContent=Qn),an=i(t),P=o(t,"DIV",{class:!0});var Cn=r(P);st=o(Cn,"DIV",{class:!0,"data-svelte-h":!0}),l(st)!=="svelte-1llzxwj"&&(st.textContent=$n),ot=o(Cn,"DIV",{});var xn=r(ot);ft(pt.$$.fragment,xn),h=o(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-14wxm4j"&&(h.textContent=Jn),At=o(xn,"PRE",{class:!0});var ue=r(At);sn=mt(ue,!1),ue.forEach(n),xn.forEach(n),Cn.forEach(n),on=i(t),lt=o(t,"P",{"data-svelte-h":!0}),l(lt)!=="svelte-1l5ispr"&&(lt.textContent=te),pn=i(t),T=o(t,"DIV",{class:!0});var bn=r(T);ct=o(bn,"DIV",{class:!0,"data-svelte-h":!0}),l(ct)!=="svelte-1llzxwj"&&(ct.textContent=ne),it=o(bn,"DIV",{});var hn=r(it);ft(ut.$$.fragment,hn),v=o(hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-b7qib2"&&(v.textContent=ee),Et=o(hn,"PRE",{class:!0});var re=r(Et);ln=mt(re,!1),re.forEach(n),hn.forEach(n),bn.forEach(n),cn=i(t),rt=o(t,"H2",{"data-svelte-h":!0}),l(rt)!=="svelte-p2uhy5"&&(rt.textContent=ae),un=i(t),dt=o(t,"P",{"data-svelte-h":!0}),l(dt)!=="svelte-1iff40u"&&(dt.textContent=se),this.h()},h(){p(H,"class","remark-container__title"),p(k,"target","_blank"),p(k,"href","/editor#eNrFUk1rwkAQ/SvbuZjAEvxAKLmUWErx0FKq0EoV3CYTFdfdsLtBRfLfuzHGmqBiTz0EZnbmzXvzJjtgSQL+DkIZIfgQcqY1edkGSUJwY1BEmth4NxZjk3+hQmZwYJgyb2yGjltUjEKTKkGOhfw1K0AZZBRiySNUGvyvHSwi8FsUBFvljHsIUJBxrNF8gt8s45GNswmFxM6rIIth/SKpCD/yH8XnSU39c7qo6x7adu+bhcuZkqmIHiWXymlskXO5briesWVn2idsRYq3u6lb2ZDCxorpdilswe90OqXsIa4Sbikr8iuKA73sx0GU8iuypehhLNWv2yfcV5Z6l2vthfMFjxQK54A0g4SFSMtsv3ixXqCQbGVK9uYSM2eCtO4fpi49j7QepStxhqDeODa91NgdDjSvcup6uTeOSDl36Y2wEerbcGXFrZgkRRAbVOcczP/P4jbt2m2ehIUEM/zvy3zMmWno/DiKWPbLN6k41mqeN6za1L2hqX3LpPaFSacK/3KTSfYD/LesEQ=="),p(k,"title","Open in our Online Editor"),zt.a=null,p(Ct,"class","language-js"),p(w,"class","remark-container tip"),p(g,"target","_blank"),p(g,"href","/editor#eNrFk19rwjAUxb9Kdl9sIYh/EEZfRh1j+LAxprCNVTBrb1VMk5KkqEi/+1I73erq7NseCkmTc8+9v9PugKUpeDsIZYTgQciZ1uRh66cpwY1BEWli17tABKZ4QoXM4NgwZZ7YHB23PDEKTaYEOR4Ub/NSlENOIZY8QqXBe9/BMgKvS0GwpHDcS4CCjGON5hW8zmH9Ztf5lEJq61WUZbFRuak0fvQ/Nl9sTrq/z5anfT/LtW5/sHA1VzIT0a3kUjkzvkxw5rbDxZJHCoVTSgIzTlmI9LCbWKtf2tYWOZfrlts29tiZjQhLSPnuaubSukpuhRmFjR1vMKCwBa/f7x9ATDBJuR2iAqTCwNerUexHGf8DhBRDjKX6zu+H9yVMTXCUQ/sKyVZmZB8XMQsmSPf65sz4gbHkskTUGJxeDMwwM3aGL5tHaUMq2Dgi49ylDWVvqJvp3JqACoR+bFDVESy++DKb3kk2d8JK/Dn+dzIvC2ZaughHEet+PpMKsW6nHlj10qDBpV6TSr0zlc79NJcymeafVWXK/Q=="),p(g,"title","Open in our Online Editor"),Lt.a=null,p(bt,"class","language-js"),p(D,"class","remark-container__title"),p(f,"target","_blank"),p(f,"href","/editor#eNrFk81q4zAUhV9FczexQYQ4ITB4U9xhGLKYUtrCtNQFK9Z1YipLRpLbhuB3rxw3aZ06rXezMOjv3HP1HWsLrCwh3EKqOEIIqWDGkL+bqCwJvliU3BA33sYyts2XamQWry3T9pKt0PPbHavRVlqSw0azWreiGmoKmRIctYHwfgs5hzCgIFnROO4kQEFlmUF7C+FkP75z4/qBQunqdZRtsUU76TR+8D8030yOuv9T5cd9X6lnM16y9HGlVSX5LyWU9hKRF5j443SdC65Req0kttclS5HuZzfO6pN2tEEh1PPIH5eM81yuvGBCSWKXrp51Ai9ZkDV7QhJMioK8nSFsqdwSk5ws0alJgT8Sn/bZ+h3AFF4ci/mcwgbC2Wy2p3aDRSncjTv0OsAi87jIIl6JL6gpeY6Z0u9hf/D+jukQdi2PSCPZqIrssiV2zSQJfp6duH5sHeaqkD0Gxwdje15Zd4c3mwuVNJm4X1dWQvh0oOwOzTCd3xNQgzDKLOo+gs3zaLOZHmXzWzpJtML/ncy/NbMj04SjiXM/nUmHWDDpB9Y9NB9waDqk0vREpVOP5rtMHupX/2/ZrQ=="),p(f,"title","Open in our Online Editor"),Yt.a=null,p(yt,"class","language-js"),p(C,"class","remark-container tip"),p(Z,"class","remark-container__title"),p(m,"target","_blank"),p(m,"href","/editor#eNrFk19r2zAUxb+Kdl9igwhNQmD4pbjdGH3oKG1hK3MhqnWdmMqS0R8aE/zdJ8VLNmfO6rc9GCTrnnuufgftgNU1JDvIFUdIIBfMGHLbpHVNcGtRckP8epfJzIYv18gsPlim7R1bYxR3J1ajdVqS40H423aiFloKhRIctYHkxw5KDsmMgmRVcNxLgIIqCoP2OyQXh/WTX7fPFGrfr6fsmt10m97gR//j8GFzMv0XV57Ofa/ezPSF5a9rrZzk10ooHa1EWeEqnuabUnCNMuokmX2oWY70sHv0Vn9pJw0Kod4mXq20RH3PeOlMtIyn1pdHq9uGdAeGMI1kr0T+gVwrJSjR5XpjL8mdQGaQvCApq1qjMaFi+2kV06FJ4h5zCluPZ7mk0ECyWCwOIB+xqoWH0APaY5ia15si5U78A6SSV1go/Tv/P7zfwzwGZwcp9WQa5cg+bmI3TJLZx8sz18+sJ+8qOWBwWpjZK2f9HX7ZfFU+5MAmkk6ImI6UPaEZp4sHAgoI08KiHiIYXkyXzfwkm8/SS9I1/u9kvm2YnZgQjibe/XwmPWKzi2Fg/aLliKL5mE7zM53OPZr3MnlufwIcz+Ga"),p(m,"title","Open in our Online Editor"),Xt.a=null,p(Pt,"class","language-js"),p(b,"class","remark-container tip"),p(Q,"class","remark-container__title"),p(x,"target","_blank"),p(x,"href","/editor#eNrFk11r2zAUhv+KppvYIEKTEBi+KW43Ri86SlvYylywah07prIk9EFjgv/7pHjJ5sxZfbcLg4513nOOnlfaYaoUTna4kAxwggtOjUG3baoUgq0FwQzy610mMhu+QgO18GCptne0gijud6wG67RAx43wt+tFHe4ILiVnoA1OfuxwzXCyIFjQJnTcSzDBsiwN2O84uTisn/y6eyZY+XoDZV/spg8Ggx/7H4cPwcn0X1x9Ove9fDPzF1q8Vlo6wa4llzrKed1AHs+LTc2ZBhH1ksw+KFoAOUSPvtVf2lkLnMu3WTxXlLFaVNFivvalpBag7ymrnYl8bL02ym9b1G8YRDWgfRlgH9C1lJwgXVcbe4nuOFAD6AVQ3SgNxoSM7ac8JmNjxQMDCN56Vus1wS1OVqvVgeojNIp7IgO6A6Cpeb0pU+b4P6hKcQWl1L8vwx+932M+hW0PKfVkWunQ3ntkN1SgxcfLM8fPrLfBNWKkwWliZq+c9Wf41earzINn/moLx3lMJsqewEzTxSMGBYRpaUGPEQzPp/dmeeLNZ+ElaQX/25lvG2pnJpijke9+3pMBscXFOLBh0npC0nJKpeWZSucezXuePHc/AYX15YQ="),p(x,"title","Open in our Online Editor"),$t.a=null,p(Tt,"class","language-js"),p(y,"class","remark-container tip"),p(st,"class","remark-container__title"),p(h,"target","_blank"),p(h,"href","/editor#eNrFk1FL40AQx7/KMi9NYBHbUpC8SJTj8OEOsYKKEbImk7a42Q27E7SUfHd3je01vVTz5kNgNjsz/5nfn92AqCqINpDpHCGCTApr2Z91XFUM3whVbpmLN4lKyH+ZQUE4J2HoWiwwCNsbMki1UWx34f82bVEDDYdCyxyNhehxA6scojEHJUqv+FECHHRRWKR7iE638YOLmycOlevXqWybXbWHzuA7/d3w/nAw/e96dTj3jX61J88ie1kYXav8UkttglSuSkzDk2y5krlBFbQlCc0rkSHfnm6d1DZO6L8uozVKqV9H4X6ONm6BYMpZajBP96/IdQvSuS6R+TANeZ9q2OHL4c2hmM04rCGaTqdbaLdYVtIt3IHX4RXbl6sizmv5BTStLrDQ5p/Xe9rfIR2A7nPj2CBb65p9WMtoKRQbn50fWT8hx7YuVY/AYWJCFzW5HT5l/mpnqGcTqFrKkA8se0A7rC7sMcgjjAtyhvcQ9K+j9WZy4M0v5UriBf60M3dLQSPrzTHMqR/3pENsfNoPrJs0G5A0GdJpcqTTsUfznSdPzTvR09v3"),p(h,"title","Open in our Online Editor"),sn.a=null,p(At,"class","language-js"),p(P,"class","remark-container tip"),p(ct,"class","remark-container__title"),p(v,"target","_blank"),p(v,"href","/editor#eNrFk01r4zAQhv+KmEtsEKVJCCy+LO5Slh62lKawLeuCVWucmMqS0QdtCP7vleomG2edrW89GEYezbwzz2tvgTUNJFsoFEdIoBDMGPJrkzYNwVeLkhvi420mMxueQiOzuLRM2xu2wijuMlajdVqSfSK8bbuiFloKpRIctYHkzxYqDsmUgmR1UHwvAQqqLA3ae0jOd/GDj9tHCo3v16vsml11h97ge/398OFwNP1PVx3PfatezNkTK55XWjnJfyihdJSLqsY8PivWleAaZdSVZHbZsALp7nTnpXZxZv/pMtmgEOplEh/cKZSWqG8Zr5yJFoeZJ6X9atGcklwjzw9T1utE+VLVSEKYx3RonrhHnsKrh7RYUNhAMp/PdzjvsG6ER9HD2iOZmuerMuVO/AenkhdYKv33KzjQ/gz2CKgfG6cayUY58m46sWsmyfTb9xPrZ9ZTd7UcEDi+mNkLZ/0OHzLXylsd2ETSCRHTkWUPaMbVxQMGBYRpab3hAwTDf9N5Mzvy5lL6knSFX+3M7zWzExPM0cSrn/akR2x6Pgysf2kx4tJsTKfZiU6nfprPPHls3wBEouWm"),p(v,"title","Open in our Online Editor"),ln.a=null,p(Et,"class","language-js"),p(T,"class","remark-container tip")},m(t,e){a(t,d,e),a(t,It,e),a(t,A,e),a(t,_t,e),a(t,E,e),a(t,Bt,e),a(t,I,e),a(t,Ht,e),a(t,_,e),a(t,Mt,e),a(t,B,e),a(t,Rt,e),a(t,w,e),u(w,H),u(w,M),xt(R,M,null),u(M,k),u(M,Ct),zt.m(ke,Ct),a(t,jt,e),a(t,z,e),a(t,Ot,e),a(t,j,e),a(t,Gt,e),a(t,S,e),xt(O,S,null),u(S,g),u(S,bt),Lt.m(ge,bt),a(t,Vt,e),a(t,G,e),a(t,Dt,e),a(t,L,e),a(t,Kt,e),a(t,V,e),a(t,qt,e),a(t,C,e),u(C,D),u(C,K),xt(q,K,null),u(K,f),u(K,yt),Yt.m(fe,yt),a(t,Nt,e),a(t,Y,e),a(t,Zt,e),a(t,N,e),a(t,Wt,e),a(t,b,e),u(b,Z),u(b,W),xt(X,W,null),u(W,m),u(W,Pt),Xt.m(me,Pt),a(t,Ft,e),a(t,F,e),a(t,Ut,e),a(t,U,e),a(t,Qt,e),a(t,y,e),u(y,Q),u(y,$),xt(J,$,null),u($,x),u($,Tt),$t.m(xe,Tt),a(t,Jt,e),a(t,tt,e),a(t,tn,e),a(t,nt,e),a(t,nn,e),a(t,et,e),a(t,en,e),a(t,at,e),a(t,an,e),a(t,P,e),u(P,st),u(P,ot),xt(pt,ot,null),u(ot,h),u(ot,At),sn.m(he,At),a(t,on,e),a(t,lt,e),a(t,pn,e),a(t,T,e),u(T,ct),u(T,it),xt(ut,it,null),u(it,v),u(it,Et),ln.m(ve,Et),a(t,cn,e),a(t,rt,e),a(t,un,e),a(t,dt,e),rn=!0},p:Se,i(t){rn||(ht(R.$$.fragment,t),ht(O.$$.fragment,t),ht(q.$$.fragment,t),ht(X.$$.fragment,t),ht(J.$$.fragment,t),ht(pt.$$.fragment,t),ht(ut.$$.fragment,t),rn=!0)},o(t){vt(R.$$.fragment,t),vt(O.$$.fragment,t),vt(q.$$.fragment,t),vt(X.$$.fragment,t),vt(J.$$.fragment,t),vt(pt.$$.fragment,t),vt(ut.$$.fragment,t),rn=!1},d(t){t&&(n(d),n(It),n(A),n(_t),n(E),n(Bt),n(I),n(Ht),n(_),n(Mt),n(B),n(Rt),n(w),n(jt),n(z),n(Ot),n(j),n(Gt),n(S),n(Vt),n(G),n(Dt),n(L),n(Kt),n(V),n(qt),n(C),n(Nt),n(Y),n(Zt),n(N),n(Wt),n(b),n(Ft),n(F),n(Ut),n(U),n(Qt),n(y),n(Jt),n(tt),n(tn),n(nt),n(nn),n(et),n(en),n(at),n(an),n(P),n(on),n(lt),n(pn),n(T),n(cn),n(rt),n(un),n(dt)),wt(R),wt(O),wt(q),wt(X),wt(J),wt(pt),wt(ut)}}}class Ee extends Ce{constructor(d){super(),be(this,d,null,ye,we,{})}}export{Ee as component};
