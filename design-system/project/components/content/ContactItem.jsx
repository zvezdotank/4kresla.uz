import React from "react";
import { Icon } from "../core/Icon.jsx";

export function ContactItem({icon,label,value,tone="dark",style}){
  const light=tone==="light";
  return <div style={{display:"flex",alignItems:"flex-start",gap:"var(--space-3)",...style}}>
    <span style={{width:"34px",height:"34px",flex:"0 0 34px",display:"grid",placeItems:"center",borderRadius:"var(--radius-pill)",border:"var(--border-w) solid var(--border-accent)"}}>
      <Icon name={icon} size={16} color="var(--brass-500)"/>
    </span>
    <span>
      <span style={{display:"block",font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:light?"var(--paper)":"var(--text-primary)"}}>{label}</span>
      <span style={{display:"block",fontFamily:"var(--font-body)",fontSize:"var(--fs-sm)",color:light?"rgba(255,255,255,.7)":"var(--text-body)",marginTop:"5px"}}>{value}</span>
    </span>
  </div>;
}
