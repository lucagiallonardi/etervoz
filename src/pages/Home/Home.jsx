import React from 'react'
import style from "./Home.module.css";
import NavBar from '../../components/NavBar/NavBar';
import Cover from '../../components/Cover/Cover';
import About from '../../components/About/About';
import OurServices from '../../components/OurServices/OurServices';
import OurVoices from '../../components/OutVoices/OurVoices';
import AudioBooks from '../../components/AudioBooks/AudioBooks';
import Podcast from '../../components/Podcast/Podcast';
import Whatsapp from '../../components/Whatsapp/Whatsapp';

const Home = () => {
  return (
    <div className={style.div}>
        <NavBar/>
        <Whatsapp/>
        <Cover/>
        <About/>
        <OurServices/>
        <OurVoices/>
        <AudioBooks/>
        <Podcast/>
    </div>
  )
}

export default Home