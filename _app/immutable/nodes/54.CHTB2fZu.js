import{s as H,n as M}from"../chunks/scheduler.B0TnBjPs.js";import{S as I,i as W,e as i,s as V,c as z,H as A,a as r,g as v,b as N,d as x,f as D,n as T,h as e,o as k,j as m,m as E,p as b,t as F,k as K,l as O}from"../chunks/index.Cnh3HYw3.js";import{V as G}from"../chunks/ViewApp.9sx5twVU.js";function X(R){let a,w="Horixontal Scrolling",g,o,C="This example shows how to create an app with horizontal scrolling.",d,t,c,p,S="Open in Online Editor",l,f,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,u,h,B=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ShowyMovy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token operator">...</span>p<span class="token punctuation">.</span>categories<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">c</span> <span class="token operator">=></span> p<span class="token punctuation">.</span><span class="token function">createCategoryComponent</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCategoryComponent</span><span class="token punctuation">(</span><span class="token parameter">category</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>category<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,y;return c=new G({props:{project:{app:{code:`class MyApp extends App{
	
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
			Text.text(\`ShowyMovy!\`).font(Font.size(6).bold()),
			...p.categories.map(
				c => p.createCategoryComponent(c)
			)
		)
	}
	
	createCategoryComponent(category){
		return [
			Box.height(5),
			Text.text(category.name).left().font(Font.size(5)),
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
	
}`,x:200,y:300}]}}}),{c(){a=i("h1"),a.textContent=w,g=V(),o=i("p"),o.textContent=C,d=V(),t=i("div"),z(c.$$.fragment),p=i("a"),p.textContent=S,l=i("pre"),f=new A(!1),u=i("pre"),h=new A(!1),this.h()},l(n){a=r(n,"H1",{"data-svelte-h":!0}),v(a)!=="svelte-12q2rgl"&&(a.textContent=w),g=N(n),o=r(n,"P",{"data-svelte-h":!0}),v(o)!=="svelte-8fqi9i"&&(o.textContent=C),d=N(n),t=r(n,"DIV",{});var s=x(t);D(c.$$.fragment,s),p=r(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(p)!=="svelte-14utmnc"&&(p.textContent=S),l=r(s,"PRE",{class:!0});var P=x(l);f=T(P,!1),P.forEach(e),u=r(s,"PRE",{class:!0});var _=x(u);h=T(_,!1),_.forEach(e),s.forEach(e),this.h()},h(){k(p,"target","_blank"),k(p,"href","/editor#eNp1VF1r2zAU/SuaHoYMRuSj2YOhgy6lY2wZpS37IAlYsRVb1JaMpCTNgv/7ruzYjpP0Ic6VdO+559xj64BZUeDggCMVcxzgKGPGoNn+rigQf7NcxgZBfFjIhXW/SHNm+bNl2j6yhBOvPrGa242WqD1wu2VdVOLSx2uVxVwbHMwPWMQ4GPpYstx1rEqwj9V6bbj9g4NBE/+FuFz6uAC8XmUN9q1e9Ii3/VvybtGxB+6J0oIbdIvmR+qOR4DC50hwGXH0ICIrlAz9+jRXW8F/QooJ0Dx0+Og30wYNQx+dLEf95bi/vAmXFVzpo37Tqcp5vL/e636Tr9BH5P64rvBSzV/rxndA9BeXMHP2HvS9MJK/A/2ScvQDRKLvQiYVXsZiIV30qCKWKmmZaYCXfe+/bsS5609qZ2jBYoBIyI1Ho1RkseaS1FkL+wJuUAsPAiLUbj9T2/2H0KNraEQe4EGN+MfJJ4+uwFrieX5TSSktaGcbzVnRogIjdPsZwXlFbFpn7WGmhZIwHBJ5Teox8E5ey0bPlbLjzpnKeQP2Rb3RlIsktWTSMe00NvXUOeHRjK8tudA6ORE5Vdkml+ZybqC+BescPBuCPB3CzGV1UmTXpO23vDKE8zJHvK/eiW4sHnt0J2KbktHEo8wUPLJPDD4aMvTR8Gh/3/sVi14TrTYyBq1Kk9CIbAtvtTNcw7fsKsNVBlmwVQ2xonDpWgk3xRsORgO4JfY4GA/ghij/A+antLw="),k(p,"title","Open in our Online Editor"),f.a=null,k(l,"class","language-js"),h.a=null,k(u,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,d,s),m(n,t,s),E(c,t,null),b(t,p),b(t,l),f.m(j,l),b(t,u),h.m(B,u),y=!0},p:M,i(n){y||(F(c.$$.fragment,n),y=!0)},o(n){K(c.$$.fragment,n),y=!1},d(n){n&&(e(a),e(g),e(o),e(d),e(t)),O(c)}}}class L extends I{constructor(a){super(),W(this,a,null,X,H,{})}}export{L as component};
