import{d as f,_ as h,o as r,h as _,w as t,b as e,V as C,i as v,j as w,k as D,l as b,t as c,m as x,f as n,n as B,p as F,q as y,s as I,v as L,x as M,y as N,M as j,u as S,c as a,e as z,z as A,F as u,g as m,r as R,A as T}from"./index-CuQ8R2bu.js";const q=f({name:"Distillery",props:{distillery:{type:Object,required:!0}},computed:{distilleryLink(s){return`/Drinks/#/distilleries/${s}`}}});function E(s,l,i,o,g,V){return r(),_(N,null,{loader:t(({isActive:d})=>[e(C,{active:d,color:"deep-purple",height:"4",indeterminate:""},null,8,["active"])]),default:t(()=>[e(v,{height:"250",src:s.distillery.image_link,cover:""},null,8,["src"]),e(w,null,{default:t(()=>[e(D,null,{default:t(()=>[b(c(s.distillery.name),1)]),_:1}),e(x,null,{default:t(()=>[l[0]||(l[0]=n("span",{class:"me-1"},"Local Favorite",-1)),e(B,{color:"error",icon:"mdi-fire-circle",size:"small"})]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(y,{align:"center",class:"mx-0"},{default:t(()=>[e(I,{"model-value":4.5,color:"amber",density:"compact",size:"small","half-increments":"",readonly:""}),l[1]||(l[1]=n("div",{class:"text-grey ms-4"},"4.5 (413)",-1))]),_:1}),l[2]||(l[2]=n("div",{class:"my-4 text-subtitle-1"},"$ • Italian, Cafe",-1)),n("div",null,c(s.distillery.description||"No description."),1)]),_:1}),e(L,null,{default:t(()=>[e(M,{color:"deep-purple-lighten-2",text:"More",block:"",border:""})]),_:1})]),_:1})}const P=h(q,[["render",E]]),O=f({name:"App",components:{Distillery:P,Map:j},data(){return{distilleries:[],pins:[]}},mounted(){this.fetchDistilleries()},methods:{async fetchDistilleries(){try{const s=S(),l=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.fordsdevelopment.co.uk/drinks/distilleries?password=${s.password}`)}`);this.distilleries=await l.json(),this.pins=this.distilleries.filter(i=>{if(i.lat)return i}).map(i=>({lat:parseFloat(i.lat),lng:parseFloat(i.lng),body:`<h4>${i.name}</h4>
                  <ul>
                    ${i.spirits.map(o=>`
                      <li>
                        <a href="/Drinks/#/spirits/${o.id}">${o.name}</a>
                      </li>
                    `).join("")}
                  </ul>
            `}))}catch(s){console.error("Error fetching distilleries:",s)}}}}),U={key:0},G={key:0,class:"row m-0 g-2 p-2"},H={key:1};function J(s,l,i,o,g,V){const d=m("Map"),$=m("Distillery");return r(),a(u,null,[s.pins.length>0?(r(),a("div",U,[e(d,{pins:s.pins},null,8,["pins"])])):z("",!0),n("main",null,[s.distilleries.length>0?(r(),a("div",G,[e(A,null,{default:t(()=>[e(y,null,{default:t(()=>[(r(!0),a(u,null,R(s.distilleries,(p,k)=>(r(),_(T,{cols:"12",sm:"4",key:k,distillery:p},{default:t(()=>[e($,{distillery:p},null,8,["distillery"])]),_:2},1032,["distillery"]))),128))]),_:1})]),_:1})])):(r(),a("p",H,"Loading distilleries..."))])],64)}const Q=h(O,[["render",J]]);export{Q as default};