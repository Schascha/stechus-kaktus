(function(e){function n(n){for(var r,i,l=n[0],u=n[1],s=n[2],c=0,h=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(n);while(h.length)h.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var r={},a={app:0},o=[];function i(e){return l.p+"js/"+({Challenge:"Challenge",Romanizer:"Romanizer"}[e]||e)+"."+{Challenge:"f1c37205",Romanizer:"cd009db0"}[e]+".js"}function l(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=a[e]=[n,r]}));n.push(t[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var s=new Error;o=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,t[1](s)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=r,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(t,r,function(n){return e[n]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/stechus-kaktus/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var f=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"38fc":function(e,n,t){},"49f8":function(e,n,t){var r={"./de.json":"6ce2","./en.json":"edd4"};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="49f8"},"4a78":function(e,n,t){"use strict";t("38fc")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"frame"},[t("header",[t("h1",[t("router-link",{attrs:{to:{name:"Default"}}},[e._v(" "+e._s(e.$t("title"))+" ")])],1),t("a",{attrs:{href:e.$t("link.wikipedia.href"),title:e.$t("link.wikipedia.title"),target:"_blank",rel:"noopener noreferrer"}},[t("IconWikipedia")],1)]),t("main",[t("router-view")],1),t("footer",[t("div",[t("a",{attrs:{href:e.$t("link.github.href"),title:e.$t("link.github.title"),target:"_blank",rel:"noopener noreferrer"}},[t("IconGitHub")],1),t("Language")],1),"Challenge"===e.$route.name?t("router-link",{attrs:{to:{name:"Default"}}},[e._v(" "+e._s(e.$t("router.default"))+" ")]):t("router-link",{attrs:{to:{name:"Challenge"}}},[e._v(" "+e._s(e.$t("router.challenge"))+" ")])],1)])},o=[],i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},e.$listeners),[t("path",{attrs:{d:"M256.004 6.321c-141.369 0-256.004 114.609-256.004 255.999 0 113.107 73.352 209.066 175.068 242.918 12.793 2.369 17.496-5.555 17.496-12.316 0-6.102-0.24-26.271-0.348-47.662-71.224 15.488-86.252-30.205-86.252-30.205-11.641-29.588-28.424-37.458-28.424-37.458-23.226-15.889 1.755-15.562 1.755-15.562 25.7 1.805 39.238 26.383 39.238 26.383 22.836 39.135 59.888 27.82 74.502 21.279 2.294-16.543 8.926-27.84 16.253-34.232-56.865-6.471-116.638-28.425-116.638-126.516 0-27.949 10.002-50.787 26.38-68.714-2.658-6.45-11.427-32.486 2.476-67.75 0 0 21.503-6.876 70.42 26.245 20.418-5.674 42.318-8.518 64.077-8.617 21.751 0.099 43.668 2.943 64.128 8.617 48.867-33.122 70.328-26.245 70.328-26.245 13.936 35.264 5.175 61.3 2.518 67.75 16.41 17.928 26.347 40.766 26.347 68.714 0 98.327-59.889 119.975-116.895 126.312 9.182 7.945 17.362 23.523 17.362 47.406 0 34.254-0.298 61.822-0.298 70.254 0 6.814 4.611 14.797 17.586 12.283 101.661-33.888 174.921-129.813 174.921-242.884 0-141.39-114.617-255.999-255.996-255.999z"}})])};const l={};l.render=i;var u=l,s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("svg",e._g({attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"}},e.$listeners),[t("path",{attrs:{d:"M 120.85,29.21 C 120.85,29.62 120.72,29.99 120.47,30.33 C 120.21,30.66 119.94,30.83 119.63,30.83 C 117.14,31.07 115.09,31.87 113.51,33.24 C 111.92,34.6 110.29,37.21 108.6,41.05 L 82.8,99.19 C 82.63,99.73 82.16,100 81.38,100 C 80.77,100 80.3,99.73 79.96,99.19 L 65.49,68.93 L 48.85,99.19 C 48.51,99.73 48.04,100 47.43,100 C 46.69,100 46.2,99.73 45.96,99.19 L 20.61,41.05 C 19.03,37.44 17.36,34.92 15.6,33.49 C 13.85,32.06 11.4,31.17 8.27,30.83 C 8,30.83 7.74,30.69 7.51,30.4 C 7.27,30.12 7.15,29.79 7.15,29.42 C 7.15,28.47 7.42,28 7.96,28 C 10.22,28 12.58,28.1 15.05,28.3 C 17.34,28.51 19.5,28.61 21.52,28.61 C 23.58,28.61 26.01,28.51 28.81,28.3 C 31.74,28.1 34.34,28 36.6,28 C 37.14,28 37.41,28.47 37.41,29.42 C 37.41,30.36 37.24,30.83 36.91,30.83 C 34.65,31 32.87,31.58 31.57,32.55 C 30.27,33.53 29.62,34.81 29.62,36.4 C 29.62,37.21 29.89,38.22 30.43,39.43 L 51.38,86.74 L 63.27,64.28 L 52.19,41.05 C 50.2,36.91 48.56,34.23 47.28,33.03 C 46,31.84 44.06,31.1 41.46,30.83 C 41.22,30.83 41,30.69 40.78,30.4 C 40.56,30.12 40.45,29.79 40.45,29.42 C 40.45,28.47 40.68,28 41.16,28 C 43.42,28 45.49,28.1 47.38,28.3 C 49.2,28.51 51.14,28.61 53.2,28.61 C 55.22,28.61 57.36,28.51 59.62,28.3 C 61.95,28.1 64.24,28 66.5,28 C 67.04,28 67.31,28.47 67.31,29.42 C 67.31,30.36 67.15,30.83 66.81,30.83 C 62.29,31.14 60.03,32.42 60.03,34.68 C 60.03,35.69 60.55,37.26 61.6,39.38 L 68.93,54.26 L 76.22,40.65 C 77.23,38.73 77.74,37.11 77.74,35.79 C 77.74,32.69 75.48,31.04 70.96,30.83 C 70.55,30.83 70.35,30.36 70.35,29.42 C 70.35,29.08 70.45,28.76 70.65,28.46 C 70.86,28.15 71.06,28 71.26,28 C 72.88,28 74.87,28.1 77.23,28.3 C 79.49,28.51 81.35,28.61 82.8,28.61 C 83.84,28.61 85.38,28.52 87.4,28.35 C 89.96,28.12 92.11,28 93.83,28 C 94.23,28 94.43,28.4 94.43,29.21 C 94.43,30.29 94.06,30.83 93.32,30.83 C 90.69,31.1 88.57,31.83 86.97,33.01 C 85.37,34.19 83.37,36.87 80.98,41.05 L 71.26,59.02 L 84.42,85.83 L 103.85,40.65 C 104.52,39 104.86,37.48 104.86,36.1 C 104.86,32.79 102.6,31.04 98.08,30.83 C 97.67,30.83 97.47,30.36 97.47,29.42 C 97.47,28.47 97.77,28 98.38,28 C 100.03,28 101.99,28.1 104.25,28.3 C 106.34,28.51 108.1,28.61 109.51,28.61 C 111,28.61 112.72,28.51 114.67,28.3 C 116.7,28.1 118.52,28 120.14,28 C 120.61,28 120.85,28.4 120.85,29.21 z"}})])};const c={};c.render=s;var f=c,h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"language"},[t("label",{attrs:{for:"language"}},[e._v(" "+e._s(e.$t("field.language.label"))+" ")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],attrs:{id:"language"},on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.$set(e.$i18n,"locale",n.target.multiple?t:t[0])}}},e._l(e.langs,(function(n,r){return t("option",{key:"Lang"+r,domProps:{value:n}},[e._v(" "+e._s(n)+" ")])})),0)])},d=[],p={name:"Language",data:function(){return{langs:["en","de"]}},mounted:function(){this.$watch("$i18n.locale",(function(e,n){e!==n&&(document.documentElement.lang=e)}),{immediate:!0})}},g=p,m=(t("4a78"),t("2877")),v=Object(m["a"])(g,h,d,!1,null,null,null),C=v.exports,b={name:"App",components:{IconGitHub:u,IconWikipedia:f,Language:C}},w=b,k=(t("5c0b"),Object(m["a"])(w,a,o,!1,null,null,null)),_=k.exports,y=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["a"].use(y["a"]);var L=[{path:"/",name:"Default",component:function(){return t.e("Romanizer").then(t.bind(null,"e542"))}},{path:"/challenge/:id?",name:"Challenge",component:function(){return t.e("Challenge").then(t.bind(null,"7399"))},props:!0},{path:"/:number",name:"Number",component:function(){return t.e("Romanizer").then(t.bind(null,"e542"))},props:!0}],O=new y["a"]({mode:"hash",base:"/stechus-kaktus/",routes:L}),$=O,x=(t("159b"),t("ac1f"),t("466d"),t("1276"),t("a925"));function j(){var e=t("49f8"),n={};return e.keys().forEach((function(t){var r=t.match(/([A-Za-z0-9-_]+)\./i);if(r&&r.length>1){var a=r[1];n[a]=e(t)}})),n}r["a"].use(x["a"]);var E=new x["a"]({locale:(navigator.language||navigator.userLanguage).split("-")[0]||"en",fallbackLocale:"en",messages:j()}),N=t("9483");Object(N["a"])("".concat("/stechus-kaktus/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r["a"].directive("focus",{inserted:function(e){e.focus()}});new r["a"]({router:$,i18n:E,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"6ce2":function(e){e.exports=JSON.parse('{"button":{"help":"Hilfe","next":"Nächstes Level","okay":"Okay"},"challenge":{"answers":"{answers} richtig, {failures} falsch","level":{"1":"Nummern von 1 bis 10","2":"Nummern bis 100","3":"Nummern bis 1000","4":"Nummern bis 5000","5":"Zwei römische Zahlen addieren","6":"Zwei römische Zahlen subtrahieren","7":"Zwei römische Zahlen mulitplizieren"}},"field":{"answer":{"label":"Antwort"},"language":{"label":"Sprache"},"text":{"label":"Eingabe"}},"link":{"github":{"href":"https://github.com/Schascha/stechus-kaktus","title":"Mehr auf GitHub"},"wikipedia":{"href":"https://de.wikipedia.org/wiki/R%C3%B6mische_Zahlschrift","title":"Mehr auf Wikipedia"}},"router":{"challenge":"Challenge-Modus","default":"Romanizer"},"title":"Stechus Kaktus – Romanizer"}')},"9c0c":function(e,n,t){},edd4:function(e){e.exports=JSON.parse('{"button":{"help":"Help","next":"Next","okay":"Okay"},"challenge":{"answers":"{answers} right, {failures} wrong","level":{"1":"Convert numbers from 1 to 10","2":"Convert numbers up to 100","3":"Convert numbers up to 1000","4":"Convert numbers up to 5000","5":"Add two roman numerals","6":"Subtract two roman numerals","7":"Multiply two roman numerals"}},"field":{"answer":{"label":"Enter answer"},"language":{"label":"Change language"},"text":{"label":"Enter numbers"}},"link":{"github":{"href":"https://github.com/Schascha/stechus-kaktus","title":"View on GitHub"},"wikipedia":{"href":"https://en.wikipedia.org/wiki/Roman_numerals","title":"Read more on Wikipedia"}},"router":{"challenge":"Challenge mode","default":"Romanizer"},"title":"Stechus Kaktus – Romanizer"}')}});
//# sourceMappingURL=app.195bbae7.js.map