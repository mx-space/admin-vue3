import{cA as l,cB as o,cC as y,bH as a,cD as d}from"./index-B1pMrXXi.js";function c(r,e){if(r==null)return!0;switch(typeof e){case"symbol":case"number":case"object":{if(Array.isArray(e))return i(r,e);if(typeof e=="number"?e=y(e):typeof e=="object"&&(Object.is(e?.valueOf(),-0)?e="-0":e=String(e)),r?.[e]===void 0)return!0;try{return delete r[e],!0}catch{return!1}}case"string":{if(r?.[e]===void 0&&l(e))return i(r,o(e));try{return delete r[e],!0}catch{return!1}}}}function i(r,e){const n=a(r,e.slice(0,-1),r),s=e[e.length-1];if(n?.[s]===void 0)return!0;try{return delete n[s],!0}catch{return!1}}function g(r,...e){if(r==null)return{};const n=d(r);for(let s=0;s<e.length;s++){let t=e[s];switch(typeof t){case"object":{Array.isArray(t)||(t=Array.from(t));for(let u=0;u<t.length;u++){const f=t[u];c(n,f)}break}case"string":case"symbol":case"number":{c(n,t);break}}}return n}export{g as o};
