import React from "react";

/* The source materials contain no logo file for this brand, so the wordmark is set in type. */
export function Wordmark({tone="light",size=38,tagline="мужские стрижки",style}){
  const color=tone==="light"?"var(--paper)":"var(--ink-1000)";
  return <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--space-2)",color,...style}}>
    <span style={{fontFamily:"var(--font-script)",fontSize:size,lineHeight:1}}>Парикмахерская</span>
    <span style={{fontFamily:"var(--font-display)",fontSize:Math.max(10,size*0.3),letterSpacing:"var(--ls-label)",textTransform:"uppercase",fontWeight:"var(--fw-medium)"}}>нормального человека</span>
    {tagline&&<span style={{display:"flex",alignItems:"center",gap:"var(--space-3)",fontFamily:"var(--font-body)",fontSize:Math.max(9,size*0.26),letterSpacing:"var(--ls-heading)",textTransform:"uppercase",opacity:.85}}>
      <span style={{width:"18px",height:"1px",background:"currentColor"}}/>{tagline}<span style={{width:"18px",height:"1px",background:"currentColor"}}/>
    </span>}
  </div>;
}
