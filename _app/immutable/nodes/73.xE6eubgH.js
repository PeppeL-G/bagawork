import{s as is,n as rs}from"../chunks/scheduler.UQwd20JU.js";import{S as ks,i as ds,e,s as c,c as bt,H as E,a as p,g as o,b as u,d as r,f as Ct,n as _,h as n,o as l,j as s,p as i,m as Pt,t as Gt,k as Ht,l as Bt}from"../chunks/index.i__Fl8cY.js";import{V as Et}from"../chunks/ViewApp.m6vzcyjb.js";function fs(ns){let k,Wn="5. Booleans, <code>keepIf()</code> and <code>showIf()</code>",Xt,A,Kn="This tutorial will teach you how to use boolean values in JavaScript, and conditionally keep/remove or show/hide GUI components.",Jt,M,$n="The boolean datatype",Ft,L,ta="An app often needs to do different things depending on if an answer to a question is <em>yes</em> or <em>no</em>. Examples of that are:",Zt,D,na="<li>In a message app: Do you have 0 messages?<ul><li>If <em>yes</em>, show the text <em>You have no messages</em></li> <li>If <em>no</em>, show a list with the messages</li></ul></li> <li>In a healthapp: Is the entered age negative?<ul><li>If <em>yes</em>, show the text <em>The age must be greater than or equal to 0</em></li> <li>If <em>no</em>, show the text <em>The entered age is OK</em></li></ul></li>",Qt,j,aa="To represent these <em>yes</em> and <em>no</em> answers, we can use the boolean datatype in JavaScript. This datatype only have two possible values:",Wt,z,sa="<li><code>true</code> means <em>yes</em></li> <li><code>false</code> means <em>no</em></li>",Kt,R,ea="So instead of thinking of it like the question <em>Do you have 0 messages?</em>, this datatype thinks of it like a statement that is correct (<code>true</code>) or incorrect (<code>false</code>), i.e.:",$t,V,pa="<li>In a message app: You have 0 messages<ul><li>If <code>true</code>, show the text <em>You have no messages</em></li> <li>If <code>false</code>, show a list with the messages</li></ul></li> <li>In a healthapp: The entered age is negative<ul><li>If <code>true</code>, show the text <em>The age must be greater than or equal to 0</em></li> <li>If <code>false</code>, show the text <em>The entered age is OK</em></li></ul></li>",tn,Y,oa="<code>true</code> and <code>false</code>, like all values in JavaScript, can be stored in app variables and page variables just like strings and numbers.",nn,P,la='<div class="remark-container__title">Don&#39;t use `</div><p>Don&#39;t surround <code>true</code> with the <code>`</code> character! If you do, you create the string that contains the characters <code>t</code>, <code>r</code>, <code>u</code> and <code>e</code>, and not the boolean value <code>true</code> that means that something is correct.</p><p>This also goes for <code>false</code>, of course.</p>',an,d,q,ca="Example",_t,ua="Example of an app that uses a boolean page variable.",O,N,f,ia="Open in Online Editor",At,sn,as=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,en,G,ra='<div class="remark-container__title">Naming convention</div><p>A constant/variable that stores a boolean value usually has a name that starts with <code>is</code> or <code>has</code> to indicate that, like:</p><ul><li><code>isGirl</code></li> <li><code>isGameOver</code></li> <li><code>isAlive</code></li> <li><code>hasDied</code></li> <li><code>hasBeatenTheGame</code></li></ul>',pn,U,ka="Conditionally keeping components",on,X,da="Using boolean values we can conditionally keep/remove GUI components using the configuration method <code>keepIf()</code>. When you call this method, you should pass it a boolean value, and if that value is <code>false</code>, the component will be removed, and not used in the GUI.",ln,m,J,fa="Example",Mt,ma="Example of an app that uses <code>keepIf()</code>.",F,Z,x,xa="Open in Online Editor",Lt,cn,ss=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text              <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1. This Text component doesn't call keepIf() at all, so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2. This Text component passes false to keepIf(), so it will be removed and not used, so you don't see this text in the app.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3. This Text component passes true to keepIf(), so it will be used as usual.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,un,Q,ga="Directly passing <code>true</code> or <code>false</code> to <code>keepIf()</code> is of course not that meaningful. Instead, you can use an app/page variable to pass a boolean value to <code>keepIf()</code>, so you pass different values to <code>keepIf()</code> depending on what value is stored in the app/page variable.",rn,g,W,ha="Example",Dt,va="Example of an app that uses a boolean page variable to conditionally keep/remove a GUI component.",K,$,h,wa="Open in Online Editor",jt,kn,es=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,dn,tt,Ia="Computations with booleans",fn,nt,Ta="In the previous example, we kept a special <code>Text</code> component using:",mn,at,xn,ps='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You are a girl!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>isGirl<span class="token punctuation">)</span></code>',gn,st,ya="But how can we keep a special <code>Text</code> component if the user on the other hand is a boy (i.e. when <code>p.isGirl</code> is <code>false</code>)? Just as we can use mathemtical operations with numbers, there are some operations we can use with boolean values. The simplest is the <code>==</code> operation, which checks if the value to left of <code>==</code> is equal to the value to the right of it. If they are equal, the result of the operation is <code>true</code>, and if they are not equal, the result is instead <code>false</code>.",hn,et,Sa="So, to check if the user is a boy, we can compare <code>p.isGirl</code> with <code>false</code> using the <code>==</code> operator.",vn,v,pt,ba="Example",zt,Ca="Example showing different texts to boys and girls.",ot,lt,w,Pa="Open in Online Editor",Rt,wn,os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,In,H,Ga='<div class="remark-container__title">Use ==</div><p>It&#39;s common for beginners to forget to use <code>==</code> when checking for equality, and instead write <code>=</code>, but then the code will not work as they indend to. The code might still run if you use <code>=</code> to check for equality (remember, <code>=</code> means the variable to the left should be assigned the value to the right), so it&#39;s really important to remember to write <code>==</code> when checking for equality.</p>',Tn,ct,Ha="Computations resulting in a boolean value",yn,ut,Ba="The <code>==</code> operation can not only be used on booleans; you can use it to compare numbers or strings too. There are also some additional operations that results in a boolean value that can be used on numbers and strings:",Sn,B,Ea="<thead><tr><th>Operation</th> <th>Symbol</th> <th>Example</th> <th>Result</th></tr></thead> <tbody><tr><td>Equality</td> <td><code>==</code></td> <td><code>5 == 4</code></td> <td><code>false</code></td></tr> <tr><td>Inequality</td> <td><code>!=</code></td> <td><code>5 != 4</code></td> <td><code>true</code></td></tr> <tr><td>Less than</td> <td><code>&lt;</code></td> <td><code>5 &lt; 4</code></td> <td><code>false</code></td></tr> <tr><td>Less than or equal to</td> <td><code>&lt;=</code></td> <td><code>5 &lt;= 4</code></td> <td><code>false</code></td></tr></tbody>",bn,I,it,_a="Example",Vt,Aa="Example showing different <code>Text</code> component based on the number in a page variable.",rt,kt,T,Ma="Open in Online Editor",Yt,Cn,ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Pn,dt,La="Conditionally showing components",Gn,ft,Da="The configuration method <code>keepIf()</code> removes the component if the argument you pass to it is <code>false</code>. Although this often is really useful, it sometimes has a drawback: other GUI components on the screen might not be posistioned where you want them to be.",Hn,y,mt,ja="Example",qt,za="Example showing how some <code>Text</code> components &quot;jump around&quot; on the screen when clicking on the button.",xt,gt,S,Ra="Open in Online Editor",Ot,Bn,cs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,En,ht,Va="To avoid this, we want the components not shown on the screen to still occupy the space they would occupy if they wouldn&#39;t have been removed. To accomplish this, we can use the configuration <code>showIf()</code> instead of <code>keepIf()</code>. <code>showIf()</code> works the same way as <code>keepIf()</code>, but the component will still occupy space when it&#39;s not shown.",_n,b,vt,Ya="Example",Nt,qa="Example showing how some <code>Text</code> components always occupy space on the screen, but they are not always shown.",wt,It,C,Oa="Open in Online Editor",Ut,An,us=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Mn,Tt,Na="If you should use <code>keepIf()</code> or <code>showIf()</code> in your app does of course depends on how you want your app to work.",Ln,yt,Ua="That's it!",Dn,St,Xa="Hurray, now you know how to conditionally keep/remove and show/hide GUI components! 🥳 Good work!",jn;return N=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),Z=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),$=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),lt=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),kt=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),gt=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),It=new Et({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),{c(){k=e("h1"),k.innerHTML=Wn,Xt=c(),A=e("p"),A.textContent=Kn,Jt=c(),M=e("h2"),M.textContent=$n,Ft=c(),L=e("p"),L.innerHTML=ta,Zt=c(),D=e("ul"),D.innerHTML=na,Qt=c(),j=e("p"),j.innerHTML=aa,Wt=c(),z=e("ul"),z.innerHTML=sa,Kt=c(),R=e("p"),R.innerHTML=ea,$t=c(),V=e("ul"),V.innerHTML=pa,tn=c(),Y=e("p"),Y.innerHTML=oa,nn=c(),P=e("div"),P.innerHTML=la,an=c(),d=e("div"),q=e("div"),q.textContent=ca,_t=e("p"),_t.textContent=ua,O=e("div"),bt(N.$$.fragment),f=e("a"),f.textContent=ia,At=e("pre"),sn=new E(!1),en=c(),G=e("div"),G.innerHTML=ra,pn=c(),U=e("h2"),U.textContent=ka,on=c(),X=e("p"),X.innerHTML=da,ln=c(),m=e("div"),J=e("div"),J.textContent=fa,Mt=e("p"),Mt.innerHTML=ma,F=e("div"),bt(Z.$$.fragment),x=e("a"),x.textContent=xa,Lt=e("pre"),cn=new E(!1),un=c(),Q=e("p"),Q.innerHTML=ga,rn=c(),g=e("div"),W=e("div"),W.textContent=ha,Dt=e("p"),Dt.textContent=va,K=e("div"),bt($.$$.fragment),h=e("a"),h.textContent=wa,jt=e("pre"),kn=new E(!1),dn=c(),tt=e("h2"),tt.textContent=Ia,fn=c(),nt=e("p"),nt.innerHTML=Ta,mn=c(),at=e("pre"),xn=new E(!1),gn=c(),st=e("p"),st.innerHTML=ya,hn=c(),et=e("p"),et.innerHTML=Sa,vn=c(),v=e("div"),pt=e("div"),pt.textContent=ba,zt=e("p"),zt.textContent=Ca,ot=e("div"),bt(lt.$$.fragment),w=e("a"),w.textContent=Pa,Rt=e("pre"),wn=new E(!1),In=c(),H=e("div"),H.innerHTML=Ga,Tn=c(),ct=e("h2"),ct.textContent=Ha,yn=c(),ut=e("p"),ut.innerHTML=Ba,Sn=c(),B=e("table"),B.innerHTML=Ea,bn=c(),I=e("div"),it=e("div"),it.textContent=_a,Vt=e("p"),Vt.innerHTML=Aa,rt=e("div"),bt(kt.$$.fragment),T=e("a"),T.textContent=Ma,Yt=e("pre"),Cn=new E(!1),Pn=c(),dt=e("h2"),dt.textContent=La,Gn=c(),ft=e("p"),ft.innerHTML=Da,Hn=c(),y=e("div"),mt=e("div"),mt.textContent=ja,qt=e("p"),qt.innerHTML=za,xt=e("div"),bt(gt.$$.fragment),S=e("a"),S.textContent=Ra,Ot=e("pre"),Bn=new E(!1),En=c(),ht=e("p"),ht.innerHTML=Va,_n=c(),b=e("div"),vt=e("div"),vt.textContent=Ya,Nt=e("p"),Nt.innerHTML=qa,wt=e("div"),bt(It.$$.fragment),C=e("a"),C.textContent=Oa,Ut=e("pre"),An=new E(!1),Mn=c(),Tt=e("p"),Tt.innerHTML=Na,Ln=c(),yt=e("h2"),yt.textContent=Ua,Dn=c(),St=e("p"),St.textContent=Xa,this.h()},l(t){k=p(t,"H1",{"data-svelte-h":!0}),o(k)!=="svelte-8gzzzt"&&(k.innerHTML=Wn),Xt=u(t),A=p(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-o2o5ce"&&(A.textContent=Kn),Jt=u(t),M=p(t,"H2",{"data-svelte-h":!0}),o(M)!=="svelte-44dcdv"&&(M.textContent=$n),Ft=u(t),L=p(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1vl51y6"&&(L.innerHTML=ta),Zt=u(t),D=p(t,"UL",{"data-svelte-h":!0}),o(D)!=="svelte-1h62198"&&(D.innerHTML=na),Qt=u(t),j=p(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-h3rlkl"&&(j.innerHTML=aa),Wt=u(t),z=p(t,"UL",{"data-svelte-h":!0}),o(z)!=="svelte-36dcdj"&&(z.innerHTML=sa),Kt=u(t),R=p(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-10da6r3"&&(R.innerHTML=ea),$t=u(t),V=p(t,"UL",{"data-svelte-h":!0}),o(V)!=="svelte-80pdob"&&(V.innerHTML=pa),tn=u(t),Y=p(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1obxja8"&&(Y.innerHTML=oa),nn=u(t),P=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-hrbsbw"&&(P.innerHTML=la),an=u(t),d=p(t,"DIV",{class:!0});var a=r(d);q=p(a,"DIV",{class:!0,"data-svelte-h":!0}),o(q)!=="svelte-1llzxwj"&&(q.textContent=ca),_t=p(a,"P",{"data-svelte-h":!0}),o(_t)!=="svelte-1nsfze"&&(_t.textContent=ua),O=p(a,"DIV",{});var zn=r(O);Ct(N.$$.fragment,zn),f=p(zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-l9fyvk"&&(f.textContent=ia),At=p(zn,"PRE",{class:!0});var Ja=r(At);sn=_(Ja,!1),Ja.forEach(n),zn.forEach(n),a.forEach(n),en=u(t),G=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-1ypy7kr"&&(G.innerHTML=ra),pn=u(t),U=p(t,"H2",{"data-svelte-h":!0}),o(U)!=="svelte-1lal7r2"&&(U.textContent=ka),on=u(t),X=p(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-1268139"&&(X.innerHTML=da),ln=u(t),m=p(t,"DIV",{class:!0});var Rn=r(m);J=p(Rn,"DIV",{class:!0,"data-svelte-h":!0}),o(J)!=="svelte-1llzxwj"&&(J.textContent=fa),Mt=p(Rn,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-hqdola"&&(Mt.innerHTML=ma),F=p(Rn,"DIV",{});var Vn=r(F);Ct(Z.$$.fragment,Vn),x=p(Vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-1xkqbtw"&&(x.textContent=xa),Lt=p(Vn,"PRE",{class:!0});var Fa=r(Lt);cn=_(Fa,!1),Fa.forEach(n),Vn.forEach(n),Rn.forEach(n),un=u(t),Q=p(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-f6mhrh"&&(Q.innerHTML=ga),rn=u(t),g=p(t,"DIV",{class:!0});var Yn=r(g);W=p(Yn,"DIV",{class:!0,"data-svelte-h":!0}),o(W)!=="svelte-1llzxwj"&&(W.textContent=ha),Dt=p(Yn,"P",{"data-svelte-h":!0}),o(Dt)!=="svelte-70wjwb"&&(Dt.textContent=va),K=p(Yn,"DIV",{});var qn=r(K);Ct($.$$.fragment,qn),h=p(qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(h)!=="svelte-1hexrfe"&&(h.textContent=wa),jt=p(qn,"PRE",{class:!0});var Za=r(jt);kn=_(Za,!1),Za.forEach(n),qn.forEach(n),Yn.forEach(n),dn=u(t),tt=p(t,"H2",{"data-svelte-h":!0}),o(tt)!=="svelte-j8st43"&&(tt.textContent=Ia),fn=u(t),nt=p(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-aroyaw"&&(nt.innerHTML=Ta),mn=u(t),at=p(t,"PRE",{class:!0});var Qa=r(at);xn=_(Qa,!1),Qa.forEach(n),gn=u(t),st=p(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-1fsh1sb"&&(st.innerHTML=ya),hn=u(t),et=p(t,"P",{"data-svelte-h":!0}),o(et)!=="svelte-iogsrp"&&(et.innerHTML=Sa),vn=u(t),v=p(t,"DIV",{class:!0});var On=r(v);pt=p(On,"DIV",{class:!0,"data-svelte-h":!0}),o(pt)!=="svelte-1llzxwj"&&(pt.textContent=ba),zt=p(On,"P",{"data-svelte-h":!0}),o(zt)!=="svelte-1v00t9c"&&(zt.textContent=Ca),ot=p(On,"DIV",{});var Nn=r(ot);Ct(lt.$$.fragment,Nn),w=p(Nn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-1gw9p46"&&(w.textContent=Pa),Rt=p(Nn,"PRE",{class:!0});var Wa=r(Rt);wn=_(Wa,!1),Wa.forEach(n),Nn.forEach(n),On.forEach(n),In=u(t),H=p(t,"DIV",{class:!0,"data-svelte-h":!0}),o(H)!=="svelte-p4gor3"&&(H.innerHTML=Ga),Tn=u(t),ct=p(t,"H2",{"data-svelte-h":!0}),o(ct)!=="svelte-a5gq5m"&&(ct.textContent=Ha),yn=u(t),ut=p(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-s4g7lc"&&(ut.innerHTML=Ba),Sn=u(t),B=p(t,"TABLE",{border:!0,"data-svelte-h":!0}),o(B)!=="svelte-qntdvz"&&(B.innerHTML=Ea),bn=u(t),I=p(t,"DIV",{class:!0});var Un=r(I);it=p(Un,"DIV",{class:!0,"data-svelte-h":!0}),o(it)!=="svelte-1llzxwj"&&(it.textContent=_a),Vt=p(Un,"P",{"data-svelte-h":!0}),o(Vt)!=="svelte-1mgz7nm"&&(Vt.innerHTML=Aa),rt=p(Un,"DIV",{});var Xn=r(rt);Ct(kt.$$.fragment,Xn),T=p(Xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-j3mrzj"&&(T.textContent=Ma),Yt=p(Xn,"PRE",{class:!0});var Ka=r(Yt);Cn=_(Ka,!1),Ka.forEach(n),Xn.forEach(n),Un.forEach(n),Pn=u(t),dt=p(t,"H2",{"data-svelte-h":!0}),o(dt)!=="svelte-1wu0k1e"&&(dt.textContent=La),Gn=u(t),ft=p(t,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-1d16wql"&&(ft.innerHTML=Da),Hn=u(t),y=p(t,"DIV",{class:!0});var Jn=r(y);mt=p(Jn,"DIV",{class:!0,"data-svelte-h":!0}),o(mt)!=="svelte-1llzxwj"&&(mt.textContent=ja),qt=p(Jn,"P",{"data-svelte-h":!0}),o(qt)!=="svelte-15bi592"&&(qt.innerHTML=za),xt=p(Jn,"DIV",{});var Fn=r(xt);Ct(gt.$$.fragment,Fn),S=p(Fn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(S)!=="svelte-1vttp2l"&&(S.textContent=Ra),Ot=p(Fn,"PRE",{class:!0});var $a=r(Ot);Bn=_($a,!1),$a.forEach(n),Fn.forEach(n),Jn.forEach(n),En=u(t),ht=p(t,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-l3zswr"&&(ht.innerHTML=Va),_n=u(t),b=p(t,"DIV",{class:!0});var Zn=r(b);vt=p(Zn,"DIV",{class:!0,"data-svelte-h":!0}),o(vt)!=="svelte-1llzxwj"&&(vt.textContent=Ya),Nt=p(Zn,"P",{"data-svelte-h":!0}),o(Nt)!=="svelte-1i4eqcn"&&(Nt.innerHTML=qa),wt=p(Zn,"DIV",{});var Qn=r(wt);Ct(It.$$.fragment,Qn),C=p(Qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(C)!=="svelte-7083w9"&&(C.textContent=Oa),Ut=p(Qn,"PRE",{class:!0});var ts=r(Ut);An=_(ts,!1),ts.forEach(n),Qn.forEach(n),Zn.forEach(n),Mn=u(t),Tt=p(t,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-pc92fu"&&(Tt.innerHTML=Na),Ln=u(t),yt=p(t,"H2",{"data-svelte-h":!0}),o(yt)!=="svelte-p2uhy5"&&(yt.textContent=Ua),Dn=u(t),St=p(t,"P",{"data-svelte-h":!0}),o(St)!=="svelte-1ttzi4s"&&(St.textContent=Xa),this.h()},h(){l(P,"class","remark-container warning"),l(q,"class","remark-container__title"),l(f,"target","_blank"),l(f,"href","/editor#eNrFk2Fr2zAQhv+KdgxqgzFJxmAYRnHGKPmwMdbCWpZCNPucmCmSkM6sxvi/T6pnr07d4sJgH2x0unvvTvdIDXCtIWkgUzlCApng1rJPdao1wztCmVvm1s1Wbsl/mUFOeEnc0Be+xyDsPGSQKiPZ4PC7bSdqoY2gUCJHYyH53kCZQ7KMQPKjr3gvgQhUUVika0gW/frGrdvbCLTLN1J2yTadMWp8qD80742h+9JelEaw94xMheMjXVTl6WG+ql82zg6lyA3KoHNt6VLzDKPeunJ1YnK/YDckf93ouDPaXRhN69YVkZJ/lJuzI+Psh6pf7cL4wGUu0AQ6diPY2LWqw+dUe1dmQuar97rwAYwt9VmH0/bNus4LLiw+jvbeqfB+igPoCO4gWS0cwRqSN4uB3hUetXBDHlEcgUvtz02R5pV4hp6SayyU+XvpRp3+K4ypQVarit3fMUZurmz57vxJkB+UqI5yosBp4Am9z8pB87MJZCVEGM2U3aCdp5uGr2RakLslExP0z7Rjszph81E6SbrH/03m24HTmfVwDHPVz+c9ruViemDjoLczglZzMq2eyPSww5cwuW1/AxaEDKE="),l(f,"title","Open in our Online Editor"),sn.a=null,l(At,"class","language-js"),l(d,"class","remark-container tip"),l(G,"class","remark-container tip"),l(J,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFVF1r2zAU/SsXvTQGYxKXwfDLcMcYeWgZa2ArSyGafd2YypLQx9oQ/N8n2akXGSekTzMY60r33nN07sF7QqUk2Z4UokSSkYJRreF2l0sJ+GqQlxrcer/ma+PfQiE1eG+oMt/oE86i/sQoNFZxGA78btsXtaSNSSVYiUqT7Nee1CXJFjHhtPGIXQmJiagqjeYnyeZv6we3bh9jIl2/oLJvtuyDgPiAP5D3wYj9V1uPeX8XLzoptjUrFfJZf7Q2K9cEgicxbmu2WSSw2tYauoRCNFJw5AZKgZpfuR3KGDwjymU1i4AacHEMWkBt4KV2Z78RrMYSqHZfS1myieJj0ORQXFGmMTqAptOg0t0bNXSpYMSAOwZU2Ig/HpOXwIXpCHQ5O2Edc89bo+vgITwg1NwFCM4fp+gZZTF60+T6LD2feo7dCTmiwEcxeSVZOncG2ZHsej6YY4WNZG6wgUkCX+T6eVnlpWVnzCH4DVZC/fP0Efa7rXMvaYGhaL1MucJO8c7CTmDKYfHx05HAYeVnwWzDJwDGiWtzY427wwHmTmyixGsz45axKL6w7AH1ZXVTA/IS5pVBNaWg/wv0s0lHs/nCXUn+hP97Mj+21FxpPxwFDv30TALFFvNpwcKkDxckpZd0Sk90Omb4npk8tn8BSewlug=="),l(x,"title","Open in our Online Editor"),cn.a=null,l(Lt,"class","language-js"),l(m,"class","remark-container tip"),l(W,"class","remark-container__title"),l(h,"target","_blank"),l(h,"href","/editor#eNrFk2Fr2zAQhv+KJga1wYQkYzAMozhjFH/YGGthDUshmn1OTBVJSDKrMf7vO9WzG3lOm8FgH2wk6973TvecG8qUonFDM5kDjWnGmTHkU50oReDBgsgNwXWzERvrnkwDs3BtmbZf2A6CsDuxGmylBRkO3Ne2E7W0jWgheQ7a0Ph7Q8ucxouICnZwGR8lNKKyKAzYWxrP+/Ua1+1dRBX6ecrOLO02XuFD/qF4txmqL81VqTl5T6yuwL/SVVWOL/NV/jSzbF/yXIMIuqONvVYsg6jf3WCemcVXsB3MXzdq1m3abTgVuZYVYRoIIzsMerUNZ/cAKi2CXvek8rOtKmul+O2SXhzQ4YesncGeiZyDRgdsXGpWsg6fU/V5R7Lj3OERwo3tXYce9aXifQvGDfwZ7U6nwvveD+MR0QcaL+fIvabxm/nA/AYOiiMaj72HOzH3aZHkFX+GuRQrKKR+GlWv0n8FP0GcNWJ9nExisa9k8e5yewrkB8mrg5hIMA4c0fssEZrrTSAqfjQmL8jWYM7TTcOXIiksTslEB93P3bFZjth8FChJdvC/yXzbM3thHBxNMPtpJl7HFvPphvlBb88IWp7jtDzhdFzh3zC5a38BTgofkA=="),l(h,"title","Open in our Online Editor"),kn.a=null,l(jt,"class","language-js"),l(g,"class","remark-container tip"),xn.a=null,l(at,"class","language-js"),l(pt,"class","remark-container__title"),l(w,"target","_blank"),l(w,"href","/editor#eNrFVGFr2zAU/CvaY1AbTEgyBsMQhlNK8YeNsRbW0BSi2c+JqSIJSWY1xv99cl07kee0GQz2wUay3t07vTtcAZUSwgoSkSKEkDCqNflSRlISfDLIU03sulrztWmeRCE1eGOoMt/oFj2/PTEKTaE46Q+ar3ULqqEOIBMsRaUhvK8gTyGcBcDpvun4DIEARJZpNHcQTrv1yq7rhwCk5XOQLVncbhzhff9efLPp1ef6OleMLIhRBbpXui7y4WW+i196kuxylirkXnu0NjeSJhh0u1vbZ2Lsy9v05O8rOWk39cYfq1yJglCFhJKtLXq38SePiDLOvA73BuqnKEdAZLEgGWUaD2hX67IwRvAXtvhif2DaUZ4yVJbKjj3WS1H6r6E61QPYsXL/KABr07H2Ez5obiX/Wd2cjpV3zvXhCuAJwvnUpqaE8MO0T8wt7iWzxjrJccIS6cc4i9KCvZIYwZeYCXUIuqP0X0UnsraW1t7nXBNj50pmnz5vThl5KVix5yMNhoUD974Ka1ozG48X7Chkb8BWqM/DjZsveJQZm5KRCTa/htab+cCbK24h0Rb/tzM/dtRc6MYcRWz30544E5tNxwfmFn08o2h+DtP8BNOxwr/x5KH+DcnWNOA="),l(w,"title","Open in our Online Editor"),wn.a=null,l(Rt,"class","language-js"),l(v,"class","remark-container tip"),l(H,"class","remark-container warning"),l(B,"border","1"),l(it,"class","remark-container__title"),l(T,"target","_blank"),l(T,"href","/editor#eNrFVG1rnEAQ/iuTJVCl9tArhVYixbSl+KGlNIE2qYHb6Hgn0V1Z1zaH+N+7G3N6e/XSawnkgzLrzDzz8jxrS2hVEb8lCU+R+CQpaF3Dp3VYVYC3Ellag7LbmMVSP4lAKvFMUiG/0CVadu+RAmUjGAwO/bXrkzrSOSTjRYqiJv6PluQp8T2HMFrqincpxCE8y2qU34nvbuwLZXdXDqkUnpHZg0X9wWh8qD80rw9j97xhEgUE4JoDfWzy3VG+8l/1LFnlRSqQWb0rlmcVTdDZnM5VlZlUL2tx3Faze/gOrFw+q4Hhksr8Jx7ZC3t2g1hFmTUEwQm49hTQJQo+FR8EexK2K4+JHpwEMDjGxL0DRLplCtf5ElhTXqM4GsHeqG7/ivWOF03JJnYWy9NGSs7uC71HtfMSmVT4K8rSAoUaM918HeF3C+zgRGwKJ2d/4Ni9YW9pMpZDvYH3cdUvAvCM4AF0Ivi5GdwpKd8Sf+4qGa+J/9IdJHyOZVUorRlSNtQb1jdRFqZN8YCEOTvFjIvx5hmNPpaaQ4Gw5g3cXTSQar3gvX67+A/qH6Tws1a63o3FmqI4mPkLrA/L23hM6jkLM8Xc1Ab1v6rnZr7DzQdNdrjEp2bm24rqi6rIEaCq7+fE2JjnTi/MDHp1QND8EKT5HqTtDv+Fk6vuNwq+awA="),l(T,"title","Open in our Online Editor"),Cn.a=null,l(Yt,"class","language-js"),l(I,"class","remark-container tip"),l(mt,"class","remark-container__title"),l(S,"target","_blank"),l(S,"href","/editor#eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwK8UdY8uHjbEWtrIUKuxzYypLQjrThuD/PrlOnCo4WwqFfbCQfHrvTu8jrYFrDdkaClUiZFAIbi37usq1ZvhIKEvL3Hy9kAvqv8IgJ7wkbug7v8MgHCJkkFoj2Rjo/3aDqIMugkqJEo2F7Pca6hKyJALJm77ikwQiUFVlkX5BNtvOr928u4lAu3yeckg2HxZe42P9sfl+setetZLQsDOW+Af63Nb7R/mhHmxcLGtRGpTBEFrQpeYFRtvVlasSkxuC2y81oyUafHMbxveIel4FCftwxnS8KRpOqtQD4wbZSrXnO2H6b+Gc8YZVtcR4Jzs9IPN7vmiJlNyk+eZGl2DJZSnQBDqupTOkQUlbefiM5ILG8OjWWI+93bg6Yo/gEbJ05niuIDudjSyvsNHCme4x9TDm9n5e5WUr/sJSyQuslNldQa/R18KaD3DY041zhLlkyXuH6oC5H5VoGzlRYH/jPgflKPTeBLIVIoyOlF2jPU43TVPJvHLkphzsH+3AJt1j86mHnd/h/ybzc8npxPZwDHPVDzPxHEtm04b5m94dsSk9JlN6INPzDl/C5Kb7AxRjDuU="),l(S,"title","Open in our Online Editor"),Bn.a=null,l(Ot,"class","language-js"),l(y,"class","remark-container tip"),l(vt,"class","remark-container__title"),l(C,"target","_blank"),l(C,"href","/editor#eNrFk2Fr2zAQhv+Kdl9qM2Nil8EwLcUtpc2HjbEG2tIUKuxzbSZLQpJJQ/B/n1wnThWcNoXBPlhIPr13p/eRVkClhGQFmcgREsgY1Zr8WKZSEnwxyHNN7Hw153PTfZlCavDGUGV+0Wf0/D5iFJpGcTIEur9tL2qhDaAQLEelIXlYQZVDEgXAad1VfJVAAKIoNJo7SCab+b2dt48BSJvPUfbJpv3CaXyoPzTfLbbdi4YbVOSURO6Brppq9yi/xUKHWVmxXCH3+tDc3EiaYbBZzWyV0NjBe7quiClR4ZcnP9SlWEwLLyInp0SG66L+qEosCFVIlqI52wrjj4VTQmtSVBzDrex4j8zt+bwxRvB1mp92tAlKynOGypNhxa0hNXKzkftvSM7NEB7cGuqRr2tXB+wBvEASTyzPJSTHk4HlDGvJrOkOUwdjqv9MizRv2DssBT/HQqjtFXQa/VdY0x4Oeb1xljDlJPpuUe0x90KwpuYjBXY37nIQlkLnjccbxvzgQNk96sN04zQFTwtLbszB7tH2bOIdNpcd7PQZ/zeZ25KaI93BUcRW38/EcSyajBvmbvp2wKb4kEzxnkxvO/wMk8f2L2+iDzk="),l(C,"title","Open in our Online Editor"),An.a=null,l(Ut,"class","language-js"),l(b,"class","remark-container tip")},m(t,a){s(t,k,a),s(t,Xt,a),s(t,A,a),s(t,Jt,a),s(t,M,a),s(t,Ft,a),s(t,L,a),s(t,Zt,a),s(t,D,a),s(t,Qt,a),s(t,j,a),s(t,Wt,a),s(t,z,a),s(t,Kt,a),s(t,R,a),s(t,$t,a),s(t,V,a),s(t,tn,a),s(t,Y,a),s(t,nn,a),s(t,P,a),s(t,an,a),s(t,d,a),i(d,q),i(d,_t),i(d,O),Pt(N,O,null),i(O,f),i(O,At),sn.m(as,At),s(t,en,a),s(t,G,a),s(t,pn,a),s(t,U,a),s(t,on,a),s(t,X,a),s(t,ln,a),s(t,m,a),i(m,J),i(m,Mt),i(m,F),Pt(Z,F,null),i(F,x),i(F,Lt),cn.m(ss,Lt),s(t,un,a),s(t,Q,a),s(t,rn,a),s(t,g,a),i(g,W),i(g,Dt),i(g,K),Pt($,K,null),i(K,h),i(K,jt),kn.m(es,jt),s(t,dn,a),s(t,tt,a),s(t,fn,a),s(t,nt,a),s(t,mn,a),s(t,at,a),xn.m(ps,at),s(t,gn,a),s(t,st,a),s(t,hn,a),s(t,et,a),s(t,vn,a),s(t,v,a),i(v,pt),i(v,zt),i(v,ot),Pt(lt,ot,null),i(ot,w),i(ot,Rt),wn.m(os,Rt),s(t,In,a),s(t,H,a),s(t,Tn,a),s(t,ct,a),s(t,yn,a),s(t,ut,a),s(t,Sn,a),s(t,B,a),s(t,bn,a),s(t,I,a),i(I,it),i(I,Vt),i(I,rt),Pt(kt,rt,null),i(rt,T),i(rt,Yt),Cn.m(ls,Yt),s(t,Pn,a),s(t,dt,a),s(t,Gn,a),s(t,ft,a),s(t,Hn,a),s(t,y,a),i(y,mt),i(y,qt),i(y,xt),Pt(gt,xt,null),i(xt,S),i(xt,Ot),Bn.m(cs,Ot),s(t,En,a),s(t,ht,a),s(t,_n,a),s(t,b,a),i(b,vt),i(b,Nt),i(b,wt),Pt(It,wt,null),i(wt,C),i(wt,Ut),An.m(us,Ut),s(t,Mn,a),s(t,Tt,a),s(t,Ln,a),s(t,yt,a),s(t,Dn,a),s(t,St,a),jn=!0},p:rs,i(t){jn||(Gt(N.$$.fragment,t),Gt(Z.$$.fragment,t),Gt($.$$.fragment,t),Gt(lt.$$.fragment,t),Gt(kt.$$.fragment,t),Gt(gt.$$.fragment,t),Gt(It.$$.fragment,t),jn=!0)},o(t){Ht(N.$$.fragment,t),Ht(Z.$$.fragment,t),Ht($.$$.fragment,t),Ht(lt.$$.fragment,t),Ht(kt.$$.fragment,t),Ht(gt.$$.fragment,t),Ht(It.$$.fragment,t),jn=!1},d(t){t&&(n(k),n(Xt),n(A),n(Jt),n(M),n(Ft),n(L),n(Zt),n(D),n(Qt),n(j),n(Wt),n(z),n(Kt),n(R),n($t),n(V),n(tn),n(Y),n(nn),n(P),n(an),n(d),n(en),n(G),n(pn),n(U),n(on),n(X),n(ln),n(m),n(un),n(Q),n(rn),n(g),n(dn),n(tt),n(fn),n(nt),n(mn),n(at),n(gn),n(st),n(hn),n(et),n(vn),n(v),n(In),n(H),n(Tn),n(ct),n(yn),n(ut),n(Sn),n(B),n(bn),n(I),n(Pn),n(dt),n(Gn),n(ft),n(Hn),n(y),n(En),n(ht),n(_n),n(b),n(Mn),n(Tt),n(Ln),n(yt),n(Dn),n(St)),Bt(N),Bt(Z),Bt($),Bt(lt),Bt(kt),Bt(gt),Bt(It)}}}class hs extends ks{constructor(k){super(),ds(this,k,null,fs,is,{})}}export{hs as component};
