import{s as q,n as Q}from"../chunks/scheduler.B0TnBjPs.js";import{S as $,i as Y,e as p,s as D,c as nn,H as w,a as e,g as R,b as H,d as k,f as sn,n as x,h as t,o as u,j as T,m as an,p as r,t as tn,k as pn,l as en}from"../chunks/index.CHfggXAQ.js";import{V as on}from"../chunks/ViewApp.6tllL5xD.js";function cn(N){let o,M="21 Sticks",b,l,G="This example shows how to create an app where the user plays the game 21 sticks against the computer.",y,a,i,c,U="Open in Online Editor",m,O,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	numberOfSticksLeft <span class="token operator">=</span> <span class="token number">21</span>
	
	<span class="token function">take3Sticks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">-=</span> <span class="token number">3</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">take2Sticks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">-=</span> <span class="token number">2</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">take1Stick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">-=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> AskUserToMakeAMove
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,C,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskUserToMakeAMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many sticks do you want to take?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take1Stick<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take2Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take3Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ComputerWon<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer won</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ShowGameAfterUserMove<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game not finished</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,L,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterUserMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer's turn...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ShowGameAfterComputerMove<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,P,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterComputerMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Compute how many sticks the computer may take.</span>
		<span class="token keyword">const</span> maxSticksToTake <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">lowest</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span>
		
		<span class="token comment">// Then the computer will get a random number of sticks.</span>
		p<span class="token punctuation">.</span>numberOfSticksTheComputerTakes <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> maxSticksToTake<span class="token punctuation">)</span>
		
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">-=</span> p<span class="token punctuation">.</span>numberOfSticksTheComputerTakes
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer takes </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfSticksTheComputerTakes<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Now there are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">OK</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>PlayerWon<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The player won</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>AskUserToMakeAMove<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game not finished</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,S,v,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ComputerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Too bad, the computer won ☹️</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,h,A,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">PlayerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Congratulation, you won! 😊</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,_;return i=new on({props:{project:{app:{code:`class MyApp extends App{
	
	numberOfSticksLeft = 21
	
	take3Sticks(){
		a.numberOfSticksLeft -= 3
	}
	
	take2Sticks(){
		a.numberOfSticksLeft -= 2
	}
	
	take1Stick(){
		a.numberOfSticksLeft -= 1
	}
	
	createStartPage(){
		return AskUserToMakeAMove
	}
	
}`},folders:[{id:1,name:"Start",offsetX:230,offsetY:41}],pages:[{id:1,folderId:1,code:`class AskUserToMakeAMove extends Page{
	
	createGui(){
		
		return Rows.children(
			Space,
			Text.text(\`There are \${a.numberOfSticksLeft} sticks left.\`),
			Space,
			Text.text(\`How many sticks do you want to take?\`),
			Columns.children(
				Space,
				Button.text(\`1 sticks\`).onClick(a.take1Stick),
				Space,
				Button.keepIf(2 <= a.numberOfSticksLeft).text(\`2 sticks\`).onClick(a.take2Sticks),
				Space.keepIf(2 <= a.numberOfSticksLeft),
				Button.keepIf(3 <= a.numberOfSticksLeft).text(\`3 sticks\`).onClick(a.take3Sticks),
				Space.keepIf(3 <= a.numberOfSticksLeft),
			),
			Space,
		)
		
	}
	
	createAfterDirections(){
		
		return [
			Direction.page(ComputerWon).when(a.numberOfSticksLeft == 0).text(\`The computer won\`),
			Direction.page(ShowGameAfterUserMove).when(true).text(\`Game not finished\`),
		]
		
	}
	
}`,x:-47,y:275},{id:6,folderId:1,code:`class ShowGameAfterUserMove extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`There are \${a.numberOfSticksLeft} sticks left.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`The computer's turn...\`).page(ShowGameAfterComputerMove),
				Space,
			),
			Space,
		)
		
	}
	
}`,x:315,y:112},{id:7,folderId:1,code:`class ShowGameAfterComputerMove extends Page{
	
	numberOfSticksTheComputerTakes = 0
	
	onBefore(){
		
		// Compute how many sticks the computer may take.
		const maxSticksToTake = m.lowest(3, a.numberOfSticksLeft)
		
		// Then the computer will get a random number of sticks.
		p.numberOfSticksTheComputerTakes = m.randomInt(1, maxSticksToTake)
		
		a.numberOfSticksLeft -= p.numberOfSticksTheComputerTakes
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The computer takes \${p.numberOfSticksTheComputerTakes} sticks.\`),
			Space,
			Text.text(\`Now there are \${a.numberOfSticksLeft} sticks left.\`),
			Space,
			Button.text(\`OK\`),
			Space,
		)
	}
	
	createAfterDirections(){
		
		return [
			Direction.page(PlayerWon).when(a.numberOfSticksLeft == 0).text(\`The player won\`),
			Direction.page(AskUserToMakeAMove).when(true).text(\`Game not finished\`),
		]
		
	}
	
}`,x:308,y:668},{id:8,folderId:1,code:`class ComputerWon extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Too bad, the computer won ☹️\`),
			Space,
		)
	}
}`,x:509,y:286},{id:9,folderId:1,code:`class PlayerWon extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Congratulation, you won! 😊\`),
			Space,
		)
	}
}`,x:628,y:664}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){o=p("h1"),o.textContent=M,b=D(),l=p("p"),l.textContent=G,y=D(),a=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=U,m=p("pre"),O=new w(!1),f=p("pre"),C=new w(!1),g=p("pre"),L=new w(!1),d=p("pre"),P=new w(!1),S=p("pre"),v=new w(!1),h=p("pre"),A=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),R(o)!=="svelte-b40j3k"&&(o.textContent=M),b=H(n),l=e(n,"P",{"data-svelte-h":!0}),R(l)!=="svelte-1ymmwbv"&&(l.textContent=G),y=H(n),a=e(n,"DIV",{});var s=k(a);sn(i.$$.fragment,s),c=e(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),R(c)!=="svelte-hyuyp3"&&(c.textContent=U),m=e(s,"PRE",{class:!0});var W=k(m);O=x(W,!1),W.forEach(t),f=e(s,"PRE",{class:!0});var I=k(f);C=x(I,!1),I.forEach(t),g=e(s,"PRE",{class:!0});var E=k(g);L=x(E,!1),E.forEach(t),d=e(s,"PRE",{class:!0});var B=k(d);P=x(B,!1),B.forEach(t),S=e(s,"PRE",{class:!0});var j=k(S);v=x(j,!1),j.forEach(t),h=e(s,"PRE",{class:!0});var K=k(h);A=x(K,!1),K.forEach(t),s.forEach(t),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNrFVm1u00AQvcqyqkQiuW4ct2kaEaE0SBBBaUWCALWVsrXXjVV717LHpFHkC/CHv/3HNeA6XACOwPorsR0nTlEQPxzZ8b6ZN37zZneOiePgzhxrXKe4gzWLeB46m/UcB9F7oEz3kLifX7ErCC/m2zfUPTeGYGp33htqAOqippK+BnJH1fhdrR6DgMgloP0uUsPXQRbZ3BLZXEEq0YJKoJIDai4lQIdAXLggt3SBdin4LkM97+69R90RPxMJemf8M82gAxxI2OCWTl0Pdy7n2NRxR5EwI3b4GaOgWMLcMDwKH3GnqTbSp0+4c6gE1xJ2RNIcOI43iB9ygqxyWagTUp/nS3rpm4ticiW941NP1iampbuU1ZIFMHSIRqX0aSQCyyB+auPRhLoUEXHtzcs+aYC86B5Z4kEe16XKiK/4FNmEzVKgztGM+2hKGCDgKJTyeSZOn1u+zUooF1NcwakPwFmSRknij+syZ30rbA0iL/ukLlXGuaPUGRi1JnrWRWWl15NMzXWZkl5eSVUdeS0ZtYqMuo6MWkFGrSZTLm592WQFW/UMoO4L06UamJx55f14mcZcLJRDU9T63HZ8gf/AWV2eToTwpY7udlGjvuxVpCUwNOUs00WF4MMJn74UNo0Yhq4K7ZSkAdenacRwDWIckGEy05tQfRHyeqXqQHj9Hnf2D48lPBNuPz4KpNjWrU22LqWyrbP/q6f/1plZmZ56KKxAlkWaEmnSJojkWevYbfsyUUhVjiKFFKWZKnS8tUJZRuUq5b+nKDaFjIQLPbFVNtKVnJ1Sg7u0YIyDA5RA0KQwKyHb4TaZRdNSjmGasBiIP++TxDzMJ9LZssWn1IOaKpX7u5BbMGb5RFPTstAtBUSQS5jObRRHQdxIiCUUHLmyeFuOQwwY1BSpSDfHZd0OXpVl7TzaiXOWnwWikvbmVXxSO221O74VisNu/Jkz3fnr8Qab7HJwX1hk9uix7USgzUN79QC0m4mtNtrRPGi12uk8aG+aB5mdaXUC7KzTOEc3RJcKThQpfz78+PX9a4WaSWlHjZN4M2q30tJONpW20O7fFdbn7NYl4FskVFaKz36cPUG/vz182a6qVjMV7DA9Q4+oLVoI8mfp4vF5YPR034JH1JbhPV6SCK6DP5k2z5k="),u(c,"title","Open in our Online Editor"),O.a=null,u(m,"class","language-js"),C.a=null,u(f,"class","language-js"),L.a=null,u(g,"class","language-js"),P.a=null,u(d,"class","language-js"),v.a=null,u(S,"class","language-js"),A.a=null,u(h,"class","language-js")},m(n,s){T(n,o,s),T(n,b,s),T(n,l,s),T(n,y,s),T(n,a,s),an(i,a,null),r(a,c),r(a,m),O.m(Z,m),r(a,f),C.m(V,f),r(a,g),L.m(X,g),r(a,d),P.m(z,d),r(a,S),v.m(F,S),r(a,h),A.m(J,h),_=!0},p:Q,i(n){_||(tn(i.$$.fragment,n),_=!0)},o(n){pn(i.$$.fragment,n),_=!1},d(n){n&&(t(o),t(b),t(l),t(y),t(a)),en(i)}}}class rn extends ${constructor(o){super(),Y(this,o,null,cn,q,{})}}export{rn as component};
