import{s as K,n as z}from"../chunks/scheduler.B0TnBjPs.js";import{S as F,i as H,e,s as I,c as M,H as h,a as c,g as P,b as N,d as w,f as X,n as x,h as t,o as u,j as b,m as L,p as d,t as $,k as nn,l as sn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.qg7AIhJt.js";function tn(Z){let p,_="Quiz",C,l,W="This example shows how to create a small app functioning as a quiz.",A,a,i,o,v="Open in Online Editor",k,S,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,y,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which colors does the Swedish flag consist of?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Red and Blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and Yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">White and Red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question2Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,O,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which country has the smallest land size?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">England</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Denmark</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Germany</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Andorra</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question3Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,R,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In which country do they speak Spanish?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Spain</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Italy</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Russia</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Scotland</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">growShrink</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ResultPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f,Q,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ResultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfCorrectAnswers<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>numberOfAnsweredQuestions<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> correct.</span><span class="token template-punctuation string">&#96;</span></span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfAnsweredQuestions <span class="token operator">==</span> a<span class="token punctuation">.</span>numberOfCorrectAnswers<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">You got all correct, good job!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>numberOfCorrectAnswers <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			text <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Oh, this was not impressive at all, 0 correct answers. Better luck next time!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Result</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question1Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>reset<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,B;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
				.grow(2),
			
			Rows.grow(1).children(
				
				Columns.grow(1).children(
					Button.text(\`Red and Blue\`).growShrink(1).onClick(a.onWrongAnswer),
					Button.text(\`Blue and Yellow\`).growShrink(1).onClick(a.onCorrectAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Blue and lime\`).growShrink(1).onClick(a.onWrongAnswer),
					Button.text(\`White and Red\`).growShrink(1).onClick(a.onWrongAnswer),
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
				.grow(2),
			
			Rows.grow(1).children(
				
				Columns.grow(1).children(
					Button.text(\`England\`).growShrink(1).onClick(a.onWrongAnswer),
					Button.text(\`Denmark\`).growShrink(1).onClick(a.onWrongAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Germany\`).growShrink(1).onClick(a.onWrongAnswer),
					Button.text(\`Andorra\`).growShrink(1).onClick(a.onCorrectAnswer),
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
				.grow(2),
			
			Rows.grow(1).children(
				
				Columns.grow(1).children(
					Button.text(\`Spain\`).growShrink(1).onClick(a.onCorrectAnswer),
					Button.text(\`Italy\`).growShrink(1).onClick(a.onWrongAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Russia\`).growShrink(1).onClick(a.onWrongAnswer),
					Button.text(\`Scotland\`).growShrink(1).onClick(a.onWrongAnswer),
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
			
			Text.text(text).grow(1),
			
			Columns.children(
				Space,
				Button.text(\`Try again\`).page(Question1Page).onClick(a.reset),
				Space,
			),
			
		)
	}
	
}`,x:548,y:453}]}}}),{c(){p=e("h1"),p.textContent=_,C=I(),l=e("p"),l.textContent=W,A=I(),a=e("div"),M(i.$$.fragment),o=e("a"),o.textContent=v,k=e("pre"),S=new h(!1),r=e("pre"),y=new h(!1),g=e("pre"),O=new h(!1),m=e("pre"),R=new h(!1),f=e("pre"),Q=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),P(p)!=="svelte-1ltlcx"&&(p.textContent=_),C=N(n),l=c(n,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1jj6ixc"&&(l.textContent=W),A=N(n),a=c(n,"DIV",{});var s=w(a);X(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),P(o)!=="svelte-1ezbb08"&&(o.textContent=v),k=c(s,"PRE",{class:!0});var j=w(k);S=x(j,!1),j.forEach(t),r=c(s,"PRE",{class:!0});var G=w(r);y=x(G,!1),G.forEach(t),g=c(s,"PRE",{class:!0});var T=w(g);O=x(T,!1),T.forEach(t),m=c(s,"PRE",{class:!0});var E=w(m);R=x(E,!1),E.forEach(t),f=c(s,"PRE",{class:!0});var D=w(f);Q=x(D,!1),D.forEach(t),s.forEach(t),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrFl21v2jAQx7+KZ+0F0bKIh7ZUSNVE26nqi6kbVOqqthJuYoiHsZHtjDKU775zQtIkUMQoa4USJfj8v7N9v7OzwGQ6xZ0F9mVAcQf7nGiNvs270ymiT4aKQCN4XtyLe2MvEU0eqboadoWeUUWDHxHVhkmh0QmqFw3OpFLUN6ld3movX1FiaN8QZb6TEa05qbhR1ERKoEyxYRttS5x1lKIkmnck3stRfTpBjapVJbTMpODnRkkx2sFLLqGopmarrtnEvBzf0mKpHePYxUPJA2jCnbsFZgHuNFwsyMSuXzKt2MVyOIQIfuJOs97K3m7BsN2OH1w8hakt9U4FL9OXUiqUliNPCfuyKC/oRcSqS9mTM+35IeOBoqKWNqVd7O8axDwDt9ogc4IaA8fdYHcTMj9EvuQS5iWQVCMTUtSf0YDpEA05GUGj0EwbJIdfBk4uZbyRkrNac1U9iTFpbDhrYjXPT2eSRxOx2dicRgbyZxlujwaIiACd8ogOnKRjP1RMjG13yGbO/HGNeKV8K0RYlbMyid4t5VzONiqWcqioWdJ/xdjyYDib7GNwsLQmFYRZ20Vv3cCy/5wSnGm+doeGqnNmZ8mCWM3du0wjN/EsNbUsVZsWAcebhTBJRkXwmI7jSsAgbGx5Jj+U6HXxE+58brp4jjvtZuymCB5tg2DzTRBsbodgJIyao5CkCOoJ4RwEELcrqNkf+v70fRUjG80ecvOciglR431l5S6DuaBqQsR8D4PpigBqA9lf9fiPkLVeA1mzfZRSVs8oa29DWetNKGttpuxSoFkJtEBazuZITykZo/6UCNjx3p8xCISJ3VKponRpCJ+/J2G9SGtG9gBY35dm18LzRnz1qI64eQ1ch63DyhZ2vAmuZ4fbkpXeOTXIRgWH4MGtjNBIGvRx8dJROYZTX6l55bgdA1BJD29QdMOGtY1n9BP0kss8XFMNEzbEzJkLf8gA/ZKPH5ZuY8o1RSW31VM/HPtXxa9CF+oA02gGG68AL2wyhW8NzX7D2Snx6aJ65na5jNpDpxQUFOKRP0bCShk4tOWxFGfiXwtaurAbi5m9ORmIK3YZqGsAheLi0wIQJcquoSiSUVp9SntGI03rZ9iSb7EiWGXdakjOmmQ/OE6S/eCwFT/EfwH8aZZS"),u(o,"title","Open in our Online Editor"),S.a=null,u(k,"class","language-js"),y.a=null,u(r,"class","language-js"),O.a=null,u(g,"class","language-js"),R.a=null,u(m,"class","language-js"),Q.a=null,u(f,"class","language-js")},m(n,s){b(n,p,s),b(n,C,s),b(n,l,s),b(n,A,s),b(n,a,s),L(i,a,null),d(a,o),d(a,k),S.m(q,k),d(a,r),y.m(U,r),d(a,g),O.m(Y,g),d(a,m),R.m(J,m),d(a,f),Q.m(V,f),B=!0},p:z,i(n){B||($(i.$$.fragment,n),B=!0)},o(n){nn(i.$$.fragment,n),B=!1},d(n){n&&(t(p),t(C),t(l),t(A),t(a)),sn(i)}}}class cn extends F{constructor(p){super(),H(this,p,null,tn,K,{})}}export{cn as component};
