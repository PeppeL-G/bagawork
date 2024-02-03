import{s as yn,n as Sn}from"../chunks/scheduler.UQwd20JU.js";import{S as bn,i as Bn,e as a,s as u,c as nt,H as et,a as s,g as l,b as i,d as r,f as at,n as st,h as n,o,j as p,p as c,m as pt,t as ot,k as lt,l as ct}from"../chunks/index.i__Fl8cY.js";import{V as ut}from"../chunks/ViewApp.m6vzcyjb.js";function _n(hn){let d,Ut="5. Dynamically sized paper",it,y,Wt="This tutorial will teach you how to dynamically size the <code>Paper</code> component.",rt,S,Rt="Maximizing the <code>Paper</code> component",dt,b,Ft="If you want the <code>Paper</code> component to occupy the entire screen, then simply return it as your page&#39;s root component:",kt,x,B,Nt="Example",_,E,k,Zt="Open in Online Editor",K,gt,xn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ft,A,qt="But as mentioned in the previous tutorial, you don&#39;t know how wide and tall the paper will be, because you don&#39;t know the sizes of the screens your users have on their devices, so drawing something on it will be hard. But <em>hard</em> does not mean impossible.",mt,H,Qt="Setting the coordinate system",ht,T,Kt="On the <code>Paper</code> component, you can use the configuration method <code>coordinateSystem(width, height)</code> to specify the width and the height of the coordinate system, no matter which size the screen has. For example, by setting the width of the coordinate system to <code>5</code>, the right side of the screen will have x = <code>5</code>, and any <code>Paper</code> child positioned at x = <code>5</code> will be drawn at the right side.",xt,v,I,Xt="Example",M,Y,g,$t="Open in Online Editor",X,vt,vn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,O,Jt="You can verify the new coordinate system is used by using the configuration method <code>showCoordinates()</code>.",wt,P,z,tn="Example",L,D,f,nn="Open in Online Editor",$,Ct,Pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,yt,j,en="Using an aspect ratio",St,V,an="One confusing thing with the previous solution is that one unit in the x direction is not equally big as one unit in the y direction. But, by using the <code>Paper</code> component in a <code>Box</code> with specific aspect ratio, we can get a maximized <code>Paper</code> with that aspect ratio, and also use a coordinate system with that aspect ratio.",bt,w,G,sn="Example",U,W,m,pn="Open in Online Editor",J,Bt,wn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperLine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,R,on="For example, let&#39;s say you want to draw a tic-tac-toe game on a <code>Paper</code> component. Then you want to maximize the paper as a square (i.e. width = height), and you want the square to consist of 3 * 3 smaller squares, so using the aspect ratio 3:3 is perfect!",Et,C,F,ln="Example",N,Z,h,cn="Open in Online Editor",tt,At,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">showCoordinates</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">coordinateSystem</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,q,un="That's it!",Tt,Q,rn="Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!",It;return E=new ut({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),Y=new ut({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Paper.backgroundColor(\`gold\`).coordinateSystem(5, 5).children(
			PaperLine.start(1, 1).end(4, 4),
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
	
}`}]}}}),D=new ut({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Paper.showCoordinates().backgroundColor(\`gold\`).coordinateSystem(5, 5).children(
			PaperLine.start(1, 1).end(4, 4),
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
	
}`}]}}}),W=new ut({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.backgroundColor(\`red\`).aspectRatio(5, 10).child(
			Paper.showCoordinates().backgroundColor(\`gold\`).coordinateSystem(5, 10).children(
				PaperLine.start(1, 1).end(4, 9),
			)
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
	
}`}]}}}),Z=new ut({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Box.backgroundColor(\`red\`).aspectRatio(3, 3).child(
			Paper.showCoordinates().backgroundColor(\`gold\`).coordinateSystem(3, 3)
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
	
}`}]}}}),{c(){d=a("h1"),d.textContent=Ut,it=u(),y=a("p"),y.innerHTML=Wt,rt=u(),S=a("h2"),S.innerHTML=Rt,dt=u(),b=a("p"),b.innerHTML=Ft,kt=u(),x=a("div"),B=a("div"),B.textContent=Nt,_=a("div"),nt(E.$$.fragment),k=a("a"),k.textContent=Zt,K=a("pre"),gt=new et(!1),ft=u(),A=a("p"),A.innerHTML=qt,mt=u(),H=a("h2"),H.textContent=Qt,ht=u(),T=a("p"),T.innerHTML=Kt,xt=u(),v=a("div"),I=a("div"),I.textContent=Xt,M=a("div"),nt(Y.$$.fragment),g=a("a"),g.textContent=$t,X=a("pre"),vt=new et(!1),Pt=u(),O=a("p"),O.innerHTML=Jt,wt=u(),P=a("div"),z=a("div"),z.textContent=tn,L=a("div"),nt(D.$$.fragment),f=a("a"),f.textContent=nn,$=a("pre"),Ct=new et(!1),yt=u(),j=a("h2"),j.textContent=en,St=u(),V=a("p"),V.innerHTML=an,bt=u(),w=a("div"),G=a("div"),G.textContent=sn,U=a("div"),nt(W.$$.fragment),m=a("a"),m.textContent=pn,J=a("pre"),Bt=new et(!1),_t=u(),R=a("p"),R.innerHTML=on,Et=u(),C=a("div"),F=a("div"),F.textContent=ln,N=a("div"),nt(Z.$$.fragment),h=a("a"),h.textContent=cn,tt=a("pre"),At=new et(!1),Ht=u(),q=a("h2"),q.textContent=un,Tt=u(),Q=a("p"),Q.textContent=rn,this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-w1utg9"&&(d.textContent=Ut),it=i(t),y=s(t,"P",{"data-svelte-h":!0}),l(y)!=="svelte-pmy64i"&&(y.innerHTML=Wt),rt=i(t),S=s(t,"H2",{"data-svelte-h":!0}),l(S)!=="svelte-l0tkf2"&&(S.innerHTML=Rt),dt=i(t),b=s(t,"P",{"data-svelte-h":!0}),l(b)!=="svelte-1drf9cw"&&(b.innerHTML=Ft),kt=i(t),x=s(t,"DIV",{class:!0});var e=r(x);B=s(e,"DIV",{class:!0,"data-svelte-h":!0}),l(B)!=="svelte-1llzxwj"&&(B.textContent=Nt),_=s(e,"DIV",{});var Mt=r(_);at(E.$$.fragment,Mt),k=s(Mt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(k)!=="svelte-1d34aai"&&(k.textContent=Zt),K=s(Mt,"PRE",{class:!0});var dn=r(K);gt=st(dn,!1),dn.forEach(n),Mt.forEach(n),e.forEach(n),ft=i(t),A=s(t,"P",{"data-svelte-h":!0}),l(A)!=="svelte-1n7oo5u"&&(A.innerHTML=qt),mt=i(t),H=s(t,"H2",{"data-svelte-h":!0}),l(H)!=="svelte-6ivoce"&&(H.textContent=Qt),ht=i(t),T=s(t,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1295iui"&&(T.innerHTML=Kt),xt=i(t),v=s(t,"DIV",{class:!0});var Dt=r(v);I=s(Dt,"DIV",{class:!0,"data-svelte-h":!0}),l(I)!=="svelte-1llzxwj"&&(I.textContent=Xt),M=s(Dt,"DIV",{});var Yt=r(M);at(Y.$$.fragment,Yt),g=s(Yt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-gm40p"&&(g.textContent=$t),X=s(Yt,"PRE",{class:!0});var kn=r(X);vt=st(kn,!1),kn.forEach(n),Yt.forEach(n),Dt.forEach(n),Pt=i(t),O=s(t,"P",{"data-svelte-h":!0}),l(O)!=="svelte-19yftzg"&&(O.innerHTML=Jt),wt=i(t),P=s(t,"DIV",{class:!0});var jt=r(P);z=s(jt,"DIV",{class:!0,"data-svelte-h":!0}),l(z)!=="svelte-1llzxwj"&&(z.textContent=tn),L=s(jt,"DIV",{});var Ot=r(L);at(D.$$.fragment,Ot),f=s(Ot,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(f)!=="svelte-1u3cp7"&&(f.textContent=nn),$=s(Ot,"PRE",{class:!0});var gn=r($);Ct=st(gn,!1),gn.forEach(n),Ot.forEach(n),jt.forEach(n),yt=i(t),j=s(t,"H2",{"data-svelte-h":!0}),l(j)!=="svelte-8sqh9o"&&(j.textContent=en),St=i(t),V=s(t,"P",{"data-svelte-h":!0}),l(V)!=="svelte-e0r6ze"&&(V.innerHTML=an),bt=i(t),w=s(t,"DIV",{class:!0});var Vt=r(w);G=s(Vt,"DIV",{class:!0,"data-svelte-h":!0}),l(G)!=="svelte-1llzxwj"&&(G.textContent=sn),U=s(Vt,"DIV",{});var zt=r(U);at(W.$$.fragment,zt),m=s(zt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-j2e0cc"&&(m.textContent=pn),J=s(zt,"PRE",{class:!0});var fn=r(J);Bt=st(fn,!1),fn.forEach(n),zt.forEach(n),Vt.forEach(n),_t=i(t),R=s(t,"P",{"data-svelte-h":!0}),l(R)!=="svelte-jr7twe"&&(R.innerHTML=on),Et=i(t),C=s(t,"DIV",{class:!0});var Gt=r(C);F=s(Gt,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-1llzxwj"&&(F.textContent=ln),N=s(Gt,"DIV",{});var Lt=r(N);at(Z.$$.fragment,Lt),h=s(Lt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-utb0zv"&&(h.textContent=cn),tt=s(Lt,"PRE",{class:!0});var mn=r(tt);At=st(mn,!1),mn.forEach(n),Lt.forEach(n),Gt.forEach(n),Ht=i(t),q=s(t,"H2",{"data-svelte-h":!0}),l(q)!=="svelte-p2uhy5"&&(q.textContent=un),Tt=i(t),Q=s(t,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-1xdskuy"&&(Q.textContent=rn),this.h()},h(){o(B,"class","remark-container__title"),o(k,"target","_blank"),o(k,"href","/editor#eNrFUsFqg0AQ/ZVlLlWQYCyF4qWYUkoOLaEJtKEJuNXRhJhd2V1pgvjvXWNio5hgTz0oM+68eW/fMweapuDmEPAQwYUgoVKSl72XpgR3Clkoia7zBVuo8gkEUoVTRYWa0BgNszpRAlUmGKkPyq9FBSqgsCDiSYhCgvuZwzoEd2gBo9uS8QABC3gUSVQf4Nqneq7rYmlBqvc1kNWycdU0hNf8tfiyaal/ztZt3ROaohh80WATC56x8JEnXBh+rIl8s3EXC3bgOrYWuQf31q4FznCbJnp5Q2hDmyc348gLs+SKQM5GGHHx6+sZ9xX5b/xbDoLVOgkFMuOIVNOUBmidupkmHCj9MnxPINnzjBxsJGpFGRneP/im1Y3UZmRb1kHQHlyoUab0HY40r9w3B6U3BsuSxLR6wuYo++FOJ2bDJM68SKHocrD8E6tsnFY2T0xDvBj/O5n3FVU3sgxHEM1+OZOGY0O727Dm0F2PIafPJufCpnOFf8lkWfwA8oekuQ=="),o(k,"title","Open in our Online Editor"),gt.a=null,o(K,"class","language-js"),o(x,"class","remark-container tip"),o(I,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNrFUl1LwzAU/SvhvthCKOt0IH2RKiKCiriBDis0trddsUtKkuLG6H83Wd20s4755ENDPu65555zugJWVRCsIBEpQgBJyZQit8uwqgguNPJUEbNfRTzS9kskMo1jzaS+Zzk6bvuiJepacrJ9sLdNC2qgoZCJMkWpIHheQZFC4FPgbG4Z1xCgILJMoX6CYLDZT82+eaFQmX4dZNvsuj10Bt/yb4e3h53pr+pid+57VqH0XlnylktR8/RClEI6cW6IYtdLhJBpwa3wpdI4d0aUjMz1rChTidxpW0V63eWm4OgpO4fjU+K7nhnDOaHkxKVtndvxhsICguHAiF5CcDzYCp7gvCoNY0d4R2uo3q6zMK3LPYIFP8dMyK+cvnHvseNBvKuf8sYVS5BuThND6GmzOHEokSxFTdaxED1jnPinZ7FL+5HG3HrOewh2CyN9Xmuj4ZPmTpgsrDcOr8vSpQfCpqgOw/UFZC0MM42yz0H7Z7fZDHeyueQGEub438k8zpg+UjYcSQz775l0HPMH/YZ1i0YHFA0P6TT8pdP3Cf+SyUvzASUev3g="),o(g,"title","Open in our Online Editor"),vt.a=null,o(X,"class","language-js"),o(v,"class","remark-container tip"),o(z,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNrFUtFKwzAU/ZVwX0whlHU6kL5IFRFBZbiBihMW29ut2CUlSdnG6L+brFrXWWU++dCQm9xzz8k53QAvCgg3EMsEIYQ451qT23VUFARXBkWiid1vJmJi3Bcr5AZHhisz5DOkXn1jFJpSCdJcuNOqBlVQMUhlnqDSED5vIEsgDBgIvnCMWwgwkGmq0TxC2PvcP9l99cKgsPNayHrYdV20hDf8jXhX7Km/KrN93UNeoPL1XC4vpFRJJmybpp7/yuO3mZKlSC5kLhWdziz11PPjpmu01gYXdMDIwB7PszxRKGg9fGK2c28ygb52ymjASOD5Vhg9YeTEY3Wf13KLwQrCfs/asIbwuNdYMMZFkTtdu1a0Xh/pt+s0Ssr8FwukOMdUqq/kdrh/MeheLvX3540KHiP7rMaW0Dd2odNIIVnLkmyDImbOBQlOz6Ye60Zac8uF6CDYb5yY89LYN3zQ3EmbhfOGijLPPXYg7An1YbiugJyFUWpQdTno/vU6m/5eNpfCQqIZ/ncyD3NujrQLRxHL/nMmLceCXrdh7abBAU39Qyb1f5i0q/AvmbxU74iGxjM="),o(f,"title","Open in our Online Editor"),Ct.a=null,o($,"class","language-js"),o(P,"class","remark-container tip"),o(G,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNrFU9Fq2zAU/RWhl0kgjJ2usPmlOKWUwjZGU1hLU4hmXSemjiQkmSYE//ukunGjNC3ZUx9srq17zrn3HHuDudY43+BSCcA5LhtuLfq5LrRGsHIghUW+3kzl1IWrNMAdTBw37jefA6H9iTPgWiPRcBDedj2owx3DlWoEGIvz+w2uBc4zhiVfBsVnCGZYVZUFd4vzdFvf+bp7YFh7vgjZk131D9Hgg/4wfHjYm/6yrffnHqtV8peXj3OjWinOVaMMmRkQM5pwq6F019zVipwylKU0KRd1I0hPMPVyGkxiF+rpXCkjauklLKFv+eZ+bE9YDl2TtXWwjFgNyIH4hfpHLSGxYTGS+U6a+L3IV4a+U7btpH1BI9cZXuF8lHo71zg/SQcrb2CpmzDjrqWRi4V9vKoK0TYfWKnkGCplXr+AHe0PjL5WT/btphPNSxi2ufGCifM3MisMoLVq0XPgyC24RNm3s9nr5jHSG90upT1kZdw4dePW+R1eZH4pn0vwhsi2aSg7EnYH9jjc9oRGJilZVA7MIQfDP9NnM9rL5kJ6SDGHz07mz4K7LzaEY5BXfz+TyLEsPWxY3HR6RNPoGKbRO0y7E/5PJg/dP2V4380="),o(m,"title","Open in our Online Editor"),Bt.a=null,o(J,"class","language-js"),o(w,"class","remark-container tip"),o(F,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNrFks1q4zAUhV9F3M3YIEx+KBRvBqeU0kWHoSlMS1OIal0npo6ukGSaEPzuI1eNJ86kJV11ESNZOudcfydbEFpDuoWcJEIKeSWsZTebTGuGa4dKWubX25maufaXGxQOp04Y91ssMIrDiTPoaqNYd9C+bYKogYZDQZVEYyF93EIpIR1yUGLVJr5JgAMVhUV3D+lgt37w6+aJg/Z+PWUwuw6b3uBdfjd8uzmY/qouD+ee0Dp5FvnLwlCt5AVVZKK5QTmPE2E15u5WuJKiMWfjOMmXZSWjoJ/5NI0msUt6vSAyslQ+wUbx/3YLP7X3y7tb0411uAqmwS3uYeOwhnQ08Dw2kI4HHYs7XOmqTdln0sOQ2ZfrIpN19QkLUhMsyPyrcC/7E1K39GoDAYOqgzDVIke+2935wMT5RzTPDLIN1eytMeaWQrHh+c95zI8rPap6pY4EHF6cuUnt/De8x/wiT7ZlE6m6qmJ+ouwB7Wm63Uncg0QqKxyaYwTbP33oZnTQzaXykmyB393Mn6VwP2xbjmE+/eNOesSGg+PA+pfOTrg0OsVp9IHT/oRf6eSp+QtW/Mrr"),o(h,"title","Open in our Online Editor"),At.a=null,o(tt,"class","language-js"),o(C,"class","remark-container tip")},m(t,e){p(t,d,e),p(t,it,e),p(t,y,e),p(t,rt,e),p(t,S,e),p(t,dt,e),p(t,b,e),p(t,kt,e),p(t,x,e),c(x,B),c(x,_),pt(E,_,null),c(_,k),c(_,K),gt.m(xn,K),p(t,ft,e),p(t,A,e),p(t,mt,e),p(t,H,e),p(t,ht,e),p(t,T,e),p(t,xt,e),p(t,v,e),c(v,I),c(v,M),pt(Y,M,null),c(M,g),c(M,X),vt.m(vn,X),p(t,Pt,e),p(t,O,e),p(t,wt,e),p(t,P,e),c(P,z),c(P,L),pt(D,L,null),c(L,f),c(L,$),Ct.m(Pn,$),p(t,yt,e),p(t,j,e),p(t,St,e),p(t,V,e),p(t,bt,e),p(t,w,e),c(w,G),c(w,U),pt(W,U,null),c(U,m),c(U,J),Bt.m(wn,J),p(t,_t,e),p(t,R,e),p(t,Et,e),p(t,C,e),c(C,F),c(C,N),pt(Z,N,null),c(N,h),c(N,tt),At.m(Cn,tt),p(t,Ht,e),p(t,q,e),p(t,Tt,e),p(t,Q,e),It=!0},p:Sn,i(t){It||(ot(E.$$.fragment,t),ot(Y.$$.fragment,t),ot(D.$$.fragment,t),ot(W.$$.fragment,t),ot(Z.$$.fragment,t),It=!0)},o(t){lt(E.$$.fragment,t),lt(Y.$$.fragment,t),lt(D.$$.fragment,t),lt(W.$$.fragment,t),lt(Z.$$.fragment,t),It=!1},d(t){t&&(n(d),n(it),n(y),n(rt),n(S),n(dt),n(b),n(kt),n(x),n(ft),n(A),n(mt),n(H),n(ht),n(T),n(xt),n(v),n(Pt),n(O),n(wt),n(P),n(yt),n(j),n(St),n(V),n(bt),n(w),n(_t),n(R),n(Et),n(C),n(Ht),n(q),n(Tt),n(Q)),ct(E),ct(Y),ct(D),ct(W),ct(Z)}}}class Tn extends bn{constructor(d){super(),Bn(this,d,null,_n,yn,{})}}export{Tn as component};
