import{s as Ta,n as Sa}from"../chunks/scheduler.B0TnBjPs.js";import{S as Ha,i as ja,e as s,s as u,c as _n,H as d,a as e,g as c,b as i,d as r,f as yn,n as g,h as t,o,j as p,p as l,m as Cn,t as Tn,k as Sn,l as Hn}from"../chunks/index.Cnh3HYw3.js";import{V as jn}from"../chunks/ViewApp.9sx5twVU.js";function Ga(ra){let w,ht="<code>EnterText</code>",Mn,H,vt="On this page you find the documentation for the GUI Component <code>EnterText</code>.",Nn,j,wt="Introduction",Ln,G,Pt="The <code>EnterText</code> component is a view in which the user can enter some text. If the user presses the Enter key (<code>↵</code>) in the component, the app will progress to the next page.",bn,x,R,Et="Example",cn,_t="In this example, the GUI consists of only the <code>EnterText</code> component, so it covers the entire screen.",M,P,yt="Open in Online Editor",ln,Bn,ka=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,In,N,Ct="<code>text()</code> - Setting an initial text",An,L,Tt="Use the configuration method <code>text()</code> to give the <code>EnterText</code> an initial text it should contain initially. Pass the text as a string.",Un,h,b,St="Example",B,E,Ht="Open in Online Editor",un,On,da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Write here!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dn,I,jt="<code>placeholder()</code> - Setting a placeholder text",$n,A,Gt="Use the configuration method <code>placeholder()</code> to show a text in the <code>EnterText</code> component when it&#39;s empty. Try typing some text in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",zn,v,U,Rt="Example",O,_,Mt="Open in Online Editor",rn,qn,ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterText<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wn,D,Nt="<code>page()</code> &amp; <code>pageIfEqual()</code> - Going to next page",Jn,$,Lt="Use the configuration method <code>pageIfEqual()</code> to specify a <code>Page</code> the user should come to if she has entered some specific text in the component. Pass the method two values:",Vn,z,bt="<li>The text the user might enter</li> <li>The <code>Page</code> the user should come to if that text has been entered</li>",Qn,q,Bt="You can call this method multiple times.",Kn,W,It="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if she hasn&#39;t entered any text that matches any of the texts passed to <code>pageIfEquals()</code>.",Zn,k,J,At="Example",V,y,Ut="Open in Online Editor",kn,Yn,ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,dn,Fn,fa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">NormalNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That's no special name.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,gn,Xn,xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">BeautifulNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,fn,tt,va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EmptyNamePage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You must enter a name...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,at,Q,Ot="<code>store()</code> - Storing the entered text",st,K,Dt="Use the configuration method <code>store()</code> to store the text the user entered in an object (for example in <code>a</code> or <code>p</code>). Pass it two values:",et,Z,$t="<li>The object in which the entered text should be stored (e.g. <code>a</code> or <code>p</code>)</li> <li>The name of the variable in the object where the entered text should be stored</li>",pt,m,Y,zt="Example",F,C,qt="Open in Online Editor",xn,ot,wa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,hn,ct,Pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your name?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GreetingPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,vn,lt,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ut,X,Wt="<code>onChange()</code> - Handling the entered text",it,nn,Jt="Use the configuration method <code>onChange()</code> to tell the <code>EnterText</code> component which method to call to handle the entered text. This method will be called each time the user makes a change in the <code>EnterText</code> component, such as:",rt,tn,Vt="<li>Writes a character in it</li> <li>Removes a character from it</li> <li>Paste text in it</li> <li>Removes all text in it</li> <li>Etc.</li>",kt,an,Qt="Your method will also be passed the entered text as an argument.",dt,f,sn,Kt="Example",en,T,Zt="Open in Online Editor",wn,gt,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	name <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Unknown</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pn,mt,ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,En,ft,Ca=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GreetingPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back to StartPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,xt;return M=new jn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText
	}
}`,x:150,y:200}]}}}),B=new jn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.text(\`Write here!\`)
	}
}`,x:150,y:200}]}}}),O=new jn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterText.placeholder(\`Enter name\`)
	}
}`,x:150,y:200}]}}}),V=new jn({props:{project:{app:{code:`class MyApp extends App{
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
}`,x:1350,y:200}]}}}),F=new jn({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),en=new jn({props:{project:{app:{code:`class MyApp extends App{
	
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
}`,x:450,y:200}]}}}),{c(){w=s("h1"),w.innerHTML=ht,Mn=u(),H=s("p"),H.innerHTML=vt,Nn=u(),j=s("h2"),j.textContent=wt,Ln=u(),G=s("p"),G.innerHTML=Pt,bn=u(),x=s("div"),R=s("div"),R.textContent=Et,cn=s("p"),cn.innerHTML=_t,_n(M.$$.fragment),P=s("a"),P.textContent=yt,ln=s("pre"),Bn=new d(!1),In=u(),N=s("h2"),N.innerHTML=Ct,An=u(),L=s("p"),L.innerHTML=Tt,Un=u(),h=s("div"),b=s("div"),b.textContent=St,_n(B.$$.fragment),E=s("a"),E.textContent=Ht,un=s("pre"),On=new d(!1),Dn=u(),I=s("h2"),I.innerHTML=jt,$n=u(),A=s("p"),A.innerHTML=Gt,zn=u(),v=s("div"),U=s("div"),U.textContent=Rt,_n(O.$$.fragment),_=s("a"),_.textContent=Mt,rn=s("pre"),qn=new d(!1),Wn=u(),D=s("h2"),D.innerHTML=Nt,Jn=u(),$=s("p"),$.innerHTML=Lt,Vn=u(),z=s("ol"),z.innerHTML=bt,Qn=u(),q=s("p"),q.textContent=Bt,Kn=u(),W=s("p"),W.innerHTML=It,Zn=u(),k=s("div"),J=s("div"),J.textContent=At,_n(V.$$.fragment),y=s("a"),y.textContent=Ut,kn=s("pre"),Yn=new d(!1),dn=s("pre"),Fn=new d(!1),gn=s("pre"),Xn=new d(!1),mn=s("pre"),nt=new d(!1),fn=s("pre"),tt=new d(!1),at=u(),Q=s("h2"),Q.innerHTML=Ot,st=u(),K=s("p"),K.innerHTML=Dt,et=u(),Z=s("ol"),Z.innerHTML=$t,pt=u(),m=s("div"),Y=s("div"),Y.textContent=zt,_n(F.$$.fragment),C=s("a"),C.textContent=qt,xn=s("pre"),ot=new d(!1),hn=s("pre"),ct=new d(!1),vn=s("pre"),lt=new d(!1),ut=u(),X=s("h2"),X.innerHTML=Wt,it=u(),nn=s("p"),nn.innerHTML=Jt,rt=u(),tn=s("ul"),tn.innerHTML=Vt,kt=u(),an=s("p"),an.textContent=Qt,dt=u(),f=s("div"),sn=s("div"),sn.textContent=Kt,_n(en.$$.fragment),T=s("a"),T.textContent=Zt,wn=s("pre"),gt=new d(!1),Pn=s("pre"),mt=new d(!1),En=s("pre"),ft=new d(!1),this.h()},l(n){w=e(n,"H1",{"data-svelte-h":!0}),c(w)!=="svelte-14mv1f4"&&(w.innerHTML=ht),Mn=i(n),H=e(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-12o4it3"&&(H.innerHTML=vt),Nn=i(n),j=e(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-1ukekoe"&&(j.textContent=wt),Ln=i(n),G=e(n,"P",{"data-svelte-h":!0}),c(G)!=="svelte-x0ww4i"&&(G.innerHTML=Pt),bn=i(n),x=e(n,"DIV",{class:!0});var a=r(x);R=e(a,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1llzxwj"&&(R.textContent=Et),cn=e(a,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-nxesad"&&(cn.innerHTML=_t),yn(M.$$.fragment,a),P=e(a,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-ugrcz2"&&(P.textContent=yt),ln=e(a,"PRE",{class:!0});var Yt=r(ln);Bn=g(Yt,!1),Yt.forEach(t),a.forEach(t),In=i(n),N=e(n,"H2",{"data-svelte-h":!0}),c(N)!=="svelte-jbiz3m"&&(N.innerHTML=Ct),An=i(n),L=e(n,"P",{"data-svelte-h":!0}),c(L)!=="svelte-1doybiv"&&(L.innerHTML=Tt),Un=i(n),h=e(n,"DIV",{class:!0});var Gn=r(h);b=e(Gn,"DIV",{class:!0,"data-svelte-h":!0}),c(b)!=="svelte-1llzxwj"&&(b.textContent=St),yn(B.$$.fragment,Gn),E=e(Gn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(E)!=="svelte-lwbjij"&&(E.textContent=Ht),un=e(Gn,"PRE",{class:!0});var Ft=r(un);On=g(Ft,!1),Ft.forEach(t),Gn.forEach(t),Dn=i(n),I=e(n,"H2",{"data-svelte-h":!0}),c(I)!=="svelte-k11loz"&&(I.innerHTML=jt),$n=i(n),A=e(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-hwet1b"&&(A.innerHTML=Gt),zn=i(n),v=e(n,"DIV",{class:!0});var Rn=r(v);U=e(Rn,"DIV",{class:!0,"data-svelte-h":!0}),c(U)!=="svelte-1llzxwj"&&(U.textContent=Rt),yn(O.$$.fragment,Rn),_=e(Rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-104ly54"&&(_.textContent=Mt),rn=e(Rn,"PRE",{class:!0});var Xt=r(rn);qn=g(Xt,!1),Xt.forEach(t),Rn.forEach(t),Wn=i(n),D=e(n,"H2",{"data-svelte-h":!0}),c(D)!=="svelte-1rxp84n"&&(D.innerHTML=Nt),Jn=i(n),$=e(n,"P",{"data-svelte-h":!0}),c($)!=="svelte-y54cr9"&&($.innerHTML=Lt),Vn=i(n),z=e(n,"OL",{"data-svelte-h":!0}),c(z)!=="svelte-1ytvjci"&&(z.innerHTML=bt),Qn=i(n),q=e(n,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1jjmzhq"&&(q.textContent=Bt),Kn=i(n),W=e(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-1bmsalv"&&(W.innerHTML=It),Zn=i(n),k=e(n,"DIV",{class:!0});var S=r(k);J=e(S,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-1llzxwj"&&(J.textContent=At),yn(V.$$.fragment,S),y=e(S,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-1jsdqs9"&&(y.textContent=Ut),kn=e(S,"PRE",{class:!0});var na=r(kn);Yn=g(na,!1),na.forEach(t),dn=e(S,"PRE",{class:!0});var ta=r(dn);Fn=g(ta,!1),ta.forEach(t),gn=e(S,"PRE",{class:!0});var aa=r(gn);Xn=g(aa,!1),aa.forEach(t),mn=e(S,"PRE",{class:!0});var sa=r(mn);nt=g(sa,!1),sa.forEach(t),fn=e(S,"PRE",{class:!0});var ea=r(fn);tt=g(ea,!1),ea.forEach(t),S.forEach(t),at=i(n),Q=e(n,"H2",{"data-svelte-h":!0}),c(Q)!=="svelte-230e0n"&&(Q.innerHTML=Ot),st=i(n),K=e(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-10m0qmz"&&(K.innerHTML=Dt),et=i(n),Z=e(n,"OL",{"data-svelte-h":!0}),c(Z)!=="svelte-v4b8tv"&&(Z.innerHTML=$t),pt=i(n),m=e(n,"DIV",{class:!0});var pn=r(m);Y=e(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(Y)!=="svelte-1llzxwj"&&(Y.textContent=zt),yn(F.$$.fragment,pn),C=e(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-5cgpit"&&(C.textContent=qt),xn=e(pn,"PRE",{class:!0});var pa=r(xn);ot=g(pa,!1),pa.forEach(t),hn=e(pn,"PRE",{class:!0});var oa=r(hn);ct=g(oa,!1),oa.forEach(t),vn=e(pn,"PRE",{class:!0});var ca=r(vn);lt=g(ca,!1),ca.forEach(t),pn.forEach(t),ut=i(n),X=e(n,"H2",{"data-svelte-h":!0}),c(X)!=="svelte-1gvm7gu"&&(X.innerHTML=Wt),it=i(n),nn=e(n,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-19nitxk"&&(nn.innerHTML=Jt),rt=i(n),tn=e(n,"UL",{"data-svelte-h":!0}),c(tn)!=="svelte-q1ivrk"&&(tn.innerHTML=Vt),kt=i(n),an=e(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-1ouvbc1"&&(an.textContent=Qt),dt=i(n),f=e(n,"DIV",{class:!0});var on=r(f);sn=e(on,"DIV",{class:!0,"data-svelte-h":!0}),c(sn)!=="svelte-1llzxwj"&&(sn.textContent=Kt),yn(en.$$.fragment,on),T=e(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-g5qcql"&&(T.textContent=Zt),wn=e(on,"PRE",{class:!0});var la=r(wn);gt=g(la,!1),la.forEach(t),Pn=e(on,"PRE",{class:!0});var ua=r(Pn);mt=g(ua,!1),ua.forEach(t),En=e(on,"PRE",{class:!0});var ia=r(En);ft=g(ia,!1),ia.forEach(t),on.forEach(t),this.h()},h(){o(R,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNpdjTELwjAQhf9KeJNChiq4ZHMQcRAE3YxDaE4plBiSK7SE/HdThaBu9713d1+C8R4qoX1agkLbmxjFcdp6L2hkcjaKMiftNLeBDNOZTeCTedBi+U41B+IhOFGLOc3aZWQJXzhCXRM6C7WSuD97S+HwgR9pva/iGb7M+6H7d+4cU7iU/eqUGMvrTSMxQa2bJt/yC3XgUHc="),o(P,"title","Open in our Online Editor"),Bn.a=null,o(ln,"class","language-js"),o(x,"class","remark-container tip"),o(b,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNpdjsEKwjAMhl+l5rRBkSl46c2DiAdBUPBgBcsadTC60mawUfrudgpFvYR8fxK+BFDWgghQdxpBQN0q79l+XFvLcCA02rPUB2kk1Q4V4ZGUo4N6YFG+U0kOqXeG5cGURmkiRA42sQdxCdBoEAsO967V6HYf+JHm+yye4Mu87Zt/58YQulPan1Mqxe3sGkL2RIezW5n/4DAk3ariMIJYVlW8xhcovldr"),o(E,"title","Open in our Online Editor"),On.a=null,o(un,"class","language-js"),o(h,"class","remark-container tip"),o(U,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNpdjj0LwjAQhv9KuMlCkCq4ZHMQcRAE3azQkJxaqGlIrtAS8t9NKwR1u/e5j+cCSGtBBFCdRhCgWuk9O45baxkOhEZ7lupQmYqUQ0l4JunoJB+4KGZakUPqnWG5MdFYmQiRg03Zg7gGaDSIFYd712p0h0/4keb9LJ7Cl3nfN//OnSF0lzS/tK1U+JyPL+oZMyNfWBf5Gw5Dkm5KDiOIdVnGW3wDWFZZ+A=="),o(_,"title","Open in our Online Editor"),qn.a=null,o(rn,"class","language-js"),o(v,"class","remark-container tip"),o(J,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNq1lM1unDAQx1/F8qUgWWg3H6rEJWqq1SqHfKhNVVWhEg7MLlbAJvY4DV1xzqv0ufokNUuXhdKucqA3z3hm/v75b9hQXpY03NBEpUBDmuTcGHJZvStLAs8IMjXErTeRjDDRwBE+Itd4w9fg+dtshBrQakm6jSZbR7KmNaOliw0N7zZUpDScM7pSeQr6og0Gol1/J9wEPeWlFX9qflDfTJBkIk81SK/divDWDQiM+A7e3A/QBV78ORNJRoQhlbKarPiT0gKBSF7AWeyzXed7ldtC/mVkhAuJoJvJ+1TUqQxyDbN3pXTB8ys3v6EYF1ysFo+W5158A25uzMg5cItiZV/Ts+R67apy1/ZpnVev6HCVi6LEfSnb155bRCV/X9TPlx+9+9it/M5TRp+ddaczRisaHs1mNWutPTpk7fAypvG3Pe5txvGNIVIRU0IieL61NOghDOiWitzz5CH2W5O6J/cPzpMx5/EhzpGHU6JeZ4xgi8vJE+iK3O/kttAk9CfCfjvGPjmE3X+D/4lYKtxRS5HApC7PZ2Pe00O8gy9pSuAvypLCGiTQ/Gwc8BYzmAz0uAf6tf4Fo70eXg=="),o(y,"title","Open in our Online Editor"),Yn.a=null,o(kn,"class","language-js"),Fn.a=null,o(dn,"class","language-js"),Xn.a=null,o(gn,"class","language-js"),nt.a=null,o(mn,"class","language-js"),tt.a=null,o(fn,"class","language-js"),o(k,"class","remark-container tip"),o(Y,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqtUc1Kw0AQfpV1EExgCW3RS0DEilQPgviDByNkScY2NN0NuxPaGnL2VXwun8Qs2/y0iCcPCzszO9/fViCKAsIKEpUihJDkwhh2t70sCoYbQpka1tyrSEZkjxQrZOcsfpZLqdYybvuJRkH4SELTvZij57sN0killqwb2G7tlmqoORRNz0D4WkGWQjjm8K7yFPWtK/ZEdRidMFtUPfuszA55H9TaBMkiy1ON0nOjiJ4agMBkH+iN/YCawotfFoJODNuqUjPr8SL2efv8SuXlSv6CE9G1JNR7cIaURk9wFluY2A+sQ2+mESmTc6u4B45oWhIpudPw/fk1YPXdxd8lVgOHTRPK2YjDFsLJaFRzF9rkr9CGxP+Tm9N6g3muODuuRGB91kcD5XumpiJZMlL977WRdI128cDp6cDpW/0Dhsvysw=="),o(C,"title","Open in our Online Editor"),ot.a=null,o(xn,"class","language-js"),ct.a=null,o(hn,"class","language-js"),lt.a=null,o(vn,"class","language-js"),o(m,"class","remark-container tip"),o(sn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqdUsFKw0AQ/ZV1EUwghLboJSBii1QPiqjFgxGyJGMbmu4uuxPaGnL2V/wuv6QbN0kTKx48hN2Z2Xkz770UlElJg4LGIgEa0DhjWpPb7aWUBDYIPNHE3IuQh1h9nK2AnJNoxpdcrHnU5GMFDOERmcJ7NgfHtR2oAHPFSVuosqVtKmnpUWlymgYvBU0TGgw9+iayBNSNDXpLtRjtYlVQ9DeY5unP2Q9irf14kWaJAu7YUohPBsTX6Ts4Q9dHEzjR84LhiSZbkStS8byIXK95PhFZvuK/4IR4xRFUD07wyYJxo4L0zZlk8P0EkjsD6voVZWeqADDl84rCfkqI4xxR8Hqhr4/PzgquvbgdCUM8wHegM6sWgvm1bZ2aj2ImJagJ08atni0e3Rj1zwYe3dJgNBiUnnVn9Jc7XUKHBv3HHKvBNWSZ8MhxYUmURx1FemKNWbwkKPa/SVRL3SaaxoZtzfS0w/S13AHuqhrM"),o(T,"title","Open in our Online Editor"),gt.a=null,o(wn,"class","language-js"),mt.a=null,o(Pn,"class","language-js"),ft.a=null,o(En,"class","language-js"),o(f,"class","remark-container tip")},m(n,a){p(n,w,a),p(n,Mn,a),p(n,H,a),p(n,Nn,a),p(n,j,a),p(n,Ln,a),p(n,G,a),p(n,bn,a),p(n,x,a),l(x,R),l(x,cn),Cn(M,x,null),l(x,P),l(x,ln),Bn.m(ka,ln),p(n,In,a),p(n,N,a),p(n,An,a),p(n,L,a),p(n,Un,a),p(n,h,a),l(h,b),Cn(B,h,null),l(h,E),l(h,un),On.m(da,un),p(n,Dn,a),p(n,I,a),p(n,$n,a),p(n,A,a),p(n,zn,a),p(n,v,a),l(v,U),Cn(O,v,null),l(v,_),l(v,rn),qn.m(ga,rn),p(n,Wn,a),p(n,D,a),p(n,Jn,a),p(n,$,a),p(n,Vn,a),p(n,z,a),p(n,Qn,a),p(n,q,a),p(n,Kn,a),p(n,W,a),p(n,Zn,a),p(n,k,a),l(k,J),Cn(V,k,null),l(k,y),l(k,kn),Yn.m(ma,kn),l(k,dn),Fn.m(fa,dn),l(k,gn),Xn.m(xa,gn),l(k,mn),nt.m(ha,mn),l(k,fn),tt.m(va,fn),p(n,at,a),p(n,Q,a),p(n,st,a),p(n,K,a),p(n,et,a),p(n,Z,a),p(n,pt,a),p(n,m,a),l(m,Y),Cn(F,m,null),l(m,C),l(m,xn),ot.m(wa,xn),l(m,hn),ct.m(Pa,hn),l(m,vn),lt.m(Ea,vn),p(n,ut,a),p(n,X,a),p(n,it,a),p(n,nn,a),p(n,rt,a),p(n,tn,a),p(n,kt,a),p(n,an,a),p(n,dt,a),p(n,f,a),l(f,sn),Cn(en,f,null),l(f,T),l(f,wn),gt.m(_a,wn),l(f,Pn),mt.m(ya,Pn),l(f,En),ft.m(Ca,En),xt=!0},p:Sa,i(n){xt||(Tn(M.$$.fragment,n),Tn(B.$$.fragment,n),Tn(O.$$.fragment,n),Tn(V.$$.fragment,n),Tn(F.$$.fragment,n),Tn(en.$$.fragment,n),xt=!0)},o(n){Sn(M.$$.fragment,n),Sn(B.$$.fragment,n),Sn(O.$$.fragment,n),Sn(V.$$.fragment,n),Sn(F.$$.fragment,n),Sn(en.$$.fragment,n),xt=!1},d(n){n&&(t(w),t(Mn),t(H),t(Nn),t(j),t(Ln),t(G),t(bn),t(x),t(In),t(N),t(An),t(L),t(Un),t(h),t(Dn),t(I),t($n),t(A),t(zn),t(v),t(Wn),t(D),t(Jn),t($),t(Vn),t(z),t(Qn),t(q),t(Kn),t(W),t(Zn),t(k),t(at),t(Q),t(st),t(K),t(et),t(Z),t(pt),t(m),t(ut),t(X),t(it),t(nn),t(rt),t(tn),t(kt),t(an),t(dt),t(f)),Hn(M),Hn(B),Hn(O),Hn(V),Hn(F),Hn(en)}}}class La extends Ha{constructor(w){super(),ja(this,w,null,Ga,Ta,{})}}export{La as component};
