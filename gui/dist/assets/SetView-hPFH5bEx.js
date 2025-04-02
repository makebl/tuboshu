import{co as he,cp as ve,E as J,i as pe,r as m,s as ge,t as Y,Y as ne,q as Q,x as ae,B as N,c as W,k as F,j as U,e as G,l as X,d as se,p as re,K as fe,y as me,v as Z,z as _e,cq as xe,h as H,D as ee,A as we,a3 as ye,o as Ce,a4 as K,a5 as q,a6 as c,aa as b,ab as w,a8 as r,a7 as k,ak as E,al as te,am as oe,a9 as Se,af as Re,ag as ze}from"./index-2RN--K6t.js";import{_ as ke}from"./Card-Br7XyStR.js";import{u as ie,a as Be,b as Ve,_ as $e}from"./Switch-DUoovIYN.js";import{g as Ae}from"./get-slot-Bk_rJcZu.js";import{_ as Te}from"./Tag-CZumf-EW.js";import{_ as Ie}from"./Alert-Bb01Fsao.js";import{N as De}from"./headers-CyxxIj5r.js";import{_ as Fe}from"./InputGroup-odiZgEuz.js";const Me=e=>{const{borderColor:n,primaryColor:t,baseColor:u,textColorDisabled:l,inputColorDisabled:f,textColor2:a,opacityDisabled:h,borderRadius:p,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:B,heightSmall:C,heightMedium:g,heightLarge:z,lineHeight:V}=e;return Object.assign(Object.assign({},ve),{labelLineHeight:V,buttonHeightSmall:C,buttonHeightMedium:g,buttonHeightLarge:z,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:B,boxShadow:`inset 0 0 0 1px ${n}`,boxShadowActive:`inset 0 0 0 1px ${t}`,boxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${J(t,{alpha:.2})}`,boxShadowHover:`inset 0 0 0 1px ${t}`,boxShadowDisabled:`inset 0 0 0 1px ${n}`,color:u,colorDisabled:f,colorActive:"#0000",textColor:a,textColorDisabled:l,dotColorActive:t,dotColorDisabled:n,buttonBorderColor:n,buttonBorderColorActive:t,buttonBorderColorHover:n,buttonColor:u,buttonColorActive:u,buttonTextColor:a,buttonTextColorActive:t,buttonTextColorHover:t,opacityDisabled:h,buttonBoxShadowFocus:`inset 0 0 0 1px ${t}, 0 0 0 2px ${J(t,{alpha:.3})}`,buttonBoxShadowHover:"inset 0 0 0 1px #0000",buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:p})},Ue={name:"Radio",common:he,self:Me},Ee=Ue,He={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},le=pe("n-radio-group");function Ne(e){const n=ie(e,{mergedSize(d){const{size:_}=e;if(_!==void 0)return _;if(a){const{mergedSizeRef:{value:S}}=a;if(S!==void 0)return S}return d?d.mergedSize.value:"medium"},mergedDisabled(d){return!!(e.disabled||a!=null&&a.disabledRef.value||d!=null&&d.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:u}=n,l=m(null),f=m(null),a=ge(le,null),h=m(e.defaultChecked),p=Y(e,"checked"),v=ne(p,h),y=Q(()=>a?a.valueRef.value===e.value:v.value),B=Q(()=>{const{name:d}=e;if(d!==void 0)return d;if(a)return a.nameRef.value}),C=m(!1);function g(){if(a){const{doUpdateValue:d}=a,{value:_}=e;N(d,_)}else{const{onUpdateChecked:d,"onUpdate:checked":_}=e,{nTriggerFormInput:S,nTriggerFormChange:s}=n;d&&N(d,!0),_&&N(_,!0),S(),s(),h.value=!0}}function z(){u.value||y.value||g()}function V(){z(),l.value&&(l.value.checked=y.value)}function T(){C.value=!1}function I(){C.value=!0}return{mergedClsPrefix:a?a.mergedClsPrefixRef:ae(e).mergedClsPrefixRef,inputRef:l,labelRef:f,mergedName:B,mergedDisabled:u,renderSafeChecked:y,focus:C,mergedSize:t,handleRadioInputChange:V,handleRadioInputBlur:T,handleRadioInputFocus:I}}const Pe=W("radio-group",`
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
 `,[U("checked",{backgroundColor:"var(--n-button-border-color-active)"}),U("disabled",{opacity:"var(--n-opacity-disabled)"})]),U("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[W("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),F("splitor",{height:"var(--n-height)"})]),W("radio-button",`
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
 `,[W("radio-input",`
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
 `),G("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),G("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[F("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),X("disabled",`
 cursor: pointer;
 `,[G("&:hover",[F("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),X("checked",{color:"var(--n-button-text-color-hover)"})]),U("focus",[G("&:not(:active)",[F("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),U("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),U("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function Oe(e,n,t){var u;const l=[];let f=!1;for(let a=0;a<e.length;++a){const h=e[a],p=(u=h.type)===null||u===void 0?void 0:u.name;p==="RadioButton"&&(f=!0);const v=h.props;if(p!=="RadioButton"){l.push(h);continue}if(a===0)l.push(h);else{const y=l[l.length-1].props,B=n===y.value,C=y.disabled,g=n===v.value,z=v.disabled,V=(B?2:0)+(C?0:1),T=(g?2:0)+(z?0:1),I={[`${t}-radio-group__splitor--disabled`]:C,[`${t}-radio-group__splitor--checked`]:B},d={[`${t}-radio-group__splitor--disabled`]:z,[`${t}-radio-group__splitor--checked`]:g},_=V<T?d:I;l.push(H("div",{class:[`${t}-radio-group__splitor`,_]}),h)}}return{children:l,isButtonGroup:f}}const je=Object.assign(Object.assign({},re.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Le=se({name:"RadioGroup",props:je,setup(e){const n=m(null),{mergedSizeRef:t,mergedDisabledRef:u,nTriggerFormChange:l,nTriggerFormInput:f,nTriggerFormBlur:a,nTriggerFormFocus:h}=ie(e),{mergedClsPrefixRef:p,inlineThemeDisabled:v,mergedRtlRef:y}=ae(e),B=re("Radio","-radio-group",Pe,Ee,e,p),C=m(e.defaultValue),g=Y(e,"value"),z=ne(g,C);function V(s){const{onUpdateValue:o,"onUpdate:value":x}=e;o&&N(o,s),x&&N(x,s),C.value=s,l(),f()}function T(s){const{value:o}=n;o&&(o.contains(s.relatedTarget)||h())}function I(s){const{value:o}=n;o&&(o.contains(s.relatedTarget)||a())}fe(le,{mergedClsPrefixRef:p,nameRef:Y(e,"name"),valueRef:z,disabledRef:u,mergedSizeRef:t,doUpdateValue:V});const d=me("Radio",y,p),_=Z(()=>{const{value:s}=t,{common:{cubicBezierEaseInOut:o},self:{buttonBorderColor:x,buttonBorderColorActive:$,buttonBorderRadius:R,buttonBoxShadow:D,buttonBoxShadowFocus:M,buttonBoxShadowHover:P,buttonColor:O,buttonColorActive:j,buttonTextColor:L,buttonTextColorActive:i,buttonTextColorHover:de,opacityDisabled:ue,[ee("buttonHeight",s)]:ce,[ee("fontSize",s)]:be}}=B.value;return{"--n-font-size":be,"--n-bezier":o,"--n-button-border-color":x,"--n-button-border-color-active":$,"--n-button-border-radius":R,"--n-button-box-shadow":D,"--n-button-box-shadow-focus":M,"--n-button-box-shadow-hover":P,"--n-button-color":O,"--n-button-color-active":j,"--n-button-text-color":L,"--n-button-text-color-hover":de,"--n-button-text-color-active":i,"--n-height":ce,"--n-opacity-disabled":ue}}),S=v?_e("radio-group",Z(()=>t.value[0]),_,e):void 0;return{selfElRef:n,rtlEnabled:d,mergedClsPrefix:p,mergedValue:z,handleFocusout:I,handleFocusin:T,cssVars:v?void 0:_,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){var e;const{mergedValue:n,mergedClsPrefix:t,handleFocusin:u,handleFocusout:l}=this,{children:f,isButtonGroup:a}=Oe(xe(Ae(this)),n,t);return(e=this.onRender)===null||e===void 0||e.call(this),H("div",{onFocusin:u,onFocusout:l,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,a&&`${t}-radio-group--button-group`],style:this.cssVars},f)}}),We=se({name:"RadioButton",props:He,setup:Ne,render(){const{mergedClsPrefix:e}=this;return H("label",{class:[`${e}-radio-button`,this.mergedDisabled&&`${e}-radio-button--disabled`,this.renderSafeChecked&&`${e}-radio-button--checked`,this.focus&&[`${e}-radio-button--focus`]]},H("input",{ref:"inputRef",type:"radio",class:`${e}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur}),H("div",{class:`${e}-radio-button__state-border`}),we(this.$slots.default,n=>!n&&!this.label?null:H("div",{ref:"labelRef",class:`${e}-radio__label`},n||this.label)))}}),A=e=>(Re("data-v-b003af27"),e=e(),ze(),e),Ge={id:"content-main"},Ke=A(()=>r("br",null,null,-1)),qe={class:"wrap"},Ye={class:"card"},Je=A(()=>r("div",{class:"vleft"},"启动窗口：",-1)),Qe={class:"vright"},Xe={class:"card"},Ze=A(()=>r("div",{class:"vleft"},"调试模式：",-1)),et={class:"vright"},tt={class:"card"},ot=A(()=>r("div",{class:"vleft"},"边缘吸附：",-1)),nt={class:"vright"},at={class:"card"},st=A(()=>r("div",{class:"vleft"},"内存优化：",-1)),rt={class:"vright"},it={class:"card"},lt=A(()=>r("div",{class:"vleft"},"显示边栏：",-1)),dt={class:"vright"},ut={class:"card"},ct=A(()=>r("div",{class:"vleft"},"边栏位置：",-1)),bt={class:"vright"},ht={class:"card"},vt=A(()=>r("div",{class:"vleft"},"系统主题：",-1)),pt={class:"vright"},gt={style:{"padding-right":"20px"}},ft=A(()=>r("a",{target:"_blank",href:"https://github.com/deepshit2025/tuboshu/releases"},"点击下载",-1)),mt={__name:"SetView",setup(e){const n=Be(),t=m({}),u=m(!1),l=m(!1),f=m("system"),a=m("left"),h=m(!0),p=m(!1),v=m({width:800,height:600}),y=m({version:"加载中...",electron:"--",chrome:"--"}),B=[{label:"跟随系统",value:"system"},{label:"普通模式",value:"light"},{label:"深度模式",value:"dark"}],C=[{label:"左侧",value:"left"},{label:"右侧",value:"right"}],g=(s,o)=>{let x=o.value.find($=>$.name===s);return typeof x.value=="number"?x.value!==0:typeof x.value=="string"&&x.value==="0"?!1:x.value};Ce(async()=>{y.value=await window.myApi.getVersion(),t.value=await window.myApi.getSettings(),u.value=g("isWindowEdgeAdsorption",t),l.value=g("isMemoryOptimizationEnabled",t),a.value=g("leftMenuPosition",t),f.value=g("systemTheme",t),h.value=g("isMenuVisible",t),p.value=g("isOpenDevTools",t),v.value=g("defaultWindowSize",t)});const z=async s=>{const o={name:"isWindowEdgeAdsorption",value:s?1:0};window.myApi.updateSetting(o),n.success("设置已更新,请重新启动")},V=async s=>{const o={name:"isMemoryOptimizationEnabled",value:s?1:0};window.myApi.updateSetting(o),n.success("设置已更新,请重新启动")},T=s=>{window.myApi.updateSetting({name:"isMenuVisible",value:s?1:0}),n.success("设置已更新,请重新启动")},I=s=>{window.myApi.updateSetting({name:"isOpenDevTools",value:s?1:0}),n.success("设置已更新,请重新启动")},d=s=>{window.myApi.updateSetting({name:"systemTheme",value:s.target.value}),n.success("设置已更新,请重新启动")},_=s=>{window.myApi.updateSetting({name:"leftMenuPosition",value:s.target.value}),n.success("设置已更新,请重新启动")},S=s=>{const{value:o,placeholder:x}=s.target,$=x==="width"?"width":"height",R=Number(o);let D={};if(isNaN(R)||R<=0){n.error("请输入有效的正数");return}if($==="width"){if(R>3e3){n.error("宽度不能超过3000px");return}if(R<300){n.error("宽度不能小于300px");return}D={width:R,height:Number(v.value.height)}}if($==="height"){if(R>2e3){n.error("高度不能超过2000px");return}if(R<300){n.error("高度不能小于300px");return}D={width:Number(v.value.width),height:R}}window.myApi.updateSetting({name:"defaultWindowSize",value:D}),n.success("设置已更新,请重新启动")};return(s,o)=>{const x=De,$=Ie,R=Ve,D=Fe,M=$e,P=We,O=Le,j=ke,L=Te;return K(),q("div",Ge,[c($,{"show-icon":!1,type:"info",style:{"margin-bottom":"1rem"}},{default:b(()=>[c(x,{style:{"margin-bottom":"0"}},{default:b(()=>[w("通用设置")]),_:1})]),_:1}),c($,{"show-icon":!1},{default:b(()=>[w(" 1.设置改变后，重启程序才能生效。"),Ke]),_:1}),c(j,{embedded:"",bordered:!0,style:{"margin-top":"1rem"}},{default:b(()=>[r("div",qe,[r("div",Ye,[Je,r("div",Qe,[c(D,{onChange:S},{default:b(()=>[c(R,{size:"small",value:k(v).width,"onUpdate:value":o[0]||(o[0]=i=>k(v).width=i),style:{width:"20%"},placeholder:"width"},null,8,["value"]),w(" x "),c(R,{size:"small",value:k(v).height,"onUpdate:value":o[1]||(o[1]=i=>k(v).height=i),style:{width:"20%"},placeholder:"height"},null,8,["value"])]),_:1})])]),r("div",Xe,[Ze,r("div",et,[c(M,{size:"medium",value:k(p),"onUpdate:value":[o[2]||(o[2]=i=>E(p)?p.value=i:null),I],style:{"font-size":"12px"}},{checked:b(()=>[w("开启")]),unchecked:b(()=>[w("关闭")]),_:1},8,["value"])])]),r("div",tt,[ot,r("div",nt,[c(M,{size:"medium",value:k(u),"onUpdate:value":[o[3]||(o[3]=i=>E(u)?u.value=i:null),z],style:{"font-size":"12px"}},{checked:b(()=>[w("开启")]),unchecked:b(()=>[w("关闭")]),_:1},8,["value"])])]),r("div",at,[st,r("div",rt,[c(M,{size:"medium",value:k(l),"onUpdate:value":[o[4]||(o[4]=i=>E(l)?l.value=i:null),V],style:{"font-size":"12px"}},{checked:b(()=>[w("开启")]),unchecked:b(()=>[w("关闭")]),_:1},8,["value"])])]),r("div",it,[lt,r("div",dt,[c(M,{size:"medium",value:k(h),"onUpdate:value":[o[5]||(o[5]=i=>E(h)?h.value=i:null),T],style:{"font-size":"12px"}},{checked:b(()=>[w("显示")]),unchecked:b(()=>[w("隐藏")]),_:1},8,["value"])])]),r("div",ut,[ct,r("div",bt,[c(O,{size:"small",onChange:_,value:k(a),"onUpdate:value":o[6]||(o[6]=i=>E(a)?a.value=i:null),name:"menuPoss",style:{"font-size":"12px"}},{default:b(()=>[(K(),q(te,null,oe(C,i=>c(P,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])]),r("div",ht,[vt,r("div",pt,[c(O,{size:"small",onChange:d,value:k(f),"onUpdate:value":o[7]||(o[7]=i=>E(f)?f.value=i:null),name:"themegroup1",style:{"font-size":"12px"}},{default:b(()=>[(K(),q(te,null,oe(B,i=>c(P,{key:i.value,value:i.value,label:i.label},null,8,["value","label"])),64))]),_:1},8,["value"])])])])]),_:1}),c(j,{embedded:"",bordered:!0,style:{"margin-top":"20px"}},{default:b(()=>[r("span",gt,[w(" 当前版本: "),c(L,{bordered:!1,type:"info",size:"medium"},{default:b(()=>[w(Se(k(y).version),1)]),_:1})]),r("span",null,[w(" 获取新版："),c(L,{bordered:!1,type:"info",size:"medium"},{default:b(()=>[ft]),_:1})])]),_:1})])}}},kt=ye(mt,[["__scopeId","data-v-b003af27"]]);export{kt as default};
