import{G as be,H as pe,I as X,J as ge,r as m,K as fe,L as Q,M as ie,O as Y,z as re,P as L,Q as K,R as H,S as N,T as Z,U as ee,x as le,y as de,V as me,A as _e,i as te,W as xe,B as ye,C as P,D as oe,X as we,_ as Ce,q as Se,o as q,c as J,b as u,d as l,e as p,a as n,u as x,n as E,F as ne,s as ae,t as se,p as ze,k as Re}from"./index-Ce29jsWc.js";import{_ as ke}from"./Card-C1NdYBbv.js";import{b as ue,u as Be,a as Ve,_ as Ae}from"./Switch-C6FWoUp1.js";import{g as Te}from"./get-slot-Bk_rJcZu.js";import{_ as $e}from"./Tag-Dwfo-19z.js";import{_ as Ie,N as Fe}from"./headers-j6_00y_d.js";import{_ as Ue}from"./InputGroup-DeTxeIwN.js";const De=e=>{const{borderColor:o,primaryColor:t,baseColor:h,textColorDisabled:d,inputColorDisabled:_,textColor2:a,opacityDisabled:g,borderRadius:f,fontSizeSmall:y,fontSizeMedium:v,fontSizeLarge:w,heightSmall:z,heightMedium:A,heightLarge:b,lineHeight:T}=e;return Object.assign(Object.assign({},pe),{labelLineHeight:T,buttonHeightSmall:z,buttonHeightMedium:A,buttonHeightLarge:b,fontSizeSmall:y,fontSizeMedium:v,fontSizeLarge:w,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${X(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:h,colorDisabled:_,colorActive:"#0000",textColor:a,textColorDisabled:d,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:h,buttonColorActive:h,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:g,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${X(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:f})},Me={name:"Radio",common:be,self:De},He=Me,Ee={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ce=ge("n-radio-group");function Oe(e){const o=ue(e,{mergedSize(c){const{size:C}=e;if(C!==void 0)return C;if(a){const{mergedSizeRef:{value:R}}=a;if(R!==void 0)return R}return c?c.mergedSize.value:"medium"},mergedDisabled(c){return!!(e.disabled||a!=null&&a.disabledRef.value||c!=null&&c.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:h}=o,d=m(null),_=m(null),a=fe(ce,null),g=m(e.defaultChecked),f=Q(e,"checked"),y=ie(f,g),v=Y(()=>a?a.valueRef.value===e.value:y.value),w=Y(()=>{const{name:c}=e;if(c!==void 0)return c;if(a)return a.nameRef.value}),z=m(!1);function A(){if(a){const{doUpdateValue:c}=a,{value:C}=e;L(c,C)}else{const{onUpdateChecked:c,"onUpdate:checked":C}=e,{nTriggerFormInput:R,nTriggerFormChange:S}=o;c&&L(c,!0),C&&L(C,!0),R(),S(),g.value=!0}}function b(){h.value||v.value||A()}function T(){b(),d.value&&(d.value.checked=v.value)}function F(){z.value=!1}function U(){z.value=!0}return{mergedClsPrefix:a?a.mergedClsPrefixRef:re(e).mergedClsPrefixRef,inputRef:d,labelRef:_,mergedName:w,mergedDisabled:h,renderSafeChecked:v,focus:z,mergedSize:t,handleRadioInputChange:T,handleRadioInputBlur:F,handleRadioInputFocus:U}}const Ne=K("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[H("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[N("checked",{backgroundColor:"var(--n-button-border-color-active)"}),N("disabled",{opacity:"var(--n-opacity-disabled)"})]),N("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[K("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),H("splitor",{height:"var(--n-height)"})]),K("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[K("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),H("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),Z("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[H("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),Z("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[H("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),ee("disabled",`
 cursor: pointer;
 `,[Z("&:hover",[H("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),ee("checked",{color:"var(--n-button-text-color-hover)"})]),N("focus",[Z("&:not(:active)",[H("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),N("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Pe(e,o,t){var h;const d=[];let _=!1;for(let a=0;a<e.length;++a){const g=e[a],f=(h=g.type)===null||h===void 0?void 0:h.name;f==="RadioButton"&&(_=!0);const y=g.props;if(f!=="RadioButton"){d.push(g);continue}if(a===0)d.push(g);else{const v=d[d.length-1].props,w=o===v.value,z=v.disabled,A=o===y.value,b=y.disabled,T=(w?2:0)+(z?0:1),F=(A?2:0)+(b?0:1),U={[`${t}-radio-group__splitor--disabled`]:z,[`${t}-radio-group__splitor--checked`]:w},c={[`${t}-radio-group__splitor--disabled`]:b,[`${t}-radio-group__splitor--checked`]:A},C=T<F?c:U;d.push(P("div",{class:[`${t}-radio-group__splitor`,C]}),g)}}return{children:d,isButtonGroup:_}}const Le=Object.assign(Object.assign({},de.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Ge=le({name:"RadioGroup",props:Le,setup(e){const o=m(null),{mergedSizeRef:t,mergedDisabledRef:h,nTriggerFormChange:d,nTriggerFormInput:_,nTriggerFormBlur:a,nTriggerFormFocus:g}=ue(e),{mergedClsPrefixRef:f,inlineThemeDisabled:y,mergedRtlRef:v}=re(e),w=de("Radio","-radio-group",Ne,He,e,f),z=m(e.defaultValue),A=Q(e,"value"),b=ie(A,z);function T(S){const{onUpdateValue:B,"onUpdate:value":r}=e;B&&L(B,S),r&&L(r,S),z.value=S,d(),_()}function F(S){const{value:B}=o;B&&(B.contains(S.relatedTarget)||g())}function U(S){const{value:B}=o;B&&(B.contains(S.relatedTarget)||a())}me(ce,{mergedClsPrefixRef:f,nameRef:Q(e,"name"),valueRef:b,disabledRef:h,mergedSizeRef:t,doUpdateValue:T});const c=_e("Radio",v,f),C=te(()=>{const{value:S}=t,{common:{cubicBezierEaseInOut:B},self:{buttonBorderColor:r,buttonBorderColorActive:s,buttonBorderRadius:V,buttonBoxShadow:$,buttonBoxShadowFocus:k,buttonBoxShadowHover:D,buttonColor:M,buttonColorActive:G,buttonTextColor:W,buttonTextColorActive:j,buttonTextColorHover:O,opacityDisabled:i,[oe("buttonHeight",S)]:he,[oe("fontSize",S)]:ve}}=w.value;return{"--n-font-size":ve,"--n-bezier":B,"--n-button-border-color":r,"--n-button-border-color-active":s,"--n-button-border-radius":V,"--n-button-box-shadow":$,"--n-button-box-shadow-focus":k,"--n-button-box-shadow-hover":D,"--n-button-color":M,"--n-button-color-active":G,"--n-button-text-color":W,"--n-button-text-color-hover":O,"--n-button-text-color-active":j,"--n-height":he,"--n-opacity-disabled":i}}),R=y?xe("radio-group",te(()=>t.value[0]),C,e):void 0;return{selfElRef:o,rtlEnabled:c,mergedClsPrefix:f,mergedValue:b,handleFocusout:U,handleFocusin:F,cssVars:y?void 0:C,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:h,handleFocusout:d}=this,{children:_,isButtonGroup:a}=Pe(ye(Te(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),P("div",{onFocusin:h,onFocusout:d,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,a&&`${t}-radio-group--button-group`],style:this.cssVars},_)}}),We=le({name:"RadioButton",props:Ee,setup:Oe,render(){const{mergedClsPrefix:e}=this;return P("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},P("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),P("div",{class:`${e}-radio-button__state-border`}),we(this.$slots.default,o=>!o&&!this.label?null:P("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}}),I=e=>(ze("data-v-3e27cbdc"),e=e(),Re(),e),je={id:"content-main"},Ke=I(()=>n("br",null,null,-1)),Ze={class:"wrap"},qe={class:"card"},Je=I(()=>n("div",{class:"vleft"},"启动窗口：",-1)),Qe={class:"vright"},Xe={class:"card"},Ye=I(()=>n("div",{class:"vleft"},"调试模式：",-1)),et={class:"vright"},tt={class:"card"},ot=I(()=>n("div",{class:"vleft"},"边缘吸附：",-1)),nt={class:"vright"},at={class:"card"},st=I(()=>n("div",{class:"vleft"},"内存优化：",-1)),it={class:"vright"},rt={class:"card"},lt=I(()=>n("div",{class:"vleft"},"页面缩放：",-1)),dt={class:"vright"},ut={class:"card"},ct=I(()=>n("div",{class:"vleft"},"显示边栏：",-1)),ht={class:"vright"},vt={class:"card"},bt=I(()=>n("div",{class:"vleft"},"边栏位置：",-1)),pt={class:"vright"},gt={class:"card"},ft=I(()=>n("div",{class:"vleft"},"系统主题：",-1)),mt={class:"vright"},_t={style:{"padding-right":"20px"}},xt={style:{"padding-right":"20px"}},yt=["href"],wt=["href"],Ct={__name:"SetView",setup(e){const o=Be(),t=m({}),h=m(!1),d=m(!1),_=m("system"),a=m("left"),g=m(!0),f=m(!1),y=m(!0),v=m({width:800,height:600}),w=m({version:"加载中...",electron:"--",chrome:"--"}),z=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],A=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],b=(r,s)=>{let V=s.value.find($=>$.name===r);return typeof V.value=="number"?V.value!==0:typeof V.value=="string"&&V.value==="0"?!1:V.value};Se(async()=>{w.value=await window.myApi.getVersion(),t.value=await window.myApi.getSettings(),h.value=b("isWindowEdgeAdsorption",t),d.value=b("isMemoryOptimizationEnabled",t),a.value=b("leftMenuPosition",t),_.value=b("systemTheme",t),g.value=b("isMenuVisible",t),f.value=b("isOpenDevTools",t),y.value=b("isOpenZoom",t),v.value=b("defaultWindowSize",t)});const T=async r=>{const s={name:"isWindowEdgeAdsorption",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},F=async r=>{const s={name:"isMemoryOptimizationEnabled",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},U=r=>{window.myApi.updateSetting({name:"isMenuVisible",value:r?1:0}),o.success("设置已更新,请重新启动")},c=r=>{window.myApi.updateSetting({name:"isOpenDevTools",value:r?1:0}),o.success("设置已更新,请重新启动")},C=r=>{window.myApi.updateSetting({name:"isOpenZoom",value:r?1:0}),o.success("设置已更新,请重新启动")},R=r=>{window.myApi.updateSetting({name:"systemTheme",value:r.target.value}),o.success("设置已更新,请重新启动")},S=r=>{window.myApi.updateSetting({name:"leftMenuPosition",value:r.target.value}),o.success("设置已更新,请重新启动")},B=r=>{const{value:s,placeholder:V}=r.target,$=V==="width"?"width":"height",k=Number(s);let D={};if(isNaN(k)||k<=0){o.error("请输入有效的正数");return}if($==="width"){if(k>3e3){o.error("宽度不能超过3000px");return}if(k<300){o.error("宽度不能小于300px");return}D={width:k,height:Number(v.value.height)}}if($==="height"){if(k>2e3){o.error("高度不能超过2000px");return}if(k<300){o.error("高度不能小于300px");return}D={width:Number(v.value.width),height:k}}window.myApi.updateSetting({name:"defaultWindowSize",value:D}),o.success("设置已更新,请重新启动")};return(r,s)=>{const V=Fe,$=Ie,k=Ve,D=Ue,M=Ae,G=We,W=Ge,j=ke,O=$e;return q(),J("div",je,[u($,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:l(()=>[u(V,{style:{"margin-bottom":"0"}},{default:l(()=>[p("通用设置")]),_:1})]),_:1}),u($,{"show-icon":!1},{default:l(()=>[p(" 1.设置改变后，重启程序才能生效。"),Ke]),_:1}),u(j,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:l(()=>[n("div",Ze,[n("div",qe,[Je,n("div",Qe,[u(D,{onChange:B},{default:l(()=>[u(k,{size:"small",value:x(v).width,"onUpdate:value":s[0]||(s[0]=i=>x(v).width=i),style:{width:"20%"},placeholder:"width"},null,8,["value"]),p(" x "),u(k,{size:"small",value:x(v).height,"onUpdate:value":s[1]||(s[1]=i=>x(v).height=i),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),n("div",Xe,[Ye,n("div",et,[u(M,{size:"medium",value:x(f),"onUpdate:value":[s[2]||(s[2]=i=>E(f)?f.value=i:null),c],style:{"font-size":"12px"}},{checked:l(()=>[p("开启")]),unchecked:l(()=>[p("关闭")]),_:1},8,["value"])])]),n("div",tt,[ot,n("div",nt,[u(M,{size:"medium",value:x(h),"onUpdate:value":[s[3]||(s[3]=i=>E(h)?h.value=i:null),T],style:{"font-size":"12px"}},{checked:l(()=>[p("开启")]),unchecked:l(()=>[p("关闭")]),_:1},8,["value"])])]),n("div",at,[st,n("div",it,[u(M,{size:"medium",value:x(d),"onUpdate:value":[s[4]||(s[4]=i=>E(d)?d.value=i:null),F],style:{"font-size":"12px"}},{checked:l(()=>[p("开启")]),unchecked:l(()=>[p("关闭")]),_:1},8,["value"])])]),n("div",rt,[lt,n("div",dt,[u(M,{size:"medium",value:x(y),"onUpdate:value":[s[5]||(s[5]=i=>E(y)?y.value=i:null),C],style:{"font-size":"12px"}},{checked:l(()=>[p("开启")]),unchecked:l(()=>[p("关闭")]),_:1},8,["value"])])]),n("div",ut,[ct,n("div",ht,[u(M,{size:"medium",value:x(g),"onUpdate:value":[s[6]||(s[6]=i=>E(g)?g.value=i:null),U],style:{"font-size":"12px"}},{checked:l(()=>[p("显示")]),unchecked:l(()=>[p("隐藏")]),_:1},8,["value"])])]),n("div",vt,[bt,n("div",pt,[u(W,{size:"small",onChange:S,value:x(a),"onUpdate:value":s[7]||(s[7]=i=>E(a)?a.value=i:null),name:"menuPoss",style:{"font-size":"12px"}},{default:l(()=>[(q(),J(ne,null,ae(A,i=>u(G,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),n("div",gt,[ft,n("div",mt,[u(W,{size:"small",onChange:R,value:x(_),"onUpdate:value":s[8]||(s[8]=i=>E(_)?_.value=i:null),name:"themegroup1",style:{"font-size":"12px"}},{default:l(()=>[(q(),J(ne,null,ae(z,i=>u(G,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),u(j,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:l(()=>[n("span",_t,[p(" 当前版本: "),u(O,{bordered:!1,type:"info",size:"medium"},{default:l(()=>[p(se(x(w).version),1)]),_:1})]),n("span",xt,[p(" 最新版本: "),u(O,{bordered:!1,type:"info",size:"medium"},{default:l(()=>[p(se(x(w).newVersion),1)]),_:1})]),n("span",null,[p(" 获取新版： "),u(O,{bordered:!1,type:"info",size:"medium",style:{"margin-right":"20px"}},{default:l(()=>[n("a",{target:"_blank",href:x(w).github},"GitHub下载",8,yt)]),_:1}),u(O,{bordered:!1,type:"error",size:"medium"},{default:l(()=>[n("a",{target:"_blank",href:x(w).download},"国内下载",8,wt)]),_:1})])]),_:1})])}}},Tt=Ce(Ct,[["__scopeId","data-v-3e27cbdc"]]);export{Tt as default};
