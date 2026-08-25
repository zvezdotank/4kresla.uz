import React from "react";
import { Field } from "./Field.jsx";
import { Input } from "./Input.jsx";
import { Select } from "./Select.jsx";
import { Checkbox } from "./Checkbox.jsx";
import { Button } from "../core/Button.jsx";

export function BookingForm({services=["Мужская стрижка","Стрижка бороды/усов","Опасное бритьё","Стрижка + бритьё"],masters=["Иванов Михаил","Петров Александр","Миронов Артем","Тихонов Илья","Фадеев Игорь"],onSubmit,style}){
  const [done,setDone]=React.useState(false);
  return <form onSubmit={e=>{e.preventDefault();setDone(true);onSubmit&&onSubmit();}} style={{display:"grid",gap:"var(--space-4)",...style}}>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
      <Field label="Имя" required><Input placeholder="Как к вам обращаться" /></Field>
      <Field label="Телефон" required><Input type="tel" placeholder="+7 (900) 000-00-00" /></Field>
    </div>
    <Field label="Услуга"><Select placeholder="Выберите услугу" options={services}/></Field>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-4)"}}>
      <Field label="Мастер"><Select placeholder="Любой свободный" options={masters}/></Field>
      <Field label="Дата и время"><Input type="date"/></Field>
    </div>
    <Checkbox defaultChecked label="Согласен на обработку персональных данных"/>
    <Button size="lg" fullWidth>{done?"Заявка принята":"Записаться"}</Button>
  </form>;
}
