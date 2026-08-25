import React from "react";

export function GalleryTile({src,alt="",ratio="16/9",onClick,style}){
  const [hover,setHover]=React.useState(false);
  return <button onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{padding:0,border:"none",display:"block",width:"100%",aspectRatio:ratio,overflow:"hidden",cursor:onClick?"pointer":"default",background:"var(--surface-photo)",position:"relative",...style}}>
    <img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover",filter:"var(--photo-filter)",opacity:hover?.78:1,transition:"opacity var(--dur-base) var(--ease-standard)"}}/>
  </button>;
}
