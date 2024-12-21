import{s as ma,n as fa}from"../chunks/scheduler.B0TnBjPs.js";import{S as ha,i as xa,e,s as c,c as E,H as L,a as p,g as o,b as i,d as r,f as B,n as D,h as t,o as l,j as a,p as u,m as A,t as j,k as U,l as $}from"../chunks/index.BXVnRmkj.js";import{V as O}from"../chunks/ViewApp.DfUK9ae4.js";function ga(pa){let w,Jt="6. Booleans, <code>keepIf()</code> and <code>showIf()</code>",tt,q,Wt="This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.",st,V,zt="The boolean datatype",at,R,Kt="An app often needs to do different things depending on if an answer to a question is <em>yes</em> or <em>no</em>. Examples of that are:",et,N,Qt="<li>In a message app: Do you have 0 messages?<ul><li>If <em>yes</em>, show the text <em>You have no messages</em></li> <li>If <em>no</em>, show a list with the messages</li></ul></li> <li>In a health app: Is the entered age negative?<ul><li>If <em>yes</em>, show the text <em>The age you enter must be greater than or equal to 0</em></li> <li>If <em>no</em>, show the text <em>The entered age is OK</em></li></ul></li>",pt,Z,ns="To represent these <em>yes</em> and <em>no</em> answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:",ot,F,ts="<li><code>true</code> means <em>yes</em></li> <li><code>false</code> means <em>no</em></li>",lt,Y,ss="So instead of thinking of it like the question <em>Do you have 0 messages?</em>, this datatype thinks of it like a statement that is correct (<code>true</code>) or incorrect (<code>false</code>), i.e.:",ct,X,as="<li>In a message app: You have 0 messages<ul><li>If <code>true</code>, show the text <em>You have no messages</em></li> <li>If <code>false</code>, show a list with the messages</li></ul></li> <li>In a health app: The entered age is negative<ul><li>If <code>true</code>, show the text <em>The age must be greater than or equal to 0</em></li> <li>If <code>false</code>, show the text <em>The entered age is OK</em></li></ul></li>",it,J,es="<code>true</code> and <code>false</code>, like all values in JavaScript, can be stored in app variables and page variables just like strings and numbers.",ut,G,ps='<div class="remark-container__title">Don&#39;t use `</div><p>Don&#39;t surround <code>true</code> with the <code>`</code> character! If you do, you create the string that contains the characters <code>t</code>, <code>r</code>, <code>u</code> and <code>e</code>, and not the boolean value <code>true</code> that means that something is correct.</p><p>This also goes for <code>false</code>, of course.</p>',rt,k,W,os="Example",Mn,ls="Example of an app that uses a boolean page variable.",z,b,cs="Open in Online Editor",En,kt,oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,dt,P,is='<div class="remark-container__title">Naming convention</div><p>A constant/variable that stores a boolean value usually has a name that starts with <code>is</code> or <code>has</code> to indicate that, like:</p><ul><li><code>isGirl</code></li> <li><code>isGameOver</code></li> <li><code>isAlive</code></li> <li><code>hasDied</code></li> <li><code>hasBeatenTheGame</code></li></ul>',mt,K,us="Conditionally keeping components",ft,Q,rs="Using boolean values we can conditionally keep/remove GUI components using the configuration method <code>keepIf()</code>. When you call this method, you should pass it a boolean value, and if that value is <code>false</code>, the component will be removed, and not used in the GUI.",ht,d,nn,ks="Example",Ln,ds="Example of an app that uses <code>keepIf()</code>.",tn,I,ms="Open in Online Editor",Bn,xt,la=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text              <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. This Text component doesn't call keepIf() at all, so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. This Text component passes true to keepIf(), so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,gt,sn,fs="Directly passing <code>true</code> or <code>false</code> to <code>keepIf()</code> is of course not that meaningful. Instead, you can use an app/page variable to pass a boolean value to <code>keepIf()</code>, so you pass different values to <code>keepIf()</code> depending on what value is stored in the app/page variable.",vt,m,an,hs="Example",Dn,xs="Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.",en,y,gs="Open in Online Editor",An,wt,ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,bt,pn,vs="Computations with booleans",It,on,ws="In the previous example, we kept a special <code>Text</code> component using:",yt,ln,Ct,ia='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span></code>',Tt,cn,bs="But how can we keep a special <code>Text</code> component if the user on the other hand is a boy (i.e. when <code>p.isGirl</code> is <code>false</code>)? Just as we can use mathemtical operations with numbers, there are some operations we can use with boolean values. The simplest is the <code>==</code> operation, which checks if the value to left of <code>==</code> is equal to the value to the right of it. If they are equal, the result of the operation is <code>true</code>, and if they are not equal, the result is instead <code>false</code>.",_t,un,Is="So, to check if the user is a boy, we can compare <code>p.isGirl</code> with <code>false</code> using the <code>==</code> operator.",St,f,rn,ys="Example",jn,Cs="Example showing different texts to boys and girls.",kn,C,Ts="Open in Online Editor",Un,Gt,ua=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Pt,H,_s='<div class="remark-container__title">Use ==</div><p>It&#39;s common for beginners to forget to use <code>==</code> when checking for equality, and instead write <code>=</code>, but then the code will not work as they indend to. The code might still run if you use <code>=</code> to check for equality (remember, <code>=</code> means the variable to the left should be assigned the value to the right), so it&#39;s really important to remember to write <code>==</code> when checking for equality.</p>',Ht,dn,Ss="Computations resulting in a boolean value",Mt,mn,Gs="The <code>==</code> operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:",Et,M,Ps="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Equality</td> <td><code>==</code></td> <td><code>5 == 4</code></td> <td><code>false</code></td></tr> <tr><td>Inequality</td> <td><code>!=</code></td> <td><code>5 != 4</code></td> <td><code>true</code></td></tr> <tr><td>Less than</td> <td><code>&lt;</code></td> <td><code>5 &lt; 4</code></td> <td><code>false</code></td></tr> <tr><td>Less than or equal to</td> <td><code>&lt;=</code></td> <td><code>5 &lt;= 4</code></td> <td><code>false</code></td></tr></tbody>",Lt,h,fn,Hs="Example",$n,Ms="Example showing different <code>Text</code> component based on the number in a page variable.",hn,T,Es="Open in Online Editor",On,Bt,ra=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Dt,xn,Ls="Conditionally showing components",At,gn,Bs="The configuration method <code>keepIf()</code> removes the component if the argument you pass to it is <code>false</code>. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be.",jt,x,vn,Ds="Example",qn,As="Example showing how some <code>Text</code> components &quot;jump around&quot; on the screen when clicking on the button.",wn,_,js="Open in Online Editor",Vn,Ut,ka=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,$t,bn,Us="To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn&#39;t have been removed. To accomplish this, we can use the configuration method <code>showIf()</code> instead of <code>keepIf()</code>. <code>showIf()</code> works the same way as <code>keepIf()</code>, but the component will still occupy space when it&#39;s not shown.",Ot,g,In,$s="Example",Rn,Os="Example showing how some <code>Text</code> components always occupy space on the screen, but they are not always shown.",yn,S,qs="Open in Online Editor",Nn,qt,da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Vt,Cn,Vs="If you should use <code>keepIf()</code> or <code>showIf()</code> in your app does of course depend on how you want your app to work.",Rt,Tn,Rs="Exercises",Nt,_n,Ns="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Zt,v,Sn,Zs="Exercise 1",Zn,Fs='<a href="/editor#eNq1UsFKw0AQ/ZVlLjawSBstlFwkipQeFLEFLabQJZm0pelu2J1gS8jFv/DkL/oJJo0pTWgUBA8JM3lv5r15JAURx+Ck4KsAwQE/Esawu50bxwy3hDIwLK9TT3pUPL5GQTgmoelBLLBjlQhppERLdgCKr1k5lEHGIVRRgNqA85LCKgCnx0GKTaG4HwEOKgwN0jM43aqe5nU24xDn+2qT5bJR2dSMH/QP5oum4X6YrJq+Jzn9nPJXZz5UKmBR4q/Z58f729yqXcJhC85l94LDDhx7YFf2JriJo3x1zWbNmWvWo9ANkugv9h7Vqzn3l6so0Cg7JeTROBY+8qo7OsHVyHYqYfuYGC2FZL3B1dzipydvVJRs5AmBJtGj64RIyW+Ze3W08hfuFM0P5AqxGr9NGaXdiPJWEmp3gf8f5NNS0JkpstQs398eYe3WXveIV0f6bYjdOmP3W1QbYc2yL/byX4o=" target="_blank">This BagaWork project</a> contains an empty page. Change the code in it, so it functions as shown below.',Gn,Fn,Ys="This app can also be implemented as two different pages, but to practice on what has been taught in this tutorial, you may only use one page.",Yn,Xs="<summary>Hint</summary><p>The GUI actually contains two buttons, but only one of them is shown at a time! Use a boolean value to keep track of whether the first or the second button should be shown, and use two different click handler methods (one for each button) to change that value to <code>true</code>/<code>false</code>.</p>",Ft,Pn,Js="That's it!",Yt,Hn,Ws="Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work!",Xt;return z=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),tn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),en=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),kn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),hn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),wn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),yn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),Gn=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){w=e("h1"),w.innerHTML=Jt,tt=c(),q=e("p"),q.textContent=Wt,st=c(),V=e("h2"),V.textContent=zt,at=c(),R=e("p"),R.innerHTML=Kt,et=c(),N=e("ul"),N.innerHTML=Qt,pt=c(),Z=e("p"),Z.innerHTML=ns,ot=c(),F=e("ul"),F.innerHTML=ts,lt=c(),Y=e("p"),Y.innerHTML=ss,ct=c(),X=e("ul"),X.innerHTML=as,it=c(),J=e("p"),J.innerHTML=es,ut=c(),G=e("div"),G.innerHTML=ps,rt=c(),k=e("div"),W=e("div"),W.textContent=os,Mn=e("p"),Mn.textContent=ls,E(z.$$.fragment),b=e("a"),b.textContent=cs,En=e("pre"),kt=new L(!1),dt=c(),P=e("div"),P.innerHTML=is,mt=c(),K=e("h2"),K.textContent=us,ft=c(),Q=e("p"),Q.innerHTML=rs,ht=c(),d=e("div"),nn=e("div"),nn.textContent=ks,Ln=e("p"),Ln.innerHTML=ds,E(tn.$$.fragment),I=e("a"),I.textContent=ms,Bn=e("pre"),xt=new L(!1),gt=c(),sn=e("p"),sn.innerHTML=fs,vt=c(),m=e("div"),an=e("div"),an.textContent=hs,Dn=e("p"),Dn.textContent=xs,E(en.$$.fragment),y=e("a"),y.textContent=gs,An=e("pre"),wt=new L(!1),bt=c(),pn=e("h2"),pn.textContent=vs,It=c(),on=e("p"),on.innerHTML=ws,yt=c(),ln=e("pre"),Ct=new L(!1),Tt=c(),cn=e("p"),cn.innerHTML=bs,_t=c(),un=e("p"),un.innerHTML=Is,St=c(),f=e("div"),rn=e("div"),rn.textContent=ys,jn=e("p"),jn.textContent=Cs,E(kn.$$.fragment),C=e("a"),C.textContent=Ts,Un=e("pre"),Gt=new L(!1),Pt=c(),H=e("div"),H.innerHTML=_s,Ht=c(),dn=e("h2"),dn.textContent=Ss,Mt=c(),mn=e("p"),mn.innerHTML=Gs,Et=c(),M=e("table"),M.innerHTML=Ps,Lt=c(),h=e("div"),fn=e("div"),fn.textContent=Hs,$n=e("p"),$n.innerHTML=Ms,E(hn.$$.fragment),T=e("a"),T.textContent=Es,On=e("pre"),Bt=new L(!1),Dt=c(),xn=e("h2"),xn.textContent=Ls,At=c(),gn=e("p"),gn.innerHTML=Bs,jt=c(),x=e("div"),vn=e("div"),vn.textContent=Ds,qn=e("p"),qn.innerHTML=As,E(wn.$$.fragment),_=e("a"),_.textContent=js,Vn=e("pre"),Ut=new L(!1),$t=c(),bn=e("p"),bn.innerHTML=Us,Ot=c(),g=e("div"),In=e("div"),In.textContent=$s,Rn=e("p"),Rn.innerHTML=Os,E(yn.$$.fragment),S=e("a"),S.textContent=qs,Nn=e("pre"),qt=new L(!1),Vt=c(),Cn=e("p"),Cn.innerHTML=Vs,Rt=c(),Tn=e("h2"),Tn.textContent=Rs,Nt=c(),_n=e("p"),_n.textContent=Ns,Zt=c(),v=e("div"),Sn=e("div"),Sn.textContent=Zs,Zn=e("p"),Zn.innerHTML=Fs,E(Gn.$$.fragment),Fn=e("p"),Fn.textContent=Ys,Yn=e("details"),Yn.innerHTML=Xs,Ft=c(),Pn=e("h2"),Pn.textContent=Js,Yt=c(),Hn=e("p"),Hn.textContent=Ws,this.h()},l(n){w=p(n,"H1",{"data-svelte-h":!0}),o(w)!=="svelte-8fbfcu"&&(w.innerHTML=Jt),tt=i(n),q=p(n,"P",{"data-svelte-h":!0}),o(q)!=="svelte-o2o5ce"&&(q.textContent=Wt),st=i(n),V=p(n,"H2",{"data-svelte-h":!0}),o(V)!=="svelte-44dcdv"&&(V.textContent=zt),at=i(n),R=p(n,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1vl51y6"&&(R.innerHTML=Kt),et=i(n),N=p(n,"UL",{"data-svelte-h":!0}),o(N)!=="svelte-1l99qqb"&&(N.innerHTML=Qt),pt=i(n),Z=p(n,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-h3rlkl"&&(Z.innerHTML=ns),ot=i(n),F=p(n,"UL",{"data-svelte-h":!0}),o(F)!=="svelte-36dcdj"&&(F.innerHTML=ts),lt=i(n),Y=p(n,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-10da6r3"&&(Y.innerHTML=ss),ct=i(n),X=p(n,"UL",{"data-svelte-h":!0}),o(X)!=="svelte-b930rv"&&(X.innerHTML=as),it=i(n),J=p(n,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1obxja8"&&(J.innerHTML=es),ut=i(n),G=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-hrbsbw"&&(G.innerHTML=ps),rt=i(n),k=p(n,"DIV",{class:!0});var s=r(k);W=p(s,"DIV",{class:!0,"data-svelte-h":!0}),o(W)!=="svelte-1llzxwj"&&(W.textContent=os),Mn=p(s,"P",{"data-svelte-h":!0}),o(Mn)!=="svelte-1nsfze"&&(Mn.textContent=ls),B(z.$$.fragment,s),b=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(b)!=="svelte-1g2zdfb"&&(b.textContent=cs),En=p(s,"PRE",{class:!0});var zs=r(En);kt=D(zs,!1),zs.forEach(t),s.forEach(t),dt=i(n),P=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-1ypy7kr"&&(P.innerHTML=is),mt=i(n),K=p(n,"H2",{"data-svelte-h":!0}),o(K)!=="svelte-1lal7r2"&&(K.textContent=us),ft=i(n),Q=p(n,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1268139"&&(Q.innerHTML=rs),ht=i(n),d=p(n,"DIV",{class:!0});var Xn=r(d);nn=p(Xn,"DIV",{class:!0,"data-svelte-h":!0}),o(nn)!=="svelte-1llzxwj"&&(nn.textContent=ks),Ln=p(Xn,"P",{"data-svelte-h":!0}),o(Ln)!=="svelte-hqdola"&&(Ln.innerHTML=ds),B(tn.$$.fragment,Xn),I=p(Xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(I)!=="svelte-12z0btd"&&(I.textContent=ms),Bn=p(Xn,"PRE",{class:!0});var Ks=r(Bn);xt=D(Ks,!1),Ks.forEach(t),Xn.forEach(t),gt=i(n),sn=p(n,"P",{"data-svelte-h":!0}),o(sn)!=="svelte-f6mhrh"&&(sn.innerHTML=fs),vt=i(n),m=p(n,"DIV",{class:!0});var Jn=r(m);an=p(Jn,"DIV",{class:!0,"data-svelte-h":!0}),o(an)!=="svelte-1llzxwj"&&(an.textContent=hs),Dn=p(Jn,"P",{"data-svelte-h":!0}),o(Dn)!=="svelte-70wjwb"&&(Dn.textContent=xs),B(en.$$.fragment,Jn),y=p(Jn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(y)!=="svelte-1t3lbnx"&&(y.textContent=gs),An=p(Jn,"PRE",{class:!0});var Qs=r(An);wt=D(Qs,!1),Qs.forEach(t),Jn.forEach(t),bt=i(n),pn=p(n,"H2",{"data-svelte-h":!0}),o(pn)!=="svelte-j8st43"&&(pn.textContent=vs),It=i(n),on=p(n,"P",{"data-svelte-h":!0}),o(on)!=="svelte-aroyaw"&&(on.innerHTML=ws),yt=i(n),ln=p(n,"PRE",{class:!0});var na=r(ln);Ct=D(na,!1),na.forEach(t),Tt=i(n),cn=p(n,"P",{"data-svelte-h":!0}),o(cn)!=="svelte-1fsh1sb"&&(cn.innerHTML=bs),_t=i(n),un=p(n,"P",{"data-svelte-h":!0}),o(un)!=="svelte-iogsrp"&&(un.innerHTML=Is),St=i(n),f=p(n,"DIV",{class:!0});var Wn=r(f);rn=p(Wn,"DIV",{class:!0,"data-svelte-h":!0}),o(rn)!=="svelte-1llzxwj"&&(rn.textContent=ys),jn=p(Wn,"P",{"data-svelte-h":!0}),o(jn)!=="svelte-1v00t9c"&&(jn.textContent=Cs),B(kn.$$.fragment,Wn),C=p(Wn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-1qhbgb4"&&(C.textContent=Ts),Un=p(Wn,"PRE",{class:!0});var ta=r(Un);Gt=D(ta,!1),ta.forEach(t),Wn.forEach(t),Pt=i(n),H=p(n,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-p4gor3"&&(H.innerHTML=_s),Ht=i(n),dn=p(n,"H2",{"data-svelte-h":!0}),o(dn)!=="svelte-a5gq5m"&&(dn.textContent=Ss),Mt=i(n),mn=p(n,"P",{"data-svelte-h":!0}),o(mn)!=="svelte-s4g7lc"&&(mn.innerHTML=Gs),Et=i(n),M=p(n,"TABLE",{border:!0,"data-svelte-h":!0}),o(M)!=="svelte-qntdvz"&&(M.innerHTML=Ps),Lt=i(n),h=p(n,"DIV",{class:!0});var zn=r(h);fn=p(zn,"DIV",{class:!0,"data-svelte-h":!0}),o(fn)!=="svelte-1llzxwj"&&(fn.textContent=Hs),$n=p(zn,"P",{"data-svelte-h":!0}),o($n)!=="svelte-1mgz7nm"&&($n.innerHTML=Ms),B(hn.$$.fragment,zn),T=p(zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-taa1hc"&&(T.textContent=Es),On=p(zn,"PRE",{class:!0});var sa=r(On);Bt=D(sa,!1),sa.forEach(t),zn.forEach(t),Dt=i(n),xn=p(n,"H2",{"data-svelte-h":!0}),o(xn)!=="svelte-1wu0k1e"&&(xn.textContent=Ls),At=i(n),gn=p(n,"P",{"data-svelte-h":!0}),o(gn)!=="svelte-1d16wql"&&(gn.innerHTML=Bs),jt=i(n),x=p(n,"DIV",{class:!0});var Kn=r(x);vn=p(Kn,"DIV",{class:!0,"data-svelte-h":!0}),o(vn)!=="svelte-1llzxwj"&&(vn.textContent=Ds),qn=p(Kn,"P",{"data-svelte-h":!0}),o(qn)!=="svelte-15bi592"&&(qn.innerHTML=As),B(wn.$$.fragment,Kn),_=p(Kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(_)!=="svelte-1prnna2"&&(_.textContent=js),Vn=p(Kn,"PRE",{class:!0});var aa=r(Vn);Ut=D(aa,!1),aa.forEach(t),Kn.forEach(t),$t=i(n),bn=p(n,"P",{"data-svelte-h":!0}),o(bn)!=="svelte-7jieoe"&&(bn.innerHTML=Us),Ot=i(n),g=p(n,"DIV",{class:!0});var Qn=r(g);In=p(Qn,"DIV",{class:!0,"data-svelte-h":!0}),o(In)!=="svelte-1llzxwj"&&(In.textContent=$s),Rn=p(Qn,"P",{"data-svelte-h":!0}),o(Rn)!=="svelte-1i4eqcn"&&(Rn.innerHTML=Os),B(yn.$$.fragment,Qn),S=p(Qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(S)!=="svelte-12uot33"&&(S.textContent=qs),Nn=p(Qn,"PRE",{class:!0});var ea=r(Nn);qt=D(ea,!1),ea.forEach(t),Qn.forEach(t),Vt=i(n),Cn=p(n,"P",{"data-svelte-h":!0}),o(Cn)!=="svelte-yh6p5b"&&(Cn.innerHTML=Vs),Rt=i(n),Tn=p(n,"H2",{"data-svelte-h":!0}),o(Tn)!=="svelte-4opca7"&&(Tn.textContent=Rs),Nt=i(n),_n=p(n,"P",{"data-svelte-h":!0}),o(_n)!=="svelte-fy3v6t"&&(_n.textContent=Ns),Zt=i(n),v=p(n,"DIV",{class:!0});var nt=r(v);Sn=p(nt,"DIV",{class:!0,"data-svelte-h":!0}),o(Sn)!=="svelte-1kqyz2o"&&(Sn.textContent=Zs),Zn=p(nt,"P",{"data-svelte-h":!0}),o(Zn)!=="svelte-e6n5ow"&&(Zn.innerHTML=Fs),B(Gn.$$.fragment,nt),Fn=p(nt,"P",{"data-svelte-h":!0}),o(Fn)!=="svelte-1p13pmi"&&(Fn.textContent=Ys),Yn=p(nt,"DETAILS",{"data-svelte-h":!0}),o(Yn)!=="svelte-1xbxdu9"&&(Yn.innerHTML=Xs),nt.forEach(t),Ft=i(n),Pn=p(n,"H2",{"data-svelte-h":!0}),o(Pn)!=="svelte-p2uhy5"&&(Pn.textContent=Js),Yt=i(n),Hn=p(n,"P",{"data-svelte-h":!0}),o(Hn)!=="svelte-1ttzi4s"&&(Hn.textContent=Ws),this.h()},h(){l(G,"class","remark-container warning"),l(W,"class","remark-container__title"),l(b,"target","_blank"),l(b,"href","/editor#eNp9UcFKxDAQ/ZU4CLZQShW8FDy4HpYeBHG9WWFjOrsWYxKSKW4p+XdT2xTU4iEhb2bevDeTAbgxUA4gdINQgpDcOXbf3xrD8ESoGsfCe6hVTcIiJ9wRt/TAj5ik39GaLFJnFVsSY9TXyoPPwATsoHweoG2gvMzgoGWDtprAD9GFvwiPYNIIp3Xb1kp2w8h2GIOTpW3X/jbzqD9dLt5a2VhUyZSqaWe4wCyip6CTU7iS/dL8fDD5BPw+zdZ5m45Iq5lZXXwwzl51f7ZPc63uZCveE5M7pMptdJ/+xzoGmRXaqB556bzMadzYdZk2mg3OD1w6/Fs9ZtfK4xbnag8ZnMKfXBcZ9FBeFYV/8V8udcKn"),l(b,"title","Open in our Online Editor"),kt.a=null,l(En,"class","language-js"),l(k,"class","remark-container tip"),l(P,"class","remark-container tip"),l(nn,"class","remark-container__title"),l(I,"target","_blank"),l(I,"href","/editor#eNp9ksFuwyAMhl/F8mWJFEVtp11y22nqYdK09bZMKgtui0YBgbO2ivLug7SL1motF/htw/eD6VA4h1WHjZWEFTZahADPh0fngPZMRgaI6642NTeeBNMbC88vYk1ZPkRr9sStNzAmUrSvTY99gS7qgNV7h0piNS1wZbUkPz+KM+i4fwQncWSM9KdWXXJf7S6UzUZp6clkx1TNi3gInI2SYyhbTktYbFSAoaCxW2cNGQZpKZi7GBFawxeRm6+yHARD1AUEC4php2Luk6ANJEGEOLdCl8u8+AstT5tXQgfKT9DZ/1AX700BhlJgO3IvgZ629jsxjQRjeTAw1BxsG50n34HiCQmRgKBMFASxt9fssW8p/32T+5v2Uuktd1eeIz/9g9S+Hgvcx5Y/TAo8YDWbTPqP/geQydv2"),l(I,"title","Open in our Online Editor"),xt.a=null,l(Bn,"class","language-js"),l(d,"class","remark-container tip"),l(an,"class","remark-container__title"),l(y,"target","_blank"),l(y,"href","/editor#eNp9UU1LxDAQ/StxEGyhlCp4KXhwPSw9COJ6ESs0ttO1bE1CMsUtJf/d1DbVXRcPKXkz72M6GYArBekApawQUihbbgy772+VYrgnFJVh7j7kIqdSIyfcENf0wLcYhN/VnDRSpwVbGmPV5sKCjUA5bCB9GaCpIL2MoJZthTqbwEHool+CRzBluNOYdaNbdsNId+iL00jrrjke5lF+mrh8b9pKowimVk4bxUuMPHpyOTG5T1As5ueDiidgi/AU81l2jGtknG0d6awI4x2iyurA635Uh2mrjkiK2SW7+HAOb7IfDaS4a5ty5xwMUmZWsg//U/ncI9nv7HB+gmlJ3nXZkR/V/W/NW4N/2WP3FN3vfmZbiGDvXvI6iaCH9CpJ7Kv9Ag2Z1ZY="),l(y,"title","Open in our Online Editor"),wt.a=null,l(An,"class","language-js"),l(m,"class","remark-container tip"),Ct.a=null,l(ln,"class","language-js"),l(rn,"class","remark-container__title"),l(C,"target","_blank"),l(C,"href","/editor#eNqFUtFKwzAU/ZV4EWyhlCr4UtiD82H0QRDni1hhWXs3y2oSkltcKfl3U9N2bg59SMi595xzD0k64EpB2kEhS4QUipobwx7aO6UY7glFaZg7d7nIqdDICZfENT3yLQbhdzUnjdRowaZGX7W5sGAjUA4bSF87qEpIryPYyLpEnXlwNHTST4N74Ge4VZlFpWs2Y6QbHIs+0qKpTsM8yU8TF+9VXWoUgW/ltFS8wGhEz25OTG4LVpP5ZadiD+wqPMd8kQ3jGhlnW0e6WIXxDlFlm2DU/aNay/aMiM1mbMNrgwf1cdZ5QyTF4JZdfRycpLivq2LnrAxSZuayDf9SjalPZD+Th8MD+iseXacbPmT2kX+z++45+vhyA9tCBHv3D26TCFpIb5LEvtkvwDLq5g=="),l(C,"title","Open in our Online Editor"),Gt.a=null,l(Un,"class","language-js"),l(f,"class","remark-container tip"),l(H,"class","remark-container warning"),l(M,"border","1"),l(fn,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNqFkt9LwzAQx/+VLAi2WEsn+GBZH3SC9EEQ55OrsKy9zbAuCelVN0r/d9N1S93s8CXkfn2+d5dUlClFw4qmMgMa0jRnRUGet/dKEdggiKwg5l4lIsFUA0OYINP4wpbguDtvghqw1ILYQOOtE1HT2qPK2AUNpxXlGQ2HHl3IPAMdt8aRqK23wo3RajTqshQImkQksK5dQ08lP23lVX4XfvrJ80yDcNpQghPFUvAO1ptR8dEczuyiUv4eXxOH42VBBCwZ8i8YuDPXXwGoeOHYJDIigdsHegct+/Kj6EzBb+WucEhGEbGBrvDsAHHTMiNzviSiXM9BDzrYnen2X9ZY5uVa9OwswYcSUYq90COYna9BoOFLMc55ujJjZgdvhz8VOOHEoo/DxR+O217c/Z9q393q2XfvVn0dkeFRsoX2JF8dJ9fUoxvzMW8Dj25peBME9Uf9AyNpIRU="),l(T,"title","Open in our Online Editor"),Bt.a=null,l(On,"class","language-js"),l(h,"class","remark-container tip"),l(vn,"class","remark-container__title"),l(_,"target","_blank"),l(_,"href","/editor#eNqFUcFKw0AQ/ZVxTgmG0Fa8BIuoB81BEevNCF2SiV2a7i6bCW0I+Xe3TbqlongZ9r3ZN29406EwBpMOc10QJphXoq7hub0zBmjHpIoa3LvLVMa5JcG0YGH5VXxREB7YjC1xYxX4xp7tM9VjH6FxuMbko0NZYDKNsNRVQTYdwJmp13vjPRg89u66UUwW5jD11GGhx0b+XOVNb+s4X8mqsKSCoZXxwoicoiN6dy4xuxIsnyTwiixdLMN4TWTSMpjCzRxMPJqGv6r0FoQlaHVzexLO/hemIDZQSkXxSXb1h+x85/uGWatxzIurboBWD5XM14GJpXKBbEjxUR6OlxjS8m2flveDyzHV8XOPEe7cha4nEbaYzCaT/rP/BrAgxQY="),l(_,"title","Open in our Online Editor"),Ut.a=null,l(Vn,"class","language-js"),l(x,"class","remark-container tip"),l(In,"class","remark-container__title"),l(S,"target","_blank"),l(S,"href","/editor#eNqFUcFKw0AQ/ZVxTgmG0FS8BIuoB81BEevNFLokE7uY7i6bCW0J+Xe3TbqlongZ9r3ZN29406EwBtMOC10SpljUomngeXdnDNCWSZUNuHeXq5wLS4JpzsLyq/ikIDywOVvi1irwjT3b56rHPkLjcIPpR4eyxDSJsNJ1STYbwJmp13vjPRg89u66VUwWZpB46rDQYyt/rvKmN01crGRdWlLB0Mp5bkRB0RG9O5eYXQmWTxJ4RZYulmHcrPQmq4IEbmZg4tE0/FWlNyAswU63tyfh9H9hBmINlVQUn2RXf8jOd75vmbUax7y46gZo9VDL4iswsVQukDUpPsrD8RJDWr7t0/J+cDmmOn7uMcKtu9D1JMIdptPJpF/03/moxVo="),l(S,"title","Open in our Online Editor"),qt.a=null,l(Nn,"class","language-js"),l(g,"class","remark-container tip"),l(Sn,"class","remark-container__title"),l(v,"class","remark-container exercise")},m(n,s){a(n,w,s),a(n,tt,s),a(n,q,s),a(n,st,s),a(n,V,s),a(n,at,s),a(n,R,s),a(n,et,s),a(n,N,s),a(n,pt,s),a(n,Z,s),a(n,ot,s),a(n,F,s),a(n,lt,s),a(n,Y,s),a(n,ct,s),a(n,X,s),a(n,it,s),a(n,J,s),a(n,ut,s),a(n,G,s),a(n,rt,s),a(n,k,s),u(k,W),u(k,Mn),A(z,k,null),u(k,b),u(k,En),kt.m(oa,En),a(n,dt,s),a(n,P,s),a(n,mt,s),a(n,K,s),a(n,ft,s),a(n,Q,s),a(n,ht,s),a(n,d,s),u(d,nn),u(d,Ln),A(tn,d,null),u(d,I),u(d,Bn),xt.m(la,Bn),a(n,gt,s),a(n,sn,s),a(n,vt,s),a(n,m,s),u(m,an),u(m,Dn),A(en,m,null),u(m,y),u(m,An),wt.m(ca,An),a(n,bt,s),a(n,pn,s),a(n,It,s),a(n,on,s),a(n,yt,s),a(n,ln,s),Ct.m(ia,ln),a(n,Tt,s),a(n,cn,s),a(n,_t,s),a(n,un,s),a(n,St,s),a(n,f,s),u(f,rn),u(f,jn),A(kn,f,null),u(f,C),u(f,Un),Gt.m(ua,Un),a(n,Pt,s),a(n,H,s),a(n,Ht,s),a(n,dn,s),a(n,Mt,s),a(n,mn,s),a(n,Et,s),a(n,M,s),a(n,Lt,s),a(n,h,s),u(h,fn),u(h,$n),A(hn,h,null),u(h,T),u(h,On),Bt.m(ra,On),a(n,Dt,s),a(n,xn,s),a(n,At,s),a(n,gn,s),a(n,jt,s),a(n,x,s),u(x,vn),u(x,qn),A(wn,x,null),u(x,_),u(x,Vn),Ut.m(ka,Vn),a(n,$t,s),a(n,bn,s),a(n,Ot,s),a(n,g,s),u(g,In),u(g,Rn),A(yn,g,null),u(g,S),u(g,Nn),qt.m(da,Nn),a(n,Vt,s),a(n,Cn,s),a(n,Rt,s),a(n,Tn,s),a(n,Nt,s),a(n,_n,s),a(n,Zt,s),a(n,v,s),u(v,Sn),u(v,Zn),A(Gn,v,null),u(v,Fn),u(v,Yn),a(n,Ft,s),a(n,Pn,s),a(n,Yt,s),a(n,Hn,s),Xt=!0},p:fa,i(n){Xt||(j(z.$$.fragment,n),j(tn.$$.fragment,n),j(en.$$.fragment,n),j(kn.$$.fragment,n),j(hn.$$.fragment,n),j(wn.$$.fragment,n),j(yn.$$.fragment,n),j(Gn.$$.fragment,n),Xt=!0)},o(n){U(z.$$.fragment,n),U(tn.$$.fragment,n),U(en.$$.fragment,n),U(kn.$$.fragment,n),U(hn.$$.fragment,n),U(wn.$$.fragment,n),U(yn.$$.fragment,n),U(Gn.$$.fragment,n),Xt=!1},d(n){n&&(t(w),t(tt),t(q),t(st),t(V),t(at),t(R),t(et),t(N),t(pt),t(Z),t(ot),t(F),t(lt),t(Y),t(ct),t(X),t(it),t(J),t(ut),t(G),t(rt),t(k),t(dt),t(P),t(mt),t(K),t(ft),t(Q),t(ht),t(d),t(gt),t(sn),t(vt),t(m),t(bt),t(pn),t(It),t(on),t(yt),t(ln),t(Tt),t(cn),t(_t),t(un),t(St),t(f),t(Pt),t(H),t(Ht),t(dn),t(Mt),t(mn),t(Et),t(M),t(Lt),t(h),t(Dt),t(xn),t(At),t(gn),t(jt),t(x),t($t),t(bn),t(Ot),t(g),t(Vt),t(Cn),t(Rt),t(Tn),t(Nt),t(_n),t(Zt),t(v),t(Ft),t(Pn),t(Yt),t(Hn)),$(z),$(tn),$(en),$(kn),$(hn),$(wn),$(yn),$(Gn)}}}class Ia extends ha{constructor(w){super(),xa(this,w,null,ga,ma,{})}}export{Ia as component};
