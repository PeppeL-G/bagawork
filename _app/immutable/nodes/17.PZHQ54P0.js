import{s as Qs,n as Us}from"../chunks/scheduler.B0TnBjPs.js";import{S as Xs,i as Js,e as s,s as u,c as M,H as k,a as e,g as l,b as i,d as r,f as A,n as d,h as t,o,j as p,p as c,m as N,t as L,k as R,l as O}from"../chunks/index.BXVnRmkj.js";import{V as $}from"../chunks/ViewApp.CB1BM1bD.js";function Fs(Es){let b,ra="<code>EnterNumber</code>",ut,z,ka="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",it,B,da='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterNumber</code> component. The <code>EnterNumber</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',rt,D,ga="Introduction",kt,K,ma="The <code>EnterNumber</code> component is a view in which the user can enter a number. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",dt,x,Q,fa="Example",Ln,ha="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",U,C,xa="Open in Online Editor",Rn,gt,Hs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,mt,X,wa="<code>number()</code> - Setting an initial number",ft,J,va="Use the configuration method <code>number()</code> to give the <code>EnterNumber</code> component a number it will contain from the start.",ht,y,F,Pa="Example",Y,_,ya="Open in Online Editor",On,xt,Is=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,wt,W,ba="<code>placeholder()</code> - Setting a placeholder text",vt,Z,Ca="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterNumber</code> component when no number is shown.",Pt,w,nn,_a="Example",$n,Ea="Try typing some digits in this example, and you will see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.",tn,E,Ha="Open in Online Editor",Bn,yt,Ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,bt,an,Ia="<code>decimals()</code> - Setting maximum number of decimals",Ct,sn,Ta="Use the configuration method <code>decimals()</code> to indicate how many decimals the entered number may contain. Pass it:",_t,en,Sa="<li><code>0</code> to allow no decimals, e.g. allow numbers like <code>123</code> and <code>55</code> (i.e. only integers)</li> <li><code>1</code> to allow at most 1 decimal, e.g. <code>123</code>, <code>123.4</code> and <code>0.6</code></li> <li><code>2</code> to allow at most 2 decimals, e.g. <code>123</code>, <code>123.4</code>, <code>123.45</code> and <code>1.23</code></li> <li>Etc.</li>",Et,pn,Ga="If you don't call this method, then there will be no upper limit on the number of decimals that may be entered.",Ht,v,on,ja="Example",Vn,Ma="Example where the user can only enter integers.",ln,H,Aa="Open in Online Editor",qn,It,Ss=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Tt,P,cn,Na="Example",zn,La="Example where the user can enter at most 2 decimals.",un,I,Ra="Open in Online Editor",Dn,St,Gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Gt,rn,Oa="<code>page()</code>, <code>pageIfEqual()</code>, <code>pageIfLower()</code>, <code>pageIfHigher()</code> &amp; <code>pageIfBetween()</code> - Going to next page",jt,kn,$a="There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:",Mt,dn,Ba="<li><code>pageIfEqual(number, page)</code></li> <li><code>pageIfLower(number, page)</code></li> <li><code>pageIfHigher(number, page)</code></li> <li><code>pageIfBetween(lowNumber, highNumber, page)</code></li>",At,gn,Va="These methods can be called multiple times. In addition to those, you can also use <code>page(page)</code> to specify the page the user should come to if the entered number isn&#39;t true for any of the previously mentioned configuration methods.",Nt,mn,qa="Example:",Lt,fn,Rt,js=`<code class="language-js">EnterNumber
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TwoPage<span class="token punctuation">)</span> <span class="token comment">// Go to TwoPage if the user enters 2.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> SixPage<span class="token punctuation">)</span> <span class="token comment">// Go to SixPage if the user enters 6.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> NegativePage<span class="token punctuation">)</span> <span class="token comment">// Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> HighPage<span class="token punctuation">)</span> <span class="token comment">// Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> MiddlePage<span class="token punctuation">)</span> <span class="token comment">// Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.</span>
	<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DefaultPage<span class="token punctuation">)</span> <span class="token comment">// Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.</span></code>`,Ot,g,hn,za="Example",xn,T,Da="Open in Online Editor",Kn,$t,Ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,Qn,Bt,As=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidAgePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That age is invalid.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Un,Vt,Ns=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">KidPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ah, then you are a still a kid. Good for you! :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xn,qt,Ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AdultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, respect to you, big guy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,zt,wn,Ka="<code>store()</code> - Storing the entered number",Dt,vn,Qa="Use the configuration method <code>store()</code> to store the number the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Kt,Pn,Ua="<li>The object in which the entered number should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered number should be stored</li>",Qt,f,yn,Xa="Example",bn,S,Ja="Open in Online Editor",Jn,Ut,Rs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Fn,Xt,Os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Yn,Jt,$s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ft,Cn,Fa="<code>defaultNumber()</code> - Specifying a default number",Yt,_n,Ya="Use the configuration method <code>defaultNumber()</code> to specify which number that should be used if the user doesn&#39;t enter a number at all (i.e. if the user leaves the input field empty). If you don&#39;t call this configuration method, <code>0</code> will be used as the default number automatically.",Wt,m,En,Wa="Example",Wn,Za="In the previous example, click on the <code>⇨</code> button without entering a number, and see that <code>0</code> is used by default. Do the same thing in this example, and see that <code>10</code> is used by default.",Hn,G,ns="Open in Online Editor",Zn,Zt,Bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,na,Vs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,tt,ta,qs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,aa,In,ts="<code>onChange()</code> - Handling the entered number",sa,Tn,as="Use the configuration method <code>onChange()</code> to tell the <code>EnterNumber</code> component which method to call to handle the entered number. This method will be called each time the user makes a change in the <code>EnterNumber</code> component, such as:",ea,Sn,ss="<li>Writes a digit in it</li> <li>Removes a digit from it</li> <li>Paste a number in it</li> <li>Removes all digits in it</li> <li>Etc.</li>",pa,Gn,es="Your method will also be passed the entered number as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",oa,h,jn,ps="Example",Mn,j,os="Open in Online Editor",at,la,zs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	doubledAge <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,st,ca,Ds=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,et,ua,Ks=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old! Your doubled age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>doubledAge<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ia;return U=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}`,x:150,y:200}]}}}),Y=new $({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:150,y:200}]}}}),xn=new $({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:1050,y:200}]}}}),bn=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),Hn=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),Mn=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),{c(){b=s("h1"),b.innerHTML=ra,ut=u(),z=s("p"),z.innerHTML=ka,it=u(),B=s("div"),B.innerHTML=da,rt=u(),D=s("h2"),D.textContent=ga,kt=u(),K=s("p"),K.innerHTML=ma,dt=u(),x=s("div"),Q=s("div"),Q.textContent=fa,Ln=s("p"),Ln.innerHTML=ha,M(U.$$.fragment),C=s("a"),C.textContent=xa,Rn=s("pre"),gt=new k(!1),mt=u(),X=s("h2"),X.innerHTML=wa,ft=u(),J=s("p"),J.innerHTML=va,ht=u(),y=s("div"),F=s("div"),F.textContent=Pa,M(Y.$$.fragment),_=s("a"),_.textContent=ya,On=s("pre"),xt=new k(!1),wt=u(),W=s("h2"),W.innerHTML=ba,vt=u(),Z=s("p"),Z.innerHTML=Ca,Pt=u(),w=s("div"),nn=s("div"),nn.textContent=_a,$n=s("p"),$n.textContent=Ea,M(tn.$$.fragment),E=s("a"),E.textContent=Ha,Bn=s("pre"),yt=new k(!1),bt=u(),an=s("h2"),an.innerHTML=Ia,Ct=u(),sn=s("p"),sn.innerHTML=Ta,_t=u(),en=s("ul"),en.innerHTML=Sa,Et=u(),pn=s("p"),pn.textContent=Ga,Ht=u(),v=s("div"),on=s("div"),on.textContent=ja,Vn=s("p"),Vn.textContent=Ma,M(ln.$$.fragment),H=s("a"),H.textContent=Aa,qn=s("pre"),It=new k(!1),Tt=u(),P=s("div"),cn=s("div"),cn.textContent=Na,zn=s("p"),zn.textContent=La,M(un.$$.fragment),I=s("a"),I.textContent=Ra,Dn=s("pre"),St=new k(!1),Gt=u(),rn=s("h2"),rn.innerHTML=Oa,jt=u(),kn=s("p"),kn.textContent=$a,Mt=u(),dn=s("ul"),dn.innerHTML=Ba,At=u(),gn=s("p"),gn.innerHTML=Va,Nt=u(),mn=s("p"),mn.textContent=qa,Lt=u(),fn=s("pre"),Rt=new k(!1),Ot=u(),g=s("div"),hn=s("div"),hn.textContent=za,M(xn.$$.fragment),T=s("a"),T.textContent=Da,Kn=s("pre"),$t=new k(!1),Qn=s("pre"),Bt=new k(!1),Un=s("pre"),Vt=new k(!1),Xn=s("pre"),qt=new k(!1),zt=u(),wn=s("h2"),wn.innerHTML=Ka,Dt=u(),vn=s("p"),vn.innerHTML=Qa,Kt=u(),Pn=s("ol"),Pn.innerHTML=Ua,Qt=u(),f=s("div"),yn=s("div"),yn.textContent=Xa,M(bn.$$.fragment),S=s("a"),S.textContent=Ja,Jn=s("pre"),Ut=new k(!1),Fn=s("pre"),Xt=new k(!1),Yn=s("pre"),Jt=new k(!1),Ft=u(),Cn=s("h2"),Cn.innerHTML=Fa,Yt=u(),_n=s("p"),_n.innerHTML=Ya,Wt=u(),m=s("div"),En=s("div"),En.textContent=Wa,Wn=s("p"),Wn.innerHTML=Za,M(Hn.$$.fragment),G=s("a"),G.textContent=ns,Zn=s("pre"),Zt=new k(!1),nt=s("pre"),na=new k(!1),tt=s("pre"),ta=new k(!1),aa=u(),In=s("h2"),In.innerHTML=ts,sa=u(),Tn=s("p"),Tn.innerHTML=as,ea=u(),Sn=s("ul"),Sn.innerHTML=ss,pa=u(),Gn=s("p"),Gn.innerHTML=es,oa=u(),h=s("div"),jn=s("div"),jn.textContent=ps,M(Mn.$$.fragment),j=s("a"),j.textContent=os,at=s("pre"),la=new k(!1),st=s("pre"),ca=new k(!1),et=s("pre"),ua=new k(!1),this.h()},l(n){b=e(n,"H1",{"data-svelte-h":!0}),l(b)!=="svelte-1dpshw6"&&(b.innerHTML=ra),ut=i(n),z=e(n,"P",{"data-svelte-h":!0}),l(z)!=="svelte-1r4vkdp"&&(z.innerHTML=ka),it=i(n),B=e(n,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1swqf8d"&&(B.innerHTML=da),rt=i(n),D=e(n,"H2",{"data-svelte-h":!0}),l(D)!=="svelte-1ukekoe"&&(D.textContent=ga),kt=i(n),K=e(n,"P",{"data-svelte-h":!0}),l(K)!=="svelte-zgh4nz"&&(K.innerHTML=ma),dt=i(n),x=e(n,"DIV",{class:!0});var a=r(x);Q=e(a,"DIV",{class:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1llzxwj"&&(Q.textContent=fa),Ln=e(a,"P",{"data-svelte-h":!0}),l(Ln)!=="svelte-iqlwcv"&&(Ln.innerHTML=ha),A(U.$$.fragment,a),C=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-n4j19o"&&(C.textContent=xa),Rn=e(a,"PRE",{class:!0});var ls=r(Rn);gt=d(ls,!1),ls.forEach(t),a.forEach(t),mt=i(n),X=e(n,"H2",{"data-svelte-h":!0}),l(X)!=="svelte-1rh7zam"&&(X.innerHTML=wa),ft=i(n),J=e(n,"P",{"data-svelte-h":!0}),l(J)!=="svelte-qgek2q"&&(J.innerHTML=va),ht=i(n),y=e(n,"DIV",{class:!0});var ct=r(y);F=e(ct,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1llzxwj"&&(F.textContent=Pa),A(Y.$$.fragment,ct),_=e(ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-impg0e"&&(_.textContent=ya),On=e(ct,"PRE",{class:!0});var cs=r(On);xt=d(cs,!1),cs.forEach(t),ct.forEach(t),wt=i(n),W=e(n,"H2",{"data-svelte-h":!0}),l(W)!=="svelte-k11loz"&&(W.innerHTML=ba),vt=i(n),Z=e(n,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-10h95k6"&&(Z.innerHTML=Ca),Pt=i(n),w=e(n,"DIV",{class:!0});var pt=r(w);nn=e(pt,"DIV",{class:!0,"data-svelte-h":!0}),l(nn)!=="svelte-1llzxwj"&&(nn.textContent=_a),$n=e(pt,"P",{"data-svelte-h":!0}),l($n)!=="svelte-vh6itt"&&($n.textContent=Ea),A(tn.$$.fragment,pt),E=e(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-u95npc"&&(E.textContent=Ha),Bn=e(pt,"PRE",{class:!0});var us=r(Bn);yt=d(us,!1),us.forEach(t),pt.forEach(t),bt=i(n),an=e(n,"H2",{"data-svelte-h":!0}),l(an)!=="svelte-sli74j"&&(an.innerHTML=Ia),Ct=i(n),sn=e(n,"P",{"data-svelte-h":!0}),l(sn)!=="svelte-1d3pone"&&(sn.innerHTML=Ta),_t=i(n),en=e(n,"UL",{"data-svelte-h":!0}),l(en)!=="svelte-1ptcnjk"&&(en.innerHTML=Sa),Et=i(n),pn=e(n,"P",{"data-svelte-h":!0}),l(pn)!=="svelte-nywefv"&&(pn.textContent=Ga),Ht=i(n),v=e(n,"DIV",{class:!0});var ot=r(v);on=e(ot,"DIV",{class:!0,"data-svelte-h":!0}),l(on)!=="svelte-1llzxwj"&&(on.textContent=ja),Vn=e(ot,"P",{"data-svelte-h":!0}),l(Vn)!=="svelte-15y36jm"&&(Vn.textContent=Ma),A(ln.$$.fragment,ot),H=e(ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(H)!=="svelte-fao8xi"&&(H.textContent=Aa),qn=e(ot,"PRE",{class:!0});var is=r(qn);It=d(is,!1),is.forEach(t),ot.forEach(t),Tt=i(n),P=e(n,"DIV",{class:!0});var lt=r(P);cn=e(lt,"DIV",{class:!0,"data-svelte-h":!0}),l(cn)!=="svelte-1llzxwj"&&(cn.textContent=Na),zn=e(lt,"P",{"data-svelte-h":!0}),l(zn)!=="svelte-zv68fv"&&(zn.textContent=La),A(un.$$.fragment,lt),I=e(lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(I)!=="svelte-sdz9t7"&&(I.textContent=Ra),Dn=e(lt,"PRE",{class:!0});var rs=r(Dn);St=d(rs,!1),rs.forEach(t),lt.forEach(t),Gt=i(n),rn=e(n,"H2",{"data-svelte-h":!0}),l(rn)!=="svelte-19ebt5j"&&(rn.innerHTML=Oa),jt=i(n),kn=e(n,"P",{"data-svelte-h":!0}),l(kn)!=="svelte-q2ln6m"&&(kn.textContent=$a),Mt=i(n),dn=e(n,"UL",{"data-svelte-h":!0}),l(dn)!=="svelte-1hwnfm7"&&(dn.innerHTML=Ba),At=i(n),gn=e(n,"P",{"data-svelte-h":!0}),l(gn)!=="svelte-psw8xk"&&(gn.innerHTML=Va),Nt=i(n),mn=e(n,"P",{"data-svelte-h":!0}),l(mn)!=="svelte-11lpom8"&&(mn.textContent=qa),Lt=i(n),fn=e(n,"PRE",{class:!0});var ks=r(fn);Rt=d(ks,!1),ks.forEach(t),Ot=i(n),g=e(n,"DIV",{class:!0});var V=r(g);hn=e(V,"DIV",{class:!0,"data-svelte-h":!0}),l(hn)!=="svelte-1llzxwj"&&(hn.textContent=za),A(xn.$$.fragment,V),T=e(V,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-1vw7k6y"&&(T.textContent=Da),Kn=e(V,"PRE",{class:!0});var ds=r(Kn);$t=d(ds,!1),ds.forEach(t),Qn=e(V,"PRE",{class:!0});var gs=r(Qn);Bt=d(gs,!1),gs.forEach(t),Un=e(V,"PRE",{class:!0});var ms=r(Un);Vt=d(ms,!1),ms.forEach(t),Xn=e(V,"PRE",{class:!0});var fs=r(Xn);qt=d(fs,!1),fs.forEach(t),V.forEach(t),zt=i(n),wn=e(n,"H2",{"data-svelte-h":!0}),l(wn)!=="svelte-xzw4ex"&&(wn.innerHTML=Ka),Dt=i(n),vn=e(n,"P",{"data-svelte-h":!0}),l(vn)!=="svelte-wcl02x"&&(vn.innerHTML=Qa),Kt=i(n),Pn=e(n,"OL",{"data-svelte-h":!0}),l(Pn)!=="svelte-17rhbe3"&&(Pn.innerHTML=Ua),Qt=i(n),f=e(n,"DIV",{class:!0});var An=r(f);yn=e(An,"DIV",{class:!0,"data-svelte-h":!0}),l(yn)!=="svelte-1llzxwj"&&(yn.textContent=Xa),A(bn.$$.fragment,An),S=e(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-1nwiydo"&&(S.textContent=Ja),Jn=e(An,"PRE",{class:!0});var hs=r(Jn);Ut=d(hs,!1),hs.forEach(t),Fn=e(An,"PRE",{class:!0});var xs=r(Fn);Xt=d(xs,!1),xs.forEach(t),Yn=e(An,"PRE",{class:!0});var ws=r(Yn);Jt=d(ws,!1),ws.forEach(t),An.forEach(t),Ft=i(n),Cn=e(n,"H2",{"data-svelte-h":!0}),l(Cn)!=="svelte-f924tf"&&(Cn.innerHTML=Fa),Yt=i(n),_n=e(n,"P",{"data-svelte-h":!0}),l(_n)!=="svelte-1iqciy4"&&(_n.innerHTML=Ya),Wt=i(n),m=e(n,"DIV",{class:!0});var q=r(m);En=e(q,"DIV",{class:!0,"data-svelte-h":!0}),l(En)!=="svelte-1llzxwj"&&(En.textContent=Wa),Wn=e(q,"P",{"data-svelte-h":!0}),l(Wn)!=="svelte-grsfym"&&(Wn.innerHTML=Za),A(Hn.$$.fragment,q),G=e(q,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(G)!=="svelte-flowns"&&(G.textContent=ns),Zn=e(q,"PRE",{class:!0});var vs=r(Zn);Zt=d(vs,!1),vs.forEach(t),nt=e(q,"PRE",{class:!0});var Ps=r(nt);na=d(Ps,!1),Ps.forEach(t),tt=e(q,"PRE",{class:!0});var ys=r(tt);ta=d(ys,!1),ys.forEach(t),q.forEach(t),aa=i(n),In=e(n,"H2",{"data-svelte-h":!0}),l(In)!=="svelte-1mxkyq8"&&(In.innerHTML=ts),sa=i(n),Tn=e(n,"P",{"data-svelte-h":!0}),l(Tn)!=="svelte-g4gtim"&&(Tn.innerHTML=as),ea=i(n),Sn=e(n,"UL",{"data-svelte-h":!0}),l(Sn)!=="svelte-1rktz5a"&&(Sn.innerHTML=ss),pa=i(n),Gn=e(n,"P",{"data-svelte-h":!0}),l(Gn)!=="svelte-1q1vg9e"&&(Gn.innerHTML=es),oa=i(n),h=e(n,"DIV",{class:!0});var Nn=r(h);jn=e(Nn,"DIV",{class:!0,"data-svelte-h":!0}),l(jn)!=="svelte-1llzxwj"&&(jn.textContent=ps),A(Mn.$$.fragment,Nn),j=e(Nn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(j)!=="svelte-puqn6x"&&(j.textContent=os),at=e(Nn,"PRE",{class:!0});var bs=r(at);la=d(bs,!1),bs.forEach(t),st=e(Nn,"PRE",{class:!0});var Cs=r(st);ca=d(Cs,!1),Cs.forEach(t),et=e(Nn,"PRE",{class:!0});var _s=r(et);ua=d(_s,!1),_s.forEach(t),Nn.forEach(t),this.h()},h(){o(B,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNpdjbEKwjAURX8l3EkhQxVcsjmIOCiCo3GIzVMKmobkFVpC/t1WIajbPffx7kkw3kMl1K0lKNQPE6PYD2vvBfVMzkYx5qSd5jqQYTqxCXw0d5rN363mQNwFJ8pharN2GVnCjxyhzgmNhVpI3NqHpbD7wI+0/BfxBF/mbdf8OzeOKRy655VCsUr04/iqkhigllWVL/kFHMtROw=="),o(C,"title","Open in our Online Editor"),gt.a=null,o(Rn,"class","language-js"),o(x,"class","remark-container tip"),o(F,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjrEKwjAQhl8l3NRCkLbiks1BxEERHI1DbE4p1DQkV2gJeXfbCkGd7r7/OL4/gLIWRIC60wgC6lZ5z47j1lqGA6HRnk17kEZS7VARXkg5OqsnZvmSSnJIvTMsHeY0ShMhcrATexDXAI0GUXJ4dK1Gd/jAjzT9J/EMX+Z93/w7d4bQnfrXHd3KLCMrq3WeGnAYJtGm4DCCqIoi3uIbCFxU2Q=="),o(_,"title","Open in our Online Editor"),xt.a=null,o(On,"class","language-js"),o(y,"class","remark-container tip"),o(nn,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjsEKwjAQRH8l7KmFIFXwkpsHEQ+K4NEIjcmqhZqGJIWWkH83rRDU284Ms28CCGOABZCdQmAgW+EcOYwbYwgOHrVyJN2Ba+6lReHx7IX1J/HAopxd7i363mqSg8mNXEeIFEzSDtglQKOALSncu1ah3X/EDzT3M3gSX+Rd3/wzt9qjPfavG9qFaYXE5/y+qOeApH5d5jkUhkRdVxRGYKuqitf4BrNwWkg="),o(E,"title","Open in our Online Editor"),yt.a=null,o(Bn,"class","language-js"),o(w,"class","remark-container tip"),o(on,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdjsEKwjAQRH8l7KmFUqLgJTcPIh4UwaMVGpNVC20aki20lPy7bYWg3nZmmH0zgrQWxAiq1QgCVC29Z8dhay3DntBoz6Z7LExByqEkvJB0dJZPTNLFLcghdc6wGMxuKEyAkIGdtAdxHaHSIFYZPNpaozt8xA809iN4Fl/kfVf9M3eG0J265o4ut7VU+FreJ+USsKlfprlGVTWy9glP47QM+mnBhmcwgFhzHm7hDRWaXjk="),o(H,"title","Open in our Online Editor"),It.a=null,o(qn,"class","language-js"),o(v,"class","remark-container tip"),o(cn,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNpdjsEKwjAQRH8l7KmFIrXgJTcPIh4UwaMRGpNVC2kaki20lPy7bYWi3nZmmH0zgHQO+ACq0QgclJEhsGO/dY5hR2h1YOM9CCtIeZSEF5KezvKJSTq7gjxS6y1bgsmNwkaIGbhRB+DXASoNfJ3BozEa/eEjfqBLfwFP4ou8b6t/5s4S+lNb39GvnJEKX/P7pJwDNvbLdKVRVbU0ISnSZVoG3bhgk2fQAy/yPN7iGxXWXjs="),o(I,"title","Open in our Online Editor"),St.a=null,o(Dn,"class","language-js"),o(P,"class","remark-container tip"),Rt.a=null,o(fn,"class","language-js"),o(hn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtkktu2zAQhq8y4UoCCMNKU7TQpnCKwDH6RJtdVcC0OJaIyKRKDasIhta5Ss/Vk5SKEsWuY6+0IufB+efjzJaJsmTxlqVGIotZWoiqgk/NrCwB7wi1rMDft4lOKLUoCL+TsPRVZBiED96ELJKzGoZA520T3bKWs9LbFYt/bJmSLI44W5tCol30xp7o8H4Q7owd5blT/2t+M3U1SXNVSIs66EMJ3fgCk8yaOojCCXkjWF6bGjZCN9CgsBX4JkBYhMa4d8uQPz18bwq30S9UTOhKE9rPbrNC++xMBpk9Xwe9WH80NdpgymGhf4tCyVmGHdBLqVe/nCi61A9KHsu5RKrRt+SzorcnMoOZdAUdq3Ktstx3Fb0+7Is/p186IqMfv+7v/Z+dL3q6hcOUObvzw/QFWcPi8+m05f2wz08Ne197nIn37d7kgqCrqSpQvcpkp/89tLmBlUhvl2H/c8MGHoG8OIR8dQrycUZj0s1yDpSj7jb3YYMFVKSKwp+3HhTmxkhYG9vFzyAORyJ/c0h+cYp82MEx2b94dotViSkBmY6Qw0plkLnmbCTOaLoD+rP9B7eCzNg="),o(T,"title","Open in our Online Editor"),$t.a=null,o(Kn,"class","language-js"),Bt.a=null,o(Qn,"class","language-js"),Vt.a=null,o(Un,"class","language-js"),qt.a=null,o(Xn,"class","language-js"),o(g,"class","remark-container tip"),o(yn,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNqtkc9Kw0AQxl9lHTwksIa26CUgYkWqB0XUmxGyJmMbTHfDZkIawp59FZ/LJ3HTNH9axJOHhZ2ZnW+++W0NIsvAryFSMYIPUSrynN1Vl1nGcEMo45zZex3IgJojlsjO2cm0iyONgvCJhKYHW3Pc9iVppEJL1hearGmbDBgOmc3l4L/UkMTgTzm8qzRGfdsGe2Z6jd5QE9TD9EWRHM59VGXuRaskjTVKpy0F9GwFvKVWpTN1PbKBE96okq2FrFiFQufMmmBCI6tUcRG6vGu8Ummxlr8oBnQtCfV9sX5D3UvnpDQ6grPQGg1dr1nWWWhESuSyMT8oBzQviJTc2fn+/BqNdduLu4NngMPG8jmbcKjAn00mhrf8Zn/xGw/+H4Q7dJimqiHFypXaUjuuhWd1zQDzaLTN3qJzEX0wUsPndpj6RNd4sP3paPtX8wPDWPoo"),o(S,"title","Open in our Online Editor"),Ut.a=null,o(Jn,"class","language-js"),Xt.a=null,o(Fn,"class","language-js"),Jt.a=null,o(Yn,"class","language-js"),o(f,"class","remark-container tip"),o(En,"class","remark-container__title"),o(G,"target","_blank"),o(G,"href","/editor#eNqtkc9KxDAQxl8lDh5aqKVd9FIQcUVWD4qoNys0trO7xW5S0indUnr2VXwun8TUbP/sIp48BDIzmZnv+6UBnucQNBDLBCGAOONFwe7qyzxnuCUUScH0vQlFSN3hK2Tn7MTv41ghJ3wiruhB1yzbvCSFVCrBhkKXbU1TC60Duc4VELw0kCYQ+A4sZZagujXBnphhxiCoC5px+6JMD/c+yqpw43WaJQqFZUohPesB7krJyvJtl3RgRTeyYhsualYjVwXTIhhXyGpZXkS20zdeyazciF8mhnQtCNV9uXlDNYxOcMnLjEzW8j3bLUgqtLjDIi09st3OvrVQiJSKVWdn3BXSvCSSYifw6+NzIsQ2F3uHswUHtprYmedADcHM81rHEJ39RXS6+H+g7mBilsmOHavW8ofjccNdPbcd8R5N3OwZnfP4nZEcv7vHNCT6xgP3pxP3r+03bqAAZQ=="),o(G,"title","Open in our Online Editor"),Zt.a=null,o(Zn,"class","language-js"),na.a=null,o(nt,"class","language-js"),ta.a=null,o(tt,"class","language-js"),o(m,"class","remark-container tip"),o(jn,"class","remark-container__title"),o(j,"target","_blank"),o(j,"href","/editor#eNqdks9Kw0AQxl9lXDwkEkNb9BIQaYtUD4qoFzFCt8nYBtPdsJnQhpCzr+Jz+SRu/idVPHgIuzszO/vN90vGeBQxJ2Oe9JE5zAt5HMNtOo0iwD2h8GPQ+8wVLhUfXyNcwOm42PsyWYXoT6vQpCnxFHLCR+KK7nW5YVaXSSElSkCbKKJ5dSlnucUiHYuZ85KxwGfO2GJvMvRR3VSHgb62R6uxOGRDBYskOHz7Qe5i29sEoa9QGFXKpSfdxF4ruTPGpk36YCyv5Q62XKSQIlcxaCHAFUIqk8ulaTUX5zJMtuKXji5dCUJ1l2xXqNrWUsw3XGhHIluvfohlUWmgaRfTGwuFSIFYF9N0z7g0S4ikqLV9fXz2NDQ7s2enS4f9Deyeqi3hdsWyyzTxAdcuDScwGTCz2F6jOR9ZLGXOZDTKrQrd5C90/RF/0vsPuZoYhqEsAMFuI0tYx1k5Yt4xPIJnmSio54NCQRCXdd3Iud0zd+D7jHvvQLL7+ZY1tTZwyKK26Kxn0Wv+DaVuOwM="),o(j,"title","Open in our Online Editor"),la.a=null,o(at,"class","language-js"),ca.a=null,o(st,"class","language-js"),ua.a=null,o(et,"class","language-js"),o(h,"class","remark-container tip")},m(n,a){p(n,b,a),p(n,ut,a),p(n,z,a),p(n,it,a),p(n,B,a),p(n,rt,a),p(n,D,a),p(n,kt,a),p(n,K,a),p(n,dt,a),p(n,x,a),c(x,Q),c(x,Ln),N(U,x,null),c(x,C),c(x,Rn),gt.m(Hs,Rn),p(n,mt,a),p(n,X,a),p(n,ft,a),p(n,J,a),p(n,ht,a),p(n,y,a),c(y,F),N(Y,y,null),c(y,_),c(y,On),xt.m(Is,On),p(n,wt,a),p(n,W,a),p(n,vt,a),p(n,Z,a),p(n,Pt,a),p(n,w,a),c(w,nn),c(w,$n),N(tn,w,null),c(w,E),c(w,Bn),yt.m(Ts,Bn),p(n,bt,a),p(n,an,a),p(n,Ct,a),p(n,sn,a),p(n,_t,a),p(n,en,a),p(n,Et,a),p(n,pn,a),p(n,Ht,a),p(n,v,a),c(v,on),c(v,Vn),N(ln,v,null),c(v,H),c(v,qn),It.m(Ss,qn),p(n,Tt,a),p(n,P,a),c(P,cn),c(P,zn),N(un,P,null),c(P,I),c(P,Dn),St.m(Gs,Dn),p(n,Gt,a),p(n,rn,a),p(n,jt,a),p(n,kn,a),p(n,Mt,a),p(n,dn,a),p(n,At,a),p(n,gn,a),p(n,Nt,a),p(n,mn,a),p(n,Lt,a),p(n,fn,a),Rt.m(js,fn),p(n,Ot,a),p(n,g,a),c(g,hn),N(xn,g,null),c(g,T),c(g,Kn),$t.m(Ms,Kn),c(g,Qn),Bt.m(As,Qn),c(g,Un),Vt.m(Ns,Un),c(g,Xn),qt.m(Ls,Xn),p(n,zt,a),p(n,wn,a),p(n,Dt,a),p(n,vn,a),p(n,Kt,a),p(n,Pn,a),p(n,Qt,a),p(n,f,a),c(f,yn),N(bn,f,null),c(f,S),c(f,Jn),Ut.m(Rs,Jn),c(f,Fn),Xt.m(Os,Fn),c(f,Yn),Jt.m($s,Yn),p(n,Ft,a),p(n,Cn,a),p(n,Yt,a),p(n,_n,a),p(n,Wt,a),p(n,m,a),c(m,En),c(m,Wn),N(Hn,m,null),c(m,G),c(m,Zn),Zt.m(Bs,Zn),c(m,nt),na.m(Vs,nt),c(m,tt),ta.m(qs,tt),p(n,aa,a),p(n,In,a),p(n,sa,a),p(n,Tn,a),p(n,ea,a),p(n,Sn,a),p(n,pa,a),p(n,Gn,a),p(n,oa,a),p(n,h,a),c(h,jn),N(Mn,h,null),c(h,j),c(h,at),la.m(zs,at),c(h,st),ca.m(Ds,st),c(h,et),ua.m(Ks,et),ia=!0},p:Us,i(n){ia||(L(U.$$.fragment,n),L(Y.$$.fragment,n),L(tn.$$.fragment,n),L(ln.$$.fragment,n),L(un.$$.fragment,n),L(xn.$$.fragment,n),L(bn.$$.fragment,n),L(Hn.$$.fragment,n),L(Mn.$$.fragment,n),ia=!0)},o(n){R(U.$$.fragment,n),R(Y.$$.fragment,n),R(tn.$$.fragment,n),R(ln.$$.fragment,n),R(un.$$.fragment,n),R(xn.$$.fragment,n),R(bn.$$.fragment,n),R(Hn.$$.fragment,n),R(Mn.$$.fragment,n),ia=!1},d(n){n&&(t(b),t(ut),t(z),t(it),t(B),t(rt),t(D),t(kt),t(K),t(dt),t(x),t(mt),t(X),t(ft),t(J),t(ht),t(y),t(wt),t(W),t(vt),t(Z),t(Pt),t(w),t(bt),t(an),t(Ct),t(sn),t(_t),t(en),t(Et),t(pn),t(Ht),t(v),t(Tt),t(P),t(Gt),t(rn),t(jt),t(kn),t(Mt),t(dn),t(At),t(gn),t(Nt),t(mn),t(Lt),t(fn),t(Ot),t(g),t(zt),t(wn),t(Dt),t(vn),t(Kt),t(Pn),t(Qt),t(f),t(Ft),t(Cn),t(Yt),t(_n),t(Wt),t(m),t(aa),t(In),t(sa),t(Tn),t(ea),t(Sn),t(pa),t(Gn),t(oa),t(h)),O(U),O(Y),O(tn),O(ln),O(un),O(xn),O(bn),O(Hn),O(Mn)}}}class ne extends Xs{constructor(b){super(),Js(this,b,null,Fs,Qs,{})}}export{ne as component};
