import React from 'react'
import s from "./style.module.css";
import { Star as StarEmpty, StarFill, StarHalf } from 'react-bootstrap-icons';
export function FiveStarRating({ rating }) {

    const starList = [];

    const starFillCount = Math.floor(rating);
    const haveHalfStarCount = (rating - starFillCount) >= 0.5;
    const starEmptyCount = 5 - starFillCount - (haveHalfStarCount ? 1 : 0);

    for (let i = 0; i < starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />);
    }
    
    if (haveHalfStarCount) {
        starList.push(<StarHalf/>)
    }

    for (let i = 0; i < starEmptyCount; i++) {
        starList.push(<StarEmpty key={`star-empty ${i}`} />);
    }

    return (
        <div className={s.star} >
            {starList}
        </div>
    )
}


