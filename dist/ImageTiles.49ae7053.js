import{d as C,c as A,g as n,i as a,a as m,b as x,r as g,e as k,s as y,f as H,t as s}from"./chunks/web.cb2eed4e.js";const O=s('<div class="m-8 grid grid-cols-4 gap-4 items-center"></div>'),R=s(`<div><div class="w-screen h-screen backdrop-blur-md flex justify-center"><!#><!/><!#><!/><!#><!/></div><button class="
            fixed top-0 right-0
            stroke-gray-500 hover:stroke-white stroke-[4px]
          " type="button"><svg width="100" height="100"><g stroke-linecap="round"><line x1="30" y1="30" x2="70" y2="70"></line><line x1="30" y1="70" x2="70" y2="30"></line></g></svg></button></div>`),T=s('<img class="cursor-pointer">'),p=s('<div class="grow"></div>'),q=s('<button class="hidden lg:block lg:grow lg:grid place-content-center stroke-gray-500 hover:stroke-white stroke-[4px]" type="button"><svg stroke-linecap="round" width="100" height="100"><line x1="70" y1="10" x2="30" y2="50"></line><line x1="30" y1="50" x2="70" y2="90"></line></svg></button>'),z=s('<img class="m-8 object-contain">'),B=s('<button class="hidden lg:block lg:grow lg:grid place-content-center stroke-gray-500 hover:stroke-white stroke-[4px]" type="button"><svg stroke-linecap="round" width="100" height="100"><line x1="30" y1="10" x2="70" y2="50"></line><line x1="70" y1="50" x2="30" y2="90"></line></svg></button>');function F(i){const[d,$]=A(null),h=()=>d()!==null,v=()=>$(null),f=e=>$(e),w=()=>`/assets/${i.images[d()]}`,_=e=>$((d()+e+i.images.length)%i.images.length);return[(()=>{const e=n(O);return a(e,()=>i.images.map((l,u)=>{const o=`/assets/${l}`;return(()=>{const r=n(T);return r.$$click=()=>f(u),y(r,"src",o),g(),r})()})),e})(),(()=>{const e=n(R),l=e.firstChild,u=l.firstChild,[o,r]=m(u.nextSibling),M=o.nextSibling,[b,I]=m(M.nextSibling),S=b.nextSibling,[E,N]=m(S.nextSibling),j=l.nextSibling;return a(l,(()=>{const c=x(()=>i.images.length<=1);return()=>c()?n(p):(()=>{const t=n(q);return t.$$click=()=>_(-1),g(),t})()})(),o,r),a(l,(()=>{const c=x(()=>!!h());return()=>c()&&(()=>{const t=n(z);return k(()=>y(t,"src",w())),t})()})(),b,I),a(l,(()=>{const c=x(()=>i.images.length<=1);return()=>c()?n(p):(()=>{const t=n(B);return t.$$click=()=>_(1),g(),t})()})(),E,N),j.$$click=v,k(()=>H(e,`${h()?"block":"hidden"} fixed top-0 left-0 w-screen h-screen`)),g(),e})()]}C(["click"]);export{F as default};