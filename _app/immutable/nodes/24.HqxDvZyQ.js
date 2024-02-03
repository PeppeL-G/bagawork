import{s as Et,n as jt}from"../chunks/scheduler.UQwd20JU.js";import{S as qt,i as At,e as a,s as l,H as Mt,c as $t,a as o,g as p,b as c,d as $,n as bt,h as e,f as Rt,o as q,j as s,p as S,m as Vt,t as Gt,k as zt,l as Dt}from"../chunks/index.i__Fl8cY.js";import{V as Ut}from"../chunks/ViewApp.m6vzcyjb.js";function Ot(St){let u,ot="<code>Paper</code>",R,d,pt="On this page you find the documentation for the GUI Component <code>Paper</code>.",V,k,lt="Introduction",G,m,ct="The <code>Paper</code> component is a view that you yourself specify what it should look like by drawing on it. The component also supports redrawing itself multiple times per second (without the user leaving the page), so it&#39;s a perfect view for visualizing games!",z,i,h,it="Example",I,ut="Example showing what the <code>Paper</code> component can look like when shown on the screen.",B,D,It=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">aqua</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			PaperRectangle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,A,f,U,r,g,rt="Tip",E,dt="Often when using the <code>Paper</code> component, you want it to have some specific size, so putting it is very common to put it in a <code>Box</code> component.",j,O,Bt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token comment">// The height of the paper will always</span>
		<span class="token comment">// be 3 times greater than the width.</span>
		<span class="token keyword">return</span> Box<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
			Paper<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">aqua</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				PaperRectangle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				PaperCircle<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				PaperLine<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gold</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Y,v,kt="<code>left()</code> - Setting the left coordinate",N,P,mt="Use the configuration method <code>left()</code> to specify the coordinate that should represent the left side of the <code>Paper</code> component. Pass it the coordinate as a number.",W,x,ht="If you don&#39;t call this configuration method, <code>0</code> will be used as the coordinate of the left side of the <code>Paper</code> component.",X,_,ft="<code>right()</code> - Setting the right coordinate",F,H,gt="Use the configuration method <code>right()</code> to specify the coordinate that should represent the right side of the <code>Paper</code> component. Pass it the coordinate as a number.",J,T,vt="If you don&#39;t call this configuration method, <code>0</code> will be used as the coordinate of the right side of the <code>Paper</code> component.",K,C,Pt="<code>top()</code> - Setting the top coordinate",Q,w,xt="Use the configuration method <code>top()</code> to specify the coordinate that should represent the top side of the <code>Paper</code> component. Pass it the coordinate as a number.",Z,L,_t="If you don&#39;t call this configuration method, <code>0</code> will be used as the coordinate of the top side of the <code>Paper</code> component.",tt,y,Ht="<code>bottom()</code> - Setting the bottom coordinate",nt,M,Tt="Use the configuration method <code>bottom()</code> to specify the coordinate that should represent the bottom side of the <code>Paper</code> component. Pass it the coordinate as a number.",et,b,Ct="If you don&#39;t call this configuration method, <code>1</code> will be used as the coordinate of the bottom side of the <code>Paper</code> component.",st;return f=new Ut({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`}]}}}),{c(){u=a("h1"),u.innerHTML=ot,R=l(),d=a("p"),d.innerHTML=pt,V=l(),k=a("h2"),k.textContent=lt,G=l(),m=a("p"),m.innerHTML=ct,z=l(),i=a("div"),h=a("div"),h.textContent=it,I=a("p"),I.innerHTML=ut,B=a("pre"),D=new Mt(!1),A=a("div"),$t(f.$$.fragment),U=l(),r=a("div"),g=a("div"),g.textContent=rt,E=a("p"),E.innerHTML=dt,j=a("pre"),O=new Mt(!1),Y=l(),v=a("h2"),v.innerHTML=kt,N=l(),P=a("p"),P.innerHTML=mt,W=l(),x=a("p"),x.innerHTML=ht,X=l(),_=a("h2"),_.innerHTML=ft,F=l(),H=a("p"),H.innerHTML=gt,J=l(),T=a("p"),T.innerHTML=vt,K=l(),C=a("h2"),C.innerHTML=Pt,Q=l(),w=a("p"),w.innerHTML=xt,Z=l(),L=a("p"),L.innerHTML=_t,tt=l(),y=a("h2"),y.innerHTML=Ht,nt=l(),M=a("p"),M.innerHTML=Tt,et=l(),b=a("p"),b.innerHTML=Ct,this.h()},l(t){u=o(t,"H1",{"data-svelte-h":!0}),p(u)!=="svelte-ku71e1"&&(u.innerHTML=ot),R=c(t),d=o(t,"P",{"data-svelte-h":!0}),p(d)!=="svelte-1261pug"&&(d.innerHTML=pt),V=c(t),k=o(t,"H2",{"data-svelte-h":!0}),p(k)!=="svelte-1ukekoe"&&(k.textContent=lt),G=c(t),m=o(t,"P",{"data-svelte-h":!0}),p(m)!=="svelte-1blb60t"&&(m.innerHTML=ct),z=c(t),i=o(t,"DIV",{class:!0});var n=$(i);h=o(n,"DIV",{class:!0,"data-svelte-h":!0}),p(h)!=="svelte-1llzxwj"&&(h.textContent=it),I=o(n,"P",{"data-svelte-h":!0}),p(I)!=="svelte-795jt7"&&(I.innerHTML=ut),B=o(n,"PRE",{class:!0});var wt=$(B);D=bt(wt,!1),wt.forEach(e),A=o(n,"DIV",{});var Lt=$(A);Rt(f.$$.fragment,Lt),Lt.forEach(e),n.forEach(e),U=c(t),r=o(t,"DIV",{class:!0});var at=$(r);g=o(at,"DIV",{class:!0,"data-svelte-h":!0}),p(g)!=="svelte-iwdg8s"&&(g.textContent=rt),E=o(at,"P",{"data-svelte-h":!0}),p(E)!=="svelte-13tmhvo"&&(E.innerHTML=dt),j=o(at,"PRE",{class:!0});var yt=$(j);O=bt(yt,!1),yt.forEach(e),at.forEach(e),Y=c(t),v=o(t,"H2",{"data-svelte-h":!0}),p(v)!=="svelte-1qtsvto"&&(v.innerHTML=kt),N=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-b1ig4p"&&(P.innerHTML=mt),W=c(t),x=o(t,"P",{"data-svelte-h":!0}),p(x)!=="svelte-y93zzl"&&(x.innerHTML=ht),X=c(t),_=o(t,"H2",{"data-svelte-h":!0}),p(_)!=="svelte-1jty2u6"&&(_.innerHTML=ft),F=c(t),H=o(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-8p6tq7"&&(H.innerHTML=gt),J=c(t),T=o(t,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1u7a86y"&&(T.innerHTML=vt),K=c(t),C=o(t,"H2",{"data-svelte-h":!0}),p(C)!=="svelte-1eoqqa4"&&(C.innerHTML=Pt),Q=c(t),w=o(t,"P",{"data-svelte-h":!0}),p(w)!=="svelte-rkrryt"&&(w.innerHTML=xt),Z=c(t),L=o(t,"P",{"data-svelte-h":!0}),p(L)!=="svelte-vqf83v"&&(L.innerHTML=_t),tt=c(t),y=o(t,"H2",{"data-svelte-h":!0}),p(y)!=="svelte-fnxsqw"&&(y.innerHTML=Ht),nt=c(t),M=o(t,"P",{"data-svelte-h":!0}),p(M)!=="svelte-1yvbo8l"&&(M.innerHTML=Tt),et=c(t),b=o(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-tcoos2"&&(b.innerHTML=Ct),this.h()},h(){q(h,"class","remark-container__title"),D.a=null,q(B,"class","language-js"),q(i,"class","remark-container tip"),q(g,"class","remark-container__title"),O.a=null,q(j,"class","language-js"),q(r,"class","remark-container tip")},m(t,n){s(t,u,n),s(t,R,n),s(t,d,n),s(t,V,n),s(t,k,n),s(t,G,n),s(t,m,n),s(t,z,n),s(t,i,n),S(i,h),S(i,I),S(i,B),D.m(It,B),S(i,A),Vt(f,A,null),s(t,U,n),s(t,r,n),S(r,g),S(r,E),S(r,j),O.m(Bt,j),s(t,Y,n),s(t,v,n),s(t,N,n),s(t,P,n),s(t,W,n),s(t,x,n),s(t,X,n),s(t,_,n),s(t,F,n),s(t,H,n),s(t,J,n),s(t,T,n),s(t,K,n),s(t,C,n),s(t,Q,n),s(t,w,n),s(t,Z,n),s(t,L,n),s(t,tt,n),s(t,y,n),s(t,nt,n),s(t,M,n),s(t,et,n),s(t,b,n),st=!0},p:jt,i(t){st||(Gt(f.$$.fragment,t),st=!0)},o(t){zt(f.$$.fragment,t),st=!1},d(t){t&&(e(u),e(R),e(d),e(V),e(k),e(G),e(m),e(z),e(i),e(U),e(r),e(Y),e(v),e(N),e(P),e(W),e(x),e(X),e(_),e(F),e(H),e(J),e(T),e(K),e(C),e(Q),e(w),e(Z),e(L),e(tt),e(y),e(nt),e(M),e(et),e(b)),Dt(f)}}}class Xt extends qt{constructor(u){super(),At(this,u,null,Ot,Et,{})}}export{Xt as component};
