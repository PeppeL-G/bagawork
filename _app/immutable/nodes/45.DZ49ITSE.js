import{s as F,n as X}from"../chunks/scheduler.DFPFbGJz.js";import{S as Q,i as Z,e as p,s as W,c as nn,H as w,a as e,g as _,b as Y,d as k,f as sn,n as x,h as t,o as u,j as T,m as an,p as r,t as tn,k as pn,l as en}from"../chunks/index.CzDE4dZi.js";import{V as on}from"../chunks/ViewApp.C2MU7-ZI.js";function cn(V){let o,R="21 Sticks",b,l,M="This example shows how to create an app where the user plays the game 21 sticks against the computer.",y,a,i,c,D="Open in Online Editor",m,O,z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,f,v,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskUserToMakeAMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many sticks do you want to take?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take1Stick<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take2Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take3Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,g,C,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterUserMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,d,A,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterComputerMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,h,P,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ComputerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Too bad, the computer won ☹️</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,S,L,$=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">PlayerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Congratulation, you won! 😊</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,G;return i=new on({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`},folders:[{id:1,name:"Start",offsetX:154,offsetY:-44}],pages:[{id:1,folderId:1,code:`class AskUserToMakeAMove extends Page{
	
	createGui(){
		
		return Rows.children(
			Space,
			Text.text(\`There are \${a.numberOfSticksLeft} sticks left.\`),
			Space,
			Text.text(\`How many sticks do you want to take?\`),
			Columns.children(
				Space,
				Button.text(\`1 sticks\`).handler(a.take1Stick),
				Space,
				Button.keepIf(2 <= a.numberOfSticksLeft).text(\`2 sticks\`).handler(a.take2Sticks),
				Space.keepIf(2 <= a.numberOfSticksLeft),
				Button.keepIf(3 <= a.numberOfSticksLeft).text(\`3 sticks\`).handler(a.take3Sticks),
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
}`}]}}}),{c(){o=p("h1"),o.textContent=R,b=W(),l=p("p"),l.textContent=M,y=W(),a=p("div"),nn(i.$$.fragment),c=p("a"),c.textContent=D,m=p("pre"),O=new w(!1),f=p("pre"),v=new w(!1),g=p("pre"),C=new w(!1),d=p("pre"),A=new w(!1),h=p("pre"),P=new w(!1),S=p("pre"),L=new w(!1),this.h()},l(n){o=e(n,"H1",{"data-svelte-h":!0}),_(o)!=="svelte-b40j3k"&&(o.textContent=R),b=Y(n),l=e(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-1ymmwbv"&&(l.textContent=M),y=Y(n),a=e(n,"DIV",{});var s=k(a);sn(i.$$.fragment,s),c=e(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(c)!=="svelte-jhwesi"&&(c.textContent=D),m=e(s,"PRE",{class:!0});var B=k(m);O=x(B,!1),B.forEach(t),f=e(s,"PRE",{class:!0});var I=k(f);v=x(I,!1),I.forEach(t),g=e(s,"PRE",{class:!0});var j=k(g);C=x(j,!1),j.forEach(t),d=e(s,"PRE",{class:!0});var E=k(d);A=x(E,!1),E.forEach(t),h=e(s,"PRE",{class:!0});var N=k(h);P=x(N,!1),N.forEach(t),S=e(s,"PRE",{class:!0});var U=k(S);L=x(U,!1),U.forEach(t),s.forEach(t),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNrFVltum0AU3cp0FKkgEWIgdhyrVuWkUmu1aaLaVVslkTyBIUaBGQRDiWWxgf70N3/dRrudbqBdQoeXDRgbp3LVDywwc+49l3PPnZlD5LqwN4c6NTDsQd1Gvg/OZgPXBfieYWL4gN/Pr8gViy8SODfYOzdHzNLv/DfYZKAPVCV/zdAd1tJ3gpiCGJJrQPt9oMWvoyJS3RKpriCVZEEjUCkBdQ8jhkcMeewC3eIF2sMs8AgY+HfvfeyN6RlPMDijn3EBHcFIgia1Dez5sHc5h5YBe4oECXLiz5gEhRKkpulj9pG/ah/mT59gb//wMLqWoMuzltBpwGH6UFJklcxCnpj7vFzTy8BaVFOq6R0NfVmfWrbhYSJkC9jIRTqW8qcxDywz/iNMxlPsYYD4tTev+6YR8JN7YPMHeSJKjRFf0RA4iMxyoEHBjAYgRIQBRkGs5fNCnFNqBw6poVxNccVOAsYoydIoWfyJKE8RMWzsCUheNoooNca5w9gdmoIKnvVBXelilkldlylr5pVUzZHXktGayGjryGgNZLRmMvXiissmq/hqYDLsvbA8rDOLEr++Hy/zmIuFcmwK4ZQ6bsDxHygR5XDKha+1dL8PWuKyV4GewUBISaGLKsFHUxq+5D5NGMauiu2UpWFegPOI8RpAKAOmRSx/io1FyOuVqiNu9vvY2EcSnMGeetSOpNTWnU22rqWyrbP/q6f/1plFmZ76IK5AlnmaGmnyJkjkWevYbfsyU0hT2olCiqLmCh1trVCRUb1K5e/Ji80hY+5Cn++VrXwlJSfYpB6uGOPgAGQQMK3MSlbscAfNkmkppzCdW4zxP++zxDTOx9M5sk1D7DNBk+r9XcnNGZNyotCybXCLGUDA4zOFOiCNAqiZEcsouHJj8Y6chhgSJihSlW6Jy7otvCnL2nm0E+csPwtLStqbN/HJ7bTV7viWK85248+S6c5fTzbYZJeD+8JGs0ePbTcBbR7aqweg3UxsrdVN5kGn083nQXfTPCjsTKsTYGedRim4QYZUcSJP+fPhx6/vXxvUzEprt47TzajbyUs73lTaQrt/V9gpJbceYoGNYmWl9OxHyRPw+9vDl+2q6qi5YIsz9Bg7vIVY+SxdPT4PzYER2OwRtRV4T5YkouvoD6zX0B8="),u(c,"title","Open in our Online Editor"),O.a=null,u(m,"class","language-js"),v.a=null,u(f,"class","language-js"),C.a=null,u(g,"class","language-js"),A.a=null,u(d,"class","language-js"),P.a=null,u(h,"class","language-js"),L.a=null,u(S,"class","language-js")},m(n,s){T(n,o,s),T(n,b,s),T(n,l,s),T(n,y,s),T(n,a,s),an(i,a,null),r(a,c),r(a,m),O.m(z,m),r(a,f),v.m(q,f),r(a,g),C.m(H,g),r(a,d),A.m(J,d),r(a,h),P.m(K,h),r(a,S),L.m($,S),G=!0},p:X,i(n){G||(tn(i.$$.fragment,n),G=!0)},o(n){pn(i.$$.fragment,n),G=!1},d(n){n&&(t(o),t(b),t(l),t(y),t(a)),en(i)}}}class rn extends Q{constructor(o){super(),Z(this,o,null,cn,F,{})}}export{rn as component};
