import{s as j,n as B}from"../chunks/scheduler.B0TnBjPs.js";import{S as A,i as N,e as i,s as H,c as E,H as Y,a as k,g as x,b as P,d as M,f as O,n as R,h as e,o as r,j as d,m as G,p as v,t as J,k as z,l as D}from"../chunks/index.CHfggXAQ.js";import{V as I}from"../chunks/ViewApp.6tllL5xD.js";function V(T){let s,C="Modal",g,o,y='This example shows how to create an app showing/hiding a <a href="https://m3.material.io/components/dialogs/overview" rel="nofollow" target="_blank">Modal</a>/Dialog.',m,t,c,p,_="Open in Online Editor",l,h,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Close</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Space<span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Layers<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">aliceblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			pageContent<span class="token punctuation">,</span>
			helpModal<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,u,f,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Need help?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>showHelpModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w;return c=new I({props:{project:{app:{code:`class MyApp extends App{
	
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
					Button.text(\`Close\`).onClick(a.closeModal),
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
				Button.text(\`Yes\`).onClick(a.showHelpModal),
			)
		)
	}
}`,x:1,y:208}],pageTemplates:[]}}}),{c(){s=i("h1"),s.textContent=C,g=H(),o=i("p"),o.innerHTML=y,m=H(),t=i("div"),E(c.$$.fragment),p=i("a"),p.textContent=_,l=i("pre"),h=new Y(!1),u=i("pre"),f=new Y(!1),this.h()},l(n){s=k(n,"H1",{"data-svelte-h":!0}),x(s)!=="svelte-1cf6ib1"&&(s.textContent=C),g=P(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1mdlv20"&&(o.innerHTML=y),m=P(n),t=k(n,"DIV",{});var a=M(t);O(c.$$.fragment,a),p=k(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-33nfp9"&&(p.textContent=_),l=k(a,"PRE",{class:!0});var b=M(l);h=R(b,!1),b.forEach(e),u=k(a,"PRE",{class:!0});var S=M(u);f=R(S,!1),S.forEach(e),a.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp9U2Fr2zAQ/StC+2KDMd1Y6WYYo82HtbCO0fbDylKwKp1jE0USkrwkBP/3nR3bsZo0BhvJunf39O7djjJjaLajXAugGeWSOUfut9fGENh4UMIRXO/mau7b15V6re61YJJ8I3k+/OYWmIdHz6z/zRYQxXuAt+Brq8h40P5tprluQZou3QhhaVijxIg8wHGpHZwHvQF07H6yra59ZJDGTCu8mh/Q+y/XynlSDoQwzY3epEsAc1dEYYGBVpwaJkSlFtFVnL4yvlxYXSsx01LbKP9w1T8Yx8tKiqgv5x/02h3Hr8vKQxurrQL7wERVu+iyx1pQI3zun7A3qcdPlN92RJLD2aNhHJJ3Yi0QrlfgCCNSqwUR4LitjK/+AWljuvvjhQhqlaYpspFQ+OhcfmRfr5Q7RfM4eO5vau+16gnN2lZiEa1msuJLlPnQ3Dg5l+hwOqziaTN742HPwZ6QmmE1eJU15CfknThkLDLa4rhYb7OGNgkttBRYkGZ/d7QSNPuYUMVW7WB1I0ATqovCgf+DR18vh90zzT5fNC8JbSsH4H2+u/0mGNFxpMYxbTe7g91/1NXbMUR1p5MQuPG8yX4BiM4a3wOrBb18Bhd0MhjvSbsmAjatbAnddNfb0uzTxZdBhidYGYlcWzlemv9hc7ML"),r(p,"title","Open in our Online Editor"),h.a=null,r(l,"class","language-js"),f.a=null,r(u,"class","language-js")},m(n,a){d(n,s,a),d(n,g,a),d(n,o,a),d(n,m,a),d(n,t,a),G(c,t,null),v(t,p),v(t,l),h.m(L,l),v(t,u),f.m(Q,u),w=!0},p:B,i(n){w||(J(c.$$.fragment,n),w=!0)},o(n){z(c.$$.fragment,n),w=!1},d(n){n&&(e(s),e(g),e(o),e(m),e(t)),D(c)}}}class Z extends A{constructor(s){super(),N(this,s,null,V,j,{})}}export{Z as component};
