import{_ as be,a as ve}from"./_plugin-vue_export-helper-BlnRYz-c.js";import{_ as pe}from"./Card-BIIoZno4.js";import{a7 as he,d6 as ge,H as K,k as fe,A as me,r as x,i as L,a1 as ee,z as q,C as te,J as D,d as oe,h as T,s as _e,g as O,p as F,l as I,e as j,m as J,d7 as xe,D as ne,U as we,F as ye,B as Q,G as X,I as Ce,b as Re,ah as G,aj as f,an as _,ai as W,aq as C,ak as i,al as k,au as U,aa as Y,aw as Z,am as Se}from"./index-CMpVsCT4.js";import{u as re,b as ze,c as ke,_ as Be}from"./Switch-DKBdrFsN.js";import{g as Ve}from"./get-slot-Bk_rJcZu.js";import{_ as $e}from"./Tag-DZYm_qFo.js";import{N as Ae}from"./headers-FWJM6CJo.js";import{_ as Fe}from"./InputGroup-D8hi5lLS.js";function Ie(o){const{borderColor:t,primaryColor:n,baseColor:c,textColorDisabled:l,inputColorDisabled:h,textColor2:b,opacityDisabled:g,borderRadius:u,fontSizeSmall:w,fontSizeMedium:y,fontSizeLarge:S,heightSmall:v,heightMedium:z,heightLarge:R,lineHeight:B}=o;return Object.assign(Object.assign({},ge),{labelLineHeight:B,buttonHeightSmall:v,buttonHeightMedium:z,buttonHeightLarge:R,fontSizeSmall:w,fontSizeMedium:y,fontSizeLarge:S,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${n}`,boxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${K(n,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${n}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:c,colorDisabled:h,colorActive:"#0000",textColor:b,textColorDisabled:l,dotColorActive:n,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:n,buttonBorderColorHover:t,buttonColor:c,buttonColorActive:c,buttonTextColor:b,buttonTextColorActive:n,buttonTextColorHover:n,opacityDisabled:g,buttonBoxShadowFocus:`inset 0 0 0 1px ${n}, 0 0 0 2px ${K(n,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:u})}const Te={common:he,self:Ie},Me={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},ae=fe("n-radio-group");function Ue(o){const t=me(ae,null),n=re(o,{mergedSize(d){const{size:r}=o;if(r!==void 0)return r;if(t){const{mergedSizeRef:{value:e}}=t;if(e!==void 0)return e}return d?d.mergedSize.value:"medium"},mergedDisabled(d){return!!(o.disabled||t!=null&&t.disabledRef.value||d!=null&&d.disabled.value)}}),{mergedSizeRef:c,mergedDisabledRef:l}=n,h=x(null),b=x(null),g=x(o.defaultChecked),u=L(o,"checked"),w=ee(u,g),y=q(()=>t?t.valueRef.value===o.value:w.value),S=q(()=>{const{name:d}=o;if(d!==void 0)return d;if(t)return t.nameRef.value}),v=x(!1);function z(){if(t){const{doUpdateValue:d}=t,{value:r}=o;D(d,r)}else{const{onUpdateChecked:d,"onUpdate:checked":r}=o,{nTriggerFormInput:e,nTriggerFormChange:s}=n;d&&D(d,!0),r&&D(r,!0),e(),s(),g.value=!0}}function R(){l.value||y.value||z()}function B(){R(),h.value&&(h.value.checked=y.value)}function V(){v.value=!1}function $(){v.value=!0}return{mergedClsPrefix:t?t.mergedClsPrefixRef:te(o).mergedClsPrefixRef,inputRef:h,labelRef:b,mergedName:S,mergedDisabled:l,renderSafeChecked:y,focus:v,mergedSize:c,handleRadioInputChange:B,handleRadioInputBlur:V,handleRadioInputFocus:$}}const De=oe({name:"RadioButton",props:Me,setup:Ue,render(){const{mergedClsPrefix:o}=this;return T("label",{class:[`${o}-radio-button`,this.mergedDisabled&&`${o}-radio-button--disabled`,this.renderSafeChecked&&`${o}-radio-button--checked`,this.focus&&[`${o}-radio-button--focus`]]},T("input",{ref:"inputRef",type:"radio",class:`${o}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),T("div",{class:`${o}-radio-button__state-border`}),_e(this.$slots.default,t=>!t&&!this.label?null:T("div",{ref:"labelRef",class:`${o}-radio__label`},t||this.label)))}}),Ee=O("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[F("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[I("checked",{backgroundColor:"var(--n-button-border-color-active)"}),I("disabled",{opacity:"var(--n-opacity-disabled)"})]),I("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[O("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),F("splitor",{height:"var(--n-height)"})]),O("radio-button",`
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
 `,[O("radio-input",`
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
 `),F("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),j("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),j("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),J("disabled",`
 cursor: pointer;
 `,[j("&:hover",[F("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),J("checked",{color:"var(--n-button-text-color-hover)"})]),I("focus",[j("&:not(:active)",[F("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),I("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function He(o,t,n){var c;const l=[];let h=!1;for(let b=0;b<o.length;++b){const g=o[b],u=(c=g.type)===null||c===void 0?void 0:c.name;u==="RadioButton"&&(h=!0);const w=g.props;if(u!=="RadioButton"){l.push(g);continue}if(b===0)l.push(g);else{const y=l[l.length-1].props,S=t===y.value,v=y.disabled,z=t===w.value,R=w.disabled,B=(S?2:0)+(v?0:1),V=(z?2:0)+(R?0:1),$={[`${n}-radio-group__splitor--disabled`]:v,[`${n}-radio-group__splitor--checked`]:S},d={[`${n}-radio-group__splitor--disabled`]:R,[`${n}-radio-group__splitor--checked`]:z},r=B<V?d:$;l.push(T("div",{class:[`${n}-radio-group__splitor`,r]}),g)}}return{children:l,isButtonGroup:h}}const Ne=Object.assign(Object.assign({},ne.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Pe=oe({name:"RadioGroup",props:Ne,setup(o){const t=x(null),{mergedSizeRef:n,mergedDisabledRef:c,nTriggerFormChange:l,nTriggerFormInput:h,nTriggerFormBlur:b,nTriggerFormFocus:g}=re(o),{mergedClsPrefixRef:u,inlineThemeDisabled:w,mergedRtlRef:y}=te(o),S=ne("Radio","-radio-group",Ee,Te,o,u),v=x(o.defaultValue),z=L(o,"value"),R=ee(z,v);function B(s){const{onUpdateValue:p,"onUpdate:value":m}=o;p&&D(p,s),m&&D(m,s),v.value=s,l(),h()}function V(s){const{value:p}=t;p&&(p.contains(s.relatedTarget)||g())}function $(s){const{value:p}=t;p&&(p.contains(s.relatedTarget)||b())}we(ae,{mergedClsPrefixRef:u,nameRef:L(o,"name"),valueRef:R,disabledRef:c,mergedSizeRef:n,doUpdateValue:B});const d=ye("Radio",y,u),r=Q(()=>{const{value:s}=n,{common:{cubicBezierEaseInOut:p},self:{buttonBorderColor:m,buttonBorderColorActive:A,buttonBorderRadius:M,buttonBoxShadow:E,buttonBoxShadowFocus:H,buttonBoxShadowHover:N,buttonColor:P,buttonColorActive:a,buttonTextColor:ie,buttonTextColorActive:se,buttonTextColorHover:le,opacityDisabled:de,[X("buttonHeight",s)]:ue,[X("fontSize",s)]:ce}}=S.value;return{"--n-font-size":ce,"--n-bezier":p,"--n-button-border-color":m,"--n-button-border-color-active":A,"--n-button-border-radius":M,"--n-button-box-shadow":E,"--n-button-box-shadow-focus":H,"--n-button-box-shadow-hover":N,"--n-button-color":P,"--n-button-color-active":a,"--n-button-text-color":ie,"--n-button-text-color-hover":le,"--n-button-text-color-active":se,"--n-height":ue,"--n-opacity-disabled":de}}),e=w?Ce("radio-group",Q(()=>n.value[0]),r,o):void 0;return{selfElRef:t,rtlEnabled:d,mergedClsPrefix:u,mergedValue:R,handleFocusout:$,handleFocusin:V,cssVars:w?void 0:r,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var o;const{mergedValue:t,mergedClsPrefix:n,handleFocusin:c,handleFocusout:l}=this,{children:h,isButtonGroup:b}=He(xe(Ve(this)),t,n);return(o=this.onRender)===null||o===void 0||o.call(this),T("div",{onFocusin:c,onFocusout:l,ref:"selfElRef",class:[`${n}-radio-group`,this.rtlEnabled&&`${n}-radio-group--rtl`,this.themeClass,b&&`${n}-radio-group--button-group`],style:this.cssVars},h)}}),Oe={id:"content-main"},je={class:"wrap"},Ge={class:"card"},We={class:"vright"},Le={class:"card"},Ke={class:"vright"},qe={class:"card"},Je={class:"vright"},Qe={class:"card"},Xe={class:"vright"},Ye={class:"card"},Ze={class:"vright"},et={class:"card"},tt={class:"vright"},ot={style:{"padding-right":"20px"}},nt={__name:"SetView",setup(o){const t=ze(),n=x({}),c=x(!1),l=x(!1),h=x("system"),b=x("left"),g=x(!0),u=x({width:800,height:600}),w=x({version:"加载中...",electron:"--",chrome:"--"}),y=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],S=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],v=(r,e)=>{let s=e.value.find(p=>p.name===r);return typeof s.value=="number"?s.value!==0:typeof s.value=="string"&&s.value==="0"?!1:s.value};Re(async()=>{w.value=await window.myApi.getVersion(),n.value=await window.myApi.getSettings(),c.value=v("isWindowEdgeAdsorption",n),l.value=v("isMemoryOptimizationEnabled",n),b.value=v("leftMenuPosition",n),h.value=v("systemTheme",n),g.value=v("isMenuVisible",n),u.value=v("defaultWindowSize",n)});const z=async r=>{const e={name:"isWindowEdgeAdsorption",value:r?1:0};window.myApi.updateSetting(e),t.success("设置已更新,请重新启动")},R=async r=>{const e={name:"isMemoryOptimizationEnabled",value:r?1:0};window.myApi.updateSetting(e),t.success("设置已更新,请重新启动")},B=r=>{window.myApi.updateSetting({name:"isMenuVisible",value:r?1:0}),t.success("设置已更新,请重新启动")},V=r=>{window.myApi.updateSetting({name:"systemTheme",value:r.target.value}),t.success("设置已更新,请重新启动")},$=r=>{window.myApi.updateSetting({name:"leftMenuPosition",value:r.target.value}),t.success("设置已更新,请重新启动")},d=r=>{const{value:e,placeholder:s}=r.target,p=s==="width"?"width":"height",m=Number(e);let A={};if(isNaN(m)||m<=0){t.error("请输入有效的正数");return}if(p==="width"){if(m>3e3){t.error("宽度不能超过3000px");return}if(m<300){t.error("宽度不能小于300px");return}A={width:m,height:Number(u.value.height)}}if(p==="height"){if(m>2e3){t.error("高度不能超过2000px");return}if(m<300){t.error("高度不能小于300px");return}A={width:Number(u.value.width),height:m}}window.myApi.updateSetting({name:"defaultWindowSize",value:A}),t.success("设置已更新,请重新启动")};return(r,e)=>{const s=Ae,p=ve,m=ke,A=Fe,M=Be,E=De,H=Pe,N=pe,P=$e;return W(),G("div",Oe,[f(p,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:_(()=>[f(s,{style:{"margin-bottom":"0"}},{default:_(()=>e[7]||(e[7]=[C("通用设置")])),_:1})]),_:1}),f(p,{"show-icon":!1},{default:_(()=>e[8]||(e[8]=[C(" 1.设置改变后，重启程序才能生效。"),i("br",null,null,-1)])),_:1}),f(N,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:_(()=>[i("div",je,[i("div",Ge,[e[10]||(e[10]=i("div",{class:"vleft"},"启动窗口：",-1)),i("div",We,[f(A,{onChange:d},{default:_(()=>[f(m,{size:"small",value:k(u).width,"onUpdate:value":e[0]||(e[0]=a=>k(u).width=a),style:{width:"20%"},placeholder:"width"},null,8,["value"]),e[9]||(e[9]=C(" x ")),f(m,{size:"small",value:k(u).height,"onUpdate:value":e[1]||(e[1]=a=>k(u).height=a),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),i("div",Le,[e[13]||(e[13]=i("div",{class:"vleft"},"边缘吸附：",-1)),i("div",Ke,[f(M,{size:"medium",value:k(c),"onUpdate:value":[e[2]||(e[2]=a=>U(c)?c.value=a:null),z],style:{"font-size":"12px"}},{checked:_(()=>e[11]||(e[11]=[C("开启")])),unchecked:_(()=>e[12]||(e[12]=[C("关闭")])),_:1},8,["value"])])]),i("div",qe,[e[16]||(e[16]=i("div",{class:"vleft"},"内存优化：",-1)),i("div",Je,[f(M,{size:"medium",value:k(l),"onUpdate:value":[e[3]||(e[3]=a=>U(l)?l.value=a:null),R],style:{"font-size":"12px"}},{checked:_(()=>e[14]||(e[14]=[C("开启")])),unchecked:_(()=>e[15]||(e[15]=[C("关闭")])),_:1},8,["value"])])]),i("div",Qe,[e[19]||(e[19]=i("div",{class:"vleft"},"显示边栏：",-1)),i("div",Xe,[f(M,{size:"medium",value:k(g),"onUpdate:value":[e[4]||(e[4]=a=>U(g)?g.value=a:null),B],style:{"font-size":"12px"}},{checked:_(()=>e[17]||(e[17]=[C("显示")])),unchecked:_(()=>e[18]||(e[18]=[C("隐藏")])),_:1},8,["value"])])]),i("div",Ye,[e[20]||(e[20]=i("div",{class:"vleft"},"边栏位置：",-1)),i("div",Ze,[f(H,{size:"small",onChange:$,value:k(b),"onUpdate:value":e[5]||(e[5]=a=>U(b)?b.value=a:null),name:"menuPoss",style:{"font-size":"12px"}},{default:_(()=>[(W(),G(Y,null,Z(S,a=>f(E,{key:a.value,value:a.value,label:a.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),i("div",et,[e[21]||(e[21]=i("div",{class:"vleft"},"系统主题：",-1)),i("div",tt,[f(H,{size:"small",onChange:V,value:k(h),"onUpdate:value":e[6]||(e[6]=a=>U(h)?h.value=a:null),name:"themegroup1",style:{"font-size":"12px"}},{default:_(()=>[(W(),G(Y,null,Z(y,a=>f(E,{key:a.value,value:a.value,label:a.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),f(N,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:_(()=>[i("span",ot,[e[22]||(e[22]=C(" 当前版本: ")),f(P,{bordered:!1,type:"info",size:"medium"},{default:_(()=>[C(Se(k(w).version),1)]),_:1})]),i("span",null,[e[24]||(e[24]=C(" 获取新版：")),f(P,{bordered:!1,type:"info",size:"medium"},{default:_(()=>e[23]||(e[23]=[i("a",{target:"_blank",href:"https://github.com/deepshit2025/tuboshu/releases"},"点击下载",-1)])),_:1})])]),_:1})])}}},bt=be(nt,[["__scopeId","data-v-b36586a7"]]);export{bt as default};
