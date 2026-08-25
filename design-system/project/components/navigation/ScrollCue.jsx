import React from "react";

export function ScrollCue({onClick,style}){
  return <button onClick={onClick} aria-label="Листать вниз" style={{width:"26px",height:"40px",borderRadius:"var(--radius-pill)",border:"var(--border-w) solid rgba(255,255,255,.7)",background:"transparent",display:"grid",placeItems:"center",cursor:"pointer",gap:"2px",padding:"6px 0",...style}}>
    {[0,1,2].map(i=><span key={i} style={{display:"block",width:"7px",height:"7px",borderLeft:"1.5px solid rgba(255,255,255,.8)",borderBottom:"1.5px solid rgba(255,255,255,.8)",transform:"rotate(-45deg)",opacity:1-i*0.28}}/>)}
  </button>;
}
