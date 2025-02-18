import{s as K,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as tt,i as et,e as a,s as I,c as V,a as o,g as m,b as y,d as b,f as Z,h as r,o as n,j as l,p as $,m as R,t as A,k as Q,l as q}from"../chunks/index.BXVnRmkj.js";import{V as z}from"../chunks/ViewApp.qg7AIhJt.js";function nt(H){let s,D="8. Exercises",B,f,F="Way to go! Your first step towards becoming a programmer is now taken 😎",T,C,X="Below you have examples of apps you should be able to implement with what you have learned so far. Why don't you give it a try to implement them yourself from scratch? And don't just create copies of them, but try be creative and come up with your own apps, that is so much more fun!",M,i,v,L="Multiplication Table Exercise",h,p,G="Open in Online Editor",E,x,g,W="Counter Exercise",k,c,J="Open in Online Editor",P,u,w,N="Power Point Presentation Exercise",S,d,U="Open in Online Editor",_;return h=new z({props:{project:{app:{code:`class MyApp extends App{
	createStartPage(){
		return StartPage
	}
}`},pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	x = 0\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Columns.children(\n				Space,\n				Button.text(`-`).onClick(p.decrement),\n				Space,\n				Text.text(`${p.x}`),\n				Space,\n				Button.text(`+`).onClick(p.increment),\n				Space,\n			),\n			Space,\n			Text.text(`0 * ${p.x} = ${0 * p.x}`),\n			Text.text(`1 * ${p.x} = ${1 * p.x}`),\n			Text.text(`2 * ${p.x} = ${2 * p.x}`),\n			Text.text(`3 * ${p.x} = ${3 * p.x}`),\n			Text.text(`4 * ${p.x} = ${4 * p.x}`),\n			Text.text(`5 * ${p.x} = ${5 * p.x}`),\n			Text.text(`6 * ${p.x} = ${6 * p.x}`),\n			Text.text(`7 * ${p.x} = ${7 * p.x}`),\n			Text.text(`8 * ${p.x} = ${8 * p.x}`),\n			Text.text(`9 * ${p.x} = ${9 * p.x}`),\n			Space,\n		)\n	}\n	\n	decrement(){\n		p.x -= 1\n	}\n	\n	increment(){\n		p.x += 1\n	}\n	\n}",x:150,y:200}]}}}),k=new z({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return CounterPage
	}
	
}`},pages:[{id:1,folderId:1,code:`class CounterPage extends Page{
	
	counter = 0
	
	incrementCounter(){
		p.counter += 1
	}
	
	decrementCounter(){
		p.counter -= 1
	}
	
	resetCounter(){
		p.counter = 0
	}
	
	createGui(){
		return Rows.children(
			Text.text(\`\${p.counter}\`).grow(1),
			Columns.grow(1).children(
				Rows.grow(1).children(
					Button.text(\`-\`).grow(1).onClick(p.decrementCounter),
					Button.text(\`Reset\`).grow(1).onClick(p.resetCounter),
				),
				Button.text(\`+\`).grow(1).onClick(p.incrementCounter),
			),
		)
	}
	
}`,x:150,y:200}]}}}),S=new z({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return Slide1
	}
	
}`},pages:[{id:1,folderId:1,code:`class Slide1 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Text.text(\`Hello!\`),
			Space,
			Text.text(\` - I am Peter\`).left().showIf(2 <= p.counter),
			Text.text(\` - Born 1990\`).left().showIf(3 <= p.counter),
			Text.text(\` - Raised in Baremossö\`).left().showIf(4 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide1).keepIf(p.counter <= 3),
			Button.text(\`Next\`).page(Slide2).keepIf(4 == p.counter),
		)
	}
	
}`,x:150,y:200},{id:2,folderId:1,code:`class Slide2 extends Page{
	
	counter = 0
	
	onBefore(){
		p.counter += 1
	}
	
	createGui(){
		return Rows.padding(5).children(
			Space,
			Text.text(\`Thank you for listening!\`),
			Space,
			Text.text(\`Any questions?\`).showIf(2 <= p.counter),
			Space,
			Button.text(\`Next\`).page(Slide2).showIf(p.counter < 2),
		)
	}
	
}`,x:450,y:200}]}}}),{c(){s=a("h1"),s.textContent=D,B=I(),f=a("p"),f.textContent=F,T=I(),C=a("p"),C.textContent=X,M=I(),i=a("div"),v=a("div"),v.textContent=L,V(h.$$.fragment),p=a("a"),p.textContent=G,E=I(),x=a("div"),g=a("div"),g.textContent=W,V(k.$$.fragment),c=a("a"),c.textContent=J,P=I(),u=a("div"),w=a("div"),w.textContent=N,V(S.$$.fragment),d=a("a"),d.textContent=U,this.h()},l(t){s=o(t,"H1",{"data-svelte-h":!0}),m(s)!=="svelte-1fw8dhh"&&(s.textContent=D),B=y(t),f=o(t,"P",{"data-svelte-h":!0}),m(f)!=="svelte-1s5j6rv"&&(f.textContent=F),T=y(t),C=o(t,"P",{"data-svelte-h":!0}),m(C)!=="svelte-6wjhr4"&&(C.textContent=X),M=y(t),i=o(t,"DIV",{class:!0});var e=b(i);v=o(e,"DIV",{class:!0,"data-svelte-h":!0}),m(v)!=="svelte-849ou9"&&(v.textContent=L),Z(h.$$.fragment,e),p=o(e,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),m(p)!=="svelte-1gduarp"&&(p.textContent=G),e.forEach(r),E=y(t),x=o(t,"DIV",{class:!0});var j=b(x);g=o(j,"DIV",{class:!0,"data-svelte-h":!0}),m(g)!=="svelte-1wlxgx"&&(g.textContent=W),Z(k.$$.fragment,j),c=o(j,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),m(c)!=="svelte-17rglq4"&&(c.textContent=J),j.forEach(r),P=y(t),u=o(t,"DIV",{class:!0});var O=b(u);w=o(O,"DIV",{class:!0,"data-svelte-h":!0}),m(w)!=="svelte-11llafs"&&(w.textContent=N),Z(S.$$.fragment,O),d=o(O,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),m(d)!=="svelte-34xxo3"&&(d.textContent=U),O.forEach(r),this.h()},h(){n(v,"class","remark-container__title"),n(p,"target","_blank"),n(p,"href","/editor#eNqF081Og0AQAOBX2Ux6AEsJ9L8kPWgPxoOJsb2JSQmsSqTLBoZIQ/bd3UqLnarrgYSZ/SYzgZ0GIikhaCDOEw4BxFlUlux+fy0l4zVykZRMvzehCDEueIR8jVGBD9Ert+yvbIgFx6oQrDs4ZFUoFCgHpI5LCJ4aSBMIfAde8izhxV0bkKZdfdf4ELQ99FOzJfNOQTvKbZVeDvGYf5Ru/JZmScGF1R6FuJZRzJ1TtMqzaid+YZcwxJsKMRcu6oms7WBru7lYZWn8bkk34XqIHRdoO3/Xb3ThsbrXSLdWW5Mm3fqkWyr+7fZ9QvNnM3jsirVz6I/Zaw7hxVBn2KfYN+IhxUMjHlE8MuIxxWMjnlA8MeIpxVMjnlE8M+I5xXMjXlC8+InP/6d93K52D7pL2O2BLmWDJfMJ624PYX3KFDhQ67WceA7sIRh6nnpWn3B+akU="),n(p,"title","Open in our Online Editor"),n(i,"class","remark-container exercise"),n(g,"class","remark-container__title"),n(c,"target","_blank"),n(c,"href","/editor#eNqFUk1rwzAM/StG7JDQNCSDXQI9dDmMHQaj220ZNCRaF5baxlZoS/B/n7MkzUdLd7CRJb2n52fXkEoJUQ2ZyBEiyMpUa/ZyWkvJ8EjIc81sXCc8oWZlClPCN0oVvaY7dNy2QgqpUpzFouKEqik1edPCDBgPpM1piD5qKHKIQg++RJmjem4Pk/EjlrOI5jCoaBvYigV9quBW2h45deCzMun33YsVC0eqEsrxX8xyjlGo8UZ/p8hM/XqqirlTG3HQfvZdlLlC7rSlhN7tdX2ym7O9q8+sZuv6OyUOTuh6fWcsymrPdZ+/pErob8SNekKPFZHg3cDlMMUXPC6L7MeR/tyjQcEFwaax5irJ2LQxwTieUC2u0szfeID3kTv5dR4c7ed6CDw4QXQfBObT/ALZjBIF"),n(c,"title","Open in our Online Editor"),n(x,"class","remark-container exercise"),n(w,"class","remark-container__title"),n(d,"target","_blank"),n(d,"href","/editor#eNrNkt9OwjAUxl/l2Ks1zmVMuGCRGLlRLjQEuBMTmvUgjaOtbRckZK/lC/hilkz+CSjeebFmbc/5zm/7vgVhWpN0QTLFkaQky5m1cD+/0RrwzaHkFvz7YiiHbvlkBpnDvmPGddkzBrS6cQZdYST0c8Gxtjwqq46SlCHRvtKS9HFBBCdpLSRjlXM0nWqzM7kSWI9eztjMVoV0aKAF8epIyTaOldlw6GhVdd6CbZAV+m0hvkP31MxGmnEu5HPQoFE2ETk3KIOqaugGHidyfglGd5jn6mxEw9VdX7MMwwOVcAEdYFPooqcZ0SjHsQtoZCdq1hkHCVy1YA1Ljwi0lcerNZvxXv/lSf09JixyEBLazOBUWfvxvidVPyK1+2Xtwvm//SX94Fevs/Q1qByj0Qui9mobA7zqJT2xP1n316F1gIbuRCokbz45jTgkc5ImcVyGVbKSX5OV/LNkHU3PYMLkC8xVAR4CcmE9tRc5KXk3cg6vBVonlLTXo18z9xejk7XaltGQ/OBTfcunp/ITrs2OjA=="),n(d,"title","Open in our Online Editor"),n(u,"class","remark-container exercise")},m(t,e){l(t,s,e),l(t,B,e),l(t,f,e),l(t,T,e),l(t,C,e),l(t,M,e),l(t,i,e),$(i,v),R(h,i,null),$(i,p),l(t,E,e),l(t,x,e),$(x,g),R(k,x,null),$(x,c),l(t,P,e),l(t,u,e),$(u,w),R(S,u,null),$(u,d),_=!0},p:Y,i(t){_||(A(h.$$.fragment,t),A(k.$$.fragment,t),A(S.$$.fragment,t),_=!0)},o(t){Q(h.$$.fragment,t),Q(k.$$.fragment,t),Q(S.$$.fragment,t),_=!1},d(t){t&&(r(s),r(B),r(f),r(T),r(C),r(M),r(i),r(E),r(x),r(P),r(u)),q(h),q(k),q(S)}}}class lt extends tt{constructor(s){super(),et(this,s,null,nt,K,{})}}export{lt as component};
