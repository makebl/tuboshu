import{co as he,cp as be,E as Q,i as pe,r as f,s as ge,t as J,Y as se,q as X,x as ie,B as P,c as K,k as E,j as N,e as Z,l as ee,d as re,p as le,K as me,y as fe,v as te,z as _e,cq as xe,h as O,D as oe,A as we,a3 as ye,o as Ce,a4 as q,a5 as Y,a6 as v,aa as u,ab as m,a8 as a,a7 as R,ak as H,al as ne,am as ae,a9 as Se,af as ze,ag as ke}from"./index-CdHEiT-d.js";import{_ as Re}from"./Card-C2-vuSLR.js";import{u as de,a as Be,b as Ve,_ as Ae}from"./Switch-BDUwLuEO.js";import{g as $e}from"./get-slot-Bk_rJcZu.js";import{_ as Te}from"./Tag-Dq_9JpCm.js";import{_ as Ie}from"./Alert-3-YLrSpR.js";import{N as De}from"./headers-BgMQsJf8.js";import{_ as Fe}from"./InputGroup-CNE0zw9c.js";const Ue=e=>{const{borderColor:o,primaryColor:t,baseColor:c,textColorDisabled:l,inputColorDisabled:_,textColor2:n,opacityDisabled:p,borderRadius:g,fontSizeSmall:x,fontSizeMedium:h,fontSizeLarge:B,heightSmall:C,heightMedium:A,heightLarge:b,lineHeight:T}=e;return Object.assign(Object.assign({},be),{labelLineHeight:T,buttonHeightSmall:C,buttonHeightMedium:A,buttonHeightLarge:b,fontSizeSmall:x,fontSizeMedium:h,fontSizeLarge:B,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${Q(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:c,colorDisabled:_,colorActive:"#0000",textColor:n,textColorDisabled:l,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:c,buttonColorActive:c,buttonTextColor:n,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:p,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${Q(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:g})},Me={name:"Radio",common:he,self:Ue},Ee=Me,He={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ue=pe("n-radio-group");function Ne(e){const o=de(e,{mergedSize(d){const{size:w}=e;if(w!==void 0)return w;if(n){const{mergedSizeRef:{value:S}}=n;if(S!==void 0)return S}return d?d.mergedSize.value:"medium"},mergedDisabled(d){return!!(e.disabled||n!=null&&n.disabledRef.value||d!=null&&d.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:c}=o,l=f(null),_=f(null),n=ge(ue,null),p=f(e.defaultChecked),g=J(e,"checked"),x=se(g,p),h=X(()=>n?n.valueRef.value===e.value:x.value),B=X(()=>{const{name:d}=e;if(d!==void 0)return d;if(n)return n.nameRef.value}),C=f(!1);function A(){if(n){const{doUpdateValue:d}=n,{value:w}=e;P(d,w)}else{const{onUpdateChecked:d,"onUpdate:checked":w}=e,{nTriggerFormInput:S,nTriggerFormChange:y}=o;d&&P(d,!0),w&&P(w,!0),S(),y(),p.value=!0}}function b(){c.value||h.value||A()}function T(){b(),l.value&&(l.value.checked=h.value)}function D(){C.value=!1}function F(){C.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:ie(e).mergedClsPrefixRef,inputRef:l,labelRef:_,mergedName:B,mergedDisabled:c,renderSafeChecked:h,focus:C,mergedSize:t,handleRadioInputChange:T,handleRadioInputBlur:D,handleRadioInputFocus:F}}const Oe=K("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[E("splitor",`
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
 `,[K("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),E("splitor",{height:"var(--n-height)"})]),K("radio-button",`
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
 `),E("state-border",`
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
 `,[E("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),Z("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[E("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),ee("disabled",`
 cursor: pointer;
 `,[Z("&:hover",[E("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),ee("checked",{color:"var(--n-button-text-color-hover)"})]),N("focus",[Z("&:not(:active)",[E("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),N("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),N("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Pe(e,o,t){var c;const l=[];let _=!1;for(let n=0;n<e.length;++n){const p=e[n],g=(c=p.type)===null||c===void 0?void 0:c.name;g==="RadioButton"&&(_=!0);const x=p.props;if(g!=="RadioButton"){l.push(p);continue}if(n===0)l.push(p);else{const h=l[l.length-1].props,B=o===h.value,C=h.disabled,A=o===x.value,b=x.disabled,T=(B?2:0)+(C?0:1),D=(A?2:0)+(b?0:1),F={[`${t}-radio-group__splitor--disabled`]:C,[`${t}-radio-group__splitor--checked`]:B},d={[`${t}-radio-group__splitor--disabled`]:b,[`${t}-radio-group__splitor--checked`]:A},w=T<D?d:F;l.push(O("div",{class:[`${t}-radio-group__splitor`,w]}),p)}}return{children:l,isButtonGroup:_}}const je=Object.assign(Object.assign({},le.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Le=re({name:"RadioGroup",props:je,setup(e){const o=f(null),{mergedSizeRef:t,mergedDisabledRef:c,nTriggerFormChange:l,nTriggerFormInput:_,nTriggerFormBlur:n,nTriggerFormFocus:p}=de(e),{mergedClsPrefixRef:g,inlineThemeDisabled:x,mergedRtlRef:h}=ie(e),B=le("Radio","-radio-group",Oe,Ee,e,g),C=f(e.defaultValue),A=J(e,"value"),b=se(A,C);function T(y){const{onUpdateValue:k,"onUpdate:value":r}=e;k&&P(k,y),r&&P(r,y),C.value=y,l(),_()}function D(y){const{value:k}=o;k&&(k.contains(y.relatedTarget)||p())}function F(y){const{value:k}=o;k&&(k.contains(y.relatedTarget)||n())}me(ue,{mergedClsPrefixRef:g,nameRef:J(e,"name"),valueRef:b,disabledRef:c,mergedSizeRef:t,doUpdateValue:T});const d=fe("Radio",h,g),w=te(()=>{const{value:y}=t,{common:{cubicBezierEaseInOut:k},self:{buttonBorderColor:r,buttonBorderColorActive:s,buttonBorderRadius:V,buttonBoxShadow:I,buttonBoxShadowFocus:z,buttonBoxShadowHover:U,buttonColor:M,buttonColorActive:j,buttonTextColor:L,buttonTextColorActive:W,buttonTextColorHover:G,opacityDisabled:i,[oe("buttonHeight",y)]:ce,[oe("fontSize",y)]:ve}}=B.value;return{"--n-font-size":ve,"--n-bezier":k,"--n-button-border-color":r,"--n-button-border-color-active":s,"--n-button-border-radius":V,"--n-button-box-shadow":I,"--n-button-box-shadow-focus":z,"--n-button-box-shadow-hover":U,"--n-button-color":M,"--n-button-color-active":j,"--n-button-text-color":L,"--n-button-text-color-hover":G,"--n-button-text-color-active":W,"--n-height":ce,"--n-opacity-disabled":i}}),S=x?_e("radio-group",te(()=>t.value[0]),w,e):void 0;return{selfElRef:o,rtlEnabled:d,mergedClsPrefix:g,mergedValue:b,handleFocusout:F,handleFocusin:D,cssVars:x?void 0:w,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:c,handleFocusout:l}=this,{children:_,isButtonGroup:n}=Pe(xe($e(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),O("div",{onFocusin:c,onFocusout:l,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,n&&`${t}-radio-group--button-group`],style:this.cssVars},_)}}),We=re({name:"RadioButton",props:He,setup:Ne,render(){const{mergedClsPrefix:e}=this;return O("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},O("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),O("div",{class:`${e}-radio-button__state-border`}),we(this.$slots.default,o=>!o&&!this.label?null:O("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}}),$=e=>(ze("data-v-1e7b9949"),e=e(),ke(),e),Ge={id:"content-main"},Ke=$(()=>a("br",null,null,-1)),Ze={class:"wrap"},qe={class:"card"},Ye=$(()=>a("div",{class:"vleft"},"启动窗口：",-1)),Je={class:"vright"},Qe={class:"card"},Xe=$(()=>a("div",{class:"vleft"},"调试模式：",-1)),et={class:"vright"},tt={class:"card"},ot=$(()=>a("div",{class:"vleft"},"边缘吸附：",-1)),nt={class:"vright"},at={class:"card"},st=$(()=>a("div",{class:"vleft"},"内存优化：",-1)),it={class:"vright"},rt={class:"card"},lt=$(()=>a("div",{class:"vleft"},"页面缩放：",-1)),dt={class:"vright"},ut={class:"card"},ct=$(()=>a("div",{class:"vleft"},"显示边栏：",-1)),vt={class:"vright"},ht={class:"card"},bt=$(()=>a("div",{class:"vleft"},"边栏位置：",-1)),pt={class:"vright"},gt={class:"card"},mt=$(()=>a("div",{class:"vleft"},"系统主题：",-1)),ft={class:"vright"},_t={style:{"padding-right":"20px"}},xt=$(()=>a("a",{target:"_blank",href:"https://github.com/deepshit2025/tuboshu/releases"},"点击下载",-1)),wt={__name:"SetView",setup(e){const o=Be(),t=f({}),c=f(!1),l=f(!1),_=f("system"),n=f("left"),p=f(!0),g=f(!1),x=f(!0),h=f({width:800,height:600}),B=f({version:"加载中...",electron:"--",chrome:"--"}),C=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],A=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],b=(r,s)=>{let V=s.value.find(I=>I.name===r);return typeof V.value=="number"?V.value!==0:typeof V.value=="string"&&V.value==="0"?!1:V.value};Ce(async()=>{B.value=await window.myApi.getVersion(),t.value=await window.myApi.getSettings(),c.value=b("isWindowEdgeAdsorption",t),l.value=b("isMemoryOptimizationEnabled",t),n.value=b("leftMenuPosition",t),_.value=b("systemTheme",t),p.value=b("isMenuVisible",t),g.value=b("isOpenDevTools",t),x.value=b("isOpenZoom",t),h.value=b("defaultWindowSize",t)});const T=async r=>{const s={name:"isWindowEdgeAdsorption",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},D=async r=>{const s={name:"isMemoryOptimizationEnabled",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},F=r=>{window.myApi.updateSetting({name:"isMenuVisible",value:r?1:0}),o.success("设置已更新,请重新启动")},d=r=>{window.myApi.updateSetting({name:"isOpenDevTools",value:r?1:0}),o.success("设置已更新,请重新启动")},w=r=>{window.myApi.updateSetting({name:"isOpenZoom",value:r?1:0}),o.success("设置已更新,请重新启动")},S=r=>{window.myApi.updateSetting({name:"systemTheme",value:r.target.value}),o.success("设置已更新,请重新启动")},y=r=>{window.myApi.updateSetting({name:"leftMenuPosition",value:r.target.value}),o.success("设置已更新,请重新启动")},k=r=>{const{value:s,placeholder:V}=r.target,I=V==="width"?"width":"height",z=Number(s);let U={};if(isNaN(z)||z<=0){o.error("请输入有效的正数");return}if(I==="width"){if(z>3e3){o.error("宽度不能超过3000px");return}if(z<300){o.error("宽度不能小于300px");return}U={width:z,height:Number(h.value.height)}}if(I==="height"){if(z>2e3){o.error("高度不能超过2000px");return}if(z<300){o.error("高度不能小于300px");return}U={width:Number(h.value.width),height:z}}window.myApi.updateSetting({name:"defaultWindowSize",value:U}),o.success("设置已更新,请重新启动")};return(r,s)=>{const V=De,I=Ie,z=Ve,U=Fe,M=Ae,j=We,L=Le,W=Re,G=Te;return q(),Y("div",Ge,[v(I,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:u(()=>[v(V,{style:{"margin-bottom":"0"}},{default:u(()=>[m("通用设置")]),_:1})]),_:1}),v(I,{"show-icon":!1},{default:u(()=>[m(" 1.设置改变后，重启程序才能生效。"),Ke]),_:1}),v(W,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:u(()=>[a("div",Ze,[a("div",qe,[Ye,a("div",Je,[v(U,{onChange:k},{default:u(()=>[v(z,{size:"small",value:R(h).width,"onUpdate:value":s[0]||(s[0]=i=>R(h).width=i),style:{width:"20%"},placeholder:"width"},null,8,["value"]),m(" x "),v(z,{size:"small",value:R(h).height,"onUpdate:value":s[1]||(s[1]=i=>R(h).height=i),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),a("div",Qe,[Xe,a("div",et,[v(M,{size:"medium",value:R(g),"onUpdate:value":[s[2]||(s[2]=i=>H(g)?g.value=i:null),d],style:{"font-size":"12px"}},{checked:u(()=>[m("开启")]),unchecked:u(()=>[m("关闭")]),_:1},8,["value"])])]),a("div",tt,[ot,a("div",nt,[v(M,{size:"medium",value:R(c),"onUpdate:value":[s[3]||(s[3]=i=>H(c)?c.value=i:null),T],style:{"font-size":"12px"}},{checked:u(()=>[m("开启")]),unchecked:u(()=>[m("关闭")]),_:1},8,["value"])])]),a("div",at,[st,a("div",it,[v(M,{size:"medium",value:R(l),"onUpdate:value":[s[4]||(s[4]=i=>H(l)?l.value=i:null),D],style:{"font-size":"12px"}},{checked:u(()=>[m("开启")]),unchecked:u(()=>[m("关闭")]),_:1},8,["value"])])]),a("div",rt,[lt,a("div",dt,[v(M,{size:"medium",value:R(x),"onUpdate:value":[s[5]||(s[5]=i=>H(x)?x.value=i:null),w],style:{"font-size":"12px"}},{checked:u(()=>[m("开启")]),unchecked:u(()=>[m("关闭")]),_:1},8,["value"])])]),a("div",ut,[ct,a("div",vt,[v(M,{size:"medium",value:R(p),"onUpdate:value":[s[6]||(s[6]=i=>H(p)?p.value=i:null),F],style:{"font-size":"12px"}},{checked:u(()=>[m("显示")]),unchecked:u(()=>[m("隐藏")]),_:1},8,["value"])])]),a("div",ht,[bt,a("div",pt,[v(L,{size:"small",onChange:y,value:R(n),"onUpdate:value":s[7]||(s[7]=i=>H(n)?n.value=i:null),name:"menuPoss",style:{"font-size":"12px"}},{default:u(()=>[(q(),Y(ne,null,ae(A,i=>v(j,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),a("div",gt,[mt,a("div",ft,[v(L,{size:"small",onChange:S,value:R(_),"onUpdate:value":s[8]||(s[8]=i=>H(_)?_.value=i:null),name:"themegroup1",style:{"font-size":"12px"}},{default:u(()=>[(q(),Y(ne,null,ae(C,i=>v(j,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),v(W,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:u(()=>[a("span",_t,[m(" 当前版本: "),v(G,{bordered:!1,type:"info",size:"medium"},{default:u(()=>[m(Se(R(B).version),1)]),_:1})]),a("span",null,[m(" 获取新版："),v(G,{bordered:!1,type:"info",size:"medium"},{default:u(()=>[xt]),_:1})])]),_:1})])}}},At=ye(wt,[["__scopeId","data-v-1e7b9949"]]);export{At as default};
