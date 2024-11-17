import{s as V,n as J}from"../chunks/scheduler.B0TnBjPs.js";import{S as H,i as Q,e as o,s as I,c as N,H as x,a as c,g as j,b as Y,d as f,f as X,n as b,h as t,o as u,j as y,m as K,p as h,t as $,k as nn,l as sn}from"../chunks/index.Cnh3HYw3.js";import{V as an}from"../chunks/ViewApp.BajIxHdc.js";function tn(q){let p,R="Personal Website",w,l,W="This example shows how to create an app that functions as a personal website.",B,a,i,e,L="Open in Online Editor",k,P,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">italic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lrb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Copyright Peter L-G 2024</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,C,O=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to my my personal website!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,v,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blog</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Feel free to read the </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> blogposts I have written here.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Space<span class="token punctuation">,</span>
					Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createBlogpostComponent<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Space<span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createBlogpostComponent</span><span class="token punctuation">(</span><span class="token parameter">blogpost</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>BlogpostPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,S,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">If you need to contact me, just send me an email at:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">imaginary.email@internet.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,T,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogpostPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> blogpost <span class="token operator">=</span> a<span class="token punctuation">.</span>blogposts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">b</span> <span class="token operator">=></span> b<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			blogpost<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Written </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>blogpost<span class="token punctuation">.</span>timeWritten<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">italic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>content<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`Peter L-G\`).font(Font.size(8).italic()),
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
			Box.height(2),
			Box.height(0.5).backgroundColor(\`black\`),
			Text.text(title).left().padding(2).font(Font.bold().size(6)),
			content.padding(3, \`lrb\`),
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
				Box.height(4),
				Columns.children(
					Space,
					Rows.children(
						a.blogposts.map(p.createBlogpostComponent),
					),
					Space,
				),
			)
		)
	}
	
	createBlogpostComponent(blogpost){
		
		return [
			Button.text(blogpost.title).page(BlogpostPage.id(blogpost.id)),
			Box.height(4),
		]
		
	}
	
}`,x:528,y:342},{id:3,folderId:1,code:`class ContactPage extends Page{
	
	createGui(){
		return a.createLayout(
			\`Contact\`,
			Rows.children(
				Text.text(\`If you need to contact me, just send me an email at:\`).left(),
				Text.text(\`imaginary.email@internet.com\`).padding(2).left(),
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
				Text.text(\`Written \${blogpost.timeWritten.getDate()}\`).font(Font.italic()).padding(2),
				Text.text(blogpost.content).left(),
			)
		)
	}
	
}`,x:525,y:757}]}}}),{c(){p=o("h1"),p.textContent=R,w=I(),l=o("p"),l.textContent=W,B=I(),a=o("div"),N(i.$$.fragment),e=o("a"),e.textContent=L,k=o("pre"),P=new x(!1),r=o("pre"),C=new x(!1),g=o("pre"),v=new x(!1),m=o("pre"),S=new x(!1),d=o("pre"),T=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),j(p)!=="svelte-1dnfdr9"&&(p.textContent=R),w=Y(n),l=c(n,"P",{"data-svelte-h":!0}),j(l)!=="svelte-1m9ho7t"&&(l.textContent=W),B=Y(n),a=c(n,"DIV",{});var s=f(a);X(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),j(e)!=="svelte-1unqv7u"&&(e.textContent=L),k=c(s,"PRE",{class:!0});var G=f(k);P=b(G,!1),G.forEach(t),r=c(s,"PRE",{class:!0});var A=f(r);C=b(A,!1),A.forEach(t),g=c(s,"PRE",{class:!0});var E=f(g);v=b(E,!1),E.forEach(t),m=c(s,"PRE",{class:!0});var Z=f(m);S=b(Z,!1),Z.forEach(t),d=c(s,"PRE",{class:!0});var F=f(d);T=b(F,!1),F.forEach(t),s.forEach(t),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNqtVg1v2zYQ/StXocAkQCVixV4yAdnWpGhhoBuKJkA6xAFES7TFVSIFiarjGv7vO+qDlmzFjbHCHxAp3pH37t3jbSyaZZa/sUIZMcu3woQWBfy1fptlwJ4UE1EB+LyZiZnSv3kil5ksVAFX8FDPKh754Ln1s+IqYT4E97GEUJZJBDH9xuCrkCvxR9AsCqVAzwqX3cqUgYq5WBbABSR8wYDmDAqeZskaCpVTsWQE7mImYMVqZyo2NiqmShuIX1S7GPRMkrgwLxX8WxY4yjJGc/NeSSiLPZ+EkMBEkLL7nCs8oQ93OCAFU++oYrZ35o1dwO9o4lSLty50IBjtQfAW/mYreMeLUH5j+frVYfR4AkilPmFKv2M8dVT1oWN9asHQ7xSixgeLoEDA6lWCrV7hDjjdAD0FntIlF6xC5cSIRk1Ej22iw5zhiltFc/WJLpntNJHmTJW5APOisuobfaRrWSq7wsGFJtw9+89yVZCMRhGGYo8dEsY8iTCPdr1qpu6QfUThnx18YgqD/PjmQ+CQBXqz3+MfKfh3Zl86hCua8NB2HLc1vZZPJGZ8GSt7NDh7RiYOmdPw6zKXpYhuZCJzO5gnOBMMGni7WVxcpqI4PPBM3WY0ZO5ufF0qJUUTRAUYBpBpMA16jvtC82usu9ZaP59kfIN40dDs3gyPu/gRDifDuUtoRQyHJGyhbMeQwOsmdy6TCN9VOf61k9qGTMbo3IUgyeedbfpR/J+kj4bOjlhm61y/B0NL0GUUOPVip1MQW2vrWgsMheWF5T9sLB5Z/si1BE211lYssFxLLhZYkF8s/81FO/gHB6Px2fbRtXTKeta1w2k96Mm2oZWRbj3Y9KvzQ8n3i5mSXuG2UQf3LAlRb4xyzVRVtgPU7wDUGGmZTdf6m2H0UtAEtXZecIXu2tzvyDaEnWs9YYi/ea61tvzzsbd1awi8YxC0tfGTEKjK7pTo3zOWwCJnVfzoMqpuq9cbSszNicGLpYq3sLtLp/XFtqpFGmKUenKIUo+d4+78EVE6lIbn49Cf7kFTmtlZg8x1M3sj00wKLeg9l/3R/pZHM92m5WAHuz1Jm6xeyh5MyXakrrUgjcYYvdSTmgqER7tFPBq+NQy2j7t9+7SceJf7tDw/RsuO5P4kZraafgo5pwtAJ9g5YCOhZHUzowtI8Zaueo4Cz4UjoAJYSnmCrZQ/RMOOy7rloPmaVBZ/ctTnXDBFUAOCnri/uOQvJy22Zy224x+VfJveYXB5hN3q6HmoTV+GGLTkQItuKSy4QOLA1e8wJ9rdFWSaPgO8fCZhfWaeJKiNKrzedHyYjo4sm17O2fbaI9MWdXIwmELjtG3UXp6piTepMnUxudg+bv8Dq0trRA=="),u(e,"title","Open in our Online Editor"),P.a=null,u(k,"class","language-js"),C.a=null,u(r,"class","language-js"),v.a=null,u(g,"class","language-js"),S.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js")},m(n,s){y(n,p,s),y(n,w,s),y(n,l,s),y(n,B,s),y(n,a,s),K(i,a,null),h(a,e),h(a,k),P.m(D,k),h(a,r),C.m(O,r),h(a,g),v.m(M,g),h(a,m),S.m(U,m),h(a,d),T.m(z,d),_=!0},p:J,i(n){_||($(i.$$.fragment,n),_=!0)},o(n){nn(i.$$.fragment,n),_=!1},d(n){n&&(t(p),t(w),t(l),t(B),t(a)),sn(i)}}}class cn extends H{constructor(p){super(),Q(this,p,null,tn,V,{})}}export{cn as component};
