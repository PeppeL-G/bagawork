import{s as An,n as In}from"../chunks/scheduler.UQwd20JU.js";import{S as Nn,i as Hn,e as a,s as i,c as ft,H as ht,a as s,g as l,b as r,d as u,f as gt,n as vt,h as e,o,j as p,p as c,m as xt,t as wt,k as Pt,l as Et}from"../chunks/index.i__Fl8cY.js";import{V as yt}from"../chunks/ViewApp.m6vzcyjb.js";function Ln(wn){let d,Ae="<code>EnterNumber</code>",St,T,Ie="On this page you find the documentation for the GUI Component <code>EnterNumber</code>.",Ot,A,Ne="Introduction",Mt,I,He="The <code>EnterNumber</code> component is a view in which the user can enter a number.",jt,k,N,Le="Example",_t,Se="In this example, the GUI consists of only the <code>EnterNumber</code> component, so it covers the entire screen.",H,L,m,Oe="Open in Online Editor",bt,Dt,Pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Qt,f,S,Me="Submit button",Ct,je="A <code>Button</code> can be added to the GUI to serve as a submit button (takes the user to the next page when clicked, the same as pressing the enter key in <code>EnterNumber</code>), for example:",O,M,h,De="Open in Online Editor",Tt,Vt,En=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">What's your IQ?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter IQ...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇒</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Gt,j,Qe="Adding an initial number",$t,D,Ve="The number passed as the main content to <code>EnterNumber</code> will be used as the initial number in the component.",Xt,E,Q,Ge="Example",V,G,g,$e="Open in Online Editor",At,qt,yn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token function">EnterNumber</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Jt,$,Xe="Adding a placeholder text",Rt,X,qe="The configuration method <code>placeholder()</code> can be used to show a text in the <code>EnterNumber</code> component when it&#39;s empty. Try typing a number in the example below, and see that the placeholder text disappears. If you then delete what you have typed, the placeholder text will be shown again.",zt,y,q,Je="Example",J,R,v,Re="Open in Online Editor",It,Ut,_n=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter your IQ</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,Wt,z,ze="Going to next page",Bt,U,Ue="If the <code>EnterNumber</code> contains the cursor (has focus), the user can go to next page by pressing the enter key (<code>↵</code>). The default next page is the current page.",Kt,W,We="Use the <code>pages()</code> configuration method to specify which other <code>Page</code> the user should come to depending on which number she has entered. The value should be an object, where the keys represent intervals of numbers the user can enter, and the corresponding values indicates which <code>Page</code> the user should come to if the user enters a number within that interval. The intervals can be expressed as strings the following ways:",Yt,B,Be="<li>A single number, for example:<ul><li><code>&#39;18&#39;</code>: The interval <code>18</code> to <code>18</code> (matches only <code>18</code>)</li></ul></li> <li>A minimum number and a maximum number separated by <code>_</code>, for example:<ul><li><code>&#39;0_18&#39;</code>: The interval <code>0</code> to <code>18</code> (matches all numbers between <code>0</code> and <code>18</code> (inclusive <code>0</code> and <code>18</code>))</li></ul></li>",Zt,K,Ke="When the interval consists of two numbers, one of them can be <code>X</code>. If the first number is <code>X</code>, that means no lower limit exists (i.e. <code>X</code> = <code>-∞</code>), and if the second number is <code>X</code>, that means no upper limit exists (i.e. <code>X</code> = <code>∞</code>). Examples:",Ft,Y,Ye="<li><code>&#39;X_10&#39;</code>: The interval <code>-∞</code> to <code>10</code> (inclusive <code>10</code>)</li> <li><code>&#39;23_X&#39;</code>: The interval <code>23</code> to <code>∞</code> (inclusive <code>23</code>)</li>",te,Z,Ze="When the interval consists of two numbers, you can also add <code>E</code> (short for <strong>E</strong>xclusive) after the numbers to exclude them from the interval. Examples:",ee,F,Fe="<li><code>&#39;10_20&#39;</code>: The interval <code>10</code> to <code>20</code> (inclusive <code>10</code>, inclusive <code>20</code>)</li> <li><code>&#39;10E_20&#39;</code>: The interval <code>10</code> to <code>20</code> (exclusive <code>10</code>, inclusive <code>20</code>)</li> <li><code>&#39;10_20E&#39;</code>: The interval <code>10</code> to <code>20</code> (inclusive <code>10</code>, exclusive <code>20</code>)</li> <li><code>&#39;10E_20E&#39;</code>: The interval <code>10</code> to <code>20</code> (exclusive <code>10</code>, exclusive <code>20</code>)</li> <li><code>&#39;10E_X&#39;</code>: The interval <code>10</code> to <code>∞</code> (exclusive <code>10</code>)</li>",ne,tt,tn="Use the configuration method <code>page()</code> to specify which <code>Page</code> the user should come to if none of the intervals in <code>pages()</code> matches the number the user has entered.",ae,_,et,en="Example",nt,at,x,nn="Open in Online Editor",Nt,se,bn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
			<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter your age in years</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>NegativeAgePage<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">pages</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">0_18E</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> ChildPage<span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">18_100E</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> AdultPage<span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">100_X</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> DeadPage<span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,pe,st,an="Storing entered number",oe,pt,sn="If you want to store what the user has entered in <code>EnterNumber</code> in your current <code>Page</code>, you can use the configuration method <code>p()</code>, and pass it the name of the property (as a string) the value should be stored in.",le,b,ot,pn="Example",lt,ct,w,on="Open in Online Editor",Ht,ce,Cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter your IQ</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">p</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">iq</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">onAfter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You entered </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>iq<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ie,it,ln="In the example above, what the user has entered will be stored in <code>p.iq</code>. If you want to store it in your <code>App</code> class instead, use the configuration method named <code>a()</code> in the very same way.",re,rt,cn="Handling entered number",ue,ut,rn="If you want to do something more complicated than just storing the number the user has entered, use the configuration method <code>handler()</code> to specify a function that will be called to handle the number the user has entered. In the example below, try entering a number, and then press the enter key.",de,C,dt,un="Example",kt,mt,P,dn="Open in Online Editor",Lt,ke,Tn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> EnterNumber
			<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter your IQ</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>handleNumber<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">handleNumber</span><span class="token punctuation">(</span><span class="token parameter">enteredNumber</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You entered </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>enteredNumber<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,me;return L=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),M=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`What's your IQ?\`),
			Space
			Cols(
				EnterNumber.size(1).placeholder(\`Enter IQ...\`),
				Button.text(\`⇒\`),
			),
		)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),G=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber(123)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),R=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber.placeholder(\`Enter your IQ\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),at=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
			.placeholder(\`Enter your age in years\`)
			.page(NegativeAgePage)
			.pages({
				\`0_18E\`: ChildPage,
				\`18_100E\`: AdultPage,
				\`100_X\`: DeadPage,
			})
	}
}`,x:105,y:426},{id:2,folderId:1,code:`class NegativeAgePage extends Page{
	createGui(){
		return Text.text(\`NegativeAgePage\`)
	}
}`,x:385,y:187},{id:3,folderId:1,code:`class ChildPage extends Page{
	createGui(){
		return Text.text(\`ChildPage\`)
	}
}`,x:631,y:279},{id:4,folderId:1,code:`class AdultPage extends Page{
	createGui(){
		return Text.text(\`AdultPage\`)
	}
}`,x:642,y:564},{id:5,folderId:1,code:`class DeadPage extends Page{
	createGui(){
		return Text.text(\`DeadPage\`)
	}
}`,x:387,y:674}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),ct=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	createGui(){\n		return EnterNumber.placeholder(`Enter your IQ`).p(`iq`)\n	}\n	onAfter(){\n		alert(`You entered ${p.iq}.`)\n	}\n}",x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),mt=new yt({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	createGui(){
		return EnterNumber
			.placeholder(\`Enter your IQ\`)
			.handler(p.handleNumber)
	}
	handleNumber(enteredNumber){
		alert(\`You entered \${enteredNumber}.\`)
	}
}`,x:232,y:259}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){d=a("h1"),d.innerHTML=Ae,St=i(),T=a("p"),T.innerHTML=Ie,Ot=i(),A=a("h2"),A.textContent=Ne,Mt=i(),I=a("p"),I.innerHTML=He,jt=i(),k=a("div"),N=a("div"),N.textContent=Le,_t=a("p"),_t.innerHTML=Se,H=a("div"),ft(L.$$.fragment),m=a("a"),m.textContent=Oe,bt=a("pre"),Dt=new ht(!1),Qt=i(),f=a("div"),S=a("div"),S.textContent=Me,Ct=a("p"),Ct.innerHTML=je,O=a("div"),ft(M.$$.fragment),h=a("a"),h.textContent=De,Tt=a("pre"),Vt=new ht(!1),Gt=i(),j=a("h2"),j.textContent=Qe,$t=i(),D=a("p"),D.innerHTML=Ve,Xt=i(),E=a("div"),Q=a("div"),Q.textContent=Ge,V=a("div"),ft(G.$$.fragment),g=a("a"),g.textContent=$e,At=a("pre"),qt=new ht(!1),Jt=i(),$=a("h2"),$.textContent=Xe,Rt=i(),X=a("p"),X.innerHTML=qe,zt=i(),y=a("div"),q=a("div"),q.textContent=Je,J=a("div"),ft(R.$$.fragment),v=a("a"),v.textContent=Re,It=a("pre"),Ut=new ht(!1),Wt=i(),z=a("h2"),z.textContent=ze,Bt=i(),U=a("p"),U.innerHTML=Ue,Kt=i(),W=a("p"),W.innerHTML=We,Yt=i(),B=a("ul"),B.innerHTML=Be,Zt=i(),K=a("p"),K.innerHTML=Ke,Ft=i(),Y=a("ul"),Y.innerHTML=Ye,te=i(),Z=a("p"),Z.innerHTML=Ze,ee=i(),F=a("ul"),F.innerHTML=Fe,ne=i(),tt=a("p"),tt.innerHTML=tn,ae=i(),_=a("div"),et=a("div"),et.textContent=en,nt=a("div"),ft(at.$$.fragment),x=a("a"),x.textContent=nn,Nt=a("pre"),se=new ht(!1),pe=i(),st=a("h2"),st.textContent=an,oe=i(),pt=a("p"),pt.innerHTML=sn,le=i(),b=a("div"),ot=a("div"),ot.textContent=pn,lt=a("div"),ft(ct.$$.fragment),w=a("a"),w.textContent=on,Ht=a("pre"),ce=new ht(!1),ie=i(),it=a("p"),it.innerHTML=ln,re=i(),rt=a("h2"),rt.textContent=cn,ue=i(),ut=a("p"),ut.innerHTML=rn,de=i(),C=a("div"),dt=a("div"),dt.textContent=un,kt=a("div"),ft(mt.$$.fragment),P=a("a"),P.textContent=dn,Lt=a("pre"),ke=new ht(!1),this.h()},l(t){d=s(t,"H1",{"data-svelte-h":!0}),l(d)!=="svelte-1dpshw6"&&(d.innerHTML=Ae),St=r(t),T=s(t,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1r4vkdp"&&(T.innerHTML=Ie),Ot=r(t),A=s(t,"H2",{"data-svelte-h":!0}),l(A)!=="svelte-1ukekoe"&&(A.textContent=Ne),Mt=r(t),I=s(t,"P",{"data-svelte-h":!0}),l(I)!=="svelte-1bqfe9i"&&(I.innerHTML=He),jt=r(t),k=s(t,"DIV",{class:!0});var n=u(k);N=s(n,"DIV",{class:!0,"data-svelte-h":!0}),l(N)!=="svelte-1llzxwj"&&(N.textContent=Le),_t=s(n,"P",{"data-svelte-h":!0}),l(_t)!=="svelte-iqlwcv"&&(_t.innerHTML=Se),H=s(n,"DIV",{});var fe=u(H);gt(L.$$.fragment,fe),m=s(fe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(m)!=="svelte-k33dak"&&(m.textContent=Oe),bt=s(fe,"PRE",{class:!0});var kn=u(bt);Dt=vt(kn,!1),kn.forEach(e),fe.forEach(e),n.forEach(e),Qt=r(t),f=s(t,"DIV",{class:!0});var he=u(f);S=s(he,"DIV",{class:!0,"data-svelte-h":!0}),l(S)!=="svelte-1nhj8o9"&&(S.textContent=Me),Ct=s(he,"P",{"data-svelte-h":!0}),l(Ct)!=="svelte-hd8x7x"&&(Ct.innerHTML=je),O=s(he,"DIV",{});var ge=u(O);gt(M.$$.fragment,ge),h=s(ge,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(h)!=="svelte-vk2mgc"&&(h.textContent=De),Tt=s(ge,"PRE",{class:!0});var mn=u(Tt);Vt=vt(mn,!1),mn.forEach(e),ge.forEach(e),he.forEach(e),Gt=r(t),j=s(t,"H2",{"data-svelte-h":!0}),l(j)!=="svelte-1ouj1mr"&&(j.textContent=Qe),$t=r(t),D=s(t,"P",{"data-svelte-h":!0}),l(D)!=="svelte-162n69j"&&(D.innerHTML=Ve),Xt=r(t),E=s(t,"DIV",{class:!0});var ye=u(E);Q=s(ye,"DIV",{class:!0,"data-svelte-h":!0}),l(Q)!=="svelte-1llzxwj"&&(Q.textContent=Ge),V=s(ye,"DIV",{});var ve=u(V);gt(G.$$.fragment,ve),g=s(ve,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(g)!=="svelte-i0vuo"&&(g.textContent=$e),At=s(ve,"PRE",{class:!0});var fn=u(At);qt=vt(fn,!1),fn.forEach(e),ve.forEach(e),ye.forEach(e),Jt=r(t),$=s(t,"H2",{"data-svelte-h":!0}),l($)!=="svelte-i0y99k"&&($.textContent=Xe),Rt=r(t),X=s(t,"P",{"data-svelte-h":!0}),l(X)!=="svelte-d7x3kh"&&(X.innerHTML=qe),zt=r(t),y=s(t,"DIV",{class:!0});var _e=u(y);q=s(_e,"DIV",{class:!0,"data-svelte-h":!0}),l(q)!=="svelte-1llzxwj"&&(q.textContent=Je),J=s(_e,"DIV",{});var xe=u(J);gt(R.$$.fragment,xe),v=s(xe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(v)!=="svelte-1ph8peu"&&(v.textContent=Re),It=s(xe,"PRE",{class:!0});var hn=u(It);Ut=vt(hn,!1),hn.forEach(e),xe.forEach(e),_e.forEach(e),Wt=r(t),z=s(t,"H2",{"data-svelte-h":!0}),l(z)!=="svelte-1uk7vih"&&(z.textContent=ze),Bt=r(t),U=s(t,"P",{"data-svelte-h":!0}),l(U)!=="svelte-1nott22"&&(U.innerHTML=Ue),Kt=r(t),W=s(t,"P",{"data-svelte-h":!0}),l(W)!=="svelte-10vgio3"&&(W.innerHTML=We),Yt=r(t),B=s(t,"UL",{"data-svelte-h":!0}),l(B)!=="svelte-13og88h"&&(B.innerHTML=Be),Zt=r(t),K=s(t,"P",{"data-svelte-h":!0}),l(K)!=="svelte-1eepszq"&&(K.innerHTML=Ke),Ft=r(t),Y=s(t,"UL",{"data-svelte-h":!0}),l(Y)!=="svelte-10drewx"&&(Y.innerHTML=Ye),te=r(t),Z=s(t,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-102i0se"&&(Z.innerHTML=Ze),ee=r(t),F=s(t,"UL",{"data-svelte-h":!0}),l(F)!=="svelte-1sri7hu"&&(F.innerHTML=Fe),ne=r(t),tt=s(t,"P",{"data-svelte-h":!0}),l(tt)!=="svelte-1y1ue9d"&&(tt.innerHTML=tn),ae=r(t),_=s(t,"DIV",{class:!0});var be=u(_);et=s(be,"DIV",{class:!0,"data-svelte-h":!0}),l(et)!=="svelte-1llzxwj"&&(et.textContent=en),nt=s(be,"DIV",{});var we=u(nt);gt(at.$$.fragment,we),x=s(we,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(x)!=="svelte-t4gw9"&&(x.textContent=nn),Nt=s(we,"PRE",{class:!0});var gn=u(Nt);se=vt(gn,!1),gn.forEach(e),we.forEach(e),be.forEach(e),pe=r(t),st=s(t,"H2",{"data-svelte-h":!0}),l(st)!=="svelte-51tspo"&&(st.textContent=an),oe=r(t),pt=s(t,"P",{"data-svelte-h":!0}),l(pt)!=="svelte-t86mj8"&&(pt.innerHTML=sn),le=r(t),b=s(t,"DIV",{class:!0});var Ce=u(b);ot=s(Ce,"DIV",{class:!0,"data-svelte-h":!0}),l(ot)!=="svelte-1llzxwj"&&(ot.textContent=pn),lt=s(Ce,"DIV",{});var Pe=u(lt);gt(ct.$$.fragment,Pe),w=s(Pe,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(w)!=="svelte-14u9avv"&&(w.textContent=on),Ht=s(Pe,"PRE",{class:!0});var vn=u(Ht);ce=vt(vn,!1),vn.forEach(e),Pe.forEach(e),Ce.forEach(e),ie=r(t),it=s(t,"P",{"data-svelte-h":!0}),l(it)!=="svelte-1epmhwh"&&(it.innerHTML=ln),re=r(t),rt=s(t,"H2",{"data-svelte-h":!0}),l(rt)!=="svelte-198j4nn"&&(rt.textContent=cn),ue=r(t),ut=s(t,"P",{"data-svelte-h":!0}),l(ut)!=="svelte-1s02quk"&&(ut.innerHTML=rn),de=r(t),C=s(t,"DIV",{class:!0});var Te=u(C);dt=s(Te,"DIV",{class:!0,"data-svelte-h":!0}),l(dt)!=="svelte-1llzxwj"&&(dt.textContent=un),kt=s(Te,"DIV",{});var Ee=u(kt);gt(mt.$$.fragment,Ee),P=s(Ee,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),l(P)!=="svelte-i7oz3o"&&(P.textContent=dn),Lt=s(Ee,"PRE",{class:!0});var xn=u(Lt);ke=vt(xn,!1),xn.forEach(e),Ee.forEach(e),Te.forEach(e),this.h()},h(){o(N,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNqVkEFrwzAMhf+KeacOzNg6ephvOYzSw8ZgPbQ0hXqxMsoSx9gKawn+73NaGpLddrGeJOvpQx20c1AdisYQFIpKhyBez5lzgk5M1gSRdJfbnAtPmumDted3/UWzu0s1Z0/ceiss/YhRs+/F3EZEibKpDPkAtetwNFCPElbX/b7LACSasgzEG6iHm94mHfcSLrlNJq9mq2sywR62D+h9MmJftse/1C+Wyb+19Sf5gVjiBDV/mkucU1w83zDWVLsq2UxwJgRZ+F6VmWkr/gfCOn295/TMDofR2fbxF5Dlj+Y="),o(m,"title","Open in our Online Editor"),Dt.a=null,o(bt,"class","language-js"),o(k,"class","remark-container tip"),o(S,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNqVUUFOwzAQ/Eq0F1LJsmgRB3JBBSHUAwhoJUC4UkyyoRGpbdkbtSXKmTtP5CW4KSkJ4sLFnvV6Z8bjCqQxEFWQ6BQhgqSQzgVXm7ExAa4JVeoCjyuhBCUWJeGUpKUb+YLhoDkVZJFKqwKFq6DT3PZqoWqoGWS6SNE6iJ4qyFOIhgyUXG71mgFgoLPMIT1AdNjiR4/rOQPj2XqTO7LJrujZ3qvvrW+LjvfLMv/t+k6vHE8WeZFaVOGuJWhqZIJtMfNsnPwSxvcLSQcu2OjSBpPb03jA/pw414Xbcwm6UIT2ulw+o+Uuf8NwOOCm8PcXzVPCuLngCTnnHUpBZyWRVt/an+8fnWaLfnJmsIZodDRisPH78Ukb3gyXXoz6IfZyG7vXSTZOy4L+EVwnlbjz2fP6CzZk0ww="),o(h,"title","Open in our Online Editor"),Vt.a=null,o(Tt,"class","language-js"),o(f,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNqVkEFPwzAMhf9K9E5FihDrxIHcekBoBxASO4DopIXGRRNtGiWu2FTlv5Nu2mi5cYmf7fj5kwdo56AGVJ0hKFSNDkE8HgrnBO2ZrAki6aG0JVeeNNMLa8/P+pOyq2O1ZE/ceyssfYtJc+zF0kZEibprDPkA9T5gZ6AWEla3477jACS6ug7Er1A3Z/2WdNxIuOQ2mzyZrU7JDPuy/YI+JhP2h373l/reMvmnvv0gny3y5S+2xB4qX+YShxRv784sa2pdk7xmTDOMInyt6sL0Df+DY52+XnN6su12crtN/AHqLpDN"),o(g,"title","Open in our Online Editor"),qt.a=null,o(At,"class","language-js"),o(E,"class","remark-container tip"),o(q,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNqVjzFPwzAQhf+KdVOQrApadcBbBoQygEDtACKVYuILVCSOZZ/VRpH/O06qloSti313z+/d5x6kMSB6KFuFIKCspXPsqUuNYXgk1MqxWPe5zqm0KAk3JC29yC9MbsZpThbJW800HthEHLSQ6wCBQ9XWCq0D8dHDXoG446BlM+wbDcChrSqH9Abi9ly/xzrsOJiYNnOewrJTM8O+bL+gD82E/dHv/1M/aEL77JtPtAtTyxK/x/ikGAXWtd6y7LX4+w6HI4jlasmhi/f6/sy4xSb6ac46w0vdT1alytd0Bd82Pl1QPJJiAhF24RexRZpP"),o(v,"title","Open in our Online Editor"),Ut.a=null,o(It,"class","language-js"),o(y,"class","remark-container tip"),o(et,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNqdk11rgzAUhv9KOFcWpKi12nlXtjJ6sTJYLzZmqZkeW5lViXGriP99fqBVC8K8CSd5z8eTNyQDGkVgZGCHDoIBtk/jmLyk6ygieOUYODEp4swMTG4zpBzfOGX8lZ5QmFWnJmfIExaQAH9JRyy13AxyyEVwQ99BFoPxmYHngCGLENBLOa8qABFC142Rv4MhNfFHEecHEaKiW6+ybratNz3sdnqLXm467M+JN6TeBBzZLrl8IavPTT6PfGrjuRojWFUCScOEkbKzF5AUKYut2S29vO8OT5R7P7g+YTm0r8ZC1uxNbklHebWxDPJ49nynTBY7orw6ypJUymsn8fmdLEnH90J8QtovzW+Gi3AtvJGWIqRgqIqWi7V3yph3A/5/OLgvUue8WARr0MQaMC1WNZO80humxRhTa9A0mrZ8yKEt5IpD0R8aDnWMo32JaRxt+R2HqlQcS01tOJZjHM2jT8Noqu9fRa8oNF1t/tseL8Uf4P1/17ck/t661cWmwXQg8kP+B+JMkHU="),o(x,"title","Open in our Online Editor"),se.a=null,o(Nt,"class","language-js"),o(_,"class","remark-container tip"),o(ot,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqVUMFOhDAQ/ZVm4oFNCNE1HuTGwRgOGo17cCObtNJBiVC67RCXkP67hQ0I3ry0b/pm3rzXHoTWEPeQNxIhhrwS1rKHLtGa4YlQScs87jOVUW5QEL6QMPQkPjDYjK8ZGaTWKKbwmy3IgXOZcuBCKJpKorEQv/VQSoivQlCiHvaNAxBCUxQW6RXiywnvPXaHELRXW02exdJzsbI9b5+tD8XC+31b/nV9pwjNY1u/o4l0JXL8HOUDPhKsa1rD0me+iXTAyyOfYmXUqKTwHbOeqNBQwPdNy3AYRckueh2VRxfx388I4QTx9nobQufvm9sp4Q5rv53WSVfhEvuVFolsK/pHup1vjcgfAV+YcAf3A3R5sN0="),o(w,"title","Open in our Online Editor"),ce.a=null,o(Ht,"class","language-js"),o(b,"class","remark-container tip"),o(dt,"class","remark-container__title"),o(P,"target","_blank"),o(P,"href","/editor#eNqVUE1PhDAQ/SvNxAObEKJrPNgbB2M4aDTuwY1sQpcO7kYoTRniEtL/bvkUvHlpX2fevHl9LQitgbeQlhKBQ5qLqmJPTag1wwuhkhVzuI1VTKlBQfhGwtCL+ERv01djMki1UUzhN1s0u56NlQXrQ1bmEk0F/KOFswR+44MSRbevHwAfyiyrkN6BX09477A9+KCd2mpyEIuGx8r2vH223j0W3h/r81/XD4rQPNfFEc1QjynQuUjx1K/xkp7AmrI2LHpNNjPpJJTMHUGPaNCYvh3TsuphJ4Jy5IwOhBsnL9mXNRv77KpdMW2Q/ObowwX49nbrQ+Puu/spnB0WzjCtQ1rlElZfURbKOqd/BLNz1IDc4SULE/ZgfwBdJ8jG"),o(P,"title","Open in our Online Editor"),ke.a=null,o(Lt,"class","language-js"),o(C,"class","remark-container tip")},m(t,n){p(t,d,n),p(t,St,n),p(t,T,n),p(t,Ot,n),p(t,A,n),p(t,Mt,n),p(t,I,n),p(t,jt,n),p(t,k,n),c(k,N),c(k,_t),c(k,H),xt(L,H,null),c(H,m),c(H,bt),Dt.m(Pn,bt),p(t,Qt,n),p(t,f,n),c(f,S),c(f,Ct),c(f,O),xt(M,O,null),c(O,h),c(O,Tt),Vt.m(En,Tt),p(t,Gt,n),p(t,j,n),p(t,$t,n),p(t,D,n),p(t,Xt,n),p(t,E,n),c(E,Q),c(E,V),xt(G,V,null),c(V,g),c(V,At),qt.m(yn,At),p(t,Jt,n),p(t,$,n),p(t,Rt,n),p(t,X,n),p(t,zt,n),p(t,y,n),c(y,q),c(y,J),xt(R,J,null),c(J,v),c(J,It),Ut.m(_n,It),p(t,Wt,n),p(t,z,n),p(t,Bt,n),p(t,U,n),p(t,Kt,n),p(t,W,n),p(t,Yt,n),p(t,B,n),p(t,Zt,n),p(t,K,n),p(t,Ft,n),p(t,Y,n),p(t,te,n),p(t,Z,n),p(t,ee,n),p(t,F,n),p(t,ne,n),p(t,tt,n),p(t,ae,n),p(t,_,n),c(_,et),c(_,nt),xt(at,nt,null),c(nt,x),c(nt,Nt),se.m(bn,Nt),p(t,pe,n),p(t,st,n),p(t,oe,n),p(t,pt,n),p(t,le,n),p(t,b,n),c(b,ot),c(b,lt),xt(ct,lt,null),c(lt,w),c(lt,Ht),ce.m(Cn,Ht),p(t,ie,n),p(t,it,n),p(t,re,n),p(t,rt,n),p(t,ue,n),p(t,ut,n),p(t,de,n),p(t,C,n),c(C,dt),c(C,kt),xt(mt,kt,null),c(kt,P),c(kt,Lt),ke.m(Tn,Lt),me=!0},p:In,i(t){me||(wt(L.$$.fragment,t),wt(M.$$.fragment,t),wt(G.$$.fragment,t),wt(R.$$.fragment,t),wt(at.$$.fragment,t),wt(ct.$$.fragment,t),wt(mt.$$.fragment,t),me=!0)},o(t){Pt(L.$$.fragment,t),Pt(M.$$.fragment,t),Pt(G.$$.fragment,t),Pt(R.$$.fragment,t),Pt(at.$$.fragment,t),Pt(ct.$$.fragment,t),Pt(mt.$$.fragment,t),me=!1},d(t){t&&(e(d),e(St),e(T),e(Ot),e(A),e(Mt),e(I),e(jt),e(k),e(Qt),e(f),e(Gt),e(j),e($t),e(D),e(Xt),e(E),e(Jt),e($),e(Rt),e(X),e(zt),e(y),e(Wt),e(z),e(Bt),e(U),e(Kt),e(W),e(Yt),e(B),e(Zt),e(K),e(Ft),e(Y),e(te),e(Z),e(ee),e(F),e(ne),e(tt),e(ae),e(_),e(pe),e(st),e(oe),e(pt),e(le),e(b),e(ie),e(it),e(re),e(rt),e(ue),e(ut),e(de),e(C)),Et(L),Et(M),Et(G),Et(R),Et(at),Et(ct),Et(mt)}}}class jn extends Nn{constructor(d){super(),Hn(this,d,null,Ln,An,{})}}export{jn as component};
