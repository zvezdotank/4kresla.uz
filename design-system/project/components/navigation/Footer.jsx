import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Footer({credit="Парикмахерская нормального человека",socials=["facebook","twitter","instagram"],note="ВСЕ ПРАВА ЗАЩИЩЕНЫ",style}){
  return <footer style={{background:"var(--ink-1000)",color:"var(--paper)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"var(--space-5) var(--space-6)",gap:"var(--space-5)",...style}}>
    <span style={{fontFamily:"var(--font-script)",fontSize:"22px"}}>{credit}</span>
    <span style={{display:"flex",gap:"var(--space-4)"}}>
      {socials.map(s=><a key={s} href="#" style={{width:"30px",height:"30px",display:"grid",placeItems:"center",borderRadius:"var(--radius-pill)",border:"var(--border-w) solid var(--border-inverse)",color:"var(--paper)"}}><Icon name={s} size={14} color="currentColor"/></a>)}
    </span>
    <span style={{font:"var(--type-label)",letterSpacing:"var(--ls-label)",color:"rgba(255,255,255,.6)"}}>{note}</span>
  </footer>;
}
