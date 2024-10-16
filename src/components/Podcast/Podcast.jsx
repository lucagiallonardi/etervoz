import React from 'react'
import style from "./Podcast.module.css";
import imgPodcast from '../../media/img/podcast.png'

const Podcast = () => {
  return (
    <div className={style.podcastContainer}>
        <img src={imgPodcast} alt=''/>
        <div><p>Edición y restauración de audio</p><h1>La calidad sonora que tu podcast merece</h1>
        <div className={style.divButton}>+ info</div></div>
    </div>
  )
}

export default Podcast