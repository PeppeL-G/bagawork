import{s as H,n as J}from"../chunks/scheduler.DFPFbGJz.js";import{S as U,i as M,e as o,s as D,c as Z,H as w,a as c,g as P,b as N,d as f,f as L,n as x,h as a,o as u,j as A,m as X,p as h,t as $,k as nn,l as sn}from"../chunks/index.CzDE4dZi.js";import{V as tn}from"../chunks/ViewApp.C2MU7-ZI.js";function an(G){let p,j="Quiz",b,l,v="This example shows how to create a small app functioning as a quiz.",z,t,i,e,W="Open in Online Editor",k,C,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,y,V=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question1Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 1</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which colors does the Swedish flag consist of?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Red and Blue</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and Yellow</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Blue and lime</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">White and Red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question2Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,B,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question2Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 2</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Which country has the smallest land size?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">England</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Denmark</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Germany</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Andorra</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question3Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,R,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Question3Page</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Question 3</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">In which country do they speak Spanish?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Spain</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onCorrectAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Italy</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Russia</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Scotland</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>onWrongAnswer<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
				
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createAfterDirections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>
			Direction<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ResultPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">when</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">On answer</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,O,K=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ResultPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Try again</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>Question1Page<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>reset<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,T;return i=new tn({props:{project:{app:{code:`class MyApp extends App{
	
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
					Button.text(\`Red and Blue\`).size(1).handler(a.onWrongAnswer),
					Button.text(\`Blue and Yellow\`).size(1).handler(a.onCorrectAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Blue and lime\`).size(1).handler(a.onWrongAnswer),
					Button.text(\`White and Red\`).size(1).handler(a.onWrongAnswer),
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
					Button.text(\`England\`).size(1).handler(a.onWrongAnswer),
					Button.text(\`Denmark\`).size(1).handler(a.onWrongAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Germany\`).size(1).handler(a.onWrongAnswer),
					Button.text(\`Andorra\`).size(1).handler(a.onCorrectAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			Direction.page(Question3Page).when(true).text(\`On answer\`),
		]
	}
	
}`,x:276,y:75},{id:7,folderId:1,code:`class Question3Page extends Page{
	
	createGui(){
		return Rows.children(
			
			Text.text(\`Question 3\`),
			
			Text.text(\`In which country do they speak Spanish?\`)
				.size(2),
			
			Rows.size(1).children(
				
				Columns.size(1).children(
					Button.text(\`Spain\`).size(1).handler(a.onCorrectAnswer),
					Button.text(\`Italy\`).size(1).handler(a.onWrongAnswer),
				),
				
				Columns.size(1).children(
					Button.text(\`Russia\`).size(1).handler(a.onWrongAnswer),
					Button.text(\`Scotland\`).size(1).handler(a.onWrongAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			Direction.page(ResultPage).when(true).text(\`On answer\`),
		]
	}
	
}`,x:534,y:76},{id:8,folderId:1,code:`class ResultPage extends Page{
	
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
				Button.text(\`Try again\`).page(Question1Page).handler(a.reset),
				Space,
			),
			
		)
	}
	
}`,x:541,y:436}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){p=o("h1"),p.textContent=j,b=D(),l=o("p"),l.textContent=v,z=D(),t=o("div"),Z(i.$$.fragment),e=o("a"),e.textContent=W,k=o("pre"),C=new w(!1),r=o("pre"),y=new w(!1),g=o("pre"),B=new w(!1),m=o("pre"),R=new w(!1),d=o("pre"),O=new w(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),P(p)!=="svelte-1ltlcx"&&(p.textContent=j),b=N(n),l=c(n,"P",{"data-svelte-h":!0}),P(l)!=="svelte-1jj6ixc"&&(l.textContent=v),z=N(n),t=c(n,"DIV",{});var s=f(t);L(i.$$.fragment,s),e=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),P(e)!=="svelte-18zx8he"&&(e.textContent=W),k=c(s,"PRE",{class:!0});var Q=f(k);C=x(Q,!1),Q.forEach(a),r=c(s,"PRE",{class:!0});var S=f(r);y=x(S,!1),S.forEach(a),g=c(s,"PRE",{class:!0});var _=f(g);B=x(_,!1),_.forEach(a),m=c(s,"PRE",{class:!0});var E=f(m);R=x(E,!1),E.forEach(a),d=c(s,"PRE",{class:!0});var I=f(d);O=x(I,!1),I.forEach(a),s.forEach(a),this.h()},h(){u(e,"target","_blank"),u(e,"href","/editor#eNrFV2Fv2zYQ/SssMaA2pgmxnMSFgaBw2qLIhy5bEiAL2gBmpZOlhiYNkprrGfrvO0qWIiq2YcdbAsOCJN69O969R5FLymYzOlzSUEZAhzTkTGvyZTGazQj8NCAiTfB++U18M/Yvsul3UJfxSOg5KIj+zECbVApNzshR0+CDVApCU9rVo/YfKmAGrg1T5g82gU63BDcKTKYEqRB7dtCO5JWjFA5o7cj8zVn9ekZ6batWapVJI86tkmLyjCg1hAINZifXqjCb81tZrLBzmns0ljzCITr8uqRpRIc9jwo2tf0ryko9KuMYM/iLDoOjfvV0h4aDQX7v0RmW1vEuAS/KB4cKTjtqStiHpdvQz1nabuWVnGs/TFIeKRCdcqh0sb8bBPMNXjrjKgjpjbveFrvbJA0TEkousS6RBE1MAuR6DlGqExJzNsFBoVNtiIzfj7s1lPF1+g90gqfoRY7FYK+7JlfzePdB8mwqthub88wgf1bpXkFEmIjIOc9g3K0dE3zHkVnMd5jWyK0NZAEKpDvgXM43YDm8aaI5yAfMp06Dp9PDJoSNNCUU1mg/pHWTqd51HRGWvBzFBtTH1FbGCq7N0a8VRm3iW3V0KkoGlupdf55gYYzK8LacwaXA9G1uNWPvHZV69Ccd/hZ4dEGHgyD3Sqmd7iK14EWkFuwmtUwYtSAJK6Wmp4xzBCDc9s527fVV9klMbDYH8fEjiClTD4cz8TkT+AxqysTioAmMRITqZ//FyvA/iql/iJiCwWmpppNKTYNd1NR/ETX1t6vpQpC5I6hIWj0tiJ4BeyDXMybwC/b6WsJEUrEviVoYF4bxxeso6SrTOmUHCek6lGb/5eSFdHQFOuPmEBGd9I9LEZ1WInq3TUSPAXdVUHnlYIjNCjev4zuZkYk05Jflpi1ujrs1Z/jJNjlH4RQe/rgZJo07W/fWZ2RTyDpd004TP3BVMA9fyIj8kN/frMLmwDUQJ2x7t47b9afgl4mHek81meOHVGCUdDrDM4JO/8ZdUBHTI0dV2FUbtU/OAREU4Vn4QISFMrjxqnNpVmLfhats7NZFy15qETyxq8S5RpS4iITQEISjrxtc/NikXGWcb0OvpPWj2IozVFNYLm47pe4ash/3CrIf90+rU88NTGccKeucfhzKj/TDRTyKttJeinOIpQKH9fkzPyvutBo9GikgC2RloU6kD8Pz0bv3jZ65ns/tyO+yaoXION9c8JbbHejd/Navg1IUa+C6CtojbtmboNWbTwJdRhN47c7cJsy81bY5CskMm3viVKx3tL5grtHJDkbBLkjBBqRmhvv05D7/F125rco="),u(e,"title","Open in our Online Editor"),C.a=null,u(k,"class","language-js"),y.a=null,u(r,"class","language-js"),B.a=null,u(g,"class","language-js"),R.a=null,u(m,"class","language-js"),O.a=null,u(d,"class","language-js")},m(n,s){A(n,p,s),A(n,b,s),A(n,l,s),A(n,z,s),A(n,t,s),X(i,t,null),h(t,e),h(t,k),C.m(Y,k),h(t,r),y.m(V,r),h(t,g),B.m(q,g),h(t,m),R.m(F,m),h(t,d),O.m(K,d),T=!0},p:J,i(n){T||($(i.$$.fragment,n),T=!0)},o(n){nn(i.$$.fragment,n),T=!1},d(n){n&&(a(p),a(b),a(l),a(z),a(t)),sn(i)}}}class cn extends U{constructor(p){super(),M(this,p,null,an,H,{})}}export{cn as component};
