import{bO as te,bU as s,bR as y,bS as ne,bT as de,d1 as se,cf as b,bV as l,M as B,a5 as h,bX as _,bZ as H,b_ as w,ck as ae,q as k,b$ as F,cm as ie,c0 as O,cv as le,d2 as S,d3 as ce,c1 as be,u as ge,I as f,bH as u,aK as me,H as C,v as $}from"./index-uX9VG5-7.js";import{_ as pe}from"./Tag-BPOzh3Rv.js";import{t as fe,N as ue}from"./headers-Broy0Gyo.js";import{_ as he}from"./Alert-Rj2O6Akz.js";import{_ as ve}from"./Space-BgZ6-P7X.js";import"./get-slot-Bk_rJcZu.js";const xe={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function Ce(e){const{primaryColor:o,borderRadius:c,lineHeight:r,fontSize:i,cardColor:d,textColor2:m,textColor1:p,dividerColor:a,fontWeightStrong:n,closeIconColor:t,closeIconColorHover:g,closeIconColorPressed:x,closeColorHover:v,closeColorPressed:T,modalColor:E,boxShadow1:R,popoverColor:P,actionColor:z}=e;return Object.assign(Object.assign({},xe),{lineHeight:r,color:d,colorModal:E,colorPopover:P,colorTarget:o,colorEmbedded:z,colorEmbeddedModal:z,colorEmbeddedPopover:z,textColor:m,titleTextColor:p,borderColor:a,actionColor:z,titleFontWeight:n,closeColorHover:v,closeColorPressed:T,closeBorderRadius:c,closeIconColor:t,closeIconColorHover:g,closeIconColorPressed:x,fontSizeSmall:i,fontSizeMedium:i,fontSizeLarge:i,fontSizeHuge:i,boxShadow:R,borderRadius:c})}const ze={common:te,self:Ce},_e=s([y("card",`
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
 `,[se({background:"var(--n-color-modal)"}),b("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),b("content-segmented",[s(">",[l("content",{paddingTop:"var(--n-padding-bottom)"})])]),b("content-soft-segmented",[s(">",[l("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),b("footer-segmented",[s(">",[l("footer",{paddingTop:"var(--n-padding-bottom)"})])]),b("footer-soft-segmented",[s(">",[l("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[y("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[l("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),l("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),l("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),l("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),l("content","flex: 1; min-width: 0;"),l("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[s("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),l("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),y("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),b("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),b("action-segmented",[s(">",[l("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("content-segmented, content-soft-segmented",[s(">",[l("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("footer-segmented, footer-soft-segmented",[s(">",[l("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),b("embedded",`
 background-color: var(--n-color-embedded);
 `)]),ne(y("card",`
 background: var(--n-color-modal);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),de(y("card",`
 background: var(--n-color-popover);
 `,[b("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Se={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},ye=Object.assign(Object.assign({},w.props),Se),$e=B({name:"Card",props:ye,slots:Object,setup(e){const o=()=>{const{onClose:n}=e;n&&le(n)},{inlineThemeDisabled:c,mergedClsPrefixRef:r,mergedRtlRef:i}=H(e),d=w("Card","-card",_e,ze,e,r),m=ae("Card",i,r),p=k(()=>{const{size:n}=e,{self:{color:t,colorModal:g,colorTarget:x,textColor:v,titleTextColor:T,titleFontWeight:E,borderColor:R,actionColor:P,borderRadius:z,lineHeight:V,closeIconColor:M,closeIconColorHover:j,closeIconColorPressed:I,closeColorHover:N,closeColorPressed:L,closeBorderRadius:D,closeIconSize:W,closeSize:q,boxShadow:K,colorPopover:A,colorEmbedded:U,colorEmbeddedModal:X,colorEmbeddedPopover:Z,[F("padding",n)]:G,[F("fontSize",n)]:J,[F("titleFontSize",n)]:Q},common:{cubicBezierEaseInOut:Y}}=d.value,{top:ee,left:oe,bottom:re}=ie(G);return{"--n-bezier":Y,"--n-border-radius":z,"--n-color":t,"--n-color-modal":g,"--n-color-popover":A,"--n-color-embedded":U,"--n-color-embedded-modal":X,"--n-color-embedded-popover":Z,"--n-color-target":x,"--n-text-color":v,"--n-line-height":V,"--n-action-color":P,"--n-title-text-color":T,"--n-title-font-weight":E,"--n-close-icon-color":M,"--n-close-icon-color-hover":j,"--n-close-icon-color-pressed":I,"--n-close-color-hover":N,"--n-close-color-pressed":L,"--n-border-color":R,"--n-box-shadow":K,"--n-padding-top":ee,"--n-padding-bottom":re,"--n-padding-left":oe,"--n-font-size":J,"--n-title-font-size":Q,"--n-close-size":q,"--n-close-icon-size":W,"--n-close-border-radius":D}}),a=c?O("card",k(()=>e.size[0]),p,e):void 0;return{rtlEnabled:m,mergedClsPrefix:r,mergedTheme:d,handleCloseClick:o,cssVars:c?void 0:p,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:o,hoverable:c,mergedClsPrefix:r,rtlEnabled:i,onRender:d,embedded:m,tag:p,$slots:a}=this;return d==null||d(),h(p,{class:[`${r}-card`,this.themeClass,m&&`${r}-card--embedded`,{[`${r}-card--rtl`]:i,[`${r}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${r}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${r}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${r}-card--bordered`]:o,[`${r}-card--hoverable`]:c}],style:this.cssVars,role:this.role},_(a.cover,n=>{const t=this.cover?S([this.cover()]):n;return t&&h("div",{class:`${r}-card-cover`,role:"none"},t)}),_(a.header,n=>{const{title:t}=this,g=t?S(typeof t=="function"?[t()]:[t]):n;return g||this.closable?h("div",{class:[`${r}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},h("div",{class:`${r}-card-header__main`,role:"heading"},g),_(a["header-extra"],x=>{const v=this.headerExtra?S([this.headerExtra()]):x;return v&&h("div",{class:[`${r}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)}),this.closable&&h(ce,{clsPrefix:r,class:`${r}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),_(a.default,n=>{const{content:t}=this,g=t?S(typeof t=="function"?[t()]:[t]):n;return g&&h("div",{class:[`${r}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},g)}),_(a.footer,n=>{const t=this.footer?S([this.footer()]):n;return t&&h("div",{class:[`${r}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},t)}),_(a.action,n=>{const t=this.action?S([this.action()]):n;return t&&h("div",{class:`${r}-card__action`,role:"none"},t)}))}}),ke=y("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[s("&:first-child","margin-top: 0;"),s("&:last-child","margin-bottom: 0;")]),we=Object.assign(Object.assign({},w.props),{depth:[String,Number]}),Te=B({name:"P",props:we,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:c}=H(e),r=w("Typography","-p",ke,fe,e,o),i=k(()=>{const{depth:m}=e,p=m||"1",{common:{cubicBezierEaseInOut:a},self:{pFontSize:n,pLineHeight:t,pMargin:g,pTextColor:x,[`pTextColor${p}Depth`]:v}}=r.value;return{"--n-bezier":a,"--n-font-size":n,"--n-line-height":t,"--n-margin":g,"--n-text-color":m===void 0?x:v}}),d=c?O("p",k(()=>`${e.depth||""}`),i,e):void 0;return{mergedClsPrefix:o,cssVars:c?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),Ee={},Re={id:"content-main"};function Pe(e,o){const c=ue,r=he,i=pe,d=ve,m=Te,p=$e;return me(),ge("div",Re,[f(r,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:u(()=>[f(c,{style:{"margin-bottom":"0"}},{default:u(()=>o[0]||(o[0]=[C("使用反馈")])),_:1})]),_:1}),f(p,{title:"📞 联系方式",embedded:"",bordered:!0},{default:u(()=>[f(d,{size:"small",style:{"margin-top":"10px"}},{default:u(()=>[f(i,{bordered:!1,type:"info",size:"small"},{default:u(()=>o[1]||(o[1]=[C("Email:")])),_:1}),o[2]||(o[2]=C("lyf200@qq.com")),o[3]||(o[3]=$("br",null,null,-1))]),_:1}),f(d,{size:"small",style:{"margin-top":"10px"}},{default:u(()=>[f(i,{bordered:!1,type:"info",size:"small"},{default:u(()=>o[4]||(o[4]=[C("微信号:")])),_:1}),o[5]||(o[5]=C("upsort")),o[6]||(o[6]=$("br",null,null,-1))]),_:1}),f(d,{size:"small",style:{"margin-top":"10px"}},{default:u(()=>[f(i,{bordered:!1,type:"info",size:"small"},{default:u(()=>o[7]||(o[7]=[C("Telegram:")])),_:1}),o[8]||(o[8]=$("a",{target:"_blank",href:"https://t.me/shaziaicom"},"https://t.me/shaziaicom",-1)),o[9]||(o[9]=$("br",null,null,-1))]),_:1}),f(m,{style:{color:"#666"}},{default:u(()=>o[10]||(o[10]=[C("微信加群请先添+wx，需备注：shaziai ")])),_:1})]),_:1})])}const je=be(Ee,[["render",Pe],["__scopeId","data-v-2d5dc3e4"]]);export{je as default};
