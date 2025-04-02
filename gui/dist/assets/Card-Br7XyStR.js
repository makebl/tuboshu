import{e as t,c,cC as Q,j as a,k as n,cj as U,ck as X,d as Y,p as x,x as Z,y as ee,v as u,z as oe,h as s,A as i,B as re,cD as te,D as h,a2 as ne}from"./index-2RN--K6t.js";import{g as de}from"./Alert-Bb01Fsao.js";const ae=t([c("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Q({background:"var(--n-color-modal)"}),a("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),a("content-segmented",[t(">",[n("content",{paddingTop:"var(--n-padding-bottom)"})])]),a("content-soft-segmented",[t(">",[n("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),a("footer-segmented",[t(">",[n("footer",{paddingTop:"var(--n-padding-bottom)"})])]),a("footer-soft-segmented",[t(">",[n("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[c("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[n("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),n("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),n("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),n("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),n("content","flex: 1; min-width: 0;"),n("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),n("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),c("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),a("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),a("action-segmented",[t(">",[n("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("content-segmented, content-soft-segmented",[t(">",[n("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("footer-segmented, footer-soft-segmented",[t(">",[n("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),a("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(c("card",`
 background: var(--n-color-modal);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),X(c("card",`
 background: var(--n-color-popover);
 `,[a("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),se={title:String,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},le=Object.assign(Object.assign({},x.props),se),be=Y({name:"Card",props:le,setup(r){const f=()=>{const{onClose:o}=r;o&&re(o)},{inlineThemeDisabled:b,mergedClsPrefixRef:e,mergedRtlRef:m}=Z(r),l=x("Card","-card",ae,te,r,e),p=ee("Card",m,e),g=u(()=>{const{size:o}=r,{self:{color:v,colorModal:z,colorTarget:C,textColor:S,titleTextColor:y,titleFontWeight:k,borderColor:$,actionColor:w,borderRadius:_,lineHeight:T,closeIconColor:B,closeIconColorHover:E,closeIconColorPressed:R,closeColorHover:P,closeColorPressed:j,closeBorderRadius:O,closeIconSize:M,closeSize:I,boxShadow:F,colorPopover:H,colorEmbedded:D,colorEmbeddedModal:V,colorEmbeddedPopover:A,[h("padding",o)]:L,[h("fontSize",o)]:W,[h("titleFontSize",o)]:K},common:{cubicBezierEaseInOut:N}}=l.value,{top:q,left:G,bottom:J}=de(L);return{"--n-bezier":N,"--n-border-radius":_,"--n-color":v,"--n-color-modal":z,"--n-color-popover":H,"--n-color-embedded":D,"--n-color-embedded-modal":V,"--n-color-embedded-popover":A,"--n-color-target":C,"--n-text-color":S,"--n-line-height":T,"--n-action-color":w,"--n-title-text-color":y,"--n-title-font-weight":k,"--n-close-icon-color":B,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":R,"--n-close-color-hover":P,"--n-close-color-pressed":j,"--n-border-color":$,"--n-box-shadow":F,"--n-padding-top":q,"--n-padding-bottom":J,"--n-padding-left":G,"--n-font-size":W,"--n-title-font-size":K,"--n-close-size":I,"--n-close-icon-size":M,"--n-close-border-radius":O}}),d=b?oe("card",u(()=>r.size[0]),g,r):void 0;return{rtlEnabled:p,mergedClsPrefix:e,mergedTheme:l,handleCloseClick:f,cssVars:b?void 0:g,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{segmented:r,bordered:f,hoverable:b,mergedClsPrefix:e,rtlEnabled:m,onRender:l,embedded:p,tag:g,$slots:d}=this;return l==null||l(),s(g,{class:[`${e}-card`,this.themeClass,p&&`${e}-card--embedded`,{[`${e}-card--rtl`]:m,[`${e}-card--content${typeof r!="boolean"&&r.content==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.content,[`${e}-card--footer${typeof r!="boolean"&&r.footer==="soft"?"-soft":""}-segmented`]:r===!0||r!==!1&&r.footer,[`${e}-card--action-segmented`]:r===!0||r!==!1&&r.action,[`${e}-card--bordered`]:f,[`${e}-card--hoverable`]:b}],style:this.cssVars,role:this.role},i(d.cover,o=>o&&s("div",{class:`${e}-card-cover`,role:"none"},o)),i(d.header,o=>o||this.title||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle},s("div",{class:`${e}-card-header__main`,role:"heading"},o||this.title),i(d["header-extra"],v=>v&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)),this.closable?s(ne,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),i(d.default,o=>o&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},o)),i(d.footer,o=>o&&[s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},o)]),i(d.action,o=>o&&s("div",{class:`${e}-card__action`,role:"none"},o)))}});export{be as _};
