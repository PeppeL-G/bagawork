import{s as Ea,n as Ma}from"../chunks/scheduler.B0TnBjPs.js";import{S as La,i as Ia,e,s as c,c as S,H as k,a as p,g as l,b as i,d as r,f as H,n as d,h as t,o,j as a,p as u,m as O,t as G,k as B,l as $}from"../chunks/index.Cnh3HYw3.js";import{V as N}from"../chunks/ViewApp.9sx5twVU.js";function ja(ka){let _,as="Configuration Methods",at,R,es="On this page you find the documentation for configuration methods than can be used on all GUI components.",et,D,ps="<code>backgroundColor()</code> - Setting the background color",pt,V,os="Indicates which background color the GUI component should have. Possible values:",ot,F,ls="<li>A string containing the name of a color in English, such as <code>`red`</code> or <code>`blue`</code></li>",lt,w,q,cs="Example",U,T,is="Open in Online Editor",Hn,ct,da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I have a red background!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,it,z,us="<code>border()</code> - Adding a border around the component",ut,X,rs="Use the configuration method <code>border(thickness, color, sides)</code> to tell the component that is should have a border around itself.",rt,Z,ks="The border will only be applied on the sides of the component indicated by the <code>sides</code> parameter, or all sides if no value for that parameter is provided.",kt,Y,ds=`This configuration method can be called multiple times to give
different sides different type of borders.`,dt,J,ms="The parameters:",mt,Q,gs="<li><code>thickness</code> - A number indicating how many millimeters thick the border should be</li> <li><code>color</code> - The English name of a color the border should have, e.g.  <code>`blue`</code></li> <li><code>sides</code> - A string indicating which sides of the component the bord should be added to. Write:<ul><li><code>t</code> in the string to add it to the <strong>T</strong>op side</li> <li><code>b</code> in the string to add it to the <strong>B</strong>ottom side</li> <li><code>l</code> in the string to add it to the <strong>L</strong>eft side</li> <li><code>r</code> in the string to add it to the <strong>R</strong>ight side</li></ul></li>",gt,K,fs="If <code>sides</code> is not provided, the border will be added to all sides\n(the default value is <code>`tblr`</code>).",ft,b,W,hs="Example",nn,P,xs="Open in Online Editor",On,ht,ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has a 5mm thick blue border on all sides.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xt,C,tn,vs="Example",sn,y,ws="Open in Online Editor",Gn,vt,ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lr</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has different borders on top/bottom side and left/right side.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wt,an,bs="<code>cornerRadius()</code> - Rounding the corners",bt,en,Cs="Use the configuration method <code>cornerRadius()</code> to tell the component how round the corners of the component should be. Pass the amount as an integer representing the number of milimeters. Default is <code>0</code>, meaning the corners will be sharp (90 degrees; not round at all).",Ct,m,pn,_s="Example",on,A,Ts="Open in Online Editor",Bn,_t,fa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$n,Tt,ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The corners on this Text component are rounded.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,ln,Ps="<code>font()</code> - Formatting text",yt,cn,ys="Use the configuration method <code>font()</code> to tell the component how text shown on the screen, such as text set through:",At,un,As="<li><code>Text.text()</code></li> <li><code>Text.textWithBBCode()</code></li> <li><code>Button.text()</code></li> <li>Etc.</li>",Et,rn,Es='Should be formatted. Pass it an instance of the <a href="/documentation/font/" title="Open the documentation for Font.">Font</a> class, which you can configure by calling different configuration methods on it (for more information on those methods, see the documentation for the <a href="/documentation/font/" title="Open the documentation for Font.">Font</a> class).',Mt,kn,Ms="The font assigned to a GUI component this way will be passed down to all its child components, and their child components, and so on. A child component can override the font it gets from its parent component by calling <code>.font()</code> on itself.",Lt,g,dn,Ls="Example",mn,E,Is="Open in Online Editor",Nn,It,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rn,jt,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm red!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm blue!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm red!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,St,gn,js="<code>keepIf()</code> - Conditionally keep/remove the GUI component",Ht,fn,Ss="By default, all the GUI components you use will be shown. Use the configuration method <code>keepIf(condition)</code> to only keep the GUI component if the <code>condition</code> you pass to it is <code>true</code>. If the <code>condition</code> instead is <code>false</code>, the GUI component will be removed, and not used at all.",Ot,f,hn,Hs="Example",xn,M,Os="Open in Online Editor",Dn,Gt,wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vn,Bt,ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	randomNumberBetween0And1 <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The random number is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a small number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">0.5</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a big number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Generate new number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,$t,vn,Gs="<code>padding()</code> - Adding space between the border and the content",Nt,wn,Bs="Use the configuration method <code>padding(amount, sides)</code> to tell the component how much space there should be between the border of the component and its content. Default is <code>0</code>, meaning no space at all.",Rt,bn,$s="The padding will only be applied to the sides of the component indicated by the <code>sides</code> parameter, or all sides if no value for that parameter is provided.",Dt,Cn,Ns="This configuration method can be called multiple times to give different sides different amounts of padding.",Vt,_n,Rs="The parameters:",Ft,Tn,Ds=`<li><code>amount</code> - The amount of padding the component should have
in millimeters</li> <li><code>sides</code> - A string indicating which sides of the component the padding should be applied to. Write:<ul><li><code>t</code> in the string to include the <strong>T</strong>op side</li> <li><code>b</code> in the string to include the <strong>B</strong>ottom side</li> <li><code>l</code> in the string to include the <strong>L</strong>eft side</li> <li><code>r</code> in the string to include the <strong>R</strong>ight side</li></ul></li>`,qt,Pn,Vs="If <code>sides</code> is not provided, the padding will be applied to all sides\n(the default value is <code>`tblr`</code>).",Ut,h,yn,Fs="Example",An,L,qs="Open in Online Editor",Fn,zt,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,qn,Xt,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has 15mm padding on all sides.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zt,x,En,Us="Example",Mn,I,zs="Open in Online Editor",Un,Yt,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,zn,Jt,Pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">tb</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lr</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This component has 20mm padding on the top side and bottom side, and 10mm padding on the left and right side.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Qt,Ln,Xs="<code>showIf()</code> - Conditionally show/hide the GUI component",Kt,In,Zs="By default, all the GUI components you use will be shown. Use the configuration method <code>showIf(condition)</code> to only show the GUI component if the <code>condition</code> you pass to it is <code>true</code>. If the <code>condition</code> instead is <code>false</code>, the GUI component will still be used (so it will still occupy space), but it will not be shown to the user.",Wt,v,jn,Ys="Example",Sn,j,Js="Open in Online Editor",Xn,ns,ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Zn,ts,Aa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	randomNumberBetween0And1 <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The random number is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>randomNumberBetween0And1 <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a small number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span><span class="token number">0.5</span> <span class="token operator">&lt;=</span> p<span class="token punctuation">.</span>randomNumberBetween0And1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That is a big number!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Generate new number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ss;return U=new N({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.text(\`I have a red background!\`)
	}
	
}`,x:150,y:200}]}}}),nn=new N({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.border(5, \`blue\`)
			.text(\`This component has a 5mm thick blue border on all sides.\`)
	}
	
}`,x:150,y:200}]}}}),sn=new N({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Text\n			.backgroundColor(`red`)\n			.border(5, `blue`, `tb`)\n			.border(9, `lime`, `lr`)\n			.text(`This component has different borders on top/bottom side and left/right side.`)\n	}\n	\n}",x:150,y:200}]}}}),on=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.cornerRadius(10)
			.text(\`The corners on this Text component are rounded.\`)
	}
	
}`,x:150,y:200}]}}}),mn=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.font(Font.color(`red`)).children(\n			Text.text(`I'm red!`),\n			Text.font(Font.color(`blue`)).text(`I'm blue!`),\n			Text.text(`I'm red!`),\n		)\n	}\n	\n}",x:150,y:200}]}}}),xn=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = Math.random()
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`The random number is: \${p.randomNumberBetween0And1}.\`),
			Text.keepIf(p.randomNumberBetween0And1 < 0.5).text(\`That is a small number!\`),
			Text.keepIf(0.5 <= p.randomNumberBetween0And1).text(\`That is a big number!\`),
			Button.text(\`Generate new number\`),
		)
		
	}
	
}`,x:150,y:200}]}}}),An=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.padding(15)
			.text(\`This component has 15mm padding on all sides.\`)
	}
	
}`,x:150,y:200}]}}}),Mn=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Text
			.backgroundColor(\`red\`)
			.padding(20, \`tb\`)
			.padding(10, \`lr\`)
			.top()
			.text(\`This component has 20mm padding on the top side and bottom side, and 10mm padding on the left and right side.\`)
	}
	
}`,x:150,y:200}]}}}),Sn=new N({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	randomNumberBetween0And1 = 0
	
	onBefore(){
		p.randomNumberBetween0And1 = Math.random()
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`The random number is: \${p.randomNumberBetween0And1}.\`),
			Text.showIf(p.randomNumberBetween0And1 < 0.5).text(\`That is a small number!\`),
			Text.showIf(0.5 <= p.randomNumberBetween0And1).text(\`That is a big number!\`),
			Button.text(\`Generate new number\`),
		)
		
	}
	
}`,x:150,y:200}]}}}),{c(){_=e("h1"),_.textContent=as,at=c(),R=e("p"),R.textContent=es,et=c(),D=e("h2"),D.innerHTML=ps,pt=c(),V=e("p"),V.textContent=os,ot=c(),F=e("ul"),F.innerHTML=ls,lt=c(),w=e("div"),q=e("div"),q.textContent=cs,S(U.$$.fragment),T=e("a"),T.textContent=is,Hn=e("pre"),ct=new k(!1),it=c(),z=e("h2"),z.innerHTML=us,ut=c(),X=e("p"),X.innerHTML=rs,rt=c(),Z=e("p"),Z.innerHTML=ks,kt=c(),Y=e("p"),Y.textContent=ds,dt=c(),J=e("p"),J.textContent=ms,mt=c(),Q=e("ul"),Q.innerHTML=gs,gt=c(),K=e("p"),K.innerHTML=fs,ft=c(),b=e("div"),W=e("div"),W.textContent=hs,S(nn.$$.fragment),P=e("a"),P.textContent=xs,On=e("pre"),ht=new k(!1),xt=c(),C=e("div"),tn=e("div"),tn.textContent=vs,S(sn.$$.fragment),y=e("a"),y.textContent=ws,Gn=e("pre"),vt=new k(!1),wt=c(),an=e("h2"),an.innerHTML=bs,bt=c(),en=e("p"),en.innerHTML=Cs,Ct=c(),m=e("div"),pn=e("div"),pn.textContent=_s,S(on.$$.fragment),A=e("a"),A.textContent=Ts,Bn=e("pre"),_t=new k(!1),$n=e("pre"),Tt=new k(!1),Pt=c(),ln=e("h2"),ln.innerHTML=Ps,yt=c(),cn=e("p"),cn.innerHTML=ys,At=c(),un=e("ul"),un.innerHTML=As,Et=c(),rn=e("p"),rn.innerHTML=Es,Mt=c(),kn=e("p"),kn.innerHTML=Ms,Lt=c(),g=e("div"),dn=e("div"),dn.textContent=Ls,S(mn.$$.fragment),E=e("a"),E.textContent=Is,Nn=e("pre"),It=new k(!1),Rn=e("pre"),jt=new k(!1),St=c(),gn=e("h2"),gn.innerHTML=js,Ht=c(),fn=e("p"),fn.innerHTML=Ss,Ot=c(),f=e("div"),hn=e("div"),hn.textContent=Hs,S(xn.$$.fragment),M=e("a"),M.textContent=Os,Dn=e("pre"),Gt=new k(!1),Vn=e("pre"),Bt=new k(!1),$t=c(),vn=e("h2"),vn.innerHTML=Gs,Nt=c(),wn=e("p"),wn.innerHTML=Bs,Rt=c(),bn=e("p"),bn.innerHTML=$s,Dt=c(),Cn=e("p"),Cn.textContent=Ns,Vt=c(),_n=e("p"),_n.textContent=Rs,Ft=c(),Tn=e("ul"),Tn.innerHTML=Ds,qt=c(),Pn=e("p"),Pn.innerHTML=Vs,Ut=c(),h=e("div"),yn=e("div"),yn.textContent=Fs,S(An.$$.fragment),L=e("a"),L.textContent=qs,Fn=e("pre"),zt=new k(!1),qn=e("pre"),Xt=new k(!1),Zt=c(),x=e("div"),En=e("div"),En.textContent=Us,S(Mn.$$.fragment),I=e("a"),I.textContent=zs,Un=e("pre"),Yt=new k(!1),zn=e("pre"),Jt=new k(!1),Qt=c(),Ln=e("h2"),Ln.innerHTML=Xs,Kt=c(),In=e("p"),In.innerHTML=Zs,Wt=c(),v=e("div"),jn=e("div"),jn.textContent=Ys,S(Sn.$$.fragment),j=e("a"),j.textContent=Js,Xn=e("pre"),ns=new k(!1),Zn=e("pre"),ts=new k(!1),this.h()},l(n){_=p(n,"H1",{"data-svelte-h":!0}),l(_)!=="svelte-1mp6gmm"&&(_.textContent=as),at=i(n),R=p(n,"P",{"data-svelte-h":!0}),l(R)!=="svelte-v0dzk0"&&(R.textContent=es),et=i(n),D=p(n,"H2",{"data-svelte-h":!0}),l(D)!=="svelte-mnvq9c"&&(D.innerHTML=ps),pt=i(n),V=p(n,"P",{"data-svelte-h":!0}),l(V)!=="svelte-7w7prv"&&(V.textContent=os),ot=i(n),F=p(n,"UL",{"data-svelte-h":!0}),l(F)!=="svelte-13pv4ta"&&(F.innerHTML=ls),lt=i(n),w=p(n,"DIV",{class:!0});var s=r(w);q=p(s,"DIV",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1llzxwj"&&(q.textContent=cs),H(U.$$.fragment,s),T=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-src5o6"&&(T.textContent=is),Hn=p(s,"PRE",{class:!0});var Qs=r(Hn);ct=d(Qs,!1),Qs.forEach(t),s.forEach(t),it=i(n),z=p(n,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-1ns5jeg"&&(z.innerHTML=us),ut=i(n),X=p(n,"P",{"data-svelte-h":!0}),l(X)!=="svelte-bdbnkx"&&(X.innerHTML=rs),rt=i(n),Z=p(n,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-11sup2o"&&(Z.innerHTML=ks),kt=i(n),Y=p(n,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-1rmb61p"&&(Y.textContent=ds),dt=i(n),J=p(n,"P",{"data-svelte-h":!0}),l(J)!=="svelte-b7miuh"&&(J.textContent=ms),mt=i(n),Q=p(n,"UL",{"data-svelte-h":!0}),l(Q)!=="svelte-1k4mxsu"&&(Q.innerHTML=gs),gt=i(n),K=p(n,"P",{"data-svelte-h":!0}),l(K)!=="svelte-kb2ac3"&&(K.innerHTML=fs),ft=i(n),b=p(n,"DIV",{class:!0});var tt=r(b);W=p(tt,"DIV",{class:!0,"data-svelte-h":!0}),l(W)!=="svelte-1llzxwj"&&(W.textContent=hs),H(nn.$$.fragment,tt),P=p(tt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-151ra6r"&&(P.textContent=xs),On=p(tt,"PRE",{class:!0});var Ks=r(On);ht=d(Ks,!1),Ks.forEach(t),tt.forEach(t),xt=i(n),C=p(n,"DIV",{class:!0});var st=r(C);tn=p(st,"DIV",{class:!0,"data-svelte-h":!0}),l(tn)!=="svelte-1llzxwj"&&(tn.textContent=vs),H(sn.$$.fragment,st),y=p(st,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-lmkqvi"&&(y.textContent=ws),Gn=p(st,"PRE",{class:!0});var Ws=r(Gn);vt=d(Ws,!1),Ws.forEach(t),st.forEach(t),wt=i(n),an=p(n,"H2",{"data-svelte-h":!0}),l(an)!=="svelte-64hpox"&&(an.innerHTML=bs),bt=i(n),en=p(n,"P",{"data-svelte-h":!0}),l(en)!=="svelte-ey0u4f"&&(en.innerHTML=Cs),Ct=i(n),m=p(n,"DIV",{class:!0});var Yn=r(m);pn=p(Yn,"DIV",{class:!0,"data-svelte-h":!0}),l(pn)!=="svelte-1llzxwj"&&(pn.textContent=_s),H(on.$$.fragment,Yn),A=p(Yn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(A)!=="svelte-13igqgu"&&(A.textContent=Ts),Bn=p(Yn,"PRE",{class:!0});var na=r(Bn);_t=d(na,!1),na.forEach(t),$n=p(Yn,"PRE",{class:!0});var ta=r($n);Tt=d(ta,!1),ta.forEach(t),Yn.forEach(t),Pt=i(n),ln=p(n,"H2",{"data-svelte-h":!0}),l(ln)!=="svelte-1p97yw8"&&(ln.innerHTML=Ps),yt=i(n),cn=p(n,"P",{"data-svelte-h":!0}),l(cn)!=="svelte-1a914ud"&&(cn.innerHTML=ys),At=i(n),un=p(n,"UL",{"data-svelte-h":!0}),l(un)!=="svelte-1tgpmb2"&&(un.innerHTML=As),Et=i(n),rn=p(n,"P",{"data-svelte-h":!0}),l(rn)!=="svelte-16raihr"&&(rn.innerHTML=Es),Mt=i(n),kn=p(n,"P",{"data-svelte-h":!0}),l(kn)!=="svelte-14xf8oy"&&(kn.innerHTML=Ms),Lt=i(n),g=p(n,"DIV",{class:!0});var Jn=r(g);dn=p(Jn,"DIV",{class:!0,"data-svelte-h":!0}),l(dn)!=="svelte-1llzxwj"&&(dn.textContent=Ls),H(mn.$$.fragment,Jn),E=p(Jn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-qtwg9h"&&(E.textContent=Is),Nn=p(Jn,"PRE",{class:!0});var sa=r(Nn);It=d(sa,!1),sa.forEach(t),Rn=p(Jn,"PRE",{class:!0});var aa=r(Rn);jt=d(aa,!1),aa.forEach(t),Jn.forEach(t),St=i(n),gn=p(n,"H2",{"data-svelte-h":!0}),l(gn)!=="svelte-12fsg0f"&&(gn.innerHTML=js),Ht=i(n),fn=p(n,"P",{"data-svelte-h":!0}),l(fn)!=="svelte-15uuoqo"&&(fn.innerHTML=Ss),Ot=i(n),f=p(n,"DIV",{class:!0});var Qn=r(f);hn=p(Qn,"DIV",{class:!0,"data-svelte-h":!0}),l(hn)!=="svelte-1llzxwj"&&(hn.textContent=Hs),H(xn.$$.fragment,Qn),M=p(Qn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(M)!=="svelte-1qtj0ia"&&(M.textContent=Os),Dn=p(Qn,"PRE",{class:!0});var ea=r(Dn);Gt=d(ea,!1),ea.forEach(t),Vn=p(Qn,"PRE",{class:!0});var pa=r(Vn);Bt=d(pa,!1),pa.forEach(t),Qn.forEach(t),$t=i(n),vn=p(n,"H2",{"data-svelte-h":!0}),l(vn)!=="svelte-wybre1"&&(vn.innerHTML=Gs),Nt=i(n),wn=p(n,"P",{"data-svelte-h":!0}),l(wn)!=="svelte-1xl5fq7"&&(wn.innerHTML=Bs),Rt=i(n),bn=p(n,"P",{"data-svelte-h":!0}),l(bn)!=="svelte-1g27q7t"&&(bn.innerHTML=$s),Dt=i(n),Cn=p(n,"P",{"data-svelte-h":!0}),l(Cn)!=="svelte-1gephc6"&&(Cn.textContent=Ns),Vt=i(n),_n=p(n,"P",{"data-svelte-h":!0}),l(_n)!=="svelte-b7miuh"&&(_n.textContent=Rs),Ft=i(n),Tn=p(n,"UL",{"data-svelte-h":!0}),l(Tn)!=="svelte-4i5443"&&(Tn.innerHTML=Ds),qt=i(n),Pn=p(n,"P",{"data-svelte-h":!0}),l(Pn)!=="svelte-w0vjhj"&&(Pn.innerHTML=Vs),Ut=i(n),h=p(n,"DIV",{class:!0});var Kn=r(h);yn=p(Kn,"DIV",{class:!0,"data-svelte-h":!0}),l(yn)!=="svelte-1llzxwj"&&(yn.textContent=Fs),H(An.$$.fragment,Kn),L=p(Kn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(L)!=="svelte-1pga4v4"&&(L.textContent=qs),Fn=p(Kn,"PRE",{class:!0});var oa=r(Fn);zt=d(oa,!1),oa.forEach(t),qn=p(Kn,"PRE",{class:!0});var la=r(qn);Xt=d(la,!1),la.forEach(t),Kn.forEach(t),Zt=i(n),x=p(n,"DIV",{class:!0});var Wn=r(x);En=p(Wn,"DIV",{class:!0,"data-svelte-h":!0}),l(En)!=="svelte-1llzxwj"&&(En.textContent=Us),H(Mn.$$.fragment,Wn),I=p(Wn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(I)!=="svelte-68gwjg"&&(I.textContent=zs),Un=p(Wn,"PRE",{class:!0});var ca=r(Un);Yt=d(ca,!1),ca.forEach(t),zn=p(Wn,"PRE",{class:!0});var ia=r(zn);Jt=d(ia,!1),ia.forEach(t),Wn.forEach(t),Qt=i(n),Ln=p(n,"H2",{"data-svelte-h":!0}),l(Ln)!=="svelte-1kp97r3"&&(Ln.innerHTML=Xs),Kt=i(n),In=p(n,"P",{"data-svelte-h":!0}),l(In)!=="svelte-9dhjdt"&&(In.innerHTML=Zs),Wt=i(n),v=p(n,"DIV",{class:!0});var nt=r(v);jn=p(nt,"DIV",{class:!0,"data-svelte-h":!0}),l(jn)!=="svelte-1llzxwj"&&(jn.textContent=Ys),H(Sn.$$.fragment,nt),j=p(nt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(j)!=="svelte-1oy6hse"&&(j.textContent=Js),Xn=p(nt,"PRE",{class:!0});var ua=r(Xn);ns=d(ua,!1),ua.forEach(t),Zn=p(nt,"PRE",{class:!0});var ra=r(Zn);ts=d(ra,!1),ra.forEach(t),nt.forEach(t),this.h()},h(){o(q,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNpdjj0LwjAQhv9KvKmFIlVwySYO0kEQdDNCY3N+YElCehVLyX83Gojodu8Xz40grQU+QmMUAoemlV3HNsPSWoZPQq06Fu5RaEGNQ0m4I+loKy+Y5R9XkEPqnWYpeLteaA++ABt0B/wwwk0BnxVwNq1CV0XxA037BH6LyEj0dX/75+5DPRqCpifZ3C/O9FqtTGtcVjtUdZ5iCt2srthVPpBJFkL2XUxi0UeihwKe4ctFWcAAfF6W/uhf0lFsCA=="),o(T,"title","Open in our Online Editor"),ct.a=null,o(Hn,"class","language-js"),o(w,"class","remark-container tip"),o(W,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdj81qwzAQhF9l2ZMDJrgBX3wrPZQeCoXmFhesSNtYRJaEtIYEo3evXIH7c9uZ2Z1PWlB4j92C0inCDqURMcLr/dF7oBuTVRHyvPS2ZxlIML2zCPwmLlTtvt2eA/EcLGzB6qbeJkw1+qwjdqcFtcLuocZPZxSFlyL+QLf7DbyKwtjoz7P+zz3m9WL0vD8Leb0EN1v15IwL1RBIDbuf2IVMr9oahrOZ6VfCuaUajqOOIN3knSXLMIoIAtppAh61vMJ6A6UDnAVhDEStKO5LUSpvTVjjLf+vbWq8Y3domvSRvgAhyYDK"),o(P,"title","Open in our Online Editor"),ht.a=null,o(On,"class","language-js"),o(b,"class","remark-container tip"),o(tn,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNplkE1rhDAQhv/KMCcXZNcW9lBvpYelh0Khe6sFoxk1NCYhGWEXyX9vXMF+nZL3eZN5SGYUzmE5Y2slYYmtFiHAy/XROaALk5EB0n6uTMWtJ8H0xsLzq+gp291oxZ548ga2YqGxMhFjji7lgOX7jEpieZdjZ7Uk/7yGX9Lt/iZewurY7KdJ/fWe0/EVVLxvRPvZezsZ+WS19VntSda779r6ZM+OOdSNnqhOKzf/+4fEtRpvvfY/ek6urD4PKkBrR2cNGYZBBJCq68gvaR0RwBpg6w6NZbYjBCUJhJGgqeODV/3AN7Zfh8f1lRFzvKSfORY5XrG8L4r4Eb8AD8mV8w=="),o(y,"title","Open in our Online Editor"),vt.a=null,o(Gn,"class","language-js"),o(C,"class","remark-container tip"),o(pn,"class","remark-container__title"),o(A,"target","_blank"),o(A,"href","/editor#eNpdj8FqwzAMhl9F6JRCKOlgF9/GDmOHwth6WwbxbK0Ny2wjK9AS/O5zavBYDwLp/6VP0oI6BFQLGm8JFZpJxwj7y0MIQGchZyPkfOldL2sYJi30JprlRR+p2RRHmGRmB9VY1VSGEqYWQ9YiqvcFR4tq1+KXnyzxcyn+La+MesBa3FzwNI+3uw+5vQi9bD+1+T6yn5199JPnZmCyw6baxrMjftV2nGOz6/4MyZBmOJwISksE70BOY7zis/gTvCMnoJngyie7LeD6bovn/NV91+IF1V3XpY/0C7hfgV4="),o(A,"title","Open in our Online Editor"),_t.a=null,o(Bn,"class","language-js"),Tt.a=null,o($n,"class","language-js"),o(m,"class","remark-container tip"),o(dn,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNp1UMFKxDAQ/ZU4FxMopQpecvOi7EEQ9WaFxmR2LcQkJFPcpeTfTShUuouHGWbey3szkxlUCCBn0N4gSNBWpcSeTvchMDwSOpNYqefe9VRDR1SEr6QiPasDcrEwFJGm6NhKVDQvogy5gVCwBPJ9htGAvGlg763BuFuazfDVY12gNmcbPE7j+ewX/5PavXfEH0pqtbc+8iGiGYRo9ddoTUTHF0lPb8W8pZL4sLv+ZuXZ1SCaDXvh9WknrGZ/sopc6P5xFZs/aeBYTr/rGjiBvO26/JF/AXuGi/c="),o(E,"title","Open in our Online Editor"),It.a=null,o(Nn,"class","language-js"),jt.a=null,o(Rn,"class","language-js"),o(g,"class","remark-container tip"),o(hn,"class","remark-container__title"),o(M,"target","_blank"),o(M,"href","/editor#eNp9UktrwkAQ/ivToYcEQogFL0EPehEPltJ6qwXX7KihcbPsTogS8t+7NjHVtvGwy87je8ywFQqtMa4wySVhjEkmrIXFaaI10JFJSQvuXa3Uis8nMSSY3lgYfhE78vymwoa4MAq6wjlbN6Aa6wC1y1mM3ytMJcaDALd5JsnMm+BGvOPoDJyDzoERSuaH5+KwITMlLolUNFFyAGOILj25mtI2Nz/2dHgHthC8b+uef2X8Mu2sSH/P+ZqXNkz2aSYNKa8prXjpDIfsLm+93BM0lKC+NSG1MTxW/UbqcO0HN0yfRHq+9e54H0EUDv1OUrBTAQH2ILKs1X3oYXVAGI2hn/wv7Sbd/UM6Ldjtu22ekSLjVgaKyra3a/VbxPXPCPDoPsAwCvCE8VMU1R/1F8qK6vQ="),o(M,"title","Open in our Online Editor"),Gt.a=null,o(Dn,"class","language-js"),Bt.a=null,o(Vn,"class","language-js"),o(f,"class","remark-container tip"),o(yn,"class","remark-container__title"),o(L,"target","_blank"),o(L,"href","/editor#eNpdT8FqwzAM/RWhUwqhJINcfBs7jB0Gg/W2DOLZWmrq2MZ2oCX43+fg4bEeBNJ7etJ7G3LnkG0orCRkKDQPAV5vj84BXSMZGSD322jGuJfwxCO9R+7jG5+pORQmeoqrN1CJHU1FlDC16DIWkH1sqCSyvsVvqyX5lzL8e15vVAP7cOfgeVX3v095vQBjPH5xcZm9XY18str6ZvIkp0OlHZdSmbnphz8sZn0znc4qgLCLs4ZMhDMP0A/LAr8KsAa41hCUpHAsF2vOFq85ztC1eEP20HXpM/0A7vp94g=="),o(L,"title","Open in our Online Editor"),zt.a=null,o(Fn,"class","language-js"),Xt.a=null,o(qn,"class","language-js"),o(h,"class","remark-container tip"),o(En,"class","remark-container__title"),o(I,"target","_blank"),o(I,"href","/editor#eNptkEFrhDAQhf/KMCcXwqJCL95KD6WHQqF7qwWjmdVQTUIywi7if2/UIttlD4G8983MG2ZC6RwWEzZWERbY9DIEeL8+Owd0YTIqQPxPpSl5eY0nyfTJ0vOHbCk5bIQ98egN7GBx561pxlmgi17A4mtCrbDIBJ5tr8i/beJf+D5jX2ARdxu8jvo++xTLN6PkYy2bn9bb0agX21ufVJ5Uddixk0pp0yZ5KqDi+gHJFtL7G8LWJTcqpiXVqdMBGjs4a8gwdDJAng4D/E0Ba4A7gtgKQSsCaRTUltkOqxarkT3o6OnMK/S67XgtPm677FcVeInHe0oFXrHI03T+nn8BmpOjyA=="),o(I,"title","Open in our Online Editor"),Yt.a=null,o(Un,"class","language-js"),Jt.a=null,o(zn,"class","language-js"),o(x,"class","remark-container tip"),o(jn,"class","remark-container__title"),o(j,"target","_blank"),o(j,"href","/editor#eNp9UktrwkAQ/ivToYcEQogFL0EPehEPltJ6qwXX7GgCcTfsTogS8t+7NjFVWz3ssvP4HjNsjaIoMK4x0ZIwxiQX1sLiOCkKoAOTkhbcu16pFZ9OYkgwfbAw/CZ25PlthQ1xaRT0hVO2aUENNgEWLmcx/qwxkxgPAtzqXJKZt8GVeM/RGzgFvQMjlNT713K/ITMlrohUNFFyAGOIzj1aTWmrza+9InwAWwhOu7rnXxg/Tzsrs9s533VlwyTNcmlIeW1pxUtnOGR3eetlStBSgvrRhMzG8FzfN9KEaz+4YrKpruZb74H3EUTh0O8lBTsVEGD3Is873ac7rA4IozHcJ/9Lu8l2/5BOS3b77ppnpMi4lYGiquvtW/0OcfkzAjy4DzCMAjxi/BJFzVfzDfaa6yw="),o(j,"title","Open in our Online Editor"),ns.a=null,o(Xn,"class","language-js"),ts.a=null,o(Zn,"class","language-js"),o(v,"class","remark-container tip")},m(n,s){a(n,_,s),a(n,at,s),a(n,R,s),a(n,et,s),a(n,D,s),a(n,pt,s),a(n,V,s),a(n,ot,s),a(n,F,s),a(n,lt,s),a(n,w,s),u(w,q),O(U,w,null),u(w,T),u(w,Hn),ct.m(da,Hn),a(n,it,s),a(n,z,s),a(n,ut,s),a(n,X,s),a(n,rt,s),a(n,Z,s),a(n,kt,s),a(n,Y,s),a(n,dt,s),a(n,J,s),a(n,mt,s),a(n,Q,s),a(n,gt,s),a(n,K,s),a(n,ft,s),a(n,b,s),u(b,W),O(nn,b,null),u(b,P),u(b,On),ht.m(ma,On),a(n,xt,s),a(n,C,s),u(C,tn),O(sn,C,null),u(C,y),u(C,Gn),vt.m(ga,Gn),a(n,wt,s),a(n,an,s),a(n,bt,s),a(n,en,s),a(n,Ct,s),a(n,m,s),u(m,pn),O(on,m,null),u(m,A),u(m,Bn),_t.m(fa,Bn),u(m,$n),Tt.m(ha,$n),a(n,Pt,s),a(n,ln,s),a(n,yt,s),a(n,cn,s),a(n,At,s),a(n,un,s),a(n,Et,s),a(n,rn,s),a(n,Mt,s),a(n,kn,s),a(n,Lt,s),a(n,g,s),u(g,dn),O(mn,g,null),u(g,E),u(g,Nn),It.m(xa,Nn),u(g,Rn),jt.m(va,Rn),a(n,St,s),a(n,gn,s),a(n,Ht,s),a(n,fn,s),a(n,Ot,s),a(n,f,s),u(f,hn),O(xn,f,null),u(f,M),u(f,Dn),Gt.m(wa,Dn),u(f,Vn),Bt.m(ba,Vn),a(n,$t,s),a(n,vn,s),a(n,Nt,s),a(n,wn,s),a(n,Rt,s),a(n,bn,s),a(n,Dt,s),a(n,Cn,s),a(n,Vt,s),a(n,_n,s),a(n,Ft,s),a(n,Tn,s),a(n,qt,s),a(n,Pn,s),a(n,Ut,s),a(n,h,s),u(h,yn),O(An,h,null),u(h,L),u(h,Fn),zt.m(Ca,Fn),u(h,qn),Xt.m(_a,qn),a(n,Zt,s),a(n,x,s),u(x,En),O(Mn,x,null),u(x,I),u(x,Un),Yt.m(Ta,Un),u(x,zn),Jt.m(Pa,zn),a(n,Qt,s),a(n,Ln,s),a(n,Kt,s),a(n,In,s),a(n,Wt,s),a(n,v,s),u(v,jn),O(Sn,v,null),u(v,j),u(v,Xn),ns.m(ya,Xn),u(v,Zn),ts.m(Aa,Zn),ss=!0},p:Ma,i(n){ss||(G(U.$$.fragment,n),G(nn.$$.fragment,n),G(sn.$$.fragment,n),G(on.$$.fragment,n),G(mn.$$.fragment,n),G(xn.$$.fragment,n),G(An.$$.fragment,n),G(Mn.$$.fragment,n),G(Sn.$$.fragment,n),ss=!0)},o(n){B(U.$$.fragment,n),B(nn.$$.fragment,n),B(sn.$$.fragment,n),B(on.$$.fragment,n),B(mn.$$.fragment,n),B(xn.$$.fragment,n),B(An.$$.fragment,n),B(Mn.$$.fragment,n),B(Sn.$$.fragment,n),ss=!1},d(n){n&&(t(_),t(at),t(R),t(et),t(D),t(pt),t(V),t(ot),t(F),t(lt),t(w),t(it),t(z),t(ut),t(X),t(rt),t(Z),t(kt),t(Y),t(dt),t(J),t(mt),t(Q),t(gt),t(K),t(ft),t(b),t(xt),t(C),t(wt),t(an),t(bt),t(en),t(Ct),t(m),t(Pt),t(ln),t(yt),t(cn),t(At),t(un),t(Et),t(rn),t(Mt),t(kn),t(Lt),t(g),t(St),t(gn),t(Ht),t(fn),t(Ot),t(f),t($t),t(vn),t(Nt),t(wn),t(Rt),t(bn),t(Dt),t(Cn),t(Vt),t(_n),t(Ft),t(Tn),t(qt),t(Pn),t(Ut),t(h),t(Zt),t(x),t(Qt),t(Ln),t(Kt),t(In),t(Wt),t(v)),$(U),$(nn),$(sn),$(on),$(mn),$(xn),$(An),$(Mn),$(Sn)}}}class Ga extends La{constructor(_){super(),Ia(this,_,null,ja,Ea,{})}}export{Ga as component};
