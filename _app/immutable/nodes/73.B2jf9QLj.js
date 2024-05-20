import{s as un,n as rn}from"../chunks/scheduler.DFPFbGJz.js";import{S as dn,i as hn,e as s,s as l,c as ft,H as gt,a as o,g as p,b as c,d,f as xt,n as mt,h as e,o as i,j as a,m as vt,p as u,t as wt,k as Tt,l as At}from"../chunks/index.CzDE4dZi.js";import{V as Mt}from"../chunks/ViewApp.C2MU7-ZI.js";function kn(an){let k,re="1. Page Constants",Et,A,de="This tutorial will teach you what page constants in Bagawork are, and show you what we can use them for, and how.",St,M,he="The problem",yt,E,ke="To understand the usefulness of page constants, let's first go though a page in app that could benefit from using a page constant, but that doesn't use it. Such a page is the page shown below.",Ct,x,S,f,fe="Open in Online Editor",at,Pt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is good friend with Arthur, and he even saved Arthur's life.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,_t,y,ge="As you can see on the page, the name <code>Arthur</code> is written at multiple places. This works, but there are some drawbacks with writing the same value over and over again at multiple different places like this:",Nt,C,xe="<li>If we don&#39;t know how <code>Arthur</code> is spelled and spell it wrong (for example spell it as <code>Artur</code>), then when we later learn that we have spelled it wrong we need to correct the spelling at multiple places in our code, which is a lot of work</li> <li>If <code>Arthur</code> changes name in the future, we need to change the name at multiple places in our code, which is a lot of work</li>",Ht,P,me="To repeatedly write the same value at multiple places in the code (as <code>Arthur</code> in the example above) is known as hardcoding values.",bt,_,ve="The solution",Lt,N,we="Luckilly, there exists a solution to the problem of hardcoding values, namely to use constants instead. With a constant:",Bt,H,Te="<li>We would write the value (the name <code>Arthur</code>) at one place in our code, and place it in a constant</li> <li>We would refer to that constant at each place in our code we need to use the name</li>",Gt,b,Ae="This way, if we spell the name wrong, or if <code>Arthur</code> changes name in the future, we just need to change the name at one place in our code (where we created the constant and placed the name in it).",It,L,Me="How to create a page constant",jt,B,Ee="Directly in your <code>Page</code> class you can create constants that are accessible within that <code>Page</code>. We call these constansts for <em>page constants</em>. In the code below you find an example of how to create the following page constants:",Ut,G,Se="<li><code>NAME</code> will have the string value <code>Arthur</code></li> <li><code>COUNTRY_NAME</code> will have the string value <code>Sweden</code></li> <li><code>BEST_DATE</code> will have the string value <code>2023-09-15</code></li>",Rt,I,Ot,on=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">COUNTRY_NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Sweden</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token constant">BEST_DATE</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">2023-09-15</span><span class="token template-punctuation string">&#96;</span></span>
	<span class="token comment">// You can create as many page constants as you want.</span>
	
	<span class="token comment">// And then you have createGui() as usual.</span>
	
<span class="token punctuation">&#125;</span></code>`,Vt,m,ye='<div class="remark-container__title">Naming convetion</div><p>In Javascript, there exists different naming conventions for different type of values:</p><ul><li>Classes <code>AreNamedLikeThis</code></li> <li>Methods <code>areNamedLikeThis()</code></li> <li>Variables <code>areNamedLikeThis</code></li> <li>Constants <code>ARE_NAMED_LIKE_THIS</code></li> </ul><p>Although it&#39;s not strictly required to follow this naming convention, all good programmers do follow it, because by following a naming convention it is easier for other programmers to read your code, so we recommend you to do the same.</p>',$t,j,Ce="How to use constants",Dt,U,Pe="In Bagawork, everything you create in your <code>Page</code> class (constants, variables and methods) are accessible in a special variable called <code>p</code> (short for <em>page</em>). To retrieve the value of a constant, you would simply write <code>p.THE_NAME_OF_THE_CONSTANT</code>, for example <code>p.COUNTRY_NAME</code>.",Wt,R,_e="To display the title on the <code>InfoPage</code> we had before, the following code were used:",Yt,O,Zt,pn='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about Arthur</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',Ft,V,Ne="With the <code>NAME</code> constant we have now, we can instead write:",Qt,$,qt,ln='<code class="language-js">Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span></code>',zt,D,He="This looks a bit strange, but let&#39;s go through how it works. Remember, in JavaScript, when creating a string with two <code>`</code> characters, all characters between them will be interpreted as text part of the string. BUT, in a string created with two <code>`</code> characters, we can also write <code>${SOMETHING}</code>, where we want the computer to replace that entire thing with the value we get from <code>SOMETHING</code>. So <code>${p.NAME}</code> will be replaced with <code>Arthur</code> in this case.",Jt,W,be="So, at all places in our code where <code>Arthur</code> is written, we will instead use <code>${p.NAME}</code>.",Kt,v,Le="<p>In a <code>Page</code>, you can only access the <code>Page</code> constants created on that page. For example, <code>PageA</code> cannnot access the page constants in <code>PageB</code>. To create a constant all pages can access, you should instead create an <code>App</code> constant, which next tutorial is about.</p>",Xt,Y,Be="The final solution",te,Z,Ge="So, here&#39;s the code for the page using a constant, instead of harding the name at multiple places. Notice how easy it is to change name to <code>Alice</code> in the code; you just need to change it at the place where we create the <code>NAME</code> constant!",ee,w,F,g,Ie="Open in Online Editor",st,ne,cn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">InfoPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token constant">NAME</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Arthur</span><span class="token template-punctuation string">&#96;</span></span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Rows<span class="token punctuation">.</span><span class="token function">children</span><span class="token punctuation">(</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Info about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> is a human.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">The answer to the "Ultimate Question of Life, the Universe, and Everything" was something </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string"> learned.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Text<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Ford Prefect is good friend with </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">, and he even saved </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>p<span class="token punctuation">.</span><span class="token constant">NAME</span><span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">'s life.</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">left</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			Space<span class="token punctuation">,</span>
		<span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,ae,Q,je="Exercises",se,q,Ue="Complete the exercises below to see if you have fully mastered what has been taught in this tutorial.",oe,r,z,Re="Exercise 1",ot,Oe='The code in <a href="/editor#eNq1UmGL2kAQ/SvDUqjCEtRyUAKlxDs5LGhLT2iPetQlmWjoOht2J3hB8t+7Ma1nctpeP/RDwiYzb968t28vVJ6LcC9ik6AIRayVczArozwHfGSkxIE/75e05PqJLSrGO1aWP6k19vpNhS1yYQnu0DfwLHMuM1Q31NWqAVeikiI1OkHrRPhtL7JEhEMpSG1r5sNMIYVJU4f8VYSD3+d7f64epMj9vBayGTZtPloCnu1xFFN/HNVEt5P54vs8mk3gHaw++EUcjA0lq7bc2yLrCv1sdi6IN5lOLFKvKS154VkC9q/e6gaVhVf7PHjiqOSqH2hMudeXpwh5Bj6FjckReJM58Fu5WkKaUQKlKWCHWsvu8AA+Uoyg1iojCaawEBtiWwIhet0eF8C1/6NihpkhLHMkKiE11rMgJMgq0y54+Yo3BsgwaGQoHCRmR893evm0MTqGXeY26CTMurh+K0dSPIpwNPABKUX4ZnAMxwK3ufb31QpJKxeR+zFNo6TQfDkU/3jnd7mK8ZyiyOLhtg4h9R4rguHb96snK9rIa6OLLZ0h6DYueVwwG/pFMzcnI//Se4/uD83nza5kY+WoY+WEGG20xv9v5JeN4teHBFsfb7xsYUvrcHDS165cXaqMLmJGVxdYO2Y9VD8B6GfnMg==" target="_blank">this BagaWork project</a> contains a page that looks like this:',rt,J,pt,Ve="As you can see, the page&#39;s GUI contains the name <code>James Bond</code> at multiple places. This name is currently stored in a page constant, and the GUI code refers to that page constant each needs to display the name. All seems good!",lt,$e="However, to improve security and anonymousity among the agents, it has now been decided that one should never referr to the agents by name, but only by their code numbers, which for <code>James Bond</code> is <code>007</code>.",ct,De="Change the code so the GUI displays <code>007</code> instead of <code>James Bond</code>. When you&#39;re done, it should look as shown below.",dt,K,pe,h,X,We="Exercise 2",it,Ye='The code in <a href="/editor#eNq1UlFr2zAQ/iuHXpaAMElGYfhlOO0YGWQbS2ErTSHCPsdiyslIZ1IT/N8nx1sXu8nWh+3BRtLd9919391BqLIU8UGkNkMRi9Qo72FZJ2UJ+MhImYdwPqxpze2XOlSMK1aOP6stjsZdhB1y5QhWGBJ4qb3XltqENtp04EY0UuTWZOi8iO8PQmcinkpBatdWPnIKKWyee+RvIp78Ot+Fc/MgRRn4esiObNFdegKe9fEkpr0M1Lyv9FDHF7v3UVpokzmkURda820giTj8RpsbVA4+hM49zC1lcjOODOY8GsvTZHkGuYDClghcaA8B7tvmck0Z1LaCPRojT3gj+EQpgtoqTRJs5SC1xK4GQgxiAiSC6/CiUoalJaxLJKohty4UQMiQlTY+enl3NxbIMhhkqDxkdk+9dl5ONEfPsNe+QC9hOcSNe3shxaOIZ5Mw8FrErydPw77FXWnCgHpD78058d8XeZJVhv/ZkFelSvGcosThcUbHpQv2KoLpm7eb31b0kdfWVDs6U2CYuOZ5xWzpZ5mP9oTyL7l36P+QfN7sRnZWzgZWviNGl2zx/xv5tVD86ri8Lmw2Xrawp3U6OcnrR64uRWYXMbOrC1UHZj00PwB1bdj9" target="_blank">this BagaWork project</a> is the same as in the <code>Exercise 1</code>, but no page constant is used, so <code>James Bond</code> has been hardcoded at multiple places in the GUI code!',ut,Ze="Your task is to rewrite the code so <code>James Bond</code> is put in a page constant, and in the GUI code refer to that constant whenever it needs to display the name. When you have done that, change the value in the page constant to <code>007</code> instead. When you&#39;re done, it should look as shown below.",ht,tt,le,et,Fe="That's it!",ce,nt,Qe="Great work, now you have a basic understanding of what a page constant in Bagawork is 🥳 Next tutorial will be about using app constants in Bagawork, which are constants you can access from all your pages.",ie;return S=new Mt({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about Arthur\`),
			Space,
			Text.text(\`Arthur is a human.\`).left(),
			Space.size(0.05),
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something Arthur learned.\`).left(),
			Space.size(0.05),
			Text.text(\`Ford Prefect is good friend with Arthur, and he even saved Arthur's life.\`).left(),
			Space,
		)
	}
	
}`,x:155,y:333}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),F=new Mt({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return InfoPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class InfoPage extends Page{
	
	NAME = \`Arthur\`
	
	createGui(){
		return Rows.children(
			Text.text(\`Info about \${p.NAME}\`),
			Space,
			Text.text(\`\${p.NAME} is a human.\`).left(),
			Space.size(0.05),
			Text.text(\`The answer to the "Ultimate Question of Life, the Universe, and Everything" was something \${p.NAME} learned.\`).left(),
			Space.size(0.05),
			Text.text(\`Ford Prefect is good friend with \${p.NAME}, and he even saved \${p.NAME}'s life.\`).left(),
			Space,
		)
	}
	
}`,x:155,y:333}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),J=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
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
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),K=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
	AGENT_NAME = \`007\`
	
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
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),tt=new Mt({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return SecretMissionPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class SecretMissionPage extends Page{
	
	AGENT_NAME = \`007\`
	
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
	
}`,x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Are you older than 18?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`),
				Space,
				Button.text(\`Yes\`),
				Space,
			),
		)
	}
	
}`},{id:2,code:`class EnterAgePage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`What's your age?\`),
			Space,
			Button.text(\`10\`),
			Button.text(\`15\`),
			Button.text(\`20\`),
			Button.text(\`25\`),
			Space,
		)
	}
	
}`}]}}}),{c(){k=s("h1"),k.textContent=re,Et=l(),A=s("p"),A.textContent=de,St=l(),M=s("h2"),M.textContent=he,yt=l(),E=s("p"),E.textContent=ke,Ct=l(),x=s("div"),ft(S.$$.fragment),f=s("a"),f.textContent=fe,at=s("pre"),Pt=new gt(!1),_t=l(),y=s("p"),y.innerHTML=ge,Nt=l(),C=s("ul"),C.innerHTML=xe,Ht=l(),P=s("p"),P.innerHTML=me,bt=l(),_=s("h2"),_.textContent=ve,Lt=l(),N=s("p"),N.textContent=we,Bt=l(),H=s("ol"),H.innerHTML=Te,Gt=l(),b=s("p"),b.innerHTML=Ae,It=l(),L=s("h2"),L.textContent=Me,jt=l(),B=s("p"),B.innerHTML=Ee,Ut=l(),G=s("ul"),G.innerHTML=Se,Rt=l(),I=s("pre"),Ot=new gt(!1),Vt=l(),m=s("div"),m.innerHTML=ye,$t=l(),j=s("h2"),j.textContent=Ce,Dt=l(),U=s("p"),U.innerHTML=Pe,Wt=l(),R=s("p"),R.innerHTML=_e,Yt=l(),O=s("pre"),Zt=new gt(!1),Ft=l(),V=s("p"),V.innerHTML=Ne,Qt=l(),$=s("pre"),qt=new gt(!1),zt=l(),D=s("p"),D.innerHTML=He,Jt=l(),W=s("p"),W.innerHTML=be,Kt=l(),v=s("div"),v.innerHTML=Le,Xt=l(),Y=s("h2"),Y.textContent=Be,te=l(),Z=s("p"),Z.innerHTML=Ge,ee=l(),w=s("div"),ft(F.$$.fragment),g=s("a"),g.textContent=Ie,st=s("pre"),ne=new gt(!1),ae=l(),Q=s("h2"),Q.textContent=je,se=l(),q=s("p"),q.textContent=Ue,oe=l(),r=s("div"),z=s("div"),z.textContent=Re,ot=s("p"),ot.innerHTML=Oe,rt=s("div"),ft(J.$$.fragment),pt=s("p"),pt.innerHTML=Ve,lt=s("p"),lt.innerHTML=$e,ct=s("p"),ct.innerHTML=De,dt=s("div"),ft(K.$$.fragment),pe=l(),h=s("div"),X=s("div"),X.textContent=We,it=s("p"),it.innerHTML=Ye,ut=s("p"),ut.innerHTML=Ze,ht=s("div"),ft(tt.$$.fragment),le=l(),et=s("h2"),et.textContent=Fe,ce=l(),nt=s("p"),nt.textContent=Qe,this.h()},l(t){k=o(t,"H1",{"data-svelte-h":!0}),p(k)!=="svelte-54afj"&&(k.textContent=re),Et=c(t),A=o(t,"P",{"data-svelte-h":!0}),p(A)!=="svelte-399et9"&&(A.textContent=de),St=c(t),M=o(t,"H2",{"data-svelte-h":!0}),p(M)!=="svelte-1p3x34e"&&(M.textContent=he),yt=c(t),E=o(t,"P",{"data-svelte-h":!0}),p(E)!=="svelte-15ha144"&&(E.textContent=ke),Ct=c(t),x=o(t,"DIV",{});var n=d(x);xt(S.$$.fragment,n),f=o(n,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(f)!=="svelte-aj5dzm"&&(f.textContent=fe),at=o(n,"PRE",{class:!0});var qe=d(at);Pt=mt(qe,!1),qe.forEach(e),n.forEach(e),_t=c(t),y=o(t,"P",{"data-svelte-h":!0}),p(y)!=="svelte-6fq0g3"&&(y.innerHTML=ge),Nt=c(t),C=o(t,"UL",{"data-svelte-h":!0}),p(C)!=="svelte-15u1jnw"&&(C.innerHTML=xe),Ht=c(t),P=o(t,"P",{"data-svelte-h":!0}),p(P)!=="svelte-oa94kc"&&(P.innerHTML=me),bt=c(t),_=o(t,"H2",{"data-svelte-h":!0}),p(_)!=="svelte-fem3ok"&&(_.textContent=ve),Lt=c(t),N=o(t,"P",{"data-svelte-h":!0}),p(N)!=="svelte-1i9hjhy"&&(N.textContent=we),Bt=c(t),H=o(t,"OL",{"data-svelte-h":!0}),p(H)!=="svelte-h06c7d"&&(H.innerHTML=Te),Gt=c(t),b=o(t,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1j6er73"&&(b.innerHTML=Ae),It=c(t),L=o(t,"H2",{"data-svelte-h":!0}),p(L)!=="svelte-9gzrt3"&&(L.textContent=Me),jt=c(t),B=o(t,"P",{"data-svelte-h":!0}),p(B)!=="svelte-zez8c7"&&(B.innerHTML=Ee),Ut=c(t),G=o(t,"UL",{"data-svelte-h":!0}),p(G)!=="svelte-1vl6rc"&&(G.innerHTML=Se),Rt=c(t),I=o(t,"PRE",{class:!0});var ze=d(I);Ot=mt(ze,!1),ze.forEach(e),Vt=c(t),m=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(m)!=="svelte-8xgya5"&&(m.innerHTML=ye),$t=c(t),j=o(t,"H2",{"data-svelte-h":!0}),p(j)!=="svelte-1gj2kh3"&&(j.textContent=Ce),Dt=c(t),U=o(t,"P",{"data-svelte-h":!0}),p(U)!=="svelte-1677s9r"&&(U.innerHTML=Pe),Wt=c(t),R=o(t,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1gy51p"&&(R.innerHTML=_e),Yt=c(t),O=o(t,"PRE",{class:!0});var Je=d(O);Zt=mt(Je,!1),Je.forEach(e),Ft=c(t),V=o(t,"P",{"data-svelte-h":!0}),p(V)!=="svelte-nqu0he"&&(V.innerHTML=Ne),Qt=c(t),$=o(t,"PRE",{class:!0});var Ke=d($);qt=mt(Ke,!1),Ke.forEach(e),zt=c(t),D=o(t,"P",{"data-svelte-h":!0}),p(D)!=="svelte-yzstjm"&&(D.innerHTML=He),Jt=c(t),W=o(t,"P",{"data-svelte-h":!0}),p(W)!=="svelte-17eu71c"&&(W.innerHTML=be),Kt=c(t),v=o(t,"DIV",{class:!0,"data-svelte-h":!0}),p(v)!=="svelte-tlwsji"&&(v.innerHTML=Le),Xt=c(t),Y=o(t,"H2",{"data-svelte-h":!0}),p(Y)!=="svelte-ti6j50"&&(Y.textContent=Be),te=c(t),Z=o(t,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-13sfmmz"&&(Z.innerHTML=Ge),ee=c(t),w=o(t,"DIV",{});var ue=d(w);xt(F.$$.fragment,ue),g=o(ue,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),p(g)!=="svelte-jbaiig"&&(g.textContent=Ie),st=o(ue,"PRE",{class:!0});var Xe=d(st);ne=mt(Xe,!1),Xe.forEach(e),ue.forEach(e),ae=c(t),Q=o(t,"H2",{"data-svelte-h":!0}),p(Q)!=="svelte-4opca7"&&(Q.textContent=je),se=c(t),q=o(t,"P",{"data-svelte-h":!0}),p(q)!=="svelte-fy3v6t"&&(q.textContent=Ue),oe=c(t),r=o(t,"DIV",{class:!0});var T=d(r);z=o(T,"DIV",{class:!0,"data-svelte-h":!0}),p(z)!=="svelte-1kqyz2o"&&(z.textContent=Re),ot=o(T,"P",{"data-svelte-h":!0}),p(ot)!=="svelte-17pejih"&&(ot.innerHTML=Oe),rt=o(T,"DIV",{});var tn=d(rt);xt(J.$$.fragment,tn),tn.forEach(e),pt=o(T,"P",{"data-svelte-h":!0}),p(pt)!=="svelte-nu4ddp"&&(pt.innerHTML=Ve),lt=o(T,"P",{"data-svelte-h":!0}),p(lt)!=="svelte-1gn3x64"&&(lt.innerHTML=$e),ct=o(T,"P",{"data-svelte-h":!0}),p(ct)!=="svelte-m2hi2k"&&(ct.innerHTML=De),dt=o(T,"DIV",{});var en=d(dt);xt(K.$$.fragment,en),en.forEach(e),T.forEach(e),pe=c(t),h=o(t,"DIV",{class:!0});var kt=d(h);X=o(kt,"DIV",{class:!0,"data-svelte-h":!0}),p(X)!=="svelte-i1p19j"&&(X.textContent=We),it=o(kt,"P",{"data-svelte-h":!0}),p(it)!=="svelte-3e53m3"&&(it.innerHTML=Ye),ut=o(kt,"P",{"data-svelte-h":!0}),p(ut)!=="svelte-h6pdnx"&&(ut.innerHTML=Ze),ht=o(kt,"DIV",{});var nn=d(ht);xt(tt.$$.fragment,nn),nn.forEach(e),kt.forEach(e),le=c(t),et=o(t,"H2",{"data-svelte-h":!0}),p(et)!=="svelte-p2uhy5"&&(et.textContent=Fe),ce=c(t),nt=o(t,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-1iff40u"&&(nt.textContent=Qe),this.h()},h(){i(f,"target","_blank"),i(f,"href","/editor#eNrFVG2L00AQ/ivDfjGBEPpCQfJFcnJKQeT0euhhD7oms83iZjfsTto7S/+7m6ZVUxOtfvFDwszuzDMvz5PsGK8qluxYZnJkCcsUdw7mWpi0qgAfCXXuwNu7pV5S82QWOeEtcUs3fI1B2N6QRaqtPqQ2583hvs3Zs33EhFE5WseSTzsmc5aMI6Z52ZQ8QLGIGSEc0keWjE72vbf3DxGrPF4nswWbt84vnTflv7feOGe9v67ledfvzdbFWSFVblEH7dWSFh4kJv8KVg0u8M+mJkgtFbVdhdEp7LbiGUY9SW0kSAccirrkOl6FsUJBwVly7ORXDEbxaBb24SwKBK7dFi2QAfLekt0pkqUfBt7V6EgaDUbAGykwOgTcabnx6/Ye1zlce/uJCqnXSwZb7sCZEg/+cRpQyK3G/B8bfGVsDjcWBWbUjLs2JgdhpWcAtpKKY5W2Gd8dblCD4xvMjzfPHCjf+1D5oxd2RBWxR8//bBaxJ5ZMp9OTUhZYVspvpqOYjkhS92Uu0rxWNCwVo69QGPtD3z/V/msh/UYhCE+mhoOePXFcw/j5i0FtvTSqLnVPgfPAJV3V5Gc4lnlr/GKb3QS6ViqMLky7R3dZXthDULPCVBDavg02v4SWm8kZN9fap6Rr/N/MfCg4eVV6ciz46sOcdDY2HvUvrBs0uyBocgnSZABp6KP5EycP+2+lnDB4"),i(f,"title","Open in our Online Editor"),Pt.a=null,i(at,"class","language-js"),Ot.a=null,i(I,"class","language-js"),i(m,"class","remark-container tip"),Zt.a=null,i(O,"class","language-js"),qt.a=null,i($,"class","language-js"),i(v,"class","remark-container warning"),i(g,"target","_blank"),i(g,"href","/editor#eNrFVG2Lm0AQ/ivDUqiCSF4IFKEUr6Ql0B7XXo72qAfZxjEu1V3ZHZPLBf9713hJaqo07Zd+UGbceebtedYd40XBgh1bqhhZwJYZNwZmMlFhUQA+EsrYgLV3kYyofpYaOeEtcU03fIWO25yQRiq13EPr7/XHqsFUrPJYorIYtWHBtx0TMQuGHpM8r0vuUzGPqSQxSF9ZMDjY99auHjxW2HwtZJNs1ji/dV6XP7ZeO8fer8OPU3gNi1BTWupFe6T3pTgf5rPaGH+ZiizWKJ3mKKK5ze2TfTmLuhzw76okeLEr/Dp/tXC9Q+RtwZfodeCOwSAMcEjLnEt/4foZJuSc4X0jntAZ+IOJ25VqniJwaTaogRSQ9SJ2l5HI7UjwqURDQklQCXwQCXr7gDsp1pYL63EZw9TaW0qFXEUMNtyAUTnu/dNMkCHXEuN/7PGd0jHcaExwSfXEK6ViSLSwDMFGUHoq1LRke8Q1SjB8jfHp8KWBzA7R18Sz57ak57FHq5LJxGNbFozH44Oe5pgXmV1RS1ctKYXmxywJ4zKjfkEpeYWJ0qdb8Evtv9ZVr1pCjbBVJexVbxnkEoav3vTq7K3Kylx2FDgPjOiqJDvDc5lrZRdb78aRZZa53oWwezSX4dwOguoVhgmh7tpg/eNouBmdcTOVFhKu8H8z8yXlZFVpydFgq/dz0trYcNC9sHbQ5IKg0SWZRj2Z+i7Nnzh5qH4Cggs6eQ=="),i(g,"title","Open in our Online Editor"),ne.a=null,i(st,"class","language-js"),i(z,"class","remark-container__title"),i(r,"class","remark-container exercise"),i(X,"class","remark-container__title"),i(h,"class","remark-container exercise")},m(t,n){a(t,k,n),a(t,Et,n),a(t,A,n),a(t,St,n),a(t,M,n),a(t,yt,n),a(t,E,n),a(t,Ct,n),a(t,x,n),vt(S,x,null),u(x,f),u(x,at),Pt.m(sn,at),a(t,_t,n),a(t,y,n),a(t,Nt,n),a(t,C,n),a(t,Ht,n),a(t,P,n),a(t,bt,n),a(t,_,n),a(t,Lt,n),a(t,N,n),a(t,Bt,n),a(t,H,n),a(t,Gt,n),a(t,b,n),a(t,It,n),a(t,L,n),a(t,jt,n),a(t,B,n),a(t,Ut,n),a(t,G,n),a(t,Rt,n),a(t,I,n),Ot.m(on,I),a(t,Vt,n),a(t,m,n),a(t,$t,n),a(t,j,n),a(t,Dt,n),a(t,U,n),a(t,Wt,n),a(t,R,n),a(t,Yt,n),a(t,O,n),Zt.m(pn,O),a(t,Ft,n),a(t,V,n),a(t,Qt,n),a(t,$,n),qt.m(ln,$),a(t,zt,n),a(t,D,n),a(t,Jt,n),a(t,W,n),a(t,Kt,n),a(t,v,n),a(t,Xt,n),a(t,Y,n),a(t,te,n),a(t,Z,n),a(t,ee,n),a(t,w,n),vt(F,w,null),u(w,g),u(w,st),ne.m(cn,st),a(t,ae,n),a(t,Q,n),a(t,se,n),a(t,q,n),a(t,oe,n),a(t,r,n),u(r,z),u(r,ot),u(r,rt),vt(J,rt,null),u(r,pt),u(r,lt),u(r,ct),u(r,dt),vt(K,dt,null),a(t,pe,n),a(t,h,n),u(h,X),u(h,it),u(h,ut),u(h,ht),vt(tt,ht,null),a(t,le,n),a(t,et,n),a(t,ce,n),a(t,nt,n),ie=!0},p:rn,i(t){ie||(wt(S.$$.fragment,t),wt(F.$$.fragment,t),wt(J.$$.fragment,t),wt(K.$$.fragment,t),wt(tt.$$.fragment,t),ie=!0)},o(t){Tt(S.$$.fragment,t),Tt(F.$$.fragment,t),Tt(J.$$.fragment,t),Tt(K.$$.fragment,t),Tt(tt.$$.fragment,t),ie=!1},d(t){t&&(e(k),e(Et),e(A),e(St),e(M),e(yt),e(E),e(Ct),e(x),e(_t),e(y),e(Nt),e(C),e(Ht),e(P),e(bt),e(_),e(Lt),e(N),e(Bt),e(H),e(Gt),e(b),e(It),e(L),e(jt),e(B),e(Ut),e(G),e(Rt),e(I),e(Vt),e(m),e($t),e(j),e(Dt),e(U),e(Wt),e(R),e(Yt),e(O),e(Ft),e(V),e(Qt),e($),e(zt),e(D),e(Jt),e(W),e(Kt),e(v),e(Xt),e(Y),e(te),e(Z),e(ee),e(w),e(ae),e(Q),e(se),e(q),e(oe),e(r),e(pe),e(h),e(le),e(et),e(ce),e(nt)),At(S),At(F),At(J),At(K),At(tt)}}}class mn extends dn{constructor(k){super(),hn(this,k,null,kn,un,{})}}export{mn as component};
