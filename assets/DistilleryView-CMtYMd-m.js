import{d as y,S as h,u as _,_ as g,c as i,g as f,a as o,t as k,F as a,r as w,f as p,o as s,e as $}from"./index-RK1k4YiK.js";const S=y({name:"App",data(){return{distillery:{},pins:[]}},components:{Spirit:h},mounted(){this.fetchDistillery()},methods:{async fetchDistillery(){const n=_().params.id;try{const t=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.fordsdevelopment.co.uk/distilleries/${n}`)}`);console.log(t),this.distillery=await t.json()}catch(t){console.error("Error fetching distillery:",t)}}}}),v={key:0,class:"row m-0 g-2 p-2"},B=["src","alt"],D={key:1},C={key:2,class:"row m-0 g-2 p-2"},L={key:3};function V(e,n,t,E,F,M){var r,l;const c=p("Map"),d=p("Spirit");return s(),i(a,null,[f(c,{pins:e.pins},null,8,["pins"]),o("main",null,[(r=e.distillery)!=null&&r.id?(s(),i("div",v,[o("h1",null,k(e.distillery.name),1),o("img",{src:e.distillery.image_link,alt:e.distillery.name,class:"whisky-image"},null,8,B)])):(s(),i("p",D,"Loading distillery...")),((l=e.distillery.spirits)==null?void 0:l.length)>0?(s(),i("div",C,[(s(!0),i(a,null,w(e.distillery.spirits,(m,u)=>(s(),$(d,{key:u,spirit:m},null,8,["spirit"]))),128))])):(s(),i("p",L,"Loading spirits..."))])],64)}const R=g(S,[["render",V]]);export{R as default};
