import{s as K,n as N}from"../chunks/scheduler.B0TnBjPs.js";import{S as W,i as Y,e as r,s as C,c as z,H as G,a as i,g as h,b as P,d as x,f as H,n as A,h as a,o as g,j as u,m as F,p as q,t as L,k as Q,l as V}from"../chunks/index.BXVnRmkj.js";import{V as X}from"../chunks/ViewApp.qg7AIhJt.js";function J(D){let t,R="Chess",y,o,T="This is an implementation of chess. Most functionality is implemented, so you can play it to some extent, but the following functionality is still missing:",d,c,S='<li>Pawns can&#39;t move two steps on the first move</li> <li>Pawns can&#39;t capture <a href="https://en.wikipedia.org/wiki/En_passant" rel="nofollow" target="_blank">en passant</a></li> <li>Pawns can&#39;t be turned into other pieces when reaching the opposite side of the board</li> <li>The game never ends/never checks for a winner</li> <li>The game never checks for checks</li>',b,p,l,e,M="Open in Online Editor",k,w,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	pieces <span class="token operator">=</span> <span class="token punctuation">[</span>
		
		<span class="token comment">// Top row.</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♜</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♞</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♝</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♛</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">queen</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♚</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">king</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♝</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♞</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♜</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
		<span class="token comment">// Second row from the top.</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
		<span class="token comment">// Second row from the bottom.</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♟</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
		<span class="token comment">// Bottom row.</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♜</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♞</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♝</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♛</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">queen</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♚</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">king</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♝</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♞</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♜</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
	<span class="token punctuation">]</span>
	
	nextTeamToMove <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span>
	
	selectedPieceR <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	selectedPieceC <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">selectPiece</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>selectedPieceR <span class="token operator">=</span> r
		a<span class="token punctuation">.</span>selectedPieceC <span class="token operator">=</span> c
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">deselectPiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>selectedPieceR <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
		a<span class="token punctuation">.</span>selectedPieceC <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getSelectedPiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>
			a<span class="token punctuation">.</span>selectedPieceR<span class="token punctuation">,</span>
			a<span class="token punctuation">.</span>selectedPieceC
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> a<span class="token punctuation">.</span>pieces<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=></span> p<span class="token punctuation">.</span>r <span class="token operator">==</span> r <span class="token operator">&amp;&amp;</span> p<span class="token punctuation">.</span>c <span class="token operator">==</span> c<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">moveSelectedPieceTo</span><span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>arrivingPiece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			a<span class="token punctuation">.</span>pieces <span class="token operator">=</span> a<span class="token punctuation">.</span>pieces<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
				<span class="token parameter">p</span> <span class="token operator">=></span> p <span class="token operator">!=</span> arrivingPiece
			<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">const</span> pieceToMove <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getSelectedPiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		pieceToMove<span class="token punctuation">.</span>r <span class="token operator">=</span> r
		pieceToMove<span class="token punctuation">.</span>c <span class="token operator">=</span> c
		
		a<span class="token punctuation">.</span>nextTeamToMove <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>nextTeamToMove <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		a<span class="token punctuation">.</span>selectedPieceR <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
		a<span class="token punctuation">.</span>selectedPieceC <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">piece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getPawnMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">king</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getKingMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getRookMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getBishopMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">queen</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getQueenMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getKnightMovableCoordinates</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getPawnMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">pawnPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> moveableCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token comment">// Check one step forward towards the left side of the board.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>pawnPiece<span class="token punctuation">.</span>c <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> arrivingR <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>r <span class="token operator">+</span> pawnPiece<span class="token punctuation">.</span>direction
			<span class="token keyword">const</span> arrivingC <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>c <span class="token operator">-</span> <span class="token number">1</span>
			
			<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>arrivingR<span class="token punctuation">,</span> arrivingC<span class="token punctuation">)</span>
			
			<span class="token keyword">if</span><span class="token punctuation">(</span>arrivingPiece <span class="token operator">&amp;&amp;</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> pawnPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
					<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
					<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
				<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Check one step forward.</span>
		<span class="token keyword">const</span> arrivingR <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>r <span class="token operator">+</span> pawnPiece<span class="token punctuation">.</span>direction
		<span class="token keyword">const</span> arrivingC <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>c
		
		<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>arrivingR<span class="token punctuation">,</span> arrivingC<span class="token punctuation">)</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arrivingPiece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
				<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
				<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
			<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
		<span class="token punctuation">&#125;</span>
		
		<span class="token comment">// Check one step forward towards the right side of the board.</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>pawnPiece<span class="token punctuation">.</span>c <span class="token operator">!=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> arrivingR <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>r <span class="token operator">+</span> pawnPiece<span class="token punctuation">.</span>direction
			<span class="token keyword">const</span> arrivingC <span class="token operator">=</span> pawnPiece<span class="token punctuation">.</span>c <span class="token operator">+</span> <span class="token number">1</span>
			
			<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>arrivingR<span class="token punctuation">,</span> arrivingC<span class="token punctuation">)</span>
			
			<span class="token keyword">if</span><span class="token punctuation">(</span>arrivingPiece <span class="token operator">&amp;&amp;</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> pawnPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
					<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
					<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
				<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> moveableCoordinates
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getKingMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">kingPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> moveableCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">function</span> <span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token parameter">dr<span class="token punctuation">,</span> dc</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> arrivingR <span class="token operator">=</span> kingPiece<span class="token punctuation">.</span>r <span class="token operator">+</span> dr
			<span class="token keyword">const</span> arrivingC <span class="token operator">=</span> kingPiece<span class="token punctuation">.</span>c <span class="token operator">+</span> dc
			
			<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingR <span class="token operator">&amp;&amp;</span> arrivingR <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingC <span class="token operator">&amp;&amp;</span> arrivingC <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					
					<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>arrivingR<span class="token punctuation">,</span> arrivingC<span class="token punctuation">)</span>
					
					<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arrivingPiece <span class="token operator">||</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> kingPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
						moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
							<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
							<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
						<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
					<span class="token punctuation">&#125;</span>
					
				<span class="token punctuation">&#125;</span>
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> 
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> moveableCoordinates
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getRookMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">rookPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> moveableCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">function</span> <span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token parameter">dr<span class="token punctuation">,</span> dc</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">let</span> arrivingR <span class="token operator">=</span> rookPiece<span class="token punctuation">.</span>r
			<span class="token keyword">let</span> arrivingC <span class="token operator">=</span> rookPiece<span class="token punctuation">.</span>c
			
			<span class="token keyword">while</span><span class="token punctuation">(</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingR <span class="token operator">&amp;&amp;</span> arrivingR <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingC <span class="token operator">&amp;&amp;</span> arrivingC <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				
				arrivingR <span class="token operator">+=</span> dr
				arrivingC <span class="token operator">+=</span> dc
				
				<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>
					arrivingR<span class="token punctuation">,</span>
					arrivingC<span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arrivingPiece <span class="token operator">||</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> rookPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					
					moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
						<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
						<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
					<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
					
				<span class="token punctuation">&#125;</span>
				
				<span class="token comment">// As soon as we encounter a piece, we can't jump over it,</span>
				<span class="token comment">// so stop the loop by returning from the function here.</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>arrivingPiece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">&#125;</span>
				
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> moveableCoordinates
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getBishopMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">bishopPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> moveableCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">function</span> <span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token parameter">dr<span class="token punctuation">,</span> dc</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">let</span> arrivingR <span class="token operator">=</span> bishopPiece<span class="token punctuation">.</span>r
			<span class="token keyword">let</span> arrivingC <span class="token operator">=</span> bishopPiece<span class="token punctuation">.</span>c
			
			<span class="token keyword">while</span><span class="token punctuation">(</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingR <span class="token operator">&amp;&amp;</span> arrivingR <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingC <span class="token operator">&amp;&amp;</span> arrivingC <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				
				arrivingR <span class="token operator">+=</span> dr
				arrivingC <span class="token operator">+=</span> dc
				
				<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>
					arrivingR<span class="token punctuation">,</span>
					arrivingC<span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arrivingPiece <span class="token operator">||</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> bishopPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					
					moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
						<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
						<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
					<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
					
				<span class="token punctuation">&#125;</span>
				
				<span class="token comment">// As soon as we encounter a piece, we can't jump over it,</span>
				<span class="token comment">// so stop the loop by returning from the function here.</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>arrivingPiece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					<span class="token keyword">return</span>
				<span class="token punctuation">&#125;</span>
				
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkDirection</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> moveableCoordinates
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getQueenMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">queenPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">return</span> a<span class="token punctuation">.</span><span class="token function">getRookMovableCoordinates</span><span class="token punctuation">(</span>queenPiece<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>
			a<span class="token punctuation">.</span><span class="token function">getBishopMovableCoordinates</span><span class="token punctuation">(</span>queenPiece<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getKnightMovableCoordinates</span><span class="token punctuation">(</span><span class="token parameter">knightPiece</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> moveableCoordinates <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">function</span> <span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token parameter">dr<span class="token punctuation">,</span> dc</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> arrivingR <span class="token operator">=</span> knightPiece<span class="token punctuation">.</span>r <span class="token operator">+</span> dr
			<span class="token keyword">const</span> arrivingC <span class="token operator">=</span> knightPiece<span class="token punctuation">.</span>c <span class="token operator">+</span> dc
			
			<span class="token keyword">if</span><span class="token punctuation">(</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingR <span class="token operator">&amp;&amp;</span> arrivingR <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
				<span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">&lt;=</span> arrivingC <span class="token operator">&amp;&amp;</span> arrivingC <span class="token operator">&lt;=</span> <span class="token number">7</span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				
				<span class="token keyword">const</span> arrivingPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>
					arrivingR<span class="token punctuation">,</span>
					arrivingC<span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>arrivingPiece <span class="token operator">||</span> arrivingPiece<span class="token punctuation">.</span>team <span class="token operator">!=</span> knightPiece<span class="token punctuation">.</span>team<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					
					moveableCoordinates<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
						<span class="token literal-property property">r</span><span class="token operator">:</span> arrivingR<span class="token punctuation">,</span>
						<span class="token literal-property property">c</span><span class="token operator">:</span> arrivingC<span class="token punctuation">,</span>
					<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
					
				<span class="token punctuation">&#125;</span>
				
			<span class="token punctuation">&#125;</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span>  <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>  <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token punctuation">,</span>  <span class="token number">2</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">checkSquare</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token punctuation">,</span>  <span class="token number">1</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> moveableCoordinates
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,v,E=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createCellComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> selectedPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getSelectedPiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> possibleMoveToCoordinates <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getMovableCoordinates</span><span class="token punctuation">(</span>selectedPiece<span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> r<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">8</span><span class="token operator">-</span>r<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">]</span>
			
			<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> c<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> c<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
				
				<span class="token keyword">const</span> backgroundColor <span class="token operator">=</span> <span class="token punctuation">(</span>
					r <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> c <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span>
					<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">gray</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">:</span>
					<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">silver</span><span class="token template-punctuation string">&#96;</span></span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">const</span> piece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token keyword">const</span> canSelectedMoveToCurrentSquare <span class="token operator">=</span> <span class="token punctuation">(</span>
					selectedPiece <span class="token operator">&amp;&amp;</span> possibleMoveToCoordinates<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>
						<span class="token parameter">coord</span> <span class="token operator">=></span> coord<span class="token punctuation">.</span>r <span class="token operator">==</span> r <span class="token operator">&amp;&amp;</span> coord<span class="token punctuation">.</span>c <span class="token operator">==</span> c<span class="token punctuation">,</span>
					<span class="token punctuation">)</span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token keyword">null</span>
				<span class="token keyword">let</span> squareIsButton <span class="token operator">=</span> <span class="token boolean">false</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span>selectedPiece <span class="token operator">&amp;&amp;</span> selectedPiece <span class="token operator">==</span> piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>deselectPiece<span class="token punctuation">)</span>
					squareIsButton <span class="token operator">=</span> <span class="token boolean">true</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>canSelectedMoveToCurrentSquare<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>moveSelectedPieceTo<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
					squareIsButton <span class="token operator">=</span> <span class="token boolean">true</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>selectedPiece <span class="token operator">&amp;&amp;</span> piece<span class="token punctuation">.</span>team <span class="token operator">==</span> a<span class="token punctuation">.</span>nextTeamToMove<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>selectPiece<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
					squareIsButton <span class="token operator">=</span> <span class="token boolean">true</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span>
				
				square<span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span>Font<span class="token punctuation">.</span><span class="token function">color</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>team <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span>squareIsButton<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					
					square<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
					
					<span class="token keyword">if</span><span class="token punctuation">(</span>piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
						square<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>
							piece<span class="token punctuation">.</span>team <span class="token operator">==</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
						<span class="token punctuation">)</span>
					<span class="token punctuation">&#125;</span>
					
				<span class="token punctuation">&#125;</span>
				
				columns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
					Box
						<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>backgroundColor<span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
				
			<span class="token punctuation">&#125;</span>
			
			rows<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
				Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					<span class="token operator">...</span>columns
				<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			rows<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
				Space<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">B</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">C</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">D</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">E</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">F</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">H</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Chess</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCellComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good luck!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,f;return l=new X({props:{project:{app:{code:`class MyApp extends App{
	
	pieces = [
		
		// Top row.
		{c: 0, r: 0, text: \`♜\`, team: \`black\`, type: \`rook\`},
		{c: 1, r: 0, text: \`♞\`, team: \`black\`, type: \`knight\`},
		{c: 2, r: 0, text: \`♝\`, team: \`black\`, type: \`bishop\`},
		{c: 3, r: 0, text: \`♛\`, team: \`black\`, type: \`queen\`},
		{c: 4, r: 0, text: \`♚\`, team: \`black\`, type: \`king\`},
		{c: 5, r: 0, text: \`♝\`, team: \`black\`, type: \`bishop\`},
		{c: 6, r: 0, text: \`♞\`, team: \`black\`, type: \`knight\`},
		{c: 7, r: 0, text: \`♜\`, team: \`black\`, type: \`rook\`},
		
		// Second row from the top.
		{c: 0, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 1, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 2, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 3, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 4, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 5, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 6, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		{c: 7, r: 1, text: \`♟\`, team: \`black\`, type: \`pawn\`, direction: 1},
		
		// Second row from the bottom.
		{c: 0, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 1, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 2, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 3, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 4, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 5, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 6, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 7, r: 6, text: \`♟\`, team: \`white\`, type: \`pawn\`, direction: -1},
		
		// Bottom row.
		{c: 0, r: 7, text: \`♜\`, team: \`white\`, type: \`rook\`},
		{c: 1, r: 7, text: \`♞\`, team: \`white\`, type: \`knight\`},
		{c: 2, r: 7, text: \`♝\`, team: \`white\`, type: \`bishop\`},
		{c: 3, r: 7, text: \`♛\`, team: \`white\`, type: \`queen\`},
		{c: 4, r: 7, text: \`♚\`, team: \`white\`, type: \`king\`},
		{c: 5, r: 7, text: \`♝\`, team: \`white\`, type: \`bishop\`},
		{c: 6, r: 7, text: \`♞\`, team: \`white\`, type: \`knight\`},
		{c: 7, r: 7, text: \`♜\`, team: \`white\`, type: \`rook\`},
		
	]
	
	nextTeamToMove = \`white\`
	
	selectedPieceR = -1
	selectedPieceC = -1
	
	createStartPage(){
		return StartPage
	}
	
	selectPiece(r, c){
		a.selectedPieceR = r
		a.selectedPieceC = c
	}
	
	deselectPiece(){
		a.selectedPieceR = -1
		a.selectedPieceC = -1
	}
	
	getSelectedPiece(){
		return a.getPieceByCoordinates(
			a.selectedPieceR,
			a.selectedPieceC
		)
	}
	
	getPieceByCoordinates(r, c){
		return a.pieces.find(p => p.r == r && p.c == c)
	}
	
	moveSelectedPieceTo(r, c){
		
		const arrivingPiece = a.getPieceByCoordinates(r, c)
		
		if(arrivingPiece){
			a.pieces = a.pieces.filter(
				p => p != arrivingPiece
			)
		}
		
		const pieceToMove = a.getSelectedPiece()
		pieceToMove.r = r
		pieceToMove.c = c
		
		a.nextTeamToMove = (a.nextTeamToMove == \`white\` ? \`black\` : \`white\`)
		a.selectedPieceR = -1
		a.selectedPieceC = -1
		
	}
	
	getMovableCoordinates(piece){
		
		if(!piece){
			return []
		}
		
		if(piece.type == \`pawn\`){
			return a.getPawnMovableCoordinates(piece)
		}
		
		if(piece.type == \`king\`){
			return a.getKingMovableCoordinates(piece)
		}
		
		if(piece.type == \`rook\`){
			return a.getRookMovableCoordinates(piece)
		}
		
		if(piece.type == \`bishop\`){
			return a.getBishopMovableCoordinates(piece)
		}
		
		if(piece.type == \`queen\`){
			return a.getQueenMovableCoordinates(piece)
		}
		
		if(piece.type == \`knight\`){
			return a.getKnightMovableCoordinates(piece)
		}
		
		return []
		
	}
	
	getPawnMovableCoordinates(pawnPiece){
		
		const moveableCoordinates = []
		
		// Check one step forward towards the left side of the board.
		if(pawnPiece.c != 0){
			
			const arrivingR = pawnPiece.r + pawnPiece.direction
			const arrivingC = pawnPiece.c - 1
			
			const arrivingPiece = a.getPieceByCoordinates(arrivingR, arrivingC)
			
			if(arrivingPiece && arrivingPiece.team != pawnPiece.team){
				moveableCoordinates.push({
					r: arrivingR,
					c: arrivingC,
				})
			}
			
		}
		
		// Check one step forward.
		const arrivingR = pawnPiece.r + pawnPiece.direction
		const arrivingC = pawnPiece.c
		
		const arrivingPiece = a.getPieceByCoordinates(arrivingR, arrivingC)
		
		if(!arrivingPiece){
			moveableCoordinates.push({
				r: arrivingR,
				c: arrivingC,
			})
		}
		
		// Check one step forward towards the right side of the board.
		if(pawnPiece.c != 7){
			
			const arrivingR = pawnPiece.r + pawnPiece.direction
			const arrivingC = pawnPiece.c + 1
			
			const arrivingPiece = a.getPieceByCoordinates(arrivingR, arrivingC)
			
			if(arrivingPiece && arrivingPiece.team != pawnPiece.team){
				moveableCoordinates.push({
					r: arrivingR,
					c: arrivingC,
				})
			}
			
		}
		
		return moveableCoordinates
		
	}
	
	getKingMovableCoordinates(kingPiece){
		
		const moveableCoordinates = []
		
		function checkSquare(dr, dc){
			
			const arrivingR = kingPiece.r + dr
			const arrivingC = kingPiece.c + dc
			
			if(0 <= arrivingR && arrivingR <= 7){
				if(0 <= arrivingC && arrivingC <= 7){
					
					const arrivingPiece = a.getPieceByCoordinates(arrivingR, arrivingC)
					
					if(!arrivingPiece || arrivingPiece.team != kingPiece.team){
						moveableCoordinates.push({
							r: arrivingR,
							c: arrivingC,
						})
					}
					
				}
			}
			
		}
		
		checkSquare(-1, -1) 
		checkSquare(-1, 0)
		checkSquare(-1, 1)
		checkSquare(0, -1)
		checkSquare(0, 1)
		checkSquare(1, -1)
		checkSquare(1, 0)
		checkSquare(1, 1)
		
		return moveableCoordinates
		
	}
	
	getRookMovableCoordinates(rookPiece){
		
		const moveableCoordinates = []
		
		function checkDirection(dr, dc){
			
			let arrivingR = rookPiece.r
			let arrivingC = rookPiece.c
			
			while(
				(0 <= arrivingR && arrivingR <= 7) &&
				(0 <= arrivingC && arrivingC <= 7)
			){
				
				arrivingR += dr
				arrivingC += dc
				
				const arrivingPiece = a.getPieceByCoordinates(
					arrivingR,
					arrivingC,
				)
				
				if(!arrivingPiece || arrivingPiece.team != rookPiece.team){
					
					moveableCoordinates.push({
						r: arrivingR,
						c: arrivingC,
					})
					
				}
				
				// As soon as we encounter a piece, we can't jump over it,
				// so stop the loop by returning from the function here.
				if(arrivingPiece){
					return
				}
				
			}
			
		}
		
		checkDirection(0, 1)
		checkDirection(0, -1)
		checkDirection(1, 0)
		checkDirection(-1, 0)
		
		return moveableCoordinates
		
	}
	
	getBishopMovableCoordinates(bishopPiece){
		
		const moveableCoordinates = []
		
		function checkDirection(dr, dc){
			
			let arrivingR = bishopPiece.r
			let arrivingC = bishopPiece.c
			
			while(
				(0 <= arrivingR && arrivingR <= 7) &&
				(0 <= arrivingC && arrivingC <= 7)
			){
				
				arrivingR += dr
				arrivingC += dc
				
				const arrivingPiece = a.getPieceByCoordinates(
					arrivingR,
					arrivingC,
				)
				
				if(!arrivingPiece || arrivingPiece.team != bishopPiece.team){
					
					moveableCoordinates.push({
						r: arrivingR,
						c: arrivingC,
					})
					
				}
				
				// As soon as we encounter a piece, we can't jump over it,
				// so stop the loop by returning from the function here.
				if(arrivingPiece){
					return
				}
				
			}
			
		}
		
		checkDirection(1, 1)
		checkDirection(1, -1)
		checkDirection(-1, 1)
		checkDirection(-1, -1)
		
		return moveableCoordinates
		
	}
	
	getQueenMovableCoordinates(queenPiece){
		
		return a.getRookMovableCoordinates(queenPiece).concat(
			a.getBishopMovableCoordinates(queenPiece),
		)
		
	}
	
	getKnightMovableCoordinates(knightPiece){
		
		const moveableCoordinates = []
		
		function checkSquare(dr, dc){
			
			const arrivingR = knightPiece.r + dr
			const arrivingC = knightPiece.c + dc
			
			if(
				(0 <= arrivingR && arrivingR <= 7) &&
				(0 <= arrivingC && arrivingC <= 7)
			){
				
				const arrivingPiece = a.getPieceByCoordinates(
					arrivingR,
					arrivingC,
				)
				
				if(!arrivingPiece || arrivingPiece.team != knightPiece.team){
					
					moveableCoordinates.push({
						r: arrivingR,
						c: arrivingC,
					})
					
				}
				
			}
			
		}
		
		checkSquare(-2, -1)
		checkSquare(-2,  1)
		checkSquare(-1, -2)
		checkSquare(-1,  2)
		checkSquare(1 , -2)
		checkSquare(1 ,  2)
		checkSquare(2 , -1)
		checkSquare(2 ,  1)
		
		return moveableCoordinates
		
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createCellComponents(){
		
		const selectedPiece = a.getSelectedPiece()
		const possibleMoveToCoordinates = a.getMovableCoordinates(selectedPiece)
		
		const rows = []
		
		for(let r=0; r<8; r++){
			
			const columns = [
				Text.text(\`\${8-r}\`).grow(1).border(0.5, \`black\`)
			]
			
			for(let c=0; c<8; c++){
				
				const backgroundColor = (
					r % 2 == c % 2 ?
					\`gray\` :
					\`silver\`
				)
				
				const piece = a.getPieceByCoordinates(r, c)
				const canSelectedMoveToCurrentSquare = (
					selectedPiece && possibleMoveToCoordinates.some(
						coord => coord.r == r && coord.c == c,
					)
				)
				
				let square = null
				let squareIsButton = false
				
				if(selectedPiece && selectedPiece == piece){
					square = Button.text(piece.text).onClick(a.deselectPiece)
					squareIsButton = true
				}else if(canSelectedMoveToCurrentSquare){
					square = Button.text(piece?.text ?? \` \`).onClick(a.moveSelectedPieceTo, r, c)
					squareIsButton = true
				}else if(!piece){
					square = Text.text(\` \`)
				}else if(!selectedPiece && piece.team == a.nextTeamToMove){
					square = Button.text(piece?.text ?? \` \`).onClick(a.selectPiece, r, c)
					squareIsButton = true
				}else{
					square = Text.text(piece.text)
				}
				
				square.font(Font.color(piece?.team ?? \`\`))
				
				if(squareIsButton){
					
					square.padding(0)
					
					if(piece){
						square.backgroundColor(
							piece.team == \`white\` ? \`black\` : \`white\`,
						)
					}
					
				}
				
				columns.push(
					Box
						.grow(1)
						.border(0.5, \`black\`)
						.backgroundColor(backgroundColor)
						.aspectRatio(1, 1)
						.child(square),
				)
				
			}
			
			rows.push(
				Columns.grow(1).children(
					...columns
				)
			)
			
		}
		
		return Rows.border(0.5, \`black\`).children(
			rows,
			Columns.grow(1).children([
				Space.grow(1).border(0.5, \`black\`),
				Text.text(\`A\`).grow(1).border(0.5, \`black\`),
				Text.text(\`B\`).grow(1).border(0.5, \`black\`),
				Text.text(\`C\`).grow(1).border(0.5, \`black\`),
				Text.text(\`D\`).grow(1).border(0.5, \`black\`),
				Text.text(\`E\`).grow(1).border(0.5, \`black\`),
				Text.text(\`F\`).grow(1).border(0.5, \`black\`),
				Text.text(\`G\`).grow(1).border(0.5, \`black\`),
				Text.text(\`H\`).grow(1).border(0.5, \`black\`),
			])
		)
		
	}
	
	createGui(){
		return Rows.padding(1).children(
			Text.text(\`Chess\`),
			Box.grow(1).aspectRatio(1, 1).child(
				p.createCellComponents(),
			),
			Text.text(\`Good luck!\`),
		)
	}
	
}`,x:200,y:300}]}}}),{c(){t=r("h1"),t.textContent=R,y=C(),o=r("p"),o.textContent=T,d=C(),c=r("ul"),c.innerHTML=S,b=C(),p=r("div"),z(l.$$.fragment),e=r("a"),e.textContent=M,k=r("pre"),w=new G(!1),m=r("pre"),v=new G(!1),this.h()},l(n){t=i(n,"H1",{"data-svelte-h":!0}),h(t)!=="svelte-1xq2nk6"&&(t.textContent=R),y=P(n),o=i(n,"P",{"data-svelte-h":!0}),h(o)!=="svelte-1cgx2j5"&&(o.textContent=T),d=P(n),c=i(n,"UL",{"data-svelte-h":!0}),h(c)!=="svelte-1fsaxs6"&&(c.innerHTML=S),b=P(n),p=i(n,"DIV",{});var s=x(p);H(l.$$.fragment,s),e=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),h(e)!=="svelte-14g2orz"&&(e.textContent=M),k=i(s,"PRE",{class:!0});var B=x(k);w=A(B,!1),B.forEach(a),m=i(s,"PRE",{class:!0});var I=x(m);v=A(I,!1),I.forEach(a),s.forEach(a),this.h()},h(){g(e,"target","_blank"),g(e,"href","/editor#eNrtWv1u2zYQfxVW2DoJUVQ7aeLCqxc07toVQ4EuyR8b2gBWJDrWIosqRTcNUj/Ivt9tT7IjZUmkRMofMdoVKIo6Eo/3wePdj0dSt5afplb/1gpIiK2+FcR+lqGXN0/SFOH3DCdhhuD59k3yhvH/aYQDnKEBei1aWP774AE6Iymi5NrLG26DPuq4iIpfBoL6aPTvb3+O+Is/hZeL2A+u+OtNiuGVEnI1mrsVc7fB/LeR+SqJLidMYd9rsP9lZL+IsglJFfb9BvsfRva3M4wThfthg/t3s+1RcqkwH9zN8sO7+a236ZyVcXCKA5KEPBTQmJIpYhOMGEkbcdGVdPxj1JH61wm8hRHFAYtIAnzNKNmKqL3tidrfnqiH2xN1sD1Rh9sT1duOqNbwuyCMkWkjAg/1Sq8nEcNtSnc1IbgdWXtblLW/RVkPtyjrYIuyDrcoq7clWWUkHouo066JPT2+1rQY1sSeHttrzMY1sadfWWrsxjWxp18Ta+ymNbGnXxPrtuvXxI0tP7yb33qbzhn/PS8KpwSYz4DnjLwk7zAUUAvWgp7hGIIJh694gXUC9N1uo3lYNvP/AcU+w6fMp+yVf4ltJy/SGMVsRhNUEnjrXFUjpNnURUHB5HsNA6iWwm0IFJEhloW2CFyYrpOYk0qRl5idyl3qY/M96CEoxzdDQmgYJeCKzF74vaHcNRCGebtTV64RLTurtCKvhr1xlIR2igbfodSjaACuQ/fvw3PAnwNV+hRmXxnbGVFk57+wiGUM+ZRG7yAZRD/wkmnYgl9mj8a2wlsKZ4XNQlppfswwLZ0HRb4YCro3UC0oOixUzZsGp/mAFhEuzK3NY95b6scdVoSa3BwUcVZo8L1GCtnNtjKv0FFRP6AyTZ3NQzO3Qo4R0OdfxFieh1TxdTET99TmInpen2vcCN1Fb4/jiRiNWGsazHkkAMloxUrCBdLqhf8IpLsJF1ioF34CpLsJX8C8XvyxIN5NQb6E6eX/xGl39Hy+zhh8L4jrKKjFVAPPDJECza+aMZvnMgeqGgPf9p/XypzhBAdXiCQYZQynaEzotU9D2PLxP5mov2M8ZiiLQozIeFGQA82rXFOYAUkPmNOpnFL8VeGQJ2zFQ9GO9FbWZHrWocIaoF3Ubde1DHpLm9xKh1MXWYdjvjooDR6vJvjYK9t4i+QIppkOL51lE1vqA3HQr7zkyoSgIgwlwry0da4aPV9pmj3darXG9LROzubrYduklKhsWCBX8bPBy1ofz511HKrkDeUosEbi9D5i4ux8SZwVEmcByxoT9DhtWHSvGmG6Jk6PZ4mYWxTwqDt9O/MptkMoG8NglZgp9YuYCak5RKqePETCQDOhHfR4IEmXZvSEU+QgbnQfyt2Hje6Vnm3HY010Az/Qhw+GwLxSWmrWrhicrQHaEqRqoKrBqoxovkowy7Gz23WhMHaQntJx9O1dTXtHCNK265q7hu4GrZLSzTLSUKny2naLGfm0AF9jUsZYTcnSAI/qugyVLo00hO1QjKUN3/KkhCZTd11SlltFOY7Lp0r2zkCCk4owFIRAx7teVsvhrk8fXd44OsVr5HzleU3OJ+tnf0vuGzN/7ixJdbkR6pEnGcoIxKOfoWuMcBKQWcIwRX6+qXd5a+An3zD062yaIrCcooi5ioyMQDFD0rzoJ/BwcYPyhAPzqvP4MvYnmGJP8bChKKsyt3UgS9GryrM6vCiUXQOpDjIVRUa9zYDGuGfNd7qfFGwkE8xwI3f6AjgfF3Bk33+BnP8p5HSNkNM1Q86umWtXZtsMdEwHWeLwSwM5K5zhSawepE7gM+lUvg3nJEZXOpbXbJJMp2P5mdon3ShVFizfKkl9jZulT4aYnwPqyR78LFBv5d3VnmGXwwnabZHAgj0DAekIXWTg4AQtxx4yWMUJm2+z5tbctcYkDjHNrP7rWysKrX7XtRJ/yj9IE9eYlmuR8TjD7Ger3ymef4Hn+blrpf4lVjhzYS/yF+W7tvJOtPy2jb/cqjeqQxzHQzJNSYITltk6KFEuiVpvuhb3YiTLIvADv6M6IyoACV4Nmik6nKYNlFxr8ItQmxdmdND5FtHHj+BnZ8eEXAGJZ9NE/pgP/p2BZzx+022Pvrp9tEvnI8e7BF121/EuwDpM7Y534BaXa2Xwn9d1FKYE3JSAmxIopjTA5gLkgaZZEg5JTPi1oIIrFH2N9sSFqng4kmmjS+rfjFBfacuiGCqG0RK8kS4uV7xhrfznJ8WcLyZ2RinETJ4WdfvVmOH3w6ag8DIyxXYNfjiZX8uKB+mWOX/Pb5oVXHKWDJzPTVZYmsziWEd6kR3PGIP1cIDGfpxhA2I3xlZLkAFKm9VVqTxXkQfd4poMHh2PJMM4Cq5s31M+MXCaQiQzGZ1JVs4xGI3Awva5WtWwI/GMjo7QCI1kAzW3+i6qBc3qxt5r85aUoGjk6LibkVYtmwMe4+ql+Z0HL83NhoNeNlIpKpZsK3Jmb0wSZj+DH6hBAUuqAYAL+ABGjqn4UM01lxQLRakfQtZe2p22s2LNdJYCaqhn14921blr+bihVq+sdeyrAqJYFfL6SOY7Ju9VFcW6UGttWyWKLrVB197r3f0shQA78aEyV050C3owieJwMXNOe4E5ry9TfBmtj3W4cEGx7gn5gBaKOzzPW7hKo9BZfil0whXrfNVUx20sh2U0TlrET1MfgqZt2Xa1K/6TJYu9nut4I67hRlxPN+L6fiOuZxtxPd+I64dVuc4d8+Y4r1+fz6L693Ii1gqo0gW0PC8TnGWSQkj70rJGIi5ST/p0zNMX0aW46kn2GSEhimfB1b2Rsvkvtwiu9d7q73Wg9r+x+vsdqPvn/wGXMYf2"),g(e,"title","Open in our Online Editor"),w.a=null,g(k,"class","language-js"),v.a=null,g(m,"class","language-js")},m(n,s){u(n,t,s),u(n,y,s),u(n,o,s),u(n,d,s),u(n,c,s),u(n,b,s),u(n,p,s),F(l,p,null),q(p,e),q(p,k),w.m(j,k),q(p,m),v.m(E,m),f=!0},p:N,i(n){f||(L(l.$$.fragment,n),f=!0)},o(n){Q(l.$$.fragment,n),f=!1},d(n){n&&(a(t),a(y),a(o),a(d),a(c),a(b),a(p)),V(l)}}}class _ extends W{constructor(t){super(),Y(this,t,null,J,K,{})}}export{_ as component};
