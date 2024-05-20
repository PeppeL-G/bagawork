import{s as z,n as O}from"../chunks/scheduler.DFPFbGJz.js";import{S as E,i as Z,e as k,s as G,c as H,H as W,a as i,g as w,b as R,d as h,f as K,n as j,h as e,o as r,j as m,m as _,p as y,t as Q,k as D,l as M}from"../chunks/index.CzDE4dZi.js";import{V as Y}from"../chunks/ViewApp.C2MU7-ZI.js";function X(A){let a,T="Tic Tac Toe",g,o,B='This example shows how to create an app where the user can play <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" rel="nofollow" target="_blank">Tic Tac Toe</a> against another human (on the same device).',f,t,c,p,I="Open in Online Editor",u,d,C=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">TicTacToeApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
			<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>placeNextInCell<span class="token punctuation">,</span> cellIndex<span class="token punctuation">)</span>
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
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Restart</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>reset<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">showIf</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">isGameOver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
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
	
<span class="token punctuation">&#125;</span></code>`,x;return c=new Y({props:{project:{app:{code:`class TicTacToeApp extends App{
	
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
			.handler(a.placeNextInCell, cellIndex)
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
			Button.text(\`Restart\`).handler(a.reset).showIf(a.isGameOver()),
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
	
}`}]}}}),{c(){a=k("h1"),a.textContent=T,g=G(),o=k("p"),o.innerHTML=B,f=G(),t=k("div"),H(c.$$.fragment),p=k("a"),p.textContent=I,u=k("pre"),d=new W(!1),l=k("pre"),b=new W(!1),this.h()},l(n){a=i(n,"H1",{"data-svelte-h":!0}),w(a)!=="svelte-1910wq"&&(a.textContent=T),g=R(n),o=i(n,"P",{"data-svelte-h":!0}),w(o)!=="svelte-7aksvh"&&(o.innerHTML=B),f=R(n),t=i(n,"DIV",{});var s=h(t);K(c.$$.fragment,s),p=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),w(p)!=="svelte-16n1xw5"&&(p.textContent=I),u=i(s,"PRE",{class:!0});var v=h(u);d=j(v,!1),v.forEach(e),l=i(s,"PRE",{class:!0});var S=h(l);b=j(S,!1),S.forEach(e),s.forEach(e),this.h()},h(){r(p,"target","_blank"),r(p,"href","/editor#eNrNWGFvozYY/isuOt0SKcoVEkguUjW13XbKl7upjXQ9tZFwwUlQqY2MWXrL5b/PQAAbbJaQbdqHSMDr5/Hj1y+vH7IzYBQZs53hER8ZM8MLYRyDReAtoLcg6DqKAHpjCPsx4Ne7J/zE0p+HwjAGV+DRdQeg/bcsMJgTLRKKOcx9cIunFMWI9fo5M4PDk5k5psm8L+ijEHroM4/P8S1n7qX0c+yjt9qMj2VgyVkqynxQsOqJs2TTFAR1AV/ypbE9CmOkGfNQjJG0ehRBhu4ZpOx3uEZlUihiKa4MSKANjD/B1xyF/BIj6M7Xd7kEF3xmQfaBltEECWoUULM71OoOHXWHjrtD7e5Qpzt00h06PRF6iK4gr87qeVlOa8S+BhgjWqukDx/AbwGNGaBkO9QWF3j/HgjPrq6AUENCzJRi1rIhviJRLIFruUcewb5azEghZiRNOJbEjKWYrRcz0ohZbAKq0eIotDjSfBNJy0SKTfVaHI2WfJM8EiavuMs+jZb6tDmd90mnx1ToMY/eqolej9m6VTo5lkKOVasOMWYfu1uWRs4vAVwTDEPASARCtGL8AjwTxsgroMF6w7psYVvKpqdvoaQxEyWITDV3yWObRufEPB7GuK6inQXZ4fjlj0Y/y9QKza5z/81zr4AKHbblYO2Mtc7Ajs7Ajs/A2mdgnTOwkzOw01OxjcoRCnJv7AfGioQ+orExe9wZgW/MzIGBeZFy852ZOGNgkNWKm+IHY3ZZXH/j1/vlwIi4/ZOQOdk8v5E8fGkXSwOf3uxks3mT8NcYN13xYRF5uFj48AWhaF6lRrTM1esuvlR55kp8HPyJemZ1/0woF98zuZl/5j79RRjKuGjBc1eBDcR+yEFwWLP2A1CtQmGrFymhbp1p8IhV5k3txw+gah3aVR6WUmdTifyUBHXXf0e28TCCvh/gNWcdepsg9CnCvYI/1Z7P4fLPNsC/2wD/cLtw+yXK7g+KwTfkrdA3hHGEPHYHWUDSLSi4S+Inls39zDdmTUmC/VsSEtpzKfI5eXPvmtKKGTcoPTb4nAMxcpudwnGpRwnPCbaBzzZ1PP+4G0pVfKmLZ3vfiB5PbLYSm92JrVZi62hi+e4/TPmodQGj7pkZtxKPuxPbrcT2/z/lTusCnO6ZmbQST7oTT1uJp/9wyqvr6qrqkVHauW8y85rN3le3yUz4oaveoTg9SnmDq86e7F+r/jDekG12VIg+s6Dp1z+sxWm7mFH33U4atgfbAMcXrs7ASKIaZGkMpEE9Qf2/JbWi4ozeg9z4EAA9piQtpybEB2HivYBZ31WYpIHxZsxshzua78bM+mgXzmeBXvmhz2QHJJme6/hlvrr2k/BvnY/uqG28n/cRtxmKSnKvKQLfSQIyBwYYLw5gTn92qyqSkUUjUDQAeWCt/D6T7Chfox5OwlCs9FbYNxQfh1OVa+pT8wRbtQT/ihmi12v076f36wayn+I0wxRwfn1ipWWbl+pVy4PsIwZZxzBZGiZRYS2xy/1f+Uh1/w=="),r(p,"title","Open in our Online Editor"),d.a=null,r(u,"class","language-js"),b.a=null,r(l,"class","language-js")},m(n,s){m(n,a,s),m(n,g,s),m(n,o,s),m(n,f,s),m(n,t,s),_(c,t,null),y(t,p),y(t,u),d.m(C,u),y(t,l),b.m(P,l),x=!0},p:O,i(n){x||(Q(c.$$.fragment,n),x=!0)},o(n){D(c.$$.fragment,n),x=!1},d(n){n&&(e(a),e(g),e(o),e(f),e(t)),M(c)}}}class N extends E{constructor(a){super(),Z(this,a,null,X,z,{})}}export{N as component};
