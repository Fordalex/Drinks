import{d as y,u,$ as _,_ as f,S as t,a as g,T as k,b as a,X as w,U as $,Y as S,Z as p,o as e,c as v}from"./index-D2dlZQRr.js";import{S as B}from"./Spirit-orUkVM6b.js";import{M as C}from"./Map-wE4lq2Tx.js";import"./VCol-Dz9B0k35.js";import"./VRating-4qwSQ0g4.js";const D=y({name:"App",data(){return{distillery:{},pins:[]}},components:{Spirit:B,Map:C},mounted(){this.fetchDistillery()},methods:{async fetchDistillery(){const r=_().params.id,o=u();try{const i=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(`https://api.fordsdevelopment.co.uk/drinks/distilleries/${r}?password=${o.password}`)}`);this.distillery=await i.json(),this.distillery.lat&&(this.pins=[{lat:parseFloat(this.distillery.lat),lng:parseFloat(this.distillery.lng),body:`<h1>${this.distillery.name}</h1>`}])}catch(i){console.error("Error fetching distillery:",i)}}}}),M={key:0},V={key:1,class:"row m-0 g-2 p-2"},F=["src","alt"],L={key:2},N={key:3,class:"row m-0 g-2 p-2"},b={key:4};function A(s,r,o,i,E,R){var n,l;const d=p("Map"),c=p("Spirit");return e(),t("main",null,[s.pins.length>0?(e(),t("div",M,[g(d,{pins:s.pins},null,8,["pins"])])):k("",!0),(n=s.distillery)!=null&&n.id?(e(),t("div",V,[a("h1",null,w(s.distillery.name),1),a("img",{src:s.distillery.image_link,alt:s.distillery.name,class:"whisky-image"},null,8,F)])):(e(),t("p",L,"Loading distillery...")),((l=s.distillery.spirits)==null?void 0:l.length)>0?(e(),t("div",N,[(e(!0),t($,null,S(s.distillery.spirits,(m,h)=>(e(),v(c,{key:h,spirit:m},null,8,["spirit"]))),128))])):(e(),t("p",b,"Loading spirits..."))])}const Y=f(D,[["render",A]]);export{Y as default};
