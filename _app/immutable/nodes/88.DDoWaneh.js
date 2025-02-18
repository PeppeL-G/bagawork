import{s as qn,n as Kn}from"../chunks/scheduler.B0TnBjPs.js";import{S as Dn,i as Jn,e,s as c,H as w,c as Ot,a as p,g as o,b as u,d,n as C,h as n,f as Wt,o as l,j as s,p as i,m as qt,t as Kt,k as Dt,l as Jt}from"../chunks/index.BXVnRmkj.js";import{V as Xt}from"../chunks/ViewApp.qg7AIhJt.js";function Xn(Rn){let h,zt="4. App Variables and Methods",rt,P,Yt="This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.",kt,b,Ft="Why app variables are needed",dt,_,Zt="A page variable can only be accessed and used on the page that created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.",mt,T,tn="How to create app variables",gt,A,nn="To create an app variable, we write the same code as for creating an app constant, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",ht,B,an="In the code below you find an example of how to create the following app variables:",ft,N,sn="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",xt,E,vt,Ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app variables as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,wt,H,en="How to use app variables",Ct,j,pn="To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write <code>a.theName</code>. For example, to obtain the value stored in the app variable <code>lastVisit</code>, we would write <code>a.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",yt,m,M,on="Example",Y,ln="Example of an app using an app variable.",R,f,cn="Open in Online Editor",F,St,Vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Z,Pt,Gn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,bt,L,un="As you can see in the example above, we can use the special <code>a</code> variable in your <code>Page</code> classes BagaWork to access your app variables.",_t,r,V,rn="Example",tt,kn="Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.",G,x,dn="Open in Online Editor",nt,Tt,In=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,at,At,$n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ChangeNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,st,Bt,Un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to what?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,Nt,I,mn="App methods",Et,$,gn="A page method can only be used in the <code>Page</code> that created the page method. If you want to be able to use the method in many different pages, you should instead create the method as an <em>app method</em> by writing it in your <code>App</code> class instead. Then you can access it from all your pages using <code>a.theNameOfTheMethod</code>.",Ht,k,U,hn="Example",et,fn="Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.",Q,v,xn="Open in Online Editor",pt,jt,Qn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ot,Mt,On=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ChangeNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,lt,Rt,Wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name to what?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToAlice<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>setNameToBob<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Lt,O,vn="Exercises",Vt,W,wn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Gt,g,q,Cn="Exercise 1",ct,yn='Open <a href="/editor#eNq9VFFq4zAQvYqYn41BhMTd0q5/iluWbT92WbaFNmwKFvbECXUkI8mbhuAb7B16xR6hUpway9g0H0kxNiPPzJvR0xttgOU5BBuIRYIQQJwxpcjPdZjnBJ818kQRY2+mfKrtG0tkGm81k/o3S3HgVR4tUReSk9ph/5ZVUgklhZnIEpQKgr8bWCQQjClwtrQVtylAQcxmCvUDBKN3e2Ls8pFCbvCczArsplo4jdf16+btotX9j2LR7vuPWKlhPF9kiUQ+qFxTfZuzGOn76s5ADrX5DKJrsSJLxtdEmXqKrESRJWQtCpIu/iG5ZCm7F/LpIvJoN9SVyIol76jYDpzq7s7sc1loLfiuo9eX/y+RN7RUDSwJEhO7c482M9rYHRiHxDk01jHw9sBs2i569/F6jvYpPEPwdXRCYQ2Bf+6XtJKx/5GMd50cV8gTo1mFGcYak6AhVxvSFd8vaYflqznjKTZ53Q6l10vQ2bezHUH1xN/hMs/MJp3Jd1gK1dPNLEyK7BMmPpS4HfDtkRFt9kfG5wcZcIe4XyLql1srdoIq+libXusmrtXnUPmda5Rhiscn8n7O9BdluZTE4O8pqPGoEed6Tvs8fm+OfxrtM7rlY/kG9yyrTA==" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',K,ut,Sn="<summary>Hint</summary><p>Add one app variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 app methods (one click handler for each button) that changes the app variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the app variable in the last <code>Text</code> component on the <code>StarredPage</code>.</p>",It,D,Pn="That's it!",$t,J,bn="Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use <code>p</code> or <code>a</code> to access them. If you will just use the variable in one of your pages, then use a page variable, and if you need to use it in multiple pages, then use an app variable instead. Simple as that!",Ut,X,_n='Next, let us take a look at how we can use numbers in the tutorial <a href="../numbers/">Programming 5. Numbers</a>.',Qt;return R=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`Hello \${a.name}!\`)
	}
	
}`,x:150,y:200}]}}}),G=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Button.text(\`Change name\`).page(ChangeNamePage),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Change name to what?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Alice\`).page(StartPage).onClick(p.setNameToAlice),
				Space,
				Button.text(\`Bob\`).page(StartPage).onClick(p.setNameToBob),
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
	
}`,x:450,y:200}]}}}),Q=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Hello \${a.name}!\`),
			Space,
			Button.text(\`Change name\`).page(ChangeNamePage),
			Space,
			Button.text(\`Change name to Alice\`).onClick(a.setNameToAlice),
			Button.text(\`Change name to Bob\`).onClick(a.setNameToBob),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class ChangeNamePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Change name to what?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Alice\`).page(StartPage).onClick(a.setNameToAlice),
				Space,
				Button.text(\`Bob\`).page(StartPage).onClick(a.setNameToBob),
				Space,
			),
			Space,
		)
	}
	
}`,x:450,y:200}]}}}),K=new Xt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`How many stars would you give BagaWork?\`),
			Space,
			Columns.children(
				Space,
				Rows.children(
					Button.text(\`🌟\`).page(StarredPage).onClick(a.select1Star),
					Space,
					Button.text(\`🌟🌟\`).page(StarredPage).onClick(a.select2Stars),
					Space,
					Button.text(\`🌟🌟🌟\`).page(StarredPage).onClick(a.select3Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟\`).page(StarredPage).onClick(a.select4Stars),
					Space,
					Button.text(\`🌟🌟🌟🌟🌟\`).page(StarredPage).onClick(a.select5Stars),
				),
				Space,
			),
			Space,
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class StarredPage extends Page{
	
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
	
}`,x:450,y:200}]}}}),{c(){h=e("h1"),h.textContent=zt,rt=c(),P=e("p"),P.textContent=Yt,kt=c(),b=e("h2"),b.textContent=Ft,dt=c(),_=e("p"),_.textContent=Zt,mt=c(),T=e("h2"),T.textContent=tn,gt=c(),A=e("p"),A.innerHTML=nn,ht=c(),B=e("p"),B.textContent=an,ft=c(),N=e("ul"),N.innerHTML=sn,xt=c(),E=e("pre"),vt=new w(!1),wt=c(),H=e("h2"),H.textContent=en,Ct=c(),j=e("p"),j.innerHTML=pn,yt=c(),m=e("div"),M=e("div"),M.textContent=on,Y=e("p"),Y.textContent=ln,Ot(R.$$.fragment),f=e("a"),f.textContent=cn,F=e("pre"),St=new w(!1),Z=e("pre"),Pt=new w(!1),bt=c(),L=e("p"),L.innerHTML=un,_t=c(),r=e("div"),V=e("div"),V.textContent=rn,tt=e("p"),tt.textContent=kn,Ot(G.$$.fragment),x=e("a"),x.textContent=dn,nt=e("pre"),Tt=new w(!1),at=e("pre"),At=new w(!1),st=e("pre"),Bt=new w(!1),Nt=c(),I=e("h3"),I.textContent=mn,Et=c(),$=e("p"),$.innerHTML=gn,Ht=c(),k=e("div"),U=e("div"),U.textContent=hn,et=e("p"),et.textContent=fn,Ot(Q.$$.fragment),v=e("a"),v.textContent=xn,pt=e("pre"),jt=new w(!1),ot=e("pre"),Mt=new w(!1),lt=e("pre"),Rt=new w(!1),Lt=c(),O=e("h2"),O.textContent=vn,Vt=c(),W=e("p"),W.textContent=wn,Gt=c(),g=e("div"),q=e("div"),q.textContent=Cn,ct=e("p"),ct.innerHTML=yn,Ot(K.$$.fragment),ut=e("details"),ut.innerHTML=Sn,It=c(),D=e("h2"),D.textContent=Pn,$t=c(),J=e("p"),J.innerHTML=bn,Ut=c(),X=e("p"),X.innerHTML=_n,this.h()},l(t){h=p(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-pesbfn"&&(h.textContent=zt),rt=u(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1b4bgdm"&&(P.textContent=Yt),kt=u(t),b=p(t,"H2",{"data-svelte-h":!0}),o(b)!=="svelte-13sv629"&&(b.textContent=Ft),dt=u(t),_=p(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1gvqb9q"&&(_.textContent=Zt),mt=u(t),T=p(t,"H2",{"data-svelte-h":!0}),o(T)!=="svelte-14clwk7"&&(T.textContent=tn),gt=u(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1ulzfst"&&(A.innerHTML=nn),ht=u(t),B=p(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-1r2u5wf"&&(B.textContent=an),ft=u(t),N=p(t,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-63e1ap"&&(N.innerHTML=sn),xt=u(t),E=p(t,"PRE",{class:!0});var a=d(E);vt=C(a,!1),a.forEach(n),wt=u(t),H=p(t,"H2",{"data-svelte-h":!0}),o(H)!=="svelte-16zhqr0"&&(H.textContent=en),Ct=u(t),j=p(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-1vyh33t"&&(j.innerHTML=pn),yt=u(t),m=p(t,"DIV",{class:!0});var z=d(m);M=p(z,"DIV",{class:!0,"data-svelte-h":!0}),o(M)!=="svelte-1llzxwj"&&(M.textContent=on),Y=p(z,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1x96elv"&&(Y.textContent=ln),Wt(R.$$.fragment,z),f=p(z,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-5uoby3"&&(f.textContent=cn),F=p(z,"PRE",{class:!0});var Tn=d(F);St=C(Tn,!1),Tn.forEach(n),Z=p(z,"PRE",{class:!0});var An=d(Z);Pt=C(An,!1),An.forEach(n),z.forEach(n),bt=u(t),L=p(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1d200ns"&&(L.innerHTML=un),_t=u(t),r=p(t,"DIV",{class:!0});var y=d(r);V=p(y,"DIV",{class:!0,"data-svelte-h":!0}),o(V)!=="svelte-1llzxwj"&&(V.textContent=rn),tt=p(y,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-1v6zj8y"&&(tt.textContent=kn),Wt(G.$$.fragment,y),x=p(y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-1fvmoaq"&&(x.textContent=dn),nt=p(y,"PRE",{class:!0});var Bn=d(nt);Tt=C(Bn,!1),Bn.forEach(n),at=p(y,"PRE",{class:!0});var Nn=d(at);At=C(Nn,!1),Nn.forEach(n),st=p(y,"PRE",{class:!0});var En=d(st);Bt=C(En,!1),En.forEach(n),y.forEach(n),Nt=u(t),I=p(t,"H3",{"data-svelte-h":!0}),o(I)!=="svelte-1f3ry51"&&(I.textContent=mn),Et=u(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-193iz7e"&&($.innerHTML=gn),Ht=u(t),k=p(t,"DIV",{class:!0});var S=d(k);U=p(S,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=hn),et=p(S,"P",{"data-svelte-h":!0}),o(et)!=="svelte-106pdna"&&(et.textContent=fn),Wt(Q.$$.fragment,S),v=p(S,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1fs7ths"&&(v.textContent=xn),pt=p(S,"PRE",{class:!0});var Hn=d(pt);jt=C(Hn,!1),Hn.forEach(n),ot=p(S,"PRE",{class:!0});var jn=d(ot);Mt=C(jn,!1),jn.forEach(n),lt=p(S,"PRE",{class:!0});var Mn=d(lt);Rt=C(Mn,!1),Mn.forEach(n),S.forEach(n),Lt=u(t),O=p(t,"H2",{"data-svelte-h":!0}),o(O)!=="svelte-4opca7"&&(O.textContent=vn),Vt=u(t),W=p(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-fy3v6t"&&(W.textContent=wn),Gt=u(t),g=p(t,"DIV",{class:!0});var it=d(g);q=p(it,"DIV",{class:!0,"data-svelte-h":!0}),o(q)!=="svelte-1kqyz2o"&&(q.textContent=Cn),ct=p(it,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-1ydd8j"&&(ct.innerHTML=yn),Wt(K.$$.fragment,it),ut=p(it,"DETAILS",{"data-svelte-h":!0}),o(ut)!=="svelte-1anayx4"&&(ut.innerHTML=Sn),it.forEach(n),It=u(t),D=p(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-p2uhy5"&&(D.textContent=Pn),$t=u(t),J=p(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1xz440j"&&(J.innerHTML=bn),Ut=u(t),X=p(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-hw3wa2"&&(X.innerHTML=_n),this.h()},h(){vt.a=null,l(E,"class","language-js"),l(M,"class","remark-container__title"),l(f,"target","_blank"),l(f,"href","/editor#eNpdT00LwjAM/Ss1eNhgjCl4KXjwpB4EQW9OaOmiDGpXugw2Sv+7HcPBPCTkvXy8Fw/SWuAeVFMhcFBati27DAdrGfaEpmpZrH1pShrDyA+yPRMHXSsUP1Y5lIQ3ko6u8o1JOs2TQ+qcYXNjZMO0FCBkYCPXAn94qCvgmwxeja7QnSewsDTfmG2NwC8dHLv6X/sex3OKKREn1Lphay/z8YuwEunCTwZ9lN0VGQzAt0URnuELrNJlVg=="),l(f,"title","Open in our Online Editor"),St.a=null,l(F,"class","language-js"),Pt.a=null,l(Z,"class","language-js"),l(m,"class","remark-container tip"),l(V,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNqtU1FLwzAQ/isx+NBCKHPoS0HGtgf1QRG3Nys0tqcrZklor2yj9L+bmK00W5U9+NDS3H333fddrg3lWtO4oZnKgcY0E7yqyONuqjWBLYLMK2K+m0QmaB/J10BuSToVRQbpIZqVwBEWyEt85p8QhA6PJWBdStIlbLR1RS1tGdUmVtH4taFFTuMrRj+UyKF8cAdPUsfRybKHxldwVxfHvV/UpoqyVSHyEmTgUgkuDUmE5hWk9yCEIpcNj6y39iIN2QE1qxGV3OPmKy5NdwtKw8gqD1zoyUSslkNd6LlkdGvM3IwY3dF4PBq1zJkd/2XWJ/4XxwvNM2AD/nu+CCqyWXGc9Gbg182VqNdygP4YeDQ8ty77sXVXGUZKzk3mK9BRBWj9LtUPNGRnEs/U+3m0Bvg76bDd/kUm6Avshu7Wxv8lTmtM94EKK/50Wa57y/LWfgMa/U8D"),l(x,"title","Open in our Online Editor"),Tt.a=null,l(nt,"class","language-js"),At.a=null,l(at,"class","language-js"),Bt.a=null,l(st,"class","language-js"),l(r,"class","remark-container tip"),l(U,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNqtUk1Pg0AQ/SvrxAMkhNRGLySmaXtQDxpje7MmrDBa4naXwJC2Ifx3d7tCgKLWxAObna+3896jBJ6mEJQQqRghgEjwPGf3+2maMtwRyjhn+l6u5IrMJ/kG2TULpyKJMKyzUYaccEE8o0f+jo5r+ylDKjLJmoLJVvVQjvSg0ZbqgNXMcP/4jeOZmXodmNDZdn8FlQepfjeH4LmEJIbgwoM3JWLM7mzQod3s2VA3QdlleVMkfX5Papv70ToRcYbSsaUVLTWIT/pwwlsUQrHz0m5anYWuV3ctUh5hE80KIiW/puZrLvUuZiR0fcPDsSkjgdnsryiMFLOiur6Sc337cLjf9cE9CcUIPYihCzWC23HCg50W/GrkwR6C8WhUedaQ8U+GdOn+iytdpVoe9Rhu15wm3/o0V6LYyAH4fmNPxlr9g5nN73aKG78AW0NOgG0ZdAw6THfAyMuWkS/VJ8Voik0="),l(v,"title","Open in our Online Editor"),jt.a=null,l(pt,"class","language-js"),Mt.a=null,l(ot,"class","language-js"),Rt.a=null,l(lt,"class","language-js"),l(k,"class","remark-container tip"),l(q,"class","remark-container__title"),l(g,"class","remark-container exercise")},m(t,a){s(t,h,a),s(t,rt,a),s(t,P,a),s(t,kt,a),s(t,b,a),s(t,dt,a),s(t,_,a),s(t,mt,a),s(t,T,a),s(t,gt,a),s(t,A,a),s(t,ht,a),s(t,B,a),s(t,ft,a),s(t,N,a),s(t,xt,a),s(t,E,a),vt.m(Ln,E),s(t,wt,a),s(t,H,a),s(t,Ct,a),s(t,j,a),s(t,yt,a),s(t,m,a),i(m,M),i(m,Y),qt(R,m,null),i(m,f),i(m,F),St.m(Vn,F),i(m,Z),Pt.m(Gn,Z),s(t,bt,a),s(t,L,a),s(t,_t,a),s(t,r,a),i(r,V),i(r,tt),qt(G,r,null),i(r,x),i(r,nt),Tt.m(In,nt),i(r,at),At.m($n,at),i(r,st),Bt.m(Un,st),s(t,Nt,a),s(t,I,a),s(t,Et,a),s(t,$,a),s(t,Ht,a),s(t,k,a),i(k,U),i(k,et),qt(Q,k,null),i(k,v),i(k,pt),jt.m(Qn,pt),i(k,ot),Mt.m(On,ot),i(k,lt),Rt.m(Wn,lt),s(t,Lt,a),s(t,O,a),s(t,Vt,a),s(t,W,a),s(t,Gt,a),s(t,g,a),i(g,q),i(g,ct),qt(K,g,null),i(g,ut),s(t,It,a),s(t,D,a),s(t,$t,a),s(t,J,a),s(t,Ut,a),s(t,X,a),Qt=!0},p:Kn,i(t){Qt||(Kt(R.$$.fragment,t),Kt(G.$$.fragment,t),Kt(Q.$$.fragment,t),Kt(K.$$.fragment,t),Qt=!0)},o(t){Dt(R.$$.fragment,t),Dt(G.$$.fragment,t),Dt(Q.$$.fragment,t),Dt(K.$$.fragment,t),Qt=!1},d(t){t&&(n(h),n(rt),n(P),n(kt),n(b),n(dt),n(_),n(mt),n(T),n(gt),n(A),n(ht),n(B),n(ft),n(N),n(xt),n(E),n(wt),n(H),n(Ct),n(j),n(yt),n(m),n(bt),n(L),n(_t),n(r),n(Nt),n(I),n(Et),n($),n(Ht),n(k),n(Lt),n(O),n(Vt),n(W),n(Gt),n(g),n(It),n(D),n($t),n(J),n(Ut),n(X)),Jt(R),Jt(G),Jt(Q),Jt(K)}}}class Zn extends Dn{constructor(h){super(),Jn(this,h,null,Xn,qn,{})}}export{Zn as component};
