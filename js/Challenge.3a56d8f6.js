(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Challenge"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,s,l){var f=n+t.length,d=c.length,h=u;return void 0!==s&&(s=r(s),h=o),i.call(l,h,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(f);case"<":o=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>d){var l=a(u/10);return 0===l?r:l<=d?void 0===c[l-1]?i.charAt(1):c[l-1]+i.charAt(1):r}o=c[u-1]}return void 0===o?"":o}))}},1148:function(t,e,n){"use strict";var r=n("a691"),a=n("1d80");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"1dde":function(t,e,n){var r=n("d039"),a=n("b622"),i=n("2d00"),o=a("species");t.exports=function(t){return i>=51||!r((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),a=n("825a"),i=n("d039"),o=n("ad6d"),u="toString",c=RegExp.prototype,s=c[u],l=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),f=s.name!=u;(l||f)&&r(RegExp.prototype,u,(function(){var t=a(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"38cf":function(t,e,n){var r=n("23e7"),a=n("1148");r({target:"String",proto:!0},{repeat:a})},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),u=n("1d80"),c=n("8aa5"),s=n("0cb2"),l=n("14c3"),f=Math.max,d=Math.min,h=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=r.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(n,r){var a=u(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,a,r):e.call(String(a),n,r)},function(t,r){if(!v&&p||"string"===typeof r&&-1===r.indexOf(b)){var u=n(e,t,this,r);if(u.done)return u.value}var g=a(t),m=String(this),w="function"===typeof r;w||(r=String(r));var x=g.global;if(x){var y=g.unicode;g.lastIndex=0}var E=[];while(1){var I=l(g,m);if(null===I)break;if(E.push(I),!x)break;var _=String(I[0]);""===_&&(g.lastIndex=c(m,i(g.lastIndex),y))}for(var N="",S=0,C=0;C<E.length;C++){I=E[C];for(var k=String(I[0]),$=f(d(o(I.index),m.length),0),A=[],L=1;L<I.length;L++)A.push(h(I[L]));var M=I.groups;if(w){var O=[k].concat(A,$,m);void 0!==M&&O.push(M);var R=String(r.apply(void 0,O))}else R=s(k,m,$,A,M,r);$>=S&&(N+=m.slice(S,$)+R,S=$+k.length)}return N+m.slice(S)}]}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),i="["+a+"]",o=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,n){var r=n("861d"),a=n("d2bb");t.exports=function(t,e,n){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==n&&r(o=i.prototype)&&o!==n.prototype&&a(t,o),t}},7399:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"challenge"},[n("h2",[t._v(" Level "+t._s(t.id)+": "),n("span",[t._v(t._s(t.label))])]),n("p",[t._v(t._s(t.question))]),n("hr"),n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",{attrs:{for:"text"}},[t._v(" "+t._s(t.$t("field.answer.label"))+" ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"},{name:"focus",rawName:"v-focus"}],attrs:{id:"answer",type:"text",name:"answer",autocomplete:"off",spellcheck:"false"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}}),n("button",{attrs:{type:"submit",disabled:!t.answer},on:{click:t.onClick}},[t._v(" "+t._s(t.$t("button.okay"))+" ")]),n("button",{attrs:{type:"button"},on:{click:t.onHelp}},[t._v(" "+t._s(t.$t("button.help"))+" ")]),n("button",{attrs:{type:"button",disabled:!t.isNext},on:{click:t.onNext}},[t._v(" "+t._s(t.$t("button.next"))+" ")])]),t.answers.length||t.failures?n("span",{staticClass:"info"},[t._v(" "+t._s(t.$t("challenge.answers",{answers:t.answers.length,failures:t.failures}))+" ")]):t._e()])},a=[],i=(n("a9e3"),n("ac1f"),n("466d"),n("5319"),n("d3b7"),n("25f0"),n("927d")),o=(n("caad"),n("99af"),[]);function u(t,e){var n;do{n=Math.floor(Math.random()*(e-t+1)+t)}while(o.includes(n));return o.length>=5&&o.shift(),o.push(n),n}var c=[{label:function(t){return t.t("challenge.level.1")},rule:function(){return u(1,10)}},{label:function(t){return t.t("challenge.level.2")},rule:function(){return u(11,100)}},{label:function(t){return t.t("challenge.level.3")},rule:function(){return u(101,1e3)}},{label:function(t){return t.t("challenge.level.4")},rule:function(){return u(1001,5e3)}},{label:function(t){return t.t("challenge.level.5")},rule:function(){var t=u(1,100),e=u(1,100),n=t+e;return{x:t,y:e,z:n}},eq:function(t,e){return"".concat(t," + ").concat(e)}},{label:function(t){return t.t("challenge.level.6")},rule:function(){var t=u(100,200),e=u(50,99),n=t-e;return{x:t,y:e,z:n}},eq:function(t,e){return"".concat(t," - ").concat(e)}},{label:function(t){return t.t("challenge.level.7")},rule:function(){var t=u(2,10),e=u(5,10),n=t*e;return{x:t,y:e,z:n}},eq:function(t,e){return"".concat(t," × ").concat(e)}}],s={name:"Challenge",props:{id:{type:[Number,String],default:1}},data:function(){return{question:null,solution:null,answer:null,answers:[],failures:0}},computed:{level:function(){return c[parseInt(this.id)-1]},label:function(){return this.level.label(this.$i18n)},isNext:function(){return parseInt(this.id)<c.length}},watch:{answer:function(t){this.answer=t.match(/^[1-9][0-9]*/)?t.replace(/[^0-9]+/,"").substr(0,4):t.toUpperCase().replace(/[^MDCLXVI]+/,"").substr(0,12)},$route:function(t){var e=t.params.id;this.checkLevel(e),this.setQuestion()}},mounted:function(){document.body.classList.add("dark"),this.checkLevel(this.id),this.setQuestion()},destroyed:function(){document.body.classList.remove("dark")},methods:{checkLevel:function(t){t=parseInt(t),(t<1||t>c.length)&&this.$router.replace({name:"Challenge",params:{id:1}})},setQuestion:function(){if(this.level){var t=this.level,e=t.eq,n=t.rule,r=n(),a=Math.round(Math.random());e?(this.question=e(Object(i["c"])(r.x),Object(i["c"])(r.y)),this.solution=Object(i["c"])(r.z)):(this.question=a?Object(i["c"])(r):r,this.solution=a?r.toString():Object(i["c"])(r)),this.answer=""}},validate:function(t){document.body.classList.add(t?"valid":"invalid"),document.body.onanimationend=function(){document.body.classList.remove(t?"valid":"invalid")}},onClick:function(){this.answer.toString()===this.solution?(this.answers.push({level:this.id,question:this.question,answer:this.answer}),this.validate(!0),this.setQuestion()):(this.failures++,this.validate(!1))},onHelp:function(){this.answer=this.solution},onNext:function(){this.$router.push({name:"Challenge",params:{id:parseInt(this.id)+1}})}}},l=s,f=n("2877"),d=Object(f["a"])(l,r,a,!1,null,null,null);e["default"]=d.exports},8418:function(t,e,n){"use strict";var r=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?a.f(t,o,i(0,n)):t[o]=n}},"927d":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return u}));n("ac1f"),n("466d"),n("d81d"),n("1276"),n("159b"),n("b64b"),n("38cf");var r=/^[MDCLXVI]+$/,a={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};function i(t){return"string"===typeof t&&t.match(r)}function o(t){return t.toUpperCase().split("").map((function(t){return a[t]})).map((function(t,e,n){return t<n[e+1]?-1*t:t})).reduce((function(t,e){return t+e}))}function u(t){var e="";return Object.keys(a).forEach((function(n){e+=n.repeat(Math.floor(t/a[n])),t%=a[n]})),e}},"99af":function(t,e,n){"use strict";var r=n("23e7"),a=n("d039"),i=n("e8b5"),o=n("861d"),u=n("7b0b"),c=n("50c4"),s=n("8418"),l=n("65f0"),f=n("1dde"),d=n("b622"),h=n("2d00"),v=d("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=h>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=f("concat"),w=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},x=!g||!m;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,a,i,o=u(this),f=l(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?o:arguments[e],w(i)){if(a=c(i.length),d+a>p)throw TypeError(b);for(n=0;n<a;n++,d++)n in i&&s(f,d,i[n])}else{if(d>=p)throw TypeError(b);s(f,d++,i)}return f.length=d,f}})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),i=n("94ca"),o=n("6eeb"),u=n("5135"),c=n("c6b6"),s=n("7156"),l=n("c04e"),f=n("d039"),d=n("7c73"),h=n("241c").f,v=n("06cf").f,p=n("9bf2").f,b=n("58a8").trim,g="Number",m=a[g],w=m.prototype,x=c(d(w))==g,y=function(t){var e,n,r,a,i,o,u,c,s=l(t,!1);if("string"==typeof s&&s.length>2)if(s=b(s),e=s.charCodeAt(0),43===e||45===e){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+s}for(i=s.slice(2),o=i.length,u=0;u<o;u++)if(c=i.charCodeAt(u),c<48||c>a)return NaN;return parseInt(i,r)}return+s};if(i(g,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(x?f((function(){w.valueOf.call(n)})):c(n)!=g)?s(new m(y(e)),n,I):y(e)},_=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;_.length>N;N++)u(m,E=_[N])&&!u(I,E)&&p(I,E,v(m,E));I.prototype=w,w.constructor=I,o(a,g,I)}},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),i=n("df75"),o=n("d039"),u=o((function(){i(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return i(a(t))}})},caad:function(t,e,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").map,i=n("1dde"),o=i("map");r({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=Challenge.3a56d8f6.js.map