import{s as G,n as H}from"../chunks/scheduler.UQwd20JU.js";import{S as M,i as D,e as i,s as P,c as N,H as A,a as k,g as $,b as B,d as S,f as K,n as y,h as e,o as r,j as x,m as R,p as w,t as X,k as q,l as z}from"../chunks/index.i__Fl8cY.js";import{V as I}from"../chunks/ViewApp.m6vzcyjb.js";function U(O){let a,T="Multiplication Table",m,o,v="This example shows how to create an app that shows the multiplication table for a number.",g,s,c,p,b="Open in Online Editor",u,d,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,l,f,E=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	x <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrement<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">0 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">0</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">1</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">2</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">3</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">4 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">4</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">5 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">5</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">6 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">6</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">7 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">7</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">8 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">8</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">9 * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">9</span> <span class="token operator">*</span> p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>x <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,h;return c=new I({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	x = 0\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Columns.children(\n				Space,\n				Button.text(`-`).handler(p.decrement),\n				Space,\n				Text.text(`${p.x}`),\n				Space,\n				Button.text(`+`).handler(p.increment),\n				Space,\n			),\n			Space,\n			Text.text(`0 * ${p.x} = ${0 * p.x}`),\n			Text.text(`1 * ${p.x} = ${1 * p.x}`),\n			Text.text(`2 * ${p.x} = ${2 * p.x}`),\n			Text.text(`3 * ${p.x} = ${3 * p.x}`),\n			Text.text(`4 * ${p.x} = ${4 * p.x}`),\n			Text.text(`5 * ${p.x} = ${5 * p.x}`),\n			Text.text(`6 * ${p.x} = ${6 * p.x}`),\n			Text.text(`7 * ${p.x} = ${7 * p.x}`),\n			Text.text(`8 * ${p.x} = ${8 * p.x}`),\n			Text.text(`9 * ${p.x} = ${9 * p.x}`),\n			Space,\n		)\n	}\n	\n	decrement(){\n		p.x -= 1\n	}\n	\n	increment(){\n		p.x += 1\n	}\n	\n}",x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){a=i("h1"),a.textContent=T,m=P(),o=i("p"),o.textContent=v,g=P(),s=i("div"),N(c.$$.fragment),p=i("a"),p.textContent=b,u=i("pre"),d=new A(!1),l=i("pre"),f=new A(!1),this.h()},l(n){a=k(n,"H1",{"data-svelte-h":!0}),$(a)!=="svelte-blq0zi"&&(a.textContent=T),m=B(n),o=k(n,"P",{"data-svelte-h":!0}),$(o)!=="svelte-1fwnabc"&&(o.textContent=v),g=B(n),s=k(n,"DIV",{});var t=S(s);K(c.$$.fragment,t),p=k(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),$(p)!=="svelte-1jrzj8e"&&(p.textContent=b),u=k(t,"PRE",{class:!0});var _=S(u);d=y(_,!1),_.forEach(e),l=k(t,"PRE",{class:!0});var C=S(l);f=y(C,!1),C.forEach(e),t.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrFlGFrnEAQhv/KsgSqjRH1cslFCMGUUvKhJSSBJtTAiY65I97usq70DvG/d42NcS7n9mg/9IOw6z7vzjjjOzVNhKBhTVOeAQ1pWiRlSb5uIiEIrBWwrCR6XccsVu2TSkgU3KpEquvkCSy7O1ESVCUZ6Q/at00namjj0JwXGciShj9qusxo6DuUJas24ouEOpTneQnqnobe6/pBr5tHhwp9H1J2l111G5R4H79Pvt302a/JOfHwp3ypltsfccN/lm66WBaZBGZ1R7G6FUkKzuvuEy+qFduBbYOxuqyU4sxVOiNrfjS33UXCsgKkJdwMdBIrYMp2xvV3WvhbfVALd93MTTSKdoiiLdkfo72d4PeDHDzykXR56GIe1O12K6kB7GPYN8IBhgMjPMHwxAgfY/jYCE8xPDXCJxg+McKnGD41wjMMz4zwGYbP3sPDftoDd8aq/wl7H2gpOTonPsL6vwdhhxhrtJHXNAw8beINDSdeb+A7WIlC+w0ZGXk3Kp+v8iirCoOBObuEnMu3uYNS/CdHD6oZSSAbXpGXMUOUdhDxZxfzMXP87Sz4xrU929pYrCqKvU39AOV+OntnuzmLcqXnwY4KtpO6602w1ZvPTEuiJ/jfnfm+SNSHsm2OJDr6eE9QxXxvd8EwNN0DCva5KRi5adyC5p48Nr8AHFC0MA=="),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),f.a=null,r(l,"class","language-js")},m(n,t){x(n,a,t),x(n,m,t),x(n,o,t),x(n,g,t),x(n,s,t),R(c,s,null),w(s,p),w(s,u),d.m(j,u),w(s,l),f.m(E,l),h=!0},p:H,i(n){h||(X(c.$$.fragment,n),h=!0)},o(n){q(c.$$.fragment,n),h=!1},d(n){n&&(e(a),e(m),e(o),e(g),e(s)),z(c)}}}class Z extends M{constructor(a){super(),D(this,a,null,U,G,{})}}export{Z as component};
