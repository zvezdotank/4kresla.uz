import React from "react";

export function Rule({width="var(--rule-w)",tone="brass",style}){
  return <span aria-hidden="true" style={{display:"block",width,height:"2px",background:tone==="brass"?"var(--brass-500)":"var(--border-hairline)",...style}}/>;
}
