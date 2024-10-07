import{s as q,n as F}from"../chunks/scheduler.B0TnBjPs.js";import{S as J,i as M,e as o,s as Y,c as N,H as w,a as c,g as Q,b as G,d,f as L,n as h,h as a,o as u,j as A,m as X,p as x,t as $,k as nn,l as sn}from"../chunks/index.CHfggXAQ.js";import{V as tn}from"../chunks/ViewApp.6tllL5xD.js";function an(I){let p,S="Quiz",C,l,v="This example shows how to create a small app functioning as a quiz.",b,t,i,e,T="Open in Online Editor",k,y,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	numberOfAnsweredQuestions <span class="token operator">=</span> <span class="token number">0</span>
	numberOfCorrectAnswers <span class="token operator">=</span> <span class="token number">0</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Question1Page
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onCorrectAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfAnsweredQuestions <span class="token operator">+=</span> <span class="token number">1</span>
		a<span class="token punctuation">.</span>numberOfCorrectAnswers <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">onWrongAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfAnsweredQuestions <span class="token operator">+=</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>numberOfAnsweredQuestions <span class="token operator">=</span> <span class="token number">0</span>
		a<span class="token punctuation">.</span>numberOfCorrectAnswers <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,z,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which colors does the Swedish flag consist of?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Red and Blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and Yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">White and Red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question2Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,P,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which country has the smallest land size?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">England</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Denmark</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Germany</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Andorra</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question3Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,O,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In which country do they speak Spanish?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Spain</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Italy</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Russia</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Scotland</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ResultPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,R,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ResultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfCorrectAnswers<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfAnsweredQuestions<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> correct.</span><span class="token template-punctuation string">&#96;</span></span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfAnsweredQuestions <span class="token operator">==</span> a<span class="token punctuation">.</span>numberOfCorrectAnswers<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You got all correct, good job!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfCorrectAnswers <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, this was not impressive at all, 0 correct answers. Better luck next time!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Result</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question1Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>reset<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,B;return i=new tn({props:{project:{app:{code:`class MyApp extends App{
	
	numberOfAnsweredQuestions = 0
	numberOfCorrectAnswers = 0
	
	createStartPage(){
		return Question1Page
	}
	
	onCorrectAnswer(){
		a.numberOfAnsweredQuestions += 1
		a.numberOfCorrectAnswers += 1
	}
	
	onWrongAnswer(){
		a.numberOfAnsweredQuestions += 1
	}
	
	reset(){
		a.numberOfAnsweredQuestions = 0
		a.numberOfCorrectAnswers = 0
	}
	
}`},folders:[{id:1,name:"Start",offsetX:203,offsetY:177}],pages:[{id:1,folderId:1,code:`class Question1Page extends Page{
	
	createGui(){
		return Rows.children(
			
			Text.text(\`Question 1\`),
			
			Text.text(\`Which colors does the Swedish flag consist of?\`)
				.size(2),
			
			Rows.size(1).children(
				
				Columns.size(1).children(
					Button.text(\`Red and Blue\`).size(1).onClick(a.onWrongAnswer),
					Button.text(\`Blue and Yellow\`).size(1).onClick(a.onCorrectAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Blue and lime\`).size(1).onClick(a.onWrongAnswer),
					Button.text(\`White and Red\`).size(1).onClick(a.onWrongAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			Direction.page(Question2Page).when(true).text(\`On answer\`),
		]
	}
	
}`,x:-2,y:72},{id:6,folderId:1,code:`class Question2Page extends Page{
	
	createGui(){
		return Rows.children(
			
			Text.text(\`Question 2\`),
			
			Text.text(\`Which country has the smallest land size?\`)
				.size(2),
			
			Rows.size(1).children(
				
				Columns.size(1).children(
					Button.text(\`England\`).size(1).onClick(a.onWrongAnswer),
					Button.text(\`Denmark\`).size(1).onClick(a.onWrongAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Germany\`).size(1).onClick(a.onWrongAnswer),
					Button.text(\`Andorra\`).size(1).onClick(a.onCorrectAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			Direction.page(Question3Page).when(true).text(\`On answer\`),
		]
	}
	
}`,x:276,y:70},{id:7,folderId:1,code:`class Question3Page extends Page{
	
	createGui(){
		return Rows.children(
			
			Text.text(\`Question 3\`),
			
			Text.text(\`In which country do they speak Spanish?\`)
				.size(2),
			
			Rows.size(1).children(
				
				Columns.size(1).children(
					Button.text(\`Spain\`).size(1).onClick(a.onCorrectAnswer),
					Button.text(\`Italy\`).size(1).onClick(a.onWrongAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Russia\`).size(1).onClick(a.onWrongAnswer),
					Button.text(\`Scotland\`).size(1).onClick(a.onWrongAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			Direction.page(ResultPage).when(true).text(\`On answer\`),
		]
	}
	
}`,x:535,y:72},{id:8,folderId:1,code:`class ResultPage extends Page{
	
	createGui(){
		
		let text = \`You got \${a.numberOfCorrectAnswers} of \${a.numberOfAnsweredQuestions} correct.\`
		
		if(a.numberOfAnsweredQuestions == a.numberOfCorrectAnswers){
			text = \`You got all correct, good job!\`
		}else if(a.numberOfCorrectAnswers == 0){
			text = \`Oh, this was not impressive at all, 0 correct answers. Better luck next time!\`
		}
		
		return Rows.children(
			
			Text.text(\`Result\`),
			
			Text.text(text).size(1),
			
			Columns.children(
				Space,
				Button.text(\`Try again\`).page(Question1Page).onClick(a.reset),
				Space,
			),
			
		)
	}
	
}`,x:548,y:453}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){p=o("h1"),p.textContent=S,C=Y(),l=o("p"),l.textContent=v,b=Y(),t=o("div"),N(i.$$.fragment),e=o("a"),e.textContent=T,k=o("pre"),y=new w(!1),r=o("pre"),z=new w(!1),g=o("pre"),P=new w(!1),m=o("pre"),O=new w(!1),f=o("pre"),R=new w(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),Q(p)!=="svelte-1ltlcx"&&(p.textContent=S),C=G(n),l=c(n,"P",{"data-svelte-h":!0}),Q(l)!=="svelte-1jj6ixc"&&(l.textContent=v),b=G(n),t=c(n,"DIV",{});var s=d(t);L(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),Q(e)!=="svelte-xz037u"&&(e.textContent=T),k=c(s,"PRE",{class:!0});var W=d(k);y=h(W,!1),W.forEach(a),r=c(s,"PRE",{class:!0});var _=d(r);z=h(_,!1),_.forEach(a),g=c(s,"PRE",{class:!0});var D=d(g);P=h(D,!1),D.forEach(a),m=c(s,"PRE",{class:!0});var E=d(m);O=h(E,!1),E.forEach(a),f=c(s,"PRE",{class:!0});var j=d(f);R=h(j,!1),j.forEach(a),s.forEach(a),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNrFV39v2kgQ/Srb1UkF1WeBaUqEFFWkrar8cZc2iZSL2khs7TH4WHbR7vooRf7uN2tjx+sAgnCXCIFsdubN7Mx7+2NF2XxOBysaygjogIacaU3+WA7ncwI/DYhIE3xefRffjf2KdPYD1GU8FHoBCqKvKWiTSKHJGenUDT5IpSA0hV01ar+hAmbg2jBlvrAxtNoFuFFgUiVIidi1g3YkKx2lcEArR+Zvz+rNGek2rRqplSa1OLdKivETolQQCjSYvVzLwmzPb22xxs5o5tFY8giH6ODbiiYRHXQ9KtjM9i8vK/WojGPM4C86CDq98u0ODfv97N6jcyyt410AXhQvDhWcdlSUsC8rt6Gf06TZyiu50H44SXikQLSKocLFfm4QzDf40xqVQUh31PZ22N1OknBCQskl1iWSoImZALleQJToCYk5G+Og0Ik2RMbvR+0Kyvg6+QWt4DF6nmM+2G1vyNU8PH2QPJ2J3cbmPDXIn3W6VxARJiJyzlMYtStH5DFPwmmL+Q7Tark1gSxAjnQHnMvFFiyHN3U0B/mI+VRp8GR23ISwkaaAwhodhrRpMuV/bUeEBS+HsQH1MbGVsYJrcvRbiVGZ+FYdrZKSgaV6219MsDBGpfhYzOBSYPo2t4qx945KPfqTDn4PPLqkg36QeYXU3u0jteBZpBbsJ7VUGLUkE1ZITc8Y5whAuO2d7drLq+yTGNtsjuLjRxAzpqbHM/EpE/gMasbE8qgJDEWE6mf/xcrwP4qpd4yYgv67Qk2dUk39fdTUexY19Xar6UKQhSOoSFo9LYmeA5uS6zkTuIO9vJYwkUQcSqIGxoVhfPkySrpKtU7YUUK6DqU5fDl5Jh1dgU65OUZEJ72TxpZ0uktEDwH3VVDxy8EQmxUeXkd3MiVjachvq21H3AxPa87wo2NyhsLJPfxRPUwSt3aerc/ItpBVuqaZJm5wZTAP/5AR+Vv+eLUOmwHXQJywzdM6Htcfg19OPNR7oskCN1KBUZLZHO8IOvkHT0F5TI90yrDrNmqfnAMiKMLTcEqEhTJ48KpyqVfi0IWraOzORcv+VCJ4ZFeKc4MocREJoSYIR183uPixcbHKOHtDt6D1g9jyO1RdWC5uM6X2BrK/Pc3J/vakV956bmA250hZ5/bjUH6opxfxMNpJeynOIZYKHNZnT9xW3GnVejRUQJbIylydSB+G96PT97WeuZ5P7cifsmyFSDnfXvCG2x3o/fw2r4NS5GvgpgraK27Rm6DRm08CXYZjeOnO3E6Yea1tcxSSGbb3xKlYt7O5YK7RyR5GwT5IwRakeoaH9OQ++xcX8axp"),u(e,"title","Open in our Online Editor"),y.a=null,u(k,"class","language-js"),z.a=null,u(r,"class","language-js"),P.a=null,u(g,"class","language-js"),O.a=null,u(m,"class","language-js"),R.a=null,u(f,"class","language-js")},m(n,s){A(n,p,s),A(n,C,s),A(n,l,s),A(n,b,s),A(n,t,s),X(i,t,null),x(t,e),x(t,k),y.m(U,k),x(t,r),z.m(H,r),x(t,g),P.m(K,g),x(t,m),O.m(V,m),x(t,f),R.m(Z,f),B=!0},p:F,i(n){B||($(i.$$.fragment,n),B=!0)},o(n){nn(i.$$.fragment,n),B=!1},d(n){n&&(a(p),a(C),a(l),a(b),a(t)),sn(i)}}}class cn extends J{constructor(p){super(),M(this,p,null,an,q,{})}}export{cn as component};
