import{s as De,n as Ye}from"../chunks/scheduler.DFPFbGJz.js";import{S as Je,i as Ve,e as s,s as l,H as qt,c as ht,a as p,g as o,b as i,d as r,n as jt,h as n,f as gt,o as c,j as a,p as u,m as ft,t as vt,k as bt,l as wt}from"../chunks/index.CzDE4dZi.js";import{V as Ct}from"../chunks/ViewApp.C2MU7-ZI.js";function Ne(qe){let k,jn="5. Numbers",Xt,A,Gn="This tutorial will teach you what datatypes are, and how to use numbers in JavaScript.",zt,_,Hn="Datatypes",Ot,E,Xn="In JavaScript, there exists different type of values, and we call these <em>datatypes</em>. So far, you have mostly been using the string datatype, whose values can be crated by encapuslating some characters between two <code>`</code> characters, like <code>`This is a string!`</code>. You use this for example when you create a <code>Text</code> component that should have a background color and some specific text:",Dt,B,Yt,je=`<code class="language-js"><span class="token comment">// The values &#96;Hi there&#96; and &#96;red&#96; are both string values!</span>
Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>`,Jt,I,zn="But JavaScript contains many more datatypes than just strings. Let&#39;s take a look at the <em>number</em> datatype!",Vt,R,On="Creating a number",Nt,$,Dn="Number is a datatype in JavaScript that represents a number (big surprice! xD). You can create new number values simply by writing them, for example:",Kt,M,Yn="<li>Write <code>51</code> to create the number value <code>51</code></li> <li>Write <code>-140</code> to create the number value <code>-140</code></li> <li>Write <code>6.57</code> to create the number value <code>6.57</code></li> <li>Write <code>-13.7</code> to create the number value <code>-13.7</code></li>",Ut,y,Jn='<div class="remark-container__title">Localization</div><p>In some natural languages, such as Swedish, one does not use period (<code>.</code>), but a comma (<code>,</code>), as the <a href="https://en.wikipedia.org/wiki/Decimal_separator" rel="nofollow" target="_blank">decimal separator</a>. JavaScript is based on English, and uses period as the decimal seperator, so using a comma will not work.</p>',Wt,L,Vn="Just as strings (and all datatypes), number values can be stored in constant and variables.",Ft,m,q,Nn="Example",St,Kn="Example of an app that creates a page constant that stores a number.",j,G,x,Un="Open in Online Editor",yt,Zt,Ge=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">4</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">2</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + 1 is equal to 5.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to 6.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to 8.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Qt,H,Wn="As you can see in the example above, just as we can use the special <code>${ ... }</code> syntax in strings created with two <code>`</code> characters to insert a string value into it, we can also use it to insert at number value into it (the special <code>${ ... }</code> syntax can also be used to insert values of other datatypes too; it does not only works for strings and numbers).",tn,X,Fn="Mathematical operations",nn,z,Zn="Most often, an application needs to do computations with numbers, such as computing the sum of two numbers. For each of the ordinary mathematical operations, JavaScript has special symbols to denote them:",en,T,Qn="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Addition</td> <td><code>+</code></td> <td><code>4 + 2</code></td> <td><code>6</code></td></tr> <tr><td>Subtraction</td> <td><code>-</code></td> <td><code>4 - 2</code></td> <td><code>2</code></td></tr> <tr><td>Multiplication</td> <td><code>*</code></td> <td><code>4 * 2</code></td> <td><code>8</code></td></tr> <tr><td>Division</td> <td><code>/</code></td> <td><code>4 / 2</code></td> <td><code>2</code></td></tr></tbody>",an,O,te="You can use these mathematical operations anywhere in your JavaScript code you can use a number, for example:",sn,D,ne="<li>When creating a constant/variable</li> <li>In  <code>${ ... }</code> expressions in strings created with the <code>`</code> symbol</li>",pn,h,Y,ee="Example",Tt,ae="Example of an app with some mathematical expressions.",J,V,g,se="Open in Online Editor",Pt,on,He=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">4</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">a: 1 + 2 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + 2 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">d: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">*</span> p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,cn,N,pe="Mathematical operations with multiple operands",ln,K,oe="Just as in ordinary math, you can use multiple mathematical operations at the same time. Ordinary operator precedence applies, i.e. <code>*</code> and <code>/</code> are computed before <code>+</code> and <code>-</code>. If you want <code>+</code> and <code>-</code> to be computed before <code>*</code> and <code>/</code>, surround them with parenthesis.",un,f,U,ce="Example",At,le="Example of an app using two mathematical operations at the same time.",W,F,v,ie="Open in Online Editor",_t,rn,Xe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">2</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">a: 1 + 2 + 3 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b: 1 + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + 3 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">1</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token constant">X</span> <span class="token operator">+</span> p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">d: 1 + 2 * 3 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">e: (1 + 2) * 3 is equal to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,dn,Z,ue="Changing a number in a variable",kn,Q,re="Just as for strings, we can use <code>p.theVariableName = 123</code> to store a new number in the variable (in this example, storing the number <code>123</code> in the page variable named <code>theVariableName</code>). But, where <code>123</code> is written, we don&#39;t have to write a single number like this, but we can also make use of any mathematical operation we want. A very common thing apps do is to simply increment the value stored in a variable by <code>1</code> using an addition operation.",mn,b,tt,de="Example",Et,ke="Example of an app that increments the number stored in a variable by <code>1</code> each time a button is clicked.",nt,et,w,me="Open in Online Editor",Bt,xn,ze=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The counter variable is currently </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment counter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token comment">// When the computer executes this code, it will:</span>
		<span class="token comment">// 1. Compute p.counter + 1, by first:</span>
		<span class="token comment">//     1. Retrieve the current number in p.counter (1 the first time the button is clicked)</span>
		<span class="token comment">//     2. Compute what "that value" + 1 is (1 + 1 = 2 the first time the button is clicked)</span>
		<span class="token comment">// 2. Store that computed value (2 the first the button is clicked) in p.counter</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">=</span> p<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,hn,at,xe="To increment/decrement the number stored in a variable is very common thing to do in apps, but reading and understanding how code like <code>p.counter = p.counter + 1</code> works can be quite tricky for beginners. Especially, it can be very confusing that <code>p.counter</code> appears both on the left and the right side of the <code>=</code> symbol.",gn,st,he="There exists shortcut syntax in JavaScript one can use to increment/decrement a variable by another number, and this shortcut syntax is much easier to read and understand. There also exist shortcut syntax to mutliply/divide a variable by another number.",fn,P,ge="<thead><tr><th>Operation</th> <th>Ordinary syntax</th> <th>Shortcut syntax</th></tr></thead> <tbody><tr><td>Increment</td> <td><code>p.counter = p.counter + 2</code></td> <td><code>p.counter += 2</code></td></tr> <tr><td>Decrement</td> <td><code>p.counter = p.counter - 2</code></td> <td><code>p.counter -= 2</code></td></tr> <tr><td>Multiply</td> <td><code>p.counter = p.counter * 2</code></td> <td><code>p.counter *= 2</code></td></tr> <tr><td>Divide</td> <td><code>p.counter = p.counter / 2</code></td> <td><code>p.counter /= 2</code></td></tr></tbody>",vn,C,pt,fe="Example",It,ve="The same app as before, but uses the shortcut syntax for increament the number stored in a variable instead.",ot,ct,S,be="Open in Online Editor",Rt,bn,Oe=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The counter variable is currently </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment counter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>incrementCounter<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">incrementCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token comment">// Increment the number stored in p.counter by 1.</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,lt,we="Exercises",Cn,it,Ce="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Sn,d,ut,Se="Exercise 1",$t,ye='<a href="/editor#eNq1klFrwkAMx7/KkZdZ1ol2G0hfRjfG8GFjTGGTVejRpiqrd+UuZUrpd19rp/OKFRn4cJBc/snlfkkOPE3BzSGUEYILYcK1Zs9rL00ZrghFpFlp577wqTqhQk44Iq7olc+wY9URUkiZEmwXqG6LOqmAwoZYJhEqDe5nDosI3L4Ngi+rFzcpYIOMY430AW5va09Ku5jakJb1jMy62LB2jMZ37++ar5xG90/Zotn3m/zW3XC+SCKFolOHfBqlPER76z3IJFuKA7Km0Kf7jEiKLpVNdIKrwLLbpeNS8yvsHRUaNS+PSP8i+/eWMREbVuDe9K5tWIPrDJwt5jEu06REZOA2CHv6axh7UZacC/MeEE8hW8uMbcbNaM4F6w/ugsMf/P+AXuTp4CeoT0BvNda/Ruk0UD4KQuXN8Pwg3+ecLnTFUrGyfjtC46/9/YU0I7dtEac1x7kNTtnMYlr8AODZqeQ=" target="_blank">This BagaWork project</a> contains a page looking like this:',Gt,rt,Mt,Te="Change the code in it, so it works as shown below.",Ht,dt,Lt,Pe="<summary>Hint</summary><p>You will need to:</p><ul><li>Add one variable to keep track of the current number</li> <li>Add one method to decrement the counter by one when the first button is clicked</li> <li>Add one method to increment the counter by one when the second button is clicked</li> <li>Change so the current number in your variable is shown instead of the hardcoded <code>0</code></li></ul>",yn,kt,Ae="That's it!",Tn,mt,_e="Good work, now you know the basics about how to use numbers in Bagawork! 🥳 It's not that hard, is it? In next tutorial, you'll see more useful examples of how we can use numbers.",Pn;return G=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	FAVORITE_NUMBER = 17
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	X = 4
	Y = 2
	
	createGui(){
		return Rows.children(
			Text.text(\`a: \${p.X} + 1 is equal to 5.\`),
			Text.text(\`b: \${p.X} + \${p.Y} is equal to 6.\`),
			Text.text(\`c: \${p.X} * \${p.Y} is equal to 8.\`),
		)
	}
	
}`,x:180,y:316}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),V=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	FAVORITE_NUMBER = 17
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	X = 4\n	Y = 1 + 1\n	\n	createGui(){\n		return Rows.children(\n			Text.text(`a: 1 + 2 is equal to ${1 + 2}.`),\n			Text.text(`b: ${p.Y} + 2 is equal to ${p.Y + 2}.`),\n			Text.text(`c: ${p.X} + ${p.Y} is equal to ${p.X + p.Y}.`),\n			Text.text(`d: ${p.X} * ${p.Y} is equal to ${p.X * p.Y}.`),\n		)\n	}\n	\n}",x:180,y:316}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),F=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	FAVORITE_NUMBER = 17
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	X = 2\n	\n	createGui(){\n		return Rows.children(\n			Text.text(`a: 1 + 2 + 3 is equal to ${1 + 2 + 3}.`),\n			Text.text(`b: 1 + ${p.X} + 3 is equal to ${1 + p.X + 3}.`),\n			Text.text(`c: ${p.X} + ${p.X} + ${p.X} is equal to ${p.X + p.X + p.X}.`),\n			Text.text(`d: 1 + 2 * 3 is equal to ${1 + 2 * 3}.`),\n			Text.text(`e: (1 + 2) * 3 is equal to ${(1 + 2) * 3}.`),\n		)\n	}\n	\n}",x:180,y:316}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),et=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	FAVORITE_NUMBER = 17
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Text.text(\`The counter variable is currently \${p.counter}.\`),
			Button.text(\`Increment counter\`).handler(p.incrementCounter)
		)
	}
	
	incrementCounter(){
		// When the computer executes this code, it will:
		// 1. Compute p.counter + 1, by first:
		//     1. Retrieve the current number in p.counter (1 the first time the button is clicked)
		//     2. Compute what "that value" + 1 is (1 + 1 = 2 the first time the button is clicked)
		// 2. Store that computed value (2 the first the button is clicked) in p.counter
		p.counter = p.counter + 1
	}
	
}`,x:180,y:316}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),ct=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	FAVORITE_NUMBER = 17
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Text.text(\`The counter variable is currently \${p.counter}.\`),
			Button.text(\`Increment counter\`).handler(p.incrementCounter)
		)
	}
	
	incrementCounter(){
		// Increment the number stored in p.counter by 1.
		p.counter += 1
	}
	
}`,x:180,y:316}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),rt=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Columns.children(
				Space,
				Button.text(\`-\`),
				Space,
				Text.text(\`0\`),
				Space,
				Button.text(\`+\`),
				Space,
			),
			Space,
		)
	}
	
}`,x:403,y:282}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),dt=new Ct({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 0
	
	createGui(){
		return Rows.children(
			Space,
			Columns.children(
				Space,
				Button.text(\`-\`).handler(p.decrementCounter),
				Space,
				Text.text(\`\${p.counter}\`),
				Space,
				Button.text(\`+\`).handler(p.incrementCounter),
				Space,
			),
			Space,
		)
	}
	
	decrementCounter(){
		p.counter -= 1
	}
	
	incrementCounter(){
		p.counter += 1
	}
	
}`,x:403,y:282}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){k=s("h1"),k.textContent=jn,Xt=l(),A=s("p"),A.textContent=Gn,zt=l(),_=s("h2"),_.textContent=Hn,Ot=l(),E=s("p"),E.innerHTML=Xn,Dt=l(),B=s("pre"),Yt=new qt(!1),Jt=l(),I=s("p"),I.innerHTML=zn,Vt=l(),R=s("h2"),R.textContent=On,Nt=l(),$=s("p"),$.textContent=Dn,Kt=l(),M=s("ul"),M.innerHTML=Yn,Ut=l(),y=s("div"),y.innerHTML=Jn,Wt=l(),L=s("p"),L.textContent=Vn,Ft=l(),m=s("div"),q=s("div"),q.textContent=Nn,St=s("p"),St.textContent=Kn,j=s("div"),ht(G.$$.fragment),x=s("a"),x.textContent=Un,yt=s("pre"),Zt=new qt(!1),Qt=l(),H=s("p"),H.innerHTML=Wn,tn=l(),X=s("h2"),X.textContent=Fn,nn=l(),z=s("p"),z.textContent=Zn,en=l(),T=s("table"),T.innerHTML=Qn,an=l(),O=s("p"),O.textContent=te,sn=l(),D=s("ul"),D.innerHTML=ne,pn=l(),h=s("div"),Y=s("div"),Y.textContent=ee,Tt=s("p"),Tt.textContent=ae,J=s("div"),ht(V.$$.fragment),g=s("a"),g.textContent=se,Pt=s("pre"),on=new qt(!1),cn=l(),N=s("h2"),N.textContent=pe,ln=l(),K=s("p"),K.innerHTML=oe,un=l(),f=s("div"),U=s("div"),U.textContent=ce,At=s("p"),At.textContent=le,W=s("div"),ht(F.$$.fragment),v=s("a"),v.textContent=ie,_t=s("pre"),rn=new qt(!1),dn=l(),Z=s("h2"),Z.textContent=ue,kn=l(),Q=s("p"),Q.innerHTML=re,mn=l(),b=s("div"),tt=s("div"),tt.textContent=de,Et=s("p"),Et.innerHTML=ke,nt=s("div"),ht(et.$$.fragment),w=s("a"),w.textContent=me,Bt=s("pre"),xn=new qt(!1),hn=l(),at=s("p"),at.innerHTML=xe,gn=l(),st=s("p"),st.textContent=he,fn=l(),P=s("table"),P.innerHTML=ge,vn=l(),C=s("div"),pt=s("div"),pt.textContent=fe,It=s("p"),It.textContent=ve,ot=s("div"),ht(ct.$$.fragment),S=s("a"),S.textContent=be,Rt=s("pre"),bn=new qt(!1),wn=l(),lt=s("h2"),lt.textContent=we,Cn=l(),it=s("p"),it.textContent=Ce,Sn=l(),d=s("div"),ut=s("div"),ut.textContent=Se,$t=s("p"),$t.innerHTML=ye,Gt=s("div"),ht(rt.$$.fragment),Mt=s("p"),Mt.textContent=Te,Ht=s("div"),ht(dt.$$.fragment),Lt=s("details"),Lt.innerHTML=Pe,yn=l(),kt=s("h2"),kt.textContent=Ae,Tn=l(),mt=s("p"),mt.textContent=_e,this.h()},l(t){k=p(t,"H1",{"data-svelte-h":!0}),o(k)!=="svelte-10ok0zp"&&(k.textContent=jn),Xt=i(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-122md1k"&&(A.textContent=Gn),zt=i(t),_=p(t,"H2",{"data-svelte-h":!0}),o(_)!=="svelte-1a9xgxd"&&(_.textContent=Hn),Ot=i(t),E=p(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-12621pt"&&(E.innerHTML=Xn),Dt=i(t),B=p(t,"PRE",{class:!0});var e=r(B);Yt=jt(e,!1),e.forEach(n),Jt=i(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1w1snrw"&&(I.innerHTML=zn),Vt=i(t),R=p(t,"H2",{"data-svelte-h":!0}),o(R)!=="svelte-ked2vl"&&(R.textContent=On),Nt=i(t),$=p(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-1autvyt"&&($.textContent=Dn),Kt=i(t),M=p(t,"UL",{"data-svelte-h":!0}),o(M)!=="svelte-psvo6u"&&(M.innerHTML=Yn),Ut=i(t),y=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-ar99o4"&&(y.innerHTML=Jn),Wt=i(t),L=p(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1dksxyq"&&(L.textContent=Vn),Ft=i(t),m=p(t,"DIV",{class:!0});var An=r(m);q=p(An,"DIV",{class:!0,"data-svelte-h":!0}),o(q)!=="svelte-1llzxwj"&&(q.textContent=Nn),St=p(An,"P",{"data-svelte-h":!0}),o(St)!=="svelte-1917nca"&&(St.textContent=Kn),j=p(An,"DIV",{});var _n=r(j);gt(G.$$.fragment,_n),x=p(_n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-1dd6pve"&&(x.textContent=Un),yt=p(_n,"PRE",{class:!0});var Ee=r(yt);Zt=jt(Ee,!1),Ee.forEach(n),_n.forEach(n),An.forEach(n),Qt=i(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-pxtonz"&&(H.innerHTML=Wn),tn=i(t),X=p(t,"H2",{"data-svelte-h":!0}),o(X)!=="svelte-1l0e4h8"&&(X.textContent=Fn),nn=i(t),z=p(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-5uzh9y"&&(z.textContent=Zn),en=i(t),T=p(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(T)!=="svelte-6it0wc"&&(T.innerHTML=Qn),an=i(t),O=p(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-114v8k1"&&(O.textContent=te),sn=i(t),D=p(t,"UL",{"data-svelte-h":!0}),o(D)!=="svelte-17ng9vd"&&(D.innerHTML=ne),pn=i(t),h=p(t,"DIV",{class:!0});var En=r(h);Y=p(En,"DIV",{class:!0,"data-svelte-h":!0}),o(Y)!=="svelte-1llzxwj"&&(Y.textContent=ee),Tt=p(En,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-r9nule"&&(Tt.textContent=ae),J=p(En,"DIV",{});var Bn=r(J);gt(V.$$.fragment,Bn),g=p(Bn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(g)!=="svelte-amfn0q"&&(g.textContent=se),Pt=p(Bn,"PRE",{class:!0});var Be=r(Pt);on=jt(Be,!1),Be.forEach(n),Bn.forEach(n),En.forEach(n),cn=i(t),N=p(t,"H2",{"data-svelte-h":!0}),o(N)!=="svelte-h166aa"&&(N.textContent=pe),ln=i(t),K=p(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-18mini6"&&(K.innerHTML=oe),un=i(t),f=p(t,"DIV",{class:!0});var In=r(f);U=p(In,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=ce),At=p(In,"P",{"data-svelte-h":!0}),o(At)!=="svelte-1t3qbsk"&&(At.textContent=le),W=p(In,"DIV",{});var Rn=r(W);gt(F.$$.fragment,Rn),v=p(Rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1om8z9g"&&(v.textContent=ie),_t=p(Rn,"PRE",{class:!0});var Ie=r(_t);rn=jt(Ie,!1),Ie.forEach(n),Rn.forEach(n),In.forEach(n),dn=i(t),Z=p(t,"H2",{"data-svelte-h":!0}),o(Z)!=="svelte-1qpdelt"&&(Z.textContent=ue),kn=i(t),Q=p(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1ycfahx"&&(Q.innerHTML=re),mn=i(t),b=p(t,"DIV",{class:!0});var $n=r(b);tt=p($n,"DIV",{class:!0,"data-svelte-h":!0}),o(tt)!=="svelte-1llzxwj"&&(tt.textContent=de),Et=p($n,"P",{"data-svelte-h":!0}),o(Et)!=="svelte-50n7ck"&&(Et.innerHTML=ke),nt=p($n,"DIV",{});var Mn=r(nt);gt(et.$$.fragment,Mn),w=p(Mn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-1oxgwi7"&&(w.textContent=me),Bt=p(Mn,"PRE",{class:!0});var Re=r(Bt);xn=jt(Re,!1),Re.forEach(n),Mn.forEach(n),$n.forEach(n),hn=i(t),at=p(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1n3j9a8"&&(at.innerHTML=xe),gn=i(t),st=p(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-oc1jba"&&(st.textContent=he),fn=i(t),P=p(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(P)!=="svelte-1la0cif"&&(P.innerHTML=ge),vn=i(t),C=p(t,"DIV",{class:!0});var Ln=r(C);pt=p(Ln,"DIV",{class:!0,"data-svelte-h":!0}),o(pt)!=="svelte-1llzxwj"&&(pt.textContent=fe),It=p(Ln,"P",{"data-svelte-h":!0}),o(It)!=="svelte-a3kwzm"&&(It.textContent=ve),ot=p(Ln,"DIV",{});var qn=r(ot);gt(ct.$$.fragment,qn),S=p(qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(S)!=="svelte-1gsgq93"&&(S.textContent=be),Rt=p(qn,"PRE",{class:!0});var $e=r(Rt);bn=jt($e,!1),$e.forEach(n),qn.forEach(n),Ln.forEach(n),wn=i(t),lt=p(t,"H2",{"data-svelte-h":!0}),o(lt)!=="svelte-4opca7"&&(lt.textContent=we),Cn=i(t),it=p(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-fy3v6t"&&(it.textContent=Ce),Sn=i(t),d=p(t,"DIV",{class:!0});var xt=r(d);ut=p(xt,"DIV",{class:!0,"data-svelte-h":!0}),o(ut)!=="svelte-1kqyz2o"&&(ut.textContent=Se),$t=p(xt,"P",{"data-svelte-h":!0}),o($t)!=="svelte-1dvvahq"&&($t.innerHTML=ye),Gt=p(xt,"DIV",{});var Me=r(Gt);gt(rt.$$.fragment,Me),Me.forEach(n),Mt=p(xt,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-1eol6wd"&&(Mt.textContent=Te),Ht=p(xt,"DIV",{});var Le=r(Ht);gt(dt.$$.fragment,Le),Le.forEach(n),Lt=p(xt,"DETAILS",{"data-svelte-h":!0}),o(Lt)!=="svelte-o3a53v"&&(Lt.innerHTML=Pe),xt.forEach(n),yn=i(t),kt=p(t,"H2",{"data-svelte-h":!0}),o(kt)!=="svelte-p2uhy5"&&(kt.textContent=Ae),Tn=i(t),mt=p(t,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-5dmwcn"&&(mt.textContent=_e),this.h()},h(){Yt.a=null,c(B,"class","language-js"),c(y,"class","remark-container warning"),c(q,"class","remark-container__title"),c(x,"target","_blank"),c(x,"href","/editor#eNrFk19r2zAUxb/KRQwab8bU6doFwxjOyEoe+oc0axOWsmj2dROmSJ4k0wbj7z6pbtwoOCN92oPNlaXfvT7n2CWheU6ikiQiRRKRhFGl4GId5zngk0aeKjB1OeMzba9v8e3VaDge/Lz8ftEfjOAzhJ82e4lEqvFGU6mv6QN2vJrSEnUhOTQb9mlVQxWpfJIJlqJUJPpRkmVKotAnnK7s2zwjxCciyxTqCYmON/XU1NW9T3LTzyHrZsN64Yhq5jfC7KJRNjFaPtpiaoquq+m8WO6qGYlHFSSLJUsl8k69NdNj0zrQ5taZ0wjelXkwqeADhLBUgH8KykALOA3mnt9C/NoibDGtHOxsD5Y02Ps2rPeKeY7zPnkyJvWMpWsSnYRnGzvHuMqZEe3Y6jgZq9/DLE4L9g87Be9jJuTrV7A1+8223uQ0wTbtsURYiwKeQwe9oBzC3pctn1zyq2DFircM2D040/1CGw0vYy7F3AusNx1eMOb5B2JTVIdxbQFZC+NMo2xz0P43dTbdnWwG3CDxA/7vZO4WVB8pG44EM31/Jo5j4XG7Ye6h0wMOdQ/p1N3TafsN35LJffUXjUfliA=="),c(x,"title","Open in our Online Editor"),Zt.a=null,c(yt,"class","language-js"),c(m,"class","remark-container tip"),c(T,"border","1"),c(Y,"class","remark-container__title"),c(g,"target","_blank"),c(g,"href","/editor#eNrFU11r2zAU/SsXMVjcGVNnX8VQhjOykYe2I83ahKYsmn3dhCmSJ8mswfi/T4obLzJOSZ/2YHOlq3Ouzjl2SWiek6gkiUiRRCRhVCm42MR5DviokacKTF3O+Vzb50t8czUeTYY/Lr9fDIZjOIfw466XSKQarzWV+ht9wJ5Xo7REXUgOTcPuVjWoIpVPMsFSlIpEdyVZpSQKfcLp2t5mCyE+EVmmUE9JdLqrZ6au7n2SGz4HWZON6oUjqpnfCLOLRtnUaHlni5kVBW8gdHV9LVZtRWPxRwXJcsVSibxXt+Z6YugDbV69BY22TH1YKcDfBWWgBbwqt3tVsPD8DszPyJzIg1nVATTbz0GTGjq10CeONn5qWrZxgCFtGE4OM5y0GDwnUJ88Gu/PTFIbEr0NP+xSmuA6Z8ZHJy0noFj9GmVxWrBnUhJ8gJmQ/z6uvdkvTuo6pwl22RBLhI0oYPstgV5SDuHZpz3LXORnwYo17xjQPjjXg0IbDU9jLsXCC6w3PV4w5vlHwmaojsN1BWQtjDONsstB+zvW2fRb2Qy5gcQP+L+TuV1S/VrZcCSY6YczcRwLT7sNcw+9P+JQ/xim/gGm/Ru+JJP76i8iUf8j"),c(g,"title","Open in our Online Editor"),on.a=null,c(Pt,"class","language-js"),c(h,"class","remark-container tip"),c(U,"class","remark-container__title"),c(v,"target","_blank"),c(v,"href","/editor#eNrFU2Fr2zAQ/SuHKMzujKldthXDGM7IRj60G2napSxl0exzE6ZIniSzBuP/PjleXCvYJf20DxaS7t47vXvnktA8J1FJEpEiiUjCqFJwuY3zHPBRI08VmH254Atdf5/i2y/TyWz84+rmcjSewnsI3u1jiUSq8VpTqb/SB3TcBqUl6kJyaAP1bdWAKlJ5JBMsRalI9L0k65REgUc43dSv2UGIR0SWKdRzEp3t93dmX917JDd8FrIhmzQHS1RbvxVWH1plc6MltKV8LtaHIqbij/KT1ZqlErnThBZ6Zhh9bRZnSSMI4DWE5juHtQL8XVAGWsBJ2d5X/tL1erA/G+xJmfvzaoDAhJ6jSKIn+OHGJmuI2nWIMN3rOR3Qczr8GIzA2SW5PehOpIN3reHwyKPx8cK4viXRefB27/gMNzkzBlnOW2bH6tcki9OCPeO44CPMhHwa1E7tF4/AdU4T7GtCLBG2ooDdXIJeUQ7BxYdOw2zkR8GKDe8pcJi40KNCGw3/ylyJpevXvXF4wZjrHQm7Q3Ucrs+guoVxplH2dbD+tRtvwgNvxtxA4gf83858W1H9StXmSDDVhz2xOhac9TfMTnpzRFJ4DFM4wNR94Us8ua/+AoxaEBo="),c(v,"title","Open in our Online Editor"),rn.a=null,c(_t,"class","language-js"),c(f,"class","remark-container tip"),c(tt,"class","remark-container__title"),c(w,"target","_blank"),c(w,"href","/editor#eNrFVGFr2zAQ/SuHGMxmxq0zthVDGG7pRj60G2m2rixlUexzIyrLRpbThpD/Psmq3SikI/20QBI5d+/p7t27rAmtKhKvSVpmSGKSclrXcLFKqgrwUaHIatDn9VRMlXl/SX5+G48m538uf1ycno9hCNGnLpZKpAqvFJXqO71Dz7coJVE1UkAfML9uLGhDNgHJS56hrEn8e01YRuIoIIIWppoWQgJS5nmN6heJj7vzjT5vbgNSaT4HaclG9sFpqr+/b8w89J2lZSMUStOR29DXhu22Mi4f6jBdMJ5JFJ4NTdVE84ZKf3izyQKhI1xSyeicI7Aa0kZqhOIreLOuwqeMTTjzg47ktFGqFE80I6FLKDSgI5v54YKKjKP0qpB10TMb9C2Hv6XvVO0m9a0cHcH1AgWottSiakyt+IipPtT6V1Otli8ApuCBcR73sCiEMwuAvgd4B1EA8xXkTNbqOde8dP4YlWS4RHubFQFEU8w1koktGi9qU1oWUKywiHkrSisgZ+k9Zr5zweC5oIcFVTAlynwtKW9wSkxpBqqpzWkIg1deoemvVClNHlWdVpmlB89h20vkdGhZnxseuho6uxGQR23jE236FYnfRx87w0+wqLh2pmN8x+tJfT/Kk6zh/zB8KU4x1231jnB880rvX1U0xWDPJiRat1XZQLuWRkEB0cnnLcO7yLOSN4XYc8Fu4s6mXJZ6NYw2nmg494MDYTdYH4brIu5ylSLJt3dq55/NzmawM5tzM+vkDv/3ZK61m9/WZjgS9O0vz8RRLDreL5ib9OGApMEhTIMXmLYrfM1Mbjd/AaqZfIE="),c(w,"title","Open in our Online Editor"),xn.a=null,c(Bt,"class","language-js"),c(b,"class","remark-container tip"),c(P,"border","1"),c(pt,"class","remark-container__title"),c(S,"target","_blank"),c(S,"href","/editor#eNrFk11r2zAUhv+KEIPZzLh1xrZiGMMp2chFu5FmH2Upi2IfN2ayZPTR1Rj/98lV7EYmHenVLmwkn/O+Ouc8coNJVeG4wSnPAMc4pURKdFEnVYXgXgHLJDLrZsVWqns+Jt8+L+bL2a/LrxfT2QK9R9G7PpYKIAquFBHqC7kFz7cqJUBpwdAQ6L62VtTiNsA5pxkIieOfDS4yHEcBZqTsqnmQ4ADzPJegfuD4tF9fm3V7E+DK+DlKaza3G6ep4fyhsW4zdJZyzRSIriO3oU+6GLey4H9kmG4Lmglgng2t1NL4hsq8vPVyC6g3vCOiIBsKqJAo1cIoFK3Ri6YKdxltuPaD3mSqleJsZzNnpoTSCHqztR9uCcsoCK8Kiz56boO+9fD35rtS46ShlZMT9GivTL1MlxtTrlRcQIYKhoYC0aZGUWhljx9f7SY1oAzwvZn6mWFU4/h19Lbns4SyomaQDicHTSJ/z/Mk0/QffDibQm5KGxpw2nwmqquKpBAcAJcIQDXX6OEWmbEQhqKzD3t8XOU5p7pkBw4YJ47AXnJDspuNxzSlfnCk7Brkcbo+4t4FzpJ8/wqMfkTLZjJiM+tgJ7fwv8l83xL1UnZwBDKnP83EmVh0enhgbtKbI5ImxzhNnnDar/A5TG7av6mfDC8="),c(S,"title","Open in our Online Editor"),bn.a=null,c(Rt,"class","language-js"),c(C,"class","remark-container tip"),c(ut,"class","remark-container__title"),c(d,"class","remark-container exercise")},m(t,e){a(t,k,e),a(t,Xt,e),a(t,A,e),a(t,zt,e),a(t,_,e),a(t,Ot,e),a(t,E,e),a(t,Dt,e),a(t,B,e),Yt.m(je,B),a(t,Jt,e),a(t,I,e),a(t,Vt,e),a(t,R,e),a(t,Nt,e),a(t,$,e),a(t,Kt,e),a(t,M,e),a(t,Ut,e),a(t,y,e),a(t,Wt,e),a(t,L,e),a(t,Ft,e),a(t,m,e),u(m,q),u(m,St),u(m,j),ft(G,j,null),u(j,x),u(j,yt),Zt.m(Ge,yt),a(t,Qt,e),a(t,H,e),a(t,tn,e),a(t,X,e),a(t,nn,e),a(t,z,e),a(t,en,e),a(t,T,e),a(t,an,e),a(t,O,e),a(t,sn,e),a(t,D,e),a(t,pn,e),a(t,h,e),u(h,Y),u(h,Tt),u(h,J),ft(V,J,null),u(J,g),u(J,Pt),on.m(He,Pt),a(t,cn,e),a(t,N,e),a(t,ln,e),a(t,K,e),a(t,un,e),a(t,f,e),u(f,U),u(f,At),u(f,W),ft(F,W,null),u(W,v),u(W,_t),rn.m(Xe,_t),a(t,dn,e),a(t,Z,e),a(t,kn,e),a(t,Q,e),a(t,mn,e),a(t,b,e),u(b,tt),u(b,Et),u(b,nt),ft(et,nt,null),u(nt,w),u(nt,Bt),xn.m(ze,Bt),a(t,hn,e),a(t,at,e),a(t,gn,e),a(t,st,e),a(t,fn,e),a(t,P,e),a(t,vn,e),a(t,C,e),u(C,pt),u(C,It),u(C,ot),ft(ct,ot,null),u(ot,S),u(ot,Rt),bn.m(Oe,Rt),a(t,wn,e),a(t,lt,e),a(t,Cn,e),a(t,it,e),a(t,Sn,e),a(t,d,e),u(d,ut),u(d,$t),u(d,Gt),ft(rt,Gt,null),u(d,Mt),u(d,Ht),ft(dt,Ht,null),u(d,Lt),a(t,yn,e),a(t,kt,e),a(t,Tn,e),a(t,mt,e),Pn=!0},p:Ye,i(t){Pn||(vt(G.$$.fragment,t),vt(V.$$.fragment,t),vt(F.$$.fragment,t),vt(et.$$.fragment,t),vt(ct.$$.fragment,t),vt(rt.$$.fragment,t),vt(dt.$$.fragment,t),Pn=!0)},o(t){bt(G.$$.fragment,t),bt(V.$$.fragment,t),bt(F.$$.fragment,t),bt(et.$$.fragment,t),bt(ct.$$.fragment,t),bt(rt.$$.fragment,t),bt(dt.$$.fragment,t),Pn=!1},d(t){t&&(n(k),n(Xt),n(A),n(zt),n(_),n(Ot),n(E),n(Dt),n(B),n(Jt),n(I),n(Vt),n(R),n(Nt),n($),n(Kt),n(M),n(Ut),n(y),n(Wt),n(L),n(Ft),n(m),n(Qt),n(H),n(tn),n(X),n(nn),n(z),n(en),n(T),n(an),n(O),n(sn),n(D),n(pn),n(h),n(cn),n(N),n(ln),n(K),n(un),n(f),n(dn),n(Z),n(kn),n(Q),n(mn),n(b),n(hn),n(at),n(gn),n(st),n(fn),n(P),n(vn),n(C),n(wn),n(lt),n(Cn),n(it),n(Sn),n(d),n(yn),n(kt),n(Tn),n(mt)),wt(G),wt(V),wt(F),wt(et),wt(ct),wt(rt),wt(dt)}}}class Fe extends Je{constructor(k){super(),Ve(this,k,null,Ne,De,{})}}export{Fe as component};
