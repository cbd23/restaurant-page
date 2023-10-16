(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(81),a=n.n(i),r=n(645),s=n.n(r)()(a());s.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    font-family:'Segoe UI', Tahoma, Verdana, sans-serif;    \n}\n\n#content {\n    min-height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.header {\n    background-color: bisque;\n    font-size: 1rem;\n    font-weight: 600;\n\n    height: 80px;\n    display: flex;\n}\n\n.header-leftside {\n    display: flex;\n    flex: 1;\n}\n\n.logo {\n    flex: 1;\n\n    height: 150px;\n}\n\nimg[src=\"../src/logo.png\"] {\n    margin-left: 18px;\n    cursor: pointer;\n}\n\n.header-rightside {\n    margin-top: 8px;\n\n    display: flex;\n    flex-direction: row;\n\n    flex: 1;\n}\n\n.about,\n.book,\n.gallery,\n.contact {\n    color: white;\n    background-color: #8c5fa8;\n    border-radius: 20px;\n    padding-top: 6px;\n    margin: 8px;\n    \n    height: 2rem;\n    font-size: 1.1rem;\n\n    display: flex;\n    justify-content: center;\n\n    flex: 1;\n    cursor: pointer;\n}\n\n.tabs { \n    font-size: 1rem;\n    font-weight: 600;\n\n    flex: 1 1 66px;\n\n    display: flex;\n}\n\n.tab-placeholder {\n    background-color: #8c5fa8;\n\n    display: flex;\n\n    flex: 1;\n}\n\n.tab-option {\n    background-color: #8c5fa8;\n    color:whitesmoke;\n\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n    align-items: center;\n\n    flex: 1;\n    cursor: pointer;\n}\n\nsvg {\n    background-color: #8c5fa8;\n    height: 40px;\n}\n\n.tab-text {\n    background-color: #8c5fa8;\n}\n\n.display {\n    background-color: bisque;\n\n    display: flex;\n    flex-direction: column;\n\n    flex: 10;\n}\n\n.section {\n    border: 2px solid sandybrown;\n    flex: 1;\n}\n\n.stuff {\n    flex: 10;\n\n    display: grid;\n\n    margin: 60px 160px;\n    gap: 40px 20px;\n\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: repeat(3, 1fr);\n}\n\n.item {\n    background-color: white;\n    border-radius: 8px;\n\n    display: flex;\n}\n\n.item-pic {\n    margin-right: 16px;\n    \n    flex: 1;\n    align-self: center;\n}\n\n.item-pic > img {\n    border-radius: 8px;    \n}\n\n.item-text {\n    flex: 5;\n}\n\n.item-name {\n    font-size: 1.2rem;\n    font-weight: 600;\n\n    margin-top: 8px;\n}\n\n.item-description {\n    margin-top: 8px;\n}\n\n.item-price {\n    margin-top: 8px;\n    margin-right: 14px;\n\n    flex: 2;\n    text-align: end;\n}",""]);const c=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(s[d]=!0)}for(var o=0;o<e.length;o++){var l=[].concat(e[o]);i&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},s=[],c=0;c<e.length;c++){var d=e[c],o=i.base?d[0]+i.base:d[0],l=r[o]||0,p="".concat(o," ").concat(l);r[o]=l+1;var m=n(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,i);i.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=i(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var c=n(r[s]);t[c].references--}for(var d=i(e,a),o=0;o<r.length;o++){var l=n(r[o]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),i=n(795),a=n.n(i),r=n(569),s=n.n(r),c=n(565),d=n.n(c),o=n(216),l=n.n(o),p=n(589),m=n.n(p),u=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g=document.getElementById("content"),f=document.createElement("div");f.classList.add("header");const v=document.createElement("div");v.classList.add("header-leftside");const b=document.createElement("div");b.classList.add("logo");const x=document.createElement("img");x.src="../src/logo.png",x.setAttribute("height","80px");const w=document.createElement("div");w.classList.add("header-rightside");const C=document.createElement("div");C.classList.add("about"),C.innerText="ABOUT US";const E=document.createElement("div");E.classList.add("book"),E.innerText="BOOK A TABLE";const y=document.createElement("div");y.classList.add("gallery"),y.innerText="GALLERY";const L=document.createElement("div");L.classList.add("contact"),L.innerText="CONTACT",b.appendChild(x),v.appendChild(b),w.appendChild(C),w.appendChild(E),w.appendChild(y),w.appendChild(L),f.appendChild(v),f.appendChild(w),g.appendChild(f);const z=document.createElement("div");z.classList.add("tabs");const A=document.createElement("div");A.classList.add("tab-placeholder");const S=document.createElement("div");S.classList.add("tab-placeholder");const T=document.createElement("div");T.classList.add("tab-option");const M=document.createElement("div");M.classList.add("tab-icon");const k=document.createElementNS("http://www.w3.org/2000/svg","svg");k.setAttribute("xmlns","http://www.w3.org/2000/svg"),k.setAttribute("viewBox","0 0 48 48"),k.setAttribute("class","injected-svg"),k.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-pizza-1.svg"),k.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),k.setAttribute("fill","white"),k.setAttribute("height","30px"),k.innerHTML='<path d="M42.834 8.752C37.804 3.72 31.114.95 24 .95c-7.115 0-13.803 2.771-18.834 7.802a1.535 1.535 0 0 0-.289 1.769l17.75 35.678a1.535 1.535 0 0 0 2.747 0l17.75-35.678a1.535 1.535 0 0 0-.29-1.77zM24 4.019c5.928 0 11.522 2.175 15.872 6.146l-1.188 2.387C34.63 8.952 29.467 6.984 24 6.984a21.988 21.988 0 0 0-14.684 5.568l-1.188-2.387C12.478 6.194 18.072 4.019 24 4.019zm-8.97 19.795a1.536 1.536 0 0 0-.128-.032l-2.198-4.42a3.503 3.503 0 0 1 1.702-2.039 3.507 3.507 0 0 1 2.69-.259 3.505 3.505 0 0 1 2.083 1.718 3.51 3.51 0 0 1 .258 2.69 3.505 3.505 0 0 1-1.717 2.083 3.507 3.507 0 0 1-2.69.26zM24 42.07l-7.485-15.046a6.58 6.58 0 0 0 2.645-.759 6.553 6.553 0 0 0 3.212-3.896 6.556 6.556 0 0 0-.483-5.028 6.554 6.554 0 0 0-3.897-3.212 6.557 6.557 0 0 0-5.027.484 6.59 6.59 0 0 0-1.881 1.493l-.344-.691A18.953 18.953 0 0 1 24 10.054c4.988 0 9.684 1.902 13.26 5.36l-4.966 9.983a5.968 5.968 0 0 0-5.129-2.924 5.972 5.972 0 0 0-5.965 5.965 5.972 5.972 0 0 0 6.633 5.927L24 42.07zm3.165-10.735a2.9 2.9 0 0 1-2.896-2.897 2.9 2.9 0 0 1 2.896-2.896 2.9 2.9 0 0 1 2.897 2.896 2.9 2.9 0 0 1-2.897 2.897z"></path><path d="M30.511 18.762a1.53 1.53 0 0 0 2.17 0c.6-.6.6-1.57 0-2.17L30.15 14.06a1.535 1.535 0 0 0-2.17 2.17l2.532 2.532z"></path>';const j=document.createElement("div");j.classList.add("tab-text"),j.innerText="PIZZA";const H=document.createElement("div");H.classList.add("tab-option");const B=document.createElement("div");B.classList.add("tab-icon");const N=document.createElementNS("http://www.w3.org/2000/svg","svg");N.setAttribute("xmlns","http://www.w3.org/2000/svg"),N.setAttribute("viewBox","0 0 48 48"),N.setAttribute("class","injected-svg"),N.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-hamburger.svg"),N.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),N.setAttribute("fill","white"),N.setAttribute("height","30px"),N.innerHTML='<path d="M24 7.43c8.076 0 15.637 3.858 20.225 10.32.374.527.369 1.208.04 1.72 1.637.653 2.785 2.148 2.785 3.884 0 1.022-.398 1.96-1.058 2.692.66.732 1.058 1.671 1.058 2.693 0 1.512-.871 2.841-2.177 3.59l-.19.103v2.725a5.417 5.417 0 0 1-5.19 5.409l-.217.004H8.724a5.416 5.416 0 0 1-5.403-5.195l-.004-.218v-2.725C1.907 31.706.95 30.323.95 28.739c0-1.022.398-1.96 1.058-2.693-.66-.732-1.058-1.67-1.058-2.692 0-1.736 1.148-3.231 2.784-3.883a1.539 1.539 0 0 1 .041-1.72C8.362 11.287 15.923 7.43 24 7.43zM12.318 32.97H6.396v2.186c0 1.234.96 2.246 2.169 2.328l.159.006h30.552c1.23 0 2.24-.961 2.322-2.174l.006-.16V32.97H20.609l-3.057 3.056a1.536 1.536 0 0 1-2.06.106l-.117-.106-3.057-3.056zm9.32-5.385h-10.35l5.175 5.175 5.176-5.175zm20.792 0H25.994l-2.306 2.306H42.43c.82 0 1.54-.54 1.54-1.153 0-.578-.637-1.09-1.396-1.148l-.144-.005zm-35.497 0H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h3.669l-2.306-2.306zM42.43 22.2H5.57c-.82 0-1.54.539-1.54 1.153 0 .578.637 1.089 1.396 1.147l.144.006h36.86c.82 0 1.54-.539 1.54-1.153 0-.578-.637-1.09-1.396-1.147l-.144-.006zM24 10.509c-6.766 0-13.112 3.081-17.162 8.285l-.25.328h34.824C37.376 13.72 30.907 10.509 24 10.509zm0 4.22c.304 0 .602.123.817.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.817.339c-.304 0-.601-.123-.817-.339a1.163 1.163 0 0 1-.338-.816c0-.305.123-.602.338-.818.216-.214.513-.337.817-.337zm-10.178 0c.305 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.162 1.162 0 0 1-.818.339c-.303 0-.6-.123-.816-.339a1.163 1.163 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.513-.337.816-.337zm20.355 0c.304 0 .602.123.818.337.214.216.337.513.337.818 0 .303-.123.6-.337.816a1.163 1.163 0 0 1-.818.339 1.159 1.159 0 0 1-1.155-1.155 1.16 1.16 0 0 1 1.155-1.155zm-13.57-3.517c.305 0 .603.123.817.337.215.216.338.513.338.818a1.161 1.161 0 0 1-1.154 1.155 1.156 1.156 0 0 1-.817-1.973c.215-.214.512-.337.817-.337zm6.785 0c.304 0 .602.123.817.337.214.216.34.513.34.818a1.163 1.163 0 0 1-1.157 1.155c-.304 0-.601-.123-.816-.339a1.162 1.162 0 0 1-.34-.816c0-.305.124-.602.34-.818.215-.214.512-.337.816-.337z"></path>';const $=document.createElement("div");$.classList.add("tab-text"),$.innerText="BURGERS";const I=document.createElement("div");I.classList.add("tab-option");const O=document.createElement("div");O.classList.add("tab-icon");const R=document.createElementNS("http://www.w3.org/2000/svg","svg");R.setAttribute("xmlns","http://www.w3.org/2000/svg"),R.setAttribute("viewBox","0 0 48 48"),R.setAttribute("class","injected-svg"),R.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-french-fries.svg"),R.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),R.setAttribute("fill","white"),R.setAttribute("height","30px"),R.innerHTML='<path d="M43.225 4.828a1.56 1.56 0 0 0-.971-.694l-3.967-.92.026-1.145A1.561 1.561 0 0 0 36.788.474L31.641.358h-.036a1.56 1.56 0 0 0-1.559 1.524l-.081 3.597-.367-.106a1.556 1.556 0 0 0-.85-.002l.08-3.512A1.56 1.56 0 0 0 27.303.264L22.156.147a1.557 1.557 0 0 0-1.595 1.526l-.29 12.814-.5-7.322a1.56 1.56 0 0 0-1.663-1.45l-2.963.203V4.492a1.56 1.56 0 0 0-1.56-1.56H8.437a1.56 1.56 0 0 0-1.56 1.56v11.02h-.779a1.56 1.56 0 0 0-1.541 1.802L9.003 45.71a1.56 1.56 0 0 0 1.541 1.319H37.22a1.56 1.56 0 0 0 1.542-1.319l4.446-28.397a1.561 1.561 0 0 0-1.542-1.802h-.448l2.204-9.506a1.559 1.559 0 0 0-.196-1.178zm-8.488 2.026-1.671-.482.064-2.86 2.028.046-.42 3.296zm-4.422 1.973 3.468.999-2.175 9.382a13.706 13.706 0 0 1-4.135 1.876l2.842-12.257zm-7.081 12.718.411-18.242 2.028.046-.292 12.943-1.218 5.253h-.93zm-6.47-12.61.759 11.082a13.747 13.747 0 0 1-2.126-1.356l-.656-9.588 2.023-.138zm-4.74 6.577H9.998v-9.46h2.028v.421a1.56 1.56 0 0 0-.504 1.257l.504 7.782zm23.86 28.398H11.88L7.922 18.633h2.966a16.882 16.882 0 0 0 12.994 6.037 16.88 16.88 0 0 0 12.993-6.037h2.967L35.885 43.91zm.046-28.398 2.124-9.148 1.975.457-2.015 8.691H35.93z"></path>';const P=document.createElement("div");P.classList.add("tab-text"),P.innerText="SNACKS & SIDES";const Z=document.createElement("div");Z.classList.add("tab-option");const U=document.createElement("div");U.classList.add("tab-icon");const D=document.createElementNS("http://www.w3.org/2000/svg","svg");D.setAttribute("xmlns","http://www.w3.org/2000/svg"),D.setAttribute("viewBox","0 0 48 48"),D.setAttribute("class","injected-svg"),D.setAttribute("data-src","https://static.elfsight.com/icons/app-restaurant-menu-water.svg"),D.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),D.setAttribute("fill","white"),D.setAttribute("height","30px"),D.innerHTML='<path d="M39.963 9.552a1.624 1.624 0 0 0-1.233-.566H22.068l-.466-6.528A1.623 1.623 0 0 0 19.982.95H9.27a1.623 1.623 0 0 0 0 3.247h9.201l.342 4.789h-6.865a1.623 1.623 0 0 0-1.605 1.87L15.7 45.672a1.623 1.623 0 0 0 1.604 1.376h16.07c.801 0 1.483-.584 1.604-1.376l5.357-34.818a1.624 1.624 0 0 0-.372-1.303zm-3.124 2.68-1.973 12.823h-11.65L22.3 12.232h14.539zm-17.794 0 .916 12.823h-4.148L13.84 12.232h5.205zm12.937 31.571H18.697l-2.385-15.501h3.881l.849 11.883a1.623 1.623 0 1 0 3.238-.23l-.832-11.653h10.919l-2.385 15.501z"></path>';const q=document.createElement("div");q.classList.add("tab-text"),q.innerText="DRINKS",M.appendChild(k),T.appendChild(M),T.appendChild(j),B.appendChild(N),H.appendChild(B),H.appendChild($),O.appendChild(R),I.appendChild(O),I.appendChild(P),U.appendChild(D),Z.appendChild(U),Z.appendChild(q),z.appendChild(A),z.appendChild(T),z.appendChild(H),z.appendChild(I),z.appendChild(Z),z.appendChild(S),g.appendChild(z);let J,G,K=function(){const e=document.createElement("div");e.classList.add("display");const t=document.createElement("div");return t.classList.add("stuff"),[{name:"La Rossa",description:"tomato sauce, garlic, basil (no cheese)",price:["$15"],imageSrc:"../src/pizza-types/pizza1.jpeg"},{name:"Margherita",description:"tomato sauce, fresh mozzarella, basil, sea salt, California extra virgin olive oil",price:["$17"],imageSrc:"../src/pizza-types/pizza2.jpeg"},{name:"Pepperoni",description:"tomato sauce, burrata, garlic, basil",price:["$19"],imageSrc:"../src/pizza-types/pizza3.jpeg"},{name:"Bosco",description:"tomato sauce, fresh mozzarella, cremini mushrooms, fontina",price:["$17"],imageSrc:"../src/pizza-types/pizza4.jpeg"},{name:"Burrata",description:"tomato sauce, burrata, garlic, basil",price:["$18"],imageSrc:"../src/pizza-types/pizza5.jpeg"},{name:"Jersey Margherita",description:"crushed NJ tomatoes, Jersey Girl mozzarella, basil",price:["$19"],imageSrc:"../src/pizza-types/pizza6.jpeg"}].forEach((e=>{const n=document.createElement("div");n.classList.add("item");const i=document.createElement("div");i.classList.add("item-pic");const a=document.createElement("img");a.setAttribute("src",e.imageSrc),a.setAttribute("alt","pizza"),a.setAttribute("height","150px");const r=document.createElement("div");r.classList.add("item-text");const s=document.createElement("div");s.classList.add("item-name"),s.innerText=e.name;const c=document.createElement("div");c.classList.add("item-description"),c.innerText=e.description;const d=document.createElement("div");d.classList.add("item-price"),d.innerText=e.price,i.appendChild(a),r.appendChild(s),r.appendChild(c),n.appendChild(i),n.appendChild(r),n.appendChild(d),t.appendChild(n)})),e.appendChild(t),e}(),V=function(){const e=document.createElement("div");e.classList.add("display");const t=document.createElement("div");return t.classList.add("stuff"),[{name:"Chicken Burger",description:"fresh chicken and other ingredients that will make you remember it",price:["$12"],imageSrc:"../src/hamburger-types/hamburger1.jpeg"},{name:"Double Beefburger",description:"the best beef in town, sliced tomatoes, onion, cheese and fresh salad",price:["$15"],imageSrc:"../src/hamburger-types/hamburger2.jpeg"},{name:"Double Cheeseburger",description:"it's a double cheese, you'll love it no matter what's inside, right?",price:["$14"],imageSrc:"../src/hamburger-types/hamburger3.jpeg"},{name:"Chicago Special Burger",description:'we would love to tell you more about this one, but then we would have to simply call it "Chicago Burger"',price:["$17"],imageSrc:"../src/hamburger-types/hamburger4.jpeg"}].forEach((e=>{const n=document.createElement("div");n.classList.add("item");const i=document.createElement("div");i.classList.add("item-pic");const a=document.createElement("img");a.setAttribute("src",e.imageSrc),a.setAttribute("alt","burger"),a.setAttribute("height","150px");const r=document.createElement("div");r.classList.add("item-text");const s=document.createElement("div");s.classList.add("item-name"),s.innerText=e.name;const c=document.createElement("div");c.classList.add("item-description"),c.innerText=e.description;const d=document.createElement("div");d.classList.add("item-price"),d.innerText=e.price,i.appendChild(a),r.appendChild(s),r.appendChild(c),n.appendChild(i),n.appendChild(r),n.appendChild(d),t.appendChild(n)})),e.appendChild(t),e}(),F=function(){const e=document.createElement("div");e.classList.add("display");const t=document.createElement("div");return t.classList.add("stuff"),[{name:"Onion Rings",description:"simply delicious, nothing more to say here",price:["$8"],imageSrc:"../src/sides-types/onion-rings.jpg"},{name:"Poutine",description:"irresistible french fries and magnifique cheese curds topped with a brown gravy",price:["$10"],imageSrc:"../src/sides-types/poutine.jpeg"}].forEach((e=>{const n=document.createElement("div");n.classList.add("item");const i=document.createElement("div");i.classList.add("item-pic");const a=document.createElement("img");a.setAttribute("src",e.imageSrc),a.setAttribute("alt","side"),a.setAttribute("height","150px");const r=document.createElement("div");r.classList.add("item-text");const s=document.createElement("div");s.classList.add("item-name"),s.innerText=e.name;const c=document.createElement("div");c.classList.add("item-description"),c.innerText=e.description;const d=document.createElement("div");d.classList.add("item-price"),d.innerText=e.price,i.appendChild(a),r.appendChild(s),r.appendChild(c),n.appendChild(i),n.appendChild(r),n.appendChild(d),t.appendChild(n)})),e.appendChild(t),e}();G=K,g.appendChild(K),T.addEventListener("pointerdown",(()=>{g.removeChild(G),J=K,g.appendChild(J),G=K})),H.addEventListener("pointerdown",(()=>{g.removeChild(G),J=V,g.appendChild(J),G=V})),I.addEventListener("pointerdown",(()=>{g.removeChild(G),J=F,g.appendChild(J),G=F}))})()})();