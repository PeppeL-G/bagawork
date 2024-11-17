import{s as nn,n as sn}from"../chunks/scheduler.B0TnBjPs.js";import{S as an,i as tn,e as p,s as J,c as pn,H as g,a as e,g as R,b as M,d as u,f as en,n as m,h as t,o,j as v,m as on,p as i,t as cn,k as ln,l as un}from"../chunks/index.Cnh3HYw3.js";import{V as kn}from"../chunks/ViewApp.BajIxHdc.js";function rn(Z){let c,q="Guess Name",y,k,A="This example shows how to create an app where the user should guess on a name the app is thinking of.",E,a,r,l,Y="Open in Online Editor",d,_,b=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>enteredName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;guessed name></span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">EnterGuess</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,f,C,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EnterGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,x,T,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">CorrectGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">That</span><span class="token template-punctuation string">&#96;</span></span>s right<span class="token punctuation">,</span> $<span class="token punctuation">&#123;</span>a<span class="token punctuation">.</span>enteredName<span class="token punctuation">&#125;</span> is the one <span class="token constant">I</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">m thinking of!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good work!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,S,j,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">NoGuessEntered</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,w,P,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InvalidGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,h,N,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">WrongGuess</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
<span class="token punctuation">&#125;</span></code>`,G,I,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">GiveUp</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
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
}`,x:715,y:206}]}}}),{c(){c=p("h1"),c.textContent=q,y=J(),k=p("p"),k.textContent=A,E=J(),a=p("div"),pn(r.$$.fragment),l=p("a"),l.textContent=Y,d=p("pre"),_=new g(!1),f=p("pre"),C=new g(!1),x=p("pre"),T=new g(!1),S=p("pre"),j=new g(!1),w=p("pre"),P=new g(!1),h=p("pre"),N=new g(!1),G=p("pre"),I=new g(!1),this.h()},l(n){c=e(n,"H1",{"data-svelte-h":!0}),R(c)!=="svelte-11u1dxo"&&(c.textContent=q),y=M(n),k=e(n,"P",{"data-svelte-h":!0}),R(k)!=="svelte-l7q0qg"&&(k.textContent=A),E=M(n),a=e(n,"DIV",{});var s=u(a);en(r.$$.fragment,s),l=e(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),R(l)!=="svelte-13mw4gz"&&(l.textContent=Y),d=e(s,"PRE",{class:!0});var X=u(d);_=m(X,!1),X.forEach(t),f=e(s,"PRE",{class:!0});var W=u(f);C=m(W,!1),W.forEach(t),x=e(s,"PRE",{class:!0});var O=u(x);T=m(O,!1),O.forEach(t),S=e(s,"PRE",{class:!0});var U=u(S);j=m(U,!1),U.forEach(t),w=e(s,"PRE",{class:!0});var K=u(w);P=m(K,!1),K.forEach(t),h=e(s,"PRE",{class:!0});var z=u(h);N=m(z,!1),z.forEach(t),G=e(s,"PRE",{class:!0});var H=u(G);I=m(H,!1),H.forEach(t),s.forEach(t),this.h()},h(){o(l,"target","_blank"),o(l,"href","/editor#eNrdVttq20AQ/ZXJUogMqohztUVbSEIwhjYNTXqjCmgrja0lyq7YXcdxjZ77K/2ufklXKyuS3NiEgvuQF6G57OzMnDMjzQnNMuLPSSRiJD6JUqoUvJsdZxngvUYeKzDv84AHWvATHAmJTseKgaYeco0S43N6i/AawlfjCSqFMXCjeBMWXnnxiCRSjZeaSn1Bx3UAiXoiOXCcwlkRaVAcdzqLcznJXTISaYxSEf/bnLCY+F2XFMFNqjYccYkYjRTqL8Tf2z+spK/E7x/l1y7JzHWtw2W8YSm0iq4zeKi8SHZeFzCYsOXUP4ip8qKEpbFE7pSmQF9mNMJKuDLRPG0eTjjcvgWdMH7D+BjECJDpBKVRoe0YvGXpzIULNIm4cJyyCEFIOBHfPSgTmyYsSkBw3Ao77qO3tYRTkaqHpAJtK6zT6dSWQHuK/UCn29ZlqQmW2I45oT1t8wzbXvQTNeYGFZbsBQbOkN/RlMW2jL/Nypk3dYEOQx/OhfU+KwO7Sw5Fr4zTqZASI209l11sI43PZyn4+FEP2+O1Hqb5q+15pyGeTLQZkQXSv3/+aiBUvdXMdsm9ZeCM+Ls7vdwt+Xm4jp/NSjfG0KuE6lCBZONEu/Bi3hrxHJiyZDUEhGHY4vJKQjaCD4SIYSrkzQrn5fb0dmyDXnb3+1WHjtZ1qE2YjfXoXHieB0WnthVwoYHaqTDKfxnKlm2JRSXWdEwZDzvlHNVbqsm9dUGGMGZ3CJOsCjEw4sds5fEVZN3rL9DodSsweuvAaA78BqFYQVKhaZrOYFrM7RYMK6QK4pq9Wy1ckyXcmrPM6OPnjV7vwKJ3sPuAXn8devXC++/YWcyeORi9cvN39yowujvr0Civ2RgSg+Lf4/0dyqcs8cVnqPxhmVJlf1q8Jy30o+7B4ot3mF/nfwAAP8mW"),o(l,"title","Open in our Online Editor"),_.a=null,o(d,"class","language-js"),C.a=null,o(f,"class","language-js"),T.a=null,o(x,"class","language-js"),j.a=null,o(S,"class","language-js"),P.a=null,o(w,"class","language-js"),N.a=null,o(h,"class","language-js"),I.a=null,o(G,"class","language-js")},m(n,s){v(n,c,s),v(n,y,s),v(n,k,s),v(n,E,s),v(n,a,s),on(r,a,null),i(a,l),i(a,d),_.m(b,d),i(a,f),C.m(L,f),i(a,x),T.m(V,x),i(a,S),j.m(F,S),i(a,w),P.m(Q,w),i(a,h),N.m($,h),i(a,G),I.m(D,G),B=!0},p:sn,i(n){B||(cn(r.$$.fragment,n),B=!0)},o(n){ln(r.$$.fragment,n),B=!1},d(n){n&&(t(c),t(y),t(k),t(E),t(a)),un(r)}}}class fn extends an{constructor(c){super(),tn(this,c,null,rn,nn,{})}}export{fn as component};
