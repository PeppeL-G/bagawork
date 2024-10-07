import{s as At,n as Ot}from"../chunks/scheduler.B0TnBjPs.js";import{S as It,i as Rt,e,s as l,c as cn,H as ln,a as p,g as c,b as u,d as r,f as un,h as t,n as rn,o,j as a,p as i,m as kn,t as dn,k as mn,l as gn}from"../chunks/index.CHfggXAQ.js";import{V as vn}from"../chunks/ViewApp.6tllL5xD.js";function $t(Ht){let f,Kn="<code>speaker</code>",wn,P,Jn="On this page you find the documentation for the <code>speaker</code> variable.",yn,S,Qn="Introduction",Cn,E,Yn="The <code>speaker</code> variable contains an object used for playing something on the device&#39;s speaker. It can be used to play sounds (not yet supported 😅) or to speak words to the user.",bn,b,V,Zn="Example",H,Tn,M,nt="speak() - Making the speaker speak words",_n,L,tt="Use the method <code>speak()</code> to instruct the speaker to speak some words to the user. Pass it the words as a string. The speaker&#39;s default voice will be used to speak the words.",Pn,T,st='<div class="remark-container__title">Might not always work!</div><p>The speaker will only work if the web browser the user is using supports it, and the volume on the user&#39;s device can&#39;t be set to <code>0</code> (then no one will hear it).</p>',Sn,k,z,at="Example",Y,et='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',j,h,pt="Open in Online Editor",Z,En,Mt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		speaker<span class="token punctuation">.</span><span class="token function">speak</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vn,W,ot="speakWithVoice() - Making the speaker speak words with a specific voice",Hn,D,ct="Use the method <code>speakWithVoice()</code> to instruct the speaker to speak some words to the user with a specific voice. Pass it the words as a string, and the voice as an object retrieved from <code>getVoices()</code>.",Mn,d,A,lt="Example",nn,ut='Example showing how to make the speaker speak some words when a <a href="/documentation/button/" title="Open the documentation for Button.">Button</a> is clicked.',O,x,it="Open in Online Editor",tn,Ln,Lt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Say something!</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> voices <span class="token operator">=</span> speaker<span class="token punctuation">.</span><span class="token function">getVoices</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">const</span> randomVoice <span class="token operator">=</span> voices<span class="token punctuation">[</span>m<span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> voices<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Hello there, how are you?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span> randomVoice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,zn,I,rt="<code>getVoices()</code> - Obtaining all supported voices",jn,R,kt="Use the method <code>getVoices()</code> to obtain an array of voices that can be used to speak the words passed to <code>speakWithVoices()</code>. This method returns an array with voice objects looking like this:",Wn,$,Dn,zt=`<code class="language-js"><span class="token keyword">const</span> voiceObject <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
	<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">A unique value identifying this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The name of this voice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">languageCode</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The code of the language this voice is specialized in, e.g. en-US</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token literal-property property">rate</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,An,B,dt="<li><code>rate</code> can be decreased/increased to make the voice speak slower/faster</li> <li><code>pitch</code> can be decreased/increased to lower/raise the pitch of the voice</li>",On,_,mt='<div class="remark-container__title">Different devices = different voices!</div><p>Different devices support different voices, so the voices that are supported on your device are not necesarilly supported on devices your users have. Which voices that are available are primarily determined by:</p><ul><li>Which operating system (Windows, Max, Linux, etc.) the device is using</li> <li>Which web browser (Firefox, Chrome, Safari, Edge, etc. ) that is used to run the BagaWork app</li></ul>',In,m,N,gt="Example",U,w,vt="Open in Online Editor",sn,Rn,jt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,$n,q,ft="<code>getVoicesByLanguageCode()</code> - Obtaining supported voices in a language",Bn,F,ht="Use the method <code>getVoicesByLanguageCode()</code> to obtain an array of voices that are for a specific language. Pass it the language code as a string, such as <code>`sv`</code> for Swedish, or <code>`en`</code> for English.",Nn,g,X,xt="Example",G,y,wt="Open in Online Editor",an,Un,Wt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,qn,K,yt="Playground",Fn,v,J,Ct="Playground",Q,C,bt="Open in Online Editor",en,Xn,Dt=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
			
			voices<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
				<span class="token parameter">v</span> <span class="token operator">=></span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>v<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>v<span class="token punctuation">.</span>languageCode<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">)</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>speak<span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			
		<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">speak</span><span class="token punctuation">(</span><span class="token parameter">voice</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		voice<span class="token punctuation">.</span>rate <span class="token operator">=</span> p<span class="token punctuation">.</span>rate
		voice<span class="token punctuation">.</span>pitch <span class="token operator">=</span> p<span class="token punctuation">.</span>pitch
		
		speaker<span class="token punctuation">.</span><span class="token function">speakWithVoice</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>textToSay<span class="token punctuation">,</span> voice<span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Gn;return H=new vn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),j=new vn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),O=new vn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),U=new vn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),G=new vn({props:{project:{app:{code:`class MyApp extends App{
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
	
}`,x:150,y:200}]}}}),Q=new vn({props:{project:{app:{code:`class MyApp extends App{
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
			
			voices.map(
				v => Button.text(\`\${v.name} (\${v.languageCode})\`).stay().onClick(p.speak, v),
			),
			
		)
		
	}
	
	speak(voice){
		
		voice.rate = p.rate
		voice.pitch = p.pitch
		
		speaker.speakWithVoice(p.textToSay, voice)
		
	}
	
}`,x:150,y:200}]}}}),{c(){f=e("h1"),f.innerHTML=Kn,wn=l(),P=e("p"),P.innerHTML=Jn,yn=l(),S=e("h2"),S.textContent=Qn,Cn=l(),E=e("p"),E.innerHTML=Yn,bn=l(),b=e("div"),V=e("div"),V.textContent=Zn,cn(H.$$.fragment),Tn=l(),M=e("h2"),M.textContent=nt,_n=l(),L=e("p"),L.innerHTML=tt,Pn=l(),T=e("div"),T.innerHTML=st,Sn=l(),k=e("div"),z=e("div"),z.textContent=at,Y=e("p"),Y.innerHTML=et,cn(j.$$.fragment),h=e("a"),h.textContent=pt,Z=e("pre"),En=new ln(!1),Vn=l(),W=e("h2"),W.textContent=ot,Hn=l(),D=e("p"),D.innerHTML=ct,Mn=l(),d=e("div"),A=e("div"),A.textContent=lt,nn=e("p"),nn.innerHTML=ut,cn(O.$$.fragment),x=e("a"),x.textContent=it,tn=e("pre"),Ln=new ln(!1),zn=l(),I=e("h2"),I.innerHTML=rt,jn=l(),R=e("p"),R.innerHTML=kt,Wn=l(),$=e("pre"),Dn=new ln(!1),An=l(),B=e("ul"),B.innerHTML=dt,On=l(),_=e("div"),_.innerHTML=mt,In=l(),m=e("div"),N=e("div"),N.textContent=gt,cn(U.$$.fragment),w=e("a"),w.textContent=vt,sn=e("pre"),Rn=new ln(!1),$n=l(),q=e("h2"),q.innerHTML=ft,Bn=l(),F=e("p"),F.innerHTML=ht,Nn=l(),g=e("div"),X=e("div"),X.textContent=xt,cn(G.$$.fragment),y=e("a"),y.textContent=wt,an=e("pre"),Un=new ln(!1),qn=l(),K=e("h2"),K.textContent=yt,Fn=l(),v=e("div"),J=e("div"),J.textContent=Ct,cn(Q.$$.fragment),C=e("a"),C.textContent=bt,en=e("pre"),Xn=new ln(!1),this.h()},l(n){f=p(n,"H1",{"data-svelte-h":!0}),c(f)!=="svelte-1kwrv8k"&&(f.innerHTML=Kn),wn=u(n),P=p(n,"P",{"data-svelte-h":!0}),c(P)!=="svelte-5op67"&&(P.innerHTML=Jn),yn=u(n),S=p(n,"H2",{"data-svelte-h":!0}),c(S)!=="svelte-1ukekoe"&&(S.textContent=Qn),Cn=u(n),E=p(n,"P",{"data-svelte-h":!0}),c(E)!=="svelte-4z9759"&&(E.innerHTML=Yn),bn=u(n),b=p(n,"DIV",{class:!0});var s=r(b);V=p(s,"DIV",{class:!0,"data-svelte-h":!0}),c(V)!=="svelte-1llzxwj"&&(V.textContent=Zn),un(H.$$.fragment,s),s.forEach(t),Tn=u(n),M=p(n,"H2",{"data-svelte-h":!0}),c(M)!=="svelte-17c5dxw"&&(M.textContent=nt),_n=u(n),L=p(n,"P",{"data-svelte-h":!0}),c(L)!=="svelte-14d3us7"&&(L.innerHTML=tt),Pn=u(n),T=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-69vmiq"&&(T.innerHTML=st),Sn=u(n),k=p(n,"DIV",{class:!0});var pn=r(k);z=p(pn,"DIV",{class:!0,"data-svelte-h":!0}),c(z)!=="svelte-1llzxwj"&&(z.textContent=at),Y=p(pn,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-m3q9cy"&&(Y.innerHTML=et),un(j.$$.fragment,pn),h=p(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(h)!=="svelte-sfbzom"&&(h.textContent=pt),Z=p(pn,"PRE",{class:!0});var Tt=r(Z);En=rn(Tt,!1),Tt.forEach(t),pn.forEach(t),Vn=u(n),W=p(n,"H2",{"data-svelte-h":!0}),c(W)!=="svelte-1bqjpfj"&&(W.textContent=ot),Hn=u(n),D=p(n,"P",{"data-svelte-h":!0}),c(D)!=="svelte-o9gl8t"&&(D.innerHTML=ct),Mn=u(n),d=p(n,"DIV",{class:!0});var on=r(d);A=p(on,"DIV",{class:!0,"data-svelte-h":!0}),c(A)!=="svelte-1llzxwj"&&(A.textContent=lt),nn=p(on,"P",{"data-svelte-h":!0}),c(nn)!=="svelte-m3q9cy"&&(nn.innerHTML=ut),un(O.$$.fragment,on),x=p(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-1ol2mob"&&(x.textContent=it),tn=p(on,"PRE",{class:!0});var _t=r(tn);Ln=rn(_t,!1),_t.forEach(t),on.forEach(t),zn=u(n),I=p(n,"H2",{"data-svelte-h":!0}),c(I)!=="svelte-1f8i6m9"&&(I.innerHTML=rt),jn=u(n),R=p(n,"P",{"data-svelte-h":!0}),c(R)!=="svelte-19sea2i"&&(R.innerHTML=kt),Wn=u(n),$=p(n,"PRE",{class:!0});var Pt=r($);Dn=rn(Pt,!1),Pt.forEach(t),An=u(n),B=p(n,"UL",{"data-svelte-h":!0}),c(B)!=="svelte-kr6nsw"&&(B.innerHTML=dt),On=u(n),_=p(n,"DIV",{class:!0,"data-svelte-h":!0}),c(_)!=="svelte-my1ndt"&&(_.innerHTML=mt),In=u(n),m=p(n,"DIV",{class:!0});var fn=r(m);N=p(fn,"DIV",{class:!0,"data-svelte-h":!0}),c(N)!=="svelte-1llzxwj"&&(N.textContent=gt),un(U.$$.fragment,fn),w=p(fn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(w)!=="svelte-svw601"&&(w.textContent=vt),sn=p(fn,"PRE",{class:!0});var St=r(sn);Rn=rn(St,!1),St.forEach(t),fn.forEach(t),$n=u(n),q=p(n,"H2",{"data-svelte-h":!0}),c(q)!=="svelte-1mtstsi"&&(q.innerHTML=ft),Bn=u(n),F=p(n,"P",{"data-svelte-h":!0}),c(F)!=="svelte-1nfqsjk"&&(F.innerHTML=ht),Nn=u(n),g=p(n,"DIV",{class:!0});var hn=r(g);X=p(hn,"DIV",{class:!0,"data-svelte-h":!0}),c(X)!=="svelte-1llzxwj"&&(X.textContent=xt),un(G.$$.fragment,hn),y=p(hn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(y)!=="svelte-u2mu6f"&&(y.textContent=wt),an=p(hn,"PRE",{class:!0});var Et=r(an);Un=rn(Et,!1),Et.forEach(t),hn.forEach(t),qn=u(n),K=p(n,"H2",{"data-svelte-h":!0}),c(K)!=="svelte-1uz9czj"&&(K.textContent=yt),Fn=u(n),v=p(n,"DIV",{class:!0});var xn=r(v);J=p(xn,"DIV",{class:!0,"data-svelte-h":!0}),c(J)!=="svelte-k6awo"&&(J.textContent=Ct),un(Q.$$.fragment,xn),C=p(xn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(C)!=="svelte-uedjfm"&&(C.textContent=bt),en=p(xn,"PRE",{class:!0});var Vt=r(en);Xn=rn(Vt,!1),Vt.forEach(t),xn.forEach(t),this.h()},h(){o(V,"class","remark-container__title"),o(b,"class","remark-container tip"),o(T,"class","remark-container warning"),o(z,"class","remark-container__title"),o(h,"target","_blank"),o(h,"href","/editor#eNpdj0FrwzAMhf+KqlMCJmSDXnwZWw9rD4NBj80gJtGaUM82tkIbgv/70mSYbTe9J+l90oTKOZQTNrYllNhoFQK8jc/OAd2YTBtgrqfKVNx4UkxHVp7f1ZmyfHEr9sSDN5AadzdWJmIU6GYdUJ4m7FuUDwI/rW7JH1bxB5r2E/guVkaivw79f+7LwGxNwfNWVh/VCMF+EXe9OW/qvLBmp/vmkrkiOFKX/Oe4NXOxUt6iyK+DWb0nrS1wR54EdPYKyhOMdniqf4dEFHibn9mWAkeUj2UZP+I3q916ZQ=="),o(h,"title","Open in our Online Editor"),En.a=null,o(Z,"class","language-js"),o(k,"class","remark-container tip"),o(A,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNplkEFLxDAQhf9KnFMLMXQFLwUR9aB7EIQFPWwXGtqxLdsmIZnqltL/bjetpa6XJPMm732T9CCNgbiHTOcIMWS1dI69dg/GMDwRqtyx8dwnKqHMoiTckbT0JgsMQq8mZJFaq9jSOKtDogYYOJixdhDve6hyiDccPnWdo91OxR/o4l/A52JiLPTntrrkPrZEWgkaXUG6kx1zukEqK1VcpaHQ6qmusmNghDMoj+E83JTppSVvWjOtHLEvXWXo2B3zV9CKAunda0H4/7aVKteN74+WybtvxCRvFQURn1VRoyqovN6Eh3XML8XvHxWVPitIX7CuNaMSLXJW6m8mLbJOt/cpX0NXI81vG4DDafzj24hDB/FNFA2H4QcjPLK9"),o(x,"title","Open in our Online Editor"),Ln.a=null,o(tn,"class","language-js"),o(d,"class","remark-container tip"),Dn.a=null,o($,"class","language-js"),o(_,"class","remark-container warning"),o(N,"class","remark-container__title"),o(w,"target","_blank"),o(w,"href","/editor#eNqNUk1rAyEQ/SviaRcWSUJ7WUihzaH0UChJ6SUbiNXprmSjorP56LL/vSab2gQaWgTxvXkzbxxtKbeW5i0VRgLNqai59+R5f28tgR2Clp6Ec1voAoUDjjBD7vCFl5CkR7ZAB9g4TWLgwHaF7miXURuwp/m8pUrSfJjRD1NLcE89uDCN+dH4AHqP6P7YqOjb78Joj2RjlABPxsRb4CtwrAR8O3JJeq4+9To1W88sl1LpMhmlTFSqlg50ctJiX4+tuY1UIMn4jsx/cIETUzdr7dk7F6vSmUbLwBiXLLeVQliGwsZpcFMuVeOTmzR6Dn/x7NdruD3z6hMOfWEAyYZpvoY0+1tXc102YWiTMNfr+mHUuzBRhmaG7tBT+p8Uq1BUV3Mu0YPZsQpUWWHo8Syy+D5+k2dP1PXv3dGM7sIfuR1kdE/z0WDQLbovLy739A=="),o(w,"title","Open in our Online Editor"),Rn.a=null,o(sn,"class","language-js"),o(m,"class","remark-container tip"),o(X,"class","remark-container__title"),o(y,"target","_blank"),o(y,"href","/editor#eNqNkl1LwzAUhv9KyFULJWxDbwoT3C5EUJBNvFkHjc2xDeuSkJzuw9L/brputQNFCYS8b845z8lHTbkxNK5ppgXQmGYld448H++NIXBAUMIRv64TlWBmgSMskVt84TkE4clN0AJWVpF+o3WbRDW0iajx2tF4VVMpaDyO6IcuBdjHTlxB+/we3IqO0dMfKtlzuznTyiHZaZmBI1PiDPANWJYDvp282fGJq7zypeaeFqSg0nCYf+5+ofeOGS6EVHkwCVlWyFJYUME5FjsC23LTW94k0zuy+tYJznVZbZVj7zzb5FZXSnhH2yDdFxIh9YW1VWAXXMjKBTdhzxz/wOzGq78P5uQntH2hF8GOKb6FMPo7rhyc/ff4cR9v/R0z1Eu0bU/hf1KMxKz4NedazfSBFSDzAn2Pg531ZXkxB0/UdD+goRE9+F9zO4rokcaT0ahZN1+dIP7h"),o(y,"title","Open in our Online Editor"),Un.a=null,o(an,"class","language-js"),o(g,"class","remark-container tip"),o(J,"class","remark-container__title"),o(C,"target","_blank"),o(C,"href","/editor#eNqdU01r3DAQ/Suq6EEGIzaBXgwptEspPbSEZGkP3YIVe7Ir4pWENN5kMfrvleSPKElbSg62NKMZvTczTwMVxtBqoI1ugVa06YRz5OvpgzEEHhBU60jYD1u1xcaCQLhGYfFS7IAVybtFC9hbRZaD6PVb5akvqQm2o9XPgcqWVmclvdVdC/bLaDwBXfIX4GiMGOHD4N3oa3EiF6Te7KUj97LryA0QJ2T7po4xNvALx2dxbyQ2+9l4pP+5lwvx8d9o5ZActWzAhXhnQNyB5TvA78nHijx6KvZK3ztuRNtKtWPnBW/2smstKDbF4rx+Ugh2E7jzWAAzfKmj4A61BWZKUi/Ouiif37DWXX9Q7g8Q+HhvfRVqq0iePkJ/6w83oRqVlgAfW5QjRzvLei38Zez2/+CnseQEkuOfDMbR8IMwGfaRXLwnH3tErSYKb4cjV+IAnrC47YTa9UFA66AxX9QRUpxYwbVad7K5C1TSpEty/Dt2Nnk/yyhlscTpqY6Si08SHBudH8x6nFqQZ86SS+sPifskvFwr5ajPl3w8LelDeEvvViU90ep8tfK//G+20GaY"),o(C,"title","Open in our Online Editor"),Xn.a=null,o(en,"class","language-js"),o(v,"class","remark-container tip")},m(n,s){a(n,f,s),a(n,wn,s),a(n,P,s),a(n,yn,s),a(n,S,s),a(n,Cn,s),a(n,E,s),a(n,bn,s),a(n,b,s),i(b,V),kn(H,b,null),a(n,Tn,s),a(n,M,s),a(n,_n,s),a(n,L,s),a(n,Pn,s),a(n,T,s),a(n,Sn,s),a(n,k,s),i(k,z),i(k,Y),kn(j,k,null),i(k,h),i(k,Z),En.m(Mt,Z),a(n,Vn,s),a(n,W,s),a(n,Hn,s),a(n,D,s),a(n,Mn,s),a(n,d,s),i(d,A),i(d,nn),kn(O,d,null),i(d,x),i(d,tn),Ln.m(Lt,tn),a(n,zn,s),a(n,I,s),a(n,jn,s),a(n,R,s),a(n,Wn,s),a(n,$,s),Dn.m(zt,$),a(n,An,s),a(n,B,s),a(n,On,s),a(n,_,s),a(n,In,s),a(n,m,s),i(m,N),kn(U,m,null),i(m,w),i(m,sn),Rn.m(jt,sn),a(n,$n,s),a(n,q,s),a(n,Bn,s),a(n,F,s),a(n,Nn,s),a(n,g,s),i(g,X),kn(G,g,null),i(g,y),i(g,an),Un.m(Wt,an),a(n,qn,s),a(n,K,s),a(n,Fn,s),a(n,v,s),i(v,J),kn(Q,v,null),i(v,C),i(v,en),Xn.m(Dt,en),Gn=!0},p:Ot,i(n){Gn||(dn(H.$$.fragment,n),dn(j.$$.fragment,n),dn(O.$$.fragment,n),dn(U.$$.fragment,n),dn(G.$$.fragment,n),dn(Q.$$.fragment,n),Gn=!0)},o(n){mn(H.$$.fragment,n),mn(j.$$.fragment,n),mn(O.$$.fragment,n),mn(U.$$.fragment,n),mn(G.$$.fragment,n),mn(Q.$$.fragment,n),Gn=!1},d(n){n&&(t(f),t(wn),t(P),t(yn),t(S),t(Cn),t(E),t(bn),t(b),t(Tn),t(M),t(_n),t(L),t(Pn),t(T),t(Sn),t(k),t(Vn),t(W),t(Hn),t(D),t(Mn),t(d),t(zn),t(I),t(jn),t(R),t(Wn),t($),t(An),t(B),t(On),t(_),t(In),t(m),t($n),t(q),t(Bn),t(F),t(Nn),t(g),t(qn),t(K),t(Fn),t(v)),gn(H),gn(j),gn(O),gn(U),gn(G),gn(Q)}}}class qt extends It{constructor(f){super(),Rt(this,f,null,$t,At,{})}}export{qt as component};
