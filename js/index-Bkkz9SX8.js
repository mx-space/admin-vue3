const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index-B1pMrXXi.js","assets/index-DWmxTZSZ.css"])))=>i.map(i=>d[i]);
import{d,dl as f,c as m,b as l,e,bT as u,F as p,H as v,C as g,R as h,co as _}from"./index-B1pMrXXi.js";import{F as T,d as b}from"./index-Dk3i1NkF.js";import{_ as y}from"./CheckCircleOutlined-XlrAAEC_.js";import{T as S}from"./two-col-B1iBv2QT.js";const H=d({setup(){const n=f("debug-serverless",b),i=m(),t=l(),s=l(""),o=async()=>{try{const r=await h.api.debug.function.post({data:{function:n.value},errorHandler:a=>{s.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-B1pMrXXi.js").then(a=>a.e7),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(r.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(r,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(y,null,null),onClick:o},null)])},{default:()=>[e(S,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(T,{value:n,onSave:o},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[s.value])]})]})]})}});export{H as default};
