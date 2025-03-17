import{bO as se,bU as d,bR as k,bS as le,bT as ie,cG as de,cf as b,bV as g,M as I,a5 as v,bX as B,bZ as V,b_ as P,ck as G,q as j,b$ as M,cm as ce,c0 as N,cF as pe,cH as E,cI as me,cJ as ge,C as fe,cK as be,c6 as L,c1 as ue,u as he,I as u,bH as h,aK as ve,H as _,v as T}from"./index-p8R71G5r.js";import{i as xe,t as Ce,N as ze}from"./headers-CcMv8Gnr.js";import{g as ye}from"./get-slot-Bk_rJcZu.js";import{_ as Se}from"./Tag-erjFxn9y.js";import{_ as _e}from"./Alert-DY7DKjpY.js";const we={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function $e(e){const{primaryColor:o,borderRadius:p,lineHeight:t,fontSize:n,cardColor:r,textColor2:m,textColor1:i,dividerColor:l,fontWeightStrong:s,closeIconColor:a,closeIconColorHover:c,closeIconColorPressed:C,closeColorHover:x,closeColorPressed:y,modalColor:$,boxShadow1:S,popoverColor:F,actionColor:f}=e;return Object.assign(Object.assign({},we),{lineHeight:t,color:r,colorModal:$,colorPopover:F,colorTarget:o,colorEmbedded:f,colorEmbeddedModal:f,colorEmbeddedPopover:f,textColor:m,titleTextColor:i,borderColor:l,actionColor:f,titleFontWeight:s,closeColorHover:x,closeColorPressed:y,closeBorderRadius:p,closeIconColor:a,closeIconColorHover:c,closeIconColorPressed:C,fontSizeSmall:n,fontSizeMedium:n,fontSizeLarge:n,fontSizeHuge:n,boxShadow:S,borderRadius:p})}const Re={common:se,self:$e},Be=d([k("card",`
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
 `,[de({background:"var(--n-color-modal)"}),b("hoverable",[d("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[d(">",[g("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[d(">",[g("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[d(">",[g("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[d(">",[g("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),d(">",[k("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[g("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),g("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),g("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),g("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),g("content","flex: 1; min-width: 0;"),g("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[d("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),g("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),k("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[d("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[d("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[d(">",[g("action",[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[d(">",[g("content",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[d(">",[g("footer",{transition:"border-color 0.3s var(--n-bezier)"},[d("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),le(k("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ie(k("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Ee={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},Te=Object.assign(Object.assign({},P.props),Ee),ke=I({name:"Card",props:Te,slots:Object,setup(e){const o=()=>{const{onClose:s}=e;s&&pe(s)},{inlineThemeDisabled:p,mergedClsPrefixRef:t,mergedRtlRef:n}=V(e),r=P("Card","-card",Be,Re,e,t),m=G("Card",n,t),i=j(()=>{const{size:s}=e,{self:{color:a,colorModal:c,colorTarget:C,textColor:x,titleTextColor:y,titleFontWeight:$,borderColor:S,actionColor:F,borderRadius:f,lineHeight:w,closeIconColor:R,closeIconColorHover:H,closeIconColorPressed:z,closeColorHover:W,closeColorPressed:D,closeBorderRadius:A,closeIconSize:q,closeSize:K,boxShadow:U,colorPopover:J,colorEmbedded:X,colorEmbeddedModal:Z,colorEmbeddedPopover:Q,[M("padding",s)]:Y,[M("fontSize",s)]:ee,[M("titleFontSize",s)]:oe},common:{cubicBezierEaseInOut:te}}=r.value,{top:re,left:ne,bottom:ae}=ce(Y);return{"--n-bezier":te,"--n-border-radius":f,"--n-color":a,"--n-color-modal":c,"--n-color-popover":J,"--n-color-embedded":X,"--n-color-embedded-modal":Z,"--n-color-embedded-popover":Q,"--n-color-target":C,"--n-text-color":x,"--n-line-height":w,"--n-action-color":F,"--n-title-text-color":y,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":z,"--n-close-color-hover":W,"--n-close-color-pressed":D,"--n-border-color":S,"--n-box-shadow":U,"--n-padding-top":re,"--n-padding-bottom":ae,"--n-padding-left":ne,"--n-font-size":ee,"--n-title-font-size":oe,"--n-close-size":K,"--n-close-icon-size":q,"--n-close-border-radius":A}}),l=p?N("card",j(()=>e.size[0]),i,e):void 0;return{rtlEnabled:m,mergedClsPrefix:t,mergedTheme:r,handleCloseClick:o,cssVars:p?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){const{segmented:e,bordered:o,hoverable:p,mergedClsPrefix:t,rtlEnabled:n,onRender:r,embedded:m,tag:i,$slots:l}=this;return r==null||r(),v(i,{class:[`${t}-card`,this.themeClass,m&&`${t}-card--embedded`,{[`${t}-card--rtl`]:n,[`${t}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${t}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${t}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${t}-card--bordered`]:o,[`${t}-card--hoverable`]:p}],style:this.cssVars,role:this.role},B(l.cover,s=>{const a=this.cover?E([this.cover()]):s;return a&&v("div",{class:`${t}-card-cover`,role:"none"},a)}),B(l.header,s=>{const{title:a}=this,c=a?E(typeof a=="function"?[a()]:[a]):s;return c||this.closable?v("div",{class:[`${t}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},v("div",{class:`${t}-card-header__main`,role:"heading"},c),B(l["header-extra"],C=>{const x=this.headerExtra?E([this.headerExtra()]):C;return x&&v("div",{class:[`${t}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},x)}),this.closable&&v(me,{clsPrefix:t,class:`${t}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),B(l.default,s=>{const{content:a}=this,c=a?E(typeof a=="function"?[a()]:[a]):s;return c&&v("div",{class:[`${t}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},c)}),B(l.footer,s=>{const a=this.footer?E([this.footer()]):s;return a&&v("div",{class:[`${t}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},a)}),B(l.action,s=>{const a=this.action?E([this.action()]):s;return a&&v("div",{class:`${t}-card__action`,role:"none"},a)}))}}),Pe={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};function Fe(){return Pe}const He={self:Fe};let O;function je(){if(!xe)return!0;if(O===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const o=e.scrollHeight===1;return document.body.removeChild(e),O=o}return O}const Me=Object.assign(Object.assign({},P.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),Oe=I({name:"Space",props:Me,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:p}=V(e),t=P("Space","-space",void 0,He,e,o),n=G("Space",p,o);return{useGap:je(),rtlEnabled:n,mergedClsPrefix:o,margin:j(()=>{const{size:r}=e;if(Array.isArray(r))return{horizontal:r[0],vertical:r[1]};if(typeof r=="number")return{horizontal:r,vertical:r};const{self:{[M("gap",r)]:m}}=t.value,{row:i,col:l}=be(m);return{horizontal:L(l),vertical:L(i)}})}},render(){const{vertical:e,reverse:o,align:p,inline:t,justify:n,itemClass:r,itemStyle:m,margin:i,wrap:l,mergedClsPrefix:s,rtlEnabled:a,useGap:c,wrapItem:C,internalUseGap:x}=this,y=ge(ye(this),!1);if(!y.length)return null;const $=`${i.horizontal}px`,S=`${i.horizontal/2}px`,F=`${i.vertical}px`,f=`${i.vertical/2}px`,w=y.length-1,R=n.startsWith("space-");return v("div",{role:"none",class:[`${s}-space`,a&&`${s}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:e&&!o?"column":e&&o?"column-reverse":!e&&o?"row-reverse":"row",justifyContent:["start","end"].includes(n)?`flex-${n}`:n,flexWrap:!l||e?"nowrap":"wrap",marginTop:c||e?"":`-${f}`,marginBottom:c||e?"":`-${f}`,alignItems:p,gap:c?`${i.vertical}px ${i.horizontal}px`:""}},!C&&(c||x)?y:y.map((H,z)=>H.type===fe?H:v("div",{role:"none",class:r,style:[m,{maxWidth:"100%"},c?"":e?{marginBottom:z!==w?F:""}:a?{marginLeft:R?n==="space-between"&&z===w?"":S:z!==w?$:"",marginRight:R?n==="space-between"&&z===0?"":S:"",paddingTop:f,paddingBottom:f}:{marginRight:R?n==="space-between"&&z===w?"":S:z!==w?$:"",marginLeft:R?n==="space-between"&&z===0?"":S:"",paddingTop:f,paddingBottom:f}]},H)))}}),Ie=k("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[d("&:first-child","margin-top: 0;"),d("&:last-child","margin-bottom: 0;")]),Ve=Object.assign(Object.assign({},P.props),{depth:[String,Number]}),Le=I({name:"P",props:Ve,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:p}=V(e),t=P("Typography","-p",Ie,Ce,e,o),n=j(()=>{const{depth:m}=e,i=m||"1",{common:{cubicBezierEaseInOut:l},self:{pFontSize:s,pLineHeight:a,pMargin:c,pTextColor:C,[`pTextColor${i}Depth`]:x}}=t.value;return{"--n-bezier":l,"--n-font-size":s,"--n-line-height":a,"--n-margin":c,"--n-text-color":m===void 0?C:x}}),r=p?N("p",j(()=>`${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:o,cssVars:p?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),v("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Ge={},Ne={id:"content-main"};function We(e,o){const p=ze,t=_e,n=Se,r=Oe,m=Le,i=ke;return ve(),he("div",Ne,[u(t,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:h(()=>[u(p,{style:{"margin-bottom":"0"}},{default:h(()=>o[0]||(o[0]=[_("使用反馈")])),_:1})]),_:1}),u(i,{title:"📞 联系方式",embedded:"",bordered:!0},{default:h(()=>[u(r,{size:"small",style:{"margin-top":"10px"}},{default:h(()=>[u(n,{bordered:!1,type:"info",size:"small"},{default:h(()=>o[1]||(o[1]=[_("Email:")])),_:1}),o[2]||(o[2]=_("lyf200@qq.com")),o[3]||(o[3]=T("br",null,null,-1))]),_:1}),u(r,{size:"small",style:{"margin-top":"10px"}},{default:h(()=>[u(n,{bordered:!1,type:"info",size:"small"},{default:h(()=>o[4]||(o[4]=[_("微信号:")])),_:1}),o[5]||(o[5]=_("upsort")),o[6]||(o[6]=T("br",null,null,-1))]),_:1}),u(r,{size:"small",style:{"margin-top":"10px"}},{default:h(()=>[u(n,{bordered:!1,type:"info",size:"small"},{default:h(()=>o[7]||(o[7]=[_("GitHub:")])),_:1}),o[8]||(o[8]=T("a",{target:"_blank",href:"https://github.com/deepshit2025/tuboshu/releases"},"最新版本",-1)),o[9]||(o[9]=T("br",null,null,-1))]),_:1}),u(r,{size:"small",style:{"margin-top":"10px"}},{default:h(()=>[u(n,{bordered:!1,type:"info",size:"small"},{default:h(()=>o[10]||(o[10]=[_("Telegram:")])),_:1}),o[11]||(o[11]=T("a",{target:"_blank",href:"https://t.me/shaziaicom"},"https://t.me/shaziaicom",-1)),o[12]||(o[12]=T("br",null,null,-1))]),_:1}),u(m,{style:{color:"#666"}},{default:h(()=>o[13]||(o[13]=[_("微信加群请先添+wx，需备注：shaziai ")])),_:1})]),_:1})])}const Je=ue(Ge,[["render",We],["__scopeId","data-v-857f1681"]]);export{Je as default};
