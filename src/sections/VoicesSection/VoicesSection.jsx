import React from 'react';
import style from './VoicesSecion.module.css';
import AudioBookItem from '../../components/AudioBookItem/AudioBookItem';
import img from '../../media/audiobooks/arlette/Arlette - Portada.png';
import img1 from '../../media/img/img1.png';
import img2 from '../../media/img/img2.png';
import img3 from '../../media/img/img3.png';
import audio from '../../media/audiobooks/arlette/Arlette.mp3';

const VoicesSection = () => {
  return (
    <div className={style.voicesSectionContainer}>
        <AudioBookItem audioImg={img} audio={audio}/>
        <AudioBookItem audioImg={img1} audio={audio}/>
        <AudioBookItem audioImg={img2} audio={audio}/>
        <AudioBookItem audioImg={img3} audio={audio}/>
        <AudioBookItem audioImg={img3} audio={audio}/>
        <AudioBookItem audioImg={img3} audio={audio}/>
    </div>
  );
}

export default VoicesSection