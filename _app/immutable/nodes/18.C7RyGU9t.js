import{s as Ha,n as La}from"../chunks/scheduler.B0TnBjPs.js";import{S as Ba,i as Ra,e as s,s as u,c as Cn,H as d,a as e,g as c,b as i,d as r,f as Mn,n as g,h as t,o,j as p,p as l,m as jn,t as Gn,k as Sn,l as Hn}from"../chunks/index.BXVnRmkj.js";import{V as Ln}from"../chunks/ViewApp.CB1BM1bD.js";function Na(fa){let w,Pt="<code>EnterText</code>",Rn,G,Et="On this page you find the documentation for the GUI Component <code>EnterText</code>.",Nn,j,_t='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterText</code> component. The <code>EnterText</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',In,S,yt="Introduction",bn,H,Tt="The <code>EnterText</code> component is a view in which the user can enter some text. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",Un,h,L,Ct="Example",ln,Mt="In this example, the GUI consists of only the <code>EnterText</code> component, so it covers the entire screen.",B,P,jt="Open in Online Editor",un,On,ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,qn,R,Gt="<code>text()</code> - Setting an initial text",zn,N,St="Use the configuration method <code>text()</code> to give the <code>EnterText</code> a text it should contain from the start. Pass the text as a string.",$n,v,I,Ht="Example",b,E,Lt="Open in Online Editor",rn,An,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Write here!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dn,U,Bt="<code>placeholder()</code> - Setting a placeholder text",Vn,O,Rt="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterText</code> component when it&#39;s empty.",Wn,x,q,Nt="Example",kn,It="Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",z,_,bt="Open in Online Editor",dn,Qn,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Fn,$,Ut="<code>page()</code> &amp; <code>pageIfEqual()</code> - Going to next page",Kn,A,Ot="Use the configuration method <code>pageIfEqual()</code> to specify a <code>Page</code> the user should come to if she has entered some specific text in the component. Pass the method two values:",Jn,D,qt="<li>The text the user might enter</li> <li>The <code>Page</code> the user should come to if that text has been entered</li>",Xn,V,zt="You can call this method multiple times.",Zn,W,$t="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if she has entered a text that&#39;s not equal to any of the texts passed to <code>pageIfEquals()</code>.",Yn,k,Q,At="Example",F,y,Dt="Open in Online Editor",gn,nt,wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which is your favorite name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText
					<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
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
<span class="token punctuation">&#125;</span></code>`,fn,at,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BeautifulNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, that's a very beautiful name :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,hn,st,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UglyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,pt,K,Vt="<code>store()</code> - Storing the entered text",ot,J,Wt="Use the configuration method <code>store()</code> to store the text the user has entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",ct,X,Qt="<li>The object in which the entered text should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered text should be stored</li>",lt,m,Z,Ft="Example",Y,T,Kt="Open in Online Editor",vn,ut,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,wn,it,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Pn,rt,Ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,kt,nn,Jt="<code>onChange()</code> - Handling the entered text",dt,tn,Xt="Use the configuration method <code>onChange()</code> to tell the <code>EnterText</code> component which method to call to handle the entered text. This method will be called each time the user makes a change in the <code>EnterText</code> component, such as:",gt,an,Zt="<li>Writes a character in it</li> <li>Removes a character from it</li> <li>Paste text in it</li> <li>Removes all text in it</li> <li>Etc.</li>",mt,sn,Yt="Your method will also be passed the entered text as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",ft,f,en,na="Example",pn,C,ta="Open in Online Editor",En,ht,ja=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_n,xt,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleEnteredName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleEnteredName</span><span class="token punctuation">(</span><span class="token parameter">enteredName</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>name <span class="token operator">=</span> enteredName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yn,vt,Sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,wt;return B=new Ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText
	}
}`,x:150,y:200}]}}}),b=new Ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.text(\`Write here!\`)
	}
}`,x:150,y:200}]}}}),z=new Ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(\`Enter name\`)
	}
}`,x:150,y:200}]}}}),F=new Ln({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`Which is your favorite name?\`),
			Columns.children(
				EnterText
					.grow(1)
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
}`,x:1350,y:200}]}}}),Y=new Ln({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.grow(1).store(a, \`name\`).page(GreetingPage),
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
}`,x:450,y:200}]}}}),pn=new Ln({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`Unknown\`
	
	createStartPage(){
		return StartPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.grow(1).text(\`What's your name?\`),
			Columns.children(
				EnterText.grow(1).onChange(p.handleEnteredName).page(GreetingPage),
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
}`,x:450,y:200}]}}}),{c(){w=s("h1"),w.innerHTML=Pt,Rn=u(),G=s("p"),G.innerHTML=Et,Nn=u(),j=s("div"),j.innerHTML=_t,In=u(),S=s("h2"),S.textContent=yt,bn=u(),H=s("p"),H.innerHTML=Tt,Un=u(),h=s("div"),L=s("div"),L.textContent=Ct,ln=s("p"),ln.innerHTML=Mt,Cn(B.$$.fragment),P=s("a"),P.textContent=jt,un=s("pre"),On=new d(!1),qn=u(),R=s("h2"),R.innerHTML=Gt,zn=u(),N=s("p"),N.innerHTML=St,$n=u(),v=s("div"),I=s("div"),I.textContent=Ht,Cn(b.$$.fragment),E=s("a"),E.textContent=Lt,rn=s("pre"),An=new d(!1),Dn=u(),U=s("h2"),U.innerHTML=Bt,Vn=u(),O=s("p"),O.innerHTML=Rt,Wn=u(),x=s("div"),q=s("div"),q.textContent=Nt,kn=s("p"),kn.textContent=It,Cn(z.$$.fragment),_=s("a"),_.textContent=bt,dn=s("pre"),Qn=new d(!1),Fn=u(),$=s("h2"),$.innerHTML=Ut,Kn=u(),A=s("p"),A.innerHTML=Ot,Jn=u(),D=s("ol"),D.innerHTML=qt,Xn=u(),V=s("p"),V.textContent=zt,Zn=u(),W=s("p"),W.innerHTML=$t,Yn=u(),k=s("div"),Q=s("div"),Q.textContent=At,Cn(F.$$.fragment),y=s("a"),y.textContent=Dt,gn=s("pre"),nt=new d(!1),mn=s("pre"),tt=new d(!1),fn=s("pre"),at=new d(!1),hn=s("pre"),st=new d(!1),xn=s("pre"),et=new d(!1),pt=u(),K=s("h2"),K.innerHTML=Vt,ot=u(),J=s("p"),J.innerHTML=Wt,ct=u(),X=s("ol"),X.innerHTML=Qt,lt=u(),m=s("div"),Z=s("div"),Z.textContent=Ft,Cn(Y.$$.fragment),T=s("a"),T.textContent=Kt,vn=s("pre"),ut=new d(!1),wn=s("pre"),it=new d(!1),Pn=s("pre"),rt=new d(!1),kt=u(),nn=s("h2"),nn.innerHTML=Jt,dt=u(),tn=s("p"),tn.innerHTML=Xt,gt=u(),an=s("ul"),an.innerHTML=Zt,mt=u(),sn=s("p"),sn.innerHTML=Yt,ft=u(),f=s("div"),en=s("div"),en.textContent=na,Cn(pn.$$.fragment),C=s("a"),C.textContent=ta,En=s("pre"),ht=new d(!1),_n=s("pre"),xt=new d(!1),yn=s("pre"),vt=new d(!1),this.h()},l(n){w=e(n,"H1",{"data-svelte-h":!0}),c(w)!=="svelte-14mv1f4"&&(w.innerHTML=Pt),Rn=i(n),G=e(n,"P",{"data-svelte-h":!0}),c(G)!=="svelte-12o4it3"&&(G.innerHTML=Et),Nn=i(n),j=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-13nv2pd"&&(j.innerHTML=_t),In=i(n),S=e(n,"H2",{"data-svelte-h":!0}),c(S)!=="svelte-1ukekoe"&&(S.textContent=yt),bn=i(n),H=e(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-x0ww4i"&&(H.innerHTML=Tt),Un=i(n),h=e(n,"DIV",{class:!0});var a=r(h);L=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(L)!=="svelte-1llzxwj"&&(L.textContent=Ct),ln=e(a,"P",{"data-svelte-h":!0}),c(ln)!=="svelte-nxesad"&&(ln.innerHTML=Mt),Mn(B.$$.fragment,a),P=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-ugrcz2"&&(P.textContent=jt),un=e(a,"PRE",{class:!0});var aa=r(un);On=g(aa,!1),aa.forEach(t),a.forEach(t),qn=i(n),R=e(n,"H2",{"data-svelte-h":!0}),c(R)!=="svelte-jbiz3m"&&(R.innerHTML=Gt),zn=i(n),N=e(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-dbdcdf"&&(N.innerHTML=St),$n=i(n),v=e(n,"DIV",{class:!0});var Bn=r(v);I=e(Bn,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-1llzxwj"&&(I.textContent=Ht),Mn(b.$$.fragment,Bn),E=e(Bn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-lwbjij"&&(E.textContent=Lt),rn=e(Bn,"PRE",{class:!0});var sa=r(rn);An=g(sa,!1),sa.forEach(t),Bn.forEach(t),Dn=i(n),U=e(n,"H2",{"data-svelte-h":!0}),c(U)!=="svelte-k11loz"&&(U.innerHTML=Bt),Vn=i(n),O=e(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-1cpcfdx"&&(O.innerHTML=Rt),Wn=i(n),x=e(n,"DIV",{class:!0});var Tn=r(x);q=e(Tn,"DIV",{class:!0,"data-svelte-h":!0}),c(q)!=="svelte-1llzxwj"&&(q.textContent=Nt),kn=e(Tn,"P",{"data-svelte-h":!0}),c(kn)!=="svelte-izrpsa"&&(kn.textContent=It),Mn(z.$$.fragment,Tn),_=e(Tn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-104ly54"&&(_.textContent=bt),dn=e(Tn,"PRE",{class:!0});var ea=r(dn);Qn=g(ea,!1),ea.forEach(t),Tn.forEach(t),Fn=i(n),$=e(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-1rxp84n"&&($.innerHTML=Ut),Kn=i(n),A=e(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-y54cr9"&&(A.innerHTML=Ot),Jn=i(n),D=e(n,"OL",{"data-svelte-h":!0}),c(D)!=="svelte-1ytvjci"&&(D.innerHTML=qt),Xn=i(n),V=e(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-1jjmzhq"&&(V.textContent=zt),Zn=i(n),W=e(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-1mdxsum"&&(W.innerHTML=$t),Yn=i(n),k=e(n,"DIV",{class:!0});var M=r(k);Q=e(M,"DIV",{class:!0,"data-svelte-h":!0}),c(Q)!=="svelte-1llzxwj"&&(Q.textContent=At),Mn(F.$$.fragment,M),y=e(M,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-gd9r3h"&&(y.textContent=Dt),gn=e(M,"PRE",{class:!0});var pa=r(gn);nt=g(pa,!1),pa.forEach(t),mn=e(M,"PRE",{class:!0});var oa=r(mn);tt=g(oa,!1),oa.forEach(t),fn=e(M,"PRE",{class:!0});var ca=r(fn);at=g(ca,!1),ca.forEach(t),hn=e(M,"PRE",{class:!0});var la=r(hn);st=g(la,!1),la.forEach(t),xn=e(M,"PRE",{class:!0});var ua=r(xn);et=g(ua,!1),ua.forEach(t),M.forEach(t),pt=i(n),K=e(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-230e0n"&&(K.innerHTML=Vt),ot=i(n),J=e(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-h4vb77"&&(J.innerHTML=Wt),ct=i(n),X=e(n,"OL",{"data-svelte-h":!0}),c(X)!=="svelte-v4b8tv"&&(X.innerHTML=Qt),lt=i(n),m=e(n,"DIV",{class:!0});var on=r(m);Z=e(on,"DIV",{class:!0,"data-svelte-h":!0}),c(Z)!=="svelte-1llzxwj"&&(Z.textContent=Ft),Mn(Y.$$.fragment,on),T=e(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-36x9f4"&&(T.textContent=Kt),vn=e(on,"PRE",{class:!0});var ia=r(vn);ut=g(ia,!1),ia.forEach(t),wn=e(on,"PRE",{class:!0});var ra=r(wn);it=g(ra,!1),ra.forEach(t),Pn=e(on,"PRE",{class:!0});var ka=r(Pn);rt=g(ka,!1),ka.forEach(t),on.forEach(t),kt=i(n),nn=e(n,"H2",{"data-svelte-h":!0}),c(nn)!=="svelte-1gvm7gu"&&(nn.innerHTML=Jt),dt=i(n),tn=e(n,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-19nitxk"&&(tn.innerHTML=Xt),gt=i(n),an=e(n,"UL",{"data-svelte-h":!0}),c(an)!=="svelte-q1ivrk"&&(an.innerHTML=Zt),mt=i(n),sn=e(n,"P",{"data-svelte-h":!0}),c(sn)!=="svelte-v0ef74"&&(sn.innerHTML=Yt),ft=i(n),f=e(n,"DIV",{class:!0});var cn=r(f);en=e(cn,"DIV",{class:!0,"data-svelte-h":!0}),c(en)!=="svelte-1llzxwj"&&(en.textContent=na),Mn(pn.$$.fragment,cn),C=e(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-1dzksfc"&&(C.textContent=ta),En=e(cn,"PRE",{class:!0});var da=r(En);ht=g(da,!1),da.forEach(t),_n=e(cn,"PRE",{class:!0});var ga=r(_n);xt=g(ga,!1),ga.forEach(t),yn=e(cn,"PRE",{class:!0});var ma=r(yn);vt=g(ma,!1),ma.forEach(t),cn.forEach(t),this.h()},h(){o(j,"class","remark-container tip"),o(L,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjTELwjAQhf9KeJNChiq4ZHMQcRAE3YxDaE4plBiSK7SE/HdThaBu9713d1+C8R4qoX1agkLbmxjFcdp6L2hkcjaKMiftNLeBDNOZTeCTedBi+U41B+IhOFGLOc3aZWQJXzhCXRM6C7WSuD97S+HwgR9pva/iGb7M+6H7d+4cU7iU/eqUGMvrTSMxQa2bJt/yC3XgUHc="),o(P,"title","Open in our Online Editor"),On.a=null,o(un,"class","language-js"),o(h,"class","remark-container tip"),o(I,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjsEKwjAMhl+l5rRBkSl46c2DiAdBUPBgBcsadTC60mawUfrudgpFvYR8fxK+BFDWgghQdxpBQN0q79l+XFvLcCA02rPUB2kk1Q4V4ZGUo4N6YFG+U0kOqXeG5cGURmkiRA42sQdxCdBoEAsO967V6HYf+JHm+yye4Mu87Zt/58YQulPan1Mqxe3sGkL2RIezW5n/4DAk3ariMIJYVlW8xhcovldr"),o(E,"title","Open in our Online Editor"),An.a=null,o(rn,"class","language-js"),o(v,"class","remark-container tip"),o(q,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjj0LwjAQhv9KuMlCkCq4ZHMQcRAE3azQkJxaqGlIrtAS8t9NKwR1u/e5j+cCSGtBBFCdRhCgWuk9O45baxkOhEZ7lupQmYqUQ0l4JunoJB+4KGZakUPqnWG5MdFYmQiRg03Zg7gGaDSIFYd712p0h0/4keb9LJ7Cl3nfN//OnSF0lzS/tK1U+JyPL+oZMyNfWBf5Gw5Dkm5KDiOIdVnGW3wDWFZZ+A=="),o(_,"title","Open in our Online Editor"),Qn.a=null,o(dn,"class","language-js"),o(x,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNq1lM1unDAQx1/F8qUgWWg3H6rEJWqq1SqHfKhNVUWlEg7MLlaNTc04CVpx7qvkufIkNUuWhdKucqA3z3hm/v75b9hQXhQ03NBEp0BDmkheluSy+lAUBJ4QVFoSt95EKsLEAEf4jNzgDV+D52+zERpAaxTpNppsHama1owWLi5p+G1DRUrDOaMrLVMwF20wEO36O+Em6CkvrfhT85N+LIMkEzI1oLx2K8JbNyBYG/3ozf0AXeDFXzORZESUpNLWkBV/0EYgEMVzOIt9tuv8qKXN1V9GRrhQCKaZvE9Fncog1zB7V9rkXF65+Q3FuOBitfhpufTiG3BzY0bOgVsUK/uWniU3a1clXduXtaze0OEqF3mB+1K2rz23iFq9XtTLr+fefexWfucpo0/OutMZoxUNj2azmrXWHh2ydngZ0/jbHvc24/iuJEqTsoBEcLm1NOghDOiWmtzz5EfstyZ1T+4fnCdjzuNDnCMPp0S9zhjBFpeTBzAVud/JbaFJ6E+E/X6MfXIIu/8G/xOx0rijViKBSV2ez8a8p4d4B1/SlMB32pLclkig+dk44C1mMBnocQ/0e/0byuMeZg=="),o(y,"title","Open in our Online Editor"),nt.a=null,o(gn,"class","language-js"),tt.a=null,o(mn,"class","language-js"),at.a=null,o(fn,"class","language-js"),st.a=null,o(hn,"class","language-js"),et.a=null,o(xn,"class","language-js"),o(k,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtUd1KwzAUfpV4EGwhlG3oTUHEiUwvBPEHL6zQ0B63si4pySnbKLn2VXwun8SGrF0n4pUXgZxzcr6/NCCqCuIGMpUjxJCVwhh2t72sKoYbQpkb1t6bRCbkjhQrZOcsfZZLqdYy7fqZRkH4SELTvZhjEPoN0ki1lqwfuK71SxYsh6rtGYhfGyhyiMcc3lWZo771xYGoHqMX5opmzz6ri5+8D2ptomxRlLlGGfhRQk8tQDTXah2Mw4jaIkhfFoJODNuqWjPn8SINeff8SpX1Sv6Ck9C1JNQHcIaUxkBwljqYNIycw2CmEamQc6d4D5zQtCZScqfh6+NzwBr6S7hLzAKHTRvK2YjDFuLJaGS5D23yV2hD4v/JzWu9wbJUnB03InI+7dFA+YGpqciWjNT+97pI+ka3+MPp6cDpm/0Gkq3yuw=="),o(T,"title","Open in our Online Editor"),ut.a=null,o(vn,"class","language-js"),it.a=null,o(wn,"class","language-js"),rt.a=null,o(Pn,"class","language-js"),o(m,"class","remark-container tip"),o(en,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqdUsFKw0AQ/ZV1EUwgLG3RS0DEBqkeFFGLByNkScY2NN1dNhPaEnL2V/wuv8SNm6SJFQ8ewu7M7LyZ915KypWifkljmQD1aZzxPCe3u0ulCGwRRJITcy9DEWL9Cb4Gck6iuVgJuRFRm481cIRH5Brv+QIc13agBiy0IF2hzla2qaKVR5XJ5dR/KWmaUH/s0TeZJaBvbDBYqsPoFquDcrjBrEh/zn6Qm5zFyzRLNAjHlkJ8MiBsoeXGGbsMTeBEz0uOJznZyUKTmudF5Hrt80BmxVr8ghPilUDQAzgpgiUXRgXFzJlk8P0EkjsD6rKasjPTAJiKRU1hPyXEaYEoRbPQ5/tHbwXXXtyehCEe4DvQm9UIwVljW6/GUM6VAh3w3Lg1sMWjW6P+2cijO+pPRqPKs+5M/nKnT+jQoP+YYzW4hiyTHjkuLYnqqKfIQKwpj1cE5f43iRqpu0Tb2LJtmJ72mL5WX/20GtQ="),o(C,"title","Open in our Online Editor"),ht.a=null,o(En,"class","language-js"),xt.a=null,o(_n,"class","language-js"),vt.a=null,o(yn,"class","language-js"),o(f,"class","remark-container tip")},m(n,a){p(n,w,a),p(n,Rn,a),p(n,G,a),p(n,Nn,a),p(n,j,a),p(n,In,a),p(n,S,a),p(n,bn,a),p(n,H,a),p(n,Un,a),p(n,h,a),l(h,L),l(h,ln),jn(B,h,null),l(h,P),l(h,un),On.m(ha,un),p(n,qn,a),p(n,R,a),p(n,zn,a),p(n,N,a),p(n,$n,a),p(n,v,a),l(v,I),jn(b,v,null),l(v,E),l(v,rn),An.m(xa,rn),p(n,Dn,a),p(n,U,a),p(n,Vn,a),p(n,O,a),p(n,Wn,a),p(n,x,a),l(x,q),l(x,kn),jn(z,x,null),l(x,_),l(x,dn),Qn.m(va,dn),p(n,Fn,a),p(n,$,a),p(n,Kn,a),p(n,A,a),p(n,Jn,a),p(n,D,a),p(n,Xn,a),p(n,V,a),p(n,Zn,a),p(n,W,a),p(n,Yn,a),p(n,k,a),l(k,Q),jn(F,k,null),l(k,y),l(k,gn),nt.m(wa,gn),l(k,mn),tt.m(Pa,mn),l(k,fn),at.m(Ea,fn),l(k,hn),st.m(_a,hn),l(k,xn),et.m(ya,xn),p(n,pt,a),p(n,K,a),p(n,ot,a),p(n,J,a),p(n,ct,a),p(n,X,a),p(n,lt,a),p(n,m,a),l(m,Z),jn(Y,m,null),l(m,T),l(m,vn),ut.m(Ta,vn),l(m,wn),it.m(Ca,wn),l(m,Pn),rt.m(Ma,Pn),p(n,kt,a),p(n,nn,a),p(n,dt,a),p(n,tn,a),p(n,gt,a),p(n,an,a),p(n,mt,a),p(n,sn,a),p(n,ft,a),p(n,f,a),l(f,en),jn(pn,f,null),l(f,C),l(f,En),ht.m(ja,En),l(f,_n),xt.m(Ga,_n),l(f,yn),vt.m(Sa,yn),wt=!0},p:La,i(n){wt||(Gn(B.$$.fragment,n),Gn(b.$$.fragment,n),Gn(z.$$.fragment,n),Gn(F.$$.fragment,n),Gn(Y.$$.fragment,n),Gn(pn.$$.fragment,n),wt=!0)},o(n){Sn(B.$$.fragment,n),Sn(b.$$.fragment,n),Sn(z.$$.fragment,n),Sn(F.$$.fragment,n),Sn(Y.$$.fragment,n),Sn(pn.$$.fragment,n),wt=!1},d(n){n&&(t(w),t(Rn),t(G),t(Nn),t(j),t(In),t(S),t(bn),t(H),t(Un),t(h),t(qn),t(R),t(zn),t(N),t($n),t(v),t(Dn),t(U),t(Vn),t(O),t(Wn),t(x),t(Fn),t($),t(Kn),t(A),t(Jn),t(D),t(Xn),t(V),t(Zn),t(W),t(Yn),t(k),t(pt),t(K),t(ot),t(J),t(ct),t(X),t(lt),t(m),t(kt),t(nn),t(dt),t(tn),t(gt),t(an),t(mt),t(sn),t(ft),t(f)),Hn(B),Hn(b),Hn(z),Hn(F),Hn(Y),Hn(pn)}}}class Oa extends Ba{constructor(w){super(),Ra(this,w,null,Na,Ha,{})}}export{Oa as component};
