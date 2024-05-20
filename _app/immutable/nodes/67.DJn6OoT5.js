import{s as U,n as K}from"../chunks/scheduler.DFPFbGJz.js";import{S as F,i as Q,e as a,s as b,c as z,a as o,g as v,b as T,d as B,f as O,h as n,o as r,j as c,p as C,m as q,t as M,k as X,l as Z}from"../chunks/index.CzDE4dZi.js";import{V as j}from"../chunks/ViewApp.C2MU7-ZI.js";function Y(J){let s,W="8. Exercises",P,u,E="Great work! Now you know the basics of how to create a BagaWork app that contains a static GUI (static GUI means that the GUI in each page looks the same each time the user comes to that page). Below you find examples of apps you can create with what you have learned so far. Try to implement them as exercises! Or, even better, come up with your own similar apps, and implement them 😃",w,x,R="If you want to compare your implementation with our's, or if you need to take a peak on our implementation to get started, feel free to do so, but try to complete as much as possible on your own (that's how you learn).",I,d,m,_="Book Exercise",S,g,i,A="Open in Online Editor",k,p,h,H="App Exercise",y,f,l,L="Open in Online Editor",G;return g=new j({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:849,y:184}],pageTemplates:[]}}}),f=new j({props:{project:{app:{code:`class InfoApp extends App{
	
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
	
}`,x:407,y:494}],pageTemplates:[]}}}),{c(){s=a("h1"),s.textContent=W,P=b(),u=a("p"),u.textContent=E,w=b(),x=a("p"),x.textContent=R,I=b(),d=a("div"),m=a("div"),m.textContent=_,S=a("div"),z(g.$$.fragment),i=a("a"),i.textContent=A,k=b(),p=a("div"),h=a("div"),h.textContent=H,y=a("div"),z(f.$$.fragment),l=a("a"),l.textContent=L,this.h()},l(t){s=o(t,"H1",{"data-svelte-h":!0}),v(s)!=="svelte-1fw8dhh"&&(s.textContent=W),P=T(t),u=o(t,"P",{"data-svelte-h":!0}),v(u)!=="svelte-hh4d4a"&&(u.textContent=E),w=T(t),x=o(t,"P",{"data-svelte-h":!0}),v(x)!=="svelte-1waeygw"&&(x.textContent=R),I=T(t),d=o(t,"DIV",{class:!0});var e=B(d);m=o(e,"DIV",{class:!0,"data-svelte-h":!0}),v(m)!=="svelte-u2ql4w"&&(m.textContent=_),S=o(e,"DIV",{});var D=B(S);O(g.$$.fragment,D),i=o(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(i)!=="svelte-dilij7"&&(i.textContent=A),D.forEach(n),e.forEach(n),k=T(t),p=o(t,"DIV",{class:!0});var N=B(p);h=o(N,"DIV",{class:!0,"data-svelte-h":!0}),v(h)!=="svelte-2kwazy"&&(h.textContent=H),y=o(N,"DIV",{});var V=B(y);O(f.$$.fragment,V),l=o(V,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(l)!=="svelte-1mpjqrv"&&(l.textContent=L),V.forEach(n),N.forEach(n),this.h()},h(){r(m,"class","remark-container__title"),r(i,"target","_blank"),r(i,"href","/editor#eNq1lW1v2jAQx7/Kza+IZNDa0IlG06TSdd0ktlWFF5tGJbzkApGCHdmXUYTy3WdjwhZEEa2KlIfzQ+4u/599XjFRFCxasVglyCIW58IY+Lq8KgrAR0KZGLD2aizH5O5YoyAcktB0J6bYCvwIaaRSS7hWf1C7Addb+Y8qVnGWqjxBbVj0a8WyhEVnnEkxdxHXvhhnKk0N0g8Wva3tn9auHjgrrL/Gl97ZF99oJL6Nv03eNXayvy2z3bzv1cJ04lmWJxplyw+NaViIGHndGlmXHbKP1mQ0QxhkRDlCH/HNJNg3qb+EOyTUMGjf/jej6fRa5eVc7om9O3FM/ZJIyY3ztWpwjyLJ5HQSdJxGrU+ZNmssAX/Kzf48ggYuzh6tshdW26V9X4YV98qfH1J+iLGSyemlt3rbC3IL2gApSPMlpFrNraEWVux1l7M4CJmADQo0w0yDWSASSIytcp2X8Gjo/779DNEbP3A+OTSxEaT9oQ4yELsxgifJvet6cmGvW5MLD5Hb/sBpwX2XMUJZKAkCKJsjd1w0wkIY25P73fTbonV1IQHP+TVBbWvDkaDOXgLq3zY4BlXYCzeoejWqi0Oo6mVw4ur2+QZuvn189ZrlqhVcTUUmn4Hk6ILV6176gmWX/ebQGOG8yK0k7vB4qP4Cc6x52w=="),r(i,"title","Open in our Online Editor"),r(d,"class","remark-container exercise"),r(h,"class","remark-container__title"),r(l,"target","_blank"),r(l,"href","/editor#eNrNVW1r2zAQ/iuHPtlgTNIkG/G3boO1lI6y9MNeUoginxMzWzLSuWkW/Ln/ZD9sv2SSXadxWMNeGijGtu7ku+fxPSdpw3hRsGjDhIqRRUxk3Bg4l4k6LQrAO0IZG7DjzVROyd1CIyecENd0xRfo+c0MaaRSS7hEWTq/c1ZNTMWqgCUqi1EbFn3dsDRmUT9gkucOsk7FAqaSxCB9YlGvHX+24+omYIXN14lskp03Rod5C7+l7ow97u/LdJ/1R7UyoVimWaxRes3UlK5tkpDsw5u5irgyzPygnZ0UXGBo0u/o9cLe6HFiJ2yCGQqC1ZITrFUJKy4JSIHlEUOuNAKfq5LCmR9mmJC3l31rvVVZmcvfUNz/cEpvSiIlH/AvuU6VTe4q6NWGq4cfPBXu/zfiF8xi3iLWxrER3yn5DddwoeSixW1czvOn4Lt+v9O7AbuzbTYaBWzNosFgUAVNG54casPtjz9LH3ZJ77RXDQOpAQ63aYwKFnZJgVhyzQWhhgYnhvkaPqTSEVEhTJboQsi+Cp1KgZavSmr7bK3LDOEilYtY5eHsudvx5/2PbTM+LNQD4jypxqv+SaNGf9yqMTi4KbSNf1w1api/VeMMbfHtGCSiJVbvDUaUO9pcIRfLF6vFsDeuteiPtlqMDmnRXZrHFWRnZ/gHWeqIvElBbgPP1C0amHNpL/OCBXldCzIcD9uz8xrzIrP/6M7Qm+oXQL7gRg=="),r(l,"title","Open in our Online Editor"),r(p,"class","remark-container exercise")},m(t,e){c(t,s,e),c(t,P,e),c(t,u,e),c(t,w,e),c(t,x,e),c(t,I,e),c(t,d,e),C(d,m),C(d,S),q(g,S,null),C(S,i),c(t,k,e),c(t,p,e),C(p,h),C(p,y),q(f,y,null),C(y,l),G=!0},p:K,i(t){G||(M(g.$$.fragment,t),M(f.$$.fragment,t),G=!0)},o(t){X(g.$$.fragment,t),X(f.$$.fragment,t),G=!1},d(t){t&&(n(s),n(P),n(u),n(w),n(x),n(I),n(d),n(k),n(p)),Z(g),Z(f)}}}class nt extends F{constructor(s){super(),Q(this,s,null,Y,U,{})}}export{nt as component};
