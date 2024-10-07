import{s as Qn,n as On}from"../chunks/scheduler.B0TnBjPs.js";import{S as Wn,i as qn,e,s as l,H as w,c as Ut,a as p,g as o,b as u,d,n as C,h as n,f as Qt,o as c,j as s,p as i,m as Ot,t as Wt,k as qt,l as Kt}from"../chunks/index.CHfggXAQ.js";import{V as Dt}from"../chunks/ViewApp.6tllL5xD.js";function Kn(jn){let h,Jt="4. App Variables and Methods",it,P,Xt="This tutorial will teach you what app variables and app methods are in BagaWork, and how they differ from page variables and page methods.",rt,b,zt="Why app variables are needed",kt,_,Yt="A page variable can only be accessed and used on the page the created it. But often, we need to be able to use the same variable on many different pages. For these cases, we can instead use an app variable.",dt,T,Ft="How to create app variables",mt,A,Zt="To create an app variable, we write the same code as for creating an app constant, but we use <code>thisNamingConvention</code> for app variables instead of <code>THIS_NAMING_CONVENTION</code> (which is only used for constants).",gt,B,tn="In the code below you find an example of how to create the following app variables:",ht,N,nn="<li><code>name</code> will have the string value <code>Alice</code></li> <li><code>lastVisit</code> will have the string value <code>2023-09-16</code></li>",ft,E,xt,Hn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	lastVisit <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-16</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many app variables as you want.</span>
	
	<span class="token comment">// And then you have createStartPage() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,vt,j,an="How to use app variables",wt,H,sn="To obtain the value from an app variable, you write the same code as for obtaining the value from an app constant, i.e. you would write <code>a.theName</code>. For example, to obtain the value stored in the app variable <code>lastVisit</code>, we would write <code>a.lastVisit</code> (which would evaluate to the string <code>2023-09-16</code> in this case).",Ct,m,M,en="Example",z,pn="Example of an app using an app variable.",R,f,on="Open in Online Editor",Y,yt,Mn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,F,St,Rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,L,cn="As you can see in the example above, we can use the special <code>a</code> variable in your <code>Page</code> classes BagaWork to access your app variables.",bt,r,V,ln="Example",Z,un="Example of an app that stores a name in an app variable, and that can be changed by calling different page methods by clicking on buttons.",G,x,rn="Open in Online Editor",tt,_t,Ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,Tt,Vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Change name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ChangeNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,at,At,Gn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Bt,I,kn="App methods",Nt,$,dn="A page method can only be used in the <code>Page</code> that created the page method. If you want to be able to use the method in many different pages, you should instead create the method as an <em>app method</em> by writing it in your <code>App</code> class instead. Then you can access it from all your pages using <code>a.theNameOfTheMethod</code>.",Et,k,U,mn="Example",st,gn="Example of an app that stores a name in an app variable, and that can be changed by calling different app methods by clicking on buttons.",Q,v,hn="Open in Online Editor",et,jt,In=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,pt,Ht,$n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ot,Mt,Un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ChangeNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Rt,O,fn="Exercises",Lt,W,xn="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Vt,g,q,vn="Exercise 1",ct,wn='Open <a href="/editor#eNq9VFFq4zAQvYqYn41BhMTd0q5/iluWbT92WbaFNmwKFvbECXUkI8mbhuAb7B16xR6hUpway9g0H0kxNiPPzJvR0xttgOU5BBuIRYIQQJwxpcjPdZjnBJ818kQRY2+mfKrtG0tkGm81k/o3S3HgVR4tUReSk9ph/5ZVUgklhZnIEpQKgr8bWCQQjClwtrQVtylAQcxmCvUDBKN3e2Ls8pFCbvCczArsplo4jdf16+btotX9j2LR7vuPWKlhPF9kiUQ+qFxTfZuzGOn76s5ADrX5DKJrsSJLxtdEmXqKrESRJWQtCpIu/iG5ZCm7F/LpIvJoN9SVyIol76jYDpzq7s7sc1loLfiuo9eX/y+RN7RUDSwJEhO7c482M9rYHRiHxDk01jHw9sBs2i569/F6jvYpPEPwdXRCYQ2Bf+6XtJKx/5GMd50cV8gTo1mFGcYak6AhVxvSFd8vaYflqznjKTZ53Q6l10vQ2bezHUH1xN/hMs/MJp3Jd1gK1dPNLEyK7BMmPpS4HfDtkRFt9kfG5wcZcIe4XyLql1srdoIq+libXusmrtXnUPmda5Rhiscn8n7O9BdluZTE4O8pqPGoEed6Tvs8fm+OfxrtM7rlY/kG9yyrTA==" target="_blank">this BagaWork project</a> and change the code in it to make the app function as shown below.',K,lt,Cn="<summary>Hint</summary><p>Add one app variable to keep track of which the selected stars are (start with <code>``</code> (empty string) or <code>`🌟🌟🌟`</code>). Then add 5 app methods (one click handler for each button) that changes the app variable to a string containing 1 to 5 stars (depending on which button that was clicked). Then also display the string in the app variable in the last <code>Text</code> component.</p>",Gt,D,yn="That's it!",It,J,Sn="Good work! 🥳 Page constants/variables/methods are really similar to app constants/variables/methods, the only difference is in which class you should create them, and if you should use <code>p</code> or <code>a</code> to access them. If you will just use the variable in one of your pages, then use a page variable, and if you need to use it in multiple pages, then use an app variable instead. Simple as that!",$t;return R=new Dt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Alice\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text.text(\`Hello \${a.name}!\`)
	}
	
}`,x:150,y:200}]}}}),G=new Dt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:450,y:200}]}}}),Q=new Dt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:450,y:200}]}}}),K=new Dt({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:450,y:200}]}}}),{c(){h=e("h1"),h.textContent=Jt,it=l(),P=e("p"),P.textContent=Xt,rt=l(),b=e("h2"),b.textContent=zt,kt=l(),_=e("p"),_.textContent=Yt,dt=l(),T=e("h2"),T.textContent=Ft,mt=l(),A=e("p"),A.innerHTML=Zt,gt=l(),B=e("p"),B.textContent=tn,ht=l(),N=e("ul"),N.innerHTML=nn,ft=l(),E=e("pre"),xt=new w(!1),vt=l(),j=e("h2"),j.textContent=an,wt=l(),H=e("p"),H.innerHTML=sn,Ct=l(),m=e("div"),M=e("div"),M.textContent=en,z=e("p"),z.textContent=pn,Ut(R.$$.fragment),f=e("a"),f.textContent=on,Y=e("pre"),yt=new w(!1),F=e("pre"),St=new w(!1),Pt=l(),L=e("p"),L.innerHTML=cn,bt=l(),r=e("div"),V=e("div"),V.textContent=ln,Z=e("p"),Z.textContent=un,Ut(G.$$.fragment),x=e("a"),x.textContent=rn,tt=e("pre"),_t=new w(!1),nt=e("pre"),Tt=new w(!1),at=e("pre"),At=new w(!1),Bt=l(),I=e("h3"),I.textContent=kn,Nt=l(),$=e("p"),$.innerHTML=dn,Et=l(),k=e("div"),U=e("div"),U.textContent=mn,st=e("p"),st.textContent=gn,Ut(Q.$$.fragment),v=e("a"),v.textContent=hn,et=e("pre"),jt=new w(!1),pt=e("pre"),Ht=new w(!1),ot=e("pre"),Mt=new w(!1),Rt=l(),O=e("h2"),O.textContent=fn,Lt=l(),W=e("p"),W.textContent=xn,Vt=l(),g=e("div"),q=e("div"),q.textContent=vn,ct=e("p"),ct.innerHTML=wn,Ut(K.$$.fragment),lt=e("details"),lt.innerHTML=Cn,Gt=l(),D=e("h2"),D.textContent=yn,It=l(),J=e("p"),J.innerHTML=Sn,this.h()},l(t){h=p(t,"H1",{"data-svelte-h":!0}),o(h)!=="svelte-pesbfn"&&(h.textContent=Jt),it=u(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-1b4bgdm"&&(P.textContent=Xt),rt=u(t),b=p(t,"H2",{"data-svelte-h":!0}),o(b)!=="svelte-13sv629"&&(b.textContent=zt),kt=u(t),_=p(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-8rkeyq"&&(_.textContent=Yt),dt=u(t),T=p(t,"H2",{"data-svelte-h":!0}),o(T)!=="svelte-14clwk7"&&(T.textContent=Ft),mt=u(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1ulzfst"&&(A.innerHTML=Zt),gt=u(t),B=p(t,"P",{"data-svelte-h":!0}),o(B)!=="svelte-1r2u5wf"&&(B.textContent=tn),ht=u(t),N=p(t,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-63e1ap"&&(N.innerHTML=nn),ft=u(t),E=p(t,"PRE",{class:!0});var a=d(E);xt=C(a,!1),a.forEach(n),vt=u(t),j=p(t,"H2",{"data-svelte-h":!0}),o(j)!=="svelte-16zhqr0"&&(j.textContent=an),wt=u(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-1vyh33t"&&(H.innerHTML=sn),Ct=u(t),m=p(t,"DIV",{class:!0});var X=d(m);M=p(X,"DIV",{class:!0,"data-svelte-h":!0}),o(M)!=="svelte-1llzxwj"&&(M.textContent=en),z=p(X,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1x96elv"&&(z.textContent=pn),Qt(R.$$.fragment,X),f=p(X,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-5uoby3"&&(f.textContent=on),Y=p(X,"PRE",{class:!0});var Pn=d(Y);yt=C(Pn,!1),Pn.forEach(n),F=p(X,"PRE",{class:!0});var bn=d(F);St=C(bn,!1),bn.forEach(n),X.forEach(n),Pt=u(t),L=p(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1d200ns"&&(L.innerHTML=cn),bt=u(t),r=p(t,"DIV",{class:!0});var y=d(r);V=p(y,"DIV",{class:!0,"data-svelte-h":!0}),o(V)!=="svelte-1llzxwj"&&(V.textContent=ln),Z=p(y,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-1v6zj8y"&&(Z.textContent=un),Qt(G.$$.fragment,y),x=p(y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-1fvmoaq"&&(x.textContent=rn),tt=p(y,"PRE",{class:!0});var _n=d(tt);_t=C(_n,!1),_n.forEach(n),nt=p(y,"PRE",{class:!0});var Tn=d(nt);Tt=C(Tn,!1),Tn.forEach(n),at=p(y,"PRE",{class:!0});var An=d(at);At=C(An,!1),An.forEach(n),y.forEach(n),Bt=u(t),I=p(t,"H3",{"data-svelte-h":!0}),o(I)!=="svelte-1f3ry51"&&(I.textContent=kn),Nt=u(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-193iz7e"&&($.innerHTML=dn),Et=u(t),k=p(t,"DIV",{class:!0});var S=d(k);U=p(S,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=mn),st=p(S,"P",{"data-svelte-h":!0}),o(st)!=="svelte-106pdna"&&(st.textContent=gn),Qt(Q.$$.fragment,S),v=p(S,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1fs7ths"&&(v.textContent=hn),et=p(S,"PRE",{class:!0});var Bn=d(et);jt=C(Bn,!1),Bn.forEach(n),pt=p(S,"PRE",{class:!0});var Nn=d(pt);Ht=C(Nn,!1),Nn.forEach(n),ot=p(S,"PRE",{class:!0});var En=d(ot);Mt=C(En,!1),En.forEach(n),S.forEach(n),Rt=u(t),O=p(t,"H2",{"data-svelte-h":!0}),o(O)!=="svelte-4opca7"&&(O.textContent=fn),Lt=u(t),W=p(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-fy3v6t"&&(W.textContent=xn),Vt=u(t),g=p(t,"DIV",{class:!0});var ut=d(g);q=p(ut,"DIV",{class:!0,"data-svelte-h":!0}),o(q)!=="svelte-1kqyz2o"&&(q.textContent=vn),ct=p(ut,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-1ydd8j"&&(ct.innerHTML=wn),Qt(K.$$.fragment,ut),lt=p(ut,"DETAILS",{"data-svelte-h":!0}),o(lt)!=="svelte-ejbq13"&&(lt.innerHTML=Cn),ut.forEach(n),Gt=u(t),D=p(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-p2uhy5"&&(D.textContent=yn),It=u(t),J=p(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1xz440j"&&(J.innerHTML=Sn),this.h()},h(){xt.a=null,c(E,"class","language-js"),c(M,"class","remark-container__title"),c(f,"target","_blank"),c(f,"href","/editor#eNpdT00LwjAM/Ss1eNhgjCl4KXjwpB4EQW9OaOmiDGpXugw2Sv+7HcPBPCTkvXy8Fw/SWuAeVFMhcFBati27DAdrGfaEpmpZrH1pShrDyA+yPRMHXSsUP1Y5lIQ3ko6u8o1JOs2TQ+qcYXNjZMO0FCBkYCPXAn94qCvgmwxeja7QnSewsDTfmG2NwC8dHLv6X/sex3OKKREn1Lphay/z8YuwEunCTwZ9lN0VGQzAt0URnuELrNJlVg=="),c(f,"title","Open in our Online Editor"),yt.a=null,c(Y,"class","language-js"),St.a=null,c(F,"class","language-js"),c(m,"class","remark-container tip"),c(V,"class","remark-container__title"),c(x,"target","_blank"),c(x,"href","/editor#eNqtU1FLwzAQ/isx+NBCKHPoS0HGtgf1QRG3Nys0tqcrZklor2yj9L+bmK00W5U9+NDS3H333fddrg3lWtO4oZnKgcY0E7yqyONuqjWBLYLMK2K+m0QmaB/J10BuSToVRQbpIZqVwBEWyEt85p8QhA6PJWBdStIlbLR1RS1tGdUmVtH4taFFTuMrRj+UyKF8cAdPUsfRybKHxldwVxfHvV/UpoqyVSHyEmTgUgkuDUmE5hWk9yCEIpcNj6y39iIN2QE1qxGV3OPmKy5NdwtKw8gqD1zoyUSslkNd6LlkdGvM3IwY3dF4PBq1zJkd/2XWJ/4XxwvNM2AD/nu+CCqyWXGc9Gbg182VqNdygP4YeDQ8ty77sXVXGUZKzk3mK9BRBWj9LtUPNGRnEs/U+3m0Bvg76bDd/kUm6Avshu7Wxv8lTmtM94EKK/50Wa57y/LWfgMa/U8D"),c(x,"title","Open in our Online Editor"),_t.a=null,c(tt,"class","language-js"),Tt.a=null,c(nt,"class","language-js"),At.a=null,c(at,"class","language-js"),c(r,"class","remark-container tip"),c(U,"class","remark-container__title"),c(v,"target","_blank"),c(v,"href","/editor#eNqtUk1Pg0AQ/SvrxAMkhNRGLySmaXtQDxpje7MmrDBa4naXwJC2Ifx3d7tCgKLWxAObna+3896jBJ6mEJQQqRghgEjwPGf3+2maMtwRyjhn+l6u5IrMJ/kG2TULpyKJMKyzUYaccEE8o0f+jo5r+ylDKjLJmoLJVvVQjvSg0ZbqgNXMcP/4jeOZmXodmNDZdn8FlQepfjeH4LmEJIbgwoM3JWLM7mzQod3s2VA3QdlleVMkfX5Papv70ToRcYbSsaUVLTWIT/pwwlsUQrHz0m5anYWuV3ctUh5hE80KIiW/puZrLvUuZiR0fcPDsSkjgdnsryiMFLOiur6Sc337cLjf9cE9CcUIPYihCzWC23HCg50W/GrkwR6C8WhUedaQ8U+GdOn+iytdpVoe9Rhu15wm3/o0V6LYyAH4fmNPxlr9g5nN73aKG78AW0NOgG0ZdAw6THfAyMuWkS/VJ8Voik0="),c(v,"title","Open in our Online Editor"),jt.a=null,c(et,"class","language-js"),Ht.a=null,c(pt,"class","language-js"),Mt.a=null,c(ot,"class","language-js"),c(k,"class","remark-container tip"),c(q,"class","remark-container__title"),c(g,"class","remark-container exercise")},m(t,a){s(t,h,a),s(t,it,a),s(t,P,a),s(t,rt,a),s(t,b,a),s(t,kt,a),s(t,_,a),s(t,dt,a),s(t,T,a),s(t,mt,a),s(t,A,a),s(t,gt,a),s(t,B,a),s(t,ht,a),s(t,N,a),s(t,ft,a),s(t,E,a),xt.m(Hn,E),s(t,vt,a),s(t,j,a),s(t,wt,a),s(t,H,a),s(t,Ct,a),s(t,m,a),i(m,M),i(m,z),Ot(R,m,null),i(m,f),i(m,Y),yt.m(Mn,Y),i(m,F),St.m(Rn,F),s(t,Pt,a),s(t,L,a),s(t,bt,a),s(t,r,a),i(r,V),i(r,Z),Ot(G,r,null),i(r,x),i(r,tt),_t.m(Ln,tt),i(r,nt),Tt.m(Vn,nt),i(r,at),At.m(Gn,at),s(t,Bt,a),s(t,I,a),s(t,Nt,a),s(t,$,a),s(t,Et,a),s(t,k,a),i(k,U),i(k,st),Ot(Q,k,null),i(k,v),i(k,et),jt.m(In,et),i(k,pt),Ht.m($n,pt),i(k,ot),Mt.m(Un,ot),s(t,Rt,a),s(t,O,a),s(t,Lt,a),s(t,W,a),s(t,Vt,a),s(t,g,a),i(g,q),i(g,ct),Ot(K,g,null),i(g,lt),s(t,Gt,a),s(t,D,a),s(t,It,a),s(t,J,a),$t=!0},p:On,i(t){$t||(Wt(R.$$.fragment,t),Wt(G.$$.fragment,t),Wt(Q.$$.fragment,t),Wt(K.$$.fragment,t),$t=!0)},o(t){qt(R.$$.fragment,t),qt(G.$$.fragment,t),qt(Q.$$.fragment,t),qt(K.$$.fragment,t),$t=!1},d(t){t&&(n(h),n(it),n(P),n(rt),n(b),n(kt),n(_),n(dt),n(T),n(mt),n(A),n(gt),n(B),n(ht),n(N),n(ft),n(E),n(vt),n(j),n(wt),n(H),n(Ct),n(m),n(Pt),n(L),n(bt),n(r),n(Bt),n(I),n(Nt),n($),n(Et),n(k),n(Rt),n(O),n(Lt),n(W),n(Vt),n(g),n(Gt),n(D),n(It),n(J)),Kt(R),Kt(G),Kt(Q),Kt(K)}}}class zn extends Wn{constructor(h){super(),qn(this,h,null,Kn,Qn,{})}}export{zn as component};
