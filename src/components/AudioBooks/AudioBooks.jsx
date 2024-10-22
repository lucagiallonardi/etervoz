import React from 'react'
import style from "./AudioBooks.module.css";
import AudioBookItem from '../AudioBookItem/AudioBookItem';
import img1 from '../../media/audiobooks/arlette/Arlette - Portada.png';
import img2 from '../../media/img/img2.png';
import img3 from '../../media/img/img3.png';
import audio from '../../media/audiobooks/arlette/Arlette.mp3';

const AudioBooks = () => {
  return (
    <div className={style.audioBooksContainer} id='edit'>
      <h1>Edición de Audiolibros</h1>
      <div className={style.carouselContainer}>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img1} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img2} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img3} audio={audio} className={style.carouselItem}/>
      </div>
  
    </div>
    <div class="carousel-item">
    <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img1} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img2} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img3} audio={audio} className={style.carouselItem}/>
    </div>

    </div>
    <div class="carousel-item">
    <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img1} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img2} audio={audio} className={style.carouselItem}/>
        <AudioBookItem audioImg={img3} audio={audio} className={style.carouselItem}/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  )
}

export default AudioBooks