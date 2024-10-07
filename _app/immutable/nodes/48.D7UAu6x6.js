import{s as O,n as V}from"../chunks/scheduler.B0TnBjPs.js";import{S as U,i as X,e as o,s as z,c as H,H as x,a as c,g as W,b as F,d as f,f as Y,n as y,h as a,o as l,j as b,m as $,p as h,t as Z,k as nn,l as tn}from"../chunks/index.CHfggXAQ.js";import{V as sn}from"../chunks/ViewApp.6tllL5xD.js";function an(N){let p,_="Personal Website",w,u,j="This example shows how to create an app that functions as a personal website.",v,s,i,e,G="Open in Online Editor",k,P,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,T,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Welcome to my my personal website!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,B,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,d,I,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BlogpostPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,S;return i=new sn({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:525,y:757}],pageTemplates:[{id:1,code:`class NewPage extends Page{
	
	createGui(){
		return a.createLayout(
			\`Title\`,
			Rows.children(
				Text.text(\`Page content...\`).left(),
			)
		)
	}
	
}`}]}}}),{c(){p=o("h1"),p.textContent=_,w=z(),u=o("p"),u.textContent=j,v=z(),s=o("div"),H(i.$$.fragment),e=o("a"),e.textContent=G,k=o("pre"),P=new x(!1),r=o("pre"),T=new x(!1),g=o("pre"),B=new x(!1),m=o("pre"),C=new x(!1),d=o("pre"),I=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),W(p)!=="svelte-1dnfdr9"&&(p.textContent=_),w=F(n),u=c(n,"P",{"data-svelte-h":!0}),W(u)!=="svelte-1m9ho7t"&&(u.textContent=j),v=F(n),s=c(n,"DIV",{});var t=f(s);Y(i.$$.fragment,t),e=c(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),W(e)!=="svelte-13efnu6"&&(e.textContent=G),k=c(t,"PRE",{class:!0});var L=f(k);P=y(L,!1),L.forEach(a),r=c(t,"PRE",{class:!0});var E=f(r);T=y(E,!1),E.forEach(a),g=c(t,"PRE",{class:!0});var R=f(g);B=y(R,!1),R.forEach(a),m=c(t,"PRE",{class:!0});var q=f(m);C=y(q,!1),q.forEach(a),d=c(t,"PRE",{class:!0});var D=f(d);I=y(D,!1),D.forEach(a),t.forEach(a),this.h()},h(){l(e,"target","_blank"),l(e,"href","/editor#eNqtVgtr20gQ/itTUagE6hK7NmkFubZJuWJoj3IxpEcd0FpaW3uVdoU0quMz/u83q5cl23VjGnCCdndmdub75rEbi6ep5W2sQIfC8qwg5nkOn9fv0xTEAwoV5kDfm5maofmbx3qZ6hxzuIJv1S7K0IOhW32jxFh44N9FGgJdxCFE/IeA70qv1Fu/Fgq0IstIYrc6EYCRVMscpIJYLgTwTEAukzReQ44ZV0vBYBoJBStRGcOo1cGIo1FQL7ARBrMTxy7MC4R/i5xWaSp41p6jhiLfs8kY89sIEnGXSSQPPZjSguUCP3AU9vBiOHKBfoOxUwpvXehAMNiD4D38JVbwQeaB/iGy9bPD6MkDSLTxMOH/UTxVVJXTkfFaCbI7gbC2IULICbBKSonVM7qBtmugJyATvpRKlKicGdGgjui+ITrIBEncIs/wC18K26kjzQQWmYL2oNTqK33ia12gXeLgQh3unv7fepWzlIchhWKPHBZEMg6JR7uSmuGUso8h/bP9LwIpyE8vP/qO2xxf6wcWCbmM0B4c3b1gY4fNefB9melChTc61pntz2PaOW5muNsl4SJR+aFTM7xNeSDc3fq6QNSqdrQExXcoLgKsRchxH6l+TbXVaJvvs5RvCGYetLfXy9Mmdic7tEvWHBaLBdq785rEdt238zuwD445QdGk68ycQ0s+mGT1nUrY6aTd1tq61kLHochyy/u2sWRoeQPXUjwxHa3kwXItvVhQ2n+1vJeXzeIfWgxGF9t71zKg9bQrg5Nq0WuOLbFtgzSLTb8GPhZyv2Q465VHE7V/J+KAqrrtDzMsi+NI8nUAqpVMM0vW5pdS9FrxmDraPJdI5g5IPIqdaz1QiG+GrrW2vFej4datIBiegqDJzidCoEz8c6L/U4gYFpko4yeTYTkTnm84a+cTBa+WGG1hN7Em1fhYVa0QImqo7BClGXatJDy109rt63r3RiepVqannUC2geFAyW6MN+D0IOrWdCPI6ppsG4PZNIgzGe6EZOg4O4N9fsfD1/v8vjrFb6d7PBHFTXs6h+XJAsgIDTqae6jLQUImIKGhUo7InPyiFXAFIuEypsnvHePzRDuvWtFKhhjZ465Oz5FqrvJszcp73klqhpkSyKgE/a6W8+tSez1uqLhoqBj9qtQavo9zIUN6iw1+zkz76iDImmwhjW6WL6SiTIKrP2DOjLkrSE0+HcnPn/DbT9WzGlldjc83HRvte4Ut65eKs+0BvTPQajXvjMd3vfFwXFJxOb5sRsBU0LuT7uuNgh4f9KZ7wrKYGrjOKory8jpW88Z7XLzb++3/MrJM7g=="),l(e,"title","Open in our Online Editor"),P.a=null,l(k,"class","language-js"),T.a=null,l(r,"class","language-js"),B.a=null,l(g,"class","language-js"),C.a=null,l(m,"class","language-js"),I.a=null,l(d,"class","language-js")},m(n,t){b(n,p,t),b(n,w,t),b(n,u,t),b(n,v,t),b(n,s,t),$(i,s,null),h(s,e),h(s,k),P.m(Q,k),h(s,r),T.m(J,r),h(s,g),B.m(M,g),h(s,m),C.m(A,m),h(s,d),I.m(K,d),S=!0},p:V,i(n){S||(Z(i.$$.fragment,n),S=!0)},o(n){nn(i.$$.fragment,n),S=!1},d(n){n&&(a(p),a(w),a(u),a(v),a(s)),tn(i)}}}class cn extends U{constructor(p){super(),X(this,p,null,an,O,{})}}export{cn as component};
