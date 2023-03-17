(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();var Pe=(e=>(e[e.WEBGL_LEGACY=0]="WEBGL_LEGACY",e[e.WEBGL=1]="WEBGL",e[e.WEBGL2=2]="WEBGL2",e))(Pe||{}),Ro=(e=>(e[e.UNKNOWN=0]="UNKNOWN",e[e.WEBGL=1]="WEBGL",e[e.CANVAS=2]="CANVAS",e))(Ro||{}),ar=(e=>(e[e.COLOR=16384]="COLOR",e[e.DEPTH=256]="DEPTH",e[e.STENCIL=1024]="STENCIL",e))(ar||{}),H=(e=>(e[e.NORMAL=0]="NORMAL",e[e.ADD=1]="ADD",e[e.MULTIPLY=2]="MULTIPLY",e[e.SCREEN=3]="SCREEN",e[e.OVERLAY=4]="OVERLAY",e[e.DARKEN=5]="DARKEN",e[e.LIGHTEN=6]="LIGHTEN",e[e.COLOR_DODGE=7]="COLOR_DODGE",e[e.COLOR_BURN=8]="COLOR_BURN",e[e.HARD_LIGHT=9]="HARD_LIGHT",e[e.SOFT_LIGHT=10]="SOFT_LIGHT",e[e.DIFFERENCE=11]="DIFFERENCE",e[e.EXCLUSION=12]="EXCLUSION",e[e.HUE=13]="HUE",e[e.SATURATION=14]="SATURATION",e[e.COLOR=15]="COLOR",e[e.LUMINOSITY=16]="LUMINOSITY",e[e.NORMAL_NPM=17]="NORMAL_NPM",e[e.ADD_NPM=18]="ADD_NPM",e[e.SCREEN_NPM=19]="SCREEN_NPM",e[e.NONE=20]="NONE",e[e.SRC_OVER=0]="SRC_OVER",e[e.SRC_IN=21]="SRC_IN",e[e.SRC_OUT=22]="SRC_OUT",e[e.SRC_ATOP=23]="SRC_ATOP",e[e.DST_OVER=24]="DST_OVER",e[e.DST_IN=25]="DST_IN",e[e.DST_OUT=26]="DST_OUT",e[e.DST_ATOP=27]="DST_ATOP",e[e.ERASE=26]="ERASE",e[e.SUBTRACT=28]="SUBTRACT",e[e.XOR=29]="XOR",e))(H||{}),Yt=(e=>(e[e.POINTS=0]="POINTS",e[e.LINES=1]="LINES",e[e.LINE_LOOP=2]="LINE_LOOP",e[e.LINE_STRIP=3]="LINE_STRIP",e[e.TRIANGLES=4]="TRIANGLES",e[e.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",e[e.TRIANGLE_FAN=6]="TRIANGLE_FAN",e))(Yt||{}),I=(e=>(e[e.RGBA=6408]="RGBA",e[e.RGB=6407]="RGB",e[e.RG=33319]="RG",e[e.RED=6403]="RED",e[e.RGBA_INTEGER=36249]="RGBA_INTEGER",e[e.RGB_INTEGER=36248]="RGB_INTEGER",e[e.RG_INTEGER=33320]="RG_INTEGER",e[e.RED_INTEGER=36244]="RED_INTEGER",e[e.ALPHA=6406]="ALPHA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",e[e.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",e[e.DEPTH_STENCIL=34041]="DEPTH_STENCIL",e))(I||{}),$e=(e=>(e[e.TEXTURE_2D=3553]="TEXTURE_2D",e[e.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",e[e.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",e[e.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",e[e.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",e[e.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",e[e.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",e))($e||{}),G=(e=>(e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",e[e.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",e[e.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",e[e.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",e[e.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",e[e.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",e[e.BYTE=5120]="BYTE",e[e.SHORT=5122]="SHORT",e[e.INT=5124]="INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",e[e.HALF_FLOAT=36193]="HALF_FLOAT",e))(G||{}),lr=(e=>(e[e.FLOAT=0]="FLOAT",e[e.INT=1]="INT",e[e.UINT=2]="UINT",e))(lr||{}),qt=(e=>(e[e.NEAREST=0]="NEAREST",e[e.LINEAR=1]="LINEAR",e))(qt||{}),ce=(e=>(e[e.CLAMP=33071]="CLAMP",e[e.REPEAT=10497]="REPEAT",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e))(ce||{}),Qt=(e=>(e[e.OFF=0]="OFF",e[e.POW2=1]="POW2",e[e.ON=2]="ON",e[e.ON_MANUAL=3]="ON_MANUAL",e))(Qt||{}),zt=(e=>(e[e.NPM=0]="NPM",e[e.UNPACK=1]="UNPACK",e[e.PMA=2]="PMA",e[e.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",e[e.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",e[e.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA",e))(zt||{}),jt=(e=>(e[e.NO=0]="NO",e[e.YES=1]="YES",e[e.AUTO=2]="AUTO",e[e.BLEND=0]="BLEND",e[e.CLEAR=1]="CLEAR",e[e.BLIT=2]="BLIT",e))(jt||{}),Yr=(e=>(e[e.AUTO=0]="AUTO",e[e.MANUAL=1]="MANUAL",e))(Yr||{}),At=(e=>(e.LOW="lowp",e.MEDIUM="mediump",e.HIGH="highp",e))(At||{}),ut=(e=>(e[e.NONE=0]="NONE",e[e.SCISSOR=1]="SCISSOR",e[e.STENCIL=2]="STENCIL",e[e.SPRITE=3]="SPRITE",e[e.COLOR=4]="COLOR",e))(ut||{}),ot=(e=>(e[e.NONE=0]="NONE",e[e.LOW=2]="LOW",e[e.MEDIUM=4]="MEDIUM",e[e.HIGH=8]="HIGH",e))(ot||{}),Kt=(e=>(e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",e))(Kt||{});const gl={createCanvas:(e,t)=>{const i=document.createElement("canvas");return i.width=e,i.height=t,i},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")},R={ADAPTER:gl,RESOLUTION:1,CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1};var Ms=/iPhone/i,an=/iPod/i,ln=/iPad/i,hn=/\biOS-universal(?:.+)Mac\b/i,Ds=/\bAndroid(?:.+)Mobile\b/i,cn=/Android/i,Fe=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Ai=/Silk/i,te=/Windows Phone/i,un=/\bWindows(?:.+)ARM\b/i,dn=/BlackBerry/i,fn=/BB10/i,pn=/Opera Mini/i,mn=/\b(CriOS|Chrome)(?:.+)Mobile/i,gn=/Mobile(?:.+)Firefox\b/i,_n=function(e){return typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream>"u"};function _l(e){return function(t){return t.test(e)}}function vn(e){var t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});var i=t.userAgent,s=i.split("[FBAN");typeof s[1]<"u"&&(i=s[0]),s=i.split("Twitter"),typeof s[1]<"u"&&(i=s[0]);var r=_l(i),n={apple:{phone:r(Ms)&&!r(te),ipod:r(an),tablet:!r(Ms)&&(r(ln)||_n(t))&&!r(te),universal:r(hn),device:(r(Ms)||r(an)||r(ln)||r(hn)||_n(t))&&!r(te)},amazon:{phone:r(Fe),tablet:!r(Fe)&&r(Ai),device:r(Fe)||r(Ai)},android:{phone:!r(te)&&r(Fe)||!r(te)&&r(Ds),tablet:!r(te)&&!r(Fe)&&!r(Ds)&&(r(Ai)||r(cn)),device:!r(te)&&(r(Fe)||r(Ai)||r(Ds)||r(cn))||r(/\bokhttp\b/i)},windows:{phone:r(te),tablet:r(un),device:r(te)||r(un)},other:{blackberry:r(dn),blackberry10:r(fn),opera:r(pn),firefox:r(gn),chrome:r(mn),device:r(dn)||r(fn)||r(pn)||r(gn)||r(mn)},any:!1,phone:!1,tablet:!1};return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device,n.phone=n.apple.phone||n.android.phone||n.windows.phone,n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet,n}const vl=vn.default??vn,se=vl(globalThis.navigator);R.RETINA_PREFIX=/@([0-9\.]+)x/;R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ce={},xl={get exports(){return Ce},set exports(e){Ce=e}};(function(e){var t=Object.prototype.hasOwnProperty,i="~";function s(){}Object.create&&(s.prototype=Object.create(null),new s().__proto__||(i=!1));function r(l,h,c){this.fn=l,this.context=h,this.once=c||!1}function n(l,h,c,u,d){if(typeof c!="function")throw new TypeError("The listener must be a function");var f=new r(c,u||l,d),p=i?i+h:h;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],f]:l._events[p].push(f):(l._events[p]=f,l._eventsCount++),l}function o(l,h){--l._eventsCount===0?l._events=new s:delete l._events[h]}function a(){this._events=new s,this._eventsCount=0}a.prototype.eventNames=function(){var h=[],c,u;if(this._eventsCount===0)return h;for(u in c=this._events)t.call(c,u)&&h.push(i?u.slice(1):u);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(c)):h},a.prototype.listeners=function(h){var c=i?i+h:h,u=this._events[c];if(!u)return[];if(u.fn)return[u.fn];for(var d=0,f=u.length,p=new Array(f);d<f;d++)p[d]=u[d].fn;return p},a.prototype.listenerCount=function(h){var c=i?i+h:h,u=this._events[c];return u?u.fn?1:u.length:0},a.prototype.emit=function(h,c,u,d,f,p){var _=i?i+h:h;if(!this._events[_])return!1;var m=this._events[_],v=arguments.length,y,g;if(m.fn){switch(m.once&&this.removeListener(h,m.fn,void 0,!0),v){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,u),!0;case 4:return m.fn.call(m.context,c,u,d),!0;case 5:return m.fn.call(m.context,c,u,d,f),!0;case 6:return m.fn.call(m.context,c,u,d,f,p),!0}for(g=1,y=new Array(v-1);g<v;g++)y[g-1]=arguments[g];m.fn.apply(m.context,y)}else{var x=m.length,E;for(g=0;g<x;g++)switch(m[g].once&&this.removeListener(h,m[g].fn,void 0,!0),v){case 1:m[g].fn.call(m[g].context);break;case 2:m[g].fn.call(m[g].context,c);break;case 3:m[g].fn.call(m[g].context,c,u);break;case 4:m[g].fn.call(m[g].context,c,u,d);break;default:if(!y)for(E=1,y=new Array(v-1);E<v;E++)y[E-1]=arguments[E];m[g].fn.apply(m[g].context,y)}}return!0},a.prototype.on=function(h,c,u){return n(this,h,c,u,!1)},a.prototype.once=function(h,c,u){return n(this,h,c,u,!0)},a.prototype.removeListener=function(h,c,u,d){var f=i?i+h:h;if(!this._events[f])return this;if(!c)return o(this,f),this;var p=this._events[f];if(p.fn)p.fn===c&&(!d||p.once)&&(!u||p.context===u)&&o(this,f);else{for(var _=0,m=[],v=p.length;_<v;_++)(p[_].fn!==c||d&&!p[_].once||u&&p[_].context!==u)&&m.push(p[_]);m.length?this._events[f]=m.length===1?m[0]:m:o(this,f)}return this},a.prototype.removeAllListeners=function(h){var c;return h?(c=i?i+h:h,this._events[c]&&o(this,c)):(this._events=new s,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=i,a.EventEmitter=a,e.exports=a})(xl);var is={},yl={get exports(){return is},set exports(e){is=e}};yl.exports=gs;is.default=gs;function gs(e,t,i){i=i||2;var s=t&&t.length,r=s?t[0]*i:e.length,n=Mo(e,0,r,i,!0),o=[];if(!n||n.next===n.prev)return o;var a,l,h,c,u,d,f;if(s&&(n=Cl(e,t,n,i)),e.length>80*i){a=h=e[0],l=c=e[1];for(var p=i;p<r;p+=i)u=e[p],d=e[p+1],u<a&&(a=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-a,c-l),f=f!==0?32767/f:0}return pi(n,o,i,a,l,f,0),o}function Mo(e,t,i,s,r){var n,o;if(r===ur(e,t,i,s)>0)for(n=t;n<i;n+=s)o=xn(n,e[n],e[n+1],o);else for(n=i-s;n>=t;n-=s)o=xn(n,e[n],e[n+1],o);return o&&_s(o,o.next)&&(gi(o),o=o.next),o}function Se(e,t){if(!e)return e;t||(t=e);var i=e,s;do if(s=!1,!i.steiner&&(_s(i,i.next)||rt(i.prev,i,i.next)===0)){if(gi(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function pi(e,t,i,s,r,n,o){if(e){!o&&n&&Rl(e,s,r,n);for(var a=e,l,h;e.prev!==e.next;){if(l=e.prev,h=e.next,n?Tl(e,s,r,n):bl(e)){t.push(l.i/i|0),t.push(e.i/i|0),t.push(h.i/i|0),gi(e),e=h.next,a=h.next;continue}if(e=h,e===a){o?o===1?(e=wl(Se(e),t,i),pi(e,t,i,s,r,n,2)):o===2&&El(e,t,i,s,r,n):pi(Se(e),t,i,s,r,n,1);break}}}}function bl(e){var t=e.prev,i=e,s=e.next;if(rt(t,i,s)>=0)return!1;for(var r=t.x,n=i.x,o=s.x,a=t.y,l=i.y,h=s.y,c=r<n?r<o?r:o:n<o?n:o,u=a<l?a<h?a:h:l<h?l:h,d=r>n?r>o?r:o:n>o?n:o,f=a>l?a>h?a:h:l>h?l:h,p=s.next;p!==t;){if(p.x>=c&&p.x<=d&&p.y>=u&&p.y<=f&&ze(r,a,n,l,o,h,p.x,p.y)&&rt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Tl(e,t,i,s){var r=e.prev,n=e,o=e.next;if(rt(r,n,o)>=0)return!1;for(var a=r.x,l=n.x,h=o.x,c=r.y,u=n.y,d=o.y,f=a<l?a<h?a:h:l<h?l:h,p=c<u?c<d?c:d:u<d?u:d,_=a>l?a>h?a:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,v=hr(f,p,t,i,s),y=hr(_,m,t,i,s),g=e.prevZ,x=e.nextZ;g&&g.z>=v&&x&&x.z<=y;){if(g.x>=f&&g.x<=_&&g.y>=p&&g.y<=m&&g!==r&&g!==o&&ze(a,c,l,u,h,d,g.x,g.y)&&rt(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&ze(a,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=v;){if(g.x>=f&&g.x<=_&&g.y>=p&&g.y<=m&&g!==r&&g!==o&&ze(a,c,l,u,h,d,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=m&&x!==r&&x!==o&&ze(a,c,l,u,h,d,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function wl(e,t,i){var s=e;do{var r=s.prev,n=s.next.next;!_s(r,n)&&Do(r,s,s.next,n)&&mi(r,n)&&mi(n,r)&&(t.push(r.i/i|0),t.push(s.i/i|0),t.push(n.i/i|0),gi(s),gi(s.next),s=e=n),s=s.next}while(s!==e);return Se(s)}function El(e,t,i,s,r,n){var o=e;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&Fl(o,a)){var l=Fo(o,a);o=Se(o,o.next),l=Se(l,l.next),pi(o,t,i,s,r,n,0),pi(l,t,i,s,r,n,0);return}a=a.next}o=o.next}while(o!==e)}function Cl(e,t,i,s){var r=[],n,o,a,l,h;for(n=0,o=t.length;n<o;n++)a=t[n]*s,l=n<o-1?t[n+1]*s:e.length,h=Mo(e,a,l,s,!1),h===h.next&&(h.steiner=!0),r.push(Dl(h));for(r.sort(Sl),n=0;n<r.length;n++)i=Al(r[n],i);return i}function Sl(e,t){return e.x-t.x}function Al(e,t){var i=Il(e,t);if(!i)return t;var s=Fo(i,e);return Se(s,s.next),Se(i,i.next)}function Il(e,t){var i=t,s=e.x,r=e.y,n=-1/0,o;do{if(r<=i.y&&r>=i.next.y&&i.next.y!==i.y){var a=i.x+(r-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(a<=s&&a>n&&(n=a,o=i.x<i.next.x?i:i.next,a===s))return o}i=i.next}while(i!==t);if(!o)return null;var l=o,h=o.x,c=o.y,u=1/0,d;i=o;do s>=i.x&&i.x>=h&&s!==i.x&&ze(r<c?s:n,r,h,c,r<c?n:s,r,i.x,i.y)&&(d=Math.abs(r-i.y)/(s-i.x),mi(i,e)&&(d<u||d===u&&(i.x>o.x||i.x===o.x&&Pl(o,i)))&&(o=i,u=d)),i=i.next;while(i!==l);return o}function Pl(e,t){return rt(e.prev,e,t.prev)<0&&rt(t.next,e,e.next)<0}function Rl(e,t,i,s){var r=e;do r.z===0&&(r.z=hr(r.x,r.y,t,i,s)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==e);r.prevZ.nextZ=null,r.prevZ=null,Ml(r)}function Ml(e){var t,i,s,r,n,o,a,l,h=1;do{for(i=e,e=null,n=null,o=0;i;){for(o++,s=i,a=0,t=0;t<h&&(a++,s=s.nextZ,!!s);t++);for(l=h;a>0||l>0&&s;)a!==0&&(l===0||!s||i.z<=s.z)?(r=i,i=i.nextZ,a--):(r=s,s=s.nextZ,l--),n?n.nextZ=r:e=r,r.prevZ=n,n=r;i=s}n.nextZ=null,h*=2}while(o>1);return e}function hr(e,t,i,s,r){return e=(e-i)*r|0,t=(t-s)*r|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Dl(e){var t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function ze(e,t,i,s,r,n,o,a){return(r-o)*(t-a)>=(e-o)*(n-a)&&(e-o)*(s-a)>=(i-o)*(t-a)&&(i-o)*(n-a)>=(r-o)*(s-a)}function Fl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Bl(e,t)&&(mi(e,t)&&mi(t,e)&&Ll(e,t)&&(rt(e.prev,e,t.prev)||rt(e,t.prev,t))||_s(e,t)&&rt(e.prev,e,e.next)>0&&rt(t.prev,t,t.next)>0)}function rt(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function _s(e,t){return e.x===t.x&&e.y===t.y}function Do(e,t,i,s){var r=Pi(rt(e,t,i)),n=Pi(rt(e,t,s)),o=Pi(rt(i,s,e)),a=Pi(rt(i,s,t));return!!(r!==n&&o!==a||r===0&&Ii(e,i,t)||n===0&&Ii(e,s,t)||o===0&&Ii(i,e,s)||a===0&&Ii(i,t,s))}function Ii(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function Pi(e){return e>0?1:e<0?-1:0}function Bl(e,t){var i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&Do(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function mi(e,t){return rt(e.prev,e,e.next)<0?rt(e,t,e.next)>=0&&rt(e,e.prev,t)>=0:rt(e,t,e.prev)<0||rt(e,e.next,t)<0}function Ll(e,t){var i=e,s=!1,r=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&r<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==e);return s}function Fo(e,t){var i=new cr(e.i,e.x,e.y),s=new cr(t.i,t.x,t.y),r=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=r,r.prev=i,s.next=i,i.prev=s,n.next=s,s.prev=n,s}function xn(e,t,i,s){var r=new cr(e,t,i);return s?(r.next=s.next,r.prev=s,s.next.prev=r,s.next=r):(r.prev=r,r.next=r),r}function gi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function cr(e,t,i){this.i=e,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}gs.deviation=function(e,t,i,s){var r=t&&t.length,n=r?t[0]*i:e.length,o=Math.abs(ur(e,0,n,i));if(r)for(var a=0,l=t.length;a<l;a++){var h=t[a]*i,c=a<l-1?t[a+1]*i:e.length;o-=Math.abs(ur(e,h,c,i))}var u=0;for(a=0;a<s.length;a+=3){var d=s[a]*i,f=s[a+1]*i,p=s[a+2]*i;u+=Math.abs((e[d]-e[p])*(e[f+1]-e[d+1])-(e[d]-e[f])*(e[p+1]-e[d+1]))}return o===0&&u===0?0:Math.abs((u-o)/o)};function ur(e,t,i,s){for(var r=0,n=t,o=i-s;n<i;n+=s)r+=(e[o]-e[n])*(e[n+1]+e[o+1]),o=n;return r}gs.flatten=function(e){for(var t=e[0][0].length,i={vertices:[],holes:[],dimensions:t},s=0,r=0;r<e.length;r++){for(var n=0;n<e[r].length;n++)for(var o=0;o<t;o++)i.vertices.push(e[r][n][o]);r>0&&(s+=e[r-1].length,i.holes.push(s))}return i};var ss={},Ol={get exports(){return ss},set exports(e){ss=e}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(e,t){(function(i){var s=t&&!t.nodeType&&t,r=e&&!e.nodeType&&e,n=typeof Fs=="object"&&Fs;(n.global===n||n.window===n||n.self===n)&&(i=n);var o,a=2147483647,l=36,h=1,c=26,u=38,d=700,f=72,p=128,_="-",m=/^xn--/,v=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,g={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},x=l-h,E=Math.floor,M=String.fromCharCode,A;function C(w){throw RangeError(g[w])}function O(w,z){for(var Q=w.length,J=[];Q--;)J[Q]=z(w[Q]);return J}function U(w,z){var Q=w.split("@"),J="";Q.length>1&&(J=Q[0]+"@",w=Q[1]),w=w.replace(y,".");var tt=w.split("."),dt=O(tt,z).join(".");return J+dt}function P(w){for(var z=[],Q=0,J=w.length,tt,dt;Q<J;)tt=w.charCodeAt(Q++),tt>=55296&&tt<=56319&&Q<J?(dt=w.charCodeAt(Q++),(dt&64512)==56320?z.push(((tt&1023)<<10)+(dt&1023)+65536):(z.push(tt),Q--)):z.push(tt);return z}function F(w){return O(w,function(z){var Q="";return z>65535&&(z-=65536,Q+=M(z>>>10&1023|55296),z=56320|z&1023),Q+=M(z),Q}).join("")}function S(w){return w-48<10?w-22:w-65<26?w-65:w-97<26?w-97:l}function b(w,z){return w+22+75*(w<26)-((z!=0)<<5)}function $(w,z,Q){var J=0;for(w=Q?E(w/d):w>>1,w+=E(w/z);w>x*c>>1;J+=l)w=E(w/x);return E(J+(x+1)*w/(w+u))}function q(w){var z=[],Q=w.length,J,tt=0,dt=p,lt=f,ft,xt,wt,gt,et,ht,ct,Ht,$t;for(ft=w.lastIndexOf(_),ft<0&&(ft=0),xt=0;xt<ft;++xt)w.charCodeAt(xt)>=128&&C("not-basic"),z.push(w.charCodeAt(xt));for(wt=ft>0?ft+1:0;wt<Q;){for(gt=tt,et=1,ht=l;wt>=Q&&C("invalid-input"),ct=S(w.charCodeAt(wt++)),(ct>=l||ct>E((a-tt)/et))&&C("overflow"),tt+=ct*et,Ht=ht<=lt?h:ht>=lt+c?c:ht-lt,!(ct<Ht);ht+=l)$t=l-Ht,et>E(a/$t)&&C("overflow"),et*=$t;J=z.length+1,lt=$(tt-gt,J,gt==0),E(tt/J)>a-dt&&C("overflow"),dt+=E(tt/J),tt%=J,z.splice(tt++,0,dt)}return F(z)}function T(w){var z,Q,J,tt,dt,lt,ft,xt,wt,gt,et,ht=[],ct,Ht,$t,ei;for(w=P(w),ct=w.length,z=p,Q=0,dt=f,lt=0;lt<ct;++lt)et=w[lt],et<128&&ht.push(M(et));for(J=tt=ht.length,tt&&ht.push(_);J<ct;){for(ft=a,lt=0;lt<ct;++lt)et=w[lt],et>=z&&et<ft&&(ft=et);for(Ht=J+1,ft-z>E((a-Q)/Ht)&&C("overflow"),Q+=(ft-z)*Ht,z=ft,lt=0;lt<ct;++lt)if(et=w[lt],et<z&&++Q>a&&C("overflow"),et==z){for(xt=Q,wt=l;gt=wt<=dt?h:wt>=dt+c?c:wt-dt,!(xt<gt);wt+=l)ei=xt-gt,$t=l-gt,ht.push(M(b(gt+ei%$t,0))),xt=E(ei/$t);ht.push(M(b(xt,0))),dt=$(Q,Ht,J==tt),Q=0,++J}++Q,++z}return ht.join("")}function k(w){return U(w,function(z){return m.test(z)?q(z.slice(4).toLowerCase()):z})}function V(w){return U(w,function(z){return v.test(z)?"xn--"+T(z):z})}if(o={version:"1.3.2",ucs2:{decode:P,encode:F},decode:q,encode:T,toASCII:V,toUnicode:k},s&&r)if(e.exports==s)r.exports=o;else for(A in o)o.hasOwnProperty(A)&&(s[A]=o[A]);else i.punycode=o})(Fs)})(Ol,ss);var kl={isString:function(e){return typeof e=="string"},isObject:function(e){return typeof e=="object"&&e!==null},isNull:function(e){return e===null},isNullOrUndefined:function(e){return e==null}},_i={};function Nl(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var Ul=function(e,t,i,s){t=t||"&",i=i||"=";var r={};if(typeof e!="string"||e.length===0)return r;var n=/\+/g;e=e.split(t);var o=1e3;s&&typeof s.maxKeys=="number"&&(o=s.maxKeys);var a=e.length;o>0&&a>o&&(a=o);for(var l=0;l<a;++l){var h=e[l].replace(n,"%20"),c=h.indexOf(i),u,d,f,p;c>=0?(u=h.substr(0,c),d=h.substr(c+1)):(u=h,d=""),f=decodeURIComponent(u),p=decodeURIComponent(d),Nl(r,f)?Array.isArray(r[f])?r[f].push(p):r[f]=[r[f],p]:r[f]=p}return r},ii=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}},Gl=function(e,t,i,s){return t=t||"&",i=i||"=",e===null&&(e=void 0),typeof e=="object"?Object.keys(e).map(function(r){var n=encodeURIComponent(ii(r))+i;return Array.isArray(e[r])?e[r].map(function(o){return n+encodeURIComponent(ii(o))}).join(t):n+encodeURIComponent(ii(e[r]))}).join(t):s?encodeURIComponent(ii(s))+i+encodeURIComponent(ii(e)):""};_i.decode=_i.parse=Ul;_i.encode=_i.stringify=Gl;var zl=ss,Wt=kl,Hl=vs,$l=th,Xl=Jl;function Nt(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Vl=/^([a-z0-9.+-]+:)/i,jl=/:[0-9]*$/,Wl=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Yl=["<",">",'"',"`"," ","\r",`
`,"	"],ql=["{","}","|","\\","^","`"].concat(Yl),dr=["'"].concat(ql),yn=["%","/","?",";","#"].concat(dr),bn=["/","?","#"],Kl=255,Tn=/^[+a-z0-9A-Z_-]{0,63}$/,Zl=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Ql={javascript:!0,"javascript:":!0},fr={javascript:!0,"javascript:":!0},Xe={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},pr=_i;function vs(e,t,i){if(e&&Wt.isObject(e)&&e instanceof Nt)return e;var s=new Nt;return s.parse(e,t,i),s}Nt.prototype.parse=function(e,t,i){if(!Wt.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var s=e.indexOf("?"),r=s!==-1&&s<e.indexOf("#")?"?":"#",n=e.split(r),o=/\\/g;n[0]=n[0].replace(o,"/"),e=n.join(r);var a=e;if(a=a.trim(),!i&&e.split("#").length===1){var l=Wl.exec(a);if(l)return this.path=a,this.href=a,this.pathname=l[1],l[2]?(this.search=l[2],t?this.query=pr.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var h=Vl.exec(a);if(h){h=h[0];var c=h.toLowerCase();this.protocol=c,a=a.substr(h.length)}if(i||h||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var u=a.substr(0,2)==="//";u&&!(h&&fr[h])&&(a=a.substr(2),this.slashes=!0)}if(!fr[h]&&(u||h&&!Xe[h])){for(var d=-1,f=0;f<bn.length;f++){var p=a.indexOf(bn[f]);p!==-1&&(d===-1||p<d)&&(d=p)}var _,m;d===-1?m=a.lastIndexOf("@"):m=a.lastIndexOf("@",d),m!==-1&&(_=a.slice(0,m),a=a.slice(m+1),this.auth=decodeURIComponent(_)),d=-1;for(var f=0;f<yn.length;f++){var p=a.indexOf(yn[f]);p!==-1&&(d===-1||p<d)&&(d=p)}d===-1&&(d=a.length),this.host=a.slice(0,d),a=a.slice(d),this.parseHost(),this.hostname=this.hostname||"";var v=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!v)for(var y=this.hostname.split(/\./),f=0,g=y.length;f<g;f++){var x=y[f];if(x&&!x.match(Tn)){for(var E="",M=0,A=x.length;M<A;M++)x.charCodeAt(M)>127?E+="x":E+=x[M];if(!E.match(Tn)){var C=y.slice(0,f),O=y.slice(f+1),U=x.match(Zl);U&&(C.push(U[1]),O.unshift(U[2])),O.length&&(a="/"+O.join(".")+a),this.hostname=C.join(".");break}}}this.hostname.length>Kl?this.hostname="":this.hostname=this.hostname.toLowerCase(),v||(this.hostname=zl.toASCII(this.hostname));var P=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+P,this.href+=this.host,v&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),a[0]!=="/"&&(a="/"+a))}if(!Ql[c])for(var f=0,g=dr.length;f<g;f++){var S=dr[f];if(a.indexOf(S)!==-1){var b=encodeURIComponent(S);b===S&&(b=escape(S)),a=a.split(S).join(b)}}var $=a.indexOf("#");$!==-1&&(this.hash=a.substr($),a=a.slice(0,$));var q=a.indexOf("?");if(q!==-1?(this.search=a.substr(q),this.query=a.substr(q+1),t&&(this.query=pr.parse(this.query)),a=a.slice(0,q)):t&&(this.search="",this.query={}),a&&(this.pathname=a),Xe[c]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var P=this.pathname||"",T=this.search||"";this.path=P+T}return this.href=this.format(),this};function Jl(e){return Wt.isString(e)&&(e=vs(e)),e instanceof Nt?e.format():Nt.prototype.format.call(e)}Nt.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",i=this.pathname||"",s=this.hash||"",r=!1,n="";this.host?r=e+this.host:this.hostname&&(r=e+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&Wt.isObject(this.query)&&Object.keys(this.query).length&&(n=pr.stringify(this.query));var o=this.search||n&&"?"+n||"";return t&&t.substr(-1)!==":"&&(t+=":"),this.slashes||(!t||Xe[t])&&r!==!1?(r="//"+(r||""),i&&i.charAt(0)!=="/"&&(i="/"+i)):r||(r=""),s&&s.charAt(0)!=="#"&&(s="#"+s),o&&o.charAt(0)!=="?"&&(o="?"+o),i=i.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),o=o.replace("#","%23"),t+r+i+o+s};function th(e,t){return vs(e,!1,!0).resolve(t)}Nt.prototype.resolve=function(e){return this.resolveObject(vs(e,!1,!0)).format()};Nt.prototype.resolveObject=function(e){if(Wt.isString(e)){var t=new Nt;t.parse(e,!1,!0),e=t}for(var i=new Nt,s=Object.keys(this),r=0;r<s.length;r++){var n=s[r];i[n]=this[n]}if(i.hash=e.hash,e.href==="")return i.href=i.format(),i;if(e.slashes&&!e.protocol){for(var o=Object.keys(e),a=0;a<o.length;a++){var l=o[a];l!=="protocol"&&(i[l]=e[l])}return Xe[i.protocol]&&i.hostname&&!i.pathname&&(i.path=i.pathname="/"),i.href=i.format(),i}if(e.protocol&&e.protocol!==i.protocol){if(!Xe[e.protocol]){for(var h=Object.keys(e),c=0;c<h.length;c++){var u=h[c];i[u]=e[u]}return i.href=i.format(),i}if(i.protocol=e.protocol,!e.host&&!fr[e.protocol]){for(var g=(e.pathname||"").split("/");g.length&&!(e.host=g.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),g[0]!==""&&g.unshift(""),g.length<2&&g.unshift(""),i.pathname=g.join("/")}else i.pathname=e.pathname;if(i.search=e.search,i.query=e.query,i.host=e.host||"",i.auth=e.auth,i.hostname=e.hostname||e.host,i.port=e.port,i.pathname||i.search){var d=i.pathname||"",f=i.search||"";i.path=d+f}return i.slashes=i.slashes||e.slashes,i.href=i.format(),i}var p=i.pathname&&i.pathname.charAt(0)==="/",_=e.host||e.pathname&&e.pathname.charAt(0)==="/",m=_||p||i.host&&e.pathname,v=m,y=i.pathname&&i.pathname.split("/")||[],g=e.pathname&&e.pathname.split("/")||[],x=i.protocol&&!Xe[i.protocol];if(x&&(i.hostname="",i.port=null,i.host&&(y[0]===""?y[0]=i.host:y.unshift(i.host)),i.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(g[0]===""?g[0]=e.host:g.unshift(e.host)),e.host=null),m=m&&(g[0]===""||y[0]==="")),_)i.host=e.host||e.host===""?e.host:i.host,i.hostname=e.hostname||e.hostname===""?e.hostname:i.hostname,i.search=e.search,i.query=e.query,y=g;else if(g.length)y||(y=[]),y.pop(),y=y.concat(g),i.search=e.search,i.query=e.query;else if(!Wt.isNullOrUndefined(e.search)){if(x){i.hostname=i.host=y.shift();var E=i.host&&i.host.indexOf("@")>0?i.host.split("@"):!1;E&&(i.auth=E.shift(),i.host=i.hostname=E.shift())}return i.search=e.search,i.query=e.query,(!Wt.isNull(i.pathname)||!Wt.isNull(i.search))&&(i.path=(i.pathname?i.pathname:"")+(i.search?i.search:"")),i.href=i.format(),i}if(!y.length)return i.pathname=null,i.search?i.path="/"+i.search:i.path=null,i.href=i.format(),i;for(var M=y.slice(-1)[0],A=(i.host||e.host||y.length>1)&&(M==="."||M==="..")||M==="",C=0,O=y.length;O>=0;O--)M=y[O],M==="."?y.splice(O,1):M===".."?(y.splice(O,1),C++):C&&(y.splice(O,1),C--);if(!m&&!v)for(;C--;C)y.unshift("..");m&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),A&&y.join("/").substr(-1)!=="/"&&y.push("");var U=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(x){i.hostname=i.host=U?"":y.length?y.shift():"";var E=i.host&&i.host.indexOf("@")>0?i.host.split("@"):!1;E&&(i.auth=E.shift(),i.host=i.hostname=E.shift())}return m=m||i.host&&y.length,m&&!U&&y.unshift(""),y.length?i.pathname=y.join("/"):(i.pathname=null,i.path=null),(!Wt.isNull(i.pathname)||!Wt.isNull(i.search))&&(i.path=(i.pathname?i.pathname:"")+(i.search?i.search:"")),i.auth=e.auth||i.auth,i.slashes=i.slashes||e.slashes,i.href=i.format(),i};Nt.prototype.parseHost=function(){var e=this.host,t=jl.exec(e);t&&(t=t[0],t!==":"&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)};const eh={parse:Hl,format:Xl,resolve:$l};function Pt(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function si(e){return e.split("?")[0].split("#")[0]}function ih(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function sh(e,t,i){return e.replace(new RegExp(ih(t),"g"),i)}function rh(e,t){let i="",s=0,r=-1,n=0,o=-1;for(let a=0;a<=e.length;++a){if(a<e.length)o=e.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(r===a-1||n===1))if(r!==a-1&&n===2){if(i.length<2||s!==2||i.charCodeAt(i.length-1)!==46||i.charCodeAt(i.length-2)!==46){if(i.length>2){const l=i.lastIndexOf("/");if(l!==i.length-1){l===-1?(i="",s=0):(i=i.slice(0,l),s=i.length-1-i.lastIndexOf("/")),r=a,n=0;continue}}else if(i.length===2||i.length===1){i="",s=0,r=a,n=0;continue}}t&&(i.length>0?i+="/..":i="..",s=2)}else i.length>0?i+=`/${e.slice(r+1,a)}`:i=e.slice(r+1,a),s=a-r-1;r=a,n=0}else o===46&&n!==-1?++n:n=-1}return i}const bt={toPosix(e){return sh(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},hasProtocol(e){return/^[^/:]+:\//.test(this.toPosix(e))},getProtocol(e){Pt(e),e=this.toPosix(e);let t="";const i=/^file:\/\/\//.exec(e),s=/^[^/:]+:\/\//.exec(e),r=/^[^/:]+:\//.exec(e);if(i||s||r){const n=(i==null?void 0:i[0])||(s==null?void 0:s[0])||(r==null?void 0:r[0]);t=n,e=e.slice(n.length)}return t},toAbsolute(e,t,i){if(this.isDataUrl(e))return e;const s=si(this.toPosix(t??R.ADAPTER.getBaseUrl())),r=si(this.toPosix(i??this.rootname(s)));return Pt(e),e=this.toPosix(e),e.startsWith("/")?bt.join(r,e.slice(1)):this.isAbsolute(e)?e:this.join(s,e)},normalize(e){if(e=this.toPosix(e),Pt(e),e.length===0)return".";let t="";const i=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const s=e.endsWith("/");return e=rh(e,!1),e.length>0&&s&&(e+="/"),i?`/${e}`:t+e},isAbsolute(e){return Pt(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){if(e.length===0)return".";let t;for(let i=0;i<e.length;++i){const s=e[i];if(Pt(s),s.length>0)if(t===void 0)t=s;else{const r=e[i-1]??"";this.extname(r)?t+=`/../${s}`:t+=`/${s}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(Pt(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const i=t===47;let s=-1,r=!0;const n=this.getProtocol(e),o=e;e=e.slice(n.length);for(let a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!r){s=a;break}}else r=!1;return s===-1?i?"/":this.isUrl(o)?n+e:n:i&&s===1?"//":n+e.slice(0,s)},rootname(e){Pt(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const i=e.indexOf("/",t.length);i!==-1?t=e.slice(0,i):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){Pt(e),t&&Pt(t),e=si(this.toPosix(e));let i=0,s=-1,r=!0,n;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let o=t.length-1,a=-1;for(n=e.length-1;n>=0;--n){const l=e.charCodeAt(n);if(l===47){if(!r){i=n+1;break}}else a===-1&&(r=!1,a=n+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(s=n):(o=-1,s=a))}return i===s?s=a:s===-1&&(s=e.length),e.slice(i,s)}for(n=e.length-1;n>=0;--n)if(e.charCodeAt(n)===47){if(!r){i=n+1;break}}else s===-1&&(r=!1,s=n+1);return s===-1?"":e.slice(i,s)},extname(e){Pt(e),e=si(this.toPosix(e));let t=-1,i=0,s=-1,r=!0,n=0;for(let o=e.length-1;o>=0;--o){const a=e.charCodeAt(o);if(a===47){if(!r){i=o+1;break}continue}s===-1&&(r=!1,s=o+1),a===46?t===-1?t=o:n!==1&&(n=1):t!==-1&&(n=-1)}return t===-1||s===-1||n===0||n===1&&t===s-1&&t===i+1?"":e.slice(t,s)},parse(e){Pt(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=si(this.toPosix(e));let i=e.charCodeAt(0);const s=this.isAbsolute(e);let r;t.root=this.rootname(e),s||this.hasProtocol(e)?r=1:r=0;let n=-1,o=0,a=-1,l=!0,h=e.length-1,c=0;for(;h>=r;--h){if(i=e.charCodeAt(h),i===47){if(!l){o=h+1;break}continue}a===-1&&(l=!1,a=h+1),i===46?n===-1?n=h:c!==1&&(c=1):n!==-1&&(c=-1)}return n===-1||a===-1||c===0||c===1&&n===a-1&&n===o+1?a!==-1&&(o===0&&s?t.base=t.name=e.slice(1,a):t.base=t.name=e.slice(o,a)):(o===0&&s?(t.name=e.slice(1,n),t.base=e.slice(1,a)):(t.name=e.slice(o,n),t.base=e.slice(o,a)),t.ext=e.slice(n,a)),t.dir=this.dirname(e),t},sep:"/",delimiter:":"},wn={};function Y(e,t,i=3){if(wn[t])return;let s=new Error().stack;typeof s>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(s=s.split(`
`).splice(i).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(s),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(s))),wn[t]=!0}let Bs;function nh(){return typeof Bs>"u"&&(Bs=function(){var i;const t={stencil:!0,failIfMajorPerformanceCaveat:R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!R.ADAPTER.getWebGLRenderingContext())return!1;const s=R.ADAPTER.createCanvas();let r=s.getContext("webgl",t)||s.getContext("experimental-webgl",t);const n=!!((i=r==null?void 0:r.getContextAttributes())!=null&&i.stencil);if(r){const o=r.getExtension("WEBGL_lose_context");o&&o.loseContext()}return r=null,n}catch{return!1}}()),Bs}var oh={grad:.9,turn:360,rad:360/(2*Math.PI)},ee=function(e){return typeof e=="string"?e.length>0:typeof e=="number"},pt=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=Math.pow(10,t)),Math.round(i*e)/i+0},It=function(e,t,i){return t===void 0&&(t=0),i===void 0&&(i=1),e>i?i:e>t?e:t},Bo=function(e){return(e=isFinite(e)?e%360:0)>0?e:e+360},En=function(e){return{r:It(e.r,0,255),g:It(e.g,0,255),b:It(e.b,0,255),a:It(e.a)}},Ls=function(e){return{r:pt(e.r),g:pt(e.g),b:pt(e.b),a:pt(e.a,3)}},ah=/^#([0-9a-f]{3,8})$/i,Ri=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Lo=function(e){var t=e.r,i=e.g,s=e.b,r=e.a,n=Math.max(t,i,s),o=n-Math.min(t,i,s),a=o?n===t?(i-s)/o:n===i?2+(s-t)/o:4+(t-i)/o:0;return{h:60*(a<0?a+6:a),s:n?o/n*100:0,v:n/255*100,a:r}},Oo=function(e){var t=e.h,i=e.s,s=e.v,r=e.a;t=t/360*6,i/=100,s/=100;var n=Math.floor(t),o=s*(1-i),a=s*(1-(t-n)*i),l=s*(1-(1-t+n)*i),h=n%6;return{r:255*[s,a,o,o,l,s][h],g:255*[l,s,s,a,o,o][h],b:255*[o,o,l,s,s,a][h],a:r}},Cn=function(e){return{h:Bo(e.h),s:It(e.s,0,100),l:It(e.l,0,100),a:It(e.a)}},Sn=function(e){return{h:pt(e.h),s:pt(e.s),l:pt(e.l),a:pt(e.a,3)}},An=function(e){return Oo((i=(t=e).s,{h:t.h,s:(i*=((s=t.l)<50?s:100-s)/100)>0?2*i/(s+i)*100:0,v:s+i,a:t.a}));var t,i,s},di=function(e){return{h:(t=Lo(e)).h,s:(r=(200-(i=t.s))*(s=t.v)/100)>0&&r<200?i*s/100/(r<=100?r:200-r)*100:0,l:r/2,a:t.a};var t,i,s,r},lh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,hh=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ch=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,uh=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,mr={string:[[function(e){var t=ah.exec(e);return t?(e=t[1]).length<=4?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?pt(parseInt(e[3]+e[3],16)/255,2):1}:e.length===6||e.length===8?{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:e.length===8?pt(parseInt(e.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(e){var t=ch.exec(e)||uh.exec(e);return t?t[2]!==t[4]||t[4]!==t[6]?null:En({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(e){var t=lh.exec(e)||hh.exec(e);if(!t)return null;var i,s,r=Cn({h:(i=t[1],s=t[2],s===void 0&&(s="deg"),Number(i)*(oh[s]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return An(r)},"hsl"]],object:[[function(e){var t=e.r,i=e.g,s=e.b,r=e.a,n=r===void 0?1:r;return ee(t)&&ee(i)&&ee(s)?En({r:Number(t),g:Number(i),b:Number(s),a:Number(n)}):null},"rgb"],[function(e){var t=e.h,i=e.s,s=e.l,r=e.a,n=r===void 0?1:r;if(!ee(t)||!ee(i)||!ee(s))return null;var o=Cn({h:Number(t),s:Number(i),l:Number(s),a:Number(n)});return An(o)},"hsl"],[function(e){var t=e.h,i=e.s,s=e.v,r=e.a,n=r===void 0?1:r;if(!ee(t)||!ee(i)||!ee(s))return null;var o=function(a){return{h:Bo(a.h),s:It(a.s,0,100),v:It(a.v,0,100),a:It(a.a)}}({h:Number(t),s:Number(i),v:Number(s),a:Number(n)});return Oo(o)},"hsv"]]},In=function(e,t){for(var i=0;i<t.length;i++){var s=t[i][0](e);if(s)return[s,t[i][1]]}return[null,void 0]},dh=function(e){return typeof e=="string"?In(e.trim(),mr.string):typeof e=="object"&&e!==null?In(e,mr.object):[null,void 0]},Os=function(e,t){var i=di(e);return{h:i.h,s:It(i.s+100*t,0,100),l:i.l,a:i.a}},ks=function(e){return(299*e.r+587*e.g+114*e.b)/1e3/255},Pn=function(e,t){var i=di(e);return{h:i.h,s:i.s,l:It(i.l+100*t,0,100),a:i.a}},gr=function(){function e(t){this.parsed=dh(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return e.prototype.isValid=function(){return this.parsed!==null},e.prototype.brightness=function(){return pt(ks(this.rgba),2)},e.prototype.isDark=function(){return ks(this.rgba)<.5},e.prototype.isLight=function(){return ks(this.rgba)>=.5},e.prototype.toHex=function(){return t=Ls(this.rgba),i=t.r,s=t.g,r=t.b,o=(n=t.a)<1?Ri(pt(255*n)):"","#"+Ri(i)+Ri(s)+Ri(r)+o;var t,i,s,r,n,o},e.prototype.toRgb=function(){return Ls(this.rgba)},e.prototype.toRgbString=function(){return t=Ls(this.rgba),i=t.r,s=t.g,r=t.b,(n=t.a)<1?"rgba("+i+", "+s+", "+r+", "+n+")":"rgb("+i+", "+s+", "+r+")";var t,i,s,r,n},e.prototype.toHsl=function(){return Sn(di(this.rgba))},e.prototype.toHslString=function(){return t=Sn(di(this.rgba)),i=t.h,s=t.s,r=t.l,(n=t.a)<1?"hsla("+i+", "+s+"%, "+r+"%, "+n+")":"hsl("+i+", "+s+"%, "+r+"%)";var t,i,s,r,n},e.prototype.toHsv=function(){return t=Lo(this.rgba),{h:pt(t.h),s:pt(t.s),v:pt(t.v),a:pt(t.a,3)};var t},e.prototype.invert=function(){return Xt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},e.prototype.saturate=function(t){return t===void 0&&(t=.1),Xt(Os(this.rgba,t))},e.prototype.desaturate=function(t){return t===void 0&&(t=.1),Xt(Os(this.rgba,-t))},e.prototype.grayscale=function(){return Xt(Os(this.rgba,-1))},e.prototype.lighten=function(t){return t===void 0&&(t=.1),Xt(Pn(this.rgba,t))},e.prototype.darken=function(t){return t===void 0&&(t=.1),Xt(Pn(this.rgba,-t))},e.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},e.prototype.alpha=function(t){return typeof t=="number"?Xt({r:(i=this.rgba).r,g:i.g,b:i.b,a:t}):pt(this.rgba.a,3);var i},e.prototype.hue=function(t){var i=di(this.rgba);return typeof t=="number"?Xt({h:t,s:i.s,l:i.l,a:i.a}):pt(i.h)},e.prototype.isEqual=function(t){return this.toHex()===Xt(t).toHex()},e}(),Xt=function(e){return e instanceof gr?e:new gr(e)},Rn=[],fh=function(e){e.forEach(function(t){Rn.indexOf(t)<0&&(t(gr,mr),Rn.push(t))})};function ph(e,t){var i={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},s={};for(var r in i)s[i[r]]=r;var n={};e.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,h=s[this.toHex()];if(h)return h;if(o!=null&&o.closest){var c=this.toRgb(),u=1/0,d="black";if(!n.length)for(var f in i)n[f]=new e(i[f]).toRgb();for(var p in i){var _=(a=c,l=n[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));_<u&&(u=_,d=p)}return d}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":i[a];return l?new e(l).toRgb():null},"name"])}fh([ph]);const Ve=class{constructor(e=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=e}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(e){return this.value=e,this}set value(e){if(e instanceof Ve)this._value=e._value,this._int=e._int,this._components.set(e._components);else{if(e===null)throw new Error("Cannot set PIXI.Color#value to null");this._value!==e&&(this.normalize(e),this._value=e)}}get value(){return this._value}toRgba(){const[e,t,i,s]=this._components;return{r:e,g:t,b:i,a:s}}toRgb(){const[e,t,i]=this._components;return{r:e,g:t,b:i}}toRgbaString(){const[e,t,i]=this.toUint8RgbArray();return`rgba(${e},${t},${i},${this.alpha})`}toUint8RgbArray(e){const[t,i,s]=this._components;return e=e??[],e[0]=Math.round(t*255),e[1]=Math.round(i*255),e[2]=Math.round(s*255),e}toRgbArray(e){e=e??[];const[t,i,s]=this._components;return e[0]=t,e[1]=i,e[2]=s,e}toNumber(){return this._int}toLittleEndianNumber(){const e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}multiply(e){const[t,i,s,r]=Ve.temp.setValue(e)._components;return this._components[0]*=t,this._components[1]*=i,this._components[2]*=s,this._components[3]*=r,this.refreshInt(),this._value=null,this}premultiply(e,t=!0){return t&&(this._components[0]*=e,this._components[1]*=e,this._components[2]*=e),this._components[3]=e,this.refreshInt(),this._value=null,this}toPremultiplied(e){if(e===1)return(e*255<<24)+this._int;if(e===0)return 0;let t=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return t=t*e+.5|0,i=i*e+.5|0,s=s*e+.5|0,(e*255<<24)+(t<<16)+(i<<8)+s}toHex(){const e=this._int.toString(16);return`#${"000000".substring(0,6-e.length)+e}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(e){return this._components[3]=e,this}round(e){const[t,i,s]=this._components;return this._components.set([Math.min(255,t/e*e),Math.min(255,i/e*e),Math.min(255,s/e*e)]),this.refreshInt(),this._value=null,this}toArray(e){e=e??[];const[t,i,s,r]=this._components;return e[0]=t,e[1]=i,e[2]=s,e[3]=r,e}normalize(e){let t;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){const i=e;t=[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255,1]}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4&&e.every(i=>i<=1&&i>=0)){const[i,s,r,n=1]=e;t=[i,s,r,n]}else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4){const[i,s,r,n=255]=e;t=[i/255,s/255,r/255,n/255]}else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){const s=Ve.HEX_PATTERN.exec(e);s&&(e=`#${s[2]}`)}const i=Xt(e);if(i.isValid()){const{r:s,g:r,b:n,a:o}=i.rgba;t=[s/255,r/255,n/255,o]}}if(t)this._components.set(t),this.refreshInt();else throw new Error(`Unable to convert color ${e}`)}refreshInt(){const[e,t,i]=this._components;this._int=(e*255<<16)+(t*255<<8)+(i*255|0)}};let Z=Ve;Z.shared=new Ve;Z.temp=new Ve;Z.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;function qe(e,t=[]){return Y("7.2.0","utils.hex2rgb is deprecated, use Color#toRgbArray instead"),Z.shared.setValue(e).toRgbArray(t)}function mh(e){return Y("7.2.0","utils.hex2string is deprecated, use Color#toHex instead"),Z.shared.setValue(e).toHex()}function Ke(e){return Y("7.2.0","utils.rgb2hex is deprecated, use Color#toNumber instead"),Z.shared.setValue(e).toNumber()}function gh(){const e=[],t=[];for(let s=0;s<32;s++)e[s]=s,t[s]=s;e[H.NORMAL_NPM]=H.NORMAL,e[H.ADD_NPM]=H.ADD,e[H.SCREEN_NPM]=H.SCREEN,t[H.NORMAL]=H.NORMAL_NPM,t[H.ADD]=H.ADD_NPM,t[H.SCREEN]=H.SCREEN_NPM;const i=[];return i.push(t),i.push(e),i}const ko=gh();function No(e,t){return ko[t?1:0][e]}function _h(e,t=null){const i=e*6;if(t=t||new Uint16Array(i),t.length!==i)throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${i}`);for(let s=0,r=0;s<i;s+=6,r+=4)t[s+0]=r+0,t[s+1]=r+1,t[s+2]=r+2,t[s+3]=r+0,t[s+4]=r+2,t[s+5]=r+3;return t}function Uo(e){if(e.BYTES_PER_ELEMENT===4)return e instanceof Float32Array?"Float32Array":e instanceof Uint32Array?"Uint32Array":"Int32Array";if(e.BYTES_PER_ELEMENT===2){if(e instanceof Uint16Array)return"Uint16Array"}else if(e.BYTES_PER_ELEMENT===1&&e instanceof Uint8Array)return"Uint8Array";return null}function rs(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function Mn(e){return!(e&e-1)&&!!e}function Dn(e){let t=(e>65535?1:0)<<4;e>>>=t;let i=(e>255?1:0)<<3;return e>>>=i,t|=i,i=(e>15?1:0)<<2,e>>>=i,t|=i,i=(e>3?1:0)<<1,e>>>=i,t|=i,t|e>>1}function je(e,t,i){const s=e.length;let r;if(t>=s||i===0)return;i=t+i>s?s-t:i;const n=s-i;for(r=t;r<n;++r)e[r]=e[r+i];e.length=n}function he(e){return e===0?0:e<0?-1:1}let vh=0;function Ae(){return++vh}const Go=class{constructor(e,t,i,s){this.left=e,this.top=t,this.right=i,this.bottom=s}get width(){return this.right-this.left}get height(){return this.bottom-this.top}isEmpty(){return this.left===this.right||this.top===this.bottom}};let _r=Go;_r.EMPTY=new Go(0,0,0,0);const Fn={},Vt=Object.create(null),le=Object.create(null);class Bn{constructor(t,i,s){this._canvas=R.ADAPTER.createCanvas(),this._context=this._canvas.getContext("2d"),this.resolution=s||R.RESOLUTION,this.resize(t,i)}clear(){this._checkDestroyed(),this._context.setTransform(1,0,0,1,0,0),this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}resize(t,i){this._checkDestroyed(),this._canvas.width=Math.round(t*this.resolution),this._canvas.height=Math.round(i*this.resolution)}destroy(){this._context=null,this._canvas=null}get width(){return this._checkDestroyed(),this._canvas.width}set width(t){this._checkDestroyed(),this._canvas.width=Math.round(t)}get height(){return this._checkDestroyed(),this._canvas.height}set height(t){this._checkDestroyed(),this._canvas.height=Math.round(t)}get canvas(){return this._checkDestroyed(),this._canvas}get context(){return this._checkDestroyed(),this._context}_checkDestroyed(){if(this._canvas===null)throw new TypeError("The CanvasRenderTarget has already been destroyed")}}function Ln(e,t,i){for(let s=0,r=4*i*t;s<t;++s,r+=4)if(e[r+3]!==0)return!1;return!0}function On(e,t,i,s,r){const n=4*t;for(let o=s,a=s*n+4*i;o<=r;++o,a+=n)if(e[a+3]!==0)return!1;return!0}function xh(e){const{width:t,height:i}=e,s=e.getContext("2d",{willReadFrequently:!0});if(s===null)throw new TypeError("Failed to get canvas 2D context");const n=s.getImageData(0,0,t,i).data;let o=0,a=0,l=t-1,h=i-1;for(;a<i&&Ln(n,t,a);)++a;if(a===i)return _r.EMPTY;for(;Ln(n,t,h);)--h;for(;On(n,t,o,a,h);)++o;for(;On(n,t,l,a,h);)--l;return++l,++h,new _r(o,a,l,h)}function yh(e){const t=xh(e),{width:i,height:s}=t;let r=null;if(!t.isEmpty()){const n=e.getContext("2d");if(n===null)throw new TypeError("Failed to get canvas 2D context");r=n.getImageData(t.left,t.top,i,s)}return{width:i,height:s,data:r}}let Mi;function bh(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location,Mi||(Mi=document.createElement("a")),Mi.href=e;const i=eh.parse(Mi.href),s=!i.port&&t.port===""||i.port===t.port;return i.hostname!==t.hostname||!s||i.protocol!==t.protocol?"anonymous":""}function ue(e,t=1){var s;const i=(s=R.RETINA_PREFIX)==null?void 0:s.exec(e);return i?parseFloat(i[1]):t}var D=(e=>(e.Renderer="renderer",e.Application="application",e.RendererSystem="renderer-webgl-system",e.RendererPlugin="renderer-webgl-plugin",e.CanvasRendererSystem="renderer-canvas-system",e.CanvasRendererPlugin="renderer-canvas-plugin",e.Asset="asset",e.LoadParser="load-parser",e.ResolveParser="resolve-parser",e.CacheParser="cache-parser",e.DetectionParser="detection-parser",e))(D||{});const vr=e=>{if(typeof e=="function"||typeof e=="object"&&e.extension){if(!e.extension)throw new Error("Extension class must have an extension object");e={...typeof e.extension!="object"?{type:e.extension}:e.extension,ref:e}}if(typeof e=="object")e={...e};else throw new Error("Invalid extension type");return typeof e.type=="string"&&(e.type=[e.type]),e},kn=(e,t)=>vr(e).priority??t,N={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...e){return e.map(vr).forEach(t=>{t.type.forEach(i=>{var s,r;return(r=(s=this._removeHandlers)[i])==null?void 0:r.call(s,t)})}),this},add(...e){return e.map(vr).forEach(t=>{t.type.forEach(i=>{const s=this._addHandlers,r=this._queue;s[i]?s[i](t):(r[i]=r[i]||[],r[i].push(t))})}),this},handle(e,t,i){const s=this._addHandlers,r=this._removeHandlers;if(s[e]||r[e])throw new Error(`Extension type ${e} already has a handler`);s[e]=t,r[e]=i;const n=this._queue;return n[e]&&(n[e].forEach(o=>t(o)),delete n[e]),this},handleByMap(e,t){return this.handle(e,i=>{t[i.name]=i.ref},i=>{delete t[i.name]})},handleByList(e,t,i=-1){return this.handle(e,s=>{t.includes(s.ref)||(t.push(s.ref),t.sort((r,n)=>kn(n,i)-kn(r,i)))},s=>{const r=t.indexOf(s.ref);r!==-1&&t.splice(r,1)})}};class xr{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get uint16View(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}const Th=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function wh(e){let t="";for(let i=0;i<e;++i)i>0&&(t+=`
else `),i<e-1&&(t+=`if(test == ${i}.0){}`);return t}function Eh(e,t){if(e===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const i=t.createShader(t.FRAGMENT_SHADER);for(;;){const s=Th.replace(/%forloop%/gi,wh(e));if(t.shaderSource(i,s),t.compileShader(i),!t.getShaderParameter(i,t.COMPILE_STATUS))e=e/2|0;else break}return e}const Ns=0,Us=1,Gs=2,zs=3,Hs=4,$s=5;class ae{constructor(){this.data=0,this.blendMode=H.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<Ns)}set blend(t){!!(this.data&1<<Ns)!==t&&(this.data^=1<<Ns)}get offsets(){return!!(this.data&1<<Us)}set offsets(t){!!(this.data&1<<Us)!==t&&(this.data^=1<<Us)}get culling(){return!!(this.data&1<<Gs)}set culling(t){!!(this.data&1<<Gs)!==t&&(this.data^=1<<Gs)}get depthTest(){return!!(this.data&1<<zs)}set depthTest(t){!!(this.data&1<<zs)!==t&&(this.data^=1<<zs)}get depthMask(){return!!(this.data&1<<$s)}set depthMask(t){!!(this.data&1<<$s)!==t&&(this.data^=1<<$s)}get clockwiseFrontFace(){return!!(this.data&1<<Hs)}set clockwiseFrontFace(t){!!(this.data&1<<Hs)!==t&&(this.data^=1<<Hs)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!==H.NONE,this._blendMode=t}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new ae;return t.depthTest=!1,t.blend=!0,t}}const yr=[];function zo(e,t){if(!e)return null;let i="";if(typeof e=="string"){const s=/\.(\w{3,4})(?:$|\?|#)/i.exec(e);s&&(i=s[1].toLowerCase())}for(let s=yr.length-1;s>=0;--s){const r=yr[s];if(r.test&&r.test(e,i))return new r(e,t)}throw new Error("Unrecognized source type to auto-detect Resource")}class Ut{constructor(t){this.items=[],this._name=t,this._aliasCount=0}emit(t,i,s,r,n,o,a,l){if(arguments.length>8)throw new Error("max arguments reached");const{name:h,items:c}=this;this._aliasCount++;for(let u=0,d=c.length;u<d;u++)c[u][h](t,i,s,r,n,o,a,l);return c===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}add(t){return t[this._name]&&(this.ensureNonAliasedItems(),this.remove(t),this.items.push(t)),this}remove(t){const i=this.items.indexOf(t);return i!==-1&&(this.ensureNonAliasedItems(),this.items.splice(i,1)),this}contains(t){return this.items.includes(t)}removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}Object.defineProperties(Ut.prototype,{dispatch:{value:Ut.prototype.emit},run:{value:Ut.prototype.emit}});class vi{constructor(t=0,i=0){this._width=t,this._height=i,this.destroyed=!1,this.internal=!1,this.onResize=new Ut("setRealSize"),this.onUpdate=new Ut("update"),this.onError=new Ut("onError")}bind(t){this.onResize.add(t),this.onUpdate.add(t),this.onError.add(t),(this._width||this._height)&&this.onResize.emit(this._width,this._height)}unbind(t){this.onResize.remove(t),this.onUpdate.remove(t),this.onError.remove(t)}resize(t,i){(t!==this._width||i!==this._height)&&(this._width=t,this._height=i,this.onResize.emit(t,i))}get valid(){return!!this._width&&!!this._height}update(){this.destroyed||this.onUpdate.emit()}load(){return Promise.resolve(this)}get width(){return this._width}get height(){return this._height}style(t,i,s){return!1}dispose(){}destroy(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)}static test(t,i){return!1}}class wi extends vi{constructor(t,i){const{width:s,height:r}=i||{};if(!s||!r)throw new Error("BufferResource width or height invalid");super(s,r),this.data=t}upload(t,i,s){const r=t.gl;r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===zt.UNPACK);const n=i.realWidth,o=i.realHeight;return s.width===n&&s.height===o?r.texSubImage2D(i.target,0,0,0,n,o,i.format,s.type,this.data):(s.width=n,s.height=o,r.texImage2D(i.target,0,s.internalFormat,n,o,0,i.format,s.type,this.data)),!0}dispose(){this.data=null}static test(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array}}const Ch={scaleMode:qt.NEAREST,format:I.RGBA,alphaMode:zt.NPM},Oe=class extends Ce{constructor(e=null,t=null){super(),t=Object.assign({},Oe.defaultOptions,t);const{alphaMode:i,mipmap:s,anisotropicLevel:r,scaleMode:n,width:o,height:a,wrapMode:l,format:h,type:c,target:u,resolution:d,resourceOptions:f}=t;e&&!(e instanceof vi)&&(e=zo(e,f),e.internal=!0),this.resolution=d||R.RESOLUTION,this.width=Math.round((o||0)*this.resolution)/this.resolution,this.height=Math.round((a||0)*this.resolution)/this.resolution,this._mipmap=s,this.anisotropicLevel=r,this._wrapMode=l,this._scaleMode=n,this.format=h,this.type=c,this.target=u,this.alphaMode=i,this.uid=Ae(),this.touched=0,this.isPowerOfTwo=!1,this._refreshPOT(),this._glTextures={},this.dirtyId=0,this.dirtyStyleId=0,this.cacheId=null,this.valid=o>0&&a>0,this.textureCacheIds=[],this.destroyed=!1,this.resource=null,this._batchEnabled=0,this._batchLocation=0,this.parentTextureArray=null,this.setResource(e)}get realWidth(){return Math.round(this.width*this.resolution)}get realHeight(){return Math.round(this.height*this.resolution)}get mipmap(){return this._mipmap}set mipmap(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)}get scaleMode(){return this._scaleMode}set scaleMode(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)}get wrapMode(){return this._wrapMode}set wrapMode(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)}setStyle(e,t){let i;return e!==void 0&&e!==this.scaleMode&&(this.scaleMode=e,i=!0),t!==void 0&&t!==this.mipmap&&(this.mipmap=t,i=!0),i&&this.dirtyStyleId++,this}setSize(e,t,i){return i=i||this.resolution,this.setRealSize(e*i,t*i,i)}setRealSize(e,t,i){return this.resolution=i||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(t)/this.resolution,this._refreshPOT(),this.update(),this}_refreshPOT(){this.isPowerOfTwo=Mn(this.realWidth)&&Mn(this.realHeight)}setResolution(e){const t=this.resolution;return t===e?this:(this.resolution=e,this.valid&&(this.width=Math.round(this.width*t)/e,this.height=Math.round(this.height*t)/e,this.emit("update",this)),this._refreshPOT(),this)}setResource(e){if(this.resource===e)return this;if(this.resource)throw new Error("Resource can be set only once");return e.bind(this),this.resource=e,this}update(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))}onError(e){this.emit("error",this,e)}destroy(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete le[this.cacheId],delete Vt[this.cacheId],this.cacheId=null),this.dispose(),Oe.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0}dispose(){this.emit("dispose",this)}castToBaseTexture(){return this}static from(e,t,i=R.STRICT_TEXTURE_CACHE){const s=typeof e=="string";let r=null;if(s)r=e;else{if(!e._pixiId){const o=(t==null?void 0:t.pixiIdPrefix)||"pixiid";e._pixiId=`${o}_${Ae()}`}r=e._pixiId}let n=le[r];if(s&&i&&!n)throw new Error(`The cacheId "${r}" does not exist in BaseTextureCache.`);return n||(n=new Oe(e,t),n.cacheId=r,Oe.addToCache(n,r)),n}static fromBuffer(e,t,i,s){e=e||new Float32Array(t*i*4);const r=new wi(e,{width:t,height:i}),n=e instanceof Float32Array?G.FLOAT:G.UNSIGNED_BYTE;return new Oe(r,Object.assign({},Ch,s||{width:t,height:i,type:n}))}static addToCache(e,t){t&&(e.textureCacheIds.includes(t)||e.textureCacheIds.push(t),le[t]&&le[t]!==e&&console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`),le[t]=e)}static removeFromCache(e){if(typeof e=="string"){const t=le[e];if(t){const i=t.textureCacheIds.indexOf(e);return i>-1&&t.textureCacheIds.splice(i,1),delete le[e],t}}else if(e!=null&&e.textureCacheIds){for(let t=0;t<e.textureCacheIds.length;++t)delete le[e.textureCacheIds[t]];return e.textureCacheIds.length=0,e}return null}};let X=Oe;X.defaultOptions={mipmap:Qt.POW2,anisotropicLevel:0,scaleMode:qt.LINEAR,wrapMode:ce.CLAMP,alphaMode:zt.UNPACK,target:$e.TEXTURE_2D,format:I.RGBA,type:G.UNSIGNED_BYTE};X._globalBatch=0;class br{constructor(){this.texArray=null,this.blend=0,this.type=Yt.TRIANGLES,this.start=0,this.size=0,this.data=null}}let Sh=0;class at{constructor(t,i=!0,s=!1){this.data=t||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=s,this.static=i,this.id=Sh++,this.disposeRunner=new Ut("disposeBuffer")}update(t){t instanceof Array&&(t=new Float32Array(t)),this.data=t||this.data,this._updateID++}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.data=null}set index(t){this.type=t?Kt.ELEMENT_ARRAY_BUFFER:Kt.ARRAY_BUFFER}get index(){return this.type===Kt.ELEMENT_ARRAY_BUFFER}static from(t){return t instanceof Array&&(t=new Float32Array(t)),new at(t)}}class ns{constructor(t,i=0,s=!1,r=G.FLOAT,n,o,a,l=1){this.buffer=t,this.size=i,this.normalized=s,this.type=r,this.stride=n,this.start=o,this.instance=a,this.divisor=l}destroy(){this.buffer=null}static from(t,i,s,r,n){return new ns(t,i,s,r,n)}}const Ah={Float32Array,Uint32Array,Int32Array,Uint8Array};function Ih(e,t){let i=0,s=0;const r={};for(let l=0;l<e.length;l++)s+=t[l],i+=e[l].length;const n=new ArrayBuffer(i*4);let o=null,a=0;for(let l=0;l<e.length;l++){const h=t[l],c=e[l],u=Uo(c);r[u]||(r[u]=new Ah[u](n)),o=r[u];for(let d=0;d<c.length;d++){const f=(d/h|0)*s+a,p=d%h;o[f+p]=c[d]}a+=h}return new Float32Array(n)}const Nn={5126:4,5123:2,5121:1};let Ph=0;const Rh={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array};class de{constructor(t=[],i={}){this.buffers=t,this.indexBuffer=null,this.attributes=i,this.glVertexArrayObjects={},this.id=Ph++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Ut("disposeGeometry"),this.refCount=0}addAttribute(t,i,s=0,r=!1,n,o,a,l=!1){if(!i)throw new Error("You must pass a buffer when creating an attribute");i instanceof at||(i instanceof Array&&(i=new Float32Array(i)),i=new at(i));const h=t.split("|");if(h.length>1){for(let u=0;u<h.length;u++)this.addAttribute(h[u],i,s,r,n);return this}let c=this.buffers.indexOf(i);return c===-1&&(this.buffers.push(i),c=this.buffers.length-1),this.attributes[t]=new ns(c,s,r,n,o,a,l),this.instanced=this.instanced||l,this}getAttribute(t){return this.attributes[t]}getBuffer(t){return this.buffers[this.getAttribute(t).buffer]}addIndex(t){return t instanceof at||(t instanceof Array&&(t=new Uint16Array(t)),t=new at(t)),t.type=Kt.ELEMENT_ARRAY_BUFFER,this.indexBuffer=t,this.buffers.includes(t)||this.buffers.push(t),this}getIndex(){return this.indexBuffer}interleave(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;const t=[],i=[],s=new at;let r;for(r in this.attributes){const n=this.attributes[r],o=this.buffers[n.buffer];t.push(o.data),i.push(n.size*Nn[n.type]/4),n.buffer=0}for(s.data=Ih(t,i),r=0;r<this.buffers.length;r++)this.buffers[r]!==this.indexBuffer&&this.buffers[r].destroy();return this.buffers=[s],this.indexBuffer&&this.buffers.push(this.indexBuffer),this}getSize(){for(const t in this.attributes){const i=this.attributes[t];return this.buffers[i.buffer].data.length/(i.stride/4||i.size)}return 0}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null}clone(){const t=new de;for(let i=0;i<this.buffers.length;i++)t.buffers[i]=new at(this.buffers[i].data.slice(0));for(const i in this.attributes){const s=this.attributes[i];t.attributes[i]=new ns(s.buffer,s.size,s.normalized,s.type,s.stride,s.start,s.instance)}return this.indexBuffer&&(t.indexBuffer=t.buffers[this.buffers.indexOf(this.indexBuffer)],t.indexBuffer.type=Kt.ELEMENT_ARRAY_BUFFER),t}static merge(t){const i=new de,s=[],r=[],n=[];let o;for(let a=0;a<t.length;a++){o=t[a];for(let l=0;l<o.buffers.length;l++)r[l]=r[l]||0,r[l]+=o.buffers[l].data.length,n[l]=0}for(let a=0;a<o.buffers.length;a++)s[a]=new Rh[Uo(o.buffers[a].data)](r[a]),i.buffers[a]=new at(s[a]);for(let a=0;a<t.length;a++){o=t[a];for(let l=0;l<o.buffers.length;l++)s[l].set(o.buffers[l].data,n[l]),n[l]+=o.buffers[l].data.length}if(i.attributes=o.attributes,o.indexBuffer){i.indexBuffer=i.buffers[o.buffers.indexOf(o.indexBuffer)],i.indexBuffer.type=Kt.ELEMENT_ARRAY_BUFFER;let a=0,l=0,h=0,c=0;for(let u=0;u<o.buffers.length;u++)if(o.buffers[u]!==o.indexBuffer){c=u;break}for(const u in o.attributes){const d=o.attributes[u];(d.buffer|0)===c&&(l+=d.size*Nn[d.type]/4)}for(let u=0;u<t.length;u++){const d=t[u].indexBuffer.data;for(let f=0;f<d.length;f++)i.indexBuffer.data[f+h]+=a;a+=t[u].buffers[c].data.length/l,h+=d.length}}return i}}class Ho extends de{constructor(t=!1){super(),this._buffer=new at(null,t,!1),this._indexBuffer=new at(null,t,!0),this.addAttribute("aVertexPosition",this._buffer,2,!1,G.FLOAT).addAttribute("aTextureCoord",this._buffer,2,!1,G.FLOAT).addAttribute("aColor",this._buffer,4,!0,G.UNSIGNED_BYTE).addAttribute("aTextureId",this._buffer,1,!0,G.FLOAT).addIndex(this._indexBuffer)}}const os=Math.PI*2,Mh=180/Math.PI,xi=Math.PI/180;var vt=(e=>(e[e.POLY=0]="POLY",e[e.RECT=1]="RECT",e[e.CIRC=2]="CIRC",e[e.ELIP=3]="ELIP",e[e.RREC=4]="RREC",e))(vt||{});class W{constructor(t=0,i=0){this.x=0,this.y=0,this.x=t,this.y=i}clone(){return new W(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,i=t){return this.x=t,this.y=i,this}toString(){return`[@pixi/math:Point x=${this.x} y=${this.y}]`}}const Di=[new W,new W,new W,new W];class K{constructor(t=0,i=0,s=0,r=0){this.x=Number(t),this.y=Number(i),this.width=Number(s),this.height=Number(r),this.type=vt.RECT}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}static get EMPTY(){return new K(0,0,0,0)}clone(){return new K(this.x,this.y,this.width,this.height)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}contains(t,i){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&i>=this.y&&i<this.y+this.height}intersects(t,i){if(!i){const C=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=C)return!1;const U=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>U}const s=this.left,r=this.right,n=this.top,o=this.bottom;if(r<=s||o<=n)return!1;const a=Di[0].set(t.left,t.top),l=Di[1].set(t.left,t.bottom),h=Di[2].set(t.right,t.top),c=Di[3].set(t.right,t.bottom);if(h.x<=a.x||l.y<=a.y)return!1;const u=Math.sign(i.a*i.d-i.b*i.c);if(u===0||(i.apply(a,a),i.apply(l,l),i.apply(h,h),i.apply(c,c),Math.max(a.x,l.x,h.x,c.x)<=s||Math.min(a.x,l.x,h.x,c.x)>=r||Math.max(a.y,l.y,h.y,c.y)<=n||Math.min(a.y,l.y,h.y,c.y)>=o))return!1;const d=u*(l.y-a.y),f=u*(a.x-l.x),p=d*s+f*n,_=d*r+f*n,m=d*s+f*o,v=d*r+f*o;if(Math.max(p,_,m,v)<=d*a.x+f*a.y||Math.min(p,_,m,v)>=d*c.x+f*c.y)return!1;const y=u*(a.y-h.y),g=u*(h.x-a.x),x=y*s+g*n,E=y*r+g*n,M=y*s+g*o,A=y*r+g*o;return!(Math.max(x,E,M,A)<=y*a.x+g*a.y||Math.min(x,E,M,A)>=y*c.x+g*c.y)}pad(t=0,i=t){return this.x-=t,this.y-=i,this.width+=t*2,this.height+=i*2,this}fit(t){const i=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),r=Math.max(this.y,t.y),n=Math.min(this.y+this.height,t.y+t.height);return this.x=i,this.width=Math.max(s-i,0),this.y=r,this.height=Math.max(n-r,0),this}ceil(t=1,i=.001){const s=Math.ceil((this.x+this.width-i)*t)/t,r=Math.ceil((this.y+this.height-i)*t)/t;return this.x=Math.floor((this.x+i)*t)/t,this.y=Math.floor((this.y+i)*t)/t,this.width=s-this.x,this.height=r-this.y,this}enlarge(t){const i=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),r=Math.min(this.y,t.y),n=Math.max(this.y+this.height,t.y+t.height);return this.x=i,this.width=s-i,this.y=r,this.height=n-r,this}toString(){return`[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}class qr{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.radius=s,this.type=vt.CIRC}clone(){return new qr(this.x,this.y,this.radius)}contains(t,i){if(this.radius<=0)return!1;const s=this.radius*this.radius;let r=this.x-t,n=this.y-i;return r*=r,n*=n,r+n<=s}getBounds(){return new K(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)}toString(){return`[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class Kr{constructor(t=0,i=0,s=0,r=0){this.x=t,this.y=i,this.width=s,this.height=r,this.type=vt.ELIP}clone(){return new Kr(this.x,this.y,this.width,this.height)}contains(t,i){if(this.width<=0||this.height<=0)return!1;let s=(t-this.x)/this.width,r=(i-this.y)/this.height;return s*=s,r*=r,s+r<=1}getBounds(){return new K(this.x-this.width,this.y-this.height,this.width,this.height)}toString(){return`[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}class We{constructor(...t){let i=Array.isArray(t[0])?t[0]:t;if(typeof i[0]!="number"){const s=[];for(let r=0,n=i.length;r<n;r++)s.push(i[r].x,i[r].y);i=s}this.points=i,this.type=vt.POLY,this.closeStroke=!0}clone(){const t=this.points.slice(),i=new We(t);return i.closeStroke=this.closeStroke,i}contains(t,i){let s=!1;const r=this.points.length/2;for(let n=0,o=r-1;n<r;o=n++){const a=this.points[n*2],l=this.points[n*2+1],h=this.points[o*2],c=this.points[o*2+1];l>i!=c>i&&t<(h-a)*((i-l)/(c-l))+a&&(s=!s)}return s}toString(){return`[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((t,i)=>`${t}, ${i}`,"")}]`}}class Zr{constructor(t=0,i=0,s=0,r=0,n=20){this.x=t,this.y=i,this.width=s,this.height=r,this.radius=n,this.type=vt.RREC}clone(){return new Zr(this.x,this.y,this.width,this.height,this.radius)}contains(t,i){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height){const s=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(i>=this.y+s&&i<=this.y+this.height-s||t>=this.x+s&&t<=this.x+this.width-s)return!0;let r=t-(this.x+s),n=i-(this.y+s);const o=s*s;if(r*r+n*n<=o||(r=t-(this.x+this.width-s),r*r+n*n<=o)||(n=i-(this.y+this.height-s),r*r+n*n<=o)||(r=t-(this.x+s),r*r+n*n<=o))return!0}return!1}toString(){return`[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}class it{constructor(t=1,i=0,s=0,r=1,n=0,o=0){this.array=null,this.a=t,this.b=i,this.c=s,this.d=r,this.tx=n,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,i,s,r,n,o){return this.a=t,this.b=i,this.c=s,this.d=r,this.tx=n,this.ty=o,this}toArray(t,i){this.array||(this.array=new Float32Array(9));const s=i||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,i){i=i||new W;const s=t.x,r=t.y;return i.x=this.a*s+this.c*r+this.tx,i.y=this.b*s+this.d*r+this.ty,i}applyInverse(t,i){i=i||new W;const s=1/(this.a*this.d+this.c*-this.b),r=t.x,n=t.y;return i.x=this.d*s*r+-this.c*s*n+(this.ty*this.c-this.tx*this.d)*s,i.y=this.a*s*n+-this.b*s*r+(-this.ty*this.a+this.tx*this.b)*s,i}translate(t,i){return this.tx+=t,this.ty+=i,this}scale(t,i){return this.a*=t,this.d*=i,this.c*=t,this.b*=i,this.tx*=t,this.ty*=i,this}rotate(t){const i=Math.cos(t),s=Math.sin(t),r=this.a,n=this.c,o=this.tx;return this.a=r*i-this.b*s,this.b=r*s+this.b*i,this.c=n*i-this.d*s,this.d=n*s+this.d*i,this.tx=o*i-this.ty*s,this.ty=o*s+this.ty*i,this}append(t){const i=this.a,s=this.b,r=this.c,n=this.d;return this.a=t.a*i+t.b*r,this.b=t.a*s+t.b*n,this.c=t.c*i+t.d*r,this.d=t.c*s+t.d*n,this.tx=t.tx*i+t.ty*r+this.tx,this.ty=t.tx*s+t.ty*n+this.ty,this}setTransform(t,i,s,r,n,o,a,l,h){return this.a=Math.cos(a+h)*n,this.b=Math.sin(a+h)*n,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(s*this.a+r*this.c),this.ty=i-(s*this.b+r*this.d),this}prepend(t){const i=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,r=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d}return this.tx=i*t.a+this.ty*t.c+t.tx,this.ty=i*t.b+this.ty*t.d+t.ty,this}decompose(t){const i=this.a,s=this.b,r=this.c,n=this.d,o=t.pivot,a=-Math.atan2(-r,n),l=Math.atan2(s,i),h=Math.abs(a+l);return h<1e-5||Math.abs(os-h)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(i*i+s*s),t.scale.y=Math.sqrt(r*r+n*n),t.position.x=this.tx+(o.x*i+o.y*r),t.position.y=this.ty+(o.x*s+o.y*n),t}invert(){const t=this.a,i=this.b,s=this.c,r=this.d,n=this.tx,o=t*r-i*s;return this.a=r/o,this.b=-i/o,this.c=-s/o,this.d=t/o,this.tx=(s*this.ty-r*n)/o,this.ty=-(t*this.ty-i*n)/o,this}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new it;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}toString(){return`[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return new it}static get TEMP_MATRIX(){return new it}}const _e=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ve=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],xe=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ye=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Tr=[],$o=[],Fi=Math.sign;function Dh(){for(let e=0;e<16;e++){const t=[];Tr.push(t);for(let i=0;i<16;i++){const s=Fi(_e[e]*_e[i]+xe[e]*ve[i]),r=Fi(ve[e]*_e[i]+ye[e]*ve[i]),n=Fi(_e[e]*xe[i]+xe[e]*ye[i]),o=Fi(ve[e]*xe[i]+ye[e]*ye[i]);for(let a=0;a<16;a++)if(_e[a]===s&&ve[a]===r&&xe[a]===n&&ye[a]===o){t.push(a);break}}}for(let e=0;e<16;e++){const t=new it;t.set(_e[e],ve[e],xe[e],ye[e],0,0),$o.push(t)}}Dh();const st={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:e=>_e[e],uY:e=>ve[e],vX:e=>xe[e],vY:e=>ye[e],inv:e=>e&8?e&15:-e&7,add:(e,t)=>Tr[e][t],sub:(e,t)=>Tr[e][st.inv(t)],rotate180:e=>e^4,isVertical:e=>(e&3)===2,byDirection:(e,t)=>Math.abs(e)*2<=Math.abs(t)?t>=0?st.S:st.N:Math.abs(t)*2<=Math.abs(e)?e>0?st.E:st.W:t>0?e>0?st.SE:st.SW:e>0?st.NE:st.NW,matrixAppendRotationInv:(e,t,i=0,s=0)=>{const r=$o[st.inv(t)];r.tx=i,r.ty=s,e.append(r)}};class re{constructor(t,i,s=0,r=0){this._x=s,this._y=r,this.cb=t,this.scope=i}clone(t=this.cb,i=this.scope){return new re(t,i,this._x,this._y)}set(t=0,i=t){return(this._x!==t||this._y!==i)&&(this._x=t,this._y=i,this.cb.call(this.scope)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[@pixi/math:ObservablePoint x=${0} y=${0} scope=${this.scope}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}const Xo=class{constructor(){this.worldTransform=new it,this.localTransform=new it,this.position=new re(this.onChange,this,0,0),this.scale=new re(this.onChange,this,1,1),this.pivot=new re(this.onChange,this,0,0),this.skew=new re(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}onChange(){this._localID++}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++}toString(){return`[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}updateLocalTransform(){const e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)}updateTransform(e){const t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){const i=e.worldTransform,s=this.worldTransform;s.a=t.a*i.a+t.b*i.c,s.b=t.a*i.b+t.b*i.d,s.c=t.c*i.a+t.d*i.c,s.d=t.c*i.b+t.d*i.d,s.tx=t.tx*i.a+t.ty*i.c+i.tx,s.ty=t.tx*i.b+t.ty*i.d+i.ty,this._parentID=e._worldID,this._worldID++}}setFromMatrix(e){e.decompose(this),this._localID++}get rotation(){return this._rotation}set rotation(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())}};let Qr=Xo;Qr.IDENTITY=new Xo;var Fh=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Bh=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;function Un(e,t,i){const s=e.createShader(t);return e.shaderSource(s,i),e.compileShader(s),s}function Xs(e){const t=new Array(e);for(let i=0;i<t.length;i++)t[i]=!1;return t}function Vo(e,t){switch(e){case"float":return 0;case"vec2":return new Float32Array(2*t);case"vec3":return new Float32Array(3*t);case"vec4":return new Float32Array(4*t);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*t);case"ivec3":return new Int32Array(3*t);case"ivec4":return new Int32Array(4*t);case"uvec2":return new Uint32Array(2*t);case"uvec3":return new Uint32Array(3*t);case"uvec4":return new Uint32Array(4*t);case"bool":return!1;case"bvec2":return Xs(2*t);case"bvec3":return Xs(3*t);case"bvec4":return Xs(4*t);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const Ye=[{test:e=>e.type==="float"&&e.size===1&&!e.isArray,code:e=>`
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `},{test:(e,t)=>(e.type==="sampler2D"||e.type==="samplerCube"||e.type==="sampler2DArray")&&e.size===1&&!e.isArray&&(t==null||t.castToBaseTexture!==void 0),code:e=>`t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`},{test:(e,t)=>e.type==="mat3"&&e.size===1&&!e.isArray&&t.a!==void 0,code:e=>`
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,codeUbo:e=>`
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `},{test:(e,t)=>e.type==="vec2"&&e.size===1&&!e.isArray&&t.x!==void 0,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,codeUbo:e=>`
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `},{test:e=>e.type==="vec2"&&e.size===1&&!e.isArray,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `},{test:(e,t)=>e.type==="vec4"&&e.size===1&&!e.isArray&&t.width!==void 0,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `},{test:(e,t)=>e.type==="vec4"&&e.size===1&&!e.isArray&&t.red!==void 0,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `},{test:(e,t)=>e.type==="vec3"&&e.size===1&&!e.isArray&&t.red!==void 0,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,codeUbo:e=>`
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `},{test:e=>e.type==="vec4"&&e.size===1&&!e.isArray,code:e=>`
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`}],Lh={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},Oh={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function kh(e,t){var s;const i=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(const r in e.uniforms){const n=t[r];if(!n){(s=e.uniforms[r])!=null&&s.group&&(e.uniforms[r].ubo?i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `):i.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));continue}const o=e.uniforms[r];let a=!1;for(let l=0;l<Ye.length;l++)if(Ye[l].test(n,o)){i.push(Ye[l].code(r,o)),a=!0;break}if(!a){const h=(n.size===1&&!n.isArray?Lh:Oh)[n.type].replace("location",`ud["${r}"].location`);i.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${h};`)}}return new Function("ud","uv","renderer","syncData",i.join(`
`))}const jo={};let Be=jo;function Nh(){if(Be===jo||Be!=null&&Be.isContextLost()){const e=R.ADAPTER.createCanvas();let t;R.PREFER_ENV>=Pe.WEBGL2&&(t=e.getContext("webgl2",{})),t||(t=e.getContext("webgl",{})||e.getContext("experimental-webgl",{}),t?t.getExtension("WEBGL_draw_buffers"):t=null),Be=t}return Be}let Bi;function Uh(){if(!Bi){Bi=At.MEDIUM;const e=Nh();e&&e.getShaderPrecisionFormat&&(Bi=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision?At.HIGH:At.MEDIUM)}return Bi}function Gn(e,t){const i=e.getShaderSource(t).split(`
`).map((h,c)=>`${c}: ${h}`),s=e.getShaderInfoLog(t),r=s.split(`
`),n={},o=r.map(h=>parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(h=>h&&!n[h]?(n[h]=!0,!0):!1),a=[""];o.forEach(h=>{i[h-1]=`%c${i[h-1]}%c`,a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const l=i.join(`
`);a[0]=l,console.error(s),console.groupCollapsed("click to view full shader code"),console.warn(...a),console.groupEnd()}function Gh(e,t,i,s){e.getProgramParameter(t,e.LINK_STATUS)||(e.getShaderParameter(i,e.COMPILE_STATUS)||Gn(e,i),e.getShaderParameter(s,e.COMPILE_STATUS)||Gn(e,s),console.error("PixiJS Error: Could not initialize shader."),e.getProgramInfoLog(t)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",e.getProgramInfoLog(t)))}const zh={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Wo(e){return zh[e]}let Li=null;const zn={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Yo(e,t){if(!Li){const i=Object.keys(zn);Li={};for(let s=0;s<i.length;++s){const r=i[s];Li[e[r]]=zn[r]}}return Li[t]}function Hn(e,t,i){if(e.substring(0,9)!=="precision"){let s=t;return t===At.HIGH&&i!==At.HIGH&&(s=At.MEDIUM),`precision ${s} float;
${e}`}else if(i!==At.HIGH&&e.substring(0,15)==="precision highp")return e.replace("precision highp","precision mediump");return e}let ri;function Hh(){if(typeof ri=="boolean")return ri;try{ri=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ri=!1}return ri}let $h=0;const Oi={},ke=class{constructor(e,t,i="pixi-shader",s={}){this.extra={},this.id=$h++,this.vertexSrc=e||ke.defaultVertexSrc,this.fragmentSrc=t||ke.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.extra=s,this.vertexSrc.substring(0,8)!=="#version"&&(i=i.replace(/\s+/g,"-"),Oi[i]?(Oi[i]++,i+=`-${Oi[i]}`):Oi[i]=1,this.vertexSrc=`#define SHADER_NAME ${i}
${this.vertexSrc}`,this.fragmentSrc=`#define SHADER_NAME ${i}
${this.fragmentSrc}`,this.vertexSrc=Hn(this.vertexSrc,ke.defaultVertexPrecision,At.HIGH),this.fragmentSrc=Hn(this.fragmentSrc,ke.defaultFragmentPrecision,Uh())),this.glPrograms={},this.syncUniforms=null}static get defaultVertexSrc(){return Bh}static get defaultFragmentSrc(){return Fh}static from(e,t,i){const s=e+t;let r=Fn[s];return r||(Fn[s]=r=new ke(e,t,i)),r}};let kt=ke;kt.defaultVertexPrecision=At.HIGH;kt.defaultFragmentPrecision=se.apple.device?At.HIGH:At.MEDIUM;let Xh=0;class Gt{constructor(t,i,s){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=Xh++,this.static=!!i,this.ubo=!!s,t instanceof at?(this.buffer=t,this.buffer.type=Kt.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=t,this.ubo&&(this.buffer=new at(new Float32Array(1)),this.buffer.type=Kt.UNIFORM_BUFFER,this.autoManage=!0))}update(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()}add(t,i,s){if(!this.ubo)this.uniforms[t]=new Gt(i,s);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")}static from(t,i,s){return new Gt(t,i,s)}static uboFrom(t,i){return new Gt(t,i??!0,!0)}}class Zt{constructor(t,i){this.uniformBindCount=0,this.program=t,i?i instanceof Gt?this.uniformGroup=i:this.uniformGroup=new Gt(i):this.uniformGroup=new Gt({}),this.disposeRunner=new Ut("disposeShader")}checkUniformExists(t,i){if(i.uniforms[t])return!0;for(const s in i.uniforms){const r=i.uniforms[s];if(r.group&&this.checkUniformExists(t,r))return!0}return!1}destroy(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()}get uniforms(){return this.uniformGroup.uniforms}static from(t,i,s){const r=kt.from(t,i);return new Zt(r,s)}}class Vh{constructor(t,i){if(this.vertexSrc=t,this.fragTemplate=i,this.programCache={},this.defaultGroupCache={},!i.includes("%count%"))throw new Error('Fragment template must contain "%count%".');if(!i.includes("%forloop%"))throw new Error('Fragment template must contain "%forloop%".')}generateShader(t){if(!this.programCache[t]){const s=new Int32Array(t);for(let n=0;n<t;n++)s[n]=n;this.defaultGroupCache[t]=Gt.from({uSamplers:s},!0);let r=this.fragTemplate;r=r.replace(/%count%/gi,`${t}`),r=r.replace(/%forloop%/gi,this.generateSampleSrc(t)),this.programCache[t]=new kt(this.vertexSrc,r)}const i={tint:new Float32Array([1,1,1,1]),translationMatrix:new it,default:this.defaultGroupCache[t]};return new Zt(this.programCache[t],i)}generateSampleSrc(t){let i="";i+=`
`,i+=`
`;for(let s=0;s<t;s++)s>0&&(i+=`
else `),s<t-1&&(i+=`if(vTextureId < ${s}.5)`),i+=`
{`,i+=`
	color = texture2D(uSamplers[${s}], vTextureCoord);`,i+=`
}`;return i+=`
`,i+=`
`,i}}class wr{constructor(){this.elements=[],this.ids=[],this.count=0}clear(){for(let t=0;t<this.count;t++)this.elements[t]=null;this.count=0}}function jh(){return!se.apple.device}function Wh(e){let t=!0;const i=R.ADAPTER.getNavigator();if(se.tablet||se.phone){if(se.apple.device){const s=i.userAgent.match(/OS (\d+)_(\d+)?/);s&&parseInt(s[1],10)<11&&(t=!1)}if(se.android.device){const s=i.userAgent.match(/Android\s([0-9.]*)/);s&&parseInt(s[1],10)<7&&(t=!1)}}return t?e:4}class xs{constructor(t){this.renderer=t}flush(){}destroy(){this.renderer=null}start(){}stop(){this.flush()}render(t){}}var Yh=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,qh=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;const Mt=class extends xs{constructor(e){super(e),this.setShaderGenerator(),this.geometryClass=Ho,this.vertexSize=6,this.state=ae.for2d(),this.size=Mt.defaultBatchSize*4,this._vertexCount=0,this._indexCount=0,this._bufferedElements=[],this._bufferedTextures=[],this._bufferSize=0,this._shader=null,this._packedGeometries=[],this._packedGeometryPoolSize=2,this._flushId=0,this._aBuffers={},this._iBuffers={},this.maxTextures=1,this.renderer.on("prerender",this.onPrerender,this),e.runners.contextChange.add(this),this._dcIndex=0,this._aIndex=0,this._iIndex=0,this._attributeBuffer=null,this._indexBuffer=null,this._tempBoundTextures=[]}static get defaultMaxTextures(){return this._defaultMaxTextures=this._defaultMaxTextures??Wh(32),this._defaultMaxTextures}static set defaultMaxTextures(e){this._defaultMaxTextures=e}static get canUploadSameBuffer(){return this._canUploadSameBuffer=this._canUploadSameBuffer??jh(),this._canUploadSameBuffer}static set canUploadSameBuffer(e){this._canUploadSameBuffer=e}get MAX_TEXTURES(){return Y("7.1.0","BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),this.maxTextures}static get defaultVertexSrc(){return qh}static get defaultFragmentTemplate(){return Yh}setShaderGenerator({vertex:e=Mt.defaultVertexSrc,fragment:t=Mt.defaultFragmentTemplate}={}){this.shaderGenerator=new Vh(e,t)}contextChange(){const e=this.renderer.gl;R.PREFER_ENV===Pe.WEBGL_LEGACY?this.maxTextures=1:(this.maxTextures=Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),Mt.defaultMaxTextures),this.maxTextures=Eh(this.maxTextures,e)),this._shader=this.shaderGenerator.generateShader(this.maxTextures);for(let t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]=new this.geometryClass;this.initFlushBuffers()}initFlushBuffers(){const{_drawCallPool:e,_textureArrayPool:t}=Mt,i=this.size/4,s=Math.floor(i/this.maxTextures)+1;for(;e.length<i;)e.push(new br);for(;t.length<s;)t.push(new wr);for(let r=0;r<this.maxTextures;r++)this._tempBoundTextures[r]=null}onPrerender(){this._flushId=0}render(e){e._texture.valid&&(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)}buildTexturesAndDrawCalls(){const{_bufferedTextures:e,maxTextures:t}=this,i=Mt._textureArrayPool,s=this.renderer.batch,r=this._tempBoundTextures,n=this.renderer.textureGC.count;let o=++X._globalBatch,a=0,l=i[0],h=0;s.copyBoundTextures(r,t);for(let c=0;c<this._bufferSize;++c){const u=e[c];e[c]=null,u._batchEnabled!==o&&(l.count>=t&&(s.boundArray(l,r,o,t),this.buildDrawCalls(l,h,c),h=c,l=i[++a],++o),u._batchEnabled=o,u.touched=n,l.elements[l.count++]=u)}l.count>0&&(s.boundArray(l,r,o,t),this.buildDrawCalls(l,h,this._bufferSize),++a,++o);for(let c=0;c<r.length;c++)r[c]=null;X._globalBatch=o}buildDrawCalls(e,t,i){const{_bufferedElements:s,_attributeBuffer:r,_indexBuffer:n,vertexSize:o}=this,a=Mt._drawCallPool;let l=this._dcIndex,h=this._aIndex,c=this._iIndex,u=a[l];u.start=this._iIndex,u.texArray=e;for(let d=t;d<i;++d){const f=s[d],p=f._texture.baseTexture,_=ko[p.alphaMode?1:0][f.blendMode];s[d]=null,t<d&&u.blend!==_&&(u.size=c-u.start,t=d,u=a[++l],u.texArray=e,u.start=c),this.packInterleavedGeometry(f,r,n,h,c),h+=f.vertexData.length/2*o,c+=f.indices.length,u.blend=_}t<i&&(u.size=c-u.start,++l),this._dcIndex=l,this._aIndex=h,this._iIndex=c}bindAndClearTexArray(e){const t=this.renderer.texture;for(let i=0;i<e.count;i++)t.bind(e.elements[i],e.ids[i]),e.elements[i]=null;e.count=0}updateGeometry(){const{_packedGeometries:e,_attributeBuffer:t,_indexBuffer:i}=this;Mt.canUploadSameBuffer?(e[this._flushId]._buffer.update(t.rawBinaryData),e[this._flushId]._indexBuffer.update(i),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,e[this._flushId]=new this.geometryClass),e[this._flushId]._buffer.update(t.rawBinaryData),e[this._flushId]._indexBuffer.update(i),this.renderer.geometry.bind(e[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)}drawBatches(){const e=this._dcIndex,{gl:t,state:i}=this.renderer,s=Mt._drawCallPool;let r=null;for(let n=0;n<e;n++){const{texArray:o,type:a,size:l,start:h,blend:c}=s[n];r!==o&&(r=o,this.bindAndClearTexArray(o)),this.state.blendMode=c,i.set(this.state),t.drawElements(a,l,t.UNSIGNED_SHORT,h*2)}}flush(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)}start(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.maxTextures),this.renderer.shader.bind(this._shader),Mt.canUploadSameBuffer&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])}stop(){this.flush()}destroy(){for(let e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),super.destroy()}getAttributeBuffer(e){const t=rs(Math.ceil(e/8)),i=Dn(t),s=t*8;this._aBuffers.length<=i&&(this._iBuffers.length=i+1);let r=this._aBuffers[s];return r||(this._aBuffers[s]=r=new xr(s*this.vertexSize*4)),r}getIndexBuffer(e){const t=rs(Math.ceil(e/12)),i=Dn(t),s=t*12;this._iBuffers.length<=i&&(this._iBuffers.length=i+1);let r=this._iBuffers[i];return r||(this._iBuffers[i]=r=new Uint16Array(s)),r}packInterleavedGeometry(e,t,i,s,r){const{uint32View:n,float32View:o}=t,a=s/this.vertexSize,l=e.uvs,h=e.indices,c=e.vertexData,u=e._texture.baseTexture._batchLocation,d=Math.min(e.worldAlpha,1),f=Z.shared.setValue(e._tintRGB).toPremultiplied(d);for(let p=0;p<c.length;p+=2)o[s++]=c[p],o[s++]=c[p+1],o[s++]=l[p],o[s++]=l[p+1],n[s++]=f,o[s++]=u;for(let p=0;p<h.length;p++)i[r++]=a+h[p]}};let Lt=Mt;Lt.defaultBatchSize=4096;Lt.extension={name:"batch",type:D.RendererPlugin};Lt._drawCallPool=[];Lt._textureArrayPool=[];N.add(Lt);var Kh=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,Zh=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;const li=class extends Zt{constructor(e,t,i){const s=kt.from(e||li.defaultVertexSrc,t||li.defaultFragmentSrc);super(s,i),this.padding=0,this.resolution=li.defaultResolution,this.multisample=li.defaultMultisample,this.enabled=!0,this.autoFit=!0,this.state=new ae}apply(e,t,i,s,r){e.applyFilter(this,t,i,s)}get blendMode(){return this.state.blendMode}set blendMode(e){this.state.blendMode=e}get resolution(){return this._resolution}set resolution(e){this._resolution=e}static get defaultVertexSrc(){return Zh}static get defaultFragmentSrc(){return Kh}};let j=li;j.defaultResolution=1;j.defaultMultisample=ot.NONE;class ys{constructor(){this.clearBeforeRender=!0,this._backgroundColor=new Z(0),this.alpha=1}init(t){this.clearBeforeRender=t.clearBeforeRender;const{backgroundColor:i,background:s,backgroundAlpha:r}=t,n=s??i;n!==void 0&&(this.color=n),this.alpha=r}get color(){return this._backgroundColor.value}set color(t){this._backgroundColor.setValue(t)}get alpha(){return this._backgroundColor.alpha}set alpha(t){this._backgroundColor.setAlpha(t)}get backgroundColor(){return this._backgroundColor}destroy(){}}ys.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};ys.extension={type:[D.RendererSystem,D.CanvasRendererSystem],name:"background"};N.add(ys);class qo{constructor(t){this.renderer=t,this.emptyRenderer=new xs(t),this.currentRenderer=this.emptyRenderer}setObjectRenderer(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())}flush(){this.setObjectRenderer(this.emptyRenderer)}reset(){this.setObjectRenderer(this.emptyRenderer)}copyBoundTextures(t,i){const{boundTextures:s}=this.renderer.texture;for(let r=i-1;r>=0;--r)t[r]=s[r]||null,t[r]&&(t[r]._batchLocation=r)}boundArray(t,i,s,r){const{elements:n,ids:o,count:a}=t;let l=0;for(let h=0;h<a;h++){const c=n[h],u=c._batchLocation;if(u>=0&&u<r&&i[u]===c){o[h]=u;continue}for(;l<r;){const d=i[l];if(d&&d._batchEnabled===s&&d._batchLocation===l){l++;continue}o[h]=l,c._batchLocation=l,i[l]=c;break}}}destroy(){this.renderer=null}}qo.extension={type:D.RendererSystem,name:"batch"};N.add(qo);let $n=0;class bs{constructor(t){this.renderer=t,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this)}get isLost(){return!this.gl||this.gl.isContextLost()}contextChange(t){this.gl=t,this.renderer.gl=t,this.renderer.CONTEXT_UID=$n++}init(t){if(t.context)this.initFromContext(t.context);else{const i=this.renderer.background.alpha<1,s=t.premultipliedAlpha;this.preserveDrawingBuffer=t.preserveDrawingBuffer,this.useContextAlpha=t.useContextAlpha,this.powerPreference=t.powerPreference,this.initFromOptions({alpha:i,premultipliedAlpha:s,antialias:t.antialias,stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:t.powerPreference})}}initFromContext(t){this.gl=t,this.validateContext(t),this.renderer.gl=t,this.renderer.CONTEXT_UID=$n++,this.renderer.runners.contextChange.emit(t);const i=this.renderer.view;i.addEventListener!==void 0&&(i.addEventListener("webglcontextlost",this.handleContextLost,!1),i.addEventListener("webglcontextrestored",this.handleContextRestored,!1))}initFromOptions(t){const i=this.createContext(this.renderer.view,t);this.initFromContext(i)}createContext(t,i){let s;if(R.PREFER_ENV>=Pe.WEBGL2&&(s=t.getContext("webgl2",i)),s)this.webGLVersion=2;else if(this.webGLVersion=1,s=t.getContext("webgl",i)||t.getContext("experimental-webgl",i),!s)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=s,this.getExtensions(),this.gl}getExtensions(){const{gl:t}=this,i={loseContext:t.getExtension("WEBGL_lose_context"),anisotropicFiltering:t.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,i,{drawBuffers:t.getExtension("WEBGL_draw_buffers"),depthTexture:t.getExtension("WEBGL_depth_texture"),vertexArrayObject:t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:t.getExtension("OES_element_index_uint"),floatTexture:t.getExtension("OES_texture_float"),floatTextureLinear:t.getExtension("OES_texture_float_linear"),textureHalfFloat:t.getExtension("OES_texture_half_float"),textureHalfFloatLinear:t.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,i,{colorBufferFloat:t.getExtension("EXT_color_buffer_float")})}handleContextLost(t){t.preventDefault(),setTimeout(()=>{this.gl.isContextLost()&&this.extensions.loseContext&&this.extensions.loseContext.restoreContext()},0)}handleContextRestored(){this.renderer.runners.contextChange.emit(this.gl)}destroy(){const t=this.renderer.view;this.renderer=null,t.removeEventListener!==void 0&&(t.removeEventListener("webglcontextlost",this.handleContextLost),t.removeEventListener("webglcontextrestored",this.handleContextRestored)),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()}postrender(){this.renderer.objectRenderer.renderingToScreen&&this.gl.flush()}validateContext(t){const i=t.getContextAttributes(),s="WebGL2RenderingContext"in globalThis&&t instanceof globalThis.WebGL2RenderingContext;s&&(this.webGLVersion=2),i&&!i.stencil&&console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");const r=s||!!t.getExtension("OES_element_index_uint");this.supports.uint32Indices=r,r||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")}}bs.defaultOptions={context:null,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:"default"};bs.extension={type:D.RendererSystem,name:"context"};N.add(bs);class Qh extends wi{upload(t,i,s){const r=t.gl;r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===zt.UNPACK);const n=i.realWidth,o=i.realHeight;return s.width===n&&s.height===o?r.texSubImage2D(i.target,0,0,0,n,o,i.format,s.type,this.data):(s.width=n,s.height=o,r.texImage2D(i.target,0,s.internalFormat,n,o,0,i.format,s.type,this.data)),!0}}class Er{constructor(t,i){this.width=Math.round(t||100),this.height=Math.round(i||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Ut("disposeFramebuffer"),this.multisample=ot.NONE}get colorTexture(){return this.colorTextures[0]}addColorTexture(t=0,i){return this.colorTextures[t]=i||new X(null,{scaleMode:qt.NEAREST,resolution:1,mipmap:Qt.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this}addDepthTexture(t){return this.depthTexture=t||new X(new Qh(null,{width:this.width,height:this.height}),{scaleMode:qt.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:Qt.OFF,format:I.DEPTH_COMPONENT,type:G.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this}enableDepth(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this}enableStencil(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this}resize(t,i){if(t=Math.round(t),i=Math.round(i),!(t===this.width&&i===this.height)){this.width=t,this.height=i,this.dirtyId++,this.dirtySize++;for(let s=0;s<this.colorTextures.length;s++){const r=this.colorTextures[s],n=r.resolution;r.setSize(t/n,i/n)}if(this.depthTexture){const s=this.depthTexture.resolution;this.depthTexture.setSize(t/s,i/s)}}}dispose(){this.disposeRunner.emit(this,!1)}destroyDepthTexture(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)}}class Ko extends X{constructor(t={}){if(typeof t=="number"){const i=arguments[0],s=arguments[1],r=arguments[2],n=arguments[3];t={width:i,height:s,scaleMode:r,resolution:n}}t.width=t.width||100,t.height=t.height||100,t.multisample??(t.multisample=ot.NONE),super(null,t),this.mipmap=Qt.OFF,this.valid=!0,this._clear=new Z([0,0,0,0]),this.framebuffer=new Er(this.realWidth,this.realHeight).addColorTexture(0,this),this.framebuffer.multisample=t.multisample,this.maskStack=[],this.filterStack=[{}]}set clearColor(t){this._clear.setValue(t)}get clearColor(){return this._clear.value}get clear(){return this._clear}resize(t,i){this.framebuffer.resize(t*this.resolution,i*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)}dispose(){this.framebuffer.dispose(),super.dispose()}destroy(){super.destroy(),this.framebuffer.destroyDepthTexture(),this.framebuffer=null}}class fe extends vi{constructor(t){const i=t,s=i.naturalWidth||i.videoWidth||i.width,r=i.naturalHeight||i.videoHeight||i.height;super(s,r),this.source=t,this.noSubImage=!1}static crossOrigin(t,i,s){s===void 0&&!i.startsWith("data:")?t.crossOrigin=bh(i):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}upload(t,i,s,r){const n=t.gl,o=i.realWidth,a=i.realHeight;if(r=r||this.source,typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement){if(!r.complete||r.naturalWidth===0)return!1}else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement&&r.readyState<=1&&r.buffered.length===0)return!1;return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===zt.UNPACK),!this.noSubImage&&i.target===n.TEXTURE_2D&&s.width===o&&s.height===a?n.texSubImage2D(n.TEXTURE_2D,0,0,0,i.format,s.type,r):(s.width=o,s.height=a,n.texImage2D(i.target,0,s.internalFormat,i.format,s.type,r)),!0}update(){if(this.destroyed)return;const t=this.source,i=t.naturalWidth||t.videoWidth||t.width,s=t.naturalHeight||t.videoHeight||t.height;this.resize(i,s),super.update()}dispose(){this.source=null}}class Zo extends fe{constructor(t,i){if(i=i||{},typeof t=="string"){const s=new Image;fe.crossOrigin(s,t,i.crossorigin),s.src=t,t=s}super(t),!t.complete&&this._width&&this._height&&(this._width=0,this._height=0),this.url=t.src,this._process=null,this.preserveBitmap=!1,this.createBitmap=(i.createBitmap??R.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,this.alphaMode=typeof i.alphaMode=="number"?i.alphaMode:null,this.bitmap=null,this._load=null,i.autoLoad!==!1&&this.load()}load(t){return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise((i,s)=>{const r=this.source;this.url=r.src;const n=()=>{this.destroyed||(r.onload=null,r.onerror=null,this.resize(r.width,r.height),this._load=null,this.createBitmap?i(this.process()):i(this))};r.complete&&r.src?n():(r.onload=n,r.onerror=o=>{s(o),this.onError.emit(o)})}),this._load)}process(){const t=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);const i=globalThis.createImageBitmap,s=!t.crossOrigin||t.crossOrigin==="anonymous";return this._process=fetch(t.src,{mode:s?"cors":"no-cors"}).then(r=>r.blob()).then(r=>i(r,0,0,t.width,t.height,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===zt.UNPACK?"premultiply":"none"})).then(r=>this.destroyed?Promise.reject():(this.bitmap=r,this.update(),this._process=null,Promise.resolve(this))),this._process}upload(t,i,s){if(typeof this.alphaMode=="number"&&(i.alphaMode=this.alphaMode),!this.createBitmap)return super.upload(t,i,s);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(super.upload(t,i,s,this.bitmap),!this.preserveBitmap){let r=!0;const n=i._glTextures;for(const o in n){const a=n[o];if(a!==s&&a.dirtyId!==i.dirtyId){r=!1;break}}r&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0}dispose(){this.source.onload=null,this.source.onerror=null,super.dispose(),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null}static test(t){return typeof HTMLImageElement<"u"&&(typeof t=="string"||t instanceof HTMLImageElement)}}class Qo{constructor(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}set(t,i,s){const r=i.width,n=i.height;if(s){const o=t.width/2/r,a=t.height/2/n,l=t.x/r+o,h=t.y/n+a;s=st.add(s,st.NW),this.x0=l+o*st.uX(s),this.y0=h+a*st.uY(s),s=st.add(s,2),this.x1=l+o*st.uX(s),this.y1=h+a*st.uY(s),s=st.add(s,2),this.x2=l+o*st.uX(s),this.y2=h+a*st.uY(s),s=st.add(s,2),this.x3=l+o*st.uX(s),this.y3=h+a*st.uY(s)}else this.x0=t.x/r,this.y0=t.y/n,this.x1=(t.x+t.width)/r,this.y1=t.y/n,this.x2=(t.x+t.width)/r,this.y2=(t.y+t.height)/n,this.x3=t.x/r,this.y3=(t.y+t.height)/n;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3}toString(){return`[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`}}const Xn=new Qo;function ki(e){e.destroy=function(){},e.on=function(){},e.once=function(){},e.emit=function(){}}class B extends Ce{constructor(t,i,s,r,n,o,a){if(super(),this.noFrame=!1,i||(this.noFrame=!0,i=new K(0,0,1,1)),t instanceof B&&(t=t.baseTexture),this.baseTexture=t,this._frame=i,this.trim=r,this.valid=!1,this._uvs=Xn,this.uvMatrix=null,this.orig=s||i,this._rotate=Number(n||0),n===!0)this._rotate=2;else if(this._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");this.defaultAnchor=o?new W(o.x,o.y):new W(0,0),this.defaultBorders=a,this._updateID=0,this.textureCacheIds=[],t.valid?this.noFrame?t.valid&&this.onBaseTextureUpdated(t):this.frame=i:t.once("loaded",this.onBaseTextureUpdated,this),this.noFrame&&t.on("update",this.onBaseTextureUpdated,this)}update(){this.baseTexture.resource&&this.baseTexture.resource.update()}onBaseTextureUpdated(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)}destroy(t){if(this.baseTexture){if(t){const{resource:i}=this.baseTexture;i!=null&&i.url&&Vt[i.url]&&B.removeFromCache(i.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,B.removeFromCache(this),this.textureCacheIds=null}clone(){var r;const t=this._frame.clone(),i=this._frame===this.orig?t:this.orig.clone(),s=new B(this.baseTexture,!this.noFrame&&t,i,(r=this.trim)==null?void 0:r.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);return this.noFrame&&(s._frame=t),s}updateUvs(){this._uvs===Xn&&(this._uvs=new Qo),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++}static from(t,i={},s=R.STRICT_TEXTURE_CACHE){const r=typeof t=="string";let n=null;if(r)n=t;else if(t instanceof X){if(!t.cacheId){const a=(i==null?void 0:i.pixiIdPrefix)||"pixiid";t.cacheId=`${a}-${Ae()}`,X.addToCache(t,t.cacheId)}n=t.cacheId}else{if(!t._pixiId){const a=(i==null?void 0:i.pixiIdPrefix)||"pixiid";t._pixiId=`${a}_${Ae()}`}n=t._pixiId}let o=Vt[n];if(r&&s&&!o)throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);return!o&&!(t instanceof X)?(i.resolution||(i.resolution=ue(t)),o=new B(new X(t,i)),o.baseTexture.cacheId=n,X.addToCache(o.baseTexture,n),B.addToCache(o,n)):!o&&t instanceof X&&(o=new B(t),B.addToCache(o,n)),o}static fromURL(t,i){const s=Object.assign({autoLoad:!1},i==null?void 0:i.resourceOptions),r=B.from(t,Object.assign({resourceOptions:s},i),!1),n=r.baseTexture.resource;return r.baseTexture.valid?Promise.resolve(r):n.load().then(()=>Promise.resolve(r))}static fromBuffer(t,i,s,r){return new B(X.fromBuffer(t,i,s,r))}static fromLoader(t,i,s,r){const n=new X(t,Object.assign({scaleMode:X.defaultOptions.scaleMode,resolution:ue(i)},r)),{resource:o}=n;o instanceof Zo&&(o.url=i);const a=new B(n);return s||(s=i),X.addToCache(a.baseTexture,s),B.addToCache(a,s),s!==i&&(X.addToCache(a.baseTexture,i),B.addToCache(a,i)),a.baseTexture.valid?Promise.resolve(a):new Promise(l=>{a.baseTexture.once("loaded",()=>l(a))})}static addToCache(t,i){i&&(t.textureCacheIds.includes(i)||t.textureCacheIds.push(i),Vt[i]&&Vt[i]!==t&&console.warn(`Texture added to the cache with an id [${i}] that already had an entry`),Vt[i]=t)}static removeFromCache(t){if(typeof t=="string"){const i=Vt[t];if(i){const s=i.textureCacheIds.indexOf(t);return s>-1&&i.textureCacheIds.splice(s,1),delete Vt[t],i}}else if(t!=null&&t.textureCacheIds){for(let i=0;i<t.textureCacheIds.length;++i)Vt[t.textureCacheIds[i]]===t&&delete Vt[t.textureCacheIds[i]];return t.textureCacheIds.length=0,t}return null}get resolution(){return this.baseTexture.resolution}get frame(){return this._frame}set frame(t){this._frame=t,this.noFrame=!1;const{x:i,y:s,width:r,height:n}=t,o=i+r>this.baseTexture.width,a=s+n>this.baseTexture.height;if(o||a){const l=o&&a?"and":"or",h=`X: ${i} + ${r} = ${i+r} > ${this.baseTexture.width}`,c=`Y: ${s} + ${n} = ${s+n} > ${this.baseTexture.height}`;throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${h} ${l} ${c}`)}this.valid=r&&n&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()}get rotate(){return this._rotate}set rotate(t){this._rotate=t,this.valid&&this.updateUvs()}get width(){return this.orig.width}get height(){return this.orig.height}castToBaseTexture(){return this.baseTexture}static get EMPTY(){return B._EMPTY||(B._EMPTY=new B(new X),ki(B._EMPTY),ki(B._EMPTY.baseTexture)),B._EMPTY}static get WHITE(){if(!B._WHITE){const t=R.ADAPTER.createCanvas(16,16),i=t.getContext("2d");t.width=16,t.height=16,i.fillStyle="white",i.fillRect(0,0,16,16),B._WHITE=new B(X.from(t)),ki(B._WHITE),ki(B._WHITE.baseTexture)}return B._WHITE}}class pe extends B{constructor(t,i){super(t,i),this.valid=!0,this.filterFrame=null,this.filterPoolKey=null,this.updateUvs()}get framebuffer(){return this.baseTexture.framebuffer}get multisample(){return this.framebuffer.multisample}set multisample(t){this.framebuffer.multisample=t}resize(t,i,s=!0){const r=this.baseTexture.resolution,n=Math.round(t*r)/r,o=Math.round(i*r)/r;this.valid=n>0&&o>0,this._frame.width=this.orig.width=n,this._frame.height=this.orig.height=o,s&&this.baseTexture.resize(n,o),this.updateUvs()}setResolution(t){const{baseTexture:i}=this;i.resolution!==t&&(i.setResolution(t),this.resize(i.width,i.height,!1))}static create(t){return new pe(new Ko(t))}}class Jo{constructor(t){this.texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}createTexture(t,i,s=ot.NONE){const r=new Ko(Object.assign({width:t,height:i,resolution:1,multisample:s},this.textureOptions));return new pe(r)}getOptimalTexture(t,i,s=1,r=ot.NONE){let n;t=Math.ceil(t*s-1e-6),i=Math.ceil(i*s-1e-6),!this.enableFullScreen||t!==this._pixelsWidth||i!==this._pixelsHeight?(t=rs(t),i=rs(i),n=((t&65535)<<16|i&65535)>>>0,r>1&&(n+=r*4294967296)):n=r>1?-r:-1,this.texturePool[n]||(this.texturePool[n]=[]);let o=this.texturePool[n].pop();return o||(o=this.createTexture(t,i,r)),o.filterPoolKey=n,o.setResolution(s),o}getFilterTexture(t,i,s){const r=this.getOptimalTexture(t.width,t.height,i||t.resolution,s||ot.NONE);return r.filterFrame=t.filterFrame,r}returnTexture(t){const i=t.filterPoolKey;t.filterFrame=null,this.texturePool[i].push(t)}returnFilterTexture(t){this.returnTexture(t)}clear(t){if(t=t!==!1,t)for(const i in this.texturePool){const s=this.texturePool[i];if(s)for(let r=0;r<s.length;r++)s[r].destroy(!0)}this.texturePool={}}setScreenSize(t){if(!(t.width===this._pixelsWidth&&t.height===this._pixelsHeight)){this.enableFullScreen=t.width>0&&t.height>0;for(const i in this.texturePool){if(!(Number(i)<0))continue;const s=this.texturePool[i];if(s)for(let r=0;r<s.length;r++)s[r].destroy(!0);this.texturePool[i]=[]}this._pixelsWidth=t.width,this._pixelsHeight=t.height}}}Jo.SCREEN_KEY=-1;class Jh extends de{constructor(){super(),this.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2])}}class ta extends de{constructor(){super(),this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.vertexBuffer=new at(this.vertices),this.uvBuffer=new at(this.uvs),this.addAttribute("aVertexPosition",this.vertexBuffer).addAttribute("aTextureCoord",this.uvBuffer).addIndex([0,1,2,0,2,3])}map(t,i){let s=0,r=0;return this.uvs[0]=s,this.uvs[1]=r,this.uvs[2]=s+i.width/t.width,this.uvs[3]=r,this.uvs[4]=s+i.width/t.width,this.uvs[5]=r+i.height/t.height,this.uvs[6]=s,this.uvs[7]=r+i.height/t.height,s=i.x,r=i.y,this.vertices[0]=s,this.vertices[1]=r,this.vertices[2]=s+i.width,this.vertices[3]=r,this.vertices[4]=s+i.width,this.vertices[5]=r+i.height,this.vertices[6]=s,this.vertices[7]=r+i.height,this.invalidate(),this}invalidate(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this}}class tc{constructor(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=ot.NONE,this.sourceFrame=new K,this.destinationFrame=new K,this.bindingSourceFrame=new K,this.bindingDestinationFrame=new K,this.filters=[],this.transform=null}clear(){this.target=null,this.filters=null,this.renderTexture=null}}const Ni=[new W,new W,new W,new W],Vs=new it;class ea{constructor(t){this.renderer=t,this.defaultFilterStack=[{}],this.texturePool=new Jo,this.statePool=[],this.quad=new Jh,this.quadUv=new ta,this.tempRect=new K,this.activeState={},this.globalUniforms=new Gt({outputFrame:new K,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}init(){this.texturePool.setScreenSize(this.renderer.view)}push(t,i){const s=this.renderer,r=this.defaultFilterStack,n=this.statePool.pop()||new tc,o=this.renderer.renderTexture;let a=i[0].resolution,l=i[0].multisample,h=i[0].padding,c=i[0].autoFit,u=i[0].legacy??!0;for(let p=1;p<i.length;p++){const _=i[p];a=Math.min(a,_.resolution),l=Math.min(l,_.multisample),h=this.useMaxPadding?Math.max(h,_.padding):h+_.padding,c=c&&_.autoFit,u=u||(_.legacy??!0)}r.length===1&&(this.defaultFilterStack[0].renderTexture=o.current),r.push(n),n.resolution=a,n.multisample=l,n.legacy=u,n.target=t,n.sourceFrame.copyFrom(t.filterArea||t.getBounds(!0)),n.sourceFrame.pad(h);const d=this.tempRect.copyFrom(o.sourceFrame);s.projection.transform&&this.transformAABB(Vs.copyFrom(s.projection.transform).invert(),d),c?(n.sourceFrame.fit(d),(n.sourceFrame.width<=0||n.sourceFrame.height<=0)&&(n.sourceFrame.width=0,n.sourceFrame.height=0)):n.sourceFrame.intersects(d)||(n.sourceFrame.width=0,n.sourceFrame.height=0),this.roundFrame(n.sourceFrame,o.current?o.current.resolution:s.resolution,o.sourceFrame,o.destinationFrame,s.projection.transform),n.renderTexture=this.getOptimalFilterTexture(n.sourceFrame.width,n.sourceFrame.height,a,l),n.filters=i,n.destinationFrame.width=n.renderTexture.width,n.destinationFrame.height=n.renderTexture.height;const f=this.tempRect;f.x=0,f.y=0,f.width=n.sourceFrame.width,f.height=n.sourceFrame.height,n.renderTexture.filterFrame=n.sourceFrame,n.bindingSourceFrame.copyFrom(o.sourceFrame),n.bindingDestinationFrame.copyFrom(o.destinationFrame),n.transform=s.projection.transform,s.projection.transform=null,o.bind(n.renderTexture,n.sourceFrame,f),s.framebuffer.clear(0,0,0,0)}pop(){const t=this.defaultFilterStack,i=t.pop(),s=i.filters;this.activeState=i;const r=this.globalUniforms.uniforms;r.outputFrame=i.sourceFrame,r.resolution=i.resolution;const n=r.inputSize,o=r.inputPixel,a=r.inputClamp;if(n[0]=i.destinationFrame.width,n[1]=i.destinationFrame.height,n[2]=1/n[0],n[3]=1/n[1],o[0]=Math.round(n[0]*i.resolution),o[1]=Math.round(n[1]*i.resolution),o[2]=1/o[0],o[3]=1/o[1],a[0]=.5*o[2],a[1]=.5*o[3],a[2]=i.sourceFrame.width*n[2]-.5*o[2],a[3]=i.sourceFrame.height*n[3]-.5*o[3],i.legacy){const h=r.filterArea;h[0]=i.destinationFrame.width,h[1]=i.destinationFrame.height,h[2]=i.sourceFrame.x,h[3]=i.sourceFrame.y,r.filterClamp=r.inputClamp}this.globalUniforms.update();const l=t[t.length-1];if(this.renderer.framebuffer.blit(),s.length===1)s[0].apply(this,i.renderTexture,l.renderTexture,jt.BLEND,i),this.returnFilterTexture(i.renderTexture);else{let h=i.renderTexture,c=this.getOptimalFilterTexture(h.width,h.height,i.resolution);c.filterFrame=h.filterFrame;let u=0;for(u=0;u<s.length-1;++u){u===1&&i.multisample>1&&(c=this.getOptimalFilterTexture(h.width,h.height,i.resolution),c.filterFrame=h.filterFrame),s[u].apply(this,h,c,jt.CLEAR,i);const d=h;h=c,c=d}s[u].apply(this,h,l.renderTexture,jt.BLEND,i),u>1&&i.multisample>1&&this.returnFilterTexture(i.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(c)}i.clear(),this.statePool.push(i)}bindAndClear(t,i=jt.CLEAR){const{renderTexture:s,state:r}=this.renderer;if(t===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,t!=null&&t.filterFrame){const o=this.tempRect;o.x=0,o.y=0,o.width=t.filterFrame.width,o.height=t.filterFrame.height,s.bind(t,t.filterFrame,o)}else t!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?s.bind(t):this.renderer.renderTexture.bind(t,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);const n=r.stateId&1||this.forceClear;(i===jt.CLEAR||i===jt.BLIT&&n)&&this.renderer.framebuffer.clear(0,0,0,0)}applyFilter(t,i,s,r){const n=this.renderer;n.state.set(t.state),this.bindAndClear(s,r),t.uniforms.uSampler=i,t.uniforms.filterGlobals=this.globalUniforms,n.shader.bind(t),t.legacy=!!t.program.attributeData.aTextureCoord,t.legacy?(this.quadUv.map(i._frame,i.filterFrame),n.geometry.bind(this.quadUv),n.geometry.draw(Yt.TRIANGLES)):(n.geometry.bind(this.quad),n.geometry.draw(Yt.TRIANGLE_STRIP))}calculateSpriteMatrix(t,i){const{sourceFrame:s,destinationFrame:r}=this.activeState,{orig:n}=i._texture,o=t.set(r.width,0,0,r.height,s.x,s.y),a=i.worldTransform.copyTo(it.TEMP_MATRIX);return a.invert(),o.prepend(a),o.scale(1/n.width,1/n.height),o.translate(i.anchor.x,i.anchor.y),o}destroy(){this.renderer=null,this.texturePool.clear(!1)}getOptimalFilterTexture(t,i,s=1,r=ot.NONE){return this.texturePool.getOptimalTexture(t,i,s,r)}getFilterTexture(t,i,s){if(typeof t=="number"){const n=t;t=i,i=n}t=t||this.activeState.renderTexture;const r=this.texturePool.getOptimalTexture(t.width,t.height,i||t.resolution,s||ot.NONE);return r.filterFrame=t.filterFrame,r}returnFilterTexture(t){this.texturePool.returnTexture(t)}emptyPool(){this.texturePool.clear(!0)}resize(){this.texturePool.setScreenSize(this.renderer.view)}transformAABB(t,i){const s=Ni[0],r=Ni[1],n=Ni[2],o=Ni[3];s.set(i.left,i.top),r.set(i.left,i.bottom),n.set(i.right,i.top),o.set(i.right,i.bottom),t.apply(s,s),t.apply(r,r),t.apply(n,n),t.apply(o,o);const a=Math.min(s.x,r.x,n.x,o.x),l=Math.min(s.y,r.y,n.y,o.y),h=Math.max(s.x,r.x,n.x,o.x),c=Math.max(s.y,r.y,n.y,o.y);i.x=a,i.y=l,i.width=h-a,i.height=c-l}roundFrame(t,i,s,r,n){if(!(t.width<=0||t.height<=0||s.width<=0||s.height<=0)){if(n){const{a:o,b:a,c:l,d:h}=n;if((Math.abs(a)>1e-4||Math.abs(l)>1e-4)&&(Math.abs(o)>1e-4||Math.abs(h)>1e-4))return}n=n?Vs.copyFrom(n):Vs.identity(),n.translate(-s.x,-s.y).scale(r.width/s.width,r.height/s.height).translate(r.x,r.y),this.transformAABB(n,t),t.ceil(i),this.transformAABB(n.invert(),t)}}}ea.extension={type:D.RendererSystem,name:"filter"};N.add(ea);class ec{constructor(t){this.framebuffer=t,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=ot.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}}const ic=new K;class ia{constructor(t){this.renderer=t,this.managedFramebuffers=[],this.unknownFramebuffer=new Er(10,10),this.msaaSamples=null}contextChange(){this.disposeAll(!0);const t=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new K,this.hasMRT=!0,this.writeDepthTexture=!0,this.renderer.context.webGLVersion===1){let i=this.renderer.context.extensions.drawBuffers,s=this.renderer.context.extensions.depthTexture;R.PREFER_ENV===Pe.WEBGL_LEGACY&&(i=null,s=null),i?t.drawBuffers=r=>i.drawBuffersWEBGL(r):(this.hasMRT=!1,t.drawBuffers=()=>{}),s||(this.writeDepthTexture=!1)}else this.msaaSamples=t.getInternalformatParameter(t.RENDERBUFFER,t.RGBA8,t.SAMPLES)}bind(t,i,s=0){const{gl:r}=this;if(t){const n=t.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(t);this.current!==t&&(this.current=t,r.bindFramebuffer(r.FRAMEBUFFER,n.framebuffer)),n.mipLevel!==s&&(t.dirtyId++,t.dirtyFormat++,n.mipLevel=s),n.dirtyId!==t.dirtyId&&(n.dirtyId=t.dirtyId,n.dirtyFormat!==t.dirtyFormat?(n.dirtyFormat=t.dirtyFormat,n.dirtySize=t.dirtySize,this.updateFramebuffer(t,s)):n.dirtySize!==t.dirtySize&&(n.dirtySize=t.dirtySize,this.resizeFramebuffer(t)));for(let o=0;o<t.colorTextures.length;o++){const a=t.colorTextures[o];this.renderer.texture.unbind(a.parentTextureArray||a)}if(t.depthTexture&&this.renderer.texture.unbind(t.depthTexture),i){const o=i.width>>s,a=i.height>>s,l=o/i.width;this.setViewport(i.x*l,i.y*l,o,a)}else{const o=t.width>>s,a=t.height>>s;this.setViewport(0,0,o,a)}}else this.current&&(this.current=null,r.bindFramebuffer(r.FRAMEBUFFER,null)),i?this.setViewport(i.x,i.y,i.width,i.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)}setViewport(t,i,s,r){const n=this.viewport;t=Math.round(t),i=Math.round(i),s=Math.round(s),r=Math.round(r),(n.width!==s||n.height!==r||n.x!==t||n.y!==i)&&(n.x=t,n.y=i,n.width=s,n.height=r,this.gl.viewport(t,i,s,r))}get size(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}}clear(t,i,s,r,n=ar.COLOR|ar.DEPTH){const{gl:o}=this;o.clearColor(t,i,s,r),o.clear(n)}initFramebuffer(t){const{gl:i}=this,s=new ec(i.createFramebuffer());return s.multisample=this.detectSamples(t.multisample),t.glFramebuffers[this.CONTEXT_UID]=s,this.managedFramebuffers.push(t),t.disposeRunner.add(this),s}resizeFramebuffer(t){const{gl:i}=this,s=t.glFramebuffers[this.CONTEXT_UID];s.stencil&&(i.bindRenderbuffer(i.RENDERBUFFER,s.stencil),s.msaaBuffer?i.renderbufferStorageMultisample(i.RENDERBUFFER,s.multisample,i.DEPTH24_STENCIL8,t.width,t.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,t.width,t.height));const r=t.colorTextures;let n=r.length;i.drawBuffers||(n=Math.min(n,1));for(let o=0;o<n;o++){const a=r[o],l=a.parentTextureArray||a;this.renderer.texture.bind(l,0),o===0&&s.msaaBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,s.msaaBuffer),i.renderbufferStorageMultisample(i.RENDERBUFFER,s.multisample,l._glTextures[this.CONTEXT_UID].internalFormat,t.width,t.height))}t.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(t.depthTexture,0)}updateFramebuffer(t,i){const{gl:s}=this,r=t.glFramebuffers[this.CONTEXT_UID],n=t.colorTextures;let o=n.length;s.drawBuffers||(o=Math.min(o,1)),r.multisample>1&&this.canMultisampleFramebuffer(t)?r.msaaBuffer=r.msaaBuffer||s.createRenderbuffer():r.msaaBuffer&&(s.deleteRenderbuffer(r.msaaBuffer),r.msaaBuffer=null,r.blitFramebuffer&&(r.blitFramebuffer.dispose(),r.blitFramebuffer=null));const a=[];for(let l=0;l<o;l++){const h=n[l],c=h.parentTextureArray||h;this.renderer.texture.bind(c,0),l===0&&r.msaaBuffer?(s.bindRenderbuffer(s.RENDERBUFFER,r.msaaBuffer),s.renderbufferStorageMultisample(s.RENDERBUFFER,r.multisample,c._glTextures[this.CONTEXT_UID].internalFormat,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,r.msaaBuffer)):(s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+l,h.target,c._glTextures[this.CONTEXT_UID].texture,i),a.push(s.COLOR_ATTACHMENT0+l))}if(a.length>1&&s.drawBuffers(a),t.depthTexture&&this.writeDepthTexture){const h=t.depthTexture;this.renderer.texture.bind(h,0),s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,h._glTextures[this.CONTEXT_UID].texture,i)}(t.stencil||t.depth)&&!(t.depthTexture&&this.writeDepthTexture)?(r.stencil=r.stencil||s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,r.stencil),r.msaaBuffer?s.renderbufferStorageMultisample(s.RENDERBUFFER,r.multisample,s.DEPTH24_STENCIL8,t.width,t.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,t.width,t.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,r.stencil)):r.stencil&&(s.deleteRenderbuffer(r.stencil),r.stencil=null)}canMultisampleFramebuffer(t){return this.renderer.context.webGLVersion!==1&&t.colorTextures.length<=1&&!t.depthTexture}detectSamples(t){const{msaaSamples:i}=this;let s=ot.NONE;if(t<=1||i===null)return s;for(let r=0;r<i.length;r++)if(i[r]<=t){s=i[r];break}return s===1&&(s=ot.NONE),s}blit(t,i,s){const{current:r,renderer:n,gl:o,CONTEXT_UID:a}=this;if(n.context.webGLVersion!==2||!r)return;const l=r.glFramebuffers[a];if(!l)return;if(!t){if(!l.msaaBuffer)return;const c=r.colorTextures[0];if(!c)return;l.blitFramebuffer||(l.blitFramebuffer=new Er(r.width,r.height),l.blitFramebuffer.addColorTexture(0,c)),t=l.blitFramebuffer,t.colorTextures[0]!==c&&(t.colorTextures[0]=c,t.dirtyId++,t.dirtyFormat++),(t.width!==r.width||t.height!==r.height)&&(t.width=r.width,t.height=r.height,t.dirtyId++,t.dirtySize++)}i||(i=ic,i.width=r.width,i.height=r.height),s||(s=i);const h=i.width===s.width&&i.height===s.height;this.bind(t),o.bindFramebuffer(o.READ_FRAMEBUFFER,l.framebuffer),o.blitFramebuffer(i.left,i.top,i.right,i.bottom,s.left,s.top,s.right,s.bottom,o.COLOR_BUFFER_BIT,h?o.NEAREST:o.LINEAR)}disposeFramebuffer(t,i){const s=t.glFramebuffers[this.CONTEXT_UID],r=this.gl;if(!s)return;delete t.glFramebuffers[this.CONTEXT_UID];const n=this.managedFramebuffers.indexOf(t);n>=0&&this.managedFramebuffers.splice(n,1),t.disposeRunner.remove(this),i||(r.deleteFramebuffer(s.framebuffer),s.msaaBuffer&&r.deleteRenderbuffer(s.msaaBuffer),s.stencil&&r.deleteRenderbuffer(s.stencil)),s.blitFramebuffer&&this.disposeFramebuffer(s.blitFramebuffer,i)}disposeAll(t){const i=this.managedFramebuffers;this.managedFramebuffers=[];for(let s=0;s<i.length;s++)this.disposeFramebuffer(i[s],t)}forceStencil(){const t=this.current;if(!t)return;const i=t.glFramebuffers[this.CONTEXT_UID];if(!i||i.stencil)return;t.stencil=!0;const s=t.width,r=t.height,n=this.gl,o=n.createRenderbuffer();n.bindRenderbuffer(n.RENDERBUFFER,o),i.msaaBuffer?n.renderbufferStorageMultisample(n.RENDERBUFFER,i.multisample,n.DEPTH24_STENCIL8,s,r):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,s,r),i.stencil=o,n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,o)}reset(){this.current=this.unknownFramebuffer,this.viewport=new K}destroy(){this.renderer=null}}ia.extension={type:D.RendererSystem,name:"framebuffer"};N.add(ia);const js={5126:4,5123:2,5121:1};class sa{constructor(t){this.renderer=t,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}contextChange(){this.disposeAll(!0);const t=this.gl=this.renderer.gl,i=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,i.webGLVersion!==2){let s=this.renderer.context.extensions.vertexArrayObject;R.PREFER_ENV===Pe.WEBGL_LEGACY&&(s=null),s?(t.createVertexArray=()=>s.createVertexArrayOES(),t.bindVertexArray=r=>s.bindVertexArrayOES(r),t.deleteVertexArray=r=>s.deleteVertexArrayOES(r)):(this.hasVao=!1,t.createVertexArray=()=>null,t.bindVertexArray=()=>null,t.deleteVertexArray=()=>null)}if(i.webGLVersion!==2){const s=t.getExtension("ANGLE_instanced_arrays");s?(t.vertexAttribDivisor=(r,n)=>s.vertexAttribDivisorANGLE(r,n),t.drawElementsInstanced=(r,n,o,a,l)=>s.drawElementsInstancedANGLE(r,n,o,a,l),t.drawArraysInstanced=(r,n,o,a)=>s.drawArraysInstancedANGLE(r,n,o,a)):this.hasInstance=!1}this.canUseUInt32ElementIndex=i.webGLVersion===2||!!i.extensions.uint32ElementIndex}bind(t,i){i=i||this.renderer.shader.shader;const{gl:s}=this;let r=t.glVertexArrayObjects[this.CONTEXT_UID],n=!1;r||(this.managedGeometries[t.id]=t,t.disposeRunner.add(this),t.glVertexArrayObjects[this.CONTEXT_UID]=r={},n=!0);const o=r[i.program.id]||this.initGeometryVao(t,i,n);this._activeGeometry=t,this._activeVao!==o&&(this._activeVao=o,this.hasVao?s.bindVertexArray(o):this.activateVao(t,i.program)),this.updateBuffers()}reset(){this.unbind()}updateBuffers(){const t=this._activeGeometry,i=this.renderer.buffer;for(let s=0;s<t.buffers.length;s++){const r=t.buffers[s];i.update(r)}}checkCompatibility(t,i){const s=t.attributes,r=i.attributeData;for(const n in r)if(!s[n])throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)}getSignature(t,i){const s=t.attributes,r=i.attributeData,n=["g",t.id];for(const o in s)r[o]&&n.push(o,r[o].location);return n.join("-")}initGeometryVao(t,i,s=!0){const r=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,a=i.program;a.glPrograms[n]||this.renderer.shader.generateProgram(i),this.checkCompatibility(t,a);const l=this.getSignature(t,a),h=t.glVertexArrayObjects[this.CONTEXT_UID];let c=h[l];if(c)return h[a.id]=c,c;const u=t.buffers,d=t.attributes,f={},p={};for(const _ in u)f[_]=0,p[_]=0;for(const _ in d)!d[_].size&&a.attributeData[_]?d[_].size=a.attributeData[_].size:d[_].size||console.warn(`PIXI Geometry attribute '${_}' size cannot be determined (likely the bound shader does not have the attribute)`),f[d[_].buffer]+=d[_].size*js[d[_].type];for(const _ in d){const m=d[_],v=m.size;m.stride===void 0&&(f[m.buffer]===v*js[m.type]?m.stride=0:m.stride=f[m.buffer]),m.start===void 0&&(m.start=p[m.buffer],p[m.buffer]+=v*js[m.type])}c=r.createVertexArray(),r.bindVertexArray(c);for(let _=0;_<u.length;_++){const m=u[_];o.bind(m),s&&m._glBuffers[n].refCount++}return this.activateVao(t,a),h[a.id]=c,h[l]=c,r.bindVertexArray(null),o.unbind(Kt.ARRAY_BUFFER),c}disposeGeometry(t,i){var a;if(!this.managedGeometries[t.id])return;delete this.managedGeometries[t.id];const s=t.glVertexArrayObjects[this.CONTEXT_UID],r=this.gl,n=t.buffers,o=(a=this.renderer)==null?void 0:a.buffer;if(t.disposeRunner.remove(this),!!s){if(o)for(let l=0;l<n.length;l++){const h=n[l]._glBuffers[this.CONTEXT_UID];h&&(h.refCount--,h.refCount===0&&!i&&o.dispose(n[l],i))}if(!i){for(const l in s)if(l[0]==="g"){const h=s[l];this._activeVao===h&&this.unbind(),r.deleteVertexArray(h)}}delete t.glVertexArrayObjects[this.CONTEXT_UID]}}disposeAll(t){const i=Object.keys(this.managedGeometries);for(let s=0;s<i.length;s++)this.disposeGeometry(this.managedGeometries[i[s]],t)}activateVao(t,i){const s=this.gl,r=this.CONTEXT_UID,n=this.renderer.buffer,o=t.buffers,a=t.attributes;t.indexBuffer&&n.bind(t.indexBuffer);let l=null;for(const h in a){const c=a[h],u=o[c.buffer],d=u._glBuffers[r];if(i.attributeData[h]){l!==d&&(n.bind(u),l=d);const f=i.attributeData[h].location;if(s.enableVertexAttribArray(f),s.vertexAttribPointer(f,c.size,c.type||s.FLOAT,c.normalized,c.stride,c.start),c.instance)if(this.hasInstance)s.vertexAttribDivisor(f,c.divisor);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}}draw(t,i,s,r){const{gl:n}=this,o=this._activeGeometry;if(o.indexBuffer){const a=o.indexBuffer.data.BYTES_PER_ELEMENT,l=a===2?n.UNSIGNED_SHORT:n.UNSIGNED_INT;a===2||a===4&&this.canUseUInt32ElementIndex?o.instanced?n.drawElementsInstanced(t,i||o.indexBuffer.data.length,l,(s||0)*a,r||1):n.drawElements(t,i||o.indexBuffer.data.length,l,(s||0)*a):console.warn("unsupported index buffer type: uint32")}else o.instanced?n.drawArraysInstanced(t,s,i||o.getSize(),r||1):n.drawArrays(t,s,i||o.getSize());return this}unbind(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null}destroy(){this.renderer=null}}sa.extension={type:D.RendererSystem,name:"geometry"};N.add(sa);const Vn=new it;class ra{constructor(t,i){this._texture=t,this.mapCoord=new it,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof i>"u"?.5:i,this.isSimple=!1}get texture(){return this._texture}set texture(t){this._texture=t,this._textureID=-1}multiplyUvs(t,i){i===void 0&&(i=t);const s=this.mapCoord;for(let r=0;r<t.length;r+=2){const n=t[r],o=t[r+1];i[r]=n*s.a+o*s.c+s.tx,i[r+1]=n*s.b+o*s.d+s.ty}return i}update(t){const i=this._texture;if(!i||!i.valid||!t&&this._textureID===i._updateID)return!1;this._textureID=i._updateID,this._updateID++;const s=i._uvs;this.mapCoord.set(s.x1-s.x0,s.y1-s.y0,s.x3-s.x0,s.y3-s.y0,s.x0,s.y0);const r=i.orig,n=i.trim;n&&(Vn.set(r.width/n.width,0,0,r.height/n.height,-n.x/n.width,-n.y/n.height),this.mapCoord.append(Vn));const o=i.baseTexture,a=this.uClampFrame,l=this.clampMargin/o.resolution,h=this.clampOffset;return a[0]=(i._frame.x+l+h)/o.width,a[1]=(i._frame.y+l+h)/o.height,a[2]=(i._frame.x+i._frame.width-l+h)/o.width,a[3]=(i._frame.y+i._frame.height-l+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight,this.isSimple=i._frame.width===o.width&&i._frame.height===o.height&&i.rotate===0,!0}}var sc=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,rc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;class nc extends j{constructor(t,i,s){let r=null;typeof t!="string"&&i===void 0&&s===void 0&&(r=t,t=void 0,i=void 0,s=void 0),super(t||rc,i||sc,s),this.maskSprite=r,this.maskMatrix=new it}get maskSprite(){return this._maskSprite}set maskSprite(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)}apply(t,i,s,r){const n=this._maskSprite,o=n._texture;o.valid&&(o.uvMatrix||(o.uvMatrix=new ra(o,0)),o.uvMatrix.update(),this.uniforms.npmAlpha=o.baseTexture.alphaMode?0:1,this.uniforms.mask=o,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,n).prepend(o.uvMatrix.mapCoord),this.uniforms.alpha=n.worldAlpha,this.uniforms.maskClamp=o.uvMatrix.uClampFrame,t.applyFilter(this,i,s,r))}}class oc{constructor(t=null){this.type=ut.NONE,this.autoDetect=!0,this.maskObject=t||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=j.defaultMultisample,this.enabled=!0,this.colorMask=15,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._colorMask=15,this._target=null}get filter(){return this._filters?this._filters[0]:null}set filter(t){t?this._filters?this._filters[0]=t:this._filters=[t]:this._filters=null}reset(){this.pooled&&(this.maskObject=null,this.type=ut.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null}copyCountersOrReset(t){t?(this._stencilCounter=t._stencilCounter,this._scissorCounter=t._scissorCounter,this._scissorRect=t._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)}}class na{constructor(t){this.renderer=t,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}setMaskStack(t){this.maskStack=t,this.renderer.scissor.setMaskStack(t),this.renderer.stencil.setMaskStack(t)}push(t,i){let s=i;if(!s.isMaskData){const n=this.maskDataPool.pop()||new oc;n.pooled=!0,n.maskObject=i,s=n}const r=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(s.copyCountersOrReset(r),s._colorMask=r?r._colorMask:15,s.autoDetect&&this.detect(s),s._target=t,s.type!==ut.SPRITE&&this.maskStack.push(s),s.enabled)switch(s.type){case ut.SCISSOR:this.renderer.scissor.push(s);break;case ut.STENCIL:this.renderer.stencil.push(s);break;case ut.SPRITE:s.copyCountersOrReset(null),this.pushSpriteMask(s);break;case ut.COLOR:this.pushColorMask(s);break}s.type===ut.SPRITE&&this.maskStack.push(s)}pop(t){const i=this.maskStack.pop();if(!(!i||i._target!==t)){if(i.enabled)switch(i.type){case ut.SCISSOR:this.renderer.scissor.pop(i);break;case ut.STENCIL:this.renderer.stencil.pop(i.maskObject);break;case ut.SPRITE:this.popSpriteMask(i);break;case ut.COLOR:this.popColorMask(i);break}if(i.reset(),i.pooled&&this.maskDataPool.push(i),this.maskStack.length!==0){const s=this.maskStack[this.maskStack.length-1];s.type===ut.SPRITE&&s._filters&&(s._filters[0].maskSprite=s.maskObject)}}}detect(t){const i=t.maskObject;i?i.isSprite?t.type=ut.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(t)?t.type=ut.SCISSOR:t.type=ut.STENCIL:t.type=ut.COLOR}pushSpriteMask(t){const{maskObject:i}=t,s=t._target;let r=t._filters;r||(r=this.alphaMaskPool[this.alphaMaskIndex],r||(r=this.alphaMaskPool[this.alphaMaskIndex]=[new nc]));const n=this.renderer,o=n.renderTexture;let a,l;if(o.current){const c=o.current;a=t.resolution||c.resolution,l=t.multisample??c.multisample}else a=t.resolution||n.resolution,l=t.multisample??n.multisample;r[0].resolution=a,r[0].multisample=l,r[0].maskSprite=i;const h=s.filterArea;s.filterArea=i.getBounds(!0),n.filter.push(s,r),s.filterArea=h,t._filters||this.alphaMaskIndex++}popSpriteMask(t){this.renderer.filter.pop(),t._filters?t._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)}pushColorMask(t){const i=t._colorMask,s=t._colorMask=i&t.colorMask;s!==i&&this.renderer.gl.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)}popColorMask(t){const i=t._colorMask,s=this.maskStack.length>0?this.maskStack[this.maskStack.length-1]._colorMask:15;s!==i&&this.renderer.gl.colorMask((s&1)!==0,(s&2)!==0,(s&4)!==0,(s&8)!==0)}destroy(){this.renderer=null}}na.extension={type:D.RendererSystem,name:"mask"};N.add(na);class oa{constructor(t){this.renderer=t,this.maskStack=[],this.glConst=0}getStackLength(){return this.maskStack.length}setMaskStack(t){const{gl:i}=this.renderer,s=this.getStackLength();this.maskStack=t;const r=this.getStackLength();r!==s&&(r===0?i.disable(this.glConst):(i.enable(this.glConst),this._useCurrent()))}_useCurrent(){}destroy(){this.renderer=null,this.maskStack=null}}const jn=new it,Wn=[],qi=class extends oa{constructor(e){super(e),this.glConst=R.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST}getStackLength(){const e=this.maskStack[this.maskStack.length-1];return e?e._scissorCounter:0}calcScissorRect(e){if(e._scissorRectLocal)return;const t=e._scissorRect,{maskObject:i}=e,{renderer:s}=this,r=s.renderTexture,n=i.getBounds(!0,Wn.pop()??new K);this.roundFrameToPixels(n,r.current?r.current.resolution:s.resolution,r.sourceFrame,r.destinationFrame,s.projection.transform),t&&n.fit(t),e._scissorRectLocal=n}static isMatrixRotated(e){if(!e)return!1;const{a:t,b:i,c:s,d:r}=e;return(Math.abs(i)>1e-4||Math.abs(s)>1e-4)&&(Math.abs(t)>1e-4||Math.abs(r)>1e-4)}testScissor(e){const{maskObject:t}=e;if(!t.isFastRect||!t.isFastRect()||qi.isMatrixRotated(t.worldTransform)||qi.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(e);const i=e._scissorRectLocal;return i.width>0&&i.height>0}roundFrameToPixels(e,t,i,s,r){qi.isMatrixRotated(r)||(r=r?jn.copyFrom(r):jn.identity(),r.translate(-i.x,-i.y).scale(s.width/i.width,s.height/i.height).translate(s.x,s.y),this.renderer.filter.transformAABB(r,e),e.fit(s),e.x=Math.round(e.x*t),e.y=Math.round(e.y*t),e.width=Math.round(e.width*t),e.height=Math.round(e.height*t))}push(e){e._scissorRectLocal||this.calcScissorRect(e);const{gl:t}=this.renderer;e._scissorRect||t.enable(t.SCISSOR_TEST),e._scissorCounter++,e._scissorRect=e._scissorRectLocal,this._useCurrent()}pop(e){const{gl:t}=this.renderer;e&&Wn.push(e._scissorRectLocal),this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)}_useCurrent(){const e=this.maskStack[this.maskStack.length-1]._scissorRect;let t;this.renderer.renderTexture.current?t=e.y:t=this.renderer.height-e.height-e.y,this.renderer.gl.scissor(e.x,t,e.width,e.height)}};let aa=qi;aa.extension={type:D.RendererSystem,name:"scissor"};N.add(aa);class la extends oa{constructor(t){super(t),this.glConst=R.ADAPTER.getWebGLRenderingContext().STENCIL_TEST}getStackLength(){const t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0}push(t){const i=t.maskObject,{gl:s}=this.renderer,r=t._stencilCounter;r===0&&(this.renderer.framebuffer.forceStencil(),s.clearStencil(0),s.clear(s.STENCIL_BUFFER_BIT),s.enable(s.STENCIL_TEST)),t._stencilCounter++;const n=t._colorMask;n!==0&&(t._colorMask=0,s.colorMask(!1,!1,!1,!1)),s.stencilFunc(s.EQUAL,r,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.INCR),i.renderable=!0,i.render(this.renderer),this.renderer.batch.flush(),i.renderable=!1,n!==0&&(t._colorMask=n,s.colorMask((n&1)!==0,(n&2)!==0,(n&4)!==0,(n&8)!==0)),this._useCurrent()}pop(t){const i=this.renderer.gl;if(this.getStackLength()===0)i.disable(i.STENCIL_TEST);else{const s=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null,r=s?s._colorMask:15;r!==0&&(s._colorMask=0,i.colorMask(!1,!1,!1,!1)),i.stencilOp(i.KEEP,i.KEEP,i.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,r!==0&&(s._colorMask=r,i.colorMask((r&1)!==0,(r&2)!==0,(r&4)!==0,(r&8)!==0)),this._useCurrent()}}_useCurrent(){const t=this.renderer.gl;t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)}}la.extension={type:D.RendererSystem,name:"stencil"};N.add(la);class ha{constructor(t){this.renderer=t,this.plugins={},Object.defineProperties(this.plugins,{extract:{enumerable:!1,get(){return Y("7.0.0","renderer.plugins.extract has moved to renderer.extract"),t.extract}},prepare:{enumerable:!1,get(){return Y("7.0.0","renderer.plugins.prepare has moved to renderer.prepare"),t.prepare}},interaction:{enumerable:!1,get(){return Y("7.0.0","renderer.plugins.interaction has been deprecated, use renderer.events"),t.events}}})}init(){const t=this.rendererPlugins;for(const i in t)this.plugins[i]=new t[i](this.renderer)}destroy(){for(const t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null}}ha.extension={type:[D.RendererSystem,D.CanvasRendererSystem],name:"_plugin"};N.add(ha);class ca{constructor(t){this.renderer=t,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new it,this.transform=null}update(t,i,s,r){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=i||this.sourceFrame||t,this.calculateProjection(this.destinationFrame,this.sourceFrame,s,r),this.transform&&this.projectionMatrix.append(this.transform);const n=this.renderer;n.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,n.globalUniforms.update(),n.shader.shader&&n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)}calculateProjection(t,i,s,r){const n=this.projectionMatrix,o=r?-1:1;n.identity(),n.a=1/i.width*2,n.d=o*(1/i.height*2),n.tx=-1-i.x*n.a,n.ty=-o-i.y*n.d}setTransform(t){}destroy(){this.renderer=null}}ca.extension={type:D.RendererSystem,name:"projection"};N.add(ca);const ac=new Qr;class ua{constructor(t){this.renderer=t,this._tempMatrix=new it}generateTexture(t,i){const{region:s,...r}=i||{},n=s||t.getLocalBounds(null,!0);n.width===0&&(n.width=1),n.height===0&&(n.height=1);const o=pe.create({width:n.width,height:n.height,...r});this._tempMatrix.tx=-n.x,this._tempMatrix.ty=-n.y;const a=t.transform;return t.transform=ac,this.renderer.render(t,{renderTexture:o,transform:this._tempMatrix,skipUpdateTransform:!!t.parent,blit:!0}),t.transform=a,o}destroy(){}}ua.extension={type:[D.RendererSystem,D.CanvasRendererSystem],name:"textureGenerator"};N.add(ua);const me=new K,ni=new K;class da{constructor(t){this.renderer=t,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new K,this.destinationFrame=new K,this.viewportFrame=new K}bind(t=null,i,s){const r=this.renderer;this.current=t;let n,o,a;t?(n=t.baseTexture,a=n.resolution,i||(me.width=t.frame.width,me.height=t.frame.height,i=me),s||(ni.x=t.frame.x,ni.y=t.frame.y,ni.width=i.width,ni.height=i.height,s=ni),o=n.framebuffer):(a=r.resolution,i||(me.width=r._view.screen.width,me.height=r._view.screen.height,i=me),s||(s=me,s.width=i.width,s.height=i.height));const l=this.viewportFrame;l.x=s.x*a,l.y=s.y*a,l.width=s.width*a,l.height=s.height*a,t||(l.y=r.view.height-(l.y+l.height)),l.ceil(),this.renderer.framebuffer.bind(o,l),this.renderer.projection.update(s,i,a,!o),t?this.renderer.mask.setMaskStack(n.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(i),this.destinationFrame.copyFrom(s)}clear(t,i){const s=this.current?this.current.baseTexture.clear:this.renderer.background.backgroundColor,r=t?Z.shared.setValue(t):s,n=this.destinationFrame,o=this.current?this.current.baseTexture:this.renderer._view.screen,a=n.width!==o.width||n.height!==o.height;if(a){let{x:l,y:h,width:c,height:u}=this.viewportFrame;l=Math.round(l),h=Math.round(h),c=Math.round(c),u=Math.round(u),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(l,h,c,u)}this.renderer.framebuffer.clear(r.red,r.green,r.blue,r.alpha,i),a&&this.renderer.scissor.pop()}resize(){this.bind(null)}reset(){this.bind(null)}destroy(){this.renderer=null}}da.extension={type:D.RendererSystem,name:"renderTexture"};N.add(da);class lc{constructor(t,i){this.program=t,this.uniformData=i,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}destroy(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null}}function hc(e,t){const i={},s=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const n=t.getActiveAttrib(e,r);if(n.name.startsWith("gl_"))continue;const o=Yo(t,n.type),a={type:o,name:n.name,size:Wo(o),location:t.getAttribLocation(e,n.name)};i[n.name]=a}return i}function cc(e,t){const i={},s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<s;r++){const n=t.getActiveUniform(e,r),o=n.name.replace(/\[.*?\]$/,""),a=!!n.name.match(/\[.*?\]$/),l=Yo(t,n.type);i[o]={name:o,index:r,type:l,size:n.size,isArray:a,value:Vo(l,n.size)}}return i}function uc(e,t){var l;const i=Un(e,e.VERTEX_SHADER,t.vertexSrc),s=Un(e,e.FRAGMENT_SHADER,t.fragmentSrc),r=e.createProgram();e.attachShader(r,i),e.attachShader(r,s);const n=(l=t.extra)==null?void 0:l.transformFeedbackVaryings;if(n&&(typeof e.transformFeedbackVaryings!="function"?console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given."):e.transformFeedbackVaryings(r,n.names,n.bufferMode==="separate"?e.SEPARATE_ATTRIBS:e.INTERLEAVED_ATTRIBS)),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)||Gh(e,r,i,s),t.attributeData=hc(r,e),t.uniformData=cc(r,e),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)){const h=Object.keys(t.attributeData);h.sort((c,u)=>c>u?1:-1);for(let c=0;c<h.length;c++)t.attributeData[h[c]].location=c,e.bindAttribLocation(r,c,h[c]);e.linkProgram(r)}e.deleteShader(i),e.deleteShader(s);const o={};for(const h in t.uniformData){const c=t.uniformData[h];o[h]={location:e.getUniformLocation(r,h),value:Vo(c.type,c.size)}}return new lc(r,o)}function dc(e,t,i,s,r){i.buffer.update(r)}const fc={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},fa={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function pc(e){const t=e.map(n=>({data:n,offset:0,dataLen:0,dirty:0}));let i=0,s=0,r=0;for(let n=0;n<t.length;n++){const o=t[n];if(i=fa[o.data.type],o.data.size>1&&(i=Math.max(i,16)*o.data.size),o.dataLen=i,s%i!==0&&s<16){const a=s%i%16;s+=a,r+=a}s+i>16?(r=Math.ceil(r/16)*16,o.offset=r,r+=i,s=i):(o.offset=r,s+=i,r+=i)}return r=Math.ceil(r/16)*16,{uboElements:t,size:r}}function mc(e,t){const i=[];for(const s in e)t[s]&&i.push(t[s]);return i.sort((s,r)=>s.index-r.index),i}function gc(e,t){if(!e.autoManage)return{size:0,syncFunc:dc};const i=mc(e.uniforms,t),{uboElements:s,size:r}=pc(i),n=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];for(let o=0;o<s.length;o++){const a=s[o],l=e.uniforms[a.data.name],h=a.data.name;let c=!1;for(let u=0;u<Ye.length;u++){const d=Ye[u];if(d.codeUbo&&d.test(a.data,l)){n.push(`offset = ${a.offset/4};`,Ye[u].codeUbo(a.data.name,l)),c=!0;break}}if(!c)if(a.data.size>1){const u=Wo(a.data.type),d=Math.max(fa[a.data.type]/16,1),f=u/d,p=(4-f%4)%4;n.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${a.offset/4};

                t = 0;

                for(var i=0; i < ${a.data.size*d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `)}else{const u=fc[a.data.type];n.push(`
                cv = ud.${h}.value;
                v = uv.${h};
                offset = ${a.offset/4};
                ${u};
                `)}}return n.push(`
       renderer.buffer.update(buffer);
    `),{size:r,syncFunc:new Function("ud","uv","renderer","syncData","buffer",n.join(`
`))}}let _c=0;const Ui={textureCount:0,uboCount:0};class pa{constructor(t){this.destroyed=!1,this.renderer=t,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=_c++}systemCheck(){if(!Hh())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")}contextChange(t){this.gl=t,this.reset()}bind(t,i){t.disposeRunner.add(this),t.uniforms.globals=this.renderer.globalUniforms;const s=t.program,r=s.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(t);return this.shader=t,this.program!==s&&(this.program=s,this.gl.useProgram(r.program)),i||(Ui.textureCount=0,Ui.uboCount=0,this.syncUniformGroup(t.uniformGroup,Ui)),r}setUniforms(t){const i=this.shader.program,s=i.glPrograms[this.renderer.CONTEXT_UID];i.syncUniforms(s.uniformData,t,this.renderer)}syncUniformGroup(t,i){const s=this.getGlProgram();(!t.static||t.dirtyId!==s.uniformDirtyGroups[t.id])&&(s.uniformDirtyGroups[t.id]=t.dirtyId,this.syncUniforms(t,s,i))}syncUniforms(t,i,s){(t.syncUniforms[this.shader.program.id]||this.createSyncGroups(t))(i.uniformData,t.uniforms,this.renderer,s)}createSyncGroups(t){const i=this.getSignature(t,this.shader.program.uniformData,"u");return this.cache[i]||(this.cache[i]=kh(t,this.shader.program.uniformData)),t.syncUniforms[this.shader.program.id]=this.cache[i],t.syncUniforms[this.shader.program.id]}syncUniformBufferGroup(t,i){const s=this.getGlProgram();if(!t.static||t.dirtyId!==0||!s.uniformGroups[t.id]){t.dirtyId=0;const r=s.uniformGroups[t.id]||this.createSyncBufferGroup(t,s,i);t.buffer.update(),r(s.uniformData,t.uniforms,this.renderer,Ui,t.buffer)}this.renderer.buffer.bindBufferBase(t.buffer,s.uniformBufferBindings[i])}createSyncBufferGroup(t,i,s){const{gl:r}=this.renderer;this.renderer.buffer.bind(t.buffer);const n=this.gl.getUniformBlockIndex(i.program,s);i.uniformBufferBindings[s]=this.shader.uniformBindCount,r.uniformBlockBinding(i.program,n,this.shader.uniformBindCount),this.shader.uniformBindCount++;const o=this.getSignature(t,this.shader.program.uniformData,"ubo");let a=this._uboCache[o];if(a||(a=this._uboCache[o]=gc(t,this.shader.program.uniformData)),t.autoManage){const l=new Float32Array(a.size/4);t.buffer.update(l)}return i.uniformGroups[t.id]=a.syncFunc,i.uniformGroups[t.id]}getSignature(t,i,s){const r=t.uniforms,n=[`${s}-`];for(const o in r)n.push(o),i[o]&&n.push(i[o].type);return n.join("-")}getGlProgram(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null}generateProgram(t){const i=this.gl,s=t.program,r=uc(i,s);return s.glPrograms[this.renderer.CONTEXT_UID]=r,r}reset(){this.program=null,this.shader=null}disposeShader(t){this.shader===t&&(this.shader=null)}destroy(){this.renderer=null,this.destroyed=!0}}pa.extension={type:D.RendererSystem,name:"shader"};N.add(pa);class Ts{constructor(t){this.renderer=t}run(t){const{renderer:i}=this;i.runners.init.emit(i.options),t.hello&&console.log(`PixiJS 7.2.0 - ${i.rendererLogId} - https://pixijs.com`),i.resize(i.screen.width,i.screen.height)}destroy(){}}Ts.defaultOptions={hello:!1};Ts.extension={type:[D.RendererSystem,D.CanvasRendererSystem],name:"startup"};N.add(Ts);function vc(e,t=[]){return t[H.NORMAL]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.ADD]=[e.ONE,e.ONE],t[H.MULTIPLY]=[e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.SCREEN]=[e.ONE,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.OVERLAY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.DARKEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.LIGHTEN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.COLOR_DODGE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.COLOR_BURN]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.HARD_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.SOFT_LIGHT]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.DIFFERENCE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.EXCLUSION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.HUE]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.SATURATION]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.COLOR]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.LUMINOSITY]=[e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.NONE]=[0,0],t[H.NORMAL_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.ADD_NPM]=[e.SRC_ALPHA,e.ONE,e.ONE,e.ONE],t[H.SCREEN_NPM]=[e.SRC_ALPHA,e.ONE_MINUS_SRC_COLOR,e.ONE,e.ONE_MINUS_SRC_ALPHA],t[H.SRC_IN]=[e.DST_ALPHA,e.ZERO],t[H.SRC_OUT]=[e.ONE_MINUS_DST_ALPHA,e.ZERO],t[H.SRC_ATOP]=[e.DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],t[H.DST_OVER]=[e.ONE_MINUS_DST_ALPHA,e.ONE],t[H.DST_IN]=[e.ZERO,e.SRC_ALPHA],t[H.DST_OUT]=[e.ZERO,e.ONE_MINUS_SRC_ALPHA],t[H.DST_ATOP]=[e.ONE_MINUS_DST_ALPHA,e.SRC_ALPHA],t[H.XOR]=[e.ONE_MINUS_DST_ALPHA,e.ONE_MINUS_SRC_ALPHA],t[H.SUBTRACT]=[e.ONE,e.ONE,e.ONE,e.ONE,e.FUNC_REVERSE_SUBTRACT,e.FUNC_ADD],t}const xc=0,yc=1,bc=2,Tc=3,wc=4,Ec=5,Cr=class{constructor(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=H.NONE,this._blendEq=!1,this.map=[],this.map[xc]=this.setBlend,this.map[yc]=this.setOffset,this.map[bc]=this.setCullFace,this.map[Tc]=this.setDepthTest,this.map[wc]=this.setFrontFace,this.map[Ec]=this.setDepthMask,this.checks=[],this.defaultState=new ae,this.defaultState.blend=!0}contextChange(e){this.gl=e,this.blendModes=vc(e),this.set(this.defaultState),this.reset()}set(e){if(e=e||this.defaultState,this.stateId!==e.data){let t=this.stateId^e.data,i=0;for(;t;)t&1&&this.map[i].call(this,!!(e.data&1<<i)),t=t>>1,i++;this.stateId=e.data}for(let t=0;t<this.checks.length;t++)this.checks[t](this,e)}forceState(e){e=e||this.defaultState;for(let t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(let t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data}setBlend(e){this.updateCheck(Cr.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)}setOffset(e){this.updateCheck(Cr.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}setDepthTest(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)}setDepthMask(e){this.gl.depthMask(e)}setCullFace(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)}setFrontFace(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])}setBlendMode(e){if(e===this.blendMode)return;this.blendMode=e;const t=this.blendModes[e],i=this.gl;t.length===2?i.blendFunc(t[0],t[1]):i.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,i.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD))}setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}reset(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)}updateCheck(e,t){const i=this.checks.indexOf(e);t&&i===-1?this.checks.push(e):!t&&i!==-1&&this.checks.splice(i,1)}static checkBlendMode(e,t){e.setBlendMode(t.blendMode)}static checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}destroy(){this.gl=null}};let ma=Cr;ma.extension={type:D.RendererSystem,name:"state"};N.add(ma);class Cc extends Ce{constructor(){super(...arguments),this.runners={},this._systemsHash={}}setup(t){this.addRunners(...t.runners);const i=(t.priority??[]).filter(r=>t.systems[r]),s=[...i,...Object.keys(t.systems).filter(r=>!i.includes(r))];for(const r of s)this.addSystem(t.systems[r],r)}addRunners(...t){t.forEach(i=>{this.runners[i]=new Ut(i)})}addSystem(t,i){const s=new t(this);if(this[i])throw new Error(`Whoops! The name "${i}" is already in use`);this[i]=s,this._systemsHash[i]=s;for(const r in this.runners)this.runners[r].add(s);return this}emitWithCustomOptions(t,i){const s=Object.keys(this._systemsHash);t.items.forEach(r=>{const n=s.find(o=>this._systemsHash[o]===r);r[t.name](i[n])})}destroy(){Object.values(this.runners).forEach(t=>{t.destroy()}),this._systemsHash={}}}const Ki=class{constructor(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=Ki.defaultMaxIdle,this.checkCountMax=Ki.defaultCheckCountMax,this.mode=Ki.defaultMode}postrender(){this.renderer.objectRenderer.renderingToScreen&&(this.count++,this.mode!==Yr.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))}run(){const e=this.renderer.texture,t=e.managedTextures;let i=!1;for(let s=0;s<t.length;s++){const r=t[s];!r.framebuffer&&this.count-r.touched>this.maxIdle&&(e.destroyTexture(r,!0),t[s]=null,i=!0)}if(i){let s=0;for(let r=0;r<t.length;r++)t[r]!==null&&(t[s++]=t[r]);t.length=s}}unload(e){const t=this.renderer.texture,i=e._texture;i&&!i.framebuffer&&t.destroyTexture(i);for(let s=e.children.length-1;s>=0;s--)this.unload(e.children[s])}destroy(){this.renderer=null}};let Ot=Ki;Ot.defaultMode=Yr.AUTO;Ot.defaultMaxIdle=60*60;Ot.defaultCheckCountMax=60*10;Ot.extension={type:D.RendererSystem,name:"textureGC"};N.add(Ot);class Ws{constructor(t){this.texture=t,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=G.UNSIGNED_BYTE,this.internalFormat=I.RGBA,this.samplerType=0}}function Sc(e){let t;return"WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext?t={[G.UNSIGNED_BYTE]:{[I.RGBA]:e.RGBA8,[I.RGB]:e.RGB8,[I.RG]:e.RG8,[I.RED]:e.R8,[I.RGBA_INTEGER]:e.RGBA8UI,[I.RGB_INTEGER]:e.RGB8UI,[I.RG_INTEGER]:e.RG8UI,[I.RED_INTEGER]:e.R8UI,[I.ALPHA]:e.ALPHA,[I.LUMINANCE]:e.LUMINANCE,[I.LUMINANCE_ALPHA]:e.LUMINANCE_ALPHA},[G.BYTE]:{[I.RGBA]:e.RGBA8_SNORM,[I.RGB]:e.RGB8_SNORM,[I.RG]:e.RG8_SNORM,[I.RED]:e.R8_SNORM,[I.RGBA_INTEGER]:e.RGBA8I,[I.RGB_INTEGER]:e.RGB8I,[I.RG_INTEGER]:e.RG8I,[I.RED_INTEGER]:e.R8I},[G.UNSIGNED_SHORT]:{[I.RGBA_INTEGER]:e.RGBA16UI,[I.RGB_INTEGER]:e.RGB16UI,[I.RG_INTEGER]:e.RG16UI,[I.RED_INTEGER]:e.R16UI,[I.DEPTH_COMPONENT]:e.DEPTH_COMPONENT16},[G.SHORT]:{[I.RGBA_INTEGER]:e.RGBA16I,[I.RGB_INTEGER]:e.RGB16I,[I.RG_INTEGER]:e.RG16I,[I.RED_INTEGER]:e.R16I},[G.UNSIGNED_INT]:{[I.RGBA_INTEGER]:e.RGBA32UI,[I.RGB_INTEGER]:e.RGB32UI,[I.RG_INTEGER]:e.RG32UI,[I.RED_INTEGER]:e.R32UI,[I.DEPTH_COMPONENT]:e.DEPTH_COMPONENT24},[G.INT]:{[I.RGBA_INTEGER]:e.RGBA32I,[I.RGB_INTEGER]:e.RGB32I,[I.RG_INTEGER]:e.RG32I,[I.RED_INTEGER]:e.R32I},[G.FLOAT]:{[I.RGBA]:e.RGBA32F,[I.RGB]:e.RGB32F,[I.RG]:e.RG32F,[I.RED]:e.R32F,[I.DEPTH_COMPONENT]:e.DEPTH_COMPONENT32F},[G.HALF_FLOAT]:{[I.RGBA]:e.RGBA16F,[I.RGB]:e.RGB16F,[I.RG]:e.RG16F,[I.RED]:e.R16F},[G.UNSIGNED_SHORT_5_6_5]:{[I.RGB]:e.RGB565},[G.UNSIGNED_SHORT_4_4_4_4]:{[I.RGBA]:e.RGBA4},[G.UNSIGNED_SHORT_5_5_5_1]:{[I.RGBA]:e.RGB5_A1},[G.UNSIGNED_INT_2_10_10_10_REV]:{[I.RGBA]:e.RGB10_A2,[I.RGBA_INTEGER]:e.RGB10_A2UI},[G.UNSIGNED_INT_10F_11F_11F_REV]:{[I.RGB]:e.R11F_G11F_B10F},[G.UNSIGNED_INT_5_9_9_9_REV]:{[I.RGB]:e.RGB9_E5},[G.UNSIGNED_INT_24_8]:{[I.DEPTH_STENCIL]:e.DEPTH24_STENCIL8},[G.FLOAT_32_UNSIGNED_INT_24_8_REV]:{[I.DEPTH_STENCIL]:e.DEPTH32F_STENCIL8}}:t={[G.UNSIGNED_BYTE]:{[I.RGBA]:e.RGBA,[I.RGB]:e.RGB,[I.ALPHA]:e.ALPHA,[I.LUMINANCE]:e.LUMINANCE,[I.LUMINANCE_ALPHA]:e.LUMINANCE_ALPHA},[G.UNSIGNED_SHORT_5_6_5]:{[I.RGB]:e.RGB},[G.UNSIGNED_SHORT_4_4_4_4]:{[I.RGBA]:e.RGBA},[G.UNSIGNED_SHORT_5_5_5_1]:{[I.RGBA]:e.RGBA}},t}class ga{constructor(t){this.renderer=t,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new X,this.hasIntegerTextures=!1}contextChange(){const t=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=Sc(t);const i=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=i;for(let r=0;r<i;r++)this.boundTextures[r]=null;this.emptyTextures={};const s=new Ws(t.createTexture());t.bindTexture(t.TEXTURE_2D,s.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[t.TEXTURE_2D]=s,this.emptyTextures[t.TEXTURE_CUBE_MAP]=new Ws(t.createTexture()),t.bindTexture(t.TEXTURE_CUBE_MAP,this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);for(let r=0;r<6;r++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,null);t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,t.LINEAR);for(let r=0;r<this.boundTextures.length;r++)this.bind(null,r)}bind(t,i=0){const{gl:s}=this;if(t=t==null?void 0:t.castToBaseTexture(),t!=null&&t.valid&&!t.parentTextureArray){t.touched=this.renderer.textureGC.count;const r=t._glTextures[this.CONTEXT_UID]||this.initTexture(t);this.boundTextures[i]!==t&&(this.currentLocation!==i&&(this.currentLocation=i,s.activeTexture(s.TEXTURE0+i)),s.bindTexture(t.target,r.texture)),r.dirtyId!==t.dirtyId?(this.currentLocation!==i&&(this.currentLocation=i,s.activeTexture(s.TEXTURE0+i)),this.updateTexture(t)):r.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(t),this.boundTextures[i]=t}else this.currentLocation!==i&&(this.currentLocation=i,s.activeTexture(s.TEXTURE0+i)),s.bindTexture(s.TEXTURE_2D,this.emptyTextures[s.TEXTURE_2D].texture),this.boundTextures[i]=null}reset(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(let t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.unknownTexture}unbind(t){const{gl:i,boundTextures:s}=this;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(let r=0;r<s.length;r++)s[r]===this.unknownTexture&&this.bind(null,r)}for(let r=0;r<s.length;r++)s[r]===t&&(this.currentLocation!==r&&(i.activeTexture(i.TEXTURE0+r),this.currentLocation=r),i.bindTexture(t.target,this.emptyTextures[t.target].texture),s[r]=null)}ensureSamplerType(t){const{boundTextures:i,hasIntegerTextures:s,CONTEXT_UID:r}=this;if(s)for(let n=t-1;n>=0;--n){const o=i[n];o&&o._glTextures[r].samplerType!==lr.FLOAT&&this.renderer.texture.unbind(o)}}initTexture(t){const i=new Ws(this.gl.createTexture());return i.dirtyId=-1,t._glTextures[this.CONTEXT_UID]=i,this.managedTextures.push(t),t.on("dispose",this.destroyTexture,this),i}initTextureType(t,i){var s;i.internalFormat=((s=this.internalFormats[t.type])==null?void 0:s[t.format])??t.format,this.webGLVersion===2&&t.type===G.HALF_FLOAT?i.type=this.gl.HALF_FLOAT:i.type=t.type}updateTexture(t){var r;const i=t._glTextures[this.CONTEXT_UID];if(!i)return;const s=this.renderer;if(this.initTextureType(t,i),(r=t.resource)!=null&&r.upload(s,t,i))i.samplerType!==lr.FLOAT&&(this.hasIntegerTextures=!0);else{const n=t.realWidth,o=t.realHeight,a=s.gl;(i.width!==n||i.height!==o||i.dirtyId<0)&&(i.width=n,i.height=o,a.texImage2D(t.target,0,i.internalFormat,n,o,0,t.format,i.type,null))}t.dirtyStyleId!==i.dirtyStyleId&&this.updateTextureStyle(t),i.dirtyId=t.dirtyId}destroyTexture(t,i){const{gl:s}=this;if(t=t.castToBaseTexture(),t._glTextures[this.CONTEXT_UID]&&(this.unbind(t),s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),t.off("dispose",this.destroyTexture,this),delete t._glTextures[this.CONTEXT_UID],!i)){const r=this.managedTextures.indexOf(t);r!==-1&&je(this.managedTextures,r,1)}}updateTextureStyle(t){var s;const i=t._glTextures[this.CONTEXT_UID];i&&((t.mipmap===Qt.POW2||this.webGLVersion!==2)&&!t.isPowerOfTwo?i.mipmap=!1:i.mipmap=t.mipmap>=1,this.webGLVersion!==2&&!t.isPowerOfTwo?i.wrapMode=ce.CLAMP:i.wrapMode=t.wrapMode,(s=t.resource)!=null&&s.style(this.renderer,t,i)||this.setStyle(t,i),i.dirtyStyleId=t.dirtyStyleId)}setStyle(t,i){const s=this.gl;if(i.mipmap&&t.mipmap!==Qt.ON_MANUAL&&s.generateMipmap(t.target),s.texParameteri(t.target,s.TEXTURE_WRAP_S,i.wrapMode),s.texParameteri(t.target,s.TEXTURE_WRAP_T,i.wrapMode),i.mipmap){s.texParameteri(t.target,s.TEXTURE_MIN_FILTER,t.scaleMode===qt.LINEAR?s.LINEAR_MIPMAP_LINEAR:s.NEAREST_MIPMAP_NEAREST);const r=this.renderer.context.extensions.anisotropicFiltering;if(r&&t.anisotropicLevel>0&&t.scaleMode===qt.LINEAR){const n=Math.min(t.anisotropicLevel,s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));s.texParameterf(t.target,r.TEXTURE_MAX_ANISOTROPY_EXT,n)}}else s.texParameteri(t.target,s.TEXTURE_MIN_FILTER,t.scaleMode===qt.LINEAR?s.LINEAR:s.NEAREST);s.texParameteri(t.target,s.TEXTURE_MAG_FILTER,t.scaleMode===qt.LINEAR?s.LINEAR:s.NEAREST)}destroy(){this.renderer=null}}ga.extension={type:D.RendererSystem,name:"texture"};N.add(ga);class _a{constructor(t){this.renderer=t}contextChange(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(t){const{gl:i,CONTEXT_UID:s}=this,r=t._glTransformFeedbacks[s]||this.createGLTransformFeedback(t);i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,r)}unbind(){const{gl:t}=this;t.bindTransformFeedback(t.TRANSFORM_FEEDBACK,null)}beginTransformFeedback(t,i){const{gl:s,renderer:r}=this;i&&r.shader.bind(i),s.beginTransformFeedback(t)}endTransformFeedback(){const{gl:t}=this;t.endTransformFeedback()}createGLTransformFeedback(t){const{gl:i,renderer:s,CONTEXT_UID:r}=this,n=i.createTransformFeedback();t._glTransformFeedbacks[r]=n,i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,n);for(let o=0;o<t.buffers.length;o++){const a=t.buffers[o];a&&(s.buffer.update(a),a._glBuffers[r].refCount++,i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,o,a._glBuffers[r].buffer||null))}return i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),t.disposeRunner.add(this),n}disposeTransformFeedback(t,i){const s=t._glTransformFeedbacks[this.CONTEXT_UID],r=this.gl;t.disposeRunner.remove(this);const n=this.renderer.buffer;if(n)for(let o=0;o<t.buffers.length;o++){const a=t.buffers[o];if(!a)continue;const l=a._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!i&&n.dispose(a,i))}s&&(i||r.deleteTransformFeedback(s),delete t._glTransformFeedbacks[this.CONTEXT_UID])}destroy(){this.renderer=null}}_a.extension={type:D.RendererSystem,name:"transformFeedback"};N.add(_a);class ws{constructor(t){this.renderer=t}init(t){this.screen=new K(0,0,t.width,t.height),this.element=t.view||R.ADAPTER.createCanvas(),this.resolution=t.resolution||R.RESOLUTION,this.autoDensity=!!t.autoDensity}resizeView(t,i){this.element.width=Math.round(t*this.resolution),this.element.height=Math.round(i*this.resolution);const s=this.element.width/this.resolution,r=this.element.height/this.resolution;this.screen.width=s,this.screen.height=r,this.autoDensity&&(this.element.style.width=`${s}px`,this.element.style.height=`${r}px`),this.renderer.emit("resize",s,r),this.renderer.runners.resize.emit(this.screen.width,this.screen.height)}destroy(t){var i;t&&((i=this.element.parentNode)==null||i.removeChild(this.element)),this.renderer=null,this.element=null,this.screen=null}}ws.defaultOptions={width:800,height:600,resolution:R.RESOLUTION,autoDensity:!1};ws.extension={type:[D.RendererSystem,D.CanvasRendererSystem],name:"_view"};N.add(ws);R.PREFER_ENV=Pe.WEBGL2;R.STRICT_TEXTURE_CACHE=!1;R.RENDER_OPTIONS={...bs.defaultOptions,...ys.defaultOptions,...ws.defaultOptions,...Ts.defaultOptions};Object.defineProperties(R,{WRAP_MODE:{get(){return X.defaultOptions.wrapMode},set(e){Y("7.1.0","settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"),X.defaultOptions.wrapMode=e}},SCALE_MODE:{get(){return X.defaultOptions.scaleMode},set(e){Y("7.1.0","settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"),X.defaultOptions.scaleMode=e}},MIPMAP_TEXTURES:{get(){return X.defaultOptions.mipmap},set(e){Y("7.1.0","settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"),X.defaultOptions.mipmap=e}},ANISOTROPIC_LEVEL:{get(){return X.defaultOptions.anisotropicLevel},set(e){Y("7.1.0","settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"),X.defaultOptions.anisotropicLevel=e}},FILTER_RESOLUTION:{get(){return Y("7.1.0","settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"),j.defaultResolution},set(e){j.defaultResolution=e}},FILTER_MULTISAMPLE:{get(){return Y("7.1.0","settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"),j.defaultMultisample},set(e){j.defaultMultisample=e}},SPRITE_MAX_TEXTURES:{get(){return Lt.defaultMaxTextures},set(e){Y("7.1.0","settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),Lt.defaultMaxTextures=e}},SPRITE_BATCH_SIZE:{get(){return Lt.defaultBatchSize},set(e){Y("7.1.0","settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),Lt.defaultBatchSize=e}},CAN_UPLOAD_SAME_BUFFER:{get(){return Lt.canUploadSameBuffer},set(e){Y("7.1.0","settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),Lt.canUploadSameBuffer=e}},GC_MODE:{get(){return Ot.defaultMode},set(e){Y("7.1.0","settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),Ot.defaultMode=e}},GC_MAX_IDLE:{get(){return Ot.defaultMaxIdle},set(e){Y("7.1.0","settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),Ot.defaultMaxIdle=e}},GC_MAX_CHECK_COUNT:{get(){return Ot.defaultCheckCountMax},set(e){Y("7.1.0","settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),Ot.defaultCheckCountMax=e}},PRECISION_VERTEX:{get(){return kt.defaultVertexPrecision},set(e){Y("7.1.0","settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),kt.defaultVertexPrecision=e}},PRECISION_FRAGMENT:{get(){return kt.defaultFragmentPrecision},set(e){Y("7.1.0","settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),kt.defaultFragmentPrecision=e}}});var Ie=(e=>(e[e.INTERACTION=50]="INTERACTION",e[e.HIGH=25]="HIGH",e[e.NORMAL=0]="NORMAL",e[e.LOW=-25]="LOW",e[e.UTILITY=-50]="UTILITY",e))(Ie||{});class Ys{constructor(t,i=null,s=0,r=!1){this.next=null,this.previous=null,this._destroyed=!1,this.fn=t,this.context=i,this.priority=s,this.once=r}match(t,i=null){return this.fn===t&&this.context===i}emit(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));const i=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),i}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const i=this.next;return this.next=t?null:i,this.previous=null,i}}const Et=class{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new Ys(null,null,1/0),this.deltaMS=1/Et.targetFPMS,this.elapsedMS=1/Et.targetFPMS,this._tick=e=>{this._requestId=null,this.started&&(this.update(e),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(e,t,i=Ie.NORMAL){return this._addListener(new Ys(e,t,i))}addOnce(e,t,i=Ie.NORMAL){return this._addListener(new Ys(e,t,i,!0))}_addListener(e){let t=this._head.next,i=this._head;if(!t)e.connect(i);else{for(;t;){if(e.priority>t.priority){e.connect(i);break}i=t,t=t.next}e.previous||e.connect(i)}return this._startIfPossible(),this}remove(e,t){let i=this._head.next;for(;i;)i.match(e,t)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let e=0,t=this._head;for(;t=t.next;)e++;return e}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}}update(e=performance.now()){let t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){const r=e-this._lastFrame|0;if(r<this._minElapsedMS)return;this._lastFrame=e-r%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*Et.targetFPMS;const i=this._head;let s=i.next;for(;s;)s=s.emit(this.deltaTime);i.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(e){const t=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,t)/1e3,Et.targetFPMS);this._maxElapsedMS=1/i}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(e){if(e===0)this._minElapsedMS=0;else{const t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}static get shared(){if(!Et._shared){const e=Et._shared=new Et;e.autoStart=!0,e._protected=!0}return Et._shared}static get system(){if(!Et._system){const e=Et._system=new Et;e.autoStart=!0,e._protected=!0}return Et._system}};let yt=Et;yt.targetFPMS=.06;Object.defineProperties(R,{TARGET_FPMS:{get(){return yt.targetFPMS},set(e){Y("7.1.0","settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),yt.targetFPMS=e}}});class va{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set(i){this._ticker&&this._ticker.remove(this.render,this),this._ticker=i,i&&i.add(this.render,this,Ie.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?yt.shared:new yt,t.autoStart&&this.start()}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy()}}}va.extension=D.Application;N.add(va);const xa=[];N.handleByList(D.Renderer,xa);function Ac(e){for(const t of xa)if(t.test(e))return new t(e);throw new Error("Unable to auto-detect a suitable renderer.")}var Ic=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Pc=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;const Rc=Ic,ya=Pc;class ba{constructor(t){this.renderer=t}contextChange(t){let i;if(this.renderer.context.webGLVersion===1){const s=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,s)}else{const s=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,s)}i>=ot.HIGH?this.multisample=ot.HIGH:i>=ot.MEDIUM?this.multisample=ot.MEDIUM:i>=ot.LOW?this.multisample=ot.LOW:this.multisample=ot.NONE}destroy(){}}ba.extension={type:D.RendererSystem,name:"_multisample"};N.add(ba);class Mc{constructor(t){this.buffer=t||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}}class Ta{constructor(t){this.renderer=t,this.managedBuffers={},this.boundBufferBases={}}destroy(){this.renderer=null}contextChange(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID}bind(t){const{gl:i,CONTEXT_UID:s}=this,r=t._glBuffers[s]||this.createGLBuffer(t);i.bindBuffer(t.type,r.buffer)}unbind(t){const{gl:i}=this;i.bindBuffer(t,null)}bindBufferBase(t,i){const{gl:s,CONTEXT_UID:r}=this;if(this.boundBufferBases[i]!==t){const n=t._glBuffers[r]||this.createGLBuffer(t);this.boundBufferBases[i]=t,s.bindBufferBase(s.UNIFORM_BUFFER,i,n.buffer)}}bindBufferRange(t,i,s){const{gl:r,CONTEXT_UID:n}=this;s=s||0;const o=t._glBuffers[n]||this.createGLBuffer(t);r.bindBufferRange(r.UNIFORM_BUFFER,i||0,o.buffer,s*256,256)}update(t){const{gl:i,CONTEXT_UID:s}=this,r=t._glBuffers[s]||this.createGLBuffer(t);if(t._updateID!==r.updateID)if(r.updateID=t._updateID,i.bindBuffer(t.type,r.buffer),r.byteLength>=t.data.byteLength)i.bufferSubData(t.type,0,t.data);else{const n=t.static?i.STATIC_DRAW:i.DYNAMIC_DRAW;r.byteLength=t.data.byteLength,i.bufferData(t.type,t.data,n)}}dispose(t,i){if(!this.managedBuffers[t.id])return;delete this.managedBuffers[t.id];const s=t._glBuffers[this.CONTEXT_UID],r=this.gl;t.disposeRunner.remove(this),s&&(i||r.deleteBuffer(s.buffer),delete t._glBuffers[this.CONTEXT_UID])}disposeAll(t){const i=Object.keys(this.managedBuffers);for(let s=0;s<i.length;s++)this.dispose(this.managedBuffers[i[s]],t)}createGLBuffer(t){const{CONTEXT_UID:i,gl:s}=this;return t._glBuffers[i]=new Mc(s.createBuffer()),this.managedBuffers[t.id]=t,t.disposeRunner.add(this),t._glBuffers[i]}}Ta.extension={type:D.RendererSystem,name:"buffer"};N.add(Ta);class wa{constructor(t){this.renderer=t}render(t,i){const s=this.renderer;let r,n,o,a;if(i&&(r=i.renderTexture,n=i.clear,o=i.transform,a=i.skipUpdateTransform),this.renderingToScreen=!r,s.runners.prerender.emit(),s.emit("prerender"),s.projection.transform=o,!s.context.isLost){if(r||(this.lastObjectRendered=t),!a){const l=t.enableTempParent();t.updateTransform(),t.disableTempParent(l)}s.renderTexture.bind(r),s.batch.currentRenderer.start(),(n??s.background.clearBeforeRender)&&s.renderTexture.clear(),t.render(s),s.batch.currentRenderer.flush(),r&&(i.blit&&s.framebuffer.blit(),r.baseTexture.update()),s.runners.postrender.emit(),s.projection.transform=null,s.emit("postrender")}}destroy(){this.renderer=null,this.lastObjectRendered=null}}wa.extension={type:D.RendererSystem,name:"objectRenderer"};N.add(wa);const Sr=class extends Cc{constructor(e){super(),this.type=Ro.WEBGL,e=Object.assign({},R.RENDER_OPTIONS,e),this.gl=null,this.CONTEXT_UID=0,this.globalUniforms=new Gt({projectionMatrix:new it},!0);const t={runners:["init","destroy","contextChange","resolutionChange","reset","update","postrender","prerender","resize"],systems:Sr.__systems,priority:["_view","textureGenerator","background","_plugin","startup","context","state","texture","buffer","geometry","framebuffer","transformFeedback","mask","scissor","stencil","projection","textureGC","filter","renderTexture","batch","objectRenderer","_multisample"]};this.setup(t),"useContextAlpha"in e&&(Y("7.0.0","options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),e.premultipliedAlpha=e.useContextAlpha&&e.useContextAlpha!=="notMultiplied",e.backgroundAlpha=e.useContextAlpha===!1?1:e.backgroundAlpha),this._plugin.rendererPlugins=Sr.__plugins,this.options=e,this.startup.run(this.options)}static test(e){return e!=null&&e.forceCanvas?!1:nh()}render(e,t){this.objectRenderer.render(e,t)}resize(e,t){this._view.resizeView(e,t)}reset(){return this.runners.reset.emit(),this}clear(){this.renderTexture.bind(),this.renderTexture.clear()}destroy(e=!1){this.runners.destroy.items.reverse(),this.emitWithCustomOptions(this.runners.destroy,{_view:e}),super.destroy()}get plugins(){return this._plugin.plugins}get multisample(){return this._multisample.multisample}get width(){return this._view.element.width}get height(){return this._view.element.height}get resolution(){return this._view.resolution}set resolution(e){this._view.resolution=e,this.runners.resolutionChange.emit(e)}get autoDensity(){return this._view.autoDensity}get view(){return this._view.element}get screen(){return this._view.screen}get lastObjectRendered(){return this.objectRenderer.lastObjectRendered}get renderingToScreen(){return this.objectRenderer.renderingToScreen}get rendererLogId(){return`WebGL ${this.context.webGLVersion}`}get clearBeforeRender(){return Y("7.0.0","renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."),this.background.clearBeforeRender}get useContextAlpha(){return Y("7.0.0","renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."),this.context.useContextAlpha}get preserveDrawingBuffer(){return Y("7.0.0","renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"),this.context.preserveDrawingBuffer}get backgroundColor(){return Y("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color}set backgroundColor(e){Y("7.0.0","renderer.backgroundColor has been deprecated, use renderer.background.color instead."),this.background.color=e}get backgroundAlpha(){return Y("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha}set backgroundAlpha(e){Y("7.0.0","renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),this.background.alpha=e}get powerPreference(){return Y("7.0.0","renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"),this.context.powerPreference}generateTexture(e,t){return this.textureGenerator.generateTexture(e,t)}};let ti=Sr;ti.extension={type:D.Renderer,priority:1};ti.__plugins={};ti.__systems={};N.handleByMap(D.RendererPlugin,ti.__plugins);N.handleByMap(D.RendererSystem,ti.__systems);N.add(ti);class Ea extends vi{constructor(t,i){const{width:s,height:r}=i||{};super(s,r),this.items=[],this.itemDirtyIds=[];for(let n=0;n<t;n++){const o=new X;this.items.push(o),this.itemDirtyIds.push(-2)}this.length=t,this._load=null,this.baseTexture=null}initFromArray(t,i){for(let s=0;s<this.length;s++)t[s]&&(t[s].castToBaseTexture?this.addBaseTextureAt(t[s].castToBaseTexture(),s):t[s]instanceof vi?this.addResourceAt(t[s],s):this.addResourceAt(zo(t[s],i),s))}dispose(){for(let t=0,i=this.length;t<i;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null}addResourceAt(t,i){if(!this.items[i])throw new Error(`Index ${i} is out of bounds`);return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[i].setResource(t),this}bind(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");super.bind(t);for(let i=0;i<this.length;i++)this.items[i].parentTextureArray=t,this.items[i].on("update",t.update,t)}unbind(t){super.unbind(t);for(let i=0;i<this.length;i++)this.items[i].parentTextureArray=null,this.items[i].off("update",t.update,t)}load(){if(this._load)return this._load;const i=this.items.map(s=>s.resource).filter(s=>s).map(s=>s.load());return this._load=Promise.all(i).then(()=>{const{realWidth:s,realHeight:r}=this.items[0];return this.resize(s,r),Promise.resolve(this)}),this._load}}class Dc extends Ea{constructor(t,i){const{width:s,height:r}=i||{};let n,o;Array.isArray(t)?(n=t,o=t.length):o=t,super(o,{width:s,height:r}),n&&this.initFromArray(n,i)}addBaseTextureAt(t,i){if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("ArrayResource does not support RenderTexture");return this}bind(t){super.bind(t),t.target=$e.TEXTURE_2D_ARRAY}upload(t,i,s){const{length:r,itemDirtyIds:n,items:o}=this,{gl:a}=t;s.dirtyId<0&&a.texImage3D(a.TEXTURE_2D_ARRAY,0,s.internalFormat,this._width,this._height,r,0,i.format,s.type,null);for(let l=0;l<r;l++){const h=o[l];n[l]<h.dirtyId&&(n[l]=h.dirtyId,h.valid&&a.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,l,h.resource.width,h.resource.height,1,i.format,s.type,h.resource.source))}return!0}}class Fc extends fe{constructor(t){super(t)}static test(t){const{OffscreenCanvas:i}=globalThis;return i&&t instanceof i?!0:globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement}}const hi=class extends Ea{constructor(e,t){const{width:i,height:s,autoLoad:r,linkBaseTexture:n}=t||{};if(e&&e.length!==hi.SIDES)throw new Error(`Invalid length. Got ${e.length}, expected 6`);super(6,{width:i,height:s});for(let o=0;o<hi.SIDES;o++)this.items[o].target=$e.TEXTURE_CUBE_MAP_POSITIVE_X+o;this.linkBaseTexture=n!==!1,e&&this.initFromArray(e,t),r!==!1&&this.load()}bind(e){super.bind(e),e.target=$e.TEXTURE_CUBE_MAP}addBaseTextureAt(e,t,i){if(i===void 0&&(i=this.linkBaseTexture),!this.items[t])throw new Error(`Index ${t} is out of bounds`);if(!this.linkBaseTexture||e.parentTextureArray||Object.keys(e._glTextures).length>0)if(e.resource)this.addResourceAt(e.resource,t);else throw new Error("CubeResource does not support copying of renderTexture.");else e.target=$e.TEXTURE_CUBE_MAP_POSITIVE_X+t,e.parentTextureArray=this.baseTexture,this.items[t]=e;return e.valid&&!this.valid&&this.resize(e.realWidth,e.realHeight),this.items[t]=e,this}upload(e,t,i){const s=this.itemDirtyIds;for(let r=0;r<hi.SIDES;r++){const n=this.items[r];(s[r]<n.dirtyId||i.dirtyId<t.dirtyId)&&(n.valid&&n.resource?(n.resource.upload(e,n,i),s[r]=n.dirtyId):s[r]<-1&&(e.gl.texImage2D(n.target,0,i.internalFormat,t.realWidth,t.realHeight,0,t.format,i.type,null),s[r]=-1))}return!0}static test(e){return Array.isArray(e)&&e.length===hi.SIDES}};let Ca=hi;Ca.SIDES=6;class He extends fe{constructor(t,i){i=i||{};let s,r;typeof t=="string"?(s=He.EMPTY,r=t):(s=t,r=null),super(s),this.url=r,this.crossOrigin=i.crossOrigin??!0,this.alphaMode=typeof i.alphaMode=="number"?i.alphaMode:null,this._load=null,i.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(async(t,i)=>{if(this.url===null){t(this);return}try{const s=await R.ADAPTER.fetch(this.url,{mode:this.crossOrigin?"cors":"no-cors"});if(this.destroyed)return;const r=await s.blob();if(this.destroyed)return;const n=await createImageBitmap(r,{premultiplyAlpha:this.alphaMode===null||this.alphaMode===zt.UNPACK?"premultiply":"none"});if(this.destroyed)return;this.source=n,this.update(),t(this)}catch(s){if(this.destroyed)return;i(s),this.onError.emit(s)}}),this._load)}upload(t,i,s){return this.source instanceof ImageBitmap?(typeof this.alphaMode=="number"&&(i.alphaMode=this.alphaMode),super.upload(t,i,s)):(this.load(),!1)}dispose(){this.source instanceof ImageBitmap&&this.source.close(),super.dispose(),this._load=null}static test(t){return!!globalThis.createImageBitmap&&typeof ImageBitmap<"u"&&(typeof t=="string"||t instanceof ImageBitmap)}static get EMPTY(){return He._EMPTY=He._EMPTY??R.ADAPTER.createCanvas(0,0),He._EMPTY}}const Zi=class extends fe{constructor(e,t){t=t||{},super(R.ADAPTER.createCanvas()),this._width=0,this._height=0,this.svg=e,this.scale=t.scale||1,this._overrideWidth=t.width,this._overrideHeight=t.height,this._resolve=null,this._crossorigin=t.crossorigin,this._load=null,t.autoLoad!==!1&&this.load()}load(){return this._load?this._load:(this._load=new Promise(e=>{if(this._resolve=()=>{this.resize(this.source.width,this.source.height),e(this)},Zi.SVG_XML.test(this.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");this.svg=`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`}this._loadSvg()}),this._load)}_loadSvg(){const e=new Image;fe.crossOrigin(e,this.svg,this._crossorigin),e.src=this.svg,e.onerror=t=>{this._resolve&&(e.onerror=null,this.onError.emit(t))},e.onload=()=>{if(!this._resolve)return;const t=e.width,i=e.height;if(!t||!i)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");let s=t*this.scale,r=i*this.scale;(this._overrideWidth||this._overrideHeight)&&(s=this._overrideWidth||this._overrideHeight/i*t,r=this._overrideHeight||this._overrideWidth/t*i),s=Math.round(s),r=Math.round(r);const n=this.source;n.width=s,n.height=r,n._pixiId=`canvas_${Ae()}`,n.getContext("2d").drawImage(e,0,0,t,i,0,0,s,r),this._resolve(),this._resolve=null}}static getSize(e){const t=Zi.SVG_SIZE.exec(e),i={};return t&&(i[t[1]]=Math.round(parseFloat(t[3])),i[t[5]]=Math.round(parseFloat(t[7]))),i}dispose(){super.dispose(),this._resolve=null,this._crossorigin=null}static test(e,t){return t==="svg"||typeof e=="string"&&e.startsWith("data:image/svg+xml")||typeof e=="string"&&Zi.SVG_XML.test(e)}};let yi=Zi;yi.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;yi.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;const Ar=class extends fe{constructor(e,t){if(t=t||{},!(e instanceof HTMLVideoElement)){const i=document.createElement("video");i.setAttribute("preload","auto"),i.setAttribute("webkit-playsinline",""),i.setAttribute("playsinline",""),typeof e=="string"&&(e=[e]);const s=e[0].src||e[0];fe.crossOrigin(i,s,t.crossorigin);for(let r=0;r<e.length;++r){const n=document.createElement("source");let{src:o,mime:a}=e[r];o=o||e[r];const l=o.split("?").shift().toLowerCase(),h=l.slice(l.lastIndexOf(".")+1);a=a||Ar.MIME_TYPES[h]||`video/${h}`,n.src=o,n.type=a,i.appendChild(n)}e=i}super(e),this.noSubImage=!0,this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this._load=null,this._resolve=null,this._onCanPlay=this._onCanPlay.bind(this),this._onError=this._onError.bind(this),t.autoLoad!==!1&&this.load()}update(e=0){if(!this.destroyed){const t=yt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t),(!this._updateFPS||this._msToNextUpdate<=0)&&(super.update(),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}}load(){if(this._load)return this._load;const e=this.source;return(e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height&&(e.complete=!0),e.addEventListener("play",this._onPlayStart.bind(this)),e.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(e.addEventListener("canplay",this._onCanPlay),e.addEventListener("canplaythrough",this._onCanPlay),e.addEventListener("error",this._onError,!0)),this._load=new Promise(t=>{this.valid?t(this):(this._resolve=t,e.load())}),this._load}_onError(e){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(e)}_isSourcePlaying(){const e=this.source;return!e.paused&&!e.ended&&this._isSourceReady()}_isSourceReady(){return this.source.readyState>2}_onPlayStart(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(yt.shared.add(this.update,this),this._isConnectedToTicker=!0)}_onPlayStop(){this._isConnectedToTicker&&(yt.shared.remove(this.update,this),this._isConnectedToTicker=!1)}_onCanPlay(){const e=this.source;e.removeEventListener("canplay",this._onCanPlay),e.removeEventListener("canplaythrough",this._onCanPlay);const t=this.valid;this.resize(e.videoWidth,e.videoHeight),!t&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&e.play()}dispose(){this._isConnectedToTicker&&(yt.shared.remove(this.update,this),this._isConnectedToTicker=!1);const e=this.source;e&&(e.removeEventListener("error",this._onError,!0),e.pause(),e.src="",e.load()),super.dispose()}get autoUpdate(){return this._autoUpdate}set autoUpdate(e){e!==this._autoUpdate&&(this._autoUpdate=e,!this._autoUpdate&&this._isConnectedToTicker?(yt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(yt.shared.add(this.update,this),this._isConnectedToTicker=!0))}get updateFPS(){return this._updateFPS}set updateFPS(e){e!==this._updateFPS&&(this._updateFPS=e)}static test(e,t){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement||Ar.TYPES.includes(t)}};let Jr=Ar;Jr.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"];Jr.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};yr.push(He,Zo,Fc,Jr,yi,wi,Ca,Dc);var Bc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Lc=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,Oc=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`;let as=class extends j{constructor(t=4,i=3,s=!1){super(Bc,s?Oc:Lc),this._kernels=[],this._blur=4,this._quality=3,this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new W,this.pixelSize=1,this._clamp=s,Array.isArray(t)?this.kernels=t:(this._blur=t,this.quality=i)}apply(t,i,s,r){const n=this._pixelSize.x/i._frame.width,o=this._pixelSize.y/i._frame.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,i,s,r);else{const l=t.getFilterTexture();let h=i,c=l,u;const d=this._quality-1;for(let f=0;f<d;f++)a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,c,1),u=h,h=c,c=u;a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*n,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,h,s,r),t.returnFilterTexture(l)}}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,i)=>t+i+.5,0))}_generateKernels(){const t=this._blur,i=this._quality,s=[t];if(t>0){let r=t;const n=t/i;for(let o=1;o<i;o++)r-=n,s.push(r)}this._kernels=s,this._updatePadding()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get clamp(){return this._clamp}set pixelSize(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof W?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)}get pixelSize(){return this._pixelSize}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get blur(){return this._blur}set blur(t){this._blur=t,this._generateKernels()}};var Sa=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,kc=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`;let Nc=class extends j{constructor(t=.5){super(Sa,kc),this.threshold=t}get threshold(){return this.uniforms.threshold}set threshold(t){this.uniforms.threshold=t}};var Uc=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;const Aa=class extends j{constructor(t){super(Sa,Uc),this.bloomScale=1,this.brightness=1,this._resolution=R.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});const i=Object.assign(Aa.defaults,t);this.bloomScale=i.bloomScale,this.brightness=i.brightness;const{kernels:s,blur:r,quality:n,pixelSize:o,resolution:a}=i;this._extractFilter=new Nc(i.threshold),this._extractFilter.resolution=a,this._blurFilter=s?new as(s):new as(r,n),this.pixelSize=o,this.resolution=a}apply(t,i,s,r,n){const o=t.getFilterTexture();this._extractFilter.apply(t,i,o,1,n);const a=t.getFilterTexture();this._blurFilter.apply(t,o,a,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=a,t.applyFilter(this,i,s,r),t.returnFilterTexture(a),t.returnFilterTexture(o)}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let Gc=Aa;Gc.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:R.FILTER_RESOLUTION};var zc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Hc=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture2D(uSampler, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;let $c=class extends j{constructor(t=8){super(zc,Hc),this.size=t}get size(){return this.uniforms.pixelSize}set size(t){this.uniforms.pixelSize=t}};var Xc=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;class Vc extends j{constructor(t=1){super(Rc,Xc,{uAlpha:1}),this.alpha=t}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}}const jc={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Wc=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function Yc(e){const t=jc[e],i=t.length;let s=Wc,r="";const n="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<e;a++){let l=n.replace("%index%",a.toString());o=a,a>=i&&(o=e-a-1),l=l.replace("%value%",t[o].toString()),r+=l,r+=`
`}return s=s.replace("%blur%",r),s=s.replace("%size%",e.toString()),s}const qc=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Kc(e,t){const i=Math.ceil(e/2);let s=qc,r="",n;t?n="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":n="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(let o=0;o<e;o++){let a=n.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(i-1)}.0`),r+=a,r+=`
`}return s=s.replace("%blur%",r),s=s.replace("%size%",e.toString()),s}class Ir extends j{constructor(t,i=8,s=4,r=j.defaultResolution,n=5){const o=Kc(n,t),a=Yc(n);super(o,a),this.horizontal=t,this.resolution=r,this._quality=0,this.quality=s,this.blur=i}apply(t,i,s,r){if(s?this.horizontal?this.uniforms.strength=1/s.width*(s.width/i.width):this.uniforms.strength=1/s.height*(s.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,s,r);else{const n=t.getFilterTexture(),o=t.renderer;let a=i,l=n;this.state.blend=!1,t.applyFilter(this,a,l,jt.CLEAR);for(let h=1;h<this.passes-1;h++){t.bindAndClear(a,jt.BLIT),this.uniforms.uSampler=l;const c=l;l=a,a=c,o.shader.bind(this),o.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,s,r),t.returnFilterTexture(n)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}}class Zc extends j{constructor(t=8,i=4,s=j.defaultResolution,r=5){super(),this._repeatEdgePixels=!1,this.blurXFilter=new Ir(!0,t,i,s,r),this.blurYFilter=new Ir(!1,t,i,s,r),this.resolution=s,this.quality=i,this.blur=t,this.repeatEdgePixels=!1}apply(t,i,s,r){const n=Math.abs(this.blurXFilter.strength),o=Math.abs(this.blurYFilter.strength);if(n&&o){const a=t.getFilterTexture();this.blurXFilter.apply(t,i,a,jt.CLEAR),this.blurYFilter.apply(t,a,s,r),t.returnFilterTexture(a)}else o?this.blurYFilter.apply(t,i,s,r):this.blurXFilter.apply(t,i,s,r)}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2}get blur(){return this.blurXFilter.blur}set blur(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(t){this.blurXFilter.quality=this.blurYFilter.quality=t}get blurX(){return this.blurXFilter.blur}set blurX(t){this.blurXFilter.blur=t,this.updatePadding()}get blurY(){return this.blurYFilter.blur}set blurY(t){this.blurYFilter.blur=t,this.updatePadding()}get blendMode(){return this.blurYFilter.blendMode}set blendMode(t){this.blurYFilter.blendMode=t}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(t){this._repeatEdgePixels=t,this.updatePadding()}}var Qc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Jc=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;const Ia=class extends j{constructor(t){super(Qc,Jc),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Ia.defaults,t)}apply(t,i,s,r){const{width:n,height:o}=i.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,t.applyFilter(this,i,s,r)}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}get strength(){return this.uniforms.strength}set strength(t){this.uniforms.strength=t}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}};let Pa=Ia;Pa.defaults={center:[.5,.5],radius:100,strength:1};var tu=`const float PI = 3.1415926538;
const float PI_2 = PI*2.;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;
uniform sampler2D uSampler;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform int uNumStops;
uniform float uAlphas[3*MAX_STOPS];
uniform vec3 uColors[MAX_STOPS];
uniform float uOffsets[MAX_STOPS];
uniform int uType;
uniform float uAngle;
uniform float uAlpha;
uniform int uMaxColors;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(vFilterCoord, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    // current/original color
    vec4 currentColor = texture2D(uSampler, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        gl_FragColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, uType, radians(uAngle));

    // check gradient bounds
    float offsetMin = uOffsets[0];
    float offsetMax = 0.0;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == uNumStops-1){ // last index
            offsetMax = uOffsets[i];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        gl_FragColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0) {
        float stepSize = 1./float(uMaxColors);
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uOffsets[i]) {
            from = ColorStop(uOffsets[i], uColors[i], uAlphas[i]);
            to = ColorStop(uOffsets[i+1], uColors[i+1], uAlphas[i+1]);
        }

        if (i == uNumStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    // mix resulting color with current color
    gl_FragColor = gradientColor + currentColor*(1.-gradientColor.a);
}
`,eu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform vec4 inputSize;
uniform vec4 outputFrame;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
    vFilterCoord = vTextureCoord * inputSize.xy / outputFrame.zw;
}
`,Re=Re||{};Re.stringify=function(){var e={"visit_linear-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return e.visit_gradient(t)},"visit_radial-gradient":function(t){return e.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return e.visit_gradient(t)},visit_gradient:function(t){var i=e.visit(t.orientation);return i&&(i+=", "),t.type+"("+i+e.visit(t.colorStops)+")"},visit_shape:function(t){var i=t.value,s=e.visit(t.at),r=e.visit(t.style);return r&&(i+=" "+r),s&&(i+=" at "+s),i},"visit_default-radial":function(t){var i="",s=e.visit(t.at);return s&&(i+=s),i},"visit_extent-keyword":function(t){var i=t.value,s=e.visit(t.at);return s&&(i+=" at "+s),i},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return e.visit(t.value.x)+" "+e.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return e.visit_color(t.value,t)},visit_hex:function(t){return e.visit_color("#"+t.value,t)},visit_rgb:function(t){return e.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return e.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,i){var s=t,r=e.visit(i.length);return r&&(s+=" "+r),s},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var i="",s=t.length;return t.forEach(function(r,n){i+=e.visit(r),n<s-1&&(i+=", ")}),i},visit:function(t){if(!t)return"";var i="";if(t instanceof Array)return e.visit_array(t,i);if(t.type){var s=e["visit_"+t.type];if(s)return s(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return e.visit(t)}}();var Re=Re||{};Re.parse=function(){var e={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function i(T){var k=new Error(t+": "+T);throw k.source=t,k}function s(){var T=r();return t.length>0&&i("Invalid input not EOF"),T}function r(){return g(n)}function n(){return o("linear-gradient",e.linearGradient,l)||o("repeating-linear-gradient",e.repeatingLinearGradient,l)||o("radial-gradient",e.radialGradient,u)||o("repeating-radial-gradient",e.repeatingRadialGradient,u)}function o(T,k,V){return a(k,function(w){var z=V();return z&&($(e.comma)||i("Missing comma before color stops")),{type:T,orientation:z,colorStops:g(x)}})}function a(T,k){var V=$(T);if(V){$(e.startCall)||i("Missing (");var w=k(V);return $(e.endCall)||i("Missing )"),w}}function l(){return h()||c()}function h(){return b("directional",e.sideOrCorner,1)}function c(){return b("angular",e.angleValue,1)}function u(){var T,k=d(),V;return k&&(T=[],T.push(k),V=t,$(e.comma)&&(k=d(),k?T.push(k):t=V)),T}function d(){var T=f()||p();if(T)T.at=m();else{var k=_();if(k){T=k;var V=m();V&&(T.at=V)}else{var w=v();w&&(T={type:"default-radial",at:w})}}return T}function f(){var T=b("shape",/^(circle)/i,0);return T&&(T.style=S()||_()),T}function p(){var T=b("shape",/^(ellipse)/i,0);return T&&(T.style=P()||_()),T}function _(){return b("extent-keyword",e.extentKeywords,1)}function m(){if(b("position",/^at/,0)){var T=v();return T||i("Missing positioning value"),T}}function v(){var T=y();if(T.x||T.y)return{type:"position",value:T}}function y(){return{x:P(),y:P()}}function g(T){var k=T(),V=[];if(k)for(V.push(k);$(e.comma);)k=T(),k?V.push(k):i("One extra comma");return V}function x(){var T=E();return T||i("Expected color definition"),T.length=P(),T}function E(){return A()||O()||C()||M()}function M(){return b("literal",e.literalColor,0)}function A(){return b("hex",e.hexColor,1)}function C(){return a(e.rgbColor,function(){return{type:"rgb",value:g(U)}})}function O(){return a(e.rgbaColor,function(){return{type:"rgba",value:g(U)}})}function U(){return $(e.number)[1]}function P(){return b("%",e.percentageValue,1)||F()||S()}function F(){return b("position-keyword",e.positionKeywords,1)}function S(){return b("px",e.pixelValue,1)||b("em",e.emValue,1)}function b(T,k,V){var w=$(k);if(w)return{type:T,value:w[V]}}function $(T){var k,V;return V=/^[\n\r\t\s]+/.exec(t),V&&q(V[0].length),k=T.exec(t),k&&q(k[0].length),k}function q(T){t=t.substr(T)}return function(T){return t=T.toString(),s()}}();var iu=Re.parse;Re.stringify;var Yn={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},qn={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function su(e){var t,i=[],s=1,r;if(typeof e=="string")if(Yn[e])i=Yn[e].slice(),r="rgb";else if(e==="transparent")s=0,r="rgb",i=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var n=e.slice(1),o=n.length,a=o<=4;s=1,a?(i=[parseInt(n[0]+n[0],16),parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16)],o===4&&(s=parseInt(n[3]+n[3],16)/255)):(i=[parseInt(n[0]+n[1],16),parseInt(n[2]+n[3],16),parseInt(n[4]+n[5],16)],o===8&&(s=parseInt(n[6]+n[7],16)/255)),i[0]||(i[0]=0),i[1]||(i[1]=0),i[2]||(i[2]=0),r="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var l=t[1],h=l==="rgb",n=l.replace(/a$/,"");r=n;var o=n==="cmyk"?4:n==="gray"?1:3;i=t[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(d,f){if(/%$/.test(d))return f===o?parseFloat(d)/100:n==="rgb"?parseFloat(d)*255/100:parseFloat(d);if(n[f]==="h"){if(/deg$/.test(d))return parseFloat(d);if(qn[d]!==void 0)return qn[d]}return parseFloat(d)}),l===n&&i.push(1),s=h||i[o]===void 0?1:i[o],i=i.slice(0,o)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(i=e.match(/([0-9]+)/g).map(function(c){return parseFloat(c)}),r=e.match(/([a-z])/ig).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(i=[e[0],e[1],e[2]],r="rgb",s=e.length===4?e[3]:1):e instanceof Object&&(e.r!=null||e.red!=null||e.R!=null?(r="rgb",i=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(r="hsl",i=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),s=e.a||e.alpha||e.opacity||1,e.opacity!=null&&(s/=100)):(r="rgb",i=[e>>>16,(e&65280)>>>8,e&255]);return{space:r,values:i,alpha:s}}var Pr={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]},qs={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(e){var t=e[0]/360,i=e[1]/100,s=e[2]/100,r,n,o,a,l;if(i===0)return l=s*255,[l,l,l];s<.5?n=s*(1+i):n=s+i-s*i,r=2*s-n,a=[0,0,0];for(var h=0;h<3;h++)o=t+1/3*-(h-1),o<0?o++:o>1&&o--,6*o<1?l=r+(n-r)*6*o:2*o<1?l=n:3*o<2?l=r+(n-r)*(2/3-o)*6:l=r,a[h]=l*255;return a}};Pr.hsl=function(e){var t=e[0]/255,i=e[1]/255,s=e[2]/255,r=Math.min(t,i,s),n=Math.max(t,i,s),o=n-r,a,l,h;return n===r?a=0:t===n?a=(i-s)/o:i===n?a=2+(s-t)/o:s===n&&(a=4+(t-i)/o),a=Math.min(a*60,360),a<0&&(a+=360),h=(r+n)/2,n===r?l=0:h<=.5?l=o/(n+r):l=o/(2-n-r),[a,l*100,h*100]};function ru(e){Array.isArray(e)&&e.raw&&(e=String.raw(...arguments));var t,i=su(e);if(!i.space)return[];const s=i.space[0]==="h"?qs.min:Pr.min,r=i.space[0]==="h"?qs.max:Pr.max;return t=Array(3),t[0]=Math.min(Math.max(i.values[0],s[0]),r[0]),t[1]=Math.min(Math.max(i.values[1],s[1]),r[1]),t[2]=Math.min(Math.max(i.values[2],s[2]),r[2]),i.space[0]==="h"&&(t=qs.rgb(t)),t.push(Math.min(Math.max(i.alpha,0),1)),t}function Ra(e){switch(typeof e){case"string":return nu(e);case"number":return qe(e);default:return e}}function nu(e){const t=ru(e);if(!t)throw new Error(`Unable to parse color "${e}" as RGBA.`);return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function ou(e){const t=iu(mu(e));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const i=t[0],s=au(i.type),r=lu(i.colorStops),n=fu(i.orientation);return{type:s,stops:r,angle:n}}function au(e){const t={"linear-gradient":0,"radial-gradient":1};if(!(e in t))throw new Error(`Unsupported gradient type "${e}"`);return t[e]}function lu(e){const t=uu(e),i=[];for(let s=0;s<e.length;s++){const r=hu(e[s]);i.push({offset:t[s],color:r.slice(0,3),alpha:r[3]})}return i}function hu(e){return Ra(cu(e))}function cu(e){switch(e.type){case"hex":return`#${e.value}`;case"literal":return e.value;default:return`${e.type}(${e.value.join(",")})`}}function uu(e){const t=[];for(let r=0;r<e.length;r++){const n=e[r];let o=-1;n.type==="literal"&&n.length&&"type"in n.length&&n.length.type==="%"&&"value"in n.length&&(o=parseFloat(n.length.value)/100),t.push(o)}const i=r=>{for(let n=r;n<t.length;n++)if(t[n]!==-1)return{indexDelta:n-r,offset:t[n]};return{indexDelta:t.length-1-r,offset:1}};let s=0;for(let r=0;r<t.length;r++){const n=t[r];if(n!==-1)s=n;else if(r===0)t[r]=0;else if(r+1===t.length)t[r]=1;else{const o=i(r),a=(o.offset-s)/(1+o.indexDelta);for(let l=0;l<=o.indexDelta;l++)t[r+l]=s+(l+1)*a;r+=o.indexDelta,s=t[r]}}return t.map(du)}function du(e){return e.toString().length>6?parseFloat(e.toString().substring(0,6)):e}function fu(e){if(typeof e>"u")return 0;if("type"in e&&"value"in e)switch(e.type){case"angular":return parseFloat(e.value);case"directional":return pu(e.value)}return 0}function pu(e){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(e in t))throw new Error(`Unsupported directional value "${e}"`);return t[e]}function mu(e){let t=e.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var gu=Object.defineProperty,_u=Object.defineProperties,vu=Object.getOwnPropertyDescriptors,Kn=Object.getOwnPropertySymbols,xu=Object.prototype.hasOwnProperty,yu=Object.prototype.propertyIsEnumerable,Zn=(e,t,i)=>t in e?gu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Ks=(e,t)=>{for(var i in t||(t={}))xu.call(t,i)&&Zn(e,i,t[i]);if(Kn)for(var i of Kn(t))yu.call(t,i)&&Zn(e,i,t[i]);return e},bu=(e,t)=>_u(e,vu(t));const Qn=90;function Tu(e){return[...e].sort((t,i)=>t.offset-i.offset)}const tn=class extends j{constructor(t){t&&"css"in t&&(t=bu(Ks({},ou(t.css||"")),{alpha:t.alpha,maxColors:t.maxColors}));const i=Ks(Ks({},tn.defaults),t);if(!i.stops||i.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");super(eu,tu),this._stops=[],this.autoFit=!1,Object.assign(this,i)}get stops(){return this._stops}set stops(t){const i=Tu(t),s=new Float32Array(i.length*3),r=0,n=1,o=2;for(let a=0;a<i.length;a++){const l=Ra(i[a].color),h=a*3;s[h+r]=l[r],s[h+n]=l[n],s[h+o]=l[o]}this.uniforms.uColors=s,this.uniforms.uOffsets=i.map(a=>a.offset),this.uniforms.uAlphas=i.map(a=>a.alpha),this.uniforms.uNumStops=i.length,this._stops=i}set type(t){this.uniforms.uType=t}get type(){return this.uniforms.uType}set angle(t){this.uniforms.uAngle=t-Qn}get angle(){return this.uniforms.uAngle+Qn}set alpha(t){this.uniforms.uAlpha=t}get alpha(){return this.uniforms.uAlpha}set maxColors(t){this.uniforms.uMaxColors=t}get maxColors(){return this.uniforms.uMaxColors}};let Gi=tn;Gi.LINEAR=0,Gi.RADIAL=1,Gi.CONIC=2,Gi.defaults={type:tn.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0};var wu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Eu=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;let Cu=class extends j{constructor(){super(wu,Eu)}};var Su=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Au=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;const Ma=class extends j{constructor(t){super(Su,Au),this.time=0,this.seed=0,this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Ma.defaults,t)}apply(t,i,s,r){const{width:n,height:o}=i.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,i,s,r)}set curvature(t){this.uniforms.curvature=t}get curvature(){return this.uniforms.curvature}set lineWidth(t){this.uniforms.lineWidth=t}get lineWidth(){return this.uniforms.lineWidth}set lineContrast(t){this.uniforms.lineContrast=t}get lineContrast(){return this.uniforms.lineContrast}set verticalLine(t){this.uniforms.verticalLine=t}get verticalLine(){return this.uniforms.verticalLine}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let Iu=Ma;Iu.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0};var Pu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ru=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;
uniform bool grayscale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   vec3 colorRGB = vec3(color);

   if (grayscale)
   {
       colorRGB = vec3(color.r + color.g + color.b) / 3.0;
   }

   gl_FragColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`;let Mu=class extends j{constructor(t=1,i=5,s=!0){super(Pu,Ru),this.scale=t,this.angle=i,this.grayscale=s}get scale(){return this.uniforms.scale}set scale(t){this.uniforms.scale=t}get angle(){return this.uniforms.angle}set angle(t){this.uniforms.angle=t}get grayscale(){return this.uniforms.grayscale}set grayscale(t){this.uniforms.grayscale=t}};var Du=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Fu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`,Bu=Object.defineProperty,Jn=Object.getOwnPropertySymbols,Lu=Object.prototype.hasOwnProperty,Ou=Object.prototype.propertyIsEnumerable,to=(e,t,i)=>t in e?Bu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,eo=(e,t)=>{for(var i in t||(t={}))Lu.call(t,i)&&to(e,i,t[i]);if(Jn)for(var i of Jn(t))Ou.call(t,i)&&to(e,i,t[i]);return e};const Rr=class extends j{constructor(t){super(),this.angle=45,this._distance=5,this._resolution=R.FILTER_RESOLUTION;const i=t?eo(eo({},Rr.defaults),t):Rr.defaults,{kernels:s,blur:r,quality:n,pixelSize:o,resolution:a}=i;this._offset=new re(this._updatePadding,this),this._tintFilter=new j(Du,Fu),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=this._offset,this._tintFilter.resolution=a,this._blurFilter=s?new as(s):new as(r,n),this.pixelSize=o,this.resolution=a;const{shadowOnly:l,rotation:h,distance:c,offset:u,alpha:d,color:f}=i;this.shadowOnly=l,h!==void 0&&c!==void 0?(this.rotation=h,this.distance=c):this.offset=u,this.alpha=d,this.color=f}apply(t,i,s,r){const n=t.getFilterTexture();this._tintFilter.apply(t,i,n,1),this._blurFilter.apply(t,n,s,r),this.shadowOnly!==!0&&t.applyFilter(this,i,s,0),t.returnFilterTexture(n)}_updatePadding(){const t=Math.max(Math.abs(this._offset.x),Math.abs(this._offset.y));this.padding=t+this.blur*2}_updateShift(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))}set offset(t){this._offset.copyFrom(t),this._updatePadding()}get offset(){return this._offset}get resolution(){return this._resolution}set resolution(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)}get distance(){return this._distance}set distance(t){Y("5.3.0","DropShadowFilter distance is deprecated, use offset"),this._distance=t,this._updatePadding(),this._updateShift()}get rotation(){return this.angle/xi}set rotation(t){Y("5.3.0","DropShadowFilter rotation is deprecated, use offset"),this.angle=t*xi,this._updateShift()}get alpha(){return this._tintFilter.uniforms.alpha}set alpha(t){this._tintFilter.uniforms.alpha=t}get color(){return Ke(this._tintFilter.uniforms.color)}set color(t){qe(t,this._tintFilter.uniforms.color)}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.blur}set blur(t){this._blurFilter.blur=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){this._blurFilter.pixelSize=t}};let ku=Rr;ku.defaults={offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:R.FILTER_RESOLUTION};var Nu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Uu=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;const Mr=class extends j{constructor(t){super(Nu,Uu),this.offset=100,this.fillMode=Mr.TRANSPARENT,this.average=!1,this.seed=0,this.minSize=8,this.sampleSize=512,this._slices=0,this._offsets=new Float32Array(1),this._sizes=new Float32Array(1),this._direction=-1,this.uniforms.dimensions=new Float32Array(2),this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=B.from(this._canvas,{scaleMode:qt.NEAREST}),Object.assign(this,Mr.defaults,t)}apply(t,i,s,r){const{width:n,height:o}=i.filterFrame;this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/n,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,i,s,r)}_randomizeSizes(){const t=this._sizes,i=this._slices-1,s=this.sampleSize,r=Math.min(this.minSize/s,.9/this._slices);if(this.average){const n=this._slices;let o=1;for(let a=0;a<i;a++){const l=o/(n-a),h=Math.max(l*(1-Math.random()*.6),r);t[a]=h,o-=h}t[i]=o}else{let n=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<i;a++){const l=Math.max(o*n*Math.random(),r);t[a]=l,n-=l}t[i]=n}this.shuffle()}shuffle(){const t=this._sizes,i=this._slices-1;for(let s=i;s>0;s--){const r=Math.random()*s>>0,n=t[s];t[s]=t[r],t[r]=n}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,i=this.texture,s=this._canvas.getContext("2d");s.clearRect(0,0,8,t);let r,n=0;for(let o=0;o<this._slices;o++){r=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=r>0?r:0,h=r<0?-r:0;s.fillStyle=`rgba(${l}, ${h}, 0, 1)`,s.fillRect(0,n>>0,t,a+1>>0),n+=a}i.baseTexture.update(),this.uniforms.displacementMap=i}set sizes(t){const i=Math.min(this._slices,t.length);for(let s=0;s<i;s++)this._sizes[s]=t[s]}get sizes(){return this._sizes}set offsets(t){const i=Math.min(this._slices,t.length);for(let s=0;s<i;s++)this._offsets[s]=t[s]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())}get direction(){return this._direction}set direction(t){if(this._direction===t)return;this._direction=t;const i=t*xi;this.uniforms.sinDir=Math.sin(i),this.uniforms.cosDir=Math.cos(i)}get red(){return this.uniforms.red}set red(t){this.uniforms.red=t}get green(){return this.uniforms.green}set green(t){this.uniforms.green=t}get blue(){return this.uniforms.blue}set blue(t){this.uniforms.blue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};let be=Mr;be.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},be.TRANSPARENT=0,be.ORIGINAL=1,be.LOOP=2,be.CLAMP=3,be.MIRROR=4;var Gu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,zu=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;
uniform float alpha;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    if (knockout) {
      float resultAlpha = (outerGlowAlpha + innerGlowAlpha) * alpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      vec4 outerGlowColor = outerGlowStrength * glowColor.rgba * alpha;
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;const Da=class extends j{constructor(t){const i=Object.assign({},Da.defaults,t),{outerStrength:s,innerStrength:r,color:n,knockout:o,quality:a,alpha:l}=i,h=Math.round(i.distance);super(Gu,zu.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/a/h).toFixed(7)}`).replace(/__DIST__/gi,`${h.toFixed(0)}.0`)),this.uniforms.glowColor=new Float32Array([0,0,0,1]),this.uniforms.alpha=1,Object.assign(this,{color:n,outerStrength:s,innerStrength:r,padding:h,knockout:o,alpha:l})}get color(){return Ke(this.uniforms.glowColor)}set color(t){qe(t,this.uniforms.glowColor)}get outerStrength(){return this.uniforms.outerStrength}set outerStrength(t){this.uniforms.outerStrength=t}get innerStrength(){return this.uniforms.innerStrength}set innerStrength(t){this.uniforms.innerStrength=t}get knockout(){return this.uniforms.knockout}set knockout(t){this.uniforms.knockout=t}get alpha(){return this.uniforms.alpha}set alpha(t){this.uniforms.alpha=t}};let Hu=Da;Hu.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1,alpha:1};var $u=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Xu=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,Vu=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;const Fa=class extends j{constructor(t){super($u,Vu.replace("${perlin}",Xu)),this.parallel=!0,this.time=0,this._angle=0,this.uniforms.dimensions=new Float32Array(2);const i=Object.assign(Fa.defaults,t);this._angleLight=new W,this.angle=i.angle,this.gain=i.gain,this.lacunarity=i.lacunarity,this.alpha=i.alpha,this.parallel=i.parallel,this.center=i.center,this.time=i.time}apply(t,i,s,r){const{width:n,height:o}=i.filterFrame;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=n,this.uniforms.dimensions[1]=o,this.uniforms.aspect=o/n,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,s,r)}get angle(){return this._angle}set angle(t){this._angle=t;const i=t*xi;this._angleLight.x=Math.cos(i),this._angleLight.y=Math.sin(i)}get gain(){return this.uniforms.gain}set gain(t){this.uniforms.gain=t}get lacunarity(){return this.uniforms.lacunarity}set lacunarity(t){this.uniforms.lacunarity=t}get alpha(){return this.uniforms.alpha}set alpha(t){this.uniforms.alpha=t}};let Ba=Fa;Ba.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1};var ju=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Wu=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float uHue;
uniform float uAlpha;
uniform bool uColorize;
uniform float uSaturation;
uniform float uLightness;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    vec4 result = color;

    // colorize
    if (uColorize) {
        result.rgb = vec3(getWeightedAverage(result.rgb), 0., 0.);
    }

    // hue
    result.rgb = hueShift(result.rgb, uHue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (result.r + result.g + result.b) / 3.0;

    if (uSaturation > 0.) {
        result.rgb += (average - result.rgb) * (1. - 1. / (1.001 - uSaturation));
    } else {
        result.rgb -= (average - result.rgb) * uSaturation;
    }

    // lightness
    result.rgb = mix(result.rgb, vec3(ceil(uLightness)) * color.a, abs(uLightness));

    // alpha
    gl_FragColor = mix(color, result, uAlpha);
}
`;const La=class extends j{constructor(e){super(ju,Wu),this._hue=0;const t=Object.assign({},La.defaults,e);Object.assign(this,t)}get hue(){return this._hue}set hue(e){this._hue=e,this.uniforms.uHue=this._hue*(Math.PI/180)}get alpha(){return this.uniforms.uAlpha}set alpha(e){this.uniforms.uAlpha=e}get colorize(){return this.uniforms.uColorize}set colorize(e){this.uniforms.uColorize=e}get lightness(){return this.uniforms.uLightness}set lightness(e){this.uniforms.uLightness=e}get saturation(){return this.uniforms.uSaturation}set saturation(e){this.uniforms.uSaturation=e}};let Yu=La;Yu.defaults={hue:0,saturation:0,lightness:0,colorize:!1,alpha:1};var qu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ku=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;let Zu=class extends j{constructor(t,i=.05,s=t.length){super(qu,Ku.replace(/%maxColors%/g,s.toFixed(0))),this._replacements=[],this._maxColors=0,this.epsilon=i,this._maxColors=s,this.uniforms.originalColors=new Float32Array(s*3),this.uniforms.targetColors=new Float32Array(s*3),this.replacements=t}set replacements(t){const i=this.uniforms.originalColors,s=this.uniforms.targetColors,r=t.length;if(r>this._maxColors)throw new Error(`Length of replacements (${r}) exceeds the maximum colors length (${this._maxColors})`);i[r*3]=-1;for(let n=0;n<r;n++){const o=t[n];let a=o[0];typeof a=="number"?a=qe(a):o[0]=Ke(a),i[n*3]=a[0],i[n*3+1]=a[1],i[n*3+2]=a[2];let l=o[1];typeof l=="number"?l=qe(l):o[1]=Ke(l),s[n*3]=l[0],s[n*3+1]=l[1],s[n*3+2]=l[2]}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}set epsilon(t){this.uniforms.epsilon=t}get epsilon(){return this.uniforms.epsilon}};var Qu=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ju=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;const Oa=class extends j{constructor(t,i=0){super(Qu,Ju),this.seed=0,this.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(this.seed=t,t=void 0):this.seed=i,Object.assign(this,Oa.defaults,t)}apply(t,i,s,r){var n,o;this.uniforms.dimensions[0]=(n=i.filterFrame)==null?void 0:n.width,this.uniforms.dimensions[1]=(o=i.filterFrame)==null?void 0:o.height,this.uniforms.seed=this.seed,t.applyFilter(this,i,s,r)}set sepia(t){this.uniforms.sepia=t}get sepia(){return this.uniforms.sepia}set noise(t){this.uniforms.noise=t}get noise(){return this.uniforms.noise}set noiseSize(t){this.uniforms.noiseSize=t}get noiseSize(){return this.uniforms.noiseSize}set scratch(t){this.uniforms.scratch=t}get scratch(){return this.uniforms.scratch}set scratchDensity(t){this.uniforms.scratchDensity=t}get scratchDensity(){return this.uniforms.scratchDensity}set scratchWidth(t){this.uniforms.scratchWidth=t}get scratchWidth(){return this.uniforms.scratchWidth}set vignetting(t){this.uniforms.vignetting=t}get vignetting(){return this.uniforms.vignetting}set vignettingAlpha(t){this.uniforms.vignettingAlpha=t}get vignettingAlpha(){return this.uniforms.vignettingAlpha}set vignettingBlur(t){this.uniforms.vignettingBlur=t}get vignettingBlur(){return this.uniforms.vignettingBlur}};let ka=Oa;ka.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3};var td=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ed=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterClamp;

uniform float uAlpha;
uniform vec2 uThickness;
uniform vec4 uColor;
uniform bool uKnockout;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${angleStep};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture2D(uSampler, vTextureCoord);
    vec4 contentColor = sourceColor * float(!uKnockout);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    gl_FragColor = contentColor + outlineColor;
}
`;const Qi=class extends j{constructor(t=1,i=0,s=.1,r=1,n=!1){super(td,ed.replace(/\$\{angleStep\}/,Qi.getAngleStep(s))),this._thickness=1,this._alpha=1,this._knockout=!1,this.uniforms.uThickness=new Float32Array([0,0]),this.uniforms.uColor=new Float32Array([0,0,0,1]),this.uniforms.uAlpha=r,this.uniforms.uKnockout=n,Object.assign(this,{thickness:t,color:i,quality:s,alpha:r,knockout:n})}static getAngleStep(t){const i=Math.max(t*Qi.MAX_SAMPLES,Qi.MIN_SAMPLES);return(Math.PI*2/i).toFixed(7)}apply(t,i,s,r){this.uniforms.uThickness[0]=this._thickness/i._frame.width,this.uniforms.uThickness[1]=this._thickness/i._frame.height,this.uniforms.uAlpha=this._alpha,this.uniforms.uKnockout=this._knockout,t.applyFilter(this,i,s,r)}get alpha(){return this._alpha}set alpha(t){this._alpha=t}get color(){return Ke(this.uniforms.uColor)}set color(t){qe(t,this.uniforms.uColor)}get knockout(){return this._knockout}set knockout(t){this._knockout=t}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this.padding=t}};let io=Qi;io.MIN_SAMPLES=1,io.MAX_SAMPLES=100;var id=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,sd=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;let rd=class extends j{constructor(t=10){super(id,sd),this.size=t}get size(){return this.uniforms.size}set size(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t}};var nd=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,od=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;const Na=class extends j{constructor(t){super(nd,od),this.time=0,this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,Na.defaults,t)}apply(t,i,s,r){var n,o;this.uniforms.dimensions[0]=(n=i.filterFrame)==null?void 0:n.width,this.uniforms.dimensions[1]=(o=i.filterFrame)==null?void 0:o.height,this.uniforms.time=this.time,t.applyFilter(this,i,s,r)}set mirror(t){this.uniforms.mirror=t}get mirror(){return this.uniforms.mirror}set boundary(t){this.uniforms.boundary=t}get boundary(){return this.uniforms.boundary}set amplitude(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]}get amplitude(){return this.uniforms.amplitude}set waveLength(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]}get waveLength(){return this.uniforms.waveLength}set alpha(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]}get alpha(){return this.uniforms.alpha}};let Ua=Na;Ua.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0};var ad=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ld=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;const Ga=class extends j{constructor(t=[0,0],i,s=0){super(ad,ld),this.center=t,Object.assign(this,Ga.defaults,i),this.time=s}apply(t,i,s,r){this.uniforms.time=this.time,t.applyFilter(this,i,s,r)}get center(){return this.uniforms.center}set center(t){this.uniforms.center=t}get amplitude(){return this.uniforms.amplitude}set amplitude(t){this.uniforms.amplitude=t}get wavelength(){return this.uniforms.wavelength}set wavelength(t){this.uniforms.wavelength=t}get brightness(){return this.uniforms.brightness}set brightness(t){this.uniforms.brightness=t}get speed(){return this.uniforms.speed}set speed(t){this.uniforms.speed=t}get radius(){return this.uniforms.radius}set radius(t){this.uniforms.radius=t}};let za=Ga;za.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1};var hd=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,cd=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;let Ha=class extends j{constructor(t){var i,s;super(hd,cd),this.uniforms.blur=t.blur,this.uniforms.gradientBlur=t.gradientBlur,this.uniforms.start=(i=t.start)!=null?i:new W(0,window.innerHeight/2),this.uniforms.end=(s=t.end)!=null?s:new W(600,window.innerHeight/2),this.uniforms.delta=new W(30,30),this.uniforms.texSize=new W(window.innerWidth,window.innerHeight),this.updateDelta()}updateDelta(){this.uniforms.delta.x=0,this.uniforms.delta.y=0}get blur(){return this.uniforms.blur}set blur(t){this.uniforms.blur=t}get gradientBlur(){return this.uniforms.gradientBlur}set gradientBlur(t){this.uniforms.gradientBlur=t}get start(){return this.uniforms.start}set start(t){this.uniforms.start=t,this.updateDelta()}get end(){return this.uniforms.end}set end(t){this.uniforms.end=t,this.updateDelta()}},ud=class extends Ha{updateDelta(){const t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,s=Math.sqrt(t*t+i*i);this.uniforms.delta.x=t/s,this.uniforms.delta.y=i/s}},dd=class extends Ha{updateDelta(){const t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,s=Math.sqrt(t*t+i*i);this.uniforms.delta.x=-i/s,this.uniforms.delta.y=t/s}};const $a=class extends j{constructor(t,i,s,r){super(),typeof t=="number"&&(Y("5.3.0","TiltShiftFilter constructor arguments is deprecated, use options."),t={blur:t,gradientBlur:i,start:s,end:r}),t=Object.assign({},$a.defaults,t),this.tiltShiftXFilter=new ud(t),this.tiltShiftYFilter=new dd(t)}apply(t,i,s,r){const n=t.getFilterTexture();this.tiltShiftXFilter.apply(t,i,n,1),this.tiltShiftYFilter.apply(t,n,s,r),t.returnFilterTexture(n)}get blur(){return this.tiltShiftXFilter.blur}set blur(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t}get gradientBlur(){return this.tiltShiftXFilter.gradientBlur}set gradientBlur(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t}get start(){return this.tiltShiftXFilter.start}set start(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t}get end(){return this.tiltShiftXFilter.end}set end(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t}};let fd=$a;fd.defaults={blur:100,gradientBlur:600,start:void 0,end:void 0};var pd=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,md=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;const Xa=class extends j{constructor(e){super(pd,md),Object.assign(this,Xa.defaults,e)}get offset(){return this.uniforms.offset}set offset(e){this.uniforms.offset=e}get radius(){return this.uniforms.radius}set radius(e){this.uniforms.radius=e}get angle(){return this.uniforms.angle}set angle(e){this.uniforms.angle=e}};let Va=Xa;Va.defaults={radius:200,angle:4,padding:20,offset:new W};var gd=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_d=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,so=Object.getOwnPropertySymbols,vd=Object.prototype.hasOwnProperty,xd=Object.prototype.propertyIsEnumerable,yd=(e,t)=>{var i={};for(var s in e)vd.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(e!=null&&so)for(var s of so(e))t.indexOf(s)<0&&xd.call(e,s)&&(i[s]=e[s]);return i};const ja=class extends j{constructor(e){const t=Object.assign(ja.defaults,e),{maxKernelSize:i}=t,s=yd(t,["maxKernelSize"]);super(gd,_d.replace("${maxKernelSize}",i.toFixed(1))),Object.assign(this,s)}get center(){return this.uniforms.uCenter}set center(e){this.uniforms.uCenter=e}get strength(){return this.uniforms.uStrength}set strength(e){this.uniforms.uStrength=e}get innerRadius(){return this.uniforms.uInnerRadius}set innerRadius(e){this.uniforms.uInnerRadius=e}get radius(){return this.uniforms.uRadius}set radius(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e}};let Wa=ja;Wa.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32};class ls{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}clear(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}getRectangle(t){return this.minX>this.maxX||this.minY>this.maxY?K.EMPTY:(t=t||new K(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)}addPoint(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)}addPointMatrix(t,i){const{a:s,b:r,c:n,d:o,tx:a,ty:l}=t,h=s*i.x+n*i.y+a,c=r*i.x+o*i.y+l;this.minX=Math.min(this.minX,h),this.maxX=Math.max(this.maxX,h),this.minY=Math.min(this.minY,c),this.maxY=Math.max(this.maxY,c)}addQuad(t){let i=this.minX,s=this.minY,r=this.maxX,n=this.maxY,o=t[0],a=t[1];i=o<i?o:i,s=a<s?a:s,r=o>r?o:r,n=a>n?a:n,o=t[2],a=t[3],i=o<i?o:i,s=a<s?a:s,r=o>r?o:r,n=a>n?a:n,o=t[4],a=t[5],i=o<i?o:i,s=a<s?a:s,r=o>r?o:r,n=a>n?a:n,o=t[6],a=t[7],i=o<i?o:i,s=a<s?a:s,r=o>r?o:r,n=a>n?a:n,this.minX=i,this.minY=s,this.maxX=r,this.maxY=n}addFrame(t,i,s,r,n){this.addFrameMatrix(t.worldTransform,i,s,r,n)}addFrameMatrix(t,i,s,r,n){const o=t.a,a=t.b,l=t.c,h=t.d,c=t.tx,u=t.ty;let d=this.minX,f=this.minY,p=this.maxX,_=this.maxY,m=o*i+l*s+c,v=a*i+h*s+u;d=m<d?m:d,f=v<f?v:f,p=m>p?m:p,_=v>_?v:_,m=o*r+l*s+c,v=a*r+h*s+u,d=m<d?m:d,f=v<f?v:f,p=m>p?m:p,_=v>_?v:_,m=o*i+l*n+c,v=a*i+h*n+u,d=m<d?m:d,f=v<f?v:f,p=m>p?m:p,_=v>_?v:_,m=o*r+l*n+c,v=a*r+h*n+u,d=m<d?m:d,f=v<f?v:f,p=m>p?m:p,_=v>_?v:_,this.minX=d,this.minY=f,this.maxX=p,this.maxY=_}addVertexData(t,i,s){let r=this.minX,n=this.minY,o=this.maxX,a=this.maxY;for(let l=i;l<s;l+=2){const h=t[l],c=t[l+1];r=h<r?h:r,n=c<n?c:n,o=h>o?h:o,a=c>a?c:a}this.minX=r,this.minY=n,this.maxX=o,this.maxY=a}addVertices(t,i,s,r){this.addVerticesMatrix(t.worldTransform,i,s,r)}addVerticesMatrix(t,i,s,r,n=0,o=n){const a=t.a,l=t.b,h=t.c,c=t.d,u=t.tx,d=t.ty;let f=this.minX,p=this.minY,_=this.maxX,m=this.maxY;for(let v=s;v<r;v+=2){const y=i[v],g=i[v+1],x=a*y+h*g+u,E=c*g+l*y+d;f=Math.min(f,x-n),_=Math.max(_,x+n),p=Math.min(p,E-o),m=Math.max(m,E+o)}this.minX=f,this.minY=p,this.maxX=_,this.maxY=m}addBounds(t){const i=this.minX,s=this.minY,r=this.maxX,n=this.maxY;this.minX=t.minX<i?t.minX:i,this.minY=t.minY<s?t.minY:s,this.maxX=t.maxX>r?t.maxX:r,this.maxY=t.maxY>n?t.maxY:n}addBoundsMask(t,i){const s=t.minX>i.minX?t.minX:i.minX,r=t.minY>i.minY?t.minY:i.minY,n=t.maxX<i.maxX?t.maxX:i.maxX,o=t.maxY<i.maxY?t.maxY:i.maxY;if(s<=n&&r<=o){const a=this.minX,l=this.minY,h=this.maxX,c=this.maxY;this.minX=s<a?s:a,this.minY=r<l?r:l,this.maxX=n>h?n:h,this.maxY=o>c?o:c}}addBoundsMatrix(t,i){this.addFrameMatrix(i,t.minX,t.minY,t.maxX,t.maxY)}addBoundsArea(t,i){const s=t.minX>i.x?t.minX:i.x,r=t.minY>i.y?t.minY:i.y,n=t.maxX<i.x+i.width?t.maxX:i.x+i.width,o=t.maxY<i.y+i.height?t.maxY:i.y+i.height;if(s<=n&&r<=o){const a=this.minX,l=this.minY,h=this.maxX,c=this.maxY;this.minX=s<a?s:a,this.minY=r<l?r:l,this.maxX=n>h?n:h,this.maxY=o>c?o:c}}pad(t=0,i=t){this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=i,this.maxY+=i)}addFramePad(t,i,s,r,n,o){t-=n,i-=o,s+=n,r+=o,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>s?this.maxX:s,this.minY=this.minY<i?this.minY:i,this.maxY=this.maxY>r?this.maxY:r}}class nt extends Ce{constructor(){super(),this.tempDisplayObjectParent=null,this.transform=new Qr,this.alpha=1,this.visible=!0,this.renderable=!0,this.cullable=!1,this.cullArea=null,this.parent=null,this.worldAlpha=1,this._lastSortedIndex=0,this._zIndex=0,this.filterArea=null,this.filters=null,this._enabledFilters=null,this._bounds=new ls,this._localBounds=null,this._boundsID=0,this._boundsRect=null,this._localBoundsRect=null,this._mask=null,this._maskRefCount=0,this._destroyed=!1,this.isSprite=!1,this.isMask=!1}static mixin(t){const i=Object.keys(t);for(let s=0;s<i.length;++s){const r=i[s];Object.defineProperty(nt.prototype,r,Object.getOwnPropertyDescriptor(t,r))}}get destroyed(){return this._destroyed}_recursivePostUpdateTransform(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)}updateTransform(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha}getBounds(t,i){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),i||(this._boundsRect||(this._boundsRect=new K),i=this._boundsRect),this._bounds.getRectangle(i)}getLocalBounds(t){t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds||(this._localBounds=new ls);const i=this.transform,s=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;const r=this._bounds,n=this._boundsID;this._bounds=this._localBounds;const o=this.getBounds(!1,t);return this.parent=s,this.transform=i,this._bounds=r,this._bounds.updateID+=this._boundsID-n,o}toGlobal(t,i,s=!1){return s||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,i)}toLocal(t,i,s,r){return i&&(t=i.toGlobal(t,s,r)),r||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,s)}setParent(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t}removeFromParent(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t=0,i=0,s=1,r=1,n=0,o=0,a=0,l=0,h=0){return this.position.x=t,this.position.y=i,this.scale.x=s||1,this.scale.y=r||1,this.rotation=n,this.skew.x=o,this.skew.y=a,this.pivot.x=l,this.pivot.y=h,this}destroy(t){this.removeFromParent(),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.eventMode="auto",this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()}get _tempDisplayObjectParent(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new bd),this.tempDisplayObjectParent}enableTempParent(){const t=this.parent;return this.parent=this._tempDisplayObjectParent,t}disableTempParent(t){this.parent=t}get x(){return this.position.x}set x(t){this.transform.position.x=t}get y(){return this.position.y}set y(t){this.transform.position.y=t}get worldTransform(){return this.transform.worldTransform}get localTransform(){return this.transform.localTransform}get position(){return this.transform.position}set position(t){this.transform.position.copyFrom(t)}get scale(){return this.transform.scale}set scale(t){this.transform.scale.copyFrom(t)}get pivot(){return this.transform.pivot}set pivot(t){this.transform.pivot.copyFrom(t)}get skew(){return this.transform.skew}set skew(t){this.transform.skew.copyFrom(t)}get rotation(){return this.transform.rotation}set rotation(t){this.transform.rotation=t}get angle(){return this.transform.rotation*Mh}set angle(t){this.transform.rotation=t*xi}get zIndex(){return this._zIndex}set zIndex(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)}get worldVisible(){let t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}get mask(){return this._mask}set mask(t){if(this._mask!==t){if(this._mask){const i=this._mask.isMaskData?this._mask.maskObject:this._mask;i&&(i._maskRefCount--,i._maskRefCount===0&&(i.renderable=!0,i.isMask=!1))}if(this._mask=t,this._mask){const i=this._mask.isMaskData?this._mask.maskObject:this._mask;i&&(i._maskRefCount===0&&(i.renderable=!1,i.isMask=!0),i._maskRefCount++)}}}}class bd extends nt{constructor(){super(...arguments),this.sortDirty=null}}nt.prototype.displayObjectUpdateTransform=nt.prototype.updateTransform;const Td=new it;function wd(e,t){return e.zIndex===t.zIndex?e._lastSortedIndex-t._lastSortedIndex:e.zIndex-t.zIndex}const Dr=class extends nt{constructor(){super(),this.children=[],this.sortableChildren=Dr.defaultSortableChildren,this.sortDirty=!1}onChildrenChange(e){}addChild(...e){if(e.length>1)for(let t=0;t<e.length;t++)this.addChild(e[t]);else{const t=e[0];t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.push(t),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this)}return e[0]}addChildAt(e,t){if(t<0||t>this.children.length)throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);return e.parent&&e.parent.removeChild(e),e.parent=this,this.sortDirty=!0,e.transform._parentID=-1,this.children.splice(t,0,e),this._boundsID++,this.onChildrenChange(t),e.emit("added",this),this.emit("childAdded",e,this,t),e}swapChildren(e,t){if(e===t)return;const i=this.getChildIndex(e),s=this.getChildIndex(t);this.children[i]=t,this.children[s]=e,this.onChildrenChange(i<s?i:s)}getChildIndex(e){const t=this.children.indexOf(e);if(t===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return t}setChildIndex(e,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);const i=this.getChildIndex(e);je(this.children,i,1),this.children.splice(t,0,e),this.onChildrenChange(t)}getChildAt(e){if(e<0||e>=this.children.length)throw new Error(`getChildAt: Index (${e}) does not exist.`);return this.children[e]}removeChild(...e){if(e.length>1)for(let t=0;t<e.length;t++)this.removeChild(e[t]);else{const t=e[0],i=this.children.indexOf(t);if(i===-1)return null;t.parent=null,t.transform._parentID=-1,je(this.children,i,1),this._boundsID++,this.onChildrenChange(i),t.emit("removed",this),this.emit("childRemoved",t,this,i)}return e[0]}removeChildAt(e){const t=this.getChildAt(e);return t.parent=null,t.transform._parentID=-1,je(this.children,e,1),this._boundsID++,this.onChildrenChange(e),t.emit("removed",this),this.emit("childRemoved",t,this,e),t}removeChildren(e=0,t=this.children.length){const i=e,s=t,r=s-i;let n;if(r>0&&r<=s){n=this.children.splice(i,r);for(let o=0;o<n.length;++o)n[o].parent=null,n[o].transform&&(n[o].transform._parentID=-1);this._boundsID++,this.onChildrenChange(e);for(let o=0;o<n.length;++o)n[o].emit("removed",this),this.emit("childRemoved",n[o],this,o);return n}else if(r===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")}sortChildren(){let e=!1;for(let t=0,i=this.children.length;t<i;++t){const s=this.children[t];s._lastSortedIndex=t,!e&&s.zIndex!==0&&(e=!0)}e&&this.children.length>1&&this.children.sort(wd),this.sortDirty=!1}updateTransform(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(let e=0,t=this.children.length;e<t;++e){const i=this.children[e];i.visible&&i.updateTransform()}}calculateBounds(){this._bounds.clear(),this._calculateBounds();for(let e=0;e<this.children.length;e++){const t=this.children[e];if(!(!t.visible||!t.renderable))if(t.calculateBounds(),t._mask){const i=t._mask.isMaskData?t._mask.maskObject:t._mask;i?(i.calculateBounds(),this._bounds.addBoundsMask(t._bounds,i._bounds)):this._bounds.addBounds(t._bounds)}else t.filterArea?this._bounds.addBoundsArea(t._bounds,t.filterArea):this._bounds.addBounds(t._bounds)}this._bounds.updateID=this._boundsID}getLocalBounds(e,t=!1){const i=super.getLocalBounds(e);if(!t)for(let s=0,r=this.children.length;s<r;++s){const n=this.children[s];n.visible&&n.updateTransform()}return i}_calculateBounds(){}_renderWithCulling(e){const t=e.renderTexture.sourceFrame;if(!(t.width>0&&t.height>0))return;let i,s;this.cullArea?(i=this.cullArea,s=this.worldTransform):this._render!==Dr.prototype._render&&(i=this.getBounds(!0));const r=e.projection.transform;if(r&&(s?(s=Td.copyFrom(s),s.prepend(r)):s=r),i&&t.intersects(i,s))this._render(e);else if(this.cullArea)return;for(let n=0,o=this.children.length;n<o;++n){const a=this.children[n],l=a.cullable;a.cullable=l||!this.cullArea,a.render(e),a.cullable=l}}render(e){var t;if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||(t=this.filters)!=null&&t.length)this.renderAdvanced(e);else if(this.cullable)this._renderWithCulling(e);else{this._render(e);for(let i=0,s=this.children.length;i<s;++i)this.children[i].render(e)}}renderAdvanced(e){var r,n,o;const t=this.filters,i=this._mask;if(t){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(let a=0;a<t.length;a++)t[a].enabled&&this._enabledFilters.push(t[a])}const s=t&&((r=this._enabledFilters)==null?void 0:r.length)||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==ut.NONE));if(s&&e.batch.flush(),t&&((n=this._enabledFilters)!=null&&n.length)&&e.filter.push(this,this._enabledFilters),i&&e.mask.push(this,this._mask),this.cullable)this._renderWithCulling(e);else{this._render(e);for(let a=0,l=this.children.length;a<l;++a)this.children[a].render(e)}s&&e.batch.flush(),i&&e.mask.pop(this),t&&((o=this._enabledFilters)!=null&&o.length)&&e.filter.pop()}_render(e){}destroy(e){super.destroy(),this.sortDirty=!1;const t=typeof e=="boolean"?e:e==null?void 0:e.children,i=this.removeChildren(0,this.children.length);if(t)for(let s=0;s<i.length;++s)i[s].destroy(e)}get width(){return this.scale.x*this.getLocalBounds().width}set width(e){const t=this.getLocalBounds().width;t!==0?this.scale.x=e/t:this.scale.x=1,this._width=e}get height(){return this.scale.y*this.getLocalBounds().height}set height(e){const t=this.getLocalBounds().height;t!==0?this.scale.y=e/t:this.scale.y=1,this._height=e}};let St=Dr;St.defaultSortableChildren=!1;St.prototype.containerUpdateTransform=St.prototype.updateTransform;Object.defineProperties(R,{SORTABLE_CHILDREN:{get(){return St.defaultSortableChildren},set(e){Y("7.1.0","settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"),St.defaultSortableChildren=e}}});const oi=new W,Ed=new Uint16Array([0,1,2,0,2,3]);class Me extends St{constructor(t){super(),this._anchor=new re(this._onAnchorUpdate,this,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new Z(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=H.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=t||B.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=Ed,this.pluginName="batch",this.isSprite=!0,this._roundPixels=R.ROUND_PIXELS}_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=he(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=he(this.scale.y)*this._height/this._texture.orig.height)}_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}calculateVertices(){const t=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===t._updateID)return;this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;const i=this.transform.worldTransform,s=i.a,r=i.b,n=i.c,o=i.d,a=i.tx,l=i.ty,h=this.vertexData,c=t.trim,u=t.orig,d=this._anchor;let f=0,p=0,_=0,m=0;if(c?(p=c.x-d._x*u.width,f=p+c.width,m=c.y-d._y*u.height,_=m+c.height):(p=-d._x*u.width,f=p+u.width,m=-d._y*u.height,_=m+u.height),h[0]=s*p+n*m+a,h[1]=o*m+r*p+l,h[2]=s*f+n*m+a,h[3]=o*m+r*f+l,h[4]=s*f+n*_+a,h[5]=o*_+r*f+l,h[6]=s*p+n*_+a,h[7]=o*_+r*p+l,this._roundPixels){const v=R.RESOLUTION;for(let y=0;y<h.length;++y)h[y]=Math.round(h[y]*v)/v}}calculateTrimmedVertices(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;const t=this._texture,i=this.vertexTrimmedData,s=t.orig,r=this._anchor,n=this.transform.worldTransform,o=n.a,a=n.b,l=n.c,h=n.d,c=n.tx,u=n.ty,d=-r._x*s.width,f=d+s.width,p=-r._y*s.height,_=p+s.height;i[0]=o*d+l*p+c,i[1]=h*p+a*d+u,i[2]=o*f+l*p+c,i[3]=h*p+a*f+u,i[4]=o*f+l*_+c,i[5]=h*_+a*f+u,i[6]=o*d+l*_+c,i[7]=h*_+a*d+u}_render(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)}_calculateBounds(){const t=this._texture.trim,i=this._texture.orig;!t||t.width===i.width&&t.height===i.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))}getLocalBounds(t){return this.children.length===0?(this._localBounds||(this._localBounds=new ls),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds.getRectangle(t)):super.getLocalBounds.call(this,t)}containsPoint(t){this.worldTransform.applyInverse(t,oi);const i=this._texture.orig.width,s=this._texture.orig.height,r=-i*this.anchor.x;let n=0;return oi.x>=r&&oi.x<r+i&&(n=-s*this.anchor.y,oi.y>=n&&oi.y<n+s)}destroy(t){if(super.destroy(t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const s=typeof t=="boolean"?t:t==null?void 0:t.baseTexture;this._texture.destroy(!!s)}this._texture=null}static from(t,i){const s=t instanceof B?t:B.from(t,i);return new Me(s)}set roundPixels(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t}get roundPixels(){return this._roundPixels}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){const i=he(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){const i=he(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t}get anchor(){return this._anchor}set anchor(t){this._anchor.copyFrom(t)}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t),this._tintRGB=this._tintColor.toLittleEndianNumber()}get tintValue(){return this._tintColor.toNumber()}get texture(){return this._texture}set texture(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||B.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}const Ya=new it;nt.prototype._cacheAsBitmap=!1;nt.prototype._cacheData=null;nt.prototype._cacheAsBitmapResolution=null;nt.prototype._cacheAsBitmapMultisample=null;class Cd{constructor(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}}Object.defineProperties(nt.prototype,{cacheAsBitmapResolution:{get(){return this._cacheAsBitmapResolution},set(e){e!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get(){return this._cacheAsBitmapMultisample},set(e){e!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=e,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get(){return this._cacheAsBitmap},set(e){if(this._cacheAsBitmap===e)return;this._cacheAsBitmap=e;let t;e?(this._cacheData||(this._cacheData=new Cd),t=this._cacheData,t.originalRender=this.render,t.originalRenderCanvas=this.renderCanvas,t.originalUpdateTransform=this.updateTransform,t.originalCalculateBounds=this.calculateBounds,t.originalGetLocalBounds=this.getLocalBounds,t.originalDestroy=this.destroy,t.originalContainsPoint=this.containsPoint,t.originalMask=this._mask,t.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(t=this._cacheData,t.sprite&&this._destroyCachedDisplayObject(),this.render=t.originalRender,this.renderCanvas=t.originalRenderCanvas,this.calculateBounds=t.originalCalculateBounds,this.getLocalBounds=t.originalGetLocalBounds,this.destroy=t.originalDestroy,this.updateTransform=t.originalUpdateTransform,this.containsPoint=t.originalContainsPoint,this._mask=t.originalMask,this.filterArea=t.originalFilterArea)}}});nt.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))};nt.prototype._initCachedDisplayObject=function(t){var d,f;if((d=this._cacheData)!=null&&d.sprite)return;const i=this.alpha;this.alpha=1,t.batch.flush();const s=this.getLocalBounds(null,!0).clone();if((f=this.filters)!=null&&f.length){const p=this.filters[0].padding;s.pad(p)}s.ceil(R.RESOLUTION);const r=t.renderTexture.current,n=t.renderTexture.sourceFrame.clone(),o=t.renderTexture.destinationFrame.clone(),a=t.projection.transform,l=pe.create({width:s.width,height:s.height,resolution:this.cacheAsBitmapResolution||t.resolution,multisample:this.cacheAsBitmapMultisample??t.multisample}),h=`cacheAsBitmap_${Ae()}`;this._cacheData.textureCacheId=h,X.addToCache(l.baseTexture,h),B.addToCache(l,h);const c=this.transform.localTransform.copyTo(Ya).invert().translate(-s.x,-s.y);this.render=this._cacheData.originalRender,t.render(this,{renderTexture:l,clear:!0,transform:c,skipUpdateTransform:!1}),t.framebuffer.blit(),t.projection.transform=a,t.renderTexture.bind(r,n,o),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;const u=new Me(l);u.transform.worldTransform=this.transform.worldTransform,u.anchor.x=-(s.x/s.width),u.anchor.y=-(s.y/s.height),u.alpha=i,u._bounds=this._bounds,this._cacheData.sprite=u,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=u.containsPoint.bind(u)};nt.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))};nt.prototype._initCachedDisplayObjectCanvas=function(t){var c;if((c=this._cacheData)!=null&&c.sprite)return;const i=this.getLocalBounds(null,!0),s=this.alpha;this.alpha=1;const r=t.canvasContext.activeContext,n=t._projTransform;i.ceil(R.RESOLUTION);const o=pe.create({width:i.width,height:i.height}),a=`cacheAsBitmap_${Ae()}`;this._cacheData.textureCacheId=a,X.addToCache(o.baseTexture,a),B.addToCache(o,a);const l=Ya;this.transform.localTransform.copyTo(l),l.invert(),l.tx-=i.x,l.ty-=i.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,{renderTexture:o,clear:!0,transform:l,skipUpdateTransform:!1}),t.canvasContext.activeContext=r,t._projTransform=n,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=s;const h=new Me(o);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-(i.x/i.width),h.anchor.y=-(i.y/i.height),h.alpha=s,h._bounds=this._bounds,this._cacheData.sprite=h,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=h.containsPoint.bind(h)};nt.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};nt.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};nt.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,X.removeFromCache(this._cacheData.textureCacheId),B.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};nt.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)};nt.prototype.name=null;St.prototype.getChildByName=function(t,i){for(let s=0,r=this.children.length;s<r;s++)if(this.children[s].name===t)return this.children[s];if(i)for(let s=0,r=this.children.length;s<r;s++){const n=this.children[s];if(!n.getChildByName)continue;const o=n.getChildByName(t,!0);if(o)return o}return null};nt.prototype.getGlobalPosition=function(t=new W,i=!1){return this.parent?this.parent.toGlobal(this.position,t,i):(t.x=this.position.x,t.y=this.position.y),t};var Sd=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;class Fr extends j{constructor(){const t={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};super(ya,Sd,t),this.alpha=1}_loadMatrix(t,i=!1){let s=t;i&&(this._multiply(s,this.uniforms.m,t),s=this._colorMatrix(s)),this.uniforms.m=s}_multiply(t,i,s){return t[0]=i[0]*s[0]+i[1]*s[5]+i[2]*s[10]+i[3]*s[15],t[1]=i[0]*s[1]+i[1]*s[6]+i[2]*s[11]+i[3]*s[16],t[2]=i[0]*s[2]+i[1]*s[7]+i[2]*s[12]+i[3]*s[17],t[3]=i[0]*s[3]+i[1]*s[8]+i[2]*s[13]+i[3]*s[18],t[4]=i[0]*s[4]+i[1]*s[9]+i[2]*s[14]+i[3]*s[19]+i[4],t[5]=i[5]*s[0]+i[6]*s[5]+i[7]*s[10]+i[8]*s[15],t[6]=i[5]*s[1]+i[6]*s[6]+i[7]*s[11]+i[8]*s[16],t[7]=i[5]*s[2]+i[6]*s[7]+i[7]*s[12]+i[8]*s[17],t[8]=i[5]*s[3]+i[6]*s[8]+i[7]*s[13]+i[8]*s[18],t[9]=i[5]*s[4]+i[6]*s[9]+i[7]*s[14]+i[8]*s[19]+i[9],t[10]=i[10]*s[0]+i[11]*s[5]+i[12]*s[10]+i[13]*s[15],t[11]=i[10]*s[1]+i[11]*s[6]+i[12]*s[11]+i[13]*s[16],t[12]=i[10]*s[2]+i[11]*s[7]+i[12]*s[12]+i[13]*s[17],t[13]=i[10]*s[3]+i[11]*s[8]+i[12]*s[13]+i[13]*s[18],t[14]=i[10]*s[4]+i[11]*s[9]+i[12]*s[14]+i[13]*s[19]+i[14],t[15]=i[15]*s[0]+i[16]*s[5]+i[17]*s[10]+i[18]*s[15],t[16]=i[15]*s[1]+i[16]*s[6]+i[17]*s[11]+i[18]*s[16],t[17]=i[15]*s[2]+i[16]*s[7]+i[17]*s[12]+i[18]*s[17],t[18]=i[15]*s[3]+i[16]*s[8]+i[17]*s[13]+i[18]*s[18],t[19]=i[15]*s[4]+i[16]*s[9]+i[17]*s[14]+i[18]*s[19]+i[19],t}_colorMatrix(t){const i=new Float32Array(t);return i[4]/=255,i[9]/=255,i[14]/=255,i[19]/=255,i}brightness(t,i){const s=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(s,i)}tint(t,i){const[s,r,n]=Z.shared.setValue(t).toArray(),o=[s,0,0,0,0,0,r,0,0,0,0,0,n,0,0,0,0,0,1,0];this._loadMatrix(o,i)}greyscale(t,i){const s=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(s,i)}blackAndWhite(t){const i=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(i,t)}hue(t,i){t=(t||0)/180*Math.PI;const s=Math.cos(t),r=Math.sin(t),n=Math.sqrt,o=1/3,a=n(o),l=s+(1-s)*o,h=o*(1-s)-a*r,c=o*(1-s)+a*r,u=o*(1-s)+a*r,d=s+o*(1-s),f=o*(1-s)-a*r,p=o*(1-s)-a*r,_=o*(1-s)+a*r,m=s+o*(1-s),v=[l,h,c,0,0,u,d,f,0,0,p,_,m,0,0,0,0,0,1,0];this._loadMatrix(v,i)}contrast(t,i){const s=(t||0)+1,r=-.5*(s-1),n=[s,0,0,0,r,0,s,0,0,r,0,0,s,0,r,0,0,0,1,0];this._loadMatrix(n,i)}saturate(t=0,i){const s=t*2/3+1,r=(s-1)*-.5,n=[s,r,r,0,0,r,s,r,0,0,r,r,s,0,0,0,0,0,1,0];this._loadMatrix(n,i)}desaturate(){this.saturate(-1)}negative(t){const i=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(i,t)}sepia(t){const i=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(i,t)}technicolor(t){const i=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(i,t)}polaroid(t){const i=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(i,t)}toBGR(t){const i=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(i,t)}kodachrome(t){const i=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(i,t)}browni(t){const i=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(i,t)}vintage(t){const i=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(i,t)}colorTone(t,i,s,r,n){t=t||.2,i=i||.15,s=s||16770432,r=r||3375104;const o=Z.shared,[a,l,h]=o.setValue(s).toArray(),[c,u,d]=o.setValue(r).toArray(),f=[.3,.59,.11,0,0,a,l,h,t,0,c,u,d,i,0,a-c,l-u,h-d,0,0];this._loadMatrix(f,n)}night(t,i){t=t||.1;const s=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(s,i)}predator(t,i){const s=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(s,i)}lsd(t){const i=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(i,t)}reset(){const t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)}get matrix(){return this.uniforms.m}set matrix(t){this.uniforms.m=t}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}}Fr.prototype.grayscale=Fr.prototype.greyscale;var Ad=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,Id=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;class Pd extends j{constructor(t,i){const s=new it;t.renderable=!1,super(Id,Ad,{mapSampler:t._texture,filterMatrix:s,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])}),this.maskSprite=t,this.maskMatrix=s,i==null&&(i=20),this.scale=new W(i,i)}apply(t,i,s,r){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;const n=this.maskSprite.worldTransform,o=Math.sqrt(n.a*n.a+n.b*n.b),a=Math.sqrt(n.c*n.c+n.d*n.d);o!==0&&a!==0&&(this.uniforms.rotation[0]=n.a/o,this.uniforms.rotation[1]=n.b/o,this.uniforms.rotation[2]=n.c/a,this.uniforms.rotation[3]=n.d/a),t.applyFilter(this,i,s,r)}get map(){return this.uniforms.mapSampler}set map(t){this.uniforms.mapSampler=t}}var Rd=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,Md=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;class Dd extends j{constructor(){super(Md,Rd)}}var Fd=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;class Bd extends j{constructor(t=.5,i=Math.random()){super(ya,Fd,{uNoise:0,uSeed:0}),this.noise=t,this.seed=i}get noise(){return this.uniforms.uNoise}set noise(t){this.uniforms.uNoise=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}}const ro={AlphaFilter:Vc,BlurFilter:Zc,BlurFilterPass:Ir,ColorMatrixFilter:Fr,DisplacementFilter:Pd,FXAAFilter:Dd,NoiseFilter:Bd};Object.entries(ro).forEach(([e,t])=>{Object.defineProperty(ro,e,{get(){return Y("7.1.0",`filters.${e} has moved to ${e}`),t}})});class Ld{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}init(t){this.removeTickerListener(),this.events=t,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(t){this._pauseUpdate=t}addTickerListener(){this.tickerAdded||!this.domElement||(yt.system.add(this.tickerUpdate,this,Ie.INTERACTION),this.tickerAdded=!0)}removeTickerListener(){this.tickerAdded&&(yt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)}pointerMoved(){this._didMove=!0}update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const t=this.events.rootPointerEvent;this.events.supportsTouchEvents&&t.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:t.clientX,clientY:t.clientY}))}tickerUpdate(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())}}const Te=new Ld;class Ei{constructor(t){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=Ei.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new W,this.page=new W,this.AT_TARGET=1,this.BUBBLING_PHASE=2,this.CAPTURING_PHASE=3,this.NONE=0,this.manager=t}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(t,i,s){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(t,i,s,r,n){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}class hs extends Ei{constructor(){super(...arguments),this.client=new W,this.movement=new W,this.offset=new W,this.global=new W,this.screen=new W}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(t,i,s){return t.worldTransform.applyInverse(s||this.global,i)}getModifierState(t){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(t)}initMouseEvent(t,i,s,r,n,o,a,l,h,c,u,d,f,p,_){throw new Error("Method not implemented.")}}class Dt extends hs{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class Ze extends hs{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}Ze.DOM_DELTA_PIXEL=0;Ze.DOM_DELTA_LINE=1;Ze.DOM_DELTA_PAGE=2;const Od=2048,kd=new W,Zs=new W;class Nd{constructor(t){this.dispatch=new Ce,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._collectInteractiveElements=!1,this.rootTarget=t,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(t,i){this.mappingTable[t]||(this.mappingTable[t]=[]),this.mappingTable[t].push({fn:i,priority:0}),this.mappingTable[t].sort((s,r)=>s.priority-r.priority)}dispatchEvent(t,i){t.propagationStopped=!1,t.propagationImmediatelyStopped=!1,this.propagate(t,i),this.dispatch.emit(i||t.type,t)}mapEvent(t){if(!this.rootTarget)return;const i=this.mappingTable[t.type];if(i)for(let s=0,r=i.length;s<r;s++)i[s].fn(t);else console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)}hitTest(t,i){Te.pauseUpdate=!0;const s=this.hitTestRecursive(this.rootTarget,this.rootTarget.eventMode,kd.set(t,i),this.hitTestFn,this.hitPruneFn);return s&&s[0]}propagate(t,i){if(!t.target)return;const s=t.composedPath();t.eventPhase=t.CAPTURING_PHASE;for(let r=0,n=s.length-1;r<n;r++)if(t.currentTarget=s[r],this.notifyTarget(t,i),t.propagationStopped||t.propagationImmediatelyStopped)return;if(t.eventPhase=t.AT_TARGET,t.currentTarget=t.target,this.notifyTarget(t,i),!(t.propagationStopped||t.propagationImmediatelyStopped)){t.eventPhase=t.BUBBLING_PHASE;for(let r=s.length-2;r>=0;r--)if(t.currentTarget=s[r],this.notifyTarget(t,i),t.propagationStopped||t.propagationImmediatelyStopped)return}}all(t,i,s=this._allInteractiveElements){if(s.length===0)return;t.eventPhase=t.BUBBLING_PHASE;const r=Array.isArray(i)?i:[i];for(let n=s.length-1;n>=0;n--)r.forEach(o=>{t.currentTarget=s[n],this.notifyTarget(t,o)})}propagationPath(t){const i=[t];for(let s=0;s<Od&&t!==this.rootTarget;s++){if(!t.parent)throw new Error("Cannot find propagation path to disconnected target");i.push(t.parent),t=t.parent}return i.reverse(),i}hitTestRecursive(t,i,s,r,n){if(n(t,s))return null;if((t.eventMode==="dynamic"||i==="dynamic")&&(Te.pauseUpdate=!1),t.interactiveChildren&&t.children){const l=t.children;for(let h=l.length-1;h>=0;h--){const c=l[h],u=this.hitTestRecursive(c,this._isInteractive(i)?i:c.eventMode,s,r,n);if(u){if(u.length>0&&!u[u.length-1].parent)continue;const d=t.isInteractive();if((u.length>0||d)&&(this._collectInteractiveElements&&d&&this._allInteractiveElements.push(t),u.push(t)),this._collectInteractiveElements&&this._hitElements.length===0&&(this._hitElements=u),!this._collectInteractiveElements)return u}}}const o=this._isInteractive(i),a=t.isInteractive();return this._collectInteractiveElements&&(o&&a&&this._allInteractiveElements.push(t),this._hitElements.length>0)?null:o&&r(t,s)?a?[t]:[]:null}_isInteractive(t){return t==="static"||t==="dynamic"}hitPruneFn(t,i){var s;if(!t||t.isMask||!t.visible||!t.renderable||t.eventMode==="none"||t.eventMode==="passive"&&!t.interactiveChildren||t.isMask)return!0;if(this._collectInteractiveElements&&this._hitElements.length>0)return!1;if(t.hitArea&&(t.worldTransform.applyInverse(i,Zs),!t.hitArea.contains(Zs.x,Zs.y)))return!0;if(t._mask){const r=t._mask.isMaskData?t._mask.maskObject:t._mask;if(r&&!((s=r.containsPoint)!=null&&s.call(r,i)))return!0}return!1}hitTestFn(t,i){return t.eventMode==="passive"?!1:t.hitArea?!0:t.containsPoint?t.containsPoint(i):!1}notifyTarget(t,i){var n,o;i=i??t.type;const s=`on${i}`;(o=(n=t.currentTarget)[s])==null||o.call(n,t);const r=t.eventPhase===t.CAPTURING_PHASE||t.eventPhase===t.AT_TARGET?`${i}capture`:i;this.notifyListeners(t,r),t.eventPhase===t.AT_TARGET&&this.notifyListeners(t,i)}mapPointerDown(t){if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const i=this.createPointerEvent(t);if(this.dispatchEvent(i,"pointerdown"),i.pointerType==="touch")this.dispatchEvent(i,"touchstart");else if(i.pointerType==="mouse"||i.pointerType==="pen"){const r=i.button===2;this.dispatchEvent(i,r?"rightdown":"mousedown")}const s=this.trackingData(t.pointerId);s.pressTargetsByButton[t.button]=i.composedPath(),this.freeEvent(i)}mapPointerMove(t){var l,h;if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._collectInteractiveElements=!0;const i=this.createPointerEvent(t);this._collectInteractiveElements=!1;const s=i.pointerType==="mouse"||i.pointerType==="pen",r=this.trackingData(t.pointerId),n=this.findMountedTarget(r.overTargets);if(((l=r.overTargets)==null?void 0:l.length)>0&&n!==i.target){const c=t.type==="mousemove"?"mouseout":"pointerout",u=this.createPointerEvent(t,c,n);if(this.dispatchEvent(u,"pointerout"),s&&this.dispatchEvent(u,"mouseout"),!i.composedPath().includes(n)){const d=this.createPointerEvent(t,"pointerleave",n);for(d.eventPhase=d.AT_TARGET;d.target&&!i.composedPath().includes(d.target);)d.currentTarget=d.target,this.notifyTarget(d),s&&this.notifyTarget(d,"mouseleave"),d.target=d.target.parent;this.freeEvent(d)}this.freeEvent(u)}if(n!==i.target){const c=t.type==="mousemove"?"mouseover":"pointerover",u=this.clonePointerEvent(i,c);this.dispatchEvent(u,"pointerover"),s&&this.dispatchEvent(u,"mouseover");let d=n==null?void 0:n.parent;for(;d&&d!==this.rootTarget.parent&&d!==i.target;)d=d.parent;if(!d||d===this.rootTarget.parent){const p=this.clonePointerEvent(i,"pointerenter");for(p.eventPhase=p.AT_TARGET;p.target&&p.target!==n&&p.target!==this.rootTarget.parent;)p.currentTarget=p.target,this.notifyTarget(p),s&&this.notifyTarget(p,"mouseenter"),p.target=p.target.parent;this.freeEvent(p)}this.freeEvent(u)}const o=[],a=this.enableGlobalMoveEvents??!0;this.moveOnAll?o.push("pointermove"):this.dispatchEvent(i,"pointermove"),a&&o.push("globalpointermove"),i.pointerType==="touch"&&(this.moveOnAll?o.splice(1,0,"touchmove"):this.dispatchEvent(i,"touchmove"),a&&o.push("globaltouchmove")),s&&(this.moveOnAll?o.splice(1,0,"mousemove"):this.dispatchEvent(i,"mousemove"),a&&o.push("globalmousemove"),this.cursor=(h=i.target)==null?void 0:h.cursor),o.length>0&&this.all(i,o),this._allInteractiveElements.length=0,this._hitElements.length=0,r.overTargets=i.composedPath(),this.freeEvent(i)}mapPointerOver(t){var o;if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const i=this.trackingData(t.pointerId),s=this.createPointerEvent(t),r=s.pointerType==="mouse"||s.pointerType==="pen";this.dispatchEvent(s,"pointerover"),r&&this.dispatchEvent(s,"mouseover"),s.pointerType==="mouse"&&(this.cursor=(o=s.target)==null?void 0:o.cursor);const n=this.clonePointerEvent(s,"pointerenter");for(n.eventPhase=n.AT_TARGET;n.target&&n.target!==this.rootTarget.parent;)n.currentTarget=n.target,this.notifyTarget(n),r&&this.notifyTarget(n,"mouseenter"),n.target=n.target.parent;i.overTargets=s.composedPath(),this.freeEvent(s),this.freeEvent(n)}mapPointerOut(t){if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const i=this.trackingData(t.pointerId);if(i.overTargets){const s=t.pointerType==="mouse"||t.pointerType==="pen",r=this.findMountedTarget(i.overTargets),n=this.createPointerEvent(t,"pointerout",r);this.dispatchEvent(n),s&&this.dispatchEvent(n,"mouseout");const o=this.createPointerEvent(t,"pointerleave",r);for(o.eventPhase=o.AT_TARGET;o.target&&o.target!==this.rootTarget.parent;)o.currentTarget=o.target,this.notifyTarget(o),s&&this.notifyTarget(o,"mouseleave"),o.target=o.target.parent;i.overTargets=null,this.freeEvent(n),this.freeEvent(o)}this.cursor=null}mapPointerUp(t){if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const i=performance.now(),s=this.createPointerEvent(t);if(this.dispatchEvent(s,"pointerup"),s.pointerType==="touch")this.dispatchEvent(s,"touchend");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const a=s.button===2;this.dispatchEvent(s,a?"rightup":"mouseup")}const r=this.trackingData(t.pointerId),n=this.findMountedTarget(r.pressTargetsByButton[t.button]);let o=n;if(n&&!s.composedPath().includes(n)){let a=n;for(;a&&!s.composedPath().includes(a);){if(s.currentTarget=a,this.notifyTarget(s,"pointerupoutside"),s.pointerType==="touch")this.notifyTarget(s,"touchendoutside");else if(s.pointerType==="mouse"||s.pointerType==="pen"){const l=s.button===2;this.notifyTarget(s,l?"rightupoutside":"mouseupoutside")}a=a.parent}delete r.pressTargetsByButton[t.button],o=a}if(o){const a=this.clonePointerEvent(s,"click");a.target=o,a.path=null,r.clicksByButton[t.button]||(r.clicksByButton[t.button]={clickCount:0,target:a.target,timeStamp:i});const l=r.clicksByButton[t.button];if(l.target===a.target&&i-l.timeStamp<200?++l.clickCount:l.clickCount=1,l.target=a.target,l.timeStamp=i,a.detail=l.clickCount,a.pointerType==="mouse"){const h=a.button===2;this.dispatchEvent(a,h?"rightclick":"click")}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a)}this.freeEvent(s)}mapPointerUpOutside(t){if(!(t instanceof Dt)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const i=this.trackingData(t.pointerId),s=this.findMountedTarget(i.pressTargetsByButton[t.button]),r=this.createPointerEvent(t);if(s){let n=s;for(;n;)r.currentTarget=n,this.notifyTarget(r,"pointerupoutside"),r.pointerType==="touch"?this.notifyTarget(r,"touchendoutside"):(r.pointerType==="mouse"||r.pointerType==="pen")&&this.notifyTarget(r,r.button===2?"rightupoutside":"mouseupoutside"),n=n.parent;delete i.pressTargetsByButton[t.button]}this.freeEvent(r)}mapWheel(t){if(!(t instanceof Ze)){console.warn("EventBoundary cannot map a non-wheel event as a wheel event");return}const i=this.createWheelEvent(t);this.dispatchEvent(i),this.freeEvent(i)}findMountedTarget(t){if(!t)return null;let i=t[0];for(let s=1;s<t.length&&t[s].parent===i;s++)i=t[s];return i}createPointerEvent(t,i,s){const r=this.allocateEvent(Dt);return this.copyPointerData(t,r),this.copyMouseData(t,r),this.copyData(t,r),r.nativeEvent=t.nativeEvent,r.originalEvent=t,r.target=s??this.hitTest(r.global.x,r.global.y)??this._hitElements[0],typeof i=="string"&&(r.type=i),r}createWheelEvent(t){const i=this.allocateEvent(Ze);return this.copyWheelData(t,i),this.copyMouseData(t,i),this.copyData(t,i),i.nativeEvent=t.nativeEvent,i.originalEvent=t,i.target=this.hitTest(i.global.x,i.global.y),i}clonePointerEvent(t,i){const s=this.allocateEvent(Dt);return s.nativeEvent=t.nativeEvent,s.originalEvent=t.originalEvent,this.copyPointerData(t,s),this.copyMouseData(t,s),this.copyData(t,s),s.target=t.target,s.path=t.composedPath().slice(),s.type=i??s.type,s}copyWheelData(t,i){i.deltaMode=t.deltaMode,i.deltaX=t.deltaX,i.deltaY=t.deltaY,i.deltaZ=t.deltaZ}copyPointerData(t,i){t instanceof Dt&&i instanceof Dt&&(i.pointerId=t.pointerId,i.width=t.width,i.height=t.height,i.isPrimary=t.isPrimary,i.pointerType=t.pointerType,i.pressure=t.pressure,i.tangentialPressure=t.tangentialPressure,i.tiltX=t.tiltX,i.tiltY=t.tiltY,i.twist=t.twist)}copyMouseData(t,i){t instanceof hs&&i instanceof hs&&(i.altKey=t.altKey,i.button=t.button,i.buttons=t.buttons,i.client.copyFrom(t.client),i.ctrlKey=t.ctrlKey,i.metaKey=t.metaKey,i.movement.copyFrom(t.movement),i.screen.copyFrom(t.screen),i.shiftKey=t.shiftKey,i.global.copyFrom(t.global))}copyData(t,i){i.isTrusted=t.isTrusted,i.srcElement=t.srcElement,i.timeStamp=performance.now(),i.type=t.type,i.detail=t.detail,i.view=t.view,i.which=t.which,i.layer.copyFrom(t.layer),i.page.copyFrom(t.page)}trackingData(t){return this.mappingState.trackingData[t]||(this.mappingState.trackingData[t]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[t]}allocateEvent(t){this.eventPool.has(t)||this.eventPool.set(t,[]);const i=this.eventPool.get(t).pop()||new t(this);return i.eventPhase=i.NONE,i.currentTarget=null,i.path=null,i.target=null,i}freeEvent(t){if(t.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const i=t.constructor;this.eventPool.has(i)||this.eventPool.set(i,[]),this.eventPool.get(i).push(t)}notifyListeners(t,i){const s=t.currentTarget._events[i];if(s&&t.currentTarget.isInteractive())if("fn"in s)s.once&&t.currentTarget.removeListener(i,s.fn,void 0,!0),s.fn.call(s.context,t);else for(let r=0,n=s.length;r<n&&!t.propagationImmediatelyStopped;r++)s[r].once&&t.currentTarget.removeListener(i,s[r].fn,void 0,!0),s[r].fn.call(s[r].context,t)}}const Ud=1,Gd={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},Br=class{constructor(e){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=e,this.rootBoundary=new Nd(null),Te.init(this),this.autoPreventDefault=!0,this.eventsAdded=!1,this.rootPointerEvent=new Dt(null),this.rootWheelEvent=new Ze(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...Br.defaultEventFeatures},{set:(t,i,s)=>(i==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=s),t[i]=s,!0)}),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerOverOut=this.onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(e){const{view:t,resolution:i}=this.renderer;this.setTargetElement(t),this.resolution=i,Br._defaultEventMode=e.eventMode??"auto",Object.assign(this.features,e.eventFeatures??{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(e){this.resolution=e}destroy(){this.setTargetElement(null),this.renderer=null}setCursor(e){e=e||"default";let t=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(t=!1),this.currentCursor===e)return;this.currentCursor=e;const i=this.cursorStyles[e];if(i)switch(typeof i){case"string":t&&(this.domElement.style.cursor=i);break;case"function":i(e);break;case"object":t&&Object.assign(this.domElement.style,i);break}else t&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)&&(this.domElement.style.cursor=e)}get pointer(){return this.rootPointerEvent}onPointerDown(e){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&e.pointerType==="touch"))return;const t=this.normalizeToPointerData(e);this.autoPreventDefault&&t[0].isNormalized&&(e.cancelable||!("cancelable"in e))&&e.preventDefault();for(let i=0,s=t.length;i<s;i++){const r=t[i],n=this.bootstrapEvent(this.rootPointerEvent,r);this.rootBoundary.mapEvent(n)}this.setCursor(this.rootBoundary.cursor)}onPointerMove(e){if(!this.features.move||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&e.pointerType==="touch"))return;Te.pointerMoved();const t=this.normalizeToPointerData(e);for(let i=0,s=t.length;i<s;i++){const r=this.bootstrapEvent(this.rootPointerEvent,t[i]);this.rootBoundary.mapEvent(r)}this.setCursor(this.rootBoundary.cursor)}onPointerUp(e){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&e.pointerType==="touch"))return;let t=e.target;e.composedPath&&e.composedPath().length>0&&(t=e.composedPath()[0]);const i=t!==this.domElement?"outside":"",s=this.normalizeToPointerData(e);for(let r=0,n=s.length;r<n;r++){const o=this.bootstrapEvent(this.rootPointerEvent,s[r]);o.type+=i,this.rootBoundary.mapEvent(o)}this.setCursor(this.rootBoundary.cursor)}onPointerOverOut(e){if(!this.features.click||(this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.supportsTouchEvents&&e.pointerType==="touch"))return;const t=this.normalizeToPointerData(e);for(let i=0,s=t.length;i<s;i++){const r=this.bootstrapEvent(this.rootPointerEvent,t[i]);this.rootBoundary.mapEvent(r)}this.setCursor(this.rootBoundary.cursor)}onWheel(e){if(!this.features.wheel)return;const t=this.normalizeWheelEvent(e);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(t)}setTargetElement(e){this.removeEvents(),this.domElement=e,Te.domElement=e,this.addEvents()}addEvents(){if(this.eventsAdded||!this.domElement)return;Te.addTickerListener();const e=this.domElement.style;e&&(globalThis.navigator.msPointerEnabled?(e.msContentZooming="none",e.msTouchAction="none"):this.supportsPointerEvents&&(e.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,!0),this.domElement.addEventListener("pointerdown",this.onPointerDown,!0),this.domElement.addEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this.onPointerOverOut,!0),globalThis.addEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,!0),this.domElement.addEventListener("mousedown",this.onPointerDown,!0),this.domElement.addEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this.onPointerOverOut,!0),globalThis.addEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this.onPointerDown,!0),this.domElement.addEventListener("touchend",this.onPointerUp,!0),this.domElement.addEventListener("touchmove",this.onPointerMove,!0)),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this.eventsAdded=!0}removeEvents(){if(!this.eventsAdded||!this.domElement)return;Te.removeTickerListener();const e=this.domElement.style;globalThis.navigator.msPointerEnabled?(e.msContentZooming="",e.msTouchAction=""):this.supportsPointerEvents&&(e.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this.onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,!0),this.domElement.removeEventListener("mousedown",this.onPointerDown,!0),this.domElement.removeEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this.onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this.onPointerDown,!0),this.domElement.removeEventListener("touchend",this.onPointerUp,!0),this.domElement.removeEventListener("touchmove",this.onPointerMove,!0)),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this.eventsAdded=!1}mapPositionToPoint(e,t,i){let s;this.domElement.parentElement?s=this.domElement.getBoundingClientRect():s={x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0};const r=1/this.resolution;e.x=(t-s.left)*(this.domElement.width/s.width)*r,e.y=(i-s.top)*(this.domElement.height/s.height)*r}normalizeToPointerData(e){const t=[];if(this.supportsTouchEvents&&e instanceof TouchEvent)for(let i=0,s=e.changedTouches.length;i<s;i++){const r=e.changedTouches[i];typeof r.button>"u"&&(r.button=0),typeof r.buttons>"u"&&(r.buttons=1),typeof r.isPrimary>"u"&&(r.isPrimary=e.touches.length===1&&e.type==="touchstart"),typeof r.width>"u"&&(r.width=r.radiusX||1),typeof r.height>"u"&&(r.height=r.radiusY||1),typeof r.tiltX>"u"&&(r.tiltX=0),typeof r.tiltY>"u"&&(r.tiltY=0),typeof r.pointerType>"u"&&(r.pointerType="touch"),typeof r.pointerId>"u"&&(r.pointerId=r.identifier||0),typeof r.pressure>"u"&&(r.pressure=r.force||.5),typeof r.twist>"u"&&(r.twist=0),typeof r.tangentialPressure>"u"&&(r.tangentialPressure=0),typeof r.layerX>"u"&&(r.layerX=r.offsetX=r.clientX),typeof r.layerY>"u"&&(r.layerY=r.offsetY=r.clientY),r.isNormalized=!0,r.type=e.type,t.push(r)}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){const i=e;typeof i.isPrimary>"u"&&(i.isPrimary=!0),typeof i.width>"u"&&(i.width=1),typeof i.height>"u"&&(i.height=1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="mouse"),typeof i.pointerId>"u"&&(i.pointerId=Ud),typeof i.pressure>"u"&&(i.pressure=.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),i.isNormalized=!0,t.push(i)}else t.push(e);return t}normalizeWheelEvent(e){const t=this.rootWheelEvent;return this.transferMouseData(t,e),t.deltaX=e.deltaX,t.deltaY=e.deltaY,t.deltaZ=e.deltaZ,t.deltaMode=e.deltaMode,this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.nativeEvent=e,t.type=e.type,t}bootstrapEvent(e,t){return e.originalEvent=null,e.nativeEvent=t,e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist,this.transferMouseData(e,t),this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.isTrusted=t.isTrusted,e.type==="pointerleave"&&(e.type="pointerout"),e.type.startsWith("mouse")&&(e.type=e.type.replace("mouse","pointer")),e.type.startsWith("touch")&&(e.type=Gd[e.type]||e.type),e}transferMouseData(e,t){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.x=t.clientX,e.client.y=t.clientY,e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.x=t.movementX,e.movement.y=t.movementY,e.page.x=t.pageX,e.page.y=t.pageY,e.relatedTarget=null,e.shiftKey=t.shiftKey}};let bi=Br;bi.extension={name:"events",type:[D.RendererSystem,D.CanvasRendererSystem]};bi.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};N.add(bi);function no(e){return e==="dynamic"||e==="static"}const zd={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,_internalInteractive:void 0,get interactive(){return this._internalInteractive??no(bi.defaultEventMode)},set interactive(e){Y("7.2.0","Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),this._internalInteractive=e,this.eventMode=e?"static":"auto"},_internalEventMode:void 0,get eventMode(){return this._internalEventMode??bi.defaultEventMode},set eventMode(e){this._internalInteractive=no(e),this._internalEventMode=e},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(e,t,i){const s=typeof i=="boolean"&&i||typeof i=="object"&&i.capture,r=typeof t=="function"?void 0:t;e=s?`${e}capture`:e,t=typeof t=="function"?t:t.handleEvent,this.on(e,t,r)},removeEventListener(e,t,i){const s=typeof i=="boolean"&&i||typeof i=="object"&&i.capture,r=typeof t=="function"?void 0:t;e=s?`${e}capture`:e,t=typeof t=="function"?t:t.handleEvent,this.off(e,t,r)},dispatchEvent(e){if(!(e instanceof Ei))throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");return e.defaultPrevented=!1,e.path=null,e.target=this,e.manager.dispatchEvent(e),!e.defaultPrevented}};nt.mixin(zd);const Hd={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};nt.mixin(Hd);const $d=9,zi=100,Xd=0,Vd=0,oo=2,ao=1,jd=-1e3,Wd=-1e3,Yd=2;class qa{constructor(t){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(se.tablet||se.phone)&&this.createTouchHook();const i=document.createElement("div");i.style.width=`${zi}px`,i.style.height=`${zi}px`,i.style.position="absolute",i.style.top=`${Xd}px`,i.style.left=`${Vd}px`,i.style.zIndex=oo.toString(),this.div=i,this.renderer=t,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get isMobileAccessibility(){return this._isMobileAccessibility}createTouchHook(){const t=document.createElement("button");t.style.width=`${ao}px`,t.style.height=`${ao}px`,t.style.position="absolute",t.style.top=`${jd}px`,t.style.left=`${Wd}px`,t.style.zIndex=Yd.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",()=>{this._isMobileAccessibility=!0,this.activate(),this.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t}destroyTouchHook(){this._hookDiv&&(document.body.removeChild(this._hookDiv),this._hookDiv=null)}activate(){var t;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(t=this.renderer.view.parentNode)==null||t.appendChild(this.div))}deactivate(){var t;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(t=this.div.parentNode)==null||t.removeChild(this.div))}updateAccessibleObjects(t){if(!t.visible||!t.accessibleChildren)return;t.accessible&&t.isInteractive()&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);const i=t.children;if(i)for(let s=0;s<i.length;s++)this.updateAccessibleObjects(i[s])}update(){const t=performance.now();if(se.android.device&&t<this.androidUpdateCount||(this.androidUpdateCount=t+this.androidUpdateFrequency,!this.renderer.renderingToScreen))return;this.renderer.lastObjectRendered&&this.updateAccessibleObjects(this.renderer.lastObjectRendered);const{x:i,y:s,width:r,height:n}=this.renderer.view.getBoundingClientRect(),{width:o,height:a,resolution:l}=this.renderer,h=r/o*l,c=n/a*l;let u=this.div;u.style.left=`${i}px`,u.style.top=`${s}px`,u.style.width=`${o}px`,u.style.height=`${a}px`;for(let d=0;d<this.children.length;d++){const f=this.children[d];if(f.renderId!==this.renderId)f._accessibleActive=!1,je(this.children,d,1),this.div.removeChild(f._accessibleDiv),this.pool.push(f._accessibleDiv),f._accessibleDiv=null,d--;else{u=f._accessibleDiv;let p=f.hitArea;const _=f.worldTransform;f.hitArea?(u.style.left=`${(_.tx+p.x*_.a)*h}px`,u.style.top=`${(_.ty+p.y*_.d)*c}px`,u.style.width=`${p.width*_.a*h}px`,u.style.height=`${p.height*_.d*c}px`):(p=f.getBounds(),this.capHitArea(p),u.style.left=`${p.x*h}px`,u.style.top=`${p.y*c}px`,u.style.width=`${p.width*h}px`,u.style.height=`${p.height*c}px`,u.title!==f.accessibleTitle&&f.accessibleTitle!==null&&(u.title=f.accessibleTitle),u.getAttribute("aria-label")!==f.accessibleHint&&f.accessibleHint!==null&&u.setAttribute("aria-label",f.accessibleHint)),(f.accessibleTitle!==u.title||f.tabIndex!==u.tabIndex)&&(u.title=f.accessibleTitle,u.tabIndex=f.tabIndex,this.debug&&this.updateDebugHTML(u))}}this.renderId++}updateDebugHTML(t){t.innerHTML=`type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`}capHitArea(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0);const{width:i,height:s}=this.renderer;t.x+t.width>i&&(t.width=i-t.x),t.y+t.height>s&&(t.height=s-t.y)}addChild(t){let i=this.pool.pop();i||(i=document.createElement("button"),i.style.width=`${zi}px`,i.style.height=`${zi}px`,i.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",i.style.position="absolute",i.style.zIndex=oo.toString(),i.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?i.setAttribute("aria-live","off"):i.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?i.setAttribute("aria-relevant","additions"):i.setAttribute("aria-relevant","text"),i.addEventListener("click",this._onClick.bind(this)),i.addEventListener("focus",this._onFocus.bind(this)),i.addEventListener("focusout",this._onFocusOut.bind(this))),i.style.pointerEvents=t.accessiblePointerEvents,i.type=t.accessibleType,t.accessibleTitle&&t.accessibleTitle!==null?i.title=t.accessibleTitle:(!t.accessibleHint||t.accessibleHint===null)&&(i.title=`displayObject ${t.tabIndex}`),t.accessibleHint&&t.accessibleHint!==null&&i.setAttribute("aria-label",t.accessibleHint),this.debug&&this.updateDebugHTML(i),t._accessibleActive=!0,t._accessibleDiv=i,i.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex}_dispatchEvent(t,i){const{displayObject:s}=t.target,r=this.renderer.events.rootBoundary,n=Object.assign(new Ei(r),{target:s});r.rootTarget=this.renderer.lastObjectRendered,i.forEach(o=>r.dispatchEvent(n,o))}_onClick(t){this._dispatchEvent(t,["click","pointertap","tap"])}_onFocus(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","assertive"),this._dispatchEvent(t,["mouseover"])}_onFocusOut(t){t.target.getAttribute("aria-live")||t.target.setAttribute("aria-live","polite"),this._dispatchEvent(t,["mouseout"])}_onKeyDown(t){t.keyCode===$d&&this.activate()}_onMouseMove(t){t.movementX===0&&t.movementY===0||this.deactivate()}destroy(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null}}qa.extension={name:"accessibility",type:[D.RendererPlugin,D.CanvasRendererPlugin]};N.add(qa);const Lr=class{constructor(e){this.stage=new St,e=Object.assign({forceCanvas:!1},e),this.renderer=Ac(e),Lr._plugins.forEach(t=>{t.init.call(this,e)})}render(){this.renderer.render(this.stage)}get view(){return this.renderer.view}get screen(){return this.renderer.screen}destroy(e,t){const i=Lr._plugins.slice(0);i.reverse(),i.forEach(s=>{s.destroy.call(this)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null}};let en=Lr;en._plugins=[];N.handleByList(D.Application,en._plugins);class Ka{static init(t){Object.defineProperty(this,"resizeTo",{set(i){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=i,i&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this.cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this.cancelResize=()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>{if(!this._resizeTo)return;this.cancelResize();let i,s;if(this._resizeTo===globalThis.window)i=globalThis.innerWidth,s=globalThis.innerHeight;else{const{clientWidth:r,clientHeight:n}=this._resizeTo;i=r,s=n}this.renderer.resize(i,s),this.render()},this._resizeId=null,this._resizeTo=null,this.resizeTo=t.resizeTo||null}static destroy(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null}}Ka.extension=D.Application;N.add(Ka);const lo={loader:D.LoadParser,resolver:D.ResolveParser,cache:D.CacheParser,detection:D.DetectionParser};N.handle(D.Asset,e=>{const t=e.ref;Object.entries(lo).filter(([i])=>!!t[i]).forEach(([i,s])=>N.add(Object.assign(t[i],{extension:t[i].extension??s})))},e=>{const t=e.ref;Object.keys(lo).filter(i=>!!t[i]).forEach(i=>N.remove(t[i]))});class qd{constructor(t,i=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=i}add(t){t.forEach(i=>{this._assetList.push(i)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],i=Math.min(this._assetList.length,this._maxConcurrent);for(let s=0;s<i;s++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}function Ci(e,t){if(Array.isArray(t)){for(const i of t)if(e.startsWith(`data:${i}`))return!0;return!1}return e.startsWith(`data:${t}`)}function De(e,t){const i=e.split("?")[0],s=bt.extname(i).toLowerCase();return Array.isArray(t)?t.includes(s):s===t}const ne=(e,t)=>(Array.isArray(e)||(e=[e]),t?e.map(i=>typeof i=="string"?t(i):i):e),Or=(e,t)=>{const i=t.split("?")[1];return i&&(e+=`?${i}`),e};function Za(e,t,i,s,r){const n=t[i];for(let o=0;o<n.length;o++){const a=n[o];i<t.length-1?Za(e.replace(s[i],a),t,i+1,s,r):r.push(e.replace(s[i],a))}}function Kd(e){const t=/\{(.*?)\}/g,i=e.match(t),s=[];if(i){const r=[];i.forEach(n=>{const o=n.substring(1,n.length-1).split(",");r.push(o)}),Za(e,r,0,i,s)}else s.push(e);return s}const cs=e=>!Array.isArray(e);class Zd{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const i=this._cache.get(t);return i||console.warn(`[Assets] Asset id ${t} was not found in the Cache`),i}set(t,i){const s=ne(t);let r;for(let a=0;a<this.parsers.length;a++){const l=this.parsers[a];if(l.test(i)){r=l.getCacheableAssets(s,i);break}}r||(r={},s.forEach(a=>{r[a]=i}));const n=Object.keys(r),o={cacheKeys:n,keys:s};if(s.forEach(a=>{this._cacheMap.set(a,o)}),n.forEach(a=>{this._cache.has(a)&&this._cache.get(a)!==i&&console.warn("[Cache] already has key:",a),this._cache.set(a,r[a])}),i instanceof B){const a=i;s.forEach(l=>{a.baseTexture!==B.EMPTY.baseTexture&&X.addToCache(a.baseTexture,l),B.addToCache(a,l)})}}remove(t){if(this._cacheMap.get(t),!this._cacheMap.has(t)){console.warn(`[Assets] Asset id ${t} was not found in the Cache`);return}const i=this._cacheMap.get(t);i.cacheKeys.forEach(r=>{this._cache.delete(r)}),i.keys.forEach(r=>{this._cacheMap.delete(r)})}get parsers(){return this._parsers}}const ai=new Zd;class Qd{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,i,s)=>(this._parsersValidated=!1,t[i]=s,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,i){const s={promise:null,parser:null};return s.promise=(async()=>{var o,a;let r=null,n=null;if(i.loadParser&&(n=this._parserHash[i.loadParser],n||console.warn(`[Assets] specified load parser "${i.loadParser}" not found while loading ${t}`)),!n){for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];if(h.load&&((o=h.test)!=null&&o.call(h,t,i,this))){n=h;break}}if(!n)return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(t,i,this),s.parser=n;for(let l=0;l<this.parsers.length;l++){const h=this.parsers[l];h.parse&&h.parse&&await((a=h.testParse)==null?void 0:a.call(h,r,i,this))&&(r=await h.parse(r,i,this)||r,s.parser=h)}return r})(),s}async load(t,i){this._parsersValidated||this._validateParsers();let s=0;const r={},n=cs(t),o=ne(t,h=>({src:h})),a=o.length,l=o.map(async h=>{const c=bt.toAbsolute(h.src);if(!r[h.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,h)),r[h.src]=await this.promiseCache[c].promise,i&&i(++s/a)}catch(u){throw delete this.promiseCache[c],delete r[h.src],new Error(`[Loader.load] Failed to load ${c}.
${u}`)}});return await Promise.all(l),n?r[o[0].src]:r}async unload(t){const s=ne(t,r=>({src:r})).map(async r=>{var a,l;const n=bt.toAbsolute(r.src),o=this.promiseCache[n];if(o){const h=await o.promise;(l=(a=o.parser)==null?void 0:a.unload)==null||l.call(a,h,r,this),delete this.promiseCache[n]}});await Promise.all(s)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,i)=>(t[i.name]&&console.warn(`[Assets] loadParser name conflict "${i.name}"`),{...t,[i.name]:i}),{})}}var Jt=(e=>(e[e.Low=0]="Low",e[e.Normal=1]="Normal",e[e.High=2]="High",e))(Jt||{});const Jd=".json",tf="application/json",ef={extension:{type:D.LoadParser,priority:Jt.Low},name:"loadJson",test(e){return Ci(e,tf)||De(e,Jd)},async load(e){return await(await R.ADAPTER.fetch(e)).json()}};N.add(ef);const sf=".txt",rf="text/plain",nf={name:"loadTxt",extension:{type:D.LoadParser,priority:Jt.Low},test(e){return Ci(e,rf)||De(e,sf)},async load(e){return await(await R.ADAPTER.fetch(e)).text()}};N.add(nf);const of=["normal","bold","100","200","300","400","500","600","700","800","900"],af=[".ttf",".otf",".woff",".woff2"],lf=["font/ttf","font/otf","font/woff","font/woff2"];function hf(e){const t=bt.extname(e);return bt.basename(e,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" ")}const cf={extension:{type:D.LoadParser,priority:Jt.Low},name:"loadWebFont",test(e){return Ci(e,lf)||De(e,af)},async load(e,t){var s,r,n;const i=R.ADAPTER.getFontFaceSet();if(i){const o=[],a=((s=t.data)==null?void 0:s.family)??hf(e),l=((n=(r=t.data)==null?void 0:r.weights)==null?void 0:n.filter(c=>of.includes(c)))??["normal"],h=t.data??{};for(let c=0;c<l.length;c++){const u=l[c],d=new FontFace(a,`url(${encodeURI(e)})`,{...h,weight:u});await d.load(),i.add(d),o.push(d)}return o.length===1?o[0]:o}return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(e){(Array.isArray(e)?e:[e]).forEach(t=>R.ADAPTER.getFontFaceSet().delete(t))}};N.add(cf);let ho=0,Qs;const uf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",df={id:"checkImageBitmap",code:`
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${uf}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `},ff={id:"loadImageBitmap",code:`
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`};let Js;class pf{constructor(){this._initialized=!1,this._createdWorkers=0,this.workerPool=[],this.queue=[],this.resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const i=URL.createObjectURL(new Blob([df.code],{type:"application/javascript"})),s=new Worker(i);s.addEventListener("message",r=>{s.terminate(),URL.revokeObjectURL(i),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t){return this._run("loadImageBitmap",[t])}async _initWorkers(){this._initialized||(this._initialized=!0)}getWorker(){Qs===void 0&&(Qs=navigator.hardwareConcurrency||4);let t=this.workerPool.pop();return!t&&this._createdWorkers<Qs&&(Js||(Js=URL.createObjectURL(new Blob([ff.code],{type:"application/javascript"}))),this._createdWorkers++,t=new Worker(Js),t.addEventListener("message",i=>{this.complete(i.data),this.returnWorker(i.target),this.next()})),t}returnWorker(t){this.workerPool.push(t)}complete(t){t.error!==void 0?this.resolveHash[t.uuid].reject(t.error):this.resolveHash[t.uuid].resolve(t.data),this.resolveHash[t.uuid]=null}async _run(t,i){await this._initWorkers();const s=new Promise((r,n)=>{this.queue.push({id:t,arguments:i,resolve:r,reject:n})});return this.next(),s}next(){if(!this.queue.length)return;const t=this.getWorker();if(!t)return;const i=this.queue.pop(),s=i.id;this.resolveHash[ho]={resolve:i.resolve,reject:i.reject},t.postMessage({data:i.arguments,uuid:ho++,id:s})}}const co=new pf;function Es(e,t,i){const s=new B(e);return s.baseTexture.on("dispose",()=>{delete t.promiseCache[i]}),s}const mf=[".jpeg",".jpg",".png",".webp",".avif"],gf=["image/jpeg","image/png","image/webp","image/avif"];async function _f(e){const t=await R.ADAPTER.fetch(e);if(!t.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);const i=await t.blob();return await createImageBitmap(i)}const Cs={name:"loadTextures",extension:{type:D.LoadParser,priority:Jt.High},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(e){return Ci(e,gf)||De(e,mf)},async load(e,t,i){let s=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await co.isImageBitmapSupported()?s=await co.loadImageBitmap(e):s=await _f(e):s=await new Promise(n=>{s=new Image,s.crossOrigin=this.config.crossOrigin,s.src=e,s.complete?n(s):s.onload=()=>{n(s)}});const r=new X(s,{resolution:ue(e),...t.data});return r.resource.src=e,Es(r,i,e)},unload(e){e.destroy(!0)}};N.add(Cs);const vf=".svg",xf="image/svg+xml",yf={extension:{type:D.LoadParser,priority:Jt.High},name:"loadSVG",test(e){return Ci(e,xf)||De(e,vf)},async testParse(e){return yi.test(e)},async parse(e,t,i){var o,a,l;const s=new yi(e,(o=t==null?void 0:t.data)==null?void 0:o.resourceOptions),r=new X(s,{resolution:ue(e),...t==null?void 0:t.data});r.resource.src=e;const n=Es(r,i,e);return(l=(a=t==null?void 0:t.data)==null?void 0:a.resourceOptions)!=null&&l.autoLoad||await s.load(),n},async load(e,t){return(await R.ADAPTER.fetch(e)).text()},unload:Cs.unload};N.add(yf);class bf{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,i)=>`${t}${this._bundleIdConnector}${i}`,extractAssetIdFromBundle:(t,i)=>i.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(i=>{this._preferredOrder.push(i),i.priority||(i.priority=Object.keys(i.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const i=t;this._defaultSearchParams=Object.keys(i).map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(i[s])}`).join("&")}}addManifest(t){this._manifest&&console.warn("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(i=>{this.addBundle(i.name,i.assets)})}addBundle(t,i){const s=[];Array.isArray(i)?i.forEach(r=>{if(typeof r.name=="string"){const n=this._createBundleAssetId(t,r.name);s.push(n),this.add([r.name,n],r.srcs,r.data)}else{const n=r.name.map(o=>this._createBundleAssetId(t,o));n.forEach(o=>{s.push(o)}),this.add([...r.name,...n],r.srcs)}}):Object.keys(i).forEach(r=>{s.push(this._createBundleAssetId(t,r)),this.add([r,this._createBundleAssetId(t,r)],i[r])}),this._bundles[t]=s}add(t,i,s){const r=ne(t);r.forEach(o=>{this.hasKey(o)&&console.warn(`[Resolver] already has key: ${o} overwriting`)}),Array.isArray(i)||(typeof i=="string"?i=Kd(i):i=[i]);const n=i.map(o=>{let a=o;if(typeof o=="string"){let l=!1;for(let h=0;h<this._parsers.length;h++){const c=this._parsers[h];if(c.test(o)){a=c.parse(o),l=!0;break}}l||(a={src:o})}return a.format||(a.format=a.src.split(".").pop()),a.alias||(a.alias=r),(this._basePath||this._rootPath)&&(a.src=bt.toAbsolute(a.src,this._basePath,this._rootPath)),a.src=this._appendDefaultSearchParams(a.src),a.data=a.data??s,a});r.forEach(o=>{this._assetMap[o]=n})}resolveBundle(t){const i=cs(t);t=ne(t);const s={};return t.forEach(r=>{const n=this._bundles[r];if(n){const o=this.resolve(n),a={};for(const l in o){const h=o[l];a[this._extractAssetIdFromBundle(r,l)]=h}s[r]=a}}),i?s[t[0]]:s}resolveUrl(t){const i=this.resolve(t);if(typeof t!="string"){const s={};for(const r in i)s[r]=i[r].src;return s}return i.src}resolve(t){const i=cs(t);t=ne(t);const s={};return t.forEach(r=>{if(!this._resolverHash[r])if(this._assetMap[r]){let n=this._assetMap[r];const o=this._getPreferredOrder(n),a=n[0];o==null||o.priority.forEach(l=>{o.params[l].forEach(h=>{const c=n.filter(u=>u[l]?u[l]===h:!1);c.length&&(n=c)})}),this._resolverHash[r]=n[0]??a}else{let n=r;(this._basePath||this._rootPath)&&(n=bt.toAbsolute(n,this._basePath,this._rootPath)),n=this._appendDefaultSearchParams(n),this._resolverHash[r]={src:n}}s[r]=this._resolverHash[r]}),i?s[t[0]]:s}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let i=0;i<t.length;i++){const s=t[0],r=this._preferredOrder.find(n=>n.params.format.includes(s.format));if(r)return r}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const i=/\?/.test(t)?"&":"?";return`${t}${i}${this._defaultSearchParams}`}}class Tf{constructor(){this._detections=[],this._initialized=!1,this.resolver=new bf,this.loader=new Qd,this.cache=ai,this._backgroundLoader=new qd(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var n,o,a;if(this._initialized){console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let l=t.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const i=((n=t.texturePreference)==null?void 0:n.resolution)??1,s=typeof i=="number"?[i]:i;let r=[];if((o=t.texturePreference)!=null&&o.format){const l=(a=t.texturePreference)==null?void 0:a.format;r=typeof l=="string"?[l]:l;for(const h of this._detections)await h.test()||(r=await h.remove(r))}else for(const l of this._detections)await l.test()&&(r=await l.add(r));this.resolver.prefer({params:{format:r,resolution:s}}),t.preferences&&this.setPreferences(t.preferences)}add(t,i,s){this.resolver.add(t,i,s)}async load(t,i){this._initialized||await this.init();const s=cs(t),r=ne(t).map(a=>typeof a!="string"?(this.resolver.add(a.src,a),a.src):(this.resolver.hasKey(a)||this.resolver.add(a,a),a)),n=this.resolver.resolve(r),o=await this._mapLoadToResolve(n,i);return s?o[r[0]]:o}addBundle(t,i){this.resolver.addBundle(t,i)}async loadBundle(t,i){this._initialized||await this.init();let s=!1;typeof t=="string"&&(s=!0,t=[t]);const r=this.resolver.resolveBundle(t),n={},o=Object.keys(r);let a=0,l=0;const h=()=>{i==null||i(++a/l)},c=o.map(u=>{const d=r[u];return l+=Object.keys(d).length,this._mapLoadToResolve(d,h).then(f=>{n[u]=f})});return await Promise.all(c),s?n[t[0]]:n}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const i=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(i))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const i=this.resolver.resolveBundle(t);Object.values(i).forEach(s=>{this._backgroundLoader.add(Object.values(s))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return ai.get(t);const i={};for(let s=0;s<t.length;s++)i[s]=ai.get(t[s]);return i}async _mapLoadToResolve(t,i){const s=Object.values(t),r=Object.keys(t);this._backgroundLoader.active=!1;const n=await this.loader.load(s,i);this._backgroundLoader.active=!0;const o={};return s.forEach((a,l)=>{const h=n[a.src],c=[a.src];a.alias&&c.push(...a.alias),o[r[l]]=h,ai.set(c,h)}),o}async unload(t){this._initialized||await this.init();const i=ne(t).map(r=>typeof r!="string"?r.src:r),s=this.resolver.resolve(i);await this._unloadFromResolved(s)}async unloadBundle(t){this._initialized||await this.init(),t=ne(t);const i=this.resolver.resolveBundle(t),s=Object.keys(i).map(r=>this._unloadFromResolved(i[r]));await Promise.all(s)}async _unloadFromResolved(t){const i=Object.values(t);i.forEach(s=>{ai.remove(s.src)}),await this.loader.unload(i)}get detections(){return this._detections}get preferWorkers(){return Cs.config.preferWorkers}set preferWorkers(t){Y("7.2.0","Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."),this.setPreferences({preferWorkers:t})}setPreferences(t){this.loader.parsers.forEach(i=>{i.config&&Object.keys(i.config).filter(s=>s in t).forEach(s=>{i.config[s]=t[s]})})}}const Hi=new Tf;N.handleByList(D.LoadParser,Hi.loader.parsers).handleByList(D.ResolveParser,Hi.resolver.parsers).handleByList(D.CacheParser,Hi.cache.parsers).handleByList(D.DetectionParser,Hi.detections);const wf={extension:D.CacheParser,test:e=>Array.isArray(e)&&e.every(t=>t instanceof B),getCacheableAssets:(e,t)=>{const i={};return e.forEach(s=>{t.forEach((r,n)=>{i[s+(n===0?"":n+1)]=r})}),i}};N.add(wf);const Ef={extension:{type:D.DetectionParser,priority:1},test:async()=>{if(!globalThis.createImageBitmap)return!1;const e="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",t=await R.ADAPTER.fetch(e).then(i=>i.blob());return createImageBitmap(t).then(()=>!0,()=>!1)},add:async e=>[...e,"avif"],remove:async e=>e.filter(t=>t!=="avif")};N.add(Ef);const Cf={extension:{type:D.DetectionParser,priority:0},test:async()=>{if(!globalThis.createImageBitmap)return!1;const e="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",t=await R.ADAPTER.fetch(e).then(i=>i.blob());return createImageBitmap(t).then(()=>!0,()=>!1)},add:async e=>[...e,"webp"],remove:async e=>e.filter(t=>t!=="webp")};N.add(Cf);const uo=["png","jpg","jpeg"],Sf={extension:{type:D.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async e=>[...e,...uo],remove:async e=>e.filter(t=>!uo.includes(t))};N.add(Sf);const Af={extension:D.ResolveParser,test:Cs.test,parse:e=>{var t;return{resolution:parseFloat(((t=R.RETINA_PREFIX.exec(e))==null?void 0:t[1])??"1"),format:e.split(".").pop(),src:e}}};N.add(Af);var Ct=(e=>(e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",e[e.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",e[e.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",e))(Ct||{});const us={[33776]:.5,[33777]:.5,[33778]:1,[33779]:1,[35916]:.5,[35917]:.5,[35918]:1,[35919]:1,[37488]:.5,[37489]:.5,[37490]:1,[37491]:1,[37492]:.5,[37496]:1,[37493]:.5,[37497]:1,[37494]:.5,[37495]:.5,[35840]:.5,[35842]:.5,[35841]:.25,[35843]:.25,[36196]:.5,[35986]:.5,[35986]:1,[34798]:1,[37808]:1};let ie,Ne;function fo(){Ne={s3tc:ie.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:ie.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:ie.getExtension("WEBGL_compressed_texture_etc"),etc1:ie.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:ie.getExtension("WEBGL_compressed_texture_pvrtc")||ie.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:ie.getExtension("WEBGL_compressed_texture_atc"),astc:ie.getExtension("WEBGL_compressed_texture_astc")}}const If={extension:{type:D.DetectionParser,priority:2},test:async()=>{const t=R.ADAPTER.createCanvas().getContext("webgl");return t?(ie=t,!0):(console.warn("WebGL not available for compressed textures."),!1)},add:async e=>{Ne||fo();const t=[];for(const i in Ne)Ne[i]&&t.push(i);return[...t,...e]},remove:async e=>(Ne||fo(),e.filter(t=>!(t in Ne)))};N.add(If);class Pf extends wi{constructor(t,i={width:1,height:1,autoLoad:!0}){let s,r;typeof t=="string"?(s=t,r=new Uint8Array):(s=null,r=t),super(r,i),this.origin=s,this.buffer=r?new xr(r):null,this.origin&&i.autoLoad!==!1&&this.load(),r!=null&&r.length&&(this.loaded=!0,this.onBlobLoaded(this.buffer.rawBinaryData))}onBlobLoaded(t){}async load(){const s=await(await(await fetch(this.origin)).blob()).arrayBuffer();return this.data=new Uint32Array(s),this.buffer=new xr(s),this.loaded=!0,this.onBlobLoaded(s),this.update(),this}}class Ee extends Pf{constructor(t,i){super(t,i),this.format=i.format,this.levels=i.levels||1,this._width=i.width,this._height=i.height,this._extension=Ee._formatToExtension(this.format),(i.levelBuffers||this.buffer)&&(this._levelBuffers=i.levelBuffers||Ee._createLevelBuffers(t instanceof Uint8Array?t:this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height))}upload(t,i,s){const r=t.gl;if(!t.context.extensions[this._extension])throw new Error(`${this._extension} textures are not supported on the current machine`);if(!this._levelBuffers)return!1;for(let o=0,a=this.levels;o<a;o++){const{levelID:l,levelWidth:h,levelHeight:c,levelBuffer:u}=this._levelBuffers[o];r.compressedTexImage2D(r.TEXTURE_2D,l,this.format,h,c,0,u)}return!0}onBlobLoaded(){this._levelBuffers=Ee._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)}static _formatToExtension(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")}static _createLevelBuffers(t,i,s,r,n,o,a){const l=new Array(s);let h=t.byteOffset,c=o,u=a,d=c+r-1&~(r-1),f=u+n-1&~(n-1),p=d*f*us[i];for(let _=0;_<s;_++)l[_]={levelID:_,levelWidth:s>1?c:d,levelHeight:s>1?u:f,levelBuffer:new Uint8Array(t.buffer,h,p)},h+=p,c=c>>1||1,u=u>>1||1,d=c+r-1&~(r-1),f=u+n-1&~(n-1),p=d*f*us[i];return l}}const tr=4,$i=124,Rf=32,po=20,Mf=542327876,Xi={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Df={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},Vi={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},Ff=1,Bf=2,Lf=4,Of=64,kf=512,Nf=131072,Uf=827611204,Gf=861165636,zf=894720068,Hf=808540228,$f=4,Xf={[Uf]:Ct.COMPRESSED_RGBA_S3TC_DXT1_EXT,[Gf]:Ct.COMPRESSED_RGBA_S3TC_DXT3_EXT,[zf]:Ct.COMPRESSED_RGBA_S3TC_DXT5_EXT},Vf={[70]:Ct.COMPRESSED_RGBA_S3TC_DXT1_EXT,[71]:Ct.COMPRESSED_RGBA_S3TC_DXT1_EXT,[73]:Ct.COMPRESSED_RGBA_S3TC_DXT3_EXT,[74]:Ct.COMPRESSED_RGBA_S3TC_DXT3_EXT,[76]:Ct.COMPRESSED_RGBA_S3TC_DXT5_EXT,[77]:Ct.COMPRESSED_RGBA_S3TC_DXT5_EXT,[72]:Ct.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,[75]:Ct.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,[78]:Ct.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT};function jf(e){const t=new Uint32Array(e);if(t[0]!==Mf)throw new Error("Invalid DDS file magic word");const s=new Uint32Array(e,0,$i/Uint32Array.BYTES_PER_ELEMENT),r=s[Xi.HEIGHT],n=s[Xi.WIDTH],o=s[Xi.MIPMAP_COUNT],a=new Uint32Array(e,Xi.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,Rf/Uint32Array.BYTES_PER_ELEMENT),l=a[Ff];if(l&Lf){const h=a[Df.FOURCC];if(h!==Hf){const g=Xf[h],x=tr+$i,E=new Uint8Array(e,x);return[new Ee(E,{format:g,width:n,height:r,levels:o})]}const c=tr+$i,u=new Uint32Array(t.buffer,c,po/Uint32Array.BYTES_PER_ELEMENT),d=u[Vi.DXGI_FORMAT],f=u[Vi.RESOURCE_DIMENSION],p=u[Vi.MISC_FLAG],_=u[Vi.ARRAY_SIZE],m=Vf[d];if(m===void 0)throw new Error(`DDSParser cannot parse texture data with DXGI format ${d}`);if(p===$f)throw new Error("DDSParser does not support cubemap textures");if(f===6)throw new Error("DDSParser does not supported 3D texture data");const v=new Array,y=tr+$i+po;if(_===1)v.push(new Uint8Array(e,y));else{const g=us[m];let x=0,E=n,M=r;for(let C=0;C<o;C++){const O=Math.max(1,E+3&-4),U=Math.max(1,M+3&-4),P=O*U*g;x+=P,E=E>>>1,M=M>>>1}let A=y;for(let C=0;C<_;C++)v.push(new Uint8Array(e,A,x)),A+=x}return v.map(g=>new Ee(g,{format:m,width:n,height:r,levels:o}))}throw l&Of?new Error("DDSParser does not support uncompressed texture data."):l&kf?new Error("DDSParser does not supported YUV uncompressed texture data."):l&Nf?new Error("DDSParser does not support single-channel (lumninance) texture data!"):l&Bf?new Error("DDSParser does not support single-channel (alpha) texture data!"):new Error("DDSParser failed to load a texture file due to an unknown reason!")}const mo=[171,75,84,88,32,49,49,187,13,10,26,10],Wf=67305985,Rt={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},kr=64,go={[G.UNSIGNED_BYTE]:1,[G.UNSIGNED_SHORT]:2,[G.INT]:4,[G.UNSIGNED_INT]:4,[G.FLOAT]:4,[G.HALF_FLOAT]:8},Yf={[I.RGBA]:4,[I.RGB]:3,[I.RG]:2,[I.RED]:1,[I.LUMINANCE]:1,[I.LUMINANCE_ALPHA]:2,[I.ALPHA]:1},qf={[G.UNSIGNED_SHORT_4_4_4_4]:2,[G.UNSIGNED_SHORT_5_5_5_1]:2,[G.UNSIGNED_SHORT_5_6_5]:2};function Kf(e,t,i=!1){const s=new DataView(t);if(!Zf(e,s))return null;const r=s.getUint32(Rt.ENDIANNESS,!0)===Wf,n=s.getUint32(Rt.GL_TYPE,r),o=s.getUint32(Rt.GL_FORMAT,r),a=s.getUint32(Rt.GL_INTERNAL_FORMAT,r),l=s.getUint32(Rt.PIXEL_WIDTH,r),h=s.getUint32(Rt.PIXEL_HEIGHT,r)||1,c=s.getUint32(Rt.PIXEL_DEPTH,r)||1,u=s.getUint32(Rt.NUMBER_OF_ARRAY_ELEMENTS,r)||1,d=s.getUint32(Rt.NUMBER_OF_FACES,r),f=s.getUint32(Rt.NUMBER_OF_MIPMAP_LEVELS,r),p=s.getUint32(Rt.BYTES_OF_KEY_VALUE_DATA,r);if(h===0||c!==1)throw new Error("Only 2D textures are supported");if(d!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(u!==1)throw new Error("WebGL does not support array textures");const _=4,m=4,v=l+3&-4,y=h+3&-4,g=new Array(u);let x=l*h;n===0&&(x=v*y);let E;if(n!==0?go[n]?E=go[n]*Yf[o]:E=qf[n]:E=us[a],E===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");const M=i?Jf(s,p,r):null;let C=x*E,O=l,U=h,P=v,F=y,S=kr+p;for(let b=0;b<f;b++){const $=s.getUint32(S,r);let q=S+4;for(let T=0;T<u;T++){let k=g[T];k||(k=g[T]=new Array(f)),k[b]={levelID:b,levelWidth:f>1||n!==0?O:P,levelHeight:f>1||n!==0?U:F,levelBuffer:new Uint8Array(t,q,C)},q+=C}S+=$+4,S=S%4!==0?S+4-S%4:S,O=O>>1||1,U=U>>1||1,P=O+_-1&~(_-1),F=U+m-1&~(m-1),C=P*F*E}return n!==0?{uncompressed:g.map(b=>{let $=b[0].levelBuffer,q=!1;return n===G.FLOAT?$=new Float32Array(b[0].levelBuffer.buffer,b[0].levelBuffer.byteOffset,b[0].levelBuffer.byteLength/4):n===G.UNSIGNED_INT?(q=!0,$=new Uint32Array(b[0].levelBuffer.buffer,b[0].levelBuffer.byteOffset,b[0].levelBuffer.byteLength/4)):n===G.INT&&(q=!0,$=new Int32Array(b[0].levelBuffer.buffer,b[0].levelBuffer.byteOffset,b[0].levelBuffer.byteLength/4)),{resource:new wi($,{width:b[0].levelWidth,height:b[0].levelHeight}),type:n,format:q?Qf(o):o}}),kvData:M}:{compressed:g.map(b=>new Ee(null,{format:a,width:l,height:h,levels:f,levelBuffers:b})),kvData:M}}function Zf(e,t){for(let i=0;i<mo.length;i++)if(t.getUint8(i)!==mo[i])return console.error(`${e} is not a valid *.ktx file!`),!1;return!0}function Qf(e){switch(e){case I.RGBA:return I.RGBA_INTEGER;case I.RGB:return I.RGB_INTEGER;case I.RG:return I.RG_INTEGER;case I.RED:return I.RED_INTEGER;default:return e}}function Jf(e,t,i){const s=new Map;let r=0;for(;r<t;){const n=e.getUint32(kr+r,i),o=kr+r+4,a=3-(n+3)%4;if(n===0||n>t-r){console.error("KTXLoader: keyAndValueByteSize out of bounds");break}let l=0;for(;l<n&&e.getUint8(o+l)!==0;l++);if(l===-1){console.error("KTXLoader: Failed to find null byte terminating kvData key");break}const h=new TextDecoder().decode(new Uint8Array(e.buffer,o,l)),c=new DataView(e.buffer,o+l+1,n-l-1);s.set(h,c),r+=4+n+a}return s}const tp={extension:{type:D.LoadParser,priority:Jt.High},name:"loadDDS",test(e){return De(e,".dds")},async load(e,t,i){const r=await(await R.ADAPTER.fetch(e)).arrayBuffer(),o=jf(r).map(a=>{const l=new X(a,{mipmap:Qt.OFF,alphaMode:zt.NO_PREMULTIPLIED_ALPHA,resolution:ue(e),...t.data});return Es(l,i,e)});return o.length===1?o[0]:o},unload(e){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};N.add(tp);const ep={extension:{type:D.LoadParser,priority:Jt.High},name:"loadKTX",test(e){return De(e,".ktx")},async load(e,t,i){const r=await(await R.ADAPTER.fetch(e)).arrayBuffer(),{compressed:n,uncompressed:o,kvData:a}=Kf(e,r),l=n??o,h={mipmap:Qt.OFF,alphaMode:zt.NO_PREMULTIPLIED_ALPHA,resolution:ue(e),...t.data},c=l.map(u=>{l===o&&Object.assign(h,{type:u.type,format:u.format});const d=new X(u,h);return d.ktxKeyValueData=a,Es(d,i,e)});return c.length===1?c[0]:c},unload(e){Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};N.add(ep);const ip={extension:D.ResolveParser,test:e=>{const i=e.split("?")[0].split(".").pop();return["basis","ktx","dds"].includes(i)},parse:e=>{var s,r;if(e.split("?")[0].split(".").pop()==="ktx"){const n=[".s3tc.ktx",".s3tc_sRGB.ktx",".etc.ktx",".etc1.ktx",".pvrt.ktx",".atc.ktx",".astc.ktx"];if(n.some(o=>e.endsWith(o)))return{resolution:parseFloat(((s=R.RETINA_PREFIX.exec(e))==null?void 0:s[1])??"1"),format:n.find(o=>e.endsWith(o)),src:e}}return{resolution:parseFloat(((r=R.RETINA_PREFIX.exec(e))==null?void 0:r[1])??"1"),format:e.split(".").pop(),src:e}}};N.add(ip);const sp=new K,rp=4,Nr=class{constructor(e){this.renderer=e}async image(e,t,i){const s=new Image;return s.src=await this.base64(e,t,i),s}async base64(e,t,i){const s=this.canvas(e);if(s.toDataURL!==void 0)return s.toDataURL(t,i);if(s.convertToBlob!==void 0){const r=await s.convertToBlob({type:t,quality:i});return await new Promise(n=>{const o=new FileReader;o.onload=()=>n(o.result),o.readAsDataURL(r)})}throw new Error("Extract.base64() requires ICanvas.toDataURL or ICanvas.convertToBlob to be implemented")}canvas(e,t){const{pixels:i,width:s,height:r,flipY:n}=this._rawPixels(e,t);let o=new Bn(s,r,1);const a=o.context.getImageData(0,0,s,r);if(Nr.arrayPostDivide(i,a.data),o.context.putImageData(a,0,0),n){const l=new Bn(o.width,o.height,1);l.context.scale(1,-1),l.context.drawImage(o.canvas,0,-r),o.destroy(),o=l}return o.canvas}pixels(e,t){const{pixels:i}=this._rawPixels(e,t);return Nr.arrayPostDivide(i,i),i}_rawPixels(e,t){const i=this.renderer;if(!i)throw new Error("The Extract has already been destroyed");let s,r=!1,n,o=!1;if(e)if(e instanceof pe)n=e;else{const u=i.context.webGLVersion>=2?i.multisample:ot.NONE;if(n=i.generateTexture(e,{multisample:u}),u!==ot.NONE){const d=pe.create({width:n.width,height:n.height});i.framebuffer.bind(n.framebuffer),i.framebuffer.blit(d.framebuffer),i.framebuffer.bind(),n.destroy(!0),n=d}o=!0}n?(s=n.baseTexture.resolution,t=t??n.frame,r=!1,i.renderTexture.bind(n)):(s=i.resolution,t||(t=sp,t.width=i.width,t.height=i.height),r=!0,i.renderTexture.bind());const a=Math.round(t.width*s),l=Math.round(t.height*s),h=new Uint8Array(rp*a*l),c=i.gl;return c.readPixels(Math.round(t.x*s),Math.round(t.y*s),a,l,c.RGBA,c.UNSIGNED_BYTE,h),o&&(n==null||n.destroy(!0)),{pixels:h,width:a,height:l,flipY:r}}destroy(){this.renderer=null}static arrayPostDivide(e,t){for(let i=0;i<e.length;i+=4){const s=t[i+3]=e[i+3];s!==0?(t[i]=Math.round(Math.min(e[i]*255/s,255)),t[i+1]=Math.round(Math.min(e[i+1]*255/s,255)),t[i+2]=Math.round(Math.min(e[i+2]*255/s,255))):(t[i]=e[i],t[i+1]=e[i+1],t[i+2]=e[i+2])}}};let Qa=Nr;Qa.extension={name:"extract",type:D.RendererSystem};N.add(Qa);const ds={build(e){const t=e.points;let i,s,r,n,o,a;if(e.type===vt.CIRC){const p=e.shape;i=p.x,s=p.y,o=a=p.radius,r=n=0}else if(e.type===vt.ELIP){const p=e.shape;i=p.x,s=p.y,o=p.width,a=p.height,r=n=0}else{const p=e.shape,_=p.width/2,m=p.height/2;i=p.x+_,s=p.y+m,o=a=Math.max(0,Math.min(p.radius,Math.min(_,m))),r=_-o,n=m-a}if(!(o>=0&&a>=0&&r>=0&&n>=0)){t.length=0;return}const l=Math.ceil(2.3*Math.sqrt(o+a)),h=l*8+(r?4:0)+(n?4:0);if(t.length=h,h===0)return;if(l===0){t.length=8,t[0]=t[6]=i+r,t[1]=t[3]=s+n,t[2]=t[4]=i-r,t[5]=t[7]=s-n;return}let c=0,u=l*4+(r?2:0)+2,d=u,f=h;{const p=r+o,_=n,m=i+p,v=i-p,y=s+_;if(t[c++]=m,t[c++]=y,t[--u]=y,t[--u]=v,n){const g=s-_;t[d++]=v,t[d++]=g,t[--f]=g,t[--f]=m}}for(let p=1;p<l;p++){const _=Math.PI/2*(p/l),m=r+Math.cos(_)*o,v=n+Math.sin(_)*a,y=i+m,g=i-m,x=s+v,E=s-v;t[c++]=y,t[c++]=x,t[--u]=x,t[--u]=g,t[d++]=g,t[d++]=E,t[--f]=E,t[--f]=y}{const p=r,_=n+a,m=i+p,v=i-p,y=s+_,g=s-_;t[c++]=m,t[c++]=y,t[--f]=g,t[--f]=m,r&&(t[c++]=v,t[c++]=y,t[--f]=g,t[--f]=v)}},triangulate(e,t){const i=e.points,s=t.points,r=t.indices;if(i.length===0)return;let n=s.length/2;const o=n;let a,l;if(e.type!==vt.RREC){const c=e.shape;a=c.x,l=c.y}else{const c=e.shape;a=c.x+c.width/2,l=c.y+c.height/2}const h=e.matrix;s.push(e.matrix?h.a*a+h.c*l+h.tx:a,e.matrix?h.b*a+h.d*l+h.ty:l),n++,s.push(i[0],i[1]);for(let c=2;c<i.length;c+=2)s.push(i[c],i[c+1]),r.push(n++,o,n);r.push(o+1,o,n)}};function _o(e,t=!1){const i=e.length;if(i<6)return;let s=0;for(let r=0,n=e[i-2],o=e[i-1];r<i;r+=2){const a=e[r],l=e[r+1];s+=(a-n)*(l+o),n=a,o=l}if(!t&&s>0||t&&s<=0){const r=i/2;for(let n=r+r%2;n<i;n+=2){const o=i-n-2,a=i-n-1,l=n,h=n+1;[e[o],e[l]]=[e[l],e[o]],[e[a],e[h]]=[e[h],e[a]]}}}const Ja={build(e){e.points=e.shape.points.slice()},triangulate(e,t){let i=e.points;const s=e.holes,r=t.points,n=t.indices;if(i.length>=6){_o(i,!1);const o=[];for(let h=0;h<s.length;h++){const c=s[h];_o(c.points,!0),o.push(i.length/2),i=i.concat(c.points)}const a=is(i,o,2);if(!a)return;const l=r.length/2;for(let h=0;h<a.length;h+=3)n.push(a[h]+l),n.push(a[h+1]+l),n.push(a[h+2]+l);for(let h=0;h<i.length;h++)r.push(i[h])}}},np={build(e){const t=e.shape,i=t.x,s=t.y,r=t.width,n=t.height,o=e.points;o.length=0,r>=0&&n>=0&&o.push(i,s,i+r,s,i+r,s+n,i,s+n)},triangulate(e,t){const i=e.points,s=t.points;if(i.length===0)return;const r=s.length/2;s.push(i[0],i[1],i[2],i[3],i[6],i[7],i[4],i[5]),t.indices.push(r,r+1,r+2,r+1,r+2,r+3)}},op={build(e){ds.build(e)},triangulate(e,t){ds.triangulate(e,t)}};var Bt=(e=>(e.MITER="miter",e.BEVEL="bevel",e.ROUND="round",e))(Bt||{}),we=(e=>(e.BUTT="butt",e.ROUND="round",e.SQUARE="square",e))(we||{});const Qe={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount(e,t=20){if(!this.adaptive||!e||isNaN(e))return t;let i=Math.ceil(e/this.maxLength);return i<this.minSegments?i=this.minSegments:i>this.maxSegments&&(i=this.maxSegments),i}};class vo{static curveTo(t,i,s,r,n,o){const a=o[o.length-2],h=o[o.length-1]-i,c=a-t,u=r-i,d=s-t,f=Math.abs(h*d-c*u);if(f<1e-8||n===0)return(o[o.length-2]!==t||o[o.length-1]!==i)&&o.push(t,i),null;const p=h*h+c*c,_=u*u+d*d,m=h*u+c*d,v=n*Math.sqrt(p)/f,y=n*Math.sqrt(_)/f,g=v*m/p,x=y*m/_,E=v*d+y*c,M=v*u+y*h,A=c*(y+g),C=h*(y+g),O=d*(v+x),U=u*(v+x),P=Math.atan2(C-M,A-E),F=Math.atan2(U-M,O-E);return{cx:E+t,cy:M+i,radius:n,startAngle:P,endAngle:F,anticlockwise:c*u>d*h}}static arc(t,i,s,r,n,o,a,l,h){const c=a-o,u=Qe._segmentsCount(Math.abs(c)*n,Math.ceil(Math.abs(c)/os)*40),d=c/(u*2),f=d*2,p=Math.cos(d),_=Math.sin(d),m=u-1,v=m%1/m;for(let y=0;y<=m;++y){const g=y+v*y,x=d+o+f*g,E=Math.cos(x),M=-Math.sin(x);h.push((p*E+_*M)*n+s,(p*-M+_*E)*n+r)}}}class ap{constructor(){this.reset()}begin(t,i,s){this.reset(),this.style=t,this.start=i,this.attribStart=s}end(t,i){this.attribSize=i-this.attribStart,this.size=t-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}class sn{static curveLength(t,i,s,r,n,o,a,l){let c=0,u=0,d=0,f=0,p=0,_=0,m=0,v=0,y=0,g=0,x=0,E=t,M=i;for(let A=1;A<=10;++A)u=A/10,d=u*u,f=d*u,p=1-u,_=p*p,m=_*p,v=m*t+3*_*u*s+3*p*d*n+f*a,y=m*i+3*_*u*r+3*p*d*o+f*l,g=E-v,x=M-y,E=v,M=y,c+=Math.sqrt(g*g+x*x);return c}static curveTo(t,i,s,r,n,o,a){const l=a[a.length-2],h=a[a.length-1];a.length-=2;const c=Qe._segmentsCount(sn.curveLength(l,h,t,i,s,r,n,o));let u=0,d=0,f=0,p=0,_=0;a.push(l,h);for(let m=1,v=0;m<=c;++m)v=m/c,u=1-v,d=u*u,f=d*u,p=v*v,_=p*v,a.push(f*l+3*d*v*t+3*u*p*s+_*n,f*h+3*d*v*i+3*u*p*r+_*o)}}function xo(e,t,i,s,r,n,o,a){const l=e-i*r,h=t-s*r,c=e+i*n,u=t+s*n;let d,f;o?(d=s,f=-i):(d=-s,f=i);const p=l+d,_=h+f,m=c+d,v=u+f;return a.push(p,_,m,v),2}function ge(e,t,i,s,r,n,o,a){const l=i-e,h=s-t;let c=Math.atan2(l,h),u=Math.atan2(r-e,n-t);a&&c<u?c+=Math.PI*2:!a&&c>u&&(u+=Math.PI*2);let d=c;const f=u-c,p=Math.abs(f),_=Math.sqrt(l*l+h*h),m=(15*p*Math.sqrt(_)/Math.PI>>0)+1,v=f/m;if(d+=v,a){o.push(e,t,i,s);for(let y=1,g=d;y<m;y++,g+=v)o.push(e,t,e+Math.sin(g)*_,t+Math.cos(g)*_);o.push(e,t,r,n)}else{o.push(i,s,e,t);for(let y=1,g=d;y<m;y++,g+=v)o.push(e+Math.sin(g)*_,t+Math.cos(g)*_,e,t);o.push(r,n,e,t)}return m*2}function lp(e,t){const i=e.shape;let s=e.points||i.points.slice();const r=t.closePointEps;if(s.length===0)return;const n=e.lineStyle,o=new W(s[0],s[1]),a=new W(s[s.length-2],s[s.length-1]),l=i.type!==vt.POLY||i.closeStroke,h=Math.abs(o.x-a.x)<r&&Math.abs(o.y-a.y)<r;if(l){s=s.slice(),h&&(s.pop(),s.pop(),a.set(s[s.length-2],s[s.length-1]));const T=(o.x+a.x)*.5,k=(a.y+o.y)*.5;s.unshift(T,k),s.push(T,k)}const c=t.points,u=s.length/2;let d=s.length;const f=c.length/2,p=n.width/2,_=p*p,m=n.miterLimit*n.miterLimit;let v=s[0],y=s[1],g=s[2],x=s[3],E=0,M=0,A=-(y-x),C=v-g,O=0,U=0,P=Math.sqrt(A*A+C*C);A/=P,C/=P,A*=p,C*=p;const F=n.alignment,S=(1-F)*2,b=F*2;l||(n.cap===we.ROUND?d+=ge(v-A*(S-b)*.5,y-C*(S-b)*.5,v-A*S,y-C*S,v+A*b,y+C*b,c,!0)+2:n.cap===we.SQUARE&&(d+=xo(v,y,A,C,S,b,!0,c))),c.push(v-A*S,y-C*S,v+A*b,y+C*b);for(let T=1;T<u-1;++T){v=s[(T-1)*2],y=s[(T-1)*2+1],g=s[T*2],x=s[T*2+1],E=s[(T+1)*2],M=s[(T+1)*2+1],A=-(y-x),C=v-g,P=Math.sqrt(A*A+C*C),A/=P,C/=P,A*=p,C*=p,O=-(x-M),U=g-E,P=Math.sqrt(O*O+U*U),O/=P,U/=P,O*=p,U*=p;const k=g-v,V=y-x,w=g-E,z=M-x,Q=k*w+V*z,J=V*w-z*k,tt=J<0;if(Math.abs(J)<.001*Math.abs(Q)){c.push(g-A*S,x-C*S,g+A*b,x+C*b),Q>=0&&(n.join===Bt.ROUND?d+=ge(g,x,g-A*S,x-C*S,g-O*S,x-U*S,c,!1)+4:d+=2,c.push(g-O*b,x-U*b,g+O*S,x+U*S));continue}const dt=(-A+v)*(-C+x)-(-A+g)*(-C+y),lt=(-O+E)*(-U+x)-(-O+g)*(-U+M),ft=(k*lt-w*dt)/J,xt=(z*dt-V*lt)/J,wt=(ft-g)*(ft-g)+(xt-x)*(xt-x),gt=g+(ft-g)*S,et=x+(xt-x)*S,ht=g-(ft-g)*b,ct=x-(xt-x)*b,Ht=Math.min(k*k+V*V,w*w+z*z),$t=tt?S:b,ei=Ht+$t*$t*_,ml=wt<=ei;let Si=n.join;if(Si===Bt.MITER&&wt/_>m&&(Si=Bt.BEVEL),ml)switch(Si){case Bt.MITER:{c.push(gt,et,ht,ct);break}case Bt.BEVEL:{tt?c.push(gt,et,g+A*b,x+C*b,gt,et,g+O*b,x+U*b):c.push(g-A*S,x-C*S,ht,ct,g-O*S,x-U*S,ht,ct),d+=2;break}case Bt.ROUND:{tt?(c.push(gt,et,g+A*b,x+C*b),d+=ge(g,x,g+A*b,x+C*b,g+O*b,x+U*b,c,!0)+4,c.push(gt,et,g+O*b,x+U*b)):(c.push(g-A*S,x-C*S,ht,ct),d+=ge(g,x,g-A*S,x-C*S,g-O*S,x-U*S,c,!1)+4,c.push(g-O*S,x-U*S,ht,ct));break}}else{switch(c.push(g-A*S,x-C*S,g+A*b,x+C*b),Si){case Bt.MITER:{tt?c.push(ht,ct,ht,ct):c.push(gt,et,gt,et),d+=2;break}case Bt.ROUND:{tt?d+=ge(g,x,g+A*b,x+C*b,g+O*b,x+U*b,c,!0)+2:d+=ge(g,x,g-A*S,x-C*S,g-O*S,x-U*S,c,!1)+2;break}}c.push(g-O*S,x-U*S,g+O*b,x+U*b),d+=2}}v=s[(u-2)*2],y=s[(u-2)*2+1],g=s[(u-1)*2],x=s[(u-1)*2+1],A=-(y-x),C=v-g,P=Math.sqrt(A*A+C*C),A/=P,C/=P,A*=p,C*=p,c.push(g-A*S,x-C*S,g+A*b,x+C*b),l||(n.cap===we.ROUND?d+=ge(g-A*(S-b)*.5,x-C*(S-b)*.5,g-A*S,x-C*S,g+A*b,x+C*b,c,!1)+2:n.cap===we.SQUARE&&(d+=xo(g,x,A,C,S,b,!1,c)));const $=t.indices,q=Qe.epsilon*Qe.epsilon;for(let T=f;T<d+f-2;++T)v=c[T*2],y=c[T*2+1],g=c[(T+1)*2],x=c[(T+1)*2+1],E=c[(T+2)*2],M=c[(T+2)*2+1],!(Math.abs(v*(x-M)+g*(M-y)+E*(y-x))<q)&&$.push(T,T+1,T+2)}function hp(e,t){let i=0;const s=e.shape,r=e.points||s.points,n=s.type!==vt.POLY||s.closeStroke;if(r.length===0)return;const o=t.points,a=t.indices,l=r.length/2,h=o.length/2;let c=h;for(o.push(r[0],r[1]),i=1;i<l;i++)o.push(r[i*2],r[i*2+1]),a.push(c,c+1),c++;n&&a.push(c,h)}function yo(e,t){e.lineStyle.native?hp(e,t):lp(e,t)}class rn{static curveLength(t,i,s,r,n,o){const a=t-2*s+n,l=i-2*r+o,h=2*s-2*t,c=2*r-2*i,u=4*(a*a+l*l),d=4*(a*h+l*c),f=h*h+c*c,p=2*Math.sqrt(u+d+f),_=Math.sqrt(u),m=2*u*_,v=2*Math.sqrt(f),y=d/_;return(m*p+_*d*(p-v)+(4*f*u-d*d)*Math.log((2*_+y+p)/(y+v)))/(4*m)}static curveTo(t,i,s,r,n){const o=n[n.length-2],a=n[n.length-1],l=Qe._segmentsCount(rn.curveLength(o,a,t,i,s,r));let h=0,c=0;for(let u=1;u<=l;++u){const d=u/l;h=o+(t-o)*d,c=a+(i-a)*d,n.push(h+(t+(s-t)*d-h)*d,c+(i+(r-i)*d-c)*d)}}}const er={[vt.POLY]:Ja,[vt.CIRC]:ds,[vt.ELIP]:ds,[vt.RECT]:np,[vt.RREC]:op},bo=[],ji=[];class fs{constructor(t,i=null,s=null,r=null){this.points=[],this.holes=[],this.shape=t,this.lineStyle=s,this.fillStyle=i,this.matrix=r,this.type=t.type}clone(){return new fs(this.shape,this.fillStyle,this.lineStyle,this.matrix)}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}const Le=new W,tl=class extends Ho{constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new ls,this.boundsDirty=-1}get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let e=0;e<this.drawCalls.length;e++)this.drawCalls[e].texArray.clear(),ji.push(this.drawCalls[e]);this.drawCalls.length=0;for(let e=0;e<this.batches.length;e++){const t=this.batches[e];t.reset(),bo.push(t)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(e,t=null,i=null,s=null){const r=new fs(e,t,i,s);return this.graphicsData.push(r),this.dirty++,this}drawHole(e,t=null){if(!this.graphicsData.length)return null;const i=new fs(e,null,null,t),s=this.graphicsData[this.graphicsData.length-1];return i.lineStyle=s.lineStyle,s.holes.push(i),this.dirty++,this}destroy(){super.destroy();for(let e=0;e<this.graphicsData.length;++e)this.graphicsData[e].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(e){const t=this.graphicsData;for(let i=0;i<t.length;++i){const s=t[i];if(s.fillStyle.visible&&s.shape&&(s.matrix?s.matrix.applyInverse(e,Le):Le.copyFrom(e),s.shape.contains(Le.x,Le.y))){let r=!1;if(s.holes){for(let n=0;n<s.holes.length;n++)if(s.holes[n].shape.contains(Le.x,Le.y)){r=!0;break}}if(!r)return!0}}return!1}updateBatches(){if(!this.graphicsData.length){this.batchable=!0;return}if(!this.validateBatching())return;this.cacheDirty=this.dirty;const e=this.uvs,t=this.graphicsData;let i=null,s=null;this.batches.length>0&&(i=this.batches[this.batches.length-1],s=i.style);for(let a=this.shapeIndex;a<t.length;a++){this.shapeIndex++;const l=t[a],h=l.fillStyle,c=l.lineStyle;er[l.type].build(l),l.matrix&&this.transformPoints(l.points,l.matrix),(h.visible||c.visible)&&this.processHoles(l.holes);for(let d=0;d<2;d++){const f=d===0?h:c;if(!f.visible)continue;const p=f.texture.baseTexture,_=this.indices.length,m=this.points.length/2;p.wrapMode=ce.REPEAT,d===0?this.processFill(l):this.processLine(l);const v=this.points.length/2-m;v!==0&&(i&&!this._compareStyles(s,f)&&(i.end(_,m),i=null),i||(i=bo.pop()||new ap,i.begin(f,_,m),this.batches.push(i),s=f),this.addUvs(this.points,e,f.texture,m,v,f.matrix))}}const r=this.indices.length,n=this.points.length/2;if(i&&i.end(r,n),this.batches.length===0){this.batchable=!0;return}const o=n>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&o===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=o?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}_compareStyles(e,t){return!(!e||!t||e.texture.baseTexture!==t.texture.baseTexture||e.color+e.alpha!==t.color+t.alpha||!!e.native!=!!t.native)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let e=0,t=this.graphicsData.length;e<t;e++){const i=this.graphicsData[e],s=i.fillStyle,r=i.lineStyle;if(s&&!s.texture.baseTexture.valid||r&&!r.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);const e=this.batches;for(let t=0,i=e.length;t<i;t++){const s=e[t];for(let r=0;r<s.size;r++){const n=s.start+r;this.indicesUint16[n]=this.indicesUint16[n]-s.attribStart}}}isBatchable(){if(this.points.length>65535*2)return!1;const e=this.batches;for(let t=0;t<e.length;t++)if(e[t].style.native)return!1;return this.points.length<tl.BATCHABLE_SIZE*2}buildDrawCalls(){let e=++X._globalBatch;for(let c=0;c<this.drawCalls.length;c++)this.drawCalls[c].texArray.clear(),ji.push(this.drawCalls[c]);this.drawCalls.length=0;const t=this.colors,i=this.textureIds;let s=ji.pop();s||(s=new br,s.texArray=new wr),s.texArray.count=0,s.start=0,s.size=0,s.type=Yt.TRIANGLES;let r=0,n=null,o=0,a=!1,l=Yt.TRIANGLES,h=0;this.drawCalls.push(s);for(let c=0;c<this.batches.length;c++){const u=this.batches[c],d=8,f=u.style,p=f.texture.baseTexture;a!==!!f.native&&(a=!!f.native,l=a?Yt.LINES:Yt.TRIANGLES,n=null,r=d,e++),n!==p&&(n=p,p._batchEnabled!==e&&(r===d&&(e++,r=0,s.size>0&&(s=ji.pop(),s||(s=new br,s.texArray=new wr),this.drawCalls.push(s)),s.start=h,s.size=0,s.texArray.count=0,s.type=l),p.touched=1,p._batchEnabled=e,p._batchLocation=r,p.wrapMode=ce.REPEAT,s.texArray.elements[s.texArray.count++]=p,r++)),s.size+=u.size,h+=u.size,o=p._batchLocation,this.addColors(t,f.color,f.alpha,u.attribSize,u.attribStart),this.addTextureIds(i,o,u.attribSize,u.attribStart)}X._globalBatch=e,this.packAttributes()}packAttributes(){const e=this.points,t=this.uvs,i=this.colors,s=this.textureIds,r=new ArrayBuffer(e.length*3*4),n=new Float32Array(r),o=new Uint32Array(r);let a=0;for(let l=0;l<e.length/2;l++)n[a++]=e[l*2],n[a++]=e[l*2+1],n[a++]=t[l*2],n[a++]=t[l*2+1],o[a++]=i[l],n[a++]=s[l];this._buffer.update(r),this._indexBuffer.update(this.indicesUint16)}processFill(e){e.holes.length?Ja.triangulate(e,this):er[e.type].triangulate(e,this)}processLine(e){yo(e,this);for(let t=0;t<e.holes.length;t++)yo(e.holes[t],this)}processHoles(e){for(let t=0;t<e.length;t++){const i=e[t];er[i.type].build(i),i.matrix&&this.transformPoints(i.points,i.matrix)}}calculateBounds(){const e=this._bounds;e.clear(),e.addVertexData(this.points,0,this.points.length),e.pad(this.boundsPadding,this.boundsPadding)}transformPoints(e,t){for(let i=0;i<e.length/2;i++){const s=e[i*2],r=e[i*2+1];e[i*2]=t.a*s+t.c*r+t.tx,e[i*2+1]=t.b*s+t.d*r+t.ty}}addColors(e,t,i,s,r=0){const n=Z.shared.setValue(t).toLittleEndianNumber(),o=Z.shared.setValue(n).toPremultiplied(i);e.length=Math.max(e.length,r+s);for(let a=0;a<s;a++)e[r+a]=o}addTextureIds(e,t,i,s=0){e.length=Math.max(e.length,s+i);for(let r=0;r<i;r++)e[s+r]=t}addUvs(e,t,i,s,r,n=null){let o=0;const a=t.length,l=i.frame;for(;o<r;){let c=e[(s+o)*2],u=e[(s+o)*2+1];if(n){const d=n.a*c+n.c*u+n.tx;u=n.b*c+n.d*u+n.ty,c=d}o++,t.push(c/l.width,u/l.height)}const h=i.baseTexture;(l.width<h.width||l.height<h.height)&&this.adjustUvs(t,i,a,r)}adjustUvs(e,t,i,s){const r=t.baseTexture,n=1e-6,o=i+s*2,a=t.frame,l=a.width/r.width,h=a.height/r.height;let c=a.x/a.width,u=a.y/a.height,d=Math.floor(e[i]+n),f=Math.floor(e[i+1]+n);for(let p=i+2;p<o;p+=2)d=Math.min(d,Math.floor(e[p]+n)),f=Math.min(f,Math.floor(e[p+1]+n));c-=d,u-=f;for(let p=i;p<o;p+=2)e[p]=(e[p]+c)*l,e[p+1]=(e[p+1]+u)*h}};let el=tl;el.BATCHABLE_SIZE=100;class Ss{constructor(){this.color=16777215,this.alpha=1,this.texture=B.WHITE,this.matrix=null,this.visible=!1,this.reset()}clone(){const t=new Ss;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t}reset(){this.color=16777215,this.alpha=1,this.texture=B.WHITE,this.matrix=null,this.visible=!1}destroy(){this.texture=null,this.matrix=null}}class nn extends Ss{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=we.BUTT,this.join=Bt.MITER,this.miterLimit=10}clone(){const t=new nn;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t}reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1}}const ir={},Ji=class extends St{constructor(e=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new Ss,this._lineStyle=new nn,this._matrix=null,this._holeMode=!1,this.state=ae.for2d(),this._geometry=e||new el,this._geometry.refCount++,this._transformID=-1,this._tintColor=new Z(16777215),this.blendMode=H.NORMAL}get geometry(){return this._geometry}clone(){return this.finishPoly(),new Ji(this._geometry)}set blendMode(e){this.state.blendMode=e}get blendMode(){return this.state.blendMode}get tint(){return this._tintColor.value}set tint(e){this._tintColor.setValue(e)}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(e=null,t=0,i,s=.5,r=!1){return typeof e=="number"&&(e={width:e,color:t,alpha:i,alignment:s,native:r}),this.lineTextureStyle(e)}lineTextureStyle(e){const t={width:0,texture:B.WHITE,color:e!=null&&e.texture?16777215:0,matrix:null,alignment:.5,native:!1,cap:we.BUTT,join:Bt.MITER,miterLimit:10};e=Object.assign(t,e),this.normalizeColor(e),this.currentPath&&this.startPoly();const i=e.width>0&&e.alpha>0;return i?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._lineStyle,{visible:i},e)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const e=this.currentPath.points,t=this.currentPath.points.length;t>2&&(this.drawShape(this.currentPath),this.currentPath=new We,this.currentPath.closeStroke=!1,this.currentPath.points.push(e[t-2],e[t-1]))}else this.currentPath=new We,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(e,t){return this.startPoly(),this.currentPath.points[0]=e,this.currentPath.points[1]=t,this}lineTo(e,t){this.currentPath||this.moveTo(0,0);const i=this.currentPath.points,s=i[i.length-2],r=i[i.length-1];return(s!==e||r!==t)&&i.push(e,t),this}_initCurve(e=0,t=0){this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[e,t]):this.moveTo(e,t)}quadraticCurveTo(e,t,i,s){this._initCurve();const r=this.currentPath.points;return r.length===0&&this.moveTo(0,0),rn.curveTo(e,t,i,s,r),this}bezierCurveTo(e,t,i,s,r,n){return this._initCurve(),sn.curveTo(e,t,i,s,r,n,this.currentPath.points),this}arcTo(e,t,i,s,r){this._initCurve(e,t);const n=this.currentPath.points,o=vo.curveTo(e,t,i,s,r,n);if(o){const{cx:a,cy:l,radius:h,startAngle:c,endAngle:u,anticlockwise:d}=o;this.arc(a,l,h,c,u,d)}return this}arc(e,t,i,s,r,n=!1){if(s===r)return this;if(!n&&r<=s?r+=os:n&&s<=r&&(s+=os),r-s===0)return this;const a=e+Math.cos(s)*i,l=t+Math.sin(s)*i,h=this._geometry.closePointEps;let c=this.currentPath?this.currentPath.points:null;if(c){const u=Math.abs(c[c.length-2]-a),d=Math.abs(c[c.length-1]-l);u<h&&d<h||c.push(a,l)}else this.moveTo(a,l),c=this.currentPath.points;return vo.arc(a,l,e,t,i,s,r,n,c),this}beginFill(e=0,t){return this.beginTextureFill({texture:B.WHITE,color:e,alpha:t})}normalizeColor(e){const t=Z.shared.setValue(e.color??0);e.color=t.toNumber(),e.alpha??(e.alpha=t.alpha)}beginTextureFill(e){const t={texture:B.WHITE,color:16777215,matrix:null};e=Object.assign(t,e),this.normalizeColor(e),this.currentPath&&this.startPoly();const i=e.alpha>0;return i?(e.matrix&&(e.matrix=e.matrix.clone(),e.matrix.invert()),Object.assign(this._fillStyle,{visible:i},e)):this._fillStyle.reset(),this}endFill(){return this.finishPoly(),this._fillStyle.reset(),this}drawRect(e,t,i,s){return this.drawShape(new K(e,t,i,s))}drawRoundedRect(e,t,i,s,r){return this.drawShape(new Zr(e,t,i,s,r))}drawCircle(e,t,i){return this.drawShape(new qr(e,t,i))}drawEllipse(e,t,i,s){return this.drawShape(new Kr(e,t,i,s))}drawPolygon(...e){let t,i=!0;const s=e[0];s.points?(i=s.closeStroke,t=s.points):Array.isArray(e[0])?t=e[0]:t=e;const r=new We(t);return r.closeStroke=i,this.drawShape(r),this}drawShape(e){return this._holeMode?this._geometry.drawHole(e,this._matrix):this._geometry.drawShape(e,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}isFastRect(){const e=this._geometry.graphicsData;return e.length===1&&e[0].shape.type===vt.RECT&&!e[0].matrix&&!e[0].holes.length&&!(e[0].lineStyle.visible&&e[0].lineStyle.width)}_render(e){this.finishPoly();const t=this._geometry;t.updateBatches(),t.batchable?(this.batchDirty!==t.batchDirty&&this._populateBatches(),this._renderBatched(e)):(e.batch.flush(),this._renderDirect(e))}_populateBatches(){const e=this._geometry,t=this.blendMode,i=e.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=e.batchDirty,this.batches.length=i,this.vertexData=new Float32Array(e.points);for(let s=0;s<i;s++){const r=e.batches[s],n=r.style.color,o=new Float32Array(this.vertexData.buffer,r.attribStart*4*2,r.attribSize*2),a=new Float32Array(e.uvsFloat32.buffer,r.attribStart*4*2,r.attribSize*2),l=new Uint16Array(e.indicesUint16.buffer,r.start*2,r.size),h={vertexData:o,blendMode:t,indices:l,uvs:a,_batchRGB:Z.shared.setValue(n).toRgbArray(),_tintRGB:n,_texture:r.style.texture,alpha:r.style.alpha,worldAlpha:1};this.batches[s]=h}}_renderBatched(e){if(this.batches.length){e.batch.setObjectRenderer(e.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let t=0,i=this.batches.length;t<i;t++){const s=this.batches[t];s.worldAlpha=this.worldAlpha*s.alpha,e.plugins[this.pluginName].render(s)}}}_renderDirect(e){const t=this._resolveDirectShader(e),i=this._geometry,s=this.worldAlpha,r=t.uniforms,n=i.drawCalls;r.translationMatrix=this.transform.worldTransform,Z.shared.setValue(this._tintColor).multiply([s,s,s]).setAlpha(s).toArray(r.tint),e.shader.bind(t),e.geometry.bind(i,t),e.state.set(this.state);for(let o=0,a=n.length;o<a;o++)this._renderDrawCallDirect(e,i.drawCalls[o])}_renderDrawCallDirect(e,t){const{texArray:i,type:s,size:r,start:n}=t,o=i.count;for(let a=0;a<o;a++)e.texture.bind(i.elements[a],a);e.geometry.draw(s,r,n)}_resolveDirectShader(e){let t=this.shader;const i=this.pluginName;if(!t){if(!ir[i]){const{maxTextures:s}=e.plugins[i],r=new Int32Array(s);for(let a=0;a<s;a++)r[a]=a;const n={tint:new Float32Array([1,1,1,1]),translationMatrix:new it,default:Gt.from({uSamplers:r},!0)},o=e.plugins[i]._shader.program;ir[i]=new Zt(o,n)}t=ir[i]}return t}_calculateBounds(){this.finishPoly();const e=this._geometry;if(!e.graphicsData.length)return;const{minX:t,minY:i,maxX:s,maxY:r}=e.bounds;this._bounds.addFrame(this.transform,t,i,s,r)}containsPoint(e){return this.worldTransform.applyInverse(e,Ji._TEMP_POINT),this._geometry.containsPoint(Ji._TEMP_POINT)}calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this._tintColor.toNumber();for(let e=0;e<this.batches.length;e++){const t=this.batches[e];t._tintRGB=Z.shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber()}}}calculateVertices(){const e=this.transform._worldID;if(this._transformID===e)return;this._transformID=e;const t=this.transform.worldTransform,i=t.a,s=t.b,r=t.c,n=t.d,o=t.tx,a=t.ty,l=this._geometry.points,h=this.vertexData;let c=0;for(let u=0;u<l.length;u+=2){const d=l[u],f=l[u+1];h[c++]=i*d+r*f+o,h[c++]=n*f+s*d+a}}closePath(){const e=this.currentPath;return e&&(e.closeStroke=!0,this.finishPoly()),this}setMatrix(e){return this._matrix=e,this}beginHole(){return this.finishPoly(),this._holeMode=!0,this}endHole(){return this.finishPoly(),this._holeMode=!1,this}destroy(e){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(e)}};let As=Ji;As.curves=Qe;As._TEMP_POINT=new W;class cp{constructor(t,i){this.uvBuffer=t,this.uvMatrix=i,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}update(t){if(!t&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)return;this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;const i=this.uvBuffer.data;(!this.data||this.data.length!==i.length)&&(this.data=new Float32Array(i.length)),this.uvMatrix.multiplyUvs(i,this.data),this._updateID++}}const sr=new W,To=new We,il=class extends St{constructor(e,t,i,s=Yt.TRIANGLES){super(),this.geometry=e,this.shader=t,this.state=i||ae.for2d(),this.drawMode=s,this.start=0,this.size=0,this.uvs=null,this.indices=null,this.vertexData=new Float32Array(1),this.vertexDirty=-1,this._transformID=-1,this._roundPixels=R.ROUND_PIXELS,this.batchUvs=null}get geometry(){return this._geometry}set geometry(e){this._geometry!==e&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=e,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)}get uvBuffer(){return this.geometry.buffers[1]}get verticesBuffer(){return this.geometry.buffers[0]}set material(e){this.shader=e}get material(){return this.shader}set blendMode(e){this.state.blendMode=e}get blendMode(){return this.state.blendMode}set roundPixels(e){this._roundPixels!==e&&(this._transformID=-1),this._roundPixels=e}get roundPixels(){return this._roundPixels}get tint(){return"tint"in this.shader?this.shader.tint:null}set tint(e){this.shader.tint=e}get tintValue(){return this.shader.tintValue}get texture(){return"texture"in this.shader?this.shader.texture:null}set texture(e){this.shader.texture=e}_render(e){const t=this.geometry.buffers[0].data;this.shader.batchable&&this.drawMode===Yt.TRIANGLES&&t.length<il.BATCHABLE_SIZE*2?this._renderToBatch(e):this._renderDefault(e)}_renderDefault(e){const t=this.shader;t.alpha=this.worldAlpha,t.update&&t.update(),e.batch.flush(),t.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),e.shader.bind(t),e.state.set(this.state),e.geometry.bind(this.geometry,t),e.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)}_renderToBatch(e){const t=this.geometry,i=this.shader;i.uvMatrix&&(i.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=t.indexBuffer.data,this._tintRGB=i._tintRGB,this._texture=i.texture;const s=this.material.pluginName;e.batch.setObjectRenderer(e.plugins[s]),e.plugins[s].render(this)}calculateVertices(){const t=this.geometry.buffers[0],i=t.data,s=t._updateID;if(s===this.vertexDirty&&this._transformID===this.transform._worldID)return;this._transformID=this.transform._worldID,this.vertexData.length!==i.length&&(this.vertexData=new Float32Array(i.length));const r=this.transform.worldTransform,n=r.a,o=r.b,a=r.c,l=r.d,h=r.tx,c=r.ty,u=this.vertexData;for(let d=0;d<u.length/2;d++){const f=i[d*2],p=i[d*2+1];u[d*2]=n*f+a*p+h,u[d*2+1]=o*f+l*p+c}if(this._roundPixels){const d=R.RESOLUTION;for(let f=0;f<u.length;++f)u[f]=Math.round(u[f]*d)/d}this.vertexDirty=s}calculateUvs(){const e=this.geometry.buffers[1],t=this.shader;t.uvMatrix.isSimple?this.uvs=e.data:(this.batchUvs||(this.batchUvs=new cp(e,t.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)}_calculateBounds(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)}containsPoint(e){if(!this.getBounds().contains(e.x,e.y))return!1;this.worldTransform.applyInverse(e,sr);const t=this.geometry.getBuffer("aVertexPosition").data,i=To.points,s=this.geometry.getIndex().data,r=s.length,n=this.drawMode===4?3:1;for(let o=0;o+2<r;o+=n){const a=s[o]*2,l=s[o+1]*2,h=s[o+2]*2;if(i[0]=t[a],i[1]=t[a+1],i[2]=t[l],i[3]=t[l+1],i[4]=t[h],i[5]=t[h+1],To.contains(sr.x,sr.y))return!0}return!1}destroy(e){super.destroy(e),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null}};let Ur=il;Ur.BATCHABLE_SIZE=100;class up extends de{constructor(t,i,s){super();const r=new at(t),n=new at(i,!0),o=new at(s,!0,!0);this.addAttribute("aVertexPosition",r,2,!1,G.FLOAT).addAttribute("aTextureCoord",n,2,!1,G.FLOAT).addIndex(o),this._updateId=-1}get vertexDirtyId(){return this.buffers[0]._updateID}}var dp=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,fp=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;class wo extends Zt{constructor(t,i){const s={uSampler:t,alpha:1,uTextureMatrix:it.IDENTITY,uColor:new Float32Array([1,1,1,1])};i=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},i),i.uniforms&&Object.assign(s,i.uniforms),super(i.program||kt.from(fp,dp),s),this._colorDirty=!1,this.uvMatrix=new ra(t),this.batchable=i.program===void 0,this.pluginName=i.pluginName,this._tintColor=new Z(i.tint),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0,this.alpha=i.alpha}get texture(){return this.uniforms.uSampler}set texture(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)}set alpha(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)}get alpha(){return this._alpha}set tint(t){t!==this.tint&&(this._tintColor.setValue(t),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0)}get tint(){return this._tintColor.value}get tintValue(){return this._tintColor.toNumber()}update(){if(this._colorDirty){this._colorDirty=!1;const i=this.texture.baseTexture.alphaMode;Z.shared.setValue(this._tintColor).premultiply(this._alpha,i).toArray(this.uniforms.uColor)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)}}class Eo{constructor(t,i,s){this.geometry=new de,this.indexBuffer=null,this.size=s,this.dynamicProperties=[],this.staticProperties=[];for(let r=0;r<t.length;++r){let n=t[r];n={attributeName:n.attributeName,size:n.size,uploadFunction:n.uploadFunction,type:n.type||G.FLOAT,offset:n.offset},i[r]?this.dynamicProperties.push(n):this.staticProperties.push(n)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}initBuffers(){const t=this.geometry;let i=0;this.indexBuffer=new at(_h(this.size),!0,!0),t.addIndex(this.indexBuffer),this.dynamicStride=0;for(let o=0;o<this.dynamicProperties.length;++o){const a=this.dynamicProperties[o];a.offset=i,i+=a.size,this.dynamicStride+=a.size}const s=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(s),this.dynamicDataUint32=new Uint32Array(s),this.dynamicBuffer=new at(this.dynamicData,!1,!1);let r=0;this.staticStride=0;for(let o=0;o<this.staticProperties.length;++o){const a=this.staticProperties[o];a.offset=r,r+=a.size,this.staticStride+=a.size}const n=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(n),this.staticDataUint32=new Uint32Array(n),this.staticBuffer=new at(this.staticData,!0,!1);for(let o=0;o<this.dynamicProperties.length;++o){const a=this.dynamicProperties[o];t.addAttribute(a.attributeName,this.dynamicBuffer,0,a.type===G.UNSIGNED_BYTE,a.type,this.dynamicStride*4,a.offset*4)}for(let o=0;o<this.staticProperties.length;++o){const a=this.staticProperties[o];t.addAttribute(a.attributeName,this.staticBuffer,0,a.type===G.UNSIGNED_BYTE,a.type,this.staticStride*4,a.offset*4)}}uploadDynamic(t,i,s){for(let r=0;r<this.dynamicProperties.length;r++){const n=this.dynamicProperties[r];n.uploadFunction(t,i,s,n.type===G.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,n.offset)}this.dynamicBuffer._updateID++}uploadStatic(t,i,s){for(let r=0;r<this.staticProperties.length;r++){const n=this.staticProperties[r];n.uploadFunction(t,i,s,n.type===G.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,n.offset)}this.staticBuffer._updateID++}destroy(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()}}var pp=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,mp=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;class sl extends xs{constructor(t){super(t),this.shader=null,this.properties=null,this.tempMatrix=new it,this.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:this.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:this.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:this.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:this.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:G.UNSIGNED_BYTE,uploadFunction:this.uploadTint,offset:0}],this.shader=Zt.from(mp,pp,{}),this.state=ae.for2d()}render(t){const i=t.children,s=t._maxSize,r=t._batchSize,n=this.renderer;let o=i.length;if(o===0)return;o>s&&!t.autoResize&&(o=s);let a=t._buffers;a||(a=t._buffers=this.generateBuffers(t));const l=i[0]._texture.baseTexture,h=l.alphaMode>0;this.state.blendMode=No(t.blendMode,h),n.state.set(this.state);const c=n.gl,u=t.worldTransform.copyTo(this.tempMatrix);u.prepend(n.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=u.toArray(!0),this.shader.uniforms.uColor=Z.shared.setValue(t.tintRgb).premultiply(t.worldAlpha,h).toArray(this.shader.uniforms.uColor),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);let d=!1;for(let f=0,p=0;f<o;f+=r,p+=1){let _=o-f;_>r&&(_=r),p>=a.length&&a.push(this._generateOneMoreBuffer(t));const m=a[p];m.uploadDynamic(i,f,_);const v=t._bufferUpdateIDs[p]||0;d=d||m._updateID<v,d&&(m._updateID=t._updateID,m.uploadStatic(i,f,_)),n.geometry.bind(m.geometry),c.drawElements(c.TRIANGLES,_*6,c.UNSIGNED_SHORT,0)}}generateBuffers(t){const i=[],s=t._maxSize,r=t._batchSize,n=t._properties;for(let o=0;o<s;o+=r)i.push(new Eo(this.properties,n,r));return i}_generateOneMoreBuffer(t){const i=t._batchSize,s=t._properties;return new Eo(this.properties,s,i)}uploadVertices(t,i,s,r,n,o){let a=0,l=0,h=0,c=0;for(let u=0;u<s;++u){const d=t[i+u],f=d._texture,p=d.scale.x,_=d.scale.y,m=f.trim,v=f.orig;m?(l=m.x-d.anchor.x*v.width,a=l+m.width,c=m.y-d.anchor.y*v.height,h=c+m.height):(a=v.width*(1-d.anchor.x),l=v.width*-d.anchor.x,h=v.height*(1-d.anchor.y),c=v.height*-d.anchor.y),r[o]=l*p,r[o+1]=c*_,r[o+n]=a*p,r[o+n+1]=c*_,r[o+n*2]=a*p,r[o+n*2+1]=h*_,r[o+n*3]=l*p,r[o+n*3+1]=h*_,o+=n*4}}uploadPosition(t,i,s,r,n,o){for(let a=0;a<s;a++){const l=t[i+a].position;r[o]=l.x,r[o+1]=l.y,r[o+n]=l.x,r[o+n+1]=l.y,r[o+n*2]=l.x,r[o+n*2+1]=l.y,r[o+n*3]=l.x,r[o+n*3+1]=l.y,o+=n*4}}uploadRotation(t,i,s,r,n,o){for(let a=0;a<s;a++){const l=t[i+a].rotation;r[o]=l,r[o+n]=l,r[o+n*2]=l,r[o+n*3]=l,o+=n*4}}uploadUvs(t,i,s,r,n,o){for(let a=0;a<s;++a){const l=t[i+a]._texture._uvs;l?(r[o]=l.x0,r[o+1]=l.y0,r[o+n]=l.x1,r[o+n+1]=l.y1,r[o+n*2]=l.x2,r[o+n*2+1]=l.y2,r[o+n*3]=l.x3,r[o+n*3+1]=l.y3,o+=n*4):(r[o]=0,r[o+1]=0,r[o+n]=0,r[o+n+1]=0,r[o+n*2]=0,r[o+n*2+1]=0,r[o+n*3]=0,r[o+n*3+1]=0,o+=n*4)}}uploadTint(t,i,s,r,n,o){for(let a=0;a<s;++a){const l=t[i+a],h=Z.shared.setValue(l._tintRGB).toPremultiplied(l.alpha);r[o]=h,r[o+n]=h,r[o+n*2]=h,r[o+n*3]=h,o+=n*4}}destroy(){super.destroy(),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null}}sl.extension={name:"particle",type:D.RendererPlugin};N.add(sl);var Is=(e=>(e[e.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",e[e.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL",e))(Is||{});const Wi={willReadFrequently:!0},L=class{static get experimentalLetterSpacingSupported(){let e=L._experimentalLetterSpacingSupported;if(e!==void 0){const t=R.ADAPTER.getCanvasRenderingContext2D().prototype;e=L._experimentalLetterSpacingSupported="letterSpacing"in t||"textLetterSpacing"in t}return e}constructor(e,t,i,s,r,n,o,a,l){this.text=e,this.style=t,this.width=i,this.height=s,this.lines=r,this.lineWidths=n,this.lineHeight=o,this.maxLineWidth=a,this.fontProperties=l}static measureText(e,t,i,s=L._canvas){i=i??t.wordWrap;const r=t.toFontString(),n=L.measureFont(r);n.fontSize===0&&(n.fontSize=t.fontSize,n.ascent=t.fontSize);const o=s.getContext("2d",Wi);o.font=r;const l=(i?L.wordWrap(e,t,s):e).split(/(?:\r\n|\r|\n)/),h=new Array(l.length);let c=0;for(let p=0;p<l.length;p++){const _=L._measureText(l[p],t.letterSpacing,o);h[p]=_,c=Math.max(c,_)}let u=c+t.strokeThickness;t.dropShadow&&(u+=t.dropShadowDistance);const d=t.lineHeight||n.fontSize+t.strokeThickness;let f=Math.max(d,n.fontSize+t.strokeThickness*2)+(l.length-1)*(d+t.leading);return t.dropShadow&&(f+=t.dropShadowDistance),new L(e,t,u,f,l,h,d+t.leading,c,n)}static _measureText(e,t,i){let s=!1;L.experimentalLetterSpacingSupported&&(L.experimentalLetterSpacing?(i.letterSpacing=`${t}px`,i.textLetterSpacing=`${t}px`,s=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));let r=i.measureText(e).width;return r>0&&(s?r-=t:r+=(L.graphemeSegmenter(e).length-1)*t),r}static wordWrap(e,t,i=L._canvas){const s=i.getContext("2d",Wi);let r=0,n="",o="";const a=Object.create(null),{letterSpacing:l,whiteSpace:h}=t,c=L.collapseSpaces(h),u=L.collapseNewlines(h);let d=!c;const f=t.wordWrapWidth+l,p=L.tokenize(e);for(let _=0;_<p.length;_++){let m=p[_];if(L.isNewline(m)){if(!u){o+=L.addLine(n),d=!c,n="",r=0;continue}m=" "}if(c){const y=L.isBreakingSpace(m),g=L.isBreakingSpace(n[n.length-1]);if(y&&g)continue}const v=L.getFromCache(m,l,a,s);if(v>f)if(n!==""&&(o+=L.addLine(n),n="",r=0),L.canBreakWords(m,t.breakWords)){const y=L.wordWrapSplit(m);for(let g=0;g<y.length;g++){let x=y[g],E=x,M=1;for(;y[g+M];){const C=y[g+M];if(!L.canBreakChars(E,C,m,g,t.breakWords))x+=C;else break;E=C,M++}g+=M-1;const A=L.getFromCache(x,l,a,s);A+r>f&&(o+=L.addLine(n),d=!1,n="",r=0),n+=x,r+=A}}else{n.length>0&&(o+=L.addLine(n),n="",r=0);const y=_===p.length-1;o+=L.addLine(m,!y),d=!1,n="",r=0}else v+r>f&&(d=!1,o+=L.addLine(n),n="",r=0),(n.length>0||!L.isBreakingSpace(m)||d)&&(n+=m,r+=v)}return o+=L.addLine(n,!1),o}static addLine(e,t=!0){return e=L.trimRight(e),e=t?`${e}
`:e,e}static getFromCache(e,t,i,s){let r=i[e];return typeof r!="number"&&(r=L._measureText(e,t,s)+t,i[e]=r),r}static collapseSpaces(e){return e==="normal"||e==="pre-line"}static collapseNewlines(e){return e==="normal"}static trimRight(e){if(typeof e!="string")return"";for(let t=e.length-1;t>=0;t--){const i=e[t];if(!L.isBreakingSpace(i))break;e=e.slice(0,-1)}return e}static isNewline(e){return typeof e!="string"?!1:L._newlines.includes(e.charCodeAt(0))}static isBreakingSpace(e,t){return typeof e!="string"?!1:L._breakingSpaces.includes(e.charCodeAt(0))}static tokenize(e){const t=[];let i="";if(typeof e!="string")return t;for(let s=0;s<e.length;s++){const r=e[s],n=e[s+1];if(L.isBreakingSpace(r,n)||L.isNewline(r)){i!==""&&(t.push(i),i=""),t.push(r);continue}i+=r}return i!==""&&t.push(i),t}static canBreakWords(e,t){return t}static canBreakChars(e,t,i,s,r){return!0}static wordWrapSplit(e){return L.graphemeSegmenter(e)}static measureFont(e){if(L._fonts[e])return L._fonts[e];const t={ascent:0,descent:0,fontSize:0},i=L._canvas,s=L._context;s.font=e;const r=L.METRICS_STRING+L.BASELINE_SYMBOL,n=Math.ceil(s.measureText(r).width);let o=Math.ceil(s.measureText(L.BASELINE_SYMBOL).width);const a=Math.ceil(L.HEIGHT_MULTIPLIER*o);if(o=o*L.BASELINE_MULTIPLIER|0,n===0||a===0)return L._fonts[e]=t,t;i.width=n,i.height=a,s.fillStyle="#f00",s.fillRect(0,0,n,a),s.font=e,s.textBaseline="alphabetic",s.fillStyle="#000",s.fillText(r,0,o);const l=s.getImageData(0,0,n,a).data,h=l.length,c=n*4;let u=0,d=0,f=!1;for(u=0;u<o;++u){for(let p=0;p<c;p+=4)if(l[d+p]!==255){f=!0;break}if(!f)d+=c;else break}for(t.ascent=o-u,d=h-c,f=!1,u=a;u>o;--u){for(let p=0;p<c;p+=4)if(l[d+p]!==255){f=!0;break}if(!f)d-=c;else break}return t.descent=u-o,t.fontSize=t.ascent+t.descent,L._fonts[e]=t,t}static clearMetrics(e=""){e?delete L._fonts[e]:L._fonts={}}static get _canvas(){if(!L.__canvas){let e;try{const t=new OffscreenCanvas(0,0),i=t.getContext("2d",Wi);if(i!=null&&i.measureText)return L.__canvas=t,t;e=R.ADAPTER.createCanvas()}catch{e=R.ADAPTER.createCanvas()}e.width=e.height=10,L.__canvas=e}return L.__canvas}static get _context(){return L.__context||(L.__context=L._canvas.getContext("2d",Wi)),L.__context}};let _t=L;_t.METRICS_STRING="|ÉqÅ";_t.BASELINE_SYMBOL="M";_t.BASELINE_MULTIPLIER=1.4;_t.HEIGHT_MULTIPLIER=2;_t.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const e=new Intl.Segmenter;return t=>[...e.segment(t)].map(i=>i.segment)}return e=>[...e]})();_t.experimentalLetterSpacing=!1;_t._fonts={};_t._newlines=[10,13];_t._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];const gp=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],ci=class{constructor(e){this.styleID=0,this.reset(),nr(this,e,e)}clone(){const e={};return nr(e,this,ci.defaultStyle),new ci(e)}reset(){nr(this,ci.defaultStyle,ci.defaultStyle)}get align(){return this._align}set align(e){this._align!==e&&(this._align=e,this.styleID++)}get breakWords(){return this._breakWords}set breakWords(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)}get dropShadow(){return this._dropShadow}set dropShadow(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)}get dropShadowAlpha(){return this._dropShadowAlpha}set dropShadowAlpha(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)}get dropShadowAngle(){return this._dropShadowAngle}set dropShadowAngle(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)}get dropShadowBlur(){return this._dropShadowBlur}set dropShadowBlur(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)}get dropShadowColor(){return this._dropShadowColor}set dropShadowColor(e){const t=rr(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)}get dropShadowDistance(){return this._dropShadowDistance}set dropShadowDistance(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)}get fill(){return this._fill}set fill(e){const t=rr(e);this._fill!==t&&(this._fill=t,this.styleID++)}get fillGradientType(){return this._fillGradientType}set fillGradientType(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)}get fillGradientStops(){return this._fillGradientStops}set fillGradientStops(e){_p(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)}get fontFamily(){return this._fontFamily}set fontFamily(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)}get fontSize(){return this._fontSize}set fontSize(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)}get fontStyle(){return this._fontStyle}set fontStyle(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)}get fontVariant(){return this._fontVariant}set fontVariant(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)}get fontWeight(){return this._fontWeight}set fontWeight(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)}get lineHeight(){return this._lineHeight}set lineHeight(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)}get leading(){return this._leading}set leading(e){this._leading!==e&&(this._leading=e,this.styleID++)}get lineJoin(){return this._lineJoin}set lineJoin(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)}get miterLimit(){return this._miterLimit}set miterLimit(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)}get padding(){return this._padding}set padding(e){this._padding!==e&&(this._padding=e,this.styleID++)}get stroke(){return this._stroke}set stroke(e){const t=rr(e);this._stroke!==t&&(this._stroke=t,this.styleID++)}get strokeThickness(){return this._strokeThickness}set strokeThickness(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)}get textBaseline(){return this._textBaseline}set textBaseline(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)}get trim(){return this._trim}set trim(e){this._trim!==e&&(this._trim=e,this.styleID++)}get whiteSpace(){return this._whiteSpace}set whiteSpace(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)}get wordWrap(){return this._wordWrap}set wordWrap(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)}toFontString(){const e=typeof this.fontSize=="number"?`${this.fontSize}px`:this.fontSize;let t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(let i=t.length-1;i>=0;i--){let s=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(s)&&!gp.includes(s)&&(s=`"${s}"`),t[i]=s}return`${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`}};let oe=ci;oe.defaultStyle={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:Is.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};function rr(e){const t=Z.shared;return Array.isArray(e)?e.map(i=>t.setValue(i).toHex()):t.setValue(e).toHex()}function _p(e,t){if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i])return!1;return!0}function nr(e,t,i){for(const s in i)Array.isArray(t[s])?e[s]=t[s].slice():e[s]=t[s]}const vp={texture:!0,children:!1,baseTexture:!0},Gr=class extends Me{constructor(e,t,i){let s=!1;i||(i=R.ADAPTER.createCanvas(),s=!0),i.width=3,i.height=3;const r=B.from(i);r.orig=new K,r.trim=new K,super(r),this._ownCanvas=s,this.canvas=i,this.context=i.getContext("2d",{willReadFrequently:!0}),this._resolution=Gr.defaultResolution??R.RESOLUTION,this._autoResolution=Gr.defaultAutoResolution,this._text=null,this._style=null,this._styleListener=null,this._font="",this.text=e,this.style=t,this.localStyleID=-1}static get experimentalLetterSpacing(){return _t.experimentalLetterSpacing}static set experimentalLetterSpacing(e){Y("7.1.0","Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),_t.experimentalLetterSpacing=e}updateText(e){const t=this._style;if(this.localStyleID!==t.styleID&&(this.dirty=!0,this.localStyleID=t.styleID),!this.dirty&&e)return;this._font=this._style.toFontString();const i=this.context,s=_t.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),r=s.width,n=s.height,o=s.lines,a=s.lineHeight,l=s.lineWidths,h=s.maxLineWidth,c=s.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,r)+t.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,n)+t.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=t.strokeThickness,i.textBaseline=t.textBaseline,i.lineJoin=t.lineJoin,i.miterLimit=t.miterLimit;let u,d;const f=t.dropShadow?2:1;for(let p=0;p<f;++p){const _=t.dropShadow&&p===0,m=_?Math.ceil(Math.max(1,n)+t.padding*2):0,v=m*this._resolution;if(_){i.fillStyle="black",i.strokeStyle="black";const g=t.dropShadowColor,x=t.dropShadowBlur*this._resolution,E=t.dropShadowDistance*this._resolution;i.shadowColor=Z.shared.setValue(g).setAlpha(t.dropShadowAlpha).toRgbaString(),i.shadowBlur=x,i.shadowOffsetX=Math.cos(t.dropShadowAngle)*E,i.shadowOffsetY=Math.sin(t.dropShadowAngle)*E+v}else i.fillStyle=this._generateFillStyle(t,o,s),i.strokeStyle=t.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;let y=(a-c.fontSize)/2;a-c.fontSize<0&&(y=0);for(let g=0;g<o.length;g++)u=t.strokeThickness/2,d=t.strokeThickness/2+g*a+c.ascent+y,t.align==="right"?u+=h-l[g]:t.align==="center"&&(u+=(h-l[g])/2),t.stroke&&t.strokeThickness&&this.drawLetterSpacing(o[g],u+t.padding,d+t.padding-m,!0),t.fill&&this.drawLetterSpacing(o[g],u+t.padding,d+t.padding-m)}this.updateTexture()}drawLetterSpacing(e,t,i,s=!1){const n=this._style.letterSpacing;let o=!1;if(_t.experimentalLetterSpacingSupported&&(_t.experimentalLetterSpacing?(this.context.letterSpacing=`${n}px`,this.context.textLetterSpacing=`${n}px`,o=!0):(this.context.letterSpacing="0px",this.context.textLetterSpacing="0px")),n===0||o){s?this.context.strokeText(e,t,i):this.context.fillText(e,t,i);return}let a=t;const l=_t.graphemeSegmenter(e);let h=this.context.measureText(e).width,c=0;for(let u=0;u<l.length;++u){const d=l[u];s?this.context.strokeText(d,a,i):this.context.fillText(d,a,i);let f="";for(let p=u+1;p<l.length;++p)f+=l[p];c=this.context.measureText(f).width,a+=h-c+n,h=c}}updateTexture(){const e=this.canvas;if(this._style.trim){const n=yh(e);n.data&&(e.width=n.width,e.height=n.height,this.context.putImageData(n.data,0,0))}const t=this._texture,i=this._style,s=i.trim?0:i.padding,r=t.baseTexture;t.trim.width=t._frame.width=e.width/this._resolution,t.trim.height=t._frame.height=e.height/this._resolution,t.trim.x=-s,t.trim.y=-s,t.orig.width=t._frame.width-s*2,t.orig.height=t._frame.height-s*2,this._onTextureUpdate(),r.setRealSize(e.width,e.height,this._resolution),t.updateUvs(),this.dirty=!1}_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._render(e)}updateTransform(){this.updateText(!0),super.updateTransform()}getBounds(e,t){return this.updateText(!0),this._textureID===-1&&(e=!1),super.getBounds(e,t)}getLocalBounds(e){return this.updateText(!0),super.getLocalBounds.call(this,e)}_calculateBounds(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_generateFillStyle(e,t,i){const s=e.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;let r;const n=e.dropShadow?e.dropShadowDistance:0,o=e.padding||0,a=this.canvas.width/this._resolution-n-o*2,l=this.canvas.height/this._resolution-n-o*2,h=s.slice(),c=e.fillGradientStops.slice();if(!c.length){const u=h.length+1;for(let d=1;d<u;++d)c.push(d/u)}if(h.unshift(s[0]),c.unshift(0),h.push(s[s.length-1]),c.push(1),e.fillGradientType===Is.LINEAR_VERTICAL){r=this.context.createLinearGradient(a/2,o,a/2,l+o);const u=i.fontProperties.fontSize+e.strokeThickness;for(let d=0;d<t.length;d++){const f=i.lineHeight*(d-1)+u,p=i.lineHeight*d;let _=p;d>0&&f>p&&(_=(p+f)/2);const m=p+u,v=i.lineHeight*(d+1);let y=m;d+1<t.length&&v<m&&(y=(m+v)/2);const g=(y-_)/l;for(let x=0;x<h.length;x++){let E=0;typeof c[x]=="number"?E=c[x]:E=x/h.length;let M=Math.min(1,Math.max(0,_/l+E*g));M=Number(M.toFixed(5)),r.addColorStop(M,h[x])}}}else{r=this.context.createLinearGradient(o,l/2,a+o,l/2);const u=h.length+1;let d=1;for(let f=0;f<h.length;f++){let p;typeof c[f]=="number"?p=c[f]:p=d/u,r.addColorStop(p,h[f]),d++}}return r}destroy(e){typeof e=="boolean"&&(e={children:e}),e=Object.assign({},vp,e),super.destroy(e),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width}set width(e){this.updateText(!0);const t=he(this.scale.x)||1;this.scale.x=t*e/this._texture.orig.width,this._width=e}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height}set height(e){this.updateText(!0);const t=he(this.scale.y)||1;this.scale.y=t*e/this._texture.orig.height,this._height=e}get style(){return this._style}set style(e){e=e||{},e instanceof oe?this._style=e:this._style=new oe(e),this.localStyleID=-1,this.dirty=!0}get text(){return this._text}set text(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)}get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}};let on=Gr;on.defaultAutoResolution=!0;class xp{constructor(t){this.maxItemsPerFrame=t,this.itemsLeft=0}beginFrame(){this.itemsLeft=this.maxItemsPerFrame}allowedToUpload(){return this.itemsLeft-- >0}}function yp(e,t){var s;let i=!1;if((s=e==null?void 0:e._textures)!=null&&s.length){for(let r=0;r<e._textures.length;r++)if(e._textures[r]instanceof B){const n=e._textures[r].baseTexture;t.includes(n)||(t.push(n),i=!0)}}return i}function bp(e,t){if(e.baseTexture instanceof X){const i=e.baseTexture;return t.includes(i)||t.push(i),!0}return!1}function Tp(e,t){if(e._texture&&e._texture instanceof B){const i=e._texture.baseTexture;return t.includes(i)||t.push(i),!0}return!1}function wp(e,t){return t instanceof on?(t.updateText(!0),!0):!1}function Ep(e,t){if(t instanceof oe){const i=t.toFontString();return _t.measureFont(i),!0}return!1}function Cp(e,t){if(e instanceof on){t.includes(e.style)||t.push(e.style),t.includes(e)||t.push(e);const i=e._texture.baseTexture;return t.includes(i)||t.push(i),!0}return!1}function Sp(e,t){return e instanceof oe?(t.includes(e)||t.push(e),!0):!1}const rl=class{constructor(e){this.limiter=new xp(rl.uploadsPerFrame),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=()=>{this.queue&&this.prepareItems()},this.registerFindHook(Cp),this.registerFindHook(Sp),this.registerFindHook(yp),this.registerFindHook(bp),this.registerFindHook(Tp),this.registerUploadHook(wp),this.registerUploadHook(Ep)}upload(e){return new Promise(t=>{e&&this.add(e),this.queue.length?(this.completes.push(t),this.ticking||(this.ticking=!0,yt.system.addOnce(this.tick,this,Ie.UTILITY))):t()})}tick(){setTimeout(this.delayedTick,0)}prepareItems(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){const e=this.queue[0];let t=!1;if(e&&!e._destroyed){for(let i=0,s=this.uploadHooks.length;i<s;i++)if(this.uploadHooks[i](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)yt.system.addOnce(this.tick,this,Ie.UTILITY);else{this.ticking=!1;const e=this.completes.slice(0);this.completes.length=0;for(let t=0,i=e.length;t<i;t++)e[t]()}}registerFindHook(e){return e&&this.addHooks.push(e),this}registerUploadHook(e){return e&&this.uploadHooks.push(e),this}add(e){for(let t=0,i=this.addHooks.length;t<i&&!this.addHooks[t](e,this.queue);t++);if(e instanceof St)for(let t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this}destroy(){this.ticking&&yt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null}};let ps=rl;ps.uploadsPerFrame=4;Object.defineProperties(R,{UPLOADS_PER_FRAME:{get(){return ps.uploadsPerFrame},set(e){Y("7.1.0","settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),ps.uploadsPerFrame=e}}});function nl(e,t){return t instanceof X?(t._glTextures[e.CONTEXT_UID]||e.texture.bind(t),!0):!1}function Ap(e,t){if(!(t instanceof As))return!1;const{geometry:i}=t;t.finishPoly(),i.updateBatches();const{batches:s}=i;for(let r=0;r<s.length;r++){const{texture:n}=s[r].style;n&&nl(e,n.baseTexture)}return i.batchable||e.geometry.bind(i,t._resolveDirectShader(e)),!0}function Ip(e,t){return e instanceof As?(t.push(e),!0):!1}class ol extends ps{constructor(t){super(t),this.uploadHookHelper=this.renderer,this.registerFindHook(Ip),this.registerUploadHook(nl),this.registerUploadHook(Ap)}}ol.extension={name:"prepare",type:D.RendererSystem};N.add(ol);var Pp=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,Rp=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,Mp=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,Co=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,Dp=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;const Yi=new it;class al extends xs{constructor(t){super(t),t.runners.contextChange.add(this),this.quad=new ta,this.state=ae.for2d()}contextChange(){const t=this.renderer,i={globals:t.globalUniforms};this.simpleShader=Zt.from(Co,Dp,i),this.shader=t.context.webGLVersion>1?Zt.from(Rp,Pp,i):Zt.from(Co,Mp,i)}render(t){const i=this.renderer,s=this.quad;let r=s.vertices;r[0]=r[6]=t._width*-t.anchor.x,r[1]=r[3]=t._height*-t.anchor.y,r[2]=r[4]=t._width*(1-t.anchor.x),r[5]=r[7]=t._height*(1-t.anchor.y);const n=t.uvRespectAnchor?t.anchor.x:0,o=t.uvRespectAnchor?t.anchor.y:0;r=s.uvs,r[0]=r[6]=-n,r[1]=r[3]=-o,r[2]=r[4]=1-n,r[5]=r[7]=1-o,s.invalidate();const a=t._texture,l=a.baseTexture,h=l.alphaMode>0,c=t.tileTransform.localTransform,u=t.uvMatrix;let d=l.isPowerOfTwo&&a.frame.width===l.width&&a.frame.height===l.height;d&&(l._glTextures[i.CONTEXT_UID]?d=l.wrapMode!==ce.CLAMP:l.wrapMode===ce.CLAMP&&(l.wrapMode=ce.REPEAT));const f=d?this.simpleShader:this.shader,p=a.width,_=a.height,m=t._width,v=t._height;Yi.set(c.a*p/m,c.b*p/v,c.c*_/m,c.d*_/v,c.tx/m,c.ty/v),Yi.invert(),d?Yi.prepend(u.mapCoord):(f.uniforms.uMapCoord=u.mapCoord.toArray(!0),f.uniforms.uClampFrame=u.uClampFrame,f.uniforms.uClampOffset=u.uClampOffset),f.uniforms.uTransform=Yi.toArray(!0),f.uniforms.uColor=Z.shared.setValue(t.tint).premultiply(t.worldAlpha,h).toArray(f.uniforms.uColor),f.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),f.uniforms.uSampler=a,i.shader.bind(f),i.geometry.bind(s),this.state.blendMode=No(t.blendMode,h),i.state.set(this.state),i.geometry.draw(this.renderer.gl.TRIANGLES,6,0)}}al.extension={name:"tilingSprite",type:D.RendererPlugin};N.add(al);const ui=class{constructor(e,t,i=null){this.linkedSheets=[],this._texture=e instanceof B?e:null,this.baseTexture=e instanceof X?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;const s=this.baseTexture.resource;this.resolution=this._updateResolution(i||(s?s.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}_updateResolution(e=null){const{scale:t}=this.data.meta;let i=ue(e,null);return i===null&&(i=parseFloat(t??"1")),i!==1&&this.baseTexture.setResolution(i),i}parse(){return new Promise(e=>{this._callback=e,this._batchIndex=0,this._frameKeys.length<=ui.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(e){let t=e;const i=ui.BATCH_SIZE;for(;t-e<i&&t<this._frameKeys.length;){const s=this._frameKeys[t],r=this._frames[s],n=r.frame;if(n){let o=null,a=null;const l=r.trimmed!==!1&&r.sourceSize?r.sourceSize:r.frame,h=new K(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);r.rotated?o=new K(Math.floor(n.x)/this.resolution,Math.floor(n.y)/this.resolution,Math.floor(n.h)/this.resolution,Math.floor(n.w)/this.resolution):o=new K(Math.floor(n.x)/this.resolution,Math.floor(n.y)/this.resolution,Math.floor(n.w)/this.resolution,Math.floor(n.h)/this.resolution),r.trimmed!==!1&&r.spriteSourceSize&&(a=new K(Math.floor(r.spriteSourceSize.x)/this.resolution,Math.floor(r.spriteSourceSize.y)/this.resolution,Math.floor(n.w)/this.resolution,Math.floor(n.h)/this.resolution)),this.textures[s]=new B(this.baseTexture,o,h,a,r.rotated?2:0,r.anchor,r.borders),B.addToCache(this.textures[s],s)}t++}}_processAnimations(){const e=this.data.animations||{};for(const t in e){this.animations[t]=[];for(let i=0;i<e[t].length;i++){const s=e[t][i];this.animations[t].push(this.textures[s])}}}_parseComplete(){const e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*ui.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*ui.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(e=!1){var t;for(const i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)==null||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]}};let zr=ui;zr.BATCH_SIZE=1e3;const Fp=["jpg","png","jpeg","avif","webp"];function ll(e,t,i){const s={};if(e.forEach(r=>{s[r]=t}),Object.keys(t.textures).forEach(r=>{s[r]=t.textures[r]}),!i){const r=bt.dirname(e[0]);t.linkedSheets.forEach((n,o)=>{const a=ll([`${r}/${t.data.meta.related_multi_packs[o]}`],n,!0);Object.assign(s,a)})}return s}const Bp={extension:D.Asset,cache:{test:e=>e instanceof zr,getCacheableAssets:(e,t)=>ll(e,t,!1)},resolver:{test:e=>{const i=e.split("?")[0].split("."),s=i.pop(),r=i.pop();return s==="json"&&Fp.includes(r)},parse:e=>{var i;const t=e.split(".");return{resolution:parseFloat(((i=R.RETINA_PREFIX.exec(e))==null?void 0:i[1])??"1"),format:t[t.length-2],src:e}}},loader:{name:"spritesheetLoader",extension:{type:D.LoadParser,priority:Jt.Normal},async testParse(e,t){return bt.extname(t.src).toLowerCase()===".json"&&!!e.frames},async parse(e,t,i){var h,c;let s=bt.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let r=s+e.meta.image;r=Or(r,t.src);const o=(await i.load([r]))[r],a=new zr(o.baseTexture,e,t.src);await a.parse();const l=(h=e==null?void 0:e.meta)==null?void 0:h.related_multi_packs;if(Array.isArray(l)){const u=[];for(const f of l){if(typeof f!="string")continue;let p=s+f;(c=t.data)!=null&&c.ignoreMultiPack||(p=Or(p,t.src),u.push(i.load({src:p,data:{ignoreMultiPack:!0}})))}const d=await Promise.all(u);a.linkedSheets=d,d.forEach(f=>{f.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==f))})}return a},unload(e){e.destroy(!0)}}};N.add(Bp);class ms{constructor(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}}class ts{static test(t){return typeof t=="string"&&t.startsWith("info face=")}static parse(t){const i=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const n in i){const o=i[n].match(/^[a-z]+/gm)[0],a=i[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),l={};for(const h in a){const c=a[h].split("="),u=c[0],d=c[1].replace(/"/gm,""),f=parseFloat(d),p=isNaN(f)?d:f;l[u]=p}s[o].push(l)}const r=new ms;return s.info.forEach(n=>r.info.push({face:n.face,size:parseInt(n.size,10)})),s.common.forEach(n=>r.common.push({lineHeight:parseInt(n.lineHeight,10)})),s.page.forEach(n=>r.page.push({id:parseInt(n.id,10),file:n.file})),s.char.forEach(n=>r.char.push({id:parseInt(n.id,10),page:parseInt(n.page,10),x:parseInt(n.x,10),y:parseInt(n.y,10),width:parseInt(n.width,10),height:parseInt(n.height,10),xoffset:parseInt(n.xoffset,10),yoffset:parseInt(n.yoffset,10),xadvance:parseInt(n.xadvance,10)})),s.kerning.forEach(n=>r.kerning.push({first:parseInt(n.first,10),second:parseInt(n.second,10),amount:parseInt(n.amount,10)})),s.distanceField.forEach(n=>r.distanceField.push({distanceRange:parseInt(n.distanceRange,10),fieldType:n.fieldType})),r}}class Hr{static test(t){const i=t;return"getElementsByTagName"in i&&i.getElementsByTagName("page").length&&i.getElementsByTagName("info")[0].getAttribute("face")!==null}static parse(t){const i=new ms,s=t.getElementsByTagName("info"),r=t.getElementsByTagName("common"),n=t.getElementsByTagName("page"),o=t.getElementsByTagName("char"),a=t.getElementsByTagName("kerning"),l=t.getElementsByTagName("distanceField");for(let h=0;h<s.length;h++)i.info.push({face:s[h].getAttribute("face"),size:parseInt(s[h].getAttribute("size"),10)});for(let h=0;h<r.length;h++)i.common.push({lineHeight:parseInt(r[h].getAttribute("lineHeight"),10)});for(let h=0;h<n.length;h++)i.page.push({id:parseInt(n[h].getAttribute("id"),10)||0,file:n[h].getAttribute("file")});for(let h=0;h<o.length;h++){const c=o[h];i.char.push({id:parseInt(c.getAttribute("id"),10),page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xoffset:parseInt(c.getAttribute("xoffset"),10),yoffset:parseInt(c.getAttribute("yoffset"),10),xadvance:parseInt(c.getAttribute("xadvance"),10)})}for(let h=0;h<a.length;h++)i.kerning.push({first:parseInt(a[h].getAttribute("first"),10),second:parseInt(a[h].getAttribute("second"),10),amount:parseInt(a[h].getAttribute("amount"),10)});for(let h=0;h<l.length;h++)i.distanceField.push({fieldType:l[h].getAttribute("fieldType"),distanceRange:parseInt(l[h].getAttribute("distanceRange"),10)});return i}}class $r{static test(t){return typeof t=="string"&&t.includes("<font>")?Hr.test(R.ADAPTER.parseXML(t)):!1}static parse(t){return Hr.parse(R.ADAPTER.parseXML(t))}}const or=[ts,Hr,$r];function Lp(e){for(let t=0;t<or.length;t++)if(or[t].test(e))return or[t];return null}function Op(e,t,i,s,r,n){const o=i.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;let a;const l=i.dropShadow?i.dropShadowDistance:0,h=i.padding||0,c=e.width/s-l-h*2,u=e.height/s-l-h*2,d=o.slice(),f=i.fillGradientStops.slice();if(!f.length){const p=d.length+1;for(let _=1;_<p;++_)f.push(_/p)}if(d.unshift(o[0]),f.unshift(0),d.push(o[o.length-1]),f.push(1),i.fillGradientType===Is.LINEAR_VERTICAL){a=t.createLinearGradient(c/2,h,c/2,u+h);let p=0;const m=(n.fontProperties.fontSize+i.strokeThickness)/u;for(let v=0;v<r.length;v++){const y=n.lineHeight*v;for(let g=0;g<d.length;g++){let x=0;typeof f[g]=="number"?x=f[g]:x=g/d.length;const E=y/u+x*m;let M=Math.max(p,E);M=Math.min(M,1),a.addColorStop(M,d[g]),p=M}}}else{a=t.createLinearGradient(h,u/2,c+h,u/2);const p=d.length+1;let _=1;for(let m=0;m<d.length;m++){let v;typeof f[m]=="number"?v=f[m]:v=_/p,a.addColorStop(v,d[m]),_++}}return a}function kp(e,t,i,s,r,n,o){const a=i.text,l=i.fontProperties;t.translate(s,r),t.scale(n,n);const h=o.strokeThickness/2,c=-(o.strokeThickness/2);if(t.font=o.toFontString(),t.lineWidth=o.strokeThickness,t.textBaseline=o.textBaseline,t.lineJoin=o.lineJoin,t.miterLimit=o.miterLimit,t.fillStyle=Op(e,t,o,n,[a],i),t.strokeStyle=o.stroke,o.dropShadow){const u=o.dropShadowColor,d=o.dropShadowBlur*n,f=o.dropShadowDistance*n;t.shadowColor=Z.shared.setValue(u).setAlpha(o.dropShadowAlpha).toRgbaString(),t.shadowBlur=d,t.shadowOffsetX=Math.cos(o.dropShadowAngle)*f,t.shadowOffsetY=Math.sin(o.dropShadowAngle)*f}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;o.stroke&&o.strokeThickness&&t.strokeText(a,h,c+i.lineHeight-l.descent),o.fill&&t.fillText(a,h,c+i.lineHeight-l.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}function es(e){return e.codePointAt?e.codePointAt(0):e.charCodeAt(0)}function hl(e){return Array.from?Array.from(e):e.split("")}function Np(e){typeof e=="string"&&(e=[e]);const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];if(Array.isArray(r)){if(r.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);const n=r[0].charCodeAt(0),o=r[1].charCodeAt(0);if(o<n)throw new Error("[BitmapFont]: Invalid character range.");for(let a=n,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...hl(r))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const Ft=class{constructor(e,t,i){var h;const[s]=e.info,[r]=e.common,[n]=e.page,[o]=e.distanceField,a=ue(n.file),l={};this._ownsTextures=i,this.font=s.face,this.size=s.size,this.lineHeight=r.lineHeight/a,this.chars={},this.pageTextures=l;for(let c=0;c<e.page.length;c++){const{id:u,file:d}=e.page[c];l[u]=t instanceof Array?t[c]:t[d],o!=null&&o.fieldType&&o.fieldType!=="none"&&(l[u].baseTexture.alphaMode=zt.NO_PREMULTIPLIED_ALPHA,l[u].baseTexture.mipmap=Qt.OFF)}for(let c=0;c<e.char.length;c++){const{id:u,page:d}=e.char[c];let{x:f,y:p,width:_,height:m,xoffset:v,yoffset:y,xadvance:g}=e.char[c];f/=a,p/=a,_/=a,m/=a,v/=a,y/=a,g/=a;const x=new K(f+l[d].frame.x/a,p+l[d].frame.y/a,_,m);this.chars[u]={xOffset:v,yOffset:y,xAdvance:g,kerning:{},texture:new B(l[d].baseTexture,x),page:d}}for(let c=0;c<e.kerning.length;c++){let{first:u,second:d,amount:f}=e.kerning[c];u/=a,d/=a,f/=a,this.chars[d]&&(this.chars[d].kerning[u]=f)}this.distanceFieldRange=o==null?void 0:o.distanceRange,this.distanceFieldType=((h=o==null?void 0:o.fieldType)==null?void 0:h.toLowerCase())??"none"}destroy(){for(const e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(const e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null}static install(e,t,i){let s;if(e instanceof ms)s=e;else{const n=Lp(e);if(!n)throw new Error("Unrecognized data format for font.");s=n.parse(e)}t instanceof B&&(t=[t]);const r=new Ft(s,t,i);return Ft.available[r.font]=r,r}static uninstall(e){const t=Ft.available[e];if(!t)throw new Error(`No font found named '${e}'`);t.destroy(),delete Ft.available[e]}static from(e,t,i){if(!e)throw new Error("[BitmapFont] Property `name` is required.");const{chars:s,padding:r,resolution:n,textureWidth:o,textureHeight:a,...l}=Object.assign({},Ft.defaultOptions,i),h=Np(s),c=t instanceof oe?t:new oe(t),u=o,d=new ms;d.info[0]={face:c.fontFamily,size:c.fontSize},d.common[0]={lineHeight:c.fontSize};let f=0,p=0,_,m,v,y=0;const g=[];for(let E=0;E<h.length;E++){_||(_=R.ADAPTER.createCanvas(),_.width=o,_.height=a,m=_.getContext("2d"),v=new X(_,{resolution:n,...l}),g.push(new B(v)),d.page.push({id:g.length-1,file:""}));const M=h[E],A=_t.measureText(M,c,!1,_),C=A.width,O=Math.ceil(A.height),U=Math.ceil((c.fontStyle==="italic"?2:1)*C);if(p>=a-O*n){if(p===0)throw new Error(`[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${M}')`);--E,_=null,m=null,v=null,p=0,f=0,y=0;continue}if(y=Math.max(O+A.fontProperties.descent,y),U*n+f>=u){if(f===0)throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${M}')`);--E,p+=y*n,p=Math.ceil(p),f=0,y=0;continue}kp(_,m,A,f,p,n,c);const P=es(A.text);d.char.push({id:P,page:g.length-1,x:f/n,y:p/n,width:U,height:O,xoffset:0,yoffset:0,xadvance:C-(c.dropShadow?c.dropShadowDistance:0)-(c.stroke?c.strokeThickness:0)}),f+=(U+2*r)*n,f=Math.ceil(f)}for(let E=0,M=h.length;E<M;E++){const A=h[E];for(let C=0;C<M;C++){const O=h[C],U=m.measureText(A).width,P=m.measureText(O).width,S=m.measureText(A+O).width-(U+P);S&&d.kerning.push({first:es(A),second:es(O),amount:S})}}const x=new Ft(d,g,!0);return Ft.available[e]!==void 0&&Ft.uninstall(e),Ft.available[e]=x,x}};let Tt=Ft;Tt.ALPHA=[["a","z"],["A","Z"]," "];Tt.NUMERIC=[["0","9"]];Tt.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "];Tt.ASCII=[[" ","~"]];Tt.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:Ft.ALPHANUMERIC};Tt.available={};var Up=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,Gp=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;const So=[],Ao=[],Io=[],cl=class extends St{constructor(e,t={}){super();const{align:i,tint:s,maxWidth:r,letterSpacing:n,fontName:o,fontSize:a}=Object.assign({},cl.styleDefaults,t);if(!Tt.available[o])throw new Error(`Missing BitmapFont "${o}"`);this._activePagesMeshData=[],this._textWidth=0,this._textHeight=0,this._align=i,this._tintColor=new Z(s),this._font=void 0,this._fontName=o,this._fontSize=a,this.text=e,this._maxWidth=r,this._maxLineHeight=0,this._letterSpacing=n,this._anchor=new re(()=>{this.dirty=!0},this,0,0),this._roundPixels=R.ROUND_PIXELS,this.dirty=!0,this._resolution=R.RESOLUTION,this._autoResolution=!0,this._textureCache={}}updateText(){var U;const e=Tt.available[this._fontName],t=this.fontSize,i=t/e.size,s=new W,r=[],n=[],o=[],a=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",l=hl(a),h=this._maxWidth*e.size/t,c=e.distanceFieldType==="none"?So:Ao;let u=null,d=0,f=0,p=0,_=-1,m=0,v=0,y=0,g=0;for(let P=0;P<l.length;P++){const F=l[P],S=es(F);if(/(?:\s)/.test(F)&&(_=P,m=d,g++),F==="\r"||F===`
`){n.push(d),o.push(-1),f=Math.max(f,d),++p,++v,s.x=0,s.y+=e.lineHeight,u=null,g=0;continue}const b=e.chars[S];if(!b)continue;u&&b.kerning[u]&&(s.x+=b.kerning[u]);const $=Io.pop()||{texture:B.EMPTY,line:0,charCode:0,prevSpaces:0,position:new W};$.texture=b.texture,$.line=p,$.charCode=S,$.position.x=Math.round(s.x+b.xOffset+this._letterSpacing/2),$.position.y=Math.round(s.y+b.yOffset),$.prevSpaces=g,r.push($),d=$.position.x+Math.max(b.xAdvance-b.xOffset,b.texture.orig.width),s.x+=b.xAdvance+this._letterSpacing,y=Math.max(y,b.yOffset+b.texture.height),u=S,_!==-1&&h>0&&s.x>h&&(++v,je(r,1+_-v,1+P-_),P=_,_=-1,n.push(m),o.push(r.length>0?r[r.length-1].prevSpaces:0),f=Math.max(f,m),p++,s.x=0,s.y+=e.lineHeight,u=null,g=0)}const x=l[l.length-1];x!=="\r"&&x!==`
`&&(/(?:\s)/.test(x)&&(d=m),n.push(d),f=Math.max(f,d),o.push(-1));const E=[];for(let P=0;P<=p;P++){let F=0;this._align==="right"?F=f-n[P]:this._align==="center"?F=(f-n[P])/2:this._align==="justify"&&(F=o[P]<0?0:(f-n[P])/o[P]),E.push(F)}const M=r.length,A={},C=[],O=this._activePagesMeshData;c.push(...O);for(let P=0;P<M;P++){const F=r[P].texture,S=F.baseTexture.uid;if(!A[S]){let b=c.pop();if(!b){const q=new up;let T,k;e.distanceFieldType==="none"?(T=new wo(B.EMPTY),k=H.NORMAL):(T=new wo(B.EMPTY,{program:kt.from(Gp,Up),uniforms:{uFWidth:0}}),k=H.NORMAL_NPM);const V=new Ur(q,T);V.blendMode=k,b={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:V,vertices:null,uvs:null,indices:null}}b.index=0,b.indexCount=0,b.vertexCount=0,b.uvsCount=0,b.total=0;const{_textureCache:$}=this;$[S]=$[S]||new B(F.baseTexture),b.mesh.texture=$[S],b.mesh.tint=this._tintColor.value,C.push(b),A[S]=b}A[S].total++}for(let P=0;P<O.length;P++)C.includes(O[P])||this.removeChild(O[P].mesh);for(let P=0;P<C.length;P++)C[P].mesh.parent!==this&&this.addChild(C[P].mesh);this._activePagesMeshData=C;for(const P in A){const F=A[P],S=F.total;if(!(((U=F.indices)==null?void 0:U.length)>6*S)||F.vertices.length<Ur.BATCHABLE_SIZE*2)F.vertices=new Float32Array(4*2*S),F.uvs=new Float32Array(4*2*S),F.indices=new Uint16Array(6*S);else{const b=F.total,$=F.vertices;for(let q=b*4*2;q<$.length;q++)$[q]=0}F.mesh.size=6*S}for(let P=0;P<M;P++){const F=r[P];let S=F.position.x+E[F.line]*(this._align==="justify"?F.prevSpaces:1);this._roundPixels&&(S=Math.round(S));const b=S*i,$=F.position.y*i,q=F.texture,T=A[q.baseTexture.uid],k=q.frame,V=q._uvs,w=T.index++;T.indices[w*6+0]=0+w*4,T.indices[w*6+1]=1+w*4,T.indices[w*6+2]=2+w*4,T.indices[w*6+3]=0+w*4,T.indices[w*6+4]=2+w*4,T.indices[w*6+5]=3+w*4,T.vertices[w*8+0]=b,T.vertices[w*8+1]=$,T.vertices[w*8+2]=b+k.width*i,T.vertices[w*8+3]=$,T.vertices[w*8+4]=b+k.width*i,T.vertices[w*8+5]=$+k.height*i,T.vertices[w*8+6]=b,T.vertices[w*8+7]=$+k.height*i,T.uvs[w*8+0]=V.x0,T.uvs[w*8+1]=V.y0,T.uvs[w*8+2]=V.x1,T.uvs[w*8+3]=V.y1,T.uvs[w*8+4]=V.x2,T.uvs[w*8+5]=V.y2,T.uvs[w*8+6]=V.x3,T.uvs[w*8+7]=V.y3}this._textWidth=f*i,this._textHeight=(s.y+e.lineHeight)*i;for(const P in A){const F=A[P];if(this.anchor.x!==0||this.anchor.y!==0){let q=0;const T=this._textWidth*this.anchor.x,k=this._textHeight*this.anchor.y;for(let V=0;V<F.total;V++)F.vertices[q++]-=T,F.vertices[q++]-=k,F.vertices[q++]-=T,F.vertices[q++]-=k,F.vertices[q++]-=T,F.vertices[q++]-=k,F.vertices[q++]-=T,F.vertices[q++]-=k}this._maxLineHeight=y*i;const S=F.mesh.geometry.getBuffer("aVertexPosition"),b=F.mesh.geometry.getBuffer("aTextureCoord"),$=F.mesh.geometry.getIndex();S.data=F.vertices,b.data=F.uvs,$.data=F.indices,S.update(),b.update(),$.update()}for(let P=0;P<r.length;P++)Io.push(r[P]);this._font=e,this.dirty=!1}updateTransform(){this.validate(),this.containerUpdateTransform()}_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0);const{distanceFieldRange:t,distanceFieldType:i,size:s}=Tt.available[this._fontName];if(i!=="none"){const{a:r,b:n,c:o,d:a}=this.worldTransform,l=Math.sqrt(r*r+n*n),h=Math.sqrt(o*o+a*a),c=(Math.abs(l)+Math.abs(h))/2,u=this.fontSize/s,d=e._view.resolution;for(const f of this._activePagesMeshData)f.mesh.shader.uniforms.uFWidth=c*t*u*d}super._render(e)}getLocalBounds(){return this.validate(),super.getLocalBounds()}validate(){const e=Tt.available[this._fontName];if(!e)throw new Error(`Missing BitmapFont "${this._fontName}"`);this._font!==e&&(this.dirty=!0),this.dirty&&this.updateText()}get tint(){return this._tintColor.value}set tint(e){if(this.tint!==e){this._tintColor.setValue(e);for(let t=0;t<this._activePagesMeshData.length;t++)this._activePagesMeshData[t].mesh.tint=e}}get align(){return this._align}set align(e){this._align!==e&&(this._align=e,this.dirty=!0)}get fontName(){return this._fontName}set fontName(e){if(!Tt.available[e])throw new Error(`Missing BitmapFont "${e}"`);this._fontName!==e&&(this._fontName=e,this.dirty=!0)}get fontSize(){return this._fontSize??Tt.available[this._fontName].size}set fontSize(e){this._fontSize!==e&&(this._fontSize=e,this.dirty=!0)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}get text(){return this._text}set text(e){e=String(e??""),this._text!==e&&(this._text=e,this.dirty=!0)}get maxWidth(){return this._maxWidth}set maxWidth(e){this._maxWidth!==e&&(this._maxWidth=e,this.dirty=!0)}get maxLineHeight(){return this.validate(),this._maxLineHeight}get textWidth(){return this.validate(),this._textWidth}get letterSpacing(){return this._letterSpacing}set letterSpacing(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.dirty=!0)}get roundPixels(){return this._roundPixels}set roundPixels(e){e!==this._roundPixels&&(this._roundPixels=e,this.dirty=!0)}get textHeight(){return this.validate(),this._textHeight}get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}destroy(e){const{_textureCache:t}=this,s=Tt.available[this._fontName].distanceFieldType==="none"?So:Ao;s.push(...this._activePagesMeshData);for(const r of this._activePagesMeshData)this.removeChild(r.mesh);this._activePagesMeshData=[],s.filter(r=>t[r.mesh.texture.baseTexture.uid]).forEach(r=>{r.mesh.texture=B.EMPTY});for(const r in t)t[r].destroy(),delete t[r];this._font=null,this._tintColor=null,this._textureCache=null,super.destroy(e)}};let zp=cl;zp.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0};const Hp=[".xml",".fnt"],$p={extension:{type:D.LoadParser,priority:Jt.Normal},name:"loadBitmapFont",test(e){return Hp.includes(bt.extname(e).toLowerCase())},async testParse(e){return ts.test(e)||$r.test(e)},async parse(e,t,i){const s=ts.test(e)?ts.parse(e):$r.parse(e),{src:r}=t,{page:n}=s,o=[];for(let h=0;h<n.length;++h){const c=n[h].file;let u=bt.join(bt.dirname(r),c);u=Or(u,r),o.push(u)}const a=await i.load(o),l=o.map(h=>a[h]);return Tt.install(s,l,!0)},async load(e,t){return(await R.ADAPTER.fetch(e)).text()},unload(e){e.destroy()}};N.add($p);const Ue=class extends oe{constructor(){super(...arguments),this._fonts=[],this._overrides=[],this._stylesheet="",this.fontsDirty=!1}static from(e){return new Ue(Object.keys(Ue.defaultOptions).reduce((t,i)=>({...t,[i]:e[i]}),{}))}cleanFonts(){this._fonts.length>0&&(this._fonts.forEach(e=>{URL.revokeObjectURL(e.src),e.refs--,e.refs===0&&(e.fontFace&&document.fonts.delete(e.fontFace),delete Ue.availableFonts[e.originalUrl])}),this.fontFamily="Arial",this._fonts.length=0,this.styleID++,this.fontsDirty=!0)}loadFont(e,t={}){const{availableFonts:i}=Ue;if(i[e]){const s=i[e];return this._fonts.push(s),s.refs++,this.styleID++,this.fontsDirty=!0,Promise.resolve()}return R.ADAPTER.fetch(e).then(s=>s.blob()).then(async s=>new Promise((r,n)=>{const o=URL.createObjectURL(s),a=new FileReader;a.onload=()=>r([o,a.result]),a.onerror=n,a.readAsDataURL(s)})).then(async([s,r])=>{const n=Object.assign({family:bt.basename(e,bt.extname(e)),weight:"normal",style:"normal",src:s,dataSrc:r,refs:1,originalUrl:e,fontFace:null},t);i[e]=n,this._fonts.push(n),this.styleID++;const o=new FontFace(n.family,`url(${n.src})`,{weight:n.weight,style:n.style});n.fontFace=o,await o.load(),document.fonts.add(o),await document.fonts.ready,this.styleID++,this.fontsDirty=!0})}addOverride(...e){const t=e.filter(i=>!this._overrides.includes(i));t.length>0&&(this._overrides.push(...t),this.styleID++)}removeOverride(...e){const t=e.filter(i=>this._overrides.includes(i));t.length>0&&(this._overrides=this._overrides.filter(i=>!t.includes(i)),this.styleID++)}toCSS(e){return[`transform: scale(${e})`,"transform-origin: top left","display: inline-block",`color: ${this.normalizeColor(this.fill)}`,`font-size: ${this.fontSize}px`,`font-family: ${this.fontFamily}`,`font-weight: ${this.fontWeight}`,`font-style: ${this.fontStyle}`,`font-variant: ${this.fontVariant}`,`letter-spacing: ${this.letterSpacing}px`,`text-align: ${this.align}`,`padding: ${this.padding}px`,`white-space: ${this.whiteSpace}`,...this.lineHeight?[`line-height: ${this.lineHeight}px`]:[],...this.wordWrap?[`word-wrap: ${this.breakWords?"break-all":"break-word"}`,`max-width: ${this.wordWrapWidth}px`]:[],...this.strokeThickness?[`-webkit-text-stroke-width: ${this.strokeThickness}px`,`-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,`text-stroke-width: ${this.strokeThickness}px`,`text-stroke-color: ${this.normalizeColor(this.stroke)}`,"paint-order: stroke"]:[],...this.dropShadow?[this.dropShadowToCSS()]:[],...this._overrides].join(";")}toGlobalCSS(){return this._fonts.reduce((e,t)=>`${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style}; 
            }`,this._stylesheet)}get stylesheet(){return this._stylesheet}set stylesheet(e){this._stylesheet!==e&&(this._stylesheet=e,this.styleID++)}normalizeColor(e){return Array.isArray(e)&&(e=Ke(e)),typeof e=="number"?mh(e):e}dropShadowToCSS(){let e=this.normalizeColor(this.dropShadowColor);const t=this.dropShadowAlpha,i=Math.round(Math.cos(this.dropShadowAngle)*this.dropShadowDistance),s=Math.round(Math.sin(this.dropShadowAngle)*this.dropShadowDistance);e.startsWith("#")&&t<1&&(e+=(t*255|0).toString(16).padStart(2,"0"));const r=`${i}px ${s}px`;return this.dropShadowBlur>0?`text-shadow: ${r} ${this.dropShadowBlur}px ${e}`:`text-shadow: ${r} ${e}`}reset(){Object.assign(this,Ue.defaultOptions)}onBeforeDraw(){const{fontsDirty:e}=this;return this.fontsDirty=!1,this.isSafari&&this._fonts.length>0&&e?new Promise(t=>setTimeout(t,100)):Promise.resolve()}get isSafari(){const{userAgent:e}=R.ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(e)}set fillGradientStops(e){console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")}get fillGradientStops(){return super.fillGradientStops}set fillGradientType(e){console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")}get fillGradientType(){return super.fillGradientType}set miterLimit(e){console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")}get miterLimit(){return super.miterLimit}set trim(e){console.warn("[HTMLTextStyle] trim is not supported by HTMLText")}get trim(){return super.trim}set textBaseline(e){console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")}get textBaseline(){return super.textBaseline}set leading(e){console.warn("[HTMLTextStyle] leading is not supported by HTMLText")}get leading(){return super.leading}set lineJoin(e){console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")}get lineJoin(){return super.lineJoin}};let fi=Ue;fi.availableFonts={};fi.defaultOptions={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,padding:0,stroke:"black",strokeThickness:0,whiteSpace:"normal",wordWrap:!1,wordWrapWidth:100};const Ge=class extends Me{constructor(e="",t={}){super(B.EMPTY),this._text=null,this._style=null,this._autoResolution=!0,this._loading=!1,this.localStyleID=-1,this.dirty=!1,this.ownsStyle=!1;const i=new Image,s=B.from(i,{scaleMode:R.SCALE_MODE,resourceOptions:{autoLoad:!1}});s.orig=new K,s.trim=new K,this.texture=s;const r="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xhtml",o=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject"),l=document.createElementNS(n,"div"),h=document.createElementNS(n,"style");a.setAttribute("width","10000"),a.setAttribute("height","10000"),a.style.overflow="hidden",o.appendChild(a),this.maxWidth=Ge.defaultMaxWidth,this.maxHeight=Ge.defaultMaxHeight,this._domElement=l,this._styleElement=h,this._svgRoot=o,this._foreignObject=a,this._foreignObject.appendChild(h),this._foreignObject.appendChild(l),this._image=i,this._loadImage=new Image,this._autoResolution=Ge.defaultAutoResolution,this._resolution=Ge.defaultResolution??R.RESOLUTION,this.text=e,this.style=t}measureText(e){var a,l;const{text:t,style:i,resolution:s}=Object.assign({text:this._text,style:this._style,resolution:this._resolution},e);Object.assign(this._domElement,{innerHTML:t,style:i.toCSS(s)}),this._styleElement.textContent=i.toGlobalCSS(),document.body.appendChild(this._svgRoot);const r=this._domElement.getBoundingClientRect();this._svgRoot.remove();const n=Math.min(this.maxWidth,Math.ceil(r.width)),o=Math.min(this.maxHeight,Math.ceil(r.height));return this._svgRoot.setAttribute("width",n.toString()),this._svgRoot.setAttribute("height",o.toString()),t!==this._text&&(this._domElement.innerHTML=this._text),i!==this._style&&(Object.assign(this._domElement,{style:(a=this._style)==null?void 0:a.toCSS(s)}),this._styleElement.textContent=(l=this._style)==null?void 0:l.toGlobalCSS()),{width:n+i.padding*2,height:o+i.padding*2}}async updateText(e=!0){const{style:t,_image:i,_loadImage:s}=this;if(this.localStyleID!==t.styleID&&(this.dirty=!0,this.localStyleID=t.styleID),!this.dirty&&e)return;const{width:r,height:n}=this.measureText();i.width=s.width=Math.ceil(Math.max(1,r)),i.height=s.height=Math.ceil(Math.max(1,n)),this._loading||(this._loading=!0,await new Promise(o=>{s.onload=async()=>{await t.onBeforeDraw(),this._loading=!1,i.src=s.src,s.onload=null,s.src="",this.updateTexture(),o()};const a=new XMLSerializer().serializeToString(this._svgRoot);s.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(a)}`}))}get source(){return this._image}updateTexture(){const{style:e,texture:t,_image:i,resolution:s}=this,{padding:r}=e,{baseTexture:n}=t;t.trim.width=t._frame.width=i.width/s,t.trim.height=t._frame.height=i.height/s,t.trim.x=-r,t.trim.y=-r,t.orig.width=t._frame.width-r*2,t.orig.height=t._frame.height-r*2,this._onTextureUpdate(),n.setRealSize(i.width,i.height,s),this.dirty=!1}_render(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._render(e)}_renderCanvas(e){this._autoResolution&&this._resolution!==e.resolution&&(this._resolution=e.resolution,this.dirty=!0),this.updateText(!0),super._renderCanvas(e)}getLocalBounds(e){return this.updateText(!0),super.getLocalBounds(e)}_calculateBounds(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_onStyleChange(){this.dirty=!0}destroy(e){var i,s,r,n,o;typeof e=="boolean"&&(e={children:e}),e=Object.assign({},Ge.defaultDestroyOptions,e),super.destroy(e);const t=null;this.ownsStyle&&((i=this._style)==null||i.cleanFonts()),this._style=t,(s=this._svgRoot)==null||s.remove(),this._svgRoot=t,(r=this._domElement)==null||r.remove(),this._domElement=t,(n=this._foreignObject)==null||n.remove(),this._foreignObject=t,(o=this._styleElement)==null||o.remove(),this._styleElement=t,this._loadImage.src="",this._loadImage.onload=null,this._loadImage=t,this._image.src="",this._image=t}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._image.width/this.resolution}set width(e){this.updateText(!0);const t=he(this.scale.x)||1;this.scale.x=t*e/this._image.width/this.resolution,this._width=e}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._image.height/this.resolution}set height(e){this.updateText(!0);const t=he(this.scale.y)||1;this.scale.y=t*e/this._image.height/this.resolution,this._height=e}get style(){return this._style}set style(e){this._style!==e&&(e=e||{},e instanceof fi?(this.ownsStyle=!1,this._style=e):e instanceof oe?(console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),this.ownsStyle=!0,this._style=fi.from(e)):(this.ownsStyle=!0,this._style=new fi(e)),this.localStyleID=-1,this.dirty=!0)}get text(){return this._text}set text(e){e=String(e===""||e===null||e===void 0?" ":e),e=this.sanitiseText(e),this._text!==e&&(this._text=e,this.dirty=!0)}get resolution(){return this._resolution}set resolution(e){this._autoResolution=!1,this._resolution!==e&&(this._resolution=e,this.dirty=!0)}sanitiseText(e){return e.replace(/<br>/gi,"<br/>").replace(/<hr>/gi,"<hr/>").replace(/&nbsp;/gi,"&#160;")}};let Ps=Ge;Ps.defaultDestroyOptions={texture:!0,children:!1,baseTexture:!0};Ps.defaultMaxWidth=2024;Ps.defaultMaxHeight=2024;Ps.defaultAutoResolution=!0;function Xp(){const e=document.querySelector("#cursor");window.addEventListener("pointermove",t=>{e.style.transform=`translate3d(${t.clientX-15}px, ${t.clientY-15}px, 0)`})}const Vp=""+new URL("background-398ff364.jpeg",import.meta.url).href;Xp();let Ti=new en({resizeTo:window});document.body.appendChild(Ti.view);let mt=new St,Rs=Me.from(Vp);Rs.width=window.innerWidth;Rs.anchor.set(.5);Rs.position.set(Ti.screen.width/2,Ti.screen.height/2);mt.addChild(Rs);Ti.stage.addChild(mt);let ul;const dl=new Pa({radius:300,strength:1}),jp=new $c(12),Wp=new rd(10),Yp=new Cu,qp=new Zu([[new Z("#E2F5F9").toRgbArray(),new Z("#FFD8D8").toRgbArray()],[new Z("#5B5C66").toRgbArray(),new Z("#F77058").toRgbArray()],[new Z("#4D9AAD").toRgbArray(),new Z("#F5D039").toRgbArray()]],.4),Xr=new be,Kp=new Mu,Vr=new ka,jr=new Ua({boundary:.7,waveLength:[50,200],amplitude:[0,20]}),Wr=new Va({radius:150,angle:5,padding:20}),fl=new Wa({strength:.3}),pl=new Ba,Je=new za,Zp=document.getElementById("button-bulge"),Qp=document.getElementById("button-ascii"),Jp=document.getElementById("button-pixel"),tm=document.getElementById("button-cross"),em=document.getElementById("button-dot"),im=document.getElementById("button-replace"),sm=document.getElementById("button-glitch"),rm=document.getElementById("button-old"),nm=document.getElementById("button-reflection"),om=document.getElementById("button-twist"),am=document.getElementById("button-zoom"),lm=document.getElementById("button-god"),hm=document.getElementById("button-wave"),cm=document.getElementById("button-none");Zp.addEventListener("click",()=>{mt.filters=[dl]});Qp.addEventListener("click",()=>{mt.filters=[jp]});Jp.addEventListener("click",()=>{mt.filters=[Wp]});tm.addEventListener("click",()=>{mt.filters=[Yp]});em.addEventListener("click",()=>{mt.filters=[Kp]});im.addEventListener("click",()=>{mt.filters=[qp]});sm.addEventListener("click",()=>{mt.filters=[Xr],Xr.slices=Math.floor(Math.random()*20)});rm.addEventListener("click",()=>{mt.filters=[Vr],Vr.seed=Math.random()});nm.addEventListener("click",()=>{mt.filters=[jr]});om.addEventListener("click",()=>{mt.filters=[Wr]});am.addEventListener("click",()=>{mt.filters=[fl]});lm.addEventListener("click",()=>{mt.filters=[pl]});hm.addEventListener("click",()=>{ul=Je,mt.filters=[Je]});cm.addEventListener("click",()=>{mt.filters=[]});window.addEventListener("pointermove",e=>{const t=e.clientX/window.innerWidth,i=e.clientY/window.innerHeight,s=[t,i];dl.center=s,Wr.offset.x=e.clientX,Wr.offset.y=e.clientY,fl.center=[e.clientX,e.clientY]});window.addEventListener("click",e=>{Je.center=[e.clientX,e.clientY],Je.time=0});let Po=0;Ti.ticker.add(e=>{Po+=e,Vr.seed=Math.random(),Math.floor(Po)%20===0&&(Xr.slices=Math.floor(Math.random()*20)),mt.filters&&mt.filters[0]===jr&&(jr.time+=.03),pl.time+=.005,ul===Je&&(Je.time+=.02)});
