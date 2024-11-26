import{aB as A,aC as n,aD as d,aE as u,aF as a,d as h,aG as w,aH as T,aI as s,aJ as K,aK as L,aL as W,aM as q,aN as U,a3 as x,aO as G,aP as b,aQ as y,aR as J,aS as p,aT as Q,b as C,o as X,R as _,aU as Y,e as i,I as Z,i as ee,B as te,f as m,h as S,a1 as ie,aV as ne,aW as le,F as oe,H as re,A as ae,C as se,v as ce}from"./index-B1pMrXXi.js";var k={};Object.defineProperty(k,"__esModule",{value:!0});const g=A,me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},de=(0,g.createElementVNode)("path",{d:"M290.74 93.24l128.02 128.02l-277.99 277.99l-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22l277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55l128.02 128.02l56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",fill:"currentColor"},null,-1),ue=[de];var pe=k.default=(0,g.defineComponent)({name:"Pen",render:function(o,r){return(0,g.openBlock)(),(0,g.createElementBlock)("svg",me,ue)}});const $=1.25,ge=n("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${$};
`,[d("horizontal",`
 flex-direction: row;
 `,[u(">",[n("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[d("dashed-line-type",[u(">",[n("timeline-item-timeline",[a("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),u(">",[n("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[u(">",[a("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),n("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[a("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),d("right-placement",[n("timeline-item",[n("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),d("left-placement",[n("timeline-item",[n("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),n("timeline-item-timeline",`
 left: 0;
 `)])]),n("timeline-item",`
 position: relative;
 `,[u("&:last-child",[n("timeline-item-timeline",[a("line",`
 display: none;
 `)]),n("timeline-item-content",[a("meta",`
 margin-bottom: 0;
 `)])]),n("timeline-item-content",[a("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),a("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),a("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),d("dashed-line-type",[n("timeline-item-timeline",[a("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),n("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${$} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[a("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),a("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ve=Object.assign(Object.assign({},T.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),P=W("n-timeline"),fe=h({name:"Timeline",props:ve,setup(e,{slots:o}){const{mergedClsPrefixRef:r}=w(e),l=T("Timeline","-timeline",ge,L,e,r);return K(P,{props:e,mergedThemeRef:l,mergedClsPrefixRef:r}),()=>{const{value:t}=r;return s("div",{class:[`${t}-timeline`,e.horizontal&&`${t}-timeline--horizontal`,`${t}-timeline--${e.size}-size`,!e.horizontal&&`${t}-timeline--${e.itemPlacement}-placement`]},o)}}}),he={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},ze=h({name:"TimelineItem",props:he,setup(e){const o=J(P);o||q("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),U();const{inlineThemeDisabled:r}=w(),l=x(()=>{const{props:{size:c,iconSize:v},mergedThemeRef:f}=o,{type:z}=e,{self:{titleTextColor:B,contentTextColor:N,metaTextColor:R,lineColor:j,titleFontWeight:I,contentFontSize:M,[p("iconSize",c)]:O,[p("titleMargin",c)]:E,[p("titleFontSize",c)]:F,[p("circleBorder",z)]:V,[p("iconColor",z)]:H},common:{cubicBezierEaseInOut:D}}=f.value;return{"--n-bezier":D,"--n-circle-border":V,"--n-icon-color":H,"--n-content-font-size":M,"--n-content-text-color":N,"--n-line-color":j,"--n-meta-text-color":R,"--n-title-font-size":F,"--n-title-font-weight":I,"--n-title-margin":E,"--n-title-text-color":B,"--n-icon-size":Q(v)||O}}),t=r?G("timeline-item",x(()=>{const{props:{size:c,iconSize:v}}=o,{type:f}=e;return`${c[0]}${v||"a"}${f[0]}`}),l,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:l,themeClass:t?.themeClass,onRender:t?.onRender}},render(){const{mergedClsPrefix:e,color:o,onRender:r,$slots:l}=this;return r?.(),s("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},s("div",{class:`${e}-timeline-item-timeline`},s("div",{class:`${e}-timeline-item-timeline__line`}),b(l.icon,t=>t?s("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:o}},t):s("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:o}}))),s("div",{class:`${e}-timeline-item-content`},b(l.header,t=>t||this.title?s("div",{class:`${e}-timeline-item-content__title`},t||this.title):null),s("div",{class:`${e}-timeline-item-content__content`},y(l.default,()=>[this.content])),s("div",{class:`${e}-timeline-item-content__meta`},y(l.footer,()=>[this.time]))))}}),xe={"timeline-grid":"_timeline-grid_1fzxd_1"};function be(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ce(e)}const Ce=h({setup(){const e=C([]),o=C(!0);X(async()=>{_.api.recently.all.get().then(l=>{e.value=l.data,o.value=!1})});const{create:r}=Y();return()=>{let l;return i(se,{actionsElement:i(oe,null,[i(re,{onClick:()=>{r().then(t=>{t&&e.value.unshift(t)})},icon:i(ae,null,null)},null)])},{default:()=>[i(fe,null,be(l=e.value.map(t=>i(ze,{type:"default",key:t.id},{icon(){return i(Z,null,{default:()=>[i(pe,null,null)]})},default(){return i("div",{class:xe["timeline-grid"]},[i("span",null,[t.content]),i("div",{class:"action"},[i(ee,{placement:"left",positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await _.api.recently(t.id).delete(),message.success("删除成功"),e.value.splice(e.value.indexOf(t),1)}},{trigger:()=>i(te,{quaternary:!0,type:"error",size:"tiny"},{default:()=>[m("移除")]}),default:()=>i("span",{class:"max-w-48 break-all"},[m("确定要删除 "),t.content,m(" ?")])})])])},footer(){return i(S,{inline:!0,size:5},{default:()=>[i(ie,{time:t.created},null),i(S,{inline:!0,size:1,align:"center"},{default:()=>[i(ne,null,null),m(" "),t.up,i("span",{class:"mx-2"},[m("/")]),i(le,null,null),m(" "),t.down]})]})}})))?l:{default:()=>[l]})]})}}});export{Ce as default};
