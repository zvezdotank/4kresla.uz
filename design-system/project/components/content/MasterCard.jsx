import React from "react";

export function MasterCard({name,photo,role,style}){
  const [hover,setHover]=React.useState(false);
  return <figure onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{margin:0,display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-4)",...style}}>
    <div style={{width:"100%",aspectRatio:"1/1",overflow:"hidden",background:"var(--surface-photo)"}}>
      {photo&&<img src={photo} alt={name} style={{width:"100%",height:"100%",objectFit:"cover",filter:"var(--photo-filter)",transform:hover?"scale(1.04)":"none",transition:"transform var(--dur-slow) var(--ease-out)"}}/>}
    </div>
    <figcaption style={{textAlign:"center"}}>
      <div style={{font:"var(--type-label)",fontSize:"var(--fs-sm)",letterSpacing:"var(--ls-heading)",textTransform:"uppercase",color:hover?"var(--brass-600)":"var(--text-primary)",transition:"color var(--dur-base) var(--ease-standard)"}}>{name}</div>
      {role&&<div style={{fontFamily:"var(--font-body)",fontSize:"var(--fs-sm)",color:"var(--text-muted)",marginTop:"4px"}}>{role}</div>}
    </figcaption>
  </figure>;
}
