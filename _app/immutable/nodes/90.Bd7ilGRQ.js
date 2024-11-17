import{s as yn,n as Tn}from"../chunks/scheduler.B0TnBjPs.js";import{S as _n,i as In,e as a,s as z,c as Y,H as R,a as p,g,b as M,d,f as W,n as A,h as t,o as s,j as l,p as c,m as U,t as D,k as J,l as nn}from"../chunks/index.Cnh3HYw3.js";import{V as sn}from"../chunks/ViewApp.BajIxHdc.js";function Bn(hn){let k,tn="8. Exercises",V,f,an="Way to go! Your first step towards becoming a programmer is now taken 😎",O,h,pn="Below you have examples of apps you should be able to implement with what you have learned so far. Why don't you give it a try to implement them yourself from scratch? And don't just create copies of them, but try be creative and come up with your own apps, that is so much more fun!",Q,i,v,en="Multiplication Table Exercise",w,r,on="Open in Online Editor",T,G,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,q,u,C,cn="Counter Exercise",S,m,un="Open in Online Editor",_,H,wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> CounterPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,I,X,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CounterPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">-</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Reset</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>resetCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,F,o,$,ln="Power Point Presentation Exercise",b,x,kn="Open in Online Editor",B,L,Sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Slide1
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,j,N,$n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide1</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,P,Z,bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Slide2</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,K;return w=new sn({props:{project:{app:{code:`class MyApp extends App{
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
			Text.text(\`\${p.counter}\`).size(1),
			Columns.size(1).children(
				Rows.size(1).children(
					Button.text(\`-\`).size(1).onClick(p.decrementCounter),
					Button.text(\`Reset\`).size(1).onClick(p.resetCounter),
				),
				Button.text(\`+\`).size(1).onClick(p.incrementCounter),
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
	
}`,x:450,y:200}]}}}),{c(){k=a("h1"),k.textContent=tn,V=z(),f=a("p"),f.textContent=an,O=z(),h=a("p"),h.textContent=pn,Q=z(),i=a("div"),v=a("div"),v.textContent=en,Y(w.$$.fragment),r=a("a"),r.textContent=on,T=a("pre"),G=new R(!1),q=z(),u=a("div"),C=a("div"),C.textContent=cn,Y(S.$$.fragment),m=a("a"),m.textContent=un,_=a("pre"),H=new R(!1),I=a("pre"),X=new R(!1),F=z(),o=a("div"),$=a("div"),$.textContent=ln,Y(b.$$.fragment),x=a("a"),x.textContent=kn,B=a("pre"),L=new R(!1),j=a("pre"),N=new R(!1),P=a("pre"),Z=new R(!1),this.h()},l(n){k=p(n,"H1",{"data-svelte-h":!0}),g(k)!=="svelte-1fw8dhh"&&(k.textContent=tn),V=M(n),f=p(n,"P",{"data-svelte-h":!0}),g(f)!=="svelte-1s5j6rv"&&(f.textContent=an),O=M(n),h=p(n,"P",{"data-svelte-h":!0}),g(h)!=="svelte-6wjhr4"&&(h.textContent=pn),Q=M(n),i=p(n,"DIV",{class:!0});var e=d(i);v=p(e,"DIV",{class:!0,"data-svelte-h":!0}),g(v)!=="svelte-849ou9"&&(v.textContent=en),W(w.$$.fragment,e),r=p(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(r)!=="svelte-1gduarp"&&(r.textContent=on),T=p(e,"PRE",{class:!0});var rn=d(T);G=A(rn,!1),rn.forEach(t),e.forEach(t),q=M(n),u=p(n,"DIV",{class:!0});var E=d(u);C=p(E,"DIV",{class:!0,"data-svelte-h":!0}),g(C)!=="svelte-1wlxgx"&&(C.textContent=cn),W(S.$$.fragment,E),m=p(E,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(m)!=="svelte-1lhz366"&&(m.textContent=un),_=p(E,"PRE",{class:!0});var mn=d(_);H=A(mn,!1),mn.forEach(t),I=p(E,"PRE",{class:!0});var xn=d(I);X=A(xn,!1),xn.forEach(t),E.forEach(t),F=M(n),o=p(n,"DIV",{class:!0});var y=d(o);$=p(y,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-11llafs"&&($.textContent=ln),W(b.$$.fragment,y),x=p(y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),g(x)!=="svelte-34xxo3"&&(x.textContent=kn),B=p(y,"PRE",{class:!0});var gn=d(B);L=A(gn,!1),gn.forEach(t),j=p(y,"PRE",{class:!0});var dn=d(j);N=A(dn,!1),dn.forEach(t),P=p(y,"PRE",{class:!0});var fn=d(P);Z=A(fn,!1),fn.forEach(t),y.forEach(t),this.h()},h(){s(v,"class","remark-container__title"),s(r,"target","_blank"),s(r,"href","/editor#eNqF081Og0AQAOBX2Ux6AEsJ9L8kPWgPxoOJsb2JSQmsSqTLBoZIQ/bd3UqLnarrgYSZ/SYzgZ0GIikhaCDOEw4BxFlUlux+fy0l4zVykZRMvzehCDEueIR8jVGBD9Ert+yvbIgFx6oQrDs4ZFUoFCgHpI5LCJ4aSBMIfAde8izhxV0bkKZdfdf4ELQ99FOzJfNOQTvKbZVeDvGYf5Ru/JZmScGF1R6FuJZRzJ1TtMqzaid+YZcwxJsKMRcu6oms7WBru7lYZWn8bkk34XqIHRdoO3/Xb3ThsbrXSLdWW5Mm3fqkWyr+7fZ9QvNnM3jsirVz6I/Zaw7hxVBn2KfYN+IhxUMjHlE8MuIxxWMjnlA8MeIpxVMjnlE8M+I5xXMjXlC8+InP/6d93K52D7pL2O2BLmWDJfMJ624PYX3KFDhQ67WceA7sIRh6nnpWn3B+akU="),s(r,"title","Open in our Online Editor"),G.a=null,s(T,"class","language-js"),s(i,"class","remark-container exercise"),s(C,"class","remark-container__title"),s(m,"target","_blank"),s(m,"href","/editor#eNqFUk1LxDAQ/Sth8NCy3dIKXgp70B7EgyCrNytsaUYtdpOQTHHXkv9ua7+7y3pImMzMe/PykgpSpSCqIJMcIYKsSI1hj8dbpRgeCAU3rI6rRCTUrExjSvhMqaan9AMdt62QRiq1YLEsBaFuSk3etjAL1gNV5wxErxXkHKLQg3dZcNQP7WE2fsIyiGgOo4q2gW1Y0KdyUUvbo6AOPChTft+92rBwoiohjv9i1kuMRoMX+jtFdu7XfZkvndrKb+Nnn3nBNQqnLSX0Ul/Xp3pzdlfVwGp3rm/yH3RC1+s7Y1mUe2H6/ClVQn8jLtQTuiuJpOgGrscpvhRxkWdfjvKXHo0KTgi2jTVnSaamTQmm8YxqdZZm+cYjvI/c2a/z4FB/rpvAgyNE10Fg3+wvxSYR7Q=="),s(m,"title","Open in our Online Editor"),H.a=null,s(_,"class","language-js"),X.a=null,s(I,"class","language-js"),s(u,"class","remark-container exercise"),s($,"class","remark-container__title"),s(x,"target","_blank"),s(x,"href","/editor#eNrNkt9OwjAUxl/l2Ks1zmVMuGCRGLlRLjQEuBMTmvUgjaOtbRckZK/lC/hilkz+CSjeebFmbc/5zm/7vgVhWpN0QTLFkaQky5m1cD+/0RrwzaHkFvz7YiiHbvlkBpnDvmPGddkzBrS6cQZdYST0c8Gxtjwqq46SlCHRvtKS9HFBBCdpLSRjlXM0nWqzM7kSWI9eztjMVoV0aKAF8epIyTaOldlw6GhVdd6CbZAV+m0hvkP31MxGmnEu5HPQoFE2ETk3KIOqaugGHidyfglGd5jn6mxEw9VdX7MMwwOVcAEdYFPooqcZ0SjHsQtoZCdq1hkHCVy1YA1Ljwi0lcerNZvxXv/lSf09JixyEBLazOBUWfvxvidVPyK1+2Xtwvm//SX94Fevs/Q1qByj0Qui9mobA7zqJT2xP1n316F1gIbuRCokbz45jTgkc5ImcVyGVbKSX5OV/LNkHU3PYMLkC8xVAR4CcmE9tRc5KXk3cg6vBVonlLTXo18z9xejk7XaltGQ/OBTfcunp/ITrs2OjA=="),s(x,"title","Open in our Online Editor"),L.a=null,s(B,"class","language-js"),N.a=null,s(j,"class","language-js"),Z.a=null,s(P,"class","language-js"),s(o,"class","remark-container exercise")},m(n,e){l(n,k,e),l(n,V,e),l(n,f,e),l(n,O,e),l(n,h,e),l(n,Q,e),l(n,i,e),c(i,v),U(w,i,null),c(i,r),c(i,T),G.m(vn,T),l(n,q,e),l(n,u,e),c(u,C),U(S,u,null),c(u,m),c(u,_),H.m(wn,_),c(u,I),X.m(Cn,I),l(n,F,e),l(n,o,e),c(o,$),U(b,o,null),c(o,x),c(o,B),L.m(Sn,B),c(o,j),N.m($n,j),c(o,P),Z.m(bn,P),K=!0},p:Tn,i(n){K||(D(w.$$.fragment,n),D(S.$$.fragment,n),D(b.$$.fragment,n),K=!0)},o(n){J(w.$$.fragment,n),J(S.$$.fragment,n),J(b.$$.fragment,n),K=!1},d(n){n&&(t(k),t(V),t(f),t(O),t(h),t(Q),t(i),t(q),t(u),t(F),t(o)),nn(w),nn(S),nn(b)}}}class Rn extends _n{constructor(k){super(),In(this,k,null,Bn,yn,{})}}export{Rn as component};
