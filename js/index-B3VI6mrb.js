const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index-BWeC187o.js","assets/index-BUm62fRi.css"])))=>i.map(i=>d[i]);
import{d,dO as f,c as m,b as l,e,bQ as u,F as p,H as v,C as g,R as h,cl as _}from"./index-BWeC187o.js";import{F as b,d as y}from"./index-Bk8rC9UG.js";import{_ as S}from"./CheckCircleOutlined-Bhnwex3O.js";import{T}from"./two-col-CQF4ADW8.js";const H=d({setup(){const n=f("debug-serverless",y),i=m(),t=l(),r=l(""),s=async()=>{try{const o=await h.api.debug.function.post({data:{function:n.value},errorHandler:a=>{r.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-BWeC187o.js").then(a=>a.er),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(o.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(o,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(S,null,null),onClick:s},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(b,{value:n,onSave:s},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[r.value])]})]})]})}});export{H as default};
