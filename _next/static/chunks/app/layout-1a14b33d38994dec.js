(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9873:function(e,t,n){Promise.resolve().then(n.bind(n,9205)),Promise.resolve().then(n.bind(n,5482)),Promise.resolve().then(n.t.bind(n,936,23)),Promise.resolve().then(n.t.bind(n,8877,23))},9205:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return v}});var o=n(7437),r=n(2265),a=["light","dark"],s="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=r.createContext(void 0),d=e=>r.useContext(l)?e.children:r.createElement(m,{...e}),c=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:i="theme",themes:d=c,defaultTheme:m=n?"system":"light",attribute:v="data-theme",value:b,children:p,nonce:g})=>{let[$,w]=r.useState(()=>f(i,m)),[S,T]=r.useState(()=>f(i)),C=b?Object.values(b):d,_=r.useCallback(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let s=b?b[r]:r,i=t?h():null,l=document.documentElement;if("class"===v?(l.classList.remove(...C),s&&l.classList.add(s)):s?l.setAttribute(v,s):l.removeAttribute(v),o){let e=a.includes(m)?m:null,t=a.includes(r)?r:e;l.style.colorScheme=t}null==i||i()},[]),k=r.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(i,t)}catch(e){}},[e]),E=r.useCallback(t=>{T(y(t)),"system"===$&&n&&!e&&_("system")},[$,e]);r.useEffect(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),r.useEffect(()=>{let e=e=>{e.key===i&&k(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),r.useEffect(()=>{_(null!=e?e:$)},[e,$]);let x=r.useMemo(()=>({theme:$,setTheme:k,forcedTheme:e,resolvedTheme:"system"===$?S:$,themes:n?[...d,"system"]:d,systemTheme:n?S:void 0}),[$,k,e,S,n,d]);return r.createElement(l.Provider,{value:x},r.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:i,themes:d,defaultTheme:m,attribute:v,value:b,children:p,attrs:C,nonce:g}),p)},u=r.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:i,defaultTheme:l,value:d,attrs:c,nonce:m})=>{let u="system"===l,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?(a.includes(l)?l:null)?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,o=!0)=>{let r=d?d[e]:e,s=t?e+"|| ''":`'${r}'`,l="";return i&&o&&!t&&a.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?t||r?l+=`c.add(${s})`:l+="null":r&&(l+=`d[s](n,${s})`),l},v=e?`!function(){${f}${y(e)}}()`:o?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${y(d?"x[e]":"e",!0)}}${u?"":"else{"+y(l,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${y(d?"x[e]":"e",!0)}}else{${y(l,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})}),f=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light");function v(e){let{children:t,...n}=e;return(0,o.jsx)(d,{...n,children:t})}},5482:function(e,t,n){"use strict";n.r(t),n.d(t,{Tooltip:function(){return l},TooltipContent:function(){return c},TooltipProvider:function(){return i},TooltipTrigger:function(){return d}});var o=n(7437),r=n(2265),a=n(480),s=n(9311);let i=a.zt,l=a.fC,d=a.xz,c=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...i}=e;return(0,o.jsx)(a.VY,{ref:t,sideOffset:r,className:(0,s.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});c.displayName=a.VY.displayName},9311:function(e,t,n){"use strict";n.d(t,{cn:function(){return a}});var o=n(7042),r=n(4769);function a(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,o.W)(t))}},8877:function(){},936:function(e){e.exports={style:{fontFamily:"'__Inter_36bd41', '__Inter_Fallback_36bd41'",fontStyle:"normal"},className:"__className_36bd41"}}},function(e){e.O(0,[859,971,864,744],function(){return e(e.s=9873)}),_N_E=e.O()}]);