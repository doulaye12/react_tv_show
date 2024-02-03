import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import React from 'react'

export function TVShowListItem({tvshow, onClick}) {
  return (
    <div onClick={() => onClick(tvshow)} className={s.container}>
        <img className={s.image} src={SMALL_IMG_COVER_BASE_URL + tvshow.backdrop_path} alt={tvshow.name} />
        <div className={s.title} >
          {tvshow.name}
        </div>
    </div>
  )
}
