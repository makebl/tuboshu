import{g as w,e as d,l as c,d as y,h as z,C as $,D as f,df as T,B as h,G as a,I as B}from"./index-CI6qViUo.js";const S=typeof document<"u"&&typeof window<"u";function L(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const R=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=e=>y({name:`H${e}`,props:P,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=$(r),n=f("Typography","-h",R,T,r,o),s=h(()=>{const{type:l}=r,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:p,headerTextColor:u,[a("headerPrefixWidth",e)]:m,[a("headerFontSize",e)]:b,[a("headerMargin",e)]:x,[a("headerBarWidth",e)]:C,[a("headerBarColor",l)]:v}}=n.value;return{"--n-bezier":g,"--n-font-size":b,"--n-margin":x,"--n-bar-color":v,"--n-bar-width":C,"--n-font-weight":p,"--n-text-color":u,"--n-prefix-width":m}}),t=i?B(`h${e}`,h(()=>r.type[0]),s,r):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;const{prefix:o,alignText:i,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(r=this.onRender)===null||r===void 0||r.call(this),z(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:i}],style:s},t)}}),O=W("3");export{O as N,L as c,S as i};
