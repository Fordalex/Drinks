import{d as $,r as i,e as b,f as B,u as A,_ as D,g as c,a as e,w as t,c as m,h as f,F as y,o as a,V as n,b as N,i as w,j as F,t as U,k as T,l as V}from"./index-DnvRLiit.js";import{S as j,a as M}from"./Spirit-D6TdeonD.js";import{S as R}from"./VForm-TVvqgWn1.js";import{V as g}from"./VContainer-BniP9kR8.js";import{V as r}from"./VCol-mdlYBquf.js";import{V as q}from"./VAlert-CfdN9_tS.js";import{V as L}from"./VSkeletonLoader-Bh_PGYJS.js";const z=$({name:"SpiritsView",components:{Spirit:j,SpiritForm:M,SelectFromRequest:R},setup(){const s=i([]),l=i(!0),_=b(()=>"https://api.fordsdevelopment.co.uk/drinks/spirits"),k=i(null),v=i([]),h=i([]),S=i([]),d=async()=>{const p=A(),u=await fetch("https://api.fordsdevelopment.co.uk/drinks/spirits",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${p.accessToken}`}});if(u.ok)l.value=!1,s.value=await u.json();else{l.value=!1;const C=await u.json();k.value=C.error,C.error==="Access token has expired or is invalid."&&(console.log("Access token has expired or is invalid."),p.$reset(),p.clearState())}};return B(()=>{d()}),{spirits:s,loading:l,endpoint:_,errorMessage:k,selectedSpiritType:v,selectedSpiritStyle:h,selectedDistillery:S}}}),E={key:0};function Y(s,l,_,k,v,h){const S=V("SpiritForm"),d=V("SelectFromRequest"),p=V("Spirit");return a(),c(y,null,[e(g,null,{default:t(()=>[e(n,null,{default:t(()=>[e(r,{cols:"6"},{default:t(()=>l[3]||(l[3]=[N("h1",null,"Drinks",-1)])),_:1}),e(r,{cols:"6",class:"text-right"},{default:t(()=>[e(S,null,{trigger:t(({openDialog:o})=>[e(w,{density:"comfortable",variant:"tonal",text:"New Spirit",onClick:o},null,8,["onClick"])]),_:1})]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(r,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(d,{path:"spirit_types",key:"name",modelValue:s.selectedSpiritType,"onUpdate:modelValue":l[0]||(l[0]=o=>s.selectedSpiritType=o)},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(d,{path:"spirit_styles",key:"name",modelValue:s.selectedSpiritStyle,"onUpdate:modelValue":l[1]||(l[1]=o=>s.selectedSpiritStyle=o)},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"4",lg:"3"},{default:t(()=>[e(d,{path:"distilleries",key:"name",modelValue:s.selectedDistillery,"onUpdate:modelValue":l[2]||(l[2]=o=>s.selectedDistillery=o)},null,8,["modelValue"])]),_:1}),e(r,{cols:"12",md:"4",lg:"3",class:"d-flex align-center"},{default:t(()=>[e(w,{onClick:s.fetchSpirits,color:"primary",class:"width-100",dark:"",elevation:"2"},{default:t(()=>l[4]||(l[4]=[F(" Search ")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),s.loading?f("",!0):(a(),m(g,{key:0},{default:t(()=>[e(n,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[s.errorMessage?(a(),m(q,{key:0,type:"error",dismissible:"",border:"left",elevation:"2"},{default:t(()=>[F(U(s.errorMessage),1)]),_:1})):f("",!0)]),_:1})]),_:1}),e(n,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[s.spirits.length==0?(a(),c("p",E," You currently have no drinks registered, press the button above to add drinks. ")):f("",!0)]),_:1})]),_:1}),e(n,null,{default:t(()=>[(a(!0),c(y,null,T(s.spirits,(o,u)=>(a(),m(r,{cols:"12",sm:"6",md:"4",lg:"3",key:u,spirit:o},{default:t(()=>[e(p,{spirit:o},null,8,["spirit"])]),_:2},1032,["spirit"]))),128))]),_:1})]),_:1})),s.loading?(a(),m(g,{key:1},{default:t(()=>[e(n,null,{default:t(()=>[(a(),c(y,null,T(16,o=>e(r,{cols:"12",sm:"6",md:"4",lg:"3"},{default:t(()=>[e(L,{class:"border",type:"image, article"})]),_:1})),64))]),_:1})]),_:1})):f("",!0)],64)}const Q=D(z,[["render",Y]]);export{Q as default};