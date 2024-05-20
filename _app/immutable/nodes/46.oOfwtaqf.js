import{s as J,n as X}from"../chunks/scheduler.DFPFbGJz.js";import{S as G,i as L,e as r,s as C,c as Z,H as z,a as i,g as h,b as P,d as x,f as K,n as D,h as a,o as g,j as u,m as Q,p as R,t as I,k as U,l as H}from"../chunks/index.CzDE4dZi.js";import{V}from"../chunks/ViewApp.C2MU7-ZI.js";function W(E){let t,S="Chess",y,o,T="This is an implementation of chess. Most functionality is implemented, so you can play it to some extent, but the following functionality is still missing:",d,c,q='<li>Pawns can&#39;t move two steps on the first move</li> <li>Pawns can&#39;t capture <a href="https://en.wikipedia.org/wiki/En_passant" rel="nofollow" target="_blank">en passant</a></li> <li>Pawns can&#39;t be turned into other pieces when reaching the opposite side of the board</li> <li>The game never ends/never checks for a winner</li> <li>The game never cheks for checks</li>',b,p,l,e,M="Open in Online Editor",k,v,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,f,A=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createCellComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> selectedPiece <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getSelectedPiece</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token keyword">const</span> possibleMoveToCoordinates <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getMovableCoordinates</span><span class="token punctuation">(</span>selectedPiece<span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
		
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> r<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> r<span class="token operator">&lt;</span><span class="token number">8</span><span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
			
			<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span><span class="token number">8</span><span class="token operator">-</span>r<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
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
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>deselectPiece<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>canSelectedMoveToCurrentSquare<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>moveSelectedPieceTo<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>piece<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>selectedPiece <span class="token operator">&amp;&amp;</span> piece<span class="token punctuation">.</span>team <span class="token operator">==</span> a<span class="token punctuation">.</span>nextTeamToMove<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token operator">?.</span>text <span class="token operator">??</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string"> </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>selectPiece<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span><span class="token keyword">else</span><span class="token punctuation">&#123;</span>
					square <span class="token operator">=</span> Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>piece<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
				<span class="token punctuation">&#125;</span>
				
				columns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
					Box
						<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span>backgroundColor<span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
						<span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>square<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
				
			<span class="token punctuation">&#125;</span>
			
			rows<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>
				Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					<span class="token operator">...</span>columns
				<span class="token punctuation">)</span>
			<span class="token punctuation">)</span>
			
		<span class="token punctuation">&#125;</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			rows<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
				Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">B</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">C</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">D</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">E</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">F</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">G</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">H</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">border</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">black</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Chess</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Box<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				p<span class="token punctuation">.</span><span class="token function">createCellComponents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Good luck!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,w;return l=new V({props:{project:{app:{code:`class MyApp extends App{
	
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
				Text.text(\`\${8-r}\`).size(1).border(0.5, \`black\`)
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
					square = Button.text(piece.text).handler(a.deselectPiece)
				}else if(canSelectedMoveToCurrentSquare){
					square = Button.text(piece?.text ?? \` \`).handler(a.moveSelectedPieceTo, r, c)
				}else if(!piece){
					square = Text.text(\` \`)
				}else if(!selectedPiece && piece.team == a.nextTeamToMove){
					square = Button.text(piece?.text ?? \` \`).handler(a.selectPiece, r, c)
				}else{
					square = Text.text(piece.text)
				}
				
				columns.push(
					Box
						.size(1)
						.border(0.5, \`black\`)
						.backgroundColor(backgroundColor)
						.aspectRatio(1, 1)
						.child(square),
				)
				
			}
			
			rows.push(
				Columns.size(1).children(
					...columns
				)
			)
			
		}
		
		return Rows.border(0.5, \`black\`).children(
			rows,
			Columns.size(1).children([
				Space.size(1).border(0.5, \`black\`),
				Text.text(\`A\`).size(1).border(0.5, \`black\`),
				Text.text(\`B\`).size(1).border(0.5, \`black\`),
				Text.text(\`C\`).size(1).border(0.5, \`black\`),
				Text.text(\`D\`).size(1).border(0.5, \`black\`),
				Text.text(\`E\`).size(1).border(0.5, \`black\`),
				Text.text(\`F\`).size(1).border(0.5, \`black\`),
				Text.text(\`G\`).size(1).border(0.5, \`black\`),
				Text.text(\`H\`).size(1).border(0.5, \`black\`),
			])
		)
		
	}
	
	createGui(){
		return Rows.padding(1).children(
			Text.text(\`Chess\`),
			Box.size(1).aspectRatio(1, 1).child(
				p.createCellComponents(),
			),
			Text.text(\`Good luck!\`),
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){t=r("h1"),t.textContent=S,y=C(),o=r("p"),o.textContent=T,d=C(),c=r("ul"),c.innerHTML=q,b=C(),p=r("div"),Z(l.$$.fragment),e=r("a"),e.textContent=M,k=r("pre"),v=new z(!1),m=r("pre"),f=new z(!1),this.h()},l(n){t=i(n,"H1",{"data-svelte-h":!0}),h(t)!=="svelte-1xq2nk6"&&(t.textContent=S),y=P(n),o=i(n,"P",{"data-svelte-h":!0}),h(o)!=="svelte-1cgx2j5"&&(o.textContent=T),d=P(n),c=i(n,"UL",{"data-svelte-h":!0}),h(c)!=="svelte-1o91okl"&&(c.innerHTML=q),b=P(n),p=i(n,"DIV",{});var s=x(p);K(l.$$.fragment,s),e=i(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),h(e)!=="svelte-1zfyqs"&&(e.textContent=M),k=i(s,"PRE",{class:!0});var B=x(k);v=D(B,!1),B.forEach(a),m=i(s,"PRE",{class:!0});var j=x(m);f=D(j,!1),j.forEach(a),s.forEach(a),this.h()},h(){g(e,"target","_blank"),g(e,"href","/editor#eNrtWo1u2zYQfhVW2FYLUTTbbZLCqxck7tYVw4YuCbANbQArEh1rkUWNoptmqd5i/7/vtifZkbIkUiJlx/HWFSiKOhSP98Pj3cejqGvLSxJrcG35JMDWwPIjL03RZ1cHSYLwS4bjIEXQvn4eP2f8fxJiH6doiJ6JHpb/vv8+OiEJouTSzTuu/QHqOoiKXwaCBmj89y+/j/mDN4OHs8jzL/jjVYLhkRJyMc6cirnXYP7TyHwRh+dTprD3G+x/GNnPwnRKEoX9XoP9NyP7t3OMY4X7foP7V7PtYXyuMO/czvLd2/ltb901K+PgGPskDngooAklM8SmGDGSNOKiJ+n4y6gj8S5jeApCin0Wkhj4mlGyEVH9zYm6tzlR9zcnamdzonY3J2pvM6Jaw++MMEZmjQjclZT+Uim9nIYMtynd1oTgZmT1Nyjr3gZl3d+grJ0NytrdoKy9DckqI/FQRJ12T9yTtPxo1GLYE2Xmn43Mxj1RZv/JyG7cE2X2H4zspj1R5v7ebLt+T1zb8t3b+W1v3TXjv6dF4RQD8wnwnJDPyAsMBdSCtaCnOIJgwsFTXmAdAX271+geld38v0+xx/Ax8yh76p3jjp0XaYxiNqcxKgm8N1PVCGkd6iC/YPLchgFUS+E2+IrIAMtCWwQuTNdJzEmlyHPMjuUh9bl5LowQlMOrESE0CGNwRdpZ+L2h3DEQRnm/XVeuES07q7Qir4bdSRgHnQQNP0SJS9EQXIfeew/aPm/7qvQZrL4ytxOiyM5/YRNLGfIoDV9AMohx4CXTtAW/zB5OOgpvKZwVNgtppfkRw7R0HhT5YirozlC1oBiwUJU1DU7yCS0iXJhbW8d8tDSOO6wINbnbL+Ks0OC5jRTqNPvKvEL7Rf2AyjS11w/N3Ao5RkCfdxZheR0SxdfFStxRu4voeXaqcSMMF6NdjidiNmKvaTDnkQAkoxUrCRdIqxf+KZBuJ1xgoV74EZBuJ3wB83rxh4J4OwX5FqaX/wWn3dLz+T5j8L0g3kRBLaYaeGaIFOh+2ozZPJc5UNUY+LH/tFbmjKbYv0AkxihlOEETQi89GsCRj/9JRf0d4QlDaRhgRCaLghxobuWawgxIesCcbuWU4q8KhzxhKx6KtqSnsibTs44UVh9to167rmXQW9rkVDrsusg6HPPdQelweTXB517ZxnskRzDNcrjJPJ12pDEQB4PKS45M8CvCSCJkpa2ZanS20jK7ut3qBsvTujjr74dti1KismGDXMXPBi9rfZzZN3GokjeUo8ANEmfvP0ycrbeJs0LiLGBZY4Iepw2b7kUjTG+I05N5LNYW+Tzqjr+dexR3AigbA3+VmCn1i5gJqDlEqpE8RAJfs6Bd9HAoSZdW9IhT5CBuDB/Jw0eN4ZWeTcdjTXQDP9CrV4bAvFB6atauGJytAdoSpGqgqsGqzChbJZjl2NnuOVAY20hP6dr6/p6mvysEaft13T3DcINWSel6GWmoVHltu8GMfFSArzEpI6ymZGmAS3VDRsqQRhrCcSjC0oFveVJCl2m4LinLo6Icx2Wrkr01lOCkIowEwdfx3iyr5XDXp48ub2yd4hvkfOV5Tc7HN8/+ltw3Zn5mL0l1uRPqkYMUpQTi0UvRJUY49sk8ZpgiLz/UO7zX9+K7DH0znyUILKcoZI4iIyVQzJAkL/oJNM6uUJ5wYF71Pr6M/Smm2FU8bCjKqsxtnchS9KryrA4vCmXbQKqDTEWRUW89oDGeWfOT7msFG8kEM9zIg94Czn8LOLLv30LO/xRyekbI6ZkhZ9vMtS2zrQc6phdZ4uWXBnJWeIcnsbqQOr7HpLfybTgnMTrSa3nNIcn0dix/p/ZaD0qVBcuPStJY42HptSHmm4B6sgffCNRb+XTVN5xyOEF7LBJY0DcQkI7QQwYOTtBy9JHBKk5Y/5iVWZljTUgUYJpag2fXVhhYg55jxd6Mf5AmrjEtxyKTSYrZV9agW7S/hnZ26liJd44VzlzYk/xB+a6tvBMtv23jD9fqjeoIR9GIzBIS45ilHR2UKJdErTddi3sxkqYh+IHfUZ0QFYAErwbNFB120wZKLjX4RWiHF2Z02P0A0YcP4Gdry4RcPonms1j+mA/+nYBnXH7T3Rm/c/1gm2Zj203D7yAubPcMrMO003V3nOJyrQz+07qOwhSfm+JzU3zFlAbYnIG8cwo1QDAiEeHXggquUPQu6osLVdHYl2njK1gzcjlGA6U3DSOoGcZLEEe6ulzxjrXyoBcXq75Y2jmlEDV5YtRnoEYNvyE2hYWbkhnu1ACIk/nFrGhI98z5c37XrCCTvWTifHXSwtJ4HkUGPG7YXQv/IUqatVMp+HDOGInzkFpcgkHTdqdeHEQQTZ6rfEAgWZrhKMUIDGh386p690Ub7e+jMRrL+jVX8g6qrXdpy522uUrJg8Za7mYMVFvakEefeqF967lJntXPadlEpCVbUtEv4CTfWGWph+SlGsoFoNR62+ClGKJiRKf2XB/upQnM/siDkk55FVjQfTiWBp181nZ7ZZLV8Y3jb32uo4ULCsAU8iFSFXe4rrtwlUahvfw24Ygr1vmqqY7bWE7LaJyE/seJB6vdhveOdqs4WLJL6LkO1+IarcX1aC2uj9bi+ngtrsdrcX2yKtepbT5V5YXP43lY/9BKxFriBbAvnWsDWl6XKU5TSSGkfWlZIxEXqSd9c+Tqq69SXNWSfUZIgKK5f3FnrJway9rSsV5ag34XisYra3CvWxaMJ3iWRHyrlQtHpVY8SC+eTA6CebS0YDT5reEskV26aRwA6F6RORKFK2IA36j3YF/ypcpZZLIGXtSBsAjSTjH+nECw8Nl3+G4vB1Qr29c4XY1PvwSZkzu4X3PwR/xlz8E5/vfd++XUY3dT7mGKQL7Zscq0e139rNVBOysM6q8iqW+QJFtYc+xp9g/UVN6o"),g(e,"title","Open in our Online Editor"),v.a=null,g(k,"class","language-js"),f.a=null,g(m,"class","language-js")},m(n,s){u(n,t,s),u(n,y,s),u(n,o,s),u(n,d,s),u(n,c,s),u(n,b,s),u(n,p,s),Q(l,p,null),R(p,e),R(p,k),v.m(Y,k),R(p,m),f.m(A,m),w=!0},p:X,i(n){w||(I(l.$$.fragment,n),w=!0)},o(n){U(l.$$.fragment,n),w=!1},d(n){n&&(a(t),a(y),a(o),a(d),a(c),a(b),a(p)),H(l)}}}class _ extends G{constructor(t){super(),L(this,t,null,W,J,{})}}export{_ as component};
