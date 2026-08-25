const { Dialog, BookingForm, Notice, Button } = window.DesignSystem_e7043d;

function BookingDialog({open,onClose}){
  const [sent,setSent]=React.useState(false);
  if(!open)return null;
  return <Dialog title={sent?"Спасибо":"Записаться онлайн"} onClose={()=>{setSent(false);onClose()}}>
    {sent
      ? <div style={{display:"grid",gap:"var(--space-5)"}}>
          <Notice tone="success">Заявка принята. Перезвоним в течение 15 минут, чтобы подтвердить время.</Notice>
          <Button fullWidth variant="dark" onClick={()=>{setSent(false);onClose()}}>Закрыть</Button>
        </div>
      : <BookingForm onSubmit={()=>setSent(true)}/>}
  </Dialog>;
}

function Lightbox({index,onClose}){
  if(index===null)return null;
  const list=window.GALLERY;
  return <div onClick={onClose} style={{position:"fixed",inset:0,background:"var(--overlay-photo-strong)",display:"grid",placeItems:"center",zIndex:60,padding:"var(--space-7)"}}>
    <img src={list[index]} alt="" style={{maxWidth:"90%",maxHeight:"80%",objectFit:"contain",filter:"var(--photo-filter)",borderTop:"3px solid var(--brass-500)"}}/>
  </div>;
}
Object.assign(window,{BookingDialog,Lightbox});
