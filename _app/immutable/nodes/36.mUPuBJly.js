import{s as q,n as Y}from"../chunks/scheduler.DFPFbGJz.js";import{S as Z,i as H,e,s as j,c as K,H as h,a as c,g as v,b as O,d as f,f as X,n as y,h as a,o as u,j as w,m as J,p as x,t as $,k as nn,l as sn}from"../chunks/index.CzDE4dZi.js";import{V as tn}from"../chunks/ViewApp.C2MU7-ZI.js";function an(D){let p,I="Contacts",C,l,A="This example shows how to create an app that keep tracks of information about your friends.",b,t,i,o,_="Open in Online Editor",k,B,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactsApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,N,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">+</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>addContact<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>EditContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>nextContactId<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,m,P,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ViewContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,d,T,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EditContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,g,E,U=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DeleteContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> contact <span class="token operator">=</span> a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Are you sure you want to delete the contact </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>contact<span class="token punctuation">.</span>firstName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>contact<span class="token punctuation">.</span>lastName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">?</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">No</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Space<span class="token punctuation">,</span>
				Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yes</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>StartPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>deleteContact<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">deleteContact</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		a<span class="token punctuation">.</span><span class="token function">deleteContactById</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,S;return i=new tn({props:{project:{app:{code:`class ContactsApp extends App{
	
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
	
}`},folders:[{id:1,name:"Start",offsetX:-136,offsetY:-34}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
				Button.text(\`+\`).handler(a.addContact).page(EditContactPage.id(nextContactId)),
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
				Button.text(\`Yes\`).page(StartPage).handler(p.deleteContact),
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
	
}`}]}}}),{c(){p=e("h1"),p.textContent=I,C=j(),l=e("p"),l.textContent=A,b=j(),t=e("div"),K(i.$$.fragment),o=e("a"),o.textContent=_,k=e("pre"),B=new h(!1),r=e("pre"),N=new h(!1),m=e("pre"),P=new h(!1),d=e("pre"),T=new h(!1),g=e("pre"),E=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),v(p)!=="svelte-e6lo79"&&(p.textContent=I),C=O(n),l=c(n,"P",{"data-svelte-h":!0}),v(l)!=="svelte-lx8f1j"&&(l.textContent=A),b=O(n),t=c(n,"DIV",{});var s=f(t);X(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(o)!=="svelte-85iw4m"&&(o.textContent=_),k=c(s,"PRE",{class:!0});var V=f(k);B=y(V,!1),V.forEach(a),r=c(s,"PRE",{class:!0});var R=f(r);N=y(R,!1),R.forEach(a),m=c(s,"PRE",{class:!0});var G=f(m);P=y(G,!1),G.forEach(a),d=c(s,"PRE",{class:!0});var z=f(d);T=y(z,!1),z.forEach(a),g=c(s,"PRE",{class:!0});var M=f(g);E=y(M,!1),M.forEach(a),s.forEach(a),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrdV4tumzAU/RULTQrRGCqkryF1XbJ1U6WpmtZpD22V4mCnQSM2wmZtF/HvswETGwjN0kqbJjUV3Ivtwz3nXOOVBZPEClZWSBG2AiuMIWPgFSUchpyNkwTgW44JYkBcr76T71z+wioPTsC3MsgjFADPKa/nUcr4BVziAEzHcRTiaZUQkxtxRolK4SWMYhGHMv4SVlk3pEv1RLKgBF9kyxlOxXOePyr/ynTuAA2I3wFkQmcdMES0A8SMzl7OikwPAM/zfX80WgO4UuVBOMYcV0Wc3J0jO0LDCh50VfFclsi3tMu4kZlHBJ0ThG/tEJy8AKEbIXByAsQsjnpa1XpYLK5Wvsb8QhBWLS0WVsummGcpAba2COT2M28ITk/B3hA8BZ4xEUSomsTuQJ5kbGGvFBRZcei2l66x6jRM66jGwjqoGFhHzKqreG6+d5hiyPElhyl/D69x87XrhDYot3LHmtMY4ZRZwbeVFSEr8ByLCEjCCMUQy7HofM4w/2IFz7zRobr9Km5H+/mVYyViUmN4OeN5eWOYqgZRW0rerMxXeJtFNfjyvyg644DopRW266q3Pqp68Q/0RrAlyIzItX0wdMNFFKMUk1p0xQMs+oVtryNrkL6EiZYQwKQ0JxnnwiVcILGnT1ahW3OdA3mrSM6nQ1fWyv4U4ZsKs3x9oWxbynu4Vkul6eKiDr6icbYkrAviZQJDrI02ID0V6y4gQTFOhfbXqq7QnKGIN9AYldZgDTsMlwuB3Aqm94Qy7qxg3z/OnVIJoz4lNGrQrQdp+dKU96uj4qjQhdFEzP6RyELvopKe6n8U4Ktav5HUA+mfYKrTOaG37k2E+EJozOkaWUFea6dd9W0xvIMPg6D0ujuCs6KD7bZ60f12X/q9bJWAlL1yNwRat+3CYXqtB5VhwgkMfyj/111Qx9Fr4dfFbqrGv9b3VuXZpNlBeieUpp9ubgCNyXp8fzDaL31/eKR8v9/n+8Zi/5/vt9HcGeE4LUarbWdDD3AZpylWCQcM6tTgEfrDI0Cte0ULqcoMHthGHgFk2VJaCIvwA+BpfeIRQOpdpwVVSw7u70mG0y/hT9zz4WE4vcPfR8/3Cn97z33l74M+f7d607/vcI3ScYrBHc0Ay6qLG0g44BSUxxnAF7iGIz7tmn7NtWD91Xc6fejecUG3JfDevv8Vs/YuVH8dJq5xbOvfABpnPO2M1D771dw0xXVUiOvw+EgdJD7iZRILMRgHCkNhY/bjfD5GWdwjL0omeC4tpOsp3yw3XSotNsyCdqilMIPQBiTAO96J7l7O1vSTLI53obp/XDe5lIznomF1VVAeG0tu/ObuLnvc+Br/bWY+LyAfMElOCsTqmzkxKubtdRfMfOhgi4f8bWbyN8ykI/wTTq7y3yS20Fc="),u(o,"title","Open in our Online Editor"),B.a=null,u(k,"class","language-js"),N.a=null,u(r,"class","language-js"),P.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js"),E.a=null,u(g,"class","language-js")},m(n,s){w(n,p,s),w(n,C,s),w(n,l,s),w(n,b,s),w(n,t,s),J(i,t,null),x(t,o),x(t,k),B.m(F,k),x(t,r),N.m(W,r),x(t,m),P.m(L,m),x(t,d),T.m(Q,d),x(t,g),E.m(U,g),S=!0},p:Y,i(n){S||($(i.$$.fragment,n),S=!0)},o(n){nn(i.$$.fragment,n),S=!1},d(n){n&&(a(p),a(C),a(l),a(b),a(t)),sn(i)}}}class cn extends Z{constructor(p){super(),H(this,p,null,an,q,{})}}export{cn as component};
