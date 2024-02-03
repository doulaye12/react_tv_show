import s from "./style.module.css";
import React from 'react';

export default function Logo({image, title, subTitle}) {
  return (
    <div>
        <div className={s.container}>
            <img src={image} className={s.image} alt='' />
            <span className={s.title} > {title} </span>
        </div>
        <span className={s.subtitle} > {subTitle} </span>
    </div>
  )
}

