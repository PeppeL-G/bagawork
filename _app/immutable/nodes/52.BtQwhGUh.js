import{s as M,n as Q}from"../chunks/scheduler.B0TnBjPs.js";import{S as J,i as N,e as o,s as L,c as X,H as x,a as c,g as _,b as q,d as f,f as Y,n as b,h as t,o as u,j as y,m as U,p as h,t as $,k as nn,l as sn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.qg7AIhJt.js";function tn(D){let p,j="Personal Website",w,l,A="This example shows how to create an app that functions as a personal website.",P,a,i,e,F="Open in Online Editor",k,v,E=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter L-G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">italic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,C,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to my personal website!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,B,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,S,O=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">If you need to contact me, just send me an email at:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">imaginary.email@internet.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,W,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogpostPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,T;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`Peter L-G\`).font(Font.size(sw(15)).italic()),
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
				Text.text(\`Welcome to my personal website!\`).left(),
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
	
}`,x:525,y:757}]}}}),{c(){p=o("h1"),p.textContent=j,w=L(),l=o("p"),l.textContent=A,P=L(),a=o("div"),X(i.$$.fragment),e=o("a"),e.textContent=F,k=o("pre"),v=new x(!1),r=o("pre"),C=new x(!1),g=o("pre"),B=new x(!1),m=o("pre"),S=new x(!1),d=o("pre"),W=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),_(p)!=="svelte-1dnfdr9"&&(p.textContent=j),w=q(n),l=c(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-1m9ho7t"&&(l.textContent=A),P=q(n),a=c(n,"DIV",{});var s=f(a);Y(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(e)!=="svelte-4c6om3"&&(e.textContent=F),k=c(s,"PRE",{class:!0});var Z=f(k);v=b(Z,!1),Z.forEach(t),r=c(s,"PRE",{class:!0});var R=f(r);C=b(R,!1),R.forEach(t),g=c(s,"PRE",{class:!0});var z=f(g);B=b(z,!1),z.forEach(t),m=c(s,"PRE",{class:!0});var G=f(m);S=b(G,!1),G.forEach(t),d=c(s,"PRE",{class:!0});var I=f(d);W=b(I,!1),I.forEach(t),s.forEach(t),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNqtVg1v2zYQ/StXocAkQCVixV46AenWpGhhoC2KJUA2xAFES7TFVSIFkarjGv7vO33Rkq24MVr4AyLFO/K9u3u8jUWzzPI3VigjZvlWmFCl4NP6bZYBe9RMRArweTMTM13+5olcZlJpBZdwX89qHvngufWz5jphPgR3sYRQFkkEMf3G4KuQK/Fn0CwKpUDPGpfdyJSBjrlYKuACEr5gQHMGiqdZsgalcyqWjMBtzASsWO1Mx8ZGx1SXBuI33S6GciZJXJgXGv4rFI6yjNHcvNcSCrXnkxASGAQpu8u5xhP6cIsDoph+RzWzvTNv7AJ+RxOnWrx1oUPBaI+Ct/CZreAdV6H8xvL1i0P0eAJIZXnClH5HPDWq+tBxeWrB0O8UosYHi0AhYfUqwVYvcAecboieAk/pkgtWsXIiolGD6KENdJgzXHGjaa6/0CWznQZpznSRCzAvKqu+0Ue6loW2Kx5caODu2f8tV4pkNIoQij12SBjzJMI42vWqmb7F7CMa/+zgC9MI8uOrD4FDFujNfo9/RPHvzFYrG4PhEK5pwkPbcdzW/ko+kpjxZazt0eDsGZk4ZE7Dr8tcFiK6lonM7WCe4EwwaODtZnFxkQp1eOqZvsloyNzd+KrQWooGScUaoshKRg2FjvtM8yssvta6fD7J+BpJo6HZvRked/EjHk6mcxfVKjsckrCFth2TCV43wnOZRPiuCvTvndA2GWWMzl0Iknze2aaP4meCPho6O3KZrfPyPZjchLKWAqde7HSqYmttXWuBUFiuLP9+Y/HI8keuJWhaCm6VBZZrycUCq/Ify3910Q7+xcFofLZ9cK0yZD3r2uG0HvS026SV0e9ysOmX6IeC71c0Jb3qbVEHdywJUXSMfM10VbsDqd8hqDEqtTZdQ4bQpaAJqu1ccY2+2sDvMm2IONd6RHx/eK61tvzzsbd1a/zeMfxtYfwi+FXNnQL9PWMJLHJWgUeXUXVfvdxQYu5OBC+WOt7C7jad1lfbqpZpiFHsySFLvdQcd+ePKNKhLjyNo/x0D5rSzM4aZq6a2WuZZlKUkt5z2R/tb3k00m1YDnaw25O0weqF7N7Ua0fnWgvSCIwRy3KyTAXCo90iHg1fGYbbh92+/bSceK/30/L8WFp29PYXZWYr6Kck53QB6AR7B2wltKzuZnQBKd7TVdeh8Fw4AiqApZQn2Ez5Q2nYcVk3HTRfk8riL47inAumCQpA0FP2Z5f860nL7VnL7fhHJd+Gd5hcHmG/OnqaatOZIQdtcqBFtxQWXGDiwOUbmJPS3SVkZfoM5OUTAetn5klq2qjCy03Hh+npyLLp5pxtr0EyPVEnBoMhNE7bVu35kZp4kypSF5OL7cP2fym/a6c="),u(e,"title","Open in our Online Editor"),v.a=null,u(k,"class","language-js"),C.a=null,u(r,"class","language-js"),B.a=null,u(g,"class","language-js"),S.a=null,u(m,"class","language-js"),W.a=null,u(d,"class","language-js")},m(n,s){y(n,p,s),y(n,w,s),y(n,l,s),y(n,P,s),y(n,a,s),U(i,a,null),h(a,e),h(a,k),v.m(E,k),h(a,r),C.m(H,r),h(a,g),B.m(K,g),h(a,m),S.m(O,m),h(a,d),W.m(V,d),T=!0},p:Q,i(n){T||($(i.$$.fragment,n),T=!0)},o(n){nn(i.$$.fragment,n),T=!1},d(n){n&&(t(p),t(w),t(l),t(P),t(a)),sn(i)}}}class cn extends J{constructor(p){super(),N(this,p,null,tn,M,{})}}export{cn as component};
