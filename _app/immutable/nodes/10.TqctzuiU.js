import{s as Qa,n as Ka}from"../chunks/scheduler.UQwd20JU.js";import{S as Wa,i as $a,e,s as i,c as d,H as v,a,g as l,b as u,d as r,f as k,h as n,n as w,o,j as p,p as c,m as g,t as h,k as f,l as m}from"../chunks/index.i__Fl8cY.js";import{V as x}from"../chunks/ViewApp.m6vzcyjb.js";function qa(ja){let S,ye="<code>Box</code>",rn,N,Ae="On this page you find the documentation for the GUI Component <code>Box</code>.",dn,X,He="Introduction",kn,Q,_e="The <code>Box</code> component is a layout that can have an optional child with a specific width and height specified by you in millimeters. So if you ever want to give a GUI component a specific width and height, just use it as a child in a <code>Box</code> component.",gn,K,Le="The <code>Box</code> component will by default be sized per the GUI layout you use it in or cover the entire screen if it&#39;s the root GUI component. But its child component can be smaller than that.",hn,C,W,Ee="Example",$t,Ie="Example showing what the <code>Box</code> component looks like when shown on the screen.",un,$,fn,q,Re="<code>child()</code> - Setting the child",mn,Z,je="Use the configuration method <code>child()</code> to tell the <code>Box</code> component which (optional) child it should have.",xn,J,Ge='If the <code>Box</code> component has been given a size (for example by being the root layout, or by being used as a child in <a href="/documentation/rows/" title="Open the documentation for Rows.">Rows</a> or <a href="/documentation/columns/" title="Open the documentation for Columns.">Columns</a> and been given a <code>size()</code>, etc.), then it&#39;s child will by default get the same size as the <code>Box</code> component itself (except its padding).',vn,j,tt,Me="Example",nt,et,b,De="Open in Online Editor",qt,wn,Ga=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Sn,G,at,Oe="Example",st,pt,P,Fe="Open in Online Editor",Zt,Cn,Ma=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,bn,ot,ze="If the <code>Box</code> component has not been given a size, then it will by default be big enough to contain it&#39;s child component.",Pn,M,lt,Ue="Example",ct,it,T,Ve="Open in Online Editor",Jt,Tn,Da=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Bn,ut,Ye="<code>width()</code> - Setting the width",yn,rt,Ne="Use the configuration method <code>width()</code> to tell the <code>Box</code> component how many millimeters wide its child should be. Pass it the width as a number.",An,D,dt,Xe="Example",kt,gt,B,Qe="Open in Online Editor",tn,Hn,Oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_n,ht,Ke="<code>left()</code> - Left aligning the box",Ln,ft,We="If you use the configuration method <code>width()</code>, the child will by default be centered at the space given to it by its parent layout. Use the configuration method <code>left()</code> to tell the <code>Box</code> component that the child should be to the left instead.",En,O,mt,$e="Example",xt,vt,y,qe="Open in Online Editor",nn,In,Fa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Rn,wt,Ze="<code>right()</code> - Right aligning the box",jn,St,Je="If you use the configuration method <code>width()</code>, the child will by default be centered at the space given to it by its parent layout. Use the configuration method <code>right()</code> to tell the <code>Box</code> component that the child should be to the right instead.",Gn,F,Ct,ta="Example",bt,Pt,A,na="Open in Online Editor",en,Mn,za=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">right</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Dn,Tt,ea="<code>height()</code> - Setting the height",On,Bt,aa="Use the configuration method <code>height()</code> to tell the <code>Box</code> component how many millimeters tall its child should be. Pass it the height as a number.",Fn,z,yt,sa="Example",At,Ht,H,pa="Open in Online Editor",an,zn,Ua=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Un,_t,oa="<code>top()</code> - Top aligning the box",Vn,Lt,la="If you use the configuration method <code>height()</code>, the child will by default be centered at the space given to it by its parent layout. Use the configuration method <code>top()</code> to tell the <code>Box</code> component that the child should be to the top instead.",Yn,U,Et,ca="Example",It,Rt,_,ia="Open in Online Editor",sn,Nn,Va=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Xn,jt,ua="<code>bottom()</code> - Bottom aligning the box",Qn,Gt,ra="If you use the configuration method <code>height()</code>, the child will by default be centered at the space given to it by its parent layout. Use the configuration method <code>bottom()</code> to tell the <code>Box</code> component that the child should be to the bottom instead.",Kn,V,Mt,da="Example",Dt,Ot,L,ka="Open in Online Editor",pn,Wn,Ya=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The child is lime!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$n,Ft,ga="<code>aspectRatio()</code> - Setting the relation between width and height",qn,zt,ha="Instead of giving the <code>Box</code> component an explicit width and height, you can use the width or height given to it by its parent layout or by calling the configuration methods <code>width()</code> or <code>height()</code> to automatically compute the other one based on the <code>Box</code> component&#39;s given aspect ratio, which is set with the configuration method <code>aspectRatio()</code>. Pass it the aspect ratio as two numbers:",Zn,Ut,fa="<li>First the width</li> <li>Then the height</li>",Jn,Y,Vt,ma="Example",Yt,Nt,E,xa="Open in Online Editor",on,te,Na=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Width is 30mm, the aspect ratio is 1:2 (i.e. the height should be twice as big as the width), so the height is computed as 60mm.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ne,Xt,va="If you use <code>aspectRatio()</code> without using <code>width()</code> and <code>height()</code>, then the <code>Box</code> component will get the biggest size possible to honor the given aspect ratio.",ee,I,Qt,wa="Example",ln,Sa="Note: Resizing the screen in this example won't work correctly, since the aspect ratio is only computed correctly when the app starts (when the app runs for real on a device, the screen size won't change, so this won't be a problem in production).",Kt,Wt,R,Ca="Open in Online Editor",cn,ae,Xa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The width is always exactly 2 times bigger than the height, but never bigger than the screen!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,se;return $=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).width(25).height(25).child(\n			Text.backgroundColor(`lime`).text(`Look, I'm so small!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),et=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(5).child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),pt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Rows.children(\n			Space.backgroundColor(`pink`),\n			Box.size(1).padding(5).backgroundColor(`red`).child(\n				Text.backgroundColor(`lime`).text(`The child is lime!`)\n			),\n			Space.backgroundColor(`gold`),\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),it=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Rows.children(\n			Space.backgroundColor(`pink`),\n			Box.padding(5).backgroundColor(`red`).child(\n				Text.backgroundColor(`lime`).text(`The child is lime!`)\n			),\n			Space.backgroundColor(`gold`),\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),gt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).width(20).child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),vt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).width(20).left().child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Pt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).width(20).right().child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Ht=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).height(20).child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Rt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).height(20).top().child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Ot=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).height(20).bottom().child(\n			Text.backgroundColor(`lime`).text(`The child is lime!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Nt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).width(30).aspectRatio(1, 2).child(\n			Text.backgroundColor(`lime`).text(`Width is 30mm, the aspect ratio is 1:2 (i.e. the height should be twice as big as the width), so the height is computed as 60mm.`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),Wt=new x({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Box.backgroundColor(`red`).padding(1).aspectRatio(2, 1).child(\n			Text.backgroundColor(`lime`).text(`The width is always exactly 2 times bigger than the height, but never bigger than the screen!`)\n		)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){S=e("h1"),S.innerHTML=ye,rn=i(),N=e("p"),N.innerHTML=Ae,dn=i(),X=e("h2"),X.textContent=He,kn=i(),Q=e("p"),Q.innerHTML=_e,gn=i(),K=e("p"),K.innerHTML=Le,hn=i(),C=e("div"),W=e("div"),W.textContent=Ee,$t=e("p"),$t.innerHTML=Ie,un=e("div"),d($.$$.fragment),fn=i(),q=e("h2"),q.innerHTML=Re,mn=i(),Z=e("p"),Z.innerHTML=je,xn=i(),J=e("p"),J.innerHTML=Ge,vn=i(),j=e("div"),tt=e("div"),tt.textContent=Me,nt=e("div"),d(et.$$.fragment),b=e("a"),b.textContent=De,qt=e("pre"),wn=new v(!1),Sn=i(),G=e("div"),at=e("div"),at.textContent=Oe,st=e("div"),d(pt.$$.fragment),P=e("a"),P.textContent=Fe,Zt=e("pre"),Cn=new v(!1),bn=i(),ot=e("p"),ot.innerHTML=ze,Pn=i(),M=e("div"),lt=e("div"),lt.textContent=Ue,ct=e("div"),d(it.$$.fragment),T=e("a"),T.textContent=Ve,Jt=e("pre"),Tn=new v(!1),Bn=i(),ut=e("h2"),ut.innerHTML=Ye,yn=i(),rt=e("p"),rt.innerHTML=Ne,An=i(),D=e("div"),dt=e("div"),dt.textContent=Xe,kt=e("div"),d(gt.$$.fragment),B=e("a"),B.textContent=Qe,tn=e("pre"),Hn=new v(!1),_n=i(),ht=e("h2"),ht.innerHTML=Ke,Ln=i(),ft=e("p"),ft.innerHTML=We,En=i(),O=e("div"),mt=e("div"),mt.textContent=$e,xt=e("div"),d(vt.$$.fragment),y=e("a"),y.textContent=qe,nn=e("pre"),In=new v(!1),Rn=i(),wt=e("h2"),wt.innerHTML=Ze,jn=i(),St=e("p"),St.innerHTML=Je,Gn=i(),F=e("div"),Ct=e("div"),Ct.textContent=ta,bt=e("div"),d(Pt.$$.fragment),A=e("a"),A.textContent=na,en=e("pre"),Mn=new v(!1),Dn=i(),Tt=e("h2"),Tt.innerHTML=ea,On=i(),Bt=e("p"),Bt.innerHTML=aa,Fn=i(),z=e("div"),yt=e("div"),yt.textContent=sa,At=e("div"),d(Ht.$$.fragment),H=e("a"),H.textContent=pa,an=e("pre"),zn=new v(!1),Un=i(),_t=e("h2"),_t.innerHTML=oa,Vn=i(),Lt=e("p"),Lt.innerHTML=la,Yn=i(),U=e("div"),Et=e("div"),Et.textContent=ca,It=e("div"),d(Rt.$$.fragment),_=e("a"),_.textContent=ia,sn=e("pre"),Nn=new v(!1),Xn=i(),jt=e("h2"),jt.innerHTML=ua,Qn=i(),Gt=e("p"),Gt.innerHTML=ra,Kn=i(),V=e("div"),Mt=e("div"),Mt.textContent=da,Dt=e("div"),d(Ot.$$.fragment),L=e("a"),L.textContent=ka,pn=e("pre"),Wn=new v(!1),$n=i(),Ft=e("h2"),Ft.innerHTML=ga,qn=i(),zt=e("p"),zt.innerHTML=ha,Zn=i(),Ut=e("ul"),Ut.innerHTML=fa,Jn=i(),Y=e("div"),Vt=e("div"),Vt.textContent=ma,Yt=e("div"),d(Nt.$$.fragment),E=e("a"),E.textContent=xa,on=e("pre"),te=new v(!1),ne=i(),Xt=e("p"),Xt.innerHTML=va,ee=i(),I=e("div"),Qt=e("div"),Qt.textContent=wa,ln=e("p"),ln.textContent=Sa,Kt=e("div"),d(Wt.$$.fragment),R=e("a"),R.textContent=Ca,cn=e("pre"),ae=new v(!1),this.h()},l(t){S=a(t,"H1",{"data-svelte-h":!0}),l(S)!=="svelte-1bbqn5g"&&(S.innerHTML=ye),rn=u(t),N=a(t,"P",{"data-svelte-h":!0}),l(N)!=="svelte-d8pg9f"&&(N.innerHTML=Ae),dn=u(t),X=a(t,"H2",{"data-svelte-h":!0}),l(X)!=="svelte-1ukekoe"&&(X.textContent=He),kn=u(t),Q=a(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-113ifui"&&(Q.innerHTML=_e),gn=u(t),K=a(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-8npauz"&&(K.innerHTML=Le),hn=u(t),C=a(t,"DIV",{class:!0});var s=r(C);W=a(s,"DIV",{class:!0,"data-svelte-h":!0}),l(W)!=="svelte-1llzxwj"&&(W.textContent=Ee),$t=a(s,"P",{"data-svelte-h":!0}),l($t)!=="svelte-vdm8at"&&($t.innerHTML=Ie),un=a(s,"DIV",{});var ba=r(un);k($.$$.fragment,ba),ba.forEach(n),s.forEach(n),fn=u(t),q=a(t,"H2",{"data-svelte-h":!0}),l(q)!=="svelte-fclds8"&&(q.innerHTML=Re),mn=u(t),Z=a(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-1e82etl"&&(Z.innerHTML=je),xn=u(t),J=a(t,"P",{"data-svelte-h":!0}),l(J)!=="svelte-c9gz7a"&&(J.innerHTML=Ge),vn=u(t),j=a(t,"DIV",{class:!0});var me=r(j);tt=a(me,"DIV",{class:!0,"data-svelte-h":!0}),l(tt)!=="svelte-1llzxwj"&&(tt.textContent=Me),nt=a(me,"DIV",{});var pe=r(nt);k(et.$$.fragment,pe),b=a(pe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(b)!=="svelte-ckxjy6"&&(b.textContent=De),qt=a(pe,"PRE",{class:!0});var Pa=r(qt);wn=w(Pa,!1),Pa.forEach(n),pe.forEach(n),me.forEach(n),Sn=u(t),G=a(t,"DIV",{class:!0});var xe=r(G);at=a(xe,"DIV",{class:!0,"data-svelte-h":!0}),l(at)!=="svelte-1llzxwj"&&(at.textContent=Oe),st=a(xe,"DIV",{});var oe=r(st);k(pt.$$.fragment,oe),P=a(oe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-3kj1it"&&(P.textContent=Fe),Zt=a(oe,"PRE",{class:!0});var Ta=r(Zt);Cn=w(Ta,!1),Ta.forEach(n),oe.forEach(n),xe.forEach(n),bn=u(t),ot=a(t,"P",{"data-svelte-h":!0}),l(ot)!=="svelte-s8fr3p"&&(ot.innerHTML=ze),Pn=u(t),M=a(t,"DIV",{class:!0});var ve=r(M);lt=a(ve,"DIV",{class:!0,"data-svelte-h":!0}),l(lt)!=="svelte-1llzxwj"&&(lt.textContent=Ue),ct=a(ve,"DIV",{});var le=r(ct);k(it.$$.fragment,le),T=a(le,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(T)!=="svelte-9tag9a"&&(T.textContent=Ve),Jt=a(le,"PRE",{class:!0});var Ba=r(Jt);Tn=w(Ba,!1),Ba.forEach(n),le.forEach(n),ve.forEach(n),Bn=u(t),ut=a(t,"H2",{"data-svelte-h":!0}),l(ut)!=="svelte-1mhq8vo"&&(ut.innerHTML=Ye),yn=u(t),rt=a(t,"P",{"data-svelte-h":!0}),l(rt)!=="svelte-jqo55v"&&(rt.innerHTML=Ne),An=u(t),D=a(t,"DIV",{class:!0});var we=r(D);dt=a(we,"DIV",{class:!0,"data-svelte-h":!0}),l(dt)!=="svelte-1llzxwj"&&(dt.textContent=Xe),kt=a(we,"DIV",{});var ce=r(kt);k(gt.$$.fragment,ce),B=a(ce,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(B)!=="svelte-t1zkfh"&&(B.textContent=Qe),tn=a(ce,"PRE",{class:!0});var ya=r(tn);Hn=w(ya,!1),ya.forEach(n),ce.forEach(n),we.forEach(n),_n=u(t),ht=a(t,"H2",{"data-svelte-h":!0}),l(ht)!=="svelte-14rdiwc"&&(ht.innerHTML=Ke),Ln=u(t),ft=a(t,"P",{"data-svelte-h":!0}),l(ft)!=="svelte-17cn6g4"&&(ft.innerHTML=We),En=u(t),O=a(t,"DIV",{class:!0});var Se=r(O);mt=a(Se,"DIV",{class:!0,"data-svelte-h":!0}),l(mt)!=="svelte-1llzxwj"&&(mt.textContent=$e),xt=a(Se,"DIV",{});var ie=r(xt);k(vt.$$.fragment,ie),y=a(ie,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(y)!=="svelte-1r0ctbi"&&(y.textContent=qe),nn=a(ie,"PRE",{class:!0});var Aa=r(nn);In=w(Aa,!1),Aa.forEach(n),ie.forEach(n),Se.forEach(n),Rn=u(t),wt=a(t,"H2",{"data-svelte-h":!0}),l(wt)!=="svelte-hxvqwg"&&(wt.innerHTML=Ze),jn=u(t),St=a(t,"P",{"data-svelte-h":!0}),l(St)!=="svelte-c8hs4g"&&(St.innerHTML=Je),Gn=u(t),F=a(t,"DIV",{class:!0});var Ce=r(F);Ct=a(Ce,"DIV",{class:!0,"data-svelte-h":!0}),l(Ct)!=="svelte-1llzxwj"&&(Ct.textContent=ta),bt=a(Ce,"DIV",{});var ue=r(bt);k(Pt.$$.fragment,ue),A=a(ue,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(A)!=="svelte-16xxt4"&&(A.textContent=na),en=a(ue,"PRE",{class:!0});var Ha=r(en);Mn=w(Ha,!1),Ha.forEach(n),ue.forEach(n),Ce.forEach(n),Dn=u(t),Tt=a(t,"H2",{"data-svelte-h":!0}),l(Tt)!=="svelte-1h37gg6"&&(Tt.innerHTML=ea),On=u(t),Bt=a(t,"P",{"data-svelte-h":!0}),l(Bt)!=="svelte-1rpc945"&&(Bt.innerHTML=aa),Fn=u(t),z=a(t,"DIV",{class:!0});var be=r(z);yt=a(be,"DIV",{class:!0,"data-svelte-h":!0}),l(yt)!=="svelte-1llzxwj"&&(yt.textContent=sa),At=a(be,"DIV",{});var re=r(At);k(Ht.$$.fragment,re),H=a(re,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(H)!=="svelte-11d9gy2"&&(H.textContent=pa),an=a(re,"PRE",{class:!0});var _a=r(an);zn=w(_a,!1),_a.forEach(n),re.forEach(n),be.forEach(n),Un=u(t),_t=a(t,"H2",{"data-svelte-h":!0}),l(_t)!=="svelte-1bgra4e"&&(_t.innerHTML=oa),Vn=u(t),Lt=a(t,"P",{"data-svelte-h":!0}),l(Lt)!=="svelte-dqrivd"&&(Lt.innerHTML=la),Yn=u(t),U=a(t,"DIV",{class:!0});var Pe=r(U);Et=a(Pe,"DIV",{class:!0,"data-svelte-h":!0}),l(Et)!=="svelte-1llzxwj"&&(Et.textContent=ca),It=a(Pe,"DIV",{});var de=r(It);k(Rt.$$.fragment,de),_=a(de,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(_)!=="svelte-1n3v2hx"&&(_.textContent=ia),sn=a(de,"PRE",{class:!0});var La=r(sn);Nn=w(La,!1),La.forEach(n),de.forEach(n),Pe.forEach(n),Xn=u(t),jt=a(t,"H2",{"data-svelte-h":!0}),l(jt)!=="svelte-up1070"&&(jt.innerHTML=ua),Qn=u(t),Gt=a(t,"P",{"data-svelte-h":!0}),l(Gt)!=="svelte-131etfl"&&(Gt.innerHTML=ra),Kn=u(t),V=a(t,"DIV",{class:!0});var Te=r(V);Mt=a(Te,"DIV",{class:!0,"data-svelte-h":!0}),l(Mt)!=="svelte-1llzxwj"&&(Mt.textContent=da),Dt=a(Te,"DIV",{});var ke=r(Dt);k(Ot.$$.fragment,ke),L=a(ke,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(L)!=="svelte-1ttbif2"&&(L.textContent=ka),pn=a(ke,"PRE",{class:!0});var Ea=r(pn);Wn=w(Ea,!1),Ea.forEach(n),ke.forEach(n),Te.forEach(n),$n=u(t),Ft=a(t,"H2",{"data-svelte-h":!0}),l(Ft)!=="svelte-114x63d"&&(Ft.innerHTML=ga),qn=u(t),zt=a(t,"P",{"data-svelte-h":!0}),l(zt)!=="svelte-1vm2fp6"&&(zt.innerHTML=ha),Zn=u(t),Ut=a(t,"UL",{"data-svelte-h":!0}),l(Ut)!=="svelte-14bojw2"&&(Ut.innerHTML=fa),Jn=u(t),Y=a(t,"DIV",{class:!0});var Be=r(Y);Vt=a(Be,"DIV",{class:!0,"data-svelte-h":!0}),l(Vt)!=="svelte-1llzxwj"&&(Vt.textContent=ma),Yt=a(Be,"DIV",{});var ge=r(Yt);k(Nt.$$.fragment,ge),E=a(ge,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(E)!=="svelte-1vij53h"&&(E.textContent=xa),on=a(ge,"PRE",{class:!0});var Ia=r(on);te=w(Ia,!1),Ia.forEach(n),ge.forEach(n),Be.forEach(n),ne=u(t),Xt=a(t,"P",{"data-svelte-h":!0}),l(Xt)!=="svelte-x8mxe1"&&(Xt.innerHTML=va),ee=u(t),I=a(t,"DIV",{class:!0});var he=r(I);Qt=a(he,"DIV",{class:!0,"data-svelte-h":!0}),l(Qt)!=="svelte-1llzxwj"&&(Qt.textContent=wa),ln=a(he,"P",{"data-svelte-h":!0}),l(ln)!=="svelte-b7us68"&&(ln.textContent=Sa),Kt=a(he,"DIV",{});var fe=r(Kt);k(Wt.$$.fragment,fe),R=a(fe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(R)!=="svelte-1cmcx78"&&(R.textContent=Ca),cn=a(fe,"PRE",{class:!0});var Ra=r(cn);ae=w(Ra,!1),Ra.forEach(n),fe.forEach(n),he.forEach(n),this.h()},h(){o(W,"class","remark-container__title"),o(C,"class","remark-container tip"),o(tt,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNrFUlFLwzAQ/ivxXmwhDFcZaF+kExEfFNGBDis0NtetmCUlSXFj9L+btq7aucF88qH0krvv7r7vyxpYUUC4hlRxhBBSwYwht6uoKAguLUpuiIvXsYxtqpFZfLRM23s2Q89vbmOr0ZZaki5R31axrKCikCnBURsIX9aQcwiHFCRb1JOacqCgssygfYbwZBNPXVy9Uihcrx6ybXbTHnoLd7O7pevDj62vy3x737FaDt5Y+j7TqpT8UgmlvUQjT/xBwTjP5cwb+YN0ngvutcDYTlz73yCRL9ChrEt6yWSOpAGR3JA6c5T4LdzvhKGwhDA4DSis3H90vmE7wUUh3LY91j2ikXm/ySJeij1s60/JMWZKfxv0NbcN9urxoD5MS1ej7Bg/FixF2uPf8ow0kpUqSeMJsXMmyfDsIvHpbqSTqlzIHQO2C2M7Lq3j8DXmTjV+uOcmSyF8eiBsiuYw3Cbj90RSMsos6l0K1s+69SbY8uZKOkg0w/925mnO7LGpzdHETd/vSU+x4cluwfpFowOKgkM6BXs6/dzwL568Vp+1Lbyy"),o(b,"title","Open in our Online Editor"),wn.a=null,o(qt,"class","language-js"),o(j,"class","remark-container tip"),o(at,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNrFU11r2zAU/SvafZkNJjQegdYvwx1j9GFjtIE11AVr1rVjokhCkmnS4P8+2a7d2k0g28sejK90P87ROdIBqFIQHSCTDCGCjFNjyPd9rBTBnUXBDHHxIRGJzTRSi3eWavuTFuj57W5iNdpKCzIkmt06ETXUAeSSM9QGoocDlAyieQCCbhukthwCkHlu0N5DdNHHKxfXjwEoN2vU2Q276RYjwgP2QLpZvGH9rSqnfG/lk5ll65IzjcLrUom9UzTD2W+abQotK8G+SC61l6pSbFI/6Kuu5W5mymf05v5MUcZKUXgL/32bRpb6HciAkNilI/m+lpdbdMXWJb10uUbStpHSkCbzIfX7Aa80TpAtnE4DWX+wI4AdROGnMIC9+y+ueo2XuFXcaTTSeiRvbDY3ecwqfkLj5pPiGnOpX6/FC24X/IsLwzFbvTpdYo1kLyvS3gRi11SQ+eXndCLJsHKCVFtxBGBa6CytrDvDC8wPmTbGuksuKs794My2FZrz+qbm9BLGuUV9TMHmMXXehBNvvgrXEhf4v535tab2o2nM0cShn/ZkpNj84rhg46LFGUXhOZPCE5PeMvwbTx7rP/Cf6Lg="),o(P,"title","Open in our Online Editor"),Cn.a=null,o(Zt,"class","language-js"),o(G,"class","remark-container tip"),o(lt,"class","remark-container__title"),o(T,"target","_blank"),o(T,"href","/editor#eNrFk11r2zAUhv+Kdm5qgwmNR6DzTXHHGL3YGG2gK3XBmnXsmCiSkGSaEPzfK9u1W7sJpLvphbGk8/Xqee09UKUg2kMmGUIEGafGkF+7WCmCW4uCGeLW+0QkNtNILd5aqu0fWqDnt6eJ1WgrLcgQaE7rRNRQB5BLzlAbiB72UDKI5gEIumkmtekQgMxzg/YvROf9+t6t68cAlOs1quyaXXebkeBh9iC62bxR/bMqp3pv5JOZZauSM43C60KJvVU0w9k/mq0LLSvBvksutZeqUqxTP+izruR2pihjpSi8hf8+XSNL/a750DmxSyfufS4vN+iSrQt66XKFpC0jpSFN5Evq9w1exx8RWTg+g0h/sCGALUTh1zCAnXsvvvVsl7hR3LEZMR5hjc36Oo9ZxY+wbR4prjCX+vVzeJnbLf6H/nDNllfHJdZIdrIi7RdA7IoKMr+4TCdIhp0DUm3EgQHTRGdlZd0dXsb8ls6Jho0nKs794MSyezSn1U3N6RHGuUV9iGDzE3XehBNvfghXEhf42c7crag9M405mrjpxz0ZEZufHwY2TlqckBSe0ik80umtwo948lg/A76j5k0="),o(T,"title","Open in our Online Editor"),Tn.a=null,o(Jt,"class","language-js"),o(M,"class","remark-container tip"),o(dt,"class","remark-container__title"),o(B,"target","_blank"),o(B,"href","/editor#eNrFUlFr2zAQ/ivqvcwCERKXwuqX4YxR+tBS1sAa6oI16xybKpKRZJoQ/N8n241bZwlkT3swPunuu++++7QDXlUQ7SDTAiGCTHJryd02riqCG4dKWOLjXaISlxnkDh8dN+6BrzCg3W3iDLraKDIk2tsmUQ00DHItBRoL0fMOSgHRjIHi65apKwcGOs8tuieIpvt46ePmhUHle42QfbPb/jAaeOAehm4Pn6a+qcvDeed6M/nNs9eV0bUS37XUJkgNipROKi5EqVbBjE7eSuGKIJzSSVaUUgR9i8QtPNHfcFmu0eOdTwbpokDSgUhpSZu5SGkPp8OKGGwgCi9DBlv/v7re617gupJ+7pH+keTYvt7msajlCd3tp9Ucc20+rHrn7YOTm/mp32wv16AaFD9WPEM20t/rjA2Sra5J5w5xBVdk9vVbStlxpF9VvVZHCA4LEzevndfwTnOvO2f8w1O1lJSdCVuiPQ+3z9DRkrSKc4fm2AbbB957Ex5480N5SLzC/+3Mr4K7L7Y1xxDPftqT0cZm0+MLGxddnVEUntMpPNHp84T/4slL8wetT7+v"),o(B,"title","Open in our Online Editor"),Hn.a=null,o(tn,"class","language-js"),o(D,"class","remark-container tip"),o(mt,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNrFUlFr2zAQ/ivavcwCYRKPQueX4Ywx+rAx2kAX6oI16xybKpKRZJoQ/N8r241bZwlkT3swPunuu7vv+7QHXtcQ7yHXAiGGXHJryY9dUtcEtw6VsMTH+1SlLjfIHd45btwvvsaA9repM+gao8iY6G7bVLXQMii0FGgsxA97qATEcwaKb7pJfTkw0EVh0f2GeHaIVz5uHxnUvtcEOTS7GQ6ThcfZ49Ld4d3W35vqeN+F3oZ/eP60NrpR4quW2gSZQZHRsOZCVGodzGn4XAlXBtGMhhILF9AwLyspgqFT6pZ+3t9dZLVB38b5ZJAtSyQ9iFSWdJkPGR3gdFSKwRbi6FPEYOf/V58P9Je4qaVffyLDhHlin26KRDTyDP3u02qBhTZvjr3OHYKzAt3qZzvQNahGxnc1z5FN+A88E4NkpxvSm0RcyRWZX3/JKDuN9FI1G3ViwHFh6haN8xxex/zUvUH+/alGSsouhK3QXoY7ZOhEJK2SwqE5pWD3zgdvoiNvvikPSdb4v525L7n7aDtzDPHTz3syUWw+Oy3YtOjqgqLokk7RmU7vN/wXTx7bF3z7wdk="),o(y,"title","Open in our Online Editor"),In.a=null,o(nn,"class","language-js"),o(O,"class","remark-container tip"),o(Ct,"class","remark-container__title"),o(A,"target","_blank"),o(A,"href","/editor#eNrFUt9r2zAQ/lfUe5kFwiQehc0vwxmj9KFlrIGtzAVr1vkHVSQjyTQh+H+fbDdenSWQPe3B+KS77+6+79MeeNNAvIdcC4QYcsmtJXe7pGkIbh0qYYmP96lKXW6QO3xw3LivvMSADrepM+hao8iU6G+7VHXQMSi0FGgsxD/3UAuIlwwU3/SThnJgoIvCovsB8eIQP/q4e2LQ+F4z5NjsdjzMFp5mT0v3hzdb37T18b4rvQ1/8fy5NLpV4rOW2gSZQZHRsOFC1KoMljR8qYWrgmhBQ1OXlQtomFe1FMHYKnVrP/DvNrLeoO/jfDLI1hWSAURqS/rMVUZHOJ2kYrCFOHofMdj5//XHA/81bhrp95/pMKOe2OfbIhGtPMO//7RaYaHNH8te547BWYW+6Rc70jWoJsYPDc+RzfiPPBODZKdbMrhEXMUVWX74lFF2GumlajfqxIDjwtStWuc5vI6514ND/gGqVkrKLoQ9or0Md8jQmUhaJYVDc0rB/qGP3kRH3nxRHpKU+L+d+V5x98725hjip5/3ZKbYcnFasHnR9QVF0SWdojOd3m74L548db8BjeXCTA=="),o(A,"title","Open in our Online Editor"),Mn.a=null,o(en,"class","language-js"),o(F,"class","remark-container tip"),o(yt,"class","remark-container__title"),o(H,"target","_blank"),o(H,"href","/editor#eNrFUt9r2zAQ/le0e5kFIiQehdUvwxlj9GFjrIG21AWr1vkHVSQjySwh+H+vbDdenSaQPvXB+KS77+6+79MOeF1DtINMC4QIMsmtJb+2cV0T3DhUwhIf7xKVuMwgd3jtuHF/eIEB7W8TZ9A1RpEx0d22iWqhZZBrKdBYiO53UAmIFgwUX3eT+nJgoPPcoruFaL6P73zcPjCofa8Jcmh2NRwmC4+zx6W7w6utfzbV4b5LvZk98uypMLpR4ruW2gSpQZHSWc2FqFQRLOisxKooXRDO6SwrKymCoUfiVn7SW7ys1ugbOJ8M0lWJpAeRypIu8ymlA5yOGjHYQBR+CRls/f/ick98heta+sUnAkw4x/bpKo9FI08Q7z6tlphr89+rl7lDcFKav/qfHegaVCPj65pnyCb8B56xQbLVDentIa7kiiy+fkspO470UjVrdWTAYWHilo3zHF7G/Na9Nf7lqUZKys6E3aE9D7fP0IlIWsW5Q3NMwe6FD96EB978UB4SF/jRztyU3H22nTmG+OmnPZkotpgfF2xadHFGUXhOp/BEp9cbvseTh/YZXDPACA=="),o(H,"title","Open in our Online Editor"),zn.a=null,o(an,"class","language-js"),o(z,"class","remark-container tip"),o(Et,"class","remark-container__title"),o(_,"target","_blank"),o(_,"href","/editor#eNrFUk2L2zAQ/SvqXGqBMImXhdaX4pRS9tCldANtWC9YtcYfrCIZSaYJwf+9sr1x12kC6akH45Fm3sy893QA3jQQHyDXAiGGXHJryZd90jQEdw6VsMTHh1SlLjfIHT44btxXXmJAh9vUGXStUWRK9LddqjroGBRaCjQW4scD1ALiJQPFt/2koRwY6KKw6H5AvDjGGx93Twwa32uGHJvdjYfZwtPsaen+8Grrz219uu9K78KfPH8ujW6V+KilNkFmUGQ0bLgQtSqDJQ0rrMvKBdGChk43AQ3zqpYiGDulbu3n/d1F1lv0bZxPBtm6QjKASG1Jn3mT0RFOJ6UY7CCObiIGe/+/fX+kv8ZtI/36MxlmzBP7fFckopUX6PefVisstPnj2MvcMbgo0Df9y450DaqJ8UPDc2Qz/iPPxCDZ65YMJhFXcUWW7z5klJ1HeqnarToz4LQwdavWeQ4vY+71YJB/f6qVkrIrYRu01+GOGToTSaukcGjOKdi/89Gb6MSbT8pDkhL/tzPfK+7e2t4cQ/z0y57MFFsuzgs2L7q9oii6plN0odPrDf/Fk6fuN4ENwdo="),o(_,"title","Open in our Online Editor"),Nn.a=null,o(sn,"class","language-js"),o(U,"class","remark-container tip"),o(Mt,"class","remark-container__title"),o(L,"target","_blank"),o(L,"href","/editor#eNrFUk2L2zAQ/SvqXGqBMInLQutLcUope2gp3UC71AvWWuMPVpaMJNOE4P9e2d646zSB9NSD8Ugz783MezoAb1uID5BrgRBDLrm15PM+aVuCO4dKWOLjQ6pSlxvkDu8cN+4rLzGg423qDLrOKDInhts+VT30DAotBRoL8c8D1ALiNQPFm6HTWA4MdFFYdD8gXh3jex/3Dwxaz7VATmS302Ex8Nx7Hno4vJj6U1efzrvRu/CR50+l0Z0SH7TUJsgMioyGLReiVmWwpmGFdVm5IFrR8FE7p5uAhnlVSxFMZKnb+pZ/E8m6Qc/kfDLIthWSEURqS4bMq4xOcDqLxWAHcfQmYrD3/5t3RwW22LTSb7BQYrF8Yp9ui0R08oICw6fVBgtt/pj23HcKLmr0Tf+y07oG1bzxXctzZIv9pz0Tg2SvOzL6RFzFFVm/fZ9Rdh7ppeoadabBaWHqNp3XXj23+aJHj/wTVJ2UlF0Ju0d7He6YoQuRtEoKh+acgsNTn7yJTrz5qDwkKfF/O/O94u61HcwxxHe/7MlCsfXqvGDLopsriqJrmKILTC8n/BdPHvrfX+fDHA=="),o(L,"title","Open in our Online Editor"),Wn.a=null,o(pn,"class","language-js"),o(V,"class","remark-container tip"),o(Vt,"class","remark-container__title"),o(E,"target","_blank"),o(E,"href","/editor#eNrFU1Fr2zAQ/itCL7NAmNihY/NLccYYfdgYbaErc8GKdbZFbclIMkkI+e+T7CaL0wSypz0YnXx333f+vvMWs67DyRYXigNOcNEwY9D3Tdp1CNYWJDfIxdtMZrbQwCw8WKbtT1ZBQIa3mdVgey3RIeHf7jK5wzuKS9Vw0AYnv7dYcJxEFEvWeqahHFOsytKA/YWT2T5+dvHuheLOYU06R7C78TIZ+MB9GNpfjqb+1ovTeRdqHS5Z8Vpp1Uv+RTVKB7kGnpOwY5wLWQURCVeC2zqYz0jITAeFvWdWqCCiKCZhUYuGByNoZh8d9XvARrTgEK1LBvmTB0PCoPmsbSmyNaARFWkP6zNREqNAhBAO2RpEVVtkatU3HC0B2ZUofBNaisofvmgYkVBk1HGPwypU2/UWuC/86BjDnIzDkoNFFK9xEs9jijfuvPm81/0R2q5xuk30n0iemte7MuV9c0F3/yi5gFLpv6vyxjsGF525VysziqtBHvR96FgBdKL2qGqqAW1Uj4btcBIwiaJPtzmh5zudMX0rzxCcFmZ20Vv3DW80P9SwGW7xZd80hF7Z9gzmur59hkxEUjItLehzCvofbPQmPvHmq3QtaQX/25mnmtkPxpujkWO/7MlEsWh2XrBp0c0VRfE1SPEFpOMJ/8WTl90fnxTqGw=="),o(E,"title","Open in our Online Editor"),te.a=null,o(on,"class","language-js"),o(Y,"class","remark-container tip"),o(Qt,"class","remark-container__title"),o(R,"target","_blank"),o(R,"href","/editor#eNrFk11r2zAUhv+KppvZIELjUdh8M5wxRi82RhvYSl2wYh3boopkpOMlJvi/T44br04TSK92YftI51PPK+8or2sa72huBNCY5oo7R763SV0T2CJo4Yi3d6lOMbfAEe6QW/zJSwjC/W6KFrCxmoyOfrdLdUc7RgujBFhH44cdlYLGc0Y1X/ed9uGUUVMUDvA3ja8O9r23u0dGa19rkjkUuxkWk4HH3uPQ/eLF1N8aeTzvwmxnK54/ldY0WnwxytggsyCycFZzIaQug3k4466GHG85ShNEjPidvJJKBEOpFJe+4esySq7B10HvDLJlBWQjBVZEOsLVhrfOj8lzVC2JCPpQR1ayLMESrLj2LyAVyLJCRlYNEg1/vOs4wvmDgX6XhcMk4Uid0S2Now8Ro63/Xn86oFzCulYexQTphGLinm6KRDTqDMr+MXoBhbH/1H/uOxhnYd+ajRvIWdAjvLua58AmKAdkiQXSmobsBR/OPP/4OQvZ6UxPvVnrEw2OA1NcNOjP8Nzmh9mL7e+ybpQK2YVp9+Auyzt4wgkko5MCwZ4i2P8zgzbRkTZftU9JSvjfyvyqOL53vTiW+O7nNZkQm1+dBjYNur4gKLqkUnSm0ssJ36LJY/cXCrvdlw=="),o(R,"title","Open in our Online Editor"),ae.a=null,o(cn,"class","language-js"),o(I,"class","remark-container tip")},m(t,s){p(t,S,s),p(t,rn,s),p(t,N,s),p(t,dn,s),p(t,X,s),p(t,kn,s),p(t,Q,s),p(t,gn,s),p(t,K,s),p(t,hn,s),p(t,C,s),c(C,W),c(C,$t),c(C,un),g($,un,null),p(t,fn,s),p(t,q,s),p(t,mn,s),p(t,Z,s),p(t,xn,s),p(t,J,s),p(t,vn,s),p(t,j,s),c(j,tt),c(j,nt),g(et,nt,null),c(nt,b),c(nt,qt),wn.m(Ga,qt),p(t,Sn,s),p(t,G,s),c(G,at),c(G,st),g(pt,st,null),c(st,P),c(st,Zt),Cn.m(Ma,Zt),p(t,bn,s),p(t,ot,s),p(t,Pn,s),p(t,M,s),c(M,lt),c(M,ct),g(it,ct,null),c(ct,T),c(ct,Jt),Tn.m(Da,Jt),p(t,Bn,s),p(t,ut,s),p(t,yn,s),p(t,rt,s),p(t,An,s),p(t,D,s),c(D,dt),c(D,kt),g(gt,kt,null),c(kt,B),c(kt,tn),Hn.m(Oa,tn),p(t,_n,s),p(t,ht,s),p(t,Ln,s),p(t,ft,s),p(t,En,s),p(t,O,s),c(O,mt),c(O,xt),g(vt,xt,null),c(xt,y),c(xt,nn),In.m(Fa,nn),p(t,Rn,s),p(t,wt,s),p(t,jn,s),p(t,St,s),p(t,Gn,s),p(t,F,s),c(F,Ct),c(F,bt),g(Pt,bt,null),c(bt,A),c(bt,en),Mn.m(za,en),p(t,Dn,s),p(t,Tt,s),p(t,On,s),p(t,Bt,s),p(t,Fn,s),p(t,z,s),c(z,yt),c(z,At),g(Ht,At,null),c(At,H),c(At,an),zn.m(Ua,an),p(t,Un,s),p(t,_t,s),p(t,Vn,s),p(t,Lt,s),p(t,Yn,s),p(t,U,s),c(U,Et),c(U,It),g(Rt,It,null),c(It,_),c(It,sn),Nn.m(Va,sn),p(t,Xn,s),p(t,jt,s),p(t,Qn,s),p(t,Gt,s),p(t,Kn,s),p(t,V,s),c(V,Mt),c(V,Dt),g(Ot,Dt,null),c(Dt,L),c(Dt,pn),Wn.m(Ya,pn),p(t,$n,s),p(t,Ft,s),p(t,qn,s),p(t,zt,s),p(t,Zn,s),p(t,Ut,s),p(t,Jn,s),p(t,Y,s),c(Y,Vt),c(Y,Yt),g(Nt,Yt,null),c(Yt,E),c(Yt,on),te.m(Na,on),p(t,ne,s),p(t,Xt,s),p(t,ee,s),p(t,I,s),c(I,Qt),c(I,ln),c(I,Kt),g(Wt,Kt,null),c(Kt,R),c(Kt,cn),ae.m(Xa,cn),se=!0},p:Ka,i(t){se||(h($.$$.fragment,t),h(et.$$.fragment,t),h(pt.$$.fragment,t),h(it.$$.fragment,t),h(gt.$$.fragment,t),h(vt.$$.fragment,t),h(Pt.$$.fragment,t),h(Ht.$$.fragment,t),h(Rt.$$.fragment,t),h(Ot.$$.fragment,t),h(Nt.$$.fragment,t),h(Wt.$$.fragment,t),se=!0)},o(t){f($.$$.fragment,t),f(et.$$.fragment,t),f(pt.$$.fragment,t),f(it.$$.fragment,t),f(gt.$$.fragment,t),f(vt.$$.fragment,t),f(Pt.$$.fragment,t),f(Ht.$$.fragment,t),f(Rt.$$.fragment,t),f(Ot.$$.fragment,t),f(Nt.$$.fragment,t),f(Wt.$$.fragment,t),se=!1},d(t){t&&(n(S),n(rn),n(N),n(dn),n(X),n(kn),n(Q),n(gn),n(K),n(hn),n(C),n(fn),n(q),n(mn),n(Z),n(xn),n(J),n(vn),n(j),n(Sn),n(G),n(bn),n(ot),n(Pn),n(M),n(Bn),n(ut),n(yn),n(rt),n(An),n(D),n(_n),n(ht),n(Ln),n(ft),n(En),n(O),n(Rn),n(wt),n(jn),n(St),n(Gn),n(F),n(Dn),n(Tt),n(On),n(Bt),n(Fn),n(z),n(Un),n(_t),n(Vn),n(Lt),n(Yn),n(U),n(Xn),n(jt),n(Qn),n(Gt),n(Kn),n(V),n($n),n(Ft),n(qn),n(zt),n(Zn),n(Ut),n(Jn),n(Y),n(ne),n(Xt),n(ee),n(I)),m($),m(et),m(pt),m(it),m(gt),m(vt),m(Pt),m(Ht),m(Rt),m(Ot),m(Nt),m(Wt)}}}class ns extends Wa{constructor(S){super(),$a(this,S,null,qa,Qa,{})}}export{ns as component};
