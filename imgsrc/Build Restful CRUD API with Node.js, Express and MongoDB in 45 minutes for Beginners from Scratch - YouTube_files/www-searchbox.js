(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function v(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function ra(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function sa(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ra.prototype.A=function(a){this.l=a};
function ta(a,b){a.i={Ld:b,fe:!0};a.g=a.o||a.s}
ra.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
ra.prototype.M=function(a){this.g=a};
function ua(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function va(a){a.o=0;var b=a.i.Ld;a.i=null;return b}
function wa(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.fe?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function xa(a){this.g=new ra;this.l=a}
function ya(a,b){sa(a.g);var c=a.g.m;if(c)return za(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Aa(a)}
function za(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,ta(a.g,g),Aa(a)}a.g.m=null;d.call(a.g,f);return Aa(a)}
function Aa(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,ta(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.fe)throw b.Ld;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ba(a){this.next=function(b){sa(a.g);a.g.m?b=za(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Aa(a));return b};
this.throw=function(b){sa(a.g);a.g.m?b=za(a,a.g.m["throw"],b,a.g.A):(ta(a.g,b),b=Aa(a));return b};
this.return=function(b){return ya(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ca(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ca(new Ba(new xa(a)))}
function Da(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=ea.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=ea.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.dc(h.resolve,h.reject)};
b.prototype.O=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return typeof r=="function"?function(t){try{l(r(t))}catch(u){m(u)}}:q}
var l,m,p=new b(function(r,q){l=r;m=q});
this.dc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.dc=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;this.l==null?f.l(k):this.l.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).dc(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(t){return function(u){r[t]=u;q--;q==0&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).dc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ea(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function Fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Fa(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Fa(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return Fa(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ea(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ga(a,b){var c=D("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ha(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ia(a){var b=Ha(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ja(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ka(a,b,c){return a.call.apply(a.bind,arguments)}
function La(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function F(a,b,c){F=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ka:La;return F.apply(null,arguments)}
function G(){return Date.now()}
function H(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function I(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ih=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ma(a){return a}
;function Na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Na);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
I(Na,Error);Na.prototype.name="CustomError";function Oa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Qa(a,b){return a<b?-1:a>b?1:0}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function Ra(a){return{valueOf:a}.valueOf()}
;var Sa;function Va(){if(Sa===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ma,createScript:Ma,createScriptURL:Ma})}catch(c){C.console&&C.console.error(c.message)}Sa=a}else Sa=a}return Sa}
;function Wa(a){this.g=a}
Wa.prototype.toString=function(){return this.g+""};
function Xa(a){if(a instanceof Wa&&a.constructor===Wa)return a.g;Ha(a);return"type_error:TrustedResourceUrl"}
var Ya={};function Za(a){var b=Va();a=b?b.createScriptURL(a):a;return new Wa(a,Ya)}
;function $a(a){this.g=a}
$a.prototype.toString=function(){return this.g};
var ab=new $a("about:invalid#zClosurez");function bb(a){this.kg=a}
function cb(a){return new bb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var db=[cb("data"),cb("http"),cb("https"),cb("mailto"),cb("ftp"),new bb(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function hb(a){for(var b=Da.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new $a(c.join(""))}
var ib=Ra(function(){return typeof URL==="function"}),jb=["data:",
"http:","https:","mailto:","ftp:"],kb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function lb(a){if(a instanceof $a)if(a instanceof $a)a=a.g;else throw Error("");else a=kb.test(a)?a:void 0;return a}
;function mb(a,b){b=lb(b);b!==void 0&&(a.href=b)}
;var nb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ob=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},pb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e};
function qb(a,b){b=nb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function rb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ia(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function sb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function tb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function wb(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return wb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;var xb={};function yb(a){this.g=a}
yb.prototype.toString=function(){return this.g.toString()};
function zb(a){if(a instanceof yb&&a.constructor===yb)return a.g;Ha(a);return"type_error:SafeHtml"}
function Ab(a){var b=Va();a=b?b.createHTML(a):a;return new yb(a,xb)}
;function Bb(a,b){if(a.nodeType===1){var c=a.tagName;if(c==="SCRIPT"||c==="STYLE")throw Error("");}a.innerHTML=zb(b)}
;function Cb(){throw Error("unknown trace type");}
;function Db(a,b){a.src=Xa(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Eb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Fb(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Gb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hb(a){return a?decodeURI(a):a}
function Ib(a){return Hb(a.match(Gb)[3]||null)}
function Jb(a){var b=a.match(Gb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Kb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Lb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Mb(a){var b=[],c;for(c in a)Lb(c,a[c],b);return b.join("&")}
function Nb(a,b){b=Mb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Ob(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Pb=/#|$/,Qb=/[?&]($|#)/;function Rb(){this.ab=this.ab;this.m=this.m}
Rb.prototype.ab=!1;Rb.prototype.dispose=function(){this.ab||(this.ab=!0,this.Ba())};
Rb.prototype[Symbol.dispose]=function(){this.dispose()};
Rb.prototype.addOnDisposeCallback=function(a,b){this.ab?b!==void 0?a.call(b):a():(this.m||(this.m=[]),this.m.push(b!==void 0?F(a,b):a))};
Rb.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function Sb(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Sb.prototype.stopPropagation=function(){this.i=!0};
Sb.prototype.preventDefault=function(){this.defaultPrevented=!0};var Tb=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Ub=Ga(1,!0),Vb=Ga(610401301,!1),Wb=Ga(188588736,Ub),Xb=Ga(645172343,Ub);function Yb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Zb,$b=C.navigator;Zb=$b?$b.userAgentData||null:null;function ac(a){return Vb?Zb?Zb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Yb().indexOf(a)!=-1}
;function bc(){return Vb?!!Zb&&Zb.brands.length>0:!1}
function cc(){return bc()?!1:J("Opera")}
function dc(){return bc()?!1:J("Trident")||J("MSIE")}
function ec(){return bc()?ac("Microsoft Edge"):J("Edg/")}
function fc(){return J("Safari")&&!(gc()||(bc()?0:J("Coast"))||cc()||(bc()?0:J("Edge"))||ec()||(bc()?ac("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function gc(){return bc()?ac("Chromium"):(J("Chrome")||J("CriOS"))&&!(bc()?0:J("Edge"))||J("Silk")}
function hc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ic(){var a=Yb();if(dc()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=hc(b);return cc()?a(["Version","Opera"]):
(bc()?0:J("Edge"))?a(["Edge"]):ec()?a(["Edg"]):J("Silk")?a(["Silk"]):gc()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function jc(){return J("Gecko")&&!(Yb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge")}
;function kc(){return Vb&&Zb&&Zb.platform?Zb.platform==="Android":J("Android")}
function lc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function mc(a){mc[" "](a);return a}
mc[" "]=function(){};var nc=dc(),oc=J("Edge"),pc=jc(),qc=kc();function rc(a,b){Sb.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
I(rc,Sb);var sc={2:"touch",3:"pen",4:"mouse"};
rc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(pc){a:{try{mc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:sc[a.pointerType]||"";this.state=a.state;this.l=a;a.defaultPrevented&&rc.Fa.preventDefault.call(this)};
rc.prototype.stopPropagation=function(){rc.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
rc.prototype.preventDefault=function(){rc.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var tc="closure_listenable_"+(Math.random()*1E6|0);var uc=0;function vc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.mc=e;this.key=++uc;this.Tb=this.cc=!1}
function wc(a){a.Tb=!0;a.listener=null;a.proxy=null;a.src=null;a.mc=null}
;function xc(a){this.src=a;this.listeners={};this.g=0}
xc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=yc(a,b,d,e);g>-1?(b=a[g],c||(b.cc=!1)):(b=new vc(b,this.src,f,!!d,e),b.cc=c,a.push(b));return b};
xc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=yc(e,b,c,d);return b>-1?(wc(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function zc(a,b){var c=b.type;c in a.listeners&&qb(a.listeners[c],b)&&(wc(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function yc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Tb&&f.listener==b&&f.capture==!!c&&f.mc==d)return e}return-1}
;var Ac="closure_lm_"+(Math.random()*1E6|0),Bc={},Cc=0;function Dc(a,b,c,d,e){if(d&&d.once)Ec(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Dc(a,b[f],c,d,e);else c=Fc(c),a&&a[tc]?a.ra(b,c,Ja(d)?!!d.capture:!!d,e):Gc(a,b,c,!1,d,e)}
function Gc(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ja(e)?!!e.capture:!!e,h=Hc(a);h||(a[Ac]=h=new xc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Jc();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Tb||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Kc(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Cc++}}
function Jc(){function a(c){return b.call(a.src,a.listener,c)}
var b=Lc;return a}
function Ec(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ec(a,b[f],c,d,e);else c=Fc(c),a&&a[tc]?a.g.add(String(b),c,!0,Ja(d)?!!d.capture:!!d,e):Gc(a,b,c,!0,d,e)}
function Mc(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Mc(a,b[f],c,d,e);else(d=Ja(d)?!!d.capture:!!d,c=Fc(c),a&&a[tc])?a.g.remove(String(b),c,d,e):a&&(a=Hc(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=yc(b,c,d,e)),(c=a>-1?b[a]:null)&&Nc(c))}
function Nc(a){if(typeof a!=="number"&&a&&!a.Tb){var b=a.src;if(b&&b[tc])zc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Kc(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Cc--;(c=Hc(b))?(zc(c,a),c.g==0&&(c.src=null,b[Ac]=null)):wc(a)}}}
function Kc(a){return a in Bc?Bc[a]:Bc[a]="on"+a}
function Lc(a,b){if(a.Tb)a=!0;else{b=new rc(b,this);var c=a.listener,d=a.mc||a.src;a.cc&&Nc(a);a=c.call(d,b)}return a}
function Hc(a){a=a[Ac];return a instanceof xc?a:null}
var Oc="__closure_events_fn_"+(Math.random()*1E9>>>0);function Fc(a){if(typeof a==="function")return a;a[Oc]||(a[Oc]=function(b){return a.handleEvent(b)});
return a[Oc]}
;function Pc(){Rb.call(this);this.g=new xc(this);this.B=this;this.u=null}
I(Pc,Rb);Pc.prototype[tc]=!0;Pc.prototype.addEventListener=function(a,b,c,d){Dc(this,a,b,c,d)};
Pc.prototype.removeEventListener=function(a,b,c,d){Mc(this,a,b,c,d)};
function Qc(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new Sb(b,a):b instanceof Sb?b.target=b.target||a:(e=b,b=new Sb(c,a),vb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Rc(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Rc(g,c,!0,b)&&e,b.i||(e=Rc(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Rc(g,c,!1,b)&&e}
Pc.prototype.Ba=function(){Pc.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,wc(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Pc.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Rc(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Tb&&g.capture==c){var h=g.listener,k=g.mc||g.src;g.cc&&zc(a.g,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Sc(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Sc.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Tc(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Uc(){}
;function Vc(){var a=Wc;return document.createRange().createContextualFragment(zb(Ab(a[0])))}
;function Xc(a,b){var c=b.createRange();c.selectNode(b.body);a=Ab(a);return c.createContextualFragment(zb(a))}
;function Yc(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function Zc(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var $c="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
ad=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:2,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["IMG",new Map([["src",{ja:1}],["srcset",{ja:1}]])],["VIDEO",new Map([["src",{ja:1}]])],["AUDIO",new Map([["src",{ja:1}]])]],bd="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
cd=[["dir",{ja:3,conditions:Ra(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Ra(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Ra(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Ra(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],dd=new function(){var a=new Set(bd),b=new Map(cd),c=new Map(ad);
this.l=new Set($c);this.g=c;this.i=a;this.m=b};function ed(){this.g=dd}
function fd(a,b){var c=document.implementation.createHTMLDocument("");a=gd(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return Ab(c)}
function gd(a,b,c){b=Xc(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(Zc(h))if(h=Yc(h),h===null)h=2;else{var k=a.g;h=h!=="FORM"&&(k.l.has(h)||k.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(Zc(d))g=hd(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function hd(a,b,c){var d=Yc(b);c=c.createElement(d);b=b.attributes;for(var e=w(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var k=h.g.get(d);h=(k==null?0:k.has(f))?k.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(k=h.conditions){k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value);l=m.next().value;m=m.next().value;var p=void 0;if((l=(p=b.getNamedItem(l))==null?void 0:p.value)&&!m.has(l)){k=!1;break a}}}k=!0}if(k)switch(h.ja){case 1:id(c,f,g);break;
case 2:a:if(h=void 0,ib){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}id(c,f,h!==void 0&&jb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:id(c,f,g.toLowerCase());break;case 4:id(c,f,g);break;case 5:id(c,f,g);break;case 6:id(c,f,g)}}return c}
function id(a,b,c){a.setAttribute(b,c)}
var jd=Ra(function(){return new ed});function kd(a){var b=a.split(/\?|#/),c=/\?/.test(a)?"?"+b[1]:"";return{path:b[0],params:c,hash:/#/.test(a)?"#"+(c?b[2]:b[1]):""}}
function ld(a){var b=Da.apply(1,arguments);if(b.length===0)return Za(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return Za(c)}
function md(a,b){a=kd(Xa(a).toString());var c=a.params,d=c.length?"&":"?";b.forEach(function(e,f){e=e instanceof Array?e:[e];for(var g=0;g<e.length;g++){var h=e[g];h!==null&&h!==void 0&&(c+=d+encodeURIComponent(f)+"="+encodeURIComponent(String(h)),d="&")}});
return Za(a.path+c+a.hash)}
;function nd(a,b){this.width=a;this.height=b}
n=nd.prototype;n.clone=function(){return new nd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function od(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
;function pd(a){typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(qd||(qd=rd()),qd(a)):C.setImmediate(a)}
var qd;function rd(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=od("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=F(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Gd;c.Gd=null;e()}};
return function(e){d.next={Gd:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function sd(a){C.setTimeout(function(){throw a;},0)}
;function td(){this.l=this.g=null}
td.prototype.add=function(a,b){var c=ud.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
td.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var ud=new Sc(function(){return new vd},function(a){return a.reset()});
function vd(){this.next=this.scope=this.g=null}
vd.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
vd.prototype.reset=function(){this.next=this.scope=this.g=null};var wd,xd=!1,yd=new td;function zd(a,b){wd||Ad();xd||(wd(),xd=!0);yd.add(a,b)}
function Ad(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);wd=function(){a.then(Bd)}}else wd=function(){pd(Bd)}}
function Bd(){for(var a;a=yd.remove();){try{a.g.call(a.scope)}catch(b){sd(b)}Tc(ud,a)}xd=!1}
;function Cd(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=Uc)try{var b=this;a.call(void 0,function(c){Dd(b,2,c)},function(c){Dd(b,3,c)})}catch(c){Dd(this,3,c)}}
function Ed(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
Ed.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var Fd=new Sc(function(){return new Ed},function(a){a.reset()});
function Gd(a,b,c){var d=Fd.get();d.i=a;d.l=b;d.context=c;return d}
Cd.prototype.then=function(a,b,c){return Hd(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Cd.prototype.$goog_Thenable=!0;Cd.prototype.cancel=function(a){if(this.g==0){var b=new Id(a);zd(function(){Jd(this,b)},this)}};
function Jd(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?Jd(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Kd(c),Ld(c,e,3,b)))}a.i=null}else Dd(a,3,b)}
function Md(a,b){a.l||a.g!=2&&a.g!=3||Nd(a);a.m?a.m.next=b:a.l=b;a.m=b}
function Hd(a,b,c,d){var e=Gd(null,null,null);e.g=new Cd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.l=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Id?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Md(a,e);return e.g}
Cd.prototype.B=function(a){this.g=0;Dd(this,2,a)};
Cd.prototype.D=function(a){this.g=0;Dd(this,3,a)};
function Dd(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Cd){Md(d,Gd(e||Uc,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ja(d))try{var k=d.then;if(typeof k==="function"){Od(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,Nd(a),b!=3||c instanceof Id||Pd(a,c))}}
function Od(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Nd(a){a.s||(a.s=!0,zd(a.A,a))}
function Kd(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Cd.prototype.A=function(){for(var a;a=Kd(this);)Ld(this,a,this.g,this.u);this.s=!1};
function Ld(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Qd(b,c,d);else try{b.m?b.i.call(b.context):Qd(b,c,d)}catch(e){Rd.call(null,e)}Tc(Fd,b)}
function Qd(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function Pd(a,b){a.o=!0;zd(function(){a.o&&Rd.call(null,b)})}
var Rd=sd;function Id(a){Na.call(this,a)}
I(Id,Na);Id.prototype.name="cancel";function Sd(a,b){Pc.call(this);this.i=a||1;this.l=b||C;this.o=F(this.Tg,this);this.s=G()}
I(Sd,Pc);n=Sd.prototype;n.enabled=!1;n.La=null;n.Tg=function(){if(this.enabled){var a=G()-this.s;a>0&&a<this.i*.8?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Qc(this,"tick"),this.enabled&&(Td(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=G())};
function Td(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){Sd.Fa.Ba.call(this);Td(this);delete this.l};var Ud=lc()||J("iPod"),Vd=J("iPad");!J("Android")||gc();gc();var Wd=fc()&&!(lc()||J("iPad")||J("iPod"));var Xd={},Yd=null;
function Zd(a,b){Ia(a);b===void 0&&(b=0);if(!Yd){Yd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));Xd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];Yd[h]===void 0&&(Yd[h]=g)}}}b=Xd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var $d=typeof Uint8Array!=="undefined",ae=!nc&&typeof btoa==="function";function be(){return typeof BigInt==="function"}
;var ce=0,de=0;function ee(a){var b=a>>>0;ce=b;de=(a-b)/4294967296>>>0}
function fe(a){if(a<0){ee(0-a);var b=w(ge(ce,de));a=b.next().value;b=b.next().value;ce=a>>>0;de=b>>>0}else ee(a)}
function he(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else be()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ie(c)+ie(a));return c}
function ie(a){a=String(a);return"0000000".slice(a.length)+a}
function je(){var a=ce,b=de;b&2147483648?be()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(ge(a,b)),a=b.next().value,b=b.next().value,a="-"+he(a,b)):a=he(a,b);return a}
function ge(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var ke=typeof Symbol==="function"&&typeof Symbol()==="symbol";function le(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var me=le(),ne=le("2ex"),oe=le("1oa");Math.max.apply(Math,x(Object.values({uh:1,sh:2,rh:4,xh:8,wh:16,vh:32,mh:64,zh:128,qh:256,ph:512,th:1024,nh:2048,yh:4096,oh:8192})));var pe=ke?function(a,b){a[me]|=b}:function(a,b){a.Da!==void 0?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},qe=ke?function(a,b){a[me]&=~b}:function(a,b){a.Da!==void 0&&(a.Da&=~b)},re=ke?function(a){return a[me]|0}:function(a){return a.Da|0},se=ke?function(a){return a[me]}:function(a){return a.Da},te=ke?function(a,b){a[me]=b}:function(a,b){a.Da!==void 0?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function ue(a,b){te(b,(a|0)&-14591)}
function ve(a,b){te(b,(a|34)&-14557)}
;var we={},xe={};function ye(a){return!(!a||typeof a!=="object"||a.g!==xe)}
function ze(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ae(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=re(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;te(a,d|1);return!0}
var Be,Ce=[];te(Ce,55);Be=Object.freeze(Ce);function De(a){if(a&2)throw Error();}
;var Ee;function Fe(){var a=Error();Eb(a,"incident");sd(a)}
function Ge(a){a=Error(a);Eb(a,"warning");return a}
;function He(a){return a.displayName||a.name||"unknown type name"}
var Ie=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Je(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Ie.test(a)}
function Ke(a){if(a!=null){var b=!!b;if(!Je(a))throw Ge("int64");typeof a==="string"?a=Le(a):b?(Je(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),Me(b)?a=b:(fe(a),a=je()))):a=Ne(a)}return a}
function Me(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Ne(a){Je(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){fe(a);var b=ce,c=de;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Le(a){Je(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));if(!Me(a)){if(a.length<16)fe(Number(a));else if(be())a=BigInt(a),ce=Number(a&BigInt(4294967295))>>>0,de=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");de=ce=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),de*=1E6,ce=ce*1E6+d,ce>=4294967296&&(de+=Math.trunc(ce/4294967296),de>>>=0,ce>>>=0);b&&(b=w(ge(ce,de)),a=b.next().value,
b=b.next().value,ce=a,de=b)}a=je()}return a}
function Oe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Pe(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+He(b)+" but got "+(a&&He(a.constructor)));return a}
function Qe(a,b,c){if(a!=null&&typeof a==="object"&&a.dd===we)return a;if(Array.isArray(a)){var d=re(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&te(a,e);return new b(a)}}
;var Re;
function K(a,b,c){a==null&&(a=Re);Re=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=re(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(ze(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}te(a,d);return a}
;function Se(a){if(typeof Proxy!=="function")return a;var b=Te(a);if(b)return b;b=new Proxy(a,{set:function(c,d,e){Ue();c[d]=e;return!0}});
Ve(a,b);return b}
function Ue(){Fe()}
var We=void 0,Xe=void 0;function Te(a){var b;return(b=We)==null?void 0:b.get(a)}
function Ve(a,b){(We||(We=new WeakMap)).set(a,b);(Xe||(Xe=new WeakMap)).set(b,a)}
;function Ye(a,b){return Ze(b)}
function Ze(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ae(a,void 0,0))return}else if($d&&a!=null&&a instanceof Uint8Array){if(ae){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Zd(a);return a}}return a}
;function $e(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function af(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ae(a,void 0,0)?void 0:e&&re(a)&2?a:bf(a,b,c,d!==void 0,e);else if(ze(a)){var f={},g;for(g in a)f[g]=af(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function bf(a,b,c,d,e){var f=d||c?re(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=af(a[g],b,c,d,e);c&&c(f,a);return a}
function cf(a){return a.dd===we?a.toJSON():Ze(a)}
;function df(a,b,c){c=c===void 0?ve:c;if(a!=null){if($d&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=re(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(te(a,(d|34)&-12293),a):bf(a,df,d&4?ve:c,!0,!0)}a.dd===we&&(c=a.R,d=se(c),a=d&2?a:ef(a,c,d,!0));return a}}
function ef(a,b,c,d){a=a.constructor;b=ff(b,c,d);re(b);Re=b;b=new a(b);Re=void 0;return b}
function ff(a,b,c){var d=c||b&2?ve:ue,e=!!(b&32);a=$e(a,b,function(f){return df(f,e,d)});
pe(a,32|(c?2:0));return a}
function gf(a){var b=a.R,c=se(b);return c&2?ef(a,b,c,!1):a}
;function hf(a,b){a=a.R;return jf(a,se(a),b)}
function kf(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function jf(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(kf(a,b,e,c)&&ne!=null){var g;a=(g=Ee)!=null?g:Ee={};g=a[ne]||0;g>=4||(a[ne]=g+1,Fe())}return d}return kf(a,b,e,c)}}
function lf(a,b,c){var d=a.R,e=se(d);De(e);mf(d,e,b,c);return a}
function mf(a,b,c,d,e){ze(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Xb){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&te(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function nf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function of(a,b,c,d){a=a.R;var e=se(a);De(e);if(d==null){var f=pf(a);if(qf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=pf(a);var g=qf(f,a,e,c);g!==b&&(g&&(e=mf(a,e,g)),f.set(c,b))}mf(a,e,b,d)}
function pf(a){if(ke){var b;return(b=a[oe])!=null?b:a[oe]=new Map}if(oe in a)return a[oe];b=new Map;Object.defineProperty(a,oe,{value:b});return b}
function qf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];jf(b,c,g)!=null&&(e!==0&&(c=mf(b,c,e)),e=g)}a.set(d,e);return e}
function rf(a,b,c){var d=d===void 0?!1:d;var e=a.R;var f=se(e),g=jf(e,f,c,d);b=Qe(g,b,f);b!==g&&b!=null&&mf(e,f,c,b,d);e=b;if(e==null)return e;a=a.R;f=se(a);f&2||(g=gf(e),g!==e&&(e=g,mf(a,f,c,e,d)));return e}
function sf(a,b,c,d){d!=null?Pe(d,b):d=void 0;return lf(a,c,d)}
function tf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function uf(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function vf(a,b,c,d){a=a.R;var e=se(a);De(e);var f,g=!!(2&e),h=g?1:2;f&&(f=!g);g=jf(a,e,b);g=Array.isArray(g)?g:Be;var k=re(g),l=!!(4&k);if(!l){var m=k;m===0&&(m=tf(m,e));k=g;m|=1;var p=e,r=!!(2&m);r&&(p|=2);for(var q=!r,t=!0,u=0,z=0;u<k.length;u++){var E=Qe(k[u],c,p);if(E instanceof c){if(!r){var S=!!(re(E.R)&2);q&&(q=!S);t&&(t=S)}k[z++]=E}}z<u&&(k.length=z);m|=4;m=t?m|16:m&-17;m=q?m|8:m&-9;te(k,m);r&&Object.freeze(k);k=m}if(f&&!(8&k||!g.length&&(h===1||h===4&&32&k))){nf(k)&&(g=Array.prototype.slice.call(g),
k=tf(k,e),e=mf(a,e,b,g));f=g;for(m=0;m<f.length;m++)p=f[m],r=gf(p),p!==r&&(f[m]=r);k|=8;k=f.length?k&-17:k|16;te(f,k)}h===1||h===4&&32&k?nf(k)||(b=k,a=!!(32&k),k|=!g.length||16&k&&(!l||a)?2:2048,k!==b&&te(g,k),Object.freeze(g)):(l=h!==5?!1:!!(32&k)||nf(k)||!!Te(g),(h===2||l)&&nf(k)&&(g=Array.prototype.slice.call(g),k=tf(k,e),k=uf(k,e),te(g,k),e=mf(a,e,b,g)),nf(k)||(b=k,k=uf(k,e),k!==b&&te(g,k)),l&&(g=Se(g)));b=g;c=d!=null?Pe(d,c):new c;b.push(c);re(c.R)&2?qe(b,8):qe(b,16)}
function wf(a,b){var c=0;c=c===void 0?0:c;a=hf(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function xf(a,b){var c=yf;var d=a.R;c=qf(pf(d),d,se(d),c);a=hf(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function L(a,b,c){return lf(a,b,Oe(c))}
function zf(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Ge("enum");c|=0}return lf(a,b,c)}
;var Af;function M(a,b,c){this.R=K(a,b,c)}
M.prototype.toJSON=function(){return Bf(this)};
M.prototype.clone=function(){var a=this.R;return ef(this,a,se(a),!1)};
M.prototype.dd=we;M.prototype.toString=function(){try{return Af=!0,Bf(this).toString()}finally{Af=!1}};
function Bf(a){var b;Af?b=a.R:b=bf(a.R,cf,void 0,void 0,!1);var c=!Af;var d=Wb?void 0:a.constructor.hb;var e=se(c?a.R:b);if(a=b.length){var f=b[a-1],g=ze(f);g?a--:f=void 0;e=+!!(e&512)-1;var h=b;if(g){b:{var k=f;var l={};g=!1;if(k)for(var m in k)if(isNaN(+m))l[m]=k[m];else{var p=k[m];Array.isArray(p)&&(Ae(p,d,+m)||ye(p)&&p.size===0)&&(p=null);p==null&&(g=!0);p!=null&&(l[m]=p)}if(g){for(var r in l)break b;l=null}else l=k}k=l==null?f!=null:l!==f}for(;a>0;a--){r=a-1;m=h[r];r-=e;if(!(m==null||Ae(m,d,
r)||ye(m)&&m.size===0))break;var q=!0}if(h!==b||k||q){if(!c)h=Array.prototype.slice.call(h,0,a);else if(q||k||l)h.length=a;l&&h.push(l)}q=h}else q=b;return q}
;var Cf=window;function Df(){return Vb&&Zb?Zb.mobile:!(Vb&&Zb?!Zb.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function Ef(a){var b=Ff;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Gf(){var a=[];Ef(function(b){a.push(b)});
return a}
var Ff={ah:"allow-forms",bh:"allow-modals",dh:"allow-orientation-lock",eh:"allow-pointer-lock",fh:"allow-popups",gh:"allow-popups-to-escape-sandbox",hh:"allow-presentation",ih:"allow-same-origin",jh:"allow-scripts",kh:"allow-top-navigation",lh:"allow-top-navigation-by-user-activation"},Hf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Gf()});
function If(){var a=Jf(),b={};ob(Hf(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Jf(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Kf(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Lf=(new Date).getTime();function Mf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Nf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],u=e[2],z=e[3],E=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var S=z^t&(u^z);var ja=1518500249}else S=t^u^z,ja=1859775393;else q<60?(S=t&u|z&(t|u),ja=2400959708):(S=t^u^z,ja=3395469782);S=((p<<5|p>>>27)&4294967295)+S+E+ja+r[q]&4294967295;E=z;z=u;u=(t<<30|t>>>2)&4294967295;t=p;p=S}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;
e[2]=e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+E&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,u=p.length;t<u;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(l==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[l++]=p[q++],m++,l==64)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,af:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Of(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Pf(Mf(d),a,c||null)].join(" "):null}
function Pf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],ob(d,function(h){e.push(h)}),Qf(e.join(" "));
var f=[],g=[];ob(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];ob(d,function(h){e.push(h)});
a=Qf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Qf(a){var b=Nf();b.update(a);return b.af().toLowerCase()}
;var Rf={};function Sf(a){this.g=a||{cookie:""}}
n=Sf.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{bd:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.mi;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.bd}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Pa(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{bd:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Pa(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Tf=new Sf(typeof document=="undefined"?null:document);function Uf(a){return!!Rf.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function Vf(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Uf(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Sf(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Uf(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function Wf(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Sf(document)).get(b));return a?Of(a,c,d):null}
function Xf(a){var b=b===void 0?!1:b;var c=Mf(String(C.location.href)),d=[];if(Vf(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Sf(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Of(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Uf(b)&&((b=Wf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=Wf("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;function Yf(a){Pc.call(this);var b=this;this.A=this.i=0;this.Ea=a!=null?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return A(e,Zf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||$f(this)}
y(Yf,Pc);function ag(){var a=bg;Yf.g||(Yf.g=new Yf(a));return Yf.g}
Yf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete Yf.g};
Yf.prototype.ya=function(){return this.l};
function $f(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):A(c,Zf(a),3):A(c,Zf(a),3);$f(a);c.g=0})},3E4)}
function Zf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,ua(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Qc(a,"networkstatus-online"):Qc(a,"networkstatus-offline"));c(g);wa(h);break;case 2:va(h),g=!1,h.M(3)}})})}
;var cg=/^[6-9]$/,dg=/<\/?(?:b|em)>/gi;function eg(a){this.g=a}
var fg=new eg({});function gg(a){a=hg(a);return Ab(a)}
function ig(a){a=hg(a);return Za(a)}
function hg(a){return a===null?"null":a===void 0?"undefined":a}
;function jg(a,b,c,d,e,f){this.A=a instanceof yb?a:gg(a);this.g=b;this.u=c;this.s=d;this.i=e;this.m=f||fg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
jg.prototype.getHtml=function(){return zb(this.A).toString()};
jg.prototype.l=function(){return this.u};
jg.prototype.getType=function(){return this.s};var kg=/^\s/,lg=/\s+/,mg=/\s+/g,ng=/^\s+|\s+$/g,og=/^\s+$/,pg=/<[^>]*>/g,qg=/&nbsp;/g,rg=/&#x3000;/g,sg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],tg=document.getElementsByTagName("head")[0],ug=0,vg=1;function wg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function xg(a,b){function c(){return b}
b===void 0&&(b=a);return{Ob:c,Ud:function(){return a},
vf:c,Vh:function(){return a<b},
equals:function(d){return d&&a==d.Ud()&&b==d.vf()}}}
function yg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function zg(a,b){var c=[],d;for(d in a)yg(d,a[d],c,b);return c.join("&")}
function Ag(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");a=0;for(var d;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Bg(a){return!!a&&!og.test(a)}
function Cg(a){for(var b=sg.length,c=0;c<b;c+=2)a=a.replace(sg[c],sg[c+1].source);return a}
function Dg(a){for(var b=sg.length,c=0;c<b;c+=2)a=a.replace(sg[c+1],sg[c].source);a=a.replace(qg," ");return a.replace(rg,"\u3000")}
function Eg(a,b){return a&&(a.indexOf(" ")>-1||lg.test(a))?(a=a.replace(mg," "),a.replace(b?ng:kg,"")):a}
function Fg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Gg(){}
function Hg(a){var b=Ig;if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;++c)if(b[c]===a)return c;return-1}
function Jg(){return 0}
function Kg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Lg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(nb(b,173)!=-1?14:1));return a}
;function Mg(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(ug++).toString(36);this.B=this.g.toLowerCase();this.l=Eg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
Mg.prototype.getId=function(){return this.u};
function Ng(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function Og(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function Pg(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=fg)}
Pg.prototype.getType=function(){return this.s};function Qg(){}
Qg.prototype.zd=function(){};
Qg.prototype.redirect=function(){};
Qg.prototype.yd=function(){return""};
Qg.prototype.ie=function(){};function Rg(){this.l={};this.g={}}
Rg.prototype.set=function(a,b){this.l[a]=b};
Rg.prototype.has=function(a){return!!this.l[a]};
function Sg(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function Tg(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;c=a.l;for(var g in c)if(d=g,b=c[d])this.u[d]=b,this.g.push(b);a=a.g;for(g in a){d=g;b=a[d];c=d;d=b;e=this.m[c]||[];for(f=0;f<d.length;++f)if(b=d[f])e.push(b),this.g.push(b);this.m[c]=e}this.g.sort(Ug);for(g=0;a=this.g[g++];)a.sa(this.B,this.o);this.s.ie(this.o);this.o.Ue();for(g=0;a=this.g[g++];)a.N(this);for(g=0;a=this.g[g++];)a.ga(this.config_);for(g=0;a=this.g[g++];)a.nb(this.config_);
for(g=0;a=this.g[g++];)a.P(this.config_);this.l=!0}
function Vg(a){if(a.l){for(var b=0,c;c=a.g[b++];)c.Ga();a.l=!1}}
Tg.prototype.isActive=function(){return this.l};
Tg.prototype.get=function(a){return this.u[a]};
function Wg(a,b){return a.m[b]||[]}
function Ug(a,b){a=Hg(a.getType());b=Hg(b.getType());return a<0?1:b<0?-1:a-b}
var Ig=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function N(a){this.l=a}
n=N.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.nb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function Xg(){this.l=149;this.g={};this.i=0}
y(Xg,N);n=Xg.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.fc;this.u=b.yc;this.m=b.De}};
n.Ga=function(){Yg(this);this.i=0};
n.Be=function(a,b,c){Zg(this,a.getId(),a.g,b,c);return!0};
n.qb=function(){return 1};
n.Qc=function(){return this.i};
n.Mc=function(a){var b=this.g[a];b&&($g(b),delete this.g[a])};
function Zg(a,b,c,d,e){a.config_.Kd||Yg(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Mc(b)}};
a.g[b]=f;f.send(null)}
function Yg(a){for(var b in a.g)$g(a.g[b]);a.g={}}
function $g(a){a.onreadystatechange=Gg;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var ah;function bh(){this.l=153}
y(bh,N);function ch(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function dh(a){this.o=a}
dh.prototype.getType=function(){return this.o};
dh.prototype.s=function(){return!0};function eh(a){this.l=152;this.D=a}
I(eh,N);eh.prototype.Ab=Gg;var fh=dc(),gh;if(gh=fh){for(var hh=ic(),ih=0,jh=Pa(String(hh)).split("."),kh=Pa("10").split("."),lh=Math.max(jh.length,kh.length),mh=0;ih==0&&mh<lh;mh++){var nh=jh[mh]||"",oh=kh[mh]||"";do{var ph=/(\d*)(\D*)(.*)/.exec(nh)||["","","",""],qh=/(\d*)(\D*)(.*)/.exec(oh)||["","","",""];if(ph[0].length==0&&qh[0].length==0)break;ih=Qa(ph[1].length==0?0:parseInt(ph[1],10),qh[1].length==0?0:parseInt(qh[1],10))||Qa(ph[2].length==0,qh[2].length==0)||Qa(ph[2],qh[2]);nh=ph[3];oh=qh[3]}while(ih==0)}gh=ih>=0}
var rh=gh,sh=jc();sh&&ic();var th=cc(),uh=Yb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");fc();var vh=gc(),wh=Df()&&fc(),xh=kc(),yh=Vb&&Zb&&Zb.platform?Zb.platform==="macOS":J("Macintosh"),zh=Df();var Ah;wb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Bh(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Ch(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Ah||(c={},Ah=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Ah,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Dh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Eh(a,b){var c="";b&&(c=b.id);Ch(a,"activedescendant",c)}
;var Fh=document.documentElement.style.opacity!=void 0,Gh={rtl:"right",ltr:"left"};function Hh(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Ih(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Cc:b,Ta:c}}
function Jh(a){try{return Kh(a).activeElement==a}catch(b){}return!1}
function O(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function P(a){return O("div",a)}
function Lh(a,b){a.innerHTML!=b&&Bb(a,gg(b))}
function Mh(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Gh[b])}
function Nh(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function Oh(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return Nh(a)}
function Ph(a){var b=O("a");mb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function Qh(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Ke:c,Zd:b}}
function Kh(a){return a?a.ownerDocument||a.document:window.document}
function Rh(a){return a?(a=Kh(a),a.defaultView||a.parentWindow):window}
function Sh(){return Fh?"opacity":"filter"}
function Th(a){return Fh?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function Uh(){this.o=507;Vh(this)}
y(Uh,dh);Uh.prototype.g=function(){return this.i};
function Wh(a,b,c,d){Vh(a,c,d);Bb(a.l,fd(jd,b))}
function Vh(a,b,c){a.i=P("sbfl_a");a.l=P("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var Xh=[30,35,33,41],Yh=[39,10,21];function Zh(a,b){eh.call(this,507);this.m=a;this.g=b}
y(Zh,eh);Zh.prototype.N=function(a){this.i=a.get(128)};
Zh.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
Zh.prototype.Ib=function(){return new Uh};
function $h(a){return a.map(function(b){return{label:b.g}})}
Zh.prototype.Bb=function(a,b){a=pb(this.i.m,function(c){a:if(Xh.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=w(Yh),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(Wh(b,this.m,$h(a),this.g),b.g().style.display=""):b.g().style.display="none"};var Wc=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),ai=ha(["#ps"]);
function bi(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=P("sbpqs_d");this.u=P();this.O=O("span","sbpqs_a");this.J&&(this.l=O("a"),mb(this.l,hb(ai)),this.l.className="sbsb_i",this.I=P("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=P("sbpqs_c"),Bb(this.m,fd(jd,this.Y)),Bh(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(bi,dh);bi.prototype.g=function(){return this.i};
bi.prototype.s=function(){return this.B};
function ci(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";Bb(a.O,fd(jd,b));a.J&&(a.m.style.display="none",b=Vc(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){di(a,f)},a.l.title=e)}
function di(a,b){a.A=!0;ei(a.X,a.ca,function(){a.A&&(fi(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&gi(a.H),a.D.g==a.F&&(hi(a.D),ii(a.H)),a.B=!1)});
Oh(b)}
;function ji(){eh.call(this,35)}
y(ji,eh);n=ji.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.sd;this.s=a.nd;this.o=a.md};
n.Ib=function(){return new bi(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Bb=function(a,b){ci(b,a.getHtml(),a.g,a.l(),this.s)};
n.Ab=function(a,b,c){ki(c,b.g,1)};function li(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=P("sbpqs_d");this.m=P();this.O=O("span","sbpqs_a");this.J&&(this.u=O("a"),mb(this.u,"#ps"),this.u.className="sbsb_i",this.I=P("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=P("sbpqs_c"),Bb(this.i,fd(jd,this.Y)),Bh(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(li,dh);li.prototype.g=function(){return this.l};
li.prototype.s=function(){return this.B};
li.prototype.ea=function(a){this.A=!0;ei(this.X,this.ca,F(this.na,this));return Oh(a)};
li.prototype.na=function(){this.A&&(fi(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&gi(this.H),this.D.g==this.F&&(hi(this.D),ii(this.H)),this.B=!1)};function mi(){eh.call(this,35)}
y(mi,eh);n=mi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.sd;this.s=a.nd;this.o=a.md};
n.Ib=function(a){return new li(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Bb=function(a,b){var c=a.getHtml(),d=a.g;a=a.l();var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";Bb(b.O,fd(jd,c));b.J&&(b.i.style.display="none",Bb(b.u,fd(jd,e)),b.u.onclick=F(b.ea,b))};
n.Ab=function(a,b,c){ki(c,b.g,1)};function ni(){this.l=134;this.i={}}
y(ni,N);n=ni.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=F(this.Pe,this)};
n.P=function(a){this.A=ig("//"+(a.od||"clients1."+a.fc)+"/complete/deleteitems");this.s=a.wd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){oi(this)};
function oi(a){a.g&&(pi.removeChild(a.g),a.g=null)}
n.Pe=function(a){oi(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var pi=tg;function qi(){this.l=189}
y(qi,N);qi.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
qi.prototype.ga=function(a){this.o=a.qf};
qi.prototype.P=function(a){this.m=a.wd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(F(this.B,this),a),this.o=!1)};
function ei(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Ag(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=O("script");b=md(b,c);Db(a.g,b);pi.appendChild(a.g)}
qi.prototype.B=function(){var a=ri(this.A,"",void 0,void 0,!0);si(this.i,a);ti(this.i)};function ui(){this.l=156}
y(ui,N);ui.prototype.N=function(a){this.m=a.get(189)};
ui.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Ag(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)Og(a,d,c[d]);return 1};
ui.prototype.g=function(){return 12};function vi(a){this.l=156;this.o=a;this.m=null}
I(vi,N);vi.prototype.i=function(a){var b=1,c=a.D;a=Bg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
vi.prototype.g=function(){return 2};
vi.prototype.N=function(a){this.m=a.get(128)};function wi(){this.l=157}
y(wi,N);function xi(){this.l=156}
y(xi,N);xi.prototype.i=function(a){var b=Ag(Fb(window.location.href));b.v&&Og(a,"video_id",b.v,!0);return 1};
xi.prototype.g=function(){return 24};function yi(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(yi,N);yi.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
yi.prototype.ga=function(a){this.m=a.ld;this.H=a.mf};
function zi(a,b){a.s=b;a.F.rd(a.s)}
function Ai(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Bi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Bi(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new jg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Ci(a.g,c,!1);return!1}
;function Di(){this.l=156}
y(Di,N);Di.prototype.N=function(a){this.m=a.get(598)};
Di.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Ag(Fb(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,zi(b,c)):d||b.s==""?d&&b.s==""&&zi(b,b.m):zi(b,"");return a.D!="mousedown"&&a.D!="focus"||!Ai(this.m)?1:2};
Di.prototype.g=function(){return 46};function Fi(){this.l=149;this.i=tg;this.g={}}
y(Fi,N);n=Fi.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.yc,this.A=a.De,this.F="https:"==document.location.protocol,Gi(this,F(this.Qe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){Gi(this,null);Hi(this)};
n.Be=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Kd||Hi(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];yg("q",e,a,!0);this.config_.Je||yg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);yg("gs_gbg",e,a)}e=O("script");this.config_.lg&&e.setAttribute("nonce",this.config_.lg);
Db(e,ig(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.qb=function(){return 0};
n.Qc=function(){return 0};
n.Mc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Hi(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Qe=function(a){this.m&&this.m(a)};
function Gi(a,b){b||(b=Gg);var c=window.google;a.config_.Je?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Ii(){this.l=115;this.o={}}
y(Ii,N);n=Ii.prototype;n.N=function(a){this.m=a.get(116);if(a=Wg(a,154))for(var b,c=0;b=a[c++];)this.o[Ji]=b};
n.P=function(){this.g=!1};
n.Ga=function(){Ki(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Ki(a){if(a.g){var b=a.m;b.B=0;Li(b.o.m,!1);Mi(b.O,!1);Mi(b.i,!1);Ni(b,b.W);Oi(b.F,9);a.g=!1}}
var Pi={ae:"left",hg:!0,pb:null,marginWidth:0};function Qi(){this.l=118}
y(Qi,N);n=Qi.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=Wg(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;Ri(this)};
function Si(a){var b={};Oi(a.s,11,b);!b.cancel&&a.config_.Sf&&pd(function(){var c=a.i;ti(c.D);Ti(c)})}
function Ui(a,b){if(a.config_.Bc==0||a.config_.Bc==2||a.config_.Bc==3&&!a.o&&!b)return!1;a:{if(Vi(a.i)&&(a.i.i!=null?b=Wi(a.i):(b=a.i,b=Vi(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Fg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),Xi(a,b,xg(b.length),"",!0),Yi(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function Xi(a,b,c,d,e){a.config_.df&&!a.i.isVisible()&&d=="mousedown"&&Zi(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Fg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,$i(a,b),Oi(a.s,1,{Wb:d,pb:a.u}),g=G(),a.H||(a.H=g),a.W=g,Bg(b)&&(e=!0),g=!0;b=ri(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(F(f.clear,f),f.config_.Tf))),a.O&&Og(b,"gs_is",1),si(a.I,b)):g&&(a.i.clear(),ti(a.I));Oi(a.s,2,{Wb:d})}
function ii(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,aj(a)}catch(b){}}
function bj(a,b){$i(a,b);cj(a.m);Oi(a.s,4,{pb:a.u,input:b})}
function gi(a){a.g!=a.o&&$i(a,a.o);Oi(a.s,5,{input:a.o,Pg:a.i.m,pb:a.u});cj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function dj(a){if(a.ca){if(a.config_.Tc)return!0;for(var b=0,c;c=a.ea[b++];)if(c.isEnabled())return!0}return!1}
n.clear=function(){this.g&&($i(this,""),this.m.clear(),Oi(this.s,1),Oi(this.s,16),this.i.clear())};
function ej(a,b){var c=a.m.s.Ob();a.u==b?Vi(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.kc&&!a.config_.Na&&ki(a.F,Wi(a.i).g,6):a.config_.he&&Ui(a,!0)):a.A&&c==0&&a.A.g()}
function fj(a){var b=a.m.s.Ob();return a.config_.Na&&Vi(a.i)&&a.i.i!=null&&b===a.g.length}
function Yi(a,b,c){a.g=b||"";Ri(a);cj(a.m);c||Oi(a.s,4,{pb:a.u,input:a.g})}
function Ri(a){var b=gj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Cb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function $i(a,b){a.g=a.o=b||"";Ri(a)}
;function hj(){this.l=128}
y(hj,N);n=hj.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=Wg(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Jg)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;Ti(this)};
function Ci(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=Vi(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,k=0,l;k<f.length;++k)if(l=f.charAt(k),!ij.test(l)&&(jj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=gj(a.O,e);if(a.config_.Ag&&Vi(a)&&c&&!zh){a.F=!0;c=a.o;if(c.o){c.F=a.B;kj(c);e=!1;for(f=0;g=b[f++];)lj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Dg(e);b=a.ca;f=0;e&&(b.g||mj(b),nj(b),e in b.m?f=b.m[e]:(Lh(b.g,Cg(e)),b.m[e]=f=b.g.offsetWidth,Lh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Lg&&!Vi(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!ch(a.m,e););(f=e?e.length:0)&&(f-=oj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=oj(e,c,1));a.config_.Pf&&c.push(1);f&&(f-=oj(e,c,2));f&&oj(e,c,3);a.config_.Xd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;kj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=O("li"),k=h.style,k.position="relative",k.textAlign="center",k.whiteSpace="nowrap",h.dir=
g.H,g.i=P(),g.i.className="sbsb_g",g.config_.Xd&&(g.i.style.paddingBottom="1px"),pj(g,g.config_.Ig,g.i,13),g.config_.Of?pj(g,g.config_.Nd,g.i,8):g.config_.Qf&&pj(g,g.config_.Jg,g.i,14),h.appendChild(g.i),h.onmousedown=F(g.kd,g),h.className=g.config_.Ac,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=P("sbsb_j "+g.config_.Ac);k=O("a");k.id="sbsb_f";mb(k,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Xc+"&answer=106230");var m=g.config_.mg;l={Bg:!0};
l=l===void 0?{}:l;m instanceof yb?l=m:(m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"),l.ii&&(m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;")),l.Bg&&(m=m.replace(/(\r\n|\n|\r)/g,"<br>")),l.ji&&(m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>')),l=Ab(m));Bb(k,l);h.appendChild(k);h.onmousedown=F(g.kd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=O("li"),Ch(h,"hidden",!0),h.l=!0,k=O("div","sbsb_e"),h.appendChild(k)),
g.g.appendChild(h)):lj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),qj(a,a.H.g()));c?Bi(a):a.clear()}
function qj(a,b){if(a.g!=b){var c=a.g;a.g=b;rj(a,c)}}
n.ze=function(){if(Vi(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;sj(this,a,F(this.ze,this))}else Bi(this)};
n.Ae=function(){if(Vi(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;sj(this,a,F(this.Ae,this))}else Bi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function Wi(a){return a.i!=null?a.m[a.i]:null}
function Vi(a){return!(!a.m||!a.m.length)}
function Bi(a){if(!a.s){a:{var b=a.I,c=Ji;if(c in b.o){if(b.i){if(c==Ji)break a;Ki(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Kg(Pi);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Qg;f||(f=e.B=="rtl"?"right":"left");d.ae=f}Ni(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.hg;b.ca=d.ae;Li(b.o.m,!0);Mi(b.O,!0);Mi(b.i,
!0);Oi(b.F,14);b.Bd();c.g=!0}a.s=!0}}
function Ti(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Ki(a.I),a.s=!1)}
n.clear=function(){Ti(this);this.m=null;this.F=!1;this.g!=null&&tj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function hi(a){a.g!=null&&tj(a.o,a.g);a.i=a.g=null}
function Zi(a,b,c){if(Vi(a))Bi(a);else{var d=a.u.o;d&&(b=ri(a.Y,d,b||a.u.m.s,c),si(a.D,b))}}
function oj(a,b,c){for(var d=0,e=0,f;e<a.length;++e)(f=a[e])&&f.position==c&&(c==3?f.la&&f.la(b)&&++d:(b.push(f),++d));return d}
function sj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(rj(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Eh(b.u,c)),a.g==null?gi(a.u):(b=a.m[a.g],b.getType(),Yi(a.u,b.g))):(tj(a.o,b),c())}
function rj(a,b){b!=null&&tj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&uj(a.g().parentNode,b.X))}
var Ji=vg++;function vj(){this.l=154}
y(vj,N);vj.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function wj(){this.l=145;this.g=jj.test("x")}
y(wj,N);wj.prototype.sa=function(a){this.i=a.lc()};
function gj(a,b){var c=a.i;a.g&&(jj.test(b)?c="ltr":ij.test(b)||(c="rtl"));return c}
var ij=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),jj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function xj(){this.l=117;this.i=[];this.g={Oe:1}}
y(xj,N);function Q(a,b,c,d,e,f){var g=yj(a,b);g||(g={},a.i.push({element:b,Kf:g}));var h=g[c];h||(h=g[c]=[],a=zj(a,c,b.Oe?window:Rh(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({gg:!!f,ad:!1,priority:e||0,process:d});h.sort(Aj);d.lf=c}
function Bj(a,b,c){if(a=yj(a,b))if(a=a[c.lf])for(var d=0;b=a[d++];)if(b.process==c){b.ad=!0;break}}
function Oi(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Wb)}
xj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function zj(a,b,c,d){return F(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.fg=!0)}e.Wb=f||b;f=e;for(var h,k,l=0;g=d[l++];)g.ad?k=!0:h||(g.gg?Cj(g,f):h=g.process(f));if(k)for(k=0;h=d[k];)h.ad?d.splice(k,1):++k;if(e.pc)return delete e.pc,e.fg&&(e=c.event||e),Oh(e),e.returnValue=!1}},a)}
function yj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Kf;return null}
function Cj(a,b){pd(function(){a.process(b)})}
function Aj(a,b){return b.priority-a.priority}
;function Dj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Dj,N);Dj.prototype.P=function(){this.reset()};
Dj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Ej(){this.l=374}
y(Ej,N);Ej.prototype.P=function(){this.reset()};
Ej.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Ej.prototype.reset=function(){this.g={}};function Fj(){this.l=120;this.D=-1}
y(Fj,N);Fj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=Wg(a,311)};
Fj.prototype.ga=function(a){this.u=a.og};
Fj.prototype.P=function(a){this.config_=a;this.reset()};
function Gj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Hj(a.config_.clientName);d[28]=Hj(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Qc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){for(var g=e=0,h;h=b[g++];){h=Lg(h.getType(),h.i||[]);if(h!=k){e>1&&(f+="l"+e);f+=(k?"j":"")+h;e=0;var k=h}++e}e>1&&(f+="l"+e)}d[3]=f;k="";f=a.o.m;b=a.i.s;if(f)for(e=0;g=f[e++];){var l=Lg(g.getType(),
g.i||[]);l in b&&delete b[l]}if(b)for(l in b)k+=(k?"j":"")+l;d[35]=k;l=a.i.i;d[33]=l>-1?String(l):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=G()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Db;k=a.g;k=(l=k.i)?k.g.m:0;d[25]=l?"1"+(a.config_.gf?"a":"")+(a.config_.Id?"c":""):"";d[10]=k;l=a.g;d[11]=l.i?l.g.o:0;d[12]=a.g.na;f=a.g;l=f.ca;k=f.Y;f=f.ea;d[9]=l;d[22]=k;d[17]=f;d[13]=a.g.Cb;d[14]=a.g.H;d[15]=a.g.J;l=a.g;k=[];for(b=e=0;b<=Ij;++b)f=l.I[b],f==0?e++:(e=e==1?"0j":e>1?b+"-":
"",k.push(e+f),e=0);d[16]=k.join("j");d[36]=a.g.O;l=0;for(var m in a.i.g)l++;d[30]=l;d[31]=a.i.u;d[32]=a.i.o;d[19]=Hj(a.config_.ud);m=a.i;k=a.B.g;l=!1;k&&(l=k.i.g.e||"");k=0;l?(k|=1,m.m>1&&(k|=2)):m.m>0&&(k|=2);m=k;d[20]=m==0?"":m+"";for(m=0;l=a.F[m++];)k=l.l(),Jj[k]&&(d[k]=d[k]==void 0?Hj(l.g()):"");d=d.join(".").replace(Kj,"");if(a.H&&a.u){m=c+d;b:{l=a.u;k=[];if(l)for(e=b=f=0;e<l.length;++e){g=l.charCodeAt(e);if(g<32||g>127||!Lj[g-32]){l=[];break b}f<<=6;f|=Lj[g-32]-1;b+=6;b>=8&&(k.push(f>>b-8&
255),b-=8)}l=k}f=l;l={};l.chain=Array(4);l.buffer=Array(4);l.Zg=Array(4);l.padding=Array(64);l.padding[0]=128;for(k=1;k<64;++k)l.padding[k]=0;Mj(l);k=Array(64);f.length>64&&(Mj(l),Nj(l,f),f=Oj(l));for(b=0;b<f.length;++b)k[b]=f[b]^92;for(b=f.length;b<64;++b)k[b]=92;Mj(l);for(b=0;b<64;++b)l.buffer[b]=k[b]^106;Pj(l,l.buffer);l.total=64;Nj(l,Qj(m));m=Oj(l);Mj(l);Pj(l,k);l.total=64;Nj(l,m);m=Oj(l);m=m.slice(0,8);typeof m==="string"&&(m=Qj(m));l="";if(m){k=m.length;for(e=b=f=0;k--;)for(b<<=8,b|=m[e++],
f+=8;f>=6;)l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(l+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=l}else m="";c={oq:c,gs_l:d+"."+m};a.config_.ig&&(c.q=a.m.g);return c}
Fj.prototype.reset=function(){this.s=G();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Db=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Cb=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=Ij;++b)a.I[b]=0;for(a=0;b=this.F[a++];)b.reset();this.i.reset()};
function Hj(a){return a?a.replace(Rj,"-"):""}
var Kj=/\.+$/,Rj=/\./g,Jj=wg([23]);function Sj(){this.l=121}
y(Sj,N);Sj.prototype.sa=function(a){this.m=a.Rd()};
Sj.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=Wg(a,294)};
Sj.prototype.P=function(a){this.config_=a};
function ki(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Bg(b)||a.config_.lb||a.s&&a.s.lb()){if(cg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=O("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Nc&&Tj(a.g,c);a.u.zd(c);Uj(a);Oi(a.F,12,{query:b})}}
Sj.prototype.redirect=function(a){this.g&&this.config_.Nc&&Tj(this.g);this.u.redirect(a);Uj(this)};
function Uj(a){ti(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function Vj(){this.l=553}
y(Vj,N);Vj.prototype.N=function(a){this.g=Wg(a,156);a.get(126)};
Vj.prototype.ga=function(){this.g.sort(Wj)};
Vj.prototype.P=function(a){this.config_=a;this.i=a.ld};
Vj.prototype.rd=function(a){this.i=a};
function ri(a,b,c,d,e){b=new Mg(b,c||xg(b.length),d||"");c=1;if(a.g){d=0;for(var f;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Kc!=null&&Og(b,"ds",a.config_.Kc,!0);a.config_.Ce!=null&&Og(b,"swl",a.config_.Ce,!0);Og(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=G(),"cp"in b.A||(a=b.J.Ob(),Og(b,"cp",a,!0)),Og(b,"gs_id",b.u),b.i=zg(b.A)+":"+b.B,b.m=!0);return b}
function Wj(a,b){return a.g()-b.g()}
;function Xj(){this.l=123;this.A=!1;this.F=-1}
y(Xj,N);n=Xj.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Fc=a.get(118);this.Gc=a.get(120);this.X=a.get(494);this.Ve=a.get(124);this.Eb=a.get(125);this.Fb=a.get(230);this.Hc=a.get(127)};
n.P=function(a){this.u=this.Hc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Re=a.rf;this.Se=a.Wf;this.Ya=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;Yj(this);this.m=this.o=null;ti(this)};
function si(a,b){if(!(!a.A||a.Se||a.W&&a.W.l())){var c=!0,d=Ng(b);d>a.F&&(a.F=d);++a.Db;a.X.g[b.getId()]=!0;Bg(a.Fc.g)||Bg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=G();for(var e in a.m)d-a.m[e].s>2500&&Zj(a,e);a.i&&(e=a.g.get(b))&&((c=a.Re||b.I)&&a.config_.Xf&&(b.o=!0),a.Eb.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.pe())}}
function ti(a){a.Ya=a.F}
function fi(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function ak(a,b){return F(function(c){this.Ad(c,b)},a)}
n.pe=function(){Yj(this);if(!(this.u.Qc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)yg(d,c[d],b);b=this.u.Be(a,b.join("&"),ak(this,a),F(this.Ad,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(F(this.pe,this),a)}}};
function Yj(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function Zj(a,b){a.u.Mc(b);delete a.m[b];a.s&&--a.s}
n.Ad=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ve;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var k=a[h];h in c.g&&(k=c.g[h].parse(k));g[h]=k}h=k=a=!1;for(var l,m=0;l=f[m++];)if((l[1]||0)==33?k=!0:a=!0,k&&a){h=!0;break}a=0;k=[];for(m=0;l=f[m++];){var p=l[1]||0;if(!h||p!=33){var r=l[0];c.m&&(r=c.i.bold(e.toLowerCase(),Dg(r).replace(pg,"")));var q=k,t=q.push,u=Dg(r).replace(pg,""),z=a++,E=l[3];t.call(q,new jg(r,u,z,p,l[2]||[],E?new eg(E):fg))}}c=
new Pg(d,k,new eg(g),!1,!0,!1);this.Fb&&(c=fd(this.Fb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);Ng(b)<=this.Ya?!b||b.g||c.o||(this.O=G()-b.s):(++this.ea,this.Eb.process(c)||++this.Cb,this.D=c.i.g.d||0,b&&(Zj(this,b.getId()),d=b.s,d=G()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>bk?Ij:ck[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Gc.u=b)}}};
var ck=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Ij=ck[ck.length-1]+1,bk=ck.length*100-1;function dk(){this.l=124;this.g={}}
y(dk,N);dk.prototype.N=function(a){this.i=a.get(150);if(a=Wg(a,158))for(var b,c=0;b=a[c++];)this.g[b.Sh()]=b};
dk.prototype.P=function(a){this.m=a.Sc};function ek(){this.l=125}
y(ek,N);ek.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=Wg(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(fk)};
ek.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Eg(c);var e=b.l;b=e?e.l:Eg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(e=0;b=this.g[e++];)a=b.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Ci(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Bg(g.g)||(b.i=h),g=g.s,g=G()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Lg(h,f.i||[])]=!0;Oi(this.o,3,{input:a,Pg:e})}return c};
function fk(a,b){return a.g()-b.g()}
;function gk(){this.l=126}
y(gk,N);gk.prototype.N=function(a){this.i=a.get(123)};
gk.prototype.P=function(){this.g=null};var hk=["expflags","plugin"];function ik(){this.l=127;this.m={}}
y(ik,N);ik.prototype.N=function(a){a=Wg(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
ik.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];yg("client",a.clientName,c);yg("hl",a.Xc,c);yg("gl",a.Fe,c);yg("sugexp",a.ud,c);yg("gs_rn",64,c);yg("gs_ri",a.requestIdentifier,c);var d=Ag(a.url||C.location.href);hk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&yg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.od||"clients1."+a.fc,yc:a.yc||"/complete/search",De:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function jk(){this.l=191}
y(jk,N);function Qj(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Mj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Yb=a.total=0}
function Pj(a,b){for(var c=a.Zg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,k,l=0;l<64;++l)l<16?(g=f^b&(d^f),h=l):l<32?(g=d^f&(b^d),h=5*l+1&15):l<48?(g=b^d^f,h=3*l+5&15):(g=d^(b|~f),h=7*l&15),k=f,f=d,d=b,e=e+g+kk[l]+c[h]&4294967295,g=lk[l],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=k;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function Nj(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Yb++]=b[d],a.Yb==64&&(Pj(a,a.buffer),a.Yb=0)}
function Oj(a){var b=Array(16),c=a.total*8,d=a.Yb;Nj(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;Pj(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Lj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],lk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],kk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function mk(){this.l=150}
I(mk,N);
mk.prototype.bold=function(a,b){b=Cg(b.replace(dg,""));a=Cg(Eg(a,!0));if(Fg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=0,g=-1,h;h=b.charAt(f);++f)h==" "||h=="\t"?c.length&&(d.push({t:c,Ub:g,e:f+1}),c="",g=-1):(c+=h,g==-1?g=f:f==e&&d.push({t:c,Ub:g,e:f+1}));a=a.split(/\s+/);f={};for(c=0;e=a[c++];)f[e]=1;g=-1;a=[];h=d.length-1;for(c=0;e=d[c];++c)f[e.t]?(e=g==-1,c==h?a.push({Ub:e?c:g,e:c}):e&&(g=c)):g>-1&&(a.push({Ub:g,e:c-1}),g=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(f=e=0;g=a[f];++f)(h=d[g.Ub].Ub)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[g.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function nk(){this.l=146}
I(nk,N);function ok(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
ok("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");ok("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");ok("D1,D4,D7,DA,DD");ok("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");ok("D1__,D4__,D7__,DA__,DD");ok("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");ok("CF,D2,D5,D8,DB");function pk(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(pk,N);n=pk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.lc();b.addRule(".sbdd_a",(zh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");zh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.g=P();this.g.className="gstl_"+this.Y+" sbdd_a";Mi(this.g,!1);this.O=this.g;this.H=P("fl");this.g.appendChild(this.H);this.A=P();this.g.appendChild(this.A);this.s=P("sbdd_b");this.A.appendChild(this.s);this.na=P();this.A.appendChild(this.na);this.config_.Wd&&(this.i=O("iframe","gstl_"+this.Y+" sbdd_c"),Mi(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.ef)typeof this.m==="number"&&(this.m+=this.config_.ic[2],this.m-=qk(this)),rk(this,this.g,
this.m);sk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=F(this.Bd,this);Q(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Mb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Bd=function(){this.B=0;sk(this);if(this.i){var a=this.config_.Dd[0],b=this.i.style;this.config_.Mb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";rk(this,this.i,this.s.offsetWidth)}this.u&&kj(this.u.g)};
function sk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Nf||c.H==c.F?c.Ya:null;var d=(b=c)?b.offsetWidth:tk(a.o.m);var e=a.m;c=qk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.ic[2]-c,rk(a,a.g,e));if(a.config_.Mb!="relative"){var f="rtl"==Kf()!=(a.D=="rtl"),g=a.config_.Ia;var h={Ta:0,Cc:0};if(f||!g||g==document.body||a.config_.Pd)h=Ih(a.o.m.F),b&&(h.Ta=Ih(b).Ta);b=h;h=e;e=a.config_.ic;g=e[1];e=e[0];e=b.Cc+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Kf()!=(a.D=="rtl");var k=a.config_.Ia;g=-g;if(h||!k||k==document.body)g+=(Rh(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Cc:0};a.config_.Mb=="absolute"&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Pd)&&(e=Ih(a.config_.Ia));g=a.g.style;g.top=h-e.Cc+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function rk(a,b,c){typeof c==="number"?c>0&&(a.config_.Yg?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Mi(a,b){a&&(a.style.display=b?"":"none")}
function Ni(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");Mh(a.g,b)}}
function qk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function uk(){this.l=119;this.W=!1;this.s=xg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(uk,N);n=uk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Rc();Bh(this.g,"combobox");Ch(this.g,"haspopup",!1);Ch(this.g,"autocomplete","list");this.Fc=a.lc();a.Ic()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=yh&&uh||fh?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),rh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Cb=!!a.get(136);this.Gc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Pb;this.O=a.eg;this.Hc=a.Jd;this.u=Jh(this.g);this.Ec();var b=this;fh&&Q(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.pc=!0)},10);
a=(lc()||J("iPad")||J("iPod"))&&vh;sh&&vk(this);(wh||a)&&wk(this);this.F=this.g};
n.nb=function(a){var b=!!a.kf[130];if(this.Cb||dj(this.i)||b||a.sf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=P("gstl_"+this.Gc+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=th||fh?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Wc,b&&(this.B=P("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),dj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Fc,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=P("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),xk(this,this.A,this.o)),this.config_.qd&&this.g&&this.o&&(this.g.removeAttribute("role"),Bh(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Ch(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Ch(this.g,"controls",b),this.config_.qd&&this.o?(Ch(this.o,"haspopup","grid"),Ch(this.o,
"owns",b)):Ch(this.g,"haspopup","grid")),this.config_.Mg||this.config_.bf||yk(this,this.A),this.F=this.A;this.Hc&&(b=F(this.ne,this),Q(this.m,this.g,"blur",b,10),b=F(this.we,this),Q(this.m,this.g,"focus",b,10),this.Fb=!0);b=this.m;a=F(this.Jf,this);Q(b,b.g,8,a);zk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.je?"":"none";this.Db=this.g.value;this.Fb&&this.we();Ak(this)};
n.Ga=function(){this.Fb&&this.ne();Bk(this)};
function xk(a,b,c){Bk(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.Dg&&(fh||sh?pd(function(){a.g.focus();Hh(a.g,a.s.Ob())}):a.g.focus());
Ak(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function tk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Ec()};
function cj(a){xh&&(a.g.value="");a.g.value=a.i.g;xh&&(a.g.value=a.g.value);aj(a)}
function Ck(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function aj(a){if(a.u){var b=a.g.value.length;a.s=xg(b);Hh(a.g,b)}}
function yk(a,b){Q(a.m,b,"mouseup",function(){a.g.focus()})}
function zk(a){function b(e){Q(a.m,a.g,e,F(a.te,a),10,c)}
Q(a.m,a.g,"keydown",F(a.Hf,a));(th||a.config_.Ye)&&Q(a.m,a.g,"keypress",F(a.If,a));Q(a.m,a.g,"select",F(a.Ec,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=F(a.Ef,a);Q(a.m,a.g,"compositionstart",d);Q(a.m,a.g,"compositionend",d)}
n.Ef=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Hf=function(a){var b=a.keyCode;this.ca=b;var c=(uh||sh)&&(b==38||b==40)&&Vi(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=Ui(this.i));if(d){(b=Wi(this.X))&&b.getType();var f=this;pd(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&Wi(g).getType();g=g.u;ki(g.F,g.g,h)})}if(c||d||e||this.Y)a.pc=!0};
n.If=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.pc=!0};
n.te=function(a){if(!this.Eb){var b=a.Wb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Hg?ki(a.F,a.g,5):(a.i.isVisible()?(c=a.i,ti(c.D),Ti(c)):Ck(a.m),gi(a));break;case 37:a=this.i;ej(a,"rtl");if(fj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Dk(a,c.i))&&!(c.length<=1))))for(d=Dh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Eh(a.u,c[e-1]);break;case 39:a=this.i;ej(a,"ltr");if(fj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Dk(a,c.i))))for(d=Dh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Eh(a.u,c[e+1]);break;case 38:this.i.i.Ae();break;case 40:a=this.i;c=this.s;Vi(a.i)?a.i.ze():Zi(a.i,c);break;case 46:a=this.i;a.g&&this.s.Ud()==a.g.length&&(a.J&&a.J.clear(),a.config_.Gg&&ki(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Ob()==0&&a.A.g()}}this.Ec();Xi(this.i,this.g.value,this.s,b)}};
n.Df=function(){this.u=!0;Oi(this.i.s,10)};
n.Bf=function(){this.u=!1;Si(this.i)};
function Ak(a){a.W||(a.W=!0,a.Ya=F(a.Df,a),Q(a.m,a.g,"focus",a.Ya,99),a.na=F(a.Bf,a),Q(a.m,a.g,"blur",a.na,99))}
function Bk(a){a.W&&(a.W=!1,Bj(a.m,a.g,a.Ya),Bj(a.m,a.g,a.na))}
n.we=function(){this.H||(this.H=new Sd(this.config_.zg||50),this.H.ra("tick",this.yg,void 0,this),this.H.start())};
n.ne=function(){this.H&&(Td(this.H),this.H=null)};
n.yg=function(){this.te({Wb:"polling"})};
n.Jf=function(){if(sh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Ec=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Kh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=xg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function vk(a){var b;a.m.ra(window,"pagehide",function(){a.Eb=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Eb=!1;(c.persisted||b!==void 0)&&bj(a.i,b)})}
function wk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Db&&bj(a.i,a.Db)})}
function Li(a,b){a.config_.qd&&a.o?Ch(a.o,"expanded",b):Ch(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Ek(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ek(a).match(/\S+/g)||[],b=nb(a,b)>=0);return b}
function uj(a,b){if(a.classList)a.classList.add(b);else if(!Gk(a,b)){var c=Ek(a);Fk(a,c+(c.length>0?" "+b:b))}}
function Hk(a,b){a.classList?a.classList.remove(b):Gk(a,b)&&Fk(a,Array.prototype.filter.call(a.classList?a.classList:Ek(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Ik(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Ik,N);n=Ik.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Rc();this.H=a.lc();zh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");zh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(uh?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
zh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=Wg(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.o=P();a.Na?(this.g=P("sbsb_b"),Bh(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=O("ul","sbsb_b"),Bh(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.se;b&&(this.Ya=this.O.Qd(b));this.o.className=a.Rg||"sbsb_a";this.X=a.Og||"sbsb_d"};
function Dk(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function tj(a,b){(b=a.m[b])&&Hk(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function lj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Jk(a,d));d.Bb(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Kk(a);f.appendChild(e);if(b.l!==void 0){a.m.push(c);g=a.F;var h=b.l();a.config_.Uf&&(e.onmouseover=function(){qj(a.D,h)},e.onmouseout=function(){hi(a.D)});
var k=c.g();k.onclick=function(l){Ck(a.s.m);b.o&&Yi(a.s,b.g);hi(a.D);var m=a.D;m.i=m.g=h;l=l||Rh(k).event;d.Ab(l,b,a.I)}}else g=a.H;
Mh(f,g);return!0}
function Jk(a,b){b=b.Ib(a.I);var c=b.g();uj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Bh(c,"option");a.ea++;return b}
function pj(a,b,c,d){var e=O("input");e.type="button";e.value=Dg(b);e.onclick=function(){ki(a.I,a.s.g,d)};
if(a.config_.Mf){b="lsb";var f=O("span");var g=O("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Kk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=P(),Bh(b,"row")):(b=O("li"),Bh(b,"presentation"));b.className="sbsb_c "+a.config_.Ac;b.onmousedown=F(a.kd,a);a.g.appendChild(b);return b}
n.kd=function(a){a=a||Rh(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):fh&&!th&&(this.s.m.ea=!0);return!1};
function kj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=tk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Lk(){this.l=147}
I(Lk,N);Lk.prototype.sa=function(a){this.u=a.Rd()||document.body};
Lk.prototype.ga=function(a){this.config_=a};
Lk.prototype.getHeight=function(){this.g||mj(this);nj(this);this.i||(Lh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function mj(a){var b=P(a.config_.Wc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function nj(a){var b=G();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=Rh(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Mk(){Rg.call(this);this.set(191,new jk);this.set(150,new mk);this.set(146,new nk);this.set(147,new Lk);Sg(this,149,new Fi);this.set(145,new wj);this.set(117,new xj);this.set(494,new Dj);this.set(374,new Ej);this.set(120,new Fj);this.set(121,new Sj);this.set(553,new Vj);this.set(124,new dk);this.set(125,new ek);this.set(123,new Xj);this.set(126,new gk);this.set(127,new ik);this.set(115,new Ii);this.set(118,new Qi);this.set(128,new hj);Sg(this,154,new vj);this.set(116,new pk);this.set(119,
new uk);this.set(129,new Ik)}
y(Mk,Rg);function Nk(){this.l=347;this.i=[];this.m=0}
y(Nk,N);Nk.prototype.N=function(a){this.o=a.get(120)};
Nk.prototype.P=function(a){this.s="//"+(a.ng||"www."+a.fc)+"/gen_204?";this.g=a.Ng||{}};
function Tj(a,b){b=Gj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=zg(b,!0);Ok(a,a.s+c)}
function Ok(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function Pk(){this.l=151;this.g=!0;this.i={}}
y(Pk,N);n=Pk.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=wg([0])};
n.P=function(a){this.o=a.Sc;this.g=a.Id};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Fg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,k,l=b.g,m,p=0;m=l[p++];)k=m.g,h=f?this.m.bold(c,k):Cg(k),g.push(new jg(h,k,m.l(),m.getType(),m.i||[],m.m));delete this.i[d];return new Pg(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function Qk(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(Qk,N);Qk.prototype.N=function(a){this.g=Wg(a,151);this.g.sort(Rk)};
Qk.prototype.P=function(){this.o=this.m=0};
Qk.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new Pg(a,b.g,b.i,b.o,b.m,b.u):null};
Qk.prototype.has=function(a){return!!this.i[a.i]};
function Rk(){return 0}
;function Sk(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function Tk(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function Uk(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function Vk(){this.l=570;this.m=!1}
I(Vk,N);n=Vk.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Nb;if(this.g=b?this.u.Qd(b):null){b=this.s;var c=F(this.Cf,this);Q(b,b.g,10,c);b=this.s;c=F(this.Af,this);Q(b,b.g,11,c);Q(this.s,this.g,"mouseover",F(this.Gf,this));Q(this.s,this.g,"mouseout",F(this.Ff,this));a.Pc&&(this.o=new Sk(a.Pc));a.Oc&&(this.i=new Sk(a.Oc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&Tk(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&Uk(this.o,this.g),this.i&&Uk(this.i,this.g))};
n.Gf=function(){this.m&&this.o&&Tk(this.o,this.g)};
n.Ff=function(){this.m&&this.o&&Uk(this.o,this.g)};
n.Cf=function(){this.m&&this.i&&Tk(this.i,this.g)};
n.Af=function(){this.m&&this.i&&Uk(this.i,this.g)};var Wk=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function Xk(){this.l=160}
I(Xk,N);n=Xk.prototype;n.sa=function(a,b){this.m=a;a.Ic()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.nc;this.A=a.le;this.D=a.sc;this.H=a.wg;this.F=a.vg};
n.nb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=O("img"),this.g.src=this.A+"/tia.png",this.i=O("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=F(this.cf,this);this.g.setAttribute("tia_field_name",this.m.Rc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Tc&&(this.o=!!a.nc);this.g.setAttribute("tia_property",a.me)};
n.isEnabled=function(){return this.o};
n.Td=function(){return{tooltip:this.F}};
n.Cd=function(a){if(!this.B){a=od("SCRIPT");var b=ld(Wk,this.H,this.D);Db(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.cf=function(){var a=this.u;ti(a.D);Ti(a)};
var Yk=vg++;var Zk=ha(["#"]);function $k(){this.l=173;this.m={}}
y($k,N);n=$k.prototype;
n.sa=function(a,b){this.o=a;a.Ic()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(Sh()+":"+Th(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",Sh()+":"+Th(.8)+";"),b.addRule(".gsst_a:active .gsst_e",Sh()+":"+
Th(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=Wg(a,160)};
n.ga=function(a){this.A=a.Tc;this.i.sort(al)};
n.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=P("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Pb)this.g.style.lineHeight=a+"px";bl(this)}cl(this)};
n.P=function(){if(this.A)for(var a=0,b;b=this.i[a++];){var c=!!this.m[Yk];if(b.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);bl(this);cl(this);break}}};
function al(){return 0}
function bl(a){for(var b,c=0,d;d=a.i[c++];)if(d.isEnabled()){b=!0;var e=O("a","gsst_a");dl(a,e,d);e.appendChild(d.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function cl(a){a.m={};for(var b=0,c;c=a.i[b++];)if(c.isEnabled()){var d=Yk,e=c.i.parentNode;e.onclick=F(c.Cd,c);a.m[d]=e;c.Td&&(c=c.Td(),c.Yh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=c.tooltip)&&(e.title=d)}}
function dl(a,b,c){mb(b,hb(Zk));b.addEventListener("click",function(){return!1});
th&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Cd(d),ii(a.u),Oh(d)}}
vg++;function el(){this.o=33;this.l=P();this.l.className="gspr_a"}
I(el,dh);el.prototype.g=function(){return this.l};function fl(){eh.call(this,33)}
y(fl,eh);fl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
fl.prototype.Ib=function(){return new el};
fl.prototype.Bb=function(a,b){Bb(b.l,fd(jd,a.m.g.b||""))};
fl.prototype.Ab=function(a,b,c){ki(c,b.g,1)};function gl(a,b){this.o=0;this.u=a;this.D=b;this.m=P();this.l=P("sbqs_a");this.m.appendChild(this.l);this.B=P("sbqs_c");this.m.appendChild(this.B)}
y(gl,dh);gl.prototype.g=function(){return this.m};
function hl(a,b,c,d){Bb(a.B,gg(b));a.A=c;d&&!a.i&&(a.i=Ph(a.l),a.i.onclick=F(function(e){Ck(this.u.m);Yi(this.u,this.A);ki(this.D,this.A,9);return Oh(e)},a));
d?(Bb(a.i,gg(d+" &raquo;")),a.l.style.display="",Ch(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function il(){eh.call(this,0)}
I(il,eh);n=il.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Md?a.Nd:""};
n.Ib=function(a){return new gl(this.g,a)};
n.Bb=function(a,b){hl(b,a.getHtml(),a.g,this.i)};
n.Ab=function(a,b,c){ki(c,b.g,1)};function jl(a){Mk.call(this);Sg(this,149,new Xg);this.set(347,new Nk);this.set(133,new Qk);Sg(this,151,new Pk);this.set(570,new Vk);this.set(134,new ni);this.set(189,new qi);Sg(this,156,new ui);a.ENABLE_DELETE_ICON?Sg(this,152,new ji):Sg(this,152,new mi);Sg(this,152,new fl);Sg(this,152,new il);this.set(173,new $k);Sg(this,160,new Xk);this.set(157,new wi);Sg(this,156,new xi);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&Sg(this,156,new vi(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(Sg(this,153,new bh),Sg(this,152,new Zh(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new yi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),Sg(this,156,new Di))}
y(jl,Mk);function kl(){return{uf:function(){return{clientName:"hp",requestIdentifier:"hp",fc:"google.com",Fe:"",Xc:"en",Kc:"",ld:"",videoId:"",wd:"",authuser:0,og:"",yi:"",Ce:null,ud:"",Kd:!1,od:"",yc:"",connectionType:0,transport:null,Je:!1,li:!1,Wf:!1,enableCaching:!0,mf:10,Rh:10,gf:!0,Id:!0,Nh:!1,rf:!1,ig:!1,jg:!1,bi:!1,Sf:!0,df:!1,Tf:500,Tc:!1,Lf:!0,Wh:!0,ri:!1,nc:!1,sc:"",le:"//www.google.com/textinputassistant",me:"",wg:7,Th:!1,Uh:!1,Pf:!1,Of:!0,Qf:!1,Xd:!1,Na:!1,Hg:!1,Gg:!1,Bc:1,he:!0,kc:!1,Md:!1,Jd:!1,
zg:10,Sc:!1,Dg:!0,Ia:document.body,Rf:!0,Ge:null,kf:{},Qh:{},ki:0,sf:!1,Xf:!0,lb:!1,qf:!1,Lg:!1,ti:null,hf:!1,ng:null,Ng:null,Nc:!1,Uf:!0,qd:!1,Ye:!1,vi:1,je:!1,Ig:"Search",Nd:"I'm  Feeling Lucky",Jg:"",mg:"Learn more",nd:"Remove",md:"This search was removed from your Web History",Xh:"",Mh:"Did you mean:",vg:"",ni:"",Bi:"Search by voice",Ai:'Listening for "Ok Google"',zi:'Say "Ok Google"',Lh:"Clear Search",Pb:0,eg:0,Wc:"",Ac:"",ai:!1,Mb:"absolute",Mf:!1,Wd:!1,se:null,Nf:!0,ic:[0,0,0],ef:null,Qg:null,
Dd:[0],sd:!0,Ie:"",Rg:"",Og:"",Nb:null,Pc:"",Oc:"",Kh:1,Yg:!1,Pd:!1,di:0,Mg:!1,bf:!1,Oh:!1,Ag:!0}}}}
;function ll(a,b,c,d,e){var f=sh?"-moz-":fh?"-ms-":th?"-o-":uh?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),k=[];return{addRule:function(l,m){if(b){if(c){l=l.split(",");for(var p=[],r=0,q;q=l[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);l=p.join(",")}k.push(l,"{",m,"}")}},
Ue:function(){if(b&&k.length){b=!1;var l=O("style");l.setAttribute("type","text/css");(a||tg).appendChild(l);var m=k.join("");k=null;l.styleSheet?l.styleSheet.cssText=m:l.appendChild(document.createTextNode(m))}},
prefix:function(l,m){var p=l+(m||"");f&&(p+=m?l+f+m:f+l);return p}}}
;function ml(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=ml.prototype;n.install=function(a){if(!this.D){a=nl(a);this.l<0&&(this.l=ol(a));var b=Kh(this.i),c=pl(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Ie&&f.push(a.Ie);f=ll(a.Ge,a.Rf,a.hf,this.l,f);this.A=a.lb;this.g=new Tg(this.F,this.H,{Ic:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Qd:function(g){return b.getElementById(g)},
Rd:function(){return e.I},
lc:function(){return c},
getId:function(g){return g+e.l},
Rc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=Rh(this.i);this.s=Qh(a);this.B=F(this.Fg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function ql(a,b){function c(d){ki(a.X,a.J.g,12);return Nh(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.lb=function(){return this.A||!!this.u&&this.u.lb()};
n.rd=function(a){this.W.rd(a)};
function ol(a){a=Rh(a.Ge||tg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function pl(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function nl(a){a=Kg(a);var b=a.sc;b?a.sc=b.toLowerCase():a.nc=!1;a.kc&&!a.Md&&(a.kc=!1);vh||(a.jg=!1);return a}
n.Fg=function(){var a=Qh(Rh(this.i));if(a.Ke!=this.s.Ke||a.Zd!=this.s.Zd)this.s=a,Oi(this.m,8)};function rl(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
H("ytvoicesearchloggingparams",F(this.wf,this))}
y(rl,Qg);n=rl.prototype;n.wf=function(){this.g.O.add(6);return Gj(this.g.o,15)};
n.zd=function(a){Ck(this.g.Y);this.u(Gj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.yd(a))};
n.yd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Gj(this.g.o);var d=this.g;c||(c=Gj(d.o));d=zg(c);return a+b+d};
n.ie=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=kl().uf();f.clientName="youtube";f.requestIdentifier="youtube";f.Kc="yt";f.Xc=d.REQUEST_LANGUAGE;f.Fe=d.REQUEST_DOMAIN;f.Lf=!1;f.Bc=0;f.he=!1;f.kc=!1;f.je=!1;f.Sc=!0;f.Wc=this.D;f.Ac=this.i;f.Pc=this.B;f.Oc=this.A;f.Zh=!0;f.nc=d.HAS_ON_SCREEN_KEYBOARD;f.sc=d.REQUEST_LANGUAGE;f.le="//www.gstatic.com/inputtools/images";f.me="youtube";f.Nc=!0;f.Mb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=d.SEARCHBOX_TAP_TARGET_EXPERIMENT;
this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.od="suggestqueries-clients6.youtube.com";d.PQ&&(f.ld=d.PQ);f.wd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.md=e.SUGGESTION_DISMISSED_LABEL;f.nd=e.SUGGESTION_DISMISS_LABEL;f.sd=!d.HIDE_REMOVE_LINK;f.ui=wg([0,33,35]);this.o?(f.Nb="search-container",f.Pb=24):this.m?(f.Nb="masthead-search",f.Pb=24):(f.Nb="masthead-search-terms",f.Pb=30);cc()||(f.Wd=!0);f.se=f.Nb;e=this.l.offsetHeight;f.ic=[e+(56-e)/2-40+4,0,0];e=[0];dc()&&ic()=="8.0"&&
(e[0]=-1);f.Dd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Jd=!0);if(e=d.SUGG_EXP_ID)f.ud=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=Rh(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);Vg(a.g);b=nl(b);a.A=b.lb;a=a.g;Vg(a);for(c=0;d=a.g[c++];)d.P(b);a.l=!0}else d=new jl(d),this.g=new ml(b,a,this,d),
this.g.install(f),c&&(ql(this.g,c),c.onclick=null)};function sl(){this.data=[];this.g=-1}
sl.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
sl.prototype.get=function(a){return!!this.data[a]};
function tl(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function ul(){this.blockSize=-1}
;function vl(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
I(vl,ul);vl.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function wl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
vl.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)wl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){wl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){wl(this,e);f=0;break}}this.l=f;this.m+=b}};
vl.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;wl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function xl(){}
xl.prototype.next=function(){return yl};
var yl={done:!0,value:void 0};xl.prototype.kb=function(){return this};function zl(a){if(a instanceof Al||a instanceof Bl||a instanceof Cl)return a;if(typeof a.next=="function")return new Al(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Al(function(){return a[Symbol.iterator]()});
if(typeof a.kb=="function")return new Al(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function Al(a){this.g=a}
Al.prototype.kb=function(){return new Bl(this.g())};
Al.prototype[Symbol.iterator]=function(){return new Cl(this.g())};
Al.prototype.l=function(){return new Cl(this.g())};
function Bl(a){this.g=a}
y(Bl,xl);Bl.prototype.next=function(){return this.g.next()};
Bl.prototype[Symbol.iterator]=function(){return new Cl(this.g)};
Bl.prototype.l=function(){return new Cl(this.g)};
function Cl(a){Al.call(this,function(){return a});
this.i=a}
y(Cl,Al);Cl.prototype.next=function(){return this.i.next()};function Dl(a){var b=[];El(new Fl,a,b);return b.join("")}
function Fl(){}
function El(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),El(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Gl(d,c),c.push(":"),El(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hl={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Il=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gl(a,b){b.push('"',a.replace(Il,function(c){var d=Hl[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Hl[c]=d);return d}),'"')}
;function Jl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function R(a){Rb.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
I(R,Rb);n=R.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Dc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&qb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.qe=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Kl(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.ab;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Dc(c)}}return e!=0}return!1};
function Kl(a,b,c){zd(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Dc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){R.Fa.Ba.call(this);this.clear();this.i.length=0};function Ll(a){this.g=a}
Ll.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Dl(b))};
Ll.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ll.prototype.remove=function(a){this.g.remove(a)};function Ml(a){this.g=a}
I(Ml,Ll);function Nl(a){this.data=a}
function Ol(a){return a===void 0||a instanceof Nl?a:new Nl(a)}
Ml.prototype.set=function(a,b){Ml.Fa.set.call(this,a,Ol(b))};
Ml.prototype.l=function(a){a=Ml.Fa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ml.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Pl(a){this.g=a}
I(Pl,Ml);Pl.prototype.set=function(a,b,c){if(b=Ol(b)){if(c){if(c<G()){Pl.prototype.remove.call(this,a);return}b.expiration=c}b.creation=G()}Pl.Fa.set.call(this,a,b)};
Pl.prototype.l=function(a){var b=Pl.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<G()||c&&c>G())Pl.prototype.remove.call(this,a);else return b}};function Ql(){}
;function Rl(){}
I(Rl,Ql);Rl.prototype[Symbol.iterator]=function(){return zl(this.kb(!0)).l()};
Rl.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Sl(a){this.g=a;this.l=null}
I(Sl,Rl);n=Sl.prototype;n.set=function(a,b){Tl(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Tl(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Tl(this);this.g.removeItem(a)};
n.kb=function(a){Tl(this);var b=0,c=this.g,d=new xl;d.next=function(){if(b>=c.length)return yl;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Tl(this);this.g.clear()};
n.key=function(a){Tl(this);return this.g.key(a)};
function Tl(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=Ul(a.g))||sd(Error("Storage mechanism: Storage unavailable"))}
function Ul(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function Vl(){var a=null;try{a=C.localStorage||null}catch(b){}Sl.call(this,a)}
I(Vl,Sl);function Wl(a,b){this.l=a;this.g=b+"::"}
I(Wl,Rl);Wl.prototype.set=function(a,b){this.l.set(this.g+a,b)};
Wl.prototype.get=function(a){return this.l.get(this.g+a)};
Wl.prototype.remove=function(a){this.l.remove(this.g+a)};
Wl.prototype.kb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new xl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var T={},Xl=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";T.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
T.td=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Yl={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Od:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Zl={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Od:function(a){return[].concat.apply([],a)}};
T.Kg=function(){Xl?(T.jb=Uint8Array,T.Ka=Uint16Array,T.Ne=Int32Array,T.assign(T,Yl)):(T.jb=Array,T.Ka=Array,T.Ne=Array,T.assign(T,Zl))};
T.Kg();var $l=!0;try{new Uint8Array(1)}catch(a){$l=!1}
function am(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new T.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var bm={};bm=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var cm={},dm,em=[],fm=0;fm<256;fm++){dm=fm;for(var gm=0;gm<8;gm++)dm=dm&1?3988292384^dm>>>1:dm>>>1;em[fm]=dm}cm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^em[(a^b[d])&255];return a^-1};var hm={};hm={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function im(a){for(var b=a.length;--b>=0;)a[b]=0}
var jm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],km=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],lm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],mm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],nm=Array(576);im(nm);var om=Array(60);im(om);var pm=Array(512);im(pm);var qm=Array(256);im(qm);var rm=Array(29);im(rm);var sm=Array(30);im(sm);function tm(a,b,c,d,e){this.Ee=a;this.pf=b;this.nf=c;this.ff=d;this.sg=e;this.Yd=a&&a.length}
var um,vm,wm;function xm(a,b){this.Hd=a;this.wb=0;this.Ua=b}
function ym(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function zm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,ym(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Am(a,b,c){zm(a,c[b*2],c[b*2+1])}
function Bm(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Cm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Bm(d[e]++,e))}
function Dm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.bb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Ra=a.zb=0;a.za=a.matches=0}
function Em(a){a.ha>8?ym(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Fm(a,b,c){Em(a);ym(a,c);ym(a,~c);T.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Gm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Hm(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&Gm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Gm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Im(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Jb+d*2]<<8|a.ba[a.Jb+d*2+1];var f=a.ba[a.Zc+d];d++;if(e===0)Am(a,f,b);else{var g=qm[f];Am(a,g+256+1,b);var h=jm[g];h!==0&&(f-=rm[g],zm(a,f,h));e--;g=e<256?pm[e]:pm[256+(e>>>7)];Am(a,g,c);h=km[g];h!==0&&(e-=sm[g],zm(a,e,h))}}while(d<a.za)}Am(a,256,b)}
function Jm(a,b){var c=b.Hd,d=b.Ua.Ee,e=b.Ua.Yd,f=b.Ua.ff,g,h=-1;a.Qa=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Qa<2;){var k=a.da[++a.Qa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ra--;e&&(a.zb-=d[k*2+1])}b.wb=h;for(g=a.Qa>>1;g>=1;g--)Hm(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],Hm(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Hm(a,c,1);while(a.Qa>=
2);a.da[--a.sb]=a.da[1];g=b.Hd;k=b.wb;d=b.Ua.Ee;e=b.Ua.Yd;f=b.Ua.pf;var l=b.Ua.nf,m=b.Ua.sg,p,r=0;for(p=0;p<=15;p++)a.Ma[p]=0;g[a.da[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>k)){a.Ma[p]++;var t=0;q>=l&&(t=f[q-l]);var u=g[q*2];a.Ra+=u*(p+t);e&&(a.zb+=u*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.Ma[p]===0;)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.Ma[p];q!==0;)d=a.da[--b],d>k||(g[d*2+1]!==p&&(a.Ra+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Cm(c,h,a.Ma)}
function Km(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ka[l*2]+=g:l!==0?(l!==e&&a.ka[l*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Lm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Am(a,l,a.ka);while(--g!==0)}else l!==0?(l!==e&&(Am(a,l,a.ka),g--),Am(a,16,a.ka),zm(a,g-3,2)):g<=10?(Am(a,17,a.ka),zm(a,g-3,3)):(Am(a,18,a.ka),zm(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Mm(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var Nm=!1;function Om(a,b,c){a.ba[a.Jb+a.za*2]=b>>>8&255;a.ba[a.Jb+a.za*2+1]=b&255;a.ba[a.Zc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(qm[c]+256+1)*2]++,a.bb[(b<256?pm[b]:pm[256+(b>>>7)])*2]++);return a.za===a.Rb-1}
;function Pm(a,b){a.msg=hm[b];return b}
function Qm(a){for(var b=a.length;--b>=0;)a[b]=0}
function Rm(a){var b=a.state,c=b.pending;c>a.U&&(c=a.U);c!==0&&(T.mb(a.output,b.ba,b.Sb,c,a.xb),a.xb+=c,b.Sb+=c,a.vd+=c,a.U-=c,b.pending-=c,b.pending===0&&(b.Sb=0))}
function Sm(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.S.Lc===2&&(a.S.Lc=Mm(a));Jm(a,a.qc);Jm(a,a.hc);Km(a,a.ta,a.qc.wb);Km(a,a.bb,a.hc.wb);Jm(a,a.Ed);for(e=18;e>=3&&a.ka[mm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+14;var f=a.Ra+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)zm(a,b?1:0,3),Fm(a,c,d);else if(a.strategy===4||g===f)zm(a,2+(b?1:0),3),Im(a,nm,om);else{zm(a,4+(b?1:0),3);c=a.qc.wb+1;d=a.hc.wb+1;e+=1;zm(a,c-257,5);zm(a,d-1,5);zm(a,e-4,4);for(f=0;f<e;f++)zm(a,a.ka[mm[f]*
2+1],3);Lm(a,a.ta,c-1);Lm(a,a.bb,d-1);Im(a,a.ta,a.bb)}Dm(a);b&&Em(a);a.va=a.C;Rm(a.S)}
function U(a,b){a.ba[a.pending++]=b}
function Tm(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function Um(a,b){var c=a.ge,d=a.C,e=a.wa,f=a.ke,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,k=a.Wa,l=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Vd&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.vb=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.G?e:a.G}
function Vm(a){var b=a.ma,c;do{var d=a.Le-a.G-a.C;if(a.C>=b+(b-262)){T.mb(a.window,a.window,b,b,0);a.vb-=b;a.C-=b;a.va-=b;var e=c=a.oc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.S.oa===0)break;e=a.S;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,T.mb(c,e.input,e.gb,g,f),e.state.wrap===1?e.L=bm(e.L,c,g,f):e.state.wrap===2&&(e.L=cm(e.L,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.T=a.window[d],
a.T=(a.T<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.T=(a.T<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Wa]=a.head[a.T],a.head[a.T]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.S.oa!==0)}
function Wm(a,b){for(var c;;){if(a.G<262){Vm(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=Um(a,c));if(a.V>=3)if(c=Om(a,a.C-a.vb,a.V-3),a.G-=a.V,a.V<=a.cd&&a.G>=3){a.V--;do a.C++,a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.T=a.window[a.C],a.T=(a.T<<a.Pa^a.window[a.C+1])&a.Oa;else c=Om(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(Sm(a,!1),a.S.U===0))return 1}a.la=a.C<2?a.C:2;return b===4?(Sm(a,!0),a.S.U===0?3:4):a.za&&(Sm(a,!1),a.S.U===0)?1:2}
function Xm(a,b){for(var c,d;;){if(a.G<262){Vm(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);a.wa=a.V;a.oe=a.vb;a.V=2;c!==0&&a.wa<a.cd&&a.C-c<=a.ma-262&&(a.V=Um(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.vb>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=Om(a,a.C-1-a.oe,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.T=(a.T<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Wa]=a.head[a.T],a.head[a.T]=a.C);
while(--a.wa!==0);a.eb=0;a.V=2;a.C++;if(c&&(Sm(a,!1),a.S.U===0))return 1}else if(a.eb){if((c=Om(a,0,a.window[a.C-1]))&&Sm(a,!1),a.C++,a.G--,a.S.U===0)return 1}else a.eb=1,a.C++,a.G--}a.eb&&(Om(a,0,a.window[a.C-1]),a.eb=0);a.la=a.C<2?a.C:2;return b===4?(Sm(a,!0),a.S.U===0?3:4):a.za&&(Sm(a,!1),a.S.U===0)?1:2}
function Ym(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){Vm(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=Om(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=Om(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(Sm(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(Sm(a,!0),a.S.U===0?3:4):
a.za&&(Sm(a,!1),a.S.U===0)?1:2}
function Zm(a,b){for(var c;;){if(a.G===0&&(Vm(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=Om(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(Sm(a,!1),a.S.U===0))return 1}a.la=0;return b===4?(Sm(a,!0),a.S.U===0?3:4):a.za&&(Sm(a,!1),a.S.U===0)?1:2}
function $m(a,b,c,d,e){this.yf=a;this.rg=b;this.ug=c;this.qg=d;this.tf=e}
var an;an=[new $m(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){Vm(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,Sm(a,!1),a.S.U===0)return 1;if(a.C-a.va>=a.ma-262&&(Sm(a,!1),a.S.U===0))return 1}a.la=0;if(b===4)return Sm(a,!0),a.S.U===0?3:4;a.C>a.va&&Sm(a,!1);return 1}),
new $m(4,4,8,4,Wm),new $m(4,5,16,8,Wm),new $m(4,6,32,32,Wm),new $m(4,4,16,16,Xm),new $m(8,16,32,32,Xm),new $m(8,16,128,128,Xm),new $m(8,32,128,256,Xm),new $m(32,128,258,1024,Xm),new $m(32,258,258,4096,Xm)];
function bn(){this.S=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Sb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.tb=-1;this.Wa=this.xd=this.ma=0;this.window=null;this.Le=0;this.head=this.Ja=null;this.ke=this.Vd=this.strategy=this.level=this.cd=this.ge=this.wa=this.G=this.vb=this.C=this.eb=this.oe=this.V=this.va=this.Pa=this.Oa=this.Uc=this.oc=this.T=0;this.ta=new T.Ka(1146);this.bb=new T.Ka(122);this.ka=new T.Ka(78);Qm(this.ta);Qm(this.bb);Qm(this.ka);this.Ed=this.hc=this.qc=
null;this.Ma=new T.Ka(16);this.da=new T.Ka(573);Qm(this.da);this.sb=this.Qa=0;this.depth=new T.Ka(573);Qm(this.depth);this.ha=this.pa=this.la=this.matches=this.zb=this.Ra=this.Jb=this.za=this.Rb=this.Zc=0}
function cn(a,b){if(!a||!a.state||b>5||b<0)return a?Pm(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return Pm(a,a.U===0?-5:-2);c.S=a;var d=c.tb;c.tb=b;if(c.status===42)if(c.wrap===2)a.L=0,U(c,31),U(c,139),U(c,8),c.K?(U(c,(c.K.text?1:0)+(c.K.Sa?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),U(c,c.K.time&255),U(c,c.K.time>>8&255),U(c,c.K.time>>16&255),U(c,c.K.time>>24&255),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,c.K.gi&255),c.K.extra&&c.K.extra.length&&
(U(c,c.K.extra.length&255),U(c,c.K.extra.length>>8&255)),c.K.Sa&&(a.L=cm(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(U(c,0),U(c,0),U(c,0),U(c,0),U(c,0),U(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),U(c,3),c.status=113);else{var e=8+(c.xd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;Tm(c,e+(31-e%31));c.C!==0&&(Tm(c,a.L>>>16),Tm(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Sa&&c.pending>e&&(a.L=cm(a.L,c.ba,c.pending-e,e)),Rm(a),e=c.pending,c.pending!==c.Aa));)U(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Sa&&c.pending>e&&(a.L=cm(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=cm(a.L,c.ba,c.pending-e,e)),Rm(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>
e&&(a.L=cm(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=cm(a.L,c.ba,c.pending-e,e)),Rm(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;U(c,f)}while(f!==0);c.K.Sa&&c.pending>e&&(a.L=cm(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Sa?(c.pending+2>c.Aa&&Rm(a),c.pending+2<=c.Aa&&(U(c,
a.L&255),U(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(Rm(a),a.U===0)return c.tb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return Pm(a,-5);if(c.status===666&&a.oa!==0)return Pm(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?Zm(c,b):c.strategy===3?Ym(c,b):an[c.level].tf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.U===0&&(c.tb=-1),0;if(d===2&&(b===1?(zm(c,2,3),Am(c,256,nm),c.ha===16?(ym(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(zm(c,0,3),Fm(c,0,0),b===3&&(Qm(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),Rm(a),a.U===0))return c.tb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(U(c,a.L&255),U(c,a.L>>8&255),U(c,a.L>>16&255),U(c,a.L>>24&255),U(c,a.ib&255),U(c,a.ib>>8&255),U(c,a.ib>>16&255),U(c,a.ib>>24&255)):(Tm(c,a.L>>>16),Tm(c,a.L&65535));Rm(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var dn={};dn=function(){this.input=null;this.ib=this.oa=this.gb=0;this.output=null;this.vd=this.U=this.xb=0;this.msg="";this.state=null;this.Lc=2;this.L=0};var en=Object.prototype.toString;
function fn(a){if(!(this instanceof fn))return new fn(a);a=this.options=T.assign({level:-1,method:8,chunkSize:16384,Xa:15,tg:8,strategy:0,Va:""},a||{});a.raw&&a.Xa>0?a.Xa=-a.Xa:a.zf&&a.Xa>0&&a.Xa<16&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.S=new dn;this.S.U=0;var b=this.S;var c=a.level,d=a.method,e=a.Xa,f=a.tg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=Pm(b,-2);else{e===8&&(e=9);var k=new bn;
b.state=k;k.S=b;k.wrap=h;k.K=null;k.xd=e;k.ma=1<<k.xd;k.Wa=k.ma-1;k.Uc=f+7;k.oc=1<<k.Uc;k.Oa=k.oc-1;k.Pa=~~((k.Uc+3-1)/3);k.window=new T.jb(k.ma*2);k.head=new T.Ka(k.oc);k.Ja=new T.Ka(k.ma);k.Rb=1<<f+6;k.Aa=k.Rb*4;k.ba=new T.jb(k.Aa);k.Jb=1*k.Rb;k.Zc=3*k.Rb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.vd=0;b.Lc=2;c=b.state;c.pending=0;c.Sb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.tb=0;if(!Nm){d=Array(16);for(f=g=0;f<28;f++)for(rm[f]=g,e=0;e<1<<jm[f];e++)qm[g++]=
f;qm[g-1]=f;for(f=g=0;f<16;f++)for(sm[f]=g,e=0;e<1<<km[f];e++)pm[g++]=f;for(g>>=7;f<30;f++)for(sm[f]=g<<7,e=0;e<1<<km[f]-7;e++)pm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)nm[e*2+1]=8,e++,d[8]++;for(;e<=255;)nm[e*2+1]=9,e++,d[9]++;for(;e<=279;)nm[e*2+1]=7,e++,d[7]++;for(;e<=287;)nm[e*2+1]=8,e++,d[8]++;Cm(nm,287,d);for(e=0;e<30;e++)om[e*2+1]=5,om[e*2]=Bm(e,5);um=new tm(nm,jm,257,286,15);vm=new tm(om,km,0,30,15);wm=new tm([],lm,0,19,7);Nm=!0}c.qc=new xm(c.ta,um);c.hc=new xm(c.bb,vm);c.Ed=
new xm(c.ka,wm);c.pa=0;c.ha=0;Dm(c);c=0}else c=Pm(b,-2);c===0&&(b=b.state,b.Le=2*b.ma,Qm(b.head),b.cd=an[b.level].rg,b.Vd=an[b.level].yf,b.ke=an[b.level].ug,b.ge=an[b.level].qg,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.eb=0,b.T=0);b=c}}else b=-2;if(b!==0)throw Error(hm[b]);a.header&&(b=this.S)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Kb){var l;typeof a.Kb==="string"?l=am(a.Kb):en.call(a.Kb)==="[object ArrayBuffer]"?l=new Uint8Array(a.Kb):l=a.Kb;a=this.S;f=l;g=f.length;if(a&&a.state)if(l=
a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.G)b=-2;else{b===1&&(a.L=bm(a.L,f,g,0));l.wrap=0;g>=l.ma&&(b===0&&(Qm(l.head),l.C=0,l.va=0,l.la=0),c=new T.jb(l.ma),T.mb(c,f,g-l.ma,l.ma,0),f=c,g=l.ma);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for(Vm(l);l.G>=3;){f=l.C;g=l.G-2;do l.T=(l.T<<l.Pa^l.window[f+3-1])&l.Oa,l.Ja[f&l.Wa]=l.head[l.T],l.head[l.T]=f,f++;while(--g);l.C=f;l.G=2;Vm(l)}l.C+=l.G;l.va=l.C;l.la=l.G;l.G=0;l.V=l.wa=2;l.eb=0;a.gb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(hm[b]);
this.Fh=!0}}
fn.prototype.push=function(a,b){var c=this.S,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=am(a):en.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{c.U===0&&(c.output=new T.jb(d),c.xb=0,c.U=d);a=cn(c,e);if(a!==1&&a!==0)return gn(this,a),this.ended=!0,!1;if(c.U===0||c.oa===0&&(e===4||e===2))if(this.options.Va==="string"){var f=T.td(c.output,c.xb);b=f;f=f.length;if(f<65537&&(b.subarray&&$l||!b.subarray))b=
String.fromCharCode.apply(null,T.td(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=T.td(c.output,c.xb),this.chunks.push(b)}while((c.oa>0||c.U===0)&&a!==1);if(e===4)return(c=this.S)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=Pm(c,-2):(c.state=null,a=d===113?Pm(c,-3):0)):a=-2,gn(this,a),this.ended=!0,a===0;e===2&&(gn(this,0),c.U=0);return!0};
function gn(a,b){b===0&&(a.result=a.options.Va==="string"?a.chunks.join(""):T.Od(a.chunks));a.chunks=[];a.err=b;a.msg=a.S.msg}
;function hn(a){this.name=a}
;var jn=new hn("rawColdConfigGroup");var kn=new hn("rawHotConfigGroup");function ln(a){this.R=K(a)}
y(ln,M);ln.prototype.g=function(a){L(this,5,a)};function mn(a){this.R=K(a)}
y(mn,M);function nn(a){this.R=K(a)}
y(nn,M);nn.hb=[2];function on(a){this.R=K(a)}
y(on,M);on.prototype.qb=function(){return wf(this,61)};
on.prototype.getPlayerType=function(){return wf(this,36)};
on.prototype.setHomeGroupInfo=function(a){return sf(this,nn,81,a)};
on.hb=[9,66,32,86,100,101];function pn(a){this.R=K(a)}
y(pn,M);var qn=[2,3,4,5,6];function rn(a){this.R=K(a)}
y(rn,M);rn.hb=[15,26,28];function sn(a){this.R=K(a)}
y(sn,M);sn.hb=[5];function tn(a){this.R=K(a)}
y(tn,M);function un(a){this.R=K(a)}
y(un,M);un.prototype.setSafetyMode=function(a){return zf(this,5,a)};
un.hb=[12];function vn(a){this.R=K(a)}
y(vn,M);vn.hb=[12];var wn={Eh:"WEB_DISPLAY_MODE_UNKNOWN",Ah:"WEB_DISPLAY_MODE_BROWSER",Ch:"WEB_DISPLAY_MODE_MINIMAL_UI",Dh:"WEB_DISPLAY_MODE_STANDALONE",Bh:"WEB_DISPLAY_MODE_FULLSCREEN"};function xn(a){this.R=K(a)}
y(xn,M);function yn(a){this.R=K(a)}
y(yn,M);yn.prototype.l=function(){var a=a===void 0?0:a;var b=hf(this,2);b=b==null?b:Je(b)?typeof b==="number"?Ne(b):Le(b):void 0;return b!=null?b:a};function zn(a){this.R=K(a)}
y(zn,M);function An(a){this.R=K(a,497)}
y(An,M);
var Bn=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function Cn(a){this.R=K(a)}
y(Cn,M);function Dn(a){this.R=K(a)}
y(Dn,M);Dn.prototype.getPlaylistId=function(){return xf(this,2)};
var yf=[1,2];function En(a){this.R=K(a)}
y(En,M);En.hb=[3];var Fn=C.window,Gn,Hn,In=(Fn==null?void 0:(Gn=Fn.yt)==null?void 0:Gn.config_)||(Fn==null?void 0:(Hn=Fn.ytcfg)==null?void 0:Hn.data_)||{};H("yt.config_",In);function Jn(){var a=arguments;a.length>1?In[a[0]]=a[1]:a.length===1&&Object.assign(In,a[0])}
function V(a,b){return a in In?In[a]:b}
;var Kn={};function Ln(){return Kn.clicktracking||(Kn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function W(a){a=Mn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Nn(a,b){a=Mn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Mn(a){return V("EXPERIMENT_FLAGS",{})[a]}
function On(){for(var a=[],b=V("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=V("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function Pn(a,b,c,d){Tf.set(""+a,b,{bd:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var Qn=[];function Rn(a){Qn.forEach(function(b){return b(a)})}
function Sn(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Tn(b)}}:a}
function Tn(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=V("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Jn("ERRORS",b));Rn(a)}
function Un(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=V("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Jn("ERRORS",f))}
;var Vn=/^[\w.]*$/,Wn={q:!0,search_query:!0};function Xn(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=Yn(f[0]||""),h=Yn(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?rb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(Xn);l.args=[{key:m,value:f[1],query:a,method:Zn===p?"unchanged":p}];Wn.hasOwnProperty(m)||Un(l)}}return c}
var Zn=String(Xn);function $n(a){var b=[];sb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];ob(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ao(a){a.charAt(0)==="?"&&(a=a.substring(1));return Xn(a,"&")}
function bo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ao(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Nb(a,e)+d}
function co(a){if(!b)var b=window.location.href;var c=a.match(Gb)[1]||null,d=Ib(a);c&&d?(a=a.match(Gb),b=b.match(Gb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ib(b)===d&&(Number(b.match(Gb)[4]||null)||null)===(Number(a.match(Gb)[4]||null)||null):!0;return a}
function Yn(a){return a&&a.match(Vn)?a:Fb(a)}
;var eo=Ud||Vd;function fo(a){var b=Yb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var go=Date.now().toString();function ho(a){var b=io;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Lf;e.flash="0";a:{try{var f=b.g.top.location.href}catch(eb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Cf:g;try{var h=g.history.length}catch(eb){h=0}e.u_his=h;var k;e.u_h=(k=Cf.screen)==null?void 0:k.height;var l;e.u_w=(l=Cf.screen)==null?void 0:l.width;var m;e.u_ah=(m=Cf.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=Cf.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=Cf.screen)==null?void 0:r.colorDepth}catch(eb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(eb){}try{var u=h.outerWidth;var z=h.outerHeight}catch(eb){}try{var E=h.innerWidth;var S=h.innerHeight}catch(eb){}try{var ja=h.screenLeft;var ca=h.screenTop}catch(eb){}try{E=h.innerWidth,S=h.innerHeight}catch(eb){}try{var fb=h.screen.availWidth;var Ei=h.screen.availTop}catch(eb){}q=[ja,ca,q,t,fb,Ei,u,z,E,S];t=b.g.top;try{var Ic=(t||window).document,
gb=Ic.compatMode=="CSS1Compat"?Ic.documentElement:Ic.body;var Ta=(new nd(gb.clientWidth,gb.clientHeight)).round()}catch(eb){Ta=new nd(-12245933,-12245933)}Ic=Ta;Ta={};var Ua=Ua===void 0?C:Ua;gb=new sl;"SVGElement"in Ua&&"createElementNS"in Ua.document&&gb.set(0);t=If();t["allow-top-navigation-by-user-activation"]&&gb.set(1);t["allow-popups-to-escape-sandbox"]&&gb.set(2);Ua.crypto&&Ua.crypto.subtle&&gb.set(3);"TextDecoder"in Ua&&"TextEncoder"in Ua&&gb.set(4);Ua=tl(gb);Ta.bc=Ua;Ta.bih=Ic.height;Ta.biw=
Ic.width;Ta.brdim=q.join();b=b.l;b=(Ta.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ta.wgl=!!Cf.WebGLRenderingContext,Ta);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var io=new function(){var a=window.document;this.g=window;this.l=a};
H("yt.ads_.signals_.getAdSignalsString",function(a){return $n(ho(a))});G();var jo="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ko(){if(!jo)return null;var a=jo();return"open"in a?a:null}
;function lo(a,b){typeof a==="function"&&(a=Sn(a));return window.setTimeout(a,b)}
;var mo="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(mo);var no={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},oo="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(mo)),po=!1;
function qo(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&Sn(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=ko();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;W("debug_forward_web_query_parameters")&&(a=ro(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=so(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){Un(p)}}l.send(d);return l}
function so(a,b){b=b===void 0?{}:b;var c=co(a),d=V("INNERTUBE_CLIENT_NAME"),e=W("web_ajax_ignore_global_headers_if_set"),f;for(f in no){var g=V(no[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=V("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(Ib(a)?!1:!0))){k=a;var l;if(l=W("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=Ib(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=Hb(k.match(Gb)[5]||null)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ib(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ib(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Ib(a)||(b["X-YouTube-Ad-Signals"]=$n(ho()));return b}
function to(a,b){b.method="POST";b.postParams||(b.postParams={});return uo(a,b)}
function uo(a,b){var c=b.format||"JSON";a=vo(a,b);var d=wo(a,b),e=!1,f=xo(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)m=yo(a,c,k,b.convertToSafeHtml);l&&(l=zo(c,k,m));m=m||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&
b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=lo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function vo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=bo(a,b||{},!0);return a}
function wo(a,b){var c=V("XSRF_FIELD_NAME"),d=V("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=V("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ib(a)&&!b.withCredentials&&Ib(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(W("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=ao(e),vb(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Mb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!po&&a&&b.method!=="POST"&&(po=!0,Tn(Error("AJAX request with postData should use POST")));return e}
function yo(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Un(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ao(a):null)e={},ob(a.getElementsByTagName("*"),function(g){e[g.tagName]=Bo(g)})}d&&Co(e);
return e}
function Co(a){if(Ja(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ab(a[b]);a[c]=d}else Co(a[b])}}
function zo(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Ao(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Bo(a){var b="";ob(a.childNodes,function(c){b+=c.nodeValue});
return b}
function ro(a){var b=window.location.search,c=Ib(a);W("debug_handle_relative_url_for_query_forward_killswitch")||!c&&co(a)&&(c=document.location.hostname);var d=Hb(a.match(Gb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ao(b),f={};ob(oo,function(g){e[g]&&(f[g]=e[g])});
return bo(a,f||{},!1)}
var xo=qo;function Do(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Eo(){}
;function Fo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;H("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Go={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ho={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Io={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Jo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ko(){var a=C.navigator;return a?a.connection:void 0}
;function Lo(a){var b=Da.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Lo,Error);function Mo(){try{return No(),!0}catch(a){return!1}}
function No(){if(V("DATASYNC_ID")!==void 0)return V("DATASYNC_ID");throw new Lo("Datasync ID not set","unknown");}
;function Oo(){}
function Po(a,b){return bg.Za(a,0,b)}
Oo.prototype.Ha=function(a,b){return this.Za(a,1,b)};
Oo.prototype.Gb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Qo=Nn("web_emulated_idle_callback_delay",300),Ro=1E3/60-3,So=[8,5,4,3,2,1,0];
function To(a){a=a===void 0?{}:a;Rb.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=w(So),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=Ro;this.u=0;this.O=this.xg.bind(this);this.ea=this.Ug.bind(this);this.X=this.Te.bind(this);this.Y=this.Vf.bind(this);this.ca=this.Cg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!W("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(To,Rb);n=To.prototype;n.Gb=function(a){var b=G();Uo(a);a=G()-b;this.s||(this.A-=a)};
n.Za=function(a,b,c){++this.I;if(b===10)return this.Gb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&Vo(this)!==this.u&&Wo(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function Xo(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};Wo(a)}
function Vo(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function Yo(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Uo(a){try{a()}catch(b){Yo(b)}}
function Zo(a){for(var b=w(So),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Vf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;$o(this,b);this.J=!1};
n.Ug=function(){$o(this)};
n.Te=function(){ap(this)};
n.Cg=function(a){this.D=!0;var b=Vo(this);b===4&&b!==this.u&&(Wo(this),this.start());$o(this,void 0,a);this.D=!1};
n.xg=function(){document.hidden||ap(this);this.g&&(Wo(this),this.start())};
function ap(a){Wo(a);a.s=!0;for(var b=G(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Uo(e)}bp(a);a.s=!1;Zo(a)&&a.start();b=G()-b;a.A-=b}
function bp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function $o(a,b,c){a.D&&a.u===4&&a.g||Wo(a);a.s=!0;b=G()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Yo(l)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Uo(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(G()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Uo(c)}while(c&&G()<b)}a.s=!1;bp(a);a.A=Ro;Zo(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=Vo(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Qo);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function Wo(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){Xo(this);Wo(this);this.F&&document.removeEventListener("visibilitychange",this.O);Rb.prototype.Ba.call(this)};var cp=D("yt.scheduler.instance.timerIdMap_")||{},dp=Nn("kevlar_tuner_scheduler_soft_state_timer_ms",800),ep=0,fp=0;function gp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.ab)a=new To(V("scheduler")||{}),H("ytglobal.schedulerInstanceInstance_",a);return a}
function hp(){ip();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),H("ytglobal.schedulerInstanceInstance_",null))}
function ip(){Xo(gp());for(var a in cp)cp.hasOwnProperty(a)&&delete cp[Number(a)]}
function jp(a,b,c){if(!c)return c=c===void 0,-gp().Za(a,b,c);var d=window.setTimeout(function(){var e=gp().Za(a,b);cp[d]=e},c);
return d}
function kp(a){gp().Gb(a)}
function lp(a){var b=gp();if(a<0)b.xa(-a);else{var c=cp[a];c?(b.xa(c),delete cp[a]):window.clearTimeout(a)}}
function mp(){np()}
function np(){window.clearTimeout(ep);gp().start()}
function op(){var a=gp();Wo(a);a.H=!0;window.clearTimeout(ep);ep=window.setTimeout(mp,dp)}
function pp(){window.clearTimeout(fp);fp=window.setTimeout(function(){qp(0)},dp)}
function qp(a){pp();var b=gp();b.o=a;b.start()}
function rp(a){pp();var b=gp();b.o>a&&(b.o=a,b.start())}
function sp(){window.clearTimeout(fp);var a=gp();a.o=0;a.start()}
;function tp(){Oo.apply(this,arguments)}
y(tp,Oo);function up(){tp.g||(tp.g=new tp);return tp.g}
tp.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):lo(a,c||0)};
tp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
tp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var bg=up();
W("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(H("yt.scheduler.instance.dispose",hp),H("yt.scheduler.instance.addJob",jp),H("yt.scheduler.instance.addImmediateJob",kp),H("yt.scheduler.instance.cancelJob",lp),H("yt.scheduler.instance.cancelAllJobs",ip),H("yt.scheduler.instance.start",np),H("yt.scheduler.instance.pause",op),H("yt.scheduler.instance.setPriorityThreshold",qp),H("yt.scheduler.instance.enablePriorityThreshold",rp),H("yt.scheduler.instance.clearPriorityThreshold",sp),H("yt.scheduler.initialized",
!0));function vp(a){var b=new Vl;this.g=(a=(b.l=Ul(b.g))?a?new Wl(b,a):b:null)?new Pl(a):null;this.l=document.domain||window.location.hostname}
vp.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Dl(b))}catch(f){return}else e=escape(b);Pn(a,e,c,this.l)};
vp.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Tf.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
vp.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Tf.remove(""+a,"/",b===void 0?"youtube.com":b)};var wp=function(){var a;return function(){a||(a=new vp("ytidb"));return a}}();
function xp(){var a;return(a=wp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var yp=[],zp=!1;function Ap(a){zp||(yp.push({type:"ERROR",payload:a}),yp.length>10&&yp.shift())}
function Bp(a,b){zp||(yp.push({type:"EVENT",eventType:a,payload:b}),yp.length>10&&yp.shift())}
;function Cp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Dp(a){return a.substr(0,a.indexOf(":"))||a}
;var Ep={},Fp=(Ep.AUTH_INVALID="No user identifier specified.",Ep.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ep.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ep.MISSING_INDEX="Index not created.",Ep.MISSING_OBJECT_STORES="Object stores not created.",Ep.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ep.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ep.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ep.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ep.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ep.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ep.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ep),Gp={},Hp=(Gp.AUTH_INVALID="ERROR",Gp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Gp.EXPLICIT_ABORT="IGNORED",Gp.IDB_NOT_SUPPORTED="ERROR",Gp.MISSING_INDEX=
"WARNING",Gp.MISSING_OBJECT_STORES="ERROR",Gp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Gp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Gp.QUOTA_EXCEEDED="WARNING",Gp.QUOTA_MAYBE_EXCEEDED="WARNING",Gp.UNKNOWN_ABORT="WARNING",Gp.INCOMPATIBLE_DB_VERSION="WARNING",Gp),Ip={},Jp=(Ip.AUTH_INVALID=!1,Ip.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ip.EXPLICIT_ABORT=!1,Ip.IDB_NOT_SUPPORTED=!1,Ip.MISSING_INDEX=!1,Ip.MISSING_OBJECT_STORES=!1,Ip.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ip.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ip.QUOTA_EXCEEDED=!1,Ip.QUOTA_MAYBE_EXCEEDED=!0,Ip.UNKNOWN_ABORT=!0,Ip.INCOMPATIBLE_DB_VERSION=!1,Ip);function X(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Fp[a]:c;d=d===void 0?Hp[a]:d;e=e===void 0?Jp[a]:e;Lo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Lo);function Kp(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Fp.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Kp.prototype)}
y(Kp,X);function Lp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Lp.prototype)}
y(Lp,Error);var Mp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Np(a,b,c,d){b=Dp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new X("QUOTA_EXCEEDED",a);if(Wd&&e.name==="UnknownError")return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Lp)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Mp.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",fi:e.name})];e.level="WARNING";return e}
function Op(a,b,c){var d=xp();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Pp(a){if(!a)throw Error();throw a;}
function Qp(a){return a}
function Rp(a){this.g=a}
function Sp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Sp.resolve=function(a){return new Sp(new Rp(function(b,c){a instanceof Sp?a.then(b,c):b(a)}))};
Sp.reject=function(a){return new Sp(new Rp(function(b,c){c(a)}))};
Sp.prototype.then=function(a,b){var c=this,d=a!=null?a:Qp,e=b!=null?b:Pp;return new Sp(new Rp(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){Tp(c,c,d,f,g)}),c.l.push(function(){Up(c,c,e,f,g)})):c.state.status==="FULFILLED"?Tp(c,c,d,f,g):c.state.status==="REJECTED"&&Up(c,c,e,f,g)}))};
function Vp(a,b){a.then(void 0,b)}
function Tp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Sp?Wp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Up(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Sp?Wp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Wp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Sp?Wp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Xp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Yp(a){return new Promise(function(b,c){Xp(a,b,c)})}
function Zp(a){return new Sp(new Rp(function(b,c){Xp(a,b,c)}))}
;function $p(a,b){return new Sp(new Rp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var aq=window,Y=aq.ytcsi&&aq.ytcsi.now?aq.ytcsi.now:aq.performance&&aq.performance.timing&&aq.performance.now&&aq.performance.timing.navigationStart?function(){return aq.performance.timing.navigationStart+aq.performance.now()}:function(){return(new Date).getTime()};function bq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=bq.prototype;n.add=function(a,b,c){return cq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return cq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function dq(a,b,c){a=a.g.createObjectStore(b,c);return new eq(a)}
n.delete=function(a,b){return cq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return cq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function fq(a,b,c){return cq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return Zp(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function cq(a,b,c,d){var e,f,g,h,k,l,m,p,r,q,t,u;return B(function(z){switch(z.g){case 1:var E={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?E.mode=c:Object.assign(E,c);e=E;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){z.M(4);break}g++;k=Math.round(Y());ua(z,5);l=a.g.transaction(b,e.mode);E=new gq(l);E=hq(E,d);return A(z,E,7);case 7:return m=z.l,p=Math.round(Y()),iq(a,k,p,g,void 0,b.join(),e),z.return(m);case 5:r=va(z);q=Math.round(Y());t=Np(r,a.g.name,b.join(),
a.g.version);if((u=t instanceof X&&!t.g)||g>=f)iq(a,k,q,g,t,b.join(),e),h=t;z.M(2);break;case 4:return z.return(Promise.reject(h))}})}
function iq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Bp("QUOTA_EXCEEDED",{dbName:Dp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=Math.pow(2,31)&&(c=0),Bp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),jq(a,!1,d,f,b,g.tag),Ap(e)):jq(a,!0,d,f,b,g.tag)}
function jq(a,b,c,d,e,f){Bp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function eq(a){this.g=a}
n=eq.prototype;n.add=function(a,b){return Zp(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return Zp(this.g.clear()).then(function(){})};
function kq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function lq(a,b){return mq(a,{query:b},function(c){return c.delete().then(function(){return nq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?lq(this,a):Zp(this.g.delete(a))};
n.get=function(a){return Zp(this.g.get(a))};
n.index=function(a){try{return new oq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Lp(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function mq(a,b,c){a=a.g.openCursor(b.query,b.direction);return pq(a).then(function(d){return $p(d,c)})}
function gq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function hq(a,b){var c=new Promise(function(d,e){try{Vp(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
gq.prototype.abort=function(){this.g.abort();this.l=!0;throw new X("EXPLICIT_ABORT");};
gq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new eq(a),this.i.set(a,b));return b};
function oq(a){this.g=a}
oq.prototype.delete=function(a){return qq(this,{query:a},function(b){return b.delete().then(function(){return nq(b)})})};
oq.prototype.get=function(a){return Zp(this.g.get(a))};
oq.prototype.keyPath=function(){return this.g.keyPath};
oq.prototype.unique=function(){return this.g.unique};
function qq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return pq(a).then(function(d){return $p(d,c)})}
function rq(a,b){this.request=a;this.cursor=b}
function pq(a){return Zp(a).then(function(b){return b?new rq(a,b):null})}
function nq(a){a.cursor.continue(void 0);return pq(a.request)}
rq.prototype.delete=function(){return Zp(this.cursor.delete()).then(function(){})};
rq.prototype.update=function(a){return Zp(this.cursor.update(a))};function sq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new bq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.We,k=c.Xe,l=c.Sg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Bp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Dp(a)});var t=f(),u=new gq(g.transaction);m&&
m(t,function(z){return q.oldVersion<z&&q.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){Bp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Dp(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function tq(a,b,c){c=c===void 0?{}:c;return sq(a,b,c)}
function uq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return ua(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.We)&&c.addEventListener("blocked",function(){e()}),A(g,Yp(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=va(g),Np(f,a,"",-1);})}
;function vq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
vq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return tq(a,b,c)};
vq.prototype.delete=function(a){a=a===void 0?{}:a;return uq(this.name,a)};
function wq(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function xq(a,b){if(!b)throw Op("openWithToken",Dp(a.name));return yq(a)}
function yq(a){function b(){var f,g,h,k,l,m,p,r,q,t;return B(function(u){switch(u.g){case 1:return g=(f=Error().stack)!=null?f:"",ua(u,2),A(u,a.l(a.name,a.options.version,d),4);case 4:for(var z=h=u.l,E=a.options,S=[],ja=w(Object.keys(E.yb)),ca=ja.next();!ca.done;ca=ja.next()){ca=ca.value;var fb=E.yb[ca],Ei=fb.Eg===void 0?Number.MAX_VALUE:fb.Eg;!(z.g.version>=fb.Hb)||z.g.version>=Ei||z.g.objectStoreNames.contains(ca)||S.push(ca)}k=S;if(k.length===0){u.M(5);break}l=Object.keys(a.options.yb);m=h.objectStoreNames();
if(a.o<Nn("ytidb_reopen_db_retries",0))return a.o++,h.close(),Ap(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.m<Nn("ytidb_remake_db_retries",1))){u.M(6);break}a.m++;return A(u,a.delete(),7);case 7:return Ap(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Kp(m,l);case 5:return u.return(h);case 2:p=va(u);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){u.M(8);break}return A(u,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=u.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,wq(a,q);return u.return(r);case 8:throw c(),p instanceof Error&&!W("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Np(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw wq(a);if(a.g)return a.g;var d={Xe:function(f){f.close()},
closed:c,Sg:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var zq=new vq("YtIdbMeta",{yb:{databases:{Hb:1}},upgrade:function(a,b){b(1)&&dq(a,"databases",{keyPath:"actualName"})}});
function Aq(a,b){var c;return B(function(d){if(d.g==1)return A(d,xq(zq,b),2);c=d.l;return d.return(cq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Zp(f.g.put(a,void 0)).then(function(){})})}))})}
function Bq(a,b){var c;return B(function(d){if(d.g==1)return a?A(d,xq(zq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Cq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],A(e,xq(zq,b),2)):e.g!=3?(d=e.l,A(e,cq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return mq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return nq(g)})}),3)):e.return(c)})}
function Dq(a){return Cq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Eq,Fq=new function(){}(new function(){});
function Gq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=xp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=eo)f=/WebKit\/([0-9]+)/.exec(Yb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Yb()),f=!(f&&parseInt(f[1],10)>=602));if(f||oc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ua(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Aq(d,Fq),4);case 4:return A(e,Bq("yt-idb-test-do-not-use",Fq),5);case 5:return e.return(!0);case 2:return va(e),e.return(!1)}})}
function Hq(){if(Eq!==void 0)return Eq;zp=!0;return Eq=Gq().then(function(a){zp=!1;var b;if((b=wp())!=null&&b.g){var c;b={hasSucceededOnce:((c=xp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=wp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Iq(){return D("ytglobal.idbToken_")||void 0}
function Jq(){var a=Iq();return a?Promise.resolve(a):Hq().then(function(b){(b=b?Fq:void 0)&&H("ytglobal.idbToken_",b);return b})}
;new Jl;function Kq(a){if(!Mo())throw a=new X("AUTH_INVALID",{dbName:a}),Ap(a),a;var b=No();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Lq(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",A(m,Jq(),2);case 2:g=m.l;if(!g)throw h=Op("openDbImpl",a,b),W("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ap(h),h;Cp(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Kq(a);ua(m,3);return A(m,Aq(k,g),5);case 5:return A(m,tq(k.actualName,b,d),6);case 6:return m.return(m.l);case 3:return l=va(m),ua(m,7),A(m,Bq(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:va(m);case 8:throw l;}})}
function Mq(a,b,c){c=c===void 0?{}:c;return Lq(a,b,!1,c)}
function Nq(a,b,c){c=c===void 0?{}:c;return Lq(a,b,!0,c)}
function Oq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return A(e,Jq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Cp(a);d=Kq(a);return A(e,uq(d.actualName,b),3)}return A(e,Bq(d.actualName,c),0)})}
function Pq(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?A(e,uq(d.actualName,b),2):A(e,Bq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Qq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return A(d,Jq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Cp("LogsDatabaseV2");return A(d,Dq(b),3)}c=d.l;return A(d,Pq(c,a,b),0)})}
function Rq(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return A(d,Jq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Cp(a);return A(d,uq(a,b),3)}return A(d,Bq(a,c),0)})}
;function Sq(a,b){vq.call(this,a,b);this.options=b;Cp(a)}
y(Sq,vq);function Tq(a,b){var c;return function(){c||(c=new Sq(a,b));return c}}
Sq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Nq:Mq)(a,b,Object.assign({},c))};
Sq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Rq:Oq)(this.name,a)};
function Uq(a,b){return Tq(a,b)}
;var Vq={},Wq=Uq("ytGcfConfig",{yb:(Vq.coldConfigStore={Hb:1},Vq.hotConfigStore={Hb:1},Vq),shared:!1,upgrade:function(a,b){b(1)&&(kq(dq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),kq(dq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Xq(a){return xq(Wq(),a)}
function Yq(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,Xq(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,fq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function Zq(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,Xq(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,fq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function $q(a){var b,c;return B(function(d){return d.g==1?A(d,Xq(a),2):d.g!=3?(b=d.l,c=void 0,A(d,cq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return qq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function ar(a){var b,c;return B(function(d){return d.g==1?A(d,Xq(a),2):d.g!=3?(b=d.l,c=void 0,A(d,cq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return qq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function br(){Rb.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],H("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(br,Rb);br.prototype.Ba=function(){for(var a=w(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;Rb.prototype.Ba.call(this)};function cr(){this.l=0;this.i=new br}
function dr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!W("start_client_gcf")){g.M(0);break}c&&(a.m=c,H("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Iq();if(!d){g.M(3);break}if(c){g.M(4);break}return A(g,ar(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return A(g,Yq(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function er(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!W("start_client_gcf"))return h.M(0);a.coldHashData=b;H("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Iq())?c?h.M(4):A(h,$q(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return A(h,Zq(c,b,g,d),0)})}
cr.prototype.g=function(a){this.hotHashData=a;H("yt.gcf.config.hotHashData",this.hotHashData||null)};function fr(){return"INNERTUBE_API_KEY"in In&&"INNERTUBE_API_VERSION"in In}
function gr(){return{Yf:V("INNERTUBE_API_KEY"),Zf:V("INNERTUBE_API_VERSION"),Vc:V("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),be:V("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ag:V("INNERTUBE_CONTEXT_CLIENT_NAME",1),ce:V("INNERTUBE_CONTEXT_CLIENT_VERSION"),ee:V("INNERTUBE_CONTEXT_HL"),de:V("INNERTUBE_CONTEXT_GL"),bg:V("INNERTUBE_HOST_OVERRIDE")||"",dg:!!V("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),cg:!!V("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:V("SERIALIZED_CLIENT_CONFIG_DATA")}}
function hr(a){var b={client:{hl:a.ee,gl:a.de,clientName:a.be,clientVersion:a.ce,configInfo:a.Vc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=V("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=On();c.length>0&&(b.request={internalExperimentFlags:c});ir(a,void 0,b);jr(void 0,b);kr(void 0,b);lr(a,void 0,b);mr(void 0,b);W("start_client_gcf")&&nr(void 0,b);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&
(b.user={onBehalfOfUser:V("DELEGATED_SESSION_ID")});!W("fill_delegate_context_in_gel_killswitch")&&(a=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(ao(V("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?e.deviceMake=h:g==="cmodel"?e.deviceModel=h:g==="cbr"?e.browserName=h:g==="cbrver"?e.browserVersion=
h:g==="cos"?e.osName=h:g==="cosver"?e.osVersion=h:g==="cplatform"&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function ir(a,b,c){a=a.be;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=rf(b,mn,96)||new mn;var d=Do();d=Object.keys(wn).indexOf(d);d=d===-1?null:d;d!==null&&zf(c,3,d);sf(b,mn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Do())}
function jr(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=rf(a,sn,7)||new sn,L(b,4,c),sf(a,sn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function kr(a,b){var c;if(W("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?lf(a,95,Ke(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function lr(a,b,c){if(a.appInstallData)if(b){var d;c=(d=rf(b,ln,62))!=null?d:new ln;L(c,6,a.appInstallData);sf(b,ln,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function mr(a,b){a:{var c=Ko();if(c){var d=Go[c.type||"unknown"]||"CONN_UNKNOWN";c=Go[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?zf(a,61,Ho[d]):b&&(b.client.connectionType=d));W("web_log_effective_connection_type")&&(d=Ko(),d=d!=null&&d.effectiveType?Jo.hasOwnProperty(d.effectiveType)?Jo[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?zf(a,94,Io[d]):
b&&(b.client.effectiveConnectionType=d)))}
function or(a,b,c){c=c===void 0?{}:c;var d={};V("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":V("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||V("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Hh||V("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Gh;else{Eo.g||(Eo.g=new Eo);a={};c=[];"SESSION_ID"in In&&c.push({key:"u",value:V("SESSION_ID")});if(c=Xf(c))a.Authorization=c,c=void 0,c===void 0&&(c=Number(V("SESSION_INDEX",0)),c=isNaN(c)?0:c),
W("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in In||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in In&&(a["X-Goog-PageId"]=V("DELEGATED_SESSION_ID"));W("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function nr(a,b){if(!cr.g){var c=new cr;cr.g=c}c=cr.g;var d=Y()-c.l;if(c.l!==0&&d<Nn("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=rf(a,ln,62))!=null?g:new ln;g=L(b,1,d);L(g,3,c).g(e);sf(a,ln,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var pr=typeof TextEncoder!=="undefined"?new TextEncoder:null,qr=pr?function(a){return pr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var rr=D("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Dc;R.prototype.publish=R.prototype.qe;R.prototype.clear=R.prototype.clear;H("ytPubsub2Pubsub2Instance",rr);H("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});H("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});H("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});H("ytPubsub2Pubsub2SkipSubKey",null);function sr(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={xi:a,wi:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var tr=void 0,ur=void 0;function vr(){if(!ur){var a=V("WORKER_SERIALIZATION_URL");ur=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?Za(a):null:null}return ur||void 0}
function wr(){var a=vr();tr||a===void 0||(tr=new Worker(Xa(a),void 0));return tr}
;var xr=Nn("max_body_size_to_compress",5E5),yr=Nn("min_body_size_to_compress",500),zr=!0,Ar=0,Br=0,Cr=Nn("compression_performance_threshold_lr",250),Dr=Nn("slow_compressions_before_abandon_count",4),Er=!1,Fr=new Map,Gr=1,Hr=!0;function Ir(){if(typeof Worker==="function"&&vr()&&!Er){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Fr.get(c.key);d&&(Jr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Fr.delete(c.key))}},b=wr();
b&&(b.addEventListener("message",a),b.onerror=function(){Fr.clear()},Er=!0)}}
function Kr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(zr)try{try{var g=(new Blob(b.split(""))).size}catch(m){Un(m),g=null}if(g!=null&&(g>xr||g<yr))d(a,c);else{if(W("gzip_gel_with_worker")&&(W("initial_gzip_use_main_thread")&&!Hr||!W("initial_gzip_use_main_thread"))){Er||Ir();var h=wr();if(h&&!e){Fr.set(Gr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Gr});Gr++;return}}var k=qr(b);b=(b=void 0,{});b.zf=!0;var l=new fn(b);
l.push(k,!0);if(l.err)throw l.msg||hm[l.err];Jr(l.result,f,a,c,d)}}catch(m){Un(m),d(a,c)}else d(a,c)}
function Jr(a,b,c,d,e){Hr=!1;var f=Y();b.ticks.gelc=f;Br++;W("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Cr&&(Ar++,W("abandon_compression_after_N_slow_zips")?Br===Nn("compression_disable_point")&&Ar>Dr&&(zr=!1):zr=!1);W("gel_compression_csi_killswitch")||!W("log_gel_compression_latency")&&!W("log_gel_compression_latency_lr")||sr("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Lr(a){a=Object.assign({},a);delete a.Authorization;var b=Xf();if(b){var c=new vl;c.update(V("INNERTUBE_API_KEY"));c.update(b);a.hash=Zd(c.digest(),3)}return a}
;var Mr;function Nr(){Mr||(Mr=new vp("yt.innertube"));return Mr}
function Or(a,b,c,d){if(d)return null;d=Nr().get("nextId",!0)||1;var e=Nr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Lr(c),requestTime:Math.round(Y())};Nr().set("nextId",d+1,86400,!0);Nr().set("requests",e,86400,!0);return d}
function Pr(a){var b=Nr().get("requests",!0)||{};delete b[a];Nr().set("requests",b,86400,!0)}
function Qr(a){var b=Nr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Lr(or(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Rr(a,d.method,e,{}));delete b[c]}}Nr().set("requests",b,86400,!0)}}
;function Sr(a){this.Zb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.He=(b=a.He)!=null?b:100;var c;this.ye=(c=a.ye)!=null?c:1;var d;this.ue=(d=a.ue)!=null?d:2592E6;var e;this.re=(e=a.re)!=null?e:12E4;var f;this.xe=(f=a.xe)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.jc=!!a.jc;var h;this.ec=(h=a.ec)!=null?h:.1;var k;this.vc=(k=a.vc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Lb&&(this.Lb=a.Lb);a.Zb&&(this.Zb=a.Zb);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.jd=a.jd;this.fd=a.fd;Tr(this)&&(!this.aa||this.aa("networkless_logging"))&&Ur(this)}
function Ur(a){Tr(a)&&!a.Lb&&(a.g=!0,a.jc&&Math.random()<=a.ec&&a.fa.Ze(a.Z),Vr(a),a.ia.ya()&&a.Vb(),a.ia.ra(a.jd,a.Vb.bind(a)),a.ia.ra(a.fd,a.Fd.bind(a)))}
n=Sr.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(Tr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&Wr(c,d)}).catch(function(e){Wr(c,d);
Xr(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(Tr(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.g==1)return A(k,d.fa.set(e,d.Z).catch(function(l){Xr(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
Xr(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(Tr(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.ob(d.id,c.Z):e=!0;c.ia.fb&&c.aa&&c.aa("vss_network_hint")&&c.ia.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){Xr(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Vb=function(){var a=this;if(!Tr(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return A(c,a.fa.Sd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?A(c,Wr(a,b),3):(a.Fd(),c.return());a.l&&(a.l=0,a.Vb());c.g=0})},this.He))};
n.Fd=function(){this.Ea.xa(this.l);this.l=0};
function Wr(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Tr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return A(d,a.fa.pg(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(Yr(a,b,a.ue)){d.M(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return A(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=Zr(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return A(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Zr(a,b){if(!Tr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=$r(f);(h=as(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.vc)){m.M(2);break}if(!a.ia.zc){m.M(3);break}return A(m,a.ia.zc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===
void 0){m.M(6);break}return A(m,a.fa.pd(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.vc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.M(8);break}return b.sendCount<a.ye?A(m,a.fa.pd(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Vb()},a.xe);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):A(h,a.fa.ob(b.id,a.Z),2);a.ia.fb&&a.aa&&a.aa("vss_network_hint")&&a.ia.fb(!0);d(e,f);h.g=0})};
return b}
function Yr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Vr(a){if(!Tr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Sd("QUEUED",a.Z).then(function(b){b&&!Yr(a,b,a.re)?a.Ea.Ha(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):A(c,a.fa.pd(b.id,a.Z),2);Vr(a);c.g=0})}):a.ia.ya()&&a.Vb()})}
function Xr(a,b){a.Me&&!a.ia.ya()?a.Me(b):a.handleError(b)}
function Tr(a){return!!a.Z||a.Zb}
function $r(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function as(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var bs;
function cs(){if(bs)return bs();var a={};bs=Uq("LogsDatabaseV2",{yb:(a.LogsRequestsStore={Hb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&dq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),kq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return bs()}
;function ds(a){return xq(cs(),a)}
function es(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,ds(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:V("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,fq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();fs(c);return g.return(f)})}
function gs(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,ds(b),2);if(m.g!=3)return d=m.l,e=V("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k="prev",W("use_fifo_for_networkless")&&(k="next"),l=void 0,A(m,cq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return qq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(r){r.cursor.value&&
(l=r.cursor.value,a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=Y();fs(c);return m.return(l)})}
function hs(a,b){var c;return B(function(d){if(d.g==1)return A(d,ds(b),2);c=d.l;return d.return(cq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Zp(f.g.put(g,void 0)).then(function(){return g})})}))})}
function is(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return A(f,ds(b),2);e=f.l;return f.return(cq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Zp(h.g.put(k,void 0)).then(function(){return k})):Sp.resolve(void 0)})}))})}
function js(a,b){var c;return B(function(d){if(d.g==1)return A(d,ds(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function ks(a){var b,c;return B(function(d){if(d.g==1)return A(d,ds(a),2);b=d.l;c=Y()-2592E6;return A(d,cq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return mq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return nq(f)})})}),0)})}
function ls(){B(function(a){return A(a,Qq(),0)})}
function fs(a){W("nwl_csi_killswitch")||sr("networkless_performance",a,{sampleRate:1})}
;var ms={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500};var ns={},os=Uq("ServiceWorkerLogsDatabase",{yb:(ns.SWHealthLog={Hb:1},ns),shared:!0,upgrade:function(a,b){b(1)&&kq(dq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ps(a){return xq(os(),a)}
function qs(a){var b,c;B(function(d){if(d.g==1)return A(d,ps(a),2);b=d.l;c=Y()-2592E6;return A(d,cq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return mq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return nq(f)})})}),0)})}
function rs(a){var b;return B(function(c){if(c.g==1)return A(c,ps(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var ss={},ts=0;function us(a){var b=new Image,c=""+ts++;ss[c]=b;b.onload=b.onerror=function(){delete ss[c]};
b.src=a}
;var vs;function ws(){vs||(vs=new vp("yt.offline"));return vs}
function xs(a){if(W("offline_error_handling")){var b=ws().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ws().set("errors",b,2592E3,!0)}}
;function ys(){this.g=new Map;this.l=!1}
function zs(){if(!ys.g){var a=D("yt.networkRequestMonitor.instance")||new ys;H("yt.networkRequestMonitor.instance",a);ys.g=a}return ys.g}
ys.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
ys.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
ys.prototype.removeParams=function(a){return a.split("?")[0]};
ys.prototype.removeParams=ys.prototype.removeParams;ys.prototype.isEndpointCFR=ys.prototype.isEndpointCFR;ys.prototype.requestComplete=ys.prototype.requestComplete;ys.getInstance=zs;function Z(){Pc.call(this);var a=this;this.i=!1;this.l=ag();this.l.ra("networkstatus-online",function(){if(a.i&&W("offline_error_handling")){var b=ws().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Lo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Tn(d)}ws().set("errors",{},2592E3,!0)}}})}
y(Z,Pc);function As(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;H("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.fb=function(a){this.l.l=a};
n.xf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.jf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.zc=function(a){a=Zf(this.l,a);a.then(function(b){W("use_cfr_monitor")&&zs().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.zc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.jf;Z.prototype.getWindowStatus=Z.prototype.xf;Z.prototype.networkStatusHint=Z.prototype.fb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=As;function Bs(a){a=a===void 0?{}:a;Pc.call(this);var b=this;this.l=this.s=0;this.i=As();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.xc?(this.xc=a.xc,c("networkstatus-online",function(){Cs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Cs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Qc(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Qc(b,"publicytnetworkstatus-offline")})))}
y(Bs,Pc);Bs.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Bs.prototype.fb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Bs.prototype.zc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return W("skip_network_check_if_cfr")&&zs().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Cs(a,b){a.xc?a.l?(bg.xa(a.s),a.s=bg.Ha(function(){a.o!==b&&(Qc(a,b),a.o=b,a.l=Y())},a.xc-(Y()-a.l))):(Qc(a,b),a.o=b,a.l=Y()):Qc(a,b)}
;var Ds;function Es(){var a=Sr.call;Ds||(Ds=new Bs({ci:!0,Ph:!0}));a.call(Sr,this,{fa:{Ze:ks,ob:js,Sd:gs,pg:hs,pd:is,set:es},ia:Ds,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;Un(new Lo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else Tn(b)},
rb:Un,sendFn:Fs,now:Y,Me:xs,Ea:up(),jd:"publicytnetworkstatus-online",fd:"publicytnetworkstatus-offline",jc:!0,ec:.1,vc:Nn("potential_esf_error_limit",10),aa:W,Lb:!(Mo()&&Ib(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Jl;W("networkless_immediately_drop_all_requests")&&ls();Rq("LogsDatabaseV2")}
y(Es,Sr);function Gs(){var a=D("yt.networklessRequestController.instance");a||(a=new Es,H("yt.networklessRequestController.instance",a),W("networkless_logging")&&Jq().then(function(b){a.Z=b;Ur(a);a.i.resolve();a.jc&&Math.random()<=a.ec&&a.Z&&qs(a.Z);W("networkless_immediately_drop_sw_health_store")&&Hs(a)}));
return a}
Es.prototype.writeThenSend=function(a,b){b||(b={});b=Is(a,b);Mo()||(this.g=!1);Sr.prototype.writeThenSend.call(this,a,b)};
Es.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Is(a,b);Mo()||(this.g=!1);Sr.prototype.sendThenWrite.call(this,a,b,c)};
Es.prototype.sendAndWrite=function(a,b){b||(b={});b=Is(a,b);Mo()||(this.g=!1);Sr.prototype.sendAndWrite.call(this,a,b)};
Es.prototype.awaitInitialization=function(){return this.i.promise};
function Hs(a){var b;B(function(c){if(!a.Z)throw b=Op("clearSWHealthLogsDb"),b;return c.return(rs(a.Z).catch(function(d){a.handleError(d)}))})}
function Fs(a,b,c,d){d=d===void 0?!1:d;b=W("web_fp_via_jspb")?Object.assign({},b):b;W("use_cfr_monitor")&&Js(a,b);if(W("use_request_time_ms_header"))b.headers&&co(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)qo(a,void 0,"POST",f,void 0);else if(V("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)qo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Oa({url:a});if(k.i&&k.l||k.m){var l=Hb(a.match(Gb)[5]||null),m;if(!(m=!l||!l.endsWith("/aclk"))){var p=a.search(Pb),r=Ob(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Fb(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var u=!m;break b}}catch(E){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(E){}z=!1}c=z?!0:!1}else c=!1;c||us(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Kr(a,b.postBody,b,uo,d)):Kr(a,JSON.stringify(b.postParams),b,to,d):uo(a,b)}
function Is(a,b){W("use_event_time_ms_header")&&co(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Js(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){zs().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){zs().requestComplete(a,!0);d(e,f)}}
;var Ks=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};H("ytNetworklessLoggingInitializationOptions",Ks);function Ls(a){var b=this;this.config_=null;a?this.config_=a:fr()&&(this.config_=gr());Po(function(){Qr(b)},5E3)}
Ls.prototype.isReady=function(){!this.config_&&fr()&&(this.config_=gr());return!!this.config_};
function Rr(a,b,c,d){function e(t){t=t===void 0?!1:t;var u;if(d.retry&&h!="www.youtube-nocookie.com"&&(t||W("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(u=Or(b,c,l,k)),u)){var z=g.onSuccess,E=g.onFetchSuccess;g.onSuccess=function(ca,fb){Pr(u);z(ca,fb)};
c.onFetchSuccess=function(ca,fb){Pr(u);E(ca,fb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Gs().writeThenSend(q,g):Gs().sendAndWrite(q,g);
else if(d.compress){var S=!d.networklessOptions.writeThenSend;if(g.postBody){var ja=g.postBody;typeof ja!=="string"&&(ja=JSON.stringify(g.postBody));Kr(q,ja,g,uo,S)}else Kr(q,JSON.stringify(g.postParams),g,to,S)}else W("web_all_payloads_via_jspb")?uo(q,g):to(q,g)}catch(ca){if(ca.name==="InvalidAccessError")u&&(Pr(u),u=0),Un(Error("An extension is blocking network request."));else throw ca;}u&&Po(function(){Qr(a)},5E3)}
!V("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&Un(new Lo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Lo("innertube xhrclient not ready",b,c,d);Tn(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.bg)&&(h=f);var k=a.config_.dg||!1,l=or(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.Zf+"/"+b,p={alt:"json"},r=a.config_.cg&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.Yf);var q=bo(""+h+m,p||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Ks.isNwlInitialized?Hq().then(function(t){e(t)}):e(!1)}
;var Ms=0;H("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Ms});H("ytEventsEventsListeners",C.ytEventsEventsListeners||{});H("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});function Ns(){var a=D("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Os=C.ytPubsubPubsubInstance||new R,Ps=C.ytPubsubPubsubSubscribedKeys||{},Qs=C.ytPubsubPubsubTopicToKeys||{},Rs=C.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Dc;R.prototype.publish=R.prototype.qe;R.prototype.clear=R.prototype.clear;H("ytPubsubPubsubInstance",Os);H("ytPubsubPubsubTopicToKeys",Qs);H("ytPubsubPubsubIsSynchronous",Rs);H("ytPubsubPubsubSubscribedKeys",Ps);var Ss=Symbol("injectionDeps");function Ts(){this.key=cr}
function Us(){this.l=new Map;this.g=new Map}
Us.prototype.resolve=function(a){return a instanceof Ts?Vs(this,a.key,[],!0):Vs(this,a,[])};
function Vs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Xg!==void 0)var e=d.Xg;else if(d.Wg)e=d[Ss]?Ws(a,d[Ss],c):[],e=d.Wg.apply(d,x(e));else if(d.Vg){e=d.Vg;var f=e[Ss]?Ws(a,e[Ss],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.si||a.g.set(b,e);return e}
function Ws(a,b,c){return b?b.map(function(d){return d instanceof Ts?Vs(a,d.key,c,!0):Vs(a,d,c)}):[]}
;var Xs;function Ys(){Xs||(Xs=new Us);return Xs}
;var Zs=window;function $s(){var a,b;return"h5vcc"in Zs&&((a=Zs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Zs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Zs&&Zs.performance.mark&&Zs.performance.measure?2:0}
function at(a){switch($s()){case 1:Zs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Zs.performance.mark(a+"-start");break;case 0:break;default:Cb()}}
function bt(a){switch($s()){case 1:Zs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Zs.performance.mark(c);Zs.performance.measure(a,b,c);break;case 0:break;default:Cb()}}
;var ct=W("web_enable_lifecycle_monitoring")&&$s()!==0,dt=W("web_enable_lifecycle_monitoring");function et(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?up():d;this.m=c;this.l=d;this.i=new Jl;this.g=a;for(a={cb:0};a.cb<this.g.length;a={uc:void 0,cb:a.cb},a.cb++)a.uc=this.g[a.cb],c=function(e){return function(){e.uc.Yc();b.g[e.cb].wc=!0;b.g.every(function(f){return f.wc===!0})&&b.i.resolve()}}(a),d=this.l.Za(c,ft(this,a.uc)),this.g[a.cb]=Object.assign({},a.uc,{Yc:c,
jobId:d})}
function gt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return ft(a,a.g[e])-ft(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.wc||(a.l.xa(c.jobId),a.l.Za(c.Yc,10))}
et.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.wc||this.l.xa(b.jobId),b.wc=!0;this.i.resolve()};
function ft(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function ht(a){this.state=a;this.i=[];this.o=void 0;this.u={};ct&&at(this.state)}
ht.prototype.install=function(a){this.i.push(a);return this};
function it(a){ct&&bt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Va==="none"}):d.from===a.state&&d.Va==="none"});
if(b){a.l&&(gt(a.l),a.l=void 0);dt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";ct&&at(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(jt(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function jt(a,b){var c=b.filter(function(e){return kt(a,e)===10}),d=b.filter(function(e){return kt(a,e)!==10});
return a.u.oi?function(){var e=Da.apply(0,arguments);return B(function(f){if(f.g==1)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Da.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
ht.prototype.F=function(a){for(var b=Da.apply(1,arguments),c=up(),d=w(a),e=d.next(),f={};!e.done;f={Qb:void 0},e=d.next())f.Qb=e.value,c.Gb(function(g){return function(){lt(g.Qb.name);g.Qb.Jc.apply(g.Qb,x(b));mt(g.Qb.name)}}(f))};
ht.prototype.D=function(a){var b=Da.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=up(),d=w(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.ub=e.value;f.Xb=void 0;g=function(k){return function(){lt(k.ub.name);var l=k.ub.Jc.apply(k.ub,x(b));typeof(l==null?void 0:l.then)==="function"?k.Xb=l.then(function(){mt(k.ub.name)}):mt(k.ub.name)}}(f);
c.Gb(g);return f.Xb?A(h,f.Xb,3):h.M(3)}f={ub:void 0,Xb:void 0};e=d.next();return h.M(2)})};
ht.prototype.s=function(a){var b=Da.apply(1,arguments),c=this,d=a.map(function(e){return{Yc:function(){lt(e.name);e.Jc.apply(e,x(b));mt(e.name)},
priority:kt(c,e)}});
d.length&&(this.l=new et(d))};
function kt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function lt(a){ct&&a&&at(a)}
function mt(a){ct&&a&&bt(a)}
ea.Object.defineProperties(ht.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function nt(a){ht.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Va:"application_navigating",action:this.A},{from:"application_navigating",Va:"none",action:this.B},{from:"application_navigating",Va:"application_navigating",action:function(){}},
{from:"none",Va:"none",action:function(){}}]}
var ot;y(nt,ht);nt.prototype.A=function(a,b){var c=this;this.g=Po(function(){c.m==="application_navigating"&&it(c)},5E3);
a(b==null?void 0:b.event)};
nt.prototype.B=function(a,b){this.g&&(bg.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function pt(){ot||(ot=new nt);return ot}
;var qt=[];H("yt.logging.transport.getScrapedGelPayloads",function(){return qt});function rt(){this.store={};this.g={}}
rt.prototype.storePayload=function(a,b){a=st(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
rt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=tt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
rt.prototype.extractMatchingEntries=function(a){a=tt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
rt.prototype.getSequenceCount=function(a){a=tt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function tt(a,b){var c=st(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&st(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(ut(b.auth,g[0])){var h=b.isJspb;ut(h===void 0?"undefined":h?"true":"false",g[1])&&ut(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),ut(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function ut(a,b){return a===void 0||a==="undefined"?!0:a===b}
rt.prototype.getSequenceCount=rt.prototype.getSequenceCount;rt.prototype.extractMatchingEntries=rt.prototype.extractMatchingEntries;rt.prototype.smartExtractMatchingEntries=rt.prototype.smartExtractMatchingEntries;rt.prototype.storePayload=rt.prototype.storePayload;function st(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var vt=Nn("initial_gel_batch_timeout",2E3),wt=Nn("gel_queue_timeout_max_ms",6E4),xt=Math.pow(2,16)-1,zt=Nn("gel_min_batch_size",5),At=void 0;function Bt(){this.m=this.g=this.l=0;this.i=!1}
var Ct=new Bt,Dt=new Bt,Et=new Bt,Ft=new Bt,Gt,Ht=!0,It=1,Jt=new Map,Kt=C.ytLoggingTransportTokensToCttTargetIds_||{};H("ytLoggingTransportTokensToCttTargetIds_",Kt);var Lt=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};H("ytLoggingTransportTokensToJspbCttTargetIds_",Lt);var Mt={};function Nt(){var a=D("yt.logging.ims");a||(a=new rt,H("yt.logging.ims",a));return a}
function Ot(a,b){if(a.endpoint==="log_event"){Pt(a);var c=Qt(a),d=Rt(a.payload)||"",e=St(d),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=Tt(e.tier);if(f===400){Ut(a,b);return}}Mt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Nt().storePayload(e,a.payload);Vt(b,c,!1,e,Wt(d))}}
function Xt(a,b,c){if(b.endpoint==="log_event"){Pt(void 0,b);var d=Qt(b,!0),e=St(a),f=200;if(e){if(e.enabled===!1&&!W("web_payload_policy_disabled_killswitch"))return;f=Tt(e.tier);if(f===400){Yt(a,b,c);return}}Mt[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Nt().storePayload(e,Bf(b.payload));Vt(c,d,!0,e,Wt(a))}}
function Vt(a,b,c,d,e){function f(){Zt(W("flush_only_full_queue")?b:void 0,c,d.tier)}
c=c===void 0?!1:c;e=e===void 0?!1:e;a&&(At=new a);a=Nn("tvhtml5_logging_max_batch_ads_fork")||Nn("web_logging_max_batch")||100;var g=Y(),h=$t(c,d.tier),k=h.m;e&&(h.i=!0);e=0;d&&(e=Nt().getSequenceCount(d));e>=1E3?f():e>=a?Gt||(Gt=au(function(){f();Gt=void 0},0)):g-k>=10&&(bu(c,d.tier),h.m=g)}
function Ut(a,b){if(a.endpoint==="log_event"){Pt(a);var c=Qt(a),d=new Map;d.set(c,[a.payload]);var e=Rt(a.payload)||"";b&&(At=new b);return new Cd(function(f,g){At&&At.isReady()?cu(d,At,f,g,{bypassNetworkless:!0},!0,Wt(e)):f()})}}
function Yt(a,b,c){if(b.endpoint==="log_event"){Pt(void 0,b);var d=Qt(b,!0),e=new Map;e.set(d,[Bf(b.payload)]);c&&(At=new c);return new Cd(function(f){At&&At.isReady()?du(e,At,f,{bypassNetworkless:!0},!0,Wt(a)):f()})}}
function Qt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b===void 0?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Dn;c.videoId?of(d,1,yf,Oe(c.videoId)):c.playlistId&&of(d,2,yf,Oe(c.playlistId));Lt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Kt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Zt(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Cd(function(e,f){var g=$t(b,c),h=g.i;g.i=!1;eu(g.l);eu(g.g);g.g=0;At&&At.isReady()?c===void 0&&W("enable_web_tiered_gel")?fu(e,f,d,a,b,300,h):fu(e,f,d,a,b,c,h):(bu(b,c),e())})}
function fu(a,b,c,d,e,f,g){var h=At;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=W("enable_web_tiered_gel")?Nt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Nt().extractMatchingEntries(p),k.set(d,b),du(k,h,a,c,!1,g)):(k=W("enable_web_tiered_gel")?Nt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Nt().extractMatchingEntries(p),l.set(d,k),cu(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Mt));for(l=b.next();!l.done;l=b.next())l=l.value,f=W("enable_web_tiered_gel")?Nt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Nt().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),f.length>0&&k.set(l,f),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Mt[l];du(k,h,a,c,!1,g)}else{k=w(Object.keys(Mt));for(m=k.next();!m.done;m=k.next())m=m.value,p=W("enable_web_tiered_gel")?Nt().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Nt().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&l.set(m,p),(W("web_fp_via_jspb_and_json")&&c.writeThenSend||!W("web_fp_via_jspb_and_json"))&&delete Mt[m];cu(l,h,a,b,c,!1,g)}}
function bu(a,b){function c(){Zt(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=$t(a,b),e=d===Ft||d===Et?5E3:wt;W("web_gel_timeout_cap")&&!d.g&&(e=au(function(){c()},e),d.g=e);
eu(d.l);e=V("LOGGING_BATCH_TIMEOUT",Nn("web_gel_debounce_ms",1E4));W("shorten_initial_gel_batch_timeout")&&Ht&&(e=vt);e=au(function(){Nn("gel_min_batch_size")>0?Nt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=zt&&c():c()},e);
d.l=e}
function cu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),k=a.size,l=gu(g);a=w(a);var m=a.next();for(g={};!m.done;g={ed:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,hd:void 0,gd:void 0},m=a.next()){var p=w(m.value);m=p.next().value;p=p.next().value;g.batchRequest=tb({context:hr(b.config_||gr())});if(!Ia(p)&&!W("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Kt[m])&&hu(g.batchRequest,m,p);delete Kt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";iu(g.batchRequest,h,g.dangerousLogToVisitorSession);ju(e);g.hd=function(r){W("start_client_gcf")&&bg.Ha(function(){return B(function(q){return A(q,ku(r),0)})});
k--;k||c()};
g.ed=0;g.gd=function(r){return function(){r.ed++;if(e.bypassNetworkless&&r.ed===1)try{Rr(b,l,r.batchRequest,lu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.hd,r.gd,f)),Ht=!1}catch(q){Tn(q),d()}k--;k||c()}}(g);
try{Rr(b,l,g.batchRequest,lu(e,g.dangerousLogToVisitorSession,g.hd,g.gd,f)),Ht=!1}catch(r){Tn(r),d()}}}
function du(a,b,c,d,e,f){d=d===void 0?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,p=a.get(m);l=new En;var r=b.config_||gr(),q=new vn,t=new on;L(t,1,r.ee);L(t,2,r.de);zf(t,16,r.ag);L(t,17,r.ce);if(r.Vc){var u=r.Vc,z=new ln;u.coldConfigData&&L(z,1,u.coldConfigData);u.appInstallData&&L(z,6,u.appInstallData);u.coldHashData&&L(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);sf(t,ln,62,z)}if((u=
C.devicePixelRatio)&&u!=1){if(u!=null&&typeof u!=="number")throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);lf(t,65,u)}u=V("EXPERIMENTS_TOKEN","");u!==""&&L(t,54,u);u=On();if(u.length>0){z=new rn;for(var E=0;E<u.length;E++){var S=new pn;L(S,1,u[E].key);of(S,2,qn,Oe(u[E].value));vf(z,15,pn,S)}sf(q,rn,5,z)}ir(r,t);jr(q);kr(t);lr(r,t);mr(t);W("start_client_gcf")&&nr(t);V("DELEGATED_SESSION_ID")&&!W("pageid_as_header_web")&&(r=new un,L(r,3,V("DELEGATED_SESSION_ID")));
!W("fill_delegate_context_in_gel_killswitch")&&(u=V("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=rf(q,un,3)||new un,r=q,u=L(z,18,u),sf(r,un,3,u));r=t;u=w(Object.entries(ao(V("DEVICE",""))));for(z=u.next();!z.done;z=u.next())E=w(z.value),z=E.next().value,E=E.next().value,z==="cbrand"?L(r,12,E):z==="cmodel"?L(r,13,E):z==="cbr"?L(r,87,E):z==="cbrver"?L(r,88,E):z==="cos"?L(r,18,E):z==="cosver"?L(r,19,E):z==="cplatform"&&zf(r,42,Fo(E));sf(q,on,1,t);sf(l,vn,1,q);if(t=Lt[m])a:{if(xf(t,1))q=1;
else if(t.getPlaylistId())q=2;else break a;sf(l,Dn,4,t);t=rf(l,vn,1)||new vn;r=rf(t,un,3)||new un;u=new tn;L(u,2,m);zf(u,1,q);vf(r,12,tn,u);sf(t,un,3,r)}delete Lt[m];m=m==="visitorOnlyApprovedKey";mu()||lf(l,2,Ke(g));!m&&(q=V("EVENT_ID"))&&(t=nu(),r=new Cn,L(r,1,q),lf(r,2,Ke(t)),sf(l,Cn,5,r));ju(d);if(W("jspb_serialize_with_worker")&&(q=wr())&&d.writeThenSend){Jt.set(It,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});q.postMessage({op:"gelBatchToSerialize",
batchRequest:Bf(l),clientEvents:p,key:It});It++;break}if(p){q=[];for(t=0;t<p.length;t++)try{q.push(new An(p[t]))}catch(ca){Tn(new Lo("Transport failed to deserialize "+String(p[t])))}p=q}else p=[];p=w(p);for(q=p.next();!q.done;q=p.next())vf(l,3,An,q.value);p={startTime:Y(),ticks:{},infos:{}};try{Af=!0;var ja=JSON.stringify(Bf(l),Ye)}finally{Af=!1}p.ticks.geljspc=Y();W("log_jspb_serialize_latency")&&sr("gel_jspb_serialize",p,{sampleRate:.1});ou(ja,b,c,d,e,f,m,h)}}
function ou(a,b,c,d,e,f,g,h){d=d===void 0?{}:d;h=h===void 0?{value:0}:h;f=gu(f);d=lu(d,g,function(k){W("start_client_gcf")&&bg.Ha(function(){return B(function(l){return A(l,ku(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Rr(b,f,"",d);Ht=!1}
function ju(a){W("always_send_and_write")&&(a.writeThenSend=!1)}
function lu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Jh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:W("compress_gel")||W("compress_gel_lr")};mu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function iu(a,b,c){mu()||(a.requestTimeMs=String(b));W("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=V("EVENT_ID"))&&(c=nu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function nu(){var a=V("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*xt/2));a++;a>xt&&(a=1);Jn("BATCH_CLIENT_COUNTER",a);return a}
function hu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Pt(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Mn("il_payload_scraping");if((c!==void 0?String(c):"")==="enable_il_payload_scraping")qt=[],H("yt.logging.transport.enableScrapingForTest",!0),H("yt.logging.transport.scrapedPayloadsForTesting",qt),H("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),H("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
H("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&d.length>=1)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push(((f=a)==null?void 0:f.payload)[d[e]])}H("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function mu(){return W("use_request_time_ms_header")||W("lr_use_request_time_ms_header")}
function au(a,b){return W("transport_use_scheduler")===!1?lo(a,b):W("logging_avoid_blocking_during_navigation")||W("lr_logging_avoid_blocking_during_navigation")?Po(function(){if(pt().m==="none")a();else{var c={};pt().install((c.none={Jc:a},c))}},b):Po(a,b)}
function eu(a){W("transport_use_scheduler")?bg.xa(a):window.clearTimeout(a)}
function ku(a){var b,c,d,e,f,g,h,k,l,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[kn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[jn.name]:void 0;h=r;l=(k=d)==null?void 0:k.coldHashData;return(m=Ys().resolve(new Ts))?g?e?A(p,dr(m,g,e),2):A(p,dr(m,g),2):p.M(2):p.return()}return l?h?A(p,er(m,l,h),0):A(p,er(m,l),0):p.M(0)})}
function $t(a,b){b=b===void 0?200:b;return a?b===300?Ft:Dt:b===300?Et:Ct}
function St(a){if(W("enable_web_tiered_gel")){a=ms[a||""];var b,c;if(Ys().resolve(new Ts)==null)var d=void 0;else{var e=(d=D("yt.gcf.config.hotConfigGroup"))!=null?d:V("RAW_HOT_CONFIG_GROUP");d=e==null?void 0:(b=e.loggingHotConfig)==null?void 0:(c=b.eventLoggingConfig)==null?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Rt(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ms[b])return b}
function Tt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Wt(a){return a==="gelDebuggingEvent"}
function gu(a){return(a===void 0?0:a)&&W("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var pu=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",pu);function qu(a){pu[a]=a in pu?pu[a]+1:0;return pu[a]}
;var ru=[];var su=C.ytLoggingGelSequenceIdObj_||{};H("ytLoggingGelSequenceIdObj_",su);var tu=C.ytLoggingDocDocumentNonce_;
if(!tu){var uu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var vu=Array(16),wu=new Uint8Array(16);window.crypto.getRandomValues(wu);for(var xu=0;xu<vu.length;xu++)vu[xu]=wu[xu];uu=vu;break a}catch(a){}for(var yu=Array(16),zu=0;zu<16;zu++){for(var Au=Date.now(),Bu=0;Bu<Au%23;Bu++)yu[zu]=Math.random();yu[zu]=Math.floor(Math.random()*256)}if(go)for(var Cu=1,Du=0;Du<go.length;Du++)yu[Cu%16]=yu[Cu%16]^yu[(Cu-1)%16]/4^go.charCodeAt(Du),Cu++;uu=yu}for(var Eu=uu,Fu=[],Gu=0;Gu<Eu.length;Gu++)Fu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Eu[Gu]&
63));tu=Fu.join("");H("ytLoggingDocDocumentNonce_",tu)}var Hu=tu;function Iu(a){return V("client-screen-nonce-store",{})[a===void 0?0:a]}
function Ju(a,b){b=b===void 0?0:b;var c=V("client-screen-nonce-store");c||(c={},Jn("client-screen-nonce-store",c));c[b]=a}
function Ku(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
H("yt_logging_screen.getRootVeType",function(a){return V(Ku(a===void 0?0:a))});
function Lu(){var a=V("csn-to-ctt-auth-info");a||(a={},Jn("csn-to-ctt-auth-info",a));return a}
function Mu(a){a=Iu(a===void 0?0:a);if(!a&&!V("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
H("yt_logging_screen.getCurrentCsn",Mu);function Nu(a,b,c){var d=Lu();(c=Mu(c))&&delete d[c];b&&(d[a]=b)}
H("yt_logging_screen.getCttAuthInfo",function(a){return Lu()[a]});
H("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Iu(c)||b!==V(Ku(c)))if(Nu(a,d,c),Ju(a,c),Jn(Ku(c),b),b=function(){setTimeout(function(){if(a)if(W("web_time_via_jspb")){var e=new xn;L(e,1,Hu);L(e,2,a);var f=W("jspb_sparse_encoded_pivot")?new An([{}]):new An;e!=null?Pe(e,xn):e=void 0;of(f,111,Bn,e);var g=void 0;g=g===void 0?{}:g;e=!1;V("ytLoggingEventsDefaultDisabled",!1)&&(e=!0);e=e?null:Ls;g=g===void 0?{}:g;var h=Math.round(g.timestamp||Y());lf(f,1,Ke(h<Number.MAX_SAFE_INTEGER?
h:0));h=new zn;if(g.lact)lf(h,1,Ke(isFinite(g.lact)?g.lact:-1));else if(g.timestamp)lf(h,1,Ke(-1));else{var k=Ns();lf(h,1,Ke(isFinite(k)?k:-1))}if(g.sequenceGroup&&!W("web_gel_sequence_info_killswitch")){k=g.sequenceGroup;var l=qu(k),m=new yn;lf(m,2,Ke(l));L(m,1,k);sf(h,yn,3,m);g.endOfSequence&&delete su[g.sequenceGroup]}sf(f,zn,33,h);(g.sendIsolatedPayload?Yt:Xt)("foregroundHeartbeatScreenAssociated",{endpoint:"log_event",payload:f,cttAuthInfo:g.cttAuthInfo,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession},
e)}else h={clientDocumentNonce:Hu,clientScreenNonce:a},e=e===void 0?{}:e,f=Ls,V("ytLoggingEventsDefaultDisabled",!1)&&Ls===Ls&&(f=null),W("web_all_payloads_via_jspb")?(e.timestamp||(e.lact=Ns(),e.timestamp=Y()),ru.push({hi:"foregroundHeartbeatScreenAssociated",payload:h,options:e})):(e=e===void 0?{}:e,g={},k=Math.round(e.timestamp||Y()),g.eventTimeMs=k<Number.MAX_SAFE_INTEGER?k:0,g.foregroundHeartbeatScreenAssociated=h,h=Ns(),g.context={lastActivityMs:String(e.timestamp||!isFinite(h)?-1:h)},e.sequenceGroup&&
!W("web_gel_sequence_info_killswitch")&&(h=g.context,k=e.sequenceGroup,k={index:qu(k),groupKey:k},h.sequence=k,e.endOfSequence&&delete pu[e.sequenceGroup]),(e.sendIsolatedPayload?Ut:Ot)({endpoint:"log_event",payload:g,cttAuthInfo:e.cttAuthInfo,dangerousLogToVisitorSession:e.dangerousLogToVisitorSession},f))},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Ou="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Pu(a,b){var c=c===void 0?!0:c;var d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Ib(window.location.href);e&&d.push(e);e=Ib(a);if(nb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),mb(d,a),a=d.href)if(a=Jb(a),a=Kb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Mu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Qu(a,b,f)}else Qu(a,b)}
function Qu(a,b,c){a=Ru(a);b=b?Mb(b):"";c=c||5;(Vf()||(Ud||Vd)&&fo("applewebkit")&&!fo("version")&&(!fo("safari")||fo("gsa/"))||qc&&fo("version/")||!V("EOM_VISITOR_DATA"))&&Pn(a,b,c)}
function Ru(a){var b=a;a=w(Ou);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Pb),f=0,g=[];(c=Ob(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Qb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new R;function Su(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(V("INNERTUBE_CLIENT_NAME")==="WEB"||V("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function Tu(a,b){b=b?{feature:b}:{};var c=V("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Ln()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,Pu(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Nb(a,d);V("LOGGED_IN",!0)&&Su()&&(d=V("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Ib(window.location.href))&&d.push(b),b=Ib(a),nb(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Jb(a),(d=Kb(d))?
(d=Ru(d),d=(d=Tf.get(""+d,void 0)||null)?ao(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,Su()?(c||(c=V("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&Pu(a,d));e=a+e;var g=g===void 0?db:g;a:if(g=g===void 0?db:g,e instanceof $a)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof bb&&d.kg(e)){g=new $a(e);break a}g=void 0}f=f.location;g=lb(g||ab);g!==void 0&&(f.href=g)}}
;H("searchbox.yt.install",function(a,b,c,d,e,f,g){ah||(ah=new rl);ah.install(a,b,c,d,e,f,g)});
H("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=bg.Ha;if(a&&e){var f=V("SBOX_SETTINGS"),g=V("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Tu,d))&&e(a,100)}});}).call(this);
