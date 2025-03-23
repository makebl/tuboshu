import{bP as w,bS as d,cc as c,M as y,a5 as $,bX as z,bY as f,cG as T,q as h,b_ as a,b$ as B}from"./index-DKmMoxH9.js";const H=typeof document<"u"&&typeof window<"u";function L(e){return e.replace(/#|\(|\)|,|\s|\./g,"_")}const P=w("h",`
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
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),R=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),S=e=>y({name:`H${e}`,props:R,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=z(r),n=f("Typography","-h",P,T,r,o),s=h(()=>{const{type:l}=r,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:g,headerTextColor:p,[a("headerPrefixWidth",e)]:u,[a("headerFontSize",e)]:m,[a("headerMargin",e)]:x,[a("headerBarWidth",e)]:C,[a("headerBarColor",l)]:v}}=n.value;return{"--n-bezier":b,"--n-font-size":m,"--n-margin":x,"--n-bar-color":v,"--n-bar-width":C,"--n-font-weight":g,"--n-text-color":p,"--n-prefix-width":u}}),t=i?B(`h${e}`,h(()=>r.type[0]),s,r):void 0;return{mergedClsPrefix:o,cssVars:i?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var r;const{prefix:o,alignText:i,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(r=this.onRender)===null||r===void 0||r.call(this),$(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:o,[`${n}-h--align-text`]:i}],style:s},t)}}),M=S("3");export{M as N,L as c,H as i};
