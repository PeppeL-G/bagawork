import{s as qs,n as Ds}from"../chunks/scheduler.B0TnBjPs.js";import{S as Vs,i as zs,e as a,s as u,c as j,H as k,a as s,g as l,b as i,d as r,f as M,h as t,n as d,o,j as p,p as c,m as A,t as L,k as N,l as R}from"../chunks/index.BXVnRmkj.js";import{V as $}from"../chunks/ViewApp.qg7AIhJt.js";function Ks(Ps){let P,ua="<code>EnterNumber</code>",ct,V,ia="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",ut,O,ra='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterNumber</code> component. The <code>EnterNumber</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',it,z,ka="Introduction",rt,K,da="The <code>EnterNumber</code> component is a view in which the user can enter a number. If the user presses the Enter key (<code>↵</code>) when the component has focus, the app will progress to the next page.",kt,b,Q,ga="Example",Ln,ma="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",U,dt,J,fa="<code>number()</code> - Setting an initial number",gt,X,ha="Use the configuration method <code>number()</code> to give the <code>EnterNumber</code> component a number it will contain from the start.",mt,y,F,xa="Example",W,C,wa="Open in Online Editor",Nn,ft,bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ht,Y,va="<code>placeholder()</code> - Setting a placeholder text",xt,Z,ya="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterNumber</code> component when no number is shown.",wt,x,nn,Pa="Example",Rn,ba="Try typing some digits in this example, and you will see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.",tn,_,Ca="Open in Online Editor",$n,vt,Cs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,yt,an,_a="<code>decimals()</code> - Setting maximum number of decimals",Pt,sn,Ea="Use the configuration method <code>decimals()</code> to indicate how many decimals the entered number may contain. Pass it:",bt,en,Ha="<li><code>0</code> to allow no decimals, e.g. allow only numbers like <code>123</code> and <code>55</code> (i.e. only integers)</li> <li><code>1</code> to allow at most 1 decimal, e.g. <code>123</code>, <code>123.4</code> and <code>0.6</code></li> <li><code>2</code> to allow at most 2 decimals, e.g. <code>123</code>, <code>123.4</code>, <code>123.45</code> and <code>1.23</code></li> <li>Etc.</li>",Ct,pn,Ta="If you don't call this method, then there will be no upper limit on the number of decimals that may be entered, but JavaScript has its own limit on how many decimals a number can have, so when you read out the entered number, it might have fewer decimals than has been entered. JavaScript supports quite many decimal numbers in numbers, so in practice this will likely never be a problem for you.",_t,w,on,Ia="Example",On,Sa="Example where the user can only enter integers.",ln,E,Ga="Open in Online Editor",Bn,Et,_s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ht,v,cn,ja="Example",qn,Ma="Example where the user can enter at most 2 decimals.",un,H,Aa="Open in Online Editor",Dn,Tt,Es=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,It,rn,La="<code>page()</code>, <code>pageIfEqual()</code>, <code>pageIfLower()</code>, <code>pageIfHigher()</code> &amp; <code>pageIfBetween()</code> - Going to next page",St,kn,Na="There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:",Gt,dn,Ra="<li><code>pageIfEqual(number, page)</code></li> <li><code>pageIfLower(number, page)</code></li> <li><code>pageIfHigher(number, page)</code></li> <li><code>pageIfBetween(lowNumber, highNumber, page)</code></li>",jt,gn,$a="These methods can be called multiple times. In addition to those, you can also use <code>page(page)</code> to specify the page the user should come to if the entered number isn&#39;t true for any of the previously mentioned configuration methods.",Mt,B,mn,Oa="Example",Vn,At,Hs=`<code class="language-js">EnterNumber
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TwoPage<span class="token punctuation">)</span> <span class="token comment">// Go to TwoPage if the user enters 2.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> SixPage<span class="token punctuation">)</span> <span class="token comment">// Go to SixPage if the user enters 6.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> NegativePage<span class="token punctuation">)</span> <span class="token comment">// Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> HighPage<span class="token punctuation">)</span> <span class="token comment">// Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> MiddlePage<span class="token punctuation">)</span> <span class="token comment">// Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.</span>
	<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DefaultPage<span class="token punctuation">)</span> <span class="token comment">// Go to DefaultPage if the user enters a number that doesn't fulfill any of the pageIfXXX() methods, such as 5, 50 or 99.99999.</span></code>`,Lt,g,fn,Ba="Example",hn,T,qa="Open in Online Editor",zn,Nt,Ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber
					<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> InvalidAgePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> KidPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> KidPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AdultPage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> InvalidAgePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Kn,Rt,Is=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidAgePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That age is invalid.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Qn,$t,Ss=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">KidPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ah, then you are a still a kid. Good for you! :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Un,Ot,Gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AdultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, respect to you, big guy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Bt,xn,Da="<code>store()</code> - Storing the entered number",qt,wn,Va="Use the configuration method <code>store()</code> to store the number the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Dt,vn,za="<li>The object in which the entered number should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered number should be stored as a string</li>",Vt,f,yn,Ka="Example",Pn,I,Qa="Open in Online Editor",Jn,zt,js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Xn,Kt,Ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Fn,Qt,As=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ut,bn,Ua="<code>defaultNumber()</code> - Specifying a default number",Jt,Cn,Ja="Use the configuration method <code>defaultNumber()</code> to specify which number that should be used if the user doesn&#39;t enter a number at all (i.e. if the user leaves the input field empty). If you don&#39;t call this configuration method, <code>0</code> will be used as the default number automatically.",Xt,m,_n,Xa="Example",Wn,Fa="In the previous example, click on the <code>⇨</code> button without entering a number, and see that <code>0</code> is used by default. Do the same thing in this example, and see that <code>10</code> is used by default.",En,S,Wa="Open in Online Editor",Yn,Ft,Ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,Wt,Ns=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,nt,Yt,Rs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zt,Hn,Ya="<code>onChange()</code> - Handling the entered number",na,Tn,Za="Use the configuration method <code>onChange()</code> to tell the <code>EnterNumber</code> component which method to call to handle the entered number. This method will be called each time the user makes a change in the <code>EnterNumber</code> component, such as:",ta,In,ns="<li>Writes a digit in it</li> <li>Removes a digit from it</li> <li>Paste a number in it</li> <li>Removes all digits in it</li> <li>Etc.</li>",aa,Sn,ts="Your method will also be passed the entered number as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",sa,h,Gn,as="Example",jn,G,ss="Open in Online Editor",tt,ea,$s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	doubledAge <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,at,pa,Os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredAge</span><span class="token punctuation">(</span><span class="token parameter">enteredAge</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>age <span class="token operator">=</span> enteredAge
		a<span class="token punctuation">.</span>doubledAge <span class="token operator">=</span> enteredAge <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,st,oa,Bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old! Your doubled age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>doubledAge<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,la;return U=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}`,x:150,y:200}]}}}),W=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.number(123)
	}
}`,x:150,y:200}]}}}),tn=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`)
	}
}`,x:150,y:200}]}}}),ln=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(0)
	}
}`,x:150,y:200}]}}}),un=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(2)
	}
}`,x:150,y:200}]}}}),hn=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber
					.grow(1)
					.pageIfLower(0, InvalidAgePage)
					.pageIfEqual(0, KidPage)
					.pageIfBetween(0, 18, KidPage)
					.page(AdultPage)
					.pageIfHigher(150, InvalidAgePage),
				Button.text(\`⇨\`),
			),
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class InvalidAgePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`That age is invalid.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:450,y:200},{id:3,folderId:1,code:`class KidPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Ah, then you are a still a kid. Good for you! :)\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:750,y:200},{id:4,folderId:1,code:`class AdultPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, respect to you, big guy!\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:1050,y:200}]}}}),Pn=new $({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.grow(1).store(a, \`age\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:450,y:200}]}}}),En=new $({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.grow(1).defaultNumber(10).store(a, \`age\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:450,y:200}]}}}),jn=new $({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	doubledAge = -2
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.grow(1).onChange(p.handleEnteredAge).page(GreetingPage),
				Button.text(\`⇨\`),
			),
		)
	}
	
	handleEnteredAge(enteredAge){
		a.age = enteredAge
		a.doubledAge = enteredAge * 2
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello you who are \${a.age} years old! Your doubled age is \${a.doubledAge}.\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:450,y:200}]}}}),{c(){P=a("h1"),P.innerHTML=ua,ct=u(),V=a("p"),V.innerHTML=ia,ut=u(),O=a("div"),O.innerHTML=ra,it=u(),z=a("h2"),z.textContent=ka,rt=u(),K=a("p"),K.innerHTML=da,kt=u(),b=a("div"),Q=a("div"),Q.textContent=ga,Ln=a("p"),Ln.innerHTML=ma,j(U.$$.fragment),dt=u(),J=a("h2"),J.innerHTML=fa,gt=u(),X=a("p"),X.innerHTML=ha,mt=u(),y=a("div"),F=a("div"),F.textContent=xa,j(W.$$.fragment),C=a("a"),C.textContent=wa,Nn=a("pre"),ft=new k(!1),ht=u(),Y=a("h2"),Y.innerHTML=va,xt=u(),Z=a("p"),Z.innerHTML=ya,wt=u(),x=a("div"),nn=a("div"),nn.textContent=Pa,Rn=a("p"),Rn.textContent=ba,j(tn.$$.fragment),_=a("a"),_.textContent=Ca,$n=a("pre"),vt=new k(!1),yt=u(),an=a("h2"),an.innerHTML=_a,Pt=u(),sn=a("p"),sn.innerHTML=Ea,bt=u(),en=a("ul"),en.innerHTML=Ha,Ct=u(),pn=a("p"),pn.textContent=Ta,_t=u(),w=a("div"),on=a("div"),on.textContent=Ia,On=a("p"),On.textContent=Sa,j(ln.$$.fragment),E=a("a"),E.textContent=Ga,Bn=a("pre"),Et=new k(!1),Ht=u(),v=a("div"),cn=a("div"),cn.textContent=ja,qn=a("p"),qn.textContent=Ma,j(un.$$.fragment),H=a("a"),H.textContent=Aa,Dn=a("pre"),Tt=new k(!1),It=u(),rn=a("h2"),rn.innerHTML=La,St=u(),kn=a("p"),kn.textContent=Na,Gt=u(),dn=a("ul"),dn.innerHTML=Ra,jt=u(),gn=a("p"),gn.innerHTML=$a,Mt=u(),B=a("div"),mn=a("div"),mn.textContent=Oa,Vn=a("pre"),At=new k(!1),Lt=u(),g=a("div"),fn=a("div"),fn.textContent=Ba,j(hn.$$.fragment),T=a("a"),T.textContent=qa,zn=a("pre"),Nt=new k(!1),Kn=a("pre"),Rt=new k(!1),Qn=a("pre"),$t=new k(!1),Un=a("pre"),Ot=new k(!1),Bt=u(),xn=a("h2"),xn.innerHTML=Da,qt=u(),wn=a("p"),wn.innerHTML=Va,Dt=u(),vn=a("ol"),vn.innerHTML=za,Vt=u(),f=a("div"),yn=a("div"),yn.textContent=Ka,j(Pn.$$.fragment),I=a("a"),I.textContent=Qa,Jn=a("pre"),zt=new k(!1),Xn=a("pre"),Kt=new k(!1),Fn=a("pre"),Qt=new k(!1),Ut=u(),bn=a("h2"),bn.innerHTML=Ua,Jt=u(),Cn=a("p"),Cn.innerHTML=Ja,Xt=u(),m=a("div"),_n=a("div"),_n.textContent=Xa,Wn=a("p"),Wn.innerHTML=Fa,j(En.$$.fragment),S=a("a"),S.textContent=Wa,Yn=a("pre"),Ft=new k(!1),Zn=a("pre"),Wt=new k(!1),nt=a("pre"),Yt=new k(!1),Zt=u(),Hn=a("h2"),Hn.innerHTML=Ya,na=u(),Tn=a("p"),Tn.innerHTML=Za,ta=u(),In=a("ul"),In.innerHTML=ns,aa=u(),Sn=a("p"),Sn.innerHTML=ts,sa=u(),h=a("div"),Gn=a("div"),Gn.textContent=as,j(jn.$$.fragment),G=a("a"),G.textContent=ss,tt=a("pre"),ea=new k(!1),at=a("pre"),pa=new k(!1),st=a("pre"),oa=new k(!1),this.h()},l(n){P=s(n,"H1",{"data-svelte-h":!0}),l(P)!=="svelte-1dpshw6"&&(P.innerHTML=ua),ct=i(n),V=s(n,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1r4vkdp"&&(V.innerHTML=ia),ut=i(n),O=s(n,"DIV",{class:!0,"data-svelte-h":!0}),l(O)!=="svelte-1swqf8d"&&(O.innerHTML=ra),it=i(n),z=s(n,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-1ukekoe"&&(z.textContent=ka),rt=i(n),K=s(n,"P",{"data-svelte-h":!0}),l(K)!=="svelte-1lusw2"&&(K.innerHTML=da),kt=i(n),b=s(n,"DIV",{class:!0});var e=r(b);Q=s(e,"DIV",{class:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1llzxwj"&&(Q.textContent=ga),Ln=s(e,"P",{"data-svelte-h":!0}),l(Ln)!=="svelte-iqlwcv"&&(Ln.innerHTML=ma),M(U.$$.fragment,e),e.forEach(t),dt=i(n),J=s(n,"H2",{"data-svelte-h":!0}),l(J)!=="svelte-1rh7zam"&&(J.innerHTML=fa),gt=i(n),X=s(n,"P",{"data-svelte-h":!0}),l(X)!=="svelte-qgek2q"&&(X.innerHTML=ha),mt=i(n),y=s(n,"DIV",{class:!0});var lt=r(y);F=s(lt,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1llzxwj"&&(F.textContent=xa),M(W.$$.fragment,lt),C=s(lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-impg0e"&&(C.textContent=wa),Nn=s(lt,"PRE",{class:!0});var es=r(Nn);ft=d(es,!1),es.forEach(t),lt.forEach(t),ht=i(n),Y=s(n,"H2",{"data-svelte-h":!0}),l(Y)!=="svelte-k11loz"&&(Y.innerHTML=va),xt=i(n),Z=s(n,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-10h95k6"&&(Z.innerHTML=ya),wt=i(n),x=s(n,"DIV",{class:!0});var et=r(x);nn=s(et,"DIV",{class:!0,"data-svelte-h":!0}),l(nn)!=="svelte-1llzxwj"&&(nn.textContent=Pa),Rn=s(et,"P",{"data-svelte-h":!0}),l(Rn)!=="svelte-vh6itt"&&(Rn.textContent=ba),M(tn.$$.fragment,et),_=s(et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-u95npc"&&(_.textContent=Ca),$n=s(et,"PRE",{class:!0});var ps=r($n);vt=d(ps,!1),ps.forEach(t),et.forEach(t),yt=i(n),an=s(n,"H2",{"data-svelte-h":!0}),l(an)!=="svelte-sli74j"&&(an.innerHTML=_a),Pt=i(n),sn=s(n,"P",{"data-svelte-h":!0}),l(sn)!=="svelte-1d3pone"&&(sn.innerHTML=Ea),bt=i(n),en=s(n,"UL",{"data-svelte-h":!0}),l(en)!=="svelte-1faw50k"&&(en.innerHTML=Ha),Ct=i(n),pn=s(n,"P",{"data-svelte-h":!0}),l(pn)!=="svelte-qdsjte"&&(pn.textContent=Ta),_t=i(n),w=s(n,"DIV",{class:!0});var pt=r(w);on=s(pt,"DIV",{class:!0,"data-svelte-h":!0}),l(on)!=="svelte-1llzxwj"&&(on.textContent=Ia),On=s(pt,"P",{"data-svelte-h":!0}),l(On)!=="svelte-15y36jm"&&(On.textContent=Sa),M(ln.$$.fragment,pt),E=s(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-fao8xi"&&(E.textContent=Ga),Bn=s(pt,"PRE",{class:!0});var os=r(Bn);Et=d(os,!1),os.forEach(t),pt.forEach(t),Ht=i(n),v=s(n,"DIV",{class:!0});var ot=r(v);cn=s(ot,"DIV",{class:!0,"data-svelte-h":!0}),l(cn)!=="svelte-1llzxwj"&&(cn.textContent=ja),qn=s(ot,"P",{"data-svelte-h":!0}),l(qn)!=="svelte-zv68fv"&&(qn.textContent=Ma),M(un.$$.fragment,ot),H=s(ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(H)!=="svelte-sdz9t7"&&(H.textContent=Aa),Dn=s(ot,"PRE",{class:!0});var ls=r(Dn);Tt=d(ls,!1),ls.forEach(t),ot.forEach(t),It=i(n),rn=s(n,"H2",{"data-svelte-h":!0}),l(rn)!=="svelte-19ebt5j"&&(rn.innerHTML=La),St=i(n),kn=s(n,"P",{"data-svelte-h":!0}),l(kn)!=="svelte-q2ln6m"&&(kn.textContent=Na),Gt=i(n),dn=s(n,"UL",{"data-svelte-h":!0}),l(dn)!=="svelte-1hwnfm7"&&(dn.innerHTML=Ra),jt=i(n),gn=s(n,"P",{"data-svelte-h":!0}),l(gn)!=="svelte-psw8xk"&&(gn.innerHTML=$a),Mt=i(n),B=s(n,"DIV",{class:!0});var ca=r(B);mn=s(ca,"DIV",{class:!0,"data-svelte-h":!0}),l(mn)!=="svelte-1llzxwj"&&(mn.textContent=Oa),Vn=s(ca,"PRE",{class:!0});var cs=r(Vn);At=d(cs,!1),cs.forEach(t),ca.forEach(t),Lt=i(n),g=s(n,"DIV",{class:!0});var q=r(g);fn=s(q,"DIV",{class:!0,"data-svelte-h":!0}),l(fn)!=="svelte-1llzxwj"&&(fn.textContent=Ba),M(hn.$$.fragment,q),T=s(q,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-1vw7k6y"&&(T.textContent=qa),zn=s(q,"PRE",{class:!0});var us=r(zn);Nt=d(us,!1),us.forEach(t),Kn=s(q,"PRE",{class:!0});var is=r(Kn);Rt=d(is,!1),is.forEach(t),Qn=s(q,"PRE",{class:!0});var rs=r(Qn);$t=d(rs,!1),rs.forEach(t),Un=s(q,"PRE",{class:!0});var ks=r(Un);Ot=d(ks,!1),ks.forEach(t),q.forEach(t),Bt=i(n),xn=s(n,"H2",{"data-svelte-h":!0}),l(xn)!=="svelte-xzw4ex"&&(xn.innerHTML=Da),qt=i(n),wn=s(n,"P",{"data-svelte-h":!0}),l(wn)!=="svelte-wcl02x"&&(wn.innerHTML=Va),Dt=i(n),vn=s(n,"OL",{"data-svelte-h":!0}),l(vn)!=="svelte-1mtleiz"&&(vn.innerHTML=za),Vt=i(n),f=s(n,"DIV",{class:!0});var Mn=r(f);yn=s(Mn,"DIV",{class:!0,"data-svelte-h":!0}),l(yn)!=="svelte-1llzxwj"&&(yn.textContent=Ka),M(Pn.$$.fragment,Mn),I=s(Mn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(I)!=="svelte-1nwiydo"&&(I.textContent=Qa),Jn=s(Mn,"PRE",{class:!0});var ds=r(Jn);zt=d(ds,!1),ds.forEach(t),Xn=s(Mn,"PRE",{class:!0});var gs=r(Xn);Kt=d(gs,!1),gs.forEach(t),Fn=s(Mn,"PRE",{class:!0});var ms=r(Fn);Qt=d(ms,!1),ms.forEach(t),Mn.forEach(t),Ut=i(n),bn=s(n,"H2",{"data-svelte-h":!0}),l(bn)!=="svelte-f924tf"&&(bn.innerHTML=Ua),Jt=i(n),Cn=s(n,"P",{"data-svelte-h":!0}),l(Cn)!=="svelte-1iqciy4"&&(Cn.innerHTML=Ja),Xt=i(n),m=s(n,"DIV",{class:!0});var D=r(m);_n=s(D,"DIV",{class:!0,"data-svelte-h":!0}),l(_n)!=="svelte-1llzxwj"&&(_n.textContent=Xa),Wn=s(D,"P",{"data-svelte-h":!0}),l(Wn)!=="svelte-grsfym"&&(Wn.innerHTML=Fa),M(En.$$.fragment,D),S=s(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-flowns"&&(S.textContent=Wa),Yn=s(D,"PRE",{class:!0});var fs=r(Yn);Ft=d(fs,!1),fs.forEach(t),Zn=s(D,"PRE",{class:!0});var hs=r(Zn);Wt=d(hs,!1),hs.forEach(t),nt=s(D,"PRE",{class:!0});var xs=r(nt);Yt=d(xs,!1),xs.forEach(t),D.forEach(t),Zt=i(n),Hn=s(n,"H2",{"data-svelte-h":!0}),l(Hn)!=="svelte-1mxkyq8"&&(Hn.innerHTML=Ya),na=i(n),Tn=s(n,"P",{"data-svelte-h":!0}),l(Tn)!=="svelte-g4gtim"&&(Tn.innerHTML=Za),ta=i(n),In=s(n,"UL",{"data-svelte-h":!0}),l(In)!=="svelte-1rktz5a"&&(In.innerHTML=ns),aa=i(n),Sn=s(n,"P",{"data-svelte-h":!0}),l(Sn)!=="svelte-1q1vg9e"&&(Sn.innerHTML=ts),sa=i(n),h=s(n,"DIV",{class:!0});var An=r(h);Gn=s(An,"DIV",{class:!0,"data-svelte-h":!0}),l(Gn)!=="svelte-1llzxwj"&&(Gn.textContent=as),M(jn.$$.fragment,An),G=s(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(G)!=="svelte-puqn6x"&&(G.textContent=ss),tt=s(An,"PRE",{class:!0});var ws=r(tt);ea=d(ws,!1),ws.forEach(t),at=s(An,"PRE",{class:!0});var vs=r(at);pa=d(vs,!1),vs.forEach(t),st=s(An,"PRE",{class:!0});var ys=r(st);oa=d(ys,!1),ys.forEach(t),An.forEach(t),this.h()},h(){o(O,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(b,"class","remark-container tip"),o(F,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNpdjrEKwjAQhl8l3NRCkLbiks1BxEERHI1DbE4p1DQkV2gJeXfbCkGd7r7/OL4/gLIWRIC60wgC6lZ5z47j1lqGA6HRnk17kEZS7VARXkg5OqsnZvmSSnJIvTMsHeY0ShMhcrATexDXAI0GUXJ4dK1Gd/jAjzT9J/EMX+Z93/w7d4bQnfrXHd3KLCMrq3WeGnAYJtGm4DCCqIoi3uIbCFxU2Q=="),o(C,"title","Open in our Online Editor"),ft.a=null,o(Nn,"class","language-js"),o(y,"class","remark-container tip"),o(nn,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjsEKwjAQRH8l7KmFIFXwkpsHEQ+K4NEIjcmqhZqGJIWWkH83rRDU284Ms28CCGOABZCdQmAgW+EcOYwbYwgOHrVyJN2Ba+6lReHx7IX1J/HAopxd7i363mqSg8mNXEeIFEzSDtglQKOALSncu1ah3X/EDzT3M3gSX+Rd3/wzt9qjPfavG9qFaYXE5/y+qOeApH5d5jkUhkRdVxRGYKuqitf4BrNwWkg="),o(_,"title","Open in our Online Editor"),vt.a=null,o($n,"class","language-js"),o(x,"class","remark-container tip"),o(on,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjsEKwjAQRH8l7KmFUqLgJTcPIh4UwaMVGpNVC20aki20lPy7bYWg3nZmmH0zgrQWxAiq1QgCVC29Z8dhay3DntBoz6Z7LExByqEkvJB0dJZPTNLFLcghdc6wGMxuKEyAkIGdtAdxHaHSIFYZPNpaozt8xA809iN4Fl/kfVf9M3eG0J265o4ut7VU+FreJ+USsKlfprlGVTWy9glP47QM+mnBhmcwgFhzHm7hDRWaXjk="),o(E,"title","Open in our Online Editor"),Et.a=null,o(Bn,"class","language-js"),o(w,"class","remark-container tip"),o(cn,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdjsEKwjAQRH8l7KmFIrXgJTcPIh4UwaMRGpNVC2kaki20lPy7bYWi3nZmmH0zgHQO+ACq0QgclJEhsGO/dY5hR2h1YOM9CCtIeZSEF5KezvKJSTq7gjxS6y1bgsmNwkaIGbhRB+DXASoNfJ3BozEa/eEjfqBLfwFP4ou8b6t/5s4S+lNb39GvnJEKX/P7pJwDNvbLdKVRVbU0ISnSZVoG3bhgk2fQAy/yPN7iGxXWXjs="),o(H,"title","Open in our Online Editor"),Tt.a=null,o(Dn,"class","language-js"),o(v,"class","remark-container tip"),o(mn,"class","remark-container__title"),At.a=null,o(Vn,"class","language-js"),o(B,"class","remark-container tip"),o(fn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtkktu2zAQhq8y4UoCCMNKU7TQpnCKwDH6RJtdVcC0OJaIyKRKDasIhta5Ss/Vk5SKEsWuY6+0IufB+efjzJaJsmTxlqVGIotZWoiqgk/NrCwB7wi1rMDft4lOKLUoCL+TsPRVZBiED96ELJKzGoZA520T3bKWs9LbFYt/bJmSLI44W5tCol30xp7o8H4Q7owd5blT/2t+M3U1SXNVSIs66EMJ3fgCk8yaOojCCXkjWF6bGjZCN9CgsBX4JkBYhMa4d8uQPz18bwq30S9UTOhKE9rPbrNC++xMBpk9Xwe9WH80NdpgymGhf4tCyVmGHdBLqVe/nCi61A9KHsu5RKrRt+SzorcnMoOZdAUdq3Ktstx3Fb0+7Is/p186IqMfv+7v/Z+dL3q6hcOUObvzw/QFWcPi8+m05f2wz08Ne197nIn37d7kgqCrqSpQvcpkp/89tLmBlUhvl2H/c8MGHoG8OIR8dQrycUZj0s1yDpSj7jb3YYMFVKSKwp+3HhTmxkhYG9vFzyAORyJ/c0h+cYp82MEx2b94dotViSkBmY6Qw0plkLnmbCTOaLoD+rP9B7eCzNg="),o(T,"title","Open in our Online Editor"),Nt.a=null,o(zn,"class","language-js"),Rt.a=null,o(Kn,"class","language-js"),$t.a=null,o(Qn,"class","language-js"),Ot.a=null,o(Un,"class","language-js"),o(g,"class","remark-container tip"),o(yn,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNqtkc9Kw0AQxl9lHTwksIa26CUgYkWqB0XUmxGyJmMbTHfDZkIawp59FZ/LJ3HTNH9axJOHhZ2ZnW+++W0NIsvAryFSMYIPUSrynN1Vl1nGcEMo45zZex3IgJojlsjO2cm0iyONgvCJhKYHW3Pc9iVppEJL1hearGmbDBgOmc3l4L/UkMTgTzm8qzRGfdsGe2Z6jd5QE9TD9EWRHM59VGXuRaskjTVKpy0F9GwFvKVWpTN1PbKBE96okq2FrFiFQufMmmBCI6tUcRG6vGu8Ummxlr8oBnQtCfV9sX5D3UvnpDQ6grPQGg1dr1nWWWhESuSyMT8oBzQviJTc2fn+/BqNdduLu4NngMPG8jmbcKjAn00mhrf8Zn/xGw/+H4Q7dJimqiHFypXaUjuuhWd1zQDzaLTN3qJzEX0wUsPndpj6RNd4sP3paPtX8wPDWPoo"),o(I,"title","Open in our Online Editor"),zt.a=null,o(Jn,"class","language-js"),Kt.a=null,o(Xn,"class","language-js"),Qt.a=null,o(Fn,"class","language-js"),o(f,"class","remark-container tip"),o(_n,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNqtkc9KxDAQxl8lDh5aqKVd9FIQcUVWD4qoNys0trO7xW5S0indUnr2VXwun8TUbP/sIp48BDIzmZnv+6UBnucQNBDLBCGAOONFwe7qyzxnuCUUScH0vQlFSN3hK2Tn7MTv41ghJ3wiruhB1yzbvCSFVCrBhkKXbU1TC60Duc4VELw0kCYQ+A4sZZagujXBnphhxiCoC5px+6JMD/c+yqpw43WaJQqFZUohPesB7krJyvJtl3RgRTeyYhsualYjVwXTIhhXyGpZXkS20zdeyazciF8mhnQtCNV9uXlDNYxOcMnLjEzW8j3bLUgqtLjDIi09st3OvrVQiJSKVWdn3BXSvCSSYifw6+NzIsQ2F3uHswUHtprYmedADcHM81rHEJ39RXS6+H+g7mBilsmOHavW8ofjccNdPbcd8R5N3OwZnfP4nZEcv7vHNCT6xgP3pxP3r+03bqAAZQ=="),o(S,"title","Open in our Online Editor"),Ft.a=null,o(Yn,"class","language-js"),Wt.a=null,o(Zn,"class","language-js"),Yt.a=null,o(nt,"class","language-js"),o(m,"class","remark-container tip"),o(Gn,"class","remark-container__title"),o(G,"target","_blank"),o(G,"href","/editor#eNqdks9Kw0AQxl9lXDwkEkNb9BIQaYtUD4qoFzFCt8nYBtPdsJnQhpCzr+Jz+SRu/idVPHgIuzszO/vN90vGeBQxJ2Oe9JE5zAt5HMNtOo0iwD2h8GPQ+8wVLhUfXyNcwOm42PsyWYXoT6vQpCnxFHLCR+KK7nW5YVaXSSElSkCbKKJ5dSlnucUiHYuZ85KxwGfO2GJvMvRR3VSHgb62R6uxOGRDBYskOHz7Qe5i29sEoa9QGFXKpSfdxF4ruTPGpk36YCyv5Q62XKSQIlcxaCHAFUIqk8ulaTUX5zJMtuKXji5dCUJ1l2xXqNrWUsw3XGhHIluvfohlUWmgaRfTGwuFSIFYF9N0z7g0S4ikqLV9fXz2NDQ7s2enS4f9Deyeqi3hdsWyyzTxAdcuDScwGTCz2F6jOR9ZLGXOZDTKrQrd5C90/RF/0vsPuZoYhqEsAMFuI0tYx1k5Yt4xPIJnmSio54NCQRCXdd3Iud0zd+D7jHvvQLL7+ZY1tTZwyKK26Kxn0Wv+DaVuOwM="),o(G,"title","Open in our Online Editor"),ea.a=null,o(tt,"class","language-js"),pa.a=null,o(at,"class","language-js"),oa.a=null,o(st,"class","language-js"),o(h,"class","remark-container tip")},m(n,e){p(n,P,e),p(n,ct,e),p(n,V,e),p(n,ut,e),p(n,O,e),p(n,it,e),p(n,z,e),p(n,rt,e),p(n,K,e),p(n,kt,e),p(n,b,e),c(b,Q),c(b,Ln),A(U,b,null),p(n,dt,e),p(n,J,e),p(n,gt,e),p(n,X,e),p(n,mt,e),p(n,y,e),c(y,F),A(W,y,null),c(y,C),c(y,Nn),ft.m(bs,Nn),p(n,ht,e),p(n,Y,e),p(n,xt,e),p(n,Z,e),p(n,wt,e),p(n,x,e),c(x,nn),c(x,Rn),A(tn,x,null),c(x,_),c(x,$n),vt.m(Cs,$n),p(n,yt,e),p(n,an,e),p(n,Pt,e),p(n,sn,e),p(n,bt,e),p(n,en,e),p(n,Ct,e),p(n,pn,e),p(n,_t,e),p(n,w,e),c(w,on),c(w,On),A(ln,w,null),c(w,E),c(w,Bn),Et.m(_s,Bn),p(n,Ht,e),p(n,v,e),c(v,cn),c(v,qn),A(un,v,null),c(v,H),c(v,Dn),Tt.m(Es,Dn),p(n,It,e),p(n,rn,e),p(n,St,e),p(n,kn,e),p(n,Gt,e),p(n,dn,e),p(n,jt,e),p(n,gn,e),p(n,Mt,e),p(n,B,e),c(B,mn),c(B,Vn),At.m(Hs,Vn),p(n,Lt,e),p(n,g,e),c(g,fn),A(hn,g,null),c(g,T),c(g,zn),Nt.m(Ts,zn),c(g,Kn),Rt.m(Is,Kn),c(g,Qn),$t.m(Ss,Qn),c(g,Un),Ot.m(Gs,Un),p(n,Bt,e),p(n,xn,e),p(n,qt,e),p(n,wn,e),p(n,Dt,e),p(n,vn,e),p(n,Vt,e),p(n,f,e),c(f,yn),A(Pn,f,null),c(f,I),c(f,Jn),zt.m(js,Jn),c(f,Xn),Kt.m(Ms,Xn),c(f,Fn),Qt.m(As,Fn),p(n,Ut,e),p(n,bn,e),p(n,Jt,e),p(n,Cn,e),p(n,Xt,e),p(n,m,e),c(m,_n),c(m,Wn),A(En,m,null),c(m,S),c(m,Yn),Ft.m(Ls,Yn),c(m,Zn),Wt.m(Ns,Zn),c(m,nt),Yt.m(Rs,nt),p(n,Zt,e),p(n,Hn,e),p(n,na,e),p(n,Tn,e),p(n,ta,e),p(n,In,e),p(n,aa,e),p(n,Sn,e),p(n,sa,e),p(n,h,e),c(h,Gn),A(jn,h,null),c(h,G),c(h,tt),ea.m($s,tt),c(h,at),pa.m(Os,at),c(h,st),oa.m(Bs,st),la=!0},p:Ds,i(n){la||(L(U.$$.fragment,n),L(W.$$.fragment,n),L(tn.$$.fragment,n),L(ln.$$.fragment,n),L(un.$$.fragment,n),L(hn.$$.fragment,n),L(Pn.$$.fragment,n),L(En.$$.fragment,n),L(jn.$$.fragment,n),la=!0)},o(n){N(U.$$.fragment,n),N(W.$$.fragment,n),N(tn.$$.fragment,n),N(ln.$$.fragment,n),N(un.$$.fragment,n),N(hn.$$.fragment,n),N(Pn.$$.fragment,n),N(En.$$.fragment,n),N(jn.$$.fragment,n),la=!1},d(n){n&&(t(P),t(ct),t(V),t(ut),t(O),t(it),t(z),t(rt),t(K),t(kt),t(b),t(dt),t(J),t(gt),t(X),t(mt),t(y),t(ht),t(Y),t(xt),t(Z),t(wt),t(x),t(yt),t(an),t(Pt),t(sn),t(bt),t(en),t(Ct),t(pn),t(_t),t(w),t(Ht),t(v),t(It),t(rn),t(St),t(kn),t(Gt),t(dn),t(jt),t(gn),t(Mt),t(B),t(Lt),t(g),t(Bt),t(xn),t(qt),t(wn),t(Dt),t(vn),t(Vt),t(f),t(Ut),t(bn),t(Jt),t(Cn),t(Xt),t(m),t(Zt),t(Hn),t(na),t(Tn),t(ta),t(In),t(aa),t(Sn),t(sa),t(h)),R(U),R(W),R(tn),R(ln),R(un),R(hn),R(Pn),R(En),R(jn)}}}class Xs extends Vs{constructor(P){super(),zs(this,P,null,Ks,qs,{})}}export{Xs as component};
