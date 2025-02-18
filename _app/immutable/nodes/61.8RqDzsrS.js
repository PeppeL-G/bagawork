import{s as M,n as U}from"../chunks/scheduler.B0TnBjPs.js";import{S as V,i as J,e as o,s as E,c as X,H as D,a as c,g as B,b as I,d,f as q,n as v,h as t,o as i,j as f,m as K,p as w,t as Z,k as W,l as Y}from"../chunks/index.BXVnRmkj.js";import{V as Q}from"../chunks/ViewApp.qg7AIhJt.js";function $(N){let p,O="Navigation Drawer",h,u,H='This example shows how to create an app with a <a href="https://m3.material.io/components/navigation-drawer/overview" rel="nofollow" target="_blank">Navigation Drawer</a>.',x,a,l,e,A="Open in Online Editor",k,y,S=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> HomePage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">openDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">closeDrawer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>isDrawerOpen <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createLayout</span><span class="token punctuation">(</span><span class="token parameter">pageContent</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">let</span> drawerButton <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lr</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			drawerButton<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">←</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
			drawerButton<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">☰</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>openDrawer<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">const</span> topRow <span class="token operator">=</span> Columns<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				drawerButton<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sample App</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> drawer <span class="token operator">=</span> Columns<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">#77777777</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>HomePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AboutPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>closeDrawer<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ContactPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">skyblue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			topRow<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Layers<span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				pageContent<span class="token punctuation">,</span>
				drawer<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,C,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Home!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,g,b,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AboutPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">About!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,m,P,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Contact us!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_;return l=new Q({props:{project:{app:{code:`class MyApp extends App{
	
	isDrawerOpen = false
	
	createStartPage(){
		return HomePage
	}
	
	openDrawer(){
		a.isDrawerOpen = true
	}
	
	closeDrawer(){
		a.isDrawerOpen = false
	}
	
	createLayout(pageContent){
		
		let drawerButton = Button.font(Font.size(sw(5))).padding(0, \`lr\`)
		
		if(a.isDrawerOpen){
			drawerButton.text(\`←\`).onClick(a.closeDrawer)
		}else{
			drawerButton.text(\`☰\`).onClick(a.openDrawer)
		}
		
		const topRow = Columns.padding(1).children(
			Box.width(10).child(
				drawerButton,
			),
			Text.grow(1).text(\`Sample App\`).font(Font.size(sw(13)))
		)
		
		const drawer = Columns.keepIf(a.isDrawerOpen).backgroundColor(\`#77777777\`).children(
			Rows.backgroundColor(\`white\`).padding(2).children(
				Button.onClick(a.closeDrawer).text(\`Home\`).page(HomePage),
				Box.height(2),
				Button.onClick(a.closeDrawer).text(\`About\`).page(AboutPage),
				Box.height(2),
				Button.onClick(a.closeDrawer).text(\`Contact\`).page(ContactPage),
				Space,
			),
			Space,
		)
		
		return Rows.backgroundColor(\`skyblue\`).children(
			topRow,
			Box.height(1).backgroundColor(\`black\`),
			Layers.growShrink(1).children(
				pageContent,
				drawer,
			),
		)
	}
	
}`},folders:[{id:1,name:"Start",offsetX:195,offsetY:40}],pages:[{id:1,folderId:1,code:`class HomePage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Home!\`),
		)
	}
}`,x:1,y:152},{id:2,folderId:1,code:`class AboutPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`About!\`),
		)
	}
}`,x:249,y:387},{id:3,folderId:1,code:`class ContactPage extends Page{
	createGui(){
		return a.createLayout(
			Text.text(\`Contact us!\`),
		)
	}
}`,x:485,y:147}]}}}),{c(){p=o("h1"),p.textContent=O,h=E(),u=o("p"),u.innerHTML=H,x=E(),a=o("div"),X(l.$$.fragment),e=o("a"),e.textContent=A,k=o("pre"),y=new D(!1),r=o("pre"),C=new D(!1),g=o("pre"),b=new D(!1),m=o("pre"),P=new D(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),B(p)!=="svelte-1jyl3tf"&&(p.textContent=O),h=I(n),u=c(n,"P",{"data-svelte-h":!0}),B(u)!=="svelte-1q1arlh"&&(u.innerHTML=H),x=I(n),a=c(n,"DIV",{});var s=d(a);q(l.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),B(e)!=="svelte-zyksan"&&(e.textContent=A),k=c(s,"PRE",{class:!0});var R=d(k);y=v(R,!1),R.forEach(t),r=c(s,"PRE",{class:!0});var T=d(r);C=v(T,!1),T.forEach(t),g=c(s,"PRE",{class:!0});var j=d(g);b=v(j,!1),j.forEach(t),m=c(s,"PRE",{class:!0});var z=d(m);P=v(z,!1),z.forEach(t),s.forEach(t),this.h()},h(){i(e,"target","_blank"),i(e,"href","/editor#eNqtlN2Km0AUx1/FTm8URPJJdgO92E1pu9DSsulFS7PgRE+ixMzIzIhJg7e97mUfo8/UJ+nRUaOJm1JIIOLMeP7ndz7mHAiNYzI9EI/7QKbEi6iUxof9XRwbsFPAfGng+2HBFir/h/K1oCmIjzEw45WxopGE6swTQBXMFRXqE12DaWkrJUAlghnv+Bby/Xwzq2w46mjF+nPqnDhRImkbeRGX8C+rGi1r872ne54oM0aSGWcYoaok9DMCZfiF0H2iFM+l9Iuzws/NN/hwZPgdTJmaY8uynJj6fsjWZs823Ei4VlMsXJltsNqXavpwFObadP/8+OlaDmezKPQ2aNiIs1TNAIO6KPHrd0vimN9KoYnncSaVgUV45CnGOeNRsmWyjqhvOV4QRr4AZlY+7/nOSUNfBWa/Vx7XZ20iu9q26rfPyOisBU9zaQ08p9s4grzHkPs8w/0hplibW+fk2l2DfAMQP5zl3FlSb4NuE+bjh1yY7stJ+XM7QsRkyHOTNAgVuMdyDzosMT26GN01LEPOL0IhhHekuhTHHOkUBxCuA4VO7P/Tvltic1fixeKa6vmFoV6tXy5PPcxj6kFH9Zv7rWKWA6I773KzX0YJdBVKN67dbM0ysn5HzZcR7rhHHBwEIGTRjvNAhGzT2e8L1ZgU9mmnn0VpNSZORjKbrHjkoxsy/XYgoU+mfZswus1HbTEoiU34aiVBfcGj23G1+kqmo172ZJPcectY6z3oRWtoV61Uz+18cTgOvrdJeDqSscjNmdi6psdefeGeRpch9q4g2ONzPMhszTe4xFd341UBC9VnCQej24JxeDOpGIeXGBsdfVXKUtdI5LOoo5uxTudokj1lfwF3LsEw"),i(e,"title","Open in our Online Editor"),y.a=null,i(k,"class","language-js"),C.a=null,i(r,"class","language-js"),b.a=null,i(g,"class","language-js"),P.a=null,i(m,"class","language-js")},m(n,s){f(n,p,s),f(n,h,s),f(n,u,s),f(n,x,s),f(n,a,s),K(l,a,null),w(a,e),w(a,k),y.m(S,k),w(a,r),C.m(G,r),w(a,g),b.m(F,g),w(a,m),P.m(L,m),_=!0},p:U,i(n){_||(Z(l.$$.fragment,n),_=!0)},o(n){W(l.$$.fragment,n),_=!1},d(n){n&&(t(p),t(h),t(u),t(x),t(a)),Y(l)}}}class tn extends V{constructor(p){super(),J(this,p,null,$,M,{})}}export{tn as component};
