(()=>{"use strict";const e=window.React,t=window.wp.htmlEntities,l=window.wp.i18n,{registerPaymentMethod:c}=window.wc.wcBlocksRegistry,{getSetting:i}=window.wc.wcSettings,n=i("cdl_checkout_data",{}),a=(0,l.__)("CDL Checkout ","cdl-checkout"),r=(0,t.decodeEntities)(n.title)||a,o=()=>(0,t.decodeEntities)(n.description||"");c({name:"cdl_checkout",label:(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{style:{display:"flex",flexDirection:"row",gap:"0.5rem"}},(0,e.createElement)("div",null,r),(0,e.createElement)((({url:t,label:l})=>(0,e.createElement)("div",{style:{display:"flex",flexDirection:"row",gap:"0.5rem",flexWrap:"wrap"}},(0,e.createElement)("img",{src:t,alt:l,style:{width:"75px",height:"auto"}}))),{url:n.logo_url,label:r}))),content:(0,e.createElement)(o,null),edit:(0,e.createElement)(o,null),canMakePayment:()=>!0,ariaLabel:r,supports:{features:n.supports}})})();