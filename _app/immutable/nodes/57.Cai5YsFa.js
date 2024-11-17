import{s as D,n as z}from"../chunks/scheduler.B0TnBjPs.js";import{S as A,i as E,e as k,s as O,c as _,H as G,a as i,g as w,b as P,d as h,f as V,n as W,h as e,o as r,j as m,m as N,p as y,t as X,k as R,l as j}from"../chunks/index.Cnh3HYw3.js";import{V as M}from"../chunks/ViewApp.BajIxHdc.js";function Y(S){let a,T="Tic Tac Toe",g,o,B='This example shows how to create an app where the user can play <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="nofollow" target="_blank">Tic Tac Toe</a> against another human (on the same device).',f,t,c,p,I="Open in Online Editor",u,d,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">TicTacToeApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,l,b,H=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,x;return c=new M({props:{project:{app:{code:`class TicTacToeApp extends App{
	
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
	
}`,x:561,y:295}]}}}),{c(){a=k("h1"),a.textContent=T,g=O(),o=k("p"),o.innerHTML=B,f=O(),t=k("div"),_(c.$$.fragment),p=k("a"),p.textContent=I,u=k("pre"),d=new G(!1),l=k("pre"),b=new G(!1),this.h()},l(n){a=i(n,"H1",{"data-svelte-h":!0}),w(a)!=="svelte-1910wq"&&(a.textContent=T),g=P(n),o=i(n,"P",{"data-svelte-h":!0}),w(o)!=="svelte-7aksvh"&&(o.innerHTML=B),f=P(n),t=i(n,"DIV",{});var s=h(t);V(c.$$.fragment,s),p=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),w(p)!=="svelte-1d0aiq6"&&(p.textContent=I),u=i(s,"PRE",{class:!0});var C=h(u);d=W(C,!1),C.forEach(e),l=i(s,"PRE",{class:!0});var v=h(l);b=W(v,!1),v.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrNWFFvozgQ/iuutaoSCaWFBJKN1IdtV7vqy+2pG2m7aiPhgpOgUhsZ59K7LP/9DAQwYFDinE77EAkYf998M2PGQ/YQRRGc76FHfQzn0AtRHINF4C2Qt6D4UxQB/M4x8WMgrvfP5JmnPw+HYQxuwJPrGqD/tywwRBAttowImPvoFk8ZjjEfDHNmjkYnMwtMmzkp6KMQefgPYb8nd4J5kNLfEx+/Nzw+lYalYKko80XBaiB7ydwUBE0B3/LQeILDGHeseSzW1LR6DCOOv3PE+J9ojcukMMxTXGmogTYo/orechT2S4ykO4/vegkuhGdJ9oGWsy2W1Cigpj7U0oeO9aETfaitD3X0oVN96OxE6MG6QmJ3Vs/L7bTG/EdACGaNnXR1Bb4ELOaA0d2oc3OBy0sgPbu5AdIekmxmzWYtW+IrEkUIQst37FHiq8WMFWLGNYeTmphJzWZ3ixl3iFlsAtahxVFocWr+pjUt05pt1q3F6dCSF8mj4faN6NRpvOxOm6Ndpy49pkKPeXSppt16zN5SdcmxFHKsxu6Qbfax1bI65HwO0JoSFAJOIxDiFRcX4IVyTt8AC9YbrlPCvpTNTi9hTWMmShKZatbJY59G58Q8Hta4rqKdBdnh+O2vVj/L1ErNTrv/5rlXQKUO23OwamOtM7DjM7CTM7D2GVjnDOz0DOzsVGxr50gbMoGJAVc09DGL4fxpDwMfzk0DErFJxfCdDXHQgHS1EkPxI5xfF9c/xXWyNGAkxr8aMie7z29qM3w5LpYDfHqzrw+bt1vxGpP2VHwIIjcXgY9eMY7uq9TII3P1ussvVZ65Eh8H/+CBWd2/UCbED0wxzL+IOf1VWsqFaGnmrgyU3IWB9ypsjdHeAFUUirF6kRJ2xZkaj4gyb2q/fgFV6+iM8hBKk00l8us2aE79D3QXjyLk+wFZC9aRtwlCn2EyKPhT7bkPV3y2AfHdBsSH24U7LFH20CgW39L3Qt8IxRH2+APiAU1LUHCXxM888/0iCrNmdEv8OxpSNnAZ9gV5u3ZtaYXHDU6PDeHTkC132Skcl3qU8JxgF/h808SLj7tRbRdfd9mz2resxxObvcSmPrHVS2wdTVy/+x9TPu4NYKyfmUkv8USf2O4ltn//lDu9ATj6mZn2Ek/1iWe9xLP/OOXVdXVV9cgo7dy32fCaeR+q22Qm/NBVH3CcHqWiwVVnT/av1XAUb+guOyrkObOgGTY/rGW3OsOo+2FfW5aAXUDiC7drgKmJapGlNpAauwma/y2pFRVndALywYcC5HElaemaUh+EW+8VzIeuYkgy4Duc246YaP6Gc+ujnSyTfwFmz3Ac"),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),b.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),N(c,t,null),y(t,p),y(t,u),d.m(F,u),y(t,l),b.m(H,l),x=!0},p:z,i(n){x||(X(c.$$.fragment,n),x=!0)},o(n){R(c.$$.fragment,n),x=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),j(c)}}}class q extends A{constructor(a){super(),E(this,a,null,Y,D,{})}}export{q as component};
