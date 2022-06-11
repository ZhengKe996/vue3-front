import{e as m,O as v,o as c,b as f,m as p,j as s,k as g,l as e,a,I as z,J as x,H as k,g as y,M as $,c as C,u as i,P as E,Q as T,R as V,S as H,_ as b}from"./index.3b13d566.js";const M={class:"relative flex items-center p-0.5 rounded-sm cursor-pointer duration-200 outline-none hover:bg-zinc-100 dark:hover:bg-zinc-900"},I={class:"w-3 h-3 rounded-sm",src:"https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/user.jpg"},S={class:"w-[140px] overflow-hidden"},B={class:"text-zinc-800 text-sm dark:text-zinc-300"},D={name:"header-my",setup(l){const n=[{id:0,title:"\u4E2A\u4EBA\u8D44\u6599",icon:"profile",path:"/profile"},{id:1,title:"\u5347\u7EA7VIP",icon:"vip-profile",path:"/memeber"},{id:2,title:"\u4E2A\u4EBA\u8D44\u6599",icon:"logout",path:"/"}];return(o,_)=>{const r=m("m-svg-icon"),t=m("m-popover"),u=v("lazy");return c(),f(t,{class:"flex items-center",placement:"bottom-left"},{reference:p(()=>[s("div",M,[g(s("img",I,null,512),[[u]]),e(r,{class:"h-1.5 w-1.5 ml-0.5",fillClass:"fill-zinc-900 dark:fill-zinc-300",name:"down-arrow"}),e(r,{name:"vip",class:"h-1.5 w-1.5 absolute right-[16px] bottom-0"})])]),default:p(()=>[s("div",S,[(c(),a(k,null,z(n,d=>s("div",{key:d.id,class:"flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800"},[e(r,{name:d.icon,class:"w-1.5 h-1.5 mr-1",fillClass:"fill-zinc-900 dark:fill-zinc-300"},null,8,["name"]),s("span",B,x(d.title),1)])),64))])]),_:1})}}},A={class:"w-full"},L=s("div",null,"123",-1),N={name:"header-search",setup(l){const n=y("");return(o,_)=>{const r=m("m-search");return c(),a("div",A,[e(r,{modelValue:n.value,"onUpdate:modelValue":_[0]||(_[0]=t=>n.value=t)},{dropdown:p(()=>[L]),_:1},8,["modelValue"])])}}},R={class:"w-[140px] overflow-hidden"},j=["onClick"],F={class:"text-zinc-900 text-sm dark:text-zinc-300"},P={name:"header-theme",setup(l){const n=[{id:0,type:E,icon:"theme-light",name:"\u6781\u7B80\u767D"},{id:1,type:T,icon:"theme-dark",name:"\u6781\u591C\u9ED1"},{id:2,type:V,icon:"tiaosepan",name:"\u8DDF\u968F\u7CFB\u7EDF"}],o=$(),_=t=>{o.commit("theme/changeThemeType",t.type)},r=C(()=>{const t=n.find(u=>u.type===o.getters.themeType);return t==null?void 0:t.icon});return(t,u)=>{const d=m("m-svg-icon"),w=m("m-popover");return c(),f(w,{placement:"bottom-left"},{reference:p(()=>[e(d,{name:i(r),fillClass:"fill-zinc-900 dark:fill-zinc-300",class:"w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60 dark:hover:bg-zinc-900"},null,8,["name"])]),default:p(()=>[s("div",R,[(c(),a(k,null,z(n,h=>s("div",{key:h.id,class:"flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60 dark:hover:bg-zinc-800",onClick:te=>_(h)},[e(d,{name:h.icon,class:"w-1.5 h-1.5 mr-1",fillClass:"fill-zinc-900 dark:fill-zinc-300"},null,8,["name"]),s("span",F,x(h.name),1)],8,j)),64))])]),_:1})}}},G={class:"w-full bg-white border-b border-b-zinc-200 px-2 py-1 dark:bg-zinc-800 dark:border-b-zinc-700 duration-500"},J={class:"flex items-center"},K={name:"pc-header",setup(l){const n=H(),o=()=>{n.push({name:"home"})};return(_,r)=>{const t=v("lazy");return c(),a("div",G,[s("div",J,[g(s("img",{class:"h-4 cursor-pointer mr-2",src:"https://zhengke-img.oss-cn-hangzhou.aliyuncs.com/image-light.png",alt:"",onClick:o},null,512),[[t]]),e(i(N),{class:"mr-1"}),e(i(P),{class:"mr-1"}),e(i(D))])])}}},O={};function Q(l,n){const o=m("router-view");return c(),a("div",null,[e(o)])}var U=b(O,[["render",Q]]);const Y={},q={class:"fixed bottom-10 right-2"};function W(l,n){return c(),a("div",q,"floating")}var X=b(Y,[["render",W]]);const Z={class:"h-screen"},ee={class:"h-main"},ne={name:"index",setup(l){return(n,o)=>(c(),a("div",Z,[e(i(K),{class:"h-header"}),s("div",ee,[e(i(U))]),e(i(X))]))}};var oe=ne;export{oe as default};
