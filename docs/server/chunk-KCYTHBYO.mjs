import './polyfills.server.mjs';
import{A as V,B as ce,C as b,D as he,E as d,F as z,G as Z,H as g,I as fe,K as pe,Q as ge,R as Q,T as me,U as N,V as ye,W as ve,Z as _e,a as ne,b as ie,ba as Ce,c as re,d as x,e as O,ea as De,f as S,fa as Ve,g as h,h as U,i as D,j as oe,k as se,l as H,m as L,n as v,o as $,p as ae,q as le,r as f,s as a,t as W,u as A,v as ue,w as p,x as de,y as l,z as u}from"./chunk-4O5VOS4Y.mjs";import{a as c,b as C}from"./chunk-VVCT4QZE.mjs";var Ie=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(W),a(H))},e.\u0275dir=D({type:e});let t=e;return t})(),rt=(()=>{let e=class e extends Ie{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=le(e)))(o||e)}})(),e.\u0275dir=D({type:e,features:[A]});let t=e;return t})(),xe=new v("");var ot={provide:xe,useExisting:$(()=>B),multi:!0};function st(){let t=Q()?Q().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var at=new v(""),B=(()=>{let e=class e extends Ie{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!st())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(W),a(H),a(at,8))},e.\u0275dir=D({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&b("input",function(y){return o._handleInput(y.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(y){return o._compositionEnd(y.target.value)})},features:[Z([ot]),A]});let t=e;return t})();function m(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Oe(t){return t!=null&&typeof t.length=="number"}var lt=new v(""),ut=new v(""),dt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_=class{static min(e){return ct(e)}static max(e){return ht(e)}static required(e){return ft(e)}static requiredTrue(e){return pt(e)}static email(e){return gt(e)}static minLength(e){return mt(e)}static maxLength(e){return yt(e)}static pattern(e){return vt(e)}static nullValidator(e){return Se(e)}static compose(e){return je(e)}static composeAsync(e){return Be(e)}};function ct(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function ht(t){return e=>{if(m(e.value)||m(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function ft(t){return m(t.value)?{required:!0}:null}function pt(t){return t.value===!0?null:{required:!0}}function gt(t){return m(t.value)||dt.test(t.value)?null:{email:!0}}function mt(t){return e=>m(e.value)||!Oe(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function yt(t){return e=>Oe(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function vt(t){if(!t)return Se;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(m(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function Se(t){return null}function Ne(t){return t!=null}function Pe(t){return pe(t)?ne(t):t}function ke(t){let e={};return t.forEach(n=>{e=n!=null?c(c({},e),n):e}),Object.keys(e).length===0?null:e}function Te(t,e){return e.map(n=>n(t))}function _t(t){return!t.validate}function Ge(t){return t.map(e=>_t(e)?e:n=>e.validate(n))}function je(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(n){return ke(Te(n,e))}}function qe(t){return t!=null?je(Ge(t)):null}function Be(t){if(!t)return null;let e=t.filter(Ne);return e.length==0?null:function(n){let i=Te(n,e).map(Pe);return re(i).pipe(ie(ke))}}function Re(t){return t!=null?Be(Ge(t)):null}function be(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ue(t){return t._rawValidators}function He(t){return t._rawAsyncValidators}function X(t){return t?Array.isArray(t)?t:[t]:[]}function k(t,e){return Array.isArray(t)?t.includes(e):t===e}function Me(t,e){let n=X(e);return X(t).forEach(r=>{k(n,r)||n.push(r)}),n}function Ae(t,e){return X(e).filter(n=>!k(t,n))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=qe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Re(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}};var F=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ct={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},hn=C(c({},Ct),{"[class.ng-submitted]":"isSubmitted"}),Le=(()=>{let e=class e extends K{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(F,2))},e.\u0275dir=D({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&de("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[A]});let t=e;return t})();var w="VALID",P="INVALID",M="PENDING",E="DISABLED";function $e(t){return(R(t)?t.validators:t)||null}function Dt(t){return Array.isArray(t)?qe(t):t||null}function We(t,e){return(R(e)?e.asyncValidators:t)||null}function Vt(t){return Array.isArray(t)?Re(t):t||null}function R(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function bt(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new x(1e3,"");if(!i[n])throw new x(1001,"")}function Mt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new x(1002,"")})}var T=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===w}get invalid(){return this.status===P}get pending(){return this.status==M}get disabled(){return this.status===E}get enabled(){return this.status!==E}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Me(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ae(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ae(e,this._rawAsyncValidators))}hasValidator(e){return k(this._rawValidators,e)}hasAsyncValidator(e){return k(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this.errors=null,this._forEachChild(i=>{i.disable(C(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=w,this._forEachChild(i=>{i.enable(C(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(c({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===w||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?E:w}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=Pe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?E:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(P)?P:w}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){R(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Dt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}},G=class extends T{constructor(e,n,i){super($e(n),We(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Mt(this,!0,e),Object.keys(e).forEach(i=>{bt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ze=new v("CallSetDisabledState",{providedIn:"root",factory:()=>J}),J="always";function At(t,e,n=J){Et(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),It(t,e),Ot(t,e),xt(t,e),wt(t,e)}function we(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),Ft(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function j(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function wt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function Et(t,e){let n=Ue(t);e.validator!==null?t.setValidators(be(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=He(t);e.asyncValidator!==null?t.setAsyncValidators(be(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();j(e._rawValidators,r),j(e._rawAsyncValidators,r)}function Ft(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=Ue(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=He(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return j(e._rawValidators,i),j(e._rawAsyncValidators,i),n}function It(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ze(t,e)})}function xt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ze(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ze(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ot(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function St(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Nt(t){return Object.getPrototypeOf(t.constructor)===rt}function Pt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===B?n=o:Nt(o)?i=o:r=o}),r||i||n||null}function Ee(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Fe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var I=class extends T{constructor(e=null,n,i){super($e(n),We(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qe=new v(""),kt={provide:F,useExisting:$(()=>ee)},ee=(()=>{let e=class e extends F{set isDisabled(i){}constructor(i,r,o,s,y){super(),this._ngModelWarningConfig=s,this.callSetDisabledState=y,this.update=new O,this._ngModelWarningSent=!1,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=Pt(this,o)}ngOnChanges(i){if(this._isControlChanged(i)){let r=i.form.previousValue;r&&we(r,this,!1),At(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}St(i,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&we(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_isControlChanged(i){return i.hasOwnProperty("form")}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(lt,10),a(ut,10),a(xe,10),a(Qe,8),a(ze,8))},e.\u0275dir=D({type:e,selectors:[["","formControl",""]],inputs:{form:[S.None,"formControl","form"],isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],features:[Z([kt]),A,ae]});let t=e;return t})();var Tt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=L({});let t=e;return t})();var Xe=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Qe,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:ze,useValue:i.callSetDisabledState??J}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=U({type:e}),e.\u0275inj=L({imports:[Tt]});let t=e;return t})();var Ye=(()=>{let e=class e{constructor(){this.control=new I,this.type="text",this.placeholder=""}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-input"]],inputs:{control:"control",type:"type",placeholder:"placeholder"},standalone:!0,features:[g],decls:1,vars:3,consts:[[3,"formControl","type","placeholder"]],template:function(r,o){r&1&&V(0,"input",0),r&2&&p("formControl",o.control)("type",o.type)("placeholder",o.placeholder)},dependencies:[Xe,B,Le,ee],styles:["input[_ngcontent-%COMP%]{font-family:BPG Nino Mtavruli,sans-serif;margin-top:20px;font-size:25px;display:block;width:200px}"]});let t=e;return t})();var jt=()=>["/questionaire"],Ke=(()=>{let e=class e{constructor(){this.name=new I("",[_.required,_.minLength(3)]),this.surname=new I("",[_.required,_.minLength(3)]),this.registerForm=new G({name:this.name,surname:this.surname})}testing(i){i.preventDefault()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-auth"]],standalone:!0,features:[g],decls:14,vars:4,consts:[[1,"wrapper"],[1,"greetings"],[1,"registrationForm"],["placeholder","\u10E1\u10D0\u10EE\u10D4\u10DA\u10D8","type","text",3,"control"],["placeholder","\u10D2\u10D5\u10D0\u10E0\u10D8","type","text",3,"control"],[3,"routerLink","click"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"div",1)(2,"h1"),d(3,"\u10D7\u10E5\u10D5\u10D4\u10DC \u10D7\u10D0\u10DB\u10D0\u10E8\u10DD\u10D1\u10D7 \u10D5\u10D8\u10E1 \u10E3\u10DC\u10D3\u10D0 "),l(4,"span"),d(5,"20 000"),u(),d(6," \u10DA\u10D0\u10E0\u10D8"),u(),l(7,"h3"),d(8,"\u10D7\u10D0\u10DB\u10D0\u10E8\u10D8\u10E1 \u10D3\u10D0\u10E1\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0\u10D3 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D0 \u10D2\u10D0\u10D8\u10D0\u10E0\u10DD\u10D7 \u10E0\u10D4\u10D2\u10D8\u10E1\u10E2\u10E0\u10D0\u10EA\u10D8\u10D0"),u()(),l(9,"form",2),V(10,"app-input",3)(11,"app-input",4),l(12,"button",5),b("click",function(y){return o.testing(y)}),d(13,"\u10E8\u10D4\u10DB\u10D3\u10D4\u10D2\u10D8"),u()()()),r&2&&(f(10),p("control",o.name),f(),p("control",o.surname),f(),p("routerLink",fe(3,jt)))},dependencies:[Ye,De],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh}.greetings[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff}.greetings[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;text-align:center}.greetings[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e15f41}.registrationForm[_ngcontent-%COMP%]{text-align:center;align-items:center}button[_ngcontent-%COMP%]{width:150px;margin-top:20px;font-size:22px;font-family:BPG Nino Mtavruli,sans-serif}"]});let t=e;return t})();var te=[{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10D8\u10D0 \u10E1\u10D0\u10E4\u10E0\u10D0\u10DC\u10D2\u10D4\u10D7\u10D8\u10E1 \u10D3\u10D4\u10D3\u10D0\u10E5\u10D0\u10DA\u10D0\u10E5\u10D8?",questionanswers:["\u10DE\u10D0\u10E0\u10D8\u10D6\u10D8","\u10E0\u10DD\u10DB\u10D8","\u10DA\u10DD\u10DC\u10D3\u10DD\u10DC\u10D8","\u10D1\u10D4\u10E0\u10DA\u10D8\u10DC\u10D8"],answer:"\u10DE\u10D0\u10E0\u10D8\u10D6\u10D8",id:1},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10D8 \u10DE\u10DA\u10D0\u10DC\u10D4\u10E2\u10D0 \u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10D8\u10D0 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10EC\u10D8\u10D7\u10D4\u10DA\u10D8 \u10DE\u10DA\u10D0\u10DC\u10D4\u10E2\u10D0?",questionanswers:["\u10D5\u10D4\u10DC\u10D4\u10E0\u10D0","\u10DB\u10D0\u10E0\u10E1\u10D8","\u10D8\u10E3\u10DE\u10D8\u10E2\u10D4\u10E0\u10D8","\u10E1\u10D0\u10E2\u10E3\u10E0\u10DC\u10D8"],answer:"\u10DB\u10D0\u10E0\u10E1\u10D8",id:2},{questionText:"\u10D5\u10D8\u10DC \u10D3\u10D0\u10EE\u10D0\u10E2\u10D0 \u10DB\u10DD\u10DC\u10D0 \u10DA\u10D8\u10D6\u10D0?",questionanswers:["\u10DA\u10D4\u10DD\u10DC\u10D0\u10E0\u10D3\u10DD \u10D3\u10D0 \u10D5\u10D8\u10DC\u10E9\u10D8","\u10DE\u10D0\u10D1\u10DA\u10DD \u10DE\u10D8\u10D9\u10D0\u10E1\u10DD","\u10D5\u10D8\u10DC\u10E1\u10D4\u10DC\u10E2 \u10D5\u10D0\u10DC \u10D2\u10DD\u10D2\u10D8","\u10DB\u10D8\u10E5\u10D4\u10DA\u10D0\u10DC\u10EF\u10D4\u10DA\u10DD"],answer:"\u10DA\u10D4\u10DD\u10DC\u10D0\u10E0\u10D3\u10DD \u10D3\u10D0 \u10D5\u10D8\u10DC\u10E9\u10D8",id:3},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 \u10EC\u10E7\u10DA\u10D8\u10E1 \u10E5\u10D8\u10DB\u10D8\u10E3\u10E0\u10D8 \u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD?",questionanswers:["H2O","CO2","NaCl","O2"],answer:"H2O",id:4},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA \u10EC\u10D4\u10DA\u10E1 \u10E9\u10D0\u10D8\u10EB\u10D8\u10E0\u10D0 \u10E2\u10D8\u10E2\u10D0\u10DC\u10D8\u10D9\u10D8?",questionanswers:["1905 \u10EC","1912 \u10EC","1921 \u10EC","1933 \u10EC"],answer:"1912 \u10EC",id:5},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10D8 \u10D0\u10E0\u10D8\u10E1 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10D3\u10D8\u10D3\u10D8 \u10EB\u10E3\u10EB\u10E3\u10DB\u10EC\u10DD\u10D5\u10D0\u10E0\u10D8 \u10DB\u10E1\u10DD\u10E4\u10DA\u10D8\u10DD\u10E8\u10D8?",questionanswers:["\u10D0\u10E4\u10E0\u10D8\u10D9\u10E3\u10DA\u10D8 \u10E1\u10DE\u10D8\u10DA\u10DD","\u1C9A\u10E3\u10E0\u10EF\u10D8 \u10D5\u10D4\u10E8\u10D0\u10DE\u10D8","\u1C9F\u10D8\u10E0\u10D0\u10E4\u10D8","\u1C9E\u10DD\u10DA\u10D0\u10E0\u10E3\u10DA\u10D8 \u10D3\u10D0\u10D7\u10D5\u10D8"],answer:"\u1C9A\u10E3\u10E0\u10EF\u10D8 \u10D5\u10D4\u10E8\u10D0\u10DE\u10D8",id:6},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 144-\u10D8\u10E1 \u10D9\u10D5\u10D0\u10D3\u10E0\u10D0\u10E2\u10E3\u10DA\u10D8 \u10E4\u10D4\u10E1\u10D5\u10D8?",questionanswers:["10","12","14","16"],answer:"12",id:7},{questionText:"\u10D5\u10D8\u10DC \u10D0\u10E0\u10D8\u10E1 \u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10D8 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10D4\u10D5\u10DD\u10DA\u10E3\u10EA\u10D8\u10D8\u10E1 \u10DB\u10D0\u10DB\u10D0?",questionanswers:["\u10E9\u10D0\u10E0\u10DA\u10D6 \u10D3\u10D0\u10E0\u10D5\u10D8\u10DC\u10D8","\u10D8\u10E1\u10D0\u10D0\u10D9 \u10DC\u10D8\u10E3\u10E2\u10DD\u10DC\u10D8","\u10D0\u10DA\u10D1\u10D4\u10E0\u10E2 \u10D0\u10D8\u10DC\u10E8\u10E2\u10D0\u10D8\u10DC\u10D8","\u10D2\u10E0\u10D4\u10D2\u10DD\u10E0 \u10DB\u10D4\u10DC\u10D3\u10D4\u10DA\u10D8"],answer:"\u10E9\u10D0\u10E0\u10DA\u10D6 \u10D3\u10D0\u10E0\u10D5\u10D8\u10DC\u10D8",id:8},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 \u10D2\u10E3\u10D0\u10D9\u10D0\u10DB\u10DD\u10DA\u10D8\u10E1 \u10DB\u10D7\u10D0\u10D5\u10D0\u10E0\u10D8 \u10D8\u10DC\u10D2\u10E0\u10D4\u10D3\u10D8\u10D4\u10DC\u10E2\u10D8?",questionanswers:["\u1C9E\u10DD\u10DB\u10D8\u10D3\u10D5\u10E0\u10D4\u10D1\u10D8","\u10D0\u10D5\u10DD\u10D9\u10D0\u10D3\u10DD","\u10EE\u10D0\u10EE\u10D5\u10D8","\u10EC\u10D8\u10EC\u10D0\u10D9\u10D0"],answer:"\u10D0\u10D5\u10DD\u10D9\u10D0\u10D3\u10DD",id:9},{questionText:"\u10E8\u10D4\u10E5\u10E1\u10DE\u10D8\u10E0\u10D8\u10E1 \u10E0\u10DD\u10DB\u10D4\u10DA \u10DE\u10D8\u10D4\u10E1\u10D0\u10E8\u10D8\u10D0 \u10DE\u10D4\u10E0\u10E1\u10DD\u10DC\u10D0\u10DF\u10D8 \u10F0\u10D0\u10DB\u10DA\u10D4\u10E2\u10D8?",questionanswers:["\u10DB\u10D0\u10D9\u10D1\u10D4\u10E2\u10D8","\u10E0\u10DD\u10DB\u10D4\u10DD \u10D3\u10D0 \u10EF\u10E3\u10DA\u10D8\u10D4\u10E2\u10D0","\u10DD\u10E2\u10D4\u10DA\u10DD","\u10F0\u10D0\u10DB\u10DA\u10D4\u10E2"],answer:"\u10F0\u10D0\u10DB\u10DA\u10D4\u10E2",id:10},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 \u10DD\u10E5\u10E0\u10DD\u10E1 \u10E5\u10D8\u10DB\u10D8\u10E3\u10E0\u10D8 \u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD?",questionanswers:["Au","Ag","Cu","Fe"],answer:"Au",id:11},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10D8 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4\u10D0 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10D3\u10D8\u10D3\u10D8 \u10D6\u10D4\u10D3\u10D0\u10DE\u10D8\u10E0\u10D8\u10E1 \u10E4\u10D0\u10E0\u10D7\u10DD\u10D1\u10D8\u10D7?",questionanswers:["\u10EC\u10E7\u10DC\u10D0\u10E0\u10D8 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4","\u10D0\u10E2\u10DA\u10D0\u10DC\u10E2\u10D8\u10E1 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4","\u10D8\u10DC\u10D3\u10DD\u10D4\u10D7\u10D8\u10E1 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4","\u10D0\u10E0\u10E5\u10E2\u10D8\u10D9\u10E3\u10DA\u10D8 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4"],answer:"\u10EC\u10E7\u10DC\u10D0\u10E0\u10D8 \u10DD\u10D9\u10D4\u10D0\u10DC\u10D4",id:12},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10DB\u10D0 \u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10DB\u10D0 \u10E4\u10D8\u10D6\u10D8\u10D9\u10DD\u10E1\u10DB\u10D0 \u10E8\u10D4\u10D8\u10DB\u10E3\u10E8\u10D0\u10D5\u10D0 \u10E4\u10D0\u10E0\u10D3\u10DD\u10D1\u10D8\u10D7\u10DD\u10D1\u10D8\u10E1 \u10D7\u10D4\u10DD\u10E0\u10D8\u10D0?",questionanswers:["\u10D8\u10E1\u10D0\u10D0\u10D9 \u10DC\u10D8\u10E3\u10E2\u10DD\u10DC\u10D8","\u10D0\u10DA\u10D1\u10D4\u10E0\u10E2 \u10D0\u10D8\u10DC\u10E8\u10E2\u10D0\u10D8\u10DC\u10D8","\u10E1\u10E2\u10D8\u10D5\u10D4\u10DC \u10F0\u10DD\u10D9\u10D8\u10DC\u10D2\u10D8","\u10DC\u10D8\u10DA\u10E1 \u10D1\u10DD\u10E0\u10D8"],answer:"\u10D0\u10DA\u10D1\u10D4\u10E0\u10E2 \u10D0\u10D8\u10DC\u10E8\u10E2\u10D0\u10D8\u10DC\u10D8",id:13},{questionText:"\u10D5\u10D8\u10DC \u10D8\u10E7\u10DD \u10D1\u10D4\u10E0\u10EB\u10DC\u10E3\u10DA \u10DB\u10D8\u10D7\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0\u10E8\u10D8 \u10E1\u10D8\u10D1\u10E0\u10EB\u10DC\u10D8\u10E1 \u10E5\u10D0\u10DA\u10E6\u10DB\u10D4\u10E0\u10D7\u10D8?",questionanswers:["\u10D0\u10D7\u10D4\u10DC\u10D0","\u10D0\u10E4\u10E0\u10DD\u10D3\u10D8\u10E2\u10D4","\u10F0\u10D4\u10E0\u10D0","\u10D0\u10E0\u10E2\u10D4\u10DB\u10D8\u10E1\u10D8"],answer:"\u10D0\u10D7\u10D4\u10DC\u10D0",id:14},{questionText:"\u10D5\u10D8\u10DC \u10D3\u10D0\u10EC\u10D4\u10E0\u10D0 \u10E0\u10DD\u10DB\u10D0\u10DC\u10D8 '1984'?",questionanswers:["\u10EF\u10DD\u10E0\u10EF \u10DD\u10E0\u10E3\u10D4\u10DA\u10D8","\u10DD\u10DA\u10D3\u10DD\u10E1 \u10F0\u10D0\u10E5\u10E1\u10DA\u10D8","\u10E4.\u10E1\u10D9\u10DD\u10E2 \u10E4\u10D8\u10EA\u10EF\u10D4\u10E0\u10D0\u10DA\u10D3\u10D8","\u10E0\u10D4\u10D8 \u10D1\u10E0\u10D4\u10D3\u10D1\u10D4\u10E0\u10D8"],answer:"\u10EF\u10DD\u10E0\u10EF \u10DD\u10E0\u10E3\u10D4\u10DA\u10D8",id:15},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10D3\u10D8\u10D3\u10D8 \u10DD\u10E0\u10D2\u10D0\u10DC\u10DD \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10E1 \u10E1\u10EE\u10D4\u10E3\u10DA\u10E8\u10D8?",questionanswers:["\u10E6\u10D5\u10D8\u10EB\u10DA\u10D8","\u1CA2\u10D5\u10D8\u10DC\u10D8","\u1C99\u10D0\u10DC\u10D8","\u10D2\u10E3\u10DA\u10D8"],answer:"\u1C99\u10D0\u10DC\u10D8",id:16},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10DB\u10D0 \u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10DB\u10D0 \u10DB\u10D4\u10EA\u10DC\u10D8\u10D4\u10E0\u10DB\u10D0 \u10D0\u10E6\u10DB\u10DD\u10D0\u10E9\u10D8\u10DC\u10D0 \u10D2\u10E0\u10D0\u10D5\u10D8\u10E2\u10D0\u10EA\u10D8\u10D8\u10E1 \u10D7\u10D4\u10DD\u10E0\u10D8\u10D0?",questionanswers:["\u10D8\u10E1\u10D0\u10D0\u10D9 \u10DC\u10D8\u10E3\u10E2\u10DD\u10DC\u10D8","\u10D2\u10D0\u10DA\u10D8\u10DA\u10D4\u10DD \u10D2\u10D0\u10DA\u10D8\u10DA\u10D4\u10D8","\u10D0\u10DA\u10D1\u10D4\u10E0\u10E2 \u10D0\u10D8\u10DC\u10E8\u10E2\u10D0\u10D8\u10DC\u10D8","\u10DC\u10D8\u10D9\u10DD\u10DA\u10D0 \u10E2\u10D4\u10E1\u10DA\u10D0"],answer:"\u10D8\u10E1\u10D0\u10D0\u10D9 \u10DC\u10D8\u10E3\u10E2\u10DD\u10DC\u10D8",id:17},{questionText:"\u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1 \u10DB\u10E1\u10DD\u10E4\u10DA\u10D8\u10DD\u10E8\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10DB\u10D0\u10E6\u10D0\u10DA\u10D8 \u10DB\u10D7\u10D0?",questionanswers:["\u10DB\u10D7\u10D0 \u10D4\u10D5\u10D4\u10E0\u10D4\u10E1\u10E2\u10D8","\u10D9\u10D8\u10DA\u10D8\u10DB\u10D0\u10DC\u10EF\u10D0\u10E0\u10DD\u10E1 \u10DB\u10D7\u10D0","\u10DB\u10D7\u10D0 \u10DB\u10D0\u10D9\u10D9\u10D8\u10DC\u10DA\u10D8","\u10DB\u10D7\u10D0 \u10E4\u10E3\u10EF\u10D8"],answer:"\u10DB\u10D7\u10D0 \u10D4\u10D5\u10D4\u10E0\u10D4\u10E1\u10E2\u10D8",id:18},{questionText:"\u10D5\u10D8\u10DC \u10D3\u10D0\u10EC\u10D4\u10E0\u10D0 '\u10D3\u10D0\u10DB\u10EA\u10D8\u10DC\u10D0\u10D5\u10D8 \u10E9\u10D8\u10E2\u10D8\u10E1 \u10DB\u10DD\u10D9\u10D5\u10DA\u10D0'?",questionanswers:["\u10F0\u10D0\u10E0\u10DE\u10D4\u10E0 \u10DA\u10D8","\u10EF.\u10D9. \u10E0\u10DD\u10E3\u10DA\u10D8\u10DC\u10D2\u10D8","\u10D4\u10E0\u10DC\u10D4\u10E1\u10E2 \u10F0\u10D4\u10DB\u10D8\u10DC\u10D2\u10E3\u10D4\u10D8","\u10DB\u10D0\u10E0\u10D9 \u10E2\u10D5\u10D4\u10DC\u10D8"],answer:"\u10F0\u10D0\u10E0\u10DE\u10D4\u10E0 \u10DA\u10D8",id:19},{questionText:"\u10E0\u10DD\u10DB\u10D4\u10DA\u10D8 \u10E5\u10D5\u10D4\u10E7\u10D0\u10DC\u10D0\u10D0 \u10EA\u10DC\u10DD\u10D1\u10D8\u10DA\u10D8 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10D0\u10DB\u10DD\u10DB\u10D0\u10D5\u10D0\u10DA\u10D8 \u10DB\u10D6\u10D8\u10E1 \u10E5\u10D5\u10D4\u10E7\u10D0\u10DC\u10D0?",questionanswers:["\u10E9\u10D8\u10DC\u10D4\u10D7\u10D8","\u10D8\u10D0\u10DE\u10DD\u10DC\u10D8\u10D0","\u10E1\u10D0\u10DB\u10EE\u10E0\u10D4\u10D7 \u10D9\u10DD\u10E0\u10D4\u10D0","\u10E2\u10D0\u10D8\u10DA\u10D0\u10DC\u10D3\u10D8"],answer:"\u10D8\u10D0\u10DE\u10DD\u10DC\u10D8\u10D0",id:20}];function Bt(t,e){if(t&1){let n=ce();l(0,"div")(1,"button",4),b("click",function(){let o=oe(n).$implicit,s=he();return se(s.checkAnswer(o))}),d(2),u()()}if(t&2){let n=e.$implicit;f(2),z(n)}}var Je=(()=>{let e=class e{constructor(){this.i=0,this.question=te[this.i],this.score=0}ngOnInit(){console.log(this.question),console.log(this.question.questionanswers)}checkAnswer(i){i===this.question.answer?(this.i++,this.question=te[this.i],console.log(this.i),this.i<20&&console.log("I'm done"),console.log(!0)):console.log(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-questionaire"]],standalone:!0,features:[g],decls:5,vars:2,consts:[[1,"main"],[1,"question-text"],[1,"question-answers"],[4,"ngFor","ngForOf"],[1,"answer",3,"click"]],template:function(r,o){r&1&&(l(0,"div",0)(1,"div",1),d(2),u(),l(3,"div",2),ue(4,Bt,3,1,"div",3),u()()),r&2&&(f(2),z(o.question.questionText),f(2),p("ngForOf",o.question.questionanswers))},dependencies:[N,me],styles:[".main[_ngcontent-%COMP%]{width:50%;margin-left:100px}button[_ngcontent-%COMP%]{width:200px;font-size:25px}.question-text[_ngcontent-%COMP%]{font-size:25px;color:#fff;text-align:center}.question-answers[_ngcontent-%COMP%]{width:90%;margin:20px auto;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.answer[_ngcontent-%COMP%]{position:relative;border:1px solid #596275;width:400px;text-align:center;margin:10px auto;color:#fff;padding:10px;background-color:transparent;transition:all .4s ease;cursor:pointer}"]});let t=e;return t})();var et=(()=>{let e=class e{constructor(){this.title="millionaire"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(r,o){r&1&&V(0,"router-outlet")},dependencies:[N,Ce]});let t=e;return t})();var tt=[{path:"",component:Ke},{path:"questionaire",component:Je}];var nt={providers:[Ve(tt),ve()]};var Rt={providers:[_e()]},it=ge(nt,Rt);var Ut=()=>ye(et,it),Zn=Ut;export{Zn as a};
