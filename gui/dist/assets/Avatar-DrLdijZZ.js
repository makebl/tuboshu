import{i as W}from"./headers-CyxxIj5r.js";import{t as K,c as N}from"./Tag-CZumf-EW.js";import{i as V,c as C,cj as G,e as P,ck as D,k as H,d as q,x as J,r as y,s as T,v as x,p as $,cl as U,D as X,z as Y,o as Q,J as Z,a as ee,w as re,cm as oe,h as R,A as te,cn as ne}from"./index-2RN--K6t.js";const se=W&&"loading"in document.createElement("img"),ae=(e={})=>{var a;const{root:l=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(a=e.threshold)!==null&&a!==void 0?a:"0"}`,options:Object.assign(Object.assign({},e),{root:(typeof l=="string"?document.querySelector(l):l)||document.documentElement})}},F=new WeakMap,k=new WeakMap,_=new WeakMap,ie=(e,a,l)=>{if(!e)return()=>{};const i=ae(a),{root:d}=i.options;let n;const c=F.get(d);c?n=c:(n=new Map,F.set(d,n));let h,t;n.has(i.hash)?(t=n.get(i.hash),t[1].has(e)||(h=t[0],t[1].add(e),h.observe(e))):(h=new IntersectionObserver(p=>{p.forEach(f=>{if(f.isIntersecting){const m=k.get(f.target),O=_.get(f.target);m&&m(),O&&(O.value=!0)}})},i.options),h.observe(e),t=[h,new Set([e])],n.set(i.hash,t));let u=!1;const g=()=>{u||(k.delete(e),_.delete(e),u=!0,t[1].has(e)&&(t[0].unobserve(e),t[1].delete(e)),t[1].size<=0&&n.delete(i.hash),n.size||F.delete(d))};return k.set(e,g),_.set(e,l),g},le=V("n-avatar-group"),de=C("avatar",`
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
`,[G(P("&","--n-merged-color: var(--n-color-modal);")),D(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
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
 `),H("text","line-height: 1.25")]),ce=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),he=q({name:"Avatar",props:ce,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:l}=J(e),i=y(!1);let d=null;const n=y(null),c=y(null),h=()=>{const{value:r}=n;if(r&&(d===null||d!==r.innerHTML)){d=r.innerHTML;const{value:o}=c;if(o){const{offsetWidth:s,offsetHeight:b}=o,{offsetWidth:v,offsetHeight:E}=r,S=.9,L=Math.min(s/v*S,b/E*S,1);r.style.transform=`translateX(-50%) translateY(-50%) scale(${L})`}}},t=T(le,null),u=x(()=>{const{size:r}=e;if(r)return r;const{size:o}=t||{};return o||"medium"}),g=$("Avatar","-avatar",de,U,e,a),p=T(K,null),f=x(()=>{if(t)return!0;const{round:r,circle:o}=e;return r!==void 0||o!==void 0?r||o:p?p.roundRef.value:!1}),m=x(()=>t?!0:e.bordered||!1),O=x(()=>{const r=u.value,o=f.value,s=m.value,{color:b}=e,{self:{borderRadius:v,fontSize:E,color:S,border:L,colorModal:A,colorPopover:B},common:{cubicBezierEaseInOut:I}}=g.value;let w;return typeof r=="number"?w=`${r}px`:w=g.value.self[X("height",r)],{"--n-font-size":E,"--n-border":s?L:"none","--n-border-radius":o?"50%":v,"--n-color":b||S,"--n-color-modal":b||A,"--n-color-popover":b||B,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),z=l?Y("avatar",x(()=>{const r=u.value,o=f.value,s=m.value,{color:b}=e;let v="";return r&&(typeof r=="number"?v+=`a${r}`:v+=r[0]),o&&(v+="b"),s&&(v+="c"),b&&(v+=N(b)),v}),O,e):void 0,j=y(!e.lazy);Q(()=>{if(e.lazy&&e.intersectionObserverOptions){let r;const o=Z(()=>{r==null||r(),r=void 0,e.lazy&&(r=ie(c.value,e.intersectionObserverOptions,j))});ee(()=>{o(),r==null||r()})}}),re(()=>{var r;return e.src||((r=e.imgProps)===null||r===void 0?void 0:r.src)},()=>{i.value=!1});const M=y(!e.lazy);return{textRef:n,selfRef:c,mergedRoundRef:f,mergedClsPrefix:a,fitTextTransform:h,cssVars:l?void 0:O,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender,hasLoadError:i,shouldStartLoading:j,loaded:M,mergedOnError:r=>{if(!j.value)return;i.value=!0;const{onError:o,imgProps:{onError:s}={}}=e;o==null||o(r),s==null||s(r)},mergedOnLoad:r=>{const{onLoad:o,imgProps:{onLoad:s}={}}=e;o==null||o(r),s==null||s(r),M.value=!0}}},render(){var e,a;const{$slots:l,src:i,mergedClsPrefix:d,lazy:n,onRender:c,loaded:h,hasLoadError:t,imgProps:u={}}=this;c==null||c();let g;const p=!h&&!t&&(this.renderPlaceholder?this.renderPlaceholder():(a=(e=this.$slots).placeholder)===null||a===void 0?void 0:a.call(e));return this.hasLoadError?g=this.renderFallback?this.renderFallback():oe(l.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=te(l.default,f=>{if(f)return R(ne,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(i||u.src){const m=this.src||u.src;return R("img",Object.assign(Object.assign({},u),{loading:se&&!this.intersectionObserverOptions&&n?"lazy":"eager",src:n&&this.intersectionObserverOptions?this.shouldStartLoading?m:void 0:m,"data-image-src":m,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[u.style||"",{objectFit:this.objectFit},p?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},g,n&&p)}});export{he as _};
