import{i as o}from"./isEmpty-CCPhqcF8.js";import{d as y,b as v,o as c,w as i,e as n,q as s,Q as p,cE as f}from"./index-B1pMrXXi.js";const h=y({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1},plainKeyInput:{type:Boolean,required:!1,default:!1}},setup(l){const u=v([]),r=v(new Set);return c(()=>{if(!o(l.value)){const a=Object.entries(l.value).map(([e,t])=>(r.value.add(e),{key:e,value:t.toString()}));u.value=a}}),i(()=>u.value,a=>{const e=a.reduce((t,d)=>(d.key===""&&d.value===""||(t[d.key]=d.value.toString()),t),{});l.onChange(e)},{deep:!0}),i(()=>u.value,a=>{r.value.clear(),a.forEach(e=>{r.value.add(e.key)})},{deep:!0}),()=>n(f,{value:u.value,onUpdateValue:a=>{u.value=(()=>{const e=a.indexOf(null);return e!==-1&&a.splice(e,1,{key:"",value:""}),a})()}},{default(a){return n("div",{class:"flex w-full items-center"},[l.plainKeyInput?n(s,{class:"mr-4",placeholder:"请输入",value:a.value.key,onUpdateValue:e=>{a.value.key=e}},null):n(p,{class:"mr-4",filterable:!0,tag:!0,placeholder:"请选择",value:a.value.key,onUpdateValue:e=>{a.value.key=e},options:l.options?.map(e=>({...e,disabled:r.value.has(e.value)}))},null),n(s,{value:a.value.value.toString(),onUpdateValue:e=>{a.value.value=e}},null)])}})}});export{h as K};
