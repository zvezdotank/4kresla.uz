import React from "react";
import { Icon } from "../core/Icon.jsx";

export function NavBar({items=[],active,phone,onSelect,style}){
  return <nav style={{height:"var(--nav-h)",background:"var(--surface-dark)",display:"flex",alignItems:"center",padding:"0 var(--space-5)",gap:"var(--space-6)",...style}}>
    <span style={{display:"grid",placeItems:"center",color:"var(--paper)"}}><Icon name="scissors" size={20} color="var(--paper)"/></span>
    <ul style={{listStyle:"none",display:"flex",gap:"var(--space-6)",margin:"0 auto",padding:0}}>
      {items.map(i=>{const on=i===active;return <li key={i}>
        <a href="#" onClick={e=>{e.preventDefault();onSelect&&onSelect(i)}}
          style={{font:"var(--type-nav)",letterSpacing:"var(--ls-label)",textTransform:"uppercase",color:on?"var(--brass-500)":"var(--paper)",paddingBottom:"6px",borderBottom:"2px solid "+(on?"var(--brass-500)":"transparent"),transition:"color var(--dur-base) var(--ease-standard)"}}>{i}</a>
      </li>;})}
    </ul>
    {phone&&<span style={{font:"var(--type-nav)",letterSpacing:"var(--ls-heading)",color:"var(--paper)"}}>{phone}</span>}
  </nav>;
}
