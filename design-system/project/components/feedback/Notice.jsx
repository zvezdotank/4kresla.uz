import React from "react";

export function Notice({tone="info",children,style}){
  const tones={info:{border:"var(--border-hairline)",bar:"var(--ink-400)"},success:{border:"var(--border-hairline)",bar:"var(--status-success)"},warning:{border:"var(--border-hairline)",bar:"var(--status-warning)"},danger:{border:"var(--border-hairline)",bar:"var(--status-danger)"}};
  const t=tones[tone];
  return <div style={{display:"flex",gap:"var(--space-4)",padding:"var(--space-4)",background:"var(--surface-alt)",border:"var(--border-w) solid "+t.border,...style}}>
    <span style={{width:"3px",flex:"0 0 3px",background:t.bar}}/>
    <span style={{fontFamily:"var(--font-body)",fontSize:"var(--fs-sm)",color:"var(--text-body)",lineHeight:"var(--lh-body)"}}>{children}</span>
  </div>;
}
