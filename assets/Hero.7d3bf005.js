import{a as l,j as e}from"./vendor.a4811180.js";function f({title:c,description:m,imageSrc:n,dateObj:t,inverse:a=!1}){const d=x=>x.split(" ").map((r,i)=>{let s="text-csSecondary";return(i+1)%2==0&&(s="text-csPrimary"),(i+1)%3==0&&(s="text-white"),e("span",{className:s,children:r},r)});return l("div",{className:`flex justify-between min-h-[45vh] md:max-h-[50vh] ${a&&"flex-row-reverse"}`,children:[l("div",{className:"flex flex-col justify-center items-center md:items-start text-center gap-1 px-4 py-8 md:text-left md:ml-14 md:px-0 md:max-w-[50vw]",children:[e("div",{className:"flex flex-wrap justify-center md:justify-start gap-2 font-display font-black text-6xl",children:d(c)}),t&&l("p",{className:"bg-black text-white font-display font-bold rounded-xl text-lg pl-2 py-1",children:[t.month,e("span",{className:"bg-csSecondary text-csPrimary rounded-xl ml-2 px-2 py-1",children:t.time})]}),e("p",{className:"text-2xl xl:w-3/6 text-white",children:m})]}),e("div",{className:"hidden md:block",children:e("img",{className:`${a?"hero-img-inverse":"hero-img"} brightness-75 object-cover`,src:n,alt:"feature image"})})]})}export{f as default};
