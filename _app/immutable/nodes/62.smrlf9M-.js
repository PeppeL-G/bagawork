import{s as z,n as L}from"../chunks/scheduler.UQwd20JU.js";import{S as X,i as Q,e as a,s as b,c as Y,a as o,g as v,b as k,d as V,f as j,h as n,o as r,j as c,p as y,m as A,t as F,k as H,l as N}from"../chunks/index.i__Fl8cY.js";import{V as M}from"../chunks/ViewApp.m6vzcyjb.js";function U(q){let s,E="8. Exercises",w,u,R="Great work! Now you know the basics of how to create a Bagatell app that contains a static GUI (static GUI means that the GUI in each page looks the same each time the user comes to that page). Below you find examples of apps you can create with what you have learned so far. Try to implement them as exercises!",P,x,W="If you want to compare your implementation with our's, or if you need to take a peak on our implementation to get started, feel free to do so, but try to complete as much as possible on your own (that's how you learn).",I,d,g,_="Book Exercise",S,m,i,J="Open in Online Editor",B,p,f,K="App Exercise",C,h,l,O="Open in Online Editor",G;return m=new M({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:849,y:184}],pageTemplates:[]}}}),h=new M({props:{project:{app:{code:`class InfoApp extends App{
	
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
				Button.text(\`<-\`).page(MenuPage),
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
				Button.text(\`<-\`).page(MenuPage),
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
				Button.text(\`<-\`).page(MenuPage),
				Space,
			)
		)
	}
	
}`,x:407,y:494}],pageTemplates:[]}}}),{c(){s=a("h1"),s.textContent=E,w=b(),u=a("p"),u.textContent=R,P=b(),x=a("p"),x.textContent=W,I=b(),d=a("div"),g=a("div"),g.textContent=_,S=a("div"),Y(m.$$.fragment),i=a("a"),i.textContent=J,B=b(),p=a("div"),f=a("div"),f.textContent=K,C=a("div"),Y(h.$$.fragment),l=a("a"),l.textContent=O,this.h()},l(t){s=o(t,"H1",{"data-svelte-h":!0}),v(s)!=="svelte-1fw8dhh"&&(s.textContent=E),w=k(t),u=o(t,"P",{"data-svelte-h":!0}),v(u)!=="svelte-7ej8oy"&&(u.textContent=R),P=k(t),x=o(t,"P",{"data-svelte-h":!0}),v(x)!=="svelte-1waeygw"&&(x.textContent=W),I=k(t),d=o(t,"DIV",{class:!0});var e=V(d);g=o(e,"DIV",{class:!0,"data-svelte-h":!0}),v(g)!=="svelte-u2ql4w"&&(g.textContent=_),S=o(e,"DIV",{});var D=V(S);j(m.$$.fragment,D),i=o(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(i)!=="svelte-dilij7"&&(i.textContent=J),D.forEach(n),e.forEach(n),B=k(t),p=o(t,"DIV",{class:!0});var T=V(p);f=o(T,"DIV",{class:!0,"data-svelte-h":!0}),v(f)!=="svelte-2kwazy"&&(f.textContent=K),C=o(T,"DIV",{});var Z=V(C);j(h.$$.fragment,Z),l=o(Z,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),v(l)!=="svelte-wpbg9k"&&(l.textContent=O),Z.forEach(n),T.forEach(n),this.h()},h(){r(g,"class","remark-container__title"),r(i,"target","_blank"),r(i,"href","/editor#eNq1lW1v2jAQx7/Kza+IZNDa0IlG06TSdd0ktlWFF5tGJbzkApGCHdmXUYTy3WdjwhZEEa2KlIfzQ+4u/599XjFRFCxasVglyCIW58IY+Lq8KgrAR0KZGLD2aizH5O5YoyAcktB0J6bYCvwIaaRSS7hWf1C7Addb+Y8qVnGWqjxBbVj0a8WyhEVnnEkxdxHXvhhnKk0N0g8Wva3tn9auHjgrrL/Gl97ZF99oJL6Nv03eNXayvy2z3bzv1cJ04lmWJxplyw+NaViIGHndGlmXHbKP1mQ0QxhkRDlCH/HNJNg3qb+EOyTUMGjf/jej6fRa5eVc7om9O3FM/ZJIyY3ztWpwjyLJ5HQSdJxGrU+ZNmssAX/Kzf48ggYuzh6tshdW26V9X4YV98qfH1J+iLGSyemlt3rbC3IL2gApSPMlpFrNraEWVux1l7M4CJmADQo0w0yDWSASSIytcp2X8Gjo/779DNEbP3A+OTSxEaT9oQ4yELsxgifJvet6cmGvW5MLD5Hb/sBpwX2XMUJZKAkCKJsjd1w0wkIY25P73fTbonV1IQHP+TVBbWvDkaDOXgLq3zY4BlXYCzeoejWqi0Oo6mVw4ur2+QZuvn189ZrlqhVcTUUmn4Hk6ILV6176gmWX/ebQGOG8yK0k7vB4qP4Cc6x52w=="),r(i,"title","Open in our Online Editor"),r(d,"class","remark-container warning"),r(f,"class","remark-container__title"),r(l,"target","_blank"),r(l,"href","/editor#eNrNVW1vmzAQ/isnfwKJoaQJm4L2ZS/SWlWdqqUf9pJKccyRoIGN7KNpFvHfZ0NhSbRGe2mkCgG+M3fPwz1ne8t4WbJ4y4RKkMVM5NwYuJCpelOWgPeEMjFgx9uZnJG7hUZOOCWu6Zov0fPbGdJIlZZwhbJyfues25ia1QFLVZ6gNiz+tmVZwuJhwCQvHGSTigVMpalB+sziQTf+Ysf1bcBKm28vsk120Rp7zDv4nrozDrh/qLJD1p/U2oRileWJRum1UzO6sUlCsg9v7iriyjD3g252WnKBocl+oDcIB9GviZ2wKeYoCNYrTrBRFay5JCAFlkcChdIIfKEqCud+mGNK3kH23nqn8qqQv6F4+OGM3lZESj7gX3GdKZvcVdBrDFcPP3gs3P9vxK+YJ7xDbIxTI75X8jtu4FLJZYfbupznT8F3/f5e7wbs3rZZFAVsw+LRaFQHbRueHWvD/sefpA/3Se+0VwMDmQEOd1mCCpZ2SYFYcc0FoYYWJ4HFBj5m0hFRIUxX6ELIvkqdSYGWr0ob+3yjqxzhMpPLRBXh/Knb8fWLvhcf1ukRbR4V4+XwrBVjOOnEGB3dE7q+P60YDczfinGOtvZ2DBLREmu2BiOqHWmukYvVc5ViPJg0UgyjXoromBT7C/O0euzsC/+gShNRtCnIbd+5ukMDCy7tZZ6vHq8aPcaTcXdw3mBR5vYX3QF6W/8EDsXbVA=="),r(l,"title","Open in our Online Editor"),r(p,"class","remark-container warning")},m(t,e){c(t,s,e),c(t,w,e),c(t,u,e),c(t,P,e),c(t,x,e),c(t,I,e),c(t,d,e),y(d,g),y(d,S),A(m,S,null),y(S,i),c(t,B,e),c(t,p,e),y(p,f),y(p,C),A(h,C,null),y(C,l),G=!0},p:L,i(t){G||(F(m.$$.fragment,t),F(h.$$.fragment,t),G=!0)},o(t){H(m.$$.fragment,t),H(h.$$.fragment,t),G=!1},d(t){t&&(n(s),n(w),n(u),n(P),n(x),n(I),n(d),n(B),n(p)),N(m),N(h)}}}class nt extends X{constructor(s){super(),Q(this,s,null,U,z,{})}}export{nt as component};
