import{bO as oe,bU as d,bR as _,bS as re,bT as te,d7 as ne,cf as b,bV as p,M as j,a5 as f,bX as $,bZ as O,b_ as P,ck as I,q as F,b$ as k,cm as ae,c0 as ie,cF as de,d8 as E,cW as le,d5 as se,C as ce,d6 as pe,c6 as M}from"./index-7uoXnBjj.js";import{i as ge}from"./headers-Cp5aqC6R.js";import{g as be}from"./get-slot-Bk_rJcZu.js";const me={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function fe(e){const{primaryColor:l,borderRadius:m,lineHeight:o,fontSize:n,cardColor:i,textColor2:u,textColor1:s,dividerColor:a,fontWeightStrong:t,closeIconColor:r,closeIconColorHover:c,closeIconColorPressed:S,closeColorHover:v,closeColorPressed:x,modalColor:y,boxShadow1:C,popoverColor:B,actionColor:g}=e;return Object.assign(Object.assign({},me),{lineHeight:o,color:i,colorModal:y,colorPopover:B,colorTarget:l,colorEmbedded:g,colorEmbeddedModal:g,colorEmbeddedPopover:g,textColor:u,titleTextColor:s,borderColor:a,actionColor:g,titleFontWeight:t,closeColorHover:v,closeColorPressed:x,closeBorderRadius:m,closeIconColor:r,closeIconColorHover:c,closeIconColorPressed:S,fontSizeSmall:n,fontSizeMedium:n,fontSizeLarge:n,fontSizeHuge:n,boxShadow:C,borderRadius:m})}const ue={common:oe,self:fe},he=d([_("card",`
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
 `,[ne({background:"var(--n-color-modal)"}),b("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[d(">",[p("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[d(">",[p("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[d(">",[p("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[d(">",[p("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[_("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[p("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),p("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),p("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),p("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),p("content","flex: 1; min-width: 0;"),p("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),p("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),_("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[d(">",[p("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[d(">",[p("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[d(">",[p("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),re(_("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),te(_("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ve={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},xe=Object.assign(Object.assign({},P.props),ve),Re=j({name:"Card",props:xe,slots:Object,setup(e){const l=()=>{const{onClose:t}=e;t&&de(t)},{inlineThemeDisabled:m,mergedClsPrefixRef:o,mergedRtlRef:n}=O(e),i=P("Card","-card",he,ue,e,o),u=I("Card",n,o),s=F(()=>{const{size:t}=e,{self:{color:r,colorModal:c,colorTarget:S,textColor:v,titleTextColor:x,titleFontWeight:y,borderColor:C,actionColor:B,borderRadius:g,lineHeight:z,closeIconColor:w,closeIconColorHover:R,closeIconColorPressed:h,closeColorHover:H,closeColorPressed:L,closeBorderRadius:V,closeIconSize:G,closeSize:W,boxShadow:A,colorPopover:D,colorEmbedded:N,colorEmbeddedModal:U,colorEmbeddedPopover:q,[k("padding",t)]:J,[k("fontSize",t)]:K,[k("titleFontSize",t)]:X},common:{cubicBezierEaseInOut:Z}}=i.value,{top:Q,left:Y,bottom:ee}=ae(J);return{"--n-bezier":Z,"--n-border-radius":g,"--n-color":r,"--n-color-modal":c,"--n-color-popover":D,"--n-color-embedded":N,"--n-color-embedded-modal":U,"--n-color-embedded-popover":q,"--n-color-target":S,"--n-text-color":v,"--n-line-height":z,"--n-action-color":B,"--n-title-text-color":x,"--n-title-font-weight":y,"--n-close-icon-color":w,"--n-close-icon-color-hover":R,"--n-close-icon-color-pressed":h,"--n-close-color-hover":H,"--n-close-color-pressed":L,"--n-border-color":C,"--n-box-shadow":A,"--n-padding-top":Q,"--n-padding-bottom":ee,"--n-padding-left":Y,"--n-font-size":K,"--n-title-font-size":X,"--n-close-size":W,"--n-close-icon-size":G,"--n-close-border-radius":V}}),a=m?ie("card",F(()=>e.size[0]),s,e):void 0;return{rtlEnabled:u,mergedClsPrefix:o,mergedTheme:i,handleCloseClick:l,cssVars:m?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:l,hoverable:m,mergedClsPrefix:o,rtlEnabled:n,onRender:i,embedded:u,tag:s,$slots:a}=this;return i==null||i(),f(s,{class:[`${o}-card`,this.themeClass,u&&`${o}-card--embedded`,{[`${o}-card--rtl`]:n,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:l,[`${o}-card--hoverable`]:m}],style:this.cssVars,role:this.role},$(a.cover,t=>{const r=this.cover?E([this.cover()]):t;return r&&f("div",{class:`${o}-card-cover`,role:"none"},r)}),$(a.header,t=>{const{title:r}=this,c=r?E(typeof r=="function"?[r()]:[r]):t;return c||this.closable?f("div",{class:[`${o}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},f("div",{class:`${o}-card-header__main`,role:"heading"},c),$(a["header-extra"],S=>{const v=this.headerExtra?E([this.headerExtra()]):S;return v&&f("div",{class:[`${o}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)}),this.closable&&f(le,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),$(a.default,t=>{const{content:r}=this,c=r?E(typeof r=="function"?[r()]:[r]):t;return c&&f("div",{class:[`${o}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},c)}),$(a.footer,t=>{const r=this.footer?E([this.footer()]):t;return r&&f("div",{class:[`${o}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),$(a.action,t=>{const r=this.action?E([this.action()]):t;return r&&f("div",{class:`${o}-card__action`,role:"none"},r)}))}}),Ce={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Se(){return Ce}const ze={self:Se};let T;function ye(){if(!ge)return!0;if(T===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const l=e.scrollHeight===1;return document.body.removeChild(e),T=l}return T}const we=Object.assign(Object.assign({},P.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),_e=j({name:"Space",props:we,setup(e){const{mergedClsPrefixRef:l,mergedRtlRef:m}=O(e),o=P("Space","-space",void 0,ze,e,l),n=I("Space",m,l);return{useGap:ye(),rtlEnabled:n,mergedClsPrefix:l,margin:F(()=>{const{size:i}=e;if(Array.isArray(i))return{horizontal:i[0],vertical:i[1]};if(typeof i=="number")return{horizontal:i,vertical:i};const{self:{[k("gap",i)]:u}}=o.value,{row:s,col:a}=pe(u);return{horizontal:M(a),vertical:M(s)}})}},render(){const{vertical:e,reverse:l,align:m,inline:o,justify:n,itemClass:i,itemStyle:u,margin:s,wrap:a,mergedClsPrefix:t,rtlEnabled:r,useGap:c,wrapItem:S,internalUseGap:v}=this,x=se(be(this),!1);if(!x.length)return null;const y=`${s.horizontal}px`,C=`${s.horizontal/2}px`,B=`${s.vertical}px`,g=`${s.vertical/2}px`,z=x.length-1,w=n.startsWith("space-");return f("div",{role:"none",class:[`${t}-space`,r&&`${t}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e&&!l?"column":e&&l?"column-reverse":!e&&l?"row-reverse":"row",justifyContent:["start","end"].includes(n)?`flex-${n}`:n,flexWrap:!a||e?"nowrap":"wrap",marginTop:c||e?"":`-${g}`,marginBottom:c||e?"":`-${g}`,alignItems:m,gap:c?`${s.vertical}px ${s.horizontal}px`:""}},!S&&(c||v)?x:x.map((R,h)=>R.type===ce?R:f("div",{role:"none",class:i,style:[u,{maxWidth:"100%"},c?"":e?{marginBottom:h!==z?B:""}:r?{marginLeft:w?n==="space-between"&&h===z?"":C:h!==z?y:"",marginRight:w?n==="space-between"&&h===0?"":C:"",paddingTop:g,paddingBottom:g}:{marginRight:w?n==="space-between"&&h===z?"":C:h!==z?y:"",marginLeft:w?n==="space-between"&&h===0?"":C:"",paddingTop:g,paddingBottom:g}]},R)))}});export{Re as _,_e as a};
