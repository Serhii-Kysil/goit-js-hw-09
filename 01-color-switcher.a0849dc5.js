const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;t.disabled=!1,e.disabled=!0,t.addEventListener("click",(function(){this.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){this.disabled=!0,t.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.a0849dc5.js.map