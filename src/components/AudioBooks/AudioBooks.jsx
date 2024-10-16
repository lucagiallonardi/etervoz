import React from 'react'
import style from "./AudioBooks.module.css";
import abImg1 from '../../media/img/img1.png'
import abImg2 from '../../media/img/img2.png'
import abImg3 from '../../media/img/img3.png'
import { IconPlayerPlay } from '@tabler/icons-react';

const AudioBooks = () => {
  return (
    <div className={style.audioBooksContainer} id='edit'>
      <h1>Edición de Audiolibros</h1>
      <div className={style.audioCarouselDiv}>
        <div className={style.leftarrow}><IconPlayerPlay/></div>
      <div className={style.audioBooksGrid}>
        <div className={style.imgCont}><img src={abImg1}/><div className={style.reproductor}></div></div>
        <div className={style.imgCont}><img src={abImg2}/><div className={style.reproductor}></div></div>
        <div className={style.imgCont}><img src={abImg3}/><div className={style.reproductor}></div></div>
      </div>
      <div className={style.rightarrow}><IconPlayerPlay/></div>
      </div>
    </div>
  )
}

export default AudioBooks