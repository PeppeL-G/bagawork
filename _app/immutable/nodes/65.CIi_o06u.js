import{s as Vs,n as Fs}from"../chunks/scheduler.DFPFbGJz.js";import{S as Os,i as Ys,e as s,s as i,c as z,H as h,a,g as o,b as u,d as r,f as I,n as f,h as n,o as c,j as p,p as l,m as R,t as E,k as B,l as G}from"../chunks/index.CzDE4dZi.js";import{V as A}from"../chunks/ViewApp.C2MU7-ZI.js";function $s(Rs){let x,Bn="6. Sizing GUI Components",Ot,j,Gn="This tutorial will teach you how you can change size of GUI components.",Yt,H,An="Positioning children",$t,M,jn="First, some quick repetition.",Kt,q,Hn="The child components in <code>Rows</code> are as wide as the <code>Rows</code> component, and their height are just tall enough to surround their content, and the children are positioned at the top of <code>Rows</code>. To position the child components elsewhere in <code>Rows</code>, you can insert extra <code>Space</code> components in <code>Rows</code> to push apart the children. The <code>Space</code> children will share the remaining space available in <code>Rows</code> evenly among themselves.",Wt,D,Mn="It works the same for the <code>Columns</code> component, but the children are instead positioned as columns, and not as rows.",Nt,v,L,qn="Example",vt,Dn="Try resizing the app below, and notice how the <code>Space</code> children gets smaller/bigger, while the three other children stay at the same size.",b,w,Ln="Open in Online Editor",V,wt,Jt,Es=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">RowsPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">First</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Second</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">purple</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">To columns</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ColumnsPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ct,Zt,Bs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ColumnsPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">First</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Second</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">purple</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">To Rows</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>RowsPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Ut,F,Vn="Sizing children",Xt,O,Fn="It&#39;s not only <code>Space</code> children that can grab some shares of the remaining available space; any child component used in <code>Rows</code> and <code>Columns</code> can grab some of the remaining available space. But it&#39;s only the <code>Space</code> children that grabs it by default, and by default they grab equally much of it. But all this can be changed with the configuration method <code>.size()</code> on the children. Let&#39;s go through how this works in detail.",Qt,Y,On="First, let us ignore the <code>Space</code> children, and instead focus on all other children, such as <code>Text</code> and <code>Button</code>.",tn,$,Yn="By default, all children in <code>Rows</code> will be just tall enough to surround their content. If you want them to also grab some of the remaining available space, you can call the method <code>.size()</code> on the child, and pass it a number indicating how many shares of the remaining available space it should also occupy.",nn,C,K,$n="Examples",St,Kn="A few examples.",d,S,Wn="Open in Online Editor",W,yt,sn,Gs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FirstPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FirstPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">None of the children here call .size(), so all children are just tall enough to surround their content.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to second page</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>SecondPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Tt,an,As=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">SecondPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">SecondPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text component wants 1 share of the remaining avaialble space. Since this is the only child that wants some shares, it will get all of it (1 out of 1 shares)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to third page</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ThirdPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,bt,en,js=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ThirdPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">ThirdPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text component wants 100 shares of the remaining avaialble space. Since this is the only child that want some shares, it will get all of it (100 out of 100 shares)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to fourth page</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FourthPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Pt,pn,Hs=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">FourthPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">FourthPage</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This text component wants 4 shares of the remaining avaialble space. The Button below wants 1 share of the remaninig available space, so this component will get 4 of 5 shares.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Go to first page</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>FirstPage<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,on,N,Nn="The special thing with the <code>Space</code> component is that it has the size <code>1</code> by default (it has been made like this because that&#39;s often how one wants to use it), while all other components has the size <code>0</code> by default (which means they will be just big enough to surround their content).",cn,J,Jn="So when you use the <code>Space</code> component like this:",ln,Z,un,Ms='<code class="language-js">Space</code>',rn,U,Zn="It has the same functionality as being used like this:",kn,X,dn,qs='<code class="language-js">Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code>',gn,P,Q,Un="Example",tt,y,Xn="Open in Online Editor",nt,_t,mn,Ds=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I occupy one third of the space.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,hn,st,Qn="You can still call <code>.size()</code> on <code>Space</code> if you want it to claim another amount of shares of the remaning available space.",fn,_,at,ts="Example",et,T,ns="Open in Online Editor",pt,zt,xn,Ls=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I occupy one fifth of the space.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pink</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,vn,ot,ss="Exercises",wn,ct,as="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",Cn,k,lt,es="Exercise 1",It,ps='The code in <a href="/editor#eNq1UlFLwzAQ/ivhXlwhjG0iSF+kiqgPiuhAhxssa69bWZuU5IqO0f9uarU2w04RfWi5y9139+X7sgWR5+BvIVQRgg9hKoxh15sgzxm+EMrIMBtvp3JK1RdqFIT3JDTdiiX2vLpCGqnQkjWF6rSsQSWUHGKVRqgN+E9bSCLwhxykyKqNbxDgoOLYID2CP/iIJzYuZxxyO89B1sOu6sQh3uxvyFfJDvuLItnlfaeeTT9cJWmkUfbq0pTGdkif7K83H6+w0oGNE0px7vGOlkwkkoVK2t009/oLEa6XWhUyOlOp0r15mmRttD0tMvnF5ind5yJE/pmfFkRKvq+6VM6Yb7qDhSro5+1nlr4I9wG8OvAckzm8gD8aWPc24B8OGufGmOWpVd1x0DEtMOurOIiK9O+cc/m2TAo0so0q2NsLYrQSkg2PT1p3dZG/NehG/VzvCZp9WvOvxC55LeVoR8pz+/J0sMT/F/JhJejAVFpqZud3S+jcdTho9bmVo67KqBMzOurYuiPWrHwF1QvJTQ==" target="_blank">this BagaWork project</a> currently displays a page looking like this:',Ht,it,Rt,os="Your task is to change the code, so <code>The main content</code> component covers as much space as possible, so the page instead looks like this:",Mt,ut,Et,cs="<summary>Hint</summary><p>A carefully chosen <code>.size(1)</code> should do the trick. But on which component?</p>",Sn,g,rt,ls="Exercise 2",Bt,is='The code in <a href="/editor#eNq1UdFKwzAU/ZVwX1yhjLUwHH2RKiI+KOIGOuxgob3dhm0Sklt0lP676bqOtaz65ENCbs495+aclMCVgqCEWCYIAcQZN4Y97UOlGH4TisQwey4jEVG9Yo2ccE5c0wvf4MhpENJIhRbsBNS3VUOqoHIhlVmC2kDwUcIugcBzQfC8nniggAsyTQ3Su4Ums7ZaQuBfVysXlJWsycfjAnOV2Xd09DoOQvP5mIZJkR1ec7JSFz0vD8Wu7+JVfplxvN1liUYxaqCI5orH6LbVwkqOyW6jdaiR7WXBDhYZbblg3uxm7biXmXcyK3JxYUC/MaLbgkiK45hneSb5R+8SzS/NLeL0fqmJ0u9FeS8IdbjB/w/ybcvpytRZamb1hyPsePUmZ31dZDqE+IMcfzowtRfWqvoBIG0sOQ==" target="_blank">this BagaWork project</a> contains no pages. Your task is to add a new page to the project named <code>StartPage</code>, and make it look as the page shown below.',qt,kt,Gt,us="<summary>Hint</summary><p>Hmm... Is that GUI conisting of two <code>Rows</code> that contain two <code>Columns</code> each? Or two <code>Columns</code> that contain two <code>Rows</code> each? Hmm... Seems impossible to tell... Wait, does that mean any of the two approaches will work?</p><p>And remember, <code>.size()</code> can be called on any child component in <code>Rows</code> and <code>Columns</code>. So if <code>Columns</code> is being used as a child in <code>Rows</code>, you can call <code>.size()</code> on that <code>Columns</code> component!</p>",yn,m,dt,rs="Exercise 3",At,ks="Continue on your project from <code>Exercise 2</code>, but make the GUI look like this:",Dt,gt,jt,ds="<summary>Hint</summary><p>You need more <code>.size(1)</code>. Add as many as you can. And then add some more. Ehh... No, scratch that last sentence 😅</p>",Tn,mt,gs="That's it!",bn,ht,ms="Good work, now you know how to change the size of GUI components! 🥳 Using <code>Rows</code> and <code>Columns</code> with <code>.size()</code> on the children is enough to create almost any layout you want.",Pn;return V=new A({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return RowsPage
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class RowsPage extends Page{\n	createGui(){\n		return Rows.children(\n			Text.text(`First`).backgroundColor(`red`),\n			Space.backgroundColor(`pink`),\n			Text.text(`Second`).backgroundColor(`yellow`),\n			Space.backgroundColor(`purple`),\n			Button.text(`To columns`).page(ColumnsPage)\n		)\n	}\n}",x:199,y:258},{id:3,folderId:1,code:"class ColumnsPage extends Page{\n	createGui(){\n		return Columns.children(\n			Text.text(`First`).backgroundColor(`red`),\n			Space.backgroundColor(`pink`),\n			Text.text(`Second`).backgroundColor(`yellow`),\n			Space.backgroundColor(`purple`),\n			Button.text(`To Rows`).page(RowsPage)\n		)\n	}\n}",x:500,y:261}],pageTemplates:[]}}}),W=new A({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return FirstPage
	}
}`},folders:[{id:1,name:"Start",offsetX:-88,offsetY:-63}],pages:[{id:1,folderId:1,code:"class FirstPage extends Page{\n	createGui(){\n		return Rows.children(\n			Text.text(`FirstPage`),\n			Text.backgroundColor(`red`).text(`None of the children here call .size(), so all children are just tall enough to surround their content.`),\n			Button.text(`Go to second page`).page(SecondPage)\n		)\n	}\n}",x:226,y:483},{id:3,folderId:1,code:"class SecondPage extends Page{\n	createGui(){\n		return Rows.children(\n			Text.text(`SecondPage`),\n			Text.size(1).backgroundColor(`red`).text(`This text component wants 1 share of the remaining avaialble space. Since this is the only child that wants some shares, it will get all of it (1 out of 1 shares)`),\n			Button.text(`Go to third page`).page(ThirdPage)\n		)\n	}\n}",x:489,y:252},{id:4,folderId:1,code:"class ThirdPage extends Page{\n	createGui(){\n		return Rows.children(\n			Text.text(`ThirdPage`),\n			Text.size(100).backgroundColor(`red`).text(`This text component wants 100 shares of the remaining avaialble space. Since this is the only child that want some shares, it will get all of it (100 out of 100 shares)`),\n			Button.text(`Go to fourth page`).page(FourthPage)\n		)\n	}\n}",x:799,y:258},{id:5,folderId:1,code:"class FourthPage extends Page{\n	createGui(){\n		return Rows.children(\n			Text.text(`FourthPage`),\n			Text.size(4).backgroundColor(`red`).text(`This text component wants 4 shares of the remaining avaialble space. The Button below wants 1 share of the remaninig available space, so this component will get 4 of 5 shares.`),\n			Button.size(1).text(`Go to first page`).page(FirstPage)\n		)\n	}\n}",x:1086,y:485}],pageTemplates:[]}}}),nt=new A({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:-88,offsetY:-63}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Rows.children(\n			Space.backgroundColor(`yellow`),\n			Text.size(1).backgroundColor(`red`).text(`I occupy one third of the space.`),\n			Space.backgroundColor(`pink`),\n		)\n	}\n}",x:226,y:483}],pageTemplates:[]}}}),pt=new A({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},folders:[{id:1,name:"Start",offsetX:-88,offsetY:-63}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return Rows.children(\n			Space.backgroundColor(`yellow`),\n			Text.size(1).backgroundColor(`red`).text(`I occupy one fifth of the space.`),\n			Space.size(3).backgroundColor(`pink`),\n		)\n	}\n}",x:226,y:483}],pageTemplates:[]}}}),it=new A({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`The App Title\`),
			Text.text(\`The main content\`).backgroundColor(\`lime\`),
			Columns.children(
				Space,
				Button.text(\`Home\`),
				Space,
				Button.text(\`About\`),
				Space,
				Button.text(\`Contact\`),
				Space,
			)
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),ut=new A({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`The App Title\`),
			Text.text(\`The main content\`).backgroundColor(\`lime\`).size(1),
			Columns.children(
				Space,
				Button.text(\`Home\`),
				Space,
				Button.text(\`About\`),
				Space,
				Button.text(\`Contact\`),
				Space,
			)
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),kt=new A({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:108,offsetY:27}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.size(1).children(\n			Columns.children(\n				Text.text(`A`).size(1).backgroundColor(`red`),\n				Text.text(`B`).size(1).backgroundColor(`lime`),\n			),\n			Columns.children(\n				Text.text(`C`).size(1).backgroundColor(`yellow`),\n				Text.text(`D`).size(1).backgroundColor(`silver`),\n			),\n		)\n	}\n	\n}",x:413,y:240}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),gt=new A({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:108,offsetY:27}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	createGui(){\n		return Rows.children(\n			Columns.size(1).children(\n				Text.text(`A`).size(1).backgroundColor(`red`),\n				Text.text(`B`).size(1).backgroundColor(`lime`),\n			),\n			Columns.size(1).children(\n				Text.text(`C`).size(1).backgroundColor(`yellow`),\n				Text.text(`D`).size(1).backgroundColor(`silver`),\n			),\n		)\n	}\n	\n}",x:413,y:240}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){x=s("h1"),x.textContent=Bn,Ot=i(),j=s("p"),j.textContent=Gn,Yt=i(),H=s("h2"),H.textContent=An,$t=i(),M=s("p"),M.textContent=jn,Kt=i(),q=s("p"),q.innerHTML=Hn,Wt=i(),D=s("p"),D.innerHTML=Mn,Nt=i(),v=s("div"),L=s("div"),L.textContent=qn,vt=s("p"),vt.innerHTML=Dn,b=s("div"),w=s("a"),w.textContent=Ln,z(V.$$.fragment),wt=s("pre"),Jt=new h(!1),Ct=s("pre"),Zt=new h(!1),Ut=i(),F=s("h2"),F.textContent=Vn,Xt=i(),O=s("p"),O.innerHTML=Fn,Qt=i(),Y=s("p"),Y.innerHTML=On,tn=i(),$=s("p"),$.innerHTML=Yn,nn=i(),C=s("div"),K=s("div"),K.textContent=$n,St=s("p"),St.textContent=Kn,d=s("div"),S=s("a"),S.textContent=Wn,z(W.$$.fragment),yt=s("pre"),sn=new h(!1),Tt=s("pre"),an=new h(!1),bt=s("pre"),en=new h(!1),Pt=s("pre"),pn=new h(!1),on=i(),N=s("p"),N.innerHTML=Nn,cn=i(),J=s("p"),J.innerHTML=Jn,ln=i(),Z=s("pre"),un=new h(!1),rn=i(),U=s("p"),U.textContent=Zn,kn=i(),X=s("pre"),dn=new h(!1),gn=i(),P=s("div"),Q=s("div"),Q.textContent=Un,tt=s("div"),y=s("a"),y.textContent=Xn,z(nt.$$.fragment),_t=s("pre"),mn=new h(!1),hn=i(),st=s("p"),st.innerHTML=Qn,fn=i(),_=s("div"),at=s("div"),at.textContent=ts,et=s("div"),T=s("a"),T.textContent=ns,z(pt.$$.fragment),zt=s("pre"),xn=new h(!1),vn=i(),ot=s("h2"),ot.textContent=ss,wn=i(),ct=s("p"),ct.textContent=as,Cn=i(),k=s("div"),lt=s("div"),lt.textContent=es,It=s("p"),It.innerHTML=ps,Ht=s("div"),z(it.$$.fragment),Rt=s("p"),Rt.innerHTML=os,Mt=s("div"),z(ut.$$.fragment),Et=s("details"),Et.innerHTML=cs,Sn=i(),g=s("div"),rt=s("div"),rt.textContent=ls,Bt=s("p"),Bt.innerHTML=is,qt=s("div"),z(kt.$$.fragment),Gt=s("details"),Gt.innerHTML=us,yn=i(),m=s("div"),dt=s("div"),dt.textContent=rs,At=s("p"),At.innerHTML=ks,Dt=s("div"),z(gt.$$.fragment),jt=s("details"),jt.innerHTML=ds,Tn=i(),mt=s("h2"),mt.textContent=gs,bn=i(),ht=s("p"),ht.innerHTML=ms,this.h()},l(t){x=a(t,"H1",{"data-svelte-h":!0}),o(x)!=="svelte-15qbqyj"&&(x.textContent=Bn),Ot=u(t),j=a(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-amhqr6"&&(j.textContent=Gn),Yt=u(t),H=a(t,"H2",{"data-svelte-h":!0}),o(H)!=="svelte-ju23cy"&&(H.textContent=An),$t=u(t),M=a(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-c128za"&&(M.textContent=jn),Kt=u(t),q=a(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-g9x9ho"&&(q.innerHTML=Hn),Wt=u(t),D=a(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-cvyy9w"&&(D.innerHTML=Mn),Nt=u(t),v=a(t,"DIV",{class:!0});var e=r(v);L=a(e,"DIV",{class:!0,"data-svelte-h":!0}),o(L)!=="svelte-1llzxwj"&&(L.textContent=qn),vt=a(e,"P",{"data-svelte-h":!0}),o(vt)!=="svelte-qsq11i"&&(vt.innerHTML=Dn),b=a(e,"DIV",{});var Lt=r(b);w=a(Lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(w)!=="svelte-pjnsyv"&&(w.textContent=Ln),I(V.$$.fragment,Lt),wt=a(Lt,"PRE",{class:!0});var hs=r(wt);Jt=f(hs,!1),hs.forEach(n),Ct=a(Lt,"PRE",{class:!0});var fs=r(Ct);Zt=f(fs,!1),fs.forEach(n),Lt.forEach(n),e.forEach(n),Ut=u(t),F=a(t,"H2",{"data-svelte-h":!0}),o(F)!=="svelte-14ggbw9"&&(F.textContent=Vn),Xt=u(t),O=a(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-8jdyna"&&(O.innerHTML=Fn),Qt=u(t),Y=a(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-1ybk36f"&&(Y.innerHTML=On),tn=u(t),$=a(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-1btg8qn"&&($.innerHTML=Yn),nn=u(t),C=a(t,"DIV",{class:!0});var _n=r(C);K=a(_n,"DIV",{class:!0,"data-svelte-h":!0}),o(K)!=="svelte-qqcmue"&&(K.textContent=$n),St=a(_n,"P",{"data-svelte-h":!0}),o(St)!=="svelte-vjzb6q"&&(St.textContent=Kn),d=a(_n,"DIV",{});var ft=r(d);S=a(ft,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(S)!=="svelte-j0bgoc"&&(S.textContent=Wn),I(W.$$.fragment,ft),yt=a(ft,"PRE",{class:!0});var xs=r(yt);sn=f(xs,!1),xs.forEach(n),Tt=a(ft,"PRE",{class:!0});var vs=r(Tt);an=f(vs,!1),vs.forEach(n),bt=a(ft,"PRE",{class:!0});var ws=r(bt);en=f(ws,!1),ws.forEach(n),Pt=a(ft,"PRE",{class:!0});var Cs=r(Pt);pn=f(Cs,!1),Cs.forEach(n),ft.forEach(n),_n.forEach(n),on=u(t),N=a(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-j46psw"&&(N.innerHTML=Nn),cn=u(t),J=a(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1am15s6"&&(J.innerHTML=Jn),ln=u(t),Z=a(t,"PRE",{class:!0});var Ss=r(Z);un=f(Ss,!1),Ss.forEach(n),rn=u(t),U=a(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1v34te8"&&(U.textContent=Zn),kn=u(t),X=a(t,"PRE",{class:!0});var ys=r(X);dn=f(ys,!1),ys.forEach(n),gn=u(t),P=a(t,"DIV",{class:!0});var Rn=r(P);Q=a(Rn,"DIV",{class:!0,"data-svelte-h":!0}),o(Q)!=="svelte-1llzxwj"&&(Q.textContent=Un),tt=a(Rn,"DIV",{});var zn=r(tt);y=a(zn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(y)!=="svelte-1pivy0"&&(y.textContent=Xn),I(nt.$$.fragment,zn),_t=a(zn,"PRE",{class:!0});var Ts=r(_t);mn=f(Ts,!1),Ts.forEach(n),zn.forEach(n),Rn.forEach(n),hn=u(t),st=a(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-1th5lzs"&&(st.innerHTML=Qn),fn=u(t),_=a(t,"DIV",{class:!0});var En=r(_);at=a(En,"DIV",{class:!0,"data-svelte-h":!0}),o(at)!=="svelte-1llzxwj"&&(at.textContent=ts),et=a(En,"DIV",{});var In=r(et);T=a(In,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(T)!=="svelte-mr4t7o"&&(T.textContent=ns),I(pt.$$.fragment,In),zt=a(In,"PRE",{class:!0});var bs=r(zt);xn=f(bs,!1),bs.forEach(n),In.forEach(n),En.forEach(n),vn=u(t),ot=a(t,"H2",{"data-svelte-h":!0}),o(ot)!=="svelte-4opca7"&&(ot.textContent=ss),wn=u(t),ct=a(t,"P",{"data-svelte-h":!0}),o(ct)!=="svelte-fy3v6t"&&(ct.textContent=as),Cn=u(t),k=a(t,"DIV",{class:!0});var xt=r(k);lt=a(xt,"DIV",{class:!0,"data-svelte-h":!0}),o(lt)!=="svelte-1kqyz2o"&&(lt.textContent=es),It=a(xt,"P",{"data-svelte-h":!0}),o(It)!=="svelte-1x841y3"&&(It.innerHTML=ps),Ht=a(xt,"DIV",{});var Ps=r(Ht);I(it.$$.fragment,Ps),Ps.forEach(n),Rt=a(xt,"P",{"data-svelte-h":!0}),o(Rt)!=="svelte-3cywmv"&&(Rt.innerHTML=os),Mt=a(xt,"DIV",{});var _s=r(Mt);I(ut.$$.fragment,_s),_s.forEach(n),Et=a(xt,"DETAILS",{"data-svelte-h":!0}),o(Et)!=="svelte-1gio8r6"&&(Et.innerHTML=cs),xt.forEach(n),Sn=u(t),g=a(t,"DIV",{class:!0});var Vt=r(g);rt=a(Vt,"DIV",{class:!0,"data-svelte-h":!0}),o(rt)!=="svelte-i1p19j"&&(rt.textContent=ls),Bt=a(Vt,"P",{"data-svelte-h":!0}),o(Bt)!=="svelte-1r87x5q"&&(Bt.innerHTML=is),qt=a(Vt,"DIV",{});var zs=r(qt);I(kt.$$.fragment,zs),zs.forEach(n),Gt=a(Vt,"DETAILS",{"data-svelte-h":!0}),o(Gt)!=="svelte-zz7r5u"&&(Gt.innerHTML=us),Vt.forEach(n),yn=u(t),m=a(t,"DIV",{class:!0});var Ft=r(m);dt=a(Ft,"DIV",{class:!0,"data-svelte-h":!0}),o(dt)!=="svelte-15vhaya"&&(dt.textContent=rs),At=a(Ft,"P",{"data-svelte-h":!0}),o(At)!=="svelte-188tx3a"&&(At.innerHTML=ks),Dt=a(Ft,"DIV",{});var Is=r(Dt);I(gt.$$.fragment,Is),Is.forEach(n),jt=a(Ft,"DETAILS",{"data-svelte-h":!0}),o(jt)!=="svelte-1l9y1bk"&&(jt.innerHTML=ds),Ft.forEach(n),Tn=u(t),mt=a(t,"H2",{"data-svelte-h":!0}),o(mt)!=="svelte-p2uhy5"&&(mt.textContent=gs),bn=u(t),ht=a(t,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-1wjwvgm"&&(ht.innerHTML=ms),this.h()},h(){c(L,"class","remark-container__title"),c(w,"target","_blank"),c(w,"href","/editor#eNrdklFLwzAQx79KuacWwtiUieubDhQfBHF7UKzQmNxmWZaEJGUbpd/dZFlHh0P01Zdyd7n7359frwGqNeQNMMURcmCCWps87m60TnDrUHKb+LgpZOGYQepw5qhxT3SJabavFs6gq41MntXGhnootoVsoSWwUIKjsZC/NVBxyEcEJF2HRXsZIKAWC4vuBfJhF7/6uH0noL3WyWQUe4jJid9u9dFySHqe7+vqnNsB+6wENyjT+FS4uRcYOP9Jy7vKWFdmgw/KVkujasmnSiiTlgZ5mZFuYqYpw+9NupKrXldPd4ZMSX5OeIdCqM0vtGujBfb6bmvnlDzoz1XClKjX0vodgWE6jWlgksWR7PiPCGw9zsmEwA7yi/F1SyLuy59w9wT/QPww9V+hh4PqiHf3eB73eDiMuK9G3Z3Pca2Fxxbu/b39AmwOSrw="),c(w,"title","Open in our Online Editor"),Jt.a=null,c(wt,"class","language-js"),Zt.a=null,c(Ct,"class","language-js"),c(v,"class","remark-container tip"),c(K,"class","remark-container__title"),c(S,"target","_blank"),c(S,"href","/editor#eNqtlU1v2zAMhv8KoZMNeEY+nM71bRvQYocNw5LDhqVAFFuJtTmSIclLsyD/vZT80bhIsqLIJTYp8iXNB6H2hJYlSfYklRkjCUkLqjV82X0oS2CPholMA77v52JuUsWoYVNDlflG18zznXduFDOVEnDHlXYH1nuYiwM5BGQli4wpTZJfe8IzkgwDIujGVnI6JCBytdLM/CDJuzhurZ9o3YwPDwEpUa+XXQt+ro1e0139rnFrHHV+X/GXPX+XWx2mOS8yxYRXH83NDAVCgz/eohNd+EHveEnTP2slK5F9koVU3kKxbOE3WV+lYCBXYHIGrTrkTKFFiwJCzf/h+ALQEqzdhVCM+F1pA8a6mZDVOgcjQVfKlbKCXEEqBX6gCY96+lgZI0VT/l66JIZxGZSu+dA+vKlz2c/x60S/YxWQR5KMRjcB2ZEkiseHoB75+NLIn/WuOfNn1ZdDd3Mb+peHP8u5BvuKc9qUSEIY2FJhNAxB53bEDRnFNpQLLtZA/1JOi2XBQJc0ZSFMuUgZBqGSFcNgKYpdDQpN2ipquWG1qA6Ao5cjtzUzDiuWQZc3BFkZazTltX+ZG1ZVfWwz6zlPLYpvHbXRZNRSiy5R6+SuCa0TPc1sMHg7tcGgGdzVwL2OG9ZtyXUt/IfdSlbK5D14d851nt7725Ze3NKbXFxznd5V91ynepJf9GZ60evZzfC4niksWSG35/+1mM9rgYJ2Am6dOvJHPbRcI5s+aXo5sTjbzdKDaXd/n2V7G5xGORzE7f6ctJfXjG3KAqHYS+zh8AR7qJ63"),c(S,"title","Open in our Online Editor"),sn.a=null,c(yt,"class","language-js"),an.a=null,c(Tt,"class","language-js"),en.a=null,c(bt,"class","language-js"),pn.a=null,c(Pt,"class","language-js"),c(C,"class","remark-container tip"),un.a=null,c(Z,"class","language-js"),dn.a=null,c(X,"class","language-js"),c(Q,"class","remark-container__title"),c(y,"target","_blank"),c(y,"href","/editor#eNp1UEFqwzAQ/IrYkw2qIWkJRrfSQ8mhUJocWuqAVWmdmCiSkGQS1/jvlR1ikpbednZHM6PpgFsLrANhJAIDobj35KV9tJbgKaCWnsS5K3QRhEMecBW4C698i0k6bovgMDROk+kwbPtC99BTqIyS6Dywzw5qCWxGQfPD4DTSgYKpKo/hHdhdnl/QR0SL+35DwUa9m9dnweUZ3ISe/KfgA7hK/tzUvzO/maPPxK5W0qFOzqcirCwXmH1xsd8602j5ZJRxSdmiUuZYpvTCW0ejzNffmMzSv3SHskyzEDlJuSRGiMa2xGgkYVc7SUwVByR+9LoS/cfc1no/sdKpYgonYPP5gkIL7CGfOlvjwar456G7Tf8DlImrIg=="),c(y,"title","Open in our Online Editor"),mn.a=null,c(_t,"class","language-js"),c(P,"class","remark-container tip"),c(at,"class","remark-container__title"),c(T,"target","_blank"),c(T,"href","/editor#eNptUMtqwzAQ/BWxJxtUQ5ISgm6lh5JDoTQ5tNQBq9I6NlEkIckkrvG/1w9ikqY3ze5oZnYa4NYCa0AYicBAKO49ea2frCV4DqilJ927SXUahEMecBO4C298j1E8TNPgMFROk2nRT9tUt9BSyI2S6DywrwZKCWxGQfNj7zTQgYLJc4/hA9jDanVBnx1aLtodBdvp3fweBdcjuAk9+U/Be3CV/KUq/2Z+NyefiKJU0qGOxlUaNpYLTL65OOydqbR8Nsq4KKtRKXPKYnrhbTujxJc/GM3ie7pDmcVJ6DhRtiZGiMrWxGgkeZmHgpichAKJH7yuREfzQXXxj6ot9WFix1PVFM7A5vMlhRrY42rqbotHq7rb+w537S/eKq2F"),c(T,"title","Open in our Online Editor"),xn.a=null,c(zt,"class","language-js"),c(_,"class","remark-container tip"),c(lt,"class","remark-container__title"),c(k,"class","remark-container exercise"),c(rt,"class","remark-container__title"),c(g,"class","remark-container exercise"),c(dt,"class","remark-container__title"),c(m,"class","remark-container exercise")},m(t,e){p(t,x,e),p(t,Ot,e),p(t,j,e),p(t,Yt,e),p(t,H,e),p(t,$t,e),p(t,M,e),p(t,Kt,e),p(t,q,e),p(t,Wt,e),p(t,D,e),p(t,Nt,e),p(t,v,e),l(v,L),l(v,vt),l(v,b),l(b,w),R(V,b,null),l(b,wt),Jt.m(Es,wt),l(b,Ct),Zt.m(Bs,Ct),p(t,Ut,e),p(t,F,e),p(t,Xt,e),p(t,O,e),p(t,Qt,e),p(t,Y,e),p(t,tn,e),p(t,$,e),p(t,nn,e),p(t,C,e),l(C,K),l(C,St),l(C,d),l(d,S),R(W,d,null),l(d,yt),sn.m(Gs,yt),l(d,Tt),an.m(As,Tt),l(d,bt),en.m(js,bt),l(d,Pt),pn.m(Hs,Pt),p(t,on,e),p(t,N,e),p(t,cn,e),p(t,J,e),p(t,ln,e),p(t,Z,e),un.m(Ms,Z),p(t,rn,e),p(t,U,e),p(t,kn,e),p(t,X,e),dn.m(qs,X),p(t,gn,e),p(t,P,e),l(P,Q),l(P,tt),l(tt,y),R(nt,tt,null),l(tt,_t),mn.m(Ds,_t),p(t,hn,e),p(t,st,e),p(t,fn,e),p(t,_,e),l(_,at),l(_,et),l(et,T),R(pt,et,null),l(et,zt),xn.m(Ls,zt),p(t,vn,e),p(t,ot,e),p(t,wn,e),p(t,ct,e),p(t,Cn,e),p(t,k,e),l(k,lt),l(k,It),l(k,Ht),R(it,Ht,null),l(k,Rt),l(k,Mt),R(ut,Mt,null),l(k,Et),p(t,Sn,e),p(t,g,e),l(g,rt),l(g,Bt),l(g,qt),R(kt,qt,null),l(g,Gt),p(t,yn,e),p(t,m,e),l(m,dt),l(m,At),l(m,Dt),R(gt,Dt,null),l(m,jt),p(t,Tn,e),p(t,mt,e),p(t,bn,e),p(t,ht,e),Pn=!0},p:Fs,i(t){Pn||(E(V.$$.fragment,t),E(W.$$.fragment,t),E(nt.$$.fragment,t),E(pt.$$.fragment,t),E(it.$$.fragment,t),E(ut.$$.fragment,t),E(kt.$$.fragment,t),E(gt.$$.fragment,t),Pn=!0)},o(t){B(V.$$.fragment,t),B(W.$$.fragment,t),B(nt.$$.fragment,t),B(pt.$$.fragment,t),B(it.$$.fragment,t),B(ut.$$.fragment,t),B(kt.$$.fragment,t),B(gt.$$.fragment,t),Pn=!1},d(t){t&&(n(x),n(Ot),n(j),n(Yt),n(H),n($t),n(M),n(Kt),n(q),n(Wt),n(D),n(Nt),n(v),n(Ut),n(F),n(Xt),n(O),n(Qt),n(Y),n(tn),n($),n(nn),n(C),n(on),n(N),n(cn),n(J),n(ln),n(Z),n(rn),n(U),n(kn),n(X),n(gn),n(P),n(hn),n(st),n(fn),n(_),n(vn),n(ot),n(wn),n(ct),n(Cn),n(k),n(Sn),n(g),n(yn),n(m),n(Tn),n(mt),n(bn),n(ht)),G(V),G(W),G(nt),G(pt),G(it),G(ut),G(kt),G(gt)}}}class Js extends Os{constructor(x){super(),Ys(this,x,null,$s,Vs,{})}}export{Js as component};
