import{_ as g,g as l,i as w,o as x,a as b,j as d,r as f,l as k,m as O,T as P,p as $,k as y,v as E,q as M}from"./index.3b13d566.js";const R=100,p="top-left",_="top-right",u="bottom-left",h="bottom-right",v=[u,h,_,p],S={name:"index",props:{placement:{type:String,default:u,validator(c){const n=v.includes(c);if(!n)throw new Error(`\u4F60\u7684 placement \u5FC5\u987B\u662F ${v.join("\u3001")}\u4E2D\u7684\u4E00\u9879`);return n}}},setup(c){const n=c;let r;const o=l(!1),m=()=>{r&&clearTimeout(r),o.value=!0},T=()=>{r=setTimeout(()=>{o.value=!1,r=null},R)},s=l(),i=l(),a=t=>{if(!!t)return{width:t.offsetWidth,height:t.offsetHeight}},e=l({top:0,left:0});return w(o,t=>{!o||$(()=>{switch(n.placement){case p:e.value.top=0,e.value.left=`${-a(i.value).width}px`;break;case _:e.value.top=0,e.value.left=`${a(s.value).width}px`;break;case u:e.value.top=`${a(s.value).height}px`,e.value.left=`${-a(i.value).width}px`;break;case h:e.value.top=`${a(s.value).height}px`,e.value.left=`${a(s.value).width}px`;break}})}),(t,z)=>(x(),b("div",{class:"relative",onMouseleave:T,onMouseenter:m},[d("div",{ref_key:"referenceTarget",ref:s},[f(t.$slots,"reference",{},void 0,!0)],512),k(P,{name:"slide"},{default:O(()=>[y(d("div",{ref_key:"contentTarget",ref:i,style:M(e.value),class:"absolute p-1 z-20 bg-white border rounded-md dark:bg-zinc-900 dark:border-zinc-700"},[f(t.$slots,"default",{},void 0,!0)],4),[[E,o.value]])]),_:3})],32))}};var I=g(S,[["__scopeId","data-v-c078c7c4"]]);export{I as default};