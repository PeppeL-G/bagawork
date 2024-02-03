import{s as D,n as G}from"../chunks/scheduler.UQwd20JU.js";import{S as L,i as Y,e as o,s as M,c as Z,H as b,a as l,g as h,b as P,d as T,f as Q,n as N,h as n,o as x,j as p,p as w,m as W,t as F,k as q,l as R}from"../chunks/index.i__Fl8cY.js";import{V as X}from"../chunks/ViewApp.m6vzcyjb.js";function $(z){let a,E="<code>Space</code>",k,r,A="On this page you find the documentation for the GUI Component <code>Space</code>.",v,i,I="Introduction",_,u,O='The <code>Space</code> component is a view whose sole purpose is to occupy space on the screen, so other children in <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> and <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> layouts are positioned where they should.',S,c,d,V="Example",m,g,s,U="Open in Online Editor",f,C,B=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">green</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,y;return g=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Space.backgroundColor(\`green\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){a=o("h1"),a.innerHTML=E,k=M(),r=o("p"),r.innerHTML=A,v=M(),i=o("h2"),i.textContent=I,_=M(),u=o("p"),u.innerHTML=O,S=M(),c=o("div"),d=o("div"),d.textContent=V,m=o("div"),Z(g.$$.fragment),s=o("a"),s.textContent=U,f=o("pre"),C=new b(!1),this.h()},l(t){a=l(t,"H1",{"data-svelte-h":!0}),h(a)!=="svelte-t6479p"&&(a.innerHTML=E),k=P(t),r=l(t,"P",{"data-svelte-h":!0}),h(r)!=="svelte-dp5ug0"&&(r.innerHTML=A),v=P(t),i=l(t,"H2",{"data-svelte-h":!0}),h(i)!=="svelte-1ukekoe"&&(i.textContent=I),_=P(t),u=l(t,"P",{"data-svelte-h":!0}),h(u)!=="svelte-zl12g0"&&(u.innerHTML=O),S=P(t),c=l(t,"DIV",{class:!0});var e=T(c);d=l(e,"DIV",{class:!0,"data-svelte-h":!0}),h(d)!=="svelte-1llzxwj"&&(d.textContent=V),m=l(e,"DIV",{});var H=T(m);Q(g.$$.fragment,H),s=l(H,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),h(s)!=="svelte-828icc"&&(s.textContent=U),f=l(H,"PRE",{class:!0});var j=T(f);C=N(j,!1),j.forEach(n),H.forEach(n),e.forEach(n),this.h()},h(){x(d,"class","remark-container__title"),x(s,"target","_blank"),x(s,"href","/editor#eNrFUsFqg0AQ/ZVlLlUQMZZC8VJMKSWHltIG2tIE3OpoQsyu7K40Qfz3rjGx2TQJ9tSDMuPMm/fmjRXQooCggpgnCAHEOZWSPKzDoiC4UsgSSXRcTdhENU8skCp8UVSoJ5qhZbcVJVCVgpGu0HytW1ANtQMpzxMUEoKPCuYJBAMHGF02jBsIOMDTVKJ6g8Dbxe86rqcOFHqegWyHjdrEEN7xd+Kb5ED9fTn/pbugMbqfNF5kgpcsueU5F1aUCUQW2cYyDqwg8D2tcg3BpdcpHOOyyPV0Q6khLpSLURomZX5GIWdDTLn4MXaP+4z+Z/4l3Xg2zxOBzNoi1WYrZ5eNNaGr9MuKQoFkzUuy8ZGoGWVkcH0T2c5xpHajXLIjBIeNEzUsld5hS/PII9ttvLFYmee20xP2jrIfblexDZM4C1OF4piDza/Y3sY/uM0d05Aww/++zOuMqgvZHEcQzX76JoZjA++4YWbTVY8mv88k/8SkfYV/ucm0/gaax6UY"),x(s,"title","Open in our Online Editor"),C.a=null,x(f,"class","language-js"),x(c,"class","remark-container tip")},m(t,e){p(t,a,e),p(t,k,e),p(t,r,e),p(t,v,e),p(t,i,e),p(t,_,e),p(t,u,e),p(t,S,e),p(t,c,e),w(c,d),w(c,m),W(g,m,null),w(m,s),w(m,f),C.m(B,f),y=!0},p:G,i(t){y||(F(g.$$.fragment,t),y=!0)},o(t){q(g.$$.fragment,t),y=!1},d(t){t&&(n(a),n(k),n(r),n(v),n(i),n(_),n(u),n(S),n(c)),R(g)}}}class et extends L{constructor(a){super(),Y(this,a,null,$,D,{})}}export{et as component};
