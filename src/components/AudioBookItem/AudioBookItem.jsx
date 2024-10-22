import React from 'react';
import style from './AudioBookItem.module.css';





const AudioBookItem = ({audioImg, audio}) => {
  return (
    <div className={style.AudioItemContainer}>
        <img src={audioImg} className={style.AudioItemImg}/>
        <audio controls className={style.AudioItemAudio}>
        <source src={audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

export default AudioBookItem