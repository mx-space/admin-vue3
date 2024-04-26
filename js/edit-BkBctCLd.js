import{d as b,aq as R,e as a,b1 as $,H as w,b as g,o as j,q as d,B as D,f as P,F as U,Y as V,y as q,r as B,a3 as N,R as y,n as k,V as c,b2 as G,a7 as S,av as T,C as A,ae as H,af as M,ag as L,ax as _,ai as K}from"./index-CohFQF8p.js";const x="https://api.github.com/",O=(r,s)=>fetch(`${x}repos/${r}/${s}`).then(u=>u.json()),W=(r,s)=>fetch(`${x}repos/${r}/${s}/readme`).then(u=>u.json()).catch(u=>null).then(u=>{if(u){const m=(()=>{const e=u.download_url.split("/"),n=e.pop(),i=e.pop();return`https://fastly.jsdelivr.net/gh/${r}/${s}@${i}/${n}`})();return fetch(m).then(e=>e.text())}return null}),Y=b({props:{onData:{type:Function,required:!0},defaultValue:{type:String}},setup(r){const s=R(),u=()=>{const m=s.create({title:"从 GitHub 解析",content:()=>a(b({setup(){const n=g(r.defaultValue??""),i=g(!1),f=async()=>{i.value=!0;const o=n.value.replace(/\.git$/,"").replace(/^https?:\/\/github.com\//,""),[p,h]=o.split("/"),[E,v]=await Promise.all([O(p,h),W(p,h)]);r.onData(E,v),i.value=!1,requestAnimationFrame(()=>{m.destroy()})},t=g();return j(()=>{setTimeout(()=>{t.value.focus()},10)}),()=>a(U,null,[a(d,{ref:t,onKeydown:l=>{l.code==="Enter"&&f()},class:"my-4",value:n.value,placeholder:"在此输入项目地址",onUpdateValue:l=>void(n.value=l)},null),a("div",{class:"flex justify-end space-x-4"},[a(D,{type:"primary",round:!0,onClick:f,loading:i.value},{default:()=>[P("获取")]})])])}}),null,null)})};return()=>a(w,{color:"#25292E",icon:a($,null,null),name:"从 GitHub 获取",onClick:u},null)}}),J=b({setup(){const r=V(),s=q(),u=()=>({name:"",previewUrl:"",docUrl:"",projectUrl:"",images:[],description:"",avatar:"",text:"",id:void 0}),m=t=>H(e)(t),e=B(u()),n=N(()=>r.query.id);j(async()=>{const t=n.value;if(t&&typeof t=="string"){const o=(await y.api.projects(t).get({})).data;m(o)}});const i=async()=>{const t=()=>{try{if(!e.text||e.text.trim().length==0)throw"内容为空";return{..._(K(e),(l,o,p)=>(l[p]=typeof o>"u"?null:typeof o=="string"&&o.length==0?"":o,l)),text:e.text.trim()}}catch(l){throw message.error(l),l}};if(n.value){if(!M(n.value))return;const l=n.value;await y.api.projects(l).put({data:t()}),message.success("修改成功")}else await y.api.projects.post({data:t()}),message.success("发布成功");s.push({name:L.ListProject})},f=(t,l)=>{const{html_url:o,homepage:p,description:h}=t;Object.assign(e,{description:h,projectUrl:o,previewUrl:p,images:(v=>{const C=/(?<=!\[.*\]\()(.+)(?=\))/g,F=[];for(const I of v.matchAll(C))F.push(I[0]);return F})(l||""),name:t.name,text:l||""})};return()=>a(A,{actionsElement:a(U,null,[a(Y,{onData:f,defaultValue:e.projectUrl},null),a(w,{variant:"primary",onClick:i,icon:a(T,null,null)},null)])},{default:()=>[a(k,{labelWidth:"7rem",labelPlacement:"left",labelAlign:"left"},{default:()=>[a(c,{label:"项目名称",required:!0},{default:()=>[a(d,{autofocus:!0,placeholder:"",value:e.name,onInput:t=>void(e.name=t)},null)]}),a(c,{label:"文档地址"},{default:()=>[a(d,{placeholder:"",value:e.docUrl,onInput:t=>void(e.docUrl=t)},null)]}),a(c,{label:"预览地址"},{default:()=>[a(d,{placeholder:"",value:e.previewUrl,onInput:t=>void(e.previewUrl=t)},null)]}),a(c,{label:"项目地址"},{default:()=>[a(d,{placeholder:"",value:e.projectUrl,onInput:t=>void(e.projectUrl=t)},null)]}),a(c,{label:"项目描述",required:!0},{default:()=>[a(d,{placeholder:"",value:e.description,onInput:t=>void(e.description=t)},null)]}),a(c,{label:"项目图标"},{default:()=>[a(d,{placeholder:"",value:e.avatar,onInput:t=>void(e.avatar=t)},null)]}),a(c,{label:"预览图片"},{default:()=>[a(G,{round:!0,value:e.images,onUpdateValue:t=>void(e.images=t)},null)]}),a(c,{label:"正文",required:!0},{default:()=>[a("div",{class:"w-full"},[a(S,{unSaveConfirm:!1,class:"h-[calc(100vh-40rem)] min-h-80 w-full",loading:!!(n.value&&!e.id),onChange:t=>{e.text=t},text:e.text},null)])]})]})]})}});export{J as default};
