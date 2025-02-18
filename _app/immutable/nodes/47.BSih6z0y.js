import{s as J,n as Q}from"../chunks/scheduler.B0TnBjPs.js";import{S as K,i as F,e,s as G,c as z,H as h,a as c,g as T,b as O,d as f,f as U,n as C,h as t,o as u,j as w,m as W,p as x,t as $,k as nn,l as sn}from"../chunks/index.BXVnRmkj.js";import{V as an}from"../chunks/ViewApp.qg7AIhJt.js";function tn(M){let p,I="Contacts",y,l,_="This example shows how to create an app that keep tracks of information about your friends.",b,a,i,o,A="Open in Online Editor",k,N,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactsApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,P,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> nextContactId <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">getNextContactId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Rows<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
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
	
<span class="token punctuation">&#125;</span></code>`,m,B,j=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ViewContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,d,E,q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EditContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	id <span class="token operator">=</span> <span class="token number">1</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token keyword">const</span> contact <span class="token operator">=</span> a<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=></span> c<span class="token punctuation">.</span>id <span class="token operator">==</span> p<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
		
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">First name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>firstName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'firstName'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Last name</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'lastName'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Email</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>email<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'email'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Columns<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
				Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Phone number</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				Box<span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				EnterText<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>contact<span class="token punctuation">.</span>phoneNumber<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">store</span><span class="token punctuation">(</span>contact<span class="token punctuation">,</span> <span class="token string">'phoneNumber'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Save</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">(</span>ViewContactPage<span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,g,S,Z=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DeleteContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,v;return i=new an({props:{project:{app:{code:`class ContactsApp extends App{
	
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
			Rows.grow(1).children(
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
				EnterText.grow(1).text(contact.firstName).store(contact, 'firstName'),
			),
			Columns.children(
				Text.text(\`Last name\`),
				Box.width(1),
				EnterText.grow(1).text(contact.lastName).store(contact, 'lastName'),
			),
			Columns.children(
				Text.text(\`Email\`),
				Box.width(1),
				EnterText.grow(1).text(contact.email).store(contact, 'email'),
			),
			Columns.children(
				Text.text(\`Phone number\`),
				Box.width(1),
				EnterText.grow(1).text(contact.phoneNumber).store(contact, 'phoneNumber'),
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
	
}`,x:797,y:687}]}}}),{c(){p=e("h1"),p.textContent=I,y=G(),l=e("p"),l.textContent=_,b=G(),a=e("div"),z(i.$$.fragment),o=e("a"),o.textContent=A,k=e("pre"),N=new h(!1),r=e("pre"),P=new h(!1),m=e("pre"),B=new h(!1),d=e("pre"),E=new h(!1),g=e("pre"),S=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),T(p)!=="svelte-e6lo79"&&(p.textContent=I),y=O(n),l=c(n,"P",{"data-svelte-h":!0}),T(l)!=="svelte-lx8f1j"&&(l.textContent=_),b=O(n),a=c(n,"DIV",{});var s=f(a);U(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),T(o)!=="svelte-x8p6ri"&&(o.textContent=A),k=c(s,"PRE",{class:!0});var R=f(k);N=C(R,!1),R.forEach(t),r=c(s,"PRE",{class:!0});var V=f(r);P=C(V,!1),V.forEach(t),m=c(s,"PRE",{class:!0});var L=f(m);B=C(L,!1),L.forEach(t),d=c(s,"PRE",{class:!0});var D=f(d);E=C(D,!1),D.forEach(t),g=c(s,"PRE",{class:!0});var H=f(g);S=C(H,!1),H.forEach(t),s.forEach(t),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrdV39r2zAQ/SpCDOIw19T50bSGLG3abhRGKOsYK23Biq0kpolkbGVJCf7uk2zLkRzXLWn+GIOm2HeS7unuvZO1gSgMobOBHvUxdKA3R3EMLilhyGPxRRgCvGaY+DHgz5tH8sjEz8v9oA8eMiMLfAfYZvY8CaKYjdACO8C9mAcednMHX1yzx5RIF16gYM7tSNjPUe61PLqQI8IZJXi0XIxxxMfZrXb2l7kTEyhAWhVAhnRcAYNbK0CM6fh8nHpqANh2q9Vqt7cAnmR6fDzHDOdJHL7c+EbgN3N4yJLJs+JQ7NLI7JpnEhD/hvh4bXig/wV4VuCDfh/wVUw5Wua6mQaXkaeYjXjB8tA8sAwbYbaMCDCUIIgZR3ZzINYeDMBxE3wGtrYY8v18IaMCfbiMZ8ZGwhFZR9Zu+AKvWgq3sCqV2BplFbYWPfPSnuh79yKMGL5jKGK3aIrLWy8cyqQEJiac0LmPoxg6DxsY+NCxTUg4JC6GdAo0IZ1MYsx+c1e3I9/uoXNkd5MnE4Z8TW12tuBN9qLpqsBQqEq8bPQdfFsGBfbsP895zABRM8uVV5VudVa+7x90xYvFaxmQqdFtWt4smPsRJgXv0gHTiK4Mu8Kr1XyBQsXBgQl2DpeMcaEwjsRwP208qyh1AsSrrHHiNi2RK+NXgFc5ZrF9TkBDMLy5JUtO6/ShMF7S+XJB4iqIdyHysDJbg/SZx6XkkmvtmdN/S+oczbUfsBIaLdMKrGaF5hLOjzWv9PGJCV+g02mdJmbGhHYdE0o5qOaDUH2mybfZkdco5YXWR/QWEopE78OSmuz/5ODzXH8VpQdCPo6rlnNI19Yq8NmMc8ysmplD3nJnN+vvxfAdfQyC5Ov+CK7TBrZf9LT57R/6VnRKQLJWuR8CpdlW4dC1VoNKE+EQec9S/0UXVHHUSvgqPVDl/Cv1eJWaDcsdpHZBIXr39QZQWqxG9912J9P9SU/qvlOn+1Kw/0/37+HcNWE4SmfLY+eVHmDFjEZYOkzQKFyNA/SHA0AtesUOUulpfLCNHABk1lJ2EKbmxmFazQFQqm1nB6vibLzdlDSp36E/uObLQ5N6hcB7Z8epwO2zlhR4t07gO83p35e4UtOLCIMXugTxMn9YIcIAoyC70gA2wwUc/m1XFmyiGIvPvoH70cNjRN9bwDcb/z2Od4+h4vMwtLSrW/0JULrnKXek3ftfUZsyuXopuU5Oe8lT8heu2Z2y"),u(o,"title","Open in our Online Editor"),N.a=null,u(k,"class","language-js"),P.a=null,u(r,"class","language-js"),B.a=null,u(m,"class","language-js"),E.a=null,u(d,"class","language-js"),S.a=null,u(g,"class","language-js")},m(n,s){w(n,p,s),w(n,y,s),w(n,l,s),w(n,b,s),w(n,a,s),W(i,a,null),x(a,o),x(a,k),N.m(Y,k),x(a,r),P.m(X,r),x(a,m),B.m(j,m),x(a,d),E.m(q,d),x(a,g),S.m(Z,g),v=!0},p:Q,i(n){v||($(i.$$.fragment,n),v=!0)},o(n){nn(i.$$.fragment,n),v=!1},d(n){n&&(t(p),t(y),t(l),t(b),t(a)),sn(i)}}}class cn extends K{constructor(p){super(),F(this,p,null,tn,J,{})}}export{cn as component};
