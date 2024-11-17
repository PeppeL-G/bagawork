import{s as N,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as V,i as H,e as o,s as G,c as L,H as x,a as c,g as P,b as M,d,f as J,n as h,h as t,o as u,j as C,m as X,p as w,t as $,k as nn,l as sn}from"../chunks/index.Cnh3HYw3.js";import{V as an}from"../chunks/ViewApp.BajIxHdc.js";function tn(I){let p,O="Quiz",b,l,T="This example shows how to create a small app functioning as a quiz.",A,a,i,e,v="Open in Online Editor",k,z,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,y,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,g,R,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,B,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,f,Q,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ResultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,W;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:548,y:453}]}}}),{c(){p=o("h1"),p.textContent=O,b=G(),l=o("p"),l.textContent=T,A=G(),a=o("div"),L(i.$$.fragment),e=o("a"),e.textContent=v,k=o("pre"),z=new x(!1),r=o("pre"),y=new x(!1),g=o("pre"),R=new x(!1),m=o("pre"),B=new x(!1),f=o("pre"),Q=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),P(p)!=="svelte-1ltlcx"&&(p.textContent=O),b=M(n),l=c(n,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1jj6ixc"&&(l.textContent=T),A=M(n),a=c(n,"DIV",{});var s=d(a);J(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),P(e)!=="svelte-ol6y58"&&(e.textContent=v),k=c(s,"PRE",{class:!0});var _=d(k);z=h(_,!1),_.forEach(t),r=c(s,"PRE",{class:!0});var E=d(r);y=h(E,!1),E.forEach(t),g=c(s,"PRE",{class:!0});var j=d(g);R=h(j,!1),j.forEach(t),m=c(s,"PRE",{class:!0});var D=d(m);B=h(D,!1),D.forEach(t),f=c(s,"PRE",{class:!0});var S=d(f);Q=h(S,!1),S.forEach(t),s.forEach(t),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNrFl21v2jAQx7+KZ+0FaFnEQ1sqpGrqw1T1xdQNKnVVWwk3ccDD2Mh2RhnKd985IWkSHgTN1golSvD5f2ff/Wxngcl0irsL7Emf4i72ONEafZufTqeIPhsqfI3gefEgHoy9RDh5ouo6OBV6RhX1f4RUGyaFRieokTc4l0pRzyR2Wau9PEWJoX1DlPlOhrRWT8SNoiZUAqWKTdtoW6K0oxQF0awjcTdH9ekENctWpdBSk5yfWyXF8BVeMglFNTU7dU0nZnN8S4uldoQjBweS+9CEu/cLzHzcbTpYkInNXzyt2MEyCCCCn7jbarTTtzsw7HSiRwdPYWoLvRPBq+SlUAqFdGQlYV8WxYRehqycyp6cadcbMe4rKmpJU9LF/m5AzDVwqw1SJ6g5qDtb7G5HzBshT3IJ8+JLqpEZUdSfUZ/pEQo4GUKj0EwbJIMvg3omZVzN/tBaa1U9jjFubNbXxGpens4lDydiu7E5Cw3UzzLcHvURET464yEd1LOOUMeceeMacQuVloutLGQFYqU7yrmcbdAq1E1eraBcYTxZGJxNqg0IEmkSKZij/ZTWDSb9r16AMKnL08BQdcHszFjgyjV6n2pkJq6lo5aWZMuWet2djWBijArhMRnBtYDwbWxZxT4WKHXwM+5+bjl4jrudVuQkqB3tglrrTVBr7YZaKIyaoxFJUNMTwjkIIG5zZ7P2/pR9FUMbTaV6vKBiQtS4eiW+ZgCXVE2ImFcawKnwgX7yL1aG/whTuwpMrc5RQlMjpamzC03tN6GpvZ2mK4FmBaB8aXmaIz2lZIz6UyJgB3t/liAQJvYtopLGlSF8/j4k9UKtGakEUt+TZv/l5I046lEdclMFosP2YWlLOt4G0YvDXQlK7pwaZKOCw+vgToZoKA36uNh0xI3gtFZoXjkmRwBO3MMd5N2woLb1bH2CNrnMwjXlMGGDS5058If00S/59GHpNqJcU1RwWz6tw3F9Vfx65ADvTKMZbKQCvLDJFL4RNPsNp6DYp4MaqdtlGrWLzigoKMRDb4yElTJw8Mpiyc/EvgtXktiti5a9ZRCs2KVwroESFhGP5oAo8HUDix8ZJqtMYW9oJmX9Alv8DZUHq6hbDqm+ptgPjuNiPzhsR4/RX38reLo="),u(e,"title","Open in our Online Editor"),z.a=null,u(k,"class","language-js"),y.a=null,u(r,"class","language-js"),R.a=null,u(g,"class","language-js"),B.a=null,u(m,"class","language-js"),Q.a=null,u(f,"class","language-js")},m(n,s){C(n,p,s),C(n,b,s),C(n,l,s),C(n,A,s),C(n,a,s),X(i,a,null),w(a,e),w(a,k),z.m(Z,k),w(a,r),y.m(q,r),w(a,g),R.m(F,g),w(a,m),B.m(K,m),w(a,f),Q.m(U,f),W=!0},p:Y,i(n){W||($(i.$$.fragment,n),W=!0)},o(n){nn(i.$$.fragment,n),W=!1},d(n){n&&(t(p),t(b),t(l),t(A),t(a)),sn(i)}}}class cn extends V{constructor(p){super(),H(this,p,null,tn,N,{})}}export{cn as component};
