import{s as ln,n as un}from"../chunks/scheduler.DFPFbGJz.js";import{S as kn,i as rn,e as p,s as J,c as gn,H as k,a as e,g as H,b as Y,d as c,f as dn,n as r,h as s,o,j as v,m as mn,p as l,t as fn,k as hn,l as wn}from"../chunks/index.CzDE4dZi.js";import{V as xn}from"../chunks/ViewApp.C2MU7-ZI.js";function En(Z){let u,q="Glossaries",_,g,M="This example shows how to create an app where the user can practice on translating words from Swedish to English.",T,a,d,i,V="Open in Online Editor",m,R,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Glossary App!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,C,nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In this app, you can practice on Swedish-English glossaries.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Select category.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Space<span class="token punctuation">,</span>
					Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Colors</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Color1Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Numbers</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Number1Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Space<span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,h,b,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. Enter the English word for the Swedish word "grön".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: green</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">green</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> Color2Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,w,j,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. Enter the English word for the Swedish word "röd".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> Color3Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,x,G,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. Enter the English word for the Swedish word "blå".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> DonePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,E,L,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DonePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good, and don't you forget them!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to start page</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,S,A,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. Enter the English word for the Swedish word "två".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: two</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">two</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> Number2Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,y,I,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. Enter the English word for the Swedish word "fem".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: five</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">five</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> Number3Page<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,P,B,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. Enter the English word for the Swedish word "åtta".</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hint: eight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">eight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> DonePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,N;return d=new xn({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
	createLayout(content){
		return Rows.padding(4).children(
			Text.text(\`Glossary App!\`),
			content.size(1),
		)
	}
	
}`},folders:[{id:1,name:"Start",offsetX:-72,offsetY:73}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`In this app, you can practice on Swedish-English glossaries.\`),
				Space,
				Text.text(\`Select category.\`),
				Space,
				Columns.children(
					Space,
					Rows.children(
						Button.text(\`Colors\`).page(Color1Page),
						Box.height(2),
						Button.text(\`Numbers\`).page(Number1Page),
					),
					Space,
				),
				Space,
			)
		)
	}
	
}`,x:210,y:352},{id:5,folderId:1,code:`class Color1Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`1. Enter the English word for the Swedish word "grön".\`),
				Space,
				EnterText.placeholder(\`Hint: green\`).pageIfEqual(\`green\`, Color2Page),
			)
		)
	}
	
}`,x:484,y:166},{id:6,folderId:1,code:`class Color2Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`2. Enter the English word for the Swedish word "röd".\`),
				Space,
				EnterText.placeholder(\`Hint: red\`).pageIfEqual(\`red\`, Color3Page),
			)
		)
	}
	
}`,x:735,y:163},{id:7,folderId:1,code:`class Color3Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`3. Enter the English word for the Swedish word "blå".\`),
				Space,
				EnterText.placeholder(\`Hint: blue\`).pageIfEqual(\`blue\`, DonePage),
			)
		)
	}
	
}`,x:989,y:164},{id:8,folderId:1,code:`class DonePage extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`Good, and don't you forget them!\`),
				Space,
				Button.text(\`Back to start page\`).page(StartPage),
			)
		)
	}
	
}`,x:1238,y:338},{id:9,folderId:1,code:`class Number1Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`1. Enter the English word for the Swedish word "två".\`),
				Space,
				EnterText.placeholder(\`Hint: two\`).pageIfEqual(\`two\`, Number2Page),
			)
		)
	}
	
}`,x:474,y:581},{id:10,folderId:1,code:`class Number2Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`2. Enter the English word for the Swedish word "fem".\`),
				Space,
				EnterText.placeholder(\`Hint: five\`).pageIfEqual(\`five\`, Number3Page),
			)
		)
	}
	
}`,x:722,y:568},{id:11,folderId:1,code:`class Number3Page extends Page{
	
	createGui(){
		return a.createLayout(
			Rows.children(
				Space,
				Text.text(\`3. Enter the English word for the Swedish word "åtta".\`),
				Space,
				EnterText.placeholder(\`Hint: eight\`).pageIfEqual(\`eight\`, DonePage),
			)
		)
	}
	
}`,x:953,y:571}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){u=p("h1"),u.textContent=q,_=J(),g=p("p"),g.textContent=M,T=J(),a=p("div"),gn(d.$$.fragment),i=p("a"),i.textContent=V,m=p("pre"),R=new k(!1),f=p("pre"),C=new k(!1),h=p("pre"),b=new k(!1),w=p("pre"),j=new k(!1),x=p("pre"),G=new k(!1),E=p("pre"),L=new k(!1),S=p("pre"),A=new k(!1),y=p("pre"),I=new k(!1),P=p("pre"),B=new k(!1),this.h()},l(t){u=e(t,"H1",{"data-svelte-h":!0}),H(u)!=="svelte-jyijv4"&&(u.textContent=q),_=Y(t),g=e(t,"P",{"data-svelte-h":!0}),H(g)!=="svelte-1w52n0q"&&(g.textContent=M),T=Y(t),a=e(t,"DIV",{});var n=c(a);dn(d.$$.fragment,n),i=e(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),H(i)!=="svelte-66e4ig"&&(i.textContent=V),m=e(n,"PRE",{class:!0});var D=c(m);R=r(D,!1),D.forEach(s),f=e(n,"PRE",{class:!0});var W=c(f);C=r(W,!1),W.forEach(s),h=e(n,"PRE",{class:!0});var O=c(h);b=r(O,!1),O.forEach(s),w=e(n,"PRE",{class:!0});var X=c(w);j=r(X,!1),X.forEach(s),x=e(n,"PRE",{class:!0});var z=c(x);G=r(z,!1),z.forEach(s),E=e(n,"PRE",{class:!0});var K=c(E);L=r(K,!1),K.forEach(s),S=e(n,"PRE",{class:!0});var U=c(S);A=r(U,!1),U.forEach(s),y=e(n,"PRE",{class:!0});var Q=c(y);I=r(Q,!1),Q.forEach(s),P=e(n,"PRE",{class:!0});var F=c(P);B=r(F,!1),F.forEach(s),n.forEach(s),this.h()},h(){o(i,"target","_blank"),o(i,"href","/editor#eNrVl11u2zgQgK/C8iUyoAqVFMeOXhbObpAGaItiE2C3WBcwI41koTKpklQTb+Dj9Aq9QC5WUrQcS5EVBX4wAsM/HHKGnG/GQ809JnmOg3scsghwgMOMCIE+Lid5juBOAo0EUr/vp3Qq9TvkQCRcScLlZ5KANTAzkoMsOEWbCS1d1ZU+kCUrpBUyqszKhuLf7FY4OYmilCbW8cAJ52kWcaCWWTWV1+o0jlQf1uwiY0IQvtQHezMb2NWStWVHpP+D5VbywdZRVnhl45hlEXCBg//ucRrhwLUxJQvtfHl6bGMWxwLkvzh4O/Kq0RccjPzVVxvnyruasrF3aQY1jBsaG5R60GB5UaRNisSpEav8Kxk9ATOVVzkJwX4cb6G6pEjOU4FUkG2kjKGQUJRzEso0BMRUwG4hSsX87TlNMvWNEsM2BeFske3c4woyCKWyLCFhfNmt9yfLigVtdePp4t0u69dZISWj60Mou4yL2cDR4bHKkathD+yGErtz5pAmc2l5T+a2DX4qFjfwaNEMW0zWR00PdqMYtGWnje9w4LnvbLzEgT/0VrbJsmFXlj06e7A0cx10rv57XCUboCqVbhmPUMyMcJ1nRjjFCX/4Rae4O1dKk+UueaZm5iUBa/Y+pTJACQeg6+hcxuffC5JZMyO0DRKvHqzdwI/HxyVw9+SkAn7yLHDvoMC9lwJXvKO9eHOImrS1aM3a78t65A/XrP2K9ehZ1v5BWfsvZX2TPfzci/VNVkATdimz0V+MQl/Wp+PTNevjivW4i3Vl+2CkLxiLbERohCJGj2R5YSnGCUiNefGmk2itep+R8BuSDAl9AyMNsirkmzu5D0HX88emFvvjCuFpF8Kta+L1FGP5Y898lbesma5aZK9x9C/EI1OIh2O3oq3vwudwv7JSHMNiL9px+uNJdShlFe/+xdjzDO+TTXa77vO8X1k5fvgpJdmLePm82ERuhC+syEPfAB+5VStxDQu1o6y3FDXoE/HtMp5ERdbRSjB6Bsr9x36spf9qiUo7/jqbLfQTDmVNLuEo1KqXcMd/bHGta3Y863cW709VNbFokWW9a/4XEP302jpDjXASqxxoI6jbRhMbrxGbMm0mCRw6Mv/MiTwSOjgcqd13x6RGzH3XDqy+aNhjkdfHkrfD0vYJXxKTr6vfDR8NbA=="),o(i,"title","Open in our Online Editor"),R.a=null,o(m,"class","language-js"),C.a=null,o(f,"class","language-js"),b.a=null,o(h,"class","language-js"),j.a=null,o(w,"class","language-js"),G.a=null,o(x,"class","language-js"),L.a=null,o(E,"class","language-js"),A.a=null,o(S,"class","language-js"),I.a=null,o(y,"class","language-js"),B.a=null,o(P,"class","language-js")},m(t,n){v(t,u,n),v(t,_,n),v(t,g,n),v(t,T,n),v(t,a,n),mn(d,a,null),l(a,i),l(a,m),R.m($,m),l(a,f),C.m(nn,f),l(a,h),b.m(tn,h),l(a,w),j.m(an,w),l(a,x),G.m(sn,x),l(a,E),L.m(pn,E),l(a,S),A.m(en,S),l(a,y),I.m(on,y),l(a,P),B.m(cn,P),N=!0},p:un,i(t){N||(fn(d.$$.fragment,t),N=!0)},o(t){hn(d.$$.fragment,t),N=!1},d(t){t&&(s(u),s(_),s(g),s(T),s(a)),wn(d)}}}class vn extends kn{constructor(u){super(),rn(this,u,null,En,ln,{})}}export{vn as component};
