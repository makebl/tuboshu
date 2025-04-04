import{co as F,cG as N,g as u,E as b,c as x,k as a,j as T,cH as O,e as G,d as V,p as E,x as D,y as K,v as w,z as J,r as q,h as i,P as Q,a2 as U,cm as X,A as Y,N as Z,D as g,ct as oo,cI as eo,cJ as ro,cK as no,cL as to}from"./index-CdHEiT-d.js";function fo(o){return typeof o=="string"?o.endsWith("px")?Number(o.slice(0,o.length-2)):Number(o):o}function uo(o){if(o!=null)return typeof o=="number"?`${o}px`:o.endsWith("px")?o:`${o}px`}function so(o,r){const e=o.trim().split(/\s+/g),n={top:e[0]};switch(e.length){case 1:n.right=e[0],n.bottom=e[0],n.left=e[0];break;case 2:n.right=e[1],n.left=e[1],n.bottom=e[0];break;case 3:n.right=e[1],n.bottom=e[2],n.left=e[1];break;case 4:n.right=e[1],n.bottom=e[2],n.left=e[3];break;default:throw new Error("[seemly/getMargin]:"+o+" is not a valid value.")}return r===void 0?n:n[r]}function bo(o,r){const[e,n]=o.split(" ");return r?r==="row"?e:n:{row:e,col:n||e}}const lo=o=>{const{lineHeight:r,borderRadius:e,fontWeightStrong:n,baseColor:c,dividerColor:C,actionColor:P,textColor1:h,textColor2:l,closeColorHover:f,closeColorPressed:v,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,infoColor:t,successColor:I,warningColor:z,errorColor:y,fontSize:S}=o;return Object.assign(Object.assign({},N),{fontSize:S,lineHeight:r,titleFontWeight:n,borderRadius:e,border:`1px solid ${C}`,color:P,titleTextColor:h,iconColor:l,contentTextColor:l,closeBorderRadius:e,closeColorHover:f,closeColorPressed:v,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,borderInfo:`1px solid ${u(c,b(t,{alpha:.25}))}`,colorInfo:u(c,b(t,{alpha:.08})),titleTextColorInfo:h,iconColorInfo:t,contentTextColorInfo:l,closeColorHoverInfo:f,closeColorPressedInfo:v,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:s,borderSuccess:`1px solid ${u(c,b(I,{alpha:.25}))}`,colorSuccess:u(c,b(I,{alpha:.08})),titleTextColorSuccess:h,iconColorSuccess:I,contentTextColorSuccess:l,closeColorHoverSuccess:f,closeColorPressedSuccess:v,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:s,borderWarning:`1px solid ${u(c,b(z,{alpha:.33}))}`,colorWarning:u(c,b(z,{alpha:.08})),titleTextColorWarning:h,iconColorWarning:z,contentTextColorWarning:l,closeColorHoverWarning:f,closeColorPressedWarning:v,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:s,borderError:`1px solid ${u(c,b(y,{alpha:.25}))}`,colorError:u(c,b(y,{alpha:.08})),titleTextColorError:h,iconColorError:y,contentTextColorError:l,closeColorHoverError:f,closeColorPressedError:v,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:s})},io={name:"Alert",common:F,self:lo},co=io,ao=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[a("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),T("closable",[x("alert-body",[a("title",`
 padding-right: 24px;
 `)])]),a("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),O({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),a("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),T("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),T("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[G("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]),go=Object.assign(Object.assign({},E.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),Co=V({name:"Alert",inheritAttrs:!1,props:go,setup(o){const{mergedClsPrefixRef:r,mergedBorderedRef:e,inlineThemeDisabled:n,mergedRtlRef:c}=D(o),C=E("Alert","-alert",ao,co,o,r),P=K("Alert",c,r),h=w(()=>{const{common:{cubicBezierEaseInOut:s},self:t}=C.value,{fontSize:I,borderRadius:z,titleFontWeight:y,lineHeight:S,iconSize:H,iconMargin:$,iconMarginRtl:R,closeIconSize:W,closeBorderRadius:_,closeSize:A,closeMargin:k,closeMarginRtl:B,padding:L}=t,{type:d}=o,{left:j,right:M}=so($);return{"--n-bezier":s,"--n-color":t[g("color",d)],"--n-close-icon-size":W,"--n-close-border-radius":_,"--n-close-color-hover":t[g("closeColorHover",d)],"--n-close-color-pressed":t[g("closeColorPressed",d)],"--n-close-icon-color":t[g("closeIconColor",d)],"--n-close-icon-color-hover":t[g("closeIconColorHover",d)],"--n-close-icon-color-pressed":t[g("closeIconColorPressed",d)],"--n-icon-color":t[g("iconColor",d)],"--n-border":t[g("border",d)],"--n-title-text-color":t[g("titleTextColor",d)],"--n-content-text-color":t[g("contentTextColor",d)],"--n-line-height":S,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":y,"--n-icon-size":H,"--n-icon-margin":$,"--n-icon-margin-rtl":R,"--n-close-size":A,"--n-close-margin":k,"--n-close-margin-rtl":B,"--n-padding":L,"--n-icon-margin-left":j,"--n-icon-margin-right":M}}),l=n?J("alert",w(()=>o.type[0]),h,o):void 0,f=q(!0),v=()=>{const{onAfterLeave:s,onAfterHide:t}=o;s&&s(),t&&t()};return{rtlEnabled:P,mergedClsPrefix:r,mergedBordered:e,visible:f,handleCloseClick:()=>{var s;Promise.resolve((s=o.onClose)===null||s===void 0?void 0:s.call(o)).then(t=>{t!==!1&&(f.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:C,cssVars:n?void 0:h,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),i(Z,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:r,$slots:e}=this,n={class:[`${r}-alert`,this.themeClass,this.closable&&`${r}-alert--closable`,this.showIcon&&`${r}-alert--show-icon`,!this.title&&this.closable&&`${r}-alert--right-adjust`,this.rtlEnabled&&`${r}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?i("div",Object.assign({},Q(this.$attrs,n)),this.closable&&i(U,{clsPrefix:r,class:`${r}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&i("div",{class:`${r}-alert__border`}),this.showIcon&&i("div",{class:`${r}-alert__icon`,"aria-hidden":"true"},X(e.icon,()=>[i(oo,{clsPrefix:r},{default:()=>{switch(this.type){case"success":return i(to,null);case"info":return i(no,null);case"warning":return i(ro,null);case"error":return i(eo,null);default:return null}}})])),i("div",{class:[`${r}-alert-body`,this.mergedBordered&&`${r}-alert-body--bordered`]},Y(e.header,c=>{const C=c||this.title;return C?i("div",{class:`${r}-alert-body__title`},C):null}),e.default&&i("div",{class:`${r}-alert-body__content`},e))):null}})}});export{Co as _,bo as a,fo as d,so as g,uo as p};
