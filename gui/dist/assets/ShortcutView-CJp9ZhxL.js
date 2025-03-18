import{aS as O,q as M,c2 as Se,aM as vt,M as ae,af as mt,a5 as s,bY as yt,ar as Sn,c3 as Rn,c4 as at,c5 as Tn,aC as We,aw as zn,aA as On,bd as J,c6 as pt,c7 as De,c8 as Fn,c9 as st,bC as Re,ay as kt,bO as tt,bR as T,bV as $,bU as q,ca as $t,bZ as je,b_ as be,b$ as ve,c0 as nt,cb as wt,cc as _n,cd as Me,ce as xt,g as Bt,cf as re,cg as gt,ch as Et,bX as Ct,ci as Mn,cj as In,bW as Pn,ck as At,cl as kn,cm as He,cn as Ve,as as Lt,co as $n,cp as Bn,cq as _e,cr as En,cs as St,F as Dt,ct as An,bD as Ln,cu as Dn,cv as Nn,cw as Hn,cx as Vn,cy as bt,bJ as Nt,bz as Wn,cz as Rt,cA as Tt,cB as jn,cC as Kn,cD as Un,cE as qn,cF as fe,c1 as Ht,u as Je,aK as Ne,v as ue,b9 as Gn,I as ye,bH as Ie,H as Ce,ak as zt,bi as Qe,bc as dt,aV as Yn,aY as Xn,s as Zn}from"./index-DnbH1geE.js";import{u as Vt,N as Jn,a as Qn,m as eo,b as to,_ as no,c as oo}from"./Switch-DfXRG30k.js";import{_ as ut}from"./Tag-DrpwE98A.js";import{_ as io}from"./Alert-ub-P_lVZ.js";import{N as lo}from"./headers-B0OdgbUA.js";function Ot(e){return e&-e}class Wt{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let l=0;l<n+1;++l)i[l]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:l}=this;for(n+=1;n<=i;)l[n]+=o,n+=Ot(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=n*i;for(;n>0;)a+=o[n],n-=Ot(n);return a}getBound(n){let o=0,i=this.l;for(;i>o;){const l=Math.floor((o+i)/2),a=this.sum(l);if(a>n){i=l;continue}else if(a<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let Ze;function ro(){return typeof document>"u"?!1:(Ze===void 0&&("matchMedia"in window?Ze=window.matchMedia("(pointer:coarse)").matches:Ze=!1),Ze)}let ct;function Ft(){return typeof document>"u"?1:(ct===void 0&&(ct="chrome"in window?window.devicePixelRatio:1),ct)}const jt="VVirtualListXScroll";function ao({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const i=O(0),l=O(0),a=M(()=>{const w=e.value;if(w.length===0)return null;const v=new Wt(w.length,0);return w.forEach((S,m)=>{v.add(m,S.width)}),v}),u=Se(()=>{const w=a.value;return w!==null?Math.max(w.getBound(l.value)-1,0):0}),r=w=>{const v=a.value;return v!==null?v.sum(w):0},g=Se(()=>{const w=a.value;return w!==null?Math.min(w.getBound(l.value+i.value)+1,e.value.length-1):0});return vt(jt,{startIndexRef:u,endIndexRef:g,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:r}),{listWidthRef:i,scrollLeftRef:l}}const _t=ae({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:i,renderColRef:l,renderItemWithColsRef:a}=mt(jt);return{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:a,getLeft:i}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:l,getLeft:a,item:u}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:u,getLeft:a});if(i!=null){const r=[];for(let g=e;g<=n;++g){const w=o[g];r.push(i({column:w,left:a(g),item:u}))}return r}return null}}),so=at(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[at("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[at("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),uo=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Rn();so.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Tn,ssr:n}),We(()=>{const{defaultScrollIndex:c,defaultScrollKey:C}=e;c!=null?H({index:c}):C!=null&&H({key:C})});let o=!1,i=!1;zn(()=>{if(o=!1,!i){i=!0;return}H({top:h.value,left:u.value})}),On(()=>{o=!0,i||(i=!0)});const l=Se(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let c=0;return e.columns.forEach(C=>{c+=C.width}),c}),a=M(()=>{const c=new Map,{keyField:C}=e;return e.items.forEach((B,V)=>{c.set(B[C],V)}),c}),{scrollLeftRef:u,listWidthRef:r}=ao({columnsRef:J(e,"columns"),renderColRef:J(e,"renderCol"),renderItemWithColsRef:J(e,"renderItemWithCols")}),g=O(null),w=O(void 0),v=new Map,S=M(()=>{const{items:c,itemSize:C,keyField:B}=e,V=new Wt(c.length,C);return c.forEach((U,j)=>{const K=U[B],L=v.get(K);L!==void 0&&V.add(j,L)}),V}),m=O(0),h=O(0),y=Se(()=>Math.max(S.value.getBound(h.value-pt(e.paddingTop))-1,0)),k=M(()=>{const{value:c}=w;if(c===void 0)return[];const{items:C,itemSize:B}=e,V=y.value,U=Math.min(V+Math.ceil(c/B+1),C.length-1),j=[];for(let K=V;K<=U;++K)j.push(C[K]);return j}),H=(c,C)=>{if(typeof c=="number"){N(c,C,"auto");return}const{left:B,top:V,index:U,key:j,position:K,behavior:L,debounce:Y=!0}=c;if(B!==void 0||V!==void 0)N(B,V,L);else if(U!==void 0)A(U,L,Y);else if(j!==void 0){const f=a.value.get(j);f!==void 0&&A(f,L,Y)}else K==="bottom"?N(0,Number.MAX_SAFE_INTEGER,L):K==="top"&&N(0,0,L)};let F,R=null;function A(c,C,B){const{value:V}=S,U=V.sum(c)+pt(e.paddingTop);if(!B)g.value.scrollTo({left:0,top:U,behavior:C});else{F=c,R!==null&&window.clearTimeout(R),R=window.setTimeout(()=>{F=void 0,R=null},16);const{scrollTop:j,offsetHeight:K}=g.value;if(U>j){const L=V.get(c);U+L<=j+K||g.value.scrollTo({left:0,top:U+L-K,behavior:C})}else g.value.scrollTo({left:0,top:U,behavior:C})}}function N(c,C,B){g.value.scrollTo({left:c,top:C,behavior:B})}function W(c,C){var B,V,U;if(o||e.ignoreItemResize||oe(C.target))return;const{value:j}=S,K=a.value.get(c),L=j.get(K),Y=(U=(V=(B=C.borderBoxSize)===null||B===void 0?void 0:B[0])===null||V===void 0?void 0:V.blockSize)!==null&&U!==void 0?U:C.contentRect.height;if(Y===L)return;Y-e.itemSize===0?v.delete(c):v.set(c,Y-e.itemSize);const b=Y-L;if(b===0)return;j.add(K,b);const D=g.value;if(D!=null){if(F===void 0){const ie=j.sum(K);D.scrollTop>ie&&D.scrollBy(0,b)}else if(K<F)D.scrollBy(0,b);else if(K===F){const ie=j.sum(K);Y+ie>D.scrollTop+D.offsetHeight&&D.scrollBy(0,b)}ee()}m.value++}const Q=!ro();let Z=!1;function se(c){var C;(C=e.onScroll)===null||C===void 0||C.call(e,c),(!Q||!Z)&&ee()}function de(c){var C;if((C=e.onWheel)===null||C===void 0||C.call(e,c),Q){const B=g.value;if(B!=null){if(c.deltaX===0&&(B.scrollTop===0&&c.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&c.deltaY>=0))return;c.preventDefault(),B.scrollTop+=c.deltaY/Ft(),B.scrollLeft+=c.deltaX/Ft(),ee(),Z=!0,Fn(()=>{Z=!1})}}}function ne(c){if(o||oe(c.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(c.contentRect.height===w.value)return}else if(c.contentRect.height===w.value&&c.contentRect.width===r.value)return;w.value=c.contentRect.height,r.value=c.contentRect.width;const{onResize:C}=e;C!==void 0&&C(c)}function ee(){const{value:c}=g;c!=null&&(h.value=c.scrollTop,u.value=c.scrollLeft)}function oe(c){let C=c;for(;C!==null;){if(C.style.display==="none")return!0;C=C.parentElement}return!1}return{listHeight:w,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:M(()=>{const{itemResizable:c}=e,C=De(S.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",width:De(l.value),height:c?"":C,minHeight:c?C:"",paddingTop:De(e.paddingTop),paddingBottom:De(e.paddingBottom)}]}),visibleItemsStyle:M(()=>(m.value,{transform:`translateY(${De(S.value.sum(y.value))})`})),viewportItems:k,listElRef:g,itemsElRef:O(null),scrollTo:H,handleListResize:ne,handleListScroll:se,handleListWheel:de,handleItemResize:W}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return s(yt,{onResize:this.handleListResize},{default:()=>{var l,a;return s("div",Sn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:u,renderItemWithCols:r}=this;return this.viewportItems.map(g=>{const w=g[n],v=o.get(w),S=u!=null?s(_t,{index:v,item:g}):void 0,m=r!=null?s(_t,{index:v,item:g}):void 0,h=this.$slots.default({item:g,renderedCols:S,renderedItemWithCols:m,index:v})[0];return e?s(yt,{key:w,onResize:y=>this.handleItemResize(w,y)},{default:()=>h}):(h.key=w,h)})}})]):(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)])}})}});function Kt(e,n){n&&(We(()=>{const{value:o}=e;o&&st.registerHandler(o,n)}),Re(e,(o,i)=>{i&&st.unregisterHandler(i)},{deep:!1}),kt(()=>{const{value:o}=e;o&&st.unregisterHandler(o)}))}function Mt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ft(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}const co=ae({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),fo=ae({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),ho=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),vo={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function po(e){const{textColorDisabled:n,iconColor:o,textColor2:i,fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:r,fontSizeHuge:g}=e;return Object.assign(Object.assign({},vo),{fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:r,fontSizeHuge:g,textColor:n,iconColor:o,extraTextColor:i})}const Ut={name:"Empty",common:tt,self:po},go=T("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[$("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[q("+",[$("description",`
 margin-top: 8px;
 `)])]),$("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),$("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),bo=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),mo=ae({name:"Empty",props:bo,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:i}=je(e),l=be("Empty","-empty",go,Ut,e,n),{localeRef:a}=Vt("Empty"),u=M(()=>{var v,S,m;return(v=e.description)!==null&&v!==void 0?v:(m=(S=i==null?void 0:i.value)===null||S===void 0?void 0:S.Empty)===null||m===void 0?void 0:m.description}),r=M(()=>{var v,S;return((S=(v=i==null?void 0:i.value)===null||v===void 0?void 0:v.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>s(fo,null))}),g=M(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:S},self:{[ve("iconSize",v)]:m,[ve("fontSize",v)]:h,textColor:y,iconColor:k,extraTextColor:H}}=l.value;return{"--n-icon-size":m,"--n-font-size":h,"--n-bezier":S,"--n-text-color":y,"--n-icon-color":k,"--n-extra-text-color":H}}),w=o?nt("empty",M(()=>{let v="";const{size:S}=e;return v+=S[0],v}),g,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:M(()=>u.value||a.value.description),cssVars:o?void 0:g,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s($t,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}}),wo={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function xo(e){const{borderRadius:n,popoverColor:o,textColor3:i,dividerColor:l,textColor2:a,primaryColorPressed:u,textColorDisabled:r,primaryColor:g,opacityDisabled:w,hoverColor:v,fontSizeTiny:S,fontSizeSmall:m,fontSizeMedium:h,fontSizeLarge:y,fontSizeHuge:k,heightTiny:H,heightSmall:F,heightMedium:R,heightLarge:A,heightHuge:N}=e;return Object.assign(Object.assign({},wo),{optionFontSizeTiny:S,optionFontSizeSmall:m,optionFontSizeMedium:h,optionFontSizeLarge:y,optionFontSizeHuge:k,optionHeightTiny:H,optionHeightSmall:F,optionHeightMedium:R,optionHeightLarge:A,optionHeightHuge:N,borderRadius:n,color:o,groupHeaderTextColor:i,actionDividerColor:l,optionTextColor:a,optionTextColorPressed:u,optionTextColorDisabled:r,optionTextColorActive:g,optionOpacityDisabled:w,optionCheckColor:g,optionColorPending:v,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:v,actionTextColor:a,loadingColor:g})}const qt=wt({name:"InternalSelectMenu",common:tt,peers:{Scrollbar:_n,Empty:Ut},self:xo}),It=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=mt(xt);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:l}}=this,a=i==null?void 0:i(l),u=n?n(l,!1):Me(l[this.labelField],l,!1),r=s("div",Object.assign({},a,{class:[`${e}-base-select-group-header`,a==null?void 0:a.class]}),u);return l.render?l.render({node:r,option:l}):o?o({node:r,option:l,selected:!1}):r}});function yo(e,n){return s(Bt,{name:"fade-in-scale-up-transition"},{default:()=>e?s($t,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>s(co)}):null})}const Pt=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:l,renderLabelRef:a,renderOptionRef:u,labelFieldRef:r,valueFieldRef:g,showCheckmarkRef:w,nodePropsRef:v,handleOptionClick:S,handleOptionMouseEnter:m}=mt(xt),h=Se(()=>{const{value:F}=o;return F?e.tmNode.key===F.key:!1});function y(F){const{tmNode:R}=e;R.disabled||S(F,R)}function k(F){const{tmNode:R}=e;R.disabled||m(F,R)}function H(F){const{tmNode:R}=e,{value:A}=h;R.disabled||A||m(F,R)}return{multiple:i,isGrouped:Se(()=>{const{tmNode:F}=e,{parent:R}=F;return R&&R.rawNode.type==="group"}),showCheckmark:w,nodeProps:v,isPending:h,isSelected:Se(()=>{const{value:F}=n,{value:R}=i;if(F===null)return!1;const A=e.tmNode.rawNode[g.value];if(R){const{value:N}=l;return N.has(A)}else return F===A}),labelField:r,renderLabel:a,renderOption:u,handleMouseMove:H,handleMouseEnter:k,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:l,showCheckmark:a,nodeProps:u,renderOption:r,renderLabel:g,handleClick:w,handleMouseEnter:v,handleMouseMove:S}=this,m=yo(o,e),h=g?[g(n,o),a&&m]:[Me(n[this.labelField],n,o),a&&m],y=u==null?void 0:u(n),k=s("div",Object.assign({},y,{class:[`${e}-base-select-option`,n.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:a}],style:[(y==null?void 0:y.style)||"",n.style||""],onClick:ft([w,y==null?void 0:y.onClick]),onMouseenter:ft([v,y==null?void 0:y.onMouseenter]),onMousemove:ft([S,y==null?void 0:y.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},h));return n.render?n.render({node:k,option:n,selected:o}):r?r({node:k,option:n,selected:o}):k}}),Co=T("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[T("scrollbar",`
 max-height: var(--n-height);
 `),T("virtual-list",`
 max-height: var(--n-height);
 `),T("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[$("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),T("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),T("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),$("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),$("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),$("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),T("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),T("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[re("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),q("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),q("&:active",`
 color: var(--n-option-text-color-pressed);
 `),re("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),re("pending",[q("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),re("selected",`
 color: var(--n-option-text-color-active);
 `,[q("&::before",`
 background-color: var(--n-option-color-active);
 `),re("pending",[q("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),re("disabled",`
 cursor: not-allowed;
 `,[gt("selected",`
 color: var(--n-option-text-color-disabled);
 `),re("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),$("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Et({enterScale:"0.5"})])])]),So=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=je(e),i=At("InternalSelectMenu",o,n),l=be("InternalSelectMenu","-internal-select-menu",Co,qt,e,J(e,"clsPrefix")),a=O(null),u=O(null),r=O(null),g=M(()=>e.treeMate.getFlattenedNodes()),w=M(()=>kn(g.value)),v=O(null);function S(){const{treeMate:f}=e;let b=null;const{value:D}=e;D===null?b=f.getFirstAvailableNode():(e.multiple?b=f.getNode((D||[])[(D||[]).length-1]):b=f.getNode(D),(!b||b.disabled)&&(b=f.getFirstAvailableNode())),C(b||null)}function m(){const{value:f}=v;f&&!e.treeMate.getNode(f.key)&&(v.value=null)}let h;Re(()=>e.show,f=>{f?h=Re(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():m(),Lt(B)):m()},{immediate:!0}):h==null||h()},{immediate:!0}),kt(()=>{h==null||h()});const y=M(()=>pt(l.value.self[ve("optionHeight",e.size)])),k=M(()=>He(l.value.self[ve("padding",e.size)])),H=M(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),F=M(()=>{const f=g.value;return f&&f.length===0});function R(f){const{onToggle:b}=e;b&&b(f)}function A(f){const{onScroll:b}=e;b&&b(f)}function N(f){var b;(b=r.value)===null||b===void 0||b.sync(),A(f)}function W(){var f;(f=r.value)===null||f===void 0||f.sync()}function Q(){const{value:f}=v;return f||null}function Z(f,b){b.disabled||C(b,!1)}function se(f,b){b.disabled||R(b)}function de(f){var b;Ve(f,"action")||(b=e.onKeyup)===null||b===void 0||b.call(e,f)}function ne(f){var b;Ve(f,"action")||(b=e.onKeydown)===null||b===void 0||b.call(e,f)}function ee(f){var b;(b=e.onMousedown)===null||b===void 0||b.call(e,f),!e.focusable&&f.preventDefault()}function oe(){const{value:f}=v;f&&C(f.getNext({loop:!0}),!0)}function c(){const{value:f}=v;f&&C(f.getPrev({loop:!0}),!0)}function C(f,b=!1){v.value=f,b&&B()}function B(){var f,b;const D=v.value;if(!D)return;const ie=w.value(D.key);ie!==null&&(e.virtualScroll?(f=u.value)===null||f===void 0||f.scrollTo({index:ie}):(b=r.value)===null||b===void 0||b.scrollTo({index:ie,elSize:y.value}))}function V(f){var b,D;!((b=a.value)===null||b===void 0)&&b.contains(f.target)&&((D=e.onFocus)===null||D===void 0||D.call(e,f))}function U(f){var b,D;!((b=a.value)===null||b===void 0)&&b.contains(f.relatedTarget)||(D=e.onBlur)===null||D===void 0||D.call(e,f)}vt(xt,{handleOptionMouseEnter:Z,handleOptionClick:se,valueSetRef:H,pendingTmNodeRef:v,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),vt($n,a),We(()=>{const{value:f}=r;f&&f.sync()});const j=M(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:b},self:{height:D,borderRadius:ie,color:Te,groupHeaderTextColor:ze,actionDividerColor:he,optionTextColorPressed:le,optionTextColor:Oe,optionTextColorDisabled:pe,optionTextColorActive:Pe,optionOpacityDisabled:ke,optionCheckColor:$e,actionTextColor:Be,optionColorPending:me,optionColorActive:we,loadingColor:Ee,loadingSize:Ae,optionColorActivePending:Le,[ve("optionFontSize",f)]:Fe,[ve("optionHeight",f)]:xe,[ve("optionPadding",f)]:te}}=l.value;return{"--n-height":D,"--n-action-divider-color":he,"--n-action-text-color":Be,"--n-bezier":b,"--n-border-radius":ie,"--n-color":Te,"--n-option-font-size":Fe,"--n-group-header-text-color":ze,"--n-option-check-color":$e,"--n-option-color-pending":me,"--n-option-color-active":we,"--n-option-color-active-pending":Le,"--n-option-height":xe,"--n-option-opacity-disabled":ke,"--n-option-text-color":Oe,"--n-option-text-color-active":Pe,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":le,"--n-option-padding":te,"--n-option-padding-left":He(te,"left"),"--n-option-padding-right":He(te,"right"),"--n-loading-color":Ee,"--n-loading-size":Ae}}),{inlineThemeDisabled:K}=e,L=K?nt("internal-select-menu",M(()=>e.size[0]),j,e):void 0,Y={selfRef:a,next:oe,prev:c,getPendingTmNode:Q};return Kt(a,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:i,virtualListRef:u,scrollbarRef:r,itemSize:y,padding:k,flattenedNodes:g,empty:F,virtualListContainer(){const{value:f}=u;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=u;return f==null?void 0:f.itemsElRef},doScroll:A,handleFocusin:V,handleFocusout:U,handleKeyUp:de,handleKeyDown:ne,handleMouseDown:ee,handleVirtualListResize:W,handleVirtualListScroll:N,cssVars:K?void 0:j,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},Y)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:l,onRender:a}=this;return a==null||a(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},Ct(e.header,u=>u&&s("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},u)),this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(Mn,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Pn(e.empty,()=>[s(mo,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):s(In,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?s(uo,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?s(It,{key:u.key,clsPrefix:o,tmNode:u}):u.ignored?null:s(Pt,{clsPrefix:o,key:u.key,tmNode:u})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?s(It,{key:u.key,clsPrefix:o,tmNode:u}):s(Pt,{clsPrefix:o,key:u.key,tmNode:u})))}),Ct(e.action,u=>u&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},u),s(ho,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Ro={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function To(e){const{borderRadius:n,textColor2:o,textColorDisabled:i,inputColor:l,inputColorDisabled:a,primaryColor:u,primaryColorHover:r,warningColor:g,warningColorHover:w,errorColor:v,errorColorHover:S,borderColor:m,iconColor:h,iconColorDisabled:y,clearColor:k,clearColorHover:H,clearColorPressed:F,placeholderColor:R,placeholderColorDisabled:A,fontSizeTiny:N,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Z,heightTiny:se,heightSmall:de,heightMedium:ne,heightLarge:ee,fontWeight:oe}=e;return Object.assign(Object.assign({},Ro),{fontSizeTiny:N,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Z,heightTiny:se,heightSmall:de,heightMedium:ne,heightLarge:ee,borderRadius:n,fontWeight:oe,textColor:o,textColorDisabled:i,placeholderColor:R,placeholderColorDisabled:A,color:l,colorDisabled:a,colorActive:l,border:`1px solid ${m}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${u}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${_e(u,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${_e(u,{alpha:.2})}`,caretColor:u,arrowColor:h,arrowColorDisabled:y,loadingColor:u,borderWarning:`1px solid ${g}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${g}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${_e(g,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${_e(g,{alpha:.2})}`,colorActiveWarning:l,caretColorWarning:g,borderError:`1px solid ${v}`,borderHoverError:`1px solid ${S}`,borderActiveError:`1px solid ${v}`,borderFocusError:`1px solid ${S}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${_e(v,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${_e(v,{alpha:.2})}`,colorActiveError:l,caretColorError:v,clearColor:k,clearColorHover:H,clearColorPressed:F})}const Gt=wt({name:"InternalSelection",common:tt,peers:{Popover:Bn},self:To}),zo=q([T("base-selection",`
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
 `,[T("base-loading",`
 color: var(--n-loading-color);
 `),T("base-selection-tags","min-height: var(--n-height);"),$("border, state-border",`
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
 `),$("state-border",`
 z-index: 1;
 border-color: #0000;
 `),T("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[$("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),T("base-selection-overlay",`
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
 `,[$("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),T("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[$("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),T("base-selection-tags",`
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
 `),T("base-selection-label",`
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
 `,[T("base-selection-input",`
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
 `,[$("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),$("render-label",`
 color: var(--n-text-color);
 `)]),gt("disabled",[q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),re("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),re("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),T("base-selection-label","background-color: var(--n-color-active);"),T("base-selection-tags","background-color: var(--n-color-active);")])]),re("disabled","cursor: not-allowed;",[$("arrow",`
 color: var(--n-arrow-color-disabled);
 `),T("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[T("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),$("render-label",`
 color: var(--n-text-color-disabled);
 `)]),T("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),T("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),T("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[$("input",`
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
 `),$("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>re(`${e}-status`,[$("state-border",`border: var(--n-border-${e});`),gt("disabled",[q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),re("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),T("base-selection-label",`background-color: var(--n-color-active-${e});`),T("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),re("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),T("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),T("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[q("&:last-child","padding-right: 0;"),T("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[$("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Oo=ae({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=je(e),i=At("InternalSelection",o,n),l=O(null),a=O(null),u=O(null),r=O(null),g=O(null),w=O(null),v=O(null),S=O(null),m=O(null),h=O(null),y=O(!1),k=O(!1),H=O(!1),F=be("InternalSelection","-internal-selection",zo,Gt,e,J(e,"clsPrefix")),R=M(()=>e.clearable&&!e.disabled&&(H.value||e.active)),A=M(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Me(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),N=M(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),W=M(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Q(){var d;const{value:x}=l;if(x){const{value:G}=a;G&&(G.style.width=`${x.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=m.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:d}=h;d&&(d.style.display="none")}function se(){const{value:d}=h;d&&(d.style.display="inline-block")}Re(J(e,"active"),d=>{d||Z()}),Re(J(e,"pattern"),()=>{e.multiple&&Lt(Q)});function de(d){const{onFocus:x}=e;x&&x(d)}function ne(d){const{onBlur:x}=e;x&&x(d)}function ee(d){const{onDeleteOption:x}=e;x&&x(d)}function oe(d){const{onClear:x}=e;x&&x(d)}function c(d){const{onPatternInput:x}=e;x&&x(d)}function C(d){var x;(!d.relatedTarget||!(!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)))&&de(d)}function B(d){var x;!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)||ne(d)}function V(d){oe(d)}function U(){H.value=!0}function j(){H.value=!1}function K(d){!e.active||!e.filterable||d.target!==a.value&&d.preventDefault()}function L(d){ee(d)}const Y=O(!1);function f(d){if(d.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:x}=e;x!=null&&x.length&&L(x[x.length-1])}}let b=null;function D(d){const{value:x}=l;if(x){const G=d.target.value;x.textContent=G,Q()}e.ignoreComposition&&Y.value?b=d:c(d)}function ie(){Y.value=!0}function Te(){Y.value=!1,e.ignoreComposition&&c(b),b=null}function ze(d){var x;k.value=!0,(x=e.onPatternFocus)===null||x===void 0||x.call(e,d)}function he(d){var x;k.value=!1,(x=e.onPatternBlur)===null||x===void 0||x.call(e,d)}function le(){var d,x;if(e.filterable)k.value=!1,(d=w.value)===null||d===void 0||d.blur(),(x=a.value)===null||x===void 0||x.blur();else if(e.multiple){const{value:G}=r;G==null||G.blur()}else{const{value:G}=g;G==null||G.blur()}}function Oe(){var d,x,G;e.filterable?(k.value=!1,(d=w.value)===null||d===void 0||d.focus()):e.multiple?(x=r.value)===null||x===void 0||x.focus():(G=g.value)===null||G===void 0||G.focus()}function pe(){const{value:d}=a;d&&(se(),d.focus())}function Pe(){const{value:d}=a;d&&d.blur()}function ke(d){const{value:x}=v;x&&x.setTextContent(`+${d}`)}function $e(){const{value:d}=S;return d}function Be(){return a.value}let me=null;function we(){me!==null&&window.clearTimeout(me)}function Ee(){e.active||(we(),me=window.setTimeout(()=>{W.value&&(y.value=!0)},100))}function Ae(){we()}function Le(d){d||(we(),y.value=!1)}Re(W,d=>{d||(y.value=!1)}),We(()=>{Ln(()=>{const d=w.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=k.value?-1:0)})}),Kt(u,e.onResize);const{inlineThemeDisabled:Fe}=e,xe=M(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:x},self:{fontWeight:G,borderRadius:ot,color:it,placeholderColor:Ke,textColor:Ue,paddingSingle:qe,paddingMultiple:lt,caretColor:rt,colorDisabled:Ge,textColorDisabled:ge,placeholderColorDisabled:t,colorActive:p,boxShadowFocus:z,boxShadowActive:E,boxShadowHover:I,border:_,borderFocus:P,borderHover:X,borderActive:ce,arrowColor:Xt,arrowColorDisabled:Zt,loadingColor:Jt,colorActiveWarning:Qt,boxShadowFocusWarning:en,boxShadowActiveWarning:tn,boxShadowHoverWarning:nn,borderWarning:on,borderFocusWarning:ln,borderHoverWarning:rn,borderActiveWarning:an,colorActiveError:sn,boxShadowFocusError:dn,boxShadowActiveError:un,boxShadowHoverError:cn,borderError:fn,borderFocusError:hn,borderHoverError:vn,borderActiveError:pn,clearColor:gn,clearColorHover:bn,clearColorPressed:mn,clearSize:wn,arrowSize:xn,[ve("height",d)]:yn,[ve("fontSize",d)]:Cn}}=F.value,Ye=He(qe),Xe=He(lt);return{"--n-bezier":x,"--n-border":_,"--n-border-active":ce,"--n-border-focus":P,"--n-border-hover":X,"--n-border-radius":ot,"--n-box-shadow-active":E,"--n-box-shadow-focus":z,"--n-box-shadow-hover":I,"--n-caret-color":rt,"--n-color":it,"--n-color-active":p,"--n-color-disabled":Ge,"--n-font-size":Cn,"--n-height":yn,"--n-padding-single-top":Ye.top,"--n-padding-multiple-top":Xe.top,"--n-padding-single-right":Ye.right,"--n-padding-multiple-right":Xe.right,"--n-padding-single-left":Ye.left,"--n-padding-multiple-left":Xe.left,"--n-padding-single-bottom":Ye.bottom,"--n-padding-multiple-bottom":Xe.bottom,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":t,"--n-text-color":Ue,"--n-text-color-disabled":ge,"--n-arrow-color":Xt,"--n-arrow-color-disabled":Zt,"--n-loading-color":Jt,"--n-color-active-warning":Qt,"--n-box-shadow-focus-warning":en,"--n-box-shadow-active-warning":tn,"--n-box-shadow-hover-warning":nn,"--n-border-warning":on,"--n-border-focus-warning":ln,"--n-border-hover-warning":rn,"--n-border-active-warning":an,"--n-color-active-error":sn,"--n-box-shadow-focus-error":dn,"--n-box-shadow-active-error":un,"--n-box-shadow-hover-error":cn,"--n-border-error":fn,"--n-border-focus-error":hn,"--n-border-hover-error":vn,"--n-border-active-error":pn,"--n-clear-size":wn,"--n-clear-color":gn,"--n-clear-color-hover":bn,"--n-clear-color-pressed":mn,"--n-arrow-size":xn,"--n-font-weight":G}}),te=Fe?nt("internal-selection",M(()=>e.size[0]),xe,e):void 0;return{mergedTheme:F,mergedClearable:R,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:k,filterablePlaceholder:A,label:N,selected:W,showTagsPanel:y,isComposing:Y,counterRef:v,counterWrapperRef:S,patternInputMirrorRef:l,patternInputRef:a,selfRef:u,multipleElRef:r,singleElRef:g,patternInputWrapperRef:w,overflowRef:m,inputTagElRef:h,handleMouseDown:K,handleFocusin:C,handleClear:V,handleMouseEnter:U,handleMouseLeave:j,handleDeleteOption:L,handlePatternKeyDown:f,handlePatternInputInput:D,handlePatternInputBlur:he,handlePatternInputFocus:ze,handleMouseEnterCounter:Ee,handleMouseLeaveCounter:Ae,handleFocusout:B,handleCompositionEnd:Te,handleCompositionStart:ie,onPopoverUpdateShow:Le,focus:Oe,focusInput:pe,blur:le,blurInput:Pe,updateCounter:ke,getCounter:$e,getTail:Be,renderLabel:e.renderLabel,cssVars:Fe?void 0:xe,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:l,maxTagCount:a,bordered:u,clsPrefix:r,ellipsisTagPopoverProps:g,onRender:w,renderTag:v,renderLabel:S}=this;w==null||w();const m=a==="responsive",h=typeof a=="number",y=m||h,k=s(En,null,{default:()=>s(Jn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var F,R;return(R=(F=this.$slots).arrow)===null||R===void 0?void 0:R.call(F)}})});let H;if(n){const{labelField:F}=this,R=c=>s("div",{class:`${r}-base-selection-tag-wrapper`,key:c.value},v?v({option:c,handleClose:()=>{this.handleDeleteOption(c)}}):s(ut,{size:o,closable:!c.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(c)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(c,!0):Me(c[F],c,!0)})),A=()=>(h?this.selectedOptions.slice(0,a):this.selectedOptions).map(R),N=l?s("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,W=m?()=>s("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(ut,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let Q;if(h){const c=this.selectedOptions.length-a;c>0&&(Q=s("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},s(ut,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${c}`})))}const Z=m?l?s(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:W,tail:()=>N}):s(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:W}):h&&Q?A().concat(Q):A(),se=y?()=>s("div",{class:`${r}-base-selection-popover`},m?A():this.selectedOptions.map(R)):void 0,de=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},g):null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},s("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,oe=l?s("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},Z,m?null:N,k):s("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:i?void 0:0},Z,k);H=s(Dt,null,y?s(An,Object.assign({},de,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>oe,default:se}):oe,ee)}else if(l){const F=this.pattern||this.isComposing,R=this.active?!F:!this.selected,A=this.active?!1:this.selected;H=s("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:Mt(this.label)},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),A?s("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},s("div",{class:`${r}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):null,R?s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,k)}else H=s("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${r}-base-selection-input`,title:Mt(this.label),key:"input"},s("div",{class:`${r}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Me(this.label,this.selectedOption,!0))):s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),k);return s("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},H,u?s("div",{class:`${r}-base-selection__border`}):null,u?s("div",{class:`${r}-base-selection__state-border`}):null)}}),Fo=T("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[q(">",[T("input",[q("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),q("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),T("button",[q("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[$("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),q("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[$("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),q("*",[q("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[q(">",[T("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("base-selection",[T("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),T("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),q("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[q(">",[T("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("base-selection",[T("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),T("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),_o={},Mo=ae({name:"InputGroup",props:_o,setup(e){const{mergedClsPrefixRef:n}=je(e);return Dn("-input-group",Fo,n),{mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});function et(e){return e.type==="group"}function Yt(e){return e.type==="ignored"}function ht(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Io(e,n){return{getIsGroup:et,getIgnored:Yt,getKey(i){return et(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Po(e,n,o,i){if(!n)return e;function l(a){if(!Array.isArray(a))return[];const u=[];for(const r of a)if(et(r)){const g=l(r[i]);g.length&&u.push(Object.assign({},r,{[i]:g}))}else{if(Yt(r))continue;n(o,r)&&u.push(r)}return u}return l(e)}function ko(e,n,o){const i=new Map;return e.forEach(l=>{et(l)?l[o].forEach(a=>{i.set(a[n],a)}):i.set(l[n],l)}),i}function $o(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const Bo=wt({name:"Select",common:tt,peers:{InternalSelection:Gt,InternalSelectMenu:qt},self:$o}),Eo=q([T("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),T("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Et({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Ao=Object.assign(Object.assign({},be.props),{to:bt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Lo=ae({name:"Select",props:Ao,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:l}=je(e),a=be("Select","-select",Eo,Bo,e,n),u=O(e.defaultValue),r=J(e,"value"),g=Tt(r,u),w=O(!1),v=O(""),S=jn(e,["items","options"]),m=O([]),h=O([]),y=M(()=>h.value.concat(m.value).concat(S.value)),k=M(()=>{const{filter:t}=e;if(t)return t;const{labelField:p,valueField:z}=e;return(E,I)=>{if(!I)return!1;const _=I[p];if(typeof _=="string")return ht(E,_);const P=I[z];return typeof P=="string"?ht(E,P):typeof P=="number"?ht(E,String(P)):!1}}),H=M(()=>{if(e.remote)return S.value;{const{value:t}=y,{value:p}=v;return!p.length||!e.filterable?t:Po(t,k.value,p,e.childrenField)}}),F=M(()=>{const{valueField:t,childrenField:p}=e,z=Io(t,p);return Kn(H.value,z)}),R=M(()=>ko(y.value,e.valueField,e.childrenField)),A=O(!1),N=Tt(J(e,"show"),A),W=O(null),Q=O(null),Z=O(null),{localeRef:se}=Vt("Select"),de=M(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:se.value.placeholder}),ne=[],ee=O(new Map),oe=M(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:p,valueField:z}=e;return E=>({[p]:String(E),[z]:E})}return t===!1?!1:p=>Object.assign(t(p),{value:p})});function c(t){const p=e.remote,{value:z}=ee,{value:E}=R,{value:I}=oe,_=[];return t.forEach(P=>{if(E.has(P))_.push(E.get(P));else if(p&&z.has(P))_.push(z.get(P));else if(I){const X=I(P);X&&_.push(X)}}),_}const C=M(()=>{if(e.multiple){const{value:t}=g;return Array.isArray(t)?c(t):[]}return null}),B=M(()=>{const{value:t}=g;return!e.multiple&&!Array.isArray(t)?t===null?null:c([t])[0]||null:null}),V=Qn(e),{mergedSizeRef:U,mergedDisabledRef:j,mergedStatusRef:K}=V;function L(t,p){const{onChange:z,"onUpdate:value":E,onUpdateValue:I}=e,{nTriggerFormChange:_,nTriggerFormInput:P}=V;z&&fe(z,t,p),I&&fe(I,t,p),E&&fe(E,t,p),u.value=t,_(),P()}function Y(t){const{onBlur:p}=e,{nTriggerFormBlur:z}=V;p&&fe(p,t),z()}function f(){const{onClear:t}=e;t&&fe(t)}function b(t){const{onFocus:p,showOnFocus:z}=e,{nTriggerFormFocus:E}=V;p&&fe(p,t),E(),z&&he()}function D(t){const{onSearch:p}=e;p&&fe(p,t)}function ie(t){const{onScroll:p}=e;p&&fe(p,t)}function Te(){var t;const{remote:p,multiple:z}=e;if(p){const{value:E}=ee;if(z){const{valueField:I}=e;(t=C.value)===null||t===void 0||t.forEach(_=>{E.set(_[I],_)})}else{const I=B.value;I&&E.set(I[e.valueField],I)}}}function ze(t){const{onUpdateShow:p,"onUpdate:show":z}=e;p&&fe(p,t),z&&fe(z,t),A.value=t}function he(){j.value||(ze(!0),A.value=!0,e.filterable&&qe())}function le(){ze(!1)}function Oe(){v.value="",h.value=ne}const pe=O(!1);function Pe(){e.filterable&&(pe.value=!0)}function ke(){e.filterable&&(pe.value=!1,N.value||Oe())}function $e(){j.value||(N.value?e.filterable?qe():le():he())}function Be(t){var p,z;!((z=(p=Z.value)===null||p===void 0?void 0:p.selfRef)===null||z===void 0)&&z.contains(t.relatedTarget)||(w.value=!1,Y(t),le())}function me(t){b(t),w.value=!0}function we(){w.value=!0}function Ee(t){var p;!((p=W.value)===null||p===void 0)&&p.$el.contains(t.relatedTarget)||(w.value=!1,Y(t),le())}function Ae(){var t;(t=W.value)===null||t===void 0||t.focus(),le()}function Le(t){var p;N.value&&(!((p=W.value)===null||p===void 0)&&p.$el.contains(qn(t))||le())}function Fe(t){if(!Array.isArray(t))return[];if(oe.value)return Array.from(t);{const{remote:p}=e,{value:z}=R;if(p){const{value:E}=ee;return t.filter(I=>z.has(I)||E.has(I))}else return t.filter(E=>z.has(E))}}function xe(t){te(t.rawNode)}function te(t){if(j.value)return;const{tag:p,remote:z,clearFilterAfterSelect:E,valueField:I}=e;if(p&&!z){const{value:_}=h,P=_[0]||null;if(P){const X=m.value;X.length?X.push(P):m.value=[P],h.value=ne}}if(z&&ee.value.set(t[I],t),e.multiple){const _=Fe(g.value),P=_.findIndex(X=>X===t[I]);if(~P){if(_.splice(P,1),p&&!z){const X=d(t[I]);~X&&(m.value.splice(X,1),E&&(v.value=""))}}else _.push(t[I]),E&&(v.value="");L(_,c(_))}else{if(p&&!z){const _=d(t[I]);~_?m.value=[m.value[_]]:m.value=ne}Ue(),le(),L(t[I],t)}}function d(t){return m.value.findIndex(z=>z[e.valueField]===t)}function x(t){N.value||he();const{value:p}=t.target;v.value=p;const{tag:z,remote:E}=e;if(D(p),z&&!E){if(!p){h.value=ne;return}const{onCreate:I}=e,_=I?I(p):{[e.labelField]:p,[e.valueField]:p},{valueField:P,labelField:X}=e;S.value.some(ce=>ce[P]===_[P]||ce[X]===_[X])||m.value.some(ce=>ce[P]===_[P]||ce[X]===_[X])?h.value=ne:h.value=[_]}}function G(t){t.stopPropagation();const{multiple:p}=e;!p&&e.filterable&&le(),f(),p?L([],[]):L(null,null)}function ot(t){!Ve(t,"action")&&!Ve(t,"empty")&&!Ve(t,"header")&&t.preventDefault()}function it(t){ie(t)}function Ke(t){var p,z,E,I,_;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((p=W.value)===null||p===void 0)&&p.isComposing)){if(N.value){const P=(z=Z.value)===null||z===void 0?void 0:z.getPendingTmNode();P?xe(P):e.filterable||(le(),Ue())}else if(he(),e.tag&&pe.value){const P=h.value[0];if(P){const X=P[e.valueField],{value:ce}=g;e.multiple&&Array.isArray(ce)&&ce.includes(X)||te(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;N.value&&((E=Z.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;N.value?(I=Z.value)===null||I===void 0||I.next():he();break;case"Escape":N.value&&(eo(t),le()),(_=W.value)===null||_===void 0||_.focus();break}}function Ue(){var t;(t=W.value)===null||t===void 0||t.focus()}function qe(){var t;(t=W.value)===null||t===void 0||t.focusInput()}function lt(){var t;N.value&&((t=Q.value)===null||t===void 0||t.syncPosition())}Te(),Re(J(e,"options"),Te);const rt={focus:()=>{var t;(t=W.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=W.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=W.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=W.value)===null||t===void 0||t.blurInput()}},Ge=M(()=>{const{self:{menuBoxShadow:t}}=a.value;return{"--n-menu-box-shadow":t}}),ge=l?nt("select",void 0,Ge,e):void 0;return Object.assign(Object.assign({},rt),{mergedStatus:K,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:F,isMounted:Un(),triggerRef:W,menuRef:Z,pattern:v,uncontrolledShow:A,mergedShow:N,adjustedTo:bt(e),uncontrolledValue:u,mergedValue:g,followerRef:Q,localizedPlaceholder:de,selectedOption:B,selectedOptions:C,mergedSize:U,mergedDisabled:j,focused:w,activeWithoutMenuOpen:pe,inlineThemeDisabled:l,onTriggerInputFocus:Pe,onTriggerInputBlur:ke,handleTriggerOrMenuResize:lt,handleMenuFocus:we,handleMenuBlur:Ee,handleMenuTabOut:Ae,handleTriggerClick:$e,handleToggle:xe,handleDeleteOption:te,handlePatternInput:x,handleClear:G,handleTriggerBlur:Be,handleTriggerFocus:me,handleKeydown:Ke,handleMenuAfterLeave:Oe,handleMenuClickOutside:Le,handleMenuScroll:it,handleMenuKeydown:Ke,handleMenuMousedown:ot,mergedTheme:a,cssVars:l?void 0:Ge,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Nn,null,{default:()=>[s(Hn,null,{default:()=>s(Oo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),s(Vn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===bt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(Bt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Nt(s(So,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,l;return[(l=(i=this.$slots).empty)===null||l===void 0?void 0:l.call(i)]},header:()=>{var i,l;return[(l=(i=this.$slots).header)===null||l===void 0?void 0:l.call(i)]},action:()=>{var i,l;return[(l=(i=this.$slots).action)===null||l===void 0?void 0:l.call(i)]}}),this.displayDirective==="show"?[[Wn,this.mergedShow],[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Rt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Do={class:"wrap"},No={style:{width:"250px"}},Ho={class:"switch"},Vo={__name:"ShortItem",props:{element:Object},setup(e){const n=to(),o=e,i=O([{label:"Ctrl",value:"CommandOrControl"},{label:"Shift",value:"Shift"},{label:"Alt",value:"Alt"}]),l=o.element.cmd.split("+"),a=O(l[0]),u=O(l[1]),r=m=>{let h=[m,u.value].join("+"),y=Object.assign(dt(o.element),{cmd:h});v(y)},g=m=>{let h=u.value;if(m.preventDefault(),["Control","Shift","Alt"].includes(m.key))return;h=m.key===" "?"Space":w(m.key),h=h.replace(/^Arrow/,"");let y=[a.value,h].join("+"),k=Object.assign(dt(o.element),{cmd:y,flag:!1});v(k)},w=m=>m&&m.charAt(0).toUpperCase()+m.slice(1),v=m=>{window.myApi.updateShortcut(m).then(h=>{if(h.code===0){let y=h.data.cmd.split("+");a.value=y[0],u.value=y[1],n.success(h.msg)}else n.error(h.msg)})},S=m=>{let h=[a.value,u.value].join("+"),y=Object.assign(dt(o.element),{cmd:h,isOpen:m,flag:!0});v(y)};return(m,h)=>{const y=Lo,k=no,H=Mo,F=oo;return Ne(),Je("div",Do,[ue("div",No,Gn(e.element.tag),1),ue("div",null,[ye(H,null,{default:Ie(()=>[ye(y,{style:{width:"30%"},size:"small",options:Qe(i),value:Qe(a),"onUpdate:value":[h[0]||(h[0]=R=>zt(a)?a.value=R:null),r]},null,8,["options","value"]),h[3]||(h[3]=Ce("+ ")),ye(k,{style:{width:"40%"},size:"small",readonly:"",value:Qe(u),"onUpdate:value":h[1]||(h[1]=R=>zt(u)?u.value=R:null),onKeydown:g},null,8,["value"])]),_:1})]),ue("div",Ho,[ye(F,{size:"medium",value:e.element.isOpen,"onUpdate:value":[h[2]||(h[2]=R=>e.element.isOpen=R),S],style:{"font-size":"12px"}},{checked:Ie(()=>h[4]||(h[4]=[Ce(" 开启 ")])),unchecked:Ie(()=>h[5]||(h[5]=[Ce(" 禁用 ")])),_:1},8,["value"])])])}}},Wo=Ht(Vo,[["__scopeId","data-v-65e1b1e7"]]),jo={id:"content-main"},Ko={class:"box"},Uo={class:"box-card"},qo={__name:"ShortcutView",setup(e){const n=O([]);return We(async()=>{n.value=await window.myApi.getShortcuts()}),(o,i)=>{const l=lo,a=io,u=Wo,r=Xn("auto-height");return Ne(),Je("div",jo,[ye(a,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:Ie(()=>[ye(l,{style:{"margin-bottom":"0"}},{default:Ie(()=>i[0]||(i[0]=[Ce("快捷键")])),_:1})]),_:1}),ye(a,{"show-icon":!1},{default:Ie(()=>i[1]||(i[1]=[Ce(" 1.快捷键不区分大小写,先按住Ctrl键，再按其它快捷键；"),ue("br",null,null,-1),Ce(" 2.在macOS系统：Ctrl === Command键，Alt === Option键；"),ue("br",null,null,-1),Ce(" 3.自定义快捷键时，先获取焦点，然后在输入框中按其它快捷键；"),ue("br",null,null,-1)])),_:1}),ue("div",Ko,[i[2]||(i[2]=ue("div",{class:"title"},[ue("div",{style:{width:"250px"}}," 功能描述 "),ue("div",{style:{width:"200px"}}," 自定义快捷键 "),ue("div",{class:"switch"}," 是否禁用 ")],-1)),Nt((Ne(),Je("div",Uo,[(Ne(!0),Je(Dt,null,Yn(Qe(n),g=>(Ne(),Zn(u,{element:g},null,8,["element"]))),256))])),[[r,{offset:20}]])])])}}},Qo=Ht(qo,[["__scopeId","data-v-50ea3ad4"]]);export{Qo as default};
