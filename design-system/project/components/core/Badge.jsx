import React from "react";

export function Badge({children,tone="brass",style}){
  const tones={brass:{background:"var(--brass-500)",color:"var(--ink-1000)"},dark:{background:"var(--ink-1000)",color:"var(--paper)"},outline:{background:"transparent",color:"var(--text-primary)",boxShadow:"inset 0 0 0 1px var(--border-strong)"}};
  return <span style={{display:"inline-block",padding:"5px 10px",font:"var(--type-label)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",borderRadius:"var(--radius-xs)",...tones[tone],...style}}>{children}</span>;
}
