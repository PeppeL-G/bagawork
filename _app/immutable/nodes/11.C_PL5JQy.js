import{s as ee,n as ae}from"../chunks/scheduler.B0TnBjPs.js";import{S as se,i as pe,e as s,s as l,c as an,H as sn,a as p,g as c,b as u,d as r,f as pn,h as t,n as on,o,j as a,p as i,m as cn,t as ln,k as un,l as rn}from"../chunks/index.BXVnRmkj.js";import{V as kn}from"../chunks/ViewApp.qg7AIhJt.js";function oe(Ft){let v,ct="<code>Button</code>",Mn,H,lt="On this page you find the documentation for the GUI Component <code>Button</code>.",En,b,ut='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>Button</code> component. The <code>Button</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',Ln,M,it="Introduction",Sn,E,rt="The <code>Button</code> component is a view that displays some text to the user shown as a button, and which the user can click on. Clicking on the <code>Button</code> takes the user to the next page in the app.",On,m,L,kt="Example",dn,dt="Example showing what the <code>Button</code> component looks like when shown on the screen.",S,mn,mt="Note: In this example, the <code>Button</code> covers the entire screen (which usually isn&#39;t the case), and clicking on it just reloads the same page, so nothing should happen when you click on the <code>Button</code> in this example.",jn,O,ht="<code>text()</code> - Setting the text",In,j,gt="Use the configuration method <code>text()</code> to tell the <code>Button</code> component which text it should display. Pass the text as a string. The text will always be centered in the <code>Button</code>.",$n,h,I,ft="Example",$,C,xt="Open in Online Editor",hn,An,Kt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dn,A,vt="<code>textWithBBCode()</code> - Setting styled text",Gn,D,Ct='Use the configuration method <code>textWithBBCode()</code> to tell the <code>Text</code> component which text it should show on the screen and that also can be styled with <a href="/documentation/bbcode/" title="Open the documentation for bbcode.">bbcode</a> tags. Pass the text as a string. The text will always be centered in the <code>Button</code>.',Nn,g,G,wt="Example",N,w,_t="Open in Online Editor",gn,Vn,Jt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">textWithBBCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me [b][u]now[/u][/b]!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,zn,V,Pt="<code>page()</code> - Going to another page",qn,z,yt="Use the configuration method <code>page()</code> to tell the <code>Button</code> component which page the user should come to when clicking on the button. Pass the page as an argument.",Rn,q,Tt="If this method is not used, the current page will be reloaded when the user clicks on the button.",Wn,k,R,bt="Example",W,_,Bt="Open in Online Editor",fn,Un,Qt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go there</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DestinationPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,xn,Yn,Zt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DestinationPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to the DestinationPage!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Fn,U,Ht="<code>onClick()</code> - Handling clicks",Kn,Y,Mt="Use the configuration method <code>onClick()</code> to tell the <code>Button</code> component which method to call when the user clicks on it. Pass the configuration method a reference to the method (e.g. <code>a.theMethodName</code> or <code>p.theMethodName</code>, depending on what you have named your method and if you wrote it in your <code>App</code> class or <code>Page</code> class).",Jn,f,F,Et="Example",K,P,Lt="Open in Online Editor",vn,Qn,Xt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfButtonClicks <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have clicked the button </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfButtonClicks<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementNumberOfButtonClicks<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementNumberOfButtonClicks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>numberOfButtonClicks <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,J,St="You can also pass <code>onClick()</code> additional arguments, which then will be passed to your method when the button is clicked.",Xn,x,Q,Ot="Example",Z,y,jt="Open in Online Editor",Cn,nt,ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Counter is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>changeCounter<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>changeCounter<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+5</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>changeCounter<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">changeCounter</span><span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> amount
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tt,X,It="<code>stay()</code> - Not changing page",et,nn,$t='Use the configuration method <code>stay()</code> to tell the <code>Button</code> component to not go to the next page when the user clicks it. This is primarily useful when you use the <a href="/documentation/updater/" title="Open the documentation for Updater.">Updater</a> component together with the configuration method <code>.onClick()</code> on the <code>Button</code>.',at,B,At='<div class="remark-container__title">Warning!</div><p>Triggering manual updates of the GUI like this with the <code>Updater</code> component tends to make your code hard to read and hard to understand how it works. If you can achieve the same functionality by loading the page anew, that is usually better than triggering your own manual updates like this.</p>',st,d,tn,Dt="Example",wn,Gt="In this example, when clicking on the second <code>Button</code>, the counter will be incremented from <code>1</code> to <code>2</code>, but since the default behavior when clicking on a <code>Button</code> is to go to the next page, the page will directly after that be reloaded, and <code>p.counter</code> will be set to <code>1</code> in <code>onBefore()</code>.",en,T,Nt="Open in Online Editor",_n,pt,te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Updater<span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingCounter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment and stay</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The counter is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ot;return S=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.text(\`Click me!\`)\r
	}\r
}`,x:150,y:200}]}}}),$=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.text(\`Click me!\`)\r
	}\r
}`,x:150,y:200}]}}}),N=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.textWithBBCode(\`Click me [b][u]now[/u][/b]!\`)\r
	}\r
}`,x:150,y:200}]}}}),W=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.text(\`Go there\`).page(DestinationPage)\r
	}\r
}`,x:150,y:200},{id:2,folderId:1,code:`class DestinationPage extends Page{\r
	createGui(){\r
		return Rows.children(\r
			Text.text(\`Welcome to the DestinationPage!\`),\r
			Button.text(\`Back to StartPage\`).page(StartPage),\r
		)\r
	}\r
}`,x:450,y:200}]}}}),K=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	numberOfButtonClicks = 0\r
	\r
	createGui(){\r
		return Rows.children(\r
			Text.text(\`You have clicked the button \${p.numberOfButtonClicks} times.\`),\r
			Button.text(\`Click me!\`).onClick(p.incrementNumberOfButtonClicks),\r
		)\r
	}\r
	\r
	incrementNumberOfButtonClicks(){\r
		p.numberOfButtonClicks += 1\r
	}\r
	\r
}`,x:150,y:200}]}}}),Z=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	counter = 0\r
	\r
	createGui(){\r
		return Rows.children(\r
			Text.text(\`Counter is \${p.counter}.\`),\r
			Button.text(\`-1\`).onClick(p.changeCounter, -1),\r
			Button.text(\`+1\`).onClick(p.changeCounter, 1),\r
			Button.text(\`+5\`).onClick(p.changeCounter, 5),\r
		)\r
	}\r
	\r
	changeCounter(amount){\r
		p.counter += amount\r
	}\r
	\r
}`,x:150,y:200}]}}}),en=new kn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	counter = 0\r
	\r
	onBefore(){\r
		p.counter = 1\r
	}\r
	\r
	createGui(){\r
		\r
		return Rows.children(\r
			Updater.childCreator(p.createTextShowingCounter).name(\`refresh\`),\r
			Button.onClick(p.incrementCounter).text(\`Increment and stay\`).stay(),\r
			Button.onClick(p.incrementCounter).text(\`Increment\`),\r
		)\r
		\r
	}\r
	\r
	createTextShowingCounter(){\r
		return Text.text(\`The counter is \${p.counter}.\`)\r
	}\r
	\r
	incrementCounter(){\r
		p.counter += 1\r
		runUpdater(\`refresh\`)\r
	}\r
	\r
}`,x:150,y:200}]}}}),{c(){v=s("h1"),v.innerHTML=ct,Mn=l(),H=s("p"),H.innerHTML=lt,En=l(),b=s("div"),b.innerHTML=ut,Ln=l(),M=s("h2"),M.textContent=it,Sn=l(),E=s("p"),E.innerHTML=rt,On=l(),m=s("div"),L=s("div"),L.textContent=kt,dn=s("p"),dn.innerHTML=dt,an(S.$$.fragment),mn=s("p"),mn.innerHTML=mt,jn=l(),O=s("h2"),O.innerHTML=ht,In=l(),j=s("p"),j.innerHTML=gt,$n=l(),h=s("div"),I=s("div"),I.textContent=ft,an($.$$.fragment),C=s("a"),C.textContent=xt,hn=s("pre"),An=new sn(!1),Dn=l(),A=s("h2"),A.innerHTML=vt,Gn=l(),D=s("p"),D.innerHTML=Ct,Nn=l(),g=s("div"),G=s("div"),G.textContent=wt,an(N.$$.fragment),w=s("a"),w.textContent=_t,gn=s("pre"),Vn=new sn(!1),zn=l(),V=s("h2"),V.innerHTML=Pt,qn=l(),z=s("p"),z.innerHTML=yt,Rn=l(),q=s("p"),q.textContent=Tt,Wn=l(),k=s("div"),R=s("div"),R.textContent=bt,an(W.$$.fragment),_=s("a"),_.textContent=Bt,fn=s("pre"),Un=new sn(!1),xn=s("pre"),Yn=new sn(!1),Fn=l(),U=s("h2"),U.innerHTML=Ht,Kn=l(),Y=s("p"),Y.innerHTML=Mt,Jn=l(),f=s("div"),F=s("div"),F.textContent=Et,an(K.$$.fragment),P=s("a"),P.textContent=Lt,vn=s("pre"),Qn=new sn(!1),Zn=l(),J=s("p"),J.innerHTML=St,Xn=l(),x=s("div"),Q=s("div"),Q.textContent=Ot,an(Z.$$.fragment),y=s("a"),y.textContent=jt,Cn=s("pre"),nt=new sn(!1),tt=l(),X=s("h2"),X.innerHTML=It,et=l(),nn=s("p"),nn.innerHTML=$t,at=l(),B=s("div"),B.innerHTML=At,st=l(),d=s("div"),tn=s("div"),tn.textContent=Dt,wn=s("p"),wn.innerHTML=Gt,an(en.$$.fragment),T=s("a"),T.textContent=Nt,_n=s("pre"),pt=new sn(!1),this.h()},l(n){v=p(n,"H1",{"data-svelte-h":!0}),c(v)!=="svelte-tstzrx"&&(v.innerHTML=ct),Mn=u(n),H=p(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-ockzce"&&(H.innerHTML=lt),En=u(n),b=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(b)!=="svelte-1bqylov"&&(b.innerHTML=ut),Ln=u(n),M=p(n,"H2",{"data-svelte-h":!0}),c(M)!=="svelte-1ukekoe"&&(M.textContent=it),Sn=u(n),E=p(n,"P",{"data-svelte-h":!0}),c(E)!=="svelte-o04yvq"&&(E.innerHTML=rt),On=u(n),m=p(n,"DIV",{class:!0});var e=r(m);L=p(e,"DIV",{class:!0,"data-svelte-h":!0}),c(L)!=="svelte-1llzxwj"&&(L.textContent=kt),dn=p(e,"P",{"data-svelte-h":!0}),c(dn)!=="svelte-br8hp0"&&(dn.innerHTML=dt),pn(S.$$.fragment,e),mn=p(e,"P",{"data-svelte-h":!0}),c(mn)!=="svelte-14piziw"&&(mn.innerHTML=mt),e.forEach(t),jn=u(n),O=p(n,"H2",{"data-svelte-h":!0}),c(O)!=="svelte-ya3cfe"&&(O.innerHTML=ht),In=u(n),j=p(n,"P",{"data-svelte-h":!0}),c(j)!=="svelte-p48zi3"&&(j.innerHTML=gt),$n=u(n),h=p(n,"DIV",{class:!0});var Tn=r(h);I=p(Tn,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-1llzxwj"&&(I.textContent=ft),pn($.$$.fragment,Tn),C=p(Tn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-12a18qg"&&(C.textContent=xt),hn=p(Tn,"PRE",{class:!0});var Vt=r(hn);An=on(Vt,!1),Vt.forEach(t),Tn.forEach(t),Dn=u(n),A=p(n,"H2",{"data-svelte-h":!0}),c(A)!=="svelte-1x76r8b"&&(A.innerHTML=vt),Gn=u(n),D=p(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-66nhd2"&&(D.innerHTML=Ct),Nn=u(n),g=p(n,"DIV",{class:!0});var bn=r(g);G=p(bn,"DIV",{class:!0,"data-svelte-h":!0}),c(G)!=="svelte-1llzxwj"&&(G.textContent=wt),pn(N.$$.fragment,bn),w=p(bn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-yhlu5w"&&(w.textContent=_t),gn=p(bn,"PRE",{class:!0});var zt=r(gn);Vn=on(zt,!1),zt.forEach(t),bn.forEach(t),zn=u(n),V=p(n,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-wf1y9l"&&(V.innerHTML=Pt),qn=u(n),z=p(n,"P",{"data-svelte-h":!0}),c(z)!=="svelte-zqnbm2"&&(z.innerHTML=yt),Rn=u(n),q=p(n,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1691dfl"&&(q.textContent=Tt),Wn=u(n),k=p(n,"DIV",{class:!0});var Pn=r(k);R=p(Pn,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1llzxwj"&&(R.textContent=bt),pn(W.$$.fragment,Pn),_=p(Pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1gfrhaj"&&(_.textContent=Bt),fn=p(Pn,"PRE",{class:!0});var qt=r(fn);Un=on(qt,!1),qt.forEach(t),xn=p(Pn,"PRE",{class:!0});var Rt=r(xn);Yn=on(Rt,!1),Rt.forEach(t),Pn.forEach(t),Fn=u(n),U=p(n,"H2",{"data-svelte-h":!0}),c(U)!=="svelte-iimgs0"&&(U.innerHTML=Ht),Kn=u(n),Y=p(n,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-3t17yp"&&(Y.innerHTML=Mt),Jn=u(n),f=p(n,"DIV",{class:!0});var Bn=r(f);F=p(Bn,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-1llzxwj"&&(F.textContent=Et),pn(K.$$.fragment,Bn),P=p(Bn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-1p3un4h"&&(P.textContent=Lt),vn=p(Bn,"PRE",{class:!0});var Wt=r(vn);Qn=on(Wt,!1),Wt.forEach(t),Bn.forEach(t),Zn=u(n),J=p(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-ik0ju9"&&(J.innerHTML=St),Xn=u(n),x=p(n,"DIV",{class:!0});var Hn=r(x);Q=p(Hn,"DIV",{class:!0,"data-svelte-h":!0}),c(Q)!=="svelte-1llzxwj"&&(Q.textContent=Ot),pn(Z.$$.fragment,Hn),y=p(Hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-1623l1q"&&(y.textContent=jt),Cn=p(Hn,"PRE",{class:!0});var Ut=r(Cn);nt=on(Ut,!1),Ut.forEach(t),Hn.forEach(t),tt=u(n),X=p(n,"H2",{"data-svelte-h":!0}),c(X)!=="svelte-11aup1n"&&(X.innerHTML=It),et=u(n),nn=p(n,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-12qnmso"&&(nn.innerHTML=$t),at=u(n),B=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(B)!=="svelte-dz5lbm"&&(B.innerHTML=At),st=u(n),d=p(n,"DIV",{class:!0});var yn=r(d);tn=p(yn,"DIV",{class:!0,"data-svelte-h":!0}),c(tn)!=="svelte-1llzxwj"&&(tn.textContent=Dt),wn=p(yn,"P",{"data-svelte-h":!0}),c(wn)!=="svelte-1bcrozm"&&(wn.innerHTML=Gt),pn(en.$$.fragment,yn),T=p(yn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-o2fbfi"&&(T.textContent=Nt),_n=p(yn,"PRE",{class:!0});var Yt=r(_n);pt=on(Yt,!1),Yt.forEach(t),yn.forEach(t),this.h()},h(){o(b,"class","remark-container tip"),o(L,"class","remark-container__title"),o(m,"class","remark-container tip"),o(I,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNpVjcEKwjAMhl+l5rRBkSl46U09iAdB8GiFlTbKcHaly2Cj9N1dHUx2Sr4/+fkCKOdABNCNQRCga9W27DLsnWPYE1rTsnEP0krSHhXhjZSnq3phlv9SSR6p85bNh5RGaSNEDm7kFsQ9QGVAbDg8m9qgP0+wkM79WZwgSP93n7oqWf3Ce+iIGrumsZWVx7rSb/bBVZlPbzGNCBz60bgrOAwgtkURH/ELOCtYhQ=="),o(C,"title","Open in our Online Editor"),An.a=null,o(hn,"class","language-js"),o(h,"class","remark-container tip"),o(G,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNpVjkGLwjAQhf9Kdk4WitaFveRmexAPCwse9pAEjO2oxZqGdMJWQv77pgoVTzPvDe99E0BbCzxA3TcIHOpODwP7vm+sZTgSmmZgaQ/SSKodasI9aUc/+oyL7OFKckjeGTYfJjdKEyHmYJMegIsAbQN8ncOp7xp0u6d4g875GTyJIN2LvfXtRHVv3NIT9WZJKfXb0qUsq9S6OFRdW1/ZDZk4KuGV6f/EyiuxOqqPQ/asiNOIkMOYvvkqcrgD/yyKqOI/sNNigA=="),o(w,"title","Open in our Online Editor"),Vn.a=null,o(gn,"class","language-js"),o(g,"class","remark-container tip"),o(R,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqVkEFLxDAQhf9KnFMLodRFL7m5CIsHQVTwYISGdHSLNSnJFHcp+e8mW7e1iwiekpnhzffmDaC6DsQA2tYIAnSrvGe3+6uuY7gjNLVn8T9II0k7VIQPpBzdqTfM8kNXkkPqnWHTIHWDNAEChy7WHsTzAE0N4pzDq21rdDdjsYBO+gmcikG6mb3pm0R1C+66J7KmoKjKqo1ltEWHVV4kdHaNnhqjqLEmbctHbUhPAA67aOOy5LAHsSrLwEebq79snmz8p9l7++kLvW3a2qHJjkNJj3HN9wlP2Gr7gYwOp5zyzqqcz7LF7Wul35NqCvIYwtSYpb8EcfEjiJfwBTr4vsw="),o(_,"title","Open in our Online Editor"),Un.a=null,o(fn,"class","language-js"),Yn.a=null,o(xn,"class","language-js"),o(k,"class","remark-container tip"),o(F,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNp9UU1Lw0AQ/Svj4CHBEFLBS6AH9SAe/EC9iBGyTaZmMdksuxNtCfvfzUdNWwxehnnz8d4bpkWhNcYtZnVOGGNWCmvhbnupNdCGSeUWurxNVMKZIcH0zMLwo/ggzx+qCRvixiiYGn3VJcqhC1B32GL81qLMMV4EuK7LnMztCI5Ep/1JuAdtYgaVIaqmWpF5WF81zLW6LmX2aWEJ0eHM6PKmkb0/c+Twqf62YVbIMjekvN9mwi+dYMhd8NLXuoFCfBFkPTnlwAXBapCD01aHcw4csKzIhqkf7DnHgR3rMAcVnaR+uNvydChV57UixfczpHsuf0zc4ZH/rh4cPm8Yzpaw+MPqMMBN95aLKMAtxudR5N7dD04ax54="),o(P,"title","Open in our Online Editor"),Qn.a=null,o(vn,"class","language-js"),o(f,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNp9kU1LxDAQhv9KGDy0bLa0Qi+FPegexIMg6s0IDWncLdY0JFPcJeS/m37YtYi9DPP1zDuZOOBaQ+FAtJWEAkTDrSUP5xutiTyhVJUlwXdMMRRGcpTPyA0+8oOM4iHL0EjsjCJzoc96pjx4CjrEFopXB3UFRUbhvW0qae7HYCE687NwHzhmBpXBirZTKA3ZkXSRHha76+p+JbNY6qn9sok41k1lpIp+igxfgkaCwUTlfhpaW3LldDJp+KSM6aX/tkNs1URsszJOWrVvavERBeLI1UFOYyjZZv+Cm1VwhcvXuPzCxaPjF9f53R3xz9653Gl+MNnsyFj8M8MDhVP4sDylcIbiOk39m/8GBVjNgg=="),o(y,"title","Open in our Online Editor"),nt.a=null,o(Cn,"class","language-js"),o(x,"class","remark-container tip"),o(B,"class","remark-container warning"),o(tn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqlUstqwzAQ/BWx9GBTY5xCL4YemhxKDoXSpKe6YGFtYlFHEpJMEoz+vfIjjvO49WJ5R7szs7tqgCoFaQOFZAgpFBU1hrwfX5UieLAomCH+v8lEZguN1OLKUm0/6BaDsEMzq9HWWpDxokVdJhy4CJSPDaTfDXAG6SyCjawY6mUfXIiO9aNwGzSZ7lS6byFrYVGTF5JMYSnmuJG6c9TDVsXn3FkPugumrpe3mk9qTufQz6fcm7goecU0imBMsl+K+VLdXy1aHqkDr9cxrr33VSn3XGwXvYEwFnSHQa5xo9GUeRidqea19eZjKRYVL349CReeZofCjsXWEwb58oQTKhgxlh7zMG6P4H90Ezfh5RjuTOu2t8nwhqG1OYPIukRyWgI35KEZd+LiPLyjcu327jofx316zVoMy5iM94bYQQQH/9yekwiOkD4liftxf+JcGv8="),o(T,"title","Open in our Online Editor"),pt.a=null,o(_n,"class","language-js"),o(d,"class","remark-container tip")},m(n,e){a(n,v,e),a(n,Mn,e),a(n,H,e),a(n,En,e),a(n,b,e),a(n,Ln,e),a(n,M,e),a(n,Sn,e),a(n,E,e),a(n,On,e),a(n,m,e),i(m,L),i(m,dn),cn(S,m,null),i(m,mn),a(n,jn,e),a(n,O,e),a(n,In,e),a(n,j,e),a(n,$n,e),a(n,h,e),i(h,I),cn($,h,null),i(h,C),i(h,hn),An.m(Kt,hn),a(n,Dn,e),a(n,A,e),a(n,Gn,e),a(n,D,e),a(n,Nn,e),a(n,g,e),i(g,G),cn(N,g,null),i(g,w),i(g,gn),Vn.m(Jt,gn),a(n,zn,e),a(n,V,e),a(n,qn,e),a(n,z,e),a(n,Rn,e),a(n,q,e),a(n,Wn,e),a(n,k,e),i(k,R),cn(W,k,null),i(k,_),i(k,fn),Un.m(Qt,fn),i(k,xn),Yn.m(Zt,xn),a(n,Fn,e),a(n,U,e),a(n,Kn,e),a(n,Y,e),a(n,Jn,e),a(n,f,e),i(f,F),cn(K,f,null),i(f,P),i(f,vn),Qn.m(Xt,vn),a(n,Zn,e),a(n,J,e),a(n,Xn,e),a(n,x,e),i(x,Q),cn(Z,x,null),i(x,y),i(x,Cn),nt.m(ne,Cn),a(n,tt,e),a(n,X,e),a(n,et,e),a(n,nn,e),a(n,at,e),a(n,B,e),a(n,st,e),a(n,d,e),i(d,tn),i(d,wn),cn(en,d,null),i(d,T),i(d,_n),pt.m(te,_n),ot=!0},p:ae,i(n){ot||(ln(S.$$.fragment,n),ln($.$$.fragment,n),ln(N.$$.fragment,n),ln(W.$$.fragment,n),ln(K.$$.fragment,n),ln(Z.$$.fragment,n),ln(en.$$.fragment,n),ot=!0)},o(n){un(S.$$.fragment,n),un($.$$.fragment,n),un(N.$$.fragment,n),un(W.$$.fragment,n),un(K.$$.fragment,n),un(Z.$$.fragment,n),un(en.$$.fragment,n),ot=!1},d(n){n&&(t(v),t(Mn),t(H),t(En),t(b),t(Ln),t(M),t(Sn),t(E),t(On),t(m),t(jn),t(O),t(In),t(j),t($n),t(h),t(Dn),t(A),t(Gn),t(D),t(Nn),t(g),t(zn),t(V),t(qn),t(z),t(Rn),t(q),t(Wn),t(k),t(Fn),t(U),t(Kn),t(Y),t(Jn),t(f),t(Zn),t(J),t(Xn),t(x),t(tt),t(X),t(et),t(nn),t(at),t(B),t(st),t(d)),rn(S),rn($),rn(N),rn(W),rn(K),rn(Z),rn(en)}}}class ie extends se{constructor(v){super(),pe(this,v,null,oe,ee,{})}}export{ie as component};
