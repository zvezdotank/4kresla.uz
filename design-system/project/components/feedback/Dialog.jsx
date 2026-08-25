import React from "react";
import { Icon } from "../core/Icon.jsx";

export function Dialog({open=true,title,onClose,width=560,children,style}){
  if(!open)return null;
  return <div style={{position:"fixed",inset:0,background:"var(--overlay-photo-strong)",display:"grid",placeItems:"center",padding:"var(--space-5)",zIndex:50}} onClick={onClose}>
    <div role="dialog" onClick={e=>e.stopPropagation()}
      style={{width:"100%",maxWidth:width,background:"var(--surface-card)",boxShadow:"var(--shadow-raised)",borderTop:"3px solid var(--brass-500)",padding:"var(--space-7)",position:"relative",...style}}>
      {onClose&&<button onClick={onClose} aria-label="Закрыть" style={{position:"absolute",top:"14px",right:"14px",background:"none",border:"none",cursor:"pointer",color:"var(--ink-400)"}}><Icon name="x" size={18} color="currentColor"/></button>}
      {title&&<h3 style={{marginBottom:"var(--space-5)",textAlign:"center"}}>{title}</h3>}
      {children}
    </div>
  </div>;
}
