import React from 'react'
import s  from "./style.module.css";
import { TVShowListItem } from '../TVShowListItem/TVShowListItem';

export function TVShowList({tvShowList, onClickItem,}) {
  return (
    <>
        <div className={s.title}>You may also like :</div>
        <div className={s.list}>
            {tvShowList.map((tvshow) => (
                <span key={tvShowList.id} className={s.tv_show_list_item}>
                    <TVShowListItem tvshow={tvshow} onClick={onClickItem} />
                </span>
            ))}
        </div>
    </>
  )
}
