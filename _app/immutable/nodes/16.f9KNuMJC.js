import{s as zs,n as $s}from"../chunks/scheduler.B0TnBjPs.js";import{S as Ds,i as Os,e as s,s as u,c as A,H as k,a as e,g as l,b as i,d as r,f as M,n as d,h as t,o,j as p,p as c,m as L,t as N,k as R,l as z}from"../chunks/index.Cnh3HYw3.js";import{V as $}from"../chunks/ViewApp.9sx5twVU.js";function Vs(xs){let b,oa="<code>EnterNumber</code>",ot,V,la="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",lt,q,ca="Introduction",ct,B,ua="The <code>EnterNumber</code> component is a view in which the user can enter a number. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",ut,x,X,ia="Example",Mn,ra="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",K,E,ka="Open in Online Editor",Ln,it,vs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,rt,J,da="<code>number()</code> - Setting an initial number",kt,U,ga="Use the configuration method <code>number()</code> to give the <code>EnterNumber</code> a number it will contain initially.",dt,P,Q,ma="Example",W,_,fa="Open in Online Editor",Nn,gt,ws=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,mt,Z,ha="<code>placeholder()</code> - Setting a placeholder text",ft,Y,xa="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterNumber</code> component when no number is shown. Try typing some digits in the example below, and see that the placeholder text disappears. If you then delete the digits you typed, the placeholder text will be shown again.",ht,y,F,va="Example",nn,C,wa="Open in Online Editor",Rn,xt,Ps=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,vt,tn,Pa="<code>decimals()</code> - Setting maximum number of decimals",wt,an,ya="Use the configuration method <code>decimals()</code> to indicate how many decimals the entered number may contain. Pass it:",Pt,sn,ba="<li><code>0</code> to allow no decimals, e.g. allow numbers like <code>123</code> and <code>55</code> (i.e. only integers)</li> <li><code>1</code> to allow at most 1 decimal, e.g. <code>123</code>, <code>123.4</code> and <code>0.6</code></li> <li><code>2</code> to allow at most 2 decimals, e.g. <code>123</code>, <code>123.4</code>, <code>123.45</code> and <code>1.23</code></li> <li>Etc.</li>",yt,v,en,Ea="Example",zn,_a="Example where the user can only enter integers.",pn,I,Ca="Open in Online Editor",$n,bt,ys=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Et,w,on,Ia="Example",Dn,Ha="Example where the user can enter at most 2 decimals.",ln,H,ja="Open in Online Editor",On,_t,bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decimals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ct,cn,Ta="<code>page()</code>, <code>pageIfEqual()</code>, <code>pageIfLower()</code>, <code>pageIfHigher()</code> &amp; <code>pageIfBetween()</code> - Going to next page",It,un,Sa="There are 4 different copnfiguration methods you can call to specify which page the user should come to depening on which number the user has entered:",Ht,rn,Ga="<li><code>pageIfEqual(number, page)</code></li> <li><code>pageIfLower(number, page)</code></li> <li><code>pageIfHigher(number, page)</code></li> <li><code>pageIfBetween(lowNumber, highNumber, page)</code></li>",jt,kn,Aa="These methods can be called multiple times. In addition to those, you can also use <code>page(page)</code> to specify the page the user should come to if the entered number isn&#39;t true for any of the previously mentioned configuration methods.",Tt,dn,Ma="Example:",St,gn,Gt,Es=`<code class="language-js">EnterNumber
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> TwoPage<span class="token punctuation">)</span> <span class="token comment">// Go to TwoPage if the user enters 2.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> SixPage<span class="token punctuation">)</span> <span class="token comment">// Go to SixPage if the user enters 6.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfLower</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> NegativePage<span class="token punctuation">)</span> <span class="token comment">// Go to NegativePage if the user enters a number lower than 0, for example -0.000001, -300 or -999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfHigher</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> HighPage<span class="token punctuation">)</span> <span class="token comment">// Go to HighPage if the user enters a number higher than 100, for example 100.000001, 2000 or 999999.</span>
	<span class="token punctuation">.</span><span class="token function">pageIfBetween</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> MiddlePage<span class="token punctuation">)</span> <span class="token comment">// Go to MiddlePage if the user enters a number between between 50 and 60, for example 50.000001, 55 or 59.999999.</span>
	<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DefaultPage<span class="token punctuation">)</span> <span class="token comment">// Go to DefaultPage if the user enters a number that doesn't fulfill any of the other pageIfXXX() methods, such as 5, 50 or 99.99999.</span></code>`,At,g,mn,La="Example",fn,j,Na="Open in Online Editor",Vn,Mt,_s=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,qn,Lt,Cs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidAgePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That age is invalid.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Bn,Nt,Is=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">KidPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ah, then you are a still a kid. Good for you! :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xn,Rt,Hs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AdultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, respect to you, big guy!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,zt,hn,Ra="<code>store()</code> - Storing the entered number",$t,xn,za="Use the configuration method <code>store()</code> to store the number the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",Dt,vn,$a="<li>The object in which the entered number should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered number should be stored</li>",Ot,f,wn,Da="Example",Pn,T,Oa="Open in Online Editor",Kn,Vt,js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jn,qt,Ts=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Un,Bt,Ss=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xt,yn,Va="<code>defaultNumber()</code> - Specifying a default number",Kt,bn,qa="Use the configuration method <code>defaultNumber()</code> to specify which number that should be used if the user doesn&#39;t enter a number at all (i.e. if the user leaves the input field empty). If you don&#39;t call this configuration method, <code>0</code> will be used as the default number automatically.",Jt,m,En,Ba="Example",Qn,Xa="In the previous example, click on the <code>⇨</code> button without entering a number, and see that <code>0</code> is used by default. Do the same thing in this example, and see that <code>10</code> is used by default.",_n,S,Ka="Open in Online Editor",Wn,Ut,Gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,Qt,As=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">defaultNumber</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">age</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Yn,Wt,Ms=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Zt,Cn,Ja="<code>onChange()</code> - Handling the entered number",Yt,In,Ua="Use the configuration method <code>onChange()</code> to tell the <code>EnterNumber</code> component which method to call to handle the entered number. This method will be called each time the user makes a change in the <code>EnterNumber</code> component, such as:",Ft,Hn,Qa="<li>Writes a digit in it</li> <li>Removes a digit from it</li> <li>Paste a number in it</li> <li>Removes all digits in it</li> <li>Etc.</li>",na,jn,Wa="Your method will also be passed the entered number as an argument.",ta,h,Tn,Za="Example",Sn,G,Ya="Open in Online Editor",Fn,aa,Ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	age <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	doubledAge <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nt,sa,Ns=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many years old are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredAge<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredAge</span><span class="token punctuation">(</span><span class="token parameter">enteredAge</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>age <span class="token operator">=</span> enteredAge
		a<span class="token punctuation">.</span>doubledAge <span class="token operator">=</span> enteredAge <span class="token operator">*</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,tt,ea,Rs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello you who are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> years old! Your doubled age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>doubledAge<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pa;return K=new $({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:150,y:200}]}}}),nn=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`)
	}
}`,x:150,y:200}]}}}),pn=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(0)
	}
}`,x:150,y:200}]}}}),ln=new $({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter age\`).decimals(2)
	}
}`,x:150,y:200}]}}}),fn=new $({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:1050,y:200}]}}}),Pn=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),_n=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),Sn=new $({props:{project:{app:{code:`class MyApp extends App{
	
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
			)
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
}`,x:450,y:200}]}}}),{c(){b=s("h1"),b.innerHTML=oa,ot=u(),V=s("p"),V.innerHTML=la,lt=u(),q=s("h2"),q.textContent=ca,ct=u(),B=s("p"),B.innerHTML=ua,ut=u(),x=s("div"),X=s("div"),X.textContent=ia,Mn=s("p"),Mn.innerHTML=ra,A(K.$$.fragment),E=s("a"),E.textContent=ka,Ln=s("pre"),it=new k(!1),rt=u(),J=s("h2"),J.innerHTML=da,kt=u(),U=s("p"),U.innerHTML=ga,dt=u(),P=s("div"),Q=s("div"),Q.textContent=ma,A(W.$$.fragment),_=s("a"),_.textContent=fa,Nn=s("pre"),gt=new k(!1),mt=u(),Z=s("h2"),Z.innerHTML=ha,ft=u(),Y=s("p"),Y.innerHTML=xa,ht=u(),y=s("div"),F=s("div"),F.textContent=va,A(nn.$$.fragment),C=s("a"),C.textContent=wa,Rn=s("pre"),xt=new k(!1),vt=u(),tn=s("h2"),tn.innerHTML=Pa,wt=u(),an=s("p"),an.innerHTML=ya,Pt=u(),sn=s("ul"),sn.innerHTML=ba,yt=u(),v=s("div"),en=s("div"),en.textContent=Ea,zn=s("p"),zn.textContent=_a,A(pn.$$.fragment),I=s("a"),I.textContent=Ca,$n=s("pre"),bt=new k(!1),Et=u(),w=s("div"),on=s("div"),on.textContent=Ia,Dn=s("p"),Dn.textContent=Ha,A(ln.$$.fragment),H=s("a"),H.textContent=ja,On=s("pre"),_t=new k(!1),Ct=u(),cn=s("h2"),cn.innerHTML=Ta,It=u(),un=s("p"),un.textContent=Sa,Ht=u(),rn=s("ul"),rn.innerHTML=Ga,jt=u(),kn=s("p"),kn.innerHTML=Aa,Tt=u(),dn=s("p"),dn.textContent=Ma,St=u(),gn=s("pre"),Gt=new k(!1),At=u(),g=s("div"),mn=s("div"),mn.textContent=La,A(fn.$$.fragment),j=s("a"),j.textContent=Na,Vn=s("pre"),Mt=new k(!1),qn=s("pre"),Lt=new k(!1),Bn=s("pre"),Nt=new k(!1),Xn=s("pre"),Rt=new k(!1),zt=u(),hn=s("h2"),hn.innerHTML=Ra,$t=u(),xn=s("p"),xn.innerHTML=za,Dt=u(),vn=s("ol"),vn.innerHTML=$a,Ot=u(),f=s("div"),wn=s("div"),wn.textContent=Da,A(Pn.$$.fragment),T=s("a"),T.textContent=Oa,Kn=s("pre"),Vt=new k(!1),Jn=s("pre"),qt=new k(!1),Un=s("pre"),Bt=new k(!1),Xt=u(),yn=s("h2"),yn.innerHTML=Va,Kt=u(),bn=s("p"),bn.innerHTML=qa,Jt=u(),m=s("div"),En=s("div"),En.textContent=Ba,Qn=s("p"),Qn.innerHTML=Xa,A(_n.$$.fragment),S=s("a"),S.textContent=Ka,Wn=s("pre"),Ut=new k(!1),Zn=s("pre"),Qt=new k(!1),Yn=s("pre"),Wt=new k(!1),Zt=u(),Cn=s("h2"),Cn.innerHTML=Ja,Yt=u(),In=s("p"),In.innerHTML=Ua,Ft=u(),Hn=s("ul"),Hn.innerHTML=Qa,na=u(),jn=s("p"),jn.textContent=Wa,ta=u(),h=s("div"),Tn=s("div"),Tn.textContent=Za,A(Sn.$$.fragment),G=s("a"),G.textContent=Ya,Fn=s("pre"),aa=new k(!1),nt=s("pre"),sa=new k(!1),tt=s("pre"),ea=new k(!1),this.h()},l(n){b=e(n,"H1",{"data-svelte-h":!0}),l(b)!=="svelte-1dpshw6"&&(b.innerHTML=oa),ot=i(n),V=e(n,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1r4vkdp"&&(V.innerHTML=la),lt=i(n),q=e(n,"H2",{"data-svelte-h":!0}),l(q)!=="svelte-1ukekoe"&&(q.textContent=ca),ct=i(n),B=e(n,"P",{"data-svelte-h":!0}),l(B)!=="svelte-zgh4nz"&&(B.innerHTML=ua),ut=i(n),x=e(n,"DIV",{class:!0});var a=r(x);X=e(a,"DIV",{class:!0,"data-svelte-h":!0}),l(X)!=="svelte-1llzxwj"&&(X.textContent=ia),Mn=e(a,"P",{"data-svelte-h":!0}),l(Mn)!=="svelte-iqlwcv"&&(Mn.innerHTML=ra),M(K.$$.fragment,a),E=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-n4j19o"&&(E.textContent=ka),Ln=e(a,"PRE",{class:!0});var Fa=r(Ln);it=d(Fa,!1),Fa.forEach(t),a.forEach(t),rt=i(n),J=e(n,"H2",{"data-svelte-h":!0}),l(J)!=="svelte-1rh7zam"&&(J.innerHTML=da),kt=i(n),U=e(n,"P",{"data-svelte-h":!0}),l(U)!=="svelte-11kqkcz"&&(U.innerHTML=ga),dt=i(n),P=e(n,"DIV",{class:!0});var et=r(P);Q=e(et,"DIV",{class:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1llzxwj"&&(Q.textContent=ma),M(W.$$.fragment,et),_=e(et,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-impg0e"&&(_.textContent=fa),Nn=e(et,"PRE",{class:!0});var ns=r(Nn);gt=d(ns,!1),ns.forEach(t),et.forEach(t),mt=i(n),Z=e(n,"H2",{"data-svelte-h":!0}),l(Z)!=="svelte-k11loz"&&(Z.innerHTML=ha),ft=i(n),Y=e(n,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-18j035s"&&(Y.innerHTML=xa),ht=i(n),y=e(n,"DIV",{class:!0});var pt=r(y);F=e(pt,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1llzxwj"&&(F.textContent=va),M(nn.$$.fragment,pt),C=e(pt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(C)!=="svelte-u95npc"&&(C.textContent=wa),Rn=e(pt,"PRE",{class:!0});var ts=r(Rn);xt=d(ts,!1),ts.forEach(t),pt.forEach(t),vt=i(n),tn=e(n,"H2",{"data-svelte-h":!0}),l(tn)!=="svelte-sli74j"&&(tn.innerHTML=Pa),wt=i(n),an=e(n,"P",{"data-svelte-h":!0}),l(an)!=="svelte-1d3pone"&&(an.innerHTML=ya),Pt=i(n),sn=e(n,"UL",{"data-svelte-h":!0}),l(sn)!=="svelte-1ptcnjk"&&(sn.innerHTML=ba),yt=i(n),v=e(n,"DIV",{class:!0});var at=r(v);en=e(at,"DIV",{class:!0,"data-svelte-h":!0}),l(en)!=="svelte-1llzxwj"&&(en.textContent=Ea),zn=e(at,"P",{"data-svelte-h":!0}),l(zn)!=="svelte-15y36jm"&&(zn.textContent=_a),M(pn.$$.fragment,at),I=e(at,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(I)!=="svelte-fao8xi"&&(I.textContent=Ca),$n=e(at,"PRE",{class:!0});var as=r($n);bt=d(as,!1),as.forEach(t),at.forEach(t),Et=i(n),w=e(n,"DIV",{class:!0});var st=r(w);on=e(st,"DIV",{class:!0,"data-svelte-h":!0}),l(on)!=="svelte-1llzxwj"&&(on.textContent=Ia),Dn=e(st,"P",{"data-svelte-h":!0}),l(Dn)!=="svelte-zv68fv"&&(Dn.textContent=Ha),M(ln.$$.fragment,st),H=e(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(H)!=="svelte-sdz9t7"&&(H.textContent=ja),On=e(st,"PRE",{class:!0});var ss=r(On);_t=d(ss,!1),ss.forEach(t),st.forEach(t),Ct=i(n),cn=e(n,"H2",{"data-svelte-h":!0}),l(cn)!=="svelte-19ebt5j"&&(cn.innerHTML=Ta),It=i(n),un=e(n,"P",{"data-svelte-h":!0}),l(un)!=="svelte-q2ln6m"&&(un.textContent=Sa),Ht=i(n),rn=e(n,"UL",{"data-svelte-h":!0}),l(rn)!=="svelte-1hwnfm7"&&(rn.innerHTML=Ga),jt=i(n),kn=e(n,"P",{"data-svelte-h":!0}),l(kn)!=="svelte-psw8xk"&&(kn.innerHTML=Aa),Tt=i(n),dn=e(n,"P",{"data-svelte-h":!0}),l(dn)!=="svelte-11lpom8"&&(dn.textContent=Ma),St=i(n),gn=e(n,"PRE",{class:!0});var es=r(gn);Gt=d(es,!1),es.forEach(t),At=i(n),g=e(n,"DIV",{class:!0});var D=r(g);mn=e(D,"DIV",{class:!0,"data-svelte-h":!0}),l(mn)!=="svelte-1llzxwj"&&(mn.textContent=La),M(fn.$$.fragment,D),j=e(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(j)!=="svelte-1iafs1c"&&(j.textContent=Na),Vn=e(D,"PRE",{class:!0});var ps=r(Vn);Mt=d(ps,!1),ps.forEach(t),qn=e(D,"PRE",{class:!0});var os=r(qn);Lt=d(os,!1),os.forEach(t),Bn=e(D,"PRE",{class:!0});var ls=r(Bn);Nt=d(ls,!1),ls.forEach(t),Xn=e(D,"PRE",{class:!0});var cs=r(Xn);Rt=d(cs,!1),cs.forEach(t),D.forEach(t),zt=i(n),hn=e(n,"H2",{"data-svelte-h":!0}),l(hn)!=="svelte-xzw4ex"&&(hn.innerHTML=Ra),$t=i(n),xn=e(n,"P",{"data-svelte-h":!0}),l(xn)!=="svelte-wcl02x"&&(xn.innerHTML=za),Dt=i(n),vn=e(n,"OL",{"data-svelte-h":!0}),l(vn)!=="svelte-17rhbe3"&&(vn.innerHTML=$a),Ot=i(n),f=e(n,"DIV",{class:!0});var Gn=r(f);wn=e(Gn,"DIV",{class:!0,"data-svelte-h":!0}),l(wn)!=="svelte-1llzxwj"&&(wn.textContent=Da),M(Pn.$$.fragment,Gn),T=e(Gn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-wjdx7g"&&(T.textContent=Oa),Kn=e(Gn,"PRE",{class:!0});var us=r(Kn);Vt=d(us,!1),us.forEach(t),Jn=e(Gn,"PRE",{class:!0});var is=r(Jn);qt=d(is,!1),is.forEach(t),Un=e(Gn,"PRE",{class:!0});var rs=r(Un);Bt=d(rs,!1),rs.forEach(t),Gn.forEach(t),Xt=i(n),yn=e(n,"H2",{"data-svelte-h":!0}),l(yn)!=="svelte-f924tf"&&(yn.innerHTML=Va),Kt=i(n),bn=e(n,"P",{"data-svelte-h":!0}),l(bn)!=="svelte-1iqciy4"&&(bn.innerHTML=qa),Jt=i(n),m=e(n,"DIV",{class:!0});var O=r(m);En=e(O,"DIV",{class:!0,"data-svelte-h":!0}),l(En)!=="svelte-1llzxwj"&&(En.textContent=Ba),Qn=e(O,"P",{"data-svelte-h":!0}),l(Qn)!=="svelte-grsfym"&&(Qn.innerHTML=Xa),M(_n.$$.fragment,O),S=e(O,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(S)!=="svelte-xlcx4u"&&(S.textContent=Ka),Wn=e(O,"PRE",{class:!0});var ks=r(Wn);Ut=d(ks,!1),ks.forEach(t),Zn=e(O,"PRE",{class:!0});var ds=r(Zn);Qt=d(ds,!1),ds.forEach(t),Yn=e(O,"PRE",{class:!0});var gs=r(Yn);Wt=d(gs,!1),gs.forEach(t),O.forEach(t),Zt=i(n),Cn=e(n,"H2",{"data-svelte-h":!0}),l(Cn)!=="svelte-1mxkyq8"&&(Cn.innerHTML=Ja),Yt=i(n),In=e(n,"P",{"data-svelte-h":!0}),l(In)!=="svelte-g4gtim"&&(In.innerHTML=Ua),Ft=i(n),Hn=e(n,"UL",{"data-svelte-h":!0}),l(Hn)!=="svelte-1rktz5a"&&(Hn.innerHTML=Qa),na=i(n),jn=e(n,"P",{"data-svelte-h":!0}),l(jn)!=="svelte-1ktj0cv"&&(jn.textContent=Wa),ta=i(n),h=e(n,"DIV",{class:!0});var An=r(h);Tn=e(An,"DIV",{class:!0,"data-svelte-h":!0}),l(Tn)!=="svelte-1llzxwj"&&(Tn.textContent=Za),M(Sn.$$.fragment,An),G=e(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(G)!=="svelte-x932fz"&&(G.textContent=Ya),Fn=e(An,"PRE",{class:!0});var ms=r(Fn);aa=d(ms,!1),ms.forEach(t),nt=e(An,"PRE",{class:!0});var fs=r(nt);sa=d(fs,!1),fs.forEach(t),tt=e(An,"PRE",{class:!0});var hs=r(tt);ea=d(hs,!1),hs.forEach(t),An.forEach(t),this.h()},h(){o(X,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjbEKwjAURX8l3EkhQxVcsjmIOCiCo3GIzVMKmobkFVpC/t1WIajbPffx7kkw3kMl1K0lKNQPE6PYD2vvBfVMzkYx5qSd5jqQYTqxCXw0d5rN363mQNwFJ8pharN2GVnCjxyhzgmNhVpI3NqHpbD7wI+0/BfxBF/mbdf8OzeOKRy655VCsUr04/iqkhigllWVL/kFHMtROw=="),o(E,"title","Open in our Online Editor"),it.a=null,o(Ln,"class","language-js"),o(x,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjrEKwjAQhl8l3NRCkLbiks1BxEERHI1DbE4p1DQkV2gJeXfbCkGd7r7/OL4/gLIWRIC60wgC6lZ5z47j1lqGA6HRnk17kEZS7VARXkg5OqsnZvmSSnJIvTMsHeY0ShMhcrATexDXAI0GUXJ4dK1Gd/jAjzT9J/EMX+Z93/w7d4bQnfrXHd3KLCMrq3WeGnAYJtGm4DCCqIoi3uIbCFxU2Q=="),o(_,"title","Open in our Online Editor"),gt.a=null,o(Nn,"class","language-js"),o(P,"class","remark-container tip"),o(F,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNpdjsEKwjAQRH8l7KmFIFXwkpsHEQ+K4NEIjcmqhZqGJIWWkH83rRDU284Ms28CCGOABZCdQmAgW+EcOYwbYwgOHrVyJN2Ba+6lReHx7IX1J/HAopxd7i363mqSg8mNXEeIFEzSDtglQKOALSncu1ah3X/EDzT3M3gSX+Rd3/wzt9qjPfavG9qFaYXE5/y+qOeApH5d5jkUhkRdVxRGYKuqitf4BrNwWkg="),o(C,"title","Open in our Online Editor"),xt.a=null,o(Rn,"class","language-js"),o(y,"class","remark-container tip"),o(en,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNpdjsEKwjAQRH8l7KmFUqLgJTcPIh4UwaMVGpNVC20aki20lPy7bYWg3nZmmH0zgrQWxAiq1QgCVC29Z8dhay3DntBoz6Z7LExByqEkvJB0dJZPTNLFLcghdc6wGMxuKEyAkIGdtAdxHaHSIFYZPNpaozt8xA809iN4Fl/kfVf9M3eG0J265o4ut7VU+FreJ+USsKlfprlGVTWy9glP47QM+mnBhmcwgFhzHm7hDRWaXjk="),o(I,"title","Open in our Online Editor"),bt.a=null,o($n,"class","language-js"),o(v,"class","remark-container tip"),o(on,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNpdjsEKwjAQRH8l7KmFIrXgJTcPIh4UwaMRGpNVC2kaki20lPy7bYWi3nZmmH0zgHQO+ACq0QgclJEhsGO/dY5hR2h1YOM9CCtIeZSEF5KezvKJSTq7gjxS6y1bgsmNwkaIGbhRB+DXASoNfJ3BozEa/eEjfqBLfwFP4ou8b6t/5s4S+lNb39GvnJEKX/P7pJwDNvbLdKVRVbU0ISnSZVoG3bhgk2fQAy/yPN7iGxXWXjs="),o(H,"title","Open in our Online Editor"),_t.a=null,o(On,"class","language-js"),o(w,"class","remark-container tip"),Gt.a=null,o(gn,"class","language-js"),o(mn,"class","remark-container__title"),o(j,"target","_blank"),o(j,"href","/editor#eNqtks1u2zAMx1+F1ckGjCDuWmzwZUiHIg22bsPW2zwgis3YQhXJk+ilXuDzXqXP1SeZVLdusjQ5+STxQ/zzJ3LDeFWxZMMynSNLWCa5tXDdTKoK8I5Q5RbcfZOqlDKDnPA7cUNfeYFB+OhNySDVRkEf8N42VS1rI1Y527Lkx4aJnCVxxJZa5mhmnbEj2r/vhb2xpTytxf+a3/TajrJSyNygCrpQSjeuwMiKPxjE4YicEcyv9BpWXDXQIDcWXBPADUKj6/fzMHp++EHLeqVeqZjSpSI0n+vVAs2LM+1ldnweerb8pNdognEEM/WbS5FPCvRAr6Ve/qq59KkfRX4o5wJpja4llxW/O5IZTPJa0qEqV6IoXVfx+X5f0Uv6RU2k1dPXPfy93/qi51vYTzlid26YriBrWHI6HrdRN+zTY8Pe1R5m4l27NyUn8DWFBdGpjLb630Gbaljw7HYedj/Xb+AByLN9yDfHIJ9mNCTdpIyASlR+cx83mIMlIaU7bx0oTLXOYamNj59AEg5E/naf/OwYeb+DQ7J/cewGbYUZAWlPGMFCFFDUzclAnPF4C/Rn+w+XUMzQ"),o(j,"title","Open in our Online Editor"),Mt.a=null,o(Vn,"class","language-js"),Lt.a=null,o(qn,"class","language-js"),Nt.a=null,o(Bn,"class","language-js"),Rt.a=null,o(Xn,"class","language-js"),o(g,"class","remark-container tip"),o(wn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtkc9KxDAQxl8lDh5aqGV30UtBxBVZPSii3qzQ2I67xW5Skim7teTsq/hcPomp/buLePIQyMxkvvnmlwp4nkNQQSwThADijGvNbsrzPGe4JRSJZvZehSKk+vAlslN2NO3iWCEnfCCu6M7WHLd5SQqpUIL1hTprmiYDxoPc5jQETxWkCQRTD15llqC6boIdM71Gb6gOqmH6okj3597LjfbjVZolCoXTlEJ6tAK+Tt/Rmbo+2cCJruSGrbkoWYlcaWZNMK6QlbI4i1yva7yQWbEWvyiGdCkI1W2xfkHVS2uSCh3uscgajVy/XtZZKERKxbI2PyiHNC+IpGjtfH18jsa6zcVt4RnwYGv5nEw8KCGYTSbGa/jN/uI3Hvw/CFt0mGWyJsU2K/lD7bDivtU1A8yD0TY7i855/MZIDp/bYeoTXePe9sej7Z/NN7au+iA="),o(T,"title","Open in our Online Editor"),Vt.a=null,o(Kn,"class","language-js"),qt.a=null,o(Jn,"class","language-js"),Bt.a=null,o(Un,"class","language-js"),o(f,"class","remark-container tip"),o(En,"class","remark-container__title"),o(S,"target","_blank"),o(S,"href","/editor#eNqtkc9Kw0AQxl9lHTwkEENS9BIQsSLVgyLqzRSyJtM2mO6G3QltDDn7Kj6XT+LGNH9axJOHhZ2ZnZnv+20FPM8hqCCWCUIAcca1ZnflZZ4z3BKKRDNzr0IRUnP4Etk5O/G7OFbICZ+IK3owNctuX5JCKpRgfaHJ1m1TDbUDuclpCF4qSBMIfAcWMktQ3bbBnph+Ri+oCaph+6xID/c+yo1241WaJQqF1ZZCejYDXJ2+o+XbLpnAim7khq25KFmJXGlmRDCukJWyuIhsp2u8klmxFr9MDOlaEKr7Yv2Kqh+d4IIXGbVZy/dsV5NUaHGHRUZ6ZLuNfWumECkVy8bOsCukaUEkxU7g18fnSIjdXuwdzhoc2BpiZ54DJQQTz6udlujkL6Ljxf8DdQcTs0w27NhmJX84HlfcNXPrAe/RyM2e0SmP3xjJ4bs7TH2iazxwfzpyP6+/AWFmAF0="),o(S,"title","Open in our Online Editor"),Ut.a=null,o(Wn,"class","language-js"),Qt.a=null,o(Zn,"class","language-js"),Wt.a=null,o(Yn,"class","language-js"),o(m,"class","remark-container tip"),o(Tn,"class","remark-container__title"),o(G,"target","_blank"),o(G,"href","/editor#eNqdkstKw0AUhl/lOLhIJIa26CYg0hapLhRRN2KEjsmxDaYzYXJCG0PWvorP5ZM4uSdVXLgomTm3+c//NWM8ipiTMU/6yBzmhTyO4TqdRhHgjlD4Mehz5gqXih9fIZzB8bg4+zJ5CdGfVqFJU+Ip5IT3xBXd6nLDrJpJISVKQJsoonnVlLPcYpGOxcx5yljgM2dssVcZ+qiuqstAXzuj1VhcsqGCRRLsv30nt7HtrYPQVyiMKuXSgx5ix8E7GmPTJn0xlpdyCxsuUkiRqxi0EOAKIZXJ+dK0msa5DJON+GWiSxeCUN0kmxdU7Wgp5msutCORrb9+iGVRaaBpF9sbC4VIgVgV23TPuDRLiKSotX19fPY0mNXB7Lnp0v54A7uXake4XaHsMk18gLVLwxFMBsgsttNkTkcWS5kzGY1yqyI3+Ytcf8Of8P4DrgaGYSgLPrBdy5LVYVaumHcID+BRJgrq/aBQEMRlXbdybve8Hdg+494bkOz+e8saWhtoGhsWtUUnPYue82+l4TrP"),o(G,"title","Open in our Online Editor"),aa.a=null,o(Fn,"class","language-js"),sa.a=null,o(nt,"class","language-js"),ea.a=null,o(tt,"class","language-js"),o(h,"class","remark-container tip")},m(n,a){p(n,b,a),p(n,ot,a),p(n,V,a),p(n,lt,a),p(n,q,a),p(n,ct,a),p(n,B,a),p(n,ut,a),p(n,x,a),c(x,X),c(x,Mn),L(K,x,null),c(x,E),c(x,Ln),it.m(vs,Ln),p(n,rt,a),p(n,J,a),p(n,kt,a),p(n,U,a),p(n,dt,a),p(n,P,a),c(P,Q),L(W,P,null),c(P,_),c(P,Nn),gt.m(ws,Nn),p(n,mt,a),p(n,Z,a),p(n,ft,a),p(n,Y,a),p(n,ht,a),p(n,y,a),c(y,F),L(nn,y,null),c(y,C),c(y,Rn),xt.m(Ps,Rn),p(n,vt,a),p(n,tn,a),p(n,wt,a),p(n,an,a),p(n,Pt,a),p(n,sn,a),p(n,yt,a),p(n,v,a),c(v,en),c(v,zn),L(pn,v,null),c(v,I),c(v,$n),bt.m(ys,$n),p(n,Et,a),p(n,w,a),c(w,on),c(w,Dn),L(ln,w,null),c(w,H),c(w,On),_t.m(bs,On),p(n,Ct,a),p(n,cn,a),p(n,It,a),p(n,un,a),p(n,Ht,a),p(n,rn,a),p(n,jt,a),p(n,kn,a),p(n,Tt,a),p(n,dn,a),p(n,St,a),p(n,gn,a),Gt.m(Es,gn),p(n,At,a),p(n,g,a),c(g,mn),L(fn,g,null),c(g,j),c(g,Vn),Mt.m(_s,Vn),c(g,qn),Lt.m(Cs,qn),c(g,Bn),Nt.m(Is,Bn),c(g,Xn),Rt.m(Hs,Xn),p(n,zt,a),p(n,hn,a),p(n,$t,a),p(n,xn,a),p(n,Dt,a),p(n,vn,a),p(n,Ot,a),p(n,f,a),c(f,wn),L(Pn,f,null),c(f,T),c(f,Kn),Vt.m(js,Kn),c(f,Jn),qt.m(Ts,Jn),c(f,Un),Bt.m(Ss,Un),p(n,Xt,a),p(n,yn,a),p(n,Kt,a),p(n,bn,a),p(n,Jt,a),p(n,m,a),c(m,En),c(m,Qn),L(_n,m,null),c(m,S),c(m,Wn),Ut.m(Gs,Wn),c(m,Zn),Qt.m(As,Zn),c(m,Yn),Wt.m(Ms,Yn),p(n,Zt,a),p(n,Cn,a),p(n,Yt,a),p(n,In,a),p(n,Ft,a),p(n,Hn,a),p(n,na,a),p(n,jn,a),p(n,ta,a),p(n,h,a),c(h,Tn),L(Sn,h,null),c(h,G),c(h,Fn),aa.m(Ls,Fn),c(h,nt),sa.m(Ns,nt),c(h,tt),ea.m(Rs,tt),pa=!0},p:$s,i(n){pa||(N(K.$$.fragment,n),N(W.$$.fragment,n),N(nn.$$.fragment,n),N(pn.$$.fragment,n),N(ln.$$.fragment,n),N(fn.$$.fragment,n),N(Pn.$$.fragment,n),N(_n.$$.fragment,n),N(Sn.$$.fragment,n),pa=!0)},o(n){R(K.$$.fragment,n),R(W.$$.fragment,n),R(nn.$$.fragment,n),R(pn.$$.fragment,n),R(ln.$$.fragment,n),R(fn.$$.fragment,n),R(Pn.$$.fragment,n),R(_n.$$.fragment,n),R(Sn.$$.fragment,n),pa=!1},d(n){n&&(t(b),t(ot),t(V),t(lt),t(q),t(ct),t(B),t(ut),t(x),t(rt),t(J),t(kt),t(U),t(dt),t(P),t(mt),t(Z),t(ft),t(Y),t(ht),t(y),t(vt),t(tn),t(wt),t(an),t(Pt),t(sn),t(yt),t(v),t(Et),t(w),t(Ct),t(cn),t(It),t(un),t(Ht),t(rn),t(jt),t(kn),t(Tt),t(dn),t(St),t(gn),t(At),t(g),t(zt),t(hn),t($t),t(xn),t(Dt),t(vn),t(Ot),t(f),t(Xt),t(yn),t(Kt),t(bn),t(Jt),t(m),t(Zt),t(Cn),t(Yt),t(In),t(Ft),t(Hn),t(na),t(jn),t(ta),t(h)),z(K),z(W),z(nn),z(pn),z(ln),z(fn),z(Pn),z(_n),z(Sn)}}}class Ks extends Ds{constructor(b){super(),Os(this,b,null,Vs,zs,{})}}export{Ks as component};
