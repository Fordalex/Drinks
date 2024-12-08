import{d as f,_ as h,o as r,c as V,w as t,a as e,E as C,G as v,H as w,I as D,J as b,D as c,K as B,b as n,L as I,M as L,V as _,N as M,O as N,P as F,u as x,y as a,z as A,F as u,B as m,A as S}from"./index-wnEwjxGY.js";import{V as T}from"./VRating-B5Z5LFD2.js";import{M as j}from"./Map-ftSEkwy0.js";import{V as z}from"./VContainer-cb5KubvF.js";import{V as E}from"./VCol-DTBd-MzQ.js";const R=f({name:"Distillery",props:{distillery:{type:Object,required:!0}},computed:{distilleryLink(s){return`/Drinks/#/distilleries/${s}`}}});function O(s,i,l,o,y,g){return r(),V(F,null,{loader:t(({isActive:d})=>[e(C,{active:d,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:t(()=>[e(v,{height:"250",src:s.distillery.image_link,cover:""},null,8,["src"]),e(w,null,{default:t(()=>[e(D,null,{default:t(()=>[b(c(s.distillery.name),1)]),_:1}),e(B,null,{default:t(()=>[i[0]||(i[0]=n("span",{class:"me-1"},"Local Favorite",-1)),e(I,{color:"error",icon:"mdi-fire-circle",size:"small"})]),_:1})]),_:1}),e(L,null,{default:t(()=>[e(_,{align:"center",class:"mx-0"},{default:t(()=>[e(T,{"model-value":4.5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),i[1]||(i[1]=n("div",{class:"text-grey ms-4"},"4.5 (413)",-1))]),_:1}),i[2]||(i[2]=n("div",{class:"my-4 text-subtitle-1"},"$ • Italian, Cafe",-1)),n("div",null,c(s.distillery.description||"No description."),1)]),_:1}),e(M,null,{default:t(()=>[e(N,{color:"deep-purple-lighten-2",text:"More",block:"",border:""})]),_:1})]),_:1})}const P=h(R,[["render",O]]),q=f({name:"App",components:{Distillery:P,Map:j},data(){return{distilleries:[],pins:[]}},mounted(){this.fetchDistilleries()},methods:{async fetchDistilleries(){try{const s=x(),i=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.fordsdevelopment.co.uk/drinks/distilleries?password=${s.password}`)}`);this.distilleries=await i.json(),this.pins=this.distilleries.filter(l=>{if(l.lat)return l}).map(l=>({lat:parseFloat(l.lat),lng:parseFloat(l.lng),body:`<h4>${l.name}</h4>
                  <ul>
                    ${l.spirits.map(o=>`
                      <li>
                        <a href="/Drinks/#/spirits/${o.id}">${o.name}</a>
                      </li>
                    `).join("")}
                  </ul>
            `}))}catch(s){console.error("Error fetching distilleries:",s)}}}}),G={key:0},H={key:0,class:"row m-0 g-2 p-2"},J={key:1};function K(s,i,l,o,y,g){const d=m("Map"),$=m("Distillery");return r(),a(u,null,[s.pins.length>0?(r(),a("div",G,[e(d,{pins:s.pins},null,8,["pins"])])):A("",!0),n("main",null,[s.distilleries.length>0?(r(),a("div",H,[e(z,null,{default:t(()=>[e(_,null,{default:t(()=>[(r(!0),a(u,null,S(s.distilleries,(p,k)=>(r(),V(E,{cols:"12",sm:"4",key:k,distillery:p},{default:t(()=>[e($,{distillery:p},null,8,["distillery"])]),_:2},1032,["distillery"]))),128))]),_:1})]),_:1})])):(r(),a("p",J,"Loading distilleries..."))])],64)}const Z=h(q,[["render",K]]);export{Z as default};
