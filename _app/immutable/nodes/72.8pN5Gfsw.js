import{s as ba,n as wa}from"../chunks/scheduler.UQwd20JU.js";import{S as Ca,i as ya,e as s,s as l,H as vt,c as wt,a as p,g as o,b as i,d as r,n as bt,h as n,f as Ct,o as c,j as e,p as u,m as yt,t as St,k as Tt,l as Pt}from"../chunks/index.i__Fl8cY.js";import{V as _t}from"../chunks/ViewApp.m6vzcyjb.js";function Sa(da){let k,Cn="5. Numbers",At,P,yn="This tutorial will teach you what datatypes are, and how to use numbers in JavaScript.",Et,_,Sn="Datatypes",It,A,Tn="In JavaScript, there exists different type of values, and we call these <em>datatypes</em>. So far, you have mostly been using the string datatype, whose values can be crated by encapuslating some characters between two <code>`</code> characters, like <code>`This is a string!`</code>. You use this for example when you create a <code>Text</code> component that should have a background color and some specific text:",Bt,E,Rt,ma=`<code class="language-js"><span class="token comment">// The values &#96;Hi there&#96; and &#96;red&#96; are both string values!</span>
Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>`,$t,I,Pn="But JavaScript contains many more datatypes than just strings. Let&#39;s take a look at the <em>number</em> datatype!",qt,B,_n="Creating a number",zt,R,An="Number is a datatype in JavaScript that represents a number (big surprice! xD). You can create new number values simply by writing them, for example:",Lt,$,En="<li>Write <code>51</code> to create the number value <code>51</code></li> <li>Write <code>-140</code> to create the number value <code>-140</code></li> <li>Write <code>6.57</code> to create the number value <code>6.57</code></li> <li>Write <code>-13.7</code> to create the number value <code>-13.7</code></li>",Mt,y,In='<div class="remark-container__title">Localization</div><p>In some natural languages, such as Swedish, one does not use period (<code>.</code>), but a comma (<code>,</code>), as the <a href="https://en.wikipedia.org/wiki/Decimal_separator" rel="nofollow" target="_blank">decimal separator</a>. JavaScript is based on English, and uses period as the decimal seperator, so using a comma will not work.</p>',Xt,q,Bn="Just as strings (and all datatypes), number values can be stored in constant and variables.",Ot,d,z,Rn="Example",it,$n="Example of an app that creates a page constant that stores a number.",L,M,m,qn="Open in Online Editor",ut,Ht,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">X</span> <span class="token operator">=</span> <span class="token number">4</span>
	<span class="token constant">Y</span> <span class="token operator">=</span> <span class="token number">2</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">a: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + 1 is equal to 5.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">b: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> + </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to 6.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">c: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">X</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> * </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">Y</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is equal to 8.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jt,X,zn="As you can see in the example above, just as we can use the special <code>${ ... }</code> syntax in strings created with two <code>`</code> characters to insert a string value into it, we can also use it to insert at number value into it (the special <code>${ ... }</code> syntax can also be used to insert values of other datatypes too; it does not only works for strings and numbers).",Vt,O,Ln="Mathematical operations",jt,H,Mn="Most often, an application needs to do computations with numbers, such as computing the sum of two numbers. For each of the ordinary mathematical operations, JavaScript has special symbols to denote them:",Dt,S,Xn="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Addition</td> <td><code>+</code></td> <td><code>4 + 2</code></td> <td><code>6</code></td></tr> <tr><td>Subtraction</td> <td><code>-</code></td> <td><code>4 - 2</code></td> <td><code>2</code></td></tr> <tr><td>Multiplication</td> <td><code>*</code></td> <td><code>4 * 2</code></td> <td><code>8</code></td></tr> <tr><td>Division</td> <td><code>/</code></td> <td><code>4 / 2</code></td> <td><code>2</code></td></tr></tbody>",Gt,J,On="You can use these mathematical operations anywhere in your JavaScript code you can use a number, for example:",Yt,V,Hn="<li>When creating a constant/variable</li> <li>In  <code>${ ... }</code> expressions in strings created with the <code>`</code> symbol</li>",Nt,x,j,Jn="Example",rt,Vn="Example of an app with some mathematical expressions.",D,G,h,jn="Open in Online Editor",kt,Ut,ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Wt,Y,Dn="Mathematical operations with multiple operands",Kt,N,Gn="Just as in ordinary math, you can use multiple mathematical operations at the same time. Ordinary operator precedence applies, i.e. <code>*</code> and <code>/</code> are computed before <code>+</code> and <code>-</code>. If you want <code>+</code> and <code>-</code> to be computed before <code>*</code> and <code>/</code>, surround them with parenthesis.",Ft,g,U,Yn="Example",dt,Nn="Example of an app using two mathematical operations at the same time.",W,K,f,Un="Open in Online Editor",mt,Zt,ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Qt,F,Wn="Changing a number in a variable",tn,Z,Kn="Just as for strings, we can use <code>p.theVariableName = 123</code> to store a new number in the variable (in this example, storing the number <code>123</code> in the page variable named <code>theVariableName</code>). But, where <code>123</code> is written, we don&#39;t have to write a single number like this, but we can also make use of any mathematical operation we want. A very commonthing apps do is to simply increment the value stored in a variable by <code>1</code> using an addition operation.",nn,v,Q,Fn="Example",xt,Zn="Example of an app that increments the number stored in a variable by <code>1</code> each time a button is clicked.",tt,nt,b,Qn="Open in Online Editor",ht,an,fa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,en,at,ta="To increment/decrement the number stored in a variable is very common thing to do in apps, but reading and understanding how code like <code>p.counter = p.counter + 1</code> works can be quite tricky for beginners. Especially, it can be very confusing that <code>p.counter</code> appears both on the left and the right side of the <code>=</code> symbol.",sn,et,na="There exists shortcut syntax in JavaScript one can use to increment/decrement a variable by another number, and this shortcut syntax is much easier to read and understand. There also exist shortcut syntax to mutliply/divide a variable by another number.",pn,T,aa="<thead><tr><th>Operation</th> <th>Ordinary syntax</th> <th>Shortcut syntax</th></tr></thead> <tbody><tr><td>Increment</td> <td><code>p.counter = p.counter + 2</code></td> <td><code>p.counter += 2</code></td></tr> <tr><td>Decrement</td> <td><code>p.counter = p.counter - 2</code></td> <td><code>p.counter -= 2</code></td></tr> <tr><td>Multiply</td> <td><code>p.counter = p.counter * 2</code></td> <td><code>p.counter *= 2</code></td></tr> <tr><td>Divide</td> <td><code>p.counter = p.counter / 2</code></td> <td><code>p.counter /= 2</code></td></tr></tbody>",on,w,st,ea="Example",gt,sa="The same app as before, but uses the shortcut syntax for increament the number stored in a variable instead.",pt,ot,C,pa="Open in Online Editor",ft,cn,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ln,ct,oa="That's it!",un,lt,ca="Good work, now you know the basics about how to use numbers in Bagawork! 🥳 It's not that hard, is it? In next tutorial, you'll see more useful examples of how we can use numbers.",rn;return M=new _t({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),G=new _t({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),K=new _t({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),nt=new _t({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),ot=new _t({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),{c(){k=s("h1"),k.textContent=Cn,At=l(),P=s("p"),P.textContent=yn,Et=l(),_=s("h2"),_.textContent=Sn,It=l(),A=s("p"),A.innerHTML=Tn,Bt=l(),E=s("pre"),Rt=new vt(!1),$t=l(),I=s("p"),I.innerHTML=Pn,qt=l(),B=s("h2"),B.textContent=_n,zt=l(),R=s("p"),R.textContent=An,Lt=l(),$=s("ul"),$.innerHTML=En,Mt=l(),y=s("div"),y.innerHTML=In,Xt=l(),q=s("p"),q.textContent=Bn,Ot=l(),d=s("div"),z=s("div"),z.textContent=Rn,it=s("p"),it.textContent=$n,L=s("div"),wt(M.$$.fragment),m=s("a"),m.textContent=qn,ut=s("pre"),Ht=new vt(!1),Jt=l(),X=s("p"),X.innerHTML=zn,Vt=l(),O=s("h2"),O.textContent=Ln,jt=l(),H=s("p"),H.textContent=Mn,Dt=l(),S=s("table"),S.innerHTML=Xn,Gt=l(),J=s("p"),J.textContent=On,Yt=l(),V=s("ul"),V.innerHTML=Hn,Nt=l(),x=s("div"),j=s("div"),j.textContent=Jn,rt=s("p"),rt.textContent=Vn,D=s("div"),wt(G.$$.fragment),h=s("a"),h.textContent=jn,kt=s("pre"),Ut=new vt(!1),Wt=l(),Y=s("h2"),Y.textContent=Dn,Kt=l(),N=s("p"),N.innerHTML=Gn,Ft=l(),g=s("div"),U=s("div"),U.textContent=Yn,dt=s("p"),dt.textContent=Nn,W=s("div"),wt(K.$$.fragment),f=s("a"),f.textContent=Un,mt=s("pre"),Zt=new vt(!1),Qt=l(),F=s("h2"),F.textContent=Wn,tn=l(),Z=s("p"),Z.innerHTML=Kn,nn=l(),v=s("div"),Q=s("div"),Q.textContent=Fn,xt=s("p"),xt.innerHTML=Zn,tt=s("div"),wt(nt.$$.fragment),b=s("a"),b.textContent=Qn,ht=s("pre"),an=new vt(!1),en=l(),at=s("p"),at.innerHTML=ta,sn=l(),et=s("p"),et.textContent=na,pn=l(),T=s("table"),T.innerHTML=aa,on=l(),w=s("div"),st=s("div"),st.textContent=ea,gt=s("p"),gt.textContent=sa,pt=s("div"),wt(ot.$$.fragment),C=s("a"),C.textContent=pa,ft=s("pre"),cn=new vt(!1),ln=l(),ct=s("h2"),ct.textContent=oa,un=l(),lt=s("p"),lt.textContent=ca,this.h()},l(t){k=p(t,"H1",{"data-svelte-h":!0}),o(k)!=="svelte-10ok0zp"&&(k.textContent=Cn),At=i(t),P=p(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-122md1k"&&(P.textContent=yn),Et=i(t),_=p(t,"H2",{"data-svelte-h":!0}),o(_)!=="svelte-1a9xgxd"&&(_.textContent=Sn),It=i(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-12621pt"&&(A.innerHTML=Tn),Bt=i(t),E=p(t,"PRE",{class:!0});var a=r(E);Rt=bt(a,!1),a.forEach(n),$t=i(t),I=p(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1w1snrw"&&(I.innerHTML=Pn),qt=i(t),B=p(t,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-ked2vl"&&(B.textContent=_n),zt=i(t),R=p(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1autvyt"&&(R.textContent=An),Lt=i(t),$=p(t,"UL",{"data-svelte-h":!0}),o($)!=="svelte-psvo6u"&&($.innerHTML=En),Mt=i(t),y=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-ar99o4"&&(y.innerHTML=In),Xt=i(t),q=p(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-1dksxyq"&&(q.textContent=Bn),Ot=i(t),d=p(t,"DIV",{class:!0});var kn=r(d);z=p(kn,"DIV",{class:!0,"data-svelte-h":!0}),o(z)!=="svelte-1llzxwj"&&(z.textContent=Rn),it=p(kn,"P",{"data-svelte-h":!0}),o(it)!=="svelte-1917nca"&&(it.textContent=$n),L=p(kn,"DIV",{});var dn=r(L);Ct(M.$$.fragment,dn),m=p(dn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-1dd6pve"&&(m.textContent=qn),ut=p(dn,"PRE",{class:!0});var la=r(ut);Ht=bt(la,!1),la.forEach(n),dn.forEach(n),kn.forEach(n),Jt=i(t),X=p(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-pxtonz"&&(X.innerHTML=zn),Vt=i(t),O=p(t,"H2",{"data-svelte-h":!0}),o(O)!=="svelte-1l0e4h8"&&(O.textContent=Ln),jt=i(t),H=p(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-5uzh9y"&&(H.textContent=Mn),Dt=i(t),S=p(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(S)!=="svelte-6it0wc"&&(S.innerHTML=Xn),Gt=i(t),J=p(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-114v8k1"&&(J.textContent=On),Yt=i(t),V=p(t,"UL",{"data-svelte-h":!0}),o(V)!=="svelte-17ng9vd"&&(V.innerHTML=Hn),Nt=i(t),x=p(t,"DIV",{class:!0});var mn=r(x);j=p(mn,"DIV",{class:!0,"data-svelte-h":!0}),o(j)!=="svelte-1llzxwj"&&(j.textContent=Jn),rt=p(mn,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-r9nule"&&(rt.textContent=Vn),D=p(mn,"DIV",{});var xn=r(D);Ct(G.$$.fragment,xn),h=p(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(h)!=="svelte-amfn0q"&&(h.textContent=jn),kt=p(xn,"PRE",{class:!0});var ia=r(kt);Ut=bt(ia,!1),ia.forEach(n),xn.forEach(n),mn.forEach(n),Wt=i(t),Y=p(t,"H2",{"data-svelte-h":!0}),o(Y)!=="svelte-h166aa"&&(Y.textContent=Dn),Kt=i(t),N=p(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-18mini6"&&(N.innerHTML=Gn),Ft=i(t),g=p(t,"DIV",{class:!0});var hn=r(g);U=p(hn,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=Yn),dt=p(hn,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-1t3qbsk"&&(dt.textContent=Nn),W=p(hn,"DIV",{});var gn=r(W);Ct(K.$$.fragment,gn),f=p(gn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-1om8z9g"&&(f.textContent=Un),mt=p(gn,"PRE",{class:!0});var ua=r(mt);Zt=bt(ua,!1),ua.forEach(n),gn.forEach(n),hn.forEach(n),Qt=i(t),F=p(t,"H2",{"data-svelte-h":!0}),o(F)!=="svelte-1qpdelt"&&(F.textContent=Wn),tn=i(t),Z=p(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-knbwnb"&&(Z.innerHTML=Kn),nn=i(t),v=p(t,"DIV",{class:!0});var fn=r(v);Q=p(fn,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1llzxwj"&&(Q.textContent=Fn),xt=p(fn,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-50n7ck"&&(xt.innerHTML=Zn),tt=p(fn,"DIV",{});var vn=r(tt);Ct(nt.$$.fragment,vn),b=p(vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(b)!=="svelte-1oxgwi7"&&(b.textContent=Qn),ht=p(vn,"PRE",{class:!0});var ra=r(ht);an=bt(ra,!1),ra.forEach(n),vn.forEach(n),fn.forEach(n),en=i(t),at=p(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1n3j9a8"&&(at.innerHTML=ta),sn=i(t),et=p(t,"P",{"data-svelte-h":!0}),o(et)!=="svelte-oc1jba"&&(et.textContent=na),pn=i(t),T=p(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(T)!=="svelte-1la0cif"&&(T.innerHTML=aa),on=i(t),w=p(t,"DIV",{class:!0});var bn=r(w);st=p(bn,"DIV",{class:!0,"data-svelte-h":!0}),o(st)!=="svelte-1llzxwj"&&(st.textContent=ea),gt=p(bn,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-a3kwzm"&&(gt.textContent=sa),pt=p(bn,"DIV",{});var wn=r(pt);Ct(ot.$$.fragment,wn),C=p(wn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-1gsgq93"&&(C.textContent=pa),ft=p(wn,"PRE",{class:!0});var ka=r(ft);cn=bt(ka,!1),ka.forEach(n),wn.forEach(n),bn.forEach(n),ln=i(t),ct=p(t,"H2",{"data-svelte-h":!0}),o(ct)!=="svelte-p2uhy5"&&(ct.textContent=oa),un=i(t),lt=p(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-5dmwcn"&&(lt.textContent=ca),this.h()},h(){Rt.a=null,c(E,"class","language-js"),c(y,"class","remark-container warning"),c(z,"class","remark-container__title"),c(m,"target","_blank"),c(m,"href","/editor#eNrFk19r2zAUxb/KRQwab8bU6doFwxjOyEoe+oc0axOWsmj2dROmSJ4k0wbj7z6pbtwoOCN92oPNlaXfvT7n2CWheU6ikiQiRRKRhFGl4GId5zngk0aeKjB1OeMzba9v8e3VaDge/Lz8ftEfjOAzhJ82e4lEqvFGU6mv6QN2vJrSEnUhOTQb9mlVQxWpfJIJlqJUJPpRkmVKotAnnK7s2zwjxCciyxTqCYmON/XU1NW9T3LTzyHrZsN64Yhq5jfC7KJRNjFaPtpiaoquq+m8WO6qGYlHFSSLJUsl8k69NdNj0zrQ5taZ0wjelXkwqeADhLBUgH8KykALOA3mnt9C/NoibDGtHOxsD5Y02Ps2rPeKeY7zPnkyJvWMpWsSnYRnGzvHuMqZEe3Y6jgZq9/DLE4L9g87Be9jJuTrV7A1+8223uQ0wTbtsURYiwKeQwe9oBzC3pctn1zyq2DFircM2D040/1CGw0vYy7F3AusNx1eMOb5B2JTVIdxbQFZC+NMo2xz0P43dTbdnWwG3CDxA/7vZO4WVB8pG44EM31/Jo5j4XG7Ye6h0wMOdQ/p1N3TafsN35LJffUXjUfliA=="),c(m,"title","Open in our Online Editor"),Ht.a=null,c(ut,"class","language-js"),c(d,"class","remark-container tip"),c(S,"border","1"),c(j,"class","remark-container__title"),c(h,"target","_blank"),c(h,"href","/editor#eNrFU11r2zAU/SsXMVjcGVNnX8VQhjOykYe2I83ahKYsmn3dhCmSJ8mswfi/T4obLzJOSZ/2YHOlq3Ouzjl2SWiek6gkiUiRRCRhVCm42MR5DviokacKTF3O+Vzb50t8czUeTYY/Lr9fDIZjOIfw466XSKQarzWV+ht9wJ5Xo7REXUgOTcPuVjWoIpVPMsFSlIpEdyVZpSQKfcLp2t5mCyE+EVmmUE9JdLqrZ6au7n2SGz4HWZON6oUjqpnfCLOLRtnUaHlni5kVBW8gdHV9LVZtRWPxRwXJcsVSibxXt+Z6YugDbV69BY22TH1YKcDfBWWgBbwqt3tVsPD8DszPyJzIg1nVATTbz0GTGjq10CeONn5qWrZxgCFtGE4OM5y0GDwnUJ88Gu/PTFIbEr0NP+xSmuA6Z8ZHJy0noFj9GmVxWrBnUhJ8gJmQ/z6uvdkvTuo6pwl22RBLhI0oYPstgV5SDuHZpz3LXORnwYo17xjQPjjXg0IbDU9jLsXCC6w3PV4w5vlHwmaojsN1BWQtjDONsstB+zvW2fRb2Qy5gcQP+L+TuV1S/VrZcCSY6YczcRwLT7sNcw+9P+JQ/xim/gGm/Ru+JJP76i8iUf8j"),c(h,"title","Open in our Online Editor"),Ut.a=null,c(kt,"class","language-js"),c(x,"class","remark-container tip"),c(U,"class","remark-container__title"),c(f,"target","_blank"),c(f,"href","/editor#eNrFU2Fr2zAQ/SuHKMzujKldthXDGM7IRj60G2napSxl0exzE6ZIniSzBuP/PjleXCvYJf20DxaS7t47vXvnktA8J1FJEpEiiUjCqFJwuY3zHPBRI08VmH254Atdf5/i2y/TyWz84+rmcjSewnsI3u1jiUSq8VpTqb/SB3TcBqUl6kJyaAP1bdWAKlJ5JBMsRalI9L0k65REgUc43dSv2UGIR0SWKdRzEp3t93dmX917JDd8FrIhmzQHS1RbvxVWH1plc6MltKV8LtaHIqbij/KT1ZqlErnThBZ6Zhh9bRZnSSMI4DWE5juHtQL8XVAGWsBJ2d5X/tL1erA/G+xJmfvzaoDAhJ6jSKIn+OHGJmuI2nWIMN3rOR3Qczr8GIzA2SW5PehOpIN3reHwyKPx8cK4viXRefB27/gMNzkzBlnOW2bH6tcki9OCPeO44CPMhHwa1E7tF4/AdU4T7GtCLBG2ooDdXIJeUQ7BxYdOw2zkR8GKDe8pcJi40KNCGw3/ylyJpevXvXF4wZjrHQm7Q3Ucrs+guoVxplH2dbD+tRtvwgNvxtxA4gf83858W1H9StXmSDDVhz2xOhac9TfMTnpzRFJ4DFM4wNR94Us8ua/+AoxaEBo="),c(f,"title","Open in our Online Editor"),Zt.a=null,c(mt,"class","language-js"),c(g,"class","remark-container tip"),c(Q,"class","remark-container__title"),c(b,"target","_blank"),c(b,"href","/editor#eNrFVGFr2zAQ/SuHGMxmxq0zthVDGG7pRj60G2m2rixlUexzIyrLRpbThpD/Psmq3SikI/20QBI5d+/p7t27rAmtKhKvSVpmSGKSclrXcLFKqgrwUaHIatDn9VRMlXl/SX5+G48m538uf1ycno9hCNGnLpZKpAqvFJXqO71Dz7coJVE1UkAfML9uLGhDNgHJS56hrEn8e01YRuIoIIIWppoWQgJS5nmN6heJj7vzjT5vbgNSaT4HaclG9sFpqr+/b8w89J2lZSMUStOR29DXhu22Mi4f6jBdMJ5JFJ4NTdVE84ZKf3izyQKhI1xSyeicI7Aa0kZqhOIreLOuwqeMTTjzg47ktFGqFE80I6FLKDSgI5v54YKKjKP0qpB10TMb9C2Hv6XvVO0m9a0cHcH1AgWottSiakyt+IipPtT6V1Otli8ApuCBcR73sCiEMwuAvgd4B1EA8xXkTNbqOde8dP4YlWS4RHubFQFEU8w1koktGi9qU1oWUKywiHkrSisgZ+k9Zr5zweC5oIcFVTAlynwtKW9wSkxpBqqpzWkIg1deoemvVClNHlWdVpmlB89h20vkdGhZnxseuho6uxGQR23jE236FYnfRx87w0+wqLh2pmN8x+tJfT/Kk6zh/zB8KU4x1231jnB880rvX1U0xWDPJiRat1XZQLuWRkEB0cnnLcO7yLOSN4XYc8Fu4s6mXJZ6NYw2nmg494MDYTdYH4brIu5ylSLJt3dq55/NzmawM5tzM+vkDv/3ZK61m9/WZjgS9O0vz8RRLDreL5ib9OGApMEhTIMXmLYrfM1Mbjd/AaqZfIE="),c(b,"title","Open in our Online Editor"),an.a=null,c(ht,"class","language-js"),c(v,"class","remark-container tip"),c(T,"border","1"),c(st,"class","remark-container__title"),c(C,"target","_blank"),c(C,"href","/editor#eNrFk11r2zAUhv+KEIPZzLh1xrZiGMMp2chFu5FmH2Upi2IfN2ayZPTR1Rj/98lV7EYmHenVLmwkn/O+Ouc8coNJVeG4wSnPAMc4pURKdFEnVYXgXgHLJDLrZsVWqns+Jt8+L+bL2a/LrxfT2QK9R9G7PpYKIAquFBHqC7kFz7cqJUBpwdAQ6L62VtTiNsA5pxkIieOfDS4yHEcBZqTsqnmQ4ADzPJegfuD4tF9fm3V7E+DK+DlKaza3G6ep4fyhsW4zdJZyzRSIriO3oU+6GLey4H9kmG4Lmglgng2t1NL4hsq8vPVyC6g3vCOiIBsKqJAo1cIoFK3Ri6YKdxltuPaD3mSqleJsZzNnpoTSCHqztR9uCcsoCK8Kiz56boO+9fD35rtS46ShlZMT9GivTL1MlxtTrlRcQIYKhoYC0aZGUWhljx9f7SY1oAzwvZn6mWFU4/h19Lbns4SyomaQDicHTSJ/z/Mk0/QffDibQm5KGxpw2nwmqquKpBAcAJcIQDXX6OEWmbEQhqKzD3t8XOU5p7pkBw4YJ47AXnJDspuNxzSlfnCk7Brkcbo+4t4FzpJ8/wqMfkTLZjJiM+tgJ7fwv8l83xL1UnZwBDKnP83EmVh0enhgbtKbI5ImxzhNnnDar/A5TG7av6mfDC8="),c(C,"title","Open in our Online Editor"),cn.a=null,c(ft,"class","language-js"),c(w,"class","remark-container tip")},m(t,a){e(t,k,a),e(t,At,a),e(t,P,a),e(t,Et,a),e(t,_,a),e(t,It,a),e(t,A,a),e(t,Bt,a),e(t,E,a),Rt.m(ma,E),e(t,$t,a),e(t,I,a),e(t,qt,a),e(t,B,a),e(t,zt,a),e(t,R,a),e(t,Lt,a),e(t,$,a),e(t,Mt,a),e(t,y,a),e(t,Xt,a),e(t,q,a),e(t,Ot,a),e(t,d,a),u(d,z),u(d,it),u(d,L),yt(M,L,null),u(L,m),u(L,ut),Ht.m(xa,ut),e(t,Jt,a),e(t,X,a),e(t,Vt,a),e(t,O,a),e(t,jt,a),e(t,H,a),e(t,Dt,a),e(t,S,a),e(t,Gt,a),e(t,J,a),e(t,Yt,a),e(t,V,a),e(t,Nt,a),e(t,x,a),u(x,j),u(x,rt),u(x,D),yt(G,D,null),u(D,h),u(D,kt),Ut.m(ha,kt),e(t,Wt,a),e(t,Y,a),e(t,Kt,a),e(t,N,a),e(t,Ft,a),e(t,g,a),u(g,U),u(g,dt),u(g,W),yt(K,W,null),u(W,f),u(W,mt),Zt.m(ga,mt),e(t,Qt,a),e(t,F,a),e(t,tn,a),e(t,Z,a),e(t,nn,a),e(t,v,a),u(v,Q),u(v,xt),u(v,tt),yt(nt,tt,null),u(tt,b),u(tt,ht),an.m(fa,ht),e(t,en,a),e(t,at,a),e(t,sn,a),e(t,et,a),e(t,pn,a),e(t,T,a),e(t,on,a),e(t,w,a),u(w,st),u(w,gt),u(w,pt),yt(ot,pt,null),u(pt,C),u(pt,ft),cn.m(va,ft),e(t,ln,a),e(t,ct,a),e(t,un,a),e(t,lt,a),rn=!0},p:wa,i(t){rn||(St(M.$$.fragment,t),St(G.$$.fragment,t),St(K.$$.fragment,t),St(nt.$$.fragment,t),St(ot.$$.fragment,t),rn=!0)},o(t){Tt(M.$$.fragment,t),Tt(G.$$.fragment,t),Tt(K.$$.fragment,t),Tt(nt.$$.fragment,t),Tt(ot.$$.fragment,t),rn=!1},d(t){t&&(n(k),n(At),n(P),n(Et),n(_),n(It),n(A),n(Bt),n(E),n($t),n(I),n(qt),n(B),n(zt),n(R),n(Lt),n($),n(Mt),n(y),n(Xt),n(q),n(Ot),n(d),n(Jt),n(X),n(Vt),n(O),n(jt),n(H),n(Dt),n(S),n(Gt),n(J),n(Yt),n(V),n(Nt),n(x),n(Wt),n(Y),n(Kt),n(N),n(Ft),n(g),n(Qt),n(F),n(tn),n(Z),n(nn),n(v),n(en),n(at),n(sn),n(et),n(pn),n(T),n(on),n(w),n(ln),n(ct),n(un),n(lt)),Pt(M),Pt(G),Pt(K),Pt(nt),Pt(ot)}}}class Aa extends Ca{constructor(k){super(),ya(this,k,null,Sa,ba,{})}}export{Aa as component};
