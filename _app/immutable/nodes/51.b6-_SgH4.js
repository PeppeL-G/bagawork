import{s as O,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as Z,i as q,e as o,s as E,c as X,H as x,a as c,g as _,b as z,d as f,f as Q,n as b,h as t,o as u,j as y,m as J,p as h,t as $,k as nn,l as sn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.CB1BM1bD.js";function tn(V){let p,I="Personal Website",w,l,R="This example shows how to create an app that functions as a personal website.",B,a,i,e,j="Open in Online Editor",k,v,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">sizeMm</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">italic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sizeMm</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			content<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lrb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Copyright Peter L-G 2024</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,P,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to my my personal website!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,T,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,C,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">If you need to contact me, just send me an email at:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">imaginary.email@internet.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,S,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogpostPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,W;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`Peter L-G\`).font(Font.sizeMm(8).italic()),
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
			Text.text(title).left().padding(2).font(Font.bold().sizeMm(6)),
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
	
}`,x:525,y:757}]}}}),{c(){p=o("h1"),p.textContent=I,w=E(),l=o("p"),l.textContent=R,B=E(),a=o("div"),X(i.$$.fragment),e=o("a"),e.textContent=j,k=o("pre"),v=new x(!1),r=o("pre"),P=new x(!1),g=o("pre"),T=new x(!1),m=o("pre"),C=new x(!1),d=o("pre"),S=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),_(p)!=="svelte-1dnfdr9"&&(p.textContent=I),w=z(n),l=c(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-1m9ho7t"&&(l.textContent=R),B=z(n),a=c(n,"DIV",{});var s=f(a);Q(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(e)!=="svelte-3hznjt"&&(e.textContent=j),k=c(s,"PRE",{class:!0});var G=f(k);v=b(G,!1),G.forEach(t),r=c(s,"PRE",{class:!0});var M=f(r);P=b(M,!1),M.forEach(t),g=c(s,"PRE",{class:!0});var N=f(g);T=b(N,!1),N.forEach(t),m=c(s,"PRE",{class:!0});var F=f(m);C=b(F,!1),F.forEach(t),d=c(s,"PRE",{class:!0});var A=f(d);S=b(A,!1),A.forEach(t),s.forEach(t),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNqtVg1v2zYQ/StXocAkQCVixV4yAdnWpGhhoC2KJUA2xAFES7TFVSIFiarjGv7vO+qDlmzFjbHCHxAp3pH37t3jbSyaZZa/sUIZMcu3woQWBXxav80yYE+KiagAfN7MxEzp3zyRy0wWqoAreKhnFY988Nz6WXGVMB+C+1hCKMskgph+Y/BVyJX4I2gWhVKgZ4XLbmXKQMVcLAvgAhK+YEBzBgVPs2QNhcqpWDICdzETsGK1MxUbGxVTpQ3EL6pdDHomSVyYlwr+LQscZRmjuXmvJJTFnk9CSGAiSNl9zhWe0Ic7HJCCqXdUMds788Yu4Hc0carFWxc6EIz2IHgLn9kK3vEilN9Yvn51GD2eAFKpT5jS7xhPHVV96FifWjD0O4Wo8cEiKBCwepVgq1e4A043QE+Bp3TJBatQOTGiURPRY5voMGe44lbRXH2hS2Y7TaQ5U2UuwLyorPpGH+lalsqucHChCXfP/i+5KkhGowhDsccOCWOeRJhHu141U3fIPqLwzw6+MIVBfnzzIXDIAr3Z7/GPFPw7+5Talw7hiiY8tB3HbY2v5ROJGV/Gyh4Nzp6RiUPmNPy6zGUpohuZyNwO5gnOBIMG3m4WF5epKA6PPFO3GQ2Zuxtfl0pJ0YRRQYYhZBpOg5/jvtD8GiuvtdbPJxnfIGI0NLs3w+MufoTDyXDuUlpRwyEJWyjbMTTwuumdyyTCd02Wf+0ktyGUMTt3IUjyeWejfhz/J+2jodMjmtk61+/BUBN0KQVOvdjpFMXW2rrWAoNheWH5DxuLR5Y/ci1BU623FQ8s15KLBRbl35b/5qId/IOD0fhs++haOmk969rhtB70pNsQy8i3Hmz6Ffqh5PsFTUmveNuog3uWhKg5Rr1mqirdAfJ3AGqMtNSma/3NMHopaIJ6Oy+4Qndt9nd0G8LOtZ4wxN8811pb/vnY27o1BN4xCNrq+EkIVIV3SvTvGUtgkbMqfnQZVTfW6w0l5vbE4MVSxVvY3afT+nJb1UINMco9OUSpx85xd/6ILB2Kw/Nx6E/3oCnN7KxB5rqZvZFpJoUW9Z7L/mh/y6OZbtNysIPdnqRNVi9lD6ZkO2LXWpBGZYxi6klNBcKj3SIeDd8bBtvH3b59Wk68y31anh+jZUd0fxIzW1U/hZzTBaAT7B6wmVCyup3RBaR4U1d9R4HnwhFQASylPMF2yh+iYcdl3XbQfE0qiz856nMumCKoAUFP3l9c8peTFtuzFtvxj0q+Te8wuDzCjnX0PNSmN0MMWnKgRbcUFlwgceDqd5gT7e4KMk2fAV4+k7A+M08S1EYVXm86PkxXR5ZNP+dsey2SaYw6ORhMoXHaNmsvz9TEm1SZuphcbB+3/wF7KWy4"),u(e,"title","Open in our Online Editor"),v.a=null,u(k,"class","language-js"),P.a=null,u(r,"class","language-js"),T.a=null,u(g,"class","language-js"),C.a=null,u(m,"class","language-js"),S.a=null,u(d,"class","language-js")},m(n,s){y(n,p,s),y(n,w,s),y(n,l,s),y(n,B,s),y(n,a,s),J(i,a,null),h(a,e),h(a,k),v.m(L,k),h(a,r),P.m(D,r),h(a,g),T.m(U,g),h(a,m),C.m(H,m),h(a,d),S.m(K,d),W=!0},p:Y,i(n){W||($(i.$$.fragment,n),W=!0)},o(n){nn(i.$$.fragment,n),W=!1},d(n){n&&(t(p),t(w),t(l),t(B),t(a)),sn(i)}}}class cn extends Z{constructor(p){super(),q(this,p,null,tn,O,{})}}export{cn as component};
