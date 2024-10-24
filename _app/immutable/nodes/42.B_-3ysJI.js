import{s as O,n as Z}from"../chunks/scheduler.B0TnBjPs.js";import{S as q,i as D,e,s as H,c as M,H as h,a as c,g as I,b as J,d as f,f as U,n as C,h as t,o as u,j as w,m as $,p as x,t as K,k as nn,l as sn}from"../chunks/index.Cnh3HYw3.js";import{V as an}from"../chunks/ViewApp.9sx5twVU.js";function tn(L){let p,S="Contacts",y,l,_="This example shows how to create an app that keep tracks of information about your friends.",b,a,i,o,A="Open in Online Editor",k,N,W=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ContactsApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,r,P,Q=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,m,B,X=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">ViewContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,d,T,Y=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">EditContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,g,v,F=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">DeleteContactPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
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
	
<span class="token punctuation">&#125;</span></code>`,E;return i=new an({props:{project:{app:{code:`class ContactsApp extends App{
	
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
	
}`,x:797,y:687}]}}}),{c(){p=e("h1"),p.textContent=S,y=H(),l=e("p"),l.textContent=_,b=H(),a=e("div"),M(i.$$.fragment),o=e("a"),o.textContent=A,k=e("pre"),N=new h(!1),r=e("pre"),P=new h(!1),m=e("pre"),B=new h(!1),d=e("pre"),T=new h(!1),g=e("pre"),v=new h(!1),this.h()},l(n){p=c(n,"H1",{"data-svelte-h":!0}),I(p)!=="svelte-e6lo79"&&(p.textContent=S),y=J(n),l=c(n,"P",{"data-svelte-h":!0}),I(l)!=="svelte-lx8f1j"&&(l.textContent=_),b=J(n),a=c(n,"DIV",{});var s=f(a);U(i.$$.fragment,s),o=c(s,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),I(o)!=="svelte-2z0yxj"&&(o.textContent=A),k=c(s,"PRE",{class:!0});var V=f(k);N=C(V,!1),V.forEach(t),r=c(s,"PRE",{class:!0});var R=f(r);P=C(R,!1),R.forEach(t),m=c(s,"PRE",{class:!0});var j=f(m);B=C(j,!1),j.forEach(t),d=c(s,"PRE",{class:!0});var z=f(d);T=C(z,!1),z.forEach(t),g=c(s,"PRE",{class:!0});var G=f(g);v=C(G,!1),G.forEach(t),s.forEach(t),this.h()},h(){u(o,"target","_blank"),u(o,"href","/editor#eNrdV/FL4zAU/ldCOFiHtdjNOS3splPvEI4h53GcqLCszVxxS0qb3uaN/u+XtE2XdLXKth+OAyfte0nel/e+76VZQRQE0FlBl3oYOtCdoSgCl5Qw5LLoIggAXjJMvAjw59UjeWTi5+Z+0AMPmZH5ngNsM3ue+GHEhmiOHTC6mPkuHuUOvrhmjyiRLjxH/ozbkbCfo9xruXQuRwRTSvAwno9xyMfZrXb2l7kTEyhAWhVABnRcAYNbK0CM6fh8nHpqANh2q9Vqt9cAnmR6PDzDDOdJHLzeeIbvNXN4yJLJs6JA7NLI7Jpn4hPvhnh4abig9xm4lu+BXg/wVUw5Wua6mQaXkZ8xG/KC5aF5YBk2xCwOCTCUIIgZh3azL9bu98FRExwAW1sMeV6+kFGBPoijqbGScETWkbUZvsCrlmJUWJVKrI2yCmuLnnlpT/S9uyFGDN8xFLJb9IzLWy8cyqQEJiac0JmHwwg6Dyvoe9CxTUg4JC6GdAo0IZ1MIsx+cVfnWL7dQ+fQ7iRPJgz4mtrsbMGb7EXTVYGhUJV4Wek7+Br7BfbsP895xABRM8uVV5VudVa+7+90wYvFa+mTZ6PTtNypP/NCTArepQMi/w827AqvVvM5ChQHBybYOYgZ40JhHIkx+rRyraLUCRCvssbJqGmJXBk/fbzIMYvtcwIaguHNNVlyWqcPhfGSzuI5iaog3gXIxcpsDdIBj0vJJdfaC6f/mtQ5mmvPZyU0WqYVWM0KzSWcH0te6aMTE75C57h1mpgZE9p1TCjloJoPQvWZJt9nR16jlBdaH9FbSCASvQ1LarL/g4PPc/1FlB4I+TgjtZwDurQWvsemnGNm1cwc8po7m1n/KIZvaDcIkq/bI7hOG9h20dPmt33oW9EpAcla5XYIlGZbhUPXWg0qTYQD5L5I/RddUMVRK+Gr9ECV86/U41VqNih3kNoFhehHbzeA0mI1uu+0jzPdn3Sl7o/rdF8K9v/p/iOcuyYMh+lseey80QOsiNEQS4cJGoWrsYf+sAeoRa/YQCo9jR3byB5AZi1lA2Fq3gGe0if2AFLtOhtQFWfj/Z6kKf0O/cY1Hx6a0iv03T07SvVtn7Wkvjt1+t7oTf++wpWSXoQYvNIYRHH+sECEAUZBdqMBbIoLOPzTrqzXRDEWX3390a5nx5B+tIDv9v17HG2eQsXXYWBpN7f6A6B0zVOuSJvXv6I2ZXJ1U3KdnHaTp+QvaSedfg=="),u(o,"title","Open in our Online Editor"),N.a=null,u(k,"class","language-js"),P.a=null,u(r,"class","language-js"),B.a=null,u(m,"class","language-js"),T.a=null,u(d,"class","language-js"),v.a=null,u(g,"class","language-js")},m(n,s){w(n,p,s),w(n,y,s),w(n,l,s),w(n,b,s),w(n,a,s),$(i,a,null),x(a,o),x(a,k),N.m(W,k),x(a,r),P.m(Q,r),x(a,m),B.m(X,m),x(a,d),T.m(Y,d),x(a,g),v.m(F,g),E=!0},p:Z,i(n){E||(K(i.$$.fragment,n),E=!0)},o(n){nn(i.$$.fragment,n),E=!1},d(n){n&&(t(p),t(y),t(l),t(b),t(a)),sn(i)}}}class cn extends q{constructor(p){super(),D(this,p,null,tn,O,{})}}export{cn as component};
