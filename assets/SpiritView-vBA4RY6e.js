import{d as p,r as a,m as c,u as m,_ as u,c as d,l as f,o as l}from"./index-ZPjkTawY.js";import{S}from"./Spirit-1sOEmSoB.js";import"./VForm-B28uI9p0.js";import"./VCol-ZxcPkSNO.js";import"./VRating-CA6qmXHn.js";const _=p({name:"SpiritView",components:{Spirit:S},setup(){const t=a({});return(async()=>{const o=c().params.id,s=m(),i=`https://api.fordsdevelopment.co.uk/drinks/distilleries/${o}`,e=await fetch(i,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.accessToken}`}});t.value=await e.json()})(),{spirit:t}}});function h(t,r,n,o,s,i){const e=f("Spirit");return l(),d(e,{spirit:t.spirit},null,8,["spirit"])}const B=u(_,[["render",h]]);export{B as default};
