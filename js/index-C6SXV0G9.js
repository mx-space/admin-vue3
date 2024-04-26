import{d as P,b as E,c8 as ne,d4 as ae,e as o,ch as re,d5 as ie,cj as se,w as k,be as ce,aq as le,ce as oe,o as ue,R as M,n as fe,V as de,Q as me,bI as V,H as X,b6 as he,T as pe,F as ve,f as ge,aj as _e,ak as q,C as we}from"./index-CohFQF8p.js";import{T as ye}from"./two-col-eXvfUmzB.js";const Ee=P({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(r){const f=E(),d=ne(r),c=ae(f,d,r.onChange,{language:"html"});return()=>o("div",{class:"relative h-full w-full"},[o("div",{ref:f,class:"relative h-full w-full"},null),!c.loaded.value&&o(re,{description:"Monaco 体积较大耐心等待加载完成..."},null)])}});var G={},z={};(function(r){var f=/[|\\{}()[\]^$+*?.]/g,d=Object.prototype.hasOwnProperty,c=function(s,l){return d.apply(s,[l])};r.escapeRegExpChars=function(s){return s?String(s).replace(f,"\\$&"):""};var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},F=/[&<>'"]/g;function S(s){return b[s]||s}var A=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;r.escapeXML=function(s){return s==null?"":String(s).replace(F,S)};function _(){return Function.prototype.toString.call(this)+`;
`+A}try{typeof Object.defineProperty=="function"?Object.defineProperty(r.escapeXML,"toString",{value:_}):r.escapeXML.toString=_}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}r.shallowCopy=function(s,l){if(l=l||{},s!=null)for(var p in l)c(l,p)&&(p==="__proto__"||p==="constructor"||(s[p]=l[p]));return s},r.shallowCopyFromList=function(s,l,p){if(p=p||[],l=l||{},s!=null)for(var T=0;T<p.length;T++){var w=p[T];if(typeof l[w]<"u"){if(!c(l,w)||w==="__proto__"||w==="constructor")continue;s[w]=l[w]}}return s},r.cache={_data:{},set:function(s,l){this._data[s]=l},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},r.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(l){return l[1].toUpperCase()})},r.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}()})(z);const be="ejs",Le="Embedded JavaScript templates",Te=["template","engine","ejs"],Fe="3.1.9",Se="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",Ae="Apache-2.0",Ce={ejs:"./bin/cli.js"},Ne="./lib/ejs.js",Oe="ejs.min.js",Pe="ejs.min.js",je={type:"git",url:"git://github.com/mde/ejs.git"},De="https://github.com/mde/ejs/issues",Ie="https://github.com/mde/ejs",Me={jake:"^10.8.5"},Re={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},ke={node:">=0.10.0"},We={test:"mocha -u tdd"},xe={name:be,description:Le,keywords:Te,version:Fe,author:Se,license:Ae,bin:Ce,main:Ne,jsdelivr:Oe,unpkg:Pe,repository:je,bugs:De,homepage:Ie,dependencies:Me,devDependencies:Re,engines:ke,scripts:We};(function(r){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var f=ie,d=se,c=z,b=!1,F=xe.version,S="<",A=">",_="%",s="locals",l="ejs",p="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",T=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],w=T.concat("cache"),W=/^\uFEFF/,D=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;r.cache=c.cache,r.fileLoader=f.readFileSync,r.localsName=s,r.promiseImpl=new Function("return this;")().Promise,r.resolveInclude=function(t,n,e){var a=d.dirname,i=d.extname,u=d.resolve,h=u(e?n:a(n),t),y=i(t);return y||(h+=".ejs"),h};function x(t,n){var e;if(n.some(function(a){return e=r.resolveInclude(t,a,!0),f.existsSync(e)}))return e}function Z(t,n){var e,a,i=n.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(n.root)?e=x(t,n.root):e=r.resolveInclude(t,n.root||"/",!0);else if(n.filename&&(a=r.resolveInclude(t,n.filename),f.existsSync(a)&&(e=a)),!e&&Array.isArray(i)&&(e=x(t,i)),!e&&typeof n.includer!="function")throw new Error('Could not find the include file "'+n.escapeFunction(t)+'"');return e}function C(t,n){var e,a=t.filename,i=arguments.length>1;if(t.cache){if(!a)throw new Error("cache option requires a filename");if(e=r.cache.get(a),e)return e;i||(n=H(a).toString().replace(W,""))}else if(!i){if(!a)throw new Error("Internal EJS error: no file name or template provided");n=H(a).toString().replace(W,"")}return e=r.compile(n,t),t.cache&&r.cache.set(a,e),e}function Q(t,n,e){var a;if(e){try{a=C(t)(n)}catch(i){return e(i)}e(null,a)}else{if(typeof r.promiseImpl=="function")return new r.promiseImpl(function(i,u){try{a=C(t)(n),i(a)}catch(h){u(h)}});throw new Error("Please provide a callback function")}}function H(t){return r.fileLoader(t)}function K(t,n){var e=c.shallowCopy(c.createNullProtoObjWherePossible(),n);if(e.filename=Z(t,e),typeof n.includer=="function"){var a=n.includer(t,e.filename);if(a&&(a.filename&&(e.filename=a.filename),a.template))return C(e,a.template)}return C(e)}function U(t,n,e,a,i){var u=n.split(`
`),h=Math.max(a-3,0),y=Math.min(u.length,a+3),g=i(e),L=u.slice(h,y).map(function(N,j){var O=j+h+1;return(O==a?" >> ":"    ")+O+"| "+N}).join(`
`);throw t.path=g,t.message=(g||"ejs")+":"+a+`
`+L+`

`+t.message,t}function $(t){return t.replace(/;(\s*$)/,"$1")}r.compile=function(n,e){var a;return e&&e.scope&&(b||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),b=!0),e.context||(e.context=e.scope),delete e.scope),a=new m(n,e),a.compile()},r.render=function(t,n,e){var a=n||c.createNullProtoObjWherePossible(),i=e||c.createNullProtoObjWherePossible();return arguments.length==2&&c.shallowCopyFromList(i,a,T),C(i,t)(a)},r.renderFile=function(){var t=Array.prototype.slice.call(arguments),n=t.shift(),e,a={filename:n},i,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?c.shallowCopy(a,t.pop()):(i.settings&&(i.settings.views&&(a.views=i.settings.views),i.settings["view cache"]&&(a.cache=!0),u=i.settings["view options"],u&&c.shallowCopy(a,u)),c.shallowCopyFromList(a,i,w)),a.filename=n):i=c.createNullProtoObjWherePossible(),Q(a,i,e)},r.Template=m,r.clearCache=function(){r.cache.reset()};function m(t,n){n=n||c.createNullProtoObjWherePossible();var e=c.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",e.client=n.client||!1,e.escapeFunction=n.escape||n.escapeFunction||c.escapeXML,e.compileDebug=n.compileDebug!==!1,e.debug=!!n.debug,e.filename=n.filename,e.openDelimiter=n.openDelimiter||r.openDelimiter||S,e.closeDelimiter=n.closeDelimiter||r.closeDelimiter||A,e.delimiter=n.delimiter||r.delimiter||_,e.strict=n.strict||!1,e.context=n.context,e.cache=n.cache||!1,e.rmWhitespace=n.rmWhitespace,e.root=n.root,e.includer=n.includer,e.outputFunctionName=n.outputFunctionName,e.localsName=n.localsName||r.localsName||s,e.views=n.views,e.async=n.async,e.destructuredLocals=n.destructuredLocals,e.legacyInclude=typeof n.legacyInclude<"u"?!!n.legacyInclude:!0,e.strict?e._with=!1:e._with=typeof n._with<"u"?n._with:!0,this.opts=e,this.regex=this.createRegex()}m.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},m.prototype={createRegex:function(){var t=p,n=c.escapeRegExpChars(this.opts.delimiter),e=c.escapeRegExpChars(this.opts.openDelimiter),a=c.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,n).replace(/</g,e).replace(/>/g,a),new RegExp(t)},compile:function(){var t,n,e=this.opts,a="",i="",u=e.escapeFunction,h,y=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),a+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!D.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");a+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!D.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var g="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var N=e.destructuredLocals[L];if(!D.test(N))throw new Error("destructuredLocals["+L+"] is not a valid JS identifier.");L>0&&(g+=`,
  `),g+=N+" = __locals."+N}a+=g+`;
`}e._with!==!1&&(a+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=a+this.source+i}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+y+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+u.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+U.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+y+`
`);try{if(e.async)try{h=new Function("return (async function(){}).constructor;")()}catch(v){throw v instanceof SyntaxError?new Error("This environment does not support async/await"):v}else h=Function;n=new h(e.localsName+", escapeFn, include, rethrow",t)}catch(v){throw v instanceof SyntaxError&&(e.filename&&(v.message+=" in "+e.filename),v.message+=` while compiling ejs

`,v.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,v.message+="https://github.com/RyanZim/EJS-Lint",e.async||(v.message+=`
`,v.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),v}var j=e.client?n:function(B){var ee=function(te,J){var I=c.shallowCopy(c.createNullProtoObjWherePossible(),B);return J&&(I=c.shallowCopy(I,J)),K(te,e)(I)};return n.apply(e.context,[B||c.createNullProtoObjWherePossible(),u,ee,U])};if(e.filename&&typeof Object.defineProperty=="function"){var O=e.filename,Y=d.basename(O,d.extname(O));try{Object.defineProperty(j,"name",{value:Y,writable:!1,enumerable:!1,configurable:!0})}catch{}}return j},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var n=this,e=this.parseTemplateText(),a=this.opts.delimiter,i=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(h,y){var g;if(h.indexOf(i+a)===0&&h.indexOf(i+a+a)!==0&&(g=e[y+2],!(g==a+u||g=="-"+a+u||g=="_"+a+u)))throw new Error('Could not find matching close tag for "'+h+'".');n.scanLine(h)})},parseTemplateText:function(){for(var t=this.templateText,n=this.regex,e=n.exec(t),a=[],i;e;)i=e.index,i!==0&&(a.push(t.substring(0,i)),t=t.slice(i)),a.push(e[0]),t=t.slice(e[0].length),e=n.exec(t);return t&&a.push(t),a},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var n=this,e=this.opts.delimiter,a=this.opts.openDelimiter,i=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case a+e:case a+e+"_":this.mode=m.modes.EVAL;break;case a+e+"=":this.mode=m.modes.ESCAPED;break;case a+e+"-":this.mode=m.modes.RAW;break;case a+e+"#":this.mode=m.modes.COMMENT;break;case a+e+e:this.mode=m.modes.LITERAL,this.source+='    ; __append("'+t.replace(a+e+e,a+e)+`")
`;break;case e+e+i:this.mode=m.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==m.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case m.modes.EVAL:case m.modes.ESCAPED:case m.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case m.modes.EVAL:this.source+="    ; "+t+`
`;break;case m.modes.ESCAPED:this.source+="    ; __append(escapeFn("+$(t)+`))
`;break;case m.modes.RAW:this.source+="    ; __append("+$(t)+`)
`;break;case m.modes.COMMENT:break;case m.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}n.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},r.escapeXML=c.escapeXML,r.__express=r.renderFile,r.VERSION=F,r.name=l,typeof window<"u"&&(window.ejs=r)})(G);const He=P({props:{template:{type:String,required:!0},data:{type:Object,required:!0},onError:{type:Function}},setup(r){const f=E("");return k(()=>r.template,async()=>{f.value=await G.render(r.template,r.data,{async:!0}).catch(d=>(r.onError?.(d),console.error(d),f.value))},{immediate:!0}),()=>o("div",{class:"h-full overflow-auto  bg-white"},[o("div",{innerHTML:f.value},null)])}});let R=function(r){return r.Owner="owner",r.Guest="guest",r}({}),Ue=function(r){return r.Newsletter="newsletter",r}({});const $e=P({setup(){const r=E(""),f=E(""),d=E(R.Guest),c=E(null),{setHeaderButtons:b}=ce(),F=async()=>{await M.api.options.email.template.put({params:{type:d.value},data:{source:f.value}}),await _()},S=le(),A=()=>{S.warning({title:"确认重置？",content:"重置后，模板将被恢复为默认模板",async onNegativeClick(){await M.api.options.email.template.delete({params:{type:d.value}}),await _()},onPositiveClick(){},negativeText:"嗯",positiveText:"达咩"})};oe(()=>(b(o(ve,null,[o(X,{icon:o(he,null,null),name:"提交",onClick:F,variant:"success"},null),o(X,{icon:o(pe,null,null),name:"重置自定义模板",onClick:A,variant:"error"},null)])),()=>{b(null)})),ue(()=>{_()});const _=async()=>{const{template:l,props:p}=await M.api.options.email.template.get({params:{type:d.value},transform:!1});r.value=l,f.value=l,c.value=p};k(()=>d.value,_);const s=E(!1);return k(()=>f.value,()=>{s.value=!1}),()=>o("div",null,[o(fe,{class:"w-[300px]"},{default:()=>[o(de,{label:"模板类型",labelPlacement:"left"},{default:()=>[o(me,{value:d.value,onUpdateValue:l=>d.value=l,options:[{label:"回复邮件（访客）",value:R.Guest},{label:"回复邮件（博主）",value:R.Owner},{label:"订阅邮件",value:Ue.Newsletter}]},null)]})]}),o("div",{class:"pb-4"},null),o(ye,null,{default:()=>[o(V,{span:18,class:s.value&&"outline outline-[3px] outline-red-300"},{default:()=>[o(Ee,{onChange:l=>{f.value=l},value:r.value},null)]}),o(V,{span:18,class:"relative h-[calc(100vh-15rem)] "},{default:()=>[o(He,{data:c.value,template:f.value,onError:l=>{s.value=!0}},null)]})]})])}}),Be=P({setup(){return()=>o("div",null,[ge("即将推出")])}}),Xe=P({setup(){const r=E("1");return()=>o(we,null,{default:()=>[o(_e,{value:r.value,size:"medium",onUpdateValue:f=>{r.value=f}},{default:()=>[o(q,{name:"1",tab:"邮件模板"},{default:()=>[o($e,null,null)]}),o(q,{name:"2",tab:"预览 Markdown 模板"},{default:()=>[o(Be,null,null)]})]})]})}});export{Xe as default};
