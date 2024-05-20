import{s as un,n as cn}from"../chunks/scheduler.DFPFbGJz.js";import{S as hn,i as dn,e as s,s as i,H as ut,c as $e,r as ie,a as l,g as o,b as r,d as h,n as ct,h as e,f as Qe,u as re,v as mn,o as u,j as a,p,m as Fe,t as Je,k as Ke,l as tn}from"../chunks/index.CzDE4dZi.js";import{V as en}from"../chunks/ViewApp.C2MU7-ZI.js";function gn(nn){let g,pe="3. Images",ht,C,ue="This tutorial will teach you how to display images in your BagaWork app.",dt,b,ce="What is an image?",mt,_,he="An image is a file that contains information about which color each pixel in the image should have. This information can be stored in many different ways, so there exists different type of image files:",gt,I,de="<li>If you take a photo with a camera, you often get a file with the file extension <code>.jpg</code> or <code>.jpeg</code>, and that indicates the file is stored in the JPEG format</li> <li>If you want to have an image with a transparant background, you might end up with an image stored in the PNG format, indicated by the file extension <code>.png</code></li> <li>If you want to have an image that is animated (something in the image changes with time), you might end up with an image stored in the GIF format, indicated by the file extension <code>.gif</code></li> <li>Etc.</li>",ft,L,me="On a webpage, an image can look like this:",vt,w,ge='<img src="/smiley.png" alt="Example of an image." title="Example of an image"/>',wt,T,fe="How to make an image available to a BagaApp",yt,P,ve="Currently, a BagaApp itself can't contain images, but it can display images that are stored on the web. So, if you want to show an image in your BagaApp, that image must be available on the web. All images you can see on websites you visit in your web browsers are images available on the web.",xt,H,we="Each image on the web has its own unique identifer. That identifier is called the <em>Uniform Resource Identifier</em> (URL), sometimes referred to as the image&#39;s <em>link</em> or the image&#39;s <em>address</em>. In a web browser, when you see an image on a webpage, you can often right click on that image and in the apperaing menu select an option like <code>Copy Image Link</code>/<code>Copy Image Address</code> (it differs in different web browsers) to copy the image&#39;s URL.",kt,m,E,ye="Example",Q,xe="On a laptop/desktop computer, if you right click the smiley image above, and then select the option <code>Copy Image Link</code>/<code>Copy Image Address</code>, then you have copied the URL of that image. If you then paste that URL in a text field somewhere, you can see what the URL of that image is. In this case, the URL is the following:",F,Ct,an='<code class="language-undefined">https://bagawork.com/smiley.png</code>',J,ke="This URL indicates that the image is in PNG format, but not all URLs reveal such information, so an image URL does not have to end with <code>.png</code>, <code>.jpeg</code>, or <code>.gif</code>, etc.",bt,y,Ce=`<div class="remark-container__title">Legal issues</div><p>It is illegal to simply use images that are hosted on the web by others in your own BagaWork apps. There are 2 things you need to think about:</p><ol><li><strong>Copyright</strong><br/>
The one who has created an image owns the copyright to that image, and others may not use or create copies of that image without permission to do so from the copyright holder. Sometimes the copyright holder releases a license to the image, and the license indicates what others are allowed to do with that image (use it, edit it, etc.). So to legally use an image created by someone else, you must have permission to use it from the person who created it, either by asking that person for permission, or by finding the image&#39;s license that states you are free to use it</li> <li><strong>Hosting</strong><br/>
Images available on the web are stored on servers on the Internet. This costs money. So, if Alice stores an image on her server because she uses that image on her website, that does not mean others may use that image from Alice&#39;s server on their own websites/apps, because each time their website/app fetches that image, Alice needs to pay some money for transferring that image from her server to your website/app</li> </ol><p>In practice, while learning programming, it&#39;s usually no problem to use whichever image you can find on the web (because you retrieve the image only a few times), but it&#39;s definitely not OK to use an image without permission in a real app, where there will be multiple users. In these cases, you need to host the image on the web yourself (learn more about that further down in this tutorial).</p>`,_t,S,be="How to display an image in a BagaApp",It,A,_e="To display an image in a BagaApp, use the GUI component <code>Image</code>, and pass the URL of the image as a string to the configuration method <code>url()</code>.",Lt,x,U,Ie="Example",R,M,f,Le="Open in Online Editor",K,Tt,sn=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Image<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://bagawork.com/smiley.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,Pt,j,Te="If the image is bigger than the space the <code>Image</code> component has been assigned by its parent layout, then the image will be scaled down to fit the space in the <code>Image</code> component.",Ht,k,G,Pe="Example",q,W,v,He="Open in Online Editor",tt,Et,ln=`<code class="language-js"><span class="token keyword">class</span> <span class="token class-name">StartPage</span> <span class="token keyword">extends</span> <span class="token class-name">Page</span><span class="token punctuation">&#123;</span>
	
	<span class="token function">createGui</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#123;</span>
		<span class="token keyword">return</span> Image<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://bagawork.com/smiley.png</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span>
	<span class="token punctuation">&#125;</span>
	
<span class="token punctuation">&#125;</span></code>`,St,O,Ee="How to create an image",At,V,Se='BagaWork contains no functionality for creating images, but there exists many different apps you can use to create images, such as <a href="https://docs.google.com/drawings" rel="nofollow" target="_blank">Google Drawing</a> (requires a Google account). Notice that many of these apps often use an internal format to store your image in, but one often can <em>export</em>/<em>download</em> the image in a well-known image format, such as a PNG file.',Ut,B,Ae="How to host an image",Rt,D,Ue='If you create your own image that you want to use in your BagaWork app, you must upload that image to the web. There exist different hosting services you can use for this, such as <a href="https://google.com/drive" rel="nofollow" target="_blank">Google Drive</a> (requires a Google account).',Mt,X,Re="After you have uploaded your image to Google Drive, it will only be available to you (the one signed in to your Google account). To make it available to others, you must change the image&#39;s <em>General Access</em> policy. In Google Drive:",jt,Y,Me="<li>Choose to share the image</li> <li>In the apperaing modal, change the <em>General Access</em> option from <code>Restricted</code> to <code>Anyone with the link</code></li>",Gt,Z,je="To obtain the URL to the image, in Google Drive:",qt,c,et,Ge="Choose to share the image",zt,nt,qe="In the appearing modal, click on the <code>Copy link</code> button",$t,at,Qt,st,Wt,on=`<code class="language-undefined">https://drive.google.com/file/d/klsdflkgjalkhdfljdsfsdfg/view?usp=sharing
                                |                      |
                            ID start                ID stop</code>`,Ft,lt,We="In this example, <code>klsdflkgjalkhdfljdsfsdfg</code> is the ID of the image",Jt,ot,Kt,it,Ot,rn='<code class="language-undefined">https://drive.google.com/uc?id=REPLACE_THIS_WITH_THE_ID</code>',te,rt,ee,pt,Vt,pn='<code class="language-undefined">https://drive.google.com/uc?id=klsdflkgjalkhdfljdsfsdfg</code>',Bt,N,Oe="If you read Google Drive's User Agreement, it probably says something like that you may only use it for personal use, and not to store images used by apps like this, but as long as you only create small apps with few users, they will hopefully don't mind you use it like this.",Dt,z,Ve="That's it!",Xt,$,Be="Woho! 🥳 Now you know how to use images in your BagaWork apps, goor work!",Yt;return M=new en({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Image.url(\`https://bagawork.com/smiley.png\`)
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
	
}`}]}}}),W=new en({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class StartPage extends Page{
	
	createGui(){
		return Image.url(\`https://bagawork.com/smiley.png\`)
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
	
}`}]}}}),{c(){g=s("h1"),g.textContent=pe,ht=i(),C=s("p"),C.textContent=ue,dt=i(),b=s("h2"),b.textContent=ce,mt=i(),_=s("p"),_.textContent=he,gt=i(),I=s("ul"),I.innerHTML=de,ft=i(),L=s("p"),L.textContent=me,vt=i(),w=s("p"),w.innerHTML=ge,wt=i(),T=s("h2"),T.textContent=fe,yt=i(),P=s("p"),P.textContent=ve,xt=i(),H=s("p"),H.innerHTML=we,kt=i(),m=s("div"),E=s("div"),E.textContent=ye,Q=s("p"),Q.innerHTML=xe,F=s("pre"),Ct=new ut(!1),J=s("p"),J.innerHTML=ke,bt=i(),y=s("div"),y.innerHTML=Ce,_t=i(),S=s("h2"),S.textContent=be,It=i(),A=s("p"),A.innerHTML=_e,Lt=i(),x=s("div"),U=s("div"),U.textContent=Ie,R=s("div"),$e(M.$$.fragment),f=s("a"),f.textContent=Le,K=s("pre"),Tt=new ut(!1),Pt=i(),j=s("p"),j.innerHTML=Te,Ht=i(),k=s("div"),G=s("div"),G.textContent=Pe,q=s("div"),$e(W.$$.fragment),v=s("a"),v.textContent=He,tt=s("pre"),Et=new ut(!1),St=i(),O=s("h2"),O.textContent=Ee,At=i(),V=s("p"),V.innerHTML=Se,Ut=i(),B=s("h2"),B.textContent=Ae,Rt=i(),D=s("p"),D.innerHTML=Ue,Mt=i(),X=s("p"),X.innerHTML=Re,jt=i(),Y=s("ol"),Y.innerHTML=Me,Gt=i(),Z=s("p"),Z.textContent=je,qt=i(),c=s("ol"),et=s("li"),et.textContent=Ge,zt=i(),nt=s("li"),nt.innerHTML=qe,$t=i(),at=s("li"),Qt=ie("The copied URL does not lead to the image, but to a webpage that shows the image. The URL will look something like this:"),st=s("pre"),Wt=new ut(!1),Ft=i(),lt=s("li"),lt.innerHTML=We,Jt=i(),ot=s("li"),Kt=ie("The URL to the image will be:"),it=s("pre"),Ot=new ut(!1),te=i(),rt=s("li"),ee=ie("In this example, the URL to the image would be:"),pt=s("pre"),Vt=new ut(!1),Bt=i(),N=s("p"),N.textContent=Oe,Dt=i(),z=s("h2"),z.textContent=Ve,Xt=i(),$=s("p"),$.textContent=Be,this.h()},l(t){g=l(t,"H1",{"data-svelte-h":!0}),o(g)!=="svelte-5k5401"&&(g.textContent=pe),ht=r(t),C=l(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1etdkf4"&&(C.textContent=ue),dt=r(t),b=l(t,"H2",{"data-svelte-h":!0}),o(b)!=="svelte-1k3q5ex"&&(b.textContent=ce),mt=r(t),_=l(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-1dwjvua"&&(_.textContent=he),gt=r(t),I=l(t,"UL",{"data-svelte-h":!0}),o(I)!=="svelte-lkscg2"&&(I.innerHTML=de),ft=r(t),L=l(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-1qah7a1"&&(L.textContent=me),vt=r(t),w=l(t,"P",{style:!0,"data-svelte-h":!0}),o(w)!=="svelte-vfp2ve"&&(w.innerHTML=ge),wt=r(t),T=l(t,"H2",{"data-svelte-h":!0}),o(T)!=="svelte-8prjk0"&&(T.textContent=fe),yt=r(t),P=l(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-wwkne0"&&(P.textContent=ve),xt=r(t),H=l(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-aggcbl"&&(H.innerHTML=we),kt=r(t),m=l(t,"DIV",{class:!0});var n=h(m);E=l(n,"DIV",{class:!0,"data-svelte-h":!0}),o(E)!=="svelte-1llzxwj"&&(E.textContent=ye),Q=l(n,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-11p4zqk"&&(Q.innerHTML=xe),F=l(n,"PRE",{class:!0});var De=h(F);Ct=ct(De,!1),De.forEach(e),J=l(n,"P",{"data-svelte-h":!0}),o(J)!=="svelte-7g96wq"&&(J.innerHTML=ke),n.forEach(e),bt=r(t),y=l(t,"DIV",{class:!0,"data-svelte-h":!0}),o(y)!=="svelte-1bv4mx2"&&(y.innerHTML=Ce),_t=r(t),S=l(t,"H2",{"data-svelte-h":!0}),o(S)!=="svelte-1frgjl9"&&(S.textContent=be),It=r(t),A=l(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-1l8ee3o"&&(A.innerHTML=_e),Lt=r(t),x=l(t,"DIV",{class:!0});var ne=h(x);U=l(ne,"DIV",{class:!0,"data-svelte-h":!0}),o(U)!=="svelte-1llzxwj"&&(U.textContent=Ie),R=l(ne,"DIV",{});var Zt=h(R);Qe(M.$$.fragment,Zt),f=l(Zt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(f)!=="svelte-10j2gp2"&&(f.textContent=Le),K=l(Zt,"PRE",{class:!0});var Xe=h(K);Tt=ct(Xe,!1),Xe.forEach(e),Zt.forEach(e),ne.forEach(e),Pt=r(t),j=l(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-6ftqpg"&&(j.innerHTML=Te),Ht=r(t),k=l(t,"DIV",{class:!0});var ae=h(k);G=l(ae,"DIV",{class:!0,"data-svelte-h":!0}),o(G)!=="svelte-1llzxwj"&&(G.textContent=Pe),q=l(ae,"DIV",{});var Nt=h(q);Qe(W.$$.fragment,Nt),v=l(Nt,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),o(v)!=="svelte-10j2gp2"&&(v.textContent=He),tt=l(Nt,"PRE",{class:!0});var Ye=h(tt);Et=ct(Ye,!1),Ye.forEach(e),Nt.forEach(e),ae.forEach(e),St=r(t),O=l(t,"H2",{"data-svelte-h":!0}),o(O)!=="svelte-yn450j"&&(O.textContent=Ee),At=r(t),V=l(t,"P",{"data-svelte-h":!0}),o(V)!=="svelte-4c49od"&&(V.innerHTML=Se),Ut=r(t),B=l(t,"H2",{"data-svelte-h":!0}),o(B)!=="svelte-1qfkxe9"&&(B.textContent=Ae),Rt=r(t),D=l(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-8arp1"&&(D.innerHTML=Ue),Mt=r(t),X=l(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-at4wt3"&&(X.innerHTML=Re),jt=r(t),Y=l(t,"OL",{"data-svelte-h":!0}),o(Y)!=="svelte-8dbk4h"&&(Y.innerHTML=Me),Gt=r(t),Z=l(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-e9wb3l"&&(Z.textContent=je),qt=r(t),c=l(t,"OL",{});var d=h(c);et=l(d,"LI",{"data-svelte-h":!0}),o(et)!=="svelte-10nkbp7"&&(et.textContent=Ge),zt=r(d),nt=l(d,"LI",{"data-svelte-h":!0}),o(nt)!=="svelte-1wwe5ie"&&(nt.innerHTML=qe),$t=r(d),at=l(d,"LI",{});var se=h(at);Qt=re(se,"The copied URL does not lead to the image, but to a webpage that shows the image. The URL will look something like this:"),st=l(se,"PRE",{class:!0});var Ze=h(st);Wt=ct(Ze,!1),Ze.forEach(e),se.forEach(e),Ft=r(d),lt=l(d,"LI",{"data-svelte-h":!0}),o(lt)!=="svelte-1f973x4"&&(lt.innerHTML=We),Jt=r(d),ot=l(d,"LI",{});var le=h(ot);Kt=re(le,"The URL to the image will be:"),it=l(le,"PRE",{class:!0});var Ne=h(it);Ot=ct(Ne,!1),Ne.forEach(e),le.forEach(e),te=r(d),rt=l(d,"LI",{});var oe=h(rt);ee=re(oe,"In this example, the URL to the image would be:"),pt=l(oe,"PRE",{class:!0});var ze=h(pt);Vt=ct(ze,!1),ze.forEach(e),oe.forEach(e),d.forEach(e),Bt=r(t),N=l(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-x5i9z8"&&(N.textContent=Oe),Dt=r(t),z=l(t,"H2",{"data-svelte-h":!0}),o(z)!=="svelte-p2uhy5"&&(z.textContent=Ve),Xt=r(t),$=l(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-1xdskuy"&&($.textContent=Be),this.h()},h(){mn(w,"text-align","center"),u(E,"class","remark-container__title"),Ct.a=null,u(F,"class","language-undefined"),u(m,"class","remark-container tip"),u(y,"class","remark-container warning"),u(U,"class","remark-container__title"),u(f,"target","_blank"),u(f,"href","/editor#eNrFUk1Lw0AQ/SvLXExgSb8oSC6SikgPiqigYoWsyaQtbnaX3QlaSv67G2OrKVXqyUPCTGbevDdvsgZhDMRryHSOEEMmhXPsYpUYw/CNUOWO+Xg9UzNqnsyiILwhYelKzDEI2wpZpMoqti00X+sWVEPNodAyR+sgflzDMod4wEGJsmH8gAAHXRQO6R7i/iZ+8HH9xMH4eR1kO2zaJh3hW/6t+CbZUX9eLXd1T0vfFlVWBumCyLi413sWc/Gq7UuU6bLnyqXEVWTUPA07q3F48yrGYw4riEej0UbvLZZGeq6O7o7UxL1MiySv5C96tZpgoe2Xzd+4f9nmWr+6KFssZW5RBZ9IujEiQ77Jbj1hRP4VpIlFttIV+3CV0UIoNjg+SUO+H3mqZVWqPQS7jTOaVOR3+KS51GkYNd4EqpIy5AfCHtAdhttUwo5JWiUFod3nYPNjtrcZ7tzmTHlIMsf/vszdQtCRa45jmWf/+SYdxwb9/YZ1m8YHNA0PmTT8YdJ3hX+5yVP9Duskqfw="),u(f,"title","Open in our Online Editor"),Tt.a=null,u(K,"class","language-js"),u(x,"class","remark-container tip"),u(G,"class","remark-container__title"),u(v,"target","_blank"),u(v,"href","/editor#eNrFUk1Lw0AQ/SvLXExgSb8oSC6SikgPiqigYoWsyaQtbnaX3QlaSv67G2OrKVXqyUPCTGbevDdvsgZhDMRryHSOEEMmhXPsYpUYw/CNUOWO+Xg9UzNqnsyiILwhYelKzDEI2wpZpMoqti00X+sWVEPNodAyR+sgflzDMod4wEGJsmH8gAAHXRQO6R7i/iZ+8HH9xMH4eR1kO2zaJh3hW/6t+CbZUX9eLXd1T0vfFlVWBumCyLi413sWc/Gq7UuU6bLnyqXEVWTUPA07q3F48yrGYw4riEej0UbvLZZGeq6O7o7UxL1MiySv5C96tZpgoe2Xzd+4f9nmWr+6KFssZW5RBZ9IujEiQ77Jbj1hRP4VpIlFttIV+3CV0UIoNjg+SUO+H3mqZVWqPQS7jTOaVOR3+KS51GkYNd4EqpIy5AfCHtAdhttUwo5JWiUFod3nYPNjtrcZ7tzmTHlIMsf/vszdQtCRa45jmWf/+SYdxwb9/YZ1m8YHNA0PmTT8YdJ3hX+5yVP9Duskqfw="),u(v,"title","Open in our Online Editor"),Et.a=null,u(tt,"class","language-js"),u(k,"class","remark-container tip"),Wt.a=null,u(st,"class","language-undefined"),Ot.a=null,u(it,"class","language-undefined"),Vt.a=null,u(pt,"class","language-undefined")},m(t,n){a(t,g,n),a(t,ht,n),a(t,C,n),a(t,dt,n),a(t,b,n),a(t,mt,n),a(t,_,n),a(t,gt,n),a(t,I,n),a(t,ft,n),a(t,L,n),a(t,vt,n),a(t,w,n),a(t,wt,n),a(t,T,n),a(t,yt,n),a(t,P,n),a(t,xt,n),a(t,H,n),a(t,kt,n),a(t,m,n),p(m,E),p(m,Q),p(m,F),Ct.m(an,F),p(m,J),a(t,bt,n),a(t,y,n),a(t,_t,n),a(t,S,n),a(t,It,n),a(t,A,n),a(t,Lt,n),a(t,x,n),p(x,U),p(x,R),Fe(M,R,null),p(R,f),p(R,K),Tt.m(sn,K),a(t,Pt,n),a(t,j,n),a(t,Ht,n),a(t,k,n),p(k,G),p(k,q),Fe(W,q,null),p(q,v),p(q,tt),Et.m(ln,tt),a(t,St,n),a(t,O,n),a(t,At,n),a(t,V,n),a(t,Ut,n),a(t,B,n),a(t,Rt,n),a(t,D,n),a(t,Mt,n),a(t,X,n),a(t,jt,n),a(t,Y,n),a(t,Gt,n),a(t,Z,n),a(t,qt,n),a(t,c,n),p(c,et),p(c,zt),p(c,nt),p(c,$t),p(c,at),p(at,Qt),p(at,st),Wt.m(on,st),p(c,Ft),p(c,lt),p(c,Jt),p(c,ot),p(ot,Kt),p(ot,it),Ot.m(rn,it),p(c,te),p(c,rt),p(rt,ee),p(rt,pt),Vt.m(pn,pt),a(t,Bt,n),a(t,N,n),a(t,Dt,n),a(t,z,n),a(t,Xt,n),a(t,$,n),Yt=!0},p:cn,i(t){Yt||(Je(M.$$.fragment,t),Je(W.$$.fragment,t),Yt=!0)},o(t){Ke(M.$$.fragment,t),Ke(W.$$.fragment,t),Yt=!1},d(t){t&&(e(g),e(ht),e(C),e(dt),e(b),e(mt),e(_),e(gt),e(I),e(ft),e(L),e(vt),e(w),e(wt),e(T),e(yt),e(P),e(xt),e(H),e(kt),e(m),e(bt),e(y),e(_t),e(S),e(It),e(A),e(Lt),e(x),e(Pt),e(j),e(Ht),e(k),e(St),e(O),e(At),e(V),e(Ut),e(B),e(Rt),e(D),e(Mt),e(X),e(jt),e(Y),e(Gt),e(Z),e(qt),e(c),e(Bt),e(N),e(Dt),e(z),e(Xt),e($)),tn(M),tn(W)}}}class yn extends hn{constructor(g){super(),dn(this,g,null,gn,un,{})}}export{yn as component};
