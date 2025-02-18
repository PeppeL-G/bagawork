import{s as X,n as Y}from"../chunks/scheduler.B0TnBjPs.js";import{S as $,i as tt,e as a,s as C,c as H,a as o,g as u,b as k,d as q,f as O,h as n,o as s,j as r,p as P,m as Q,t as U,k as W,l as z}from"../chunks/index.BXVnRmkj.js";import{V as J}from"../chunks/ViewApp.qg7AIhJt.js";function et(Z){let i,_="8. Exercises",B,x,R="Great work! Now you know the basics of how to create a BagaWork app that contains a static GUI (static GUI means that the GUI on each page looks the same each time the user comes to that page). Below you find examples of apps you can create with what you have learned so far. Try to implement them as exercises! Or even better, try to come up with your own similar apps, and implement them instead 😃",I,f,L="If you want to compare your implementation with ours, or if you need to take a peak at our implementations to get started, feel free to do so, but try to complete as much as possible on your own (when you struggle, you learn!).",T,h,V="When you want to start implement the apps below, just click on the <code>Editor</code> link in the main menu above to start a new BagaWork project. There you can also download your BagaWork project and save it in a file on your computer, and later load it into the editor again from that file if you want.",b,d,m,K="Book Exercise",S,g,l,M="Open in Online Editor",E,p,v,j="App Exercise",w,y,c,A="Open in Online Editor",N;return g=new J({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:152,y:172},{id:2,folderId:1,code:`class SecondPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`BeeBee loved to fly from flower to flower, and eat their sweet nectar.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(FirstPage),
				Space,
				Text.text(\`2\`),
				Space,
				Button.text(\`→\`).page(LastPage),
			),
		)
	}
	
}`,x:641,y:384},{id:3,folderId:1,code:`class FirstPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Once upon a time, there was a little bee named BeeBee.\`),
			Space,
			Columns.children(
				Button.text(\`←\`).page(CoverPage),
				Space,
				Text.text(\`1\`),
				Space,
				Button.text(\`→\`).page(SecondPage),
			),
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
	
}`,x:847,y:174}]}}}),y=new J({props:{project:{app:{code:`class InfoApp extends App{
	
	createStartPage(){
		return MenuPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class MenuPage extends Page{
	
	createGui(){
		return Rows.children(
			Text.text(\`Info App\`),
			Space.grow(0.05),
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
			),
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
			),
		)
	}
	
}`,x:415,y:162},{id:5,folderId:1,code:`class DonkeyKongPage extends Page{
	
	createGui(){
		return Rows.children(
			Space,
			Text.text(\`Donkey Kong is a video game character created by Nintendo. He is a monkey that loves bananas.\`),
			Space,
			Columns.children(
				Space,
				Button.text(\`⇦\`).page(MenuPage),
				Space,
			),
		)
	}
	
}`,x:421,y:559}]}}}),{c(){i=a("h1"),i.textContent=_,B=C(),x=a("p"),x.textContent=R,I=C(),f=a("p"),f.textContent=L,T=C(),h=a("p"),h.innerHTML=V,b=C(),d=a("div"),m=a("div"),m.textContent=K,S=a("div"),H(g.$$.fragment),l=a("a"),l.textContent=M,E=C(),p=a("div"),v=a("div"),v.textContent=j,w=a("div"),H(y.$$.fragment),c=a("a"),c.textContent=A,this.h()},l(t){i=o(t,"H1",{"data-svelte-h":!0}),u(i)!=="svelte-1fw8dhh"&&(i.textContent=_),B=k(t),x=o(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1a6jm7o"&&(x.textContent=R),I=k(t),f=o(t,"P",{"data-svelte-h":!0}),u(f)!=="svelte-mrj69u"&&(f.textContent=L),T=k(t),h=o(t,"P",{"data-svelte-h":!0}),u(h)!=="svelte-jw509w"&&(h.innerHTML=V),b=k(t),d=o(t,"DIV",{class:!0});var e=q(d);m=o(e,"DIV",{class:!0,"data-svelte-h":!0}),u(m)!=="svelte-u2ql4w"&&(m.textContent=K),S=o(e,"DIV",{});var D=q(S);O(g.$$.fragment,D),l=o(D,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),u(l)!=="svelte-bgh2qv"&&(l.textContent=M),D.forEach(n),e.forEach(n),E=k(t),p=o(t,"DIV",{class:!0});var F=q(p);v=o(F,"DIV",{class:!0,"data-svelte-h":!0}),u(v)!=="svelte-2kwazy"&&(v.textContent=j),w=o(F,"DIV",{});var G=q(w);O(y.$$.fragment,G),c=o(G,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),u(c)!=="svelte-khf6sw"&&(c.textContent=A),G.forEach(n),F.forEach(n),this.h()},h(){s(m,"class","remark-container__title"),s(l,"target","_blank"),s(l,"href","/editor#eNq1lM1u2zAMx1+F0ykGtGD56Br41nRdNyDbiqaHFkuBaBadGHAkQ6aXBoGvPQ97xD3JJDvOZiMN0qIB/EFJFEn/fxbXTCQJ89cs0BKZz4JYpCl8WZ0lCeADoZIpWHs9URNyd2BQEI5JGLoSM2x55QoZpMwoONc/0bgFN5uXm3KWcxbqWKJJmf99zSLJ/A5nSixcxiIW40yHYYp0y/x3lX1n7fyes8TGq+0sg30uB7XCt/m3xbtBo/rLLGrWfa2XaTuYR7E0qFrl0oTGiQiQV6MbG7JN9tGa3swRRhFRjDBEfDP1djkNV3CFhAZGby//86gHPddxtlA7cjcdJzTMiLTaBC9Ug2sUMlKzqdd2GrU+RiYtsHj8qTC76/BquDh7sMqedDlb2fdpN+el8t19yo8x0EoeX3qrt70gtqAlkIYwXkFo9MIaemnFLqacxUEoCTYp0BwjA+kSkUBhYJVrv4RHTf8/j7+eoXrtC7rTfY6NLL+rLCPRTOI9De99v1PA6w36FbzePnjbTzguu28qQMgSrUAARQvkDo1BWIrUzsTlgfph6brWIKFE/aqstv3hQFadF7H6dxYOotUb9Da0BhWtk320ql/hyD3u0wVcfP3w6p3L9Sw4m4lIPQPKwW1r0D/dtK1+fp//BdLPea0="),s(l,"title","Open in our Online Editor"),s(d,"class","remark-container exercise"),s(v,"class","remark-container__title"),s(c,"target","_blank"),s(c,"href","/editor#eNrNVNtq20AQ/ZVhnyQQwrKrQPTWptCEkBLqPvTigNerkS0q74rVKI4xeu6f9MPyJd3VRq5lEvcWQzCyd2Y9c47mnN0N42XJkg0TKkWWMFHwqoILmanXZQl4RyjTCsx6M5ETso/QyAnHxDVd8zl6vtshjVRrCVcoa5u3ycbVNKwJWKaKFHXFkq8blqcsiQIm+dJCtq1YwFSWVUifWDLo1p/NurkJWGn69SpdswsX9Jh38FvqNtjj/q7O91l/UKsqFIu8SDVKz21N6KNpEpL58qZ2InYMUz/odsclFxjOtVp5g3AQ/9rYKRtjgYJgteAEa1XDiksCUmB4pLBUGoHPVE3h1A8LzMjb676NzlRRL+UjFPf/OKE3NZGSD/hXXOfKNLcT9NrAzsMPnir3/xvxCxYp7xDb4NiIb5X8hmu4VHLe4bqUzfwp+G7e73k3YHfGZnEcsDVLRqNREzgbDg/ZcPviz+LDPukde7UwkFfA4TZPUcHcHCkQC665INTgcFKYreF9Li0RFcJ4gbaEzE+pcynQ8FVZG5+vdV0gXOZynqplOH1uO95//7E148NB/b04j8hxEg2dHNFpJ8fo4K3QOf+4crQwfyvHOZrpmzVIREOsvRwqUe+Ic41cLF6uGK8idzaik2EnRnxIjP7hPK4iO3fDP+jSVixdC7JXeKFusYIZl+ZTvWBFhlGrSByfNjfNT3622hU="),s(c,"title","Open in our Online Editor"),s(p,"class","remark-container exercise")},m(t,e){r(t,i,e),r(t,B,e),r(t,x,e),r(t,I,e),r(t,f,e),r(t,T,e),r(t,h,e),r(t,b,e),r(t,d,e),P(d,m),P(d,S),Q(g,S,null),P(S,l),r(t,E,e),r(t,p,e),P(p,v),P(p,w),Q(y,w,null),P(w,c),N=!0},p:Y,i(t){N||(U(g.$$.fragment,t),U(y.$$.fragment,t),N=!0)},o(t){W(g.$$.fragment,t),W(y.$$.fragment,t),N=!1},d(t){t&&(n(i),n(B),n(x),n(I),n(f),n(T),n(h),n(b),n(d),n(E),n(p)),z(g),z(y)}}}class rt extends ${constructor(i){super(),tt(this,i,null,et,X,{})}}export{rt as component};
