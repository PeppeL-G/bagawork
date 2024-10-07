import{s as q,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as W,i as K,e as o,s as M,c as V,H as _,a as c,g as v,b as N,d,f as J,n as B,h as t,o as i,j as f,m as Q,p as w,t as Z,k as U,l as F}from"../chunks/index.CHfggXAQ.js";import{V as X}from"../chunks/ViewApp.6tllL5xD.js";function $(L){let p,S="Navigation Drawer",x,u,A='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-drawer/overview" rel="nofollow" target="_blank">Navigation Drawer</a>.',y,s,l,e,H="Open in Online Editor",k,h,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">closeDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> closeDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> openDrawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token operator">!</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>openDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">☰</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> drawer <span class="token operator">=</span> Columns<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#77777777</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>HomePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				closeDrawerButton<span class="token punctuation">,</span>
				openDrawerButton<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sample App</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Layers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				pageContent<span class="token punctuation">,</span>
				drawer<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,C,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,b,R=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,D,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,P;return l=new X({props:{project:{app:{code:`class MyApp extends App{
	
	isDrawerOpen = false
	
	createStartPage(){
		return HomePage
	}
	
	openDrawer(){
		a.isDrawerOpen = true
	}
	
	closeDrawer(){
		a.isDrawerOpen = false
	}
	
	createLayout(pageContent){
		
		const closeDrawerButton = Button.keepIf(a.isDrawerOpen).onClick(a.closeDrawer).text(\`←\`)
		const openDrawerButton = Button.keepIf(!a.isDrawerOpen).onClick(a.openDrawer).text(\`☰\`)
		
		const drawer = Columns.keepIf(a.isDrawerOpen).backgroundColor(\`#77777777\`).children(
			Rows.backgroundColor(\`white\`).padding(2).children(
				Button.onClick(a.closeDrawer).text(\`Home\`).page(HomePage),
				Space.size(0.01),
				Button.onClick(a.closeDrawer).text(\`About\`).page(AboutPage),
				Space.size(0.01),
				Button.onClick(a.closeDrawer).text(\`Contact\`).page(ContactPage),
				Space,
			),
			Space,
		)
		
		return Rows.backgroundColor(\`skyblue\`).children(
			Columns.border(1, \`black\`, \`b\`).children(
				closeDrawerButton,
				openDrawerButton,
				Text.size(1).text(\`Sample App\`)
			),
			Layers.size(1).children(
				pageContent,
				drawer,
			),
		)
	}
	
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class HomePage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Home!\`),
		)
	}
}`,x:1,y:152},{id:2,folderId:1,code:`class AboutPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`About!\`),
		)
	}
}`,x:249,y:387},{id:3,folderId:1,code:`class ContactPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Contact us!\`),
		)
	}
}`,x:485,y:147}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){p=o("h1"),p.textContent=S,x=M(),u=o("p"),u.innerHTML=A,y=M(),s=o("div"),V(l.$$.fragment),e=o("a"),e.textContent=H,k=o("pre"),h=new _(!1),r=o("pre"),C=new _(!1),g=o("pre"),b=new _(!1),m=o("pre"),D=new _(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),v(p)!=="svelte-1jyl3tf"&&(p.textContent=S),x=N(n),u=c(n,"P",{"data-svelte-h":!0}),v(u)!=="svelte-1q1arlh"&&(u.innerHTML=A),y=N(n),s=c(n,"DIV",{});var a=d(s);J(l.$$.fragment,a),e=c(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(e)!=="svelte-ch3dpm"&&(e.textContent=H),k=c(a,"PRE",{class:!0});var O=d(k);h=B(O,!1),O.forEach(t),r=c(a,"PRE",{class:!0});var E=d(r);C=B(E,!1),E.forEach(t),g=c(a,"PRE",{class:!0});var T=d(g);b=B(T,!1),T.forEach(t),m=c(a,"PRE",{class:!0});var I=d(m);D=B(I,!1),I.forEach(t),a.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtVM2O2jAQfpWse0mkKAIWxC5SD5RKLVKrVmUPrcpKMcmEjTB2ZDtiKcq15x77GH2mPkmdHycOBNpKIBF5bM8334y/mQPCSYImBxSwENAEBQQLYb3fT5PEgmcJNBSWWh+WdCnzfyxec7wD/iEBar20IkwE6LOAA5awkJjLj3gNtlN6SQ4y5dR6y7aQ7+ebmfZhCqdErK9j7yiI5GnbKSBMwN+8ampZm987vGeptBPFZMaoylBqiPIbMCqkZYR4lUrJcsRy4W0AknlktwM6HqMzEgcbtW/4Op5UVbT9399/+I6J3+R9Bv7mPH7jW8P//KXhzSBhcUlBzxhJt1Sco77CwWbNWUpDdZFx238xrn6+4wVPMQk5ULvCl5/YTpy67J5iCep6gsMwpmt70OG5lFWOF2uV66QAUhLSmnHcBmOR4AA8EX8Du+f1+ubRv8BPV+r5NX5hXDlArioc1CEqszNIbTcn5n7rSasu6q6+2OxXJIWu59Jvv2I8VP3Sdy1/RZS/ny/8zlc6Eb/B+1i4xtGDSr8sW1/XYoG3CYF8gtT6NHJVrQhc1C4dTIwuNQKVuj4pnmN0e4YyF0WMqJQFmnw9oDhEk76LKN7mY64YUshFLIoEyM/q6H6krS9oMuxljy7Kg7ecS7x5abQGptZpPTNz49AMnTdpfDwOlXbMeaSTKYrYNMKNf5xdpmg/Fwz26jsaZG7Jb3CJX63zqxIsUM8yHAzvC463d2PN8fYSR6NRrsqywrVScZbq8G5UlnM41g//AEq5CrclgHZNxWYeTcOUyP+ga/DyGxLZY/YHi4e6Mw=="),i(e,"title","Open in our Online Editor"),h.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),b.a=null,i(g,"class","language-js"),D.a=null,i(m,"class","language-js")},m(n,a){f(n,p,a),f(n,x,a),f(n,u,a),f(n,y,a),f(n,s,a),Q(l,s,null),w(s,e),w(s,k),h.m(j,k),w(s,r),C.m(z,r),w(s,g),b.m(R,g),w(s,m),D.m(G,m),P=!0},p:Y,i(n){P||(Z(l.$$.fragment,n),P=!0)},o(n){U(l.$$.fragment,n),P=!1},d(n){n&&(t(p),t(x),t(u),t(y),t(s)),F(l)}}}class tn extends W{constructor(p){super(),K(this,p,null,$,q,{})}}export{tn as component};
