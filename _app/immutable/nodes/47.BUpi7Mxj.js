import{s as z,n as E}from"../chunks/scheduler.B0TnBjPs.js";import{S as M,i as R,e as i,s as b,c as G,H as y,a as k,g as h,b as B,d as S,f as O,n as A,h as o,o as r,j as x,m as W,p as T,t as Y,k as q,l as U}from"../chunks/index.CHfggXAQ.js";import{V}from"../chunks/ViewApp.6tllL5xD.js";function D(H){let a,v="Multiplication Table",m,e,w="This example shows how to create an app that shows the multiplication table for a number.",g,s,c,p,_="Open in Online Editor",u,f,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,l,d,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	x <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrement<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,$;return c=new V({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	x = 0\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Columns.children(\n				Space,\n				Button.text(`-`).onClick(p.decrement),\n				Space,\n				Text.text(`${p.x}`),\n				Space,\n				Button.text(`+`).onClick(p.increment),\n				Space,\n			),\n			Space,\n			Text.text(`0 * ${p.x} = ${0 * p.x}`),\n			Text.text(`1 * ${p.x} = ${1 * p.x}`),\n			Text.text(`2 * ${p.x} = ${2 * p.x}`),\n			Text.text(`3 * ${p.x} = ${3 * p.x}`),\n			Text.text(`4 * ${p.x} = ${4 * p.x}`),\n			Text.text(`5 * ${p.x} = ${5 * p.x}`),\n			Text.text(`6 * ${p.x} = ${6 * p.x}`),\n			Text.text(`7 * ${p.x} = ${7 * p.x}`),\n			Text.text(`8 * ${p.x} = ${8 * p.x}`),\n			Text.text(`9 * ${p.x} = ${9 * p.x}`),\n			Space,\n		)\n	}\n	\n	decrement(){\n		p.x -= 1\n	}\n	\n	increment(){\n		p.x += 1\n	}\n	\n}",x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){a=i("h1"),a.textContent=v,m=b(),e=i("p"),e.textContent=w,g=b(),s=i("div"),G(c.$$.fragment),p=i("a"),p.textContent=_,u=i("pre"),f=new y(!1),l=i("pre"),d=new y(!1),this.h()},l(n){a=k(n,"H1",{"data-svelte-h":!0}),h(a)!=="svelte-blq0zi"&&(a.textContent=v),m=B(n),e=k(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1fwnabc"&&(e.textContent=w),g=B(n),s=k(n,"DIV",{});var t=S(s);O(c.$$.fragment,t),p=k(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),h(p)!=="svelte-vv12vg"&&(p.textContent=_),u=k(t,"PRE",{class:!0});var C=S(u);f=A(C,!1),C.forEach(o),l=k(t,"PRE",{class:!0});var P=S(l);d=A(P,!1),P.forEach(o),t.forEach(o),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrFlG9rnEAQxr/KsgSqjRH1cslFCMWEUvKipTSBNtTAiY45yd6urCu9Q/zuXWNjnOu5PdoXfSHsn9+zMzvjsw1NypKGDU1FBjSkKUuqinzcRmVJYKOAZxXR4ybmseq+VEKi4FYlUn1OHsGy+x0lQdWSk2GjW217UUtbh+aCZSArGn5vaJHR0HcoT9ZdxGcJdajI8wrUNxp6L+N7PW4fHFrq85CyP+ymn6DEh/hD8t1kyH5DLomHr/KhLnYv8UX8qNx0VbBMArf6rVjdlkkKzsvsWrB6zfdgu2CsrmqlBHeVzshanixtV/BrVqRPVulmoJNYA1e2M62/08Jf6qOmdDft0kSjaMcoWsH/GO11B6+PcvDIW9LnoYt51HTTnaRGsI9h3wgHGA6M8AzDMyN8iuFTIzzH8NwIn2H4zAifY/jcCC8wvDDCFxi++B0e99MeuTNWw084+EBLyckl8RE2/D0IO8ZYq428oWHgaRNvaTjzBgPfwbpk2m/IyMi7UfV0k0dZzQwGFvwKciFf3x2U4j85elTNSALZipo8PzNErRJO/MW75ZQ5/vYt+CS0PbvaWLxm7GBT30N1mM7e227Bo1yB3FfB7qXuexPs9OY915LoEf53Z76uEvWm6pojiY4+3RNUMd/bXzAMzQ+AgkNOCiZOmraguScP7U/aIrP6"),r(p,"title","Open in our Online Editor"),f.a=null,r(u,"class","language-js"),d.a=null,r(l,"class","language-js")},m(n,t){x(n,a,t),x(n,m,t),x(n,e,t),x(n,g,t),x(n,s,t),W(c,s,null),T(s,p),T(s,u),f.m(j,u),T(s,l),d.m(N,l),$=!0},p:E,i(n){$||(Y(c.$$.fragment,n),$=!0)},o(n){q(c.$$.fragment,n),$=!1},d(n){n&&(o(a),o(m),o(e),o(g),o(s)),U(c)}}}class Z extends M{constructor(a){super(),R(this,a,null,D,z,{})}}export{Z as component};
