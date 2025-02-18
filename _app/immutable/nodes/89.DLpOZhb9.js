import{s as La,n as Ba}from"../chunks/scheduler.B0TnBjPs.js";import{S as Da,i as ja,e,s as c,c as D,H as b,a as p,g as o,b as i,d as r,f as j,n as y,h as t,o as l,j as a,p as u,m as A,t as U,k as $,l as O}from"../chunks/index.BXVnRmkj.js";import{V as q}from"../chunks/ViewApp.qg7AIhJt.js";function Aa(ya){let I,os="6. Booleans, <code>keepIf()</code> and <code>showIf()</code>",it,V,ls="This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.",ut,R,cs="The boolean datatype",rt,N,is="An app often needs to do different things depending on if an answer to a question is <em>yes</em> or <em>no</em>. Examples of that are:",kt,Z,us="<li>In a message app: Do you have 0 messages?<ul><li>If <em>yes</em>, show the text <em>You have no messages</em></li> <li>If <em>no</em>, show a list with the messages</li></ul></li> <li>In a health app: Is the entered age negative?<ul><li>If <em>yes</em>, show the text <em>The age you enter must be greater than or equal to 0</em></li> <li>If <em>no</em>, show the text <em>The entered age is OK</em></li></ul></li>",dt,F,rs="To represent these <em>yes</em> and <em>no</em> answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:",mt,Y,ks="<li><code>true</code> means <em>yes</em></li> <li><code>false</code> means <em>no</em></li>",ft,X,ds="So instead of thinking of it like the question <em>Do you have 0 messages?</em>, this datatype thinks of it like a statement that is correct (<code>true</code>) or incorrect (<code>false</code>), i.e.:",ht,J,ms="<li>In a message app: You have 0 messages<ul><li>If <code>true</code>, show the text <em>You have no messages</em></li> <li>If <code>false</code>, show a list with the messages</li></ul></li> <li>In a health app: The entered age is negative<ul><li>If <code>true</code>, show the text <em>The age must be greater than or equal to 0</em></li> <li>If <code>false</code>, show the text <em>The entered age is OK</em></li></ul></li>",xt,W,fs="<code>true</code> and <code>false</code>, like all values in JavaScript, can be stored in variables and constants, just like strings and numbers.",gt,E,hs='<div class="remark-container__title">Don&#39;t use `</div><p>Don&#39;t surround <code>true</code> with the <code>`</code> character! If you do, you create the string that contains the characters <code>t</code>, <code>r</code>, <code>u</code> and <code>e</code>, and not the boolean value <code>true</code> that means that something is correct.</p><p>The same goes for <code>false</code> too, of course.</p>',vt,d,z,xs="Example",Bn,gs="Example of an app that uses a boolean page variable.",K,C,vs="Open in Online Editor",Dn,wt,Ia=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,bt,M,ws='<div class="remark-container__title">Naming convention</div><p>A constant/variable that stores a boolean value usually has a name that starts with <code>is</code> or <code>has</code> to indicate that, like:</p><ul><li><code>isGirl</code></li> <li><code>isGameOver</code></li> <li><code>isAlive</code></li> <li><code>hasDied</code></li> <li><code>hasBeatenTheGame</code></li></ul>',yt,Q,bs="Conditionally keeping components",It,nn,ys="Using boolean values we can conditionally keep/remove GUI components using the configuration method <code>keepIf()</code>. When you call this method, you should pass it a boolean value, and if that value is <code>false</code>, the component will be removed, and not used in the GUI.",Ct,m,tn,Is="Example",jn,Cs="Example of an app that uses <code>keepIf()</code>.",sn,T,Ts="Open in Online Editor",An,Tt,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text              <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. This Text component doesn't call keepIf() at all, so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. This Text component passes true to keepIf(), so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,an,_s="Directly passing <code>true</code> or <code>false</code> to <code>keepIf()</code> is of course not that meaningful. Instead, you can use a variable to pass a boolean value to <code>keepIf()</code>, so you pass different values to <code>keepIf()</code> depending on what value is stored in that variable.",Gt,f,en,Gs="Example",Un,Ss="Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.",pn,_,Ps="Open in Online Editor",$n,St,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,on,Hs="Computations with booleans",Ht,ln,Es="In the previous example, we kept a special <code>Text</code> component using:",Et,cn,Mt,_a='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span></code>',Lt,un,Ms="But how can we keep a special <code>Text</code> component if the user on the other hand is a boy (i.e. when <code>p.isGirl</code> has the value <code>false</code>)? Just as we can use mathematical operations with numbers, there are some operations we can use with boolean values. The simplest is the <code>==</code> operation, which checks if the value to left of <code>==</code> is equal to the value to the right of it. If they are equal, the result of the operation is <code>true</code>, and if they are not equal, the result is instead <code>false</code>.",Bt,rn,Ls="So, to check if the user is a boy, we can compare <code>p.isGirl</code> with <code>false</code> using the <code>==</code> operator.",Dt,h,kn,Bs="Example",On,Ds="Example showing different texts to boys and girls.",dn,G,js="Open in Online Editor",qn,jt,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,At,k,mn,As="Checking for true values",Vn,Us="We used the following code to check if the user is a girl:",Rn,Ut,Sa='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span></code>',Nn,$s="If you think the code becomes easier to read, you can also compare <code>p.isGirl</code> with <code>true</code>:",Zn,$t,Pa='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code>',Fn,Os="Both ways work equally good, so feel free to do whichever way you think is the easiest to understand.",Ot,L,qs='<div class="remark-container__title">Use ==</div><p>It&#39;s common for beginners to forget to use <code>==</code> when checking for equality, and instead write <code>=</code>, but then the code will not work as they indend to. The code might still run if you use <code>=</code> to check for equality (remember, <code>=</code> means the variable to the left should be assigned the value to the right), so it&#39;s really important to remember to write <code>==</code> when checking for equality.</p>',qt,fn,Vs="Computations resulting in a boolean value",Vt,hn,Rs="The <code>==</code> operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:",Rt,B,Ns="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Equality</td> <td><code>==</code></td> <td><code>5 == 4</code></td> <td><code>false</code></td></tr> <tr><td>Inequality</td> <td><code>!=</code></td> <td><code>5 != 4</code></td> <td><code>true</code></td></tr> <tr><td>Less than</td> <td><code>&lt;</code></td> <td><code>5 &lt; 4</code></td> <td><code>false</code></td></tr> <tr><td>Less than or equal to</td> <td><code>&lt;=</code></td> <td><code>5 &lt;= 4</code></td> <td><code>false</code></td></tr></tbody>",Nt,x,xn,Zs="Example",Yn,Fs="Example showing different <code>Text</code> component based on the number in a page variable.",gn,S,Ys="Open in Online Editor",Xn,Zt,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> (it's negative!)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Zero</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>counter <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>counter<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">It's a big number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">9</span> <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Decrement</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrement<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,vn,Xs="Conditionally showing components",Yt,wn,Js="The configuration method <code>keepIf()</code> removes the component if the argument you pass to it is <code>false</code>. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be.",Xt,g,bn,Ws="Example",Jn,zs="Example showing how some <code>Text</code> components &quot;jump around&quot; on the screen when clicking on the button.",yn,P,Ks="Open in Online Editor",Wn,Jt,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am fine.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Wt,In,Qs="To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn&#39;t have been removed. To accomplish this, we can use the configuration method <code>showIf()</code> instead of <code>keepIf()</code>. <code>showIf()</code> works the same way as <code>keepIf()</code>, but the component will still occupy space when it&#39;s not shown.",zt,v,Cn,na="Example",zn,ta="Example showing how some <code>Text</code> components always occupy space on the screen, but they are not always shown.",Tn,H,sa="Open in Online Editor",Kn,Kt,Ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am fine.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Qt,_n,aa="If you should use <code>keepIf()</code> or <code>showIf()</code> in your app does of course depend on how you want your app to work.",ns,Gn,ea="Exercises",ts,Sn,pa="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",ss,w,Pn,oa="Exercise 1",Qn,la='<a href="/editor#eNq1UsFKw0AQ/ZVlLjawSBstlFwkipQeFLEFLabQJZm0pelu2J1gS8jFv/DkL/oJJo0pTWgUBA8JM3lv5r15JAURx+Ck4KsAwQE/Esawu50bxwy3hDIwLK9TT3pUPL5GQTgmoelBLLBjlQhppERLdgCKr1k5lEHGIVRRgNqA85LCKgCnx0GKTaG4HwEOKgwN0jM43aqe5nU24xDn+2qT5bJR2dSMH/QP5oum4X6YrJq+Jzn9nPJXZz5UKmBR4q/Z58f729yqXcJhC85l94LDDhx7YFf2JriJo3x1zWbNmWvWo9ANkugv9h7Vqzn3l6so0Cg7JeTROBY+8qo7OsHVyHYqYfuYGC2FZL3B1dzipydvVJRs5AmBJtGj64RIyW+Ze3W08hfuFM0P5AqxGr9NGaXdiPJWEmp3gf8f5NNS0JkpstQs398eYe3WXveIV0f6bYjdOmP3W1QbYc2yL/byX4o=" target="_blank">This BagaWork project</a> contains an empty page. Change the code in it, so it functions as shown below.',Hn,nt,ca="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",tt,ia="<summary>Hint</summary><p>The GUI actually contains two buttons, but only one of them is shown at a time! Use a boolean value to keep track of whether the first or the second button should be shown, and use two different click handler methods (one for each button) to change that value to <code>true</code>/<code>false</code>.</p>",as,En,ua="That's it!",es,Mn,ra='Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work! Now there is only one more tutorial in this section, and that is <a href="../on-before/">Tutorial 7. <code>onBefore()</code></a>.',ps;return K=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Space,
			Button.text(\`I'm a boy!\`).onClick(p.setIsBoy),
			Button.text(\`I'm a girl!\`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}`,x:150,y:200}]}}}),sn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text              .text(\`1. This Text component doesn't call keepIf() at all, so it will be used as usual.\`),
			Text.keepIf(false).text(\`2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.\`),
			Text.keepIf(true) .text(\`3. This Text component passes true to keepIf(), so it will be used as usual.\`),
		)
	}
	
}`,x:150,y:200}]}}}),pn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Text.text(\`You are a girl!\`).keepIf(p.isGirl),
			Space,
			Button.text(\`I'm a boy!\`).onClick(p.setIsBoy),
			Button.text(\`I'm a girl!\`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}`,x:150,y:200}]}}}),dn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Text.text(\`You are a girl!\`).keepIf(p.isGirl),
			Text.text(\`You are a boy!\`).keepIf(p.isGirl == false),
			Space,
			Button.text(\`I'm a boy!\`).onClick(p.setIsBoy),
			Button.text(\`I'm a girl!\`).onClick(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
	}
	
}`,x:150,y:200}]}}}),gn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 0
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`\${p.counter} (it's negative!)\`).keepIf(p.counter < 0),
			Text.text(\`Zero\`).keepIf(p.counter == 0),
			Text.text(\`\${p.counter}\`).keepIf(1 <= p.counter),
			Space,
			Text.text(\`It's a big number!\`).keepIf(9 < p.counter),
			Space,
			Columns.children(
				Button.text(\`Decrement\`).onClick(p.decrement),
				Space,
				Button.text(\`Increment\`).onClick(p.increment),
			)
		)
	}
	
	decrement(){
		p.counter -= 1
	}
	
	increment(){
		p.counter += 1
	}
	
}`,x:150,y:200}]}}}),yn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hi there!\`).keepIf(1 <= p.counter),
			Text.text(\`How are you?\`).keepIf(2 <= p.counter),
			Text.text(\`I am fine.\`).keepIf(3 <= p.counter),
			Space,
			Button.text(\`Next\`).onClick(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
	}
	
}`,x:150,y:200}]}}}),Tn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hi there!\`).showIf(1 <= p.counter),
			Text.text(\`How are you?\`).showIf(2 <= p.counter),
			Text.text(\`I am fine.\`).showIf(3 <= p.counter),
			Space,
			Button.text(\`Next\`).onClick(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
	}
	
}`,x:150,y:200}]}}}),Hn=new q({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isShowingFirstButton = true
	
	createGui(){
		return Rows.children(
			Space,
			Button.text(\`Click me!\`).showIf(p.isShowingFirstButton).onClick(p.showSecondButton),
			Space,
			Button.text(\`Click me!\`).showIf(p.isShowingFirstButton == false).onClick(p.showFirstButton),
			Space,
		)
	}
	
	showFirstButton(){
		p.isShowingFirstButton = true
	}
	
	showSecondButton(){
		p.isShowingFirstButton = false
	}
	
}`,x:150,y:200}]}}}),{c(){I=e("h1"),I.innerHTML=os,it=c(),V=e("p"),V.textContent=ls,ut=c(),R=e("h2"),R.textContent=cs,rt=c(),N=e("p"),N.innerHTML=is,kt=c(),Z=e("ul"),Z.innerHTML=us,dt=c(),F=e("p"),F.innerHTML=rs,mt=c(),Y=e("ul"),Y.innerHTML=ks,ft=c(),X=e("p"),X.innerHTML=ds,ht=c(),J=e("ul"),J.innerHTML=ms,xt=c(),W=e("p"),W.innerHTML=fs,gt=c(),E=e("div"),E.innerHTML=hs,vt=c(),d=e("div"),z=e("div"),z.textContent=xs,Bn=e("p"),Bn.textContent=gs,D(K.$$.fragment),C=e("a"),C.textContent=vs,Dn=e("pre"),wt=new b(!1),bt=c(),M=e("div"),M.innerHTML=ws,yt=c(),Q=e("h2"),Q.textContent=bs,It=c(),nn=e("p"),nn.innerHTML=ys,Ct=c(),m=e("div"),tn=e("div"),tn.textContent=Is,jn=e("p"),jn.innerHTML=Cs,D(sn.$$.fragment),T=e("a"),T.textContent=Ts,An=e("pre"),Tt=new b(!1),_t=c(),an=e("p"),an.innerHTML=_s,Gt=c(),f=e("div"),en=e("div"),en.textContent=Gs,Un=e("p"),Un.textContent=Ss,D(pn.$$.fragment),_=e("a"),_.textContent=Ps,$n=e("pre"),St=new b(!1),Pt=c(),on=e("h2"),on.textContent=Hs,Ht=c(),ln=e("p"),ln.innerHTML=Es,Et=c(),cn=e("pre"),Mt=new b(!1),Lt=c(),un=e("p"),un.innerHTML=Ms,Bt=c(),rn=e("p"),rn.innerHTML=Ls,Dt=c(),h=e("div"),kn=e("div"),kn.textContent=Bs,On=e("p"),On.textContent=Ds,D(dn.$$.fragment),G=e("a"),G.textContent=js,qn=e("pre"),jt=new b(!1),At=c(),k=e("div"),mn=e("div"),mn.textContent=As,Vn=e("p"),Vn.textContent=Us,Rn=e("pre"),Ut=new b(!1),Nn=e("p"),Nn.innerHTML=$s,Zn=e("pre"),$t=new b(!1),Fn=e("p"),Fn.textContent=Os,Ot=c(),L=e("div"),L.innerHTML=qs,qt=c(),fn=e("h2"),fn.textContent=Vs,Vt=c(),hn=e("p"),hn.innerHTML=Rs,Rt=c(),B=e("table"),B.innerHTML=Ns,Nt=c(),x=e("div"),xn=e("div"),xn.textContent=Zs,Yn=e("p"),Yn.innerHTML=Fs,D(gn.$$.fragment),S=e("a"),S.textContent=Ys,Xn=e("pre"),Zt=new b(!1),Ft=c(),vn=e("h2"),vn.textContent=Xs,Yt=c(),wn=e("p"),wn.innerHTML=Js,Xt=c(),g=e("div"),bn=e("div"),bn.textContent=Ws,Jn=e("p"),Jn.innerHTML=zs,D(yn.$$.fragment),P=e("a"),P.textContent=Ks,Wn=e("pre"),Jt=new b(!1),Wt=c(),In=e("p"),In.innerHTML=Qs,zt=c(),v=e("div"),Cn=e("div"),Cn.textContent=na,zn=e("p"),zn.innerHTML=ta,D(Tn.$$.fragment),H=e("a"),H.textContent=sa,Kn=e("pre"),Kt=new b(!1),Qt=c(),_n=e("p"),_n.innerHTML=aa,ns=c(),Gn=e("h2"),Gn.textContent=ea,ts=c(),Sn=e("p"),Sn.textContent=pa,ss=c(),w=e("div"),Pn=e("div"),Pn.textContent=oa,Qn=e("p"),Qn.innerHTML=la,D(Hn.$$.fragment),nt=e("p"),nt.textContent=ca,tt=e("details"),tt.innerHTML=ia,as=c(),En=e("h2"),En.textContent=ua,es=c(),Mn=e("p"),Mn.innerHTML=ra,this.h()},l(n){I=p(n,"H1",{"data-svelte-h":!0}),o(I)!=="svelte-8fbfcu"&&(I.innerHTML=os),it=i(n),V=p(n,"P",{"data-svelte-h":!0}),o(V)!=="svelte-o2o5ce"&&(V.textContent=ls),ut=i(n),R=p(n,"H2",{"data-svelte-h":!0}),o(R)!=="svelte-44dcdv"&&(R.textContent=cs),rt=i(n),N=p(n,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1vl51y6"&&(N.innerHTML=is),kt=i(n),Z=p(n,"UL",{"data-svelte-h":!0}),o(Z)!=="svelte-1l99qqb"&&(Z.innerHTML=us),dt=i(n),F=p(n,"P",{"data-svelte-h":!0}),o(F)!=="svelte-h3rlkl"&&(F.innerHTML=rs),mt=i(n),Y=p(n,"UL",{"data-svelte-h":!0}),o(Y)!=="svelte-36dcdj"&&(Y.innerHTML=ks),ft=i(n),X=p(n,"P",{"data-svelte-h":!0}),o(X)!=="svelte-10da6r3"&&(X.innerHTML=ds),ht=i(n),J=p(n,"UL",{"data-svelte-h":!0}),o(J)!=="svelte-b930rv"&&(J.innerHTML=ms),xt=i(n),W=p(n,"P",{"data-svelte-h":!0}),o(W)!=="svelte-190bpvw"&&(W.innerHTML=fs),gt=i(n),E=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-182o0cy"&&(E.innerHTML=hs),vt=i(n),d=p(n,"DIV",{class:!0});var s=r(d);z=p(s,"DIV",{class:!0,"data-svelte-h":!0}),o(z)!=="svelte-1llzxwj"&&(z.textContent=xs),Bn=p(s,"P",{"data-svelte-h":!0}),o(Bn)!=="svelte-1nsfze"&&(Bn.textContent=gs),j(K.$$.fragment,s),C=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-1g2zdfb"&&(C.textContent=vs),Dn=p(s,"PRE",{class:!0});var ka=r(Dn);wt=y(ka,!1),ka.forEach(t),s.forEach(t),bt=i(n),M=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(M)!=="svelte-1ypy7kr"&&(M.innerHTML=ws),yt=i(n),Q=p(n,"H2",{"data-svelte-h":!0}),o(Q)!=="svelte-1lal7r2"&&(Q.textContent=bs),It=i(n),nn=p(n,"P",{"data-svelte-h":!0}),o(nn)!=="svelte-1268139"&&(nn.innerHTML=ys),Ct=i(n),m=p(n,"DIV",{class:!0});var st=r(m);tn=p(st,"DIV",{class:!0,"data-svelte-h":!0}),o(tn)!=="svelte-1llzxwj"&&(tn.textContent=Is),jn=p(st,"P",{"data-svelte-h":!0}),o(jn)!=="svelte-hqdola"&&(jn.innerHTML=Cs),j(sn.$$.fragment,st),T=p(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-12z0btd"&&(T.textContent=Ts),An=p(st,"PRE",{class:!0});var da=r(An);Tt=y(da,!1),da.forEach(t),st.forEach(t),_t=i(n),an=p(n,"P",{"data-svelte-h":!0}),o(an)!=="svelte-1b3tx9p"&&(an.innerHTML=_s),Gt=i(n),f=p(n,"DIV",{class:!0});var at=r(f);en=p(at,"DIV",{class:!0,"data-svelte-h":!0}),o(en)!=="svelte-1llzxwj"&&(en.textContent=Gs),Un=p(at,"P",{"data-svelte-h":!0}),o(Un)!=="svelte-70wjwb"&&(Un.textContent=Ss),j(pn.$$.fragment,at),_=p(at,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(_)!=="svelte-1t3lbnx"&&(_.textContent=Ps),$n=p(at,"PRE",{class:!0});var ma=r($n);St=y(ma,!1),ma.forEach(t),at.forEach(t),Pt=i(n),on=p(n,"H2",{"data-svelte-h":!0}),o(on)!=="svelte-j8st43"&&(on.textContent=Hs),Ht=i(n),ln=p(n,"P",{"data-svelte-h":!0}),o(ln)!=="svelte-aroyaw"&&(ln.innerHTML=Es),Et=i(n),cn=p(n,"PRE",{class:!0});var fa=r(cn);Mt=y(fa,!1),fa.forEach(t),Lt=i(n),un=p(n,"P",{"data-svelte-h":!0}),o(un)!=="svelte-1bot8m4"&&(un.innerHTML=Ms),Bt=i(n),rn=p(n,"P",{"data-svelte-h":!0}),o(rn)!=="svelte-iogsrp"&&(rn.innerHTML=Ls),Dt=i(n),h=p(n,"DIV",{class:!0});var et=r(h);kn=p(et,"DIV",{class:!0,"data-svelte-h":!0}),o(kn)!=="svelte-1llzxwj"&&(kn.textContent=Bs),On=p(et,"P",{"data-svelte-h":!0}),o(On)!=="svelte-1v00t9c"&&(On.textContent=Ds),j(dn.$$.fragment,et),G=p(et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(G)!=="svelte-1qhbgb4"&&(G.textContent=js),qn=p(et,"PRE",{class:!0});var ha=r(qn);jt=y(ha,!1),ha.forEach(t),et.forEach(t),At=i(n),k=p(n,"DIV",{class:!0});var Ln=r(k);mn=p(Ln,"DIV",{class:!0,"data-svelte-h":!0}),o(mn)!=="svelte-b5ewfc"&&(mn.textContent=As),Vn=p(Ln,"P",{"data-svelte-h":!0}),o(Vn)!=="svelte-1nkxw4h"&&(Vn.textContent=Us),Rn=p(Ln,"PRE",{class:!0});var xa=r(Rn);Ut=y(xa,!1),xa.forEach(t),Nn=p(Ln,"P",{"data-svelte-h":!0}),o(Nn)!=="svelte-ulua0t"&&(Nn.innerHTML=$s),Zn=p(Ln,"PRE",{class:!0});var ga=r(Zn);$t=y(ga,!1),ga.forEach(t),Fn=p(Ln,"P",{"data-svelte-h":!0}),o(Fn)!=="svelte-d9h9ib"&&(Fn.textContent=Os),Ln.forEach(t),Ot=i(n),L=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-p4gor3"&&(L.innerHTML=qs),qt=i(n),fn=p(n,"H2",{"data-svelte-h":!0}),o(fn)!=="svelte-a5gq5m"&&(fn.textContent=Vs),Vt=i(n),hn=p(n,"P",{"data-svelte-h":!0}),o(hn)!=="svelte-s4g7lc"&&(hn.innerHTML=Rs),Rt=i(n),B=p(n,"TABLE",{border:!0,"data-svelte-h":!0}),o(B)!=="svelte-qntdvz"&&(B.innerHTML=Ns),Nt=i(n),x=p(n,"DIV",{class:!0});var pt=r(x);xn=p(pt,"DIV",{class:!0,"data-svelte-h":!0}),o(xn)!=="svelte-1llzxwj"&&(xn.textContent=Zs),Yn=p(pt,"P",{"data-svelte-h":!0}),o(Yn)!=="svelte-1mgz7nm"&&(Yn.innerHTML=Fs),j(gn.$$.fragment,pt),S=p(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(S)!=="svelte-taa1hc"&&(S.textContent=Ys),Xn=p(pt,"PRE",{class:!0});var va=r(Xn);Zt=y(va,!1),va.forEach(t),pt.forEach(t),Ft=i(n),vn=p(n,"H2",{"data-svelte-h":!0}),o(vn)!=="svelte-1wu0k1e"&&(vn.textContent=Xs),Yt=i(n),wn=p(n,"P",{"data-svelte-h":!0}),o(wn)!=="svelte-1d16wql"&&(wn.innerHTML=Js),Xt=i(n),g=p(n,"DIV",{class:!0});var ot=r(g);bn=p(ot,"DIV",{class:!0,"data-svelte-h":!0}),o(bn)!=="svelte-1llzxwj"&&(bn.textContent=Ws),Jn=p(ot,"P",{"data-svelte-h":!0}),o(Jn)!=="svelte-15bi592"&&(Jn.innerHTML=zs),j(yn.$$.fragment,ot),P=p(ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(P)!=="svelte-1prnna2"&&(P.textContent=Ks),Wn=p(ot,"PRE",{class:!0});var wa=r(Wn);Jt=y(wa,!1),wa.forEach(t),ot.forEach(t),Wt=i(n),In=p(n,"P",{"data-svelte-h":!0}),o(In)!=="svelte-7jieoe"&&(In.innerHTML=Qs),zt=i(n),v=p(n,"DIV",{class:!0});var lt=r(v);Cn=p(lt,"DIV",{class:!0,"data-svelte-h":!0}),o(Cn)!=="svelte-1llzxwj"&&(Cn.textContent=na),zn=p(lt,"P",{"data-svelte-h":!0}),o(zn)!=="svelte-1i4eqcn"&&(zn.innerHTML=ta),j(Tn.$$.fragment,lt),H=p(lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(H)!=="svelte-12uot33"&&(H.textContent=sa),Kn=p(lt,"PRE",{class:!0});var ba=r(Kn);Kt=y(ba,!1),ba.forEach(t),lt.forEach(t),Qt=i(n),_n=p(n,"P",{"data-svelte-h":!0}),o(_n)!=="svelte-yh6p5b"&&(_n.innerHTML=aa),ns=i(n),Gn=p(n,"H2",{"data-svelte-h":!0}),o(Gn)!=="svelte-4opca7"&&(Gn.textContent=ea),ts=i(n),Sn=p(n,"P",{"data-svelte-h":!0}),o(Sn)!=="svelte-fy3v6t"&&(Sn.textContent=pa),ss=i(n),w=p(n,"DIV",{class:!0});var ct=r(w);Pn=p(ct,"DIV",{class:!0,"data-svelte-h":!0}),o(Pn)!=="svelte-1kqyz2o"&&(Pn.textContent=oa),Qn=p(ct,"P",{"data-svelte-h":!0}),o(Qn)!=="svelte-e6n5ow"&&(Qn.innerHTML=la),j(Hn.$$.fragment,ct),nt=p(ct,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1p13pmi"&&(nt.textContent=ca),tt=p(ct,"DETAILS",{"data-svelte-h":!0}),o(tt)!=="svelte-1xbxdu9"&&(tt.innerHTML=ia),ct.forEach(t),as=i(n),En=p(n,"H2",{"data-svelte-h":!0}),o(En)!=="svelte-p2uhy5"&&(En.textContent=ua),es=i(n),Mn=p(n,"P",{"data-svelte-h":!0}),o(Mn)!=="svelte-a7md44"&&(Mn.innerHTML=ra),this.h()},h(){l(E,"class","remark-container warning"),l(z,"class","remark-container__title"),l(C,"target","_blank"),l(C,"href","/editor#eNp9UcFKxDAQ/ZU4CLZQShW8FDy4HpYeBHG9WWFjOrsWYxKSKW4p+XdT2xTU4iEhb2bevDeTAbgxUA4gdINQgpDcOXbf3xrD8ESoGsfCe6hVTcIiJ9wRt/TAj5ik39GaLFJnFVsSY9TXyoPPwATsoHweoG2gvMzgoGWDtprAD9GFvwiPYNIIp3Xb1kp2w8h2GIOTpW3X/jbzqD9dLt5a2VhUyZSqaWe4wCyip6CTU7iS/dL8fDD5BPw+zdZ5m45Iq5lZXXwwzl51f7ZPc63uZCveE5M7pMptdJ/+xzoGmRXaqB556bzMadzYdZk2mg3OD1w6/Fs9ZtfK4xbnag8ZnMKfXBcZ9FBeFYV/8V8udcKn"),l(C,"title","Open in our Online Editor"),wt.a=null,l(Dn,"class","language-js"),l(d,"class","remark-container tip"),l(M,"class","remark-container tip"),l(tn,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNp9ksFuwyAMhl/F8mWJFEVtp11y22nqYdK09bZMKgtui0YBgbO2ivLug7SL1motF/htw/eD6VA4h1WHjZWEFTZahADPh0fngPZMRgaI6642NTeeBNMbC88vYk1ZPkRr9sStNzAmUrSvTY99gS7qgNV7h0piNS1wZbUkPz+KM+i4fwQncWSM9KdWXXJf7S6UzUZp6clkx1TNi3gInI2SYyhbTktYbFSAoaCxW2cNGQZpKZi7GBFawxeRm6+yHARD1AUEC4php2Luk6ANJEGEOLdCl8u8+AstT5tXQgfKT9DZ/1AX700BhlJgO3IvgZ629jsxjQRjeTAw1BxsG50n34HiCQmRgKBMFASxt9fssW8p/32T+5v2Uuktd1eeIz/9g9S+Hgvcx5Y/TAo8YDWbTPqP/geQydv2"),l(T,"title","Open in our Online Editor"),Tt.a=null,l(An,"class","language-js"),l(m,"class","remark-container tip"),l(en,"class","remark-container__title"),l(_,"target","_blank"),l(_,"href","/editor#eNp9UU1LxDAQ/StxEGyhlCp4KXhwPSw9COJ6ESs0ttO1bE1CMsUtJf/d1DbVXRcPKXkz72M6GYArBekApawQUihbbgy772+VYrgnFJVh7j7kIqdSIyfcENf0wLcYhN/VnDRSpwVbGmPV5sKCjUA5bCB9GaCpIL2MoJZthTqbwEHool+CRzBluNOYdaNbdsNId+iL00jrrjke5lF+mrh8b9pKowimVk4bxUuMPHpyOTG5T1As5ueDiidgi/AU81l2jGtknG0d6awI4x2iyurA635Uh2mrjkiK2SW7+HAOb7IfDaS4a5ty5xwMUmZWsg//U/ncI9nv7HB+gmlJ3nXZkR/V/W/NW4N/2WP3FN3vfmZbiGDvXvI6iaCH9CpJ7Kv9Ag2Z1ZY="),l(_,"title","Open in our Online Editor"),St.a=null,l($n,"class","language-js"),l(f,"class","remark-container tip"),Mt.a=null,l(cn,"class","language-js"),l(kn,"class","remark-container__title"),l(G,"target","_blank"),l(G,"href","/editor#eNqFUtFKwzAU/ZV4EWyhlCr4UtiD82H0QRDni1hhWXs3y2oSkltcKfl3U9N2bg59SMi595xzD0k64EpB2kEhS4QUipobwx7aO6UY7glFaZg7d7nIqdDICZfENT3yLQbhdzUnjdRowaZGX7W5sGAjUA4bSF87qEpIryPYyLpEnXlwNHTST4N74Ge4VZlFpWs2Y6QbHIs+0qKpTsM8yU8TF+9VXWoUgW/ltFS8wGhEz25OTG4LVpP5ZadiD+wqPMd8kQ3jGhlnW0e6WIXxDlFlm2DU/aNay/aMiM1mbMNrgwf1cdZ5QyTF4JZdfRycpLivq2LnrAxSZuayDf9SjalPZD+Th8MD+iseXacbPmT2kX+z++45+vhyA9tCBHv3D26TCFpIb5LEvtkvwDLq5g=="),l(G,"title","Open in our Online Editor"),jt.a=null,l(qn,"class","language-js"),l(h,"class","remark-container tip"),l(mn,"class","remark-container__title"),Ut.a=null,l(Rn,"class","language-js"),$t.a=null,l(Zn,"class","language-js"),l(k,"class","remark-container tip"),l(L,"class","remark-container warning"),l(B,"border","1"),l(xn,"class","remark-container__title"),l(S,"target","_blank"),l(S,"href","/editor#eNqFkt9LwzAQx/+VLAi2WEsn+GBZH3SC9EEQ55OrsKy9zbAuCelVN0r/d9N1S93s8CXkfn2+d5dUlClFw4qmMgMa0jRnRUGet/dKEdggiKwg5l4lIsFUA0OYINP4wpbguDtvghqw1ILYQOOtE1HT2qPK2AUNpxXlGQ2HHl3IPAMdt8aRqK23wo3RajTqshQImkQksK5dQ08lP23lVX4XfvrJ80yDcNpQghPFUvAO1ptR8dEczuyiUv4eXxOH42VBBCwZ8i8YuDPXXwGoeOHYJDIigdsHegct+/Kj6EzBb+WucEhGEbGBrvDsAHHTMiNzviSiXM9BDzrYnen2X9ZY5uVa9OwswYcSUYq90COYna9BoOFLMc55ujJjZgdvhz8VOOHEoo/DxR+O217c/Z9q393q2XfvVn0dkeFRsoX2JF8dJ9fUoxvzMW8Dj25peBME9Uf9AyNpIRU="),l(S,"title","Open in our Online Editor"),Zt.a=null,l(Xn,"class","language-js"),l(x,"class","remark-container tip"),l(bn,"class","remark-container__title"),l(P,"target","_blank"),l(P,"href","/editor#eNqFUcFKw0AQ/ZVxTgmG0Fa8BIuoB81BEevNCF2SiV2a7i6bCW0I+Xe3TbqlongZ9r3ZN29406EwBpMOc10QJphXoq7hub0zBmjHpIoa3LvLVMa5JcG0YGH5VXxREB7YjC1xYxX4xp7tM9VjH6FxuMbko0NZYDKNsNRVQTYdwJmp13vjPRg89u66UUwW5jD11GGhx0b+XOVNb+s4X8mqsKSCoZXxwoicoiN6dy4xuxIsnyTwiixdLMN4TWTSMpjCzRxMPJqGv6r0FoQlaHVzexLO/hemIDZQSkXxSXb1h+x85/uGWatxzIurboBWD5XM14GJpXKBbEjxUR6OlxjS8m2flveDyzHV8XOPEe7cha4nEbaYzCaT/rP/BrAgxQY="),l(P,"title","Open in our Online Editor"),Jt.a=null,l(Wn,"class","language-js"),l(g,"class","remark-container tip"),l(Cn,"class","remark-container__title"),l(H,"target","_blank"),l(H,"href","/editor#eNqFUcFKw0AQ/ZVxTgmG0FS8BIuoB81BEevNFLokE7uY7i6bCW0J+Xe3TbqlongZ9r3ZN29406EwBtMOC10SpljUomngeXdnDNCWSZUNuHeXq5wLS4JpzsLyq/ikIDywOVvi1irwjT3b56rHPkLjcIPpR4eyxDSJsNJ1STYbwJmp13vjPRg89u66VUwWZpB46rDQYyt/rvKmN01crGRdWlLB0Mp5bkRB0RG9O5eYXQmWTxJ4RZYulmHcrPQmq4IEbmZg4tE0/FWlNyAswU63tyfh9H9hBmINlVQUn2RXf8jOd75vmbUax7y46gZo9VDL4iswsVQukDUpPsrD8RJDWr7t0/J+cDmmOn7uMcKtu9D1JMIdptPJpF/03/moxVo="),l(H,"title","Open in our Online Editor"),Kt.a=null,l(Kn,"class","language-js"),l(v,"class","remark-container tip"),l(Pn,"class","remark-container__title"),l(w,"class","remark-container exercise")},m(n,s){a(n,I,s),a(n,it,s),a(n,V,s),a(n,ut,s),a(n,R,s),a(n,rt,s),a(n,N,s),a(n,kt,s),a(n,Z,s),a(n,dt,s),a(n,F,s),a(n,mt,s),a(n,Y,s),a(n,ft,s),a(n,X,s),a(n,ht,s),a(n,J,s),a(n,xt,s),a(n,W,s),a(n,gt,s),a(n,E,s),a(n,vt,s),a(n,d,s),u(d,z),u(d,Bn),A(K,d,null),u(d,C),u(d,Dn),wt.m(Ia,Dn),a(n,bt,s),a(n,M,s),a(n,yt,s),a(n,Q,s),a(n,It,s),a(n,nn,s),a(n,Ct,s),a(n,m,s),u(m,tn),u(m,jn),A(sn,m,null),u(m,T),u(m,An),Tt.m(Ca,An),a(n,_t,s),a(n,an,s),a(n,Gt,s),a(n,f,s),u(f,en),u(f,Un),A(pn,f,null),u(f,_),u(f,$n),St.m(Ta,$n),a(n,Pt,s),a(n,on,s),a(n,Ht,s),a(n,ln,s),a(n,Et,s),a(n,cn,s),Mt.m(_a,cn),a(n,Lt,s),a(n,un,s),a(n,Bt,s),a(n,rn,s),a(n,Dt,s),a(n,h,s),u(h,kn),u(h,On),A(dn,h,null),u(h,G),u(h,qn),jt.m(Ga,qn),a(n,At,s),a(n,k,s),u(k,mn),u(k,Vn),u(k,Rn),Ut.m(Sa,Rn),u(k,Nn),u(k,Zn),$t.m(Pa,Zn),u(k,Fn),a(n,Ot,s),a(n,L,s),a(n,qt,s),a(n,fn,s),a(n,Vt,s),a(n,hn,s),a(n,Rt,s),a(n,B,s),a(n,Nt,s),a(n,x,s),u(x,xn),u(x,Yn),A(gn,x,null),u(x,S),u(x,Xn),Zt.m(Ha,Xn),a(n,Ft,s),a(n,vn,s),a(n,Yt,s),a(n,wn,s),a(n,Xt,s),a(n,g,s),u(g,bn),u(g,Jn),A(yn,g,null),u(g,P),u(g,Wn),Jt.m(Ea,Wn),a(n,Wt,s),a(n,In,s),a(n,zt,s),a(n,v,s),u(v,Cn),u(v,zn),A(Tn,v,null),u(v,H),u(v,Kn),Kt.m(Ma,Kn),a(n,Qt,s),a(n,_n,s),a(n,ns,s),a(n,Gn,s),a(n,ts,s),a(n,Sn,s),a(n,ss,s),a(n,w,s),u(w,Pn),u(w,Qn),A(Hn,w,null),u(w,nt),u(w,tt),a(n,as,s),a(n,En,s),a(n,es,s),a(n,Mn,s),ps=!0},p:Ba,i(n){ps||(U(K.$$.fragment,n),U(sn.$$.fragment,n),U(pn.$$.fragment,n),U(dn.$$.fragment,n),U(gn.$$.fragment,n),U(yn.$$.fragment,n),U(Tn.$$.fragment,n),U(Hn.$$.fragment,n),ps=!0)},o(n){$(K.$$.fragment,n),$(sn.$$.fragment,n),$(pn.$$.fragment,n),$(dn.$$.fragment,n),$(gn.$$.fragment,n),$(yn.$$.fragment,n),$(Tn.$$.fragment,n),$(Hn.$$.fragment,n),ps=!1},d(n){n&&(t(I),t(it),t(V),t(ut),t(R),t(rt),t(N),t(kt),t(Z),t(dt),t(F),t(mt),t(Y),t(ft),t(X),t(ht),t(J),t(xt),t(W),t(gt),t(E),t(vt),t(d),t(bt),t(M),t(yt),t(Q),t(It),t(nn),t(Ct),t(m),t(_t),t(an),t(Gt),t(f),t(Pt),t(on),t(Ht),t(ln),t(Et),t(cn),t(Lt),t(un),t(Bt),t(rn),t(Dt),t(h),t(At),t(k),t(Ot),t(L),t(qt),t(fn),t(Vt),t(hn),t(Rt),t(B),t(Nt),t(x),t(Ft),t(vn),t(Yt),t(wn),t(Xt),t(g),t(Wt),t(In),t(zt),t(v),t(Qt),t(_n),t(ns),t(Gn),t(ts),t(Sn),t(ss),t(w),t(as),t(En),t(es),t(Mn)),O(K),O(sn),O(pn),O(dn),O(gn),O(yn),O(Tn),O(Hn)}}}class qa extends Da{constructor(I){super(),ja(this,I,null,Aa,La,{})}}export{qa as component};
