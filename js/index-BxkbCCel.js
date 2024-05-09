import{d as P,b as E,c7 as ne,d3 as ae,e as l,cg as re,d4 as ie,ci as se,w as k,bd as oe,aq as ce,cd as le,o as ue,R as M,n as fe,V as de,Q as pe,bH as V,H as X,b5 as me,T as he,F as ve,f as ge,aj as _e,ak as q,C as we}from"./index-ucvadmAT.js";import{T as ye}from"./two-col-BITuRWBy.js";const Ee=P({props:{value:{type:String,required:!0},onChange:{type:Function,required:!0}},setup(a){const f=E(),d=ne(a),o=ae(f,d,a.onChange,{language:"html"});return()=>l("div",{class:"relative h-full w-full"},[l("div",{ref:f,class:"relative h-full w-full"},null),!o.loaded.value&&l(re,{description:"Monaco 体积较大耐心等待加载完成..."},null)])}});var G={},z={};(function(a){var f=/[|\\{}()[\]^$+*?.]/g,d=Object.prototype.hasOwnProperty,o=function(s,c){return d.apply(s,[c])};a.escapeRegExpChars=function(s){return s?String(s).replace(f,"\\$&"):""};var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},F=/[&<>'"]/g;function S(s){return b[s]||s}var O=`var _ENCODE_HTML_RULES = {
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
`;a.escapeXML=function(s){return s==null?"":String(s).replace(F,S)};function _(){return Function.prototype.toString.call(this)+`;
`+O}try{typeof Object.defineProperty=="function"?Object.defineProperty(a.escapeXML,"toString",{value:_}):a.escapeXML.toString=_}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}a.shallowCopy=function(s,c){if(c=c||{},s!=null)for(var m in c)o(c,m)&&(m==="__proto__"||m==="constructor"||(s[m]=c[m]));return s},a.shallowCopyFromList=function(s,c,m){if(m=m||[],c=c||{},s!=null)for(var T=0;T<m.length;T++){var w=m[T];if(typeof c[w]<"u"){if(!o(c,w)||w==="__proto__"||w==="constructor")continue;s[w]=c[w]}}return s},a.cache={_data:{},set:function(s,c){this._data[s]=c},get:function(s){return this._data[s]},remove:function(s){delete this._data[s]},reset:function(){this._data={}}},a.hyphenToCamel=function(s){return s.replace(/-[a-z]/g,function(c){return c[1].toUpperCase()})},a.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),a.hasOwnOnlyObject=function(s){var c=a.createNullProtoObjWherePossible();for(var m in s)o(s,m)&&(c[m]=s[m]);return c}})(z);const be="ejs",Le="Embedded JavaScript templates",Te=["template","engine","ejs"],Fe="3.1.10",Se="Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",Oe="Apache-2.0",Ae={ejs:"./bin/cli.js"},Ce="./lib/ejs.js",Ne="ejs.min.js",Pe="ejs.min.js",je={type:"git",url:"git://github.com/mde/ejs.git"},De="https://github.com/mde/ejs/issues",Ie="https://github.com/mde/ejs",Me={jake:"^10.8.5"},Re={browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},ke={node:">=0.10.0"},We={test:"npx jake test"},xe={name:be,description:Le,keywords:Te,version:Fe,author:Se,license:Oe,bin:Ae,main:Ce,jsdelivr:Ne,unpkg:Pe,repository:je,bugs:De,homepage:Ie,dependencies:Me,devDependencies:Re,engines:ke,scripts:We};(function(a){/**
 * @file Embedded JavaScript templating engine. {@link http://ejs.co}
 * @author Matthew Eernisse <mde@fleegix.org>
 * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
 * @project EJS
 * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
 */var f=ie,d=se,o=z,b=!1,F=xe.version,S="<",O=">",_="%",s="locals",c="ejs",m="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",T=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],w=T.concat("cache"),W=/^\uFEFF/,D=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;a.cache=o.cache,a.fileLoader=f.readFileSync,a.localsName=s,a.promiseImpl=new Function("return this;")().Promise,a.resolveInclude=function(t,r,e){var n=d.dirname,i=d.extname,u=d.resolve,h=u(e?r:n(r),t),y=i(t);return y||(h+=".ejs"),h};function x(t,r){var e;if(r.some(function(n){return e=a.resolveInclude(t,n,!0),f.existsSync(e)}))return e}function Z(t,r){var e,n,i=r.views,u=/^[A-Za-z]+:\\|^\//.exec(t);if(u&&u.length)t=t.replace(/^\/*/,""),Array.isArray(r.root)?e=x(t,r.root):e=a.resolveInclude(t,r.root||"/",!0);else if(r.filename&&(n=a.resolveInclude(t,r.filename),f.existsSync(n)&&(e=n)),!e&&Array.isArray(i)&&(e=x(t,i)),!e&&typeof r.includer!="function")throw new Error('Could not find the include file "'+r.escapeFunction(t)+'"');return e}function A(t,r){var e,n=t.filename,i=arguments.length>1;if(t.cache){if(!n)throw new Error("cache option requires a filename");if(e=a.cache.get(n),e)return e;i||(r=H(n).toString().replace(W,""))}else if(!i){if(!n)throw new Error("Internal EJS error: no file name or template provided");r=H(n).toString().replace(W,"")}return e=a.compile(r,t),t.cache&&a.cache.set(n,e),e}function Q(t,r,e){var n;if(e){try{n=A(t)(r)}catch(i){return e(i)}e(null,n)}else{if(typeof a.promiseImpl=="function")return new a.promiseImpl(function(i,u){try{n=A(t)(r),i(n)}catch(h){u(h)}});throw new Error("Please provide a callback function")}}function H(t){return a.fileLoader(t)}function K(t,r){var e=o.shallowCopy(o.createNullProtoObjWherePossible(),r);if(e.filename=Z(t,e),typeof r.includer=="function"){var n=r.includer(t,e.filename);if(n&&(n.filename&&(e.filename=n.filename),n.template))return A(e,n.template)}return A(e)}function U(t,r,e,n,i){var u=r.split(`
`),h=Math.max(n-3,0),y=Math.min(u.length,n+3),g=i(e),L=u.slice(h,y).map(function(C,j){var N=j+h+1;return(N==n?" >> ":"    ")+N+"| "+C}).join(`
`);throw t.path=g,t.message=(g||"ejs")+":"+n+`
`+L+`

`+t.message,t}function $(t){return t.replace(/;(\s*$)/,"$1")}a.compile=function(r,e){var n;return e&&e.scope&&(b||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),b=!0),e.context||(e.context=e.scope),delete e.scope),n=new p(r,e),n.compile()},a.render=function(t,r,e){var n=r||o.createNullProtoObjWherePossible(),i=e||o.createNullProtoObjWherePossible();return arguments.length==2&&o.shallowCopyFromList(i,n,T),A(i,t)(n)},a.renderFile=function(){var t=Array.prototype.slice.call(arguments),r=t.shift(),e,n={filename:r},i,u;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(i=t.shift(),t.length?o.shallowCopy(n,t.pop()):(i.settings&&(i.settings.views&&(n.views=i.settings.views),i.settings["view cache"]&&(n.cache=!0),u=i.settings["view options"],u&&o.shallowCopy(n,u)),o.shallowCopyFromList(n,i,w)),n.filename=r):i=o.createNullProtoObjWherePossible(),Q(n,i,e)},a.Template=p,a.clearCache=function(){a.cache.reset()};function p(t,r){var e=o.hasOwnOnlyObject(r),n=o.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",n.client=e.client||!1,n.escapeFunction=e.escape||e.escapeFunction||o.escapeXML,n.compileDebug=e.compileDebug!==!1,n.debug=!!e.debug,n.filename=e.filename,n.openDelimiter=e.openDelimiter||a.openDelimiter||S,n.closeDelimiter=e.closeDelimiter||a.closeDelimiter||O,n.delimiter=e.delimiter||a.delimiter||_,n.strict=e.strict||!1,n.context=e.context,n.cache=e.cache||!1,n.rmWhitespace=e.rmWhitespace,n.root=e.root,n.includer=e.includer,n.outputFunctionName=e.outputFunctionName,n.localsName=e.localsName||a.localsName||s,n.views=e.views,n.async=e.async,n.destructuredLocals=e.destructuredLocals,n.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,n.strict?n._with=!1:n._with=typeof e._with<"u"?e._with:!0,this.opts=n,this.regex=this.createRegex()}p.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},p.prototype={createRegex:function(){var t=m,r=o.escapeRegExpChars(this.opts.delimiter),e=o.escapeRegExpChars(this.opts.openDelimiter),n=o.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,r).replace(/</g,e).replace(/>/g,n),new RegExp(t)},compile:function(){var t,r,e=this.opts,n="",i="",u=e.escapeFunction,h,y=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),n+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!D.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");n+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!D.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var g="  var __locals = ("+e.localsName+` || {}),
`,L=0;L<e.destructuredLocals.length;L++){var C=e.destructuredLocals[L];if(!D.test(C))throw new Error("destructuredLocals["+L+"] is not a valid JS identifier.");L>0&&(g+=`,
  `),g+=C+" = __locals."+C}n+=g+`;
`}e._with!==!1&&(n+="  with ("+e.localsName+` || {}) {
`,i+=`  }
`),i+=`  return __output;
`,this.source=n+this.source+i}e.compileDebug?t=`var __line = 1
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
`);try{if(e.async)try{h=new Function("return (async function(){}).constructor;")()}catch(v){throw v instanceof SyntaxError?new Error("This environment does not support async/await"):v}else h=Function;r=new h(e.localsName+", escapeFn, include, rethrow",t)}catch(v){throw v instanceof SyntaxError&&(e.filename&&(v.message+=" in "+e.filename),v.message+=` while compiling ejs

