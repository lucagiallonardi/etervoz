import React from 'react'
import style from "./OurVoices.module.css";
import AudioBookItem from '../AudioBookItem/AudioBookItem';
import img from '../../media/audiobooks/arlette/Arlette - Portada.png';
import img1 from '../../media/img/img1.png';
import img2 from '../../media/img/img2.png';
import img3 from '../../media/img/img3.png';
import audio from '../../media/audiobooks/arlette/Arlette.mp3';


const OurVoices = () => {
  return (
    <div className={style.ourVoicesContainer} id='voices'>
        <div className={style.divVoice}><h1>Our Voices</h1>
        <div className={style.divButton}>View more</div></div>
        <div className={style.divVoice}>
        <div className={style.carouselContainer}>
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img} audio={audio} className={style.carouselItem}/>
      </div>
  
    </div>
    <div class="carousel-item">
    <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img1} audio={audio} className={style.carouselItem}/>
    </div>

    </div>

    <div class="carousel-item">
    <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img2} audio={audio} className={style.carouselItem}/>
    </div>

    </div>
    <div class="carousel-item">
    <div className={style.carouselDiv}>
        <AudioBookItem audioImg={img3} audio={audio} className={style.carouselItem}/>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
        </div>
    </div>
  )
}

export default OurVoices