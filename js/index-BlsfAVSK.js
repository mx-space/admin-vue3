function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["js/index-ucvadmAT.js","assets/index-C_iyiais.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{cc as t,d as D,b as R,d3 as g,w as c,o as A,R as I,e as f,aG as L}from"./index-ucvadmAT.js";class P{created;id}const T=`
export default async function handler(ctx: Context) {
  return 'pong';
}
`.trimStart();var V=(e=>(e.JSON="json",e.JSON5="json5",e.Function="function",e.Text="text",e.YAML="yaml",e))(V||{}),y=(e=>(e.json="json",e.json5="plaintext",e.function="typescript",e.text="markdown",e.yaml="yaml",e))(y||{});class M extends P{type="json";private=!1;raw="{}";name="";reference="root";comment;metatype;schema;enable;method;secret;builtIn=!1}var l;(e=>{e.libSource=`
 `.trim(),e.libUri="ts:filename/extends.d.ts"})(l||(l={}));const h=Object.freeze(Object.defineProperty({__proto__:null,get globalTypeDeclare(){return l}},Symbol.toStringTag,{value:"Module"})),v=Object.assign({"./node/assert.d.ts":()=>t(()=>import("./assert.d-z9w53SsN.js"),[]).then(e=>e.default),"./node/async_hooks.d.ts":()=>t(()=>import("./async_hooks.d-B9rt11F2.js"),[]).then(e=>e.default),"./node/base.d.ts":()=>t(()=>import("./base.d-B9hLN46M.js"),[]).then(e=>e.default),"./node/buffer.d.ts":()=>t(()=>import("./buffer.d-C5eug5JV.js"),[]).then(e=>e.default),"./node/child_process.d.ts":()=>t(()=>import("./child_process.d-DmzlSa3K.js"),[]).then(e=>e.default),"./node/cluster.d.ts":()=>t(()=>import("./cluster.d-5fB-OEot.js"),[]).then(e=>e.default),"./node/constants.d.ts":()=>t(()=>import("./constants.d-C4y09FgR.js"),[]).then(e=>e.default),"./node/crypto.d.ts":()=>t(()=>import("./crypto.d-O2YtD14o.js"),[]).then(e=>e.default),"./node/dgram.d.ts":()=>t(()=>import("./dgram.d-DL_4np3W.js"),[]).then(e=>e.default),"./node/dns.d.ts":()=>t(()=>import("./dns.d-CJFV6fnB.js"),[]).then(e=>e.default),"./node/domain.d.ts":()=>t(()=>import("./domain.d-DB4dUuk8.js"),[]).then(e=>e.default),"./node/fs.d.ts":()=>t(()=>import("./fs.d-BAYqPgzi.js"),[]).then(e=>e.default),"./node/globals.d.ts":()=>t(()=>import("./globals.d-BFLZ9fa5.js"),[]).then(e=>e.default),"./node/globals.global.d.ts":()=>t(()=>import("./globals.global.d-BYBn4iMV.js"),[]).then(e=>e.default),"./node/index.d.ts":()=>t(()=>import("./index.d-BdKhL8OE.js"),[]).then(e=>e.default),"./node/inspector.d.ts":()=>t(()=>import("./inspector.d-Ci1-a7MX.js"),[]).then(e=>e.default),"./node/net.d.ts":()=>t(()=>import("./net.d-3BiG-OBh.js"),[]).then(e=>e.default),"./node/os.d.ts":()=>t(()=>import("./os.d-BOmVYeaU.js"),[]).then(e=>e.default),"./node/path.d.ts":()=>t(()=>import("./path.d-DxF3hWbM.js"),[]).then(e=>e.default),"./node/perf_hooks.d.ts":()=>t(()=>import("./perf_hooks.d-tB0Ip8q0.js"),[]).then(e=>e.default),"./node/punycode.d.ts":()=>t(()=>import("./punycode.d-BH8FuZew.js"),[]).then(e=>e.default),"./node/querystring.d.ts":()=>t(()=>import("./querystring.d-C3ITSgP7.js"),[]).then(e=>e.default),"./node/readline.d.ts":()=>t(()=>import("./readline.d-BfmzZypd.js"),[]).then(e=>e.default),"./node/stream.d.ts":()=>t(()=>import("./stream.d-BOSiuy1K.js"),[]).then(e=>e.default),"./node/string_decoder.d.ts":()=>t(()=>import("./string_decoder.d-DVYxf0C2.js"),[]).then(e=>e.default),"./node/timers.d.ts":()=>t(()=>import("./timers.d-DJ6D63km.js"),[]).then(e=>e.default),"./node/trace_events.d.ts":()=>t(()=>import("./trace_events.d-Ce--kvdr.js"),[]).then(e=>e.default),"./node/url.d.ts":()=>t(()=>import("./url.d-5cjNMJgS.js"),[]).then(e=>e.default),"./node/util.d.ts":()=>t(()=>import("./util.d-BKbpMPM-.js"),[]).then(e=>e.default),"./node/wasi.d.ts":()=>t(()=>import("./wasi.d-CFOHPEHH.js"),[]).then(e=>e.default),"./node/zlib.d.ts":()=>t(()=>import("./zlib.d-PhjgZe1U.js"),[]).then(e=>e.default)}),u={};for(const e in v){const n=await v[e]();u[`ts:node/${e.split("/").pop()}`]=n}const x=D({props:{value:{type:Object,required:!0},onSave:{type:Function,required:!1},language:{type:String,default:"typescript"}},setup(e,{expose:n}){const p=R(),s=g(p,e.value,d=>{e.value.value=d},{language:e.language});n(s),c(()=>[s.loaded.value,e.language],([d,r])=>{d&&t(()=>import("./index-ucvadmAT.js").then(_=>_.eh),__vite__mapDeps([0,1])).then(_=>{const o=s.editor.getModel();o&&_.editor.setModelLanguage(o,r)})}),A(()=>{t(()=>import("./index-ucvadmAT.js").then(d=>d.eh),__vite__mapDeps([0,1])).then(d=>{const r=d.languages.typescript.typescriptDefaults.getCompilerOptions();r.target=d.languages.typescript.ScriptTarget.ESNext,r.allowNonTsExtensions=!0,r.moduleResolution=d.languages.typescript.ModuleResolutionKind.NodeJs,r.esModuleInterop=!0,d.languages.typescript.typescriptDefaults.setCompilerOptions(r);const _="ts:filename/global.d.ts";d.editor.getModel(d.Uri.parse(_))||I.api.fn.types.get().then(o=>{const i=o;d.languages.typescript.typescriptDefaults.addExtraLib(i,_),d.editor.createModel(i,"typescript",d.Uri.parse(_))}),Object.keys(h).forEach(o=>{const i=h[o],{libSource:E,libUri:a}=i,O=d.Uri.parse(a);d.editor.getModel(O)||(d.languages.typescript.typescriptDefaults.addExtraLib(E,a),d.editor.createModel(E,"typescript",d.Uri.parse(a)))});for(const o in u){const i=u[o];d.languages.typescript.typescriptDefaults.addExtraLib(i,o),d.editor.createModel(i,"typescript",d.Uri.parse(o))}})});const m=c(()=>s.loaded.value,d=>{m(),t(()=>import("./index-ucvadmAT.js").then(r=>r.eh),__vite__mapDeps([0,1])).then(r=>{s.editor.addCommand(r.KeyMod.CtrlCmd|r.KeyCode.KeyS,()=>{e.onSave?.()})})});return()=>f("div",{class:"relative h-full w-full"},[f("div",{class:"relative h-full w-full",ref:p},null),L(s.Snip)])}});export{x as F,M as S,V as a,y as b,T as d};
