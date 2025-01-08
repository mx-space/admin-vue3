import{B as l,g as m,s as y,d as k,i as b,c as O,a as E,e as L,H as h,b as x}from"./class-BIuIuH_7.js";import"./index-_yP02hNF.js";import"./confetti-CnDx-4n-.js";class R extends l{constructor({callbackSelector:s,cause:e,data:o,extraData:n,sender:c,urls:t}){super(e.shortMessage||"An error occurred while fetching for an offchain result.",{cause:e,metaMessages:[...e.metaMessages||[],e.metaMessages?.length?"":[],"Offchain Gateway Call:",t&&["  Gateway URL(s):",...t.map(d=>`    ${m(d)}`)],`  Sender: ${c}`,`  Data: ${o}`,`  Callback selector: ${s}`,`  Extra data: ${n}`].flat(),name:"OffchainLookupError"})}}class M extends l{constructor({result:s,url:e}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${m(e)}`,`Response: ${y(s)}`],name:"OffchainLookupResponseMalformedError"})}}class S extends l{constructor({sender:s,to:e}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${e}`,`OffchainLookup sender address: ${s}`],name:"OffchainLookupSenderMismatchError"})}}const D="0x556f1830",$={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function G(i,{blockNumber:s,blockTag:e,data:o,to:n}){const{args:c}=k({data:o,abi:[$]}),[t,d,f,a,r]=c,{ccipRead:p}=i,g=p&&typeof p?.request=="function"?p.request:T;try{if(!b(n,t))throw new S({sender:t,to:n});const u=await g({data:f,sender:t,urls:d}),{data:w}=await O(i,{blockNumber:s,blockTag:e,data:E([a,L([{type:"bytes"},{type:"bytes"}],[u,r])]),to:n});return w}catch(u){throw new R({callbackSelector:a,cause:u,data:o,extraData:r,sender:t,urls:d})}}async function T({data:i,sender:s,urls:e}){let o=new Error("An unknown error occurred.");for(let n=0;n<e.length;n++){const c=e[n],t=c.includes("{data}")?"GET":"POST",d=t==="POST"?{data:i,sender:s}:void 0,f=t==="POST"?{"Content-Type":"application/json"}:{};try{const a=await fetch(c.replace("{sender}",s).replace("{data}",i),{body:JSON.stringify(d),headers:f,method:t});let r;if(a.headers.get("Content-Type")?.startsWith("application/json")?r=(await a.json()).data:r=await a.text(),!a.ok){o=new h({body:d,details:r?.error?y(r.error):a.statusText,headers:a.headers,status:a.status,url:c});continue}if(!x(r)){o=new M({result:r,url:c});continue}return r}catch(a){o=new h({body:d,details:a.message,url:c})}}throw o}export{T as ccipRequest,G as offchainLookup,$ as offchainLookupAbiItem,D as offchainLookupSignature};
