import{d as te,u as de,r as R,e as v,z as ce,A as me,I as ke,B as fe,C as ve,D as Se,f as Ce,E as D,G as we,H as pe,J as xe,a as t,K as G,F as N,L as se,M as Fe,N as $e,O as Ie,P as Y,Q as Pe,R as Re,S as ye,_ as ae,l as H,o as P,c as L,w as f,n as Ue,i as W,j as T,t as b,b as w,g as ge,T as J,U as re,W as Me,X as Te,Y as Be,Z as Le,$ as Ne,a0 as ze,a1 as Ae,a2 as Ee,a3 as De,q as He,s as qe,v as Oe,a4 as je,V as Ge,k as Je,h as Z,x as We,y as Ke}from"./index-BWM7QYSI.js";import{R as Qe,S as Xe,m as Ye,b as Ze,u as et,c as ue,f as tt,d as at,e as lt,V as nt,a as j,g as ee}from"./VForm-xiopQJt7.js";import{V as it}from"./VCol-DTcjvUxT.js";const ot=te({name:"SpiritForm",props:{spirit:{type:Object,required:!1,default:()=>({name:"",description:"",image:"",rating:0,spirit_type_id:null,spirit_style_id:null})}},components:{RecordForm:Qe,SelectFromRequest:Xe},setup(e){de();const y=["Vanilla","Caramel","Spicy","Fruity","Floral","Herbal","Smoky","Woody"],u=R([]),p=v(()=>!!e.spirit.id),d=v(()=>p.value?`https://api.fordsdevelopment.co.uk/drinks/spirits/${e.spirit.id}`:"https://api.fordsdevelopment.co.uk/drinks/spirits"),r=v(()=>p.value?"PUT":"POST");return{isEditMode:p,endpoint:d,method:r,handleSave:async h=>{console.log(`${p.value?"Updated":"Created"} record:`,h),window.location.reload()},items:y,value:u}}}),st=ce({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ye(),...Ze()},"VTextarea"),rt=me()({name:"VTextarea",directives:{Intersect:ke},inheritAttrs:!1,props:st(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:u,emit:p,slots:d}=y;const r=fe(e,"modelValue"),{isFocused:o,focus:h,blur:a}=et(e),l=v(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),x=v(()=>{if(u.maxlength)return u.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function K(i,_){var g,C;!e.autofocus||!i||(C=(g=_[0].target)==null?void 0:g.focus)==null||C.call(g)}const z=R(),k=R(),A=ve(""),n=R(),c=v(()=>e.persistentPlaceholder||o.value||e.active);function s(){var i;n.value!==document.activeElement&&((i=n.value)==null||i.focus()),o.value||h()}function m(i){s(),p("click:control",i)}function U(i){p("mousedown:control",i)}function F(i){i.stopPropagation(),s(),Y(()=>{r.value="",Pe(e["onClick:clear"],i)})}function E(i){var g;const _=i.target;if(r.value=_.value,(g=e.modelModifiers)!=null&&g.trim){const C=[_.selectionStart,_.selectionEnd];Y(()=>{_.selectionStart=C[0],_.selectionEnd=C[1]})}}const V=R(),M=R(+e.rows),B=v(()=>["plain","underlined"].includes(e.variant));Se(()=>{e.autoGrow||(M.value=+e.rows)});function S(){e.autoGrow&&Y(()=>{if(!V.value||!k.value)return;const i=getComputedStyle(V.value),_=getComputedStyle(k.value.$el),g=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),C=V.value.scrollHeight,q=parseFloat(i.lineHeight),Q=Math.max(parseFloat(e.rows)*q+g,parseFloat(_.getPropertyValue("--v-input-control-height"))),X=parseFloat(e.maxRows)*q+g||1/0,I=ye(C??0,Q,X);M.value=Math.floor((I-g)/q),A.value=Re(I)})}Ce(S),D(r,S),D(()=>e.rows,S),D(()=>e.maxRows,S),D(()=>e.density,S);let $;return D(V,i=>{i?($=new ResizeObserver(S),$.observe(V.value)):$==null||$.disconnect()}),we(()=>{$==null||$.disconnect()}),pe(()=>{const i=!!(d.counter||e.counter||e.counterValue),_=!!(i||d.details),[g,C]=xe(u),{modelValue:q,...Q}=ue.filterProps(e),X=tt(e);return t(ue,G({ref:z,modelValue:r.value,"onUpdate:modelValue":I=>r.value=I,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":B.value},e.class],style:e.style},g,Q,{centerAffix:M.value===1&&!B.value,focused:o.value}),{...d,default:I=>{let{id:O,isDisabled:le,isDirty:ne,isReadonly:he,isValid:Ve}=I;return t(at,G({ref:k,style:{"--v-textarea-control-height":A.value},onClick:m,onMousedown:U,"onClick:clear":F,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},X,{id:O.value,active:c.value||ne.value,centerAffix:M.value===1&&!B.value,dirty:ne.value||e.dirty,disabled:le.value,focused:o.value,error:Ve.value===!1}),{...d,default:_e=>{let{props:{class:ie,...oe}}=_e;return t(N,null,[e.prefix&&t("span",{class:"v-text-field__prefix"},[e.prefix]),se(t("textarea",G({ref:n,class:ie,value:r.value,onInput:E,autofocus:e.autofocus,readonly:he.value,disabled:le.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:s,onBlur:a},oe,C),null),[[Fe("intersect"),{handler:K},null,{once:!0}]]),e.autoGrow&&se(t("textarea",{class:[ie,"v-textarea__sizer"],id:`${oe.id}-sizer`,"onUpdate:modelValue":be=>r.value=be,ref:V,readonly:!0,"aria-hidden":"true"},null),[[$e,r.value]]),e.suffix&&t("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:_?I=>{var O;return t(N,null,[(O=d.details)==null?void 0:O.call(d,I),i&&t(N,null,[t("span",null,null),t(lt,{active:e.persistentCounter||o.value,value:l.value,max:x.value,disabled:e.disabled},d.counter)])])}:void 0})}),Ie({},z,k,n)}});function ut(e,y,u,p,d,r){const o=H("SelectFromRequest"),h=H("RecordForm");return P(),L(h,{record:e.spirit,endpoint:e.endpoint,method:e.method,onSave:e.handleSave},{trigger:f(({openDialog:a})=>[Ue(e.$slots,"trigger",{openDialog:a},()=>[t(W,{color:"primary"},{default:f(()=>[T(b(e.isEditMode?"Edit Spirit":"Add Spirit"),1)]),_:1})])]),title:f(()=>[w("span",null,b(e.isEditMode?"Edit Spirit":"Add New Spirit"),1)]),form:f(({record:a})=>[t(nt,null,{default:f(()=>[t(j,{modelValue:a.name,"onUpdate:modelValue":l=>a.name=l,label:"Name",required:""},null,8,["modelValue","onUpdate:modelValue"]),t(rt,{modelValue:a.description,"onUpdate:modelValue":l=>a.description=l,label:"Description",rows:"4",required:""},null,8,["modelValue","onUpdate:modelValue"]),t(j,{modelValue:a.image,"onUpdate:modelValue":l=>a.image=l,label:"Image"},null,8,["modelValue","onUpdate:modelValue"]),t(j,{modelValue:a.rating,"onUpdate:modelValue":l=>a.rating=l,label:"Rating"},null,8,["modelValue","onUpdate:modelValue"]),t(j,{modelValue:a.ppm,"onUpdate:modelValue":l=>a.ppm=l,label:"Ppm"},null,8,["modelValue","onUpdate:modelValue"]),t(o,{path:"spirit_types",key:"name",name:"spirit_type_id",modelValue:a.spirit_type_id,"onUpdate:modelValue":l=>a.spirit_type_id=l},null,8,["modelValue","onUpdate:modelValue"]),t(o,{path:"spirit_styles",key:"name",name:"spirit_style_id",modelValue:a.spirit_style_id,"onUpdate:modelValue":l=>a.spirit_style_id=l},null,8,["modelValue","onUpdate:modelValue"]),t(o,{path:"distilleries",key:"name",name:"distillery_id",multiple:!0,modelValue:a.distillery_ids,"onUpdate:modelValue":l=>a.distillery_ids=l},null,8,["modelValue","onUpdate:modelValue"]),t(o,{path:"brands",key:"name",name:"brand_id",modelValue:a.brand_id,"onUpdate:modelValue":l=>a.brand_id=l},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:3},8,["record","endpoint","method","onSave"])}const dt=ae(ot,[["render",ut]]),ct=te({name:"DistilleryLink",props:{distillery:{type:Object,required:!0}},setup(e){const y=R({...e.distillery}),u=v(()=>`https://api.fordsdevelopment.co.uk/drinks/distilleries/${e.distillery.id}`);return{distillery:y,endpoint:u}}}),mt={class:"text-subtitle-1 spirit-factory"};function ft(e,y,u,p,d,r){const o=H("router-link");return P(),ge("p",mt,[t(J,{color:"black",icon:"mdi-factory",size:"large",class:"mr-2"}),t(o,{to:{name:"distillery",params:{id:e.distillery.id}}},{default:f(()=>[T(b(e.distillery.name),1)]),_:1},8,["to"])])}const vt=ae(ct,[["render",ft]]),pt=te({name:"Spirit",props:{spirit:{type:Object,required:!0}},components:{SpiritForm:dt,DistilleryLink:vt},setup(e){const y=R({...e.spirit}),u=de(),p=v(()=>`https://api.fordsdevelopment.co.uk/drinks/spirits/${e.spirit.id}`),d=v(()=>`/Drinks/#/spirits/${e.spirit.id}`);return{editedSpirit:y,saveChanges:async({data:o,endpoint:h})=>{try{const a=await fetch(h,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${u.accessToken}`},body:JSON.stringify(o)});if(!a.ok)throw new Error(`Error: ${a.status} - ${a.statusText}`);const l=await a.json();y.value=l,window.location.reload()}catch(a){console.error("Error saving spirit:",a)}},endpoint:p,spiritLink:d}}}),yt=ce({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:re,default:"$ratingEmpty"},fullIcon:{type:re,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...Me(),...Te(),...Be(),...Le(),...Ne()},"VRating"),gt=me()({name:"VRating",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,y){let{slots:u}=y;const{t:p}=ze(),{themeClasses:d}=Ae(e),r=fe(e,"modelValue"),o=v(()=>ye(parseFloat(r.value),0,+e.length)),h=v(()=>Ee(Number(e.length),1)),a=v(()=>h.value.flatMap(n=>e.halfIncrements?[n-.5,n]:[n])),l=ve(-1),x=v(()=>a.value.map(n=>{const c=e.hover&&l.value>-1,s=o.value>=n,m=l.value>=n,F=(c?m:s)?e.fullIcon:e.emptyIcon,E=e.activeColor??e.color,V=s||m?E:e.color;return{isFilled:s,isHovered:m,icon:F,color:V}})),K=v(()=>[0,...a.value].map(n=>{function c(){l.value=n}function s(){l.value=-1}function m(){e.disabled||e.readonly||(r.value=o.value===n&&e.clearable?0:n)}return{onMouseenter:e.hover?c:void 0,onMouseleave:e.hover?s:void 0,onClick:m}})),z=v(()=>e.name??`v-rating-${De()}`);function k(n){var B,S;let{value:c,index:s,showStar:m=!0}=n;const{onMouseenter:U,onMouseleave:F,onClick:E}=K.value[s+1],V=`${z.value}-${String(c).replace(".","-")}`,M={color:(B=x.value[s])==null?void 0:B.color,density:e.density,disabled:e.disabled,icon:(S=x.value[s])==null?void 0:S.icon,ripple:e.ripple,size:e.size,variant:"plain"};return t(N,null,[t("label",{for:V,class:{"v-rating__item--half":e.halfIncrements&&c%1>0,"v-rating__item--full":e.halfIncrements&&c%1===0},onMouseenter:U,onMouseleave:F,onClick:E},[t("span",{class:"v-rating__hidden"},[p(e.itemAriaLabel,c,e.length)]),m?u.item?u.item({...x.value[s],props:M,value:c,index:s,rating:o.value}):t(W,G({"aria-label":p(e.itemAriaLabel,c,e.length)},M),null):void 0]),t("input",{class:"v-rating__hidden",name:z.value,id:V,type:"radio",value:c,checked:o.value===c,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function A(n){return u["item-label"]?u["item-label"](n):n.label?t("span",null,[n.label]):t("span",null,[T(" ")])}return pe(()=>{var c;const n=!!((c=e.itemLabels)!=null&&c.length)||u["item-label"];return t(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},d.value,e.class],style:e.style},{default:()=>[t(k,{value:0,index:-1,showStar:!1},null),h.value.map((s,m)=>{var U,F;return t("div",{class:"v-rating__wrapper"},[n&&e.itemLabelPosition==="top"?A({value:s,index:m,label:(U=e.itemLabels)==null?void 0:U[m]}):void 0,t("div",{class:"v-rating__item"},[e.halfIncrements?t(N,null,[t(k,{value:s-.5,index:m*2},null),t(k,{value:s,index:m*2+1},null)]):t(k,{value:s,index:m},null)]),n&&e.itemLabelPosition==="bottom"?A({value:s,index:m,label:(F=e.itemLabels)==null?void 0:F[m]}):void 0])})]})}),{}}}),ht={class:"image-container"},Vt={class:"py-1"},_t={class:"py-1"},bt={class:"py-1"},kt={class:"py-1"};function St(e,y,u,p,d,r){const o=H("SpiritForm"),h=H("DistilleryLink");return P(),L(Ke,null,{default:f(()=>[t(it,{cols:"12"},{default:f(()=>[t(o,{spirit:e.spirit},{trigger:f(({openDialog:a})=>[t(W,{density:"comfortable",icon:"mdi-dots-vertical",variant:"tonal",onClick:a},null,8,["onClick"])]),_:1},8,["spirit"])]),_:1}),w("div",ht,[t(He,{height:"250",src:e.spirit.image,contain:""},null,8,["src"])]),t(qe,null,{default:f(()=>[t(Oe,null,{default:f(()=>[T(b(e.spirit.name),1)]),_:1})]),_:1}),t(je,null,{default:f(()=>{var a,l;return[t(Ge,{align:"center",class:"mx-0"},{default:f(()=>[t(gt,{"model-value":e.spirit.rating,color:"amber",density:"compact",size:"small",class:"mb-4","half-increments":"",readonly:""},null,8,["model-value"])]),_:1}),w("div",Vt,[w("p",null,"Company: "+b((a=e.spirit.company)==null?void 0:a.name),1)]),w("div",_t,[w("p",null,"Brand: "+b((l=e.spirit.brand)==null?void 0:l.name),1)]),(P(!0),ge(N,null,Je(e.spirit.distilleries,x=>(P(),L(h,{key:x.id,distillery:x},null,8,["distillery"]))),128)),w("div",bt,[e.spirit.spirit_type?(P(),L(ee,{key:0,class:"mr-2 mt-2",color:e.spirit.spirit_type.colour,size:"small",label:""},{default:f(()=>[t(J,{icon:e.spirit.spirit_type.icon,start:""},null,8,["icon"]),T(" "+b(e.spirit.spirit_type.name),1)]),_:1},8,["color"])):Z("",!0),e.spirit.spirit_style?(P(),L(ee,{key:1,class:"mr-2 mt-2",color:e.spirit.spirit_style.colour,size:"small",label:""},{default:f(()=>[t(J,{icon:e.spirit.spirit_style.icon,start:""},null,8,["icon"]),T(" "+b(e.spirit.spirit_style.name),1)]),_:1},8,["color"])):Z("",!0),e.spirit.ppm?(P(),L(ee,{key:2,color:"#8c4f00",size:"small",class:"mt-2",label:""},{default:f(()=>[t(J,{icon:"mdi mdi-smoke",start:""}),T(" "+b(e.spirit.ppm),1)]),_:1})):Z("",!0)]),w("div",kt,[w("div",null,b(e.spirit.description||"No description."),1)])]}),_:1}),t(We,null,{default:f(()=>[t(W,{href:e.spiritLink,color:"deep-purple-lighten-2",text:"More",block:"",border:""},null,8,["href"])]),_:1})]),_:1})}const Ft=ae(pt,[["render",St]]);export{Ft as S,dt as a};
