import{s as At,n as It}from"../chunks/scheduler.B0TnBjPs.js";import{S as Rt,i as Dt,e,s as l,c as cn,H as ln,a as p,g as c,b as u,d as r,f as un,h as t,n as rn,o,j as a,p as i,m as kn,t as dn,k as gn,l as mn}from"../chunks/index.Cnh3HYw3.js";import{V as fn}from"../chunks/ViewApp.BajIxHdc.js";function Ut(Lt){let h,Gn="<code>speaker</code>",wn,P,Yn="On this page you find the documentation for the <code>speaker</code> variable.",yn,S,Kn="Introduction",bn,M,Qn="The <code>speaker</code> variable contains an object used for playing something on the device&#39;s speaker. It can be used to play sounds (not yet supported 😅) or to speak words to the user.",Cn,C,E,Zn="Example",L,Tn,H,nt="speak() - Making the speaker speak words",_n,V,tt="Use the method <code>speak()</code> to instruct the speaker to speak some words to the user. Pass it the words as a string. The speaker&#39;s default voice will be used to speak the words.",Pn,T,st='<div class="remark-container__title">Might not always work!</div><p>The speaker will only work if the web browser the user is using supports the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" rel="nofollow" target="_blank">Web Speech API</a>.</p>',Sn,k,j,at="Example",Q,et='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',z,v,pt="Open in Online Editor",Z,Mn,Ht=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		speaker<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,En,W,ot="speakWithVoice() - Making the speaker speak words with a specific voice",Ln,O,ct="Use the method <code>speakWithVoice()</code> to instruct the speaker to speak some words to the user with a specific voice. Pass it the words as a string, and the voice as an object retrieved from <code>getVoices()</code>.",Hn,d,A,lt="Example",nn,ut='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',I,x,it="Open in Online Editor",tn,Vn,Vt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> randomVoice <span class="token operator">=</span> voices<span class="token punctuation">[</span>m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> voices<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> randomVoice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,jn,R,rt="<code>getVoices()</code> - Obtaining all supported voices",zn,D,kt="Use the method <code>getVoices()</code> to obtain an array of voices that can be used to speak the words passed to <code>speakWithVoices()</code>. This method returns an array with voice objects looking like this:",Wn,U,On,jt=`<code class="language-js"><span class="token keyword">const</span> voiceObject <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A unique value identifying this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The name of this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">languageCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The code of the language this voice is specialized in, e.g. en-US</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,An,$,dt='<li><code>languageCode</code> is of the format <code>LANGUAGE-COUNTRY</code>. For example, <code>en-US</code> means <em>English as they speak it in the United States</em>. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> contains the code for different languages and countries</li> <li><code>rate</code> can be decreased/increased to make the voice speak slower/faster</li> <li><code>pitch</code> can be decreased/increased to lower/raise the pitch of the voice</li>',In,_,gt='<div class="remark-container__title">Different devices = different voices!</div><p>Different devices support different voices, so the voices that are supported on your device are not necessarily supported on devices your users have. Which voices that are available are primarily determined by:</p><ul><li>Which operating system (Windows, Max, Linux, etc.) the device is using</li> <li>Which web browser (Firefox, Chrome, Safari, Edge, etc. ) that is used to run the BagaWork app</li></ul>',Rn,g,B,mt="Example",N,w,ft="Open in Online Editor",sn,Dn,zt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
					Columns<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>rate<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>pitch<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Un,F,ht="<code>getVoicesByLanguageCode()</code> - Obtaining supported voices in a language",$n,X,vt='Use the method <code>getVoicesByLanguageCode()</code> to obtain an array of voices that are for a specific language. Pass it the language code as a string, such as <code>`sv`</code> for Swedish, or <code>`en`</code> for English. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> shows the code for different languages and countries.',Bn,m,q,xt="Example",J,y,wt="Open in Online Editor",an,Nn,Wt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoicesByLanguageCode</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">en</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">v</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
					Columns<span class="token punctuation">.</span><span class="token function">backgroundColor</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">white</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>languageCode<span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>rate<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
						Text<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>v<span class="token punctuation">.</span>pitch<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
					<span class="token punctuation">)</span><span class="token punctuation">,</span>
					Box<span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">]</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Fn,G,yt="Playground",Xn,f,Y,bt="Playground",K,b,Ct="Open in Online Editor",en,qn,Ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			
			Box<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">child</span><span class="token punctuation">(</span>
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
	
<span class="token punctuation">&#125;</span></code>`,Jn;return L=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),z=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),I=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),N=new fn({props:{project:{app:{code:`class MyApp extends App{
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
						Text.size(2).text(v.name),
						Text.size(2).text(v.languageCode),
						Text.size(1).text(v.rate.toString()),
						Text.size(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}`,x:150,y:200}]}}}),J=new fn({props:{project:{app:{code:`class MyApp extends App{
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
						Text.size(2).text(v.name),
						Text.size(2).text(v.languageCode),
						Text.size(1).text(v.rate.toString()),
						Text.size(1).text(v.pitch.toString()),
					),
					Box.height(2),
				]
			),
		)
		
	}
	
}`,x:150,y:200}]}}}),K=new fn({props:{project:{app:{code:`class MyApp extends App{
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
			
			Box.size(1).child(
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
	
}`,x:150,y:200}]}}}),{c(){h=e("h1"),h.innerHTML=Gn,wn=l(),P=e("p"),P.innerHTML=Yn,yn=l(),S=e("h2"),S.textContent=Kn,bn=l(),M=e("p"),M.innerHTML=Qn,Cn=l(),C=e("div"),E=e("div"),E.textContent=Zn,cn(L.$$.fragment),Tn=l(),H=e("h2"),H.textContent=nt,_n=l(),V=e("p"),V.innerHTML=tt,Pn=l(),T=e("div"),T.innerHTML=st,Sn=l(),k=e("div"),j=e("div"),j.textContent=at,Q=e("p"),Q.innerHTML=et,cn(z.$$.fragment),v=e("a"),v.textContent=pt,Z=e("pre"),Mn=new ln(!1),En=l(),W=e("h2"),W.textContent=ot,Ln=l(),O=e("p"),O.innerHTML=ct,Hn=l(),d=e("div"),A=e("div"),A.textContent=lt,nn=e("p"),nn.innerHTML=ut,cn(I.$$.fragment),x=e("a"),x.textContent=it,tn=e("pre"),Vn=new ln(!1),jn=l(),R=e("h2"),R.innerHTML=rt,zn=l(),D=e("p"),D.innerHTML=kt,Wn=l(),U=e("pre"),On=new ln(!1),An=l(),$=e("ul"),$.innerHTML=dt,In=l(),_=e("div"),_.innerHTML=gt,Rn=l(),g=e("div"),B=e("div"),B.textContent=mt,cn(N.$$.fragment),w=e("a"),w.textContent=ft,sn=e("pre"),Dn=new ln(!1),Un=l(),F=e("h2"),F.innerHTML=ht,$n=l(),X=e("p"),X.innerHTML=vt,Bn=l(),m=e("div"),q=e("div"),q.textContent=xt,cn(J.$$.fragment),y=e("a"),y.textContent=wt,an=e("pre"),Nn=new ln(!1),Fn=l(),G=e("h2"),G.textContent=yt,Xn=l(),f=e("div"),Y=e("div"),Y.textContent=bt,cn(K.$$.fragment),b=e("a"),b.textContent=Ct,en=e("pre"),qn=new ln(!1),this.h()},l(n){h=p(n,"H1",{"data-svelte-h":!0}),c(h)!=="svelte-1kwrv8k"&&(h.innerHTML=Gn),wn=u(n),P=p(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-5op67"&&(P.innerHTML=Yn),yn=u(n),S=p(n,"H2",{"data-svelte-h":!0}),c(S)!=="svelte-1ukekoe"&&(S.textContent=Kn),bn=u(n),M=p(n,"P",{"data-svelte-h":!0}),c(M)!=="svelte-4z9759"&&(M.innerHTML=Qn),Cn=u(n),C=p(n,"DIV",{class:!0});var s=r(C);E=p(s,"DIV",{class:!0,"data-svelte-h":!0}),c(E)!=="svelte-1llzxwj"&&(E.textContent=Zn),un(L.$$.fragment,s),s.forEach(t),Tn=u(n),H=p(n,"H2",{"data-svelte-h":!0}),c(H)!=="svelte-17c5dxw"&&(H.textContent=nt),_n=u(n),V=p(n,"P",{"data-svelte-h":!0}),c(V)!=="svelte-14d3us7"&&(V.innerHTML=tt),Pn=u(n),T=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-19jhk04"&&(T.innerHTML=st),Sn=u(n),k=p(n,"DIV",{class:!0});var pn=r(k);j=p(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(j)!=="svelte-1llzxwj"&&(j.textContent=at),Q=p(pn,"P",{"data-svelte-h":!0}),c(Q)!=="svelte-m3q9cy"&&(Q.innerHTML=et),un(z.$$.fragment,pn),v=p(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(v)!=="svelte-sfbzom"&&(v.textContent=pt),Z=p(pn,"PRE",{class:!0});var Tt=r(Z);Mn=rn(Tt,!1),Tt.forEach(t),pn.forEach(t),En=u(n),W=p(n,"H2",{"data-svelte-h":!0}),c(W)!=="svelte-1bqjpfj"&&(W.textContent=ot),Ln=u(n),O=p(n,"P",{"data-svelte-h":!0}),c(O)!=="svelte-o9gl8t"&&(O.innerHTML=ct),Hn=u(n),d=p(n,"DIV",{class:!0});var on=r(d);A=p(on,"DIV",{class:!0,"data-svelte-h":!0}),c(A)!=="svelte-1llzxwj"&&(A.textContent=lt),nn=p(on,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-m3q9cy"&&(nn.innerHTML=ut),un(I.$$.fragment,on),x=p(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-1ol2mob"&&(x.textContent=it),tn=p(on,"PRE",{class:!0});var _t=r(tn);Vn=rn(_t,!1),_t.forEach(t),on.forEach(t),jn=u(n),R=p(n,"H2",{"data-svelte-h":!0}),c(R)!=="svelte-1f8i6m9"&&(R.innerHTML=rt),zn=u(n),D=p(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-19sea2i"&&(D.innerHTML=kt),Wn=u(n),U=p(n,"PRE",{class:!0});var Pt=r(U);On=rn(Pt,!1),Pt.forEach(t),An=u(n),$=p(n,"UL",{"data-svelte-h":!0}),c($)!=="svelte-m7lqyy"&&($.innerHTML=dt),In=u(n),_=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(_)!=="svelte-rht2em"&&(_.innerHTML=gt),Rn=u(n),g=p(n,"DIV",{class:!0});var hn=r(g);B=p(hn,"DIV",{class:!0,"data-svelte-h":!0}),c(B)!=="svelte-1llzxwj"&&(B.textContent=mt),un(N.$$.fragment,hn),w=p(hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-svw601"&&(w.textContent=ft),sn=p(hn,"PRE",{class:!0});var St=r(sn);Dn=rn(St,!1),St.forEach(t),hn.forEach(t),Un=u(n),F=p(n,"H2",{"data-svelte-h":!0}),c(F)!=="svelte-1mtstsi"&&(F.innerHTML=ht),$n=u(n),X=p(n,"P",{"data-svelte-h":!0}),c(X)!=="svelte-afhn3i"&&(X.innerHTML=vt),Bn=u(n),m=p(n,"DIV",{class:!0});var vn=r(m);q=p(vn,"DIV",{class:!0,"data-svelte-h":!0}),c(q)!=="svelte-1llzxwj"&&(q.textContent=xt),un(J.$$.fragment,vn),y=p(vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-u2mu6f"&&(y.textContent=wt),an=p(vn,"PRE",{class:!0});var Mt=r(an);Nn=rn(Mt,!1),Mt.forEach(t),vn.forEach(t),Fn=u(n),G=p(n,"H2",{"data-svelte-h":!0}),c(G)!=="svelte-1uz9czj"&&(G.textContent=yt),Xn=u(n),f=p(n,"DIV",{class:!0});var xn=r(f);Y=p(xn,"DIV",{class:!0,"data-svelte-h":!0}),c(Y)!=="svelte-k6awo"&&(Y.textContent=bt),un(K.$$.fragment,xn),b=p(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(b)!=="svelte-w589"&&(b.textContent=Ct),en=p(xn,"PRE",{class:!0});var Et=r(en);qn=rn(Et,!1),Et.forEach(t),xn.forEach(t),this.h()},h(){o(E,"class","remark-container__title"),o(C,"class","remark-container tip"),o(T,"class","remark-container warning"),o(j,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNpdj0FrwzAMhf+KqlMCJmSDXnwZWw9rD4NBj80gJtGaUM82tkIbgv/70mSYbTe9J+l90oTKOZQTNrYllNhoFQK8jc/OAd2YTBtgrqfKVNx4UkxHVp7f1ZmyfHEr9sSDN5AadzdWJmIU6GYdUJ4m7FuUDwI/rW7JH1bxB5r2E/guVkaivw79f+7LwGxNwfNWVh/VCMF+EXe9OW/qvLBmp/vmkrkiOFKX/Oe4NXOxUt6iyK+DWb0nrS1wR54EdPYKyhOMdniqf4dEFHibn9mWAkeUj2UZP+I3q916ZQ=="),o(v,"title","Open in our Online Editor"),Mn.a=null,o(Z,"class","language-js"),o(k,"class","remark-container tip"),o(A,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNplkEFLxDAQhf9KnFMLMXQFLwUR9aB7EIQFPWwXGtqxLdsmIZnqltL/bjetpa6XJPMm732T9CCNgbiHTOcIMWS1dI69dg/GMDwRqtyx8dwnKqHMoiTckbT0JgsMQq8mZJFaq9jSOKtDogYYOJixdhDve6hyiDccPnWdo91OxR/o4l/A52JiLPTntrrkPrZEWgkaXUG6kx1zukEqK1VcpaHQ6qmusmNghDMoj+E83JTppSVvWjOtHLEvXWXo2B3zV9CKAunda0H4/7aVKteN74+WybtvxCRvFQURn1VRoyqovN6Eh3XML8XvHxWVPitIX7CuNaMSLXJW6m8mLbJOt/cpX0NXI81vG4DDafzj24hDB/FNFA2H4QcjPLK9"),o(x,"title","Open in our Online Editor"),Vn.a=null,o(tn,"class","language-js"),o(d,"class","remark-container tip"),On.a=null,o(U,"class","language-js"),o(_,"class","remark-container warning"),o(B,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqNUk1rAyEQ/SviaRcWSUJ7WUihzaH0UChJ6SUbiNXprmSjorP56LL/vSab2gQaWgTxvXkzbxxtKbeW5i0VRgLNqai59+R5f28tgR2Clp6Ec1voAoUDjjBD7vCFl5CkR7ZAB9g4TWLgwHaF7miXURuwp/m8pUrSfJjRD1NLcE89uDCN+dH4AHqP6P7YqOjb78Joj2RjlABPxsRb4CtwrAR8O3JJeq4+9To1W88sl1LpMhmlTFSqlg50ctJiX4+tuY1UIMn4jsx/cIETUzdr7dk7F6vSmUbLwBiXLLeVQliGwsZpcFMuVeOTmzR6Dn/x7NdruD3z6hMOfWEAyYZpvoY0+1tXc102YWiTMNfr+mHUuzBRhmaG7tBT+p8Uq1BUV3Mu0YPZsQpUWWHo8Syy+D5+k2dP1PXv3dGM7sIfuR1kdE/z0WDQLbovLy739A=="),o(w,"title","Open in our Online Editor"),Dn.a=null,o(sn,"class","language-js"),o(g,"class","remark-container tip"),o(q,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqNkl1LwzAUhv9KyFULJWxDbwoT3C5EUJBNvFkHjc2xDeuSkJzuw9L/brputQNFCYS8b845z8lHTbkxNK5ppgXQmGYld448H++NIXBAUMIRv64TlWBmgSMskVt84TkE4clN0AJWVpF+o3WbRDW0iajx2tF4VVMpaDyO6IcuBdjHTlxB+/we3IqO0dMfKtlzuznTyiHZaZmBI1PiDPANWJYDvp282fGJq7zypeaeFqSg0nCYf+5+ofeOGS6EVHkwCVlWyFJYUME5FjsC23LTW94k0zuy+tYJznVZbZVj7zzb5FZXSnhH2yDdFxIh9YW1VWAXXMjKBTdhzxz/wOzGq78P5uQntH2hF8GOKb6FMPo7rhyc/ff4cR9v/R0z1Eu0bU/hf1KMxKz4NedazfSBFSDzAn2Pg531ZXkxB0/UdD+goRE9+F9zO4rokcaT0ahZN1+dIP7h"),o(y,"title","Open in our Online Editor"),Nn.a=null,o(an,"class","language-js"),o(m,"class","remark-container tip"),o(Y,"class","remark-container__title"),o(b,"target","_blank"),o(b,"href","/editor#eNqdU99r2zAQ/ldUsQcZjEgKfTF0sIYx9rBR2rA9zAOrtpqIOpKQzmkyo/99kvyj8lbG6EOiu9Odvu/uPveYaY2LHteq4bjAdcusRV/OH7RG/ARcNhZ5uy9lCbXhDPg9MAO3bMdJFqMlGA6dkWi+CFFXSoddjrX3LS5+9Fg0uFjn+FG1DTefB2cBOtfPwMEZMPwPfHSr7tkZXaNquxcWPYu2RQ8cWSaaiyrkGM/PX6+DrQXU+8l5of+pEzPx4b9W0gI6KlFz6/Ot5uyJG7rj8C3GSJZmj83eqWdLNWsaIXfkMqP1XrSN4ZKMuTCdHyVws/XcaWiAaDr3kVELynCic1TNwSrL/3xho9ruIO0rEPDybnXneytQWj5Af+0OD74bGQ8PH0aUIgc/qXor/G2Y9v/gx7WkBGLgnwxu1Ila8YuT9TjnhELcwyvUShgWSg9ML8L+Al2/RzcdgJIj+Xf9kUp24A6RYLZM7jovvY1Xp8uqQJadSUaV3LSifvJNRI3k6Jh2u2Ce2NmynURMblJmfI5EwktpxhAdVT3sLr2YJD5ONa2cVBzP7wL2Ucup/PJB8n/zcTjHJ/95Xq1yfMbF5Wrlfrrf7eGFtg=="),o(b,"title","Open in our Online Editor"),qn.a=null,o(en,"class","language-js"),o(f,"class","remark-container tip")},m(n,s){a(n,h,s),a(n,wn,s),a(n,P,s),a(n,yn,s),a(n,S,s),a(n,bn,s),a(n,M,s),a(n,Cn,s),a(n,C,s),i(C,E),kn(L,C,null),a(n,Tn,s),a(n,H,s),a(n,_n,s),a(n,V,s),a(n,Pn,s),a(n,T,s),a(n,Sn,s),a(n,k,s),i(k,j),i(k,Q),kn(z,k,null),i(k,v),i(k,Z),Mn.m(Ht,Z),a(n,En,s),a(n,W,s),a(n,Ln,s),a(n,O,s),a(n,Hn,s),a(n,d,s),i(d,A),i(d,nn),kn(I,d,null),i(d,x),i(d,tn),Vn.m(Vt,tn),a(n,jn,s),a(n,R,s),a(n,zn,s),a(n,D,s),a(n,Wn,s),a(n,U,s),On.m(jt,U),a(n,An,s),a(n,$,s),a(n,In,s),a(n,_,s),a(n,Rn,s),a(n,g,s),i(g,B),kn(N,g,null),i(g,w),i(g,sn),Dn.m(zt,sn),a(n,Un,s),a(n,F,s),a(n,$n,s),a(n,X,s),a(n,Bn,s),a(n,m,s),i(m,q),kn(J,m,null),i(m,y),i(m,an),Nn.m(Wt,an),a(n,Fn,s),a(n,G,s),a(n,Xn,s),a(n,f,s),i(f,Y),kn(K,f,null),i(f,b),i(f,en),qn.m(Ot,en),Jn=!0},p:It,i(n){Jn||(dn(L.$$.fragment,n),dn(z.$$.fragment,n),dn(I.$$.fragment,n),dn(N.$$.fragment,n),dn(J.$$.fragment,n),dn(K.$$.fragment,n),Jn=!0)},o(n){gn(L.$$.fragment,n),gn(z.$$.fragment,n),gn(I.$$.fragment,n),gn(N.$$.fragment,n),gn(J.$$.fragment,n),gn(K.$$.fragment,n),Jn=!1},d(n){n&&(t(h),t(wn),t(P),t(yn),t(S),t(bn),t(M),t(Cn),t(C),t(Tn),t(H),t(_n),t(V),t(Pn),t(T),t(Sn),t(k),t(En),t(W),t(Ln),t(O),t(Hn),t(d),t(jn),t(R),t(zn),t(D),t(Wn),t(U),t(An),t($),t(In),t(_),t(Rn),t(g),t(Un),t(F),t($n),t(X),t(Bn),t(m),t(Fn),t(G),t(Xn),t(f)),mn(L),mn(z),mn(I),mn(N),mn(J),mn(K)}}}class Ft extends Rt{constructor(h){super(),Dt(this,h,null,Ut,At,{})}}export{Ft as component};
