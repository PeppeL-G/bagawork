import{s as ze,n as Re}from"../chunks/scheduler.DFPFbGJz.js";import{S as qe,i as Oe,e as a,s as i,c as S,H as k,a as e,g as c,b as r,d as u,f as j,n as d,h as t,o,j as p,p as l,m as M,t as L,k as G,l as N}from"../chunks/index.CzDE4dZi.js";import{V}from"../chunks/ViewApp.C2MU7-ZI.js";function Be(Pe){let g,ga="<code>EnterNumber</code>",pt,D,ma="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",ot,$,fa="Introduction",lt,X,ha="The <code>EnterNumber</code> component is a view in which the user can enter a number. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",ct,m,F,xa="Example",Vn,va="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",Q,J,f,wa="Open in Online Editor",zn,ut,ye=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,it,Y,Pa="<code>number()</code> - Setting an initial number",rt,K,ya="Use the configuration method <code>number()</code> to give the <code>EnterNumber</code> a number it will contain initially.",kt,z,U,ba="Example",Z,W,h,Ea="Open in Online Editor",Rn,dt,be=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,gt,nn,_a="<code>placeholder()</code> - Setting a placeholder text",mt,tn,Ca="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterNumber</code> component when no number is shown. Try typing some digits in the example below, and see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.",ft,R,an,Aa="Example",en,sn,x,Ta="Open in Online Editor",qn,ht,Ee=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,xt,pn,Ha="<code>decimals()</code> - Setting maximum number of decimals",vt,on,Ia="Use the configuration method <code>decimals()</code> to indicate how many decimals the entered number may contain. Pass it:",wt,ln,Sa="<li><code>0</code> to allow no decimals, e.g. allow numbers like <code>123</code> and <code>55</code> (i.e. only integers)</li> <li><code>1</code> to allow at most 1 decimal, e.g. <code>123</code>, <code>123.4</code> and <code>0.6</code></li> <li><code>2</code> to allow at most 2 decimals, e.g. <code>123</code>, <code>123.4</code>, <code>123.45</code> and <code>1.23</code></li> <li>Etc.</li>",Pt,v,cn,ja="Example",On,Ma="Example where the user can only enter integers.",un,rn,w,La="Open in Online Editor",Bn,yt,_e=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,bt,P,kn,Ga="Example",Dn,Na="Example where the user can enter at most 2 decimals.",dn,gn,y,Va="Open in Online Editor",$n,Et,Ce=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_t,mn,za="<code>page()</code>, <code>pageIfEqual()</code>, <code>pageIfLower()</code>, <code>pageIfHigher()</code> &amp; <code>pageIfBetween()</code> - Going to next page",Ct,fn,Ra="There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:",At,hn,qa="<li><code>pageIfEqual(number, page)</code></li> <li><code>pageIfLower(number, page)</code></li> <li><code>pageIfHigher(number, page)</code></li> <li><code>pageIfBetween(lowNumber, highNumber, page)</code></li>",Tt,xn,Oa="These methods can be called multiple times. In addition to those, you can also use <code>page(page)</code> to specify the page the user should come to if the entered number isn&#39;t true for any of the previously mentioned configuration methods.",Ht,vn,Ba="Example:",It,wn,St,Ae=`<code class="language-js">EnterNumber
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TwoPage<span class="token punctuation">)</span> <span class="token comment">// Go to TwoPage if the user enters 2.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> SixPage<span class="token punctuation">)</span> <span class="token comment">// Go to SixPage if the user enters 6.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> NegativePage<span class="token punctuation">)</span> <span class="token comment">// Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> HighPage<span class="token punctuation">)</span> <span class="token comment">// Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> MiddlePage<span class="token punctuation">)</span> <span class="token comment">// Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.</span>
	<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DefaultPage<span class="token punctuation">)</span> <span class="token comment">// Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.</span></code>`,jt,q,Pn,Da="Example",yn,bn,b,$a="Open in Online Editor",Xn,Mt,Te=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber
					<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> InvalidAgePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> KidPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> KidPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AdultPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> InvalidAgePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Lt,En,Xa="<code>store()</code> - Storing the entered number",Gt,_n,Fa="Use the configuration method <code>store()</code> to store the number the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Nt,Cn,Qa="<li>The object in which the entered number should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered number should be stored</li>",Vt,O,An,Ja="Example",E,Tn,_,Ya="Open in Online Editor",Fn,zt,He=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Qn,Rt,Ie=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jn,qt,Se=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ot,Hn,Ka="<code>defaultNumber()</code> - Specifying a default number",Bt,In,Ua="Use the configuration method <code>defaultNumber()</code> to specify which number that should be used if the user doesn&#39;t enter a number at all (i.e. if the user leaves the input field empty). If you don&#39;t call this configuration method, <code>0</code> will be used as the default number automatically.",Dt,C,Sn,Za="Example",Yn,Wa="In the previous example, click on the <code>⇨</code> button without entering a number, and see that <code>0</code> is used by default. Do the same thing in this example, and see that <code>10</code> is used by default.",A,jn,T,ne="Open in Online Editor",Kn,$t,je=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Un,Xt,Me=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zn,Ft,Le=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Qt,Mn,te="<code>handler()</code> - Handling the entered number",Jt,Ln,ae="Use the configuration method <code>handler()</code> to tell the <code>EnterNumber</code> component which method to call to handle the entered number. The method will be passed the entered number as an argument.",Yt,B,Gn,ee="Example",H,Nn,I,se="Open in Online Editor",Wn,Kt,Ge=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	doubledAge <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,Ut,Ne=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredAge</span><span class="token punctuation">(</span><span class="token parameter">enteredAge</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>age <span class="token operator">=</span> enteredAge
		a<span class="token punctuation">.</span>doubledAge <span class="token operator">=</span> enteredAge <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tt,Zt,Ve=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old! Your doubled age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>doubledAge<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wt;return J=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),W=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.number(123)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),sn=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),rn=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(0)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),gn=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(2)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),bn=new V({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:38,offsetY:-32}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber
					.size(1)
					.pageIfLower(0, InvalidAgePage)
					.pageIfEqual(0, KidPage)
					.pageIfBetween(0, 18, KidPage)
					.page(AdultPage)
					.pageIfHigher(150, InvalidAgePage),
				Button.text(\`⇨\`),
			),
		)
	}
}`,x:212,y:454},{id:2,folderId:1,code:`class InvalidAgePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`That age is invalid.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:576,y:193},{id:3,folderId:1,code:`class KidPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Ah, then you are a still a kid. Good for you! :)\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:751,y:459},{id:4,folderId:1,code:`class AdultPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, respect to you, big guy!\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:497,y:687}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),Tn=new V({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).store(a, \`age\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:232,y:259},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:579,y:250}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),jn=new V({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).defaultNumber(10).store(a, \`age\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:232,y:259},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:579,y:250}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),Nn=new V({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	doubledAge = -2
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).handler(p.handleEnteredAge).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
	
	handleEnteredAge(enteredAge){
		a.age = enteredAge
		a.doubledAge = enteredAge * 2
	}
	
}`,x:232,y:259},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old! Your doubled age is \${a.doubledAge}.\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:579,y:250}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){g=a("h1"),g.innerHTML=ga,pt=i(),D=a("p"),D.innerHTML=ma,ot=i(),$=a("h2"),$.textContent=fa,lt=i(),X=a("p"),X.innerHTML=ha,ct=i(),m=a("div"),F=a("div"),F.textContent=xa,Vn=a("p"),Vn.innerHTML=va,Q=a("div"),S(J.$$.fragment),f=a("a"),f.textContent=wa,zn=a("pre"),ut=new k(!1),it=i(),Y=a("h2"),Y.innerHTML=Pa,rt=i(),K=a("p"),K.innerHTML=ya,kt=i(),z=a("div"),U=a("div"),U.textContent=ba,Z=a("div"),S(W.$$.fragment),h=a("a"),h.textContent=Ea,Rn=a("pre"),dt=new k(!1),gt=i(),nn=a("h2"),nn.innerHTML=_a,mt=i(),tn=a("p"),tn.innerHTML=Ca,ft=i(),R=a("div"),an=a("div"),an.textContent=Aa,en=a("div"),S(sn.$$.fragment),x=a("a"),x.textContent=Ta,qn=a("pre"),ht=new k(!1),xt=i(),pn=a("h2"),pn.innerHTML=Ha,vt=i(),on=a("p"),on.innerHTML=Ia,wt=i(),ln=a("ul"),ln.innerHTML=Sa,Pt=i(),v=a("div"),cn=a("div"),cn.textContent=ja,On=a("p"),On.textContent=Ma,un=a("div"),S(rn.$$.fragment),w=a("a"),w.textContent=La,Bn=a("pre"),yt=new k(!1),bt=i(),P=a("div"),kn=a("div"),kn.textContent=Ga,Dn=a("p"),Dn.textContent=Na,dn=a("div"),S(gn.$$.fragment),y=a("a"),y.textContent=Va,$n=a("pre"),Et=new k(!1),_t=i(),mn=a("h2"),mn.innerHTML=za,Ct=i(),fn=a("p"),fn.textContent=Ra,At=i(),hn=a("ul"),hn.innerHTML=qa,Tt=i(),xn=a("p"),xn.innerHTML=Oa,Ht=i(),vn=a("p"),vn.textContent=Ba,It=i(),wn=a("pre"),St=new k(!1),jt=i(),q=a("div"),Pn=a("div"),Pn.textContent=Da,yn=a("div"),S(bn.$$.fragment),b=a("a"),b.textContent=$a,Xn=a("pre"),Mt=new k(!1),Lt=i(),En=a("h2"),En.innerHTML=Xa,Gt=i(),_n=a("p"),_n.innerHTML=Fa,Nt=i(),Cn=a("ol"),Cn.innerHTML=Qa,Vt=i(),O=a("div"),An=a("div"),An.textContent=Ja,E=a("div"),S(Tn.$$.fragment),_=a("a"),_.textContent=Ya,Fn=a("pre"),zt=new k(!1),Qn=a("pre"),Rt=new k(!1),Jn=a("pre"),qt=new k(!1),Ot=i(),Hn=a("h2"),Hn.innerHTML=Ka,Bt=i(),In=a("p"),In.innerHTML=Ua,Dt=i(),C=a("div"),Sn=a("div"),Sn.textContent=Za,Yn=a("p"),Yn.innerHTML=Wa,A=a("div"),S(jn.$$.fragment),T=a("a"),T.textContent=ne,Kn=a("pre"),$t=new k(!1),Un=a("pre"),Xt=new k(!1),Zn=a("pre"),Ft=new k(!1),Qt=i(),Mn=a("h2"),Mn.innerHTML=te,Jt=i(),Ln=a("p"),Ln.innerHTML=ae,Yt=i(),B=a("div"),Gn=a("div"),Gn.textContent=ee,H=a("div"),S(Nn.$$.fragment),I=a("a"),I.textContent=se,Wn=a("pre"),Kt=new k(!1),nt=a("pre"),Ut=new k(!1),tt=a("pre"),Zt=new k(!1),this.h()},l(n){g=e(n,"H1",{"data-svelte-h":!0}),c(g)!=="svelte-1dpshw6"&&(g.innerHTML=ga),pt=r(n),D=e(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1r4vkdp"&&(D.innerHTML=ma),ot=r(n),$=e(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-1ukekoe"&&($.textContent=fa),lt=r(n),X=e(n,"P",{"data-svelte-h":!0}),c(X)!=="svelte-zgh4nz"&&(X.innerHTML=ha),ct=r(n),m=e(n,"DIV",{class:!0});var s=u(m);F=e(s,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-1llzxwj"&&(F.textContent=xa),Vn=e(s,"P",{"data-svelte-h":!0}),c(Vn)!=="svelte-iqlwcv"&&(Vn.innerHTML=va),Q=e(s,"DIV",{});var na=u(Q);j(J.$$.fragment,na),f=e(na,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(f)!=="svelte-hjypay"&&(f.textContent=wa),zn=e(na,"PRE",{class:!0});var pe=u(zn);ut=d(pe,!1),pe.forEach(t),na.forEach(t),s.forEach(t),it=r(n),Y=e(n,"H2",{"data-svelte-h":!0}),c(Y)!=="svelte-1rh7zam"&&(Y.innerHTML=Pa),rt=r(n),K=e(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-11kqkcz"&&(K.innerHTML=ya),kt=r(n),z=e(n,"DIV",{class:!0});var ua=u(z);U=e(ua,"DIV",{class:!0,"data-svelte-h":!0}),c(U)!=="svelte-1llzxwj"&&(U.textContent=ba),Z=e(ua,"DIV",{});var ta=u(Z);j(W.$$.fragment,ta),h=e(ta,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(h)!=="svelte-100y6a4"&&(h.textContent=Ea),Rn=e(ta,"PRE",{class:!0});var oe=u(Rn);dt=d(oe,!1),oe.forEach(t),ta.forEach(t),ua.forEach(t),gt=r(n),nn=e(n,"H2",{"data-svelte-h":!0}),c(nn)!=="svelte-k11loz"&&(nn.innerHTML=_a),mt=r(n),tn=e(n,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-18j035s"&&(tn.innerHTML=Ca),ft=r(n),R=e(n,"DIV",{class:!0});var ia=u(R);an=e(ia,"DIV",{class:!0,"data-svelte-h":!0}),c(an)!=="svelte-1llzxwj"&&(an.textContent=Aa),en=e(ia,"DIV",{});var aa=u(en);j(sn.$$.fragment,aa),x=e(aa,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-yg0n4g"&&(x.textContent=Ta),qn=e(aa,"PRE",{class:!0});var le=u(qn);ht=d(le,!1),le.forEach(t),aa.forEach(t),ia.forEach(t),xt=r(n),pn=e(n,"H2",{"data-svelte-h":!0}),c(pn)!=="svelte-sli74j"&&(pn.innerHTML=Ha),vt=r(n),on=e(n,"P",{"data-svelte-h":!0}),c(on)!=="svelte-1d3pone"&&(on.innerHTML=Ia),wt=r(n),ln=e(n,"UL",{"data-svelte-h":!0}),c(ln)!=="svelte-1ptcnjk"&&(ln.innerHTML=Sa),Pt=r(n),v=e(n,"DIV",{class:!0});var ea=u(v);cn=e(ea,"DIV",{class:!0,"data-svelte-h":!0}),c(cn)!=="svelte-1llzxwj"&&(cn.textContent=ja),On=e(ea,"P",{"data-svelte-h":!0}),c(On)!=="svelte-15y36jm"&&(On.textContent=Ma),un=e(ea,"DIV",{});var sa=u(un);j(rn.$$.fragment,sa),w=e(sa,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-ygoo5x"&&(w.textContent=La),Bn=e(sa,"PRE",{class:!0});var ce=u(Bn);yt=d(ce,!1),ce.forEach(t),sa.forEach(t),ea.forEach(t),bt=r(n),P=e(n,"DIV",{class:!0});var pa=u(P);kn=e(pa,"DIV",{class:!0,"data-svelte-h":!0}),c(kn)!=="svelte-1llzxwj"&&(kn.textContent=Ga),Dn=e(pa,"P",{"data-svelte-h":!0}),c(Dn)!=="svelte-zv68fv"&&(Dn.textContent=Na),dn=e(pa,"DIV",{});var oa=u(dn);j(gn.$$.fragment,oa),y=e(oa,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-h012wk"&&(y.textContent=Va),$n=e(oa,"PRE",{class:!0});var ue=u($n);Et=d(ue,!1),ue.forEach(t),oa.forEach(t),pa.forEach(t),_t=r(n),mn=e(n,"H2",{"data-svelte-h":!0}),c(mn)!=="svelte-19ebt5j"&&(mn.innerHTML=za),Ct=r(n),fn=e(n,"P",{"data-svelte-h":!0}),c(fn)!=="svelte-q2ln6m"&&(fn.textContent=Ra),At=r(n),hn=e(n,"UL",{"data-svelte-h":!0}),c(hn)!=="svelte-1hwnfm7"&&(hn.innerHTML=qa),Tt=r(n),xn=e(n,"P",{"data-svelte-h":!0}),c(xn)!=="svelte-psw8xk"&&(xn.innerHTML=Oa),Ht=r(n),vn=e(n,"P",{"data-svelte-h":!0}),c(vn)!=="svelte-11lpom8"&&(vn.textContent=Ba),It=r(n),wn=e(n,"PRE",{class:!0});var ie=u(wn);St=d(ie,!1),ie.forEach(t),jt=r(n),q=e(n,"DIV",{class:!0});var ra=u(q);Pn=e(ra,"DIV",{class:!0,"data-svelte-h":!0}),c(Pn)!=="svelte-1llzxwj"&&(Pn.textContent=Da),yn=e(ra,"DIV",{});var la=u(yn);j(bn.$$.fragment,la),b=e(la,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(b)!=="svelte-29rttq"&&(b.textContent=$a),Xn=e(la,"PRE",{class:!0});var re=u(Xn);Mt=d(re,!1),re.forEach(t),la.forEach(t),ra.forEach(t),Lt=r(n),En=e(n,"H2",{"data-svelte-h":!0}),c(En)!=="svelte-xzw4ex"&&(En.innerHTML=Xa),Gt=r(n),_n=e(n,"P",{"data-svelte-h":!0}),c(_n)!=="svelte-wcl02x"&&(_n.innerHTML=Fa),Nt=r(n),Cn=e(n,"OL",{"data-svelte-h":!0}),c(Cn)!=="svelte-17rhbe3"&&(Cn.innerHTML=Qa),Vt=r(n),O=e(n,"DIV",{class:!0});var ka=u(O);An=e(ka,"DIV",{class:!0,"data-svelte-h":!0}),c(An)!=="svelte-1llzxwj"&&(An.textContent=Ja),E=e(ka,"DIV",{});var at=u(E);j(Tn.$$.fragment,at),_=e(at,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1perubx"&&(_.textContent=Ya),Fn=e(at,"PRE",{class:!0});var ke=u(Fn);zt=d(ke,!1),ke.forEach(t),Qn=e(at,"PRE",{class:!0});var de=u(Qn);Rt=d(de,!1),de.forEach(t),Jn=e(at,"PRE",{class:!0});var ge=u(Jn);qt=d(ge,!1),ge.forEach(t),at.forEach(t),ka.forEach(t),Ot=r(n),Hn=e(n,"H2",{"data-svelte-h":!0}),c(Hn)!=="svelte-f924tf"&&(Hn.innerHTML=Ka),Bt=r(n),In=e(n,"P",{"data-svelte-h":!0}),c(In)!=="svelte-1iqciy4"&&(In.innerHTML=Ua),Dt=r(n),C=e(n,"DIV",{class:!0});var ca=u(C);Sn=e(ca,"DIV",{class:!0,"data-svelte-h":!0}),c(Sn)!=="svelte-1llzxwj"&&(Sn.textContent=Za),Yn=e(ca,"P",{"data-svelte-h":!0}),c(Yn)!=="svelte-grsfym"&&(Yn.innerHTML=Wa),A=e(ca,"DIV",{});var et=u(A);j(jn.$$.fragment,et),T=e(et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-1qivj9b"&&(T.textContent=ne),Kn=e(et,"PRE",{class:!0});var me=u(Kn);$t=d(me,!1),me.forEach(t),Un=e(et,"PRE",{class:!0});var fe=u(Un);Xt=d(fe,!1),fe.forEach(t),Zn=e(et,"PRE",{class:!0});var he=u(Zn);Ft=d(he,!1),he.forEach(t),et.forEach(t),ca.forEach(t),Qt=r(n),Mn=e(n,"H2",{"data-svelte-h":!0}),c(Mn)!=="svelte-358j0t"&&(Mn.innerHTML=te),Jt=r(n),Ln=e(n,"P",{"data-svelte-h":!0}),c(Ln)!=="svelte-1tg9i0e"&&(Ln.innerHTML=ae),Yt=r(n),B=e(n,"DIV",{class:!0});var da=u(B);Gn=e(da,"DIV",{class:!0,"data-svelte-h":!0}),c(Gn)!=="svelte-1llzxwj"&&(Gn.textContent=ee),H=e(da,"DIV",{});var st=u(H);j(Nn.$$.fragment,st),I=e(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(I)!=="svelte-fuarkt"&&(I.textContent=se),Wn=e(st,"PRE",{class:!0});var xe=u(Wn);Kt=d(xe,!1),xe.forEach(t),nt=e(st,"PRE",{class:!0});var ve=u(nt);Ut=d(ve,!1),ve.forEach(t),tt=e(st,"PRE",{class:!0});var we=u(tt);Zt=d(we,!1),we.forEach(t),st.forEach(t),da.forEach(t),this.h()},h(){o(F,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNqVkE+LwjAQxb9KeSeFsLjKHja3HkQ8KIIedtkKxma6iG0akikoJd99U8Xudm9eJm/+vfmRFspayBZ5rQkSeam8T1bX1NqELkxG+yTqNjMZ544U05aV4436ptH4Vs3YETfOJH2jq4bMBASBoi41OQ/51eKkIV8FjKq6S7dxCNRF4Yk/ICcP/Rl12AvY6DXYvJst78kAuL/dQ3fJH+pFc/rPOzdMbt1UR3I9scAFcjqbClzj+/b+wNhRZctoM8AZEKT+vCxS3ZT8BMIujr5wDKPDYfz7bfvwA6H9jis="),o(f,"title","Open in our Online Editor"),ut.a=null,o(zn,"class","language-js"),o(m,"class","remark-container tip"),o(U,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNqVjj9rwzAQxb+KeZMDIjQOHarNQykZGgLN0FIHolrnEmrLQjpDgtF3r+wQt+7W5e7dv3e/HspayB5lqwkSZa28T54vubUJnZmM9knUfWEKLh0pphdWjnfqk9LF2C3YEXfOJNNg6IbCBASBqq01OQ/53uOkIVcCRjXDp3EdAm1VeeJXyLubfos6HARs9JpdXs0212IGPP2eoIfiF/VTd/rL+2iY3LZrPsgtzZjSVbZeTPQCZ8hsnQlcYr5/uCHtqbF1tJyhzWhy/7Wpct3V/A+cfVxdcgzp8fgDEQ7hGxbtkck="),o(h,"title","Open in our Online Editor"),dt.a=null,o(Rn,"class","language-js"),o(z,"class","remark-container tip"),o(an,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNqVj71qwzAUhV/FnMkBEdqUDtXmoYQMDYVmaKkDVq3rNsSWhXQNCUbvXtkhJu7WRff3nPuph7IWskfZaoJEWSvvk5dzZm1CJyajfRLzPjc5l44U0xsrx6/qm9LF2M3ZEXfOJNNg6IbcBASBqq01OQ/52eOgIe8FjGqGS+M6BNqq8sTvkHfX/CPmYS9go9dMeTHbXIoZ8HR7gh6KG+p1d/jL+2yY3LZrvsgtba1K+hnt02IcJFFfLKavCJwgVw8rgXOMj09Xvh01Uctzzhla5o+bKtNdzf9g28XVJccnLW4gwj78AjLJlzg="),o(x,"title","Open in our Online Editor"),ht.a=null,o(qn,"class","language-js"),o(R,"class","remark-container tip"),o(cn,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqVj01LxDAQhv9KmFMLoawrHsytB5E9KIJ7UOxCYzLVYpqGZAq7lPx30y5brTcvmXe+3nkygnQOxAiq1wgClJEhsIdT6RzDI6HVgSU9VrYi5VESPpP09CQ/MMvnakUeafCWLY2pGisbIXJoeqPRBxBvI7QaxBUHK7vp0jwOHPqmCUgvIDYX/Zp0PHBwyWu1eTbbnZMV8HJ7gZ6SX9T3Q/uX984S+sehe0dfOCMVfs72WT03WNqv80KjajtpQrbJl29xOILYXm85nFK8ub2w7rFLPrRmXmGW4WvXlHow9A/OfRotKD1ZXf9AxEP8BkQymyk="),o(w,"title","Open in our Online Editor"),yt.a=null,o(Bn,"class","language-js"),o(v,"class","remark-container tip"),o(kn,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqVj01LxDAQhv9KmFMLoWjFg7n1IMseXAT3oNiFxmaqZdM0JFPYpeS/m3bZar15ybzz9c6TEaS1IEaoe4UgoNbSe/Z0LqxleCI0yrOox9KUVDuUhC8kHT3LT0zSuVqSQxqcYUtjqobSBAgcml4rdB7E+witAnHLwchuujSPA4e+aTzSK4ibq36LOhw42Oi12ryYbS/JCni5vUBPyS/qzdD+5X00hG43dB/oMqtljV+zfVLNDRb3qzRTWLed1D7J0+VbHE4g8rucwznG+4cr6x676ENr5hVm4Y/bplCDpn9w7uNoRvFJquoHIhzCN0VYmys="),o(y,"title","Open in our Online Editor"),Et.a=null,o($n,"class","language-js"),o(P,"class","remark-container tip"),St.a=null,o(wn,"class","language-js"),o(Pn,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNqtlM2O2jAQx1/F61MiuajhY4FcKrZasagfW3U5tGpWwiQTsAh2ajtlU5RzX2Wfq09SJyGBtAtSpZzsGY9n/j/PyHtM4xi7e+yLALCL/YgqhT6kkzhG8KSBBwqZ/d7jnvYlUA0Pmkr9ia7AsguvpyXoRHJUH+TezOMZzggORRSAVNj9tscswK5DMKfbvFIRjgkWYahAf8Fub1QZX7H7qtfNHgmOTbrG5TLfrDQamuvyte7cOBE+Tdjfkj+Lner4axYFErhVHnl6bhJ0FPsJlmN3tDGsxZ3YoS3lKUqBSoWMCEQloFQkbxY2qS6+FVGy5S9k9PQt1yA/JtslyKPTq8s0fDn0LHwvdiCt1wTN+A8asWCyghzopdDb7wmN8tB3LDgXcwN6B0aSiXJGFyKtSZBE+lyWO7ZaG1XO4F9d5Bh+k2gt+OHpfv96PnmiamfXQ0LwE3a7TpfgFLv9QT8jZbO7l5rdrN1Ox0u58zXVKM/JFGJllc6J/gbaVKAl9TcLu3y5egLPQA6G1wWkM+5VkL1LkIcetUk3WROk18DzyS0mmCKlWRSZdWNA0VSIAIVC5udXyLVbIh8OnEN7xxV5/xJ5PYNtst8bdgkqBl8jLXJCgpZshVZJetUSZ388LDivR8Pq95rDNo6M4sYv1oRVm1lYEP8H7QnX4igie8z+AF+SCn0="),o(b,"title","Open in our Online Editor"),Mt.a=null,o(Xn,"class","language-js"),o(q,"class","remark-container tip"),o(An,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqtktFKhEAUhl9lOnShYNJuRCREbBHVRRHVRZGBk54tSWdk5shmMte9Ss/VkzTmqmtEEHQhnjPj+ef/P6cGXhQQ1BDLBCGAOONas7NqVhQMXwhFopmt61CE1Dz8Edke25h0fayQE14RV3Rh9xy3/ZIUUqkE6zeaVdMOGTAezGWWoNIQ3NWQJhBMPBA8bxx8jYAHcj7XSDcQbHb1ra3NvQeF1RtNtmKnbTMK0p/fh2maenB+XKbfPV/KhfbjpzRLFAqn3Qrp2gr4On1FZ+L6ZBsnOpELlnNRsQq50syaYFwhq2S5H7leN3goszIXPyiGdCQI1XmZP6DqpTVJhQ73WGSNRq7fhHWOFSKl4rExPyiHdFASSbG08/H2vnKs2xbuEryxRF8gmG5NPajse3vXeC2/6W/8Vg/+H4RLdJhlsiHFFk/yi9p6zX2rawaYaytpRkEPePzMSA4/t8PUL3SD39Jv7+wu0/f36BrzIrMhRvdphGCmn0/ns6TM6A8AVqJGgwlzbz4BjFE3MA=="),o(_,"title","Open in our Online Editor"),zt.a=null,o(Fn,"class","language-js"),Rt.a=null,o(Qn,"class","language-js"),qt.a=null,o(Jn,"class","language-js"),o(O,"class","remark-container tip"),o(Sn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtUttK5EAQ/ZXeYh8SiMEZETEgy4ws6oMi6oNihPQmFQ0m3aG7whhDP/srftd+yXbMJJkMIiz4ELouqVPnnO4GeFlC0EAsE4QA4pxrzc7rRVkyfCEUiWY2bkIRUvvxR2RHbGfW57FCTnhNXNGl7Tlu9ycppEoJNjTaqumGDBgPUpknqDQE9w1kCQQzDwQvWgYfI+CBTFONdAvBbh/f2dg8eFBavMlkB3bWJRMhw/5BTJs0I/OTKtvmfCVX2o+fsjxRKJyuFdKNBfB19orOzPXJJk50Kles4KJmNXKlmSXBuEJWy+pX5Hr94LHMq0J8ghjSb0GoLqriD6oBOsGUVzl1VWe26/qapEKHeyyy1CPXb+U7JwqRMvHYyhl3hbSsiKRYE/z79r5BxO0Cd30Vxnr8AsF8b+5Bbc/9Q+N1js6/cnRz8feYujYT81y23rHVk/zw8WfDfYtrRnt/bKiZCF3y+JmRHK+7t2ko9INb6vcPDtfqh5d1g0WZWxGTFzaxYKGfz9JFYm/pPwzYkBqNJMyD+QddRT1e"),o(T,"title","Open in our Online Editor"),$t.a=null,o(Kn,"class","language-js"),Xt.a=null,o(Un,"class","language-js"),Ft.a=null,o(Zn,"class","language-js"),o(C,"class","remark-container tip"),o(Gn,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNqdUs1u1DAQfhVjcUhQiNigCjUSQluESg8gBD1QkUrrxrPdqI4d2RNtQ+RzX4Xn4klw4vwWhASHKOMZz/j7mZayqqJpS3PFgaY0F8wY8qHZVhWBewTJDXFxm8kMu4/dAnlNnm+6mKv6RgDf+lQyXsk1MIQvyDR+cteD0DejBqy1JFOhy1rfZKmN6F4JDtrQ9FtLC07TTUQlKztQfQuNqNrvDeBXmr4Y4ysX2+uIVm7eqtMPu/CHFbfp/Ylfd2jX6M/r4jHuz+po4vxQCK5BBr6U4aUbEpviOwSbMEZ3CHbv1ZGUTDakAaYNcUAI00AaVb/ZhdHY+FaJupR/mJjhO4mgP9blDehp9IFJLkAH1RD1d3rtw7gjH5xrACzkbUdmfiXDsxpRyQHaz4cfCwihD8KFERk+Hh/A/NIgCIv9FsyVMb/aiLlMnpFk5XZE72mavEwi2rj/yamNvHHJ34xbMvzdu//xbfALhFCdPeR4UL1VT9ueop0dfEKuVK3JwI90CArT35sp23ih7Ur2M5bfEVTz6u0G06bE2Dh6MUh08up0kGja8ksoK+GYrrZ9pdPW3F3st7wW+A8qLfTYzSDstf0F+Ot3iw=="),o(I,"title","Open in our Online Editor"),Kt.a=null,o(Wn,"class","language-js"),Ut.a=null,o(nt,"class","language-js"),Zt.a=null,o(tt,"class","language-js"),o(B,"class","remark-container tip")},m(n,s){p(n,g,s),p(n,pt,s),p(n,D,s),p(n,ot,s),p(n,$,s),p(n,lt,s),p(n,X,s),p(n,ct,s),p(n,m,s),l(m,F),l(m,Vn),l(m,Q),M(J,Q,null),l(Q,f),l(Q,zn),ut.m(ye,zn),p(n,it,s),p(n,Y,s),p(n,rt,s),p(n,K,s),p(n,kt,s),p(n,z,s),l(z,U),l(z,Z),M(W,Z,null),l(Z,h),l(Z,Rn),dt.m(be,Rn),p(n,gt,s),p(n,nn,s),p(n,mt,s),p(n,tn,s),p(n,ft,s),p(n,R,s),l(R,an),l(R,en),M(sn,en,null),l(en,x),l(en,qn),ht.m(Ee,qn),p(n,xt,s),p(n,pn,s),p(n,vt,s),p(n,on,s),p(n,wt,s),p(n,ln,s),p(n,Pt,s),p(n,v,s),l(v,cn),l(v,On),l(v,un),M(rn,un,null),l(un,w),l(un,Bn),yt.m(_e,Bn),p(n,bt,s),p(n,P,s),l(P,kn),l(P,Dn),l(P,dn),M(gn,dn,null),l(dn,y),l(dn,$n),Et.m(Ce,$n),p(n,_t,s),p(n,mn,s),p(n,Ct,s),p(n,fn,s),p(n,At,s),p(n,hn,s),p(n,Tt,s),p(n,xn,s),p(n,Ht,s),p(n,vn,s),p(n,It,s),p(n,wn,s),St.m(Ae,wn),p(n,jt,s),p(n,q,s),l(q,Pn),l(q,yn),M(bn,yn,null),l(yn,b),l(yn,Xn),Mt.m(Te,Xn),p(n,Lt,s),p(n,En,s),p(n,Gt,s),p(n,_n,s),p(n,Nt,s),p(n,Cn,s),p(n,Vt,s),p(n,O,s),l(O,An),l(O,E),M(Tn,E,null),l(E,_),l(E,Fn),zt.m(He,Fn),l(E,Qn),Rt.m(Ie,Qn),l(E,Jn),qt.m(Se,Jn),p(n,Ot,s),p(n,Hn,s),p(n,Bt,s),p(n,In,s),p(n,Dt,s),p(n,C,s),l(C,Sn),l(C,Yn),l(C,A),M(jn,A,null),l(A,T),l(A,Kn),$t.m(je,Kn),l(A,Un),Xt.m(Me,Un),l(A,Zn),Ft.m(Le,Zn),p(n,Qt,s),p(n,Mn,s),p(n,Jt,s),p(n,Ln,s),p(n,Yt,s),p(n,B,s),l(B,Gn),l(B,H),M(Nn,H,null),l(H,I),l(H,Wn),Kt.m(Ge,Wn),l(H,nt),Ut.m(Ne,nt),l(H,tt),Zt.m(Ve,tt),Wt=!0},p:Re,i(n){Wt||(L(J.$$.fragment,n),L(W.$$.fragment,n),L(sn.$$.fragment,n),L(rn.$$.fragment,n),L(gn.$$.fragment,n),L(bn.$$.fragment,n),L(Tn.$$.fragment,n),L(jn.$$.fragment,n),L(Nn.$$.fragment,n),Wt=!0)},o(n){G(J.$$.fragment,n),G(W.$$.fragment,n),G(sn.$$.fragment,n),G(rn.$$.fragment,n),G(gn.$$.fragment,n),G(bn.$$.fragment,n),G(Tn.$$.fragment,n),G(jn.$$.fragment,n),G(Nn.$$.fragment,n),Wt=!1},d(n){n&&(t(g),t(pt),t(D),t(ot),t($),t(lt),t(X),t(ct),t(m),t(it),t(Y),t(rt),t(K),t(kt),t(z),t(gt),t(nn),t(mt),t(tn),t(ft),t(R),t(xt),t(pn),t(vt),t(on),t(wt),t(ln),t(Pt),t(v),t(bt),t(P),t(_t),t(mn),t(Ct),t(fn),t(At),t(hn),t(Tt),t(xn),t(Ht),t(vn),t(It),t(wn),t(jt),t(q),t(Lt),t(En),t(Gt),t(_n),t(Nt),t(Cn),t(Vt),t(O),t(Ot),t(Hn),t(Bt),t(In),t(Dt),t(C),t(Qt),t(Mn),t(Jt),t(Ln),t(Yt),t(B)),N(J),N(W),N(sn),N(rn),N(gn),N(bn),N(Tn),N(jn),N(Nn)}}}class Fe extends qe{constructor(g){super(),Oe(this,g,null,Be,ze,{})}}export{Fe as component};
