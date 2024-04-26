import{b7 as C,d as i,aF as F,aG as v,b8 as w,a3 as E,b9 as S,ba as $,aI as A,aQ as R,bb as N,bc as g,Y as B,e,C as D,bd as x,J as h,aq as q,be as T,A as j,H as L,bf as z,M as P,B as p,R as f,q as b,f as m,W as V,T as k,F as H,l as M,bg as O,v as G,b as W}from"./index-CohFQF8p.js";import{a as _,N as J}from"./ListItem-Bew1tFpD.js";const K=()=>C,Q={name:"Flex",self:K},U=Q,Y=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),X=i({name:"Flex",props:Y,setup(t){const{mergedClsPrefixRef:a,mergedRtlRef:r}=F(t),n=v("Flex","-flex",void 0,U,t,a);return{rtlEnabled:w("Flex",r,a),mergedClsPrefix:a,margin:E(()=>{const{size:u}=t;if(Array.isArray(u))return{horizontal:u[0],vertical:u[1]};if(typeof u=="number")return{horizontal:u,vertical:u};const{self:{[R("gap",u)]:l}}=n.value,{row:c,col:o}=N(l);return{horizontal:g(o),vertical:g(c)}})}},render(){const{vertical:t,reverse:a,align:r,inline:n,justify:s,margin:u,wrap:l,mergedClsPrefix:c,rtlEnabled:o}=this,d=S($(this),!1);return d.length?A("div",{role:"none",class:[`${c}-flex`,o&&`${c}-flex--rtl`],style:{display:n?"inline-flex":"flex",flexDirection:t&&!a?"column":t&&a?"column-reverse":!t&&a?"row-reverse":"row",justifyContent:s,flexWrap:!l||t?"nowrap":"wrap",alignItems:r,gap:`${u.vertical}px ${u.horizontal}px`}},d):null}});function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!G(t)}const le=i({setup(){const t=B();return()=>{const a=t.query.refId;return e(D,null,{default:()=>[a?e(te,{refId:a},null):e(ee,null,null)]})}}}),ee=i({setup(){const{data:t,mutate:a}=x("/api/ai/summaries",async()=>await f.api.ai.summaries.get());return()=>t.value?.data.length===0?e(h,null,null):e(I,{summaries:t.value?.data||[],getArticle:r=>{const n=t.value?.articles[r];if(!n)throw new Error("article not found");return{type:n.type,document:{title:n.title}}},mutate:a},null)}}),te=i({props:{refId:{type:String,required:!0}},setup(t){const a=t.refId,{data:r,mutate:n}=x(`/api/ai/summary/${a}`,async()=>await f.api.ai.summaries.ref(a).get()),s=q(),{setHeaderButtons:u}=T();return u(e(L,{icon:e(j,null,null),name:"生成摘要",onClick:()=>{const l=s.create({title:"生成摘要",content(){return e(i({setup(){const o=W(!1);return()=>e("form",{onSubmit:d=>{d.preventDefault(),d.target.querySelector("input[name=lang]")?.value&&(o.value=!0,f.api.ai("generate-summary").post({data:{refId:a}}).then(y=>{y&&r.value?.summaries.push(y),l.destroy()}).finally(()=>{o.value=!1}))}},[e(b,{type:"text",inputProps:{name:"lang"},defaultValue:"zh-CN",placeholder:"目标语言"},null),e("div",{class:"mt-4 text-right"},[e(p,{attrType:"submit",loading:o.value,round:!0,type:"primary"},{default:()=>[m("生成")]})])])}}),null,null)}})}},null)),z(()=>{u(null)}),()=>r.value?.summaries.length===0?e(h,null,null):e(I,{summaries:r.value?.summaries||[],getArticle:()=>r.value.article,mutate:n},null)}}),I=i({props:{summaries:{type:Array,required:!0},getArticle:{type:Function,required:!0},mutate:{type:Function,required:!0}},setup(t){return()=>{let a;return e(J,{bordered:!0,showDivider:!0},Z(a=t.summaries.map(r=>e(_,{class:"ml-2",key:r.id},{suffix(){return e(P,null,{default:()=>[e(p,{onClick:()=>{const n=dialog.create({title:"修改摘要",content(){return e("form",{onSubmit:s=>{s.preventDefault();const l=s.target.querySelector("textarea")?.value;l&&f.api.ai.summaries(r.id).patch({data:{summary:l}}).then(()=>{t.mutate(),n.destroy()})}},[e(X,{vertical:!0},{default:()=>[e(b,{inputProps:{name:"summary"},rows:6,type:"textarea",defaultValue:r.summary},null),e("div",{class:"text-right"},[e(p,{type:"primary",attrType:"submit",round:!0},{default:()=>[m("保存")]})])]})])}})},round:!0},{default:()=>[m("修改")]}),e(p,{onClick:()=>{const n=dialog.create({title:"确定？",content:"确定要删除吗？",type:"error",positiveText:"删除",negativeText:"取消",onPositiveClick(){f.api.ai.summaries(r.id).delete().then(()=>{t.mutate(),n.destroy()})}})},round:!0,type:"error"},{default:()=>[e(V,null,{default:()=>[e(k,{class:"text-white"},null)]})]})]})},default(){const n=t.getArticle(r.refId);return e(H,null,[e(M,{to:`/${n.type}/edit?id=${r.refId}`},{default:()=>[e("h2",{"data-article-id":r.refId},[n.document.title])]}),e("small",null,[m("目标语言："),r.lang,m(" /")," ",O(new Date(r.created),"yyyy-MM-dd HH:mm")]),e("p",{class:"mt-2"},[r.summary])])}})))?a:{default:()=>[a]})}}});export{le as default};
