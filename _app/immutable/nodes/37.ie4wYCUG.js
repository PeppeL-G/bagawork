import{s as Wt,n as Rt}from"../chunks/scheduler.B0TnBjPs.js";import{S as $t,i as Gt,e,s as l,c as cn,H as ln,a as p,g as c,b as u,d as r,f as un,h as t,n as rn,o,j as a,p as i,m as kn,t as dn,k as gn,l as mn}from"../chunks/index.BXVnRmkj.js";import{V as fn}from"../chunks/ViewApp.CB1BM1bD.js";function Bt(Et){let h,Kn="<code>speaker</code>",wn,P,Fn="On this page you find the documentation for the <code>speaker</code> variable.",Cn,S,Qn="Introduction",yn,H,Zn="The <code>speaker</code> variable contains an object used for playing something on the device&#39;s speaker. It can be used to play sounds (not yet supported 😅) or to speak words to the user.",bn,b,L,Yn="Example",E,_n,j,nt="speak() - Making the speaker speak words",Tn,M,tt="Use the method <code>speak()</code> to instruct the speaker to speak some words to the user. Pass it the words as a string. The speaker&#39;s default voice will be used to speak the words.",Pn,_,st='<div class="remark-container__title">Might not always work!</div><p>The speaker will only work if the web browser the user is using supports the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" rel="nofollow" target="_blank">Web Speech API</a>.</p>',Sn,k,V,at="Example",Z,et='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',I,v,pt="Open in Online Editor",Y,Hn,jt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		speaker<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ln,O,ot="speakWithVoice() - Making the speaker speak words with a specific voice",En,A,ct="Use the method <code>speakWithVoice()</code> to instruct the speaker to speak some words to the user with a specific voice. Pass it the words as a string, and the voice as an object retrieved from <code>getVoices()</code>.",jn,d,W,lt="Example",nn,ut='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',R,x,it="Open in Online Editor",tn,Mn,Mt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> randomVoice <span class="token operator">=</span> voices<span class="token punctuation">[</span>m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> voices<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> randomVoice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vn,$,rt="<code>getVoices()</code> - Obtaining all supported voices",In,G,kt="Use the method <code>getVoices()</code> to obtain an array of voices that can be used to speak the words passed to <code>speakWithVoices()</code>. This method returns an array with voice objects looking like this:",On,B,An,Vt=`<code class="language-js"><span class="token keyword">const</span> voiceObject <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A unique value identifying this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The name of this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">languageCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The code of the language this voice is specialized in, e.g. en-US</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,Wn,J,dt='<li><code>languageCode</code> is of the format <code>LANGUAGE-COUNTRY</code>. For example, <code>en-US</code> means <em>English as they speak it in the United States</em>. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> contains the code for different languages and countries</li> <li><code>rate</code> can be decreased/increased to make the voice speak slower/faster</li> <li><code>pitch</code> can be decreased/increased to lower/raise the pitch of the voice</li>',Rn,T,gt='<div class="remark-container__title">Different devices = different voices!</div><p>Different devices support different voices, so the voices that are supported on your device are not necessarily supported on devices your users have. Which voices that are available are primarily determined by:</p><ul><li>Which operating system (Windows, Max, Linux, etc.) the device is using</li> <li>Which web browser (Firefox, Chrome, Safari, Edge, etc. ) that is used to run the BagaWork app</li></ul>',$n,g,N,mt="Example",D,w,ft="Open in Online Editor",sn,Gn,It=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Bn,U,ht="<code>getVoicesByLanguageCode()</code> - Obtaining supported voices in a language",Jn,q,vt='Use the method <code>getVoicesByLanguageCode()</code> to obtain an array of voices that are for a specific language. Pass it the language code as a string, such as <code>`sv`</code> for Swedish, or <code>`en`</code> for English. <a href="https://gist.github.com/Josantonius/b455e315bc7f790d14b136d61d9ae469" rel="nofollow" target="_blank">This webpage</a> shows the code for different languages and countries.',Nn,m,z,xt="Example",X,C,wt="Open in Online Editor",an,Dn,Ot=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Un,K,Ct="Playground",qn,f,F,yt="Playground",Q,y,bt="Open in Online Editor",en,zn,At=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,Xn;return E=new fn({props:{project:{app:{code:`class MyApp extends App{
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
		speaker.speak(\`Hello there, how are you?\`)
	}
	
}`,x:150,y:200}]}}}),R=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),D=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),X=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),Q=new fn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),{c(){h=e("h1"),h.innerHTML=Kn,wn=l(),P=e("p"),P.innerHTML=Fn,Cn=l(),S=e("h2"),S.textContent=Qn,yn=l(),H=e("p"),H.innerHTML=Zn,bn=l(),b=e("div"),L=e("div"),L.textContent=Yn,cn(E.$$.fragment),_n=l(),j=e("h2"),j.textContent=nt,Tn=l(),M=e("p"),M.innerHTML=tt,Pn=l(),_=e("div"),_.innerHTML=st,Sn=l(),k=e("div"),V=e("div"),V.textContent=at,Z=e("p"),Z.innerHTML=et,cn(I.$$.fragment),v=e("a"),v.textContent=pt,Y=e("pre"),Hn=new ln(!1),Ln=l(),O=e("h2"),O.textContent=ot,En=l(),A=e("p"),A.innerHTML=ct,jn=l(),d=e("div"),W=e("div"),W.textContent=lt,nn=e("p"),nn.innerHTML=ut,cn(R.$$.fragment),x=e("a"),x.textContent=it,tn=e("pre"),Mn=new ln(!1),Vn=l(),$=e("h2"),$.innerHTML=rt,In=l(),G=e("p"),G.innerHTML=kt,On=l(),B=e("pre"),An=new ln(!1),Wn=l(),J=e("ul"),J.innerHTML=dt,Rn=l(),T=e("div"),T.innerHTML=gt,$n=l(),g=e("div"),N=e("div"),N.textContent=mt,cn(D.$$.fragment),w=e("a"),w.textContent=ft,sn=e("pre"),Gn=new ln(!1),Bn=l(),U=e("h2"),U.innerHTML=ht,Jn=l(),q=e("p"),q.innerHTML=vt,Nn=l(),m=e("div"),z=e("div"),z.textContent=xt,cn(X.$$.fragment),C=e("a"),C.textContent=wt,an=e("pre"),Dn=new ln(!1),Un=l(),K=e("h2"),K.textContent=Ct,qn=l(),f=e("div"),F=e("div"),F.textContent=yt,cn(Q.$$.fragment),y=e("a"),y.textContent=bt,en=e("pre"),zn=new ln(!1),this.h()},l(n){h=p(n,"H1",{"data-svelte-h":!0}),c(h)!=="svelte-1kwrv8k"&&(h.innerHTML=Kn),wn=u(n),P=p(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-5op67"&&(P.innerHTML=Fn),Cn=u(n),S=p(n,"H2",{"data-svelte-h":!0}),c(S)!=="svelte-1ukekoe"&&(S.textContent=Qn),yn=u(n),H=p(n,"P",{"data-svelte-h":!0}),c(H)!=="svelte-4z9759"&&(H.innerHTML=Zn),bn=u(n),b=p(n,"DIV",{class:!0});var s=r(b);L=p(s,"DIV",{class:!0,"data-svelte-h":!0}),c(L)!=="svelte-1llzxwj"&&(L.textContent=Yn),un(E.$$.fragment,s),s.forEach(t),_n=u(n),j=p(n,"H2",{"data-svelte-h":!0}),c(j)!=="svelte-17c5dxw"&&(j.textContent=nt),Tn=u(n),M=p(n,"P",{"data-svelte-h":!0}),c(M)!=="svelte-14d3us7"&&(M.innerHTML=tt),Pn=u(n),_=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(_)!=="svelte-19jhk04"&&(_.innerHTML=st),Sn=u(n),k=p(n,"DIV",{class:!0});var pn=r(k);V=p(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(V)!=="svelte-1llzxwj"&&(V.textContent=at),Z=p(pn,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-m3q9cy"&&(Z.innerHTML=et),un(I.$$.fragment,pn),v=p(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(v)!=="svelte-sfbzom"&&(v.textContent=pt),Y=p(pn,"PRE",{class:!0});var _t=r(Y);Hn=rn(_t,!1),_t.forEach(t),pn.forEach(t),Ln=u(n),O=p(n,"H2",{"data-svelte-h":!0}),c(O)!=="svelte-1bqjpfj"&&(O.textContent=ot),En=u(n),A=p(n,"P",{"data-svelte-h":!0}),c(A)!=="svelte-o9gl8t"&&(A.innerHTML=ct),jn=u(n),d=p(n,"DIV",{class:!0});var on=r(d);W=p(on,"DIV",{class:!0,"data-svelte-h":!0}),c(W)!=="svelte-1llzxwj"&&(W.textContent=lt),nn=p(on,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-m3q9cy"&&(nn.innerHTML=ut),un(R.$$.fragment,on),x=p(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-1ol2mob"&&(x.textContent=it),tn=p(on,"PRE",{class:!0});var Tt=r(tn);Mn=rn(Tt,!1),Tt.forEach(t),on.forEach(t),Vn=u(n),$=p(n,"H2",{"data-svelte-h":!0}),c($)!=="svelte-1f8i6m9"&&($.innerHTML=rt),In=u(n),G=p(n,"P",{"data-svelte-h":!0}),c(G)!=="svelte-19sea2i"&&(G.innerHTML=kt),On=u(n),B=p(n,"PRE",{class:!0});var Pt=r(B);An=rn(Pt,!1),Pt.forEach(t),Wn=u(n),J=p(n,"UL",{"data-svelte-h":!0}),c(J)!=="svelte-m7lqyy"&&(J.innerHTML=dt),Rn=u(n),T=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-rht2em"&&(T.innerHTML=gt),$n=u(n),g=p(n,"DIV",{class:!0});var hn=r(g);N=p(hn,"DIV",{class:!0,"data-svelte-h":!0}),c(N)!=="svelte-1llzxwj"&&(N.textContent=mt),un(D.$$.fragment,hn),w=p(hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-1juu0qd"&&(w.textContent=ft),sn=p(hn,"PRE",{class:!0});var St=r(sn);Gn=rn(St,!1),St.forEach(t),hn.forEach(t),Bn=u(n),U=p(n,"H2",{"data-svelte-h":!0}),c(U)!=="svelte-1mtstsi"&&(U.innerHTML=ht),Jn=u(n),q=p(n,"P",{"data-svelte-h":!0}),c(q)!=="svelte-afhn3i"&&(q.innerHTML=vt),Nn=u(n),m=p(n,"DIV",{class:!0});var vn=r(m);z=p(vn,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=xt),un(X.$$.fragment,vn),C=p(vn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-cz4scq"&&(C.textContent=wt),an=p(vn,"PRE",{class:!0});var Ht=r(an);Dn=rn(Ht,!1),Ht.forEach(t),vn.forEach(t),Un=u(n),K=p(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-1uz9czj"&&(K.textContent=Ct),qn=u(n),f=p(n,"DIV",{class:!0});var xn=r(f);F=p(xn,"DIV",{class:!0,"data-svelte-h":!0}),c(F)!=="svelte-k6awo"&&(F.textContent=yt),un(Q.$$.fragment,xn),y=p(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-1eubfgc"&&(y.textContent=bt),en=p(xn,"PRE",{class:!0});var Lt=r(en);zn=rn(Lt,!1),Lt.forEach(t),xn.forEach(t),this.h()},h(){o(L,"class","remark-container__title"),o(b,"class","remark-container tip"),o(_,"class","remark-container warning"),o(V,"class","remark-container__title"),o(v,"target","_blank"),o(v,"href","/editor#eNpdj0FrwzAMhf+KqlMCJmSDXnwZWw9rD4NBj80gJtGaUM82tkIbgv/70mSYbTe9J+l90oTKOZQTNrYllNhoFQK8jc/OAd2YTBtgrqfKVNx4UkxHVp7f1ZmyfHEr9sSDN5AadzdWJmIU6GYdUJ4m7FuUDwI/rW7JH1bxB5r2E/guVkaivw79f+7LwGxNwfNWVh/VCMF+EXe9OW/qvLBmp/vmkrkiOFKX/Oe4NXOxUt6iyK+DWb0nrS1wR54EdPYKyhOMdniqf4dEFHibn9mWAkeUj2UZP+I3q916ZQ=="),o(v,"title","Open in our Online Editor"),Hn.a=null,o(Y,"class","language-js"),o(k,"class","remark-container tip"),o(W,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNplkEFLxDAQhf9KnFMLMXQFLwUR9aB7EIQFPWwXGtqxLdsmIZnqltL/bjetpa6XJPMm732T9CCNgbiHTOcIMWS1dI69dg/GMDwRqtyx8dwnKqHMoiTckbT0JgsMQq8mZJFaq9jSOKtDogYYOJixdhDve6hyiDccPnWdo91OxR/o4l/A52JiLPTntrrkPrZEWgkaXUG6kx1zukEqK1VcpaHQ6qmusmNghDMoj+E83JTppSVvWjOtHLEvXWXo2B3zV9CKAunda0H4/7aVKteN74+WybtvxCRvFQURn1VRoyqovN6Eh3XML8XvHxWVPitIX7CuNaMSLXJW6m8mLbJOt/cpX0NXI81vG4DDafzj24hDB/FNFA2H4QcjPLK9"),o(x,"title","Open in our Online Editor"),Mn.a=null,o(tn,"class","language-js"),o(d,"class","remark-container tip"),An.a=null,o(B,"class","language-js"),o(T,"class","remark-container warning"),o(N,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqNUk1rAyEQ/SviaRcWSUJ7WUihzaH0UChJ6SUbiNXprmSjorP5YNn/XpNNbAINLYL43ryZN462lFtL85YKI4HmVNTce/K6f7SWwA5BS0/CuS10gcIBR5ghd/jGS0jSI1ugA2ycJjFwYLtCd7TLqA3Y03zeUiVpPszol6kluJceXJnG/Gh8AL1HdH9uVPTtd2G0R7IxSoAnY+It8BU4VgJ+HLkkvVSfep2arWeWS6l0mYxSJipVSwc6OWmxr8fW3EYqkGT8QOY/uMCJqZu19uyTi1XpTKNlYIxLlttKISxDYeM0uCmXqvHJXRo9h7949us93J6FWttDXxhAsmGaryHN/tbVXJdNGNokzPW2fhj1LkyUoZmhO/SU/ifFKhTVzZxr9GR2rAJVVhh6vIgszsczefFEXf/eHc3oLvyR+0FG9zQfDQbdovsGO774BA=="),o(w,"title","Open in our Online Editor"),Gn.a=null,o(sn,"class","language-js"),o(g,"class","remark-container tip"),o(z,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqNkl1LwzAUhv9KyFULJWxDbwoT3C5EUJBNvFkHjc2xDeuSkJzug9L/brputQOHEgh535xznpOPmnJjaFzTTAugMc1K7hx5PT4aQ+CAoIQjfl0nKsHMAkdYIrf4xnMIwpOboAWsrCL9Rus2iWpoE1HjtaPxqqZS0Hgc0S9dCrDPnbiC9vk9uBUdo6c/VbLndnOmlUOy0zIDR6bEGeAbsCwH/Dh5s+MLV3nlS809LUhBpeEw/9z9Qu8dM1wIqfJgErKskKWwoIJzLHYEtuWmt7xJpg9k9aMTnOuy2irHPnm2ya2ulPCOtkG6LyRC6gtrq8AuuJCVC+7Cnjn+hdmNd38fzNfat32hF8GOKb6FMPo7rhyc/Xb8uI+3/o4Z6iXatqfwPylGYlbczLlWM31gBci8QN/jYGd9WV7MwRM13Q9oaEQP/tfcjyJ6pPFkNGrWzTepsP7x"),o(C,"title","Open in our Online Editor"),Dn.a=null,o(an,"class","language-js"),o(m,"class","remark-container tip"),o(F,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqdU01r3DAQ/Suq6EEGI3YDvRhSaJZQckgJydIe6oAVW/GKeCUhjfcD4/9eSf6I3IYSctjVzGhG783Mc4eZ1jjrcKkqjjNcNsxadHv+pjXiJ+CyssjZXS5zKA1nwB+AGbhjNSdJiOZgOLRGovnCR/tc9rhPsXa+xdnvDosKZ+sUP6um4uZmcBagc/0M7J0Bw/3ARbfqgZ3RJSq2O2HRUTQNeuLIMlF9KnyOcfzc9drbWkC5m5xX+t9bMRMf/kslLaCDEiW3Lt9qzl64oTWHnyFGkjh7bPZeHS3VrKqErMlFQsudaCrDJRlzYTqvJXCzddypb4BoOveRUAvKcKJTVMzBIkn/fmGjmnYv7RsQ8Ppuce96y1BcPkD/aPdPrhsZDgfvRxQjez+q+ij8nZ/2e/DDWmICIfBfBlfqRGujjmQ9zjmiEPbwBrUchoXSPdOLsLtAl1/RVQug5Ej+c3egku15j4g3Gybr1klv49TZJ4Uny84koUpuGlG+uCaCRlJ0iLtdMI/sZNlOJKZ+UmZ4jgTCS2mGEB1VPewuvpgkPk41rpxUHM5fAnZBy7H80kHy//LpcYpP7vP8skrxGWcXq1X/2P8B87iFug=="),o(y,"title","Open in our Online Editor"),zn.a=null,o(en,"class","language-js"),o(f,"class","remark-container tip")},m(n,s){a(n,h,s),a(n,wn,s),a(n,P,s),a(n,Cn,s),a(n,S,s),a(n,yn,s),a(n,H,s),a(n,bn,s),a(n,b,s),i(b,L),kn(E,b,null),a(n,_n,s),a(n,j,s),a(n,Tn,s),a(n,M,s),a(n,Pn,s),a(n,_,s),a(n,Sn,s),a(n,k,s),i(k,V),i(k,Z),kn(I,k,null),i(k,v),i(k,Y),Hn.m(jt,Y),a(n,Ln,s),a(n,O,s),a(n,En,s),a(n,A,s),a(n,jn,s),a(n,d,s),i(d,W),i(d,nn),kn(R,d,null),i(d,x),i(d,tn),Mn.m(Mt,tn),a(n,Vn,s),a(n,$,s),a(n,In,s),a(n,G,s),a(n,On,s),a(n,B,s),An.m(Vt,B),a(n,Wn,s),a(n,J,s),a(n,Rn,s),a(n,T,s),a(n,$n,s),a(n,g,s),i(g,N),kn(D,g,null),i(g,w),i(g,sn),Gn.m(It,sn),a(n,Bn,s),a(n,U,s),a(n,Jn,s),a(n,q,s),a(n,Nn,s),a(n,m,s),i(m,z),kn(X,m,null),i(m,C),i(m,an),Dn.m(Ot,an),a(n,Un,s),a(n,K,s),a(n,qn,s),a(n,f,s),i(f,F),kn(Q,f,null),i(f,y),i(f,en),zn.m(At,en),Xn=!0},p:Rt,i(n){Xn||(dn(E.$$.fragment,n),dn(I.$$.fragment,n),dn(R.$$.fragment,n),dn(D.$$.fragment,n),dn(X.$$.fragment,n),dn(Q.$$.fragment,n),Xn=!0)},o(n){gn(E.$$.fragment,n),gn(I.$$.fragment,n),gn(R.$$.fragment,n),gn(D.$$.fragment,n),gn(X.$$.fragment,n),gn(Q.$$.fragment,n),Xn=!1},d(n){n&&(t(h),t(wn),t(P),t(Cn),t(S),t(yn),t(H),t(bn),t(b),t(_n),t(j),t(Tn),t(M),t(Pn),t(_),t(Sn),t(k),t(Ln),t(O),t(En),t(A),t(jn),t(d),t(Vn),t($),t(In),t(G),t(On),t(B),t(Wn),t(J),t(Rn),t(T),t($n),t(g),t(Bn),t(U),t(Jn),t(q),t(Nn),t(m),t(Un),t(K),t(qn),t(f)),mn(E),mn(I),mn(R),mn(D),mn(X),mn(Q)}}}class Ut extends $t{constructor(h){super(),Gt(this,h,null,Bt,Wt,{})}}export{Ut as component};
