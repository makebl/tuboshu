import{q as z,af as Fe,ay as Ro,bQ as Ze,aM as Qe,d2 as To,M as j,a5 as n,cH as _o,bR as S,bU as M,bV as i,cJ as De,cM as Ge,bW as me,ca as Pe,cu as et,bd as ke,ci as tt,bO as ot,cq as Se,cf as k,cg as G,aS as P,bC as Ee,d3 as $o,bX as B,cj as Wo,F as Ao,bY as Bo,bZ as rt,b_ as Me,cA as nt,c2 as je,aC as Do,a0 as Eo,bD as Ue,ck as Vo,b$ as I,cm as Io,c0 as at,as as Ke,c_ as qe,cF as F,cZ as Ye,cX as Lo,d4 as Oo,cL as We,c7 as Ae,c6 as N}from"./index-DnbH1geE.js";import{i as Ie}from"./headers-B0OdgbUA.js";const it=new WeakSet;function qr(e){it.add(e)}function Yr(e){return!it.has(e)}const Xe=Ze("n-form-item");function lt(e,{defaultSize:a="medium",mergedSize:o,mergedDisabled:h}={}){const s=Fe(Xe,null);Qe(Xe,null);const v=z(o?()=>o(s):()=>{const{size:u}=e;if(u)return u;if(s){const{mergedSize:c}=s;if(c.value!==void 0)return c.value}return a}),l=z(h?()=>h(s):()=>{const{disabled:u}=e;return u!==void 0?u:s?s.disabled.value:!1}),d=z(()=>{const{status:u}=e;return u||(s==null?void 0:s.mergedValidationStatus.value)});return Ro(()=>{s&&s.restoreValidation()}),{mergedSizeRef:v,mergedDisabledRef:l,mergedStatusRef:d,nTriggerFormBlur(){s&&s.handleContentBlur()},nTriggerFormChange(){s&&s.handleContentChange()},nTriggerFormFocus(){s&&s.handleContentFocus()},nTriggerFormInput(){s&&s.handleContentInput()}}}const No={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",weekFormat:"YYYY-w",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",weekPlaceholder:"Select Week",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now",clear:"Clear"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipDownload:"Download",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};function Be(e){return(a={})=>{const o=a.width?String(a.width):e.defaultWidth;return e.formats[o]||e.formats[e.defaultWidth]}}function fe(e){return(a,o)=>{const h=o!=null&&o.context?String(o.context):"standalone";let s;if(h==="formatting"&&e.formattingValues){const l=e.defaultFormattingWidth||e.defaultWidth,d=o!=null&&o.width?String(o.width):l;s=e.formattingValues[d]||e.formattingValues[l]}else{const l=e.defaultWidth,d=o!=null&&o.width?String(o.width):e.defaultWidth;s=e.values[d]||e.values[l]}const v=e.argumentCallback?e.argumentCallback(a):a;return s[v]}}function ve(e){return(a,o={})=>{const h=o.width,s=h&&e.matchPatterns[h]||e.matchPatterns[e.defaultMatchWidth],v=a.match(s);if(!v)return null;const l=v[0],d=h&&e.parsePatterns[h]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(d)?jo(d,p=>p.test(l)):Ho(d,p=>p.test(l));let c;c=e.valueCallback?e.valueCallback(u):u,c=o.valueCallback?o.valueCallback(c):c;const g=a.slice(l.length);return{value:c,rest:g}}}function Ho(e,a){for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&a(e[o]))return o}function jo(e,a){for(let o=0;o<e.length;o++)if(a(e[o]))return o}function Uo(e){return(a,o={})=>{const h=a.match(e.matchPattern);if(!h)return null;const s=h[0],v=a.match(e.parsePattern);if(!v)return null;let l=e.valueCallback?e.valueCallback(v[0]):v[0];l=o.valueCallback?o.valueCallback(l):l;const d=a.slice(s.length);return{value:l,rest:d}}}const Ko={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},qo=(e,a,o)=>{let h;const s=Ko[e];return typeof s=="string"?h=s:a===1?h=s.one:h=s.other.replace("{{count}}",a.toString()),o!=null&&o.addSuffix?o.comparison&&o.comparison>0?"in "+h:h+" ago":h},Yo={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Xo=(e,a,o,h)=>Yo[e],Jo={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Zo={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Qo={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Go={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},er={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},or=(e,a)=>{const o=Number(e),h=o%100;if(h>20||h<10)switch(h%10){case 1:return o+"st";case 2:return o+"nd";case 3:return o+"rd"}return o+"th"},rr={ordinalNumber:or,era:fe({values:Jo,defaultWidth:"wide"}),quarter:fe({values:Zo,defaultWidth:"wide",argumentCallback:e=>e-1}),month:fe({values:Qo,defaultWidth:"wide"}),day:fe({values:Go,defaultWidth:"wide"}),dayPeriod:fe({values:er,defaultWidth:"wide",formattingValues:tr,defaultFormattingWidth:"wide"})},nr=/^(\d+)(th|st|nd|rd)?/i,ar=/\d+/i,ir={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},lr={any:[/^b/i,/^(a|c)/i]},sr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},cr={any:[/1/i,/2/i,/3/i,/4/i]},dr={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},ur={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},hr={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},fr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},gr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},mr={ordinalNumber:Uo({matchPattern:nr,parsePattern:ar,valueCallback:e=>parseInt(e,10)}),era:ve({matchPatterns:ir,defaultMatchWidth:"wide",parsePatterns:lr,defaultParseWidth:"any"}),quarter:ve({matchPatterns:sr,defaultMatchWidth:"wide",parsePatterns:cr,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ve({matchPatterns:dr,defaultMatchWidth:"wide",parsePatterns:ur,defaultParseWidth:"any"}),day:ve({matchPatterns:hr,defaultMatchWidth:"wide",parsePatterns:fr,defaultParseWidth:"any"}),dayPeriod:ve({matchPatterns:vr,defaultMatchWidth:"any",parsePatterns:gr,defaultParseWidth:"any"})},pr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},br={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yr={date:Be({formats:pr,defaultWidth:"full"}),time:Be({formats:br,defaultWidth:"full"}),dateTime:Be({formats:wr,defaultWidth:"full"})},xr={code:"en-US",formatDistance:qo,formatLong:yr,formatRelative:Xo,localize:rr,match:mr,options:{weekStartsOn:0,firstWeekContainsDate:1}},Cr={name:"en-US",locale:xr};function Sr(e){const{mergedLocaleRef:a,mergedDateLocaleRef:o}=Fe(To,null)||{},h=z(()=>{var v,l;return(l=(v=a==null?void 0:a.value)===null||v===void 0?void 0:v[e])!==null&&l!==void 0?l:No[e]});return{dateLocaleRef:z(()=>{var v;return(v=o==null?void 0:o.value)!==null&&v!==void 0?v:Cr}),localeRef:h}}const Pr=j({name:"ChevronDown",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),kr=_o("clear",()=>n("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},n("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},n("g",{fill:"currentColor","fill-rule":"nonzero"},n("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Fr=j({name:"Eye",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),n("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),Mr=j({name:"EyeOff",render(){return n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),n("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),n("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),n("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),n("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),zr=S("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[M(">",[i("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[M("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),M("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),i("placeholder",`
 display: flex;
 `),i("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[De({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ve=j({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return et("-base-clear",zr,ke(e,"clsPrefix")),{handleMouseDown(a){a.preventDefault()}}},render(){const{clsPrefix:e}=this;return n("div",{class:`${e}-base-clear`},n(Ge,null,{default:()=>{var a,o;return this.show?n("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},me(this.$slots.icon,()=>[n(Pe,{clsPrefix:e},{default:()=>n(kr,null)})])):n("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(a=this.$slots).placeholder)===null||o===void 0?void 0:o.call(a))}}))}}),Rr=j({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:a}){return()=>{const{clsPrefix:o}=e;return n(tt,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?n(Ve,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{placeholder:()=>n(Pe,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>me(a.default,()=>[n(Pr,null)])})}):null})}}}),Tr=Ie&&"chrome"in window;Ie&&navigator.userAgent.includes("Firefox");const _r=Ie&&navigator.userAgent.includes("Safari")&&!Tr,$r={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function Wr(e){const{textColor2:a,textColor3:o,textColorDisabled:h,primaryColor:s,primaryColorHover:v,inputColor:l,inputColorDisabled:d,borderColor:u,warningColor:c,warningColorHover:g,errorColor:p,errorColorHover:m,borderRadius:R,lineHeight:x,fontSizeTiny:ne,fontSizeSmall:H,fontSizeMedium:ae,fontSizeLarge:W,heightTiny:L,heightSmall:U,heightMedium:D,heightLarge:ee,actionColor:T,clearColor:b,clearColorHover:_,clearColorPressed:A,placeholderColor:E,placeholderColorDisabled:O,iconColor:K,iconColorDisabled:ie,iconColorHover:q,iconColorPressed:le,fontWeight:Y}=e;return Object.assign(Object.assign({},$r),{fontWeight:Y,countTextColorDisabled:h,countTextColor:o,heightTiny:L,heightSmall:U,heightMedium:D,heightLarge:ee,fontSizeTiny:ne,fontSizeSmall:H,fontSizeMedium:ae,fontSizeLarge:W,lineHeight:x,lineHeightTextarea:x,borderRadius:R,iconSize:"16px",groupLabelColor:T,groupLabelTextColor:a,textColor:a,textColorDisabled:h,textDecorationColor:a,caretColor:s,placeholderColor:E,placeholderColorDisabled:O,color:l,colorDisabled:d,colorFocus:l,groupLabelBorder:`1px solid ${u}`,border:`1px solid ${u}`,borderHover:`1px solid ${v}`,borderDisabled:`1px solid ${u}`,borderFocus:`1px solid ${v}`,boxShadowFocus:`0 0 0 2px ${Se(s,{alpha:.2})}`,loadingColor:s,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${g}`,colorFocusWarning:l,borderFocusWarning:`1px solid ${g}`,boxShadowFocusWarning:`0 0 0 2px ${Se(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:p,borderError:`1px solid ${p}`,borderHoverError:`1px solid ${m}`,colorFocusError:l,borderFocusError:`1px solid ${m}`,boxShadowFocusError:`0 0 0 2px ${Se(p,{alpha:.2})}`,caretColorError:p,clearColor:b,clearColorHover:_,clearColorPressed:A,iconColor:K,iconColorDisabled:ie,iconColorHover:q,iconColorPressed:le,suffixTextColor:a})}const Ar={common:ot,self:Wr},st=Ze("n-input"),Br=S("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[i("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),i("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),i("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),M("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),M("&:-webkit-autofill ~",[i("placeholder","display: none;")])]),k("round",[G("textarea","border-radius: calc(var(--n-height) / 2);")]),i("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[M("span",`
 width: 100%;
 display: inline-block;
 `)]),k("textarea",[i("placeholder","overflow: visible;")]),G("autosize","width: 100%;"),k("autosize",[i("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),S("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),i("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),i("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[M("&[type=password]::-ms-reveal","display: none;"),M("+",[i("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),G("textarea",[i("placeholder","white-space: nowrap;")]),i("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),k("textarea","width: 100%;",[S("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),k("resizable",[S("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),i("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),i("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),k("pair",[i("input-el, placeholder","text-align: center;"),i("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[S("icon",`
 color: var(--n-icon-color);
 `),S("base-icon",`
 color: var(--n-icon-color);
 `)])]),k("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[i("border","border: var(--n-border-disabled);"),i("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),i("placeholder","color: var(--n-placeholder-color-disabled);"),i("separator","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),S("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),i("suffix, prefix","color: var(--n-text-color-disabled);",[S("icon",`
 color: var(--n-icon-color-disabled);
 `),S("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),G("disabled",[i("eye",`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[M("&:hover",`
 color: var(--n-icon-color-hover);
 `),M("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),M("&:hover",[i("state-border","border: var(--n-border-hover);")]),k("focus","background-color: var(--n-color-focus);",[i("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),i("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),i("state-border",`
 border-color: #0000;
 z-index: 1;
 `),i("prefix","margin-right: 4px;"),i("suffix",`
 margin-left: 4px;
 `),i("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[S("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),S("base-clear",`
 font-size: var(--n-icon-size);
 `,[i("placeholder",[S("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),M(">",[S("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),S("base-icon",`
 font-size: var(--n-icon-size);
 `)]),S("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>k(`${e}-status`,[G("disabled",[S("base-loading",`
 color: var(--n-loading-color-${e})
 `),i("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),i("state-border",`
 border: var(--n-border-${e});
 `),M("&:hover",[i("state-border",`
 border: var(--n-border-hover-${e});
 `)]),M("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),k("focus",`
 background-color: var(--n-color-focus-${e});
 `,[i("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Dr=S("input",[k("disabled",[i("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Er(e){let a=0;for(const o of e)a++;return a}function Ce(e){return e===""||e==null}function Vr(e){const a=P(null);function o(){const{value:v}=e;if(!(v!=null&&v.focus)){s();return}const{selectionStart:l,selectionEnd:d,value:u}=v;if(l==null||d==null){s();return}a.value={start:l,end:d,beforeText:u.slice(0,l),afterText:u.slice(d)}}function h(){var v;const{value:l}=a,{value:d}=e;if(!l||!d)return;const{value:u}=d,{start:c,beforeText:g,afterText:p}=l;let m=u.length;if(u.endsWith(p))m=u.length-p.length;else if(u.startsWith(g))m=g.length;else{const R=g[c-1],x=u.indexOf(R,c-1);x!==-1&&(m=x+1)}(v=d.setSelectionRange)===null||v===void 0||v.call(d,m,m)}function s(){a.value=null}return Ee(e,s),{recordCursor:o,restoreCursor:h}}const Je=j({name:"InputWordCount",setup(e,{slots:a}){const{mergedValueRef:o,maxlengthRef:h,mergedClsPrefixRef:s,countGraphemesRef:v}=Fe(st),l=z(()=>{const{value:d}=o;return d===null||Array.isArray(d)?0:(v.value||Er)(d)});return()=>{const{value:d}=h,{value:u}=o;return n("span",{class:`${s.value}-input-word-count`},$o(a.default,{value:u===null||Array.isArray(u)?"":u},()=>[d===void 0?l.value:`${l.value} / ${d}`]))}}}),Ir=Object.assign(Object.assign({},Me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),Xr=j({name:"Input",props:Ir,slots:Object,setup(e){const{mergedClsPrefixRef:a,mergedBorderedRef:o,inlineThemeDisabled:h,mergedRtlRef:s}=rt(e),v=Me("Input","-input",Br,Ar,e,a);_r&&et("-input-safari",Dr,a);const l=P(null),d=P(null),u=P(null),c=P(null),g=P(null),p=P(null),m=P(null),R=Vr(m),x=P(null),{localeRef:ne}=Sr("Input"),H=P(e.defaultValue),ae=ke(e,"value"),W=nt(ae,H),L=lt(e),{mergedSizeRef:U,mergedDisabledRef:D,mergedStatusRef:ee}=L,T=P(!1),b=P(!1),_=P(!1),A=P(!1);let E=null;const O=z(()=>{const{placeholder:t,pair:r}=e;return r?Array.isArray(t)?t:t===void 0?["",""]:[t,t]:t===void 0?[ne.value.placeholder]:[t]}),K=z(()=>{const{value:t}=_,{value:r}=W,{value:f}=O;return!t&&(Ce(r)||Array.isArray(r)&&Ce(r[0]))&&f[0]}),ie=z(()=>{const{value:t}=_,{value:r}=W,{value:f}=O;return!t&&f[1]&&(Ce(r)||Array.isArray(r)&&Ce(r[1]))}),q=je(()=>e.internalForceFocus||T.value),le=je(()=>{if(D.value||e.readonly||!e.clearable||!q.value&&!b.value)return!1;const{value:t}=W,{value:r}=q;return e.pair?!!(Array.isArray(t)&&(t[0]||t[1]))&&(b.value||r):!!t&&(b.value||r)}),Y=z(()=>{const{showPasswordOn:t}=e;if(t)return t;if(e.showPasswordToggle)return"click"}),$=P(!1),ze=z(()=>{const{textDecoration:t}=e;return t?Array.isArray(t)?t.map(r=>({textDecoration:r})):[{textDecoration:t}]:["",""]}),pe=P(void 0),V=()=>{var t,r;if(e.type==="textarea"){const{autosize:f}=e;if(f&&(pe.value=(r=(t=x.value)===null||t===void 0?void 0:t.$el)===null||r===void 0?void 0:r.offsetWidth),!d.value||typeof f=="boolean")return;const{paddingTop:y,paddingBottom:C,lineHeight:w}=window.getComputedStyle(d.value),J=Number(y.slice(0,-2)),Z=Number(C.slice(0,-2)),Q=Number(w.slice(0,-2)),{value:ue}=u;if(!ue)return;if(f.minRows){const he=Math.max(f.minRows,1),$e=`${J+Z+Q*he}px`;ue.style.minHeight=$e}if(f.maxRows){const he=`${J+Z+Q*f.maxRows}px`;ue.style.maxHeight=he}}},X=z(()=>{const{maxlength:t}=e;return t===void 0?void 0:Number(t)});Do(()=>{const{value:t}=W;Array.isArray(t)||_e(t)});const Re=Eo().proxy;function te(t,r){const{onUpdateValue:f,"onUpdate:value":y,onInput:C}=e,{nTriggerFormInput:w}=L;f&&F(f,t,r),y&&F(y,t,r),C&&F(C,t,r),H.value=t,w()}function oe(t,r){const{onChange:f}=e,{nTriggerFormChange:y}=L;f&&F(f,t,r),H.value=t,y()}function se(t){const{onBlur:r}=e,{nTriggerFormBlur:f}=L;r&&F(r,t),f()}function ce(t){const{onFocus:r}=e,{nTriggerFormFocus:f}=L;r&&F(r,t),f()}function de(t){const{onClear:r}=e;r&&F(r,t)}function ct(t){const{onInputBlur:r}=e;r&&F(r,t)}function dt(t){const{onInputFocus:r}=e;r&&F(r,t)}function ut(){const{onDeactivate:t}=e;t&&F(t)}function ht(){const{onActivate:t}=e;t&&F(t)}function ft(t){const{onClick:r}=e;r&&F(r,t)}function vt(t){const{onWrapperFocus:r}=e;r&&F(r,t)}function gt(t){const{onWrapperBlur:r}=e;r&&F(r,t)}function mt(){_.value=!0}function pt(t){_.value=!1,t.target===p.value?be(t,1):be(t,0)}function be(t,r=0,f="input"){const y=t.target.value;if(_e(y),t instanceof InputEvent&&!t.isComposing&&(_.value=!1),e.type==="textarea"){const{value:w}=x;w&&w.syncUnifiedContainer()}if(E=y,_.value)return;R.recordCursor();const C=bt(y);if(C)if(!e.pair)f==="input"?te(y,{source:r}):oe(y,{source:r});else{let{value:w}=W;Array.isArray(w)?w=[w[0],w[1]]:w=["",""],w[r]=y,f==="input"?te(w,{source:r}):oe(w,{source:r})}Re.$forceUpdate(),C||Ke(R.restoreCursor)}function bt(t){const{countGraphemes:r,maxlength:f,minlength:y}=e;if(r){let w;if(f!==void 0&&(w===void 0&&(w=r(t)),w>Number(f))||y!==void 0&&(w===void 0&&(w=r(t)),w<Number(f)))return!1}const{allowInput:C}=e;return typeof C=="function"?C(t):!0}function wt(t){ct(t),t.relatedTarget===l.value&&ut(),t.relatedTarget!==null&&(t.relatedTarget===g.value||t.relatedTarget===p.value||t.relatedTarget===d.value)||(A.value=!1),we(t,"blur"),m.value=null}function yt(t,r){dt(t),T.value=!0,A.value=!0,ht(),we(t,"focus"),r===0?m.value=g.value:r===1?m.value=p.value:r===2&&(m.value=d.value)}function xt(t){e.passivelyActivated&&(gt(t),we(t,"blur"))}function Ct(t){e.passivelyActivated&&(T.value=!0,vt(t),we(t,"focus"))}function we(t,r){t.relatedTarget!==null&&(t.relatedTarget===g.value||t.relatedTarget===p.value||t.relatedTarget===d.value||t.relatedTarget===l.value)||(r==="focus"?(ce(t),T.value=!0):r==="blur"&&(se(t),T.value=!1))}function St(t,r){be(t,r,"change")}function Pt(t){ft(t)}function kt(t){de(t),Le()}function Le(){e.pair?(te(["",""],{source:"clear"}),oe(["",""],{source:"clear"})):(te("",{source:"clear"}),oe("",{source:"clear"}))}function Ft(t){const{onMousedown:r}=e;r&&r(t);const{tagName:f}=t.target;if(f!=="INPUT"&&f!=="TEXTAREA"){if(e.resizable){const{value:y}=l;if(y){const{left:C,top:w,width:J,height:Z}=y.getBoundingClientRect(),Q=14;if(C+J-Q<t.clientX&&t.clientX<C+J&&w+Z-Q<t.clientY&&t.clientY<w+Z)return}}t.preventDefault(),T.value||Oe()}}function Mt(){var t;b.value=!0,e.type==="textarea"&&((t=x.value)===null||t===void 0||t.handleMouseEnterWrapper())}function zt(){var t;b.value=!1,e.type==="textarea"&&((t=x.value)===null||t===void 0||t.handleMouseLeaveWrapper())}function Rt(){D.value||Y.value==="click"&&($.value=!$.value)}function Tt(t){if(D.value)return;t.preventDefault();const r=y=>{y.preventDefault(),Ye("mouseup",document,r)};if(qe("mouseup",document,r),Y.value!=="mousedown")return;$.value=!0;const f=()=>{$.value=!1,Ye("mouseup",document,f)};qe("mouseup",document,f)}function _t(t){e.onKeyup&&F(e.onKeyup,t)}function $t(t){switch(e.onKeydown&&F(e.onKeydown,t),t.key){case"Escape":Te();break;case"Enter":Wt(t);break}}function Wt(t){var r,f;if(e.passivelyActivated){const{value:y}=A;if(y){e.internalDeactivateOnEnter&&Te();return}t.preventDefault(),e.type==="textarea"?(r=d.value)===null||r===void 0||r.focus():(f=g.value)===null||f===void 0||f.focus()}}function Te(){e.passivelyActivated&&(A.value=!1,Ke(()=>{var t;(t=l.value)===null||t===void 0||t.focus()}))}function Oe(){var t,r,f;D.value||(e.passivelyActivated?(t=l.value)===null||t===void 0||t.focus():((r=d.value)===null||r===void 0||r.focus(),(f=g.value)===null||f===void 0||f.focus()))}function At(){var t;!((t=l.value)===null||t===void 0)&&t.contains(document.activeElement)&&document.activeElement.blur()}function Bt(){var t,r;(t=d.value)===null||t===void 0||t.select(),(r=g.value)===null||r===void 0||r.select()}function Dt(){D.value||(d.value?d.value.focus():g.value&&g.value.focus())}function Et(){const{value:t}=l;t!=null&&t.contains(document.activeElement)&&t!==document.activeElement&&Te()}function Vt(t){if(e.type==="textarea"){const{value:r}=d;r==null||r.scrollTo(t)}else{const{value:r}=g;r==null||r.scrollTo(t)}}function _e(t){const{type:r,pair:f,autosize:y}=e;if(!f&&y)if(r==="textarea"){const{value:C}=u;C&&(C.textContent=`${t??""}\r
`)}else{const{value:C}=c;C&&(t?C.textContent=t:C.innerHTML="&nbsp;")}}function It(){V()}const Ne=P({top:"0"});function Lt(t){var r;const{scrollTop:f}=t.target;Ne.value.top=`${-f}px`,(r=x.value)===null||r===void 0||r.syncUnifiedContainer()}let ye=null;Ue(()=>{const{autosize:t,type:r}=e;t&&r==="textarea"?ye=Ee(W,f=>{!Array.isArray(f)&&f!==E&&_e(f)}):ye==null||ye()});let xe=null;Ue(()=>{e.type==="textarea"?xe=Ee(W,t=>{var r;!Array.isArray(t)&&t!==E&&((r=x.value)===null||r===void 0||r.syncUnifiedContainer())}):xe==null||xe()}),Qe(st,{mergedValueRef:W,maxlengthRef:X,mergedClsPrefixRef:a,countGraphemesRef:ke(e,"countGraphemes")});const Ot={wrapperElRef:l,inputElRef:g,textareaElRef:d,isCompositing:_,clear:Le,focus:Oe,blur:At,select:Bt,deactivate:Et,activate:Dt,scrollTo:Vt},Nt=Vo("Input",s,a),He=z(()=>{const{value:t}=U,{common:{cubicBezierEaseInOut:r},self:{color:f,borderRadius:y,textColor:C,caretColor:w,caretColorError:J,caretColorWarning:Z,textDecorationColor:Q,border:ue,borderDisabled:he,borderHover:$e,borderFocus:Ht,placeholderColor:jt,placeholderColorDisabled:Ut,lineHeightTextarea:Kt,colorDisabled:qt,colorFocus:Yt,textColorDisabled:Xt,boxShadowFocus:Jt,iconSize:Zt,colorFocusWarning:Qt,boxShadowFocusWarning:Gt,borderWarning:eo,borderFocusWarning:to,borderHoverWarning:oo,colorFocusError:ro,boxShadowFocusError:no,borderError:ao,borderFocusError:io,borderHoverError:lo,clearSize:so,clearColor:co,clearColorHover:uo,clearColorPressed:ho,iconColor:fo,iconColorDisabled:vo,suffixTextColor:go,countTextColor:mo,countTextColorDisabled:po,iconColorHover:bo,iconColorPressed:wo,loadingColor:yo,loadingColorError:xo,loadingColorWarning:Co,fontWeight:So,[I("padding",t)]:Po,[I("fontSize",t)]:ko,[I("height",t)]:Fo}}=v.value,{left:Mo,right:zo}=Io(Po);return{"--n-bezier":r,"--n-count-text-color":mo,"--n-count-text-color-disabled":po,"--n-color":f,"--n-font-size":ko,"--n-font-weight":So,"--n-border-radius":y,"--n-height":Fo,"--n-padding-left":Mo,"--n-padding-right":zo,"--n-text-color":C,"--n-caret-color":w,"--n-text-decoration-color":Q,"--n-border":ue,"--n-border-disabled":he,"--n-border-hover":$e,"--n-border-focus":Ht,"--n-placeholder-color":jt,"--n-placeholder-color-disabled":Ut,"--n-icon-size":Zt,"--n-line-height-textarea":Kt,"--n-color-disabled":qt,"--n-color-focus":Yt,"--n-text-color-disabled":Xt,"--n-box-shadow-focus":Jt,"--n-loading-color":yo,"--n-caret-color-warning":Z,"--n-color-focus-warning":Qt,"--n-box-shadow-focus-warning":Gt,"--n-border-warning":eo,"--n-border-focus-warning":to,"--n-border-hover-warning":oo,"--n-loading-color-warning":Co,"--n-caret-color-error":J,"--n-color-focus-error":ro,"--n-box-shadow-focus-error":no,"--n-border-error":ao,"--n-border-focus-error":io,"--n-border-hover-error":lo,"--n-loading-color-error":xo,"--n-clear-color":co,"--n-clear-size":so,"--n-clear-color-hover":uo,"--n-clear-color-pressed":ho,"--n-icon-color":fo,"--n-icon-color-hover":bo,"--n-icon-color-pressed":wo,"--n-icon-color-disabled":vo,"--n-suffix-text-color":go}}),re=h?at("input",z(()=>{const{value:t}=U;return t[0]}),He,e):void 0;return Object.assign(Object.assign({},Ot),{wrapperElRef:l,inputElRef:g,inputMirrorElRef:c,inputEl2Ref:p,textareaElRef:d,textareaMirrorElRef:u,textareaScrollbarInstRef:x,rtlEnabled:Nt,uncontrolledValue:H,mergedValue:W,passwordVisible:$,mergedPlaceholder:O,showPlaceholder1:K,showPlaceholder2:ie,mergedFocus:q,isComposing:_,activated:A,showClearButton:le,mergedSize:U,mergedDisabled:D,textDecorationStyle:ze,mergedClsPrefix:a,mergedBordered:o,mergedShowPasswordOn:Y,placeholderStyle:Ne,mergedStatus:ee,textAreaScrollContainerWidth:pe,handleTextAreaScroll:Lt,handleCompositionStart:mt,handleCompositionEnd:pt,handleInput:be,handleInputBlur:wt,handleInputFocus:yt,handleWrapperBlur:xt,handleWrapperFocus:Ct,handleMouseEnter:Mt,handleMouseLeave:zt,handleMouseDown:Ft,handleChange:St,handleClick:Pt,handleClear:kt,handlePasswordToggleClick:Rt,handlePasswordToggleMousedown:Tt,handleWrapperKeydown:$t,handleWrapperKeyup:_t,handleTextAreaMirrorResize:It,getTextareaScrollContainer:()=>d.value,mergedTheme:v,cssVars:h?void 0:He,themeClass:re==null?void 0:re.themeClass,onRender:re==null?void 0:re.onRender})},render(){var e,a;const{mergedClsPrefix:o,mergedStatus:h,themeClass:s,type:v,countGraphemes:l,onRender:d}=this,u=this.$slots;return d==null||d(),n("div",{ref:"wrapperElRef",class:[`${o}-input`,s,h&&`${o}-input--${h}-status`,{[`${o}-input--rtl`]:this.rtlEnabled,[`${o}-input--disabled`]:this.mergedDisabled,[`${o}-input--textarea`]:v==="textarea",[`${o}-input--resizable`]:this.resizable&&!this.autosize,[`${o}-input--autosize`]:this.autosize,[`${o}-input--round`]:this.round&&v!=="textarea",[`${o}-input--pair`]:this.pair,[`${o}-input--focus`]:this.mergedFocus,[`${o}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},n("div",{class:`${o}-input-wrapper`},B(u.prefix,c=>c&&n("div",{class:`${o}-input__prefix`},c)),v==="textarea"?n(Wo,{ref:"textareaScrollbarInstRef",class:`${o}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,g;const{textAreaScrollContainerWidth:p}=this,m={width:this.autosize&&p&&`${p}px`};return n(Ao,null,n("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${o}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(g=this.inputProps)===null||g===void 0?void 0:g.style,m],onBlur:this.handleInputBlur,onFocus:R=>{this.handleInputFocus(R,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`,style:[this.placeholderStyle,m],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?n(Bo,{onResize:this.handleTextAreaMirrorResize},{default:()=>n("div",{ref:"textareaMirrorElRef",class:`${o}-input__textarea-mirror`,key:"mirror"})}):null)}}):n("div",{class:`${o}-input__input`},n("input",Object.assign({type:v==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":v},this.inputProps,{ref:"inputElRef",class:[`${o}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(a=this.inputProps)===null||a===void 0?void 0:a.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,0)},onInput:c=>{this.handleInput(c,0)},onChange:c=>{this.handleChange(c,0)}})),this.showPlaceholder1?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[0])):null,this.autosize?n("div",{class:`${o}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&B(u.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?n("div",{class:`${o}-input__suffix`},[B(u["clear-icon-placeholder"],g=>(this.clearable||g)&&n(Ve,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>g,icon:()=>{var p,m;return(m=(p=this.$slots)["clear-icon"])===null||m===void 0?void 0:m.call(p)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?n(Rr,{clsPrefix:o,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?n(Je,null,{default:g=>{var p;const{renderCount:m}=this;return m?m(g):(p=u.count)===null||p===void 0?void 0:p.call(u,g)}}):null,this.mergedShowPasswordOn&&this.type==="password"?n("div",{class:`${o}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?me(u["password-visible-icon"],()=>[n(Pe,{clsPrefix:o},{default:()=>n(Fr,null)})]):me(u["password-invisible-icon"],()=>[n(Pe,{clsPrefix:o},{default:()=>n(Mr,null)})])):null]):null)),this.pair?n("span",{class:`${o}-input__separator`},me(u.separator,()=>[this.separator])):null,this.pair?n("div",{class:`${o}-input-wrapper`},n("div",{class:`${o}-input__input`},n("input",{ref:"inputEl2Ref",type:this.type,class:`${o}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:l?void 0:this.maxlength,minlength:l?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>{this.handleInputFocus(c,1)},onInput:c=>{this.handleInput(c,1)},onChange:c=>{this.handleChange(c,1)}}),this.showPlaceholder2?n("div",{class:`${o}-input__placeholder`},n("span",null,this.mergedPlaceholder[1])):null),B(u.suffix,c=>(this.clearable||c)&&n("div",{class:`${o}-input__suffix`},[this.clearable&&n(Ve,{clsPrefix:o,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var g;return(g=u["clear-icon"])===null||g===void 0?void 0:g.call(u)},placeholder:()=>{var g;return(g=u["clear-icon-placeholder"])===null||g===void 0?void 0:g.call(u)}}),c]))):null,this.mergedBordered?n("div",{class:`${o}-input__border`}):null,this.mergedBordered?n("div",{class:`${o}-input__state-border`}):null,this.showCount&&v==="textarea"?n(Je,null,{default:c=>{var g;const{renderCount:p}=this;return p?p(c):(g=u.count)===null||g===void 0?void 0:g.call(u,c)}}):null)}});function Jr(){const e=Fe(Oo,null);return e===null&&Lo("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}const Lr={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};function Or(e){const{primaryColor:a,opacityDisabled:o,borderRadius:h,textColor3:s}=e;return Object.assign(Object.assign({},Lr),{iconColor:s,textColor:"white",loadingColor:a,opacityDisabled:o,railColor:"rgba(0, 0, 0, .14)",railColorActive:a,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:h,railBorderRadiusMedium:h,railBorderRadiusLarge:h,buttonBorderRadiusSmall:h,buttonBorderRadiusMedium:h,buttonBorderRadiusLarge:h,boxShadowFocus:`0 0 0 2px ${Se(a,{alpha:.2})}`})}const Nr={common:ot,self:Or},Hr=S("switch",`
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
 `),S("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[De({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),i("checked, unchecked",`
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
 `),M("&:focus",[i("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),k("round",[i("rail","border-radius: calc(var(--n-rail-height) / 2);",[i("button","border-radius: calc(var(--n-button-height) / 2);")])]),G("disabled",[G("icon",[k("rubber-band",[k("pressed",[i("rail",[i("button","max-width: var(--n-button-width-pressed);")])]),i("rail",[M("&:active",[i("button","max-width: var(--n-button-width-pressed);")])]),k("active",[k("pressed",[i("rail",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),i("rail",[M("&:active",[i("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),k("active",[i("rail",[i("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),i("rail",`
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
 `,[De()]),i("button",`
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
 `)]),k("active",[i("rail","background-color: var(--n-rail-color-active);")]),k("loading",[i("rail",`
 cursor: wait;
 `)]),k("disabled",[i("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),jr=Object.assign(Object.assign({},Me.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ge;const Zr=j({name:"Switch",props:jr,slots:Object,setup(e){ge===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ge=CSS.supports("width","max(1px)"):ge=!1:ge=!0);const{mergedClsPrefixRef:a,inlineThemeDisabled:o}=rt(e),h=Me("Switch","-switch",Hr,Nr,e,a),s=lt(e),{mergedSizeRef:v,mergedDisabledRef:l}=s,d=P(e.defaultValue),u=ke(e,"value"),c=nt(u,d),g=z(()=>c.value===e.checkedValue),p=P(!1),m=P(!1),R=z(()=>{const{railStyle:b}=e;if(b)return b({focused:m.value,checked:g.value})});function x(b){const{"onUpdate:value":_,onChange:A,onUpdateValue:E}=e,{nTriggerFormInput:O,nTriggerFormChange:K}=s;_&&F(_,b),E&&F(E,b),A&&F(A,b),d.value=b,O(),K()}function ne(){const{nTriggerFormFocus:b}=s;b()}function H(){const{nTriggerFormBlur:b}=s;b()}function ae(){e.loading||l.value||(c.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue))}function W(){m.value=!0,ne()}function L(){m.value=!1,H(),p.value=!1}function U(b){e.loading||l.value||b.key===" "&&(c.value!==e.checkedValue?x(e.checkedValue):x(e.uncheckedValue),p.value=!1)}function D(b){e.loading||l.value||b.key===" "&&(b.preventDefault(),p.value=!0)}const ee=z(()=>{const{value:b}=v,{self:{opacityDisabled:_,railColor:A,railColorActive:E,buttonBoxShadow:O,buttonColor:K,boxShadowFocus:ie,loadingColor:q,textColor:le,iconColor:Y,[I("buttonHeight",b)]:$,[I("buttonWidth",b)]:ze,[I("buttonWidthPressed",b)]:pe,[I("railHeight",b)]:V,[I("railWidth",b)]:X,[I("railBorderRadius",b)]:Re,[I("buttonBorderRadius",b)]:te},common:{cubicBezierEaseInOut:oe}}=h.value;let se,ce,de;return ge?(se=`calc((${V} - ${$}) / 2)`,ce=`max(${V}, ${$})`,de=`max(${X}, calc(${X} + ${$} - ${V}))`):(se=Ae((N(V)-N($))/2),ce=Ae(Math.max(N(V),N($))),de=N(V)>N($)?X:Ae(N(X)+N($)-N(V))),{"--n-bezier":oe,"--n-button-border-radius":te,"--n-button-box-shadow":O,"--n-button-color":K,"--n-button-width":ze,"--n-button-width-pressed":pe,"--n-button-height":$,"--n-height":ce,"--n-offset":se,"--n-opacity-disabled":_,"--n-rail-border-radius":Re,"--n-rail-color":A,"--n-rail-color-active":E,"--n-rail-height":V,"--n-rail-width":X,"--n-width":de,"--n-box-shadow-focus":ie,"--n-loading-color":q,"--n-text-color":le,"--n-icon-color":Y}}),T=o?at("switch",z(()=>v.value[0]),ee,e):void 0;return{handleClick:ae,handleBlur:L,handleFocus:W,handleKeyup:U,handleKeydown:D,mergedRailStyle:R,pressed:p,mergedClsPrefix:a,mergedValue:c,checked:g,mergedDisabled:l,cssVars:o?void 0:ee,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:a,checked:o,mergedRailStyle:h,onRender:s,$slots:v}=this;s==null||s();const{checked:l,unchecked:d,icon:u,"checked-icon":c,"unchecked-icon":g}=v,p=!(We(u)&&We(c)&&We(g));return n("div",{role:"switch","aria-checked":o,class:[`${e}-switch`,this.themeClass,p&&`${e}-switch--icon`,o&&`${e}-switch--active`,a&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},n("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:h},B(l,m=>B(d,R=>m||R?n("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),m),n("div",{class:`${e}-switch__rail-placeholder`},n("div",{class:`${e}-switch__button-placeholder`}),R)):null)),n("div",{class:`${e}-switch__button`},B(u,m=>B(c,R=>B(g,x=>n(Ge,null,{default:()=>this.loading?n(tt,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(R||m)?n("div",{class:`${e}-switch__button-icon`,key:R?"checked-icon":"icon"},R||m):!this.checked&&(x||m)?n("div",{class:`${e}-switch__button-icon`,key:x?"unchecked-icon":"icon"},x||m):null})))),B(l,m=>m&&n("div",{key:"checked",class:`${e}-switch__checked`},m)),B(d,m=>m&&n("div",{key:"unchecked",class:`${e}-switch__unchecked`},m)))))}});export{Rr as N,Xr as _,lt as a,Jr as b,Zr as c,Yr as e,_r as i,qr as m,Sr as u};
