import React from "react";

export function PriceItem({service,price,currency="рублей",style}){
  return <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",padding:"var(--space-4) 0",...style}}>
    <span style={{font:"var(--type-price)",letterSpacing:"var(--ls-heading)",textTransform:"uppercase",color:"var(--text-primary)",whiteSpace:"nowrap"}}>{service}</span>
    <span aria-hidden="true" style={{flex:1,height:"2px",background:"var(--brass-500)",minWidth:"32px",maxWidth:"110px"}}/>
    <span style={{font:"var(--type-price)",letterSpacing:"var(--ls-heading)",textTransform:"uppercase",color:"var(--text-primary)",whiteSpace:"nowrap",marginLeft:"auto"}}>{price} {currency}</span>
  </div>;
}
