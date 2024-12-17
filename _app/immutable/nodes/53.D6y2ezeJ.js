import{s as M,n as H}from"../chunks/scheduler.B0TnBjPs.js";import{S as J,i as L,e,s as G,c as U,H as x,a as c,g as B,b as q,d as f,f as Z,n as h,h as t,o as u,j as A,m as X,p as d,t as $,k as nn,l as sn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.CB1BM1bD.js";function tn(z){let p,v="Quiz",b,l,W="This example shows how to create a small app functioning as a quiz.",C,a,i,o,_="Open in Online Editor",k,Q,I=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,O,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which colors does the Swedish flag consist of?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Red and Blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and Yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">White and Red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question2Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,y,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which country has the smallest land size?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">England</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Denmark</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Germany</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Andorra</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question3Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,P,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In which country do they speak Spanish?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Spain</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Italy</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Russia</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Scotland</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ResultPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,w,T,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ResultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,R;return i=new an({props:{project:{app:{code:`class MyApp extends App{
	
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
					Button.text(\`Red and Blue\`).grow(1).onClick(a.onWrongAnswer),
					Button.text(\`Blue and Yellow\`).grow(1).onClick(a.onCorrectAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Blue and lime\`).grow(1).onClick(a.onWrongAnswer),
					Button.text(\`White and Red\`).grow(1).onClick(a.onWrongAnswer),
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
					Button.text(\`England\`).grow(1).onClick(a.onWrongAnswer),
					Button.text(\`Denmark\`).grow(1).onClick(a.onWrongAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Germany\`).grow(1).onClick(a.onWrongAnswer),
					Button.text(\`Andorra\`).grow(1).onClick(a.onCorrectAnswer),
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
					Button.text(\`Spain\`).grow(1).onClick(a.onCorrectAnswer),
					Button.text(\`Italy\`).grow(1).onClick(a.onWrongAnswer),
				),
				
				Columns.grow(1).children(
					Button.text(\`Russia\`).grow(1).onClick(a.onWrongAnswer),
					Button.text(\`Scotland\`).grow(1).onClick(a.onWrongAnswer),
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
	
}`,x:548,y:453}]}}}),{c(){p=e("h1"),p.textContent=v,b=G(),l=e("p"),l.textContent=W,C=G(),a=e("div"),U(i.$$.fragment),o=e("a"),o.textContent=_,k=e("pre"),Q=new x(!1),r=e("pre"),O=new x(!1),g=e("pre"),y=new x(!1),m=e("pre"),P=new x(!1),w=e("pre"),T=new x(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),B(p)!=="svelte-1ltlcx"&&(p.textContent=v),b=q(n),l=c(n,"P",{"data-svelte-h":!0}),B(l)!=="svelte-1jj6ixc"&&(l.textContent=W),C=q(n),a=c(n,"DIV",{});var s=f(a);Z(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),B(o)!=="svelte-8ocndi"&&(o.textContent=_),k=c(s,"PRE",{class:!0});var S=f(k);Q=h(S,!1),S.forEach(t),r=c(s,"PRE",{class:!0});var j=f(r);O=h(j,!1),j.forEach(t),g=c(s,"PRE",{class:!0});var E=f(g);y=h(E,!1),E.forEach(t),m=c(s,"PRE",{class:!0});var Y=f(m);P=h(Y,!1),Y.forEach(t),w=c(s,"PRE",{class:!0});var D=f(w);T=h(D,!1),D.forEach(t),s.forEach(t),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrFl21v2jAQx7+KZ+0FaFnEQ1sqpGrqw1T1xdQNKnVVWwk3MeDh2JHtLGUo331nQlISHgTN1golSvD5f2f7fvZlhkkY4u4Me9KnuIs9TrRG36anYYjos6HC1wieZw/iwdhLRMETVdfDU6Fjqqj/I6LaMCk0OkGNZYNzqRT1TGqXt9rLU5QY2jdEme9kRGv1VNwoaiIlUKbYtI22Jck6SlEQzTsSd3NUn05Qs2xVCi0zWfJzq6QYvcJLLqGopmanrtnEbI5vYbHQTnDi4KHkPjTh7v0MMx93mw4WJLDrN59W7GA5HEIEP3G31Whnb3dg2Okkjw4OYWoLvVPBq/SlkAqF5chTwr7Migt6GbHyUvZkrF1vzLivqKilTWkX+7sBMdfArTbInKDmoO5ssbsdM2+MPMklzIsvqUZmTFE/pj7TYzTkZASNQjNtkBx+GdRzKeOOlIxrrVX1eYzzxmZ9Tazm5elc8igQ243NWWQgfxbh9qiPiPDRGY/ooJ53hDzmzJvUiFvItKXYykJWYK50RzmX8QatQt4sqxWUK4wnD4OzoNqAYCFNKgVztJ/SusFk/9ULEKZ5eTo0VF0wOzMWuHKO3mcauYlr6ahlKdmyqV534zFMjFERPKYjuBYQvo0tz9jHAqUOfsbdzy0HT3G300qcFLWjXVBrvQlqrd1Qi4RRUzQmKWo6IJyDAOJ27TT7Q9+fsq9iZKOplI8XVARETapn4msGcElVQMS00gBOhQ/0k3+xM/xHmNpVYGp1jlKaGhlNnV1oar8JTe3tNF0JFBeA8qXlaYp0SMkE9UMi4AR7f5YgECb2TaKSxpUhfPo+JPUirRmpBFLfk2b/7eSNOOpRHXFTBaLD9mHpSDreBtGLw10JSu+cGmSjguJ1cCcjNJIGfZxtKnETqNYKzStlcgLgzHu4g2U3bFjbWlufoE0u83BNOUw44DJnDvwhffRLPn1YuE0o1xQV3JardSjXV8Wvxw7wzjSK4SAV4IUFIXwjaPYbqqC5Twc1MreLZdQuOqOgoBCPvAkSVspA4ZXHsjwT+25c6cJu3bTsLYdgxS6Dcw2UsIl4dAmIAl83sPmRUbrLFM6GZprWL7DNv6GWwSrqlkOqr0n2g+N5sh8ctpPH5C95t3ke"),u(o,"title","Open in our Online Editor"),Q.a=null,u(k,"class","language-js"),O.a=null,u(r,"class","language-js"),y.a=null,u(g,"class","language-js"),P.a=null,u(m,"class","language-js"),T.a=null,u(w,"class","language-js")},m(n,s){A(n,p,s),A(n,b,s),A(n,l,s),A(n,C,s),A(n,a,s),X(i,a,null),d(a,o),d(a,k),Q.m(I,k),d(a,r),O.m(K,r),d(a,g),y.m(N,g),d(a,m),P.m(V,m),d(a,w),T.m(F,w),R=!0},p:H,i(n){R||($(i.$$.fragment,n),R=!0)},o(n){nn(i.$$.fragment,n),R=!1},d(n){n&&(t(p),t(b),t(l),t(C),t(a)),sn(i)}}}class cn extends J{constructor(p){super(),L(this,p,null,tn,M,{})}}export{cn as component};
