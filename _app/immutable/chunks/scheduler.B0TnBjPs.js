function g(){}const M=t=>t;function x(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function w(t){return t()}function B(){return Object.create(null)}function j(t){t.forEach(w)}function E(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const o of n)o(void 0);return g}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(O(n,e))}function S(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function U(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const a=[],l=Math.max(n.dirty.length,r.length);for(let u=0;u<l;u+=1)a[u]=n.dirty[u]|r[u];return a}return n.dirty|r}return n.dirty}function G(t,n,e,o,r,a){if(r){const l=m(n,e,o,a);t.p(l,r)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function I(t,n,e){return t.set(e),n}function J(t){return t&&E(t.destroy)?t.destroy:g}let f;function d(t){f=t}function y(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){y().$$.on_mount.push(t)}function L(t){y().$$.after_update.push(t)}function N(t){y().$$.on_destroy.push(t)}const i=[],b=[];let c=[];const h=[],k=Promise.resolve();let p=!1;function q(){p||(p=!0,k.then(z))}function Q(){return q(),k}function v(t){c.push(t)}function R(t){h.push(t)}const _=new Set;let s=0;function z(){if(s!==0)return;const t=f;do{try{for(;s<i.length;){const n=i[s];s++,d(n),D(n.$$)}}catch(n){throw i.length=0,s=0,n}for(d(null),i.length=0,s=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];_.has(e)||(_.add(e),e())}c.length=0}while(i.length);for(;h.length;)h.pop()();p=!1,_.clear(),d(t)}function D(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function T(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{y as A,R as B,I as C,N as D,J as a,U as b,S as c,P as d,L as e,b as f,H as g,v as h,E as i,M as j,B as k,z as l,F as m,g as n,K as o,T as p,f as q,j as r,C as s,Q as t,G as u,d as v,w,i as x,q as y,A as z};
