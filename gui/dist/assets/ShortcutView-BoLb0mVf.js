import{aS as F,q as _,c2 as ye,aM as ft,M as ae,af as bt,a5 as s,bY as xt,ar as Sn,c3 as Rn,c4 as rt,c5 as Tn,aC as Ve,aw as zn,aA as Fn,bd as J,c6 as ht,c7 as Ae,c8 as On,c9 as at,bC as Ce,ay as $t,bO as et,bR as R,bV as $,bU as q,ca as Bt,bZ as We,b_ as be,b$ as ve,c0 as tt,cb as mt,cc as _n,cd as Oe,ce as wt,g as Et,cf as re,cg as vt,ch as At,bX as yt,ci as Mn,cj as In,bW as Pn,ck as Lt,cl as kn,cm as Ne,cn as He,as as Dt,co as $n,cp as Bn,cq as Fe,cr as En,cs as Ct,F as Nt,ct as An,bD as Ln,cu as Dn,cv as Nn,cw as Hn,cx as Vn,cy as pt,bJ as Wn,bz as jn,cz as St,cA as Rt,cB as Kn,cC as Un,cD as qn,cE as Gn,cF as fe,c1 as Ht,u as gt,aK as Ze,v as ue,b9 as Tt,bi as Le,I as _e,bH as Je,H as De,ak as zt,bc as Ft,aV as Xn,s as Yn}from"./index-p8R71G5r.js";import{u as Vt,N as Zn,a as Jn,m as Qn,b as eo,_ as to}from"./use-message-tBqbsSzN.js";import{_ as st}from"./Tag-erjFxn9y.js";import{_ as no}from"./Alert-DY7DKjpY.js";import{N as oo}from"./headers-CcMv8Gnr.js";function Ot(e){return e&-e}class Wt{constructor(n,o){this.l=n,this.min=o;const i=new Array(n+1);for(let l=0;l<n+1;++l)i[l]=0;this.ft=i}add(n,o){if(o===0)return;const{l:i,ft:l}=this;for(n+=1;n<=i;)l[n]+=o,n+=Ot(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:i,l}=this;if(n>l)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let a=n*i;for(;n>0;)a+=o[n],n-=Ot(n);return a}getBound(n){let o=0,i=this.l;for(;i>o;){const l=Math.floor((o+i)/2),a=this.sum(l);if(a>n){i=l;continue}else if(a<n){if(o===l)return this.sum(o+1)<=n?o+1:l;o=l}else return l}return o}}let Ye;function io(){return typeof document>"u"?!1:(Ye===void 0&&("matchMedia"in window?Ye=window.matchMedia("(pointer:coarse)").matches:Ye=!1),Ye)}let dt;function _t(){return typeof document>"u"?1:(dt===void 0&&(dt="chrome"in window?window.devicePixelRatio:1),dt)}const jt="VVirtualListXScroll";function lo({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const i=F(0),l=F(0),a=_(()=>{const w=e.value;if(w.length===0)return null;const v=new Wt(w.length,0);return w.forEach((S,m)=>{v.add(m,S.width)}),v}),u=ye(()=>{const w=a.value;return w!==null?Math.max(w.getBound(l.value)-1,0):0}),r=w=>{const v=a.value;return v!==null?v.sum(w):0},b=ye(()=>{const w=a.value;return w!==null?Math.min(w.getBound(l.value+i.value)+1,e.value.length-1):0});return ft(jt,{startIndexRef:u,endIndexRef:b,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:r}),{listWidthRef:i,scrollLeftRef:l}}const Mt=ae({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:i,renderColRef:l,renderItemWithColsRef:a}=bt(jt);return{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:a,getLeft:i}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:l,getLeft:a,item:u}=this;if(l!=null)return l({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:u,getLeft:a});if(i!=null){const r=[];for(let b=e;b<=n;++b){const w=o[b];r.push(i({column:w,left:a(b),item:u}))}return r}return null}}),ro=rt(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[rt("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[rt("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),ao=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Rn();ro.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Tn,ssr:n}),Ve(()=>{const{defaultScrollIndex:c,defaultScrollKey:y}=e;c!=null?H({index:c}):y!=null&&H({key:y})});let o=!1,i=!1;zn(()=>{if(o=!1,!i){i=!0;return}H({top:p.value,left:u.value})}),Fn(()=>{o=!0,i||(i=!0)});const l=ye(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let c=0;return e.columns.forEach(y=>{c+=y.width}),c}),a=_(()=>{const c=new Map,{keyField:y}=e;return e.items.forEach((B,V)=>{c.set(B[y],V)}),c}),{scrollLeftRef:u,listWidthRef:r}=lo({columnsRef:J(e,"columns"),renderColRef:J(e,"renderCol"),renderItemWithColsRef:J(e,"renderItemWithCols")}),b=F(null),w=F(void 0),v=new Map,S=_(()=>{const{items:c,itemSize:y,keyField:B}=e,V=new Wt(c.length,y);return c.forEach((U,j)=>{const K=U[B],L=v.get(K);L!==void 0&&V.add(j,L)}),V}),m=F(0),p=F(0),C=ye(()=>Math.max(S.value.getBound(p.value-ht(e.paddingTop))-1,0)),k=_(()=>{const{value:c}=w;if(c===void 0)return[];const{items:y,itemSize:B}=e,V=C.value,U=Math.min(V+Math.ceil(c/B+1),y.length-1),j=[];for(let K=V;K<=U;++K)j.push(y[K]);return j}),H=(c,y)=>{if(typeof c=="number"){N(c,y,"auto");return}const{left:B,top:V,index:U,key:j,position:K,behavior:L,debounce:X=!0}=c;if(B!==void 0||V!==void 0)N(B,V,L);else if(U!==void 0)A(U,L,X);else if(j!==void 0){const f=a.value.get(j);f!==void 0&&A(f,L,X)}else K==="bottom"?N(0,Number.MAX_SAFE_INTEGER,L):K==="top"&&N(0,0,L)};let z,O=null;function A(c,y,B){const{value:V}=S,U=V.sum(c)+ht(e.paddingTop);if(!B)b.value.scrollTo({left:0,top:U,behavior:y});else{z=c,O!==null&&window.clearTimeout(O),O=window.setTimeout(()=>{z=void 0,O=null},16);const{scrollTop:j,offsetHeight:K}=b.value;if(U>j){const L=V.get(c);U+L<=j+K||b.value.scrollTo({left:0,top:U+L-K,behavior:y})}else b.value.scrollTo({left:0,top:U,behavior:y})}}function N(c,y,B){b.value.scrollTo({left:c,top:y,behavior:B})}function W(c,y){var B,V,U;if(o||e.ignoreItemResize||oe(y.target))return;const{value:j}=S,K=a.value.get(c),L=j.get(K),X=(U=(V=(B=y.borderBoxSize)===null||B===void 0?void 0:B[0])===null||V===void 0?void 0:V.blockSize)!==null&&U!==void 0?U:y.contentRect.height;if(X===L)return;X-e.itemSize===0?v.delete(c):v.set(c,X-e.itemSize);const g=X-L;if(g===0)return;j.add(K,g);const D=b.value;if(D!=null){if(z===void 0){const ie=j.sum(K);D.scrollTop>ie&&D.scrollBy(0,g)}else if(K<z)D.scrollBy(0,g);else if(K===z){const ie=j.sum(K);X+ie>D.scrollTop+D.offsetHeight&&D.scrollBy(0,g)}ee()}m.value++}const Q=!io();let Z=!1;function se(c){var y;(y=e.onScroll)===null||y===void 0||y.call(e,c),(!Q||!Z)&&ee()}function de(c){var y;if((y=e.onWheel)===null||y===void 0||y.call(e,c),Q){const B=b.value;if(B!=null){if(c.deltaX===0&&(B.scrollTop===0&&c.deltaY<=0||B.scrollTop+B.offsetHeight>=B.scrollHeight&&c.deltaY>=0))return;c.preventDefault(),B.scrollTop+=c.deltaY/_t(),B.scrollLeft+=c.deltaX/_t(),ee(),Z=!0,On(()=>{Z=!1})}}}function ne(c){if(o||oe(c.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(c.contentRect.height===w.value)return}else if(c.contentRect.height===w.value&&c.contentRect.width===r.value)return;w.value=c.contentRect.height,r.value=c.contentRect.width;const{onResize:y}=e;y!==void 0&&y(c)}function ee(){const{value:c}=b;c!=null&&(p.value=c.scrollTop,u.value=c.scrollLeft)}function oe(c){let y=c;for(;y!==null;){if(y.style.display==="none")return!0;y=y.parentElement}return!1}return{listHeight:w,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:_(()=>{const{itemResizable:c}=e,y=Ae(S.value.sum());return m.value,[e.itemsStyle,{boxSizing:"content-box",width:Ae(l.value),height:c?"":y,minHeight:c?y:"",paddingTop:Ae(e.paddingTop),paddingBottom:Ae(e.paddingBottom)}]}),visibleItemsStyle:_(()=>(m.value,{transform:`translateY(${Ae(S.value.sum(C.value))})`})),viewportItems:k,listElRef:b,itemsElRef:F(null),scrollTo:H,handleListResize:ne,handleListScroll:se,handleListWheel:de,handleItemResize:W}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:i}=this;return s(xt,{onResize:this.handleListResize},{default:()=>{var l,a;return s("div",Sn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?s("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[s(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:u,renderItemWithCols:r}=this;return this.viewportItems.map(b=>{const w=b[n],v=o.get(w),S=u!=null?s(Mt,{index:v,item:b}):void 0,m=r!=null?s(Mt,{index:v,item:b}):void 0,p=this.$slots.default({item:b,renderedCols:S,renderedItemWithCols:m,index:v})[0];return e?s(xt,{key:w,onResize:C=>this.handleItemResize(w,C)},{default:()=>p}):(p.key=w,p)})}})]):(a=(l=this.$slots).empty)===null||a===void 0?void 0:a.call(l)])}})}});function Kt(e,n){n&&(Ve(()=>{const{value:o}=e;o&&at.registerHandler(o,n)}),Ce(e,(o,i)=>{i&&at.unregisterHandler(i)},{deep:!1}),$t(()=>{const{value:o}=e;o&&at.unregisterHandler(o)}))}function It(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ut(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(i=>{i&&i(o)})}}const so=ae({name:"Checkmark",render(){return s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},s("g",{fill:"none"},s("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),uo=ae({name:"Empty",render(){return s("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),s("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),co=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>s("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),fo={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function ho(e){const{textColorDisabled:n,iconColor:o,textColor2:i,fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:r,fontSizeHuge:b}=e;return Object.assign(Object.assign({},fo),{fontSizeTiny:l,fontSizeSmall:a,fontSizeMedium:u,fontSizeLarge:r,fontSizeHuge:b,textColor:n,iconColor:o,extraTextColor:i})}const Ut={name:"Empty",common:et,self:ho},vo=R("empty",`
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
 `)]),po=Object.assign(Object.assign({},be.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),go=ae({name:"Empty",props:po,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedComponentPropsRef:i}=We(e),l=be("Empty","-empty",vo,Ut,e,n),{localeRef:a}=Vt("Empty"),u=_(()=>{var v,S,m;return(v=e.description)!==null&&v!==void 0?v:(m=(S=i==null?void 0:i.value)===null||S===void 0?void 0:S.Empty)===null||m===void 0?void 0:m.description}),r=_(()=>{var v,S;return((S=(v=i==null?void 0:i.value)===null||v===void 0?void 0:v.Empty)===null||S===void 0?void 0:S.renderIcon)||(()=>s(uo,null))}),b=_(()=>{const{size:v}=e,{common:{cubicBezierEaseInOut:S},self:{[ve("iconSize",v)]:m,[ve("fontSize",v)]:p,textColor:C,iconColor:k,extraTextColor:H}}=l.value;return{"--n-icon-size":m,"--n-font-size":p,"--n-bezier":S,"--n-text-color":C,"--n-icon-color":k,"--n-extra-text-color":H}}),w=o?tt("empty",_(()=>{let v="";const{size:S}=e;return v+=S[0],v}),b,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:_(()=>u.value||a.value.description),cssVars:o?void 0:b,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:o}=this;return o==null||o(),s("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?s("div",{class:`${n}-empty__icon`},e.icon?e.icon():s(Bt,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?s("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?s("div",{class:`${n}-empty__extra`},e.extra()):null)}}),bo={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function mo(e){const{borderRadius:n,popoverColor:o,textColor3:i,dividerColor:l,textColor2:a,primaryColorPressed:u,textColorDisabled:r,primaryColor:b,opacityDisabled:w,hoverColor:v,fontSizeTiny:S,fontSizeSmall:m,fontSizeMedium:p,fontSizeLarge:C,fontSizeHuge:k,heightTiny:H,heightSmall:z,heightMedium:O,heightLarge:A,heightHuge:N}=e;return Object.assign(Object.assign({},bo),{optionFontSizeTiny:S,optionFontSizeSmall:m,optionFontSizeMedium:p,optionFontSizeLarge:C,optionFontSizeHuge:k,optionHeightTiny:H,optionHeightSmall:z,optionHeightMedium:O,optionHeightLarge:A,optionHeightHuge:N,borderRadius:n,color:o,groupHeaderTextColor:i,actionDividerColor:l,optionTextColor:a,optionTextColorPressed:u,optionTextColorDisabled:r,optionTextColorActive:b,optionOpacityDisabled:w,optionCheckColor:b,optionColorPending:v,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:v,actionTextColor:a,loadingColor:b})}const qt=mt({name:"InternalSelectMenu",common:et,peers:{Scrollbar:_n,Empty:Ut},self:mo}),Pt=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:i}=bt(wt);return{labelField:o,nodeProps:i,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:i,tmNode:{rawNode:l}}=this,a=i==null?void 0:i(l),u=n?n(l,!1):Oe(l[this.labelField],l,!1),r=s("div",Object.assign({},a,{class:[`${e}-base-select-group-header`,a==null?void 0:a.class]}),u);return l.render?l.render({node:r,option:l}):o?o({node:r,option:l,selected:!1}):r}});function wo(e,n){return s(Et,{name:"fade-in-scale-up-transition"},{default:()=>e?s(Bt,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>s(so)}):null})}const kt=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:i,valueSetRef:l,renderLabelRef:a,renderOptionRef:u,labelFieldRef:r,valueFieldRef:b,showCheckmarkRef:w,nodePropsRef:v,handleOptionClick:S,handleOptionMouseEnter:m}=bt(wt),p=ye(()=>{const{value:z}=o;return z?e.tmNode.key===z.key:!1});function C(z){const{tmNode:O}=e;O.disabled||S(z,O)}function k(z){const{tmNode:O}=e;O.disabled||m(z,O)}function H(z){const{tmNode:O}=e,{value:A}=p;O.disabled||A||m(z,O)}return{multiple:i,isGrouped:ye(()=>{const{tmNode:z}=e,{parent:O}=z;return O&&O.rawNode.type==="group"}),showCheckmark:w,nodeProps:v,isPending:p,isSelected:ye(()=>{const{value:z}=n,{value:O}=i;if(z===null)return!1;const A=e.tmNode.rawNode[b.value];if(O){const{value:N}=l;return N.has(A)}else return z===A}),labelField:r,renderLabel:a,renderOption:u,handleMouseMove:H,handleMouseEnter:k,handleClick:C}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:i,isGrouped:l,showCheckmark:a,nodeProps:u,renderOption:r,renderLabel:b,handleClick:w,handleMouseEnter:v,handleMouseMove:S}=this,m=wo(o,e),p=b?[b(n,o),a&&m]:[Oe(n[this.labelField],n,o),a&&m],C=u==null?void 0:u(n),k=s("div",Object.assign({},C,{class:[`${e}-base-select-option`,n.class,C==null?void 0:C.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:l,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:a}],style:[(C==null?void 0:C.style)||"",n.style||""],onClick:ut([w,C==null?void 0:C.onClick]),onMouseenter:ut([v,C==null?void 0:C.onMouseenter]),onMousemove:ut([S,C==null?void 0:C.onMousemove])}),s("div",{class:`${e}-base-select-option__content`},p));return n.render?n.render({node:k,option:n,selected:o}):r?r({node:k,option:n,selected:o}):k}}),xo=R("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[R("scrollbar",`
 max-height: var(--n-height);
 `),R("virtual-list",`
 max-height: var(--n-height);
 `),R("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[$("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),R("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),R("base-select-menu-option-wrapper",`
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
 `),R("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),R("base-select-option",`
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
 `,[vt("selected",`
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
 `,[At({enterScale:"0.5"})])])]),yo=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=We(e),i=Lt("InternalSelectMenu",o,n),l=be("InternalSelectMenu","-internal-select-menu",xo,qt,e,J(e,"clsPrefix")),a=F(null),u=F(null),r=F(null),b=_(()=>e.treeMate.getFlattenedNodes()),w=_(()=>kn(b.value)),v=F(null);function S(){const{treeMate:f}=e;let g=null;const{value:D}=e;D===null?g=f.getFirstAvailableNode():(e.multiple?g=f.getNode((D||[])[(D||[]).length-1]):g=f.getNode(D),(!g||g.disabled)&&(g=f.getFirstAvailableNode())),y(g||null)}function m(){const{value:f}=v;f&&!e.treeMate.getNode(f.key)&&(v.value=null)}let p;Ce(()=>e.show,f=>{f?p=Ce(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?S():m(),Dt(B)):m()},{immediate:!0}):p==null||p()},{immediate:!0}),$t(()=>{p==null||p()});const C=_(()=>ht(l.value.self[ve("optionHeight",e.size)])),k=_(()=>Ne(l.value.self[ve("padding",e.size)])),H=_(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),z=_(()=>{const f=b.value;return f&&f.length===0});function O(f){const{onToggle:g}=e;g&&g(f)}function A(f){const{onScroll:g}=e;g&&g(f)}function N(f){var g;(g=r.value)===null||g===void 0||g.sync(),A(f)}function W(){var f;(f=r.value)===null||f===void 0||f.sync()}function Q(){const{value:f}=v;return f||null}function Z(f,g){g.disabled||y(g,!1)}function se(f,g){g.disabled||O(g)}function de(f){var g;He(f,"action")||(g=e.onKeyup)===null||g===void 0||g.call(e,f)}function ne(f){var g;He(f,"action")||(g=e.onKeydown)===null||g===void 0||g.call(e,f)}function ee(f){var g;(g=e.onMousedown)===null||g===void 0||g.call(e,f),!e.focusable&&f.preventDefault()}function oe(){const{value:f}=v;f&&y(f.getNext({loop:!0}),!0)}function c(){const{value:f}=v;f&&y(f.getPrev({loop:!0}),!0)}function y(f,g=!1){v.value=f,g&&B()}function B(){var f,g;const D=v.value;if(!D)return;const ie=w.value(D.key);ie!==null&&(e.virtualScroll?(f=u.value)===null||f===void 0||f.scrollTo({index:ie}):(g=r.value)===null||g===void 0||g.scrollTo({index:ie,elSize:C.value}))}function V(f){var g,D;!((g=a.value)===null||g===void 0)&&g.contains(f.target)&&((D=e.onFocus)===null||D===void 0||D.call(e,f))}function U(f){var g,D;!((g=a.value)===null||g===void 0)&&g.contains(f.relatedTarget)||(D=e.onBlur)===null||D===void 0||D.call(e,f)}ft(wt,{handleOptionMouseEnter:Z,handleOptionClick:se,valueSetRef:H,pendingTmNodeRef:v,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),ft($n,a),Ve(()=>{const{value:f}=r;f&&f.sync()});const j=_(()=>{const{size:f}=e,{common:{cubicBezierEaseInOut:g},self:{height:D,borderRadius:ie,color:Se,groupHeaderTextColor:Re,actionDividerColor:he,optionTextColorPressed:le,optionTextColor:Te,optionTextColorDisabled:pe,optionTextColorActive:Me,optionOpacityDisabled:Ie,optionCheckColor:Pe,actionTextColor:ke,optionColorPending:me,optionColorActive:we,loadingColor:$e,loadingSize:Be,optionColorActivePending:Ee,[ve("optionFontSize",f)]:ze,[ve("optionHeight",f)]:xe,[ve("optionPadding",f)]:te}}=l.value;return{"--n-height":D,"--n-action-divider-color":he,"--n-action-text-color":ke,"--n-bezier":g,"--n-border-radius":ie,"--n-color":Se,"--n-option-font-size":ze,"--n-group-header-text-color":Re,"--n-option-check-color":Pe,"--n-option-color-pending":me,"--n-option-color-active":we,"--n-option-color-active-pending":Ee,"--n-option-height":xe,"--n-option-opacity-disabled":Ie,"--n-option-text-color":Te,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":pe,"--n-option-text-color-pressed":le,"--n-option-padding":te,"--n-option-padding-left":Ne(te,"left"),"--n-option-padding-right":Ne(te,"right"),"--n-loading-color":$e,"--n-loading-size":Be}}),{inlineThemeDisabled:K}=e,L=K?tt("internal-select-menu",_(()=>e.size[0]),j,e):void 0,X={selfRef:a,next:oe,prev:c,getPendingTmNode:Q};return Kt(a,e.onResize),Object.assign({mergedTheme:l,mergedClsPrefix:n,rtlEnabled:i,virtualListRef:u,scrollbarRef:r,itemSize:C,padding:k,flattenedNodes:b,empty:z,virtualListContainer(){const{value:f}=u;return f==null?void 0:f.listElRef},virtualListContent(){const{value:f}=u;return f==null?void 0:f.itemsElRef},doScroll:A,handleFocusin:V,handleFocusout:U,handleKeyUp:de,handleKeyDown:ne,handleMouseDown:ee,handleVirtualListResize:W,handleVirtualListScroll:N,cssVars:K?void 0:j,themeClass:L==null?void 0:L.themeClass,onRender:L==null?void 0:L.onRender},X)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:i,themeClass:l,onRender:a}=this;return a==null||a(),s("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,l,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},yt(e.header,u=>u&&s("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},u)),this.loading?s("div",{class:`${o}-base-select-menu__loading`},s(Mn,{clsPrefix:o,strokeWidth:20})):this.empty?s("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},Pn(e.empty,()=>[s(go,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty,size:this.size})])):s(In,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?s(ao,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?s(Pt,{key:u.key,clsPrefix:o,tmNode:u}):u.ignored?null:s(kt,{clsPrefix:o,key:u.key,tmNode:u})}):s("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?s(Pt,{key:u.key,clsPrefix:o,tmNode:u}):s(kt,{clsPrefix:o,key:u.key,tmNode:u})))}),yt(e.action,u=>u&&[s("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},u),s(co,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Co={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function So(e){const{borderRadius:n,textColor2:o,textColorDisabled:i,inputColor:l,inputColorDisabled:a,primaryColor:u,primaryColorHover:r,warningColor:b,warningColorHover:w,errorColor:v,errorColorHover:S,borderColor:m,iconColor:p,iconColorDisabled:C,clearColor:k,clearColorHover:H,clearColorPressed:z,placeholderColor:O,placeholderColorDisabled:A,fontSizeTiny:N,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Z,heightTiny:se,heightSmall:de,heightMedium:ne,heightLarge:ee,fontWeight:oe}=e;return Object.assign(Object.assign({},Co),{fontSizeTiny:N,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Z,heightTiny:se,heightSmall:de,heightMedium:ne,heightLarge:ee,borderRadius:n,fontWeight:oe,textColor:o,textColorDisabled:i,placeholderColor:O,placeholderColorDisabled:A,color:l,colorDisabled:a,colorActive:l,border:`1px solid ${m}`,borderHover:`1px solid ${r}`,borderActive:`1px solid ${u}`,borderFocus:`1px solid ${r}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Fe(u,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Fe(u,{alpha:.2})}`,caretColor:u,arrowColor:p,arrowColorDisabled:C,loadingColor:u,borderWarning:`1px solid ${b}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${b}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Fe(b,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Fe(b,{alpha:.2})}`,colorActiveWarning:l,caretColorWarning:b,borderError:`1px solid ${v}`,borderHoverError:`1px solid ${S}`,borderActiveError:`1px solid ${v}`,borderFocusError:`1px solid ${S}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Fe(v,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Fe(v,{alpha:.2})}`,colorActiveError:l,caretColorError:v,clearColor:k,clearColorHover:H,clearColorPressed:z})}const Gt=mt({name:"InternalSelection",common:et,peers:{Popover:Bn},self:So}),Ro=q([R("base-selection",`
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
 `,[R("base-loading",`
 color: var(--n-loading-color);
 `),R("base-selection-tags","min-height: var(--n-height);"),$("border, state-border",`
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
 `),R("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[$("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),R("base-selection-overlay",`
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
 `)]),R("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[$("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),R("base-selection-tags",`
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
 `),R("base-selection-label",`
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
 `,[R("base-selection-input",`
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
 `)]),vt("disabled",[q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),re("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),re("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),R("base-selection-label","background-color: var(--n-color-active);"),R("base-selection-tags","background-color: var(--n-color-active);")])]),re("disabled","cursor: not-allowed;",[$("arrow",`
 color: var(--n-arrow-color-disabled);
 `),R("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[R("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),$("render-label",`
 color: var(--n-text-color-disabled);
 `)]),R("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),R("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),R("base-selection-input-tag",`
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
 `)]),["warning","error"].map(e=>re(`${e}-status`,[$("state-border",`border: var(--n-border-${e});`),vt("disabled",[q("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),re("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),R("base-selection-label",`background-color: var(--n-color-active-${e});`),R("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),re("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),R("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),R("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[q("&:last-child","padding-right: 0;"),R("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[$("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),To=ae({name:"InternalSelection",props:Object.assign(Object.assign({},be.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=We(e),i=Lt("InternalSelection",o,n),l=F(null),a=F(null),u=F(null),r=F(null),b=F(null),w=F(null),v=F(null),S=F(null),m=F(null),p=F(null),C=F(!1),k=F(!1),H=F(!1),z=be("InternalSelection","-internal-selection",Ro,Gt,e,J(e,"clsPrefix")),O=_(()=>e.clearable&&!e.disabled&&(H.value||e.active)),A=_(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),N=_(()=>{const d=e.selectedOption;if(d)return d[e.labelField]}),W=_(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Q(){var d;const{value:x}=l;if(x){const{value:G}=a;G&&(G.style.width=`${x.offsetWidth}px`,e.maxTagCount!=="responsive"&&((d=m.value)===null||d===void 0||d.sync({showAllItemsBeforeCalculate:!1})))}}function Z(){const{value:d}=p;d&&(d.style.display="none")}function se(){const{value:d}=p;d&&(d.style.display="inline-block")}Ce(J(e,"active"),d=>{d||Z()}),Ce(J(e,"pattern"),()=>{e.multiple&&Dt(Q)});function de(d){const{onFocus:x}=e;x&&x(d)}function ne(d){const{onBlur:x}=e;x&&x(d)}function ee(d){const{onDeleteOption:x}=e;x&&x(d)}function oe(d){const{onClear:x}=e;x&&x(d)}function c(d){const{onPatternInput:x}=e;x&&x(d)}function y(d){var x;(!d.relatedTarget||!(!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)))&&de(d)}function B(d){var x;!((x=u.value)===null||x===void 0)&&x.contains(d.relatedTarget)||ne(d)}function V(d){oe(d)}function U(){H.value=!0}function j(){H.value=!1}function K(d){!e.active||!e.filterable||d.target!==a.value&&d.preventDefault()}function L(d){ee(d)}const X=F(!1);function f(d){if(d.key==="Backspace"&&!X.value&&!e.pattern.length){const{selectedOptions:x}=e;x!=null&&x.length&&L(x[x.length-1])}}let g=null;function D(d){const{value:x}=l;if(x){const G=d.target.value;x.textContent=G,Q()}e.ignoreComposition&&X.value?g=d:c(d)}function ie(){X.value=!0}function Se(){X.value=!1,e.ignoreComposition&&c(g),g=null}function Re(d){var x;k.value=!0,(x=e.onPatternFocus)===null||x===void 0||x.call(e,d)}function he(d){var x;k.value=!1,(x=e.onPatternBlur)===null||x===void 0||x.call(e,d)}function le(){var d,x;if(e.filterable)k.value=!1,(d=w.value)===null||d===void 0||d.blur(),(x=a.value)===null||x===void 0||x.blur();else if(e.multiple){const{value:G}=r;G==null||G.blur()}else{const{value:G}=b;G==null||G.blur()}}function Te(){var d,x,G;e.filterable?(k.value=!1,(d=w.value)===null||d===void 0||d.focus()):e.multiple?(x=r.value)===null||x===void 0||x.focus():(G=b.value)===null||G===void 0||G.focus()}function pe(){const{value:d}=a;d&&(se(),d.focus())}function Me(){const{value:d}=a;d&&d.blur()}function Ie(d){const{value:x}=v;x&&x.setTextContent(`+${d}`)}function Pe(){const{value:d}=S;return d}function ke(){return a.value}let me=null;function we(){me!==null&&window.clearTimeout(me)}function $e(){e.active||(we(),me=window.setTimeout(()=>{W.value&&(C.value=!0)},100))}function Be(){we()}function Ee(d){d||(we(),C.value=!1)}Ce(W,d=>{d||(C.value=!1)}),Ve(()=>{Ln(()=>{const d=w.value;d&&(e.disabled?d.removeAttribute("tabindex"):d.tabIndex=k.value?-1:0)})}),Kt(u,e.onResize);const{inlineThemeDisabled:ze}=e,xe=_(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:x},self:{fontWeight:G,borderRadius:nt,color:ot,placeholderColor:je,textColor:Ke,paddingSingle:Ue,paddingMultiple:it,caretColor:lt,colorDisabled:qe,textColorDisabled:ge,placeholderColorDisabled:t,colorActive:h,boxShadowFocus:T,boxShadowActive:E,boxShadowHover:I,border:M,borderFocus:P,borderHover:Y,borderActive:ce,arrowColor:Yt,arrowColorDisabled:Zt,loadingColor:Jt,colorActiveWarning:Qt,boxShadowFocusWarning:en,boxShadowActiveWarning:tn,boxShadowHoverWarning:nn,borderWarning:on,borderFocusWarning:ln,borderHoverWarning:rn,borderActiveWarning:an,colorActiveError:sn,boxShadowFocusError:dn,boxShadowActiveError:un,boxShadowHoverError:cn,borderError:fn,borderFocusError:hn,borderHoverError:vn,borderActiveError:pn,clearColor:gn,clearColorHover:bn,clearColorPressed:mn,clearSize:wn,arrowSize:xn,[ve("height",d)]:yn,[ve("fontSize",d)]:Cn}}=z.value,Ge=Ne(Ue),Xe=Ne(it);return{"--n-bezier":x,"--n-border":M,"--n-border-active":ce,"--n-border-focus":P,"--n-border-hover":Y,"--n-border-radius":nt,"--n-box-shadow-active":E,"--n-box-shadow-focus":T,"--n-box-shadow-hover":I,"--n-caret-color":lt,"--n-color":ot,"--n-color-active":h,"--n-color-disabled":qe,"--n-font-size":Cn,"--n-height":yn,"--n-padding-single-top":Ge.top,"--n-padding-multiple-top":Xe.top,"--n-padding-single-right":Ge.right,"--n-padding-multiple-right":Xe.right,"--n-padding-single-left":Ge.left,"--n-padding-multiple-left":Xe.left,"--n-padding-single-bottom":Ge.bottom,"--n-padding-multiple-bottom":Xe.bottom,"--n-placeholder-color":je,"--n-placeholder-color-disabled":t,"--n-text-color":Ke,"--n-text-color-disabled":ge,"--n-arrow-color":Yt,"--n-arrow-color-disabled":Zt,"--n-loading-color":Jt,"--n-color-active-warning":Qt,"--n-box-shadow-focus-warning":en,"--n-box-shadow-active-warning":tn,"--n-box-shadow-hover-warning":nn,"--n-border-warning":on,"--n-border-focus-warning":ln,"--n-border-hover-warning":rn,"--n-border-active-warning":an,"--n-color-active-error":sn,"--n-box-shadow-focus-error":dn,"--n-box-shadow-active-error":un,"--n-box-shadow-hover-error":cn,"--n-border-error":fn,"--n-border-focus-error":hn,"--n-border-hover-error":vn,"--n-border-active-error":pn,"--n-clear-size":wn,"--n-clear-color":gn,"--n-clear-color-hover":bn,"--n-clear-color-pressed":mn,"--n-arrow-size":xn,"--n-font-weight":G}}),te=ze?tt("internal-selection",_(()=>e.size[0]),xe,e):void 0;return{mergedTheme:z,mergedClearable:O,mergedClsPrefix:n,rtlEnabled:i,patternInputFocused:k,filterablePlaceholder:A,label:N,selected:W,showTagsPanel:C,isComposing:X,counterRef:v,counterWrapperRef:S,patternInputMirrorRef:l,patternInputRef:a,selfRef:u,multipleElRef:r,singleElRef:b,patternInputWrapperRef:w,overflowRef:m,inputTagElRef:p,handleMouseDown:K,handleFocusin:y,handleClear:V,handleMouseEnter:U,handleMouseLeave:j,handleDeleteOption:L,handlePatternKeyDown:f,handlePatternInputInput:D,handlePatternInputBlur:he,handlePatternInputFocus:Re,handleMouseEnterCounter:$e,handleMouseLeaveCounter:Be,handleFocusout:B,handleCompositionEnd:Se,handleCompositionStart:ie,onPopoverUpdateShow:Ee,focus:Te,focusInput:pe,blur:le,blurInput:Me,updateCounter:Ie,getCounter:Pe,getTail:ke,renderLabel:e.renderLabel,cssVars:ze?void 0:xe,themeClass:te==null?void 0:te.themeClass,onRender:te==null?void 0:te.onRender}},render(){const{status:e,multiple:n,size:o,disabled:i,filterable:l,maxTagCount:a,bordered:u,clsPrefix:r,ellipsisTagPopoverProps:b,onRender:w,renderTag:v,renderLabel:S}=this;w==null||w();const m=a==="responsive",p=typeof a=="number",C=m||p,k=s(En,null,{default:()=>s(Zn,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var z,O;return(O=(z=this.$slots).arrow)===null||O===void 0?void 0:O.call(z)}})});let H;if(n){const{labelField:z}=this,O=c=>s("div",{class:`${r}-base-selection-tag-wrapper`,key:c.value},v?v({option:c,handleClose:()=>{this.handleDeleteOption(c)}}):s(st,{size:o,closable:!c.disabled,disabled:i,onClose:()=>{this.handleDeleteOption(c)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>S?S(c,!0):Oe(c[z],c,!0)})),A=()=>(p?this.selectedOptions.slice(0,a):this.selectedOptions).map(O),N=l?s("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),s("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,W=m?()=>s("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},s(st,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let Q;if(p){const c=this.selectedOptions.length-a;c>0&&(Q=s("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},s(st,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${c}`})))}const Z=m?l?s(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:W,tail:()=>N}):s(Ct,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:A,counter:W}):p&&Q?A().concat(Q):A(),se=C?()=>s("div",{class:`${r}-base-selection-popover`},m?A():this.selectedOptions.map(O)):void 0,de=C?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},b):null,ee=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},s("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,oe=l?s("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},Z,m?null:N,k):s("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:i?void 0:0},Z,k);H=s(Nt,null,C?s(An,Object.assign({},de,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>oe,default:se}):oe,ee)}else if(l){const z=this.pattern||this.isComposing,O=this.active?!z:!this.selected,A=this.active?!1:this.selected;H=s("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`,title:this.patternInputFocused?void 0:It(this.label)},s("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),A?s("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},s("div",{class:`${r}-base-selection-overlay__wrapper`},v?v({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,O?s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,k)}else H=s("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?s("div",{class:`${r}-base-selection-input`,title:It(this.label),key:"input"},s("div",{class:`${r}-base-selection-input__content`},v?v({option:this.selectedOption,handleClose:()=>{}}):S?S(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):s("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},s("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),k);return s("div",{ref:"selfRef",class:[`${r}-base-selection`,this.rtlEnabled&&`${r}-base-selection--rtl`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},H,u?s("div",{class:`${r}-base-selection__border`}):null,u?s("div",{class:`${r}-base-selection__state-border`}):null)}}),zo=R("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[q(">",[R("input",[q("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),q("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),R("button",[q("&:not(:last-child)",`
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
 `,[q(">",[R("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),R("base-selection",[R("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),R("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),q("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[q(">",[R("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),R("base-selection",[R("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),R("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),$("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),Fo={},Oo=ae({name:"InputGroup",props:Fo,setup(e){const{mergedClsPrefixRef:n}=We(e);return Dn("-input-group",zo,n),{mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:`${e}-input-group`},this.$slots)}});function Qe(e){return e.type==="group"}function Xt(e){return e.type==="ignored"}function ct(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function _o(e,n){return{getIsGroup:Qe,getIgnored:Xt,getKey(i){return Qe(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[n]}}}function Mo(e,n,o,i){if(!n)return e;function l(a){if(!Array.isArray(a))return[];const u=[];for(const r of a)if(Qe(r)){const b=l(r[i]);b.length&&u.push(Object.assign({},r,{[i]:b}))}else{if(Xt(r))continue;n(o,r)&&u.push(r)}return u}return l(e)}function Io(e,n,o){const i=new Map;return e.forEach(l=>{Qe(l)?l[o].forEach(a=>{i.set(a[n],a)}):i.set(l[n],l)}),i}function Po(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const ko=mt({name:"Select",common:et,peers:{InternalSelection:Gt,InternalSelectMenu:qt},self:Po}),$o=q([R("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),R("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[At({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Bo=Object.assign(Object.assign({},be.props),{to:pt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Eo=ae({name:"Select",props:Bo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:i,inlineThemeDisabled:l}=We(e),a=be("Select","-select",$o,ko,e,n),u=F(e.defaultValue),r=J(e,"value"),b=Rt(r,u),w=F(!1),v=F(""),S=Kn(e,["items","options"]),m=F([]),p=F([]),C=_(()=>p.value.concat(m.value).concat(S.value)),k=_(()=>{const{filter:t}=e;if(t)return t;const{labelField:h,valueField:T}=e;return(E,I)=>{if(!I)return!1;const M=I[h];if(typeof M=="string")return ct(E,M);const P=I[T];return typeof P=="string"?ct(E,P):typeof P=="number"?ct(E,String(P)):!1}}),H=_(()=>{if(e.remote)return S.value;{const{value:t}=C,{value:h}=v;return!h.length||!e.filterable?t:Mo(t,k.value,h,e.childrenField)}}),z=_(()=>{const{valueField:t,childrenField:h}=e,T=_o(t,h);return Un(H.value,T)}),O=_(()=>Io(C.value,e.valueField,e.childrenField)),A=F(!1),N=Rt(J(e,"show"),A),W=F(null),Q=F(null),Z=F(null),{localeRef:se}=Vt("Select"),de=_(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:se.value.placeholder}),ne=[],ee=F(new Map),oe=_(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:h,valueField:T}=e;return E=>({[h]:String(E),[T]:E})}return t===!1?!1:h=>Object.assign(t(h),{value:h})});function c(t){const h=e.remote,{value:T}=ee,{value:E}=O,{value:I}=oe,M=[];return t.forEach(P=>{if(E.has(P))M.push(E.get(P));else if(h&&T.has(P))M.push(T.get(P));else if(I){const Y=I(P);Y&&M.push(Y)}}),M}const y=_(()=>{if(e.multiple){const{value:t}=b;return Array.isArray(t)?c(t):[]}return null}),B=_(()=>{const{value:t}=b;return!e.multiple&&!Array.isArray(t)?t===null?null:c([t])[0]||null:null}),V=Jn(e),{mergedSizeRef:U,mergedDisabledRef:j,mergedStatusRef:K}=V;function L(t,h){const{onChange:T,"onUpdate:value":E,onUpdateValue:I}=e,{nTriggerFormChange:M,nTriggerFormInput:P}=V;T&&fe(T,t,h),I&&fe(I,t,h),E&&fe(E,t,h),u.value=t,M(),P()}function X(t){const{onBlur:h}=e,{nTriggerFormBlur:T}=V;h&&fe(h,t),T()}function f(){const{onClear:t}=e;t&&fe(t)}function g(t){const{onFocus:h,showOnFocus:T}=e,{nTriggerFormFocus:E}=V;h&&fe(h,t),E(),T&&he()}function D(t){const{onSearch:h}=e;h&&fe(h,t)}function ie(t){const{onScroll:h}=e;h&&fe(h,t)}function Se(){var t;const{remote:h,multiple:T}=e;if(h){const{value:E}=ee;if(T){const{valueField:I}=e;(t=y.value)===null||t===void 0||t.forEach(M=>{E.set(M[I],M)})}else{const I=B.value;I&&E.set(I[e.valueField],I)}}}function Re(t){const{onUpdateShow:h,"onUpdate:show":T}=e;h&&fe(h,t),T&&fe(T,t),A.value=t}function he(){j.value||(Re(!0),A.value=!0,e.filterable&&Ue())}function le(){Re(!1)}function Te(){v.value="",p.value=ne}const pe=F(!1);function Me(){e.filterable&&(pe.value=!0)}function Ie(){e.filterable&&(pe.value=!1,N.value||Te())}function Pe(){j.value||(N.value?e.filterable?Ue():le():he())}function ke(t){var h,T;!((T=(h=Z.value)===null||h===void 0?void 0:h.selfRef)===null||T===void 0)&&T.contains(t.relatedTarget)||(w.value=!1,X(t),le())}function me(t){g(t),w.value=!0}function we(){w.value=!0}function $e(t){var h;!((h=W.value)===null||h===void 0)&&h.$el.contains(t.relatedTarget)||(w.value=!1,X(t),le())}function Be(){var t;(t=W.value)===null||t===void 0||t.focus(),le()}function Ee(t){var h;N.value&&(!((h=W.value)===null||h===void 0)&&h.$el.contains(Gn(t))||le())}function ze(t){if(!Array.isArray(t))return[];if(oe.value)return Array.from(t);{const{remote:h}=e,{value:T}=O;if(h){const{value:E}=ee;return t.filter(I=>T.has(I)||E.has(I))}else return t.filter(E=>T.has(E))}}function xe(t){te(t.rawNode)}function te(t){if(j.value)return;const{tag:h,remote:T,clearFilterAfterSelect:E,valueField:I}=e;if(h&&!T){const{value:M}=p,P=M[0]||null;if(P){const Y=m.value;Y.length?Y.push(P):m.value=[P],p.value=ne}}if(T&&ee.value.set(t[I],t),e.multiple){const M=ze(b.value),P=M.findIndex(Y=>Y===t[I]);if(~P){if(M.splice(P,1),h&&!T){const Y=d(t[I]);~Y&&(m.value.splice(Y,1),E&&(v.value=""))}}else M.push(t[I]),E&&(v.value="");L(M,c(M))}else{if(h&&!T){const M=d(t[I]);~M?m.value=[m.value[M]]:m.value=ne}Ke(),le(),L(t[I],t)}}function d(t){return m.value.findIndex(T=>T[e.valueField]===t)}function x(t){N.value||he();const{value:h}=t.target;v.value=h;const{tag:T,remote:E}=e;if(D(h),T&&!E){if(!h){p.value=ne;return}const{onCreate:I}=e,M=I?I(h):{[e.labelField]:h,[e.valueField]:h},{valueField:P,labelField:Y}=e;S.value.some(ce=>ce[P]===M[P]||ce[Y]===M[Y])||m.value.some(ce=>ce[P]===M[P]||ce[Y]===M[Y])?p.value=ne:p.value=[M]}}function G(t){t.stopPropagation();const{multiple:h}=e;!h&&e.filterable&&le(),f(),h?L([],[]):L(null,null)}function nt(t){!He(t,"action")&&!He(t,"empty")&&!He(t,"header")&&t.preventDefault()}function ot(t){ie(t)}function je(t){var h,T,E,I,M;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((h=W.value)===null||h===void 0)&&h.isComposing)){if(N.value){const P=(T=Z.value)===null||T===void 0?void 0:T.getPendingTmNode();P?xe(P):e.filterable||(le(),Ke())}else if(he(),e.tag&&pe.value){const P=p.value[0];if(P){const Y=P[e.valueField],{value:ce}=b;e.multiple&&Array.isArray(ce)&&ce.includes(Y)||te(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;N.value&&((E=Z.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;N.value?(I=Z.value)===null||I===void 0||I.next():he();break;case"Escape":N.value&&(Qn(t),le()),(M=W.value)===null||M===void 0||M.focus();break}}function Ke(){var t;(t=W.value)===null||t===void 0||t.focus()}function Ue(){var t;(t=W.value)===null||t===void 0||t.focusInput()}function it(){var t;N.value&&((t=Q.value)===null||t===void 0||t.syncPosition())}Se(),Ce(J(e,"options"),Se);const lt={focus:()=>{var t;(t=W.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=W.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=W.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=W.value)===null||t===void 0||t.blurInput()}},qe=_(()=>{const{self:{menuBoxShadow:t}}=a.value;return{"--n-menu-box-shadow":t}}),ge=l?tt("select",void 0,qe,e):void 0;return Object.assign(Object.assign({},lt),{mergedStatus:K,mergedClsPrefix:n,mergedBordered:o,namespace:i,treeMate:z,isMounted:qn(),triggerRef:W,menuRef:Z,pattern:v,uncontrolledShow:A,mergedShow:N,adjustedTo:pt(e),uncontrolledValue:u,mergedValue:b,followerRef:Q,localizedPlaceholder:de,selectedOption:B,selectedOptions:y,mergedSize:U,mergedDisabled:j,focused:w,activeWithoutMenuOpen:pe,inlineThemeDisabled:l,onTriggerInputFocus:Me,onTriggerInputBlur:Ie,handleTriggerOrMenuResize:it,handleMenuFocus:we,handleMenuBlur:$e,handleMenuTabOut:Be,handleTriggerClick:Pe,handleToggle:xe,handleDeleteOption:te,handlePatternInput:x,handleClear:G,handleTriggerBlur:ke,handleTriggerFocus:me,handleKeydown:je,handleMenuAfterLeave:Te,handleMenuClickOutside:Ee,handleMenuScroll:ot,handleMenuKeydown:je,handleMenuMousedown:nt,mergedTheme:a,cssVars:l?void 0:qe,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){return s("div",{class:`${this.mergedClsPrefix}-select`},s(Nn,null,{default:()=>[s(Hn,null,{default:()=>s(To,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),s(Vn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===pt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>s(Et,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Wn(s(yo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,l;return[(l=(i=this.$slots).empty)===null||l===void 0?void 0:l.call(i)]},header:()=>{var i,l;return[(l=(i=this.$slots).header)===null||l===void 0?void 0:l.call(i)]},action:()=>{var i,l;return[(l=(i=this.$slots).action)===null||l===void 0?void 0:l.call(i)]}}),this.displayDirective==="show"?[[jn,this.mergedShow],[St,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[St,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ao={class:"wrap"},Lo={style:{width:"200px"}},Do={style:{width:"200px"}},No={__name:"ShortItem",props:{element:Object},setup(e){const n=eo(),o=e,i=F([{label:"Ctrl",value:"CommandOrControl"},{label:"Shift",value:"Shift"},{label:"Alt",value:"Alt"}]),l=o.element.cmd.split("+"),a=F(l[0]),u=F(l[1]),r=_(()=>a.value==="CommandOrControl"?"Ctrl + "+u.value:a.value+"+"+u.value),b=m=>{let p=[m,u.value].join("+"),C=Object.assign(Ft(o.element),{cmd:p});S(C)},w=m=>{let p=u.value;if(m.preventDefault(),["Control","Shift","Alt"].includes(m.key))return;m.key===" "?p="Space":p=v(m.key),p=p.replace(/^Arrow/,"");let C=[a.value,p].join("+"),k=Object.assign(Ft(o.element),{cmd:C});S(k)},v=m=>m&&m.charAt(0).toUpperCase()+m.slice(1),S=m=>{window.myApi.updateShortcut(m).then(p=>{if(p.code===0){let C=p.data.cmd.split("+");a.value=C[0],u.value=C[1],n.success(p.msg)}else n.error(p.msg)})};return(m,p)=>{const C=Eo,k=to,H=Oo;return Ze(),gt("div",Ao,[ue("div",Lo,Tt(e.element.tag),1),ue("div",Do,Tt(Le(r)),1),ue("div",null,[_e(H,null,{default:Je(()=>[_e(C,{style:{width:"30%"},size:"small",options:Le(i),value:Le(a),"onUpdate:value":[p[0]||(p[0]=z=>zt(a)?a.value=z:null),b]},null,8,["options","value"]),p[2]||(p[2]=De("+ ")),_e(k,{style:{width:"40%"},size:"small",readonly:"",value:Le(u),"onUpdate:value":p[1]||(p[1]=z=>zt(u)?u.value=z:null),onKeydown:w},null,8,["value"])]),_:1})])])}}},Ho=Ht(No,[["__scopeId","data-v-3e0a64c0"]]),Vo={id:"content-main"},Wo={class:"box"},jo={__name:"ShortcutView",setup(e){const n=F([]);return Ve(async()=>{n.value=await window.myApi.getShortcuts()}),(o,i)=>{const l=oo,a=no,u=Ho;return Ze(),gt("div",Vo,[_e(a,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:Je(()=>[_e(l,{style:{"margin-bottom":"0"}},{default:Je(()=>i[0]||(i[0]=[De("快捷键")])),_:1})]),_:1}),_e(a,{"show-icon":!1},{default:Je(()=>i[1]||(i[1]=[De(" 1.快捷键不区分大小写,先按住Ctrl键，再按其它快捷键；"),ue("br",null,null,-1),De(" 2.在macOS系统：Ctrl === Command键，Alt === Option键；"),ue("br",null,null,-1),De(" 3.自定义快捷键时，先获取焦点，然后在输入框中按其它快捷键；"),ue("br",null,null,-1)])),_:1}),ue("div",Wo,[i[2]||(i[2]=ue("div",{class:"title"},[ue("div",{style:{width:"200px"}}," 功能 "),ue("div",{style:{width:"200px"}}," 快捷键 "),ue("div",null," 自定义 ")],-1)),(Ze(!0),gt(Nt,null,Xn(Le(n),r=>(Ze(),Yn(u,{element:r},null,8,["element"]))),256))])])}}},Yo=Ht(jo,[["__scopeId","data-v-fa151fe1"]]);export{Yo as default};
