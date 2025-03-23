import{d4 as M,dl as F,cL as v,cR as b,bP as I,bT as c,cc as y,dm as V,bS as N,M as q,a5 as l,cN as D,ar as K,d0 as U,bU as X,bV as Y,bX as G,bY as $,ch as J,q as R,ck as Q,b_ as d,b$ as Z,aS as oo,c8 as eo,dn as ro,dp as no,dq as so,dr as to}from"./index-DKmMoxH9.js";function lo(r){const{lineHeight:o,borderRadius:i,fontWeightStrong:g,baseColor:n,dividerColor:f,actionColor:P,textColor1:h,textColor2:t,closeColorHover:u,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,infoColor:e,successColor:x,warningColor:z,errorColor:S,fontSize:T}=r;return Object.assign(Object.assign({},F),{fontSize:T,lineHeight:o,titleFontWeight:g,borderRadius:i,border:`1px solid ${f}`,color:P,titleTextColor:h,iconColor:t,contentTextColor:t,closeBorderRadius:i,closeColorHover:u,closeColorPressed:C,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,borderInfo:`1px solid ${v(n,b(e,{alpha:.25}))}`,colorInfo:v(n,b(e,{alpha:.08})),titleTextColorInfo:h,iconColorInfo:e,contentTextColorInfo:t,closeColorHoverInfo:u,closeColorPressedInfo:C,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:s,borderSuccess:`1px solid ${v(n,b(x,{alpha:.25}))}`,colorSuccess:v(n,b(x,{alpha:.08})),titleTextColorSuccess:h,iconColorSuccess:x,contentTextColorSuccess:t,closeColorHoverSuccess:u,closeColorPressedSuccess:C,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:s,borderWarning:`1px solid ${v(n,b(z,{alpha:.33}))}`,colorWarning:v(n,b(z,{alpha:.08})),titleTextColorWarning:h,iconColorWarning:z,contentTextColorWarning:t,closeColorHoverWarning:u,closeColorPressedWarning:C,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:s,borderError:`1px solid ${v(n,b(S,{alpha:.25}))}`,colorError:v(n,b(S,{alpha:.08})),titleTextColorError:h,iconColorError:S,contentTextColorError:t,closeColorHoverError:u,closeColorPressedError:C,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:s})}const io={common:M,self:lo},co=I("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[c("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[I("alert-body",[c("title",`
 padding-right: 24px;
 `)])]),c("icon",{color:"var(--n-icon-color)"}),I("alert-body",{padding:"var(--n-padding)"},[c("title",{color:"var(--n-title-text-color)"}),c("content",{color:"var(--n-content-text-color)"})]),V({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),c("icon",`
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
 `),c("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[I("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("right-adjust",[I("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),I("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[c("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[N("& +",[c("content",{marginTop:"9px"})])]),c("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),c("icon",{transition:"color .3s var(--n-bezier)"})]),ao=Object.assign(Object.assign({},$.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ho=q({name:"Alert",inheritAttrs:!1,props:ao,slots:Object,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:i,inlineThemeDisabled:g,mergedRtlRef:n}=G(r),f=$("Alert","-alert",co,io,r,o),P=J("Alert",n,o),h=R(()=>{const{common:{cubicBezierEaseInOut:s},self:e}=f.value,{fontSize:x,borderRadius:z,titleFontWeight:S,lineHeight:T,iconSize:E,iconMargin:_,iconMarginRtl:H,closeIconSize:W,closeBorderRadius:w,closeSize:A,closeMargin:B,closeMarginRtl:k,padding:L}=e,{type:a}=r,{left:j,right:O}=Q(_);return{"--n-bezier":s,"--n-color":e[d("color",a)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":e[d("closeColorHover",a)],"--n-close-color-pressed":e[d("closeColorPressed",a)],"--n-close-icon-color":e[d("closeIconColor",a)],"--n-close-icon-color-hover":e[d("closeIconColorHover",a)],"--n-close-icon-color-pressed":e[d("closeIconColorPressed",a)],"--n-icon-color":e[d("iconColor",a)],"--n-border":e[d("border",a)],"--n-title-text-color":e[d("titleTextColor",a)],"--n-content-text-color":e[d("contentTextColor",a)],"--n-line-height":T,"--n-border-radius":z,"--n-font-size":x,"--n-title-font-weight":S,"--n-icon-size":E,"--n-icon-margin":_,"--n-icon-margin-rtl":H,"--n-close-size":A,"--n-close-margin":B,"--n-close-margin-rtl":k,"--n-padding":L,"--n-icon-margin-left":j,"--n-icon-margin-right":O}}),t=g?Z("alert",R(()=>r.type[0]),h,r):void 0,u=oo(!0),C=()=>{const{onAfterLeave:s,onAfterHide:e}=r;s&&s(),e&&e()};return{rtlEnabled:P,mergedClsPrefix:o,mergedBordered:i,visible:u,handleCloseClick:()=>{var s;Promise.resolve((s=r.onClose)===null||s===void 0?void 0:s.call(r)).then(e=>{e!==!1&&(u.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:f,cssVars:g?void 0:h,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),l(D,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:i}=this,g={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},K(this.$attrs,g)),this.closable&&l(U,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${o}-alert__border`}),this.showIcon&&l("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},X(i.icon,()=>[l(eo,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return l(to,null);case"info":return l(so,null);case"warning":return l(no,null);case"error":return l(ro,null);default:return null}}})])),l("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},Y(i.header,n=>{const f=n||this.title;return f?l("div",{class:`${o}-alert-body__title`},f):null}),i.default&&l("div",{class:`${o}-alert-body__content`},i))):null}})}}),uo=(r,o)=>{const i=r.__vccOpts||r;for(const[g,n]of o)i[g]=n;return i};export{uo as _,ho as a};
