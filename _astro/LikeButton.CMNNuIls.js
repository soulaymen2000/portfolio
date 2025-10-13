import{j as De}from"./jsx-runtime.D_zvdyIk.js";import{r as Kt}from"./index.RH_Wq4ov.js";const ua=()=>{};var qs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=function(s){const t=[];let e=0;for(let r=0;r<s.length;r++){let i=s.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(s.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},ca=function(s){const t=[];let e=0,r=0;for(;e<s.length;){const i=s[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=s[e++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=s[e++],u=s[e++],h=s[e++],m=((i&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(m>>10)),t[r++]=String.fromCharCode(56320+(m&1023))}else{const a=s[e++],u=s[e++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|u&63)}}return t.join("")},Fi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<s.length;i+=3){const a=s[i],u=i+1<s.length,h=u?s[i+1]:0,m=i+2<s.length,_=m?s[i+2]:0,I=a>>2,w=(a&3)<<4|h>>4;let C=(h&15)<<2|_>>6,V=_&63;m||(V=64,u||(C=64)),r.push(e[I],e[w],e[C],e[V])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Li(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):ca(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<s.length;){const a=e[s.charAt(i++)],h=i<s.length?e[s.charAt(i)]:0;++i;const _=i<s.length?e[s.charAt(i)]:64;++i;const w=i<s.length?e[s.charAt(i)]:64;if(++i,a==null||h==null||_==null||w==null)throw new ha;const C=a<<2|h>>4;if(r.push(C),_!==64){const V=h<<4&240|_>>2;if(r.push(V),w!==64){const x=_<<6&192|w;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class ha extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fa=function(s){const t=Li(s);return Fi.encodeByteArray(t,!0)},Ui=function(s){return fa(s).replace(/\./g,"")},da=function(s){try{return Fi.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=()=>pa().__FIREBASE_DEFAULTS__,ga=()=>{if(typeof process>"u"||typeof qs>"u")return;const s=qs.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},_a=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&da(s[1]);return t&&JSON.parse(t)},ya=()=>{try{return ua()||ma()||ga()||_a()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function va(){const s=ya()?.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Aa(){return!va()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ia(){try{return typeof indexedDB=="object"}catch{return!1}}function wa(){return new Promise((s,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),s(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="FirebaseError";class fe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ra,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bi.prototype.create)}}class Bi{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,a=this.errors[t],u=a?Sa(a,r):"Error",h=`${this.serviceName}: ${u} (${i}).`;return new fe(i,h,r)}}function Sa(s,t){return s.replace(Pa,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Pa=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(L||(L={}));const Ca={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Va=L.INFO,ba={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Da=(s,t,...e)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),i=ba[t];if(i)console[i](`[${r}]  ${s.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ji{constructor(t){this.name=t,this._logLevel=Va,this._logHandler=Da,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ca[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Na=(s,t)=>t.some(e=>s instanceof e);let Gs,Hs;function Oa(){return Gs||(Gs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ka(){return Hs||(Hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $i=new WeakMap,ar=new WeakMap,qi=new WeakMap,Zn=new WeakMap,Ar=new WeakMap;function xa(s){const t=new Promise((e,r)=>{const i=()=>{s.removeEventListener("success",a),s.removeEventListener("error",u)},a=()=>{e(Ft(s.result)),i()},u=()=>{r(s.error),i()};s.addEventListener("success",a),s.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&$i.set(e,s)}).catch(()=>{}),Ar.set(t,s),t}function Ma(s){if(ar.has(s))return;const t=new Promise((e,r)=>{const i=()=>{s.removeEventListener("complete",a),s.removeEventListener("error",u),s.removeEventListener("abort",u)},a=()=>{e(),i()},u=()=>{r(s.error||new DOMException("AbortError","AbortError")),i()};s.addEventListener("complete",a),s.addEventListener("error",u),s.addEventListener("abort",u)});ar.set(s,t)}let lr={get(s,t,e){if(s instanceof IDBTransaction){if(t==="done")return ar.get(s);if(t==="objectStoreNames")return s.objectStoreNames||qi.get(s);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ft(s[t])},set(s,t,e){return s[t]=e,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function La(s){lr=s(lr)}function Fa(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=s.call(tr(this),t,...e);return qi.set(r,t.sort?t.sort():[t]),Ft(r)}:ka().includes(s)?function(...t){return s.apply(tr(this),t),Ft($i.get(this))}:function(...t){return Ft(s.apply(tr(this),t))}}function Ua(s){return typeof s=="function"?Fa(s):(s instanceof IDBTransaction&&Ma(s),Na(s,Oa())?new Proxy(s,lr):s)}function Ft(s){if(s instanceof IDBRequest)return xa(s);if(Zn.has(s))return Zn.get(s);const t=Ua(s);return t!==s&&(Zn.set(s,t),Ar.set(t,s)),t}const tr=s=>Ar.get(s);function Ba(s,t,{blocked:e,upgrade:r,blocking:i,terminated:a}={}){const u=indexedDB.open(s,t),h=Ft(u);return r&&u.addEventListener("upgradeneeded",m=>{r(Ft(u.result),m.oldVersion,m.newVersion,Ft(u.transaction),m)}),e&&u.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),h.then(m=>{a&&m.addEventListener("close",()=>a()),i&&m.addEventListener("versionchange",_=>i(_.oldVersion,_.newVersion,_))}).catch(()=>{}),h}const ja=["get","getKey","getAll","getAllKeys","count"],$a=["put","add","delete","clear"],er=new Map;function zs(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(er.get(t))return er.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=$a.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ja.includes(e)))return;const a=async function(u,...h){const m=this.transaction(u,i?"readwrite":"readonly");let _=m.store;return r&&(_=_.index(h.shift())),(await Promise.all([_[e](...h),i&&m.done]))[0]};return er.set(t,a),a}La(s=>({...s,get:(t,e,r)=>zs(t,e)||s.get(t,e,r),has:(t,e)=>!!zs(t,e)||s.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ga(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ga(s){return s.getComponent()?.type==="VERSION"}const ur="@firebase/app",Ks="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new ji("@firebase/app"),Ha="@firebase/app-compat",za="@firebase/analytics-compat",Ka="@firebase/analytics",Wa="@firebase/app-check-compat",Qa="@firebase/app-check",Xa="@firebase/auth",Ja="@firebase/auth-compat",Ya="@firebase/database",Za="@firebase/data-connect",tl="@firebase/database-compat",el="@firebase/functions",nl="@firebase/functions-compat",rl="@firebase/installations",sl="@firebase/installations-compat",il="@firebase/messaging",ol="@firebase/messaging-compat",al="@firebase/performance",ll="@firebase/performance-compat",ul="@firebase/remote-config",cl="@firebase/remote-config-compat",hl="@firebase/storage",fl="@firebase/storage-compat",dl="@firebase/firestore",pl="@firebase/ai",ml="@firebase/firestore-compat",gl="firebase",_l="12.4.0",yl={[ur]:"fire-core",[Ha]:"fire-core-compat",[Ka]:"fire-analytics",[za]:"fire-analytics-compat",[Qa]:"fire-app-check",[Wa]:"fire-app-check-compat",[Xa]:"fire-auth",[Ja]:"fire-auth-compat",[Ya]:"fire-rtdb",[Za]:"fire-data-connect",[tl]:"fire-rtdb-compat",[el]:"fire-fn",[nl]:"fire-fn-compat",[rl]:"fire-iid",[sl]:"fire-iid-compat",[il]:"fire-fcm",[ol]:"fire-fcm-compat",[al]:"fire-perf",[ll]:"fire-perf-compat",[ul]:"fire-rc",[cl]:"fire-rc-compat",[hl]:"fire-gcs",[fl]:"fire-gcs-compat",[dl]:"fire-fst",[ml]:"fire-fst-compat",[pl]:"fire-vertex","fire-js":"fire-js",[gl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Map,Tl=new Map,Ws=new Map;function Qs(s,t){try{s.container.addComponent(t)}catch(e){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,e)}}function yn(s){const t=s.name;if(Ws.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;Ws.set(t,s);for(const e of El.values())Qs(e,s);for(const e of Tl.values())Qs(e,s);return!0}function vl(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Bi("app","Firebase",Al);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=_l;function ie(s,t,e){let r=yl[s]??s;e&&(r+=`-${e}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const u=[`Unable to register library "${r}" with version "${t}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(u.join(" "));return}yn(new _n(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="firebase-heartbeat-database",Rl=1,je="firebase-heartbeat-store";let nr=null;function Gi(){return nr||(nr=Ba(wl,Rl,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(je)}catch(e){console.warn(e)}}}}).catch(s=>{throw Ir.create("idb-open",{originalErrorMessage:s.message})})),nr}async function Sl(s){try{const e=(await Gi()).transaction(je),r=await e.objectStore(je).get(Hi(s));return await e.done,r}catch(t){if(t instanceof fe)bt.warn(t.message);else{const e=Ir.create("idb-get",{originalErrorMessage:t?.message});bt.warn(e.message)}}}async function Xs(s,t){try{const r=(await Gi()).transaction(je,"readwrite");await r.objectStore(je).put(t,Hi(s)),await r.done}catch(e){if(e instanceof fe)bt.warn(e.message);else{const r=Ir.create("idb-set",{originalErrorMessage:e?.message});bt.warn(r.message)}}}function Hi(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=1024,Cl=30;class Vl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Js();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Cl){const i=Nl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){bt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Js(),{heartbeatsToSend:e,unsentEntries:r}=bl(this._heartbeatsCache.heartbeats),i=Ui(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}}function Js(){return new Date().toISOString().substring(0,10)}function bl(s,t=Pl){const e=[];let r=s.slice();for(const i of s){const a=e.find(u=>u.agent===i.agent);if(a){if(a.dates.push(i.date),Ys(e)>t){a.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Ys(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ia()?wa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sl(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ys(s){return Ui(JSON.stringify({version:2,heartbeats:s})).length}function Nl(s){if(s.length===0)return-1;let t=0,e=s[0].date;for(let r=1;r<s.length;r++)s[r].date<e&&(e=s[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(s){yn(new _n("platform-logger",t=>new qa(t),"PRIVATE")),yn(new _n("heartbeat",t=>new Vl(t),"PRIVATE")),ie(ur,Ks,s),ie(ur,Ks,"esm2020"),ie("fire-js","")}Ol("");var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,f){function p(){}p.prototype=f.prototype,y.F=f.prototype,y.prototype=new p,y.prototype.constructor=y,y.D=function(E,g,v){for(var d=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)d[ht-2]=arguments[ht];return f.prototype[g].apply(E,d)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,f,p){p||(p=0);const E=Array(16);if(typeof f=="string")for(var g=0;g<16;++g)E[g]=f.charCodeAt(p++)|f.charCodeAt(p++)<<8|f.charCodeAt(p++)<<16|f.charCodeAt(p++)<<24;else for(g=0;g<16;++g)E[g]=f[p++]|f[p++]<<8|f[p++]<<16|f[p++]<<24;f=y.g[0],p=y.g[1],g=y.g[2];let v=y.g[3],d;d=f+(v^p&(g^v))+E[0]+3614090360&4294967295,f=p+(d<<7&4294967295|d>>>25),d=v+(g^f&(p^g))+E[1]+3905402710&4294967295,v=f+(d<<12&4294967295|d>>>20),d=g+(p^v&(f^p))+E[2]+606105819&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(f^g&(v^f))+E[3]+3250441966&4294967295,p=g+(d<<22&4294967295|d>>>10),d=f+(v^p&(g^v))+E[4]+4118548399&4294967295,f=p+(d<<7&4294967295|d>>>25),d=v+(g^f&(p^g))+E[5]+1200080426&4294967295,v=f+(d<<12&4294967295|d>>>20),d=g+(p^v&(f^p))+E[6]+2821735955&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(f^g&(v^f))+E[7]+4249261313&4294967295,p=g+(d<<22&4294967295|d>>>10),d=f+(v^p&(g^v))+E[8]+1770035416&4294967295,f=p+(d<<7&4294967295|d>>>25),d=v+(g^f&(p^g))+E[9]+2336552879&4294967295,v=f+(d<<12&4294967295|d>>>20),d=g+(p^v&(f^p))+E[10]+4294925233&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(f^g&(v^f))+E[11]+2304563134&4294967295,p=g+(d<<22&4294967295|d>>>10),d=f+(v^p&(g^v))+E[12]+1804603682&4294967295,f=p+(d<<7&4294967295|d>>>25),d=v+(g^f&(p^g))+E[13]+4254626195&4294967295,v=f+(d<<12&4294967295|d>>>20),d=g+(p^v&(f^p))+E[14]+2792965006&4294967295,g=v+(d<<17&4294967295|d>>>15),d=p+(f^g&(v^f))+E[15]+1236535329&4294967295,p=g+(d<<22&4294967295|d>>>10),d=f+(g^v&(p^g))+E[1]+4129170786&4294967295,f=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(f^p))+E[6]+3225465664&4294967295,v=f+(d<<9&4294967295|d>>>23),d=g+(f^p&(v^f))+E[11]+643717713&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^f&(g^v))+E[0]+3921069994&4294967295,p=g+(d<<20&4294967295|d>>>12),d=f+(g^v&(p^g))+E[5]+3593408605&4294967295,f=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(f^p))+E[10]+38016083&4294967295,v=f+(d<<9&4294967295|d>>>23),d=g+(f^p&(v^f))+E[15]+3634488961&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^f&(g^v))+E[4]+3889429448&4294967295,p=g+(d<<20&4294967295|d>>>12),d=f+(g^v&(p^g))+E[9]+568446438&4294967295,f=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(f^p))+E[14]+3275163606&4294967295,v=f+(d<<9&4294967295|d>>>23),d=g+(f^p&(v^f))+E[3]+4107603335&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^f&(g^v))+E[8]+1163531501&4294967295,p=g+(d<<20&4294967295|d>>>12),d=f+(g^v&(p^g))+E[13]+2850285829&4294967295,f=p+(d<<5&4294967295|d>>>27),d=v+(p^g&(f^p))+E[2]+4243563512&4294967295,v=f+(d<<9&4294967295|d>>>23),d=g+(f^p&(v^f))+E[7]+1735328473&4294967295,g=v+(d<<14&4294967295|d>>>18),d=p+(v^f&(g^v))+E[12]+2368359562&4294967295,p=g+(d<<20&4294967295|d>>>12),d=f+(p^g^v)+E[5]+4294588738&4294967295,f=p+(d<<4&4294967295|d>>>28),d=v+(f^p^g)+E[8]+2272392833&4294967295,v=f+(d<<11&4294967295|d>>>21),d=g+(v^f^p)+E[11]+1839030562&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^f)+E[14]+4259657740&4294967295,p=g+(d<<23&4294967295|d>>>9),d=f+(p^g^v)+E[1]+2763975236&4294967295,f=p+(d<<4&4294967295|d>>>28),d=v+(f^p^g)+E[4]+1272893353&4294967295,v=f+(d<<11&4294967295|d>>>21),d=g+(v^f^p)+E[7]+4139469664&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^f)+E[10]+3200236656&4294967295,p=g+(d<<23&4294967295|d>>>9),d=f+(p^g^v)+E[13]+681279174&4294967295,f=p+(d<<4&4294967295|d>>>28),d=v+(f^p^g)+E[0]+3936430074&4294967295,v=f+(d<<11&4294967295|d>>>21),d=g+(v^f^p)+E[3]+3572445317&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^f)+E[6]+76029189&4294967295,p=g+(d<<23&4294967295|d>>>9),d=f+(p^g^v)+E[9]+3654602809&4294967295,f=p+(d<<4&4294967295|d>>>28),d=v+(f^p^g)+E[12]+3873151461&4294967295,v=f+(d<<11&4294967295|d>>>21),d=g+(v^f^p)+E[15]+530742520&4294967295,g=v+(d<<16&4294967295|d>>>16),d=p+(g^v^f)+E[2]+3299628645&4294967295,p=g+(d<<23&4294967295|d>>>9),d=f+(g^(p|~v))+E[0]+4096336452&4294967295,f=p+(d<<6&4294967295|d>>>26),d=v+(p^(f|~g))+E[7]+1126891415&4294967295,v=f+(d<<10&4294967295|d>>>22),d=g+(f^(v|~p))+E[14]+2878612391&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~f))+E[5]+4237533241&4294967295,p=g+(d<<21&4294967295|d>>>11),d=f+(g^(p|~v))+E[12]+1700485571&4294967295,f=p+(d<<6&4294967295|d>>>26),d=v+(p^(f|~g))+E[3]+2399980690&4294967295,v=f+(d<<10&4294967295|d>>>22),d=g+(f^(v|~p))+E[10]+4293915773&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~f))+E[1]+2240044497&4294967295,p=g+(d<<21&4294967295|d>>>11),d=f+(g^(p|~v))+E[8]+1873313359&4294967295,f=p+(d<<6&4294967295|d>>>26),d=v+(p^(f|~g))+E[15]+4264355552&4294967295,v=f+(d<<10&4294967295|d>>>22),d=g+(f^(v|~p))+E[6]+2734768916&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~f))+E[13]+1309151649&4294967295,p=g+(d<<21&4294967295|d>>>11),d=f+(g^(p|~v))+E[4]+4149444226&4294967295,f=p+(d<<6&4294967295|d>>>26),d=v+(p^(f|~g))+E[11]+3174756917&4294967295,v=f+(d<<10&4294967295|d>>>22),d=g+(f^(v|~p))+E[2]+718787259&4294967295,g=v+(d<<15&4294967295|d>>>17),d=p+(v^(g|~f))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+f&4294967295,y.g[1]=y.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,y.g[2]=y.g[2]+g&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,f){f===void 0&&(f=y.length);const p=f-this.blockSize,E=this.C;let g=this.h,v=0;for(;v<f;){if(g==0)for(;v<=p;)i(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<f;)if(E[g++]=y.charCodeAt(v++),g==this.blockSize){i(this,E),g=0;break}}else for(;v<f;)if(E[g++]=y[v++],g==this.blockSize){i(this,E),g=0;break}}this.h=g,this.o+=f},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var f=1;f<y.length-8;++f)y[f]=0;f=this.o*8;for(var p=y.length-8;p<y.length;++p)y[p]=f&255,f/=256;for(this.v(y),y=Array(16),f=0,p=0;p<4;++p)for(let E=0;E<32;E+=8)y[f++]=this.g[p]>>>E&255;return y};function a(y,f){var p=h;return Object.prototype.hasOwnProperty.call(p,y)?p[y]:p[y]=f(y)}function u(y,f){this.h=f;const p=[];let E=!0;for(let g=y.length-1;g>=0;g--){const v=y[g]|0;E&&v==f||(p[g]=v,E=!1)}this.g=p}var h={};function m(y){return-128<=y&&y<128?a(y,function(f){return new u([f|0],f<0?-1:0)}):new u([y|0],y<0?-1:0)}function _(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return b(_(-y));const f=[];let p=1;for(let E=0;y>=p;E++)f[E]=y/p|0,p*=4294967296;return new u(f,0)}function I(y,f){if(y.length==0)throw Error("number format error: empty string");if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(y.charAt(0)=="-")return b(I(y.substring(1),f));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=_(Math.pow(f,8));let E=w;for(let v=0;v<y.length;v+=8){var g=Math.min(8,y.length-v);const d=parseInt(y.substring(v,v+g),f);g<8?(g=_(Math.pow(f,g)),E=E.j(g).add(_(d))):(E=E.j(p),E=E.add(_(d)))}return E}var w=m(0),C=m(1),V=m(16777216);s=u.prototype,s.m=function(){if(U(this))return-b(this).m();let y=0,f=1;for(let p=0;p<this.g.length;p++){const E=this.i(p);y+=(E>=0?E:4294967296+E)*f,f*=4294967296}return y},s.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x(this))return"0";if(U(this))return"-"+b(this).toString(y);const f=_(Math.pow(y,6));var p=this;let E="";for(;;){const g=Tt(p,f).g;p=H(p,g.j(f));let v=((p.g.length>0?p.g[0]:p.h)>>>0).toString(y);if(p=g,x(p))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},s.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function x(y){if(y.h!=0)return!1;for(let f=0;f<y.g.length;f++)if(y.g[f]!=0)return!1;return!0}function U(y){return y.h==-1}s.l=function(y){return y=H(this,y),U(y)?-1:x(y)?0:1};function b(y){const f=y.g.length,p=[];for(let E=0;E<f;E++)p[E]=~y.g[E];return new u(p,~y.h).add(C)}s.abs=function(){return U(this)?b(this):this},s.add=function(y){const f=Math.max(this.g.length,y.g.length),p=[];let E=0;for(let g=0;g<=f;g++){let v=E+(this.i(g)&65535)+(y.i(g)&65535),d=(v>>>16)+(this.i(g)>>>16)+(y.i(g)>>>16);E=d>>>16,v&=65535,d&=65535,p[g]=d<<16|v}return new u(p,p[p.length-1]&-2147483648?-1:0)};function H(y,f){return y.add(b(f))}s.j=function(y){if(x(this)||x(y))return w;if(U(this))return U(y)?b(this).j(b(y)):b(b(this).j(y));if(U(y))return b(this.j(b(y)));if(this.l(V)<0&&y.l(V)<0)return _(this.m()*y.m());const f=this.g.length+y.g.length,p=[];for(var E=0;E<2*f;E++)p[E]=0;for(E=0;E<this.g.length;E++)for(let g=0;g<y.g.length;g++){const v=this.i(E)>>>16,d=this.i(E)&65535,ht=y.i(g)>>>16,jt=y.i(g)&65535;p[2*E+2*g]+=d*jt,ct(p,2*E+2*g),p[2*E+2*g+1]+=v*jt,ct(p,2*E+2*g+1),p[2*E+2*g+1]+=d*ht,ct(p,2*E+2*g+1),p[2*E+2*g+2]+=v*ht,ct(p,2*E+2*g+2)}for(y=0;y<f;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=f;y<2*f;y++)p[y]=0;return new u(p,0)};function ct(y,f){for(;(y[f]&65535)!=y[f];)y[f+1]+=y[f]>>>16,y[f]&=65535,f++}function nt(y,f){this.g=y,this.h=f}function Tt(y,f){if(x(f))throw Error("division by zero");if(x(y))return new nt(w,w);if(U(y))return f=Tt(b(y),f),new nt(b(f.g),b(f.h));if(U(f))return f=Tt(y,b(f)),new nt(b(f.g),f.h);if(y.g.length>30){if(U(y)||U(f))throw Error("slowDivide_ only works with positive integers.");for(var p=C,E=f;E.l(y)<=0;)p=yt(p),E=yt(E);var g=ot(p,1),v=ot(E,1);for(E=ot(E,2),p=ot(p,2);!x(E);){var d=v.add(E);d.l(y)<=0&&(g=g.add(p),v=d),E=ot(E,1),p=ot(p,1)}return f=H(y,g.j(f)),new nt(g,f)}for(g=w;y.l(f)>=0;){for(p=Math.max(1,Math.floor(y.m()/f.m())),E=Math.ceil(Math.log(p)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=_(p),d=v.j(f);U(d)||d.l(y)>0;)p-=E,v=_(p),d=v.j(f);x(v)&&(v=C),g=g.add(v),y=H(y,d)}return new nt(g,y)}s.B=function(y){return Tt(this,y).h},s.and=function(y){const f=Math.max(this.g.length,y.g.length),p=[];for(let E=0;E<f;E++)p[E]=this.i(E)&y.i(E);return new u(p,this.h&y.h)},s.or=function(y){const f=Math.max(this.g.length,y.g.length),p=[];for(let E=0;E<f;E++)p[E]=this.i(E)|y.i(E);return new u(p,this.h|y.h)},s.xor=function(y){const f=Math.max(this.g.length,y.g.length),p=[];for(let E=0;E<f;E++)p[E]=this.i(E)^y.i(E);return new u(p,this.h^y.h)};function yt(y){const f=y.g.length+1,p=[];for(let E=0;E<f;E++)p[E]=y.i(E)<<1|y.i(E-1)>>>31;return new u(p,y.h)}function ot(y,f){const p=f>>5;f%=32;const E=y.g.length-p,g=[];for(let v=0;v<E;v++)g[v]=f>0?y.i(v+p)>>>f|y.i(v+p+1)<<32-f:y.i(v+p);return new u(g,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=_,u.fromString=I,wr=u}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});var ln=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi,ke,Ki,pn,cr,Wi,Qi,Xi;(function(){var s,t=Object.defineProperty;function e(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof ln=="object"&&ln];for(var o=0;o<n.length;++o){var l=n[o];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(n,o){if(o)t:{var l=r;n=n.split(".");for(var c=0;c<n.length-1;c++){var T=n[c];if(!(T in l))break t;l=l[T]}n=n[n.length-1],c=l[n],o=o(c),o!=c&&o!=null&&t(l,n,{configurable:!0,writable:!0,value:o})}}i("Symbol.dispose",function(n){return n||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(n){return n||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(n){return n||function(o){var l=[],c;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&l.push([c,o[c]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function m(n,o,l){return n.call.apply(n.bind,arguments)}function _(n,o,l){return _=m,_.apply(null,arguments)}function I(n,o){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),n.apply(this,c)}}function w(n,o){function l(){}l.prototype=o.prototype,n.Z=o.prototype,n.prototype=new l,n.prototype.constructor=n,n.Ob=function(c,T,A){for(var S=Array(arguments.length-2),O=2;O<arguments.length;O++)S[O-2]=arguments[O];return o.prototype[T].apply(c,S)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?n=>n&&AsyncContext.Snapshot.wrap(n):n=>n;function V(n){const o=n.length;if(o>0){const l=Array(o);for(let c=0;c<o;c++)l[c]=n[c];return l}return[]}function x(n,o){for(let c=1;c<arguments.length;c++){const T=arguments[c];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=n.length||0;const A=T.length||0;n.length=l+A;for(let S=0;S<A;S++)n[l+S]=T[S]}else n.push(T)}}class U{constructor(o,l){this.i=o,this.j=l,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function b(n){u.setTimeout(()=>{throw n},0)}function H(){var n=y;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ct{constructor(){this.h=this.g=null}add(o,l){const c=nt.get();c.set(o,l),this.h?this.h.next=c:this.g=c,this.h=c}}var nt=new U(()=>new Tt,n=>n.reset());class Tt{constructor(){this.next=this.g=this.h=null}set(o,l){this.h=o,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,ot=!1,y=new ct,f=()=>{const n=Promise.resolve(void 0);yt=()=>{n.then(p)}};function p(){for(var n;n=H();){try{n.h.call(n.g)}catch(l){b(l)}var o=nt;o.j(n),o.h<100&&(o.h++,n.next=o.g,o.g=n)}ot=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const l=()=>{};u.addEventListener("test",l,o),u.removeEventListener("test",l,o)}catch{}return n}();function d(n){return/^[\s\xa0]*$/.test(n)}function ht(n,o){g.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n&&this.init(n,o)}w(ht,g),ht.prototype.init=function(n,o){const l=this.type=n.type,c=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget,o||(l=="mouseover"?o=n.fromElement:l=="mouseout"&&(o=n.toElement)),this.relatedTarget=o,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=n.pointerType,this.state=n.state,this.i=n,n.defaultPrevented&&ht.Z.h.call(this)},ht.prototype.h=function(){ht.Z.h.call(this);const n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var jt="closure_listenable_"+(Math.random()*1e6|0),Do=0;function No(n,o,l,c,T){this.listener=n,this.proxy=null,this.src=o,this.type=l,this.capture=!!c,this.ha=T,this.key=++Do,this.da=this.fa=!1}function ze(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Ke(n,o,l){for(const c in n)o.call(l,n[c],c,n)}function Oo(n,o){for(const l in n)o.call(void 0,n[l],l,n)}function $r(n){const o={};for(const l in n)o[l]=n[l];return o}const qr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gr(n,o){let l,c;for(let T=1;T<arguments.length;T++){c=arguments[T];for(l in c)n[l]=c[l];for(let A=0;A<qr.length;A++)l=qr[A],Object.prototype.hasOwnProperty.call(c,l)&&(n[l]=c[l])}}function We(n){this.src=n,this.g={},this.h=0}We.prototype.add=function(n,o,l,c,T){const A=n.toString();n=this.g[A],n||(n=this.g[A]=[],this.h++);const S=bn(n,o,c,T);return S>-1?(o=n[S],l||(o.fa=!1)):(o=new No(o,this.src,A,!!c,T),o.fa=l,n.push(o)),o};function Vn(n,o){const l=o.type;if(l in n.g){var c=n.g[l],T=Array.prototype.indexOf.call(c,o,void 0),A;(A=T>=0)&&Array.prototype.splice.call(c,T,1),A&&(ze(o),n.g[l].length==0&&(delete n.g[l],n.h--))}}function bn(n,o,l,c){for(let T=0;T<n.length;++T){const A=n[T];if(!A.da&&A.listener==o&&A.capture==!!l&&A.ha==c)return T}return-1}var Dn="closure_lm_"+(Math.random()*1e6|0),Nn={};function Hr(n,o,l,c,T){if(Array.isArray(o)){for(let A=0;A<o.length;A++)Hr(n,o[A],l,c,T);return null}return l=Wr(l),n&&n[jt]?n.J(o,l,h(c)?!!c.capture:!1,T):ko(n,o,l,!1,c,T)}function ko(n,o,l,c,T,A){if(!o)throw Error("Invalid event type");const S=h(T)?!!T.capture:!!T;let O=kn(n);if(O||(n[Dn]=O=new We(n)),l=O.add(o,l,c,S,A),l.proxy)return l;if(c=xo(),l.proxy=c,c.src=n,c.listener=l,n.addEventListener)v||(T=S),T===void 0&&(T=!1),n.addEventListener(o.toString(),c,T);else if(n.attachEvent)n.attachEvent(Kr(o.toString()),c);else if(n.addListener&&n.removeListener)n.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function xo(){function n(l){return o.call(n.src,n.listener,l)}const o=Mo;return n}function zr(n,o,l,c,T){if(Array.isArray(o))for(var A=0;A<o.length;A++)zr(n,o[A],l,c,T);else c=h(c)?!!c.capture:!!c,l=Wr(l),n&&n[jt]?(n=n.i,A=String(o).toString(),A in n.g&&(o=n.g[A],l=bn(o,l,c,T),l>-1&&(ze(o[l]),Array.prototype.splice.call(o,l,1),o.length==0&&(delete n.g[A],n.h--)))):n&&(n=kn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=bn(o,l,c,T)),(l=n>-1?o[n]:null)&&On(l))}function On(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[jt])Vn(o.i,n);else{var l=n.type,c=n.proxy;o.removeEventListener?o.removeEventListener(l,c,n.capture):o.detachEvent?o.detachEvent(Kr(l),c):o.addListener&&o.removeListener&&o.removeListener(c),(l=kn(o))?(Vn(l,n),l.h==0&&(l.src=null,o[Dn]=null)):ze(n)}}}function Kr(n){return n in Nn?Nn[n]:Nn[n]="on"+n}function Mo(n,o){if(n.da)n=!0;else{o=new ht(o,this);const l=n.listener,c=n.ha||n.src;n.fa&&On(n),n=l.call(c,o)}return n}function kn(n){return n=n[Dn],n instanceof We?n:null}var xn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wr(n){return typeof n=="function"?n:(n[xn]||(n[xn]=function(o){return n.handleEvent(o)}),n[xn])}function rt(){E.call(this),this.i=new We(this),this.M=this,this.G=null}w(rt,E),rt.prototype[jt]=!0,rt.prototype.removeEventListener=function(n,o,l,c){zr(this,n,o,l,c)};function at(n,o){var l,c=n.G;if(c)for(l=[];c;c=c.G)l.push(c);if(n=n.M,c=o.type||o,typeof o=="string")o=new g(o,n);else if(o instanceof g)o.target=o.target||n;else{var T=o;o=new g(c,n),Gr(o,T)}T=!0;let A,S;if(l)for(S=l.length-1;S>=0;S--)A=o.g=l[S],T=Qe(A,c,!0,o)&&T;if(A=o.g=n,T=Qe(A,c,!0,o)&&T,T=Qe(A,c,!1,o)&&T,l)for(S=0;S<l.length;S++)A=o.g=l[S],T=Qe(A,c,!1,o)&&T}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var n=this.i;for(const o in n.g){const l=n.g[o];for(let c=0;c<l.length;c++)ze(l[c]);delete n.g[o],n.h--}}this.G=null},rt.prototype.J=function(n,o,l,c){return this.i.add(String(n),o,!1,l,c)},rt.prototype.K=function(n,o,l,c){return this.i.add(String(n),o,!0,l,c)};function Qe(n,o,l,c){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();let T=!0;for(let A=0;A<o.length;++A){const S=o[A];if(S&&!S.da&&S.capture==l){const O=S.listener,W=S.ha||S.src;S.fa&&Vn(n.i,S),T=O.call(W,c)!==!1&&T}}return T&&!c.defaultPrevented}function Lo(n,o){if(typeof n!="function")if(n&&typeof n.handleEvent=="function")n=_(n.handleEvent,n);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:u.setTimeout(n,o||0)}function Qr(n){n.g=Lo(()=>{n.g=null,n.i&&(n.i=!1,Qr(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Fo extends E{constructor(o,l){super(),this.m=o,this.l=l,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Qr(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(n){E.call(this),this.h=n,this.g={}}w(me,E);var Xr=[];function Jr(n){Ke(n.g,function(o,l){this.g.hasOwnProperty(l)&&On(o)},n),n.g={}}me.prototype.N=function(){me.Z.N.call(this),Jr(this)},me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=u.JSON.stringify,Uo=u.JSON.parse,Bo=class{stringify(n){return u.JSON.stringify(n,void 0)}parse(n){return u.JSON.parse(n,void 0)}};function Yr(){}function Zr(){}var ge={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ln(){g.call(this,"d")}w(Ln,g);function Fn(){g.call(this,"c")}w(Fn,g);var $t={},ts=null;function Xe(){return ts=ts||new rt}$t.Ia="serverreachability";function es(n){g.call(this,$t.Ia,n)}w(es,g);function _e(n){const o=Xe();at(o,new es(o))}$t.STAT_EVENT="statevent";function ns(n,o){g.call(this,$t.STAT_EVENT,n),this.stat=o}w(ns,g);function lt(n){const o=Xe();at(o,new ns(o,n))}$t.Ja="timingevent";function rs(n,o){g.call(this,$t.Ja,n),this.size=o}w(rs,g);function ye(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){n()},o)}function Ee(){this.g=!0}Ee.prototype.ua=function(){this.g=!1};function jo(n,o,l,c,T,A){n.info(function(){if(n.g)if(A){var S="",O=A.split("&");for(let B=0;B<O.length;B++){var W=O[B].split("=");if(W.length>1){const X=W[0];W=W[1];const It=X.split("_");S=It.length>=2&&It[1]=="type"?S+(X+"="+W+"&"):S+(X+"=redacted&")}}}else S=null;else S=A;return"XMLHTTP REQ ("+c+") [attempt "+T+"]: "+o+`
`+l+`
`+S})}function $o(n,o,l,c,T,A,S){n.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+T+"]: "+o+`
`+l+`
`+A+" "+S})}function ee(n,o,l,c){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Go(n,l)+(c?" "+c:"")})}function qo(n,o){n.info(function(){return"TIMEOUT: "+o})}Ee.prototype.info=function(){};function Go(n,o){if(!n.g)return o;if(!o)return null;try{const A=JSON.parse(o);if(A){for(n=0;n<A.length;n++)if(Array.isArray(A[n])){var l=A[n];if(!(l.length<2)){var c=l[1];if(Array.isArray(c)&&!(c.length<1)){var T=c[0];if(T!="noop"&&T!="stop"&&T!="close")for(let S=1;S<c.length;S++)c[S]=""}}}}return Mn(A)}catch{return o}}var Je={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ss={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},is;function Un(){}w(Un,Yr),Un.prototype.g=function(){return new XMLHttpRequest},is=new Un;function Te(n){return encodeURIComponent(String(n))}function Ho(n){var o=1;n=n.split(":");const l=[];for(;o>0&&n.length;)l.push(n.shift()),o--;return n.length&&l.push(n.join(":")),l}function Dt(n,o,l,c){this.j=n,this.i=o,this.l=l,this.S=c||1,this.V=new me(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new os}function os(){this.i=null,this.g="",this.h=!1}var as={},Bn={};function jn(n,o,l){n.M=1,n.A=Ze(At(o)),n.u=l,n.R=!0,ls(n,null)}function ls(n,o){n.F=Date.now(),Ye(n),n.B=At(n.A);var l=n.B,c=n.S;Array.isArray(c)||(c=[String(c)]),vs(l.i,"t",c),n.C=0,l=n.j.L,n.h=new os,n.g=Us(n.j,l?o:null,!n.u),n.P>0&&(n.O=new Fo(_(n.Y,n,n.g),n.P)),o=n.V,l=n.g,c=n.ba;var T="readystatechange";Array.isArray(T)||(T&&(Xr[0]=T.toString()),T=Xr);for(let A=0;A<T.length;A++){const S=Hr(l,T[A],c||o.handleEvent,!1,o.h||o);if(!S)break;o.g[S.key]=S}o=n.J?$r(n.J):{},n.u?(n.v||(n.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.B,n.v,n.u,o)):(n.v="GET",n.g.ea(n.B,n.v,null,o)),_e(),jo(n.i,n.v,n.B,n.l,n.S,n.u)}Dt.prototype.ba=function(n){n=n.target;const o=this.O;o&&kt(n)==3?o.j():this.Y(n)},Dt.prototype.Y=function(n){try{if(n==this.g)t:{const O=kt(this.g),W=this.g.ya(),B=this.g.ca();if(!(O<3)&&(O!=3||this.g&&(this.h.h||this.g.la()||Cs(this.g)))){this.K||O!=4||W==7||(W==8||B<=0?_e(3):_e(2)),$n(this);var o=this.g.ca();this.X=o;var l=zo(this);if(this.o=o==200,$o(this.i,this.v,this.B,this.l,this.S,O,o),this.o){if(this.U&&!this.L){e:{if(this.g){var c,T=this.g;if((c=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(c)){var A=c;break e}}A=null}if(n=A)ee(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qn(this,n);else{this.o=!1,this.m=3,lt(12),qt(this),ve(this);break t}}if(this.R){n=!0;let X;for(;!this.K&&this.C<l.length;)if(X=Ko(this,l),X==Bn){O==4&&(this.m=4,lt(14),n=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(X==as){this.m=4,lt(15),ee(this.i,this.l,l,"[Invalid Chunk]"),n=!1;break}else ee(this.i,this.l,X,null),qn(this,X);if(us(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),O!=4||l.length!=0||this.h.h||(this.m=1,lt(16),n=!1),this.o=this.o&&n,!n)ee(this.i,this.l,l,"[Invalid Chunked Response]"),qt(this),ve(this);else if(l.length>0&&!this.W){this.W=!0;var S=this.j;S.g==this&&S.aa&&!S.P&&(S.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Jn(S),S.P=!0,lt(11))}}else ee(this.i,this.l,l,null),qn(this,l);O==4&&qt(this),this.o&&!this.K&&(O==4?xs(this.j,this):(this.o=!1,Ye(this)))}else aa(this.g),o==400&&l.indexOf("Unknown SID")>0?(this.m=3,lt(12)):(this.m=0,lt(13)),qt(this),ve(this)}}}catch{}finally{}};function zo(n){if(!us(n))return n.g.la();const o=Cs(n.g);if(o==="")return"";let l="";const c=o.length,T=kt(n.g)==4;if(!n.h.i){if(typeof TextDecoder>"u")return qt(n),ve(n),"";n.h.i=new u.TextDecoder}for(let A=0;A<c;A++)n.h.h=!0,l+=n.h.i.decode(o[A],{stream:!(T&&A==c-1)});return o.length=0,n.h.g+=l,n.C=0,n.h.g}function us(n){return n.g?n.v=="GET"&&n.M!=2&&n.j.Aa:!1}function Ko(n,o){var l=n.C,c=o.indexOf(`
`,l);return c==-1?Bn:(l=Number(o.substring(l,c)),isNaN(l)?as:(c+=1,c+l>o.length?Bn:(o=o.slice(c,c+l),n.C=c+l,o)))}Dt.prototype.cancel=function(){this.K=!0,qt(this)};function Ye(n){n.T=Date.now()+n.H,cs(n,n.H)}function cs(n,o){if(n.D!=null)throw Error("WatchDog timer not null");n.D=ye(_(n.aa,n),o)}function $n(n){n.D&&(u.clearTimeout(n.D),n.D=null)}Dt.prototype.aa=function(){this.D=null;const n=Date.now();n-this.T>=0?(qo(this.i,this.B),this.M!=2&&(_e(),lt(17)),qt(this),this.m=2,ve(this)):cs(this,this.T-n)};function ve(n){n.j.I==0||n.K||xs(n.j,n)}function qt(n){$n(n);var o=n.O;o&&typeof o.dispose=="function"&&o.dispose(),n.O=null,Jr(n.V),n.g&&(o=n.g,n.g=null,o.abort(),o.dispose())}function qn(n,o){try{var l=n.j;if(l.I!=0&&(l.g==n||Gn(l.h,n))){if(!n.L&&Gn(l.h,n)&&l.I==3){try{var c=l.Ba.g.parse(o)}catch{c=null}if(Array.isArray(c)&&c.length==3){var T=c;if(T[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<n.F)sn(l),nn(l);else break t;Xn(l),lt(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=ye(_(l.Va,l),6e3));ds(l.h)<=1&&l.ta&&(l.ta=void 0)}else Ht(l,11)}else if((n.L||l.g==n)&&sn(l),!d(o))for(T=l.Ba.g.parse(o),o=0;o<T.length;o++){let B=T[o];const X=B[0];if(!(X<=l.K))if(l.K=X,B=B[1],l.I==2)if(B[0]=="c"){l.M=B[1],l.ba=B[2];const It=B[3];It!=null&&(l.ka=It,l.j.info("VER="+l.ka));const zt=B[4];zt!=null&&(l.za=zt,l.j.info("SVER="+l.za));const xt=B[5];xt!=null&&typeof xt=="number"&&xt>0&&(c=1.5*xt,l.O=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const Mt=n.g;if(Mt){const an=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(an){var A=c.h;A.g||an.indexOf("spdy")==-1&&an.indexOf("quic")==-1&&an.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Hn(A,A.h),A.h=null))}if(c.G){const Yn=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yn&&(c.wa=Yn,$(c.J,c.G,Yn))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-n.F,l.j.info("Handshake RTT: "+l.T+"ms")),c=l;var S=n;if(c.na=Fs(c,c.L?c.ba:null,c.W),S.L){ps(c.h,S);var O=S,W=c.O;W&&(O.H=W),O.D&&($n(O),Ye(O)),c.g=S}else Os(c);l.i.length>0&&rn(l)}else B[0]!="stop"&&B[0]!="close"||Ht(l,7);else l.I==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Ht(l,7):Qn(l):B[0]!="noop"&&l.l&&l.l.qa(B),l.A=0)}}_e(4)}catch{}}var Wo=class{constructor(n,o){this.g=n,this.map=o}};function hs(n){this.l=n||10,u.PerformanceNavigationTiming?(n=u.performance.getEntriesByType("navigation"),n=n.length>0&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fs(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function ds(n){return n.h?1:n.g?n.g.size:0}function Gn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function Hn(n,o){n.g?n.g.add(o):n.h=o}function ps(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}hs.prototype.cancel=function(){if(this.i=ms(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function ms(n){if(n.h!=null)return n.i.concat(n.h.G);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const l of n.g.values())o=o.concat(l.G);return o}return V(n.i)}var gs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qo(n,o){if(n){n=n.split("&");for(let l=0;l<n.length;l++){const c=n[l].indexOf("=");let T,A=null;c>=0?(T=n[l].substring(0,c),A=n[l].substring(c+1)):T=n[l],o(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Nt(n){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;n instanceof Nt?(this.l=n.l,Ae(this,n.j),this.o=n.o,this.g=n.g,Ie(this,n.u),this.h=n.h,zn(this,As(n.i)),this.m=n.m):n&&(o=String(n).match(gs))?(this.l=!1,Ae(this,o[1]||"",!0),this.o=we(o[2]||""),this.g=we(o[3]||"",!0),Ie(this,o[4]),this.h=we(o[5]||"",!0),zn(this,o[6]||"",!0),this.m=we(o[7]||"")):(this.l=!1,this.i=new Se(null,this.l))}Nt.prototype.toString=function(){const n=[];var o=this.j;o&&n.push(Re(o,_s,!0),":");var l=this.g;return(l||o=="file")&&(n.push("//"),(o=this.o)&&n.push(Re(o,_s,!0),"@"),n.push(Te(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&n.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&n.push("/"),n.push(Re(l,l.charAt(0)=="/"?Yo:Jo,!0))),(l=this.i.toString())&&n.push("?",l),(l=this.m)&&n.push("#",Re(l,ta)),n.join("")},Nt.prototype.resolve=function(n){const o=At(this);let l=!!n.j;l?Ae(o,n.j):l=!!n.o,l?o.o=n.o:l=!!n.g,l?o.g=n.g:l=n.u!=null;var c=n.h;if(l)Ie(o,n.u);else if(l=!!n.h){if(c.charAt(0)!="/")if(this.g&&!this.h)c="/"+c;else{var T=o.h.lastIndexOf("/");T!=-1&&(c=o.h.slice(0,T+1)+c)}if(T=c,T==".."||T==".")c="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){c=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let S=0;S<T.length;){const O=T[S++];O=="."?c&&S==T.length&&A.push(""):O==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),c&&S==T.length&&A.push("")):(A.push(O),c=!0)}c=A.join("/")}else c=T}return l?o.h=c:l=n.i.toString()!=="",l?zn(o,As(n.i)):l=!!n.m,l&&(o.m=n.m),o};function At(n){return new Nt(n)}function Ae(n,o,l){n.j=l?we(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Ie(n,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);n.u=o}else n.u=null}function zn(n,o,l){o instanceof Se?(n.i=o,ea(n.i,n.l)):(l||(o=Re(o,Zo)),n.i=new Se(o,n.l))}function $(n,o,l){n.i.set(o,l)}function Ze(n){return $(n,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),n}function we(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Re(n,o,l){return typeof n=="string"?(n=encodeURI(n).replace(o,Xo),l&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Xo(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var _s=/[#\/\?@]/g,Jo=/[#\?:]/g,Yo=/[#\?]/g,Zo=/[#\?@]/g,ta=/#/g;function Se(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Gt(n){n.g||(n.g=new Map,n.h=0,n.i&&Qo(n.i,function(o,l){n.add(decodeURIComponent(o.replace(/\+/g," ")),l)}))}s=Se.prototype,s.add=function(n,o){Gt(this),this.i=null,n=ne(this,n);let l=this.g.get(n);return l||this.g.set(n,l=[]),l.push(o),this.h+=1,this};function ys(n,o){Gt(n),o=ne(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function Es(n,o){return Gt(n),o=ne(n,o),n.g.has(o)}s.forEach=function(n,o){Gt(this),this.g.forEach(function(l,c){l.forEach(function(T){n.call(o,T,c,this)},this)},this)};function Ts(n,o){Gt(n);let l=[];if(typeof o=="string")Es(n,o)&&(l=l.concat(n.g.get(ne(n,o))));else for(n=Array.from(n.g.values()),o=0;o<n.length;o++)l=l.concat(n[o]);return l}s.set=function(n,o){return Gt(this),this.i=null,n=ne(this,n),Es(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},s.get=function(n,o){return n?(n=Ts(this,n),n.length>0?String(n[0]):o):o};function vs(n,o,l){ys(n,o),l.length>0&&(n.i=null,n.g.set(ne(n,o),V(l)),n.h+=l.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(let c=0;c<o.length;c++){var l=o[c];const T=Te(l);l=Ts(this,l);for(let A=0;A<l.length;A++){let S=T;l[A]!==""&&(S+="="+Te(l[A])),n.push(S)}}return this.i=n.join("&")};function As(n){const o=new Se;return o.i=n.i,n.g&&(o.g=new Map(n.g),o.h=n.h),o}function ne(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function ea(n,o){o&&!n.j&&(Gt(n),n.i=null,n.g.forEach(function(l,c){const T=c.toLowerCase();c!=T&&(ys(this,c),vs(this,T,l))},n)),n.j=o}function na(n,o){const l=new Ee;if(u.Image){const c=new Image;c.onload=I(Ot,l,"TestLoadImage: loaded",!0,o,c),c.onerror=I(Ot,l,"TestLoadImage: error",!1,o,c),c.onabort=I(Ot,l,"TestLoadImage: abort",!1,o,c),c.ontimeout=I(Ot,l,"TestLoadImage: timeout",!1,o,c),u.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=n}else o(!1)}function ra(n,o){const l=new Ee,c=new AbortController,T=setTimeout(()=>{c.abort(),Ot(l,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:c.signal}).then(A=>{clearTimeout(T),A.ok?Ot(l,"TestPingServer: ok",!0,o):Ot(l,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(T),Ot(l,"TestPingServer: error",!1,o)})}function Ot(n,o,l,c,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),c(l)}catch{}}function sa(){this.g=new Bo}function Kn(n){this.i=n.Sb||null,this.h=n.ab||!1}w(Kn,Yr),Kn.prototype.g=function(){return new tn(this.i,this.h)};function tn(n,o){rt.call(this),this.H=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(tn,rt),s=tn.prototype,s.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=n,this.D=o,this.readyState=1,Ce(this)},s.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};n&&(o.body=n),(this.H||u).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pe(this)),this.readyState=0},s.Pa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Ce(this)),this.g&&(this.readyState=3,Ce(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Is(this)}else n.text().then(this.Oa.bind(this),this.ga.bind(this))};function Is(n){n.j.read().then(n.Ma.bind(n)).catch(n.ga.bind(n))}s.Ma=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Pe(this):Ce(this),this.readyState==3&&Is(this)}},s.Oa=function(n){this.g&&(this.response=this.responseText=n,Pe(this))},s.Na=function(n){this.g&&(this.response=n,Pe(this))},s.ga=function(){this.g&&Pe(this)};function Pe(n){n.readyState=4,n.l=null,n.j=null,n.B=null,Ce(n)}s.setRequestHeader=function(n,o){this.A.append(n,o)},s.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var l=o.next();!l.done;)l=l.value,n.push(l[0]+": "+l[1]),l=o.next();return n.join(`\r
`)};function Ce(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function ws(n){let o="";return Ke(n,function(l,c){o+=c,o+=":",o+=l,o+=`\r
`}),o}function Wn(n,o,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=ws(l),typeof n=="string"?l!=null&&Te(l):$(n,o,l))}function q(n){rt.call(this),this.headers=new Map,this.L=n||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(q,rt);var ia=/^https?$/i,oa=["POST","PUT"];s=q.prototype,s.Fa=function(n){this.H=n},s.ea=function(n,o,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():is.g(),this.g.onreadystatechange=C(_(this.Ca,this));try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(A){Rs(this,A);return}if(n=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var T in c)l.set(T,c[T]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const A of c.keys())l.set(A,c.get(A));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=u.FormData&&n instanceof u.FormData,!(Array.prototype.indexOf.call(oa,o,void 0)>=0)||c||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,S]of l)this.g.setRequestHeader(A,S);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(n),this.v=!1}catch(A){Rs(this,A)}};function Rs(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.o=5,Ss(n),en(n)}function Ss(n){n.A||(n.A=!0,at(n,"complete"),at(n,"error"))}s.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=n||7,at(this,"complete"),at(this,"abort"),en(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),en(this,!0)),q.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Ps(this):this.Xa())},s.Xa=function(){Ps(this)};function Ps(n){if(n.h&&typeof a<"u"){if(n.v&&kt(n)==4)setTimeout(n.Ca.bind(n),0);else if(at(n,"readystatechange"),kt(n)==4){n.h=!1;try{const A=n.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var l;if(!(l=o)){var c;if(c=A===0){let S=String(n.D).match(gs)[1]||null;!S&&u.self&&u.self.location&&(S=u.self.location.protocol.slice(0,-1)),c=!ia.test(S?S.toLowerCase():"")}l=c}if(l)at(n,"complete"),at(n,"success");else{n.o=6;try{var T=kt(n)>2?n.g.statusText:""}catch{T=""}n.l=T+" ["+n.ca()+"]",Ss(n)}}finally{en(n)}}}}function en(n,o){if(n.g){n.m&&(clearTimeout(n.m),n.m=null);const l=n.g;n.g=null,o||at(n,"ready");try{l.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function kt(n){return n.g?n.g.readyState:0}s.ca=function(){try{return kt(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Uo(o)}};function Cs(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.F){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function aa(n){const o={};n=(n.g&&kt(n)>=2&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<n.length;c++){if(d(n[c]))continue;var l=Ho(n[c]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=o[T]||[];o[T]=A,A.push(l)}Oo(o,function(c){return c.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ve(n,o,l){return l&&l.internalChannelParams&&l.internalChannelParams[n]||o}function Vs(n){this.za=0,this.i=[],this.j=new Ee,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ve("failFast",!1,n),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ve("baseRetryDelayMs",5e3,n),this.Za=Ve("retryDelaySeedMs",1e4,n),this.Ta=Ve("forwardChannelMaxRetries",2,n),this.va=Ve("forwardChannelRequestTimeoutMs",2e4,n),this.ma=n&&n.xmlHttpFactory||void 0,this.Ua=n&&n.Rb||void 0,this.Aa=n&&n.useFetchStreams||!1,this.O=void 0,this.L=n&&n.supportsCrossDomainXhr||!1,this.M="",this.h=new hs(n&&n.concurrentRequestLimit),this.Ba=new sa,this.S=n&&n.fastHandshake||!1,this.R=n&&n.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=n&&n.Pb||!1,n&&n.ua&&this.j.ua(),n&&n.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&n&&n.detectBufferingProxy||!1,this.ia=void 0,n&&n.longPollingTimeout&&n.longPollingTimeout>0&&(this.ia=n.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=Vs.prototype,s.ka=8,s.I=1,s.connect=function(n,o,l,c){lt(0),this.W=n,this.H=o||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.J=Fs(this,null,this.W),rn(this)};function Qn(n){if(bs(n),n.I==3){var o=n.V++,l=At(n.J);if($(l,"SID",n.M),$(l,"RID",o),$(l,"TYPE","terminate"),be(n,l),o=new Dt(n,n.j,o),o.M=2,o.A=Ze(At(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(o.A.toString(),"")}catch{}!l&&u.Image&&(new Image().src=o.A,l=!0),l||(o.g=Us(o.j,null),o.g.ea(o.A)),o.F=Date.now(),Ye(o)}Ls(n)}function nn(n){n.g&&(Jn(n),n.g.cancel(),n.g=null)}function bs(n){nn(n),n.v&&(u.clearTimeout(n.v),n.v=null),sn(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&u.clearTimeout(n.m),n.m=null)}function rn(n){if(!fs(n.h)&&!n.m){n.m=!0;var o=n.Ea;yt||f(),ot||(yt(),ot=!0),y.add(o,n),n.D=0}}function la(n,o){return ds(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=o.G.concat(n.i),!0):n.I==1||n.I==2||n.D>=(n.Sa?0:n.Ta)?!1:(n.m=ye(_(n.Ea,n,o),Ms(n,n.D)),n.D++,!0)}s.Ea=function(n){if(this.m)if(this.m=null,this.I==1){if(!n){this.V=Math.floor(Math.random()*1e5),n=this.V++;const T=new Dt(this,this.j,n);let A=this.o;if(this.U&&(A?(A=$r(A),Gr(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)t:{for(var o=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(o+=c,o>4096){o=l;break t}if(o===4096||l===this.i.length-1){o=l+1;break t}}o=1e3}else o=1e3;o=Ns(this,T,o),l=At(this.J),$(l,"RID",n),$(l,"CVER",22),this.G&&$(l,"X-HTTP-Session-Id",this.G),be(this,l),A&&(this.R?o="headers="+Te(ws(A))+"&"+o:this.u&&Wn(l,this.u,A)),Hn(this.h,T),this.Ra&&$(l,"TYPE","init"),this.S?($(l,"$req",o),$(l,"SID","null"),T.U=!0,jn(T,l,null)):jn(T,l,o),this.I=2}}else this.I==3&&(n?Ds(this,n):this.i.length==0||fs(this.h)||Ds(this))};function Ds(n,o){var l;o?l=o.l:l=n.V++;const c=At(n.J);$(c,"SID",n.M),$(c,"RID",l),$(c,"AID",n.K),be(n,c),n.u&&n.o&&Wn(c,n.u,n.o),l=new Dt(n,n.j,l,n.D+1),n.u===null&&(l.J=n.o),o&&(n.i=o.G.concat(n.i)),o=Ns(n,l,1e3),l.H=Math.round(n.va*.5)+Math.round(n.va*.5*Math.random()),Hn(n.h,l),jn(l,c,o)}function be(n,o){n.H&&Ke(n.H,function(l,c){$(o,c,l)}),n.l&&Ke({},function(l,c){$(o,c,l)})}function Ns(n,o,l){l=Math.min(n.i.length,l);const c=n.l?_(n.l.Ka,n.l,n):null;t:{var T=n.i;let O=-1;for(;;){const W=["count="+l];O==-1?l>0?(O=T[0].g,W.push("ofs="+O)):O=0:W.push("ofs="+O);let B=!0;for(let X=0;X<l;X++){var A=T[X].g;const It=T[X].map;if(A-=O,A<0)O=Math.max(0,T[X].g-100),B=!1;else try{A="req"+A+"_"||"";try{var S=It instanceof Map?It:Object.entries(It);for(const[zt,xt]of S){let Mt=xt;h(xt)&&(Mt=Mn(xt)),W.push(A+zt+"="+encodeURIComponent(Mt))}}catch(zt){throw W.push(A+"type="+encodeURIComponent("_badmap")),zt}}catch{c&&c(It)}}if(B){S=W.join("&");break t}}S=void 0}return n=n.i.splice(0,l),o.G=n,S}function Os(n){if(!n.g&&!n.v){n.Y=1;var o=n.Da;yt||f(),ot||(yt(),ot=!0),y.add(o,n),n.A=0}}function Xn(n){return n.g||n.v||n.A>=3?!1:(n.Y++,n.v=ye(_(n.Da,n),Ms(n,n.A)),n.A++,!0)}s.Da=function(){if(this.v=null,ks(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var n=4*this.T;this.j.info("BP detection timer enabled: "+n),this.B=ye(_(this.Wa,this),n)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,lt(10),nn(this),ks(this))};function Jn(n){n.B!=null&&(u.clearTimeout(n.B),n.B=null)}function ks(n){n.g=new Dt(n,n.j,"rpc",n.Y),n.u===null&&(n.g.J=n.o),n.g.P=0;var o=At(n.na);$(o,"RID","rpc"),$(o,"SID",n.M),$(o,"AID",n.K),$(o,"CI",n.F?"0":"1"),!n.F&&n.ia&&$(o,"TO",n.ia),$(o,"TYPE","xmlhttp"),be(n,o),n.u&&n.o&&Wn(o,n.u,n.o),n.O&&(n.g.H=n.O);var l=n.g;n=n.ba,l.M=1,l.A=Ze(At(o)),l.u=null,l.R=!0,ls(l,n)}s.Va=function(){this.C!=null&&(this.C=null,nn(this),Xn(this),lt(19))};function sn(n){n.C!=null&&(u.clearTimeout(n.C),n.C=null)}function xs(n,o){var l=null;if(n.g==o){sn(n),Jn(n),n.g=null;var c=2}else if(Gn(n.h,o))l=o.G,ps(n.h,o),c=1;else return;if(n.I!=0){if(o.o)if(c==1){l=o.u?o.u.length:0,o=Date.now()-o.F;var T=n.D;c=Xe(),at(c,new rs(c,l)),rn(n)}else Os(n);else if(T=o.m,T==3||T==0&&o.X>0||!(c==1&&la(n,o)||c==2&&Xn(n)))switch(l&&l.length>0&&(o=n.h,o.i=o.i.concat(l)),T){case 1:Ht(n,5);break;case 4:Ht(n,10);break;case 3:Ht(n,6);break;default:Ht(n,2)}}}function Ms(n,o){let l=n.Qa+Math.floor(Math.random()*n.Za);return n.isActive()||(l*=2),l*o}function Ht(n,o){if(n.j.info("Error code "+o),o==2){var l=_(n.bb,n),c=n.Ua;const T=!c;c=new Nt(c||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ae(c,"https"),Ze(c),T?na(c.toString(),l):ra(c.toString(),l)}else lt(2);n.I=0,n.l&&n.l.pa(o),Ls(n),bs(n)}s.bb=function(n){n?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Ls(n){if(n.I=0,n.ja=[],n.l){const o=ms(n.h);(o.length!=0||n.i.length!=0)&&(x(n.ja,o),x(n.ja,n.i),n.h.i.length=0,V(n.i),n.i.length=0),n.l.oa()}}function Fs(n,o,l){var c=l instanceof Nt?At(l):new Nt(l);if(c.g!="")o&&(c.g=o+"."+c.g),Ie(c,c.u);else{var T=u.location;c=T.protocol,o=o?o+"."+T.hostname:T.hostname,T=+T.port;const A=new Nt(null);c&&Ae(A,c),o&&(A.g=o),T&&Ie(A,T),l&&(A.h=l),c=A}return l=n.G,o=n.wa,l&&o&&$(c,l,o),$(c,"VER",n.ka),be(n,c),c}function Us(n,o,l){if(o&&!n.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Aa&&!n.ma?new q(new Kn({ab:l})):new q(n.ma),o.Fa(n.L),o}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bs(){}s=Bs.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function on(){}on.prototype.g=function(n,o){return new pt(n,o)};function pt(n,o){rt.call(this),this.g=new Vs(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(n?n["X-WebChannel-Client-Profile"]=o.sa:n={"X-WebChannel-Client-Profile":o.sa}),this.g.U=n,(n=o&&o.Qb)&&!d(n)&&(this.g.u=n),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!d(o)&&(this.g.G=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new re(this)}w(pt,rt),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Qn(this.g)},pt.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var l={};l.__data__=n,n=l}else this.v&&(l={},l.__data__=Mn(n),n=l);o.i.push(new Wo(o.Ya++,n)),o.I==3&&rn(o)},pt.prototype.N=function(){this.g.l=null,delete this.j,Qn(this.g),delete this.g,pt.Z.N.call(this)};function js(n){Ln.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){t:{for(const l in o){n=l;break t}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}w(js,Ln);function $s(){Fn.call(this),this.status=1}w($s,Fn);function re(n){this.g=n}w(re,Bs),re.prototype.ra=function(){at(this.g,"a")},re.prototype.qa=function(n){at(this.g,new js(n))},re.prototype.pa=function(n){at(this.g,new $s)},re.prototype.oa=function(){at(this.g,"b")},on.prototype.createWebChannel=on.prototype.g,pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Xi=function(){return new on},Qi=function(){return Xe()},Wi=$t,cr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Je.NO_ERROR=0,Je.TIMEOUT=8,Je.HTTP_ERROR=6,pn=Je,ss.COMPLETE="complete",Ki=ss,Zr.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",rt.prototype.listen=rt.prototype.J,ke=Zr,q.prototype.listenOnce=q.prototype.K,q.prototype.getLastError=q.prototype.Ha,q.prototype.getLastErrorCode=q.prototype.ya,q.prototype.getStatus=q.prototype.ca,q.prototype.getResponseJson=q.prototype.La,q.prototype.getResponseText=q.prototype.la,q.prototype.send=q.prototype.ea,q.prototype.setWithCredentials=q.prototype.Fa,zi=q}).apply(typeof ln<"u"?ln:typeof self<"u"?self:typeof window<"u"?window:{});const ti="@firebase/firestore",ei="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let de="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new ji("@firebase/firestore");function Ne(){return Zt.logLevel}function N(s,...t){if(Zt.logLevel<=L.DEBUG){const e=t.map(Rr);Zt.debug(`Firestore (${de}): ${s}`,...e)}}function Rn(s,...t){if(Zt.logLevel<=L.ERROR){const e=t.map(Rr);Zt.error(`Firestore (${de}): ${s}`,...e)}}function Ji(s,...t){if(Zt.logLevel<=L.WARN){const e=t.map(Rr);Zt.warn(`Firestore (${de}): ${s}`,...e)}}function Rr(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(s,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Yi(s,r,e)}function Yi(s,t,e){let r=`FIRESTORE (${de}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Rn(r),new Error(r)}function ft(s,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,s||Yi(t,i,r)}function dt(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(mt.UNAUTHENTICATED))}shutdown(){}}class Ml{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ft(this.o===void 0,42304);let r=this.i;const i=m=>this.i!==r?(r=this.i,e(m)):Promise.resolve();let a=new xe;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new xe,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const m=a;t.enqueueRetryable(async()=>{await m.promise,await i(this.currentUser)})},h=m=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>h(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?h(m):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new xe)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string",31837,{l:r}),new kl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string",2055,{h:t}),new mt(t)}}class Ll{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Fl{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ll(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ni{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ul{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ft(this.o===void 0,3512);const r=a=>{a.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>r(a))};const i=a=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ni(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ft(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ni(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<s;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Bl(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<e&&(r+=t.charAt(i[a]%62))}return r}}function j(s,t){return s<t?-1:s>t?1:0}function hr(s,t){const e=Math.min(s.length,t.length);for(let r=0;r<e;r++){const i=s.charAt(r),a=t.charAt(r);if(i!==a)return rr(i)===rr(a)?j(i,a):rr(i)?1:-1}return j(s.length,t.length)}const $l=55296,ql=57343;function rr(s){const t=s.charCodeAt(0);return t>=$l&&t<=ql}function ae(s,t,e){return s.length===t.length&&s.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="__name__";class wt{constructor(t,e,r){e===void 0?e=0:e>t.length&&F(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&F(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return wt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof wt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const a=wt.compareSegments(t.get(i),e.get(i));if(a!==0)return a}return j(t.length,e.length)}static compareSegments(t,e){const r=wt.isNumericId(t),i=wt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?wt.extractNumericId(t).compare(wt.extractNumericId(e)):hr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return wr.fromString(t.substring(4,t.length-2))}}class Y extends wt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Gl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends wt{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return Gl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ri}static keyField(){return new ut([ri])}static fromServerFormat(t){const e=[];let r="",i=0;const a=()=>{if(r.length===0)throw new D(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new D(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[i+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new D(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=m,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(r+=h,i++):(a(),i++)}if(a(),u)throw new D(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Y.fromString(t))}static fromName(t){return new k(Y.fromString(t).popFirst(5))}static empty(){return new k(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Y(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(s,t,e,r){if(t===!0&&r===!0)throw new D(P.INVALID_ARGUMENT,`${s} and ${e} cannot be used together.`)}function zl(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(s,t){const e={typeString:s};return t&&(e.value=t),e}function He(s,t){if(!zl(s))throw new D(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,a="value"in t[r]?{value:t[r].value}:void 0;if(!(r in s)){e=`JSON missing required field: '${r}'`;break}const u=s[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&u!==a.value){e=`Expected '${r}' field to equal '${a.value}'`;break}}if(e)throw new D(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=-62135596800,ii=1e6;class Q{static now(){return Q.fromMillis(Date.now())}static fromDate(t){return Q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ii);return new Q(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<si)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ii}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Q._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(He(t,Q._jsonSchema))return new Q(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-si;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Q._jsonSchemaVersion="firestore/timestamp/1.0",Q._jsonSchema={type:K("string",Q._jsonSchemaVersion),seconds:K("number"),nanoseconds:K("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{static fromTimestamp(t){return new G(t)}static min(){return new G(new Q(0,0))}static max(){return new G(new Q(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=-1;function Kl(s,t){const e=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Q(e+1,0):new Q(e,r));return new Ut(i,k.empty(),t)}function Wl(s){return new Ut(s.readTime,s.key,$e)}class Ut{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Ut(G.min(),k.empty(),$e)}static max(){return new Ut(G.max(),k.empty(),$e)}}function Ql(s,t){let e=s.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(s.documentKey,t.documentKey),e!==0?e:j(s.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(t,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(e,a).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,a=0,u=!1;t.forEach(h=>{++i,h.next(()=>{++a,u&&a===i&&e()},m=>r(m))}),u=!0,a===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,a)=>{r.push(e.call(this,i,a))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const a=t.length,u=new Array(a);let h=0;for(let m=0;m<a;m++){const _=m;e(t[_]).next(I=>{u[_]=I,++h,h===a&&r(u)},I=>i(I))}})}static doWhile(t,e){return new R((r,i)=>{const a=()=>{t()===!0?e().next(()=>{a()},i):r()};a()})}}function Jl(s){const t=s.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Zi(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}to.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=-1;function Sr(s){return s==null}function fr(s){return s===0&&1/s==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(s){let t=0;for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t++;return t}function Pr(s,t){for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&t(e,s[e])}function Zl(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||tt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,tt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,tt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new un(this.root,t,this.comparator,!1)}getReverseIterator(){return new un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new un(this.root,t,this.comparator,!0)}}class un{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=e?r(t.key,e):1,e&&i&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class tt{constructor(t,e,r,i,a){this.key=t,this.value=e,this.color=r??tt.RED,this.left=i??tt.EMPTY,this.right=a??tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,a){return new tt(t??this.key,e??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const a=r(t,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(t,e,r),null):a===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return tt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return tt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw F(27949);return t+(this.isRed()?0:1)}}tt.EMPTY=null,tt.RED=!0,tt.BLACK=!1;tt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(t,e,r,i,a){return this}insert(t,e,r){return new tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ai(this.data.getIterator())}getIteratorFrom(t){return new ai(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof it)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new it(this.comparator);return e.data=t,e}}class ai{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Lt([])}unionWith(t){let e=new it(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ae(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new tu("Invalid base64 string: "+a):a}}(t);return new St(e)}static fromUint8Array(t){const e=function(i){let a="";for(let u=0;u<i.length;++u)a+=String.fromCharCode(i[u]);return a}(t);return new St(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}St.EMPTY_BYTE_STRING=new St("");const eu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(s){if(ft(!!s,39018),typeof s=="string"){let t=0;const e=eu.exec(s);if(ft(!!e,46558,{timestamp:s}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(s.seconds),nanos:et(s.nanos)}}function et(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function qe(s){return typeof s=="string"?St.fromBase64String(s):St.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="server_timestamp",no="__type__",ro="__previous_value__",so="__local_write_time__";function Cr(s){return(s?.mapValue?.fields||{})[no]?.stringValue===eo}function io(s){const t=s.mapValue.fields[ro];return Cr(t)?io(t):t}function En(s){const t=te(s.mapValue.fields[so].timestampValue);return new Q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="(default)";class Tn{constructor(t,e){this.projectId=t,this.database=e||dr}static empty(){return new Tn("","")}get isDefaultDatabase(){return this.database===dr}isEqual(t){return t instanceof Tn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="__type__",ru="__max__",cn={mapValue:{}},su="__vector__",li="value";function le(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Cr(s)?4:ou(s)?9007199254740991:iu(s)?10:11:F(28295,{value:s})}function Pt(s,t){if(s===t)return!0;const e=le(s);if(e!==le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return En(s).isEqual(En(t));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const u=te(i.timestampValue),h=te(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(s,t);case 5:return s.stringValue===t.stringValue;case 6:return function(i,a){return qe(i.bytesValue).isEqual(qe(a.bytesValue))}(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return function(i,a){return et(i.geoPointValue.latitude)===et(a.geoPointValue.latitude)&&et(i.geoPointValue.longitude)===et(a.geoPointValue.longitude)}(s,t);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return et(i.integerValue)===et(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const u=et(i.doubleValue),h=et(a.doubleValue);return u===h?fr(u)===fr(h):isNaN(u)&&isNaN(h)}return!1}(s,t);case 9:return ae(s.arrayValue.values||[],t.arrayValue.values||[],Pt);case 10:case 11:return function(i,a){const u=i.mapValue.fields||{},h=a.mapValue.fields||{};if(oi(u)!==oi(h))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(h[m]===void 0||!Pt(u[m],h[m])))return!1;return!0}(s,t);default:return F(52216,{left:s})}}function Ge(s,t){return(s.values||[]).find(e=>Pt(e,t))!==void 0}function ue(s,t){if(s===t)return 0;const e=le(s),r=le(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(s.booleanValue,t.booleanValue);case 2:return function(a,u){const h=et(a.integerValue||a.doubleValue),m=et(u.integerValue||u.doubleValue);return h<m?-1:h>m?1:h===m?0:isNaN(h)?isNaN(m)?0:-1:1}(s,t);case 3:return ui(s.timestampValue,t.timestampValue);case 4:return ui(En(s),En(t));case 5:return hr(s.stringValue,t.stringValue);case 6:return function(a,u){const h=qe(a),m=qe(u);return h.compareTo(m)}(s.bytesValue,t.bytesValue);case 7:return function(a,u){const h=a.split("/"),m=u.split("/");for(let _=0;_<h.length&&_<m.length;_++){const I=j(h[_],m[_]);if(I!==0)return I}return j(h.length,m.length)}(s.referenceValue,t.referenceValue);case 8:return function(a,u){const h=j(et(a.latitude),et(u.latitude));return h!==0?h:j(et(a.longitude),et(u.longitude))}(s.geoPointValue,t.geoPointValue);case 9:return ci(s.arrayValue,t.arrayValue);case 10:return function(a,u){const h=a.fields||{},m=u.fields||{},_=h[li]?.arrayValue,I=m[li]?.arrayValue,w=j(_?.values?.length||0,I?.values?.length||0);return w!==0?w:ci(_,I)}(s.mapValue,t.mapValue);case 11:return function(a,u){if(a===cn.mapValue&&u===cn.mapValue)return 0;if(a===cn.mapValue)return 1;if(u===cn.mapValue)return-1;const h=a.fields||{},m=Object.keys(h),_=u.fields||{},I=Object.keys(_);m.sort(),I.sort();for(let w=0;w<m.length&&w<I.length;++w){const C=hr(m[w],I[w]);if(C!==0)return C;const V=ue(h[m[w]],_[I[w]]);if(V!==0)return V}return j(m.length,I.length)}(s.mapValue,t.mapValue);default:throw F(23264,{he:e})}}function ui(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return j(s,t);const e=te(s),r=te(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function ci(s,t){const e=s.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const a=ue(e[i],r[i]);if(a)return a}return j(e.length,r.length)}function ce(s){return pr(s)}function pr(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?function(e){return qe(e).toBase64()}(s.bytesValue):"referenceValue"in s?function(e){return k.fromName(e).toString()}(s.referenceValue):"geoPointValue"in s?function(e){return`geo(${e.latitude},${e.longitude})`}(s.geoPointValue):"arrayValue"in s?function(e){let r="[",i=!0;for(const a of e.values||[])i?i=!1:r+=",",r+=pr(a);return r+"]"}(s.arrayValue):"mapValue"in s?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",a=!0;for(const u of r)a?a=!1:i+=",",i+=`${u}:${pr(e.fields[u])}`;return i+"}"}(s.mapValue):F(61005,{value:s})}function mr(s){return!!s&&"integerValue"in s}function Vr(s){return!!s&&"arrayValue"in s}function sr(s){return!!s&&"mapValue"in s}function iu(s){return(s?.mapValue?.fields||{})[nu]?.stringValue===su}function Me(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const t={mapValue:{fields:{}}};return Pr(s.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Me(r)),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(s.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Me(s.arrayValue.values[e]);return t}return{...s}}function ou(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===ru}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.value=t}static empty(){return new Ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!sr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Me(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((u,h)=>{if(!e.isImmediateParentOf(h)){const m=this.getFieldsMap(e);this.applyChanges(m,r,i),r={},i=[],e=h.popLast()}u?r[h.lastSegment()]=Me(u):i.push(h.lastSegment())});const a=this.getFieldsMap(e);this.applyChanges(a,r,i)}delete(t){const e=this.field(t.popLast());sr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];sr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Pr(e,(i,a)=>t[i]=a);for(const i of r)delete t[i]}clone(){return new Ct(Me(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,i,a,u,h){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,G.min(),G.min(),G.min(),Ct.empty(),0)}static newFoundDocument(t,e,r,i){return new vt(t,1,e,G.min(),r,i,0)}static newNoDocument(t,e){return new vt(t,2,e,G.min(),G.min(),Ct.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,G.min(),G.min(),Ct.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e){this.position=t,this.inclusive=e}}function hi(s,t,e){let r=0;for(let i=0;i<s.position.length;i++){const a=t[i],u=s.position[i];if(a.field.isKeyField()?r=k.comparator(k.fromName(u.referenceValue),e.key):r=ue(u,e.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function fi(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let e=0;e<s.position.length;e++)if(!Pt(s.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,e="asc"){this.field=t,this.dir=e}}function au(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{}class Z extends oo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new uu(t,e,r):e==="array-contains"?new fu(t,r):e==="in"?new du(t,r):e==="not-in"?new pu(t,r):e==="array-contains-any"?new mu(t,r):new Z(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new cu(t,r):new hu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ue(e,this.value)):e!==null&&le(this.value)===le(e)&&this.matchesComparison(ue(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends oo{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Bt(t,e)}matches(t){return ao(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ao(s){return s.op==="and"}function lo(s){return lu(s)&&ao(s)}function lu(s){for(const t of s.filters)if(t instanceof Bt)return!1;return!0}function gr(s){if(s instanceof Z)return s.field.canonicalString()+s.op.toString()+ce(s.value);if(lo(s))return s.filters.map(t=>gr(t)).join(",");{const t=s.filters.map(e=>gr(e)).join(",");return`${s.op}(${t})`}}function uo(s,t){return s instanceof Z?function(r,i){return i instanceof Z&&r.op===i.op&&r.field.isEqual(i.field)&&Pt(r.value,i.value)}(s,t):s instanceof Bt?function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,u,h)=>a&&uo(u,i.filters[h]),!0):!1}(s,t):void F(19439)}function co(s){return s instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${ce(e.value)}`}(s):s instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(co).join(" ,")+"}"}(s):"Filter"}class uu extends Z{constructor(t,e,r){super(t,e,r),this.key=k.fromName(r.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class cu extends Z{constructor(t,e){super(t,"in",e),this.keys=ho("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hu extends Z{constructor(t,e){super(t,"not-in",e),this.keys=ho("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ho(s,t){return(t.arrayValue?.values||[]).map(e=>k.fromName(e.referenceValue))}class fu extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vr(e)&&Ge(e.arrayValue,this.value)}}class du extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ge(this.value.arrayValue,e)}}class pu extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ge(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ge(this.value.arrayValue,e)}}class mu extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ge(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(t,e=null,r=[],i=[],a=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=u,this.endAt=h,this.Te=null}}function di(s,t=null,e=[],r=[],i=null,a=null,u=null){return new gu(s,t,e,r,i,a,u)}function br(s){const t=dt(s);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>gr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Sr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ce(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ce(r)).join(",")),t.Te=e}return t.Te}function Dr(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<s.orderBy.length;e++)if(!au(s.orderBy[e],t.orderBy[e]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let e=0;e<s.filters.length;e++)if(!uo(s.filters[e],t.filters[e]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!fi(s.startAt,t.startAt)&&fi(s.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e=null,r=[],i=[],a=null,u="F",h=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=m,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _u(s,t,e,r,i,a,u,h){return new Sn(s,t,e,r,i,a,u,h)}function yu(s){return new Sn(s)}function pi(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function Eu(s){return s.collectionGroup!==null}function Le(s){const t=dt(s);if(t.Ie===null){t.Ie=[];const e=new Set;for(const a of t.explicitOrderBy)t.Ie.push(a),e.add(a.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new it(ut.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(_=>{_.isInequality()&&(h=h.add(_.field))})}),h})(t).forEach(a=>{e.has(a.canonicalString())||a.isKeyField()||t.Ie.push(new An(a,r))}),e.has(ut.keyField().canonicalString())||t.Ie.push(new An(ut.keyField(),r))}return t.Ie}function Qt(s){const t=dt(s);return t.Ee||(t.Ee=Tu(t,Le(s))),t.Ee}function Tu(s,t){if(s.limitType==="F")return di(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new An(i.field,a)});const e=s.endAt?new vn(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new vn(s.startAt.position,s.startAt.inclusive):null;return di(s.path,s.collectionGroup,t,s.filters,s.limit,e,r)}}function _r(s,t,e){return new Sn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,e,s.startAt,s.endAt)}function fo(s,t){return Dr(Qt(s),Qt(t))&&s.limitType===t.limitType}function po(s){return`${br(Qt(s))}|lt:${s.limitType}`}function Oe(s){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>co(i)).join(", ")}]`),Sr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ce(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ce(i)).join(",")),`Target(${r})`}(Qt(s))}; limitType=${s.limitType})`}function Nr(s,t){return t.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):k.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(s,t)&&function(r,i){for(const a of Le(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(s,t)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(s,t)&&function(r,i){return!(r.startAt&&!function(u,h,m){const _=hi(u,h,m);return u.inclusive?_<=0:_<0}(r.startAt,Le(r),i)||r.endAt&&!function(u,h,m){const _=hi(u,h,m);return u.inclusive?_>=0:_>0}(r.endAt,Le(r),i))}(s,t)}function vu(s){return(t,e)=>{let r=!1;for(const i of Le(s)){const a=Au(i,t,e);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Au(s,t,e){const r=s.field.isKeyField()?k.comparator(t.key,e.key):function(a,u,h){const m=u.data.field(a),_=h.data.field(a);return m!==null&&_!==null?ue(m,_):F(42886)}(s.field,t,e);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,t))return a}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],t))return void(i[a]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Pr(this.inner,(e,r)=>{for(const[i,a]of r)t(i,a)})}isEmpty(){return Zl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=new _t(k.comparator);function yr(){return Iu}const mo=new _t(k.comparator);function hn(...s){let t=mo;for(const e of s)t=t.insert(e.key,e);return t}function wu(s){let t=mo;return s.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Wt(){return Fe()}function go(){return Fe()}function Fe(){return new pe(s=>s.toString(),(s,t)=>s.isEqual(t))}const zc=new _t(k.comparator),Ru=new it(k.comparator);function gt(...s){let t=Ru;for(const e of s)t=t.add(e);return t}const Su=new it(j);function Pu(){return Su}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fr(t)?"-0":t}}function Vu(s){return{integerValue:""+s}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this._=void 0}}function bu(s,t,e){return s instanceof Er?function(i,a){const u={fields:{[no]:{stringValue:eo},[so]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Cr(a)&&(a=io(a)),a&&(u.fields[ro]=a),{mapValue:u}}(e,t):s instanceof In?_o(s,t):s instanceof wn?yo(s,t):function(i,a){const u=Nu(i,a),h=mi(u)+mi(i.Ae);return mr(u)&&mr(i.Ae)?Vu(h):Cu(i.serializer,h)}(s,t)}function Du(s,t,e){return s instanceof In?_o(s,t):s instanceof wn?yo(s,t):e}function Nu(s,t){return s instanceof Tr?function(r){return mr(r)||function(a){return!!a&&"doubleValue"in a}(r)}(t)?t:{integerValue:0}:null}class Er extends Pn{}class In extends Pn{constructor(t){super(),this.elements=t}}function _o(s,t){const e=Eo(t);for(const r of s.elements)e.some(i=>Pt(i,r))||e.push(r);return{arrayValue:{values:e}}}class wn extends Pn{constructor(t){super(),this.elements=t}}function yo(s,t){let e=Eo(t);for(const r of s.elements)e=e.filter(i=>!Pt(i,r));return{arrayValue:{values:e}}}class Tr extends Pn{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function mi(s){return et(s.integerValue||s.doubleValue)}function Eo(s){return Vr(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(s,t){return s.field.isEqual(t.field)&&function(r,i){return r instanceof In&&i instanceof In||r instanceof wn&&i instanceof wn?ae(r.elements,i.elements,Pt):r instanceof Tr&&i instanceof Tr?Pt(r.Ae,i.Ae):r instanceof Er&&i instanceof Er}(s.transform,t.transform)}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function mn(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Or{}function To(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new xu(s.key,Xt.none()):new kr(s.key,s.data,Xt.none());{const e=s.data,r=Ct.empty();let i=new it(ut.comparator);for(let a of t.fields)if(!i.has(a)){let u=e.field(a);u===null&&a.length>1&&(a=a.popLast(),u=e.field(a)),u===null?r.delete(a):r.set(a,u),i=i.add(a)}return new Cn(s.key,r,new Lt(i.toArray()),Xt.none())}}function ku(s,t,e){s instanceof kr?function(i,a,u){const h=i.value.clone(),m=_i(i.fieldTransforms,a,u.transformResults);h.setAll(m),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(s,t,e):s instanceof Cn?function(i,a,u){if(!mn(i.precondition,a))return void a.convertToUnknownDocument(u.version);const h=_i(i.fieldTransforms,a,u.transformResults),m=a.data;m.setAll(vo(i)),m.setAll(h),a.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(s,t,e):function(i,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Ue(s,t,e,r){return s instanceof kr?function(a,u,h,m){if(!mn(a.precondition,u))return h;const _=a.value.clone(),I=yi(a.fieldTransforms,m,u);return _.setAll(I),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),null}(s,t,e,r):s instanceof Cn?function(a,u,h,m){if(!mn(a.precondition,u))return h;const _=yi(a.fieldTransforms,m,u),I=u.data;return I.setAll(vo(a)),I.setAll(_),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(w=>w.field))}(s,t,e,r):function(a,u,h){return mn(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(s,t,e)}function gi(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ae(r,i,(a,u)=>Ou(a,u))}(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class kr extends Or{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Cn extends Or{constructor(t,e,r,i,a=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function vo(s){const t=new Map;return s.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=s.data.field(e);t.set(e,r)}}),t}function _i(s,t,e){const r=new Map;ft(s.length===e.length,32656,{Re:e.length,Ve:s.length});for(let i=0;i<e.length;i++){const a=s[i],u=a.transform,h=t.data.field(a.field);r.set(a.field,Du(u,h,e[i]))}return r}function yi(s,t,e){const r=new Map;for(const i of s){const a=i.transform,u=e.data.field(i.field);r.set(i.field,bu(a,u,t))}return r}class xu extends Or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(t.key)&&ku(a,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ue(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ue(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=go();return this.mutations.forEach(i=>{const a=t.get(i.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=e.has(i.key)?null:h;const m=To(u,h);m!==null&&r.set(i.key,m),u.isValidDocument()||u.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),gt())}isEqual(t){return this.batchId===t.batchId&&ae(this.mutations,t.mutations,(e,r)=>gi(e,r))&&ae(this.baseMutations,t.baseMutations,(e,r)=>gi(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,M;function Fu(s){if(s===void 0)return Rn("GRPC error has no .code"),P.UNKNOWN;switch(s){case z.OK:return P.OK;case z.CANCELLED:return P.CANCELLED;case z.UNKNOWN:return P.UNKNOWN;case z.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case z.INTERNAL:return P.INTERNAL;case z.UNAVAILABLE:return P.UNAVAILABLE;case z.UNAUTHENTICATED:return P.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case z.NOT_FOUND:return P.NOT_FOUND;case z.ALREADY_EXISTS:return P.ALREADY_EXISTS;case z.PERMISSION_DENIED:return P.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case z.ABORTED:return P.ABORTED;case z.OUT_OF_RANGE:return P.OUT_OF_RANGE;case z.UNIMPLEMENTED:return P.UNIMPLEMENTED;case z.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:s})}}(M=z||(z={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new wr([4294967295,4294967295],0);class Uu{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ei(s){return ft(!!s,49232),G.fromTimestamp(function(e){const r=te(e);return new Q(r.seconds,r.nanos)}(s))}function Ti(s,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(s).child("documents");return t===void 0?e:e.child(t)}function Bu(s){const t=Y.fromString(s);return ft(Gu(t),10190,{key:t.toString()}),t}function ju(s){const t=Bu(s);return t.length===4?Y.emptyPath():$u(t)}function $u(s){return ft(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function qu(s){let t=ju(s.parent);const e=s.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){ft(r===1,65062);const I=e.from[0];I.allDescendants?i=I.collectionId:t=t.child(I.collectionId)}let a=[];e.where&&(a=function(w){const C=Ao(w);return C instanceof Bt&&lo(C)?C.getFilters():[C]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(C=>function(x){return new An(se(x.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(C))}(e.orderBy));let h=null;e.limit&&(h=function(w){let C;return C=typeof w=="object"?w.value:w,Sr(C)?null:C}(e.limit));let m=null;e.startAt&&(m=function(w){const C=!!w.before,V=w.values||[];return new vn(V,C)}(e.startAt));let _=null;return e.endAt&&(_=function(w){const C=!w.before,V=w.values||[];return new vn(V,C)}(e.endAt)),_u(t,i,u,a,h,"F",m,_)}function Ao(s){return s.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=se(e.unaryFilter.field);return Z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=se(e.unaryFilter.field);return Z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=se(e.unaryFilter.field);return Z.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=se(e.unaryFilter.field);return Z.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(s):s.fieldFilter!==void 0?function(e){return Z.create(se(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(s):s.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(r=>Ao(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(e.compositeFilter.op))}(s):F(30097,{filter:s})}function se(s){return ut.fromServerFormat(s.fieldPath)}function Gu(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.yt=t}}function zu(s){const t=qu({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?_r(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(){this.Cn=new Wu}addToCollectionParentIndex(t,e){return this.Cn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ut.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Wu{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new it(Y.comparator),a=!i.has(r);return this.index[e]=i.add(r),a}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new it(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Io,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new he(0)}static cr(){return new he(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=1048576;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.changes=new pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ue(r.mutation,i,Lt.empty(),Q.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,gt()).next(()=>r))}getLocalViewOfDocuments(t,e,r=gt()){const i=Wt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(a=>{let u=hn();return a.forEach((h,m)=>{u=u.insert(h,m.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=Wt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,gt()))}populateOverlays(t,e,r){const i=[];return r.forEach(a=>{e.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(t,i).next(a=>{a.forEach((u,h)=>{e.set(u,h)})})}computeViews(t,e,r,i){let a=yr();const u=Fe(),h=function(){return Fe()}();return e.forEach((m,_)=>{const I=r.get(_.key);i.has(_.key)&&(I===void 0||I.mutation instanceof Cn)?a=a.insert(_.key,_):I!==void 0?(u.set(_.key,I.mutation.getFieldMask()),Ue(I.mutation,_,I.mutation.getFieldMask(),Q.now())):u.set(_.key,Lt.empty())}),this.recalculateAndSaveOverlays(t,a).next(m=>(m.forEach((_,I)=>u.set(_,I)),e.forEach((_,I)=>h.set(_,new Ju(I,u.get(_)??null))),h))}recalculateAndSaveOverlays(t,e){const r=Fe();let i=new _t((u,h)=>u-h),a=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const h of u)h.keys().forEach(m=>{const _=e.get(m);if(_===null)return;let I=r.get(m)||Lt.empty();I=h.applyToLocalView(_,I),r.set(m,I);const w=(i.get(h.batchId)||gt()).add(m);i=i.insert(h.batchId,w)})}).next(()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const m=h.getNext(),_=m.key,I=m.value,w=go();I.forEach(C=>{if(!a.has(C)){const V=To(e.get(C),r.get(C));V!==null&&w.set(C,V),a=a.add(C)}}),u.push(this.documentOverlayCache.saveOverlays(t,_,w))}return R.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return k.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Eu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(a=>{const u=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-a.size):R.resolve(Wt());let h=$e,m=a;return u.next(_=>R.forEach(_,(I,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),a.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(C=>{m=m.insert(I,C)}))).next(()=>this.populateOverlays(t,_,a)).next(()=>this.computeViews(t,m,_,gt())).next(I=>({batchId:h,changes:wu(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(r=>{let i=hn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const a=e.collectionGroup;let u=hn();return this.indexManager.getCollectionParents(t,a).next(h=>R.forEach(h,m=>{const _=function(w,C){return new Sn(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,m.child(a));return this.getDocumentsMatchingCollectionQuery(t,_,r,i).next(I=>{I.forEach((w,C)=>{u=u.insert(w,C)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,a,i))).next(u=>{a.forEach((m,_)=>{const I=_.getKey();u.get(I)===null&&(u=u.insert(I,vt.newInvalidDocument(I)))});let h=hn();return u.forEach((m,_)=>{const I=a.get(m);I!==void 0&&Ue(I.mutation,_,Lt.empty(),Q.now()),Nr(e,_)&&(h=h.insert(m,_))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return R.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ei(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(i){return{name:i.name,query:zu(i.bundledQuery),readTime:Ei(i.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(){this.overlays=new _t(k.comparator),this.qr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Wt();return R.forEach(e,i=>this.getOverlay(t,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,a)=>{this.St(t,e,a)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.qr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=Wt(),a=e.length+1,u=new k(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const m=h.getNext().value,_=m.getKey();if(!e.isPrefixOf(_.path))break;_.path.length===a&&m.largestBatchId>r&&i.set(m.getKey(),m)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let a=new _t((_,I)=>_-I);const u=this.overlays.getIterator();for(;u.hasNext();){const _=u.getNext().value;if(_.getKey().getCollectionGroup()===e&&_.largestBatchId>r){let I=a.get(_.largestBatchId);I===null&&(I=Wt(),a=a.insert(_.largestBatchId,I)),I.set(_.getKey(),_)}}const h=Wt(),m=a.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((_,I)=>h.set(_,I)),!(h.size()>=i)););return R.resolve(h)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Lu(e,r));let a=this.qr.get(e);a===void 0&&(a=gt(),this.qr.set(e,a)),this.qr.set(e,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.sessionToken=St.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.Qr=new it(J.$r),this.Ur=new it(J.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new J(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Gr(new J(t,e))}zr(t,e){t.forEach(r=>this.removeReference(r,e))}jr(t){const e=new k(new Y([])),r=new J(e,t),i=new J(e,t+1),a=[];return this.Ur.forEachInRange([r,i],u=>{this.Gr(u),a.push(u.key)}),a}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new k(new Y([])),r=new J(e,t),i=new J(e,t+1);let a=gt();return this.Ur.forEachInRange([r,i],u=>{a=a.add(u.key)}),a}containsKey(t){const e=new J(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class J{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return k.comparator(t.key,e.key)||j(t.Yr,e.Yr)}static Kr(t,e){return j(t.Yr,e.Yr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new it(J.$r)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Mu(a,e,r,i);this.mutationQueue.push(u);for(const h of i)this.Zr=this.Zr.add(new J(h.key,a)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),a=i<0?0:i;return R.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Yl:this.tr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new J(e,0),i=new J(e,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],u=>{const h=this.Xr(u.Yr);a.push(h)}),R.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new it(j);return e.forEach(i=>{const a=new J(i,0),u=new J(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,u],h=>{r=r.add(h.Yr)})}),R.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let a=r;k.isDocumentKey(a)||(a=a.child(""));const u=new J(new k(a),0);let h=new it(j);return this.Zr.forEachWhile(m=>{const _=m.key.path;return!!r.isPrefixOf(_)&&(_.length===i&&(h=h.add(m.Yr)),!0)},u),R.resolve(this.ti(h))}ti(t){const e=[];return t.forEach(r=>{const i=this.Xr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){ft(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return R.forEach(e.mutations,i=>{const a=new J(i.key,e.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=r})}ir(t){}containsKey(t,e){const r=new J(e,0),i=this.Zr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.ri=t,this.docs=function(){return new _t(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),a=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=yr();return e.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():vt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let a=yr();const u=e.path,h=new k(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(h);for(;m.hasNext();){const{key:_,value:{document:I}}=m.getNext();if(!u.isPrefixOf(_.path))break;_.path.length>u.length+1||Ql(Wl(I),r)<=0||(i.has(I.key)||Nr(e,I))&&(a=a.insert(I.key,I.mutableCopy()))}return R.resolve(a)}getAllFromCollectionGroup(t,e,r,i){F(9500)}ii(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sc(this)}getSize(t){return R.resolve(this.size)}}class sc extends Xu{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t){this.persistence=t,this.si=new pe(e=>br(e),Dr),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.oi=0,this._i=new xr,this.targetCount=0,this.ai=he.ur()}forEachTarget(t,e){return this.si.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),R.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new he(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Pr(e),R.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const a=[];return this.si.forEach((u,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.si.delete(u),a.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)}),R.waitFor(a).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),R.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,a=[];return i&&e.forEach(u=>{a.push(i.markPotentiallyOrphaned(t,u))}),R.waitFor(a)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this._i.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e){this.ui={},this.overlays={},this.ci=new to(0),this.li=!1,this.li=!0,this.hi=new ec,this.referenceDelegate=t(this),this.Pi=new ic(this),this.indexManager=new Ku,this.remoteDocumentCache=function(i){return new rc(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Hu(e),this.Ii=new Zu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new tc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new nc(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new ac(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(a=>this.referenceDelegate.di(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ai(t,e){return R.or(Object.values(this.ui).map(r=>()=>r.containsKey(t,e)))}}class ac extends Xl{constructor(t){super(),this.currentSequenceNumber=t}}class Mr{constructor(t){this.persistence=t,this.Ri=new xr,this.Vi=null}static mi(t){return new Mr(t)}get fi(){if(this.Vi)return this.Vi;throw F(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(a=>this.fi.add(a.toString()))}).next(()=>r.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.fi,r=>{const i=k.fromPath(r);return this.gi(t,i).next(a=>{a||e.removeEntry(i,G.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=gt(),i=gt();for(const a of e.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Lr(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Aa()?8:Jl(Ta())>0?6:4}()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const a={result:null};return this.ys(t,e).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ws(t,e,i,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new lc;return this.Ss(t,e,u).next(h=>{if(a.result=h,this.Vs)return this.bs(t,e,u,h.size)})}).next(()=>a.result)}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ne()<=L.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Oe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),R.resolve()):(Ne()<=L.DEBUG&&N("QueryEngine","Query:",Oe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ne()<=L.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Oe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Qt(e))):R.resolve())}ys(t,e){if(pi(e))return R.resolve(null);let r=Qt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=_r(e,null,"F"),r=Qt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(a=>{const u=gt(...a);return this.ps.getDocuments(t,u).next(h=>this.indexManager.getMinOffset(t,r).next(m=>{const _=this.Ds(e,h);return this.Cs(e,_,u,m.readTime)?this.ys(t,_r(e,null,"F")):this.vs(t,_,e,m)}))})))}ws(t,e,r,i){return pi(e)||i.isEqual(G.min())?R.resolve(null):this.ps.getDocuments(t,r).next(a=>{const u=this.Ds(e,a);return this.Cs(e,u,r,i)?R.resolve(null):(Ne()<=L.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Oe(e)),this.vs(t,u,e,Kl(i,$e)).next(h=>h))})}Ds(t,e){let r=new it(vu(t));return e.forEach((i,a)=>{Nr(t,a)&&(r=r.add(a))}),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const a=t.limitType==="F"?e.last():e.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(t,e,r){return Ne()<=L.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Oe(e)),this.ps.getDocumentsMatchingQuery(t,e,Ut.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next(a=>(e.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="LocalStore";class hc{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new _t(j),this.xs=new pe(a=>br(a),Dr),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Yu(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}function fc(s,t,e,r){return new hc(s,t,e,r)}async function dc(s,t){const e=dt(s);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],h=[];let m=gt();for(const _ of i){u.push(_.batchId);for(const I of _.mutations)m=m.add(I.key)}for(const _ of a){h.push(_.batchId);for(const I of _.mutations)m=m.add(I.key)}return e.localDocuments.getDocuments(r,m).next(_=>({Ls:_,removedBatchIds:u,addedBatchIds:h}))})})}class vi{constructor(){this.activeTargetIds=Pu()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pc{constructor(){this.Mo=new vi,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new vi,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="ConnectivityMonitor";class Ii{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){N(Ai,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){N(Ai,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn=null;function vr(){return fn===null?fn=function(){return 268435456+Math.round(2147483648*Math.random())}():fn++,"0x"+fn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="RestConnection",gc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _c{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===dr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,a){const u=vr(),h=this.zo(t,e.toUriEncodedString());N(ir,`Sending RPC '${t}' ${u}:`,h,r);const m={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(m,i,a);const{host:_}=new URL(h),I=Ea(_);return this.Jo(t,h,m,r,I).then(w=>(N(ir,`Received RPC '${t}' ${u}: `,w),w),w=>{throw Ji(ir,`RPC '${t}' ${u} failed with error: `,w,"url: ",h,"request:",r),w})}Ho(t,e,r,i,a,u){return this.Go(t,e,r,i,a)}jo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+de}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,a)=>t[a]=i),r&&r.headers.forEach((i,a)=>t[a]=i)}zo(t,e){const r=gc[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class Ec extends _c{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,a){const u=vr();return new Promise((h,m)=>{const _=new zi;_.setWithCredentials(!0),_.listenOnce(Ki.COMPLETE,()=>{try{switch(_.getLastErrorCode()){case pn.NO_ERROR:const w=_.getResponseJson();N(st,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),h(w);break;case pn.TIMEOUT:N(st,`RPC '${t}' ${u} timed out`),m(new D(P.DEADLINE_EXCEEDED,"Request time out"));break;case pn.HTTP_ERROR:const C=_.getStatus();if(N(st,`RPC '${t}' ${u} failed with status:`,C,"response text:",_.getResponseText()),C>0){let V=_.getResponseJson();Array.isArray(V)&&(V=V[0]);const x=V?.error;if(x&&x.status&&x.message){const U=function(H){const ct=H.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(ct)>=0?ct:P.UNKNOWN}(x.status);m(new D(U,x.message))}else m(new D(P.UNKNOWN,"Server responded with status "+_.getStatus()))}else m(new D(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:t,streamId:u,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{N(st,`RPC '${t}' ${u} completed.`)}});const I=JSON.stringify(i);N(st,`RPC '${t}' ${u} sending request:`,i),_.send(e,"POST",I,r,15)})}T_(t,e,r){const i=vr(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Xi(),h=Qi(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(m.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(m.useFetchStreams=!0),this.jo(m.initMessageHeaders,e,r),m.encodeInitMessageHeaders=!0;const I=a.join("");N(st,`Creating RPC '${t}' stream ${i}: ${I}`,m);const w=u.createWebChannel(I,m);this.I_(w);let C=!1,V=!1;const x=new yc({Yo:b=>{V?N(st,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(C||(N(st,`Opening RPC '${t}' stream ${i} transport.`),w.open(),C=!0),N(st,`RPC '${t}' stream ${i} sending:`,b),w.send(b))},Zo:()=>w.close()}),U=(b,H,ct)=>{b.listen(H,nt=>{try{ct(nt)}catch(Tt){setTimeout(()=>{throw Tt},0)}})};return U(w,ke.EventType.OPEN,()=>{V||(N(st,`RPC '${t}' stream ${i} transport opened.`),x.o_())}),U(w,ke.EventType.CLOSE,()=>{V||(V=!0,N(st,`RPC '${t}' stream ${i} transport closed`),x.a_(),this.E_(w))}),U(w,ke.EventType.ERROR,b=>{V||(V=!0,Ji(st,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),x.a_(new D(P.UNAVAILABLE,"The operation could not be completed")))}),U(w,ke.EventType.MESSAGE,b=>{if(!V){const H=b.data[0];ft(!!H,16349);const ct=H,nt=ct?.error||ct[0]?.error;if(nt){N(st,`RPC '${t}' stream ${i} received error:`,nt);const Tt=nt.status;let yt=function(f){const p=z[f];if(p!==void 0)return Fu(p)}(Tt),ot=nt.message;yt===void 0&&(yt=P.INTERNAL,ot="Unknown error status: "+Tt+" with message "+nt.message),V=!0,x.a_(new D(yt,ot)),w.close()}else N(st,`RPC '${t}' stream ${i} received:`,H),x.u_(H)}}),U(h,Wi.STAT_EVENT,b=>{b.stat===cr.PROXY?N(st,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===cr.NOPROXY&&N(st,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(s){return new Uu(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e,r=1e3,i=1.5,a=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{}class Ac extends vc{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new D(P.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Go(t,Ti(e,r),i,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(P.UNKNOWN,a.toString())})}Ho(t,e,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Ho(t,Ti(e,r),i,u,h,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new D(P.UNKNOWN,u.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class Ic{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Rn(e),this.aa=!1):N("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="RemoteStore";class wc{constructor(t,e,r,i,a){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo(u=>{r.enqueueAndForget(async()=>{Po(this)&&(N(Ro,"Restarting streams for network reachability change."),await async function(m){const _=dt(m);_.Ea.add(4),await Fr(_),_.Ra.set("Unknown"),_.Ea.delete(4),await So(_)}(this))})}),this.Ra=new Ic(r,i)}}async function So(s){if(Po(s))for(const t of s.da)await t(!0)}async function Fr(s){for(const t of s.da)await t(!1)}function Po(s){return dt(s).Ea.size===0}async function Rc(s,t){const e=dt(s);t?(e.Ea.delete(2),await So(e)):t||(e.Ea.add(2),await Fr(e),e.Ra.set("Unknown"))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e,r,i,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new xe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,a){const u=Date.now()+r,h=new Ur(t,e,u,i,a);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class Sc{constructor(){this.queries=wi(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=dt(e),a=i.queries;i.queries=wi(),a.forEach((u,h)=>{for(const m of h.Sa)m.onError(r)})})(this,new D(P.ABORTED,"Firestore shutting down"))}}function wi(){return new pe(s=>po(s),fo)}function Pc(s){s.Ca.forEach(t=>{t.next()})}var Ri,Si;(Si=Ri||(Ri={})).Ma="default",Si.Cache="cache";const Cc="SyncEngine";class Vc{constructor(t,e,r,i,a,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new pe(h=>po(h),fo),this.Iu=new Map,this.Eu=new Set,this.du=new _t(k.comparator),this.Au=new Map,this.Ru=new xr,this.Vu={},this.mu=new Map,this.fu=he.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function Pi(s,t,e){const r=dt(s);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach((a,u)=>{const h=u.view.va(t);h.snapshot&&i.push(h.snapshot)}),function(u,h){const m=dt(u);m.onlineState=h;let _=!1;m.queries.forEach((I,w)=>{for(const C of w.Sa)C.va(h)&&(_=!0)}),_&&Pc(m)}(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function bc(s,t,e){const r=dt(s),i=[],a=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach((h,m)=>{u.push(r.pu(m,t,e).then(_=>{if((_||e)&&r.isPrimaryClient){const I=_?!_.fromCache:e?.targetChanges.get(m.targetId)?.current;r.sharedClientState.updateQueryState(m.targetId,I?"current":"not-current")}if(_){i.push(_);const I=Lr.As(m.targetId,_);a.push(I)}}))}),await Promise.all(u),r.Pu.H_(i),await async function(m,_){const I=dt(m);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(_,C=>R.forEach(C.Es,V=>I.persistence.referenceDelegate.addReference(w,C.targetId,V)).next(()=>R.forEach(C.ds,V=>I.persistence.referenceDelegate.removeReference(w,C.targetId,V)))))}catch(w){if(!Zi(w))throw w;N(cc,"Failed to update sequence numbers: "+w)}for(const w of _){const C=w.targetId;if(!w.fromCache){const V=I.Ms.get(C),x=V.snapshotVersion,U=V.withLastLimboFreeSnapshotVersion(x);I.Ms=I.Ms.insert(C,U)}}}(r.localStore,a))}async function Dc(s,t){const e=dt(s);if(!e.currentUser.isEqual(t)){N(Cc,"User change. New user:",t.toKey());const r=await dc(e.localStore,t);e.currentUser=t,function(a,u){a.mu.forEach(h=>{h.forEach(m=>{m.reject(new D(P.CANCELLED,u))})}),a.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bc(e,r.Ls)}}class Ci{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=wo(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return fc(this.persistence,new uc,t.initialUser,this.serializer)}Cu(t){return new oc(Mr.mi,this.serializer)}Du(t){return new pc}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ci.provider={build:()=>new Ci};class Vi{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pi(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dc.bind(null,this.syncEngine),await Rc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Sc}()}createDatastore(t){const e=wo(t.databaseInfo.databaseId),r=function(a){return new Ec(a)}(t.databaseInfo);return function(a,u,h,m){return new Ac(a,u,h,m)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,a,u,h){return new wc(r,i,a,u,h)}(this.localStore,this.datastore,t.asyncQueue,e=>Pi(this.syncEngine,e,0),function(){return Ii.v()?new Ii:new mc}())}createSyncEngine(t,e){return function(i,a,u,h,m,_,I){const w=new Vc(i,a,u,h,m,_);return I&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(e){const r=dt(e);N(Ro,"RemoteStore shutting down."),r.Ea.add(5),await Fr(r),r.Aa.shutdown(),r.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Vi.provider={build:()=>new Vi};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="firestore.googleapis.com",Di=!0;class Ni{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oc,this.ssl=Di}else this.host=t.host,this.ssl=t.ssl??Di;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Io;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Qu)throw new D(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nc(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class kc{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ni({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ni(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new xl;switch(r.type){case"firstParty":return new Fl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=bi.get(e);r&&(N("ComponentProvider","Removing Datastore"),bi.delete(e),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Br(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(He(e,Rt._jsonSchema))return new Rt(t,r||null,new k(Y.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:K("string",Rt._jsonSchemaVersion),referencePath:K("string")};class jr extends Br{constructor(t,e,r){super(t,e,yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new k(t))}withConverter(t){return new jr(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="AsyncQueue";class ki{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Tc(this,"async_queue_retry"),this._c=()=>{const r=or();r&&N(Oi,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=or();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=or();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new xe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Zi(t))throw t;N(Oi,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Rn("INTERNAL UNHANDLED ERROR: ",xi(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=Ur.createAndSchedule(this,t,e,r,a=>this.hc(a));return this.tc.push(i),i}uc(){this.nc&&F(47125,{Pc:xi(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function xi(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),t}class xc extends kc{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new ki,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ki(t),this._firestoreClient=void 0,await t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Vt(St.fromBase64String(t))}catch(e){throw new D(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Vt(St.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(He(t,Vt._jsonSchema))return Vt.fromBase64String(t.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:K("string",Vt._jsonSchemaVersion),bytes:K("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(t){if(He(t,Jt._jsonSchema))return new Jt(t.latitude,t.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:K("string",Jt._jsonSchemaVersion),latitude:K("number"),longitude:K("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(He(t,Yt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Yt(t.vectorValues);throw new D(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:K("string",Yt._jsonSchemaVersion),vectorValues:K("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new RegExp("[~\\*/\\[\\]]");function Lc(s,t,e){if(t.search(Mc)>=0)throw Mi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,e);try{return new Co(...t.split("."))._internalPath}catch{throw Mi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,e)}}function Mi(s,t,e,r,i){const a=r&&!r.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let m="";return(a||u)&&(m+=" (found",a&&(m+=` in field ${r}`),u&&(m+=` in document ${i}`),m+=")"),new D(P.INVALID_ARGUMENT,h+s+m)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,e,r,i,a){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Fc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Fc extends Vo{data(){return super.data()}}function bo(s,t){return typeof t=="string"?Lc(s,t):t instanceof Co?t._internalPath:t._delegate._internalPath}class dn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class oe extends Vo{constructor(t,e,r,i,a,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new gn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=oe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}oe._jsonSchemaVersion="firestore/documentSnapshot/1.0",oe._jsonSchema={type:K("string",oe._jsonSchemaVersion),bundleSource:K("string","DocumentSnapshot"),bundleName:K("string"),bundle:K("string")};class gn extends oe{data(t={}){return super.data(t)}}class Be{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new dn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new gn(this._firestore,this._userDataWriter,r.key,r,new dn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map(h=>{const m=new gn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(h=>a||h.type!==3).map(h=>{const m=new gn(i._firestore,i._userDataWriter,h.doc.key,h.doc,new dn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let _=-1,I=-1;return h.type!==0&&(_=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),I=u.indexOf(h.doc.key)),{type:Uc(h.type),doc:m,oldIndex:_,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Be._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=jl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Uc(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:s})}}Be._jsonSchemaVersion="firestore/querySnapshot/1.0",Be._jsonSchema={type:K("string",Be._jsonSchemaVersion),bundleSource:K("string","QuerySnapshot"),bundleName:K("string"),bundle:K("string")};(function(t,e=!0){(function(i){de=i})(Il),yn(new _n("firestore",(r,{instanceIdentifier:i,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new xc(new Ml(r.getProvider("auth-internal")),new Ul(u,r.getProvider("app-check-internal")),function(_,I){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new D(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tn(_.options.projectId,I)}(u,i),u);return a={useFetchStreams:e,...a},h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),ie(ti,ei,t),ie(ti,ei,"esm2020")})();var Bc="firebase",jc="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie(Bc,jc,"app");let $c=null;console.warn("Firebase projectId is not defined. Firestore will not be initialized.");const Kc=()=>{const[s,t]=Kt.useState(0),[e,r]=Kt.useState(!1),[i,a]=Kt.useState(!1),[u,h]=Kt.useState(!1),[m,_]=Kt.useState(!1),[I,w]=Kt.useState(!1);Kt.useEffect(()=>{a(!0);const b=localStorage.getItem("websiteIsLiked");b&&r(b==="true");{const H=localStorage.getItem("websiteLikes");H&&t(Number(H)),console.warn("Firestore is not initialized. Skipping realtime updates.");return}},[]);const C=()=>{h(!0),setTimeout(()=>{h(!1)},300)},V=async()=>{if(!I){if(e){C();return}try{if(w(!0),!$c){const H=Number(localStorage.getItem("websiteLikes")||"0")+1;localStorage.setItem("websiteLikes",String(H)),t(H)}r(!0),localStorage.setItem("websiteIsLiked","true"),C()}catch(b){console.error("Error updating likes:",b)}finally{w(!1)}}};if(!i)return null;const x=e?"border-[var(--sec)]":"border-[var(--white-icon)]",U=`
    w-6 h-6 transition-all duration-300 ease-in-out 
    ${e?"text-[var(--sec)] scale-110":"text-[var(--white-icon)] group-hover:text-[var(--white)] group-hover:scale-105"}
    ${u?" animate-scale":""}
  `;return De.jsx("div",{className:"flex items-center",children:De.jsxs("button",{onClick:V,disabled:I,className:`hover:scale-105
          group relative w-40 h-10 flex items-center justify-center p-3
          rounded-full transition-all duration-300 ease-in-out transform border-2 ${x}
          ${e?"":"md:hover:border-[var(--white)]"}
          ${u?" animate-scale":""}
        `,children:[De.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:U,children:De.jsx("path",{d:"M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"})}),De.jsxs("span",{className:`
          text-sm pl-3 transition-all duration-300 ease-in-out ${m?"animate-scale":""}
          text-[var(--white)]
        `,children:[s," Likes"]})]})})};export{Kc as default};
