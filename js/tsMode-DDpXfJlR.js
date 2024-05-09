import{eg as L,ef as O}from"./index-ucvadmAT.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.47.0(69991d66135e4a1fc1cf0b1ac4ad25d429866a0d)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var I=Object.defineProperty,N=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,K=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of M(t))!R.call(e,i)&&i!==r&&I(e,i,{get:()=>t[i],enumerable:!(o=N(t,i))||o.enumerable});return e},E=(e,t,r)=>(K(e,t,"default"),r),a={};E(a,O);var H=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(a.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},n={};n["lib.d.ts"]=!0;n["lib.decorators.d.ts"]=!0;n["lib.decorators.legacy.d.ts"]=!0;n["lib.dom.d.ts"]=!0;n["lib.dom.iterable.d.ts"]=!0;n["lib.es2015.collection.d.ts"]=!0;n["lib.es2015.core.d.ts"]=!0;n["lib.es2015.d.ts"]=!0;n["lib.es2015.generator.d.ts"]=!0;n["lib.es2015.iterable.d.ts"]=!0;n["lib.es2015.promise.d.ts"]=!0;n["lib.es2015.proxy.d.ts"]=!0;n["lib.es2015.reflect.d.ts"]=!0;n["lib.es2015.symbol.d.ts"]=!0;n["lib.es2015.symbol.wellknown.d.ts"]=!0;n["lib.es2016.array.include.d.ts"]=!0;n["lib.es2016.d.ts"]=!0;n["lib.es2016.full.d.ts"]=!0;n["lib.es2017.d.ts"]=!0;n["lib.es2017.full.d.ts"]=!0;n["lib.es2017.intl.d.ts"]=!0;n["lib.es2017.object.d.ts"]=!0;n["lib.es2017.sharedmemory.d.ts"]=!0;n["lib.es2017.string.d.ts"]=!0;n["lib.es2017.typedarrays.d.ts"]=!0;n["lib.es2018.asyncgenerator.d.ts"]=!0;n["lib.es2018.asynciterable.d.ts"]=!0;n["lib.es2018.d.ts"]=!0;n["lib.es2018.full.d.ts"]=!0;n["lib.es2018.intl.d.ts"]=!0;n["lib.es2018.promise.d.ts"]=!0;n["lib.es2018.regexp.d.ts"]=!0;n["lib.es2019.array.d.ts"]=!0;n["lib.es2019.d.ts"]=!0;n["lib.es2019.full.d.ts"]=!0;n["lib.es2019.intl.d.ts"]=!0;n["lib.es2019.object.d.ts"]=!0;n["lib.es2019.string.d.ts"]=!0;n["lib.es2019.symbol.d.ts"]=!0;n["lib.es2020.bigint.d.ts"]=!0;n["lib.es2020.d.ts"]=!0;n["lib.es2020.date.d.ts"]=!0;n["lib.es2020.full.d.ts"]=!0;n["lib.es2020.intl.d.ts"]=!0;n["lib.es2020.number.d.ts"]=!0;n["lib.es2020.promise.d.ts"]=!0;n["lib.es2020.sharedmemory.d.ts"]=!0;n["lib.es2020.string.d.ts"]=!0;n["lib.es2020.symbol.wellknown.d.ts"]=!0;n["lib.es2021.d.ts"]=!0;n["lib.es2021.full.d.ts"]=!0;n["lib.es2021.intl.d.ts"]=!0;n["lib.es2021.promise.d.ts"]=!0;n["lib.es2021.string.d.ts"]=!0;n["lib.es2021.weakref.d.ts"]=!0;n["lib.es2022.array.d.ts"]=!0;n["lib.es2022.d.ts"]=!0;n["lib.es2022.error.d.ts"]=!0;n["lib.es2022.full.d.ts"]=!0;n["lib.es2022.intl.d.ts"]=!0;n["lib.es2022.object.d.ts"]=!0;n["lib.es2022.regexp.d.ts"]=!0;n["lib.es2022.sharedmemory.d.ts"]=!0;n["lib.es2022.string.d.ts"]=!0;n["lib.es2023.array.d.ts"]=!0;n["lib.es2023.d.ts"]=!0;n["lib.es2023.full.d.ts"]=!0;n["lib.es5.d.ts"]=!0;n["lib.es6.d.ts"]=!0;n["lib.esnext.d.ts"]=!0;n["lib.esnext.full.d.ts"]=!0;n["lib.esnext.intl.d.ts"]=!0;n["lib.scripthost.d.ts"]=!0;n["lib.webworker.d.ts"]=!0;n["lib.webworker.importscripts.d.ts"]=!0;n["lib.webworker.iterable.d.ts"]=!0;function C(e,t,r=0){if(typeof e=="string")return e;if(e===void 0)return"";let o="";if(r){o+=t;for(let i=0;i<r;i++)o+="  "}if(o+=e.messageText,r++,e.next)for(const i of e.next)o+=C(i,t,r);return o}function _(e){return e?e.map(t=>t.text).join(""):""}var m=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let r=e.getPositionAt(t.start),o=e.getPositionAt(t.start+t.length),{lineNumber:i,column:l}=r,{lineNumber:u,column:s}=o;return{startLineNumber:i,startColumn:l,endLineNumber:u,endColumn:s}}},V=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!n[e.path.slice(1)]:!1}getOrCreateModel(e){const t=a.Uri.parse(e),r=a.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const o=L.getExtraLibs()[e];return o?a.editor.createModel(o.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},W=class extends m{constructor(e,t,r,o){super(o),this._libFiles=e,this._defaults=t,this._selector=r,this._disposables=[],this._listener=Object.create(null);const i=s=>{if(s.getLanguageId()!==r)return;const c=()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f?s.isAttachedToEditor()&&this._doValidate(s):this._doValidate(s)};let g;const d=s.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(c,500)}),h=s.onDidChangeAttached(()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f&&(s.isAttachedToEditor()?c():a.editor.setModelMarkers(s,this._selector,[]))});this._listener[s.uri.toString()]={dispose(){d.dispose(),h.dispose(),clearTimeout(g)}},c()},l=s=>{a.editor.setModelMarkers(s,this._selector,[]);const c=s.uri.toString();this._listener[c]&&(this._listener[c].dispose(),delete this._listener[c])};this._disposables.push(a.editor.onDidCreateModel(s=>i(s))),this._disposables.push(a.editor.onWillDisposeModel(l)),this._disposables.push(a.editor.onDidChangeModelLanguage(s=>{l(s.model),i(s.model)})),this._disposables.push({dispose(){for(const s of a.editor.getModels())l(s)}});const u=()=>{for(const s of a.editor.getModels())l(s),i(s)};this._disposables.push(this._defaults.onDidChange(u)),this._disposables.push(this._defaults.onDidExtraLibsChange(u)),a.editor.getModels().forEach(s=>i(s))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const r=[],{noSyntaxValidation:o,noSemanticValidation:i,noSuggestionDiagnostics:l}=this._defaults.getDiagnosticsOptions();o||r.push(t.getSyntacticDiagnostics(e.uri.toString())),i||r.push(t.getSemanticDiagnostics(e.uri.toString())),l||r.push(t.getSuggestionDiagnostics(e.uri.toString()));const u=await Promise.all(r);if(!u||e.isDisposed())return;const s=u.reduce((g,d)=>d.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),c=s.map(g=>g.relatedInformation||[]).reduce((g,d)=>d.concat(g),[]).map(g=>g.file?a.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(c),!e.isDisposed()&&a.editor.setModelMarkers(e,this._selector,s.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const r=t.start||0,o=t.length||1,{lineNumber:i,column:l}=e.getPositionAt(r),{lineNumber:u,column:s}=e.getPositionAt(r+o),c=[];return t.reportsUnnecessary&&c.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:i,startColumn:l,endLineNumber:u,endColumn:s,message:C(t.messageText,`
`),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const r=[];return t.forEach(o=>{let i=e;if(o.file&&(i=this._libFiles.getOrCreateModel(o.file.fileName)),!i)return;const l=o.start||0,u=o.length||1,{lineNumber:s,column:c}=i.getPositionAt(l),{lineNumber:g,column:d}=i.getPositionAt(l+u);r.push({resource:i.uri,startLineNumber:s,startColumn:c,endLineNumber:g,endColumn:d,message:C(o.messageText,`
`)})}),r}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},j=class x extends m{get triggerCharacters(){return["."]}async provideCompletionItems(t,r,o,i){const l=t.getWordUntilPosition(r),u=new a.Range(r.lineNumber,l.startColumn,r.lineNumber,l.endColumn),s=t.uri,c=t.getOffsetAt(r),g=await this._worker(s);if(t.isDisposed())return;const d=await g.getCompletionsAtPosition(s.toString(),c);return!d||t.isDisposed()?void 0:{suggestions:d.entries.map(f=>{let w=u;if(f.replacementSpan){const k=t.getPositionAt(f.replacementSpan.start),v=t.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);w=new a.Range(k.lineNumber,k.column,v.lineNumber,v.column)}const S=[];return f.kindModifiers!==void 0&&f.kindModifiers.indexOf("deprecated")!==-1&&S.push(a.languages.CompletionItemTag.Deprecated),{uri:s,position:r,offset:c,range:w,label:f.name,insertText:f.name,sortText:f.sortText,kind:x.convertKind(f.kind),tags:S}})}}async resolveCompletionItem(t,r){const o=t,i=o.uri,l=o.position,u=o.offset,c=await(await this._worker(i)).getCompletionEntryDetails(i.toString(),u,o.label);return c?{uri:i,position:l,label:c.name,kind:x.convertKind(c.kind),detail:_(c.displayParts),documentation:{value:x.createDocumentationString(c)}}:o}static convertKind(t){switch(t){case p.primitiveType:case p.keyword:return a.languages.CompletionItemKind.Keyword;case p.variable:case p.localVariable:return a.languages.CompletionItemKind.Variable;case p.memberVariable:case p.memberGetAccessor:case p.memberSetAccessor:return a.languages.CompletionItemKind.Field;case p.function:case p.memberFunction:case p.constructSignature:case p.callSignature:case p.indexSignature:return a.languages.CompletionItemKind.Function;case p.enum:return a.languages.CompletionItemKind.Enum;case p.module:return a.languages.CompletionItemKind.Module;case p.class:return a.languages.CompletionItemKind.Class;case p.interface:return a.languages.CompletionItemKind.Interface;case p.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(t){let r=_(t.documentation);if(t.tags)for(const o of t.tags)r+=`

