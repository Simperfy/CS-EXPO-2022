/* empty css                     */import{a as s,F as t,j as a,b as l}from"./vendor.a4811180.js";/* empty css                 */function o({imagesMobile:d,imageDesktop:i,slideTitle:r,bgColor:c}){return s(t,{children:[a(l.Carousel,{className:"hidden md:flex h-fit py-10 "+c,showThumbs:!1,autoPlay:!0,children:i.map(e=>s("div",{children:[a("div",{className:"flex justify-center",children:a("div",{className:"flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]",children:r})}),s("div",{className:"relative flex space-x-10 px-20 my-20",children:[a("div",{className:"carousel-card flex-auto",children:a("img",{className:"carousel-img brightness-75",src:e.backgroundImageFirst})}),a("div",{className:"carousel-card flex-auto -my-16 ",children:a("img",{className:"carousel-img brightness-75",src:e.backgroundImageSecond})}),a("div",{className:"carousel-card flex-auto",children:a("img",{className:"carousel-img brightness-75",src:e.backgroundImageThird})})]})]},e.backgroundImageFirst+e.backgroundImageSecond+e.backgroundImageThird))}),a(l.Carousel,{className:"flex md:hidden h-fit py-10 "+c,showThumbs:!1,autoPlay:!0,children:d.map(e=>s("div",{children:[a("div",{className:"flex justify-center my-5",children:a("div",{className:"flex flex-wrap justify-center md:justify-start font-display font-black text-4xl text-[#9147FF]",children:r})}),a("img",{className:"brightness-75",src:e.backgroundImage})]},e.backgroundImage))})]})}export{o as default};
