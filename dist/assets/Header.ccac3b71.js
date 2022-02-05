import{r as s,j as e,F as m,a as c}from"./vendor.a087aa2e.js";function h(){const a="/images/dark-mode.png",i="/images/light-mode.png",[l,o]=s.exports.useState(a),d=()=>{localStorage.theme==="dark"||!localStorage.theme?localStorage.theme="light":localStorage.theme==="light"&&(localStorage.theme="dark"),r()},r=()=>{localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?(document.documentElement.classList.add("dark"),o(a)):(document.documentElement.classList.remove("dark"),o(i))};return s.exports.useEffect(()=>{r()},[]),e(m,{children:e("button",{className:"w-5 h-5",onClick:d,children:e("img",{src:l,alt:"toggle theme"})})})}function f(){const[a,i]=s.exports.useState([{name:"Home",segment:"/",active:!1},{name:"Projects",segment:"/projects",active:!1},{name:"Partners",segment:"/partners",active:!1},{name:"Gallery",segment:"/gallery",active:!1},{name:"About Us",segment:"/about",active:!1}]),[l,o]=s.exports.useState(!1),d=()=>{o(t=>!t)},r=t=>t.split("/")[1]===window.location.pathname.split("/")[1];return s.exports.useEffect(()=>{const t=a.map(n=>({...n,active:r(n.segment)}));i(t)},[]),e("nav",{className:"border-gray-200 px-4 md:px-14 py-2.5 header-bg text-white fixed top-0 w-full z-50",children:c("div",{className:"flex flex-wrap justify-between items-center",children:[c("div",{className:"flex flex-wrap w-full md:w-fit justify-between md:justify-start items-center text-center",children:[e("a",{href:"/",className:"mr-10",children:e("img",{src:"/images/logo/64px.png"})}),c("button",{onClick:d,type:"button",className:"inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[e("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})}),e("svg",{className:"hidden w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]}),e("div",{className:`${!l&&"hidden"} w-full flex justify-center md:block md:w-auto`,children:e("ul",{className:"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm font-bold",children:a.map((t,n)=>e("li",{children:e("a",{href:t.segment,className:`${t.active?"text-csSecondary hover:text-csSecondary":"hover:text-white"} hover:underline decoration-csSecondary decoration-2 underline-offset-4 text-base block py-2 pr-4 pl-3 md:p-0`,children:t.name})},t.name+n))})})]}),c("div",{className:`${!l&&"hidden"} ${l&&"flex"} md:flex md:flex-row flex-wrap flex-col gap-4 items-center justify-center w-full md:w-fit`,children:[e("a",{href:"#",className:"bg-csPrimary rounded py-1 px-2 text-white block font-bold",children:"Register"}),e("div",{className:"h-4 border-l-2 hidden md:block"}),e(h,{}),e("a",{href:"https://github.com/Simperfy/CS-EXPO-2022",className:"w-5 h-5 block",children:e("img",{src:"/images/github-logo.png",alt:"github logo"})})]})]})})}export{f as default};