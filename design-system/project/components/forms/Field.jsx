import React from "react";

export function Field({label,hint,error,required,children,style}){
  return <label style={{display:"flex",flexDirection:"column",gap:"var(--space-2)",...style}}>
    {label&&<span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:"var(--text-primary)"}}>{label}{required&&<span style={{color:"var(--brass-600)"}}> *</span>}</span>}
    {children}
    {(error||hint)&&<span style={{fontFamily:"var(--font-body)",fontSize:"var(--fs-sm)",color:error?"var(--status-danger)":"var(--text-muted)"}}>{error||hint}</span>}
  </label>;
}
