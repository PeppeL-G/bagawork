import{s as Ha,n as Ia}from"../chunks/scheduler.DFPFbGJz.js";import{S as Oa,i as Ga,e as s,s as c,c as C,H as y,a as p,g as o,b as u,d as r,f as b,n as S,h as n,o as l,j as a,p as i,m as B,t as A,k as L,l as T}from"../chunks/index.CzDE4dZi.js";import{V as E}from"../chunks/ViewApp.C2MU7-ZI.js";function ja(ya){let d,he="4. Paper",tn,U,me="This tutorial will teach you how to use the <code>Paper</code> component to draw images in your app yourself.",nn,D,xe="Introduction",en,V,ve="The <code>Paper</code> component is a view that you can draw whatever you want on yourself, so it&#39;s similar to the <code>Image</code> component, but instead of specifying the URL of the image, you specify how the image should be drawn using lines, circles, rectangles, etc.",an,K,we="Creating a <code>Paper</code> component instance",sn,Y,Pe="To create a new <code>Paper</code> component, simply write <code>Paper</code>.",pn,M,N,Ce="Example",W,J,k,ye="Open in Online Editor",Nt,on,ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ln,Q,be="Dimensioning the <code>Paper</code>",cn,X,Se="Often when you draw something on the paper, you expect the paper to be of a certain size, so you don&#39;t risk drawing something too big on it that doesn&#39;t fit. So, often when you use the <code>Paper</code> component, you use it in a <code>Box</code> layout, so you can give it a specific size.",un,_,Z,Be="Example",F,q,g,Ae="Open in Online Editor",Wt,rn,Sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,dn,$,Le="The coordinate system",kn,tt,Te="To draw something on the <code>Paper</code>, you need to specify <em>where</em> on the <code>Paper</code> it should be drawn. To specify that, you need to know how the <em>coordinate system</em> the <code>Paper</code> is using works.",gn,nt,Ee="The <code>Paper</code> component uses a coordinate system with an <code>x</code>-axe and a <code>y</code>-axe:",fn,et,Me="<li>The <code>x</code>-axe starts at the left side of the <code>Paper</code> component (<code>x</code> = <code>0</code> at the left side) and increases towards the right</li> <li>The <code>y</code>-axes starts at the bottom side of the <code>Paper</code> component (<code>y</code> = <code>0</code> at the bottom side) and increases towards the top</li>",hn,at,_e="1 unit in the coordinate system represents 1 millimeter on the screen (although this can be changed, learn more about that in next tutorial).",mn,st,He="Showing the coordinate system",xn,pt,Ie="To show the coordinate system, call the configuraiton method <code>showCoordinates()</code> on the <code>Paper</code> component. When you call this method, the following will be drawn on the <code>Paper</code>:",vn,ot,Oe="<li>Horizontal lines every 10 millimeters</li> <li>Vertical lines every 10 millimeters</li> <li>The mouse&#39;s position in the upper right corner</li>",wn,lt,Ge="This is something you can use during development, but after you have fininshed writing your code, you probably want to remove the call to <code>showCoordinates()</code>, since you don&#39;t want your users to see it.",Pn,H,ct,f,je="Open in Online Editor",Jt,Cn,Ba=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yn,ut,ze="Drawing things on the <code>Paper</code>",bn,it,Re="To draw various things on the <code>Paper</code> component, call the configuration method <code>children()</code>, and pass it the various components that can be drawn on the <code>Paper</code>. The components that can be drawn on the <code>Paper</code> component all have names starting with <code>Paper</code>, such as:",Sn,rt,Ue="<li><code>PaperLine</code> for drawing a line</li> <li><code>PaperCircle</code> for drawing a circle</li> <li><code>PaperRectangle</code> for drawing a rectangle</li>",Bn,dt,De="Learn more about how to use these next. Ordinary GUI components, such as <code>Text</code> and <code>Button</code>, can&#39;t be used as children in the <code>Paper</code> component.",An,kt,Ve="Drawing a line",Ln,gt,Ke="Use the GUI component <code>PaperLine</code> to draw a line on the <code>Paper</code> component. It has default values for all different properties (position, color, etc.), so you can use it as it is.",Tn,I,ft,Ye="Example",ht,mt,h,Ne="Open in Online Editor",Qt,En,Aa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperLine<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Mn,xt,We="Call various configuration methods on the <code>PaperLine</code> component to change where and how it&#39;s drawn on the <code>Paper</code>:",_n,vt,Je="<li>Call <code>start(x, y)</code> to indicate the position of the start of the line</li> <li>Call <code>end(x, y)</code> to indicate the position of the end of the line</li> <li>Call <code>thickness(theNumber)</code> to indicate how thick the line should be</li> <li>Call <code>backgroundColor(theColor)</code> to indicate the color of the line</li>",Hn,O,wt,Qe="Example",Pt,Ct,m,Xe="Open in Online Editor",Xt,In,La=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperLine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				PaperLine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,On,yt,Ze="Drawing a circle",Gn,bt,Fe="Use the GUI component <code>PaperCircle</code> to draw a circle on the <code>Paper</code> component. It has default values for all different properties (position, color, etc.), so you can use it as it is.",jn,G,St,qe="Example",Bt,At,x,$e="Open in Online Editor",Zt,zn,Ta=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperCircle<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Rn,Lt,ta="Call various configuration methods on the <code>PaperCircle</code> component to change where and how it&#39;s drawn on the <code>Paper</code>:",Un,Tt,na="<li>Call <code>center(x, y)</code> to indicate the position of the center of the circle</li> <li>Call <code>radius(theRadius)</code> to indicate the radius of the circle</li> <li>Call <code>backgroundColor(theColor)</code> to indicate the color of the circle</li>",Dn,j,Et,ea="Example",Mt,_t,v,aa="Open in Online Editor",Ft,Vn,Ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperCircle<span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				PaperCircle<span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">radius</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Kn,Ht,sa="Drawing a rectangle",Yn,It,pa="Use the GUI component <code>PaperRectangle</code> to draw a rectangle on the <code>Paper</code> component. It has default values for all different properties (position, color, etc.), so you can use it as it is.",Nn,z,Ot,oa="Example",Gt,jt,w,la="Open in Online Editor",qt,Wn,Ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperRectangle<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jn,zt,ca="Call various configuration methods on the <code>PaperRectangle</code> component to change where and how it&#39;s drawn on the <code>Paper</code>:",Qn,Rt,ua="<li>Call <code>center(x, y)</code> to indicate the position of the center of the rectangle</li> <li>Call <code>width(theWidth)</code> to indicate the width of the rectangle</li> <li>Call <code>height(theHeight)</code> to indicate the height of the rectangle</li> <li>Call <code>backgroundColor(theColor)</code> to indicate the color of the rectangle</li>",Xn,R,Ut,ia="Example",Dt,Vt,P,ra="Open in Online Editor",$t,Zn,_a=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperRectangle<span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				PaperRectangle<span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Fn,Kt,da="That's it!",qn,Yt,ka="Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!",$n;return J=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(\`gold\`)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),q=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),ct=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.showCoordinates().backgroundColor(\`gold\`),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),mt=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperLine,
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),Ct=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperLine.start(10, 10).end(20, 20).thickness(2).backgroundColor(\`blue\`),
				PaperLine.start(10, 20).end(20, 10).thickness(5).backgroundColor(\`pink\`),
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),At=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperCircle,
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),_t=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperCircle.center(0, 0).radius(10).backgroundColor(\`blue\`),
				PaperCircle.center(15, 30).radius(3).backgroundColor(\`lime\`),
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),jt=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperRectangle,
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),Vt=new E({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.width(30).height(50).child(
			Paper.backgroundColor(\`gold\`).children(
				PaperRectangle.center(15, 30).height(30).width(20).backgroundColor(\`blue\`),
				PaperRectangle.center(15, 15).height(10).width(15).backgroundColor(\`lime\`),
			),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(null),
				Space,
				Button.text(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`).page(null),
			Button.text(\`15\`).page(null),
			Button.text(\`20\`).page(null),
			Button.text(\`25\`).page(null),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){d=s("h1"),d.textContent=he,tn=c(),U=s("p"),U.innerHTML=me,nn=c(),D=s("h2"),D.textContent=xe,en=c(),V=s("p"),V.innerHTML=ve,an=c(),K=s("h2"),K.innerHTML=we,sn=c(),Y=s("p"),Y.innerHTML=Pe,pn=c(),M=s("div"),N=s("div"),N.textContent=Ce,W=s("div"),C(J.$$.fragment),k=s("a"),k.textContent=ye,Nt=s("pre"),on=new y(!1),ln=c(),Q=s("h2"),Q.innerHTML=be,cn=c(),X=s("p"),X.innerHTML=Se,un=c(),_=s("div"),Z=s("div"),Z.textContent=Be,F=s("div"),C(q.$$.fragment),g=s("a"),g.textContent=Ae,Wt=s("pre"),rn=new y(!1),dn=c(),$=s("h2"),$.textContent=Le,kn=c(),tt=s("p"),tt.innerHTML=Te,gn=c(),nt=s("p"),nt.innerHTML=Ee,fn=c(),et=s("ul"),et.innerHTML=Me,hn=c(),at=s("p"),at.textContent=_e,mn=c(),st=s("h2"),st.textContent=He,xn=c(),pt=s("p"),pt.innerHTML=Ie,vn=c(),ot=s("ul"),ot.innerHTML=Oe,wn=c(),lt=s("p"),lt.innerHTML=Ge,Pn=c(),H=s("div"),C(ct.$$.fragment),f=s("a"),f.textContent=je,Jt=s("pre"),Cn=new y(!1),yn=c(),ut=s("h2"),ut.innerHTML=ze,bn=c(),it=s("p"),it.innerHTML=Re,Sn=c(),rt=s("ul"),rt.innerHTML=Ue,Bn=c(),dt=s("p"),dt.innerHTML=De,An=c(),kt=s("h2"),kt.textContent=Ve,Ln=c(),gt=s("p"),gt.innerHTML=Ke,Tn=c(),I=s("div"),ft=s("div"),ft.textContent=Ye,ht=s("div"),C(mt.$$.fragment),h=s("a"),h.textContent=Ne,Qt=s("pre"),En=new y(!1),Mn=c(),xt=s("p"),xt.innerHTML=We,_n=c(),vt=s("ul"),vt.innerHTML=Je,Hn=c(),O=s("div"),wt=s("div"),wt.textContent=Qe,Pt=s("div"),C(Ct.$$.fragment),m=s("a"),m.textContent=Xe,Xt=s("pre"),In=new y(!1),On=c(),yt=s("h2"),yt.textContent=Ze,Gn=c(),bt=s("p"),bt.innerHTML=Fe,jn=c(),G=s("div"),St=s("div"),St.textContent=qe,Bt=s("div"),C(At.$$.fragment),x=s("a"),x.textContent=$e,Zt=s("pre"),zn=new y(!1),Rn=c(),Lt=s("p"),Lt.innerHTML=ta,Un=c(),Tt=s("ul"),Tt.innerHTML=na,Dn=c(),j=s("div"),Et=s("div"),Et.textContent=ea,Mt=s("div"),C(_t.$$.fragment),v=s("a"),v.textContent=aa,Ft=s("pre"),Vn=new y(!1),Kn=c(),Ht=s("h2"),Ht.textContent=sa,Yn=c(),It=s("p"),It.innerHTML=pa,Nn=c(),z=s("div"),Ot=s("div"),Ot.textContent=oa,Gt=s("div"),C(jt.$$.fragment),w=s("a"),w.textContent=la,qt=s("pre"),Wn=new y(!1),Jn=c(),zt=s("p"),zt.innerHTML=ca,Qn=c(),Rt=s("ul"),Rt.innerHTML=ua,Xn=c(),R=s("div"),Ut=s("div"),Ut.textContent=ia,Dt=s("div"),C(Vt.$$.fragment),P=s("a"),P.textContent=ra,$t=s("pre"),Zn=new y(!1),Fn=c(),Kt=s("h2"),Kt.textContent=da,qn=c(),Yt=s("p"),Yt.textContent=ka,this.h()},l(t){d=p(t,"H1",{"data-svelte-h":!0}),o(d)!=="svelte-3ymu1k"&&(d.textContent=he),tn=u(t),U=p(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-w38v4w"&&(U.innerHTML=me),nn=u(t),D=p(t,"H2",{"data-svelte-h":!0}),o(D)!=="svelte-1ukekoe"&&(D.textContent=xe),en=u(t),V=p(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-93ba85"&&(V.innerHTML=ve),an=u(t),K=p(t,"H2",{"data-svelte-h":!0}),o(K)!=="svelte-1uv8bhr"&&(K.innerHTML=we),sn=u(t),Y=p(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1l9dxjw"&&(Y.innerHTML=Pe),pn=u(t),M=p(t,"DIV",{class:!0});var e=r(M);N=p(e,"DIV",{class:!0,"data-svelte-h":!0}),o(N)!=="svelte-1llzxwj"&&(N.textContent=Ce),W=p(e,"DIV",{});var te=r(W);b(J.$$.fragment,te),k=p(te,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(k)!=="svelte-1d34aai"&&(k.textContent=ye),Nt=p(te,"PRE",{class:!0});var ga=r(Nt);on=S(ga,!1),ga.forEach(n),te.forEach(n),e.forEach(n),ln=u(t),Q=p(t,"H2",{"data-svelte-h":!0}),o(Q)!=="svelte-38yvcy"&&(Q.innerHTML=be),cn=u(t),X=p(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-n9r9d8"&&(X.innerHTML=Se),un=u(t),_=p(t,"DIV",{class:!0});var ue=r(_);Z=p(ue,"DIV",{class:!0,"data-svelte-h":!0}),o(Z)!=="svelte-1llzxwj"&&(Z.textContent=Be),F=p(ue,"DIV",{});var ne=r(F);b(q.$$.fragment,ne),g=p(ne,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(g)!=="svelte-yqkfpg"&&(g.textContent=Ae),Wt=p(ne,"PRE",{class:!0});var fa=r(Wt);rn=S(fa,!1),fa.forEach(n),ne.forEach(n),ue.forEach(n),dn=u(t),$=p(t,"H2",{"data-svelte-h":!0}),o($)!=="svelte-ot6f6"&&($.textContent=Le),kn=u(t),tt=p(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-1d3d1sw"&&(tt.innerHTML=Te),gn=u(t),nt=p(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-nu8tfj"&&(nt.innerHTML=Ee),fn=u(t),et=p(t,"UL",{"data-svelte-h":!0}),o(et)!=="svelte-8sk8we"&&(et.innerHTML=Me),hn=u(t),at=p(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1fbaoah"&&(at.textContent=_e),mn=u(t),st=p(t,"H2",{"data-svelte-h":!0}),o(st)!=="svelte-1ru5s4n"&&(st.textContent=He),xn=u(t),pt=p(t,"P",{"data-svelte-h":!0}),o(pt)!=="svelte-ta02wi"&&(pt.innerHTML=Ie),vn=u(t),ot=p(t,"UL",{"data-svelte-h":!0}),o(ot)!=="svelte-wn4czd"&&(ot.innerHTML=Oe),wn=u(t),lt=p(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-umklxy"&&(lt.innerHTML=Ge),Pn=u(t),H=p(t,"DIV",{});var ee=r(H);b(ct.$$.fragment,ee),f=p(ee,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-1qosx8f"&&(f.textContent=je),Jt=p(ee,"PRE",{class:!0});var ha=r(Jt);Cn=S(ha,!1),ha.forEach(n),ee.forEach(n),yn=u(t),ut=p(t,"H2",{"data-svelte-h":!0}),o(ut)!=="svelte-1tu3n0m"&&(ut.innerHTML=ze),bn=u(t),it=p(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-lftd2m"&&(it.innerHTML=Re),Sn=u(t),rt=p(t,"UL",{"data-svelte-h":!0}),o(rt)!=="svelte-17ks1mu"&&(rt.innerHTML=Ue),Bn=u(t),dt=p(t,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-oayqsk"&&(dt.innerHTML=De),An=u(t),kt=p(t,"H2",{"data-svelte-h":!0}),o(kt)!=="svelte-1gkjm4n"&&(kt.textContent=Ve),Ln=u(t),gt=p(t,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-y1ixhc"&&(gt.innerHTML=Ke),Tn=u(t),I=p(t,"DIV",{class:!0});var ie=r(I);ft=p(ie,"DIV",{class:!0,"data-svelte-h":!0}),o(ft)!=="svelte-1llzxwj"&&(ft.textContent=Ye),ht=p(ie,"DIV",{});var ae=r(ht);b(mt.$$.fragment,ae),h=p(ae,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(h)!=="svelte-1cvevfn"&&(h.textContent=Ne),Qt=p(ae,"PRE",{class:!0});var ma=r(Qt);En=S(ma,!1),ma.forEach(n),ae.forEach(n),ie.forEach(n),Mn=u(t),xt=p(t,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-pxcfsq"&&(xt.innerHTML=We),_n=u(t),vt=p(t,"UL",{"data-svelte-h":!0}),o(vt)!=="svelte-1c6pgy5"&&(vt.innerHTML=Je),Hn=u(t),O=p(t,"DIV",{class:!0});var re=r(O);wt=p(re,"DIV",{class:!0,"data-svelte-h":!0}),o(wt)!=="svelte-1llzxwj"&&(wt.textContent=Qe),Pt=p(re,"DIV",{});var se=r(Pt);b(Ct.$$.fragment,se),m=p(se,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(m)!=="svelte-t26fx5"&&(m.textContent=Xe),Xt=p(se,"PRE",{class:!0});var xa=r(Xt);In=S(xa,!1),xa.forEach(n),se.forEach(n),re.forEach(n),On=u(t),yt=p(t,"H2",{"data-svelte-h":!0}),o(yt)!=="svelte-1wvqbe5"&&(yt.textContent=Ze),Gn=u(t),bt=p(t,"P",{"data-svelte-h":!0}),o(bt)!=="svelte-1p31kdw"&&(bt.innerHTML=Fe),jn=u(t),G=p(t,"DIV",{class:!0});var de=r(G);St=p(de,"DIV",{class:!0,"data-svelte-h":!0}),o(St)!=="svelte-1llzxwj"&&(St.textContent=qe),Bt=p(de,"DIV",{});var pe=r(Bt);b(At.$$.fragment,pe),x=p(pe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(x)!=="svelte-181vln3"&&(x.textContent=$e),Zt=p(pe,"PRE",{class:!0});var va=r(Zt);zn=S(va,!1),va.forEach(n),pe.forEach(n),de.forEach(n),Rn=u(t),Lt=p(t,"P",{"data-svelte-h":!0}),o(Lt)!=="svelte-1eeq2yo"&&(Lt.innerHTML=ta),Un=u(t),Tt=p(t,"UL",{"data-svelte-h":!0}),o(Tt)!=="svelte-grdr6j"&&(Tt.innerHTML=na),Dn=u(t),j=p(t,"DIV",{class:!0});var ke=r(j);Et=p(ke,"DIV",{class:!0,"data-svelte-h":!0}),o(Et)!=="svelte-1llzxwj"&&(Et.textContent=ea),Mt=p(ke,"DIV",{});var oe=r(Mt);b(_t.$$.fragment,oe),v=p(oe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-t6x1pg"&&(v.textContent=aa),Ft=p(oe,"PRE",{class:!0});var wa=r(Ft);Vn=S(wa,!1),wa.forEach(n),oe.forEach(n),ke.forEach(n),Kn=u(t),Ht=p(t,"H2",{"data-svelte-h":!0}),o(Ht)!=="svelte-1cofrny"&&(Ht.textContent=sa),Yn=u(t),It=p(t,"P",{"data-svelte-h":!0}),o(It)!=="svelte-1hgg0qu"&&(It.innerHTML=pa),Nn=u(t),z=p(t,"DIV",{class:!0});var ge=r(z);Ot=p(ge,"DIV",{class:!0,"data-svelte-h":!0}),o(Ot)!=="svelte-1llzxwj"&&(Ot.textContent=oa),Gt=p(ge,"DIV",{});var le=r(Gt);b(jt.$$.fragment,le),w=p(le,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-lwbqrz"&&(w.textContent=la),qt=p(le,"PRE",{class:!0});var Pa=r(qt);Wn=S(Pa,!1),Pa.forEach(n),le.forEach(n),ge.forEach(n),Jn=u(t),zt=p(t,"P",{"data-svelte-h":!0}),o(zt)!=="svelte-1vll7vj"&&(zt.innerHTML=ca),Qn=u(t),Rt=p(t,"UL",{"data-svelte-h":!0}),o(Rt)!=="svelte-3vezb5"&&(Rt.innerHTML=ua),Xn=u(t),R=p(t,"DIV",{class:!0});var fe=r(R);Ut=p(fe,"DIV",{class:!0,"data-svelte-h":!0}),o(Ut)!=="svelte-1llzxwj"&&(Ut.textContent=ia),Dt=p(fe,"DIV",{});var ce=r(Dt);b(Vt.$$.fragment,ce),P=p(ce,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(P)!=="svelte-1lyik7n"&&(P.textContent=ra),$t=p(ce,"PRE",{class:!0});var Ca=r($t);Zn=S(Ca,!1),Ca.forEach(n),ce.forEach(n),fe.forEach(n),Fn=u(t),Kt=p(t,"H2",{"data-svelte-h":!0}),o(Kt)!=="svelte-p2uhy5"&&(Kt.textContent=da),qn=u(t),Yt=p(t,"P",{"data-svelte-h":!0}),o(Yt)!=="svelte-1xdskuy"&&(Yt.textContent=ka),this.h()},h(){l(N,"class","remark-container__title"),l(k,"target","_blank"),l(k,"href","/editor#eNrFUsFqg0AQ/ZVlLlWQYCyF4qWYUkoOLaEJtKEJuNXRhJhd2V1pgvjvXWNio5hgTz0oM+68eW/fMweapuDmEPAQwYUgoVKSl72XpgR3Clkoia7zBVuo8gkEUoVTRYWa0BgNszpRAlUmGKkPyq9FBSqgsCDiSYhCgvuZwzoEd2gBo9uS8QABC3gUSVQf4Nqneq7rYmlBqvc1kNWycdU0hNf8tfiyaal/ztZt3ROaohh80WATC56x8JEnXBh+rIl8s3EXC3bgOrYWuQf31q4FznCbJnp5Q2hDmyc348gLs+SKQM5GGHHx6+sZ9xX5b/xbDoLVOgkFMuOIVNOUBmidupkmHCj9MnxPINnzjBxsJGpFGRneP/im1Y3UZmRb1kHQHlyoUab0HY40r9w3B6U3BsuSxLR6wuYo++FOJ2bDJM68SKHocrD8E6tsnFY2T0xDvBj/O5n3FVU3sgxHEM1+OZOGY0O727Dm0F2PIafPJufCpnOFf8lkWfwA8oekuQ=="),l(k,"title","Open in our Online Editor"),on.a=null,l(Nt,"class","language-js"),l(M,"class","remark-container tip"),l(Z,"class","remark-container__title"),l(g,"target","_blank"),l(g,"href","/editor#eNrFUk1rg0AQ/SvLXKogYgyB4qWYUkoOLaUJtKEJZKvjBzG7sruShOB/71obGyUJ9tSDMuvOm/fePA9A8xy8AwQ8RPAgyKiU5Gnv5znBnUIWSqLrw4ItVPUEAqnCqaJCvdAYDbO+UQJVIRhpLqqvZQ0qobQg4lmIQoL3cYA0BG9gAaObivEbAhbwKJKo3sFzjvVc1+XSglzPayHrYZP60BLe8Dfiq0NH/WORdnWP+c7epqFKjKFj2gmmcaKMkS6DJM1Co+5d6Mk5CvuTButY8IKF9zzjwljFWs/KtOous2Xdgh14rqM97cEbOo2fGW7yTGtp+WpZ8eV6EvlhkV3xw9kYIy5+YzjhvuL2lW9l7Uwga8xNcxqgdTzNNKGt9MtY+QLJnhfke+tEJZSRwe1dY7iL1EspNuwMQbdxocaF0h5+aJ75yrSr3RisyDLT6gmbo+yHOxdQtUI/UijObbD6cets3E42D0xD/Bj/O5m3hKobWYUjiGa/nElrYwPn/MLaTaMeTW6fSe6FSacK/5LJsvwCz/O0lA=="),l(g,"title","Open in our Online Editor"),rn.a=null,l(Wt,"class","language-js"),l(_,"class","remark-container tip"),l(f,"target","_blank"),l(f,"href","/editor#eNrFUl1LwzAU/SvhvthCKd1kIH2RbojsQREnqLjBYnP7gV1SkpRtjP53E+vqWjaZTz603DT3nHPPPd0BLUsIdxALhhBCXFClyN02KkuCG42cKWLq3ZzPtX1iiVTjTFOpH2iKjtvcaIm6kpy0F/Zr3YBqqD1IRMFQKgjfdpAzCAcecLqyil8Q8EAkiUL9AmGwr19NXS88KA1fB9mQTZtDZ/BWvx3eHnrT31Z5f+6x2PjrnOnMuQxcP8M8zbQzMmWc5QVzmt65YS5R+ioT64kQkuXcsCnH9d9p/JFKUXE2EYWQzjI1Ey5dr8G5nWV4sIFwGBiXWwgvg9bhE67KwvIdOu2Yi9THNIlYVfziUPAxJkL+BHOg/Yv/R7FWjVeJvLU7K2mM3v70ZAR9bV7OMpJItqIiXzkQnVFOBlfXreE+0iylWvEjAv3GuR5X2nj4lrkXS9e3u3F4VRSudybsFdV5uGMB2RVGiUZ5bIP2V26yGfayueEGEqX438k8Z1RfKBuOJEb9dCadjQ2C4wvrNo3OaBqewzQ8wXQ44V8yWdSfOru7Tw=="),l(f,"title","Open in our Online Editor"),Cn.a=null,l(Jt,"class","language-js"),l(ft,"class","remark-container__title"),l(h,"target","_blank"),l(h,"href","/editor#eNrFUttqwkAQ/ZVlXppAkKgIJS8lllKEtpQqtKUKbpPJBeNu2N2gIvn3bkyMxkaxT31ImN3MmTmXbIGmKThb8LiP4ICXUCnJ88ZNU4JrhcyXRNfbKZuq4vEEUoVjRYV6pSEaZvlFCVSZYKT+UNzmJSiH3IKAJz4KCc7XFmIfnK4FjC6LjTsIWMCDQKL6AMfe15+6zmcWpHpeA1kOG5WHBvF6f02+OJywf8ziU95Dvu6sYl9FRt82OxHGYaSMgS69KE58o+yd6skpis439Rah4Bnz73nChTEPNZ951SuQ1e0V4ClmaO3vzKoyGw5ZsAanZ2vpG3D6di17gss00ZQb8huKXbkYBa6fJRdkczbEgItDWke7L5jyxlfyt6hxSr2DnIle2FH6ZcxdgWTDM7ILh6iIMtK9vZubVjtSe5ctmWxzrdk4VcNMaQ3VmheurS68MViWJKZ1JewT5XW4toAKC91AoWhzsPi/y2x6J9k8MA1xQ/zvZN4jqm5kEY4gevv5TBqOde12w5pNgyuaetdM6p2ZdMzwL5nM8h/yrMNM"),l(h,"title","Open in our Online Editor"),En.a=null,l(Qt,"class","language-js"),l(I,"class","remark-container tip"),l(wt,"class","remark-container__title"),l(m,"target","_blank"),l(m,"href","/editor#eNrFk11r2zAUhv+K0M1kMMZ2CQzfDGeUUdjGWAtbWQpR7eMP4khGHzQh+L/vuE49K3VDdtULmyPrnPe8Oo98oLxtaXKgmcyBJjRruNbk2z5tWwI7AyLXBOPDSqxM/2QKuIFbw5X5wUtg3rBjFBirBBk3+q/dUNTRzqeFbHJQmiZ/DrTOaRL5VPBt3/G5hPpUFoUG85sm4Ut8j3H34NMW9ZzKQexmWDjGx/6j+X5x4v6LrU99L+UueKpzU7Gr0AsqqMvKsAWGWVU3ORtyV6jcggoeebYplbQi/ywbqdi6RD/rY64CMaYfC77WAgLdO2NR6JMIZdEaizGOMTZVnW0EaM1i77X2Y2Nh7fnnJeOJZORILmYk21psJpIvkecw8+mOJnGIMPY0uQpHEHewbRscogPEYZDqzU2R5rY5A0KKJRRS/bs/k95nMP2UT/r1mG9bnsF4nDtsGBh8sXWqgOylJc/XhZiKCxJ9/DQ5uluJ47Fboec4uokrs7QGz3Bs810i/H42TNimmbI6W3YP+rK6OUD9CNPCgJqbYP/HDWziEzbXAkvSEt6bzK+Kmw+6h6MIdn+biTOxKJwfmJu0uCApvkQpfkNp6vB/mDx0fwEQ9fMX"),l(m,"title","Open in our Online Editor"),In.a=null,l(Xt,"class","language-js"),l(O,"class","remark-container tip"),l(St,"class","remark-container__title"),l(x,"target","_blank"),l(x,"href","/editor#eNrFUktrwkAQ/ivLXJpAkKgIJZcSpRQPLaUVWqmC22TywHU37G6oIvnv3TQajY1iTz0kzG7mm/ke2QLNMvC2EIgQwYOAUaXI48bPMoJrjTxUxNTbGZ/p8gkkUo2vmkr9TGO07OqLlqhzyUn9obwtKlABhQORYCFKBd7HFtIQvK4DnK7KjT8QcEBEkUL9Dp67r6emLuYOZGZeA1kNG1eHBvF6f02+PJywf8jTU95Dse58paFOrL5rdxJM40RbA1MGScpCq+qdmckZys4nDZaxFDkPR4IJaS1iw2ex65XI6/YdYJTKgKGzv7V3ld3wyIE1eD3XiN+A13dr4RNcZcyQbhjQ0Oyr5Tjyw5xdEC74ECMhD3kd7b5gy4v4Ur9lvWY0OMiZmIUdbV7WwpdINiInP/EQnVBOurd3C9tpRxr38hVXbb41G2d6mGujYbfmSRizS28snjNmO1fCpqiuw7UFVFroRxplm4PlH15l0zvJ5p4biB/jfyfzllB9o8pwJDHbz2fScKzrthvWbBpc0dS7ZlLvzKRjhn/JZF58A6xpxBY="),l(x,"title","Open in our Online Editor"),zn.a=null,l(Zt,"class","language-js"),l(G,"class","remark-container tip"),l(Et,"class","remark-container__title"),l(v,"target","_blank"),l(v,"href","/editor#eNrFU11r2zAU/StCL1PAGDshMPwynDJGHzbGWtjKUohqXX9QRTL6oAnB/31SnbpW6ob0aQ82V9Y95957zvUB07bF2QEXkgHOcMGp1uj7Pm9bBDsDgmnk4sNarI1/CgXUwI2hyvykFZBZf2MUGKsEGi78164HdbiLcCk5A6Vx9veAG4azNMKCbn3FZwiOsCxLDeYPzpKX+M7F3X2EW8cXIHuy6/4QND7UH5r3h5Puv9nmtO+V3MVPDTM1WSSzuIamqg1ZurCoG85In7t2zC2o+IEWj5WSVrAryaUim8r1sznmKhBD+hFw1aiCQ1yAMKBIEiHHqyhrrCapC9/QPXALm1l0liVdRmjxyrOYoOHNdkzzEs0CayK8w9k8cZrvcbZIBr1vYdtyp1WgeyB1rh+vy5xZfkZvKVZQSvW6JqPaZ9z4JZ/0WzVvWlrAMM6tKxgb9yKbXAHaS4uetwKZmgqUfv4yGj1EOnnsVugpu8LEtVlZ42Y4lvkhncdeGyIs52N/zsLuQF+GmzLIS5iX3vAJBf2P1XszP/Hmq9+RvIL/7czvmppP2pujkKv+vieBYmkyLViYtLwgaX4J0/wdpnGHH/HkvvsHHc3tBA=="),l(v,"title","Open in our Online Editor"),Vn.a=null,l(Ft,"class","language-js"),l(j,"class","remark-container tip"),l(Ot,"class","remark-container__title"),l(w,"target","_blank"),l(w,"href","/editor#eNrFUktLw0AQ/ivLXEwglLRSkFwkFREPilRBxRa6JpMHbnfD7gRbSv67G9OmpkapJw8Js9n5Zr5HNsCLAoINRCpGCCAS3Bh2sw6LguGKUMaG2XozkzOqn0gjJ7wnrumOp+i4zQ1ppFJL1l7UX6sGVEHlQaJEjNpA8LKBPIZg6IHky3rjJwQ8UElikJ4g8Hf1s62ruQeFnddBNsOum0OHeLu/JV8fDthflfkh74laDd7zmDLn1HcHGeZpRs7YllGWi9hpemd2coF68Mqjt1SrUsYXSijtLFLLZ7Ht1Sjb9i1gihFxmQr0dhfutnI7NnmwgmDkW/1rCE79VvsDLgtheXc86MgOzdt1Esal+EW7khNMlN5H9mX3L85M1bv5ruy+4NFezoNdOCD7chahRrZWJftMiFHGJRuenS9crx9pDSyX0vRZ122c0aQkq2G75lZZv2tvHFkK4XpHwp7RHIfrC6i2MEwIdZ+D9U/eZDM6yOZSWkiY4n8n85hxOjF1OJrZ7T9n0nFs6Pcb1m0aH9E0OmbS6IdJXxn+JZN59QGLnMVZ"),l(w,"title","Open in our Online Editor"),Wn.a=null,l(qt,"class","language-js"),l(z,"class","remark-container tip"),l(Ut,"class","remark-container__title"),l(P,"target","_blank"),l(P,"href","/editor#eNrFk11r2zAUhv+KODdzwBjbJTB8M5xRSi82RlvYylKIah9/UEUy+qAJwf99Up16VpKG7GoXNkfyOe97dB55B7TrINtBIUqEDApGlSLftnnXEdxo5KUiNt4t+VK7p5BINd5rKvUPWmMwG75oidpITsYPbrcfinroQ6gEK1EqyH7voC0hS0LgdO0c30ogBFFVCvUvyOL3+NHG/VMIndXzKgex22HhNT76j827xUH3N6Y97HshNtFrW+omuIpnUYNt3ehgbsOiaVkZDLlLq9yhjJ5p8VJLYXj5VTAhg1Vt+1ntcyXyMX1fcIeFprxmGBXINcogmYdk4uPCwTy10ZH6MzO4moWXiCbzUTQZRd3mkShr11PR92jmcQthA1kaWyBbyK7iEcYDrjtmB+lB8Tjk6uW2ykvDzsAQfIGVkH/v0MT7DKo78aqOR33f0QLH4zxYw0jbV7DKJZKtMOTtyhDdUE6Sz18mR/cr7XjMmqtTLP3EpV4Ybc+wt/ku7AVwswm4YWxK62zZI6rL6k4BciPMK8f+xATdXzewSQ/YXLvrktf4v8n8bKj+pBwcSaz7x0y8iSXx6YH5SfMLktJLlNIPlKYd/guTp/4Pxnj2Dg=="),l(P,"title","Open in our Online Editor"),Zn.a=null,l($t,"class","language-js"),l(R,"class","remark-container tip")},m(t,e){a(t,d,e),a(t,tn,e),a(t,U,e),a(t,nn,e),a(t,D,e),a(t,en,e),a(t,V,e),a(t,an,e),a(t,K,e),a(t,sn,e),a(t,Y,e),a(t,pn,e),a(t,M,e),i(M,N),i(M,W),B(J,W,null),i(W,k),i(W,Nt),on.m(ba,Nt),a(t,ln,e),a(t,Q,e),a(t,cn,e),a(t,X,e),a(t,un,e),a(t,_,e),i(_,Z),i(_,F),B(q,F,null),i(F,g),i(F,Wt),rn.m(Sa,Wt),a(t,dn,e),a(t,$,e),a(t,kn,e),a(t,tt,e),a(t,gn,e),a(t,nt,e),a(t,fn,e),a(t,et,e),a(t,hn,e),a(t,at,e),a(t,mn,e),a(t,st,e),a(t,xn,e),a(t,pt,e),a(t,vn,e),a(t,ot,e),a(t,wn,e),a(t,lt,e),a(t,Pn,e),a(t,H,e),B(ct,H,null),i(H,f),i(H,Jt),Cn.m(Ba,Jt),a(t,yn,e),a(t,ut,e),a(t,bn,e),a(t,it,e),a(t,Sn,e),a(t,rt,e),a(t,Bn,e),a(t,dt,e),a(t,An,e),a(t,kt,e),a(t,Ln,e),a(t,gt,e),a(t,Tn,e),a(t,I,e),i(I,ft),i(I,ht),B(mt,ht,null),i(ht,h),i(ht,Qt),En.m(Aa,Qt),a(t,Mn,e),a(t,xt,e),a(t,_n,e),a(t,vt,e),a(t,Hn,e),a(t,O,e),i(O,wt),i(O,Pt),B(Ct,Pt,null),i(Pt,m),i(Pt,Xt),In.m(La,Xt),a(t,On,e),a(t,yt,e),a(t,Gn,e),a(t,bt,e),a(t,jn,e),a(t,G,e),i(G,St),i(G,Bt),B(At,Bt,null),i(Bt,x),i(Bt,Zt),zn.m(Ta,Zt),a(t,Rn,e),a(t,Lt,e),a(t,Un,e),a(t,Tt,e),a(t,Dn,e),a(t,j,e),i(j,Et),i(j,Mt),B(_t,Mt,null),i(Mt,v),i(Mt,Ft),Vn.m(Ea,Ft),a(t,Kn,e),a(t,Ht,e),a(t,Yn,e),a(t,It,e),a(t,Nn,e),a(t,z,e),i(z,Ot),i(z,Gt),B(jt,Gt,null),i(Gt,w),i(Gt,qt),Wn.m(Ma,qt),a(t,Jn,e),a(t,zt,e),a(t,Qn,e),a(t,Rt,e),a(t,Xn,e),a(t,R,e),i(R,Ut),i(R,Dt),B(Vt,Dt,null),i(Dt,P),i(Dt,$t),Zn.m(_a,$t),a(t,Fn,e),a(t,Kt,e),a(t,qn,e),a(t,Yt,e),$n=!0},p:Ia,i(t){$n||(A(J.$$.fragment,t),A(q.$$.fragment,t),A(ct.$$.fragment,t),A(mt.$$.fragment,t),A(Ct.$$.fragment,t),A(At.$$.fragment,t),A(_t.$$.fragment,t),A(jt.$$.fragment,t),A(Vt.$$.fragment,t),$n=!0)},o(t){L(J.$$.fragment,t),L(q.$$.fragment,t),L(ct.$$.fragment,t),L(mt.$$.fragment,t),L(Ct.$$.fragment,t),L(At.$$.fragment,t),L(_t.$$.fragment,t),L(jt.$$.fragment,t),L(Vt.$$.fragment,t),$n=!1},d(t){t&&(n(d),n(tn),n(U),n(nn),n(D),n(en),n(V),n(an),n(K),n(sn),n(Y),n(pn),n(M),n(ln),n(Q),n(cn),n(X),n(un),n(_),n(dn),n($),n(kn),n(tt),n(gn),n(nt),n(fn),n(et),n(hn),n(at),n(mn),n(st),n(xn),n(pt),n(vn),n(ot),n(wn),n(lt),n(Pn),n(H),n(yn),n(ut),n(bn),n(it),n(Sn),n(rt),n(Bn),n(dt),n(An),n(kt),n(Ln),n(gt),n(Tn),n(I),n(Mn),n(xt),n(_n),n(vt),n(Hn),n(O),n(On),n(yt),n(Gn),n(bt),n(jn),n(G),n(Rn),n(Lt),n(Un),n(Tt),n(Dn),n(j),n(Kn),n(Ht),n(Yn),n(It),n(Nn),n(z),n(Jn),n(zt),n(Qn),n(Rt),n(Xn),n(R),n(Fn),n(Kt),n(qn),n(Yt)),T(J),T(q),T(ct),T(mt),T(Ct),T(At),T(_t),T(jt),T(Vt)}}}class Da extends Oa{constructor(d){super(),Ga(this,d,null,ja,Ha,{})}}export{Da as component};
