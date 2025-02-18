import{s as dn,n as hn}from"../chunks/scheduler.B0TnBjPs.js";import{S as kn,i as fn,e as s,s as l,c as gt,H as at,a as o,g as p,b as c,d,f as vt,n as st,h as e,o as i,j as a,m as xt,p as u,t as wt,k as Tt,l as At}from"../chunks/index.BXVnRmkj.js";import{V as Mt}from"../chunks/ViewApp.qg7AIhJt.js";function mn(an){let m,de="1. Page Constants",yt,A,he="This tutorial will teach you what page constants in BagaWork are, and show you what we can use them for, and how.",Et,M,ke="The problem",_t,y,fe="To understand the usefulness of page constants, let's first go though a page in app that could benefit from using a page constant, but that doesn't use it. Such a page is the page shown below.",Ct,h,E,g,me="Open in Online Editor",ot,Pt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> InfoPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,pt,Nt,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is friends with Arthur, and he even saved Arthur's life once.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Ht,_,ge="As you can see, the name <code>Arthur</code> is written at multiple places. This works, but there are some drawbacks with writing the same value like this one over and over again at multiple different places like this:",Lt,C,ve="<li>If we don&#39;t know how <code>Arthur</code> is spelled and spell it wrong (for example spell it as <code>Artur</code>), then when we later learn that we have spelled it wrong we need to correct the spelling at multiple places in our code, which is a lot of work</li> <li>If <code>Arthur</code> changes name in the future, we need to change the name at multiple places in our code, which is a lot of work</li>",bt,P,xe="To repeatedly write the same value at multiple places in the code (as <code>Arthur</code> in the example above) is known as hardcoding a value.",It,N,we="The solution",St,H,Te="Luckily, there exists a solution to the problem of hardcoding values, namely to use constants instead. With a constant:",jt,L,Ae="<li>We would write the value (the name <code>Arthur</code>) at only one place in our code, where we place it in a constant</li> <li>We would refer to that constant at each place in our code we need to use the name</li>",Gt,b,Me="This way, if we spell the name wrong, or if <code>Arthur</code> changes name in the future, we just need to change the name at one place in our code (where we created the constant and placed the name in it).",$t,I,ye="How to create a page constant",Ut,S,Ee="Directly in your <code>Page</code> class you can create constants that are accessible within that <code>Page</code>. We call these constansts for <em>page constants</em>. In the code below you find an example of how to create the following page constants:",Ot,j,_e="<li><code>NAME</code> will have the string value <code>Arthur</code></li> <li><code>COUNTRY_NAME</code> will have the string value <code>Sweden</code></li> <li><code>BEST_DATE</code> will have the string value <code>2023-09-15</code></li>",Dt,G,Rt,pn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sweden</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">BEST_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page constants as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Wt,x,Ce='<div class="remark-container__title">Naming convetion</div><p>In Javascript, there exists different naming conventions for different type of values:</p><ul><li>Classes <code>AreNamedLikeThis</code></li> <li>Methods <code>areNamedLikeThis()</code></li> <li>Variables <code>areNamedLikeThis</code></li> <li>Constants <code>ARE_NAMED_LIKE_THIS</code></li> </ul><p>Although it&#39;s not strictly required to follow this naming convention, all good programmers do, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.</p>',Bt,$,Pe="How to use constants",Vt,U,Ne="In BagaWork, everything you create in your <code>Page</code> class (constants, variables and methods) are accessible in a special variable called <code>p</code> (short for <em>page</em>). To retrieve the value of a constant, you would simply write <code>p.THE_NAME_OF_THE_CONSTANT</code>, for example <code>p.COUNTRY_NAME</code>.",Qt,O,He="To display the title on the <code>InfoPage</code> we had before, the following code were used:",Kt,D,Yt,ln='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Jt,R,Le="With the <code>NAME</code> constant we have now, we can instead write:",qt,W,zt,cn='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Ft,B,be="This looks a bit strange, but let&#39;s go through how it works. Remember, in JavaScript, when creating a string with two <code>`</code> characters, all characters between them will be interpreted as text part of the string. BUT, in a string created with two <code>`</code> characters, we can also write <code>${SOMETHING}</code>, where we want the computer to replace that entire thing with the value we get from <code>SOMETHING</code>. So <code>${p.NAME}</code> will be replaced with <code>Arthur</code> in this case.",Zt,V,Ie="So, at all places in our code where <code>Arthur</code> is written, we will instead use <code>${p.NAME}</code>.",Xt,w,Se="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants in that page. For example, <code>PageA</code> cannot access the page constants in <code>PageB</code>. To create a constant all pages can access, you should instead create an <code>App</code> constant, which next tutorial is about.</p>",te,Q,je="The final solution",ee,K,Ge="So, here&#39;s the code for the page using a page constant instead of harding the name at multiple places. Notice how easy it is to change name to <code>Alice</code> in the code; you just need to change it at the place where we create the <code>NAME</code> constant!",ne,k,Y,v,$e="Open in Online Editor",lt,ae,un=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoApp</span> <span class="token keyword">extends</span> <span class="token class-name">App</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createStartPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> InfoPage
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ct,se,rn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is good friends with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, and he even saved </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">'s life once.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,oe,J,Ue="Exercises",pe,q,Oe="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",le,r,z,De="Exercise 1",it,Re='The code in <a href="/editor#eNq1UmGL2kAQ/SvDUqjCEtRyUAKlxDs5LGhLT2iPetQlmWjoOht2J3hB8t+7Ma1nctpeP/RDwiYzb968t28vVJ6LcC9ik6AIRayVczArozwHfGSkxIE/75e05PqJLSrGO1aWP6k19vpNhS1yYQnu0DfwLHMuM1Q31NWqAVeikiI1OkHrRPhtL7JEhEMpSG1r5sNMIYVJU4f8VYSD3+d7f64epMj9vBayGTZtPloCnu1xFFN/HNVEt5P54vs8mk3gHaw++EUcjA0lq7bc2yLrCv1sdi6IN5lOLFKvKS154VkC9q/e6gaVhVf7PHjiqOSqH2hMudeXpwh5Bj6FjckReJM58Fu5WkKaUQKlKWCHWsvu8AA+Uoyg1iojCaawEBtiWwIhet0eF8C1/6NihpkhLHMkKiE11rMgJMgq0y54+Yo3BsgwaGQoHCRmR893evm0MTqGXeY26CTMurh+K0dSPIpwNPABKUX4ZnAMxwK3ufb31QpJKxeR+zFNo6TQfDkU/3jnd7mK8ZyiyOLhtg4h9R4rguHb96snK9rIa6OLLZ0h6DYueVwwG/pFMzcnI//Se4/uD83nza5kY+WoY+WEGG20xv9v5JeN4teHBFsfb7xsYUvrcHDS165cXaqMLmJGVxdYO2Y9VD8B6GfnMg==" target="_blank">this BagaWork project</a> contains a page that looks like this:',F,ut,We="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in a page constant, and the GUI code refers to that page constant each needs to display the name. All seems good!",rt,Be="However, to improve security and anonymity among the agents, it has now been decided that one should never refer to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",dt,Ve="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",Z,ce,f,X,Qe="Exercise 2",ht,Ke='The code in <a href="/editor#eNq1UlFr2zAQ/iuHXpaAMElGYfhlOO0YGWQbS2ErTSHCPsdiyslIZ1IT/N8nx1sXu8nWh+3BRtLd9919391BqLIU8UGkNkMRi9Qo72FZJ2UJ+MhImYdwPqxpze2XOlSMK1aOP6stjsZdhB1y5QhWGBJ4qb3XltqENtp04EY0UuTWZOi8iO8PQmcinkpBatdWPnIKKWyee+RvIp78Ot+Fc/MgRRn4esiObNFdegKe9fEkpr0M1Lyv9FDHF7v3UVpokzmkURda820giTj8RpsbVA4+hM49zC1lcjOODOY8GsvTZHkGuYDClghcaA8B7tvmck0Z1LaCPRojT3gj+EQpgtoqTRJs5SC1xK4GQgxiAiSC6/CiUoalJaxLJKohty4UQMiQlTY+enl3NxbIMhhkqDxkdk+9dl5ONEfPsNe+QC9hOcSNe3shxaOIZ5Mw8FrErydPw77FXWnCgHpD78058d8XeZJVhv/ZkFelSvGcosThcUbHpQv2KoLpm7eb31b0kdfWVDs6U2CYuOZ5xWzpZ5mP9oTyL7l36P+QfN7sRnZWzgZWviNGl2zx/xv5tVD86ri8Lmw2Xrawp3U6OcnrR64uRWYXMbOrC1UHZj00PwB1bdj9" target="_blank">this BagaWork project</a> is the same as in Exercise 1, but no page constant is used, so <code>James Bond</code> has been hardcoded at multiple places in the GUI code!',kt,Ye="Your task is to rewrite the code so <code>James Bond</code> is put in a page constant, and in the GUI code refer to that constant whenever it needs to display the name. When you have done that, change the value in the page constant to <code>007</code> instead. When you&#39;re done, it should look as shown below.",tt,ie,et,Je="That's it!",ue,nt,qe='Great work, now you have a basic understanding of what a page constant in BagaWork is 🥳 Next tutorial will be about using app constants in BagaWork, which are constants you can access from all your pages. So, when you&#39;re ready, continue with the tutorial <a href="../app-constants/">Programming 2. App Constants</a>.',re;return E=new Mt({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about Arthur\`),
			Space,
			Text.text(\`Arthur is a human.\`).left(),
			Space,
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.\`).left(),
			Space,
			Text.text(\`Ford Prefect is friends with Arthur, and he even saved Arthur's life once.\`).left(),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),Y=new Mt({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	NAME = \`Arthur\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about \${p.NAME}\`),
			Space,
			Text.text(\`\${p.NAME} is a human.\`).left(),
			Space,
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something \${p.NAME} learned.\`).left(),
			Space,
			Text.text(\`Ford Prefect is good friends with \${p.NAME}, and he even saved \${p.NAME}'s life once.\`).left(),
			Space,
		)
	}
	
}`,x:150,y:200}]}}}),F=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
	AGENT_NAME = \`James Bond\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Dear \${p.AGENT_NAME},\`).left(),
			Text,
			Text.text(\`I hope this message find you well, \${p.AGENT_NAME}. Once again, our contry needs you. Contact Moneypenny for the details.\`).left(),
			Text,
			Text.text(\`Do not let us down, \${p.AGENT_NAME}.\`).left(),
			Text,
			Text.text(\`Best wishes, M\`).left(),
		)
	}
	
}`,x:150,y:200}]}}}),Z=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
	AGENT_NAME = \`007\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Dear \${p.AGENT_NAME},\`).left(),
			Text,
			Text.text(\`I hope this message find you well, \${p.AGENT_NAME}. Once again, our country needs you. Contact Moneypenny for the details.\`).left(),
			Text,
			Text.text(\`Do not let us down, \${p.AGENT_NAME}.\`).left(),
			Text,
			Text.text(\`Best wishes, M\`).left(),
		)
	}
	
}`,x:150,y:200}]}}}),tt=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
	AGENT_NAME = \`007\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Dear \${p.AGENT_NAME},\`).left(),
			Text,
			Text.text(\`I hope this message find you well, \${p.AGENT_NAME}. Once again, our country needs you. Contact Moneypenny for the details.\`).left(),
			Text,
			Text.text(\`Do not let us down, \${p.AGENT_NAME}.\`).left(),
			Text,
			Text.text(\`Best wishes, M\`).left(),
		)
	}
	
}`,x:150,y:200}]}}}),{c(){m=s("h1"),m.textContent=de,yt=l(),A=s("p"),A.textContent=he,Et=l(),M=s("h2"),M.textContent=ke,_t=l(),y=s("p"),y.textContent=fe,Ct=l(),h=s("div"),gt(E.$$.fragment),g=s("a"),g.textContent=me,ot=s("pre"),Pt=new at(!1),pt=s("pre"),Nt=new at(!1),Ht=l(),_=s("p"),_.innerHTML=ge,Lt=l(),C=s("ul"),C.innerHTML=ve,bt=l(),P=s("p"),P.innerHTML=xe,It=l(),N=s("h2"),N.textContent=we,St=l(),H=s("p"),H.textContent=Te,jt=l(),L=s("ol"),L.innerHTML=Ae,Gt=l(),b=s("p"),b.innerHTML=Me,$t=l(),I=s("h2"),I.textContent=ye,Ut=l(),S=s("p"),S.innerHTML=Ee,Ot=l(),j=s("ul"),j.innerHTML=_e,Dt=l(),G=s("pre"),Rt=new at(!1),Wt=l(),x=s("div"),x.innerHTML=Ce,Bt=l(),$=s("h2"),$.textContent=Pe,Vt=l(),U=s("p"),U.innerHTML=Ne,Qt=l(),O=s("p"),O.innerHTML=He,Kt=l(),D=s("pre"),Yt=new at(!1),Jt=l(),R=s("p"),R.innerHTML=Le,qt=l(),W=s("pre"),zt=new at(!1),Ft=l(),B=s("p"),B.innerHTML=be,Zt=l(),V=s("p"),V.innerHTML=Ie,Xt=l(),w=s("div"),w.innerHTML=Se,te=l(),Q=s("h2"),Q.textContent=je,ee=l(),K=s("p"),K.innerHTML=Ge,ne=l(),k=s("div"),gt(Y.$$.fragment),v=s("a"),v.textContent=$e,lt=s("pre"),ae=new at(!1),ct=s("pre"),se=new at(!1),oe=l(),J=s("h2"),J.textContent=Ue,pe=l(),q=s("p"),q.textContent=Oe,le=l(),r=s("div"),z=s("div"),z.textContent=De,it=s("p"),it.innerHTML=Re,gt(F.$$.fragment),ut=s("p"),ut.innerHTML=We,rt=s("p"),rt.innerHTML=Be,dt=s("p"),dt.innerHTML=Ve,gt(Z.$$.fragment),ce=l(),f=s("div"),X=s("div"),X.textContent=Qe,ht=s("p"),ht.innerHTML=Ke,kt=s("p"),kt.innerHTML=Ye,gt(tt.$$.fragment),ie=l(),et=s("h2"),et.textContent=Je,ue=l(),nt=s("p"),nt.innerHTML=qe,this.h()},l(t){m=o(t,"H1",{"data-svelte-h":!0}),p(m)!=="svelte-54afj"&&(m.textContent=de),yt=c(t),A=o(t,"P",{"data-svelte-h":!0}),p(A)!=="svelte-t6ag9p"&&(A.textContent=he),Et=c(t),M=o(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-1p3x34e"&&(M.textContent=ke),_t=c(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-15ha144"&&(y.textContent=fe),Ct=c(t),h=o(t,"DIV",{class:!0});var n=d(h);vt(E.$$.fragment,n),g=o(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-196tls"&&(g.textContent=me),ot=o(n,"PRE",{class:!0});var ze=d(ot);Pt=st(ze,!1),ze.forEach(e),pt=o(n,"PRE",{class:!0});var Fe=d(pt);Nt=st(Fe,!1),Fe.forEach(e),n.forEach(e),Ht=c(t),_=o(t,"P",{"data-svelte-h":!0}),p(_)!=="svelte-cv3e1b"&&(_.innerHTML=ge),Lt=c(t),C=o(t,"UL",{"data-svelte-h":!0}),p(C)!=="svelte-15u1jnw"&&(C.innerHTML=ve),bt=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-4dljz4"&&(P.innerHTML=xe),It=c(t),N=o(t,"H2",{"data-svelte-h":!0}),p(N)!=="svelte-fem3ok"&&(N.textContent=we),St=c(t),H=o(t,"P",{"data-svelte-h":!0}),p(H)!=="svelte-ukth16"&&(H.textContent=Te),jt=c(t),L=o(t,"OL",{"data-svelte-h":!0}),p(L)!=="svelte-djzw8p"&&(L.innerHTML=Ae),Gt=c(t),b=o(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1j6er73"&&(b.innerHTML=Me),$t=c(t),I=o(t,"H2",{"data-svelte-h":!0}),p(I)!=="svelte-9gzrt3"&&(I.textContent=ye),Ut=c(t),S=o(t,"P",{"data-svelte-h":!0}),p(S)!=="svelte-zez8c7"&&(S.innerHTML=Ee),Ot=c(t),j=o(t,"UL",{"data-svelte-h":!0}),p(j)!=="svelte-1vl6rc"&&(j.innerHTML=_e),Dt=c(t),G=o(t,"PRE",{class:!0});var Ze=d(G);Rt=st(Ze,!1),Ze.forEach(e),Wt=c(t),x=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(x)!=="svelte-dmmtgb"&&(x.innerHTML=Ce),Bt=c(t),$=o(t,"H2",{"data-svelte-h":!0}),p($)!=="svelte-1gj2kh3"&&($.textContent=Pe),Vt=c(t),U=o(t,"P",{"data-svelte-h":!0}),p(U)!=="svelte-15bgvr3"&&(U.innerHTML=Ne),Qt=c(t),O=o(t,"P",{"data-svelte-h":!0}),p(O)!=="svelte-1gy51p"&&(O.innerHTML=He),Kt=c(t),D=o(t,"PRE",{class:!0});var Xe=d(D);Yt=st(Xe,!1),Xe.forEach(e),Jt=c(t),R=o(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-nqu0he"&&(R.innerHTML=Le),qt=c(t),W=o(t,"PRE",{class:!0});var tn=d(W);zt=st(tn,!1),tn.forEach(e),Ft=c(t),B=o(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-yzstjm"&&(B.innerHTML=be),Zt=c(t),V=o(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-17eu71c"&&(V.innerHTML=Ie),Xt=c(t),w=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(w)!=="svelte-5xeioa"&&(w.innerHTML=Se),te=c(t),Q=o(t,"H2",{"data-svelte-h":!0}),p(Q)!=="svelte-ti6j50"&&(Q.textContent=je),ee=c(t),K=o(t,"P",{"data-svelte-h":!0}),p(K)!=="svelte-12gt5tg"&&(K.innerHTML=Ge),ne=c(t),k=o(t,"DIV",{class:!0});var ft=d(k);vt(Y.$$.fragment,ft),v=o(ft,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(v)!=="svelte-15nz4me"&&(v.textContent=$e),lt=o(ft,"PRE",{class:!0});var en=d(lt);ae=st(en,!1),en.forEach(e),ct=o(ft,"PRE",{class:!0});var nn=d(ct);se=st(nn,!1),nn.forEach(e),ft.forEach(e),oe=c(t),J=o(t,"H2",{"data-svelte-h":!0}),p(J)!=="svelte-4opca7"&&(J.textContent=Ue),pe=c(t),q=o(t,"P",{"data-svelte-h":!0}),p(q)!=="svelte-fy3v6t"&&(q.textContent=Oe),le=c(t),r=o(t,"DIV",{class:!0});var T=d(r);z=o(T,"DIV",{class:!0,"data-svelte-h":!0}),p(z)!=="svelte-1kqyz2o"&&(z.textContent=De),it=o(T,"P",{"data-svelte-h":!0}),p(it)!=="svelte-17pejih"&&(it.innerHTML=Re),vt(F.$$.fragment,T),ut=o(T,"P",{"data-svelte-h":!0}),p(ut)!=="svelte-nu4ddp"&&(ut.innerHTML=We),rt=o(T,"P",{"data-svelte-h":!0}),p(rt)!=="svelte-1fh3zel"&&(rt.innerHTML=Be),dt=o(T,"P",{"data-svelte-h":!0}),p(dt)!=="svelte-m2hi2k"&&(dt.innerHTML=Ve),vt(Z.$$.fragment,T),T.forEach(e),ce=c(t),f=o(t,"DIV",{class:!0});var mt=d(f);X=o(mt,"DIV",{class:!0,"data-svelte-h":!0}),p(X)!=="svelte-i1p19j"&&(X.textContent=Qe),ht=o(mt,"P",{"data-svelte-h":!0}),p(ht)!=="svelte-1hs4wrh"&&(ht.innerHTML=Ke),kt=o(mt,"P",{"data-svelte-h":!0}),p(kt)!=="svelte-h6pdnx"&&(kt.innerHTML=Ye),vt(tt.$$.fragment,mt),mt.forEach(e),ie=c(t),et=o(t,"H2",{"data-svelte-h":!0}),p(et)!=="svelte-p2uhy5"&&(et.textContent=Je),ue=c(t),nt=o(t,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-vdhhxx"&&(nt.innerHTML=qe),this.h()},h(){i(g,"target","_blank"),i(g,"href","/editor#eNqVUsFqwzAM/RWhyxIwoRvsklsP2yjs0K3taRnUi5XGkNrBVpqWkH+fk3SDdYNtBxs/Se89yXaHsq4x7TC3ijDFvJLew8IUdl7XQEcmozyEc5eZjIeVO5JMK5aOl3JHUTxl2BE3zozUIT4E+4nTYy+wDjGP6UuHWmF6LbCwlSK3mMA390Hi034AF/4Pjb50fratT/JSV8qRiaZUxusgknDYou2gC/LNNgxzx2XjtrH4KFvVMifxA2mqBO1BQtnspUm2cVJRwdEfyOuSQBrfkgO2wAFluKlY78ME8NSQZ20N2AIedUFiLNgYfSDnA5JGwV04n7jUZpchtNKDt3sa8XkEqEg6Q+o/Xd1bp2DpqKCch8EKp8drbjWXZ9nJPbRDBzLg5YHUOXPloQrNgjU5/WIaf/kDAo/hqW9nAk+Y3sxm/Wv/DneJ5E4="),i(g,"title","Open in our Online Editor"),Pt.a=null,i(ot,"class","language-js"),Nt.a=null,i(pt,"class","language-js"),i(h,"class","remark-container tip"),Rt.a=null,i(G,"class","language-js"),i(x,"class","remark-container tip"),Yt.a=null,i(D,"class","language-js"),zt.a=null,i(W,"class","language-js"),i(w,"class","remark-container warning"),i(v,"target","_blank"),i(v,"href","/editor#eNqVUlFLwzAQ/itHEGyhlCn4UvBhD1MGKtNtT1ZobK5roEtKcl03Sv+7SYsbU0F9SLjv7r77viPpGK9rlnQs1wJZwvKKWwtzVehpXQPuCZWw4OIuVSn5kxvkhEvihhZ8g0E4VsggNUYNVJ/3yX7k9KyPWO1yliWvHZOCJVcRK3Ql0MxH8E3djzjKe3DUf5o+zuAWsqmhsjHZua37Rn419KJbG+elrIRBFYyllFZudkzuCjIvB/xdNwQXXR37+X0WRp+dy5rnGP3AOzaDtMChbLZcxVkYV1hQ8Af+qkTgyrZogDSQQylbVyS3bg94btCS1Ap0AQ+ywGhoWCu5Q2Md4krAzMUHKqXapAxabsHqLQ74tAhUyI1C8R9jd9oIWBgsMCe/20ZrAYWRw1u0ksrT+NGIc4Y7VGD5DsWpeGmhctZBqxx/0Q/PvkvE9u5X3EwidmDJ9WTSv/UfvuDwGA=="),i(v,"title","Open in our Online Editor"),ae.a=null,i(lt,"class","language-js"),se.a=null,i(ct,"class","language-js"),i(k,"class","remark-container tip"),i(z,"class","remark-container__title"),i(r,"class","remark-container exercise"),i(X,"class","remark-container__title"),i(f,"class","remark-container exercise")},m(t,n){a(t,m,n),a(t,yt,n),a(t,A,n),a(t,Et,n),a(t,M,n),a(t,_t,n),a(t,y,n),a(t,Ct,n),a(t,h,n),xt(E,h,null),u(h,g),u(h,ot),Pt.m(sn,ot),u(h,pt),Nt.m(on,pt),a(t,Ht,n),a(t,_,n),a(t,Lt,n),a(t,C,n),a(t,bt,n),a(t,P,n),a(t,It,n),a(t,N,n),a(t,St,n),a(t,H,n),a(t,jt,n),a(t,L,n),a(t,Gt,n),a(t,b,n),a(t,$t,n),a(t,I,n),a(t,Ut,n),a(t,S,n),a(t,Ot,n),a(t,j,n),a(t,Dt,n),a(t,G,n),Rt.m(pn,G),a(t,Wt,n),a(t,x,n),a(t,Bt,n),a(t,$,n),a(t,Vt,n),a(t,U,n),a(t,Qt,n),a(t,O,n),a(t,Kt,n),a(t,D,n),Yt.m(ln,D),a(t,Jt,n),a(t,R,n),a(t,qt,n),a(t,W,n),zt.m(cn,W),a(t,Ft,n),a(t,B,n),a(t,Zt,n),a(t,V,n),a(t,Xt,n),a(t,w,n),a(t,te,n),a(t,Q,n),a(t,ee,n),a(t,K,n),a(t,ne,n),a(t,k,n),xt(Y,k,null),u(k,v),u(k,lt),ae.m(un,lt),u(k,ct),se.m(rn,ct),a(t,oe,n),a(t,J,n),a(t,pe,n),a(t,q,n),a(t,le,n),a(t,r,n),u(r,z),u(r,it),xt(F,r,null),u(r,ut),u(r,rt),u(r,dt),xt(Z,r,null),a(t,ce,n),a(t,f,n),u(f,X),u(f,ht),u(f,kt),xt(tt,f,null),a(t,ie,n),a(t,et,n),a(t,ue,n),a(t,nt,n),re=!0},p:hn,i(t){re||(wt(E.$$.fragment,t),wt(Y.$$.fragment,t),wt(F.$$.fragment,t),wt(Z.$$.fragment,t),wt(tt.$$.fragment,t),re=!0)},o(t){Tt(E.$$.fragment,t),Tt(Y.$$.fragment,t),Tt(F.$$.fragment,t),Tt(Z.$$.fragment,t),Tt(tt.$$.fragment,t),re=!1},d(t){t&&(e(m),e(yt),e(A),e(Et),e(M),e(_t),e(y),e(Ct),e(h),e(Ht),e(_),e(Lt),e(C),e(bt),e(P),e(It),e(N),e(St),e(H),e(jt),e(L),e(Gt),e(b),e($t),e(I),e(Ut),e(S),e(Ot),e(j),e(Dt),e(G),e(Wt),e(x),e(Bt),e($),e(Vt),e(U),e(Qt),e(O),e(Kt),e(D),e(Jt),e(R),e(qt),e(W),e(Ft),e(B),e(Zt),e(V),e(Xt),e(w),e(te),e(Q),e(ee),e(K),e(ne),e(k),e(oe),e(J),e(pe),e(q),e(le),e(r),e(ce),e(f),e(ie),e(et),e(ue),e(nt)),At(E),At(Y),At(F),At(Z),At(tt)}}}class wn extends kn{constructor(m){super(),fn(this,m,null,mn,dn,{})}}export{wn as component};
