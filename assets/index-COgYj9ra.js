const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConteudosPage-wMl5x06U.js","assets/content-seo-FFJr-9D4.js","assets/ArticlePage-CbvKqRLQ.js","assets/AuthorBadge-CrWIz2Od.js","assets/CategoriaPage-DlQKfAdS.js","assets/AutorPage-xGs2pn0D.js"])))=>i.map(i=>d[i]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))s(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&s(g)}).observe(document,{childList:!0,subtree:!0});function u(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(p){if(p.ep)return;p.ep=!0;const m=u(p);fetch(p.href,m)}})();function V0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Zs={exports:{}},Vn={};var yf;function X0(){if(yf)return Vn;yf=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function u(s,p,m){var g=null;if(m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),"key"in p){m={};for(var h in p)h!=="key"&&(m[h]=p[h])}else m=p;return p=m.ref,{$$typeof:r,type:s,key:g,ref:p!==void 0?p:null,props:m}}return Vn.Fragment=c,Vn.jsx=u,Vn.jsxs=u,Vn}var vf;function Q0(){return vf||(vf=1,Zs.exports=X0()),Zs.exports}var n=Q0(),Ks={exports:{}},ee={};var jf;function Z0(){if(jf)return ee;jf=1;var r=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),U=Symbol.iterator;function _(j){return j===null||typeof j!="object"?null:(j=U&&j[U]||j["@@iterator"],typeof j=="function"?j:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H=Object.assign,D={};function V(j,O,G){this.props=j,this.context=O,this.refs=D,this.updater=G||Y}V.prototype.isReactComponent={},V.prototype.setState=function(j,O){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,O,"setState")},V.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function $(){}$.prototype=V.prototype;function K(j,O,G){this.props=j,this.context=O,this.refs=D,this.updater=G||Y}var ve=K.prototype=new $;ve.constructor=K,H(ve,V.prototype),ve.isPureReactComponent=!0;var je=Array.isArray;function Ae(){}var I={H:null,A:null,T:null,S:null},Be=Object.prototype.hasOwnProperty;function Pe(j,O,G){var X=G.ref;return{$$typeof:r,type:j,key:O,ref:X!==void 0?X:null,props:G}}function Gt(j,O){return Pe(j.type,O,j.props)}function Tt(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function Ie(j){var O={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(G){return O[G]})}var Yt=/\/+/g;function kt(j,O){return typeof j=="object"&&j!==null&&j.key!=null?Ie(""+j.key):O.toString(36)}function _e(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(Ae,Ae):(j.status="pending",j.then(function(O){j.status==="pending"&&(j.status="fulfilled",j.value=O)},function(O){j.status==="pending"&&(j.status="rejected",j.reason=O)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function B(j,O,G,X,te){var ne=typeof j;(ne==="undefined"||ne==="boolean")&&(j=null);var fe=!1;if(j===null)fe=!0;else switch(ne){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(j.$$typeof){case r:case c:fe=!0;break;case T:return fe=j._init,B(fe(j._payload),O,G,X,te)}}if(fe)return te=te(j),fe=X===""?"."+kt(j,0):X,je(te)?(G="",fe!=null&&(G=fe.replace(Yt,"$&/")+"/"),B(te,O,G,"",function(Pi){return Pi})):te!=null&&(Tt(te)&&(te=Gt(te,G+(te.key==null||j&&j.key===te.key?"":(""+te.key).replace(Yt,"$&/")+"/")+fe)),O.push(te)),1;fe=0;var at=X===""?".":X+":";if(je(j))for(var Me=0;Me<j.length;Me++)X=j[Me],ne=at+kt(X,Me),fe+=B(X,O,G,ne,te);else if(Me=_(j),typeof Me=="function")for(j=Me.call(j),Me=0;!(X=j.next()).done;)X=X.value,ne=at+kt(X,Me++),fe+=B(X,O,G,ne,te);else if(ne==="object"){if(typeof j.then=="function")return B(_e(j),O,G,X,te);throw O=String(j),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return fe}function W(j,O,G){if(j==null)return j;var X=[],te=0;return B(j,X,"","",function(ne){return O.call(G,ne,te++)}),X}function P(j){if(j._status===-1){var O=j._result;O=O(),O.then(function(G){(j._status===0||j._status===-1)&&(j._status=1,j._result=G)},function(G){(j._status===0||j._status===-1)&&(j._status=2,j._result=G)}),j._status===-1&&(j._status=0,j._result=O)}if(j._status===1)return j._result.default;throw j._result}var ge=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)},Se={map:W,forEach:function(j,O,G){W(j,function(){O.apply(this,arguments)},G)},count:function(j){var O=0;return W(j,function(){O++}),O},toArray:function(j){return W(j,function(O){return O})||[]},only:function(j){if(!Tt(j))throw Error("React.Children.only expected to receive a single React element child.");return j}};return ee.Activity=S,ee.Children=Se,ee.Component=V,ee.Fragment=u,ee.Profiler=p,ee.PureComponent=K,ee.StrictMode=s,ee.Suspense=x,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ee.__COMPILER_RUNTIME={__proto__:null,c:function(j){return I.H.useMemoCache(j)}},ee.cache=function(j){return function(){return j.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(j,O,G){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var X=H({},j.props),te=j.key;if(O!=null)for(ne in O.key!==void 0&&(te=""+O.key),O)!Be.call(O,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&O.ref===void 0||(X[ne]=O[ne]);var ne=arguments.length-2;if(ne===1)X.children=G;else if(1<ne){for(var fe=Array(ne),at=0;at<ne;at++)fe[at]=arguments[at+2];X.children=fe}return Pe(j.type,te,X)},ee.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:m,_context:j},j},ee.createElement=function(j,O,G){var X,te={},ne=null;if(O!=null)for(X in O.key!==void 0&&(ne=""+O.key),O)Be.call(O,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=O[X]);var fe=arguments.length-2;if(fe===1)te.children=G;else if(1<fe){for(var at=Array(fe),Me=0;Me<fe;Me++)at[Me]=arguments[Me+2];te.children=at}if(j&&j.defaultProps)for(X in fe=j.defaultProps,fe)te[X]===void 0&&(te[X]=fe[X]);return Pe(j,ne,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(j){return{$$typeof:h,render:j}},ee.isValidElement=Tt,ee.lazy=function(j){return{$$typeof:T,_payload:{_status:-1,_result:j},_init:P}},ee.memo=function(j,O){return{$$typeof:y,type:j,compare:O===void 0?null:O}},ee.startTransition=function(j){var O=I.T,G={};I.T=G;try{var X=j(),te=I.S;te!==null&&te(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ae,ge)}catch(ne){ge(ne)}finally{O!==null&&G.types!==null&&(O.types=G.types),I.T=O}},ee.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ee.use=function(j){return I.H.use(j)},ee.useActionState=function(j,O,G){return I.H.useActionState(j,O,G)},ee.useCallback=function(j,O){return I.H.useCallback(j,O)},ee.useContext=function(j){return I.H.useContext(j)},ee.useDebugValue=function(){},ee.useDeferredValue=function(j,O){return I.H.useDeferredValue(j,O)},ee.useEffect=function(j,O){return I.H.useEffect(j,O)},ee.useEffectEvent=function(j){return I.H.useEffectEvent(j)},ee.useId=function(){return I.H.useId()},ee.useImperativeHandle=function(j,O,G){return I.H.useImperativeHandle(j,O,G)},ee.useInsertionEffect=function(j,O){return I.H.useInsertionEffect(j,O)},ee.useLayoutEffect=function(j,O){return I.H.useLayoutEffect(j,O)},ee.useMemo=function(j,O){return I.H.useMemo(j,O)},ee.useOptimistic=function(j,O){return I.H.useOptimistic(j,O)},ee.useReducer=function(j,O,G){return I.H.useReducer(j,O,G)},ee.useRef=function(j){return I.H.useRef(j)},ee.useState=function(j){return I.H.useState(j)},ee.useSyncExternalStore=function(j,O,G){return I.H.useSyncExternalStore(j,O,G)},ee.useTransition=function(){return I.H.useTransition()},ee.version="19.2.4",ee}var Sf;function rc(){return Sf||(Sf=1,Ks.exports=Z0()),Ks.exports}var A=rc();const Zt=V0(A);var Fs={exports:{}},Xn={},Ps={exports:{}},Is={};var wf;function K0(){return wf||(wf=1,(function(r){function c(B,W){var P=B.length;B.push(W);e:for(;0<P;){var ge=P-1>>>1,Se=B[ge];if(0<p(Se,W))B[ge]=W,B[P]=Se,P=ge;else break e}}function u(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var W=B[0],P=B.pop();if(P!==W){B[0]=P;e:for(var ge=0,Se=B.length,j=Se>>>1;ge<j;){var O=2*(ge+1)-1,G=B[O],X=O+1,te=B[X];if(0>p(G,P))X<Se&&0>p(te,G)?(B[ge]=te,B[X]=P,ge=X):(B[ge]=G,B[O]=P,ge=O);else if(X<Se&&0>p(te,P))B[ge]=te,B[X]=P,ge=X;else break e}}return W}function p(B,W){var P=B.sortIndex-W.sortIndex;return P!==0?P:B.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;r.unstable_now=function(){return m.now()}}else{var g=Date,h=g.now();r.unstable_now=function(){return g.now()-h}}var x=[],y=[],T=1,S=null,U=3,_=!1,Y=!1,H=!1,D=!1,V=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;function ve(B){for(var W=u(y);W!==null;){if(W.callback===null)s(y);else if(W.startTime<=B)s(y),W.sortIndex=W.expirationTime,c(x,W);else break;W=u(y)}}function je(B){if(H=!1,ve(B),!Y)if(u(x)!==null)Y=!0,Ae||(Ae=!0,Ie());else{var W=u(y);W!==null&&_e(je,W.startTime-B)}}var Ae=!1,I=-1,Be=5,Pe=-1;function Gt(){return D?!0:!(r.unstable_now()-Pe<Be)}function Tt(){if(D=!1,Ae){var B=r.unstable_now();Pe=B;var W=!0;try{e:{Y=!1,H&&(H=!1,$(I),I=-1),_=!0;var P=U;try{t:{for(ve(B),S=u(x);S!==null&&!(S.expirationTime>B&&Gt());){var ge=S.callback;if(typeof ge=="function"){S.callback=null,U=S.priorityLevel;var Se=ge(S.expirationTime<=B);if(B=r.unstable_now(),typeof Se=="function"){S.callback=Se,ve(B),W=!0;break t}S===u(x)&&s(x),ve(B)}else s(x);S=u(x)}if(S!==null)W=!0;else{var j=u(y);j!==null&&_e(je,j.startTime-B),W=!1}}break e}finally{S=null,U=P,_=!1}W=void 0}}finally{W?Ie():Ae=!1}}}var Ie;if(typeof K=="function")Ie=function(){K(Tt)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,kt=Yt.port2;Yt.port1.onmessage=Tt,Ie=function(){kt.postMessage(null)}}else Ie=function(){V(Tt,0)};function _e(B,W){I=V(function(){B(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(B){switch(U){case 1:case 2:case 3:var W=3;break;default:W=U}var P=U;U=W;try{return B()}finally{U=P}},r.unstable_requestPaint=function(){D=!0},r.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var P=U;U=B;try{return W()}finally{U=P}},r.unstable_scheduleCallback=function(B,W,P){var ge=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?ge+P:ge):P=ge,B){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=P+Se,B={id:T++,callback:W,priorityLevel:B,startTime:P,expirationTime:Se,sortIndex:-1},P>ge?(B.sortIndex=P,c(y,B),u(x)===null&&B===u(y)&&(H?($(I),I=-1):H=!0,_e(je,P-ge))):(B.sortIndex=Se,c(x,B),Y||_||(Y=!0,Ae||(Ae=!0,Ie()))),B},r.unstable_shouldYield=Gt,r.unstable_wrapCallback=function(B){var W=U;return function(){var P=U;U=W;try{return B.apply(this,arguments)}finally{U=P}}}})(Is)),Is}var Tf;function F0(){return Tf||(Tf=1,Ps.exports=K0()),Ps.exports}var ec={exports:{}},et={};var kf;function P0(){if(kf)return et;kf=1;var r=rc();function c(x){var y="https://react.dev/errors/"+x;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+x+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var s={d:{f:u,r:function(){throw Error(c(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},p=Symbol.for("react.portal");function m(x,y,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:S==null?null:""+S,children:x,containerInfo:y,implementation:T}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(x,y){if(x==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,et.createPortal=function(x,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(c(299));return m(x,y,null,T)},et.flushSync=function(x){var y=g.T,T=s.p;try{if(g.T=null,s.p=2,x)return x()}finally{g.T=y,s.p=T,s.d.f()}},et.preconnect=function(x,y){typeof x=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(x,y))},et.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},et.preinit=function(x,y){if(typeof x=="string"&&y&&typeof y.as=="string"){var T=y.as,S=h(T,y.crossOrigin),U=typeof y.integrity=="string"?y.integrity:void 0,_=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(x,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:U,fetchPriority:_}):T==="script"&&s.d.X(x,{crossOrigin:S,integrity:U,fetchPriority:_,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},et.preinitModule=function(x,y){if(typeof x=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=h(y.as,y.crossOrigin);s.d.M(x,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(x)},et.preload=function(x,y){if(typeof x=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,S=h(T,y.crossOrigin);s.d.L(x,T,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},et.preloadModule=function(x,y){if(typeof x=="string")if(y){var T=h(y.as,y.crossOrigin);s.d.m(x,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(x)},et.requestFormReset=function(x){s.d.r(x)},et.unstable_batchedUpdates=function(x,y){return x(y)},et.useFormState=function(x,y,T){return g.H.useFormState(x,y,T)},et.useFormStatus=function(){return g.H.useHostTransitionStatus()},et.version="19.2.4",et}var zf;function I0(){if(zf)return ec.exports;zf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),ec.exports=P0(),ec.exports}var Ef;function eg(){if(Ef)return Xn;Ef=1;var r=F0(),c=rc(),u=I0();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(m(e)!==e)throw Error(s(188))}function y(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,i=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(i=l.return,i!==null){a=i;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return x(l),e;if(o===i)return x(l),t;o=o.sibling}throw Error(s(188))}if(a.return!==i.return)a=l,i=o;else{for(var d=!1,f=l.child;f;){if(f===a){d=!0,a=l,i=o;break}if(f===i){d=!0,i=l,a=o;break}f=f.sibling}if(!d){for(f=o.child;f;){if(f===a){d=!0,a=o,i=l;break}if(f===i){d=!0,i=o,a=l;break}f=f.sibling}if(!d)throw Error(s(189))}}if(a.alternate!==i)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function T(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=T(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,U=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),$=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Pe=Symbol.for("react.activity"),Gt=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Ie(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var Yt=Symbol.for("react.client.reference");function kt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case H:return"Fragment";case V:return"Profiler";case D:return"StrictMode";case je:return"Suspense";case Ae:return"SuspenseList";case Pe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Y:return"Portal";case K:return e.displayName||"Context";case $:return(e._context.displayName||"Context")+".Consumer";case ve:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:kt(e.type)||"Memo";case Be:t=e._payload,e=e._init;try{return kt(e(t))}catch{}}return null}var _e=Array.isArray,B=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},ge=[],Se=-1;function j(e){return{current:e}}function O(e){0>Se||(e.current=ge[Se],ge[Se]=null,Se--)}function G(e,t){Se++,ge[Se]=e.current,e.current=t}var X=j(null),te=j(null),ne=j(null),fe=j(null);function at(e,t){switch(G(ne,t),G(te,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Wp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Wp(t),e=Gp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(X),G(X,e)}function Me(){O(X),O(te),O(ne)}function Pi(e){e.memoizedState!==null&&G(fe,e);var t=X.current,a=Gp(t,e.type);t!==a&&(G(te,e),G(X,a))}function tl(e){te.current===e&&(O(X),O(te)),fe.current===e&&(O(fe),Gn._currentValue=P)}var Ro,xc;function $a(e){if(Ro===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ro=t&&t[1]||"",xc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ro+e+xc}var Bo=!1;function Mo(e,t){if(!e||Bo)return"";Bo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(N){var C=N}Reflect.construct(e,[],L)}else{try{L.call()}catch(N){C=N}e.call(L.prototype)}}else{try{throw Error()}catch(N){C=N}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(N){if(N&&C&&typeof N.stack=="string")return[N.stack,C.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),d=o[0],f=o[1];if(d&&f){var b=d.split(`
`),E=f.split(`
`);for(l=i=0;i<b.length&&!b[i].includes("DetermineComponentFrameRoot");)i++;for(;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;if(i===b.length||l===E.length)for(i=b.length-1,l=E.length-1;1<=i&&0<=l&&b[i]!==E[l];)l--;for(;1<=i&&0<=l;i--,l--)if(b[i]!==E[l]){if(i!==1||l!==1)do if(i--,l--,0>l||b[i]!==E[l]){var R=`
`+b[i].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=i&&0<=l);break}}}finally{Bo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$a(a):""}function wm(e,t){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return e.child!==t&&t!==null?$a("Suspense Fallback"):$a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return Mo(e.type,!1);case 11:return Mo(e.type.render,!1);case 1:return Mo(e.type,!0);case 31:return $a("Activity");default:return""}}function bc(e){try{var t="",a=null;do t+=wm(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Lo=Object.prototype.hasOwnProperty,Do=r.unstable_scheduleCallback,Oo=r.unstable_cancelCallback,Tm=r.unstable_shouldYield,km=r.unstable_requestPaint,ft=r.unstable_now,zm=r.unstable_getCurrentPriorityLevel,yc=r.unstable_ImmediatePriority,vc=r.unstable_UserBlockingPriority,al=r.unstable_NormalPriority,Em=r.unstable_LowPriority,jc=r.unstable_IdlePriority,Cm=r.log,Am=r.unstable_setDisableYieldValue,Ii=null,mt=null;function ba(e){if(typeof Cm=="function"&&Am(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Ii,e)}catch{}}var ht=Math.clz32?Math.clz32:Bm,Nm=Math.log,Rm=Math.LN2;function Bm(e){return e>>>=0,e===0?32:31-(Nm(e)/Rm|0)|0}var il=256,nl=262144,ll=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ol(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var l=0,o=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var f=i&134217727;return f!==0?(i=f&~o,i!==0?l=Ja(i):(d&=f,d!==0?l=Ja(d):a||(a=f&~e,a!==0&&(l=Ja(a))))):(f=i&~o,f!==0?l=Ja(f):d!==0?l=Ja(d):a||(a=i&~e,a!==0&&(l=Ja(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function en(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sc(){var e=ll;return ll<<=1,(ll&62914560)===0&&(ll=4194304),e}function Uo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function tn(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lm(e,t,a,i,l,o){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var f=e.entanglements,b=e.expirationTimes,E=e.hiddenUpdates;for(a=d&~a;0<a;){var R=31-ht(a),L=1<<R;f[R]=0,b[R]=-1;var C=E[R];if(C!==null)for(E[R]=null,R=0;R<C.length;R++){var N=C[R];N!==null&&(N.lane&=-536870913)}a&=~L}i!==0&&wc(e,i,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(d&~t))}function wc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ht(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function Tc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-ht(a),l=1<<i;l&t|e[i]&t&&(e[i]|=t),a&=~l}}function kc(e,t){var a=t&-t;return a=(a&42)!==0?1:_o(a),(a&(e.suspendedLanes|t))!==0?0:a}function _o(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function zc(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:pf(e.type))}function Ec(e,t){var a=W.p;try{return W.p=e,t()}finally{W.p=a}}var ya=Math.random().toString(36).slice(2),Xe="__reactFiber$"+ya,lt="__reactProps$"+ya,fi="__reactContainer$"+ya,Ho="__reactEvents$"+ya,Dm="__reactListeners$"+ya,Om="__reactHandles$"+ya,Cc="__reactResources$"+ya,an="__reactMarker$"+ya;function Wo(e){delete e[Xe],delete e[lt],delete e[Ho],delete e[Dm],delete e[Om]}function mi(e){var t=e[Xe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[fi]||a[Xe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Zp(e);e!==null;){if(a=e[Xe])return a;e=Zp(e)}return t}e=a,a=e.parentNode}return null}function hi(e){if(e=e[Xe]||e[fi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function nn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function gi(e){var t=e[Cc];return t||(t=e[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[an]=!0}var Ac=new Set,Nc={};function Va(e,t){xi(e,t),xi(e+"Capture",t)}function xi(e,t){for(Nc[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var Um=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Bc={};function _m(e){return Lo.call(Bc,e)?!0:Lo.call(Rc,e)?!1:Um.test(e)?Bc[e]=!0:(Rc[e]=!0,!1)}function rl(e,t,a){if(_m(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function sl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Pt(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qm(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,o=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(d){a=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Go(e){if(!e._valueTracker){var t=Mc(e)?"checked":"value";e._valueTracker=qm(e,t,""+e[t])}}function Lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Mc(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hm=/[\n"\\]/g;function Et(e){return e.replace(Hm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yo(e,t,a,i,l,o,d,f){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+zt(t)):e.value!==""+zt(t)&&(e.value=""+zt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?$o(e,d,zt(t)):a!=null?$o(e,d,zt(a)):i!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+zt(f):e.removeAttribute("name")}function Dc(e,t,a,i,l,o,d,f){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null)){Go(e);return}a=a!=null?""+zt(a):"",t=t!=null?""+zt(t):a,f||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=f?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Go(e)}function $o(e,t,a){t==="number"&&cl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function bi(e,t,a,i){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&i&&(e[a].defaultSelected=!0)}else{for(a=""+zt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Oc(e,t,a){if(t!=null&&(t=""+zt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+zt(a):""}function Uc(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(s(92));if(_e(i)){if(1<i.length)throw Error(s(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=zt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Go(e)}function yi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Wm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _c(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Wm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function qc(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&a[l]!==i&&_c(e,l,i)}else for(var o in t)t.hasOwnProperty(o)&&_c(e,o,t[o])}function Jo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ym=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return Ym.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Vo=null;function Xo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,ji=null;function Hc(e){var t=hi(e);if(t&&(e=t.stateNode)){var a=e[lt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Et(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var l=i[lt]||null;if(!l)throw Error(s(90));Yo(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Lc(i)}break e;case"textarea":Oc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&bi(e,!!a.multiple,t,!1)}}}var Qo=!1;function Wc(e,t,a){if(Qo)return e(t,a);Qo=!0;try{var i=e(t);return i}finally{if(Qo=!1,(vi!==null||ji!==null)&&(Fl(),vi&&(t=vi,e=ji,ji=vi=null,Hc(t),e)))for(t=0;t<e.length;t++)Hc(e[t])}}function ln(e,t){var a=e.stateNode;if(a===null)return null;var i=a[lt]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=!1;if(ea)try{var on={};Object.defineProperty(on,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",on,on),window.removeEventListener("test",on,on)}catch{Zo=!1}var va=null,Ko=null,ul=null;function Gc(){if(ul)return ul;var e,t=Ko,a=t.length,i,l="value"in va?va.value:va.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var d=a-e;for(i=1;i<=d&&t[a-i]===l[o-i];i++);return ul=l.slice(e,1<i?1-i:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function Yc(){return!1}function ot(e){function t(a,i,l,o,d){this._reactName=a,this._targetInst=l,this.type=i,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(a=e[f],this[f]=a?a(o):o[f]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fl:Yc,this.isPropagationStopped=Yc,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),t}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=ot(Xa),rn=S({},Xa,{view:0,detail:0}),$m=ot(rn),Fo,Po,sn,hl=S({},rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&e.type==="mousemove"?(Fo=e.screenX-sn.screenX,Po=e.screenY-sn.screenY):Po=Fo=0,sn=e),Fo)},movementY:function(e){return"movementY"in e?e.movementY:Po}}),$c=ot(hl),Jm=S({},hl,{dataTransfer:0}),Vm=ot(Jm),Xm=S({},rn,{relatedTarget:0}),Io=ot(Xm),Qm=S({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=ot(Qm),Km=S({},Xa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fm=ot(Km),Pm=S({},Xa,{data:0}),Jc=ot(Pm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},th={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ah(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=th[e])?!!t[e]:!1}function er(){return ah}var ih=S({},rn,{key:function(e){if(e.key){var t=Im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=ot(ih),lh=S({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=ot(lh),oh=S({},rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),rh=ot(oh),sh=S({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=ot(sh),dh=S({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=ot(dh),ph=S({},Xa,{newState:0,oldState:0}),fh=ot(ph),mh=[9,13,27,32],tr=ea&&"CompositionEvent"in window,cn=null;ea&&"documentMode"in document&&(cn=document.documentMode);var hh=ea&&"TextEvent"in window&&!cn,Xc=ea&&(!tr||cn&&8<cn&&11>=cn),Qc=" ",Zc=!1;function Kc(e,t){switch(e){case"keyup":return mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Si=!1;function gh(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Zc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Zc?null:e;default:return null}}function xh(e,t){if(Si)return e==="compositionend"||!tr&&Kc(e,t)?(e=Gc(),ul=Ko=va=null,Si=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xc&&t.locale!=="ko"?null:t.data;default:return null}}var bh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bh[e.type]:t==="textarea"}function Ic(e,t,a,i){vi?ji?ji.push(i):ji=[i]:vi=i,t=no(t,"onChange"),0<t.length&&(a=new ml("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var dn=null,un=null;function yh(e){Dp(e,0)}function gl(e){var t=nn(e);if(Lc(t))return e}function ed(e,t){if(e==="change")return t}var td=!1;if(ea){var ar;if(ea){var ir="oninput"in document;if(!ir){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),ir=typeof ad.oninput=="function"}ar=ir}else ar=!1;td=ar&&(!document.documentMode||9<document.documentMode)}function id(){dn&&(dn.detachEvent("onpropertychange",nd),un=dn=null)}function nd(e){if(e.propertyName==="value"&&gl(un)){var t=[];Ic(t,un,e,Xo(e)),Wc(yh,t)}}function vh(e,t,a){e==="focusin"?(id(),dn=t,un=a,dn.attachEvent("onpropertychange",nd)):e==="focusout"&&id()}function jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gl(un)}function Sh(e,t){if(e==="click")return gl(t)}function wh(e,t){if(e==="input"||e==="change")return gl(t)}function Th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Th;function pn(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var l=a[i];if(!Lo.call(t,l)||!gt(e[l],t[l]))return!1}return!0}function ld(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function od(e,t){var a=ld(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ld(a)}}function rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=cl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=cl(e.document)}return t}function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kh=ea&&"documentMode"in document&&11>=document.documentMode,wi=null,lr=null,fn=null,or=!1;function cd(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;or||wi==null||wi!==cl(i)||(i=wi,"selectionStart"in i&&nr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fn&&pn(fn,i)||(fn=i,i=no(lr,"onSelect"),0<i.length&&(t=new ml("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=wi)))}function Qa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Ti={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},rr={},dd={};ea&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Za(e){if(rr[e])return rr[e];if(!Ti[e])return e;var t=Ti[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in dd)return rr[e]=t[a];return e}var ud=Za("animationend"),pd=Za("animationiteration"),fd=Za("animationstart"),zh=Za("transitionrun"),Eh=Za("transitionstart"),Ch=Za("transitioncancel"),md=Za("transitionend"),hd=new Map,sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");sr.push("scrollEnd");function Ut(e,t){hd.set(e,t),Va(t,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ct=[],ki=0,cr=0;function bl(){for(var e=ki,t=cr=ki=0;t<e;){var a=Ct[t];Ct[t++]=null;var i=Ct[t];Ct[t++]=null;var l=Ct[t];Ct[t++]=null;var o=Ct[t];if(Ct[t++]=null,i!==null&&l!==null){var d=i.pending;d===null?l.next=l:(l.next=d.next,d.next=l),i.pending=l}o!==0&&gd(a,l,o)}}function yl(e,t,a,i){Ct[ki++]=e,Ct[ki++]=t,Ct[ki++]=a,Ct[ki++]=i,cr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function dr(e,t,a,i){return yl(e,t,a,i),vl(e)}function Ka(e,t){return yl(e,null,null,t),vl(e)}function gd(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,i=o.alternate,i!==null&&(i.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-ht(a),e=o.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=a|536870912),o):null}function vl(e){if(50<Dn)throw Dn=0,ys=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var zi={};function Ah(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,a,i){return new Ah(e,t,a,i)}function ur(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,t){var a=e.alternate;return a===null?(a=xt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function xd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jl(e,t,a,i,l,o){var d=0;if(i=e,typeof e=="function")ur(e)&&(d=1);else if(typeof e=="string")d=L0(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Pe:return e=xt(31,a,t,l),e.elementType=Pe,e.lanes=o,e;case H:return Fa(a.children,l,o,t);case D:d=8,l|=24;break;case V:return e=xt(12,a,t,l|2),e.elementType=V,e.lanes=o,e;case je:return e=xt(13,a,t,l),e.elementType=je,e.lanes=o,e;case Ae:return e=xt(19,a,t,l),e.elementType=Ae,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:d=10;break e;case $:d=9;break e;case ve:d=11;break e;case I:d=14;break e;case Be:d=16,i=null;break e}d=29,a=Error(s(130,e===null?"null":typeof e,"")),i=null}return t=xt(d,a,t,l),t.elementType=e,t.type=i,t.lanes=o,t}function Fa(e,t,a,i){return e=xt(7,e,i,t),e.lanes=a,e}function pr(e,t,a){return e=xt(6,e,null,t),e.lanes=a,e}function bd(e){var t=xt(18,null,null,0);return t.stateNode=e,t}function fr(e,t,a){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yd=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var a=yd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:bc(t)},yd.set(e,t),t)}return{value:e,source:t,stack:bc(t)}}var Ei=[],Ci=0,Sl=null,mn=0,Nt=[],Rt=0,ja=null,$t=1,Jt="";function aa(e,t){Ei[Ci++]=mn,Ei[Ci++]=Sl,Sl=e,mn=t}function vd(e,t,a){Nt[Rt++]=$t,Nt[Rt++]=Jt,Nt[Rt++]=ja,ja=e;var i=$t;e=Jt;var l=32-ht(i)-1;i&=~(1<<l),a+=1;var o=32-ht(t)+l;if(30<o){var d=l-l%5;o=(i&(1<<d)-1).toString(32),i>>=d,l-=d,$t=1<<32-ht(t)+l|a<<l|i,Jt=o+e}else $t=1<<o|a<<l|i,Jt=e}function mr(e){e.return!==null&&(aa(e,1),vd(e,1,0))}function hr(e){for(;e===Sl;)Sl=Ei[--Ci],Ei[Ci]=null,mn=Ei[--Ci],Ei[Ci]=null;for(;e===ja;)ja=Nt[--Rt],Nt[Rt]=null,Jt=Nt[--Rt],Nt[Rt]=null,$t=Nt[--Rt],Nt[Rt]=null}function jd(e,t){Nt[Rt++]=$t,Nt[Rt++]=Jt,Nt[Rt++]=ja,$t=t.id,Jt=t.overflow,ja=e}var Qe=null,ke=null,ce=!1,Sa=null,Bt=!1,gr=Error(s(519));function wa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hn(At(t,e)),gr}function Sd(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Xe]=e,t[lt]=i,a){case"dialog":oe("cancel",t),oe("close",t);break;case"iframe":case"object":case"embed":oe("load",t);break;case"video":case"audio":for(a=0;a<Un.length;a++)oe(Un[a],t);break;case"source":oe("error",t);break;case"img":case"image":case"link":oe("error",t),oe("load",t);break;case"details":oe("toggle",t);break;case"input":oe("invalid",t),Dc(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":oe("invalid",t);break;case"textarea":oe("invalid",t),Uc(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||qp(t.textContent,a)?(i.popover!=null&&(oe("beforetoggle",t),oe("toggle",t)),i.onScroll!=null&&oe("scroll",t),i.onScrollEnd!=null&&oe("scrollend",t),i.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||wa(e,!0)}function wd(e){for(Qe=e.return;Qe;)switch(Qe.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:Qe=Qe.return}}function Ai(e){if(e!==Qe)return!1;if(!ce)return wd(e),ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ls(e.type,e.memoizedProps)),a=!a),a&&ke&&wa(e),wd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ke=Qp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ke=Qp(e)}else t===27?(t=ke,Ua(e.type)?(e=qs,qs=null,ke=e):ke=t):ke=Qe?Lt(e.stateNode.nextSibling):null;return!0}function Pa(){ke=Qe=null,ce=!1}function xr(){var e=Sa;return e!==null&&(dt===null?dt=e:dt.push.apply(dt,e),Sa=null),e}function hn(e){Sa===null?Sa=[e]:Sa.push(e)}var br=j(null),Ia=null,ia=null;function Ta(e,t,a){G(br,t._currentValue),t._currentValue=a}function na(e){e._currentValue=br.current,O(br)}function yr(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function vr(e,t,a,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var d=l.child;o=o.firstContext;e:for(;o!==null;){var f=o;o=l;for(var b=0;b<t.length;b++)if(f.context===t[b]){o.lanes|=a,f=o.alternate,f!==null&&(f.lanes|=a),yr(o.return,a,e),i||(d=null);break e}o=f.next}}else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=a,o=d.alternate,o!==null&&(o.lanes|=a),yr(d,a,e),d=null}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===e){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}}function Ni(e,t,a,i){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var d=l.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var f=l.type;gt(l.pendingProps.value,d.value)||(e!==null?e.push(f):e=[f])}}else if(l===fe.current){if(d=l.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Gn):e=[Gn])}l=l.return}e!==null&&vr(t,e,a,i),t.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ei(e){Ia=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ze(e){return Td(Ia,e)}function Tl(e,t){return Ia===null&&ei(e),Td(e,t)}function Td(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ia===null){if(e===null)throw Error(s(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return a}var Nh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Rh=r.unstable_scheduleCallback,Bh=r.unstable_NormalPriority,qe={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jr(){return{controller:new Nh,data:new Map,refCount:0}}function gn(e){e.refCount--,e.refCount===0&&Rh(Bh,function(){e.controller.abort()})}var xn=null,Sr=0,Ri=0,Bi=null;function Mh(e,t){if(xn===null){var a=xn=[];Sr=0,Ri=ks(),Bi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Sr++,t.then(kd,kd),t}function kd(){if(--Sr===0&&xn!==null){Bi!==null&&(Bi.status="fulfilled");var e=xn;xn=null,Ri=0,Bi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lh(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),i}var zd=B.S;B.S=function(e,t){cp=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mh(e,t),zd!==null&&zd(e,t)};var ti=j(null);function wr(){var e=ti.current;return e!==null?e:we.pooledCache}function kl(e,t){t===null?G(ti,ti.current):G(ti,t.pool)}function Ed(){var e=wr();return e===null?null:{parent:qe._currentValue,pool:e}}var Mi=Error(s(460)),Tr=Error(s(474)),zl=Error(s(542)),El={then:function(){}};function Cd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ad(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(It,It),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rd(e),e}throw ii=t,Mi}}function ai(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ii=a,Mi):a}}var ii=null;function Nd(){if(ii===null)throw Error(s(459));var e=ii;return ii=null,e}function Rd(e){if(e===Mi||e===zl)throw Error(s(483))}var Li=null,bn=0;function Cl(e){var t=bn;return bn+=1,Li===null&&(Li=[]),Ad(Li,e,t)}function yn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Al(e,t){throw t.$$typeof===U?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bd(e){function t(k,v){if(e){var z=k.deletions;z===null?(k.deletions=[v],k.flags|=16):z.push(v)}}function a(k,v){if(!e)return null;for(;v!==null;)t(k,v),v=v.sibling;return null}function i(k){for(var v=new Map;k!==null;)k.key!==null?v.set(k.key,k):v.set(k.index,k),k=k.sibling;return v}function l(k,v){return k=ta(k,v),k.index=0,k.sibling=null,k}function o(k,v,z){return k.index=z,e?(z=k.alternate,z!==null?(z=z.index,z<v?(k.flags|=67108866,v):z):(k.flags|=67108866,v)):(k.flags|=1048576,v)}function d(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function f(k,v,z,M){return v===null||v.tag!==6?(v=pr(z,k.mode,M),v.return=k,v):(v=l(v,z),v.return=k,v)}function b(k,v,z,M){var Z=z.type;return Z===H?R(k,v,z.props.children,M,z.key):v!==null&&(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Be&&ai(Z)===v.type)?(v=l(v,z.props),yn(v,z),v.return=k,v):(v=jl(z.type,z.key,z.props,null,k.mode,M),yn(v,z),v.return=k,v)}function E(k,v,z,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==z.containerInfo||v.stateNode.implementation!==z.implementation?(v=fr(z,k.mode,M),v.return=k,v):(v=l(v,z.children||[]),v.return=k,v)}function R(k,v,z,M,Z){return v===null||v.tag!==7?(v=Fa(z,k.mode,M,Z),v.return=k,v):(v=l(v,z),v.return=k,v)}function L(k,v,z){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=pr(""+v,k.mode,z),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case _:return z=jl(v.type,v.key,v.props,null,k.mode,z),yn(z,v),z.return=k,z;case Y:return v=fr(v,k.mode,z),v.return=k,v;case Be:return v=ai(v),L(k,v,z)}if(_e(v)||Ie(v))return v=Fa(v,k.mode,z,null),v.return=k,v;if(typeof v.then=="function")return L(k,Cl(v),z);if(v.$$typeof===K)return L(k,Tl(k,v),z);Al(k,v)}return null}function C(k,v,z,M){var Z=v!==null?v.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return Z!==null?null:f(k,v,""+z,M);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _:return z.key===Z?b(k,v,z,M):null;case Y:return z.key===Z?E(k,v,z,M):null;case Be:return z=ai(z),C(k,v,z,M)}if(_e(z)||Ie(z))return Z!==null?null:R(k,v,z,M,null);if(typeof z.then=="function")return C(k,v,Cl(z),M);if(z.$$typeof===K)return C(k,v,Tl(k,z),M);Al(k,z)}return null}function N(k,v,z,M,Z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return k=k.get(z)||null,f(v,k,""+M,Z);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case _:return k=k.get(M.key===null?z:M.key)||null,b(v,k,M,Z);case Y:return k=k.get(M.key===null?z:M.key)||null,E(v,k,M,Z);case Be:return M=ai(M),N(k,v,z,M,Z)}if(_e(M)||Ie(M))return k=k.get(z)||null,R(v,k,M,Z,null);if(typeof M.then=="function")return N(k,v,z,Cl(M),Z);if(M.$$typeof===K)return N(k,v,z,Tl(v,M),Z);Al(v,M)}return null}function J(k,v,z,M){for(var Z=null,de=null,Q=v,ie=v=0,se=null;Q!==null&&ie<z.length;ie++){Q.index>ie?(se=Q,Q=null):se=Q.sibling;var ue=C(k,Q,z[ie],M);if(ue===null){Q===null&&(Q=se);break}e&&Q&&ue.alternate===null&&t(k,Q),v=o(ue,v,ie),de===null?Z=ue:de.sibling=ue,de=ue,Q=se}if(ie===z.length)return a(k,Q),ce&&aa(k,ie),Z;if(Q===null){for(;ie<z.length;ie++)Q=L(k,z[ie],M),Q!==null&&(v=o(Q,v,ie),de===null?Z=Q:de.sibling=Q,de=Q);return ce&&aa(k,ie),Z}for(Q=i(Q);ie<z.length;ie++)se=N(Q,k,ie,z[ie],M),se!==null&&(e&&se.alternate!==null&&Q.delete(se.key===null?ie:se.key),v=o(se,v,ie),de===null?Z=se:de.sibling=se,de=se);return e&&Q.forEach(function(Ga){return t(k,Ga)}),ce&&aa(k,ie),Z}function F(k,v,z,M){if(z==null)throw Error(s(151));for(var Z=null,de=null,Q=v,ie=v=0,se=null,ue=z.next();Q!==null&&!ue.done;ie++,ue=z.next()){Q.index>ie?(se=Q,Q=null):se=Q.sibling;var Ga=C(k,Q,ue.value,M);if(Ga===null){Q===null&&(Q=se);break}e&&Q&&Ga.alternate===null&&t(k,Q),v=o(Ga,v,ie),de===null?Z=Ga:de.sibling=Ga,de=Ga,Q=se}if(ue.done)return a(k,Q),ce&&aa(k,ie),Z;if(Q===null){for(;!ue.done;ie++,ue=z.next())ue=L(k,ue.value,M),ue!==null&&(v=o(ue,v,ie),de===null?Z=ue:de.sibling=ue,de=ue);return ce&&aa(k,ie),Z}for(Q=i(Q);!ue.done;ie++,ue=z.next())ue=N(Q,k,ie,ue.value,M),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?ie:ue.key),v=o(ue,v,ie),de===null?Z=ue:de.sibling=ue,de=ue);return e&&Q.forEach(function(J0){return t(k,J0)}),ce&&aa(k,ie),Z}function ye(k,v,z,M){if(typeof z=="object"&&z!==null&&z.type===H&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case _:e:{for(var Z=z.key;v!==null;){if(v.key===Z){if(Z=z.type,Z===H){if(v.tag===7){a(k,v.sibling),M=l(v,z.props.children),M.return=k,k=M;break e}}else if(v.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Be&&ai(Z)===v.type){a(k,v.sibling),M=l(v,z.props),yn(M,z),M.return=k,k=M;break e}a(k,v);break}else t(k,v);v=v.sibling}z.type===H?(M=Fa(z.props.children,k.mode,M,z.key),M.return=k,k=M):(M=jl(z.type,z.key,z.props,null,k.mode,M),yn(M,z),M.return=k,k=M)}return d(k);case Y:e:{for(Z=z.key;v!==null;){if(v.key===Z)if(v.tag===4&&v.stateNode.containerInfo===z.containerInfo&&v.stateNode.implementation===z.implementation){a(k,v.sibling),M=l(v,z.children||[]),M.return=k,k=M;break e}else{a(k,v);break}else t(k,v);v=v.sibling}M=fr(z,k.mode,M),M.return=k,k=M}return d(k);case Be:return z=ai(z),ye(k,v,z,M)}if(_e(z))return J(k,v,z,M);if(Ie(z)){if(Z=Ie(z),typeof Z!="function")throw Error(s(150));return z=Z.call(z),F(k,v,z,M)}if(typeof z.then=="function")return ye(k,v,Cl(z),M);if(z.$$typeof===K)return ye(k,v,Tl(k,z),M);Al(k,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,v!==null&&v.tag===6?(a(k,v.sibling),M=l(v,z),M.return=k,k=M):(a(k,v),M=pr(z,k.mode,M),M.return=k,k=M),d(k)):a(k,v)}return function(k,v,z,M){try{bn=0;var Z=ye(k,v,z,M);return Li=null,Z}catch(Q){if(Q===Mi||Q===zl)throw Q;var de=xt(29,Q,null,k.mode);return de.lanes=M,de.return=k,de}}}var ni=Bd(!0),Md=Bd(!1),ka=!1;function kr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=vl(e),gd(e,null,a),t}return yl(e,i,t,a),vl(e)}function vn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Tc(e,a)}}function Er(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=d:o=o.next=d,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Cr=!1;function jn(){if(Cr){var e=Bi;if(e!==null)throw e}}function Sn(e,t,a,i){Cr=!1;var l=e.updateQueue;ka=!1;var o=l.firstBaseUpdate,d=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var b=f,E=b.next;b.next=null,d===null?o=E:d.next=E,d=b;var R=e.alternate;R!==null&&(R=R.updateQueue,f=R.lastBaseUpdate,f!==d&&(f===null?R.firstBaseUpdate=E:f.next=E,R.lastBaseUpdate=b))}if(o!==null){var L=l.baseState;d=0,R=E=b=null,f=o;do{var C=f.lane&-536870913,N=C!==f.lane;if(N?(re&C)===C:(i&C)===C){C!==0&&C===Ri&&(Cr=!0),R!==null&&(R=R.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var J=e,F=f;C=t;var ye=a;switch(F.tag){case 1:if(J=F.payload,typeof J=="function"){L=J.call(ye,L,C);break e}L=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=F.payload,C=typeof J=="function"?J.call(ye,L,C):J,C==null)break e;L=S({},L,C);break e;case 2:ka=!0}}C=f.callback,C!==null&&(e.flags|=64,N&&(e.flags|=8192),N=l.callbacks,N===null?l.callbacks=[C]:N.push(C))}else N={lane:C,tag:f.tag,payload:f.payload,callback:f.callback,next:null},R===null?(E=R=N,b=L):R=R.next=N,d|=C;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;N=f,f=N.next,N.next=null,l.lastBaseUpdate=N,l.shared.pending=null}}while(!0);R===null&&(b=L),l.baseState=b,l.firstBaseUpdate=E,l.lastBaseUpdate=R,o===null&&(l.shared.lanes=0),Ba|=d,e.lanes=d,e.memoizedState=L}}function Ld(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Dd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ld(a[e],t)}var Di=j(null),Nl=j(0);function Od(e,t){e=fa,G(Nl,e),G(Di,t),fa=e|t.baseLanes}function Ar(){G(Nl,fa),G(Di,Di.current)}function Nr(){fa=Nl.current,O(Di),O(Nl)}var bt=j(null),Mt=null;function Ca(e){var t=e.alternate;G(Le,Le.current&1),G(bt,e),Mt===null&&(t===null||Di.current!==null||t.memoizedState!==null)&&(Mt=e)}function Rr(e){G(Le,Le.current),G(bt,e),Mt===null&&(Mt=e)}function Ud(e){e.tag===22?(G(Le,Le.current),G(bt,e),Mt===null&&(Mt=e)):Aa()}function Aa(){G(Le,Le.current),G(bt,bt.current)}function yt(e){O(bt),Mt===e&&(Mt=null),O(Le)}var Le=j(0);function Rl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Us(a)||_s(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var la=0,ae=null,xe=null,He=null,Bl=!1,Oi=!1,li=!1,Ml=0,wn=0,Ui=null,Dh=0;function Ne(){throw Error(s(321))}function Br(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!gt(e[a],t[a]))return!1;return!0}function Mr(e,t,a,i,l,o){return la=o,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?vu:Qr,li=!1,o=a(i,l),li=!1,Oi&&(o=qd(t,a,i,l)),_d(e),o}function _d(e){B.H=zn;var t=xe!==null&&xe.next!==null;if(la=0,He=xe=ae=null,Bl=!1,wn=0,Ui=null,t)throw Error(s(300));e===null||We||(e=e.dependencies,e!==null&&wl(e)&&(We=!0))}function qd(e,t,a,i){ae=e;var l=0;do{if(Oi&&(Ui=null),wn=0,Oi=!1,25<=l)throw Error(s(301));if(l+=1,He=xe=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=ju,o=t(a,i)}while(Oi);return o}function Oh(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?Tn(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(ae.flags|=1024),t}function Lr(){var e=Ml!==0;return Ml=0,e}function Dr(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Or(e){if(Bl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bl=!1}la=0,He=xe=ae=null,Oi=!1,wn=Ml=0,Ui=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?ae.memoizedState=He=e:He=He.next=e,He}function De(){if(xe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=He===null?ae.memoizedState:He.next;if(t!==null)He=t,xe=e;else{if(e===null)throw ae.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},He===null?ae.memoizedState=He=e:He=He.next=e}return He}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tn(e){var t=wn;return wn+=1,Ui===null&&(Ui=[]),e=Ad(Ui,e,t),t=ae,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?vu:Qr),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tn(e);if(e.$$typeof===K)return Ze(e)}throw Error(s(438,String(e)))}function Ur(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Ll(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Gt;return t.index++,a}function oa(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=De();return _r(t,xe,e)}function _r(e,t,a){var i=e.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=a;var l=e.baseQueue,o=i.pending;if(o!==null){if(l!==null){var d=l.next;l.next=o.next,o.next=d}t.baseQueue=l=o,i.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var f=d=null,b=null,E=t,R=!1;do{var L=E.lane&-536870913;if(L!==E.lane?(re&L)===L:(la&L)===L){var C=E.revertLane;if(C===0)b!==null&&(b=b.next={lane:0,revertLane:0,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),L===Ri&&(R=!0);else if((la&C)===C){E=E.next,C===Ri&&(R=!0);continue}else L={lane:0,revertLane:E.revertLane,gesture:null,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(f=b=L,d=o):b=b.next=L,ae.lanes|=C,Ba|=C;L=E.action,li&&a(o,L),o=E.hasEagerState?E.eagerState:a(o,L)}else C={lane:L,revertLane:E.revertLane,gesture:E.gesture,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},b===null?(f=b=C,d=o):b=b.next=C,ae.lanes|=L,Ba|=L;E=E.next}while(E!==null&&E!==t);if(b===null?d=o:b.next=f,!gt(o,e.memoizedState)&&(We=!0,R&&(a=Bi,a!==null)))throw a;e.memoizedState=o,e.baseState=d,e.baseQueue=b,i.lastRenderedState=o}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function qr(e){var t=De(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var i=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var d=l=l.next;do o=e(o,d.action),d=d.next;while(d!==l);gt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,i]}function Hd(e,t,a){var i=ae,l=De(),o=ce;if(o){if(a===void 0)throw Error(s(407));a=a()}else a=t();var d=!gt((xe||l).memoizedState,a);if(d&&(l.memoizedState=a,We=!0),l=l.queue,Gr(Yd.bind(null,i,l,e),[e]),l.getSnapshot!==t||d||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,_i(9,{destroy:void 0},Gd.bind(null,i,l,a,t),null),we===null)throw Error(s(349));o||(la&127)!==0||Wd(i,t,a)}return a}function Wd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=Ll(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gd(e,t,a,i){t.value=a,t.getSnapshot=i,$d(t)&&Jd(e)}function Yd(e,t,a){return a(function(){$d(t)&&Jd(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!gt(e,a)}catch{return!0}}function Jd(e){var t=Ka(e,2);t!==null&&ut(t,e,2)}function Hr(e){var t=it();if(typeof e=="function"){var a=e;if(e=a(),li){ba(!0);try{a()}finally{ba(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function Vd(e,t,a,i){return e.baseState=a,_r(e,xe,typeof i=="function"?i:oa)}function Uh(e,t,a,i,l){if(ql(e))throw Error(s(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){o.listeners.push(d)}};B.T!==null?a(!0):o.isTransition=!1,i(o),a=t.pending,a===null?(o.next=t.pending=o,Xd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Xd(e,t){var a=t.action,i=t.payload,l=e.state;if(t.isTransition){var o=B.T,d={};B.T=d;try{var f=a(l,i),b=B.S;b!==null&&b(d,f),Qd(e,t,f)}catch(E){Wr(e,t,E)}finally{o!==null&&d.types!==null&&(o.types=d.types),B.T=o}}else try{o=a(l,i),Qd(e,t,o)}catch(E){Wr(e,t,E)}}function Qd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Zd(e,t,i)},function(i){return Wr(e,t,i)}):Zd(e,t,a)}function Zd(e,t,a){t.status="fulfilled",t.value=a,Kd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Xd(e,a)))}function Wr(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Kd(t),t=t.next;while(t!==i)}e.action=null}function Kd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Fd(e,t){return t}function Pd(e,t){if(ce){var a=we.formState;if(a!==null){e:{var i=ae;if(ce){if(ke){t:{for(var l=ke,o=Bt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Lt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){ke=Lt(l.nextSibling),i=l.data==="F!";break e}}wa(i)}i=!1}i&&(t=a[0])}}return a=it(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fd,lastRenderedState:t},a.queue=i,a=xu.bind(null,ae,i),i.dispatch=a,i=Hr(!1),o=Xr.bind(null,ae,!1,i.queue),i=it(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,a=Uh.bind(null,ae,l,o,a),l.dispatch=a,i.memoizedState=e,[t,a,!1]}function Id(e){var t=De();return eu(t,xe,e)}function eu(e,t,a){if(t=_r(e,t,Fd)[0],e=Ol(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Tn(t)}catch(d){throw d===Mi?zl:d}else i=t;t=De();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,_i(9,{destroy:void 0},_h.bind(null,l,a),null)),[i,o,e]}function _h(e,t){e.action=t}function tu(e){var t=De(),a=xe;if(a!==null)return eu(t,a,e);De(),t=t.memoizedState,a=De();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function _i(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ae.updateQueue,t===null&&(t=Ll(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function au(){return De().memoizedState}function Ul(e,t,a,i){var l=it();ae.flags|=e,l.memoizedState=_i(1|t,{destroy:void 0},a,i===void 0?null:i)}function _l(e,t,a,i){var l=De();i=i===void 0?null:i;var o=l.memoizedState.inst;xe!==null&&i!==null&&Br(i,xe.memoizedState.deps)?l.memoizedState=_i(t,o,a,i):(ae.flags|=e,l.memoizedState=_i(1|t,o,a,i))}function iu(e,t){Ul(8390656,8,e,t)}function Gr(e,t){_l(2048,8,e,t)}function qh(e){ae.flags|=4;var t=ae.updateQueue;if(t===null)t=Ll(),ae.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function nu(e){var t=De().memoizedState;return qh({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function lu(e,t){return _l(4,2,e,t)}function ou(e,t){return _l(4,4,e,t)}function ru(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function su(e,t,a){a=a!=null?a.concat([e]):null,_l(4,4,ru.bind(null,t,e),a)}function Yr(){}function cu(e,t){var a=De();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Br(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function du(e,t){var a=De();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Br(t,i[1]))return i[0];if(i=e(),li){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[i,t],i}function $r(e,t,a){return a===void 0||(la&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=up(),ae.lanes|=e,Ba|=e,a)}function uu(e,t,a,i){return gt(a,t)?a:Di.current!==null?(e=$r(e,a,i),gt(e,t)||(We=!0),e):(la&42)===0||(la&1073741824)!==0&&(re&261930)===0?(We=!0,e.memoizedState=a):(e=up(),ae.lanes|=e,Ba|=e,t)}function pu(e,t,a,i,l){var o=W.p;W.p=o!==0&&8>o?o:8;var d=B.T,f={};B.T=f,Xr(e,!1,t,a);try{var b=l(),E=B.S;if(E!==null&&E(f,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var R=Lh(b,i);kn(e,t,R,St(e))}else kn(e,t,i,St(e))}catch(L){kn(e,t,{then:function(){},status:"rejected",reason:L},St())}finally{W.p=o,d!==null&&f.types!==null&&(d.types=f.types),B.T=d}}function Hh(){}function Jr(e,t,a,i){if(e.tag!==5)throw Error(s(476));var l=fu(e).queue;pu(e,l,t,P,a===null?Hh:function(){return mu(e),a(i)})}function fu(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function mu(e){var t=fu(e);t.next===null&&(t=e.alternate.memoizedState),kn(e,t.next.queue,{},St())}function Vr(){return Ze(Gn)}function hu(){return De().memoizedState}function gu(){return De().memoizedState}function Wh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=St();e=za(a);var i=Ea(t,e,a);i!==null&&(ut(i,t,a),vn(i,t,a)),t={cache:jr()},e.payload=t;return}t=t.return}}function Gh(e,t,a){var i=St();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)?bu(t,a):(a=dr(e,t,a,i),a!==null&&(ut(a,e,i),yu(a,t,i)))}function xu(e,t,a){var i=St();kn(e,t,a,i)}function kn(e,t,a,i){var l={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(e))bu(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,f=o(d,a);if(l.hasEagerState=!0,l.eagerState=f,gt(f,d))return yl(e,t,l,0),we===null&&bl(),!1}catch{}if(a=dr(e,t,l,i),a!==null)return ut(a,e,i),yu(a,t,i),!0}return!1}function Xr(e,t,a,i){if(i={lane:2,revertLane:ks(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(t)throw Error(s(479))}else t=dr(e,a,i,2),t!==null&&ut(t,e,2)}function ql(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function bu(e,t){Oi=Bl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function yu(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,Tc(e,a)}}var zn={readContext:Ze,use:Dl,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};zn.useEffectEvent=Ne;var vu={readContext:Ze,use:Dl,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ze,useEffect:iu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,ru.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Ul(4194308,4,e,t)},useInsertionEffect:function(e,t){Ul(4,2,e,t)},useMemo:function(e,t){var a=it();t=t===void 0?null:t;var i=e();if(li){ba(!0);try{e()}finally{ba(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=it();if(a!==void 0){var l=a(t);if(li){ba(!0);try{a(t)}finally{ba(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=Gh.bind(null,ae,e),[i.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Hr(e);var t=e.queue,a=xu.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Yr,useDeferredValue:function(e,t){var a=it();return $r(a,e,t)},useTransition:function(){var e=Hr(!1);return e=pu.bind(null,ae,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ae,l=it();if(ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),we===null)throw Error(s(349));(re&127)!==0||Wd(i,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,iu(Yd.bind(null,i,o,e),[e]),i.flags|=2048,_i(9,{destroy:void 0},Gd.bind(null,i,o,a,t),null),a},useId:function(){var e=it(),t=we.identifierPrefix;if(ce){var a=Jt,i=$t;a=(i&~(1<<32-ht(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ml++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Dh++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vr,useFormState:Pd,useActionState:Pd,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Xr.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:Ur,useCacheRefresh:function(){return it().memoizedState=Wh.bind(null,ae)},useEffectEvent:function(e){var t=it(),a={impl:e};return t.memoizedState=a,function(){if((pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qr={readContext:Ze,use:Dl,useCallback:cu,useContext:Ze,useEffect:Gr,useImperativeHandle:su,useInsertionEffect:lu,useLayoutEffect:ou,useMemo:du,useReducer:Ol,useRef:au,useState:function(){return Ol(oa)},useDebugValue:Yr,useDeferredValue:function(e,t){var a=De();return uu(a,xe.memoizedState,e,t)},useTransition:function(){var e=Ol(oa)[0],t=De().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:Hd,useId:hu,useHostTransitionStatus:Vr,useFormState:Id,useActionState:Id,useOptimistic:function(e,t){var a=De();return Vd(a,xe,e,t)},useMemoCache:Ur,useCacheRefresh:gu};Qr.useEffectEvent=nu;var ju={readContext:Ze,use:Dl,useCallback:cu,useContext:Ze,useEffect:Gr,useImperativeHandle:su,useInsertionEffect:lu,useLayoutEffect:ou,useMemo:du,useReducer:qr,useRef:au,useState:function(){return qr(oa)},useDebugValue:Yr,useDeferredValue:function(e,t){var a=De();return xe===null?$r(a,e,t):uu(a,xe.memoizedState,e,t)},useTransition:function(){var e=qr(oa)[0],t=De().memoizedState;return[typeof e=="boolean"?e:Tn(e),t]},useSyncExternalStore:Hd,useId:hu,useHostTransitionStatus:Vr,useFormState:tu,useActionState:tu,useOptimistic:function(e,t){var a=De();return xe!==null?Vd(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ur,useCacheRefresh:gu};ju.useEffectEvent=nu;function Zr(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:S({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Kr={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=St(),l=za(i);l.payload=t,a!=null&&(l.callback=a),t=Ea(e,l,i),t!==null&&(ut(t,e,i),vn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=St(),l=za(i);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ea(e,l,i),t!==null&&(ut(t,e,i),vn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=St(),i=za(a);i.tag=2,t!=null&&(i.callback=t),t=Ea(e,i,a),t!==null&&(ut(t,e,a),vn(t,e,a))}};function Su(e,t,a,i,l,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,o,d):t.prototype&&t.prototype.isPureReactComponent?!pn(a,i)||!pn(l,o):!0}function wu(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&Kr.enqueueReplaceState(t,t.state,null)}function oi(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=S({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function Tu(e){xl(e)}function ku(e){console.error(e)}function zu(e){xl(e)}function Hl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Eu(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Fr(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,t)},a}function Cu(e){return e=za(e),e.tag=3,e}function Au(e,t,a,i){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=i.value;e.payload=function(){return l(o)},e.callback=function(){Eu(t,a,i)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Eu(t,a,i),typeof l!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var f=i.stack;this.componentDidCatch(i.value,{componentStack:f!==null?f:""})})}function Yh(e,t,a,i,l){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Ni(t,a,l,!0),a=bt.current,a!==null){switch(a.tag){case 31:case 13:return Mt===null?Pl():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=l,i===El?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Ss(e,i,l)),!1;case 22:return a.flags|=65536,i===El?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Ss(e,i,l)),!1}throw Error(s(435,a.tag))}return Ss(e,i,l),Pl(),!1}if(ce)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==gr&&(e=Error(s(422),{cause:i}),hn(At(e,a)))):(i!==gr&&(t=Error(s(423),{cause:i}),hn(At(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=At(i,a),l=Fr(e.stateNode,i,l),Er(e,l),Re!==4&&(Re=2)),!1;var o=Error(s(520),{cause:i});if(o=At(o,a),Ln===null?Ln=[o]:Ln.push(o),Re!==4&&(Re=2),t===null)return!0;i=At(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Fr(a.stateNode,i,e),Er(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(Ma===null||!Ma.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Cu(l),Au(l,e,a,i),Er(a,l),!1}a=a.return}while(a!==null);return!1}var Pr=Error(s(461)),We=!1;function Ke(e,t,a,i){t.child=e===null?Md(t,null,a,i):ni(t,e.child,a,i)}function Nu(e,t,a,i,l){a=a.render;var o=t.ref;if("ref"in i){var d={};for(var f in i)f!=="ref"&&(d[f]=i[f])}else d=i;return ei(t),i=Mr(e,t,a,d,o,l),f=Lr(),e!==null&&!We?(Dr(e,t,l),ra(e,t,l)):(ce&&f&&mr(t),t.flags|=1,Ke(e,t,i,l),t.child)}function Ru(e,t,a,i,l){if(e===null){var o=a.type;return typeof o=="function"&&!ur(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Bu(e,t,o,i,l)):(e=jl(a.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!os(e,l)){var d=o.memoizedProps;if(a=a.compare,a=a!==null?a:pn,a(d,i)&&e.ref===t.ref)return ra(e,t,l)}return t.flags|=1,e=ta(o,i),e.ref=t.ref,e.return=t,t.child=e}function Bu(e,t,a,i,l){if(e!==null){var o=e.memoizedProps;if(pn(o,i)&&e.ref===t.ref)if(We=!1,t.pendingProps=i=o,os(e,l))(e.flags&131072)!==0&&(We=!0);else return t.lanes=e.lanes,ra(e,t,l)}return Ir(e,t,a,i,l)}function Mu(e,t,a,i){var l=i.children,o=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(o=o!==null?o.baseLanes|a:a,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~o}else i=0,t.child=null;return Lu(e,t,o,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,o!==null?o.cachePool:null),o!==null?Od(t,o):Ar(),Ud(t);else return i=t.lanes=536870912,Lu(e,t,o!==null?o.baseLanes|a:a,a,i)}else o!==null?(kl(t,o.cachePool),Od(t,o),Aa(),t.memoizedState=null):(e!==null&&kl(t,null),Ar(),Aa());return Ke(e,t,l,a),t.child}function En(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Lu(e,t,a,i,l){var o=wr();return o=o===null?null:{parent:qe._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&kl(t,null),Ar(),Ud(t),e!==null&&Ni(e,t,i,!0),t.childLanes=l,null}function Wl(e,t){return t=Yl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Du(e,t,a){return ni(t,e.child,null,a),e=Wl(t,t.pendingProps),e.flags|=2,yt(t),t.memoizedState=null,e}function $h(e,t,a){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(i.mode==="hidden")return e=Wl(t,i),t.lanes=536870912,En(null,e);if(Rr(t),(e=ke)?(e=Xp(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:$t,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},a=bd(e),a.return=t,t.child=a,Qe=t,ke=null)):e=null,e===null)throw wa(t);return t.lanes=536870912,null}return Wl(t,i)}var o=e.memoizedState;if(o!==null){var d=o.dehydrated;if(Rr(t),l)if(t.flags&256)t.flags&=-257,t=Du(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(We||Ni(e,t,a,!1),l=(a&e.childLanes)!==0,We||l){if(i=we,i!==null&&(d=kc(i,a),d!==0&&d!==o.retryLane))throw o.retryLane=d,Ka(e,d),ut(i,e,d),Pr;Pl(),t=Du(e,t,a)}else e=o.treeContext,ke=Lt(d.nextSibling),Qe=t,ce=!0,Sa=null,Bt=!1,e!==null&&jd(t,e),t=Wl(t,i),t.flags|=4096;return t}return e=ta(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ir(e,t,a,i,l){return ei(t),a=Mr(e,t,a,i,void 0,l),i=Lr(),e!==null&&!We?(Dr(e,t,l),ra(e,t,l)):(ce&&i&&mr(t),t.flags|=1,Ke(e,t,a,l),t.child)}function Ou(e,t,a,i,l,o){return ei(t),t.updateQueue=null,a=qd(t,i,a,l),_d(e),i=Lr(),e!==null&&!We?(Dr(e,t,o),ra(e,t,o)):(ce&&i&&mr(t),t.flags|=1,Ke(e,t,a,o),t.child)}function Uu(e,t,a,i,l){if(ei(t),t.stateNode===null){var o=zi,d=a.contextType;typeof d=="object"&&d!==null&&(o=Ze(d)),o=new a(i,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Kr,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=i,o.state=t.memoizedState,o.refs={},kr(t),d=a.contextType,o.context=typeof d=="object"&&d!==null?Ze(d):zi,o.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(Zr(t,a,d,i),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(d=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),d!==o.state&&Kr.enqueueReplaceState(o,o.state,null),Sn(t,i,o,l),jn(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){o=t.stateNode;var f=t.memoizedProps,b=oi(a,f);o.props=b;var E=o.context,R=a.contextType;d=zi,typeof R=="object"&&R!==null&&(d=Ze(R));var L=a.getDerivedStateFromProps;R=typeof L=="function"||typeof o.getSnapshotBeforeUpdate=="function",f=t.pendingProps!==f,R||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f||E!==d)&&wu(t,o,i,d),ka=!1;var C=t.memoizedState;o.state=C,Sn(t,i,o,l),jn(),E=t.memoizedState,f||C!==E||ka?(typeof L=="function"&&(Zr(t,a,L,i),E=t.memoizedState),(b=ka||Su(t,a,b,i,C,E,d))?(R||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=E),o.props=i,o.state=E,o.context=d,i=b):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{o=t.stateNode,zr(e,t),d=t.memoizedProps,R=oi(a,d),o.props=R,L=t.pendingProps,C=o.context,E=a.contextType,b=zi,typeof E=="object"&&E!==null&&(b=Ze(E)),f=a.getDerivedStateFromProps,(E=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==L||C!==b)&&wu(t,o,i,b),ka=!1,C=t.memoizedState,o.state=C,Sn(t,i,o,l),jn();var N=t.memoizedState;d!==L||C!==N||ka||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof f=="function"&&(Zr(t,a,f,i),N=t.memoizedState),(R=ka||Su(t,a,R,i,C,N,b)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(E||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,N,b),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,N,b)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=N),o.props=i,o.state=N,o.context=b,i=R):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),i=!1)}return o=i,Gl(e,t),i=(t.flags&128)!==0,o||i?(o=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&i?(t.child=ni(t,e.child,null,l),t.child=ni(t,null,a,l)):Ke(e,t,a,l),t.memoizedState=o.state,e=t.child):e=ra(e,t,l),e}function _u(e,t,a,i){return Pa(),t.flags|=256,Ke(e,t,a,i),t.child}var es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ts(e){return{baseLanes:e,cachePool:Ed()}}function as(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=jt),e}function qu(e,t,a){var i=t.pendingProps,l=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),d&&(l=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(l?Ca(t):Aa(),(e=ke)?(e=Xp(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:$t,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},a=bd(e),a.return=t,t.child=a,Qe=t,ke=null)):e=null,e===null)throw wa(t);return _s(e)?t.lanes=32:t.lanes=536870912,null}var f=i.children;return i=i.fallback,l?(Aa(),l=t.mode,f=Yl({mode:"hidden",children:f},l),i=Fa(i,l,a,null),f.return=t,i.return=t,f.sibling=i,t.child=f,i=t.child,i.memoizedState=ts(a),i.childLanes=as(e,d,a),t.memoizedState=es,En(null,i)):(Ca(t),is(t,f))}var b=e.memoizedState;if(b!==null&&(f=b.dehydrated,f!==null)){if(o)t.flags&256?(Ca(t),t.flags&=-257,t=ns(e,t,a)):t.memoizedState!==null?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),f=i.fallback,l=t.mode,i=Yl({mode:"visible",children:i.children},l),f=Fa(f,l,a,null),f.flags|=2,i.return=t,f.return=t,i.sibling=f,t.child=i,ni(t,e.child,null,a),i=t.child,i.memoizedState=ts(a),i.childLanes=as(e,d,a),t.memoizedState=es,t=En(null,i));else if(Ca(t),_s(f)){if(d=f.nextSibling&&f.nextSibling.dataset,d)var E=d.dgst;d=E,i=Error(s(419)),i.stack="",i.digest=d,hn({value:i,source:null,stack:null}),t=ns(e,t,a)}else if(We||Ni(e,t,a,!1),d=(a&e.childLanes)!==0,We||d){if(d=we,d!==null&&(i=kc(d,a),i!==0&&i!==b.retryLane))throw b.retryLane=i,Ka(e,i),ut(d,e,i),Pr;Us(f)||Pl(),t=ns(e,t,a)}else Us(f)?(t.flags|=192,t.child=e.child,t=null):(e=b.treeContext,ke=Lt(f.nextSibling),Qe=t,ce=!0,Sa=null,Bt=!1,e!==null&&jd(t,e),t=is(t,i.children),t.flags|=4096);return t}return l?(Aa(),f=i.fallback,l=t.mode,b=e.child,E=b.sibling,i=ta(b,{mode:"hidden",children:i.children}),i.subtreeFlags=b.subtreeFlags&65011712,E!==null?f=ta(E,f):(f=Fa(f,l,a,null),f.flags|=2),f.return=t,i.return=t,i.sibling=f,t.child=i,En(null,i),i=t.child,f=e.child.memoizedState,f===null?f=ts(a):(l=f.cachePool,l!==null?(b=qe._currentValue,l=l.parent!==b?{parent:b,pool:b}:l):l=Ed(),f={baseLanes:f.baseLanes|a,cachePool:l}),i.memoizedState=f,i.childLanes=as(e,d,a),t.memoizedState=es,En(e.child,i)):(Ca(t),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function is(e,t){return t=Yl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yl(e,t){return e=xt(22,e,null,t),e.lanes=0,e}function ns(e,t,a){return ni(t,e.child,null,a),e=is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hu(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),yr(e.return,t,a)}function ls(e,t,a,i,l,o){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:l,treeForkCount:o}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=a,d.tailMode=l,d.treeForkCount=o)}function Wu(e,t,a){var i=t.pendingProps,l=i.revealOrder,o=i.tail;i=i.children;var d=Le.current,f=(d&2)!==0;if(f?(d=d&1|2,t.flags|=128):d&=1,G(Le,d),Ke(e,t,i,a),i=ce?mn:0,!f&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hu(e,a,t);else if(e.tag===19)Hu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&Rl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ls(t,!1,l,a,o,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Rl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ls(t,!0,a,null,o,i);break;case"together":ls(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ra(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ni(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=ta(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function os(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function Jh(e,t,a){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),Ta(t,qe,e.memoizedState.cache),Pa();break;case 27:case 5:Pi(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:Ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Rr(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qu(e,t,a):(Ca(t),e=ra(e,t,a),e!==null?e.sibling:null);Ca(t);break;case 19:var l=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Ni(e,t,a,!1),i=(a&t.childLanes)!==0),l){if(i)return Wu(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(Le,Le.current),i)break;return null;case 22:return t.lanes=0,Mu(e,t,a,t.pendingProps);case 24:Ta(t,qe,e.memoizedState.cache)}return ra(e,t,a)}function Gu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)We=!0;else{if(!os(e,a)&&(t.flags&128)===0)return We=!1,Jh(e,t,a);We=(e.flags&131072)!==0}else We=!1,ce&&(t.flags&1048576)!==0&&vd(t,mn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=ai(t.elementType),t.type=e,typeof e=="function")ur(e)?(i=oi(e,i),t.tag=1,t=Uu(null,t,e,i,a)):(t.tag=0,t=Ir(null,t,e,i,a));else{if(e!=null){var l=e.$$typeof;if(l===ve){t.tag=11,t=Nu(null,t,e,i,a);break e}else if(l===I){t.tag=14,t=Ru(null,t,e,i,a);break e}}throw t=kt(e)||e,Error(s(306,t,""))}}return t;case 0:return Ir(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,l=oi(i,t.pendingProps),Uu(e,t,i,l,a);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(s(387));i=t.pendingProps;var o=t.memoizedState;l=o.element,zr(e,t),Sn(t,i,null,a);var d=t.memoizedState;if(i=d.cache,Ta(t,qe,i),i!==o.cache&&vr(t,[qe],a,!0),jn(),i=d.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_u(e,t,i,a);break e}else if(i!==l){l=At(Error(s(424)),t),hn(l),t=_u(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ke=Lt(e.firstChild),Qe=t,ce=!0,Sa=null,Bt=!0,a=Md(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Pa(),i===l){t=ra(e,t,a);break e}Ke(e,t,i,a)}t=t.child}return t;case 26:return Gl(e,t),e===null?(a=Ip(t.type,null,t.pendingProps,null))?t.memoizedState=a:ce||(a=t.type,e=t.pendingProps,i=lo(ne.current).createElement(a),i[Xe]=t,i[lt]=e,Fe(i,a,e),Je(i),t.stateNode=i):t.memoizedState=Ip(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Pi(t),e===null&&ce&&(i=t.stateNode=Kp(t.type,t.pendingProps,ne.current),Qe=t,Bt=!0,l=ke,Ua(t.type)?(qs=l,ke=Lt(i.firstChild)):ke=l),Ke(e,t,t.pendingProps.children,a),Gl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((l=i=ke)&&(i=j0(i,t.type,t.pendingProps,Bt),i!==null?(t.stateNode=i,Qe=t,ke=Lt(i.firstChild),Bt=!1,l=!0):l=!1),l||wa(t)),Pi(t),l=t.type,o=t.pendingProps,d=e!==null?e.memoizedProps:null,i=o.children,Ls(l,o)?i=null:d!==null&&Ls(l,d)&&(t.flags|=32),t.memoizedState!==null&&(l=Mr(e,t,Oh,null,null,a),Gn._currentValue=l),Gl(e,t),Ke(e,t,i,a),t.child;case 6:return e===null&&ce&&((e=a=ke)&&(a=S0(a,t.pendingProps,Bt),a!==null?(t.stateNode=a,Qe=t,ke=null,e=!0):e=!1),e||wa(t)),null;case 13:return qu(e,t,a);case 4:return at(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ni(t,null,i,a):Ke(e,t,i,a),t.child;case 11:return Nu(e,t,t.type,t.pendingProps,a);case 7:return Ke(e,t,t.pendingProps,a),t.child;case 8:return Ke(e,t,t.pendingProps.children,a),t.child;case 12:return Ke(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Ta(t,t.type,i.value),Ke(e,t,i.children,a),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,ei(t),l=Ze(l),i=i(l),t.flags|=1,Ke(e,t,i,a),t.child;case 14:return Ru(e,t,t.type,t.pendingProps,a);case 15:return Bu(e,t,t.type,t.pendingProps,a);case 19:return Wu(e,t,a);case 31:return $h(e,t,a);case 22:return Mu(e,t,a,t.pendingProps);case 24:return ei(t),i=Ze(qe),e===null?(l=wr(),l===null&&(l=we,o=jr(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:i,cache:l},kr(t),Ta(t,qe,l)):((e.lanes&a)!==0&&(zr(e,t),Sn(t,null,null,a),jn()),l=e.memoizedState,o=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ta(t,qe,i)):(i=o.cache,Ta(t,qe,i),i!==l.cache&&vr(t,[qe],a,!0))),Ke(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function sa(e){e.flags|=4}function rs(e,t,a,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(hp())e.flags|=8192;else throw ii=El,Tr}else e.flags&=-16777217}function Yu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lf(t))if(hp())e.flags|=8192;else throw ii=El,Tr}function $l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sc():536870912,e.lanes|=t,Gi|=t)}function Cn(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Vh(e,t,a){var i=t.pendingProps;switch(hr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),na(qe),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ai(t)?sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,xr())),ze(t),null;case 26:var l=t.type,o=t.memoizedState;return e===null?(sa(t),o!==null?(ze(t),Yu(t,o)):(ze(t),rs(t,l,null,i,a))):o?o!==e.memoizedState?(sa(t),ze(t),Yu(t,o)):(ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&sa(t),ze(t),rs(t,l,e,i,a)),null;case 27:if(tl(t),a=ne.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&sa(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=X.current,Ai(t)?Sd(t):(e=Kp(l,i,a),t.stateNode=e,sa(t))}return ze(t),null;case 5:if(tl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&sa(t);else{if(!i){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(o=X.current,Ai(t))Sd(t);else{var d=lo(ne.current);switch(o){case 1:o=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:o=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":o=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":o=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":o=d.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?d.createElement(l,{is:i.is}):d.createElement(l)}}o[Xe]=t,o[lt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)o.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=o;e:switch(Fe(o,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&sa(t)}}return ze(t),rs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&sa(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(e=ne.current,Ai(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,l=Qe,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[Xe]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||qp(e.nodeValue,a)),e||wa(t,!0)}else e=lo(e).createTextNode(i),e[Xe]=t,t.stateNode=e}return ze(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Ai(t),a!==null){if(e===null){if(!i)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Xe]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),e=!1}else a=xr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(yt(t),t):(yt(t),null);if((t.flags&128)!==0)throw Error(s(558))}return ze(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ai(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Xe]=t}else Pa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),l=!1}else l=xr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(yt(t),t):(yt(t),null)}return yt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==l&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),$l(t,t.updateQueue),ze(t),null);case 4:return Me(),e===null&&As(t.stateNode.containerInfo),ze(t),null;case 10:return na(t.type),ze(t),null;case 19:if(O(Le),i=t.memoizedState,i===null)return ze(t),null;if(l=(t.flags&128)!==0,o=i.rendering,o===null)if(l)Cn(i,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=Rl(e),o!==null){for(t.flags|=128,Cn(i,!1),e=o.updateQueue,t.updateQueue=e,$l(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)xd(a,e),a=a.sibling;return G(Le,Le.current&1|2),ce&&aa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ft()>Zl&&(t.flags|=128,l=!0,Cn(i,!1),t.lanes=4194304)}else{if(!l)if(e=Rl(o),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,$l(t,e),Cn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ce)return ze(t),null}else 2*ft()-i.renderingStartTime>Zl&&a!==536870912&&(t.flags|=128,l=!0,Cn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(e=i.last,e!==null?e.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ft(),e.sibling=null,a=Le.current,G(Le,l?a&1|2:a&1),ce&&aa(t,i.treeForkCount),e):(ze(t),null);case 22:case 23:return yt(t),Nr(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&$l(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&O(ti),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),na(qe),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Xh(e,t){switch(hr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(qe),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return tl(t),null;case 31:if(t.memoizedState!==null){if(yt(t),t.alternate===null)throw Error(s(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(yt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Pa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Le),null;case 4:return Me(),null;case 10:return na(t.type),null;case 22:case 23:return yt(t),Nr(),e!==null&&O(ti),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(qe),null;case 25:return null;default:return null}}function $u(e,t){switch(hr(t),t.tag){case 3:na(qe),Me();break;case 26:case 27:case 5:tl(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&yt(t);break;case 13:yt(t);break;case 19:O(Le);break;case 10:na(t.type);break;case 22:case 23:yt(t),Nr(),e!==null&&O(ti);break;case 24:na(qe)}}function An(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){i=void 0;var o=a.create,d=a.inst;i=o(),d.destroy=i}a=a.next}while(a!==l)}}catch(f){he(t,t.return,f)}}function Na(e,t,a){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var o=l.next;i=o;do{if((i.tag&e)===e){var d=i.inst,f=d.destroy;if(f!==void 0){d.destroy=void 0,l=t;var b=a,E=f;try{E()}catch(R){he(l,b,R)}}}i=i.next}while(i!==o)}}catch(R){he(t,t.return,R)}}function Ju(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Dd(t,a)}catch(i){he(e,e.return,i)}}}function Vu(e,t,a){a.props=oi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){he(e,t,i)}}function Nn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(l){he(e,t,l)}}function Vt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(l){he(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){he(e,t,l)}else a.current=null}function Xu(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(l){he(e,e.return,l)}}function ss(e,t,a){try{var i=e.stateNode;h0(i,e.type,a,t),i[lt]=t}catch(l){he(e,e.return,l)}}function Qu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ds(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=It));else if(i!==4&&(i===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(ds(e,t,a),e=e.sibling;e!==null;)ds(e,t,a),e=e.sibling}function Jl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jl(e,t,a),e=e.sibling;e!==null;)Jl(e,t,a),e=e.sibling}function Zu(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Fe(t,i,a),t[Xe]=e,t[lt]=a}catch(o){he(e,e.return,o)}}var ca=!1,Ge=!1,us=!1,Ku=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Qh(e,t){if(e=e.containerInfo,Bs=fo,e=sd(e),nr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var l=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var d=0,f=-1,b=-1,E=0,R=0,L=e,C=null;t:for(;;){for(var N;L!==a||l!==0&&L.nodeType!==3||(f=d+l),L!==o||i!==0&&L.nodeType!==3||(b=d+i),L.nodeType===3&&(d+=L.nodeValue.length),(N=L.firstChild)!==null;)C=L,L=N;for(;;){if(L===e)break t;if(C===a&&++E===l&&(f=d),C===o&&++R===i&&(b=d),(N=L.nextSibling)!==null)break;L=C,C=L.parentNode}L=N}a=f===-1||b===-1?null:{start:f,end:b}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ms={focusedElem:e,selectionRange:a},fo=!1,Ve=t;Ve!==null;)if(t=Ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ve=e;else for(;Ve!==null;){switch(t=Ve,o=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,i=a.stateNode;try{var J=oi(a.type,l);e=i.getSnapshotBeforeUpdate(J,o),i.__reactInternalSnapshotBeforeUpdate=e}catch(F){he(a,a.return,F)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Os(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Os(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ve=e;break}Ve=t.return}}function Fu(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),i&4&&An(5,a);break;case 1:if(ua(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){he(a,a.return,d)}else{var l=oi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){he(a,a.return,d)}}i&64&&Ju(a),i&512&&Nn(a,a.return);break;case 3:if(ua(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Dd(e,t)}catch(d){he(a,a.return,d)}}break;case 27:t===null&&i&4&&Zu(a);case 26:case 5:ua(e,a),t===null&&i&4&&Xu(a),i&512&&Nn(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),i&4&&ep(e,a);break;case 13:ua(e,a),i&4&&tp(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=i0.bind(null,a),w0(e,a))));break;case 22:if(i=a.memoizedState!==null||ca,!i){t=t!==null&&t.memoizedState!==null||Ge,l=ca;var o=Ge;ca=i,(Ge=t)&&!o?pa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),ca=l,Ge=o}break;case 30:break;default:ua(e,a)}}function Pu(e){var t=e.alternate;t!==null&&(e.alternate=null,Pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ee=null,rt=!1;function da(e,t,a){for(a=a.child;a!==null;)Iu(e,t,a),a=a.sibling}function Iu(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ii,a)}catch{}switch(a.tag){case 26:Ge||Vt(a,t),da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Vt(a,t);var i=Ee,l=rt;Ua(a.type)&&(Ee=a.stateNode,rt=!1),da(e,t,a),qn(a.stateNode),Ee=i,rt=l;break;case 5:Ge||Vt(a,t);case 6:if(i=Ee,l=rt,Ee=null,da(e,t,a),Ee=i,rt=l,Ee!==null)if(rt)try{(Ee.nodeType===9?Ee.body:Ee.nodeName==="HTML"?Ee.ownerDocument.body:Ee).removeChild(a.stateNode)}catch(o){he(a,t,o)}else try{Ee.removeChild(a.stateNode)}catch(o){he(a,t,o)}break;case 18:Ee!==null&&(rt?(e=Ee,Jp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ki(e)):Jp(Ee,a.stateNode));break;case 4:i=Ee,l=rt,Ee=a.stateNode.containerInfo,rt=!0,da(e,t,a),Ee=i,rt=l;break;case 0:case 11:case 14:case 15:Na(2,a,t),Ge||Na(4,a,t),da(e,t,a);break;case 1:Ge||(Vt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Vu(a,t,i)),da(e,t,a);break;case 21:da(e,t,a);break;case 22:Ge=(i=Ge)||a.memoizedState!==null,da(e,t,a),Ge=i;break;default:da(e,t,a)}}function ep(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ki(e)}catch(a){he(t,t.return,a)}}}function tp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ki(e)}catch(a){he(t,t.return,a)}}function Zh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ku),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ku),t;default:throw Error(s(435,e.tag))}}function Vl(e,t){var a=Zh(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var l=n0.bind(null,e,i);i.then(l,l)}})}function st(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var l=a[i],o=e,d=t,f=d;e:for(;f!==null;){switch(f.tag){case 27:if(Ua(f.type)){Ee=f.stateNode,rt=!1;break e}break;case 5:Ee=f.stateNode,rt=!1;break e;case 3:case 4:Ee=f.stateNode.containerInfo,rt=!0;break e}f=f.return}if(Ee===null)throw Error(s(160));Iu(o,d,l),Ee=null,rt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ap(t,e),t=t.sibling}var _t=null;function ap(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),ct(e),i&4&&(Na(3,e,e.return),An(3,e),Na(5,e,e.return));break;case 1:st(t,e),ct(e),i&512&&(Ge||a===null||Vt(a,a.return)),i&64&&ca&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var l=_t;if(st(t,e),ct(e),i&512&&(Ge||a===null||Vt(a,a.return)),i&4){var o=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":o=l.getElementsByTagName("title")[0],(!o||o[an]||o[Xe]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(i),l.head.insertBefore(o,l.querySelector("head > title"))),Fe(o,i,a),o[Xe]=e,Je(o),i=o;break e;case"link":var d=af("link","href",l).get(i+(a.href||""));if(d){for(var f=0;f<d.length;f++)if(o=d[f],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(f,1);break t}}o=l.createElement(i),Fe(o,i,a),l.head.appendChild(o);break;case"meta":if(d=af("meta","content",l).get(i+(a.content||""))){for(f=0;f<d.length;f++)if(o=d[f],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(f,1);break t}}o=l.createElement(i),Fe(o,i,a),l.head.appendChild(o);break;default:throw Error(s(468,i))}o[Xe]=e,Je(o),i=o}e.stateNode=i}else nf(l,e.type,e.stateNode);else e.stateNode=tf(l,i,e.memoizedProps);else o!==i?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,i===null?nf(l,e.type,e.stateNode):tf(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ss(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),ct(e),i&512&&(Ge||a===null||Vt(a,a.return)),a!==null&&i&4&&ss(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),ct(e),i&512&&(Ge||a===null||Vt(a,a.return)),e.flags&32){l=e.stateNode;try{yi(l,"")}catch(J){he(e,e.return,J)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,ss(e,l,a!==null?a.memoizedProps:l)),i&1024&&(us=!0);break;case 6:if(st(t,e),ct(e),i&4){if(e.stateNode===null)throw Error(s(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(J){he(e,e.return,J)}}break;case 3:if(so=null,l=_t,_t=oo(t.containerInfo),st(t,e),_t=l,ct(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ki(t.containerInfo)}catch(J){he(e,e.return,J)}us&&(us=!1,ip(e));break;case 4:i=_t,_t=oo(e.stateNode.containerInfo),st(t,e),ct(e),_t=i;break;case 12:st(t,e),ct(e);break;case 31:st(t,e),ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vl(e,i)));break;case 13:st(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=ft()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vl(e,i)));break;case 22:l=e.memoizedState!==null;var b=a!==null&&a.memoizedState!==null,E=ca,R=Ge;if(ca=E||l,Ge=R||b,st(t,e),Ge=R,ca=E,ct(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||b||ca||Ge||ri(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){b=a=t;try{if(o=b.stateNode,l)d=o.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{f=b.stateNode;var L=b.memoizedProps.style,C=L!=null&&L.hasOwnProperty("display")?L.display:null;f.style.display=C==null||typeof C=="boolean"?"":(""+C).trim()}}catch(J){he(b,b.return,J)}}}else if(t.tag===6){if(a===null){b=t;try{b.stateNode.nodeValue=l?"":b.memoizedProps}catch(J){he(b,b.return,J)}}}else if(t.tag===18){if(a===null){b=t;try{var N=b.stateNode;l?Vp(N,!0):Vp(b.stateNode,!1)}catch(J){he(b,b.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,Vl(e,a))));break;case 19:st(t,e),ct(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Vl(e,i)));break;case 30:break;case 21:break;default:st(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Qu(i)){a=i;break}i=i.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var l=a.stateNode,o=cs(e);Jl(e,o,l);break;case 5:var d=a.stateNode;a.flags&32&&(yi(d,""),a.flags&=-33);var f=cs(e);Jl(e,f,d);break;case 3:case 4:var b=a.stateNode.containerInfo,E=cs(e);ds(e,E,b);break;default:throw Error(s(161))}}catch(R){he(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ip(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ip(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fu(e,t.alternate,t),t=t.sibling}function ri(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Na(4,t,t.return),ri(t);break;case 1:Vt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Vu(t,t.return,a),ri(t);break;case 27:qn(t.stateNode);case 26:case 5:Vt(t,t.return),ri(t);break;case 22:t.memoizedState===null&&ri(t);break;case 30:ri(t);break;default:ri(t)}e=e.sibling}}function pa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,o=t,d=o.flags;switch(o.tag){case 0:case 11:case 15:pa(l,o,a),An(4,o);break;case 1:if(pa(l,o,a),i=o,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(E){he(i,i.return,E)}if(i=o,l=i.updateQueue,l!==null){var f=i.stateNode;try{var b=l.shared.hiddenCallbacks;if(b!==null)for(l.shared.hiddenCallbacks=null,l=0;l<b.length;l++)Ld(b[l],f)}catch(E){he(i,i.return,E)}}a&&d&64&&Ju(o),Nn(o,o.return);break;case 27:Zu(o);case 26:case 5:pa(l,o,a),a&&i===null&&d&4&&Xu(o),Nn(o,o.return);break;case 12:pa(l,o,a);break;case 31:pa(l,o,a),a&&d&4&&ep(l,o);break;case 13:pa(l,o,a),a&&d&4&&tp(l,o);break;case 22:o.memoizedState===null&&pa(l,o,a),Nn(o,o.return);break;case 30:break;default:pa(l,o,a)}t=t.sibling}}function ps(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&gn(a))}function fs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e))}function qt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)np(e,t,a,i),t=t.sibling}function np(e,t,a,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:qt(e,t,a,i),l&2048&&An(9,t);break;case 1:qt(e,t,a,i);break;case 3:qt(e,t,a,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&gn(e)));break;case 12:if(l&2048){qt(e,t,a,i),e=t.stateNode;try{var o=t.memoizedProps,d=o.id,f=o.onPostCommit;typeof f=="function"&&f(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(b){he(t,t.return,b)}}else qt(e,t,a,i);break;case 31:qt(e,t,a,i);break;case 13:qt(e,t,a,i);break;case 23:break;case 22:o=t.stateNode,d=t.alternate,t.memoizedState!==null?o._visibility&2?qt(e,t,a,i):Rn(e,t):o._visibility&2?qt(e,t,a,i):(o._visibility|=2,qi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&ps(d,t);break;case 24:qt(e,t,a,i),l&2048&&fs(t.alternate,t);break;default:qt(e,t,a,i)}}function qi(e,t,a,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var o=e,d=t,f=a,b=i,E=d.flags;switch(d.tag){case 0:case 11:case 15:qi(o,d,f,b,l),An(8,d);break;case 23:break;case 22:var R=d.stateNode;d.memoizedState!==null?R._visibility&2?qi(o,d,f,b,l):Rn(o,d):(R._visibility|=2,qi(o,d,f,b,l)),l&&E&2048&&ps(d.alternate,d);break;case 24:qi(o,d,f,b,l),l&&E&2048&&fs(d.alternate,d);break;default:qi(o,d,f,b,l)}t=t.sibling}}function Rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,l=i.flags;switch(i.tag){case 22:Rn(a,i),l&2048&&ps(i.alternate,i);break;case 24:Rn(a,i),l&2048&&fs(i.alternate,i);break;default:Rn(a,i)}t=t.sibling}}var Bn=8192;function Hi(e,t,a){if(e.subtreeFlags&Bn)for(e=e.child;e!==null;)lp(e,t,a),e=e.sibling}function lp(e,t,a){switch(e.tag){case 26:Hi(e,t,a),e.flags&Bn&&e.memoizedState!==null&&D0(a,_t,e.memoizedState,e.memoizedProps);break;case 5:Hi(e,t,a);break;case 3:case 4:var i=_t;_t=oo(e.stateNode.containerInfo),Hi(e,t,a),_t=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Bn,Bn=16777216,Hi(e,t,a),Bn=i):Hi(e,t,a));break;default:Hi(e,t,a)}}function op(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ve=i,sp(i,e)}op(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rp(e),e=e.sibling}function rp(e){switch(e.tag){case 0:case 11:case 15:Mn(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Mn(e);break;case 12:Mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xl(e)):Mn(e);break;default:Mn(e)}}function Xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Ve=i,sp(i,e)}op(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Na(8,t,t.return),Xl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(t));break;default:Xl(t)}e=e.sibling}}function sp(e,t){for(;Ve!==null;){var a=Ve;switch(a.tag){case 0:case 11:case 15:Na(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Ve=i;else e:for(a=e;Ve!==null;){i=Ve;var l=i.sibling,o=i.return;if(Pu(i),i===a){Ve=null;break e}if(l!==null){l.return=o,Ve=l;break e}Ve=o}}}var Kh={getCacheForType:function(e){var t=Ze(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ze(qe).controller.signal}},Fh=typeof WeakMap=="function"?WeakMap:Map,pe=0,we=null,le=null,re=0,me=0,vt=null,Ra=!1,Wi=!1,ms=!1,fa=0,Re=0,Ba=0,si=0,hs=0,jt=0,Gi=0,Ln=null,dt=null,gs=!1,Ql=0,cp=0,Zl=1/0,Kl=null,Ma=null,Ye=0,La=null,Yi=null,ma=0,xs=0,bs=null,dp=null,Dn=0,ys=null;function St(){return(pe&2)!==0&&re!==0?re&-re:B.T!==null?ks():zc()}function up(){if(jt===0)if((re&536870912)===0||ce){var e=nl;nl<<=1,(nl&3932160)===0&&(nl=262144),jt=e}else jt=536870912;return e=bt.current,e!==null&&(e.flags|=32),jt}function ut(e,t,a){(e===we&&(me===2||me===9)||e.cancelPendingCommit!==null)&&($i(e,0),Da(e,re,jt,!1)),tn(e,a),((pe&2)===0||e!==we)&&(e===we&&((pe&2)===0&&(si|=a),Re===4&&Da(e,re,jt,!1)),Xt(e))}function pp(e,t,a){if((pe&6)!==0)throw Error(s(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||en(e,t),l=i?e0(e,t):js(e,t,!0),o=i;do{if(l===0){Wi&&!i&&Da(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Ph(a)){l=js(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var f=e;l=Ln;var b=f.current.memoizedState.isDehydrated;if(b&&($i(f,d).flags|=256),d=js(f,d,!1),d!==2){if(ms&&!b){f.errorRecoveryDisabledLanes|=o,si|=o,l=4;break e}o=dt,dt=l,o!==null&&(dt===null?dt=o:dt.push.apply(dt,o))}l=d}if(o=!1,l!==2)continue}}if(l===1){$i(e,0),Da(e,t,0,!0);break}e:{switch(i=e,o=l,o){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Da(i,t,jt,!Ra);break e;case 2:dt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(l=Ql+300-ft(),10<l)){if(Da(i,t,jt,!Ra),ol(i,0,!0)!==0)break e;ma=t,i.timeoutHandle=Yp(fp.bind(null,i,a,dt,Kl,gs,t,jt,si,Gi,Ra,o,"Throttled",-0,0),l);break e}fp(i,a,dt,Kl,gs,t,jt,si,Gi,Ra,o,null,-0,0)}}break}while(!0);Xt(e)}function fp(e,t,a,i,l,o,d,f,b,E,R,L,C,N){if(e.timeoutHandle=-1,L=t.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},lp(t,o,L);var J=(o&62914560)===o?Ql-ft():(o&4194048)===o?cp-ft():0;if(J=O0(L,J),J!==null){ma=o,e.cancelPendingCommit=J(jp.bind(null,e,t,o,a,i,l,d,f,b,R,L,null,C,N)),Da(e,o,d,!E);return}}jp(e,t,o,a,i,l,d,f,b)}function Ph(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var l=a[i],o=l.getSnapshot;l=l.value;try{if(!gt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Da(e,t,a,i){t&=~hs,t&=~si,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var o=31-ht(l),d=1<<o;i[o]=-1,l&=~d}a!==0&&wc(e,a,t)}function Fl(){return(pe&6)===0?(On(0),!1):!0}function vs(){if(le!==null){if(me===0)var e=le.return;else e=le,ia=Ia=null,Or(e),Li=null,bn=0,e=le;for(;e!==null;)$u(e.alternate,e),e=e.return;le=null}}function $i(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,b0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,vs(),we=e,le=a=ta(e.current,null),re=t,me=0,vt=null,Ra=!1,Wi=en(e,t),ms=!1,Gi=jt=hs=si=Ba=Re=0,dt=Ln=null,gs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-ht(i),o=1<<l;t|=e[l],i&=~o}return fa=t,bl(),a}function mp(e,t){ae=null,B.H=zn,t===Mi||t===zl?(t=Nd(),me=3):t===Tr?(t=Nd(),me=4):me=t===Pr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,vt=t,le===null&&(Re=1,Hl(e,At(t,e.current)))}function hp(){var e=bt.current;return e===null?!0:(re&4194048)===re?Mt===null:(re&62914560)===re||(re&536870912)!==0?e===Mt:!1}function gp(){var e=B.H;return B.H=zn,e===null?zn:e}function xp(){var e=B.A;return B.A=Kh,e}function Pl(){Re=4,Ra||(re&4194048)!==re&&bt.current!==null||(Wi=!0),(Ba&134217727)===0&&(si&134217727)===0||we===null||Da(we,re,jt,!1)}function js(e,t,a){var i=pe;pe|=2;var l=gp(),o=xp();(we!==e||re!==t)&&(Kl=null,$i(e,t)),t=!1;var d=Re;e:do try{if(me!==0&&le!==null){var f=le,b=vt;switch(me){case 8:vs(),d=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var E=me;if(me=0,vt=null,Ji(e,f,b,E),a&&Wi){d=0;break e}break;default:E=me,me=0,vt=null,Ji(e,f,b,E)}}Ih(),d=Re;break}catch(R){mp(e,R)}while(!0);return t&&e.shellSuspendCounter++,ia=Ia=null,pe=i,B.H=l,B.A=o,le===null&&(we=null,re=0,bl()),d}function Ih(){for(;le!==null;)bp(le)}function e0(e,t){var a=pe;pe|=2;var i=gp(),l=xp();we!==e||re!==t?(Kl=null,Zl=ft()+500,$i(e,t)):Wi=en(e,t);e:do try{if(me!==0&&le!==null){t=le;var o=vt;t:switch(me){case 1:me=0,vt=null,Ji(e,t,o,1);break;case 2:case 9:if(Cd(o)){me=0,vt=null,yp(t);break}t=function(){me!==2&&me!==9||we!==e||(me=7),Xt(e)},o.then(t,t);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:Cd(o)?(me=0,vt=null,yp(t)):(me=0,vt=null,Ji(e,t,o,7));break;case 5:var d=null;switch(le.tag){case 26:d=le.memoizedState;case 5:case 27:var f=le;if(d?lf(d):f.stateNode.complete){me=0,vt=null;var b=f.sibling;if(b!==null)le=b;else{var E=f.return;E!==null?(le=E,Il(E)):le=null}break t}}me=0,vt=null,Ji(e,t,o,5);break;case 6:me=0,vt=null,Ji(e,t,o,6);break;case 8:vs(),Re=6;break e;default:throw Error(s(462))}}t0();break}catch(R){mp(e,R)}while(!0);return ia=Ia=null,B.H=i,B.A=l,pe=a,le!==null?0:(we=null,re=0,bl(),Re)}function t0(){for(;le!==null&&!Tm();)bp(le)}function bp(e){var t=Gu(e.alternate,e,fa);e.memoizedProps=e.pendingProps,t===null?Il(e):le=t}function yp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ou(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=Ou(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Or(t);default:$u(a,t),t=le=xd(t,fa),t=Gu(a,t,fa)}e.memoizedProps=e.pendingProps,t===null?Il(e):le=t}function Ji(e,t,a,i){ia=Ia=null,Or(t),Li=null,bn=0;var l=t.return;try{if(Yh(e,l,t,a,re)){Re=1,Hl(e,At(a,e.current)),le=null;return}}catch(o){if(l!==null)throw le=l,o;Re=1,Hl(e,At(a,e.current)),le=null;return}t.flags&32768?(ce||i===1?e=!0:Wi||(re&536870912)!==0?e=!1:(Ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=bt.current,i!==null&&i.tag===13&&(i.flags|=16384))),vp(t,e)):Il(t)}function Il(e){var t=e;do{if((t.flags&32768)!==0){vp(t,Ra);return}e=t.return;var a=Vh(t.alternate,t,fa);if(a!==null){le=a;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function vp(e,t){do{var a=Xh(e.alternate,e);if(a!==null){a.flags&=32767,le=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=a}while(e!==null);Re=6,le=null}function jp(e,t,a,i,l,o,d,f,b){e.cancelPendingCommit=null;do eo();while(Ye!==0);if((pe&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(o=t.lanes|t.childLanes,o|=cr,Lm(e,a,o,d,f,b),e===we&&(le=we=null,re=0),Yi=t,La=e,ma=a,xs=o,bs=l,dp=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,l0(al,function(){return zp(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,l=W.p,W.p=2,d=pe,pe|=4;try{Qh(e,t,a)}finally{pe=d,W.p=l,B.T=i}}Ye=1,Sp(),wp(),Tp()}}function Sp(){if(Ye===1){Ye=0;var e=La,t=Yi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var i=W.p;W.p=2;var l=pe;pe|=4;try{ap(t,e);var o=Ms,d=sd(e.containerInfo),f=o.focusedElem,b=o.selectionRange;if(d!==f&&f&&f.ownerDocument&&rd(f.ownerDocument.documentElement,f)){if(b!==null&&nr(f)){var E=b.start,R=b.end;if(R===void 0&&(R=E),"selectionStart"in f)f.selectionStart=E,f.selectionEnd=Math.min(R,f.value.length);else{var L=f.ownerDocument||document,C=L&&L.defaultView||window;if(C.getSelection){var N=C.getSelection(),J=f.textContent.length,F=Math.min(b.start,J),ye=b.end===void 0?F:Math.min(b.end,J);!N.extend&&F>ye&&(d=ye,ye=F,F=d);var k=od(f,F),v=od(f,ye);if(k&&v&&(N.rangeCount!==1||N.anchorNode!==k.node||N.anchorOffset!==k.offset||N.focusNode!==v.node||N.focusOffset!==v.offset)){var z=L.createRange();z.setStart(k.node,k.offset),N.removeAllRanges(),F>ye?(N.addRange(z),N.extend(v.node,v.offset)):(z.setEnd(v.node,v.offset),N.addRange(z))}}}}for(L=[],N=f;N=N.parentNode;)N.nodeType===1&&L.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<L.length;f++){var M=L[f];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}fo=!!Bs,Ms=Bs=null}finally{pe=l,W.p=i,B.T=a}}e.current=t,Ye=2}}function wp(){if(Ye===2){Ye=0;var e=La,t=Yi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var i=W.p;W.p=2;var l=pe;pe|=4;try{Fu(e,t.alternate,t)}finally{pe=l,W.p=i,B.T=a}}Ye=3}}function Tp(){if(Ye===4||Ye===3){Ye=0,km();var e=La,t=Yi,a=ma,i=dp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Yi=La=null,kp(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(Ma=null),qo(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ii,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=B.T,l=W.p,W.p=2,B.T=null;try{for(var o=e.onRecoverableError,d=0;d<i.length;d++){var f=i[d];o(f.value,{componentStack:f.stack})}}finally{B.T=t,W.p=l}}(ma&3)!==0&&eo(),Xt(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===ys?Dn++:(Dn=0,ys=e):Dn=0,On(0)}}function kp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,gn(t)))}function eo(){return Sp(),wp(),Tp(),zp()}function zp(){if(Ye!==5)return!1;var e=La,t=xs;xs=0;var a=qo(ma),i=B.T,l=W.p;try{W.p=32>a?32:a,B.T=null,a=bs,bs=null;var o=La,d=ma;if(Ye=0,Yi=La=null,ma=0,(pe&6)!==0)throw Error(s(331));var f=pe;if(pe|=4,rp(o.current),np(o,o.current,d,a),pe=f,On(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ii,o)}catch{}return!0}finally{W.p=l,B.T=i,kp(e,t)}}function Ep(e,t,a){t=At(a,t),t=Fr(e.stateNode,t,2),e=Ea(e,t,2),e!==null&&(tn(e,2),Xt(e))}function he(e,t,a){if(e.tag===3)Ep(e,e,a);else for(;t!==null;){if(t.tag===3){Ep(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ma===null||!Ma.has(i))){e=At(a,e),a=Cu(2),i=Ea(t,a,2),i!==null&&(Au(a,i,t,e),tn(i,2),Xt(i));break}}t=t.return}}function Ss(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Fh;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(a)||(ms=!0,l.add(a),e=a0.bind(null,e,t,a),t.then(e,e))}function a0(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,we===e&&(re&a)===a&&(Re===4||Re===3&&(re&62914560)===re&&300>ft()-Ql?(pe&2)===0&&$i(e,0):hs|=a,Gi===re&&(Gi=0)),Xt(e)}function Cp(e,t){t===0&&(t=Sc()),e=Ka(e,t),e!==null&&(tn(e,t),Xt(e))}function i0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cp(e,a)}function n0(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(s(314))}i!==null&&i.delete(t),Cp(e,a)}function l0(e,t){return Do(e,t)}var to=null,Vi=null,ws=!1,ao=!1,Ts=!1,Oa=0;function Xt(e){e!==Vi&&e.next===null&&(Vi===null?to=Vi=e:Vi=Vi.next=e),ao=!0,ws||(ws=!0,r0())}function On(e,t){if(!Ts&&ao){Ts=!0;do for(var a=!1,i=to;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var o=0;else{var d=i.suspendedLanes,f=i.pingedLanes;o=(1<<31-ht(42|e)+1)-1,o&=l&~(d&~f),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,Bp(i,o))}else o=re,o=ol(i,i===we?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||en(i,o)||(a=!0,Bp(i,o));i=i.next}while(a);Ts=!1}}function o0(){Ap()}function Ap(){ao=ws=!1;var e=0;Oa!==0&&x0()&&(e=Oa);for(var t=ft(),a=null,i=to;i!==null;){var l=i.next,o=Np(i,t);o===0?(i.next=null,a===null?to=l:a.next=l,l===null&&(Vi=a)):(a=i,(e!==0||(o&3)!==0)&&(ao=!0)),i=l}Ye!==0&&Ye!==5||On(e),Oa!==0&&(Oa=0)}function Np(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var d=31-ht(o),f=1<<d,b=l[d];b===-1?((f&a)===0||(f&i)!==0)&&(l[d]=Mm(f,t)):b<=t&&(e.expiredLanes|=f),o&=~f}if(t=we,a=re,a=ol(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(me===2||me===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Oo(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||en(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Oo(i),qo(a)){case 2:case 8:a=vc;break;case 32:a=al;break;case 268435456:a=jc;break;default:a=al}return i=Rp.bind(null,e),a=Do(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Oo(i),e.callbackPriority=2,e.callbackNode=null,2}function Rp(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(eo()&&e.callbackNode!==a)return null;var i=re;return i=ol(e,e===we?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(pp(e,i,t),Np(e,ft()),e.callbackNode!=null&&e.callbackNode===a?Rp.bind(null,e):null)}function Bp(e,t){if(eo())return null;pp(e,t,!0)}function r0(){y0(function(){(pe&6)!==0?Do(yc,o0):Ap()})}function ks(){if(Oa===0){var e=Ri;e===0&&(e=il,il<<=1,(il&261888)===0&&(il=256)),Oa=e}return Oa}function Mp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function Lp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function s0(e,t,a,i,l){if(t==="submit"&&a&&a.stateNode===l){var o=Mp((l[lt]||null).action),d=i.submitter;d&&(t=(t=d[lt]||null)?Mp(t.formAction):d.getAttribute("formAction"),t!==null&&(o=t,d=null));var f=new ml("action","action",null,i,l);e.push({event:f,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Oa!==0){var b=d?Lp(l,d):new FormData(l);Jr(a,{pending:!0,data:b,method:l.method,action:o},null,b)}}else typeof o=="function"&&(f.preventDefault(),b=d?Lp(l,d):new FormData(l),Jr(a,{pending:!0,data:b,method:l.method,action:o},o,b))},currentTarget:l}]})}}for(var zs=0;zs<sr.length;zs++){var Es=sr[zs],c0=Es.toLowerCase(),d0=Es[0].toUpperCase()+Es.slice(1);Ut(c0,"on"+d0)}Ut(ud,"onAnimationEnd"),Ut(pd,"onAnimationIteration"),Ut(fd,"onAnimationStart"),Ut("dblclick","onDoubleClick"),Ut("focusin","onFocus"),Ut("focusout","onBlur"),Ut(zh,"onTransitionRun"),Ut(Eh,"onTransitionStart"),Ut(Ch,"onTransitionCancel"),Ut(md,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Va("onBeforeInput",["compositionend","keypress","textInput","paste"]),Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Un));function Dp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],l=i.event;i=i.listeners;e:{var o=void 0;if(t)for(var d=i.length-1;0<=d;d--){var f=i[d],b=f.instance,E=f.currentTarget;if(f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=E;try{o(l)}catch(R){xl(R)}l.currentTarget=null,o=b}else for(d=0;d<i.length;d++){if(f=i[d],b=f.instance,E=f.currentTarget,f=f.listener,b!==o&&l.isPropagationStopped())break e;o=f,l.currentTarget=E;try{o(l)}catch(R){xl(R)}l.currentTarget=null,o=b}}}}function oe(e,t){var a=t[Ho];a===void 0&&(a=t[Ho]=new Set);var i=e+"__bubble";a.has(i)||(Op(t,e,2,!1),a.add(i))}function Cs(e,t,a){var i=0;t&&(i|=4),Op(a,e,i,t)}var io="_reactListening"+Math.random().toString(36).slice(2);function As(e){if(!e[io]){e[io]=!0,Ac.forEach(function(a){a!=="selectionchange"&&(u0.has(a)||Cs(a,!1,e),Cs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[io]||(t[io]=!0,Cs("selectionchange",!1,t))}}function Op(e,t,a,i){switch(pf(t)){case 2:var l=q0;break;case 8:l=H0;break;default:l=$s}a=l.bind(null,t,a,e),l=void 0,!Zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Ns(e,t,a,i,l){var o=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var f=i.stateNode.containerInfo;if(f===l)break;if(d===4)for(d=i.return;d!==null;){var b=d.tag;if((b===3||b===4)&&d.stateNode.containerInfo===l)return;d=d.return}for(;f!==null;){if(d=mi(f),d===null)return;if(b=d.tag,b===5||b===6||b===26||b===27){i=o=d;continue e}f=f.parentNode}}i=i.return}Wc(function(){var E=o,R=Xo(a),L=[];e:{var C=hd.get(e);if(C!==void 0){var N=ml,J=e;switch(e){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":N=nh;break;case"focusin":J="focus",N=Io;break;case"focusout":J="blur",N=Io;break;case"beforeblur":case"afterblur":N=Io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Vm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=rh;break;case ud:case pd:case fd:N=Zm;break;case md:N=ch;break;case"scroll":case"scrollend":N=$m;break;case"wheel":N=uh;break;case"copy":case"cut":case"paste":N=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Vc;break;case"toggle":case"beforetoggle":N=fh}var F=(t&4)!==0,ye=!F&&(e==="scroll"||e==="scrollend"),k=F?C!==null?C+"Capture":null:C;F=[];for(var v=E,z;v!==null;){var M=v;if(z=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||z===null||k===null||(M=ln(v,k),M!=null&&F.push(_n(v,M,z))),ye)break;v=v.return}0<F.length&&(C=new N(C,J,null,a,R),L.push({event:C,listeners:F}))}}if((t&7)===0){e:{if(C=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",C&&a!==Vo&&(J=a.relatedTarget||a.fromElement)&&(mi(J)||J[fi]))break e;if((N||C)&&(C=R.window===R?R:(C=R.ownerDocument)?C.defaultView||C.parentWindow:window,N?(J=a.relatedTarget||a.toElement,N=E,J=J?mi(J):null,J!==null&&(ye=m(J),F=J.tag,J!==ye||F!==5&&F!==27&&F!==6)&&(J=null)):(N=null,J=E),N!==J)){if(F=$c,M="onMouseLeave",k="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(F=Vc,M="onPointerLeave",k="onPointerEnter",v="pointer"),ye=N==null?C:nn(N),z=J==null?C:nn(J),C=new F(M,v+"leave",N,a,R),C.target=ye,C.relatedTarget=z,M=null,mi(R)===E&&(F=new F(k,v+"enter",J,a,R),F.target=z,F.relatedTarget=ye,M=F),ye=M,N&&J)t:{for(F=p0,k=N,v=J,z=0,M=k;M;M=F(M))z++;M=0;for(var Z=v;Z;Z=F(Z))M++;for(;0<z-M;)k=F(k),z--;for(;0<M-z;)v=F(v),M--;for(;z--;){if(k===v||v!==null&&k===v.alternate){F=k;break t}k=F(k),v=F(v)}F=null}else F=null;N!==null&&Up(L,C,N,F,!1),J!==null&&ye!==null&&Up(L,ye,J,F,!0)}}e:{if(C=E?nn(E):window,N=C.nodeName&&C.nodeName.toLowerCase(),N==="select"||N==="input"&&C.type==="file")var de=ed;else if(Pc(C))if(td)de=wh;else{de=jh;var Q=vh}else N=C.nodeName,!N||N.toLowerCase()!=="input"||C.type!=="checkbox"&&C.type!=="radio"?E&&Jo(E.elementType)&&(de=ed):de=Sh;if(de&&(de=de(e,E))){Ic(L,de,a,R);break e}Q&&Q(e,C,E),e==="focusout"&&E&&C.type==="number"&&E.memoizedProps.value!=null&&$o(C,"number",C.value)}switch(Q=E?nn(E):window,e){case"focusin":(Pc(Q)||Q.contentEditable==="true")&&(wi=Q,lr=E,fn=null);break;case"focusout":fn=lr=wi=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,cd(L,a,R);break;case"selectionchange":if(kh)break;case"keydown":case"keyup":cd(L,a,R)}var ie;if(tr)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Si?Kc(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(Xc&&a.locale!=="ko"&&(Si||se!=="onCompositionStart"?se==="onCompositionEnd"&&Si&&(ie=Gc()):(va=R,Ko="value"in va?va.value:va.textContent,Si=!0)),Q=no(E,se),0<Q.length&&(se=new Jc(se,e,null,a,R),L.push({event:se,listeners:Q}),ie?se.data=ie:(ie=Fc(a),ie!==null&&(se.data=ie)))),(ie=hh?gh(e,a):xh(e,a))&&(se=no(E,"onBeforeInput"),0<se.length&&(Q=new Jc("onBeforeInput","beforeinput",null,a,R),L.push({event:Q,listeners:se}),Q.data=ie)),s0(L,e,E,a,R)}Dp(L,t)})}function _n(e,t,a){return{instance:e,listener:t,currentTarget:a}}function no(e,t){for(var a=t+"Capture",i=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=ln(e,a),l!=null&&i.unshift(_n(e,l,o)),l=ln(e,t),l!=null&&i.push(_n(e,l,o))),e.tag===3)return i;e=e.return}return[]}function p0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Up(e,t,a,i,l){for(var o=t._reactName,d=[];a!==null&&a!==i;){var f=a,b=f.alternate,E=f.stateNode;if(f=f.tag,b!==null&&b===i)break;f!==5&&f!==26&&f!==27||E===null||(b=E,l?(E=ln(a,o),E!=null&&d.unshift(_n(a,E,b))):l||(E=ln(a,o),E!=null&&d.push(_n(a,E,b)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var f0=/\r\n?/g,m0=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(m0,"")}function qp(e,t){return t=_p(t),_p(e)===t}function be(e,t,a,i,l,o){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||yi(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&yi(e,""+i);break;case"className":sl(e,"class",i);break;case"tabIndex":sl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":sl(e,a,i);break;case"style":qc(e,i,o);break;case"data":if(t!=="object"){sl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=dl(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&be(e,t,"name",l.name,l,null),be(e,t,"formEncType",l.formEncType,l,null),be(e,t,"formMethod",l.formMethod,l,null),be(e,t,"formTarget",l.formTarget,l,null)):(be(e,t,"encType",l.encType,l,null),be(e,t,"method",l.method,l,null),be(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=dl(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=It);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":oe("beforetoggle",e),oe("toggle",e),rl(e,"popover",i);break;case"xlinkActuate":Pt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Pt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Pt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Pt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Pt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Pt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Pt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":rl(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gm.get(a)||a,rl(e,a,i))}}function Rs(e,t,a,i,l,o){switch(a){case"style":qc(e,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(s(61));if(a=i.__html,a!=null){if(l.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof i=="string"?yi(e,i):(typeof i=="number"||typeof i=="bigint")&&yi(e,""+i);break;case"onScroll":i!=null&&oe("scroll",e);break;case"onScrollEnd":i!=null&&oe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[lt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof i=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,l);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):rl(e,a,i)}}}function Fe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":oe("error",e),oe("load",e);var i=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];if(d!=null)switch(o){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,o,d,a,null)}}l&&be(e,t,"srcSet",a.srcSet,a,null),i&&be(e,t,"src",a.src,a,null);return;case"input":oe("invalid",e);var f=o=d=l=null,b=null,E=null;for(i in a)if(a.hasOwnProperty(i)){var R=a[i];if(R!=null)switch(i){case"name":l=R;break;case"type":d=R;break;case"checked":b=R;break;case"defaultChecked":E=R;break;case"value":o=R;break;case"defaultValue":f=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:be(e,t,i,R,a,null)}}Dc(e,o,f,b,E,d,l,!1);return;case"select":oe("invalid",e),i=d=o=null;for(l in a)if(a.hasOwnProperty(l)&&(f=a[l],f!=null))switch(l){case"value":o=f;break;case"defaultValue":d=f;break;case"multiple":i=f;default:be(e,t,l,f,a,null)}t=o,a=d,e.multiple=!!i,t!=null?bi(e,!!i,t,!1):a!=null&&bi(e,!!i,a,!0);return;case"textarea":oe("invalid",e),o=l=i=null;for(d in a)if(a.hasOwnProperty(d)&&(f=a[d],f!=null))switch(d){case"value":i=f;break;case"defaultValue":l=f;break;case"children":o=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:be(e,t,d,f,a,null)}Uc(e,i,l,o);return;case"option":for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null)&&(b==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":be(e,t,b,i,a,null));return;case"dialog":oe("beforetoggle",e),oe("toggle",e),oe("cancel",e),oe("close",e);break;case"iframe":case"object":oe("load",e);break;case"video":case"audio":for(i=0;i<Un.length;i++)oe(Un[i],e);break;case"image":oe("error",e),oe("load",e);break;case"details":oe("toggle",e);break;case"embed":case"source":case"link":oe("error",e),oe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:be(e,t,E,i,a,null)}return;default:if(Jo(t)){for(R in a)a.hasOwnProperty(R)&&(i=a[R],i!==void 0&&Rs(e,t,R,i,a,void 0));return}}for(f in a)a.hasOwnProperty(f)&&(i=a[f],i!=null&&be(e,t,f,i,a,null))}function h0(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,d=null,f=null,b=null,E=null,R=null;for(N in a){var L=a[N];if(a.hasOwnProperty(N)&&L!=null)switch(N){case"checked":break;case"value":break;case"defaultValue":b=L;default:i.hasOwnProperty(N)||be(e,t,N,null,i,L)}}for(var C in i){var N=i[C];if(L=a[C],i.hasOwnProperty(C)&&(N!=null||L!=null))switch(C){case"type":o=N;break;case"name":l=N;break;case"checked":E=N;break;case"defaultChecked":R=N;break;case"value":d=N;break;case"defaultValue":f=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,t));break;default:N!==L&&be(e,t,C,N,i,L)}}Yo(e,d,f,b,E,R,o,l);return;case"select":N=d=f=C=null;for(o in a)if(b=a[o],a.hasOwnProperty(o)&&b!=null)switch(o){case"value":break;case"multiple":N=b;default:i.hasOwnProperty(o)||be(e,t,o,null,i,b)}for(l in i)if(o=i[l],b=a[l],i.hasOwnProperty(l)&&(o!=null||b!=null))switch(l){case"value":C=o;break;case"defaultValue":f=o;break;case"multiple":d=o;default:o!==b&&be(e,t,l,o,i,b)}t=f,a=d,i=N,C!=null?bi(e,!!a,C,!1):!!i!=!!a&&(t!=null?bi(e,!!a,t,!0):bi(e,!!a,a?[]:"",!1));return;case"textarea":N=C=null;for(f in a)if(l=a[f],a.hasOwnProperty(f)&&l!=null&&!i.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:be(e,t,f,null,i,l)}for(d in i)if(l=i[d],o=a[d],i.hasOwnProperty(d)&&(l!=null||o!=null))switch(d){case"value":C=l;break;case"defaultValue":N=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==o&&be(e,t,d,l,i,o)}Oc(e,C,N);return;case"option":for(var J in a)C=a[J],a.hasOwnProperty(J)&&C!=null&&!i.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:be(e,t,J,null,i,C));for(b in i)C=i[b],N=a[b],i.hasOwnProperty(b)&&C!==N&&(C!=null||N!=null)&&(b==="selected"?e.selected=C&&typeof C!="function"&&typeof C!="symbol":be(e,t,b,C,i,N));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var F in a)C=a[F],a.hasOwnProperty(F)&&C!=null&&!i.hasOwnProperty(F)&&be(e,t,F,null,i,C);for(E in i)if(C=i[E],N=a[E],i.hasOwnProperty(E)&&C!==N&&(C!=null||N!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:be(e,t,E,C,i,N)}return;default:if(Jo(t)){for(var ye in a)C=a[ye],a.hasOwnProperty(ye)&&C!==void 0&&!i.hasOwnProperty(ye)&&Rs(e,t,ye,void 0,i,C);for(R in i)C=i[R],N=a[R],!i.hasOwnProperty(R)||C===N||C===void 0&&N===void 0||Rs(e,t,R,C,i,N);return}}for(var k in a)C=a[k],a.hasOwnProperty(k)&&C!=null&&!i.hasOwnProperty(k)&&be(e,t,k,null,i,C);for(L in i)C=i[L],N=a[L],!i.hasOwnProperty(L)||C===N||C==null&&N==null||be(e,t,L,C,i,N)}function Hp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function g0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var l=a[i],o=l.transferSize,d=l.initiatorType,f=l.duration;if(o&&f&&Hp(d)){for(d=0,f=l.responseEnd,i+=1;i<a.length;i++){var b=a[i],E=b.startTime;if(E>f)break;var R=b.transferSize,L=b.initiatorType;R&&Hp(L)&&(b=b.responseEnd,d+=R*(b<f?1:(f-E)/(b-E)))}if(--i,t+=8*(o+d)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bs=null,Ms=null;function lo(e){return e.nodeType===9?e:e.ownerDocument}function Wp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ls(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ds=null;function x0(){var e=window.event;return e&&e.type==="popstate"?e===Ds?!1:(Ds=e,!0):(Ds=null,!1)}var Yp=typeof setTimeout=="function"?setTimeout:void 0,b0=typeof clearTimeout=="function"?clearTimeout:void 0,$p=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof $p<"u"?function(e){return $p.resolve(null).then(e).catch(v0)}:Yp;function v0(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Jp(e,t){var a=t,i=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(l),Ki(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")qn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,qn(a);for(var o=a.firstChild;o;){var d=o.nextSibling,f=o.nodeName;o[an]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&o.rel.toLowerCase()==="stylesheet"||a.removeChild(o),o=d}}else a==="body"&&qn(e.ownerDocument.body);a=l}while(a);Ki(t)}function Vp(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Os(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Os(a),Wo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function j0(e,t,a,i){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[an])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Lt(e.nextSibling),e===null)break}return null}function S0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Lt(e.nextSibling),e===null))return null;return e}function Xp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lt(e.nextSibling),e===null))return null;return e}function Us(e){return e.data==="$?"||e.data==="$~"}function _s(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function w0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Lt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var qs=null;function Qp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Lt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Zp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Kp(e,t,a){switch(t=lo(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function qn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wo(e)}var Dt=new Map,Fp=new Set;function oo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=W.d;W.d={f:T0,r:k0,D:z0,C:E0,L:C0,m:A0,X:R0,S:N0,M:B0};function T0(){var e=ha.f(),t=Fl();return e||t}function k0(e){var t=hi(e);t!==null&&t.tag===5&&t.type==="form"?mu(t):ha.r(e)}var Xi=typeof document>"u"?null:document;function Pp(e,t,a){var i=Xi;if(i&&typeof t=="string"&&t){var l=Et(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Fp.has(l)||(Fp.add(l),e={rel:e,crossOrigin:a,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),Fe(t,"link",e),Je(t),i.head.appendChild(t)))}}function z0(e){ha.D(e),Pp("dns-prefetch",e,null)}function E0(e,t){ha.C(e,t),Pp("preconnect",e,t)}function C0(e,t,a){ha.L(e,t,a);var i=Xi;if(i&&e&&t){var l='link[rel="preload"][as="'+Et(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Et(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Et(a.imageSizes)+'"]')):l+='[href="'+Et(e)+'"]';var o=l;switch(t){case"style":o=Qi(e);break;case"script":o=Zi(e)}Dt.has(o)||(e=S({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Dt.set(o,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Hn(o))||t==="script"&&i.querySelector(Wn(o))||(t=i.createElement("link"),Fe(t,"link",e),Je(t),i.head.appendChild(t)))}}function A0(e,t){ha.m(e,t);var a=Xi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Et(i)+'"][href="'+Et(e)+'"]',o=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Zi(e)}if(!Dt.has(o)&&(e=S({rel:"modulepreload",href:e},t),Dt.set(o,e),a.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Wn(o)))return}i=a.createElement("link"),Fe(i,"link",e),Je(i),a.head.appendChild(i)}}}function N0(e,t,a){ha.S(e,t,a);var i=Xi;if(i&&e){var l=gi(i).hoistableStyles,o=Qi(e);t=t||"default";var d=l.get(o);if(!d){var f={loading:0,preload:null};if(d=i.querySelector(Hn(o)))f.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Dt.get(o))&&Hs(e,a);var b=d=i.createElement("link");Je(b),Fe(b,"link",e),b._p=new Promise(function(E,R){b.onload=E,b.onerror=R}),b.addEventListener("load",function(){f.loading|=1}),b.addEventListener("error",function(){f.loading|=2}),f.loading|=4,ro(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:f},l.set(o,d)}}}function R0(e,t){ha.X(e,t);var a=Xi;if(a&&e){var i=gi(a).hoistableScripts,l=Zi(e),o=i.get(l);o||(o=a.querySelector(Wn(l)),o||(e=S({src:e,async:!0},t),(t=Dt.get(l))&&Ws(e,t),o=a.createElement("script"),Je(o),Fe(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function B0(e,t){ha.M(e,t);var a=Xi;if(a&&e){var i=gi(a).hoistableScripts,l=Zi(e),o=i.get(l);o||(o=a.querySelector(Wn(l)),o||(e=S({src:e,async:!0,type:"module"},t),(t=Dt.get(l))&&Ws(e,t),o=a.createElement("script"),Je(o),Fe(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(l,o))}}function Ip(e,t,a,i){var l=(l=ne.current)?oo(l):null;if(!l)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Qi(a.href),a=gi(l).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qi(a.href);var o=gi(l).hoistableStyles,d=o.get(e);if(d||(l=l.ownerDocument||l,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,d),(o=l.querySelector(Hn(e)))&&!o._p&&(d.instance=o,d.state.loading=5),Dt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Dt.set(e,a),o||M0(l,e,a,d.state))),t&&i===null)throw Error(s(528,""));return d}if(t&&i!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Zi(a),a=gi(l).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qi(e){return'href="'+Et(e)+'"'}function Hn(e){return'link[rel="stylesheet"]['+e+"]"}function ef(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function M0(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Fe(t,"link",a),Je(t),e.head.appendChild(t))}function Zi(e){return'[src="'+Et(e)+'"]'}function Wn(e){return"script[async]"+e}function tf(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Et(a.href)+'"]');if(i)return t.instance=i,Je(i),i;var l=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Je(i),Fe(i,"style",l),ro(i,a.precedence,e),t.instance=i;case"stylesheet":l=Qi(a.href);var o=e.querySelector(Hn(l));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;i=ef(a),(l=Dt.get(l))&&Hs(i,l),o=(e.ownerDocument||e).createElement("link"),Je(o);var d=o;return d._p=new Promise(function(f,b){d.onload=f,d.onerror=b}),Fe(o,"link",i),t.state.loading|=4,ro(o,a.precedence,e),t.instance=o;case"script":return o=Zi(a.src),(l=e.querySelector(Wn(o)))?(t.instance=l,Je(l),l):(i=a,(l=Dt.get(o))&&(i=S({},a),Ws(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),Fe(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,ro(i,a.precedence,e));return t.instance}function ro(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,o=l,d=0;d<i.length;d++){var f=i[d];if(f.dataset.precedence===t)o=f;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Hs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ws(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var so=null;function af(e,t,a){if(so===null){var i=new Map,l=so=new Map;l.set(a,i)}else l=so,i=l.get(a),i||(i=new Map,l.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[an]||o[Xe]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var d=o.getAttribute(t)||"";d=e+d;var f=i.get(d);f?f.push(o):i.set(d,[o])}}return i}function nf(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function L0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function D0(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Qi(i.href),o=t.querySelector(Hn(l));if(o){t=o._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=co.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=o,Je(o);return}o=t.ownerDocument||t,i=ef(i),(l=Dt.get(l))&&Hs(i,l),o=o.createElement("link"),Je(o);var d=o;d._p=new Promise(function(f,b){d.onload=f,d.onerror=b}),Fe(o,"link",i),a.instance=o}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=co.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Gs=0;function O0(e,t){return e.stylesheets&&e.count===0&&po(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&po(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4+t);0<e.imgBytes&&Gs===0&&(Gs=62500*g0());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&po(e,e.stylesheets),e.unsuspend)){var o=e.unsuspend;e.unsuspend=null,o()}},(e.imgBytes>Gs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function co(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uo=null;function po(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uo=new Map,t.forEach(U0,e),uo=null,co.call(e))}function U0(e,t){if(!(t.state.loading&4)){var a=uo.get(e);if(a)var i=a.get(null);else{a=new Map,uo.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var d=l[o];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),i=d)}i&&a.set(null,i)}l=t.instance,d=l.getAttribute("data-precedence"),o=a.get(d)||i,o===i&&a.set(null,l),a.set(d,l),this.count++,i=co.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Gn={$$typeof:K,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function _0(e,t,a,i,l,o,d,f,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.hiddenUpdates=Uo(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function of(e,t,a,i,l,o,d,f,b,E,R,L){return e=new _0(e,t,a,d,b,E,R,L,f),t=1,o===!0&&(t|=24),o=xt(3,null,null,t),e.current=o,o.stateNode=e,t=jr(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:i,isDehydrated:a,cache:t},kr(o),e}function rf(e){return e?(e=zi,e):zi}function sf(e,t,a,i,l,o){l=rf(l),i.context===null?i.context=l:i.pendingContext=l,i=za(t),i.payload={element:a},o=o===void 0?null:o,o!==null&&(i.callback=o),a=Ea(e,i,t),a!==null&&(ut(a,e,t),vn(a,e,t))}function cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ys(e,t){cf(e,t),(e=e.alternate)&&cf(e,t)}function df(e){if(e.tag===13||e.tag===31){var t=Ka(e,67108864);t!==null&&ut(t,e,67108864),Ys(e,67108864)}}function uf(e){if(e.tag===13||e.tag===31){var t=St();t=_o(t);var a=Ka(e,t);a!==null&&ut(a,e,t),Ys(e,t)}}var fo=!0;function q0(e,t,a,i){var l=B.T;B.T=null;var o=W.p;try{W.p=2,$s(e,t,a,i)}finally{W.p=o,B.T=l}}function H0(e,t,a,i){var l=B.T;B.T=null;var o=W.p;try{W.p=8,$s(e,t,a,i)}finally{W.p=o,B.T=l}}function $s(e,t,a,i){if(fo){var l=Js(i);if(l===null)Ns(e,t,i,mo,a),ff(e,i);else if(G0(l,e,t,a,i))i.stopPropagation();else if(ff(e,i),t&4&&-1<W0.indexOf(e)){for(;l!==null;){var o=hi(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var d=Ja(o.pendingLanes);if(d!==0){var f=o;for(f.pendingLanes|=2,f.entangledLanes|=2;d;){var b=1<<31-ht(d);f.entanglements[1]|=b,d&=~b}Xt(o),(pe&6)===0&&(Zl=ft()+500,On(0))}}break;case 31:case 13:f=Ka(o,2),f!==null&&ut(f,o,2),Fl(),Ys(o,2)}if(o=Js(i),o===null&&Ns(e,t,i,mo,a),o===l)break;l=o}l!==null&&i.stopPropagation()}else Ns(e,t,i,null,a)}}function Js(e){return e=Xo(e),Vs(e)}var mo=null;function Vs(e){if(mo=null,e=mi(e),e!==null){var t=m(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return mo=e,null}function pf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zm()){case yc:return 2;case vc:return 8;case al:case Em:return 32;case jc:return 268435456;default:return 32}default:return 32}}var Xs=!1,_a=null,qa=null,Ha=null,Yn=new Map,$n=new Map,Wa=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ff(e,t){switch(e){case"focusin":case"focusout":_a=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ha=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function Jn(e,t,a,i,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:o,targetContainers:[l]},t!==null&&(t=hi(t),t!==null&&df(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function G0(e,t,a,i,l){switch(t){case"focusin":return _a=Jn(_a,e,t,a,i,l),!0;case"dragenter":return qa=Jn(qa,e,t,a,i,l),!0;case"mouseover":return Ha=Jn(Ha,e,t,a,i,l),!0;case"pointerover":var o=l.pointerId;return Yn.set(o,Jn(Yn.get(o)||null,e,t,a,i,l)),!0;case"gotpointercapture":return o=l.pointerId,$n.set(o,Jn($n.get(o)||null,e,t,a,i,l)),!0}return!1}function mf(e){var t=mi(e.target);if(t!==null){var a=m(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Ec(e.priority,function(){uf(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,Ec(e.priority,function(){uf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Js(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Vo=i,a.target.dispatchEvent(i),Vo=null}else return t=hi(a),t!==null&&df(t),e.blockedOn=a,!1;t.shift()}return!0}function hf(e,t,a){ho(e)&&a.delete(t)}function Y0(){Xs=!1,_a!==null&&ho(_a)&&(_a=null),qa!==null&&ho(qa)&&(qa=null),Ha!==null&&ho(Ha)&&(Ha=null),Yn.forEach(hf),$n.forEach(hf)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,Xs||(Xs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Y0)))}var xo=null;function gf(e){xo!==e&&(xo=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xo===e&&(xo=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(Vs(i||a)===null)continue;break}var o=hi(a);o!==null&&(e.splice(t,3),t-=3,Jr(o,{pending:!0,data:l,method:a.method,action:i},i,l))}}))}function Ki(e){function t(b){return go(b,e)}_a!==null&&go(_a,e),qa!==null&&go(qa,e),Ha!==null&&go(Ha,e),Yn.forEach(t),$n.forEach(t);for(var a=0;a<Wa.length;a++){var i=Wa[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)mf(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var l=a[i],o=a[i+1],d=l[lt]||null;if(typeof o=="function")d||gf(a);else if(d){var f=null;if(o&&o.hasAttribute("formAction")){if(l=o,d=o[lt]||null)f=d.formAction;else if(Vs(l)!==null)continue}else f=d.action;typeof f=="function"?a[i+1]=f:(a.splice(i,3),i-=3),gf(a)}}}function xf(){function e(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(d){return l=d})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function Qs(e){this._internalRoot=e}bo.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,i=St();sf(a,i,e,t,null,null)},bo.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sf(e.current,2,null,e,null,null),Fl(),t[fi]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var t=zc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Wa.length&&t!==0&&t<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&mf(e)}};var bf=c.version;if(bf!=="19.2.4")throw Error(s(527,bf,"19.2.4"));W.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(t),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var $0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Ii=yo.inject($0),mt=yo}catch{}}return Xn.createRoot=function(e,t){if(!p(e))throw Error(s(299));var a=!1,i="",l=Tu,o=ku,d=zu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=of(e,1,!1,null,null,a,i,null,l,o,d,xf),e[fi]=t.current,As(e),new Qs(t)},Xn.hydrateRoot=function(e,t,a){if(!p(e))throw Error(s(299));var i=!1,l="",o=Tu,d=ku,f=zu,b=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(f=a.onRecoverableError),a.formState!==void 0&&(b=a.formState)),t=of(e,1,!0,t,a??null,i,l,b,o,d,f,xf),t.context=rf(null),a=t.current,i=St(),i=_o(i),l=za(i),l.callback=null,Ea(a,l,i),a=i,t.current.lanes=a,tn(t,a),Xt(t),e[fi]=t.current,As(e),new bo(t)},Xn.version="19.2.4",Xn}var Cf;function tg(){if(Cf)return Fs.exports;Cf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(c){console.error(c)}}return r(),Fs.exports=eg(),Fs.exports}var ag=tg();const ig="modulepreload",ng=function(r){return"/"+r},Af={},Eo=function(c,u,s){let p=Promise.resolve();if(u&&u.length>0){let x=function(y){return Promise.all(y.map(T=>Promise.resolve(T).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");p=x(u.map(y=>{if(y=ng(y),y in Af)return;Af[y]=!0;const T=y.endsWith(".css"),S=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${S}`))return;const U=document.createElement("link");if(U.rel=T?"stylesheet":ig,T||(U.as="script"),U.crossOrigin="",U.href=y,h&&U.setAttribute("nonce",h),document.head.appendChild(U),T)return new Promise((_,Y)=>{U.addEventListener("load",_),U.addEventListener("error",()=>Y(new Error(`Unable to preload CSS for ${y}`)))})}))}function m(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return p.then(g=>{for(const h of g||[])h.status==="rejected"&&m(h.reason);return c().catch(m)})};var Nf="popstate";function Rf(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function lg(r={}){function c(s,p){let m=p.state?.masked,{pathname:g,search:h,hash:x}=m||s.location;return nc("",{pathname:g,search:h,hash:x},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function u(s,p){return typeof p=="string"?p:Kn(p)}return rg(c,u,null,r)}function $e(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function Kt(r,c){if(!r){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function og(){return Math.random().toString(36).substring(2,10)}function Bf(r,c){return{usr:r.state,key:r.key,idx:c,masked:r.unstable_mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function nc(r,c,u=null,s,p){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof c=="string"?Fn(c):c,state:u,key:c&&c.key||s||og(),unstable_mask:p}}function Kn({pathname:r="/",search:c="",hash:u=""}){return c&&c!=="?"&&(r+=c.charAt(0)==="?"?c:"?"+c),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function Fn(r){let c={};if(r){let u=r.indexOf("#");u>=0&&(c.hash=r.substring(u),r=r.substring(0,u));let s=r.indexOf("?");s>=0&&(c.search=r.substring(s),r=r.substring(0,s)),r&&(c.pathname=r)}return c}function rg(r,c,u,s={}){let{window:p=document.defaultView,v5Compat:m=!1}=s,g=p.history,h="POP",x=null,y=T();y==null&&(y=0,g.replaceState({...g.state,idx:y},""));function T(){return(g.state||{idx:null}).idx}function S(){h="POP";let D=T(),V=D==null?null:D-y;y=D,x&&x({action:h,location:H.location,delta:V})}function U(D,V){h="PUSH";let $=Rf(D)?D:nc(H.location,D,V);y=T()+1;let K=Bf($,y),ve=H.createHref($.unstable_mask||$);try{g.pushState(K,"",ve)}catch(je){if(je instanceof DOMException&&je.name==="DataCloneError")throw je;p.location.assign(ve)}m&&x&&x({action:h,location:H.location,delta:1})}function _(D,V){h="REPLACE";let $=Rf(D)?D:nc(H.location,D,V);y=T();let K=Bf($,y),ve=H.createHref($.unstable_mask||$);g.replaceState(K,"",ve),m&&x&&x({action:h,location:H.location,delta:0})}function Y(D){return sg(D)}let H={get action(){return h},get location(){return r(p,g)},listen(D){if(x)throw new Error("A history only accepts one active listener");return p.addEventListener(Nf,S),x=D,()=>{p.removeEventListener(Nf,S),x=null}},createHref(D){return c(p,D)},createURL:Y,encodeLocation(D){let V=Y(D);return{pathname:V.pathname,search:V.search,hash:V.hash}},push:U,replace:_,go(D){return g.go(D)}};return H}function sg(r,c=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),$e(u,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Kn(r);return s=s.replace(/ $/,"%20"),!c&&s.startsWith("//")&&(s=u+s),new URL(s,u)}function Vf(r,c,u="/"){return cg(r,c,u,!1)}function cg(r,c,u,s){let p=typeof c=="string"?Fn(c):c,m=ga(p.pathname||"/",u);if(m==null)return null;let g=Xf(r);dg(g);let h=null;for(let x=0;h==null&&x<g.length;++x){let y=jg(m);h=yg(g[x],y,s)}return h}function Xf(r,c=[],u=[],s="",p=!1){let m=(g,h,x=p,y)=>{let T={relativePath:y===void 0?g.path||"":y,caseSensitive:g.caseSensitive===!0,childrenIndex:h,route:g};if(T.relativePath.startsWith("/")){if(!T.relativePath.startsWith(s)&&x)return;$e(T.relativePath.startsWith(s),`Absolute route path "${T.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),T.relativePath=T.relativePath.slice(s.length)}let S=Wt([s,T.relativePath]),U=u.concat(T);g.children&&g.children.length>0&&($e(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Xf(g.children,c,U,S,x)),!(g.path==null&&!g.index)&&c.push({path:S,score:xg(S,g.index),routesMeta:U})};return r.forEach((g,h)=>{if(g.path===""||!g.path?.includes("?"))m(g,h);else for(let x of Qf(g.path))m(g,h,!0,x)}),c}function Qf(r){let c=r.split("/");if(c.length===0)return[];let[u,...s]=c,p=u.endsWith("?"),m=u.replace(/\?$/,"");if(s.length===0)return p?[m,""]:[m];let g=Qf(s.join("/")),h=[];return h.push(...g.map(x=>x===""?m:[m,x].join("/"))),p&&h.push(...g),h.map(x=>r.startsWith("/")&&x===""?"/":x)}function dg(r){r.sort((c,u)=>c.score!==u.score?u.score-c.score:bg(c.routesMeta.map(s=>s.childrenIndex),u.routesMeta.map(s=>s.childrenIndex)))}var ug=/^:[\w-]+$/,pg=3,fg=2,mg=1,hg=10,gg=-2,Mf=r=>r==="*";function xg(r,c){let u=r.split("/"),s=u.length;return u.some(Mf)&&(s+=gg),c&&(s+=fg),u.filter(p=>!Mf(p)).reduce((p,m)=>p+(ug.test(m)?pg:m===""?mg:hg),s)}function bg(r,c){return r.length===c.length&&r.slice(0,-1).every((s,p)=>s===c[p])?r[r.length-1]-c[c.length-1]:0}function yg(r,c,u=!1){let{routesMeta:s}=r,p={},m="/",g=[];for(let h=0;h<s.length;++h){let x=s[h],y=h===s.length-1,T=m==="/"?c:c.slice(m.length)||"/",S=ko({path:x.relativePath,caseSensitive:x.caseSensitive,end:y},T),U=x.route;if(!S&&y&&u&&!s[s.length-1].route.index&&(S=ko({path:x.relativePath,caseSensitive:x.caseSensitive,end:!1},T)),!S)return null;Object.assign(p,S.params),g.push({params:p,pathname:Wt([m,S.pathname]),pathnameBase:kg(Wt([m,S.pathnameBase])),route:U}),S.pathnameBase!=="/"&&(m=Wt([m,S.pathnameBase]))}return g}function ko(r,c){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,s]=vg(r.path,r.caseSensitive,r.end),p=c.match(u);if(!p)return null;let m=p[0],g=m.replace(/(.)\/+$/,"$1"),h=p.slice(1);return{params:s.reduce((y,{paramName:T,isOptional:S},U)=>{if(T==="*"){let Y=h[U]||"";g=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const _=h[U];return S&&!_?y[T]=void 0:y[T]=(_||"").replace(/%2F/g,"/"),y},{}),pathname:m,pathnameBase:g,pattern:r}}function vg(r,c=!1,u=!0){Kt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],p="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,h,x,y,T)=>{if(s.push({paramName:h,isOptional:x!=null}),x){let S=T.charAt(y+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),p+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?p+="\\/*$":r!==""&&r!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),s]}function jg(r){try{return r.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Kt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),r}}function ga(r,c){if(c==="/")return r;if(!r.toLowerCase().startsWith(c.toLowerCase()))return null;let u=c.endsWith("/")?c.length-1:c.length,s=r.charAt(u);return s&&s!=="/"?null:r.slice(u)||"/"}var Sg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function wg(r,c="/"){let{pathname:u,search:s="",hash:p=""}=typeof r=="string"?Fn(r):r,m;return u?(u=Kf(u),u.startsWith("/")?m=Lf(u.substring(1),"/"):m=Lf(u,c)):m=c,{pathname:m,search:zg(s),hash:Eg(p)}}function Lf(r,c){let u=zo(c).split("/");return r.split("/").forEach(p=>{p===".."?u.length>1&&u.pop():p!=="."&&u.push(p)}),u.length>1?u.join("/"):"/"}function tc(r,c,u,s){return`Cannot include a '${r}' character in a manually specified \`to.${c}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tg(r){return r.filter((c,u)=>u===0||c.route.path&&c.route.path.length>0)}function Zf(r){let c=Tg(r);return c.map((u,s)=>s===c.length-1?u.pathname:u.pathnameBase)}function sc(r,c,u,s=!1){let p;typeof r=="string"?p=Fn(r):(p={...r},$e(!p.pathname||!p.pathname.includes("?"),tc("?","pathname","search",p)),$e(!p.pathname||!p.pathname.includes("#"),tc("#","pathname","hash",p)),$e(!p.search||!p.search.includes("#"),tc("#","search","hash",p)));let m=r===""||p.pathname==="",g=m?"/":p.pathname,h;if(g==null)h=u;else{let S=c.length-1;if(!s&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),S-=1;p.pathname=U.join("/")}h=S>=0?c[S]:"/"}let x=wg(p,h),y=g&&g!=="/"&&g.endsWith("/"),T=(m||g===".")&&u.endsWith("/");return!x.pathname.endsWith("/")&&(y||T)&&(x.pathname+="/"),x}var Kf=r=>r.replace(/\/\/+/g,"/"),Wt=r=>Kf(r.join("/")),zo=r=>r.replace(/\/+$/,""),kg=r=>zo(r).replace(/^\/*/,"/"),zg=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Eg=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Cg=class{constructor(r,c,u,s=!1){this.status=r,this.statusText=c||"",this.internal=s,u instanceof Error?(this.data=u.toString(),this.error=u):this.data=u}};function Ag(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ng(r){let c=r.map(u=>u.route.path).filter(Boolean);return Wt(c)||"/"}var Ff=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Pf(r,c){let u=r;if(typeof u!="string"||!Sg.test(u))return{absoluteURL:void 0,isExternal:!1,to:u};let s=u,p=!1;if(Ff)try{let m=new URL(window.location.href),g=u.startsWith("//")?new URL(m.protocol+u):new URL(u),h=ga(g.pathname,c);g.origin===m.origin&&h!=null?u=h+g.search+g.hash:p=!0}catch{Kt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:p,to:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var If=["POST","PUT","PATCH","DELETE"];new Set(If);var Rg=["GET",...If];new Set(Rg);var Fi=A.createContext(null);Fi.displayName="DataRouter";var Co=A.createContext(null);Co.displayName="DataRouterState";var em=A.createContext(!1);function Bg(){return A.useContext(em)}var tm=A.createContext({isTransitioning:!1});tm.displayName="ViewTransition";var Mg=A.createContext(new Map);Mg.displayName="Fetchers";var Lg=A.createContext(null);Lg.displayName="Await";var Ot=A.createContext(null);Ot.displayName="Navigation";var Ao=A.createContext(null);Ao.displayName="Location";var xa=A.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var cc=A.createContext(null);cc.displayName="RouteError";var am="REACT_ROUTER_ERROR",Dg="REDIRECT",Og="ROUTE_ERROR_RESPONSE";function Ug(r){if(r.startsWith(`${am}:${Dg}:{`))try{let c=JSON.parse(r.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function _g(r){if(r.startsWith(`${am}:${Og}:{`))try{let c=JSON.parse(r.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Cg(c.status,c.statusText,c.data)}catch{}}function qg(r,{relative:c}={}){$e(Pn(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:s}=A.useContext(Ot),{hash:p,pathname:m,search:g}=In(r,{relative:c}),h=m;return u!=="/"&&(h=m==="/"?u:Wt([u,m])),s.createHref({pathname:h,search:g,hash:p})}function Pn(){return A.useContext(Ao)!=null}function Ft(){return $e(Pn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ao).location}var im="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nm(r){A.useContext(Ot).static||A.useLayoutEffect(r)}function lm(){let{isDataRoute:r}=A.useContext(xa);return r?Pg():Hg()}function Hg(){$e(Pn(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Fi),{basename:c,navigator:u}=A.useContext(Ot),{matches:s}=A.useContext(xa),{pathname:p}=Ft(),m=JSON.stringify(Zf(s)),g=A.useRef(!1);return nm(()=>{g.current=!0}),A.useCallback((x,y={})=>{if(Kt(g.current,im),!g.current)return;if(typeof x=="number"){u.go(x);return}let T=sc(x,JSON.parse(m),p,y.relative==="path");r==null&&c!=="/"&&(T.pathname=T.pathname==="/"?c:Wt([c,T.pathname])),(y.replace?u.replace:u.push)(T,y.state,y)},[c,u,m,p,r])}A.createContext(null);function In(r,{relative:c}={}){let{matches:u}=A.useContext(xa),{pathname:s}=Ft(),p=JSON.stringify(Zf(u));return A.useMemo(()=>sc(r,JSON.parse(p),s,c==="path"),[r,p,s,c])}function Wg(r,c,u){$e(Pn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=A.useContext(Ot),{matches:p}=A.useContext(xa),m=p[p.length-1],g=m?m.params:{},h=m?m.pathname:"/",x=m?m.pathnameBase:"/",y=m&&m.route;{let D=y&&y.path||"";rm(h,!y||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let T=Ft(),S;S=T;let U=S.pathname||"/",_=U;if(x!=="/"){let D=x.replace(/^\//,"").split("/");_="/"+U.replace(/^\//,"").split("/").slice(D.length).join("/")}let Y=Vf(r,{pathname:_});return Kt(y||Y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Kt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Vg(Y&&Y.map(D=>Object.assign({},D,{params:Object.assign({},g,D.params),pathname:Wt([x,s.encodeLocation?s.encodeLocation(D.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?x:Wt([x,s.encodeLocation?s.encodeLocation(D.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),p,u)}function Gg(){let r=Fg(),c=Ag(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:s},m={padding:"2px 4px",backgroundColor:s},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:m},"ErrorBoundary")," or"," ",A.createElement("code",{style:m},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},c),u?A.createElement("pre",{style:p},u):null,g)}var Yg=A.createElement(Gg,null),om=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,c){return c.location!==r.location||c.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:c.error,location:c.location,revalidation:r.revalidation||c.revalidation}}componentDidCatch(r,c){this.props.onError?this.props.onError(r,c):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const u=_g(r.digest);u&&(r=u)}let c=r!==void 0?A.createElement(xa.Provider,{value:this.props.routeContext},A.createElement(cc.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?A.createElement($g,{error:r},c):c}};om.contextType=em;var ac=new WeakMap;function $g({children:r,error:c}){let{basename:u}=A.useContext(Ot);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let s=Ug(c.digest);if(s){let p=ac.get(c);if(p)throw p;let m=Pf(s.location,u);if(Ff&&!ac.get(c))if(m.isExternal||s.reloadDocument)window.location.href=m.absoluteURL||m.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(m.to,{replace:s.replace}));throw ac.set(c,g),g}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${m.absoluteURL||m.to}`})}}return r}function Jg({routeContext:r,match:c,children:u}){let s=A.useContext(Fi);return s&&s.static&&s.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=c.route.id),A.createElement(xa.Provider,{value:r},u)}function Vg(r,c=[],u){let s=u?.state;if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(c.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let p=r,m=s?.errors;if(m!=null){let T=p.findIndex(S=>S.route.id&&m?.[S.route.id]!==void 0);$e(T>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,T+1))}let g=!1,h=-1;if(u&&s){g=s.renderFallback;for(let T=0;T<p.length;T++){let S=p[T];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(h=T),S.route.id){let{loaderData:U,errors:_}=s,Y=S.route.loader&&!U.hasOwnProperty(S.route.id)&&(!_||_[S.route.id]===void 0);if(S.route.lazy||Y){u.isStatic&&(g=!0),h>=0?p=p.slice(0,h+1):p=[p[0]];break}}}}let x=u?.onError,y=s&&x?(T,S)=>{x(T,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:Ng(s.matches),errorInfo:S})}:void 0;return p.reduceRight((T,S,U)=>{let _,Y=!1,H=null,D=null;s&&(_=m&&S.route.id?m[S.route.id]:void 0,H=S.route.errorElement||Yg,g&&(h<0&&U===0?(rm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),Y=!0,D=null):h===U&&(Y=!0,D=S.route.hydrateFallbackElement||null)));let V=c.concat(p.slice(0,U+1)),$=()=>{let K;return _?K=H:Y?K=D:S.route.Component?K=A.createElement(S.route.Component,null):S.route.element?K=S.route.element:K=T,A.createElement(Jg,{match:S,routeContext:{outlet:T,matches:V,isDataRoute:s!=null},children:K})};return s&&(S.route.ErrorBoundary||S.route.errorElement||U===0)?A.createElement(om,{location:s.location,revalidation:s.revalidation,component:H,error:_,children:$(),routeContext:{outlet:null,matches:V,isDataRoute:!0},onError:y}):$()},null)}function dc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xg(r){let c=A.useContext(Fi);return $e(c,dc(r)),c}function Qg(r){let c=A.useContext(Co);return $e(c,dc(r)),c}function Zg(r){let c=A.useContext(xa);return $e(c,dc(r)),c}function uc(r){let c=Zg(r),u=c.matches[c.matches.length-1];return $e(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Kg(){return uc("useRouteId")}function Fg(){let r=A.useContext(cc),c=Qg("useRouteError"),u=uc("useRouteError");return r!==void 0?r:c.errors?.[u]}function Pg(){let{router:r}=Xg("useNavigate"),c=uc("useNavigate"),u=A.useRef(!1);return nm(()=>{u.current=!0}),A.useCallback(async(p,m={})=>{Kt(u.current,im),u.current&&(typeof p=="number"?await r.navigate(p):await r.navigate(p,{fromRouteId:c,...m}))},[r,c])}var Df={};function rm(r,c,u){!c&&!Df[r]&&(Df[r]=!0,Kt(!1,u))}A.memo(Ig);function Ig({routes:r,future:c,state:u,isStatic:s,onError:p}){return Wg(r,void 0,{state:u,isStatic:s,onError:p})}function ex({basename:r="/",children:c=null,location:u,navigationType:s="POP",navigator:p,static:m=!1,unstable_useTransitions:g}){$e(!Pn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),x=A.useMemo(()=>({basename:h,navigator:p,static:m,unstable_useTransitions:g,future:{}}),[h,p,m,g]);typeof u=="string"&&(u=Fn(u));let{pathname:y="/",search:T="",hash:S="",state:U=null,key:_="default",unstable_mask:Y}=u,H=A.useMemo(()=>{let D=ga(y,h);return D==null?null:{location:{pathname:D,search:T,hash:S,state:U,key:_,unstable_mask:Y},navigationType:s}},[h,y,T,S,U,_,s,Y]);return Kt(H!=null,`<Router basename="${h}"> is not able to match the URL "${y}${T}${S}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:A.createElement(Ot.Provider,{value:x},A.createElement(Ao.Provider,{children:c,value:H}))}var wo="get",To="application/x-www-form-urlencoded";function No(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function tx(r){return No(r)&&r.tagName.toLowerCase()==="button"}function ax(r){return No(r)&&r.tagName.toLowerCase()==="form"}function ix(r){return No(r)&&r.tagName.toLowerCase()==="input"}function nx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lx(r,c){return r.button===0&&(!c||c==="_self")&&!nx(r)}var vo=null;function ox(){if(vo===null)try{new FormData(document.createElement("form"),0),vo=!1}catch{vo=!0}return vo}var rx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ic(r){return r!=null&&!rx.has(r)?(Kt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${To}"`),null):r}function sx(r,c){let u,s,p,m,g;if(ax(r)){let h=r.getAttribute("action");s=h?ga(h,c):null,u=r.getAttribute("method")||wo,p=ic(r.getAttribute("enctype"))||To,m=new FormData(r)}else if(tx(r)||ix(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let x=r.getAttribute("formaction")||h.getAttribute("action");if(s=x?ga(x,c):null,u=r.getAttribute("formmethod")||h.getAttribute("method")||wo,p=ic(r.getAttribute("formenctype"))||ic(h.getAttribute("enctype"))||To,m=new FormData(h,r),!ox()){let{name:y,type:T,value:S}=r;if(T==="image"){let U=y?`${y}.`:"";m.append(`${U}x`,"0"),m.append(`${U}y`,"0")}else y&&m.append(y,S)}}else{if(No(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=wo,s=null,p=To,g=r}return m&&p==="text/plain"&&(g=m,m=void 0),{action:s,method:u.toLowerCase(),encType:p,formData:m,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pc(r,c){if(r===!1||r===null||typeof r>"u")throw new Error(c)}function sm(r,c,u,s){let p=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${s}`:p.pathname=`${p.pathname}.${s}`:p.pathname==="/"?p.pathname=`_root.${s}`:c&&ga(p.pathname,c)==="/"?p.pathname=`${zo(c)}/_root.${s}`:p.pathname=`${zo(p.pathname)}.${s}`,p}async function cx(r,c){if(r.id in c)return c[r.id];try{let u=await import(r.module);return c[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function dx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function ux(r,c,u){let s=await Promise.all(r.map(async p=>{let m=c.routes[p.route.id];if(m){let g=await cx(m,u);return g.links?g.links():[]}return[]}));return hx(s.flat(1).filter(dx).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Of(r,c,u,s,p,m){let g=(x,y)=>u[y]?x.route.id!==u[y].route.id:!0,h=(x,y)=>u[y].pathname!==x.pathname||u[y].route.path?.endsWith("*")&&u[y].params["*"]!==x.params["*"];return m==="assets"?c.filter((x,y)=>g(x,y)||h(x,y)):m==="data"?c.filter((x,y)=>{let T=s.routes[x.route.id];if(!T||!T.hasLoader)return!1;if(g(x,y)||h(x,y))return!0;if(x.route.shouldRevalidate){let S=x.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:u[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:x.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function px(r,c,{includeHydrateFallback:u}={}){return fx(r.map(s=>{let p=c.routes[s.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),u&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function fx(r){return[...new Set(r)]}function mx(r){let c={},u=Object.keys(r).sort();for(let s of u)c[s]=r[s];return c}function hx(r,c){let u=new Set;return new Set(c),r.reduce((s,p)=>{let m=JSON.stringify(mx(p));return u.has(m)||(u.add(m),s.push({key:m,link:p})),s},[])}function fc(){let r=A.useContext(Fi);return pc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function gx(){let r=A.useContext(Co);return pc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var mc=A.createContext(void 0);mc.displayName="FrameworkContext";function hc(){let r=A.useContext(mc);return pc(r,"You must render this element inside a <HydratedRouter> element"),r}function xx(r,c){let u=A.useContext(mc),[s,p]=A.useState(!1),[m,g]=A.useState(!1),{onFocus:h,onBlur:x,onMouseEnter:y,onMouseLeave:T,onTouchStart:S}=c,U=A.useRef(null);A.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let H=V=>{V.forEach($=>{g($.isIntersecting)})},D=new IntersectionObserver(H,{threshold:.5});return U.current&&D.observe(U.current),()=>{D.disconnect()}}},[r]),A.useEffect(()=>{if(s){let H=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(H)}}},[s]);let _=()=>{p(!0)},Y=()=>{p(!1),g(!1)};return u?r!=="intent"?[m,U,{}]:[m,U,{onFocus:Qn(h,_),onBlur:Qn(x,Y),onMouseEnter:Qn(y,_),onMouseLeave:Qn(T,Y),onTouchStart:Qn(S,_)}]:[!1,U,{}]}function Qn(r,c){return u=>{r&&r(u),u.defaultPrevented||c(u)}}function bx({page:r,...c}){let u=Bg(),{router:s}=fc(),p=A.useMemo(()=>Vf(s.routes,r,s.basename),[s.routes,r,s.basename]);return p?u?A.createElement(vx,{page:r,matches:p,...c}):A.createElement(jx,{page:r,matches:p,...c}):null}function yx(r){let{manifest:c,routeModules:u}=hc(),[s,p]=A.useState([]);return A.useEffect(()=>{let m=!1;return ux(r,c,u).then(g=>{m||p(g)}),()=>{m=!0}},[r,c,u]),s}function vx({page:r,matches:c,...u}){let s=Ft(),{future:p}=hc(),{basename:m}=fc(),g=A.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let h=sm(r,m,p.unstable_trailingSlashAwareDataRequests,"rsc"),x=!1,y=[];for(let T of c)typeof T.route.shouldRevalidate=="function"?x=!0:y.push(T.route.id);return x&&y.length>0&&h.searchParams.set("_routes",y.join(",")),[h.pathname+h.search]},[m,p.unstable_trailingSlashAwareDataRequests,r,s,c]);return A.createElement(A.Fragment,null,g.map(h=>A.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...u})))}function jx({page:r,matches:c,...u}){let s=Ft(),{future:p,manifest:m,routeModules:g}=hc(),{basename:h}=fc(),{loaderData:x,matches:y}=gx(),T=A.useMemo(()=>Of(r,c,y,m,s,"data"),[r,c,y,m,s]),S=A.useMemo(()=>Of(r,c,y,m,s,"assets"),[r,c,y,m,s]),U=A.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let H=new Set,D=!1;if(c.forEach($=>{let K=m.routes[$.route.id];!K||!K.hasLoader||(!T.some(ve=>ve.route.id===$.route.id)&&$.route.id in x&&g[$.route.id]?.shouldRevalidate||K.hasClientLoader?D=!0:H.add($.route.id))}),H.size===0)return[];let V=sm(r,h,p.unstable_trailingSlashAwareDataRequests,"data");return D&&H.size>0&&V.searchParams.set("_routes",c.filter($=>H.has($.route.id)).map($=>$.route.id).join(",")),[V.pathname+V.search]},[h,p.unstable_trailingSlashAwareDataRequests,x,s,m,T,c,r,g]),_=A.useMemo(()=>px(S,m),[S,m]),Y=yx(S);return A.createElement(A.Fragment,null,U.map(H=>A.createElement("link",{key:H,rel:"prefetch",as:"fetch",href:H,...u})),_.map(H=>A.createElement("link",{key:H,rel:"modulepreload",href:H,...u})),Y.map(({key:H,link:D})=>A.createElement("link",{key:H,nonce:u.nonce,...D,crossOrigin:D.crossOrigin??u.crossOrigin})))}function Sx(...r){return c=>{r.forEach(u=>{typeof u=="function"?u(c):u!=null&&(u.current=c)})}}var wx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wx&&(window.__reactRouterVersion="7.14.1")}catch{}function Tx({basename:r,children:c,unstable_useTransitions:u,window:s}){let p=A.useRef();p.current==null&&(p.current=lg({window:s,v5Compat:!0}));let m=p.current,[g,h]=A.useState({action:m.action,location:m.location}),x=A.useCallback(y=>{u===!1?h(y):A.startTransition(()=>h(y))},[u]);return A.useLayoutEffect(()=>m.listen(x),[m,x]),A.createElement(ex,{basename:r,children:c,location:g.location,navigationType:g.action,navigator:m,unstable_useTransitions:u})}var cm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dm=A.forwardRef(function({onClick:c,discover:u="render",prefetch:s="none",relative:p,reloadDocument:m,replace:g,unstable_mask:h,state:x,target:y,to:T,preventScrollReset:S,viewTransition:U,unstable_defaultShouldRevalidate:_,...Y},H){let{basename:D,navigator:V,unstable_useTransitions:$}=A.useContext(Ot),K=typeof T=="string"&&cm.test(T),ve=Pf(T,D);T=ve.to;let je=qg(T,{relative:p}),Ae=Ft(),I=null;if(h){let _e=sc(h,[],Ae.unstable_mask?Ae.unstable_mask.pathname:"/",!0);D!=="/"&&(_e.pathname=_e.pathname==="/"?D:Wt([D,_e.pathname])),I=V.createHref(_e)}let[Be,Pe,Gt]=xx(s,Y),Tt=Cx(T,{replace:g,unstable_mask:h,state:x,target:y,preventScrollReset:S,relative:p,viewTransition:U,unstable_defaultShouldRevalidate:_,unstable_useTransitions:$});function Ie(_e){c&&c(_e),_e.defaultPrevented||Tt(_e)}let Yt=!(ve.isExternal||m),kt=A.createElement("a",{...Y,...Gt,href:(Yt?I:void 0)||ve.absoluteURL||je,onClick:Yt?Ie:c,ref:Sx(H,Pe),target:y,"data-discover":!K&&u==="render"?"true":void 0});return Be&&!K?A.createElement(A.Fragment,null,kt,A.createElement(bx,{page:je})):kt});dm.displayName="Link";var kx=A.forwardRef(function({"aria-current":c="page",caseSensitive:u=!1,className:s="",end:p=!1,style:m,to:g,viewTransition:h,children:x,...y},T){let S=In(g,{relative:y.relative}),U=Ft(),_=A.useContext(Co),{navigator:Y,basename:H}=A.useContext(Ot),D=_!=null&&Mx(S)&&h===!0,V=Y.encodeLocation?Y.encodeLocation(S).pathname:S.pathname,$=U.pathname,K=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;u||($=$.toLowerCase(),K=K?K.toLowerCase():null,V=V.toLowerCase()),K&&H&&(K=ga(K,H)||K);const ve=V!=="/"&&V.endsWith("/")?V.length-1:V.length;let je=$===V||!p&&$.startsWith(V)&&$.charAt(ve)==="/",Ae=K!=null&&(K===V||!p&&K.startsWith(V)&&K.charAt(V.length)==="/"),I={isActive:je,isPending:Ae,isTransitioning:D},Be=je?c:void 0,Pe;typeof s=="function"?Pe=s(I):Pe=[s,je?"active":null,Ae?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Gt=typeof m=="function"?m(I):m;return A.createElement(dm,{...y,"aria-current":Be,className:Pe,ref:T,style:Gt,to:g,viewTransition:h},typeof x=="function"?x(I):x)});kx.displayName="NavLink";var zx=A.forwardRef(({discover:r="render",fetcherKey:c,navigate:u,reloadDocument:s,replace:p,state:m,method:g=wo,action:h,onSubmit:x,relative:y,preventScrollReset:T,viewTransition:S,unstable_defaultShouldRevalidate:U,..._},Y)=>{let{unstable_useTransitions:H}=A.useContext(Ot),D=Rx(),V=Bx(h,{relative:y}),$=g.toLowerCase()==="get"?"get":"post",K=typeof h=="string"&&cm.test(h),ve=je=>{if(x&&x(je),je.defaultPrevented)return;je.preventDefault();let Ae=je.nativeEvent.submitter,I=Ae?.getAttribute("formmethod")||g,Be=()=>D(Ae||je.currentTarget,{fetcherKey:c,method:I,navigate:u,replace:p,state:m,relative:y,preventScrollReset:T,viewTransition:S,unstable_defaultShouldRevalidate:U});H&&u!==!1?A.startTransition(()=>Be()):Be()};return A.createElement("form",{ref:Y,method:$,action:V,onSubmit:s?x:ve,..._,"data-discover":!K&&r==="render"?"true":void 0})});zx.displayName="Form";function Ex(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function um(r){let c=A.useContext(Fi);return $e(c,Ex(r)),c}function Cx(r,{target:c,replace:u,unstable_mask:s,state:p,preventScrollReset:m,relative:g,viewTransition:h,unstable_defaultShouldRevalidate:x,unstable_useTransitions:y}={}){let T=lm(),S=Ft(),U=In(r,{relative:g});return A.useCallback(_=>{if(lx(_,c)){_.preventDefault();let Y=u!==void 0?u:Kn(S)===Kn(U),H=()=>T(r,{replace:Y,unstable_mask:s,state:p,preventScrollReset:m,relative:g,viewTransition:h,unstable_defaultShouldRevalidate:x});y?A.startTransition(()=>H()):H()}},[S,T,U,u,s,p,c,r,m,g,h,x,y])}var Ax=0,Nx=()=>`__${String(++Ax)}__`;function Rx(){let{router:r}=um("useSubmit"),{basename:c}=A.useContext(Ot),u=Kg(),s=r.fetch,p=r.navigate;return A.useCallback(async(m,g={})=>{let{action:h,method:x,encType:y,formData:T,body:S}=sx(m,c);if(g.navigate===!1){let U=g.fetcherKey||Nx();await s(U,u,g.action||h,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:S,formMethod:g.method||x,formEncType:g.encType||y,flushSync:g.flushSync})}else await p(g.action||h,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:T,body:S,formMethod:g.method||x,formEncType:g.encType||y,replace:g.replace,state:g.state,fromRouteId:u,flushSync:g.flushSync,viewTransition:g.viewTransition})},[s,p,c,u])}function Bx(r,{relative:c}={}){let{basename:u}=A.useContext(Ot),s=A.useContext(xa);$e(s,"useFormAction must be used inside a RouteContext");let[p]=s.matches.slice(-1),m={...In(r||".",{relative:c})},g=Ft();if(r==null){m.search=g.search;let h=new URLSearchParams(m.search),x=h.getAll("index");if(x.some(T=>T==="")){h.delete("index"),x.filter(S=>S).forEach(S=>h.append("index",S));let T=h.toString();m.search=T?`?${T}`:""}}return(!r||r===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(m.pathname=m.pathname==="/"?u:Wt([u,m.pathname])),Kn(m)}function Mx(r,{relative:c}={}){let u=A.useContext(tm);$e(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=um("useViewTransitionState"),p=In(r,{relative:c});if(!u.isTransitioning)return!1;let m=ga(u.currentLocation.pathname,s)||u.currentLocation.pathname,g=ga(u.nextLocation.pathname,s)||u.nextLocation.pathname;return ko(p.pathname,g)!=null||ko(p.pathname,m)!=null}const pm=Zt.createContext({lang:"pt-BR",setLang:()=>{}}),Lx=()=>Zt.useContext(pm),Te={"pt-BR":{nav:{home:"Home",products:"Produtos",technology:"Tecnologia",cases:"Cases",content:"Conteúdos",about:"Sobre",contact:"Fale Conosco"},footer:{tagline:"Crie sua fintech com tecnologia pronta para operar, escalar e evoluir.",productsLabel:"Produtos",companyLabel:"Empresa",contactLabel:"Contato",ecosystem:"Ecossistema e associações",techPartners:"Parceiros tecnológicos",legal:"A JUST atua exclusivamente como provedora de tecnologia e não realiza atividades privativas de instituições financeiras. Todos os serviços financeiros são operados por parceiros devidamente autorizados pelo Banco Central do Brasil.",rights:"© 2026 JUST. Todos os direitos reservados.",privacy:"Política de Privacidade"},home:{heroTag:"Plataforma de produtos financeiros",heroLine1:"Sua fintech.",heroLine2:"Pronta para operar",heroLine3:"em semanas, não anos.",heroSubtitle:"Plataformas financeiras completas, com tecnologia modular e integrações prontas para escalar.",step1:"Configure",step2:"Personalize",step3:"Lance",cta1:"Fale com um especialista",cta2:"Ver cases",ecosystemLabel:"Ecossistema e parceiros",deparaTag:"Por que a JUST",deparaTitle:`O que muda quando você
opera com a gente.`,deparaWithout:"Sem a JUST",deparaWith:"Com a JUST",productsTag:"Produtos",productsTitle:`Módulos prontos para cada
vertical do seu negócio.`,productsSubtitle:"Cada produto opera de forma independente ou combinada. Tudo modular e pronto para escalar.",cardsTag:"Arranjos de cartão",cardsTitle:"Bandeirado ou Private Label?",cardsGradient:"Você escolhe.",cardsSubtitle:"Operamos com arranjo aberto (bandeirado), fechado (private label) ou híbrido. A decisão é estratégica e nós ajudamos você a tomar.",cardsOpenLabel:"Arranjo Aberto",cardsOpenTitle:"Cartão Bandeirado",cardsClosedLabel:"Arranjo Fechado",cardsClosedTitle:"Cartão Private Label",cardsOr:"ou",cardsPioneer:"Pioneiros no Brasil",cardsHybridTitle:`Por que escolher um
se você pode ter `,cardsHybridGradient:"os dois?",cardsHybridDesc:"Somos pioneiros no Brasil em operar o modelo híbrido: arranjo aberto e fechado na mesma plataforma, com experiência unificada. Você decide quais usuários usam bandeirado e quais usam private label.",processTag:"Como funciona",processTitle:"Do briefing ao produto no ar.",processGradient:"Sem surpresas.",processSubtitle:"Um processo estruturado que já entregou 18+ fintechs. Cada etapa tem escopo, prazo e entregável claro.",process1Title:"Discovery e diagnóstico",process1Desc:"Mapeamos o modelo de negócio, fluxos financeiros, integradores necessários e regras de operação. Sem esse alinhamento, não avançamos.",process2Title:"Arquitetura e configuração",process2Desc:"Ativamos os módulos da nossa stack que se encaixam no projeto. 70-80% da tecnologia já está pronta. O resto é configuração, não construção.",process3Title:"Integração e homologação",process3Desc:"Conectamos BaaS, credenciadoras e parceiros. Cada sprint tem entrega visível. Você acompanha em tempo real pelo nosso painel.",process4Title:"Go-live e evolução",process4Desc:"Produto no ar com monitoramento 24/7, suporte dedicado e roadmap de evolução. Não entregamos e sumimos.",summary1:"~90 dias do kick-off ao go-live",summary1sub:"Produto padrão, sem customizações complexas",summary2:"70-80% da stack ja pronta",summary2sub:"Configuração, não construção do zero",summary3:"Sprints com entrega visível",summary3sub:"Você acompanha cada etapa",metricsTPV:"TPV processado",metricsTX:"Transações processadas",metricsUsers:"Usuários",metricsClients:"Clientes",casesTag:"Cases",casesTitle:"Resultados reais. Fintechs em produção.",casesSubtitle:"Conheça alguns dos produtos que construímos e operamos com nossos parceiros.",ctaFinalTitle:"Pronto para ter sua própria fintech?",ctaFinalSubtitle:"Converse com nosso time e veja como nossos produtos se aplicam ao seu negócio.",ctaFinalBtn:"Agendar uma conversa",comparisons:[{sem:{title:"12-24 meses para lançar",desc:"Projetos longos, estouro de prazo e budget. Produto chega tarde ao mercado."},com:{title:"Produto no ar em semanas",desc:"Stack com 70-80% de reuso. Go-live em semanas, não anos."}},{sem:{title:"Lock-in com um único provedor",desc:"Preso a um BaaS ou adquirente. Sem flexibilidade para mudar ou negociar."},com:{title:"Multi-provider, sem lock-in",desc:"Arquitetura multi-BaaS e multi-adquirente. Troque sem reescrever."}},{sem:{title:"Complexidade regulatória",desc:"Tempo e dinheiro gastos com compliance bancário ao invés de produto."},com:{title:"Regulatório resolvido",desc:"Operamos sobre BaaS regulados. Com isso nosso time pode se focar 100% no desenvolvimento do seu produto."}},{sem:{title:"Tecnologia que não escala",desc:"Funciona com 1.000 usuários. Quebra com 50.000."},com:{title:"Escala comprovada",desc:"R$900M+ processados, 500k+ usuários. Infraestrutura testada em produção."}},{sem:{title:"Produtos genéricos",desc:"Produto de prateleira com cara de template. Mesma experiência pra todo mundo."},com:{title:"Produtos customizados de verdade",desc:"Jornada, regras e visual desenhados pro seu negócio. Ninguém sabe que somos nós."}},{sem:{title:"Time sem experiência no segmento",desc:"Desenvolvedores generalistas aprendendo fintech do zero. Curva longa e cara."},com:{title:"Time especialista no segmento",desc:"+5 anos construindo fintechs. Benefícios, frotas, banking, despesas. Já passamos por isso."}}],cardsOpenFeatures:["Aceitação ampla em toda rede credenciada","Mastercard, Visa ou Elo","Ideal para benefícios e banking com capilaridade","Regras de MCC e controle por categoria"],cardsClosedFeatures:["Rede própria de aceitação, controle total","Sua marca no cartão, sem bandeira de terceiro","Ideal para frotas, vales e ecossistemas fechados","Autorizador próprio com regras em tempo real"],hybridFeatures:[{bold:"Bandeirado para uso geral",text:" com aceitação em toda rede credenciada Mastercard/Visa"},{bold:"Private label para rede própria",text:" com regras específicas e controle total do ecossistema"},{bold:"Dois meios de uso,",text:" uma experiência unificada para o seu usuário"}]},products:{beneficios:{name:"JUST Benefits",desc:"Arranjo aberto, fechado ou híbrido. Múltiplos saldos com regras customizáveis e controle total.",headerDesc:"Benefícios flexíveis com arranjo customizável"},frotas:{name:"JUST Fleet",desc:"Abastecimento, pedágio, manutenção. Controle financeiro por veículo com regras em tempo real.",headerDesc:"Controle financeiro completo por veículo"},banking:{name:"JUST Banking",desc:"Conta digital, cartão, PIX, transferências. Banking completo sobre BaaS.",headerDesc:"Conta, cartão e PIX com sua marca"},despesas:{name:"JUST Expense",desc:"Cartões corporativos com políticas de uso, limites e conciliação automática.",headerDesc:"Cartões corporativos com políticas inteligentes"},antecipacao:{name:"JUST Credit",desc:"Private label, antecipação e recebíveis. Produtos de crédito integrados ao seu negócio.",headerDesc:"Produtos de crédito sob medida"},"sob-demanda":{name:"JUST Custom",desc:"Produto que não cabe em prateleira? Arquitetamos e construímos sob medida.",headerDesc:"Produtos financeiros sob medida"},sentinel:{name:"JUST Sentinel",desc:"Detecção de fraude em tempo real e risk scoring para autorização de cartões.",headerDesc:"Antifraude AI-native em tempo real"}},sobre:{tag:"Quem somos",h1:"Criada por experts",intro:"A JUST nasceu em 2020 para resolver um problema simples e recorrente no mercado financeiro: promessas que não viram produto. Desenvolvemos e integramos tecnologia financeira para empresas que precisam operar com velocidade, segurança e escala.",tesesTag:"Nossa tese",tesesTitle:`Execução acima
de promessa.`,tesesP1:"Acreditamos que o maior gargalo da indústria não é ideia, nem tecnologia. É execução.",tesesP2:"Muitos projetos falham porque tentam recriar um banco inteiro a cada novo produto, assumindo complexidades regulatórias e técnicas que não agregam valor à jornada do cliente.",tesesP3:"A JUST segue outro caminho. Trabalhamos sobre estruturas de BaaS robustas e consolidadas, eliminamos o peso regulatório e focamos 100% no produto, na experiência do usuário e na operação financeira.",principiosTag:"Como pensamos",principiosTitle:`Princípios que guiam
cada decisão.`,p1Title:"Produto, não promessa",p1Desc:"Não vendemos roadmaps ou protótipos. Entregamos plataformas em produção, operando desde o dia 1. Produto financeiro só existe quando está no ar.",p2Title:"Estrutura gera velocidade",p2Desc:"Stack proprietária com 70-80% de reuso entre projetos. Módulos prontos, governança definida. Fintechs completas em meses, não anos.",p3Title:"Parceiro estratégico",p3Desc:"Atuamos como braço tecnológico do negócio. Assumimos responsabilidade pelo produto e tomamos decisões com base no que precisa funcionar.",trajetoriaTag:"Trajetória",trajetoriaTitle:`Do primeiro produto
ão ecossistema.`,liderancaTag:"Liderança",liderancaTitle:`Experiência que sustenta
a entrega.`,commitment:"Nosso compromisso",commitmentTitle:"Fintechs podem ser construidas em meses, não em anos.",commitmentDesc:"Sem reinvenção de roda. Sem burocracia desnecessária. Sem promessas vazias. Plataformas financeiras completas para quem precisa operar rápido, com solidez técnica e foco total no negócio. Esse é o nosso compromisso desde 2020.",cta:"Quer conhecer nossos produtos?",ctaBtn:"Fale com nosso time",timeline:[{y:"2020",t:"Fundação",d:"Gabriel Pires funda a JUST com um princípio claro: produto financeiro só existe quando está operando."},{y:"2021",t:"Primeiros clientes",d:"Início das operações com eFleet e primeiros projetos de benefícios e gestão de frotas."},{y:"2022",t:"Stack própria",d:"Stack proprietária atinge 70% de reuso entre projetos. Velocidade de entrega se torna diferencial competitivo."},{y:"2023",t:"Escala",d:"10+ clientes ativos. R$500M+ em processamento anual. Modelo de plataforma validado pelo mercado."},{y:"2024",t:"Validação",d:"ViaSoftPay do zero a produção em 45 dias. NPS 76. Entrada em novos nichos: banking, despesas, crédito."},{y:"2025",t:"Expansão",d:"18+ clientes ativos. 40k+ usuários. R$900M+ TPV processado. Operação consolidada em múltiplas verticais."}]},cases:{tag:"Cases",h1:"Resultados reais. Fintechs em produção.",tpvLabel:"TPV processado",txLabel:"Transações processadas",usersLabel:"Usuários",clientsLabel:"Clientes",cta:"Quer resultados parecidos?",ctaBtn:"Agendar uma reunião",casesList:[{tag:"Benefícios",name:"ViaSoftPay",headline:"Do zero à produção em 45 dias",items:["45 dias do início ao go-live","100k+ usuários ativos","R$500M+ processamento anual","NPS 100"]},{tag:"Frotas",name:"eFleet",headline:"5+ anos de parceria, 10+ módulos",items:["5+ anos de parceria contínua","10+ módulos em produção","R$500M+ processamento anual"]},{tag:"Arranjo Híbrido",name:"SmartVale",headline:"Primeiro arranjo híbrido do portfolio",items:["Arranjo híbrido em produção","Fechado + aberto integrados","Regras customizadas por saldo"]},{tag:"Benefícios + Crédito",name:"KPI",headline:"266% de crescimento em transações",items:["266% crescimento","Benefícios + crédito integrados","Produto combinado único"]}]},contato:{h1:"Vamos construir sua fintech.",subtitle:"Nosso time retorna em ate 24h uteis.",nameLabel:"Nome *",emailLabel:"Email corporativo *",companyLabel:"Empresa *",phoneLabel:"Telefone",productLabel:"Produto de interesse *",productPlaceholder:"Selecione",projectLabel:"Sobre o projeto",projectPlaceholder:"Quantos usuários? Prazo? Cenário atual?",submitBtn:"Enviar mensagem",sendingBtn:"Enviando...",successTitle:"Mensagem enviada!",successMsg:"Retornamos em ate 24h uteis.",errorRequired:"Preencha todos os campos obrigatórios.",errorSend:"Erro ao enviar. Tente novamente ou entre em contato pelo email contato@wearejust.it",emailLabel2:"Email",whatsappLabel:"WhatsApp",locationLabel:"Localização",hoursLabel:"Horário",hours:"Seg-Sex, 9h-18h",faqTitle:"Perguntas frequentes",faqs:[{q:"Quais tipos de cartões a JUST desenvolve?",a:"A JUST nasceu com forte atuação em arranjos fechados (cartões private label), onde operamos tecnologias próprias de processamento. Hoje, também desenvolvemos produtos integrados a arranjos abertos, trabalhando com emissores regulados de Visa, Mastercard e Elo. Isso nos permite criar arquiteturas híbridas, orquestrando múltiplos provedores de pagamento, emissores e componentes de processamento, sempre de acordo com o modelo de negócio e o nível de complexidade do projeto. Não estamos limitados a um único arranjo ou fornecedor. Projetamos a melhor combinação técnica e regulatória para cada caso."},{q:"A JUST vende plataformas prontas de prateleira?",a:"Não vendemos plataformas genéricas no modelo tradicional. Acreditamos que cada negócio possui identidade, estratégia e regras próprias. Por isso, tratamos cada projeto de forma individualizada, mesmo partindo de uma base tecnológica comum. Utilizamos componentes e frameworks já consolidados para acelerar o início do projeto, mas cada solução evolui com regras de negócio, fluxos, integrações e experiências específicas, alinhadas à realidade do cliente. Na prática, entregamos plataformas sob medida, não produtos genéricos customizados."},{q:"A JUST é uma entidade regulada pelo Banco Central do Brasil?",a:"Não. A JUST é uma provedora de tecnologia. Atuamos no desenvolvimento de plataformas para empresas que podem ou não estar inseridas em ambientes regulados pelo Banco Central do Brasil, dependendo do tipo de produto. Algumas soluções, como Benefícios Flexíveis, não exigem regulação bancária. Outras, como Despesas Corporativas, contas de pagamento ou emissão em arranjos abertos, podem exigir. Nesses casos, trabalhamos em conjunto com parceiros regulados, responsáveis pela carga regulatória, enquanto a JUST desenvolve e integra toda a camada tecnológica, garantindo que o produto final esteja em conformidade com as normas aplicáveis."},{q:"A JUST é uma software house?",a:"Sim, mas não apenas isso. Somos especialistas em plataformas de meios de pagamento, porém atuamos como parceiros estratégicos dos nossos clientes. Nosso trabalho vai além do desenvolvimento técnico e inclui: apoio na definição do modelo de negócio, arquitetura de produto e diferenciação competitiva, construção da plataforma tecnológica, e suporte à operação e evolução contínua do produto. Nosso foco é viabilizar negócios financeiros sustentáveis, não apenas entregar código."},{q:"Quero criar uma fintech, mas não sei por onde começar. A JUST consegue ajudar?",a:"Sim. Além da área de desenvolvimento, contamos com a JUST Consulting, uma unidade focada em apoiar empresas desde as fases iniciais do projeto. Auxiliamos em ideação e validação do modelo de negócio, definição do produto financeiro, avaliação regulatória e estrutural, e planejamento da execução técnica. O objetivo é reduzir erros comuns, acelerar decisões críticas e construir um produto viável desde o início."},{q:"A JUST assume risco regulatório ou financeiro da operação?",a:"Não. A JUST é responsável pela camada tecnológica. O risco regulatório e financeiro permanece com o cliente e, quando aplicável, com os parceiros regulados envolvidos na operação. Nosso papel é garantir que a tecnologia suporte corretamente as exigências regulatórias definidas para o produto."},{q:"Em quanto tempo meu produto pode ir ao ar?",a:"O prazo varia conforme o nível de complexidade, integrações e exigências regulatórias. Projetos mais simples podem ser lançados em poucos meses. Projetos mais complexos exigem fases adicionais de arquitetura, homologação e testes. Preferimos definir prazos realistas desde o início, priorizando segurança, estabilidade e sustentabilidade da operação."}]},stack:{tag:"Tecnologia",h1:"A base técnica que sustenta produtos financeiros em produção.",subtitle:"Todo produto financeiro sólido começa por uma fundação técnica bem definida. A JUST constrói essa base para garantir segurança, escala e evolução contínua.",platformTag:"Plataforma",platformTitle:"Componentes da plataforma.",platformSubtitle:"Cada componente foi construído para operar de forma independente e integrada. Seu produto. Suas regras. Sem gambiarras.",integrationsTag:"Integrações",integrationsTitle:"Multi-provider por design.",integrationsSubtitle:"Nenhum produto financeiro deve depender de um único fornecedor. O produto continua o mesmo. Os fornecedores podem mudar.",securityTag:"Segurança",securityTitle:"Segurança como processo, não como feature.",securitySubtitle:"Produtos financeiros não podem falhar em produção. Nossa arquitetura parte desse princípio.",cta:"Quer entender como se aplica ao seu caso?",ctaBtn:"Fale com nosso time técnico",secHighlightLabels:["Recorrente com retest formal","Partner com infra dedicada","Compliance implementado","Mobile Top 10 aplicado"],secCards:[{title:"Defense in Depth",desc:"Proteção em camadas: WAF em borda, API Gateway com rate limiting, autenticação JWT, isolamento de rede via VPC."},{title:"PCI-Aware Architecture",desc:"Arquitetura desenhada com consciência dos padrões PCI DSS. Dados sensíveis sob custodia da instituicao financeira regulada."},{title:"AWS Infrastructure",desc:"VPC isolada, subnets privadas, criptografia KMS, TLS 1.3, RDS Multi-AZ com backups diarios."},{title:"Monitoramento 24/7",desc:"Dashboards Grafana em tempo real. Logs centralizados com retenção para auditoria. Alertas automáticos."},{title:"Pen Test Recorrente",desc:"Testes de intrusão Gray/White Box com ciclo semestral. Retest formal de vulnerabilidades críticas e altas."},{title:"Mobile Security (OWASP)",desc:"Runtime hardening: detecção de root/jáilbreak, SSL Pinning, detecção de proxy/MITM. Confianca minima no cliente."}],mpSwapBold:"Troque de provider sem impacto no produto.",mpSwapText:" A camada de abstração da JUST isola seu produto das dependências de fornecedores. Migre, adicione ou remova providers em produção."},solution:{modelsTitle:"Modelos de operação",capabilitiesTitle:"Capacidades",ctaTitle:"Quer entender como funciona?",ctaBtn:"Agendar uma conversa"},privacy:{tag:"Privacidade",h1:"Política de Privacidade",subtitle:"Como a JUST trata dados pessoais em seus canais digitais, comerciais e de relacionamento.",updatedLabel:"Última atualização",updatedAt:"20 de abril de 2026",introTitle:"Compromisso com transparência",intro:["Esta Política de Privacidade explica, de forma objetiva, como a JUST coleta, utiliza, armazena, compartilha e protege dados pessoais relacionados ao uso deste site, aos formulários de contato e às interações comerciais com nosso time.","A JUST atua como provedora de tecnologia para plataformas financeiras digitais. Dependendo do projeto, também podemos tratar dados em nome de clientes e parceiros, conforme contratos específicos. Esta política cobre principalmente os dados tratados diretamente pela JUST em seus próprios canais."],sections:[{title:"1. Dados que podemos coletar",body:["Dados de identificação e contato, como nome, email corporativo, telefone, empresa, cargo e mensagens enviadas por formulários, email, WhatsApp, LinkedIn ou outros canais.","Dados profissionais e de negócio compartilhados durante conversas comerciais, como produto de interesse, tamanho da operação, necessidades técnicas e contexto do projeto.","Dados técnicos e de navegação, como endereço IP, identificadores de dispositivo, navegador, sistema operacional, páginas acessadas, origem de acesso, data, horário e informações coletadas por cookies ou tecnologias semelhantes.","Não solicitamos dados pessoais sensíveis em nossos formulários. Caso você envie esse tipo de informação espontaneamente, poderemos desconsidera-la, exclui-la ou trata-la apenas quando houver base legal adequada."]},{title:"2. Para que usamos os dados",body:["Responder solicitações de contato, agendar conversas, qualificar oportunidades e conduzir relações comerciais ou pré-contratuais.","Entender o interesse em nossos produtos, preparar propostas, demonstrações e materiais técnicos adequados ao contexto informado.","Operar, medir, proteger e melhorar o site, nossos canais digitais e a experiência de navegação.","Enviar comunicações institucionais, comerciais ou técnicas relacionadas a JUST, sempre observando preferências, opt-out e requisitos legais aplicáveis.","Cumprir obrigações legais, regulacionais, contratuais, auditorias, requisições de autoridades e exercício regular de direitos."]},{title:"3. Bases legais",body:["Tratamos dados pessoais com base nas hipóteses previstas na legislação aplicável, incluindo execução de contrato ou procedimentos preliminares, cumprimento de obrigação legal ou regulatória, legítimo interesse, consentimento quando necessário e exercício regular de direitos.","Quando utilizarmos legítimo interesse, buscamos avaliar a proporcionalidade do tratamento e adotar medidas para reduzir impactos indevidos aos titulares."]},{title:"4. Cookies e tecnologias semelhantes",body:["Podemos utilizar cookies essenciais para funcionamento do site e tecnologias de medição ou analytics para entender desempenho, origem de acesso e interações com as páginas.","Você pode bloquear, apagar ou gerenciar cookies nas configurações do seu navegador. Algumas funcionalidades podem ficar indisponíveis ou menos eficientes se cookies essenciais forem desativados."]},{title:"5. Compartilhamento de dados",body:["Podemos compartilhar dados com fornecedores de tecnologia, hospedagem, segurança, analytics, CRM, comunicação, automação, atendimento e outras ferramentas necessárias para operar nossos canais.","Também poderemos compartilhar informações com parceiros de negócio, consultores, auditores, autoridades públicas ou terceiros quando isso for necessário para cumprir obrigações legais, proteger direitos, responder solicitações ou viabilizar uma interacao solicitada por você.","Quando terceiros tratarem dados em nosso nome, buscamos estabelecer obrigações de confidencialidade, segurança e uso compatível com as finalidades informadas."]},{title:"6. Transferencias internacionais",body:["Alguns fornecedores ou sistemas utilizados pela JUST podem armazenar ou processar dados fora do Brasil. Nesses casos, adotamos medidas compatíveis com a legislação aplicável para proteger os dados transferidos."]},{title:"7. Retenção e descarte",body:["Mantemos dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, atender obrigações legais ou regulatórias, preservar registros comerciais e exercer direitos em processos administrativos, judiciais ou arbitrais.","Quando os dados deixarem de ser necessários, poderemos elimina-los, anonimiza-los ou mante-los apenas quando houver base legal para conservação."]},{title:"8. Direitos dos titulares",body:["Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, bloqueio ou eliminação de dados, portabilidade quando aplicável, informações sobre compartilhamento, revisão de decisões automatizadas quando existentes, oposição ao tratamento e revogação de consentimento.","Para exercer seus direitos, envie uma solicitação para contato@wearejust.it. Podemos solicitar informações adicionais para confirmar sua identidade e proteger seus dados."]},{title:"9. Segurança da informação",body:["Adotamos medidas técnicas e organizacionais para proteger dados pessoais contra acessos não autorizados, perda, alteração, divulgação indevida ou tratamento inadequado.","Apesar dos nossos esforços, nenhum ambiente digital é completamente imune a riscos. Caso identifiquemos incidente relevante envolvendo dados pessoais, avaliaremos as medidas cabíveis e as comunicações exigidas pela legislação."]},{title:"10. Alterações nesta política",body:["Podemos atualizar esta Política de Privacidade para refletir mudanças legais, técnicas, operacionais ou comerciais. A versão vigente será sempre a publicada nesta página, com a data de última atualização."]}],contactTitle:"Canal de privacidade",contactText:"Para dúvidas sobre esta política ou solicitações relacionadas aos seus dados pessoais, fale com a JUST pelo email abaixo.",contactEmail:"contato@wearejust.it"},sentinel:{metaTitle:"Sentinel — Antifraude em tempo real | JUST",metaDesc:"Sentinel é a camada antifraude da JUST: risk scoring em tempo real para autorização de cartões, com modelos proprietários treinados em 6M+ transações.",heroTag:"Em desenvolvimento — Lançamento Q1.26",heroAiTag:"AI-Powered",h1:"Proteção inteligente em cada transação",heroSubtitle:"Sentinel é a camada de inteligência antifraude da JUST: risk scoring em tempo real em cada autorização de cartão, com latência inferior a 100ms e modelos proprietários treinados sobre milhões de transações reais.",heroCta:"Quero conhecer o Sentinel",whatTitle:"Antifraude construído para a infraestrutura JUST",whatText:"Nascido como parte da plataforma modular da JUST, o Sentinel analisa cada autorização de cartão em tempo real, identificando padrões de risco antes que a transação seja aprovada. Diferente de soluções genéricas de mercado, o Sentinel é treinado continuamente sobre o dataset proprietário de transações da plataforma JUST, entregando precisão específica para os contextos de uso dos nossos clientes.",benefitsTitle:"Por que escolher o Sentinel",b1Title:"Decisão em menos de 100ms",b1Desc:"Inferência acelerada por GPU integrada ao fluxo transacional, sem adicionar latência perceptível ao usuário final.",b2Title:"Modelos treinados com dados reais",b2Desc:"Dataset proprietário com mais de 6 milhões de transações reais, com reentreinamento contínuo para adaptação a novos padrões de fraude.",b3Title:"Redução de chargebacks",b3Desc:"Identificação precoce de transações suspeitas reduz perdas por fraude e melhora indicadores de aprovação junto às bandeiras.",b4Title:"Integrado ao core da JUST",b4Desc:"Sem necessidade de contratar fornecedores externos: Sentinel já nasce conectado à plataforma de processamento e backoffice financeiro da JUST.",techTitle:"Construido sobre infraestrutura de ponta",techSubtitle:"Sentinel combina o melhor da engenharia de pagamentos com tecnologia de inteligência artificial de última geração.",techBullets:["Inferência em GPU NVIDIA (G5, P4d) na AWS","Modelos de deep learning e gradient boosting","Pipelines de reentreinamento contínuo","Arquitetura event-driven integrada ao core transacional","Exposição via API REST para parceiros e emissores"],forWhoTitle:"Construido para quem processa pagamentos em escala",forWhoItems:["Emissores de cartão corporativo e de benefícios","Fintechs de despesas corporativas e frotas","Programas BaaS que precisam de proteção adicional sobre a autorização","Redes varejistas com private label","Qualquer operação com volume relevante de transações em cartão"],statusTitle:"Onde o Sentinel está agora",statusText:"Sentinel está em fase final de desenvolvimento, com lançamento previsto para Q1.26. Clientes atuais da plataforma JUST terão acesso preferencial na fase de lançamento. Entre em contato para conhecer a roadmap detalhada e discutir casos de uso específicos.",statusCta:"Quero estar na primeira onda",ctaFinal:"Transforme o risco em inteligência. Fale com nosso time.",ctaFinalBtn:"Falar com especialista"}},en:{nav:{home:"Home",products:"Products",technology:"Technology",cases:"Cases",content:"Content",about:"About",contact:"Contact Us"},footer:{tagline:"Launch your fintech with technology ready to operate, scale and evolve.",productsLabel:"Products",companyLabel:"Company",contactLabel:"Contact",ecosystem:"Ecosystem & associations",techPartners:"Technology partners",legal:"JUST operates exclusively as a technology provider and does not perform activities exclusive to financial institutions. All financial services are operated by partners duly authorized by the Central Bank of Brazil.",rights:"© 2026 JUST. All rights reserved.",privacy:"Privacy Policy"},home:{heroTag:"Financial product platform",heroLine1:"Your fintech.",heroLine2:"Ready to operate",heroLine3:"in weeks, not years.",heroSubtitle:"Complete financial platforms, with modular technology and integrations ready to scale.",step1:"Configure",step2:"Customize",step3:"Launch",cta1:"Talk to a specialist",cta2:"View cases",ecosystemLabel:"Ecosystem & partners",deparaTag:"Why JUST",deparaTitle:`What changes when you
build with us.`,deparaWithout:"Without JUST",deparaWith:"With JUST",productsTag:"Products",productsTitle:`Ready-made modules for each
vertical of your business.`,productsSubtitle:"Each product operates independently or combined. Modular and ready to scale.",cardsTag:"Card arrangements",cardsTitle:"Branded or Private Label?",cardsGradient:"You choose.",cardsSubtitle:"We operate with open arrangement (branded), closed (private label) or hybrid. The decision is strategic and we help you make it.",cardsOpenLabel:"Open Arrangement",cardsOpenTitle:"Branded Card",cardsClosedLabel:"Closed Arrangement",cardsClosedTitle:"Private Label Card",cardsOr:"or",cardsPioneer:"Pioneers in Brazil",cardsHybridTitle:`Why choose one
when you can have `,cardsHybridGradient:"both?",cardsHybridDesc:"We are pioneers in Brazil in operating the hybrid model: open and closed arrangement on the same platform, with a unified experience. You decide which users use branded and which use private label.",processTag:"How it works",processTitle:"From briefing to live product.",processGradient:"No surprises.",processSubtitle:"A structured process that has already delivered 18+ fintechs. Each stage has clear scope, deadline and deliverables.",process1Title:"Discovery & diagnosis",process1Desc:"We map the business model, financial flows, required integrations and operating rules. Without this alignment, we don't proceed.",process2Title:"Architecture & configuration",process2Desc:"We activate the modules from our stack that fit the project. 70-80% of the technology is already ready. The rest is configuration, not construction.",process3Title:"Integration & certification",process3Desc:"We connect BaaS, acquirers and partners. Each sprint has visible delivery. You follow along in real time via our dashboard.",process4Title:"Go-live & evolution",process4Desc:"Product live with 24/7 monitoring, dedicated support and evolution roadmap. We don't deliver and disappear.",summary1:"~90 days from kick-off to go-live",summary1sub:"Standard product, no complex customizations",summary2:"70-80% of the stack already ready",summary2sub:"Configuration, not building from scratch",summary3:"Sprints with visible delivery",summary3sub:"You track every step",metricsTPV:"Processed TPV",metricsTX:"Transactions processed",metricsUsers:"Users",metricsClients:"Clients",casesTag:"Cases",casesTitle:"Real results. Fintechs in production.",casesSubtitle:"Discover some of the products we built and operate with our partners.",ctaFinalTitle:"Ready to have your own fintech?",ctaFinalSubtitle:"Talk to our team and see how our products apply to your business.",ctaFinalBtn:"Schedule a call",comparisons:[{sem:{title:"12-24 months to launch",desc:"Long projects, blown deadlines and budgets. Product arrives late to market."},com:{title:"Product live in weeks",desc:"Stack with 70-80% reuse. Go-live in weeks, not years."}},{sem:{title:"Lock-in with a single provider",desc:"Stuck with one BaaS or acquirer. No flexibility to switch or negotiate."},com:{title:"Multi-provider, no lock-in",desc:"Multi-BaaS and multi-acquirer architecture. Switch without rewriting."}},{sem:{title:"Regulatory complexity",desc:"Time and money spent on banking compliance instead of product."},com:{title:"Regulatory solved",desc:"We operate on regulated BaaS. Our team can focus 100% on building your product."}},{sem:{title:"Technology that doesn't scale",desc:"Works with 1,000 users. Breaks with 50,000."},com:{title:"Proven scale",desc:"R$900M+ processed, 500k+ users. Infrastructure tested in production."}},{sem:{title:"Generic products",desc:"Off-the-shelf product that looks like a template. Same experience for everyone."},com:{title:"Truly custom products",desc:"Journey, rules and design tailored to your business. Nobody knows it's us."}},{sem:{title:"Team without segment experience",desc:"Generalist developers learning fintech from scratch. Long and expensive learning curve."},com:{title:"Segment specialist team",desc:"5+ years building fintechs. Benefits, fleets, banking, expenses. We've been through it."}}],cardsOpenFeatures:["Wide acceptance across the entire credentialed network","Mastercard, Visa or Elo","Ideal for benefits and banking with capillarity","MCC rules and category-level control"],cardsClosedFeatures:["Own acceptance network, full control","Your brand on the card, no third-party flag","Ideal for fleets, vouchers and closed ecosystems","Own authorizer with real-time rules"],hybridFeatures:[{bold:"Branded for general use",text:" with acceptance across the entire Mastercard/Visa credentialed network"},{bold:"Private label for own network",text:" with specific rules and full ecosystem control"},{bold:"Two payment modes,",text:" one unified experience for your user"}]},products:{beneficios:{name:"JUST Benefits",desc:"Open, closed or hybrid arrangement. Multiple balances with customizable rules and full control.",headerDesc:"Flexible benefits with customizable arrangement"},frotas:{name:"JUST Fleet",desc:"Fuel, tolls, maintenance. Financial control per vehicle with real-time rules.",headerDesc:"Complete financial control per vehicle"},banking:{name:"JUST Banking",desc:"Digital account, card, PIX, transfers. Complete banking on BaaS.",headerDesc:"Account, card and PIX with your brand"},despesas:{name:"JUST Expense",desc:"Corporate cards with usage policies, limits and automatic reconciliation.",headerDesc:"Corporate cards with smart policies"},antecipacao:{name:"JUST Credit",desc:"Private label, payroll advance and receivables. Credit products integrated into your business.",headerDesc:"Custom credit products"},"sob-demanda":{name:"JUST Custom",desc:"Product that doesn't fit off the shelf? We architect and build it to order.",headerDesc:"Custom financial products"},sentinel:{name:"JUST Sentinel",desc:"Real-time fraud detection and risk scoring for card authorization.",headerDesc:"AI-native real-time fraud detection"}},sobre:{tag:"Who we are",h1:"Built by experts",intro:"JUST was founded in 2020 to solve a simple, recurring problem in the financial market: promises that never became products. We build fintechs for those tired of waiting.",tesesTag:"Our thesis",tesesTitle:`Execution above
promise.`,tesesP1:"We believe the biggest bottleneck in the industry is not ideas, nor technology. It's execution.",tesesP2:"Many projects fail because they try to recreate an entire bank for each new product, taking on regulatory and technical complexities that add no value to the customer journey.",tesesP3:"JUST takes a different path. We work on robust, consolidated BaaS structures, eliminate regulatory burden and focus 100% on the product, user experience and financial operation.",principiosTag:"How we think",principiosTitle:`Principles that guide
every decision.`,p1Title:"Product, not promise",p1Desc:"We don't sell roadmaps or prototypes. We deliver platforms in production, operating from day 1. A financial product only exists when it's live.",p2Title:"Structure generates speed",p2Desc:"Proprietary stack with 70-80% reuse across projects. Ready modules, defined governance. Complete fintechs in months, not years.",p3Title:"Strategic partner",p3Desc:"We act as the technological arm of the business. We take responsibility for the product and make decisions based on what needs to work.",trajetoriaTag:"Journey",trajetoriaTitle:`From first product
to ecosystem.`,liderancaTag:"Leadership",liderancaTitle:`Experience that sustains
delivery.`,commitment:"Our commitment",commitmentTitle:"Fintechs can be built in months, not years.",commitmentDesc:"No wheel reinvention. No unnecessary bureaucracy. No empty promises. Complete financial platforms for those who need to operate fast, with technical solidity and full business focus. That's our commitment since 2020.",cta:"Want to know our products?",ctaBtn:"Talk to our team",timeline:[{y:"2020",t:"Foundation",d:"Gabriel Pires founds JUST with a clear principle: a financial product only exists when it is operating."},{y:"2021",t:"First clients",d:"Operations begin with eFleet and first benefits and fleet management projects."},{y:"2022",t:"Proprietary stack",d:"Proprietary stack reaches 70% reuse across projects. Delivery speed becomes a competitive differentiator."},{y:"2023",t:"Scale",d:"10+ active clients. R$500M+ in annual processing. Platform model validated by the market."},{y:"2024",t:"Validation",d:"ViaSoftPay from zero to production in 45 days. NPS 76. Entry into new niches: banking, expenses, credit."},{y:"2025",t:"Expansion",d:"18+ active clients. 40k+ users. R$900M+ TPV processed. Operations consolidated across multiple verticals."}]},cases:{tag:"Cases",h1:"Real results. Fintechs in production.",tpvLabel:"Processed TPV",txLabel:"Transactions processed",usersLabel:"Users",clientsLabel:"Clients",cta:"Want similar results?",ctaBtn:"Schedule a meeting",casesList:[{tag:"Benefits",name:"ViaSoftPay",headline:"From zero to production in 45 days",items:["45 days from start to go-live","100k+ active users","R$500M+ annual processing","NPS 100"]},{tag:"Fleet",name:"eFleet",headline:"5+ years of partnership, 10+ modules",items:["5+ years of ongoing partnership","10+ modules in production","R$500M+ annual processing"]},{tag:"Hybrid Arrangement",name:"SmartVale",headline:"First hybrid arrangement in the portfolio",items:["Hybrid arrangement in production","Closed + open integrated","Custom rules per balance"]},{tag:"Benefits + Credit",name:"KPI",headline:"266% growth in transactions",items:["266% growth","Benefits + credit integrated","Unique combined product"]}]},contato:{h1:"Let's build your fintech.",subtitle:"Our team responds within 24 business hours.",nameLabel:"Name *",emailLabel:"Corporate email *",companyLabel:"Company *",phoneLabel:"Phone",productLabel:"Product of interest *",productPlaceholder:"Select",projectLabel:"About the project",projectPlaceholder:"How many users? Timeline? Current scenário?",submitBtn:"Send message",sendingBtn:"Sending...",successTitle:"Message sent!",successMsg:"We'll respond within 24 business hours.",errorRequired:"Please fill in all required fields.",errorSend:"Error sending. Please try again or contact us at contato@wearejust.it",emailLabel2:"Email",whatsappLabel:"WhatsApp",locationLabel:"Location",hoursLabel:"Business hours",hours:"Mon-Fri, 9am-6pm",faqTitle:"Frequently asked questions",faqs:[{q:"What types of cards does JUST develop?",a:"JUST was built with a strong focus on closed arrangements (private label cards), where we operate our own processing technologies. Today, we also develop products integrated with open arrangements, working with regulated issuers of Visa, Mastercard and Elo. This allows us to create hybrid architectures, orchestrating multiple payment providers, issuers and processing components, always according to the business model and complexity level of the project. We are not limited to a single arrangement or vendor. We design the best technical and regulatory combination for each case."},{q:"Does JUST sell off-the-shelf platforms?",a:"We do not sell generic platforms in the traditional model. We believe each business has its own identity, strategy and rules. We therefore treat each project individually, even when starting from a common technology base. We use consolidated components and frameworks to accelerate project start, but each solution evolves with specific business rules, flows, integrations and experiences aligned to the client's reality. In practice, we deliver tailored platforms, not generic customized products."},{q:"Is JUST a regulated entity by the Central Bank of Brazil?",a:"No. JUST is a technology provider. We operate in developing platforms for companies that may or may not be in environments regulated by the Central Bank of Brazil, depending on the product type. Some solutions, such as Flexible Benefits, do not require banking regulation. Others, such as Corporate Expenses, payment accounts or issuance in open arrangements, may require it. In these cases, we work together with regulated partners responsible for the regulatory burden, while JUST develops and integrates the entire technology layer, ensuring the final product complies with applicable regulations."},{q:"Is JUST a software house?",a:"Yes, but not only that. We are specialists in payment platform solutions, but we act as strategic partners for our clients. Our work goes beyond technical development and includes: support in defining the business model, product architecture and competitive differentiation, building the technology platform, and supporting the operation and continuous evolution of the product. Our focus is to enable sustainable financial businesses, not just deliver code."},{q:"I want to create a fintech but don't know where to start. Can JUST help?",a:"Yes. In addition to our development area, we have JUST Consulting, a unit focused on supporting companies from the initial phases of the project. We assist with ideation and business model validation, financial product definition, regulatory and structural assessment, and technical execution planning. The goal is to reduce common mistakes, accelerate critical decisions and build a viable product from the start."},{q:"Does JUST take on regulatory or financial risk of the operation?",a:"No. JUST is responsible for the technology layer. Regulatory and financial risk remains with the client and, where applicable, with the regulated partners involved in the operation. Our role is to ensure that the technology correctly supports the regulatory requirements defined for the product."},{q:"How long before my product can go live?",a:"The timeline varies according to the level of complexity, integrations and regulatory requirements. Simpler projects can be launched in a few months. More complex projects require additional phases of architecture, certification and testing. We prefer to set realistic timelines from the start, prioritizing safety, stability and operational sustainability."}]},stack:{tag:"Technology",h1:"The technical foundation behind financial products in production.",subtitle:"Every solid financial product starts with a well-defined technical foundation. JUST builds this foundation to ensure security, scale and continuous evolution.",platformTag:"Platform",platformTitle:"Platform components.",platformSubtitle:"Each component was built to operate independently and integrated. Your product. Your rules. No workarounds.",integrationsTag:"Integrations",integrationsTitle:"Multi-provider by design.",integrationsSubtitle:"No financial product should depend on a single vendor. The product stays the same. The vendors can change.",securityTag:"Security",securityTitle:"Security as a process, not a feature.",securitySubtitle:"Financial products cannot fail in production. Our architecture starts from this principle.",cta:"Want to understand how it applies to your case?",ctaBtn:"Talk to our technical team",secHighlightLabels:["Recurring with formal retest","Partner with dedicated infra","Compliance implemented","Mobile Top 10 applied"],secCards:[{title:"Defense in Depth",desc:"Layered protection: edge WAF, API Gateway with rate limiting, JWT authentication, network isolation via VPC."},{title:"PCI-Aware Architecture",desc:"Architecture designed with PCI DSS standards awareness. Sensitive data under custody of the regulated financial institution."},{title:"AWS Infrastructure",desc:"Isolated VPC, private subnets, KMS encryption, TLS 1.3, Multi-AZ RDS with daily backups."},{title:"24/7 Monitoring",desc:"Real-time Grafana dashboards. Centralized logs with audit retention. Automated alerts."},{title:"Recurring Pen Test",desc:"Gray/White Box penetration testing with semi-annual cycle. Formal retest of critical and high vulnerabilities."},{title:"Mobile Security (OWASP)",desc:"Runtime hardening: root/jáilbreak detection, SSL Pinning, proxy/MITM detection. Minimum trust in the client."}],mpSwapBold:"Switch providers without impacting the product.",mpSwapText:" JUST's abstraction layer isolates your product from vendor dependencies. Migrate, add or remove providers in production."},solution:{modelsTitle:"Operating models",capabilitiesTitle:"Capabilities",ctaTitle:"Want to understand how it works?",ctaBtn:"Schedule a call"},privacy:{tag:"Privacy",h1:"Privacy Policy",subtitle:"How JUST handles personal data across its digital, commercial and relationship channels.",updatedLabel:"Last updated",updatedAt:"April 20, 2026",introTitle:"Commitment to transparency",intro:["This Privacy Policy explains, in an objective way, how JUST collects, uses, stores, shares and protects personal data related to the use of this website, contact forms and commercial interactions with our team.","JUST operates as a technology provider for digital financial platforms. Depending on the project, we may also process data on behalf of clients and partners under specific contracts. This policy mainly covers data processed directly by JUST in its own channels."],sections:[{title:"1. Data we may collect",body:["Identification and contact data, such as name, corporate email, phone number, company, job title and messages sent through forms, email, WhatsApp, LinkedIn or other channels.","Professional and business data shared during commercial conversations, such as product of interest, operation size, technical needs and project context.","Technical and browsing data, such as IP address, device identifiers, browser, operating system, accessed pages, traffic source, date, time and information collected by cookies or similar technologies.","We do not request sensitive personal data in our forms. If you voluntarily submit this type of information, we may disregard it, delete it or process it only when there is an apprópriate legal basis."]},{title:"2. How we use data",body:["Respond to contact requests, schedule conversations, qualify opportunities and conduct commercial or pre-contractual relationships.","Understand interest in our products and prepare proposals, demos and technical materials suited to the context provided.","Operate, measure, protect and improve the website, our digital channels and the browsing experience.","Send institutional, commercial or technical communications related to JUST, while respecting preferences, opt-out options and applicable legal requirements.","Comply with legal, regulatory and contractual obligations, audits, authority requests and the regular exercise of rights."]},{title:"3. Legal bases",body:["We process personal data based on the legal grounds provided by applicable law, including contract performance or preliminary procedures, compliance with legal or regulatory obligations, legitimate interest, consent when required and regular exercise of rights.","When we rely on legitimate interest, we seek to assess proportionality and adopt measures to reduce undue impact on data subjects."]},{title:"4. Cookies and similar technologies",body:["We may use essential cookies for website operation and measurement or analytics technologies to understand performance, traffic source and interactions with pages.","You can block, delete or manage cookies in your browser settings. Some features may become unavailable or less efficient if essential cookies are disabled."]},{title:"5. Data sharing",body:["We may share data with technology, hosting, security, analytics, CRM, communication, automation, support and other providers needed to operate our channels.","We may also share information with business partners, consultants, auditors, public authorities or third parties when necessary to comply with legal obligations, protect rights, respond to requests or enable an interaction requested by you.","When third parties process data on our behalf, we seek to establish confidentiality, security and use obligations compatible with the purposes described."]},{title:"6. International transfers",body:["Some providers or systems used by JUST may store or process data outside Brazil. In these cases, we adopt measures compatible with applicable law to protect the transferred data."]},{title:"7. Retention and deletion",body:["We keep personal data for as long as needed to fulfill the purposes described in this policy, meet legal or regulatory obligations, preserve commercial records and exercise rights in administrative, judicial or arbitration proceedings.","When data is no longer necessary, we may delete it, anonymize it or keep it only when there is a legal basis for retention."]},{title:"8. Data subject rights",body:["Under the LGPD, you may request confirmation of processing, access, correction, anonymization, blocking or deletion of data, portability where applicable, information about sharing, review of automated decisions when they exist, objection to processing and withdrawal of consent.","To exercise your rights, send a request to contato@wearejust.it. We may ask for additional information to confirm your identity and protect your data."]},{title:"9. Information security",body:["We adopt technical and organizational measures to protect personal data against unauthorized access, loss, alteration, improper disclosure or inadequate processing.","Despite our efforts, no digital environment is completely free of risks. If we identify a relevant incident involving personal data, we will assess the apprópriate measures and communications required by law."]},{title:"10. Changes to this policy",body:["We may update this Privacy Policy to reflect legal, technical, operational or commercial changes. The current version will always be the one published on this page, with the last updated date."]}],contactTitle:"Privacy channel",contactText:"For questions about this policy or requests related to your personal data, contact JUST through the email below.",contactEmail:"contato@wearejust.it"},sentinel:{metaTitle:"Sentinel — Real-time fraud detection | JUST",metaDesc:"Sentinel is JUST's anti-fraud layer: real-time risk scoring for card authorization, with proprietary models trained on 6M+ transactions.",heroTag:"In development — Q1.26 Launch",heroAiTag:"AI-Powered",h1:"Intelligent protection in every transaction",heroSubtitle:"Sentinel is JUST's anti-fraud intelligence layer: real-time risk scoring on every card authorization, with sub-100ms latency and proprietary models trained on millions of real transactions.",heroCta:"I want to know Sentinel",whatTitle:"Anti-fraud built for JUST infrastructure",whatText:"Born as part of JUST's modular platform, Sentinel analyzes each card authorization in real time, identifying risk patterns before the transaction is approved. Unlike generic market solutions, Sentinel is continuously trained on JUST's proprietary transaction dataset, delivering precision specific to our clients' use cases.",benefitsTitle:"Why choose Sentinel",b1Title:"Decision in under 100ms",b1Desc:"GPU-accelerated inference integrated into the transactional flow, without adding perceptible latency for the end user.",b2Title:"Models trained on real data",b2Desc:"Proprietary dataset with over 6 million real transactions, with continuous retraining to adapt to new fraud patterns.",b3Title:"Chargeback reduction",b3Desc:"Early identification of suspicious transactions reduces fraud losses and improves approval indicators with card networks.",b4Title:"Integrated into JUST's core",b4Desc:"No need to hire external vendors: Sentinel is born connected to JUST's processing platform and financial backoffice.",techTitle:"Built on cutting-edge infrastructure",techSubtitle:"Sentinel combines the best of payments engineering with state-of-the-art artificial intelligence technology.",techBullets:["GPU inference on NVIDIA (G5, P4d) on AWS","Deep learning and gradient boosting models","Continuous retraining pipelines","Event-driven architecture integrated into the transactional core","REST API exposure for partners and issuers"],forWhoTitle:"Built for those who process payments at scale",forWhoItems:["Corporate card and benefits card issuers","Corporate expense and fleet management fintechs","BaaS programs needing additional protection on authorization","Retail networks with private label","Any operation with relevant card transaction volume"],statusTitle:"Where Sentinel is now",statusText:"Sentinel is in its final development phase, with launch scheduled for Q1.26. Current JUST platform clients will have preferential access at launch. Contact us to learn about the detailed roadmap and discuss specific use cases.",statusCta:"I want to be in the first wave",ctaFinal:"Turn risk into intelligence. Talk to our team.",ctaFinalBtn:"Talk to a specialist"}}},w={primary:"#0f112b",secondary:"#263450",cta:"#f45546",ctaHover:"#d94438",textLight:"#f2f4f8",textMuted:"rgba(242,244,248,0.55)",textMutedLight:"rgba(242,244,248,0.7)",bgOffwhite:"#f8f9fb",borderLight:"rgba(255,255,255,0.07)",darkAlt:"#141736",footerBg:"#0a0c1e"},wt={bg:"#ffffff",band:"#f6f8fb",surface:"#ffffff",surfaceSoft:"#f8fafc",surfaceWarm:"#fff7f5",navy:"#10243f",text:"#273347",muted:"#647084",mutedStrong:"#45556c",border:"#dbe3ee",borderStrong:"#c7d3e3",red:"#f45546"},Ce={beneficios:{accent:"#6C5CE7",gradient:"linear-gradient(135deg, #6C5CE7, #a29bfe)",label:"Benefits"},frotas:{accent:"#00B894",gradient:"linear-gradient(135deg, #00B894, #55efc4)",label:"Fleet"},banking:{accent:"#0984E3",gradient:"linear-gradient(135deg, #0984E3, #74b9ff)",label:"Banking"},despesas:{accent:"#E17055",gradient:"linear-gradient(135deg, #E17055, #fab1a0)",label:"Expense"},antecipacao:{accent:"#FDCB6E",gradient:"linear-gradient(135deg, #D4A017, #FDCB6E)",label:"Credit"},"sob-demanda":{accent:"#636E72",gradient:"linear-gradient(135deg, #636E72, #b2bec3)",label:"Custom"},sentinel:{accent:"#00CEC9",gradient:"linear-gradient(135deg, #00B2B2, #81ECEC)",label:"Sentinel"}},fm="/logo-just-2x.png",mm=({height:r=32,style:c={}})=>n.jsx("img",{src:fm,alt:"JUST",style:{height:r,objectFit:"contain",...c}}),Dx={beneficios:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("rect",{x:"5",y:"10",width:"34",height:"24",rx:"4",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("rect",{x:"10",y:"16",width:"7",height:"5",rx:"1.2",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("line",{x1:"10",y1:"26",x2:"22",y2:"26",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"10",y1:"29",x2:"17",y2:"29",stroke:c,strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.35"}),n.jsx("circle",{cx:"33",cy:"27",r:"3",stroke:r,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("circle",{cx:"30",cy:"27",r:"3",stroke:r,strokeWidth:"1.5",fill:"none",opacity:"0.4"})]}),frotas:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("rect",{x:"8",y:"10",width:"20",height:"26",rx:"3",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("rect",{x:"12",y:"14",width:"12",height:"8",rx:"1.5",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("path",{d:"M28 16h4a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2h-1",stroke:r,strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.7"}),n.jsx("circle",{cx:"33",cy:"26",r:"2",stroke:r,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),n.jsx("line",{x1:"8",y1:"36",x2:"28",y2:"36",stroke:c,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.4"})]}),banking:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("path",{d:"M22 6L6 16h32L22 6z",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9",strokeLinejoin:"round"}),n.jsx("line",{x1:"6",y1:"36",x2:"38",y2:"36",stroke:r,strokeWidth:"2",strokeLinecap:"round",opacity:"0.8"}),n.jsx("line",{x1:"8",y1:"16",x2:"36",y2:"16",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.4"}),n.jsx("rect",{x:"11",y:"18",width:"4",height:"15",rx:"1",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),n.jsx("rect",{x:"20",y:"18",width:"4",height:"15",rx:"1",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.5"}),n.jsx("rect",{x:"29",y:"18",width:"4",height:"15",rx:"1",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.5"})]}),despesas:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("path",{d:"M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3V6z",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9",strokeLinejoin:"round"}),n.jsx("line",{x1:"16",y1:"14",x2:"28",y2:"14",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),n.jsx("line",{x1:"16",y1:"19",x2:"28",y2:"19",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"16",y1:"24",x2:"24",y2:"24",stroke:c,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.4"}),n.jsx("circle",{cx:"28",cy:"24",r:"2",fill:r,opacity:"0.5"})]}),antecipacao:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("circle",{cx:"20",cy:"22",r:"14",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("path",{d:"M20 13v9l6 4",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.8"}),n.jsx("circle",{cx:"20",cy:"22",r:"2",fill:c,opacity:"0.4"}),n.jsx("path",{d:"M33 14l3-3M36 11h-4M36 11v4",stroke:r,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.6"})]}),"sob-demanda":(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("path",{d:"M18 8h8v4a4 4 0 0 0 8 0V8h2a2 2 0 0 1 2 2v8h-4a4 4 0 0 0 0 8h4v8a2 2 0 0 1-2 2h-8v-4a4 4 0 0 0-8 0v4H8a2 2 0 0 1-2-2v-8h4a4 4 0 0 0 0-8H6V10a2 2 0 0 1 2-2h10z",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9",strokeLinejoin:"round"}),n.jsx("circle",{cx:"22",cy:"22",r:"3",stroke:c,strokeWidth:"1.5",fill:"none",opacity:"0.5"})]}),sentinel:(r,c)=>n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("path",{d:"M22 5L8 11v10c0 9.4 6 18 14 21 8-3 14-11.6 14-21V11L22 5z",stroke:r,strokeWidth:"2",fill:"none",opacity:"0.9",strokeLinejoin:"round"}),n.jsx("path",{d:"M16 22l4 4 8-8",stroke:c,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.8"}),n.jsx("circle",{cx:"22",cy:"22",r:"2.5",stroke:r,strokeWidth:"1.2",fill:"none",opacity:"0.3"}),n.jsx("path",{d:"M22 14v2M22 28v2M14 22h2M28 22h2",stroke:r,strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.35"})]})},el=({productKey:r,size:c=18,showCard:u=!1})=>{const s=Ce[r];if(!s)return null;const p=s.accent,m=s.gradient&&s.gradient.split(",")[1]?.trim().replace(")","")||p,g=Dx[r];return g?u?n.jsx("div",{style:{width:c,height:c,borderRadius:c*.25,display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(145deg, ${p}18, rgba(10,12,31,0.9))`,border:`1px solid ${p}40`,boxShadow:`0 0 ${c*.4}px ${p}20`,flexShrink:0},children:n.jsx("span",{style:{display:"flex",width:c*.6,height:c*.6},children:g(p,m)})}):n.jsx("span",{style:{display:"inline-flex",width:c,height:c,flexShrink:0},children:g(p,m)}):null};function hm(r=.12){const c=A.useRef(null),[u,s]=A.useState(!1);return A.useEffect(()=>{const p=c.current;if(!p)return;const m=new IntersectionObserver(([g])=>{g.isIntersecting&&(s(!0),m.unobserve(p))},{threshold:r});return m.observe(p),()=>m.disconnect()},[r]),[c,u]}function Ox(r,c=2e3,u=!1){const[s,p]=A.useState(0);return A.useEffect(()=>{if(!u)return;let m=null;const g=h=>{m||(m=h);const x=Math.min((h-m)/c,1),y=1-Math.pow(1-x,3);p(y*r),x<1&&requestAnimationFrame(g)};requestAnimationFrame(g)},[u,r,c]),s}class Ux extends Zt.Component{constructor(c){super(c),this.state={hasError:!1,error:null}}static getDerivedStateFromError(c){return{hasError:!0,error:c}}componentDidCatch(c,u){console.error("ErrorBoundary caught:",c,u)}render(){return this.state.hasError?Zt.createElement("div",{style:{padding:40,color:"#f45546",background:"#0a0c1f",minHeight:"100vh"}},Zt.createElement("h2",null,"Component Error"),Zt.createElement("pre",{style:{whiteSpace:"pre-wrap",color:"#ff6b6b"}},String(this.state.error)),Zt.createElement("pre",{style:{whiteSpace:"pre-wrap",color:"#aaa",marginTop:16}},this.state.error&&this.state.error.stack)):this.props.children}}function q({children:r,delay:c=0,direction:u="up",style:s={}}){const[p,m]=hm(.08),g={up:"translateY(40px)",down:"translateY(-20px)",left:"translateX(-40px)",right:"translateX(40px)",none:"none",scale:"scale(0.95)"};return n.jsx("div",{ref:p,style:{opacity:m?1:0,transform:m?"none":g[u],transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${c}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${c}s`,...s},children:r})}function Ht({children:r,light:c=!1,color:u=null}){return n.jsx("span",{style:{display:"inline-block",padding:"6px 14px",borderRadius:100,fontSize:11,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.08em",background:u?`${u}15`:c?"rgba(15,17,43,0.05)":"rgba(244,85,70,0.08)",border:`1px solid ${u?`${u}30`:c?"rgba(15,17,43,0.08)":"rgba(244,85,70,0.2)"}`,color:u||(c?w.primary:w.cta)},children:r})}function pt({children:r,primary:c=!0,onClick:u,style:s={},size:p="md"}){const[m,g]=A.useState(!1),h={sm:{p:"10px 20px",f:13},md:{p:"14px 28px",f:15},lg:{p:"18px 36px",f:16}};return n.jsx("button",{onClick:u,onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),style:{padding:h[p].p,borderRadius:10,fontSize:h[p].f,fontWeight:600,cursor:"pointer",border:c?"none":"1px solid rgba(242,244,248,0.25)",background:c?m?w.ctaHover:w.cta:m?"rgba(242,244,248,0.1)":"transparent",color:"#fff",transform:m?"translateY(-1px)":"none",boxShadow:c&&m?"0 8px 24px rgba(244,85,70,0.3)":"none",transition:"all 0.25s ease",...s},children:r})}function nt({tag:r,title:c,subtitle:u,light:s=!1,center:p=!1,tagColor:m=null}){return n.jsxs("div",{className:"section-title-block",style:{textAlign:p?"center":"left",marginBottom:56},children:[r&&n.jsx(q,{children:n.jsx(Ht,{light:s,color:m,children:r})}),n.jsx(q,{delay:.08,children:n.jsx("h2",{className:"section-title-heading",style:{fontSize:44,fontWeight:700,color:s?w.primary:w.textLight,lineHeight:1.15,letterSpacing:"-0.025em",margin:"14px 0 16px",whiteSpace:"pre-line"},children:c})}),u&&n.jsx(q,{delay:.16,children:n.jsx("p",{className:"section-title-subtitle",style:{fontSize:17,color:s?"rgba(15,17,43,0.55)":w.textMuted,lineHeight:1.65,maxWidth:p?560:640,margin:p?"0 auto":0},children:u})})]})}function jo({prefix:r="",value:c,suffix:u="",label:s,delay:p=0}){const[m,g]=hm(.2),h=Ox(c,2200,g),x=c%1!==0;return n.jsx("div",{ref:m,style:{textAlign:"center",padding:"0 16px"},children:n.jsxs(q,{delay:p,children:[n.jsxs("div",{style:{fontSize:48,fontWeight:700,color:w.textLight,lineHeight:1,letterSpacing:"-0.02em"},children:[r,x?h.toFixed(1):Math.round(h).toLocaleString("pt-BR"),u]}),n.jsx("div",{style:{fontSize:13,color:w.textMuted,marginTop:10,textTransform:"uppercase",letterSpacing:"0.06em",fontWeight:500},children:s})]})})}const _x=[{key:"beneficios",top:"12%",left:"8%",animName:"nodeFloat1",dur:"6s",delay:"0s",posClass:"pos-left",tooltipColor:"#A29BFE",barGrad:"linear-gradient(90deg,#6C5CE7,#A29BFE)"},{key:"frotas",top:"4%",right:"12%",animName:"nodeFloat2",dur:"7s",delay:"0.5s",posClass:"pos-right",tooltipColor:"#55EFC4",barGrad:"linear-gradient(90deg,#00B894,#55EFC4)"},{key:"banking",top:"40%",right:"0%",animName:"nodeFloat3",dur:"5.5s",delay:"1s",posClass:"pos-right",tooltipColor:"#74B9FF",barGrad:"linear-gradient(90deg,#0984E3,#74B9FF)"},{key:"despesas",top:"45%",left:"0%",animName:"nodeFloat4",dur:"6.5s",delay:"1.5s",posClass:"pos-left",tooltipColor:"#FAB1A0",barGrad:"linear-gradient(90deg,#E17055,#FAB1A0)"},{key:"antecipacao",bottom:"6%",left:"14%",animName:"nodeFloat5",dur:"5s",delay:"2s",posClass:"pos-top",tooltipColor:"#FFEAA7",barGrad:"linear-gradient(90deg,#D4A017,#FDCB6E)"},{key:"sob-demanda",bottom:"2%",right:"10%",animName:"nodeFloat6",dur:"7s",delay:"0.8s",posClass:"pos-top pos-right",tooltipColor:"#B2BEC3",barGrad:"linear-gradient(90deg,#636E72,#B2BEC3)"}],qx={beneficios:n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("rect",{x:"5",y:"10",width:"34",height:"24",rx:"4",stroke:"#6C5CE7",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("rect",{x:"10",y:"16",width:"7",height:"5",rx:"1.2",stroke:"#A29BFE",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("line",{x1:"10",y1:"26",x2:"22",y2:"26",stroke:"#A29BFE",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("circle",{cx:"33",cy:"27",r:"3",stroke:"#6C5CE7",strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("circle",{cx:"30",cy:"27",r:"3",stroke:"#6C5CE7",strokeWidth:"1.5",fill:"none",opacity:"0.4"})]}),frotas:n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("rect",{x:"6",y:"14",width:"32",height:"16",rx:"4",stroke:"#00B894",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("circle",{cx:"14",cy:"30",r:"3.5",stroke:"#55EFC4",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("circle",{cx:"30",cy:"30",r:"3.5",stroke:"#55EFC4",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("path",{d:"M12 14 L12 10 L24 10 L28 14",stroke:"#00B894",strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("circle",{cx:"35",cy:"19",r:"2",stroke:"#55EFC4",strokeWidth:"1",fill:"none",opacity:"0.5"})]}),banking:n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("rect",{x:"8",y:"8",width:"28",height:"28",rx:"6",stroke:"#0984E3",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("path",{d:"M16 18 L22 14 L28 18",stroke:"#74B9FF",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",opacity:"0.7"}),n.jsx("line",{x1:"16",y1:"20",x2:"28",y2:"20",stroke:"#0984E3",strokeWidth:"1",opacity:"0.4"}),n.jsx("line",{x1:"18",y1:"22",x2:"18",y2:"28",stroke:"#74B9FF",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),n.jsx("line",{x1:"22",y1:"22",x2:"22",y2:"28",stroke:"#74B9FF",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),n.jsx("line",{x1:"26",y1:"22",x2:"26",y2:"28",stroke:"#74B9FF",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),n.jsx("line",{x1:"15",y1:"30",x2:"29",y2:"30",stroke:"#0984E3",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"})]}),despesas:n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("rect",{x:"10",y:"6",width:"24",height:"32",rx:"3",stroke:"#E17055",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("line",{x1:"15",y1:"14",x2:"29",y2:"14",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"15",y1:"20",x2:"25",y2:"20",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"15",y1:"26",x2:"22",y2:"26",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("circle",{cx:"28",cy:"30",r:"4",stroke:"#E17055",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("path",{d:"M26 30 L28 32 L31 28",stroke:"#FAB1A0",strokeWidth:"1.2",fill:"none",strokeLinecap:"round",opacity:"0.8"})]}),antecipacao:n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("circle",{cx:"22",cy:"22",r:"14",stroke:"#FDCB6E",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("path",{d:"M22 12 L22 22 L30 22",stroke:"#FFEAA7",strokeWidth:"2",strokeLinecap:"round",opacity:"0.7"}),n.jsx("path",{d:"M17 8 L15 12",stroke:"#FDCB6E",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.4"}),n.jsx("path",{d:"M27 8 L29 12",stroke:"#FDCB6E",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.4"})]}),"sob-demanda":n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",style:{width:34,height:34},children:[n.jsx("rect",{x:"8",y:"8",width:"28",height:"28",rx:"6",stroke:"#636E72",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("circle",{cx:"22",cy:"22",r:"6",stroke:"#B2BEC3",strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("circle",{cx:"22",cy:"22",r:"2",fill:"#B2BEC3",opacity:"0.5"}),n.jsx("path",{d:"M22 12 L22 14 M22 30 L22 32 M12 22 L14 22 M30 22 L32 22",stroke:"#636E72",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.4"})]})};function Hx({trProd:r}){return n.jsxs("div",{id:"orbitalWrapper",className:"orbital-wrapper",style:{position:"relative",width:"100%",height:520,display:"flex",alignItems:"center",justifyContent:"center"},children:[[200,340,460].map((c,u)=>n.jsx("div",{className:"orbit-ring",style:{position:"absolute",width:c,height:c,borderRadius:"50%",border:`1px solid rgba(108,92,231,${.1-u*.03})`,animation:`ringPulse ${4+u}s ease-in-out infinite ${u}s`,transition:"all 0.6s ease"}},u)),n.jsx("svg",{style:{position:"absolute",width:460,height:460,zIndex:2,pointerEvents:"none"},viewBox:"0 0 460 460",children:[{x2:72,y2:82,c:"108,92,231"},{x2:380,y2:50,c:"0,184,148"},{x2:430,y2:230,c:"9,132,227"},{x2:40,y2:260,c:"225,112,85"},{x2:100,y2:410,c:"253,203,110"},{x2:370,y2:400,c:"99,110,114"}].map((c,u)=>n.jsx("line",{x1:"230",y1:"230",x2:c.x2,y2:c.y2,stroke:`rgba(${c.c},0.12)`,strokeWidth:"1",strokeDasharray:"4 6",style:{animation:"dashFlow 15s linear infinite"}},u))}),[{top:"15%",left:"25%",dur:"8s",delay:"0s",dx1:"20px",dy1:"-15px",dx2:"-10px",dy2:"10px",dx3:"15px",dy3:"5px",bg:"rgba(108,92,231,0.3)"},{top:"60%",right:"20%",dur:"10s",delay:"2s",dx1:"-15px",dy1:"20px",dx2:"10px",dy2:"-8px",dx3:"-20px",dy3:"12px",bg:"rgba(108,92,231,0.3)"},{top:"30%",right:"35%",dur:"7s",delay:"1s",dx1:"12px",dy1:"18px",dx2:"-8px",dy2:"-15px",dx3:"20px",dy3:"-5px",bg:"rgba(0,184,148,0.3)"},{bottom:"25%",left:"35%",dur:"9s",delay:"3s",dx1:"-18px",dy1:"-12px",dx2:"15px",dy2:"8px",dx3:"-5px",dy3:"20px",bg:"rgba(9,132,227,0.3)"},{top:"45%",left:"15%",dur:"11s",delay:"4s",dx1:"8px",dy1:"-20px",dx2:"-12px",dy2:"15px",dx3:"18px",dy3:"-8px",bg:"rgba(225,112,85,0.25)"},{top:"20%",right:"15%",dur:"9s",delay:"1.5s",dx1:"-20px",dy1:"8px",dx2:"12px",dy2:"18px",dx3:"-15px",dy3:"-12px",bg:"rgba(253,203,110,0.25)"},{bottom:"35%",right:"30%",dur:"8s",delay:"2.5s",dx1:"15px",dy1:"12px",dx2:"-18px",dy2:"-8px",dx3:"5px",dy3:"20px",bg:"rgba(108,92,231,0.3)"}].map((c,u)=>n.jsx("div",{style:{position:"absolute",width:3,height:3,borderRadius:"50%",background:c.bg,zIndex:1,top:c.top,left:c.left,right:c.right,bottom:c.bottom,animation:`particleFloat${u} ${c.dur} ease-in-out infinite`,animationDelay:c.delay}},u)),n.jsx("div",{className:"hub-center",style:{position:"absolute",width:100,height:100,borderRadius:28,zIndex:5,background:"linear-gradient(145deg, rgba(108,92,231,0.2), rgba(10,12,31,0.95))",border:"1.5px solid rgba(108,92,231,0.35)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 40px rgba(108,92,231,0.15), 0 0 80px rgba(108,92,231,0.08), inset 0 1px 0 rgba(255,255,255,0.1)",animation:"hubFloat 5s ease-in-out infinite",transition:"all 0.6s ease"},children:n.jsx("img",{src:fm,alt:"JUST",style:{height:36,filter:"brightness(1.1)"}})}),_x.map(c=>{const s=Ce[c.key]?.accent||"#fff";return n.jsxs("div",{className:`hero-product-node ${c.posClass||""}`,style:{position:"absolute",zIndex:4,display:"flex",flexDirection:"column",alignItems:"center",gap:8,top:c.top,left:c.left,right:c.right,bottom:c.bottom,animation:`${c.animName} ${c.dur} ease-in-out infinite`,animationDelay:c.delay,cursor:"pointer"},children:[n.jsx("div",{className:"node-icon",style:{width:72,height:72,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(145deg, ${s}26, rgba(10,12,31,0.9))`,border:`1.5px solid ${s}59`,boxShadow:`0 0 20px ${s}1F, 0 4px 16px rgba(0,0,0,0.3)`,backdropFilter:"blur(8px)",transition:"all 0.4s ease"},children:qx[c.key]}),n.jsx("span",{className:"node-label",style:{fontSize:11,fontWeight:600,letterSpacing:"0.5px",color:"rgba(255,255,255,0.45)",textAlign:"center",whiteSpace:"nowrap",transition:"all 0.3s"},children:r[c.key]?.name?.replace("JUST ","")}),n.jsxs("div",{className:"node-tooltip",children:[n.jsx("div",{className:"tooltip-name",style:{color:c.tooltipColor},children:r[c.key]?.name}),n.jsx("div",{className:"tooltip-desc",children:r[c.key]?.desc}),n.jsx("div",{className:"tooltip-bar",style:{background:c.barGrad}})]})]},c.key)}),n.jsx("style",{children:`

/* Bento grid products */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.bento-grid .bento-card:nth-child(1) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(2) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(3) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(4) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(5) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(6) { grid-column: span 1; }
.bento-card {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: border-color 0.4s ease, background 0.4s ease;
}
.bento-card:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-card:hover::after {
  transform: scaleX(1);
}
.bento-card:hover .bento-icon-card {
  transform: scale(1.1);
}
.bento-card:hover .bento-arrow-btn {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  transform: translateX(2px);
}

/* DE > PARA comparison hover effects */
.comp-row {
  transition: border-color 0.4s ease;
}
.comp-row:hover {
  border-color: rgba(39,174,96,0.25) !important;
}
.comp-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    rgba(232,93,74,0.03) 0%,
    rgba(232,93,74,0.01) 25%,
    transparent 45%,
    rgba(39,174,96,0.04) 55%,
    rgba(39,174,96,0.07) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::before {
  opacity: 1;
}
.comp-row::after {
  content: '';
  position: absolute;
  inset: 0;
  left: -100%;
  background: linear-gradient(90deg,
    transparent 0%,
    transparent 35%,
    rgba(39,174,96,0.07) 48%,
    rgba(39,174,96,0.12) 52%,
    rgba(39,174,96,0.07) 56%,
    transparent 65%,
    transparent 100%
  );
  transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::after {
  left: 100%;
}
.comp-row:hover .comp-icon-com {
  transform: scale(1.08);
  box-shadow: 0 0 24px rgba(39,174,96,0.2) !important;
}
.comp-row:hover .comp-arrow {
  background: rgba(39,174,96,0.12) !important;
  border-color: rgba(39,174,96,0.3) !important;
  transform: translateX(3px);
}
.comp-row:hover .comp-arrow svg path {
  stroke: rgba(39,174,96,0.8);
}


        

/* Bento grid products */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.bento-grid .bento-card:nth-child(1) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(2) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(3) { grid-column: span 1; }
.bento-grid .bento-card:nth-child(4) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(5) { grid-column: span 2; }
.bento-grid .bento-card:nth-child(6) { grid-column: span 1; }
.bento-card {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: border-color 0.4s ease, background 0.4s ease;
}
.bento-card:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.bento-card:hover::after {
  transform: scaleX(1);
}
.bento-card:hover .bento-icon-card {
  transform: scale(1.1);
}
.bento-card:hover .bento-arrow-btn {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.15);
  transform: translateX(2px);
}

/* DE > PARA comparison hover effects */
.comp-row {
  transition: border-color 0.4s ease;
}
.comp-row:hover {
  border-color: rgba(39,174,96,0.25) !important;
}
.comp-row::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
    rgba(232,93,74,0.03) 0%,
    rgba(232,93,74,0.01) 25%,
    transparent 45%,
    rgba(39,174,96,0.04) 55%,
    rgba(39,174,96,0.07) 100%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::before {
  opacity: 1;
}
.comp-row::after {
  content: '';
  position: absolute;
  inset: 0;
  left: -100%;
  background: linear-gradient(90deg,
    transparent 0%,
    transparent 35%,
    rgba(39,174,96,0.07) 48%,
    rgba(39,174,96,0.12) 52%,
    rgba(39,174,96,0.07) 56%,
    transparent 65%,
    transparent 100%
  );
  transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  pointer-events: none;
  z-index: 0;
}
.comp-row:hover::after {
  left: 100%;
}
.comp-row:hover .comp-icon-com {
  transform: scale(1.08);
  box-shadow: 0 0 24px rgba(39,174,96,0.2) !important;
}
.comp-row:hover .comp-arrow {
  background: rgba(39,174,96,0.12) !important;
  border-color: rgba(39,174,96,0.3) !important;
  transform: translateX(3px);
}
.comp-row:hover .comp-arrow svg path {
  stroke: rgba(39,174,96,0.8);
}

@keyframes ringPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
        @keyframes hubFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dashFlow { to { stroke-dashoffset: -100; } }
        @keyframes nodeFloat1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, -12px); }
          66% { transform: translate(-5px, -6px); }
        }
        @keyframes nodeFloat2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-10px, -8px); }
          66% { transform: translate(5px, -14px); }
        }
        @keyframes nodeFloat3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-12px, 6px); }
          66% { transform: translate(-6px, -10px); }
        }
        @keyframes nodeFloat4 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(10px, -8px); }
          66% { transform: translate(6px, 10px); }
        }
        @keyframes nodeFloat5 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(8px, 10px); }
          66% { transform: translate(-6px, 5px); }
        }
        @keyframes nodeFloat6 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-8px, 8px); }
          66% { transform: translate(10px, 4px); }
        }
        @keyframes particleFloat0 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(20px, -15px); opacity: 0.7; }
          50% { transform: translate(-10px, 10px); opacity: 0.4; }
          75% { transform: translate(15px, 5px); opacity: 0.8; }
        }
        @keyframes particleFloat1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-15px, 20px); opacity: 0.7; }
          50% { transform: translate(10px, -8px); opacity: 0.4; }
          75% { transform: translate(-20px, 12px); opacity: 0.8; }
        }
        @keyframes particleFloat2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(12px, 18px); opacity: 0.7; }
          50% { transform: translate(-8px, -15px); opacity: 0.4; }
          75% { transform: translate(20px, -5px); opacity: 0.8; }
        }
        @keyframes particleFloat3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-18px, -12px); opacity: 0.7; }
          50% { transform: translate(15px, 8px); opacity: 0.4; }
          75% { transform: translate(-5px, 20px); opacity: 0.8; }
        }
        @keyframes particleFloat4 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(8px, -20px); opacity: 0.7; }
          50% { transform: translate(-12px, 15px); opacity: 0.4; }
          75% { transform: translate(18px, -8px); opacity: 0.8; }
        }
        @keyframes particleFloat5 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(-20px, 8px); opacity: 0.7; }
          50% { transform: translate(12px, 18px); opacity: 0.4; }
          75% { transform: translate(-15px, -12px); opacity: 0.8; }
        }
        @keyframes particleFloat6 {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(15px, 12px); opacity: 0.7; }
          50% { transform: translate(-18px, -8px); opacity: 0.4; }
          75% { transform: translate(5px, 20px); opacity: 0.8; }
        }
        .hero-product-node {
          transition: z-index 0s;
        }
        .hero-product-node:hover {
          z-index: 50 !important;
        }
        .hero-product-node:hover > div:first-child {
          transform: scale(1.12);
          box-shadow: 0 0 35px rgba(108,92,231,0.3), 0 4px 24px rgba(0,0,0,0.4) !important;
        }
        .hero-product-node:hover span {
          opacity: 1 !important;
          color: #fff !important;
        }

        /* === TOOLTIP / MINI MODAL === */
        .node-tooltip {
          position: absolute;
          top: 82px;
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          width: 220px;
          padding: 14px 16px;
          background: rgba(15,17,43,0.97);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          backdrop-filter: blur(20px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 100;
        }
        .node-tooltip::before {
          content: '';
          position: absolute; top: -6px; left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 10px; height: 10px;
          background: rgba(15,17,43,0.97);
          border-left: 1px solid rgba(255,255,255,0.12);
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node:hover .node-tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .node-tooltip .tooltip-name {
          font-size: 13px; font-weight: 700; margin-bottom: 6px;
        }
        .node-tooltip .tooltip-desc {
          font-size: 11.5px; line-height: 1.55;
          color: rgba(242,244,248,0.55);
        }
        .node-tooltip .tooltip-bar {
          width: 100%; height: 2px; border-radius: 1px;
          margin-top: 10px; opacity: 0.4;
        }
        .hero-product-node.pos-top .node-tooltip {
          top: auto;
          bottom: calc(100% + 12px);
        }
        .hero-product-node.pos-top .node-tooltip::before {
          top: auto; bottom: -6px;
          border-left: none; border-top: none;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node.pos-left .node-tooltip {
          left: 36px;
          transform: translateX(-30px) translateY(8px);
        }
        .hero-product-node.pos-left .node-tooltip::before {
          left: 30px;
          transform: translateX(0) rotate(45deg);
        }
        .hero-product-node.pos-left:hover .node-tooltip {
          transform: translateX(-30px) translateY(0);
        }
        .hero-product-node.pos-right .node-tooltip {
          left: auto;
          right: -36px;
          transform: translateX(0) translateY(8px);
        }
        .hero-product-node.pos-right .node-tooltip::before {
          left: auto;
          right: 30px;
          transform: translateX(0) rotate(45deg);
        }
        .hero-product-node.pos-right:hover .node-tooltip {
          transform: translateX(0) translateY(0);
        }
        .hero-product-node.pos-top.pos-right .node-tooltip {
          left: auto;
          right: -36px;
          top: auto;
          bottom: calc(100% + 12px);
        }
        .hero-product-node.pos-top.pos-right .node-tooltip::before {
          top: auto; bottom: -6px;
          left: auto; right: 30px;
          border-left: none; border-top: none;
          border-right: 1px solid rgba(255,255,255,0.12);
          border-bottom: 1px solid rgba(255,255,255,0.12);
        }
        .hero-product-node.pos-top.pos-right:hover .node-tooltip {
          transform: translateX(0) translateY(0);
        }

        /* === LANCE HOVER -> ORBITAL GREEN BURST === */
        .orbital-wrapper.lance-active .hero-product-node > div:first-child {
          transform: scale(1.15) !important;
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }
        .orbital-wrapper.lance-active .hero-product-node span {
          color: #fff !important;
          opacity: 1 !important;
        }
        .orbital-wrapper.lance-active .orbit-ring {
          border-color: rgba(39,174,96,0.2) !important;
          animation: ringBurst 1s ease-out forwards !important;
        }
        .orbital-wrapper.lance-active .hub-center {
          box-shadow: 0 0 60px rgba(39,174,96,0.3), 0 0 120px rgba(39,174,96,0.15), inset 0 1px 0 rgba(255,255,255,0.15) !important;
          border-color: rgba(39,174,96,0.4) !important;
        }
        @keyframes ringBurst {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); border-color: rgba(39,174,96,0.35); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes lancePulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0; transform: scale(1.06); }
        }
      
/* ===== CARD ARRANGEMENTS SECTION ===== */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 0;
  align-items: stretch;
}
.card-option {
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  transition: border-color 0.4s ease, background 0.4s ease;
  display: flex;
  flex-direction: column;
}
.card-option:hover {
  border-color: rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.035);
}
.card-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
  position: relative;
  min-height: 280px;
}
.physical-card {
  width: 300px;
  height: 190px;
  border-radius: 14px;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,0,0,0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  overflow: hidden;
}
.card-option:hover .physical-card {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 28px 70px rgba(0,0,0,0.5), 0 0 50px rgba(0,0,0,0.3);
}
.physical-card.bandeirado {
  background: linear-gradient(145deg, #1a1d3a, #12142e);
  border: 1px solid rgba(108,92,231,0.3);
}
.physical-card.bandeirado::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(108,92,231,0.15), transparent 70%);
  border-radius: 50%;
}
.physical-card.privatelabel {
  background: linear-gradient(145deg, #1a2a1a, #0e1a12);
  border: 1px solid rgba(0,184,148,0.3);
}
.physical-card.privatelabel::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0,184,148,0.15), transparent 70%);
  border-radius: 50%;
}
.card-chip-gold {
  width: 36px;
  height: 28px;
  border-radius: 5px;
  background: linear-gradient(145deg, #C9A84C, #F2D06B, #C9A84C);
  position: relative;
  overflow: hidden;
}
.card-chip-gold .chip-lines {
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 2px;
}
.card-chip-gold .chip-lines::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(0,0,0,0.12);
}
.card-chip-gold .chip-lines::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: rgba(0,0,0,0.12);
}
.card-number {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.5);
  font-family: 'Inter', monospace;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.card-holder {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(255,255,255,0.4);
}
.card-holder-name {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: rgba(255,255,255,0.6);
  margin-top: 3px;
}
.mc-logo {
  display: flex;
  align-items: center;
  position: relative;
}
.mc-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.mc-circle.red { background: #EB001B; }
.mc-circle.yellow { background: #F79E1B; margin-left: -12px; mix-blend-mode: screen; }
.pl-brand {
  display: flex;
  align-items: center;
  gap: 6px;
}
.pl-brand-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(0,184,148,0.2);
  border: 1px solid rgba(0,184,148,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pl-brand-text {
  font-size: 14px;
  font-weight: 700;
  color: rgba(0,184,148,0.7);
  letter-spacing: 0.02em;
}
.card-info {
  padding: 32px;
}
.card-type-label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}
.card-type-label .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}
.card-info h3 {
  font-size: 22px;
  font-weight: 700;
  color: #f2f4f8;
  line-height: 1.3;
  margin-bottom: 16px;
}
.features-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
}
.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(242,244,248,0.5);
  line-height: 1.5;
}
.features-list li .check {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.center-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
}
.divider-line {
  width: 1px;
  flex: 1;
  background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);
}
.divider-badge {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(244,85,70,0.08);
  border: 1px solid rgba(244,85,70,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: #f45546;
  letter-spacing: 0.02em;
}
/* Hybrid section */
.hybrid-section {
  margin-top: 48px;
  position: relative;
  border-radius: 24px;
  padding: 3px;
  background: linear-gradient(135deg, rgba(108,92,231,0.5), rgba(244,85,70,0.5), rgba(0,184,148,0.5));
  background-size: 200% 200%;
  animation: hybridGradientShift 6s ease infinite;
}
@keyframes hybridGradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.hybrid-inner {
  border-radius: 22px;
  background: linear-gradient(160deg, #0d1030, #0a0c1f 50%, #0d1a14);
  padding: 56px 48px;
  position: relative;
  overflow: hidden;
}
.hybrid-inner::before {
  content: '';
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(244,85,70,0.06), transparent 70%);
  pointer-events: none;
}
.hybrid-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.hybrid-content {
  position: relative;
  z-index: 1;
}
.hybrid-exclusive-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: 100px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: linear-gradient(135deg, rgba(244,85,70,0.12), rgba(244,85,70,0.06));
  border: 1px solid rgba(244,85,70,0.25);
  color: #f45546;
  margin-bottom: 20px;
}
.hybrid-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #f2f4f8;
  margin-bottom: 16px;
}
.hybrid-title .gradient-text {
  background: linear-gradient(135deg, #6C5CE7, #f45546, #00B894);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hybrid-description {
  font-size: 16px;
  line-height: 1.7;
  color: rgba(242,244,248,0.5);
  margin-bottom: 28px;
  max-width: 440px;
}
.hybrid-features {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.hybrid-feature {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.hybrid-feature-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.hybrid-feature-icon.purple {
  background: rgba(108,92,231,0.12);
  border: 1px solid rgba(108,92,231,0.2);
}
.hybrid-feature-icon.green {
  background: rgba(0,184,148,0.12);
  border: 1px solid rgba(0,184,148,0.2);
}
.hybrid-feature-icon.red {
  background: rgba(244,85,70,0.12);
  border: 1px solid rgba(244,85,70,0.2);
}
.hybrid-feature-text {
  font-size: 14px;
  color: rgba(242,244,248,0.6);
  line-height: 1.5;
}
.hybrid-feature-text strong {
  color: rgba(242,244,248,0.85);
  font-weight: 600;
}
.hybrid-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 320px;
  z-index: 1;
}
.hybrid-card-stack {
  position: relative;
  width: 320px;
  height: 280px;
}
.hybrid-card-stack .physical-card.bandeirado {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 280px;
  height: 175px;
  transform: rotate(-6deg) translateX(0) translateY(0);
  z-index: 1;
  opacity: 0.8;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease, box-shadow 0.4s ease;
}
.hybrid-card-stack:hover .physical-card.bandeirado {
  transform: rotate(-12deg) translateX(-30px) translateY(-15px);
  opacity: 1;
  box-shadow: 0 25px 60px rgba(108,92,231,0.3), 0 0 40px rgba(108,92,231,0.1);
}
.hybrid-card-stack .physical-card.privatelabel {
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 280px;
  height: 175px;
  transform: rotate(4deg) translateX(0) translateY(0);
  z-index: 2;
  opacity: 0.8;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease, box-shadow 0.4s ease;
}
.hybrid-card-stack:hover .physical-card.privatelabel {
  transform: rotate(10deg) translateX(25px) translateY(15px);
  opacity: 1;
  box-shadow: 0 25px 60px rgba(0,184,148,0.3), 0 0 40px rgba(0,184,148,0.1);
}
.hybrid-merge-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  z-index: 10;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(108,92,231,0.2), rgba(244,85,70,0.3), rgba(0,184,148,0.2));
  border: 2px solid rgba(244,85,70,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 30px rgba(244,85,70,0.25), 0 0 60px rgba(244,85,70,0.1);
  animation: mergeGlow 3s ease-in-out infinite;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease, opacity 0.4s ease;
}
.hybrid-card-stack:hover .hybrid-merge-badge {
  transform: translate(-50%, -50%) scale(1.15);
  box-shadow: 0 0 50px rgba(244,85,70,0.4), 0 0 100px rgba(244,85,70,0.2);
}
@keyframes mergeGlow {
  0%, 100% { box-shadow: 0 0 30px rgba(244,85,70,0.25), 0 0 60px rgba(244,85,70,0.1); }
  50% { box-shadow: 0 0 40px rgba(244,85,70,0.35), 0 0 80px rgba(244,85,70,0.15); }
}



/* ===== PARTNER LOGOS ===== */
.partner-logo:hover {
  opacity: 0.6 !important;
}

/* ===== PROCESS TIMELINE ===== */
.process-timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}
.process-timeline::before {
  content: '';
  position: absolute;
  left: 39px;
  top: 40px;
  bottom: 40px;
  width: 2px;
  background: linear-gradient(to bottom, rgba(244,85,70,0.4), rgba(108,92,231,0.4) 33%, rgba(0,184,148,0.4) 66%, rgba(39,174,96,0.4));
}
.process-step {
  display: grid;
  grid-template-columns: 80px 1fr 340px;
  gap: 32px;
  align-items: start;
  padding: 36px 0;
  position: relative;
}
.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
}
.step-number {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.02em;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 3;
}
.process-step:hover .step-number {
  transform: scale(1.08);
}
.step-content {
  padding-top: 8px;
}
.step-title {
  font-size: 22px;
  font-weight: 700;
  color: #f2f4f8;
  margin-bottom: 10px;
  line-height: 1.3;
}
.step-desc {
  font-size: 15px;
  color: rgba(242,244,248,0.45);
  line-height: 1.7;
  margin-bottom: 18px;
  max-width: 420px;
}
.step-details {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.step-tag {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 8px;
  line-height: 1.4;
}
.step-visual {
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02);
  overflow: hidden;
  padding: 24px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.process-step:hover .step-visual {
  border-color: rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.03);
}
.discovery-visual { display: flex; flex-direction: column; gap: 10px; }
.disc-question { display: flex; align-items: center; gap: 10px; }
.disc-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.disc-bar { height: 8px; border-radius: 4px; opacity: 0.15; }
.disc-answer { margin-left: 18px; display: flex; gap: 6px; }
.disc-pill { height: 24px; border-radius: 6px; font-size: 10px; font-weight: 600; padding: 0 10px; display: flex; align-items: center; }
.arq-visual { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
.arq-block {
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: transform 0.3s ease;
}
.process-step:hover .arq-block { transform: scale(1.03); }
.arq-block-ready { border: 1px solid rgba(0,184,148,0.3); background: rgba(0,184,148,0.08); color: rgba(0,184,148,0.7); }
.arq-block-config { border: 1px solid rgba(108,92,231,0.3); background: rgba(108,92,231,0.08); color: rgba(108,92,231,0.7); }
.arq-progress { margin-top: 10px; display: flex; align-items: center; gap: 10px; }
.arq-bar-bg { flex: 1; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.06); overflow: hidden; }
.arq-bar-fill { height: 100%; border-radius: 3px; background: linear-gradient(90deg, #00B894, #55EFC4); width: 75%; }
.arq-label { font-size: 11px; font-weight: 600; color: rgba(0,184,148,0.7); white-space: nowrap; }
.int-visual { display: flex; flex-direction: column; gap: 8px; }
.int-row { display: flex; align-items: center; gap: 8px; }
.int-node { padding: 6px 12px; border-radius: 8px; font-size: 10px; font-weight: 600; white-space: nowrap; }
.int-node-just { background: rgba(244,85,70,0.1); border: 1px solid rgba(244,85,70,0.25); color: rgba(244,85,70,0.8); }
.int-node-provider { background: rgba(108,92,231,0.08); border: 1px solid rgba(108,92,231,0.2); color: rgba(108,92,231,0.7); }
.int-line { flex: 1; height: 1px; background: rgba(255,255,255,0.08); position: relative; }
.int-line::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 0;
  height: 0;
  border-left: 5px solid rgba(255,255,255,0.15);
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
}
.int-status { display: flex; align-items: center; gap: 6px; margin-top: 6px; }
.int-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #00B894; animation: procStatusPulse 2s ease infinite; }
@keyframes procStatusPulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,184,148,0.4); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(0,184,148,0); }
}
.int-status-text { font-size: 10px; font-weight: 500; color: rgba(0,184,148,0.6); }
.op-visual { display: flex; flex-direction: column; gap: 10px; }
.op-topbar { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.op-dot { width: 6px; height: 6px; border-radius: 50%; }
.op-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
.op-metric { padding: 10px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); }
.op-metric-label { font-size: 9px; font-weight: 500; color: rgba(242,244,248,0.35); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
.op-metric-value { font-size: 18px; font-weight: 700; letter-spacing: -0.02em; }
.op-status-bar { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 8px; background: rgba(39,174,96,0.06); border: 1px solid rgba(39,174,96,0.15); }
.op-status-dot { width: 8px; height: 8px; border-radius: 50%; background: #27AE60; animation: procStatusPulse 2s ease infinite; }
.op-status-text { font-size: 11px; font-weight: 600; color: rgba(39,174,96,0.8); }
.process-step + .process-step { border-top: 1px solid rgba(255,255,255,0.03); }
.process-summary {
  margin-top: 56px;
  padding: 28px 36px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(244,85,70,0.04), rgba(108,92,231,0.04));
  border: 1px solid rgba(255,255,255,0.06);
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0;
}
.summary-item { display: flex; align-items: center; gap: 12px; justify-content: center; padding: 0 16px; }
.summary-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.summary-text { font-size: 14px; color: rgba(242,244,248,0.5); line-height: 1.4; }
.summary-text strong { color: rgba(242,244,248,0.85); font-weight: 600; display: block; }
.summary-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.06); }


/* ===== CASES VIDEO SECTION ===== */
.cases-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.case-card {
  background: rgba(255,255,255,0.025);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  border-color: rgba(255,255,255,0.1);
}
.case-video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #0f112b;
  overflow: hidden;
}
.case-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.case-content { padding: 32px; }
.case-products { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; }
.product-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 14px 5px 8px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.product-badge svg { width: 20px; height: 20px; flex-shrink: 0; }
.case-name {
  font-size: 13px;
  font-weight: 600;
  color: rgba(242,244,248,0.4);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}
.case-headline {
  font-size: 24px;
  font-weight: 700;
  color: #f2f4f8;
  line-height: 1.25;
  margin-bottom: 20px;
}
.case-metrics { display: flex; flex-wrap: wrap; gap: 8px; }
.case-metric {
  font-size: 12px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 6px;
  line-height: 1.4;
}

/* About page - Founder & Team */
.about-founder { display: grid; grid-template-columns: auto 1fr; gap: 28px; align-items: start; margin-bottom: 48px; }
.about-avatar { width: 72px; height: 72px; border-radius: 16px; background: linear-gradient(135deg, rgba(244,85,70,0.15), rgba(244,85,70,0.06)); border: 1px solid rgba(244,85,70,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 700; color: #f45546; letter-spacing: -0.02em; transition: border-color 0.3s, box-shadow 0.3s; }
.about-avatar:hover { border-color: rgba(244,85,70,0.35); box-shadow: 0 8px 24px rgba(244,85,70,0.1); }
.about-team-card { padding: 36px; border-radius: 16px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); transition: border-color 0.3s; }
.about-team-card:hover { border-color: rgba(255,255,255,0.12); }
.about-metric { padding: 24px 12px; text-align: center; }
.about-metric-value { font-size: 36px; font-weight: 700; color: #f2f4f8; letter-spacing: -0.02em; }
.about-metric-label { font-size: 12px; color: rgba(242,244,248,0.35); margin-top: 8px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 500; }
.hero-title-mobile { display: none; }
.hero-title-desktop { display: inline; }




/* ===== RESPONSIVE / MOBILE ===== */
@media (max-width: 900px) {
  /* --- Header: hamburger menu --- */
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: flex !important; }
  header { padding: 0 20px !important; }

  /* --- Global section padding --- */
  .section-hero { min-height: auto !important; padding: 116px 28px 46px !important; }
  .section-social-proof { padding: 24px 20px !important; }
  .section-depara { padding: 72px 20px !important; }
  .section-products { padding: 72px 20px !important; }
  .section-cards { padding: 72px 20px !important; }
  .section-process { padding: 72px 20px !important; }
  .section-metrics { padding: 48px 20px !important; }
  .section-cases { padding: 72px 20px !important; }
  .section-cta { padding: 80px 20px !important; }

  /* --- Hero --- */
  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  .hero-grid > div:first-child {
    width: 100% !important;
    min-width: 0 !important;
  }
  .hero-title {
    font-size: clamp(58px, 9.4vw, 70px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.055em !important;
    margin: 28px 0 22px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow-wrap: break-word !important;
  }
  .hero-grid p {
    font-size: 16px !important;
    margin-bottom: 24px !important;
  }
  .flow-steps-row {
    margin-bottom: 24px !important;
  }
  .flow-step-item {
    padding: 6px 12px !important;
    border-radius: 8px !important;
  }
  .flow-step-item .step-num-box {
    width: 18px !important; height: 18px !important;
    font-size: 9px !important; border-radius: 4px !important;
  }
  .flow-step-item .step-label-text { font-size: 11px !important; }
  .flow-step-lance {
    padding: 6px 14px !important;
    border-radius: 8px !important;
  }
  .flow-step-lance .step-num-box {
    width: 18px !important; height: 18px !important;
    font-size: 9px !important; border-radius: 4px !important;
  }
  .flow-step-lance .step-label-text { font-size: 12px !important; }
  .flow-arrow-icon { padding: 0 3px !important; }
  .flow-arrow-icon svg { width: 16px !important; height: 10px !important; }

  /* --- Hero buttons smaller --- */
  .hero-grid button {
    font-size: 13px !important;
    padding: 10px 20px !important;
  }

  /* --- Social Proof --- */
  .social-proof-bar {
    flex-direction: column !important;
    gap: 16px !important;
    text-align: center !important;
  }
  .social-logos {
    gap: 16px 24px !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
    display: flex !important;
  }
  .social-logos img {
    height: 24px !important;
  }

  /* --- DE > PARA --- */
  .depara-labels {
    grid-template-columns: 1fr 36px 1fr !important;
  }
  .comp-row {
    grid-template-columns: 1fr 36px 1fr !important;
  }
  .comp-row > div:first-child,
  .comp-row > div:last-child {
    padding: 16px 14px !important;
    gap: 10px !important;
  }
  .comp-row p {
    display: none !important;
  }
  .comp-row h4 {
    font-size: 13px !important;
    margin-bottom: 0 !important;
  }
  .comp-row > div:first-child > div:first-child,
  .comp-row > div:last-child > div:first-child {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    border-radius: 8px !important;
  }
  .comp-row svg {
    width: 18px !important;
    height: 18px !important;
  }
  .comp-arrow {
    width: 24px !important;
    height: 24px !important;
  }
  .comp-arrow svg {
    width: 11px !important;
    height: 11px !important;
  }

  /* --- Bento Grid --- */
  .bento-grid {
    grid-template-columns: 1fr !important;
  }
  .bento-grid .bento-card {
    grid-column: span 1 !important;
  }

  /* --- Card Arrangements --- */
  .cards-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .card-visual {
    display: none !important;
  }

  /* --- Hybrid Section --- */
  .hybrid-section-grid {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .hybrid-layout {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .hybrid-visual {
    display: none !important;
  }

  /* --- Process Timeline --- */
  .process-step {
    grid-template-columns: 60px 1fr !important;
    gap: 16px !important;
  }
  .step-visual {
    display: none !important;
  }
  .process-timeline::before {
    left: 29px !important;
  }
  .step-number {
    width: 40px !important;
    height: 40px !important;
    font-size: 14px !important;
  }
  .step-title {
    font-size: 18px !important;
  }
  .step-desc {
    font-size: 14px !important;
  }
  .process-summary {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
    padding: 24px 20px !important;
  }
  .summary-divider {
    display: none !important;
  }
  .summary-item {
    justify-content: flex-start !important;
    padding: 0 !important;
  }

  /* --- Metrics --- */
  .metrics-grid {
    grid-template-columns: 1fr 1fr !important;
  }
  .metric-item {
    border-left: none !important;
  }
  .metric-item:nth-child(2) {
    border-left: 1px solid rgba(255,255,255,0.06) !important;
  }
  .metric-item:nth-child(4) {
    border-left: 1px solid rgba(255,255,255,0.06) !important;
  }
  .metric-item:nth-child(3),
  .metric-item:nth-child(4) {
    border-top: 1px solid rgba(255,255,255,0.06) !important;
  }

  /* --- Cases --- */
  .cases-grid {
    grid-template-columns: 1fr !important;
  }
  .case-headline {
    font-size: 20px !important;
  }

  /* --- General heading overrides --- */
  .section-depara h2,
  .section-products h2,
  .section-cards h2,
  .section-process h2,
  .section-cases h2 {
    font-size: 30px !important;
  }
  .section-cta h2 {
    font-size: 30px !important;
  }
}

@media (max-width: 520px) {
  /* --- Extra small screens --- */
  .section-hero { min-height: auto !important; padding: 104px 24px 42px !important; }
  .hero-title {
    font-size: clamp(46px, 12.6vw, 50px) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.058em !important;
    margin: 30px 0 22px !important;
    width: 100% !important;
    max-width: calc(100vw - 48px) !important;
    overflow-wrap: break-word !important;
  }
  .hero-title-desktop {
    display: none !important;
  }
  .hero-title-mobile {
    display: inline !important;
  }
  .hero-grid p {
    font-size: 15px !important;
  }

  .section-social-proof { padding: 24px 16px !important; }
  .social-logos {
    gap: 20px 24px !important;
    display: grid !important;
    grid-template-columns: repeat(4, auto) !important;
    justify-content: center !important;
    justify-items: center !important;
    align-items: center !important;
  }
  .social-logos img {
    height: 24px !important;
  }

  .section-depara,
  .section-products,
  .section-cards,
  .section-process,
  .section-cases {
    padding: 56px 16px !important;
  }
  .section-metrics { padding: 36px 16px !important; }
  .section-cta { padding: 64px 16px !important; }

  .depara-labels {
    grid-template-columns: 1fr 28px 1fr !important;
  }
  .comp-row {
    grid-template-columns: 1fr 28px 1fr !important;
  }
  .comp-row > div:first-child,
  .comp-row > div:last-child {
    padding: 12px 10px !important;
    gap: 8px !important;
  }
  .comp-row h4 {
    font-size: 12px !important;
  }

  .metrics-grid {
    grid-template-columns: 1fr 1fr !important;
  }

  .process-step {
    grid-template-columns: 48px 1fr !important;
  }
  .process-timeline::before {
    left: 23px !important;
  }
  .step-number {
    width: 36px !important;
    height: 36px !important;
    border-radius: 10px !important;
    font-size: 13px !important;
  }

  .section-depara h2,
  .section-products h2,
  .section-cards h2,
  .section-process h2,
  .section-cases h2,
  .section-cta h2 {
    font-size: 26px !important;
  }

  .case-content { padding: 20px !important; }
  .case-headline { font-size: 18px !important; }
  .case-metrics { gap: 6px !important; }
}
`})]})}const di=r=>({width:"100%",aspectRatio:"16/10",borderRadius:12,background:`linear-gradient(145deg, ${r}0C, ${r}04)`,border:`1px solid ${r}18`,position:"relative",overflow:"hidden",padding:0,boxShadow:`0 8px 32px ${r}08, inset 0 1px 0 ${r}10`}),ui=r=>({position:"absolute",top:0,left:0,right:0,height:28,background:`${r}0A`,borderBottom:`1px solid ${r}10`,display:"flex",alignItems:"center",padding:"0 10px",gap:5}),Ue=(r,c="30")=>({width:7,height:7,borderRadius:"50%",background:`${r}${c}`}),tt=(r,c={})=>({background:`${r}08`,border:`1px solid ${r}12`,borderRadius:8,padding:"8px 10px",...c}),gm=(r,c=5,u,s="18")=>({width:r,height:c,background:`${u}${s}`,borderRadius:3});function Wx({color:r}){const c=[{name:"Alimentação",pct:78,val:"R$ 780"},{name:"Refeição",pct:45,val:"R$ 450"},{name:"Mobilidade",pct:92,val:"R$ 230"},{name:"Cultura",pct:30,val:"R$ 150"}];return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`,letterSpacing:"0.05em"},children:"JUST Benefits"}),n.jsx("div",{style:{marginLeft:"auto",...gm(40,4,r)}})]}),n.jsxs("div",{style:{padding:"36px 14px 12px",display:"flex",gap:10},children:[n.jsxs("div",{style:{flex:1.2},children:[n.jsxs("div",{style:{...tt(r),marginBottom:8,background:`linear-gradient(135deg, ${r}15, ${r}08)`},children:[n.jsx("div",{style:{fontSize:7,color:`${r}50`,fontWeight:600,marginBottom:2},children:"SALDO TOTAL"}),n.jsx("div",{style:{fontSize:16,fontWeight:800,color:r,letterSpacing:"-0.02em"},children:"R$ 1.610,00"}),n.jsx("div",{style:{fontSize:6,color:`${r}40`,marginTop:2},children:"4 categorias ativas"})]}),c.map((u,s)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:5,padding:"3px 0"},children:[n.jsx("div",{style:{width:4,height:16,borderRadius:2,background:r,opacity:.2+s*.15}}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:2},children:[n.jsx("span",{style:{fontSize:7,color:`${r}60`,fontWeight:500},children:u.name}),n.jsx("span",{style:{fontSize:7,color:`${r}80`,fontWeight:700},children:u.val})]}),n.jsx("div",{style:{height:3,background:`${r}10`,borderRadius:2,overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",width:`${u.pct}%`,background:`linear-gradient(90deg, ${r}40, ${r}70)`,borderRadius:2}})})]})]},s))]}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:4},children:"ULTIMAS TRANSACOES"}),["Padaria Central","Uber Eats","Spotify","iFood","Shell"].map((u,s)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px",borderRadius:4,background:s%2===0?`${r}04`:"transparent",marginBottom:2},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n.jsx("div",{style:{width:14,height:14,borderRadius:4,background:`${r}${12+s*4}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:6,color:`${r}60`},children:u[0]}),n.jsx("span",{style:{fontSize:7,color:`${r}50`},children:u})]}),n.jsxs("span",{style:{fontSize:7,color:`${r}40`,fontWeight:600},children:["-R$",(15+s*12).toFixed(0)]})]},s))]})]})]})}function Gx({color:r}){const c=[{placa:"ABC-1234",km:"142.350",fuel:72,status:"Em rota"},{placa:"DEF-5678",km:"89.120",fuel:35,status:"Parado"},{placa:"GHI-9012",km:"201.890",fuel:91,status:"Em rota"}];return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`,letterSpacing:"0.05em"},children:"JUST Fleet"})]}),n.jsxs("div",{style:{padding:"34px 14px 10px",display:"flex",gap:10},children:[n.jsxs("div",{style:{flex:1.3},children:[n.jsx("div",{style:{display:"flex",gap:6,marginBottom:8},children:[{l:"Frota ativa",v:"47"},{l:"Abastecimentos/dia",v:"132"},{l:"Gasto mensal",v:"R$284k"}].map((u,s)=>n.jsxs("div",{style:{...tt(r),flex:1,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:12,fontWeight:800,color:r},children:u.v}),n.jsx("div",{style:{fontSize:6,color:`${r}45`,marginTop:1},children:u.l})]},s))}),n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:4},children:"VEICULOS"}),c.map((u,s)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:6,background:s===0?`${r}08`:"transparent",border:s===0?`1px solid ${r}12`:"1px solid transparent",marginBottom:3},children:[n.jsx("div",{style:{width:20,height:14,borderRadius:3,background:`${r}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8},children:"🚗"}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:7,fontWeight:700,color:`${r}70`},children:u.placa}),n.jsx("span",{style:{fontSize:6,padding:"1px 5px",borderRadius:3,background:u.status==="Em rota"?`${r}15`:`${r}08`,color:`${r}60`,fontWeight:500},children:u.status})]}),n.jsxs("div",{style:{display:"flex",gap:8,marginTop:2},children:[n.jsxs("span",{style:{fontSize:6,color:`${r}40`},children:[u.km," km"]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[n.jsx("div",{style:{width:30,height:3,background:`${r}10`,borderRadius:2},children:n.jsx("div",{style:{height:"100%",width:`${u.fuel}%`,background:u.fuel>50?`${r}60`:"#E17055",borderRadius:2}})}),n.jsxs("span",{style:{fontSize:6,color:`${r}40`},children:[u.fuel,"%"]})]})]})]})]},s))]}),n.jsx("div",{style:{flex:.8},children:n.jsxs("div",{style:{...tt(r),height:"100%",display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:6},children:"CONSUMO SEMANAL"}),n.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:3,flex:1},children:[60,45,70,85,55,90,40].map((u,s)=>n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[n.jsx("div",{style:{width:"100%",height:u*.5,background:`linear-gradient(to top, ${r}30, ${r}10)`,borderRadius:2,minHeight:4}}),n.jsx("span",{style:{fontSize:5,color:`${r}30`},children:["S","T","Q","Q","S","S","D"][s]})]},s))})]})})]})]})}function Yx({color:r}){return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`},children:"JUST Banking"})]}),n.jsxs("div",{style:{padding:"34px 14px 10px",display:"flex",gap:10},children:[n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{...tt(r),marginBottom:8,background:`linear-gradient(135deg, ${r}18, ${r}08)`,padding:"10px 12px"},children:[n.jsx("div",{style:{fontSize:6,color:`${r}45`},children:"Conta Digital"}),n.jsx("div",{style:{fontSize:18,fontWeight:800,color:r,margin:"2px 0",letterSpacing:"-0.02em"},children:"R$ 45.230,00"}),n.jsx("div",{style:{display:"flex",gap:4,marginTop:4},children:["PIX","TED","Boleto","Cartão"].map(c=>n.jsx("div",{style:{flex:1,padding:"4px 0",borderRadius:4,background:`${r}12`,textAlign:"center",fontSize:6,color:`${r}60`,fontWeight:600},children:c},c))})]}),n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:4},children:"MOVIMENTACAO"}),[{t:"PIX recebido",from:"Empresa ABC",v:"+R$ 12.500",pos:!0},{t:"Pagamento",from:"Fornecedor X",v:"-R$ 3.200",pos:!1},{t:"TED enviada",from:"Conta Y",v:"-R$ 8.000",pos:!1},{t:"PIX recebido",from:"Cliente Z",v:"+R$ 5.750",pos:!0}].map((c,u)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"4px 6px",borderRadius:4,marginBottom:2,background:u%2===0?`${r}04`:"transparent"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:7,color:`${r}55`,fontWeight:500},children:c.t}),n.jsx("div",{style:{fontSize:6,color:`${r}30`},children:c.from})]}),n.jsx("span",{style:{fontSize:8,fontWeight:700,color:c.pos?`${r}80`:`${r}40`},children:c.v})]},u))]}),n.jsxs("div",{style:{flex:.7},children:[n.jsxs("div",{style:{width:"100%",aspectRatio:"1.6/1",borderRadius:8,background:`linear-gradient(135deg, ${r}30, ${r}15)`,padding:"10px 12px",position:"relative",marginBottom:8},children:[n.jsx("div",{style:{fontSize:6,color:`${r}60`,fontWeight:600},children:"JUST"}),n.jsx("div",{style:{position:"absolute",bottom:22,left:12},children:n.jsx("div",{style:{fontSize:7,fontWeight:600,color:`${r}80`,letterSpacing:"0.15em"},children:"**** **** **** 4521"})}),n.jsx("div",{style:{position:"absolute",bottom:10,left:12,fontSize:6,color:`${r}50`},children:"Empresa LTDA"}),n.jsx("div",{style:{position:"absolute",bottom:10,right:12,fontSize:8,fontWeight:800,color:`${r}50`},children:"VISA"})]}),n.jsxs("div",{style:{...tt(r),textAlign:"center"},children:[n.jsx("div",{style:{fontSize:6,color:`${r}40`},children:"Limite disponível"}),n.jsx("div",{style:{fontSize:11,fontWeight:700,color:r},children:"R$ 25.000"}),n.jsx("div",{style:{height:3,background:`${r}10`,borderRadius:2,marginTop:4},children:n.jsx("div",{style:{height:"100%",width:"62%",background:`${r}50`,borderRadius:2}})})]})]})]})]})}function $x({color:r}){return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`},children:"JUST Expenses"})]}),n.jsxs("div",{style:{padding:"34px 14px 10px",display:"flex",gap:10},children:[n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{display:"flex",gap:6,marginBottom:8},children:[{l:"Budget total",v:"R$ 120k"},{l:"Utilizado",v:"R$ 78.4k"},{l:"Pendentes",v:"12"}].map((c,u)=>n.jsxs("div",{style:{...tt(r),flex:1,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:10,fontWeight:800,color:u===2?"#FDCB6E":r},children:c.v}),n.jsx("div",{style:{fontSize:6,color:`${r}40`,marginTop:1},children:c.l})]},u))}),n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:4},children:"APROVACOES PENDENTES"}),[{user:"Maria S.",dept:"Marketing",val:"R$ 2.340",type:"SaaS"},{user:"Pedro R.",dept:"Tech",val:"R$ 890",type:"Viagem"},{user:"Ana L.",dept:"Vendas",val:"R$ 1.560",type:"Evento"}].map((c,u)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,padding:"5px 8px",borderRadius:6,background:`${r}04`,marginBottom:3,border:`1px solid ${r}08`},children:[n.jsx("div",{style:{width:18,height:18,borderRadius:"50%",background:`${r}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,fontWeight:700,color:`${r}50`},children:c.user[0]}),n.jsxs("div",{style:{flex:1},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontSize:7,fontWeight:600,color:`${r}60`},children:c.user}),n.jsx("span",{style:{fontSize:7,fontWeight:700,color:`${r}70`},children:c.val})]}),n.jsxs("div",{style:{display:"flex",gap:4,marginTop:1},children:[n.jsx("span",{style:{fontSize:5,color:`${r}35`},children:c.dept}),n.jsx("span",{style:{fontSize:5,padding:"0 4px",borderRadius:2,background:`${r}10`,color:`${r}45`},children:c.type})]})]}),n.jsxs("div",{style:{display:"flex",gap:3},children:[n.jsx("div",{style:{width:16,height:14,borderRadius:3,background:`${r}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:`${r}60`},children:"✓"}),n.jsx("div",{style:{width:16,height:14,borderRadius:3,background:"#E1705515",display:"flex",alignItems:"center",justifyContent:"center",fontSize:7,color:"#E17055"},children:"✗"})]})]},u))]}),n.jsxs("div",{style:{flex:.8},children:[n.jsxs("div",{style:{...tt(r),marginBottom:8},children:[n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:6},children:"GASTOS POR CATEGORIA"}),[{n:"SaaS",p:35},{n:"Viagens",p:25},{n:"Marketing",p:20},{n:"Escritório",p:12},{n:"Outros",p:8}].map((c,u)=>n.jsxs("div",{style:{marginBottom:4},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:1},children:[n.jsx("span",{style:{fontSize:6,color:`${r}50`},children:c.n}),n.jsxs("span",{style:{fontSize:6,color:`${r}40`},children:[c.p,"%"]})]}),n.jsx("div",{style:{height:3,background:`${r}0A`,borderRadius:2},children:n.jsx("div",{style:{height:"100%",width:`${c.p}%`,background:`${r}${30+u*10}`,borderRadius:2}})})]},u))]}),n.jsxs("div",{style:{...tt(r),textAlign:"center",padding:10},children:[n.jsx("div",{style:{fontSize:6,color:`${r}35`},children:"Política ativa"}),n.jsx("div",{style:{fontSize:8,fontWeight:700,color:`${r}60`},children:"Nivel 3"}),n.jsx("div",{style:{fontSize:5,color:`${r}30`,marginTop:2},children:"Aprovação > R$500"})]})]})]})]})}function Jx({color:r}){return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`},children:"JUST Credit"})]}),n.jsxs("div",{style:{padding:"34px 16px 12px",display:"flex",gap:12},children:[n.jsxs("div",{style:{flex:1,textAlign:"center"},children:[n.jsxs("div",{style:{...tt(r),background:`linear-gradient(135deg, ${r}14, ${r}08)`,padding:"14px 12px",marginBottom:10},children:[n.jsx("div",{style:{fontSize:6,color:`${r}45`},children:"Limite de crédito disponível"}),n.jsx("div",{style:{fontSize:20,fontWeight:800,color:r,margin:"4px 0",letterSpacing:"-0.02em"},children:"R$ 3.200,00"}),n.jsx("div",{style:{fontSize:6,color:`${r}35`},children:"Aprovado | Vigência ativa"}),n.jsx("div",{style:{height:4,background:`${r}10`,borderRadius:3,margin:"8px 0 4px"},children:n.jsx("div",{style:{height:"100%",width:"40%",background:`linear-gradient(90deg, ${r}50, ${r}80)`,borderRadius:3}})}),n.jsx("div",{style:{fontSize:5,color:`${r}30`},children:"40% do limite utilizado"})]}),n.jsxs("div",{style:{...tt(r),padding:"10px",textAlign:"left"},children:[n.jsx("div",{style:{fontSize:7,color:`${r}50`,fontWeight:600,marginBottom:6,textAlign:"center"},children:"SOLICITAR ANTECIPACAO"}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0 0 6px"},children:[n.jsx("span",{style:{fontSize:7,color:`${r}40`},children:"Valor"}),n.jsx("span",{style:{fontSize:10,fontWeight:800,color:r},children:"R$ 1.500"})]}),n.jsxs("div",{style:{height:4,background:`${r}10`,borderRadius:3,position:"relative",marginBottom:6},children:[n.jsx("div",{style:{height:"100%",width:"47%",background:r,borderRadius:3}}),n.jsx("div",{style:{position:"absolute",top:-3,left:"47%",width:10,height:10,borderRadius:"50%",background:r,border:`2px solid ${r}20`}})]}),n.jsx("div",{style:{width:"100%",padding:"5px 0",borderRadius:5,background:`${r}25`,textAlign:"center",fontSize:7,fontWeight:700,color:`${r}90`},children:"Solicitar agora"})]})]}),n.jsxs("div",{style:{flex:.9},children:[n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:5},children:"HISTORICO"}),[{date:"05 Jan",val:"R$ 2.000",status:"Pago"},{date:"05 Dez",val:"R$ 1.500",status:"Pago"},{date:"05 Nov",val:"R$ 3.000",status:"Pago"},{date:"05 Out",val:"R$ 1.800",status:"Pago"}].map((c,u)=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 6px",borderRadius:4,background:u===0?`${r}06`:"transparent",marginBottom:3},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:7,color:`${r}55`,fontWeight:500},children:c.date}),n.jsx("div",{style:{fontSize:9,fontWeight:700,color:`${r}70`},children:c.val})]}),n.jsx("span",{style:{fontSize:6,padding:"2px 6px",borderRadius:3,background:`${r}12`,color:`${r}55`,fontWeight:500},children:c.status})]},u)),n.jsxs("div",{style:{...tt(r),marginTop:8,textAlign:"center",padding:8},children:[n.jsx("div",{style:{fontSize:6,color:`${r}35`},children:"Total antecipado (12m)"}),n.jsx("div",{style:{fontSize:11,fontWeight:700,color:r},children:"R$ 22.400"})]})]})]})]})}function Vx({color:r}){const c=[{name:"Core",active:!0},{name:"Auth",active:!0},{name:"BaaS",active:!0},{name:"Cards",active:!1},{name:"PIX",active:!0},{name:"Rules",active:!0},{name:"Reports",active:!1},{name:"Webhook",active:!0},{name:"KYC",active:!1}];return n.jsxs("div",{style:di(r),children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:{marginLeft:10,fontSize:8,fontWeight:700,color:`${r}60`},children:"JUST Builder"})]}),n.jsxs("div",{style:{padding:"36px 14px 12px"},children:[n.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[n.jsxs("div",{style:{...tt(r),flex:1,textAlign:"center",background:`${r}10`},children:[n.jsx("div",{style:{fontSize:10,fontWeight:800,color:r},children:"Custom"}),n.jsx("div",{style:{fontSize:6,color:`${r}40`},children:"Projeto sob medida"})]}),n.jsxs("div",{style:{...tt(r),flex:1,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:6,color:`${r}40`},children:"Modulos ativos"}),n.jsx("div",{style:{fontSize:11,fontWeight:700,color:r},children:"6/9"})]}),n.jsxs("div",{style:{...tt(r),flex:1,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:6,color:`${r}40`},children:"Progresso"}),n.jsx("div",{style:{fontSize:11,fontWeight:700,color:r},children:"73%"})]})]}),n.jsx("div",{style:{fontSize:7,color:`${r}45`,fontWeight:600,marginBottom:5},children:"MODULOS DO PROJETO"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:4},children:c.map((u,s)=>n.jsxs("div",{style:{padding:"6px 8px",borderRadius:6,textAlign:"center",background:u.active?`${r}12`:`${r}04`,border:`1px solid ${u.active?`${r}20`:`${r}08`}`},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:u.active?r:`${r}20`,margin:"0 auto 3px"}}),n.jsx("div",{style:{fontSize:7,fontWeight:u.active?600:400,color:u.active?`${r}70`:`${r}30`},children:u.name})]},s))}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:8},children:[n.jsxs("div",{style:{...tt(r),flex:1},children:[n.jsx("div",{style:{fontSize:6,color:`${r}35`,marginBottom:3},children:"Stack"}),n.jsx("div",{style:{display:"flex",gap:3,flexWrap:"wrap"},children:["Node.js","React","PostgreSQL","Redis"].map(u=>n.jsx("span",{style:{fontSize:5,padding:"1px 4px",borderRadius:2,background:`${r}10`,color:`${r}45`},children:u},u))})]}),n.jsxs("div",{style:{...tt(r),flex:1},children:[n.jsx("div",{style:{fontSize:6,color:`${r}35`,marginBottom:3},children:"Integradores"}),n.jsx("div",{style:{display:"flex",gap:3,flexWrap:"wrap"},children:["Swap","Sitef","Idez"].map(u=>n.jsx("span",{style:{fontSize:5,padding:"1px 4px",borderRadius:2,background:`${r}10`,color:`${r}45`},children:u},u))})]})]})]})]})}const Xx={beneficios:Wx,frotas:Gx,banking:Yx,despesas:$x,antecipacao:Jx,"sob-demanda":Vx};function Qx({color:r,label:c,style:u={},productKey:s=null}){const p=s||Object.keys(Ce).find(g=>Ce[g]?.accent===r)||null,m=p?Xx[p]:null;return m?n.jsx("div",{style:u,children:n.jsx(m,{color:r})}):n.jsxs("div",{style:{...di(r),display:"flex",alignItems:"center",justifyContent:"center",...u},children:[n.jsxs("div",{style:ui(r),children:[n.jsx("div",{style:Ue(r,"50")}),n.jsx("div",{style:Ue(r)}),n.jsx("div",{style:Ue(r)})]}),n.jsxs("div",{style:{marginTop:16,textAlign:"center"},children:[n.jsx("div",{style:gm(100,6,r,"20")}),n.jsxs("div",{style:{display:"flex",gap:6,marginTop:8},children:[n.jsx("div",{style:{width:60,height:36,background:`${r}10`,borderRadius:6}}),n.jsx("div",{style:{width:60,height:36,background:`${r}10`,borderRadius:6}})]})]}),n.jsx("div",{style:{position:"absolute",bottom:10,right:10,fontSize:9,fontWeight:700,color:`${r}50`},children:c})]})}const Zx={},Ya="https://wearejust.it",Uf="JUST",xm="JUST Fintechs",bm="Crie sua fintech com a JUST: tecnologia para cartões, banking, benefícios, frotas, despesas e crédito, pronta para operar em escala.",ym=`${Ya}/logo-just.png`,Kx=["https://www.linkedin.com/company/wearejust-it"],Fx=["produtos financeiros digitais","cartões private label","plataformas financeiras modulares","banking as a service","meios de pagamento","gestão de despesas corporativas","benefícios flexíveis","antifraude transacional"],_f=Zx||{},Px=[{name:"google-site-verification",content:_f.VITE_GOOGLE_SITE_VERIFICATION},{name:"msvalidate.01",content:_f.VITE_BING_SITE_VERIFICATION}].filter(r=>r.content),ci={home:{path:"/",title:{"pt-BR":"JUST Fintechs | Plataforma de Produtos Financeiros",en:"JUST Fintechs | Financial Product Platform"},description:{"pt-BR":bm,en:"Launch your fintech with JUST: technology for cards, banking, benefits, fleet, expenses and credit, ready to operate at scale."}},sobre:{path:"/sobre",title:{"pt-BR":"Sobre a JUST | Produtos financeiros digitais",en:"About JUST | Digital financial products"},description:{"pt-BR":"Conheça a JUST, a empresa que transforma estratégia financeira em produtos digitais prontos para operar com segurança, escala e governança.",en:"Meet JUST, the company turning financial strategy into digital products ready to operate with security, scale and governance."}},stack:{path:"/stack",title:{"pt-BR":"Tecnologia JUST | Stack para produtos financeiros",en:"JUST Technology | Stack for financial products"},description:{"pt-BR":"Arquitetura modular para produtos financeiros: integrações multi-provider, segurança, observabilidade, APIs e componentes prontos para escala.",en:"Modular architecture for financial products: multi-provider integrations, security, observability, APIs and scale-ready components."}},cases:{path:"/cases",title:{"pt-BR":"Cases JUST | Produtos financeiros em operação",en:"JUST Cases | Financial products in operation"},description:{"pt-BR":"Veja cases de produtos financeiros construídos e operados pela JUST em benefícios, frotas, banking, despesas e soluções sob demanda.",en:"Explore financial products built and operated by JUST across benefits, fleet, banking, expenses and custom solutions."}},contato:{path:"/contato",title:{"pt-BR":"Contato | JUST",en:"Contact | JUST"},description:{"pt-BR":"Fale com a JUST para avaliar, desenhar e lançar seu produto financeiro digital com tecnologia modular e operação especializada.",en:"Contact JUST to evaluate, design and launch your digital financial product with modular technology and specialized operations."}},privacidade:{path:"/privacidade",title:{"pt-BR":"Política de Privacidade | JUST",en:"Privacy Policy | JUST"},description:{"pt-BR":"Entenda como a JUST trata dados pessoais em seus canais digitais, comerciais e de relacionamento.",en:"Understand how JUST handles personal data across its digital, commercial and relationship channels."}},sentinel:{path:"/sentinel",title:{"pt-BR":"JUST Sentinel | Antifraude em tempo real",en:"JUST Sentinel | Real-time fraud detection"},description:{"pt-BR":"Sentinel é a camada antifraude da JUST: risk scoring em tempo real para autorização de cartões, com modelos proprietários treinados em milhões de transações.",en:"Sentinel is JUST's anti-fraud layer: real-time risk scoring for card authorization, with proprietary models trained on millions of transactions."},serviceType:"Fraud detection"},conteudos:{path:"/conteudos",title:"Conteúdos JUST | Guias sobre produtos financeiros digitais",description:"Guias, análises e materiais técnicos sobre cartões, meios de pagamento, BaaS, benefícios, frotas, antifraude e produtos financeiros digitais."},beneficios:{path:"/beneficios",title:"JUST Benefits | Benefícios flexíveis com sua marca",description:"Plataforma para benefícios flexíveis com múltiplos saldos, regras customizáveis, arranjos aberto, fechado ou híbrido e controle operacional.",serviceType:"Employee benefits financial platform"},frotas:{path:"/frotas",title:"JUST Fleet | Gestão financeira de frotas",description:"Produto financeiro para gestão de frotas com controle por veículo, abastecimento, pedágio, manutenção, regras em tempo real e conciliação.",serviceType:"Fleet financial management platform"},banking:{path:"/banking",title:"JUST Banking | Banking digital para empresas",description:"Banking digital para empresas com conta, cartão, PIX, transferências e funcionalidades bancárias integradas ao seu produto.",serviceType:"Digital banking platform"},despesas:{path:"/despesas",title:"JUST Expense | Despesas corporativas com controle",description:"Cartões corporativos e gestão de despesas com políticas, limites, conciliação, relatórios e controle financeiro em tempo real.",serviceType:"Corporate expense management platform"},antecipacao:{path:"/antecipacao",title:"JUST Credit | Crédito e antecipação",description:"Produtos de crédito, private label, antecipação e recebíveis integrados ao seu negócio com governança e compliance.",serviceType:"Credit platform"},"sob-demanda":{path:"/sob-demanda",title:"JUST Custom | Produtos financeiros sob demanda",description:"Projetos de produtos financeiros sob demanda, com arquitetura customizada, integrações multi-provider e operação preparada para escala.",serviceType:"Custom financial product development"}},Ix=Object.keys(ci);function e1(r){return!r||r==="/"?`${Ya}/`:`${Ya}${r.replace(/\/+$/,"")}/`}function lc(r,c){return!r||typeof r=="string"?r||"":r[c]||r["pt-BR"]||r.en||""}function t1(r){return ci[r]||ci.home}function vm(r){return e1(r)}function Oe(r,c){let u=document.head.querySelector(r);u||(u=document.createElement("meta"),document.head.appendChild(u)),Object.entries(c).forEach(([s,p])=>u.setAttribute(s,p))}function So(r,c){let u=document.head.querySelector(r);u||(u=document.createElement("link"),document.head.appendChild(u)),Object.entries(c).forEach(([s,p])=>u.setAttribute(s,p))}function a1(r){document.head.querySelector(r)?.remove()}function i1(){Px.forEach(r=>{Oe(`meta[name='${r.name}']`,{name:r.name,content:r.content})})}function n1(r){let c=document.getElementById("just-jsonld");c||(c=document.createElement("script"),c.id="just-jsonld",c.type="application/ld+json",document.head.appendChild(c)),c.textContent=JSON.stringify(r)}function l1({title:r,description:c,canonical:u,path:s,route:p}){const m=`${Ya}/#organization`,g=`${Ya}/#website`,h=[{"@type":"Organization","@id":m,name:Uf,url:Ya,logo:ym,description:bm,sameAs:Kx,knowsAbout:Fx,areaServed:"BR"},{"@type":"WebSite","@id":g,name:xm,alternateName:[Uf,"wearejust.it"],url:Ya,publisher:{"@id":m},inLanguage:"pt-BR"},{"@type":"WebPage","@id":`${u}#webpage`,url:u,name:r,description:c,isPartOf:{"@id":g},about:{"@id":m},inLanguage:"pt-BR"}];return p.serviceType&&h.push({"@type":"Service","@id":`${u}#service`,name:r.replace(" | JUST","").replace("JUST | ",""),serviceType:p.serviceType,description:c,provider:{"@id":m},areaServed:"BR",url:u}),s==="/"&&h.push({"@type":"ItemList","@id":`${Ya}/#services`,name:"Produtos financeiros JUST",itemListElement:Ix.filter(x=>ci[x].serviceType).map((x,y)=>({"@type":"ListItem",position:y+1,url:vm(ci[x].path),name:lc(ci[x].title,"pt-BR")}))}),{"@context":"https://schema.org","@graph":h}}function o1(r,c){const u=t1(r),s=!!ci[r],p=s?u.path:"/",m=vm(p),g=lc(u.title,c),h=lc(u.description,c);return{title:g,description:h,canonical:m,path:p,robots:s?"index, follow":"noindex, follow",image:ym,route:u,jsonLd:l1({title:g,description:h,canonical:m,path:p,route:u})}}function r1(r,c){document.documentElement.lang=c==="en"?"en":"pt-BR",document.title=r.title,Oe("meta[name='description']",{name:"description",content:r.description}),Oe("meta[name='robots']",{name:"robots",content:r.robots}),Oe("meta[property='og:site_name']",{property:"og:site_name",content:xm}),Oe("meta[property='og:type']",{property:"og:type",content:r.type||"website"}),Oe("meta[property='og:locale']",{property:"og:locale",content:c==="en"?"en_US":"pt_BR"}),Oe("meta[property='og:title']",{property:"og:title",content:r.title}),Oe("meta[property='og:description']",{property:"og:description",content:r.description}),Oe("meta[property='og:url']",{property:"og:url",content:r.canonical}),Oe("meta[property='og:image']",{property:"og:image",content:r.image}),Oe("meta[property='og:image:width']",{property:"og:image:width",content:"812"}),Oe("meta[property='og:image:height']",{property:"og:image:height",content:"499"}),Oe("meta[property='og:image:alt']",{property:"og:image:alt",content:"Logo da JUST"}),Oe("meta[name='twitter:card']",{name:"twitter:card",content:"summary_large_image"}),Oe("meta[name='twitter:title']",{name:"twitter:title",content:r.title}),Oe("meta[name='twitter:description']",{name:"twitter:description",content:r.description}),Oe("meta[name='twitter:image']",{name:"twitter:image",content:r.image}),i1(),r.article&&(Oe("meta[property='article:published_time']",{property:"article:published_time",content:r.article.publishedAt}),Oe("meta[property='article:modified_time']",{property:"article:modified_time",content:r.article.updatedAt}),Oe("meta[property='article:author']",{property:"article:author",content:r.article.author?.name||""}),Oe("meta[property='article:section']",{property:"article:section",content:r.article.category?.name||""}),document.head.querySelectorAll("meta[property='article:tag']").forEach(u=>u.remove()),(r.article.tags||[]).forEach(u=>{const s=document.createElement("meta");s.setAttribute("property","article:tag"),s.setAttribute("content",u),document.head.appendChild(s)})),So("link[rel='canonical']",{rel:"canonical",href:r.canonical}),r.markdown?So("link[rel='alternate'][type='text/markdown']",{rel:"alternate",type:"text/markdown",href:r.markdown}):a1("link[rel='alternate'][type='text/markdown']"),So("link[rel='alternate'][hreflang='pt-BR']",{rel:"alternate",hreflang:"pt-BR",href:r.canonical}),So("link[rel='alternate'][hreflang='x-default']",{rel:"alternate",hreflang:"x-default",href:r.canonical}),n1(r.jsonLd)}function qf({mobile:r=!1,lang:c,setLang:u}){const s=p=>({padding:0,border:"none",background:"none",cursor:"pointer",color:p?w.textLight:"rgba(242,244,248,0.34)",fontSize:r?13:12,fontWeight:500,letterSpacing:"0.02em",transition:"color 0.2s, opacity 0.2s"});return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginLeft:r?0:8,color:"rgba(242,244,248,0.44)",fontSize:r?13:12},children:[n.jsx("button",{onClick:()=>u("pt-BR"),style:s(c==="pt-BR"),children:"PT"}),n.jsx("span",{style:{opacity:.55},children:"/"}),n.jsx("button",{onClick:()=>u("en"),style:s(c==="en"),children:"EN"})]})}function s1({page:r,setPage:c,lang:u}){const{setLang:s}=Lx(),[p,m]=A.useState(!1),[g,h]=A.useState(!1),[x,y]=A.useState(!1),T=Te[u]||Te["pt-BR"],S=r==="conteudos"||r==="autores"||r.startsWith("conteudos/")||r.startsWith("autores/"),U=S||p||x;A.useEffect(()=>{const $=()=>m(window.scrollY>50);return window.addEventListener("scroll",$),()=>window.removeEventListener("scroll",$)},[]);const _=$=>{c($),h(!1),y(!1),window.scrollTo({top:0,behavior:"smooth"})},Y=["beneficios","frotas","banking","despesas","antecipacao","sob-demanda","sentinel"],H=$=>$==="conteudos"?S:$==="solucoes"?Y.includes(r):r===$,D=$=>({color:H($)?w.textLight:"rgba(242,244,248,0.68)",fontSize:14,fontWeight:500,cursor:"pointer",background:"none",border:"none",padding:"8px 14px",position:"relative",transition:"color 0.2s"}),V=[{key:"beneficios",label:T.products.beneficios.name,desc:T.products.beneficios.headerDesc,color:Ce.beneficios.accent},{key:"frotas",label:T.products.frotas.name,desc:T.products.frotas.headerDesc,color:Ce.frotas.accent},{key:"banking",label:T.products.banking.name,desc:T.products.banking.headerDesc,color:Ce.banking.accent},{key:"despesas",label:T.products.despesas.name,desc:T.products.despesas.headerDesc,color:Ce.despesas.accent},{key:"antecipacao",label:T.products.antecipacao.name,desc:T.products.antecipacao.headerDesc,color:Ce.antecipacao.accent},{key:"sob-demanda",label:T.products["sob-demanda"].name,desc:T.products["sob-demanda"].headerDesc,color:Ce["sob-demanda"].accent},{key:"sentinel",label:T.products.sentinel.name,desc:T.products.sentinel.headerDesc,color:Ce.sentinel.accent}];return n.jsxs(n.Fragment,{children:[n.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:72,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 48px",background:U?"rgba(15,17,43,0.97)":"transparent",backdropFilter:U?"blur(16px)":"none",borderBottom:U?`1px solid ${w.borderLight}`:"1px solid transparent",transition:"all 0.35s ease",zIndex:100},children:[n.jsx("div",{style:{cursor:"pointer",display:"flex",alignItems:"center"},onClick:()=>_("home"),children:n.jsx(mm,{height:36})}),n.jsxs("nav",{className:"desktop-nav",style:{display:"flex",alignItems:"center",gap:2},children:[n.jsx("button",{className:`nav-link ${H("home")?"nav-link-active":""}`,style:D("home"),onClick:()=>_("home"),children:T.nav.home}),n.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[n.jsxs("button",{className:`nav-link ${H("solucoes")?"nav-link-active":""}`,style:D("solucoes"),children:[T.nav.products," ▾"]}),g&&n.jsx("div",{style:{position:"absolute",top:"100%",left:-20,background:"rgba(15,17,43,0.98)",border:`1px solid ${w.borderLight}`,borderRadius:14,padding:"12px 8px",minWidth:320,backdropFilter:"blur(20px)",boxShadow:"0 20px 60px rgba(0,0,0,0.4)",zIndex:200},children:V.map($=>n.jsxs("button",{onClick:()=>_($.key),style:{display:"flex",alignItems:"center",gap:12,width:"100%",textAlign:"left",padding:"10px 14px",background:"none",border:"none",color:w.textLight,fontSize:14,cursor:"pointer",borderRadius:10,transition:"background 0.15s"},onMouseEnter:K=>K.currentTarget.style.background="rgba(255,255,255,0.04)",onMouseLeave:K=>K.currentTarget.style.background="none",children:[n.jsx(el,{productKey:$.key,size:32,showCard:!0}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:600,fontSize:13,color:w.textLight},children:$.label}),n.jsx("div",{style:{fontSize:11,color:w.textMuted,marginTop:2,fontWeight:400},children:$.desc})]})]},$.key))})]}),n.jsx("button",{className:`nav-link ${H("stack")?"nav-link-active":""}`,style:D("stack"),onClick:()=>_("stack"),children:T.nav.technology}),n.jsx("button",{className:`nav-link ${H("cases")?"nav-link-active":""}`,style:D("cases"),onClick:()=>_("cases"),children:T.nav.cases}),n.jsx("button",{className:`nav-link ${H("conteudos")?"nav-link-active":""}`,style:D("conteudos"),onClick:()=>_("conteudos"),children:T.nav.content}),n.jsx("button",{className:`nav-link ${H("sobre")?"nav-link-active":""}`,style:D("sobre"),onClick:()=>_("sobre"),children:T.nav.about}),n.jsx(qf,{lang:u,setLang:s}),n.jsx(pt,{onClick:()=>_("contato"),size:"sm",style:{marginLeft:8},children:T.nav.contact})]}),n.jsx("button",{className:"mobile-menu-btn",onClick:()=>y(!x),style:{display:"none",alignItems:"center",justifyContent:"center",background:"none",border:"none",cursor:"pointer",padding:8,color:w.textLight,width:40,height:40},children:x?n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:n.jsx("path",{d:"M4 4L18 18M18 4L4 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:n.jsx("path",{d:"M3 6h16M3 11h16M3 16h16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),x&&n.jsxs("div",{className:"mobile-nav-overlay",style:{position:"fixed",top:72,left:0,right:0,bottom:0,background:"rgba(15,17,43,0.98)",backdropFilter:"blur(20px)",zIndex:99,display:"flex",flexDirection:"column",padding:"24px 24px",overflowY:"auto"},children:[n.jsx("button",{onClick:()=>_("home"),style:{...D("home"),fontSize:16,padding:"14px 0",textAlign:"left",width:"100%"},children:T.nav.home}),n.jsx("div",{style:{borderTop:`1px solid ${w.borderLight}`,margin:"4px 0"}}),n.jsx("div",{style:{fontSize:11,fontWeight:600,color:"rgba(242,244,248,0.3)",textTransform:"uppercase",letterSpacing:"0.06em",padding:"12px 0 4px"},children:T.nav.products}),V.map($=>n.jsxs("button",{onClick:()=>_($.key),style:{display:"flex",alignItems:"center",gap:10,width:"100%",textAlign:"left",padding:"12px 8px",background:"none",border:"none",color:w.textLight,fontSize:15,cursor:"pointer",borderRadius:8},children:[n.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:$.color,flexShrink:0}}),$.label]},$.key)),n.jsx("div",{style:{borderTop:`1px solid ${w.borderLight}`,margin:"8px 0"}}),n.jsx("button",{onClick:()=>_("stack"),style:{...D("stack"),fontSize:16,padding:"14px 0",textAlign:"left",width:"100%"},children:T.nav.technology}),n.jsx("button",{onClick:()=>_("cases"),style:{...D("cases"),fontSize:16,padding:"14px 0",textAlign:"left",width:"100%"},children:T.nav.cases}),n.jsx("button",{onClick:()=>_("conteudos"),style:{...D("conteudos"),fontSize:16,padding:"14px 0",textAlign:"left",width:"100%"},children:T.nav.content}),n.jsx("button",{onClick:()=>_("sobre"),style:{...D("sobre"),fontSize:16,padding:"14px 0",textAlign:"left",width:"100%"},children:T.nav.about}),n.jsx("div",{style:{marginTop:16,marginBottom:8},children:n.jsx(pt,{onClick:()=>_("contato"),style:{width:"100%",textAlign:"center"},children:T.nav.contact})}),n.jsx(qf,{mobile:!0,lang:u,setLang:s})]})]})}function c1({setPage:r,lang:c}){const u=(Te[c]||Te["pt-BR"]).footer,s=(Te[c]||Te["pt-BR"]).products,p=(Te[c]||Te["pt-BR"]).nav,m=h=>{r(h),window.scrollTo({top:0,behavior:"smooth"})},g={color:"rgba(242,244,248,0.4)",fontSize:13,cursor:"pointer",background:"none",border:"none",display:"block",lineHeight:2.4,transition:"color 0.2s"};return n.jsxs("footer",{className:"site-footer",style:{background:w.footerBg,padding:"80px 48px 40px",borderTop:`1px solid ${w.borderLight}`},children:[n.jsxs("div",{className:"site-footer-main",style:{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:48},children:[n.jsxs("div",{className:"site-footer-brand",children:[n.jsx("div",{style:{marginBottom:20},children:n.jsx(mm,{height:30})}),n.jsx("p",{style:{fontSize:13,color:"rgba(242,244,248,0.35)",lineHeight:1.7,maxWidth:260},children:u.tagline})]}),n.jsxs("div",{className:"site-footer-products",children:[n.jsx("h4",{style:{color:"rgba(242,244,248,0.6)",fontSize:11,fontWeight:600,marginBottom:16,textTransform:"uppercase",letterSpacing:"0.08em"},children:u.productsLabel}),[["beneficios"],["frotas"],["banking"],["despesas"],["antecipacao"],["sob-demanda"],["sentinel"]].map(([h])=>n.jsxs("button",{style:{...g,display:"flex",alignItems:"center",gap:8},onClick:()=>m(h),children:[n.jsx(el,{productKey:h,size:18}),s[h]?.name||h]},h))]}),n.jsxs("div",{className:"site-footer-company",children:[n.jsx("h4",{style:{color:"rgba(242,244,248,0.6)",fontSize:11,fontWeight:600,marginBottom:16,textTransform:"uppercase",letterSpacing:"0.08em"},children:u.companyLabel}),[["sobre",p.about],["cases","Cases"],["stack",p.technology],["conteudos",p.content],["contato",u.contactLabel]].map(([h,x])=>n.jsx("button",{style:g,onClick:()=>m(h),children:x},h))]}),n.jsxs("div",{className:"site-footer-contact",children:[n.jsx("h4",{style:{color:"rgba(242,244,248,0.6)",fontSize:11,fontWeight:600,marginBottom:16,textTransform:"uppercase",letterSpacing:"0.08em"},children:u.contactLabel}),n.jsx("a",{href:"mailto:contato@wearejust.it",style:{...g,textDecoration:"none"},children:"contato@wearejust.it"}),n.jsxs("span",{style:{...g,cursor:"default",lineHeight:1.6,marginBottom:8},children:["Condomínio Praça Capital",`
`,"Av. José Rocha Bomfim, 214 - Edifício Madri",`
`,"Campinas - SP"]}),n.jsxs("span",{style:{...g,cursor:"default",lineHeight:1.6,marginBottom:10},children:["Cubo Itaú",`
`,"Alameda Vicente Pinzón, 54 - Vila Olímpia",`
`,"São Paulo - SP"]}),n.jsx("a",{href:"https://www.linkedin.com/company/wearejust-it",target:"_blank",rel:"noopener noreferrer",style:{...g,textDecoration:"none"},children:"LinkedIn →"})]})]}),n.jsxs("div",{className:"site-footer-bottom",style:{maxWidth:1200,margin:"40px auto 0",paddingTop:24,borderTop:"1px solid rgba(255,255,255,0.04)"},children:[n.jsxs("div",{className:"site-footer-partners",style:{display:"flex",gap:48,marginBottom:24,flexWrap:"wrap"},children:[n.jsxs("div",{className:"site-footer-partner-group",children:[n.jsx("p",{style:{fontSize:10,color:"rgba(242,244,248,0.2)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10,fontWeight:600},children:u.ecosystem}),n.jsxs("div",{className:"site-footer-partner-logos",style:{display:"flex",gap:20,alignItems:"center"},children:[n.jsx("img",{src:"/logos/cubo-itau.png",alt:"Cubo Itaú",style:{height:24,width:"auto",opacity:.2}}),n.jsx("img",{src:"/logos/abfintechs.png",alt:"ABFintechs",style:{height:16,width:"auto",opacity:.2}}),n.jsx("img",{src:"/logos/abstartups.png",alt:"ABStartups",style:{height:18,width:"auto",opacity:.2,filter:"brightness(0) invert(1)"}}),n.jsx("img",{src:"/logos/finscale.svg",alt:"Finscale",style:{height:14,width:"auto",opacity:.2}})]})]}),n.jsxs("div",{className:"site-footer-partner-group",children:[n.jsx("p",{style:{fontSize:10,color:"rgba(242,244,248,0.2)",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:10,fontWeight:600},children:u.techPartners}),n.jsxs("div",{className:"site-footer-partner-logos",style:{display:"flex",gap:20,alignItems:"center"},children:[n.jsx("img",{src:"/logos/aws-partner.png",alt:"AWS",style:{height:20,width:"auto",opacity:.2,filter:"brightness(0) invert(1)"}}),n.jsx("img",{src:"/logos/swap.svg",alt:"Swap",style:{height:16,width:"auto",opacity:.2,filter:"invert(1)"}}),n.jsx("img",{src:"/logos/evertec.svg",alt:"Evertec",style:{height:16,width:"auto",opacity:.2}}),n.jsx("img",{src:"/logos/fiserv.png",alt:"Fiserv",style:{height:16,width:"auto",opacity:.2,filter:"brightness(0) invert(1)"}}),n.jsx("img",{src:"/logos/linx.png",alt:"Linx",style:{height:16,width:"auto",opacity:.2,filter:"brightness(0) invert(1)"}})]})]})]}),n.jsx("p",{style:{fontSize:11,color:"rgba(242,244,248,0.18)",lineHeight:1.7,marginBottom:24},children:u.legal}),n.jsxs("div",{className:"site-footer-bottom-row",style:{display:"flex",justifyContent:"space-between",gap:24,alignItems:"center",flexWrap:"wrap"},children:[n.jsx("p",{style:{fontSize:12,color:"rgba(242,244,248,0.2)"},children:u.rights}),n.jsx("button",{onClick:()=>m("privacidade"),style:{fontSize:12,color:"rgba(242,244,248,0.35)",background:"none",border:"none",cursor:"pointer",padding:0,textDecoration:"none"},onMouseEnter:h=>{h.currentTarget.style.color=w.textLight},onMouseLeave:h=>{h.currentTarget.style.color="rgba(242,244,248,0.35)"},children:u.privacy})]})]})]})}const d1={},gc=d1||{},Zn=gc.VITE_GA4_ID||"",u1=gc.VITE_PLAUSIBLE_DOMAIN||"",oc=gc.VITE_PLAUSIBLE_SRC||"https://plausible.io/js/pa-tnQg-2tE0DrOZj9nGuskh.js",p1=["chatgpt.com","chat.openai.com","perplexity.ai","claude.ai","gemini.google.com","copilot.microsoft.com","you.com","phind.com"];let Hf=!1,Wf=!1,Gf=!1;function pi(){return typeof window<"u"&&typeof document<"u"}function Yf(r,c){if(!pi()||document.getElementById(r))return;const u=document.createElement("script");u.id=r,Object.entries(c).forEach(([s,p])=>{p===!0?u.setAttribute(s,""):p&&u.setAttribute(s,p)}),document.head.appendChild(u)}function jm(r){return!pi()||!r?!1:Array.from(document.scripts).some(c=>c.src===r)}function f1(){window.plausible=window.plausible||function(){window.plausible.q=window.plausible.q||[],window.plausible.q.push(arguments)},window.plausible.init=window.plausible.init||function(c){window.plausible.o=c||{}}}function Sm(r){return r||(pi()?`${window.location.pathname}${window.location.search}${window.location.hash}`:"/")}function m1(r={}){return Object.fromEntries(Object.entries(r).filter(([,c])=>c!=null&&c!==""))}function h1(){!pi()||Hf||(Hf=!0,f1(),window.plausible.init(),jm(oc)||Yf("plausible-script",{defer:!0,"data-domain":u1||void 0,src:oc}),Zn&&(window.dataLayer=window.dataLayer||[],window.gtag=window.gtag||function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",Zn,{send_page_view:!1}),Yf("ga4-script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${Zn}`})))}function Qt(r,c={}){if(!pi())return;const u=m1(c);typeof window.plausible=="function"&&window.plausible(r,{props:u}),typeof window.gtag=="function"&&window.gtag("event",r,u)}function g1(r,c){if(!pi())return;const u=Sm(r),s=`${window.location.origin}${u}`,p=document.title;typeof window.plausible=="function"&&(jm(oc)&&!Gf?Gf=!0:window.plausible("pageview",{u:s})),typeof window.gtag=="function"&&Zn&&window.gtag("config",Zn,{page_path:u,page_location:s,page_title:p})}function x1(r){if(!pi()||Wf||!document.referrer)return;let c;try{c=new URL(document.referrer)}catch{return}const u=p1.find(s=>c.hostname.includes(s));u&&(Wf=!0,Qt("llm_referral",{source:u,referrer:document.referrer,landing_path:Sm(r)}))}function $f({setPage:r,lang:c}){const u=h=>{r(h),window.scrollTo({top:0,behavior:"smooth"})},s=(Te[c]||Te["pt-BR"]).home,p=(Te[c]||Te["pt-BR"]).products,m=c==="en"?{line1:"Your fintech.",line2:"Ready to",line3:"operate in",line4:"weeks,",line5:"not years."}:{line1:"Sua fintech.",line2:"Pronta para",line3:"operar em",line4:"semanas,",line5:"não anos."},g=c==="en"?[["01","Weeks, not years.","A stack that is 70% to 80% ready and already running in production. You bring the brand, journey and rules. Go live in weeks, not years."],["02","Freedom by design.","Multi-provider architecture. Change provider, BaaS partner or business rule without rebuilding the product."],["03","Your product. Not ours.","We design the journey, rules and visual layer around your business logic. The code is ours; the product is yours."]]:[["01","Semanas, não anos.","Stack com 70 a 80% pronta e em produção. Você entra com marca, jornada e regras. Go-live em semanas, não anos."],["02","Liberdade por design.","Arquitetura multi-provider. Troque de provedor, BaaS ou regra de negócio, sem reescrever o produto."],["03","Seu produto. Não o nosso.","Desenhamos jornada, regras e visual a partir da sua lógica de negócio. O código é nosso; o produto é seu."]];return n.jsxs("div",{children:[n.jsxs("section",{className:"section-hero",style:{background:`linear-gradient(135deg, ${w.primary} 54%, #263450 100%)`,borderBottom:`1px solid ${w.borderLight}`,padding:"140px 48px 80px",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:500,height:500,background:"radial-gradient(circle, rgba(108,92,231,0.07), transparent 70%)",borderRadius:"50%",filter:"blur(80px)"}}),n.jsx("div",{style:{position:"absolute",bottom:"10%",left:"5%",width:400,height:400,background:"radial-gradient(circle, rgba(244,85,70,0.05), transparent 70%)",borderRadius:"50%",filter:"blur(60px)"}}),n.jsxs("div",{className:"hero-grid",style:{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,alignItems:"center",position:"relative",zIndex:2},children:[n.jsxs("div",{children:[n.jsx(q,{children:n.jsx("div",{className:"hero-eyebrow",children:n.jsx(Ht,{children:s.heroTag})})}),n.jsx(q,{delay:.1,children:n.jsxs("h1",{className:"hero-title",style:{fontSize:70,fontWeight:800,color:w.textLight,lineHeight:1.06,letterSpacing:"-0.035em",margin:"20px 0"},children:[n.jsxs("span",{className:"hero-title-desktop",children:[s.heroLine1,n.jsx("br",{}),s.heroLine2,n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:s.heroLine3})]}),n.jsxs("span",{className:"hero-title-mobile","aria-hidden":"true",children:[m.line1,n.jsx("br",{}),m.line2,n.jsx("br",{}),n.jsxs("span",{children:[m.line3.split(" ")[0]," "]}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:m.line3.split(" ").slice(1).join(" ")}),n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:m.line4}),n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:m.line5})]})]})}),n.jsxs(q,{delay:.25,children:[n.jsx("p",{style:{fontSize:18,color:w.textMutedLight,lineHeight:1.6,maxWidth:480,marginBottom:36},children:s.heroSubtitle}),n.jsxs("div",{className:"flow-steps-row",style:{display:"flex",alignItems:"center",gap:0,marginBottom:36,flexWrap:"wrap"},children:[[{num:"1",label:s.step1},{num:"2",label:s.step2}].map((h,x)=>n.jsxs(Zt.Fragment,{children:[x>0&&n.jsx("div",{className:"flow-arrow-icon",style:{display:"flex",alignItems:"center",padding:"0 6px",color:"rgba(242,244,248,0.15)"},children:n.jsx("svg",{width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",children:n.jsx("path",{d:"M1 7h20M17 1l5 6-5 6",stroke:"rgba(242,244,248,0.2)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsxs("div",{className:"flow-step-item",style:{display:"flex",alignItems:"center",gap:10,padding:"8px 14px",borderRadius:24,background:"transparent",border:"1px solid rgba(255,255,255,0.14)"},children:[n.jsx("span",{className:"step-num-box",style:{width:18,height:18,borderRadius:"50%",background:"transparent",border:"1px solid rgba(255,255,255,0.14)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:600,color:"rgba(242,244,248,0.68)",fontFamily:"ui-monospace, monospace"},children:h.num}),n.jsx("span",{className:"step-label-text",style:{fontSize:13,fontWeight:500,color:"rgba(242,244,248,0.68)",letterSpacing:"0.01em"},children:h.label})]})]},h.label)),n.jsx("div",{className:"flow-arrow-icon",style:{display:"flex",alignItems:"center",padding:"0 6px",color:"rgba(242,244,248,0.15)"},children:n.jsx("svg",{width:"24",height:"14",viewBox:"0 0 24 14",fill:"none",children:n.jsx("path",{d:"M1 7h20M17 1l5 6-5 6",stroke:"rgba(242,244,248,0.2)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsxs("div",{className:"flow-step-lance",style:{display:"flex",alignItems:"center",gap:10,padding:"8px 14px",borderRadius:24,background:"rgba(244,85,70,0.06)",border:`1px solid ${w.cta}`,boxShadow:"none",cursor:"pointer",position:"relative",overflow:"hidden"},onMouseEnter:()=>{const h=document.getElementById("orbitalWrapper");h&&h.classList.add("lance-active")},onMouseLeave:()=>{const h=document.getElementById("orbitalWrapper");h&&h.classList.remove("lance-active")},children:[n.jsx("span",{className:"step-num-box",style:{width:18,height:18,borderRadius:"50%",background:w.cta,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:600,color:"#fff",fontFamily:"ui-monospace, monospace"},children:"3"}),n.jsx("span",{className:"step-label-text",style:{fontSize:13,fontWeight:500,color:w.textLight,letterSpacing:"0.01em",position:"relative",zIndex:1},children:s.step3})]})]})]}),n.jsx(q,{delay:.4,children:n.jsxs("div",{className:"hero-cta-row",style:{display:"flex",gap:12},children:[n.jsx(pt,{onClick:()=>u("contato"),children:s.cta1}),n.jsx(pt,{primary:!1,onClick:()=>u("cases"),children:s.cta2})]})})]}),n.jsx(q,{delay:.2,direction:"right",children:n.jsx(Hx,{trProd:p})})]})]}),n.jsx("section",{className:"section-social-proof",style:{background:w.primary,borderTop:`1px solid ${w.borderLight}`,borderBottom:`1px solid ${w.borderLight}`,padding:"28px 48px"},children:n.jsx(q,{children:n.jsxs("div",{className:"social-proof-bar",style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:500,color:"rgba(242,244,248,0.25)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:20},children:s.ecosystemLabel}),n.jsxs("div",{className:"social-logos",style:{display:"flex",gap:40,alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[n.jsx("img",{className:"partner-logo",src:"/logos/finscale.svg",alt:"Finscale",style:{height:28,width:"auto",opacity:.3,transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/abfintechs.png",alt:"ABFintechs",style:{height:32,width:"auto",opacity:.3,transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/abstartups.png",alt:"ABStartups",style:{height:38,width:"auto",opacity:.55,filter:"brightness(0) invert(1)",transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/cubo-itau.png",alt:"Cubo Itaú",style:{height:48,width:"auto",opacity:.3,transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/aws-partner.png",alt:"AWS Partner",style:{height:42,width:"auto",opacity:.55,filter:"brightness(0) invert(1)",transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/fiserv.png",alt:"Fiserv",style:{height:32,width:"auto",opacity:.55,filter:"brightness(0) invert(1)",transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/linx.png",alt:"Linx",style:{height:34,width:"auto",opacity:.55,filter:"brightness(0) invert(1)",transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/swap.svg",alt:"Swap",style:{height:32,width:"auto",opacity:.3,filter:"invert(1)",transition:"opacity 0.3s"}}),n.jsx("img",{className:"partner-logo",src:"/logos/evertec.svg",alt:"Evertec",style:{height:32,width:"auto",opacity:.3,transition:"opacity 0.3s"}})]})]})})}),n.jsx("section",{className:"section-why-just",style:{background:w.primary,padding:"120px 48px",borderBottom:`1px solid ${w.borderLight}`},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx(q,{children:n.jsxs("div",{style:{marginBottom:72},children:[n.jsx("div",{style:{marginBottom:28},children:n.jsx(Ht,{children:s.deparaTag})}),n.jsxs("h2",{className:"why-just-title",style:{fontSize:60,fontWeight:800,lineHeight:1.06,letterSpacing:"-0.035em",color:w.textLight,maxWidth:980},children:[c==="en"?"What changes":"O que muda",n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:c==="en"?"when you build with us.":"operando com a gente."})]})]})}),n.jsx("div",{className:"just-pillars-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",borderTop:`1px solid ${w.borderLight}`,borderBottom:`1px solid ${w.borderLight}`},children:g.map(([h,x,y],T)=>n.jsx(q,{delay:T*.08,children:n.jsxs("div",{className:"just-pillar",style:{minHeight:300,padding:"36px 28px 40px",borderRight:T<g.length-1?`1px solid ${w.borderLight}`:"none",position:"relative"},children:[n.jsxs("div",{style:{fontFamily:"ui-monospace, monospace",fontSize:12,color:w.cta,letterSpacing:"0.1em",marginBottom:42},children:["§ ",h]}),n.jsx("h3",{style:{fontSize:36,lineHeight:1.05,letterSpacing:"-0.035em",color:w.textLight,fontWeight:800,marginBottom:28},children:x}),n.jsx("p",{style:{fontSize:16,lineHeight:1.6,color:"rgba(242,244,248,0.68)",maxWidth:360},children:y})]})},h))})]})}),n.jsx("section",{className:"section-products",style:{background:w.primary,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx(nt,{tag:s.productsTag,title:s.productsTitle,subtitle:s.productsSubtitle}),n.jsx("div",{className:"bento-grid",children:[{key:"beneficios",size:"wide",label:"JUST Benefits",title:`Benefícios flexíveis com
arranjo customizável`,badge:"Arranjo aberto, fechado ou híbrido",color:Ce.beneficios.accent,colorLight:"#A29BFE"},{key:"frotas",size:"narrow",label:"JUST Fleet",title:`Controle financeiro
por veículo`,badge:"Abastecimento + pedágio com integrações nativas",color:Ce.frotas.accent,colorLight:"#55EFC4"},{key:"banking",size:"narrow",label:"JUST Banking",title:`Conta, cartão e PIX
com sua marca`,badge:"Conta + cartão + PIX sobre BaaS regulado",color:Ce.banking.accent,colorLight:"#74B9FF"},{key:"despesas",size:"wide",label:"JUST Expense",title:`Cartões corporativos com
políticas inteligentes`,badge:"Políticas inteligentes + conciliação automática",color:Ce.despesas.accent,colorLight:"#FAB1A0"},{key:"antecipacao",size:"wide",label:"JUST Credit",title:`Produtos de crédito
sob medida`,badge:"Private label, antecipação e recebíveis",color:Ce.antecipacao.accent,colorLight:"#FFEAA7"},{key:"sob-demanda",size:"narrow",label:"JUST Custom",title:`Produto sob medida?
Construimos.`,badge:"Sob medida",color:Ce["sob-demanda"].accent,colorLight:"#B2BEC3"}].map((h,x)=>n.jsx(q,{delay:x*.06,children:n.jsxs("div",{className:"bento-card","data-size":h.size,onClick:()=>u(h.key),style:{cursor:"pointer"},children:[n.jsxs("div",{style:{position:"relative",flex:1,minHeight:200,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",padding:32,background:`linear-gradient(145deg, ${h.color}0F, ${h.color}05)`},children:[n.jsx("div",{className:"bento-icon-card",style:{position:"absolute",zIndex:2,top:20,right:h.size==="wide"?24:20,width:44,height:44,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(145deg, ${h.color}26, rgba(10,12,31,0.9))`,border:`1px solid ${h.color}4D`,boxShadow:`0 0 16px ${h.color}1A`,backdropFilter:"blur(4px)",transition:"transform 0.3s ease, box-shadow 0.3s ease"},children:n.jsx(el,{productKey:h.key,size:24})}),n.jsxs("div",{style:{position:"relative",zIndex:1,width:"100%",maxWidth:h.size==="wide"?480:240,aspectRatio:h.size==="wide"?"2/1":"16/10",borderRadius:10,border:"1px solid rgba(255,255,255,0.06)",background:"rgba(0,0,0,0.35)",padding:14,display:"flex",flexDirection:"column",gap:8,backdropFilter:"blur(8px)"},children:[n.jsx("div",{style:{display:"flex",gap:4,marginBottom:4},children:[1,2,3].map(y=>n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:h.color,opacity:.4}},y))}),n.jsx("div",{style:{height:5,width:h.size==="wide"?"45%":"55%",borderRadius:3,background:h.color,opacity:.15}}),h.size==="wide"?n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:6,flex:1},children:[n.jsx("div",{style:{flex:1,borderRadius:6,background:h.color,opacity:.08}}),n.jsx("div",{style:{flex:1.5,borderRadius:6,background:h.color,opacity:.08}})]}),n.jsx("div",{style:{height:5,width:"50%",borderRadius:3,background:h.color,opacity:.15}})]}):n.jsx("div",{style:{flex:1,borderRadius:6,background:h.color,opacity:.08}})]}),n.jsxs("div",{style:{position:"absolute",zIndex:2,bottom:16,left:h.size==="wide"?20:16,padding:"6px 12px",borderRadius:8,fontSize:11,fontWeight:600,background:"rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(4px)",whiteSpace:"nowrap",color:h.colorLight},children:[n.jsx("span",{style:{opacity:.5},children:"●"})," ",h.badge]})]}),n.jsxs("div",{style:{padding:"24px 28px 28px",display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:7,fontSize:12,fontWeight:600,marginBottom:10,color:h.color,opacity:.7},children:[n.jsx("span",{style:{width:7,height:7,borderRadius:"50%",background:h.color}}),h.label]}),n.jsx("div",{style:{fontSize:h.size==="wide"?22:20,fontWeight:700,color:"#f2f4f8",lineHeight:1.3,letterSpacing:"-0.01em",whiteSpace:"pre-line"},children:h.title})]}),n.jsx("div",{className:"bento-arrow-btn",style:{width:40,height:40,borderRadius:"50%",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.3s ease"},children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:n.jsx("path",{d:"M3 8h10M10 5l3 3-3 3",stroke:"rgba(255,255,255,0.35)",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})]})]})},h.key))})]})}),n.jsx("section",{className:"section-cards",style:{background:w.darkAlt,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx(nt,{tag:s.cardsTag,title:n.jsxs(n.Fragment,{children:[s.cardsTitle,n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:s.cardsGradient})]}),subtitle:s.cardsSubtitle,center:!0}),n.jsxs("div",{className:"cards-grid",children:[n.jsx(q,{children:n.jsxs("div",{className:"card-option",children:[n.jsx("div",{className:"card-visual",style:{background:"linear-gradient(160deg, rgba(108,92,231,0.04), transparent)"},children:n.jsxs("div",{className:"physical-card bandeirado",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsx("div",{className:"card-chip-gold",children:n.jsx("div",{className:"chip-lines"})}),n.jsx("svg",{width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",style:{opacity:.3},children:n.jsx("path",{d:"M2 2h5v4H2zM8 2h5v4H8zM2 8h5v4H2zM8 8h5v4H8z",stroke:"rgba(255,255,255,0.5)",strokeWidth:"0.8"})})]}),n.jsx("div",{className:"card-number",children:"•••• •••• •••• 4832"}),n.jsxs("div",{className:"card-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{className:"card-holder",children:"Titular"}),n.jsx("div",{className:"card-holder-name",children:"MARIA C SANTOS"})]}),n.jsxs("div",{className:"mc-logo",children:[n.jsx("div",{className:"mc-circle red"}),n.jsx("div",{className:"mc-circle yellow"})]})]})]})}),n.jsxs("div",{className:"card-info",children:[n.jsxs("div",{className:"card-type-label",style:{color:"#6C5CE7"},children:[n.jsx("span",{className:"dot",style:{background:"#6C5CE7"}}),s.cardsOpenLabel]}),n.jsx("h3",{children:s.cardsOpenTitle}),n.jsx("ul",{className:"features-list",children:s.cardsOpenFeatures.map((h,x)=>n.jsxs("li",{children:[n.jsx("span",{className:"check",style:{background:"rgba(108,92,231,0.1)",border:"1px solid rgba(108,92,231,0.25)"},children:n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M2.5 5l2 2 3.5-3.5",stroke:"#6C5CE7",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),h]},x))})]})]})}),n.jsxs("div",{className:"center-divider",children:[n.jsx("div",{className:"divider-line"}),n.jsx("div",{className:"divider-badge",children:s.cardsOr}),n.jsx("div",{className:"divider-line"})]}),n.jsx(q,{delay:.1,children:n.jsxs("div",{className:"card-option",children:[n.jsx("div",{className:"card-visual",style:{background:"linear-gradient(160deg, rgba(0,184,148,0.04), transparent)"},children:n.jsxs("div",{className:"physical-card privatelabel",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsx("div",{className:"card-chip-gold",children:n.jsx("div",{className:"chip-lines"})}),n.jsxs("div",{className:"pl-brand",children:[n.jsx("div",{className:"pl-brand-icon",children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z",stroke:"#00B894",strokeWidth:"1.5",fill:"none",opacity:"0.8",strokeLinejoin:"round"}),n.jsx("circle",{cx:"8",cy:"8",r:"2",stroke:"#55EFC4",strokeWidth:"1",opacity:"0.6"})]})}),n.jsx("span",{className:"pl-brand-text",children:"SuaMarca"})]})]}),n.jsx("div",{className:"card-number",children:"•••• •••• •••• 7291"}),n.jsxs("div",{className:"card-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{className:"card-holder",children:"Titular"}),n.jsx("div",{className:"card-holder-name",children:"JOAO P OLIVEIRA"})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",gap:4},children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:n.jsx("path",{d:"M10 3L3 7v6l7 4 7-4V7l-7-4z",stroke:"rgba(0,184,148,0.4)",strokeWidth:"1.3",fill:"none",strokeLinejoin:"round"})})})]})]})}),n.jsxs("div",{className:"card-info",children:[n.jsxs("div",{className:"card-type-label",style:{color:"#00B894"},children:[n.jsx("span",{className:"dot",style:{background:"#00B894"}}),s.cardsClosedLabel]}),n.jsx("h3",{children:s.cardsClosedTitle}),n.jsx("ul",{className:"features-list",children:s.cardsClosedFeatures.map((h,x)=>n.jsxs("li",{children:[n.jsx("span",{className:"check",style:{background:"rgba(0,184,148,0.1)",border:"1px solid rgba(0,184,148,0.25)"},children:n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M2.5 5l2 2 3.5-3.5",stroke:"#00B894",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),h]},x))})]})]})})]}),n.jsx(q,{delay:.15,children:n.jsx("div",{className:"hybrid-section",children:n.jsx("div",{className:"hybrid-inner",children:n.jsxs("div",{className:"hybrid-layout",children:[n.jsxs("div",{className:"hybrid-content",children:[n.jsxs("div",{className:"hybrid-exclusive-tag",children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:n.jsx("path",{d:"M7 1l1.76 3.57L13 5.27l-3 2.93.71 4.13L7 10.27l-3.71 2.06.71-4.13-3-2.93 4.24-.7L7 1z",fill:"#f45546",opacity:"0.9"})}),s.cardsPioneer]}),n.jsxs("h3",{className:"hybrid-title",children:[s.cardsHybridTitle.split(`
`).map((h,x)=>n.jsxs(Zt.Fragment,{children:[h,x===0&&n.jsx("br",{})]},x)),n.jsx("span",{className:"gradient-text",children:s.cardsHybridGradient})]}),n.jsx("p",{className:"hybrid-description",children:s.cardsHybridDesc}),n.jsx("div",{className:"hybrid-features",children:s.hybridFeatures.map((h,x)=>n.jsxs("div",{className:"hybrid-feature",children:[n.jsxs("div",{className:`hybrid-feature-icon ${["purple","green","red"][x]}`,children:[x===0&&n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M2 6h8M6 2v8",stroke:"#6C5CE7",strokeWidth:"1.5",strokeLinecap:"round"})}),x===1&&n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M2 6h8M6 2v8",stroke:"#00B894",strokeWidth:"1.5",strokeLinecap:"round"})}),x===2&&n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M3 3l6 6M9 3l-6 6",stroke:"#f45546",strokeWidth:"1.5",strokeLinecap:"round"})})]}),n.jsxs("span",{className:"hybrid-feature-text",children:[n.jsx("strong",{children:h.bold}),h.text]})]},x))})]}),n.jsx("div",{className:"hybrid-visual",children:n.jsxs("div",{className:"hybrid-card-stack",children:[n.jsxs("div",{className:"physical-card bandeirado",children:[n.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:n.jsx("div",{className:"card-chip-gold",children:n.jsx("div",{className:"chip-lines"})})}),n.jsx("div",{className:"card-number",children:"•••• •••• •••• 4832"}),n.jsxs("div",{className:"card-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{className:"card-holder",children:"Titular"}),n.jsx("div",{className:"card-holder-name",children:"MARIA C SANTOS"})]}),n.jsxs("div",{className:"mc-logo",children:[n.jsx("div",{className:"mc-circle red"}),n.jsx("div",{className:"mc-circle yellow"})]})]})]}),n.jsxs("div",{className:"physical-card privatelabel",children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsx("div",{className:"card-chip-gold",children:n.jsx("div",{className:"chip-lines"})}),n.jsxs("div",{className:"pl-brand",children:[n.jsx("div",{className:"pl-brand-icon",children:n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[n.jsx("path",{d:"M8 2L2 5.5v5L8 14l6-3.5v-5L8 2z",stroke:"#00B894",strokeWidth:"1.5",fill:"none",opacity:"0.8",strokeLinejoin:"round"}),n.jsx("circle",{cx:"8",cy:"8",r:"2",stroke:"#55EFC4",strokeWidth:"1",opacity:"0.6"})]})}),n.jsx("span",{className:"pl-brand-text",children:"SuaMarca"})]})]}),n.jsx("div",{className:"card-number",children:"•••• •••• •••• 7291"}),n.jsxs("div",{className:"card-bottom",children:[n.jsxs("div",{children:[n.jsx("div",{className:"card-holder",children:"Titular"}),n.jsx("div",{className:"card-holder-name",children:"JOAO P OLIVEIRA"})]}),n.jsx("div",{style:{display:"flex",alignItems:"center"},children:n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:n.jsx("path",{d:"M10 3L3 7v6l7 4 7-4V7l-7-4z",stroke:"rgba(0,184,148,0.4)",strokeWidth:"1.3",fill:"none",strokeLinejoin:"round"})})})]})]}),n.jsx("div",{className:"hybrid-merge-badge",children:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:[n.jsx("path",{d:"M7 11h8",stroke:"#f45546",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M11 7v8",stroke:"#f45546",strokeWidth:"2",strokeLinecap:"round"})]})})]})})]})})})})]})}),n.jsx("section",{className:"section-process",style:{background:w.darkAlt,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:72},children:[n.jsx(q,{children:n.jsx(Ht,{children:s.processTag})}),n.jsx(q,{delay:.1,children:n.jsxs("h2",{style:{fontSize:44,fontWeight:700,lineHeight:1.15,letterSpacing:"-0.025em",color:w.textLight},children:[s.processTitle,n.jsx("br",{}),n.jsx("span",{style:{color:"rgba(242,244,248,0.68)"},children:s.processGradient})]})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,lineHeight:1.6,marginTop:16,maxWidth:560,marginLeft:"auto",marginRight:"auto"},children:s.processSubtitle})})]}),n.jsx(q,{delay:.15,children:n.jsxs("div",{className:"process-timeline",children:[n.jsxs("div",{className:"process-step",children:[n.jsx("div",{className:"step-indicator",children:n.jsx("div",{className:"step-number",style:{background:"#1a1120",border:"1.5px solid rgba(244,85,70,0.35)",color:"#f45546",boxShadow:"inset 0 0 12px rgba(244,85,70,0.08)"},children:"01"})}),n.jsxs("div",{className:"step-content",children:[n.jsx("h3",{className:"step-title",children:s.process1Title}),n.jsx("p",{className:"step-desc",children:s.process1Desc}),n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-tag",style:{background:"rgba(244,85,70,0.06)",color:"rgba(244,85,70,0.6)"},children:"Modelo de negocio"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(244,85,70,0.06)",color:"rgba(244,85,70,0.6)"},children:"Requisitos técnicos"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(244,85,70,0.06)",color:"rgba(244,85,70,0.6)"},children:"Cronograma"})]})]}),n.jsx("div",{className:"step-visual",style:{background:"linear-gradient(160deg, rgba(244,85,70,0.03), transparent)"},children:n.jsxs("div",{className:"discovery-visual",children:[n.jsxs("div",{className:"disc-question",children:[n.jsx("div",{className:"disc-dot",style:{background:"rgba(244,85,70,0.5)"}}),n.jsx("div",{className:"disc-bar",style:{width:"65%",background:"#f45546"}})]}),n.jsxs("div",{className:"disc-answer",children:[n.jsx("div",{className:"disc-pill",style:{background:"rgba(244,85,70,0.08)",border:"1px solid rgba(244,85,70,0.2)",color:"rgba(244,85,70,0.7)"},children:"Benefícios"}),n.jsx("div",{className:"disc-pill",style:{background:"rgba(108,92,231,0.08)",border:"1px solid rgba(108,92,231,0.2)",color:"rgba(108,92,231,0.7)"},children:"Híbrido"})]}),n.jsxs("div",{className:"disc-question",children:[n.jsx("div",{className:"disc-dot",style:{background:"rgba(244,85,70,0.5)"}}),n.jsx("div",{className:"disc-bar",style:{width:"80%",background:"#f45546"}})]}),n.jsxs("div",{className:"disc-answer",children:[n.jsx("div",{className:"disc-pill",style:{background:"rgba(0,184,148,0.08)",border:"1px solid rgba(0,184,148,0.2)",color:"rgba(0,184,148,0.7)"},children:"Swap (BaaS)"}),n.jsx("div",{className:"disc-pill",style:{background:"rgba(0,184,148,0.08)",border:"1px solid rgba(0,184,148,0.2)",color:"rgba(0,184,148,0.7)"},children:"Sitef"})]}),n.jsxs("div",{className:"disc-question",children:[n.jsx("div",{className:"disc-dot",style:{background:"rgba(244,85,70,0.5)"}}),n.jsx("div",{className:"disc-bar",style:{width:"50%",background:"#f45546"}})]})]})})]}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{className:"step-indicator",children:n.jsx("div",{className:"step-number",style:{background:"#120f22",border:"1.5px solid rgba(108,92,231,0.35)",color:"#6C5CE7",boxShadow:"inset 0 0 12px rgba(108,92,231,0.08)"},children:"02"})}),n.jsxs("div",{className:"step-content",children:[n.jsx("h3",{className:"step-title",children:s.process2Title}),n.jsx("p",{className:"step-desc",children:s.process2Desc}),n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-tag",style:{background:"rgba(108,92,231,0.06)",color:"rgba(108,92,231,0.6)"},children:"Modulos ativados"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(108,92,231,0.06)",color:"rgba(108,92,231,0.6)"},children:"Sua marca"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(108,92,231,0.06)",color:"rgba(108,92,231,0.6)"},children:"Regras de negocio"})]})]}),n.jsxs("div",{className:"step-visual",style:{background:"linear-gradient(160deg, rgba(108,92,231,0.03), transparent)"},children:[n.jsxs("div",{className:"arq-visual",children:[n.jsx("div",{className:"arq-block arq-block-ready",children:"Core"}),n.jsx("div",{className:"arq-block arq-block-ready",children:"Cartões"}),n.jsx("div",{className:"arq-block arq-block-ready",children:"Auth"}),n.jsx("div",{className:"arq-block arq-block-ready",children:"Regras"}),n.jsx("div",{className:"arq-block arq-block-config",children:"Custom"}),n.jsx("div",{className:"arq-block arq-block-ready",children:"App"})]}),n.jsxs("div",{className:"arq-progress",children:[n.jsx("div",{className:"arq-bar-bg",children:n.jsx("div",{className:"arq-bar-fill"})}),n.jsx("span",{className:"arq-label",children:"75% pronto"})]})]})]}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{className:"step-indicator",children:n.jsx("div",{className:"step-number",style:{background:"#0c1620",border:"1.5px solid rgba(0,184,148,0.35)",color:"#00B894",boxShadow:"inset 0 0 12px rgba(0,184,148,0.08)"},children:"03"})}),n.jsxs("div",{className:"step-content",children:[n.jsx("h3",{className:"step-title",children:s.process3Title}),n.jsx("p",{className:"step-desc",children:s.process3Desc}),n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-tag",style:{background:"rgba(0,184,148,0.06)",color:"rgba(0,184,148,0.6)"},children:"BaaS conectado"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(0,184,148,0.06)",color:"rgba(0,184,148,0.6)"},children:"Testes E2E"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(0,184,148,0.06)",color:"rgba(0,184,148,0.6)"},children:"Homologação"})]})]}),n.jsx("div",{className:"step-visual",style:{background:"linear-gradient(160deg, rgba(0,184,148,0.03), transparent)"},children:n.jsxs("div",{className:"int-visual",children:[n.jsxs("div",{className:"int-row",children:[n.jsx("div",{className:"int-node int-node-just",children:"JUST Core"}),n.jsx("div",{className:"int-line"}),n.jsx("div",{className:"int-node int-node-provider",children:"Swap"})]}),n.jsxs("div",{className:"int-row",children:[n.jsx("div",{className:"int-node int-node-just",children:"Autorizador"}),n.jsx("div",{className:"int-line"}),n.jsx("div",{className:"int-node int-node-provider",children:"Sitef"})]}),n.jsxs("div",{className:"int-row",children:[n.jsx("div",{className:"int-node int-node-just",children:"Gateway"}),n.jsx("div",{className:"int-line"}),n.jsx("div",{className:"int-node int-node-provider",children:"Rede Compras"})]}),n.jsxs("div",{className:"int-status",children:[n.jsx("div",{className:"int-status-dot"}),n.jsx("span",{className:"int-status-text",children:"3/3 integracoes ativas"})]})]})})]}),n.jsxs("div",{className:"process-step",children:[n.jsx("div",{className:"step-indicator",children:n.jsx("div",{className:"step-number",style:{background:"#0e1820",border:"1.5px solid rgba(39,174,96,0.35)",color:"#27AE60",boxShadow:"inset 0 0 12px rgba(39,174,96,0.08)"},children:"04"})}),n.jsxs("div",{className:"step-content",children:[n.jsx("h3",{className:"step-title",children:s.process4Title}),n.jsx("p",{className:"step-desc",children:s.process4Desc}),n.jsxs("div",{className:"step-details",children:[n.jsx("span",{className:"step-tag",style:{background:"rgba(39,174,96,0.06)",color:"rgba(39,174,96,0.6)"},children:"Monitoramento"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(39,174,96,0.06)",color:"rgba(39,174,96,0.6)"},children:"Suporte"}),n.jsx("span",{className:"step-tag",style:{background:"rgba(39,174,96,0.06)",color:"rgba(39,174,96,0.6)"},children:"Evolução"})]})]}),n.jsx("div",{className:"step-visual",style:{background:"linear-gradient(160deg, rgba(39,174,96,0.03), transparent)"},children:n.jsxs("div",{className:"op-visual",children:[n.jsxs("div",{className:"op-topbar",children:[n.jsx("div",{className:"op-dot",style:{background:"#27AE60"}}),n.jsx("div",{className:"op-dot",style:{background:"rgba(255,255,255,0.15)"}}),n.jsx("div",{className:"op-dot",style:{background:"rgba(255,255,255,0.15)"}})]}),n.jsxs("div",{className:"op-metrics",children:[n.jsxs("div",{className:"op-metric",children:[n.jsx("div",{className:"op-metric-label",children:"TPV mensal"}),n.jsx("div",{className:"op-metric-value",style:{color:"#27AE60"},children:"R$2.4M"})]}),n.jsxs("div",{className:"op-metric",children:[n.jsx("div",{className:"op-metric-label",children:"Uptime"}),n.jsx("div",{className:"op-metric-value",style:{color:"rgba(242,244,248,0.7)"},children:"99.9%"})]})]}),n.jsxs("div",{className:"op-status-bar",children:[n.jsx("div",{className:"op-status-dot"}),n.jsx("span",{className:"op-status-text",children:"Todos os servicos operacionais"})]})]})})]})]})}),n.jsx(q,{delay:.5,children:n.jsxs("div",{className:"process-summary",children:[n.jsxs("div",{className:"summary-item",children:[n.jsx("div",{className:"summary-icon",style:{background:"rgba(244,85,70,0.08)",border:"1px solid rgba(244,85,70,0.15)"},children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[n.jsx("circle",{cx:"9",cy:"9",r:"7",stroke:"#f45546",strokeWidth:"1.5"}),n.jsx("path",{d:"M9 5v4l3 2",stroke:"#f45546",strokeWidth:"1.5",strokeLinecap:"round"})]})}),n.jsxs("div",{className:"summary-text",children:[n.jsx("strong",{children:s.summary1}),s.summary1sub]})]}),n.jsx("div",{className:"summary-divider"}),n.jsxs("div",{className:"summary-item",children:[n.jsx("div",{className:"summary-icon",style:{background:"rgba(0,184,148,0.08)",border:"1px solid rgba(0,184,148,0.15)"},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:n.jsx("path",{d:"M3 9.5l4 4 8-8",stroke:"#00B894",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsxs("div",{className:"summary-text",children:[n.jsx("strong",{children:s.summary2}),s.summary2sub]})]}),n.jsx("div",{className:"summary-divider"}),n.jsxs("div",{className:"summary-item",children:[n.jsx("div",{className:"summary-icon",style:{background:"rgba(108,92,231,0.08)",border:"1px solid rgba(108,92,231,0.15)"},children:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:n.jsx("path",{d:"M9 2v14M2 9h14",stroke:"#6C5CE7",strokeWidth:"1.8",strokeLinecap:"round"})})}),n.jsxs("div",{className:"summary-text",children:[n.jsx("strong",{children:s.summary3}),s.summary3sub]})]})]})})]})}),n.jsx("section",{className:"section-metrics",style:{background:w.primary,padding:"80px 48px",borderTop:"1px solid rgba(255,255,255,0.04)",borderBottom:"1px solid rgba(255,255,255,0.04)"},children:n.jsx(q,{children:n.jsxs("div",{className:"metrics-grid",style:{maxWidth:1e3,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:0},children:[n.jsxs("div",{className:"metric-item",style:{textAlign:"center",padding:"32px 24px",position:"relative"},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,letterSpacing:"-0.03em",color:"rgba(242,244,248,0.85)",lineHeight:1,marginBottom:10},children:[n.jsx("span",{style:{fontSize:24,fontWeight:600,color:"rgba(242,244,248,0.4)",marginRight:2},children:"R$"}),"4",n.jsx("span",{style:{fontSize:24,fontWeight:600,color:"rgba(242,244,248,0.4)",marginLeft:2},children:"bi+"})]}),n.jsx("div",{style:{fontSize:13,fontWeight:500,color:"rgba(242,244,248,0.3)",letterSpacing:"0.03em"},children:s.metricsTPV})]}),n.jsxs("div",{className:"metric-item",style:{textAlign:"center",padding:"32px 24px",position:"relative",borderLeft:"1px solid rgba(255,255,255,0.06)"},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,letterSpacing:"-0.03em",color:"rgba(242,244,248,0.85)",lineHeight:1,marginBottom:10},children:["30",n.jsx("span",{style:{fontSize:24,fontWeight:600,color:"rgba(242,244,248,0.4)",marginLeft:2},children:"M+"})]}),n.jsx("div",{style:{fontSize:13,fontWeight:500,color:"rgba(242,244,248,0.3)",letterSpacing:"0.03em"},children:s.metricsTX})]}),n.jsxs("div",{className:"metric-item",style:{textAlign:"center",padding:"32px 24px",position:"relative",borderLeft:"1px solid rgba(255,255,255,0.06)"},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,letterSpacing:"-0.03em",color:"rgba(242,244,248,0.85)",lineHeight:1,marginBottom:10},children:["500",n.jsx("span",{style:{fontSize:24,fontWeight:600,color:"rgba(242,244,248,0.4)",marginLeft:2},children:"k+"})]}),n.jsx("div",{style:{fontSize:13,fontWeight:500,color:"rgba(242,244,248,0.3)",letterSpacing:"0.03em"},children:s.metricsUsers})]}),n.jsxs("div",{className:"metric-item",style:{textAlign:"center",padding:"32px 24px",position:"relative",borderLeft:"1px solid rgba(255,255,255,0.06)"},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,letterSpacing:"-0.03em",color:"rgba(242,244,248,0.85)",lineHeight:1,marginBottom:10},children:["15",n.jsx("span",{style:{fontSize:24,fontWeight:600,color:"rgba(242,244,248,0.4)",marginLeft:2},children:"+"})]}),n.jsx("div",{style:{fontSize:13,fontWeight:500,color:"rgba(242,244,248,0.3)",letterSpacing:"0.03em"},children:s.metricsClients})]})]})})}),n.jsx("section",{className:"section-cases",style:{background:w.darkAlt,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsxs("div",{style:{textAlign:"center",marginBottom:64},children:[n.jsx(q,{children:n.jsx(Ht,{children:s.casesTag})}),n.jsx(q,{delay:.1,children:n.jsx("h2",{style:{fontSize:44,fontWeight:700,lineHeight:1.15,letterSpacing:"-0.025em",color:w.textLight},children:s.casesTitle})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,lineHeight:1.6,marginTop:16,maxWidth:520,marginLeft:"auto",marginRight:"auto"},children:s.casesSubtitle})})]}),n.jsxs("div",{className:"cases-grid",children:[n.jsx(q,{delay:.1,children:n.jsxs("div",{className:"case-card",children:[n.jsx("div",{className:"case-video",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/rngBWxLvsNw?rel=0&modestbranding=1",title:"eFleet - Case JUST",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),n.jsxs("div",{className:"case-content",children:[n.jsx("div",{className:"case-products",children:n.jsxs("span",{className:"product-badge",style:{background:"rgba(0,184,148,0.08)",color:"#00B894",border:"1px solid rgba(0,184,148,0.15)"},children:[n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("rect",{x:"8",y:"10",width:"20",height:"26",rx:"3",stroke:"#00B894",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("rect",{x:"12",y:"14",width:"12",height:"8",rx:"1.5",stroke:"#55EFC4",strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("path",{d:"M28 16h4a3 3 0 0 1 3 3v10a2 2 0 0 1-2 2h-1",stroke:"#00B894",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.7"}),n.jsx("circle",{cx:"33",cy:"26",r:"2",stroke:"#00B894",strokeWidth:"1.5",fill:"none",opacity:"0.5"}),n.jsx("line",{x1:"8",y1:"36",x2:"28",y2:"36",stroke:"#55EFC4",strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.4"})]}),"Fleet"]})}),n.jsx("p",{className:"case-name",children:"eFleet"}),n.jsx("h3",{className:"case-headline",children:"Gestão de Frota com abastecimento e pagamento de pedágio"}),n.jsxs("div",{className:"case-metrics",children:[n.jsx("span",{className:"case-metric",style:{background:"rgba(0,184,148,0.06)",color:"#00B894"},children:"5+ anos de parceria"}),n.jsx("span",{className:"case-metric",style:{background:"rgba(0,184,148,0.06)",color:"#00B894"},children:"R$250M+ processamento/ano"}),n.jsx("span",{className:"case-metric",style:{background:"rgba(0,184,148,0.06)",color:"#00B894"},children:"10+ módulos integrados"})]})]})]})}),n.jsx(q,{delay:.2,children:n.jsxs("div",{className:"case-card",children:[n.jsx("div",{className:"case-video",children:n.jsx("iframe",{src:"https://www.youtube.com/embed/dr_fzCkw7Z8?rel=0&modestbranding=1",title:"ViasoftPay - Case JUST",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),n.jsxs("div",{className:"case-content",children:[n.jsxs("div",{className:"case-products",children:[n.jsxs("span",{className:"product-badge",style:{background:"rgba(108,92,231,0.08)",color:"#6C5CE7",border:"1px solid rgba(108,92,231,0.15)"},children:[n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("rect",{x:"5",y:"10",width:"34",height:"24",rx:"4",stroke:"#6C5CE7",strokeWidth:"2",fill:"none",opacity:"0.9"}),n.jsx("rect",{x:"10",y:"16",width:"7",height:"5",rx:"1.2",stroke:"#A29BFE",strokeWidth:"1.5",fill:"none",opacity:"0.7"}),n.jsx("line",{x1:"10",y1:"26",x2:"22",y2:"26",stroke:"#A29BFE",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"10",y1:"29",x2:"17",y2:"29",stroke:"#A29BFE",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.35"}),n.jsx("circle",{cx:"33",cy:"27",r:"3",stroke:"#6C5CE7",strokeWidth:"1.5",fill:"none",opacity:"0.6"}),n.jsx("circle",{cx:"30",cy:"27",r:"3",stroke:"#6C5CE7",strokeWidth:"1.5",fill:"none",opacity:"0.4"})]}),"Benefits"]}),n.jsxs("span",{className:"product-badge",style:{background:"rgba(225,112,85,0.08)",color:"#E17055",border:"1px solid rgba(225,112,85,0.15)"},children:[n.jsxs("svg",{viewBox:"0 0 44 44",fill:"none",children:[n.jsx("path",{d:"M10 6h24v32l-4-3-4 3-4-3-4 3-4-3-4 3V6z",stroke:"#E17055",strokeWidth:"2",fill:"none",opacity:"0.9",strokeLinejoin:"round"}),n.jsx("line",{x1:"16",y1:"14",x2:"28",y2:"14",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),n.jsx("line",{x1:"16",y1:"19",x2:"28",y2:"19",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.5"}),n.jsx("line",{x1:"16",y1:"24",x2:"24",y2:"24",stroke:"#FAB1A0",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.4"}),n.jsx("circle",{cx:"28",cy:"24",r:"2",fill:"#E17055",opacity:"0.5"})]}),"Expense"]})]}),n.jsx("p",{className:"case-name",children:"Viasoft Pay"}),n.jsx("h3",{className:"case-headline",children:"Benefícios e Despesas Corporativas com Arranjo Híbrido"}),n.jsxs("div",{className:"case-metrics",children:[n.jsx("span",{className:"case-metric",style:{background:"rgba(108,92,231,0.06)",color:"#6C5CE7"},children:"100k+ usuários"}),n.jsx("span",{className:"case-metric",style:{background:"rgba(108,92,231,0.06)",color:"#6C5CE7"},children:"R$500M+ processamento/ano"}),n.jsx("span",{className:"case-metric",style:{background:"rgba(108,92,231,0.06)",color:"#6C5CE7"},children:"45 dias zero-to-production"})]})]})]})})]})]})}),n.jsxs("section",{className:"section-cta",style:{background:`linear-gradient(160deg, ${w.darkAlt}, ${w.secondary})`,padding:"120px 48px",textAlign:"center",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,height:600,background:"radial-gradient(circle, rgba(244,85,70,0.06), transparent)",borderRadius:"50%",filter:"blur(80px)"}}),n.jsxs("div",{style:{position:"relative",zIndex:2},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:44,fontWeight:700,color:w.textLight,marginBottom:16,letterSpacing:"-0.02em"},children:s.ctaFinalTitle})}),n.jsx(q,{delay:.1,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,maxWidth:480,margin:"0 auto 36px"},children:s.ctaFinalSubtitle})}),n.jsx(q,{delay:.2,children:n.jsx(pt,{onClick:()=>u("contato"),size:"lg",children:s.ctaFinalBtn})})]})]})]})}function b1({setPage:r,lang:c}){const u=m=>{r(m),window.scrollTo({top:0,behavior:"smooth"})},s=(Te[c]||Te["pt-BR"]).sobre,p=s.timeline;return n.jsxs("div",{children:[n.jsx("section",{style:{background:`linear-gradient(160deg, ${w.primary}, ${w.darkAlt}, ${w.secondary})`,padding:"170px 48px 100px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[n.jsx(q,{children:n.jsx(Ht,{children:s.tag})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:48,fontWeight:700,color:w.textLight,lineHeight:1.1,margin:"16px 0"},children:s.h1})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:18,color:w.textMutedLight,lineHeight:1.6},children:s.intro})})]})}),n.jsx("section",{style:{background:w.primary,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:960,margin:"0 auto"},children:[n.jsx(nt,{tag:s.tesesTag,title:s.tesesTitle,center:!0}),n.jsx(q,{children:n.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75,marginBottom:20},children:s.tesesP1}),n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75,marginBottom:20},children:s.tesesP2}),n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75},children:s.tesesP3})]})})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[n.jsx(nt,{tag:s.principiosTag,title:s.principiosTitle,center:!0}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20},children:[{t:s.p1Title,d:s.p1Desc},{t:s.p2Title,d:s.p2Desc},{t:s.p3Title,d:s.p3Desc}].map((m,g)=>n.jsx(q,{delay:g*.08,children:n.jsxs("div",{style:{padding:32,borderRadius:14,background:"rgba(255,255,255,0.025)",border:`1px solid ${w.borderLight}`},children:[n.jsx("h3",{style:{fontSize:17,fontWeight:700,color:w.textLight,marginBottom:10},children:m.t}),n.jsx("p",{style:{fontSize:14,color:w.textMuted,lineHeight:1.6},children:m.d})]})},g))})]})}),n.jsx("section",{style:{background:w.primary,padding:"120px 48px"},children:n.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[n.jsx(nt,{tag:s.trajetoriaTag,title:s.trajetoriaTitle,center:!0}),n.jsxs("div",{style:{position:"relative",paddingLeft:40},children:[n.jsx("div",{style:{position:"absolute",left:11,top:0,bottom:0,width:2,background:`linear-gradient(to bottom, ${w.cta}60, ${w.secondary}40)`}}),p.map((m,g)=>n.jsx(q,{delay:g*.08,children:n.jsxs("div",{style:{marginBottom:36,position:"relative"},children:[n.jsx("div",{style:{position:"absolute",left:-34,top:5,width:10,height:10,borderRadius:"50%",background:w.cta,boxShadow:`0 0 12px ${w.cta}40`}}),n.jsx("span",{style:{fontSize:12,fontWeight:700,color:w.cta,letterSpacing:"0.04em"},children:m.y}),n.jsx("h3",{style:{fontSize:18,fontWeight:700,color:w.textLight,margin:"4px 0 6px"},children:m.t}),n.jsx("p",{style:{fontSize:14,color:w.textMuted,lineHeight:1.6},children:m.d})]})},g))]})]})}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[n.jsx(nt,{tag:s.liderancaTag,title:s.liderancaTitle}),n.jsx(q,{children:n.jsxs("div",{className:"about-founder",children:[n.jsx("div",{className:"about-avatar",children:"GP"}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:22,fontWeight:700,color:w.textLight,marginBottom:4},children:"Gabriel Pires"}),n.jsx("span",{style:{fontSize:13,color:w.cta,fontWeight:600,letterSpacing:"0.03em"},children:"Founder & CEO"}),n.jsx("p",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.75,marginTop:16},children:"Mais de 15 anos de experiência na criação de produtos financeiros, com atuação em projetos nacionais e internacionais. Liderou times responsáveis por plataformas que hoje atendem milhões de usuários em produção."}),n.jsx("p",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.75,marginTop:10},children:"Essa experiência prática molda a forma como a JUST trabalha: foco em entrega, precisão técnica e responsabilidade sobre o que vai para o ar."})]})]})}),n.jsx(q,{delay:.15,children:n.jsxs("div",{className:"about-team-card",children:[n.jsx("h3",{style:{fontSize:20,fontWeight:700,color:w.textLight,marginBottom:14},children:"Um time orientado a resultado"}),n.jsx("p",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.75,marginBottom:12},children:"~20 profissionais com experiência real em meios de pagamento, banking e plataformas financeiras digitais. 100% remoto, com estrutura enxuta e foco total em entrega."}),n.jsx("p",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.75},children:"Não somos um time de experimentação. Somos um time de execução. Trabalhamos próximos ao cliente, assumindo responsabilidade pelo produto e tomando decisões com base no que precisa funcionar."})]})})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"100px 48px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[n.jsx(q,{children:n.jsx("h3",{style:{fontSize:13,color:w.cta,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:12},children:s.commitment})}),n.jsx(q,{delay:.1,children:n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:w.textLight,lineHeight:1.15,marginBottom:20},children:s.commitmentTitle})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75},children:s.commitmentDesc})})]})}),n.jsxs("section",{style:{background:`linear-gradient(135deg, ${w.primary}, ${w.secondary})`,padding:"100px 48px",textAlign:"center"},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:w.textLight,marginBottom:24},children:s.cta})}),n.jsx(q,{delay:.1,children:n.jsx(pt,{onClick:()=>u("contato"),children:s.ctaBtn})})]})]})}function y1({setPage:r,lang:c}){const u=T=>{r(T),window.scrollTo({top:0,behavior:"smooth"})},s=(Te[c]||Te["pt-BR"]).stack,[p,m]=A.useState(0),g=[{t:"Core Financeiro",hint:"Processamento próprio",icon:"core",d:"Core proprietário, modular e escalável. Controle total sobre fluxos financeiros, regras de negócio e operação. O controle do core reduz risco, aumenta previsibilidade e acelera decisões.",tags:["Autorizador próprio","Ledger financeiro","Split de pagamentos","Conciliação unificada","Multi-tenant","Processamento ISO 8583"],visual:[{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Ledger",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"},{n:"Split",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Conciliação",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"}]},{t:"Multi BaaS",hint:"Sem lock-in",icon:"baas",d:"Arquitetura que suporta múltiplos provedores simultaneamente. Failover automático, sem lock-in, migracao sem impacto. Nenhum produto financeiro deve depender de um único fornecedor.",tags:["Multi-provider","Failover automático","Hot-swap","Migracao zero-downtime"],visual:[{n:"Provider A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Provider B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Fallback",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"}]},{t:"Arranjo Fechado",hint:"Rede própria",icon:"closed",d:"Processamento em circuito fechado. Rede própria de captura, taxas customizadas, controle total sobre regras de aceite e independência operacional.",tags:["Rede própria","Taxas customizadas","Regras de aceite","TEF/POS/QR","RFID/NFC"],visual:[{n:"Captura",c:"#6C5CE7",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Autorizador",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Liquidação",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}]},{t:"Gateway",hint:"Roteamento inteligente",icon:"gateway",d:"Roteamento inteligente entre adquirentes, retentativas, split de pagamentos e conciliação unificada. Maximize aprovação, minimize custos.",tags:["Smart routing","Retentativas","Split payments","Conciliação"],visual:[{n:"Transação",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Router",c:"#f45546",bg:"rgba(244,85,70,0.1)",bc:"rgba(244,85,70,0.2)"},{n:"Acquirer A",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"},{n:"Acquirer B",c:"#1abc9c",bg:"rgba(26,188,156,0.08)",bc:"rgba(26,188,156,0.15)"}]},{t:"Motor de Regras",hint:"Regras configuráveis",icon:"rules",d:"Regras financeiras configuráveis: limites, políticas de uso, compliance, fluxos de aprovação e prevenção a fraude. Sem código, sem deploy.",tags:["Limites dinâmicos","Políticas de uso","Compliance","Anti-fraude","Zero-code"],visual:[{n:"Evento",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"},{n:"Regras",c:"#FDCB6E",bg:"rgba(253,203,110,0.08)",bc:"rgba(253,203,110,0.15)"},{n:"Ação",c:"#55efc4",bg:"rgba(0,184,148,0.08)",bc:"rgba(0,184,148,0.15)"}]},{t:"Apps & Backoffice",hint:"Experiência com sua marca",icon:"apps",d:"Apps nativos e painel administrativo unificado. Gestão de usuários, cartões, movimentações e relatórios. Sua marca, sua experiência.",tags:["App iOS/Android","Portal web","Backoffice","Sua marca","Push notifications"],visual:[{n:"App Mobile",c:"#E17055",bg:"rgba(225,112,85,0.08)",bc:"rgba(225,112,85,0.15)"},{n:"Portal",c:"#a29bfe",bg:"rgba(108,92,231,0.08)",bc:"rgba(108,92,231,0.15)"},{n:"Admin",c:"#74b9ff",bg:"rgba(9,132,227,0.08)",bc:"rgba(9,132,227,0.15)"}]}],h={core:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#f45546",strokeWidth:"2",children:[n.jsx("rect",{x:"2",y:"3",width:"20",height:"18",rx:"3"}),n.jsx("path",{d:"M8 7h8M8 11h5"})]}),baas:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#1abc9c",strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"3"}),n.jsx("path",{d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]}),closed:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#6C5CE7",strokeWidth:"2",children:n.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),gateway:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#0984E3",strokeWidth:"2",children:n.jsx("path",{d:"M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3"})}),rules:n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#FDCB6E",strokeWidth:"2",children:n.jsx("path",{d:"M12 20V10M18 20V4M6 20v-4"})}),apps:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#E17055",strokeWidth:"2",children:[n.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"}),n.jsx("path",{d:"M12 18h.01"})]})},x={core:"rgba(244,85,70,0.1)",baas:"rgba(26,188,156,0.1)",closed:"rgba(108,92,231,0.1)",gateway:"rgba(9,132,227,0.1)",rules:"rgba(253,203,110,0.1)",apps:"rgba(225,112,85,0.1)"},y=[{name:"Benefits",cls:"b",desc:"Cartões de benefícios: VA, VR, VT, mobilidade e multibenefícios"},{name:"Fleet",cls:"f",desc:"Gestão de combustível, pedágio, manutenção e controle de frotas"},{name:"Banking",cls:"k",desc:"Conta digital, cartão, PIX, transferências e serviços financeiros"},{name:"Expenses",cls:"e",desc:"Despesas corporativas, cartão corporativo e prestação de contas"},{name:"Credit",cls:"c",desc:"Antecipação salarial, crédito consignado e recebíveis"},{name:"Custom",cls:"x",desc:"Produtos financeiros sob medida para o seu negócio"}];return n.jsxs("div",{className:"tech-page",children:[n.jsx("style",{children:`
/* ===== TECH PAGE - HERO ARCH DIAGRAM ===== */
@keyframes ha-core-pulse {
  0%, 100% { box-shadow: 0 0 20px rgba(244,85,70,0.05); }
  50% { box-shadow: 0 0 35px rgba(244,85,70,0.12); }
}
@keyframes ha-conn-flow {
  0% { opacity: 0.06; }
  50% { opacity: 0.2; }
  100% { opacity: 0.06; }
}
.hero-arch {
  border-radius: 16px; border: 1px solid rgba(255,255,255,0.06);
  background: rgba(255,255,255,0.02); padding: 28px 24px;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.hero-arch:hover {
  border-color: rgba(255,255,255,0.1);
  box-shadow: 0 12px 48px rgba(0,0,0,0.25);
}
.ha-label {
  font-size: 9px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;
  color: rgba(242,244,248,0.2); margin-bottom: 8px; text-align: center;
  transition: color 0.3s;
}
.hero-arch:hover .ha-label { color: rgba(242,244,248,0.3); }
.ha-row { display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 6px; }
.ha-box {
  padding: 6px 12px; border-radius: 6px; font-size: 10px; font-weight: 600;
  text-align: center; white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); cursor: default;
}
.ha-box:hover { transform: translateY(-2px); }
.ha-box.ch { background: rgba(108,92,231,0.1); border: 1px solid rgba(108,92,231,0.2); color: #a29bfe; }
.ha-box.ch:hover { background: rgba(108,92,231,0.16); border-color: rgba(108,92,231,0.35); box-shadow: 0 4px 16px rgba(108,92,231,0.12); }
.ha-box.sec { background: rgba(244,85,70,0.06); border: 1px solid rgba(244,85,70,0.12); color: rgba(244,85,70,0.6); padding: 5px 20px; }
.ha-box.sec:hover { background: rgba(244,85,70,0.1); border-color: rgba(244,85,70,0.25); box-shadow: 0 4px 16px rgba(244,85,70,0.08); }
.ha-box.core { background: rgba(244,85,70,0.12); border: 1px solid rgba(244,85,70,0.25); color: #f45546; padding: 8px 20px; font-size: 12px; animation: ha-core-pulse 3s ease-in-out infinite; }
.ha-box.core:hover { background: rgba(244,85,70,0.18); border-color: rgba(244,85,70,0.4); box-shadow: 0 6px 24px rgba(244,85,70,0.15); animation: none; transform: translateY(-2px) scale(1.03); }
.ha-box.cap { background: rgba(0,184,148,0.06); border: 1px solid rgba(0,184,148,0.12); color: #55efc4; font-size: 9px; padding: 4px 10px; }
.ha-box.cap:hover { background: rgba(0,184,148,0.12); border-color: rgba(0,184,148,0.25); box-shadow: 0 4px 12px rgba(0,184,148,0.1); }
.ha-box.mod { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); font-size: 9px; position: relative; }
.ha-box.mod:hover { background: rgba(255,255,255,0.06); }
.ha-box.mod.b { color: #a29bfe; border-color: rgba(108,92,231,0.15); }
.ha-box.mod.b:hover { border-color: rgba(108,92,231,0.35); box-shadow: 0 4px 12px rgba(108,92,231,0.08); }
.ha-box.mod.f { color: #55efc4; border-color: rgba(0,184,148,0.15); }
.ha-box.mod.f:hover { border-color: rgba(0,184,148,0.35); box-shadow: 0 4px 12px rgba(0,184,148,0.08); }
.ha-box.mod.k { color: #74b9ff; border-color: rgba(9,132,227,0.15); }
.ha-box.mod.k:hover { border-color: rgba(9,132,227,0.35); box-shadow: 0 4px 12px rgba(9,132,227,0.08); }
.ha-box.mod.e { color: #E17055; border-color: rgba(225,112,85,0.15); }
.ha-box.mod.e:hover { border-color: rgba(225,112,85,0.35); box-shadow: 0 4px 12px rgba(225,112,85,0.08); }
.ha-box.mod.c { color: #FDCB6E; border-color: rgba(253,203,110,0.15); }
.ha-box.mod.c:hover { border-color: rgba(253,203,110,0.35); box-shadow: 0 4px 12px rgba(253,203,110,0.08); }
.ha-box.mod.x { color: #b2bec3; border-color: rgba(99,110,114,0.15); }
.ha-box.mod.x:hover { border-color: rgba(99,110,114,0.35); }
.ha-box.prov { background: rgba(9,132,227,0.06); border: 1px solid rgba(9,132,227,0.12); color: #74b9ff; font-size: 9px; padding: 4px 10px; }
.ha-box.prov:hover { background: rgba(9,132,227,0.12); border-color: rgba(9,132,227,0.25); box-shadow: 0 4px 12px rgba(9,132,227,0.1); }
.ha-box.baas { background: rgba(26,188,156,0.06); border: 1px solid rgba(26,188,156,0.12); color: #1abc9c; font-size: 9px; padding: 4px 10px; }
.ha-box.baas:hover { background: rgba(26,188,156,0.12); border-color: rgba(26,188,156,0.25); box-shadow: 0 4px 12px rgba(26,188,156,0.1); }
.ha-conn { text-align: center; color: rgba(242,244,248,0.08); font-size: 12px; margin: 4px 0; letter-spacing: 3px; animation: ha-conn-flow 2s ease-in-out infinite; }
.ha-conn:nth-of-type(2) { animation-delay: 0.4s; }
.ha-conn:nth-of-type(3) { animation-delay: 0.8s; }
.ha-div { height: 1px; margin: 10px 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent); }
.ha-bottom { text-align: center; margin-top: 12px; padding: 8px 16px; background: linear-gradient(135deg, rgba(108,92,231,0.06), rgba(244,85,70,0.06)); border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); font-size: 10px; font-weight: 600; color: rgba(242,244,248,0.35); transition: all 0.3s ease; }
.ha-bottom:hover { border-color: rgba(255,255,255,0.1); background: linear-gradient(135deg, rgba(108,92,231,0.1), rgba(244,85,70,0.1)); color: rgba(242,244,248,0.5); }
/* Tooltip */
.ha-tooltip {
  position: absolute; bottom: calc(100% + 10px); left: 50%; transform: translateX(-50%) scale(0.95);
  padding: 10px 14px; border-radius: 8px; white-space: normal; width: 200px;
  background: rgba(21,26,45,0.95); border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  font-size: 11px; font-weight: 400; line-height: 1.5; color: rgba(242,244,248,0.6);
  opacity: 0; pointer-events: none; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); z-index: 10;
}
.ha-tooltip::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: rgba(255,255,255,0.1); }
.ha-box.mod:hover .ha-tooltip { opacity: 1; transform: translateX(-50%) scale(1); }
.ha-tooltip strong { display: block; font-weight: 600; color: rgba(242,244,248,0.85); margin-bottom: 3px; font-size: 11px; }

/* ===== TECH PAGE - VERTICAL TABS ===== */
.vtabs-layout { display: grid; grid-template-columns: 280px 1fr; gap: 0; margin-top: 40px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
.vtabs-nav { background: rgba(255,255,255,0.02); border-right: 1px solid rgba(255,255,255,0.06); }
.vtab-item { display: flex; align-items: center; gap: 14px; padding: 20px 24px; cursor: pointer; transition: all 0.2s; border-bottom: 1px solid rgba(255,255,255,0.03); border-left: 3px solid transparent; }
.vtab-item:hover { background: rgba(255,255,255,0.02); }
.vtab-item.active { background: rgba(244,85,70,0.04); border-left-color: #f45546; }
.vtab-icon { width: 36px; height: 36px; border-radius: 8px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
.vtab-item .vtab-label { font-size: 13px; font-weight: 600; color: rgba(242,244,248,0.4); }
.vtab-item .vtab-hint { font-size: 11px; color: rgba(242,244,248,0.2); margin-top: 2px; }
.vtab-item.active .vtab-label { color: rgba(242,244,248,0.9); }
.vtab-item.active .vtab-hint { color: rgba(242,244,248,0.35); }
.vtab-panel { padding: 40px; background: rgba(255,255,255,0.015); min-height: 380px; display: flex; flex-direction: column; justify-content: center; }
.vtab-panel h3 { font-size: 24px; font-weight: 700; margin-bottom: 14px; color: #f2f4f8; }
.vtab-panel p { font-size: 15px; color: rgba(242,244,248,0.5); line-height: 1.7; margin-bottom: 20px; }
.vtab-panel .features { display: flex; flex-wrap: wrap; gap: 8px; }
.feat-tag { padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 500; background: rgba(244,85,70,0.06); border: 1px solid rgba(244,85,70,0.12); color: rgba(242,244,248,0.5); }
.vtab-visual { margin-bottom: 20px; padding: 16px 20px; border-radius: 10px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
.vv-node { padding: 5px 10px; border-radius: 5px; font-size: 10px; font-weight: 600; }

/* ===== TECH PAGE - MULTI-PROVIDER DIAGRAM ===== */
@keyframes mp-pulse-glow { 0%, 100% { box-shadow: 0 0 30px rgba(244,85,70,0.04); } 50% { box-shadow: 0 0 50px rgba(244,85,70,0.1); } }
@keyframes mp-dot-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.7); } }
@keyframes mp-flow-down { 0% { background-position: 0 -20px; } 100% { background-position: 0 20px; } }
@keyframes mp-fan-drop-pulse { 0%, 100% { opacity: 0.08; height: 16px; } 50% { opacity: 0.25; height: 18px; } }
.mp-diagram { margin-top: 48px; }
.mp-product-row { display: flex; justify-content: center; }
.mp-product-box { display: flex; align-items: center; gap: 12px; padding: 16px 32px; border-radius: 12px; background: rgba(108,92,231,0.06); border: 1px solid rgba(108,92,231,0.15); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-product-box:hover { transform: translateY(-3px); border-color: rgba(108,92,231,0.35); box-shadow: 0 8px 32px rgba(108,92,231,0.12); background: rgba(108,92,231,0.09); }
.mp-icon-circle { width: 36px; height: 36px; border-radius: 8px; background: rgba(108,92,231,0.12); display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
.mp-product-box:hover .mp-icon-circle { background: rgba(108,92,231,0.2); }
.mp-prod-label { font-size: 15px; font-weight: 700; color: #a29bfe; }
.mp-prod-hint { font-size: 11px; color: rgba(162,155,254,0.5); margin-top: 2px; }
.mp-connector { display: flex; justify-content: center; padding: 6px 0; }
.mp-connector-line { width: 2px; height: 28px; position: relative; overflow: hidden; background: linear-gradient(180deg, rgba(108,92,231,0.15), rgba(244,85,70,0.15)); }
.mp-connector-line::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, transparent 0%, rgba(244,85,70,0.5) 40%, rgba(244,85,70,0.5) 60%, transparent 100%); background-size: 2px 20px; animation: mp-flow-down 1.5s linear infinite; }
.mp-just-row { display: flex; justify-content: center; }
.mp-just-box { padding: 14px 40px; border-radius: 10px; text-align: center; background: linear-gradient(135deg, rgba(244,85,70,0.08), rgba(244,85,70,0.04)); border: 1px solid rgba(244,85,70,0.2); box-shadow: 0 0 30px rgba(244,85,70,0.04); animation: mp-pulse-glow 3s ease-in-out infinite; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-just-box:hover { transform: scale(1.04); border-color: rgba(244,85,70,0.4); box-shadow: 0 0 60px rgba(244,85,70,0.15); background: linear-gradient(135deg, rgba(244,85,70,0.12), rgba(244,85,70,0.06)); animation: none; }
.mp-just-label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #f45546; }
.mp-just-hint { font-size: 10px; color: rgba(244,85,70,0.4); margin-top: 2px; transition: color 0.3s; }
.mp-just-box:hover .mp-just-hint { color: rgba(244,85,70,0.6); }
.mp-connector-fan { display: flex; justify-content: center; align-items: flex-start; height: 32px; position: relative; width: 100%; max-width: 740px; margin: 0 auto; }
.mp-fan-center { width: 2px; height: 16px; position: relative; overflow: hidden; background: rgba(244,85,70,0.1); }
.mp-fan-center::after { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(180deg, transparent, rgba(244,85,70,0.5), transparent); background-size: 2px 16px; animation: mp-flow-down 1.2s linear infinite; }
.mp-fan-horizontal { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 80%; height: 1px; background: linear-gradient(90deg, rgba(9,132,227,0.0), rgba(9,132,227,0.12) 15%, rgba(244,85,70,0.08) 50%, rgba(0,184,148,0.12) 85%, rgba(0,184,148,0.0)); }
.mp-fan-drops { position: absolute; top: 16px; left: 50%; transform: translateX(-50%); width: 80%; display: flex; justify-content: space-around; }
.mp-fan-drop { width: 1px; background: rgba(255,255,255,0.08); animation: mp-fan-drop-pulse 2.5s ease-in-out infinite; }
.mp-fan-drop:nth-child(1) { animation-delay: 0s; }
.mp-fan-drop:nth-child(2) { animation-delay: 0.6s; }
.mp-fan-drop:nth-child(3) { animation-delay: 1.2s; }
.mp-fan-drop:nth-child(4) { animation-delay: 1.8s; }
.mp-providers-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.mp-prov-card { padding: 24px 20px; border-radius: 14px; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); transition: all 0.35s cubic-bezier(0.4,0,0.2,1); cursor: default; }
.mp-prov-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.15); box-shadow: 0 12px 36px rgba(0,0,0,0.3); background: rgba(255,255,255,0.04); }
.mp-prov-category { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(242,244,248,0.3); margin-bottom: 14px; transition: color 0.3s; }
.mp-prov-card:hover .mp-prov-category { color: rgba(242,244,248,0.5); }
.mp-prov-list { display: flex; flex-direction: column; gap: 8px; align-items: center; }
.mp-prov-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; width: 100%; justify-content: center; transition: all 0.25s ease; }
.mp-prov-card:hover .mp-prov-badge { transform: scale(1.03); }
.mp-dot { width: 6px; height: 6px; border-radius: 50%; animation: mp-dot-pulse 2.5s ease-in-out infinite; }
.mp-prov-badge.baas { background: rgba(26,188,156,0.06); border: 1px solid rgba(26,188,156,0.12); color: #1abc9c; }
.mp-prov-badge.baas .mp-dot { background: #1abc9c; }
.mp-prov-badge.acq { background: rgba(9,132,227,0.06); border: 1px solid rgba(9,132,227,0.12); color: #74b9ff; }
.mp-prov-badge.acq .mp-dot { background: #0984E3; }
.mp-prov-badge.cap { background: rgba(108,92,231,0.06); border: 1px solid rgba(108,92,231,0.12); color: #a29bfe; }
.mp-prov-badge.cap .mp-dot { background: #6C5CE7; }
.mp-prov-badge.proto { background: rgba(253,203,110,0.06); border: 1px solid rgba(253,203,110,0.12); color: #FDCB6E; }
.mp-prov-badge.proto .mp-dot { background: #FDCB6E; }
.mp-prov-badge.more { background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.08); color: rgba(242,244,248,0.2); font-size: 11px; }
.mp-prov-card:hover .mp-prov-badge.baas { background: rgba(26,188,156,0.1); border-color: rgba(26,188,156,0.25); }
.mp-prov-card:hover .mp-prov-badge.acq { background: rgba(9,132,227,0.1); border-color: rgba(9,132,227,0.25); }
.mp-prov-card:hover .mp-prov-badge.cap { background: rgba(108,92,231,0.1); border-color: rgba(108,92,231,0.25); }
.mp-prov-card:hover .mp-prov-badge.proto { background: rgba(253,203,110,0.1); border-color: rgba(253,203,110,0.25); }
.mp-swap-indicator { margin-top: 28px; text-align: center; padding: 14px 24px; border-radius: 10px; background: linear-gradient(135deg, rgba(0,184,148,0.03), rgba(9,132,227,0.03)); border: 1px solid rgba(0,184,148,0.08); display: flex; align-items: center; justify-content: center; gap: 12px; transition: all 0.3s ease; }
.mp-swap-indicator:hover { border-color: rgba(0,184,148,0.2); background: linear-gradient(135deg, rgba(0,184,148,0.05), rgba(9,132,227,0.05)); }
.mp-swap-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(0,184,148,0.08); display: flex; align-items: center; justify-content: center; transition: transform 0.3s ease; flex-shrink: 0; }
.mp-swap-indicator:hover .mp-swap-icon { transform: rotate(180deg); }
.mp-swap-text { font-size: 13px; color: rgba(242,244,248,0.4); text-align: left; }
.mp-swap-text strong { color: rgba(242,244,248,0.65); font-weight: 600; }

/* ===== TECH PAGE - SECURITY ===== */
.security-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 40px; }
.sec-card { padding: 28px; border-radius: 14px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.3s; }
.sec-card:hover { border-color: rgba(244,85,70,0.15); }
.sec-icon { width: 40px; height: 40px; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.sec-card h4 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: rgba(242,244,248,0.85); }
.sec-card p { font-size: 13px; color: rgba(242,244,248,0.4); line-height: 1.6; }
.sec-highlight { margin-top: 32px; padding: 32px 40px; border-radius: 16px; background: linear-gradient(135deg, rgba(0,184,148,0.04), rgba(9,132,227,0.04)); border: 1px solid rgba(0,184,148,0.1); display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: center; }
.sec-stat-value { font-size: 28px; font-weight: 800; color: #55efc4; }
.sec-stat-label { font-size: 12px; color: rgba(242,244,248,0.35); margin-top: 4px; }

@media (max-width: 900px) {
  .tech-page {
    overflow-x: hidden;
  }
  .tech-page .section-title-heading {
    font-size: 34px !important;
    line-height: 1.12 !important;
  }
  .tech-page section {
    overflow: hidden;
  }
  .tech-hero {
    padding: 124px 28px 72px !important;
  }
  .tech-hero-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 42px !important;
  }
  .tech-hero-copy h1 {
    font-size: clamp(38px, 8.5vw, 48px) !important;
    max-width: 11ch !important;
  }
  .tech-hero-copy p {
    max-width: 34ch !important;
  }
  .hero-arch {
    width: 100%;
    max-width: 640px;
    padding: 22px 18px;
  }
  .ha-row {
    gap: 8px;
  }
  .ha-box {
    white-space: normal;
  }
  .tech-section,
  .tech-cta-section {
    padding: 78px 28px !important;
  }
  .vtabs-layout {
    grid-template-columns: minmax(0, 1fr);
    margin-top: 32px;
  }
  .vtabs-nav {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .vtab-item {
    padding: 18px;
    border-left: 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .vtab-item.active {
    border-left-color: transparent;
    box-shadow: inset 0 3px 0 #f45546;
  }
  .vtab-panel {
    padding: 28px;
    min-height: auto;
  }
  .vtab-visual {
    align-items: flex-start;
  }
  .mp-providers-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .mp-product-box,
  .mp-just-box {
    max-width: 100%;
  }
  .sec-highlight {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
    padding: 28px;
  }
  .security-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .tech-page,
  .tech-page * {
    box-sizing: border-box;
  }
  .tech-page {
    width: 100%;
    max-width: 100vw;
  }
  .tech-page section > div {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  .tech-hero {
    padding: 108px 24px 60px !important;
  }
  .tech-hero-grid {
    gap: 34px !important;
  }
  .tech-hero-copy h1 {
    font-size: clamp(36px, 11.2vw, 44px) !important;
    max-width: 10.5ch !important;
  }
  .tech-hero-copy p {
    font-size: 16px !important;
    max-width: 27ch !important;
  }
  .tech-section,
  .tech-cta-section {
    padding: 66px 24px !important;
  }
  .tech-page .section-title-heading {
    font-size: 26px !important;
    max-width: 14ch !important;
    width: 100% !important;
    overflow-wrap: break-word !important;
    text-wrap: balance;
  }
  .tech-page [style*="margin-bottom: 56px"] {
    margin-bottom: 36px !important;
  }
  .tech-page .section-title-subtitle {
    font-size: 15px !important;
    max-width: 28ch !important;
    width: 100% !important;
    overflow-wrap: break-word !important;
  }
  .hero-arch {
    padding: 18px 14px;
    border-radius: 12px;
    display: grid;
    gap: 8px;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
    overflow: hidden;
  }
  .ha-label {
    font-size: 8px;
  }
  .ha-box {
    padding: 6px 10px;
    font-size: 9px;
    min-width: 0;
  }
  .ha-box.core {
    font-size: 11px;
    padding: 8px 14px;
  }
  .ha-box.sec {
    padding: 7px 12px;
  }
  .ha-tooltip {
    display: none;
  }
  .ha-bottom {
    font-size: 9px;
    line-height: 1.4;
    overflow-wrap: break-word;
  }
  .hero-arch .ha-row {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    min-width: 0;
  }
  .hero-arch .ha-row:has(.ha-box.core),
  .hero-arch .ha-row:has(.ha-box.sec) {
    grid-template-columns: minmax(0, 1fr);
  }
  .hero-arch .ha-row .ha-box {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .hero-arch .ha-row .ha-box.core,
  .hero-arch .ha-row .ha-box.sec {
    width: auto;
  }
  .ha-conn {
    margin: 0;
  }
  .ha-div {
    margin: 2px 0;
  }
  .vtabs-nav {
    grid-template-columns: minmax(0, 1fr);
  }
  .vtab-item {
    padding: 16px 18px;
  }
  .vtab-panel {
    padding: 24px 20px;
  }
  .vtab-panel h3 {
    font-size: 22px;
  }
  .vtab-panel p {
    font-size: 14px;
    max-width: 28ch;
    overflow-wrap: break-word;
  }
  .vtab-visual {
    padding: 14px;
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px !important;
  }
  .vtab-visual > span {
    display: none;
  }
  .vv-node {
    font-size: 9px;
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
    text-align: center;
  }
  .feat-tag {
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
    line-height: 1.35;
  }
  .features {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr);
  }
  .mp-diagram {
    margin-top: 36px;
  }
  .mp-product-row,
  .mp-just-row {
    justify-content: stretch;
  }
  .mp-product-box,
  .mp-just-box {
    width: 100%;
    padding: 16px 18px;
  }
  .mp-just-label {
    font-size: 11px;
  }
  .mp-just-hint {
    font-size: 9px;
  }
  .mp-connector-fan {
    display: none;
  }
  .mp-providers-row {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
    margin-top: 14px;
  }
  .mp-prov-card {
    padding: 20px 18px;
  }
  .mp-prov-badge {
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .mp-swap-indicator {
    align-items: flex-start;
    padding: 16px;
  }
  .mp-swap-text {
    font-size: 12px;
    min-width: 0;
    max-width: 26ch;
    overflow-wrap: anywhere;
  }
  .sec-highlight {
    grid-template-columns: minmax(0, 1fr);
    padding: 24px 20px;
    gap: 18px;
  }
  .security-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  .sec-card {
    padding: 24px 20px;
  }
  .tech-cta-section .section-title-heading,
  .tech-cta-section h2 {
    font-size: 28px !important;
    max-width: 16ch !important;
  }
}
`}),n.jsx("section",{className:"tech-hero",style:{background:`linear-gradient(160deg, ${w.primary}, #151a2d, ${w.secondary})`,padding:"150px 48px 80px"},children:n.jsxs("div",{className:"tech-hero-grid",style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:60,alignItems:"center"},children:[n.jsxs("div",{className:"tech-hero-copy",children:[n.jsx(q,{children:n.jsx(Ht,{children:s.tag})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:44,fontWeight:700,color:w.textLight,lineHeight:1.1,marginBottom:16},children:s.h1})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,lineHeight:1.6},children:s.subtitle})})]}),n.jsx(q,{delay:.3,children:n.jsxs("div",{className:"hero-arch",children:[n.jsx("div",{className:"ha-label",children:"Canais"}),n.jsxs("div",{className:"ha-row",children:[n.jsx("div",{className:"ha-box ch",children:"App Mobile"}),n.jsx("div",{className:"ha-box ch",children:"Portal Web"}),n.jsx("div",{className:"ha-box ch",children:"Backoffice"}),n.jsx("div",{className:"ha-box ch",children:"APIs B2B"})]}),n.jsx("div",{className:"ha-conn",children:"▼"}),n.jsx("div",{className:"ha-row",children:n.jsx("div",{className:"ha-box sec",style:{flex:1,textAlign:"center"},children:"WAF + API Gateway + Auth"})}),n.jsx("div",{className:"ha-conn",children:"▼"}),n.jsx("div",{className:"ha-row",children:n.jsx("div",{className:"ha-box core",children:"JUST Core (Autorizador)"})}),n.jsx("div",{className:"ha-conn",children:"▼"}),n.jsxs("div",{className:"ha-row",children:[n.jsx("div",{className:"ha-box cap",children:"Motor de Regras"}),n.jsx("div",{className:"ha-box cap",children:"Ledger"}),n.jsx("div",{className:"ha-box cap",children:"Split"}),n.jsx("div",{className:"ha-box cap",children:"FinOps"}),n.jsx("div",{className:"ha-box cap",children:"Antifraude"}),n.jsx("div",{className:"ha-box cap",children:"BI"})]}),n.jsx("div",{className:"ha-div"}),n.jsx("div",{className:"ha-label",children:"Modulos de produto"}),n.jsx("div",{className:"ha-row",children:y.map((T,S)=>n.jsxs("div",{className:`ha-box mod ${T.cls}`,children:[T.name,n.jsxs("div",{className:"ha-tooltip",children:[n.jsx("strong",{children:T.name}),T.desc]})]},S))}),n.jsx("div",{className:"ha-div"}),n.jsx("div",{className:"ha-label",children:"Providers"}),n.jsxs("div",{className:"ha-row",children:[n.jsx("div",{className:"ha-box baas",children:"BaaS"}),n.jsx("div",{className:"ha-box baas",children:"CaaS"}),n.jsx("div",{className:"ha-box prov",children:"Bins Sponsor"}),n.jsx("div",{className:"ha-box prov",children:"Acquirers"}),n.jsx("div",{className:"ha-box prov",children:"Compliance"})]}),n.jsx("div",{className:"ha-bottom",children:"App + Plataformas de Gestão Web — powered by JUST"})]})})]})}),n.jsx("section",{className:"tech-section",style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx(nt,{tag:s.platformTag,title:s.platformTitle,center:!0,subtitle:s.platformSubtitle}),n.jsxs("div",{className:"vtabs-layout",children:[n.jsx("div",{className:"vtabs-nav",children:g.map((T,S)=>n.jsxs("div",{className:`vtab-item${p===S?" active":""}`,onClick:()=>m(S),children:[n.jsx("div",{className:"vtab-icon",style:{background:x[T.icon]},children:h[T.icon]}),n.jsxs("div",{children:[n.jsx("div",{className:"vtab-label",children:T.t}),n.jsx("div",{className:"vtab-hint",children:T.hint})]})]},S))}),n.jsxs("div",{className:"vtab-panel",children:[n.jsx("div",{className:"vtab-visual",children:g[p].visual.map((T,S)=>n.jsxs(Zt.Fragment,{children:[S>0&&n.jsx("span",{style:{color:"rgba(242,244,248,0.15)"},children:"→"}),n.jsx("div",{className:"vv-node",style:{background:T.bg,border:`1px solid ${T.bc}`,color:T.c},children:T.n})]},S))}),n.jsx("h3",{children:g[p].t}),n.jsx("p",{children:g[p].d}),n.jsx("div",{className:"features",children:g[p].tags.map((T,S)=>n.jsx("span",{className:"feat-tag",children:T},S))})]})]})]})}),n.jsx("section",{className:"tech-section",style:{background:w.primary,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx(nt,{tag:s.integrationsTag,title:s.integrationsTitle,center:!0,subtitle:s.integrationsSubtitle}),n.jsxs("div",{className:"mp-diagram",children:[n.jsx("div",{className:"mp-product-row",children:n.jsxs("div",{className:"mp-product-box",children:[n.jsx("div",{className:"mp-icon-circle",children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#a29bfe",strokeWidth:"2",children:[n.jsx("rect",{x:"2",y:"3",width:"20",height:"18",rx:"3"}),n.jsx("path",{d:"M8 7h8M8 11h5"})]})}),n.jsxs("div",{children:[n.jsx("div",{className:"mp-prod-label",children:"Seu Produto"}),n.jsx("div",{className:"mp-prod-hint",children:"App, Portal, Backoffice, APIs"})]})]})}),n.jsx("div",{className:"mp-connector",children:n.jsx("div",{className:"mp-connector-line"})}),n.jsx("div",{className:"mp-just-row",children:n.jsxs("div",{className:"mp-just-box",children:[n.jsx("div",{className:"mp-just-label",children:"JUST Abstraction Layer"}),n.jsx("div",{className:"mp-just-hint",children:"Core financeiro + Gateway + Motor de regras"})]})}),n.jsxs("div",{className:"mp-connector-fan",children:[n.jsx("div",{className:"mp-fan-center"}),n.jsx("div",{className:"mp-fan-horizontal"}),n.jsxs("div",{className:"mp-fan-drops",children:[n.jsx("div",{className:"mp-fan-drop"}),n.jsx("div",{className:"mp-fan-drop"}),n.jsx("div",{className:"mp-fan-drop"}),n.jsx("div",{className:"mp-fan-drop"})]})]}),n.jsxs("div",{className:"mp-providers-row",children:[n.jsxs("div",{className:"mp-prov-card",children:[n.jsx("div",{className:"mp-prov-category",children:"BaaS"}),n.jsxs("div",{className:"mp-prov-list",children:[n.jsxs("div",{className:"mp-prov-badge baas",children:[n.jsx("span",{className:"mp-dot"})," Conta Digital"]}),n.jsxs("div",{className:"mp-prov-badge baas",children:[n.jsx("span",{className:"mp-dot"})," PIX & Transferencias"]}),n.jsxs("div",{className:"mp-prov-badge baas",children:[n.jsx("span",{className:"mp-dot"})," KYC & Onboarding"]}),n.jsx("div",{className:"mp-prov-badge more",children:"+ outros servicos"})]})]}),n.jsxs("div",{className:"mp-prov-card",children:[n.jsx("div",{className:"mp-prov-category",children:"CaaS & Bins Sponsor"}),n.jsxs("div",{className:"mp-prov-list",children:[n.jsxs("div",{className:"mp-prov-badge acq",children:[n.jsx("span",{className:"mp-dot"})," Emissão de Cartões"]}),n.jsxs("div",{className:"mp-prov-badge acq",children:[n.jsx("span",{className:"mp-dot"})," BIN Sponsorship"]}),n.jsxs("div",{className:"mp-prov-badge acq",children:[n.jsx("span",{className:"mp-dot"})," Tokenização"]}),n.jsx("div",{className:"mp-prov-badge more",children:"+ arranjo aberto/fechado"})]})]}),n.jsxs("div",{className:"mp-prov-card",children:[n.jsx("div",{className:"mp-prov-category",children:"Acquirers & Captura"}),n.jsxs("div",{className:"mp-prov-list",children:[n.jsxs("div",{className:"mp-prov-badge cap",children:[n.jsx("span",{className:"mp-dot"})," TEF / POS"]}),n.jsxs("div",{className:"mp-prov-badge cap",children:[n.jsx("span",{className:"mp-dot"})," QR Code"]}),n.jsxs("div",{className:"mp-prov-badge cap",children:[n.jsx("span",{className:"mp-dot"})," App Pay"]}),n.jsxs("div",{className:"mp-prov-badge cap",children:[n.jsx("span",{className:"mp-dot"})," RFID / NFC"]})]})]}),n.jsxs("div",{className:"mp-prov-card",children:[n.jsx("div",{className:"mp-prov-category",children:"Compliance"}),n.jsxs("div",{className:"mp-prov-list",children:[n.jsxs("div",{className:"mp-prov-badge proto",children:[n.jsx("span",{className:"mp-dot"})," LGPD"]}),n.jsxs("div",{className:"mp-prov-badge proto",children:[n.jsx("span",{className:"mp-dot"})," PCI-Aware"]}),n.jsxs("div",{className:"mp-prov-badge proto",children:[n.jsx("span",{className:"mp-dot"})," AML / KYC"]}),n.jsxs("div",{className:"mp-prov-badge proto",children:[n.jsx("span",{className:"mp-dot"})," Auditoria"]})]})]})]}),n.jsxs("div",{className:"mp-swap-indicator",children:[n.jsx("div",{className:"mp-swap-icon",children:n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#55efc4",strokeWidth:"2",children:n.jsx("path",{d:"M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3"})})}),n.jsxs("div",{className:"mp-swap-text",children:[n.jsx("strong",{children:s.mpSwapBold}),s.mpSwapText]})]})]})]})}),n.jsx("section",{className:"tech-section",style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx(nt,{tag:s.securityTag,title:s.securityTitle,center:!0,subtitle:s.securitySubtitle}),n.jsx("div",{className:"sec-highlight",children:[["Pen Test","AWS","LGPD","OWASP"],s.secHighlightLabels].reduce((T,S,U,_)=>_[0].map((Y,H)=>n.jsxs("div",{children:[n.jsx("div",{className:"sec-stat-value",children:Y}),n.jsx("div",{className:"sec-stat-label",children:_[1][H]})]},H)))}),n.jsx("div",{className:"security-grid",children:s.secCards.map((T,S)=>{const U=[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#55efc4",strokeWidth:"2",children:[n.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),n.jsx("path",{d:"M9 12l2 2 4-4"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#a29bfe",strokeWidth:"2",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#74b9ff",strokeWidth:"2",children:n.jsx("path",{d:"M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"})}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#f45546",strokeWidth:"2",children:[n.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),n.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#FDCB6E",strokeWidth:"2",children:[n.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),n.jsx("path",{d:"M14 2v6h6M9 15l2 2 4-4"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#E17055",strokeWidth:"2",children:[n.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2"}),n.jsx("path",{d:"M12 18h.01"})]})],_=["rgba(0,184,148,0.1)","rgba(108,92,231,0.1)","rgba(9,132,227,0.1)","rgba(244,85,70,0.1)","rgba(253,203,110,0.1)","rgba(225,112,85,0.1)"];return n.jsxs("div",{className:"sec-card",children:[n.jsx("div",{className:"sec-icon",style:{background:_[S]},children:U[S]}),n.jsx("h4",{children:T.title}),n.jsx("p",{children:T.desc})]},S)})})]})}),n.jsxs("section",{className:"tech-cta-section",style:{background:`linear-gradient(135deg, ${w.primary}, ${w.secondary})`,padding:"100px 48px",textAlign:"center"},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:w.textLight,marginBottom:24},children:s.cta})}),n.jsx(q,{delay:.1,children:n.jsx(pt,{onClick:()=>u("contato"),children:s.ctaBtn})})]})]})}function v1({setPage:r,lang:c}){const u=g=>{r(g),window.scrollTo({top:0,behavior:"smooth"})},s=(Te[c]||Te["pt-BR"]).cases,p=[Ce.beneficios.accent,Ce.frotas.accent,Ce.beneficios.accent,Ce.antecipacao.accent],m=s.casesList.map((g,h)=>({...g,color:p[h]}));return n.jsxs("div",{children:[n.jsx("section",{style:{background:`linear-gradient(160deg, ${w.primary}, ${w.darkAlt}, ${w.secondary})`,padding:"170px 48px 100px",textAlign:"center"},children:n.jsxs("div",{style:{maxWidth:700,margin:"0 auto"},children:[n.jsx(q,{children:n.jsx(Ht,{children:s.tag})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:48,fontWeight:700,color:w.textLight,lineHeight:1.1,margin:"16px 0"},children:s.h1})})]})}),n.jsx("section",{style:{background:w.primary,padding:"80px 48px",borderBottom:`1px solid ${w.borderLight}`},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)"},children:[n.jsx(jo,{prefix:"R$",value:4,suffix:"bi+",label:s.tpvLabel}),n.jsx(jo,{value:30,suffix:"M+",label:s.txLabel,delay:.08}),n.jsx(jo,{value:500,suffix:"k+",label:s.usersLabel,delay:.16}),n.jsx(jo,{value:15,suffix:"+",label:s.clientsLabel,delay:.24})]})}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsx("div",{style:{maxWidth:1e3,margin:"0 auto",display:"flex",flexDirection:"column",gap:20},children:m.map((g,h)=>n.jsx(q,{delay:h*.08,children:n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:32,padding:36,borderRadius:16,background:`${g.color}05`,border:`1px solid ${g.color}12`,alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx(Ht,{color:g.color,children:g.tag}),n.jsx("p",{style:{fontSize:12,fontWeight:700,color:w.textMuted,textTransform:"uppercase",margin:"10px 0 4px",letterSpacing:"0.04em"},children:g.name}),n.jsx("h3",{style:{fontSize:24,fontWeight:700,color:w.textLight,lineHeight:1.2},children:g.headline})]}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:g.items.map((x,y)=>n.jsxs("span",{style:{padding:"8px 14px",borderRadius:8,background:`${g.color}10`,color:g.color,fontSize:13,fontWeight:500},children:["✓ ",x]},y))})]})},h))})}),n.jsxs("section",{style:{background:`linear-gradient(135deg, ${w.primary}, ${w.secondary})`,padding:"100px 48px",textAlign:"center"},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:w.textLight,marginBottom:24},children:s.cta})}),n.jsx(q,{delay:.1,children:n.jsx(pt,{onClick:()=>u("contato"),children:s.ctaBtn})})]})]})}function j1({lang:r}){const c=(Te[r]||Te["pt-BR"]).contato,[u,s]=A.useState(!1),[p,m]=A.useState(!1),[g,h]=A.useState(""),[x,y]=A.useState({nome:"",email:"",empresa:"",telefone:"",produto:"",projeto:""}),T=D=>V=>y($=>({...$,[D]:V.target.value})),S="https://script.google.com/macros/s/AKfycbyJYv9kn-XdIosgb7awl5cXLnjE-XT1fWe-5XlVWq5KAVnf6Ol4UwPG_pCnspPoZ9Q0/exec",U=async()=>{if(h(""),!x.nome||!x.email||!x.empresa||!x.produto){h(c.errorRequired),Qt("contact_form_error",{reason:"required_fields"});return}m(!0);try{await fetch(S,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:x.nome,email:x.email,empresa:x.empresa,telefone:x.telefone||"Não informado",produto:x.produto,projeto:x.projeto||"Não informado"})}),s(!0),Qt("contact_form_submit",{product:x.produto,has_phone:!!x.telefone,has_project:!!x.projeto})}catch(D){console.error("Form submission error:",D),h(c.errorSend),Qt("contact_form_error",{reason:"send_error"})}finally{m(!1)}},[_,Y]=A.useState(null),H=c.faqs;return n.jsxs("div",{children:[n.jsxs("section",{style:{background:`linear-gradient(160deg, ${w.primary}, ${w.darkAlt})`,padding:"170px 48px 80px",textAlign:"center"},children:[n.jsx(q,{children:n.jsx("h1",{style:{fontSize:44,fontWeight:700,color:w.textLight,marginBottom:12},children:c.h1})}),n.jsx(q,{delay:.1,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight},children:c.subtitle})})]}),n.jsx("section",{style:{background:w.primary,padding:"80px 48px"},children:n.jsxs("div",{style:{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:60},children:[u?n.jsx(q,{children:n.jsxs("div",{style:{textAlign:"center",padding:"60px 0"},children:[n.jsx("div",{style:{width:56,height:56,borderRadius:"50%",background:`${w.cta}15`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:28,color:w.cta},children:"✓"}),n.jsx("h3",{style:{fontSize:22,fontWeight:700,color:w.textLight,marginBottom:8},children:c.successTitle}),n.jsx("p",{style:{fontSize:15,color:w.textMuted},children:c.successMsg})]})}):n.jsx(q,{children:n.jsxs("div",{children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16},children:[{l:c.nameLabel,t:"text",k:"nome"},{l:c.emailLabel,t:"email",k:"email"},{l:c.companyLabel,t:"text",k:"empresa"},{l:c.phoneLabel,t:"tel",k:"telefone"}].map((D,V)=>n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontSize:12,color:w.textMuted,marginBottom:5,fontWeight:500},children:D.l}),n.jsx("input",{type:D.t,value:x[D.k],onChange:T(D.k),style:{width:"100%",padding:"11px 14px",borderRadius:8,border:`1px solid ${w.borderLight}`,background:"rgba(255,255,255,0.04)",color:w.textLight,fontSize:14,outline:"none"}})]},V))}),n.jsxs("div",{style:{marginBottom:16},children:[n.jsx("label",{style:{display:"block",fontSize:12,color:w.textMuted,marginBottom:5,fontWeight:500},children:c.productLabel}),n.jsxs("select",{value:x.produto,onChange:T("produto"),style:{width:"100%",padding:"11px 14px",borderRadius:8,border:`1px solid ${w.borderLight}`,background:"rgba(255,255,255,0.04)",color:w.textLight,fontSize:14},children:[n.jsx("option",{value:"",children:c.productPlaceholder}),["JUST Benefits","JUST Fleet","JUST Banking","JUST Expense","JUST Credit","JUST Custom","Ainda não sei"].map(D=>n.jsx("option",{value:D,children:D},D))]})]}),n.jsxs("div",{style:{marginBottom:20},children:[n.jsx("label",{style:{display:"block",fontSize:12,color:w.textMuted,marginBottom:5,fontWeight:500},children:c.projectLabel}),n.jsx("textarea",{rows:3,value:x.projeto,onChange:T("projeto"),placeholder:c.projectPlaceholder,style:{width:"100%",padding:"11px 14px",borderRadius:8,border:`1px solid ${w.borderLight}`,background:"rgba(255,255,255,0.04)",color:w.textLight,fontSize:14,resize:"vertical",outline:"none"}})]}),g&&n.jsx("p",{style:{color:w.cta,fontSize:13,marginBottom:12},children:g}),n.jsx(pt,{onClick:U,disabled:p,style:{width:"100%",opacity:p?.7:1,cursor:p?"wait":"pointer"},children:p?c.sendingBtn:c.submitBtn})]})}),n.jsx(q,{delay:.15,direction:"right",children:n.jsx("div",{style:{paddingTop:8},children:[{l:c.emailLabel2,v:"contato@wearejust.it"},{l:c.whatsappLabel,v:"+55 11 97187-4759",href:"https://wa.me/5511971874759?text=Ola%2C%20acessei%20o%20site%20da%20JUST%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."},{l:c.locationLabel,v:"São Paulo, SP"},{l:c.hoursLabel,v:c.hours}].map(D=>n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{style:{fontSize:11,color:w.textMuted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:4,fontWeight:600},children:D.l}),D.href?n.jsxs("a",{href:D.href,target:"_blank",rel:"noopener noreferrer",style:{fontSize:15,color:w.textLight,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:6},children:[D.v," ",n.jsx("span",{style:{fontSize:12,color:"#25D366"},children:"↗"})]}):n.jsx("div",{style:{fontSize:15,color:w.textLight},children:D.v})]},D.l))})})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"80px 48px"},children:n.jsxs("div",{style:{maxWidth:600,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:28,fontWeight:700,color:w.textLight,marginBottom:28,textAlign:"center"},children:c.faqTitle}),H.map((D,V)=>n.jsxs("div",{style:{borderBottom:`1px solid ${w.borderLight}`,marginBottom:8},children:[n.jsxs("button",{onClick:()=>Y(_===V?null:V),style:{width:"100%",display:"flex",justifyContent:"space-between",padding:"14px 0",background:"none",border:"none",cursor:"pointer",color:w.textLight,fontSize:15,fontWeight:500,textAlign:"left"},children:[D.q," ",n.jsx("span",{style:{transform:_===V?"rotate(180deg)":"none",transition:"0.3s"},children:"▾"})]}),_===V&&n.jsx("p",{style:{fontSize:14,color:w.textMuted,lineHeight:1.6,padding:"0 0 14px"},children:D.a})]},V))]})})]})}function S1({lang:r}){const c=(Te[r]||Te["pt-BR"]).privacy;return n.jsxs("div",{children:[n.jsx("section",{style:{background:`linear-gradient(160deg, ${w.primary}, ${w.darkAlt}, ${w.secondary})`,padding:"170px 48px 92px"},children:n.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[n.jsx(q,{children:n.jsx(Ht,{children:c.tag})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:52,fontWeight:700,color:w.textLight,lineHeight:1.08,margin:"16px 0 18px",letterSpacing:"-0.025em"},children:c.h1})}),n.jsx(q,{delay:.18,children:n.jsx("p",{style:{fontSize:18,color:w.textMutedLight,lineHeight:1.65,maxWidth:720},children:c.subtitle})}),n.jsx(q,{delay:.26,children:n.jsxs("div",{style:{display:"inline-flex",gap:10,alignItems:"center",marginTop:26,padding:"10px 14px",borderRadius:8,border:`1px solid ${w.borderLight}`,background:"rgba(255,255,255,0.035)",color:w.textMutedLight,fontSize:13},children:[n.jsx("span",{style:{color:"rgba(242,244,248,0.4)"},children:c.updatedLabel}),n.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:w.cta}}),n.jsx("strong",{style:{color:w.textLight,fontWeight:600},children:c.updatedAt})]})})]})}),n.jsx("section",{style:{background:w.bgOffwhite,padding:"88px 48px"},children:n.jsxs("div",{className:"privacy-grid",style:{maxWidth:1080,margin:"0 auto",display:"grid",gridTemplateColumns:"280px minmax(0, 1fr)",gap:56,alignItems:"start"},children:[n.jsx("aside",{className:"privacy-aside",style:{position:"sticky",top:110},children:n.jsxs("div",{style:{padding:28,borderRadius:8,background:"#fff",border:"1px solid rgba(15,17,43,0.08)"},children:[n.jsx("h2",{style:{fontSize:18,fontWeight:700,color:w.primary,marginBottom:12},children:c.introTitle}),n.jsx("p",{style:{fontSize:14,color:"rgba(15,17,43,0.62)",lineHeight:1.7,marginBottom:20},children:c.intro[0]}),n.jsx("div",{style:{height:1,background:"rgba(15,17,43,0.08)",marginBottom:20}}),n.jsxs("p",{style:{fontSize:12,color:"rgba(15,17,43,0.45)",lineHeight:1.6},children:[c.updatedLabel,": ",c.updatedAt]})]})}),n.jsxs("article",{style:{minWidth:0},children:[n.jsx(q,{children:n.jsxs("div",{style:{padding:36,borderRadius:8,background:"#fff",border:"1px solid rgba(15,17,43,0.08)",marginBottom:18},children:[n.jsx("p",{style:{fontSize:16,color:"rgba(15,17,43,0.72)",lineHeight:1.8,marginBottom:18},children:c.intro[0]}),n.jsx("p",{style:{fontSize:16,color:"rgba(15,17,43,0.72)",lineHeight:1.8},children:c.intro[1]})]})}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:c.sections.map((u,s)=>n.jsx(q,{delay:Math.min(s*.03,.18),children:n.jsxs("section",{style:{padding:36,borderRadius:8,background:"#fff",border:"1px solid rgba(15,17,43,0.08)"},children:[n.jsx("h2",{style:{fontSize:22,fontWeight:700,color:w.primary,lineHeight:1.25,marginBottom:18},children:u.title}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:u.body.map(p=>n.jsx("p",{style:{fontSize:15,color:"rgba(15,17,43,0.68)",lineHeight:1.75},children:p},p))})]})},u.title))}),n.jsx(q,{children:n.jsxs("section",{style:{marginTop:18,padding:36,borderRadius:8,background:w.primary,border:`1px solid ${w.borderLight}`},children:[n.jsx("h2",{style:{fontSize:24,fontWeight:700,color:w.textLight,marginBottom:12},children:c.contactTitle}),n.jsx("p",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.7,maxWidth:640,marginBottom:18},children:c.contactText}),n.jsx("a",{href:`mailto:${c.contactEmail}`,style:{color:w.cta,fontSize:16,fontWeight:700,textDecoration:"none"},children:c.contactEmail})]})})]})]})})]})}function w1({setPage:r,config:c,lang:u}){const s=g=>{r(g),window.scrollTo({top:0,behavior:"smooth"})},p=(Te[u]||Te["pt-BR"]).solution,m=Ce[c.key]||Ce.beneficios;return n.jsxs("div",{children:[n.jsx("section",{style:{background:`linear-gradient(160deg, ${w.primary}, ${w.darkAlt})`,padding:"170px 48px 100px"},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx(q,{children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx(el,{productKey:c.key,size:36,showCard:!0}),n.jsx(Ht,{color:m.accent,children:m.label})]})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:44,fontWeight:700,color:w.textLight,lineHeight:1.1,marginBottom:16},children:c.title})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,lineHeight:1.6,marginBottom:32},children:c.subtitle})}),n.jsx(q,{delay:.3,children:n.jsx(pt,{onClick:()=>s("contato"),children:p.ctaBtn})})]}),n.jsx(q,{delay:.2,direction:"right",children:n.jsx(Qx,{color:m.accent,label:m.label,productKey:c.key,style:{maxWidth:500}})})]})}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[n.jsx(nt,{title:p.modelsTitle,center:!0}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[c.model1,c.model2].map((g,h)=>n.jsx(q,{delay:h*.1,children:n.jsxs("div",{style:{padding:32,borderRadius:14,background:`${m.accent}05`,border:`1px solid ${m.accent}12`},children:[n.jsx("h3",{style:{fontSize:18,fontWeight:700,color:w.textLight,marginBottom:10},children:g.title}),n.jsx("p",{style:{fontSize:14,color:w.textMuted,lineHeight:1.6},children:g.desc})]})},h))})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[n.jsx(nt,{title:p.capabilitiesTitle,center:!0}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:c.capabilities.map((g,h)=>n.jsx(q,{delay:h*.06,children:n.jsx("div",{style:{textAlign:"center",padding:"20px 14px",borderRadius:10,background:`${m.accent}06`,border:`1px solid ${m.accent}10`,fontSize:14,fontWeight:500,color:w.textLight},children:g})},h))})]})}),n.jsxs("section",{style:{background:`linear-gradient(135deg, ${w.primary}, ${w.secondary})`,padding:"100px 48px",textAlign:"center"},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:w.textLight,marginBottom:24},children:p.ctaTitle})}),n.jsx(q,{delay:.1,children:n.jsx(pt,{onClick:()=>s("contato"),children:p.ctaBtn})})]})]})}function T1({setPage:r,lang:c}){const u=(Te[c]||Te["pt-BR"]).sentinel,s=h=>{r(h),window.scrollTo({top:0,behavior:"smooth"})},p=Ce.sentinel,m=[{title:u.b1Title,desc:u.b1Desc,icon:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("circle",{cx:"12",cy:"12",r:"9",stroke:p.accent,strokeWidth:"1.8"}),n.jsx("path",{d:"M12 7v5l3 2",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("circle",{cx:"12",cy:"12",r:"1.5",fill:p.accent,opacity:"0.4"})]})},{title:u.b2Title,desc:u.b2Desc,icon:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"5",stroke:p.accent,strokeWidth:"1.8"}),n.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"5",stroke:p.accent,strokeWidth:"1.8",transform:"rotate(60 12 12)"}),n.jsx("ellipse",{cx:"12",cy:"12",rx:"10",ry:"5",stroke:p.accent,strokeWidth:"1.8",transform:"rotate(120 12 12)"}),n.jsx("circle",{cx:"12",cy:"12",r:"2",fill:p.accent,opacity:"0.6"})]})},{title:u.b3Title,desc:u.b3Desc,icon:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("path",{d:"M3 17l4-4 3 3 7-9 4 4",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 20h18",stroke:p.accent,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.4"})]})},{title:u.b4Title,desc:u.b4Desc,icon:n.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:p.accent,strokeWidth:"1.8"}),n.jsx("path",{d:"M9 12l2 2 4-4",stroke:p.accent,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 9h18",stroke:p.accent,strokeWidth:"1.2",opacity:"0.3"})]})}],g=[n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3",stroke:p.accent,strokeWidth:"1.8"}),n.jsx("path",{d:"M8 12h2l2-4 2 8 2-4h2",stroke:p.accent,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:p.accent,strokeWidth:"1.8"}),n.jsx("path",{d:"M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8",stroke:p.accent,strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"})]}),n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[n.jsx("polyline",{points:"17 1 21 5 17 9",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 11V9a4 4 0 0 1 4-4h14",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round"}),n.jsx("polyline",{points:"7 23 3 19 7 15",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M21 13v2a4 4 0 0 1-4 4H3",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",opacity:"0.6"})]}),n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:n.jsx("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})}),n.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:n.jsx("path",{d:"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round"})})];return n.jsxs("div",{children:[n.jsxs("section",{style:{background:`linear-gradient(160deg, #060910, ${w.primary} 50%, #0a1515)`,padding:"170px 48px 100px",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"20%",right:"8%",width:500,height:500,background:`radial-gradient(circle, ${p.accent}08, transparent 70%)`,borderRadius:"50%",filter:"blur(80px)"}}),n.jsx("div",{style:{position:"absolute",bottom:"10%",left:"5%",width:400,height:400,background:`radial-gradient(circle, ${p.accent}05, transparent 70%)`,borderRadius:"50%",filter:"blur(60px)"}}),n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center",position:"relative",zIndex:2},children:[n.jsxs("div",{children:[n.jsx(q,{children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:20,flexWrap:"wrap"},children:[n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:100,fontSize:11,fontWeight:700,background:`${p.accent}15`,border:`1px solid ${p.accent}30`,color:p.accent,textTransform:"uppercase",letterSpacing:"0.08em"},children:[n.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:[n.jsx("circle",{cx:"5",cy:"5",r:"4",stroke:p.accent,strokeWidth:"1.2"}),n.jsx("circle",{cx:"5",cy:"5",r:"1.5",fill:p.accent})]}),u.heroTag]}),n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,padding:"5px 12px",borderRadius:100,fontSize:10,fontWeight:700,background:"rgba(108,92,231,0.1)",border:"1px solid rgba(108,92,231,0.25)",color:"#a29bfe",textTransform:"uppercase",letterSpacing:"0.08em"},children:[n.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",children:[n.jsx("circle",{cx:"6",cy:"6",r:"2",fill:"#a29bfe",opacity:"0.7"}),n.jsx("path",{d:"M6 1v2M6 9v2M1 6h2M9 6h2",stroke:"#a29bfe",strokeWidth:"1.2",strokeLinecap:"round",opacity:"0.5"})]}),u.heroAiTag]})]})}),n.jsx(q,{delay:.1,children:n.jsx("h1",{style:{fontSize:48,fontWeight:800,color:w.textLight,lineHeight:1.05,letterSpacing:"-0.03em",marginBottom:20},children:n.jsx("span",{style:{background:`linear-gradient(135deg, #fff, ${p.accent})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:u.h1})})}),n.jsx(q,{delay:.2,children:n.jsx("p",{style:{fontSize:17,color:w.textMutedLight,lineHeight:1.65,marginBottom:36,maxWidth:480},children:u.heroSubtitle})}),n.jsx(q,{delay:.3,children:n.jsx(pt,{onClick:()=>s("contato"),size:"lg",children:u.heroCta})})]}),n.jsx(q,{delay:.2,direction:"right",children:n.jsx("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:380},children:n.jsxs("div",{style:{position:"relative",width:280,height:320},children:[n.jsxs("svg",{viewBox:"0 0 280 320",fill:"none",style:{position:"absolute",inset:0,width:"100%",height:"100%"},children:[n.jsx("path",{d:"M140 20L40 60v80c0 80 50 140 100 160 50-20 100-80 100-160V60L140 20z",stroke:p.accent,strokeWidth:"1.5",fill:`${p.accent}05`,opacity:"0.8",strokeLinejoin:"round"}),n.jsx("path",{d:"M140 40L60 72v68c0 65 40 112 80 130 40-18 80-65 80-130V72L140 40z",stroke:p.accent,strokeWidth:"1",fill:`${p.accent}08`,opacity:"0.5",strokeLinejoin:"round"})]}),n.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,paddingTop:20},children:[n.jsx(el,{productKey:"sentinel",size:64,showCard:!0}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%",padding:"0 40px"},children:[{label:"< 100ms",color:p.accent},{label:"6M+ Transações",color:"#a29bfe"},{label:"GPU NVIDIA",color:"#74b9ff"}].map((h,x)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 12px",borderRadius:8,background:"rgba(0,0,0,0.3)",border:`1px solid ${h.color}20`},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:h.color,flexShrink:0}}),n.jsx("span",{style:{fontSize:12,fontWeight:600,color:h.color},children:h.label})]},x))})]})]})})})]})]}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:800,margin:"0 auto",textAlign:"center"},children:[n.jsx(q,{children:n.jsx(nt,{tag:c==="en"?"What it is":"O que é",title:u.whatTitle,center:!0})}),n.jsx(q,{delay:.1,children:n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75},children:u.whatText})})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[n.jsx(nt,{title:u.benefitsTitle,center:!0}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:20},children:m.map((h,x)=>n.jsx(q,{delay:x*.08,children:n.jsxs("div",{style:{padding:"32px",borderRadius:16,background:`${p.accent}05`,border:`1px solid ${p.accent}12`,display:"flex",gap:20,alignItems:"flex-start"},children:[n.jsx("div",{style:{width:48,height:48,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",background:`${p.accent}10`,border:`1px solid ${p.accent}20`,flexShrink:0},children:h.icon}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:17,fontWeight:700,color:w.textLight,marginBottom:8,lineHeight:1.3},children:h.title}),n.jsx("p",{style:{fontSize:14,color:w.textMuted,lineHeight:1.65},children:h.desc})]})]})},x))})]})}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[n.jsx(nt,{title:u.techTitle,subtitle:u.techSubtitle,center:!0}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:u.techBullets.map((h,x)=>n.jsx(q,{delay:x*.07,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,padding:"16px 24px",borderRadius:12,background:"rgba(255,255,255,0.02)",border:`1px solid ${p.accent}12`},children:[n.jsx("div",{style:{width:40,height:40,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",background:`${p.accent}08`,border:`1px solid ${p.accent}15`,flexShrink:0},children:g[x]}),n.jsx("span",{style:{fontSize:15,fontWeight:500,color:w.textLight},children:h})]})},x))})]})}),n.jsx("section",{style:{background:w.darkAlt,padding:"100px 48px"},children:n.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[n.jsx(nt,{title:u.forWhoTitle,center:!0}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:u.forWhoItems.map((h,x)=>n.jsx(q,{delay:x*.06,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,padding:"16px 24px",borderRadius:12,background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)"},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:`${p.accent}10`,border:`1px solid ${p.accent}20`,flexShrink:0},children:n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:n.jsx("path",{d:"M2 6l3 3 5-5",stroke:p.accent,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),n.jsx("span",{style:{fontSize:15,color:w.textMutedLight,lineHeight:1.5},children:h})]})},x))})]})}),n.jsx("section",{style:{background:w.primary,padding:"100px 48px"},children:n.jsx("div",{style:{maxWidth:700,margin:"0 auto"},children:n.jsx(q,{children:n.jsxs("div",{style:{padding:40,borderRadius:20,background:`linear-gradient(135deg, ${p.accent}06, ${p.accent}02)`,border:`1px solid ${p.accent}20`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[n.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:p.accent,boxShadow:`0 0 12px ${p.accent}60`}}),n.jsx("h2",{style:{fontSize:24,fontWeight:700,color:w.textLight},children:u.statusTitle})]}),n.jsx("p",{style:{fontSize:16,color:w.textMutedLight,lineHeight:1.75,marginBottom:28},children:u.statusText}),n.jsx(pt,{onClick:()=>s("contato"),primary:!0,children:u.statusCta})]})})})}),n.jsxs("section",{style:{background:`linear-gradient(135deg, ${w.darkAlt}, #0a1515)`,padding:"100px 48px",textAlign:"center",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,height:400,background:`radial-gradient(circle, ${p.accent}07, transparent)`,borderRadius:"50%",filter:"blur(80px)"}}),n.jsxs("div",{style:{position:"relative",zIndex:2},children:[n.jsx(q,{children:n.jsx("h2",{style:{fontSize:40,fontWeight:700,color:w.textLight,marginBottom:16,letterSpacing:"-0.02em"},children:u.ctaFinal})}),n.jsx(q,{delay:.1,children:n.jsx(pt,{onClick:()=>s("contato"),size:"lg",children:u.ctaFinalBtn})})]})]})]})}const Jf={beneficios:{key:"beneficios",title:"JUST Benefits: benefícios flexíveis construídos para operar em escala",subtitle:"Arranjo aberto, fechado ou híbrido. Múltiplos saldos com regras customizáveis e controle total.",model1:{title:"Arranjo aberto",desc:"Aceitação ampla, bandeiras tradicionais, escala e capilaridade."},model2:{title:"Arranjo fechado",desc:"Processamento próprio, ecossistemas controlados, governança total."},capabilities:["Múltiplos saldos","Regras customizáveis","Controle de uso","Compliance","Conciliação","Escala"]},frotas:{key:"frotas",title:"JUST Fleet: gestão de frotas com controle financeiro real",subtitle:"Abastecimento, pedágio, manutenção. Tudo em um único produto financeiro.",model1:{title:"Rede aberta",desc:"Postos e fornecedores com ampla aceitação nacional."},model2:{title:"Rede própria",desc:"Credenciados específicos, controle e governança total."},capabilities:["Controle por veículo","Regras em tempo real","Despesas por tipo","Monitoramento","Conciliação","Escala"]},banking:{key:"banking",title:"JUST Banking: banking digital pronto para operar",subtitle:"Conta, cartão, PIX, transferências. Integrado com BaaS.",model1:{title:"Banking completo",desc:"Conta digital, cartão, PIX, transferências, boletos."},model2:{title:"Banking embarcado",desc:"Funcionalidades bancárias integradas ao produto existente."},capabilities:["Conta digital","Cartão","PIX","Transferências","Crédito","Sua marca"]},despesas:{key:"despesas",title:"JUST Expense: despesas corporativas com controle total",subtitle:"Cartões corporativos com políticas, limites e conciliação.",model1:{title:"Arranjo aberto",desc:"Flexibilidade e ampla aceitação para equipes distribuídas."},model2:{title:"Arranjo fechado",desc:"Regras rígidas e controle operacional máximo."},capabilities:["Cartões","Políticas","Limites","Real-time","Conciliação","Relatórios"]},antecipacao:{key:"antecipacao",title:"JUST Credit: produtos de crédito sob medida",subtitle:"Private label, antecipação e recebíveis integrados ao seu negócio.",model1:{title:"Private label",desc:"Cartão próprio com regras customizáveis e rede controlada."},model2:{title:"Crédito (CCB)",desc:"Emissão de CCB, crédito em conta, operação regulada."},capabilities:["Private label","Antecipação","Recebíveis","Limites","Compliance","Escala"]},"sob-demanda":{key:"sob-demanda",title:"JUST Custom: projetos sob demanda, do zero à operação",subtitle:"Produto que não cabe em prateleira? Arquitetamos sob medida.",model1:{title:"Custom",desc:"Cada componente desenhado para o cenário único."},model2:{title:"Híbrido",desc:"Combinação de arranjo aberto e fechado."},capabilities:["Arquitetura","Multi-provider","Híbrido","Go-live rápido","Evolução","Diagnóstico"]}},k1=A.lazy(()=>Eo(()=>import("./ConteudosPage-wMl5x06U.js"),__vite__mapDeps([0,1]))),z1=A.lazy(()=>Eo(()=>import("./ArticlePage-CbvKqRLQ.js"),__vite__mapDeps([2,3,1]))),E1=A.lazy(()=>Eo(()=>import("./CategoriaPage-DlQKfAdS.js"),__vite__mapDeps([4,1]))),C1=A.lazy(()=>Eo(()=>import("./AutorPage-xGs2pn0D.js"),__vite__mapDeps([5,1,3]))),A1={tecnologia:"stack","politica-de-privacidade":"privacidade","produtos/beneficios":"beneficios","produtos/frotas":"frotas","produtos/banking":"banking","produtos/despesas":"despesas","produtos/antecipacao":"antecipacao","produtos/sob-demanda":"sob-demanda","authors/gabriel-pires":"autores/gabriel-pires","authors/time-just":"autores/time-just"};function N1(){const r=lm(),c=Ft(),[u,s]=A.useState(()=>new URLSearchParams(window.location.search).get("lang")||localStorage.getItem("just-lang")||"pt-BR"),p=S=>{s(S),localStorage.setItem("just-lang",S);const U=new URLSearchParams(c.search);S!=="pt-BR"?U.set("lang",S):U.delete("lang");const _=U.toString();r(c.pathname+(_?"?"+_:""),{replace:!0})},m=S=>{S==="contato"&&Qt("contact_cta_click",{source:"internal_navigation",from_path:c.pathname});const U=new URLSearchParams(c.search).toString(),_=(S==="home"?"/":`/${S}`)+(U?"?"+U:"");r(_),window.scrollTo({top:0,behavior:"smooth"})},g=c.pathname.replace(/^\/+|\/+$/g,"")||"home",h=A1[g]||g,x=h==="home"?[]:h.split("/"),y=x[0]||"home";A.useEffect(()=>{h==="conteudos"||h.startsWith("conteudos/")||h.startsWith("autores/")||r1(o1(h,u),u)},[h,u]),A.useEffect(()=>{h1()},[]),A.useEffect(()=>{const S=`${c.pathname}${c.search}${c.hash}`;g1(S),x1(S),c.pathname==="/contato"&&Qt("contact_page_view",{path:S})},[c.pathname,c.search,c.hash]),A.useEffect(()=>{const S=U=>{const _=U.target.closest?.("a[href]");if(!_)return;const Y=_.getAttribute("href")||"",H=_.textContent?.trim().slice(0,80)||_.getAttribute("aria-label")||"";if(Y.includes("wa.me")||Y.includes("api.whatsapp.com")){Qt("whatsapp_click",{source:_.title||H||"link",from_path:c.pathname});return}if(Y==="/contato"||Y.startsWith("/contato?")){Qt("contact_cta_click",{source:H||"link",from_path:c.pathname});return}if(Y.includes("linkedin.com/in/")){Qt("author_linkedin_click",{source:H||"linkedin",from_path:c.pathname,href:Y});return}Y.includes("linkedin.com/company/")&&Qt("company_linkedin_click",{source:H||"linkedin",from_path:c.pathname,href:Y})};return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[c.pathname]);const T=()=>h==="home"?n.jsx($f,{setPage:m,lang:u}):h==="sobre"?n.jsx(b1,{setPage:m,lang:u}):h==="stack"?n.jsx(Ux,{children:n.jsx(y1,{setPage:m,lang:u})}):h==="cases"?n.jsx(v1,{setPage:m,lang:u}):h==="contato"?n.jsx(j1,{lang:u}):h==="privacidade"?n.jsx(S1,{lang:u}):h==="sentinel"?n.jsx(T1,{setPage:m,lang:u}):h==="conteudos"?n.jsx(k1,{}):x[0]==="conteudos"&&x[1]==="categoria"?n.jsx(E1,{slug:x[2]}):x[0]==="conteudos"&&x[1]?n.jsx(z1,{slug:x[1]}):x[0]==="autores"&&x[1]?n.jsx(C1,{slug:x[1]}):Jf[h]?n.jsx(w1,{setPage:m,config:Jf[h],lang:u}):n.jsx($f,{setPage:m,lang:u});return n.jsx(pm.Provider,{value:{lang:u,setLang:p},children:n.jsxs("div",{style:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif",background:w.primary,minHeight:"100vh",WebkitFontSmoothing:"antialiased"},children:[n.jsx("style",{children:`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          html, body { overflow-x: hidden; width: 100%; background: #0f112b; }
          ::selection { background: rgba(244,85,70,0.3); }
          input:focus, textarea:focus, select:focus { border-color: ${w.cta} !important; }
          button:focus { outline: none; }
          .desktop-nav .nav-link:hover { color: ${w.textLight} !important; }
          .desktop-nav .nav-link-active::after {
            content: "";
            position: absolute;
            left: 50%;
            bottom: -15px;
            width: 26px;
            height: 1px;
            transform: translateX(-50%);
            background: ${w.cta};
            border-radius: 999px;
          }
          .hero-title-mobile { display: none; }
          .hero-title-desktop { display: inline; }

@media (max-width: 900px) {
  .desktop-nav { display: none !important; }
  .mobile-menu-btn { display: flex !important; }
  header { padding: 0 20px !important; }
  .depara-row {
    grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr) !important;
    gap: 0 !important;
  }
  .depara-labels,
  .comp-row {
    grid-template-columns: minmax(0, 1fr) 36px minmax(0, 1fr) !important;
  }
  .comp-row > div {
    min-width: 0 !important;
  }
  .comp-row h4,
  .comp-row p {
    overflow-wrap: anywhere !important;
  }
}
@media (max-width: 520px) {
  .depara-row {
    grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr) !important;
  }
  .depara-labels,
  .comp-row {
    grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr) !important;
  }
  .depara-labels span {
    font-size: 10px !important;
    padding: 7px 10px !important;
  }
  .comp-row > div {
    padding: 16px 10px !important;
    gap: 9px !important;
  }
  .comp-row h4 {
    font-size: 12px !important;
    line-height: 1.35 !important;
  }
}
@media (max-width: 900px) {
  .hero-grid > div:last-child {
    display: none !important;
  }
  .section-hero {
    min-height: auto !important;
    display: flex !important;
    align-items: flex-start !important;
    padding: 116px 28px 46px !important;
  }
  .hero-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 0 !important;
    width: 100% !important;
    min-height: auto !important;
    align-items: start !important;
  }
  .hero-grid > div:first-child {
    width: 100% !important;
    max-width: 680px !important;
    min-width: 0 !important;
    min-height: auto !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
    padding-top: 0 !important;
  }
  .hero-eyebrow span {
    font-size: 12px !important;
    padding: 8px 16px !important;
    letter-spacing: 0.1em !important;
  }
  .hero-title {
    font-size: clamp(58px, 9.4vw, 70px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.055em !important;
    margin: 28px 0 22px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow-wrap: break-word !important;
  }
  .hero-grid p {
    max-width: 34ch !important;
    font-size: 17px !important;
    line-height: 1.58 !important;
    margin-bottom: 28px !important;
  }
  .flow-steps-row {
    display: none !important;
  }
  .hero-cta-row {
    flex-wrap: wrap !important;
    gap: 14px !important;
  }
  .hero-cta-row button {
    font-size: 15px !important;
    padding: 14px 24px !important;
  }
  .section-social-proof {
    padding: 28px 24px 40px !important;
  }
  .section-why-just {
    padding: 84px 28px !important;
  }
  .why-just-title {
    font-size: clamp(58px, 9.4vw, 70px) !important;
    line-height: 1.02 !important;
    letter-spacing: -0.055em !important;
  }
  .just-pillars-grid {
    grid-template-columns: 1fr !important;
  }
  .just-pillar {
    min-height: auto !important;
    padding: 30px 0 34px !important;
    border-right: none !important;
    border-bottom: 1px solid ${w.borderLight} !important;
  }
  .just-pillars-grid > div:last-child .just-pillar {
    border-bottom: none !important;
  }
  .just-pillar h3 {
    font-size: 34px !important;
  }
  .social-logos {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(72px, 1fr)) !important;
    gap: 22px 18px !important;
    max-width: 380px !important;
    margin: 0 auto !important;
    justify-items: center !important;
    align-items: center !important;
  }
  .social-logos .partner-logo {
    width: 86px !important;
    height: 26px !important;
    max-width: 100% !important;
    object-fit: contain !important;
  }
  .site-footer {
    padding: 58px 24px 34px !important;
  }
  .site-footer-main {
    grid-template-columns: 1fr 1fr !important;
    gap: 38px 34px !important;
  }
  .site-footer-brand {
    grid-column: 1 / -1 !important;
    text-align: center !important;
  }
  .site-footer-brand p {
    max-width: 420px !important;
    margin: 0 auto !important;
    font-size: 15px !important;
    line-height: 1.7 !important;
  }
  .site-footer-main h4 {
    margin-bottom: 14px !important;
  }
  .site-footer-products button {
    align-items: center !important;
    gap: 10px !important;
    line-height: 1.45 !important;
    max-width: 100% !important;
  }
  .site-footer-company button,
  .site-footer-contact a,
  .site-footer-contact span {
    font-size: 14px !important;
    line-height: 1.75 !important;
  }
  .site-footer-contact {
    grid-column: 1 / -1 !important;
  }
  .site-footer-bottom {
    margin-top: 36px !important;
  }
  .site-footer-partners {
    justify-content: center !important;
    gap: 24px 34px !important;
  }
  .site-footer-partner-group {
    text-align: center !important;
  }
  .site-footer-partner-logos {
    justify-content: center !important;
    flex-wrap: wrap !important;
    gap: 16px !important;
  }
  .privacy-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
  }
  .privacy-aside {
    position: static !important;
  }
  .article-layout {
    grid-template-columns: 1fr !important;
  }
  .toc-mobile-toggle {
    display: block !important;
  }
  .toc-panel {
    display: none;
  }
}
@media (max-width: 520px) {
  .section-hero {
    min-height: auto !important;
    padding: 104px 24px 42px !important;
  }
  .hero-grid {
    min-height: auto !important;
  }
  .hero-grid > div:first-child {
    min-height: auto !important;
    padding-top: 0 !important;
  }
  .hero-eyebrow span {
    font-size: 12px !important;
    padding: 8px 15px !important;
    letter-spacing: 0.09em !important;
  }
  .hero-title {
    font-size: clamp(46px, 12.6vw, 50px) !important;
    line-height: 0.98 !important;
    letter-spacing: -0.058em !important;
    margin: 30px 0 22px !important;
    width: 100% !important;
    max-width: calc(100vw - 48px) !important;
    overflow-wrap: break-word !important;
  }
  .hero-title-desktop {
    display: none !important;
  }
  .hero-title-mobile {
    display: inline !important;
  }
  .hero-grid p {
    font-size: 16px !important;
    line-height: 1.55 !important;
    max-width: 33ch !important;
    margin-bottom: 26px !important;
  }
  .hero-cta-row {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: 10px !important;
    max-width: 306px !important;
  }
  .hero-cta-row button {
    width: 100% !important;
    justify-content: center !important;
    padding: 13px 22px !important;
  }
  .section-social-proof {
    padding: 24px 24px 42px !important;
  }
  .section-why-just {
    padding: 76px 24px !important;
  }
  .why-just-title {
    font-size: clamp(52px, 13.8vw, 59px) !important;
    line-height: 1.03 !important;
    letter-spacing: -0.058em !important;
  }
  .just-pillar {
    padding: 28px 0 32px !important;
  }
  .just-pillar h3 {
    font-size: 30px !important;
    margin-bottom: 18px !important;
  }
  .just-pillar p {
    font-size: 15px !important;
  }
  .social-logos {
    grid-template-columns: repeat(3, minmax(64px, 1fr)) !important;
    gap: 22px 14px !important;
    max-width: 330px !important;
  }
  .social-logos .partner-logo {
    width: 72px !important;
    height: 22px !important;
    max-width: 100% !important;
  }
  .site-footer {
    padding: 56px 24px 32px !important;
  }
  .site-footer-main {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
    text-align: center !important;
  }
  .site-footer-products button {
    justify-content: center !important;
    margin: 0 auto !important;
    width: fit-content !important;
  }
  .site-footer-company button {
    margin: 0 auto !important;
  }
  .site-footer-contact {
    text-align: center !important;
  }
  .site-footer-contact a,
  .site-footer-contact span {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 300px !important;
    white-space: pre-line !important;
  }
  .site-footer-partners {
    flex-direction: column !important;
    align-items: center !important;
  }
  .site-footer-partner-group {
    width: 100% !important;
  }
  .site-footer-bottom-row {
    flex-direction: column !important;
    justify-content: center !important;
    text-align: center !important;
  }
}
.content-article {
  font-size: 18px;
  line-height: 1.78;
  min-width: 0;
  overflow-wrap: break-word;
}
.content-article h1 {
  display: none;
}
.content-article h2 {
  color: ${wt.navy};
  font-size: 34px;
  line-height: 1.18;
  margin: 52px 0 18px;
  scroll-margin-top: 112px;
}
.content-article h3 {
  color: ${wt.navy};
  font-size: 24px;
  line-height: 1.25;
  margin: 36px 0 14px;
}
.content-article h2 a,
.content-article h3 a {
  color: inherit;
  text-decoration: none;
}
.content-article p,
.content-article li {
  color: ${wt.text};
}
.content-article p {
  margin: 0 0 22px;
}
.content-article a {
  color: ${wt.red};
  font-weight: 700;
  text-underline-offset: 3px;
}
.content-article figure {
  margin: 34px 0;
}
.content-article figure img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 8px;
  border: 1px solid ${wt.border};
  box-shadow: 0 18px 46px rgba(16,36,63,0.08);
}
.content-article figcaption {
  margin-top: 10px;
  color: ${wt.muted};
  font-size: 13px;
  line-height: 1.45;
}
.content-article table {
  width: 100%;
  border-collapse: collapse;
  margin: 30px 0;
  overflow: hidden;
  border-radius: 8px;
}
.content-article pre {
  margin: 30px 0;
  padding: 18px 20px;
  border-radius: 8px;
  border: 1px solid ${wt.border};
  background: ${wt.surfaceSoft};
  color: ${wt.navy};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.content-article code {
  overflow-wrap: anywhere;
}
.content-article th,
.content-article td {
  border: 1px solid ${wt.border};
  padding: 14px 16px;
  text-align: left;
}
.content-article th {
  color: ${wt.navy};
  background: ${wt.surfaceSoft};
}
.content-article td {
  color: ${wt.text};
  background: #ffffff;
}
@media (max-width: 900px) {
  .article-page-header {
    padding: 118px 28px 48px !important;
  }
  .article-breadcrumbs {
    font-size: 12px !important;
    line-height: 1.6 !important;
    margin-bottom: 20px !important;
    overflow-wrap: anywhere !important;
  }
  .article-category-kicker {
    margin-bottom: 14px !important;
  }
  .article-page-title {
    font-size: clamp(38px, 8vw, 48px) !important;
    line-height: 1.04 !important;
    max-width: 100% !important;
    margin-bottom: 18px !important;
    overflow-wrap: anywhere !important;
  }
  .article-page-description {
    font-size: 17px !important;
    line-height: 1.62 !important;
    max-width: 100% !important;
    margin-bottom: 26px !important;
  }
  .article-page-meta {
    gap: 20px !important;
    align-items: flex-start !important;
  }
  .article-page-body {
    padding: 54px 28px 80px !important;
  }
  .content-hub-hero {
    padding: 118px 28px 56px !important;
  }
  .content-hub-hero-grid {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 32px !important;
    align-items: start !important;
  }
  .content-hub-title {
    font-size: clamp(44px, 11.4vw, 58px) !important;
    line-height: 1.02 !important;
    max-width: 9ch !important;
    margin-bottom: 20px !important;
  }
  .content-hub-subtitle {
    font-size: 17px !important;
    line-height: 1.6 !important;
    max-width: 36ch !important;
  }
  .content-search {
    width: 100% !important;
    max-width: 520px !important;
  }
  .content-hub-body {
    padding: 54px 28px 80px !important;
  }
  .content-hub-layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 34px !important;
  }
  .content-hub-layout > main {
    min-width: 0 !important;
  }
  .content-sidebar {
    order: -1 !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 16px !important;
  }
  .content-sidebar-card {
    padding: 18px !important;
  }
  .article-card {
    min-height: auto !important;
    padding: 24px !important;
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }
  .article-card h2 {
    font-size: 23px !important;
    line-height: 1.14 !important;
    max-width: 100% !important;
    overflow-wrap: anywhere !important;
  }
  .article-card h2 a {
    display: block !important;
    max-width: 100% !important;
    overflow-wrap: anywhere !important;
  }
  .article-card-featured h2 {
    font-size: 30px !important;
    line-height: 1.1 !important;
  }
  .article-layout {
    grid-template-columns: minmax(0, 1fr) !important;
    gap: 28px !important;
  }
  .article-layout > aside,
  .article-layout > main,
  .article-main {
    min-width: 0 !important;
  }
  .answer-box,
  .source-box {
    margin-bottom: 28px !important;
  }
  .answer-box h2,
  .source-box h2 {
    font-size: 20px !important;
    line-height: 1.25 !important;
  }
  .content-article {
    font-size: 17px !important;
    line-height: 1.72 !important;
  }
  .content-article h2 {
    font-size: 29px !important;
    line-height: 1.16 !important;
    margin: 42px 0 16px !important;
    overflow-wrap: anywhere !important;
  }
  .content-article h3 {
    font-size: 22px !important;
    line-height: 1.24 !important;
    margin: 30px 0 12px !important;
    overflow-wrap: anywhere !important;
  }
  .content-article table {
    display: block !important;
    overflow-x: auto !important;
    white-space: nowrap !important;
    -webkit-overflow-scrolling: touch !important;
  }
  .content-article th,
  .content-article td {
    min-width: 150px !important;
  }
}
@media (max-width: 520px) {
  .article-page-header {
    padding: 104px 24px 38px !important;
  }
  .article-page-body {
    padding: 40px 24px 68px !important;
    overflow: hidden !important;
  }
  .article-empty-state {
    padding: 120px 24px 56px !important;
  }
  .article-breadcrumbs {
    font-size: 11px !important;
    margin-bottom: 18px !important;
  }
  .article-category-kicker {
    font-size: 11px !important;
    letter-spacing: 0.09em !important;
  }
  .article-page-title {
    font-size: clamp(34px, 10.2vw, 40px) !important;
    line-height: 1.05 !important;
    letter-spacing: -0.04em !important;
    width: 100% !important;
  }
  .article-page-description {
    font-size: 16px !important;
    line-height: 1.58 !important;
    margin-bottom: 22px !important;
  }
  .article-page-meta {
    display: grid !important;
    gap: 16px !important;
  }
  .content-hub-hero {
    padding: 106px 24px 44px !important;
    overflow: hidden !important;
  }
  .content-hub-hero-grid,
  .content-hub-layout {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  .content-hub-kicker {
    font-size: 11px !important;
    letter-spacing: 0.09em !important;
    margin-bottom: 16px !important;
  }
  .content-hub-title {
    font-size: clamp(42px, 12vw, 48px) !important;
    max-width: 8.5ch !important;
  }
  .content-hub-subtitle {
    font-size: 16px !important;
    max-width: 25ch !important;
  }
  .content-hub-body {
    padding: 44px 24px 72px !important;
    overflow: hidden !important;
  }
  .content-hub-layout {
    gap: 30px !important;
  }
  .content-sidebar {
    order: 0 !important;
    grid-template-columns: 1fr !important;
    gap: 14px !important;
  }
  .content-featured {
    margin-bottom: 38px !important;
  }
  .content-section-label {
    margin-bottom: 12px !important;
  }
  .content-list-title {
    font-size: 28px !important;
  }
  .content-card-grid {
    grid-template-columns: minmax(0, 1fr) !important;
  }
  .article-card {
    padding: 22px !important;
    width: calc(100vw - 48px) !important;
    max-width: calc(100vw - 48px) !important;
  }
  .article-card h2,
  .article-card-featured h2 {
    display: block !important;
    font-size: 20px !important;
    line-height: 1.2 !important;
    width: min(100%, 24ch) !important;
    max-width: 24ch !important;
    min-width: 0 !important;
    overflow-wrap: anywhere !important;
  }
  .article-card h2 a {
    display: inline !important;
    min-width: 0 !important;
  }
  .article-card p {
    font-size: 14px !important;
  }
  .article-card-meta {
    gap: 8px 10px !important;
    font-size: 12px !important;
    line-height: 1.5 !important;
  }
  .content-search,
  .content-search input {
    max-width: 100% !important;
    min-width: 0 !important;
  }
  .article-layout {
    gap: 22px !important;
  }
  .answer-box {
    padding: 20px 18px !important;
    margin-bottom: 24px !important;
  }
  .source-box {
    margin-top: 34px !important;
    padding-top: 20px !important;
  }
  .content-article {
    font-size: 16px !important;
    line-height: 1.68 !important;
  }
  .content-article p {
    margin-bottom: 18px !important;
  }
  .content-article h2 {
    font-size: 26px !important;
    line-height: 1.14 !important;
    margin: 36px 0 14px !important;
  }
  .content-article h3 {
    font-size: 20px !important;
    line-height: 1.22 !important;
    margin: 26px 0 10px !important;
  }
  .content-article pre {
    margin: 24px 0 !important;
    padding: 14px 16px !important;
    font-size: 13px !important;
  }
  .content-article th,
  .content-article td {
    padding: 12px 14px !important;
    font-size: 14px !important;
  }
}
`}),n.jsx(s1,{page:y,setPage:m,lang:u}),n.jsx("main",{children:n.jsx(A.Suspense,{fallback:n.jsx("div",{style:{minHeight:"80vh",background:w.primary}}),children:T()})}),n.jsx(c1,{setPage:m,lang:u}),y!=="contato"&&n.jsx("a",{href:"https://wa.me/5511971874759?text=Ola%2C%20acessei%20o%20site%20da%20JUST%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",target:"_blank",rel:"noopener noreferrer",title:"Fale conosco pelo WhatsApp",style:{position:"fixed",bottom:24,right:24,width:48,height:48,borderRadius:"50%",background:"#25D366",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",zIndex:1e3,transition:"transform 0.2s ease, box-shadow 0.2s ease",textDecoration:"none"},onMouseEnter:S=>{S.currentTarget.style.transform="scale(1.08)",S.currentTarget.style.boxShadow="0 6px 24px rgba(37,211,102,0.35)"},onMouseLeave:S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.25)"},children:n.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"#fff",children:n.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})})}function R1(){return n.jsx(Tx,{children:n.jsx(N1,{})})}ag.createRoot(document.getElementById("root")).render(n.jsx(A.StrictMode,{children:n.jsx(R1,{})}));export{pt as B,wt as C,ym as D,Fx as S,w as T,r1 as a,Kx as b,bm as c,Ya as d,xm as e,e1 as f,Uf as g,n as j,A as r,Qt as t};
