import{q as k,af as E,ay as ce,bQ as ue,aM as he,cZ as be,d8 as fe,bO as ge,cq as ve,bR as P,bV as i,bU as I,cf as h,cg as U,cL as A,M as me,cN as H,a5 as a,bX as x,cO as pe,ci as we,bZ as xe,b_ as q,aS as N,bd as ye,cA as ke,b$ as y,c7 as K,c6 as b,c0 as Se,cF as L}from"./index-TwEfT9gk.js";const D=ue("n-form-item");function Ce(e,{defaultSize:s="medium",mergedSize:d,mergedDisabled:r}={}){const t=E(D,null);he(D,null);const p=k(d?()=>d(t):()=>{const{size:l}=e;if(l)return l;if(t){const{mergedSize:c}=t;if(c.value!==void 0)return c.value}return s}),u=k(r?()=>r(t):()=>{const{disabled:l}=e;return l!==void 0?l:t?t.disabled.value:!1}),w=k(()=>{const{status:l}=e;return l||(t==null?void 0:t.mergedValidationStatus.value)});return ce(()=>{t&&t.restoreValidation()}),{mergedSizeRef:p,mergedDisabledRef:u,mergedStatusRef:w,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}function ze(){const e=E(fe,null);return e===null&&be("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const Re={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function Be(e){const{primaryColor:s,opacityDisabled:d,borderRadius:r,textColor3:t}=e;return Object.assign(Object.assign({},Re),{iconColor:t,textColor:"white",loadingColor:s,opacityDisabled:d,railColor:"rgba(0, 0, 0, .14)",railColorActive:s,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${ve(s,{alpha:.2})}`})}const $e={common:ge,self:Be},_e=P("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[i("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),i("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),i("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),P("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[A({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),i("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),i("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),I("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),h("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),U("disabled",[U("icon",[h("rubber-band",[h("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[I("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),h("active",[h("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[I("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),h("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[i("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[A()]),i("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),h("active",[i("rail","background-color: var(--n-rail-color-active);")]),h("loading",[i("rail",`
 cursor: wait;
 `)]),h("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),Fe=Object.assign(Object.assign({},q.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let $;const We=me({name:"Switch",props:Fe,slots:Object,setup(e){$===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?$=CSS.supports("width","max(1px)"):$=!1:$=!0);const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=xe(e),r=q("Switch","-switch",_e,$e,e,s),t=Ce(e),{mergedSizeRef:p,mergedDisabledRef:u}=t,w=N(e.defaultValue),l=ye(e,"value"),c=ke(l,w),R=k(()=>c.value===e.checkedValue),S=N(!1),o=N(!1),f=k(()=>{const{railStyle:n}=e;if(n)return n({focused:o.value,checked:R.value})});function g(n){const{"onUpdate:value":_,onChange:F,onUpdateValue:V}=e,{nTriggerFormInput:z,nTriggerFormChange:W}=t;_&&L(_,n),V&&L(V,n),F&&L(F,n),w.value=n,z(),W()}function X(){const{nTriggerFormFocus:n}=t;n()}function Q(){const{nTriggerFormBlur:n}=t;n()}function Y(){e.loading||u.value||(c.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue))}function Z(){o.value=!0,X()}function G(){o.value=!1,Q(),S.value=!1}function J(n){e.loading||u.value||n.key===" "&&(c.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue),S.value=!1)}function ee(n){e.loading||u.value||n.key===" "&&(n.preventDefault(),S.value=!0)}const O=k(()=>{const{value:n}=p,{self:{opacityDisabled:_,railColor:F,railColorActive:V,buttonBoxShadow:z,buttonColor:W,boxShadowFocus:te,loadingColor:ie,textColor:ne,iconColor:oe,[y("buttonHeight",n)]:v,[y("buttonWidth",n)]:ae,[y("buttonWidthPressed",n)]:re,[y("railHeight",n)]:m,[y("railWidth",n)]:B,[y("railBorderRadius",n)]:le,[y("buttonBorderRadius",n)]:se},common:{cubicBezierEaseInOut:de}}=r.value;let M,T,j;return $?(M=`calc((${m} - ${v}) / 2)`,T=`max(${m}, ${v})`,j=`max(${B}, calc(${B} + ${v} - ${m}))`):(M=K((b(m)-b(v))/2),T=K(Math.max(b(m),b(v))),j=b(m)>b(v)?B:K(b(B)+b(v)-b(m))),{"--n-bezier":de,"--n-button-border-radius":se,"--n-button-box-shadow":z,"--n-button-color":W,"--n-button-width":ae,"--n-button-width-pressed":re,"--n-button-height":v,"--n-height":T,"--n-offset":M,"--n-opacity-disabled":_,"--n-rail-border-radius":le,"--n-rail-color":F,"--n-rail-color-active":V,"--n-rail-height":m,"--n-rail-width":B,"--n-width":j,"--n-box-shadow-focus":te,"--n-loading-color":ie,"--n-text-color":ne,"--n-icon-color":oe}}),C=d?Se("switch",k(()=>p.value[0]),O,e):void 0;return{handleClick:Y,handleBlur:G,handleFocus:Z,handleKeyup:J,handleKeydown:ee,mergedRailStyle:f,pressed:S,mergedClsPrefix:s,mergedValue:c,checked:R,mergedDisabled:u,cssVars:d?void 0:O,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:s,checked:d,mergedRailStyle:r,onRender:t,$slots:p}=this;t==null||t();const{checked:u,unchecked:w,icon:l,"checked-icon":c,"unchecked-icon":R}=p,S=!(H(l)&&H(c)&&H(R));return a("div",{role:"switch","aria-checked":d,class:[`${e}-switch`,this.themeClass,S&&`${e}-switch--icon`,d&&`${e}-switch--active`,s&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},a("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},x(u,o=>x(w,f=>o||f?a("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),o),a("div",{class:`${e}-switch__rail-placeholder`},a("div",{class:`${e}-switch__button-placeholder`}),f)):null)),a("div",{class:`${e}-switch__button`},x(l,o=>x(c,f=>x(R,g=>a(pe,null,{default:()=>this.loading?a(we,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(f||o)?a("div",{class:`${e}-switch__button-icon`,key:f?"checked-icon":"icon"},f||o):!this.checked&&(g||o)?a("div",{class:`${e}-switch__button-icon`,key:g?"unchecked-icon":"icon"},g||o):null})))),x(u,o=>o&&a("div",{key:"checked",class:`${e}-switch__checked`},o)),x(w,o=>o&&a("div",{key:"unchecked",class:`${e}-switch__unchecked`},o)))))}});export{We as _,ze as a,Ce as u};
