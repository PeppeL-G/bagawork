import{s as U,n as j}from"../chunks/scheduler.B0TnBjPs.js";import{S as V,i as q,e as i,s as P,c as z,H,a as k,g as x,b as A,d as M,f as F,n as L,h as e,o as r,j as d,m as R,p as b,t as D,k as E,l as O}from"../chunks/index.BXVnRmkj.js";import{V as B}from"../chunks/ViewApp.DfUK9ae4.js";function W(G){let a,y="Modal",g,o,v='This example shows how to create an app showing/hiding a <a href="https://m3.material.io/components/dialogs/overview" rel="nofollow" target="_blank">Modal</a>/Dialog.',m,t,c,p,C="Open in Online Editor",l,f,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Help</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sizeMm</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Here comes a long descriptive text helping you...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Space<span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Close</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Space<span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">aliceblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			helpModal<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,u,h,T=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Need help?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>showHelpModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w;return c=new B({props:{project:{app:{code:`class MyApp extends App{
	
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
			Rows.padding(4).backgroundColor(\`white\`).cornerRadius(5).children(
				Text.text(\`Help\`).font(Font.bold().sizeMm(5)),
				Text.text(\`Here comes a long descriptive text helping you...\`).left(),
				Space,
				Columns.children(
					Space,
					Button.text(\`Close\`).onClick(a.closeModal),
					Space,
				),
			),
		)
		
		return Layers.backgroundColor(\`aliceblue\`).children(
			pageContent.padding(2),
			helpModal,
		)
		
	}
	
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return a.createLayout(
			Rows.children(
				Text.text(\`Need help?\`),
				Button.text(\`Yes\`).onClick(a.showHelpModal),
			)
		)
	}
}`,x:1,y:208}]}}}),{c(){a=i("h1"),a.textContent=y,g=P(),o=i("p"),o.innerHTML=v,m=P(),t=i("div"),z(c.$$.fragment),p=i("a"),p.textContent=C,l=i("pre"),f=new H(!1),u=i("pre"),h=new H(!1),this.h()},l(n){a=k(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-1cf6ib1"&&(a.textContent=y),g=A(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1mdlv20"&&(o.innerHTML=v),m=A(n),t=k(n,"DIV",{});var s=M(t);F(c.$$.fragment,s),p=k(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-1mnedz4"&&(p.textContent=C),l=k(s,"PRE",{class:!0});var _=M(l);f=L(_,!1),_.forEach(e),u=k(s,"PRE",{class:!0});var S=M(u);h=L(S,!1),S.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp9VO9r2zAQ/VeE9sUGI7rS0s0wyhrYWljGaPdhZSlYkc6xiSMZSV6SGf/vPf+M3aQxWEiW3r2ne3cuKc9zGpZUaAk0pCLj1pL5/mueE9g5UNISnJcLtXD1axO9VXMteUa+kCjqPwsD3MGT48b94ivw/BbgDLjCKDJs1F+rcax7yPIm3ADhbMqR4IloghOZtnAe9AbQqPvB97pwXo4yZlrh1VyPbkehlXUk6QVhmDu9Y2uA/CH2pgS9LJ/lXMpUrbwbny25WK+MLpSc6UwbL/pw0z14TiRpJr2Ozj3qrR2gVyeg2yR1UMO0UWAeuUwL6113YQyoIdLC/UabmMPBi+5bTTHezvuGA1tqJPWZTf/DfIN4P3gHZ4AIvQFLOMm0WhEJVpg0d+k/IPWZJi0olmAKGWNIkkHsvHG8p5wLGK3xJsVG2VOSjw8v3F3hnFadoFntMJJoNctSscbsHzz3g3OBDrv9zB973NUjlgIYe5x2jmywzAqITqR6VDiDd5cHvqFwjnm7QqxoFdAYLUFuGv4taSpp+DGgim/q1muahAZUx7EF9we3Pl/3q2caXl1ULwGtRUzAbbyHdjFp4qHphkauF+WhIb4X6dtGxUSPe2VSr+dr7yeAbKrkNho7NLH1GezE1MkPYOTcKIFVnbaA7prr7Wl4efGpeqleASpktmM="),r(p,"title","Open in our Online Editor"),f.a=null,r(l,"class","language-js"),h.a=null,r(u,"class","language-js")},m(n,s){d(n,a,s),d(n,g,s),d(n,o,s),d(n,m,s),d(n,t,s),R(c,t,null),b(t,p),b(t,l),f.m(I,l),b(t,u),h.m(T,u),w=!0},p:j,i(n){w||(D(c.$$.fragment,n),w=!0)},o(n){E(c.$$.fragment,n),w=!1},d(n){n&&(e(a),e(g),e(o),e(m),e(t)),O(c)}}}class Z extends V{constructor(a){super(),q(this,a,null,W,U,{})}}export{Z as component};
