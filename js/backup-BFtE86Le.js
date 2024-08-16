import{d as b,bg as B,bh as F,bi as p,Z as T,as as z,e as a,al as D,aW as C,h as E,B as d,f as i,i as m,F as _,H as f,dw as A,X as R,ar as V,C as N,R as l,db as y}from"./index-CbB7mK5o.js";const H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},I=p("path",{d:"M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8z",fill:"none"},null,-1),M=p("path",{d:"M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4z",fill:"none"},null,-1),K=p("path",{d:"M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33zM176 416l-9-256h33l9 256zm96 0h-32V160h32zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm40 320h-33l9-256h33z",fill:"currentColor"},null,-1),L=[I,M,K],P=b({name:"TrashSharp",render:function(s,c){return B(),F("svg",H,L)}}),q=b(()=>{const{checkedRowKeys:u,data:s,fetchDataFn:c,loading:g}=T(e=>async()=>{const n=(await l.api.backups.get()).data;n.sort((o,r)=>r.filename.localeCompare(o.filename)),e.value=n});z(()=>{c()});const k=async()=>{const e=message.info("备份中",{duration:1e9,closable:!0}),t=await l.api.backups.new.get({responseType:"blob",timeout:1e9});e.destroy(),message.success("备份完成"),y(t,"backup.zip")},w=async()=>{const e=document.createElement("input");e.type="file",e.style.cssText="position: absolute; opacity: 0; z-index: -9999;top: 0; left: 0",e.accept=".zip",document.body.append(e),e.click(),e.addEventListener("change",()=>{const t=e.files[0],n=new FormData;n.append("file",t),l.api.backups.rollback.post({data:n,timeout:1<<30}).then(()=>{message.success("恢复成功，页面将会重载"),setTimeout(()=>{location.reload()},1e3)})})},h=async e=>{let t="";if(Array.isArray(e)?t=e.join(","):t=e,await l.api.backups.delete({data:{files:t}}),message.success("删除成功"),Array.isArray(e))e.forEach(n=>{const o=s.value.findIndex(r=>r.filename===n);o!=-1&&s.value.splice(o,1)});else{const n=s.value.findIndex(o=>o.filename===e);n!=-1&&s.value.splice(n,1)}},v=async e=>{await l.api.backups.rollback(e).patch({}),message.info("回滚中",{closable:!0,duration:1e9})},x=async e=>{const t=message.info("下载中",{duration:1e9,closable:!0}),n=await l.api.backups(e).get({responseType:"blob",timeout:1e9});t.destroy(),message.success("下载完成"),y(n,`${e}.zip`)};return()=>a(N,{actionsElement:a(_,null,[a(f,{icon:a(A,null,null),name:"立即备份",variant:"primary",onClick:k},null),a(f,{icon:a(R,null,null),onClick:w,name:"上传恢复",variant:"info"},null),a(V,{checkedRowKeys:u.value,onDelete:async()=>{h(u.value)},customIcon:a(P,null,null),customButtonTip:"批量删除"},null)])},{default:()=>[a(D,C({data:s,fetchDataFn:c},{checkedRowKey:"filename",loading:g.value,nTableProps:{maxHeight:"calc(100vh - 17rem)"},onUpdateCheckedRowKeys:e=>{u.value=e},maxWidth:500,columns:[{type:"selection",options:["none","all"]},{title:"日期",key:"filename",width:300},{title:"大小",key:"size",width:200},{title:"操作",fixed:"right",width:200,key:"filename",render(e){const t=e.filename;return a(E,{inline:!0},{default:()=>[a(d,{quaternary:!0,size:"tiny",type:"primary",onClick:()=>void x(t)},{default:()=>[i("下载")]}),a(m,{positiveText:"取消",negativeText:"回退",onNegativeClick:()=>{v(t)}},{trigger:()=>a(d,{quaternary:!0,size:"tiny",type:"warning"},{default:()=>[i("回退")]}),default:()=>a("span",{class:"max-w-48"},[i("确定要回退？")])}),a(m,{positiveText:"取消",negativeText:"删除",onNegativeClick:()=>{h(t)}},{trigger:()=>a(d,{quaternary:!0,size:"tiny",type:"error"},{default:()=>[i("移除")]}),default:()=>a("span",{class:"max-w-48"},[i("确定要删除？")])})]})}}],noPagination:!0}),null)]})});export{q as default};
