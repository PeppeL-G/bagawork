import{s as Jn,n as $n}from"../chunks/scheduler.DFPFbGJz.js";import{S as On,i as Kn,e as s,s as u,H as y,c as Ut,a as e,g as o,b as i,d as r,n as P,h as n,f as Vt,o as l,j as p,p as c,m as Jt,t as $t,k as Ot,l as Kt}from"../chunks/index.CzDE4dZi.js";import{V as tn}from"../chunks/ViewApp.C2MU7-ZI.js";function ta(Ln){let d,nn="4. App Variables and Methods",gt,b,an="This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.",mt,B,sn="Why app variables are needed",ft,A,en="A page variable can only be accessed and used on the page the created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.",ht,T,pn="How to create app variables",xt,_,on="To create an app variable, we write the same code as for creating an app constant, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",vt,j,ln="In the code below you find an example of how to create the following app variables:",St,N,cn="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",wt,E,yt,Fn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app variables as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,I,un="How to use app variables",Ct,R,rn="To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write <code>a.theName</code>. For example, to obtain the value stored in the app variable <code>lastVisit</code>, we would write <code>a.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",bt,g,H,kn="Example",J,dn="Example of an app using an app variable.",C,M,m,gn="Open in Online Editor",$,Bt,zn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,O,At,Yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Tt,G,mn="As you can see in the example above, we can use the special <code>a</code> variable in your <code>Page</code> classes Bagawork to access your app variables.",_t,f,W,fn="Example",K,hn="Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.",h,D,x,xn="Open in Online Editor",tt,jt,Zn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,Nt,qn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ChangeNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,at,Et,Qn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to what?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToAlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,It,L,vn="App methods",Rt,F,Sn="A page method can only be used in the <code>Page</code> that created the page method. If you want to be able to use the method in many different pages, you should instead create the method as an <em>app method</em> by writing it in your <code>App</code> class instead. Then you can access it from all your pages using <code>a.theNameOfTheMethod</code>.",Ht,v,z,wn="Example",st,yn="Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.",S,Y,w,Pn="Open in Online Editor",et,Mt,Xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToAlice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setNameToBob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,pt,Gt,Un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ChangeNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ot,Wt,Vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to what?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dt,Z,Cn="Exercises",Lt,q,bn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Ft,k,Q,Bn="Exercise 1",lt,An='Open <a href="/editor#eNq9VFFq4zAQvYqYn41BhMTd0q5/iluWbT92WbaFNmwKFvbECXUkI8mbhuAb7B16xR6hUpway9g0H0kxNiPPzJvR0xttgOU5BBuIRYIQQJwxpcjPdZjnBJ818kQRY2+mfKrtG0tkGm81k/o3S3HgVR4tUReSk9ph/5ZVUgklhZnIEpQKgr8bWCQQjClwtrQVtylAQcxmCvUDBKN3e2Ls8pFCbvCczArsplo4jdf16+btotX9j2LR7vuPWKlhPF9kiUQ+qFxTfZuzGOn76s5ADrX5DKJrsSJLxtdEmXqKrESRJWQtCpIu/iG5ZCm7F/LpIvJoN9SVyIol76jYDpzq7s7sc1loLfiuo9eX/y+RN7RUDSwJEhO7c482M9rYHRiHxDk01jHw9sBs2i569/F6jvYpPEPwdXRCYQ2Bf+6XtJKx/5GMd50cV8gTo1mFGcYak6AhVxvSFd8vaYflqznjKTZ53Q6l10vQ2bezHUH1xN/hMs/MJp3Jd1gK1dPNLEyK7BMmPpS4HfDtkRFt9kfG5wcZcIe4XyLql1srdoIq+libXusmrtXnUPmda5Rhiscn8n7O9BdluZTE4O8pqPGoEed6Tvs8fm+OfxrtM7rlY/kG9yyrTA==" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',rt,X,ct,Tn="<summary>Hint</summary><p>Add one app variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 app methods (one click handler for each button) that changes the app variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the app variable in the last <code>Text</code> component.</p>",zt,U,_n="That's it!",Yt,V,jn="Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use <code>p</code> or <code>a</code> to access them. If you will just use the variable in one of your pages, then use a page variable, and if you need to use it in multiple pages, then use an app variable instead. Simple as that!",Zt;return M=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`Hello \${a.name}!\`)
	}
	
}`,x:185,y:251}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),D=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Button.text(\`Change name\`).page(ChangeNamePage),
		)
	}
	
}`,x:185,y:251},{id:2,folderId:1,code:`class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Change name to what?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Alice\`).page(StartPage).handler(p.setNameToAlice),
				Space,
				Button.text(\`Bob\`).page(StartPage).handler(p.setNameToBob),
				Space,
			),
			Space,
		)
	}
	
	setNameToAlice(){
		a.name = \`Alice\`
	}
	
	setNameToBob(){
		a.name = \`Bob\`
	}
	
}`,x:491,y:245}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Y=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
	setNameToAlice(){
		a.name = \`Alice\`
	}
	
	setNameToBob(){
		a.name = \`Bob\`
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Space,
			Button.text(\`Change name\`).page(ChangeNamePage),
			Space,
			Button.text(\`Change name to Alice\`).handler(a.setNameToAlice),
			Button.text(\`Change name to Bob\`).handler(a.setNameToBob),
		)
	}
	
}`,x:185,y:251},{id:2,folderId:1,code:`class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Change name to what?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Alice\`).page(StartPage).handler(a.setNameToAlice),
				Space,
				Button.text(\`Bob\`).page(StartPage).handler(a.setNameToBob),
				Space,
			),
			Space,
		)
	}
	
}`,x:491,y:245}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),X=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	stars = \`🌟🌟🌟\`
	
	createStartPage(){
		return StartPage
	}
	
	select1Star(){
		a.stars = \`🌟\`
	}
	
	select2Stars(){
		a.stars = \`🌟🌟\`
	}
	
	select3Stars(){
		a.stars = \`🌟🌟🌟\`
	}
	
	select4Stars(){
		a.stars = \`🌟🌟🌟🌟\`
	}
	
	select5Stars(){
		a.stars = \`🌟🌟🌟🌟🌟\`
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`How many stars would you give BagaWork?\`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(\`🌟\`).page(StarredPage).handler(a.select1Star),
					Space,
					Button.text(\`🌟🌟\`).page(StarredPage).handler(a.select2Stars),
					Space,
					Button.text(\`🌟🌟🌟\`).page(StarredPage).handler(a.select3Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟\`).page(StarredPage).handler(a.select4Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟🌟\`).page(StarredPage).handler(a.select5Stars),
				),
				Space,
			),
			Space,
		)
	}
	
}`,x:403,y:282},{id:2,folderId:1,code:`class StarredPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`You selected:\`),
			Text,
			Text.text(a.stars),
			Space,
			Button.text(\`Change\`).page(StartPage)
		)
	}
	
}`,x:797,y:280}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){d=s("h1"),d.textContent=nn,gt=u(),b=s("p"),b.textContent=an,mt=u(),B=s("h2"),B.textContent=sn,ft=u(),A=s("p"),A.textContent=en,ht=u(),T=s("h2"),T.textContent=pn,xt=u(),_=s("p"),_.innerHTML=on,vt=u(),j=s("p"),j.textContent=ln,St=u(),N=s("ul"),N.innerHTML=cn,wt=u(),E=s("pre"),yt=new y(!1),Pt=u(),I=s("h2"),I.textContent=un,Ct=u(),R=s("p"),R.innerHTML=rn,bt=u(),g=s("div"),H=s("div"),H.textContent=kn,J=s("p"),J.textContent=dn,C=s("div"),Ut(M.$$.fragment),m=s("a"),m.textContent=gn,$=s("pre"),Bt=new y(!1),O=s("pre"),At=new y(!1),Tt=u(),G=s("p"),G.innerHTML=mn,_t=u(),f=s("div"),W=s("div"),W.textContent=fn,K=s("p"),K.textContent=hn,h=s("div"),Ut(D.$$.fragment),x=s("a"),x.textContent=xn,tt=s("pre"),jt=new y(!1),nt=s("pre"),Nt=new y(!1),at=s("pre"),Et=new y(!1),It=u(),L=s("h3"),L.textContent=vn,Rt=u(),F=s("p"),F.innerHTML=Sn,Ht=u(),v=s("div"),z=s("div"),z.textContent=wn,st=s("p"),st.textContent=yn,S=s("div"),Ut(Y.$$.fragment),w=s("a"),w.textContent=Pn,et=s("pre"),Mt=new y(!1),pt=s("pre"),Gt=new y(!1),ot=s("pre"),Wt=new y(!1),Dt=u(),Z=s("h2"),Z.textContent=Cn,Lt=u(),q=s("p"),q.textContent=bn,Ft=u(),k=s("div"),Q=s("div"),Q.textContent=Bn,lt=s("p"),lt.innerHTML=An,rt=s("div"),Ut(X.$$.fragment),ct=s("details"),ct.innerHTML=Tn,zt=u(),U=s("h2"),U.textContent=_n,Yt=u(),V=s("p"),V.innerHTML=jn,this.h()},l(t){d=e(t,"H1",{"data-svelte-h":!0}),o(d)!=="svelte-pesbfn"&&(d.textContent=nn),gt=i(t),b=e(t,"P",{"data-svelte-h":!0}),o(b)!=="svelte-1b4bgdm"&&(b.textContent=an),mt=i(t),B=e(t,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-13sv629"&&(B.textContent=sn),ft=i(t),A=e(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-8rkeyq"&&(A.textContent=en),ht=i(t),T=e(t,"H2",{"data-svelte-h":!0}),o(T)!=="svelte-14clwk7"&&(T.textContent=pn),xt=i(t),_=e(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1ulzfst"&&(_.innerHTML=on),vt=i(t),j=e(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1r2u5wf"&&(j.textContent=ln),St=i(t),N=e(t,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-63e1ap"&&(N.innerHTML=cn),wt=i(t),E=e(t,"PRE",{class:!0});var a=r(E);yt=P(a,!1),a.forEach(n),Pt=i(t),I=e(t,"H2",{"data-svelte-h":!0}),o(I)!=="svelte-16zhqr0"&&(I.textContent=un),Ct=i(t),R=e(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1vyh33t"&&(R.innerHTML=rn),bt=i(t),g=e(t,"DIV",{class:!0});var qt=r(g);H=e(qt,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-1llzxwj"&&(H.textContent=kn),J=e(qt,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1x96elv"&&(J.textContent=dn),C=e(qt,"DIV",{});var kt=r(C);Vt(M.$$.fragment,kt),m=e(kt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-r0df63"&&(m.textContent=gn),$=e(kt,"PRE",{class:!0});var Nn=r($);Bt=P(Nn,!1),Nn.forEach(n),O=e(kt,"PRE",{class:!0});var En=r(O);At=P(En,!1),En.forEach(n),kt.forEach(n),qt.forEach(n),Tt=i(t),G=e(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-oq8mrc"&&(G.innerHTML=mn),_t=i(t),f=e(t,"DIV",{class:!0});var Qt=r(f);W=e(Qt,"DIV",{class:!0,"data-svelte-h":!0}),o(W)!=="svelte-1llzxwj"&&(W.textContent=fn),K=e(Qt,"P",{"data-svelte-h":!0}),o(K)!=="svelte-1v6zj8y"&&(K.textContent=hn),h=e(Qt,"DIV",{});var ut=r(h);Vt(D.$$.fragment,ut),x=e(ut,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-ybuw7x"&&(x.textContent=xn),tt=e(ut,"PRE",{class:!0});var In=r(tt);jt=P(In,!1),In.forEach(n),nt=e(ut,"PRE",{class:!0});var Rn=r(nt);Nt=P(Rn,!1),Rn.forEach(n),at=e(ut,"PRE",{class:!0});var Hn=r(at);Et=P(Hn,!1),Hn.forEach(n),ut.forEach(n),Qt.forEach(n),It=i(t),L=e(t,"H3",{"data-svelte-h":!0}),o(L)!=="svelte-1f3ry51"&&(L.textContent=vn),Rt=i(t),F=e(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-193iz7e"&&(F.innerHTML=Sn),Ht=i(t),v=e(t,"DIV",{class:!0});var Xt=r(v);z=e(Xt,"DIV",{class:!0,"data-svelte-h":!0}),o(z)!=="svelte-1llzxwj"&&(z.textContent=wn),st=e(Xt,"P",{"data-svelte-h":!0}),o(st)!=="svelte-106pdna"&&(st.textContent=yn),S=e(Xt,"DIV",{});var it=r(S);Vt(Y.$$.fragment,it),w=e(it,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-1fled6q"&&(w.textContent=Pn),et=e(it,"PRE",{class:!0});var Mn=r(et);Mt=P(Mn,!1),Mn.forEach(n),pt=e(it,"PRE",{class:!0});var Gn=r(pt);Gt=P(Gn,!1),Gn.forEach(n),ot=e(it,"PRE",{class:!0});var Wn=r(ot);Wt=P(Wn,!1),Wn.forEach(n),it.forEach(n),Xt.forEach(n),Dt=i(t),Z=e(t,"H2",{"data-svelte-h":!0}),o(Z)!=="svelte-4opca7"&&(Z.textContent=Cn),Lt=i(t),q=e(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-fy3v6t"&&(q.textContent=bn),Ft=i(t),k=e(t,"DIV",{class:!0});var dt=r(k);Q=e(dt,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1kqyz2o"&&(Q.textContent=Bn),lt=e(dt,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-1ydd8j"&&(lt.innerHTML=An),rt=e(dt,"DIV",{});var Dn=r(rt);Vt(X.$$.fragment,Dn),Dn.forEach(n),ct=e(dt,"DETAILS",{"data-svelte-h":!0}),o(ct)!=="svelte-ejbq13"&&(ct.innerHTML=Tn),dt.forEach(n),zt=i(t),U=e(t,"H2",{"data-svelte-h":!0}),o(U)!=="svelte-p2uhy5"&&(U.textContent=_n),Yt=i(t),V=e(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-1xz440j"&&(V.innerHTML=jn),this.h()},h(){yt.a=null,l(E,"class","language-js"),l(H,"class","remark-container__title"),l(m,"target","_blank"),l(m,"href","/editor#eNrFUmFrwjAQ/SvZMZiFICoIUhijjrH5YWNMYZMpNLRXlcWkJClTSv/7UmudERX3aR8a7pJ79969aw4sTcHPIZIxgg8RZ1qT53WQpgRXBkWsiY3ziZiY8hNsieSWhAFfRBjWt5FCZnBomDKvbIYNr6o3Ck2mBNk9lLdFBSqgoJBIHqPS4H/msIjBb1MoCayODQQoyCTRaD7Ab9Xx2MbFlEJq+znIqtmgSpxxdvy7kcokd9U/ZotD3SNb3jT2aIRPyLkk1zlrlgKLq9BzZqGwsrS9LoU1+J1uuxY4wmXKbXNHqKMt0F+DJIgzfkagFH1MpPr1dY/7jPw3+a2b0XzBY4WisUWaYcoipHW2N2KgkKxlRjY2EjNngrR7d6FHjyPvJc+W4gjBYeHE9DNjZ9jSvMjQa5beNETGuUcvhI1RX4arXzzHJCmCxKA65mD5J1a76Rzs5kFYSDDD/97M+5yZG10uRxHLfnonjmPt1nHD3KLuBUWdSzp1TnTaV/iXnUyLH5d5q+g="),l(m,"title","Open in our Online Editor"),Bt.a=null,l($,"class","language-js"),At.a=null,l(O,"class","language-js"),l(g,"class","remark-container tip"),l(W,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFVF1r2zAU/SuaGCwGYerQQGcYwylj68PKWANbWQrW7OsmTJGMLNMG4/++q6j2otQJfgjsIUGW78c595zrhvKypHFDM5UDjWkmeFWRr9ukLAk8G5B5RfDcLOXS2J/kGyAfSJqIdQZpd5tp4AbuDNfmG3+ESeDijQZTa0n6F/a2dUktbRktlMhBVzT+1dB1TuOIUdsAcexSKKOqKCowP2l80Z3v8dw+MFpiPS/TFbtxDx6dvn9PyT40PvrP9foQ93f1VIXZai1yDXLiXi3NAouEBv8m6RcQQpG3DQ8t7PZNGrAual4bo+RL3PWKS+xug9IgtMgn7uoWbyyWLi/wJsToM5K5mjG6pfF0FrXMkZ2eIusXPgvju5JnwAb47/EiRpGnFTcf92bg510rUW/kQPnDwIPhOau9jK2XMgixdy5AT8oQXWH5LtQuNGAjC8/V73FlMfB40WG6+0IujQ+wH7qzjb9Or3Ow+0CGBf/aLJfvI2eWy1m3IwvYlALV9nbFc0xS/bkpkrwWJ3ZEyTkUSv/D7mE9l58SDWSrarIzNzEoBYmuzu+oW9XpLmshRvvlHqpxecGgCZRMCoPGGpig/Rj2q+1p80liSvII/1uZH7ja7yorjibY/bgm3sSii+GB+UGzEUHTMZWmRyodX8zTmjy0fwHGSZXZ"),l(x,"title","Open in our Online Editor"),jt.a=null,l(tt,"class","language-js"),Nt.a=null,l(nt,"class","language-js"),Et.a=null,l(at,"class","language-js"),l(f,"class","remark-container tip"),l(z,"class","remark-container__title"),l(w,"target","_blank"),l(w,"href","/editor#eNrFlG9r2zAQxr+KJgazwZg6NNAZRnHK2PpiZayBrSwFa/a5CVMkI8u0wfi79xTNXpQ4rQeBvbDRn7vHuufnU0NZWdK4oZnMgcY046yqyJdNUpYEnjSIvCI4bhZioc0j2BrIB5ImfJVB2q1mCpiGW82U/soewPNtvFagayVIv2FW2y6pAn2DanO51epzWHj4jcOcmfw1kIGru/EtbQNaSJ6Dqmj8s6GrnMZRQE041ro9Fg2oLArU/UHjs258h+P2PqAlntnJtGLXduJY1tfY22YmjevQp3q17803+ViF2XLFcwXCs1sLPUeRUOPLSz8D55K8bWyV7ZvUD7qo25Jl0M9mtdZS/Mm6WjKBZzEpqR+aOjy7ZOwzJ/tXFaIlsUD8EFdzDspjocvQH6ViIA1q4Ean4DsUA/qEhl9MA7qh8WQatYEFMnkJiFvuSai4Tu0w2qvwccn05VFOV5LXazEgvx+4Z2Pn/hZm/7uNofGKsAUyQnYH0KHocLkDIM/fRxbk+bTrsTmsS44knF5zaCbV7+siyWv+Qo9JMYNCqr9XiXN1nIp1ooBsZE22Px7RaBOJLk5P+0Z2TETN+WiWd1CNyxvqNGNhUmiEPuCguUz7tnPYfBSYkjzA/ybzHdvuXWXgKIJfvxx3U0Znw4a5QdMRQZMxSpMjSsea5jUm9+0zBqXRWQ=="),l(w,"title","Open in our Online Editor"),Mt.a=null,l(et,"class","language-js"),Gt.a=null,l(pt,"class","language-js"),Wt.a=null,l(ot,"class","language-js"),l(v,"class","remark-container tip"),l(Q,"class","remark-container__title"),l(k,"class","remark-container exercise")},m(t,a){p(t,d,a),p(t,gt,a),p(t,b,a),p(t,mt,a),p(t,B,a),p(t,ft,a),p(t,A,a),p(t,ht,a),p(t,T,a),p(t,xt,a),p(t,_,a),p(t,vt,a),p(t,j,a),p(t,St,a),p(t,N,a),p(t,wt,a),p(t,E,a),yt.m(Fn,E),p(t,Pt,a),p(t,I,a),p(t,Ct,a),p(t,R,a),p(t,bt,a),p(t,g,a),c(g,H),c(g,J),c(g,C),Jt(M,C,null),c(C,m),c(C,$),Bt.m(zn,$),c(C,O),At.m(Yn,O),p(t,Tt,a),p(t,G,a),p(t,_t,a),p(t,f,a),c(f,W),c(f,K),c(f,h),Jt(D,h,null),c(h,x),c(h,tt),jt.m(Zn,tt),c(h,nt),Nt.m(qn,nt),c(h,at),Et.m(Qn,at),p(t,It,a),p(t,L,a),p(t,Rt,a),p(t,F,a),p(t,Ht,a),p(t,v,a),c(v,z),c(v,st),c(v,S),Jt(Y,S,null),c(S,w),c(S,et),Mt.m(Xn,et),c(S,pt),Gt.m(Un,pt),c(S,ot),Wt.m(Vn,ot),p(t,Dt,a),p(t,Z,a),p(t,Lt,a),p(t,q,a),p(t,Ft,a),p(t,k,a),c(k,Q),c(k,lt),c(k,rt),Jt(X,rt,null),c(k,ct),p(t,zt,a),p(t,U,a),p(t,Yt,a),p(t,V,a),Zt=!0},p:$n,i(t){Zt||($t(M.$$.fragment,t),$t(D.$$.fragment,t),$t(Y.$$.fragment,t),$t(X.$$.fragment,t),Zt=!0)},o(t){Ot(M.$$.fragment,t),Ot(D.$$.fragment,t),Ot(Y.$$.fragment,t),Ot(X.$$.fragment,t),Zt=!1},d(t){t&&(n(d),n(gt),n(b),n(mt),n(B),n(ft),n(A),n(ht),n(T),n(xt),n(_),n(vt),n(j),n(St),n(N),n(wt),n(E),n(Pt),n(I),n(Ct),n(R),n(bt),n(g),n(Tt),n(G),n(_t),n(f),n(It),n(L),n(Rt),n(F),n(Ht),n(v),n(Dt),n(Z),n(Lt),n(q),n(Ft),n(k),n(zt),n(U),n(Yt),n(V)),Kt(M),Kt(D),Kt(Y),Kt(X)}}}class ea extends On{constructor(d){super(),Kn(this,d,null,ta,Jn,{})}}export{ea as component};
