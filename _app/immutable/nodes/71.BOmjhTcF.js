import{s as W,n as X}from"../chunks/scheduler.B0TnBjPs.js";import{S as Y,i as H,e as a,s as I,c as D,a as r,g as v,b as T,d as N,f as L,h as n,o,j as c,p as w,m as q,t as F,k as A,l as O}from"../chunks/index.Cnh3HYw3.js";import{V as z}from"../chunks/ViewApp.9sx5twVU.js";function $(Q){let s,R="8. Exercises",P,u,_="Great work! Now you know the basics of how to create a BagaWork app that contains a static GUI (static GUI means that the GUI in each page looks the same each time the user comes to that page). Below you find examples of apps you can create with what you have learned so far. Try to implement them as exercises! Or, even better, come up with your own similar apps, and implement them 😃",C,x,K="If you want to compare your implementation with our's, or if you need to take a peak on our implementation to get started, feel free to do so, but try to complete as much as possible on your own (that's how you learn).",B,p,m,V="Book Exercise",S,g,i,U="Open in Online Editor",k,d,f,Z="App Exercise",y,h,l,j="Open in Online Editor",G;return g=new z({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return CoverPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class CoverPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`The Little Bee!\`),
			Text.text(\`By Peter L-G\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Start Reading\`).page(FirstPage),
				Space,
			),
			Space,
		)
	}
	
}`,x:151,y:193},{id:2,folderId:1,code:`class SecondPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`BeeBee loves to fly from flower to flower, and eat their sweet nectar.\`),
			Space,
			Columns.children(
				Button.text(\`<-\`).page(FirstPage),
				Space,
				Text.text(\`2\`),
				Space,
				Button.text(\`->\`).page(LastPage),
			)
		)
	}
	
}`,x:641,y:384},{id:3,folderId:1,code:`class FirstPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Once upon a time, there was a little bee named BeeBee.\`),
			Space,
			Columns.children(
				Button.text(\`<-\`).page(CoverPage),
				Space,
				Text.text(\`1\`),
				Space,
				Button.text(\`->\`).page(SecondPage),
			)
		)
	}
	
}`,x:383,y:388},{id:5,folderId:1,code:`class LastPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`THE END\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`Read Again\`).page(CoverPage),
				Space,
			),
			Space,
		)
	}
	
}`,x:849,y:184}]}}}),h=new z({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Info App\`),
			Space.size(0.05),
			Text.text(\`Select what you want to read more about.\`).left(),
			Space,
			Columns.children(
				Space,
				Button.text(\`Mario\`).page(MarioPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(\`Zelda\`).page(ZeldaPage),
				Space,
			),
			Columns.children(
				Space,
				Button.text(\`Donkey Kong\`).page(DonkeyKongPage),
				Space,
			),
			Space,
		)
	}
	
}`,x:155,y:333},{id:2,folderId:1,code:`class ZeldaPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Zelda is a video game character created by Nintendo. She is the princess of the Hyrule Kingdom.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`⇦\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:612,y:319},{id:3,folderId:1,code:`class MarioPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Mario is a video game character created by Nintendo. He often needs to rescue princess Peach.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`⇦\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:409,y:159},{id:5,folderId:1,code:`class DonkeyKongPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Donkey Kong is a video game character created by Nintendo. He is a monkey that loves bananas.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`⇦\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:407,y:494}]}}}),{c(){s=a("h1"),s.textContent=R,P=I(),u=a("p"),u.textContent=_,C=I(),x=a("p"),x.textContent=K,B=I(),p=a("div"),m=a("div"),m.textContent=V,S=a("div"),D(g.$$.fragment),i=a("a"),i.textContent=U,k=I(),d=a("div"),f=a("div"),f.textContent=Z,y=a("div"),D(h.$$.fragment),l=a("a"),l.textContent=j,this.h()},l(t){s=r(t,"H1",{"data-svelte-h":!0}),v(s)!=="svelte-1fw8dhh"&&(s.textContent=R),P=T(t),u=r(t,"P",{"data-svelte-h":!0}),v(u)!=="svelte-hh4d4a"&&(u.textContent=_),C=T(t),x=r(t,"P",{"data-svelte-h":!0}),v(x)!=="svelte-1waeygw"&&(x.textContent=K),B=T(t),p=r(t,"DIV",{class:!0});var e=N(p);m=r(e,"DIV",{class:!0,"data-svelte-h":!0}),v(m)!=="svelte-u2ql4w"&&(m.textContent=V),S=r(e,"DIV",{});var E=N(S);L(g.$$.fragment,E),i=r(E,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(i)!=="svelte-qw7ncn"&&(i.textContent=U),E.forEach(n),e.forEach(n),k=T(t),d=r(t,"DIV",{class:!0});var M=N(d);f=r(M,"DIV",{class:!0,"data-svelte-h":!0}),v(f)!=="svelte-2kwazy"&&(f.textContent=Z),y=r(M,"DIV",{});var b=N(y);L(h.$$.fragment,b),l=r(b,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(l)!=="svelte-1qnjydr"&&(l.textContent=j),b.forEach(n),M.forEach(n),this.h()},h(){o(m,"class","remark-container__title"),o(i,"target","_blank"),o(i,"href","/editor#eNq1lG1r2zAQx7/KTa9iUEJbpyM1ZdB0XTfIttL0xUpTiGafE4MjGem8NAR/90lRnc0hDWlpwA+np7vT/yfdkomiYNGSxSpBFrE4F8bA98VFUQA+EcrEgLWXIzki98YaBeGQhKYbMcFW4EdII5VawqX6g9oNuN7KL6pYxVmq8gS1YdHDkmUJi445k2LmIq58Mc5UmhqkXyw6qu17a1ePnBXWX2Old/bNNxqJr+Ovk3eNjeyvy2wz71s1N514muWJRtnyQyMaFiJGXrfurMsO2U9rfDdFGGREOUIf8cM42Dapv4AbJNQwaF//N6Pp9FLl5Uxuib05cUT9kkjJZ+cr1eAWRZLJyTjoOI1aXzJtVlgC/pKb7XkEDVycPVllT622C/s/CyvulT/ZpfwQYyWTw0tv9bYP5Ba0AVKQ5gtItZpZQ82t2KsuZ3EQMgEbFGiKmQYzRySQGFvlOm/h0dD/vP0K0RsbOBnvmtgI0v5UBxmIzRjBi+Q+dj25sNetyYW7yK03cFhwP2WMUBZKggDKZsgdF40wF8b25P42/bZoXV1IwHN+T1Dr2rAnqOO3gPp3DfZBFfbCZ1S9GtXpLlT1MThwdft6BVc/Pr97zXLVCi4mIpOvQLJ3wep1z3zBssf+sfoLp7tzLQ=="),o(i,"title","Open in our Online Editor"),o(p,"class","remark-container exercise"),o(f,"class","remark-container__title"),o(l,"target","_blank"),o(l,"href","/editor#eNrNVNuK2zAQ/ZVBTzYYk2ySlvitF+guy5al6UMvWYgij2NTRzLSeLNp8HP/pB/WL6lkr1M7dEMvG1iCE80oM+d4zpF2jBcFi3ZMqBhZxETOjYELmagXRQF4RyhjA3a9m8s5uUdo5IQz4pqu+Qo9v9khjVRqCVcoS5d3yaqpqVgVsETlMWrDos87lsUsGgZM8rWDrFuxgKkkMUgfWDRo1x/turoJWGH79SqbZhdN0GPewu+pu+CA+5syO2T9Tm1MKNIsjzVKr9ma03vbJCT75S3cRNwYFn7Q7s4KLjA02Vf0BuFg8mujUzbDHAXBJuUEW1XChksCUmB5xLBWGoEvVUnhwg9zTMg76L6PXqm8XMvfUDz845xelkRK3uNfcZ0p29xN0KsDNw8/eKjc/2/ET5jHvEWsg1MjvlbyC27hUslVi9ukXOZPwbt5v+fdgN1Zm00mAduyaDQaVUFjw7NjNty/+KP4sE+6Y68aBjIDHG6zGBWs7JECkXLNBaGGBieG5RbeZtIRUSHMUnQlZH8KnUmBlq9K6vh8q8sc4TKTq1itw8Vj2/HHt+97M94f1CPiPKjGs+FZo8Zw2qoxOnoptMY/rRo1zN+qcY52+HYNEtESq+8GI8qONtfIRfpktRgPprUWw8lei8kxLfpH87SCdG6Gf5Clrlg3Lchd4Lm6RQNLLu3HPGFBnteCjKfj6qb6Cdpk2Zg="),o(l,"title","Open in our Online Editor"),o(d,"class","remark-container exercise")},m(t,e){c(t,s,e),c(t,P,e),c(t,u,e),c(t,C,e),c(t,x,e),c(t,B,e),c(t,p,e),w(p,m),w(p,S),q(g,S,null),w(S,i),c(t,k,e),c(t,d,e),w(d,f),w(d,y),q(h,y,null),w(y,l),G=!0},p:X,i(t){G||(F(g.$$.fragment,t),F(h.$$.fragment,t),G=!0)},o(t){A(g.$$.fragment,t),A(h.$$.fragment,t),G=!1},d(t){t&&(n(s),n(P),n(u),n(C),n(x),n(B),n(p),n(k),n(d)),O(g),O(h)}}}class nt extends Y{constructor(s){super(),H(this,s,null,$,W,{})}}export{nt as component};
