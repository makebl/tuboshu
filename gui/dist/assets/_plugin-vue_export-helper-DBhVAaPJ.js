import{a7 as F,dl as M,j as v,H as f,g as I,p as a,l as S,dm as N,e as V,d as D,h as l,N as q,M as G,a3 as K,ag as J,s as Q,C as U,D as R,F as X,B as H,cT as Y,G as d,I as Z,r as oo,a9 as eo,dn as ro,dp as no,dq as so,dr as to}from"./index-CI6qViUo.js";function lo(r){const{lineHeight:o,borderRadius:i,fontWeightStrong:g,baseColor:n,dividerColor:C,actionColor:y,textColor1:h,textColor2:t,closeColorHover:u,closeColorPressed:b,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,infoColor:e,successColor:x,warningColor:z,errorColor:T,fontSize:P}=r;return Object.assign(Object.assign({},M),{fontSize:P,lineHeight:o,titleFontWeight:g,borderRadius:i,border:`1px solid ${C}`,color:y,titleTextColor:h,iconColor:t,contentTextColor:t,closeBorderRadius:i,closeColorHover:u,closeColorPressed:b,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:s,borderInfo:`1px solid ${v(n,f(e,{alpha:.25}))}`,colorInfo:v(n,f(e,{alpha:.08})),titleTextColorInfo:h,iconColorInfo:e,contentTextColorInfo:t,closeColorHoverInfo:u,closeColorPressedInfo:b,closeIconColorInfo:p,closeIconColorHoverInfo:m,closeIconColorPressedInfo:s,borderSuccess:`1px solid ${v(n,f(x,{alpha:.25}))}`,colorSuccess:v(n,f(x,{alpha:.08})),titleTextColorSuccess:h,iconColorSuccess:x,contentTextColorSuccess:t,closeColorHoverSuccess:u,closeColorPressedSuccess:b,closeIconColorSuccess:p,closeIconColorHoverSuccess:m,closeIconColorPressedSuccess:s,borderWarning:`1px solid ${v(n,f(z,{alpha:.33}))}`,colorWarning:v(n,f(z,{alpha:.08})),titleTextColorWarning:h,iconColorWarning:z,contentTextColorWarning:t,closeColorHoverWarning:u,closeColorPressedWarning:b,closeIconColorWarning:p,closeIconColorHoverWarning:m,closeIconColorPressedWarning:s,borderError:`1px solid ${v(n,f(T,{alpha:.25}))}`,colorError:v(n,f(T,{alpha:.08})),titleTextColorError:h,iconColorError:T,contentTextColorError:t,closeColorHoverError:u,closeColorPressedError:b,closeIconColorError:p,closeIconColorHoverError:m,closeIconColorPressedError:s})}const io={common:F,self:lo},ao=I("alert",`
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
 `),S("closable",[I("alert-body",[a("title",`
 padding-right: 24px;
 `)])]),a("icon",{color:"var(--n-icon-color)"}),I("alert-body",{padding:"var(--n-padding)"},[a("title",{color:"var(--n-title-text-color)"}),a("content",{color:"var(--n-content-text-color)"})]),N({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),a("icon",`
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
 `),S("show-icon",[I("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),S("right-adjust",[I("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),I("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[a("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[V("& +",[a("content",{marginTop:"9px"})])]),a("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),a("icon",{transition:"color .3s var(--n-bezier)"})]),co=Object.assign(Object.assign({},R.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ho=D({name:"Alert",inheritAttrs:!1,props:co,slots:Object,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:i,inlineThemeDisabled:g,mergedRtlRef:n}=U(r),C=R("Alert","-alert",ao,io,r,o),y=X("Alert",n,o),h=H(()=>{const{common:{cubicBezierEaseInOut:s},self:e}=C.value,{fontSize:x,borderRadius:z,titleFontWeight:T,lineHeight:P,iconSize:$,iconMargin:_,iconMarginRtl:E,closeIconSize:W,closeBorderRadius:w,closeSize:A,closeMargin:B,closeMarginRtl:j,padding:k}=e,{type:c}=r,{left:L,right:O}=Y(_);return{"--n-bezier":s,"--n-color":e[d("color",c)],"--n-close-icon-size":W,"--n-close-border-radius":w,"--n-close-color-hover":e[d("closeColorHover",c)],"--n-close-color-pressed":e[d("closeColorPressed",c)],"--n-close-icon-color":e[d("closeIconColor",c)],"--n-close-icon-color-hover":e[d("closeIconColorHover",c)],"--n-close-icon-color-pressed":e[d("closeIconColorPressed",c)],"--n-icon-color":e[d("iconColor",c)],"--n-border":e[d("border",c)],"--n-title-text-color":e[d("titleTextColor",c)],"--n-content-text-color":e[d("contentTextColor",c)],"--n-line-height":P,"--n-border-radius":z,"--n-font-size":x,"--n-title-font-weight":T,"--n-icon-size":$,"--n-icon-margin":_,"--n-icon-margin-rtl":E,"--n-close-size":A,"--n-close-margin":B,"--n-close-margin-rtl":j,"--n-padding":k,"--n-icon-margin-left":L,"--n-icon-margin-right":O}}),t=g?Z("alert",H(()=>r.type[0]),h,r):void 0,u=oo(!0),b=()=>{const{onAfterLeave:s,onAfterHide:e}=r;s&&s(),e&&e()};return{rtlEnabled:y,mergedClsPrefix:o,mergedBordered:i,visible:u,handleCloseClick:()=>{var s;Promise.resolve((s=r.onClose)===null||s===void 0?void 0:s.call(r)).then(e=>{e!==!1&&(u.value=!1)})},handleAfterLeave:()=>{b()},mergedTheme:C,cssVars:g?void 0:h,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),l(q,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:i}=this,g={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?l("div",Object.assign({},G(this.$attrs,g)),this.closable&&l(K,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&l("div",{class:`${o}-alert__border`}),this.showIcon&&l("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},J(i.icon,()=>[l(eo,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return l(to,null);case"info":return l(so,null);case"warning":return l(no,null);case"error":return l(ro,null);default:return null}}})])),l("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},Q(i.header,n=>{const C=n||this.title;return C?l("div",{class:`${o}-alert-body__title`},C):null}),i.default&&l("div",{class:`${o}-alert-body__content`},i))):null}})}}),uo=(r,o)=>{const i=r.__vccOpts||r;for(const[g,n]of o)i[g]=n;return i};export{uo as _,ho as a};
