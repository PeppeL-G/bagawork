import{s as z,n as F}from"../chunks/scheduler.UQwd20JU.js";import{S as $,i as q,e,s as X,c as nn,H as w,a as p,g as P,b as H,d as i,f as sn,n as b,h as a,o as u,j as T,m as tn,p as r,t as an,k as en,l as pn}from"../chunks/index.i__Fl8cY.js";import{V as on}from"../chunks/ViewApp.m6vzcyjb.js";function cn(U){let o,j="21 Sticks",y,l,G="This example shows how to create an app where the user plays the game 21 sticks against the computer.",x,t,k,c,_="Open in Online Editor",m,O,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">=</span> <span class="token number">21</span>
	<span class="token punctuation">&#125;</span>
	
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
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AskUserToMakeAMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,C,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">AskUserToMakeAMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> optionElements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			optionElements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">3 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take3Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			optionElements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2 sticks</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take2Sticks<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		optionElements<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">1 stick</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>take1Stick<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">How many sticks do you want to take?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				Space
				<span class="token operator">...</span>optionElements
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			<span class="token keyword">new</span> <span class="token class-name">Direction</span><span class="token punctuation">(</span>
				ComputerWon<span class="token punctuation">,</span>
				<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer won</span><span class="token template-punctuation string">&#96;</span></span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token keyword">new</span> <span class="token class-name">Direction</span><span class="token punctuation">(</span>
				ShowGameAfterUserMove<span class="token punctuation">,</span>
				<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game not finished</span><span class="token template-punctuation string">&#96;</span></span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,v,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterUserMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">There are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			<span class="token function">Cols</span><span class="token punctuation">(</span>
				Space
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer's turn...</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ShowGameAfterComputerMove<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,h,A,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ShowGameAfterComputerMove</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// Compute how many sticks the computer's take.</span>
		<span class="token keyword">let</span> numberOfSticksTheComputerTakes
		
		<span class="token comment">// If there is only 1 stick left...</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token comment">// ...then the computer has to take 1 stick!</span>
			numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">1</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// If there are two sticks left...</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token comment">// ...the computer can take 1 or 2. Randomize!</span>
			<span class="token keyword">const</span> randomNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Number between 0 and 1.</span>
			
			<span class="token keyword">if</span><span class="token punctuation">(</span>randomNumber <span class="token operator">&lt;</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
				numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">2</span>
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// If there are 3 or more sticks left...</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&lt;=</span> a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token comment">// The computer can take 1, 2 or 3 sticks. Randomize!</span>
			<span class="token keyword">const</span> randomNumber <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Number between 0 and 1.</span>
			
			<span class="token keyword">if</span><span class="token punctuation">(</span>randomNumber <span class="token operator">&lt;</span> <span class="token number">0.33</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>randomNumber <span class="token operator">&lt;</span> <span class="token number">0.66</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">2</span>
			<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
				numberOfSticksTheComputerTakes <span class="token operator">=</span> <span class="token number">3</span>
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		p<span class="token punctuation">.</span>numberOfSticksTheComputerTakes <span class="token operator">=</span> numberOfSticksTheComputerTakes
		a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">-=</span> numberOfSticksTheComputerTakes
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer takes </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>numberOfSticksTheComputerTakes<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Now there are </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfSticksLeft<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> sticks left.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">OK</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			<span class="token keyword">new</span> <span class="token class-name">Direction</span><span class="token punctuation">(</span>
				PlayerWon<span class="token punctuation">,</span>
				<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> a<span class="token punctuation">.</span>numberOfSticksLeft <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The computer won</span><span class="token template-punctuation string">&#96;</span></span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token keyword">new</span> <span class="token class-name">Direction</span><span class="token punctuation">(</span>
				AskUserToMakeAMove<span class="token punctuation">,</span>
				<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
				<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game not finished</span><span class="token template-punctuation string">&#96;</span></span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,N,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ComputerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Too bad, the computer won ☹️</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,S,L,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">PlayerWon</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Congratulation, you won! 😊</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,M;return k=new on({props:{project:{app:{code:`class MyApp extends App{
	
	onBefore(){
		a.numberOfSticksLeft = 21
	}
	
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
		return new AskUserToMakeAMove()
	}
	
}`},folders:[{id:1,name:"Start",offsetX:270,offsetY:19}],pages:[{id:1,folderId:1,code:`class AskUserToMakeAMove extends Page{
	
	createGui(){
		
		const optionElements = []
		
		if(3 <= a.numberOfSticksLeft){
			optionElements.push(
				Button.text(\`3 sticks\`).handler(a.take3Sticks),
				Space
			)
		}
		
		if(2 <= a.numberOfSticksLeft){
			optionElements.push(
				Button.text(\`2 sticks\`).handler(a.take2Sticks),
				Space
			)
		}
		
		optionElements.push(
			Button.text(\`1 stick\`).handler(a.take1Stick),
			Space
		)
		
		return Rows.children(
			Space
			Text.text(\`There are \${a.numberOfSticksLeft} sticks left.\`),
			Space
			Text.text(\`How many sticks do you want to take?\`),
			Cols(
				Space
				...optionElements
			),
			Space
		)
		
	}
	
	createAfterDirections(){
		
		return [
			new Direction(
				ComputerWon,
				() => a.numberOfSticksLeft == 0,
				\`The computer won\`
			),
			new Direction(
				ShowGameAfterUserMove,
				() => true,
				\`Game not finished\`
			)
		]
		
	}
	
}`,x:-47,y:275},{id:6,folderId:1,code:`class ShowGameAfterUserMove extends Page{
	
	createGui(){
		return Rows.children(
			Space
			Text.text(\`There are \${a.numberOfSticksLeft} sticks left.\`),
			Space
			Cols(
				Space
				Button.text(\`The computer's turn...\`).page(ShowGameAfterComputerMove),
				Space
			),
			Space
		)
		
	}
	
}`,x:301,y:122},{id:7,folderId:1,code:`class ShowGameAfterComputerMove extends Page{
	
	onBefore(){
		
		// Compute how many sticks the computer's take.
		let numberOfSticksTheComputerTakes
		
		// If there is only 1 stick left...
		if(a.numberOfSticksLeft == 1){
			
			// ...then the computer has to take 1 stick!
			numberOfSticksTheComputerTakes = 1
			
		}
		
		// If there are two sticks left...
		if(a.numberOfSticksLeft == 2){
			
			// ...the computer can take 1 or 2. Randomize!
			const randomNumber = Math.random() // Number between 0 and 1.
			
			if(randomNumber < 0.5){
				numberOfSticksTheComputerTakes = 1
			}else{
				numberOfSticksTheComputerTakes = 2
			}
			
		}
		
		// If there are 3 or more sticks left...
		if(3 <= a.numberOfSticksLeft){
			
			// The computer can take 1, 2 or 3 sticks. Randomize!
			const randomNumber = Math.random() // Number between 0 and 1.
			
			if(randomNumber < 0.33){
				numberOfSticksTheComputerTakes = 1
			}else if(randomNumber < 0.66){
				numberOfSticksTheComputerTakes = 2
			}else{
				numberOfSticksTheComputerTakes = 3
			}
			
		}
		
		p.numberOfSticksTheComputerTakes = numberOfSticksTheComputerTakes
		a.numberOfSticksLeft -= numberOfSticksTheComputerTakes
		
	}
	
	createGui(){
		return Rows.children(
			Space
			Text.text(\`The computer takes \${p.numberOfSticksTheComputerTakes} sticks.\`),
			Space
			Text.text(\`Now there are \${a.numberOfSticksLeft} sticks left.\`),
			Space
			Button.text(\`OK\`),
			Space
		)
	}
	
	createAfterDirections(){
		
		return [
			new Direction(
				PlayerWon,
				() => a.numberOfSticksLeft == 0,
				\`The computer won\`
			),
			new Direction(
				AskUserToMakeAMove,
				() => true,
				\`Game not finished\`
			)
		]
		
	}
	
}`,x:308,y:548},{id:8,folderId:1,code:`class ComputerWon extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`Too bad, the computer won ☹️\`),
			Space
		)
	}
}`,x:507,y:271},{id:9,folderId:1,code:`class PlayerWon extends Page{
	createGui(){
		return Rows.children(
			Space
			Text.text(\`Congratulation, you won! 😊\`),
			Space
		)
	}
}`,x:623,y:542}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text.text(\`\`)
	}
}`}]}}}),{c(){o=e("h1"),o.textContent=j,y=X(),l=e("p"),l.textContent=G,x=X(),t=e("div"),nn(k.$$.fragment),c=e("a"),c.textContent=_,m=e("pre"),O=new w(!1),f=e("pre"),C=new w(!1),d=e("pre"),v=new w(!1),h=e("pre"),A=new w(!1),g=e("pre"),N=new w(!1),S=e("pre"),L=new w(!1),this.h()},l(n){o=p(n,"H1",{"data-svelte-h":!0}),P(o)!=="svelte-b40j3k"&&(o.textContent=j),y=H(n),l=p(n,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1ymmwbv"&&(l.textContent=G),x=H(n),t=p(n,"DIV",{});var s=i(t);sn(k.$$.fragment,s),c=p(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),P(c)!=="svelte-12p8hh3"&&(c.textContent=_),m=p(s,"PRE",{class:!0});var E=i(m);O=b(E,!1),E.forEach(a),f=p(s,"PRE",{class:!0});var D=i(f);C=b(D,!1),D.forEach(a),d=p(s,"PRE",{class:!0});var B=i(d);v=b(B,!1),B.forEach(a),h=p(s,"PRE",{class:!0});var R=i(h);A=b(R,!1),R.forEach(a),g=p(s,"PRE",{class:!0});var V=i(g);N=b(V,!1),V.forEach(a),S=p(s,"PRE",{class:!0});var I=i(S);L=b(I,!1),I.forEach(a),s.forEach(a),this.h()},h(){u(c,"target","_blank"),u(c,"href","/editor#eNrFV92Om0YUfpUTFKm2RIiB7E+suJWzrdJVskmUddVW65U8C0NAi2cQM9RxLF4gN73NXV+jfZ2+QPMImTEMBgNenO5qL/wDzDnnO9/5ZaWhKNKGK82hLtaGmhMixuBsOY4iwB84Ji4D8X81JVMuP5Q8xx6Nca+f3eLIIMn8CsdvvHMeONfsFfY4jMAy5eNUiXF0je3swG7JRyOwa5JWR0mrJmmuD9woWAXrxBhxfM5RzN+i9xtXY8yTmADBCxiz618Yjif0TBgZn9E/xKmSjlRLdc2joYtjpg0vVlrgakNT1wiaS5LXqjVdo57HMP9NG1pHA3X1uzj4NL3UtUiYrghn+k6zi0q46miK2EkHVlXHXiRB4VL27VDCONCIB5T8FOI5JpyJGF5clg8FXs+GZyNo4rBQx6tKjChhfk89m/LnCRcZZHCBrjezga0VzPqGj4gb4riHjFKi9PWN4HmEHKwu+9mfdAuddavorDZ01jeg22W3YtXMrNaMZnm8sVmy2C8bylP0HV0ww/GD0I0x6TUITflE2MuNTnwcY0Di83DVxF+aUwGhuDBmjSgqCn+mC5gjslRyLoUlTWCBCAdOQTr0Q0nNCQ1Zr4XNKTcMo0pfQfQNbGzV89jjOP4xiLEjlbGtEsiJu1AqZZEXh0vgTug8SoSiXykpJUCvD6PvobkVjmBQOinJBidXAgtKZnV32myf+3TxQnSQtSey4GWl11DwOCnfnEkJIJSDF5CA+didbWXqZY2yVPSmD9rw0ZMjXVvK7nSQ6lkbOtzVhhrxde1E95i5u/OvUp/l6H3HQEIW+SnKVXbrXoUAlSmShPZm0S2H84DYA3MdENOyVECOOgekjKc5KLXZnn0/fgy5LPhbhc236BCFbWRCIeZQjYegTkGYiHNsy8SpJ7WJSAYMKAmXkLfCLHSGUbT5tiozN21e/Qq1QlKoJRWk4COm+pAy86Aovp2gId8VNlbSNj9kVvIFrWRgBzesHW5sPHAQUfBpDJYB78S4oPPgIy4cyYZ6vL7/em1KgD9D3Deye6JbCMX5kyvMF1jQNADxDExjG4IAXNH0DAbGQQnpHrSlOGR4H0mrkNyDeVvyMhfJ3MZ/h12mxP+kmXwdLGlHbTL3Egbb/h9xgCaNh4f9b4vPvpG1u0Q2Mm7U06XRtK3+XZtUevuja5NRfO3Iw9VNvqp51mUJey16Nb+V+ViZgG9eztqH1p2sXG9DtLyfhav+XnWH25Y9OF4P94Mnx2q4H+8a7qVNtD7ObytJKYUr5OrV8SlIhH8///Pf33/uToXcsYOBWiNN5djTXY4V8b4zt04oeR8jnoRIBlzPXk4oeQBf/vr8qZNPh5adB8tS7+oTPI+Ewuo7+/Zr+qk3dpOQ7+FZCfZsAyK9TL8CZsuCsA=="),u(c,"title","Open in our Online Editor"),O.a=null,u(m,"class","language-js"),C.a=null,u(f,"class","language-js"),v.a=null,u(d,"class","language-js"),A.a=null,u(h,"class","language-js"),N.a=null,u(g,"class","language-js"),L.a=null,u(S,"class","language-js")},m(n,s){T(n,o,s),T(n,y,s),T(n,l,s),T(n,x,s),T(n,t,s),tn(k,t,null),r(t,c),r(t,m),O.m(W,m),r(t,f),C.m(Z,f),r(t,d),v.m(Q,d),r(t,h),A.m(K,h),r(t,g),N.m(J,g),r(t,S),L.m(Y,S),M=!0},p:F,i(n){M||(an(k.$$.fragment,n),M=!0)},o(n){en(k.$$.fragment,n),M=!1},d(n){n&&(a(o),a(y),a(l),a(x),a(t)),pn(k)}}}class rn extends ${constructor(o){super(),q(this,o,null,cn,z,{})}}export{rn as component};
