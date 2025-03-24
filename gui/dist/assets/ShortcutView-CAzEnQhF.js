import{_ as It,a as bn}from"./_plugin-vue_export-helper-BlnRYz-c.js";import{r as _,B as z,z as Se,U as ft,d as se,A as pt,h as r,cG as mt,M as mn,cI as wn,cJ as it,cK as yn,b as je,bE as xn,bG as Cn,i as Y,cL as ht,cM as Le,af as Sn,cN as rt,w as Re,a as Mt,g as B,p as L,e as ae,a9 as kt,C as Qe,D as be,cO as Rn,G as ve,I as et,cP as ze,cQ as bt,T as Pt,l as oe,m as vt,a8 as Bt,s as wt,y as On,S as _n,ag as Tn,F as $t,cR as Fn,cS as zn,cT as De,cU as Ve,n as Et,cV as In,cW as Mn,cX as yt,aa as At,cY as kn,cZ as Pn,P as Bn,c_ as $n,c$ as En,d0 as An,d1 as gt,K as Lt,O as Ln,Q as xt,d2 as Nn,a1 as Ct,d3 as Dn,d4 as Vn,$ as jn,d5 as Wn,J as ue,ah as Ye,ai as Ne,ak as re,am as Hn,aj as xe,an as Ie,aq as Ce,au as St,al as Ze,ar as at,aw as Kn,av as Un,at as qn}from"./index-CMpVsCT4.js";import{a as Nt,N as Gn,u as Xn,b as Yn,c as Zn,_ as Jn}from"./Switch-DKBdrFsN.js";import{_ as st}from"./Tag-DZYm_qFo.js";import{m as Qn}from"./index-DsSU6HIH.js";import{_ as eo}from"./InputGroup-D8hi5lLS.js";import{N as to}from"./headers-FWJM6CJo.js";function Rt(e){return e&-e}class Dt{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let i=0;i<n+1;++i)l[i]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:i}=this;for(n+=1;n<=l;)i[n]+=o,n+=Rt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*l;for(;n>0;)u+=o[n],n-=Rt(n);return u}getBound(n){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),u=this.sum(i);if(u>n){l=i;continue}else if(u<n){if(o===i)return this.sum(o+1)<=n?o+1:i;o=i}else return i}return o}}let Xe;function no(){return typeof document>"u"?!1:(Xe===void 0&&("matchMedia"in window?Xe=window.matchMedia("(pointer:coarse)").matches:Xe=!1),Xe)}let dt;function Ot(){return typeof document>"u"?1:(dt===void 0&&(dt="chrome"in window?window.devicePixelRatio:1),dt)}const Vt="VVirtualListXScroll";function oo({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=_(0),i=_(0),u=z(()=>{const w=e.value;if(w.length===0)return null;const p=new Dt(w.length,0);return w.forEach((S,b)=>{p.add(b,S.width)}),p}),f=Se(()=>{const w=u.value;return w!==null?Math.max(w.getBound(i.value)-1,0):0}),a=w=>{const p=u.value;return p!==null?p.sum(w):0},x=Se(()=>{const w=u.value;return w!==null?Math.min(w.getBound(i.value+l.value)+1,e.value.length-1):0});return ft(Vt,{startIndexRef:f,endIndexRef:x,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:a}),{listWidthRef:l,scrollLeftRef:i}}const _t=se({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:u}=pt(Vt);return{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:u,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:i,getLeft:u,item:f}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:f,getLeft:u});if(l!=null){const a=[];for(let x=e;x<=n;++x){const w=o[x];a.push(l({column:w,left:u(x),item:f}))}return a}return null}}),lo=it(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[it("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[it("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),io=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=wn();lo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:yn,ssr:n}),je(()=>{const{defaultScrollIndex:d,defaultScrollKey:y}=e;d!=null?H({index:d}):y!=null&&H({key:y})});let o=!1,l=!1;xn(()=>{if(o=!1,!l){l=!0;return}H({top:v.value,left:f.value})}),Cn(()=>{o=!0,l||(l=!0)});const i=Se(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let d=0;return e.columns.forEach(y=>{d+=y.width}),d}),u=z(()=>{const d=new Map,{keyField:y}=e;return e.items.forEach((k,N)=>{d.set(k[y],N)}),d}),{scrollLeftRef:f,listWidthRef:a}=oo({columnsRef:Y(e,"columns"),renderColRef:Y(e,"renderCol"),renderItemWithColsRef:Y(e,"renderItemWithCols")}),x=_(null),w=_(void 0),p=new Map,S=z(()=>{const{items:d,itemSize:y,keyField:k}=e,N=new Dt(d.length,y);return d.forEach((U,V)=>{const j=U[k],E=p.get(j);E!==void 0&&N.add(V,E)}),N}),b=_(0),v=_(0),C=Se(()=>Math.max(S.value.getBound(v.value-ht(e.paddingTop))-1,0)),$=z(()=>{const{value:d}=w;if(d===void 0)return[];const{items:y,itemSize:k}=e,N=C.value,U=Math.min(N+Math.ceil(d/k+1),y.length-1),V=[];for(let j=N;j<=U;++j)V.push(y[j]);return V}),H=(d,y)=>{if(typeof d=="number"){W(d,y,"auto");return}const{left:k,top:N,index:U,key:V,position:j,behavior:E,debounce:G=!0}=d;if(k!==void 0||N!==void 0)W(k,N,E);else if(U!==void 0)D(U,E,G);else if(V!==void 0){const c=u.value.get(V);c!==void 0&&D(c,E,G)}else j==="bottom"?W(0,Number.MAX_SAFE_INTEGER,E):j==="top"&&W(0,0,E)};let T,O=null;function D(d,y,k){const{value:N}=S,U=N.sum(d)+ht(e.paddingTop);if(!k)x.value.scrollTo({left:0,top:U,behavior:y});else{T=d,O!==null&&window.clearTimeout(O),O=window.setTimeout(()=>{T=void 0,O=null},16);const{scrollTop:V,offsetHeight:j}=x.value;if(U>V){const E=N.get(d);U+E<=V+j||x.value.scrollTo({left:0,top:U+E-j,behavior:y})}else x.value.scrollTo({left:0,top:U,behavior:y})}}function W(d,y,k){x.value.scrollTo({left:d,top:y,behavior:k})}function K(d,y){var k,N,U;if(o||e.ignoreItemResize||ie(y.target))return;const{value:V}=S,j=u.value.get(d),E=V.get(j),G=(U=(N=(k=y.borderBoxSize)===null||k===void 0?void 0:k[0])===null||N===void 0?void 0:N.blockSize)!==null&&U!==void 0?U:y.contentRect.height;if(G===E)return;G-e.itemSize===0?p.delete(d):p.set(d,G-e.itemSize);const g=G-E;if(g===0)return;V.add(j,g);const A=x.value;if(A!=null){if(T===void 0){const te=V.sum(j);A.scrollTop>te&&A.scrollBy(0,g)}else if(j<T)A.scrollBy(0,g);else if(j===T){const te=V.sum(j);G+te>A.scrollTop+A.offsetHeight&&A.scrollBy(0,g)}ee()}b.value++}const Q=!no();let Z=!1;function ce(d){var y;(y=e.onScroll)===null||y===void 0||y.call(e,d),(!Q||!Z)&&ee()}function fe(d){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,d),Q){const k=x.value;if(k!=null){if(d.deltaX===0&&(k.scrollTop===0&&d.deltaY<=0||k.scrollTop+k.offsetHeight>=k.scrollHeight&&d.deltaY>=0))return;d.preventDefault(),k.scrollTop+=d.deltaY/Ot(),k.scrollLeft+=d.deltaX/Ot(),ee(),Z=!0,Sn(()=>{Z=!1})}}}function le(d){if(o||ie(d.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(d.contentRect.height===w.value)return}else if(d.contentRect.height===w.value&&d.contentRect.width===a.value)return;w.value=d.contentRect.height,a.value=d.contentRect.width;const{onResize:y}=e;y!==void 0&&y(d)}function ee(){const{value:d}=x;d!=null&&(v.value=d.scrollTop,f.value=d.scrollLeft)}function ie(d){let y=d;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:w,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:z(()=>{const{itemResizable:d}=e,y=Le(S.value.sum());return b.value,[e.itemsStyle,{boxSizing:"content-box",width:Le(i.value),height:d?"":y,minHeight:d?y:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:z(()=>(b.value,{transform:`translateY(${Le(S.value.sum(C.value))})`})),viewportItems:$,listElRef:x,itemsElRef:_(null),scrollTo:H,handleListResize:le,handleListScroll:ce,handleListWheel:fe,handleItemResize:K}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return r(mt,{onResize:this.handleListResize},{default:()=>{var i,u;return r("div",mn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:f,renderItemWithCols:a}=this;return this.viewportItems.map(x=>{const w=x[n],p=o.get(w),S=f!=null?r(_t,{index:p,item:x}):void 0,b=a!=null?r(_t,{index:p,item:x}):void 0,v=this.$slots.default({item:x,renderedCols:S,renderedItemWithCols:b,index:p})[0];return e?r(mt,{key:w,onResize:C=>this.handleItemResize(w,C)},{default:()=>v}):(v.key=w,v)})}})]):(u=(i=this.$slots).empty)===null||u===void 0?void 0:u.call(i)])}})}});function jt(e,n){n&&(je(()=>{const{value:o}=e;o&&rt.registerHandler(o,n)}),Re(e,(o,l)=>{l&&rt.unregisterHandler(l)},{deep:!1}),Mt(()=>{const{value:o}=e;o&&rt.unregisterHandler(o)}))}function Tt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ut(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const ro=se({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),ao=se({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),so=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),uo=B("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[L("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ae("+",[L("description",`
 margin-top: 8px;
 `)])]),L("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),L("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),co=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),fo=se({name:"Empty",props:co,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:l}=Qe(e),i=be("Empty","-empty",uo,Rn,e,n),{localeRef:u}=Nt("Empty"),f=z(()=>{var p,S,b;return(p=e.description)!==null&&p!==void 0?p:(b=(S=l==null?void 0:l.value)===null||S===void 0?void 0:S.Empty)===null||b===void 0?void 0:b.description}),a=z(()=>{var p,S;return((S=(p=l==null?void 0:l.value)===null||p===void 0?void 0:p.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>r(ao,null))}),x=z(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:S},self:{[ve("iconSize",p)]:b,[ve("fontSize",p)]:v,textColor:C,iconColor:$,extraTextColor:H}}=i.value;return{"--n-icon-size":b,"--n-font-size":v,"--n-bezier":S,"--n-text-color":C,"--n-icon-color":$,"--n-extra-text-color":H}}),w=o?et("empty",z(()=>{let p="";const{size:S}=e;return p+=S[0],p}),x,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:a,localizedDescription:z(()=>f.value||u.value.description),cssVars:o?void 0:x,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),r("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${n}-empty__icon`},e.icon?e.icon():r(kt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${n}-empty__extra`},e.extra()):null)}}),Ft=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=pt(bt);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,u=l==null?void 0:l(i),f=n?n(i,!1):ze(i[this.labelField],i,!1),a=r("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),f);return i.render?i.render({node:a,option:i}):o?o({node:a,option:i,selected:!1}):a}});function ho(e,n){return r(Pt,{name:"fade-in-scale-up-transition"},{default:()=>e?r(kt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>r(ro)}):null})}const zt=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:u,renderOptionRef:f,labelFieldRef:a,valueFieldRef:x,showCheckmarkRef:w,nodePropsRef:p,handleOptionClick:S,handleOptionMouseEnter:b}=pt(bt),v=Se(()=>{const{value:T}=o;return T?e.tmNode.key===T.key:!1});function C(T){const{tmNode:O}=e;O.disabled||S(T,O)}function $(T){const{tmNode:O}=e;O.disabled||b(T,O)}function H(T){const{tmNode:O}=e,{value:D}=v;O.disabled||D||b(T,O)}return{multiple:l,isGrouped:Se(()=>{const{tmNode:T}=e,{parent:O}=T;return O&&O.rawNode.type==="group"}),showCheckmark:w,nodeProps:p,isPending:v,isSelected:Se(()=>{const{value:T}=n,{value:O}=l;if(T===null)return!1;const D=e.tmNode.rawNode[x.value];if(O){const{value:W}=i;return W.has(D)}else return T===D}),labelField:a,renderLabel:u,renderOption:f,handleMouseMove:H,handleMouseEnter:$,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:i,showCheckmark:u,nodeProps:f,renderOption:a,renderLabel:x,handleClick:w,handleMouseEnter:p,handleMouseMove:S}=this,b=ho(o,e),v=x?[x(n,o),u&&b]:[ze(n[this.labelField],n,o),u&&b],C=f==null?void 0:f(n),$=r("div",Object.assign({},C,{class:[`${e}-base-select-option`,n.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:u}],style:[(C==null?void 0:C.style)||"",n.style||""],onClick:ut([w,C==null?void 0:C.onClick]),onMouseenter:ut([p,C==null?void 0:C.onMouseenter]),onMousemove:ut([S,C==null?void 0:C.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},v));return n.render?n.render({node:$,option:n,selected:o}):a?a({node:$,option:n,selected:o}):$}}),vo=B("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[B("scrollbar",`
 max-height: var(--n-height);
 `),B("virtual-list",`
 max-height: var(--n-height);
 `),B("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[L("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),B("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),B("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),L("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),L("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),L("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),B("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),B("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[oe("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ae("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ae("&:active",`
 color: var(--n-option-text-color-pressed);
 `),oe("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),oe("pending",[ae("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),oe("selected",`
 color: var(--n-option-text-color-active);
 `,[ae("&::before",`
 background-color: var(--n-option-color-active);
 `),oe("pending",[ae("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),oe("disabled",`
 cursor: not-allowed;
 `,[vt("selected",`
 color: var(--n-option-text-color-disabled);
 `),oe("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),L("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Bt({enterScale:"0.5"})])])]),go=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Qe(e),l=$t("InternalSelectMenu",o,n),i=be("InternalSelectMenu","-internal-select-menu",vo,Fn,e,Y(e,"clsPrefix")),u=_(null),f=_(null),a=_(null),x=z(()=>e.treeMate.getFlattenedNodes()),w=z(()=>zn(x.value)),p=_(null);function S(){const{treeMate:c}=e;let g=null;const{value:A}=e;A===null?g=c.getFirstAvailableNode():(e.multiple?g=c.getNode((A||[])[(A||[]).length-1]):g=c.getNode(A),(!g||g.disabled)&&(g=c.getFirstAvailableNode())),y(g||null)}function b(){const{value:c}=p;c&&!e.treeMate.getNode(c.key)&&(p.value=null)}let v;Re(()=>e.show,c=>{c?v=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():b(),Et(k)):b()},{immediate:!0}):v==null||v()},{immediate:!0}),Mt(()=>{v==null||v()});const C=z(()=>ht(i.value.self[ve("optionHeight",e.size)])),$=z(()=>De(i.value.self[ve("padding",e.size)])),H=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=z(()=>{const c=x.value;return c&&c.length===0});function O(c){const{onToggle:g}=e;g&&g(c)}function D(c){const{onScroll:g}=e;g&&g(c)}function W(c){var g;(g=a.value)===null||g===void 0||g.sync(),D(c)}function K(){var c;(c=a.value)===null||c===void 0||c.sync()}function Q(){const{value:c}=p;return c||null}function Z(c,g){g.disabled||y(g,!1)}function ce(c,g){g.disabled||O(g)}function fe(c){var g;Ve(c,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,c)}function le(c){var g;Ve(c,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,c)}function ee(c){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,c),!e.focusable&&c.preventDefault()}function ie(){const{value:c}=p;c&&y(c.getNext({loop:!0}),!0)}function d(){const{value:c}=p;c&&y(c.getPrev({loop:!0}),!0)}function y(c,g=!1){p.value=c,g&&k()}function k(){var c,g;const A=p.value;if(!A)return;const te=w.value(A.key);te!==null&&(e.virtualScroll?(c=f.value)===null||c===void 0||c.scrollTo({index:te}):(g=a.value)===null||g===void 0||g.scrollTo({index:te,elSize:C.value}))}function N(c){var g,A;!((g=u.value)===null||g===void 0)&&g.contains(c.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,c))}function U(c){var g,A;!((g=u.value)===null||g===void 0)&&g.contains(c.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,c)}ft(bt,{handleOptionMouseEnter:Z,handleOptionClick:ce,valueSetRef:H,pendingTmNodeRef:p,nodePropsRef:Y(e,"nodeProps"),showCheckmarkRef:Y(e,"showCheckmark"),multipleRef:Y(e,"multiple"),valueRef:Y(e,"value"),renderLabelRef:Y(e,"renderLabel"),renderOptionRef:Y(e,"renderOption"),labelFieldRef:Y(e,"labelField"),valueFieldRef:Y(e,"valueField")}),ft(In,u),je(()=>{const{value:c}=a;c&&c.sync()});const V=z(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:g},self:{height:A,borderRadius:te,color:Oe,groupHeaderTextColor:_e,actionDividerColor:he,optionTextColorPressed:ne,optionTextColor:Te,optionTextColorDisabled:ge,optionTextColorActive:Me,optionOpacityDisabled:ke,optionCheckColor:Pe,actionTextColor:Be,optionColorPending:me,optionColorActive:we,loadingColor:$e,loadingSize:Ee,optionColorActivePending:Ae,[ve("optionFontSize",c)]:Fe,[ve("optionHeight",c)]:ye,[ve("optionPadding",c)]:J}}=i.value;return{"--n-height":A,"--n-action-divider-color":he,"--n-action-text-color":Be,"--n-bezier":g,"--n-border-radius":te,"--n-color":Oe,"--n-option-font-size":Fe,"--n-group-header-text-color":_e,"--n-option-check-color":Pe,"--n-option-color-pending":me,"--n-option-color-active":we,"--n-option-color-active-pending":Ae,"--n-option-height":ye,"--n-option-opacity-disabled":ke,"--n-option-text-color":Te,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":ge,"--n-option-text-color-pressed":ne,"--n-option-padding":J,"--n-option-padding-left":De(J,"left"),"--n-option-padding-right":De(J,"right"),"--n-loading-color":$e,"--n-loading-size":Ee}}),{inlineThemeDisabled:j}=e,E=j?et("internal-select-menu",z(()=>e.size[0]),V,e):void 0,G={selfRef:u,next:ie,prev:d,getPendingTmNode:Q};return jt(u,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:f,scrollbarRef:a,itemSize:C,padding:$,flattenedNodes:x,empty:T,virtualListContainer(){const{value:c}=f;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=f;return c==null?void 0:c.itemsElRef},doScroll:D,handleFocusin:N,handleFocusout:U,handleKeyUp:fe,handleKeyDown:le,handleMouseDown:ee,handleVirtualListResize:K,handleVirtualListScroll:W,cssVars:j?void 0:V,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},G)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:u}=this;return u==null||u(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},wt(e.header,f=>f&&r("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},f)),this.loading?r("div",{class:`${o}-base-select-menu__loading`},r(On,{clsPrefix:o,strokeWidth:20})):this.empty?r("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Tn(e.empty,()=>[r(fo,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):r(_n,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?r(io,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:f})=>f.isGroup?r(Ft,{key:f.key,clsPrefix:o,tmNode:f}):f.ignored?null:r(zt,{clsPrefix:o,key:f.key,tmNode:f})}):r("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(f=>f.isGroup?r(Ft,{key:f.key,clsPrefix:o,tmNode:f}):r(zt,{clsPrefix:o,key:f.key,tmNode:f})))}),wt(e.action,f=>f&&[r("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},f),r(so,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),po=ae([B("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[B("base-loading",`
 color: var(--n-loading-color);
 `),B("base-selection-tags","min-height: var(--n-height);"),L("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),L("state-border",`
 z-index: 1;
 border-color: #0000;
 `),B("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),B("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[L("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),B("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[L("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),B("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),B("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[B("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[L("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L("render-label",`
 color: var(--n-text-color);
 `)]),vt("disabled",[ae("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),oe("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),oe("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),B("base-selection-label","background-color: var(--n-color-active);"),B("base-selection-tags","background-color: var(--n-color-active);")])]),oe("disabled","cursor: not-allowed;",[L("arrow",`
 color: var(--n-arrow-color-disabled);
 `),B("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[B("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L("render-label",`
 color: var(--n-text-color-disabled);
 `)]),B("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),B("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),B("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),L("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>oe(`${e}-status`,[L("state-border",`border: var(--n-border-${e});`),vt("disabled",[ae("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),oe("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),B("base-selection-label",`background-color: var(--n-color-active-${e});`),B("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),oe("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),B("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),B("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ae("&:last-child","padding-right: 0;"),B("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[L("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),bo=se({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=Qe(e),l=$t("InternalSelection",o,n),i=_(null),u=_(null),f=_(null),a=_(null),x=_(null),w=_(null),p=_(null),S=_(null),b=_(null),v=_(null),C=_(!1),$=_(!1),H=_(!1),T=be("InternalSelection","-internal-selection",po,Pn,e,Y(e,"clsPrefix")),O=z(()=>e.clearable&&!e.disabled&&(H.value||e.active)),D=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ze(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),W=z(()=>{const s=e.selectedOption;if(s)return s[e.labelField]}),K=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Q(){var s;const{value:m}=i;if(m){const{value:q}=u;q&&(q.style.width=`${m.offsetWidth}px`,e.maxTagCount!=="responsive"&&((s=b.value)===null||s===void 0||s.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:s}=v;s&&(s.style.display="none")}function ce(){const{value:s}=v;s&&(s.style.display="inline-block")}Re(Y(e,"active"),s=>{s||Z()}),Re(Y(e,"pattern"),()=>{e.multiple&&Et(Q)});function fe(s){const{onFocus:m}=e;m&&m(s)}function le(s){const{onBlur:m}=e;m&&m(s)}function ee(s){const{onDeleteOption:m}=e;m&&m(s)}function ie(s){const{onClear:m}=e;m&&m(s)}function d(s){const{onPatternInput:m}=e;m&&m(s)}function y(s){var m;(!s.relatedTarget||!(!((m=f.value)===null||m===void 0)&&m.contains(s.relatedTarget)))&&fe(s)}function k(s){var m;!((m=f.value)===null||m===void 0)&&m.contains(s.relatedTarget)||le(s)}function N(s){ie(s)}function U(){H.value=!0}function V(){H.value=!1}function j(s){!e.active||!e.filterable||s.target!==u.value&&s.preventDefault()}function E(s){ee(s)}const G=_(!1);function c(s){if(s.key==="Backspace"&&!G.value&&!e.pattern.length){const{selectedOptions:m}=e;m!=null&&m.length&&E(m[m.length-1])}}let g=null;function A(s){const{value:m}=i;if(m){const q=s.target.value;m.textContent=q,Q()}e.ignoreComposition&&G.value?g=s:d(s)}function te(){G.value=!0}function Oe(){G.value=!1,e.ignoreComposition&&d(g),g=null}function _e(s){var m;$.value=!0,(m=e.onPatternFocus)===null||m===void 0||m.call(e,s)}function he(s){var m;$.value=!1,(m=e.onPatternBlur)===null||m===void 0||m.call(e,s)}function ne(){var s,m;if(e.filterable)$.value=!1,(s=w.value)===null||s===void 0||s.blur(),(m=u.value)===null||m===void 0||m.blur();else if(e.multiple){const{value:q}=a;q==null||q.blur()}else{const{value:q}=x;q==null||q.blur()}}function Te(){var s,m,q;e.filterable?($.value=!1,(s=w.value)===null||s===void 0||s.focus()):e.multiple?(m=a.value)===null||m===void 0||m.focus():(q=x.value)===null||q===void 0||q.focus()}function ge(){const{value:s}=u;s&&(ce(),s.focus())}function Me(){const{value:s}=u;s&&s.blur()}function ke(s){const{value:m}=p;m&&m.setTextContent(`+${s}`)}function Pe(){const{value:s}=S;return s}function Be(){return u.value}let me=null;function we(){me!==null&&window.clearTimeout(me)}function $e(){e.active||(we(),me=window.setTimeout(()=>{K.value&&(C.value=!0)},100))}function Ee(){we()}function Ae(s){s||(we(),C.value=!1)}Re(K,s=>{s||(C.value=!1)}),je(()=>{Bn(()=>{const s=w.value;s&&(e.disabled?s.removeAttribute("tabindex"):s.tabIndex=$.value?-1:0)})}),jt(f,e.onResize);const{inlineThemeDisabled:Fe}=e,ye=z(()=>{const{size:s}=e,{common:{cubicBezierEaseInOut:m},self:{fontWeight:q,borderRadius:tt,color:nt,placeholderColor:We,textColor:He,paddingSingle:Ke,paddingMultiple:ot,caretColor:lt,colorDisabled:Ue,textColorDisabled:pe,placeholderColorDisabled:t,colorActive:h,boxShadowFocus:R,boxShadowActive:P,boxShadowHover:I,border:F,borderFocus:M,borderHover:X,borderActive:de,arrowColor:Ht,arrowColorDisabled:Kt,loadingColor:Ut,colorActiveWarning:qt,boxShadowFocusWarning:Gt,boxShadowActiveWarning:Xt,boxShadowHoverWarning:Yt,borderWarning:Zt,borderFocusWarning:Jt,borderHoverWarning:Qt,borderActiveWarning:en,colorActiveError:tn,boxShadowFocusError:nn,boxShadowActiveError:on,boxShadowHoverError:ln,borderError:rn,borderFocusError:an,borderHoverError:sn,borderActiveError:dn,clearColor:un,clearColorHover:cn,clearColorPressed:fn,clearSize:hn,arrowSize:vn,[ve("height",s)]:gn,[ve("fontSize",s)]:pn}}=T.value,qe=De(Ke),Ge=De(ot);return{"--n-bezier":m,"--n-border":F,"--n-border-active":de,"--n-border-focus":M,"--n-border-hover":X,"--n-border-radius":tt,"--n-box-shadow-active":P,"--n-box-shadow-focus":R,"--n-box-shadow-hover":I,"--n-caret-color":lt,"--n-color":nt,"--n-color-active":h,"--n-color-disabled":Ue,"--n-font-size":pn,"--n-height":gn,"--n-padding-single-top":qe.top,"--n-padding-multiple-top":Ge.top,"--n-padding-single-right":qe.right,"--n-padding-multiple-right":Ge.right,"--n-padding-single-left":qe.left,"--n-padding-multiple-left":Ge.left,"--n-padding-single-bottom":qe.bottom,"--n-padding-multiple-bottom":Ge.bottom,"--n-placeholder-color":We,"--n-placeholder-color-disabled":t,"--n-text-color":He,"--n-text-color-disabled":pe,"--n-arrow-color":Ht,"--n-arrow-color-disabled":Kt,"--n-loading-color":Ut,"--n-color-active-warning":qt,"--n-box-shadow-focus-warning":Gt,"--n-box-shadow-active-warning":Xt,"--n-box-shadow-hover-warning":Yt,"--n-border-warning":Zt,"--n-border-focus-warning":Jt,"--n-border-hover-warning":Qt,"--n-border-active-warning":en,"--n-color-active-error":tn,"--n-box-shadow-focus-error":nn,"--n-box-shadow-active-error":on,"--n-box-shadow-hover-error":ln,"--n-border-error":rn,"--n-border-focus-error":an,"--n-border-hover-error":sn,"--n-border-active-error":dn,"--n-clear-size":hn,"--n-clear-color":un,"--n-clear-color-hover":cn,"--n-clear-color-pressed":fn,"--n-arrow-size":vn,"--n-font-weight":q}}),J=Fe?et("internal-selection",z(()=>e.size[0]),ye,e):void 0;return{mergedTheme:T,mergedClearable:O,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:$,filterablePlaceholder:D,label:W,selected:K,showTagsPanel:C,isComposing:G,counterRef:p,counterWrapperRef:S,patternInputMirrorRef:i,patternInputRef:u,selfRef:f,multipleElRef:a,singleElRef:x,patternInputWrapperRef:w,overflowRef:b,inputTagElRef:v,handleMouseDown:j,handleFocusin:y,handleClear:N,handleMouseEnter:U,handleMouseLeave:V,handleDeleteOption:E,handlePatternKeyDown:c,handlePatternInputInput:A,handlePatternInputBlur:he,handlePatternInputFocus:_e,handleMouseEnterCounter:$e,handleMouseLeaveCounter:Ee,handleFocusout:k,handleCompositionEnd:Oe,handleCompositionStart:te,onPopoverUpdateShow:Ae,focus:Te,focusInput:ge,blur:ne,blurInput:Me,updateCounter:ke,getCounter:Pe,getTail:Be,renderLabel:e.renderLabel,cssVars:Fe?void 0:ye,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:i,maxTagCount:u,bordered:f,clsPrefix:a,ellipsisTagPopoverProps:x,onRender:w,renderTag:p,renderLabel:S}=this;w==null||w();const b=u==="responsive",v=typeof u=="number",C=b||v,$=r(Mn,null,{default:()=>r(Gn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,O;return(O=(T=this.$slots).arrow)===null||O===void 0?void 0:O.call(T)}})});let H;if(n){const{labelField:T}=this,O=d=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:d.value},p?p({option:d,handleClose:()=>{this.handleDeleteOption(d)}}):r(st,{size:o,closable:!d.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(d)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(d,!0):ze(d[T],d,!0)})),D=()=>(v?this.selectedOptions.slice(0,u):this.selectedOptions).map(O),W=i?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,K=b?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(st,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let Q;if(v){const d=this.selectedOptions.length-u;d>0&&(Q=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(st,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${d}`})))}const Z=b?i?r(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:K,tail:()=>W}):r(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:D,counter:K}):v&&Q?D().concat(Q):D(),ce=C?()=>r("div",{class:`${a}-base-selection-popover`},b?D():this.selectedOptions.map(O)):void 0,fe=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},x):null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ie=i?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},Z,b?null:W,$):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},Z,$);H=r(At,null,C?r(kn,Object.assign({},fe,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ie,default:ce}):ie,ee)}else if(i){const T=this.pattern||this.isComposing,O=this.active?!T:!this.selected,D=this.active?!1:this.selected;H=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Tt(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),D?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):null,O?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,$)}else H=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:Tt(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},p?p({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):ze(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),$);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},H,f?r("div",{class:`${a}-base-selection__border`}):null,f?r("div",{class:`${a}-base-selection__state-border`}):null)}});function Je(e){return e.type==="group"}function Wt(e){return e.type==="ignored"}function ct(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function mo(e,n){return{getIsGroup:Je,getIgnored:Wt,getKey(l){return Je(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function wo(e,n,o,l){if(!n)return e;function i(u){if(!Array.isArray(u))return[];const f=[];for(const a of u)if(Je(a)){const x=i(a[l]);x.length&&f.push(Object.assign({},a,{[l]:x}))}else{if(Wt(a))continue;n(o,a)&&f.push(a)}return f}return i(e)}function yo(e,n,o){const l=new Map;return e.forEach(i=>{Je(i)?i[o].forEach(u=>{l.set(u[n],u)}):l.set(i[n],i)}),l}const xo=ae([B("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),B("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Bt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Co=Object.assign(Object.assign({},be.props),{to:gt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),So=se({name:"Select",props:Co,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=Qe(e),u=be("Select","-select",xo,Nn,e,n),f=_(e.defaultValue),a=Y(e,"value"),x=Ct(a,f),w=_(!1),p=_(""),S=Dn(e,["items","options"]),b=_([]),v=_([]),C=z(()=>v.value.concat(b.value).concat(S.value)),$=z(()=>{const{filter:t}=e;if(t)return t;const{labelField:h,valueField:R}=e;return(P,I)=>{if(!I)return!1;const F=I[h];if(typeof F=="string")return ct(P,F);const M=I[R];return typeof M=="string"?ct(P,M):typeof M=="number"?ct(P,String(M)):!1}}),H=z(()=>{if(e.remote)return S.value;{const{value:t}=C,{value:h}=p;return!h.length||!e.filterable?t:wo(t,$.value,h,e.childrenField)}}),T=z(()=>{const{valueField:t,childrenField:h}=e,R=mo(t,h);return Vn(H.value,R)}),O=z(()=>yo(C.value,e.valueField,e.childrenField)),D=_(!1),W=Ct(Y(e,"show"),D),K=_(null),Q=_(null),Z=_(null),{localeRef:ce}=Nt("Select"),fe=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:ce.value.placeholder}),le=[],ee=_(new Map),ie=z(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:h,valueField:R}=e;return P=>({[h]:String(P),[R]:P})}return t===!1?!1:h=>Object.assign(t(h),{value:h})});function d(t){const h=e.remote,{value:R}=ee,{value:P}=O,{value:I}=ie,F=[];return t.forEach(M=>{if(P.has(M))F.push(P.get(M));else if(h&&R.has(M))F.push(R.get(M));else if(I){const X=I(M);X&&F.push(X)}}),F}const y=z(()=>{if(e.multiple){const{value:t}=x;return Array.isArray(t)?d(t):[]}return null}),k=z(()=>{const{value:t}=x;return!e.multiple&&!Array.isArray(t)?t===null?null:d([t])[0]||null:null}),N=Xn(e),{mergedSizeRef:U,mergedDisabledRef:V,mergedStatusRef:j}=N;function E(t,h){const{onChange:R,"onUpdate:value":P,onUpdateValue:I}=e,{nTriggerFormChange:F,nTriggerFormInput:M}=N;R&&ue(R,t,h),I&&ue(I,t,h),P&&ue(P,t,h),f.value=t,F(),M()}function G(t){const{onBlur:h}=e,{nTriggerFormBlur:R}=N;h&&ue(h,t),R()}function c(){const{onClear:t}=e;t&&ue(t)}function g(t){const{onFocus:h,showOnFocus:R}=e,{nTriggerFormFocus:P}=N;h&&ue(h,t),P(),R&&he()}function A(t){const{onSearch:h}=e;h&&ue(h,t)}function te(t){const{onScroll:h}=e;h&&ue(h,t)}function Oe(){var t;const{remote:h,multiple:R}=e;if(h){const{value:P}=ee;if(R){const{valueField:I}=e;(t=y.value)===null||t===void 0||t.forEach(F=>{P.set(F[I],F)})}else{const I=k.value;I&&P.set(I[e.valueField],I)}}}function _e(t){const{onUpdateShow:h,"onUpdate:show":R}=e;h&&ue(h,t),R&&ue(R,t),D.value=t}function he(){V.value||(_e(!0),D.value=!0,e.filterable&&Ke())}function ne(){_e(!1)}function Te(){p.value="",v.value=le}const ge=_(!1);function Me(){e.filterable&&(ge.value=!0)}function ke(){e.filterable&&(ge.value=!1,W.value||Te())}function Pe(){V.value||(W.value?e.filterable?Ke():ne():he())}function Be(t){var h,R;!((R=(h=Z.value)===null||h===void 0?void 0:h.selfRef)===null||R===void 0)&&R.contains(t.relatedTarget)||(w.value=!1,G(t),ne())}function me(t){g(t),w.value=!0}function we(){w.value=!0}function $e(t){var h;!((h=K.value)===null||h===void 0)&&h.$el.contains(t.relatedTarget)||(w.value=!1,G(t),ne())}function Ee(){var t;(t=K.value)===null||t===void 0||t.focus(),ne()}function Ae(t){var h;W.value&&(!((h=K.value)===null||h===void 0)&&h.$el.contains(Wn(t))||ne())}function Fe(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:h}=e,{value:R}=O;if(h){const{value:P}=ee;return t.filter(I=>R.has(I)||P.has(I))}else return t.filter(P=>R.has(P))}}function ye(t){J(t.rawNode)}function J(t){if(V.value)return;const{tag:h,remote:R,clearFilterAfterSelect:P,valueField:I}=e;if(h&&!R){const{value:F}=v,M=F[0]||null;if(M){const X=b.value;X.length?X.push(M):b.value=[M],v.value=le}}if(R&&ee.value.set(t[I],t),e.multiple){const F=Fe(x.value),M=F.findIndex(X=>X===t[I]);if(~M){if(F.splice(M,1),h&&!R){const X=s(t[I]);~X&&(b.value.splice(X,1),P&&(p.value=""))}}else F.push(t[I]),P&&(p.value="");E(F,d(F))}else{if(h&&!R){const F=s(t[I]);~F?b.value=[b.value[F]]:b.value=le}He(),ne(),E(t[I],t)}}function s(t){return b.value.findIndex(R=>R[e.valueField]===t)}function m(t){W.value||he();const{value:h}=t.target;p.value=h;const{tag:R,remote:P}=e;if(A(h),R&&!P){if(!h){v.value=le;return}const{onCreate:I}=e,F=I?I(h):{[e.labelField]:h,[e.valueField]:h},{valueField:M,labelField:X}=e;S.value.some(de=>de[M]===F[M]||de[X]===F[X])||b.value.some(de=>de[M]===F[M]||de[X]===F[X])?v.value=le:v.value=[F]}}function q(t){t.stopPropagation();const{multiple:h}=e;!h&&e.filterable&&ne(),c(),h?E([],[]):E(null,null)}function tt(t){!Ve(t,"action")&&!Ve(t,"empty")&&!Ve(t,"header")&&t.preventDefault()}function nt(t){te(t)}function We(t){var h,R,P,I,F;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((h=K.value)===null||h===void 0)&&h.isComposing)){if(W.value){const M=(R=Z.value)===null||R===void 0?void 0:R.getPendingTmNode();M?ye(M):e.filterable||(ne(),He())}else if(he(),e.tag&&ge.value){const M=v.value[0];if(M){const X=M[e.valueField],{value:de}=x;e.multiple&&Array.isArray(de)&&de.includes(X)||J(M)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;W.value&&((P=Z.value)===null||P===void 0||P.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;W.value?(I=Z.value)===null||I===void 0||I.next():he();break;case"Escape":W.value&&(Qn(t),ne()),(F=K.value)===null||F===void 0||F.focus();break}}function He(){var t;(t=K.value)===null||t===void 0||t.focus()}function Ke(){var t;(t=K.value)===null||t===void 0||t.focusInput()}function ot(){var t;W.value&&((t=Q.value)===null||t===void 0||t.syncPosition())}Oe(),Re(Y(e,"options"),Oe);const lt={focus:()=>{var t;(t=K.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=K.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=K.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=K.value)===null||t===void 0||t.blurInput()}},Ue=z(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),pe=i?et("select",void 0,Ue,e):void 0;return Object.assign(Object.assign({},lt),{mergedStatus:j,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:T,isMounted:jn(),triggerRef:K,menuRef:Z,pattern:p,uncontrolledShow:D,mergedShow:W,adjustedTo:gt(e),uncontrolledValue:f,mergedValue:x,followerRef:Q,localizedPlaceholder:fe,selectedOption:k,selectedOptions:y,mergedSize:U,mergedDisabled:V,focused:w,activeWithoutMenuOpen:ge,inlineThemeDisabled:i,onTriggerInputFocus:Me,onTriggerInputBlur:ke,handleTriggerOrMenuResize:ot,handleMenuFocus:we,handleMenuBlur:$e,handleMenuTabOut:Ee,handleTriggerClick:Pe,handleToggle:ye,handleDeleteOption:J,handlePatternInput:m,handleClear:q,handleTriggerBlur:Be,handleTriggerFocus:me,handleKeydown:We,handleMenuAfterLeave:Te,handleMenuClickOutside:Ae,handleMenuScroll:nt,handleMenuKeydown:We,handleMenuMousedown:tt,mergedTheme:u,cssVars:i?void 0:Ue,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r($n,null,{default:()=>[r(En,null,{default:()=>r(bo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),r(An,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===gt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Pt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Lt(r(go,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[Ln,this.mergedShow],[xt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[xt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ro={class:"wrap"},Oo={style:{width:"250px"}},_o={class:"switch"},To={__name:"ShortItem",props:{element:Object},setup(e){const n=Yn(),o=e,l=_([{label:"Ctrl",value:"CommandOrControl"},{label:"Shift",value:"Shift"},{label:"Alt",value:"Alt"}]),i=o.element.cmd.split("+"),u=_(i[0]),f=_(i[1]),a=b=>{let v=[b,f.value].join("+"),C=Object.assign(at(o.element),{cmd:v});p(C)},x=b=>{let v=f.value;if(b.preventDefault(),["Control","Shift","Alt"].includes(b.key))return;v=b.key===" "?"Space":w(b.key),v=v.replace(/^Arrow/,"");let C=[u.value,v].join("+"),$=Object.assign(at(o.element),{cmd:C,flag:!1});p($)},w=b=>b&&b.charAt(0).toUpperCase()+b.slice(1),p=b=>{window.myApi.updateShortcut(b).then(v=>{if(v.code===0){let C=v.data.cmd.split("+");u.value=C[0],f.value=C[1],n.success(v.msg)}else n.error(v.msg)})},S=b=>{let v=[u.value,f.value].join("+"),C=Object.assign(at(o.element),{cmd:v,isOpen:b,flag:!0});p(C)};return(b,v)=>{const C=So,$=Zn,H=eo,T=Jn;return Ne(),Ye("div",Ro,[re("div",Oo,Hn(e.element.tag),1),re("div",null,[xe(H,null,{default:Ie(()=>[xe(C,{style:{width:"30%"},size:"small",options:Ze(l),value:Ze(u),"onUpdate:value":[v[0]||(v[0]=O=>St(u)?u.value=O:null),a]},null,8,["options","value"]),v[3]||(v[3]=Ce("+ ")),xe($,{style:{width:"40%"},size:"small",readonly:"",value:Ze(f),"onUpdate:value":v[1]||(v[1]=O=>St(f)?f.value=O:null),onKeydown:x},null,8,["value"])]),_:1})]),re("div",_o,[xe(T,{size:"medium",value:e.element.isOpen,"onUpdate:value":[v[2]||(v[2]=O=>e.element.isOpen=O),S],style:{"font-size":"12px"}},{checked:Ie(()=>v[4]||(v[4]=[Ce(" 开启 ")])),unchecked:Ie(()=>v[5]||(v[5]=[Ce(" 禁用 ")])),_:1},8,["value"])])])}}},Fo=It(To,[["__scopeId","data-v-07a1d453"]]),zo={id:"content-main"},Io={class:"box"},Mo={class:"box-card"},ko={__name:"ShortcutView",setup(e){const n=_([]);return je(async()=>{n.value=await window.myApi.getShortcuts()}),(o,l)=>{const i=to,u=bn,f=Fo,a=Un("auto-height");return Ne(),Ye("div",zo,[xe(u,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:Ie(()=>[xe(i,{style:{"margin-bottom":"0"}},{default:Ie(()=>l[0]||(l[0]=[Ce("快捷键")])),_:1})]),_:1}),xe(u,{"show-icon":!1},{default:Ie(()=>l[1]||(l[1]=[Ce(" 1.快捷键不区分大小写,先按住Ctrl键，再按其它快捷键；"),re("br",null,null,-1),Ce(" 2.在macOS系统：Ctrl === Command键，Alt === Option键；"),re("br",null,null,-1),Ce(" 3.自定义快捷键时，先获取焦点，然后在输入框中按其它快捷键；"),re("br",null,null,-1)])),_:1}),re("div",Io,[l[2]||(l[2]=re("div",{class:"title"},[re("div",{style:{width:"250px"}}," 功能描述 "),re("div",{style:{width:"200px"}}," 自定义快捷键 "),re("div",{class:"switch"}," 是否禁用 ")],-1)),Lt((Ne(),Ye("div",Mo,[(Ne(!0),Ye(At,null,Kn(Ze(n),x=>(Ne(),qn(f,{element:x},null,8,["element"]))),256))])),[[a,{offset:20}]])])])}}},Do=It(ko,[["__scopeId","data-v-7af094f7"]]);export{Do as default};
