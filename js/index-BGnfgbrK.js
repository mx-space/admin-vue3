import{i as o}from"./isEmpty-1-oUcZ0k.js";import{d as y,b as v,o as c,w as i,e as n,q as s,Q as p,cw as f}from"./index-C3oX8Ud1.js";const h=y({props:{value:{type:Object,required:!0},onChange:{type:Function,required:!0},options:{type:Array,required:!1},plainKeyInput:{type:Boolean,required:!1,default:!1}},setup(u){const t=v([]),r=v(new Set);return c(()=>{if(!o(u.value)){const a=Object.entries(u.value).map(([e,l])=>(r.value.add(e),{key:e,value:l.toString()}));t.value=a}}),i(()=>t.value,a=>{const e=a.reduce((l,d)=>(d.key===""&&d.value===""||(l[d.key]=d.value.toString()),l),{});u.onChange(e)},{deep:!0}),i(()=>t.value,a=>{r.value.clear(),a.forEach(e=>{r.value.add(e.key)})},{deep:!0}),()=>n(f,{value:t.value,onUpdateValue:a=>{t.value=(()=>{const e=a.findIndex(l=>l===null);return e!==-1&&a.splice(e,1,{key:"",value:""}),a})()}},{default(a){return n("div",{class:"flex w-full items-center"},[u.plainKeyInput?n(s,{class:"mr-4",placeholder:"请输入",value:a.value.key,onUpdateValue:e=>{a.value.key=e}},null):n(p,{class:"mr-4",filterable:!0,tag:!0,placeholder:"请选择",value:a.value.key,onUpdateValue:e=>{a.value.key=e},options:u.options?.map(e=>({...e,disabled:r.value.has(e.value)}))},null),n(s,{value:a.value.value.toString(),onUpdateValue:e=>{a.value.value=e}},null)])}})}});export{h as K};
