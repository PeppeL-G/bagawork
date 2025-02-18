import{s as W,n as T}from"../chunks/scheduler.B0TnBjPs.js";import{S as O,i as R,e as i,s as P,c as Q,H as j,a as k,g as x,b as A,d as v,f as Z,n as H,h as e,o as r,j as m,m as K,p as w,t as N,k as q,l as F}from"../chunks/index.BXVnRmkj.js";import{V as I}from"../chunks/ViewApp.qg7AIhJt.js";function D(V){let a,C="Horizontal Scrolling",g,o,b="This example shows how to create an app with horizontal scrolling.",f,t,c,p,S="Open in Online Editor",u,d,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,l,y,E=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	categories <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Science Fiction</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">movieNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Star Wars 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Star Wars 2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Star Wars 3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Star Wars 4</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Comedy</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">movieNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Dumb &amp; Dumber</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Shrek 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ace Ventura</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Disney</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">movieNames</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The Lion King</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Aladin</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Pocahontas</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">]</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ShowyMovy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token operator">...</span>p<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">c</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">createCategoryComponent</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCategoryComponent</span><span class="token punctuation">(</span><span class="token parameter">category</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>category<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			<span class="token operator">...</span>category<span class="token punctuation">.</span>movieNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">n</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">createMovieComponent</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createMovieComponent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">silver</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,h;return c=new I({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	categories = [{
		name: \`Science Fiction\`,
		movieNames: [\`Star Wars 1\`, \`Star Wars 2\`, \`Star Wars 3\`, \`Star Wars 4\`],
	}, {
		name: \`Comedy\`,
		movieNames: [\`Dumb & Dumber\`, \`Shrek 1\`, \`Ace Ventura\`],
	}, {
		name: \`Disney\`,
		movieNames: [\`The Lion King\`, \`Aladin\`, \`Pocahontas\`],
	}]
	
	createGui(){
		return Rows.padding(4).children(
			Text.text(\`ShowyMovy!\`).font(Font.size(sw(10)).bold()),
			...p.categories.map(
				c => p.createCategoryComponent(c)
			)
		)
	}
	
	createCategoryComponent(category){
		return [
			Box.height(5),
			Text.text(category.name).left().font(Font.size(sw(8))),
			Columns.children(
			...category.movieNames.map(
				n => p.createMovieComponent(n),
			)),
		]
	}
	
	createMovieComponent(name){
		return Box.padding(3).width(sw(35)).aspectRatio(1, 1).child(
			Text.backgroundColor(\`silver\`).border(1, \`black\`).text(name).font(Font.size(sw(6))).padding(2)
		)
	}
	
}`,x:200,y:300}]}}}),{c(){a=i("h1"),a.textContent=C,g=P(),o=i("p"),o.textContent=b,f=P(),t=i("div"),Q(c.$$.fragment),p=i("a"),p.textContent=S,u=i("pre"),d=new j(!1),l=i("pre"),y=new j(!1),this.h()},l(n){a=k(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-14j6jan"&&(a.textContent=C),g=A(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-8fqi9i"&&(o.textContent=b),f=A(n),t=k(n,"DIV",{});var s=v(t);Z(c.$$.fragment,s),p=k(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-1yale13"&&(p.textContent=S),u=k(s,"PRE",{class:!0});var M=v(u);d=H(M,!1),M.forEach(e),l=k(s,"PRE",{class:!0});var _=v(l);y=H(_,!1),_.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp1VGtr2zAU/SuaPgwZjMijHcPQQZfSMbaM0pY9SAJWbMUWdSQjKQ83+L/vyo7tOE0/2Nbj3nPPOVfWAbM8x8EBRyrmOMBRxoxB0+I2zxHfWy5jg2B8mMu5dU+kObP8yTJtH1jCiVfvWM3tRkvUbrjVsk4qcenjlcpirg0OZgcsYhwMfSzZ2lWsUrCP1WpluP2Lg0Ez/gfjcuHjHPB6mTXY93rSI97Wb8m7ScceuCdKC27QDZodqTseAQqfIsFlxNG9iKxQMvTr3bXaCv4LQkyAZqHDR3+YNmgY+uhkOupPx/3pVbio4Eof9YtO1JrHxeVad5v1En1E7sN1hZdq/lIXvgWiv7kEz9l70HfCSP4O9HPK0U8QiX4ImVR4GYuFdKMHFbFUSctMA7zo9/7bRpx3/VHtDM1ZDBAJufJolIos1lySOmpun6Eb1MKLgAi1K6ZqW3wIPbqCQuQeXtSIV07MjgwHnkeX0F/ieX6TTinNadc7umZ5Cw200M0XBPsVu0kdVYCxuZLgEIm8JvQ48E7OZiPqQtpx5UzqrAH7qvY05SJJLbnumHZCm3zq2uHRjK8suST4s3cidKKyzVqatwaCAy1g18ozI+SpEVMX1cmRXZG23uKCEedpjnzfASe86fXYozsR29QJGV9D55jJeWQfGfxBZOij4fEs9A/CkkUviVYbGYNepUloRLaFI+4ar+HHdpnhMoMoWKrMrD18a94nMK8lM7rQ3xIulj0ORgO4VAocjAdwoZT/AUvew5w="),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),y.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),K(c,t,null),w(t,p),w(t,u),d.m(z,u),w(t,l),y.m(E,l),h=!0},p:T,i(n){h||(N(c.$$.fragment,n),h=!0)},o(n){q(c.$$.fragment,n),h=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),F(c)}}}class U extends O{constructor(a){super(),R(this,a,null,D,W,{})}}export{U as component};
