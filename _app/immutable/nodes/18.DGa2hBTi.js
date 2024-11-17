import{s as Ga,n as Ra}from"../chunks/scheduler.B0TnBjPs.js";import{S as Na,i as La,e as s,s as u,c as Cn,H as d,a as e,g as c,b as i,d as r,f as Sn,n as g,h as t,o,j as p,p as l,m as Hn,t as Mn,k as jn,l as Gn}from"../chunks/index.Cnh3HYw3.js";import{V as Rn}from"../chunks/ViewApp.BajIxHdc.js";function ba(fa){let w,Pt="<code>EnterText</code>",Ln,M,_t="On this page you find the documentation for the GUI Component <code>EnterText</code>.",bn,H,Et='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterText</code> component. The <code>EnterText</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',Bn,j,yt="Introduction",In,G,Tt="The <code>EnterText</code> component is a view in which the user can enter some text. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",An,h,R,Ct="Example",ln,St="In this example, the GUI consists of only the <code>EnterText</code> component, so it covers the entire screen.",N,P,Ht="Open in Online Editor",un,Un,ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,On,L,Mt="<code>text()</code> - Setting an initial text",Dn,b,jt="Use the configuration method <code>text()</code> to give the <code>EnterText</code> a text it should contain from the start. Pass the text as a string.",$n,v,B,Gt="Example",I,_,Rt="Open in Online Editor",rn,zn,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Write here!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,qn,A,Nt="<code>placeholder()</code> - Setting a placeholder text",Wn,U,Lt="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterText</code> component when it&#39;s empty.",Vn,x,O,bt="Example",kn,Bt="Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",D,E,It="Open in Online Editor",dn,Jn,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Qn,$,At="<code>page()</code> &amp; <code>pageIfEqual()</code> - Going to next page",Kn,z,Ut="Use the configuration method <code>pageIfEqual()</code> to specify a <code>Page</code> the user should come to if she has entered some specific text in the component. Pass the method two values:",Zn,q,Ot="<li>The text the user might enter</li> <li>The <code>Page</code> the user should come to if that text has been entered</li>",Yn,W,Dt="You can call this method multiple times.",Fn,V,$t="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if she has entered a text that&#39;s not equal to any of the texts passed to <code>pageIfEquals()</code>.",Xn,k,J,zt="Example",Q,y,qt="Open in Online Editor",gn,nt,wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which is your favorite name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText
					<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>NormalNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> BeautifulNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Gargamel</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> UglyNamePage<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pageIfEqual</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> EmptyNamePage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,mn,tt,Pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">NormalNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That's no special name.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,fn,at,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BeautifulNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, that's a very beautiful name :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,hn,st,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UglyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, that's not a very nice name.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,xn,et,ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EmptyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You must enter a name...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pt,K,Wt="<code>store()</code> - Storing the entered text",ot,Z,Vt="Use the configuration method <code>store()</code> to store the text the user has entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",ct,Y,Jt="<li>The object in which the entered text should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered text should be stored</li>",lt,m,F,Qt="Example",X,T,Kt="Open in Online Editor",vn,ut,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,it,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Pn,rt,Sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,kt,nn,Zt="<code>onChange()</code> - Handling the entered text",dt,tn,Yt="Use the configuration method <code>onChange()</code> to tell the <code>EnterText</code> component which method to call to handle the entered text. This method will be called each time the user makes a change in the <code>EnterText</code> component, such as:",gt,an,Ft="<li>Writes a character in it</li> <li>Removes a character from it</li> <li>Paste text in it</li> <li>Removes all text in it</li> <li>Etc.</li>",mt,sn,Xt="Your method will also be passed the entered text as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",ft,f,en,na="Example",pn,C,ta="Open in Online Editor",_n,ht,Ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,En,xt,Ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredName</span><span class="token punctuation">(</span><span class="token parameter">enteredName</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> enteredName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yn,vt,ja=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,wt;return N=new Rn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText
	}
}`,x:150,y:200}]}}}),I=new Rn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.text(\`Write here!\`)
	}
}`,x:150,y:200}]}}}),D=new Rn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(\`Enter name\`)
	}
}`,x:150,y:200}]}}}),Q=new Rn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`Which is your favorite name?\`),
			Columns.children(
				EnterText
					.size(1)
					.page(NormalNamePage)
					.pageIfEqual(\`Peter\`, BeautifulNamePage)
					.pageIfEqual(\`Gargamel\`, UglyNamePage)
					.pageIfEqual(\`\`, EmptyNamePage),
				Button.text(\`⇨\`),
			),
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class NormalNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`That's no special name.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:450,y:200},{id:3,folderId:1,code:`class BeautifulNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, that's a very beautiful name :)\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:750,y:200},{id:4,folderId:1,code:`class UglyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Oh, that's not a very nice name.\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:1050,y:200},{id:5,folderId:1,code:`class EmptyNamePage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`You must enter a name...\`),
			Button.text(\`Go back\`).page(StartPage),
		)
	}
}`,x:1350,y:200}]}}}),X=new Rn({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.size(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.size(1).store(a, \`name\`).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
}`,x:150,y:200},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello, \${a.name}!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:450,y:200}]}}}),pn=new Rn({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.size(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.size(1).onChange(p.handleEnteredName).page(GreetingPage),
				Button.text(\`⇨\`),
			)
		)
	}
	
	handleEnteredName(enteredName){
		a.name = enteredName.toUpperCase()
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class GreetingPage extends Page{
	createGui(){
		return Rows.children(
			Text.text(\`Hello, \${a.name}!\`),
			Button.text(\`Back to StartPage\`).page(StartPage),
		)
	}
}`,x:450,y:200}]}}}),{c(){w=s("h1"),w.innerHTML=Pt,Ln=u(),M=s("p"),M.innerHTML=_t,bn=u(),H=s("div"),H.innerHTML=Et,Bn=u(),j=s("h2"),j.textContent=yt,In=u(),G=s("p"),G.innerHTML=Tt,An=u(),h=s("div"),R=s("div"),R.textContent=Ct,ln=s("p"),ln.innerHTML=St,Cn(N.$$.fragment),P=s("a"),P.textContent=Ht,un=s("pre"),Un=new d(!1),On=u(),L=s("h2"),L.innerHTML=Mt,Dn=u(),b=s("p"),b.innerHTML=jt,$n=u(),v=s("div"),B=s("div"),B.textContent=Gt,Cn(I.$$.fragment),_=s("a"),_.textContent=Rt,rn=s("pre"),zn=new d(!1),qn=u(),A=s("h2"),A.innerHTML=Nt,Wn=u(),U=s("p"),U.innerHTML=Lt,Vn=u(),x=s("div"),O=s("div"),O.textContent=bt,kn=s("p"),kn.textContent=Bt,Cn(D.$$.fragment),E=s("a"),E.textContent=It,dn=s("pre"),Jn=new d(!1),Qn=u(),$=s("h2"),$.innerHTML=At,Kn=u(),z=s("p"),z.innerHTML=Ut,Zn=u(),q=s("ol"),q.innerHTML=Ot,Yn=u(),W=s("p"),W.textContent=Dt,Fn=u(),V=s("p"),V.innerHTML=$t,Xn=u(),k=s("div"),J=s("div"),J.textContent=zt,Cn(Q.$$.fragment),y=s("a"),y.textContent=qt,gn=s("pre"),nt=new d(!1),mn=s("pre"),tt=new d(!1),fn=s("pre"),at=new d(!1),hn=s("pre"),st=new d(!1),xn=s("pre"),et=new d(!1),pt=u(),K=s("h2"),K.innerHTML=Wt,ot=u(),Z=s("p"),Z.innerHTML=Vt,ct=u(),Y=s("ol"),Y.innerHTML=Jt,lt=u(),m=s("div"),F=s("div"),F.textContent=Qt,Cn(X.$$.fragment),T=s("a"),T.textContent=Kt,vn=s("pre"),ut=new d(!1),wn=s("pre"),it=new d(!1),Pn=s("pre"),rt=new d(!1),kt=u(),nn=s("h2"),nn.innerHTML=Zt,dt=u(),tn=s("p"),tn.innerHTML=Yt,gt=u(),an=s("ul"),an.innerHTML=Ft,mt=u(),sn=s("p"),sn.innerHTML=Xt,ft=u(),f=s("div"),en=s("div"),en.textContent=na,Cn(pn.$$.fragment),C=s("a"),C.textContent=ta,_n=s("pre"),ht=new d(!1),En=s("pre"),xt=new d(!1),yn=s("pre"),vt=new d(!1),this.h()},l(n){w=e(n,"H1",{"data-svelte-h":!0}),c(w)!=="svelte-14mv1f4"&&(w.innerHTML=Pt),Ln=i(n),M=e(n,"P",{"data-svelte-h":!0}),c(M)!=="svelte-12o4it3"&&(M.innerHTML=_t),bn=i(n),H=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(H)!=="svelte-13nv2pd"&&(H.innerHTML=Et),Bn=i(n),j=e(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-1ukekoe"&&(j.textContent=yt),In=i(n),G=e(n,"P",{"data-svelte-h":!0}),c(G)!=="svelte-x0ww4i"&&(G.innerHTML=Tt),An=i(n),h=e(n,"DIV",{class:!0});var a=r(h);R=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1llzxwj"&&(R.textContent=Ct),ln=e(a,"P",{"data-svelte-h":!0}),c(ln)!=="svelte-nxesad"&&(ln.innerHTML=St),Sn(N.$$.fragment,a),P=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-ugrcz2"&&(P.textContent=Ht),un=e(a,"PRE",{class:!0});var aa=r(un);Un=g(aa,!1),aa.forEach(t),a.forEach(t),On=i(n),L=e(n,"H2",{"data-svelte-h":!0}),c(L)!=="svelte-jbiz3m"&&(L.innerHTML=Mt),Dn=i(n),b=e(n,"P",{"data-svelte-h":!0}),c(b)!=="svelte-dbdcdf"&&(b.innerHTML=jt),$n=i(n),v=e(n,"DIV",{class:!0});var Nn=r(v);B=e(Nn,"DIV",{class:!0,"data-svelte-h":!0}),c(B)!=="svelte-1llzxwj"&&(B.textContent=Gt),Sn(I.$$.fragment,Nn),_=e(Nn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-lwbjij"&&(_.textContent=Rt),rn=e(Nn,"PRE",{class:!0});var sa=r(rn);zn=g(sa,!1),sa.forEach(t),Nn.forEach(t),qn=i(n),A=e(n,"H2",{"data-svelte-h":!0}),c(A)!=="svelte-k11loz"&&(A.innerHTML=Nt),Wn=i(n),U=e(n,"P",{"data-svelte-h":!0}),c(U)!=="svelte-1cpcfdx"&&(U.innerHTML=Lt),Vn=i(n),x=e(n,"DIV",{class:!0});var Tn=r(x);O=e(Tn,"DIV",{class:!0,"data-svelte-h":!0}),c(O)!=="svelte-1llzxwj"&&(O.textContent=bt),kn=e(Tn,"P",{"data-svelte-h":!0}),c(kn)!=="svelte-izrpsa"&&(kn.textContent=Bt),Sn(D.$$.fragment,Tn),E=e(Tn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-104ly54"&&(E.textContent=It),dn=e(Tn,"PRE",{class:!0});var ea=r(dn);Jn=g(ea,!1),ea.forEach(t),Tn.forEach(t),Qn=i(n),$=e(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-1rxp84n"&&($.innerHTML=At),Kn=i(n),z=e(n,"P",{"data-svelte-h":!0}),c(z)!=="svelte-y54cr9"&&(z.innerHTML=Ut),Zn=i(n),q=e(n,"OL",{"data-svelte-h":!0}),c(q)!=="svelte-1ytvjci"&&(q.innerHTML=Ot),Yn=i(n),W=e(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-1jjmzhq"&&(W.textContent=Dt),Fn=i(n),V=e(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-1mdxsum"&&(V.innerHTML=$t),Xn=i(n),k=e(n,"DIV",{class:!0});var S=r(k);J=e(S,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-1llzxwj"&&(J.textContent=zt),Sn(Q.$$.fragment,S),y=e(S,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-1jsdqs9"&&(y.textContent=qt),gn=e(S,"PRE",{class:!0});var pa=r(gn);nt=g(pa,!1),pa.forEach(t),mn=e(S,"PRE",{class:!0});var oa=r(mn);tt=g(oa,!1),oa.forEach(t),fn=e(S,"PRE",{class:!0});var ca=r(fn);at=g(ca,!1),ca.forEach(t),hn=e(S,"PRE",{class:!0});var la=r(hn);st=g(la,!1),la.forEach(t),xn=e(S,"PRE",{class:!0});var ua=r(xn);et=g(ua,!1),ua.forEach(t),S.forEach(t),pt=i(n),K=e(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-230e0n"&&(K.innerHTML=Wt),ot=i(n),Z=e(n,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-h4vb77"&&(Z.innerHTML=Vt),ct=i(n),Y=e(n,"OL",{"data-svelte-h":!0}),c(Y)!=="svelte-v4b8tv"&&(Y.innerHTML=Jt),lt=i(n),m=e(n,"DIV",{class:!0});var on=r(m);F=e(on,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-1llzxwj"&&(F.textContent=Qt),Sn(X.$$.fragment,on),T=e(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-5cgpit"&&(T.textContent=Kt),vn=e(on,"PRE",{class:!0});var ia=r(vn);ut=g(ia,!1),ia.forEach(t),wn=e(on,"PRE",{class:!0});var ra=r(wn);it=g(ra,!1),ra.forEach(t),Pn=e(on,"PRE",{class:!0});var ka=r(Pn);rt=g(ka,!1),ka.forEach(t),on.forEach(t),kt=i(n),nn=e(n,"H2",{"data-svelte-h":!0}),c(nn)!=="svelte-1gvm7gu"&&(nn.innerHTML=Zt),dt=i(n),tn=e(n,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-19nitxk"&&(tn.innerHTML=Yt),gt=i(n),an=e(n,"UL",{"data-svelte-h":!0}),c(an)!=="svelte-q1ivrk"&&(an.innerHTML=Ft),mt=i(n),sn=e(n,"P",{"data-svelte-h":!0}),c(sn)!=="svelte-v0ef74"&&(sn.innerHTML=Xt),ft=i(n),f=e(n,"DIV",{class:!0});var cn=r(f);en=e(cn,"DIV",{class:!0,"data-svelte-h":!0}),c(en)!=="svelte-1llzxwj"&&(en.textContent=na),Sn(pn.$$.fragment,cn),C=e(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-g5qcql"&&(C.textContent=ta),_n=e(cn,"PRE",{class:!0});var da=r(_n);ht=g(da,!1),da.forEach(t),En=e(cn,"PRE",{class:!0});var ga=r(En);xt=g(ga,!1),ga.forEach(t),yn=e(cn,"PRE",{class:!0});var ma=r(yn);vt=g(ma,!1),ma.forEach(t),cn.forEach(t),this.h()},h(){o(H,"class","remark-container tip"),o(R,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjTELwjAQhf9KeJNChiq4ZHMQcRAE3YxDaE4plBiSK7SE/HdThaBu9713d1+C8R4qoX1agkLbmxjFcdp6L2hkcjaKMiftNLeBDNOZTeCTedBi+U41B+IhOFGLOc3aZWQJXzhCXRM6C7WSuD97S+HwgR9pva/iGb7M+6H7d+4cU7iU/eqUGMvrTSMxQa2bJt/yC3XgUHc="),o(P,"title","Open in our Online Editor"),Un.a=null,o(un,"class","language-js"),o(h,"class","remark-container tip"),o(B,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjsEKwjAMhl+l5rRBkSl46c2DiAdBUPBgBcsadTC60mawUfrudgpFvYR8fxK+BFDWgghQdxpBQN0q79l+XFvLcCA02rPUB2kk1Q4V4ZGUo4N6YFG+U0kOqXeG5cGURmkiRA42sQdxCdBoEAsO967V6HYf+JHm+yye4Mu87Zt/58YQulPan1Mqxe3sGkL2RIezW5n/4DAk3ariMIJYVlW8xhcovldr"),o(_,"title","Open in our Online Editor"),zn.a=null,o(rn,"class","language-js"),o(v,"class","remark-container tip"),o(O,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjj0LwjAQhv9KuMlCkCq4ZHMQcRAE3azQkJxaqGlIrtAS8t9NKwR1u/e5j+cCSGtBBFCdRhCgWuk9O45baxkOhEZ7lupQmYqUQ0l4JunoJB+4KGZakUPqnWG5MdFYmQiRg03Zg7gGaDSIFYd712p0h0/4keb9LJ7Cl3nfN//OnSF0lzS/tK1U+JyPL+oZMyNfWBf5Gw5Dkm5KDiOIdVnGW3wDWFZZ+A=="),o(E,"title","Open in our Online Editor"),Jn.a=null,o(dn,"class","language-js"),o(x,"class","remark-container tip"),o(J,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNq1lM1unDAQx1/F8qUgWWg3H6rEJWqq1SqHfKhNVVWhEg7MLlbAJvY4DV1xzqv0ufokNUuXhdKucqA3z3hm/v75b9hQXpY03NBEpUBDmuTcGHJZvStLAs8IMjXErTeRjDDRwBE+Itd4w9fg+dtshBrQakm6jSZbR7KmNaOliw0N7zZUpDScM7pSeQr6og0Gol1/J9wEPeWlFX9qflDfTJBkIk81SK/divDWDQiM+A7e3A/QBV78ORNJRoQhlbKarPiT0gKBSF7AWeyzXed7ldtC/mVkhAuJoJvJ+1TUqQxyDbN3pXTB8ys3v6EYF1ysFo+W5158A25uzMg5cItiZV/Ts+R67apy1/ZpnVev6HCVi6LEfSnb155bRCV/X9TPlx+9+9it/M5TRp+ddaczRisaHs1mNWutPTpk7fAypvG3Pe5txvGNIVIRU0IieL61NOghDOiWitzz5CH2W5O6J/cPzpMx5/EhzpGHU6JeZ4xgi8vJE+iK3O/kttAk9CfCfjvGPjmE3X+D/4lYKtxRS5HApC7PZ2Pe00O8gy9pSuAvypLCGiTQ/Gwc8BYzmAz0uAf6tf4Fo70eXg=="),o(y,"title","Open in our Online Editor"),nt.a=null,o(gn,"class","language-js"),tt.a=null,o(mn,"class","language-js"),at.a=null,o(fn,"class","language-js"),st.a=null,o(hn,"class","language-js"),et.a=null,o(xn,"class","language-js"),o(k,"class","remark-container tip"),o(F,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtUc1Kw0AQfpV1EExgCW3RS0DEilQPgviDByNkScY2NN0NuxPaGnL2VXwun8Qs2/y0iCcPCzszO9/fViCKAsIKEpUihJDkwhh2t70sCoYbQpka1tyrSEZkjxQrZOcsfpZLqdYybvuJRkH4SELTvZij57sN0killqwb2G7tlmqoORRNz0D4WkGWQjjm8K7yFPWtK/ZEdRidMFtUPfuszA55H9TaBMkiy1ON0nOjiJ4agMBkH+iN/YCawotfFoJODNuqUjPr8SL2efv8SuXlSv6CE9G1JNR7cIaURk9wFluY2A+sQ2+mESmTc6u4B45oWhIpudPw/fk1YPXdxd8lVgOHTRPK2YjDFsLJaFRzF9rkr9CGxP+Tm9N6g3muODuuRGB91kcD5XumpiJZMlL977WRdI128cDp6cDpW/0Dhsvysw=="),o(T,"title","Open in our Online Editor"),ut.a=null,o(vn,"class","language-js"),it.a=null,o(wn,"class","language-js"),rt.a=null,o(Pn,"class","language-js"),o(m,"class","remark-container tip"),o(en,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqdUsFKw0AQ/ZV1EUwghLboJSBii1QPiqjFgxGyJGMbmu4uuxPaGnL2V/wuv6QbN0kTKx48hN2Z2Xkz770UlElJg4LGIgEa0DhjWpPb7aWUBDYIPNHE3IuQh1h9nK2AnJNoxpdcrHnU5GMFDOERmcJ7NgfHtR2oAHPFSVuosqVtKmnpUWlymgYvBU0TGgw9+iayBNSNDXpLtRjtYlVQ9DeY5unP2Q9irf14kWaJAu7YUohPBsTX6Ts4Q9dHEzjR84LhiSZbkStS8byIXK95PhFZvuK/4IR4xRFUD07wyYJxo4L0zZlk8P0EkjsD6voVZWeqADDl84rCfkqI4xxR8Hqhr4/PzgquvbgdCUM8wHegM6sWgvm1bZ2aj2ImJagJ08atni0e3Rj1zwYe3dJgNBiUnnVn9Jc7XUKHBv3HHKvBNWSZ8MhxYUmURx1FemKNWbwkKPa/SVRL3SaaxoZtzfS0w/S13AHuqhrM"),o(C,"title","Open in our Online Editor"),ht.a=null,o(_n,"class","language-js"),xt.a=null,o(En,"class","language-js"),vt.a=null,o(yn,"class","language-js"),o(f,"class","remark-container tip")},m(n,a){p(n,w,a),p(n,Ln,a),p(n,M,a),p(n,bn,a),p(n,H,a),p(n,Bn,a),p(n,j,a),p(n,In,a),p(n,G,a),p(n,An,a),p(n,h,a),l(h,R),l(h,ln),Hn(N,h,null),l(h,P),l(h,un),Un.m(ha,un),p(n,On,a),p(n,L,a),p(n,Dn,a),p(n,b,a),p(n,$n,a),p(n,v,a),l(v,B),Hn(I,v,null),l(v,_),l(v,rn),zn.m(xa,rn),p(n,qn,a),p(n,A,a),p(n,Wn,a),p(n,U,a),p(n,Vn,a),p(n,x,a),l(x,O),l(x,kn),Hn(D,x,null),l(x,E),l(x,dn),Jn.m(va,dn),p(n,Qn,a),p(n,$,a),p(n,Kn,a),p(n,z,a),p(n,Zn,a),p(n,q,a),p(n,Yn,a),p(n,W,a),p(n,Fn,a),p(n,V,a),p(n,Xn,a),p(n,k,a),l(k,J),Hn(Q,k,null),l(k,y),l(k,gn),nt.m(wa,gn),l(k,mn),tt.m(Pa,mn),l(k,fn),at.m(_a,fn),l(k,hn),st.m(Ea,hn),l(k,xn),et.m(ya,xn),p(n,pt,a),p(n,K,a),p(n,ot,a),p(n,Z,a),p(n,ct,a),p(n,Y,a),p(n,lt,a),p(n,m,a),l(m,F),Hn(X,m,null),l(m,T),l(m,vn),ut.m(Ta,vn),l(m,wn),it.m(Ca,wn),l(m,Pn),rt.m(Sa,Pn),p(n,kt,a),p(n,nn,a),p(n,dt,a),p(n,tn,a),p(n,gt,a),p(n,an,a),p(n,mt,a),p(n,sn,a),p(n,ft,a),p(n,f,a),l(f,en),Hn(pn,f,null),l(f,C),l(f,_n),ht.m(Ha,_n),l(f,En),xt.m(Ma,En),l(f,yn),vt.m(ja,yn),wt=!0},p:Ra,i(n){wt||(Mn(N.$$.fragment,n),Mn(I.$$.fragment,n),Mn(D.$$.fragment,n),Mn(Q.$$.fragment,n),Mn(X.$$.fragment,n),Mn(pn.$$.fragment,n),wt=!0)},o(n){jn(N.$$.fragment,n),jn(I.$$.fragment,n),jn(D.$$.fragment,n),jn(Q.$$.fragment,n),jn(X.$$.fragment,n),jn(pn.$$.fragment,n),wt=!1},d(n){n&&(t(w),t(Ln),t(M),t(bn),t(H),t(Bn),t(j),t(In),t(G),t(An),t(h),t(On),t(L),t(Dn),t(b),t($n),t(v),t(qn),t(A),t(Wn),t(U),t(Vn),t(x),t(Qn),t($),t(Kn),t(z),t(Zn),t(q),t(Yn),t(W),t(Fn),t(V),t(Xn),t(k),t(pt),t(K),t(ot),t(Z),t(ct),t(Y),t(lt),t(m),t(kt),t(nn),t(dt),t(tn),t(gt),t(an),t(mt),t(sn),t(ft),t(f)),Gn(N),Gn(I),Gn(D),Gn(Q),Gn(X),Gn(pn)}}}class Ua extends Na{constructor(w){super(),La(this,w,null,ba,Ga,{})}}export{Ua as component};
