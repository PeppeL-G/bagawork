import{s as R,n as E}from"../chunks/scheduler.UQwd20JU.js";import{S as B,i as G,e as i,s as S,c as O,H as T,a as k,g as x,b,d as v,f as K,n as A,h as e,o as r,j as d,m as N,p as M,t as Y,k as F,l as I}from"../chunks/index.i__Fl8cY.js";import{V as J}from"../chunks/ViewApp.m6vzcyjb.js";function U(L){let s,y="Modal",g,o,C='This example shows how to create an app showing/hiding a <a href="https://m3.material.io/components/dialogs/overview" rel="nofollow" target="_blank">Modal</a>/Dialog.',m,t,c,p,_="Open in Online Editor",l,h,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	shownModal <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">showHelpModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>shownModal <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">help</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">closeModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>shownModal <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> helpModal <span class="token operator">=</span> Box<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>shownModal <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">help</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#77777777</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Help</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here comes a long descriptive text helping you...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Space<span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Close</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Space<span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">aliceblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">,</span>
			helpModal<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,u,f,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Need help?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>showHelpModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w;return c=new J({props:{project:{app:{code:`class MyApp extends App{
	
	shownModal = \`\`
	
	createStartPage(){
		return StartPage
	}
	
	showHelpModal(){
		a.shownModal = \`help\`
	}
	
	closeModal(){
		a.shownModal = \`\`
	}
	
	createLayout(pageContent){
		
		const helpModal = Box.keepIf(a.shownModal == \`help\`).padding(7).backgroundColor(\`#77777777\`).child(
			Rows.backgroundColor(\`white\`).cornerRadius(5).children(
				Text.text(\`Help\`),
				Space,
				Text.text(\`Here comes a long descriptive text helping you...\`).left(),
				Space,
				Columns.children(
					Space,
					Button.text(\`Close\`).handler(a.closeModal),
					Space,
				),
			),
		)
		
		return Layers.backgroundColor(\`aliceblue\`).children(
			pageContent,
			helpModal,
		)
		
	}
	
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return a.createLayout(
			Rows.children(
				Text.text(\`Need help?\`),
				Button.text(\`Yes\`).handler(a.showHelpModal),
			)
		)
	}
}`,x:1,y:208}],pageTemplates:[]}}}),{c(){s=i("h1"),s.textContent=y,g=S(),o=i("p"),o.innerHTML=C,m=S(),t=i("div"),O(c.$$.fragment),p=i("a"),p.textContent=_,l=i("pre"),h=new T(!1),u=i("pre"),f=new T(!1),this.h()},l(n){s=k(n,"H1",{"data-svelte-h":!0}),x(s)!=="svelte-1cf6ib1"&&(s.textContent=y),g=b(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1mdlv20"&&(o.innerHTML=C),m=b(n),t=k(n,"DIV",{});var a=v(t);K(c.$$.fragment,a),p=k(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-557vzi"&&(p.textContent=_),l=k(a,"PRE",{class:!0});var H=v(l);h=A(H,!1),H.forEach(e),u=k(a,"PRE",{class:!0});var P=v(u);f=A(P,!1),P.forEach(e),a.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp9U2Fr2zAQ/StC+2KDMd1Y6WYYY82HtbCO0fbDylKwKp1jU0US0nlJMP7vkx3bsZosBhvJunf39O5dQ5kxNGso1wJoRrlkzpG73TdjCGwRlHDEr5ulWmL3ulJv1J0WTJIvJM/H39wCQ3hAZvEXW0EU7wFoAWuryHTQ/W3nuW5Amj7dBGFpWKP0EXmA41I7OA96A+jZ/WA7XWNkPI2FVv5qOKL3X66VQ1KOhHyaa71NXwHMbRGFBUZacWqYEJVaRVdx+sL468rqWomFltpG+bur4fFxvKykiIZyeK837jh+U1YIXay2Cuw9E1XtossBa0FN8CU++t6k6D9RftMTSQ5nD4ZxSP4Ta4FwvQZHGJFarYgAx21lsPoLpIvp7+8vRLxWaZp6NhIKjM7l9+zrtXKnaB4HL/G6RtRqILToWumLlEwJCdbLfGhunJxLdDgdV/G8mYPxfM/BnpCayYrDi6whPyHvzCFTkckWx8UGm7W0TWihpfAFafanoZWg2fuEKrbuBqsfAZpQXRQO8Lc/+nw57p5o9vGifU5oVzkA7/Pd7jfBiE4jNY1pt2kOdv9eV2/H0Ks7n4TAjedN9hNA9Nb4Glgt6OUTuKCTwXjP2jUTsO1kS+i2v96OZh8uPo0yPMLaSM+1k+O5/QejA7NB"),r(p,"title","Open in our Online Editor"),h.a=null,r(l,"class","language-js"),f.a=null,r(u,"class","language-js")},m(n,a){d(n,s,a),d(n,g,a),d(n,o,a),d(n,m,a),d(n,t,a),N(c,t,null),M(t,p),M(t,l),h.m(j,l),M(t,u),f.m(W,u),w=!0},p:E,i(n){w||(Y(c.$$.fragment,n),w=!0)},o(n){F(c.$$.fragment,n),w=!1},d(n){n&&(e(s),e(g),e(o),e(m),e(t)),I(c)}}}class V extends B{constructor(s){super(),G(this,s,null,U,R,{})}}export{V as component};
