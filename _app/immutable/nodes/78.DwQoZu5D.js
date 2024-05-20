import{s as Ha,n as Ea}from"../chunks/scheduler.DFPFbGJz.js";import{S as Aa,i as _a,e as a,s as u,c as A,H as _,a as s,g as o,b as i,d as r,f as L,n as M,h as n,o as l,j as p,p as c,m as D,t as j,k as R,l as V}from"../chunks/index.CzDE4dZi.js";import{V as q}from"../chunks/ViewApp.C2MU7-ZI.js";function La(Ta){let d,ie="6. Booleans, <code>keepIf()</code> and <code>showIf()</code>",en,Y,re="This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.",an,z,ke="The boolean datatype",sn,N,de="An app often needs to do different things depending on if an answer to a question is <em>yes</em> or <em>no</em>. Examples of that are:",pn,J,fe="<li>In a message app: Do you have 0 messages?<ul><li>If <em>yes</em>, show the text <em>You have no messages</em></li> <li>If <em>no</em>, show a list with the messages</li></ul></li> <li>In a health app: Is the entered age negative?<ul><li>If <em>yes</em>, show the text <em>The age you enter must be greater than or equal to 0</em></li> <li>If <em>no</em>, show the text <em>The entered age is OK</em></li></ul></li>",on,O,me="To represent these <em>yes</em> and <em>no</em> answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:",ln,U,he="<li><code>true</code> means <em>yes</em></li> <li><code>false</code> means <em>no</em></li>",cn,F,xe="So instead of thinking of it like the question <em>Do you have 0 messages?</em>, this datatype thinks of it like a statement that is correct (<code>true</code>) or incorrect (<code>false</code>), i.e.:",un,X,ge="<li>In a message app: You have 0 messages<ul><li>If <code>true</code>, show the text <em>You have no messages</em></li> <li>If <code>false</code>, show a list with the messages</li></ul></li> <li>In a health app: The entered age is negative<ul><li>If <code>true</code>, show the text <em>The age must be greater than or equal to 0</em></li> <li>If <code>false</code>, show the text <em>The entered age is OK</em></li></ul></li>",rn,W,ve="<code>true</code> and <code>false</code>, like all values in JavaScript, can be stored in app variables and page variables just like strings and numbers.",kn,G,we='<div class="remark-container__title">Don&#39;t use `</div><p>Don&#39;t surround <code>true</code> with the <code>`</code> character! If you do, you create the string that contains the characters <code>t</code>, <code>r</code>, <code>u</code> and <code>e</code>, and not the boolean value <code>true</code> that means that something is correct.</p><p>This also goes for <code>false</code>, of course.</p>',dn,f,Q,Te="Example",jt,ye="Example of an app that uses a boolean page variable.",Z,K,m,Ie="Open in Online Editor",Rt,fn,ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,mn,B,Se='<div class="remark-container__title">Naming convention</div><p>A constant/variable that stores a boolean value usually has a name that starts with <code>is</code> or <code>has</code> to indicate that, like:</p><ul><li><code>isGirl</code></li> <li><code>isGameOver</code></li> <li><code>isAlive</code></li> <li><code>hasDied</code></li> <li><code>hasBeatenTheGame</code></li></ul>',hn,$,be="Conditionally keeping components",xn,tt,Ce="Using boolean values we can conditionally keep/remove GUI components using the configuration method <code>keepIf()</code>. When you call this method, you should pass it a boolean value, and if that value is <code>false</code>, the component will be removed, and not used in the GUI.",gn,h,nt,Pe="Example",Vt,Ge="Example of an app that uses <code>keepIf()</code>.",et,at,x,Be="Open in Online Editor",qt,vn,Ia=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text              <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. This Text component doesn't call keepIf() at all, so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. This Text component passes true to keepIf(), so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,st,He="Directly passing <code>true</code> or <code>false</code> to <code>keepIf()</code> is of course not that meaningful. Instead, you can use an app/page variable to pass a boolean value to <code>keepIf()</code>, so you pass different values to <code>keepIf()</code> depending on what value is stored in the app/page variable.",Tn,g,pt,Ee="Example",Yt,Ae="Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.",ot,lt,v,_e="Open in Online Editor",zt,yn,Sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,In,ct,Le="Computations with booleans",Sn,ut,Me="In the previous example, we kept a special <code>Text</code> component using:",bn,it,Cn,ba='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span></code>',Pn,rt,De="But how can we keep a special <code>Text</code> component if the user on the other hand is a boy (i.e. when <code>p.isGirl</code> is <code>false</code>)? Just as we can use mathemtical operations with numbers, there are some operations we can use with boolean values. The simplest is the <code>==</code> operation, which checks if the value to left of <code>==</code> is equal to the value to the right of it. If they are equal, the result of the operation is <code>true</code>, and if they are not equal, the result is instead <code>false</code>.",Gn,kt,je="So, to check if the user is a boy, we can compare <code>p.isGirl</code> with <code>false</code> using the <code>==</code> operator.",Bn,w,dt,Re="Example",Nt,Ve="Example showing different texts to boys and girls.",ft,mt,T,qe="Open in Online Editor",Jt,Hn,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">isGirl = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>isGirl<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a boy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsBoy<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>setIsGirl<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsBoy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">false</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">setIsGirl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>isGirl <span class="token operator">=</span> <span class="token boolean">true</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,En,H,Ye='<div class="remark-container__title">Use ==</div><p>It&#39;s common for beginners to forget to use <code>==</code> when checking for equality, and instead write <code>=</code>, but then the code will not work as they indend to. The code might still run if you use <code>=</code> to check for equality (remember, <code>=</code> means the variable to the left should be assigned the value to the right), so it&#39;s really important to remember to write <code>==</code> when checking for equality.</p>',An,ht,ze="Computations resulting in a boolean value",_n,xt,Ne="The <code>==</code> operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:",Ln,E,Je="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Equality</td> <td><code>==</code></td> <td><code>5 == 4</code></td> <td><code>false</code></td></tr> <tr><td>Inequality</td> <td><code>!=</code></td> <td><code>5 != 4</code></td> <td><code>true</code></td></tr> <tr><td>Less than</td> <td><code>&lt;</code></td> <td><code>5 &lt; 4</code></td> <td><code>false</code></td></tr> <tr><td>Less than or equal to</td> <td><code>&lt;=</code></td> <td><code>5 &lt;= 4</code></td> <td><code>false</code></td></tr></tbody>",Mn,y,gt,Oe="Example",Ot,Ue="Example showing different <code>Text</code> component based on the number in a page variable.",vt,wt,I,Fe="Open in Online Editor",Ut,Dn,Pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Decrement</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>decrement<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Increment</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jn,Tt,Xe="Conditionally showing components",Rn,yt,We="The configuration method <code>keepIf()</code> removes the component if the argument you pass to it is <code>false</code>. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be.",Vn,S,It,Qe="Example",Ft,Ze="Example showing how some <code>Text</code> components &quot;jump around&quot; on the screen when clicking on the button.",St,bt,b,Ke="Open in Online Editor",Xt,qn,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am fine.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Yn,Ct,$e="To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn&#39;t have been removed. To accomplish this, we can use the configuration method <code>showIf()</code> instead of <code>keepIf()</code>. <code>showIf()</code> works the same way as <code>keepIf()</code>, but the component will still occupy space when it&#39;s not shown.",zn,C,Pt,ta="Example",Wt,na="Example showing how some <code>Text</code> components always occupy space on the screen, but they are not always shown.",Gt,Bt,P,ea="Open in Online Editor",Qt,Nn,Ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	counter <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hi there!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I am fine.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>counter<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Next</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>increment<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>counter <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jn,Ht,aa="If you should use <code>keepIf()</code> or <code>showIf()</code> in your app does of course depend on how you want your app to work.",On,Et,sa="Exercises",Un,At,pa="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Fn,k,_t,oa="Exercise 1",Zt,la='<a href="/editor#eNq1UsFKw0AQ/ZVlLjawSBstlFwkipQeFLEFLabQJZm0pelu2J1gS8jFv/DkL/oJJo0pTWgUBA8JM3lv5r15JAURx+Ck4KsAwQE/Esawu50bxwy3hDIwLK9TT3pUPL5GQTgmoelBLLBjlQhppERLdgCKr1k5lEHGIVRRgNqA85LCKgCnx0GKTaG4HwEOKgwN0jM43aqe5nU24xDn+2qT5bJR2dSMH/QP5oum4X6YrJq+Jzn9nPJXZz5UKmBR4q/Z58f729yqXcJhC85l94LDDhx7YFf2JriJo3x1zWbNmWvWo9ANkugv9h7Vqzn3l6so0Cg7JeTROBY+8qo7OsHVyHYqYfuYGC2FZL3B1dzipydvVJRs5AmBJtGj64RIyW+Ze3W08hfuFM0P5AqxGr9NGaXdiPJWEmp3gf8f5NNS0JkpstQs398eYe3WXveIV0f6bYjdOmP3W1QbYc2yL/byX4o=" target="_blank">This BagaWork project</a> contains an empty page. Change the code in it, so it functions as shown below.',nn,Lt,Kt,ca="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",$t,ua="<summary>Hint</summary><p>The GUI actually contains two buttons, but only one of them is shown at a time! Use a boolean value to keep track of whether the first or the second button should be shown, and use two different click handler methods (one for each button) to change that value to <code>true</code>/<code>false</code>.</p>",Xn,Mt,ia="That's it!",Wn,Dt,ra="Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work!",Qn;return K=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Space,
			Button.text(\`I'm a boy!\`).handler(p.setIsBoy),
			Button.text(\`I'm a girl!\`).handler(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
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
	
}`}]}}}),at=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text              .text(\`1. This Text component doesn't call keepIf() at all, so it will be used as usual.\`),
			Text.keepIf(false).text(\`2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.\`),
			Text.keepIf(true) .text(\`3. This Text component passes true to keepIf(), so it will be used as usual.\`),
		)
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
	
}`}]}}}),lt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Text.text(\`You are a girl!\`).keepIf(p.isGirl),
			Space,
			Button.text(\`I'm a boy!\`).handler(p.setIsBoy),
			Button.text(\`I'm a girl!\`).handler(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
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
	
}`}]}}}),mt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isGirl = true
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`isGirl = \${p.isGirl}\`),
			Text.text(\`You are a girl!\`).keepIf(p.isGirl),
			Text.text(\`You are a boy!\`).keepIf(p.isGirl == false),
			Space,
			Button.text(\`I'm a boy!\`).handler(p.setIsBoy),
			Button.text(\`I'm a girl!\`).handler(p.setIsGirl),
		)
	}
	
	setIsBoy(){
		p.isGirl = false
	}
	
	setIsGirl(){
		p.isGirl = true
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
	
}`}]}}}),wt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
				Button.text(\`Decrement\`).handler(p.decrement),
				Space,
				Button.text(\`Increment\`).handler(p.increment),
			)
		)
	}
	
	decrement(){
		p.counter -= 1
	}
	
	increment(){
		p.counter += 1
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
	
}`}]}}}),bt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hi there!\`).keepIf(1 <= p.counter),
			Text.text(\`How are you?\`).keepIf(2 <= p.counter),
			Text.text(\`I am fine.\`).keepIf(3 <= p.counter),
			Space,
			Button.text(\`Next\`).handler(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
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
	
}`}]}}}),Bt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	counter = 1
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hi there!\`).showIf(1 <= p.counter),
			Text.text(\`How are you?\`).showIf(2 <= p.counter),
			Text.text(\`I am fine.\`).showIf(3 <= p.counter),
			Space,
			Button.text(\`Next\`).handler(p.increment),
		)
	}
	
	increment(){
		p.counter += 1
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
	
}`}]}}}),Lt=new q({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	isShowingFirstButton = true
	
	createGui(){
		return Rows.children(
			Space,
			Button.text(\`Click me!\`).showIf(p.isShowingFirstButton).handler(p.showSecondButton),
			Space,
			Button.text(\`Click me!\`).showIf(p.isShowingFirstButton == false).handler(p.showFirstButton),
			Space,
		)
	}
	
	showFirstButton(){
		p.isShowingFirstButton = true
	}
	
	showSecondButton(){
		p.isShowingFirstButton = false
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
	
}`}]}}}),{c(){d=a("h1"),d.innerHTML=ie,en=u(),Y=a("p"),Y.textContent=re,an=u(),z=a("h2"),z.textContent=ke,sn=u(),N=a("p"),N.innerHTML=de,pn=u(),J=a("ul"),J.innerHTML=fe,on=u(),O=a("p"),O.innerHTML=me,ln=u(),U=a("ul"),U.innerHTML=he,cn=u(),F=a("p"),F.innerHTML=xe,un=u(),X=a("ul"),X.innerHTML=ge,rn=u(),W=a("p"),W.innerHTML=ve,kn=u(),G=a("div"),G.innerHTML=we,dn=u(),f=a("div"),Q=a("div"),Q.textContent=Te,jt=a("p"),jt.textContent=ye,Z=a("div"),A(K.$$.fragment),m=a("a"),m.textContent=Ie,Rt=a("pre"),fn=new _(!1),mn=u(),B=a("div"),B.innerHTML=Se,hn=u(),$=a("h2"),$.textContent=be,xn=u(),tt=a("p"),tt.innerHTML=Ce,gn=u(),h=a("div"),nt=a("div"),nt.textContent=Pe,Vt=a("p"),Vt.innerHTML=Ge,et=a("div"),A(at.$$.fragment),x=a("a"),x.textContent=Be,qt=a("pre"),vn=new _(!1),wn=u(),st=a("p"),st.innerHTML=He,Tn=u(),g=a("div"),pt=a("div"),pt.textContent=Ee,Yt=a("p"),Yt.textContent=Ae,ot=a("div"),A(lt.$$.fragment),v=a("a"),v.textContent=_e,zt=a("pre"),yn=new _(!1),In=u(),ct=a("h2"),ct.textContent=Le,Sn=u(),ut=a("p"),ut.innerHTML=Me,bn=u(),it=a("pre"),Cn=new _(!1),Pn=u(),rt=a("p"),rt.innerHTML=De,Gn=u(),kt=a("p"),kt.innerHTML=je,Bn=u(),w=a("div"),dt=a("div"),dt.textContent=Re,Nt=a("p"),Nt.textContent=Ve,ft=a("div"),A(mt.$$.fragment),T=a("a"),T.textContent=qe,Jt=a("pre"),Hn=new _(!1),En=u(),H=a("div"),H.innerHTML=Ye,An=u(),ht=a("h2"),ht.textContent=ze,_n=u(),xt=a("p"),xt.innerHTML=Ne,Ln=u(),E=a("table"),E.innerHTML=Je,Mn=u(),y=a("div"),gt=a("div"),gt.textContent=Oe,Ot=a("p"),Ot.innerHTML=Ue,vt=a("div"),A(wt.$$.fragment),I=a("a"),I.textContent=Fe,Ut=a("pre"),Dn=new _(!1),jn=u(),Tt=a("h2"),Tt.textContent=Xe,Rn=u(),yt=a("p"),yt.innerHTML=We,Vn=u(),S=a("div"),It=a("div"),It.textContent=Qe,Ft=a("p"),Ft.innerHTML=Ze,St=a("div"),A(bt.$$.fragment),b=a("a"),b.textContent=Ke,Xt=a("pre"),qn=new _(!1),Yn=u(),Ct=a("p"),Ct.innerHTML=$e,zn=u(),C=a("div"),Pt=a("div"),Pt.textContent=ta,Wt=a("p"),Wt.innerHTML=na,Gt=a("div"),A(Bt.$$.fragment),P=a("a"),P.textContent=ea,Qt=a("pre"),Nn=new _(!1),Jn=u(),Ht=a("p"),Ht.innerHTML=aa,On=u(),Et=a("h2"),Et.textContent=sa,Un=u(),At=a("p"),At.textContent=pa,Fn=u(),k=a("div"),_t=a("div"),_t.textContent=oa,Zt=a("p"),Zt.innerHTML=la,nn=a("div"),A(Lt.$$.fragment),Kt=a("p"),Kt.textContent=ca,$t=a("details"),$t.innerHTML=ua,Xn=u(),Mt=a("h2"),Mt.textContent=ia,Wn=u(),Dt=a("p"),Dt.textContent=ra,this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),o(d)!=="svelte-8fbfcu"&&(d.innerHTML=ie),en=i(t),Y=s(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-o2o5ce"&&(Y.textContent=re),an=i(t),z=s(t,"H2",{"data-svelte-h":!0}),o(z)!=="svelte-44dcdv"&&(z.textContent=ke),sn=i(t),N=s(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-1vl51y6"&&(N.innerHTML=de),pn=i(t),J=s(t,"UL",{"data-svelte-h":!0}),o(J)!=="svelte-1l99qqb"&&(J.innerHTML=fe),on=i(t),O=s(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-h3rlkl"&&(O.innerHTML=me),ln=i(t),U=s(t,"UL",{"data-svelte-h":!0}),o(U)!=="svelte-36dcdj"&&(U.innerHTML=he),cn=i(t),F=s(t,"P",{"data-svelte-h":!0}),o(F)!=="svelte-10da6r3"&&(F.innerHTML=xe),un=i(t),X=s(t,"UL",{"data-svelte-h":!0}),o(X)!=="svelte-b930rv"&&(X.innerHTML=ge),rn=i(t),W=s(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-1obxja8"&&(W.innerHTML=ve),kn=i(t),G=s(t,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-hrbsbw"&&(G.innerHTML=we),dn=i(t),f=s(t,"DIV",{class:!0});var e=r(f);Q=s(e,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1llzxwj"&&(Q.textContent=Te),jt=s(e,"P",{"data-svelte-h":!0}),o(jt)!=="svelte-1nsfze"&&(jt.textContent=ye),Z=s(e,"DIV",{});var Zn=r(Z);L(K.$$.fragment,Zn),m=s(Zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-l9fyvk"&&(m.textContent=Ie),Rt=s(Zn,"PRE",{class:!0});var ka=r(Rt);fn=M(ka,!1),ka.forEach(n),Zn.forEach(n),e.forEach(n),mn=i(t),B=s(t,"DIV",{class:!0,"data-svelte-h":!0}),o(B)!=="svelte-1ypy7kr"&&(B.innerHTML=Se),hn=i(t),$=s(t,"H2",{"data-svelte-h":!0}),o($)!=="svelte-1lal7r2"&&($.textContent=be),xn=i(t),tt=s(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-1268139"&&(tt.innerHTML=Ce),gn=i(t),h=s(t,"DIV",{class:!0});var Kn=r(h);nt=s(Kn,"DIV",{class:!0,"data-svelte-h":!0}),o(nt)!=="svelte-1llzxwj"&&(nt.textContent=Pe),Vt=s(Kn,"P",{"data-svelte-h":!0}),o(Vt)!=="svelte-hqdola"&&(Vt.innerHTML=Ge),et=s(Kn,"DIV",{});var $n=r(et);L(at.$$.fragment,$n),x=s($n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-1xkqbtw"&&(x.textContent=Be),qt=s($n,"PRE",{class:!0});var da=r(qt);vn=M(da,!1),da.forEach(n),$n.forEach(n),Kn.forEach(n),wn=i(t),st=s(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-f6mhrh"&&(st.innerHTML=He),Tn=i(t),g=s(t,"DIV",{class:!0});var te=r(g);pt=s(te,"DIV",{class:!0,"data-svelte-h":!0}),o(pt)!=="svelte-1llzxwj"&&(pt.textContent=Ee),Yt=s(te,"P",{"data-svelte-h":!0}),o(Yt)!=="svelte-70wjwb"&&(Yt.textContent=Ae),ot=s(te,"DIV",{});var ne=r(ot);L(lt.$$.fragment,ne),v=s(ne,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-1hexrfe"&&(v.textContent=_e),zt=s(ne,"PRE",{class:!0});var fa=r(zt);yn=M(fa,!1),fa.forEach(n),ne.forEach(n),te.forEach(n),In=i(t),ct=s(t,"H2",{"data-svelte-h":!0}),o(ct)!=="svelte-j8st43"&&(ct.textContent=Le),Sn=i(t),ut=s(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-aroyaw"&&(ut.innerHTML=Me),bn=i(t),it=s(t,"PRE",{class:!0});var ma=r(it);Cn=M(ma,!1),ma.forEach(n),Pn=i(t),rt=s(t,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-1fsh1sb"&&(rt.innerHTML=De),Gn=i(t),kt=s(t,"P",{"data-svelte-h":!0}),o(kt)!=="svelte-iogsrp"&&(kt.innerHTML=je),Bn=i(t),w=s(t,"DIV",{class:!0});var ee=r(w);dt=s(ee,"DIV",{class:!0,"data-svelte-h":!0}),o(dt)!=="svelte-1llzxwj"&&(dt.textContent=Re),Nt=s(ee,"P",{"data-svelte-h":!0}),o(Nt)!=="svelte-1v00t9c"&&(Nt.textContent=Ve),ft=s(ee,"DIV",{});var ae=r(ft);L(mt.$$.fragment,ae),T=s(ae,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-1gw9p46"&&(T.textContent=qe),Jt=s(ae,"PRE",{class:!0});var ha=r(Jt);Hn=M(ha,!1),ha.forEach(n),ae.forEach(n),ee.forEach(n),En=i(t),H=s(t,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-p4gor3"&&(H.innerHTML=Ye),An=i(t),ht=s(t,"H2",{"data-svelte-h":!0}),o(ht)!=="svelte-a5gq5m"&&(ht.textContent=ze),_n=i(t),xt=s(t,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-s4g7lc"&&(xt.innerHTML=Ne),Ln=i(t),E=s(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(E)!=="svelte-qntdvz"&&(E.innerHTML=Je),Mn=i(t),y=s(t,"DIV",{class:!0});var se=r(y);gt=s(se,"DIV",{class:!0,"data-svelte-h":!0}),o(gt)!=="svelte-1llzxwj"&&(gt.textContent=Oe),Ot=s(se,"P",{"data-svelte-h":!0}),o(Ot)!=="svelte-1mgz7nm"&&(Ot.innerHTML=Ue),vt=s(se,"DIV",{});var pe=r(vt);L(wt.$$.fragment,pe),I=s(pe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(I)!=="svelte-j3mrzj"&&(I.textContent=Fe),Ut=s(pe,"PRE",{class:!0});var xa=r(Ut);Dn=M(xa,!1),xa.forEach(n),pe.forEach(n),se.forEach(n),jn=i(t),Tt=s(t,"H2",{"data-svelte-h":!0}),o(Tt)!=="svelte-1wu0k1e"&&(Tt.textContent=Xe),Rn=i(t),yt=s(t,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-1d16wql"&&(yt.innerHTML=We),Vn=i(t),S=s(t,"DIV",{class:!0});var oe=r(S);It=s(oe,"DIV",{class:!0,"data-svelte-h":!0}),o(It)!=="svelte-1llzxwj"&&(It.textContent=Qe),Ft=s(oe,"P",{"data-svelte-h":!0}),o(Ft)!=="svelte-15bi592"&&(Ft.innerHTML=Ze),St=s(oe,"DIV",{});var le=r(St);L(bt.$$.fragment,le),b=s(le,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(b)!=="svelte-1vttp2l"&&(b.textContent=Ke),Xt=s(le,"PRE",{class:!0});var ga=r(Xt);qn=M(ga,!1),ga.forEach(n),le.forEach(n),oe.forEach(n),Yn=i(t),Ct=s(t,"P",{"data-svelte-h":!0}),o(Ct)!=="svelte-7jieoe"&&(Ct.innerHTML=$e),zn=i(t),C=s(t,"DIV",{class:!0});var ce=r(C);Pt=s(ce,"DIV",{class:!0,"data-svelte-h":!0}),o(Pt)!=="svelte-1llzxwj"&&(Pt.textContent=ta),Wt=s(ce,"P",{"data-svelte-h":!0}),o(Wt)!=="svelte-1i4eqcn"&&(Wt.innerHTML=na),Gt=s(ce,"DIV",{});var ue=r(Gt);L(Bt.$$.fragment,ue),P=s(ue,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(P)!=="svelte-7083w9"&&(P.textContent=ea),Qt=s(ue,"PRE",{class:!0});var va=r(Qt);Nn=M(va,!1),va.forEach(n),ue.forEach(n),ce.forEach(n),Jn=i(t),Ht=s(t,"P",{"data-svelte-h":!0}),o(Ht)!=="svelte-yh6p5b"&&(Ht.innerHTML=aa),On=i(t),Et=s(t,"H2",{"data-svelte-h":!0}),o(Et)!=="svelte-4opca7"&&(Et.textContent=sa),Un=i(t),At=s(t,"P",{"data-svelte-h":!0}),o(At)!=="svelte-fy3v6t"&&(At.textContent=pa),Fn=i(t),k=s(t,"DIV",{class:!0});var tn=r(k);_t=s(tn,"DIV",{class:!0,"data-svelte-h":!0}),o(_t)!=="svelte-1kqyz2o"&&(_t.textContent=oa),Zt=s(tn,"P",{"data-svelte-h":!0}),o(Zt)!=="svelte-e6n5ow"&&(Zt.innerHTML=la),nn=s(tn,"DIV",{});var wa=r(nn);L(Lt.$$.fragment,wa),wa.forEach(n),Kt=s(tn,"P",{"data-svelte-h":!0}),o(Kt)!=="svelte-1p13pmi"&&(Kt.textContent=ca),$t=s(tn,"DETAILS",{"data-svelte-h":!0}),o($t)!=="svelte-1xbxdu9"&&($t.innerHTML=ua),tn.forEach(n),Xn=i(t),Mt=s(t,"H2",{"data-svelte-h":!0}),o(Mt)!=="svelte-p2uhy5"&&(Mt.textContent=ia),Wn=i(t),Dt=s(t,"P",{"data-svelte-h":!0}),o(Dt)!=="svelte-1ttzi4s"&&(Dt.textContent=ra),this.h()},h(){l(G,"class","remark-container warning"),l(Q,"class","remark-container__title"),l(m,"target","_blank"),l(m,"href","/editor#eNrFk2Fr2zAQhv+KdgxqgzFJxmAYRnHGKPmwMdbCWpZCNPucmCmSkM6sxvi/T6pnr07d4sJgH2x0unvvTvdIDXCtIWkgUzlCApng1rJPdao1wztCmVvm1s1Wbsl/mUFOeEnc0Be+xyDsPGSQKiPZ4PC7bSdqoY2gUCJHYyH53kCZQ7KMQPKjr3gvgQhUUVika0gW/frGrdvbCLTLN1J2yTadMWp8qD80742h+9JelEaw94xMheMjXVTl6WG+ql82zg6lyA3KoHNt6VLzDKPeunJ1YnK/YDckf93ouDPaXRhN69YVkZJ/lJuzI+Psh6pf7cL4wGUu0AQ6diPY2LWqw+dUe1dmQuar97rwAYwt9VmH0/bNus4LLiw+jvbeqfB+igPoCO4gWS0cwRqSN4uB3hUetXBDHlEcgUvtz02R5pV4hp6SayyU+XvpRp3+K4ypQVarit3fMUZurmz57vxJkB+UqI5yosBp4Am9z8pB87MJZCVEGM2U3aCdp5uGr2RakLslExP0z7Rjszph81E6SbrH/03m24HTmfVwDHPVz+c9ruViemDjoLczglZzMq2eyPSww5cwuW1/AxaEDKE="),l(m,"title","Open in our Online Editor"),fn.a=null,l(Rt,"class","language-js"),l(f,"class","remark-container tip"),l(B,"class","remark-container tip"),l(nt,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFVF1r2zAU/SsXvTQGYxKXwfDLcMcYeWgZa2ArSyGafd2YypLQx9oQ/N8n2akXGSekTzMY60r33nN07sF7QqUk2Z4UokSSkYJRreF2l0sJ+GqQlxrcer/ma+PfQiE1eG+oMt/oE86i/sQoNFZxGA78btsXtaSNSSVYiUqT7Nee1CXJFjHhtPGIXQmJiagqjeYnyeZv6we3bh9jIl2/oLJvtuyDgPiAP5D3wYj9V1uPeX8XLzoptjUrFfJZf7Q2K9cEgicxbmu2WSSw2tYauoRCNFJw5AZKgZpfuR3KGDwjymU1i4AacHEMWkBt4KV2Z78RrMYSqHZfS1myieJj0ORQXFGmMTqAptOg0t0bNXSpYMSAOwZU2Ig/HpOXwIXpCHQ5O2Edc89bo+vgITwg1NwFCM4fp+gZZTF60+T6LD2feo7dCTmiwEcxeSVZOncG2ZHsej6YY4WNZG6wgUkCX+T6eVnlpWVnzCH4DVZC/fP0Efa7rXMvaYGhaL1MucJO8c7CTmDKYfHx05HAYeVnwWzDJwDGiWtzY427wwHmTmyixGsz45axKL6w7AH1ZXVTA/IS5pVBNaWg/wv0s0lHs/nCXUn+hP97Mj+21FxpPxwFDv30TALFFvNpwcKkDxckpZd0Sk90Omb4npk8tn8BSewlug=="),l(x,"title","Open in our Online Editor"),vn.a=null,l(qt,"class","language-js"),l(h,"class","remark-container tip"),l(pt,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNrFk2Fr2zAQhv+KJga1wYQkYzAMozhjFH/YGGthDUshmn1OTBVJSDKrMf7vO9WzG3lOm8FgH2wk6973TvecG8qUonFDM5kDjWnGmTHkU50oReDBgsgNwXWzERvrnkwDs3BtmbZf2A6CsDuxGmylBRkO3Ne2E7W0jWgheQ7a0Ph7Q8ucxouICnZwGR8lNKKyKAzYWxrP+/Ua1+1dRBX6ecrOLO02XuFD/qF4txmqL81VqTl5T6yuwL/SVVWOL/NV/jSzbF/yXIMIuqONvVYsg6jf3WCemcVXsB3MXzdq1m3abTgVuZYVYRoIIzsMerUNZ/cAKi2CXvek8rOtKmul+O2SXhzQ4YesncGeiZyDRgdsXGpWsg6fU/V5R7Lj3OERwo3tXYce9aXifQvGDfwZ7U6nwvveD+MR0QcaL+fIvabxm/nA/AYOiiMaj72HOzH3aZHkFX+GuRQrKKR+GlWv0n8FP0GcNWJ9nExisa9k8e5yewrkB8mrg5hIMA4c0fssEZrrTSAqfjQmL8jWYM7TTcOXIiksTslEB93P3bFZjth8FChJdvC/yXzbM3thHBxNMPtpJl7HFvPphvlBb88IWp7jtDzhdFzh3zC5a38BTgofkA=="),l(v,"title","Open in our Online Editor"),yn.a=null,l(zt,"class","language-js"),l(g,"class","remark-container tip"),Cn.a=null,l(it,"class","language-js"),l(dt,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNrFVGFr2zAU/CvaY1AbTEgyBsMQhlNK8YeNsRbW0BSi2c+JqSIJSWY1xv99cl07kee0GQz2wUay3t07vTtcAZUSwgoSkSKEkDCqNflSRlISfDLIU03sulrztWmeRCE1eGOoMt/oFj2/PTEKTaE46Q+ar3ULqqEOIBMsRaUhvK8gTyGcBcDpvun4DIEARJZpNHcQTrv1yq7rhwCk5XOQLVncbhzhff9efLPp1ef6OleMLIhRBbpXui7y4WW+i196kuxylirkXnu0NjeSJhh0u1vbZ2Lsy9v05O8rOWk39cYfq1yJglCFhJKtLXq38SePiDLOvA73BuqnKEdAZLEgGWUaD2hX67IwRvAXtvhif2DaUZ4yVJbKjj3WS1H6r6E61QPYsXL/KABr07H2Ez5obiX/Wd2cjpV3zvXhCuAJwvnUpqaE8MO0T8wt7iWzxjrJccIS6cc4i9KCvZIYwZeYCXUIuqP0X0UnsraW1t7nXBNj50pmnz5vThl5KVix5yMNhoUD974Ka1ozG48X7Chkb8BWqM/DjZsveJQZm5KRCTa/htab+cCbK24h0Rb/tzM/dtRc6MYcRWz30544E5tNxwfmFn08o2h+DtP8BNOxwr/x5KH+DcnWNOA="),l(T,"title","Open in our Online Editor"),Hn.a=null,l(Jt,"class","language-js"),l(w,"class","remark-container tip"),l(H,"class","remark-container warning"),l(E,"border","1"),l(gt,"class","remark-container__title"),l(I,"target","_blank"),l(I,"href","/editor#eNrFVG1rnEAQ/iuTJVCl9tArhVYixbSl+KGlNIE2qYHb6Hgn0V1Z1zaH+N+7G3N6e/XSawnkgzLrzDzz8jxrS2hVEb8lCU+R+CQpaF3Dp3VYVYC3Ellag7LbmMVSP4lAKvFMUiG/0CVadu+RAmUjGAwO/bXrkzrSOSTjRYqiJv6PluQp8T2HMFrqincpxCE8y2qU34nvbuwLZXdXDqkUnpHZg0X9wWh8qD80rw9j97xhEgUE4JoDfWzy3VG+8l/1LFnlRSqQWb0rlmcVTdDZnM5VlZlUL2tx3Faze/gOrFw+q4Hhksr8Jx7ZC3t2g1hFmTUEwQm49hTQJQo+FR8EexK2K4+JHpwEMDjGxL0DRLplCtf5ElhTXqM4GsHeqG7/ivWOF03JJnYWy9NGSs7uC71HtfMSmVT4K8rSAoUaM918HeF3C+zgRGwKJ2d/4Ni9YW9pMpZDvYH3cdUvAvCM4AF0Ivi5GdwpKd8Sf+4qGa+J/9IdJHyOZVUorRlSNtQb1jdRFqZN8YCEOTvFjIvx5hmNPpaaQ4Gw5g3cXTSQar3gvX67+A/qH6Tws1a63o3FmqI4mPkLrA/L23hM6jkLM8Xc1Ab1v6rnZr7DzQdNdrjEp2bm24rqi6rIEaCq7+fE2JjnTi/MDHp1QND8EKT5HqTtDv+Fk6vuNwq+awA="),l(I,"title","Open in our Online Editor"),Dn.a=null,l(Ut,"class","language-js"),l(y,"class","remark-container tip"),l(It,"class","remark-container__title"),l(b,"target","_blank"),l(b,"href","/editor#eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwK8UdY8uHjbEWtrIUKuxzYypLQjrThuD/PrlOnCo4WwqFfbCQfHrvTu8jrYFrDdkaClUiZFAIbi37usq1ZvhIKEvL3Hy9kAvqv8IgJ7wkbug7v8MgHCJkkFoj2Rjo/3aDqIMugkqJEo2F7Pca6hKyJALJm77ikwQiUFVlkX5BNtvOr928u4lAu3yeckg2HxZe42P9sfl+setetZLQsDOW+Af63Nb7R/mhHmxcLGtRGpTBEFrQpeYFRtvVlasSkxuC2y81oyUafHMbxveIel4FCftwxnS8KRpOqtQD4wbZSrXnO2H6b+Gc8YZVtcR4Jzs9IPN7vmiJlNyk+eZGl2DJZSnQBDqupTOkQUlbefiM5ILG8OjWWI+93bg6Yo/gEbJ05niuIDudjSyvsNHCme4x9TDm9n5e5WUr/sJSyQuslNldQa/R18KaD3DY041zhLlkyXuH6oC5H5VoGzlRYH/jPgflKPTeBLIVIoyOlF2jPU43TVPJvHLkphzsH+3AJt1j86mHnd/h/ybzc8npxPZwDHPVDzPxHEtm04b5m94dsSk9JlN6INPzDl/C5Kb7AxRjDuU="),l(b,"title","Open in our Online Editor"),qn.a=null,l(Xt,"class","language-js"),l(S,"class","remark-container tip"),l(Pt,"class","remark-container__title"),l(P,"target","_blank"),l(P,"href","/editor#eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwLcUtpc2HjbEG2tIUKuxzbSZLQpJJQ/B/n1wnThWcNoXBPlhIPr13p/eRVkClhGQFmcgREsgY1Zr8WKZSEnwxyHNN7Hw153PTfZlCavDGUGV+0Wf0/D5iFJpGcTIEur9tL2qhDaAQLEelIXlYQZVDEgXAad1VfJVAAKIoNJo7SCab+b2dt48BSJvPUfbJpv3CaXyoPzTfLbbdi4YbVOSURO6Brppq9yi/xUKHWVmxXCH3+tDc3EiaYbBZzWyV0NjBe7quiClR4ZcnP9SlWEwLLyInp0SG66L+qEosCFVIlqI52wrjj4VTQmtSVBzDrex4j8zt+bwxRvB1mp92tAlKynOGypNhxa0hNXKzkftvSM7NEB7cGuqRr2tXB+wBvEASTyzPJSTHk4HlDGvJrOkOUwdjqv9MizRv2DssBT/HQqjtFXQa/VdY0x4Oeb1xljDlJPpuUe0x90KwpuYjBXY37nIQlkLnjccbxvzgQNk96sN04zQFTwtLbszB7tH2bOIdNpcd7PQZ/zeZ25KaI93BUcRW38/EcSyajBvmbvp2wKb4kEzxnkxvO/wMk8f2L2+iDzk="),l(P,"title","Open in our Online Editor"),Nn.a=null,l(Qt,"class","language-js"),l(C,"class","remark-container tip"),l(_t,"class","remark-container__title"),l(k,"class","remark-container exercise")},m(t,e){p(t,d,e),p(t,en,e),p(t,Y,e),p(t,an,e),p(t,z,e),p(t,sn,e),p(t,N,e),p(t,pn,e),p(t,J,e),p(t,on,e),p(t,O,e),p(t,ln,e),p(t,U,e),p(t,cn,e),p(t,F,e),p(t,un,e),p(t,X,e),p(t,rn,e),p(t,W,e),p(t,kn,e),p(t,G,e),p(t,dn,e),p(t,f,e),c(f,Q),c(f,jt),c(f,Z),D(K,Z,null),c(Z,m),c(Z,Rt),fn.m(ya,Rt),p(t,mn,e),p(t,B,e),p(t,hn,e),p(t,$,e),p(t,xn,e),p(t,tt,e),p(t,gn,e),p(t,h,e),c(h,nt),c(h,Vt),c(h,et),D(at,et,null),c(et,x),c(et,qt),vn.m(Ia,qt),p(t,wn,e),p(t,st,e),p(t,Tn,e),p(t,g,e),c(g,pt),c(g,Yt),c(g,ot),D(lt,ot,null),c(ot,v),c(ot,zt),yn.m(Sa,zt),p(t,In,e),p(t,ct,e),p(t,Sn,e),p(t,ut,e),p(t,bn,e),p(t,it,e),Cn.m(ba,it),p(t,Pn,e),p(t,rt,e),p(t,Gn,e),p(t,kt,e),p(t,Bn,e),p(t,w,e),c(w,dt),c(w,Nt),c(w,ft),D(mt,ft,null),c(ft,T),c(ft,Jt),Hn.m(Ca,Jt),p(t,En,e),p(t,H,e),p(t,An,e),p(t,ht,e),p(t,_n,e),p(t,xt,e),p(t,Ln,e),p(t,E,e),p(t,Mn,e),p(t,y,e),c(y,gt),c(y,Ot),c(y,vt),D(wt,vt,null),c(vt,I),c(vt,Ut),Dn.m(Pa,Ut),p(t,jn,e),p(t,Tt,e),p(t,Rn,e),p(t,yt,e),p(t,Vn,e),p(t,S,e),c(S,It),c(S,Ft),c(S,St),D(bt,St,null),c(St,b),c(St,Xt),qn.m(Ga,Xt),p(t,Yn,e),p(t,Ct,e),p(t,zn,e),p(t,C,e),c(C,Pt),c(C,Wt),c(C,Gt),D(Bt,Gt,null),c(Gt,P),c(Gt,Qt),Nn.m(Ba,Qt),p(t,Jn,e),p(t,Ht,e),p(t,On,e),p(t,Et,e),p(t,Un,e),p(t,At,e),p(t,Fn,e),p(t,k,e),c(k,_t),c(k,Zt),c(k,nn),D(Lt,nn,null),c(k,Kt),c(k,$t),p(t,Xn,e),p(t,Mt,e),p(t,Wn,e),p(t,Dt,e),Qn=!0},p:Ea,i(t){Qn||(j(K.$$.fragment,t),j(at.$$.fragment,t),j(lt.$$.fragment,t),j(mt.$$.fragment,t),j(wt.$$.fragment,t),j(bt.$$.fragment,t),j(Bt.$$.fragment,t),j(Lt.$$.fragment,t),Qn=!0)},o(t){R(K.$$.fragment,t),R(at.$$.fragment,t),R(lt.$$.fragment,t),R(mt.$$.fragment,t),R(wt.$$.fragment,t),R(bt.$$.fragment,t),R(Bt.$$.fragment,t),R(Lt.$$.fragment,t),Qn=!1},d(t){t&&(n(d),n(en),n(Y),n(an),n(z),n(sn),n(N),n(pn),n(J),n(on),n(O),n(ln),n(U),n(cn),n(F),n(un),n(X),n(rn),n(W),n(kn),n(G),n(dn),n(f),n(mn),n(B),n(hn),n($),n(xn),n(tt),n(gn),n(h),n(wn),n(st),n(Tn),n(g),n(In),n(ct),n(Sn),n(ut),n(bn),n(it),n(Pn),n(rt),n(Gn),n(kt),n(Bn),n(w),n(En),n(H),n(An),n(ht),n(_n),n(xt),n(Ln),n(E),n(Mn),n(y),n(jn),n(Tt),n(Rn),n(yt),n(Vn),n(S),n(Yn),n(Ct),n(zn),n(C),n(Jn),n(Ht),n(On),n(Et),n(Un),n(At),n(Fn),n(k),n(Xn),n(Mt),n(Wn),n(Dt)),V(K),V(at),V(lt),V(mt),V(wt),V(bt),V(Bt),V(Lt)}}}class Ra extends Aa{constructor(d){super(),_a(this,d,null,La,Ha,{})}}export{Ra as component};
