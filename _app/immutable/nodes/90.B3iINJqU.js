import{s as yn,n as _n}from"../chunks/scheduler.B0TnBjPs.js";import{S as Tn,i as In,e as a,s as O,c as W,H as R,a as p,g,b as A,d,f as J,n as M,h as t,o as s,j as l,p as c,m as U,t as K,k as Y,l as nn}from"../chunks/index.BXVnRmkj.js";import{V as sn}from"../chunks/ViewApp.DfUK9ae4.js";function Pn(wn){let k,tn="8. Exercises",V,f,an="Way to go! Your first step towards becoming a programmer is now taken 😎",Z,w,pn="Below you have examples of apps you should be able to implement with what you have learned so far. Why don't you give it a try to implement them yourself from scratch? And don't just create copies of them, but try be creative and come up with your own apps, that is so much more fun!",Q,i,h,en="Multiplication Table Exercise",C,r,on="Open in Online Editor",_,q,hn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,z,u,v,cn="Counter Exercise",S,m,un="Open in Online Editor",T,G,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CounterPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,I,D,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">decrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">resetCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Reset</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>resetCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,F,o,$,ln="Power Point Presentation Exercise",b,x,kn="Open in Online Editor",P,X,Sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Slide1
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,B,H,$n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - I am Peter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - Born 1990</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> - Raised in Baremossö</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">==</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,E,L,bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Thank you for listening!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Any questions?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Slide2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,N;return C=new sn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	x = 0\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Columns.children(\n				Space,\n				Button.text(`-`).onClick(p.decrement),\n				Space,\n				Text.text(`${p.x}`),\n				Space,\n				Button.text(`+`).onClick(p.increment),\n				Space,\n			),\n			Space,\n			Text.text(`0 * ${p.x} = ${0 * p.x}`),\n			Text.text(`1 * ${p.x} = ${1 * p.x}`),\n			Text.text(`2 * ${p.x} = ${2 * p.x}`),\n			Text.text(`3 * ${p.x} = ${3 * p.x}`),\n			Text.text(`4 * ${p.x} = ${4 * p.x}`),\n			Text.text(`5 * ${p.x} = ${5 * p.x}`),\n			Text.text(`6 * ${p.x} = ${6 * p.x}`),\n			Text.text(`7 * ${p.x} = ${7 * p.x}`),\n			Text.text(`8 * ${p.x} = ${8 * p.x}`),\n			Text.text(`9 * ${p.x} = ${9 * p.x}`),\n			Space,\n		)\n	}\n	\n	decrement(){\n		p.x -= 1\n	}\n	\n	increment(){\n		p.x += 1\n	}\n	\n}",x:150,y:200}]}}}),S=new sn({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return CounterPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class CounterPage extends Page{
	
	counter = 0
	
	incrementCounter(){
		p.counter += 1
	}
	
	decrementCounter(){
		p.counter -= 1
	}
	
	resetCounter(){
		p.counter = 0
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.counter}\`).grow(1),
			Columns.grow(1).children(
				Rows.grow(1).children(
					Button.text(\`-\`).grow(1).onClick(p.decrementCounter),
					Button.text(\`Reset\`).grow(1).onClick(p.resetCounter),
				),
				Button.text(\`+\`).grow(1).onClick(p.incrementCounter),
			),
		)
	}
	
}`,x:150,y:200}]}}}),b=new sn({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return Slide1
	}
	
}`},pages:[{id:1,folderId:1,code:`class Slide1 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Text.text(\`Hello!\`),
			Space,
			Text.text(\` - I am Peter\`).left().showIf(2 <= p.counter),
			Text.text(\` - Born 1990\`).left().showIf(3 <= p.counter),
			Text.text(\` - Raised in Baremossö\`).left().showIf(4 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide1).keepIf(p.counter <= 3),
			Button.text(\`Next\`).page(Slide2).keepIf(4 == p.counter),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class Slide2 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Space,
			Text.text(\`Thank you for listening!\`),
			Space,
			Text.text(\`Any questions?\`).showIf(2 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide2).showIf(p.counter < 2),
		)
	}
	
}`,x:450,y:200}]}}}),{c(){k=a("h1"),k.textContent=tn,V=O(),f=a("p"),f.textContent=an,Z=O(),w=a("p"),w.textContent=pn,Q=O(),i=a("div"),h=a("div"),h.textContent=en,W(C.$$.fragment),r=a("a"),r.textContent=on,_=a("pre"),q=new R(!1),z=O(),u=a("div"),v=a("div"),v.textContent=cn,W(S.$$.fragment),m=a("a"),m.textContent=un,T=a("pre"),G=new R(!1),I=a("pre"),D=new R(!1),F=O(),o=a("div"),$=a("div"),$.textContent=ln,W(b.$$.fragment),x=a("a"),x.textContent=kn,P=a("pre"),X=new R(!1),B=a("pre"),H=new R(!1),E=a("pre"),L=new R(!1),this.h()},l(n){k=p(n,"H1",{"data-svelte-h":!0}),g(k)!=="svelte-1fw8dhh"&&(k.textContent=tn),V=A(n),f=p(n,"P",{"data-svelte-h":!0}),g(f)!=="svelte-1s5j6rv"&&(f.textContent=an),Z=A(n),w=p(n,"P",{"data-svelte-h":!0}),g(w)!=="svelte-6wjhr4"&&(w.textContent=pn),Q=A(n),i=p(n,"DIV",{class:!0});var e=d(i);h=p(e,"DIV",{class:!0,"data-svelte-h":!0}),g(h)!=="svelte-849ou9"&&(h.textContent=en),J(C.$$.fragment,e),r=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(r)!=="svelte-1gduarp"&&(r.textContent=on),_=p(e,"PRE",{class:!0});var rn=d(_);q=M(rn,!1),rn.forEach(t),e.forEach(t),z=A(n),u=p(n,"DIV",{class:!0});var j=d(u);v=p(j,"DIV",{class:!0,"data-svelte-h":!0}),g(v)!=="svelte-1wlxgx"&&(v.textContent=cn),J(S.$$.fragment,j),m=p(j,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(m)!=="svelte-17rglq4"&&(m.textContent=un),T=p(j,"PRE",{class:!0});var mn=d(T);G=M(mn,!1),mn.forEach(t),I=p(j,"PRE",{class:!0});var xn=d(I);D=M(xn,!1),xn.forEach(t),j.forEach(t),F=A(n),o=p(n,"DIV",{class:!0});var y=d(o);$=p(y,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-11llafs"&&($.textContent=ln),J(b.$$.fragment,y),x=p(y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(x)!=="svelte-34xxo3"&&(x.textContent=kn),P=p(y,"PRE",{class:!0});var gn=d(P);X=M(gn,!1),gn.forEach(t),B=p(y,"PRE",{class:!0});var dn=d(B);H=M(dn,!1),dn.forEach(t),E=p(y,"PRE",{class:!0});var fn=d(E);L=M(fn,!1),fn.forEach(t),y.forEach(t),this.h()},h(){s(h,"class","remark-container__title"),s(r,"target","_blank"),s(r,"href","/editor#eNqF081Og0AQAOBX2Ux6AEsJ9L8kPWgPxoOJsb2JSQmsSqTLBoZIQ/bd3UqLnarrgYSZ/SYzgZ0GIikhaCDOEw4BxFlUlux+fy0l4zVykZRMvzehCDEueIR8jVGBD9Ert+yvbIgFx6oQrDs4ZFUoFCgHpI5LCJ4aSBMIfAde8izhxV0bkKZdfdf4ELQ99FOzJfNOQTvKbZVeDvGYf5Ru/JZmScGF1R6FuJZRzJ1TtMqzaid+YZcwxJsKMRcu6oms7WBru7lYZWn8bkk34XqIHRdoO3/Xb3ThsbrXSLdWW5Mm3fqkWyr+7fZ9QvNnM3jsirVz6I/Zaw7hxVBn2KfYN+IhxUMjHlE8MuIxxWMjnlA8MeIpxVMjnlE8M+I5xXMjXlC8+InP/6d93K52D7pL2O2BLmWDJfMJ624PYX3KFDhQ67WceA7sIRh6nnpWn3B+akU="),s(r,"title","Open in our Online Editor"),q.a=null,s(_,"class","language-js"),s(i,"class","remark-container exercise"),s(v,"class","remark-container__title"),s(m,"target","_blank"),s(m,"href","/editor#eNqFUk1rwzAM/StG7JDQNCSDXQI9dDmMHQaj220ZNCRaF5baxlZoS/B/n7MkzUdLd7CRJb2n52fXkEoJUQ2ZyBEiyMpUa/ZyWkvJ8EjIc81sXCc8oWZlClPCN0oVvaY7dNy2QgqpUpzFouKEqik1edPCDBgPpM1piD5qKHKIQg++RJmjem4Pk/EjlrOI5jCoaBvYigV9quBW2h45deCzMun33YsVC0eqEsrxX8xyjlGo8UZ/p8hM/XqqirlTG3HQfvZdlLlC7rSlhN7tdX2ym7O9q8+sZuv6OyUOTuh6fWcsymrPdZ+/pErob8SNekKPFZHg3cDlMMUXPC6L7MeR/tyjQcEFwaax5irJ2LQxwTieUC2u0szfeID3kTv5dR4c7ed6CDw4QXQfBObT/ALZjBIF"),s(m,"title","Open in our Online Editor"),G.a=null,s(T,"class","language-js"),D.a=null,s(I,"class","language-js"),s(u,"class","remark-container exercise"),s($,"class","remark-container__title"),s(x,"target","_blank"),s(x,"href","/editor#eNrNkt9OwjAUxl/l2Ks1zmVMuGCRGLlRLjQEuBMTmvUgjaOtbRckZK/lC/hilkz+CSjeebFmbc/5zm/7vgVhWpN0QTLFkaQky5m1cD+/0RrwzaHkFvz7YiiHbvlkBpnDvmPGddkzBrS6cQZdYST0c8Gxtjwqq46SlCHRvtKS9HFBBCdpLSRjlXM0nWqzM7kSWI9eztjMVoV0aKAF8epIyTaOldlw6GhVdd6CbZAV+m0hvkP31MxGmnEu5HPQoFE2ETk3KIOqaugGHidyfglGd5jn6mxEw9VdX7MMwwOVcAEdYFPooqcZ0SjHsQtoZCdq1hkHCVy1YA1Ljwi0lcerNZvxXv/lSf09JixyEBLazOBUWfvxvidVPyK1+2Xtwvm//SX94Fevs/Q1qByj0Qui9mobA7zqJT2xP1n316F1gIbuRCokbz45jTgkc5ImcVyGVbKSX5OV/LNkHU3PYMLkC8xVAR4CcmE9tRc5KXk3cg6vBVonlLTXo18z9xejk7XaltGQ/OBTfcunp/ITrs2OjA=="),s(x,"title","Open in our Online Editor"),X.a=null,s(P,"class","language-js"),H.a=null,s(B,"class","language-js"),L.a=null,s(E,"class","language-js"),s(o,"class","remark-container exercise")},m(n,e){l(n,k,e),l(n,V,e),l(n,f,e),l(n,Z,e),l(n,w,e),l(n,Q,e),l(n,i,e),c(i,h),U(C,i,null),c(i,r),c(i,_),q.m(hn,_),l(n,z,e),l(n,u,e),c(u,v),U(S,u,null),c(u,m),c(u,T),G.m(Cn,T),c(u,I),D.m(vn,I),l(n,F,e),l(n,o,e),c(o,$),U(b,o,null),c(o,x),c(o,P),X.m(Sn,P),c(o,B),H.m($n,B),c(o,E),L.m(bn,E),N=!0},p:_n,i(n){N||(K(C.$$.fragment,n),K(S.$$.fragment,n),K(b.$$.fragment,n),N=!0)},o(n){Y(C.$$.fragment,n),Y(S.$$.fragment,n),Y(b.$$.fragment,n),N=!1},d(n){n&&(t(k),t(V),t(f),t(Z),t(w),t(Q),t(i),t(z),t(u),t(F),t(o)),nn(C),nn(S),nn(b)}}}class Rn extends Tn{constructor(k){super(),In(this,k,null,Pn,yn,{})}}export{Rn as component};
