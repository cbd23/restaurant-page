(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),i=n.n(a),s=n(645),d=n.n(s)()(i());d.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family:'Segoe UI', Tahoma, Verdana, sans-serif;    \n}\n\n#content {\n    /* border: 2px solid red; */\n\n    min-height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    background-color: bisque;\n    font-size: 1rem;\n    font-weight: 600;\n\n    height: 80px;\n    display: flex;\n}\n\n.header-leftside {\n    /* border: 2px solid green; */\n\n    display: flex;\n\n    flex: 1;\n}\n\n.logo {\n    flex: 1;\n\n    height: 150px;\n}\n\nimg[src=\"../src/logo.png\"] {\n    /* border: 2px solid black; */\n\n    margin-left: 18px;\n\n    cursor: pointer;\n}\n\n.header-rightside {\n    margin-top: 8px;\n\n    display: flex;\n    flex-direction: row;\n\n    flex: 1;\n}\n\n.about,\n.book,\n.gallery,\n.contact {\n    border: 2px solid blueviolet;\n\n    height: 1rem;\n    \n    display: flex;\n    justify-content: center;\n\n    flex: 1;\n\n    cursor: pointer;\n}\n\n.tabs { \n    font-size: 1rem;\n    font-weight: 600;\n\n    flex: 1 1 66px;\n\n    display: flex;\n}\n\n.tab-placeholder {\n    background-color: #8c5fa8;\n\n    display: flex;\n\n    flex: 1;\n}\n\n.tab-option {\n    /* border: 1px solid black; */\n\n    background-color: #8c5fa8;\n    color:whitesmoke;\n\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n    align-items: center;\n\n    flex: 1;\n    cursor: pointer;\n}\n\nsvg {\n    background-color: #8c5fa8;\n    height: 40px;\n}\n\n.tab-text {\n    background-color: #8c5fa8;\n}\n\n.display {\n    background-color: bisque;\n\n    display: flex;\n    flex-direction: column;\n\n    flex: 10;\n}\n\n.section {\n    border: 2px solid sandybrown;\n    flex: 1;\n\n}\n\n.stuff {\n    border: 2px solid red;\n\n    flex: 10;\n\n    display: grid;\n\n    margin: 60px 160px;\n    gap: 40px 20px;\n\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(3, 1fr);\n}\n\n.item {\n    background-color: white;\n\n    border: 2px solid black;\n    border-radius: 8px;\n\n    display: flex;\n\n}\n\n.item-pic {\n    margin-right: 16px;\n    \n    flex: 1;\n    align-self: center;\n}\n\n.item-pic > img {\n    border-radius: 8px;    \n}\n\n.item-text {\n\n    flex: 5;\n}\n\n.item-name {\n    font-size: 1.2rem;\n    font-weight: 600;\n\n    margin-top: 8px;\n}\n\n.item-description {\n    margin-top: 8px;\n}\n\n.item-price {\n    margin-top: 8px;\n    margin-right: 6px;\n\n    flex: 2;\n    text-align: end;\n}",""]);const c=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(a)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(d[r]=!0)}for(var l=0;l<e.length;l++){var o=[].concat(e[l]);a&&d[o[0]]||(void 0!==s&&(void 0===o[5]||(o[1]="@layer".concat(o[5].length>0?" ".concat(o[5]):""," {").concat(o[1],"}")),o[5]=s),n&&(o[2]?(o[1]="@media ".concat(o[2]," {").concat(o[1],"}"),o[2]=n):o[2]=n),i&&(o[4]?(o[1]="@supports (".concat(o[4],") {").concat(o[1],"}"),o[4]=i):o[4]="".concat(i)),t.push(o))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var s={},d=[],c=0;c<e.length;c++){var r=e[c],l=a.base?r[0]+a.base:r[0],o=s[l]||0,p="".concat(l," ").concat(o);s[l]=o+1;var m=n(p),u={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=i(u,a);a.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}d.push(p)}return d}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var s=a(e=e||[],i=i||{});return function(e){e=e||[];for(var d=0;d<s.length;d++){var c=n(s[d]);t[c].references--}for(var r=a(e,i),l=0;l<s.length;l++){var o=n(s[l]);0===t[o].references&&(t[o].updater(),t.splice(o,1))}s=r}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,i&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={id:a,exports:{}};return e[a](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),i=n.n(a),s=n(569),d=n.n(s),c=n(565),r=n.n(c),l=n(216),o=n.n(l),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=r(),h.insert=d().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=o(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals,console.log("test: everything is working");const v=document.getElementById("content"),x=document.createElement("div");x.classList.add("header");const g=document.createElement("div");g.classList.add("header-leftside");const f=document.createElement("div");f.classList.add("logo");const b=document.createElement("img");b.src="../src/logo.png",b.setAttribute("height","80px");const C=document.createElement("div");C.classList.add("header-rightside");const E=document.createElement("div");E.classList.add("about"),E.innerText="ABOUT US";const L=document.createElement("div");L.classList.add("book"),L.innerText="BOOK A TABLE";const z=document.createElement("div");z.classList.add("gallery"),z.innerText="GALLERY";const w=document.createElement("div");w.classList.add("contact"),w.innerText="CONTACT",f.appendChild(b),g.appendChild(f),C.appendChild(E),C.appendChild(L),C.appendChild(z),C.appendChild(w),x.appendChild(g),x.appendChild(C),v.appendChild(x);const A=document.createElement("div");A.classList.add("tabs");const y=document.createElement("div");y.classList.add("tab-placeholder");const T=document.createElement("div");T.classList.add("tab-placeholder");const M=document.createElement("div");M.classList.add("tab-option");const k=document.createElement("div");k.classList.add("tab-icon");const H=document.createElementNS("http://www.w3.org/2000/svg","svg");H.setAttribute("xmlns","http://www.w3.org/2000/svg"),H.setAttribute("viewBox","0 0 48 48"),H.setAttribute("class","injected-svg"),H.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-pizza-1.svg"),H.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),H.setAttribute("fill","white"),H.setAttribute("height","30px"),H.innerHTML='<path d="M42.834 8.752C37.804 3.72 31.114.95 24 .95c-7.115 0-13.803 2.771-18.834 7.802a1.535 1.535 0 0 0-.289 1.769l17.75 35.678a1.535 1.535 0 0 0 2.747 0l17.75-35.678a1.535 1.535 0 0 0-.29-1.77zM24 4.019c5.928 0 11.522 2.175 15.872 6.146l-1.188 2.387C34.63 8.952 29.467 6.984 24 6.984a21.988 21.988 0 0 0-14.684 5.568l-1.188-2.387C12.478 6.194 18.072 4.019 24 4.019zm-8.97 19.795a1.536 1.536 0 0 0-.128-.032l-2.198-4.42a3.503 3.503 0 0 1 1.702-2.039 3.507 3.507 0 0 1 2.69-.259 3.505 3.505 0 0 1 2.083 1.718 3.51 3.51 0 0 1 .258 2.69 3.505 3.505 0 0 1-1.717 2.083 3.507 3.507 0 0 1-2.69.26zM24 42.07l-7.485-15.046a6.58 6.58 0 0 0 2.645-.759 6.553 6.553 0 0 0 3.212-3.896 6.556 6.556 0 0 0-.483-5.028 6.554 6.554 0 0 0-3.897-3.212 6.557 6.557 0 0 0-5.027.484 6.59 6.59 0 0 0-1.881 1.493l-.344-.691A18.953 18.953 0 0 1 24 10.054c4.988 0 9.684 1.902 13.26 5.36l-4.966 9.983a5.968 5.968 0 0 0-5.129-2.924 5.972 5.972 0 0 0-5.965 5.965 5.972 5.972 0 0 0 6.633 5.927L24 42.07zm3.165-10.735a2.9 2.9 0 0 1-2.896-2.897 2.9 2.9 0 0 1 2.896-2.896 2.9 2.9 0 0 1 2.897 2.896 2.9 2.9 0 0 1-2.897 2.897z"></path><path d="M30.511 18.762a1.53 1.53 0 0 0 2.17 0c.6-.6.6-1.57 0-2.17L30.15 14.06a1.535 1.535 0 0 0-2.17 2.17l2.532 2.532z"></path>';const S=document.createElement("div");S.classList.add("tab-text"),S.innerText="PIZZA";const j=document.createElement("div");j.classList.add("tab-option");const N=document.createElement("div");N.classList.add("tab-icon");const $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.setAttribute("xmlns","http://www.w3.org/2000/svg"),$.setAttribute("viewBox","0 0 48 48"),$.setAttribute("class","injected-svg"),$.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-hamburger.svg"),$.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),$.setAttribute("fill","white"),$.setAttribute("height","30px"),$.innerHTML='<path d="M24 7.43c8.076 0 15.637 3.858 20.225 10.32.374.527.369 1.208.04 1.72 1.637.653 2.785 2.148 2.785 3.884 0 1.022-.398 1.96-1.058 2.692.66.732 1.058 1.671 1.058 2.693 0 1.512-.871 2.841-2.177 3.59l-.19.103v2.725a5.417 5.417 0 0 1-5.19 5.409l-.217.004H8.724a5.416 5.416 0 0 1-5.403-5.195l-.004-.218v-2.725C1.907 31.706.95 30.323.95 28.739c0-1.022.398-1.96 1.058-2.693-.66-.732-1.058-1.67-1.058-2.692 0-1.736 1.148-3.231 2.784-3.883a1.539 1.539 0 0 1 .041-1.72C8.362 11.287 15.923 7.43 24 7.43zM12.318 32.97H6.396v2.186c0 1.234.96 2.246 2.169 2.328l.159.006h30.552c1.23 0 2.24-.961 2.322-2.174l.006-.16V32.97H20.609l-3.057 3.056a1.536 1.536 0 0 1-2.06.106l-.117-.106-3.057-3.056zm9.32-5.385h-10.35l5.175 5.175 5.176-5.175zm20.792 0H25.994l-2.306 2.306H42.43c.82 0 1.54-.54 1.54-1.153 0-.578-.637-1.09-1.396-1.148l-.144-.005zm-35.497 0H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h3.669l-2.306-2.306zM42.43 22.2H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h36.86c.82 0 1.54-.539 1.54-1.153 0-.578-.637-1.09-1.396-1.147l-.144-.006zM24 10.509c-6.766 0-13.112 3.081-17.162 8.285l-.25.328h34.824C37.376 13.72 30.907 10.509 24 10.509zm0 4.22c.304 0 .602.123.817.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.817.339c-.304 0-.601-.123-.817-.339a1.163 1.163 0 0 1-.338-.816c0-.305.123-.602.338-.818.216-.214.513-.337.817-.337zm-10.178 0c.305 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.162 1.162 0 0 1-.818.339c-.303 0-.6-.123-.816-.339a1.163 1.163 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.513-.337.816-.337zm20.355 0c.304 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.818.339 1.159 1.159 0 0 1-1.155-1.155 1.16 1.16 0 0 1 1.155-1.155zm-13.57-3.517c.305 0 .603.123.817.337.215.216.338.513.338.818a1.161 1.161 0 0 1-1.154 1.155 1.156 1.156 0 0 1-.817-1.973c.215-.214.512-.337.817-.337zm6.785 0c.304 0 .602.123.817.337.214.216.34.513.34.818a1.163 1.163 0 0 1-1.157 1.155c-.304 0-.601-.123-.816-.339a1.162 1.162 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.512-.337.816-.337z"></path>';const B=document.createElement("div");B.classList.add("tab-text"),B.innerText="BURGERS";const I=document.createElement("div");I.classList.add("tab-option");const O=document.createElement("div");O.classList.add("tab-icon");const R=document.createElementNS("http://www.w3.org/2000/svg","svg");R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R.setAttribute("viewBox","0 0 48 48"),R.setAttribute("class","injected-svg"),R.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-french-fries.svg"),R.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),R.setAttribute("fill","white"),R.setAttribute("height","30px"),R.innerHTML='<path d="M43.225 4.828a1.56 1.56 0 0 0-.971-.694l-3.967-.92.026-1.145A1.561 1.561 0 0 0 36.788.474L31.641.358h-.036a1.56 1.56 0 0 0-1.559 1.524l-.081 3.597-.367-.106a1.556 1.556 0 0 0-.85-.002l.08-3.512A1.56 1.56 0 0 0 27.303.264L22.156.147a1.557 1.557 0 0 0-1.595 1.526l-.29 12.814-.5-7.322a1.56 1.56 0 0 0-1.663-1.45l-2.963.203V4.492a1.56 1.56 0 0 0-1.56-1.56H8.437a1.56 1.56 0 0 0-1.56 1.56v11.02h-.779a1.56 1.56 0 0 0-1.541 1.802L9.003 45.71a1.56 1.56 0 0 0 1.541 1.319H37.22a1.56 1.56 0 0 0 1.542-1.319l4.446-28.397a1.561 1.561 0 0 0-1.542-1.802h-.448l2.204-9.506a1.559 1.559 0 0 0-.196-1.178zm-8.488 2.026-1.671-.482.064-2.86 2.028.046-.42 3.296zm-4.422 1.973 3.468.999-2.175 9.382a13.706 13.706 0 0 1-4.135 1.876l2.842-12.257zm-7.081 12.718.411-18.242 2.028.046-.292 12.943-1.218 5.253h-.93zm-6.47-12.61.759 11.082a13.747 13.747 0 0 1-2.126-1.356l-.656-9.588 2.023-.138zm-4.74 6.577H9.998v-9.46h2.028v.421a1.56 1.56 0 0 0-.504 1.257l.504 7.782zm23.86 28.398H11.88L7.922 18.633h2.966a16.882 16.882 0 0 0 12.994 6.037 16.88 16.88 0 0 0 12.993-6.037h2.967L35.885 43.91zm.046-28.398 2.124-9.148 1.975.457-2.015 8.691H35.93z"></path>';const Z=document.createElement("div");Z.classList.add("tab-text"),Z.innerText="SNACKS & SIDES";const P=document.createElement("div");P.classList.add("tab-option");const U=document.createElement("div");U.classList.add("tab-icon");const J=document.createElementNS("http://www.w3.org/2000/svg","svg");J.setAttribute("xmlns","http://www.w3.org/2000/svg"),J.setAttribute("viewBox","0 0 48 48"),J.setAttribute("class","injected-svg"),J.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-water.svg"),J.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),J.setAttribute("fill","white"),J.setAttribute("height","30px"),J.innerHTML='<path d="M39.963 9.552a1.624 1.624 0 0 0-1.233-.566H22.068l-.466-6.528A1.623 1.623 0 0 0 19.982.95H9.27a1.623 1.623 0 0 0 0 3.247h9.201l.342 4.789h-6.865a1.623 1.623 0 0 0-1.605 1.87L15.7 45.672a1.623 1.623 0 0 0 1.604 1.376h16.07c.801 0 1.483-.584 1.604-1.376l5.357-34.818a1.624 1.624 0 0 0-.372-1.303zm-3.124 2.68-1.973 12.823h-11.65L22.3 12.232h14.539zm-17.794 0 .916 12.823h-4.148L13.84 12.232h5.205zm12.937 31.571H18.697l-2.385-15.501h3.881l.849 11.883a1.623 1.623 0 1 0 3.238-.23l-.832-11.653h10.919l-2.385 15.501z"></path>';const q=document.createElement("div");q.classList.add("tab-text"),q.innerText="DRINKS",k.appendChild(H),M.appendChild(k),M.appendChild(S),N.appendChild($),j.appendChild(N),j.appendChild(B),O.appendChild(R),I.appendChild(O),I.appendChild(Z),U.appendChild(J),P.appendChild(U),P.appendChild(q),A.appendChild(y),A.appendChild(M),A.appendChild(j),A.appendChild(I),A.appendChild(P),A.appendChild(T),v.appendChild(A);const D=document.createElement("div");D.classList.add("display");const G=document.createElement("div");G.classList.add("stuff");const K=document.createElement("div");K.classList.add("item");const V=document.createElement("div");V.classList.add("item-pic");const F=document.createElement("img");F.setAttribute("src","../src/pizza-types/pizza1.jpeg"),F.setAttribute("alt","pizza"),F.setAttribute("height","150px");const _=document.createElement("div");_.classList.add("item-text");const Y=document.createElement("div");Y.classList.add("item-name"),Y.innerText="La Rossa";const Q=document.createElement("div");Q.classList.add("item-description"),Q.innerText="tomato sauce, garlic, basil (no cheese)";const W=document.createElement("div");W.classList.add("item-price"),W.innerText="$15 / $24";const X=document.createElement("div");X.classList.add("item");const ee=document.createElement("div");ee.classList.add("item-pic");const te=document.createElement("img");te.setAttribute("src","../src/pizza-types/pizza2.jpeg"),te.setAttribute("alt","pizza"),te.setAttribute("height","150px");const ne=document.createElement("div");ne.classList.add("item-text");const ae=document.createElement("div");ae.classList.add("item-name"),ae.innerText="Margherita";const ie=document.createElement("div");ie.classList.add("item-description"),ie.innerText="tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil";const se=document.createElement("div");se.classList.add("item-price"),se.innerText="$17 / $26";const de=document.createElement("div");de.classList.add("item");const ce=document.createElement("div");ce.classList.add("item-pic");const re=document.createElement("img");re.setAttribute("src","../src/pizza-types/pizza3.jpeg"),re.setAttribute("alt","pizza"),re.setAttribute("height","150px");const le=document.createElement("div");le.classList.add("item-text");const oe=document.createElement("div");oe.classList.add("item-name"),oe.innerText="Pepperoni";const pe=document.createElement("div");pe.classList.add("item-description"),pe.innerText="tomato sauce, burrata, garlic, basil";const me=document.createElement("div");me.classList.add("item-price"),me.innerText="$19 / $32";const ue=document.createElement("div");ue.classList.add("item");const he=document.createElement("div");he.classList.add("item-pic");const ve=document.createElement("img");ve.setAttribute("src","../src/pizza-types/pizza4.jpeg"),ve.setAttribute("alt","pizza"),ve.setAttribute("height","150px");const xe=document.createElement("div");xe.classList.add("item-text");const ge=document.createElement("div");ge.classList.add("item-name"),ge.innerText="Bosco";const fe=document.createElement("div");fe.classList.add("item-description"),fe.innerText="tomato sauce, fresh mozzarella, cremini mushrooms, fontina";const be=document.createElement("div");be.classList.add("item-price"),be.innerText="$17 / $25";const Ce=document.createElement("div");Ce.classList.add("item");const Ee=document.createElement("div");Ee.classList.add("item-pic");const Le=document.createElement("img");Le.setAttribute("src","../src/pizza-types/pizza5.jpeg"),Le.setAttribute("alt","pizza"),Le.setAttribute("height","150px");const ze=document.createElement("div");ze.classList.add("item-text");const we=document.createElement("div");we.classList.add("item-name"),we.innerText="Burrata";const Ae=document.createElement("div");Ae.classList.add("item-description"),Ae.innerText="tomato sauce, burrata, garlic, basil";const ye=document.createElement("div");ye.classList.add("item-price"),ye.innerText="$18 / $28";const Te=document.createElement("div");Te.classList.add("item");const Me=document.createElement("div");Me.classList.add("item-pic");const ke=document.createElement("img");ke.setAttribute("src","../src/pizza-types/pizza6.jpeg"),ke.setAttribute("alt","pizza"),ke.setAttribute("height","150px");const He=document.createElement("div");He.classList.add("item-text");const Se=document.createElement("div");Se.classList.add("item-name"),Se.innerText="Jersey Margherita";const je=document.createElement("div");je.classList.add("item-description"),je.innerText="crushed NJ tomatoes, Jersey Girl mozzarella, basil";const Ne=document.createElement("div");Ne.classList.add("item-price"),Ne.innerText="$19 / $30",V.appendChild(F),_.appendChild(Y),_.appendChild(Q),K.appendChild(V),K.appendChild(_),K.appendChild(W),ee.appendChild(te),ne.appendChild(ae),ne.appendChild(ie),X.appendChild(ee),X.appendChild(ne),X.appendChild(se),ce.appendChild(re),le.appendChild(oe),le.appendChild(pe),de.appendChild(ce),de.appendChild(le),de.appendChild(me),he.appendChild(ve),xe.appendChild(ge),xe.appendChild(fe),ue.appendChild(he),ue.appendChild(xe),ue.appendChild(be),Ee.appendChild(Le),ze.appendChild(we),ze.appendChild(Ae),Ce.appendChild(Ee),Ce.appendChild(ze),Ce.appendChild(ye),Me.appendChild(ke),He.appendChild(Se),He.appendChild(je),Te.appendChild(Me),Te.appendChild(He),Te.appendChild(Ne),G.appendChild(K),G.appendChild(X),G.appendChild(de),G.appendChild(ue),G.appendChild(Ce),G.appendChild(Te),D.appendChild(G),v.appendChild(D)})()})();