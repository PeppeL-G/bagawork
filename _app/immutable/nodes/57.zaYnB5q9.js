import{s as M,n as V}from"../chunks/scheduler.B0TnBjPs.js";import{S as F,i as O,e as i,s as z,c as W,H as T,a as r,g as x,b as A,d as C,f as X,n as N,h as e,o as k,j as m,m as E,p as v,t as D,k as R,l as G}from"../chunks/index.BXVnRmkj.js";import{V as I}from"../chunks/ViewApp.CB1BM1bD.js";function L(j){let a,w="Horixontal Scrolling",g,o,b="This example shows how to create an app with horizontal scrolling.",d,t,c,p,P="Open in Online Editor",l,f,B=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,u,y,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ShowyMovy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">sizeMm</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token operator">...</span>p<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">c</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">createCategoryComponent</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCategoryComponent</span><span class="token punctuation">(</span><span class="token parameter">category</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>category<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">sizeMm</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			<span class="token operator">...</span>category<span class="token punctuation">.</span>movieNames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">n</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">createMovieComponent</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createMovieComponent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">silver</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
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
			Text.text(\`ShowyMovy!\`).font(Font.sizeMm(6).bold()),
			...p.categories.map(
				c => p.createCategoryComponent(c)
			)
		)
	}
	
	createCategoryComponent(category){
		return [
			Box.height(5),
			Text.text(category.name).left().font(Font.sizeMm(5)),
			Columns.children(
			...category.movieNames.map(
				n => p.createMovieComponent(n),
			)),
		]
	}
	
	createMovieComponent(name){
		return Box.padding(3).width(25).aspectRatio(1, 1).child(
			Text.backgroundColor(\`silver\`).border(1, \`black\`).text(name)
		)
	}
	
}`,x:200,y:300}]}}}),{c(){a=i("h1"),a.textContent=w,g=z(),o=i("p"),o.textContent=b,d=z(),t=i("div"),W(c.$$.fragment),p=i("a"),p.textContent=P,l=i("pre"),f=new T(!1),u=i("pre"),y=new T(!1),this.h()},l(n){a=r(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-12q2rgl"&&(a.textContent=w),g=A(n),o=r(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-8fqi9i"&&(o.textContent=b),d=A(n),t=r(n,"DIV",{});var s=C(t);X(c.$$.fragment,s),p=r(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-5fwxnj"&&(p.textContent=P),l=r(s,"PRE",{class:!0});var S=C(l);f=N(S,!1),S.forEach(e),u=r(s,"PRE",{class:!0});var _=C(u);y=N(_,!1),_.forEach(e),s.forEach(e),this.h()},h(){k(p,"target","_blank"),k(p,"href","/editor#eNp1VGtvmzAU/SueP0xGQlYezT4gdVKXqtO0Zaraag8lkXDACVbBRrbzYBH/fdcQIKTpB8CPe8895x7jI2Z5joMjjlTMcYCjlBmDZsVdniN+sFzGBsH4uJAL655Ic2b5s2XaPrINJ169YzW3Wy1Ru+FWyzqpxKWP1yqNuTY4mB+xiHEw9LFkmatYpWAfq/XacPsHB4Nm/BfG5dLHOeD1Mmuwb/WkR7yt35J3k449cN8oLbhBt2h+ou54BCh8jgSXEUcPIrJCydCvdzO1E/wnhJgAzUOHj34zbdAw9NHZdNSfjvvTm3BZwZU+6hedqozHxfVa99tshT4i9+G6wks0f60L3wHRX1xCz9l70PfCSP4O9EvC0Q8Qib4LuanwUhYL6UaPKmKJkpaZBnjZ9/7rVly6/qT2huYsBogNufFolIg01lySOmphX8ANauFFQITaFzO1Kz6EHl1DIfIAL2rEPz7LyCePrsBc4nl+k0spzWlnHM1Y3uICJ3T7GcF+RW1aRxXQ1VxJaA+JvCb0NPDODmaj6EraaeVC57wB+6IONOFik1gy6Zh2Kpt86rzwaMrXllxROzmTOVXpNpPmbe9AfwvXuXjRBnnehpmL6sTIrkhbb3mlDZdpjnpfv5Pd2Dz26F7ENiGjiUeZyXlknxj8OGToo+HpCPT9X7HodaPVVsagVWkSGpHu4GQ7yzX8zy4zXKUQBUtVGysKb30r4bY44GA0gJuiwMF4ALdE+R/CPLYw"),k(p,"title","Open in our Online Editor"),f.a=null,k(l,"class","language-js"),y.a=null,k(u,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,d,s),m(n,t,s),E(c,t,null),v(t,p),v(t,l),f.m(B,l),v(t,u),y.m(H,u),h=!0},p:V,i(n){h||(D(c.$$.fragment,n),h=!0)},o(n){R(c.$$.fragment,n),h=!1},d(n){n&&(e(a),e(g),e(o),e(d),e(t)),G(c)}}}class J extends F{constructor(a){super(),O(this,a,null,L,M,{})}}export{J as component};
