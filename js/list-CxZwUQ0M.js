import{d,Z as k,c as x,aq as D,Y as F,w as R,o as T,e as a,F as C,ar as B,R as i,H as q,A as N,C as S,r as A,a1 as L,l as y,B as p,f as u,i as M,h as b,al as K}from"./index-C3oX8Ud1.js";const z=d({name:"SayList",setup(P,V){const{checkedRowKeys:n,data:g,pager:l,loading:f,fetchDataFn:m}=k((t,e)=>async(v=r.query.page||1,w=30)=>{const c=await i.api.says.get({params:{page:v,size:w,select:"title text _id id created modified author source"}});t.value=c.data,e.value=c.pagination}),o=x();D();const r=F(),s=m;R(()=>r.query.page,async t=>{await s(t)}),T(async()=>{await s()});const h=d({setup(){const t=A([{type:"selection",options:["none","all"]},{title:"创建于",key:"created",width:100,render(e){return a(y,{to:`/says/edit?id=${e.id}`},{default:()=>[a(L,{time:e.created},null)]})}},{title:"内容",key:"text"},{title:"作者",key:"author"},{title:"来源",key:"source"},{title:"操作",fixed:"right",key:"id",width:130,render(e){return a(b,{wrap:!1},{default:()=>[a(y,{to:`/says/edit?id=${e.id}`},{default:()=>[a(p,{quaternary:!0,type:"primary",size:"tiny"},{default:()=>[u("编辑")]})]}),a(M,{positiveText:"取消",negativeText:"删除",onNegativeClick:async()=>{await i.api.says(e.id).delete(),o.success("删除成功"),await s(l.value.currentPage)}},{trigger:()=>a(p,{quaternary:!0,type:"error",size:"tiny"},{default:()=>[u("移除")]}),default:()=>a("span",{class:"max-w-48"},[u("确定要删除“"),e.text,u("” ?")])})]})}}]);return()=>a(K,{loading:f.value,columns:t,data:g,onFetchData:s,pager:l,onUpdateCheckedRowKeys:e=>{n.value=e}},null)}});return()=>a(S,null,{actions:()=>a(C,null,[a(B,{checkedRowKeys:n.value,onDelete:async()=>{const t=await Promise.allSettled(n.value.map(e=>i.api.says(e).delete()));for(const e of t)e.status==="rejected"&&o.success(`删除失败，${e.reason.message}`);n.value.length=0,s()}},null),a(q,{to:"/says/edit",icon:a(N,null,null)},null)]),default:()=>a(h,null,null)})}});export{z as default};
