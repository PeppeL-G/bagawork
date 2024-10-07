import{s as q,n as Z}from"../chunks/scheduler.B0TnBjPs.js";import{S as H,i as U,e,s as z,c as J,H as h,a as c,g as R,b as M,d as f,f as Q,n as C,h as a,o as u,j as w,m as $,p as x,t as K,k as nn,l as sn}from"../chunks/index.CHfggXAQ.js";import{V as tn}from"../chunks/ViewApp.6tllL5xD.js";function an(F){let p,A="Contacts",y,l,V="This example shows how to create an app that keep tracks of information about your friends.",B,t,i,o,v="Open in Online Editor",k,b,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactsApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	contacts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">&#123;</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Alice</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Aliceson</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">alice@aliceson.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">phoneNumber</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">123123123</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span>
		<span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bob</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Bobson</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">bob@bobson.com</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token literal-property property">phoneNumber</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">111222333</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
	<span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">]</span>
	
	<span class="token function">deleteContactById</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>
			a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> id<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token number">1</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">getNextContactId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">addContact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>
			<span class="token literal-property property">id</span><span class="token operator">:</span> a<span class="token punctuation">.</span><span class="token function">getNextContactId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			<span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
			<span class="token literal-property property">phoneNumber</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
		<span class="token punctuation">&#125;</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> StartPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,r,N,D=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> nextContactId <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getNextContactId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
					<span class="token parameter">c</span> <span class="token operator">=></span> Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>c<span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>c<span class="token punctuation">.</span>lastName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token punctuation">)</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>addContact<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EditContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>nextContactId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,P,G=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ViewContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> contact <span class="token operator">=</span> a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">First name:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Last name:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Email:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Phone number:</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Back</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Delete</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>DeleteContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Edit</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EditContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,d,S,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EditContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> contact <span class="token operator">=</span> a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">First name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'firstName'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Last name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'lastName'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Email</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">phoneNumber</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'phoneNumber'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Save</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,T,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DeleteContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> contact <span class="token operator">=</span> a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Are you sure you want to delete the contact </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>contact<span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>contact<span class="token punctuation">.</span>lastName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">onClick</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>deleteContact<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">deleteContact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token function">deleteContactById</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,E;return i=new tn({props:{project:{app:{code:`class ContactsApp extends App{
	
	contacts = [{
		id: 1,
		firstName: \`Alice\`,
		lastName: \`Aliceson\`,
		email: \`alice@aliceson.com\`,
		phoneNumber: \`123123123\`,
	}, {
		id: 2,
		firstName: \`Bob\`,
		lastName: \`Bobson\`,
		email: \`bob@bobson.com\`,
		phoneNumber: \`111222333\`,
	}, ]
	
	deleteContactById(id){
		a.contacts.splice(
			a.contacts.findIndex(c => c.id == id),
			1,
		)
	}
	
	getNextContactId(){
		return (a.contacts.at(-1) ?? 0) + 1
	}
	
	addContact(){
		a.contacts.push({
			id: a.getNextContactId(),
			firstName: \`\`,
			lastName: \`\`,
			email: \`\`,
			phoneNumber: \`\`,
		})
	}
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:169,offsetY:25}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		
		const nextContactId = a.getNextContactId()
		
		return Rows.padding(5).children(
			Rows.size(1).children(
				a.contacts.map(
					c => Button.text(\`\${c.firstName} \${c.lastName}\`).page(ViewContactPage.id(c.id)),
				)
			),
			Columns.children(
				Space,
				Button.text(\`+\`).onClick(a.addContact).page(EditContactPage.id(nextContactId)),
			),
		)
	}
	
}`,x:106,y:428},{id:3,folderId:1,code:`class ViewContactPage extends Page{
	
	id = 1
	
	createGui(){
		
		const contact = a.contacts.find(c => c.id == p.id)
		
		return Rows.padding(5).children(
			Columns.children(
				Text.text(\`First name:\`),
				Box.width(1),
				Text.text(contact.firstName),
			),
			Columns.children(
				Text.text(\`Last name:\`),
				Box.width(1),
				Text.text(contact.lastName),
			),
			Columns.children(
				Text.text(\`Email:\`),
				Box.width(1),
				Text.text(contact.email),
			),
			Columns.children(
				Text.text(\`Phone number:\`),
				Box.width(1),
				Text.text(contact.phoneNumber),
			),
			Space,
			Columns.children(
				Button.text(\`Back\`).page(StartPage),
				Space,
				Button.text(\`Delete\`).page(DeleteContactPage.id(p.id)),
				Space,
				Button.text(\`Edit\`).page(EditContactPage.id(p.id)),
			),
		)
	}
	
}`,x:534,y:467},{id:4,folderId:1,code:`class EditContactPage extends Page{
	
	id = 1
	
	createGui(){
		
		const contact = a.contacts.find(c => c.id == p.id)
		
		return Rows.padding(5).children(
			Columns.children(
				Text.text(\`First name\`),
				Box.width(1),
				EnterText.size(1).text(contact.firstName).store(contact, 'firstName'),
			),
			Columns.children(
				Text.text(\`Last name\`),
				Box.width(1),
				EnterText.size(1).text(contact.lastName).store(contact, 'lastName'),
			),
			Columns.children(
				Text.text(\`Email\`),
				Box.width(1),
				EnterText.size(1).text(contact.email).store(contact, 'email'),
			),
			Columns.children(
				Text.text(\`phoneNumber\`),
				Box.width(1),
				EnterText.size(1).text(contact.phoneNumber).store(contact, 'phoneNumber'),
			),
			Space,
			Button.text(\`Save\`).page(ViewContactPage.id(p.id)),
		)
	}
	
}`,x:790,y:192},{id:5,folderId:1,code:`class DeleteContactPage extends Page{
	
	id = 1
	
	createGui(){
		
		const contact = a.contacts.find(c => c.id == p.id)
		
		return Rows.padding(5).children(
			Text.text(\`Are you sure you want to delete the contact \${contact.firstName} \${contact.lastName}?\`),
			Space,
			Columns.children(
				Button.text(\`No\`).page(ViewContactPage.id(p.id)),
				Space,
				Button.text(\`Yes\`).page(StartPage).onClick(p.deleteContact),
			),
		)
	}
	
	deleteContact(){
		a.deleteContactById(p.id)
	}
	
}`,x:797,y:687}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	onBefore(){
		
	}
	
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
	
	onAfter(){
		
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	onBefore(){
		
	}
	
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
	
	onAfter(){
		
	}
	
}`}]}}}),{c(){p=e("h1"),p.textContent=A,y=z(),l=e("p"),l.textContent=V,B=z(),t=e("div"),J(i.$$.fragment),o=e("a"),o.textContent=v,k=e("pre"),b=new h(!1),r=e("pre"),N=new h(!1),m=e("pre"),P=new h(!1),d=e("pre"),S=new h(!1),g=e("pre"),T=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),R(p)!=="svelte-e6lo79"&&(p.textContent=A),y=M(n),l=c(n,"P",{"data-svelte-h":!0}),R(l)!=="svelte-lx8f1j"&&(l.textContent=V),B=M(n),t=c(n,"DIV",{});var s=f(t);Q(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),R(o)!=="svelte-1acrbn9"&&(o.textContent=v),k=c(s,"PRE",{class:!0});var _=f(k);b=C(_,!1),_.forEach(a),r=c(s,"PRE",{class:!0});var I=f(r);N=C(I,!1),I.forEach(a),m=c(s,"PRE",{class:!0});var O=f(m);P=C(O,!1),O.forEach(a),d=c(s,"PRE",{class:!0});var Y=f(d);S=C(Y,!1),Y.forEach(a),g=c(s,"PRE",{class:!0});var j=f(g);T=C(j,!1),j.forEach(a),s.forEach(a),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrdV49r2zgY/VeEOYjDPFM7TX8Yui7peqNwlLGOu42tEMVSGlNHMpZ8bS/4fz/JthzJdtwsLew4aIr9fZb0/L33PllrCyaJFaytkCJsBVYYQ8bABSUchpxNkgTgR44JYkBcr3+QH1z+wioPzsD3MsgjFADPKa8XUcr4NVzhAMwmcRTiWZUQkxtxRolK4RWMYhGHMv4eVlk3pCv1RLKkBF9nqzlOxXOePyr/ynTuAA2I3wFkSucdMES0A8Sczt/Pi0wPAM/zfX802gC4VeVBOMYcV0WcPl0hO0LDCh50VfFclsi3tMu4kVlEBF0RhB/tEJy9A6EbIXB2BsQsjnpa1XpYLK5WvsP8WhBWLS0WVsummGcpAba2COT2W28Izs/BwRC8AZ4xEUSomsTuQJ5kbGmvFRRZcei2l66x6jTM6qjGwiaoGNhEzKqreG6+d5hiyPENhyn/BO9w87XrhDYot3LHWtAY4ZRZwfe1FSEr8ByLCEjCCMUQy7HoYsEw/ypSR6fq7psV+OP81rESMaUxuJzvqrwxLFVDqA0lb9bmC3zMohp6+V+UnHFA9MIK03VVWx9VvfZn+iC4ElRG5M4eD91wGcUoxaSWXPEAi/7BtteRNShfwURLCGBSmNOMc+ERLpDYs9/WoVsznQN5qyjOZ0NX1sr+M8IPFWb5+kLXthT3cKOVStHFRR28oHG2IqwL4k0CQ6yNNiC9EetSciFsdi+Uv9F0heYSRbyBxqi0BmvYYbdcyONRMH1w5FhPVnDon+ROqYRRnxIaNejWgzR8acnn1VFxVOjCaCFm90hkofdRSU/1vwjwVa1/l9QD6Z5gptM5pY/uQ4T4UmjM6RpZQd5op131XTH8AV8GQel1fwSXRf/ab/Wi9+2/9CfZKAEpO+V+CLRe24XD9FoPKsOEUxjeK//XXVDH0WvhD8VeqsZ/0HdW5dmk2UF6J5Smn21vAI3Jenw/Hh2Wvj86Vr4/7PN9Y7H/n+930dwl4TgtRqttZ0sPcBmnKVYJBwzq1OAV+sMrQK17RQupygxe2EZeAWTZUloIi/AL4Gl94hVA6l2nBVVLDp7vSYbTb+DfuOfDw3B6h7+PTw8Kf3unvvL3uM/frd7033e4RukkxeCJZoBl1cUDJBxwCsrDDOBLXMMRn3ZNv+ZasP7qO5+9dO+4prsS+Gzf/4ZZexeqvw4T1zi09W8AjROedkJqn/xqbpriOi7EdXRyrA4SX/AqiYUYjAOFobAJu79aTFAW98iLkileSAvpesq3y02XSosNs6AdainMILQBCfBO9qK7l7MN/SSL432o7h/XTS4lk4VoWF0VlIfGkhu/ubvLHje5w7+amb+WkA+YJCcFYvXtnBgV8w66C2Y+NN7hIX+XmfwtM+kIf4aT2/xf3sHPzQ=="),u(o,"title","Open in our Online Editor"),b.a=null,u(k,"class","language-js"),N.a=null,u(r,"class","language-js"),P.a=null,u(m,"class","language-js"),S.a=null,u(d,"class","language-js"),T.a=null,u(g,"class","language-js")},m(n,s){w(n,p,s),w(n,y,s),w(n,l,s),w(n,B,s),w(n,t,s),$(i,t,null),x(t,o),x(t,k),b.m(L,k),x(t,r),N.m(D,r),x(t,m),P.m(G,m),x(t,d),S.m(W,d),x(t,g),T.m(X,g),E=!0},p:Z,i(n){E||(K(i.$$.fragment,n),E=!0)},o(n){nn(i.$$.fragment,n),E=!1},d(n){n&&(a(p),a(y),a(l),a(B),a(t)),sn(i)}}}class cn extends H{constructor(p){super(),U(this,p,null,an,q,{})}}export{cn as component};
