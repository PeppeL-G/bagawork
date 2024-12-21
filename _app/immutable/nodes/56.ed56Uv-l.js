import{s as V,n as F}from"../chunks/scheduler.B0TnBjPs.js";import{S as Z,i as j,e as r,s as P,c as H,H as O,a as i,g as h,b as C,d as x,f as K,n as A,h as a,o as m,j as u,m as L,p as R,t as E,k as I,l as z}from"../chunks/index.BXVnRmkj.js";import{V as W}from"../chunks/ViewApp.DfUK9ae4.js";function U(J){let t,S="Chess",y,o,q="This is an implementation of chess. Most functionality is implemented, so you can play it to some extent, but the following functionality is still missing:",d,c,T='<li>Pawns can&#39;t move two steps on the first move</li> <li>Pawns can&#39;t capture <a href="https://en.wikipedia.org/wiki/En_passant" rel="nofollow" target="_blank">en passant</a></li> <li>Pawns can&#39;t be turned into other pieces when reaching the opposite side of the board</li> <li>The game never ends/never checks for a winner</li> <li>The game never cheks for checks</li>',b,p,l,e,M="Open in Online Editor",k,w,N=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♙</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pawn</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
		<span class="token comment">// Bottom row.</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♖</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♘</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♗</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♕</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">queen</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♔</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">king</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♗</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bishop</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♘</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">knight</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		<span class="token punctuation">&#123;</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">♖</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">team</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rook</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
		
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
	
<span class="token punctuation">&#125;</span></code>`,g,v,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
					<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">yellow</span><span class="token template-punctuation string">&#96;</span></span> <span class="token operator">:</span>
					<span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">silver</span><span class="token template-punctuation string">&#96;</span></span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">const</span> piece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getPieceByCoordinates</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token keyword">const</span> canSelectedMoveToCurrentSquare <span class="token operator">=</span> <span class="token punctuation">(</span>
					selectedPiece <span class="token operator">&amp;&amp;</span> possibleMoveToCoordinates<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>
						<span class="token parameter">coord</span> <span class="token operator">=></span> coord<span class="token punctuation">.</span>r <span class="token operator">==</span> r <span class="token operator">&amp;&amp;</span> coord<span class="token punctuation">.</span>c <span class="token operator">==</span> c<span class="token punctuation">,</span>
					<span class="token punctuation">)</span>
				<span class="token punctuation">)</span>
				
				<span class="token keyword">let</span> square <span class="token operator">=</span> <span class="token keyword">null</span>
				
				<span class="token keyword">if</span><span class="token punctuation">(</span>selectedPiece <span class="token operator">&amp;&amp;</span> selectedPiece <span class="token operator">==</span> piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>deselectPiece<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>canSelectedMoveToCurrentSquare<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>moveSelectedPieceTo<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>selectedPiece <span class="token operator">&amp;&amp;</span> piece<span class="token punctuation">.</span>team <span class="token operator">==</span> a<span class="token punctuation">.</span>nextTeamToMove<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>selectPiece<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
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
	
<span class="token punctuation">&#125;</span></code>`,f;return l=new W({props:{project:{app:{code:`class MyApp extends App{
	
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
		{c: 0, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 1, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 2, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 3, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 4, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 5, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 6, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		{c: 7, r: 6, text: \`♙\`, team: \`white\`, type: \`pawn\`, direction: -1},
		
		// Bottom row.
		{c: 0, r: 7, text: \`♖\`, team: \`white\`, type: \`rook\`},
		{c: 1, r: 7, text: \`♘\`, team: \`white\`, type: \`knight\`},
		{c: 2, r: 7, text: \`♗\`, team: \`white\`, type: \`bishop\`},
		{c: 3, r: 7, text: \`♕\`, team: \`white\`, type: \`queen\`},
		{c: 4, r: 7, text: \`♔\`, team: \`white\`, type: \`king\`},
		{c: 5, r: 7, text: \`♗\`, team: \`white\`, type: \`bishop\`},
		{c: 6, r: 7, text: \`♘\`, team: \`white\`, type: \`knight\`},
		{c: 7, r: 7, text: \`♖\`, team: \`white\`, type: \`rook\`},
		
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
					\`yellow\` :
					\`silver\`
				)
				
				const piece = a.getPieceByCoordinates(r, c)
				const canSelectedMoveToCurrentSquare = (
					selectedPiece && possibleMoveToCoordinates.some(
						coord => coord.r == r && coord.c == c,
					)
				)
				
				let square = null
				
				if(selectedPiece && selectedPiece == piece){
					square = Button.text(piece.text).onClick(a.deselectPiece)
				}else if(canSelectedMoveToCurrentSquare){
					square = Button.text(piece?.text ?? \` \`).onClick(a.moveSelectedPieceTo, r, c)
				}else if(!piece){
					square = Text.text(\` \`)
				}else if(!selectedPiece && piece.team == a.nextTeamToMove){
					square = Button.text(piece?.text ?? \` \`).onClick(a.selectPiece, r, c)
				}else{
					square = Text.text(piece.text)
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
	
}`,x:200,y:300}]}}}),{c(){t=r("h1"),t.textContent=S,y=P(),o=r("p"),o.textContent=q,d=P(),c=r("ul"),c.innerHTML=T,b=P(),p=r("div"),H(l.$$.fragment),e=r("a"),e.textContent=M,k=r("pre"),w=new O(!1),g=r("pre"),v=new O(!1),this.h()},l(n){t=i(n,"H1",{"data-svelte-h":!0}),h(t)!=="svelte-1xq2nk6"&&(t.textContent=S),y=C(n),o=i(n,"P",{"data-svelte-h":!0}),h(o)!=="svelte-1cgx2j5"&&(o.textContent=q),d=C(n),c=i(n,"UL",{"data-svelte-h":!0}),h(c)!=="svelte-1o91okl"&&(c.innerHTML=T),b=C(n),p=i(n,"DIV",{});var s=x(p);K(l.$$.fragment,s),e=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),h(e)!=="svelte-si25gl"&&(e.textContent=M),k=i(s,"PRE",{class:!0});var B=x(k);w=A(B,!1),B.forEach(a),g=i(s,"PRE",{class:!0});var D=x(g);v=A(D,!1),D.forEach(a),s.forEach(a),this.h()},h(){m(e,"target","_blank"),m(e,"href","/editor#eNrtWntv2zYQ/yqssHUSIqu20ySFVy9o1K0bhgJdkj82tAGsSHSsWRZVSm4apPoWe3XP77ZPsqNkSaREyk+0K1AUdSge78Hj3Y9HUbeaE0Xa4FZziYe1geYGThyjpzePogjh1wkOvRhB+/ZF+CJh/yMfuzhGQ/Q860ny33v30DmJECXXVt5x6w5Q10Q0+01A0ACN/n3754g9ODN4uAwcd8oebyIMj5SQ6Sg1K+Zeg/lvJfM09K8micDeb7D/pWS/9OMJiQT2/Qb7H0r2l3OMQ4H7foP7d7XtfnglMB9sZ/nhdn472nTNyjg4wy4JPRYKaEzJDCUTjBISNeKix+n4R6kjcq5DePJ8it3EJyHwNaNkJ6L6uxO1vztR93cn6mB3og53J+poN6Jaw++SJAmZNSLwkFP6tlJ6PfET3Ka0IwnB3cjq71DW/g5l3d+hrIMdyjrcoayjHckqI/EkizrpnnjEaflFqUWxJ/LMvymZlXsiz/6rkl25J/LsPyvZVXsiz/2T2nb5nrix5Yfb+e1o0zVjvxdF4RQC8znwnJOn5BWGAmrBWtBjHEAwYe8ZK7BOgd7pNbrtspv9dyl2EnyWODR55lxh3ciLtITiZE5DVBJYbyqqyaTp1ERuweRYDQOolMJscAWRHuaFtghcmC6TmJNKkVc4OeOH1OfmWDAio5zc2IRQzw/BFbG+8HtDuakg2Hm/UVcuEc07q7Qir4atsR96eoSGX6DIomgIrkN370LbZW1XlD6D1Rfmdk4E2fkvbGJxghxK/VeQDNk48JJq2hk/z+6PdYG3FJ4UNmfSSvODBNPSeVDkZ1NBd4aiBcWAhaq0aXCUT2gR4Zm5tXXMR3PjmMOKUOO73SLOCg2O1UghvdlX5hU6LuoHVKapsXlo5lbwMQL6nMsA8+sQCb4uVuKO2F1Ez/MLiRtheDbaYniSzSbbaxrMeSQASWnFSsIzpJUL/xZI2wnPsFAu/BRI2wlfwLxc/ElG3E5BvoXJ5X/HaFt6Pt9nFL7PiOsoqMVUA88UkQLdz5oxm+cyA6oaAzv2X9TKHHuC3SkiIUZxgiM0JvTaoR4c+difOKu/AzxOUOx7GJHxoiAHmlW5pjADkh4wp1s5pfgrwiFL2IqHoj3uqazJ5Ky2wOqiDuq161oGvaVNZqXDqIuswzHbHYQOi1UTbO6VbayHc0QiWQ4rmscTnRsDcTCovGTyBLci2BwhLW1NRaPTlZbZku1WayxP6+Jsvh+2LUqJyooNchU/K7ws9XFqrONQIW8oQ4E1EufoHSbO3sfEWSFxFrAsMUGO04pNd9oI0zVxejwPs7VFLou6s5dzh2Ldg7LRc1eJmVJ/FjMeVYdINZKFiOdKFrSLHg456dyKnjIKH8SN4TY/3G4Mr/TsOh5rohv4gd68UQTmVOipWbticLYGaEuQioEqBqswo3SVYOZjp9MzoTA2kJzSNeT9PUl/NxMk7Zd19xTDFVo5pZtlpKJSZbXtDjPycQG+yqQMsJiSpQEWlQ2xhSGNNITjUIC5A9/ypIQu1XBZUpZHRT6Oy1Yle2/IwUlFsDOCK+NdL6v5cJenjyxvDJniNXK+8rwk58P1s78l95WZnxpLUp3vhHrkUYxiAvHoxOgaIxy6ZB4mmCInP9SbrNd1ws8S9ON8FiGwnCI/MQUZMYFihkR50U+gcXmD8oQD86r38WXsTzDFluBhRVFWZW7rRJaiV5VndXgRKB0FqQ4yFYVHvc2ARnlmzU+67xVsOBPUcMMP+gg47xZweN9/hJz/KeT0lJDTU0NOR83V4dk2Ax3Vi6zs5ZcEclZ4h8exWpA6rpNwb+XbcI5jNLnX8pJDkurtWP5O7b0elCoLlh+VuLHKw9J7Q8wPAfV4D34QqLfy6aqvOOUwgvRYlGFBX0FAMkIPKTgYQcrRRwqrGGHzY1aqpaY2JoGHaawNnt9qvqcNeqYWOjP2QVp2jamZGhmPY5x8rw26RfsHaKcXphY5V1jgzIV9kz8I37WVd6Llt23s4Va8UbVxENhkFpEQh0msy6BEuCRqvela3IuROPbBD+yO6pyIAJTxStBM0GE0baDkWoJfhOqsMKPD7ueIPnwAP3t7KuRySTCfhfzHfPDvHDxjsZtuffTJ7YMOTUeGdQW69J5hXYJ1mOpd68AsLtfK4L+o6yhMcZkpLjPFFUxpgM0lyANN89CzSUDYtaCAKxR9ivrZhWrWOOZpoxtYM3I9QgOhN/YDqBlGSxCHu7pc8Y618qATFqu+WNo5pRA1eWLUZyBGDbshVoWFFZMZ1msAxMjsYjZrcPfM+XN+1ywgk7Fk4mx14sLScB4ECjxu2F0L/yGKmrVTKfhkniQkzENqcQkGTcMioR347lR3LOEDAs7SFAcxRmBAu5tX1XuctdHxMRqhEa9fciVvotp6l7bcaZsrlzxoJOVuxkC1pQ1Z9IkX2lvPjfOsfE7LJsIt2ZKKfgEn+cbKSz0hr8VQLgCl1tsGL8UQESP02nN9uBNHMPtTB0o64VVgQXfhWOrp+ayN9sokreMbw9/6XO2FCwrAzORDpArusCxr4SqJQmP5bcIpUyzzVVMds7GcltI4Dv3PIgdWuw3vTelW8WjJLiHnOtmIy96I6/FGXF9uxPXVRlxPNuL6elWuC0N9qsoLnydzv/6hVRZrkePBvnQlDWh+XSY4jjmFkPalZY1EXKQe982RJa++SnFVi/cZIR4K5u70zkg4NZa1pam91gb9LhSNN9pgvwsFY/ofNfDY4g=="),m(e,"title","Open in our Online Editor"),w.a=null,m(k,"class","language-js"),v.a=null,m(g,"class","language-js")},m(n,s){u(n,t,s),u(n,y,s),u(n,o,s),u(n,d,s),u(n,c,s),u(n,b,s),u(n,p,s),L(l,p,null),R(p,e),R(p,k),w.m(N,k),R(p,g),v.m(Q,g),f=!0},p:F,i(n){f||(E(l.$$.fragment,n),f=!0)},o(n){I(l.$$.fragment,n),f=!1},d(n){n&&(a(t),a(y),a(o),a(d),a(c),a(b),a(p)),z(l)}}}class _ extends Z{constructor(t){super(),j(this,t,null,U,V,{})}}export{_ as component};
