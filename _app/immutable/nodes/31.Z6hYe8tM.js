import{s as ca,n as ia}from"../chunks/scheduler.UQwd20JU.js";import{S as la,i as ua,e,s as i,H as dt,c as gt,a as p,g as c,b as l,d as r,n as mt,h as n,f as ft,o,j as s,p as u,m as xt,t as ht,k as vt,l as Tt}from"../chunks/index.i__Fl8cY.js";import{V as yt}from"../chunks/ViewApp.m6vzcyjb.js";function ra(ta){let k,gn="<code>Time</code>",St,M,fn="On this page you find the documentation for the class <code>Time</code>.",wt,B,xn="Introduction",At,H,hn="You can use the <code>Time</code> class to create an object that represents a specific point in time.",Ct,P,vn="Creating a new <code>Time</code> object",bt,j,Tn="To create a new <code>Time</code> object, simply write <code>Time</code>. This way, you obtain a <code>Time</code> object representing the time <code>0001-01-01 00:00:00</code>. Below you can see the names for the different parts a <code>Time</code> object consists of.",Mt,_,Bt,na=`<code class="language-undefined">   Date     Clock  
┝━━━━━━━━┥ ┝━━━━━━┥
0001-01-01 00:00:00
┝━━┥ ┝┥ ┝┥ ┝┥ ┝┥ ┝┥
Year │  │ Hour │  │
  Month │  Minute │
       Day     Second</code>`,Ht,D,yn="Often, you want to obtain the time that happen to be when your code is running. Call the method <code>setNow()</code> on your <code>Time</code> object to change the time in it to the time that happened to be when the computer calls <code>setNow()</code>.",Pt,L,Sn="Retrieving parts from a <code>Time</code> object",jt,O,wn="Use the different <code>getXXX()</code> methods on the <code>Time</code> object to retrieve the different parts. The methods ending with <code>AsString()</code> returns a string, the other ones return a number.",_t,E,An="<li><code>getDate()</code> to get the date parts of the time (year, month and day of month) as a string</li> <li><code>getClock()</code> to get the clock parts (hour, minute and second) of the time as a string</li> <li><code>getYear()</code> to get the year</li> <li><code>getMonth()</code> to get the month</li> <li><code>getDay()</code> to get the day</li> <li><code>getHour()</code> to get the hour</li> <li><code>getMinute()</code> to get the minute</li> <li><code>getSecond()</code> to get the second</li> <li><code>getMillisecond()</code> to get the millisecond</li>",Dt,h,R,Cn="Example",$,N,d,bn="Open in Online Editor",it,Lt,aa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	time <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getDate(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getYear(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getMonth(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getDay(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getClock(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getHour(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getHour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getMinute(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getMinute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getSecond(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getSecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getMillisecond(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getMillisecond</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Button<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Refresh</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ot,V,Mn="Changing a <code>Time</code> object",Et,Y,Bn="Use the different <code>setXXX()</code> methods on the <code>Time</code> object to change which time it should represent. All <code>setXXX()</code> methods return the <code>Time</code> object itself, so method calls are chainable, just as they are for GUI components. Use:",Rt,I,Hn="<li><code>setNow()</code> to populate the time object with the time that happen to be when the call to <code>setNow()</code> is executed by the computer</li> <li><code>setDate()</code> to set the year, month and day of month</li> <li><code>setClock()</code> to set the hour, minute and second</li> <li><code>setYear()</code> to set the year</li> <li><code>setMonth()</code> to set the month</li> <li><code>setDay()</code> to set the day of month</li> <li><code>setHour()</code> to set the hour</li> <li><code>setMinute()</code> to set the minute</li> <li><code>setSecond()</code> to set the second</li> <li><code>setMillisecond()</code> to set the millisecond</li>",$t,v,X,Pn="Example",G,z,m,jn="Open in Online Editor",lt,Nt,sa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	time <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setClock</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setYear</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getDate(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">getClock(): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">getClock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,q,_n="There are also several <code>addXXX()</code> methods avaialble to add seconds, minutes, hours, etc. to the <code>Time</code> object:",Yt,Q,Dn="<li><code>addMilliseconds()</code> to add a some number of milliseconds to the <code>Time</code> object</li> <li><code>addSeconds()</code> to add a some number of seconds to the <code>Time</code> object</li> <li><code>addMinutes()</code> to add a some number of minutes to the <code>Time</code> object</li> <li><code>addHours()</code> to add a some number of hours to the <code>Time</code> object</li> <li><code>addDays()</code> to add a some number of days to the <code>Time</code> object</li> <li><code>addMonths()</code> to add a some number of months to the <code>Time</code> object</li> <li><code>addYears()</code> to add a some number of years to the <code>Time</code> object</li>",It,T,Ln='<div class="remark-container__title">Removing time</div><p>No <code>removeXXX()</code> methods exist. Instead, simply pass negative numbers to the <code>addXXX()</code> methods to remove time, e.g. <code>addHours(-1)</code> to remove one hour from the <code>Time</code> object.</p>',Xt,y,On='<div class="remark-container__title">Watch out!</div><p><code>addMonths()</code> and <code>addYears()</code> are not always intuitive to use. For example, if you have a <code>Time</code> object representing the date <code>2023-01-31</code> and you add one month to it, it will not represent the date <code>2023-02-31</code>, because that date doesn&#39;t exist! Instead, some logic is applied to find a logical valid date close to <code>2023-02-31</code>.</p>',Gt,S,W,En="Example",J,F,g,Rn="Open in Online Editor",ut,zt,ea=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	yesterday <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addDays</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	today <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	tomorrow <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addDays</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Yesterday is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>yesterday<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Today is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>today<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Tomorrow is: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>tomorrow<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,qt,U,$n="<code>getCopy()</code> - Obtaining a copy",Qt,Z,Nn="Call the method <code>getCopy()</code> to get back a new <code>Time</code> object representing the same time as the one in the <code>Time</code> object you called the method on.",Wt,w,K,Vn="Example",tt,nt,f,Yn="Open in Online Editor",rt,Jt,pa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	original <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setNow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	copy <span class="token operator">=</span> <span class="token keyword">null</span>
	notCopy <span class="token operator">=</span> <span class="token keyword">null</span>
	
	<span class="token function">onBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		
		<span class="token comment">// We store a copy of the time object in "copy".</span>
		p<span class="token punctuation">.</span>copy <span class="token operator">=</span> p<span class="token punctuation">.</span>original<span class="token punctuation">.</span><span class="token function">getCopy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token comment">// So changes to "copy" only affects that time object.</span>
		p<span class="token punctuation">.</span>copy<span class="token punctuation">.</span><span class="token function">setYear</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
		
		<span class="token comment">// Here we don't create a copy, so both "notCopy" and</span>
		<span class="token comment">// "original" refers to one and the same time object!</span>
		p<span class="token punctuation">.</span>notCopy <span class="token operator">=</span> p<span class="token punctuation">.</span>original
		
		<span class="token comment">// So if we change the time object through the "notCopy"</span>
		<span class="token comment">// variable, the changes will also be shown through the</span>
		<span class="token comment">// "original" variable!</span>
		p<span class="token punctuation">.</span>notCopy<span class="token punctuation">.</span><span class="token function">setYear</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span>
		
	<span class="token punctuation">&#125;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">original: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>original<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">copy: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>copy<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">notCopy: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>notCopy<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ft,at,In="Comparing <code>Time</code> objects",Ut,st,Xn="Use the different <code>isXXX()</code> methods to compare different <code>Time</code> objects:",Zt,et,Gn="<li><code>timeA.isSameAs(timeB)</code> to check if the <code>Time</code> objects <code>timeA</code> and <code>timeB</code> represent the same point in time</li> <li><code>timeA.isBefore(timeB)</code> to check if the <code>Time</code> object <code>timeA</code> represents a time that happen before the <code>Time</code> object <code>timeB</code> represents</li> <li><code>timeA.isBeforeOrSameAs(timeB)</code> to check if the <code>Time</code> object <code>timeA</code> represents a time that happen before or at the same time the <code>Time</code> object <code>timeB</code> represents</li>",Kt,A,pt,zn="Example",ot,ct,x,qn="Open in Online Editor",kt,tn,oa=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	timeA <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span>
	timeB <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">17</span><span class="token punctuation">)</span>
	timeC <span class="token operator">=</span> Time<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isSameAs(timeB): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isSameAs</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeB<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isSameAs(timeC): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isSameAs</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeC<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isBefore(timeB): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeB<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isBefore(timeC): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isBefore</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeC<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isBeforeOrSameAs(timeB): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isBeforeOrSameAs</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeB<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">timeA.isBeforeOrSameAs(timeC): </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span>timeA<span class="token punctuation">.</span><span class="token function">isBeforeOrSameAs</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>timeC<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,nn,C,Qn='<div class="remark-container__title">Tips!</div><p>You can also use:</p><ul><li><code>timeA &lt; timeB</code> instead of <code>timeA.isBefore(timeB)</code></li> <li><code>timeA &lt;= timeB</code> instead of <code>timeA.isBeforeOrSameAs(timeB)</code></li></ul>',an,b,Wn='<div class="remark-container__title">== does not work!</div><p>You cannot use <code>timeA == timeB</code> to check if they represent the same point in time, because in JavaScript, the <code>==</code> operator always checks if the objects refer to the same object instance.</p>',sn;return N=new yt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	time = Time.setNow()\n	\n	onBefore(){\n		p.time.setNow()\n	}\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Text.text(`getDate(): ${p.time.getDate()}`),\n			Text.text(`getYear(): ${p.time.getYear()}`),\n			Text.text(`getMonth(): ${p.time.getMonth()}`),\n			Text.text(`getDay(): ${p.time.getDay()}`),\n			Text.text(`getClock(): ${p.time.getClock()}`),\n			Text.text(`getHour(): ${p.time.getHour()}`),\n			Text.text(`getMinute(): ${p.time.getMinute()}`),\n			Text.text(`getSecond(): ${p.time.getSecond()}`),\n			Text.text(`getMillisecond(): ${p.time.getMillisecond()}`),\n			Space,\n			Button.text(`Refresh`),\n		)\n	}\n	\n}",x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),z=new yt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	time = Time.setClock(5, 6, 7).setYear(2000)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`getDate(): \${p.time.getDate()}\`),
			Text.text(\`getClock(): \${p.time.getClock()}\`),
			Space,
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),F=new yt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	yesterday = Time.setNow().addDays(-1)
	today = Time.setNow()
	tomorrow = Time.setNow().addDays(1)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Yesterday is: \${p.yesterday.getDate()}\`),
			Text.text(\`Today is: \${p.today.getDate()}\`),
			Text.text(\`Tomorrow is: \${p.tomorrow.getDate()}\`),
			Space,
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),nt=new yt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	original = Time.setNow()
	copy = null
	notCopy = null
	
	onBefore(){
		
		// We store a copy of the time object in "copy".
		p.copy = p.original.getCopy()
		
		// So changes to "copy" only affects that time object.
		p.copy.setYear(1000)
		
		// Here we don't create a copy, so both "notCopy" and
		// "original" refers to one and the same time object!
		p.notCopy = p.original
		
		// So if we change the time object through the "notCopy"
		// variable, the changes will also be shown through the
		// "original" variable!
		p.notCopy.setYear(2000)
		
	}
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`original: \${p.original.getDate()}\`),
			Text.text(\`copy: \${p.copy.getDate()}\`),
			Text.text(\`notCopy: \${p.notCopy.getDate()}\`),
			Space,
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),ct=new yt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	timeA = Time.setDate(2023, 12, 17)
	timeB = Time.setDate(2023, 12, 17)
	timeC = Time.setDate(2023, 12, 18)
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`timeA.isSameAs(timeB): \${p.timeA.isSameAs(p.timeB)}\`),
			Text.text(\`timeA.isSameAs(timeC): \${p.timeA.isSameAs(p.timeC)}\`),
			Space,
			Text.text(\`timeA.isBefore(timeB): \${p.timeA.isBefore(p.timeB)}\`),
			Text.text(\`timeA.isBefore(timeC): \${p.timeA.isBefore(p.timeC)}\`),
			Space,
			Text.text(\`timeA.isBeforeOrSameAs(timeB): \${p.timeA.isBeforeOrSameAs(p.timeB)}\`),
			Text.text(\`timeA.isBeforeOrSameAs(timeC): \${p.timeA.isBeforeOrSameAs(p.timeC)}\`),
			Space,
		)
	}
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){k=e("h1"),k.innerHTML=gn,St=i(),M=e("p"),M.innerHTML=fn,wt=i(),B=e("h2"),B.textContent=xn,At=i(),H=e("p"),H.innerHTML=hn,Ct=i(),P=e("h2"),P.innerHTML=vn,bt=i(),j=e("p"),j.innerHTML=Tn,Mt=i(),_=e("pre"),Bt=new dt(!1),Ht=i(),D=e("p"),D.innerHTML=yn,Pt=i(),L=e("h2"),L.innerHTML=Sn,jt=i(),O=e("p"),O.innerHTML=wn,_t=i(),E=e("ul"),E.innerHTML=An,Dt=i(),h=e("div"),R=e("div"),R.textContent=Cn,$=e("div"),gt(N.$$.fragment),d=e("a"),d.textContent=bn,it=e("pre"),Lt=new dt(!1),Ot=i(),V=e("h2"),V.innerHTML=Mn,Et=i(),Y=e("p"),Y.innerHTML=Bn,Rt=i(),I=e("ul"),I.innerHTML=Hn,$t=i(),v=e("div"),X=e("div"),X.textContent=Pn,G=e("div"),gt(z.$$.fragment),m=e("a"),m.textContent=jn,lt=e("pre"),Nt=new dt(!1),Vt=i(),q=e("p"),q.innerHTML=_n,Yt=i(),Q=e("ul"),Q.innerHTML=Dn,It=i(),T=e("div"),T.innerHTML=Ln,Xt=i(),y=e("div"),y.innerHTML=On,Gt=i(),S=e("div"),W=e("div"),W.textContent=En,J=e("div"),gt(F.$$.fragment),g=e("a"),g.textContent=Rn,ut=e("pre"),zt=new dt(!1),qt=i(),U=e("h2"),U.innerHTML=$n,Qt=i(),Z=e("p"),Z.innerHTML=Nn,Wt=i(),w=e("div"),K=e("div"),K.textContent=Vn,tt=e("div"),gt(nt.$$.fragment),f=e("a"),f.textContent=Yn,rt=e("pre"),Jt=new dt(!1),Ft=i(),at=e("h2"),at.innerHTML=In,Ut=i(),st=e("p"),st.innerHTML=Xn,Zt=i(),et=e("ul"),et.innerHTML=Gn,Kt=i(),A=e("div"),pt=e("div"),pt.textContent=zn,ot=e("div"),gt(ct.$$.fragment),x=e("a"),x.textContent=qn,kt=e("pre"),tn=new dt(!1),nn=i(),C=e("div"),C.innerHTML=Qn,an=i(),b=e("div"),b.innerHTML=Wn,this.h()},l(t){k=p(t,"H1",{"data-svelte-h":!0}),c(k)!=="svelte-9w23c"&&(k.innerHTML=gn),St=l(t),M=p(t,"P",{"data-svelte-h":!0}),c(M)!=="svelte-1frula1"&&(M.innerHTML=fn),wt=l(t),B=p(t,"H2",{"data-svelte-h":!0}),c(B)!=="svelte-1ukekoe"&&(B.textContent=xn),At=l(t),H=p(t,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1o7u027"&&(H.innerHTML=hn),Ct=l(t),P=p(t,"H2",{"data-svelte-h":!0}),c(P)!=="svelte-iclbmv"&&(P.innerHTML=vn),bt=l(t),j=p(t,"P",{"data-svelte-h":!0}),c(j)!=="svelte-1tqp0nj"&&(j.innerHTML=Tn),Mt=l(t),_=p(t,"PRE",{class:!0});var a=r(_);Bt=mt(a,!1),a.forEach(n),Ht=l(t),D=p(t,"P",{"data-svelte-h":!0}),c(D)!=="svelte-zu626b"&&(D.innerHTML=yn),Pt=l(t),L=p(t,"H2",{"data-svelte-h":!0}),c(L)!=="svelte-11g9rtj"&&(L.innerHTML=Sn),jt=l(t),O=p(t,"P",{"data-svelte-h":!0}),c(O)!=="svelte-pfm6bb"&&(O.innerHTML=wn),_t=l(t),E=p(t,"UL",{"data-svelte-h":!0}),c(E)!=="svelte-3bg719"&&(E.innerHTML=An),Dt=l(t),h=p(t,"DIV",{class:!0});var un=r(h);R=p(un,"DIV",{class:!0,"data-svelte-h":!0}),c(R)!=="svelte-1llzxwj"&&(R.textContent=Cn),$=p(un,"DIV",{});var en=r($);ft(N.$$.fragment,en),d=p(en,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(d)!=="svelte-d0m8f2"&&(d.textContent=bn),it=p(en,"PRE",{class:!0});var Jn=r(it);Lt=mt(Jn,!1),Jn.forEach(n),en.forEach(n),un.forEach(n),Ot=l(t),V=p(t,"H2",{"data-svelte-h":!0}),c(V)!=="svelte-jq99bd"&&(V.innerHTML=Mn),Et=l(t),Y=p(t,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-rf9eu9"&&(Y.innerHTML=Bn),Rt=l(t),I=p(t,"UL",{"data-svelte-h":!0}),c(I)!=="svelte-15ka1ou"&&(I.innerHTML=Hn),$t=l(t),v=p(t,"DIV",{class:!0});var rn=r(v);X=p(rn,"DIV",{class:!0,"data-svelte-h":!0}),c(X)!=="svelte-1llzxwj"&&(X.textContent=Pn),G=p(rn,"DIV",{});var pn=r(G);ft(z.$$.fragment,pn),m=p(pn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(m)!=="svelte-sqky36"&&(m.textContent=jn),lt=p(pn,"PRE",{class:!0});var Fn=r(lt);Nt=mt(Fn,!1),Fn.forEach(n),pn.forEach(n),rn.forEach(n),Vt=l(t),q=p(t,"P",{"data-svelte-h":!0}),c(q)!=="svelte-1gkmxbf"&&(q.innerHTML=_n),Yt=l(t),Q=p(t,"UL",{"data-svelte-h":!0}),c(Q)!=="svelte-2e72au"&&(Q.innerHTML=Dn),It=l(t),T=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(T)!=="svelte-jtn0if"&&(T.innerHTML=Ln),Xt=l(t),y=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(y)!=="svelte-qg35cd"&&(y.innerHTML=On),Gt=l(t),S=p(t,"DIV",{class:!0});var kn=r(S);W=p(kn,"DIV",{class:!0,"data-svelte-h":!0}),c(W)!=="svelte-1llzxwj"&&(W.textContent=En),J=p(kn,"DIV",{});var on=r(J);ft(F.$$.fragment,on),g=p(on,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(g)!=="svelte-8d6i8q"&&(g.textContent=Rn),ut=p(on,"PRE",{class:!0});var Un=r(ut);zt=mt(Un,!1),Un.forEach(n),on.forEach(n),kn.forEach(n),qt=l(t),U=p(t,"H2",{"data-svelte-h":!0}),c(U)!=="svelte-mhwmjr"&&(U.innerHTML=$n),Qt=l(t),Z=p(t,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-lvs7jm"&&(Z.innerHTML=Nn),Wt=l(t),w=p(t,"DIV",{class:!0});var dn=r(w);K=p(dn,"DIV",{class:!0,"data-svelte-h":!0}),c(K)!=="svelte-1llzxwj"&&(K.textContent=Vn),tt=p(dn,"DIV",{});var cn=r(tt);ft(nt.$$.fragment,cn),f=p(cn,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(f)!=="svelte-d1k01e"&&(f.textContent=Yn),rt=p(cn,"PRE",{class:!0});var Zn=r(rt);Jt=mt(Zn,!1),Zn.forEach(n),cn.forEach(n),dn.forEach(n),Ft=l(t),at=p(t,"H2",{"data-svelte-h":!0}),c(at)!=="svelte-1ux2ud0"&&(at.innerHTML=In),Ut=l(t),st=p(t,"P",{"data-svelte-h":!0}),c(st)!=="svelte-1thub9m"&&(st.innerHTML=Xn),Zt=l(t),et=p(t,"UL",{"data-svelte-h":!0}),c(et)!=="svelte-i8s6yd"&&(et.innerHTML=Gn),Kt=l(t),A=p(t,"DIV",{class:!0});var mn=r(A);pt=p(mn,"DIV",{class:!0,"data-svelte-h":!0}),c(pt)!=="svelte-1llzxwj"&&(pt.textContent=zn),ot=p(mn,"DIV",{});var ln=r(ot);ft(ct.$$.fragment,ln),x=p(ln,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),c(x)!=="svelte-sifxn5"&&(x.textContent=qn),kt=p(ln,"PRE",{class:!0});var Kn=r(kt);tn=mt(Kn,!1),Kn.forEach(n),ln.forEach(n),mn.forEach(n),nn=l(t),C=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(C)!=="svelte-2knfa8"&&(C.innerHTML=Qn),an=l(t),b=p(t,"DIV",{class:!0,"data-svelte-h":!0}),c(b)!=="svelte-1i3yg5y"&&(b.innerHTML=Wn),this.h()},h(){Bt.a=null,o(_,"class","language-undefined"),o(R,"class","remark-container__title"),o(d,"target","_blank"),o(d,"href","/editor#eNrFVG1r2zAQ/itCDGaDMUnGYBhGcV9o+6FlNIEtNIUI+xybKpLRC60x/u+T69irHDu4H0Y/JJGeu+fu9NxdSkzyHAcljngMOMARJVKiuyLMcwSvClgskTmXG7ZR9ScSQBQsFRHqF9mB4zYWJUBpwVBnqNGqIVW48nDCaQxC4uCxxFmMg7mHGdnXGd8o2MM8SSSoPziYtee1OVdPHs5NPIvZBLttLlbhXf6u+PrSVa+yPaCfaGV+fJPgnr84bmvj7BwSLv49KfdV36+yZbjWWV+AB/4i/SjNaCyAOY1po5Y5icBrbytTm6/Ml7Pdgbo0gRw3QF/KQ8IOq7buCGcNRPQ5DTbOueNMpX3SARxnXZLiuLjiFOOC8ui5zzmA46wbro9e1GAnXpQxfaxdi47zlhBxFvd5LXoqH6WZHCRbpvcR7M6fa2Xm7BDxARIBMu2cXWtnPPyKg8XMLEOBg2+zbhFWsM+pGQ9rIawdCOXzbRLGmp5YhKNh/y/THQpABdfobV2RSglD8x9no+pccKr3bCBB37En5D3fun6tjcM0pa43kbYGOY031KBawjBRIIYUrP/xmt4ser25YoYS7uCzO/M7JeqrrJsjkMl+Nm1i57NhwWyn7xOcFlMiLUYiva/wIz15qv4Cu66BGw=="),o(d,"title","Open in our Online Editor"),Lt.a=null,o(it,"class","language-js"),o(h,"class","remark-container tip"),o(X,"class","remark-container__title"),o(m,"target","_blank"),o(m,"href","/editor#eNrFU2Fr2zAQ/SviGMwCYZyMbsMwhtuN0Q8bYw10YS5E2OckVJGMdGYNxv99Ut16cYi3fBjsg23pdO/e3XtWC7KuIW2hMCVCCoWSzrHP+6yuGT4Q6tIxv25znVN4CouS8Iakpa9yjRHvT8giNVaz4SBEux7UQSegMqpE6yD90cK2hHQmQMtdYHyEgABTVQ7pO6TJ83rp192dgNrXGyH7Ytf9ZtT4wD80HzZD97TdIXvHFv4Te4IrZYr76EKw14K94SGyRGmjeZIkfDzwp2Z7POo389PFxWarSos66o9yuqllgeJ5t/BdxORf0WqN9MEXinjKXrR1HDqJh1i34hOYvsUj0FPwEHXIy0fiC3iA1I8kYA/pq2RQdIG7Wnn2kbIjMTN3f11lZaP+oKjRl1gZ+/tHOOD+d+JlFtneNOzRd0Ybqdns7fuJ8XO6MqrZ6RMEx4k5XTbkZ3ii+WJWPA7aRLpRioszYUt05+H4CYOChFlFaE8pGK5O7838yJuP2kOyNf5vZ243kl66YI5lnn3ak5Fis+S0YOOkizOS5udUmk9Umro0f/PkrvsFSoLhVA=="),o(m,"title","Open in our Online Editor"),Nt.a=null,o(lt,"class","language-js"),o(v,"class","remark-container tip"),o(T,"class","remark-container tip"),o(y,"class","remark-container warning"),o(W,"class","remark-container__title"),o(g,"target","_blank"),o(g,"href","/editor#eNrFU11r2zAU/SviMpgNnkkyBsMwhvtB6cPKWANdmQsR1nViaktGkkmN8X+fFLVOHOzND4M92OjjnnvuPeeqBVpVELWQCoYQQVpQpci3Jq4qgi8aOVPErNuEJ9p+qUSq8V5Tqb/TLXq+u9ESdS056S/saedAHXQBZKJgKBVEv1rIGUTLADgtLeMBAgGILFOof0K0eFs/mnX3FEBl8g2QLtmt2wwK7/n74u2mr75BpVEy2pAvZJ2XGBqWO7H3/JAydkUb5X1Y+jZQi5Egd1EKKcV+MoHDH6W6qfNzkX6IvQrTXV4widxzV4m+r2iKwdtubeoPtfl5m8e+6FxF5F1bhX0b4Rb1lSHx/G7jj2HX4hR36GoG5rXFI8wdjCNP6/YHtgfwAtFqYfxsIPq46L1cY1kVJs/A04GNsXq+zWJWF3/wUvALzIQ8juAJ978TP5ZIGlGTw8QRvaOcLD9/nWg/0ZeiqEs+QnAemOiL2gwTf6W5Exs/tNp4vC4KP5gJM6MxD+ePGGQljDMzSGMK2kfrvFmdeXPNDSTe4v925mFH9XtlzZHEsE97MlBsuRgXbBj0aUbQak6m1USmqUfzN0+eut9RTRAX"),o(g,"title","Open in our Online Editor"),zt.a=null,o(ut,"class","language-js"),o(S,"class","remark-container tip"),o(K,"class","remark-container__title"),o(f,"target","_blank"),o(f,"href","/editor#eNrFVO9r2zAQ/VduYlAbjJtkDIZhjHQbWz+sjCXQlblQ1T7H3hTJyPLSEPy/72THrp06az4M9sFGv969d+902jGe5yzYsUjFyAIWCV4U8GU7z3PAB4MyLoDGu1CGxn6RRm5wYbg2X/kKHbfZMRpNqSV0G3a1akAVqzyWKBGjLljwY8eymAVTj0m+tow1hHlMJUmB5jsLJu34hsbVrcdyijdANsEum8lAeMffibeTTr3S2SqTXMBbWGZr9InkSm0ct85M5Vtal6UQdiqVeT9cqQPIC0yUfsy7+Z+fwzVCQfERONSRVAImRTBEA+r+J0YGMgkhs5sh8xtc7u9Zc7+V5q+wJm5E9QgWCqKUS7ICjOoCgZJiCzxJiIA2Um76lAMam+0Ncu1MJ5PJYfTPSNI3CLGSZwaaKu9T8aBQcK9MSqR7V4iXy7gDh6xVTxsaEyq01agk2mO1DwUVu6/sRavs0edHD55mniVWXJP/E19NqlW5Suv1nsQO/5vrjN8L9OoTrYmbTAjgwuZG8lK1kf1A47m1kQ7Vd9bOhtZWw7b5VGaHDfNNbQo/SjMRa5TOHmkWOY/Qa2dLusu+oZ9z12oJ4OVueGc+UHzHre7cMZgtYwOpL8Jzx/dZNYg2xVFQX6g76HmPPbCA7PDYlgWvJl0jL3GdC4ozaOhBD8+LX5fJPC7F3xp5rA//udtz6omtKqF+bmxzSZi+eXck/ZBsEuVajhAcHgzNRWkohz3NlbpzfeuNY58a1zsRdoPFaTh3pEDWwnliUI85aF/spjazg9p8lASZr/B/V+aaHrqzwhZHA7Efr8nAselk3LDhodcnHJqdEml2JNKxpnmuJrfVH0qtxXQ="),o(f,"title","Open in our Online Editor"),Jt.a=null,o(rt,"class","language-js"),o(w,"class","remark-container tip"),o(pt,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrFVO9rnEAQ/VeWoVAXRDxDaRFK8Ewo+dAf9A7SkAvcomNO4q2yu9Ic4v/e9byTrKixpZAP3u06M2/evtlnBawowK8gymMEH6KMSUm+HoKiIPiskMeS6HW14RvVPJFApnClmFA/2CNatI0ogaoUnHSB5m3dFtVQ25DkWYxCgn9fQRqDv7CBs33T8VgCNuRJIlH9At89r+/0un6wodB4RmULdtNuDOJd/458s+nYq3SPAflM1vrf0R2u9Fksz/UubLLw9PORnrOWs7LCiaxP1NTsS5n21fqZ/5ZOtEuzWCC32tBGrQoWoX3erfVBHKV/rO2RvZPKlRYukNaRJvXJu6pweqH2xZLWWzoTKJwCCg2gV/ktMckFDvI7hWbyewEUTgH9E7/vYkLHXspf8TWAwznA4/yp4SMbnsH3XG2QA/gXbmeONe6LTF8xwySGLwL5dJMEcZlNmCPnJ1HPt/RF7/93iQOB5JCX5GhhonaMa6tcjo4vzLNyzwca9BM3alkqfYZTm2/5ljqNNhYvs4zaM8vuUM6rowMDaiQMEoViSMHmK9jOxuvN5prrkuAR33oytzum3stmOILo7uMzMRRbuMOCmUkfZiR5c5C8EaQx07w2k4f6D1HXgHI="),o(x,"title","Open in our Online Editor"),tn.a=null,o(kt,"class","language-js"),o(A,"class","remark-container tip"),o(C,"class","remark-container tip"),o(b,"class","remark-container warning")},m(t,a){s(t,k,a),s(t,St,a),s(t,M,a),s(t,wt,a),s(t,B,a),s(t,At,a),s(t,H,a),s(t,Ct,a),s(t,P,a),s(t,bt,a),s(t,j,a),s(t,Mt,a),s(t,_,a),Bt.m(na,_),s(t,Ht,a),s(t,D,a),s(t,Pt,a),s(t,L,a),s(t,jt,a),s(t,O,a),s(t,_t,a),s(t,E,a),s(t,Dt,a),s(t,h,a),u(h,R),u(h,$),xt(N,$,null),u($,d),u($,it),Lt.m(aa,it),s(t,Ot,a),s(t,V,a),s(t,Et,a),s(t,Y,a),s(t,Rt,a),s(t,I,a),s(t,$t,a),s(t,v,a),u(v,X),u(v,G),xt(z,G,null),u(G,m),u(G,lt),Nt.m(sa,lt),s(t,Vt,a),s(t,q,a),s(t,Yt,a),s(t,Q,a),s(t,It,a),s(t,T,a),s(t,Xt,a),s(t,y,a),s(t,Gt,a),s(t,S,a),u(S,W),u(S,J),xt(F,J,null),u(J,g),u(J,ut),zt.m(ea,ut),s(t,qt,a),s(t,U,a),s(t,Qt,a),s(t,Z,a),s(t,Wt,a),s(t,w,a),u(w,K),u(w,tt),xt(nt,tt,null),u(tt,f),u(tt,rt),Jt.m(pa,rt),s(t,Ft,a),s(t,at,a),s(t,Ut,a),s(t,st,a),s(t,Zt,a),s(t,et,a),s(t,Kt,a),s(t,A,a),u(A,pt),u(A,ot),xt(ct,ot,null),u(ot,x),u(ot,kt),tn.m(oa,kt),s(t,nn,a),s(t,C,a),s(t,an,a),s(t,b,a),sn=!0},p:ia,i(t){sn||(ht(N.$$.fragment,t),ht(z.$$.fragment,t),ht(F.$$.fragment,t),ht(nt.$$.fragment,t),ht(ct.$$.fragment,t),sn=!0)},o(t){vt(N.$$.fragment,t),vt(z.$$.fragment,t),vt(F.$$.fragment,t),vt(nt.$$.fragment,t),vt(ct.$$.fragment,t),sn=!1},d(t){t&&(n(k),n(St),n(M),n(wt),n(B),n(At),n(H),n(Ct),n(P),n(bt),n(j),n(Mt),n(_),n(Ht),n(D),n(Pt),n(L),n(jt),n(O),n(_t),n(E),n(Dt),n(h),n(Ot),n(V),n(Et),n(Y),n(Rt),n(I),n($t),n(v),n(Vt),n(q),n(Yt),n(Q),n(It),n(T),n(Xt),n(y),n(Gt),n(S),n(qt),n(U),n(Qt),n(Z),n(Wt),n(w),n(Ft),n(at),n(Ut),n(st),n(Zt),n(et),n(Kt),n(A),n(nn),n(C),n(an),n(b)),Tt(N),Tt(z),Tt(F),Tt(nt),Tt(ct)}}}class ga extends la{constructor(k){super(),ua(this,k,null,ra,ca,{})}}export{ga as component};
