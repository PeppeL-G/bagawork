import{s as at,n as ot}from"../chunks/scheduler.UQwd20JU.js";import{S as lt,i as st,e as r,s as y,c as R,a,g as d,b as O,d as E,f as M,h as e,o,j as l,p as u,m as q,t as z,k as Q,l as W}from"../chunks/index.i__Fl8cY.js";import{V as X}from"../chunks/ViewApp.m6vzcyjb.js";function it(rt){let s,U="8. Exercises",N,m,H="Way to go! Your first step towards becoming a programmer is now taken 😎",$,g,J="Below you have examples of apps you should be able to implement with what you have learned so far. Why don't you give it a try to implement them yourself from scratch?",k,c,v,F="Multiplication Table Exercise",I,S,i,Z="Open in Online Editor",G,f,C,L="Counter Exercise",P,B,p,tt="Open in Online Editor",V,h,T,et="Power Point Presentation Exercise",A,w,x,nt="Open in Online Editor",D;return S=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return StartPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:"class StartPage extends Page{\n	\n	x = 0\n	\n	createGui(){\n		return Rows.children(\n			Space,\n			Columns.children(\n				Space,\n				Button.text(`-`).handler(p.decrement),\n				Space,\n				Text.text(`${p.x}`),\n				Space,\n				Button.text(`+`).handler(p.increment),\n				Space,\n			),\n			Space,\n			Text.text(`0 * ${p.x} = ${0 * p.x}`),\n			Text.text(`1 * ${p.x} = ${1 * p.x}`),\n			Text.text(`2 * ${p.x} = ${2 * p.x}`),\n			Text.text(`3 * ${p.x} = ${3 * p.x}`),\n			Text.text(`4 * ${p.x} = ${4 * p.x}`),\n			Text.text(`5 * ${p.x} = ${5 * p.x}`),\n			Text.text(`6 * ${p.x} = ${6 * p.x}`),\n			Text.text(`7 * ${p.x} = ${7 * p.x}`),\n			Text.text(`8 * ${p.x} = ${8 * p.x}`),\n			Text.text(`9 * ${p.x} = ${9 * p.x}`),\n			Space,\n		)\n	}\n	\n	decrement(){\n		p.x -= 1\n	}\n	\n	increment(){\n		p.x += 1\n	}\n	\n}",x:200,y:300}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),B=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return CounterPage
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class CounterPage extends Page{
	
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
			Text.text(\`\${p.counter}\`).size(1),
			Columns.size(1).children(
				Rows.size(1).children(
					Button.text(\`-\`).size(1).handler(p.decrementCounter),
					Button.text(\`Reset\`).size(1).handler(p.resetCounter),
				),
				Button.text(\`+\`).size(1).handler(p.incrementCounter),
			),
		)
	}
	
}`,x:100,y:300}],pageTemplates:[]}}}),w=new X({props:{project:{app:{code:`class MyApp extends App{
	
	createStartPage(){
		return Slide1
	}
	
}`},folders:[{id:1,name:"Start",offsetX:0,offsetY:0}],pages:[{id:1,folderId:1,code:`class Slide1 extends Page{
	
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
	
}`,x:200,y:300},{id:3,folderId:1,code:`class Slide2 extends Page{
	
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
	
}`,x:532,y:298}],pageTemplates:[{id:1,code:`class AskIfAdultPage extends Page{
	
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
	
}`}]}}}),{c(){s=r("h1"),s.textContent=U,N=y(),m=r("p"),m.textContent=H,$=y(),g=r("p"),g.textContent=J,k=y(),c=r("div"),v=r("div"),v.textContent=F,I=r("div"),R(S.$$.fragment),i=r("a"),i.textContent=Z,G=y(),f=r("div"),C=r("div"),C.textContent=L,P=r("div"),R(B.$$.fragment),p=r("a"),p.textContent=tt,V=y(),h=r("div"),T=r("div"),T.textContent=et,A=r("div"),R(w.$$.fragment),x=r("a"),x.textContent=nt,this.h()},l(t){s=a(t,"H1",{"data-svelte-h":!0}),d(s)!=="svelte-1fw8dhh"&&(s.textContent=U),N=O(t),m=a(t,"P",{"data-svelte-h":!0}),d(m)!=="svelte-1s5j6rv"&&(m.textContent=H),$=O(t),g=a(t,"P",{"data-svelte-h":!0}),d(g)!=="svelte-1c8b0eh"&&(g.textContent=J),k=O(t),c=a(t,"DIV",{class:!0});var n=E(c);v=a(n,"DIV",{class:!0,"data-svelte-h":!0}),d(v)!=="svelte-849ou9"&&(v.textContent=F),I=a(n,"DIV",{});var K=E(I);M(S.$$.fragment,K),i=a(K,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),d(i)!=="svelte-1jrzj8e"&&(i.textContent=Z),K.forEach(e),n.forEach(e),G=O(t),f=a(t,"DIV",{class:!0});var _=E(f);C=a(_,"DIV",{class:!0,"data-svelte-h":!0}),d(C)!=="svelte-1wlxgx"&&(C.textContent=L),P=a(_,"DIV",{});var Y=E(P);M(B.$$.fragment,Y),p=a(Y,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),d(p)!=="svelte-1845hyx"&&(p.textContent=tt),Y.forEach(e),_.forEach(e),V=O(t),h=a(t,"DIV",{class:!0});var b=E(h);T=a(b,"DIV",{class:!0,"data-svelte-h":!0}),d(T)!=="svelte-11llafs"&&(T.textContent=et),A=a(b,"DIV",{});var j=E(A);M(w.$$.fragment,j),x=a(j,"A",{target:!0,href:!0,title:!0,"data-svelte-h":!0}),d(x)!=="svelte-pizk93"&&(x.textContent=nt),j.forEach(e),b.forEach(e),this.h()},h(){o(v,"class","remark-container__title"),o(i,"target","_blank"),o(i,"href","/editor#eNrFlGFrnEAQhv/KsgSqjRH1cslFCMGUUvKhJSSBJtTAiY65I97usq70DvG/d42NcS7n9mg/9IOw6z7vzjjjOzVNhKBhTVOeAQ1pWiRlSb5uIiEIrBWwrCR6XccsVu2TSkgU3KpEquvkCSy7O1ESVCUZ6Q/at00namjj0JwXGciShj9qusxo6DuUJas24ouEOpTneQnqnobe6/pBr5tHhwp9H1J2l111G5R4H79Pvt302a/JOfHwp3ypltsfccN/lm66WBaZBGZ1R7G6FUkKzuvuEy+qFduBbYOxuqyU4sxVOiNrfjS33UXCsgKkJdwMdBIrYMp2xvV3WvhbfVALd93MTTSKdoiiLdkfo72d4PeDHDzykXR56GIe1O12K6kB7GPYN8IBhgMjPMHwxAgfY/jYCE8xPDXCJxg+McKnGD41wjMMz4zwGYbP3sPDftoDd8aq/wl7H2gpOTonPsL6vwdhhxhrtJHXNAw8beINDSdeb+A7WIlC+w0ZGXk3Kp+v8iirCoOBObuEnMu3uYNS/CdHD6oZSSAbXpGXMUOUdhDxZxfzMXP87Sz4xrU929pYrCqKvU39AOV+OntnuzmLcqXnwY4KtpO6602w1ZvPTEuiJ/jfnfm+SNSHsm2OJDr6eE9QxXxvd8EwNN0DCva5KRi5adyC5p48Nr8AHFC0MA=="),o(i,"title","Open in our Online Editor"),o(c,"class","remark-container warning"),o(C,"class","remark-container__title"),o(p,"target","_blank"),o(p,"href","/editor#eNqFUk1rwzAM/StB7JDQNKTsFuhh62HsMBhdDxtLYSFR10BiG1th7YL/++ym+Wy3HWxkSe9JT1YNiRAQ1ZDyDCGCtEiUcp6Od0I4eCBkmXKMXccsJntSiQnhCyWSnpNPdL0mQhKpksxZ8YoRShuyft3ANGgfdrzIUCqI3mvIM4gWPrCktDVPbOAD3+0U0itEYWu/GVtvfRCGb4RsyB6bx6j1QQedAPvoFTQJztIJW1fOjKwSGZ3BnSoRtNmzpbMYKIopw38x8ylGotH0e/65Iz2e9UOVT6e85l8qSPd5kUlkbhOKaWPkBmQu9+Om7lj1hxeo/Bvdhee3mSteVCVTrf+SKqZTiT/iMd1XRJydC877KsE+YVlhBIpgOqO+gwuCtR3NVZLh0IYEQ3tENbtKM/3jHt5a3mhjfTiY5QrNKh4hug27NdxgKQrzLXYdt/oH/qgrvQ=="),o(p,"title","Open in our Online Editor"),o(f,"class","remark-container warning"),o(T,"class","remark-container__title"),o(x,"target","_blank"),o(x,"href","/editor#eNrNlFGPmkAQx7/KdF8KKSWIZ3KSmgs2TetDm8tp0rvUS9zIoMR1l7JL7ozha/UL9It1kUNFoYdP7YNkhZn//Gd+k90SGsfE25K5CJB4ZM6olPB148cx4LNCHkjQ5+2UT1X+mydIFY4VTdQtXaBhFl9UgipNOIxZFGAnf5UVGRnJLBIKFmAiifdjS6KAeB2LcLrOy+2EiEVEGEpU98RzyvODPmePFol1lUpmITYq/lRcF8X3tnN/B98i5QoTGIBTvhJ8iKFIDj3Edhn1bgDHTZRtf06j04bvxJO0YxoEEV8YPdOeLyMWJMiNImqqJtqOrfTDmH1BxsSbmWmV38YxnaNVEwnvYQR0Dbeo3cxMm2GoDNOWS/E0Cg0XPgxgb9ZsEBgKba/T7ztn+d1W+Xc0khhAxGFIE1wLKX//OpO6apCqdjZMlZ72i/Q3/dQ6OVejIGbaK8RYqx0AaNWu2TLf3edfwaDGjVlZR4s8E8919J5tiNd1nMwqNqv76ma5/9lmNW7PZEn5CjYiBW0CWCS1ay3SavN8voGfKUoVCS5vZq/u3CWg3b3aEWhw/8Kp13V3nNz+dXkXTHAdMz2xyp1QgeXL1Sj0g5Ttbqh6aGeELmDSHoSf4A7Dbq9AaSzQub5pxPBRsHTNawqcBp4OWpRj5iljptUy7QFlu7w6QPkI/VATrJtgfukXbNwTNp9y6P4C/zWZ70uq3socTgK6ejOTysQ6Tv3AqkG9FkFuGyW3QenY4SVMHrM/FvHVIA=="),o(x,"title","Open in our Online Editor"),o(h,"class","remark-container warning")},m(t,n){l(t,s,n),l(t,N,n),l(t,m,n),l(t,$,n),l(t,g,n),l(t,k,n),l(t,c,n),u(c,v),u(c,I),q(S,I,null),u(I,i),l(t,G,n),l(t,f,n),u(f,C),u(f,P),q(B,P,null),u(P,p),l(t,V,n),l(t,h,n),u(h,T),u(h,A),q(w,A,null),u(A,x),D=!0},p:ot,i(t){D||(z(S.$$.fragment,t),z(B.$$.fragment,t),z(w.$$.fragment,t),D=!0)},o(t){Q(S.$$.fragment,t),Q(B.$$.fragment,t),Q(w.$$.fragment,t),D=!1},d(t){t&&(e(s),e(N),e(m),e($),e(g),e(k),e(c),e(G),e(f),e(V),e(h)),W(S),W(B),W(w)}}}class ut extends lt{constructor(s){super(),st(this,s,null,it,at,{})}}export{ut as component};
