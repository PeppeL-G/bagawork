import{C as s,U as r}from"./65.c7fD0vwE.js";const i=n=>{const{r:t,g:a,b:o}=s.parse(n),e=.2126*r.channel.toLinear(t)+.7152*r.channel.toLinear(a)+.0722*r.channel.toLinear(o);return r.lang.round(e)},c=n=>i(n)>=.5,u=n=>!c(n);export{u as i};
