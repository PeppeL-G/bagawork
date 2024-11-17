import{s as z,n as Z}from"../chunks/scheduler.B0TnBjPs.js";import{S as $,i as tt,e as a,s as C,c as K,a as o,g as u,b as k,d as R,f as Y,h as n,o as s,j as r,p as w,m as j,t as Q,k as W,l as J}from"../chunks/index.Cnh3HYw3.js";import{V as U}from"../chunks/ViewApp.BajIxHdc.js";function et(H){let i,M="8. Exercises",B,x,_="Great work! Now you know the basics of how to create a BagaWork app that contains a static GUI (static GUI means that the GUI in each page looks the same each time the user comes to that page). Below you find examples of apps you can create with what you have learned so far. Try to implement them as exercises! Or, even better, come up with your own similar apps, and implement them 😃",I,h,N="If you want to compare your implementation with our's, or if you need to take a peak on our implementation to get started, feel free to do so, but try to complete as much as possible on your own (that's how you learn).",T,f,V="When you want to start implement the apps below, just click on the <code>Editor</code> link in the main menu above to start a new BagaWork project. There you can also download your BagaWork project and save it in a file on your computer, and later load it into the editor again from that file.",b,d,m,A="Book Exercise",y,g,l,O="Open in Online Editor",D,p,v,L="App Exercise",P,S,c,X="Open in Online Editor",G;return g=new U({props:{project:{app:{code:`class MyApp extends App{
	
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
	
}`,x:847,y:174}]}}}),S=new U({props:{project:{app:{code:`class InfoApp extends App{
	
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
	
}`,x:421,y:559}]}}}),{c(){i=a("h1"),i.textContent=M,B=C(),x=a("p"),x.textContent=_,I=C(),h=a("p"),h.textContent=N,T=C(),f=a("p"),f.innerHTML=V,b=C(),d=a("div"),m=a("div"),m.textContent=A,y=a("div"),K(g.$$.fragment),l=a("a"),l.textContent=O,D=C(),p=a("div"),v=a("div"),v.textContent=L,P=a("div"),K(S.$$.fragment),c=a("a"),c.textContent=X,this.h()},l(t){i=o(t,"H1",{"data-svelte-h":!0}),u(i)!=="svelte-1fw8dhh"&&(i.textContent=M),B=k(t),x=o(t,"P",{"data-svelte-h":!0}),u(x)!=="svelte-hh4d4a"&&(x.textContent=_),I=k(t),h=o(t,"P",{"data-svelte-h":!0}),u(h)!=="svelte-1waeygw"&&(h.textContent=N),T=k(t),f=o(t,"P",{"data-svelte-h":!0}),u(f)!=="svelte-p3k316"&&(f.innerHTML=V),b=k(t),d=o(t,"DIV",{class:!0});var e=R(d);m=o(e,"DIV",{class:!0,"data-svelte-h":!0}),u(m)!=="svelte-u2ql4w"&&(m.textContent=A),y=o(e,"DIV",{});var q=R(y);Y(g.$$.fragment,q),l=o(q,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),u(l)!=="svelte-bgh2qv"&&(l.textContent=O),q.forEach(n),e.forEach(n),D=k(t),p=o(t,"DIV",{class:!0});var E=R(p);v=o(E,"DIV",{class:!0,"data-svelte-h":!0}),u(v)!=="svelte-2kwazy"&&(v.textContent=L),P=o(E,"DIV",{});var F=R(P);Y(S.$$.fragment,F),c=o(F,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),u(c)!=="svelte-oqly6q"&&(c.textContent=X),F.forEach(n),E.forEach(n),this.h()},h(){s(m,"class","remark-container__title"),s(l,"target","_blank"),s(l,"href","/editor#eNq1lM1u2zAMx1+F0ykGtGD56Br41nRdNyDbiqaHFkuBaBadGHAkQ6aXBoGvPQ97xD3JJDvOZiMN0qIB/EFJFEn/fxbXTCQJ89cs0BKZz4JYpCl8WZ0lCeADoZIpWHs9URNyd2BQEI5JGLoSM2x55QoZpMwoONc/0bgFN5uXm3KWcxbqWKJJmf99zSLJ/A5nSixcxiIW40yHYYp0y/x3lX1n7fyes8TGq+0sg30uB7XCt/m3xbtBo/rLLGrWfa2XaTuYR7E0qFrl0oTGiQiQV6MbG7JN9tGa3swRRhFRjDBEfDP1djkNV3CFhAZGby//86gHPddxtlA7cjcdJzTMiLTaBC9Ug2sUMlKzqdd2GrU+RiYtsHj8qTC76/BquDh7sMqedDlb2fdpN+el8t19yo8x0EoeX3qrt70gtqAlkIYwXkFo9MIaemnFLqacxUEoCTYp0BwjA+kSkUBhYJVrv4RHTf8/j7+eoXrtC7rTfY6NLL+rLCPRTOI9De99v1PA6w36FbzePnjbTzguu28qQMgSrUAARQvkDo1BWIrUzsTlgfph6brWIKFE/aqstv3hQFadF7H6dxYOotUb9Da0BhWtk320ql/hyD3u0wVcfP3w6p3L9Sw4m4lIPQPKwW1r0D/dtK1+fp//BdLPea0="),s(l,"title","Open in our Online Editor"),s(d,"class","remark-container exercise"),s(v,"class","remark-container__title"),s(c,"target","_blank"),s(c,"href","/editor#eNrNVNtq20AQ/ZVhnyQQIrKrQPTWCzQhpIS6D7044PVqZIvKu2J3FMc1eu6f9MP6Jd3VRq5tUvcWQzCyd2Y9c47mnN0143XNsjUTKkeWMVFxY+BCFup5XQPeEcrcgF2vx3JM7hEaOeGIuKZrPsMg9DukkRot4Qpl4/Iu2fqalrURK1SVozYs+7RmZc6yJGKSLxxk14pFTBWFQXrPspN+/cGu25uI1bbfTqVvduGDHeY9/Ia6C/a4v27KfdZv1dLEYl5WuUYZ+K0xvbNNYrJfwcRNxI1hEkb97qjmAmNTfsHgJD5Jf25slY2wQkGwnHOClWpgySUBKbA8clgojcCnqqF4EsYVFhTsdd9EL1XVLOQDFPf/OKYXDZGS9/hXXJfKNncTDLrAzSOMflUe/jfiR6xy3iN2wbERXyn5GVdwqeSsx/Upl/lT8O18uOPdiN1Zm6VpxFYsGw6HbeRtODhkw82LP4oPd0lv2auDgdIAh9syRwUze6RAzLnmglCDx8lhuoI3pXREVAyjOboSsj+1LqVAy1cVXXy+0k2FcFnKWa4W8eSx7fj967eNGe8P6u/FeUCO02Tg5UjOejmGB2+F3vnHlaOD+Vs5ztFO365BIlpi3eVgRLMlzjVyMX+6YjxL/NlITge9GOkhMXYP53EV2bob/kGXrmLhW5C7wit1iwamXNqPecKKDJJOkTQ9a2/aH2RX2hE="),s(c,"title","Open in our Online Editor"),s(p,"class","remark-container exercise")},m(t,e){r(t,i,e),r(t,B,e),r(t,x,e),r(t,I,e),r(t,h,e),r(t,T,e),r(t,f,e),r(t,b,e),r(t,d,e),w(d,m),w(d,y),j(g,y,null),w(y,l),r(t,D,e),r(t,p,e),w(p,v),w(p,P),j(S,P,null),w(P,c),G=!0},p:Z,i(t){G||(Q(g.$$.fragment,t),Q(S.$$.fragment,t),G=!0)},o(t){W(g.$$.fragment,t),W(S.$$.fragment,t),G=!1},d(t){t&&(n(i),n(B),n(x),n(I),n(h),n(T),n(f),n(b),n(d),n(D),n(p)),J(g),J(S)}}}class rt extends ${constructor(i){super(),tt(this,i,null,et,z,{})}}export{rt as component};
