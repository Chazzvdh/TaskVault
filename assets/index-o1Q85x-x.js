(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,I=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),q=new WeakMap;let st=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&q.set(e,t))}return t}toString(){return this.cssText}};const ct=i=>new st(typeof i=="string"?i:i+"",void 0,V),S=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new st(e,i,V)},ht=(i,t)=>{if(I)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=O.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},W=I?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ct(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dt,defineProperty:pt,getOwnPropertyDescriptor:ut,getOwnPropertyNames:mt,getOwnPropertySymbols:ft,getPrototypeOf:$t}=Object,y=globalThis,K=y.trustedTypes,gt=K?K.emptyScript:"",M=y.reactiveElementPolyfillSupport,k=(i,t)=>i,B={toAttribute(i,t){switch(t){case Boolean:i=i?gt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},rt=(i,t)=>!dt(i,t),J={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=ut(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const t=$t(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,r=[...mt(e),...ft(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(W(s))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){var o;const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const n=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:B).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=r.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:B;this._$Em=s,this[s]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??rt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$EO)==null||r.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[k("elementProperties")]=new Map,A[k("finalized")]=new Map,M==null||M({ReactiveElement:A}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,R=C.trustedTypes,G=R?R.createPolicy("lit-html",{createHTML:i=>i}):void 0,it="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+g,yt=`<${ot}>`,b=document,P=()=>b.createComment(""),U=i=>i===null||typeof i!="object"&&typeof i!="function",nt=Array.isArray,vt=i=>nt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",z=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Z=/>/g,v=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,at=/^(?:script|style|textarea|title)$/i,_t=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),p=_t(1),x=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),tt=new WeakMap,_=b.createTreeWalker(b,129);function lt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(t):t}const bt=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":"",n=E;for(let c=0;c<e;c++){const a=i[c];let h,u,l=-1,f=0;for(;f<a.length&&(n.lastIndex=f,u=n.exec(a),u!==null);)f=n.lastIndex,n===E?u[1]==="!--"?n=Y:u[1]!==void 0?n=Z:u[2]!==void 0?(at.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=v):u[3]!==void 0&&(n=v):n===v?u[0]===">"?(n=s??E,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,h=u[1],n=u[3]===void 0?v:u[3]==='"'?X:Q):n===X||n===Q?n=v:n===Y||n===Z?n=E:(n=v,s=void 0);const $=n===v&&i[c+1].startsWith("/>")?" ":"";o+=n===E?a+yt:l>=0?(r.push(h),a.slice(0,l)+it+a.slice(l)+g+$):a+g+(l===-2?c:$)}return[lt(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};class D{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[h,u]=bt(t,e);if(this.el=D.createElement(h,r),_.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=_.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(it)){const f=u[n++],$=s.getAttribute(l).split(g),N=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:N[2],strings:$,ctor:N[1]==="."?xt:N[1]==="?"?wt:N[1]==="@"?St:L}),s.removeAttribute(l)}else l.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(at.test(s.tagName)){const l=s.textContent.split(g),f=l.length-1;if(f>0){s.textContent=R?R.emptyScript:"";for(let $=0;$<f;$++)s.append(l[$],P()),_.nextNode(),a.push({type:2,index:++o});s.append(l[f],P())}}}else if(s.nodeType===8)if(s.data===ot)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)a.push({type:7,index:o}),l+=g.length-1}o++}}static createElement(t,e){const r=b.createElement("template");return r.innerHTML=t,r}}function w(i,t,e=i,r){var n,c;if(t===x)return t;let s=r!==void 0?(n=e._$Co)==null?void 0:n[r]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=s:e._$Cl=s),s!==void 0&&(t=w(i,s._$AS(i,t.values),s,r)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=((t==null?void 0:t.creationScope)??b).importNode(e,!0);_.currentNode=s;let o=_.nextNode(),n=0,c=0,a=r[0];for(;a!==void 0;){if(n===a.index){let h;a.type===2?h=new T(o,o.nextSibling,this,t):a.type===1?h=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(h=new Et(o,this,t)),this._$AV.push(h),a=r[++c]}n!==(a==null?void 0:a.index)&&(o=_.nextNode(),n++)}return _.currentNode=b,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):vt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=D.createElement(lt(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new At(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new D(t)),e}k(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new T(this.S(P()),this.S(P()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=d}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=w(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const c=t;let a,h;for(t=o[0],a=0;a<o.length-1;a++)h=w(this,c[r+a],e,a),h===x&&(h=this._$AH[a]),n||(n=!U(h)||h!==this._$AH[a]),h===d?t=d:t!==d&&(t+=(h??"")+o[a+1]),this._$AH[a]=h}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class wt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class St extends L{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===x)return;const r=this._$AH,s=t===d&&r!==d||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==d&&(r===d||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Et{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const F=C.litHtmlPolyfillSupport;F==null||F(D,T),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.1.3");const kt=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let s=r._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;r._$litPart$=s=new T(t.insertBefore(P(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var et;m._$litElement$=!0,m.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:m});const j=globalThis.litElementPolyfillSupport;j==null||j({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");class Ct extends m{static get properties(){return{task:{type:Object}}}constructor(){super(),this.task=null}render(){return p`
      <div>
        ${this.task?p`
          <div class="task" style="--border-bottom-color: ${this.getBorderColor(this.task.status)};">
            <h3>${this.task.title}</h3>
            <hr>
            <p>${this.task.description}</p>
            <p>Due Date: ${this.formatDate(this.task.dueDate)}</p> <!-- Formatting dueDate -->
            <p>Priority: <span class="priority ${this.task.priority.toLowerCase()}">${this.task.priority.toLowerCase().replace("_"," ")}</span></p>
            <p>Status: <span class="status">${this.task.status.toLowerCase().replace("_"," ")}</span></p> <!-- Apply styling to Status -->
            <hr>
            <div>Assignee: <span id="username">${this.task.user.username}</span> <span class="text-size-3 handle">@${this.task.user.handle}</span></div>
          </div>`:p`<p class="loading-message">Loading task...</p>`}
      </div>
    `}formatDate(t){const e={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,e)}getBorderColor(t){switch(t){case"TODO":return"var(--color-accent-red)";case"IN_PROGRESS":return"var(--color-accent-yellow)";case"IN_REVIEW":return"var(--color-accent-blue)";case"DONE":return"var(--color-accent-green)";default:return"var(--border-color)"}}static get styles(){return S`

      :host {
        
      }

      .status, .priority{
        text-transform: capitalize;
      }

      .task {
        background-color: var(--color-primary);
        border: 1px solid var(--border-color);
        border-bottom: 5px solid var(--border-bottom-color);
        
        min-width: 200px;
        max-width: 400px;
        min-height: 300px;

        padding: 20px;

        border-radius: 5px;
      }

      .task h3 {
        color: var(--text-primary);
        margin-top: 0;
      }

      .task p {
        color: var(--text-secondary);
        margin-bottom: 10px;
      }

      .task .handle {
        font-style: italic;
        color: var(--color-handle);
      }

      .task #username {
        color: var(--text-secondary);
      }

      .loading-message {
        color: var(--text-primary);
      }

      .text-size-3 {
        font-size: var(--text-size-3);
      }

      hr {
        margin: 10px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
      }
      
      .priority {
        color: var(--text-dark);
        padding: 5px;
        border-radius: 5px;
      }

      .priority.low {
        background-color: var(--priority-3); /* Define color for low priority */
      }

      .priority.medium {
        background-color: var(--priority-2); /* Define color for medium priority */
      }

      .priority.high {
        background-color: var(--priority-1); /* Define color for high priority */
      }

    `}}window.customElements.define("task-element",Ct);const Pt="0.0.1",H="http://localhost:8080";class Ut extends m{static get properties(){return{userId:{type:Number},user:{type:Object}}}constructor(){super(),this.user=null}connectedCallback(){super.connectedCallback(),this.fetch()}async fetch(){try{const t=await fetch(`${H}/api/user/${this.userId}`);if(!t.ok)throw new Error("Network response was not ok");const e=await t.json();this.user=e}catch(t){console.error("Error fetching task:",t)}}render(){return p`
    <div id="container">
      ${this.user?p`
        <div class="user">
          <h3>${this.user.username} <span class="text-size-3 handle">@${this.user.handle}</span></h3>
          <h4>Tasks:</h4>
          <ul>
            ${this.user.tasks.map(t=>p`<li>${t.title} <span class="white">></span> <a href="/" class="green">${t.id}</a></li>`)}
          </ul>
        </div>`:p`<p class="loading-message">Loading user...</p>`}
    </div>
  `}formatDate(t){const e={year:"numeric",month:"long",day:"numeric"};return new Date(t).toLocaleDateString(void 0,e)}static get styles(){return S`

      #container {
        background-color: var(--color-light);
        max-width: 400px;

        padding: 20px;
        margin: 10px;

        border-radius: 5px;
        border: 1px solid var(--border-color);
        border-bottom: 5px solid var(--color-accent-green);
      }

      .user {
        background-color: var(--color-light);
      }

      .user h3 {
        color: var(--text-primary);
        margin-top: 0;
      }

      .user p {
        color: var(--text-secondary);
        margin-bottom: 10px;
      }
      
      .handle {
        color: var(--color-handle);
      }

      .gray {
        color: var(--text-secondary);
      }

      .white {
        color: var(--text-primary);
      }

      .user ul {
        padding-left: 0;
        padding-inline-start: 2ch;
        color: var(--text-secondary);
      }

      .user li::marker {
        font-size: var(--text-size-1);
        color: var(--color-accent-green);
      }
      
      .user a {
        color: var(--color-accent-green);
      }

      .user-info {
        font-style: italic;
        color: var(--color-secondary);
      }

      .loading-message {
        color: var(--color-primary);
      }

      .text-size-3 {
        font-size: var(--text-size-3);
      }
    `}}window.customElements.define("user-element",Ut);class Dt extends m{static get properties(){return{tasks:{type:Array},priorityFilter:{type:String},statusFilter:{type:String},titleFilter:{type:String},descriptionFilter:{type:String},priorities:{type:Array},statuses:{type:Array},sortDirection:{type:String}}}constructor(){super(),this.tasks=[],this.priorityFilter="",this.statusFilter="",this.titleFilter="",this.descriptionFilter="",this.priorities=[],this.statuses=[],this.sortDirection="desc"}connectedCallback(){super.connectedCallback(),this.fetchEnums(),this.fetchTasks()}async fetchEnums(){try{const t=await fetch(`${H}/api/enums/priority`),e=await fetch(`${H}/api/enums/taskstatus`);if(!t.ok||!e.ok)throw new Error("Failed to fetch enums");const r=await t.json(),s=await e.json();this.priorities=r,this.statuses=s}catch(t){console.error("Error fetching enums:",t)}}async fetchTasks(){try{const t=await fetch(`${H}/api/task`);if(!t.ok)throw new Error("Network response was not ok");const e=await t.json();this.tasks=this.sortTasksByDueDate(e)}catch(t){console.error("Error fetching tasks:",t)}}sortTasksByDueDate(t){const e=(r,s)=>{const o=new Date(r.dueDate.join("-")),n=new Date(s.dueDate.join("-"));return this.sortDirection==="desc"?n-o:o-n};return t.sort(e)}render(){return p`
      <div class="container">
        <div class="filters">
          <select class="filter-input" @change="${this.handlePriorityFilter}">
            <option value="">All Priorities</option>
            ${this.priorities.map(t=>p`<option value="${t}">${t}</option>`)}
          </select>
          <select class="filter-input" @change="${this.handleStatusFilter}">
            <option class="filter-input" value="">All Statuses</option>
            ${this.statuses.map(t=>p`<option value="${t}">${t}</option>`)}
          </select>
          <select class="filter-input" @change="${this.handleSortDirection}">
            <option value="desc">Due Date - Farthest</option>
            <option value="asc">Due Date - Nearest</option>
          </select>
          <input class="filter-input" type="text" placeholder="Context" @input="${this.handleDescriptionFilter}">
        </div>
        ${this.tasks.length>0?p`
          <div class="status-containers">
              ${this.statuses.map(t=>p`
            <div class="status-container">
                <h2 class="status">${t.toLowerCase().replace("_"," ")}</h2>
                <div class="tasks">
                    ${this.renderTasksByStatus(t)}
                </div>
            </div>
            `)}
          </div>
        `:p`<p class="loading-message">Loading tasks...</p>`}
      </div>
    `}handlePriorityFilter(t){this.priorityFilter=t.target.value,this.requestUpdate()}handleStatusFilter(t){this.statusFilter=t.target.value,this.requestUpdate()}handleDescriptionFilter(t){this.descriptionFilter=t.target.value.toLowerCase(),this.requestUpdate()}handleSortDirection(t){this.sortDirection=t.target.value,this.tasks=this.sortTasksByDueDate(this.tasks),this.requestUpdate()}renderTasksByStatus(t){return this.filteredTasks(t).map(e=>p`
      <task-element .task="${e}"></task-element>
    `)}filteredTasks(t){return this.tasks.filter(e=>{const r=!this.priorityFilter||e.priority===this.priorityFilter,s=!this.statusFilter||e.status===this.statusFilter,o=!this.descriptionFilter||e.description.toLowerCase().includes(this.descriptionFilter);return r&&s&&o}).filter(e=>e.status===t)}static get styles(){return S`
      .container {
        display: grid;
        grid-template-rows: auto 1fr;
        flex-wrap: wrap;
        padding: 10px;
      }

      .filters {
        margin-bottom: 10px;
      }

      .filters select, .filters input {
        margin-right: 10px;
        padding: 5px;
      }

      .status-containers {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .status-container {
        flex: 1;
        padding: 10px;
        background-color: var(--color-secondary);
        border-radius: 5px;
        border: 1px solid var(--border-color);
      }
          
      .status-container h2 {
        margin: 0 0 10px 0;
      }

      .loading-message {
        color: var(--text-primary);
      }
          
      .tasks {
        display: grid;
        gap: 10px;
      }
          
      .filter-input {
        background-color: var(--color-secondary);
        color: var(--text-primary);
        border: 1px solid var(--border-color);
      }
          
      .status {
        text-transform: capitalize;
      }
    `}}window.customElements.define("status-container-element",Dt);class Tt extends m{static get properties(){return{scrolled:{type:Boolean}}}constructor(){super(),this.scrolled=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this.handleScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.handleScroll.bind(this))}handleScroll(){const t=document.querySelector("header-container").offsetHeight;this.scrolled=window.scrollY>t,this.requestUpdate()}render(){return p`
            <div class="flex-column" id="${this.scrolled?"menu1":"menu2"}">
                <menu-button-element href="/home" text="Home"></menu-button-element>
                <menu-button-element href="/tasks" text="Tasks"></menu-button-element>
                <menu-button-element href="/users" text="Users"></menu-button-element>
                <menu-button-element href="/status" text="Status"></menu-button-element>
                <menu-button-element href="/logout" text="Logout"></menu-button-element>
            </div>
        `}static get styles(){return S`
            :host {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 10px;
              gap: 10px;
              height: calc(100vh - var(--header-height) - var(--footer-height) - 20px);
              width: calc(var(--side-width) - 21px);
            }
          
            .flex-column {
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
          
            #menu1 {
              position: fixed;
              padding: 10px;
              width: calc(var(--side-width) - 21px);
              top: 0;
              left: 0;
              background-color: var(--color-secondary);
            }
        `}}customElements.define("menu-element",Tt);class Nt extends m{constructor(){super()}render(){return p`
            <div id="left" class="centered">
                <img src="taskvault-logo.svg" alt="Task Vault Logo" style="width: calc(var(--header-height) - 21px);">
                <span>Task Vault</span>
            </div>
            <div id="right" class="centered">
                <p>Version ${Pt}</p>
            </div>
        `}getVersion(){return"0.0.1"}static get styles(){return S`
          :host {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background-color: var(--color-primary);
            color: var(--color-text);
            font-size: 1.5rem;
            font-weight: bold;
          }
          
          .centered {
                display: flex;
                align-items: center;
          }
          
          span {
            font-size: 1.5rem;
            font-weight: bold;
            color: var(--color-text);
            margin-left: 10px;
          }
          
          p {
            font-size: 1rem;
            color: var(--color-text);
            margin: 0;
          }
        `}}customElements.define("header-element",Nt);class Ot extends m{static get properties(){return{href:{type:String},text:{type:String}}}constructor(){super(),this.href="",this.text=""}render(){return p`
            <button @click="${this.handleClick}" class="menu-button">${this.text}</button>
        `}handleClick(){window.location.href=this.href}static get styles(){return S`
            .menu-button {
              padding: 10px;
              width: 100%;
              background-color: var(--color-primary);
              color: var(--color-text);
              text-decoration: none;
              border: 1px solid var(--border-color);
              border-radius: 5px;
              cursor: pointer;
            }
          
            .menu-button:hover {
              background-color: var(--color-tertiary);
            }
        `}}customElements.define("menu-button-element",Ot);
