import React from "react";

export function Checkbox({checked,defaultChecked,label,disabled,onChange,style}){
  const [inner,setInner]=React.useState(!!defaultChecked);
  const on=checked===undefined?inner:checked;
  return <label style={{display:"inline-flex",alignItems:"center",gap:"var(--space-3)",cursor:disabled?"default":"pointer",opacity:disabled?.45:1,...style}}>
    <span onClick={()=>{if(disabled)return;if(checked===undefined)setInner(!on);onChange&&onChange(!on);}}
      style={{width:"18px",height:"18px",flex:"0 0 18px",display:"grid",placeItems:"center",background:on?"var(--brass-500)":"var(--paper)",border:"var(--border-w) solid "+(on?"var(--brass-500)":"var(--border-strong)"),borderRadius:"var(--radius-xs)",transition:"background var(--dur-fast) var(--ease-standard)"}}>
      {on&&<span style={{width:"9px",height:"5px",borderLeft:"2px solid var(--ink-1000)",borderBottom:"2px solid var(--ink-1000)",transform:"rotate(-45deg) translateY(-1px)"}}/>}
    </span>
    {label&&<span style={{fontFamily:"var(--font-body)",fontSize:"var(--fs-sm)",color:"var(--text-body)"}}>{label}</span>}
  </label>;
}
