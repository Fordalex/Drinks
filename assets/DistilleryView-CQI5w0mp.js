import{d as u,u as y,m as h,_ as k,g as t,b as p,t as _,F as f,k as g,o as e,c as S,l as $}from"./index-BWM7QYSI.js";import{S as w}from"./Spirit-BZrSsfF7.js";import{M as B}from"./Map-BjJzDGbQ.js";import"./VForm-xiopQJt7.js";import"./VCol-DTcjvUxT.js";const v=u({name:"App",data(){return{distillery:{},pins:[]}},components:{Spirit:w,Map:B},mounted(){this.fetchDistillery()},methods:{async fetchDistillery(){const i=h().params.id,o=y(),r=`https://api.fordsdevelopment.co.uk/drinks/distilleries/${i}`,n=await fetch(r,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${o.accessToken}`}});this.distillery=await n.json()}}}),D={key:0,class:"row m-0 g-2 p-2"},T=["src","alt"],A={key:1},C={key:2,class:"row m-0 g-2 p-2"},L={key:3};function j(s,i,o,r,n,F){var a,l;const c=$("Spirit");return e(),t("main",null,[(a=s.distillery)!=null&&a.id?(e(),t("div",D,[p("h1",null,_(s.distillery.name),1),p("img",{src:s.distillery.image_link,alt:s.distillery.name,class:"whisky-image"},null,8,T)])):(e(),t("p",A,"Loading distillery...")),((l=s.distillery.spirits)==null?void 0:l.length)>0?(e(),t("div",C,[(e(!0),t(f,null,g(s.distillery.spirits,(d,m)=>(e(),S(c,{key:m,spirit:d},null,8,["spirit"]))),128))])):(e(),t("p",L,"Loading spirits..."))])}const N=k(v,[["render",j]]);export{N as default};
