import{s as X,n as _}from"../chunks/scheduler.B0TnBjPs.js";import{S as q,i as M,e as k,s as G,c as A,H as S,a as i,g as x,b as W,d as h,f as R,n as P,h as e,o as r,j as m,m as z,p as y,t as E,k as F,l as J}from"../chunks/index.BXVnRmkj.js";import{V as j}from"../chunks/ViewApp.DfUK9ae4.js";function Y(O){let a,T="Tic Tac Toe",g,o,B='This example shows how to create an app where the user can play <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="nofollow" target="_blank">Tic Tac Toe</a> against another human (on the same device).',f,t,c,p,v="Open in Online Editor",u,d,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">TicTacToeApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>nextTurn<span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>placeNextInCell<span class="token punctuation">,</span> cellIndex<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createText</span><span class="token punctuation">(</span><span class="token parameter">cellIndex</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Text
			<span class="token punctuation">.</span><span class="token function">keepIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>cells<span class="token punctuation">[</span>cellIndex<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">||</span> a<span class="token punctuation">.</span><span class="token function">getWinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
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
	
<span class="token punctuation">&#125;</span></code>`,w;return c=new j({props:{project:{app:{code:`class TicTacToeApp extends App{
	
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
			.onClick(a.placeNextInCell, cellIndex)
	}
	
	createText(cellIndex){
		return Text
			.keepIf(a.cells[cellIndex] != \`\` || a.getWinner() != \`\`)
			.grow(1)
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
	
}`,x:561,y:295}]}}}),{c(){a=k("h1"),a.textContent=T,g=G(),o=k("p"),o.innerHTML=B,f=G(),t=k("div"),A(c.$$.fragment),p=k("a"),p.textContent=v,u=k("pre"),d=new S(!1),l=k("pre"),b=new S(!1),this.h()},l(n){a=i(n,"H1",{"data-svelte-h":!0}),x(a)!=="svelte-1910wq"&&(a.textContent=T),g=W(n),o=i(n,"P",{"data-svelte-h":!0}),x(o)!=="svelte-7aksvh"&&(o.innerHTML=B),f=W(n),t=i(n,"DIV",{});var s=h(t);R(c.$$.fragment,s),p=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),x(p)!=="svelte-10kkdio"&&(p.textContent=v),u=i(s,"PRE",{class:!0});var I=h(u);d=P(I,!1),I.forEach(e),l=i(s,"PRE",{class:!0});var C=h(l);b=P(C,!1),C.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrNWFFvozgQ/iuutaoSCWULCSQbqQ/Xrrbqy+2qG2m7aiPhgpOgUhuBc+kqy39fAwFswChxTqd7iASMv2++mTHjIXuIogjO99CjPoZz6IUoScAi8BbIW1D8VxQB/M4w8RPAr/fP5JllPw+HYQKuwZPrGqD/tywxhBMttjHhMPfRLZ/GOMFsMCyYGRqdzMwxbea0pI9C5OG/uf2e3HLmQUZ/T3z83vD4VBmWnKWmLBYFq4HoJXdTEjQFfC1CYykOE6xY81iukbR6MUYMf2coZt/QGldJiTHLcJVBAm1QcofeChT2K4ygu4jvagkuuGdB9oGWxVssqOmAmvpQSx861odO9KG2PtTRh071obMToQfrCvHdWT+vttMasx8BIThu7KSPH8GXIE4YiOlupNxc4PISCM+ur4GwhwSbKdmsZUt8TdIRAtfyHXuU+N1ixh1ixpLDiSRmItlstZixQsxiE8QKLU6HFkfyN5W0TCXbTK3FUWgpiuTRcPtGdOo0XqrT5mjXSaXH7NBjHl2qqVqP2VsqlRyrQ47V2B2izT62WpZCzucArSlBIWA0AiFeMX4BXihj9A3EwXrDdErYl7LZ6SWUNOaiBJGZZp089ml0TszjYY3rdrSzID8cv/7T6me5WqHZafffIvcdUKHD9hys2ljrDOz4DOzkDKx9BtY5Azs9Azs7FdvaOcKGTGFqwBUNfRwncP60h4EP56YBCd+kfPjOhzhoQLpa8aH4Ec6vyuuf/DpdGjDi45+ELMjuixtphq/GxWqAz2728rB5s+WvMWlPxYcgCnMZ+OgV4+i+To04Mtevu/hSFZmr8Gt+Rg7M+v6Fxlz8wOTD/Auf01+FpYyLFmbu2kDJbRh4r9zWGO0NUEfRMVYvMkJVnJnxiCiLpvb7N+hqHcooD6E02bpE3m2D5tT/QHfJKEK+H5A1Zx15myD0Y0wGJX+mvfDh8s82wL/bAP9wu3CHFcoeGuXiG/pe6huhJMIee0AsoFkJSu6K+Jnlvl94YThkS/xbGtJ44MbY5+Tt2rWllR43ODs2uE9DtNzmp3BS6emEFwS7wGebJp5/3I2kXXylsue1b1mPJzZ7iU19YquX2DqaWL77D1M+7g1grJ+ZSS/xRJ/Y7iW2//8pd3oDcPQzM+0lnuoTz3qJZ/9yyuvr+qrukVHWuW/y4TX3Puxuk7nwQ1d9wEl2lPIGV589+b9Ww1Gyobv8qBDnzJJm2PywFt3qDKPuh720LAW7gCQXrmqAkUS1yDIbyIxqguZ/S92KyjM6BcXgQwHyWCdp5ZpSH4Rb7xXMh27HkGTAdzi3HT7R/IJz65OdLtM/90VwNA=="),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),b.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),z(c,t,null),y(t,p),y(t,u),d.m(D,u),y(t,l),b.m(H,l),w=!0},p:_,i(n){w||(E(c.$$.fragment,n),w=!0)},o(n){F(c.$$.fragment,n),w=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),J(c)}}}class K extends q{constructor(a){super(),M(this,a,null,Y,X,{})}}export{K as component};
