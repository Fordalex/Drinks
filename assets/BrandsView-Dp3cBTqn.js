import{d as a,M as o,_ as i,c as n,F as c,r as d,o as s,t as p}from"./index-BWYQkPLO.js";const l=a({name:"HomeView",components:{Map:o},data(){return{brands:[],pins:[]}},mounted(){this.fetchSpirits()},methods:{async fetchSpirits(){try{const e=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent("https://api.fordsdevelopment.co.uk/brands")}`);this.brands=await e.json()}catch(e){console.error("Error fetching brands:",e)}}}}),m={key:0,class:"row m-0 g-2 p-2"},h={key:1};function f(e,u,_,b,g,w){return s(),n("main",null,[e.brands.length>0?(s(),n("div",m,[(s(!0),n(c,null,d(e.brands,(t,r)=>(s(),n("div",{key:r},p(t.name),1))),128))])):(s(),n("p",h,"Loading brands..."))])}const y=i(l,[["render",f]]);export{y as default};
