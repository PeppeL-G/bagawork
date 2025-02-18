import{s as ln,n as un}from"../chunks/scheduler.B0TnBjPs.js";import{S as kn,i as rn,e as p,s as Q,c as gn,H as k,a as e,g as O,b as J,d as c,f as dn,n as r,h as t,o,j as _,m as mn,p as l,t as fn,k as hn,l as wn}from"../chunks/index.BXVnRmkj.js";import{V as xn}from"../chunks/ViewApp.qg7AIhJt.js";function En(F){let u,A="Glossaries",v,g,V="This example shows how to create an app where the user can practice on translating words from Swedish to English.",T,s,d,i,U="Open in Online Editor",m,G,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Glossary App!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,h,b,an=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,w,R,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,x,j,tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Color3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,E,H,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DonePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,y,I,en=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,P,L,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Number2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			content.grow(1),
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
	
}`,x:953,y:571}]}}}),{c(){u=p("h1"),u.textContent=A,v=Q(),g=p("p"),g.textContent=V,T=Q(),s=p("div"),gn(d.$$.fragment),i=p("a"),i.textContent=U,m=p("pre"),G=new k(!1),f=p("pre"),C=new k(!1),h=p("pre"),b=new k(!1),w=p("pre"),R=new k(!1),x=p("pre"),j=new k(!1),E=p("pre"),H=new k(!1),y=p("pre"),I=new k(!1),P=p("pre"),L=new k(!1),S=p("pre"),q=new k(!1),this.h()},l(a){u=e(a,"H1",{"data-svelte-h":!0}),O(u)!=="svelte-jyijv4"&&(u.textContent=A),v=J(a),g=e(a,"P",{"data-svelte-h":!0}),O(g)!=="svelte-1w52n0q"&&(g.textContent=V),T=J(a),s=e(a,"DIV",{});var n=c(s);dn(d.$$.fragment,n),i=e(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),O(i)!=="svelte-1npz79l"&&(i.textContent=U),m=e(n,"PRE",{class:!0});var N=c(m);G=r(N,!1),N.forEach(t),f=e(n,"PRE",{class:!0});var X=c(f);C=r(X,!1),X.forEach(t),h=e(n,"PRE",{class:!0});var Z=c(h);b=r(Z,!1),Z.forEach(t),w=e(n,"PRE",{class:!0});var D=c(w);R=r(D,!1),D.forEach(t),x=e(n,"PRE",{class:!0});var M=c(x);j=r(M,!1),M.forEach(t),E=e(n,"PRE",{class:!0});var Y=c(E);H=r(Y,!1),Y.forEach(t),y=e(n,"PRE",{class:!0});var K=c(y);I=r(K,!1),K.forEach(t),P=e(n,"PRE",{class:!0});var z=c(P);L=r(z,!1),z.forEach(t),S=e(n,"PRE",{class:!0});var W=c(S);q=r(W,!1),W.forEach(t),n.forEach(t),this.h()},h(){o(i,"target","_blank"),o(i,"href","/editor#eNrV1t1umzAUAOBXcX0zIrloQP7K3bpVXaVtmtZdbFoqxcWGoBGbGbM0inicvsJeoC82G0MaSEtS5SKqqrTxAU7szyfHXUGcptBfwYATCn0YJDjLwOfluzQF9E5SRjKg3q8mbCL1KxAUS3otsZBfcUStnrkiBZW5YGB9QUeL5kOf8JLn0go4U2ll68FvfJHZKSYkZpHV79nBLE6IoMwyd03kdzUbW6pf1vQy4VmGxVJP7GTaQ/UtVWY7EnxhOXW8tzGVAhYIhjwhVGTQ/7WCMYG+gyDDc734cvYQQR6GGZU/oH86cuvRT+iPvOIGwVStrvGwyXdlBg3GtcaaUg9alpd53FbEdkOsXl9ptAUzkdcpDih6HG9QXTEgZ3EG1CYjoJKBADOQChzIOKCAqw1bUBJns9MLFiXqL4iMbUwze0O28zOuaUIDqTJLGnGx7H7uPU/yOXtyGds3P79k/XOeS8lZNQmVl4ts2rP19ljlyNHYPdR6iN/ZMxpHM2m5W9c2E37J57f0MaMZPpGyOWqv4HmK3lPVieAd9F3nLYJL6HsDt0CmygZdVfa42KOVmWODC/XdE6rYKKhLacEFASE3warOTHACI/Hwj01gd62UKctPSRN1ZVYKWNOPMZM+iASlrNqdq/DiT44Ta2qCyJC4zc16Hrw/7pfgznBYgw93grtHBXdfCq68yUHegpK2tg5V1t6+1iNvUFl7tfVop7V3VGvvpda3ycP9Qda3SU7b2GUMgQ+c0X2tz8ZnlXW/th53Wde5jyZ9yTlBADMCCGdvZHlgKeOISs08P+kUbXTvcxz8BpKDTJ/AQEPWjXx9Ju8j6Lje2PRib1wTnnURbhwTr6cZy78H1qtc8Ha56hCqOPZvxCPTiAdjp9bWZ+Eu7lfWikM6P0g7jP9udYcyVnvv34xd13gP19XtOLu9X1k7friXEh8kXv6/2CY3wRd25IFnwEdOcVP8B7lk2bI="),o(i,"title","Open in our Online Editor"),G.a=null,o(m,"class","language-js"),C.a=null,o(f,"class","language-js"),b.a=null,o(h,"class","language-js"),R.a=null,o(w,"class","language-js"),j.a=null,o(x,"class","language-js"),H.a=null,o(E,"class","language-js"),I.a=null,o(y,"class","language-js"),L.a=null,o(P,"class","language-js"),q.a=null,o(S,"class","language-js")},m(a,n){_(a,u,n),_(a,v,n),_(a,g,n),_(a,T,n),_(a,s,n),mn(d,s,null),l(s,i),l(s,m),G.m($,m),l(s,f),C.m(nn,f),l(s,h),b.m(an,h),l(s,w),R.m(sn,w),l(s,x),j.m(tn,x),l(s,E),H.m(pn,E),l(s,y),I.m(en,y),l(s,P),L.m(on,P),l(s,S),q.m(cn,S),B=!0},p:un,i(a){B||(fn(d.$$.fragment,a),B=!0)},o(a){hn(d.$$.fragment,a),B=!1},d(a){a&&(t(u),t(v),t(g),t(T),t(s)),wn(d)}}}class _n extends kn{constructor(u){super(),rn(this,u,null,En,ln,{})}}export{_n as component};
