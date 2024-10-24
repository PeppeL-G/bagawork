import{s as F,n as J}from"../chunks/scheduler.B0TnBjPs.js";import{S as K,i as Q,e as o,s as D,c as X,H as x,a as c,g as I,b as Y,d as f,f as H,n as y,h as a,o as l,j as w,m as z,p as h,t as $,k as nn,l as sn}from"../chunks/index.Cnh3HYw3.js";import{V as tn}from"../chunks/ViewApp.9sx5twVU.js";function an(N){let p,L="Personal Website",b,u,R="This example shows how to create an app that functions as a personal website.",v,t,i,e,W="Open in Online Editor",k,P,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	blogposts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Who could have known?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Some things in life are simply strange. Then we have the things that aren't strange at all, but just appear strange to use. Then we have...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">timeWritten</span><span class="token operator">:</span> Time<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">2024</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A New Discovery!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The most amazing thing just happened: I discovered something new! Never could I imagine that...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">timeWritten</span><span class="token operator">:</span> Time<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">2024</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">]</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">title<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Start</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blog</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>BlogPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Copyright Peter L-G 2024</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,B,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to my my personal website!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,T,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blog</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Feel free to read the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> blogposts I have written here.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createBlogpostComponent<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createBlogpostComponent</span><span class="token punctuation">(</span><span class="token parameter">blogpost</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>BlogpostPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,C,A=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">If you need to contact me, just send me an email at:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">imaginary.email@internet.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,S,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogpostPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> blogpost <span class="token operator">=</span> a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=></span> b<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			blogpost<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Written </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>blogpost<span class="token punctuation">.</span>timeWritten<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_;return i=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	blogposts = [{
		id: 2,
		title: \`Who could have known?\`,
		content: \`Some things in life are simply strange. Then we have the things that aren't strange at all, but just appear strange to use. Then we have...\`,
		timeWritten: Time.setDate(2024, 4, 15),
	}, {
		id: 1,
		title: \`A New Discovery!\`,
		content: \`The most amazing thing just happened: I discovered something new! Never could I imagine that...\`,
		timeWritten: Time.setDate(2024, 4, 11),
	}]
	
	createStartPage(){
		return StartPage
	}
	
	createLayout(title, content){
		return Rows.padding(4).children(
			Text.text(\`Peter L-G\`),
			Box.height(1),
			Box.height(0.5).backgroundColor(\`black\`),
			Box.height(2),
			Columns.children(
				Space,
				Button.text(\`Start\`).page(StartPage),
				Space,
				Button.text(\`Blog\`).page(BlogPage),
				Space,
				Button.text(\`Contact\`).page(ContactPage),
				Space,
			),
			Text.text(title).left(),
			content,
			Space,
			Box.height(0.5).backgroundColor(\`black\`),
			Box.height(1),
			Text.text(\`Copyright Peter L-G 2024\`)
		)
	}
	
}`},folders:[{id:1,name:"Start",offsetX:-7,offsetY:-140}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return a.createLayout(
			\`Welcome!\`,
			Rows.children(
				Text.text(\`Welcome to my my personal website!\`).left(),
			)
		)
	}
	
}`,x:192,y:342},{id:2,folderId:1,code:`class BlogPage extends Page{
	
	createGui(){
		return a.createLayout(
			\`Blog\`,
			Rows.children(
				Text.text(\`Feel free to read the \${a.blogposts.length} blogposts I have written here.\`).left(),
				a.blogposts.map(p.createBlogpostComponent)
			)
		)
	}
	
	createBlogpostComponent(blogpost){
		
		return Button.text(blogpost.title).page(BlogpostPage.id(blogpost.id))
		
	}
	
}`,x:528,y:342},{id:3,folderId:1,code:`class ContactPage extends Page{
	
	createGui(){
		return a.createLayout(
			\`Contact\`,
			Rows.children(
				Text.text(\`If you need to contact me, just send me an email at:\`).left(),
				Columns.children(
					Box.width(5),
					Text.text(\`imaginary.email@internet.com\`),
				)
			)
		)
	}
	
}`,x:858,y:340},{id:4,folderId:1,code:`class BlogpostPage extends Page{
	
	id = 1
	
	createGui(){
		
		const blogpost = a.blogposts.find(b => b.id == p.id)
		
		return a.createLayout(
			blogpost.title,
			Rows.children(
				Text.text(\`Written \${blogpost.timeWritten.getDate()}\`),
				Text.text(blogpost.content).left(),
			)
		)
	}
	
}`,x:525,y:757}]}}}),{c(){p=o("h1"),p.textContent=L,b=D(),u=o("p"),u.textContent=R,v=D(),t=o("div"),X(i.$$.fragment),e=o("a"),e.textContent=W,k=o("pre"),P=new x(!1),r=o("pre"),B=new x(!1),g=o("pre"),T=new x(!1),m=o("pre"),C=new x(!1),d=o("pre"),S=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),I(p)!=="svelte-1dnfdr9"&&(p.textContent=L),b=Y(n),u=c(n,"P",{"data-svelte-h":!0}),I(u)!=="svelte-1m9ho7t"&&(u.textContent=R),v=Y(n),t=c(n,"DIV",{});var s=f(t);H(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),I(e)!=="svelte-w98nyk"&&(e.textContent=W),k=c(s,"PRE",{class:!0});var G=f(k);P=y(G,!1),G.forEach(a),r=c(s,"PRE",{class:!0});var j=f(r);B=y(j,!1),j.forEach(a),g=c(s,"PRE",{class:!0});var q=f(g);T=y(q,!1),q.forEach(a),m=c(s,"PRE",{class:!0});var E=f(m);C=y(E,!1),E.forEach(a),d=c(s,"PRE",{class:!0});var O=f(d);S=y(O,!1),O.forEach(a),s.forEach(a),this.h()},h(){l(e,"target","_blank"),l(e,"href","/editor#eNqtVgtr20gQ/itTUTgJ1CV2bdIKcr0m5YqhLeUSSI86oLW0lvYq7QppVMc1+u83eku269a04ATN7sxo5vvmoZ3Bk8RwdoanfWE4hhfxLIP329dJAuIRhfIzoOfdUi2x/FtFOkh0hhlcwef6FKXvwNSun1FiJBxw70MNns4jH0L+VcAXpTfqldsoeVqRZyS1Wx0LwFCqIAOpIJJrATwVkMk4ibaQYcpVIBjchULBRtTOMOxsMORYGqg/sFWG8iSKbFjlCP/lGUlJInja3aOGPNvzyRhzuwxicZ9KpAgduCOBZQLfcBTm9GI6s4F+k7lVKRc2DCCY7EHwGj6IDbyRmae/inT75DB7igBiXUYY82+UT51VHXRYRq0E+V2A3/gQPmQEWK2lxOYJvYGOG6AXIGMeSCUqVM7MaNJk9NAS7aWCNG6Rp/iRB8K0mkxTgXmqoLuorMZG7/hW52hWONjQpLtn/4/eZCzhvk+pmDOLeaGMfOLRrLWWeEfVx5D+me5HgZTku2dvXctur6/1IwuFDEI0J0dPL9jcYivufQlSnSv/Rkc6Nd1VRCfH3Uz7U1LOY5UdBrXE24R7wu7l6xxRqybQChTXorwIsA4hy/5J82vqrda6fD7L+IZg5l739kY87aK/6dGuWLNYJNZo9vcNiZ089vMrsE+OBUHZJNu0vIeOfCiL1bVqZWtQdoVR2MZaR75IM8P5vDOkbzgT21A8LidaxYNhG3q9prL/ZDjPLlvhXxIms4viwTZK0EbWtcNFLYyGY0dsNyBLYTfugbe53G8Zzkbt0Wbt3ovIo67u5sMSq+Y4UnwDgBqjcpjF2/KXUPZa8Ygm2iqTSO4OSDyKnW08Uoovp7axNZzns2lh1xBMT0HQVudvQqAq/HOy/1uICNapqPInl361E57uOOv2EyWvAgwL6DfWol4fm3oUQkgDlR2itMShl5gnZtKEfd2c3ug40aqcaSeQbWE4MDJb5y04I4iGPd0qsqYnu8FQHpaIM+n3StK3rN7hmN/59MU+v89P8TuYHr+J4nY8ncPyYg3khBYd7T3U1SIhFxDTUqlWZEZxkQRcgYi5jGjzO8f4PDHO61G0kT6G5nxoMwqk3qs83bLqPX9JGoapEsioBd2hlfXjVnsxb6m4aKmY/ajVWr6PcyF9+habfJ+Z7quDIGurhSyGVb6WiioJrv6EFSvdXUFS1tOR+vwOv+NSPWuQNd34dDfw0X2vsKD5UrGKEdC9g86q/c74+ak3n84rKi7nl8VD8T8e3/rz"),l(e,"title","Open in our Online Editor"),P.a=null,l(k,"class","language-js"),B.a=null,l(r,"class","language-js"),T.a=null,l(g,"class","language-js"),C.a=null,l(m,"class","language-js"),S.a=null,l(d,"class","language-js")},m(n,s){w(n,p,s),w(n,b,s),w(n,u,s),w(n,v,s),w(n,t,s),z(i,t,null),h(t,e),h(t,k),P.m(V,k),h(t,r),B.m(M,r),h(t,g),T.m(Z,g),h(t,m),C.m(A,m),h(t,d),S.m(U,d),_=!0},p:J,i(n){_||($(i.$$.fragment,n),_=!0)},o(n){nn(i.$$.fragment,n),_=!1},d(n){n&&(a(p),a(b),a(u),a(v),a(t)),sn(i)}}}class cn extends K{constructor(p){super(),Q(this,p,null,an,F,{})}}export{cn as component};
