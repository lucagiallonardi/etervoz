import React from 'react'
import style from "./OurVoices.module.css";
import img from "../../media/img/img1.png"
import { IconPlayerPlay } from '@tabler/icons-react';


const OurVoices = () => {
  return (
    <div className={style.ourVoicesContainer} id='voices'>
        <div className={style.divVoice}><h1>Our Voices</h1>
        <div className={style.divButton}>View more</div></div>
        <div className={style.divVoice}>
         <div className={style.imgArrows}>
            <div className={style.leftarrow}><IconPlayerPlay/></div>
                <div className={style.voiceDiv}>
                    <img src={img}/>
                    <div className={style.reproductor}></div>
                </div>
            <div className={style.rightarrow}><IconPlayerPlay/></div>
         </div>
        </div>
    </div>
  )
}

export default OurVoices