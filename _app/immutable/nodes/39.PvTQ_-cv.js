import{s as nn,n as sn}from"../chunks/scheduler.UQwd20JU.js";import{S as an,i as tn,e as p,s as Q,c as pn,H as g,a as e,g as j,b as Z,d as u,f as en,n as m,h as t,o,j as v,m as on,p as i,t as cn,k as ln,l as un}from"../chunks/index.i__Fl8cY.js";import{V as kn}from"../chunks/ViewApp.m6vzcyjb.js";function rn(q){let c,U="Guess Name",y,k,L="This example shows how to create an app where the user should guess on a name the app is thinking of.",_,a,r,l,b="Open in Online Editor",d,E,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>enteredName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;guessed name></span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EnterGuess</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,f,I,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EnterGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I'm thinking of either the name Lily, Peter, Alice or Bob. Guess which one!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">placeholder</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Enter name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">aVar</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">enteredName</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>InvalidGuess<span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">pages</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
						<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> NoGuessEntered<span class="token punctuation">,</span>
						<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Lily</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> CorrectGuess<span class="token punctuation">,</span>
						<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Peter</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> WrongGuess<span class="token punctuation">,</span>
						<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> WrongGuess<span class="token punctuation">,</span>
						<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token operator">:</span> WrongGuess<span class="token punctuation">,</span>
					<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">⇨</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,x,T,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CorrectGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That</span><span class="token template-punctuation string">&#96;</span></span>s right<span class="token punctuation">,</span> $<span class="token punctuation">&#123;</span>a<span class="token punctuation">.</span>enteredName<span class="token punctuation">&#125;</span> is the one <span class="token constant">I</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">m thinking of!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good work!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h,C,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">NoGuessEntered</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No... That's not a name...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Guess again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EnterGuess<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I give up</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GiveUp<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,G,P,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>enteredName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is totally wrong! It's not one of the names I mentioned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Guess again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EnterGuess<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I give up</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GiveUp<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,S,R,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">WrongGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>enteredName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is wrong.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Guess again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EnterGuess<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">I give up</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>GiveUp<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,w,N,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GiveUp</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game Over!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Correct name was Lily.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,B;return r=new kn({props:{project:{app:{code:`class MyApp extends App{
	onBefore(){
		a.enteredName = \`<guessed name>\`
	}
	createStartPage(){
		return new EnterGuess()
	}
}`},folders:[{id:1,name:"Start",offsetX:346,offsetY:97}],pages:[{id:1,folderId:1,code:`class EnterGuess extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`I'm thinking of either the name Lily, Peter, Alice or Bob. Guess which one!\`),
			Space
			Space
			Cols(
				EnterText.text()
					.size(1)
					.placeholder(\`Enter name\`)
					.aVar(\`enteredName\`)
					.page(InvalidGuess)
					.pages({
						\`\`: NoGuessEntered,
						\`Lily\`: CorrectGuess,
						\`Peter\`: WrongGuess,
						\`Alice\`: WrongGuess,
						\`Bob\`: WrongGuess,
					}),
				Button.text(\`⇨\`),
			),
		)
	}
}`,x:1,y:208},{id:6,folderId:1,code:`class CorrectGuess extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`That\`s right, \${a.enteredName} is the one I\`m thinking of!\`),
			Space
			Text.text(\`Good work!\`),
			Space
		)
	}
}`,x:180,y:-149},{id:7,folderId:1,code:`class NoGuessEntered extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`No... That's not a name...\`),
			Space
			Space
			Cols(
				Space
				Button.text(\`Guess again\`).page(EnterGuess),
				Space
				Button.text(\`I give up\`).page(GiveUp),
				Space
			),
		)
	}
}`,x:390,y:-81},{id:8,folderId:1,code:`class InvalidGuess extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`No, \${a.enteredName} is totally wrong! It's not one of the names I mentioned.\`),
			Space
			Space
			Cols(
				Space
				Button.text(\`Guess again\`).page(EnterGuess),
				Space
				Button.text(\`I give up\`).page(GiveUp),
				Space
			),
		)
	}
}`,x:385,y:521},{id:9,folderId:1,code:`class WrongGuess extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`No, \${a.enteredName} is wrong.\`),
			Space
			Space
			Cols(
				Space
				Button.text(\`Guess again\`).page(EnterGuess),
				Space
				Button.text(\`I give up\`).page(GiveUp),
				Space
			),
		)
	}
}`,x:388,y:213},{id:10,folderId:1,code:`class GiveUp extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`Game Over!\`),
			Space
			Text.text(\`Correct name was Lily.\`),
			Space
		)
	}
}`,x:715,y:206}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){c=p("h1"),c.textContent=U,y=Q(),k=p("p"),k.textContent=L,_=Q(),a=p("div"),pn(r.$$.fragment),l=p("a"),l.textContent=b,d=p("pre"),E=new g(!1),f=p("pre"),I=new g(!1),x=p("pre"),T=new g(!1),h=p("pre"),C=new g(!1),G=p("pre"),P=new g(!1),S=p("pre"),R=new g(!1),w=p("pre"),N=new g(!1),this.h()},l(n){c=e(n,"H1",{"data-svelte-h":!0}),j(c)!=="svelte-11u1dxo"&&(c.textContent=U),y=Z(n),k=e(n,"P",{"data-svelte-h":!0}),j(k)!=="svelte-l7q0qg"&&(k.textContent=L),_=Z(n),a=e(n,"DIV",{});var s=u(a);en(r.$$.fragment,s),l=e(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),j(l)!=="svelte-1akx2re"&&(l.textContent=b),d=e(s,"PRE",{class:!0});var O=u(d);E=m(O,!1),O.forEach(t),f=e(s,"PRE",{class:!0});var V=u(f);I=m(V,!1),V.forEach(t),x=e(s,"PRE",{class:!0});var A=u(x);T=m(A,!1),A.forEach(t),h=e(s,"PRE",{class:!0});var W=u(h);C=m(W,!1),W.forEach(t),G=e(s,"PRE",{class:!0});var z=u(G);P=m(z,!1),z.forEach(t),S=e(s,"PRE",{class:!0});var H=u(S);R=m(H,!1),H.forEach(t),w=e(s,"PRE",{class:!0});var J=u(w);N=m(J,!1),J.forEach(t),s.forEach(t),this.h()},h(){o(l,"target","_blank"),o(l,"href","/editor#eNrdVu9q2zAQf5WrGNQBzzTt2iZmG6SlhMDWlbX7x1KwZl9iUUcyktI0C/68V9lz7Ukmy3FtZ03oBtmHfjE+3el8d7/fnW9BaJoSf0FCESHxSZhQpeDtvJemgHcaeaTAvC+GfKgFP8GRkOi0rDjU1EOuUWJ0TicIryB4OZ6iUhgBNwevg9wqyx+hRKrxUlOpL+i4ciBRTyUHjjM4yz318+tOa3kvI5lLRiKJUCrif10QFhG/7ZLcuQnVuiMuEaORQv2Z+AcvjkrpC/G7x9m1S1Lzucblwt+gEBpJVxHcZ54Hu6gS6E/ZaujvxUx5YcySSCJ3CtVQX6Y0xFK4Mt48bR5OMNidgI4Zv2F8DGIEyHSM0hyhrRi8YcnchQs0gbjQS1iIICSciG8eFIHNYhbGIDjuBC33wa81hFORqPughtpmWIXTqjRD7Sn2HZ128yxNjLPYVswJ7G0bZ9C0oh+pUdeosKLPMXAG/JYmLLJp/KlWzqJ+NtRB4MO5sNZnhWN3xSCvlTE6FVJiqK3lqoktpLH5JAUfP2hha7zRwhR/vT5r1cSTqTYtskT614+fNYTKt4rZLrmzDJwTf3+vk7kFP4828bOe6dYYehVTHSiQbBxrF54tGi2eAVOWrIaAMAgaXF5LyJrzvhARzIS8WWO8Wp7Oni3Q8/aLblmh400VahJmazU6F57nQV6pXQVcaKC2K8zhvzRlQ7fCogJrOqaMB62ij6opVefeJicDGLNbhGlauugb8UO69voash50l2h02iUYnU1g1Bt+i1CsIanQNEnmMMv7dgcGJVI5cc3cLQeuiRIm5i4z59HTRq9zaNE73L9Hr7sJvWrg/XfsLGZPHIxOMfnbByUY7b1NaBSf2RoS/Xz3eHeL8jFDfPkbKhaWGVV2afEeNdCP24fLP95RuZtd4cQsGbq5ozVy76mbwagXTRP9F/nX4g1q6+R19ht32fOi"),o(l,"title","Open in our Online Editor"),E.a=null,o(d,"class","language-js"),I.a=null,o(f,"class","language-js"),T.a=null,o(x,"class","language-js"),C.a=null,o(h,"class","language-js"),P.a=null,o(G,"class","language-js"),R.a=null,o(S,"class","language-js"),N.a=null,o(w,"class","language-js")},m(n,s){v(n,c,s),v(n,y,s),v(n,k,s),v(n,_,s),v(n,a,s),on(r,a,null),i(a,l),i(a,d),E.m(F,d),i(a,f),I.m(M,f),i(a,x),T.m($,x),i(a,h),C.m(Y,h),i(a,G),P.m(K,G),i(a,S),R.m(X,S),i(a,w),N.m(D,w),B=!0},p:sn,i(n){B||(cn(r.$$.fragment,n),B=!0)},o(n){ln(r.$$.fragment,n),B=!1},d(n){n&&(t(c),t(y),t(k),t(_),t(a)),un(r)}}}class fn extends an{constructor(c){super(),tn(this,c,null,rn,nn,{})}}export{fn as component};
