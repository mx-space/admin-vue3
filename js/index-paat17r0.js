import{d,b as r,o as x,e,s as b,m as k,aV as y,Q as N,f as c,B as m,R as p,F as T,ds as C,ce as L,$ as S,Y as B,a3 as M,y as R,aj as U,ak as v,C as D}from"./index-CohFQF8p.js";import{X as w}from"./index-2RB2eNXM.js";import{N as E,a as F}from"./ListItem-Bew1tFpD.js";import{c as i,b as g}from"./index-CJq-Eabc.js";import{E as h}from"./types-w5g51IlY.js";const V=d({setup(){const s=r([]),l=r(!1),u=async()=>{l.value=!0;const{data:t}=await p.api.health.log.list(a.value).get();s.value=t,l.value=!1};x(()=>{u()});const n=r(""),o=r(!1),a=r("native");return()=>e(T,null,[e(b,{transformOrigin:"center",show:o.value,onUpdateShow:t=>void(o.value=t)},{default:()=>[e(k,{title:"查看日志",class:"modal-card !bg-dark-400 !all:text-white !w-[100rem] !text-white",bordered:!1,closable:!0,onClose:()=>{o.value=!1}},{default:()=>[e(O,{data:n.value},null)]})]}),e(y,{show:l.value},{default:()=>[e(E,{class:"min-h-[300px] bg-transparent"},{header(){return e(N,{class:"ml-auto w-32",value:a.value,onUpdateValue:t=>{a.value=t,u()},options:[{label:"PM2",value:"pm2"},{label:"系统记录",value:"native"}]},null)},default(){return s.value.map(t=>e(F,{key:t.filename},{default(){return e("div",{class:"flex flex-col"},[e("span",null,[t.filename]),e("span",{class:"grid grid-cols-[5rem,auto] text-sm text-gray-400 dark:text-gray-600"},[e("span",null,[t.size]),e("span",null,[c("类型："),t.type])])])},suffix(){return e("div",{class:"flex space-x-2"},[e(m,{ghost:!0,type:"success",onClick:()=>{p.api.health.log(a.value).get({params:{filename:t.filename}}).then(f=>{n.value=f,o.value=!0})}},{default:()=>[c("查看")]}),e(m,{ghost:!0,type:"error",onClick:()=>{p.api.health.log(a.value).delete({params:{filename:t.filename}}).then(()=>{s.value.splice(s.value.findIndex(f=>f.filename===t.filename),1)})}},{default:()=>[c("删除")]})])}}))}})]})])}}),O=d({props:{data:{type:String,default:""}},setup(s){const l=r(!0);return x(()=>{setTimeout(()=>{l.value=!1},1e3)}),()=>e("div",{class:"relative flex h-[600px] max-h-[70vh] overflow-auto"},[l.value?e("div",{class:"flex h-full w-full items-center justify-center"},[e(y,{show:!0,strokeWidth:14},null)]):e(w,{class:"w-full flex-grow",onReady:u=>{u.write(s.data)}},null)])}}),q=d({setup(){const s=(a=!0)=>{i.socket.emit("log",{prevLog:a})};let l;const u=[],n=a=>{l?(u.length>0&&o(l),l.write(a)):u.push(a)},o=a=>{for(;u.length;){const t=u.shift();a.write(t)}};return C(()=>{s(),g.on(h.STDOUT,n)}),L(()=>{const a=()=>{s(!1)};return i.socket.io.on("open",a),()=>{i.socket.io.off("open",a)}}),S(()=>{i.socket.emit("unlog"),g.off(h.STDOUT,n)}),()=>e(w,{darkMode:!0,onReady:a=>{l=a,o(l)}},null)}}),A=d({setup(){const s=B(),l=M(()=>s.query.tab?.toString()||"0"),u=R();return()=>e(D,null,{default:()=>[e(U,{size:"medium",value:l.value,onUpdateValue:n=>{u.replace({...s,query:{...s.query,tab:n}})}},{default:()=>[e(v,{tab:"日志",name:"0"},{default:()=>[e(V,null,null)]}),e(v,{tab:"实时",name:"1"},{default:()=>[e(q,null,null)]})]})]})}});export{A as default};