`,v.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,v.message+="https://github.com/RyanZim/EJS-Lint",e.async||(v.message+=`
`,v.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),v}var j=e.client?r:function(B){var ee=function(te,J){var I=o.shallowCopy(o.createNullProtoObjWherePossible(),B);return J&&(I=o.shallowCopy(I,J)),K(te,e)(I)};return r.apply(e.context,[B||o.createNullProtoObjWherePossible(),u,ee,U])};if(e.filename&&typeof Object.defineProperty=="function"){var N=e.filename,Y=d.basename(N,d.extname(N));try{Object.defineProperty(j,"name",{value:Y,writable:!1,enumerable:!1,configurable:!0})}catch{}}return j},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var r=this,e=this.parseTemplateText(),n=this.opts.delimiter,i=this.opts.openDelimiter,u=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(h,y){var g;if(h.indexOf(i+n)===0&&h.indexOf(i+n+n)!==0&&(g=e[y+2],!(g==n+u||g=="-"+n+u||g=="_"+n+u)))throw new Error('Could not find matching close tag for "'+h+'".');r.scanLine(h)})},parseTemplateText:function(){for(var t=this.templateText,r=this.regex,e=r.exec(t),n=[],i;e;)i=e.index,i!==0&&(n.push(t.substring(0,i)),t=t.slice(i)),n.push(e[0]),t=t.slice(e[0].length),e=r.exec(t);return t&&n.push(t),n},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var r=this,e=this.opts.delimiter,n=this.opts.openDelimiter,i=this.opts.closeDelimiter,u=0;switch(u=t.split(`
`).length-1,t){case n+e:case n+e+"_":this.mode=p.modes.EVAL;break;case n+e+"=":this.mode=p.modes.ESCAPED;break;case n+e+"-":this.mode=p.modes.RAW;break;case n+e+"#":this.mode=p.modes.COMMENT;break;case n+e+e:this.mode=p.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+e+e,n+e)+`")
`;break;case e+e+i:this.mode=p.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+i,e+i)+`")
`;break;case e+i:case"-"+e+i:case"_"+e+i:this.mode==p.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case p.modes.EVAL:case p.modes.ESCAPED:case p.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case p.modes.EVAL:this.source+="    ; "+t+`
`;break;case p.modes.ESCAPED:this.source+="    ; __append(escapeFn("+$(t)+`))
`;break;case p.modes.RAW:this.source+="    ; __append("+$(t)+`)
`;break;case p.modes.COMMENT:break;case p.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}r.opts.compileDebug&&u&&(this.currentLine+=u,this.source+="    ; __line = "+this.currentLine+`
`)}},a.escapeXML=o.escapeXML,a.__express=a.renderFile,a.VERSION=F,a.name=c,typeof window<"u"&&(window.ejs=a)})(G);const He=P({props:{template:{type:String,required:!0},data:{type:Object,required:!0},onError:{type:Function}},setup(a){const f=E("");return k(()=>a.template,async()=>{f.value=await G.render(a.template,a.data,{async:!0}).catch(d=>(a.onError?.(d),console.error(d),f.value))},{immediate:!0}),()=>l("div",{class:"h-full overflow-auto  bg-white"},[l("div",{innerHTML:f.value},null)])}});let R=function(a){return a.Owner="owner",a.Guest="guest",a}({}),Ue=function(a){return a.Newsletter="newsletter",a}({});const $e=P({setup(){const a=E(""),f=E(""),d=E(R.Guest),o=E(null),{setHeaderButtons:b}=oe(),F=async()=>{await M.api.options.email.template.put({params:{type:d.value},data:{source:f.value}}),await _()},S=ce(),O=()=>{S.warning({title:"确认重置？",content:"重置后，模板将被恢复为默认模板",async onNegativeClick(){await M.api.options.email.template.delete({params:{type:d.value}}),await _()},onPositiveClick(){},negativeText:"嗯",positiveText:"达咩"})};le(()=>(b(l(ve,null,[l(X,{icon:l(me,null,null),name:"提交",onClick:F,variant:"success"},null),l(X,{icon:l(he,null,null),name:"重置自定义模板",onClick:O,variant:"error"},null)])),()=>{b(null)})),ue(()=>{_()});const _=async()=>{const{template:c,props:m}=await M.api.options.email.template.get({params:{type:d.value},transform:!1});a.value=c,f.value=c,o.value=m};k(()=>d.value,_);const s=E(!1);return k(()=>f.value,()=>{s.value=!1}),()=>l("div",null,[l(fe,{class:"w-[300px]"},{default:()=>[l(de,{label:"模板类型",labelPlacement:"left"},{default:()=>[l(pe,{value:d.value,onUpdateValue:c=>d.value=c,options:[{label:"回复邮件（访客）",value:R.Guest},{label:"回复邮件（博主）",value:R.Owner},{label:"订阅邮件",value:Ue.Newsletter}]},null)]})]}),l("div",{class:"pb-4"},null),l(ye,null,{default:()=>[l(V,{span:18,class:s.value&&"outline outline-[3px] outline-red-300"},{default:()=>[l(Ee,{onChange:c=>{f.value=c},value:a.value},null)]}),l(V,{span:18,class:"relative h-[calc(100vh-15rem)] "},{default:()=>[l(He,{data:o.value,template:f.value,onError:c=>{s.value=!0}},null)]})]})])}}),Be=P({setup(){return()=>l("div",null,[ge("即将推出")])}}),Xe=P({setup(){const a=E("1");return()=>l(we,null,{default:()=>[l(_e,{value:a.value,size:"medium",onUpdateValue:f=>{a.value=f}},{default:()=>[l(q,{name:"1",tab:"邮件模板"},{default:()=>[l($e,null,null)]}),l(q,{name:"2",tab:"预览 Markdown 模板"},{default:()=>[l(Be,null,null)]})]})]})}});export{Xe as default};
