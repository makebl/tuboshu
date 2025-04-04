import{c as w,e as d,j as h,d as y,x as z,p as f,cB as $,v as c,D as a,z as T,h as B}from"./index-CdHEiT-d.js";const S=typeof document<"u"&&typeof window<"u",R=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},f.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=r=>y({name:`H${r}`,props:P,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=z(e),n=f("Typography","-h",R,$,e,i),s=c(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:p,headerTextColor:m,[a("headerPrefixWidth",r)]:u,[a("headerFontSize",r)]:b,[a("headerMargin",r)]:x,[a("headerBarWidth",r)]:v,[a("headerBarColor",l)]:C}}=n.value;return{"--n-bezier":g,"--n-font-size":b,"--n-margin":x,"--n-bar-color":C,"--n-bar-width":v,"--n-font-weight":p,"--n-text-color":m,"--n-prefix-width":u}}),t=o?T(`h${r}`,c(()=>e.type[0]),s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:i,alignText:o,mergedClsPrefix:n,cssVars:s,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),B(`h${r}`,{class:[`${n}-h`,`${n}-h${r}`,this.themeClass,{[`${n}-h--prefix-bar`]:i,[`${n}-h--align-text`]:o}],style:s},t)}}),j=W("3");export{j as N,S as i};
