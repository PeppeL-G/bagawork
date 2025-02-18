import{s as Dt,n as Ot}from"../chunks/scheduler.B0TnBjPs.js";import{S as Rt,i as jt,e,s as u,c as S,H as yn,a as p,g as c,b as l,d as r,f as L,h as s,n as Tn,o,j as a,p as i,m as G,t as H,k as E,l as D}from"../chunks/index.BXVnRmkj.js";import{V as O}from"../chunks/ViewApp.qg7AIhJt.js";function At(Tt){let x,Ls="<code>PaperGroup</code>",qn,R,Gs="On this page you find the documentation for the paper figure <code>PaperGroup</code>.",In,j,Hs="Introduction",Bn,A,Es="<code>PaperGroup</code> is a paper figure that can contain other paper figures. These other paper figures will be affected by the position and the size of the <code>PaperGroup</code> figure, making it perfect for grouping relevant paper figures together, and to scale them the same way.",Vn,v,z,Ds="Example",Mn,Os="This example uses one <code>PaperGroup</code> for each cross shown on the screen, and these two groups are positioned at different places, and one of them is also scaled to be twice as high.",U,Qn,$,Rs="<code>coordinateSystem()</code> - Setting the coordinate system",Xn,q,js="Use the configuration method <code>coordinateSystem()</code> to tell the <code>PaperGroup</code> figure how wide and tall its coordinate system should be (which its children then uses to position themselves in the <code>PaperGroup</code>). Pass it two numbers:",Yn,I,As="<li>How wide the coordinate system should be</li> <li>How tall the coordinate system should be</li>",Nn,B,zs="By default, the width and height will both be <code>10</code>.",Wn,k,V,Us="Example",Q,b,$s="Open in Online Editor",_n,Fn,Mt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createPaperGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createPaperGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Jn,X,qs="<code>showCoordinates()</code> - Showing the coordinate system",Zn,Y,Is="Use the configuration method <code>showCoordinates()</code> to tell the <code>PaperGroup</code> figure to visualize its coordinate system. This can be very handy during development, but not something one typically use the final version of the application.",Kn,d,N,Bs="Example",W,P,Vs="Open in Online Editor",Sn,ns,_t=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createPaperGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createPaperGroup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ss,F,Qs="<code>children()</code> - Setting the children",ts,J,Xs="Use the configuration method <code>children()</code> to tell the <code>PaperGroup</code> figure which children figures it should contain. Pass the children as separate arguments. When the <code>PaperGroup</code> is shown on the screen, it will show all of its children.",as,Z,Ys='By default, the <code>PaperGroup</code> will occupy the same size as the <a href="/documentation/paper/" title="Open the documentation for Paper.">Paper</a> component/<code>PaperGroup</code> it is used in.',es,m,K,Ns="Example",nn,w,Ws="Open in Online Editor",Ln,ps,St=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCross</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCross</span><span class="token punctuation">(</span><span class="token parameter">crossColor</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,os,sn,Fs="<code>width()</code> - Setting the width",cs,tn,Js="Use the configuration method <code>width()</code> to tell the <code>PaperGroup</code> figure how wide it should be in the coordinate system of its parent. Pass it the width as a number.",us,an,Zs="By default, the <code>PaperGroup</code> will be as wide as its parent, and centered horizontally in it.",ls,f,en,Ks="Example",pn,y,nt="Open in Online Editor",Gn,is,Lt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCross</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCross</span><span class="token punctuation">(</span><span class="token parameter">crossColor</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,rs,on,st="<code>height()</code> - Setting the height",ks,cn,tt="Use the configuration method <code>height()</code> to tell the <code>PaperGroup</code> figure how high it should be in the coordinate system of its parent. Pass it the height as a number.",ds,un,at="By default, the <code>PaperGroup</code> will be as high as its parent, and centered vertically in it.",ms,h,ln,et="Example",rn,T,pt="Open in Online Editor",Hn,fs,Gt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCross</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCross</span><span class="token punctuation">(</span><span class="token parameter">crossColor</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,hs,kn,ot="<code>center()</code> - Setting the center",gs,dn,ct="Use the configuration method <code>center()</code> to tell the <code>PaperGroup</code> figure where it should be centered in its parent. Pass it two numbers:",Cs,mn,ut="<li>The X-coordinate of its center</li> <li>The Y-coordinate of its center</li>",xs,fn,lt="By default, the <code>PaperGroup</code> will be centered in its parent.",vs,g,hn,it="Example",gn,M,rt="Open in Online Editor",En,bs,Ht=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCross</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">2.5</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				p<span class="token punctuation">.</span><span class="token function">createCross</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">center</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createCross</span><span class="token punctuation">(</span><span class="token parameter">crossColor</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> PaperGroup<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>crossColor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">thickness</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ps,Cn,kt="<code>onClick()</code> - Handling clicks",ws,xn,dt="Call the configuration method <code>onClick()</code> to specify a method that should be called when the user clicks somewhere on the <code>PaperGroup</code> figure. Your method will be passed two numbers:",ys,vn,mt="<li>The X coordinate of the click</li> <li>The Y coordinate of the click</li>",Ts,bn,ft="The coordinates will be in the coordinate system within the <code>PaperGroup</code> figure.",Ms,C,Pn,ht="Example",wn,_,gt="Open in Online Editor",Dn,_s,Et=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	lastClickX <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	lastClickY <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Updater<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">textUpdater</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createText<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Paper
					<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">orange</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						PaperGroup
							<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
							<span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
							<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
							<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
							<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
							<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleClick<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lastClickX:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>lastClickX<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lastClickY:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>lastClickY<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		p<span class="token punctuation">.</span>lastClickX <span class="token operator">=</span> x
		p<span class="token punctuation">.</span>lastClickY <span class="token operator">=</span> y
		
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">textUpdater</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ss;return U=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.coordinateSystem(3, 3).backgroundColor(\`orange\`).showCoordinates().children(
				p.createCross(\`red\`).width(1).height(1).center(0.5, 2.5),
				p.createCross(\`blue\`).width(1).height(2).center(2.5, 1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}`,x:150,y:200}]}}}),Q=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).children(
				p.createPaperGroup(),
			),
		)
	}
	
	createPaperGroup(){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates()
	}
	
}`,x:150,y:200}]}}}),W=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).children(
				p.createPaperGroup(),
			),
		)
	}
	
	createPaperGroup(){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates()
	}
	
}`,x:150,y:200}]}}}),nn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).children(
				p.createCross(\`red\`),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}`,x:150,y:200}]}}}),pn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).children(
				p.createCross(\`red\`).width(1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}`,x:150,y:200}]}}}),rn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).children(
				p.createCross(\`red\`).height(1),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}`,x:150,y:200}]}}}),gn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.aspectRatio(3, 3).child(
			Paper.backgroundColor(\`orange\`).coordinateSystem(3, 3).showCoordinates().children(
				p.createCross(\`red\`).width(1).height(1).center(2.5, 1.5),
				p.createCross(\`blue\`).width(1).height(1).center(0.5, 2.5),
			),
		)
	}
	
	createCross(crossColor){
		return PaperGroup.coordinateSystem(5, 5).showCoordinates().children(
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 0).end(5, 5),
			PaperLine.backgroundColor(crossColor).thickness(0.25).start(0, 5).end(5, 0),
		)
	}
	
}`,x:150,y:200}]}}}),wn=new O({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	lastClickX = -1
	lastClickY = -1
	
	createGui(){
		return Rows.children(
			Updater.name(\`textUpdater\`).childCreator(p.createText),
			Space,
			Box.aspectRatio(10, 10).child(
				Paper
					.backgroundColor(\`orange\`)
					.coordinateSystem(10, 10)
					.showCoordinates()
					.children(
						PaperGroup
							.backgroundColor(\`red\`)
							.coordinateSystem(3, 3)
							.showCoordinates()
							.width(2)
							.height(2)
							.onClick(p.handleClick),
					),
			),
			Space,
		)
	}
	
	createText(){
		return Rows.children(
			Text.text(\`lastClickX:\`),
			Text.text(\`\${p.lastClickX}\`),
			Text.text(\`lastClickY:\`),
			Text.text(\`\${p.lastClickY}\`),
		)
	}
	
	handleClick(x, y){
		
		p.lastClickX = x
		p.lastClickY = y
		
		runUpdater(\`textUpdater\`)
		
	}
	
}`,x:150,y:200}]}}}),{c(){x=e("h1"),x.innerHTML=Ls,qn=u(),R=e("p"),R.innerHTML=Gs,In=u(),j=e("h2"),j.textContent=Hs,Bn=u(),A=e("p"),A.innerHTML=Es,Vn=u(),v=e("div"),z=e("div"),z.textContent=Ds,Mn=e("p"),Mn.innerHTML=Os,S(U.$$.fragment),Qn=u(),$=e("h2"),$.innerHTML=Rs,Xn=u(),q=e("p"),q.innerHTML=js,Yn=u(),I=e("ul"),I.innerHTML=As,Nn=u(),B=e("p"),B.innerHTML=zs,Wn=u(),k=e("div"),V=e("div"),V.textContent=Us,S(Q.$$.fragment),b=e("a"),b.textContent=$s,_n=e("pre"),Fn=new yn(!1),Jn=u(),X=e("h2"),X.innerHTML=qs,Zn=u(),Y=e("p"),Y.innerHTML=Is,Kn=u(),d=e("div"),N=e("div"),N.textContent=Bs,S(W.$$.fragment),P=e("a"),P.textContent=Vs,Sn=e("pre"),ns=new yn(!1),ss=u(),F=e("h2"),F.innerHTML=Qs,ts=u(),J=e("p"),J.innerHTML=Xs,as=u(),Z=e("p"),Z.innerHTML=Ys,es=u(),m=e("div"),K=e("div"),K.textContent=Ns,S(nn.$$.fragment),w=e("a"),w.textContent=Ws,Ln=e("pre"),ps=new yn(!1),os=u(),sn=e("h2"),sn.innerHTML=Fs,cs=u(),tn=e("p"),tn.innerHTML=Js,us=u(),an=e("p"),an.innerHTML=Zs,ls=u(),f=e("div"),en=e("div"),en.textContent=Ks,S(pn.$$.fragment),y=e("a"),y.textContent=nt,Gn=e("pre"),is=new yn(!1),rs=u(),on=e("h2"),on.innerHTML=st,ks=u(),cn=e("p"),cn.innerHTML=tt,ds=u(),un=e("p"),un.innerHTML=at,ms=u(),h=e("div"),ln=e("div"),ln.textContent=et,S(rn.$$.fragment),T=e("a"),T.textContent=pt,Hn=e("pre"),fs=new yn(!1),hs=u(),kn=e("h2"),kn.innerHTML=ot,gs=u(),dn=e("p"),dn.innerHTML=ct,Cs=u(),mn=e("ul"),mn.innerHTML=ut,xs=u(),fn=e("p"),fn.innerHTML=lt,vs=u(),g=e("div"),hn=e("div"),hn.textContent=it,S(gn.$$.fragment),M=e("a"),M.textContent=rt,En=e("pre"),bs=new yn(!1),Ps=u(),Cn=e("h2"),Cn.innerHTML=kt,ws=u(),xn=e("p"),xn.innerHTML=dt,ys=u(),vn=e("ul"),vn.innerHTML=mt,Ts=u(),bn=e("p"),bn.innerHTML=ft,Ms=u(),C=e("div"),Pn=e("div"),Pn.textContent=ht,S(wn.$$.fragment),_=e("a"),_.textContent=gt,Dn=e("pre"),_s=new yn(!1),this.h()},l(n){x=p(n,"H1",{"data-svelte-h":!0}),c(x)!=="svelte-1bzy18c"&&(x.innerHTML=Ls),qn=l(n),R=p(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-82w59b"&&(R.innerHTML=Gs),In=l(n),j=p(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-1ukekoe"&&(j.textContent=Hs),Bn=l(n),A=p(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-1144r0z"&&(A.innerHTML=Es),Vn=l(n),v=p(n,"DIV",{class:!0});var t=r(v);z=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=Ds),Mn=p(t,"P",{"data-svelte-h":!0}),c(Mn)!=="svelte-1g6iwne"&&(Mn.innerHTML=Os),L(U.$$.fragment,t),t.forEach(s),Qn=l(n),$=p(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-j6wl3k"&&($.innerHTML=Rs),Xn=l(n),q=p(n,"P",{"data-svelte-h":!0}),c(q)!=="svelte-17ccyyl"&&(q.innerHTML=js),Yn=l(n),I=p(n,"UL",{"data-svelte-h":!0}),c(I)!=="svelte-191e93g"&&(I.innerHTML=As),Nn=l(n),B=p(n,"P",{"data-svelte-h":!0}),c(B)!=="svelte-114rd7f"&&(B.innerHTML=zs),Wn=l(n),k=p(n,"DIV",{class:!0});var On=r(k);V=p(On,"DIV",{class:!0,"data-svelte-h":!0}),c(V)!=="svelte-1llzxwj"&&(V.textContent=Us),L(Q.$$.fragment,On),b=p(On,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(b)!=="svelte-1hr6lpd"&&(b.textContent=$s),_n=p(On,"PRE",{class:!0});var Ct=r(_n);Fn=Tn(Ct,!1),Ct.forEach(s),On.forEach(s),Jn=l(n),X=p(n,"H2",{"data-svelte-h":!0}),c(X)!=="svelte-cthg8c"&&(X.innerHTML=qs),Zn=l(n),Y=p(n,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-doqg7k"&&(Y.innerHTML=Is),Kn=l(n),d=p(n,"DIV",{class:!0});var Rn=r(d);N=p(Rn,"DIV",{class:!0,"data-svelte-h":!0}),c(N)!=="svelte-1llzxwj"&&(N.textContent=Bs),L(W.$$.fragment,Rn),P=p(Rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-1hr6lpd"&&(P.textContent=Vs),Sn=p(Rn,"PRE",{class:!0});var xt=r(Sn);ns=Tn(xt,!1),xt.forEach(s),Rn.forEach(s),ss=l(n),F=p(n,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-15e1mwm"&&(F.innerHTML=Qs),ts=l(n),J=p(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-1pcf79r"&&(J.innerHTML=Xs),as=l(n),Z=p(n,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1afbmlv"&&(Z.innerHTML=Ys),es=l(n),m=p(n,"DIV",{class:!0});var jn=r(m);K=p(jn,"DIV",{class:!0,"data-svelte-h":!0}),c(K)!=="svelte-1llzxwj"&&(K.textContent=Ns),L(nn.$$.fragment,jn),w=p(jn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-1ihvk3u"&&(w.textContent=Ws),Ln=p(jn,"PRE",{class:!0});var vt=r(Ln);ps=Tn(vt,!1),vt.forEach(s),jn.forEach(s),os=l(n),sn=p(n,"H2",{"data-svelte-h":!0}),c(sn)!=="svelte-1mhq8vo"&&(sn.innerHTML=Fs),cs=l(n),tn=p(n,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-kc1ti1"&&(tn.innerHTML=Js),us=l(n),an=p(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-1e17sl1"&&(an.innerHTML=Zs),ls=l(n),f=p(n,"DIV",{class:!0});var An=r(f);en=p(An,"DIV",{class:!0,"data-svelte-h":!0}),c(en)!=="svelte-1llzxwj"&&(en.textContent=Ks),L(pn.$$.fragment,An),y=p(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-pzzl48"&&(y.textContent=nt),Gn=p(An,"PRE",{class:!0});var bt=r(Gn);is=Tn(bt,!1),bt.forEach(s),An.forEach(s),rs=l(n),on=p(n,"H2",{"data-svelte-h":!0}),c(on)!=="svelte-1h37gg6"&&(on.innerHTML=st),ks=l(n),cn=p(n,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-1uxdpbg"&&(cn.innerHTML=tt),ds=l(n),un=p(n,"P",{"data-svelte-h":!0}),c(un)!=="svelte-1u5v1vc"&&(un.innerHTML=at),ms=l(n),h=p(n,"DIV",{class:!0});var zn=r(h);ln=p(zn,"DIV",{class:!0,"data-svelte-h":!0}),c(ln)!=="svelte-1llzxwj"&&(ln.textContent=et),L(rn.$$.fragment,zn),T=p(zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-7l4y1q"&&(T.textContent=pt),Hn=p(zn,"PRE",{class:!0});var Pt=r(Hn);fs=Tn(Pt,!1),Pt.forEach(s),zn.forEach(s),hs=l(n),kn=p(n,"H2",{"data-svelte-h":!0}),c(kn)!=="svelte-p8x8z6"&&(kn.innerHTML=ot),gs=l(n),dn=p(n,"P",{"data-svelte-h":!0}),c(dn)!=="svelte-1up3juy"&&(dn.innerHTML=ct),Cs=l(n),mn=p(n,"UL",{"data-svelte-h":!0}),c(mn)!=="svelte-ledvhb"&&(mn.innerHTML=ut),xs=l(n),fn=p(n,"P",{"data-svelte-h":!0}),c(fn)!=="svelte-7yi5xj"&&(fn.innerHTML=lt),vs=l(n),g=p(n,"DIV",{class:!0});var Un=r(g);hn=p(Un,"DIV",{class:!0,"data-svelte-h":!0}),c(hn)!=="svelte-1llzxwj"&&(hn.textContent=it),L(gn.$$.fragment,Un),M=p(Un,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(M)!=="svelte-1rek64x"&&(M.textContent=rt),En=p(Un,"PRE",{class:!0});var wt=r(En);bs=Tn(wt,!1),wt.forEach(s),Un.forEach(s),Ps=l(n),Cn=p(n,"H2",{"data-svelte-h":!0}),c(Cn)!=="svelte-iimgs0"&&(Cn.innerHTML=kt),ws=l(n),xn=p(n,"P",{"data-svelte-h":!0}),c(xn)!=="svelte-18zcuzs"&&(xn.innerHTML=dt),ys=l(n),vn=p(n,"UL",{"data-svelte-h":!0}),c(vn)!=="svelte-ccoged"&&(vn.innerHTML=mt),Ts=l(n),bn=p(n,"P",{"data-svelte-h":!0}),c(bn)!=="svelte-bk27ck"&&(bn.innerHTML=ft),Ms=l(n),C=p(n,"DIV",{class:!0});var $n=r(C);Pn=p($n,"DIV",{class:!0,"data-svelte-h":!0}),c(Pn)!=="svelte-1llzxwj"&&(Pn.textContent=ht),L(wn.$$.fragment,$n),_=p($n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-pt5zv"&&(_.textContent=gt),Dn=p($n,"PRE",{class:!0});var yt=r(Dn);_s=Tn(yt,!1),yt.forEach(s),$n.forEach(s),this.h()},h(){o(z,"class","remark-container__title"),o(v,"class","remark-container tip"),o(V,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNplUMFOwzAM/ZXIp1SKqsHUS2+ww8QBCcGRIC0kpqtWkihJRasq/066stDBzc/Pfu/ZEwhroZ5AGoVQg+yE9+RxvLOW4BBQK09SPXHNg3QoAr4E4cKTaJAW5y4PDkPvNMnE3I1cR4gMbMIe6tcJWgX1DYMP0yl0Dwu4Ms372XgGi0d23/ftX997M5TCW5ThWYTW0C0j26KUx7ZTdBnkSdaiK9+FPDXO9FrtTGccPRgndIOHNG2MU62ezxt9wM+1iEOddXiw5RLkrLhPYpYW7EJfquLnBevk64XrA36Z/zkqRqqi9EfztcuUp2v9CAyG9M1qw2CE+naziW/xG++vqeA="),o(b,"title","Open in our Online Editor"),Fn.a=null,o(_n,"class","language-js"),o(k,"class","remark-container tip"),o(N,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNplUMFOwzAM/ZXIp1SKqsHUS2+ww8QBCcGRIC0kpqtWkihJRasq/066stDBzc/Pfu/ZEwhroZ5AGoVQg+yE9+RxvLOW4BBQK09SPXHNg3QoAr4E4cKTaJAW5y4PDkPvNMnE3I1cR4gMbMIe6tcJWgX1DYMP0yl0Dwu4Ms372XgGi0d23/ftX997M5TCW5ThWYTW0C0j26KUx7ZTdBnkSdaiK9+FPDXO9FrtTGccPRgndIOHNG2MU62ezxt9wM+1iEOddXiw5RLkrLhPYpYW7EJfquLnBevk64XrA36Z/zkqRqqi9EfztcuUp2v9CAyG9M1qw2CE+naziW/xG++vqeA="),o(P,"title","Open in our Online Editor"),ns.a=null,o(Sn,"class","language-js"),o(d,"class","remark-container tip"),o(K,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqtUl1LwzAU/SvhPqUQQt3oS990D0NQEH20QmNy3cJqEpIMN0r/u2nrwtx89CXcz3POPaQH4RzUPUirEGqQnQiBPB5vnSN4iGhUICnuG9NE6VFEfInCxyexQVpM1SZ6jHtvSG6M1aExAwwMXMoD1K89aAX1DYMP2yn093PyizTvZ+IxmTky+3qvL3nv7IGL4FDGZxG1pUtGlgWXW90pOg82Cdah5+9C7jbe7o1a2c562lovzAbbNG2tV9qM5x1DxM9zEI8m4zTR8VnIytsQaOtRtQU7tU9R8WPBufJ5QY7vxH5xxaRwncS5azEVI1XBw9Z+rXIr0D/kTSAP2uDVqWe8PG613BlMakq+GIFH42nJSFnw5PtMx/4Js8qY5V/uDMDgkP5CVTI4Qr0oy+Ft+AZ/oetE"),o(w,"title","Open in our Online Editor"),ps.a=null,o(Ln,"class","language-js"),o(m,"class","remark-container tip"),o(en,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqtUj1rwzAQ/SvmJhmEcBK8eGszhEILpR3rQlTpGou4kpAUkmD83yvbjUiTjFnEfb737k4dcGuh6kAYiVCBaLn32cvxwdoMDwG19Fm0u1rXQTjkAd8Dd+GVb5DkY7QODsPO6Swlhmhf6x56Cjb6HqqPDpSEakbh27QS3dPk/CNN/Yl4cCaOxL7aqUveR3Ng3FsU4Y0HZciCZouciUa1kkyFdYS16NgXF9uNMzstl6Y1jqyN43qD61htjJNKD+MdfcCfcxCHOuHUwbJJyNIZ78naoYzteyVDQ2Y5PdWdrPxvF+cjTJ1ieEcZF+OMUldRpb1WVdKszJlvzH6ZUp7c0DmCPCuNVzOf8bLQKLHVGNUUbD4ADxcgBc2KnMUDTHT0TphlwixubacHCof4KcqCwhGqeVH0n/0vYKXuFA=="),o(y,"title","Open in our Online Editor"),is.a=null,o(Gn,"class","language-js"),o(f,"class","remark-container tip"),o(ln,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtUj1rwzAQ/SvmJhmEcBK8eGszhEILpR3rQlTpaou4kpAUmmD83yvbjUiTjF3Efb737k49cGuh6kEYiVCB6Lj32dPxztoMDwG19Fm0+1rXQTjkAV8Dd+GZN0jyKVoHh2HvdJYSY3So9QADBRt9D9VbD0pCtaDwaTqJ7mF2/pCm/kQ8OjNHYt/s1SXvvTkw7i2K8MKDMmRFs1XORKs6SebCOsJadOyDi13jzF7LtemMI1vjuG5wG6uNcVLpcbyjD/h1DuJQJ5w6WDYLWTvjPdk6lLG9RdW0gSxyeio8WfnvMs5nmFvF+E46LuaZtG6iTHstq6RZmTPfmu91SnlyQ+gE8qg0Xg19xstCq8ROY1RTsOUIPJ6AFDQrchYvMNPRf8IsE2ZxazsDUDjEX1EWFI5QLYtieB9+AE4o7m0="),o(T,"title","Open in our Online Editor"),fs.a=null,o(Hn,"class","language-js"),o(h,"class","remark-container tip"),o(hn,"class","remark-container__title"),o(M,"target","_blank"),o(M,"href","/editor#eNqtkkFrwyAYhv9K8GRAxKbkktvWQxlsMLbjMqjVb4k0U1FDW0L++0zSha7dxg67hO9T87z6aIe4tajokDASUIFEw71PHo431iZwCKClT2LdlboMwgEP8By4C4+8ApyOo2VwEFqnk3liGO1L3aOeIBt7j4qXDimJigVBb6aR4O6m5kvo/P8cPDRTxpy+btVl7q05UO4tiPDEgzJ4SZJlSkWtGomnhWXEWnB0y8WucqbVcmUa4/DGOK4r2MTVxjip9HC8ow/wfoL42uxX85THJ6wDPZPLYOm0tZUz3uONAxmBeyVDjRcprUFVdRgqATqAwxnNSbKgeUp+RGybFn5lsIGRnTM+q/Qk/9zZRBXDdzz3hb/RzTpqsdcaYkz+Jw0j5F5puJJ8lktDrcROQ9wNo9kAHq4cM5KwlMYbn+LIPzHzmcm+s9Mjgg7xFeaMoCMqMsb61/4DVMQS9A=="),o(M,"title","Open in our Online Editor"),bs.a=null,o(En,"class","language-js"),o(g,"class","remark-container tip"),o(Pn,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNqNU1FrpDAQ/ish3EMET9yWexH6cLcPpQ+F0t7BlbNgLpmuUpuEJMsq4n+/ZHWN7sqxiOLMfDPfl8xMh6lSOOswkxxwhllNjUGP7XelEDQWBDfI/Xe5yC3TQC28WKrtE90BiY7e3Gqwey3QFPDePhc97mOsnG1w9qfDFcfZJsbvsuagHwZjQTrlT8TeGDjc6zB2W1fs4ze6Q183C9fr5Ao67/fVucJneTAJK6uaaxBkCOX2l+IOrhNBP4EU1pGPniIawFtfT2qikqHyTweJ4lP6i6IMJuuHbBJqFDD7TG0lySaN0SYdC02UuTunAh3M3CZ/KfvYabkXfCtrx1ZITcUOimiBYlJqXgnfh9ZY+DwRLECmlIftBDTkrMT5BcwU3TsBaulfk6aBL3Wta7uN0e0l7L/qjohDxW1Jbi4DJVS70q5FpDgOgutRSQWv4WiFJvknWOvNi8a5nQ+Rb/V1U+SRiR8eUoRJzYpANQN86VQSQP06KAz3NVVeQ5XlOWbXQZoYtafDDN+5DrdDzYXXb1Y7z9B7Ma7H2a4E0Mjd4xg3bs2/pTFucXaTpv1b/w86gKRd"),o(_,"title","Open in our Online Editor"),_s.a=null,o(Dn,"class","language-js"),o(C,"class","remark-container tip")},m(n,t){a(n,x,t),a(n,qn,t),a(n,R,t),a(n,In,t),a(n,j,t),a(n,Bn,t),a(n,A,t),a(n,Vn,t),a(n,v,t),i(v,z),i(v,Mn),G(U,v,null),a(n,Qn,t),a(n,$,t),a(n,Xn,t),a(n,q,t),a(n,Yn,t),a(n,I,t),a(n,Nn,t),a(n,B,t),a(n,Wn,t),a(n,k,t),i(k,V),G(Q,k,null),i(k,b),i(k,_n),Fn.m(Mt,_n),a(n,Jn,t),a(n,X,t),a(n,Zn,t),a(n,Y,t),a(n,Kn,t),a(n,d,t),i(d,N),G(W,d,null),i(d,P),i(d,Sn),ns.m(_t,Sn),a(n,ss,t),a(n,F,t),a(n,ts,t),a(n,J,t),a(n,as,t),a(n,Z,t),a(n,es,t),a(n,m,t),i(m,K),G(nn,m,null),i(m,w),i(m,Ln),ps.m(St,Ln),a(n,os,t),a(n,sn,t),a(n,cs,t),a(n,tn,t),a(n,us,t),a(n,an,t),a(n,ls,t),a(n,f,t),i(f,en),G(pn,f,null),i(f,y),i(f,Gn),is.m(Lt,Gn),a(n,rs,t),a(n,on,t),a(n,ks,t),a(n,cn,t),a(n,ds,t),a(n,un,t),a(n,ms,t),a(n,h,t),i(h,ln),G(rn,h,null),i(h,T),i(h,Hn),fs.m(Gt,Hn),a(n,hs,t),a(n,kn,t),a(n,gs,t),a(n,dn,t),a(n,Cs,t),a(n,mn,t),a(n,xs,t),a(n,fn,t),a(n,vs,t),a(n,g,t),i(g,hn),G(gn,g,null),i(g,M),i(g,En),bs.m(Ht,En),a(n,Ps,t),a(n,Cn,t),a(n,ws,t),a(n,xn,t),a(n,ys,t),a(n,vn,t),a(n,Ts,t),a(n,bn,t),a(n,Ms,t),a(n,C,t),i(C,Pn),G(wn,C,null),i(C,_),i(C,Dn),_s.m(Et,Dn),Ss=!0},p:Ot,i(n){Ss||(H(U.$$.fragment,n),H(Q.$$.fragment,n),H(W.$$.fragment,n),H(nn.$$.fragment,n),H(pn.$$.fragment,n),H(rn.$$.fragment,n),H(gn.$$.fragment,n),H(wn.$$.fragment,n),Ss=!0)},o(n){E(U.$$.fragment,n),E(Q.$$.fragment,n),E(W.$$.fragment,n),E(nn.$$.fragment,n),E(pn.$$.fragment,n),E(rn.$$.fragment,n),E(gn.$$.fragment,n),E(wn.$$.fragment,n),Ss=!1},d(n){n&&(s(x),s(qn),s(R),s(In),s(j),s(Bn),s(A),s(Vn),s(v),s(Qn),s($),s(Xn),s(q),s(Yn),s(I),s(Nn),s(B),s(Wn),s(k),s(Jn),s(X),s(Zn),s(Y),s(Kn),s(d),s(ss),s(F),s(ts),s(J),s(as),s(Z),s(es),s(m),s(os),s(sn),s(cs),s(tn),s(us),s(an),s(ls),s(f),s(rs),s(on),s(ks),s(cn),s(ds),s(un),s(ms),s(h),s(hs),s(kn),s(gs),s(dn),s(Cs),s(mn),s(xs),s(fn),s(vs),s(g),s(Ps),s(Cn),s(ws),s(xn),s(ys),s(vn),s(Ts),s(bn),s(Ms),s(C)),D(U),D(Q),D(W),D(nn),D(pn),D(rn),D(gn),D(wn)}}}class qt extends Rt{constructor(x){super(),jt(this,x,null,At,Dt,{})}}export{qt as component};
