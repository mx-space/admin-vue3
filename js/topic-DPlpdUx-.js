import{x as _,R as m,d as S,b as g,y as B,e,B as v,I as x,S as $,f as F,s as I,m as T,z as D,D as q,E as N,G as k,J as W,K as G,L as Q,M as P,P as K,i as A,T as O,O as U,F as C,o as j,A as M,Q as X,v as V,U as Y,r as Z,w as R,n as ee,V as y,q as b,W as te,X as ae,Y as le,Z as ue,H as ne,C as re}from"./index-C3oX8Ud1.js";import{U as z}from"./index-CywMke1W.js";import{N as se}from"./Upload-DF0KVaye.js";import{N as L,a as H}from"./ListItem-BvChfOl-.js";const J=l=>{if(!l)return"";const a=l.split(" ")[0];return a.length>4?l[0]:a},oe=_(l=>m.api.notes.get({params:{page:l,size:50,select:"nid title _id id"}}));function ie(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!V(l)}const ce=S({props:{id:{type:String,required:!0}},setup(l){const a=g(!1),r=g(null),o=g([]),d=g(),p=g(!0),f=async()=>{a.value=!0;const s=await m.api.topics(l.id).get();r.value=s,await u(s.id)},u=async(s,t=1,n=5)=>{p.value=!0;const{data:h,pagination:w}=await m.api.notes.topics(s).get({params:{page:t,size:n}});return p.value=!1,o.value=h,d.value=w,{data:h,pagination:w}},i=async s=>{await m.api.notes(s).patch({data:{topicId:null}}),message.success("已移除文章的专栏引用");const t=o.value.findIndex(n=>n.id===s);-~t&&o.value.splice(t,1)},c=B();return()=>{let s;return e(C,null,[e(v,{size:"small",secondary:!0,onClick:f},{default:()=>[e(x,{class:"mr-1"},{default:()=>[e($,null,null)]}),F("详情")]}),e(I,{show:a.value,closable:!0,onClose:()=>{a.value=!1},closeOnEsc:!0,onUpdateShow:t=>{a.value=t}},{default:()=>[r.value?e(T,{closable:!0,role:"dialog",class:"modal-card md",title:`专栏 - ${r.value.name}`,onClose:()=>{a.value=!1}},{default:()=>[e(D,null,{avatar(){return e(z,{class:"p0",type:"icon",onFinish:t=>{const n=JSON.parse((t.event?.target).responseText);return t.file.url=n.url,r.value&&m.api.topics(r.value.id).patch({data:{icon:n.url}}).then(()=>{r.value&&(r.value.icon=n.url)}),t.file},onError:t=>{try{const n=JSON.parse((t.event?.target).responseText);message.warning(n.message)}catch{}return t.file}},{default:()=>[e(se,null,{default:()=>[e(q,{size:60,class:"rounded-xl bg-transparent",src:r.value?.icon||void 0},{default:()=>[r.value?.icon?void 0:J(r.value?.name)]})]})]})},header(){return e("b",null,[r.value?.name])},"header-extra":function(){return e("span",{class:"opacity-80"},[r.value?.slug])},description(){return e("p",{class:"clamp-2 break-all opacity-90"},[r.value?.introduce])},default(){return e("p",null,[r.value?.description])}}),p.value&&o.value.length==0?e(N,{animated:!0,class:"mt-2 h-[350px]"},null):e("div",{class:"mt-4"},[e("p",{class:"flex items-center justify-between"},[e("strong",null,[F("包含的文章：")]),e(de,{topicId:r.value.id,onSuccess:()=>{k(()=>f())}},null)]),o.value.length===0&&e("div",{class:"flex h-[300px] items-center justify-center"},[e(W,{description:"这里还没有任何内容"},null)]),e(L,{bordered:!0,class:"mt-2"},ie(s=o.value.map(t=>e(H,{key:t.id},{default(){return e("p",{class:"flex items-center space-x-2"},[e("span",null,[t.title]),e(G,{path:Q(t.id)},null)])},suffix(){return e(P,null,{default:()=>[e(v,{circle:!0,tertiary:!0,type:"primary",onClick:()=>{c.push({path:"/notes/edit",query:{id:t.id}})}},{default:()=>[e(x,null,{default:()=>[e(K,null,null)]})]}),e(A,{onPositiveClick:()=>i(t.id)},{trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(x,null,{default:()=>[e(O,null,null)]})]})},default(){return`是否移除此话题「${r.value?.name}」？`}})]})}})))?s:{default:()=>[s]}),e("div",{class:"flex justify-end"},[d.value&&e(U,{class:"mt-4",onUpdatePage:t=>{u(l.id,t)},page:d.value.currentPage,pageCount:d.value.totalPage},null)])])]}):e(T,{class:"modal-card md",role:"dialog",title:"专栏信息获取中"},{default:()=>[e("div",{class:"relative flex gap-2 "},[e(N,{animated:!0,circle:!0,width:60},null),e("div",{class:"flex-grow"},[e(N,{animated:!0,text:!0,repeat:3,class:"flex-grow"},null)])]),e(N,{animated:!0,repeat:2,class:"mt-2",text:!0},null)]})]})])}}}),de=S({props:{topicId:{type:String,required:!0},onSuccess:{type:Function,required:!1}},setup(l){const a=g(!1),r=async()=>{const c=Y(u);await Promise.all(c.map(s=>m.api.notes(s).patch({data:{topicId:l.topicId}}))),message.success("添加成功"),a.value=!1,l.onSuccess?.(c)},{refresh:o,fetchNext:d,datalist:p,loading:f}=oe(),u=g([]),i=c=>{const s=c.currentTarget;s.scrollTop+s.offsetHeight+10>=s.scrollHeight&&d()};return j(()=>{p.value.length===0&&d()}),()=>e(C,null,[e(v,{secondary:!0,type:"success",circle:!0,onClick:()=>{a.value=!0}},{default:()=>[e(x,null,{default:()=>[e(M,null,null)]})]}),e(I,{closable:!0,closeOnEsc:!0,show:a.value,onUpdateShow:c=>{a.value=c}},{default:()=>[e(T,{title:"哪些文章需要添加到专栏？",class:"modal-card sm"},{footer(){return e("div",{class:"text-right"},[e(v,{round:!0,type:"success",onClick:()=>r()},{default:()=>[F("添加！")]})])},default(){return e(X,{maxTagCount:3,filterable:!0,clearable:!0,loading:f.value,multiple:!0,onClear:()=>{o()},value:u.value,onUpdateValue:c=>{u.value=c},resetMenuOnOptionsChange:!1,options:p.value.map(c=>({label:c.title,value:c.id,key:c.id})),onScroll:i},null)}})]})])}}),pe=S({props:{show:{type:Boolean,required:!0},onClose:{type:Function,required:!0},id:{type:String,required:!1},onSubmit:{type:Function,required:!1}},setup(l){const a=Z({}),r=g(!1),o=()=>{Object.keys(a).forEach(u=>{delete a[u]})};R(()=>l.id,u=>{u?(r.value=!0,m.api.topics(u).get().then(i=>{Object.assign(a,i),r.value=!1})):o()});const d=()=>{l.onClose()},p=()=>{f?.value?.validate(async i=>{i?.length||await u()});async function u(){let i;l.id?(i=await m.api.topics(l.id).put({data:a}),message.success("修改成功")):(i=await m.api.topics.post({data:a}),message.success("添加成功")),l.onSubmit?.(i),k(()=>{o()})}},f=g();return()=>e(C,null,[e(I,{show:l.show,onUpdateShow:d,closable:!0,onClose:d,transformOrigin:"center"},{default:()=>[e(T,{role:"dialog",title:l.id?"编辑话题":"新建话题",closable:!0,onClose:d,class:"modal-card sm"},{default:()=>[e(ee,{labelPlacement:"top",ref:f,model:a,disabled:r.value},{default:()=>[e(y,{label:"名字",required:!0,rule:{max:50,required:!0,trigger:["blur","input"]},path:"name"},{default:()=>[e(b,{value:a.name,onUpdateValue:u=>{a.name=u}},null)]}),e(y,{label:"id",required:!0,rule:{required:!0,trigger:["blur","input"]},path:"slug"},{default:()=>[e(b,{value:a.slug,onUpdateValue:u=>{a.slug=u}},null)]}),e(y,{label:"简介",required:!0,rule:{max:100,required:!0,trigger:["blur","input"]},path:"introduce"},{default:()=>[e(b,{value:a.introduce,onUpdateValue:u=>{a.introduce=u}},null)]}),e(y,{label:"图标"},{default:()=>[e(b,{value:a.icon,onUpdateValue:u=>{a.icon=u}},{suffix(){return e(z,{class:"flex items-center",type:"icon",onFinish:u=>{const i=JSON.parse((u.event?.target).responseText);return u.file.url=i.url,a.icon=u.file.url,u.file}},{default:()=>[e(v,{quaternary:!0},{default:()=>[e(te,null,{default:()=>[e(ae,null,null)]})]})]})}})]}),e(y,{label:"长描述",rule:{max:500,trigger:["blur","input"]},path:"description"},{default:()=>[e(b,{type:"textarea",autosize:{maxRows:5,minRows:2},value:a.description,onUpdateValue:u=>{a.description=u}},null)]}),e("div",{class:"flex justify-end gap-2"},[e(v,{round:!0,type:"primary",onClick:p},{default:()=>[F("提交")]})])]})]})]})])}});function fe(l){return typeof l=="function"||Object.prototype.toString.call(l)==="[object Object]"&&!V(l)}const ye=S({setup(){const l=B(),a=le();R(()=>a.query.page,t=>{r(t?+t:0)});const{fetchDataFn:r,data:o,pager:d}=ue((t,n)=>async(h=parseInt(a.query.page)||1,w=20)=>{const E=await m.api.topics.get({page:h,size:w});return n.value=E.pagination,t.value=E.data,E});j(()=>r());const p=g(""),f=g(!1),u=()=>{f.value=!0,p.value=""},i=()=>{f.value=!1,p.value=""};return{pagination:d,topics:o,fetchTopic:r,handleAddTopic:u,editTopicId:p,showTopicModal:f,handleCloseModal:i,handleSubmit(t){i();const n=o.value.findIndex(h=>h.id===t.id);-~n?o.value[n]=t:o.value.push(t)},handleDelete:async t=>{await m.api.topics(t).delete(),r()},handleEdit:t=>{p.value=t,f.value=!0},route:a,router:l}},render(){const{pagination:l,topics:a,router:r,route:o,editTopicId:d,showTopicModal:p,handleAddTopic:f,handleCloseModal:u,handleSubmit:i,handleEdit:c,handleDelete:s}=this;return e(re,null,{actions(){return e(C,null,[e(ne,{icon:e(M,null,null),onClick:f,variant:"success"},null)])},default(){let t;return e(C,null,[e(L,{bordered:!0,class:"mb-4"},fe(t=a.map(n=>e(H,{key:n.id},{prefix(){return e(q,{"data-src":n.icon,class:`mt-2 ${n.icon&&"!bg-transparent"}`,circle:!0,size:50,src:n.icon||void 0},{default:()=>[n.icon?void 0:J(n.name)]})},suffix(){return e(P,null,{default:()=>[e(v,{round:!0,onClick:()=>c(n.id)},{default:()=>[F("编辑")]}),e(A,{onPositiveClick:()=>s(n.id)},{default(){return`确定删除「${n.name}」？`},trigger(){return e(v,{circle:!0,tertiary:!0,type:"error"},{default:()=>[e(x,null,{default:()=>[e(O,null,null)]})]})}})]})},default(){return e(D,{title:n.name,description:n.introduce,titleExtra:n.slug},{default(){return n.description},footer(){return e(ce,{id:n.id},null)}})}})))?t:{default:()=>[t]}),l&&e("div",{class:"flex justify-end"},[e(U,{page:l.currentPage,onUpdatePage:n=>{r.replace({query:{...o.query,page:n},params:{...o.params}})},pageCount:l.totalPage,pageSize:l.size,showQuickJumper:!0},null)]),e(pe,{onClose:u,show:!!(p||d),id:d,onSubmit:i},null)])}})}});export{ye as default};
