if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>n(e,r),d={module:{uri:r},exports:o,require:f};i[r]=Promise.all(s.map((e=>d[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-9517df1b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-de93e5f6.js",revision:null},{url:"index.html",revision:"bb9fa48c525f9d30a5876d6472c2ef30"},{url:"registerSW.js",revision:"44a4cfdd55e265b5f3e532303678d2c3"},{url:"manifest.webmanifest",revision:"35b8f1b2fa62f1b941ef76bbf8cb7856"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));