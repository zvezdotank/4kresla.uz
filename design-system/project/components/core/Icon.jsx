import React from "react";

/* Intentional addition: the source page used thin line icons but shipped no icon set,
   so this wraps Lucide (CDN) to keep stroke weight consistent. */
export function Icon({name,size=18,color="currentColor",strokeWidth=1.5,style}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    if(!ref.current)return;
    if(window.lucide&&window.lucide.createIcons)window.lucide.createIcons({nameAttr:"data-lucide"});
    const svg=ref.current.querySelector("svg");
    if(svg){svg.setAttribute("width",size);svg.setAttribute("height",size);svg.setAttribute("stroke-width",strokeWidth);}
  },[name,size,strokeWidth]);
  return <span ref={ref} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",color,width:size,height:size,...style}}><i data-lucide={name}/></span>;
}
