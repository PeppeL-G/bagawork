import{s as Gt,n as Nt}from"../chunks/scheduler.B0TnBjPs.js";import{S as Bt,i as Dt,e,s as l,c as ln,H as un,a as p,g as c,b as u,d as r,f as rn,h as t,n as kn,o,j as a,p as i,m as dn,t as gn,k as mn,l as fn}from"../chunks/index.BXVnRmkj.js";import{V as hn}from"../chunks/ViewApp.qg7AIhJt.js";function Jt(Vt){let h,Qn="<code>speaker</code>",Cn,S,Zn="On this page you find the documentation for the <code>speaker</code> variable.",yn,H,Yn="Introduction",bn,L,nt="The <code>speaker</code> variable contains an object used for playing something on the device&#39;s speaker. It can be used to speak words to the user.",_n,b,tt='<div class="remark-container__title">Note!</div><p>The first time you instruct the <code>speaker</code> variable to say something, it can take a little while before the computer says it.</p>',Tn,_,M,st="Example",E,Pn,j,at="speak() - Making the speaker speak words",Sn,V,et="Use the method <code>speak()</code> to instruct the speaker to speak some words to the user. Pass it the words as a string. The speaker&#39;s default voice will be used to speak the words.",Hn,T,pt='<div class="remark-container__title">Might not always work!</div><p>The speaker will only work if the web browser the user is using supports the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" rel="nofollow" target="_blank">Web Speech API</a>.</p>',Ln,k,I,ot="Example",Y,ct='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',O,v,lt="Open in Online Editor",nn,Mn,It=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		speaker<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,En,A,ut="speakWithVoice() - Making the speaker speak words with a specific voice",jn,W,it="Use the method <code>speakWithVoice()</code> to instruct the speaker to speak some words to the user with a specific voice. Pass it the words as a string, and the voice as an object retrieved from <code>getVoices()</code>.",Vn,d,R,rt="Example",tn,kt='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',$,x,dt="Open in Online Editor",sn,In,Ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> randomVoice <span class="token operator">=</span> voices<span class="token punctuation">[</span>m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> voices<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> randomVoice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,On,G,gt="<code>getVoices()</code> - Obtaining all supported voices",An,N,mt="Use the method <code>getVoices()</code> to obtain an array of voices that can be used to speak the words passed to <code>speakWithVoices()</code>. This method returns an array with voice objects looking like this:",Wn,B,Rn,At=`<code class="language-js"><span class="token keyword">const</span> voiceObject <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A unique value identifying this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The name of this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">languageCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The code of the language this voice is specialized in, e.g. en-US</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,$n,D,ft='<li><code>languageCode</code> is of the format <code>LANGUAGE-COUNTRY</code>. For example, <code>en-US</code> means <em>English as they speak it in the United States</em>. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> contains the code for different languages and countries</li> <li><code>rate</code> can be decreased/increased to make the voice speak slower/faster</li> <li><code>pitch</code> can be decreased/increased to lower/raise the pitch of the voice</li>',Gn,P,ht='<div class="remark-container__title">Different devices = different voices!</div><p>Different devices support different voices, so the voices that are supported on your device are not necessarily supported on devices your users have. Which voices that are available are primarily determined by:</p><ul><li>Which operating system (Windows, Max, Linux, etc.) the device is using</li> <li>Which web browser (Firefox, Chrome, Safari, Edge, etc. ) that is used to run the BagaWork app</li></ul>',Nn,g,J,vt="Example",U,w,xt="Open in Online Editor",an,Bn,Wt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
					Columns<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>rate<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>pitch<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Dn,q,wt="<code>getVoicesByLanguageCode()</code> - Obtaining supported voices in a language",Jn,z,Ct='Use the method <code>getVoicesByLanguageCode()</code> to obtain an array of voices that are for a specific language. Pass it the language code as a string, such as <code>`sv`</code> for Swedish, or <code>`en`</code> for English. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> shows the code for different languages and countries.',Un,m,X,yt="Example",K,C,bt="Open in Online Editor",en,qn,Rt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoicesByLanguageCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">en</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
					Columns<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>rate<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>pitch<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,zn,F,_t="Playground",Xn,f,Q,Tt="Playground",Z,y,Pt="Open in Online Editor",pn,Kn,$t=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	textToSay <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">This will be said!</span><span class="token template-punctuation string">&#96;</span></span>
	rate <span class="token operator">=</span> <span class="token number">1</span>
	pitch <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			
			EnterText<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>textToSay<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">textToSay</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Rate: </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>rate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">rate</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Pitch: </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterNumber<span class="token punctuation">.</span><span class="token function">number</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>pitch<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">pitch</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
			Box<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
				Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
					voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
						<span class="token parameter">v</span> <span class="token operator">=></span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>v<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>v<span class="token punctuation">.</span>languageCode<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span>
			
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token parameter">voice</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		voice<span class="token punctuation">.</span>rate <span class="token operator">=</span> p<span class="token punctuation">.</span>rate
		voice<span class="token punctuation">.</span>pitch <span class="token operator">=</span> p<span class="token punctuation">.</span>pitch
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>textToSay<span class="token punctuation">,</span> voice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Fn;return E=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Button.text(\`Say something!\`).onClick(p.speak)
	}
	
	speak(){
		speaker.speak(\`Hello there, how are you?\`)
	}
	
}`,x:150,y:200}]}}}),O=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Button.text(\`Say something!\`).onClick(p.speak)
	}
	
	speak(){
		speaker.speak(\`Hello there, how are you?\`)
	}
	
}`,x:150,y:200}]}}}),$=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Button.text(\`Say something!\`).onClick(p.speak)
	}
	
	speak(){
		
		const voices = speaker.getVoices()
		
		const randomVoice = voices[m.randomInt(0, voices.length-1)]
		
		speaker.speakWithVoice(\`Hello there, how are you?\`, randomVoice)
		
	}
	
}`,x:150,y:200}]}}}),U=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		
		const voices = speaker.getVoices()
		
		return Rows.padding(2).children(
			voices.map(
				v => [
					Columns.backgroundColor(\`white\`).cornerRadius(4).padding(1).children(
						Text.grow(2).text(v.name),
						Text.grow(2).text(v.languageCode),
						Text.grow(1).text(v.rate.toString()),
						Text.grow(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}`,x:150,y:200}]}}}),K=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		
		const voices = speaker.getVoicesByLanguageCode(\`en\`)
		
		return Rows.padding(2).children(
			voices.map(
				v => [
					Columns.backgroundColor(\`white\`).cornerRadius(4).padding(1).children(
						Text.grow(2).text(v.name),
						Text.grow(2).text(v.languageCode),
						Text.grow(1).text(v.rate.toString()),
						Text.grow(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}`,x:150,y:200}]}}}),Z=new hn({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	textToSay = \`This will be said!\`
	rate = 1
	pitch = 1
	
	createGui(){
		
		const voices = speaker.getVoices()
		
		return Rows.padding(2).children(
			
			EnterText.text(p.textToSay).store(p, \`textToSay\`),
			
			Columns.children(
				Text.text(\`Rate: \`),
				EnterNumber.number(p.rate).store(p, \`rate\`),
			),
			
			Columns.children(
				Text.text(\`Pitch: \`),
				EnterNumber.number(p.pitch).store(p, \`pitch\`),
			),
			
			Box.grow(1).child(
				Rows.children(
					voices.map(
						v => Button.text(\`\${v.name} (\${v.languageCode})\`).stay().onClick(p.speak, v),
					),
				),
			)
			
		)
		
	}
	
	speak(voice){
		
		voice.rate = p.rate
		voice.pitch = p.pitch
		
		speaker.speakWithVoice(p.textToSay, voice)
		
	}
	
}`,x:150,y:200}]}}}),{c(){h=e("h1"),h.innerHTML=Qn,Cn=l(),S=e("p"),S.innerHTML=Zn,yn=l(),H=e("h2"),H.textContent=Yn,bn=l(),L=e("p"),L.innerHTML=nt,_n=l(),b=e("div"),b.innerHTML=tt,Tn=l(),_=e("div"),M=e("div"),M.textContent=st,ln(E.$$.fragment),Pn=l(),j=e("h2"),j.textContent=at,Sn=l(),V=e("p"),V.innerHTML=et,Hn=l(),T=e("div"),T.innerHTML=pt,Ln=l(),k=e("div"),I=e("div"),I.textContent=ot,Y=e("p"),Y.innerHTML=ct,ln(O.$$.fragment),v=e("a"),v.textContent=lt,nn=e("pre"),Mn=new un(!1),En=l(),A=e("h2"),A.textContent=ut,jn=l(),W=e("p"),W.innerHTML=it,Vn=l(),d=e("div"),R=e("div"),R.textContent=rt,tn=e("p"),tn.innerHTML=kt,ln($.$$.fragment),x=e("a"),x.textContent=dt,sn=e("pre"),In=new un(!1),On=l(),G=e("h2"),G.innerHTML=gt,An=l(),N=e("p"),N.innerHTML=mt,Wn=l(),B=e("pre"),Rn=new un(!1),$n=l(),D=e("ul"),D.innerHTML=ft,Gn=l(),P=e("div"),P.innerHTML=ht,Nn=l(),g=e("div"),J=e("div"),J.textContent=vt,ln(U.$$.fragment),w=e("a"),w.textContent=xt,an=e("pre"),Bn=new un(!1),Dn=l(),q=e("h2"),q.innerHTML=wt,Jn=l(),z=e("p"),z.innerHTML=Ct,Un=l(),m=e("div"),X=e("div"),X.textContent=yt,ln(K.$$.fragment),C=e("a"),C.textContent=bt,en=e("pre"),qn=new un(!1),zn=l(),F=e("h2"),F.textContent=_t,Xn=l(),f=e("div"),Q=e("div"),Q.textContent=Tt,ln(Z.$$.fragment),y=e("a"),y.textContent=Pt,pn=e("pre"),Kn=new un(!1),this.h()},l(n){h=p(n,"H1",{"data-svelte-h":!0}),c(h)!=="svelte-1kwrv8k"&&(h.innerHTML=Qn),Cn=u(n),S=p(n,"P",{"data-svelte-h":!0}),c(S)!=="svelte-5op67"&&(S.innerHTML=Zn),yn=u(n),H=p(n,"H2",{"data-svelte-h":!0}),c(H)!=="svelte-1ukekoe"&&(H.textContent=Yn),bn=u(n),L=p(n,"P",{"data-svelte-h":!0}),c(L)!=="svelte-1wh5f0d"&&(L.innerHTML=nt),_n=u(n),b=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(b)!=="svelte-1laglfv"&&(b.innerHTML=tt),Tn=u(n),_=p(n,"DIV",{class:!0});var s=r(_);M=p(s,"DIV",{class:!0,"data-svelte-h":!0}),c(M)!=="svelte-1llzxwj"&&(M.textContent=st),rn(E.$$.fragment,s),s.forEach(t),Pn=u(n),j=p(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-17c5dxw"&&(j.textContent=at),Sn=u(n),V=p(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-14d3us7"&&(V.innerHTML=et),Hn=u(n),T=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-19jhk04"&&(T.innerHTML=pt),Ln=u(n),k=p(n,"DIV",{class:!0});var on=r(k);I=p(on,"DIV",{class:!0,"data-svelte-h":!0}),c(I)!=="svelte-1llzxwj"&&(I.textContent=ot),Y=p(on,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-m3q9cy"&&(Y.innerHTML=ct),rn(O.$$.fragment,on),v=p(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(v)!=="svelte-sfbzom"&&(v.textContent=lt),nn=p(on,"PRE",{class:!0});var St=r(nn);Mn=kn(St,!1),St.forEach(t),on.forEach(t),En=u(n),A=p(n,"H2",{"data-svelte-h":!0}),c(A)!=="svelte-1bqjpfj"&&(A.textContent=ut),jn=u(n),W=p(n,"P",{"data-svelte-h":!0}),c(W)!=="svelte-o9gl8t"&&(W.innerHTML=it),Vn=u(n),d=p(n,"DIV",{class:!0});var cn=r(d);R=p(cn,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1llzxwj"&&(R.textContent=rt),tn=p(cn,"P",{"data-svelte-h":!0}),c(tn)!=="svelte-m3q9cy"&&(tn.innerHTML=kt),rn($.$$.fragment,cn),x=p(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-1ol2mob"&&(x.textContent=dt),sn=p(cn,"PRE",{class:!0});var Ht=r(sn);In=kn(Ht,!1),Ht.forEach(t),cn.forEach(t),On=u(n),G=p(n,"H2",{"data-svelte-h":!0}),c(G)!=="svelte-1f8i6m9"&&(G.innerHTML=gt),An=u(n),N=p(n,"P",{"data-svelte-h":!0}),c(N)!=="svelte-19sea2i"&&(N.innerHTML=mt),Wn=u(n),B=p(n,"PRE",{class:!0});var Lt=r(B);Rn=kn(Lt,!1),Lt.forEach(t),$n=u(n),D=p(n,"UL",{"data-svelte-h":!0}),c(D)!=="svelte-m7lqyy"&&(D.innerHTML=ft),Gn=u(n),P=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(P)!=="svelte-rht2em"&&(P.innerHTML=ht),Nn=u(n),g=p(n,"DIV",{class:!0});var vn=r(g);J=p(vn,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-1llzxwj"&&(J.textContent=vt),rn(U.$$.fragment,vn),w=p(vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-1juu0qd"&&(w.textContent=xt),an=p(vn,"PRE",{class:!0});var Mt=r(an);Bn=kn(Mt,!1),Mt.forEach(t),vn.forEach(t),Dn=u(n),q=p(n,"H2",{"data-svelte-h":!0}),c(q)!=="svelte-1mtstsi"&&(q.innerHTML=wt),Jn=u(n),z=p(n,"P",{"data-svelte-h":!0}),c(z)!=="svelte-afhn3i"&&(z.innerHTML=Ct),Un=u(n),m=p(n,"DIV",{class:!0});var xn=r(m);X=p(xn,"DIV",{class:!0,"data-svelte-h":!0}),c(X)!=="svelte-1llzxwj"&&(X.textContent=yt),rn(K.$$.fragment,xn),C=p(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-cz4scq"&&(C.textContent=bt),en=p(xn,"PRE",{class:!0});var Et=r(en);qn=kn(Et,!1),Et.forEach(t),xn.forEach(t),zn=u(n),F=p(n,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-1uz9czj"&&(F.textContent=_t),Xn=u(n),f=p(n,"DIV",{class:!0});var wn=r(f);Q=p(wn,"DIV",{class:!0,"data-svelte-h":!0}),c(Q)!=="svelte-k6awo"&&(Q.textContent=Tt),rn(Z.$$.fragment,wn),y=p(wn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-1eubfgc"&&(y.textContent=Pt),pn=p(wn,"PRE",{class:!0});var jt=r(pn);Kn=kn(jt,!1),jt.forEach(t),wn.forEach(t),this.h()},h(){o(b,"class","remark-container warning"),o(M,"class","remark-container__title"),o(_,"class","remark-container tip"),o(T,"class","remark-container warning"),o(I,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNpdj0FrwzAMhf+KqlMCJmSDXnwZWw9rD4NBj80gJtGaUM82tkIbgv/70mSYbTe9J+l90oTKOZQTNrYllNhoFQK8jc/OAd2YTBtgrqfKVNx4UkxHVp7f1ZmyfHEr9sSDN5AadzdWJmIU6GYdUJ4m7FuUDwI/rW7JH1bxB5r2E/guVkaivw79f+7LwGxNwfNWVh/VCMF+EXe9OW/qvLBmp/vmkrkiOFKX/Oe4NXOxUt6iyK+DWb0nrS1wR54EdPYKyhOMdniqf4dEFHibn9mWAkeUj2UZP+I3q916ZQ=="),o(v,"title","Open in our Online Editor"),Mn.a=null,o(nn,"class","language-js"),o(k,"class","remark-container tip"),o(R,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNplkEFLxDAQhf9KnFMLMXQFLwUR9aB7EIQFPWwXGtqxLdsmIZnqltL/bjetpa6XJPMm732T9CCNgbiHTOcIMWS1dI69dg/GMDwRqtyx8dwnKqHMoiTckbT0JgsMQq8mZJFaq9jSOKtDogYYOJixdhDve6hyiDccPnWdo91OxR/o4l/A52JiLPTntrrkPrZEWgkaXUG6kx1zukEqK1VcpaHQ6qmusmNghDMoj+E83JTppSVvWjOtHLEvXWXo2B3zV9CKAunda0H4/7aVKteN74+WybtvxCRvFQURn1VRoyqovN6Eh3XML8XvHxWVPitIX7CuNaMSLXJW6m8mLbJOt/cpX0NXI81vG4DDafzj24hDB/FNFA2H4QcjPLK9"),o(x,"title","Open in our Online Editor"),In.a=null,o(sn,"class","language-js"),o(d,"class","remark-container tip"),Rn.a=null,o(B,"class","language-js"),o(P,"class","remark-container warning"),o(J,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqNUk1rAyEQ/SviaRcWSUJ7WUihzaH0UChJ6SUbiNXprmSjorP5YNn/XpNNbAINLYL43ryZN462lFtL85YKI4HmVNTce/K6f7SWwA5BS0/CuS10gcIBR5ghd/jGS0jSI1ugA2ycJjFwYLtCd7TLqA3Y03zeUiVpPszol6kluJceXJnG/Gh8AL1HdH9uVPTtd2G0R7IxSoAnY+It8BU4VgJ+HLkkvVSfep2arWeWS6l0mYxSJipVSwc6OWmxr8fW3EYqkGT8QOY/uMCJqZu19uyTi1XpTKNlYIxLlttKISxDYeM0uCmXqvHJXRo9h7949us93J6FWttDXxhAsmGaryHN/tbVXJdNGNokzPW2fhj1LkyUoZmhO/SU/ifFKhTVzZxr9GR2rAJVVhh6vIgszsczefFEXf/eHc3oLvyR+0FG9zQfDQbdovsGO774BA=="),o(w,"title","Open in our Online Editor"),Bn.a=null,o(an,"class","language-js"),o(g,"class","remark-container tip"),o(X,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqNkl1LwzAUhv9KyFULJWxDbwoT3C5EUJBNvFkHjc2xDeuSkJzug9L/brputQOHEgh535xznpOPmnJjaFzTTAugMc1K7hx5PT4aQ+CAoIQjfl0nKsHMAkdYIrf4xnMIwpOboAWsrCL9Rus2iWpoE1HjtaPxqqZS0Hgc0S9dCrDPnbiC9vk9uBUdo6c/VbLndnOmlUOy0zIDR6bEGeAbsCwH/Dh5s+MLV3nlS809LUhBpeEw/9z9Qu8dM1wIqfJgErKskKWwoIJzLHYEtuWmt7xJpg9k9aMTnOuy2irHPnm2ya2ulPCOtkG6LyRC6gtrq8AuuJCVC+7Cnjn+hdmNd38fzNfat32hF8GOKb6FMPo7rhyc/Xb8uI+3/o4Z6iXatqfwPylGYlbczLlWM31gBci8QN/jYGd9WV7MwRM13Q9oaEQP/tfcjyJ6pPFkNGrWzTepsP7x"),o(C,"title","Open in our Online Editor"),qn.a=null,o(en,"class","language-js"),o(m,"class","remark-container tip"),o(Q,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqdU01r3DAQ/Suq6EEGI3YDvRhSaJZQckgJydIe6oAVW/GKeCUhjfcD4/9eSf6I3IYSctjVzGhG783Mc4eZ1jjrcKkqjjNcNsxadHv+pjXiJ+CyssjZXS5zKA1nwB+AGbhjNSdJiOZgOLRGovnCR/tc9rhPsXa+xdnvDosKZ+sUP6um4uZmcBagc/0M7J0Bw/3ARbfqgZ3RJSq2O2HRUTQNeuLIMlF9KnyOcfzc9drbWkC5m5xX+t9bMRMf/kslLaCDEiW3Lt9qzl64oTWHnyFGkjh7bPZeHS3VrKqErMlFQsudaCrDJRlzYTqvJXCzddypb4BoOveRUAvKcKJTVMzBIkn/fmGjmnYv7RsQ8Ppuce96y1BcPkD/aPdPrhsZDgfvRxQjez+q+ij8nZ/2e/DDWmICIfBfBlfqRGujjmQ9zjmiEPbwBrUchoXSPdOLsLtAl1/RVQug5Ej+c3egku15j4g3Gybr1klv49TZJ4Uny84koUpuGlG+uCaCRlJ0iLtdMI/sZNlOJKZ+UmZ4jgTCS2mGEB1VPewuvpgkPk41rpxUHM5fAnZBy7H80kHy//LpcYpP7vP8skrxGWcXq1X/2P8B87iFug=="),o(y,"title","Open in our Online Editor"),Kn.a=null,o(pn,"class","language-js"),o(f,"class","remark-container tip")},m(n,s){a(n,h,s),a(n,Cn,s),a(n,S,s),a(n,yn,s),a(n,H,s),a(n,bn,s),a(n,L,s),a(n,_n,s),a(n,b,s),a(n,Tn,s),a(n,_,s),i(_,M),dn(E,_,null),a(n,Pn,s),a(n,j,s),a(n,Sn,s),a(n,V,s),a(n,Hn,s),a(n,T,s),a(n,Ln,s),a(n,k,s),i(k,I),i(k,Y),dn(O,k,null),i(k,v),i(k,nn),Mn.m(It,nn),a(n,En,s),a(n,A,s),a(n,jn,s),a(n,W,s),a(n,Vn,s),a(n,d,s),i(d,R),i(d,tn),dn($,d,null),i(d,x),i(d,sn),In.m(Ot,sn),a(n,On,s),a(n,G,s),a(n,An,s),a(n,N,s),a(n,Wn,s),a(n,B,s),Rn.m(At,B),a(n,$n,s),a(n,D,s),a(n,Gn,s),a(n,P,s),a(n,Nn,s),a(n,g,s),i(g,J),dn(U,g,null),i(g,w),i(g,an),Bn.m(Wt,an),a(n,Dn,s),a(n,q,s),a(n,Jn,s),a(n,z,s),a(n,Un,s),a(n,m,s),i(m,X),dn(K,m,null),i(m,C),i(m,en),qn.m(Rt,en),a(n,zn,s),a(n,F,s),a(n,Xn,s),a(n,f,s),i(f,Q),dn(Z,f,null),i(f,y),i(f,pn),Kn.m($t,pn),Fn=!0},p:Nt,i(n){Fn||(gn(E.$$.fragment,n),gn(O.$$.fragment,n),gn($.$$.fragment,n),gn(U.$$.fragment,n),gn(K.$$.fragment,n),gn(Z.$$.fragment,n),Fn=!0)},o(n){mn(E.$$.fragment,n),mn(O.$$.fragment,n),mn($.$$.fragment,n),mn(U.$$.fragment,n),mn(K.$$.fragment,n),mn(Z.$$.fragment,n),Fn=!1},d(n){n&&(t(h),t(Cn),t(S),t(yn),t(H),t(bn),t(L),t(_n),t(b),t(Tn),t(_),t(Pn),t(j),t(Sn),t(V),t(Hn),t(T),t(Ln),t(k),t(En),t(A),t(jn),t(W),t(Vn),t(d),t(On),t(G),t(An),t(N),t(Wn),t(B),t($n),t(D),t(Gn),t(P),t(Nn),t(g),t(Dn),t(q),t(Jn),t(z),t(Un),t(m),t(zn),t(F),t(Xn),t(f)),fn(E),fn(O),fn($),fn(U),fn(K),fn(Z)}}}class Xt extends Bt{constructor(h){super(),Dt(this,h,null,Jt,Gt,{})}}export{Xt as component};
