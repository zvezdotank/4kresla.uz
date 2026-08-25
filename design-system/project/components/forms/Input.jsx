import React from "react";

export function Input({value,defaultValue,placeholder,type="text",disabled,invalid,onChange,style,...rest}){
  const [focus,setFocus]=React.useState(false);
  return <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} onChange={onChange}
    onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}
    style={{...{width:"100%",padding:"13px 14px",font:"var(--type-body)",color:"var(--text-primary)",background:"var(--paper)",border:"var(--border-w) solid var(--border-hairline)",borderRadius:"var(--radius-xs)",outline:"none",transition:"border-color var(--dur-fast) var(--ease-standard)"},borderColor:invalid?"var(--status-danger)":focus?"var(--brass-500)":"var(--border-hairline)",background:disabled?"var(--ink-050)":"var(--paper)",...style}} {...rest}/>;
}
