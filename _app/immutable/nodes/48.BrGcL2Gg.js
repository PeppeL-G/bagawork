import{s as ln,n as un}from"../chunks/scheduler.B0TnBjPs.js";import{S as kn,i as rn,e as p,s as W,c as gn,H as k,a as e,g as A,b as Z,d as c,f as dn,n as r,h as t,o,j as _,m as mn,p as l,t as fn,k as hn,l as wn}from"../chunks/index.Cnh3HYw3.js";import{V as xn}from"../chunks/ViewApp.BajIxHdc.js";function En(F){let u,L="Glossaries",v,g,O="This example shows how to create an app where the user can practice on translating words from Swedish to English.",T,a,d,i,z="Open in Online Editor",m,R,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Glossary App!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,b,nn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,h,C,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,w,G,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,x,I,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,E,j,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DonePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,P,H,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,y,N,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,S,q,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,B;return d=new xn({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:953,y:571}]}}}),{c(){u=p("h1"),u.textContent=L,v=W(),g=p("p"),g.textContent=O,T=W(),a=p("div"),gn(d.$$.fragment),i=p("a"),i.textContent=z,m=p("pre"),R=new k(!1),f=p("pre"),b=new k(!1),h=p("pre"),C=new k(!1),w=p("pre"),G=new k(!1),x=p("pre"),I=new k(!1),E=p("pre"),j=new k(!1),P=p("pre"),H=new k(!1),y=p("pre"),N=new k(!1),S=p("pre"),q=new k(!1),this.h()},l(s){u=e(s,"H1",{"data-svelte-h":!0}),A(u)!=="svelte-jyijv4"&&(u.textContent=L),v=Z(s),g=e(s,"P",{"data-svelte-h":!0}),A(g)!=="svelte-1w52n0q"&&(g.textContent=O),T=Z(s),a=e(s,"DIV",{});var n=c(a);dn(d.$$.fragment,n),i=e(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),A(i)!=="svelte-1fhz960"&&(i.textContent=z),m=e(n,"PRE",{class:!0});var D=c(m);R=r(D,!1),D.forEach(t),f=e(n,"PRE",{class:!0});var J=c(f);b=r(J,!1),J.forEach(t),h=e(n,"PRE",{class:!0});var V=c(h);C=r(V,!1),V.forEach(t),w=e(n,"PRE",{class:!0});var Y=c(w);G=r(Y,!1),Y.forEach(t),x=e(n,"PRE",{class:!0});var M=c(x);I=r(M,!1),M.forEach(t),E=e(n,"PRE",{class:!0});var K=c(E);j=r(K,!1),K.forEach(t),P=e(n,"PRE",{class:!0});var U=c(P);H=r(U,!1),U.forEach(t),y=e(n,"PRE",{class:!0});var X=c(y);N=r(X,!1),X.forEach(t),S=e(n,"PRE",{class:!0});var Q=c(S);q=r(Q,!1),Q.forEach(t),n.forEach(t),this.h()},h(){o(i,"target","_blank"),o(i,"href","/editor#eNrV1t1umzAUAOBXcX0zkFw0IH/lbt2qrtI2TesuNi2V4oIhaMRmxjTJIh6nr7AX6IvNxpAG0pJUuYiqKm18gBP788lxVxCnKfRW0GcBgR70E5xl4PPyXZoCshCEBhmQ71djOhbq5XOCBbkWmIuvOCKGqa8ITkTOKVhfUNGi+dAnvGS5MHxGZVrRevAbm2dWioMgppHRMy1/GicBJ9TQd43FdzkbS8hfxuQyYVmG+VJN7GRiovqWKrOVxX+JYddxc2MqBSwQDFkSEJ5B79cKxgH0bAQpnqnFl7OHCLIwzIj4Ab3ToVOPfkJv6BY3CKZydY2Hdb4rPWgwrjXWlGrQsrzM47Yithpi9fpKoy2YsbhOsU/Q43iD6ooCMY0zIDcZAZkM+JiClGNfxD4BTG7YnARxNj29oFEi/4JI28YkszZkOz/jmiTEFzKzIBHjy+7n3rMkn9Enl7F98/NLVj/nuRCMVpOQeRnPJqaltscoR7bCNlHrIbawpiSOpsJwtq5tJvySz27JY0Y9fCJlc9RewfMU5lPVieACeo79FsEl9Ny+UyBdZf2uKntc7NHKzLbAhfzucVlsBNSlNGc8ACHTwarOdHAMI/7wj45hd62UKctPSRN5ZVoKGJOPMRUeiDghtNqdq/DiT44TY6KDSJM4zc16Hrw36pXg9mBQgw92gjtHBXdeCi69g4O8OQna2ipUWbv7Wg/dfmXt1tbDndbuUa3dl1rfJg/3B1nfJjlpY5cxBD4wSva1PhudVda92nrUZV3nPpr0JWMBApgGIGD0jSgPLGkcEaGYZyedoo3ufY7930AwkKkTGCjIupGvz+R9BG3HHele7I5qwrMuwo1j4vU0Y3F3YL2KOWuXqwqhimP/RjzUjbg/smttdRbu4n5lrTgks4O0w/huqzuUsdp7/2bsONp7sK5u297t/cra8cO9EPgg8fL/xTa5Dr6wI/ddDT60i5viP4bt2a4="),o(i,"title","Open in our Online Editor"),R.a=null,o(m,"class","language-js"),b.a=null,o(f,"class","language-js"),C.a=null,o(h,"class","language-js"),G.a=null,o(w,"class","language-js"),I.a=null,o(x,"class","language-js"),j.a=null,o(E,"class","language-js"),H.a=null,o(P,"class","language-js"),N.a=null,o(y,"class","language-js"),q.a=null,o(S,"class","language-js")},m(s,n){_(s,u,n),_(s,v,n),_(s,g,n),_(s,T,n),_(s,a,n),mn(d,a,null),l(a,i),l(a,m),R.m($,m),l(a,f),b.m(nn,f),l(a,h),C.m(sn,h),l(a,w),G.m(an,w),l(a,x),I.m(tn,x),l(a,E),j.m(pn,E),l(a,P),H.m(en,P),l(a,y),N.m(on,y),l(a,S),q.m(cn,S),B=!0},p:un,i(s){B||(fn(d.$$.fragment,s),B=!0)},o(s){hn(d.$$.fragment,s),B=!1},d(s){s&&(t(u),t(v),t(g),t(T),t(a)),wn(d)}}}class _n extends kn{constructor(u){super(),rn(this,u,null,En,ln,{})}}export{_n as component};