${F(o)}`;return r}};function F(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[r,...o]=e.text;t+=`\`${r.text}\``,o.length>0&&(t+=` — ${o.map(i=>i.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(r=>r.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var B=class T extends m{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,r,o,i){const l=t.uri,u=t.getOffsetAt(r),s=await this._worker(l);if(t.isDisposed())return;const c=await s.getSignatureHelpItems(l.toString(),u,{triggerReason:T._toSignatureHelpTriggerReason(i)});if(!c||t.isDisposed())return;const g={activeSignature:c.selectedItemIndex,activeParameter:c.argumentIndex,signatures:[]};return c.items.forEach(d=>{const h={label:"",parameters:[]};h.documentation={value:_(d.documentation)},h.label+=_(d.prefixDisplayParts),d.parameters.forEach((f,w,S)=>{const k=_(f.displayParts),v={label:k,documentation:{value:_(f.documentation)}};h.label+=k,h.parameters.push(v),w<S.length-1&&(h.label+=_(d.separatorDisplayParts))}),h.label+=_(d.suffixDisplayParts),g.signatures.push(h)}),{value:g,dispose(){}}}},U=class extends m{async provideHover(e,t,r){const o=e.uri,i=e.getOffsetAt(t),l=await this._worker(o);if(e.isDisposed())return;const u=await l.getQuickInfoAtPosition(o.toString(),i);if(!u||e.isDisposed())return;const s=_(u.documentation),c=u.tags?u.tags.map(d=>F(d)).join(`  

`):"",g=_(u.displayParts);return{range:this._textSpanToRange(e,u.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:s+(c?`

`+c:"")}]}}},$=class extends m{async provideDocumentHighlights(e,t,r){const o=e.uri,i=e.getOffsetAt(t),l=await this._worker(o);if(e.isDisposed())return;const u=await l.getDocumentHighlights(o.toString(),i,[o.toString()]);if(!(!u||e.isDisposed()))return u.flatMap(s=>s.highlightSpans.map(c=>({range:this._textSpanToRange(e,c.textSpan),kind:c.kind==="writtenReference"?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text})))}},z=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,r){const o=e.uri,i=e.getOffsetAt(t),l=await this._worker(o);if(e.isDisposed())return;const u=await l.getDefinitionAtPosition(o.toString(),i);if(!u||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(u.map(c=>a.Uri.parse(c.fileName))),e.isDisposed()))return;const s=[];for(let c of u){const g=this._libFiles.getOrCreateModel(c.fileName);g&&s.push({uri:g.uri,range:this._textSpanToRange(g,c.textSpan)})}return s}},G=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,r,o){const i=e.uri,l=e.getOffsetAt(t),u=await this._worker(i);if(e.isDisposed())return;const s=await u.getReferencesAtPosition(i.toString(),l);if(!s||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(s.map(g=>a.Uri.parse(g.fileName))),e.isDisposed()))return;const c=[];for(let g of s){const d=this._libFiles.getOrCreateModel(g.fileName);d&&c.push({uri:d.uri,range:this._textSpanToRange(d,g.textSpan)})}return c}},J=class extends m{async provideDocumentSymbols(e,t){const r=e.uri,o=await this._worker(r);if(e.isDisposed())return;const i=await o.getNavigationTree(r.toString());if(!i||e.isDisposed())return;const l=(s,c)=>({name:s.text,detail:"",kind:b[s.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,s.spans[0]),selectionRange:this._textSpanToRange(e,s.spans[0]),tags:[],children:s.childItems?.map(d=>l(d,s.text)),containerName:c});return i.childItems?i.childItems.map(s=>l(s)):[]}},p=class{static{this.unknown=""}static{this.keyword="keyword"}static{this.script="script"}static{this.module="module"}static{this.class="class"}static{this.interface="interface"}static{this.type="type"}static{this.enum="enum"}static{this.variable="var"}static{this.localVariable="local var"}static{this.function="function"}static{this.localFunction="local function"}static{this.memberFunction="method"}static{this.memberGetAccessor="getter"}static{this.memberSetAccessor="setter"}static{this.memberVariable="property"}static{this.constructorImplementation="constructor"}static{this.callSignature="call"}static{this.indexSignature="index"}static{this.constructSignature="construct"}static{this.parameter="parameter"}static{this.typeParameter="type parameter"}static{this.primitiveType="primitive type"}static{this.label="label"}static{this.alias="alias"}static{this.const="const"}static{this.let="let"}static{this.warning="warning"}},b=Object.create(null);b[p.module]=a.languages.SymbolKind.Module;b[p.class]=a.languages.SymbolKind.Class;b[p.enum]=a.languages.SymbolKind.Enum;b[p.interface]=a.languages.SymbolKind.Interface;b[p.memberFunction]=a.languages.SymbolKind.Method;b[p.memberVariable]=a.languages.SymbolKind.Property;b[p.memberGetAccessor]=a.languages.SymbolKind.Property;b[p.memberSetAccessor]=a.languages.SymbolKind.Property;b[p.variable]=a.languages.SymbolKind.Variable;b[p.const]=a.languages.SymbolKind.Variable;b[p.localVariable]=a.languages.SymbolKind.Variable;b[p.variable]=a.languages.SymbolKind.Variable;b[p.function]=a.languages.SymbolKind.Function;b[p.localFunction]=a.languages.SymbolKind.Function;var y=class extends m{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},Q=class extends y{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,r,o){const i=e.uri,l=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(i);if(e.isDisposed())return;const c=await s.getFormattingEditsForRange(i.toString(),l,u,y._convertOptions(r));if(!(!c||e.isDisposed()))return c.map(g=>this._convertTextChanges(e,g))}},q=class extends y{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,r,o,i){const l=e.uri,u=e.getOffsetAt(t),s=await this._worker(l);if(e.isDisposed())return;const c=await s.getFormattingEditsAfterKeystroke(l.toString(),u,r,y._convertOptions(o));if(!(!c||e.isDisposed()))return c.map(g=>this._convertTextChanges(e,g))}},X=class extends y{async provideCodeActions(e,t,r,o){const i=e.uri,l=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=y._convertOptions(e.getOptions()),c=r.markers.filter(f=>f.code).map(f=>f.code).map(Number),g=await this._worker(i);if(e.isDisposed())return;const d=await g.getCodeFixesAtPosition(i.toString(),l,u,c,s);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter(f=>f.changes.filter(w=>w.isNewFile).length===0).map(f=>this._tsCodeFixActionToMonacoCodeAction(e,r,f)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,r){const o=[];for(const l of r.changes)for(const u of l.textChanges)o.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.span),text:u.newText}});return{title:r.description,edit:{edits:o},diagnostics:t.markers,kind:"quickfix"}}},Y=class extends m{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,r,o){const i=e.uri,l=i.toString(),u=e.getOffsetAt(t),s=await this._worker(i);if(e.isDisposed())return;const c=await s.getRenameInfo(l,u,{allowRenameOfImportPath:!1});if(c.canRename===!1)return{edits:[],rejectReason:c.localizedErrorMessage};if(c.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await s.findRenameLocations(l,u,!1,!1,!1);if(!g||e.isDisposed())return;const d=[];for(const h of g){const f=this._libFiles.getOrCreateModel(h.fileName);if(f)d.push({resource:f.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(f,h.textSpan),text:r}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:d}}},Z=class extends m{async provideInlayHints(e,t,r){const o=e.uri,i=o.toString(),l=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(o);return e.isDisposed()?null:{hints:(await s.provideInlayHints(i,l,u)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return a.languages.InlayHintKind.Parameter;case"Type":return a.languages.InlayHintKind.Type;default:return a.languages.InlayHintKind.Type}}},D,A;function se(e){A=P(e,"typescript")}function re(e){D=P(e,"javascript")}function ie(){return new Promise((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)})}function ne(){return new Promise((e,t)=>{if(!A)return t("TypeScript not registered!");e(A)})}function P(e,t){const r=[],o=new H(t,e),i=(...s)=>o.getLanguageServiceWorker(...s),l=new V(i);function u(){const{modeConfiguration:s}=e;ee(r),s.completionItems&&r.push(a.languages.registerCompletionItemProvider(t,new j(i))),s.signatureHelp&&r.push(a.languages.registerSignatureHelpProvider(t,new B(i))),s.hovers&&r.push(a.languages.registerHoverProvider(t,new U(i))),s.documentHighlights&&r.push(a.languages.registerDocumentHighlightProvider(t,new $(i))),s.definitions&&r.push(a.languages.registerDefinitionProvider(t,new z(l,i))),s.references&&r.push(a.languages.registerReferenceProvider(t,new G(l,i))),s.documentSymbols&&r.push(a.languages.registerDocumentSymbolProvider(t,new J(i))),s.rename&&r.push(a.languages.registerRenameProvider(t,new Y(l,i))),s.documentRangeFormattingEdits&&r.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new Q(i))),s.onTypeFormattingEdits&&r.push(a.languages.registerOnTypeFormattingEditProvider(t,new q(i))),s.codeActions&&r.push(a.languages.registerCodeActionProvider(t,new X(i))),s.inlayHints&&r.push(a.languages.registerInlayHintsProvider(t,new Z(i))),s.diagnostics&&r.push(new W(l,e,t,i))}return u(),i}function ee(e){for(;e.length;)e.pop().dispose()}export{m as Adapter,X as CodeActionAdaptor,z as DefinitionAdapter,W as DiagnosticsAdapter,$ as DocumentHighlightAdapter,Q as FormatAdapter,y as FormatHelper,q as FormatOnTypeAdapter,Z as InlayHintsAdapter,p as Kind,V as LibFiles,J as OutlineAdapter,U as QuickInfoAdapter,G as ReferenceAdapter,Y as RenameAdapter,B as SignatureHelpAdapter,j as SuggestAdapter,H as WorkerManager,C as flattenDiagnosticMessageText,ie as getJavaScriptWorker,ne as getTypeScriptWorker,re as setupJavaScript,se as setupTypeScript};
