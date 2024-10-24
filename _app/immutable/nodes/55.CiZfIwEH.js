import{s as I,n as L}from"../chunks/scheduler.B0TnBjPs.js";import{S as N,i as V,e as i,s as R,c as T,H as P,a as k,g as x,b as j,d as C,f as O,n as E,h as e,o as r,j as g,m as G,p as v,t as Z,k as D,l as W}from"../chunks/index.Cnh3HYw3.js";import{V as Y}from"../chunks/ViewApp.9sx5twVU.js";function q(H){let s,M="Modal",d,o,b='This example shows how to create an app showing/hiding a <a href="https://m3.material.io/components/dialogs/overview" rel="nofollow" target="_blank">Modal</a>/Dialog.',m,t,c,p,y="Open in Online Editor",l,f,A=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,u,h,B=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Need help?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>showHelpModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w;return c=new Y({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:1,y:208}]}}}),{c(){s=i("h1"),s.textContent=M,d=R(),o=i("p"),o.innerHTML=b,m=R(),t=i("div"),T(c.$$.fragment),p=i("a"),p.textContent=y,l=i("pre"),f=new P(!1),u=i("pre"),h=new P(!1),this.h()},l(n){s=k(n,"H1",{"data-svelte-h":!0}),x(s)!=="svelte-1cf6ib1"&&(s.textContent=M),d=j(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1mdlv20"&&(o.innerHTML=b),m=j(n),t=k(n,"DIV",{});var a=C(t);O(c.$$.fragment,a),p=k(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-dg587p"&&(p.textContent=y),l=k(a,"PRE",{class:!0});var _=C(l);f=E(_,!1),_.forEach(e),u=k(a,"PRE",{class:!0});var S=C(u);h=E(S,!1),S.forEach(e),a.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp9U2Fr2zAQ/StC+2KDMe1Y6WYYo82HtbCO0e5Dy1KwKp1jE0US0nlJCP7vkx3bsZosBhvJunfv6e7djjJjaLajXAugGeWSOUcetjfGENggKOGIX+/mao7t60q9Vg9aMEm+kjwffnMLDOEJmcVfbAFRvAegBaytIuNB+7eZ5roDabp0I4SlIUfpI/IAx6V2cB70DtCp+8G2usbIeBkzrfzVcEDvv1wrh6QcBPk0t3qTLgHMfRGFBIOsODVMiEotous4fWN8ubC6VmKmpbZR/uG6f3wcLyspop4OH/XaHcevywqhjdVWgX1koqpddNVjLagRPsffvjcp+k+U33VCksPZk2Eckv/EWiBcr8ARRqRWCyLAcVsZrP4CaWO6+/sLEV+rNE29GgkFRufye/X1SrlTMo+D53hbI2rVC5q1rfQkWs1kxZe+zIfmxsm5RIfTYRVPm9kbz/cc7IlSM88Gb7KG/ER5Jw4ZSUZbHJP1Nmtok9BCS+EJafZnRytBs8uEKrZqB6sbAZpQXRQO8Nkffbkadi80+3TRvCa0ZQ7A+3z3+00wouNIjWPabnYHu3+vq/dj6Ks7nYTAjedN9hNAdNb4Flgt6OULuKCTwXhP2jUpYNOWLaGb7npbmn28+Ny8Nv8AVrasXQ=="),r(p,"title","Open in our Online Editor"),f.a=null,r(l,"class","language-js"),h.a=null,r(u,"class","language-js")},m(n,a){g(n,s,a),g(n,d,a),g(n,o,a),g(n,m,a),g(n,t,a),G(c,t,null),v(t,p),v(t,l),f.m(A,l),v(t,u),h.m(B,u),w=!0},p:L,i(n){w||(Z(c.$$.fragment,n),w=!0)},o(n){D(c.$$.fragment,n),w=!1},d(n){n&&(e(s),e(d),e(o),e(m),e(t)),W(c)}}}class $ extends N{constructor(s){super(),V(this,s,null,q,I,{})}}export{$ as component};
