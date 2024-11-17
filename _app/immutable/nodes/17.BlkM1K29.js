import{s as Xs,n as Qs}from"../chunks/scheduler.B0TnBjPs.js";import{S as Us,i as Ws,e as s,s as u,c as G,H as k,a as e,g as l,b as i,d as r,f as M,n as d,h as t,o,j as p,p as c,m as N,t as L,k as R,l as $}from"../chunks/index.Cnh3HYw3.js";import{V as O}from"../chunks/ViewApp.BajIxHdc.js";function Zs(_s){let b,ra="<code>EnterNumber</code>",ut,V,ka="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",it,z,da='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterNumber</code> component. The <code>EnterNumber</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',rt,K,ga="Introduction",kt,B,ma="The <code>EnterNumber</code> component is a view in which the user can enter a number. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",dt,x,X,fa="Example",Ln,ha="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",Q,C,xa="Open in Online Editor",Rn,gt,Is=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,mt,U,va="<code>number()</code> - Setting an initial number",ft,W,wa="Use the configuration method <code>number()</code> to give the <code>EnterNumber</code> component a number it will contain from the start.",ht,y,Z,Pa="Example",J,E,ya="Open in Online Editor",$n,xt,Hs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,vt,Y,ba="<code>placeholder()</code> - Setting a placeholder text",wt,F,Ca="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterNumber</code> component when no number is shown.",Pt,v,nn,Ea="Example",On,_a="Try typing some digits in this example, and you will see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.",tn,_,Ia="Open in Online Editor",zn,yt,js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,bt,an,Ha="<code>decimals()</code> - Setting maximum number of decimals",Ct,sn,ja="Use the configuration method <code>decimals()</code> to indicate how many decimals the entered number may contain. Pass it:",Et,en,Ta="<li><code>0</code> to allow no decimals, e.g. allow numbers like <code>123</code> and <code>55</code> (i.e. only integers)</li> <li><code>1</code> to allow at most 1 decimal, e.g. <code>123</code>, <code>123.4</code> and <code>0.6</code></li> <li><code>2</code> to allow at most 2 decimals, e.g. <code>123</code>, <code>123.4</code>, <code>123.45</code> and <code>1.23</code></li> <li>Etc.</li>",_t,pn,Sa="If you don't call this method, then there will be no upper limit on the number of decimals that may be entered.",It,w,on,Aa="Example",Dn,Ga="Example where the user can only enter integers.",ln,I,Ma="Open in Online Editor",qn,Ht,Ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,jt,P,cn,Na="Example",Vn,La="Example where the user can enter at most 2 decimals.",un,H,Ra="Open in Online Editor",Kn,Tt,Ss=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,St,rn,$a="<code>page()</code>, <code>pageIfEqual()</code>, <code>pageIfLower()</code>, <code>pageIfHigher()</code> &amp; <code>pageIfBetween()</code> - Going to next page",At,kn,Oa="There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:",Gt,dn,za="<li><code>pageIfEqual(number, page)</code></li> <li><code>pageIfLower(number, page)</code></li> <li><code>pageIfHigher(number, page)</code></li> <li><code>pageIfBetween(lowNumber, highNumber, page)</code></li>",Mt,gn,Da="These methods can be called multiple times. In addition to those, you can also use <code>page(page)</code> to specify the page the user should come to if the entered number isn&#39;t true for any of the previously mentioned configuration methods.",Nt,mn,qa="Example:",Lt,fn,Rt,As=`<code class="language-js">EnterNumber
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TwoPage<span class="token punctuation">)</span> <span class="token comment">// Go to TwoPage if the user enters 2.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> SixPage<span class="token punctuation">)</span> <span class="token comment">// Go to SixPage if the user enters 6.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> NegativePage<span class="token punctuation">)</span> <span class="token comment">// Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> HighPage<span class="token punctuation">)</span> <span class="token comment">// Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> MiddlePage<span class="token punctuation">)</span> <span class="token comment">// Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.</span>
	<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DefaultPage<span class="token punctuation">)</span> <span class="token comment">// Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.</span></code>`,$t,g,hn,Va="Example",xn,j,Ka="Open in Online Editor",Bn,Ot,Gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,Xn,zt,Ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidAgePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That age is invalid.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Qn,Dt,Ns=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">KidPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ah, then you are a still a kid. Good for you! :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Un,qt,Ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AdultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, respect to you, big guy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Vt,vn,Ba="<code>store()</code> - Storing the entered number",Kt,wn,Xa="Use the configuration method <code>store()</code> to store the number the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Bt,Pn,Qa="<li>The object in which the entered number should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered number should be stored</li>",Xt,f,yn,Ua="Example",bn,T,Wa="Open in Online Editor",Wn,Qt,Rs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,Ut,$s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jn,Wt,Os=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zt,Cn,Za="<code>defaultNumber()</code> - Specifying a default number",Jt,En,Ja="Use the configuration method <code>defaultNumber()</code> to specify which number that should be used if the user doesn&#39;t enter a number at all (i.e. if the user leaves the input field empty). If you don&#39;t call this configuration method, <code>0</code> will be used as the default number automatically.",Yt,m,_n,Ya="Example",Yn,Fa="In the previous example, click on the <code>⇨</code> button without entering a number, and see that <code>0</code> is used by default. Do the same thing in this example, and see that <code>10</code> is used by default.",In,S,ns="Open in Online Editor",Fn,Ft,zs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,na,Ds=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<span class="token punctuation">&#125;</span></code>`,aa,Hn,ts="<code>onChange()</code> - Handling the entered number",sa,jn,as="Use the configuration method <code>onChange()</code> to tell the <code>EnterNumber</code> component which method to call to handle the entered number. This method will be called each time the user makes a change in the <code>EnterNumber</code> component, such as:",ea,Tn,ss="<li>Writes a digit in it</li> <li>Removes a digit from it</li> <li>Paste a number in it</li> <li>Removes all digits in it</li> <li>Etc.</li>",pa,Sn,es="Your method will also be passed the entered number as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",oa,h,An,ps="Example",Gn,A,os="Open in Online Editor",at,la,Vs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	doubledAge <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,st,ca,Ks=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredAge</span><span class="token punctuation">(</span><span class="token parameter">enteredAge</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>age <span class="token operator">=</span> enteredAge
		a<span class="token punctuation">.</span>doubledAge <span class="token operator">=</span> enteredAge <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,et,ua,Bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old! Your doubled age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>doubledAge<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ia;return Q=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}`,x:150,y:200}]}}}),J=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.number(123)
	}
}`,x:150,y:200}]}}}),tn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`)
	}
}`,x:150,y:200}]}}}),ln=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(0)
	}
}`,x:150,y:200}]}}}),un=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(2)
	}
}`,x:150,y:200}]}}}),xn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
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
}`,x:1050,y:200}]}}}),bn=new O({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).store(a, \`age\`).page(GreetingPage),
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
}`,x:450,y:200}]}}}),In=new O({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).defaultNumber(10).store(a, \`age\`).page(GreetingPage),
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
}`,x:450,y:200}]}}}),Gn=new O({props:{project:{app:{code:`class MyApp extends App{
	
	age = -1
	doubledAge = -2
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.size(1).text(\`How many years old are you?\`),
			Columns.children(
				EnterNumber.size(1).onChange(p.handleEnteredAge).page(GreetingPage),
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
}`,x:450,y:200}]}}}),{c(){b=s("h1"),b.innerHTML=ra,ut=u(),V=s("p"),V.innerHTML=ka,it=u(),z=s("div"),z.innerHTML=da,rt=u(),K=s("h2"),K.textContent=ga,kt=u(),B=s("p"),B.innerHTML=ma,dt=u(),x=s("div"),X=s("div"),X.textContent=fa,Ln=s("p"),Ln.innerHTML=ha,G(Q.$$.fragment),C=s("a"),C.textContent=xa,Rn=s("pre"),gt=new k(!1),mt=u(),U=s("h2"),U.innerHTML=va,ft=u(),W=s("p"),W.innerHTML=wa,ht=u(),y=s("div"),Z=s("div"),Z.textContent=Pa,G(J.$$.fragment),E=s("a"),E.textContent=ya,$n=s("pre"),xt=new k(!1),vt=u(),Y=s("h2"),Y.innerHTML=ba,wt=u(),F=s("p"),F.innerHTML=Ca,Pt=u(),v=s("div"),nn=s("div"),nn.textContent=Ea,On=s("p"),On.textContent=_a,G(tn.$$.fragment),_=s("a"),_.textContent=Ia,zn=s("pre"),yt=new k(!1),bt=u(),an=s("h2"),an.innerHTML=Ha,Ct=u(),sn=s("p"),sn.innerHTML=ja,Et=u(),en=s("ul"),en.innerHTML=Ta,_t=u(),pn=s("p"),pn.textContent=Sa,It=u(),w=s("div"),on=s("div"),on.textContent=Aa,Dn=s("p"),Dn.textContent=Ga,G(ln.$$.fragment),I=s("a"),I.textContent=Ma,qn=s("pre"),Ht=new k(!1),jt=u(),P=s("div"),cn=s("div"),cn.textContent=Na,Vn=s("p"),Vn.textContent=La,G(un.$$.fragment),H=s("a"),H.textContent=Ra,Kn=s("pre"),Tt=new k(!1),St=u(),rn=s("h2"),rn.innerHTML=$a,At=u(),kn=s("p"),kn.textContent=Oa,Gt=u(),dn=s("ul"),dn.innerHTML=za,Mt=u(),gn=s("p"),gn.innerHTML=Da,Nt=u(),mn=s("p"),mn.textContent=qa,Lt=u(),fn=s("pre"),Rt=new k(!1),$t=u(),g=s("div"),hn=s("div"),hn.textContent=Va,G(xn.$$.fragment),j=s("a"),j.textContent=Ka,Bn=s("pre"),Ot=new k(!1),Xn=s("pre"),zt=new k(!1),Qn=s("pre"),Dt=new k(!1),Un=s("pre"),qt=new k(!1),Vt=u(),vn=s("h2"),vn.innerHTML=Ba,Kt=u(),wn=s("p"),wn.innerHTML=Xa,Bt=u(),Pn=s("ol"),Pn.innerHTML=Qa,Xt=u(),f=s("div"),yn=s("div"),yn.textContent=Ua,G(bn.$$.fragment),T=s("a"),T.textContent=Wa,Wn=s("pre"),Qt=new k(!1),Zn=s("pre"),Ut=new k(!1),Jn=s("pre"),Wt=new k(!1),Zt=u(),Cn=s("h2"),Cn.innerHTML=Za,Jt=u(),En=s("p"),En.innerHTML=Ja,Yt=u(),m=s("div"),_n=s("div"),_n.textContent=Ya,Yn=s("p"),Yn.innerHTML=Fa,G(In.$$.fragment),S=s("a"),S.textContent=ns,Fn=s("pre"),Ft=new k(!1),nt=s("pre"),na=new k(!1),tt=s("pre"),ta=new k(!1),aa=u(),Hn=s("h2"),Hn.innerHTML=ts,sa=u(),jn=s("p"),jn.innerHTML=as,ea=u(),Tn=s("ul"),Tn.innerHTML=ss,pa=u(),Sn=s("p"),Sn.innerHTML=es,oa=u(),h=s("div"),An=s("div"),An.textContent=ps,G(Gn.$$.fragment),A=s("a"),A.textContent=os,at=s("pre"),la=new k(!1),st=s("pre"),ca=new k(!1),et=s("pre"),ua=new k(!1),this.h()},l(n){b=e(n,"H1",{"data-svelte-h":!0}),l(b)!=="svelte-1dpshw6"&&(b.innerHTML=ra),ut=i(n),V=e(n,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1r4vkdp"&&(V.innerHTML=ka),it=i(n),z=e(n,"DIV",{class:!0,"data-svelte-h":!0}),l(z)!=="svelte-1swqf8d"&&(z.innerHTML=da),rt=i(n),K=e(n,"H2",{"data-svelte-h":!0}),l(K)!=="svelte-1ukekoe"&&(K.textContent=ga),kt=i(n),B=e(n,"P",{"data-svelte-h":!0}),l(B)!=="svelte-zgh4nz"&&(B.innerHTML=ma),dt=i(n),x=e(n,"DIV",{class:!0});var a=r(x);X=e(a,"DIV",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1llzxwj"&&(X.textContent=fa),Ln=e(a,"P",{"data-svelte-h":!0}),l(Ln)!=="svelte-iqlwcv"&&(Ln.innerHTML=ha),M(Q.$$.fragment,a),C=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-n4j19o"&&(C.textContent=xa),Rn=e(a,"PRE",{class:!0});var ls=r(Rn);gt=d(ls,!1),ls.forEach(t),a.forEach(t),mt=i(n),U=e(n,"H2",{"data-svelte-h":!0}),l(U)!=="svelte-1rh7zam"&&(U.innerHTML=va),ft=i(n),W=e(n,"P",{"data-svelte-h":!0}),l(W)!=="svelte-qgek2q"&&(W.innerHTML=wa),ht=i(n),y=e(n,"DIV",{class:!0});var ct=r(y);Z=e(ct,"DIV",{class:!0,"data-svelte-h":!0}),l(Z)!=="svelte-1llzxwj"&&(Z.textContent=Pa),M(J.$$.fragment,ct),E=e(ct,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-impg0e"&&(E.textContent=ya),$n=e(ct,"PRE",{class:!0});var cs=r($n);xt=d(cs,!1),cs.forEach(t),ct.forEach(t),vt=i(n),Y=e(n,"H2",{"data-svelte-h":!0}),l(Y)!=="svelte-k11loz"&&(Y.innerHTML=ba),wt=i(n),F=e(n,"P",{"data-svelte-h":!0}),l(F)!=="svelte-10h95k6"&&(F.innerHTML=Ca),Pt=i(n),v=e(n,"DIV",{class:!0});var pt=r(v);nn=e(pt,"DIV",{class:!0,"data-svelte-h":!0}),l(nn)!=="svelte-1llzxwj"&&(nn.textContent=Ea),On=e(pt,"P",{"data-svelte-h":!0}),l(On)!=="svelte-vh6itt"&&(On.textContent=_a),M(tn.$$.fragment,pt),_=e(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-u95npc"&&(_.textContent=Ia),zn=e(pt,"PRE",{class:!0});var us=r(zn);yt=d(us,!1),us.forEach(t),pt.forEach(t),bt=i(n),an=e(n,"H2",{"data-svelte-h":!0}),l(an)!=="svelte-sli74j"&&(an.innerHTML=Ha),Ct=i(n),sn=e(n,"P",{"data-svelte-h":!0}),l(sn)!=="svelte-1d3pone"&&(sn.innerHTML=ja),Et=i(n),en=e(n,"UL",{"data-svelte-h":!0}),l(en)!=="svelte-1ptcnjk"&&(en.innerHTML=Ta),_t=i(n),pn=e(n,"P",{"data-svelte-h":!0}),l(pn)!=="svelte-nywefv"&&(pn.textContent=Sa),It=i(n),w=e(n,"DIV",{class:!0});var ot=r(w);on=e(ot,"DIV",{class:!0,"data-svelte-h":!0}),l(on)!=="svelte-1llzxwj"&&(on.textContent=Aa),Dn=e(ot,"P",{"data-svelte-h":!0}),l(Dn)!=="svelte-15y36jm"&&(Dn.textContent=Ga),M(ln.$$.fragment,ot),I=e(ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(I)!=="svelte-fao8xi"&&(I.textContent=Ma),qn=e(ot,"PRE",{class:!0});var is=r(qn);Ht=d(is,!1),is.forEach(t),ot.forEach(t),jt=i(n),P=e(n,"DIV",{class:!0});var lt=r(P);cn=e(lt,"DIV",{class:!0,"data-svelte-h":!0}),l(cn)!=="svelte-1llzxwj"&&(cn.textContent=Na),Vn=e(lt,"P",{"data-svelte-h":!0}),l(Vn)!=="svelte-zv68fv"&&(Vn.textContent=La),M(un.$$.fragment,lt),H=e(lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(H)!=="svelte-sdz9t7"&&(H.textContent=Ra),Kn=e(lt,"PRE",{class:!0});var rs=r(Kn);Tt=d(rs,!1),rs.forEach(t),lt.forEach(t),St=i(n),rn=e(n,"H2",{"data-svelte-h":!0}),l(rn)!=="svelte-19ebt5j"&&(rn.innerHTML=$a),At=i(n),kn=e(n,"P",{"data-svelte-h":!0}),l(kn)!=="svelte-q2ln6m"&&(kn.textContent=Oa),Gt=i(n),dn=e(n,"UL",{"data-svelte-h":!0}),l(dn)!=="svelte-1hwnfm7"&&(dn.innerHTML=za),Mt=i(n),gn=e(n,"P",{"data-svelte-h":!0}),l(gn)!=="svelte-psw8xk"&&(gn.innerHTML=Da),Nt=i(n),mn=e(n,"P",{"data-svelte-h":!0}),l(mn)!=="svelte-11lpom8"&&(mn.textContent=qa),Lt=i(n),fn=e(n,"PRE",{class:!0});var ks=r(fn);Rt=d(ks,!1),ks.forEach(t),$t=i(n),g=e(n,"DIV",{class:!0});var D=r(g);hn=e(D,"DIV",{class:!0,"data-svelte-h":!0}),l(hn)!=="svelte-1llzxwj"&&(hn.textContent=Va),M(xn.$$.fragment,D),j=e(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(j)!=="svelte-1iafs1c"&&(j.textContent=Ka),Bn=e(D,"PRE",{class:!0});var ds=r(Bn);Ot=d(ds,!1),ds.forEach(t),Xn=e(D,"PRE",{class:!0});var gs=r(Xn);zt=d(gs,!1),gs.forEach(t),Qn=e(D,"PRE",{class:!0});var ms=r(Qn);Dt=d(ms,!1),ms.forEach(t),Un=e(D,"PRE",{class:!0});var fs=r(Un);qt=d(fs,!1),fs.forEach(t),D.forEach(t),Vt=i(n),vn=e(n,"H2",{"data-svelte-h":!0}),l(vn)!=="svelte-xzw4ex"&&(vn.innerHTML=Ba),Kt=i(n),wn=e(n,"P",{"data-svelte-h":!0}),l(wn)!=="svelte-wcl02x"&&(wn.innerHTML=Xa),Bt=i(n),Pn=e(n,"OL",{"data-svelte-h":!0}),l(Pn)!=="svelte-17rhbe3"&&(Pn.innerHTML=Qa),Xt=i(n),f=e(n,"DIV",{class:!0});var Mn=r(f);yn=e(Mn,"DIV",{class:!0,"data-svelte-h":!0}),l(yn)!=="svelte-1llzxwj"&&(yn.textContent=Ua),M(bn.$$.fragment,Mn),T=e(Mn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-wjdx7g"&&(T.textContent=Wa),Wn=e(Mn,"PRE",{class:!0});var hs=r(Wn);Qt=d(hs,!1),hs.forEach(t),Zn=e(Mn,"PRE",{class:!0});var xs=r(Zn);Ut=d(xs,!1),xs.forEach(t),Jn=e(Mn,"PRE",{class:!0});var vs=r(Jn);Wt=d(vs,!1),vs.forEach(t),Mn.forEach(t),Zt=i(n),Cn=e(n,"H2",{"data-svelte-h":!0}),l(Cn)!=="svelte-f924tf"&&(Cn.innerHTML=Za),Jt=i(n),En=e(n,"P",{"data-svelte-h":!0}),l(En)!=="svelte-1iqciy4"&&(En.innerHTML=Ja),Yt=i(n),m=e(n,"DIV",{class:!0});var q=r(m);_n=e(q,"DIV",{class:!0,"data-svelte-h":!0}),l(_n)!=="svelte-1llzxwj"&&(_n.textContent=Ya),Yn=e(q,"P",{"data-svelte-h":!0}),l(Yn)!=="svelte-grsfym"&&(Yn.innerHTML=Fa),M(In.$$.fragment,q),S=e(q,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-xlcx4u"&&(S.textContent=ns),Fn=e(q,"PRE",{class:!0});var ws=r(Fn);Ft=d(ws,!1),ws.forEach(t),nt=e(q,"PRE",{class:!0});var Ps=r(nt);na=d(Ps,!1),Ps.forEach(t),tt=e(q,"PRE",{class:!0});var ys=r(tt);ta=d(ys,!1),ys.forEach(t),q.forEach(t),aa=i(n),Hn=e(n,"H2",{"data-svelte-h":!0}),l(Hn)!=="svelte-1mxkyq8"&&(Hn.innerHTML=ts),sa=i(n),jn=e(n,"P",{"data-svelte-h":!0}),l(jn)!=="svelte-g4gtim"&&(jn.innerHTML=as),ea=i(n),Tn=e(n,"UL",{"data-svelte-h":!0}),l(Tn)!=="svelte-1rktz5a"&&(Tn.innerHTML=ss),pa=i(n),Sn=e(n,"P",{"data-svelte-h":!0}),l(Sn)!=="svelte-1q1vg9e"&&(Sn.innerHTML=es),oa=i(n),h=e(n,"DIV",{class:!0});var Nn=r(h);An=e(Nn,"DIV",{class:!0,"data-svelte-h":!0}),l(An)!=="svelte-1llzxwj"&&(An.textContent=ps),M(Gn.$$.fragment,Nn),A=e(Nn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(A)!=="svelte-o96ejn"&&(A.textContent=os),at=e(Nn,"PRE",{class:!0});var bs=r(at);la=d(bs,!1),bs.forEach(t),st=e(Nn,"PRE",{class:!0});var Cs=r(st);ca=d(Cs,!1),Cs.forEach(t),et=e(Nn,"PRE",{class:!0});var Es=r(et);ua=d(Es,!1),Es.forEach(t),Nn.forEach(t),this.h()},h(){o(z,"class","remark-container tip"),o(X,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNpdjbEKwjAURX8l3EkhQxVcsjmIOCiCo3GIzVMKmobkFVpC/t1WIajbPffx7kkw3kMl1K0lKNQPE6PYD2vvBfVMzkYx5qSd5jqQYTqxCXw0d5rN363mQNwFJ8pharN2GVnCjxyhzgmNhVpI3NqHpbD7wI+0/BfxBF/mbdf8OzeOKRy655VCsUr04/iqkhigllWVL/kFHMtROw=="),o(C,"title","Open in our Online Editor"),gt.a=null,o(Rn,"class","language-js"),o(x,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjrEKwjAQhl8l3NRCkLbiks1BxEERHI1DbE4p1DQkV2gJeXfbCkGd7r7/OL4/gLIWRIC60wgC6lZ5z47j1lqGA6HRnk17kEZS7VARXkg5OqsnZvmSSnJIvTMsHeY0ShMhcrATexDXAI0GUXJ4dK1Gd/jAjzT9J/EMX+Z93/w7d4bQnfrXHd3KLCMrq3WeGnAYJtGm4DCCqIoi3uIbCFxU2Q=="),o(E,"title","Open in our Online Editor"),xt.a=null,o($n,"class","language-js"),o(y,"class","remark-container tip"),o(nn,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjsEKwjAQRH8l7KmFIFXwkpsHEQ+K4NEIjcmqhZqGJIWWkH83rRDU284Ms28CCGOABZCdQmAgW+EcOYwbYwgOHrVyJN2Ba+6lReHx7IX1J/HAopxd7i363mqSg8mNXEeIFEzSDtglQKOALSncu1ah3X/EDzT3M3gSX+Rd3/wzt9qjPfavG9qFaYXE5/y+qOeApH5d5jkUhkRdVxRGYKuqitf4BrNwWkg="),o(_,"title","Open in our Online Editor"),yt.a=null,o(zn,"class","language-js"),o(v,"class","remark-container tip"),o(on,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNpdjsEKwjAQRH8l7KmFUqLgJTcPIh4UwaMVGpNVC20aki20lPy7bYWg3nZmmH0zgrQWxAiq1QgCVC29Z8dhay3DntBoz6Z7LExByqEkvJB0dJZPTNLFLcghdc6wGMxuKEyAkIGdtAdxHaHSIFYZPNpaozt8xA809iN4Fl/kfVf9M3eG0J265o4ut7VU+FreJ+USsKlfprlGVTWy9glP47QM+mnBhmcwgFhzHm7hDRWaXjk="),o(I,"title","Open in our Online Editor"),Ht.a=null,o(qn,"class","language-js"),o(w,"class","remark-container tip"),o(cn,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdjsEKwjAQRH8l7KmFIrXgJTcPIh4UwaMRGpNVC2kaki20lPy7bYWi3nZmmH0zgHQO+ACq0QgclJEhsGO/dY5hR2h1YOM9CCtIeZSEF5KezvKJSTq7gjxS6y1bgsmNwkaIGbhRB+DXASoNfJ3BozEa/eEjfqBLfwFP4ou8b6t/5s4S+lNb39GvnJEKX/P7pJwDNvbLdKVRVbU0ISnSZVoG3bhgk2fQAy/yPN7iGxXWXjs="),o(H,"title","Open in our Online Editor"),Tt.a=null,o(Kn,"class","language-js"),o(P,"class","remark-container tip"),Rt.a=null,o(fn,"class","language-js"),o(hn,"class","remark-container__title"),o(j,"target","_blank"),o(j,"href","/editor#eNqtks1u2zAMx1+F1ckGjCDuWmzwZUiHIg22bsPW2zwgis3YQhXJk+ilXuDzXqXP1SeZVLdusjQ5+STxQ/zzJ3LDeFWxZMMynSNLWCa5tXDdTKoK8I5Q5RbcfZOqlDKDnPA7cUNfeYFB+OhNySDVRkEf8N42VS1rI1Y527Lkx4aJnCVxxJZa5mhmnbEj2r/vhb2xpTytxf+a3/TajrJSyNygCrpQSjeuwMiKPxjE4YicEcyv9BpWXDXQIDcWXBPADUKj6/fzMHp++EHLeqVeqZjSpSI0n+vVAs2LM+1ldnweerb8pNdognEEM/WbS5FPCvRAr6Ve/qq59KkfRX4o5wJpja4llxW/O5IZTPJa0qEqV6IoXVfx+X5f0Uv6RU2k1dPXPfy93/qi51vYTzlid26YriBrWHI6HrdRN+zTY8Pe1R5m4l27NyUn8DWFBdGpjLb630Gbaljw7HYedj/Xb+AByLN9yDfHIJ9mNCTdpIyASlR+cx83mIMlIaU7bx0oTLXOYamNj59AEg5E/naf/OwYeb+DQ7J/cewGbYUZAWlPGMFCFFDUzclAnPF4C/Rn+w+XUMzQ"),o(j,"title","Open in our Online Editor"),Ot.a=null,o(Bn,"class","language-js"),zt.a=null,o(Xn,"class","language-js"),Dt.a=null,o(Qn,"class","language-js"),qt.a=null,o(Un,"class","language-js"),o(g,"class","remark-container tip"),o(yn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtkc9KxDAQxl8lDh5aqGV30UtBxBVZPSii3qzQ2I67xW5Skim7teTsq/hcPomp/buLePIQyMxkvvnmlwp4nkNQQSwThADijGvNbsrzPGe4JRSJZvZehSKk+vAlslN2NO3iWCEnfCCu6M7WHLd5SQqpUIL1hTprmiYDxoPc5jQETxWkCQRTD15llqC6boIdM71Gb6gOqmH6okj3597LjfbjVZolCoXTlEJ6tAK+Tt/Rmbo+2cCJruSGrbkoWYlcaWZNMK6QlbI4i1yva7yQWbEWvyiGdCkI1W2xfkHVS2uSCh3uscgajVy/XtZZKERKxbI2PyiHNC+IpGjtfH18jsa6zcVt4RnwYGv5nEw8KCGYTSbGa/jN/uI3Hvw/CFt0mGWyJsU2K/lD7bDivtU1A8yD0TY7i855/MZIDp/bYeoTXePe9sej7Z/NN7au+iA="),o(T,"title","Open in our Online Editor"),Qt.a=null,o(Wn,"class","language-js"),Ut.a=null,o(Zn,"class","language-js"),Wt.a=null,o(Jn,"class","language-js"),o(f,"class","remark-container tip"),o(_n,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNqtkc9Kw0AQxl9lHTwkEENS9BIQsSLVgyLqzRSyJtM2mO6G3QltDDn7Kj6XT+LGNH9axJOHhZ2ZnZnv+20FPM8hqCCWCUIAcca1ZnflZZ4z3BKKRDNzr0IRUnP4Etk5O/G7OFbICZ+IK3owNctuX5JCKpRgfaHJ1m1TDbUDuclpCF4qSBMIfAcWMktQ3bbBnph+Ri+oCaph+6xID/c+yo1241WaJQqF1ZZCejYDXJ2+o+XbLpnAim7khq25KFmJXGlmRDCukJWyuIhsp2u8klmxFr9MDOlaEKr7Yv2Kqh+d4IIXGbVZy/dsV5NUaHGHRUZ6ZLuNfWumECkVy8bOsCukaUEkxU7g18fnSIjdXuwdzhoc2BpiZ54DJQQTz6udlujkL6Ljxf8DdQcTs0w27NhmJX84HlfcNXPrAe/RyM2e0SmP3xjJ4bs7TH2iazxwfzpyP6+/AWFmAF0="),o(S,"title","Open in our Online Editor"),Ft.a=null,o(Fn,"class","language-js"),na.a=null,o(nt,"class","language-js"),ta.a=null,o(tt,"class","language-js"),o(m,"class","remark-container tip"),o(An,"class","remark-container__title"),o(A,"target","_blank"),o(A,"href","/editor#eNqdks9Og0AQxl9l3HgAg6Rt9EJiTNuY6kFj1IsRk64wtkS6S5YhLRLOvorP5ZO4/IdqPHgguzszO/vN9yNjPIqYkzFP+sgc5oU8juE6nUYR4I5Q+DHofeYKl4qPrxDO4Hhc7H2ZvIToT6vQpCnxFHLCe+KKbnW5YVaXSSElSkCbKKJ5dSlnucUiHYuZ85SxwGfO2GKvMvRRXVWHgb62R6uxOGRDBYsk2H/7Tm5j21sHoa9QGFXKpQfdxI6DdzTGpk36YCwv5RY2XKSQIlcxaCHAFUIqk/OlaTUX5zJMNuKXji5dCEJ1k2xeULWtpZivudCORLZe/RDLotJA0y6mNxYKkQKxKqbpnnFplhBJUWv7+vjsaWh2Zs9Ol/b7G9g9VVvC7Ypll2niA65dGo5gMmBmsZ1GczqyWMqcyWiUWxW6yV/o+iP+pPcfcjUxDENZAILtWpawDrNyxLxjeACPMlFQzweFgiAu67qRc7tn7sD3GffegGT38y1ram1gn0Vt0UnPouf8G5PkOvs="),o(A,"title","Open in our Online Editor"),la.a=null,o(at,"class","language-js"),ca.a=null,o(st,"class","language-js"),ua.a=null,o(et,"class","language-js"),o(h,"class","remark-container tip")},m(n,a){p(n,b,a),p(n,ut,a),p(n,V,a),p(n,it,a),p(n,z,a),p(n,rt,a),p(n,K,a),p(n,kt,a),p(n,B,a),p(n,dt,a),p(n,x,a),c(x,X),c(x,Ln),N(Q,x,null),c(x,C),c(x,Rn),gt.m(Is,Rn),p(n,mt,a),p(n,U,a),p(n,ft,a),p(n,W,a),p(n,ht,a),p(n,y,a),c(y,Z),N(J,y,null),c(y,E),c(y,$n),xt.m(Hs,$n),p(n,vt,a),p(n,Y,a),p(n,wt,a),p(n,F,a),p(n,Pt,a),p(n,v,a),c(v,nn),c(v,On),N(tn,v,null),c(v,_),c(v,zn),yt.m(js,zn),p(n,bt,a),p(n,an,a),p(n,Ct,a),p(n,sn,a),p(n,Et,a),p(n,en,a),p(n,_t,a),p(n,pn,a),p(n,It,a),p(n,w,a),c(w,on),c(w,Dn),N(ln,w,null),c(w,I),c(w,qn),Ht.m(Ts,qn),p(n,jt,a),p(n,P,a),c(P,cn),c(P,Vn),N(un,P,null),c(P,H),c(P,Kn),Tt.m(Ss,Kn),p(n,St,a),p(n,rn,a),p(n,At,a),p(n,kn,a),p(n,Gt,a),p(n,dn,a),p(n,Mt,a),p(n,gn,a),p(n,Nt,a),p(n,mn,a),p(n,Lt,a),p(n,fn,a),Rt.m(As,fn),p(n,$t,a),p(n,g,a),c(g,hn),N(xn,g,null),c(g,j),c(g,Bn),Ot.m(Gs,Bn),c(g,Xn),zt.m(Ms,Xn),c(g,Qn),Dt.m(Ns,Qn),c(g,Un),qt.m(Ls,Un),p(n,Vt,a),p(n,vn,a),p(n,Kt,a),p(n,wn,a),p(n,Bt,a),p(n,Pn,a),p(n,Xt,a),p(n,f,a),c(f,yn),N(bn,f,null),c(f,T),c(f,Wn),Qt.m(Rs,Wn),c(f,Zn),Ut.m($s,Zn),c(f,Jn),Wt.m(Os,Jn),p(n,Zt,a),p(n,Cn,a),p(n,Jt,a),p(n,En,a),p(n,Yt,a),p(n,m,a),c(m,_n),c(m,Yn),N(In,m,null),c(m,S),c(m,Fn),Ft.m(zs,Fn),c(m,nt),na.m(Ds,nt),c(m,tt),ta.m(qs,tt),p(n,aa,a),p(n,Hn,a),p(n,sa,a),p(n,jn,a),p(n,ea,a),p(n,Tn,a),p(n,pa,a),p(n,Sn,a),p(n,oa,a),p(n,h,a),c(h,An),N(Gn,h,null),c(h,A),c(h,at),la.m(Vs,at),c(h,st),ca.m(Ks,st),c(h,et),ua.m(Bs,et),ia=!0},p:Qs,i(n){ia||(L(Q.$$.fragment,n),L(J.$$.fragment,n),L(tn.$$.fragment,n),L(ln.$$.fragment,n),L(un.$$.fragment,n),L(xn.$$.fragment,n),L(bn.$$.fragment,n),L(In.$$.fragment,n),L(Gn.$$.fragment,n),ia=!0)},o(n){R(Q.$$.fragment,n),R(J.$$.fragment,n),R(tn.$$.fragment,n),R(ln.$$.fragment,n),R(un.$$.fragment,n),R(xn.$$.fragment,n),R(bn.$$.fragment,n),R(In.$$.fragment,n),R(Gn.$$.fragment,n),ia=!1},d(n){n&&(t(b),t(ut),t(V),t(it),t(z),t(rt),t(K),t(kt),t(B),t(dt),t(x),t(mt),t(U),t(ft),t(W),t(ht),t(y),t(vt),t(Y),t(wt),t(F),t(Pt),t(v),t(bt),t(an),t(Ct),t(sn),t(Et),t(en),t(_t),t(pn),t(It),t(w),t(jt),t(P),t(St),t(rn),t(At),t(kn),t(Gt),t(dn),t(Mt),t(gn),t(Nt),t(mn),t(Lt),t(fn),t($t),t(g),t(Vt),t(vn),t(Kt),t(wn),t(Bt),t(Pn),t(Xt),t(f),t(Zt),t(Cn),t(Jt),t(En),t(Yt),t(m),t(aa),t(Hn),t(sa),t(jn),t(ea),t(Tn),t(pa),t(Sn),t(oa),t(h)),$(Q),$(J),$(tn),$(ln),$(un),$(xn),$(bn),$(In),$(Gn)}}}class ne extends Us{constructor(b){super(),Ws(this,b,null,Zs,Xs,{})}}export{ne as component};
