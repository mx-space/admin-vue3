import{d as N,b as s,w as x,o as y,R as i,e as a,aj as b,ak as c,al as F,am as k,m as p,an as C,M as E,i as T,B as w,f as v,s as B,ao as U,W as A,ap as M,a2 as S,F as I,H as P,X as j,C as z}from"./index-ucvadmAT.js";import{a as D,N as O}from"./Upload-Dbd2IJ-L.js";const $=N({setup(){const t=s("icon"),u=s([]);x(()=>t.value,()=>{d()}),y(()=>{d()});const r=s(!1),d=()=>{r.value=!0,i.api.files(t.value).get().then(({data:e})=>{u.value=e,r.value=!1})},n=s(!1),g=async e=>{if(t.value==="icon"||t.value==="avatar"||t.value==="photo"){if(e.file.file?.type.startsWith("image"))return!0;message.error("只能上传图片文件，请重新上传")}return!0},h=({file:e,event:l})=>{const o=l?.target,{url:f,name:m}=JSON.parse(o.responseText);return e.name=m,e.url=f,u.value.unshift({url:f,name:m}),e};return()=>a(z,{actionsElement:a(I,null,[a(P,{variant:"info",onClick:()=>{n.value=!0},icon:a(j,null,null)},null)])},{default:()=>[a(b,{value:t.value,onUpdateValue:e=>{t.value=e}},{default:()=>[a(c,{tab:"图标",name:"icon"},null),a(c,{tab:"头像",name:"avatar"},null),a(c,{tab:"文件",name:"file"},null)]}),a(F,{loading:r.value,data:u,columns:[{key:"name",title:"文件名",width:300,ellipsis:{lineClamp:1,tooltip:!0}},{key:"url",title:"URL",render(e){return a(k,{placement:"bottom",class:"max-w-[400px]"},{trigger(){return a("a",{href:e.url,target:"_blank"},[e.url])},default(){return a(p,{bordered:!0},{default:()=>[a(C,{src:e.url},null)]})}})}},{key:"action",title:"操作",width:150,render(e){return a(E,null,{default:()=>[a(T,{onPositiveClick:()=>{i.api.files(t.value)(e.name).delete().then(()=>{message.success("删除成功"),u.value=u.value.filter(l=>l.name!==e.name)})}},{trigger(){return a(w,{quaternary:!0,type:"error",size:"tiny"},{default:()=>[v("删除")]})},default(){return`确定要删除 ${e.name} 吗？`}})]})}}]},null),a(B,{closable:!0,closeOnEsc:!0,onClose:()=>{n.value=!1},show:n.value,onUpdateShow:e=>{n.value=e}},{default:()=>[a(p,{title:"文件上传",class:"modal-card sm flex justify-center",closable:!0,onClose:()=>{n.value=!1}},{default:()=>[a(D,{class:"flex w-full flex-col items-center",headers:{authorization:U()||""},action:`${i.endpoint}/files/upload?type=${t.value}`,"directory-dnd":!0,multiple:!0,onBeforeUpload:g,onFinish:h,onError:e=>{const l=e.event?.target;if(e.file.status="error",!l)return message.warning("网络异常"),e.file;const{message:o}=JSON.parse(l.responseText);return message.warning(o),e.file}},{default:()=>[a(O,{class:"m-auto flex w-full flex-col items-center justify-center py-28"},{default:()=>[a(A,{size:"48",depth:"3"},{default:()=>[a(M,null,null)]}),a(S,{class:"mt-2"},{default:()=>[v("点击或者拖动文件到该区域来上传")]})]})]})]})]})]})}});export{$ as default};
