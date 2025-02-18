import{s as dn,n as mn}from"../chunks/scheduler.B0TnBjPs.js";import{S as fn,i as hn,e,s as d,c as nn,H as tn,a as p,g as c,b as m,d as D,f as an,n as sn,h as a,o,j as s,p as E,m as en,t as pn,k as on,l as cn}from"../chunks/index.BXVnRmkj.js";import{V as ln}from"../chunks/ViewApp.qg7AIhJt.js";function gn(un){let u,N="<code>PaperFigure</code>",T,f,$='On this page you find the documentation for the configuration methods that all paper figures (<a href="/documentation/paper-circle/" title="Open the documentation for PaperCircle.">PaperCircle</a>, <a href="/documentation/paper-line/" title="Open the documentation for PaperLine.">PaperLine</a>, etc.) supports.',A,h,z="<code>backgroundColor()</code> - Setting the background color",S,g,Y="Use the configuration method <code>backgroundColor()</code> to tell the figure which background color it should have. Possible values:",O,C,I="<li>A string containing the name of a color in English, such as <code>`red`</code> or <code>`blue`</code></li>",L,l,x,J="Example",v,r,Z="Open in Online Editor",M,V,rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,U,b,F="<code>onClick()</code> - Handling clicks",Q,P,q="Use the configuration method <code>onClick()</code> to tell the paper figure which method to call when the user clicks on it. Pass it a reference to the method (e.g. <code>a.theMethodName</code> or <code>p.theMethodName</code>, depending on what you have named your method and if you wrote it in your <code>App</code> class or <code>Page</code> class).",j,i,_,G="Example",w,k,K="Open in Online Editor",y,B,kn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfCircleClicks <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Updater<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refreshText</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createText<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleCircleClick<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You have clicked the circle </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfCircleClicks<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> times.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleCircleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>numberOfCircleClicks <span class="token operator">+=</span> <span class="token number">1</span>
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">refreshText</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,R;return v=new ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	createGui(){\r
		return Rows.children(\r
			Space,\r
			Box.aspectRatio(1, 1).child(\r
				Paper.backgroundColor(\`blue\`).children(\r
					PaperCircle.backgroundColor(\`yellow\`),\r
				),\r
			),\r
			Space,\r
		)\r
	}\r
	\r
}`,x:150,y:200}]}}}),w=new ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{\r
	\r
	numberOfCircleClicks = 0\r
	\r
	createGui(){\r
		return Rows.children(\r
			Space,\r
			Updater.name(\`refreshText\`).childCreator(p.createText),\r
			Space,\r
			Box.aspectRatio(1, 1).child(\r
				Paper.backgroundColor(\`black\`).children(\r
					PaperCircle.backgroundColor(\`red\`).onClick(p.handleCircleClick),\r
				)\r
			)\r
		)\r
	}\r
	\r
	createText(){\r
		return Text.text(\`You have clicked the circle \${p.numberOfCircleClicks} times.\`)\r
	}\r
	\r
	handleCircleClick(){\r
		p.numberOfCircleClicks += 1\r
		runUpdater(\`refreshText\`)\r
	}\r
	\r
}`,x:150,y:200}]}}}),{c(){u=e("h1"),u.innerHTML=N,T=d(),f=e("p"),f.innerHTML=$,A=d(),h=e("h2"),h.innerHTML=z,S=d(),g=e("p"),g.innerHTML=Y,O=d(),C=e("ul"),C.innerHTML=I,L=d(),l=e("div"),x=e("div"),x.textContent=J,nn(v.$$.fragment),r=e("a"),r.textContent=Z,M=e("pre"),V=new tn(!1),U=d(),b=e("h2"),b.innerHTML=F,Q=d(),P=e("p"),P.innerHTML=q,j=d(),i=e("div"),_=e("div"),_.textContent=G,nn(w.$$.fragment),k=e("a"),k.textContent=K,y=e("pre"),B=new tn(!1),this.h()},l(n){u=p(n,"H1",{"data-svelte-h":!0}),c(u)!=="svelte-hqujh1"&&(u.innerHTML=N),T=m(n),f=p(n,"P",{"data-svelte-h":!0}),c(f)!=="svelte-1wey3tp"&&(f.innerHTML=$),A=m(n),h=p(n,"H2",{"data-svelte-h":!0}),c(h)!=="svelte-mnvq9c"&&(h.innerHTML=z),S=m(n),g=p(n,"P",{"data-svelte-h":!0}),c(g)!=="svelte-vxmkvg"&&(g.innerHTML=Y),O=m(n),C=p(n,"UL",{"data-svelte-h":!0}),c(C)!=="svelte-13pv4ta"&&(C.innerHTML=I),L=m(n),l=p(n,"DIV",{class:!0});var t=D(l);x=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(x)!=="svelte-1llzxwj"&&(x.textContent=J),an(v.$$.fragment,t),r=p(t,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(r)!=="svelte-uv6a40"&&(r.textContent=Z),M=p(t,"PRE",{class:!0});var X=D(M);V=sn(X,!1),X.forEach(a),t.forEach(a),U=m(n),b=p(n,"H2",{"data-svelte-h":!0}),c(b)!=="svelte-iimgs0"&&(b.innerHTML=F),Q=m(n),P=p(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1s6o7pe"&&(P.innerHTML=q),j=m(n),i=p(n,"DIV",{class:!0});var H=D(i);_=p(H,"DIV",{class:!0,"data-svelte-h":!0}),c(_)!=="svelte-1llzxwj"&&(_.textContent=G),an(w.$$.fragment,H),k=p(H,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(k)!=="svelte-164s528"&&(k.textContent=K),y=p(H,"PRE",{class:!0});var W=D(y);B=sn(W,!1),W.forEach(a),H.forEach(a),this.h()},h(){o(x,"class","remark-container__title"),o(r,"target","_blank"),o(r,"href","/editor#eNptkE1rhDAQhv+KzEkhiBZ68dbuofRQKLvHpmA2me5KQxImkVUk/726Uj9ob+87w8MzzADCOagGkFYhVCC18D5565+cS7ALaJRPxjxww4MkFAFPQVB4FxdMs/uUB8LQkkmWxTSN3ESIDNzYPVQfAzQKqpLBl9UK6XUuO+nCL+KpDJzuFloveGmbyU07+9HefC6vjVaEJv1d8nByQiJb+7PtcuEdynAUobFpyZIym8ENxcdDHFJ+FvL7QrY16mC1pbQ+6xbr7D/RAh0akhr/oj1qbW91xrbMtm3z/uxsDnH9RQQG3fjDx4JBD9VDUcTP+AOv4agV"),o(r,"title","Open in our Online Editor"),V.a=null,o(M,"class","language-js"),o(l,"class","remark-container tip"),o(_,"class","remark-container__title"),o(k,"target","_blank"),o(k,"href","/editor#eNp1kk9PgzAYxr9K03iASAiYeCHZQXcwHoxm04MRE7r23SBjbdMW3UL63W1hMibzQt4/fd/f06e0mEiJsxZTwQBnmNZEa/R0uJMSwd4AZxq5uM15bqgCYmBpiDIvZANB2FVzo8A0iqOh4as25xbbCEuXa5x9tLhiOEsjvBY1A/XYJ2fQYX4A+6TNVUfpvrzZrUA9r+eVojXM64puNZqhZHymV/nQVF6fOlO4EN86pmVVMwU8+G3mZikJheiUv0nmVqiYkx0EhYK1Al2+OlVF2I/PPUOoQMY9zffC6P+F92IfEy2BmgUxlQjSCKXHVSMZubu9dNgVoduNEg1nc1E7SrGqXeWXfS59mOotmc4qYG5S8M4sJ7gknDnrTgaOdecmPCVDeAzs1GV/76nNvhob3yreRYNK8gWIehQwZEoXd3B01cr40oNaZKod6Li4xJ3IH+Evr0PXM5QOCht+fNw/7zpBWRzhvftJb5MIH3B2kyT20/4AeJotRg=="),o(k,"title","Open in our Online Editor"),B.a=null,o(y,"class","language-js"),o(i,"class","remark-container tip")},m(n,t){s(n,u,t),s(n,T,t),s(n,f,t),s(n,A,t),s(n,h,t),s(n,S,t),s(n,g,t),s(n,O,t),s(n,C,t),s(n,L,t),s(n,l,t),E(l,x),en(v,l,null),E(l,r),E(l,M),V.m(rn,M),s(n,U,t),s(n,b,t),s(n,Q,t),s(n,P,t),s(n,j,t),s(n,i,t),E(i,_),en(w,i,null),E(i,k),E(i,y),B.m(kn,y),R=!0},p:mn,i(n){R||(pn(v.$$.fragment,n),pn(w.$$.fragment,n),R=!0)},o(n){on(v.$$.fragment,n),on(w.$$.fragment,n),R=!1},d(n){n&&(a(u),a(T),a(f),a(A),a(h),a(S),a(g),a(O),a(C),a(L),a(l),a(U),a(b),a(Q),a(P),a(j),a(i)),cn(v),cn(w)}}}class bn extends fn{constructor(u){super(),hn(this,u,null,gn,dn,{})}}export{bn as component};
