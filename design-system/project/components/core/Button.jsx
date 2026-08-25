import React from "react";

const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",fontFamily:"var(--font-display)",fontWeight:"var(--fw-bold)",textTransform:"uppercase",letterSpacing:"var(--ls-label)",borderRadius:"var(--radius-xs)",cursor:"pointer",transition:"background var(--dur-base) var(--ease-standard),color var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)",textDecoration:"none",whiteSpace:"nowrap"};
const sizes={sm:{padding:"9px 18px",fontSize:"var(--fs-xs)"},md:{padding:"14px 32px",fontSize:"var(--fs-sm)"},lg:{padding:"18px 44px",fontSize:"var(--fs-body)"}};

export function Button({variant="primary",size="md",disabled=false,fullWidth=false,href,children,onClick,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const [press,setPress]=React.useState(false);
  const variants={
    primary:{background:hover?"var(--action-fill-hover)":"var(--action-fill)",color:"var(--action-text)",border:"var(--border-w) solid transparent"},
    outline:{background:hover?"var(--brass-500)":"transparent",color:hover?"var(--ink-1000)":"var(--brass-500)",border:"var(--border-w) solid var(--brass-500)"},
    ghost:{background:"transparent",color:hover?"var(--brass-500)":"var(--paper)",border:"var(--border-w) solid var(--border-inverse)"},
    dark:{background:hover?"var(--ink-700)":"var(--ink-1000)",color:"var(--paper)",border:"var(--border-w) solid transparent"}
  };
  const s={...base,...sizes[size],...variants[variant],width:fullWidth?"100%":undefined,
    opacity:disabled?.4:1,pointerEvents:disabled?"none":undefined,
    transform:press?"translateY(1px)":"none",...style};
  const Tag=href?"a":"button";
  return <Tag href={href} style={s} onClick={onClick} disabled={Tag==="button"?disabled:undefined}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>{setHover(false);setPress(false)}}
    onMouseDown={()=>setPress(true)} onMouseUp={()=>setPress(false)} {...rest}>{children}</Tag>;
}
