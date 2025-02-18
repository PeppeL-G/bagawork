import{s as Ta,n as Ca}from"../chunks/scheduler.B0TnBjPs.js";import{S as Ga,i as Ma,e as s,s as l,c as _n,H as d,a as e,g as c,b as u,d as r,f as Tn,h as t,n as g,o,j as p,p as i,m as Cn,t as Gn,k as Mn,l as jn}from"../chunks/index.BXVnRmkj.js";import{V as Hn}from"../chunks/ViewApp.qg7AIhJt.js";function ja(ra){let v,xt="<code>EnterText</code>",Sn,M,vt="On this page you find the documentation for the GUI Component <code>EnterText</code>.",Bn,G,wt='<div class="remark-container__title">More configuration methods</div><p>This webpage only contains descriptions of the configuration methods that are specific to the <code>EnterText</code> component. The <code>EnterText</code> component also supports the configuration methods described on the page <a href="/documentation/component/" title="Open the documentation for Component.">Component</a>.</p>',In,j,Pt="Introduction",Nn,H,Et="The <code>EnterText</code> component is a view in which the user can enter some text. If the user presses the Enter key (<code>↵</code>) when the component has focus, the app will progress to the next page.",Rn,w,L,yt="Example",cn,_t="In this example, the GUI consists of only the <code>EnterText</code> component, so it covers the entire screen.",S,bn,B,Tt="<code>text()</code> - Setting an initial text",Un,I,Ct="Use the configuration method <code>text()</code> to give the <code>EnterText</code> a text it should contain from the start. Pass the text as a string.",zn,x,N,Gt="Example",R,P,Mt="Open in Online Editor",ln,qn,ka=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Write here!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$n,b,jt="<code>placeholder()</code> - Setting a placeholder text",On,U,Ht="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterText</code> component when it&#39;s empty.",An,h,z,Lt="Example",un,St="Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",q,E,Bt="Open in Online Editor",rn,Dn,da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Vn,$,It="<code>page()</code> &amp; <code>pageIfEqual()</code> - Going to next page",Wn,O,Nt="Use the configuration method <code>pageIfEqual()</code> to specify a <code>Page</code> the user should come to if they have entered some specific text in the component. Pass the method two values:",Qn,A,Rt="<li>The text the user might enter</li> <li>The <code>Page</code> the user should come to if that text has been entered</li>",Fn,D,bt="You can call this method multiple times.",Kn,V,Ut="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if they have entered a text that&#39;s not equal to any of the texts passed to <code>pageIfEquals()</code>.",Jn,k,W,zt="Example",Q,y,qt="Open in Online Editor",kn,Yn,ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,dn,Zn,ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">NormalNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That's no special name.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,gn,Xn,fa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BeautifulNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, that's a very beautiful name :)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,mn,nt,ha=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">UglyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, that's not a very nice name.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,fn,tt,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EmptyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You must enter a name...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,F,$t="<code>store()</code> - Storing the entered text",st,K,Ot="Use the configuration method <code>store()</code> to store the text the user has entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",et,J,At="<li>The object in which the entered text should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered text should be stored as a string</li>",pt,m,Y,Dt="Example",Z,_,Vt="Open in Online Editor",hn,ot,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,xn,ct,wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,vn,lt,Pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ut,X,Wt="<code>onChange()</code> - Handling the entered text",it,nn,Qt="Use the configuration method <code>onChange()</code> to tell the <code>EnterText</code> component which method to call to handle the entered text. This method will be called each time the user makes a change in the <code>EnterText</code> component, such as:",rt,tn,Ft="<li>Writes a character in it</li> <li>Removes a character from it</li> <li>Paste text in it</li> <li>Removes all text in it</li> <li>Etc.</li>",kt,an,Kt="Your method will also be passed the entered text as an argument, and additional arguments passed to <code>onChange()</code> will also be passed to the method you pass to <code>onChange()</code>.",dt,f,sn,Jt="Example",en,T,Yt="Open in Online Editor",wn,gt,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pn,mt,ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,En,ft,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ht;return S=new Hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText
	}
}`,x:150,y:200}]}}}),R=new Hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.text(\`Write here!\`)
	}
}`,x:150,y:200}]}}}),q=new Hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(\`Enter name\`)
	}
}`,x:150,y:200}]}}}),Q=new Hn({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:1350,y:200}]}}}),Z=new Hn({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),en=new Hn({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),{c(){v=s("h1"),v.innerHTML=xt,Sn=l(),M=s("p"),M.innerHTML=vt,Bn=l(),G=s("div"),G.innerHTML=wt,In=l(),j=s("h2"),j.textContent=Pt,Nn=l(),H=s("p"),H.innerHTML=Et,Rn=l(),w=s("div"),L=s("div"),L.textContent=yt,cn=s("p"),cn.innerHTML=_t,_n(S.$$.fragment),bn=l(),B=s("h2"),B.innerHTML=Tt,Un=l(),I=s("p"),I.innerHTML=Ct,zn=l(),x=s("div"),N=s("div"),N.textContent=Gt,_n(R.$$.fragment),P=s("a"),P.textContent=Mt,ln=s("pre"),qn=new d(!1),$n=l(),b=s("h2"),b.innerHTML=jt,On=l(),U=s("p"),U.innerHTML=Ht,An=l(),h=s("div"),z=s("div"),z.textContent=Lt,un=s("p"),un.textContent=St,_n(q.$$.fragment),E=s("a"),E.textContent=Bt,rn=s("pre"),Dn=new d(!1),Vn=l(),$=s("h2"),$.innerHTML=It,Wn=l(),O=s("p"),O.innerHTML=Nt,Qn=l(),A=s("ol"),A.innerHTML=Rt,Fn=l(),D=s("p"),D.textContent=bt,Kn=l(),V=s("p"),V.innerHTML=Ut,Jn=l(),k=s("div"),W=s("div"),W.textContent=zt,_n(Q.$$.fragment),y=s("a"),y.textContent=qt,kn=s("pre"),Yn=new d(!1),dn=s("pre"),Zn=new d(!1),gn=s("pre"),Xn=new d(!1),mn=s("pre"),nt=new d(!1),fn=s("pre"),tt=new d(!1),at=l(),F=s("h2"),F.innerHTML=$t,st=l(),K=s("p"),K.innerHTML=Ot,et=l(),J=s("ol"),J.innerHTML=At,pt=l(),m=s("div"),Y=s("div"),Y.textContent=Dt,_n(Z.$$.fragment),_=s("a"),_.textContent=Vt,hn=s("pre"),ot=new d(!1),xn=s("pre"),ct=new d(!1),vn=s("pre"),lt=new d(!1),ut=l(),X=s("h2"),X.innerHTML=Wt,it=l(),nn=s("p"),nn.innerHTML=Qt,rt=l(),tn=s("ul"),tn.innerHTML=Ft,kt=l(),an=s("p"),an.innerHTML=Kt,dt=l(),f=s("div"),sn=s("div"),sn.textContent=Jt,_n(en.$$.fragment),T=s("a"),T.textContent=Yt,wn=s("pre"),gt=new d(!1),Pn=s("pre"),mt=new d(!1),En=s("pre"),ft=new d(!1),this.h()},l(n){v=e(n,"H1",{"data-svelte-h":!0}),c(v)!=="svelte-14mv1f4"&&(v.innerHTML=xt),Sn=u(n),M=e(n,"P",{"data-svelte-h":!0}),c(M)!=="svelte-12o4it3"&&(M.innerHTML=vt),Bn=u(n),G=e(n,"DIV",{class:!0,"data-svelte-h":!0}),c(G)!=="svelte-13nv2pd"&&(G.innerHTML=wt),In=u(n),j=e(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-1ukekoe"&&(j.textContent=Pt),Nn=u(n),H=e(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1y13did"&&(H.innerHTML=Et),Rn=u(n),w=e(n,"DIV",{class:!0});var a=r(w);L=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(L)!=="svelte-1llzxwj"&&(L.textContent=yt),cn=e(a,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-nxesad"&&(cn.innerHTML=_t),Tn(S.$$.fragment,a),a.forEach(t),bn=u(n),B=e(n,"H2",{"data-svelte-h":!0}),c(B)!=="svelte-jbiz3m"&&(B.innerHTML=Tt),Un=u(n),I=e(n,"P",{"data-svelte-h":!0}),c(I)!=="svelte-dbdcdf"&&(I.innerHTML=Ct),zn=u(n),x=e(n,"DIV",{class:!0});var Ln=r(x);N=e(Ln,"DIV",{class:!0,"data-svelte-h":!0}),c(N)!=="svelte-1llzxwj"&&(N.textContent=Gt),Tn(R.$$.fragment,Ln),P=e(Ln,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-lwbjij"&&(P.textContent=Mt),ln=e(Ln,"PRE",{class:!0});var Zt=r(ln);qn=g(Zt,!1),Zt.forEach(t),Ln.forEach(t),$n=u(n),b=e(n,"H2",{"data-svelte-h":!0}),c(b)!=="svelte-k11loz"&&(b.innerHTML=jt),On=u(n),U=e(n,"P",{"data-svelte-h":!0}),c(U)!=="svelte-1cpcfdx"&&(U.innerHTML=Ht),An=u(n),h=e(n,"DIV",{class:!0});var yn=r(h);z=e(yn,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=Lt),un=e(yn,"P",{"data-svelte-h":!0}),c(un)!=="svelte-izrpsa"&&(un.textContent=St),Tn(q.$$.fragment,yn),E=e(yn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-104ly54"&&(E.textContent=Bt),rn=e(yn,"PRE",{class:!0});var Xt=r(rn);Dn=g(Xt,!1),Xt.forEach(t),yn.forEach(t),Vn=u(n),$=e(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-1rxp84n"&&($.innerHTML=It),Wn=u(n),O=e(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-wld4gz"&&(O.innerHTML=Nt),Qn=u(n),A=e(n,"OL",{"data-svelte-h":!0}),c(A)!=="svelte-1ytvjci"&&(A.innerHTML=Rt),Fn=u(n),D=e(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-1jjmzhq"&&(D.textContent=bt),Kn=u(n),V=e(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-16kp8v0"&&(V.innerHTML=Ut),Jn=u(n),k=e(n,"DIV",{class:!0});var C=r(k);W=e(C,"DIV",{class:!0,"data-svelte-h":!0}),c(W)!=="svelte-1llzxwj"&&(W.textContent=zt),Tn(Q.$$.fragment,C),y=e(C,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-gd9r3h"&&(y.textContent=qt),kn=e(C,"PRE",{class:!0});var na=r(kn);Yn=g(na,!1),na.forEach(t),dn=e(C,"PRE",{class:!0});var ta=r(dn);Zn=g(ta,!1),ta.forEach(t),gn=e(C,"PRE",{class:!0});var aa=r(gn);Xn=g(aa,!1),aa.forEach(t),mn=e(C,"PRE",{class:!0});var sa=r(mn);nt=g(sa,!1),sa.forEach(t),fn=e(C,"PRE",{class:!0});var ea=r(fn);tt=g(ea,!1),ea.forEach(t),C.forEach(t),at=u(n),F=e(n,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-230e0n"&&(F.innerHTML=$t),st=u(n),K=e(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-h4vb77"&&(K.innerHTML=Ot),et=u(n),J=e(n,"OL",{"data-svelte-h":!0}),c(J)!=="svelte-3qdykz"&&(J.innerHTML=At),pt=u(n),m=e(n,"DIV",{class:!0});var pn=r(m);Y=e(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(Y)!=="svelte-1llzxwj"&&(Y.textContent=Dt),Tn(Z.$$.fragment,pn),_=e(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-36x9f4"&&(_.textContent=Vt),hn=e(pn,"PRE",{class:!0});var pa=r(hn);ot=g(pa,!1),pa.forEach(t),xn=e(pn,"PRE",{class:!0});var oa=r(xn);ct=g(oa,!1),oa.forEach(t),vn=e(pn,"PRE",{class:!0});var ca=r(vn);lt=g(ca,!1),ca.forEach(t),pn.forEach(t),ut=u(n),X=e(n,"H2",{"data-svelte-h":!0}),c(X)!=="svelte-1gvm7gu"&&(X.innerHTML=Wt),it=u(n),nn=e(n,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-19nitxk"&&(nn.innerHTML=Qt),rt=u(n),tn=e(n,"UL",{"data-svelte-h":!0}),c(tn)!=="svelte-q1ivrk"&&(tn.innerHTML=Ft),kt=u(n),an=e(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-v0ef74"&&(an.innerHTML=Kt),dt=u(n),f=e(n,"DIV",{class:!0});var on=r(f);sn=e(on,"DIV",{class:!0,"data-svelte-h":!0}),c(sn)!=="svelte-1llzxwj"&&(sn.textContent=Jt),Tn(en.$$.fragment,on),T=e(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-1dzksfc"&&(T.textContent=Yt),wn=e(on,"PRE",{class:!0});var la=r(wn);gt=g(la,!1),la.forEach(t),Pn=e(on,"PRE",{class:!0});var ua=r(Pn);mt=g(ua,!1),ua.forEach(t),En=e(on,"PRE",{class:!0});var ia=r(En);ft=g(ia,!1),ia.forEach(t),on.forEach(t),this.h()},h(){o(G,"class","remark-container tip"),o(L,"class","remark-container__title"),o(w,"class","remark-container tip"),o(N,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjsEKwjAMhl+l5rRBkSl46c2DiAdBUPBgBcsadTC60mawUfrudgpFvYR8fxK+BFDWgghQdxpBQN0q79l+XFvLcCA02rPUB2kk1Q4V4ZGUo4N6YFG+U0kOqXeG5cGURmkiRA42sQdxCdBoEAsO967V6HYf+JHm+yye4Mu87Zt/58YQulPan1Mqxe3sGkL2RIezW5n/4DAk3ariMIJYVlW8xhcovldr"),o(P,"title","Open in our Online Editor"),qn.a=null,o(ln,"class","language-js"),o(x,"class","remark-container tip"),o(z,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjj0LwjAQhv9KuMlCkCq4ZHMQcRAE3azQkJxaqGlIrtAS8t9NKwR1u/e5j+cCSGtBBFCdRhCgWuk9O45baxkOhEZ7lupQmYqUQ0l4JunoJB+4KGZakUPqnWG5MdFYmQiRg03Zg7gGaDSIFYd712p0h0/4keb9LJ7Cl3nfN//OnSF0lzS/tK1U+JyPL+oZMyNfWBf5Gw5Dkm5KDiOIdVnGW3wDWFZZ+A=="),o(E,"title","Open in our Online Editor"),Dn.a=null,o(rn,"class","language-js"),o(h,"class","remark-container tip"),o(W,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNq1lM1unDAQx1/F8qUgWWg3H6rEJWqq1SqHfKhNVUWlEg7MLlaNTc04CVpx7qvkufIkNUuWhdKucqA3z3hm/v75b9hQXhQ03NBEp0BDmkheluSy+lAUBJ4QVFoSt95EKsLEAEf4jNzgDV+D52+zERpAaxTpNppsHama1owWLi5p+G1DRUrDOaMrLVMwF20wEO36O+Em6CkvrfhT85N+LIMkEzI1oLx2K8JbNyBYG/3ozf0AXeDFXzORZESUpNLWkBV/0EYgEMVzOIt9tuv8qKXN1V9GRrhQCKaZvE9Fncog1zB7V9rkXF65+Q3FuOBitfhpufTiG3BzY0bOgVsUK/uWniU3a1clXduXtaze0OEqF3mB+1K2rz23iFq9XtTLr+fefexWfucpo0/OutMZoxUNj2azmrXWHh2ydngZ0/jbHvc24/iuJEqTsoBEcLm1NOghDOiWmtzz5EfstyZ1T+4fnCdjzuNDnCMPp0S9zhjBFpeTBzAVud/JbaFJ6E+E/X6MfXIIu/8G/xOx0rijViKBSV2ez8a8p4d4B1/SlMB32pLclkig+dk44C1mMBnocQ/0e/0byuMeZg=="),o(y,"title","Open in our Online Editor"),Yn.a=null,o(kn,"class","language-js"),Zn.a=null,o(dn,"class","language-js"),Xn.a=null,o(gn,"class","language-js"),nt.a=null,o(mn,"class","language-js"),tt.a=null,o(fn,"class","language-js"),o(k,"class","remark-container tip"),o(Y,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqtUd1KwzAUfpV4EGwhlG3oTUHEiUwvBPEHL6zQ0B63si4pySnbKLn2VXwun8SGrF0n4pUXgZxzcr6/NCCqCuIGMpUjxJCVwhh2t72sKoYbQpkb1t6bRCbkjhQrZOcsfZZLqdYy7fqZRkH4SELTvZhjEPoN0ki1lqwfuK71SxYsh6rtGYhfGyhyiMcc3lWZo771xYGoHqMX5opmzz6ri5+8D2ptomxRlLlGGfhRQk8tQDTXah2Mw4jaIkhfFoJODNuqWjPn8SINeff8SpX1Sv6Ck9C1JNQHcIaUxkBwljqYNIycw2CmEamQc6d4D5zQtCZScqfh6+NzwBr6S7hLzAKHTRvK2YjDFuLJaGS5D23yV2hD4v/JzWu9wbJUnB03InI+7dFA+YGpqciWjNT+97pI+ka3+MPp6cDpm/0Gkq3yuw=="),o(_,"title","Open in our Online Editor"),ot.a=null,o(hn,"class","language-js"),ct.a=null,o(xn,"class","language-js"),lt.a=null,o(vn,"class","language-js"),o(m,"class","remark-container tip"),o(sn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqdUsFKw0AQ/ZV1EUwgLG3RS0DEBqkeFFGLByNkScY2NN1dNhPaEnL2V/wuv8SNm6SJFQ8ewu7M7LyZ915KypWifkljmQD1aZzxPCe3u0ulCGwRRJITcy9DEWL9Cb4Gck6iuVgJuRFRm481cIRH5Brv+QIc13agBiy0IF2hzla2qaKVR5XJ5dR/KWmaUH/s0TeZJaBvbDBYqsPoFquDcrjBrEh/zn6Qm5zFyzRLNAjHlkJ8MiBsoeXGGbsMTeBEz0uOJznZyUKTmudF5Hrt80BmxVr8ghPilUDQAzgpgiUXRgXFzJlk8P0EkjsD6rKasjPTAJiKRU1hPyXEaYEoRbPQ5/tHbwXXXtyehCEe4DvQm9UIwVljW6/GUM6VAh3w3Lg1sMWjW6P+2cijO+pPRqPKs+5M/nKnT+jQoP+YYzW4hiyTHjkuLYnqqKfIQKwpj1cE5f43iRqpu0Tb2LJtmJ72mL5WX/20GtQ="),o(T,"title","Open in our Online Editor"),gt.a=null,o(wn,"class","language-js"),mt.a=null,o(Pn,"class","language-js"),ft.a=null,o(En,"class","language-js"),o(f,"class","remark-container tip")},m(n,a){p(n,v,a),p(n,Sn,a),p(n,M,a),p(n,Bn,a),p(n,G,a),p(n,In,a),p(n,j,a),p(n,Nn,a),p(n,H,a),p(n,Rn,a),p(n,w,a),i(w,L),i(w,cn),Cn(S,w,null),p(n,bn,a),p(n,B,a),p(n,Un,a),p(n,I,a),p(n,zn,a),p(n,x,a),i(x,N),Cn(R,x,null),i(x,P),i(x,ln),qn.m(ka,ln),p(n,$n,a),p(n,b,a),p(n,On,a),p(n,U,a),p(n,An,a),p(n,h,a),i(h,z),i(h,un),Cn(q,h,null),i(h,E),i(h,rn),Dn.m(da,rn),p(n,Vn,a),p(n,$,a),p(n,Wn,a),p(n,O,a),p(n,Qn,a),p(n,A,a),p(n,Fn,a),p(n,D,a),p(n,Kn,a),p(n,V,a),p(n,Jn,a),p(n,k,a),i(k,W),Cn(Q,k,null),i(k,y),i(k,kn),Yn.m(ga,kn),i(k,dn),Zn.m(ma,dn),i(k,gn),Xn.m(fa,gn),i(k,mn),nt.m(ha,mn),i(k,fn),tt.m(xa,fn),p(n,at,a),p(n,F,a),p(n,st,a),p(n,K,a),p(n,et,a),p(n,J,a),p(n,pt,a),p(n,m,a),i(m,Y),Cn(Z,m,null),i(m,_),i(m,hn),ot.m(va,hn),i(m,xn),ct.m(wa,xn),i(m,vn),lt.m(Pa,vn),p(n,ut,a),p(n,X,a),p(n,it,a),p(n,nn,a),p(n,rt,a),p(n,tn,a),p(n,kt,a),p(n,an,a),p(n,dt,a),p(n,f,a),i(f,sn),Cn(en,f,null),i(f,T),i(f,wn),gt.m(Ea,wn),i(f,Pn),mt.m(ya,Pn),i(f,En),ft.m(_a,En),ht=!0},p:Ca,i(n){ht||(Gn(S.$$.fragment,n),Gn(R.$$.fragment,n),Gn(q.$$.fragment,n),Gn(Q.$$.fragment,n),Gn(Z.$$.fragment,n),Gn(en.$$.fragment,n),ht=!0)},o(n){Mn(S.$$.fragment,n),Mn(R.$$.fragment,n),Mn(q.$$.fragment,n),Mn(Q.$$.fragment,n),Mn(Z.$$.fragment,n),Mn(en.$$.fragment,n),ht=!1},d(n){n&&(t(v),t(Sn),t(M),t(Bn),t(G),t(In),t(j),t(Nn),t(H),t(Rn),t(w),t(bn),t(B),t(Un),t(I),t(zn),t(x),t($n),t(b),t(On),t(U),t(An),t(h),t(Vn),t($),t(Wn),t(O),t(Qn),t(A),t(Fn),t(D),t(Kn),t(V),t(Jn),t(k),t(at),t(F),t(st),t(K),t(et),t(J),t(pt),t(m),t(ut),t(X),t(it),t(nn),t(rt),t(tn),t(kt),t(an),t(dt),t(f)),jn(S),jn(R),jn(q),jn(Q),jn(Z),jn(en)}}}class Ba extends Ga{constructor(v){super(),Ma(this,v,null,ja,Ta,{})}}export{Ba as component};
