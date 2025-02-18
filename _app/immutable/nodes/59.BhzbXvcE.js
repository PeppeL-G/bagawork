import{s as T,n as B}from"../chunks/scheduler.B0TnBjPs.js";import{S as z,i as D,e as i,s as S,c as J,H as P,a as k,g as x,b as L,d as C,f as Y,n as O,h as e,o as r,j as d,m as j,p as M,t as I,k as N,l as G}from"../chunks/index.BXVnRmkj.js";import{V as K}from"../chunks/ViewApp.qg7AIhJt.js";function q(A){let a,v="Modal",g,o,_='This example shows how to create an app showing/hiding a <a href="https://m3.material.io/components/dialogs/overview" rel="nofollow" target="_blank">Modal</a>/Dialog.',m,t,c,p,b="Open in Online Editor",l,f,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Help</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">bold</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,u,h,R=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">createLayout</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Need help?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>showHelpModal<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w;return c=new K({props:{project:{app:{code:`class MyApp extends App{
	
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
				Text.text(\`Help\`).font(Font.bold().size(10)),
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
}`,x:1,y:208}]}}}),{c(){a=i("h1"),a.textContent=v,g=S(),o=i("p"),o.innerHTML=_,m=S(),t=i("div"),J(c.$$.fragment),p=i("a"),p.textContent=b,l=i("pre"),f=new P(!1),u=i("pre"),h=new P(!1),this.h()},l(n){a=k(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-1cf6ib1"&&(a.textContent=v),g=L(n),o=k(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-1mdlv20"&&(o.innerHTML=_),m=L(n),t=k(n,"DIV",{});var s=C(t);Y(c.$$.fragment,s),p=k(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-ertr82"&&(p.textContent=b),l=k(s,"PRE",{class:!0});var y=C(l);f=O(y,!1),y.forEach(e),u=k(s,"PRE",{class:!0});var H=C(u);h=O(H,!1),H.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNp9U2tr2zAU/StC+yKDMWlp6WYYow1sLaxjtPuwshSsSNexiSMZSV6SGf/3XT9jN2kMFnqde67uuaekPM9pWFKhJdCQioxbSx73t3lOYOdASUtwXi7UwtW/TfRWPWrJM/KZRFG/LQxwB8+OG/eTr4B5LcAZcIVRZDiod6txrHvI8ibcAOHBlCPBG9EEJzJt4TzoDaDJ7jvf68KxHNOYa4VPcz26HYVW1pGkTwjD3OldsAbIH2I2JejT8oKcS5mqFbvxgiUX65XRhZJznWnDog833Yf3RJJmknV07klv7QC9OgHdJqmDGqaNAvPEZVpYdt2FMaCGSAv3C2UKHA4sum9zivF17CsOwVIjqRfY9B+wi5nn+e/ADBChN2AJJ5lWKyLBCpPmLv0LpL7TVAVzJVjBIAiQI4PYsXG855wLGK3xIcVG2VMZH19euLvCOa26hOa1wEii1TxLxRqLf5Dc888FOpz2M28scdeO2Alg7HHVObLBMisgOlHpUd8M0l0e+Ia+Oebt+rCilU9jVAS5afinpKmk4YVPFd/Uzms8Qn2q49iC+41Hn6771QsNr2bVq0/rJCbgNt5Du5h4ePDc4ON6UR788K1I3/oUCz22yqRdz7feDwDZdMmXaKzQRNYXsBNRJ/4fKTcqYFWXzae75nl7Gl7OPlav1X/pNLXV"),r(p,"title","Open in our Online Editor"),f.a=null,r(l,"class","language-js"),h.a=null,r(u,"class","language-js")},m(n,s){d(n,a,s),d(n,g,s),d(n,o,s),d(n,m,s),d(n,t,s),j(c,t,null),M(t,p),M(t,l),f.m(V,l),M(t,u),h.m(R,u),w=!0},p:B,i(n){w||(I(c.$$.fragment,n),w=!0)},o(n){N(c.$$.fragment,n),w=!1},d(n){n&&(e(a),e(g),e(o),e(m),e(t)),G(c)}}}class X extends z{constructor(a){super(),D(this,a,null,q,T,{})}}export{X as component};
