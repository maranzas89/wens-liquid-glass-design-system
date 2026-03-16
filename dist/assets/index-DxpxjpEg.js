(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))h(x);new MutationObserver(x=>{for(const m of x)if(m.type==="childList")for(const g of m.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&h(g)}).observe(document,{childList:!0,subtree:!0});function c(x){const m={};return x.integrity&&(m.integrity=x.integrity),x.referrerPolicy&&(m.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?m.credentials="include":x.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(x){if(x.ep)return;x.ep=!0;const m=c(x);fetch(x.href,m)}})();function uu(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ga={exports:{}},Un={},ba={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Sx(){if(Ld)return ie;Ld=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),k=Symbol.iterator;function z(v){return v===null||typeof v!="object"?null:(v=k&&v[k]||v["@@iterator"],typeof v=="function"?v:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,R={};function G(v,D,le){this.props=v,this.context=D,this.refs=R,this.updater=le||$}G.prototype.isReactComponent={},G.prototype.setState=function(v,D){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,D,"setState")},G.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function Z(){}Z.prototype=G.prototype;function J(v,D,le){this.props=v,this.context=D,this.refs=R,this.updater=le||$}var re=J.prototype=new Z;re.constructor=J,V(re,G.prototype),re.isPureReactComponent=!0;var ae=Array.isArray,Ne=Object.prototype.hasOwnProperty,ke={current:null},fe={key:!0,ref:!0,__self:!0,__source:!0};function ne(v,D,le){var oe,xe={},me=null,je=null;if(D!=null)for(oe in D.ref!==void 0&&(je=D.ref),D.key!==void 0&&(me=""+D.key),D)Ne.call(D,oe)&&!fe.hasOwnProperty(oe)&&(xe[oe]=D[oe]);var be=arguments.length-2;if(be===1)xe.children=le;else if(1<be){for(var Me=Array(be),ht=0;ht<be;ht++)Me[ht]=arguments[ht+2];xe.children=Me}if(v&&v.defaultProps)for(oe in be=v.defaultProps,be)xe[oe]===void 0&&(xe[oe]=be[oe]);return{$$typeof:o,type:v,key:me,ref:je,props:xe,_owner:ke.current}}function ge(v,D){return{$$typeof:o,type:v.type,key:D,ref:v.ref,props:v.props,_owner:v._owner}}function we(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function K(v){var D={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(le){return D[le]})}var Le=/\/+/g;function $e(v,D){return typeof v=="object"&&v!==null&&v.key!=null?K(""+v.key):D.toString(36)}function Ue(v,D,le,oe,xe){var me=typeof v;(me==="undefined"||me==="boolean")&&(v=null);var je=!1;if(v===null)je=!0;else switch(me){case"string":case"number":je=!0;break;case"object":switch(v.$$typeof){case o:case d:je=!0}}if(je)return je=v,xe=xe(je),v=oe===""?"."+$e(je,0):oe,ae(xe)?(le="",v!=null&&(le=v.replace(Le,"$&/")+"/"),Ue(xe,D,le,"",function(ht){return ht})):xe!=null&&(we(xe)&&(xe=ge(xe,le+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(Le,"$&/")+"/")+v)),D.push(xe)),1;if(je=0,oe=oe===""?".":oe+":",ae(v))for(var be=0;be<v.length;be++){me=v[be];var Me=oe+$e(me,be);je+=Ue(me,D,le,Me,xe)}else if(Me=z(v),typeof Me=="function")for(v=Me.call(v),be=0;!(me=v.next()).done;)me=me.value,Me=oe+$e(me,be++),je+=Ue(me,D,le,Me,xe);else if(me==="object")throw D=String(v),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return je}function nt(v,D,le){if(v==null)return v;var oe=[],xe=0;return Ue(v,oe,"","",function(me){return D.call(le,me,xe++)}),oe}function P(v){if(v._status===-1){var D=v._result;D=D(),D.then(function(le){(v._status===0||v._status===-1)&&(v._status=1,v._result=le)},function(le){(v._status===0||v._status===-1)&&(v._status=2,v._result=le)}),v._status===-1&&(v._status=0,v._result=D)}if(v._status===1)return v._result.default;throw v._result}var Q={current:null},F={transition:null},W={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:F,ReactCurrentOwner:ke};function U(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:nt,forEach:function(v,D,le){nt(v,function(){D.apply(this,arguments)},le)},count:function(v){var D=0;return nt(v,function(){D++}),D},toArray:function(v){return nt(v,function(D){return D})||[]},only:function(v){if(!we(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ie.Component=G,ie.Fragment=c,ie.Profiler=x,ie.PureComponent=J,ie.StrictMode=h,ie.Suspense=y,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,ie.act=U,ie.cloneElement=function(v,D,le){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var oe=V({},v.props),xe=v.key,me=v.ref,je=v._owner;if(D!=null){if(D.ref!==void 0&&(me=D.ref,je=ke.current),D.key!==void 0&&(xe=""+D.key),v.type&&v.type.defaultProps)var be=v.type.defaultProps;for(Me in D)Ne.call(D,Me)&&!fe.hasOwnProperty(Me)&&(oe[Me]=D[Me]===void 0&&be!==void 0?be[Me]:D[Me])}var Me=arguments.length-2;if(Me===1)oe.children=le;else if(1<Me){be=Array(Me);for(var ht=0;ht<Me;ht++)be[ht]=arguments[ht+2];oe.children=be}return{$$typeof:o,type:v.type,key:xe,ref:me,props:oe,_owner:je}},ie.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:m,_context:v},v.Consumer=v},ie.createElement=ne,ie.createFactory=function(v){var D=ne.bind(null,v);return D.type=v,D},ie.createRef=function(){return{current:null}},ie.forwardRef=function(v){return{$$typeof:j,render:v}},ie.isValidElement=we,ie.lazy=function(v){return{$$typeof:_,_payload:{_status:-1,_result:v},_init:P}},ie.memo=function(v,D){return{$$typeof:b,type:v,compare:D===void 0?null:D}},ie.startTransition=function(v){var D=F.transition;F.transition={};try{v()}finally{F.transition=D}},ie.unstable_act=U,ie.useCallback=function(v,D){return Q.current.useCallback(v,D)},ie.useContext=function(v){return Q.current.useContext(v)},ie.useDebugValue=function(){},ie.useDeferredValue=function(v){return Q.current.useDeferredValue(v)},ie.useEffect=function(v,D){return Q.current.useEffect(v,D)},ie.useId=function(){return Q.current.useId()},ie.useImperativeHandle=function(v,D,le){return Q.current.useImperativeHandle(v,D,le)},ie.useInsertionEffect=function(v,D){return Q.current.useInsertionEffect(v,D)},ie.useLayoutEffect=function(v,D){return Q.current.useLayoutEffect(v,D)},ie.useMemo=function(v,D){return Q.current.useMemo(v,D)},ie.useReducer=function(v,D,le){return Q.current.useReducer(v,D,le)},ie.useRef=function(v){return Q.current.useRef(v)},ie.useState=function(v){return Q.current.useState(v)},ie.useSyncExternalStore=function(v,D,le){return Q.current.useSyncExternalStore(v,D,le)},ie.useTransition=function(){return Q.current.useTransition()},ie.version="18.3.1",ie}var Pd;function La(){return Pd||(Pd=1,ba.exports=Sx()),ba.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Cx(){if(Td)return Un;Td=1;var o=La(),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,x=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function g(j,y,b){var _,k={},z=null,$=null;b!==void 0&&(z=""+b),y.key!==void 0&&(z=""+y.key),y.ref!==void 0&&($=y.ref);for(_ in y)h.call(y,_)&&!m.hasOwnProperty(_)&&(k[_]=y[_]);if(j&&j.defaultProps)for(_ in y=j.defaultProps,y)k[_]===void 0&&(k[_]=y[_]);return{$$typeof:d,type:j,key:z,ref:$,props:k,_owner:x.current}}return Un.Fragment=c,Un.jsx=g,Un.jsxs=g,Un}var Fd;function zx(){return Fd||(Fd=1,ga.exports=Cx()),ga.exports}var e=zx(),ol={},va={exports:{}},ct={},wa={exports:{}},ja={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Mx(){return Rd||(Rd=1,(function(o){function d(F,W){var U=F.length;F.push(W);e:for(;0<U;){var v=U-1>>>1,D=F[v];if(0<x(D,W))F[v]=W,F[U]=D,U=v;else break e}}function c(F){return F.length===0?null:F[0]}function h(F){if(F.length===0)return null;var W=F[0],U=F.pop();if(U!==W){F[0]=U;e:for(var v=0,D=F.length,le=D>>>1;v<le;){var oe=2*(v+1)-1,xe=F[oe],me=oe+1,je=F[me];if(0>x(xe,U))me<D&&0>x(je,xe)?(F[v]=je,F[me]=U,v=me):(F[v]=xe,F[oe]=U,v=oe);else if(me<D&&0>x(je,U))F[v]=je,F[me]=U,v=me;else break e}}return W}function x(F,W){var U=F.sortIndex-W.sortIndex;return U!==0?U:F.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;o.unstable_now=function(){return m.now()}}else{var g=Date,j=g.now();o.unstable_now=function(){return g.now()-j}}var y=[],b=[],_=1,k=null,z=3,$=!1,V=!1,R=!1,G=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(F){for(var W=c(b);W!==null;){if(W.callback===null)h(b);else if(W.startTime<=F)h(b),W.sortIndex=W.expirationTime,d(y,W);else break;W=c(b)}}function ae(F){if(R=!1,re(F),!V)if(c(y)!==null)V=!0,P(Ne);else{var W=c(b);W!==null&&Q(ae,W.startTime-F)}}function Ne(F,W){V=!1,R&&(R=!1,Z(ne),ne=-1),$=!0;var U=z;try{for(re(W),k=c(y);k!==null&&(!(k.expirationTime>W)||F&&!K());){var v=k.callback;if(typeof v=="function"){k.callback=null,z=k.priorityLevel;var D=v(k.expirationTime<=W);W=o.unstable_now(),typeof D=="function"?k.callback=D:k===c(y)&&h(y),re(W)}else h(y);k=c(y)}if(k!==null)var le=!0;else{var oe=c(b);oe!==null&&Q(ae,oe.startTime-W),le=!1}return le}finally{k=null,z=U,$=!1}}var ke=!1,fe=null,ne=-1,ge=5,we=-1;function K(){return!(o.unstable_now()-we<ge)}function Le(){if(fe!==null){var F=o.unstable_now();we=F;var W=!0;try{W=fe(!0,F)}finally{W?$e():(ke=!1,fe=null)}}else ke=!1}var $e;if(typeof J=="function")$e=function(){J(Le)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,nt=Ue.port2;Ue.port1.onmessage=Le,$e=function(){nt.postMessage(null)}}else $e=function(){G(Le,0)};function P(F){fe=F,ke||(ke=!0,$e())}function Q(F,W){ne=G(function(){F(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_continueExecution=function(){V||$||(V=!0,P(Ne))},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return z},o.unstable_getFirstCallbackNode=function(){return c(y)},o.unstable_next=function(F){switch(z){case 1:case 2:case 3:var W=3;break;default:W=z}var U=z;z=W;try{return F()}finally{z=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(F,W){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var U=z;z=F;try{return W()}finally{z=U}},o.unstable_scheduleCallback=function(F,W,U){var v=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,F){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=U+D,F={id:_++,callback:W,priorityLevel:F,startTime:U,expirationTime:D,sortIndex:-1},U>v?(F.sortIndex=U,d(b,F),c(y)===null&&F===c(b)&&(R?(Z(ne),ne=-1):R=!0,Q(ae,U-v))):(F.sortIndex=D,d(y,F),V||$||(V=!0,P(Ne))),F},o.unstable_shouldYield=K,o.unstable_wrapCallback=function(F){var W=z;return function(){var U=z;z=W;try{return F.apply(this,arguments)}finally{z=U}}}})(ja)),ja}var Ad;function _x(){return Ad||(Ad=1,wa.exports=Mx()),wa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function $x(){if(Id)return ct;Id=1;var o=La(),d=_x();function c(t){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)s+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,x={};function m(t,s){g(t,s),g(t+"Capture",s)}function g(t,s){for(x[t]=s,t=0;t<s.length;t++)h.add(s[t])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},k={};function z(t){return y.call(k,t)?!0:y.call(_,t)?!1:b.test(t)?k[t]=!0:(_[t]=!0,!1)}function $(t,s,n,r){if(n!==null&&n.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function V(t,s,n,r){if(s===null||typeof s>"u"||$(t,s,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function R(t,s,n,r,l,i,a){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=t,this.type=s,this.sanitizeURL=i,this.removeEmptyString=a}var G={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){G[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var s=t[0];G[s]=new R(s,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){G[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){G[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){G[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){G[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){G[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){G[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){G[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function J(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var s=t.replace(Z,J);G[s]=new R(s,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var s=t.replace(Z,J);G[s]=new R(s,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var s=t.replace(Z,J);G[s]=new R(s,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){G[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),G.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){G[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function re(t,s,n,r){var l=G.hasOwnProperty(s)?G[s]:null;(l!==null?l.type!==0:r||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,n,l,r)&&(n=null),r||l===null?z(s)&&(n===null?t.removeAttribute(s):t.setAttribute(s,""+n)):l.mustUseProperty?t[l.propertyName]=n===null?l.type===3?!1:"":n:(s=l.attributeName,r=l.attributeNamespace,n===null?t.removeAttribute(s):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?t.setAttributeNS(r,s,n):t.setAttribute(s,n))))}var ae=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ne=Symbol.for("react.element"),ke=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),we=Symbol.for("react.provider"),K=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Ue=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),F=Symbol.iterator;function W(t){return t===null||typeof t!="object"?null:(t=F&&t[F]||t["@@iterator"],typeof t=="function"?t:null)}var U=Object.assign,v;function D(t){if(v===void 0)try{throw Error()}catch(n){var s=n.stack.trim().match(/\n( *(at )?)/);v=s&&s[1]||""}return`
`+v+t}var le=!1;function oe(t,s){if(!t||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(S){var r=S}Reflect.construct(t,[],s)}else{try{s.call()}catch(S){r=S}t.call(s.prototype)}else{try{throw Error()}catch(S){r=S}t()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var l=S.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,u=i.length-1;1<=a&&0<=u&&l[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==i[u]){var p=`
`+l[a].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=a&&0<=u);break}}}finally{le=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?D(t):""}function xe(t){switch(t.tag){case 5:return D(t.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return t=oe(t.type,!1),t;case 11:return t=oe(t.type.render,!1),t;case 1:return t=oe(t.type,!0),t;default:return""}}function me(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fe:return"Fragment";case ke:return"Portal";case ge:return"Profiler";case ne:return"StrictMode";case $e:return"Suspense";case Ue:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case K:return(t.displayName||"Context")+".Consumer";case we:return(t._context.displayName||"Context")+".Provider";case Le:var s=t.render;return t=t.displayName,t||(t=s.displayName||s.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nt:return s=t.displayName||null,s!==null?s:me(t.type)||"Memo";case P:s=t._payload,t=t._init;try{return me(t(s))}catch{}}return null}function je(t){var s=t.type;switch(t.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=s.render,t=t.displayName||t.name||"",s.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(s);case 8:return s===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var s=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ht(t){var s=Me(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,s),r=""+t[s];if(!t.hasOwnProperty(s)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(t,s,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(t,s,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[s]}}}}function Xn(t){t._valueTracker||(t._valueTracker=ht(t))}function Aa(t){if(!t)return!1;var s=t._valueTracker;if(!s)return!0;var n=s.getValue(),r="";return t&&(r=Me(t)?t.checked?"true":"false":t.value),t=r,t!==n?(s.setValue(t),!0):!1}function Zn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kl(t,s){var n=s.checked;return U({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ia(t,s){var n=s.defaultValue==null?"":s.defaultValue,r=s.checked!=null?s.checked:s.defaultChecked;n=be(s.value!=null?s.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Oa(t,s){s=s.checked,s!=null&&re(t,"checked",s,!1)}function Sl(t,s){Oa(t,s);var n=be(s.value),r=s.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}s.hasOwnProperty("value")?Cl(t,s.type,n):s.hasOwnProperty("defaultValue")&&Cl(t,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(t.defaultChecked=!!s.defaultChecked)}function Ga(t,s,n){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var r=s.type;if(!(r!=="submit"&&r!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+t._wrapperState.initialValue,n||s===t.value||(t.value=s),t.defaultValue=s}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cl(t,s,n){(s!=="number"||Zn(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rn=Array.isArray;function Es(t,s,n,r){if(t=t.options,s){s={};for(var l=0;l<n.length;l++)s["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=s.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&r&&(t[n].defaultSelected=!0)}else{for(n=""+be(n),s=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}s!==null||t[l].disabled||(s=t[l])}s!==null&&(s.selected=!0)}}function zl(t,s){if(s.dangerouslySetInnerHTML!=null)throw Error(c(91));return U({},s,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ba(t,s){var n=s.value;if(n==null){if(n=s.children,s=s.defaultValue,n!=null){if(s!=null)throw Error(c(92));if(rn(n)){if(1<n.length)throw Error(c(93));n=n[0]}s=n}s==null&&(s=""),n=s}t._wrapperState={initialValue:be(n)}}function Va(t,s){var n=be(s.value),r=be(s.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),s.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ua(t){var s=t.textContent;s===t._wrapperState.initialValue&&s!==""&&s!==null&&(t.value=s)}function Ha(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(t,s){return t==null||t==="http://www.w3.org/1999/xhtml"?Ha(s):t==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var er,Wa=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,n,r,l){MSApp.execUnsafeLocalFunction(function(){return t(s,n,r,l)})}:t})(function(t,s){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=s;else{for(er=er||document.createElement("div"),er.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=er.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;s.firstChild;)t.appendChild(s.firstChild)}});function ln(t,s){if(s){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=s;return}}t.textContent=s}var an={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_u=["Webkit","ms","Moz","O"];Object.keys(an).forEach(function(t){_u.forEach(function(s){s=s+t.charAt(0).toUpperCase()+t.substring(1),an[s]=an[t]})});function Ya(t,s,n){return s==null||typeof s=="boolean"||s===""?"":n||typeof s!="number"||s===0||an.hasOwnProperty(t)&&an[t]?(""+s).trim():s+"px"}function Qa(t,s){t=t.style;for(var n in s)if(s.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ya(n,s[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,l):t[n]=l}}var $u=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _l(t,s){if(s){if($u[t]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(c(137,t));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(c(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(c(61))}if(s.style!=null&&typeof s.style!="object")throw Error(c(62))}}function $l(t,s){if(t.indexOf("-")===-1)return typeof s.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function Dl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ll=null,Ds=null,Ls=null;function qa(t){if(t=_n(t)){if(typeof Ll!="function")throw Error(c(280));var s=t.stateNode;s&&(s=Nr(s),Ll(t.stateNode,t.type,s))}}function Ja(t){Ds?Ls?Ls.push(t):Ls=[t]:Ds=t}function Ka(){if(Ds){var t=Ds,s=Ls;if(Ls=Ds=null,qa(t),s)for(t=0;t<s.length;t++)qa(s[t])}}function Xa(t,s){return t(s)}function Za(){}var Pl=!1;function eo(t,s,n){if(Pl)return t(s,n);Pl=!0;try{return Xa(t,s,n)}finally{Pl=!1,(Ds!==null||Ls!==null)&&(Za(),Ka())}}function on(t,s){var n=t.stateNode;if(n===null)return null;var r=Nr(n);if(r===null)return null;n=r[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(c(231,s,typeof n));return n}var Tl=!1;if(j)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Tl=!1}function Eu(t,s,n,r,l,i,a,u,p){var S=Array.prototype.slice.call(arguments,3);try{s.apply(n,S)}catch(L){this.onError(L)}}var dn=!1,tr=null,sr=!1,Fl=null,Du={onError:function(t){dn=!0,tr=t}};function Lu(t,s,n,r,l,i,a,u,p){dn=!1,tr=null,Eu.apply(Du,arguments)}function Pu(t,s,n,r,l,i,a,u,p){if(Lu.apply(this,arguments),dn){if(dn){var S=tr;dn=!1,tr=null}else throw Error(c(198));sr||(sr=!0,Fl=S)}}function gs(t){var s=t,n=t;if(t.alternate)for(;s.return;)s=s.return;else{t=s;do s=t,(s.flags&4098)!==0&&(n=s.return),t=s.return;while(t)}return s.tag===3?n:null}function to(t){if(t.tag===13){var s=t.memoizedState;if(s===null&&(t=t.alternate,t!==null&&(s=t.memoizedState)),s!==null)return s.dehydrated}return null}function so(t){if(gs(t)!==t)throw Error(c(188))}function Tu(t){var s=t.alternate;if(!s){if(s=gs(t),s===null)throw Error(c(188));return s!==t?null:t}for(var n=t,r=s;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return so(l),t;if(i===r)return so(l),s;i=i.sibling}throw Error(c(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,u=l.child;u;){if(u===n){a=!0,n=l,r=i;break}if(u===r){a=!0,r=l,n=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===n){a=!0,n=i,r=l;break}if(u===r){a=!0,r=i,n=l;break}u=u.sibling}if(!a)throw Error(c(189))}}if(n.alternate!==r)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?t:s}function no(t){return t=Tu(t),t!==null?ro(t):null}function ro(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var s=ro(t);if(s!==null)return s;t=t.sibling}return null}var lo=d.unstable_scheduleCallback,io=d.unstable_cancelCallback,Fu=d.unstable_shouldYield,Ru=d.unstable_requestPaint,Te=d.unstable_now,Au=d.unstable_getCurrentPriorityLevel,Rl=d.unstable_ImmediatePriority,ao=d.unstable_UserBlockingPriority,nr=d.unstable_NormalPriority,Iu=d.unstable_LowPriority,oo=d.unstable_IdlePriority,rr=null,Et=null;function Ou(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(rr,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Vu,Gu=Math.log,Bu=Math.LN2;function Vu(t){return t>>>=0,t===0?32:31-(Gu(t)/Bu|0)|0}var lr=64,ir=4194304;function un(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ar(t,s){var n=t.pendingLanes;if(n===0)return 0;var r=0,l=t.suspendedLanes,i=t.pingedLanes,a=n&268435455;if(a!==0){var u=a&~l;u!==0?r=un(u):(i&=a,i!==0&&(r=un(i)))}else a=n&~l,a!==0?r=un(a):i!==0&&(r=un(i));if(r===0)return 0;if(s!==0&&s!==r&&(s&l)===0&&(l=r&-r,i=s&-s,l>=i||l===16&&(i&4194240)!==0))return s;if((r&4)!==0&&(r|=n&16),s=t.entangledLanes,s!==0)for(t=t.entanglements,s&=r;0<s;)n=31-Nt(s),l=1<<n,r|=t[n],s&=~l;return r}function Uu(t,s){switch(t){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hu(t,s){for(var n=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes;0<i;){var a=31-Nt(i),u=1<<a,p=l[a];p===-1?((u&n)===0||(u&r)!==0)&&(l[a]=Uu(u,s)):p<=s&&(t.expiredLanes|=u),i&=~u}}function Al(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function co(){var t=lr;return lr<<=1,(lr&4194240)===0&&(lr=64),t}function Il(t){for(var s=[],n=0;31>n;n++)s.push(t);return s}function hn(t,s,n){t.pendingLanes|=s,s!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,s=31-Nt(s),t[s]=n}function Wu(t,s){var n=t.pendingLanes&~s;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=s,t.mutableReadLanes&=s,t.entangledLanes&=s,s=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var l=31-Nt(n),i=1<<l;s[l]=0,r[l]=-1,t[l]=-1,n&=~i}}function Ol(t,s){var n=t.entangledLanes|=s;for(t=t.entanglements;n;){var r=31-Nt(n),l=1<<r;l&s|t[r]&s&&(t[r]|=s),n&=~l}}var ve=0;function uo(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ho,Gl,xo,mo,po,Bl=!1,or=[],qt=null,Jt=null,Kt=null,xn=new Map,mn=new Map,Xt=[],Yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fo(t,s){switch(t){case"focusin":case"focusout":qt=null;break;case"dragenter":case"dragleave":Jt=null;break;case"mouseover":case"mouseout":Kt=null;break;case"pointerover":case"pointerout":xn.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(s.pointerId)}}function pn(t,s,n,r,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:s,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},s!==null&&(s=_n(s),s!==null&&Gl(s)),t):(t.eventSystemFlags|=r,s=t.targetContainers,l!==null&&s.indexOf(l)===-1&&s.push(l),t)}function Qu(t,s,n,r,l){switch(s){case"focusin":return qt=pn(qt,t,s,n,r,l),!0;case"dragenter":return Jt=pn(Jt,t,s,n,r,l),!0;case"mouseover":return Kt=pn(Kt,t,s,n,r,l),!0;case"pointerover":var i=l.pointerId;return xn.set(i,pn(xn.get(i)||null,t,s,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,mn.set(i,pn(mn.get(i)||null,t,s,n,r,l)),!0}return!1}function go(t){var s=bs(t.target);if(s!==null){var n=gs(s);if(n!==null){if(s=n.tag,s===13){if(s=to(n),s!==null){t.blockedOn=s,po(t.priority,function(){xo(n)});return}}else if(s===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cr(t){if(t.blockedOn!==null)return!1;for(var s=t.targetContainers;0<s.length;){var n=Ul(t.domEventName,t.eventSystemFlags,s[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return s=_n(n),s!==null&&Gl(s),t.blockedOn=n,!1;s.shift()}return!0}function bo(t,s,n){cr(t)&&n.delete(s)}function qu(){Bl=!1,qt!==null&&cr(qt)&&(qt=null),Jt!==null&&cr(Jt)&&(Jt=null),Kt!==null&&cr(Kt)&&(Kt=null),xn.forEach(bo),mn.forEach(bo)}function fn(t,s){t.blockedOn===s&&(t.blockedOn=null,Bl||(Bl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,qu)))}function gn(t){function s(l){return fn(l,t)}if(0<or.length){fn(or[0],t);for(var n=1;n<or.length;n++){var r=or[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qt!==null&&fn(qt,t),Jt!==null&&fn(Jt,t),Kt!==null&&fn(Kt,t),xn.forEach(s),mn.forEach(s),n=0;n<Xt.length;n++)r=Xt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xt.length&&(n=Xt[0],n.blockedOn===null);)go(n),n.blockedOn===null&&Xt.shift()}var Ps=ae.ReactCurrentBatchConfig,dr=!0;function Ju(t,s,n,r){var l=ve,i=Ps.transition;Ps.transition=null;try{ve=1,Vl(t,s,n,r)}finally{ve=l,Ps.transition=i}}function Ku(t,s,n,r){var l=ve,i=Ps.transition;Ps.transition=null;try{ve=4,Vl(t,s,n,r)}finally{ve=l,Ps.transition=i}}function Vl(t,s,n,r){if(dr){var l=Ul(t,s,n,r);if(l===null)ai(t,s,r,ur,n),fo(t,r);else if(Qu(l,t,s,n,r))r.stopPropagation();else if(fo(t,r),s&4&&-1<Yu.indexOf(t)){for(;l!==null;){var i=_n(l);if(i!==null&&ho(i),i=Ul(t,s,n,r),i===null&&ai(t,s,r,ur,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else ai(t,s,r,null,n)}}var ur=null;function Ul(t,s,n,r){if(ur=null,t=Dl(r),t=bs(t),t!==null)if(s=gs(t),s===null)t=null;else if(n=s.tag,n===13){if(t=to(s),t!==null)return t;t=null}else if(n===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;t=null}else s!==t&&(t=null);return ur=t,null}function vo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Au()){case Rl:return 1;case ao:return 4;case nr:case Iu:return 16;case oo:return 536870912;default:return 16}default:return 16}}var Zt=null,Hl=null,hr=null;function wo(){if(hr)return hr;var t,s=Hl,n=s.length,r,l="value"in Zt?Zt.value:Zt.textContent,i=l.length;for(t=0;t<n&&s[t]===l[t];t++);var a=n-t;for(r=1;r<=a&&s[n-r]===l[i-r];r++);return hr=l.slice(t,1<r?1-r:void 0)}function xr(t){var s=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&s===13&&(t=13)):t=s,t===10&&(t=13),32<=t||t===13?t:0}function mr(){return!0}function jo(){return!1}function xt(t){function s(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?mr:jo,this.isPropagationStopped=jo,this}return U(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),s}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wl=xt(Ts),bn=U({},Ts,{view:0,detail:0}),Xu=xt(bn),Yl,Ql,vn,pr=U({},bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vn&&(vn&&t.type==="mousemove"?(Yl=t.screenX-vn.screenX,Ql=t.screenY-vn.screenY):Ql=Yl=0,vn=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),yo=xt(pr),Zu=U({},pr,{dataTransfer:0}),eh=xt(Zu),th=U({},bn,{relatedTarget:0}),ql=xt(th),sh=U({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),nh=xt(sh),rh=U({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lh=xt(rh),ih=U({},Ts,{data:0}),No=xt(ih),ah={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dh(t){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(t):(t=ch[t])?!!s[t]:!1}function Jl(){return dh}var uh=U({},bn,{key:function(t){if(t.key){var s=ah[t.key]||t.key;if(s!=="Unidentified")return s}return t.type==="keypress"?(t=xr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?xr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hh=xt(uh),xh=U({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=xt(xh),mh=U({},bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),ph=xt(mh),fh=U({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=xt(fh),bh=U({},pr,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vh=xt(bh),wh=[9,13,27,32],Kl=j&&"CompositionEvent"in window,wn=null;j&&"documentMode"in document&&(wn=document.documentMode);var jh=j&&"TextEvent"in window&&!wn,So=j&&(!Kl||wn&&8<wn&&11>=wn),Co=" ",zo=!1;function Mo(t,s){switch(t){case"keyup":return wh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _o(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Fs=!1;function yh(t,s){switch(t){case"compositionend":return _o(s);case"keypress":return s.which!==32?null:(zo=!0,Co);case"textInput":return t=s.data,t===Co&&zo?null:t;default:return null}}function Nh(t,s){if(Fs)return t==="compositionend"||!Kl&&Mo(t,s)?(t=wo(),hr=Hl=Zt=null,Fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return So&&s.locale!=="ko"?null:s.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s==="input"?!!kh[t.type]:s==="textarea"}function Eo(t,s,n,r){Ja(r),s=wr(s,"onChange"),0<s.length&&(n=new Wl("onChange","change",null,n,r),t.push({event:n,listeners:s}))}var jn=null,yn=null;function Sh(t){qo(t,0)}function fr(t){var s=Gs(t);if(Aa(s))return t}function Ch(t,s){if(t==="change")return s}var Do=!1;if(j){var Xl;if(j){var Zl="oninput"in document;if(!Zl){var Lo=document.createElement("div");Lo.setAttribute("oninput","return;"),Zl=typeof Lo.oninput=="function"}Xl=Zl}else Xl=!1;Do=Xl&&(!document.documentMode||9<document.documentMode)}function Po(){jn&&(jn.detachEvent("onpropertychange",To),yn=jn=null)}function To(t){if(t.propertyName==="value"&&fr(yn)){var s=[];Eo(s,yn,t,Dl(t)),eo(Sh,s)}}function zh(t,s,n){t==="focusin"?(Po(),jn=s,yn=n,jn.attachEvent("onpropertychange",To)):t==="focusout"&&Po()}function Mh(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fr(yn)}function _h(t,s){if(t==="click")return fr(s)}function $h(t,s){if(t==="input"||t==="change")return fr(s)}function Eh(t,s){return t===s&&(t!==0||1/t===1/s)||t!==t&&s!==s}var kt=typeof Object.is=="function"?Object.is:Eh;function Nn(t,s){if(kt(t,s))return!0;if(typeof t!="object"||t===null||typeof s!="object"||s===null)return!1;var n=Object.keys(t),r=Object.keys(s);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!y.call(s,l)||!kt(t[l],s[l]))return!1}return!0}function Fo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ro(t,s){var n=Fo(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=s&&r>=s)return{node:n,offset:s-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fo(n)}}function Ao(t,s){return t&&s?t===s?!0:t&&t.nodeType===3?!1:s&&s.nodeType===3?Ao(t,s.parentNode):"contains"in t?t.contains(s):t.compareDocumentPosition?!!(t.compareDocumentPosition(s)&16):!1:!1}function Io(){for(var t=window,s=Zn();s instanceof t.HTMLIFrameElement;){try{var n=typeof s.contentWindow.location.href=="string"}catch{n=!1}if(n)t=s.contentWindow;else break;s=Zn(t.document)}return s}function ei(t){var s=t&&t.nodeName&&t.nodeName.toLowerCase();return s&&(s==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||s==="textarea"||t.contentEditable==="true")}function Dh(t){var s=Io(),n=t.focusedElem,r=t.selectionRange;if(s!==n&&n&&n.ownerDocument&&Ao(n.ownerDocument.documentElement,n)){if(r!==null&&ei(n)){if(s=r.start,t=r.end,t===void 0&&(t=s),"selectionStart"in n)n.selectionStart=s,n.selectionEnd=Math.min(t,n.value.length);else if(t=(s=n.ownerDocument||document)&&s.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!t.extend&&i>r&&(l=r,r=i,i=l),l=Ro(n,i);var a=Ro(n,r);l&&a&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(s=s.createRange(),s.setStart(l.node,l.offset),t.removeAllRanges(),i>r?(t.addRange(s),t.extend(a.node,a.offset)):(s.setEnd(a.node,a.offset),t.addRange(s)))}}for(s=[],t=n;t=t.parentNode;)t.nodeType===1&&s.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<s.length;n++)t=s[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lh=j&&"documentMode"in document&&11>=document.documentMode,Rs=null,ti=null,kn=null,si=!1;function Oo(t,s,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;si||Rs==null||Rs!==Zn(r)||(r=Rs,"selectionStart"in r&&ei(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kn&&Nn(kn,r)||(kn=r,r=wr(ti,"onSelect"),0<r.length&&(s=new Wl("onSelect","select",null,s,n),t.push({event:s,listeners:r}),s.target=Rs)))}function gr(t,s){var n={};return n[t.toLowerCase()]=s.toLowerCase(),n["Webkit"+t]="webkit"+s,n["Moz"+t]="moz"+s,n}var As={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},ni={},Go={};j&&(Go=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function br(t){if(ni[t])return ni[t];if(!As[t])return t;var s=As[t],n;for(n in s)if(s.hasOwnProperty(n)&&n in Go)return ni[t]=s[n];return t}var Bo=br("animationend"),Vo=br("animationiteration"),Uo=br("animationstart"),Ho=br("transitionend"),Wo=new Map,Yo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function es(t,s){Wo.set(t,s),m(s,[t])}for(var ri=0;ri<Yo.length;ri++){var li=Yo[ri],Ph=li.toLowerCase(),Th=li[0].toUpperCase()+li.slice(1);es(Ph,"on"+Th)}es(Bo,"onAnimationEnd"),es(Vo,"onAnimationIteration"),es(Uo,"onAnimationStart"),es("dblclick","onDoubleClick"),es("focusin","onFocus"),es("focusout","onBlur"),es(Ho,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function Qo(t,s,n){var r=t.type||"unknown-event";t.currentTarget=n,Pu(r,s,void 0,t),t.currentTarget=null}function qo(t,s){s=(s&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],l=r.event;r=r.listeners;e:{var i=void 0;if(s)for(var a=r.length-1;0<=a;a--){var u=r[a],p=u.instance,S=u.currentTarget;if(u=u.listener,p!==i&&l.isPropagationStopped())break e;Qo(l,u,S),i=p}else for(a=0;a<r.length;a++){if(u=r[a],p=u.instance,S=u.currentTarget,u=u.listener,p!==i&&l.isPropagationStopped())break e;Qo(l,u,S),i=p}}}if(sr)throw t=Fl,sr=!1,Fl=null,t}function Se(t,s){var n=s[xi];n===void 0&&(n=s[xi]=new Set);var r=t+"__bubble";n.has(r)||(Jo(s,t,2,!1),n.add(r))}function ii(t,s,n){var r=0;s&&(r|=4),Jo(n,t,r,s)}var vr="_reactListening"+Math.random().toString(36).slice(2);function Cn(t){if(!t[vr]){t[vr]=!0,h.forEach(function(n){n!=="selectionchange"&&(Fh.has(n)||ii(n,!1,t),ii(n,!0,t))});var s=t.nodeType===9?t:t.ownerDocument;s===null||s[vr]||(s[vr]=!0,ii("selectionchange",!1,s))}}function Jo(t,s,n,r){switch(vo(s)){case 1:var l=Ju;break;case 4:l=Ku;break;default:l=Vl}n=l.bind(null,s,n,t),l=void 0,!Tl||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(s,n,{capture:!0,passive:l}):t.addEventListener(s,n,!0):l!==void 0?t.addEventListener(s,n,{passive:l}):t.addEventListener(s,n,!1)}function ai(t,s,n,r,l){var i=r;if((s&1)===0&&(s&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var p=a.tag;if((p===3||p===4)&&(p=a.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;a=a.return}for(;u!==null;){if(a=bs(u),a===null)return;if(p=a.tag,p===5||p===6){r=i=a;continue e}u=u.parentNode}}r=r.return}eo(function(){var S=i,L=Dl(n),T=[];e:{var E=Wo.get(t);if(E!==void 0){var O=Wl,H=t;switch(t){case"keypress":if(xr(n)===0)break e;case"keydown":case"keyup":O=hh;break;case"focusin":H="focus",O=ql;break;case"focusout":H="blur",O=ql;break;case"beforeblur":case"afterblur":O=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=ph;break;case Bo:case Vo:case Uo:O=nh;break;case Ho:O=gh;break;case"scroll":O=Xu;break;case"wheel":O=vh;break;case"copy":case"cut":case"paste":O=lh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ko}var Y=(s&4)!==0,Fe=!Y&&t==="scroll",w=Y?E!==null?E+"Capture":null:E;Y=[];for(var f=S,N;f!==null;){N=f;var A=N.stateNode;if(N.tag===5&&A!==null&&(N=A,w!==null&&(A=on(f,w),A!=null&&Y.push(zn(f,A,N)))),Fe)break;f=f.return}0<Y.length&&(E=new O(E,H,null,n,L),T.push({event:E,listeners:Y}))}}if((s&7)===0){e:{if(E=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",E&&n!==El&&(H=n.relatedTarget||n.fromElement)&&(bs(H)||H[At]))break e;if((O||E)&&(E=L.window===L?L:(E=L.ownerDocument)?E.defaultView||E.parentWindow:window,O?(H=n.relatedTarget||n.toElement,O=S,H=H?bs(H):null,H!==null&&(Fe=gs(H),H!==Fe||H.tag!==5&&H.tag!==6)&&(H=null)):(O=null,H=S),O!==H)){if(Y=yo,A="onMouseLeave",w="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(Y=ko,A="onPointerLeave",w="onPointerEnter",f="pointer"),Fe=O==null?E:Gs(O),N=H==null?E:Gs(H),E=new Y(A,f+"leave",O,n,L),E.target=Fe,E.relatedTarget=N,A=null,bs(L)===S&&(Y=new Y(w,f+"enter",H,n,L),Y.target=N,Y.relatedTarget=Fe,A=Y),Fe=A,O&&H)t:{for(Y=O,w=H,f=0,N=Y;N;N=Is(N))f++;for(N=0,A=w;A;A=Is(A))N++;for(;0<f-N;)Y=Is(Y),f--;for(;0<N-f;)w=Is(w),N--;for(;f--;){if(Y===w||w!==null&&Y===w.alternate)break t;Y=Is(Y),w=Is(w)}Y=null}else Y=null;O!==null&&Ko(T,E,O,Y,!1),H!==null&&Fe!==null&&Ko(T,Fe,H,Y,!0)}}e:{if(E=S?Gs(S):window,O=E.nodeName&&E.nodeName.toLowerCase(),O==="select"||O==="input"&&E.type==="file")var q=Ch;else if($o(E))if(Do)q=$h;else{q=Mh;var ee=zh}else(O=E.nodeName)&&O.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(q=_h);if(q&&(q=q(t,S))){Eo(T,q,n,L);break e}ee&&ee(t,E,S),t==="focusout"&&(ee=E._wrapperState)&&ee.controlled&&E.type==="number"&&Cl(E,"number",E.value)}switch(ee=S?Gs(S):window,t){case"focusin":($o(ee)||ee.contentEditable==="true")&&(Rs=ee,ti=S,kn=null);break;case"focusout":kn=ti=Rs=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,Oo(T,n,L);break;case"selectionchange":if(Lh)break;case"keydown":case"keyup":Oo(T,n,L)}var te;if(Kl)e:{switch(t){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Fs?Mo(t,n)&&(se="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(So&&n.locale!=="ko"&&(Fs||se!=="onCompositionStart"?se==="onCompositionEnd"&&Fs&&(te=wo()):(Zt=L,Hl="value"in Zt?Zt.value:Zt.textContent,Fs=!0)),ee=wr(S,se),0<ee.length&&(se=new No(se,t,null,n,L),T.push({event:se,listeners:ee}),te?se.data=te:(te=_o(n),te!==null&&(se.data=te)))),(te=jh?yh(t,n):Nh(t,n))&&(S=wr(S,"onBeforeInput"),0<S.length&&(L=new No("onBeforeInput","beforeinput",null,n,L),T.push({event:L,listeners:S}),L.data=te))}qo(T,s)})}function zn(t,s,n){return{instance:t,listener:s,currentTarget:n}}function wr(t,s){for(var n=s+"Capture",r=[];t!==null;){var l=t,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=on(t,n),i!=null&&r.unshift(zn(t,i,l)),i=on(t,s),i!=null&&r.push(zn(t,i,l))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ko(t,s,n,r,l){for(var i=s._reactName,a=[];n!==null&&n!==r;){var u=n,p=u.alternate,S=u.stateNode;if(p!==null&&p===r)break;u.tag===5&&S!==null&&(u=S,l?(p=on(n,i),p!=null&&a.unshift(zn(n,p,u))):l||(p=on(n,i),p!=null&&a.push(zn(n,p,u)))),n=n.return}a.length!==0&&t.push({event:s,listeners:a})}var Rh=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Xo(t){return(typeof t=="string"?t:""+t).replace(Rh,`
`).replace(Ah,"")}function jr(t,s,n){if(s=Xo(s),Xo(t)!==s&&n)throw Error(c(425))}function yr(){}var oi=null,ci=null;function di(t,s){return t==="textarea"||t==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ui=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,Zo=typeof Promise=="function"?Promise:void 0,Oh=typeof queueMicrotask=="function"?queueMicrotask:typeof Zo<"u"?function(t){return Zo.resolve(null).then(t).catch(Gh)}:ui;function Gh(t){setTimeout(function(){throw t})}function hi(t,s){var n=s,r=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){t.removeChild(l),gn(s);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);gn(s)}function ts(t){for(;t!=null;t=t.nextSibling){var s=t.nodeType;if(s===1||s===3)break;if(s===8){if(s=t.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return t}function ec(t){t=t.previousSibling;for(var s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(s===0)return t;s--}else n==="/$"&&s++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Os,Mn="__reactProps$"+Os,At="__reactContainer$"+Os,xi="__reactEvents$"+Os,Bh="__reactListeners$"+Os,Vh="__reactHandles$"+Os;function bs(t){var s=t[Dt];if(s)return s;for(var n=t.parentNode;n;){if(s=n[At]||n[Dt]){if(n=s.alternate,s.child!==null||n!==null&&n.child!==null)for(t=ec(t);t!==null;){if(n=t[Dt])return n;t=ec(t)}return s}t=n,n=t.parentNode}return null}function _n(t){return t=t[Dt]||t[At],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(c(33))}function Nr(t){return t[Mn]||null}var mi=[],Bs=-1;function ss(t){return{current:t}}function Ce(t){0>Bs||(t.current=mi[Bs],mi[Bs]=null,Bs--)}function ye(t,s){Bs++,mi[Bs]=t.current,t.current=s}var ns={},Qe=ss(ns),rt=ss(!1),vs=ns;function Vs(t,s){var n=t.type.contextTypes;if(!n)return ns;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===s)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=s[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=l),l}function lt(t){return t=t.childContextTypes,t!=null}function kr(){Ce(rt),Ce(Qe)}function tc(t,s,n){if(Qe.current!==ns)throw Error(c(168));ye(Qe,s),ye(rt,n)}function sc(t,s,n){var r=t.stateNode;if(s=s.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in s))throw Error(c(108,je(t)||"Unknown",l));return U({},n,r)}function Sr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ns,vs=Qe.current,ye(Qe,t),ye(rt,rt.current),!0}function nc(t,s,n){var r=t.stateNode;if(!r)throw Error(c(169));n?(t=sc(t,s,vs),r.__reactInternalMemoizedMergedChildContext=t,Ce(rt),Ce(Qe),ye(Qe,t)):Ce(rt),ye(rt,n)}var It=null,Cr=!1,pi=!1;function rc(t){It===null?It=[t]:It.push(t)}function Uh(t){Cr=!0,rc(t)}function rs(){if(!pi&&It!==null){pi=!0;var t=0,s=ve;try{var n=It;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,Cr=!1}catch(l){throw It!==null&&(It=It.slice(t+1)),lo(Rl,rs),l}finally{ve=s,pi=!1}}return null}var Us=[],Hs=0,zr=null,Mr=0,gt=[],bt=0,ws=null,Ot=1,Gt="";function js(t,s){Us[Hs++]=Mr,Us[Hs++]=zr,zr=t,Mr=s}function lc(t,s,n){gt[bt++]=Ot,gt[bt++]=Gt,gt[bt++]=ws,ws=t;var r=Ot;t=Gt;var l=32-Nt(r)-1;r&=~(1<<l),n+=1;var i=32-Nt(s)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,Ot=1<<32-Nt(s)+l|n<<l|r,Gt=i+t}else Ot=1<<i|n<<l|r,Gt=t}function fi(t){t.return!==null&&(js(t,1),lc(t,1,0))}function gi(t){for(;t===zr;)zr=Us[--Hs],Us[Hs]=null,Mr=Us[--Hs],Us[Hs]=null;for(;t===ws;)ws=gt[--bt],gt[bt]=null,Gt=gt[--bt],gt[bt]=null,Ot=gt[--bt],gt[bt]=null}var mt=null,pt=null,_e=!1,St=null;function ic(t,s){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=s,n.return=t,s=t.deletions,s===null?(t.deletions=[n],t.flags|=16):s.push(n)}function ac(t,s){switch(t.tag){case 5:var n=t.type;return s=s.nodeType!==1||n.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(t.stateNode=s,mt=t,pt=ts(s.firstChild),!0):!1;case 6:return s=t.pendingProps===""||s.nodeType!==3?null:s,s!==null?(t.stateNode=s,mt=t,pt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(n=ws!==null?{id:Ot,overflow:Gt}:null,t.memoizedState={dehydrated:s,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=s,n.return=t,t.child=n,mt=t,pt=null,!0):!1;default:return!1}}function bi(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vi(t){if(_e){var s=pt;if(s){var n=s;if(!ac(t,s)){if(bi(t))throw Error(c(418));s=ts(n.nextSibling);var r=mt;s&&ac(t,s)?ic(r,n):(t.flags=t.flags&-4097|2,_e=!1,mt=t)}}else{if(bi(t))throw Error(c(418));t.flags=t.flags&-4097|2,_e=!1,mt=t}}}function oc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function _r(t){if(t!==mt)return!1;if(!_e)return oc(t),_e=!0,!1;var s;if((s=t.tag!==3)&&!(s=t.tag!==5)&&(s=t.type,s=s!=="head"&&s!=="body"&&!di(t.type,t.memoizedProps)),s&&(s=pt)){if(bi(t))throw cc(),Error(c(418));for(;s;)ic(t,s),s=ts(s.nextSibling)}if(oc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));e:{for(t=t.nextSibling,s=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(s===0){pt=ts(t.nextSibling);break e}s--}else n!=="$"&&n!=="$!"&&n!=="$?"||s++}t=t.nextSibling}pt=null}}else pt=mt?ts(t.stateNode.nextSibling):null;return!0}function cc(){for(var t=pt;t;)t=ts(t.nextSibling)}function Ws(){pt=mt=null,_e=!1}function wi(t){St===null?St=[t]:St.push(t)}var Hh=ae.ReactCurrentBatchConfig;function $n(t,s,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var r=n.stateNode}if(!r)throw Error(c(147,t));var l=r,i=""+t;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===i?s.ref:(s=function(a){var u=l.refs;a===null?delete u[i]:u[i]=a},s._stringRef=i,s)}if(typeof t!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,t))}return t}function $r(t,s){throw t=Object.prototype.toString.call(s),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":t))}function dc(t){var s=t._init;return s(t._payload)}function uc(t){function s(w,f){if(t){var N=w.deletions;N===null?(w.deletions=[f],w.flags|=16):N.push(f)}}function n(w,f){if(!t)return null;for(;f!==null;)s(w,f),f=f.sibling;return null}function r(w,f){for(w=new Map;f!==null;)f.key!==null?w.set(f.key,f):w.set(f.index,f),f=f.sibling;return w}function l(w,f){return w=hs(w,f),w.index=0,w.sibling=null,w}function i(w,f,N){return w.index=N,t?(N=w.alternate,N!==null?(N=N.index,N<f?(w.flags|=2,f):N):(w.flags|=2,f)):(w.flags|=1048576,f)}function a(w){return t&&w.alternate===null&&(w.flags|=2),w}function u(w,f,N,A){return f===null||f.tag!==6?(f=ua(N,w.mode,A),f.return=w,f):(f=l(f,N),f.return=w,f)}function p(w,f,N,A){var q=N.type;return q===fe?L(w,f,N.props.children,A,N.key):f!==null&&(f.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===P&&dc(q)===f.type)?(A=l(f,N.props),A.ref=$n(w,f,N),A.return=w,A):(A=el(N.type,N.key,N.props,null,w.mode,A),A.ref=$n(w,f,N),A.return=w,A)}function S(w,f,N,A){return f===null||f.tag!==4||f.stateNode.containerInfo!==N.containerInfo||f.stateNode.implementation!==N.implementation?(f=ha(N,w.mode,A),f.return=w,f):(f=l(f,N.children||[]),f.return=w,f)}function L(w,f,N,A,q){return f===null||f.tag!==7?(f=_s(N,w.mode,A,q),f.return=w,f):(f=l(f,N),f.return=w,f)}function T(w,f,N){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ua(""+f,w.mode,N),f.return=w,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ne:return N=el(f.type,f.key,f.props,null,w.mode,N),N.ref=$n(w,null,f),N.return=w,N;case ke:return f=ha(f,w.mode,N),f.return=w,f;case P:var A=f._init;return T(w,A(f._payload),N)}if(rn(f)||W(f))return f=_s(f,w.mode,N,null),f.return=w,f;$r(w,f)}return null}function E(w,f,N,A){var q=f!==null?f.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return q!==null?null:u(w,f,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ne:return N.key===q?p(w,f,N,A):null;case ke:return N.key===q?S(w,f,N,A):null;case P:return q=N._init,E(w,f,q(N._payload),A)}if(rn(N)||W(N))return q!==null?null:L(w,f,N,A,null);$r(w,N)}return null}function O(w,f,N,A,q){if(typeof A=="string"&&A!==""||typeof A=="number")return w=w.get(N)||null,u(f,w,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ne:return w=w.get(A.key===null?N:A.key)||null,p(f,w,A,q);case ke:return w=w.get(A.key===null?N:A.key)||null,S(f,w,A,q);case P:var ee=A._init;return O(w,f,N,ee(A._payload),q)}if(rn(A)||W(A))return w=w.get(N)||null,L(f,w,A,q,null);$r(f,A)}return null}function H(w,f,N,A){for(var q=null,ee=null,te=f,se=f=0,Ve=null;te!==null&&se<N.length;se++){te.index>se?(Ve=te,te=null):Ve=te.sibling;var pe=E(w,te,N[se],A);if(pe===null){te===null&&(te=Ve);break}t&&te&&pe.alternate===null&&s(w,te),f=i(pe,f,se),ee===null?q=pe:ee.sibling=pe,ee=pe,te=Ve}if(se===N.length)return n(w,te),_e&&js(w,se),q;if(te===null){for(;se<N.length;se++)te=T(w,N[se],A),te!==null&&(f=i(te,f,se),ee===null?q=te:ee.sibling=te,ee=te);return _e&&js(w,se),q}for(te=r(w,te);se<N.length;se++)Ve=O(te,w,se,N[se],A),Ve!==null&&(t&&Ve.alternate!==null&&te.delete(Ve.key===null?se:Ve.key),f=i(Ve,f,se),ee===null?q=Ve:ee.sibling=Ve,ee=Ve);return t&&te.forEach(function(xs){return s(w,xs)}),_e&&js(w,se),q}function Y(w,f,N,A){var q=W(N);if(typeof q!="function")throw Error(c(150));if(N=q.call(N),N==null)throw Error(c(151));for(var ee=q=null,te=f,se=f=0,Ve=null,pe=N.next();te!==null&&!pe.done;se++,pe=N.next()){te.index>se?(Ve=te,te=null):Ve=te.sibling;var xs=E(w,te,pe.value,A);if(xs===null){te===null&&(te=Ve);break}t&&te&&xs.alternate===null&&s(w,te),f=i(xs,f,se),ee===null?q=xs:ee.sibling=xs,ee=xs,te=Ve}if(pe.done)return n(w,te),_e&&js(w,se),q;if(te===null){for(;!pe.done;se++,pe=N.next())pe=T(w,pe.value,A),pe!==null&&(f=i(pe,f,se),ee===null?q=pe:ee.sibling=pe,ee=pe);return _e&&js(w,se),q}for(te=r(w,te);!pe.done;se++,pe=N.next())pe=O(te,w,se,pe.value,A),pe!==null&&(t&&pe.alternate!==null&&te.delete(pe.key===null?se:pe.key),f=i(pe,f,se),ee===null?q=pe:ee.sibling=pe,ee=pe);return t&&te.forEach(function(kx){return s(w,kx)}),_e&&js(w,se),q}function Fe(w,f,N,A){if(typeof N=="object"&&N!==null&&N.type===fe&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Ne:e:{for(var q=N.key,ee=f;ee!==null;){if(ee.key===q){if(q=N.type,q===fe){if(ee.tag===7){n(w,ee.sibling),f=l(ee,N.props.children),f.return=w,w=f;break e}}else if(ee.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===P&&dc(q)===ee.type){n(w,ee.sibling),f=l(ee,N.props),f.ref=$n(w,ee,N),f.return=w,w=f;break e}n(w,ee);break}else s(w,ee);ee=ee.sibling}N.type===fe?(f=_s(N.props.children,w.mode,A,N.key),f.return=w,w=f):(A=el(N.type,N.key,N.props,null,w.mode,A),A.ref=$n(w,f,N),A.return=w,w=A)}return a(w);case ke:e:{for(ee=N.key;f!==null;){if(f.key===ee)if(f.tag===4&&f.stateNode.containerInfo===N.containerInfo&&f.stateNode.implementation===N.implementation){n(w,f.sibling),f=l(f,N.children||[]),f.return=w,w=f;break e}else{n(w,f);break}else s(w,f);f=f.sibling}f=ha(N,w.mode,A),f.return=w,w=f}return a(w);case P:return ee=N._init,Fe(w,f,ee(N._payload),A)}if(rn(N))return H(w,f,N,A);if(W(N))return Y(w,f,N,A);$r(w,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,f!==null&&f.tag===6?(n(w,f.sibling),f=l(f,N),f.return=w,w=f):(n(w,f),f=ua(N,w.mode,A),f.return=w,w=f),a(w)):n(w,f)}return Fe}var Ys=uc(!0),hc=uc(!1),Er=ss(null),Dr=null,Qs=null,ji=null;function yi(){ji=Qs=Dr=null}function Ni(t){var s=Er.current;Ce(Er),t._currentValue=s}function ki(t,s,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&s)!==s?(t.childLanes|=s,r!==null&&(r.childLanes|=s)):r!==null&&(r.childLanes&s)!==s&&(r.childLanes|=s),t===n)break;t=t.return}}function qs(t,s){Dr=t,ji=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&s)!==0&&(it=!0),t.firstContext=null)}function vt(t){var s=t._currentValue;if(ji!==t)if(t={context:t,memoizedValue:s,next:null},Qs===null){if(Dr===null)throw Error(c(308));Qs=t,Dr.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return s}var ys=null;function Si(t){ys===null?ys=[t]:ys.push(t)}function xc(t,s,n,r){var l=s.interleaved;return l===null?(n.next=n,Si(s)):(n.next=l.next,l.next=n),s.interleaved=n,Bt(t,r)}function Bt(t,s){t.lanes|=s;var n=t.alternate;for(n!==null&&(n.lanes|=s),n=t,t=t.return;t!==null;)t.childLanes|=s,n=t.alternate,n!==null&&(n.childLanes|=s),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ls=!1;function Ci(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mc(t,s){t=t.updateQueue,s.updateQueue===t&&(s.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,s){return{eventTime:t,lane:s,tag:0,payload:null,callback:null,next:null}}function is(t,s,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ue&2)!==0){var l=r.pending;return l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s,Bt(t,n)}return l=r.interleaved,l===null?(s.next=s,Si(r)):(s.next=l.next,l.next=s),r.interleaved=s,Bt(t,n)}function Lr(t,s,n){if(s=s.updateQueue,s!==null&&(s=s.shared,(n&4194240)!==0)){var r=s.lanes;r&=t.pendingLanes,n|=r,s.lanes=n,Ol(t,n)}}function pc(t,s){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=s:i=i.next=s}else l=i=s;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=s:t.next=s,n.lastBaseUpdate=s}function Pr(t,s,n,r){var l=t.updateQueue;ls=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var p=u,S=p.next;p.next=null,a===null?i=S:a.next=S,a=p;var L=t.alternate;L!==null&&(L=L.updateQueue,u=L.lastBaseUpdate,u!==a&&(u===null?L.firstBaseUpdate=S:u.next=S,L.lastBaseUpdate=p))}if(i!==null){var T=l.baseState;a=0,L=S=p=null,u=i;do{var E=u.lane,O=u.eventTime;if((r&E)===E){L!==null&&(L=L.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var H=t,Y=u;switch(E=s,O=n,Y.tag){case 1:if(H=Y.payload,typeof H=="function"){T=H.call(O,T,E);break e}T=H;break e;case 3:H.flags=H.flags&-65537|128;case 0:if(H=Y.payload,E=typeof H=="function"?H.call(O,T,E):H,E==null)break e;T=U({},T,E);break e;case 2:ls=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,E=l.effects,E===null?l.effects=[u]:E.push(u))}else O={eventTime:O,lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},L===null?(S=L=O,p=T):L=L.next=O,a|=E;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;E=u,u=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);if(L===null&&(p=T),l.baseState=p,l.firstBaseUpdate=S,l.lastBaseUpdate=L,s=l.shared.interleaved,s!==null){l=s;do a|=l.lane,l=l.next;while(l!==s)}else i===null&&(l.shared.lanes=0);Ss|=a,t.lanes=a,t.memoizedState=T}}function fc(t,s,n){if(t=s.effects,s.effects=null,t!==null)for(s=0;s<t.length;s++){var r=t[s],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(c(191,l));l.call(r)}}}var En={},Lt=ss(En),Dn=ss(En),Ln=ss(En);function Ns(t){if(t===En)throw Error(c(174));return t}function zi(t,s){switch(ye(Ln,s),ye(Dn,t),ye(Lt,En),t=s.nodeType,t){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ml(null,"");break;default:t=t===8?s.parentNode:s,s=t.namespaceURI||null,t=t.tagName,s=Ml(s,t)}Ce(Lt),ye(Lt,s)}function Js(){Ce(Lt),Ce(Dn),Ce(Ln)}function gc(t){Ns(Ln.current);var s=Ns(Lt.current),n=Ml(s,t.type);s!==n&&(ye(Dn,t),ye(Lt,n))}function Mi(t){Dn.current===t&&(Ce(Lt),Ce(Dn))}var Ee=ss(0);function Tr(t){for(var s=t;s!==null;){if(s.tag===13){var n=s.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var _i=[];function $i(){for(var t=0;t<_i.length;t++)_i[t]._workInProgressVersionPrimary=null;_i.length=0}var Fr=ae.ReactCurrentDispatcher,Ei=ae.ReactCurrentBatchConfig,ks=0,De=null,Ie=null,Ge=null,Rr=!1,Pn=!1,Tn=0,Wh=0;function qe(){throw Error(c(321))}function Di(t,s){if(s===null)return!1;for(var n=0;n<s.length&&n<t.length;n++)if(!kt(t[n],s[n]))return!1;return!0}function Li(t,s,n,r,l,i){if(ks=i,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fr.current=t===null||t.memoizedState===null?Jh:Kh,t=n(r,l),Pn){i=0;do{if(Pn=!1,Tn=0,25<=i)throw Error(c(301));i+=1,Ge=Ie=null,s.updateQueue=null,Fr.current=Xh,t=n(r,l)}while(Pn)}if(Fr.current=Or,s=Ie!==null&&Ie.next!==null,ks=0,Ge=Ie=De=null,Rr=!1,s)throw Error(c(300));return t}function Pi(){var t=Tn!==0;return Tn=0,t}function Pt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?De.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function wt(){if(Ie===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var s=Ge===null?De.memoizedState:Ge.next;if(s!==null)Ge=s,Ie=t;else{if(t===null)throw Error(c(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Ge===null?De.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function Fn(t,s){return typeof s=="function"?s(t):s}function Ti(t){var s=wt(),n=s.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var r=Ie,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=a=null,p=null,S=i;do{var L=S.lane;if((ks&L)===L)p!==null&&(p=p.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:t(r,S.action);else{var T={lane:L,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};p===null?(u=p=T,a=r):p=p.next=T,De.lanes|=L,Ss|=L}S=S.next}while(S!==null&&S!==i);p===null?a=r:p.next=u,kt(r,s.memoizedState)||(it=!0),s.memoizedState=r,s.baseState=a,s.baseQueue=p,n.lastRenderedState=r}if(t=n.interleaved,t!==null){l=t;do i=l.lane,De.lanes|=i,Ss|=i,l=l.next;while(l!==t)}else l===null&&(n.lanes=0);return[s.memoizedState,n.dispatch]}function Fi(t){var s=wt(),n=s.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var r=n.dispatch,l=n.pending,i=s.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=t(i,a.action),a=a.next;while(a!==l);kt(i,s.memoizedState)||(it=!0),s.memoizedState=i,s.baseQueue===null&&(s.baseState=i),n.lastRenderedState=i}return[i,r]}function bc(){}function vc(t,s){var n=De,r=wt(),l=s(),i=!kt(r.memoizedState,l);if(i&&(r.memoizedState=l,it=!0),r=r.queue,Ri(yc.bind(null,n,r,t),[t]),r.getSnapshot!==s||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Rn(9,jc.bind(null,n,r,l,s),void 0,null),Be===null)throw Error(c(349));(ks&30)!==0||wc(n,s,l)}return l}function wc(t,s,n){t.flags|=16384,t={getSnapshot:s,value:n},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.stores=[t]):(n=s.stores,n===null?s.stores=[t]:n.push(t))}function jc(t,s,n,r){s.value=n,s.getSnapshot=r,Nc(s)&&kc(t)}function yc(t,s,n){return n(function(){Nc(s)&&kc(t)})}function Nc(t){var s=t.getSnapshot;t=t.value;try{var n=s();return!kt(t,n)}catch{return!0}}function kc(t){var s=Bt(t,1);s!==null&&_t(s,t,1,-1)}function Sc(t){var s=Pt();return typeof t=="function"&&(t=t()),s.memoizedState=s.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fn,lastRenderedState:t},s.queue=t,t=t.dispatch=qh.bind(null,De,t),[s.memoizedState,t]}function Rn(t,s,n,r){return t={tag:t,create:s,destroy:n,deps:r,next:null},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.lastEffect=t.next=t):(n=s.lastEffect,n===null?s.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,s.lastEffect=t)),t}function Cc(){return wt().memoizedState}function Ar(t,s,n,r){var l=Pt();De.flags|=t,l.memoizedState=Rn(1|s,n,void 0,r===void 0?null:r)}function Ir(t,s,n,r){var l=wt();r=r===void 0?null:r;var i=void 0;if(Ie!==null){var a=Ie.memoizedState;if(i=a.destroy,r!==null&&Di(r,a.deps)){l.memoizedState=Rn(s,n,i,r);return}}De.flags|=t,l.memoizedState=Rn(1|s,n,i,r)}function zc(t,s){return Ar(8390656,8,t,s)}function Ri(t,s){return Ir(2048,8,t,s)}function Mc(t,s){return Ir(4,2,t,s)}function _c(t,s){return Ir(4,4,t,s)}function $c(t,s){if(typeof s=="function")return t=t(),s(t),function(){s(null)};if(s!=null)return t=t(),s.current=t,function(){s.current=null}}function Ec(t,s,n){return n=n!=null?n.concat([t]):null,Ir(4,4,$c.bind(null,s,t),n)}function Ai(){}function Dc(t,s){var n=wt();s=s===void 0?null:s;var r=n.memoizedState;return r!==null&&s!==null&&Di(s,r[1])?r[0]:(n.memoizedState=[t,s],t)}function Lc(t,s){var n=wt();s=s===void 0?null:s;var r=n.memoizedState;return r!==null&&s!==null&&Di(s,r[1])?r[0]:(t=t(),n.memoizedState=[t,s],t)}function Pc(t,s,n){return(ks&21)===0?(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n):(kt(n,s)||(n=co(),De.lanes|=n,Ss|=n,t.baseState=!0),s)}function Yh(t,s){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Ei.transition;Ei.transition={};try{t(!1),s()}finally{ve=n,Ei.transition=r}}function Tc(){return wt().memoizedState}function Qh(t,s,n){var r=ds(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fc(t))Rc(s,n);else if(n=xc(t,s,n,r),n!==null){var l=et();_t(n,t,r,l),Ac(n,s,r)}}function qh(t,s,n){var r=ds(t),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fc(t))Rc(s,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=s.lastRenderedReducer,i!==null))try{var a=s.lastRenderedState,u=i(a,n);if(l.hasEagerState=!0,l.eagerState=u,kt(u,a)){var p=s.interleaved;p===null?(l.next=l,Si(s)):(l.next=p.next,p.next=l),s.interleaved=l;return}}catch{}finally{}n=xc(t,s,l,r),n!==null&&(l=et(),_t(n,t,r,l),Ac(n,s,r))}}function Fc(t){var s=t.alternate;return t===De||s!==null&&s===De}function Rc(t,s){Pn=Rr=!0;var n=t.pending;n===null?s.next=s:(s.next=n.next,n.next=s),t.pending=s}function Ac(t,s,n){if((n&4194240)!==0){var r=s.lanes;r&=t.pendingLanes,n|=r,s.lanes=n,Ol(t,n)}}var Or={readContext:vt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Jh={readContext:vt,useCallback:function(t,s){return Pt().memoizedState=[t,s===void 0?null:s],t},useContext:vt,useEffect:zc,useImperativeHandle:function(t,s,n){return n=n!=null?n.concat([t]):null,Ar(4194308,4,$c.bind(null,s,t),n)},useLayoutEffect:function(t,s){return Ar(4194308,4,t,s)},useInsertionEffect:function(t,s){return Ar(4,2,t,s)},useMemo:function(t,s){var n=Pt();return s=s===void 0?null:s,t=t(),n.memoizedState=[t,s],t},useReducer:function(t,s,n){var r=Pt();return s=n!==void 0?n(s):s,r.memoizedState=r.baseState=s,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=Qh.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var s=Pt();return t={current:t},s.memoizedState=t},useState:Sc,useDebugValue:Ai,useDeferredValue:function(t){return Pt().memoizedState=t},useTransition:function(){var t=Sc(!1),s=t[0];return t=Yh.bind(null,t[1]),Pt().memoizedState=t,[s,t]},useMutableSource:function(){},useSyncExternalStore:function(t,s,n){var r=De,l=Pt();if(_e){if(n===void 0)throw Error(c(407));n=n()}else{if(n=s(),Be===null)throw Error(c(349));(ks&30)!==0||wc(r,s,n)}l.memoizedState=n;var i={value:n,getSnapshot:s};return l.queue=i,zc(yc.bind(null,r,i,t),[t]),r.flags|=2048,Rn(9,jc.bind(null,r,i,n,s),void 0,null),n},useId:function(){var t=Pt(),s=Be.identifierPrefix;if(_e){var n=Gt,r=Ot;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,s=":"+s+"R"+n,n=Tn++,0<n&&(s+="H"+n.toString(32)),s+=":"}else n=Wh++,s=":"+s+"r"+n.toString(32)+":";return t.memoizedState=s},unstable_isNewReconciler:!1},Kh={readContext:vt,useCallback:Dc,useContext:vt,useEffect:Ri,useImperativeHandle:Ec,useInsertionEffect:Mc,useLayoutEffect:_c,useMemo:Lc,useReducer:Ti,useRef:Cc,useState:function(){return Ti(Fn)},useDebugValue:Ai,useDeferredValue:function(t){var s=wt();return Pc(s,Ie.memoizedState,t)},useTransition:function(){var t=Ti(Fn)[0],s=wt().memoizedState;return[t,s]},useMutableSource:bc,useSyncExternalStore:vc,useId:Tc,unstable_isNewReconciler:!1},Xh={readContext:vt,useCallback:Dc,useContext:vt,useEffect:Ri,useImperativeHandle:Ec,useInsertionEffect:Mc,useLayoutEffect:_c,useMemo:Lc,useReducer:Fi,useRef:Cc,useState:function(){return Fi(Fn)},useDebugValue:Ai,useDeferredValue:function(t){var s=wt();return Ie===null?s.memoizedState=t:Pc(s,Ie.memoizedState,t)},useTransition:function(){var t=Fi(Fn)[0],s=wt().memoizedState;return[t,s]},useMutableSource:bc,useSyncExternalStore:vc,useId:Tc,unstable_isNewReconciler:!1};function Ct(t,s){if(t&&t.defaultProps){s=U({},s),t=t.defaultProps;for(var n in t)s[n]===void 0&&(s[n]=t[n]);return s}return s}function Ii(t,s,n,r){s=t.memoizedState,n=n(r,s),n=n==null?s:U({},s,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gr={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,s,n){t=t._reactInternals;var r=et(),l=ds(t),i=Vt(r,l);i.payload=s,n!=null&&(i.callback=n),s=is(t,i,l),s!==null&&(_t(s,t,l,r),Lr(s,t,l))},enqueueReplaceState:function(t,s,n){t=t._reactInternals;var r=et(),l=ds(t),i=Vt(r,l);i.tag=1,i.payload=s,n!=null&&(i.callback=n),s=is(t,i,l),s!==null&&(_t(s,t,l,r),Lr(s,t,l))},enqueueForceUpdate:function(t,s){t=t._reactInternals;var n=et(),r=ds(t),l=Vt(n,r);l.tag=2,s!=null&&(l.callback=s),s=is(t,l,r),s!==null&&(_t(s,t,r,n),Lr(s,t,r))}};function Ic(t,s,n,r,l,i,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,a):s.prototype&&s.prototype.isPureReactComponent?!Nn(n,r)||!Nn(l,i):!0}function Oc(t,s,n){var r=!1,l=ns,i=s.contextType;return typeof i=="object"&&i!==null?i=vt(i):(l=lt(s)?vs:Qe.current,r=s.contextTypes,i=(r=r!=null)?Vs(t,l):ns),s=new s(n,i),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Gr,t.stateNode=s,s._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=i),s}function Gc(t,s,n,r){t=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(n,r),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(n,r),s.state!==t&&Gr.enqueueReplaceState(s,s.state,null)}function Oi(t,s,n,r){var l=t.stateNode;l.props=n,l.state=t.memoizedState,l.refs={},Ci(t);var i=s.contextType;typeof i=="object"&&i!==null?l.context=vt(i):(i=lt(s)?vs:Qe.current,l.context=Vs(t,i)),l.state=t.memoizedState,i=s.getDerivedStateFromProps,typeof i=="function"&&(Ii(t,s,i,n),l.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&Gr.enqueueReplaceState(l,l.state,null),Pr(t,n,l,r),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,s){try{var n="",r=s;do n+=xe(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:s,stack:l,digest:null}}function Gi(t,s,n){return{value:t,source:null,stack:n??null,digest:s??null}}function Bi(t,s){try{console.error(s.value)}catch(n){setTimeout(function(){throw n})}}var Zh=typeof WeakMap=="function"?WeakMap:Map;function Bc(t,s,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=s.value;return n.callback=function(){Qr||(Qr=!0,na=r),Bi(t,s)},n}function Vc(t,s,n){n=Vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=s.value;n.payload=function(){return r(l)},n.callback=function(){Bi(t,s)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bi(t,s),typeof r!="function"&&(os===null?os=new Set([this]):os.add(this));var a=s.stack;this.componentDidCatch(s.value,{componentStack:a!==null?a:""})}),n}function Uc(t,s,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Zh;var l=new Set;r.set(s,l)}else l=r.get(s),l===void 0&&(l=new Set,r.set(s,l));l.has(n)||(l.add(n),t=xx.bind(null,t,s,n),s.then(t,t))}function Hc(t){do{var s;if((s=t.tag===13)&&(s=t.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return t;t=t.return}while(t!==null);return null}function Wc(t,s,n,r,l){return(t.mode&1)===0?(t===s?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(s=Vt(-1,1),s.tag=2,is(n,s,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=l,t)}var ex=ae.ReactCurrentOwner,it=!1;function Ze(t,s,n,r){s.child=t===null?hc(s,null,n,r):Ys(s,t.child,n,r)}function Yc(t,s,n,r,l){n=n.render;var i=s.ref;return qs(s,l),r=Li(t,s,n,r,i,l),n=Pi(),t!==null&&!it?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~l,Ut(t,s,l)):(_e&&n&&fi(s),s.flags|=1,Ze(t,s,r,l),s.child)}function Qc(t,s,n,r,l){if(t===null){var i=n.type;return typeof i=="function"&&!da(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(s.tag=15,s.type=i,qc(t,s,i,r,l)):(t=el(n.type,null,r,s,s.mode,l),t.ref=s.ref,t.return=s,s.child=t)}if(i=t.child,(t.lanes&l)===0){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Nn,n(a,r)&&t.ref===s.ref)return Ut(t,s,l)}return s.flags|=1,t=hs(i,r),t.ref=s.ref,t.return=s,s.child=t}function qc(t,s,n,r,l){if(t!==null){var i=t.memoizedProps;if(Nn(i,r)&&t.ref===s.ref)if(it=!1,s.pendingProps=r=i,(t.lanes&l)!==0)(t.flags&131072)!==0&&(it=!0);else return s.lanes=t.lanes,Ut(t,s,l)}return Vi(t,s,n,r,l)}function Jc(t,s,n){var r=s.pendingProps,l=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Zs,ft),ft|=n;else{if((n&1073741824)===0)return t=i!==null?i.baseLanes|n:n,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:t,cachePool:null,transitions:null},s.updateQueue=null,ye(Zs,ft),ft|=t,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(Zs,ft),ft|=r}else i!==null?(r=i.baseLanes|n,s.memoizedState=null):r=n,ye(Zs,ft),ft|=r;return Ze(t,s,l,n),s.child}function Kc(t,s){var n=s.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(s.flags|=512,s.flags|=2097152)}function Vi(t,s,n,r,l){var i=lt(n)?vs:Qe.current;return i=Vs(s,i),qs(s,l),n=Li(t,s,n,r,i,l),r=Pi(),t!==null&&!it?(s.updateQueue=t.updateQueue,s.flags&=-2053,t.lanes&=~l,Ut(t,s,l)):(_e&&r&&fi(s),s.flags|=1,Ze(t,s,n,l),s.child)}function Xc(t,s,n,r,l){if(lt(n)){var i=!0;Sr(s)}else i=!1;if(qs(s,l),s.stateNode===null)Vr(t,s),Oc(s,n,r),Oi(s,n,r,l),r=!0;else if(t===null){var a=s.stateNode,u=s.memoizedProps;a.props=u;var p=a.context,S=n.contextType;typeof S=="object"&&S!==null?S=vt(S):(S=lt(n)?vs:Qe.current,S=Vs(s,S));var L=n.getDerivedStateFromProps,T=typeof L=="function"||typeof a.getSnapshotBeforeUpdate=="function";T||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||p!==S)&&Gc(s,a,r,S),ls=!1;var E=s.memoizedState;a.state=E,Pr(s,r,a,l),p=s.memoizedState,u!==r||E!==p||rt.current||ls?(typeof L=="function"&&(Ii(s,n,L,r),p=s.memoizedState),(u=ls||Ic(s,n,u,r,E,p,S))?(T||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(s.flags|=4194308)):(typeof a.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=r,s.memoizedState=p),a.props=r,a.state=p,a.context=S,r=u):(typeof a.componentDidMount=="function"&&(s.flags|=4194308),r=!1)}else{a=s.stateNode,mc(t,s),u=s.memoizedProps,S=s.type===s.elementType?u:Ct(s.type,u),a.props=S,T=s.pendingProps,E=a.context,p=n.contextType,typeof p=="object"&&p!==null?p=vt(p):(p=lt(n)?vs:Qe.current,p=Vs(s,p));var O=n.getDerivedStateFromProps;(L=typeof O=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==T||E!==p)&&Gc(s,a,r,p),ls=!1,E=s.memoizedState,a.state=E,Pr(s,r,a,l);var H=s.memoizedState;u!==T||E!==H||rt.current||ls?(typeof O=="function"&&(Ii(s,n,O,r),H=s.memoizedState),(S=ls||Ic(s,n,S,r,E,H,p)||!1)?(L||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,H,p),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,H,p)),typeof a.componentDidUpdate=="function"&&(s.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),s.memoizedProps=r,s.memoizedState=H),a.props=r,a.state=H,a.context=p,r=S):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&E===t.memoizedState||(s.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&E===t.memoizedState||(s.flags|=1024),r=!1)}return Ui(t,s,n,r,i,l)}function Ui(t,s,n,r,l,i){Kc(t,s);var a=(s.flags&128)!==0;if(!r&&!a)return l&&nc(s,n,!1),Ut(t,s,i);r=s.stateNode,ex.current=s;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return s.flags|=1,t!==null&&a?(s.child=Ys(s,t.child,null,i),s.child=Ys(s,null,u,i)):Ze(t,s,u,i),s.memoizedState=r.state,l&&nc(s,n,!0),s.child}function Zc(t){var s=t.stateNode;s.pendingContext?tc(t,s.pendingContext,s.pendingContext!==s.context):s.context&&tc(t,s.context,!1),zi(t,s.containerInfo)}function ed(t,s,n,r,l){return Ws(),wi(l),s.flags|=256,Ze(t,s,n,r),s.child}var Hi={dehydrated:null,treeContext:null,retryLane:0};function Wi(t){return{baseLanes:t,cachePool:null,transitions:null}}function td(t,s,n){var r=s.pendingProps,l=Ee.current,i=!1,a=(s.flags&128)!==0,u;if((u=a)||(u=t!==null&&t.memoizedState===null?!1:(l&2)!==0),u?(i=!0,s.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),ye(Ee,l&1),t===null)return vi(s),t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((s.mode&1)===0?s.lanes=1:t.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(a=r.children,t=r.fallback,i?(r=s.mode,i=s.child,a={mode:"hidden",children:a},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=a):i=tl(a,r,0,null),t=_s(t,r,n,null),i.return=s,t.return=s,i.sibling=t,s.child=i,s.child.memoizedState=Wi(n),s.memoizedState=Hi,t):Yi(s,a));if(l=t.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return tx(t,s,a,r,u,l,n);if(i){i=r.fallback,a=s.mode,l=t.child,u=l.sibling;var p={mode:"hidden",children:r.children};return(a&1)===0&&s.child!==l?(r=s.child,r.childLanes=0,r.pendingProps=p,s.deletions=null):(r=hs(l,p),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=hs(u,i):(i=_s(i,a,n,null),i.flags|=2),i.return=s,r.return=s,r.sibling=i,s.child=r,r=i,i=s.child,a=t.child.memoizedState,a=a===null?Wi(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=t.childLanes&~n,s.memoizedState=Hi,r}return i=t.child,t=i.sibling,r=hs(i,{mode:"visible",children:r.children}),(s.mode&1)===0&&(r.lanes=n),r.return=s,r.sibling=null,t!==null&&(n=s.deletions,n===null?(s.deletions=[t],s.flags|=16):n.push(t)),s.child=r,s.memoizedState=null,r}function Yi(t,s){return s=tl({mode:"visible",children:s},t.mode,0,null),s.return=t,t.child=s}function Br(t,s,n,r){return r!==null&&wi(r),Ys(s,t.child,null,n),t=Yi(s,s.pendingProps.children),t.flags|=2,s.memoizedState=null,t}function tx(t,s,n,r,l,i,a){if(n)return s.flags&256?(s.flags&=-257,r=Gi(Error(c(422))),Br(t,s,a,r)):s.memoizedState!==null?(s.child=t.child,s.flags|=128,null):(i=r.fallback,l=s.mode,r=tl({mode:"visible",children:r.children},l,0,null),i=_s(i,l,a,null),i.flags|=2,r.return=s,i.return=s,r.sibling=i,s.child=r,(s.mode&1)!==0&&Ys(s,t.child,null,a),s.child.memoizedState=Wi(a),s.memoizedState=Hi,i);if((s.mode&1)===0)return Br(t,s,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(c(419)),r=Gi(i,r,void 0),Br(t,s,a,r)}if(u=(a&t.childLanes)!==0,it||u){if(r=Be,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|a))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Bt(t,l),_t(r,t,l,-1))}return ca(),r=Gi(Error(c(421))),Br(t,s,a,r)}return l.data==="$?"?(s.flags|=128,s.child=t.child,s=mx.bind(null,t),l._reactRetry=s,null):(t=i.treeContext,pt=ts(l.nextSibling),mt=s,_e=!0,St=null,t!==null&&(gt[bt++]=Ot,gt[bt++]=Gt,gt[bt++]=ws,Ot=t.id,Gt=t.overflow,ws=s),s=Yi(s,r.children),s.flags|=4096,s)}function sd(t,s,n){t.lanes|=s;var r=t.alternate;r!==null&&(r.lanes|=s),ki(t.return,s,n)}function Qi(t,s,n,r,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=s,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function nd(t,s,n){var r=s.pendingProps,l=r.revealOrder,i=r.tail;if(Ze(t,s,r.children,n),r=Ee.current,(r&2)!==0)r=r&1|2,s.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=s.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sd(t,n,s);else if(t.tag===19)sd(t,n,s);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break e;for(;t.sibling===null;){if(t.return===null||t.return===s)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ee,r),(s.mode&1)===0)s.memoizedState=null;else switch(l){case"forwards":for(n=s.child,l=null;n!==null;)t=n.alternate,t!==null&&Tr(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=s.child,s.child=null):(l=n.sibling,n.sibling=null),Qi(s,!1,l,n,i);break;case"backwards":for(n=null,l=s.child,s.child=null;l!==null;){if(t=l.alternate,t!==null&&Tr(t)===null){s.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Qi(s,!0,n,null,i);break;case"together":Qi(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Vr(t,s){(s.mode&1)===0&&t!==null&&(t.alternate=null,s.alternate=null,s.flags|=2)}function Ut(t,s,n){if(t!==null&&(s.dependencies=t.dependencies),Ss|=s.lanes,(n&s.childLanes)===0)return null;if(t!==null&&s.child!==t.child)throw Error(c(153));if(s.child!==null){for(t=s.child,n=hs(t,t.pendingProps),s.child=n,n.return=s;t.sibling!==null;)t=t.sibling,n=n.sibling=hs(t,t.pendingProps),n.return=s;n.sibling=null}return s.child}function sx(t,s,n){switch(s.tag){case 3:Zc(s),Ws();break;case 5:gc(s);break;case 1:lt(s.type)&&Sr(s);break;case 4:zi(s,s.stateNode.containerInfo);break;case 10:var r=s.type._context,l=s.memoizedProps.value;ye(Er,r._currentValue),r._currentValue=l;break;case 13:if(r=s.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ee,Ee.current&1),s.flags|=128,null):(n&s.child.childLanes)!==0?td(t,s,n):(ye(Ee,Ee.current&1),t=Ut(t,s,n),t!==null?t.sibling:null);ye(Ee,Ee.current&1);break;case 19:if(r=(n&s.childLanes)!==0,(t.flags&128)!==0){if(r)return nd(t,s,n);s.flags|=128}if(l=s.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ye(Ee,Ee.current),r)break;return null;case 22:case 23:return s.lanes=0,Jc(t,s,n)}return Ut(t,s,n)}var rd,qi,ld,id;rd=function(t,s){for(var n=s.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break;for(;n.sibling===null;){if(n.return===null||n.return===s)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},qi=function(){},ld=function(t,s,n,r){var l=t.memoizedProps;if(l!==r){t=s.stateNode,Ns(Lt.current);var i=null;switch(n){case"input":l=kl(t,l),r=kl(t,r),i=[];break;case"select":l=U({},l,{value:void 0}),r=U({},r,{value:void 0}),i=[];break;case"textarea":l=zl(t,l),r=zl(t,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=yr)}_l(n,r);var a;n=null;for(S in l)if(!r.hasOwnProperty(S)&&l.hasOwnProperty(S)&&l[S]!=null)if(S==="style"){var u=l[S];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(x.hasOwnProperty(S)?i||(i=[]):(i=i||[]).push(S,null));for(S in r){var p=r[S];if(u=l!=null?l[S]:void 0,r.hasOwnProperty(S)&&p!==u&&(p!=null||u!=null))if(S==="style")if(u){for(a in u)!u.hasOwnProperty(a)||p&&p.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in p)p.hasOwnProperty(a)&&u[a]!==p[a]&&(n||(n={}),n[a]=p[a])}else n||(i||(i=[]),i.push(S,n)),n=p;else S==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,u=u?u.__html:void 0,p!=null&&u!==p&&(i=i||[]).push(S,p)):S==="children"?typeof p!="string"&&typeof p!="number"||(i=i||[]).push(S,""+p):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(x.hasOwnProperty(S)?(p!=null&&S==="onScroll"&&Se("scroll",t),i||u===p||(i=[])):(i=i||[]).push(S,p))}n&&(i=i||[]).push("style",n);var S=i;(s.updateQueue=S)&&(s.flags|=4)}},id=function(t,s,n,r){n!==r&&(s.flags|=4)};function An(t,s){if(!_e)switch(t.tailMode){case"hidden":s=t.tail;for(var n=null;s!==null;)s.alternate!==null&&(n=s),s=s.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?s||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var s=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(s)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=n,s}function nx(t,s,n){var r=s.pendingProps;switch(gi(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(s),null;case 1:return lt(s.type)&&kr(),Je(s),null;case 3:return r=s.stateNode,Js(),Ce(rt),Ce(Qe),$i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_r(s)?s.flags|=4:t===null||t.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,St!==null&&(ia(St),St=null))),qi(t,s),Je(s),null;case 5:Mi(s);var l=Ns(Ln.current);if(n=s.type,t!==null&&s.stateNode!=null)ld(t,s,n,r,l),t.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!r){if(s.stateNode===null)throw Error(c(166));return Je(s),null}if(t=Ns(Lt.current),_r(s)){r=s.stateNode,n=s.type;var i=s.memoizedProps;switch(r[Dt]=s,r[Mn]=i,t=(s.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(l=0;l<Sn.length;l++)Se(Sn[l],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Ia(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":Ba(r,i),Se("invalid",r)}_l(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,u,t),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&jr(r.textContent,u,t),l=["children",""+u]):x.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&Se("scroll",r)}switch(n){case"input":Xn(r),Ga(r,i,!0);break;case"textarea":Xn(r),Ua(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=yr)}r=l,s.updateQueue=r,r!==null&&(s.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ha(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Dt]=s,t[Mn]=r,rd(t,s,!1,!1),s.stateNode=t;e:{switch(a=$l(n,r),n){case"dialog":Se("cancel",t),Se("close",t),l=r;break;case"iframe":case"object":case"embed":Se("load",t),l=r;break;case"video":case"audio":for(l=0;l<Sn.length;l++)Se(Sn[l],t);l=r;break;case"source":Se("error",t),l=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),l=r;break;case"details":Se("toggle",t),l=r;break;case"input":Ia(t,r),l=kl(t,r),Se("invalid",t);break;case"option":l=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},l=U({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Ba(t,r),l=zl(t,r),Se("invalid",t);break;default:l=r}_l(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var p=u[i];i==="style"?Qa(t,p):i==="dangerouslySetInnerHTML"?(p=p?p.__html:void 0,p!=null&&Wa(t,p)):i==="children"?typeof p=="string"?(n!=="textarea"||p!=="")&&ln(t,p):typeof p=="number"&&ln(t,""+p):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(x.hasOwnProperty(i)?p!=null&&i==="onScroll"&&Se("scroll",t):p!=null&&re(t,i,p,a))}switch(n){case"input":Xn(t),Ga(t,r,!1);break;case"textarea":Xn(t),Ua(t);break;case"option":r.value!=null&&t.setAttribute("value",""+be(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Es(t,!!r.multiple,i,!1):r.defaultValue!=null&&Es(t,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=yr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Je(s),null;case 6:if(t&&s.stateNode!=null)id(t,s,t.memoizedProps,r);else{if(typeof r!="string"&&s.stateNode===null)throw Error(c(166));if(n=Ns(Ln.current),Ns(Lt.current),_r(s)){if(r=s.stateNode,n=s.memoizedProps,r[Dt]=s,(i=r.nodeValue!==n)&&(t=mt,t!==null))switch(t.tag){case 3:jr(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jr(r.nodeValue,n,(t.mode&1)!==0)}i&&(s.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=s,s.stateNode=r}return Je(s),null;case 13:if(Ce(Ee),r=s.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&pt!==null&&(s.mode&1)!==0&&(s.flags&128)===0)cc(),Ws(),s.flags|=98560,i=!1;else if(i=_r(s),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=s.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Dt]=s}else Ws(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Je(s),i=!1}else St!==null&&(ia(St),St=null),i=!0;if(!i)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=n,s):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(s.child.flags|=8192,(s.mode&1)!==0&&(t===null||(Ee.current&1)!==0?Oe===0&&(Oe=3):ca())),s.updateQueue!==null&&(s.flags|=4),Je(s),null);case 4:return Js(),qi(t,s),t===null&&Cn(s.stateNode.containerInfo),Je(s),null;case 10:return Ni(s.type._context),Je(s),null;case 17:return lt(s.type)&&kr(),Je(s),null;case 19:if(Ce(Ee),i=s.memoizedState,i===null)return Je(s),null;if(r=(s.flags&128)!==0,a=i.rendering,a===null)if(r)An(i,!1);else{if(Oe!==0||t!==null&&(t.flags&128)!==0)for(t=s.child;t!==null;){if(a=Tr(t),a!==null){for(s.flags|=128,An(i,!1),r=a.updateQueue,r!==null&&(s.updateQueue=r,s.flags|=4),s.subtreeFlags=0,r=n,n=s.child;n!==null;)i=n,t=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,t=a.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ee,Ee.current&1|2),s.child}t=t.sibling}i.tail!==null&&Te()>en&&(s.flags|=128,r=!0,An(i,!1),s.lanes=4194304)}else{if(!r)if(t=Tr(a),t!==null){if(s.flags|=128,r=!0,n=t.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),An(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!_e)return Je(s),null}else 2*Te()-i.renderingStartTime>en&&n!==1073741824&&(s.flags|=128,r=!0,An(i,!1),s.lanes=4194304);i.isBackwards?(a.sibling=s.child,s.child=a):(n=i.last,n!==null?n.sibling=a:s.child=a,i.last=a)}return i.tail!==null?(s=i.tail,i.rendering=s,i.tail=s.sibling,i.renderingStartTime=Te(),s.sibling=null,n=Ee.current,ye(Ee,r?n&1|2:n&1),s):(Je(s),null);case 22:case 23:return oa(),r=s.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(s.flags|=8192),r&&(s.mode&1)!==0?(ft&1073741824)!==0&&(Je(s),s.subtreeFlags&6&&(s.flags|=8192)):Je(s),null;case 24:return null;case 25:return null}throw Error(c(156,s.tag))}function rx(t,s){switch(gi(s),s.tag){case 1:return lt(s.type)&&kr(),t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 3:return Js(),Ce(rt),Ce(Qe),$i(),t=s.flags,(t&65536)!==0&&(t&128)===0?(s.flags=t&-65537|128,s):null;case 5:return Mi(s),null;case 13:if(Ce(Ee),t=s.memoizedState,t!==null&&t.dehydrated!==null){if(s.alternate===null)throw Error(c(340));Ws()}return t=s.flags,t&65536?(s.flags=t&-65537|128,s):null;case 19:return Ce(Ee),null;case 4:return Js(),null;case 10:return Ni(s.type._context),null;case 22:case 23:return oa(),null;case 24:return null;default:return null}}var Ur=!1,Ke=!1,lx=typeof WeakSet=="function"?WeakSet:Set,B=null;function Xs(t,s){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,s,r)}else n.current=null}function Ji(t,s,n){try{n()}catch(r){Pe(t,s,r)}}var ad=!1;function ix(t,s){if(oi=dr,t=Io(),ei(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,u=-1,p=-1,S=0,L=0,T=t,E=null;t:for(;;){for(var O;T!==n||l!==0&&T.nodeType!==3||(u=a+l),T!==i||r!==0&&T.nodeType!==3||(p=a+r),T.nodeType===3&&(a+=T.nodeValue.length),(O=T.firstChild)!==null;)E=T,T=O;for(;;){if(T===t)break t;if(E===n&&++S===l&&(u=a),E===i&&++L===r&&(p=a),(O=T.nextSibling)!==null)break;T=E,E=T.parentNode}T=O}n=u===-1||p===-1?null:{start:u,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(ci={focusedElem:t,selectionRange:n},dr=!1,B=s;B!==null;)if(s=B,t=s.child,(s.subtreeFlags&1028)!==0&&t!==null)t.return=s,B=t;else for(;B!==null;){s=B;try{var H=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(H!==null){var Y=H.memoizedProps,Fe=H.memoizedState,w=s.stateNode,f=w.getSnapshotBeforeUpdate(s.elementType===s.type?Y:Ct(s.type,Y),Fe);w.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var N=s.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(A){Pe(s,s.return,A)}if(t=s.sibling,t!==null){t.return=s.return,B=t;break}B=s.return}return H=ad,ad=!1,H}function In(t,s,n){var r=s.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&t)===t){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ji(s,n,i)}l=l.next}while(l!==r)}}function Hr(t,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var n=s=s.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==s)}}function Ki(t){var s=t.ref;if(s!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof s=="function"?s(t):s.current=t}}function od(t){var s=t.alternate;s!==null&&(t.alternate=null,od(s)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(s=t.stateNode,s!==null&&(delete s[Dt],delete s[Mn],delete s[xi],delete s[Bh],delete s[Vh])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cd(t){return t.tag===5||t.tag===3||t.tag===4}function dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xi(t,s,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?n.nodeType===8?n.parentNode.insertBefore(t,s):n.insertBefore(t,s):(n.nodeType===8?(s=n.parentNode,s.insertBefore(t,n)):(s=n,s.appendChild(t)),n=n._reactRootContainer,n!=null||s.onclick!==null||(s.onclick=yr));else if(r!==4&&(t=t.child,t!==null))for(Xi(t,s,n),t=t.sibling;t!==null;)Xi(t,s,n),t=t.sibling}function Zi(t,s,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,s?n.insertBefore(t,s):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zi(t,s,n),t=t.sibling;t!==null;)Zi(t,s,n),t=t.sibling}var He=null,zt=!1;function as(t,s,n){for(n=n.child;n!==null;)ud(t,s,n),n=n.sibling}function ud(t,s,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(rr,n)}catch{}switch(n.tag){case 5:Ke||Xs(n,s);case 6:var r=He,l=zt;He=null,as(t,s,n),He=r,zt=l,He!==null&&(zt?(t=He,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(zt?(t=He,n=n.stateNode,t.nodeType===8?hi(t.parentNode,n):t.nodeType===1&&hi(t,n),gn(t)):hi(He,n.stateNode));break;case 4:r=He,l=zt,He=n.stateNode.containerInfo,zt=!0,as(t,s,n),He=r,zt=l;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&((i&2)!==0||(i&4)!==0)&&Ji(n,s,a),l=l.next}while(l!==r)}as(t,s,n);break;case 1:if(!Ke&&(Xs(n,s),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Pe(n,s,u)}as(t,s,n);break;case 21:as(t,s,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,as(t,s,n),Ke=r):as(t,s,n);break;default:as(t,s,n)}}function hd(t){var s=t.updateQueue;if(s!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lx),s.forEach(function(r){var l=px.bind(null,t,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Mt(t,s){var n=s.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=t,a=s,u=a;e:for(;u!==null;){switch(u.tag){case 5:He=u.stateNode,zt=!1;break e;case 3:He=u.stateNode.containerInfo,zt=!0;break e;case 4:He=u.stateNode.containerInfo,zt=!0;break e}u=u.return}if(He===null)throw Error(c(160));ud(i,a,l),He=null,zt=!1;var p=l.alternate;p!==null&&(p.return=null),l.return=null}catch(S){Pe(l,s,S)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)xd(s,t),s=s.sibling}function xd(t,s){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(s,t),Tt(t),r&4){try{In(3,t,t.return),Hr(3,t)}catch(Y){Pe(t,t.return,Y)}try{In(5,t,t.return)}catch(Y){Pe(t,t.return,Y)}}break;case 1:Mt(s,t),Tt(t),r&512&&n!==null&&Xs(n,n.return);break;case 5:if(Mt(s,t),Tt(t),r&512&&n!==null&&Xs(n,n.return),t.flags&32){var l=t.stateNode;try{ln(l,"")}catch(Y){Pe(t,t.return,Y)}}if(r&4&&(l=t.stateNode,l!=null)){var i=t.memoizedProps,a=n!==null?n.memoizedProps:i,u=t.type,p=t.updateQueue;if(t.updateQueue=null,p!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Oa(l,i),$l(u,a);var S=$l(u,i);for(a=0;a<p.length;a+=2){var L=p[a],T=p[a+1];L==="style"?Qa(l,T):L==="dangerouslySetInnerHTML"?Wa(l,T):L==="children"?ln(l,T):re(l,L,T,S)}switch(u){case"input":Sl(l,i);break;case"textarea":Va(l,i);break;case"select":var E=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var O=i.value;O!=null?Es(l,!!i.multiple,O,!1):E!==!!i.multiple&&(i.defaultValue!=null?Es(l,!!i.multiple,i.defaultValue,!0):Es(l,!!i.multiple,i.multiple?[]:"",!1))}l[Mn]=i}catch(Y){Pe(t,t.return,Y)}}break;case 6:if(Mt(s,t),Tt(t),r&4){if(t.stateNode===null)throw Error(c(162));l=t.stateNode,i=t.memoizedProps;try{l.nodeValue=i}catch(Y){Pe(t,t.return,Y)}}break;case 3:if(Mt(s,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gn(s.containerInfo)}catch(Y){Pe(t,t.return,Y)}break;case 4:Mt(s,t),Tt(t);break;case 13:Mt(s,t),Tt(t),l=t.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(sa=Te())),r&4&&hd(t);break;case 22:if(L=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(S=Ke)||L,Mt(s,t),Ke=S):Mt(s,t),Tt(t),r&8192){if(S=t.memoizedState!==null,(t.stateNode.isHidden=S)&&!L&&(t.mode&1)!==0)for(B=t,L=t.child;L!==null;){for(T=B=L;B!==null;){switch(E=B,O=E.child,E.tag){case 0:case 11:case 14:case 15:In(4,E,E.return);break;case 1:Xs(E,E.return);var H=E.stateNode;if(typeof H.componentWillUnmount=="function"){r=E,n=E.return;try{s=r,H.props=s.memoizedProps,H.state=s.memoizedState,H.componentWillUnmount()}catch(Y){Pe(r,n,Y)}}break;case 5:Xs(E,E.return);break;case 22:if(E.memoizedState!==null){fd(T);continue}}O!==null?(O.return=E,B=O):fd(T)}L=L.sibling}e:for(L=null,T=t;;){if(T.tag===5){if(L===null){L=T;try{l=T.stateNode,S?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=T.stateNode,p=T.memoizedProps.style,a=p!=null&&p.hasOwnProperty("display")?p.display:null,u.style.display=Ya("display",a))}catch(Y){Pe(t,t.return,Y)}}}else if(T.tag===6){if(L===null)try{T.stateNode.nodeValue=S?"":T.memoizedProps}catch(Y){Pe(t,t.return,Y)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===t)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===t)break e;for(;T.sibling===null;){if(T.return===null||T.return===t)break e;L===T&&(L=null),T=T.return}L===T&&(L=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Mt(s,t),Tt(t),r&4&&hd(t);break;case 21:break;default:Mt(s,t),Tt(t)}}function Tt(t){var s=t.flags;if(s&2){try{e:{for(var n=t.return;n!==null;){if(cd(n)){var r=n;break e}n=n.return}throw Error(c(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ln(l,""),r.flags&=-33);var i=dd(t);Zi(t,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,u=dd(t);Xi(t,u,a);break;default:throw Error(c(161))}}catch(p){Pe(t,t.return,p)}t.flags&=-3}s&4096&&(t.flags&=-4097)}function ax(t,s,n){B=t,md(t)}function md(t,s,n){for(var r=(t.mode&1)!==0;B!==null;){var l=B,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||Ur;if(!a){var u=l.alternate,p=u!==null&&u.memoizedState!==null||Ke;u=Ur;var S=Ke;if(Ur=a,(Ke=p)&&!S)for(B=l;B!==null;)a=B,p=a.child,a.tag===22&&a.memoizedState!==null?gd(l):p!==null?(p.return=a,B=p):gd(l);for(;i!==null;)B=i,md(i),i=i.sibling;B=l,Ur=u,Ke=S}pd(t)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,B=i):pd(t)}}function pd(t){for(;B!==null;){var s=B;if((s.flags&8772)!==0){var n=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Ke||Hr(5,s);break;case 1:var r=s.stateNode;if(s.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var l=s.elementType===s.type?n.memoizedProps:Ct(s.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=s.updateQueue;i!==null&&fc(s,i,r);break;case 3:var a=s.updateQueue;if(a!==null){if(n=null,s.child!==null)switch(s.child.tag){case 5:n=s.child.stateNode;break;case 1:n=s.child.stateNode}fc(s,a,n)}break;case 5:var u=s.stateNode;if(n===null&&s.flags&4){n=u;var p=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":p.autoFocus&&n.focus();break;case"img":p.src&&(n.src=p.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var S=s.alternate;if(S!==null){var L=S.memoizedState;if(L!==null){var T=L.dehydrated;T!==null&&gn(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}Ke||s.flags&512&&Ki(s)}catch(E){Pe(s,s.return,E)}}if(s===t){B=null;break}if(n=s.sibling,n!==null){n.return=s.return,B=n;break}B=s.return}}function fd(t){for(;B!==null;){var s=B;if(s===t){B=null;break}var n=s.sibling;if(n!==null){n.return=s.return,B=n;break}B=s.return}}function gd(t){for(;B!==null;){var s=B;try{switch(s.tag){case 0:case 11:case 15:var n=s.return;try{Hr(4,s)}catch(p){Pe(s,n,p)}break;case 1:var r=s.stateNode;if(typeof r.componentDidMount=="function"){var l=s.return;try{r.componentDidMount()}catch(p){Pe(s,l,p)}}var i=s.return;try{Ki(s)}catch(p){Pe(s,i,p)}break;case 5:var a=s.return;try{Ki(s)}catch(p){Pe(s,a,p)}}}catch(p){Pe(s,s.return,p)}if(s===t){B=null;break}var u=s.sibling;if(u!==null){u.return=s.return,B=u;break}B=s.return}}var ox=Math.ceil,Wr=ae.ReactCurrentDispatcher,ea=ae.ReactCurrentOwner,jt=ae.ReactCurrentBatchConfig,ue=0,Be=null,Re=null,We=0,ft=0,Zs=ss(0),Oe=0,On=null,Ss=0,Yr=0,ta=0,Gn=null,at=null,sa=0,en=1/0,Ht=null,Qr=!1,na=null,os=null,qr=!1,cs=null,Jr=0,Bn=0,ra=null,Kr=-1,Xr=0;function et(){return(ue&6)!==0?Te():Kr!==-1?Kr:Kr=Te()}function ds(t){return(t.mode&1)===0?1:(ue&2)!==0&&We!==0?We&-We:Hh.transition!==null?(Xr===0&&(Xr=co()),Xr):(t=ve,t!==0||(t=window.event,t=t===void 0?16:vo(t.type)),t)}function _t(t,s,n,r){if(50<Bn)throw Bn=0,ra=null,Error(c(185));hn(t,n,r),((ue&2)===0||t!==Be)&&(t===Be&&((ue&2)===0&&(Yr|=n),Oe===4&&us(t,We)),ot(t,r),n===1&&ue===0&&(s.mode&1)===0&&(en=Te()+500,Cr&&rs()))}function ot(t,s){var n=t.callbackNode;Hu(t,s);var r=ar(t,t===Be?We:0);if(r===0)n!==null&&io(n),t.callbackNode=null,t.callbackPriority=0;else if(s=r&-r,t.callbackPriority!==s){if(n!=null&&io(n),s===1)t.tag===0?Uh(vd.bind(null,t)):rc(vd.bind(null,t)),Oh(function(){(ue&6)===0&&rs()}),n=null;else{switch(uo(r)){case 1:n=Rl;break;case 4:n=ao;break;case 16:n=nr;break;case 536870912:n=oo;break;default:n=nr}n=zd(n,bd.bind(null,t))}t.callbackPriority=s,t.callbackNode=n}}function bd(t,s){if(Kr=-1,Xr=0,(ue&6)!==0)throw Error(c(327));var n=t.callbackNode;if(tn()&&t.callbackNode!==n)return null;var r=ar(t,t===Be?We:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||s)s=Zr(t,r);else{s=r;var l=ue;ue|=2;var i=jd();(Be!==t||We!==s)&&(Ht=null,en=Te()+500,zs(t,s));do try{ux();break}catch(u){wd(t,u)}while(!0);yi(),Wr.current=i,ue=l,Re!==null?s=0:(Be=null,We=0,s=Oe)}if(s!==0){if(s===2&&(l=Al(t),l!==0&&(r=l,s=la(t,l))),s===1)throw n=On,zs(t,0),us(t,r),ot(t,Te()),n;if(s===6)us(t,r);else{if(l=t.current.alternate,(r&30)===0&&!cx(l)&&(s=Zr(t,r),s===2&&(i=Al(t),i!==0&&(r=i,s=la(t,i))),s===1))throw n=On,zs(t,0),us(t,r),ot(t,Te()),n;switch(t.finishedWork=l,t.finishedLanes=r,s){case 0:case 1:throw Error(c(345));case 2:Ms(t,at,Ht);break;case 3:if(us(t,r),(r&130023424)===r&&(s=sa+500-Te(),10<s)){if(ar(t,0)!==0)break;if(l=t.suspendedLanes,(l&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=ui(Ms.bind(null,t,at,Ht),s);break}Ms(t,at,Ht);break;case 4:if(us(t,r),(r&4194240)===r)break;for(s=t.eventTimes,l=-1;0<r;){var a=31-Nt(r);i=1<<a,a=s[a],a>l&&(l=a),r&=~i}if(r=l,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ox(r/1960))-r,10<r){t.timeoutHandle=ui(Ms.bind(null,t,at,Ht),r);break}Ms(t,at,Ht);break;case 5:Ms(t,at,Ht);break;default:throw Error(c(329))}}}return ot(t,Te()),t.callbackNode===n?bd.bind(null,t):null}function la(t,s){var n=Gn;return t.current.memoizedState.isDehydrated&&(zs(t,s).flags|=256),t=Zr(t,s),t!==2&&(s=at,at=n,s!==null&&ia(s)),t}function ia(t){at===null?at=t:at.push.apply(at,t)}function cx(t){for(var s=t;;){if(s.flags&16384){var n=s.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!kt(i(),l))return!1}catch{return!1}}}if(n=s.child,s.subtreeFlags&16384&&n!==null)n.return=s,s=n;else{if(s===t)break;for(;s.sibling===null;){if(s.return===null||s.return===t)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(t,s){for(s&=~ta,s&=~Yr,t.suspendedLanes|=s,t.pingedLanes&=~s,t=t.expirationTimes;0<s;){var n=31-Nt(s),r=1<<n;t[n]=-1,s&=~r}}function vd(t){if((ue&6)!==0)throw Error(c(327));tn();var s=ar(t,0);if((s&1)===0)return ot(t,Te()),null;var n=Zr(t,s);if(t.tag!==0&&n===2){var r=Al(t);r!==0&&(s=r,n=la(t,r))}if(n===1)throw n=On,zs(t,0),us(t,s),ot(t,Te()),n;if(n===6)throw Error(c(345));return t.finishedWork=t.current.alternate,t.finishedLanes=s,Ms(t,at,Ht),ot(t,Te()),null}function aa(t,s){var n=ue;ue|=1;try{return t(s)}finally{ue=n,ue===0&&(en=Te()+500,Cr&&rs())}}function Cs(t){cs!==null&&cs.tag===0&&(ue&6)===0&&tn();var s=ue;ue|=1;var n=jt.transition,r=ve;try{if(jt.transition=null,ve=1,t)return t()}finally{ve=r,jt.transition=n,ue=s,(ue&6)===0&&rs()}}function oa(){ft=Zs.current,Ce(Zs)}function zs(t,s){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ih(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(gi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&kr();break;case 3:Js(),Ce(rt),Ce(Qe),$i();break;case 5:Mi(r);break;case 4:Js();break;case 13:Ce(Ee);break;case 19:Ce(Ee);break;case 10:Ni(r.type._context);break;case 22:case 23:oa()}n=n.return}if(Be=t,Re=t=hs(t.current,null),We=ft=s,Oe=0,On=null,ta=Yr=Ss=0,at=Gn=null,ys!==null){for(s=0;s<ys.length;s++)if(n=ys[s],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}ys=null}return t}function wd(t,s){do{var n=Re;try{if(yi(),Fr.current=Or,Rr){for(var r=De.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Rr=!1}if(ks=0,Ge=Ie=De=null,Pn=!1,Tn=0,ea.current=null,n===null||n.return===null){Oe=1,On=s,Re=null;break}e:{var i=t,a=n.return,u=n,p=s;if(s=We,u.flags|=32768,p!==null&&typeof p=="object"&&typeof p.then=="function"){var S=p,L=u,T=L.tag;if((L.mode&1)===0&&(T===0||T===11||T===15)){var E=L.alternate;E?(L.updateQueue=E.updateQueue,L.memoizedState=E.memoizedState,L.lanes=E.lanes):(L.updateQueue=null,L.memoizedState=null)}var O=Hc(a);if(O!==null){O.flags&=-257,Wc(O,a,u,i,s),O.mode&1&&Uc(i,S,s),s=O,p=S;var H=s.updateQueue;if(H===null){var Y=new Set;Y.add(p),s.updateQueue=Y}else H.add(p);break e}else{if((s&1)===0){Uc(i,S,s),ca();break e}p=Error(c(426))}}else if(_e&&u.mode&1){var Fe=Hc(a);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),Wc(Fe,a,u,i,s),wi(Ks(p,u));break e}}i=p=Ks(p,u),Oe!==4&&(Oe=2),Gn===null?Gn=[i]:Gn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,s&=-s,i.lanes|=s;var w=Bc(i,p,s);pc(i,w);break e;case 1:u=p;var f=i.type,N=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(os===null||!os.has(N)))){i.flags|=65536,s&=-s,i.lanes|=s;var A=Vc(i,u,s);pc(i,A);break e}}i=i.return}while(i!==null)}Nd(n)}catch(q){s=q,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function jd(){var t=Wr.current;return Wr.current=Or,t===null?Or:t}function ca(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Be===null||(Ss&268435455)===0&&(Yr&268435455)===0||us(Be,We)}function Zr(t,s){var n=ue;ue|=2;var r=jd();(Be!==t||We!==s)&&(Ht=null,zs(t,s));do try{dx();break}catch(l){wd(t,l)}while(!0);if(yi(),ue=n,Wr.current=r,Re!==null)throw Error(c(261));return Be=null,We=0,Oe}function dx(){for(;Re!==null;)yd(Re)}function ux(){for(;Re!==null&&!Fu();)yd(Re)}function yd(t){var s=Cd(t.alternate,t,ft);t.memoizedProps=t.pendingProps,s===null?Nd(t):Re=s,ea.current=null}function Nd(t){var s=t;do{var n=s.alternate;if(t=s.return,(s.flags&32768)===0){if(n=nx(n,s,ft),n!==null){Re=n;return}}else{if(n=rx(n,s),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,Re=null;return}}if(s=s.sibling,s!==null){Re=s;return}Re=s=t}while(s!==null);Oe===0&&(Oe=5)}function Ms(t,s,n){var r=ve,l=jt.transition;try{jt.transition=null,ve=1,hx(t,s,n,r)}finally{jt.transition=l,ve=r}return null}function hx(t,s,n,r){do tn();while(cs!==null);if((ue&6)!==0)throw Error(c(327));n=t.finishedWork;var l=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wu(t,i),t===Be&&(Re=Be=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qr||(qr=!0,zd(nr,function(){return tn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=jt.transition,jt.transition=null;var a=ve;ve=1;var u=ue;ue|=4,ea.current=null,ix(t,n),xd(n,t),Dh(ci),dr=!!oi,ci=oi=null,t.current=n,ax(n),Ru(),ue=u,ve=a,jt.transition=i}else t.current=n;if(qr&&(qr=!1,cs=t,Jr=l),i=t.pendingLanes,i===0&&(os=null),Ou(n.stateNode),ot(t,Te()),s!==null)for(r=t.onRecoverableError,n=0;n<s.length;n++)l=s[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Qr)throw Qr=!1,t=na,na=null,t;return(Jr&1)!==0&&t.tag!==0&&tn(),i=t.pendingLanes,(i&1)!==0?t===ra?Bn++:(Bn=0,ra=t):Bn=0,rs(),null}function tn(){if(cs!==null){var t=uo(Jr),s=jt.transition,n=ve;try{if(jt.transition=null,ve=16>t?16:t,cs===null)var r=!1;else{if(t=cs,cs=null,Jr=0,(ue&6)!==0)throw Error(c(331));var l=ue;for(ue|=4,B=t.current;B!==null;){var i=B,a=i.child;if((B.flags&16)!==0){var u=i.deletions;if(u!==null){for(var p=0;p<u.length;p++){var S=u[p];for(B=S;B!==null;){var L=B;switch(L.tag){case 0:case 11:case 15:In(8,L,i)}var T=L.child;if(T!==null)T.return=L,B=T;else for(;B!==null;){L=B;var E=L.sibling,O=L.return;if(od(L),L===S){B=null;break}if(E!==null){E.return=O,B=E;break}B=O}}}var H=i.alternate;if(H!==null){var Y=H.child;if(Y!==null){H.child=null;do{var Fe=Y.sibling;Y.sibling=null,Y=Fe}while(Y!==null)}}B=i}}if((i.subtreeFlags&2064)!==0&&a!==null)a.return=i,B=a;else e:for(;B!==null;){if(i=B,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:In(9,i,i.return)}var w=i.sibling;if(w!==null){w.return=i.return,B=w;break e}B=i.return}}var f=t.current;for(B=f;B!==null;){a=B;var N=a.child;if((a.subtreeFlags&2064)!==0&&N!==null)N.return=a,B=N;else e:for(a=f;B!==null;){if(u=B,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Hr(9,u)}}catch(q){Pe(u,u.return,q)}if(u===a){B=null;break e}var A=u.sibling;if(A!==null){A.return=u.return,B=A;break e}B=u.return}}if(ue=l,rs(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(rr,t)}catch{}r=!0}return r}finally{ve=n,jt.transition=s}}return!1}function kd(t,s,n){s=Ks(n,s),s=Bc(t,s,1),t=is(t,s,1),s=et(),t!==null&&(hn(t,1,s),ot(t,s))}function Pe(t,s,n){if(t.tag===3)kd(t,t,n);else for(;s!==null;){if(s.tag===3){kd(s,t,n);break}else if(s.tag===1){var r=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(os===null||!os.has(r))){t=Ks(n,t),t=Vc(s,t,1),s=is(s,t,1),t=et(),s!==null&&(hn(s,1,t),ot(s,t));break}}s=s.return}}function xx(t,s,n){var r=t.pingCache;r!==null&&r.delete(s),s=et(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Te()-sa?zs(t,0):ta|=n),ot(t,s)}function Sd(t,s){s===0&&((t.mode&1)===0?s=1:(s=ir,ir<<=1,(ir&130023424)===0&&(ir=4194304)));var n=et();t=Bt(t,s),t!==null&&(hn(t,s,n),ot(t,n))}function mx(t){var s=t.memoizedState,n=0;s!==null&&(n=s.retryLane),Sd(t,n)}function px(t,s){var n=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(c(314))}r!==null&&r.delete(s),Sd(t,n)}var Cd;Cd=function(t,s,n){if(t!==null)if(t.memoizedProps!==s.pendingProps||rt.current)it=!0;else{if((t.lanes&n)===0&&(s.flags&128)===0)return it=!1,sx(t,s,n);it=(t.flags&131072)!==0}else it=!1,_e&&(s.flags&1048576)!==0&&lc(s,Mr,s.index);switch(s.lanes=0,s.tag){case 2:var r=s.type;Vr(t,s),t=s.pendingProps;var l=Vs(s,Qe.current);qs(s,n),l=Li(null,s,r,t,l,n);var i=Pi();return s.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,lt(r)?(i=!0,Sr(s)):i=!1,s.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Ci(s),l.updater=Gr,s.stateNode=l,l._reactInternals=s,Oi(s,r,t,n),s=Ui(null,s,r,!0,i,n)):(s.tag=0,_e&&i&&fi(s),Ze(null,s,l,n),s=s.child),s;case 16:r=s.elementType;e:{switch(Vr(t,s),t=s.pendingProps,l=r._init,r=l(r._payload),s.type=r,l=s.tag=gx(r),t=Ct(r,t),l){case 0:s=Vi(null,s,r,t,n);break e;case 1:s=Xc(null,s,r,t,n);break e;case 11:s=Yc(null,s,r,t,n);break e;case 14:s=Qc(null,s,r,Ct(r.type,t),n);break e}throw Error(c(306,r,""))}return s;case 0:return r=s.type,l=s.pendingProps,l=s.elementType===r?l:Ct(r,l),Vi(t,s,r,l,n);case 1:return r=s.type,l=s.pendingProps,l=s.elementType===r?l:Ct(r,l),Xc(t,s,r,l,n);case 3:e:{if(Zc(s),t===null)throw Error(c(387));r=s.pendingProps,i=s.memoizedState,l=i.element,mc(t,s),Pr(s,r,null,n);var a=s.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},s.updateQueue.baseState=i,s.memoizedState=i,s.flags&256){l=Ks(Error(c(423)),s),s=ed(t,s,r,n,l);break e}else if(r!==l){l=Ks(Error(c(424)),s),s=ed(t,s,r,n,l);break e}else for(pt=ts(s.stateNode.containerInfo.firstChild),mt=s,_e=!0,St=null,n=hc(s,null,r,n),s.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),r===l){s=Ut(t,s,n);break e}Ze(t,s,r,n)}s=s.child}return s;case 5:return gc(s),t===null&&vi(s),r=s.type,l=s.pendingProps,i=t!==null?t.memoizedProps:null,a=l.children,di(r,l)?a=null:i!==null&&di(r,i)&&(s.flags|=32),Kc(t,s),Ze(t,s,a,n),s.child;case 6:return t===null&&vi(s),null;case 13:return td(t,s,n);case 4:return zi(s,s.stateNode.containerInfo),r=s.pendingProps,t===null?s.child=Ys(s,null,r,n):Ze(t,s,r,n),s.child;case 11:return r=s.type,l=s.pendingProps,l=s.elementType===r?l:Ct(r,l),Yc(t,s,r,l,n);case 7:return Ze(t,s,s.pendingProps,n),s.child;case 8:return Ze(t,s,s.pendingProps.children,n),s.child;case 12:return Ze(t,s,s.pendingProps.children,n),s.child;case 10:e:{if(r=s.type._context,l=s.pendingProps,i=s.memoizedProps,a=l.value,ye(Er,r._currentValue),r._currentValue=a,i!==null)if(kt(i.value,a)){if(i.children===l.children&&!rt.current){s=Ut(t,s,n);break e}}else for(i=s.child,i!==null&&(i.return=s);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var p=u.firstContext;p!==null;){if(p.context===r){if(i.tag===1){p=Vt(-1,n&-n),p.tag=2;var S=i.updateQueue;if(S!==null){S=S.shared;var L=S.pending;L===null?p.next=p:(p.next=L.next,L.next=p),S.pending=p}}i.lanes|=n,p=i.alternate,p!==null&&(p.lanes|=n),ki(i.return,n,s),u.lanes|=n;break}p=p.next}}else if(i.tag===10)a=i.type===s.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(c(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),ki(a,n,s),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===s){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ze(t,s,l.children,n),s=s.child}return s;case 9:return l=s.type,r=s.pendingProps.children,qs(s,n),l=vt(l),r=r(l),s.flags|=1,Ze(t,s,r,n),s.child;case 14:return r=s.type,l=Ct(r,s.pendingProps),l=Ct(r.type,l),Qc(t,s,r,l,n);case 15:return qc(t,s,s.type,s.pendingProps,n);case 17:return r=s.type,l=s.pendingProps,l=s.elementType===r?l:Ct(r,l),Vr(t,s),s.tag=1,lt(r)?(t=!0,Sr(s)):t=!1,qs(s,n),Oc(s,r,l),Oi(s,r,l,n),Ui(null,s,r,!0,t,n);case 19:return nd(t,s,n);case 22:return Jc(t,s,n)}throw Error(c(156,s.tag))};function zd(t,s){return lo(t,s)}function fx(t,s,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(t,s,n,r){return new fx(t,s,n,r)}function da(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gx(t){if(typeof t=="function")return da(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Le)return 11;if(t===nt)return 14}return 2}function hs(t,s){var n=t.alternate;return n===null?(n=yt(t.tag,s,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=s,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,s=t.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,s,n,r,l,i){var a=2;if(r=t,typeof t=="function")da(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case fe:return _s(n.children,l,i,s);case ne:a=8,l|=8;break;case ge:return t=yt(12,n,s,l|2),t.elementType=ge,t.lanes=i,t;case $e:return t=yt(13,n,s,l),t.elementType=$e,t.lanes=i,t;case Ue:return t=yt(19,n,s,l),t.elementType=Ue,t.lanes=i,t;case Q:return tl(n,l,i,s);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case we:a=10;break e;case K:a=9;break e;case Le:a=11;break e;case nt:a=14;break e;case P:a=16,r=null;break e}throw Error(c(130,t==null?t:typeof t,""))}return s=yt(a,n,s,l),s.elementType=t,s.type=r,s.lanes=i,s}function _s(t,s,n,r){return t=yt(7,t,r,s),t.lanes=n,t}function tl(t,s,n,r){return t=yt(22,t,r,s),t.elementType=Q,t.lanes=n,t.stateNode={isHidden:!1},t}function ua(t,s,n){return t=yt(6,t,null,s),t.lanes=n,t}function ha(t,s,n){return s=yt(4,t.children!==null?t.children:[],t.key,s),s.lanes=n,s.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},s}function bx(t,s,n,r,l){this.tag=s,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function xa(t,s,n,r,l,i,a,u,p){return t=new bx(t,s,n,u,p),s===1?(s=1,i===!0&&(s|=8)):s=0,i=yt(3,null,null,s),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ci(i),t}function vx(t,s,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ke,key:r==null?null:""+r,children:t,containerInfo:s,implementation:n}}function Md(t){if(!t)return ns;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(c(170));var s=t;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(lt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(c(171))}if(t.tag===1){var n=t.type;if(lt(n))return sc(t,n,s)}return s}function _d(t,s,n,r,l,i,a,u,p){return t=xa(n,r,!0,t,l,i,a,u,p),t.context=Md(null),n=t.current,r=et(),l=ds(n),i=Vt(r,l),i.callback=s??null,is(n,i,l),t.current.lanes=l,hn(t,l,r),ot(t,r),t}function sl(t,s,n,r){var l=s.current,i=et(),a=ds(l);return n=Md(n),s.context===null?s.context=n:s.pendingContext=n,s=Vt(i,a),s.payload={element:t},r=r===void 0?null:r,r!==null&&(s.callback=r),t=is(l,s,a),t!==null&&(_t(t,l,a,i),Lr(t,l,a)),a}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $d(t,s){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<s?n:s}}function ma(t,s){$d(t,s),(t=t.alternate)&&$d(t,s)}function wx(){return null}var Ed=typeof reportError=="function"?reportError:function(t){console.error(t)};function pa(t){this._internalRoot=t}rl.prototype.render=pa.prototype.render=function(t){var s=this._internalRoot;if(s===null)throw Error(c(409));sl(t,s,null,null)},rl.prototype.unmount=pa.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var s=t.containerInfo;Cs(function(){sl(null,t,null,null)}),s[At]=null}};function rl(t){this._internalRoot=t}rl.prototype.unstable_scheduleHydration=function(t){if(t){var s=mo();t={blockedOn:null,target:t,priority:s};for(var n=0;n<Xt.length&&s!==0&&s<Xt[n].priority;n++);Xt.splice(n,0,t),n===0&&go(t)}};function fa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ll(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function jx(t,s,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var S=nl(a);i.call(S)}}var a=_d(s,r,t,0,null,!1,!1,"",Dd);return t._reactRootContainer=a,t[At]=a.current,Cn(t.nodeType===8?t.parentNode:t),Cs(),a}for(;l=t.lastChild;)t.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var S=nl(p);u.call(S)}}var p=xa(t,0,!1,null,null,!1,!1,"",Dd);return t._reactRootContainer=p,t[At]=p.current,Cn(t.nodeType===8?t.parentNode:t),Cs(function(){sl(s,p,n,r)}),p}function il(t,s,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var u=l;l=function(){var p=nl(a);u.call(p)}}sl(s,a,t,l)}else a=jx(n,s,t,l,r);return nl(a)}ho=function(t){switch(t.tag){case 3:var s=t.stateNode;if(s.current.memoizedState.isDehydrated){var n=un(s.pendingLanes);n!==0&&(Ol(s,n|1),ot(s,Te()),(ue&6)===0&&(en=Te()+500,rs()))}break;case 13:Cs(function(){var r=Bt(t,1);if(r!==null){var l=et();_t(r,t,1,l)}}),ma(t,1)}},Gl=function(t){if(t.tag===13){var s=Bt(t,134217728);if(s!==null){var n=et();_t(s,t,134217728,n)}ma(t,134217728)}},xo=function(t){if(t.tag===13){var s=ds(t),n=Bt(t,s);if(n!==null){var r=et();_t(n,t,s,r)}ma(t,s)}},mo=function(){return ve},po=function(t,s){var n=ve;try{return ve=t,s()}finally{ve=n}},Ll=function(t,s,n){switch(s){case"input":if(Sl(t,n),s=n.name,n.type==="radio"&&s!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<n.length;s++){var r=n[s];if(r!==t&&r.form===t.form){var l=Nr(r);if(!l)throw Error(c(90));Aa(r),Sl(r,l)}}}break;case"textarea":Va(t,n);break;case"select":s=n.value,s!=null&&Es(t,!!n.multiple,s,!1)}},Xa=aa,Za=Cs;var yx={usingClientEntryPoint:!1,Events:[_n,Gs,Nr,Ja,Ka,aa]},Vn={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nx={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ae.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=no(t),t===null?null:t.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{rr=al.inject(Nx),Et=al}catch{}}return ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yx,ct.createPortal=function(t,s){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fa(s))throw Error(c(200));return vx(t,s,null,n)},ct.createRoot=function(t,s){if(!fa(t))throw Error(c(299));var n=!1,r="",l=Ed;return s!=null&&(s.unstable_strictMode===!0&&(n=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onRecoverableError!==void 0&&(l=s.onRecoverableError)),s=xa(t,1,!1,null,null,n,!1,r,l),t[At]=s.current,Cn(t.nodeType===8?t.parentNode:t),new pa(s)},ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var s=t._reactInternals;if(s===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=no(s),t=t===null?null:t.stateNode,t},ct.flushSync=function(t){return Cs(t)},ct.hydrate=function(t,s,n){if(!ll(s))throw Error(c(200));return il(null,t,s,!0,n)},ct.hydrateRoot=function(t,s,n){if(!fa(t))throw Error(c(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=Ed;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),s=_d(s,null,t,1,n??null,l,!1,i,a),t[At]=s.current,Cn(t),r)for(t=0;t<r.length;t++)n=r[t],l=n._getVersion,l=l(n._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[n,l]:s.mutableSourceEagerHydrationData.push(n,l);return new rl(s)},ct.render=function(t,s,n){if(!ll(s))throw Error(c(200));return il(null,t,s,!1,n)},ct.unmountComponentAtNode=function(t){if(!ll(t))throw Error(c(40));return t._reactRootContainer?(Cs(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[At]=null})}),!0):!1},ct.unstable_batchedUpdates=aa,ct.unstable_renderSubtreeIntoContainer=function(t,s,n,r){if(!ll(n))throw Error(c(200));if(t==null||t._reactInternals===void 0)throw Error(c(38));return il(t,s,n,!1,r)},ct.version="18.3.1-next-f1338f8080-20240426",ct}var Od;function hu(){if(Od)return va.exports;Od=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),va.exports=$x(),va.exports}var Gd;function Ex(){if(Gd)return ol;Gd=1;var o=hu();return ol.createRoot=o.createRoot,ol.hydrateRoot=o.hydrateRoot,ol}var Dx=Ex(),he=La();const I=uu(he);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Px=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,c,h)=>h?h.toUpperCase():c.toLowerCase()),Bd=o=>{const d=Px(o);return d.charAt(0).toUpperCase()+d.slice(1)},xu=(...o)=>o.filter((d,c,h)=>!!d&&d.trim()!==""&&h.indexOf(d)===c).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=he.forwardRef(({color:o="currentColor",size:d=24,strokeWidth:c=2,absoluteStrokeWidth:h,className:x="",children:m,iconNode:g,...j},y)=>he.createElement("svg",{ref:y,...Tx,width:d,height:d,stroke:o,strokeWidth:h?Number(c)*24/Number(d):c,className:xu("lucide",x),...j},[...g.map(([b,_])=>he.createElement(b,_)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(o,d)=>{const c=he.forwardRef(({className:h,...x},m)=>he.createElement(Fx,{ref:m,iconNode:d,className:xu(`lucide-${Lx(Bd(o))}`,`lucide-${o}`,h),...x}));return c.displayName=Bd(o),c};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ax=M("activity",Rx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 18H5",key:"18s9l3"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Ox=M("align-center",Ix);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Bx=M("align-left",Gx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 18H7",key:"1ygte8"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Ux=M("align-right",Vx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Wx=M("arrow-down",Hx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],ka=M("arrow-up-down",Yx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],qx=M("arrow-up",Qx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]],Kx=M("at-sign",Jx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",key:"178tsu"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",key:"1hqiys"}]],Zx=M("bell-off",Xx);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],nn=M("bell",e0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],s0=M("bold",t0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],r0=M("bookmark",n0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Vd=M("boxes",l0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Qn=M("calendar",i0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],o0=M("camera",a0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Sa=M("chart-column",c0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ps=M("check",d0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],$s=M("chevron-down",u0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],yl=M("chevron-left",h0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Qt=M("chevron-right",x0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],p0=M("chevron-up",m0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]],mu=M("chevrons-left",f0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]],pu=M("chevrons-right",g0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],fu=M("circle-alert",b0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Pa=M("circle-check-big",v0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],gu=M("circle-x",w0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],bu=M("code",j0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Ca=M("copy",y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Ud=M("credit-card",N0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Hd=M("database",k0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],C0=M("dollar-sign",S0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],qn=M("download",z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],vu=M("ellipsis-vertical",M0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],$0=M("eye-off",_0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],D0=M("eye",E0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],za=M("file-text",L0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],T0=M("frown",P0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],R0=M("globe",F0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Wd=M("grid-3x3",A0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],O0=M("grip-vertical",I0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Kn=M("heart",G0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],wu=M("hexagon",B0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Nl=M("house",V0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],H0=M("image",U0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Jn=M("info",W0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],Q0=M("italic",Y0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],ju=M("layout-dashboard",q0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Yd=M("loader-circle",J0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],X0=M("lock",K0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],pl=M("mail",Z0);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],fl=M("map-pin",em);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Ma=M("maximize-2",tm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],nm=M("meh",sm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],yu=M("menu",rm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],_a=M("message-circle",lm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],$a=M("message-square",im);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],om=M("mic-off",am);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],dm=M("mic",cm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"M5 12h14",key:"1ays0h"}]],Nu=M("minus",um);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],cl=M("monitor",hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],mm=M("moon",xm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]],Qd=M("mouse-pointer-2",pm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],gm=M("music",fm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]],qd=M("navigation-2",bm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Wn=M("palette",vm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],gl=M("panels-top-left",wm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],Jd=M("paperclip",jm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Nm=M("pause",ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Sm=M("phone-call",km);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Yn=M("phone",Cm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],Mm=M("pin-off",zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],Kd=M("pin",_m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Em=M("play",$m);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ta=M("plus",Dm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],Xd=M("rectangle-ellipsis",Lm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Tm=M("rocket",Pm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Zd=M("rotate-ccw",Fm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ut=M("search",Rm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],bl=M("send",Am);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fs=M("settings",Im);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],vl=M("share-2",Om);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Bm=M("shopping-cart",Gm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],eu=M("smartphone",Vm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Ea=M("smile",Um);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],tu=M("sparkles",Hm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],su=M("square-check-big",Wm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],Fa=M("square-pen",Ym);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ye=M("star",Qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Jm=M("sun",qm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]],nu=M("table",Km);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],ru=M("tablet",Xm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}]],ep=M("thumbs-down",Zm);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]],ku=M("thumbs-up",tp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]],lu=M("toggle-left",sp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Ra=M("trash-2",np);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]],lp=M("trending-down",rp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],ap=M("trending-up",ip);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Su=M("triangle-alert",op);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],Da=M("type",cp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],up=M("underline",dp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],xp=M("upload",hp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],st=M("user",mp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],wl=M("users",pp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],jl=M("video",fp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Cu=M("volume-2",gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],zu=M("volume-x",bp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],wp=M("wifi-off",vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],yp=M("wifi",jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rt=M("x",Np);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Mu=M("zap",kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],iu=M("zoom-in",Sp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],au=M("zoom-out",Cp);function zp({items:o,activeSection:d,onNavigate:c,onCollapseChange:h}){const[x,m]=I.useState(!1),[g,j]=I.useState(null),[y,b]=I.useState({top:0,left:0}),[_,k]=I.useState(""),z=I.useRef(null),$=I.useMemo(()=>{if(!_.trim())return o;const J=_.toLowerCase().trim();return o.filter(re=>re.label.toLowerCase().includes(J)||re.id.toLowerCase().includes(J))},[o,_]),V=J=>{var re,ae;J.key==="Enter"&&$.length>0&&(c($[0].id),k(""),(re=z.current)==null||re.blur()),J.key==="Escape"&&(k(""),(ae=z.current)==null||ae.blur())},R=()=>{const J=!x;m(J),h==null||h(J)},G=(J,re)=>{if(!x)return;const ae=J.currentTarget.getBoundingClientRect();b({top:ae.top+ae.height/2,left:ae.right+12}),j(re)},Z=()=>{j(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`
          fixed left-0 top-0 bottom-0
          backdrop-blur-xl backdrop-saturate-150
          bg-gradient-to-b from-white/10 to-white/5
          z-50
          flex flex-col
          h-screen
          overflow-y-auto
          transition-all duration-300
          ${x?"w-20":"w-80"}
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        `,children:[!x&&e.jsxs("div",{className:"p-4 pb-2 flex-shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"relative flex-1",children:[e.jsx(ut,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40"}),e.jsx("input",{ref:z,type:"text",value:_,onChange:J=>k(J.target.value),onKeyDown:V,placeholder:"Search components...",className:`
                    w-full pl-9 pr-8 py-2.5 rounded-xl
                    bg-white/8 border border-white/15
                    text-white text-sm placeholder-white/35
                    backdrop-blur-md
                    focus:outline-none focus:border-white/30 focus:bg-white/12
                    transition-all duration-200
                  `}),_&&e.jsx("button",{onClick:()=>{var J;k(""),(J=z.current)==null||J.focus()},className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors",children:e.jsx(Rt,{size:14})})]}),e.jsx("button",{onClick:R,className:`
                  w-10 h-10 rounded-lg flex-shrink-0
                  hover:bg-white/20
                  transition-all duration-300
                  flex items-center justify-center
                  text-white/60 hover:text-white
                `,title:"Collapse Navigation",children:e.jsx(mu,{size:20})})]}),_&&e.jsxs("p",{className:"text-white/40 text-xs mt-2 px-1",children:[$.length," result",$.length!==1?"s":""," found"]})]}),x&&e.jsx("div",{className:"p-4 pb-2 flex-shrink-0 flex justify-center",children:e.jsx("button",{onClick:R,className:`
                w-12 h-12 rounded-xl
                flex items-center justify-center
                text-white/60 hover:text-white hover:bg-white/10
                transition-all duration-200
              `,title:"Expand Navigation",children:e.jsx(pu,{size:20})})}),e.jsx("div",{className:"p-4 space-y-1 flex-1",children:$.map(J=>{const re=d===J.id;return e.jsx("div",{className:"relative group/nav",children:e.jsxs("button",{onClick:()=>c(J.id),onMouseEnter:ae=>G(ae,J.id),onMouseLeave:Z,className:`
                    ${x?"w-12 h-12 mx-auto justify-center":"w-full"}
                    flex items-center gap-3
                    px-4 py-3 rounded-xl
                    transition-all duration-200
                    ${re?"bg-white/20 text-white border border-white/30":"text-white/70 hover:bg-white/10 hover:text-white border border-transparent"}
                  `,children:[e.jsx("span",{className:`
                    flex-shrink-0
                    ${re?"text-blue-300":"text-white/60 group-hover/nav:text-white/80"}
                  `,children:J.icon}),!x&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-1 text-left font-medium",children:J.label}),re&&e.jsx(Qt,{size:16,className:"text-blue-300"})]})]})},J.id)})}),!x&&e.jsx("div",{className:`
            flex-shrink-0
            p-4
            border-t border-white/20
            backdrop-blur-md
          `,children:e.jsxs("div",{className:`
              p-3 rounded-xl
              bg-white/5
              text-center
            `,children:[e.jsx("p",{className:"text-white/60 text-xs",children:"50+ Components"}),e.jsx("p",{className:"text-white text-sm font-semibold",children:"v1.0.0"})]})})]}),x&&g&&(()=>{const J=o.find(re=>re.id===g);return J?e.jsx("div",{className:`
              fixed
              px-3 py-2 rounded-xl
              backdrop-blur-xl backdrop-saturate-150
              bg-white/10
              border border-white/20
              shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
              text-white text-sm whitespace-nowrap
              pointer-events-none
              z-[9999]
            `,style:{top:y.top,left:y.left,transform:"translateY(-50%)"},children:J.label}):null})()]})}function Mp(o,d=100){const[c,h]=I.useState(o[0]);return I.useEffect(()=>{const x=()=>{const m=window.scrollY+d;if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-50){h(o[o.length-1]);return}for(let j=o.length-1;j>=0;j--){const y=document.getElementById(o[j]);if(y&&y.offsetTop<=m){h(o[j]);break}}};return window.addEventListener("scroll",x),x(),()=>window.removeEventListener("scroll",x)},[o,d]),c}function ze(o){const d=document.getElementById(o);if(d){const h=d.offsetTop-80;window.scrollTo({top:h,behavior:"smooth"})}}function _p({toast:o,onClose:d}){const h={success:{border:"border-green-400/50",bg:"bg-green-500/20",icon:e.jsx(Pa,{size:20,className:"text-green-300"}),iconBg:"bg-green-500/30"},error:{border:"border-red-400/50",bg:"bg-red-500/20",icon:e.jsx(fu,{size:20,className:"text-red-300"}),iconBg:"bg-red-500/30"},warning:{border:"border-amber-400/50",bg:"bg-amber-500/20",icon:e.jsx(Su,{size:20,className:"text-amber-300"}),iconBg:"bg-amber-500/30"},info:{border:"border-blue-400/50",bg:"bg-blue-500/20",icon:e.jsx(Jn,{size:20,className:"text-blue-300"}),iconBg:"bg-blue-500/30"},default:{border:"border-white/20",bg:"bg-white/10",icon:e.jsx(nn,{size:20,className:"text-white/80"}),iconBg:"bg-white/20"}}[o.variant],x=o.icon||h.icon;return e.jsx("div",{className:`
      min-w-[320px] max-w-md
      backdrop-blur-xl backdrop-saturate-150
      ${h.bg}
      border-2 ${h.border}
      rounded-2xl
      p-4
      shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
      animate-in slide-in-from-top-2 duration-300
    `,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:`
          p-2 rounded-xl
          ${h.iconBg}
          flex-shrink-0
        `,children:x}),e.jsxs("div",{className:"flex-1 min-w-0",children:[o.title&&e.jsx("h4",{className:"text-white font-semibold mb-1",children:o.title}),e.jsx("p",{className:"text-white/90 text-sm",children:o.message}),o.action&&e.jsx("button",{onClick:o.action.onClick,className:`
                mt-3 px-4 py-1.5 rounded-lg
                bg-white/20
                hover:bg-white/30
                text-white text-sm font-medium
                transition-colors duration-200
              `,children:o.action.label})]}),o.closable!==!1&&e.jsx("button",{onClick:()=>d(o.id),className:`
              p-1.5 rounded-lg
              text-white/60
              hover:text-white
              hover:bg-white/10
              transition-all duration-200
              flex-shrink-0
            `,children:e.jsx(Rt,{size:16})})]})})}function $p({toasts:o,onClose:d,position:c="top-right"}){const h={"top-left":"top-6 left-6","top-right":"top-6 right-6","bottom-left":"bottom-6 left-6","bottom-right":"bottom-6 right-6","top-center":"top-6 left-1/2 -translate-x-1/2","bottom-center":"bottom-6 left-1/2 -translate-x-1/2"};return e.jsx("div",{className:`fixed ${h[c]} z-50 space-y-3`,children:o.map(x=>e.jsx(_p,{toast:x,onClose:d},x.id))})}function Ep(){const[o,d]=I.useState([]),c=I.useCallback((x,m,g)=>{const j=Math.random().toString(36).substring(7),y={id:j,variant:x,message:m,duration:(g==null?void 0:g.duration)??5e3,title:g==null?void 0:g.title,action:g==null?void 0:g.action,icon:g==null?void 0:g.icon,closable:g==null?void 0:g.closable};d(b=>[...b,y]),y.duration&&y.duration>0&&setTimeout(()=>{h(j)},y.duration)},[]),h=I.useCallback(x=>{d(m=>m.filter(g=>g.id!==x))},[]);return{toasts:o,addToast:c,removeToast:h}}function C({children:o,className:d="",variant:c="default",padding:h="md"}){const x=`
    relative overflow-hidden rounded-3xl
    backdrop-blur-lg backdrop-saturate-150
    bg-white/10
    border border-white/20
    shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
    transition-all duration-300
  `,m={default:"",gradient:`
      before:absolute before:inset-0 before:bg-gradient-to-br 
      before:from-white/20 before:via-transparent before:to-transparent
      before:pointer-events-none
    `,hover:`
      hover:scale-[1.02] hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.15)]
      hover:bg-white/15 cursor-pointer
    `},g={sm:"p-4",md:"p-6",lg:"p-8"};return e.jsx("div",{className:`${x} ${m[c]} ${g[h]} ${d}`,children:o})}function Dp({data:o,height:d=300,className:c="",showValues:h=!0,showGrid:x=!0}){const m=Math.max(...o.map(g=>g.value));return e.jsx("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${c}
    `,children:e.jsxs("div",{className:"relative",style:{minHeight:`${d+40}px`},children:[x&&e.jsx("div",{className:"absolute inset-x-0 flex flex-col justify-between",style:{height:`${d}px`},children:[...Array(5)].map((g,j)=>e.jsx("div",{className:"h-px bg-white/5"},j))}),e.jsx("div",{className:"flex items-end gap-4 px-2",style:{height:`${d}px`},children:o.map((g,j)=>{const y=g.value/m*100,b=g.color||"rgba(103, 126, 234, 0.8)";return e.jsxs("div",{className:"flex-1 flex flex-col items-center gap-3 h-full justify-end",children:[h&&e.jsx("span",{className:"text-white text-sm font-medium mb-1",children:g.value}),e.jsx("div",{className:"w-full flex items-end",style:{height:`${d-30}px`},children:e.jsx("div",{className:"w-full rounded-t-xl transition-all duration-500 hover:opacity-80 relative overflow-hidden group cursor-pointer",style:{height:`${y}%`,background:`linear-gradient(to top, ${b}, ${b}dd)`,backdropFilter:"blur(8px)",boxShadow:`0 4px 16px ${b}40`,minHeight:"4px"},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"})})})]},j)})}),e.jsx("div",{className:"flex gap-4 mt-3 px-2",children:o.map((g,j)=>e.jsx("div",{className:"flex-1 text-center",children:e.jsx("span",{className:"text-white/70 text-sm font-medium",children:g.label})},j))})]})})}function Lp({data:o,height:d=300,className:c="",smooth:h=!0,showGrid:x=!0,showDots:m=!0}){const g=Math.max(...o.map(k=>k.value)),j=Math.min(...o.map(k=>k.value)),y=g-j,b=o.map((k,z)=>{const $=z/(o.length-1)*100,V=100-(k.value-j)/y*90-5;return{x:$,y:V,value:k.value,label:k.label}}),_=h?b.map((k,z)=>{if(z===0)return`M ${k.x} ${k.y}`;const $=b[z-1];return`Q ${($.x+k.x)/2} ${$.y}, ${k.x} ${k.y}`}).join(" "):b.map((k,z)=>z===0?`M ${k.x} ${k.y}`:`L ${k.x} ${k.y}`).join(" ");return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{height:`${d}px`,width:"100%"},className:"mb-4",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"lineGradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(103, 126, 234, 0.4)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(103, 126, 234, 0)"})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"2",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),x&&e.jsx("g",{opacity:"0.1",children:[...Array(5)].map((k,z)=>e.jsx("line",{x1:"0",y1:z*25,x2:"100",y2:z*25,stroke:"white",strokeWidth:"0.2"},z))}),e.jsx("path",{d:`${_} L 100 100 L 0 100 Z`,fill:"url(#lineGradient)"}),e.jsx("path",{d:_,fill:"none",stroke:"rgba(103, 126, 234, 1)",strokeWidth:"0.8",filter:"url(#glow)"}),m&&b.map((k,z)=>e.jsxs("g",{children:[e.jsx("circle",{cx:k.x,cy:k.y,r:"1.5",fill:"white",className:"transition-all"}),e.jsx("circle",{cx:k.x,cy:k.y,r:"0.8",fill:"rgba(103, 126, 234, 1)"})]},z))]}),e.jsx("div",{className:"flex justify-between px-2",children:o.map((k,z)=>e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-white/70 text-xs",children:k.label})},z))})]})}function Pp({data:o,height:d=300,className:c="",smooth:h=!0,stacked:x=!1}){var b;const m=Object.keys(((b=o[0])==null?void 0:b.values)||{}),g=[{stroke:"rgba(103, 126, 234, 1)",fill:"rgba(103, 126, 234, 0.3)"},{stroke:"rgba(250, 112, 154, 1)",fill:"rgba(250, 112, 154, 0.3)"},{stroke:"rgba(67, 233, 123, 1)",fill:"rgba(67, 233, 123, 0.3)"}],y=Math.max(...x?o.map(_=>m.reduce((k,z)=>k+_.values[z],0)):o.flatMap(_=>m.map(k=>_.values[k])));return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("svg",{viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{height:`${d}px`,width:"100%"},className:"mb-4",children:[e.jsx("defs",{children:g.map((_,k)=>e.jsxs("linearGradient",{id:`areaGradient${k}`,x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:_.fill,stopOpacity:"0.8"}),e.jsx("stop",{offset:"100%",stopColor:_.fill,stopOpacity:"0.1"})]},k))}),m.map((_,k)=>{const z=o.map((V,R)=>{const G=R/(o.length-1)*100;let Z=V.values[_];if(x&&k>0)for(let re=0;re<k;re++)Z+=V.values[m[re]];const J=100-Z/y*90;return{x:G,y:J,value:V.values[_]}}),$=h?z.map((V,R)=>{if(R===0)return`M ${V.x} ${V.y}`;const G=z[R-1];return`Q ${(G.x+V.x)/2} ${G.y}, ${V.x} ${V.y}`}).join(" "):z.map((V,R)=>R===0?`M ${V.x} ${V.y}`:`L ${V.x} ${V.y}`).join(" ");return e.jsxs("g",{children:[e.jsx("path",{d:`${$} L 100 100 L 0 100 Z`,fill:`url(#areaGradient${k})`}),e.jsx("path",{d:$,fill:"none",stroke:g[k].stroke,strokeWidth:"0.5"})]},k)})]}),e.jsx("div",{className:"flex justify-between items-center",children:e.jsx("div",{className:"flex gap-4",children:m.map((_,k)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:g[k].stroke}}),e.jsx("span",{className:"text-white/70 text-xs",children:_})]},_))})})]})}function Tp({data:o,size:d=300,className:c="",donut:h=!1,showLegend:x=!0}){const m=o.reduce((y,b)=>y+b.value,0);let g=-90;const j=o.map((y,b)=>{const _=y.value/m*100,k=y.value/m*360,z=g,$=g+k;g=$;const V=z*Math.PI/180,R=$*Math.PI/180,G=45,Z=h?30:0,J=50+G*Math.cos(V),re=50+G*Math.sin(V),ae=50+G*Math.cos(R),Ne=50+G*Math.sin(R),ke=k>180?1:0,fe=h?`M ${50+Z*Math.cos(V)} ${50+Z*Math.sin(V)} 
         L ${J} ${re} 
         A ${G} ${G} 0 ${ke} 1 ${ae} ${Ne} 
         L ${50+Z*Math.cos(R)} ${50+Z*Math.sin(R)} 
         A ${Z} ${Z} 0 ${ke} 0 ${50+Z*Math.cos(V)} ${50+Z*Math.sin(V)} Z`:`M 50 50 L ${J} ${re} A ${G} ${G} 0 ${ke} 1 ${ae} ${Ne} Z`,ne=["rgba(103, 126, 234, 0.8)","rgba(118, 75, 162, 0.8)","rgba(79, 172, 254, 0.8)","rgba(67, 233, 123, 0.8)","rgba(250, 112, 154, 0.8)"];return{path:fe,color:y.color||ne[b%ne.length],percentage:_,label:y.label,value:y.value}});return e.jsxs("div",{className:`flex ${x?"flex-col md:flex-row":"flex-col"} items-center gap-8 ${c}`,children:[e.jsxs("div",{className:"relative",children:[e.jsxs("svg",{width:d,height:d,viewBox:"0 0 100 100",className:"backdrop-blur-md filter drop-shadow-lg",children:[e.jsx("defs",{children:j.map((y,b)=>e.jsx("filter",{id:`shadow${b}`,children:e.jsx("feDropShadow",{dx:"0",dy:"2",stdDeviation:"2",floodColor:y.color,floodOpacity:"0.5"})},b))}),j.map((y,b)=>e.jsx("path",{d:y.path,fill:y.color,stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"0.3",filter:`url(#shadow${b})`,className:"hover:opacity-90 transition-all cursor-pointer transform hover:scale-105 origin-center"},b))]}),h&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-4xl text-white font-bold",children:m}),e.jsx("p",{className:"text-white/60 text-sm",children:"Total"})]})})]}),x&&e.jsx("div",{className:"space-y-3",children:j.map((y,b)=>e.jsxs("div",{className:"flex items-center gap-3 group cursor-pointer",children:[e.jsx("div",{className:"w-4 h-4 rounded transition-transform group-hover:scale-110",style:{backgroundColor:y.color}}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:y.label}),e.jsxs("p",{className:"text-white/60 text-xs",children:[y.value," (",y.percentage.toFixed(1),"%)"]})]})]},b))})]})}function ou({value:o,max:d=100,size:c=200,className:h="",label:x,showValue:m=!0}){const g=Math.min(o/d*100,100);return e.jsxs("div",{className:`inline-flex flex-col items-center ${h}`,children:[e.jsxs("svg",{width:c,height:c*.65,viewBox:"0 0 100 65",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gaugeGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(250, 112, 154, 0.8)"}),e.jsx("stop",{offset:"50%",stopColor:"rgba(250, 208, 137, 0.8)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(67, 233, 123, 0.8)"})]})}),e.jsx("path",{d:"M 10 60 A 40 40 0 0 1 90 60",fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:"8",strokeLinecap:"round"}),e.jsx("path",{d:"M 10 60 A 40 40 0 0 1 90 60",fill:"none",stroke:"url(#gaugeGradient)",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:"125.6",strokeDashoffset:125.6-g/100*125.6,className:"transition-all duration-500"})]}),e.jsxs("div",{className:"text-center -mt-8",children:[m&&e.jsxs("p",{className:"text-4xl text-white font-bold mb-1",children:[o,e.jsxs("span",{className:"text-2xl text-white/60",children:["/",d]})]}),x&&e.jsx("p",{className:"text-white/70 text-sm",children:x})]})]})}function dl({value:o,max:d=100,size:c="md",variant:h="circular",label:x,showValue:m=!0,className:g=""}){const j=Math.min(o/d*100,100),b={sm:{width:80,stroke:4,fontSize:"text-lg"},md:{width:120,stroke:6,fontSize:"text-2xl"},lg:{width:160,stroke:8,fontSize:"text-4xl"},xl:{width:200,stroke:10,fontSize:"text-5xl"}}[c],_=(b.width-b.stroke)/2,k=2*Math.PI*_,z=k-j/100*k;return h==="linear"?e.jsxs("div",{className:`w-full ${g}`,children:[x&&e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/90 text-sm",children:x}),m&&e.jsxs("span",{className:"text-white/70 text-sm",children:[j.toFixed(0),"%"]})]}),e.jsx("div",{className:`
          h-4 rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          overflow-hidden
        `,children:e.jsx("div",{className:"h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500",style:{width:`${j}%`}})})]}):h==="semi-circular"?e.jsxs("div",{className:`inline-flex flex-col items-center ${g}`,children:[e.jsxs("svg",{width:b.width,height:b.width/2+20,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(103, 126, 234, 0.8)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(79, 172, 254, 0.8)"})]})}),e.jsx("path",{d:`M ${b.stroke/2} ${b.width/2} A ${_} ${_} 0 0 1 ${b.width-b.stroke/2} ${b.width/2}`,fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:b.stroke,strokeLinecap:"round"}),e.jsx("path",{d:`M ${b.stroke/2} ${b.width/2} A ${_} ${_} 0 0 1 ${b.width-b.stroke/2} ${b.width/2}`,fill:"none",stroke:"url(#gradient)",strokeWidth:b.stroke,strokeLinecap:"round",strokeDasharray:k/2,strokeDashoffset:k/2-j/100*(k/2),className:"transition-all duration-500"})]}),e.jsxs("div",{className:"text-center -mt-10",children:[m&&e.jsxs("p",{className:`${b.fontSize} text-white`,children:[j.toFixed(0),"%"]}),x&&e.jsx("p",{className:"text-white/70 text-sm mt-1",children:x})]})]}):e.jsxs("div",{className:`inline-flex flex-col items-center ${g}`,children:[e.jsxs("svg",{width:b.width,height:b.width,children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"circularGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"rgba(103, 126, 234, 0.8)"}),e.jsx("stop",{offset:"100%",stopColor:"rgba(79, 172, 254, 0.8)"})]})}),e.jsx("circle",{cx:b.width/2,cy:b.width/2,r:_,fill:"none",stroke:"rgba(255, 255, 255, 0.1)",strokeWidth:b.stroke}),e.jsx("circle",{cx:b.width/2,cy:b.width/2,r:_,fill:"none",stroke:"url(#circularGradient)",strokeWidth:b.stroke,strokeLinecap:"round",strokeDasharray:k,strokeDashoffset:z,transform:`rotate(-90 ${b.width/2} ${b.width/2})`,className:"transition-all duration-500"}),e.jsx("text",{x:"50%",y:"50%",textAnchor:"middle",dy:".3em",className:`${b.fontSize} fill-white`,children:m&&`${j.toFixed(0)}%`})]}),x&&e.jsx("p",{className:"text-white/70 text-sm mt-2",children:x})]})}function ul({value:o,max:d=100,variant:c="primary",showLabel:h=!0,size:x="md"}){const m=Math.min(o/d*100,100),g={primary:"from-blue-400 to-cyan-400",success:"from-green-400 to-teal-400",warning:"from-amber-400 to-orange-400",danger:"from-red-400 to-pink-400"},j={sm:"h-1",md:"h-2",lg:"h-3"};return e.jsxs("div",{className:"w-full",children:[h&&e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"text-white/90 text-sm",children:"Progress"}),e.jsxs("span",{className:"text-white/70 text-sm",children:[Math.round(m),"%"]})]}),e.jsx("div",{className:`
        ${j[x]} rounded-full
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        overflow-hidden
      `,children:e.jsx("div",{className:`h-full bg-gradient-to-r ${g[c]} transition-all duration-500 ease-out`,style:{width:`${m}%`}})})]})}function ce({code:o,language:d="tsx"}){return e.jsx("div",{className:"mt-12",children:e.jsxs("div",{className:`
        backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        rounded-3xl
        overflow-hidden
        shadow-2xl
      `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10 bg-white/5 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-400/60"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400/60"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400/60"})]}),e.jsx("span",{className:"text-white/70 text-sm font-medium",children:d})]}),e.jsxs("div",{className:`
            px-3 py-1.5 rounded-lg
            bg-white/10
            border border-white/20
            text-white/50 text-sm
            flex items-center gap-2
            cursor-default select-none
          `,children:[e.jsx(X0,{size:16}),e.jsx("span",{children:"Copy Code"})]})]}),e.jsx("div",{className:"relative",children:e.jsx("pre",{className:`
              w-full h-96 p-6
              bg-black/20
              text-white/90 text-sm font-mono
              overflow-auto
              leading-relaxed
              select-none
              whitespace-pre-wrap break-words
            `,onCopy:c=>c.preventDefault(),children:o})})]})})}const de={buttonSection:`// Glass Button Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassButton({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}: GlassButtonProps) {
  const baseStyles = \`
    backdrop-blur-xl
    border border-white/20
    rounded-xl
    font-medium
    transition-all duration-300
    hover:scale-105 hover:shadow-xl
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  \`;

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white hover:from-blue-500/30 hover:to-purple-500/30',
    secondary: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white hover:from-purple-500/30 hover:to-pink-500/30',
    accent: 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-white hover:from-pink-500/30 hover:to-rose-500/30',
    success: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white hover:from-green-500/30 hover:to-emerald-500/30',
    ghost: 'bg-white/5 text-white hover:bg-white/10',
    danger: 'bg-gradient-to-r from-red-500/20 to-rose-500/20 text-white hover:from-red-500/30 hover:to-rose-500/30',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={\`\${baseStyles} \${variants[variant]} \${sizes[size]} \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
}

// 使用示例：
<GlassButton variant="primary">Primary</GlassButton>
<GlassButton variant="secondary" size="lg">Large Secondary</GlassButton>
<GlassButton variant="success" disabled>Disabled</GlassButton>

// 或者直接使用 HTML + Tailwind（无需组件）：
<button className="
  px-4 py-2
  backdrop-blur-xl
  bg-gradient-to-r from-blue-500/20 to-purple-500/20
  border border-white/20
  rounded-xl
  text-white font-medium
  hover:from-blue-500/30 hover:to-purple-500/30
  hover:scale-105 hover:shadow-xl
  active:scale-95
  transition-all duration-300
">
  Primary Button
</button>`,calendarSection:`// Calendar Component - 完整实现
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function GlassCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl p-6
      max-w-md
    ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white text-xl font-bold">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={previousMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Day Labels */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(day => (
          <div key={day} className="text-center text-white/60 text-sm font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={\`empty-\${i}\`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const isSelected = 
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear();
          
          return (
            <button
              key={day}
              onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
              className={\`
                aspect-square rounded-lg
                text-white text-sm
                transition-all
                \${isSelected
                  ? 'bg-blue-500 font-bold'
                  : 'bg-white/5 hover:bg-white/10'
                }
              \`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}`,cardsSection:`// Glass Card Component - 完整实现
// 复制这段代码到你的项目即可使用

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassCard({ children, padding = 'md', className = '' }: GlassCardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div className={\`
      backdrop-blur-xl 
      bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      shadow-2xl
      \${paddingStyles[padding]}
      \${className}
    \`}>
      {children}
    </div>
  );
}

// 使用示例：
<GlassCard>
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</GlassCard>

// 或者直接使用 HTML + Tailwind：
<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6 shadow-2xl">
  <h3 className="text-white text-xl font-bold mb-2">Card Title</h3>
  <p className="text-white/70">Card content goes here</p>
</div>

// 不同尺寸的卡片：
<GlassCard padding="sm">Small Card</GlassCard>
<GlassCard padding="md">Medium Card</GlassCard>
<GlassCard padding="lg">Large Card</GlassCard>`,chatSection:`// Chat Component - 完整实现
import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function GlassChat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, user: 'John Doe', avatar: 'JD', content: 'Hey, how are you?', time: '10:30 AM', isOwn: false },
    { id: 2, user: 'You', avatar: 'ME', content: 'I am good, thanks!', time: '10:32 AM', isOwn: true },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      user: 'You',
      avatar: 'ME',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: true
    }]);
    setMessage('');
  };

  return (
    <div className="
      backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
      border border-white/20
      rounded-3xl
      h-[600px]
      flex flex-col
    ">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={\`flex gap-3 \${msg.isOwn ? 'flex-row-reverse' : ''}\`}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">{msg.avatar}</span>
            </div>
            <div className={\`flex-1 max-w-md \${msg.isOwn ? 'items-end' : ''}\`}>
              <div className={\`
                backdrop-blur-xl border border-white/20 rounded-2xl p-4
                \${msg.isOwn 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5'
                }
              \`}>
                <p className="text-white/90">{msg.content}</p>
              </div>
              <p className="text-white/40 text-xs mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="
              flex-1 px-4 py-2.5
              bg-white/10
              border border-white/20
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
            "
          />
          <button
            onClick={sendMessage}
            className="
              px-4 py-2.5 rounded-xl
              bg-blue-500 hover:bg-blue-600
              text-white
              transition-colors
            "
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}`,chartsSection:`// Charts with Recharts - 完整实现
// 需要安装：npm install recharts

import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// 数据示例
const barData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];

// Bar Chart
export function GlassBarChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Sales Overview</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="name" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(0,0,0,0.8)', 
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              backdropFilter: 'blur(12px)'
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#667eea" radius={[8, 8, 0, 0]} />
          <Bar dataKey="profit" fill="#f093fb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// Pie Chart
export function GlassPieChart() {
  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-xl font-bold mb-4">Product Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => \`\${name}: \${(percent * 100).toFixed(0)}%\`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}`,checkboxRadioSection:`// Liquid Glass Checkbox & Radio Components - 完整实现
// 复制这段代码到你的项目即可使用
// 依赖: lucide-react (用于 Check 图标), Tailwind CSS

import React, { useState } from 'react';
import { Check } from 'lucide-react';

// ============================================
// GlassCheckbox 组件 - 液态玻璃风格复选框
// ============================================
interface GlassCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassCheckbox({
  checked,
  onChange,
  label,
  description,
  size = 'md',
  disabled = false,
  className = ''
}: GlassCheckboxProps) {
  const sizes = {
    sm: { box: 'w-4 h-4', icon: 14, text: 'text-sm', description: 'text-xs' },
    md: { box: 'w-5 h-5', icon: 16, text: 'text-base', description: 'text-sm' },
    lg: { box: 'w-6 h-6', icon: 18, text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-blue-400/80 to-blue-600/80 border-blue-400/50 shadow-lg shadow-blue-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <Check
              size={s.icon}
              className="text-white"
              strokeWidth={3}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadio 组件 - 液态玻璃风格单选按钮
// ============================================
interface GlassRadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadio({
  checked,
  onChange,
  label,
  description,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioProps) {
  const sizes = {
    sm: { outer: 'w-4 h-4', inner: 'w-2 h-2', text: 'text-sm', description: 'text-xs' },
    md: { outer: 'w-5 h-5', inner: 'w-2.5 h-2.5', text: 'text-base', description: 'text-sm' },
    lg: { outer: 'w-6 h-6', inner: 'w-3 h-3', text: 'text-lg', description: 'text-base' }
  };

  const s = sizes[size];

  return (
    <label
      className={\`
        flex items-start gap-3
        \${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \${className}
      \`}
    >
      <div className="relative flex items-center justify-center pt-0.5">
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={\`
            \${s.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            \${checked
              ? 'bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/50 shadow-lg shadow-purple-500/50'
              : 'bg-white/10 border-white/30 hover:border-white/50'
            }
            \${!disabled && 'hover:scale-110'}
          \`}
        >
          {checked && (
            <div
              className={\`
                \${s.inner}
                rounded-full
                bg-gradient-to-br from-purple-400 to-purple-600
                shadow-lg
              \`}
            />
          )}
        </div>
      </div>
      
      {(label || description) && (
        <div className="flex-1">
          {label && (
            <div className={\`text-white font-medium \${s.text}\`}>
              {label}
            </div>
          )}
          {description && (
            <div className={\`text-white/60 \${s.description} mt-1\`}>
              {description}
            </div>
          )}
        </div>
      )}
    </label>
  );
}

// ============================================
// GlassRadioGroup 组件 - 单选按钮组
// ============================================
interface RadioOption {
  label: string;
  value: string;
  description?: string;
}

interface GlassRadioGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export function GlassRadioGroup({
  options,
  value,
  onChange,
  name,
  size = 'md',
  disabled = false,
  className = ''
}: GlassRadioGroupProps) {
  return (
    <div className={\`space-y-3 \${className}\`}>
      {options.map((option) => (
        <GlassRadio
          key={option.value}
          checked={value === option.value}
          onChange={() => onChange(option.value)}
          label={option.label}
          description={option.description}
          name={name}
          size={size}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

// ============================================
// 使用示例
// ============================================
function CheckboxRadioExample() {
  const [agree, setAgree] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });
  const [selectedPlan, setSelectedPlan] = useState('pro');

  return (
    <div className="space-y-8 p-6">
      {/* 单个 Checkbox */}
      <GlassCheckbox
        checked={agree}
        onChange={setAgree}
        label="I agree to the terms"
        size="md"
      />

      {/* 带描述的 Checkbox 组 */}
      <div className="space-y-4">
        <GlassCheckbox
          checked={notifications.email}
          onChange={(checked) => setNotifications({ ...notifications, email: checked })}
          label="Email notifications"
          description="Get updates about your account activity"
        />
        <GlassCheckbox
          checked={notifications.sms}
          onChange={(checked) => setNotifications({ ...notifications, sms: checked })}
          label="SMS notifications"
          description="Receive text messages for important updates"
        />
        <GlassCheckbox
          checked={notifications.push}
          onChange={(checked) => setNotifications({ ...notifications, push: checked })}
          label="Push notifications"
          description="Get push notifications on your devices"
        />
      </div>

      {/* 不同尺寸的 Checkbox */}
      <div className="flex items-center gap-8">
        <GlassCheckbox checked={true} onChange={() => {}} label="Small" size="sm" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Medium" size="md" />
        <GlassCheckbox checked={true} onChange={() => {}} label="Large" size="lg" />
      </div>

      {/* Radio 按钮组 */}
      <GlassRadioGroup
        options={[
          { value: 'basic', label: 'Basic Plan', description: '$9/mo - 10 Projects' },
          { value: 'pro', label: 'Pro Plan', description: '$29/mo - 100 Projects' },
          { value: 'enterprise', label: 'Enterprise', description: '$99/mo - Unlimited' }
        ]}
        value={selectedPlan}
        onChange={setSelectedPlan}
        name="pricing"
        size="md"
      />

      {/* Disabled 状态 */}
      <div className="space-y-3">
        <GlassCheckbox checked={true} onChange={() => {}} label="Disabled checked" disabled />
        <GlassRadio checked={true} onChange={() => {}} label="Disabled selected" name="disabled-demo" disabled />
      </div>
    </div>
  );
}`,colorSection:`// Color Palette Component - 完整实现
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface Color {
  name: string;
  value: string;
  category: string;
}

const colors: Color[] = [
  { name: 'Primary Blue', value: '#667eea', category: 'Primary' },
  { name: 'Primary Purple', value: '#764ba2', category: 'Primary' },
  { name: 'Accent Pink', value: '#f093fb', category: 'Accent' },
  { name: 'Accent Rose', value: '#fa709a', category: 'Accent' },
  { name: 'Success Green', value: '#10b981', category: 'Status' },
  { name: 'Warning Yellow', value: '#f59e0b', category: 'Status' },
  { name: 'Error Red', value: '#ef4444', category: 'Status' },
  { name: 'Info Cyan', value: '#06b6d4', category: 'Status' },
];

export function GlassColorPalette() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {colors.map((color) => (
        <div
          key={color.value}
          className="
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-2xl p-4
            hover:scale-105 transition-transform
            cursor-pointer
          "
          onClick={() => copyColor(color.value)}
        >
          <div
            className="w-full h-24 rounded-xl mb-3 shadow-lg"
            style={{ backgroundColor: color.value }}
          />
          <h4 className="text-white font-bold mb-1">{color.name}</h4>
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm font-mono">{color.value}</p>
            {copiedColor === color.value ? (
              <Check size={16} className="text-green-400" />
            ) : (
              <Copy size={16} className="text-white/40" />
            )}
          </div>
          <span className="inline-block mt-2 px-2 py-1 bg-white/10 rounded text-white/70 text-xs">
            {color.category}
          </span>
        </div>
      ))}
    </div>
  );
}`,dataSection:`import React from 'react';

// Data Table
<table className="w-full">
  <thead>
    <tr className="bg-white/5 border-b border-white/10">
      <th className="px-4 py-3 text-left text-white/70">Column 1</th>
      <th className="px-4 py-3 text-left text-white/70">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b border-white/5 hover:bg-white/5">
      <td className="px-4 py-3 text-white/90">Data 1</td>
      <td className="px-4 py-3 text-white/90">Data 2</td>
    </tr>
  </tbody>
</table>`,feedbackSection:`import React from 'react';
import { useState } from 'react';
import { Star } from 'lucide-react';

// Star Rating
const [rating, setRating] = useState(0);

<div className="flex gap-1">
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      onClick={() => setRating(star)}
      className="text-yellow-400 hover:scale-110 transition-transform"
    >
      <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
    </button>
  ))}
</div>`,fontsSection:`import React from 'react';

// Typography Examples
<h1 className="text-5xl text-white font-bold">Heading 1</h1>
<h2 className="text-4xl text-white font-bold">Heading 2</h2>
<h3 className="text-3xl text-white font-bold">Heading 3</h3>
<p className="text-white/90">Body text paragraph</p>
<p className="text-white/70 text-sm">Small text</p>
<p className="text-white/60 text-xs">Extra small text</p>`,formsSection:`import React from 'react';
import { useState } from 'react';

// Input Field
const [value, setValue] = useState('');

<input
  type="text"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
  "
/>

// Textarea
<textarea
  className="
    w-full px-4 py-2.5
    bg-white/10
    border border-white/20
    rounded-xl
    text-white placeholder-white/40
    focus:outline-none focus:border-blue-400/50
    resize-none
  "
  rows={4}
  placeholder="Enter description"
/>`,gridSection:`import React from 'react';

// Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 1</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 2</h3>
    <p className="text-white/70">Content</p>
  </div>
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
    <h3 className="text-white text-lg font-bold mb-2">Grid Item 3</h3>
    <p className="text-white/70">Content</p>
  </div>
</div>`,iconsSection:`import React from 'react';
import { Home, Search, Settings, User, Heart, Star, Bell, Mail } from 'lucide-react';

// Icon Usage
<div className="flex gap-4">
  <Home className="text-white" size={24} />
  <Search className="text-white" size={24} />
  <Settings className="text-white" size={24} />
  <User className="text-white" size={24} />
  <Heart className="text-white" size={24} />
  <Star className="text-white" size={24} />
  <Bell className="text-white" size={24} />
  <Mail className="text-white" size={24} />
</div>

// Icon with Background
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center">
  <Heart className="text-blue-300" size={24} />
</div>`,desktopLayout:`// Desktop Layout - 桌面端布局组件
// 适用于 1024px 以上屏幕，左侧导航 + 右侧内容区域

import React from 'react';

interface DesktopLayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function DesktopLayout({ sidebar, children }: DesktopLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* 左侧固定导航 */}
      <aside className="
        w-64 fixed top-0 left-0 h-screen
        backdrop-blur-xl bg-white/5
        border-r border-white/10
        p-6 flex flex-col gap-4
        overflow-y-auto
      ">
        {sidebar || (
          <>
            <div className="h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl" />
            <nav className="flex-1 space-y-2 mt-6">
              {['Dashboard', 'Analytics', 'Projects', 'Settings'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="
                    block px-4 py-3 rounded-xl
                    text-white/70 hover:text-white
                    hover:bg-white/10
                    backdrop-blur-md
                    transition-all duration-200
                  "
                >
                  {item}
                </a>
              ))}
            </nav>
          </>
        )}
      </aside>

      {/* 右侧主内容区域 */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* 顶部导航栏 */}
          <header className="
            mb-8 p-4 rounded-2xl
            backdrop-blur-xl bg-white/5
            border border-white/10
          ">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-white font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              </div>
            </div>
          </header>

          {/* 内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {children || (
              <>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 1</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 2</h3>
                  <p className="text-white/60">Content area</p>
                </div>
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-2">Card 3</h3>
                  <p className="text-white/60">Content area</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}`,tabletLayout:`// Tablet Layout - 平板端响应式布局
// 适用于 768px - 1024px 屏幕，可折叠侧栏 + 自适应网格

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TabletLayoutProps {
  children: React.ReactNode;
}

export function TabletLayout({ children }: TabletLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* 可折叠侧栏 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={\`
        fixed top-0 left-0 h-screen w-72 z-50
        backdrop-blur-xl bg-white/10
        border-r border-white/20
        p-6 flex flex-col
        transition-transform duration-300
        \${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      \`}>
        <button
          onClick={() => setSidebarOpen(false)}
          className="self-end p-2 text-white/70 hover:text-white"
        >
          <X size={24} />
        </button>
        <nav className="flex-1 space-y-2 mt-4">
          {['Home', 'Browse', 'Library', 'Profile'].map((item) => (
            <a
              key={item}
              href="#"
              className="
                block px-4 py-3 rounded-xl
                text-white/70 hover:text-white
                hover:bg-white/10
                transition-all duration-200
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 主内容 */}
      <main className="p-6">
        <header className="
          flex items-center gap-4 mb-6 p-4 rounded-2xl
          backdrop-blur-xl bg-white/5 border border-white/10
        ">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10"
          >
            <Menu size={24} />
          </button>
          <h1 className="text-xl text-white font-bold">Tablet View</h1>
        </header>

        {/* 自适应双列网格 */}
        <div className="grid grid-cols-2 gap-4">
          {children || (
            <>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold mb-2">Card {i}</h3>
                  <p className="text-white/60 text-sm">Responsive content</p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}`,mobileLayout:`// Mobile Layout - 移动端布局组件
// 适用于 768px 以下屏幕，底部标签栏 + 单列内容

import React, { useState } from 'react';
import { Home, Search, Bell, User } from 'lucide-react';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20">
      {/* 顶部状态栏 */}
      <header className="
        sticky top-0 z-30
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 py-3
      ">
        <h1 className="text-lg text-white font-bold text-center">App Title</h1>
      </header>

      {/* 单列内容区域 */}
      <main className="flex-1 p-4 space-y-4">
        {children || (
          <>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="
                  backdrop-blur-xl bg-white/5
                  border border-white/10
                  rounded-2xl p-4
                "
              >
                <h3 className="text-white font-bold mb-1">Item {i}</h3>
                <p className="text-white/60 text-sm">Mobile-optimized content card</p>
              </div>
            ))}
          </>
        )}
      </main>

      {/* 底部标签栏 */}
      <nav className="
        fixed bottom-0 left-0 right-0 z-30
        backdrop-blur-xl bg-white/10
        border-t border-white/20
        flex justify-around
        px-2 py-2
        safe-area-inset-bottom
      ">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={\`
              flex flex-col items-center gap-1 px-4 py-2 rounded-xl
              transition-all duration-200
              \${activeTab === id
                ? 'text-blue-400 bg-blue-500/10'
                : 'text-white/50 hover:text-white/70'
              }
            \`}
          >
            <Icon size={22} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}`,adaptiveLayouts:`// Adaptive Layout - 自适应断点布局
// 根据屏幕尺寸自动切换布局模式

import React from 'react';

interface AdaptiveLayoutProps {
  children: React.ReactNode;
}

export function AdaptiveLayout({ children }: AdaptiveLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* 顶部导航 - 响应式 */}
      <header className="
        backdrop-blur-xl bg-white/5
        border-b border-white/10
        px-4 md:px-8 py-4
      ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl md:text-2xl text-white font-bold">Adaptive</h1>
          {/* 桌面端显示导航链接 */}
          <nav className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-white/70 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* 主内容 - 断点自适应 */}
      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* 移动端: 1列, 平板: 2列, 桌面: 3列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {children || (
            <>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="
                    backdrop-blur-xl
                    bg-gradient-to-br from-white/10 to-white/5
                    border border-white/20
                    rounded-2xl p-6
                    hover:border-white/30
                    transition-all duration-300
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 mb-4" />
                  <h3 className="text-white font-bold mb-2">Feature {i}</h3>
                  <p className="text-white/60 text-sm">
                    Responsive content that adapts to different screen sizes automatically.
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

// 响应式断点速查表:
// sm:  640px   - 小型手机横屏
// md:  768px   - 平板竖屏
// lg:  1024px  - 平板横屏/小型笔记本
// xl:  1280px  - 标准笔记本
// 2xl: 1536px  - 大屏桌面`,fluidGrids:`// Fluid Grid System - 流式网格系统
// 基于 CSS Grid 和 Flexbox 的自适应网格

import React from 'react';

// ============================================
// 1. 基础流式网格
// ============================================
interface FluidGridProps {
  columns?: number;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}

export function FluidGrid({
  columns = 3,
  gap = 'gap-6',
  children,
  className = ''
}: FluidGridProps) {
  const colClass: Record<number, string> = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-3 md:grid-cols-6 lg:grid-cols-12',
  };

  return (
    <div className={\`grid \${colClass[columns] || colClass[3]} \${gap} \${className}\`}>
      {children}
    </div>
  );
}

// ============================================
// 2. 自动填充网格 (Auto-fit)
// ============================================
export function AutoFitGrid({
  minWidth = '280px',
  gap = '1.5rem',
  children,
  className = ''
}: {
  minWidth?: string;
  gap?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(auto-fit, minmax(\${minWidth}, 1fr))\`,
        gap,
      }}
    >
      {children}
    </div>
  );
}

// ============================================
// 3. 使用示例
// ============================================
function GridExample() {
  return (
    <div className="space-y-12 p-8">
      {/* 3列响应式网格 */}
      <FluidGrid columns={3}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Card {i}</h4>
            <p className="text-white/60 text-sm mt-2">Grid item content</p>
          </div>
        ))}
      </FluidGrid>

      {/* 自动填充网格 */}
      <AutoFitGrid minWidth="250px">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="
              backdrop-blur-xl bg-white/5
              border border-white/10
              rounded-2xl p-6
            "
          >
            <h4 className="text-white font-bold">Auto {i}</h4>
            <p className="text-white/60 text-sm mt-2">Auto-fit content</p>
          </div>
        ))}
      </AutoFitGrid>
    </div>
  );
}`,loadingSection:`import React from 'react';
import { Loader2 } from 'lucide-react';

// Spinner
<Loader2 className="animate-spin text-white" size={48} />

// Loading Overlay
<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8">
    <Loader2 className="animate-spin text-white mx-auto mb-4" size={48} />
    <p className="text-white text-lg">Loading...</p>
  </div>
</div>`,logoWithTextLarge:`// Logo with Text - Large Size
// 大尺寸品牌 Logo，适用于首页 Hero 区域和启动页

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoLarge() {
  return (
    <div className="flex items-center gap-5">
      {/* Logo Icon */}
      <div className="
        relative w-20 h-20
        rounded-2xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-2xl shadow-blue-500/20
        flex items-center justify-center
        overflow-hidden
      ">
        {/* 流动渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 animate-pulse" />
        <Droplets className="relative text-blue-300 drop-shadow-lg" size={40} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-4xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-lg mt-1">Design System</p>
      </div>
    </div>
  );
}

// 使用示例:
<GlassLogoLarge />`,logoWithTextMedium:`// Logo with Text - Medium Size
// 中等尺寸 Logo，适用于页面顶部导航栏

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoMedium() {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="
        relative w-12 h-12
        rounded-xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        shadow-lg shadow-blue-500/10
        flex items-center justify-center
        overflow-hidden
      ">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/10 to-pink-400/20" />
        <Droplets className="relative text-blue-300" size={24} />
      </div>

      {/* Brand Text */}
      <div>
        <h1 className="text-2xl text-white font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Liquid Glass
          </span>
        </h1>
        <p className="text-white/60 text-sm">Design System</p>
      </div>
    </div>
  );
}

// 在导航栏中使用:
<nav className="
  backdrop-blur-xl bg-white/5
  border-b border-white/10
  px-6 py-3
">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoMedium />
    <div className="flex items-center gap-4">
      {/* 导航链接 */}
    </div>
  </div>
</nav>`,logoWithTextSmall:`// Logo with Text - Small Size
// 小尺寸 Logo，适用于侧边栏、页脚和紧凑空间

import React from 'react';
import { Droplets } from 'lucide-react';

export function GlassLogoSmall() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo Icon */}
      <div className="
        w-8 h-8
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      ">
        <Droplets className="text-blue-300" size={16} />
      </div>

      {/* Brand Text */}
      <span className="text-base text-white font-bold">
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          LG
        </span>
      </span>
    </div>
  );
}

// 仅图标的极小 Logo (用于 Favicon 或头像):
export function GlassLogoIcon({ size = 32 }: { size?: number }) {
  return (
    <div
      className="
        rounded-lg
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      "
      style={{ width: size, height: size }}
    >
      <Droplets className="text-blue-300" size={size * 0.5} />
    </div>
  );
}

// 使用示例:
<GlassLogoSmall />
<GlassLogoIcon size={24} />
<GlassLogoIcon size={32} />
<GlassLogoIcon size={48} />`,logoWithTextCompact:`// Logo with Text - Compact (No Subtitle)
// 紧凑 Logo 变体，不显示副标题，适用于空间有限的场景

import React from 'react';
import { Droplets } from 'lucide-react';

interface GlassLogoCompactProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GlassLogoCompact({ size = 'md', className = '' }: GlassLogoCompactProps) {
  const sizes = {
    sm: { container: 'w-7 h-7', icon: 14, text: 'text-sm', gap: 'gap-1.5', rounded: 'rounded-md' },
    md: { container: 'w-10 h-10', icon: 20, text: 'text-lg', gap: 'gap-2', rounded: 'rounded-lg' },
    lg: { container: 'w-14 h-14', icon: 28, text: 'text-2xl', gap: 'gap-3', rounded: 'rounded-xl' },
  };

  const s = sizes[size];

  return (
    <div className={\`flex items-center \${s.gap} \${className}\`}>
      <div className={\`
        \${s.container} \${s.rounded}
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
      \`}>
        <Droplets className="text-blue-300" size={s.icon} />
      </div>
      <span className={\`\${s.text} text-white font-bold\`}>
        <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Liquid Glass
        </span>
      </span>
    </div>
  );
}

// 使用示例 - 不同尺寸:
<GlassLogoCompact size="sm" />
<GlassLogoCompact size="md" />
<GlassLogoCompact size="lg" />

// 在侧边栏顶部使用:
<aside className="w-64 backdrop-blur-xl bg-white/5 border-r border-white/10 p-4">
  <GlassLogoCompact size="md" className="mb-8" />
  <nav className="space-y-2">
    {/* 导航项 */}
  </nav>
</aside>

// 在页脚使用:
<footer className="backdrop-blur-xl bg-white/5 border-t border-white/10 px-8 py-6">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <GlassLogoCompact size="sm" />
    <p className="text-white/50 text-sm">© 2026 Liquid Glass. All rights reserved.</p>
  </div>
</footer>`,messageSection:`import React from 'react';
import { X } from 'lucide-react';

// Success Message
<div className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-4">
  <div className="flex items-start justify-between gap-3">
    <div>
      <h4 className="text-green-300 font-bold mb-1">Success</h4>
      <p className="text-white/90 text-sm">Operation completed successfully!</p>
    </div>
    <button className="text-green-300 hover:text-green-200">
      <X size={20} />
    </button>
  </div>
</div>`,modalSizes:`// GlassModal 组件 - 完整实现
// 支持 sm / md / lg 三种尺寸，带毛玻璃背景和流畅动画

import React from 'react';
import { X } from 'lucide-react';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GlassModal({
  isOpen,
  onClose,
  title,
  size = 'md',
  children
}: GlassModalProps) {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 背景遮罩 */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal 内容 */}
      <div
        className={\`
          relative w-full \${sizeClasses[size]}
          backdrop-blur-xl
          bg-gradient-to-br from-white/15 to-white/5
          border border-white/20
          rounded-3xl
          shadow-2xl shadow-black/30
          p-8
        \`}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="flex items-start justify-between mb-6">
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

// 使用示例:
const [isSmall, setIsSmall] = useState(false);
const [isMedium, setIsMedium] = useState(false);
const [isLarge, setIsLarge] = useState(false);

<GlassModal isOpen={isSmall} onClose={() => setIsSmall(false)} title="Small" size="sm">
  <p className="text-white/70">Small modal content</p>
</GlassModal>

<GlassModal isOpen={isMedium} onClose={() => setIsMedium(false)} title="Medium" size="md">
  <p className="text-white/70">Medium modal content</p>
</GlassModal>

<GlassModal isOpen={isLarge} onClose={() => setIsLarge(false)} title="Large" size="lg">
  <p className="text-white/70">Large modal content</p>
</GlassModal>`,smallModal:`// Small Modal - 小型确认弹窗
// 适用于简短提示、确认操作等场景

import React, { useState } from 'react';
import { X, AlertTriangle } from 'lucide-react';

export function SmallConfirmModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-white/20 text-white hover:from-red-500/30 hover:to-rose-500/30 transition-all duration-300"
      >
        Delete Item
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                <AlertTriangle size={20} className="text-red-400" />
              </div>
              <h3 className="text-white text-lg font-bold">Confirm Delete</h3>
            </div>

            <p className="text-white/70 text-sm mb-6">
              Are you sure you want to delete this item? This action cannot be undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white text-sm transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,basicModal:`// Basic Modal - 标准信息弹窗
// 适用于展示详细信息、功能介绍等

import React, { useState } from 'react';
import { X, Heart, Settings, Star } from 'lucide-react';

export function BasicInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-white text-2xl font-bold">Welcome to Liquid Glass</h3>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <p className="text-white/80 mb-4">
              This is a medium-sized modal with glassmorphism effects.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-white/70">
                <Heart size={18} className="text-pink-400 flex-shrink-0" />
                <span>Elegant glassmorphism design</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Settings size={18} className="text-blue-400 flex-shrink-0" />
                <span>Smooth animation transitions</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Star size={18} className="text-yellow-400 flex-shrink-0" />
                <span>Fully responsive and accessible</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-white/20 text-white transition-all duration-200">
                Confirm
              </button>
              <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,largeModalWithForm:`// Large Modal with Form - 大型表单弹窗
// 适用于联系表单、编辑详情等需要大量输入的场景

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export function ContactFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const inputClasses = \`
    w-full px-4 py-3 rounded-xl
    backdrop-blur-md bg-white/10
    border border-white/20
    text-white placeholder-white/40
    focus:outline-none focus:ring-2 focus:ring-blue-400/30
    focus:border-blue-400/50
    transition-all duration-200
  \`;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
      >
        Contact Us
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-3xl backdrop-blur-xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-3xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Contact Form</h3>
                <p className="text-white/60 text-sm mt-1">Fill out this form to get in touch.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 -mr-2 -mt-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-all">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Your Name</label>
                  <input type="text" placeholder="John Doe" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses} />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input type="email" placeholder="john@example.com" value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Subject</label>
                <input type="text" placeholder="How can we help?" value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={inputClasses} />
              </div>

              <div>
                <label className="block text-white/70 text-sm mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us more..." value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={\`\${inputClasses} resize-none\`} />
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200">
                  <Send size={18} />
                  Send Message
                </button>
                <button onClick={() => setIsOpen(false)} className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white transition-all duration-200">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}`,navigationSection:`import React from 'react';
import { Home, Search, User, Settings } from 'lucide-react';

// Navigation Bar
<nav className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border-b border-white/20 px-8 py-4">
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="text-white text-xl font-bold">Brand</div>
    <div className="flex gap-6">
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Home size={20} />
        <span>Home</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Search size={20} />
        <span>Search</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <User size={20} />
        <span>Profile</span>
      </button>
      <button className="flex items-center gap-2 text-white/70 hover:text-white">
        <Settings size={20} />
        <span>Settings</span>
      </button>
    </div>
  </div>
</nav>`,searchSection:`import React from 'react';
import { useState } from 'react';
import { Search } from 'lucide-react';

// Search Input
const [query, setQuery] = useState('');

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search..."
    className="
      w-full pl-10 pr-4 py-2.5
      bg-white/10
      border border-white/20
      rounded-xl
      text-white placeholder-white/40
      focus:outline-none focus:border-blue-400/50
    "
  />
</div>`,tableSection:`import React from 'react';
import { useState } from 'react';

// Table with Sorting & Pagination
const [currentPage, setCurrentPage] = useState(1);
const [sortColumn, setSortColumn] = useState(null);

<div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden">
  <table className="w-full">
    <thead>
      <tr className="bg-white/5 border-b border-white/10">
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Name</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Email</th>
        <th className="px-4 py-3 text-left text-white/70 text-sm font-medium">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-white/5 hover:bg-white/5">
        <td className="px-4 py-3 text-white/90 text-sm">John Doe</td>
        <td className="px-4 py-3 text-white/90 text-sm">john@example.com</td>
        <td className="px-4 py-3 text-white/90 text-sm">Developer</td>
      </tr>
    </tbody>
  </table>
</div>`,toggleSection:{basicToggles:`// Basic Toggle Switches - 基础开关组件
// 支持 sm / md / lg 三种尺寸和 disabled 状态

import React, { useState } from 'react';

interface GlassToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
}

export function GlassToggle({
  checked,
  onChange,
  size = 'md',
  variant = 'primary',
  disabled = false,
}: GlassToggleProps) {
  const sizes = {
    sm: { track: 'w-10 h-5', thumb: 'w-3.5 h-3.5', translate: 'translate-x-5' },
    md: { track: 'w-14 h-7', thumb: 'w-5 h-5', translate: 'translate-x-7' },
    lg: { track: 'w-18 h-9', thumb: 'w-7 h-7', translate: 'translate-x-9' },
  };

  const variants = {
    primary: 'bg-blue-500 shadow-blue-500/50',
    success: 'bg-green-500 shadow-green-500/50',
    warning: 'bg-yellow-500 shadow-yellow-500/50',
    danger: 'bg-red-500 shadow-red-500/50',
  };

  const s = sizes[size];

  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={\\\`
        relative \\\${s.track} rounded-full
        transition-all duration-300 ease-in-out
        \\\${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        \\\${checked
          ? \\\`\\\${variants[variant]} shadow-lg\\\`
          : 'bg-white/20 hover:bg-white/30'
        }
      \\\`}
    >
      <div
        className={\\\`
          absolute top-1 left-1
          \\\${s.thumb} rounded-full
          bg-white shadow-md
          transition-transform duration-300 ease-in-out
          \\\${checked ? s.translate : 'translate-x-0'}
        \\\`}
      />
    </button>
  );
}

// 使用示例 - 不同尺寸:
<GlassToggle checked={true} onChange={() => {}} size="sm" />
<GlassToggle checked={true} onChange={() => {}} size="md" />
<GlassToggle checked={true} onChange={() => {}} size="lg" />
<GlassToggle checked={false} onChange={() => {}} size="md" disabled />`,toggleVariants:`// Toggle Variants - 不同颜色变体
// 支持 primary / success / warning / danger 四种语义化颜色

import React, { useState } from 'react';

function ToggleVariantsDemo() {
  const [states, setStates] = useState({
    primary: true, success: true, warning: true, danger: true,
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.primary} onChange={(v) => setStates({ ...states, primary: v })} variant="primary" />
        <span className="text-white/60 text-sm">Primary</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.success} onChange={(v) => setStates({ ...states, success: v })} variant="success" />
        <span className="text-white/60 text-sm">Success</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.warning} onChange={(v) => setStates({ ...states, warning: v })} variant="warning" />
        <span className="text-white/60 text-sm">Warning</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <GlassToggle checked={states.danger} onChange={(v) => setStates({ ...states, danger: v })} variant="danger" />
        <span className="text-white/60 text-sm">Danger</span>
      </div>
    </div>
  );
}

// 变体颜色映射:
// primary: 'bg-blue-500 shadow-blue-500/50'
// success: 'bg-green-500 shadow-green-500/50'
// warning: 'bg-yellow-500 shadow-yellow-500/50'
// danger:  'bg-red-500 shadow-red-500/50'`,interactiveToggles:`// Interactive Toggles with Icons - 带图标的交互式开关
// 适用于系统设置面板，开关状态联动图标和文案

import React, { useState } from 'react';
import { Wifi, WifiOff, Bell, BellOff, Moon, Sun, Volume2, VolumeX } from 'lucide-react';

function InteractiveTogglesDemo() {
  const [wifi, setWifi] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {wifi ? <Wifi className="text-blue-400" size={24} /> : <WifiOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Wi-Fi</h4>
            <p className="text-white/60 text-sm">{wifi ? 'Connected' : 'Disconnected'}</p>
          </div>
        </div>
        <GlassToggle checked={wifi} onChange={setWifi} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {notifications ? <Bell className="text-yellow-400" size={24} /> : <BellOff className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Notifications</h4>
            <p className="text-white/60 text-sm">{notifications ? 'Enabled' : 'Disabled'}</p>
          </div>
        </div>
        <GlassToggle checked={notifications} onChange={setNotifications} variant="warning" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {darkMode ? <Moon className="text-purple-400" size={24} /> : <Sun className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Dark Mode</h4>
            <p className="text-white/60 text-sm">{darkMode ? 'On' : 'Off'}</p>
          </div>
        </div>
        <GlassToggle checked={darkMode} onChange={setDarkMode} variant="primary" />
      </div>

      <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
        <div className="flex items-center gap-3">
          {sound ? <Volume2 className="text-green-400" size={24} /> : <VolumeX className="text-white/40" size={24} />}
          <div>
            <h4 className="text-white font-semibold">Sound</h4>
            <p className="text-white/60 text-sm">{sound ? 'On' : 'Muted'}</p>
          </div>
        </div>
        <GlassToggle checked={sound} onChange={setSound} variant="success" />
      </div>
    </div>
  );
}`,settingsList:`// Settings List - 设置列表
// 适用于应用设置页面，带分隔线和描述文案

import React, { useState } from 'react';

function SettingsListDemo() {
  const [autoSave, setAutoSave] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Settings</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Auto-save</h4>
            <p className="text-white/60 text-sm">Automatically save changes</p>
          </div>
          <GlassToggle checked={autoSave} onChange={setAutoSave} />
        </div>

        <div className="flex items-center justify-between py-3 border-b border-white/10">
          <div>
            <h4 className="text-white font-medium">Email notifications</h4>
            <p className="text-white/60 text-sm">Receive updates via email</p>
          </div>
          <GlassToggle checked={emailNotif} onChange={setEmailNotif} />
        </div>

        <div className="flex items-center justify-between py-3">
          <div>
            <h4 className="text-white font-medium">Two-factor authentication</h4>
            <p className="text-white/60 text-sm">Add an extra layer of security</p>
          </div>
          <GlassToggle
            checked={twoFA}
            onChange={setTwoFA}
            variant={twoFA ? 'success' : 'primary'}
          />
        </div>
      </div>
    </div>
  );
}`,compactToggles:`// Compact Toggles - 紧凑型开关网格
// 适用于功能开关面板、批量启停控制

import React, { useState } from 'react';

function CompactTogglesDemo() {
  const features = [
    'Feature A', 'Feature B', 'Feature C', 'Feature D', 'Feature E',
    'Feature F', 'Feature G', 'Feature H', 'Feature I', 'Feature J',
  ];

  const [enabled, setEnabled] = useState<Record<string, boolean>>(
    Object.fromEntries(features.map((f, i) => [f, i % 2 === 0]))
  );

  return (
    <div className="backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-6">
      <h3 className="text-white text-2xl mb-6">Compact View</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <GlassToggle
              checked={enabled[feature]}
              onChange={() => setEnabled(prev => ({ ...prev, [feature]: !prev[feature] }))}
              size="sm"
            />
            <span className="text-white/70 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6 pt-4 border-t border-white/10">
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, true])))}
          className="px-4 py-2 rounded-xl bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-300 text-sm transition-all duration-200"
        >
          Enable All
        </button>
        <button
          onClick={() => setEnabled(Object.fromEntries(features.map(f => [f, false])))}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white/70 text-sm transition-all duration-200"
        >
          Disable All
        </button>
      </div>
    </div>
  );
}`},tooltipSection:`import React from 'react';
import { useState } from 'react';

// Tooltip
const [showTooltip, setShowTooltip] = useState(false);

<div className="relative">
  <button
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white"
  >
    Hover me
  </button>
  {showTooltip && (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 backdrop-blur-xl bg-gradient-to-br from-white/95 to-white/90 border border-white/20 rounded-lg px-3 py-2">
      <p className="text-gray-800 text-sm whitespace-nowrap">Tooltip content</p>
    </div>
  )}
</div>`};function Fp({addToast:o}){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent",children:"Charts & Visualizations"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful data visualization components with glassmorphism effects"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Bar Chart"}),e.jsx(Dp,{data:[{label:"Mon",value:65,color:"rgba(96, 165, 250, 0.9)"},{label:"Tue",value:78,color:"rgba(168, 85, 247, 0.9)"},{label:"Wed",value:90,color:"rgba(236, 72, 153, 0.9)"},{label:"Thu",value:81,color:"rgba(34, 197, 94, 0.9)"},{label:"Fri",value:95,color:"rgba(251, 146, 60, 0.9)"},{label:"Sat",value:72,color:"rgba(250, 204, 21, 0.9)"},{label:"Sun",value:68,color:"rgba(139, 92, 246, 0.9)"}],height:300,showGrid:!0,showValues:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Line Chart"}),e.jsx(Lp,{data:[{label:"Jan",value:4e3},{label:"Feb",value:3e3},{label:"Mar",value:5e3},{label:"Apr",value:4500},{label:"May",value:6e3},{label:"Jun",value:5500}],height:300,smooth:!0,showGrid:!0,showDots:!0})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Donut Chart"}),e.jsx(C,{padding:"lg",children:e.jsx(Tp,{data:[{label:"Direct",value:4200,color:"rgba(103, 126, 234, 0.8)"},{label:"Organic",value:3800,color:"rgba(118, 75, 162, 0.8)"},{label:"Social",value:2100,color:"rgba(79, 172, 254, 0.8)"},{label:"Referral",value:1900,color:"rgba(67, 233, 123, 0.8)"},{label:"Email",value:1500,color:"rgba(250, 112, 154, 0.8)"}],size:280,donut:!0,showLegend:!0})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Gauge Charts"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsx(ou,{value:75,max:100,size:160,label:"Performance"}),e.jsx(ou,{value:82,max:100,size:160,label:"Efficiency"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Area Chart (Wave Chart)"}),e.jsx(Pp,{data:[{label:"Jan",values:{Sales:4e3,Revenue:2400,Profit:1400}},{label:"Feb",values:{Sales:3e3,Revenue:1398,Profit:900}},{label:"Mar",values:{Sales:5e3,Revenue:3800,Profit:2100}},{label:"Apr",values:{Sales:4500,Revenue:3908,Profit:2500}},{label:"May",values:{Sales:6e3,Revenue:4800,Profit:3200}},{label:"Jun",values:{Sales:5500,Revenue:3800,Profit:2800}}],height:300,smooth:!0,stacked:!1})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Percentage Indicators"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(dl,{value:85,variant:"circular",size:"md",label:"Goal"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(dl,{value:72,variant:"circular",size:"md",label:"Progress"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(dl,{value:68,variant:"semi-circular",size:"md",label:"Performance"})}),e.jsx(C,{padding:"lg",className:"flex flex-col items-center",children:e.jsx(dl,{value:91,variant:"semi-circular",size:"md",label:"Uptime"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Progress Bars"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Primary Progress"}),e.jsx("span",{className:"text-white",children:"75%"})]}),e.jsx(ul,{value:75,variant:"primary"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Success Progress"}),e.jsx("span",{className:"text-white",children:"60%"})]}),e.jsx(ul,{value:60,variant:"success"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Warning Progress"}),e.jsx("span",{className:"text-white",children:"45%"})]}),e.jsx(ul,{value:45,variant:"warning"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between mb-2",children:[e.jsx("span",{className:"text-white/80",children:"Danger Progress"}),e.jsx("span",{className:"text-white",children:"30%"})]}),e.jsx(ul,{value:30,variant:"danger"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Code Samples"}),e.jsx(ce,{code:de.chartsSection})]})]})}function Rp(){const o=[{name:"Inter",cssVar:"--font-sans",weights:[300,400,500,600,700,800,900]},{name:"Poppins",cssVar:"--font-display",weights:[300,400,500,600,700,800,900]},{name:"Space Grotesk",cssVar:"--font-geometric",weights:[300,400,500,600,700]},{name:"JetBrains Mono",cssVar:"--font-mono",weights:[300,400,500,600,700]},{name:"Playfair Display",cssVar:"--font-serif",weights:[400,500,600,700,800,900]},{name:"Montserrat",cssVar:"--font-modern",weights:[300,400,500,600,700,800,900]},{name:"Raleway",cssVar:"--font-elegant",weights:[300,400,500,600,700,800,900]},{name:"Outfit",cssVar:"--font-rounded",weights:[300,400,500,600,700,800,900]}],d={300:"Light",400:"Regular",500:"Medium",600:"SemiBold",700:"Bold",800:"ExtraBold",900:"Black"};return e.jsx("div",{className:"space-y-6",children:o.map(c=>e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:c.name}),e.jsx("div",{className:"space-y-4",children:c.weights.map(h=>e.jsxs("div",{className:"flex items-baseline gap-4",children:[e.jsx("span",{className:"text-white/60 text-sm w-24",children:d[h]}),e.jsx("p",{className:"text-white text-2xl flex-1",style:{fontFamily:`var(${c.cssVar})`,fontWeight:h},children:"The quick brown fox jumps over the lazy dog"})]},h))})]},c.name))})}function Ap({value:o,onChange:d,className:c=""}){const h=[{name:"Inter",value:"var(--font-sans)",preview:"The quick brown fox jumps"},{name:"Poppins",value:"var(--font-display)",preview:"Modern & Clean Design"},{name:"Space Grotesk",value:"var(--font-geometric)",preview:"Geometric Sans Serif"},{name:"JetBrains Mono",value:"var(--font-mono)",preview:"Code & Terminal Font"},{name:"Playfair Display",value:"var(--font-serif)",preview:"Elegant Serif Style"},{name:"Montserrat",value:"var(--font-modern)",preview:"Contemporary Design"},{name:"Raleway",value:"var(--font-elegant)",preview:"Sophisticated Look"},{name:"Outfit",value:"var(--font-rounded)",preview:"Friendly Rounded Font"}];return e.jsx("div",{className:`space-y-3 ${c}`,children:h.map(x=>e.jsx("button",{onClick:()=>d(x.value),className:`
            w-full p-4 rounded-2xl
            backdrop-blur-md backdrop-saturate-150
            border-2 transition-all duration-300
            text-left
            ${o===x.value?"bg-white/20 border-blue-400/50 scale-[1.02]":"bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30"}
          `,children:e.jsx("div",{className:"flex items-start justify-between gap-4",children:e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("h4",{className:"text-white",children:x.name}),o===x.value&&e.jsx(ps,{size:16,className:"text-blue-300"})]}),e.jsx("p",{className:"text-white/70 text-lg",style:{fontFamily:x.value},children:x.preview})]})})},x.value))})}function Ip({value:o,onChange:d,min:c=8,max:h=128,step:x=1,className:m=""}){const g=[12,14,16,18,20,24,32,48,64,96],j=()=>{o<h&&d(Math.min(o+x,h))},y=()=>{o>c&&d(Math.max(o-x,c))};return e.jsxs("div",{className:`space-y-4 ${m}`,children:[e.jsxs("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        rounded-2xl
        p-6
        text-center
      `,children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Current Size"}),e.jsx("p",{className:"text-white text-6xl font-bold",children:o}),e.jsx("p",{className:"text-white/40 text-sm mt-1",children:"pixels"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:y,disabled:o<=c,className:`
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-white/20
            transition-all duration-200
          `,children:e.jsx(Nu,{size:20})}),e.jsx("input",{type:"range",min:c,max:h,step:x,value:o,onChange:b=>d(Number(b.target.value)),className:"flex-1"}),e.jsx("button",{onClick:j,disabled:o>=h,className:`
            p-3 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            text-white
            disabled:opacity-50 disabled:cursor-not-allowed
            hover:bg-white/20
            transition-all duration-200
          `,children:e.jsx(Ta,{size:20})})]}),e.jsx("div",{className:"grid grid-cols-5 gap-2",children:g.map(b=>e.jsx("button",{onClick:()=>d(b),className:`
              py-2 px-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              border-2 transition-all duration-200
              ${o===b?"bg-white/20 border-blue-400/50 text-white":"bg-white/10 border-white/20 text-white/80 hover:bg-white/15"}
            `,children:b},b))})]})}function Op({value:o,onChange:d,className:c=""}){const[h,x]=I.useState("var(--font-sans)"),[m,g]=I.useState(16),[j,y]=I.useState(!1),[b,_]=I.useState(!1),[k,z]=I.useState(!1),[$,V]=I.useState("left"),R=[{name:"Inter",value:"var(--font-sans)"},{name:"Poppins",value:"var(--font-display)"},{name:"Space Grotesk",value:"var(--font-geometric)"},{name:"JetBrains Mono",value:"var(--font-mono)"}],G={fontFamily:h,fontSize:`${m}px`,fontWeight:j?700:400,fontStyle:b?"italic":"normal",textDecoration:k?"underline":"none",textAlign:$};return e.jsxs("div",{className:`space-y-4 ${c}`,children:[e.jsxs("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        rounded-2xl
        p-4
        flex flex-wrap gap-4 items-center
      `,children:[e.jsx("select",{value:h,onChange:Z=>x(Z.target.value),className:`
            px-4 py-2 rounded-xl
            backdrop-blur-md backdrop-saturate-150
            bg-white/10
            border border-white/20
            text-white
            outline-none
            cursor-pointer
          `,children:R.map(Z=>e.jsx("option",{value:Z.value,className:"bg-gray-800",children:Z.name},Z.value))}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Da,{size:16,className:"text-white/60"}),e.jsx("input",{type:"number",value:m,onChange:Z=>g(Number(Z.target.value)),min:8,max:72,className:`
              w-16 px-2 py-2 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-white/10
              border border-white/20
              text-white text-center
              outline-none
            `})]}),e.jsx("div",{className:"h-6 w-px bg-white/20"}),e.jsx("button",{onClick:()=>y(!j),className:`
            p-2 rounded-xl transition-all duration-200
            ${j?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(s0,{size:20})}),e.jsx("button",{onClick:()=>_(!b),className:`
            p-2 rounded-xl transition-all duration-200
            ${b?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(Q0,{size:20})}),e.jsx("button",{onClick:()=>z(!k),className:`
            p-2 rounded-xl transition-all duration-200
            ${k?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(up,{size:20})}),e.jsx("div",{className:"h-6 w-px bg-white/20"}),e.jsx("button",{onClick:()=>V("left"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="left"?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(Bx,{size:20})}),e.jsx("button",{onClick:()=>V("center"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="center"?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(Ox,{size:20})}),e.jsx("button",{onClick:()=>V("right"),className:`
            p-2 rounded-xl transition-all duration-200
            ${$==="right"?"bg-white/20 text-white":"bg-white/10 text-white/60 hover:bg-white/15"}
          `,children:e.jsx(Ux,{size:20})})]}),e.jsx("div",{className:`
        backdrop-blur-md backdrop-saturate-150
        bg-white/10
        border border-white/20
        rounded-2xl
        p-6
        min-h-[300px]
      `,children:e.jsx("textarea",{value:o,onChange:Z=>d(Z.target.value),placeholder:"Start typing...",className:`
            w-full h-full min-h-[250px]
            bg-transparent
            text-white
            placeholder:text-white/50
            outline-none
            resize-none
          `,style:G})})]})}function Gp(){const[o,d]=I.useState("var(--font-sans)"),[c,h]=I.useState(24),[x,m]=I.useState("Welcome to Liquid Glass Design System!");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent",children:"Typography & Fonts"}),e.jsx("p",{className:"text-white/70 text-lg",children:"8 beautiful fonts with complete typography system"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Font Family Picker"}),e.jsx(Ap,{value:o,onChange:d})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Font Size Picker"}),e.jsx(Ip,{value:c,onChange:h,min:12,max:96,step:2}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Preview:"}),e.jsx("p",{className:"text-white leading-relaxed",style:{fontSize:`${c}px`,fontFamily:o},children:"The quick brown fox jumps over the lazy dog"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Text Editor"}),e.jsx(Op,{value:x,onChange:m})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Complete Font Collection"}),e.jsx(Rp,{})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ce,{code:de.fontsSection,language:"tsx"})]})]})}function Yt({type:o="text",placeholder:d,value:c,onChange:h,className:x="",icon:m}){return e.jsxs("div",{className:"relative",children:[m&&e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none",children:m}),e.jsx("input",{type:o,placeholder:d,value:c,onChange:h,style:o==="date"?{colorScheme:"dark"}:void 0,className:`
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          px-4 py-3 ${m?"pl-12":""}
          text-white placeholder:text-white/50
          outline-none
          focus:bg-white/15 focus:border-white/30
          focus:shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]
          transition-all duration-300
          ${x}
        `})]})}function Bp({options:o,value:d,onChange:c,placeholder:h="Select an option",className:x=""}){const[m,g]=I.useState(!1),j=o.find(y=>y.value===d);return e.jsxs("div",{className:`relative ${x}`,children:[e.jsxs("button",{onClick:()=>g(!m),className:`
          w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          px-4 py-3
          text-white text-left
          outline-none
          focus:bg-white/15 focus:border-white/30
          transition-all duration-300
          flex items-center justify-between
        `,children:[e.jsx("span",{className:j?"text-white":"text-white/50",children:j?j.label:h}),e.jsx($s,{size:20,className:`text-white/60 transition-transform duration-200 ${m?"rotate-180":""}`})]}),m&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>g(!1)}),e.jsx("div",{className:`
            absolute top-full left-0 right-0 mt-2 z-20
            backdrop-blur-xl backdrop-saturate-150
            bg-black/85
            border border-white/15
            rounded-2xl
            overflow-hidden
            shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `,children:o.map(y=>e.jsx("button",{onClick:()=>{c(y.value),g(!1)},className:`
                  w-full px-4 py-3 text-left
                  transition-colors duration-150
                  ${d===y.value?"bg-white/20 text-white":"text-white/80 hover:bg-white/10 hover:text-white"}
                `,children:y.label},y.value))})]})]})}function X({children:o,variant:d="primary",size:c="md",onClick:h,className:x="",disabled:m=!1}){const g=`
    relative overflow-hidden rounded-2xl
    backdrop-blur-md backdrop-saturate-150
    border border-white/20
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `,j={primary:`
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(103,126,234,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-400/20 before:to-blue-500/20
    `,secondary:`
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(240,147,251,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink-400/20 before:to-rose-500/20
    `,accent:`
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(79,172,254,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/20 before:to-blue-400/20
    `,success:`
      bg-white/10 hover:bg-white/20
      text-white shadow-[0_8px_32px_0_rgba(67,233,123,0.37)]
      before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400/20 before:to-teal-400/20
    `,ghost:`
      bg-white/5 hover:bg-white/10
      text-white/90 shadow-[0_4px_16px_0_rgba(0,0,0,0.1)]
    `},y={sm:"px-4 py-2 text-sm",md:"px-6 py-3 text-base",lg:"px-8 py-4 text-lg"};return e.jsx("button",{onClick:h,disabled:m,className:`${g} ${j[d]} ${y[c]} ${x}`,children:e.jsx("span",{className:"relative z-10 flex items-center justify-center",children:o})})}var Vp=hu();const Up=uu(Vp);function Hp({value:o,onChange:d,placeholder:c="MM/DD/YYYY",className:h=""}){const[x,m]=I.useState(!1),[g,j]=I.useState(o),[y,b]=I.useState(o||new Date),_=I.useRef(null),k=I.useRef(null),[z,$]=I.useState({top:0,left:0});I.useEffect(()=>{const ne=ge=>{if(_.current&&!_.current.contains(ge.target)){const we=document.getElementById("glass-datepicker-portal");if(we&&we.contains(ge.target))return;m(!1)}};return x&&document.addEventListener("mousedown",ne),()=>document.removeEventListener("mousedown",ne)},[x]),I.useEffect(()=>{if(x&&k.current){const ne=k.current.getBoundingClientRect();$({top:ne.bottom+8,left:ne.left})}},[x]);const V=new Date(y.getFullYear(),y.getMonth()+1,0).getDate(),R=new Date(y.getFullYear(),y.getMonth(),1).getDay(),G=["January","February","March","April","May","June","July","August","September","October","November","December"],Z=["Su","Mo","Tu","We","Th","Fr","Sa"],J=()=>{b(new Date(y.getFullYear(),y.getMonth()-1))},re=()=>{b(new Date(y.getFullYear(),y.getMonth()+1))},ae=ne=>{const ge=new Date(y.getFullYear(),y.getMonth(),ne);j(ge),d==null||d(ge),m(!1)},Ne=ne=>{const ge=new Date;return ne===ge.getDate()&&y.getMonth()===ge.getMonth()&&y.getFullYear()===ge.getFullYear()},ke=ne=>g?ne===g.getDate()&&y.getMonth()===g.getMonth()&&y.getFullYear()===g.getFullYear():!1,fe=ne=>{if(!ne)return"";const ge=String(ne.getMonth()+1).padStart(2,"0"),we=String(ne.getDate()).padStart(2,"0"),K=ne.getFullYear();return`${ge}/${we}/${K}`};return e.jsxs("div",{ref:_,className:`relative ${h}`,children:[e.jsxs("div",{ref:k,onClick:()=>m(!x),className:`
          relative w-full rounded-2xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          px-4 py-3 pl-12
          text-white
          outline-none
          hover:bg-white/15 hover:border-white/30
          transition-all duration-300
          select-none
        `,children:[e.jsx("div",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none",children:e.jsx(Qn,{size:20})}),e.jsx("span",{className:g?"text-white":"text-white/50",children:g?fe(g):c})]}),x&&Up.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[9998]",onClick:()=>m(!1)}),e.jsxs("div",{id:"glass-datepicker-portal",style:{position:"fixed",top:z.top,left:z.left},className:`
              z-[9999]
              w-[320px]
              backdrop-blur-xl backdrop-saturate-150
              bg-black/80
              border border-white/15
              rounded-2xl
              p-5
              shadow-[0_16px_48px_0_rgba(0,0,0,0.5)]
            `,children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("button",{onClick:J,className:`
                  p-2 rounded-xl
                  hover:bg-white/10
                  transition-colors duration-200
                  text-white
                `,children:e.jsx(yl,{size:18})}),e.jsxs("h3",{className:"text-white text-sm",children:[G[y.getMonth()]," ",y.getFullYear()]}),e.jsx("button",{onClick:re,className:`
                  p-2 rounded-xl
                  hover:bg-white/10
                  transition-colors duration-200
                  text-white
                `,children:e.jsx(Qt,{size:18})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-1",children:Z.map(ne=>e.jsx("div",{className:"text-center text-white/50 text-xs py-1.5",children:ne},ne))}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:R},(ne,ge)=>e.jsx("div",{},`empty-${ge}`)),Array.from({length:V},(ne,ge)=>{const we=ge+1;return e.jsx("button",{onClick:()=>ae(we),className:`
                      aspect-square rounded-lg
                      flex items-center justify-center
                      text-sm transition-all duration-200
                      ${ke(we)?"bg-gradient-to-br from-blue-500/50 to-purple-500/50 text-white border border-blue-400/40 shadow-[0_0_12px_rgba(99,102,241,0.3)]":Ne(we)?"bg-white/15 text-white ring-1 ring-white/30":"text-white/80 hover:bg-white/10 hover:text-white"}
                    `,children:we},we)})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex items-center justify-between",children:[e.jsx("button",{onClick:()=>{const ne=new Date;b(ne),j(ne),d==null||d(ne),m(!1)},className:"text-xs text-blue-400 hover:text-blue-300 transition-colors",children:"Today"}),g&&e.jsx("button",{onClick:()=>{j(void 0),d==null||d(void 0)},className:"text-xs text-white/40 hover:text-white/60 transition-colors",children:"Clear"})]})]})]}),document.body)]})}function Wp({addToast:o}){const[d,c]=I.useState("");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent",children:"Forms & Inputs"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful form components with glass effects"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Text Inputs"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(Yt,{placeholder:"Search...",icon:e.jsx(ut,{size:20})}),e.jsx(Yt,{type:"email",placeholder:"Enter email",icon:e.jsx(pl,{size:20})}),e.jsx("textarea",{placeholder:"Enter your message...",rows:4,value:d,onChange:h=>c(h.target.value),className:`
                w-full px-4 py-3
                bg-white/10
                border border-white/20
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                resize-none
                transition-colors
              `})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Other Inputs"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(Bp,{options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}],placeholder:"Select an option"}),e.jsx(Hp,{placeholder:"Select a date"}),e.jsx(Yt,{type:"tel",placeholder:"Phone number",icon:e.jsx(Yn,{size:20})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Contact Form Example"}),e.jsxs("form",{className:"space-y-4",onSubmit:h=>{h.preventDefault(),o("success","Form submitted!")},children:[e.jsx(Yt,{placeholder:"Full Name",icon:e.jsx(st,{size:20})}),e.jsx(Yt,{type:"email",placeholder:"Email Address",icon:e.jsx(pl,{size:20})}),e.jsx(Yt,{placeholder:"Website",icon:e.jsx(R0,{size:20})}),e.jsx("textarea",{placeholder:"Your message...",rows:6,className:`
              w-full px-4 py-3
              bg-white/10
              border border-white/20
              rounded-xl
              text-white placeholder-white/40
              focus:outline-none focus:border-blue-400/50
              resize-none
              transition-colors
            `}),e.jsxs("div",{className:"flex justify-end gap-4",children:[e.jsx(X,{variant:"ghost",type:"button",children:"Cancel"}),e.jsx(X,{variant:"primary",type:"submit",children:"Submit"})]})]})]}),e.jsx(ce,{code:de.formsSection})]})}function Yp(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent",children:"Layout Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Responsive layout patterns for web and mobile applications"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Device Views"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(cl,{className:"text-blue-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Desktop"}),e.jsx("p",{className:"text-white/60 text-sm",children:"1920×1080"})]})]}),e.jsx("div",{className:"aspect-video rounded-xl bg-white/5 border border-white/20 p-4",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"col-span-1 bg-white/10 rounded"}),e.jsxs("div",{className:"col-span-3 space-y-2",children:[e.jsx("div",{className:"h-1/3 bg-white/10 rounded"}),e.jsxs("div",{className:"h-2/3 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"})]})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ru,{className:"text-purple-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Tablet"}),e.jsx("p",{className:"text-white/60 text-sm",children:"768×1024"})]})]}),e.jsx("div",{className:"aspect-[3/4] max-h-80 rounded-xl bg-white/5 border border-white/20 p-3 mx-auto",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/4 bg-white/10 rounded"}),e.jsxs("div",{className:"h-3/4 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(eu,{className:"text-pink-400",size:32}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-xl font-bold",children:"Mobile"}),e.jsx("p",{className:"text-white/60 text-sm",children:"375×812"})]})]}),e.jsx("div",{className:"aspect-[9/19.5] max-h-96 rounded-2xl bg-white/5 border border-white/20 p-3 mx-auto",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-12 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"})]})]})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Layout Patterns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout A"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Full Width"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Single column layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded"}),e.jsx("div",{className:"h-2/4 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/4 bg-white/10 rounded"})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout B"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Sidebar Right"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Main content + sidebar"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"})]}),e.jsx("div",{className:"w-1/3 bg-white/10 rounded"})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout C"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Grid Layout"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"4-column grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-green-400/30 to-emerald-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout D"}),e.jsx("span",{className:"text-white/50 text-xs",children:"With Sidebar"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Left sidebar + grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsx("div",{className:"w-1/4 bg-white/10 rounded"}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-orange-400/30 to-red-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout E"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Stacked"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Vertical sections"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsx("div",{className:"w-1/3 bg-white/10 rounded"}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout F"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Three Column"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Triple split layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/2 bg-white/10 rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/2 bg-white/10 rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/2 bg-white/10 rounded"})]})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout G"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Masonry"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Pinterest-style grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full grid grid-cols-3 gap-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/3 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded"}),e.jsx("div",{className:"h-2/3 bg-white/10 rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-2/3 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/3 bg-white/10 rounded"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-1/2 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/2 bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout H"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Hero Section"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Large header + content"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-2/5 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded flex items-center justify-center",children:e.jsx("div",{className:"w-1/2 h-1/3 bg-white/20 rounded"})}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout I"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Split Screen"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"50/50 divided layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex gap-2",children:[e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-gradient-to-r from-amber-400/30 to-yellow-400/30 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"})]}),e.jsxs("div",{className:"flex-1 flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/4 bg-white/10 rounded"}),e.jsx("div",{className:"flex-1 bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout J"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Dashboard"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Stats cards grid"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/5 bg-gradient-to-r from-lime-400/30 to-green-400/30 rounded"}),e.jsxs("div",{className:"flex-1 grid grid-cols-3 gap-2",children:[e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"bg-white/10 rounded"}),e.jsx("div",{className:"col-span-3 bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout K"}),e.jsx("span",{className:"text-white/50 text-xs",children:"List View"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Vertical list layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsxs("div",{className:"h-full flex flex-col gap-2",children:[e.jsx("div",{className:"h-1/6 bg-gradient-to-r from-sky-400/30 to-blue-400/30 rounded"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"}),e.jsx("div",{className:"h-1/5 bg-white/10 rounded"})]})]})})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h4",{className:"text-white font-bold",children:"Layout L"}),e.jsx("span",{className:"text-white/50 text-xs",children:"Cover"})]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Full-page cover layout"})]}),e.jsx("div",{className:"aspect-[4/3] rounded-xl bg-white/5 border border-white/20 p-3",children:e.jsx("div",{className:"h-full flex items-center justify-center",children:e.jsx("div",{className:"w-3/4 h-3/4 bg-gradient-to-br from-fuchsia-400/30 to-purple-400/30 rounded-xl flex items-center justify-center",children:e.jsx("div",{className:"w-1/2 h-1/4 bg-white/20 rounded"})})})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Responsive Behavior"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(gl,{className:"text-cyan-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Adaptive Layouts"})]}),e.jsx("p",{className:"text-white/70 mb-4",children:"Layouts automatically adapt to different screen sizes using responsive breakpoints."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Mobile: < 768px"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Tablet: 768px - 1024px"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-purple-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Desktop: > 1024px"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(cl,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Fluid Grids"})]}),e.jsx("p",{className:"text-white/70 mb-4",children:"Grid systems use flexible columns that scale proportionally across devices."}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-pink-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"12-column grid system"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-orange-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Automatic reflow"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400"}),e.jsx("span",{className:"text-white/70 text-sm",children:"Mobile-first approach"})]})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-6",children:"Code Samples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(cl,{className:"text-blue-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Desktop Layout"})]}),e.jsx(ce,{code:de.desktopLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(ru,{className:"text-purple-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Tablet Layout"})]}),e.jsx(ce,{code:de.tabletLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(eu,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Mobile Layout"})]}),e.jsx(ce,{code:de.mobileLayout})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(gl,{className:"text-cyan-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Adaptive Layouts"})]}),e.jsx(ce,{code:de.adaptiveLayouts})]}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[e.jsx(cl,{className:"text-pink-400",size:32}),e.jsx("h4",{className:"text-white text-xl font-bold",children:"Fluid Grids"})]}),e.jsx(ce,{code:de.fluidGrids})]})]})]})]})}function Qp({addToast:o}){const[d,c]=he.useState(0),[h,x]=he.useState(0),[m,g]=he.useState(null),[j,y]=he.useState(null),[b,_]=he.useState(null),k=$=>{c($),o("success",`You rated ${$} out of 5 stars!`,{title:"Rating Submitted"})},z=$=>{g($);let V="";$>=9?V="Promoter":$>=7?V="Passive":V="Detractor",o("success",`NPS Score: ${$} (${V})`,{title:"Feedback Received"})};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent",children:"User Feedback & Ratings"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Collect user ratings, reviews, and satisfaction scores"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Star Rating"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on the stars below to submit your rating"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/70 text-sm mb-3",children:"Rate your experience (1-5 stars)"}),e.jsxs("div",{className:"flex items-center gap-3",children:[[1,2,3,4,5].map($=>e.jsx("button",{onClick:()=>k($),onMouseEnter:()=>x($),onMouseLeave:()=>x(0),className:"transition-all duration-200 hover:scale-125",children:e.jsx(Ye,{size:48,className:`transition-all duration-200 ${$<=(h||d)?"fill-yellow-400 text-yellow-400 drop-shadow-lg":"text-white/30"}`})},$)),e.jsx("span",{className:"ml-4 text-white text-2xl font-bold",children:d>0?`${d}.0`:"—"})]}),d>0&&e.jsxs("p",{className:"text-white/70 text-sm mt-3",children:[d===5&&"⭐ Excellent! Thank you!",d===4&&"👍 Great! We appreciate your feedback!",d===3&&"👌 Good! We can do better!",d===2&&"😐 We will improve!",d===1&&"😞 Sorry to hear that. We will work harder!"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-white/10",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Product Quality"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4,5].map($=>e.jsx(Ye,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.8)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Customer Service"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4].map($=>e.jsx(Ye,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Ye,{size:20,className:"text-white/30"}),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.2)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Delivery Speed"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3,4].map($=>e.jsx(Ye,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Ye,{size:20,className:"fill-yellow-400/50 text-yellow-400/50"}),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(4.5)"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-white/60 text-xs",children:"Value for Money"}),e.jsxs("div",{className:"flex items-center gap-2",children:[[1,2,3].map($=>e.jsx(Ye,{size:20,className:"fill-yellow-400 text-yellow-400"},$)),[4,5].map($=>e.jsx(Ye,{size:20,className:"text-white/30"},$)),e.jsx("span",{className:"text-white/70 text-sm ml-2",children:"(3.0)"})]})]})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Net Promoter Score (NPS)"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on a number to select your likelihood to recommend"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-4",children:"How likely are you to recommend our product to a friend or colleague?"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:[0,1,2,3,4,5,6,7,8,9,10].map($=>e.jsx("button",{onClick:()=>z($),className:`
                    w-14 h-14 rounded-xl
                    backdrop-blur-md
                    border-2
                    transition-all duration-200
                    hover:scale-110
                    ${m===$?$>=9?"bg-green-500/30 border-green-400 text-white shadow-lg shadow-green-500/50":$>=7?"bg-yellow-500/30 border-yellow-400 text-white shadow-lg shadow-yellow-500/50":"bg-red-500/30 border-red-400 text-white shadow-lg shadow-red-500/50":"bg-white/5 border-white/20 text-white/70 hover:border-white/40"}
                  `,children:e.jsx("span",{className:"text-xl font-bold",children:$})},$))}),e.jsxs("div",{className:"flex justify-between text-white/50 text-xs",children:[e.jsx("span",{children:"Not likely at all"}),e.jsx("span",{children:"Extremely likely"})]}),m!==null&&e.jsx("div",{className:"mt-4 p-4 rounded-xl bg-white/5 border border-white/10",children:e.jsxs("p",{className:"text-white font-semibold",children:["Score: ",m," - "," ",m>=9&&e.jsx("span",{className:"text-green-400",children:"Promoter 🎉"}),m>=7&&m<9&&e.jsx("span",{className:"text-yellow-400",children:"Passive 😐"}),m<7&&e.jsx("span",{className:"text-red-400",children:"Detractor 😞"})]})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Satisfaction Level"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click on an emoji to express your satisfaction level"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-6",children:"How satisfied are you with our service?"}),e.jsxs("div",{className:"flex justify-center gap-8",children:[e.jsxs("button",{onClick:()=>{y("happy"),o("success","Thank you for your positive feedback!",{title:"Very Satisfied"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${j==="happy"?"bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30":"bg-white/5 border-white/20 hover:border-green-400/50"}
              `,children:[e.jsx(Ea,{size:64,className:j==="happy"?"text-green-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Very Satisfied"})]}),e.jsxs("button",{onClick:()=>{y("neutral"),o("info","Thank you for your feedback!",{title:"Neutral"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${j==="neutral"?"bg-yellow-500/20 border-yellow-400 shadow-lg shadow-yellow-500/30":"bg-white/5 border-white/20 hover:border-yellow-400/50"}
              `,children:[e.jsx(nm,{size:64,className:j==="neutral"?"text-yellow-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Neutral"})]}),e.jsxs("button",{onClick:()=>{y("sad"),o("warning","We are sorry to hear that. We will improve!",{title:"Not Satisfied"})},className:`
                flex flex-col items-center gap-3 p-6 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${j==="sad"?"bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30":"bg-white/5 border-white/20 hover:border-red-400/50"}
              `,children:[e.jsx(T0,{size:64,className:j==="sad"?"text-red-400":"text-white/70"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Not Satisfied"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Quick Rating"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Click thumbs up or down to rate"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 text-sm mb-6",children:"Was this helpful?"}),e.jsxs("div",{className:"flex justify-center gap-6",children:[e.jsxs("button",{onClick:()=>{_("up"),o("success","Glad you found this helpful!",{title:"Thanks!"})},className:`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${b==="up"?"bg-green-500/20 border-green-400 shadow-lg shadow-green-500/30":"bg-white/5 border-white/20 hover:border-green-400/50"}
              `,children:[e.jsx(ku,{size:48,className:b==="up"?"text-green-400":"text-white/70"}),e.jsx("span",{className:"text-white font-medium",children:"Yes"}),b==="up"&&e.jsx("span",{className:"text-green-400 text-sm",children:"Thank you!"})]}),e.jsxs("button",{onClick:()=>{_("down"),o("warning","We will work to improve!",{title:"Thanks for feedback"})},className:`
                flex flex-col items-center gap-3 p-8 rounded-2xl
                backdrop-blur-md border-2 transition-all duration-200
                hover:scale-110
                ${b==="down"?"bg-red-500/20 border-red-400 shadow-lg shadow-red-500/30":"bg-white/5 border-white/20 hover:border-red-400/50"}
              `,children:[e.jsx(ep,{size:48,className:b==="down"?"text-red-400":"text-white/70"}),e.jsx("span",{className:"text-white font-medium",children:"No"}),b==="down"&&e.jsx("span",{className:"text-red-400 text-sm",children:"Sorry to hear"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-4",children:"Customer Reviews"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Sarah Johnson"}),e.jsx("p",{className:"text-white/50 text-xs",children:"2 days ago"})]}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map($=>e.jsx(Ye,{size:16,className:"fill-yellow-400 text-yellow-400"},$))})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Absolutely love the design system! The glassmorphism effects are stunning and the components are very easy to use."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Quality"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Design"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Michael Chen"}),e.jsx("p",{className:"text-white/50 text-xs",children:"1 week ago"})]}),e.jsxs("div",{className:"flex gap-1",children:[[1,2,3,4].map($=>e.jsx(Ye,{size:16,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Ye,{size:16,className:"text-white/30"})]})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Great components overall. Would love to see more chart variations and better mobile responsiveness."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Components"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Features"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"Emma Williams"}),e.jsx("p",{className:"text-white/50 text-xs",children:"2 weeks ago"})]}),e.jsx("div",{className:"flex gap-1",children:[1,2,3,4,5].map($=>e.jsx(Ye,{size:16,className:"fill-yellow-400 text-yellow-400"},$))})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Perfect for our dashboard redesign. The liquid glass aesthetic is exactly what we were looking for!"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Beautiful"}),e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Modern"})]})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-bold",children:"David Kim"}),e.jsx("p",{className:"text-white/50 text-xs",children:"3 weeks ago"})]}),e.jsxs("div",{className:"flex gap-1",children:[[1,2,3,4].map($=>e.jsx(Ye,{size:16,className:"fill-yellow-400 text-yellow-400"},$)),e.jsx(Ye,{size:16,className:"fill-yellow-400/50 text-yellow-400/50"})]})]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Good library with nice visual effects. Documentation could be more comprehensive for beginners."}),e.jsx("div",{className:"flex gap-2",children:e.jsx("span",{className:"px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs",children:"Documentation"})})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Submit Feedback"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"🖱️ Fill out the form and click submit"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Your Name"}),e.jsx("input",{type:"text",placeholder:"John Doe",className:`
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/20
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                `})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Rating"}),e.jsx("div",{className:"flex gap-2",children:[1,2,3,4,5].map($=>e.jsx("button",{className:"transition-all duration-200 hover:scale-125",children:e.jsx(Ye,{size:32,className:"text-white/30 hover:fill-yellow-400 hover:text-yellow-400"})},$))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-white text-sm font-medium mb-2 block",children:"Your Feedback"}),e.jsx("textarea",{rows:4,placeholder:"Tell us what you think...",className:`
                  w-full px-4 py-3 rounded-xl
                  bg-white/5 backdrop-blur-md
                  border border-white/20
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-all duration-200
                  resize-none
                `})]}),e.jsxs(X,{variant:"primary",onClick:()=>o("success","Thank you for your feedback!",{title:"Feedback Submitted"}),className:"w-full",children:[e.jsx(bl,{size:18,className:"mr-2"}),"Submit Feedback"]})]})})]}),e.jsx(ce,{title:"Feedback & Rating Code Samples",code:de.feedbackSection})]})}function qp({items:o,showHome:d=!0,className:c=""}){return e.jsxs("nav",{className:`flex items-center gap-2 ${c}`,children:[d&&e.jsxs(e.Fragment,{children:[e.jsx("a",{href:"/",className:`
              text-white/70 hover:text-white
              transition-colors duration-200
              p-2 rounded-lg
              hover:bg-white/10
            `,children:e.jsx(Nl,{size:16})}),e.jsx(Qt,{size:16,className:"text-white/40"})]}),o.map((h,x)=>e.jsx("div",{className:"flex items-center gap-2",children:x===o.length-1?e.jsx("span",{className:"text-white px-2 py-1",children:h.label}):e.jsxs(e.Fragment,{children:[e.jsx("a",{href:h.href,onClick:h.onClick,className:`
                  text-white/70 hover:text-white
                  transition-colors duration-200
                  px-2 py-1 rounded-lg
                  hover:bg-white/10
                `,children:h.label}),e.jsx(Qt,{size:16,className:"text-white/40"})]})},x))]})}function Jp({items:o=[{label:"Home",icon:e.jsx(Nl,{size:18}),href:"#home"},{label:"Dashboard",icon:e.jsx(ju,{size:18}),href:"#dashboard"},{label:"Projects",icon:e.jsx(za,{size:18}),href:"#projects",badge:3},{label:"Team",icon:e.jsx(wl,{size:18}),href:"#team"}],logo:d,onMenuClick:c,onSearch:h,showSearch:x=!0,showNotifications:m=!0,showUserMenu:g=!0,notificationCount:j=5,className:y=""}){const[b,_]=I.useState(""),[k,z]=I.useState("Home"),[$,V]=I.useState(!1);return e.jsx("nav",{className:`
      backdrop-blur-xl bg-black/85
      border-b border-white/20
      ${y}
    `,children:e.jsxs("div",{className:"px-6 h-16 flex items-center justify-between gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[c&&e.jsx("button",{onClick:c,className:`
                p-2 rounded-lg
                backdrop-blur-md bg-white/5
                border border-white/10
                hover:bg-white/10
                transition-all duration-300
                lg:hidden
              `,children:e.jsx(yu,{size:20,className:"text-white"})}),e.jsxs("div",{className:"flex items-center gap-3",children:[d||e.jsxs("div",{className:`
                w-9 h-9 
                rounded-lg
                bg-gradient-to-br from-blue-400/20 to-purple-500/20
                backdrop-blur-md
                border border-white/20
                flex items-center justify-center
                relative overflow-hidden
              `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(wu,{size:20,className:"relative z-10 text-white"})]}),e.jsx("span",{className:"text-white font-bold text-lg hidden sm:block",children:"Wen's Project"})]})]}),e.jsx("div",{className:"hidden lg:flex items-center gap-2 flex-1 max-w-2xl",children:o.map((R,G)=>e.jsxs("button",{onClick:()=>z(R.label),className:`
                relative px-4 py-2 rounded-lg
                flex items-center gap-2
                backdrop-blur-md
                border border-white/10
                transition-all duration-300
                ${k===R.label?"bg-white/15 border-white/30":"bg-white/5 hover:bg-white/10"}
              `,children:[R.icon&&e.jsx("span",{className:"text-white/80",children:R.icon}),e.jsx("span",{className:"text-white text-sm font-medium",children:R.label}),R.badge&&e.jsx("span",{className:`
                  px-1.5 py-0.5 rounded-full
                  bg-gradient-to-r from-pink-500/80 to-purple-500/80
                  text-white text-xs font-bold
                  min-w-[20px] text-center
                `,children:R.badge})]},G))}),e.jsxs("div",{className:"flex items-center gap-3",children:[x&&e.jsxs("div",{className:`
              hidden md:flex items-center gap-2
              px-4 py-2 rounded-lg
              backdrop-blur-md bg-white/5
              border border-white/10
              focus-within:border-white/30
              transition-all duration-300
              min-w-[200px]
            `,children:[e.jsx(ut,{size:16,className:"text-white/40"}),e.jsx("input",{type:"text",placeholder:"Search...",value:b,onChange:R=>{_(R.target.value),h==null||h(R.target.value)},className:`
                  bg-transparent border-none outline-none
                  text-white placeholder-white/40
                  text-sm flex-1
                `})]}),m&&e.jsxs("button",{className:`
              relative p-2 rounded-lg
              backdrop-blur-md bg-white/5
              border border-white/10
              hover:bg-white/10
              transition-all duration-300
            `,children:[e.jsx(nn,{size:20,className:"text-white"}),j>0&&e.jsx("span",{className:`
                  absolute -top-1 -right-1
                  w-5 h-5 rounded-full
                  bg-gradient-to-r from-pink-500 to-purple-500
                  text-white text-xs
                  flex items-center justify-center
                  font-bold
                  animate-pulse
                `,children:j>9?"9+":j})]}),g&&e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>V(!$),className:`
                  flex items-center gap-2 px-3 py-2 rounded-lg
                  backdrop-blur-md bg-white/5
                  border border-white/10
                  hover:bg-white/10
                  transition-all duration-300
                `,children:[e.jsx("div",{className:`
                  w-7 h-7 rounded-full
                  bg-gradient-to-br from-blue-400 to-purple-500
                  flex items-center justify-center
                `,children:e.jsx(st,{size:16,className:"text-white"})}),e.jsx($s,{size:16,className:"text-white/60 hidden sm:block"})]}),$&&e.jsxs("div",{className:`
                  absolute right-0 top-full mt-2
                  w-48 rounded-xl
                  backdrop-blur-xl bg-black/85
                  border border-white/20
                  shadow-2xl
                  overflow-hidden
                  z-50
                `,children:[e.jsxs("div",{className:"p-3 border-b border-white/10",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"John Doe"}),e.jsx("p",{className:"text-white/60 text-xs",children:"john@example.com"})]}),e.jsxs("div",{className:"p-2",children:[e.jsxs("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                      flex items-center gap-2
                    `,children:[e.jsx(st,{size:16}),"Profile"]}),e.jsxs("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-white/80 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                      flex items-center gap-2
                    `,children:[e.jsx(fs,{size:16}),"Settings"]})]}),e.jsx("div",{className:"p-2 border-t border-white/10",children:e.jsx("button",{className:`
                      w-full px-3 py-2 rounded-lg
                      text-left text-pink-300 text-sm
                      hover:bg-white/10
                      transition-all duration-200
                    `,children:"Logout"})})]})]})]})]})})}function Kp({tabs:o,activeTab:d,onChange:c}){return e.jsx("div",{className:`
      inline-flex
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-2xl
      p-1
      gap-1
    `,children:o.map(h=>e.jsxs("button",{onClick:()=>c(h.value),className:`
            relative px-4 py-2 rounded-xl
            transition-all duration-300
            flex items-center gap-2
            ${d===h.value?"bg-white/20 text-white shadow-lg":"text-white/70 hover:text-white hover:bg-white/10"}
          `,children:[h.icon&&e.jsx("span",{className:"text-current",children:h.icon}),e.jsx("span",{children:h.label})]},h.value))})}function Xp({currentPage:o,totalPages:d,onPageChange:c,maxVisible:h=5,className:x=""}){const m=()=>{const g=[],j=Math.floor(h/2);let y=Math.max(1,o-j),b=Math.min(d,y+h-1);b-y+1<h&&(y=Math.max(1,b-h+1)),y>1&&(g.push(1),y>2&&g.push("..."));for(let _=y;_<=b;_++)g.push(_);return b<d&&(b<d-1&&g.push("..."),g.push(d)),g};return e.jsxs("div",{className:`flex items-center gap-2 ${x}`,children:[e.jsx("button",{onClick:()=>c(o-1),disabled:o===1,className:`
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-white/20
          transition-all duration-200
        `,children:e.jsx(yl,{size:20})}),m().map((g,j)=>e.jsx("div",{children:g==="..."?e.jsx("span",{className:"text-white/60 px-2",children:"..."}):e.jsx("button",{onClick:()=>c(g),className:`
                px-4 py-2 rounded-xl
                backdrop-blur-md backdrop-saturate-150
                border border-white/20
                transition-all duration-200
                ${o===g?"bg-white/20 text-white":"bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"}
              `,children:g})},j)),e.jsx("button",{onClick:()=>c(o+1),disabled:o===d,className:`
          p-2 rounded-xl
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-white/20
          transition-all duration-200
        `,children:e.jsx(Qt,{size:20})})]})}function Zp({steps:o,currentStep:d,orientation:c="horizontal",className:h=""}){return c==="vertical"?e.jsx("div",{className:`space-y-4 ${h}`,children:o.map((x,m)=>{const g=m+1,j=g<d,y=g===d;return e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:`
                  w-10 h-10 rounded-full
                  backdrop-blur-md backdrop-saturate-150
                  border-2
                  flex items-center justify-center
                  transition-all duration-300
                  ${j?"bg-green-500/30 border-green-400/50":y?"bg-blue-500/30 border-blue-400/50":"bg-white/10 border-white/20"}
                `,children:j?e.jsx(ps,{size:20,className:"text-white"}):e.jsx("span",{className:"text-white",children:g})}),m<o.length-1&&e.jsx("div",{className:`w-px h-12 mt-2 ${j?"bg-green-400/50":"bg-white/20"}`})]}),e.jsxs("div",{className:"flex-1 pb-8",children:[e.jsx("h4",{className:`${y?"text-white":"text-white/70"}`,children:x.label}),x.description&&e.jsx("p",{className:"text-white/60 text-sm mt-1",children:x.description})]})]},m)})}):e.jsx("div",{className:`flex items-center ${h}`,children:o.map((x,m)=>{const g=m+1,j=g<d,y=g===d;return e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:`
                w-10 h-10 rounded-full
                backdrop-blur-md backdrop-saturate-150
                border-2
                flex items-center justify-center
                transition-all duration-300
                ${j?"bg-green-500/30 border-green-400/50":y?"bg-blue-500/30 border-blue-400/50":"bg-white/10 border-white/20"}
              `,children:j?e.jsx(ps,{size:20,className:"text-white"}):e.jsx("span",{className:"text-white",children:g})}),e.jsx("div",{className:"text-center",children:e.jsx("p",{className:`text-sm ${y?"text-white":"text-white/70"}`,children:x.label})})]}),m<o.length-1&&e.jsx("div",{className:`
                flex-1 h-px mx-4 mb-8
                ${j?"bg-green-400/50":"bg-white/20"}
              `})]},m)})})}function cu({items:o=[{label:"Dashboard",icon:e.jsx(ju,{size:20}),href:"#dashboard",active:!0},{label:"Projects",icon:e.jsx(za,{size:20}),badge:3,children:[{label:"All Projects",icon:e.jsx(za,{size:16}),href:"#all"},{label:"Active",icon:e.jsx(Ye,{size:16}),href:"#active",badge:2},{label:"Archived",icon:e.jsx(Kn,{size:16}),href:"#archived"}]},{label:"Analytics",icon:e.jsx(Sa,{size:20}),href:"#analytics"},{label:"Team",icon:e.jsx(wl,{size:20}),badge:12,children:[{label:"Members",icon:e.jsx(wl,{size:16}),href:"#members"},{label:"Roles",icon:e.jsx(fs,{size:16}),href:"#roles"}]},{label:"Calendar",icon:e.jsx(Qn,{size:20}),href:"#calendar"},{label:"Messages",icon:e.jsx(pl,{size:20}),href:"#messages",badge:5},{label:"Shop",icon:e.jsx(Bm,{size:20}),href:"#shop"},{label:"Settings",icon:e.jsx(fs,{size:20}),href:"#settings"}],collapsed:d=!1,onToggle:c,className:h=""}){const[x,m]=I.useState(["Projects"]),[g,j]=I.useState("Dashboard"),y=b=>{x.includes(b)?m(x.filter(_=>_!==b)):m([...x,b])};return e.jsxs("aside",{className:`
      ${d?"w-20":"w-64"}
      backdrop-blur-xl backdrop-saturate-150
      bg-gradient-to-b from-white/10 to-white/5
      border-r border-white/20
      transition-all duration-300
      flex flex-col
      ${h}
    `,children:[e.jsx("div",{className:`
        p-6 border-b border-white/10
        ${d?"px-4":""}
      `,children:e.jsxs("div",{className:`flex items-center ${d?"justify-center":"gap-3"}`,children:[e.jsxs("div",{className:`
            w-10 h-10 
            rounded-xl
            bg-gradient-to-br from-blue-400/20 to-purple-500/20
            backdrop-blur-md
            border border-white/20
            flex items-center justify-center
            relative overflow-hidden
            flex-shrink-0
          `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(wu,{size:22,className:"relative z-10 text-white"})]}),!d&&e.jsxs("div",{children:[e.jsx("h1",{className:"text-white text-xl font-bold",children:"Wen's Project"}),e.jsx("p",{className:"text-white/50 text-xs",children:"Design System"})]})]})}),e.jsx("nav",{className:"flex-1 p-4 space-y-1 overflow-y-auto",children:o.map((b,_)=>e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>{b.children?y(b.label):j(b.label)},className:`
                w-full flex items-center justify-between
                px-3 py-2.5 rounded-lg
                transition-all duration-300
                group
                ${g===b.label||b.active?"bg-white/15 border border-white/30":"bg-white/5 border border-white/10 hover:bg-white/10"}
                ${d?"justify-center":""}
              `,title:d?b.label:void 0,children:[e.jsxs("div",{className:`flex items-center ${d?"":"gap-3"} flex-1`,children:[e.jsx("span",{className:`
                  text-white/80 group-hover:text-white transition-colors
                  ${d?"":"flex-shrink-0"}
                `,children:b.icon}),!d&&e.jsx("span",{className:"text-white text-sm font-medium flex-1 text-left",children:b.label})]}),!d&&e.jsxs("div",{className:"flex items-center gap-2",children:[b.badge&&e.jsx("span",{className:`
                      px-2 py-0.5 rounded-full
                      bg-gradient-to-r from-pink-500/80 to-purple-500/80
                      text-white text-xs font-bold
                      min-w-[20px] text-center
                    `,children:b.badge}),b.children&&e.jsx("span",{className:"text-white/60",children:x.includes(b.label)?e.jsx($s,{size:16}):e.jsx(Qt,{size:16})})]})]}),b.children&&x.includes(b.label)&&!d&&e.jsx("div",{className:"ml-6 mt-1 space-y-1 border-l border-white/10 pl-3",children:b.children.map((k,z)=>e.jsxs("button",{onClick:()=>j(k.label),className:`
                      w-full flex items-center justify-between
                      px-3 py-2 rounded-lg
                      transition-all duration-300
                      ${g===k.label?"bg-white/10 border border-white/20":"hover:bg-white/5"}
                    `,children:[e.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[e.jsx("span",{className:"text-white/60",children:k.icon}),e.jsx("span",{className:"text-white/80 text-sm",children:k.label})]}),k.badge&&e.jsx("span",{className:`
                        px-2 py-0.5 rounded-full
                        bg-gradient-to-r from-pink-500/60 to-purple-500/60
                        text-white text-xs font-bold
                      `,children:k.badge})]},z))})]},_))}),!d&&e.jsx("div",{className:"p-4 border-t border-white/10",children:e.jsxs("div",{className:`
            p-4 rounded-xl
            backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-purple-500/10
            border border-white/20
          `,children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx("div",{className:`
                w-8 h-8 rounded-full
                bg-gradient-to-br from-blue-400 to-purple-500
                flex items-center justify-center
              `,children:e.jsx(ef,{size:16,className:"text-white"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"John Doe"}),e.jsx("p",{className:"text-white/60 text-xs",children:"Admin"})]})]}),e.jsx("button",{className:`
              w-full px-3 py-1.5 rounded-lg
              bg-white/10 hover:bg-white/15
              border border-white/20
              text-white/80 text-xs
              transition-all duration-200
            `,children:"View Profile"})]})})]})}function ef({size:o,className:d}){return e.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:d,children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}function tf(){const[o,d]=I.useState("components"),[c,h]=I.useState(1),[x,m]=I.useState(2),[g,j]=I.useState(!1),y=[{label:"Components",value:"components",icon:e.jsx(bu,{size:16})},{label:"Styles",value:"styles",icon:e.jsx(Wn,{size:16})},{label:"Interactions",value:"interactions",icon:e.jsx(Mu,{size:16})}],b=[{label:"Select",description:"Choose your plan"},{label:"Configure",description:"Set preferences"},{label:"Review",description:"Check details"},{label:"Complete",description:"Finalize setup"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent",children:"Navigation Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Navigation bars, tabs, breadcrumbs, pagination and steppers"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Top Navigation Bar"}),e.jsx(C,{padding:"none",children:e.jsx(Jp,{})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Side Navigation"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Expanded"}),e.jsx(C,{padding:"none",className:"overflow-hidden",children:e.jsx("div",{className:"h-[600px]",children:e.jsx(cu,{collapsed:!1})})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-3",children:"Collapsed"}),e.jsx(C,{padding:"none",className:"overflow-hidden",children:e.jsx("div",{className:"h-[600px]",children:e.jsx(cu,{collapsed:!0})})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tabs"}),e.jsx(Kp,{tabs:y,activeTab:o,onChange:d})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Breadcrumb"}),e.jsx(qp,{items:[{label:"Home",href:"#home"},{label:"Components",href:"#components"},{label:"Navigation"}]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Pagination"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Xp,{currentPage:c,totalPages:10,onPageChange:h,maxVisible:5})})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Stepper"}),e.jsx(Zp,{steps:b,currentStep:x})]}),e.jsx(ce,{code:de.navigationSection})]})}function sf({columns:o,data:d,className:c="",striped:h=!1,hoverable:x=!0}){const[m,g]=I.useState(null),j=I.useMemo(()=>m?[...d].sort((_,k)=>{const z=_[m.key],$=k[m.key];return z<$?m.direction==="asc"?-1:1:z>$?m.direction==="asc"?1:-1:0}):d,[d,m]),y=_=>{g(k=>!k||k.key!==_?{key:_,direction:"asc"}:k.direction==="asc"?{key:_,direction:"desc"}:null)},b=_=>!m||m.key!==_?e.jsx(ka,{size:16,className:"text-white/40"}):m.direction==="asc"?e.jsx(qx,{size:16,className:"text-white"}):e.jsx(Wx,{size:16,className:"text-white"});return e.jsx("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      rounded-3xl
      overflow-hidden
      ${c}
    `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsx("tr",{className:"border-b border-white/20",children:o.map(_=>e.jsx("th",{className:"px-6 py-4 text-left text-white",children:_.sortable?e.jsxs("button",{onClick:()=>y(_.key),className:`
                        flex items-center gap-2
                        hover:text-white/80
                        transition-colors duration-200
                      `,children:[_.header,b(_.key)]}):_.header},_.key))})}),e.jsx("tbody",{children:j.map((_,k)=>e.jsx("tr",{className:`
                  border-b border-white/10 last:border-0
                  ${h&&k%2===1?"bg-white/5":""}
                  ${x?"hover:bg-white/10":""}
                  transition-colors duration-200
                `,children:o.map(z=>e.jsx("td",{className:"px-6 py-4 text-white/80",children:z.render?z.render(_[z.key],_):_[z.key]},z.key))},k))})]})})})}function $t({children:o,variant:d="default",size:c="md",className:h=""}){const x=`
    inline-flex items-center justify-center
    rounded-full
    backdrop-blur-md backdrop-saturate-150
    border border-white/20
    transition-all duration-200
  `,m={default:"bg-white/10 text-white/90",primary:"bg-blue-500/20 text-blue-100 border-blue-400/30",success:"bg-green-500/20 text-green-100 border-green-400/30",warning:"bg-amber-500/20 text-amber-100 border-amber-400/30",danger:"bg-red-500/20 text-red-100 border-red-400/30"},g={sm:"px-2 py-0.5 text-xs",md:"px-3 py-1 text-sm",lg:"px-4 py-1.5 text-base"};return e.jsx("span",{className:`${x} ${m[d]} ${g[c]} ${h}`,children:o})}function Hn({src:o,alt:d,size:c="md",fallback:h,className:x=""}){const[m,g]=I.useState(!1),j={sm:"w-8 h-8 text-xs",md:"w-12 h-12 text-sm",lg:"w-16 h-16 text-base",xl:"w-24 h-24 text-xl"};return e.jsx("div",{className:`
      ${j[c]} rounded-full
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/20
      overflow-hidden
      flex items-center justify-center
      ${x}
    `,children:o&&!m?e.jsx("img",{src:o,alt:d,className:"w-full h-full object-cover",onError:()=>g(!0)}):h?e.jsx("span",{className:"text-white uppercase",children:h.slice(0,2)}):e.jsx(st,{className:"text-white/60",size:c==="sm"?16:c==="md"?20:c==="lg"?24:32})})}function nf({avatars:o,max:d=5,size:c="md"}){const h=o.slice(0,d),x=o.length-d;return e.jsxs("div",{className:"flex -space-x-3",children:[h.map((m,g)=>e.jsx(Hn,{...m,size:c,className:"ring-2 ring-white/10"},g)),x>0&&e.jsxs("div",{className:`
          ${c==="sm"?"w-8 h-8 text-xs":c==="md"?"w-12 h-12 text-sm":c==="lg"?"w-16 h-16 text-base":"w-24 h-24 text-xl"}
          rounded-full
          backdrop-blur-md backdrop-saturate-150
          bg-white/20
          border border-white/20
          ring-2 ring-white/10
          flex items-center justify-center
          text-white
        `,children:["+",x]})]})}function hl({label:o,onDelete:d,icon:c,variant:h="default",className:x=""}){const m={default:"bg-white/10 text-white/90 border-white/20",primary:"bg-blue-500/20 text-blue-100 border-blue-400/30",success:"bg-green-500/20 text-green-100 border-green-400/30",warning:"bg-amber-500/20 text-amber-100 border-amber-400/30",danger:"bg-red-500/20 text-red-100 border-red-400/30"};return e.jsxs("div",{className:`
      inline-flex items-center gap-2
      px-3 py-1.5
      rounded-full
      backdrop-blur-md backdrop-saturate-150
      border
      ${m[h]}
      transition-all duration-200
      ${x}
    `,children:[c&&e.jsx("span",{children:c}),e.jsx("span",{className:"text-sm",children:o}),d&&e.jsx("button",{onClick:d,className:`
            hover:bg-white/10 rounded-full p-0.5
            transition-colors duration-200
          `,children:e.jsx(Rt,{size:14})})]})}function rf(){const o=[{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",render:h=>e.jsx($t,{variant:h==="Active"?"success":"warning",children:h})}],d=[{name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{name:"Bob Johnson",email:"bob@example.com",role:"Editor",status:"Inactive"},{name:"Alice Williams",email:"alice@example.com",role:"User",status:"Active"}],c=[{fallback:"AB"},{fallback:"CD"},{fallback:"EF"},{fallback:"GH"},{fallback:"IJ"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent",children:"Data Display"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Tables, badges, avatars and chips"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Data Table"}),e.jsx(sf,{columns:o,data:d,striped:!0,hoverable:!0})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Badges"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx($t,{variant:"primary",children:"Primary"}),e.jsx($t,{variant:"success",children:"Success"}),e.jsx($t,{variant:"warning",children:"Warning"}),e.jsx($t,{variant:"danger",children:"Danger"}),e.jsx($t,{variant:"info",children:"Info"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Avatars"}),e.jsxs("div",{className:"flex items-center gap-6 flex-wrap",children:[e.jsx(Hn,{fallback:"JD",size:"sm"}),e.jsx(Hn,{fallback:"JD",size:"md"}),e.jsx(Hn,{fallback:"JD",size:"lg"}),e.jsx(Hn,{fallback:"JD",size:"xl"}),e.jsx(nf,{avatars:c,max:3,size:"md"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Chips"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(hl,{label:"Design",variant:"primary",icon:e.jsx(Wn,{size:14})}),e.jsx(hl,{label:"Development",variant:"success",icon:e.jsx(bu,{size:14})}),e.jsx(hl,{label:"Marketing",variant:"warning"}),e.jsx(hl,{label:"Removable",variant:"danger",onDelete:()=>{}})]})]}),e.jsx(ce,{code:de.dataSection})]})}function lf({value:o,onChange:d,placeholder:c="Search...",onSearch:h,suggestions:x=[],className:m=""}){const[g,j]=I.useState(!1),[y,b]=I.useState(!1),_=x.filter($=>$.toLowerCase().includes(o.toLowerCase())),k=$=>{$.preventDefault(),h==null||h(o),b(!1)},z=()=>{d(""),b(!1)};return e.jsxs("div",{className:`relative ${m}`,children:[e.jsx("form",{onSubmit:k,children:e.jsxs("div",{className:`
          relative
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border border-white/20
          rounded-2xl
          transition-all duration-300
          ${g?"bg-white/15 border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]":""}
        `,children:[e.jsx(ut,{size:20,className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none"}),e.jsx("input",{type:"text",value:o,onChange:$=>{d($.target.value),b(!0)},onFocus:()=>{j(!0),b(!0)},onBlur:()=>{j(!1),setTimeout(()=>b(!1),200)},placeholder:c,className:`
              w-full px-12 py-3
              bg-transparent
              text-white placeholder:text-white/50
              outline-none
            `}),o&&e.jsx("button",{type:"button",onClick:z,className:`
                absolute right-4 top-1/2 -translate-y-1/2
                text-white/60 hover:text-white
                transition-colors duration-200
              `,children:e.jsx(Rt,{size:20})})]})}),y&&_.length>0&&e.jsx("div",{className:`
          absolute top-full left-0 right-0 mt-2 z-20
          backdrop-blur-xl backdrop-saturate-150
          bg-black/85
          border border-white/20
          rounded-2xl
          overflow-hidden
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          max-h-60 overflow-y-auto
        `,children:_.map(($,V)=>e.jsx("button",{onClick:()=>{d($),b(!1),h==null||h($)},className:`
                w-full px-4 py-3 text-left
                text-white/90
                hover:bg-white/10
                transition-colors duration-150
              `,children:$},V))})]})}function af({addToast:o}){const[d,c]=I.useState(""),[h,x]=I.useState("");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent",children:"Search Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Search inputs with glass morphism effects"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Glass Search Component"}),e.jsx(lf,{value:d,onChange:c,placeholder:"Search components, docs, examples...",onSearch:m=>o("info",`Searching for: ${m}`)})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Search Input Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx(ut,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search files...",value:h,onChange:m=>x(m.target.value),className:`
                w-full pl-12 pr-4 py-3
                bg-white/10
                border border-white/20
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-blue-400/50
                transition-colors
              `})]}),e.jsxs("div",{className:"relative",children:[e.jsx(ut,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search users...",className:`
                w-full pl-12 pr-4 py-3
                bg-white/10
                border border-white/20
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-green-400/50
                transition-colors
              `})]}),e.jsxs("div",{className:"relative",children:[e.jsx(ut,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search products...",className:`
                w-full pl-12 pr-4 py-3
                bg-white/10
                border border-white/20
                rounded-xl
                text-white placeholder-white/40
                focus:outline-none focus:border-purple-400/50
                transition-colors
              `})]})]})]}),e.jsx(ce,{code:de.searchSection})]})}function of({addToast:o}){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent",children:"Button Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful glass buttons in various styles and sizes"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Button Variants"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",children:"Primary"}),e.jsx(X,{variant:"secondary",children:"Secondary"}),e.jsx(X,{variant:"accent",children:"Accent"}),e.jsx(X,{variant:"success",children:"Success"}),e.jsx(X,{variant:"ghost",children:"Ghost"}),e.jsx(X,{variant:"danger",children:"Danger"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Button Sizes"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(X,{variant:"primary",size:"sm",children:"Small"}),e.jsx(X,{variant:"primary",size:"md",children:"Medium"}),e.jsx(X,{variant:"primary",size:"lg",children:"Large"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Buttons with Icons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs(X,{variant:"primary",children:[e.jsx(Kn,{size:20,className:"mr-2"}),"Like"]}),e.jsxs(X,{variant:"secondary",children:[e.jsx(qn,{size:20,className:"mr-2"}),"Download"]}),e.jsxs(X,{variant:"accent",children:[e.jsx(vl,{size:20,className:"mr-2"}),"Share"]}),e.jsxs(X,{variant:"success",children:[e.jsx(Ta,{size:20,className:"mr-2"}),"Add New"]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Icon-Only Buttons"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(Fa,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(fs,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(Ra,{size:18})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(vl,{size:18})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Disabled State"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",disabled:!0,children:"Disabled Primary"}),e.jsx(X,{variant:"secondary",disabled:!0,children:"Disabled Secondary"}),e.jsx(X,{variant:"success",disabled:!0,children:"Disabled Success"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Interactive Examples"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",onClick:()=>o("success","Button clicked!"),children:"Click Me"}),e.jsx(X,{variant:"success",onClick:()=>o("success","Action completed!"),children:"Submit"}),e.jsx(X,{variant:"danger",onClick:()=>o("error","Delete action triggered"),children:"Delete"})]})]}),e.jsx(ce,{code:de.buttonSection})]})}function Wt({children:o,content:d,position:c="top"}){const[h,x]=I.useState(!1),m={top:"bottom-full left-1/2 -translate-x-1/2 mb-2",bottom:"top-full left-1/2 -translate-x-1/2 mt-2",left:"right-full top-1/2 -translate-y-1/2 mr-2",right:"left-full top-1/2 -translate-y-1/2 ml-2"};return e.jsxs("div",{className:"relative inline-block",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[o,h&&e.jsx("div",{className:`
          absolute z-50 ${m[c]}
          px-3 py-2 rounded-xl
          backdrop-blur-xl backdrop-saturate-150
          bg-black/85
          border border-white/20
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          text-white text-sm whitespace-nowrap
          animate-in fade-in zoom-in-95 duration-200
          pointer-events-none
        `,children:d})]})}function du({items:o,trigger:d,position:c="bottom-left",className:h=""}){const[x,m]=I.useState(!1),g={"bottom-left":"top-full left-0 mt-2","bottom-right":"top-full right-0 mt-2","top-left":"bottom-full left-0 mb-2","top-right":"bottom-full right-0 mb-2"};return e.jsxs("div",{className:`relative ${h}`,children:[e.jsx("div",{onClick:()=>m(!x),children:d}),x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-[100]",onClick:()=>m(!1)}),e.jsx("div",{className:`
            absolute z-[101] ${g[c]}
            min-w-[200px]
            backdrop-blur-xl backdrop-saturate-150
            bg-black/85
            border border-white/20
            rounded-2xl
            overflow-hidden
            shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
            animate-in fade-in slide-in-from-top-2 duration-200
          `,children:o.map((j,y)=>e.jsx("div",{children:j.divider?e.jsx("div",{className:"h-px bg-white/20 my-2"}):e.jsxs("button",{onClick:()=>{var b;j.disabled||((b=j.onClick)==null||b.call(j),m(!1))},disabled:j.disabled,className:`
                      w-full px-4 py-3 text-left
                      flex items-center gap-3
                      transition-colors duration-150
                      ${j.disabled?"text-white/40 cursor-not-allowed":"text-white/90 hover:bg-white/10 hover:text-white"}
                    `,children:[j.icon&&e.jsx("span",{children:j.icon}),e.jsx("span",{children:j.label})]})},y))})]})]})}function cf({addToast:o}){const d=[{label:"Edit",icon:e.jsx(Fa,{size:16}),onClick:()=>o("info","Edit clicked")},{label:"Share",icon:e.jsx(vl,{size:16}),onClick:()=>o("info","Share clicked")},{label:"Download",icon:e.jsx(qn,{size:16}),onClick:()=>o("success","Download started")},{divider:!0},{label:"Delete",icon:e.jsx(Ra,{size:16}),onClick:()=>o("error","Item deleted")}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent",children:"Popover & Tooltip"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Tooltips and contextual popover menus"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Tooltip Positions"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Hover over the buttons below to see tooltips"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 py-8",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(Wt,{content:"Tooltip on top",position:"top",children:e.jsx(X,{variant:"primary",children:"Top"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Wt,{content:"Tooltip on right",position:"right",children:e.jsx(X,{variant:"primary",children:"Right"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Wt,{content:"Tooltip on bottom",position:"bottom",children:e.jsx(X,{variant:"primary",children:"Bottom"})})}),e.jsx("div",{className:"flex justify-center",children:e.jsx(Wt,{content:"Tooltip on left",position:"left",children:e.jsx(X,{variant:"primary",children:"Left"})})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tooltip Examples"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(Wt,{content:"Save your changes",children:e.jsx(X,{variant:"success",children:"Save"})}),e.jsx(Wt,{content:"Cancel current operation",children:e.jsx(X,{variant:"ghost",children:"Cancel"})}),e.jsx(Wt,{content:"Delete this item permanently",children:e.jsx(X,{variant:"danger",children:"Delete"})}),e.jsx(Wt,{content:"Download as PDF",children:e.jsx(X,{variant:"secondary",children:e.jsx(qn,{size:20})})})]})]}),e.jsxs(C,{padding:"lg",className:"relative z-0 pb-[253px]",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Popover Menu"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click the buttons below to open popover menus"}),e.jsxs("div",{className:"flex gap-4 relative z-auto",children:[e.jsx(du,{trigger:e.jsx(X,{variant:"primary",children:"Actions Menu"}),items:d}),e.jsx(du,{trigger:e.jsx(X,{variant:"ghost",children:e.jsx(vu,{size:20})}),items:d})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Tooltip with Long Text"}),e.jsx(Wt,{content:"This is a longer tooltip message that provides more detailed information about the action that will be performed when you click this button.",children:e.jsx(X,{variant:"accent",children:"Hover for Long Tooltip"})})]}),e.jsx(ce,{code:de.tooltipSection})]})}function df(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent",children:"Grid Layout"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Responsive grid system for layouts"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"2 Column Grid"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 1"}),e.jsx("p",{className:"text-white/70",children:"Content in first column"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 2"}),e.jsx("p",{className:"text-white/70",children:"Content in second column"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"3 Column Grid"}),e.jsxs("div",{className:"grid grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 1"}),e.jsx("p",{className:"text-white/70",children:"First column content"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 2"}),e.jsx("p",{className:"text-white/70",children:"Second column content"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Column 3"}),e.jsx("p",{className:"text-white/70",children:"Third column content"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"4 Column Grid"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:[1,2,3,4,5,6,7,8].map(o=>e.jsx(C,{padding:"md",children:e.jsx("h4",{className:"text-white text-lg text-center",children:o})},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Responsive Grid (Auto-fit)"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[1,2,3,4,5,6,7,8].map(o=>e.jsx(C,{padding:"lg",variant:"gradient",children:e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-white text-3xl font-bold mb-2",children:o}),e.jsx("p",{className:"text-white/70",children:"Responsive Card"})]})},o))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsx(ce,{code:de.gridSection})]})]})}function uf({value:o,onChange:d,className:c=""}){const[h,x]=I.useState(o||new Date),[m,g]=I.useState(o||new Date),j=new Date(h.getFullYear(),h.getMonth()+1,0).getDate(),y=new Date(h.getFullYear(),h.getMonth(),1).getDay(),b=["January","February","March","April","May","June","July","August","September","October","November","December"],_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],k=()=>{x(new Date(h.getFullYear(),h.getMonth()-1))},z=()=>{x(new Date(h.getFullYear(),h.getMonth()+1))},$=G=>{const Z=new Date(h.getFullYear(),h.getMonth(),G);g(Z),d==null||d(Z)},V=G=>{const Z=new Date;return G===Z.getDate()&&h.getMonth()===Z.getMonth()&&h.getFullYear()===Z.getFullYear()},R=G=>G===m.getDate()&&h.getMonth()===m.getMonth()&&h.getFullYear()===m.getFullYear();return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-white/10
      border border-white/15
      rounded-3xl
      p-6
      ${c}
    `,children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsx("button",{onClick:k,className:`
            p-2 rounded-xl
            hover:bg-white/10
            transition-colors duration-200
            text-white
          `,children:e.jsx(yl,{size:20})}),e.jsxs("h3",{className:"text-white",children:[b[h.getMonth()]," ",h.getFullYear()]}),e.jsx("button",{onClick:z,className:`
            p-2 rounded-xl
            hover:bg-white/10
            transition-colors duration-200
            text-white
          `,children:e.jsx(Qt,{size:20})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:_.map(G=>e.jsx("div",{className:"text-center text-white/60 text-sm py-2",children:G},G))}),e.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[Array.from({length:y},(G,Z)=>e.jsx("div",{},`empty-${Z}`)),Array.from({length:j},(G,Z)=>{const J=Z+1;return e.jsx("button",{onClick:()=>$(J),className:`
                aspect-square rounded-xl
                flex items-center justify-center
                text-sm transition-all duration-200
                ${R(J)?"bg-blue-500/30 text-white border-2 border-blue-400/50":V(J)?"bg-white/20 text-white":"text-white/80 hover:bg-white/10 hover:text-white"}
              `,children:J},J)})]})]})}function hf({addToast:o}){const[d,c]=I.useState(new Date);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent",children:"Calendar Component"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful glass calendar for date selection"})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Interactive Calendar"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click on a date to select it"}),e.jsx(uf,{value:d,onChange:h=>{c(h),o("success",`Selected: ${h.toLocaleDateString()}`)}})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Selected Date"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Selected Date:"}),e.jsx("p",{className:"text-white text-2xl font-bold",children:d.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Day of Week:"}),e.jsx("p",{className:"text-white text-xl",children:d.toLocaleDateString("en-US",{weekday:"long"})})]}),e.jsxs("div",{className:"p-6 rounded-xl bg-white/5 border border-white/10",children:[e.jsx("p",{className:"text-white/60 text-sm mb-2",children:"Month:"}),e.jsx("p",{className:"text-white text-xl",children:d.toLocaleDateString("en-US",{month:"long",year:"numeric"})})]})]})]})]}),e.jsx("div",{className:"mt-12",children:e.jsx(ce,{code:de.calendarSection})})]})}function xl({title:o,value:d,change:c,icon:h,variant:x="default",className:m=""}){const g={default:"from-white/10 to-white/5",primary:"from-blue-500/20 to-purple-500/10",success:"from-green-500/20 to-teal-500/10",warning:"from-amber-500/20 to-orange-500/10"};return e.jsxs("div",{className:`
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-br ${g[x]}
      border border-white/20
      rounded-3xl
      p-6
      ${m}
    `,children:[e.jsxs("div",{className:"flex items-start justify-between mb-4",children:[e.jsx("p",{className:"text-white/70 text-sm",children:o}),h&&e.jsx("div",{className:"p-2 rounded-xl bg-white/10",children:h})]}),e.jsxs("div",{className:"flex items-end justify-between",children:[e.jsx("h3",{className:"text-3xl text-white",children:d}),c!==void 0&&e.jsxs("div",{className:`
            flex items-center gap-1 text-sm
            ${c>=0?"text-green-300":"text-red-300"}
          `,children:[c>=0?e.jsx(ap,{size:16}):e.jsx(lp,{size:16}),e.jsxs("span",{children:[Math.abs(c),"%"]})]})]})]})}function xf(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent",children:"Card Components"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Various card styles and layouts"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Card Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{variant:"default",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Default Card"}),e.jsx("p",{className:"text-white/70",children:"Simple glass card with default styling"})]}),e.jsxs(C,{variant:"gradient",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Gradient Card"}),e.jsx("p",{className:"text-white/70",children:"Card with beautiful gradient background"})]}),e.jsxs(C,{variant:"border",padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-2",children:"Border Card"}),e.jsx("p",{className:"text-white/70",children:"Card with emphasized border"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Stat Cards"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx(xl,{title:"Total Users",value:"12,345",change:12.5,icon:e.jsx(wl,{className:"text-blue-300",size:24}),variant:"primary"}),e.jsx(xl,{title:"Revenue",value:"$45,678",change:8.2,icon:e.jsx(C0,{className:"text-green-300",size:24}),variant:"success"}),e.jsx(xl,{title:"Activity",value:"89%",change:-3.1,icon:e.jsx(Ax,{className:"text-amber-300",size:24}),variant:"warning"}),e.jsx(xl,{title:"Projects",value:"156",change:15.3,icon:e.jsx(Tm,{className:"text-purple-300",size:24})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Content Cards"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl mb-4"}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx($t,{variant:"primary",children:"Technology"}),e.jsx($t,{variant:"success",children:"New"})]}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Liquid Glass Design"}),e.jsx("p",{className:"text-white/70 mb-4",children:"A modern design system featuring glassmorphism effects and beautiful UI components."}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(Kn,{size:16})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(vl,{size:16})}),e.jsx(X,{variant:"ghost",size:"sm",children:e.jsx(r0,{size:16})})]})]}),e.jsxs(C,{padding:"lg",variant:"gradient",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-xl mb-4"}),e.jsx("div",{className:"flex items-center gap-2 mb-3",children:e.jsx($t,{variant:"warning",children:"Design"})}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Beautiful Components"}),e.jsx("p",{className:"text-white/70 mb-4",children:"50+ carefully crafted components for your next project."}),e.jsx(X,{variant:"primary",className:"w-full",children:"Learn More"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("div",{className:"aspect-video bg-gradient-to-br from-teal-500/30 to-green-500/30 rounded-xl mb-4"}),e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx($t,{variant:"success",children:"Featured"}),e.jsx($t,{variant:"info",children:"Popular"})]}),e.jsx("h4",{className:"text-white text-xl mb-2",children:"Premium Quality"}),e.jsx("p",{className:"text-white/70 mb-4",children:"Production-ready components with TypeScript support."}),e.jsx(X,{variant:"success",className:"w-full",children:"Get Started"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Card Padding Sizes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs(C,{padding:"sm",children:[e.jsx("h4",{className:"text-white text-lg",children:"Small Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Compact card design"})]}),e.jsxs(C,{padding:"md",children:[e.jsx("h4",{className:"text-white text-lg",children:"Medium Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Default card spacing"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-lg",children:"Large Padding"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Spacious card layout"})]})]})]}),e.jsx(ce,{code:de.cardsSection})]})}function ya({isOpen:o,onClose:d,title:c,children:h,size:x="md"}){if(!o)return null;const m={sm:"max-w-md",md:"max-w-2xl",lg:"max-w-4xl"};return e.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/40 backdrop-blur-sm",onClick:d}),e.jsxs("div",{className:`
        relative w-full ${m[x]}
        backdrop-blur-xl backdrop-saturate-150
        bg-black/85
        border border-white/20
        rounded-3xl
        shadow-[0_16px_48px_0_rgba(0,0,0,0.2)]
        overflow-hidden
        animate-in fade-in zoom-in-95 duration-200
      `,children:[c&&e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-white/20",children:[e.jsx("h3",{className:"text-xl text-white",children:c}),e.jsx("button",{onClick:d,className:`
                text-white/70 hover:text-white
                transition-colors duration-200
                p-2 rounded-xl
                hover:bg-white/10
              `,children:e.jsx(Rt,{size:20})})]}),e.jsx("div",{className:"p-6",children:h})]})]})}function mf(){const[o,d]=I.useState(!1),[c,h]=I.useState(!1),[x,m]=I.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent",children:"Modal & Drawer"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Overlay components for dialogs and side panels"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-2",children:"Modal Sizes"}),e.jsx("p",{className:"text-white/60 text-sm mb-6",children:"🖱️ Click the buttons below to open modals in different sizes"}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(X,{variant:"primary",onClick:()=>m(!0),children:"Small Modal"}),e.jsx(X,{variant:"primary",onClick:()=>d(!0),children:"Medium Modal"}),e.jsx(X,{variant:"primary",onClick:()=>h(!0),children:"Large Modal"})]})]}),e.jsxs(ya,{isOpen:x,onClose:()=>m(!1),title:"Small Modal",size:"sm",children:[e.jsx("p",{className:"text-white/90 mb-4",children:"This is a small modal with limited width."}),e.jsx(X,{variant:"primary",onClick:()=>m(!1),children:"Close"})]}),e.jsx(ya,{isOpen:o,onClose:()=>d(!1),title:"Welcome to Liquid Glass",size:"md",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-white/90",children:"This is a medium-sized modal component with glassmorphism effects."}),e.jsxs("ul",{className:"space-y-2 text-white/70",children:[e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(Kn,{size:16,className:"text-pink-400"}),e.jsx("span",{children:"Elegant glassmorphism effects"})]}),e.jsxs("li",{className:"flex items-center gap-2",children:[e.jsx(fs,{size:16,className:"text-blue-400"}),e.jsx("span",{children:"Smooth animation transitions"})]})]}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(X,{variant:"primary",onClick:()=>d(!1),children:"Confirm"}),e.jsx(X,{variant:"ghost",onClick:()=>d(!1),children:"Cancel"})]})]})}),e.jsx(ya,{isOpen:c,onClose:()=>h(!1),title:"Contact Form",size:"lg",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-white/70 mb-4",children:"Fill out this form to get in touch with us."}),e.jsx(Yt,{placeholder:"Your name"}),e.jsx(Yt,{type:"email",placeholder:"Your email"}),e.jsx(Yt,{placeholder:"Subject"}),e.jsx("textarea",{className:`
              w-full px-4 py-3 rounded-xl
              backdrop-blur-md backdrop-saturate-150
              bg-white/10
              border border-white/20
              text-white placeholder-white/50
              focus:outline-none focus:ring-2 focus:ring-white/30
              transition-all duration-200
            `,rows:4,placeholder:"Your message..."}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(X,{variant:"primary",children:"Send Message"}),e.jsx(X,{variant:"ghost",onClick:()=>h(!1),children:"Cancel"})]})]})}),e.jsx(ce,{title:"Modal Sizes",code:de.modalSizes}),e.jsx(ce,{title:"Small Modal",code:de.smallModal}),e.jsx(ce,{title:"Basic Modal",code:de.basicModal}),e.jsx(ce,{title:"Large Modal with Form",code:de.largeModalWithForm})]})}function ml({variant:o,title:d,message:c,onClose:h,className:x=""}){const g={info:{icon:Jn,color:"from-blue-400/20 to-cyan-400/20",borderColor:"border-blue-400/30",iconColor:"text-blue-300"},success:{icon:Pa,color:"from-green-400/20 to-teal-400/20",borderColor:"border-green-400/30",iconColor:"text-green-300"},warning:{icon:fu,color:"from-amber-400/20 to-orange-400/20",borderColor:"border-amber-400/30",iconColor:"text-amber-300"},error:{icon:gu,color:"from-red-400/20 to-pink-400/20",borderColor:"border-red-400/30",iconColor:"text-red-300"}}[o],j=g.icon;return e.jsx("div",{className:`
      relative rounded-2xl
      backdrop-blur-md backdrop-saturate-150
      bg-gradient-to-r ${g.color}
      border ${g.borderColor}
      p-4
      ${x}
    `,children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx(j,{className:`${g.iconColor} flex-shrink-0 mt-0.5`,size:20}),e.jsxs("div",{className:"flex-1 min-w-0",children:[d&&e.jsx("h4",{className:"text-white mb-1",children:d}),e.jsx("p",{className:"text-white/90 text-sm",children:c})]}),h&&e.jsx("button",{onClick:h,className:"text-white/60 hover:text-white transition-colors p-1",children:e.jsx(Rt,{size:18})})]})})}function pf({addToast:o}){const[d,c]=I.useState(!0),[h,x]=I.useState(!0);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent",children:"Messages & Alerts"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Alert messages and toast notifications"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Alert Variants"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(ml,{variant:"info",title:"Information",message:"This is an informational alert with glass effect."}),e.jsx(ml,{variant:"success",title:"Success",message:"Your changes have been saved successfully!"}),e.jsx(ml,{variant:"warning",title:"Warning",message:"Please review your settings before continuing."}),e.jsx(ml,{variant:"error",title:"Error",message:"An error occurred while processing your request."})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Inline Alerts"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10
            border border-blue-400/30
            rounded-xl p-4
            flex items-start gap-3
          `,children:[e.jsx(Jn,{className:"text-blue-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"Simple info message without title."})})]}),e.jsxs("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-green-600/10
            border border-green-400/30
            rounded-xl p-4
            flex items-start gap-3
          `,children:[e.jsx(Pa,{className:"text-green-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"Operation completed successfully!"})})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Dismissible Alerts"}),e.jsxs("div",{className:"space-y-4",children:[d&&e.jsxs("div",{className:`
              backdrop-blur-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10
              border border-yellow-400/30
              rounded-xl p-4
              flex items-start gap-3
            `,children:[e.jsx(Su,{className:"text-yellow-300 flex-shrink-0 mt-0.5",size:20}),e.jsx("div",{className:"flex-1",children:e.jsx("p",{className:"text-white",children:"This alert can be dismissed."})}),e.jsx("button",{onClick:()=>c(!1),className:"text-white/60 hover:text-white transition-colors",children:e.jsx(Rt,{size:18})})]}),h&&e.jsxs("div",{className:`
              backdrop-blur-xl bg-gradient-to-br from-red-500/20 to-red-600/10
              border border-red-400/30
              rounded-xl p-4
              flex items-start gap-3
            `,children:[e.jsx(gu,{className:"text-red-300 flex-shrink-0 mt-0.5",size:20}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"text-white font-bold mb-1",children:"Closable Error"}),e.jsx("p",{className:"text-white/80",children:"Click the X to close this alert."})]}),e.jsx("button",{onClick:()=>x(!1),className:"text-white/60 hover:text-white transition-colors",children:e.jsx(Rt,{size:18})})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Toast Notifications"}),e.jsx("p",{className:"text-white/70 mb-6",children:"Click the buttons to trigger different toast notifications"}),e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(X,{variant:"success",onClick:()=>o("success","Operation completed successfully!",{title:"Success",duration:5e3}),children:"Success Toast"}),e.jsx(X,{variant:"secondary",onClick:()=>o("error","Something went wrong. Please try again.",{title:"Error",duration:5e3}),children:"Error Toast"}),e.jsx(X,{variant:"accent",onClick:()=>o("warning","Please review your changes before proceeding.",{title:"Warning",duration:5e3}),children:"Warning Toast"}),e.jsx(X,{variant:"primary",onClick:()=>o("info","New updates are available for your account.",{title:"Information",duration:5e3}),children:"Info Toast"})]})]}),e.jsxs(C,{padding:"lg",variant:"gradient",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Message Best Practices"}),e.jsxs("ul",{className:"space-y-3 text-white/80",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-300 mt-1",children:"✓"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"success"})," alerts for positive confirmations"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-300 mt-1",children:"ℹ"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"info"})," alerts for neutral information"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-yellow-300 mt-1",children:"⚠"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"warning"})," alerts for important notices"]})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-300 mt-1",children:"✕"}),e.jsxs("span",{children:["Use ",e.jsx("strong",{children:"error"})," alerts for critical issues"]})]})]})]}),e.jsx(ce,{code:de.messageSection})]})}function ff({addToast:o}){const[d,c]=he.useState(!1),[h,x]=he.useState(!1),[m,g]=he.useState(null);he.useEffect(()=>{c(!0)},[]);const[j,y]=he.useState(1),[b,_]=he.useState({x:0,y:0}),[k,z]=he.useState(!1),[$,V]=he.useState({x:0,y:0}),R=he.useRef(null),G=`
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
      33% { transform: translate(30px, -50px) scale(1.1) rotate(10deg); }
      66% { transform: translate(-20px, 20px) scale(0.9) rotate(-10deg); }
      100% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
    }
    .animate-blob {
      animation: blob 15s infinite alternate;
    }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }

    /* 液态玻璃核心属性 */
    .glass-panel {
      background: linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 8px 32px 0 rgba(0,0,0,0.4), inset 0 1px 0 0 rgba(255,255,255,0.2);
    }
    
    .glass-panel-hover:hover {
      background: linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%);
      border: 1px solid rgba(255,255,255,0.2);
    }

    /* SVG 地图遮罩，制造液态渐变底图 */
    .map-mask {
      -webkit-mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      mask-image: url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg');
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
      background: radial-gradient(circle at center, rgba(6, 182, 212, 0.5) 0%, rgba(59, 130, 246, 0.2) 60%, rgba(168, 85, 247, 0.3) 100%);
    }

    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    .animate-float {
      animation: float 8s ease-in-out infinite;
    }

    @keyframes pulse-marker {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.2); opacity: 0.7; }
    }
    .animate-pulse-marker {
      animation: pulse-marker 2s ease-in-out infinite;
    }

    @keyframes ripple {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(2.5); opacity: 0; }
    }
    .animate-ripple {
      animation: ripple 2s ease-out infinite;
    }
  `,Z=[{id:1,name:"New York",left:"74%",top:"35%",color:"rgba(59, 130, 246, 0.9)"},{id:2,name:"London",left:"49.5%",top:"30%",color:"rgba(168, 85, 247, 0.9)"},{id:3,name:"Tokyo",left:"87%",top:"40%",color:"rgba(236, 72, 153, 0.9)"},{id:4,name:"Sydney",left:"90%",top:"68%",color:"rgba(34, 197, 94, 0.9)"},{id:5,name:"Dubai",left:"58%",top:"43%",color:"rgba(251, 146, 60, 0.9)"},{id:6,name:"São Paulo",left:"28%",top:"60%",color:"rgba(6, 182, 212, 0.9)"}],J=[{id:1,left:"75%",top:"36%",intensity:.9},{id:2,left:"50%",top:"31%",intensity:.8},{id:3,left:"87%",top:"41%",intensity:1},{id:4,left:"58%",top:"44%",intensity:.7},{id:5,left:"28%",top:"61%",intensity:.6},{id:6,left:"90%",top:"69%",intensity:.75},{id:7,left:"15%",top:"38%",intensity:.65},{id:8,left:"80%",top:"48%",intensity:.7}],re=()=>{y(K=>Math.min(K+.2,3))},ae=()=>{y(K=>Math.max(K-.2,.5))},Ne=()=>{y(1),_({x:0,y:0})},ke=()=>{x(!0)},fe=()=>{x(!1),y(1),_({x:0,y:0})},ne=K=>{z(!0),V({x:K.clientX-b.x,y:K.clientY-b.y})},ge=K=>{k&&_({x:K.clientX-$.x,y:K.clientY-$.y})},we=()=>{z(!1)};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:G}}),e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent",children:"Interactive Maps"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Location markers and heatmap visualizations"})]}),e.jsxs("div",{className:`relative overflow-hidden rounded-3xl transition-opacity duration-1000 ${d?"opacity-100":"opacity-0"}`,children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none z-0",children:[e.jsx("div",{className:"absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"}),e.jsx("div",{className:"absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"})]}),e.jsxs("div",{className:"relative z-10 w-full glass-panel rounded-3xl flex flex-col items-center justify-center p-6 md:p-10 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"}),e.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2",children:[e.jsx("button",{onClick:re,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-white/10
                border border-white/20
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              `,title:"Zoom In",children:e.jsx(iu,{size:20})}),e.jsx("button",{onClick:ae,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-white/10
                border border-white/20
                hover:bg-white/20
                transition-all duration-200
                flex items-center justify-center
                text-white
              `,title:"Zoom Out",children:e.jsx(au,{size:20})}),e.jsx("button",{onClick:Ne,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-cyan-500/20
                border border-cyan-400/40
                hover:bg-cyan-500/30
                transition-all duration-200
                flex items-center justify-center
                text-cyan-300
              `,title:"Reset View",children:e.jsx(Zd,{size:18})}),e.jsx("div",{className:"h-px bg-white/10 my-1"}),e.jsx("button",{onClick:ke,className:`
                w-10 h-10 rounded-lg
                backdrop-blur-xl bg-emerald-500/20
                border border-emerald-400/40
                hover:bg-emerald-500/30
                transition-all duration-200
                flex items-center justify-center
                text-emerald-300
              `,title:"Fullscreen",children:e.jsx(Ma,{size:20})})]}),e.jsx("div",{ref:R,className:"relative w-full overflow-hidden rounded-2xl",style:{aspectRatio:"2 / 1"},onMouseDown:ne,onMouseMove:ge,onMouseUp:we,onMouseLeave:we,children:e.jsxs("div",{className:`relative w-full h-full ${k?"cursor-grabbing":"cursor-grab"}`,style:{transform:`translate(${b.x}px, ${b.y}px) scale(${j})`,transition:k?"none":"transform 0.3s ease-out"},children:[e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",alt:"Map Fallback",className:"absolute inset-0 w-full h-full opacity-10 invert pointer-events-none"}),e.jsx("div",{className:"absolute inset-0 map-mask opacity-60"}),Z.map(K=>e.jsxs("div",{className:"absolute cursor-pointer group",style:{left:K.left,top:K.top,transform:"translate(-50%, -50%)"},onClick:Le=>{Le.stopPropagation(),o("info",`Location: ${K.name}`),g(K)},children:[e.jsx("div",{className:"absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple",style:{backgroundColor:K.color}}),e.jsx("div",{className:"relative w-8 h-8 flex items-center justify-center animate-pulse-marker",children:e.jsx(fl,{size:28,className:"drop-shadow-lg",style:{color:K.color},fill:K.color})}),e.jsx("div",{className:`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-1.5 rounded-lg
                    bg-black/80 backdrop-blur-sm
                    border border-white/20
                    text-white text-sm whitespace-nowrap
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  `,children:K.name})]},K.id)),J.map(K=>{const Le=80+K.intensity*60,$e=.3+K.intensity*.4,Ue=K.intensity>.8?`rgba(239, 68, 68, ${$e})`:K.intensity>.6?`rgba(251, 146, 60, ${$e})`:`rgba(234, 179, 8, ${$e})`;return e.jsx("div",{className:"absolute rounded-full blur-2xl mix-blend-screen pointer-events-none animate-pulse",style:{left:K.left,top:K.top,width:`${Le}px`,height:`${Le}px`,backgroundColor:Ue,transform:"translate(-50%, -50%)"}},K.id)})]})})]})]}),m&&e.jsx("div",{className:"relative z-10",children:e.jsx("div",{className:`
            backdrop-blur-xl backdrop-saturate-150
            bg-white/10
            border border-white/20
            rounded-2xl
            p-6
            shadow-2xl
            transition-all duration-300
            animate-float
          `,children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-3 h-3 rounded-full animate-pulse",style:{backgroundColor:m.color}}),e.jsx("h3",{className:"text-white text-xl",children:m.name})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-white/70 text-sm",children:["Position: ",m.left," / ",m.top]}),e.jsx("p",{className:"text-white/60 text-sm",children:"Click to view location details"})]})]}),e.jsx("button",{onClick:()=>g(null),className:`
                  text-white/60 hover:text-white 
                  transition-colors
                  p-2 rounded-lg
                  hover:bg-white/10
                `,"aria-label":"Close",children:e.jsx(Rt,{size:20})})]})})}),h&&e.jsxs("div",{className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-8",children:[e.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[e.jsx("div",{className:"absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob"}),e.jsx("div",{className:"absolute top-[20%] right-[-10%] w-[45%] h-[60%] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[140px] animate-blob animation-delay-2000"}),e.jsx("div",{className:"absolute bottom-[-15%] left-[25%] w-[40%] h-[40%] bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"})]}),e.jsx("button",{onClick:fe,className:`
              absolute top-6 right-6 z-50
              w-12 h-12 rounded-full
              backdrop-blur-xl bg-white/10
              border border-white/20
              hover:bg-white/20
              transition-all duration-200
              flex items-center justify-center
              text-white
            `,title:"Close",children:e.jsx(Rt,{size:24})}),e.jsxs("div",{className:"relative w-full h-full max-w-[95vw] max-h-[90vh] glass-panel rounded-3xl flex flex-col items-center justify-center p-8 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none"}),e.jsxs("div",{className:"absolute top-4 right-4 z-20 flex flex-col gap-2",children:[e.jsx("button",{onClick:re,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-white/10
                  border border-white/20
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Zoom In",children:e.jsx(iu,{size:24})}),e.jsx("button",{onClick:ae,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-white/10
                  border border-white/20
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Zoom Out",children:e.jsx(au,{size:24})}),e.jsx("button",{onClick:Ne,className:`
                  w-12 h-12 rounded-lg
                  backdrop-blur-xl bg-white/10
                  border border-white/20
                  hover:bg-white/20
                  transition-all duration-200
                  flex items-center justify-center
                  text-white
                `,title:"Reset View",children:e.jsx(Zd,{size:20})})]}),e.jsx("div",{className:"relative w-full h-full overflow-hidden rounded-2xl",onMouseDown:ne,onMouseMove:ge,onMouseUp:we,onMouseLeave:we,children:e.jsxs("div",{className:`relative w-full h-full ${k?"cursor-grabbing":"cursor-grab"}`,style:{transform:`translate(${b.x}px, ${b.y}px) scale(${j})`,transition:k?"none":"transform 0.3s ease-out"},children:[e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg",alt:"Map Fallback",className:"absolute inset-0 w-full h-full opacity-10 invert pointer-events-none object-contain"}),e.jsx("div",{className:"absolute inset-0 map-mask opacity-60",style:{aspectRatio:"2 / 1",margin:"auto"}}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"relative w-full",style:{aspectRatio:"2 / 1"},children:[Z.map(K=>e.jsxs("div",{className:"absolute cursor-pointer group",style:{left:K.left,top:K.top,transform:"translate(-50%, -50%)"},onClick:Le=>{Le.stopPropagation(),o("info",`Location: ${K.name}`),g(K)},children:[e.jsx("div",{className:"absolute inset-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ripple",style:{backgroundColor:K.color}}),e.jsx("div",{className:"relative w-8 h-8 flex items-center justify-center animate-pulse-marker",children:e.jsx(fl,{size:28,className:"drop-shadow-lg",style:{color:K.color},fill:K.color})}),e.jsx("div",{className:`
                          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                          px-3 py-1.5 rounded-lg
                          bg-black/80 backdrop-blur-sm
                          border border-white/20
                          text-white text-sm whitespace-nowrap
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-200
                          pointer-events-none
                        `,children:K.name})]},K.id)),J.map(K=>{const Le=80+K.intensity*60,$e=.3+K.intensity*.4,Ue=K.intensity>.8?`rgba(239, 68, 68, ${$e})`:K.intensity>.6?`rgba(251, 146, 60, ${$e})`:`rgba(234, 179, 8, ${$e})`;return e.jsx("div",{className:"absolute rounded-full blur-2xl mix-blend-screen pointer-events-none animate-pulse",style:{left:K.left,top:K.top,width:`${Le}px`,height:`${Le}px`,backgroundColor:Ue,transform:"translate(-50%, -50%)"}},K.id)})]})})]})})]})]})]})}function ms({size:o="md",variant:d="primary",className:c=""}){const h={sm:"w-4 h-4 border-2",md:"w-8 h-8 border-3",lg:"w-12 h-12 border-4",xl:"w-16 h-16 border-4"},x={primary:"border-white/20 border-t-white",success:"border-green-500/20 border-t-green-400",warning:"border-yellow-500/20 border-t-yellow-400"};return e.jsx("div",{className:`
        ${h[o]}
        rounded-full
        ${x[d]}
        animate-spin
        ${c}
      `})}function Ae({variant:o="text",width:d,height:c,className:h=""}){const x=`
    backdrop-blur-md backdrop-saturate-150
    bg-white/10
    border border-white/10
    animate-pulse
  `,m={text:"h-4 rounded-lg",circular:"rounded-full",rectangular:"rounded-2xl"},g={};return d&&(g.width=d),c&&(g.height=c),e.jsx("div",{className:`${x} ${m[o]} ${h}`,style:g})}function gf(){const[o,d]=I.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent",children:"Loading States"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Spinners, skeleton loaders and loading overlays"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Spinner Sizes"}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex items-center justify-around flex-wrap gap-8",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(ms,{size:"sm"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Small"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(ms,{size:"md"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Medium"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(ms,{size:"lg"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Large"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(ms,{size:"xl"}),e.jsx("p",{className:"text-white/60 text-sm mt-2",children:"Extra Large"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Spinner Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(ms,{size:"lg",variant:"primary"}),e.jsx("p",{className:"text-white",children:"Primary Spinner"})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(ms,{size:"lg",variant:"success"}),e.jsx("p",{className:"text-white",children:"Success Spinner"})]})}),e.jsx(C,{padding:"lg",children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(ms,{size:"lg",variant:"warning"}),e.jsx("p",{className:"text-white",children:"Warning Spinner"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Loading Overlay"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/80 mb-4",children:"Click the button to show a full-page loading overlay. Click anywhere on the overlay to close it."}),e.jsx(X,{variant:"primary",onClick:()=>{d(!0),setTimeout(()=>d(!1),3e3)},children:"Show Loading Overlay"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Skeleton Loading"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-4",children:"Basic Skeletons"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ae,{width:"100%",height:"20px"}),e.jsx(Ae,{width:"80%",height:"20px"}),e.jsx(Ae,{width:"60%",height:"20px"}),e.jsx(Ae,{width:"90%",height:"20px"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h4",{className:"text-white text-xl mb-4",children:"Different Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ae,{width:"100%",height:"40px"}),e.jsx(Ae,{width:"100%",height:"30px"}),e.jsx(Ae,{width:"100%",height:"20px"}),e.jsx(Ae,{width:"100%",height:"15px"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Skeleton Card"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsx(Na,{}),e.jsx(Na,{}),e.jsx(Na,{})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Content Loading Example"}),e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx(Ae,{width:"60px",height:"60px",className:"rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(Ae,{width:"40%",height:"20px"}),e.jsx(Ae,{width:"60%",height:"16px"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(Ae,{width:"100%",height:"16px"}),e.jsx(Ae,{width:"95%",height:"16px"}),e.jsx(Ae,{width:"88%",height:"16px"})]})]})]}),o&&e.jsx(bf,{message:"Loading...",onClose:()=>d(!1)}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ce,{code:de.loadingSection,language:"tsx"})]})]})}function Na(){return e.jsxs(C,{padding:"lg",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[e.jsx(Ae,{width:"48px",height:"48px",className:"rounded-full"}),e.jsxs("div",{className:"flex-1",children:[e.jsx(Ae,{width:"60%",height:"16px",className:"mb-2"}),e.jsx(Ae,{width:"40%",height:"12px"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(Ae,{width:"100%",height:"12px"}),e.jsx(Ae,{width:"90%",height:"12px"}),e.jsx(Ae,{width:"95%",height:"12px"})]})]})}function bf({message:o,onClose:d}){return e.jsx("div",{className:"fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm",onClick:d,children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx(ms,{size:"xl"}),e.jsx("p",{className:"text-white text-xl font-medium",children:o})]})})}const Ft=({className:o="",gradient:d=!1,glowColor:c="#60A5FA"})=>e.jsxs("svg",{viewBox:"0 0 80 80",className:o,fill:"none",children:[e.jsxs("defs",{children:[d&&e.jsxs(e.Fragment,{children:[e.jsxs("linearGradient",{id:"abstract-gradient-1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#60A5FA",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#A855F7",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#EC4899",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"abstract-gradient-2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#F472B6",stopOpacity:1}}),e.jsx("stop",{offset:"50%",style:{stopColor:"#A855F7",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#60A5FA",stopOpacity:1}})]})]}),e.jsxs("filter",{id:"glow",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:d?"url(#abstract-gradient-1)":"white",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:d?"url(#abstract-gradient-1)":"white",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:d?"url(#abstract-gradient-2)":"white",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:d?"url(#abstract-gradient-2)":"white",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:d?"url(#abstract-gradient-1)":"white"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white",opacity:"1"})]}),vf=({className:o="",strokeColor:d="white",strokeWidth:c=2.5})=>e.jsxs("svg",{viewBox:"0 0 80 80",className:o,fill:"none",children:[e.jsx("circle",{cx:"25",cy:"40",r:"15",stroke:d,strokeWidth:c,opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",stroke:d,strokeWidth:c,opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",stroke:d,strokeWidth:c,opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",stroke:d,strokeWidth:c,opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",stroke:d,strokeWidth:c}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:d})]});function wf(){const o=[{name:"Primary Logo",description:"Main brand logo with gradient glass effect",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ft,{className:"w-20 h-20 relative z-10"})]})},{name:"Compact Logo",description:"Smaller version for navigation",component:e.jsxs("div",{className:"w-20 h-20 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ft,{className:"w-12 h-12 relative z-10"})]})},{name:"Gradient Fill",description:"Logo with colorful gradient fill",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden",children:e.jsx(Ft,{className:"w-20 h-20",gradient:!0})})},{name:"Neon Glow",description:"Logo with neon glow effect",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsx("defs",{children:e.jsxs("filter",{id:"neon-glow-logo",children:[e.jsx("feGaussianBlur",{stdDeviation:"3",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"#60A5FA",filter:"url(#neon-glow-logo)",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"#60A5FA",filter:"url(#neon-glow-logo)",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"#A855F7",filter:"url(#neon-glow-logo)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"#A855F7",filter:"url(#neon-glow-logo)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"#EC4899",filter:"url(#neon-glow-logo)"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})},{name:"Outlined",description:"Minimalist outlined version",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/30 flex items-center justify-center",children:e.jsx(vf,{className:"w-20 h-20"})})},{name:"Solid Fill",description:"Bold solid color version",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/50",children:e.jsx(Ft,{className:"w-20 h-20"})})},{name:"Multi-color",description:"Vibrant multi-color gradient",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 flex items-center justify-center relative overflow-hidden",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"multi-color-1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#F472B6",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#A855F7",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"multi-color-2",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#60A5FA",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#34D399",stopOpacity:1}})]}),e.jsxs("linearGradient",{id:"multi-color-3",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#FBBF24",stopOpacity:1}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#F59E0B",stopOpacity:1}})]})]}),e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"url(#multi-color-1)",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"url(#multi-color-2)",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"url(#multi-color-3)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"url(#multi-color-1)",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"url(#multi-color-2)"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})},{name:"Glass Morphism",description:"Enhanced glass effect with layers",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-500/30 backdrop-blur-xl"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"}),e.jsx("div",{className:"absolute inset-0 border border-white/40 rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Ft,{className:"w-20 h-20 relative z-10"})})]})},{name:"Monochrome",description:"Clean monochrome design",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center",children:e.jsx(Ft,{className:"w-20 h-20"})})},{name:"Animated Gradient",description:"Logo with animated background",component:e.jsxs("div",{className:"w-32 h-32 rounded-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md animate-pulse"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"}),e.jsx("div",{className:"absolute inset-0 border border-white/30 rounded-2xl"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(Ft,{className:"w-20 h-20 relative z-10"})})]})},{name:"Dark Mode",description:"Optimized for dark backgrounds",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center",children:e.jsx(Ft,{className:"w-20 h-20"})})},{name:"Light Mode",description:"Optimized for light backgrounds",component:e.jsx("div",{className:"w-32 h-32 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 80 80",className:"w-20 h-20",fill:"none",children:[e.jsx("circle",{cx:"25",cy:"40",r:"15",fill:"#6366F1",opacity:"0.9"}),e.jsx("circle",{cx:"55",cy:"40",r:"15",fill:"#6366F1",opacity:"0.9"}),e.jsx("circle",{cx:"40",cy:"25",r:"12",fill:"#A855F7",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"55",r:"12",fill:"#A855F7",opacity:"0.95"}),e.jsx("circle",{cx:"40",cy:"40",r:"8",fill:"#EC4899"}),e.jsx("circle",{cx:"40",cy:"40",r:"3",fill:"white"})]})})}];return e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8",children:o.map((d,c)=>e.jsx("div",{className:`
            backdrop-blur-md backdrop-saturate-150
            bg-white/5
            border border-white/10
            rounded-2xl
            p-6
            hover:bg-white/10
            hover:border-white/20
            transition-all duration-300
            group
          `,children:e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsx("div",{className:"transform group-hover:scale-110 transition-transform duration-300",children:d.component}),e.jsxs("div",{className:"text-center",children:[e.jsx("h4",{className:"text-white text-lg font-semibold mb-1",children:d.name}),e.jsx("p",{className:"text-white/60 text-sm",children:d.description})]})]})},c))})}function sn({size:o="md",variant:d="primary",className:c=""}){const x={sm:{container:"w-8 h-8",icon:"w-6 h-6",text:"text-base",subtext:"text-[8px]"},md:{container:"w-12 h-12",icon:"w-9 h-9",text:"text-2xl",subtext:"text-xs"},lg:{container:"w-16 h-16",icon:"w-12 h-12",text:"text-3xl",subtext:"text-sm"}}[o];return d==="compact"?e.jsxs("div",{className:`flex items-center gap-3 ${c}`,children:[e.jsxs("div",{className:`
          ${x.container}
          rounded-xl
          bg-gradient-to-br from-blue-400/20 to-purple-500/20
          backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          relative overflow-hidden
        `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ft,{className:`${x.icon} relative z-10`})]}),e.jsx("span",{className:`text-white font-bold ${x.text}`,children:"LIQUID GLASS"})]}):e.jsxs("div",{className:`flex items-center gap-3 ${c}`,children:[e.jsxs("div",{className:`
        ${x.container}
        rounded-xl
        bg-gradient-to-br from-blue-400/20 to-purple-500/20
        backdrop-blur-md
        border border-white/20
        flex items-center justify-center
        relative overflow-hidden
      `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Ft,{className:`${x.icon} relative z-10`})]}),e.jsxs("div",{children:[e.jsx("h1",{className:`text-white font-bold tracking-wide ${x.text}`,children:"LIQUID GLASS"}),e.jsx("p",{className:`text-white/50 tracking-wider ${x.subtext}`,children:"DESIGN SYSTEM"})]})]})}function jf(){return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent",children:"Logo Design System"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Complete brand identity with multiple logo variations"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Logo with Text"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Large"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(sn,{size:"lg",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Medium"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(sn,{size:"md",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Small"}),e.jsx("div",{className:"flex justify-center",children:e.jsx(sn,{size:"sm",variant:"full"})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Compact (No Subtitle)"}),e.jsxs("div",{className:"flex justify-center gap-8",children:[e.jsx(sn,{size:"lg",variant:"compact"}),e.jsx(sn,{size:"md",variant:"compact"}),e.jsx(sn,{size:"sm",variant:"compact"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Logo Variations"}),e.jsx(wf,{})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Usage Guidelines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Primary Logo"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use for main brand representation. Works best on dark backgrounds with glassmorphism effects."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Compact Logo"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Ideal for navigation bars, favicons, and small UI elements where space is limited."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Gradient Variants"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use gradient fills for hero sections and marketing materials to add visual interest."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Color Modes"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Choose dark or light mode variants based on background. Maintain contrast for accessibility."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Minimum Size"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Never scale the logo below 24px × 24px to maintain legibility and visual impact."})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Clear Space"}),e.jsx("p",{className:"text-white/70 text-sm",children:"Maintain minimum padding equal to half the logo height on all sides."})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Brand Colors"}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 border border-white/20"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Primary Blue"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#60A5FA"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 border border-white/20"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Primary Purple"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#A855F7"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 border border-white/20"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Accent Pink"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#F472B6"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"w-full h-24 rounded-xl bg-gradient-to-br from-white/80 to-white/60 border border-white/30"}),e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-white text-sm font-medium",children:"Glass White"}),e.jsx("p",{className:"text-white/60 text-xs",children:"#FFFFFF"})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Large)"}),e.jsx(ce,{code:de.logoWithTextLarge})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Medium)"}),e.jsx(ce,{code:de.logoWithTextMedium})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Small)"}),e.jsx(ce,{code:de.logoWithTextSmall})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-2",children:"Logo with Text (Compact)"}),e.jsx(ce,{code:de.logoWithTextCompact})]})]})]})]})}function yf(){const[o,d]=I.useState(null),c=m=>{navigator.clipboard.writeText(m),d(m),setTimeout(()=>d(null),2e3)},h=[{name:"Primary Colors",description:"Main brand colors for primary actions and key elements",colors:[{name:"Blue",hex:"#60A5FA",rgb:"rgb(96, 165, 250)",usage:"Primary buttons, links, active states"},{name:"Purple",hex:"#A855F7",rgb:"rgb(168, 85, 247)",usage:"Secondary actions, highlights"},{name:"Indigo",hex:"#6366F1",rgb:"rgb(99, 102, 241)",usage:"Information, data visualization"}]},{name:"Accent Colors",description:"Eye-catching colors for special highlights and CTAs",colors:[{name:"Pink",hex:"#F472B6",rgb:"rgb(244, 114, 182)",usage:"Highlights, special offers, notifications"},{name:"Rose",hex:"#FB7185",rgb:"rgb(251, 113, 133)",usage:"Love, favorites, important items"},{name:"Fuchsia",hex:"#E879F9",rgb:"rgb(232, 121, 249)",usage:"Creative elements, decorative"}]},{name:"Success & Status",description:"Colors for feedback, alerts, and status indicators",colors:[{name:"Green",hex:"#43E97B",rgb:"rgb(67, 233, 123)",usage:"Success messages, positive actions"},{name:"Emerald",hex:"#10B981",rgb:"rgb(16, 185, 129)",usage:"Confirmed, active, available"},{name:"Teal",hex:"#14B8A6",rgb:"rgb(20, 184, 166)",usage:"Secondary success, growth"}]},{name:"Warning & Alert",description:"Colors for warnings, errors, and attention",colors:[{name:"Yellow",hex:"#FBBF24",rgb:"rgb(251, 191, 36)",usage:"Warnings, caution, pending"},{name:"Orange",hex:"#F97316",rgb:"rgb(249, 115, 22)",usage:"Important warnings, urgent"},{name:"Amber",hex:"#FAD089",rgb:"rgb(250, 208, 137)",usage:"Moderate alerts, notifications"}]},{name:"Error & Danger",description:"Colors for errors, destructive actions, and critical alerts",colors:[{name:"Red",hex:"#EF4444",rgb:"rgb(239, 68, 68)",usage:"Errors, delete actions, critical"},{name:"Crimson",hex:"#DC2626",rgb:"rgb(220, 38, 38)",usage:"Destructive actions, danger"}]},{name:"Cool Tones",description:"Blues and cyans for calm, professional interfaces",colors:[{name:"Cyan",hex:"#4FACFE",rgb:"rgb(79, 172, 254)",usage:"Links, information, data"},{name:"Sky",hex:"#38BDF8",rgb:"rgb(56, 189, 248)",usage:"Secondary information, badges"},{name:"Slate",hex:"#677EEA",rgb:"rgb(103, 126, 234)",usage:"Charts, graphs, data points"}]},{name:"Neutral Tones",description:"Grays and whites for backgrounds and text",colors:[{name:"White",hex:"#FFFFFF",rgb:"rgb(255, 255, 255)",usage:"Text, icons, borders"},{name:"Light Gray",hex:"#F3F4F6",rgb:"rgb(243, 244, 246)",usage:"Light backgrounds, dividers"},{name:"Gray",hex:"#9CA3AF",rgb:"rgb(156, 163, 175)",usage:"Secondary text, disabled states"},{name:"Dark Gray",hex:"#4B5563",rgb:"rgb(75, 85, 99)",usage:"Body text, labels"}]},{name:"Gradient Combinations",description:"Pre-designed gradient pairs for liquid glass effects",colors:[{name:"Blue → Purple",hex:"#60A5FA → #A855F7",rgb:"gradient",usage:"Primary brand gradients"},{name:"Purple → Pink",hex:"#A855F7 → #F472B6",rgb:"gradient",usage:"Accent gradients, highlights"},{name:"Cyan → Blue",hex:"#4FACFE → #677EEA",rgb:"gradient",usage:"Cool tone gradients"},{name:"Green → Teal",hex:"#43E97B → #14B8A6",rgb:"gradient",usage:"Success, growth gradients"},{name:"Pink → Orange",hex:"#F472B6 → #F97316",rgb:"gradient",usage:"Warm accent gradients"},{name:"Multi-Color",hex:"#F472B6 → #A855F7 → #60A5FA",rgb:"gradient",usage:"Rainbow effects, creative"}]}],x=[{name:"Ultra Light",value:"bg-white/5",usage:"Subtle overlays"},{name:"Light",value:"bg-white/10",usage:"Standard glass cards"},{name:"Medium",value:"bg-white/15",usage:"Emphasized elements"},{name:"Strong",value:"bg-white/20",usage:"Active states"},{name:"Extra Strong",value:"bg-white/30",usage:"Popups, modals"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent",children:"Color System"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Complete color palette for Liquid Glass design system"})]}),h.map((m,g)=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:m.name}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:m.description}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:m.colors.map((j,y)=>e.jsxs(C,{padding:"none",className:"overflow-hidden group",children:[j.rgb==="gradient"?e.jsx("div",{className:"h-32 relative overflow-hidden",style:{background:j.hex.includes("→")?`linear-gradient(135deg, ${j.hex.split(" → ").map(b=>b.trim()).join(", ")})`:j.hex},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"})}):e.jsx("div",{className:"h-32 relative overflow-hidden",style:{backgroundColor:j.hex},children:e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"})}),e.jsxs("div",{className:"p-4 space-y-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white text-lg font-bold mb-1",children:j.name}),e.jsx("p",{className:"text-white/60 text-xs",children:j.usage})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("button",{onClick:()=>c(j.hex),className:`
                        w-full flex items-center justify-between
                        px-3 py-2 rounded-lg
                        bg-white/5 hover:bg-white/10
                        border border-white/10
                        transition-all duration-200
                        group/copy
                      `,children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"text-white/40 text-xs",children:"HEX"}),e.jsx("span",{className:"text-white text-sm font-mono",children:j.hex})]}),o===j.hex?e.jsx(ps,{size:16,className:"text-green-400"}):e.jsx(Ca,{size:16,className:"text-white/40 group-hover/copy:text-white/80"})]}),j.rgb!=="gradient"&&e.jsxs("button",{onClick:()=>c(j.rgb),className:`
                          w-full flex items-center justify-between
                          px-3 py-2 rounded-lg
                          bg-white/5 hover:bg-white/10
                          border border-white/10
                          transition-all duration-200
                          group/copy
                        `,children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"text-white/40 text-xs",children:"RGB"}),e.jsx("span",{className:"text-white text-sm font-mono",children:j.rgb})]}),o===j.rgb?e.jsx(ps,{size:16,className:"text-green-400"}):e.jsx(Ca,{size:16,className:"text-white/40 group-hover/copy:text-white/80"})]})]})]})]},y))})]},g)),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-2",children:"Glass Opacity Levels"}),e.jsx("p",{className:"text-white/60 text-sm mb-4",children:"Standard opacity values for glassmorphism effects"}),e.jsx(C,{padding:"lg",children:e.jsx("div",{className:"space-y-4",children:x.map((m,g)=>e.jsx("div",{className:"flex items-center gap-4",children:e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-white font-medium",children:m.name}),e.jsx("span",{className:"text-white/60 text-sm",children:m.usage})]}),e.jsxs("div",{className:"relative h-16 rounded-xl border border-white/20 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}),e.jsx("div",{className:`absolute inset-0 backdrop-blur-md ${m.value}`}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("span",{className:"text-white font-mono text-sm",children:m.value})})]})]})},g))})})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Color Usage Guidelines"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-400"}),"Primary Actions"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Use blue and purple for primary buttons, links, and interactive elements. These colors represent trust and reliability."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-green-400"}),"Success States"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Green shades indicate successful operations, confirmations, and positive status."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-400"}),"Warnings"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Yellow and orange for warnings, caution messages, and items requiring attention."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-pink-400"}),"Accents & Highlights"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Pink and fuchsia for special highlights, promotions, and attention-grabbing elements."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-400"}),"Errors & Danger"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Red for errors, destructive actions, and critical alerts that require immediate attention."})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"text-white font-semibold mb-2 flex items-center gap-2",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-gray-400"}),"Neutrals"]}),e.jsx("p",{className:"text-white/70 text-sm",children:"Gray tones for text, borders, backgrounds, and secondary information."})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Accessibility"}),e.jsxs("div",{className:"space-y-3 text-white/70 text-sm",children:[e.jsx("p",{children:"• Ensure sufficient contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text)"}),e.jsx("p",{children:"• Don't rely on color alone to convey information - use icons and labels"}),e.jsx("p",{children:"• Test colors with color blindness simulators"}),e.jsx("p",{children:"• Maintain consistency in color usage across the application"}),e.jsx("p",{children:"• Use semantic colors (success, warning, error) consistently"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-4",children:"Code Samples"}),e.jsx(ce,{code:de.colorSection})]})]})}function Xe({checked:o,onChange:d,size:c="md",variant:h="primary",disabled:x=!1,className:m=""}){const g={sm:{container:"w-10 h-6",thumb:"w-4 h-4",translate:"translate-x-4"},md:{container:"w-14 h-7",thumb:"w-5 h-5",translate:"translate-x-7"},lg:{container:"w-16 h-8",thumb:"w-6 h-6",translate:"translate-x-8"}},j={primary:"from-blue-400/80 to-blue-600/80",success:"from-green-400/80 to-green-600/80",warning:"from-yellow-400/80 to-yellow-600/80",danger:"from-red-400/80 to-red-600/80"},y=g[c],b=j[h];return e.jsx("button",{type:"button",role:"switch","aria-checked":o,disabled:x,onClick:()=>!x&&d(!o),className:`
        ${y.container}
        relative inline-flex items-center
        rounded-full
        transition-all duration-300
        ${x?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${o?`bg-gradient-to-r ${b} shadow-lg shadow-${h==="primary"?"blue":h==="success"?"green":h==="warning"?"yellow":"red"}-500/50`:"bg-white/10 border border-white/20"}
        ${!x&&"hover:scale-105"}
        backdrop-blur-md
        ${m}
      `,children:e.jsx("span",{className:`
          ${y.thumb}
          inline-block
          rounded-full
          bg-white
          shadow-lg
          transform transition-transform duration-300
          ${o?y.translate:"translate-x-1"}
        `})})}function Nf({addToast:o}){const[d,c]=he.useState(!0),[h,x]=he.useState(!1),[m,g]=he.useState(!0),[j,y]=he.useState(!0),[b,_]=he.useState(!1),[k,z]=he.useState(!0),[$,V]=he.useState(!1);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent",children:"Toggle Switches"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Beautiful toggle switches with smooth animations"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Basic Toggles"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},size:"sm"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},size:"md"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},size:"lg"}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Large"})]}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(Xe,{checked:!1,onChange:()=>{},size:"md",disabled:!0}),e.jsx("span",{className:"text-white/60 text-sm text-center",children:"Disabled"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Toggle Variants"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},variant:"primary"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Primary"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},variant:"success"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Success"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},variant:"warning"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Warning"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-3",children:[e.jsx(Xe,{checked:!0,onChange:()=>{},variant:"danger"}),e.jsx("span",{className:"text-white/60 text-sm",children:"Danger"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Interactive Toggles"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[d?e.jsx(yp,{className:"text-blue-400",size:24}):e.jsx(wp,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Wi-Fi"}),e.jsx("p",{className:"text-white/60 text-sm",children:d?"Connected":"Disconnected"})]})]}),e.jsx(Xe,{checked:d,onChange:R=>{c(R),o(R?"success":"info",R?"Wi-Fi enabled":"Wi-Fi disabled")},variant:"primary"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[h?e.jsx(nn,{className:"text-yellow-400",size:24}):e.jsx(Zx,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Notifications"}),e.jsx("p",{className:"text-white/60 text-sm",children:h?"Enabled":"Disabled"})]})]}),e.jsx(Xe,{checked:h,onChange:R=>{x(R),o(R?"success":"info",R?"Notifications enabled":"Notifications disabled")},variant:"warning"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[m?e.jsx(mm,{className:"text-purple-400",size:24}):e.jsx(Jm,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Dark Mode"}),e.jsx("p",{className:"text-white/60 text-sm",children:m?"On":"Off"})]})]}),e.jsx(Xe,{checked:m,onChange:R=>{g(R),o("info",R?"Dark mode enabled":"Light mode enabled")},variant:"primary"})]}),e.jsxs("div",{className:"flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[j?e.jsx(Cu,{className:"text-green-400",size:24}):e.jsx(zu,{className:"text-white/40",size:24}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold",children:"Sound"}),e.jsx("p",{className:"text-white/60 text-sm",children:j?"On":"Muted"})]})]}),e.jsx(Xe,{checked:j,onChange:R=>{y(R),o(R?"success":"info",R?"Sound enabled":"Sound muted")},variant:"success"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-white/10",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Auto-save"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Automatically save changes"})]}),e.jsx(Xe,{checked:b,onChange:R=>{_(R),o("success",R?"Auto-save enabled":"Auto-save disabled")}})]}),e.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-white/10",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Email notifications"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Receive updates via email"})]}),e.jsx(Xe,{checked:k,onChange:R=>{z(R),o("success",R?"Email notifications enabled":"Email notifications disabled")}})]}),e.jsxs("div",{className:"flex items-center justify-between py-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:"Two-factor authentication"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Add an extra layer of security"})]}),e.jsx(Xe,{checked:$,onChange:R=>{V(R),o(R?"success":"warning",R?"2FA enabled":"2FA disabled")},variant:$?"success":"primary"})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Compact View"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",children:[{label:"Feature A",checked:!0},{label:"Feature B",checked:!1},{label:"Feature C",checked:!0},{label:"Feature D",checked:!1},{label:"Feature E",checked:!0},{label:"Feature F",checked:!1},{label:"Feature G",checked:!0},{label:"Feature H",checked:!1},{label:"Feature I",checked:!0},{label:"Feature J",checked:!1}].map((R,G)=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Xe,{checked:R.checked,onChange:()=>o("info",`${R.label} toggled`),size:"sm"}),e.jsx("span",{className:"text-white/70 text-sm",children:R.label})]},G))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Code Samples"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(ce,{code:de.toggleSection.basicToggles,language:"tsx"}),e.jsx(ce,{code:de.toggleSection.toggleVariants,language:"tsx"}),e.jsx(ce,{code:de.toggleSection.interactiveToggles,language:"tsx"}),e.jsx(ce,{code:de.toggleSection.settingsList,language:"tsx"}),e.jsx(ce,{code:de.toggleSection.compactToggles,language:"tsx"})]})]})]})}function dt({checked:o,onChange:d,label:c,description:h,size:x="md",disabled:m=!1,className:g=""}){const y={sm:{box:"w-4 h-4",icon:14,text:"text-sm",description:"text-xs"},md:{box:"w-5 h-5",icon:16,text:"text-base",description:"text-sm"},lg:{box:"w-6 h-6",icon:18,text:"text-lg",description:"text-base"}}[x];return e.jsxs("label",{className:`
        flex items-start gap-3
        ${m?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${g}
      `,children:[e.jsxs("div",{className:"relative flex items-center justify-center pt-0.5",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:b=>!m&&d(b.target.checked),disabled:m,className:"sr-only"}),e.jsx("div",{className:`
            ${y.box}
            rounded-md
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${o?"bg-gradient-to-br from-blue-400/80 to-blue-600/80 border-blue-400/50 shadow-lg shadow-blue-500/50":"bg-white/10 border-white/30 hover:border-white/50"}
            ${!m&&"hover:scale-110"}
          `,children:o&&e.jsx(ps,{size:y.icon,className:"text-white",strokeWidth:3})})]}),(c||h)&&e.jsxs("div",{className:"flex-1",children:[c&&e.jsx("div",{className:`text-white font-medium ${y.text}`,children:c}),h&&e.jsx("div",{className:`text-white/60 ${y.description} mt-1`,children:h})]})]})}function tt({checked:o,onChange:d,label:c,description:h,name:x,size:m="md",disabled:g=!1,className:j=""}){const b={sm:{outer:"w-4 h-4",inner:"w-2 h-2",text:"text-sm",description:"text-xs"},md:{outer:"w-5 h-5",inner:"w-2.5 h-2.5",text:"text-base",description:"text-sm"},lg:{outer:"w-6 h-6",inner:"w-3 h-3",text:"text-lg",description:"text-base"}}[m];return e.jsxs("label",{className:`
        flex items-start gap-3
        ${g?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${j}
      `,children:[e.jsxs("div",{className:"relative flex items-center justify-center pt-0.5",children:[e.jsx("input",{type:"radio",name:x,checked:o,onChange:_=>!g&&d(_.target.checked),disabled:g,className:"sr-only"}),e.jsx("div",{className:`
            ${b.outer}
            rounded-full
            backdrop-blur-md
            border-2
            transition-all duration-300
            flex items-center justify-center
            ${o?"bg-gradient-to-br from-purple-400/20 to-purple-600/20 border-purple-400/50 shadow-lg shadow-purple-500/50":"bg-white/10 border-white/30 hover:border-white/50"}
            ${!g&&"hover:scale-110"}
          `,children:o&&e.jsx("div",{className:`
                ${b.inner}
                rounded-full
                bg-gradient-to-br from-purple-400 to-purple-600
                shadow-lg
              `})})]}),(c||h)&&e.jsxs("div",{className:"flex-1",children:[c&&e.jsx("div",{className:`text-white font-medium ${b.text}`,children:c}),h&&e.jsx("div",{className:`text-white/60 ${b.description} mt-1`,children:h})]})]})}function kf({addToast:o}){const[d,c]=he.useState(!1),[h,x]=he.useState({option1:!0,option2:!1,option3:!0,option4:!1}),[m,g]=he.useState("pro"),[j,y]=he.useState("blue"),[b,_]=he.useState("medium");return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent",children:"Checkbox & Radio Button"}),e.jsx("p",{className:"text-white/70 text-lg",children:"Selection controls with glassmorphism effects"})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkboxes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(dt,{checked:!0,onChange:()=>{},label:"Checked"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(dt,{checked:!1,onChange:()=>{},label:"Unchecked"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(dt,{checked:!0,onChange:()=>{},label:"Disabled",disabled:!0})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx(dt,{checked:d,onChange:k=>{c(k),o("info",k?"Checked":"Unchecked")},label:"Interactive"})})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkbox Sizes"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(dt,{checked:!0,onChange:()=>{},label:"Small",size:"sm"}),e.jsx(dt,{checked:!0,onChange:()=>{},label:"Medium",size:"md"}),e.jsx(dt,{checked:!0,onChange:()=>{},label:"Large",size:"lg"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Checkbox Group"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(dt,{checked:h.option1,onChange:k=>{x({...h,option1:k}),o("success","Receive email notifications")},label:"Receive email notifications",description:"Get updates about your account activity"}),e.jsx(dt,{checked:h.option2,onChange:k=>{x({...h,option2:k}),o("success","SMS notifications")},label:"SMS notifications",description:"Receive text messages for important updates"}),e.jsx(dt,{checked:h.option3,onChange:k=>{x({...h,option3:k}),o("success","Push notifications")},label:"Push notifications",description:"Get push notifications on your devices"}),e.jsx(dt,{checked:h.option4,onChange:k=>{x({...h,option4:k}),o("success","Marketing emails")},label:"Marketing emails",description:"Receive news and special offers"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Radio Buttons"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsx(tt,{checked:!0,onChange:()=>{},label:"Selected",name:"demo1"}),e.jsx(tt,{checked:!1,onChange:()=>{},label:"Unselected",name:"demo1"}),e.jsx(tt,{checked:!0,onChange:()=>{},label:"Disabled",name:"demo2",disabled:!0}),e.jsx(tt,{checked:!1,onChange:()=>{},label:"Disabled",name:"demo3",disabled:!0})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Radio Button Sizes"}),e.jsxs("div",{className:"flex items-center gap-8",children:[e.jsx(tt,{checked:!0,onChange:()=>{},label:"Small",size:"sm",name:"size-demo"}),e.jsx(tt,{checked:!1,onChange:()=>{},label:"Medium",size:"md",name:"size-demo"}),e.jsx(tt,{checked:!1,onChange:()=>{},label:"Large",size:"lg",name:"size-demo"})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select a Plan"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{onClick:()=>{g("basic"),o("info","Basic plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="basic"?"bg-blue-500/20 border-blue-400/50":"bg-white/5 border-white/10 hover:border-white/20"}`,children:[e.jsx(tt,{checked:m==="basic",onChange:()=>g("basic"),label:"Basic",name:"plan",size:"lg"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$9",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ 10 Projects"}),e.jsx("li",{children:"✓ 5GB Storage"}),e.jsx("li",{children:"✓ Basic Support"})]})]})]}),e.jsxs("div",{onClick:()=>{g("pro"),o("info","Pro plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="pro"?"bg-purple-500/20 border-purple-400/50":"bg-white/5 border-white/10 hover:border-white/20"}`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(tt,{checked:m==="pro",onChange:()=>g("pro"),label:"Pro",name:"plan",size:"lg"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/30 text-purple-300 text-xs rounded-full font-semibold",children:"Popular"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$29",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ 100 Projects"}),e.jsx("li",{children:"✓ 50GB Storage"}),e.jsx("li",{children:"✓ Priority Support"}),e.jsx("li",{children:"✓ Advanced Features"})]})]})]}),e.jsxs("div",{onClick:()=>{g("enterprise"),o("info","Enterprise plan selected")},className:`p-6 rounded-2xl border-2 transition-all cursor-pointer ${m==="enterprise"?"bg-pink-500/20 border-pink-400/50":"bg-white/5 border-white/10 hover:border-white/20"}`,children:[e.jsx(tt,{checked:m==="enterprise",onChange:()=>g("enterprise"),label:"Enterprise",name:"plan",size:"lg"}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"text-3xl text-white font-bold",children:["$99",e.jsx("span",{className:"text-lg text-white/60",children:"/mo"})]}),e.jsxs("ul",{className:"mt-4 space-y-2 text-white/70 text-sm",children:[e.jsx("li",{children:"✓ Unlimited Projects"}),e.jsx("li",{children:"✓ 500GB Storage"}),e.jsx("li",{children:"✓ 24/7 Support"}),e.jsx("li",{children:"✓ Custom Integration"})]})]})]})]})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select Color"}),e.jsx("div",{className:"space-y-3",children:[{value:"blue",label:"Ocean Blue",color:"bg-blue-500"},{value:"purple",label:"Royal Purple",color:"bg-purple-500"},{value:"pink",label:"Rose Pink",color:"bg-pink-500"},{value:"green",label:"Emerald Green",color:"bg-green-500"},{value:"orange",label:"Sunset Orange",color:"bg-orange-500"}].map(k=>e.jsxs("div",{onClick:()=>{y(k.value),o("info",`${k.label} selected`)},className:`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer ${j===k.value?"bg-white/10 border-white/30":"bg-white/5 border-white/10 hover:bg-white/8"}`,children:[e.jsx("div",{className:`w-8 h-8 rounded-lg ${k.color}`}),e.jsx(tt,{checked:j===k.value,onChange:()=>y(k.value),label:k.label,name:"color"})]},k.value))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Select Size"}),e.jsx("div",{className:"flex gap-4",children:["small","medium","large","xl"].map(k=>e.jsx("div",{onClick:()=>{_(k),o("info",`${k.toUpperCase()} selected`)},className:`flex-1 p-6 rounded-2xl border-2 transition-all cursor-pointer text-center ${b===k?"bg-cyan-500/20 border-cyan-400/50":"bg-white/5 border-white/10 hover:border-white/20"}`,children:e.jsx(tt,{checked:b===k,onChange:()=>_(k),label:k.toUpperCase(),name:"size"})},k))})]}),e.jsxs(C,{padding:"lg",children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Preferences"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-4",children:"Notifications"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(dt,{checked:!0,onChange:()=>o("info","Toggle notification"),label:"All notifications"}),e.jsx(dt,{checked:!1,onChange:()=>o("info","Toggle notification"),label:"Comments only"}),e.jsx(dt,{checked:!0,onChange:()=>o("info","Toggle notification"),label:"Mentions only"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-semibold mb-4",children:"Theme"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(tt,{checked:!0,onChange:()=>o("info","Theme changed"),label:"Dark theme",name:"theme"}),e.jsx(tt,{checked:!1,onChange:()=>o("info","Theme changed"),label:"Light theme",name:"theme"}),e.jsx(tt,{checked:!1,onChange:()=>o("info","Theme changed"),label:"Auto (system)",name:"theme"})]})]})]})]}),e.jsx(ce,{title:"Checkbox & Radio Button Code Samples",code:de.checkboxRadioSection})]})}function Sf({addToast:o}){const[d,c]=he.useState(null),h=[{name:"UI & Interface",color:"from-blue-400 to-cyan-400",bgColor:"from-blue-500/10 to-cyan-500/10",icons:[{Icon:Nl,name:"Home"},{Icon:fs,name:"Settings"},{Icon:st,name:"User"},{Icon:nn,name:"Bell"},{Icon:pl,name:"Mail"},{Icon:Qn,name:"Calendar"},{Icon:ut,name:"Search"},{Icon:yu,name:"Menu"}]},{name:"Actions",color:"from-purple-400 to-pink-400",bgColor:"from-purple-500/10 to-pink-500/10",icons:[{Icon:Ta,name:"Plus"},{Icon:Nu,name:"Minus"},{Icon:Fa,name:"Edit"},{Icon:Ra,name:"Trash2"},{Icon:qn,name:"Download"},{Icon:xp,name:"Upload"},{Icon:Ca,name:"Copy"},{Icon:ps,name:"Check"}]},{name:"Media",color:"from-green-400 to-emerald-400",bgColor:"from-green-500/10 to-emerald-500/10",icons:[{Icon:Em,name:"Play"},{Icon:Nm,name:"Pause"},{Icon:Cu,name:"Volume2"},{Icon:zu,name:"VolumeX"},{Icon:H0,name:"Image"},{Icon:jl,name:"Video"},{Icon:gm,name:"Music"},{Icon:o0,name:"Camera"}]},{name:"Communication",color:"from-orange-400 to-red-400",bgColor:"from-orange-500/10 to-red-500/10",icons:[{Icon:$a,name:"MessageSquare"},{Icon:bl,name:"Send"},{Icon:Yn,name:"Phone"},{Icon:Sm,name:"PhoneCall"},{Icon:jl,name:"Video"},{Icon:dm,name:"Mic"},{Icon:om,name:"MicOff"},{Icon:Kx,name:"AtSign"}]}],x=m=>{const g=`<${m} size={24} />`;navigator.clipboard.writeText(g),c(m),o("success",`Copied ${m} code!`),setTimeout(()=>c(null),2e3)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-5xl text-white font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent",children:"Icon Library"}),e.jsx("p",{className:"text-white/70 text-lg",children:"300+ beautiful icons from Lucide React"})]}),h.map(m=>e.jsxs("div",{children:[e.jsx("h3",{className:`text-white text-2xl mb-6 bg-gradient-to-r ${m.color} bg-clip-text text-transparent`,children:m.name}),e.jsx(C,{padding:"lg",children:e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4",children:m.icons.map(({Icon:g,name:j})=>e.jsxs("button",{onClick:()=>x(j),className:`
                    relative group
                    flex flex-col items-center justify-center gap-2
                    p-4 rounded-xl
                    bg-gradient-to-br ${m.bgColor}
                    backdrop-blur-md
                    border border-white/10
                    hover:border-white/30
                    transition-all duration-300
                    hover:scale-105
                    cursor-pointer
                  `,children:[e.jsx(g,{size:32,className:`text-white group-hover:bg-gradient-to-r ${m.color} group-hover:bg-clip-text group-hover:text-transparent transition-all`}),e.jsx("span",{className:"text-white/70 text-xs text-center group-hover:text-white transition-colors",children:j}),d===j&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-xl",children:e.jsx(ps,{className:"text-green-400",size:24})})]},j))})})]},m.name)),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-2xl mb-6",children:"Usage Example"}),e.jsxs(C,{padding:"lg",children:[e.jsx("p",{className:"text-white/70 mb-4",children:"Click any icon above to copy its code. Here's how to use icons in your components:"}),e.jsxs("div",{className:"flex items-center gap-4 p-6 rounded-lg bg-white/5 border border-white/10",children:[e.jsx(Ye,{className:"text-yellow-400",size:32}),e.jsx(Kn,{className:"text-red-400",size:32}),e.jsx(ku,{className:"text-green-400",size:32}),e.jsx(Mu,{className:"text-purple-400",size:32})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-white text-3xl mb-6 text-center",children:"Code Samples"}),e.jsx(ce,{code:de.iconsSection,language:"tsx"})]})]})}function Cf(){var k;const[o,d]=I.useState(""),[c,h]=I.useState([{id:1,text:"Hey! How are you?",sender:"other",time:"10:30 AM"},{id:2,text:"I'm doing great! Thanks for asking 😊",sender:"user",time:"10:32 AM"},{id:3,text:"That's wonderful! Did you check out the new Liquid Glass design system?",sender:"other",time:"10:33 AM"},{id:4,text:"Yes! The glassmorphism effects are absolutely stunning!",sender:"user",time:"10:35 AM"},{id:5,text:"I love the backdrop blur and the gradient colors",sender:"user",time:"10:35 AM"},{id:6,text:"Same here! The components are so polished and modern.",sender:"other",time:"10:37 AM"}]),[x,m]=I.useState(1),[g,j]=I.useState(!0),y=[{id:1,name:"Alex Johnson",lastMessage:"Same here! The components...",time:"10:37 AM",online:!0,unread:0},{id:2,name:"Sarah Williams",lastMessage:"See you tomorrow!",time:"9:15 AM",online:!0,unread:2},{id:3,name:"Mike Chen",lastMessage:"Thanks for the help",time:"Yesterday",online:!1,unread:0},{id:4,name:"Emma Davis",lastMessage:"Let's catch up soon",time:"Yesterday",online:!0,unread:0},{id:5,name:"James Wilson",lastMessage:"Perfect! That works for me",time:"Tuesday",online:!1,unread:0}],b=()=>{if(o.trim()){const z={id:c.length+1,text:o,sender:"user",time:new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})};h([...c,z]),d("")}},_=z=>{z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),b())};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-5xl font-bold text-white",children:"Chat"}),e.jsx("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Modern messaging interface with real-time chat, contact list, and glassmorphism design"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Desktop View"}),e.jsx("div",{className:`
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsxs("div",{className:"flex h-[600px] md:h-[700px]",children:[e.jsxs("div",{className:`
              ${g?"w-full md:w-80":"hidden md:block md:w-80"}
              border-r border-white/10
              flex flex-col
              bg-white/5
            `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10",children:[e.jsx("h3",{className:"text-white text-lg font-bold mb-3",children:"Messages"}),e.jsxs("div",{className:"relative",children:[e.jsx(ut,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:18}),e.jsx("input",{type:"text",placeholder:"Search contacts...",className:`
                      w-full pl-10 pr-4 py-2 
                      bg-white/10 
                      border border-white/20 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    `})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:y.map(z=>e.jsxs("button",{onClick:()=>{m(z.id),j(!1)},className:`
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      transition-all duration-200
                      ${x===z.id?"bg-white/10 border-l-4 border-l-blue-400":"hover:bg-white/5"}
                    `,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20",children:e.jsx(st,{className:"text-white/70",size:20})}),z.online&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{className:"flex-1 text-left min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-white font-medium truncate",children:z.name}),e.jsx("span",{className:"text-white/40 text-xs flex-shrink-0 ml-2",children:z.time})]}),e.jsx("p",{className:"text-white/60 text-sm truncate",children:z.lastMessage})]}),z.unread>0&&e.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:z.unread})})]},z.id))})]}),e.jsxs("div",{className:`
              ${g?"hidden md:flex":"flex"}
              flex-1 flex-col
            `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10 flex items-center justify-between bg-white/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{onClick:()=>j(!0),className:"md:hidden text-white/70 hover:text-white",children:"←"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20",children:e.jsx(st,{className:"text-white/70",size:18})}),e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium",children:(k=y.find(z=>z.id===x))==null?void 0:k.name}),e.jsx("p",{className:"text-white/60 text-xs",children:"Online"})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(Yn,{className:"text-white/70",size:18})}),e.jsx("button",{className:"w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(jl,{className:"text-white/70",size:18})}),e.jsx("button",{className:"w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(vu,{className:"text-white/70",size:18})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide",children:c.map(z=>e.jsx("div",{className:`flex ${z.sender==="user"?"justify-end":"justify-start"}`,children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[80%] md:max-w-[70%]",children:[z.sender==="other"&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20 flex-shrink-0",children:e.jsx(st,{className:"text-white/70",size:14})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:`
                          px-4 py-2 rounded-2xl
                          backdrop-blur-md
                          ${z.sender==="user"?"bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm":"bg-white/10 border border-white/20 rounded-bl-sm"}
                        `,children:e.jsx("p",{className:"text-white text-sm leading-relaxed",children:z.text})}),e.jsx("span",{className:`text-white/40 text-xs ${z.sender==="user"?"text-right":"text-left"}`,children:z.time})]}),z.sender==="user"&&e.jsx("div",{className:"w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-white/20 flex-shrink-0",children:e.jsx(st,{className:"text-white/70",size:14})})]})},z.id))}),e.jsx("div",{className:"p-4 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex items-end gap-2",children:[e.jsx("button",{className:"w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0",children:e.jsx(Jd,{className:"text-white/70",size:20})}),e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("textarea",{value:o,onChange:z=>d(z.target.value),onKeyPress:_,placeholder:"Type a message...",rows:1,className:`
                        w-full px-4 py-3 pr-12
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        text-white placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                        resize-none
                        max-h-32
                      `}),e.jsx("button",{className:"absolute right-3 bottom-3 text-white/70 hover:text-white transition-colors",children:e.jsx(Ea,{size:20})})]}),e.jsx("button",{onClick:b,className:`
                      w-10 h-10 rounded-xl
                      bg-gradient-to-br from-blue-500 to-purple-600
                      hover:from-blue-600 hover:to-purple-700
                      flex items-center justify-center
                      transition-all duration-200
                      flex-shrink-0
                      shadow-lg shadow-blue-500/30
                    `,children:e.jsx(bl,{className:"text-white",size:20})})]})})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(_a,{className:"text-blue-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Real-time Messaging"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Send and receive messages instantly with smooth animations and transitions"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4",children:e.jsx(st,{className:"text-purple-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Contact Management"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Easily manage and search through your contacts with online status indicators"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(Yn,{className:"text-pink-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Voice & Video Calls"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Seamlessly switch from text to voice or video calls with one tap"})]})]}),e.jsxs("div",{className:`
        p-6 rounded-2xl
        backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
        border border-blue-400/30
      `,children:[e.jsxs("h3",{className:"text-white text-lg font-bold mb-2 flex items-center gap-2",children:[e.jsx("span",{className:"text-2xl",children:"📱"}),"Mobile Responsive"]}),e.jsx("p",{className:"text-white/70",children:"The chat interface automatically adapts between desktop and mobile views. On mobile devices, the contact list and chat window switch between each other for optimal screen usage."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Mobile View"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsx("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          `,children:e.jsxs("div",{className:"flex flex-col h-[600px]",children:[e.jsxs("div",{className:"p-4 border-b border-white/10 bg-white/5",children:[e.jsx("h3",{className:"text-white text-lg font-bold mb-3 text-center",children:"Messages"}),e.jsxs("div",{className:"relative",children:[e.jsx(ut,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:18}),e.jsx("input",{type:"text",placeholder:"Search contacts...",className:`
                      w-full pl-10 pr-4 py-2 
                      bg-white/10 
                      border border-white/20 
                      rounded-xl
                      text-white placeholder-white/40
                      focus:outline-none focus:border-blue-400/50
                      transition-colors
                    `})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide",children:y.slice(0,4).map(z=>e.jsxs("div",{className:`
                      w-full p-4 flex items-start gap-3
                      border-b border-white/5
                      hover:bg-white/5
                      transition-all duration-200
                    `,children:[e.jsxs("div",{className:"relative flex-shrink-0",children:[e.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20",children:e.jsx(st,{className:"text-white/70",size:20})}),z.online&&e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{className:"flex-1 text-left min-w-0",children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-white font-medium truncate",children:z.name}),e.jsx("span",{className:"text-white/40 text-xs flex-shrink-0 ml-2",children:z.time})]}),e.jsx("p",{className:"text-white/60 text-sm truncate",children:z.lastMessage})]}),z.unread>0&&e.jsx("div",{className:"flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center",children:e.jsx("span",{className:"text-white text-xs font-bold",children:z.unread})})]},z.id))}),e.jsx("div",{className:"p-3 bg-white/5 border-t border-white/10",children:e.jsx("p",{className:"text-white/60 text-xs text-center",children:"Contact List View"})})]})}),e.jsx("div",{className:`
            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
            border border-white/20
            rounded-3xl
            overflow-hidden
            shadow-2xl
            max-w-sm mx-auto w-full
          `,children:e.jsxs("div",{className:"flex flex-col h-[600px]",children:[e.jsxs("div",{className:"p-4 border-b border-white/10 flex items-center justify-between bg-white/5",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{className:"text-white/70 hover:text-white text-lg",children:"←"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20",children:e.jsx(st,{className:"text-white/70",size:18})}),e.jsx("div",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-white font-medium text-sm",children:"Alex Johnson"}),e.jsx("p",{className:"text-white/60 text-xs",children:"Online"})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{className:"w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(Yn,{className:"text-white/70",size:16})}),e.jsx("button",{className:"w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors",children:e.jsx(jl,{className:"text-white/70",size:16})})]})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide",children:[e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20 flex-shrink-0",children:e.jsx(st,{className:"text-white/70",size:12})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-bl-sm",children:e.jsx("p",{className:"text-white text-sm",children:"Hey! How are you?"})}),e.jsx("span",{className:"text-white/40 text-xs",children:"10:30 AM"})]})]})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl backdrop-blur-md bg-gradient-to-br from-blue-500/40 to-purple-500/40 border border-blue-400/30 rounded-br-sm",children:e.jsx("p",{className:"text-white text-sm",children:"I'm doing great! Thanks 😊"})}),e.jsx("span",{className:"text-white/40 text-xs text-right",children:"10:32 AM"})]}),e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center border border-white/20 flex-shrink-0",children:e.jsx(st,{className:"text-white/70",size:12})})]})}),e.jsx("div",{className:"flex justify-start",children:e.jsxs("div",{className:"flex items-end gap-2 max-w-[85%]",children:[e.jsx("div",{className:"w-7 h-7 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-500/30 flex items-center justify-center border border-white/20 flex-shrink-0",children:e.jsx(st,{className:"text-white/70",size:12})}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"px-3 py-2 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-bl-sm",children:e.jsx("p",{className:"text-white text-sm",children:"The Liquid Glass design is amazing!"})}),e.jsx("span",{className:"text-white/40 text-xs",children:"10:33 AM"})]})]})})]}),e.jsx("div",{className:"p-3 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0",children:e.jsx(Jd,{className:"text-white/70",size:18})}),e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("input",{type:"text",placeholder:"Type a message...",className:`
                        w-full px-3 py-2 pr-10
                        bg-white/10
                        border border-white/20
                        rounded-xl
                        text-white text-sm placeholder-white/40
                        focus:outline-none focus:border-blue-400/50
                        transition-colors
                      `}),e.jsx("button",{className:"absolute right-2 top-1/2 -translate-y-1/2 text-white/70",children:e.jsx(Ea,{size:18})})]}),e.jsx("button",{className:`
                    w-9 h-9 rounded-xl
                    bg-gradient-to-br from-blue-500 to-purple-600
                    flex items-center justify-center
                    flex-shrink-0
                    shadow-lg shadow-blue-500/30
                  `,children:e.jsx(bl,{className:"text-white",size:18})})]})}),e.jsx("div",{className:"p-3 bg-white/5 border-t border-white/10",children:e.jsx("p",{className:"text-white/60 text-xs text-center",children:"Chat Window View"})})]})})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Code Sample"}),e.jsx(ce,{code:de.chatSection})]})]})}function zf(){const[o,d]=I.useState(""),[c,h]=I.useState(1),[x,m]=I.useState(10),[g,j]=I.useState(null),[y,b]=I.useState("asc"),[_,k]=I.useState(new Set),[z,$]=I.useState(!1),[V,R]=I.useState(null),G=[{id:1,name:"John Smith",email:"john.smith@company.com",role:"Senior Developer",department:"Engineering",status:"Active",joinDate:"2020-01-15",salary:95e3,location:"New York",projects:12},{id:2,name:"Sarah Johnson",email:"sarah.j@company.com",role:"Product Manager",department:"Product",status:"Active",joinDate:"2019-03-22",salary:11e4,location:"San Francisco",projects:8},{id:3,name:"Mike Chen",email:"mike.chen@company.com",role:"UI/UX Designer",department:"Design",status:"Active",joinDate:"2021-06-10",salary:85e3,location:"Los Angeles",projects:15},{id:4,name:"Emma Davis",email:"emma.d@company.com",role:"Data Analyst",department:"Analytics",status:"Pending",joinDate:"2023-11-01",salary:75e3,location:"Chicago",projects:3},{id:5,name:"James Wilson",email:"j.wilson@company.com",role:"DevOps Engineer",department:"Engineering",status:"Active",joinDate:"2020-09-05",salary:98e3,location:"Seattle",projects:10},{id:6,name:"Lisa Anderson",email:"lisa.a@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",joinDate:"2018-12-15",salary:88e3,location:"Boston",projects:6},{id:7,name:"Robert Brown",email:"r.brown@company.com",role:"QA Engineer",department:"Engineering",status:"Inactive",joinDate:"2022-02-20",salary:72e3,location:"Austin",projects:5},{id:8,name:"Jennifer Lee",email:"jennifer.lee@company.com",role:"Sales Director",department:"Sales",status:"Active",joinDate:"2017-05-30",salary:125e3,location:"New York",projects:20},{id:9,name:"David Martinez",email:"d.martinez@company.com",role:"Backend Developer",department:"Engineering",status:"Active",joinDate:"2021-08-12",salary:92e3,location:"Miami",projects:9},{id:10,name:"Maria Garcia",email:"maria.g@company.com",role:"Content Writer",department:"Marketing",status:"Active",joinDate:"2022-04-18",salary:65e3,location:"Denver",projects:11},{id:11,name:"Thomas White",email:"t.white@company.com",role:"System Architect",department:"Engineering",status:"Active",joinDate:"2019-07-25",salary:115e3,location:"San Francisco",projects:7},{id:12,name:"Amy Taylor",email:"amy.taylor@company.com",role:"HR Manager",department:"HR",status:"Active",joinDate:"2020-11-08",salary:82e3,location:"Portland",projects:4},{id:13,name:"Kevin Moore",email:"k.moore@company.com",role:"Frontend Developer",department:"Engineering",status:"Pending",joinDate:"2023-09-14",salary:88e3,location:"Seattle",projects:2},{id:14,name:"Rachel Adams",email:"rachel.a@company.com",role:"Graphic Designer",department:"Design",status:"Active",joinDate:"2021-01-20",salary:78e3,location:"Los Angeles",projects:13},{id:15,name:"Chris Evans",email:"c.evans@company.com",role:"Business Analyst",department:"Analytics",status:"Active",joinDate:"2020-03-15",salary:8e4,location:"Chicago",projects:8}],[Z]=I.useState(G),[J,re]=I.useState([{id:"id",label:"ID",sortable:!0,visible:!0,pinned:!0},{id:"name",label:"Name",sortable:!0,visible:!0,pinned:!0},{id:"email",label:"Email",sortable:!0,visible:!0,pinned:!1},{id:"role",label:"Role",sortable:!0,visible:!0,pinned:!1},{id:"department",label:"Department",sortable:!0,visible:!0,pinned:!1},{id:"status",label:"Status",sortable:!0,visible:!0,pinned:!1},{id:"joinDate",label:"Join Date",sortable:!0,visible:!0,pinned:!1},{id:"salary",label:"Salary",sortable:!0,visible:!0,pinned:!1},{id:"location",label:"Location",sortable:!0,visible:!0,pinned:!1},{id:"projects",label:"Projects",sortable:!0,visible:!0,pinned:!1}]),ae=I.useMemo(()=>Z.filter(P=>Object.values(P).some(Q=>Q.toString().toLowerCase().includes(o.toLowerCase()))),[Z,o]),Ne=I.useMemo(()=>g?[...ae].sort((P,Q)=>{const F=P[g],W=Q[g];return F<W?y==="asc"?-1:1:F>W?y==="asc"?1:-1:0}):ae,[ae,g,y]),ke=I.useMemo(()=>{const P=(c-1)*x;return Ne.slice(P,P+x)},[Ne,c,x]),fe=Math.ceil(Ne.length/x),ne=P=>{g===P?b(y==="asc"?"desc":"asc"):(j(P),b("asc"))},ge=P=>{const Q=new Set(_);Q.has(P)?Q.delete(P):Q.add(P),k(Q)},we=P=>{re(J.map(Q=>Q.id===P?{...Q,visible:!Q.visible}:Q))},K=P=>{re(J.map(Q=>Q.id===P?{...Q,pinned:!Q.pinned}:Q))},Le=P=>{R(P)},$e=(P,Q)=>{if(P.preventDefault(),V===null||V===Q)return;const F=[...J],W=F[V];F.splice(V,1),F.splice(Q,0,W),re(F),R(Q)},Ue=P=>{switch(P){case"Active":return"bg-green-500/20 text-green-300 border-green-500/30";case"Inactive":return"bg-red-500/20 text-red-300 border-red-500/30";case"Pending":return"bg-yellow-500/20 text-yellow-300 border-yellow-500/30";default:return"bg-gray-500/20 text-gray-300 border-gray-500/30"}},nt=J.filter(P=>P.visible);return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-5xl font-bold text-white",children:"Table"}),e.jsx("p",{className:"text-xl text-white/70 max-w-2xl mx-auto",children:"Advanced data table with search, sorting, pagination, column management, and row expansion"})]}),e.jsxs("div",{className:`
        backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
        border border-white/20
        rounded-3xl
        overflow-hidden
        shadow-2xl
      `,children:[e.jsxs("div",{className:"p-4 border-b border-white/10 bg-white/5",children:[e.jsxs("div",{className:"flex flex-col md:flex-row gap-4 items-start md:items-center justify-between",children:[e.jsxs("div",{className:"relative flex-1 max-w-md w-full",children:[e.jsx(ut,{className:"absolute left-3 top-1/2 -translate-y-1/2 text-white/40",size:20}),e.jsx("input",{type:"text",placeholder:"Search across all columns...",value:o,onChange:P=>{d(P.target.value),h(1)},className:`
                  w-full pl-10 pr-4 py-2.5
                  bg-white/10
                  border border-white/20
                  rounded-xl
                  text-white placeholder-white/40
                  focus:outline-none focus:border-blue-400/50
                  transition-colors
                `})]}),e.jsxs("div",{className:"flex gap-2 w-full md:w-auto",children:[e.jsxs("div",{className:"relative",children:[e.jsxs("button",{onClick:()=>$(!z),className:`
                    px-4 py-2.5 rounded-xl
                    bg-white/10 hover:bg-white/20
                    border border-white/20
                    text-white
                    transition-colors
                    flex items-center gap-2
                  `,children:[e.jsx(fs,{size:18}),e.jsx("span",{className:"hidden sm:inline",children:"Columns"})]}),z&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>$(!1)}),e.jsxs("div",{className:`
                      absolute right-0 top-full mt-2 w-64
                      backdrop-blur-xl backdrop-saturate-150
                      bg-black/85
                      border border-white/15
                      rounded-2xl
                      shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]
                      z-50
                      max-h-96
                      overflow-y-auto
                    `,children:[e.jsx("div",{className:"p-3 border-b border-white/20",children:e.jsx("p",{className:"text-sm font-bold text-white",children:"Manage Columns"})}),e.jsx("div",{className:"p-2",children:J.map(P=>e.jsxs("div",{className:`
                              p-2 rounded-lg
                              hover:bg-white/15
                              transition-colors
                              flex items-center justify-between
                            `,children:[e.jsx("div",{className:"flex items-center gap-2 flex-1",children:e.jsxs("button",{onClick:()=>we(P.id),className:"flex items-center gap-2",children:[P.visible?e.jsx(D0,{size:16,className:"text-blue-400"}):e.jsx($0,{size:16,className:"text-white/40"}),e.jsx("span",{className:`text-sm ${P.visible?"text-white":"text-white/40"}`,children:P.label})]})}),e.jsx("button",{onClick:()=>K(P.id),className:"p-1 hover:bg-white/15 rounded",children:P.pinned?e.jsx(Kd,{size:14,className:"text-blue-400"}):e.jsx(Mm,{size:14,className:"text-white/40"})})]},P.id))})]})]})]}),e.jsxs("button",{className:`
                px-4 py-2.5 rounded-xl
                bg-white/10 hover:bg-white/20
                border border-white/20
                text-white
                transition-colors
                flex items-center gap-2
              `,children:[e.jsx(qn,{size:18}),e.jsx("span",{className:"hidden sm:inline",children:"Export"})]})]})]}),e.jsxs("div",{className:"flex items-center gap-4 mt-4 flex-wrap",children:[e.jsx("span",{className:"text-white/70 text-sm",children:"Rows per page:"}),[10,25,50,100].map(P=>e.jsx("button",{onClick:()=>{m(P),h(1)},className:`
                  px-3 py-1 rounded-lg text-sm
                  transition-colors
                  ${x===P?"bg-blue-500/30 text-blue-300 border border-blue-400/50":"bg-white/10 text-white/70 border border-white/20 hover:bg-white/20"}
                `,children:P},P))]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium w-12",children:e.jsx($s,{size:16,className:"opacity-0"})}),nt.map((P,Q)=>e.jsx("th",{draggable:!0,onDragStart:()=>Le(Q),onDragOver:F=>$e(F,Q),onDragEnd:()=>R(null),className:`
                      px-4 py-3 text-left text-white/70 text-sm font-medium
                      group cursor-move
                      ${P.pinned?"bg-blue-500/10":""}
                    `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(O0,{size:14,className:"text-white/30 group-hover:text-white/60"}),P.pinned&&e.jsx(Kd,{size:14,className:"text-blue-400"}),e.jsx("span",{children:P.label}),P.sortable&&e.jsx("button",{onClick:()=>ne(P.id),className:"hover:text-white transition-colors",children:g===P.id?y==="asc"?e.jsx(p0,{size:16}):e.jsx($s,{size:16}):e.jsx(ka,{size:14,className:"opacity-40"})})]})},P.id))]})}),e.jsx("tbody",{children:ke.flatMap(P=>{const Q=_.has(P.id),F=[e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-4 py-3",children:e.jsx("button",{onClick:()=>ge(P.id),className:"text-white/70 hover:text-white transition-colors",children:Q?e.jsx($s,{size:16}):e.jsx(Qt,{size:16})})}),nt.map(W=>e.jsx("td",{className:`
                          px-4 py-3 text-white/90 text-sm
                          ${W.pinned?"bg-blue-500/5":""}
                        `,children:W.id==="status"?e.jsx("span",{className:`
                            px-2 py-1 rounded-lg text-xs
                            border backdrop-blur-sm
                            ${Ue(P[W.id])}
                          `,children:P[W.id]}):W.id==="salary"?`$${P[W.id].toLocaleString()}`:P[W.id]},W.id))]},`row-${P.id}`)];return Q&&F.push(e.jsx("tr",{className:"bg-white/5",children:e.jsx("td",{colSpan:nt.length+1,className:"px-4 py-4",children:e.jsxs("div",{className:`
                          backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
                          border border-white/20
                          rounded-xl
                          p-4
                        `,children:[e.jsx("h4",{className:"text-white font-bold mb-3",children:"Detailed Information"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Full Name"}),e.jsx("p",{className:"text-white text-sm",children:P.name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Email Address"}),e.jsx("p",{className:"text-white text-sm",children:P.email})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Role & Department"}),e.jsxs("p",{className:"text-white text-sm",children:[P.role," - ",P.department]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Location"}),e.jsx("p",{className:"text-white text-sm",children:P.location})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Join Date"}),e.jsx("p",{className:"text-white text-sm",children:P.joinDate})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-white/60 text-xs mb-1",children:"Active Projects"}),e.jsxs("p",{className:"text-white text-sm",children:[P.projects," projects"]})]})]})]})})},`expanded-${P.id}`)),F})})]})}),e.jsx("div",{className:"p-4 border-t border-white/10 bg-white/5",children:e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4",children:[e.jsxs("p",{className:"text-white/70 text-sm",children:["Showing ",(c-1)*x+1," to ",Math.min(c*x,Ne.length)," of ",Ne.length," results"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>h(1),disabled:c===1,className:`
                  p-2 rounded-lg
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(mu,{size:18})}),e.jsx("button",{onClick:()=>h(Math.max(1,c-1)),disabled:c===1,className:`
                  p-2 rounded-lg
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(yl,{size:18})}),e.jsx("div",{className:"flex gap-1",children:Array.from({length:Math.min(5,fe)},(P,Q)=>{let F;return fe<=5||c<=3?F=Q+1:c>=fe-2?F=fe-4+Q:F=c-2+Q,e.jsx("button",{onClick:()=>h(F),className:`
                        px-3 py-2 rounded-lg text-sm
                        transition-colors
                        ${c===F?"bg-blue-500/30 text-blue-300 border border-blue-400/50":"bg-white/10 text-white/70 border border-white/20 hover:bg-white/20"}
                      `,children:F},F)})}),e.jsx("button",{onClick:()=>h(Math.min(fe,c+1)),disabled:c===fe,className:`
                  p-2 rounded-lg
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(Qt,{size:18})}),e.jsx("button",{onClick:()=>h(fe),disabled:c===fe,className:`
                  p-2 rounded-lg
                  bg-white/10 hover:bg-white/20
                  border border-white/20
                  text-white
                  disabled:opacity-30 disabled:cursor-not-allowed
                  transition-colors
                `,children:e.jsx(pu,{size:18})})]})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-500/20 flex items-center justify-center mb-4",children:e.jsx(ut,{className:"text-blue-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Search & Filter"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Real-time search across all columns with instant filtering"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center mb-4",children:e.jsx(ka,{className:"text-purple-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Column Sorting"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Sort by any column in ascending or descending order"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400/20 to-red-500/20 flex items-center justify-center mb-4",children:e.jsx(fs,{className:"text-pink-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Column Management"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Show/hide, pin, and drag columns to customize your view"})]}),e.jsxs("div",{className:`
          p-6 rounded-2xl
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
        `,children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-400/20 to-blue-500/20 flex items-center justify-center mb-4",children:e.jsx($s,{className:"text-green-300",size:24})}),e.jsx("h3",{className:"text-white text-lg font-bold mb-2",children:"Row Expansion"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Expand rows to see detailed information in a clean layout"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Simple Table"}),e.jsx("div",{className:`
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Product"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Category"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Price"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Stock"}),e.jsx("th",{className:"px-4 py-3 text-left text-white/70 text-sm font-medium",children:"Status"})]})}),e.jsx("tbody",{children:[{product:'Laptop Pro 15"',category:"Electronics",price:"$1,299",stock:45,status:"In Stock"},{product:"Wireless Mouse",category:"Accessories",price:"$29",stock:120,status:"In Stock"},{product:"USB-C Cable",category:"Accessories",price:"$15",stock:0,status:"Out of Stock"},{product:'Monitor 27"',category:"Electronics",price:"$399",stock:12,status:"Low Stock"},{product:"Keyboard Mechanical",category:"Accessories",price:"$89",stock:67,status:"In Stock"}].map((P,Q)=>e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.product}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.category}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm font-medium",children:P.price}),e.jsx("td",{className:"px-4 py-3 text-white/90 text-sm",children:P.stock}),e.jsx("td",{className:"px-4 py-3",children:e.jsx("span",{className:`
                        px-2 py-1 rounded-lg text-xs border backdrop-blur-sm
                        ${P.status==="In Stock"?"bg-green-500/20 text-green-300 border-green-500/30":""}
                        ${P.status==="Out of Stock"?"bg-red-500/20 text-red-300 border-red-500/30":""}
                        ${P.status==="Low Stock"?"bg-yellow-500/20 text-yellow-300 border-yellow-500/30":""}
                      `,children:P.status})})]},Q))})]})})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Compact Table"}),e.jsx("div",{className:`
          backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
          border border-white/20
          rounded-3xl
          overflow-hidden
          shadow-2xl
        `,children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-white/5 border-b border-white/10",children:[e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Task"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Assignee"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Priority"}),e.jsx("th",{className:"px-3 py-2 text-left text-white/70 text-xs font-medium",children:"Due Date"})]})}),e.jsx("tbody",{children:[{task:"Update documentation",assignee:"John S.",priority:"High",date:"2024-03-20"},{task:"Fix login bug",assignee:"Sarah J.",priority:"Critical",date:"2024-03-18"},{task:"Design new homepage",assignee:"Mike C.",priority:"Medium",date:"2024-03-25"},{task:"Code review",assignee:"Emma D.",priority:"Low",date:"2024-03-22"},{task:"Deploy to staging",assignee:"James W.",priority:"High",date:"2024-03-19"}].map((P,Q)=>e.jsxs("tr",{className:"border-b border-white/5 hover:bg-white/5 transition-colors",children:[e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.task}),e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.assignee}),e.jsx("td",{className:"px-3 py-2",children:e.jsx("span",{className:`
                        px-1.5 py-0.5 rounded text-xs border backdrop-blur-sm
                        ${P.priority==="Critical"?"bg-red-500/20 text-red-300 border-red-500/30":""}
                        ${P.priority==="High"?"bg-orange-500/20 text-orange-300 border-orange-500/30":""}
                        ${P.priority==="Medium"?"bg-yellow-500/20 text-yellow-300 border-yellow-500/30":""}
                        ${P.priority==="Low"?"bg-green-500/20 text-green-300 border-green-500/30":""}
                      `,children:P.priority})}),e.jsx("td",{className:"px-3 py-2 text-white/90 text-xs",children:P.date})]},Q))})]})})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-2xl font-bold text-white text-center",children:"Code Sample"}),e.jsx(ce,{code:de.tableSection})]})]})}function Mf(){const{toasts:o,addToast:d,removeToast:c}=Ep(),[h,x]=I.useState(!1),m=[{id:"home",label:"Home",icon:e.jsx(Nl,{size:20})},{id:"buttons",label:"Buttons",icon:e.jsx(Qd,{size:20})},{id:"calendar",label:"Calendar",icon:e.jsx(Qn,{size:20})},{id:"cards",label:"Cards",icon:e.jsx(Ud,{size:20})},{id:"chat",label:"Chat",icon:e.jsx(_a,{size:20})},{id:"charts",label:"Charts & Graphs",icon:e.jsx(Sa,{size:20})},{id:"checkboxradio",label:"Checkbox & Radio",icon:e.jsx(su,{size:20})},{id:"color",label:"Color",icon:e.jsx(Wn,{size:20})},{id:"data",label:"Data Display",icon:e.jsx(Hd,{size:20})},{id:"feedback",label:"Feedback",icon:e.jsx(nn,{size:20})},{id:"forms",label:"Forms & Inputs",icon:e.jsx(Xd,{size:20})},{id:"grid",label:"Grid Layout",icon:e.jsx(Wd,{size:20})},{id:"icons",label:"Icons",icon:e.jsx(Vd,{size:20})},{id:"layout",label:"Layout",icon:e.jsx(gl,{size:20})},{id:"loading",label:"Loading",icon:e.jsx(Yd,{size:20})},{id:"logo",label:"Logo",icon:e.jsx(tu,{size:20})},{id:"message",label:"Message",icon:e.jsx($a,{size:20})},{id:"modal",label:"Modal",icon:e.jsx(Ma,{size:20})},{id:"navigation",label:"Navigation",icon:e.jsx(qd,{size:20})},{id:"tooltip",label:"Popover & Tooltip",icon:e.jsx(Jn,{size:20})},{id:"search",label:"Search",icon:e.jsx(ut,{size:20})},{id:"table",label:"Table",icon:e.jsx(nu,{size:20})},{id:"toggle",label:"Toggle",icon:e.jsx(lu,{size:20})},{id:"fonts",label:"Typography",icon:e.jsx(Da,{size:20})},{id:"usmap",label:"Map",icon:e.jsx(fl,{size:20})}],g=m.map(y=>y.id),j=Mp(g,150);return e.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[e.jsxs("div",{className:"fixed inset-0 -z-10",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900"}),e.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"}),e.jsx("div",{className:"absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"}),e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"})]}),e.jsx($p,{toasts:o,onClose:c}),e.jsx(zp,{items:m,activeSection:j,onNavigate:ze,onCollapseChange:x}),e.jsx("div",{className:`
        py-12 px-8
        transition-all duration-300
        ${h?"ml-20":"ml-80"}
      `,children:e.jsxs("div",{className:"max-w-7xl mx-auto space-y-24",children:[e.jsx("section",{id:"home",className:"min-h-screen flex items-center justify-center",children:e.jsxs("div",{className:"w-full space-y-12",children:[e.jsxs("div",{className:"text-center space-y-6",children:[e.jsx("div",{className:"flex justify-center mb-8",children:e.jsxs("div",{className:`
                    w-24 h-24 
                    rounded-3xl
                    bg-gradient-to-br from-blue-400/20 to-purple-500/20
                    backdrop-blur-md
                    border border-white/20
                    flex items-center justify-center
                    relative overflow-hidden
                    animate-pulse
                  `,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"}),e.jsx(Wn,{className:"text-white relative z-10",size:48})]})}),e.jsx("h1",{className:"text-7xl text-white font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent",children:"Wen's Project Liquid Glass"}),e.jsx("p",{className:"text-2xl text-white/70 max-w-3xl mx-auto",children:"A complete design system with glassmorphism components for modern web and mobile applications"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Components"}),e.jsx("p",{className:"text-white text-5xl font-bold group-hover:scale-110 transition-transform",children:"60+"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"})]})}),e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Categories"}),e.jsx("p",{className:"text-white text-5xl font-bold group-hover:scale-110 transition-transform",children:"24"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"})]})}),e.jsx("div",{className:`
                  p-6 rounded-2xl
                  backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5
                  border border-white/20
                  hover:border-white/30
                  transition-all duration-300
                  group
                `,children:e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("p",{className:"text-white/60 text-sm font-medium",children:"Variations"}),e.jsx("p",{className:"text-white text-5xl font-bold group-hover:scale-110 transition-transform",children:"150+"}),e.jsx("div",{className:"h-1 w-16 mx-auto bg-gradient-to-r from-pink-400 to-blue-500 rounded-full"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-3xl text-white font-bold text-center",children:"Explore Components"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsx("button",{onClick:()=>ze("logo"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(tu,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Logo"}),e.jsx("p",{className:"text-white/60 text-sm",children:"12 brand identity variations"})]})]})}),e.jsx("button",{onClick:()=>ze("search"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(ut,{className:"text-purple-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Search"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Smart search & filters"})]})]})}),e.jsx("button",{onClick:()=>ze("buttons"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Qd,{className:"text-pink-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Buttons"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Interactive button styles"})]})]})}),e.jsx("button",{onClick:()=>ze("charts"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-cyan-400/50
                      hover:shadow-2xl hover:shadow-cyan-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-cyan-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Sa,{className:"text-cyan-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Charts & Graphs"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Data visualization tools"})]})]})}),e.jsx("button",{onClick:()=>ze("fonts"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-indigo-400/50
                      hover:shadow-2xl hover:shadow-indigo-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-indigo-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Da,{className:"text-indigo-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Typography"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Font families & pickers"})]})]})}),e.jsx("button",{onClick:()=>ze("forms"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Xd,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Forms & Inputs"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Form controls & validation"})]})]})}),e.jsx("button",{onClick:()=>ze("tooltip"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10
                      border border-white/20
                      hover:border-yellow-400/50
                      hover:shadow-2xl hover:shadow-yellow-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-yellow-400/20 to-orange-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Jn,{className:"text-yellow-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Popover & Tooltip"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Contextual information"})]})]})}),e.jsx("button",{onClick:()=>ze("grid"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-rose-400/50
                      hover:shadow-2xl hover:shadow-rose-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-rose-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Wd,{className:"text-rose-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Grid Layout"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Flexible grid systems"})]})]})}),e.jsx("button",{onClick:()=>ze("calendar"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-violet-400/50
                      hover:shadow-2xl hover:shadow-violet-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-violet-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Qn,{className:"text-violet-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Calendar"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Date pickers & calendars"})]})]})}),e.jsx("button",{onClick:()=>ze("cards"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10
                      border border-white/20
                      hover:border-teal-400/50
                      hover:shadow-2xl hover:shadow-teal-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-teal-400/20 to-cyan-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Ud,{className:"text-teal-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Cards"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Content card layouts"})]})]})}),e.jsx("button",{onClick:()=>ze("modal"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Ma,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Modal"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Dialog & modal windows"})]})]})}),e.jsx("button",{onClick:()=>ze("message"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10
                      border border-white/20
                      hover:border-fuchsia-400/50
                      hover:shadow-2xl hover:shadow-fuchsia-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-fuchsia-400/20 to-pink-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx($a,{className:"text-fuchsia-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Message"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Messaging & chat UI"})]})]})}),e.jsx("button",{onClick:()=>ze("loading"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10
                      border border-white/20
                      hover:border-amber-400/50
                      hover:shadow-2xl hover:shadow-amber-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-amber-400/20 to-yellow-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Yd,{className:"text-amber-300 animate-spin",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Loading"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Loading indicators"})]})]})}),e.jsx("button",{onClick:()=>ze("layout"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-lime-500/10 to-green-500/10
                      border border-white/20
                      hover:border-lime-400/50
                      hover:shadow-2xl hover:shadow-lime-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-lime-400/20 to-green-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(gl,{className:"text-lime-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Layout"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Page layouts & sections"})]})]})}),e.jsx("button",{onClick:()=>ze("feedback"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10
                      border border-white/20
                      hover:border-sky-400/50
                      hover:shadow-2xl hover:shadow-sky-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-sky-400/20 to-blue-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(nn,{className:"text-sky-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Feedback"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Alerts & notifications"})]})]})}),e.jsx("button",{onClick:()=>ze("navigation"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10
                      border border-white/20
                      hover:border-purple-400/50
                      hover:shadow-2xl hover:shadow-purple-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-purple-400/20 to-fuchsia-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(qd,{className:"text-purple-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Navigation"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Navbars & menus"})]})]})}),e.jsx("button",{onClick:()=>ze("usmap"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-emerald-400/50
                      hover:shadow-2xl hover:shadow-emerald-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-emerald-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(fl,{className:"text-emerald-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Map"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Interactive map visualizations"})]})]})}),e.jsx("button",{onClick:()=>ze("data"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-slate-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-slate-400/50
                      hover:shadow-2xl hover:shadow-slate-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-slate-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Hd,{className:"text-slate-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Data Display"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Tables & data views"})]})]})}),e.jsx("button",{onClick:()=>ze("color"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10
                      border border-white/20
                      hover:border-pink-400/50
                      hover:shadow-2xl hover:shadow-pink-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-pink-400/20 to-purple-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Wn,{className:"text-pink-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Color"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Color palette & pickers"})]})]})}),e.jsx("button",{onClick:()=>ze("toggle"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(lu,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Toggle"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Toggle switches"})]})]})}),e.jsx("button",{onClick:()=>ze("checkboxradio"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-emerald-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(su,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Checkbox & Radio"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Checkbox & radio buttons"})]})]})}),e.jsx("button",{onClick:()=>ze("icons"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-gray-500/10 to-gray-500/10
                      border border-white/20
                      hover:border-gray-400/50
                      hover:shadow-2xl hover:shadow-gray-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-gray-400/20 to-gray-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(Vd,{className:"text-gray-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Icons"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Icon library"})]})]})}),e.jsx("button",{onClick:()=>ze("chat"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                      border border-white/20
                      hover:border-blue-400/50
                      hover:shadow-2xl hover:shadow-blue-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-blue-400/20 to-indigo-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(_a,{className:"text-blue-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Chat"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Chat UI"})]})]})}),e.jsx("button",{onClick:()=>ze("table"),className:`
                      group p-6 rounded-2xl
                      backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-teal-500/10
                      border border-white/20
                      hover:border-green-400/50
                      hover:shadow-2xl hover:shadow-green-500/20
                      transition-all duration-300
                      text-left
                      hover:scale-105
                    `,children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                        w-14 h-14 rounded-xl
                        bg-gradient-to-br from-green-400/20 to-teal-500/20
                        flex items-center justify-center
                        group-hover:scale-110 transition-transform
                      `,children:e.jsx(nu,{className:"text-green-300",size:28})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:"Table"}),e.jsx("p",{className:"text-white/60 text-sm",children:"Advanced data tables"})]})]})})]})]})]})}),e.jsx("section",{id:"buttons",children:e.jsx(of,{addToast:d})}),e.jsx("section",{id:"calendar",children:e.jsx(hf,{addToast:d})}),e.jsx("section",{id:"cards",children:e.jsx(xf,{})}),e.jsx("section",{id:"chat",children:e.jsx(Cf,{})}),e.jsx("section",{id:"charts",children:e.jsx(Fp,{addToast:d})}),e.jsx("section",{id:"checkboxradio",children:e.jsx(kf,{addToast:d})}),e.jsx("section",{id:"color",children:e.jsx(yf,{})}),e.jsx("section",{id:"data",children:e.jsx(rf,{})}),e.jsx("section",{id:"feedback",children:e.jsx(Qp,{addToast:d})}),e.jsx("section",{id:"forms",children:e.jsx(Wp,{addToast:d})}),e.jsx("section",{id:"grid",children:e.jsx(df,{})}),e.jsx("section",{id:"icons",children:e.jsx(Sf,{addToast:d})}),e.jsx("section",{id:"layout",children:e.jsx(Yp,{})}),e.jsx("section",{id:"loading",children:e.jsx(gf,{})}),e.jsx("section",{id:"logo",children:e.jsx(jf,{})}),e.jsx("section",{id:"message",children:e.jsx(pf,{addToast:d})}),e.jsx("section",{id:"modal",children:e.jsx(mf,{})}),e.jsx("section",{id:"navigation",children:e.jsx(tf,{})}),e.jsx("section",{id:"tooltip",children:e.jsx(cf,{addToast:d})}),e.jsx("section",{id:"search",children:e.jsx(af,{addToast:d})}),e.jsx("section",{id:"table",children:e.jsx(zf,{})}),e.jsx("section",{id:"toggle",children:e.jsx(Nf,{addToast:d})}),e.jsx("section",{id:"fonts",children:e.jsx(Gp,{})}),e.jsx("section",{id:"usmap",children:e.jsx(ff,{addToast:d})})]})})]})}Dx.createRoot(document.getElementById("root")).render(e.jsx(Mf,{}));
