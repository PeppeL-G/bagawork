import{s as xt,n as mt}from"../chunks/scheduler.UQwd20JU.js";import{S as gt,i as St,e as o,s as i,c as yt,a as l,g as s,b as r,d as ft,f as wt,h as n,j as a,m as Pt,t as vt,k as Ct,l as bt}from"../chunks/index.i__Fl8cY.js";import{V as Tt}from"../chunks/ViewApp.m6vzcyjb.js";function kt(ht){let c,Q="Welcome to Bagawork!",k,p,Z="The perfect framework for app beginners.",B,u,tt="What's this?",I,d,et="Bagawork is a JavaScript framework one can use to build apps. It has been designed to be very easy to use for beginners at programming, but still with the potential to create quite cool and useful apps in it. It is also very easy to share the apps you create with your friends, and install them on different type of devices (Android, iOS, computers, etc.).",_,H,R,h,nt="Why this?",G,x,at="Many people trying to learn programming quickly give up because they think programming is too hard. By instead learning programming through Bagawork, they will hopefully keep on fighting and keep learning more and more about programming since they can create useful apps almost directly from the start, and easily share and install them on different devices.",O,N,Y,m,ot="Examples?",A,g,lt="So, what type of apps can be implemented in Bagawork? Below you have one example.",M,T,S,$,y,it='For more examples, check out the <a href="/examples">Examples</a> pages. There you can also see the source code for the apps.',E,L,j,f,rt="How to create an app?",q,w,st='We have developed an <a target="_blank" href="/editor" title="Open our Online Editor">Online Editor</a> you can use to develop Bagawork apps. However, instead of using the online editor on this website (the documentation website for Bagawork), you probably want to create an account at our <a href="https://bagaland.com/" rel="nofollow" target="_blank">Bagaland</a> website, where you can also save your apps online and let other users install them on their devices.',z,W,K,P,ct="How to install an app?",U,v,pt='The easiest way to install a Bagawork app is by creating an account on our <a href="https://bagaland.com/" rel="nofollow" target="_blank">Bagaland</a> website, and then create and store your Bagawork apps there. That way, anyone can test run your app in their web browser, and they can also easily install it on their own devices.',F,V,D,C,ut="How do I learn Bagawork?",J,b,dt='Start learning Bagawork by taking our <a href="/tutorials">Tutorials</a>.',X;return S=new Tt({props:{project:{app:{code:`class MyApp extends App{
	
	name = \`<entered name>\`
	
	createStartPage(){
		return Page1
	}
	
}`},folders:[{id:1,name:"Start",offsetX:65,offsetY:34}],pages:[{id:1,folderId:1,code:`class Page1 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hi there!\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Hello\`).page(Page2),
				Space,
			),
			Space,
		)
	}
}`,x:-47,y:275},{id:6,folderId:1,code:`class Page3Yes extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I knew it, you're a curious one! 😊\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`...\`).page(Page4),
				Space,
			),
			Space,
		)
	}
}`,x:394,y:508},{id:7,folderId:1,code:`class Page2 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`You want to learn what type of apps one can implement with Bagawork?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(Page3No),
				Space,
				Button.text(\`Yes\`).page(Page3Yes),
				Space,
			),
			Space,
		)
	}
}`,x:175,y:281},{id:8,folderId:1,code:`class Page4 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`With Bagawork you can easily create apps with a graphical user interface (GUI) like this one, with buttons leading to new pages.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Is that all?\`).page(Page5),
				Space,
			),
			Space,
		)
	}
}`,x:641,y:308},{id:9,folderId:1,code:`class Page3No extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`No? Well, then I'm afraid I can't help you.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`OK, tell me...\`).page(Page4),
				Space,
			),
			Space,
		)
	}
}`,x:400,y:185},{id:10,folderId:1,code:`class Page5 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`No, of course not!\`),
			Space,
			Text.text(\`Only having GUI:s with buttons like this makes it extremely easy for beginners to get started, but it's also possible to do arbitrary programming in JavaScript, and there exist GUI components which the user can enter input with.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Such as what?\`).page(Page6),
				Space,
			),
			Space,
		)
	}
}`,x:887,y:313},{id:11,folderId:1,code:`class Page6 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`One example is the EnterText component, in which the user can enter some text. Try entering your name below.\`),
			Space,
			Columns.children(
				EnterText.size(1).store(a, \`name\`).placeholder(\`Enter name...\`).page(Page7),
				Button.text(\`⇒\`),
			),
			Space,
		)
	}
}`,x:1150,y:314},{id:12,folderId:1,code:`class Page7 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Hello \${a.name}, nice to meet you! 😃\`),
			Space,
			Text.text(\`In addition to remember input from the user, it's also possible to do general computations with it, such as computing that your name backwards is \${a.name.split("").reverse().join("")}.\`),
			Space,
			Text.text(\`Impressed? 😎\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(Page8No),
				Space,
				Button.text(\`I'm sold\`).page(Page8Yes),
				Space,
			),
			Space,
		)
	}
}`,x:1365,y:318},{id:13,folderId:1,code:`class Page8No extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`No? You sure are hard to impress 😅 But you can't judge a framework from a single example.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`...\`).page(Page9),
				Space,
			),
			Space,
		)
	}
}`,x:1577,y:160},{id:14,folderId:1,code:`class Page8Yes extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Really? You're cheap 😉\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`...\`).page(Page9),
				Space,
			),
			Space,
		)
	}
}`,x:1576,y:447},{id:15,folderId:1,code:`class Page9 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Can you imagine what type of apps you can implement with Bagawork?\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`No\`).page(Page10No),
				Space,
				Button.text(\`Yes\`).page(Page10Yes),
				Space,
			),
			Space,
		)
	}
}`,x:1801,y:306},{id:16,folderId:1,code:`class Page10No extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Then let me explain.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`OK\`).page(Page11),
				Space,
			),
			Space,
		)
	}
}`,x:2021,y:177},{id:17,folderId:1,code:`class Page10Yes extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`I'm sorry, you're probably a great guy, but I'm not sure you do, so let me give you a a few examples.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`OK\`).page(Page11),
				Space,
			),
			Space,
		)
	}
}`,x:2022,y:498},{id:18,folderId:1,code:`class Page11 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`One example is an app the user can chat with, like this one.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Obviously...\`).page(Page12),
				Space,
			),
			Space,
		)
	}
}`,x:2231,y:311},{id:19,folderId:1,code:`class Page12 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Yes, BUT do you realize how many useful apps that can be implemented like this? Online support on websites, an app registering how you are feeling each day, or an app asking you if you have taken your medicine each day, or an app where you easily can register outside temperature each day etc.\`),
			Space,
			Text.text(\`Now anyone can create these apps!\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`OK...\`).page(Page13),
				Space,
			),
			Space,
		)
	}
}`,x:2476,y:307},{id:20,folderId:1,code:`class Page13 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Another example is an interactive digital book. Now anyone can write short stories the user can interact with, such as entering her name, making choices in the story by clicking on buttons, etc.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`...\`).page(Page14),
				Space,
			),
			Space,
		)
	}
}`,x:2710,y:309},{id:21,folderId:1,code:`class Page14 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`And if the author is creative enough, the book will turn more and more into an adventure game where the user not only has to read the book, but think and make strategic decisions on her own to reach the end of the game. Ehh, I mean book.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Oh\`).page(Page15),
				Space,
			),
			Space,
		)
	}
}`,x:2939,y:310},{id:22,folderId:1,code:`class Page15 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Yea, cool, right? 😀\`),
			Space,
			Text.text(\`And a student learning another language can easily create an app where she can enter some glossaries, and then practice on entering the correct answers, so she learns programming and another language at the same time. Simply brilliant! \`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Indeed\`).page(Page16),
				Space,
			),
			Space,
		)
	}
}`,x:3157,y:302},{id:23,folderId:1,code:`class Page16 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`And of course it's possible to create many different type of fun games! Dice games, card games, number games, memory, etc.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Fun!\`).page(Page17),
				Space,
			),
			Space,
		)
	}
}`,x:3378,y:299},{id:24,folderId:1,code:`class Page17 extends Page{
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Fun indeed!\`),
			Space,
			Text.text(\`And that's of course not all! Only users' imagination set the limit, and we believe people are extremely creative and will come up with new type of apps. Give the tool to the people, and the people will do wonders!\`),
			Space,
			Text.text(\`Thanks for listening!\`),
			Space,
		)
	}
}`,x:3598,y:304}],pageTemplates:[{id:1,code:`class AskIfAdult extends Page{
	createGui(){
		return Text("")
	}
}`}]}}}),{c(){c=o("h1"),c.textContent=Q,k=i(),p=o("p"),p.textContent=Z,B=i(),u=o("h2"),u.textContent=tt,I=i(),d=o("p"),d.textContent=et,_=i(),H=o("hr"),R=i(),h=o("h2"),h.textContent=nt,G=i(),x=o("p"),x.textContent=at,O=i(),N=o("hr"),Y=i(),m=o("h2"),m.textContent=ot,A=i(),g=o("p"),g.textContent=lt,M=i(),T=o("div"),yt(S.$$.fragment),$=i(),y=o("p"),y.innerHTML=it,E=i(),L=o("hr"),j=i(),f=o("h2"),f.textContent=rt,q=i(),w=o("p"),w.innerHTML=st,z=i(),W=o("hr"),K=i(),P=o("h2"),P.textContent=ct,U=i(),v=o("p"),v.innerHTML=pt,F=i(),V=o("hr"),D=i(),C=o("h2"),C.textContent=ut,J=i(),b=o("p"),b.innerHTML=dt},l(t){c=l(t,"H1",{"data-svelte-h":!0}),s(c)!=="svelte-83znuu"&&(c.textContent=Q),k=r(t),p=l(t,"P",{"data-svelte-h":!0}),s(p)!=="svelte-3ktrj3"&&(p.textContent=Z),B=r(t),u=l(t,"H2",{"data-svelte-h":!0}),s(u)!=="svelte-1a2l64f"&&(u.textContent=tt),I=r(t),d=l(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-11n5zj6"&&(d.textContent=et),_=r(t),H=l(t,"HR",{}),R=r(t),h=l(t,"H2",{"data-svelte-h":!0}),s(h)!=="svelte-1u7z86j"&&(h.textContent=nt),G=r(t),x=l(t,"P",{"data-svelte-h":!0}),s(x)!=="svelte-ml0toe"&&(x.textContent=at),O=r(t),N=l(t,"HR",{}),Y=r(t),m=l(t,"H2",{"data-svelte-h":!0}),s(m)!=="svelte-1ociy1q"&&(m.textContent=ot),A=r(t),g=l(t,"P",{"data-svelte-h":!0}),s(g)!=="svelte-19t1qaw"&&(g.textContent=lt),M=r(t),T=l(t,"DIV",{});var e=ft(T);wt(S.$$.fragment,e),e.forEach(n),$=r(t),y=l(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1uyev7w"&&(y.innerHTML=it),E=r(t),L=l(t,"HR",{}),j=r(t),f=l(t,"H2",{"data-svelte-h":!0}),s(f)!=="svelte-1epy6b2"&&(f.textContent=rt),q=r(t),w=l(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-fvldnh"&&(w.innerHTML=st),z=r(t),W=l(t,"HR",{}),K=r(t),P=l(t,"H2",{"data-svelte-h":!0}),s(P)!=="svelte-1ig2w8z"&&(P.textContent=ct),U=r(t),v=l(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-1uau5a7"&&(v.innerHTML=pt),F=r(t),V=l(t,"HR",{}),D=r(t),C=l(t,"H2",{"data-svelte-h":!0}),s(C)!=="svelte-1rhqiil"&&(C.textContent=ut),J=r(t),b=l(t,"P",{"data-svelte-h":!0}),s(b)!=="svelte-ow39k1"&&(b.innerHTML=dt)},m(t,e){a(t,c,e),a(t,k,e),a(t,p,e),a(t,B,e),a(t,u,e),a(t,I,e),a(t,d,e),a(t,_,e),a(t,H,e),a(t,R,e),a(t,h,e),a(t,G,e),a(t,x,e),a(t,O,e),a(t,N,e),a(t,Y,e),a(t,m,e),a(t,A,e),a(t,g,e),a(t,M,e),a(t,T,e),Pt(S,T,null),a(t,$,e),a(t,y,e),a(t,E,e),a(t,L,e),a(t,j,e),a(t,f,e),a(t,q,e),a(t,w,e),a(t,z,e),a(t,W,e),a(t,K,e),a(t,P,e),a(t,U,e),a(t,v,e),a(t,F,e),a(t,V,e),a(t,D,e),a(t,C,e),a(t,J,e),a(t,b,e),X=!0},p:mt,i(t){X||(vt(S.$$.fragment,t),X=!0)},o(t){Ct(S.$$.fragment,t),X=!1},d(t){t&&(n(c),n(k),n(p),n(B),n(u),n(I),n(d),n(_),n(H),n(R),n(h),n(G),n(x),n(O),n(N),n(Y),n(m),n(A),n(g),n(M),n(T),n($),n(y),n(E),n(L),n(j),n(f),n(q),n(w),n(z),n(W),n(K),n(P),n(U),n(v),n(F),n(V),n(D),n(C),n(J),n(b)),bt(S)}}}class Ht extends gt{constructor(c){super(),St(this,c,null,kt,xt,{})}}export{Ht as component};
