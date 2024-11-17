import{s as q,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as U,i as K,e,s as R,c as X,H as h,a as c,g as _,b as G,d as f,f as W,n as C,h as t,o as u,j as w,m as $,p as x,t as O,k as nn,l as sn}from"../chunks/index.Cnh3HYw3.js";import{V as an}from"../chunks/ViewApp.BajIxHdc.js";function tn(Z){let p,A="Contacts",y,l,v="This example shows how to create an app that keep tracks of information about your friends.",b,a,i,o,I="Open in Online Editor",k,N,L=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactsApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
		<span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">?.</span>id <span class="token operator">??</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
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
	
<span class="token punctuation">&#125;</span></code>`,r,B,J=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,P,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ViewContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Phone number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'phoneNumber'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Save</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,E,M=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DeleteContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,S;return i=new an({props:{project:{app:{code:`class ContactsApp extends App{
	
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
		return (a.contacts.at(-1)?.id ?? 0) + 1
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
	
}`},folders:[{id:1,name:"Start",offsetX:154,offsetY:-15}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
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
				Text.text(\`Phone number\`),
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
	
}`,x:797,y:687}]}}}),{c(){p=e("h1"),p.textContent=A,y=R(),l=e("p"),l.textContent=v,b=R(),a=e("div"),X(i.$$.fragment),o=e("a"),o.textContent=I,k=e("pre"),N=new h(!1),r=e("pre"),B=new h(!1),m=e("pre"),P=new h(!1),d=e("pre"),T=new h(!1),g=e("pre"),E=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),_(p)!=="svelte-e6lo79"&&(p.textContent=A),y=G(n),l=c(n,"P",{"data-svelte-h":!0}),_(l)!=="svelte-lx8f1j"&&(l.textContent=v),b=G(n),a=c(n,"DIV",{});var s=f(a);W(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),_(o)!=="svelte-1evffkc"&&(o.textContent=I),k=c(s,"PRE",{class:!0});var V=f(k);N=C(V,!1),V.forEach(t),r=c(s,"PRE",{class:!0});var j=f(r);B=C(j,!1),j.forEach(t),m=c(s,"PRE",{class:!0});var D=f(m);P=C(D,!1),D.forEach(t),d=c(s,"PRE",{class:!0});var z=f(d);T=C(z,!1),z.forEach(t),g=c(s,"PRE",{class:!0});var H=f(g);E=C(H,!1),H.forEach(t),s.forEach(t),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrdV39P2zAQ/SqWNampCBHpDwqRukKBTUhThcY0DQFS3cSlEa0dJc5aVuW7z07i1E5DQKV/TJMoSu5s3/Pde+d4DVEQQGcNXeph6EB3jqIIXFDCkMui8yAAeMUw8SLAn9cP5IGJn5v7QR/cZ0bmew6wzex56ocRG6EFdsD4fO67eJw7+OKaPaJEuvAC+XNuR8J+hnKv5dKFHBHMKMGjeDHBIR9nt9rZX+ZOTKAAaVUAGdJJBQxurQAxoZOzSeqpAWDbrVar3d4AeJTp8fAcM5wncfhy7Rm+18zhIUsmz4oCsUsjs2ueqU+8a+LhleGC/mfgWr4H+n3AVzHlaJnrZhpcRn7CbMQLlofmgWXYELM4JMBQgiBmHNrNgVh7MABHTXAAbG0x5Hn5QkYF+iCOZsZawhFZR9Z2+AKvWopxYVUqsTHKKmwseualPdH37oYYMXzLUMhu0BMub71wKJMSmJhwSuceDiPo3K+h70HHNiHhkLgY0inQhHQ6jTD7xV3djny7g86h3U0eTRjwNbXZ2YLX2YumqwJDoSrxstZ38DX2C+zZf57ziAGiZpYrryrd6qx839/pkheL19InT0a3abkzf+6FmBS8SwdE/h9s2BVereYLFCgODkywcxgzxoXCOBJj/GntWkWpEyBeZY2TcdMSuTJ++niZYxbb5wQ0BMObG7LktE4fCuMFnccLElVBvA2Qi5XZGqQDHpeSC661Z07/DalzNFeez0potEwrsJoVmks4P1a80kfHJnyBTqd1kpgZE9p1TCjloJoPQvWZJt9mR16jlBdaH9FbSCASvQtLarL/g4PPc/1FlB4I+ThjtZxDurKWvsdmnGNm1cwc8oY721l/L4Zv6GMQJF93R3CVNrDdoqfNb/fQN6JTApK1yt0QKM22CoeutRpUmgiHyH2W+i+6oIqjVsKX6YEq51+qx6vUbFDuILULCtGPX28ApcVqdN9tdzLdH/ek7jt1ui8F+/90/x7OXRGGw3S2PHZe6QFWxGiIpcMEjcLV2EN/2APUoldsIZWexgfbyB5AZi1lC2Fqbuyn1ewBpdp2trAqzsbbTUmT+i36jWu+PDSpVwi8d3qUCtw+bUmBd+sEvtWc/n2JKzU9DzF4oTGI4vxhiQgDjILsSgPYDBdw+LddWbCJYiw++wbjjx4eI/reAr7Z+O9wtH0MFZ+HgaVd3epPgNI9T7kjbd//itqUydVLyXV80ksek79Aip2e"),u(o,"title","Open in our Online Editor"),N.a=null,u(k,"class","language-js"),B.a=null,u(r,"class","language-js"),P.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js"),E.a=null,u(g,"class","language-js")},m(n,s){w(n,p,s),w(n,y,s),w(n,l,s),w(n,b,s),w(n,a,s),$(i,a,null),x(a,o),x(a,k),N.m(L,k),x(a,r),B.m(J,r),x(a,m),P.m(F,m),x(a,d),T.m(Q,d),x(a,g),E.m(M,g),S=!0},p:Y,i(n){S||(O(i.$$.fragment,n),S=!0)},o(n){nn(i.$$.fragment,n),S=!1},d(n){n&&(t(p),t(y),t(l),t(b),t(a)),sn(i)}}}class cn extends U{constructor(p){super(),K(this,p,null,tn,q,{})}}export{cn as component};
