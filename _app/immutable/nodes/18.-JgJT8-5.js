import{s as fa,n as xa}from"../chunks/scheduler.DFPFbGJz.js";import{S as ha,i as va,e as a,s as u,c as wt,H as k,a as e,g as l,b as i,d as r,f as Et,n as d,h as n,o,j as p,p as c,m as Tt,t as yt,k as Ct,l as _t}from"../chunks/index.CzDE4dZi.js";import{V as It}from"../chunks/ViewApp.C2MU7-ZI.js";function Pa(pa){let m,hn="<code>EnterText</code>",St,M,vn="On this page you find the documentation for the GUI Component <code>EnterText</code>.",Mt,j,Pn="Introduction",jt,H,wn="The <code>EnterText</code> component is a view in which the user can enter some text. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",Ht,g,b,En="Example",ct,Tn="In this example, the GUI consists of only the <code>EnterText</code> component, so it covers the entire screen.",L,V,f,yn="Open in Online Editor",ut,bt,oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Lt,N,Cn="<code>text()</code> - Setting an initial text",Vt,G,_n="Use the configuration method <code>text()</code> to give the <code>EnterText</code> an initial text it should contain initially. Pass the text as a string.",Nt,y,O,In="Example",A,z,x,Sn="Open in Online Editor",it,Gt,la=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Write here!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ot,R,Mn="<code>placeholder()</code> - Setting a placeholder text",At,D,jn="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterText</code> component when it&#39;s empty. Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",zt,C,B,Hn="Example",q,Q,h,bn="Open in Online Editor",rt,Rt,ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dt,U,Ln="<code>page()</code> &amp; <code>pageIfEqual()</code> - Going to next page",Bt,$,Vn="Use the configuration method <code>pageIfEqual()</code> to specify a <code>Page</code> the user should come to if she has entered some specific text in the component. Pass the method two values:",qt,F,Nn="<li>The text the user might enter</li> <li>The <code>Page</code> the user should come to if that text has been entered</li>",Qt,J,Gn="You can call this method multiple times.",Ut,X,On="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if she hasn&#39;t entered any text that matches any of the texts passed to <code>pageIfEquals()</code>.",$t,_,W,An="Example",K,Y,v,zn="Open in Online Editor",kt,Ft,ua=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which is your favorite name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText
					<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>NormalNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> BeautifulNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Gargamel</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> UglyNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> EmptyNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jt,Z,Rn="<code>store()</code> - Storing the entered text",Xt,tt,Dn="Use the configuration method <code>store()</code> to store the text the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Wt,nt,Bn="<li>The object in which the entered text should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered text should be stored</li>",Kt,I,at,qn="Example",P,et,w,Qn="Open in Online Editor",dt,Yt,ia=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,mt,Zt,ra=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,gt,tn,ka=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,nn,st,Un="<code>handler()</code> - Handling the entered text",an,pt,$n="Use the configuration method <code>handler()</code> to tell the <code>EnterText</code> component which method to call to handle the entered text. The method will be passed the entered text as an argument.",en,S,ot,Fn="Example",E,lt,T,Jn="Open in Online Editor",ft,sn,da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xt,pn,ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredName</span><span class="token punctuation">(</span><span class="token parameter">enteredName</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> enteredName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ht,on,ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ln;return V=new It({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),z=new It({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.text(\`Write here!\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),Q=new It({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(\`Enter name\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),Y=new It({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:-3,offsetY:-74}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`Which is your favorite name?\`),
			Columns.children(
				EnterText
					.size(1)
					.page(NormalNamePage)
					.pageIfEqual(\`Peter\`, BeautifulNamePage)
					.pageIfEqual(\`Gargamel\`, UglyNamePage)
					.pageIfEqual(\`\`, EmptyNamePage),
				Button.text(\`⇨\`),
			),
		)
	}
}`,x:212,y:454},{id:2,folderId:1,code:`class NormalNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`That's no special name.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:495,y:148},{id:3,folderId:1,code:`class BeautifulNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, that's a very beautiful name :)\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:702,y:239},{id:4,folderId:1,code:`class UglyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, that's not a very nice name.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:731,y:545},{id:5,folderId:1,code:`class EmptyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`You must enter a name...\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:529,y:773}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),et=new It({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.size(1).store(a, \`name\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:232,y:259},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello, \${a.name}!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:579,y:250}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),lt=new It({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.size(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.size(1).handler(p.handleEnteredName).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
	
	handleEnteredName(enteredName){
		a.name = enteredName.toUpperCase()
	}
	
}`,x:232,y:259},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello, \${a.name}!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:579,y:250}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){m=a("h1"),m.innerHTML=hn,St=u(),M=a("p"),M.innerHTML=vn,Mt=u(),j=a("h2"),j.textContent=Pn,jt=u(),H=a("p"),H.innerHTML=wn,Ht=u(),g=a("div"),b=a("div"),b.textContent=En,ct=a("p"),ct.innerHTML=Tn,L=a("div"),wt(V.$$.fragment),f=a("a"),f.textContent=yn,ut=a("pre"),bt=new k(!1),Lt=u(),N=a("h2"),N.innerHTML=Cn,Vt=u(),G=a("p"),G.innerHTML=_n,Nt=u(),y=a("div"),O=a("div"),O.textContent=In,A=a("div"),wt(z.$$.fragment),x=a("a"),x.textContent=Sn,it=a("pre"),Gt=new k(!1),Ot=u(),R=a("h2"),R.innerHTML=Mn,At=u(),D=a("p"),D.innerHTML=jn,zt=u(),C=a("div"),B=a("div"),B.textContent=Hn,q=a("div"),wt(Q.$$.fragment),h=a("a"),h.textContent=bn,rt=a("pre"),Rt=new k(!1),Dt=u(),U=a("h2"),U.innerHTML=Ln,Bt=u(),$=a("p"),$.innerHTML=Vn,qt=u(),F=a("ol"),F.innerHTML=Nn,Qt=u(),J=a("p"),J.textContent=Gn,Ut=u(),X=a("p"),X.innerHTML=On,$t=u(),_=a("div"),W=a("div"),W.textContent=An,K=a("div"),wt(Y.$$.fragment),v=a("a"),v.textContent=zn,kt=a("pre"),Ft=new k(!1),Jt=u(),Z=a("h2"),Z.innerHTML=Rn,Xt=u(),tt=a("p"),tt.innerHTML=Dn,Wt=u(),nt=a("ol"),nt.innerHTML=Bn,Kt=u(),I=a("div"),at=a("div"),at.textContent=qn,P=a("div"),wt(et.$$.fragment),w=a("a"),w.textContent=Qn,dt=a("pre"),Yt=new k(!1),mt=a("pre"),Zt=new k(!1),gt=a("pre"),tn=new k(!1),nn=u(),st=a("h2"),st.innerHTML=Un,an=u(),pt=a("p"),pt.innerHTML=$n,en=u(),S=a("div"),ot=a("div"),ot.textContent=Fn,E=a("div"),wt(lt.$$.fragment),T=a("a"),T.textContent=Jn,ft=a("pre"),sn=new k(!1),xt=a("pre"),pn=new k(!1),ht=a("pre"),on=new k(!1),this.h()},l(t){m=e(t,"H1",{"data-svelte-h":!0}),l(m)!=="svelte-14mv1f4"&&(m.innerHTML=hn),St=i(t),M=e(t,"P",{"data-svelte-h":!0}),l(M)!=="svelte-12o4it3"&&(M.innerHTML=vn),Mt=i(t),j=e(t,"H2",{"data-svelte-h":!0}),l(j)!=="svelte-1ukekoe"&&(j.textContent=Pn),jt=i(t),H=e(t,"P",{"data-svelte-h":!0}),l(H)!=="svelte-x0ww4i"&&(H.innerHTML=wn),Ht=i(t),g=e(t,"DIV",{class:!0});var s=r(g);b=e(s,"DIV",{class:!0,"data-svelte-h":!0}),l(b)!=="svelte-1llzxwj"&&(b.textContent=En),ct=e(s,"P",{"data-svelte-h":!0}),l(ct)!=="svelte-nxesad"&&(ct.innerHTML=Tn),L=e(s,"DIV",{});var cn=r(L);Et(V.$$.fragment,cn),f=e(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-1hihco4"&&(f.textContent=yn),ut=e(cn,"PRE",{class:!0});var Xn=r(ut);bt=d(Xn,!1),Xn.forEach(n),cn.forEach(n),s.forEach(n),Lt=i(t),N=e(t,"H2",{"data-svelte-h":!0}),l(N)!=="svelte-jbiz3m"&&(N.innerHTML=Cn),Vt=i(t),G=e(t,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1doybiv"&&(G.innerHTML=_n),Nt=i(t),y=e(t,"DIV",{class:!0});var dn=r(y);O=e(dn,"DIV",{class:!0,"data-svelte-h":!0}),l(O)!=="svelte-1llzxwj"&&(O.textContent=In),A=e(dn,"DIV",{});var un=r(A);Et(z.$$.fragment,un),x=e(un,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-70sjlo"&&(x.textContent=Sn),it=e(un,"PRE",{class:!0});var Wn=r(it);Gt=d(Wn,!1),Wn.forEach(n),un.forEach(n),dn.forEach(n),Ot=i(t),R=e(t,"H2",{"data-svelte-h":!0}),l(R)!=="svelte-k11loz"&&(R.innerHTML=Mn),At=i(t),D=e(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-hwet1b"&&(D.innerHTML=jn),zt=i(t),C=e(t,"DIV",{class:!0});var mn=r(C);B=e(mn,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1llzxwj"&&(B.textContent=Hn),q=e(mn,"DIV",{});var rn=r(q);Et(Q.$$.fragment,rn),h=e(rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-kjlckj"&&(h.textContent=bn),rt=e(rn,"PRE",{class:!0});var Kn=r(rt);Rt=d(Kn,!1),Kn.forEach(n),rn.forEach(n),mn.forEach(n),Dt=i(t),U=e(t,"H2",{"data-svelte-h":!0}),l(U)!=="svelte-1rxp84n"&&(U.innerHTML=Ln),Bt=i(t),$=e(t,"P",{"data-svelte-h":!0}),l($)!=="svelte-y54cr9"&&($.innerHTML=Vn),qt=i(t),F=e(t,"OL",{"data-svelte-h":!0}),l(F)!=="svelte-1ytvjci"&&(F.innerHTML=Nn),Qt=i(t),J=e(t,"P",{"data-svelte-h":!0}),l(J)!=="svelte-1jjmzhq"&&(J.textContent=Gn),Ut=i(t),X=e(t,"P",{"data-svelte-h":!0}),l(X)!=="svelte-1bmsalv"&&(X.innerHTML=On),$t=i(t),_=e(t,"DIV",{class:!0});var gn=r(_);W=e(gn,"DIV",{class:!0,"data-svelte-h":!0}),l(W)!=="svelte-1llzxwj"&&(W.textContent=An),K=e(gn,"DIV",{});var kn=r(K);Et(Y.$$.fragment,kn),v=e(kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-8n27m0"&&(v.textContent=zn),kt=e(kn,"PRE",{class:!0});var Yn=r(kt);Ft=d(Yn,!1),Yn.forEach(n),kn.forEach(n),gn.forEach(n),Jt=i(t),Z=e(t,"H2",{"data-svelte-h":!0}),l(Z)!=="svelte-230e0n"&&(Z.innerHTML=Rn),Xt=i(t),tt=e(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-10m0qmz"&&(tt.innerHTML=Dn),Wt=i(t),nt=e(t,"OL",{"data-svelte-h":!0}),l(nt)!=="svelte-v4b8tv"&&(nt.innerHTML=Bn),Kt=i(t),I=e(t,"DIV",{class:!0});var fn=r(I);at=e(fn,"DIV",{class:!0,"data-svelte-h":!0}),l(at)!=="svelte-1llzxwj"&&(at.textContent=qn),P=e(fn,"DIV",{});var vt=r(P);Et(et.$$.fragment,vt),w=e(vt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-1atumpi"&&(w.textContent=Qn),dt=e(vt,"PRE",{class:!0});var Zn=r(dt);Yt=d(Zn,!1),Zn.forEach(n),mt=e(vt,"PRE",{class:!0});var ta=r(mt);Zt=d(ta,!1),ta.forEach(n),gt=e(vt,"PRE",{class:!0});var na=r(gt);tn=d(na,!1),na.forEach(n),vt.forEach(n),fn.forEach(n),nn=i(t),st=e(t,"H2",{"data-svelte-h":!0}),l(st)!=="svelte-1fqwngz"&&(st.innerHTML=Un),an=i(t),pt=e(t,"P",{"data-svelte-h":!0}),l(pt)!=="svelte-jizbu0"&&(pt.innerHTML=$n),en=i(t),S=e(t,"DIV",{class:!0});var xn=r(S);ot=e(xn,"DIV",{class:!0,"data-svelte-h":!0}),l(ot)!=="svelte-1llzxwj"&&(ot.textContent=Fn),E=e(xn,"DIV",{});var Pt=r(E);Et(lt.$$.fragment,Pt),T=e(Pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-ue5ira"&&(T.textContent=Jn),ft=e(Pt,"PRE",{class:!0});var aa=r(ft);sn=d(aa,!1),aa.forEach(n),xt=e(Pt,"PRE",{class:!0});var ea=r(xt);pn=d(ea,!1),ea.forEach(n),ht=e(Pt,"PRE",{class:!0});var sa=r(ht);on=d(sa,!1),sa.forEach(n),Pt.forEach(n),xn.forEach(n),this.h()},h(){o(b,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNqVkEGLwjAQhf9KeSeFsKyKh82th0U8CIIeFCsYmqmINQ3JFJSS/26qWO3e9pK8mcy895EGylrIBnmlCRJ5qbxPFrfU2oSuTEb7JOomMxnnjhTTipXjpTrSYPjoZuyIa2eS7qHthswEBIGiKjU5D7lrcNKQIwGjLm3SYxwCVVF44g3k90tvow57ARu9eptPs/mz6AF32R10W3xQz+rTX95fw+TWcb7jFbhCjidjgVu8pz8viDVdbBlNejC9/NSf50Wq65L/AdBmf3E8BofD8P1p+3AHe9SNZw=="),o(f,"title","Open in our Online Editor"),bt.a=null,o(ut,"class","language-js"),o(g,"class","remark-container tip"),o(O,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNqVj81qwzAQhF9FmVMCorQpOVQ3H0rJoVBooAl1IMJat6aOLKQ1JBi9e+WEGLu3Xlazf7OfOmjnoDoUjSEoFLUOQbyeM+cEnZisCSLpLrc5F5400ztrz2/6i+aLSzVnT9x6K4ZGX425jYgSZVMb8gHqs0NloB4krD72ly7jkGjKMhBvoe5vepd03Eu45DXZvJqtr8kEeLg9QPfJiPqlrf7yPlsmv0nzd5zC/PDhKybxTZ5mh8XwB4kT1PJxKXFO7+rpBraho6uT8QRwwpSFn3WZmbbmf0CNeEYQcR9/AdUWlFs="),o(x,"title","Open in our Online Editor"),Gt.a=null,o(it,"class","language-js"),o(y,"class","remark-container tip"),o(B,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNqVjzFrwzAQhf+KeJMDorQpHarNQykZCoVmaKkDFta5DXVkIZ0hwei/V1aIibt1kd493b37NEI7BzWi6Q1Boel0COLlVDon6MhkTRBJj5WtuPGkmd5Ye37VX1SssluxJx68FfPD5MbKRkSJtu8M+QD1OWJvoO4krD5Mm3I7JPq2DcTvULcX/ZF03Em4lLWYPIdtzsUCeN49Q0/FFfXzsP/L+2SZ/Db137hON/Sdw4s622KCrFfzTySOUOv7tcQp3Q+PF7wtHdIwLzEXZGX42bSlGTr+B1qm4nQU9RVE3MVfoDuW6A=="),o(h,"title","Open in our Online Editor"),Rt.a=null,o(rt,"class","language-js"),o(C,"class","remark-container tip"),o(W,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNq1lN1u0zAUx1/F8g2JZCraJirLDepQVfWCMUERTGRSvMRpozl2sI/HuirXvArPxZPgJCRtGFRDCnc+x+fr57/tPaZFgYM9jmXCcIBjTrVGb3bzokDsHphINLLrfShCiBWjwN4DVXBJN8xxa28IioFRAnUblbcMRYlLglPJE6Y0Dj7vcZbgYEywoHnVqQ7HBMs01Qw+4eD5tDWurDHzymuCC1uul9zUWzVGb+aufTd3ZRwNvjTZ7yO/k1/1KN5mPFFMOM1WCGtbYKSzB+aM3RFYw4k+brN4izKNdtIolNI7qTJgqEJ5FbmkzXwtucnFH0qGsBDAVFX54Aq7Lj1fxexcSJVTfmHrVxSPA1bp4ouh3Ikuma0bEXTOqIEsNU/JWVK1sVHcpn3Y8N0TMmzkIi/gEEoOsecGQIpfB/Xj2/ej82hXbnclCL7HwWQ8IXiHA8/3StJIOzklbf8whtG3GXe9pfBMIyGRLlicUV5LOjpC6NEtJbqh8W3kNiJ1V+4vnN6ZX3OOvZct5/QU5yMNh0R9uyUIGlyK7pjaoZu2XQ2NAncg7NmLRt7J9KzF9k5hH9/B/0QsJLTUIovZoCrPpuMa1/f8Ftc/hdt7SEPyXkmDcqMBseqvsbw15WgoTn9yVnPOZtP2a16zvOB22t4X3YOd69tVOk8Mh38gPWKKDkOU1+VPJGBbxQ=="),o(v,"title","Open in our Online Editor"),Ft.a=null,o(kt,"class","language-js"),o(_,"class","remark-container tip"),o(at,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqtUtFq20AQ/JXrUogEh6hdQrEgFLuENA+FkCakpQrokNa2sHwn7lbYjrjn/Eq+K1+Su8qSrRAChT4I7e5pZmdG14CoKogbyFSOEENWCmPYj920qhhuCWVumKubRCbkHynWyM5YeitXUm1k2s0zjYLwJwlNV2KBQdgiSCPVWrL+wE9tC7JgOcxVmaM2EP9poMghHnHwK5ySvxDgoOZzg/QL4k9d/dvV9p5D5fgGyJbssm0Ghvr9vSnfNAflF3XxWvO12pgoWxZlrlEG7VFCN44gMsUDBqMwItcE6d1S0IlhO1Vr5sV/TUPeff5NlfVavsGT0Lkk1AM6Q0pjIDhLPU0aRt5hcKERqZALr/hAnNCsJlJyr+H58eloa9gW4T5t62LcQjz+POawc+/TieVtaOP3Qjte/H9ya7V+x7JUnH1sROR92g9HygemZiJbMVKHv9dF0g864Cunp18me6f9RbnBdVU6wYMLM7A7NavL+TSvS/oHs0e20oMIe29fAJDDL8M="),o(w,"title","Open in our Online Editor"),Yt.a=null,o(dt,"class","language-js"),Zt.a=null,o(mt,"class","language-js"),tn.a=null,o(gt,"class","language-js"),o(I,"class","remark-container tip"),o(ot,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqdUtFq3DAQ/BV1KdQGYZorocRQwiWUNA8tpU1oSx2wsPdy5nSSkNYkV+Pn/Eq/q19SObJ9dlIC6YPxSqudndnZBoQxkDZQ6BIhhUIK59jH3dIYhreEqnTMx02mMuo+JbbI3rH8Um2UvlH5cF9YFIRfSVj6LK4xikMFWaTaKjYmuts2FLXQclhpWaJ1kP5soCohPeDQtfBM7kuAg16tHNJ3SF8P8Q8ft1ccjMebVQaw83CYCRr7j6K6QzNnf1ZXD3l/0TcuKdaVLC2qKKQyuvAgiat+YXQQJ+QPUf5tLeiVYztdW9YJOM5jPjw/1bLeqn/gZPReEdoZ3FqoUqKNTB/dv8Dyk8eMk05xdGYRqVLXnYJ9k4xOaiKtej5/7n5PGMQhiCfTz+gRfoSTXv0cRNI7PsklpC+NQXsqnDd65iiHW0gXbxYcdv5/eNTyYM7iKXOmgh778z/ehBl8QCk1Zy+bIKJ9MZnIbFgnotgw0vstyftRjxdD4aC2V3r49qhXOi7kBW6N9IRnizmTu3Sb89WyrCU9Q+xEVr4n0V61fwHZJFeI"),o(T,"title","Open in our Online Editor"),sn.a=null,o(ft,"class","language-js"),pn.a=null,o(xt,"class","language-js"),on.a=null,o(ht,"class","language-js"),o(S,"class","remark-container tip")},m(t,s){p(t,m,s),p(t,St,s),p(t,M,s),p(t,Mt,s),p(t,j,s),p(t,jt,s),p(t,H,s),p(t,Ht,s),p(t,g,s),c(g,b),c(g,ct),c(g,L),Tt(V,L,null),c(L,f),c(L,ut),bt.m(oa,ut),p(t,Lt,s),p(t,N,s),p(t,Vt,s),p(t,G,s),p(t,Nt,s),p(t,y,s),c(y,O),c(y,A),Tt(z,A,null),c(A,x),c(A,it),Gt.m(la,it),p(t,Ot,s),p(t,R,s),p(t,At,s),p(t,D,s),p(t,zt,s),p(t,C,s),c(C,B),c(C,q),Tt(Q,q,null),c(q,h),c(q,rt),Rt.m(ca,rt),p(t,Dt,s),p(t,U,s),p(t,Bt,s),p(t,$,s),p(t,qt,s),p(t,F,s),p(t,Qt,s),p(t,J,s),p(t,Ut,s),p(t,X,s),p(t,$t,s),p(t,_,s),c(_,W),c(_,K),Tt(Y,K,null),c(K,v),c(K,kt),Ft.m(ua,kt),p(t,Jt,s),p(t,Z,s),p(t,Xt,s),p(t,tt,s),p(t,Wt,s),p(t,nt,s),p(t,Kt,s),p(t,I,s),c(I,at),c(I,P),Tt(et,P,null),c(P,w),c(P,dt),Yt.m(ia,dt),c(P,mt),Zt.m(ra,mt),c(P,gt),tn.m(ka,gt),p(t,nn,s),p(t,st,s),p(t,an,s),p(t,pt,s),p(t,en,s),p(t,S,s),c(S,ot),c(S,E),Tt(lt,E,null),c(E,T),c(E,ft),sn.m(da,ft),c(E,xt),pn.m(ma,xt),c(E,ht),on.m(ga,ht),ln=!0},p:xa,i(t){ln||(yt(V.$$.fragment,t),yt(z.$$.fragment,t),yt(Q.$$.fragment,t),yt(Y.$$.fragment,t),yt(et.$$.fragment,t),yt(lt.$$.fragment,t),ln=!0)},o(t){Ct(V.$$.fragment,t),Ct(z.$$.fragment,t),Ct(Q.$$.fragment,t),Ct(Y.$$.fragment,t),Ct(et.$$.fragment,t),Ct(lt.$$.fragment,t),ln=!1},d(t){t&&(n(m),n(St),n(M),n(Mt),n(j),n(jt),n(H),n(Ht),n(g),n(Lt),n(N),n(Vt),n(G),n(Nt),n(y),n(Ot),n(R),n(At),n(D),n(zt),n(C),n(Dt),n(U),n(Bt),n($),n(qt),n(F),n(Qt),n(J),n(Ut),n(X),n($t),n(_),n(Jt),n(Z),n(Xt),n(tt),n(Wt),n(nt),n(Kt),n(I),n(nn),n(st),n(an),n(pt),n(en),n(S)),_t(V),_t(z),_t(Q),_t(Y),_t(et),_t(lt)}}}class ya extends ha{constructor(m){super(),va(this,m,null,Pa,fa,{})}}export{ya as component};
