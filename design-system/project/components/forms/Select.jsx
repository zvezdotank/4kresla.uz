import React from "react";

export function Select({value,defaultValue,options=[],placeholder,disabled,onChange,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <div style={{position:"relative",width:"100%"}}>
    <select value={value} defaultValue={defaultValue} disabled={disabled} onChange={onChange}
      onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
      style={{...{width:"100%",padding:"13px 14px",font:"var(--type-body)",color:"var(--text-primary)",background:"var(--paper)",border:"var(--border-w) solid var(--border-hairline)",borderRadius:"var(--radius-xs)",outline:"none",transition:"border-color var(--dur-fast) var(--ease-standard)"},appearance:"none",paddingRight:"38px",borderColor:focus?"var(--brass-500)":"var(--border-hairline)",background:disabled?"var(--ink-050)":"var(--paper)",...style}} {...rest}>
      {placeholder&&<option value="">{placeholder}</option>}
      {options.map(o=>{const v=typeof o==="string"?o:o.value;const l=typeof o==="string"?o:o.label;return <option key={v} value={v}>{l}</option>;})}
    </select>
    <span aria-hidden="true" style={{position:"absolute",right:"14px",top:"50%",marginTop:"-3px",width:0,height:0,borderLeft:"5px solid transparent",borderRight:"5px solid transparent",borderTop:"6px solid var(--brass-500)",pointerEvents:"none"}}/>
  </div>;
}
