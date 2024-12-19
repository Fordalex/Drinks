import{d as y,e as C,_ as k,o as r,c as V,w as i,a as e,n as D,p as b,q as w,s as A,j as B,t as u,v as L,b as n,x as T,y as j,V as _,z as x,i as F,A as M,u as N,g as o,h as S,F as m,l as f,k as z}from"./index-Dgo0gmOG.js";import{V as I}from"./VRating-DFb_ZKv5.js";import{M as q}from"./Map-Bc8QxRRB.js";import{V as R}from"./VContainer-D8XUICs_.js";import{V as h}from"./VCol-DjnPnRNT.js";const U=y({name:"Distillery",props:{distillery:{type:Object,required:!0}},setup(s){return{distilleryLink:C(()=>`/Drinks/#/distilleries/${s.distillery.id}`)}}});function E(s,l,a,t,d,g){return r(),V(M,null,{loader:i(({isActive:p})=>[e(D,{active:p,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:i(()=>[e(b,{height:"250",src:s.distillery.image_link,cover:""},null,8,["src"]),e(w,null,{default:i(()=>[e(A,null,{default:i(()=>[B(u(s.distillery.name),1)]),_:1}),e(L,null,{default:i(()=>[l[0]||(l[0]=n("span",{class:"me-1"},"Local Favorite",-1)),e(T,{color:"error",icon:"mdi-fire-circle",size:"small"})]),_:1})]),_:1}),e(j,null,{default:i(()=>[e(_,{align:"center",class:"mx-0"},{default:i(()=>[e(I,{"model-value":4.5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),l[1]||(l[1]=n("div",{class:"text-grey ms-4"},"4.5 (413)",-1))]),_:1}),l[2]||(l[2]=n("div",{class:"my-4 text-subtitle-1"},"$ • Italian, Cafe",-1)),n("div",null,u(s.distillery.description||"No description."),1)]),_:1}),e(x,null,{default:i(()=>[e(F,{href:s.distilleryLink,color:"deep-purple-lighten-2",text:"More",block:"",border:""},null,8,["href"])]),_:1})]),_:1})}const O=k(U,[["render",E]]),P=y({name:"App",components:{Distillery:O,Map:q},data(){return{distilleries:[],pins:[]}},mounted(){this.fetchDistilleries()},methods:{async fetchDistilleries(){const s=N(),a=await fetch("https://api.fordsdevelopment.co.uk/drinks/distilleries",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s.accessToken}`}});if(a.ok)this.distilleries=await a.json(),this.pins=this.distilleries.filter(t=>{if(t.lat)return t}).map(t=>({lat:parseFloat(t.lat),lng:parseFloat(t.lng),body:`<h4>${t.name}</h4>
                <ul>
                  ${t.spirits.map(d=>`
                    <li>
                      <a href="/Drinks/#/spirits/${d.id}">${d.name}</a>
                    </li>
                  `).join("")}
                </ul>
          `}));else{const t=await a.json();console.error(t.error),t.error==="Access token has expired or is invalid."&&(console.log("Access token has expired or is invalid."),s.$reset(),s.clearState())}}}}),G={key:0},H={key:0,class:"row m-0 g-2 p-2"},J={key:1};function K(s,l,a,t,d,g){const p=f("Map"),$=f("Distillery");return r(),o(m,null,[s.pins.length>0?(r(),o("div",G,[e(p,{pins:s.pins},null,8,["pins"])])):S("",!0),n("main",null,[s.distilleries.length>0?(r(),o("div",H,[e(R,null,{default:i(()=>[e(_,null,{default:i(()=>[e(h,{cols:"12"},{default:i(()=>l[0]||(l[0]=[n("h1",null,"Distilleries",-1)])),_:1}),(r(!0),o(m,null,z(s.distilleries,(c,v)=>(r(),V(h,{cols:"12",sm:"3",key:v,distillery:c},{default:i(()=>[e($,{distillery:c},null,8,["distillery"])]),_:2},1032,["distillery"]))),128))]),_:1})]),_:1})])):(r(),o("p",J,"Loading distilleries..."))])],64)}const ee=k(P,[["render",K]]);export{ee as default};