import{s as Dt,n as Ot}from"../chunks/scheduler.B0TnBjPs.js";import{S as jt,i as Rt,e,s as u,c as S,H as yn,a as p,g as c,b as l,d as r,f as G,h as s,n as Mn,o,j as a,p as i,m as L,t as H,k as E,l as D}from"../chunks/index.BXVnRmkj.js";import{V as O}from"../chunks/ViewApp.CB1BM1bD.js";function At(Mt){let v,Gs="<code>PaperGroup</code>",In,j,Ls="On this page you find the documentation for the paper figure <code>PaperGroup</code>.",qn,R,Hs="Introduction",Bn,A,Es="<code>PaperGroup</code> is a paper figure that can contain other paper figures. These other paper figures will be affected by the position and the size of the <code>PaperGroup</code> figure, making it perfect for grouping relevant paper children together, and to scale them to different sizes.",Vn,b,U,Ds="Example",Tn,Os="This example uses one <code>PaperGroup</code> for each cross shown on the screen, and these two groups are positioned at different places, and one of them is also scaled to be twice as high.",$,Xn,z,js="<code>coordinateSystem()</code> - Setting the coordinate system",Yn,I,Rs="Use the configuration method <code>coordinateSystem()</code> to tell the <code>PaperGroup</code> figure how wide and tall its coordinate system should be (which its children then uses to position themselves in the <code>PaperGroup</code>). Pass it two numbers:",Fn,q,As="<li>How wide the coordinate system should be</li> <li>How tall the coordinate system should be</li>",Qn,B,Us="By default, the width and height will both be <code>10</code>.",Nn,k,V,$s="Example",X,x,zs="Open in Online Editor",_n,Wn,Tt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Jn,Y,Is="<code>showCoordinates()</code> - Showing the coordinate system",Kn,F,qs="Use the configuration method <code>showCoordinates()</code> to tell the <code>PaperGroup</code> figure to visualize its coordinate system. This can be very handy during development, but not something one typically use in a final application.",Zn,d,Q,Bs="Example",N,P,Vs="Open in Online Editor",Sn,ns,_t=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,ss,W,Xs="<code>children()</code> - Setting the children",ts,J,Ys="Use the configuration method <code>children()</code> to tell the <code>PaperGroup</code> figure which children figures it should contain. Pass the children as separate arguments. When the <code>PaperGroup</code> is shown on the screen, it will show all of its children.",as,K,Fs='By default, the <code>PaperGroup</code> will occupy the same size as the <a href="/documentation/paper/" title="Open the documentation for Paper.">Paper</a> component/<code>PaperGroup</code> it is used in.',es,m,Z,Qs="Example",nn,w,Ns="Open in Online Editor",Gn,ps,St=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,os,sn,Ws="<code>width()</code> - Setting the width",cs,tn,Js="Use the configuration method <code>width()</code> to tell the <code>PaperGroup</code> figure how wide it should be in the coordinate system of its parent. Pass it the width as a number.",us,an,Ks="By default, the <code>PaperGroup</code> will be as wide as its parent, and centered horizontally in it.",ls,f,en,Zs="Example",pn,y,nt="Open in Online Editor",Ln,is,Gt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,rs,on,st="<code>height()</code> - Setting the height",ks,cn,tt="Use the configuration method <code>height()</code> to tell the <code>PaperGroup</code> figure how high it should be in the coordinate system of its parent. Pass it the height as a number.",ds,un,at="By default, the <code>PaperGroup</code> will be as high as its parent, and centered vertically in it.",ms,h,ln,et="Example",rn,M,pt="Open in Online Editor",Hn,fs,Lt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,hs,kn,ot="<code>center()</code> - Setting the center",gs,dn,ct="Use the configuration method <code>center()</code> to tell the <code>PaperGroup</code> figure where it should be centered in its parent. Pass it two numbers:",Cs,mn,ut="<li>The X-coordinate of its center</li> <li>The Y-coordinate of its center</li>",vs,fn,lt="By default, the <code>PaperGroup</code> will be centered in its parent.",bs,g,hn,it="Example",gn,T,rt="Open in Online Editor",En,xs,Ht=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Ps,Cn,kt="<code>onClick()</code> - Handling clicks",ws,vn,dt="Call the configuration method <code>onClick()</code> to specify a method that should be called when the user clicks somewhere on the <code>PaperGroup</code> figure. Your method will be passed two numbers:",ys,bn,mt="<li>The X coordinate of the click</li> <li>The Y coordinate of the click</li>",Ms,xn,ft="The coordinates will be in the coordinate system within the <code>PaperGroup</code> figure.",Ts,C,Pn,ht="Example",wn,_,gt="Open in Online Editor",Dn,_s,Et=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	lastClickX <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	lastClickY <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Updater<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">updateText</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">childCreator</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>createText<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
		<span class="token keyword">return</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lastClickX: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>lastClickX<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, lastClickY: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>lastClickY<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		p<span class="token punctuation">.</span>lastClickX <span class="token operator">=</span> x
		p<span class="token punctuation">.</span>lastClickY <span class="token operator">=</span> y
		
		<span class="token function">runUpdater</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">updateText</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ss;return $=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),X=new O({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),N=new O({props:{project:{app:{code:`class MyApp extends App{
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
			Updater.name(\`updateText\`).childCreator(p.createText),
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
		return Text.text(\`lastClickX: \${p.lastClickX}, lastClickY: \${p.lastClickY}\`)
	}
	
	handleClick(x, y){
		
		p.lastClickX = x
		p.lastClickY = y
		
		runUpdater(\`updateText\`)
		
	}
	
}`,x:150,y:200}]}}}),{c(){v=e("h1"),v.innerHTML=Gs,In=u(),j=e("p"),j.innerHTML=Ls,qn=u(),R=e("h2"),R.textContent=Hs,Bn=u(),A=e("p"),A.innerHTML=Es,Vn=u(),b=e("div"),U=e("div"),U.textContent=Ds,Tn=e("p"),Tn.innerHTML=Os,S($.$$.fragment),Xn=u(),z=e("h2"),z.innerHTML=js,Yn=u(),I=e("p"),I.innerHTML=Rs,Fn=u(),q=e("ul"),q.innerHTML=As,Qn=u(),B=e("p"),B.innerHTML=Us,Nn=u(),k=e("div"),V=e("div"),V.textContent=$s,S(X.$$.fragment),x=e("a"),x.textContent=zs,_n=e("pre"),Wn=new yn(!1),Jn=u(),Y=e("h2"),Y.innerHTML=Is,Kn=u(),F=e("p"),F.innerHTML=qs,Zn=u(),d=e("div"),Q=e("div"),Q.textContent=Bs,S(N.$$.fragment),P=e("a"),P.textContent=Vs,Sn=e("pre"),ns=new yn(!1),ss=u(),W=e("h2"),W.innerHTML=Xs,ts=u(),J=e("p"),J.innerHTML=Ys,as=u(),K=e("p"),K.innerHTML=Fs,es=u(),m=e("div"),Z=e("div"),Z.textContent=Qs,S(nn.$$.fragment),w=e("a"),w.textContent=Ns,Gn=e("pre"),ps=new yn(!1),os=u(),sn=e("h2"),sn.innerHTML=Ws,cs=u(),tn=e("p"),tn.innerHTML=Js,us=u(),an=e("p"),an.innerHTML=Ks,ls=u(),f=e("div"),en=e("div"),en.textContent=Zs,S(pn.$$.fragment),y=e("a"),y.textContent=nt,Ln=e("pre"),is=new yn(!1),rs=u(),on=e("h2"),on.innerHTML=st,ks=u(),cn=e("p"),cn.innerHTML=tt,ds=u(),un=e("p"),un.innerHTML=at,ms=u(),h=e("div"),ln=e("div"),ln.textContent=et,S(rn.$$.fragment),M=e("a"),M.textContent=pt,Hn=e("pre"),fs=new yn(!1),hs=u(),kn=e("h2"),kn.innerHTML=ot,gs=u(),dn=e("p"),dn.innerHTML=ct,Cs=u(),mn=e("ul"),mn.innerHTML=ut,vs=u(),fn=e("p"),fn.innerHTML=lt,bs=u(),g=e("div"),hn=e("div"),hn.textContent=it,S(gn.$$.fragment),T=e("a"),T.textContent=rt,En=e("pre"),xs=new yn(!1),Ps=u(),Cn=e("h2"),Cn.innerHTML=kt,ws=u(),vn=e("p"),vn.innerHTML=dt,ys=u(),bn=e("ul"),bn.innerHTML=mt,Ms=u(),xn=e("p"),xn.innerHTML=ft,Ts=u(),C=e("div"),Pn=e("div"),Pn.textContent=ht,S(wn.$$.fragment),_=e("a"),_.textContent=gt,Dn=e("pre"),_s=new yn(!1),this.h()},l(n){v=p(n,"H1",{"data-svelte-h":!0}),c(v)!=="svelte-1bzy18c"&&(v.innerHTML=Gs),In=l(n),j=p(n,"P",{"data-svelte-h":!0}),c(j)!=="svelte-82w59b"&&(j.innerHTML=Ls),qn=l(n),R=p(n,"H2",{"data-svelte-h":!0}),c(R)!=="svelte-1ukekoe"&&(R.textContent=Hs),Bn=l(n),A=p(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-19j0qb9"&&(A.innerHTML=Es),Vn=l(n),b=p(n,"DIV",{class:!0});var t=r(b);U=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(U)!=="svelte-1llzxwj"&&(U.textContent=Ds),Tn=p(t,"P",{"data-svelte-h":!0}),c(Tn)!=="svelte-1g6iwne"&&(Tn.innerHTML=Os),G($.$$.fragment,t),t.forEach(s),Xn=l(n),z=p(n,"H2",{"data-svelte-h":!0}),c(z)!=="svelte-j6wl3k"&&(z.innerHTML=js),Yn=l(n),I=p(n,"P",{"data-svelte-h":!0}),c(I)!=="svelte-17ccyyl"&&(I.innerHTML=Rs),Fn=l(n),q=p(n,"UL",{"data-svelte-h":!0}),c(q)!=="svelte-191e93g"&&(q.innerHTML=As),Qn=l(n),B=p(n,"P",{"data-svelte-h":!0}),c(B)!=="svelte-114rd7f"&&(B.innerHTML=Us),Nn=l(n),k=p(n,"DIV",{class:!0});var On=r(k);V=p(On,"DIV",{class:!0,"data-svelte-h":!0}),c(V)!=="svelte-1llzxwj"&&(V.textContent=$s),G(X.$$.fragment,On),x=p(On,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-1hr6lpd"&&(x.textContent=zs),_n=p(On,"PRE",{class:!0});var Ct=r(_n);Wn=Mn(Ct,!1),Ct.forEach(s),On.forEach(s),Jn=l(n),Y=p(n,"H2",{"data-svelte-h":!0}),c(Y)!=="svelte-cthg8c"&&(Y.innerHTML=Is),Kn=l(n),F=p(n,"P",{"data-svelte-h":!0}),c(F)!=="svelte-mbaoo1"&&(F.innerHTML=qs),Zn=l(n),d=p(n,"DIV",{class:!0});var jn=r(d);Q=p(jn,"DIV",{class:!0,"data-svelte-h":!0}),c(Q)!=="svelte-1llzxwj"&&(Q.textContent=Bs),G(N.$$.fragment,jn),P=p(jn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(P)!=="svelte-1hr6lpd"&&(P.textContent=Vs),Sn=p(jn,"PRE",{class:!0});var vt=r(Sn);ns=Mn(vt,!1),vt.forEach(s),jn.forEach(s),ss=l(n),W=p(n,"H2",{"data-svelte-h":!0}),c(W)!=="svelte-15e1mwm"&&(W.innerHTML=Xs),ts=l(n),J=p(n,"P",{"data-svelte-h":!0}),c(J)!=="svelte-1pcf79r"&&(J.innerHTML=Ys),as=l(n),K=p(n,"P",{"data-svelte-h":!0}),c(K)!=="svelte-1afbmlv"&&(K.innerHTML=Fs),es=l(n),m=p(n,"DIV",{class:!0});var Rn=r(m);Z=p(Rn,"DIV",{class:!0,"data-svelte-h":!0}),c(Z)!=="svelte-1llzxwj"&&(Z.textContent=Qs),G(nn.$$.fragment,Rn),w=p(Rn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-1ihvk3u"&&(w.textContent=Ns),Gn=p(Rn,"PRE",{class:!0});var bt=r(Gn);ps=Mn(bt,!1),bt.forEach(s),Rn.forEach(s),os=l(n),sn=p(n,"H2",{"data-svelte-h":!0}),c(sn)!=="svelte-1mhq8vo"&&(sn.innerHTML=Ws),cs=l(n),tn=p(n,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-kc1ti1"&&(tn.innerHTML=Js),us=l(n),an=p(n,"P",{"data-svelte-h":!0}),c(an)!=="svelte-1e17sl1"&&(an.innerHTML=Ks),ls=l(n),f=p(n,"DIV",{class:!0});var An=r(f);en=p(An,"DIV",{class:!0,"data-svelte-h":!0}),c(en)!=="svelte-1llzxwj"&&(en.textContent=Zs),G(pn.$$.fragment,An),y=p(An,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-pzzl48"&&(y.textContent=nt),Ln=p(An,"PRE",{class:!0});var xt=r(Ln);is=Mn(xt,!1),xt.forEach(s),An.forEach(s),rs=l(n),on=p(n,"H2",{"data-svelte-h":!0}),c(on)!=="svelte-1h37gg6"&&(on.innerHTML=st),ks=l(n),cn=p(n,"P",{"data-svelte-h":!0}),c(cn)!=="svelte-1uxdpbg"&&(cn.innerHTML=tt),ds=l(n),un=p(n,"P",{"data-svelte-h":!0}),c(un)!=="svelte-1u5v1vc"&&(un.innerHTML=at),ms=l(n),h=p(n,"DIV",{class:!0});var Un=r(h);ln=p(Un,"DIV",{class:!0,"data-svelte-h":!0}),c(ln)!=="svelte-1llzxwj"&&(ln.textContent=et),G(rn.$$.fragment,Un),M=p(Un,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(M)!=="svelte-7l4y1q"&&(M.textContent=pt),Hn=p(Un,"PRE",{class:!0});var Pt=r(Hn);fs=Mn(Pt,!1),Pt.forEach(s),Un.forEach(s),hs=l(n),kn=p(n,"H2",{"data-svelte-h":!0}),c(kn)!=="svelte-p8x8z6"&&(kn.innerHTML=ot),gs=l(n),dn=p(n,"P",{"data-svelte-h":!0}),c(dn)!=="svelte-1up3juy"&&(dn.innerHTML=ct),Cs=l(n),mn=p(n,"UL",{"data-svelte-h":!0}),c(mn)!=="svelte-ledvhb"&&(mn.innerHTML=ut),vs=l(n),fn=p(n,"P",{"data-svelte-h":!0}),c(fn)!=="svelte-7yi5xj"&&(fn.innerHTML=lt),bs=l(n),g=p(n,"DIV",{class:!0});var $n=r(g);hn=p($n,"DIV",{class:!0,"data-svelte-h":!0}),c(hn)!=="svelte-1llzxwj"&&(hn.textContent=it),G(gn.$$.fragment,$n),T=p($n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(T)!=="svelte-1rek64x"&&(T.textContent=rt),En=p($n,"PRE",{class:!0});var wt=r(En);xs=Mn(wt,!1),wt.forEach(s),$n.forEach(s),Ps=l(n),Cn=p(n,"H2",{"data-svelte-h":!0}),c(Cn)!=="svelte-iimgs0"&&(Cn.innerHTML=kt),ws=l(n),vn=p(n,"P",{"data-svelte-h":!0}),c(vn)!=="svelte-18zcuzs"&&(vn.innerHTML=dt),ys=l(n),bn=p(n,"UL",{"data-svelte-h":!0}),c(bn)!=="svelte-ccoged"&&(bn.innerHTML=mt),Ms=l(n),xn=p(n,"P",{"data-svelte-h":!0}),c(xn)!=="svelte-bk27ck"&&(xn.innerHTML=ft),Ts=l(n),C=p(n,"DIV",{class:!0});var zn=r(C);Pn=p(zn,"DIV",{class:!0,"data-svelte-h":!0}),c(Pn)!=="svelte-1llzxwj"&&(Pn.textContent=ht),G(wn.$$.fragment,zn),_=p(zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(_)!=="svelte-1kt52mr"&&(_.textContent=gt),Dn=p(zn,"PRE",{class:!0});var yt=r(Dn);_s=Mn(yt,!1),yt.forEach(s),zn.forEach(s),this.h()},h(){o(U,"class","remark-container__title"),o(b,"class","remark-container tip"),o(V,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNplUMFOwzAM/ZXIp1SKqsHUS2+ww8QBCcGRIC0kpqtWkihJRasq/066stDBzc/Pfu/ZEwhroZ5AGoVQg+yE9+RxvLOW4BBQK09SPXHNg3QoAr4E4cKTaJAW5y4PDkPvNMnE3I1cR4gMbMIe6tcJWgX1DYMP0yl0Dwu4Ms372XgGi0d23/ftX997M5TCW5ThWYTW0C0j26KUx7ZTdBnkSdaiK9+FPDXO9FrtTGccPRgndIOHNG2MU62ezxt9wM+1iEOddXiw5RLkrLhPYpYW7EJfquLnBevk64XrA36Z/zkqRqqi9EfztcuUp2v9CAyG9M1qw2CE+naziW/xG++vqeA="),o(x,"title","Open in our Online Editor"),Wn.a=null,o(_n,"class","language-js"),o(k,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNplUMFOwzAM/ZXIp1SKqsHUS2+ww8QBCcGRIC0kpqtWkihJRasq/066stDBzc/Pfu/ZEwhroZ5AGoVQg+yE9+RxvLOW4BBQK09SPXHNg3QoAr4E4cKTaJAW5y4PDkPvNMnE3I1cR4gMbMIe6tcJWgX1DYMP0yl0Dwu4Ms372XgGi0d23/ftX997M5TCW5ThWYTW0C0j26KUx7ZTdBnkSdaiK9+FPDXO9FrtTGccPRgndIOHNG2MU62ezxt9wM+1iEOddXiw5RLkrLhPYpYW7EJfquLnBevk64XrA36Z/zkqRqqi9EfztcuUp2v9CAyG9M1qw2CE+naziW/xG++vqeA="),o(P,"title","Open in our Online Editor"),ns.a=null,o(Sn,"class","language-js"),o(d,"class","remark-container tip"),o(Z,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqtUl1LwzAU/SvhPqUQQt3oS990D0NQEH20QmNy3cJqEpIMN0r/u2nrwtx89CXcz3POPaQH4RzUPUirEGqQnQiBPB5vnSN4iGhUICnuG9NE6VFEfInCxyexQVpM1SZ6jHtvSG6M1aExAwwMXMoD1K89aAX1DYMP2yn093PyizTvZ+IxmTky+3qvL3nv7IGL4FDGZxG1pUtGlgWXW90pOg82Cdah5+9C7jbe7o1a2c562lovzAbbNG2tV9qM5x1DxM9zEI8m4zTR8VnIytsQaOtRtQU7tU9R8WPBufJ5QY7vxH5xxaRwncS5azEVI1XBw9Z+rXIr0D/kTSAP2uDVqWe8PG613BlMakq+GIFH42nJSFnw5PtMx/4Js8qY5V/uDMDgkP5CVTI4Qr0oy+Ft+AZ/oetE"),o(w,"title","Open in our Online Editor"),ps.a=null,o(Gn,"class","language-js"),o(m,"class","remark-container tip"),o(en,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqtUj1rwzAQ/SvmJhmEcBK8eGszhEILpR3rQlTpGou4kpAUkmD83yvbjUiTjFnEfb737k4dcGuh6kAYiVCBaLn32cvxwdoMDwG19Fm0u1rXQTjkAd8Dd+GVb5DkY7QODsPO6Swlhmhf6x56Cjb6HqqPDpSEakbh27QS3dPk/CNN/Yl4cCaOxL7aqUveR3Ng3FsU4Y0HZciCZouciUa1kkyFdYS16NgXF9uNMzstl6Y1jqyN43qD61htjJNKD+MdfcCfcxCHOuHUwbJJyNIZ78naoYzteyVDQ2Y5PdWdrPxvF+cjTJ1ieEcZF+OMUldRpb1WVdKszJlvzH6ZUp7c0DmCPCuNVzOf8bLQKLHVGNUUbD4ADxcgBc2KnMUDTHT0TphlwixubacHCof4KcqCwhGqeVH0n/0vYKXuFA=="),o(y,"title","Open in our Online Editor"),is.a=null,o(Ln,"class","language-js"),o(f,"class","remark-container tip"),o(ln,"class","remark-container__title"),o(M,"target","_blank"),o(M,"href","/editor#eNqtUj1rwzAQ/SvmJhmEcBK8eGszhEILpR3rQlTpaou4kpAUmmD83yvbjUiTjF3Efb737k49cGuh6kEYiVCB6Lj32dPxztoMDwG19Fm0+1rXQTjkAV8Dd+GZN0jyKVoHh2HvdJYSY3So9QADBRt9D9VbD0pCtaDwaTqJ7mF2/pCm/kQ8OjNHYt/s1SXvvTkw7i2K8MKDMmRFs1XORKs6SebCOsJadOyDi13jzF7LtemMI1vjuG5wG6uNcVLpcbyjD/h1DuJQJ5w6WDYLWTvjPdk6lLG9RdW0gSxyeio8WfnvMs5nmFvF+E46LuaZtG6iTHstq6RZmTPfmu91SnlyQ+gE8qg0Xg19xstCq8ROY1RTsOUIPJ6AFDQrchYvMNPRf8IsE2ZxazsDUDjEX1EWFI5QLYtieB9+AE4o7m0="),o(M,"title","Open in our Online Editor"),fs.a=null,o(Hn,"class","language-js"),o(h,"class","remark-container tip"),o(hn,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNqtkkFrwyAYhv9K8GRAxKbkktvWQxlsMLbjMqjVb4k0U1FDW0L++0zSha7dxg67hO9T87z6aIe4tajokDASUIFEw71PHo431iZwCKClT2LdlboMwgEP8By4C4+8ApyOo2VwEFqnk3liGO1L3aOeIBt7j4qXDimJigVBb6aR4O6m5kvo/P8cPDRTxpy+btVl7q05UO4tiPDEgzJ4SZJlSkWtGomnhWXEWnB0y8WucqbVcmUa4/DGOK4r2MTVxjip9HC8ow/wfoL42uxX85THJ6wDPZPLYOm0tZUz3uONAxmBeyVDjRcprUFVdRgqATqAwxnNSbKgeUp+RGybFn5lsIGRnTM+q/Qk/9zZRBXDdzz3hb/RzTpqsdcaYkz+Jw0j5F5puJJ8lktDrcROQ9wNo9kAHq4cM5KwlMYbn+LIPzHzmcm+s9Mjgg7xFeaMoCMqMsb61/4DVMQS9A=="),o(T,"title","Open in our Online Editor"),xs.a=null,o(En,"class","language-js"),o(g,"class","remark-container tip"),o(Pn,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNp9U11rrDAU/Csh9EEhFbelL0Ifbveh9KFQ+gEt14K5yekqtUlIIquI//0muuvXLkUU55zJmZEztpgqhZMWM8kBJ5iV1Bj02PxRCkFtQXCD3HubitQyDdTCi6XaPtEdBGFfTa0GW2mBxoavdqnocEewctjg5G+LC46TDcFfsuSgHwawEB3Pj8IeDBrudhy7LQv2/Y5u0eVmUfoYS5PP+6pYO3yWexOxvCi5BhEMrdS+Ke7oOhL0B4Ks6tGrs5CFA3frx0kdqGgY7HshOZ5+UZTBiO5kHVGjgNlnagsZbGKCNvFh0KiYus9UoCeY2ugfZd87LSvBt7J0apnUVOwgCxcsJqXmhfBraIyFn6PAgmRyud+ORBOsRqy/f+bo3hlQy/o5axr40td5b9cEXZ/SfnXXM/YFt3lwddrIodjl9lxHij4Hbkc5FbyEHk1L8teEzi8vPMR2niG/6nWIfC2yvpFNkUzQRauiCXcETeFcNT+6bKk1sxzUBDVHweE5H+tiXp9Uffib+QldiUOml3GeOAfpDhNcux/xJia4wclVHHef3X/msYCV"),o(_,"title","Open in our Online Editor"),_s.a=null,o(Dn,"class","language-js"),o(C,"class","remark-container tip")},m(n,t){a(n,v,t),a(n,In,t),a(n,j,t),a(n,qn,t),a(n,R,t),a(n,Bn,t),a(n,A,t),a(n,Vn,t),a(n,b,t),i(b,U),i(b,Tn),L($,b,null),a(n,Xn,t),a(n,z,t),a(n,Yn,t),a(n,I,t),a(n,Fn,t),a(n,q,t),a(n,Qn,t),a(n,B,t),a(n,Nn,t),a(n,k,t),i(k,V),L(X,k,null),i(k,x),i(k,_n),Wn.m(Tt,_n),a(n,Jn,t),a(n,Y,t),a(n,Kn,t),a(n,F,t),a(n,Zn,t),a(n,d,t),i(d,Q),L(N,d,null),i(d,P),i(d,Sn),ns.m(_t,Sn),a(n,ss,t),a(n,W,t),a(n,ts,t),a(n,J,t),a(n,as,t),a(n,K,t),a(n,es,t),a(n,m,t),i(m,Z),L(nn,m,null),i(m,w),i(m,Gn),ps.m(St,Gn),a(n,os,t),a(n,sn,t),a(n,cs,t),a(n,tn,t),a(n,us,t),a(n,an,t),a(n,ls,t),a(n,f,t),i(f,en),L(pn,f,null),i(f,y),i(f,Ln),is.m(Gt,Ln),a(n,rs,t),a(n,on,t),a(n,ks,t),a(n,cn,t),a(n,ds,t),a(n,un,t),a(n,ms,t),a(n,h,t),i(h,ln),L(rn,h,null),i(h,M),i(h,Hn),fs.m(Lt,Hn),a(n,hs,t),a(n,kn,t),a(n,gs,t),a(n,dn,t),a(n,Cs,t),a(n,mn,t),a(n,vs,t),a(n,fn,t),a(n,bs,t),a(n,g,t),i(g,hn),L(gn,g,null),i(g,T),i(g,En),xs.m(Ht,En),a(n,Ps,t),a(n,Cn,t),a(n,ws,t),a(n,vn,t),a(n,ys,t),a(n,bn,t),a(n,Ms,t),a(n,xn,t),a(n,Ts,t),a(n,C,t),i(C,Pn),L(wn,C,null),i(C,_),i(C,Dn),_s.m(Et,Dn),Ss=!0},p:Ot,i(n){Ss||(H($.$$.fragment,n),H(X.$$.fragment,n),H(N.$$.fragment,n),H(nn.$$.fragment,n),H(pn.$$.fragment,n),H(rn.$$.fragment,n),H(gn.$$.fragment,n),H(wn.$$.fragment,n),Ss=!0)},o(n){E($.$$.fragment,n),E(X.$$.fragment,n),E(N.$$.fragment,n),E(nn.$$.fragment,n),E(pn.$$.fragment,n),E(rn.$$.fragment,n),E(gn.$$.fragment,n),E(wn.$$.fragment,n),Ss=!1},d(n){n&&(s(v),s(In),s(j),s(qn),s(R),s(Bn),s(A),s(Vn),s(b),s(Xn),s(z),s(Yn),s(I),s(Fn),s(q),s(Qn),s(B),s(Nn),s(k),s(Jn),s(Y),s(Kn),s(F),s(Zn),s(d),s(ss),s(W),s(ts),s(J),s(as),s(K),s(es),s(m),s(os),s(sn),s(cs),s(tn),s(us),s(an),s(ls),s(f),s(rs),s(on),s(ks),s(cn),s(ds),s(un),s(ms),s(h),s(hs),s(kn),s(gs),s(dn),s(Cs),s(mn),s(vs),s(fn),s(bs),s(g),s(Ps),s(Cn),s(ws),s(vn),s(ys),s(bn),s(Ms),s(xn),s(Ts),s(C)),D($),D(X),D(N),D(nn),D(pn),D(rn),D(gn),D(wn)}}}class It extends jt{constructor(v){super(),Rt(this,v,null,At,Dt,{})}}export{It as component};
