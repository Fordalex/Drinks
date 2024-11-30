import{d,_ as p,o as t,c as r,a as i,t as o,b as y,F as f,r as k,e as w,f as $}from"./index-RK1k4YiK.js";const g=d({name:"Distillery",props:{spirit:{type:Object,required:!0}},computed:{distilleryLink(){return`/Drinks/#/distilleries/${this.spirit.id}`}}}),D={class:"col-12 col-md-6 col-lg-4 col-xl-3"},v={class:"whisky-container"},b={class:"row"},B={class:"col-8"},L={class:"whisky-name"},C={class:"whisky-description"},V={class:"whisky-details"},j={class:"whisky-location"},E={class:"whisky-info"},F={class:"col-4"},N=["src","alt"],q=["href"];function A(s,e,h,_,m,u){var l,n,a,c;return t(),r("div",D,[i("div",v,[i("div",b,[i("div",B,[i("h2",L,o(s.spirit.name),1),i("p",C,o(s.spirit.description),1),i("div",V,[i("p",j,o((l=s.spirit.country)==null?void 0:l.name)+" - "+o((n=s.spirit.region)==null?void 0:n.name),1),e[2]||(e[2]=i("br",null,null,-1)),i("p",E,[e[0]||(e[0]=i("b",null,"Distillery:",-1)),y(" "+o((a=s.spirit.distillery)==null?void 0:a.name),1),e[1]||(e[1]=i("br",null,null,-1))])])]),i("div",F,[i("img",{src:(c=s.spirit)==null?void 0:c.image_link,alt:s.spirit.name,class:"whisky-image"},null,8,N)])]),i("a",{href:s.distilleryLink,class:"button"},"More",8,q)])])}const I=p(g,[["render",A]]),M=d({name:"App",components:{Distillery:I},data(){return{distilleries:[]}},mounted(){this.fetchDistilleries()},methods:{async fetchDistilleries(){try{const s=await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent("https://api.fordsdevelopment.co.uk/distilleries")}`);console.log(s),this.distilleries=await s.json()}catch(s){console.error("Error fetching distilleries:",s)}}}}),O={key:0,class:"row m-0 g-2 p-2"},R={key:1};function S(s,e,h,_,m,u){const l=$("Distillery");return t(),r("main",null,[s.distilleries.length>0?(t(),r("div",O,[(t(!0),r(f,null,k(s.distilleries,(n,a)=>(t(),w(l,{key:a,spirit:n},null,8,["spirit"]))),128))])):(t(),r("p",R,"Loading distilleries..."))])}const U=p(M,[["render",S]]);export{U as default};
