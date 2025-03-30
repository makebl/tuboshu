import{i as W}from"./headers-D8FUoNjy.js";import{c as G,t as K}from"./Tag-Cmiydkmj.js";import{i as N,e as C,cs as V,ct as q,c as P,l as H,f as D,cu as U,h as y,p as X,cv as Y,A as J,r as x,y as T,z as R,B,cw as Q,E as Z,G as ee,b as re,M as te,a as oe,w as ne}from"./index-qr2Js23o.js";const se=W&&"loading"in document.createElement("img");function ae(e={}){var a;const{root:l=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof l=="string"?document.querySelector(l):l)||document.documentElement})}}const F=new WeakMap,M=new WeakMap,_=new WeakMap,ie=(e,a,l)=>{if(!e)return()=>{};const i=ae(a),{root:d}=i.options;let n;const c=F.get(d);c?n=c:(n=new Map,F.set(d,n));let h,o;n.has(i.hash)?(o=n.get(i.hash),o[1].has(e)||(h=o[0],o[1].add(e),h.observe(e))):(h=new IntersectionObserver(p=>{p.forEach(f=>{if(f.isIntersecting){const m=M.get(f.target),O=_.get(f.target);m&&m(),O&&(O.value=!0)}})},i.options),h.observe(e),o=[h,new Set([e])],n.set(i.hash,o));let u=!1;const g=()=>{u||(M.delete(e),_.delete(e),u=!0,o[1].has(e)&&(o[0].unobserve(e),o[1].delete(e)),o[1].size<=0&&n.delete(i.hash),n.size||F.delete(d))};return M.set(e,g),_.set(e,l),g},le=N("n-avatar-group"),de=C("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[V(P("&","--n-merged-color: var(--n-color-modal);")),q(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),C("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},B.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),he=D({name:"Avatar",props:ce,slots:Object,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=J(e),i=x(!1);let d=null;const n=x(null),c=x(null),h=()=>{const{value:r}=n;if(r&&(d===null||d!==r.innerHTML)){d=r.innerHTML;const{value:t}=c;if(t){const{offsetWidth:s,offsetHeight:b}=t,{offsetWidth:v,offsetHeight:j}=r,E=.9,L=Math.min(s/v*E,b/j*E,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},o=T(le,null),u=R(()=>{const{size:r}=e;if(r)return r;const{size:t}=o||{};return t||"medium"}),g=B("Avatar","-avatar",de,Q,e,a),p=T(K,null),f=R(()=>{if(o)return!0;const{round:r,circle:t}=e;return r!==void 0||t!==void 0?r||t:p?p.roundRef.value:!1}),m=R(()=>o?!0:e.bordered||!1),O=R(()=>{const r=u.value,t=f.value,s=m.value,{color:b}=e,{self:{borderRadius:v,fontSize:j,color:E,border:L,colorModal:$,colorPopover:A},common:{cubicBezierEaseInOut:I}}=g.value;let w;return typeof r=="number"?w=`${r}px`:w=g.value.self[Z("height",r)],{"--n-font-size":j,"--n-border":s?L:"none","--n-border-radius":t?"50%":v,"--n-color":b||E,"--n-color-modal":b||$,"--n-color-popover":b||A,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),z=l?ee("avatar",R(()=>{const r=u.value,t=f.value,s=m.value,{color:b}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),t&&(v+="b"),s&&(v+="c"),b&&(v+=G(b)),v}),O,e):void 0,S=x(!e.lazy);re(()=>{if(e.lazy&&e.intersectionObserverOptions){let r;const t=te(()=>{r==null||r(),r=void 0,e.lazy&&(r=ie(c.value,e.intersectionObserverOptions,S))});oe(()=>{t(),r==null||r()})}}),ne(()=>{var r;return e.src||((r=e.imgProps)===null||r===void 0?void 0:r.src)},()=>{i.value=!1});const k=x(!e.lazy);return{textRef:n,selfRef:c,mergedRoundRef:f,mergedClsPrefix:a,fitTextTransform:h,cssVars:l?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:i,shouldStartLoading:S,loaded:k,mergedOnError:r=>{if(!S.value)return;i.value=!0;const{onError:t,imgProps:{onError:s}={}}=e;t==null||t(r),s==null||s(r)},mergedOnLoad:r=>{const{onLoad:t,imgProps:{onLoad:s}={}}=e;t==null||t(r),s==null||s(r),k.value=!0}}},render(){var e,a;const{$slots:l,src:i,mergedClsPrefix:d,lazy:n,onRender:c,loaded:h,hasLoadError:o,imgProps:u={}}=this;c==null||c();let g;const p=!h&&!o&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():U(l.fallback,()=>[y("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=X(l.default,f=>{if(f)return y(Y,{onResize:this.fitTextTransform},{default:()=>y("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(i||u.src){const m=this.src||u.src;return y("img",Object.assign(Object.assign({},u),{loading:se&&!this.intersectionObserverOptions&&n?"lazy":"eager",src:n&&this.intersectionObserverOptions?this.shouldStartLoading?m:void 0:m,"data-image-src":m,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},p?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),y("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},g,n&&p)}});export{he as _};
