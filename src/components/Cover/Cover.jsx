import React from 'react'
import imgCover from "../../media/img/UNA VOZ ÚNICA (5).png";
import  style from "./Cover.module.css";

const Cover = () => {
  return (
    <div className={style.cover}>
        <img src={imgCover}/>
    </div>
  )
}

export default Cover