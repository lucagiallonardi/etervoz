import React from 'react'
import style from "./AudioBooks.module.css";
import abImg1 from '../../media/img/img1.png'
import abImg2 from '../../media/img/img2.png'
import abImg3 from '../../media/img/img3.png'
import abImg4 from '../../media/img/img4.png'
import abImg5 from '../../media/img/img5.png'
import abImg6 from '../../media/img/img6.png'

const AudioBooks = () => {
  return (
    <div className={style.audioBooksContainer} id='edit'>
      <h1>Edición de Audiolibros</h1>
      <div className={style.audioBooksGrid}>
        <img src={abImg1}/>
        <img src={abImg2}/>
        <img src={abImg3}/>
        <img src={abImg4}/>
        <img src={abImg5}/>
        <img src={abImg6}/>
      </div>
    </div>
  )
}

export default AudioBooks