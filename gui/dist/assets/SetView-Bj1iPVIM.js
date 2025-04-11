import{G as be,H as pe,I as X,J as ge,r as m,K as fe,L as Q,M as ie,O as Y,z as re,P as L,Q as K,R as E,S as O,T as Z,U as ee,x as le,y as de,V as me,A as _e,i as te,W as xe,B as ye,C as N,D as oe,X as we,_ as Ce,q as Se,o as q,c as J,b as c,d,e as p,a,u as R,n as H,F as ne,s as ae,t as se,p as ze,k as Re}from"./index-CKr1sBzE.js";import{_ as ke}from"./Card-d1CXi8i_.js";import{b as ue,u as Be,a as Ve,_ as Ae}from"./Switch-ltGID9PI.js";import{g as Te}from"./get-slot-Bk_rJcZu.js";import{_ as $e}from"./Tag-DbUisNv6.js";import{_ as Ie,N as Fe}from"./headers-0_oMGkeL.js";import{_ as Ue}from"./InputGroup-DfoUfYUV.js";const De=e=>{const{borderColor:o,primaryColor:t,baseColor:h,textColorDisabled:l,inputColorDisabled:_,textColor2:n,opacityDisabled:g,borderRadius:f,fontSizeSmall:x,fontSizeMedium:v,fontSizeLarge:k,heightSmall:C,heightMedium:A,heightLarge:b,lineHeight:$}=e;return Object.assign(Object.assign({},pe),{labelLineHeight:$,buttonHeightSmall:C,buttonHeightMedium:A,buttonHeightLarge:b,fontSizeSmall:x,fontSizeMedium:v,fontSizeLarge:k,boxShadow:`inset 0 0 0 1px ${o}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${X(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${o}`,color:h,colorDisabled:_,colorActive:"#0000",textColor:n,textColorDisabled:l,dotColorActive:t,dotColorDisabled:o,buttonBorderColor:o,buttonBorderColorActive:t,buttonBorderColorHover:o,buttonColor:h,buttonColorActive:h,buttonTextColor:n,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:g,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${X(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:f})},Me={name:"Radio",common:be,self:De},Ee=Me,He={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ce=ge("n-radio-group");function Oe(e){const o=ue(e,{mergedSize(u){const{size:y}=e;if(y!==void 0)return y;if(n){const{mergedSizeRef:{value:S}}=n;if(S!==void 0)return S}return u?u.mergedSize.value:"medium"},mergedDisabled(u){return!!(e.disabled||n!=null&&n.disabledRef.value||u!=null&&u.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:h}=o,l=m(null),_=m(null),n=fe(ce,null),g=m(e.defaultChecked),f=Q(e,"checked"),x=ie(f,g),v=Y(()=>n?n.valueRef.value===e.value:x.value),k=Y(()=>{const{name:u}=e;if(u!==void 0)return u;if(n)return n.nameRef.value}),C=m(!1);function A(){if(n){const{doUpdateValue:u}=n,{value:y}=e;L(u,y)}else{const{onUpdateChecked:u,"onUpdate:checked":y}=e,{nTriggerFormInput:S,nTriggerFormChange:w}=o;u&&L(u,!0),y&&L(y,!0),S(),w(),g.value=!0}}function b(){h.value||v.value||A()}function $(){b(),l.value&&(l.value.checked=v.value)}function F(){C.value=!1}function U(){C.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:re(e).mergedClsPrefixRef,inputRef:l,labelRef:_,mergedName:k,mergedDisabled:h,renderSafeChecked:v,focus:C,mergedSize:t,handleRadioInputChange:$,handleRadioInputBlur:F,handleRadioInputFocus:U}}const Ne=K("radio-group",`
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
 `,[O("checked",{backgroundColor:"var(--n-button-border-color-active)"}),O("disabled",{opacity:"var(--n-opacity-disabled)"})]),O("button-group",`
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
 `),ee("checked",{color:"var(--n-button-text-color-hover)"})]),O("focus",[Z("&:not(:active)",[E("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),O("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),O("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Pe(e,o,t){var h;const l=[];let _=!1;for(let n=0;n<e.length;++n){const g=e[n],f=(h=g.type)===null||h===void 0?void 0:h.name;f==="RadioButton"&&(_=!0);const x=g.props;if(f!=="RadioButton"){l.push(g);continue}if(n===0)l.push(g);else{const v=l[l.length-1].props,k=o===v.value,C=v.disabled,A=o===x.value,b=x.disabled,$=(k?2:0)+(C?0:1),F=(A?2:0)+(b?0:1),U={[`${t}-radio-group__splitor--disabled`]:C,[`${t}-radio-group__splitor--checked`]:k},u={[`${t}-radio-group__splitor--disabled`]:b,[`${t}-radio-group__splitor--checked`]:A},y=$<F?u:U;l.push(N("div",{class:[`${t}-radio-group__splitor`,y]}),g)}}return{children:l,isButtonGroup:_}}const Le=Object.assign(Object.assign({},de.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),We=le({name:"RadioGroup",props:Le,setup(e){const o=m(null),{mergedSizeRef:t,mergedDisabledRef:h,nTriggerFormChange:l,nTriggerFormInput:_,nTriggerFormBlur:n,nTriggerFormFocus:g}=ue(e),{mergedClsPrefixRef:f,inlineThemeDisabled:x,mergedRtlRef:v}=re(e),k=de("Radio","-radio-group",Ne,Ee,e,f),C=m(e.defaultValue),A=Q(e,"value"),b=ie(A,C);function $(w){const{onUpdateValue:B,"onUpdate:value":r}=e;B&&L(B,w),r&&L(r,w),C.value=w,l(),_()}function F(w){const{value:B}=o;B&&(B.contains(w.relatedTarget)||g())}function U(w){const{value:B}=o;B&&(B.contains(w.relatedTarget)||n())}me(ce,{mergedClsPrefixRef:f,nameRef:Q(e,"name"),valueRef:b,disabledRef:h,mergedSizeRef:t,doUpdateValue:$});const u=_e("Radio",v,f),y=te(()=>{const{value:w}=t,{common:{cubicBezierEaseInOut:B},self:{buttonBorderColor:r,buttonBorderColorActive:s,buttonBorderRadius:V,buttonBoxShadow:I,buttonBoxShadowFocus:z,buttonBoxShadowHover:D,buttonColor:M,buttonColorActive:W,buttonTextColor:j,buttonTextColorActive:G,buttonTextColorHover:P,opacityDisabled:i,[oe("buttonHeight",w)]:he,[oe("fontSize",w)]:ve}}=k.value;return{"--n-font-size":ve,"--n-bezier":B,"--n-button-border-color":r,"--n-button-border-color-active":s,"--n-button-border-radius":V,"--n-button-box-shadow":I,"--n-button-box-shadow-focus":z,"--n-button-box-shadow-hover":D,"--n-button-color":M,"--n-button-color-active":W,"--n-button-text-color":j,"--n-button-text-color-hover":P,"--n-button-text-color-active":G,"--n-height":he,"--n-opacity-disabled":i}}),S=x?xe("radio-group",te(()=>t.value[0]),y,e):void 0;return{selfElRef:o,rtlEnabled:u,mergedClsPrefix:f,mergedValue:b,handleFocusout:U,handleFocusin:F,cssVars:x?void 0:y,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{mergedValue:o,mergedClsPrefix:t,handleFocusin:h,handleFocusout:l}=this,{children:_,isButtonGroup:n}=Pe(ye(Te(this)),o,t);return(e=this.onRender)===null||e===void 0||e.call(this),N("div",{onFocusin:h,onFocusout:l,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,n&&`${t}-radio-group--button-group`],style:this.cssVars},_)}}),je=le({name:"RadioButton",props:He,setup:Oe,render(){const{mergedClsPrefix:e}=this;return N("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},N("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),N("div",{class:`${e}-radio-button__state-border`}),we(this.$slots.default,o=>!o&&!this.label?null:N("div",{ref:"labelRef",class:`${e}-radio__label`},o||this.label)))}}),T=e=>(ze("data-v-15261cf6"),e=e(),Re(),e),Ge={id:"content-main"},Ke=T(()=>a("br",null,null,-1)),Ze={class:"wrap"},qe={class:"card"},Je=T(()=>a("div",{class:"vleft"},"启动窗口：",-1)),Qe={class:"vright"},Xe={class:"card"},Ye=T(()=>a("div",{class:"vleft"},"调试模式：",-1)),et={class:"vright"},tt={class:"card"},ot=T(()=>a("div",{class:"vleft"},"边缘吸附：",-1)),nt={class:"vright"},at={class:"card"},st=T(()=>a("div",{class:"vleft"},"内存优化：",-1)),it={class:"vright"},rt={class:"card"},lt=T(()=>a("div",{class:"vleft"},"页面缩放：",-1)),dt={class:"vright"},ut={class:"card"},ct=T(()=>a("div",{class:"vleft"},"显示边栏：",-1)),ht={class:"vright"},vt={class:"card"},bt=T(()=>a("div",{class:"vleft"},"边栏位置：",-1)),pt={class:"vright"},gt={class:"card"},ft=T(()=>a("div",{class:"vleft"},"系统主题：",-1)),mt={class:"vright"},_t={style:{"padding-right":"20px"}},xt={style:{"padding-right":"20px"}},yt=T(()=>a("a",{target:"_blank",href:"https://github.com/deepshit2025/tuboshu/releases"},"点击下载",-1)),wt={__name:"SetView",setup(e){const o=Be(),t=m({}),h=m(!1),l=m(!1),_=m("system"),n=m("left"),g=m(!0),f=m(!1),x=m(!0),v=m({width:800,height:600}),k=m({version:"加载中...",electron:"--",chrome:"--"}),C=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],A=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],b=(r,s)=>{let V=s.value.find(I=>I.name===r);return typeof V.value=="number"?V.value!==0:typeof V.value=="string"&&V.value==="0"?!1:V.value};Se(async()=>{k.value=await window.myApi.getVersion(),t.value=await window.myApi.getSettings(),h.value=b("isWindowEdgeAdsorption",t),l.value=b("isMemoryOptimizationEnabled",t),n.value=b("leftMenuPosition",t),_.value=b("systemTheme",t),g.value=b("isMenuVisible",t),f.value=b("isOpenDevTools",t),x.value=b("isOpenZoom",t),v.value=b("defaultWindowSize",t)});const $=async r=>{const s={name:"isWindowEdgeAdsorption",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},F=async r=>{const s={name:"isMemoryOptimizationEnabled",value:r?1:0};window.myApi.updateSetting(s),o.success("设置已更新,请重新启动")},U=r=>{window.myApi.updateSetting({name:"isMenuVisible",value:r?1:0}),o.success("设置已更新,请重新启动")},u=r=>{window.myApi.updateSetting({name:"isOpenDevTools",value:r?1:0}),o.success("设置已更新,请重新启动")},y=r=>{window.myApi.updateSetting({name:"isOpenZoom",value:r?1:0}),o.success("设置已更新,请重新启动")},S=r=>{window.myApi.updateSetting({name:"systemTheme",value:r.target.value}),o.success("设置已更新,请重新启动")},w=r=>{window.myApi.updateSetting({name:"leftMenuPosition",value:r.target.value}),o.success("设置已更新,请重新启动")},B=r=>{const{value:s,placeholder:V}=r.target,I=V==="width"?"width":"height",z=Number(s);let D={};if(isNaN(z)||z<=0){o.error("请输入有效的正数");return}if(I==="width"){if(z>3e3){o.error("宽度不能超过3000px");return}if(z<300){o.error("宽度不能小于300px");return}D={width:z,height:Number(v.value.height)}}if(I==="height"){if(z>2e3){o.error("高度不能超过2000px");return}if(z<300){o.error("高度不能小于300px");return}D={width:Number(v.value.width),height:z}}window.myApi.updateSetting({name:"defaultWindowSize",value:D}),o.success("设置已更新,请重新启动")};return(r,s)=>{const V=Fe,I=Ie,z=Ve,D=Ue,M=Ae,W=je,j=We,G=ke,P=$e;return q(),J("div",Ge,[c(I,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:d(()=>[c(V,{style:{"margin-bottom":"0"}},{default:d(()=>[p("通用设置")]),_:1})]),_:1}),c(I,{"show-icon":!1},{default:d(()=>[p(" 1.设置改变后，重启程序才能生效。"),Ke]),_:1}),c(G,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:d(()=>[a("div",Ze,[a("div",qe,[Je,a("div",Qe,[c(D,{onChange:B},{default:d(()=>[c(z,{size:"small",value:R(v).width,"onUpdate:value":s[0]||(s[0]=i=>R(v).width=i),style:{width:"20%"},placeholder:"width"},null,8,["value"]),p(" x "),c(z,{size:"small",value:R(v).height,"onUpdate:value":s[1]||(s[1]=i=>R(v).height=i),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),a("div",Xe,[Ye,a("div",et,[c(M,{size:"medium",value:R(f),"onUpdate:value":[s[2]||(s[2]=i=>H(f)?f.value=i:null),u],style:{"font-size":"12px"}},{checked:d(()=>[p("开启")]),unchecked:d(()=>[p("关闭")]),_:1},8,["value"])])]),a("div",tt,[ot,a("div",nt,[c(M,{size:"medium",value:R(h),"onUpdate:value":[s[3]||(s[3]=i=>H(h)?h.value=i:null),$],style:{"font-size":"12px"}},{checked:d(()=>[p("开启")]),unchecked:d(()=>[p("关闭")]),_:1},8,["value"])])]),a("div",at,[st,a("div",it,[c(M,{size:"medium",value:R(l),"onUpdate:value":[s[4]||(s[4]=i=>H(l)?l.value=i:null),F],style:{"font-size":"12px"}},{checked:d(()=>[p("开启")]),unchecked:d(()=>[p("关闭")]),_:1},8,["value"])])]),a("div",rt,[lt,a("div",dt,[c(M,{size:"medium",value:R(x),"onUpdate:value":[s[5]||(s[5]=i=>H(x)?x.value=i:null),y],style:{"font-size":"12px"}},{checked:d(()=>[p("开启")]),unchecked:d(()=>[p("关闭")]),_:1},8,["value"])])]),a("div",ut,[ct,a("div",ht,[c(M,{size:"medium",value:R(g),"onUpdate:value":[s[6]||(s[6]=i=>H(g)?g.value=i:null),U],style:{"font-size":"12px"}},{checked:d(()=>[p("显示")]),unchecked:d(()=>[p("隐藏")]),_:1},8,["value"])])]),a("div",vt,[bt,a("div",pt,[c(j,{size:"small",onChange:w,value:R(n),"onUpdate:value":s[7]||(s[7]=i=>H(n)?n.value=i:null),name:"menuPoss",style:{"font-size":"12px"}},{default:d(()=>[(q(),J(ne,null,ae(A,i=>c(W,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),a("div",gt,[ft,a("div",mt,[c(j,{size:"small",onChange:S,value:R(_),"onUpdate:value":s[8]||(s[8]=i=>H(_)?_.value=i:null),name:"themegroup1",style:{"font-size":"12px"}},{default:d(()=>[(q(),J(ne,null,ae(C,i=>c(W,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),c(G,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:d(()=>[a("span",_t,[p(" 当前版本: "),c(P,{bordered:!1,type:"info",size:"medium"},{default:d(()=>[p(se(R(k).version),1)]),_:1})]),a("span",xt,[p(" 最新版本: "),c(P,{bordered:!1,type:"info",size:"medium"},{default:d(()=>[p(se(R(k).newVersion),1)]),_:1})]),a("span",null,[p(" 获取新版："),c(P,{bordered:!1,type:"info",size:"medium"},{default:d(()=>[yt]),_:1})])]),_:1})])}}},At=Ce(wt,[["__scopeId","data-v-15261cf6"]]);export{At as default};
