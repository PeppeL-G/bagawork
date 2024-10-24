import{s as Ot,n as $t}from"../chunks/scheduler.B0TnBjPs.js";import{S as It,i as At,e as s,s as l,c as cn,H as ln,a as e,g as c,b as u,d as r,f as un,h as t,n as rn,o,j as p,p as i,m as kn,t as dn,k as mn,l as hn}from"../chunks/index.Cnh3HYw3.js";import{V as gn}from"../chunks/ViewApp.9sx5twVU.js";function Gt(Tt){let x,Yn="<code>Button</code>",Cn,b,Jn="On this page you find the documentation for the GUI Component <code>Button</code>.",wn,B,Kn="Introduction",Pn,H,Fn="The <code>Button</code> component is a view that displays some text to the user shown as a button, and which the user can click on. Clicking on the <code>Button</code> takes the user to the next page in the app.",_n,m,T,Zn="Example",F,Qn="Example showing what the <code>Button</code> component looks like when shown on the screen.",E,Z,Xn="Note: In this example, the button covers the entire screen (which usually isn't the case), and clicking on it just reloads the same page, so nothing should happen when you click on the button in this example.",yn,M,nt="<code>text()</code> - Setting the text",bn,L,tt="Use the configuration method <code>text()</code> to tell the <code>Button</code> component which text it should display. Pass the text as a string. The text will always be centered in the <code>Button</code>.",Bn,h,S,at="Example",j,v,st="Open in Online Editor",Q,Hn,Et=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Click me!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Tn,N,et="<code>page()</code> - Going to another page",En,O,pt="Use the configuration method <code>page()</code> to tell the <code>Button</code> component which page the user should come to when clicking on the button. Pass the page as an argument.",Mn,$,ot="If this method is not used, then the current page will be reloaded when the user clicks on the button.",Ln,k,I,ct="Example",A,C,lt="Open in Online Editor",X,Sn,Mt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go there</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DestinationPage<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,nn,jn,Lt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DestinationPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to the DestinationPage!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Nn,G,ut="<code>stay()</code> - Not changing page",On,D,it='Use the configuration method <code>stay()</code> to tell the <code>Button</code> component to not go to the next page when the button is clicked. This is primarily useful when you use the <a href="/documentation/updater/" title="Open the documentation for Updater.">Updater</a> component together with the configuration method <code>.onClick()</code> on the button.',$n,y,rt='<div class="remark-container__title">Warning!</div><p>Triggering manual updates of the GUI like this tends to make your code hard to read and hard to understand how it works. If you can achieve the same result by loading the page anew, that is usually better than triggering your own manual updates.</p>',In,d,V,kt="Example",tn,dt="In this example, when clicking on the second <code>Button</code>, the counter will be incremented from <code>1</code> to <code>2</code>, but since the default behavior when clicking on a <code>Button</code> is to go to the next page, the page is directly after that reloaded, and <code>p.counter</code> is set to <code>1</code> in <code>onBefore()</code>.",z,w,mt="Open in Online Editor",an,An,St=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Updater<span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createTextShowingCounter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment and stay</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createTextShowingCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The counter is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Gn,q,ht="<code>onClick()</code> - Handling clicks",Dn,R,gt="Use the configuration method <code>onClick()</code> to tell the <code>Button</code> component which method to call when the user clicks on the button. Pass it a reference to the method (e.g. <code>a.theMethodName</code> or <code>p.theMethodName</code>, depending on what you have named your method and if you wrote it in your <code>App</code> class or <code>Page</code> class).",Vn,g,U,ft="Example",W,P,xt="Open in Online Editor",sn,zn,jt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,qn,Y,vt="You can also pass <code>onClick()</code> additional arguments, which then will be passed to your method when the button is clicked.",Rn,f,J,Ct="Example",K,_,wt="Open in Online Editor",en,Un,Nt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Wn;return E=new gn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.text(\`Click me!\`)\r
	}\r
}`,x:150,y:200}]}}}),j=new gn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	createGui(){\r
		return Button.text(\`Click me!\`)\r
	}\r
}`,x:150,y:200}]}}}),A=new gn({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:450,y:200}]}}}),z=new gn({props:{project:{app:{code:`class MyApp extends App{
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
			Button.text(\`Increment and stay\`).stay().onClick(p.incrementCounter),\r
			Button.text(\`Increment\`).onClick(p.incrementCounter),\r
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
}`,x:150,y:200}]}}}),W=new gn({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:150,y:200}]}}}),K=new gn({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:150,y:200}]}}}),{c(){x=s("h1"),x.innerHTML=Yn,Cn=l(),b=s("p"),b.innerHTML=Jn,wn=l(),B=s("h2"),B.textContent=Kn,Pn=l(),H=s("p"),H.innerHTML=Fn,_n=l(),m=s("div"),T=s("div"),T.textContent=Zn,F=s("p"),F.innerHTML=Qn,cn(E.$$.fragment),Z=s("p"),Z.textContent=Xn,yn=l(),M=s("h2"),M.innerHTML=nt,bn=l(),L=s("p"),L.innerHTML=tt,Bn=l(),h=s("div"),S=s("div"),S.textContent=at,cn(j.$$.fragment),v=s("a"),v.textContent=st,Q=s("pre"),Hn=new ln(!1),Tn=l(),N=s("h2"),N.innerHTML=et,En=l(),O=s("p"),O.innerHTML=pt,Mn=l(),$=s("p"),$.textContent=ot,Ln=l(),k=s("div"),I=s("div"),I.textContent=ct,cn(A.$$.fragment),C=s("a"),C.textContent=lt,X=s("pre"),Sn=new ln(!1),nn=s("pre"),jn=new ln(!1),Nn=l(),G=s("h2"),G.innerHTML=ut,On=l(),D=s("p"),D.innerHTML=it,$n=l(),y=s("div"),y.innerHTML=rt,In=l(),d=s("div"),V=s("div"),V.textContent=kt,tn=s("p"),tn.innerHTML=dt,cn(z.$$.fragment),w=s("a"),w.textContent=mt,an=s("pre"),An=new ln(!1),Gn=l(),q=s("h2"),q.innerHTML=ht,Dn=l(),R=s("p"),R.innerHTML=gt,Vn=l(),g=s("div"),U=s("div"),U.textContent=ft,cn(W.$$.fragment),P=s("a"),P.textContent=xt,sn=s("pre"),zn=new ln(!1),qn=l(),Y=s("p"),Y.innerHTML=vt,Rn=l(),f=s("div"),J=s("div"),J.textContent=Ct,cn(K.$$.fragment),_=s("a"),_.textContent=wt,en=s("pre"),Un=new ln(!1),this.h()},l(n){x=e(n,"H1",{"data-svelte-h":!0}),c(x)!=="svelte-tstzrx"&&(x.innerHTML=Yn),Cn=u(n),b=e(n,"P",{"data-svelte-h":!0}),c(b)!=="svelte-ockzce"&&(b.innerHTML=Jn),wn=u(n),B=e(n,"H2",{"data-svelte-h":!0}),c(B)!=="svelte-1ukekoe"&&(B.textContent=Kn),Pn=u(n),H=e(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-o04yvq"&&(H.innerHTML=Fn),_n=u(n),m=e(n,"DIV",{class:!0});var a=r(m);T=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-1llzxwj"&&(T.textContent=Zn),F=e(a,"P",{"data-svelte-h":!0}),c(F)!=="svelte-br8hp0"&&(F.innerHTML=Qn),un(E.$$.fragment,a),Z=e(a,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1qt6ke8"&&(Z.textContent=Xn),a.forEach(t),yn=u(n),M=e(n,"H2",{"data-svelte-h":!0}),c(M)!=="svelte-ya3cfe"&&(M.innerHTML=nt),bn=u(n),L=e(n,"P",{"data-svelte-h":!0}),c(L)!=="svelte-p48zi3"&&(L.innerHTML=tt),Bn=u(n),h=e(n,"DIV",{class:!0});var fn=r(h);S=e(fn,"DIV",{class:!0,"data-svelte-h":!0}),c(S)!=="svelte-1llzxwj"&&(S.textContent=at),un(j.$$.fragment,fn),v=e(fn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(v)!=="svelte-12a18qg"&&(v.textContent=st),Q=e(fn,"PRE",{class:!0});var Pt=r(Q);Hn=rn(Pt,!1),Pt.forEach(t),fn.forEach(t),Tn=u(n),N=e(n,"H2",{"data-svelte-h":!0}),c(N)!=="svelte-wf1y9l"&&(N.innerHTML=et),En=u(n),O=e(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-zqnbm2"&&(O.innerHTML=pt),Mn=u(n),$=e(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-vqve52"&&($.textContent=ot),Ln=u(n),k=e(n,"DIV",{class:!0});var pn=r(k);I=e(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-1llzxwj"&&(I.textContent=ct),un(A.$$.fragment,pn),C=e(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-1gfrhaj"&&(C.textContent=lt),X=e(pn,"PRE",{class:!0});var _t=r(X);Sn=rn(_t,!1),_t.forEach(t),nn=e(pn,"PRE",{class:!0});var yt=r(nn);jn=rn(yt,!1),yt.forEach(t),pn.forEach(t),Nn=u(n),G=e(n,"H2",{"data-svelte-h":!0}),c(G)!=="svelte-11aup1n"&&(G.innerHTML=ut),On=u(n),D=e(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1i73t7f"&&(D.innerHTML=it),$n=u(n),y=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(y)!=="svelte-1b924bb"&&(y.innerHTML=rt),In=u(n),d=e(n,"DIV",{class:!0});var on=r(d);V=e(on,"DIV",{class:!0,"data-svelte-h":!0}),c(V)!=="svelte-1llzxwj"&&(V.textContent=kt),tn=e(on,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-3skh8o"&&(tn.innerHTML=dt),un(z.$$.fragment,on),w=e(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-dnlbvz"&&(w.textContent=mt),an=e(on,"PRE",{class:!0});var bt=r(an);An=rn(bt,!1),bt.forEach(t),on.forEach(t),Gn=u(n),q=e(n,"H2",{"data-svelte-h":!0}),c(q)!=="svelte-iimgs0"&&(q.innerHTML=ht),Dn=u(n),R=e(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-ht395w"&&(R.innerHTML=gt),Vn=u(n),g=e(n,"DIV",{class:!0});var xn=r(g);U=e(xn,"DIV",{class:!0,"data-svelte-h":!0}),c(U)!=="svelte-1llzxwj"&&(U.textContent=ft),un(W.$$.fragment,xn),P=e(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-1p3un4h"&&(P.textContent=xt),sn=e(xn,"PRE",{class:!0});var Bt=r(sn);zn=rn(Bt,!1),Bt.forEach(t),xn.forEach(t),qn=u(n),Y=e(n,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-ik0ju9"&&(Y.innerHTML=vt),Rn=u(n),f=e(n,"DIV",{class:!0});var vn=r(f);J=e(vn,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-1llzxwj"&&(J.textContent=Ct),un(K.$$.fragment,vn),_=e(vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1623l1q"&&(_.textContent=wt),en=e(vn,"PRE",{class:!0});var Ht=r(en);Un=rn(Ht,!1),Ht.forEach(t),vn.forEach(t),this.h()},h(){o(T,"class","remark-container__title"),o(m,"class","remark-container tip"),o(S,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNpVjcEKwjAMhl+l5rRBkSl46U09iAdB8GiFlTbKcHaly2Cj9N1dHUx2Sr4/+fkCKOdABNCNQRCga9W27DLsnWPYE1rTsnEP0krSHhXhjZSnq3phlv9SSR6p85bNh5RGaSNEDm7kFsQ9QGVAbDg8m9qgP0+wkM79WZwgSP93n7oqWf3Ce+iIGrumsZWVx7rSb/bBVZlPbzGNCBz60bgrOAwgtkURH/ELOCtYhQ=="),o(v,"title","Open in our Online Editor"),Hn.a=null,o(Q,"class","language-js"),o(h,"class","remark-container tip"),o(I,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqVkEFLxDAQhf9KnFMLodRFL7m5CIsHQVTwYISGdHSLNSnJFHcp+e8mW7e1iwiekpnhzffmDaC6DsQA2tYIAnSrvGe3+6uuY7gjNLVn8T9II0k7VIQPpBzdqTfM8kNXkkPqnWHTIHWDNAEChy7WHsTzAE0N4pzDq21rdDdjsYBO+gmcikG6mb3pm0R1C+66J7KmoKjKqo1ltEWHVV4kdHaNnhqjqLEmbctHbUhPAA67aOOy5LAHsSrLwEebq79snmz8p9l7++kLvW3a2qHJjkNJj3HN9wlP2Gr7gYwOp5zyzqqcz7LF7Wul35NqCvIYwtSYpb8EcfEjiJfwBTr4vsw="),o(C,"title","Open in our Online Editor"),Sn.a=null,o(X,"class","language-js"),jn.a=null,o(nn,"class","language-js"),o(k,"class","remark-container tip"),o(y,"class","remark-container warning"),o(V,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqNUktrwzAM/itG7JCwENLBLoEd1hxGD4OxdqdlEBOrTVhqG9uhLcH/fc6z6VrYLnEk63tIcgNUSogbyAVDiCGvqNbk9fQsJcGjQc40cf9NylOTK6QG14Yq80Z36PldNjUKTa04mS7arE25BRuAdLGG+LOBkkG8CGArKoZq1QcXohN+Em6DJlWdSvfNRc0NKvJEonla8CVuheoc9Wkjw3Ptok/aC6aul5e6nGHGc+jnXRx0mBdlxRRybyoyH5I5qOqvkpZHKM/pdYwb531diEPJd0lvwA853aOXKdwq1EXmB2eqZW2c+dA4kJetuKPYIzeEcka0oafMD9vD80PBk6rMv51MOVaN9H/SZf+D+5djuDGt695mwxuG1tYMBjYFknEJpSZ3zbQTG2b+DZXf3m6u837ap9Os+bCM2XiviC0EcHTP7TEK4ATxQxTZL/sDzQAa/w=="),o(w,"title","Open in our Online Editor"),An.a=null,o(an,"class","language-js"),o(d,"class","remark-container tip"),o(U,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNp9UU1Lw0AQ/Svj4CHBEFLBS6AH9SAe/EC9iBGyTaZmMdksuxNtCfvfzUdNWwxehnnz8d4bpkWhNcYtZnVOGGNWCmvhbnupNdCGSeUWurxNVMKZIcH0zMLwo/ggzx+qCRvixiiYGn3VJcqhC1B32GL81qLMMV4EuK7LnMztCI5Ep/1JuAdtYgaVIaqmWpF5WF81zLW6LmX2aWEJ0eHM6PKmkb0/c+Twqf62YVbIMjekvN9mwi+dYMhd8NLXuoFCfBFkPTnlwAXBapCD01aHcw4csKzIhqkf7DnHgR3rMAcVnaR+uNvydChV57UixfczpHsuf0zc4ZH/rh4cPm8Yzpaw+MPqMMBN95aLKMAtxudR5N7dD04ax54="),o(P,"title","Open in our Online Editor"),zn.a=null,o(sn,"class","language-js"),o(g,"class","remark-container tip"),o(J,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNp9kU1LxDAQhv9KGDy0bLa0Qi+FPegexIMg6s0IDWncLdY0JFPcJeS/m37YtYi9DPP1zDuZOOBaQ+FAtJWEAkTDrSUP5xutiTyhVJUlwXdMMRRGcpTPyA0+8oOM4iHL0EjsjCJzoc96pjx4CjrEFopXB3UFRUbhvW0qae7HYCE687NwHzhmBpXBirZTKA3ZkXSRHha76+p+JbNY6qn9sok41k1lpIp+igxfgkaCwUTlfhpaW3LldDJp+KSM6aX/tkNs1URsszJOWrVvavERBeLI1UFOYyjZZv+Cm1VwhcvXuPzCxaPjF9f53R3xz9653Gl+MNnsyFj8M8MDhVP4sDylcIbiOk39m/8GBVjNgg=="),o(_,"title","Open in our Online Editor"),Un.a=null,o(en,"class","language-js"),o(f,"class","remark-container tip")},m(n,a){p(n,x,a),p(n,Cn,a),p(n,b,a),p(n,wn,a),p(n,B,a),p(n,Pn,a),p(n,H,a),p(n,_n,a),p(n,m,a),i(m,T),i(m,F),kn(E,m,null),i(m,Z),p(n,yn,a),p(n,M,a),p(n,bn,a),p(n,L,a),p(n,Bn,a),p(n,h,a),i(h,S),kn(j,h,null),i(h,v),i(h,Q),Hn.m(Et,Q),p(n,Tn,a),p(n,N,a),p(n,En,a),p(n,O,a),p(n,Mn,a),p(n,$,a),p(n,Ln,a),p(n,k,a),i(k,I),kn(A,k,null),i(k,C),i(k,X),Sn.m(Mt,X),i(k,nn),jn.m(Lt,nn),p(n,Nn,a),p(n,G,a),p(n,On,a),p(n,D,a),p(n,$n,a),p(n,y,a),p(n,In,a),p(n,d,a),i(d,V),i(d,tn),kn(z,d,null),i(d,w),i(d,an),An.m(St,an),p(n,Gn,a),p(n,q,a),p(n,Dn,a),p(n,R,a),p(n,Vn,a),p(n,g,a),i(g,U),kn(W,g,null),i(g,P),i(g,sn),zn.m(jt,sn),p(n,qn,a),p(n,Y,a),p(n,Rn,a),p(n,f,a),i(f,J),kn(K,f,null),i(f,_),i(f,en),Un.m(Nt,en),Wn=!0},p:$t,i(n){Wn||(dn(E.$$.fragment,n),dn(j.$$.fragment,n),dn(A.$$.fragment,n),dn(z.$$.fragment,n),dn(W.$$.fragment,n),dn(K.$$.fragment,n),Wn=!0)},o(n){mn(E.$$.fragment,n),mn(j.$$.fragment,n),mn(A.$$.fragment,n),mn(z.$$.fragment,n),mn(W.$$.fragment,n),mn(K.$$.fragment,n),Wn=!1},d(n){n&&(t(x),t(Cn),t(b),t(wn),t(B),t(Pn),t(H),t(_n),t(m),t(yn),t(M),t(bn),t(L),t(Bn),t(h),t(Tn),t(N),t(En),t(O),t(Mn),t($),t(Ln),t(k),t(Nn),t(G),t(On),t(D),t($n),t(y),t(In),t(d),t(Gn),t(q),t(Dn),t(R),t(Vn),t(g),t(qn),t(Y),t(Rn),t(f)),hn(E),hn(j),hn(A),hn(z),hn(W),hn(K)}}}class qt extends It{constructor(x){super(),At(this,x,null,Gt,Ot,{})}}export{qt as component};
