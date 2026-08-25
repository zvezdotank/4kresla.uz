const { NavBar, Footer, ScrollCue, Button, SectionHeading, Wordmark, MasterCard, PriceItem, GalleryTile, ContactItem } = window.DesignSystem_e7043d;
const P="../../assets/photos/";
const NAV=["Салон","Команда","Прайс","Галерея","Контакты"];
const MASTERS=[["Иванов Михаил","master-ivanov.png"],["Петров Александр","master-petrov.png"],["Миронов Артем","master-mironov.png"],["Тихонов Илья","master-tihonov.png"],["Фадеев Игорь","master-fadeev.png"]];
const PRICES=[["Мужская стрижка",1200],["Стрижка бороды/усов",800],["Детская стрижка",1000],["Опасное бритьё",1000],["Стрижка машинкой",800],["Стрижка + бритьё",2000]];
const GALLERY=[1,2,3,4,5].map(i=>P+"gallery-"+i+".png");
const Container=({children,style})=>(<div style={{maxWidth:"var(--container-max)",margin:"0 auto",padding:"0 var(--container-pad)",...style}}>{children}</div>);

function Hero({onBook,onScroll}){
  return <section style={{position:"relative",height:"520px",overflow:"hidden",background:"var(--surface-photo)"}}>
    <img src={P+"interior-wide.png"} alt="" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 40%",filter:"var(--photo-filter)"}}/>
    <div style={{position:"absolute",inset:0,background:"var(--overlay-photo)"}}/>
    <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"var(--space-6)"}}>
      <Wordmark size={54}/>
      <Button size="lg" onClick={onBook}>Записаться онлайн</Button>
    </div>
    <div style={{position:"absolute",left:"50%",bottom:"22px",transform:"translateX(-50%)"}}><ScrollCue onClick={onScroll}/></div>
  </section>;
}

function Welcome(){
  return <section id="Салон" style={{background:"var(--surface-alt)",padding:"var(--section-y) 0"}}>
    <Container><SectionHeading title="Добро пожаловать!"/>
      <p style={{textAlign:"center",maxWidth:"78ch",margin:"var(--space-5) auto 0",font:"var(--type-body)",color:"var(--text-body)",textWrap:"pretty"}}>
        Это барбершоп, а не салон красоты. Это просто сеть мужских парикмахерских. Нам всё равно, есть ли у наших мастеров бороды и татуировки. Нам не важно, кого стричь — студента или члена списка Forbes. Мы не тратим деньги на отделку своих заведений ценными породами дерева. У нас нет маникюра и мы не камуфлируем седину. Мы просто стрижём мужчин. И делаем это лучше всех.
      </p></Container>
  </section>;
}

function Team(){
  return <section id="Команда" style={{background:"var(--surface-alt)",paddingBottom:"var(--section-y)"}}>
    <Container><SectionHeading title="Наша команда"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"var(--grid-gap)",marginTop:"var(--space-7)"}}>
        {MASTERS.map(([n,p])=><MasterCard key={n} name={n} photo={P+p}/>)}
      </div></Container>
  </section>;
}

function Prices(){
  return <section id="Прайс" style={{background:"var(--surface-alt)",paddingBottom:"var(--section-y)"}}>
    <Container><SectionHeading title="Прайс-лист"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"var(--space-9)",marginTop:"var(--space-6)"}}>
        {PRICES.map(([s,p])=><PriceItem key={s} service={s} price={p}/>)}
      </div></Container>
  </section>;
}

function GalleryBand({onOpen}){
  return <section id="Галерея">
    <img src={P+"interior-wide.png"} alt="" style={{width:"100%",height:"470px",objectFit:"cover",filter:"var(--photo-filter)"}}/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"var(--space-3)",padding:"var(--space-3) 0",background:"var(--paper)"}}>
      {GALLERY.map((src,i)=><GalleryTile key={src} src={src} ratio="16/9" onClick={()=>onOpen(i)}/>)}
    </div>
  </section>;
}

function Contacts(){
  return <section id="Контакты" style={{background:"var(--surface-alt)",padding:"var(--section-y-tight) 0 0"}}>
    <Container><SectionHeading title="Контакты"/>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"var(--grid-gap)",margin:"var(--space-7) 0 var(--space-7)"}}>
        <ContactItem icon="clock" label="Ежедневно" value="с 9:00 до 20:00"/>
        <ContactItem icon="mail" label="Почта" value="welcome@barbershop.ru"/>
        <ContactItem icon="phone" label="Телефон" value="8 (900) 020-83-22"/>
        <ContactItem icon="map-pin" label="Наш адрес" value="г. Москва, ул. Строителей д.2"/>
      </div></Container>
    <img src={P+"map-moscow.png"} alt="Карта" style={{width:"100%",height:"150px",objectFit:"cover"}}/>
  </section>;
}
Object.assign(window,{NavBar,Footer,Button,Hero,Welcome,Team,Prices,GalleryBand,Contacts,Container,NAV,GALLERY});
