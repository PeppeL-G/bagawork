import{s as E,n as N}from"../chunks/scheduler.B0TnBjPs.js";import{S as V,i as A,e as k,s as S,c as W,H as z,a as i,g as w,b as C,d as h,f as Z,n as X,h as e,o as r,j as m,m as R,p as y,t as H,k as _,l as F}from"../chunks/index.CHfggXAQ.js";import{V as q}from"../chunks/ViewApp.6tllL5xD.js";function U(O){let a,T="Tic Tac Toe",g,o,B='This example shows how to create an app where the user can play <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="nofollow" target="_blank">Tic Tac Toe</a> against another human (on the same device).',f,t,c,p,v="Open in Online Editor",u,d,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">TicTacToeApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	cells <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">]</span>
	
	nextTurn <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">X</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>cells <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">]</span>
		a<span class="token punctuation">.</span>nextTurn <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">X</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">placeNextInCell</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">.</span>nextTurn
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>nextTurn <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">X</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			a<span class="token punctuation">.</span>nextTurn <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">O</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
			a<span class="token punctuation">.</span>nextTurn <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">X</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">hasGameStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> <span class="token boolean">false</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// First row.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Second row.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Third row.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// First column.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Second column.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Third column.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Diagonal top left to bottom right.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Diagonal top right to bottom left.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">isGameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> <span class="token boolean">true</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,l,b,P=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createButton</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button
			<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>nextTurn<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>placeNextInCell<span class="token punctuation">,</span> cellIndex<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createText</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Tic Tac Toe!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createButton</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						p<span class="token punctuation">.</span><span class="token function">createText</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">getBottomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Restart</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>reset<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">isGameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getBottomText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> wins!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">isGameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Game Over!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">hasGameStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>a<span class="token punctuation">.</span>nextTurn<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> turn to act!</span><span class="token template-punctuation string">&#96;</span></span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good luck :)</span><span class="token template-punctuation string">&#96;</span></span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,x;return c=new q({props:{project:{app:{code:`class TicTacToeApp extends App{
	
	cells = [\`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`]
	
	nextTurn = \`X\`
	
	reset(){
		a.cells = [\`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`, \`\`]
		a.nextTurn = \`X\`
	}
	
	placeNextInCell(cellIndex){
		a.cells[cellIndex] = a.nextTurn
		if(a.nextTurn == \`X\`){
			a.nextTurn = \`O\`
		}else{
			a.nextTurn = \`X\`
		}
	}
	
	createStartPage(){
		return StartPage
	}
	
	hasGameStarted(){
		
		if(a.cells[0] != \`\`){
			return true
		}
		
		if(a.cells[1] != \`\`){
			return true
		}
		
		if(a.cells[2] != \`\`){
			return true
		}
		
		if(a.cells[3] != \`\`){
			return true
		}
		
		if(a.cells[4] != \`\`){
			return true
		}
		
		if(a.cells[5] != \`\`){
			return true
		}
		
		if(a.cells[6] != \`\`){
			return true
		}
		
		if(a.cells[7] != \`\`){
			return true
		}
		
		if(a.cells[8] != \`\`){
			return true
		}
		
		return false
		
	}
	
	getWinner(){
		
		// First row.
		if(a.cells[0] != \`\` && a.cells[0] == a.cells[1] && a.cells[1] == a.cells[2]){
			return a.cells[0]
		}
		
		// Second row.
		if(a.cells[3] != \`\` && a.cells[3] == a.cells[4] && a.cells[4] == a.cells[5]){
			return a.cells[3]
		}
		
		// Third row.
		if(a.cells[6] != \`\` && a.cells[6] == a.cells[7] && a.cells[7] == a.cells[8]){
			return a.cells[6]
		}
		
		// First column.
		if(a.cells[0] != \`\` && a.cells[0] == a.cells[3] && a.cells[3] == a.cells[6]){
			return a.cells[0]
		}
		
		// Second column.
		if(a.cells[1] != \`\` && a.cells[1] == a.cells[4] && a.cells[4] == a.cells[7]){
			return a.cells[1]
		}
		
		// Third column.
		if(a.cells[2] != \`\` && a.cells[2] == a.cells[5] && a.cells[5] == a.cells[8]){
			return a.cells[2]
		}
		
		// Diagonal top left to bottom right.
		if(a.cells[0] != \`\` && a.cells[0] == a.cells[4] && a.cells[4] == a.cells[8]){
			return a.cells[0]
		}
		
		// Diagonal top right to bottom left.
		if(a.cells[2] != \`\` && a.cells[2] == a.cells[4] && a.cells[4] == a.cells[6]){
			return a.cells[2]
		}
		
		return \`\`
		
	}
	
	isGameOver(){
		
		if(a.getWinner() != \`\`){
			return true
		}
		
		if(a.cells[0] == \`\`){
			return false
		}
		
		if(a.cells[1] == \`\`){
			return false
		}
		
		if(a.cells[2] == \`\`){
			return false
		}
		
		if(a.cells[3] == \`\`){
			return false
		}
		
		if(a.cells[4] == \`\`){
			return false
		}
		
		if(a.cells[5] == \`\`){
			return false
		}
		
		if(a.cells[6] == \`\`){
			return false
		}
		
		if(a.cells[7] == \`\`){
			return false
		}
		
		if(a.cells[8] == \`\`){
			return false
		}
		
		return true
		
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createButton(cellIndex){
		return Button
			.keepIf(a.cells[cellIndex] == \`\` && a.getWinner() == \`\`)
			.size(1)
			.border(1, \`black\`)
			.text(a.nextTurn)
			.onClick(a.placeNextInCell, cellIndex)
	}
	
	createText(cellIndex){
		return Text
			.keepIf(a.cells[cellIndex] != \`\` || a.getWinner() != \`\`)
			.size(1)
			.text(a.cells[cellIndex])
	}
	
	createGui(){
		return Rows.padding(1).children(
			Text.text(\`Tic Tac Toe!\`).padding(5),
			Box.size(1).aspectRatio(1, 1).child(
				Rows.backgroundColor(\`red\`).border(1, \`black\`).children(
					Box.height(1),
					Columns.size(1).children(
						Box.width(1),
						p.createButton(0),
						p.createText(0),
						Box.width(1),
						p.createButton(1),
						p.createText(1),
						Box.width(1),
						p.createButton(2),
						p.createText(2),
						Box.width(1),
					),
					Box.height(1),
					Columns.size(1).children(
						Box.width(1),
						p.createButton(3),
						p.createText(3),
						Box.width(1),
						p.createButton(4),
						p.createText(4),
						Box.width(1),
						p.createButton(5),
						p.createText(5),
						Box.width(1),
					),
					Box.height(1),
					Columns.size(1).children(
						Box.width(1),
						p.createButton(6),
						p.createText(6),
						Box.width(1),
						p.createButton(7),
						p.createText(7),
						Box.width(1),
						p.createButton(8),
						p.createText(8),
						Box.width(1),
					),
					Box.height(1),
				),
			),
			Text.text(p.getBottomText()).padding(5),
			Button.text(\`Restart\`).onClick(a.reset).showIf(a.isGameOver()),
		)
	}
	
	getBottomText(){
		
		if(a.getWinner() != \`\`){
			return \`\${a.getWinner()} wins!\`
		}
		
		if(a.isGameOver()){
			return \`Game Over!\`
		}
		
		if(a.hasGameStarted()){
			return \`\${a.nextTurn} turn to act!\`
		}
		
		return \`Good luck :)\`
		
	}
	
}`,x:561,y:295}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
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
	
}`}]}}}),{c(){a=k("h1"),a.textContent=T,g=S(),o=k("p"),o.innerHTML=B,f=S(),t=k("div"),W(c.$$.fragment),p=k("a"),p.textContent=v,u=k("pre"),d=new z(!1),l=k("pre"),b=new z(!1),this.h()},l(n){a=i(n,"H1",{"data-svelte-h":!0}),w(a)!=="svelte-1910wq"&&(a.textContent=T),g=C(n),o=i(n,"P",{"data-svelte-h":!0}),w(o)!=="svelte-7aksvh"&&(o.innerHTML=B),f=C(n),t=i(n,"DIV",{});var s=h(t);Z(c.$$.fragment,s),p=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),w(p)!=="svelte-1z39hq"&&(p.textContent=v),u=i(s,"PRE",{class:!0});var G=h(u);d=X(G,!1),G.forEach(e),l=i(s,"PRE",{class:!0});var I=h(l);b=X(I,!1),I.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrNWGFvozYY/isuOt0SCeUKCSQXqZrSbjvly93URrqe2khQcBIUaiNjlt5y+e8zEMAGmyVkm/YhEvD6efz49cvrh+w1N4q06V7zsA+1qeaFbhyDReAtXG+B4SyKAHyjEPkxYNf7Z/RM058HwzAGN+DJcXTQ/lsWGMSIFglBDOY8OsVTAmNIe/2cmbqDs5kZpsl8KOij0PXgZxafozvG3Evp58iHb7UZn8rAkrFUlPmgYNXjZ8mmKQjqAr7kS6MHGMZQMeaxGCNo9Qh0KXygLqG/u2tYJoVAmuLKgADauPEn9zVHQb/EcLrz9V0vwRWbmZN9pKUkgZwaCdToDjW7Q4fdoaPuUKs71O4OHXeHTs6EHqMrl1Vn9bwspzWkXwOEIKlV0ocP4LeAxBQQvBsoiwu8fw+4Zzc3gKshLmYIMXPZEF+RSJbAtDxADyNfLmYoETMUJhwJYkZCzFKLGSrELDYBUWixJVpsYb6xoGUsxCZqLbZCS75JHg6TV9Rln4ZLddrszvuk0mNI9Bgnb9VYrcdo3SqVHFMix6xVBx+zTt0tUyHnl8BdY+SGgOIIhHBF2QV4wZTiV0CC9YZ22cK2lE3O30JBYyaKE5lq7pLHNo32mXk8jnEcSTsLssPxyx+Nfpap5Zpd5/6b514C5Tpsy8HaGWtegB1egB1dgLUuwNoXYMcXYCfnYhuVwxXkQTvo2gqHPiSxNn3aa4GvTQ1dQ6xImfnOTJyma3i1Yqb4UZteF9ff2PVhqWsRs38CMieb5zeChy/tYmng05u9aDZvE/Yao6YrPi4iDxcLH2whjOZVanjLXL3u/EuVZ67Ex8GfsGdU9y+YMPE9g5n5F+bTt9xQykRznrsKYHQXBt6WxWrWXgfVKiS2epESqtaZBk9YZd7UfvwAstahXOVxKXU2mchPSVB3/fd4Fw8i1/cDtGasA28ThD6BqFfwp9rzORz22QbYdxtgH25XTr9EWX29GHyL3wp9AzeOoEfvXRrgdAsK7pL4mWZzv7CNWROcIP8Oh5j0HAJ9Rt7cu6a0YsYNTI8NNqfOR+6yUzgu9UjhOcEu8OmmjmcfdwOhiq9V8WzvG9HTiY1WYqM7sdlKbJ5MLN79hykfti5g2D0zo1biUXdiq5XY+v+n3G5dgN09M+NW4nF34kkr8eQfTnl1XV1VPTJKO/dtZl6z2fvyNpkJP3bVexinRylrcNXZk/1r1R/EG7zLjgreZxY0/fqHNT9tFzPqvNsLww5gF6D4ylEZGEFUgyyNgTSoJqj/tyRXVJzRB5AbHwxcj0pJy6kx9kGYeFsw7TsSk6Rrb9rUspmj+a5NzY9W4XwW8JUd+lR0QILpmcXb+WrmJ+HfOh/VUdt4Px8iZjMkleTMCATfcQIyBwboxkXAmPzsVFUkIotGIGkA4sBa+X3G2VG+hj2UhCFf6a2wbzA+DScr19Sn5gk2awn+FVFIZmv476f368alP8Vphglg/OrECss2ruWrFgdZJwwyT2EyFUy8wlpil4e/AGQNdck="),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),b.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),R(c,t,null),y(t,p),y(t,u),d.m(Y,u),y(t,l),b.m(P,l),x=!0},p:N,i(n){x||(H(c.$$.fragment,n),x=!0)},o(n){_(c.$$.fragment,n),x=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),F(c)}}}class Q extends V{constructor(a){super(),A(this,a,null,U,E,{})}}export{Q as component};
