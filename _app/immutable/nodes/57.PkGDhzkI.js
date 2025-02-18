import{s as F,n as O}from"../chunks/scheduler.B0TnBjPs.js";import{S as P,i as _,e as k,s as I,c as z,H as N,a as i,g as x,b as C,d as h,f as H,n as X,h as e,o as r,j as m,m as R,p as y,t as j,k as D,l as V}from"../chunks/index.BXVnRmkj.js";import{V as K}from"../chunks/ViewApp.qg7AIhJt.js";function Q(E){let a,T="Tic Tac Toe",g,o,B='This example shows how to create an app where the user can play <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="nofollow" target="_blank">Tic Tac Toe</a> against another human (on the same device).',f,t,c,p,v="Open in Online Editor",u,d,S=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">TicTacToeApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,l,w,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createButton</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button
			<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">&amp;&amp;</span> a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>nextTurn<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>placeNextInCell<span class="token punctuation">,</span> cellIndex<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createText</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token function">sw</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Tic Tac Toe!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">red</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
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
					Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
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
					Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
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
	
<span class="token punctuation">&#125;</span></code>`,b;return c=new K({props:{project:{app:{code:`class TicTacToeApp extends App{
	
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
			.grow(1)
			.border(1, \`black\`)
			.text(a.nextTurn)
			.font(Font.size(sw(12)))
			.onClick(a.placeNextInCell, cellIndex)
	}
	
	createText(cellIndex){
		return Text
			.keepIf(a.cells[cellIndex] != \`\` || a.getWinner() != \`\`)
			.grow(1)
			.font(Font.size(sw(12)))
			.text(a.cells[cellIndex])
	}
	
	createGui(){
		return Rows.padding(1).children(
			Text.text(\`Tic Tac Toe!\`).padding(5),
			Box.grow(1).aspectRatio(1, 1).child(
				Rows.backgroundColor(\`red\`).border(1, \`black\`).children(
					Box.height(1),
					Columns.grow(1).children(
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
					Columns.grow(1).children(
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
					Columns.grow(1).children(
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
	
}`,x:561,y:295}]}}}),{c(){a=k("h1"),a.textContent=T,g=I(),o=k("p"),o.innerHTML=B,f=I(),t=k("div"),z(c.$$.fragment),p=k("a"),p.textContent=v,u=k("pre"),d=new N(!1),l=k("pre"),w=new N(!1),this.h()},l(n){a=i(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-1910wq"&&(a.textContent=T),g=C(n),o=i(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-7aksvh"&&(o.innerHTML=B),f=C(n),t=i(n,"DIV",{});var s=h(t);H(c.$$.fragment,s),p=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-1umioyw"&&(p.textContent=v),u=i(s,"PRE",{class:!0});var W=h(u);d=X(W,!1),W.forEach(e),l=i(s,"PRE",{class:!0});var G=h(l);w=X(G,!1),G.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrNWG2PozYQ/ite63QCCXELCSQXaT90t7rTfulVe5G61W4kWHAStKyNwGm2zfHfO0AA89rEqap+SGQyfp55ZmzG4xywG0V4ccAe8wleYC90kwQtA2/pektGfooiRN45oX6CYHx4ps88+3gkDBN0g54cR0Pjn1WJoUC03MUUYM6jU/4ak4RwRS2YuaufzQyYLnNa0keh65FfwH5P74BZyejvqU/eWx6fKsMKWGrKYlKwVkQvuZuSoC3gWxEaT0mYkIE5j+WchlYvJi4n37kb81/dDamSEhOe4SpDA7R1k6/uW4EifoURdBfxXa/QFXgWZB9pebwjgpoeqCEPNeWhE3noVB5qyUNteehMHjo/E3q0rl3YnfXv1XbaEP5bQCmJWzvp0yf0JYgTjmK21wc3F/r4EQm/3dwgYQ8JNqNhM1cd8TVJTwig5TvxGPX7xUx6xEwaDqcNMdOGzRoWMxkQs9wG8YAWu0eL3fA3a2iZNWzzYS32gJZikTwW7t6ozDpNVsNps6XXaUiP0aPHOHmpZsN6jNGlGpJj9sgxW7tDtFmnrpY5IOfnwN0w6oaIswiFZM1hgF4Y5+wNxcFmy2WWcCxl8/OXsKExFyWIzDTL5HFMo31mHo9zHKennAX54fjtj049y9UKxU66/ha574EKFXbkYJXGmhdgJxdgpxdgrQuw9gXY2QXY+bnYzs4RNmSKUw2vWeiTOMGLpwMOfLwwNExhk0LznTdxWMNsvYam+BEvrsvx7zBOVxqOoP1rIAuy++Kh0cNX7WLVwGcPh2azebuD15h2u+JjEIW5DFx/JSS6r1Mjtsz16y6+VEXmKvwGzkjFqJ9fWAziFQOa+Rfo01+FqRxECz13bVgzypUv8KUnwV9ESYDQVNXazuhdGHivgG21/hqqo+xpu5eZw6E8ZMYTslAUvR8/UF9pGczCP0V0TEXbW18QX3dB+9bwwPaJHrm+H9ANeNW9bRD6MaFKyZ/FVvhw4NqH4N6H4OJ35agVylK1cvItey/1624SEY8/uDxg2RKW3BXxM899v8DCAmRH/TsWslhxYuIDeXftu9JKj1uSHTvgUxMtd/kpnlR6euEFwT7w+baNh8uh3ngLrofs+d7oWE8nNkaJDXlic5TYPJm4+fQfpnwyGsBEPjPTUeKpPLE1Smz9/1NujwZgy2dmNko8kyeejxLP/+WU1+N6VNfIKKvst3nzm3tX+8tkLvxYVR9Ikh3FUODqsyn/10vVky3b50eJ2KeWNGr7Yi66lWlmnQ+HxrQU7QOaXDlDDVBDVIcss6HMOEzQ/m+qX1F5xqeoaJwYcj3eS1q5ZsxH4c57RQvV6WmyNPyOF5YNHdGfeGF+ttJV+jcoKIXy"),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),w.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),R(c,t,null),y(t,p),y(t,u),d.m(S,u),y(t,l),w.m(Y,l),b=!0},p:O,i(n){b||(j(c.$$.fragment,n),b=!0)},o(n){D(c.$$.fragment,n),b=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),V(c)}}}class M extends P{constructor(a){super(),_(this,a,null,Q,F,{})}}export{M as component};
