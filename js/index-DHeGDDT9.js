const __vite__fileDeps=["js/index-BaYnj12Y.js","assets/index-DrdN2wzA.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d,dF as f,c as m,b as l,e,bH as u,F as p,H as v,C as g,R as h,cc as _}from"./index-BaYnj12Y.js";import{F as b,d as y}from"./index-B3nCTZ0G.js";import{_ as S}from"./CheckCircleOutlined-DxHFpuNl.js";import{T}from"./two-col-lxbp798h.js";const L=d({setup(){const n=f("debug-serverless",y),i=m(),t=l(),s=l(""),r=async()=>{try{const o=await h.api.debug.function.post({data:{function:n.value},errorHandler:a=>{s.value=`Error: ${a.data.message}`,i.error(a.data.message)}});_(()=>import("./index-BaYnj12Y.js").then(a=>a.ei),__vite__mapDeps([0,1])).then(a=>{a.editor.colorize(JSON.stringify(o.data,null,2),"typescript",{tabSize:2}).then(c=>{t.value.innerHTML=c}).catch(()=>{t.value.innerHTML=JSON.stringify(o,null,2)})})}catch{}};return()=>e(g,{actionsElement:e(p,null,[e(v,{icon:e(S,null,null),onClick:r},null)])},{default:()=>[e(T,null,{default:()=>[e(u,{span:"18"},{default:()=>[e("div",{class:"h-[80vh]"},[e(b,{value:n,onSave:r},null)])]}),e(u,{span:"18"},{default:()=>[e("pre",{class:"max-h-[calc(100vh-10rem)] overflow-auto !bg-transparent !bg-none",ref:t},[s.value])]})]})]})}});export{L as default};
