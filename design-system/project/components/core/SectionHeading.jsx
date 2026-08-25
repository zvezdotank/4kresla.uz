import React from "react";
import { Rule } from "./Rule.jsx";

export function SectionHeading({title,subtitle,align="center",tone="dark",rule=false,as="h2",style}){
  const Tag=as;
  const color=tone==="light"?"var(--paper)":"var(--text-primary)";
  return <div style={{textAlign:align,display:"flex",flexDirection:"column",alignItems:align==="center"?"center":"flex-start",gap:"var(--space-3)",...style}}>
    <Tag style={{fontFamily:"var(--font-display)",fontWeight:"var(--fw-bold)",fontSize:"var(--fs-h2)",lineHeight:"var(--lh-heading)",letterSpacing:"var(--ls-heading)",textTransform:"uppercase",color,margin:0}}>{title}</Tag>
    {rule&&<Rule/>}
    {subtitle&&<p style={{font:"var(--type-body)",color:tone==="light"?"rgba(255,255,255,.72)":"var(--text-body)",margin:0,maxWidth:"58ch"}}>{subtitle}</p>}
  </div>;
}
